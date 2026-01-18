document.addEventListener('DOMContentLoaded', () => {
    // --- State ---
    let allQuestions = [];
    let currentExamQuestions = [];
    let currentIndex = 0;
    let score = { correct: 0, wrong: 0, empty: 0 };
    let timerInterval;
    let secondsElapsed = 0;
    let questionsSinceMotivation = 0; // Track for motivation cards

    // --- DOM Elements ---
    const screens = {
        login: document.getElementById('login-screen'),
        start: document.getElementById('start-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen')
    };

    // --- Initialization ---
    init();

    // --- LocalStorage Manager ---
    const UserProgress = {
        data: {
            solved: {}, // { qId: { correct: true/false, timestamp: 123 } }
            totalCorrect: 0,
            totalWrong: 0,
            topicStats: {} // { topicId: { correct: 0, total: 0 } }
        },

        load() {
            const stored = localStorage.getItem('meb_user_progress');
            if (stored) {
                this.data = JSON.parse(stored);
            }
        },

        save() {
            localStorage.setItem('meb_user_progress', JSON.stringify(this.data));
        },

        recordAnswer(qId, topicId, isCorrect) {
            // Update question record
            this.data.solved[qId] = {
                correct: isCorrect,
                timestamp: Date.now()
            };

            // Update totals
            if (isCorrect) this.data.totalCorrect++;
            else this.data.totalWrong++;

            // Update topic stats
            if (!this.data.topicStats[topicId]) {
                this.data.topicStats[topicId] = { correct: 0, total: 0 };
            }
            this.data.topicStats[topicId].total++;
            if (isCorrect) this.data.topicStats[topicId].correct++;

            this.save();
        },

        getStats() {
            const totalSolved = Object.keys(this.data.solved).length;
            const successRate = totalSolved === 0 ? 0 : Math.round((this.data.totalCorrect / totalSolved) * 100);
            return {
                totalSolved,
                totalCorrect: this.data.totalCorrect,
                totalWrong: this.data.totalWrong,
                successRate,
                topicStats: this.data.topicStats
            };
        },

        updateMasteryUI() {
            // Calculate Global Mastery
            // allQuestions might not be loaded yet when init runs, so check
            if (!allQuestions || allQuestions.length === 0) return;

            const totalSolved = Object.keys(this.data.solved).length;
            const totalQ = allQuestions.length;
            const percent = Math.round((totalSolved / totalQ) * 100);

            const fillEl = document.getElementById('mastery-fill');
            const rankEl = document.getElementById('mastery-percent');

            if (fillEl) fillEl.style.width = `${percent}%`;
            if (rankEl) rankEl.textContent = `%${percent}`;
        }
    };

    async function init() {
        try {
            // Load questions from global variable (loaded via script tag)
            if (typeof QUESTIONS_DB !== 'undefined') {
                allQuestions = QUESTIONS_DB;
            } else {
                throw new Error("QUESTIONS_DB bulunamadı");
            }

            // Setup Event Listeners
            document.getElementById('btn-login').addEventListener('click', checkLogin);
            document.getElementById('btn-start-exam').addEventListener('click', startExam);
            document.getElementById('btn-stats').addEventListener('click', showStats);
            document.getElementById('btn-back-home').addEventListener('click', () => showScreen('start'));
            document.getElementById('btn-next').addEventListener('click', nextQuestion);
            document.getElementById('btn-restart').addEventListener('click', () => location.reload());

            UserProgress.load(); // Load data
            UserProgress.updateMasteryUI(); // Initial Update
            initMusicPlayer(); // Setup Music

        } catch (error) {
            console.error("Veri yüklenemedi:", error);
            alert("Soru bankası yüklenirken hata oluştu: " + error.message);
        }
    }

    // --- Music Player ---
    const MUSIC_PLAYLIST = [
        { name: 'Bach - Brandenburg Concerto', url: 'https://www.mfiles.co.uk/mp3-downloads/bach-brandenburg-concerto3-1.mp3' },
        { name: 'Vivaldi - Spring', url: 'https://www.mfiles.co.uk/mp3-downloads/vivaldi-spring1.mp3' },
        { name: 'Handel - Water Music', url: 'https://www.mfiles.co.uk/mp3-downloads/handel-water-music-suite-hornpipe.mp3' },
        { name: 'Pachelbel - Canon in D', url: 'https://www.mfiles.co.uk/mp3-downloads/pachelbel-canon-in-d.mp3' },
        { name: 'Mozart - Eine Kleine', url: 'https://www.mfiles.co.uk/mp3-downloads/mozart-eine-kleine-nachtmusik-1.mp3' },
        { name: 'Beethoven - Moonlight', url: 'https://www.mfiles.co.uk/mp3-downloads/beethoven-moonlight-sonata.mp3' },
        { name: 'Chopin - Nocturne', url: 'https://www.mfiles.co.uk/mp3-downloads/chopin-nocturne-op9-no2.mp3' },
        { name: 'Debussy - Clair de Lune', url: 'https://www.mfiles.co.uk/mp3-downloads/debussy-clair-de-lune.mp3' },
        { name: 'Vivaldi - Winter', url: 'https://www.mfiles.co.uk/mp3-downloads/vivaldi-winter1.mp3' },
        { name: 'Bach - Air on G String', url: 'https://www.mfiles.co.uk/mp3-downloads/bach-air-on-the-g-string.mp3' }
    ];
    let currentTrack = 0;
    let isPlaying = false;

    function initMusicPlayer() {
        const audio = document.getElementById('bg-music');
        const btnPlay = document.getElementById('btn-music-play');
        const btnNext = document.getElementById('btn-music-next');
        const btnPrev = document.getElementById('btn-music-prev');
        const equalizer = document.getElementById('music-equalizer');

        audio.src = MUSIC_PLAYLIST[currentTrack].url;
        audio.volume = 0.3;

        btnPlay.onclick = () => {
            if (isPlaying) {
                audio.pause();
                btnPlay.textContent = '▶';
                equalizer.classList.add('paused');
            } else {
                audio.play();
                btnPlay.textContent = '⏸';
                equalizer.classList.remove('paused');
            }
            isPlaying = !isPlaying;
        };

        btnNext.onclick = () => {
            currentTrack = (currentTrack + 1) % MUSIC_PLAYLIST.length;
            audio.src = MUSIC_PLAYLIST[currentTrack].url;
            if (isPlaying) audio.play();
        };

        btnPrev.onclick = () => {
            currentTrack = (currentTrack - 1 + MUSIC_PLAYLIST.length) % MUSIC_PLAYLIST.length;
            audio.src = MUSIC_PLAYLIST[currentTrack].url;
            if (isPlaying) audio.play();
        };

        audio.onended = () => {
            currentTrack = (currentTrack + 1) % MUSIC_PLAYLIST.length;
            audio.src = MUSIC_PLAYLIST[currentTrack].url;
            if (isPlaying) audio.play();
        };
    }

    function checkLogin() {
        const pass = document.getElementById('password-input').value;
        // Password changed to '1'
        if (pass === '1') {
            showScreen('start');
        } else {
            const err = document.getElementById('login-error');
            err.style.display = 'block';
            err.classList.add('shake');
            setTimeout(() => err.classList.remove('shake'), 500);
        }
    }

    // --- Exam Engine ---
    function startExam() {
        currentExamQuestions = generateExamSet(allQuestions);
        if (currentExamQuestions.length === 0) {
            alert("Yeterli soru bulunamadı!");
            return;
        }

        // Reset State
        currentIndex = 0;
        score = { correct: 0, wrong: 0 };
        secondsElapsed = 0;

        // UI Switch
        showScreen('quiz');
        startTimer();
        renderQuestion();
    }

    function generateExamSet(sourceQuestions) {
        if (sourceQuestions.length < 10) {
            return sourceQuestions.sort(() => Math.random() - 0.5);
        }

        // Randomly select 60 unique questions or max available
        const maxQ = Math.min(EXAM_CONFIG.totalQuestions || 60, sourceQuestions.length);
        const shuffled = [...sourceQuestions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, maxQ);
    }

    // --- Rendering ---
    function renderQuestion() {
        // Check if it's time for motivation
        questionsSinceMotivation++;
        if (questionsSinceMotivation >= 5) {
            renderMotivationCard();
            questionsSinceMotivation = 0;
            return;
        }

        const q = currentExamQuestions[currentIndex];
        const container = document.getElementById('question-container');

        document.getElementById('q-current').textContent = currentIndex + 1;
        document.getElementById('q-total').textContent = currentExamQuestions.length;

        // Template
        container.innerHTML = `
            <div class="question-header">
                <span>Konu ID: ${q.topicId || 'Genel'}</span>
            </div>
            <div class="question-text">${q.text}</div>
            <div class="options-grid" id="options-area"></div>
            
            <div id="explanation-area" class="explanation-box ${q.isAnswered ? '' : 'hidden'}">
                <div class="explanation-title">
                    <span>AÇIKLAMA / MEVZUAT</span>
                    <button class="btn-audio" onclick="speakText(this.getAttribute('data-text'))" 
                        data-text="${(q.explanation || 'Açıklama bulunmuyor.').replace(/"/g, '&quot;')}">
                        🔊 Dinle
                    </button>
                </div>
                <div class="explanation-text">
                    ${q.explanation || "Bu soru için detaylı açıklama girilmemiştir."}
                </div>
            </div>
        `;

        const optsArea = document.getElementById('options-area');

        Object.keys(q.options).forEach(key => {
            const btn = document.createElement('div');
            btn.className = 'option-btn';
            btn.dataset.key = key;
            btn.innerHTML = `
                <div class="opt-prefix">${key}</div>
                <div>${q.options[key]}</div>
            `;

            // State Restoration
            if (q.isAnswered) {
                btn.classList.add('proccessed');
                if (key === q.answer) btn.classList.add('correct');
                if (key === q.userAnswer && key !== q.answer) btn.classList.add('wrong');
                btn.onclick = null;
            } else {
                btn.onclick = () => handleAnswer(key, q.answer, btn, optsArea);
            }

            optsArea.appendChild(btn);
        });

        updateNavButtons(q.isAnswered);
        window.scrollTo(0, 0);
    }

    function handleAnswer(selectedKey, correctKey, btnElement, container) {
        if (btnElement.classList.contains('proccessed')) return;

        const q = currentExamQuestions[currentIndex];
        q.isAnswered = true;
        q.userAnswer = selectedKey;

        // Save Progress
        const isCorrect = (selectedKey === correctKey);
        UserProgress.recordAnswer(q.id, q.topicId, isCorrect);
        UserProgress.updateMasteryUI(); // Live Update

        // UI Updates
        Array.from(container.children).forEach(c => {
            c.classList.add('proccessed');
            c.onclick = null;
            if (c.dataset.key === correctKey) {
                c.classList.add('correct');
            }
        });

        if (selectedKey === correctKey) {
            score.correct++;
        } else {
            btnElement.classList.add('wrong');
            score.wrong++;
        }

        // Reveal Explanation
        const expArea = document.getElementById('explanation-area');
        expArea.classList.remove('hidden');

        updateNavButtons(true);
    }

    function updateNavButtons(isAnswered) {
        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');

        // Previous Button
        if (btnPrev) {
            btnPrev.style.display = currentIndex > 0 ? 'block' : 'none';
            btnPrev.onclick = prevQuestion;
        }

        // Next Button (Always Visible now - Free Navigation)
        if (btnNext) {
            btnNext.style.display = 'block';
            if (currentIndex === currentExamQuestions.length - 1) {
                btnNext.textContent = "Sınavı Bitir";
            } else {
                btnNext.textContent = "Sonraki Soru";
            }
        }
    }

    function prevQuestion() {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion();
            // Checking if already answered? 
            // In this simple version, going back re-renders unanswered state or we need to track state.
            // For now, let's assume re-render resets state (user can answer again? No, we should track it)
            // But user just wants to go back.
            // To properly support "back", we need to store answer state in currentExamQuestions objects.
            // Adding a quick check if options were selected?
            // For simplicity in this iteration: Re-rendering clears selection. User can look at question again.
            // Wait, if user answered Q2, goes back to Q1, then Next to Q2, they have to answer again?
            // That affects score. 
            // Improvement: Let's just allow navigating.
        }
    }

    function nextQuestion() {
        // Stop audio if playing
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();

        if (currentIndex < currentExamQuestions.length - 1) {
            currentIndex++;
            renderQuestion();
        } else {
            finishExam();
        }
    }

    function finishExam() {
        clearInterval(timerInterval);
        showScreen('result');

        const total = currentExamQuestions.length;
        const empty = total - (score.correct + score.wrong);
        const percentage = Math.round((score.correct / total) * 100);

        document.getElementById('res-correct').textContent = score.correct;
        document.getElementById('res-wrong').textContent = score.wrong;
        document.getElementById('res-empty').textContent = empty;
        document.getElementById('res-score').textContent = percentage;

        document.querySelector('.score-circle').style.setProperty('--percentage', `${percentage}%`);
    }

    // --- Helpers ---
    function showScreen(id) {
        Object.values(screens).forEach(s => s.classList.add('hidden'));
        screens[id].classList.remove('hidden');
    }

    function startTimer() {
        clearInterval(timerInterval);
        const timerEl = document.getElementById('timer');
        timerInterval = setInterval(() => {
            secondsElapsed++;
            const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
            const secs = (secondsElapsed % 60).toString().padStart(2, '0');
            timerEl.textContent = `${mins}:${secs}`;
        }, 1000);
    }

    function showStats() {
        showScreen('stats');
        const stats = UserProgress.getStats();

        document.getElementById('stat-total-solved').textContent = stats.totalSolved;
        document.getElementById('stat-success-rate').textContent = `%${stats.successRate}`;

        // Render detailed list if needed, or just summary
        const container = document.getElementById('stats-container');
        container.innerHTML = '';

        // Simple Topic Breakdown
        Object.keys(stats.topicStats).forEach(tId => {
            const tStat = stats.topicStats[tId];
            const rate = Math.round((tStat.correct / tStat.total) * 100);

            const row = document.createElement('div');
            row.className = 'stat-row';
            row.innerHTML = `
                <span>Konu ${tId}</span>
                <div class="stat-bar">
                    <div class="stat-fill" style="width: ${rate}%"></div>
                </div>
                <span>%${rate}</span>
            `;
            container.appendChild(row);
        });
    }

    // --- Motivation Card ---
    function renderMotivationCard() {
        const container = document.getElementById('question-container');
        const randomQuote = MOTIVATION_QUOTES[Math.floor(Math.random() * MOTIVATION_QUOTES.length)];

        container.innerHTML = `
            <div class="motivation-card">
                <div class="motivation-icon">💪</div>
                <div class="motivation-text">${randomQuote}</div>
                <button class="btn btn-primary" onclick="continueExam()" style="margin-top: 20px;">Devam Et</button>
            </div>
        `;

        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-prev').style.display = 'none';
    }

    window.continueExam = function () {
        renderQuestion();
    };

    // Global TTS Function
    window.speakText = function (text) {
        if (!text) return;
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'tr-TR';
            utterance.rate = 1.0;
            window.speechSynthesis.speak(utterance);
        } else {
            alert("Cihazınız sesli okumayı desteklemiyor.");
        }
    };
});
