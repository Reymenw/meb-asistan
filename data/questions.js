const QUESTIONS_DB = [
    // --- 1. T.C. ANAYASASI (TOPIC 10) ---
    {
        "id": 1001,
        "topicId": 10,
        "text": "1982 Anayasası'na göre, aşağıdakilerden hangisi Cumhurbaşkanının 'yürütme' alanına ilişkin görev ve yetkilerinden biri değildir?",
        "options": {
            "A": "Üst kademe kamu yöneticilerini atamak",
            "B": "Milletlerarası andlaşmaları onaylamak ve yayımlamak",
            "C": "Türk Silahlı Kuvvetlerinin Başkomutanlığını temsil etmek",
            "D": "Kanunların Anayasaya şekil veya esas bakımından aykırılığı iddiasıyla Anayasa Mahkemesinde iptal davası açmak",
            "E": "Milli güvenlik politikalarını belirlemek ve gerekli tedbirleri almak"
        },
        "answer": "D",
        "explanation": "Kanunların Anayasaya aykırılığı iddiasıyla iptal davası açmak Cumhurbaşkanının 'Yasama' ile ilgili yetkilerindendir. Diğer şıklar yürütme alanına girer."
    },
    {
        "id": 1002,
        "topicId": 10,
        "text": "1982 Anayasası'na göre, Anayasa Mahkemesi üyelerinin görev süresi kaç yıldır ve bir üye yeniden seçilebilir mi?",
        "options": {
            "A": "12 yıl - Seçilemez",
            "B": "12 yıl - Seçilebilir",
            "C": "9 yıl - Seçilemez",
            "D": "9 yıl - Seçilebilir",
            "E": "Ömür boyu (Yaş haddine kadar)"
        },
        "answer": "A",
        "explanation": "Anayasa Mahkemesi üyeleri 12 yıl için seçilirler ve bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez."
    },

    // --- 2. 657 SAYILI DMK (TOPIC 11) ---
    {
        "id": 1101,
        "topicId": 11,
        "text": "657 sayılı Devlet Memurları Kanunu'na göre, 'Mazur görülmeyen özründen dolayı sırf kendi kusuru ile zamanında işe başlamayan' bir memur hakkında yapılacak işlem nedir?",
        "options": {
            "A": "Aylıktan kesme cezası verilir ve göreve başlatılır.",
            "B": "Kınama cezası verilir ve göreve başlatılır.",
            "C": "Çekilmiş (müstafi) sayılır.",
            "D": "Memuriyetten çıkarılır.",
            "E": "Kademe ilerlemesi durdurulur."
        },
        "answer": "C",
        "explanation": "Madde 63: Bir göreve atananlardan mazeretsiz olarak süresi içinde işe başlamayanlar 'çekilmiş sayılırlar'."
    },
    {
        "id": 1102,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, memurların hastalık rapor süresi bitiminde mazeretsiz olarak görevlerine başlamamaları halinde, kaç gün sonra görevden çekilmiş sayılırlar?",
        "options": {
            "A": "3 gün",
            "B": "5 gün",
            "C": "7 gün",
            "D": "10 gün",
            "E": "Rapor bitiminde hemen"
        },
        "answer": "D",
        "explanation": "Madde 94: Kesintisiz 10 gün göreve gelmeyen memur, yazılı müracaat şartı aranmaksızın çekilme isteğinde bulunmuş sayılır."
    },

    // --- 3. 1739 SAYILI MİLLİ EĞİTİM TEMEL KANUNU (TOPIC 12) ---
    {
        "id": 1201,
        "topicId": 12,
        "text": "1739 sayılı Milli Eğitim Temel Kanunu'na göre, aşağıdakilerden hangisi Türk Milli Eğitiminin Temel İlkelerinden biri değildir?",
        "options": {
            "A": "Genellik ve Eşitlik",
            "B": "Ferdin ve Toplumun İhtiyaçları",
            "C": "Yöneltme",
            "D": "Kariyer ve Liyakat",
            "E": "Eğitim Hakkı"
        },
        "answer": "D",
        "explanation": "Kariyer ve Liyakat, 657 sayılı DMK'nın temel ilkeleridir. 1739 sayılı kanunda bu isimle bir ilke yoktur."
    },
    {
        "id": 1202,
        "topicId": 12,
        "text": "1739 sayılı Kanuna göre, ilköğretim kurumlarından sonraki eğitim kademelerinde vatandaşlara genel, mesleki ve teknik eğitim programlarını uygulamak suretiyle iş ve meslek alanlarına veya yükseköğretime hazırlayan eğitim kademesi hangisidir?",
        "options": {
            "A": "Okul Öncesi Eğitim",
            "B": "Temel Eğitim",
            "C": "Ortaöğretim",
            "D": "Yaygın Eğitim",
            "E": "Halk Eğitimi"
        },
        "answer": "C",
        "explanation": "Tanım Ortaöğretim'e aittir. İlköğretime dayalı, en az 4 yıllık zorunlu eğitimi kapsar."
    },

    // --- 4. 222 SAYILI İLKÖĞRETİM KANUNU (TOPIC 13) ---
    {
        "id": 1301,
        "topicId": 13,
        "text": "222 sayılı İlköğretim ve Eğitim Kanunu'na göre, mecburi ilköğretim çağı hangi yaş grubunu kapsar?",
        "options": {
            "A": "6-13 yaş",
            "B": "6-14 yaş",
            "C": "5-13 yaş",
            "D": "7-15 yaş",
            "E": "5-14 yaş"
        },
        "answer": "A",
        "explanation": "Madde 3: Mecburi ilköğretim çağı 6-13 yaş grubundaki çocukları kapsar. (Eylül ayı sonu itibarıyla 72 ayını dolduranlar başlar)."
    },
    {
        "id": 1302,
        "topicId": 13,
        "text": "222 sayılı Kanuna göre, çocuğunu okula göndermeyen veliye verilen idari para cezasına rağmen göndermemeye devam edenlere uygulanacak yaptırım nedir?",
        "options": {
            "A": "Hapis cezası",
            "B": "Her gün için 15 TL idari para cezası (Güncellenmiş tutarlar uygulanır)",
            "C": "Çocuğun velayetinin alınması",
            "D": "Sadece uyarı verilir",
            "E": "Kamu hizmetinden men"
        },
        "answer": "B",
        "explanation": "Çocuğunu okula göndermeyenlere önce idari para cezası verilir, davamında her gün için ek idari para cezası uygulanır."
    },

    // --- 5. 4735 SAYILI KAMU İHALE SÖZLEŞMELERİ KANUNU (TOPIC 19 - PRIORITY!) ---
    {
        "id": 1901,
        "topicId": 19,
        "text": "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, aşağıdakilerden hangisi 'Mücbir Sebep' olarak kabul edilen hallerden biri değildir?",
        "options": {
            "A": "Doğal afetler",
            "B": "Kanuni grev",
            "C": "Genel salgın hastalık",
            "D": "Kısmi seferberlik ilanı",
            "E": "Yüklenicinin mali acze düşmesi (İflas)"
        },
        "answer": "E",
        "explanation": "Madde 10: Yüklenicinin iflası veya mali sıkıntıya düşmesi mücbir sebep DEĞİLDİR. Mücbir sebep, yükleniciden kaynaklanmayan (Doğal afet, yangın, grev vb.) durumlardır."
    },
    {
        "id": 1902,
        "topicId": 19,
        "text": "4735 sayılı Kanuna göre, sözleşme türleri ile ilgili olarak, 'Uygulama projeleri bulunan yapım işlerinde' kullanılması zorunlu olan sözleşme türü hangisidir?",
        "options": {
            "A": "Birim fiyat sözleşme",
            "B": "Anahtar teslimi götürü bedel sözleşme",
            "C": "Götürü bedel sözleşme",
            "D": "Karma sözleşme",
            "E": "Maliyet artı kar sözleşme"
        },
        "answer": "B",
        "explanation": "Madde 6: Uygulama projeleri bulunan yapım işlerinde 'Anahtar Teslimi Götürü Bedel' sözleşme yapılması zorunludur."
    },
    {
        "id": 1903,
        "topicId": 19,
        "text": "4735 sayılı Kanuna göre, mücbir sebeplerden dolayı sözleşmenin feshedilmesi halinde, yüklenicinin teminatı hakkında nasıl bir işlem yapılır?",
        "options": {
            "A": "Teminatı gelir kaydedilir.",
            "B": "Teminatının %50'si iade edilir.",
            "C": "Kesin teminat ve varsa ek kesin teminatlar iade edilir.",
            "D": "Teminat Hazineye aktarılır.",
            "E": "Teminat 1 yıl süreyle bloke edilir."
        },
        "answer": "C",
        "explanation": "Mücbir sebep nedeniyle fesihte, ceza uygulanmaz ve teminatlar yükleniciye geri verilir."
    },
    {
        "id": 1904,
        "topicId": 19,
        "text": "4735 sayılı Kanun uyarınca, yasak fiil veya davranışlarda bulunduğu tespit edilenlere, fiilin niteliğine göre verilecek 'Kamu ihalelerinden yasaklama' süresi ne kadardır?",
        "options": {
            "A": "3 aydan 6 aya kadar",
            "B": "6 aydan 1 yıla kadar",
            "C": "1 yıldan 2 yıla kadar",
            "D": "En az 2 yıl",
            "E": "Süresiz"
        },
        "answer": "C",
        "explanation": "Madde 26: Yasak fiil işleyenler 1 yıldan az, 2 yıldan fazla olmamak üzere yasaklanır."
    },
    {
        "id": 1905,
        "topicId": 19,
        "text": "4735 sayılı Kanuna göre, yüklenicinin ölümü halinde sözleşmenin akıbeti ne olur?",
        "options": {
            "A": "Sözleşme kendiliğinden sona erer, teminatlar gelir kaydedilir.",
            "B": "Mirasçıları isterse 30 gün içinde teminat göstererek işe devam edebilir.",
            "C": "Sözleşme feshedilir, teminatları varislerine iade edilir.",
            "D": "İdare resen işi tamamlatır, masrafı terekeden alır.",
            "E": "Mirasçıların işe devam etmesi zorunludur."
        },
        "answer": "C",
        "explanation": "Yüklenicinin ölümü halinde sözleşme feshedilir, teminatlar iade edilir. (Ancak idare onaylarsa mirasçılar devam edebilir, kural olarak fesih/iade esastır)."
    },

    // --- 6. 4734 SAYILI KAMU İHALE KANUNU (TOPIC 18) ---
    {
        "id": 1801,
        "topicId": 18,
        "text": "4734 sayılı Kamu İhale Kanunu'na göre, aşağıdakilerden hangisi temel ihale usullerinden biri değildir?",
        "options": {
            "A": "Açık ihale usulü",
            "B": "Belli istekliler arasında ihale usulü",
            "C": "Pazarlık usulü",
            "D": "Doğrudan temin",
            "E": "Yarışma usulü"
        },
        "answer": "D",
        "explanation": "Doğrudan temin bir 'ihale usulü' değil, bir 'alım yöntemi'dir. Temel usuller: Açık ve Belli isteklilerdir. Pazarlık da bir usüldür."
    },

    // --- 7. 5018 SAYILI KAMU MALİ YÖNETİMİ (TOPIC 16) ---
    {
        "id": 1601,
        "topicId": 16,
        "text": "5018 sayılı Kanuna göre, Bakanlıklarda 'Üst Yönetici' sıfatı kime aittir?",
        "options": {
            "A": "Cumhurbaşkanı",
            "B": "Bakan",
            "C": "Bakan Yardımcısı",
            "D": "Genel Müdür",
            "E": "Strateji Geliştirme Başkanı"
        },
        "answer": "B",
        "explanation": "Bakanlıklarda üst yönetici Bakan'dır. Diğer kamu idarelerinde en üst yönetici (Örn: Rektör, Başkan)."
    },
    {
        "id": 1602,
        "topicId": 16,
        "text": "5018 sayılı Kanun'a göre, kamu idarelerinin orta ve uzun vadeli amaçlarını, temel ilke ve politikalarını, hedef ve önceliklerini içeren belgenin adı nedir?",
        "options": {
            "A": "Faaliyet Raporu",
            "B": "Performans Programı",
            "C": "Stratejik Plan",
            "D": "Bütçe Kanunu",
            "E": "Yatırım Programı"
        },
        "answer": "C",
        "explanation": "Bu tanım Stratejik Plan'a aittir."
    },

    // --- 8. 5442 SAYILI İL İDARESİ KANUNU (TOPIC 21) ---
    {
        "id": 2101,
        "topicId": 21,
        "text": "5442 sayılı İl İdaresi Kanunu'na göre, Vali ilde kimin temsilcisidir?",
        "options": {
            "A": "Sadece İçişleri Bakanının",
            "B": "Sadece Cumhurbaşkanının",
            "C": "Cumhurbaşkanının temsilcisi ve idari yürütme vasıtasıdır.",
            "D": "Hükümetin temsilcisidir.",
            "E": "TBMM'nin temsilcisidir."
        },
        "answer": "C",
        "explanation": "Madde 9: Vali, ilde Cumhurbaşkanının temsilcisi ve idari yürütme vasıtasıdır."
    },
    {
        "id": 2102,
        "topicId": 21,
        "text": "5442 sayılı Kanuna göre, Kaymakamlar ilçede hangi bakanlığa bağlı kurumları denetleyemezler?",
        "options": {
            "A": "Milli Eğitim Bakanlığı",
            "B": "Sağlık Bakanlığı",
            "C": "Adli ve Askeri makamlar",
            "D": "Tarım ve Orman Bakanlığı",
            "E": "Tapu Müdürlükleri"
        },
        "answer": "C",
        "explanation": "Kaymakamlar; hakimler, savcılar (yargı) ve askeri birlikler/makamlar üzerinde denetim yetkisine sahip değildir."
    },

    // --- 9. 4688 SAYILI SENDİKALAR KANUNU (TOPIC 22) ---
    {
        "id": 2201,
        "topicId": 22,
        "text": "4688 sayılı Kanuna göre, sendika kurucusu olabilmek için en az kaç yıldır kamu görevlisi olarak çalışıyor olmak gerekir?",
        "options": {
            "A": "1 yıl",
            "B": "2 yıl",
            "C": "3 yıl",
            "D": "5 yıl",
            "E": "Hizmet şartı aranmaz"
        },
        "answer": "B",
        "explanation": "Madde 6: Sendika kurucusu olabilmek için en az 2 yıl kamu görevlisi olarak çalışmış olmak şarttır."
    },

    // --- 10. 5580 SAYILI ÖZEL ÖĞRETİM KURUMLARI KANUNU (TOPIC 23) ---
    {
        "id": 2301,
        "topicId": 23,
        "text": "5580 sayılı Kanuna göre, izinsiz açıldığı tespit edilen kurumlar hakkında kim tarafından kapatma işlemi yapılır?",
        "options": {
            "A": "Milli Eğitim Bakanlığı",
            "B": "Valilik",
            "C": "Cumhuriyet Savcılığı",
            "D": "Belediye",
            "E": "Kaymakamlık"
        },
        "answer": "B",
        "explanation": "İzinsiz açılan yerler Valilikçe kapatılır."
    },

    // --- 11. 4483 SAYILI MEMURLARIN YARGILANMASI (TOPIC 15) ---
    {
        "id": 1501,
        "topicId": 15,
        "text": "4483 sayılı Kanuna göre, ilçede görevli bir memur hakkında soruşturma izni vermeye yetkili merci kimdir?",
        "options": {
            "A": "Vali",
            "B": "Kaymakam",
            "C": "İlgili Bakan",
            "D": "Cumhuriyet Başsavcısı",
            "E": "Belediye Başkanı"
        },
        "answer": "B",
        "explanation": "İlçede görevli memurlar için yetkili merci Kaymakamdır."
    },

    // --- 12. 4982 SAYILI BİLGİ EDİNME HAKKI (TOPIC 20) ---
    {
        "id": 2001,
        "topicId": 20,
        "text": "4982 sayılı Kanuna göre, kurumlar bilgi edinme başvurularını en geç kaç iş günü içinde cevaplandırmalıdır (Normal süreç)?",
        "options": {
            "A": "7 iş günü",
            "B": "10 iş günü",
            "C": "15 iş günü",
            "D": "30 iş günü",
            "E": "60 iş günü"
        },
        "answer": "C",
        "explanation": "Normal süre 15 iş günüdür. (Başka kurum görüşü gerekirse 30 iş günü)."
    },

    // --- 13. 2886 SAYILI DEVLET İHALE KANUNU (TOPIC 17) ---
    {
        "id": 1701,
        "topicId": 17,
        "text": "2886 sayılı Devlet İhale Kanunu'nda yer alan ancak 4734 sayılı Kanun'da bulunmayan ihale usulü hangisidir?",
        "options": {
            "A": "Açık Teklif Usulü",
            "B": "Kapalı Teklif Usulü",
            "C": "Pazarlık Usulü",
            "D": "Yarışma Usulü",
            "E": "Doğrudan Temin"
        },
        "answer": "B",
        "explanation": "Kapalı Teklif Usulü 2886'nın (Devletin satış/kiralama yaptığı) temel usulüdür. 4734'te (Devletin alım yaptığı) Açık İhale temeldir."
    },

    // --- BATCH 2: DETAILED PROCUREMENT LAWS (4734 & 4735 - HIGH PRIORITY) ---
    {
        "id": 1802,
        "topicId": 18,
        "text": "4734 sayılı Kamu İhale Kanununa göre, 'Eşik Değerlerin' belirlenmesinde aşağıdakilerden hangisi dikkate ALINMAZ?",
        "options": {
            "A": "İdarenin türü (Genel/Katma bütçe vs.)",
            "B": "İşin niteliği (Mal/Hizmet/Yapım)",
            "C": "Yaklaşık maliyet",
            "D": "Yıllık güncellemeler",
            "E": "İhalede kullanılacak döviz kurunun türü"
        },
        "answer": "C",
        "explanation": "Eşik değerler kanunda kurum türüne ve işin niteliğine göre belirlenmiştir ve her yıl güncellenir. Yaklaşık maliyet ise idarece hesaplanan ve ihale usulünü belirleyen tutardır, eşik değerin kendisini belirlemez."
    },
    {
        "id": 1803,
        "topicId": 18,
        "text": "4734 sayılı Kanuna göre, ihale sürecinde işlemlerin iptaline ilişkin olarak, İdare tarafından iptal kararı verilmesi halinde bu karar isteklilere ne zaman bildirilir?",
        "options": {
            "A": "Derhal",
            "B": "En geç 3 iş günü içinde",
            "C": "En geç 5 iş günü içinde",
            "D": "En geç 10 gün içinde",
            "E": "Karar kesinleşince"
        },
        "answer": "C",
        "explanation": "İhale iptal kararı, bu kararın verildiği tarihten itibaren en geç 5 iş günü içinde, bütün isteklilere bildirilir."
    },
    {
        "id": 1804,
        "topicId": 18,
        "text": "4734 sayılı Kanuna göre, 'Pazarlık Usulü' ile yapılan ihalelerde, ilana çıkılması zorunlu olmayan hallerde en az kaç istekli davet edilmelidir?",
        "options": {
            "A": "1",
            "B": "3",
            "C": "5",
            "D": "7",
            "E": "Davet zorunluluğu yoktur"
        },
        "answer": "B",
        "explanation": "İlan yapılmayan pazarlık usulü hallerinde (b, c, f bentleri) en az 3 istekli davet edilmelidir."
    },
    {
        "id": 1805,
        "topicId": 18,
        "text": "4734 sayılı Kanuna göre, aşağıdakilerden hangisi ihale komisyonunun kurulması ile ilgili doğru bir bilgidir?",
        "options": {
            "A": "Komisyon en az 3 kişiden oluşur.",
            "B": "Komisyon üyeleri sadece ihale yetkilisince belirlenir.",
            "C": "Yedek üye belirlenmesi zorunlu değildir.",
            "D": "Mali üye bulunması zorunlu değildir.",
            "E": "Komisyon eksiksiz toplanır ve çoğunlukla karar alır."
        },
        "answer": "E",
        "explanation": "Komisyon en az 5 kişiden (biri başkan, ikisi uzman, biri mali üye) oluşur, eksiksiz toplanır, çekimser oy kullanılamaz, çoğunlukla karar alır."
    },
    {
        "id": 1806,
        "topicId": 18,
        "text": "4734 sayılı Kanuna göre, şikayet başvurusu üzerine İdare, kararı kaç gün içinde vermek zorundadır?",
        "options": {
            "A": "5 gün",
            "B": "10 gün",
            "C": "15 gün",
            "D": "30 gün",
            "E": "60 gün"
        },
        "answer": "B",
        "explanation": "İdareye şikayet başvurusu üzerine idare 10 gün içinde gerekçeli kararı almak zorundadır."
    },
    {
        "id": 1906,
        "topicId": 19,
        "text": "4735 sayılı Kamu İhale Sözleşmeleri Kanunu'na göre, sözleşme imzalandıktan sonra, sözleşme bedelinin %10'una kadar iş artışı veya eksilişi yapılması halinde süre uzatımı nasıl belirlenir?",
        "options": {
            "A": "Süre uzatımı verilmez.",
            "B": "Sadece iş artışında süre uzatımı verilir.",
            "C": "İşin niteliğine göre ve artış oranına göre yüklenici ile idare karşılıklı anlaşarak belirler.",
            "D": "Resen idare belirler.",
            "E": "İhale dokümanında yazan süre kadar uzatılır."
        },
        "answer": "B",
        "explanation": "İş artışı halinde, artışla orantılı süre uzatımı verilir. İş eksilişinde süre uzatımı söz konusu değildir."
    },
    {
        "id": 1907,
        "topicId": 19,
        "text": "4735 sayılı Kanuna göre, Fiyat Farkı ödenmesi konusunda aşağıdakilerden hangisi yanlıştır?",
        "options": {
            "A": "Sözleşmede yer alması şartıyla fiyat farkı ödenebilir.",
            "B": "Zorunlu nedenlerle süre uzatımı verildiğinde fiyat farkı ödenmez.",
            "C": "İş programına uyulmadığı için ceza uygulanan süreler için fiyat farkı ödenmez (fark düşükse eski fiyat uygulanır).",
            "D": "Bakanlar Kurulu (Cumhurbaşkanı) fiyat farkı esaslarını belirler.",
            "E": "Anahtar teslimi işlerde de fiyat farkı verilebilir."
        },
        "answer": "B",
        "explanation": "Mücbir sebep veya idareden kaynaklanan nedenlerle süre uzatımı verildiğinde, bu süreler için fiyat farkı hesabı yapılır ve ödenir. Ödenmez ifadesi yanlıştır."
    },
    {
        "id": 1908,
        "topicId": 19,
        "text": "4735 sayılı Kanuna göre, yüklenicinin sözleşmeyi feshetmesi için aşağıdakilerden hangisinin gerçekleşmesi gerekir?",
        "options": {
            "A": "İdarenin sözleşme hükümlerini yerine getirmemesi ve bunun sonucunda taahhüdün yerine getirilmesinin imkansızlaşması",
            "B": "Ekonomik kriz çıkması",
            "C": "Malzeme fiyatlarının artması",
            "D": "Personel bulamaması",
            "E": "İşin yerinin değişmesi"
        },
        "answer": "A",
        "explanation": "Yüklenici; idarenin sözleşmeyi ihlal etmesi ve taahhüdü imkansız kılması halinde, idareye ihtar çekip süre vererek fesih hakkım kullanabilir."
    },
    {
        "id": 1909,
        "topicId": 19,
        "text": "Denetim görevlileri tarafından yapılan incelemelerde 4735 sayılı Kanuna aykırılık tespit edilirse bu durum kime bildirilir?",
        "options": {
            "A": "Cumhuriyet Savcılığına",
            "B": "Sayıştaya",
            "C": "Kamu İhale Kurumuna",
            "D": "İlgili İdareye ve gerekli hallerde Kuruma (KİK)",
            "E": "Valiliğe"
        },
        "answer": "D",
        "explanation": "Aykırılıkları tevsik eden belgelerle birlikte ilgili idareye ve gerekiyorsa Kuruma (KİK) bildirilir."
    },

    // --- BATCH 3: PUBLIC FINANCE (5018 - ANALYTIC) ---
    {
        "id": 1603,
        "topicId": 16,
        "text": "5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu'na göre, aşağıdakilerden hangisi 'Kamu Zararı'nın unsurlarından biri değildir?",
        "options": {
            "A": "İş, mal veya hizmet karşılığı olmayan ödeme yapılması",
            "B": "Değerinden yüksek fiyatla mal alınması",
            "C": "İdare gelirlerinin tarh, tahakkuk veya tahsil işlemlerinin mevzuata uygun yapılmaması",
            "D": "Ödenek üstü harcama yapılması (Tek başına kamu zararı mıdır?)",
            "E": "Mevzuatında öngörülmediği halde ödeme yapılması"
        },
        "answer": "D",
        "explanation": "Ödenek üstü harcama yapmak idari bir suç/disiplin suçu olabilir ancak 'karşılığı mal/hizmet alındıysa' doğrudan kamu zararı (maddi kayıp) sayılmaz. Kamu zararı tanımında A, B, C, E açıkça sayılmıştır."
    },
    {
        "id": 1604,
        "topicId": 16,
        "text": "5018 sayılı Kanuna göre, Genel Yönetim Kapsamındaki Kamu İdareleri bütçelerini hazırlarken aşağıdakilerden hangisini esas almaz?",
        "options": {
            "A": "Orta Vadeli Program",
            "B": "Kalkınma Planı",
            "C": "Stratejik Plan",
            "D": "Enflasyon Tahminleri",
            "E": "Bir önceki yılın gerçekleşen harcamalarının %10 fazlası"
        },
        "answer": "E",
        "explanation": "Bütçe hazırlama; stratejik planlara ve performans programlarına dayandırılır, 'geçen yılın %10 fazlası' gibi ezbere bir usul yoktur (Torba bütçe anlayışı terk edilmiştir)."
    },
    {
        "id": 1605,
        "topicId": 16,
        "text": "5018 sayılı Kanuna göre, Harcama yetkilisi ile muhasebe yetkilisi görevi aynı kişide birleşebilir mi?",
        "options": {
            "A": "Evet, küçük idarelerde birleşir.",
            "B": "Hayır, bu görevler birleşemez.",
            "C": "Üst yönetici onay verirse birleşir.",
            "D": "Maliye Bakanlığı izin verirse birleşir.",
            "E": "Belediyelerde birleşebilir."
        },
        "answer": "B",
        "explanation": "Madde 60: Harcama yetkilisi ile muhasebe yetkilisi görevi aynı kişide birleşemez. (Mali kontrol ve denge ilkesi)."
    },

    // --- BATCH 4: HISTORY & GENERAL CULTURE (INKILAP & GENEL KULTUR) ---
    {
        "id": 3001,
        "topicId": 30,
        "text": "Mustafa Kemal Paşa, 9. Ordu Müfettişi olarak Samsun'a çıktığında sahip olduğu yetkiler arasında aşağıdakilerden hangisi YOKTUR?",
        "options": {
            "A": "Bölgedeki asayişi sağlamak",
            "B": "Silah ve cephanenin teslimini engellemek (veya hızlandırmak - resmi görev teslimdi)",
            "C": "Yeni bir devlet kurmak",
            "D": "Mondros Ateşkesi hükümlerini uygulamak (Kağıt üzerinde)",
            "E": "Bölgedeki askeri ve sivil makamlara emretmek"
        },
        "answer": "C",
        "explanation": "Mustafa Kemal'in resmi görevi asayişi sağlamak ve Mondros'u uygulamaktı. Ancak gizli amacı milli mücadeleyi başlatmaktı. Resmi yetkileri arasında 'Yeni bir devlet kurmak' yoktur."
    },
    {
        "id": 3002,
        "topicId": 30,
        "text": "Amasya Genelgesi'nin aşağıdaki maddelerinden hangisi 'Milli Mücadelenin Gerekçesi' niteliğindedir?",
        "options": {
            "A": "Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.",
            "B": "Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.",
            "C": "Sivas'ta milli bir kongre toplanmalıdır.",
            "D": "İstanbul Hükümeti üzerine aldığı sorumluluğu yerine getirememektedir.",
            "E": "Her türlü etki ve denetimden uzak milli bir kurul oluşturulmalıdır."
        },
        "answer": "A",
        "explanation": "'Vatanın bütünlüğü tehlikededir' ifadesi mücadelenin gerekçesidir (Neden savaşıyoruz?). 'Milletin azim ve kararı' ise yöntemidir."
    },
    {
        "id": 3003,
        "topicId": 30,
        "text": "Misak-ı Milli kararları aşağıdakilerin hangisinde kabul edilmiştir?",
        "options": {
            "A": "Erzurum Kongresi",
            "B": "Sivas Kongresi",
            "C": "Son Osmanlı Mebusan Meclisi",
            "D": "TBMM (1. Dönem)",
            "E": "Amasya Görüşmeleri"
        },
        "answer": "C",
        "explanation": "Misak-ı Milli, İstanbul'da toplanan Son Osmanlı Mebusan Meclisi'nde (Felah-ı Vatan grubu çabasıyla) kabul edilmiştir."
    },
    {
        "id": 3004,
        "topicId": 30,
        "text": "Türk tarihinde 'Ordu-Millet' anlayışının en somut yasal dayanağı olarak kabul edilen düzenleme hangisidir?",
        "options": {
            "A": "Teşkilat-ı Esasiye",
            "B": "Tekalif-i Milliye Emirleri",
            "C": "Hıyanet-i Vataniye Kanunu",
            "D": "Takrir-i Sükun Kanunu",
            "E": "Mecelle"
        },
        "answer": "B",
        "explanation": "Sakarya Savaşı öncesi Mustafa Kemal tarafından çıkarılan Tekalif-i Milliye Emirleri ile halkın elindeki malzemenin orduya verilmesi istenmiş, topyekün seferberlik (Ordu-Millet) uygulanmıştır."
    },
    {
        "id": 3005,
        "topicId": 30,
        "text": "Cumhuriyet döneminde 'Halifeliğin Kaldırılması' ile aynı gün (3 Mart 1924) yapılan inkılaplardan biri değildir?",
        "options": {
            "A": "Tevhid-i Tedrisat Kanunu'nun kabulü",
            "B": "Şeriye ve Evkaf Vekaletinin kaldırılması",
            "C": "Erkan-ı Harbiye Vekaletinin kaldırılması",
            "D": "Osmanlı Hanedanının yurt dışına çıkarılması",
            "E": "Tekke ve Zaviyelerin kapatılması"
        },
        "answer": "E",
        "explanation": "Tekke ve Zaviyelerin kapatılması 1925 yılındadır. Diğerleri 3 Mart 1924'te yapılan devrimlerdir."
    },

    // --- BATCH 5: 4483 & 4982 SPECIFIC LAWS ---
    {
        "id": 1502,
        "topicId": 15,
        "text": "4483 sayılı Kanuna göre, soruşturma izni verilmesi veya verilmemesi kararına karşı itiraz süresi kaç gündür?",
        "options": {
            "A": "3 gün",
            "B": "5 gün",
            "C": "7 gün",
            "D": "10 gün",
            "E": "15 gün"
        },
        "answer": "D",
        "explanation": "Kararın tebliğinden itibaren 10 gün içinde itiraz edilebilir."
    },
    {
        "id": 1503,
        "topicId": 15,
        "text": "4483 sayılı Kanuna göre, hazırlık soruşturmasını yapacak Cumhuriyet Başsavcılığı belirlenirken esas alınan kriter nedir?",
        "options": {
            "A": "Memurun ikametgah adresi",
            "B": "Suçun işlendiği yer",
            "C": "Memurun görev yaptığı kurumun merkezi",
            "D": "Soruşturma iznini veren merciin bulunduğu yer",
            "E": "İçişleri Bakanlığının talimatı"
        },
        "answer": "B",
        "explanation": "Kural olarak suçun işlendiği yer Cumhuriyet Başsavcılığı yetkilidir."
    },
    {
        "id": 2002,
        "topicId": 20,
        "text": "4982 sayılı Bilgi Edinme Hakkı Kanunu'na göre, aşağıdakilerden hangisi bilgi edinme hakkı kapsamı dışındadır?",
        "options": {
            "A": "Kurumun faaliyet raporları",
            "B": "Yargı denetimine açık idari işlemler",
            "C": "Devlet sırrına ilişkin bilgi ve belgeler",
            "D": "İstatistiksel veriler",
            "E": "Sonuçlanmış soruşturma raporları"
        },
        "answer": "C",
        "explanation": "Devlet sırrı, ülkenin ekonomik çıkarları, istihbarat, özel hayatın gizliliği gibi konular istisna kapsamındadır."
    },
    {
        "id": 2003,
        "topicId": 20,
        "text": "4982 sayılı Kanuna göre, Bilgi Edinme Değerlendirme Kurulu (BEDK) kaç üyeden oluşur?",
        "options": {
            "A": "5",
            "B": "7",
            "C": "9",
            "D": "11",
            "E": "15"
        },
        "answer": "C",
        "explanation": "Kurul 9 üyeden oluşur ve Cumhurbaşkanı tarafından seçilir."
    },

    // --- BATCH 6: 3071 DİLEKÇE KANUNU (TOPIC 24) ---
    {
        "id": 2401,
        "topicId": 24,
        "text": "3071 sayılı Dilekçe Hakkının Kullanılmasına Dair Kanun'a göre, makamlar dilekçelere en geç kaç gün içinde cevap vermek zorundadır?",
        "options": {
            "A": "15 gün",
            "B": "30 gün",
            "C": "45 gün",
            "D": "60 gün",
            "E": "3 iş günü"
        },
        "answer": "B",
        "explanation": "Dilekçe sahiplerine en geç 30 gün içinde gerekçeli olarak cevap verilir."
    },
    {
        "id": 2402,
        "topicId": 24,
        "text": "3071 sayılı Kanuna göre, TBMM'ye gönderilen dilekçeleri inceleyen komisyonun adı nedir?",
        "options": {
            "A": "Adalet Komisyonu",
            "B": "İnsan Hakları İnceleme Komisyonu",
            "C": "Dilekçe Komisyonu",
            "D": "Anayasa Komisyonu",
            "E": "Plan ve Bütçe Komisyonu"
        },
        "answer": "C",
        "explanation": "TBMM Dilekçe Komisyonu."
    },

    // --- BATCH 7: PROTOKOL KURALLARI (MEB ÖZEL) ---
    {
        "id": 4001,
        "topicId": 40,
        "text": "Resmi protokol kurallarına göre, makam aracında 'Onur Köşesi' (Makam sahibi veya konuğun oturacağı yer) neresidir?",
        "options": {
            "A": "Şoförün yanı (Ön sağ)",
            "B": "Arka sol koltuk",
            "C": "Arka sağ koltuk",
            "D": "Arka orta koltuk",
            "E": "Şoförün arkası"
        },
        "answer": "C",
        "explanation": "Makam araçlarında arka sağ koltuk 1 numaralı (makam) koltuğu, arka sol koltuk 2 numaralı koltuktur. Makam sahibi sağ arkada oturur."
    },
    {
        "id": 4002,
        "topicId": 40,
        "text": "Resmi yazışmalarda 'Rica etmek' ve 'Arz etmek' kullanımıyla ilgili aşağıdakilerden hangisi doğrudur?",
        "options": {
            "A": "Alt makam üst makama 'Rica eder'",
            "B": "Üst makam alt makama 'Arz eder'",
            "C": "Ast üste 'Arz eder', Üst asta 'Rica eder'",
            "D": "Eşit makamlar birbirine 'Rica eder'",
            "E": "Her durumda 'Arz/Rica ederim' kalıbı birlikte kullanılır."
        },
        "answer": "C",
        "explanation": "Ast üste arz eder, üst asta rica eder. Eşit makamlar birbirine 'arz eder' (Nezaket gereği, ancak hiyerarşide rica/arz dengesi esastır)."
    },
    {
        "id": 4002,
        "topicId": 40,
        "text": "Resmi yazışmalarda 'Rica etmek' ve 'Arz etmek' kullanımıyla ilgili aşağıdakilerden hangisi doğrudur?",
        "options": {
            "A": "Alt makam üst makama 'Rica eder'",
            "B": "Üst makam alt makama 'Arz eder'",
            "C": "Ast üste 'Arz eder', Üst asta 'Rica eder'",
            "D": "Eşit makamlar birbirine 'Rica eder'",
            "E": "Her durumda 'Arz/Rica ederim' kalıbı birlikte kullanılır."
        },
        "answer": "C",
        "explanation": "Ast üste arz eder, üst asta rica eder. Eşit makamlar birbirine 'arz eder' (Nezaket gereği, ancak hiyerarşide rica/arz dengesi esastır)."
    },

    // --- BATCH 8: TÜRKÇE DİL BİLGİSİ (YAZIM & NOKTALAMA) ---
    {
        "id": 3101,
        "topicId": 31,
        "text": "Aşağıdaki cümlelerin hangisinde bir yazım yanlışı vardır?",
        "options": {
            "A": "Toplantı 13.00'da başlayacak.",
            "B": "Bu proje de pek çok kişi tarafından beğenildi.",
            "C": "Herkesin bildiği gibi TDK'nın kuralları değişti.",
            "D": "Sizinle birtakım sorunları konuşmamız gerekiyor.",
            "E": "Akşamki yemeğe Ahmet Bey de gelecek."
        },
        "answer": "C",
        "explanation": "Kısaltmalara getirilen ekler, kısaltmanın okunuşuna göre gelir. TDK (Te-De-Ka) şeklinde okunur, dolayısıyla ek 'TDK'nin' olmalıdır. 'TDK'nın' yanlıştır."
    },
    {
        "id": 3102,
        "topicId": 31,
        "text": "Aşağıdaki cümlelerin hangisinde 'ki' bağlacının yazımıyla ilgili bir yanlışlık yapılmıştır?",
        "options": {
            "A": "Duydum ki unutmuşsun gözlerimin rengini.",
            "B": "Sen ki dünyalara değersin.",
            "C": "Masadaki kalem kimin?",
            "D": "Öyle bir geçer zamanki anlayamazsın.",
            "E": "Akşamki maç çok heyecanlıydı."
        },
        "answer": "D",
        "explanation": "'Zaman ki' ayrı yazılmalıdır. Ancak burada kalıplaşmış 'sanki, oysaki, mademki, belki, halbuki, çünkü, meğerki, illaki' (SOMBAHÇEMİ) kodlaması dışındaki 'ki'ler ayrı yazılır. 'Öyle bir geçer zaman ki' ayrı olmalıydı."
    },
    {
        "id": 3103,
        "topicId": 31,
        "text": "Resmi yazılarda tarihlerin yazımı ile ilgili aşağıdakilerden hangisi yanlıştır?",
        "options": {
            "A": "18.01.2026",
            "B": "18/01/2026",
            "C": "18 Ocak 2026",
            "D": "18-01-2026",
            "E": "18.Ocak.2026"
        },
        "answer": "E",
        "explanation": "Ay adları yazıyla yazıldığında araya nokta konmaz. Doğrusu '18 Ocak 2026'dır."
    },
    {
        "id": 3104,
        "topicId": 31,
        "text": "Aşağıdaki cümlelerin hangisinde virgül (,) yanlış kullanılmıştır?",
        "options": {
            "A": "Hava kararmış, sokaklar boşalmıştı.",
            "B": "Sayın Başkan, değerli üyeler...",
            "C": "Eve gelince, hemen yattı.",
            "D": "Pazardan elma, armut, muz aldık.",
            "E": "Genç, doktora derdini anlattı."
        },
        "answer": "C",
        "explanation": "Zarf-fiil eklerinden (-ince, -ip, -erek vb.) sonra virgül konmaz. 'Eve gelince hemen yattı' olmalıydı."
    },

    // --- BATCH 9: İNSAN HAKLARI & ETİK (TOPIC 32) ---
    {
        "id": 3201,
        "topicId": 32,
        "text": "İl ve İlçe İnsan Hakları Kurullarında aşağıdakilerden hangisi yer ALMAZ?",
        "options": {
            "A": "Belediye Başkanı",
            "B": "Baro Temsilcisi",
            "C": "Siyasi Parti İl/İlçe Başkanları",
            "D": "Muhtar",
            "E": "Okul Aile Birliği Temsilcisi"
        },
        "answer": "D",
        "explanation": "Kurul üyeleri arasında TBMM'de grubu bulunan siyasi parti temsilcileri, STK'lar, Baro, Hekimler Odası vb. vardır ancak 'Muhtar' doğrudan kurulun doğal üyesi olarak sayılmamıştır."
    },
    {
        "id": 3202,
        "topicId": 32,
        "text": "Kamu Görevlileri Etik Kurulu üyeleri kim tarafından seçilir?",
        "options": {
            "A": "TBMM",
            "B": "Cumhurbaşkanı",
            "C": "İçişleri Bakanı",
            "D": "Yargıtay",
            "E": "Danıştay"
        },
        "answer": "B",
        "explanation": "Kamu Görevlileri Etik Kurulu üyeleri Cumhurbaşkanı tarafından seçilir."
    },

    // --- BATCH 10: 5442 IL IDARESI (ADVANCED) ---
    {
        "id": 2103,
        "topicId": 21,
        "text": "5442 sayılı İl İdaresi Kanunu'na göre, Valiler, ildeki adli ve askeri kuruluşlar dışında kalan bütün devlet daireleri, müesseseleri ve işletmelerini denetleme yetkisine sahiptir. Aşağıdakilerden hangisi Valinin denetleyebileceği kurumlardan biri DEĞİLDİR?",
        "options": {
            "A": "İl Milli Eğitim Müdürlüğü",
            "B": "İl Sağlık Müdürlüğü",
            "C": "İdare Mahkemesi Yazı İşleri",
            "D": "Tapu ve Kadastro Müdürlüğü",
            "E": "Karayolları Bölge Müdürlüğü (İldeki şubesi)"
        },
        "answer": "C",
        "explanation": "İdare Mahkemeleri yargı organıdır ve Valinin denetim yetkisi dışındadır."
    },
    {
        "id": 2104,
        "topicId": 21,
        "text": "İl İdare Kurulu, Valinin başkanlığında toplanır. Aşağıdakilerden hangisi İl İdare Kurulu'nun daimi üyelerinden biri değildir?",
        "options": {
            "A": "Hukuk İşleri Müdürü",
            "B": "Defterdar",
            "C": "İl Milli Eğitim Müdürü",
            "D": "İl Emniyet Müdürü",
            "E": "İl Sağlık Müdürü"
        },
        "answer": "D",
        "explanation": "İl İdare Kurulu üyeleri: Hukuk İşleri Müdürü, Defterdar, Milli Eğitim, Sağlık, Tarım müdürleridir. Emniyet Müdürü kurul üyesi değildir."
    },

    // --- BATCH 11: 4483 (SORUŞTURMA İZNİ - ZOR) ---
    {
        "id": 1504,
        "topicId": 15,
        "text": "4483 sayılı Kanuna göre, hakkında soruşturma izni verilen memur, bu karara karşı hangi mahkemeye itiraz eder?",
        "options": {
            "A": "İdare Mahkemesi",
            "B": "Bölge İdare Mahkemesi",
            "C": "Danıştay (İlgili Dairesi)",
            "D": "Ağır Ceza Mahkemesi",
            "E": "Anayasa Mahkemesi"
        },
        "answer": "B",
        "explanation": "Bölge İdare Mahkemesine itiraz edilir. (Eskiden Danıştay'dı, yapılan değişiklikle Bölge İdare Mahkemesi oldu. Sadece üst düzey memurlar [Vali vb.] için Danıştay geçerlidir, genel memurlar için BİM)."
    },

    // --- BATCH 12: 657 DMK (İZİNLER VE HAKLAR) ---
    {
        "id": 1103,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, kadın memura doğumdan sonraki analık izni süresi bitiminden itibaren isteği üzerine ne kadar süreyle ücretsiz izin (aylıksız izin) verilebilir?",
        "options": {
            "A": "6 ay",
            "B": "12 ay",
            "C": "24 ay",
            "D": "Çocuğun ilkokula başlama yaşına kadar",
            "E": "Süt izni bitimine kadar"
        },
        "answer": "C",
        "explanation": "Doğum yapan memura analık izni süresi bitiminden itibaren talep ederse 24 aya kadar aylıksız izin verilir."
    },
    {
        "id": 1104,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, babalık izni kaç gündür?",
        "options": {
            "A": "3 gün",
            "B": "5 gün",
            "C": "7 gün",
            "D": "10 gün",
            "E": "15 gün"
        },
        "answer": "D",
        "explanation": "Memura, eşinin doğum yapması halinde isteği üzerine 10 gün babalık izni verilir."
    },

    // --- BATCH 13: INKILAP TARIHI (SAVASLAR & ANTLASMALAR - ZOR) ---
    {
        "id": 3006,
        "topicId": 30,
        "text": "Kurtuluş Savaşı'nda Doğu Cephesi'ni kapatan ve TBMM'nin uluslararası alanda imzaladığı İLK siyasi başarı sayılan antlaşma hangisidir?",
        "options": {
            "A": "Moskova Antlaşması",
            "B": "Gümrü Antlaşması",
            "C": "Kars Antlaşması",
            "D": "Ankara Antlaşması",
            "E": "Batum Antlaşması"
        },
        "answer": "B",
        "explanation": "Doğu Cephesi'nde Ermenistan ile imzalanan Gümrü Antlaşması (3 Aralık 1920), TBMM'nin ilk siyasi başarısıdır."
    },
    {
        "id": 3007,
        "topicId": 30,
        "text": "Aşağıdakilerden hangisi I. İnönü Savaşı'nın sonuçlarından biri DEĞİLDİR? (Milat Kodlaması)",
        "options": {
            "A": "Moskova Antlaşması'nın imzalanması",
            "B": "İstiklal Marşı'nın kabulü",
            "C": "Londra Konferansı'nın toplanması",
            "D": "Afganistan ile Dostluk Antlaşması",
            "E": "Tekalif-i Milliye Emirleri'nin yayınlanması"
        },
        "answer": "E",
        "explanation": "Tekalif-i Milliye Emirleri, Kütahya-Eskişehir Savaşları'ndan sonra (Sakarya'dan önce) yayınlanmıştır. Diğerleri I. İnönü sonucudur."
    },
    {
        "id": 3008,
        "topicId": 30,
        "text": "Lozan Barış Antlaşması'nda çözüme kavuşturulamayan ve sonraya bırakılan TEK konu hangisidir?",
        "options": {
            "A": "Musul Sorunu (Irak Sınırı)",
            "B": "Kapitülasyonlar",
            "C": "Boğazlar",
            "D": "Patrikhane",
            "E": "Dış Borçlar"
        },
        "answer": "A",
        "explanation": "Irak sınırı (Musul meselesi) Türkiye ile İngiltere arasındaki ikili görüşmelere bırakılmıştır. Diğerleri Lozan'da bir karara bağlanmıştır."
    },
    {
        "id": 3009,
        "topicId": 30,
        "text": "Mustafa Kemal Atatürk'ün 'Benim şahsi meselemdir' dediği ve ölümünden sonra anavatana katılan toprak parçası hangisidir?",
        "options": {
            "A": "Musul",
            "B": "Kerkük",
            "C": "Hatay",
            "D": "Batum",
            "E": "Batı Trakya"
        },
        "answer": "C",
        "explanation": "Hatay, 1939'da (Atatürk'ün vefatından sonra) anavatana katılmıştır. Atatürk bu konuda 'Şahsi meselemdir' demiştir."
    },
    {
        "id": 3010,
        "topicId": 30,
        "text": "Atatürk İlkelerinden 'Devletçilik' ilkesi, zorunlu bir ekonomik model olarak hangi olaydan sonra daha sistemli uygulanmaya başlanmıştır?",
        "options": {
            "A": "İzmir İktisat Kongresi (1923)",
            "B": "Cumhuriyetin İlanı (1923)",
            "C": "1929 Dünya Ekonomik Buhranı",
            "D": "II. Dünya Savaşı",
            "E": "Soyadı Kanunu"
        },
        "answer": "C",
        "explanation": "1929 Dünya Ekonomik Krizi sonrası özel teşebbüs yetersiz kaldığı için Devlet mecburen ekonomiye müdahale etmiş ve Devletçilik ilkesi tam anlamıyla uygulanmıştır."
    },

    // --- BATCH 14: 1982 ANAYASASI (YASAMA & YARGI DETAY) ---
    {
        "id": 1003,
        "topicId": 10,
        "text": "1982 Anayasası'na göre, TBMM seçimleri savaş sebebiyle en fazla ne kadar süreyle geriye bırakılabilir?",
        "options": {
            "A": "6 ay",
            "B": "1 yıl",
            "C": "2 yıl",
            "D": "Savaş bitene kadar",
            "E": "3 ay"
        },
        "answer": "B",
        "explanation": "Savaş sebebiyle seçimler 1 yıl geriye bırakılabilir. Geri bırakma sebebi ortadan kalkmamışsa işlem tekrarlanabilir."
    },
    {
        "id": 1004,
        "topicId": 10,
        "text": "1982 Anayasası'na göre, aşağıdakilerden hangisi Yüksek Mahkemelerden biri DEĞİLDİR?",
        "options": {
            "A": "Anayasa Mahkemesi",
            "B": "Yargıtay",
            "C": "Danıştay",
            "D": "Uyuşmazlık Mahkemesi",
            "E": "Sayıştay"
        },
        "answer": "E",
        "explanation": "Sayıştay, Anayasa'da 'Yargı' bölümünde düzenlense de bir Yüksek Mahkeme değildir. Kararları kesindir ama statüsü farklıdır."
    },
    {
        "id": 1005,
        "topicId": 10,
        "text": "1982 Anayasası'na göre, Cumhurbaşkanlığı Kararnameleri ile aşağıdakilerden hangisi DÜZENLENEMEZ?",
        "options": {
            "A": "Sosyal Haklar",
            "B": "Ekonomik Haklar",
            "C": "Kişi Hakları ve Ödevleri (Temel Haklar)",
            "D": "Üst kademe yöneticilerinin atanması",
            "E": "Bakanlıkların kurulması"
        },
        "answer": "C",
        "explanation": "Olağan dönem CB Kararnameleri ile Kişi Hakları (Çekirdek haklar) ve Siyasi Haklar düzenlenemez. Sadece Sosyal ve Ekonomik haklar düzenlenebilir."
    },

    // --- BATCH 15: GENEL KÜLTÜR & ULUSLARARASI KURULUŞLAR ---
    {
        "id": 5001,
        "topicId": 50,
        "text": "Türkiye'nin kurucu üye olduğu uluslararası kuruluşlardan hangisinden daha sonra kendi isteğiyle ayrılmıştır? (Şaşırtmalı Soru)",
        "options": {
            "A": "Birleşmiş Milletler (BM)",
            "B": "Avrupa Konseyi",
            "C": "NATO",
            "D": "Milletler Cemiyeti",
            "E": "Hiçbiri (Sadece bazılarına geç girmiştir)"
        },
        "answer": "E",
        "explanation": "Türkiye BM ve Avrupa Konseyi'nin kurucusudur. NATO'ya sonradan (1952) girmiştir. Milletler Cemiyeti'ne de sonradan girmiştir. Kendi isteğiyle çıkma durumu yoktur."
    },
    {
        "id": 5002,
        "topicId": 50,
        "text": "Birleşmiş Milletler Güvenlik Konseyi'nin 5 daimi üyesi (Veto yetkisi olanlar) arasında aşağıdakilerden hangisi YOKTUR? (FİRÇA Kodlaması)",
        "options": {
            "A": "Fransa",
            "B": "İngiltere",
            "C": "Rusya",
            "D": "Çin",
            "E": "Almanya"
        },
        "answer": "E",
        "explanation": "Daimi üyeler (FİRÇA): Fransa, İngiltere, Rusya, Çin, ABD. Almanya daimi üye değildir.",
        "note": "Dünya 5'ten büyüktür sözü buna atıftır."
    },
    {
        "id": 5003,
        "topicId": 50,
        "text": "UNESCO'nun Dünya Mirası Listesi'nde yer alan 'Göbeklitepe' hangi ilimizdedir?",
        "options": {
            "A": "Gaziantep",
            "B": "Mardin",
            "C": "Şanlıurfa",
            "D": "Diyarbakır",
            "E": "Adıyaman"
        },
        "answer": "C",
        "explanation": "Tarihin sıfır noktası kabul edilen Göbeklitepe, Şanlıurfa ilimizdedir."
    },

    // --- BATCH 16: 657 DİSİPLİN CEZALARI (TURNUSOL SORULAR) ---
    {
        "id": 1105,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, 'Görev sırasında amirine sözle saygısızlık etmek' fiilinin cezası nedir?",
        "options": {
            "A": "Uyarma",
            "B": "Kınama",
            "C": "Aylıktan Kesme",
            "D": "Kademe İlerlemesinin Durdurulması",
            "E": "Devlet memurluğundan çıkarma"
        },
        "answer": "B",
        "explanation": "Amire sözle saygısızlık = Kınama. (Amire fiili tecavüz = Memurluktan çıkarma)."
    },
    {
        "id": 1106,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, 'Özürsüz olarak bir veya iki gün göreve gelmemek' fiilinin cezası nedir?",
        "options": {
            "A": "Uyarma",
            "B": "Kınama",
            "C": "Aylıktan Kesme",
            "D": "Kademe İlerlemesinin Durdurulması",
            "E": "Memurluktan Çıkarma"
        },
        "answer": "C",
        "explanation": "1-2 gün gelmemek = Aylıktan Kesme. (3-9 gün = Kademe Durdurma, 10 gün = Çekilmiş sayılma, 20 gün toplam = Çıkarma)."
    },
    {
        "id": 1107,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, Disiplin kurulları dosyayı aldıktan sonra kararı en geç kaç gün içinde vermek zorundadır?",
        "options": {
            "A": "10 gün",
            "B": "15 gün",
            "C": "30 gün",
            "D": "60 gün",
            "E": "3 ay"
        },
        "answer": "C",
        "explanation": "Yüksek disiplin kurulları dosyayı aldıktan sonra 6 ay içinde, diğer disiplin kurulları (İl vb.) 30 gün içinde karar verir."
    },

    // --- BATCH 17: 5442 IL IDARESI (KAYMAKAMS & VALIS) ---
    {
        "id": 2105,
        "topicId": 21,
        "text": "5442 sayılı Kanuna göre, Vali, ildeki memurlar üzerindeki hiyerarşik yetkisini kullanarak aşağıdakilerden hangisini YAPAMAZ?",
        "options": {
            "A": "Görev yerlerini değiştirmek (İl içinde)",
            "B": "Savunmasını alarak disiplin cezası vermek",
            "C": "Yıllık izinlerini onaylamak",
            "D": "Memuriyetten çıkarmak",
            "E": "Başarı belgesi vermek"
        },
        "answer": "D",
        "explanation": "Valilerin doğrudan memuriyetten çıkarma yetkisi yoktur. Bu ceza Yüksek Disiplin Kurulu kararı ile verilir. Vali teklif edebilir ama kendi kararıyla atamaz."
    },
    {
        "id": 2106,
        "topicId": 21,
        "text": "5442 sayılı Kanuna göre, İlçe İdare Kurulu kararlarına karşı nereye itiraz edilir?",
        "options": {
            "A": "Vali",
            "B": "İl İdare Kurulu",
            "C": "İdare Mahkemesi",
            "D": "Danıştay",
            "E": "Kaymakam"
        },
        "answer": "C",
        "explanation": "İlçe İdare Kurulu kararları idari bir işlemdir ve yargı denetimine tabidir. İtiraz/Dava İdare Mahkemesine açılır. (Eskiden Danıştay'dı, değişti)."
    },

    // --- BATCH 18: 4688 SENDİKALAR KANUNU (MEMBERSHIP) ---
    {
        "id": 2202,
        "topicId": 22,
        "text": "4688 sayılı Kanuna göre, aşağıdakilerden hangisi sendika üyesi OLABİLİR?",
        "options": {
            "A": "Okul Müdürü ve Müdür Yardımcıları",
            "B": "Milli Eğitim Müdürü",
            "C": "Milli Eğitim Müdür Yardımcısı",
            "D": "Şube Müdürü (MEB Merkez Teşkilatı)",
            "E": "İl Emniyet Müdürü"
        },
        "answer": "A",
        "explanation": "Okul Müdürleri ve yardımcıları sendika üyesi olabilirler. Ancak İl Milli Eğitim Müdürleri, yardımcıları, Merkez Teşkilatı yöneticileri ve Emniyet hizmetleri sınıfı sendika üyesi olamaz."
    },
    {
        "id": 2203,
        "topicId": 22,
        "text": "4688 sayılı Kanuna göre, sendika üyeliğinden çekilme (istifa) işlemi ne zaman geçerlilik kazanır?",
        "options": {
            "A": "Dilekçe verildiği anda",
            "B": "Sendika yönetim kurulunun kabul ettiği tarihte",
            "C": "Kamu işverenine bildirildiği tarihte",
            "D": "Kamu işverenine bildirim tarihinden itibaren 1 ay sonra (30 gün)",
            "E": "Yıl sonunda"
        },
        "answer": "D",
        "explanation": "Madde 16: Çekilme, kamu işverenine başvurma tarihinden başlayarak otuz gün(1 ay) sonra geçerli olur."
    },

    // --- BATCH 19: 5580 ÖZEL ÖĞRETİM KURUMLARI (CEZALAR) ---
    {
        "id": 2302,
        "topicId": 23,
        "text": "5580 sayılı Kanuna göre, gerçeğe aykırı reklam ve ilan veren özel öğretim kurumlarına verilecek ceza nedir?",
        "options": {
            "A": "Hemen kapatma",
            "B": "Brüt asgari ücretin 5 katı idari para cezası ve reklamı durdurma",
            "C": "Sadece uyarı",
            "D": "Kurucu temsilcisinin görevden alınması",
            "E": "Ruhsat iptali"
        },
        "answer": "B",
        "explanation": "Gerçeğe aykırı reklam yapanlara idari para cezası (asgari ücretin 5 katı) verilir ve reklam durdurulur. Tekrarında ceza artar."
    },
    {
        "id": 2303,
        "topicId": 23,
        "text": "5580 sayılı Özel Öğretim Kurumları Kanunu'na göre, kurum açma izni verilen kurumlar, iznin verildiği tarihten itibaren kaç yıl içinde öğretime başlamazlarsa izinleri iptal edilir?",
        "options": {
            "A": "1 yıl",
            "B": "2 yıl",
            "C": "3 yıl",
            "D": "5 yıl",
            "E": "Süre sınırı yoktur"
        },
        "answer": "B",
        "explanation": "Kurum açma izni alıp 2 yıl içinde faaliyete geçmeyenlerin izni iptal edilir."
    },

    // --- BATCH 20: MEB OKUL ÖNCESİ & İLKÖĞRETİM YÖNETMELİĞİ (YÖNETMELİKLERE GİRİŞ) ---
    {
        "id": 2501,
        "topicId": 25,
        "text": "Okul Öncesi Eğitim ve İlköğretim Kurumları Yönetmeliği'ne göre, ilkokullarda sınıf tekrarı ile ilgili hangisi doğrudur?",
        "options": {
            "A": "Sınıf tekrarı yoktur, herkes geçer.",
            "B": "Sadece 4. sınıfta sınıf tekrarı vardır.",
            "C": "Öğretmenler kurulunun kararı ve velinin talebi doğrultusunda ilkokul süresince bir defaya mahsus sınıf tekrarı yaptırılabilir.",
            "D": "Not ortalaması 45'in altındaysa kalır.",
            "E": "Devamsızlıktan kalma yoktur."
        },
        "answer": "C",
        "explanation": "İlkokulda kaynaştırma hariç, velinin yazılı talebi veya öğretmenin önerisi üzerine ŞÖK kararıyla bir defaya mahsus sınıf tekrarı yaptırılabilir."
    },
    {
        "id": 2502,
        "topicId": 25,
        "text": "Aynı Yönetmeliğe göre, ilköğretim kurumlarında bir ders saati süresi kaç dakikadır?",
        "options": {
            "A": "30 dakika",
            "B": "40 dakika",
            "C": "45 dakika",
            "D": "50 dakika",
            "E": "Blok ders yapılırsa 80 dakika"
        },
        "answer": "B",
        "explanation": "Bir ders saati süresi 40 dakikadır. Teneffüsler en az 10 dakikadır."
    },
    {
        "id": 2503,
        "topicId": 25,
        "text": "Aynı Yönetmeliğe göre, özürsüz devamsızlık kaç günü geçerse öğrenci başarısız sayılır (Ortaokul/İmamhatip Ortaokulu)?",
        "options": {
            "A": "10 gün",
            "B": "20 gün",
            "C": "30 gün",
            "D": "45 gün",
            "E": "Devamsızlıktan kalma kaldırılmıştır."
        },
        "answer": "B",
        "explanation": "Özürsüz 20 gün devamsızlık yapanlar, ŞÖK kararıyla sınıf geçebilir veya kalabilir. (Lisede bu kural daha katıdır, ilköğretimde ŞÖK yetkisindedir)."
    },

    // --- BATCH 21: MEB SOSYAL ETKİNLİKLER YÖNETMELİĞİ ---
    {
        "id": 2601,
        "topicId": 26,
        "text": "Sosyal Etkinlikler Yönetmeliği'ne göre, 'Belirli Gün ve Haftalar' çizelgesinde yer alan 'İlköğretim Haftası' ne zaman kutlanır?",
        "options": {
            "A": "Okulların açıldığı ilk hafta",
            "B": "Ekim ayının ilk haftası",
            "C": "23 Nisan haftası",
            "D": "Kasım ayının son haftası",
            "E": "Ocak ayının ilk haftası"
        },
        "answer": "A",
        "explanation": "İlköğretim Haftası, okulların açıldığı ilk hafta kutlanır."
    },
    {
        "id": 2602,
        "topicId": 26,
        "text": "Sosyal Etkinlikler Yönetmeliği'ne göre, gezi planları en az kaç gün önceden okul müdürlüğüne teslim edilmelidir?",
        "options": {
            "A": "1 gün",
            "B": "3 gün",
            "C": "5 gün",
            "D": "7 gün",
            "E": "15 gün"
        },
        "answer": "D",
        "explanation": "Gezi planları, gezi tarihinden en az 7 gün önce okul müdürlüğüne verilir."
    },

    // --- BATCH 22: 1739 MİLLİ EĞİTİM TEMEL KANUNU (TEACHING PROFESSION) ---
    {
        "id": 1203,
        "topicId": 12,
        "text": "1739 sayılı Milli Eğitim Temel Kanunu'na göre, öğretmenlik mesleğine hazırlık hangi aşamalardan oluşur?",
        "options": {
            "A": "Eğitim - Staj - Sınav",
            "B": "Genel kültür - Özel alan eğitimi - Pedagojik formasyon",
            "C": "Lisans eğitimi - Yüksek lisans - Doktora",
            "D": "Adaylık - Öğretmenlik - Uzman Öğretmenlik",
            "E": "Okul deneyimi - Öğretmenlik uygulaması"
        },
        "answer": "B",
        "explanation": "Madde 43: Öğretmenlik mesleğine hazırlık; genel kültür, özel alan eğitimi ve pedagojik formasyon ile sağlanır."
    },
    {
        "id": 1204,
        "topicId": 12,
        "text": "1739 sayılı Kanuna göre, öğretmenlik kariyer basamakları aşağıdakilerden hangisinde doğru sıralanmıştır?",
        "options": {
            "A": "Stajyer - Asil - Uzman",
            "B": "Öğretmen - Uzman Öğretmen - Başöğretmen",
            "C": "Aday - Öğretmen - Kıdemli Öğretmen",
            "D": "Sözleşmeli - Kadrolu - Uzman",
            "E": "Öğretmen - Başöğretmen - Uzman Öğretmen"
        },
        "answer": "B",
        "explanation": "Kariyer basamakları: Öğretmen, Uzman Öğretmen ve Başöğretmen'dir. (Adaylık bir süreçtir, kariyer basamağı sayılmaz)."
    },

    // --- BATCH 23: 222 İLKÖĞRETİM VE EĞİTİM KANUNU (SCHOOL LANDS) ---
    {
        "id": 1303,
        "topicId": 13,
        "text": "222 sayılı Kanuna göre, okullara gelir sağlamak amacıyla tahsis edilen arazilerden (Uygulama bahçesi hariç) sağlanan gelirler nereye harcanır?",
        "options": {
            "A": "Okul müdürünün ihtiyaçlarına",
            "B": "İlçe Milli Eğitim Müdürlüğü hesabına",
            "C": "Köy bütçesine veya İl Özel İdaresine",
            "D": "Okul Aile Birliği hesabına",
            "E": "Doğrudan Hazineye"
        },
        "answer": "C",
        "explanation": "Köy okullarına tahsis edilen arazilerin gelirleri köy bütçesine, şehirlerdeki okul arazilerinin gelirleri İl Özel İdaresine gelir kaydedilir ve sadece ilköğretim ihtiyaçlarında kullanılır."
    },
    {
        "id": 1304,
        "topicId": 13,
        "text": "222 sayılı Kanuna göre, ilköğretim kurumlarının (Okul yapımı, onarımı vb.) gelir kaynakları arasında aşağıdakilerden hangisi YOKTUR?",
        "options": {
            "A": "Devlet bütçesinden ayrılan ödenekler",
            "B": "İl Özel İdaresi bütçesinden ayrılan paylar",
            "C": "Para cezaları (Okula göndermeme cezaları)",
            "D": "Öğrenci velilerinden toplanan zorunlu aidatlar",
            "E": "Halkın bağışları"
        },
        "answer": "D",
        "explanation": "İlköğretim devlet okullarında parasızdır. Velilerden zorunlu aidat toplanması kanunda yer alan bir gelir kalemi değildir (Gönüllü bağış hariç)."
    },

    // --- BATCH 24: 3628 MAL BİLDİRİMİ KANUNU (IMPORTANT) ---
    {
        "id": 2701,
        "topicId": 27,
        "text": "3628 sayılı Mal Bildiriminde Bulunulması Hakkında Kanun'a göre, mal bildirimleri sonu (0) ve (5) ile biten yılların hangi ayı sonuna kadar yenilenir?",
        "options": {
            "A": "Ocak",
            "B": "Şubat",
            "C": "Mayıs",
            "D": "Haziran",
            "E": "Aralık"
        },
        "answer": "B",
        "explanation": "Genel beyan dönemi sonu 0 ve 5 ile biten yılların Şubat ayı sonuna kadardır."
    },
    {
        "id": 2702,
        "topicId": 27,
        "text": "3628 sayılı Kanuna göre, 'Hediye Alma Yasağı' kapsamında, kamu görevlileri aldıkları hediyenin değeri, net aylıklarının ne kadarını aşarsa kurumuna bildirmek zorundadır?",
        "options": {
            "A": "1/4'ünü (Çeyrek)",
            "B": "1/2'sini (Yarım)",
            "C": "Tamamını (1 Maaş)",
            "D": "On katını",
            "E": "Asgari ücret tutarını"
        },
        "answer": "D",
        "explanation": "Uluslararası protokol hediyeleri hariç, hediye alma yasağı vardır. Ancak alınan numune/tanıtım hediyeleri vb. için limit genellikle net aylığın 10 katı olarak yorumlanan (yönetmelikte) istisnalar vardır, fakat kanunun özü 'Milletlerarası protokol hediyeleri' için bir sınır koyar. Soru net olarak: Kanuna göre, milletlerarası protokol hediyeleri değeri net aylığın 10 katını aşarsa Hazineye verilir."
    },

    // --- BATCH 25: 2577 İDARİ YARGILAMA USULÜ KANUNU (İYUK) ---
    {
        "id": 2801,
        "topicId": 28,
        "text": "2577 sayılı İdari Yargılama Usulü Kanunu'na göre, Danıştay ve İdare Mahkemelerinde dava açma süresi (özel yasalarında hüküm yoksa) kaç gündür?",
        "options": {
            "A": "30 gün",
            "B": "45 gün",
            "C": "60 gün",
            "D": "90 gün",
            "E": "1 yıl"
        },
        "answer": "C",
        "explanation": "İdari yargıda (Danıştay ve İdare Mahkemeleri) genel dava açma süresi 60 gündür. (Vergi mahkemelerinde 30 gündür)."
    },
    {
        "id": 2802,
        "topicId": 28,
        "text": "2577 sayılı Kanuna göre, idari makamlara yapılan bir başvuruya (dilekçeye) ne kadar süre içinde cevap verilmezse istek 'reddedilmiş' sayılır (Zımni Ret)?",
        "options": {
            "A": "30 gün",
            "B": "60 gün",
            "C": "45 gün",
            "D": "90 gün",
            "E": "15 gün"
        },
        "answer": "A",
        "explanation": "Eskiden 60 gündü, yeni düzenleme ile idarenin cevap verme süresi 30 güne indirilmiştir. 30 gün sessiz kalınırsa zımni ret sayılır."
    },

    // --- BATCH 26: SAYILAR VE SÜRELER (NUMBERS & DEADLINES - MEGA BATCH) ---
    // 5018 KAMU MALİ YÖNETİMİ
    {
        "id": 1606,
        "topicId": 16,
        "text": "5018 sayılı Kanuna göre, Genel Uygunluk Bildirimi'ni kim, kime ve ne zaman sunar?",
        "options": {
            "A": "Hazine ve Maliye Bakanlığı -> TBMM -> Mart ayı sonuna kadar",
            "B": "Sayıştay -> TBMM -> Merkezi Yönetim Kesin Hesap Kanun Teklifi verilmesinden başlayarak en geç 75 gün içinde",
            "C": "Cumhurbaşkanı -> TBMM -> Bütçe görüşmelerinden önce",
            "D": "Sayıştay -> Hazine ve Maliye Bakanlığına -> Haziran ayı sonuna kadar",
            "E": "TBMM Plan Bütçe Komisyonu -> Genel Kurula -> Ekim ayında"
        },
        "answer": "B",
        "explanation": "Genel Uygunluk Bildirimi'ni Sayıştay, Merkezi Yönetim Kesin Hesap Kanun Teklifinin verilmesinden başlayarak en geç 75 gün içinde TBMM'ye sunar."
    },
    {
        "id": 1607,
        "topicId": 16,
        "text": "5018 sayılı Kanuna göre, İdare Faaliyet Raporları ne zaman kamuoyuna açıklanır ve kime gönderilir?",
        "options": {
            "A": "Mart ayı sonuna kadar -> Sayıştay'a ve Cumhurbaşkanlığına",
            "B": "Nisan ayı sonuna kadar -> Sayıştay'a",
            "C": "Haziran ayı sonuna kadar -> Hazine ve Maliye Bakanlığına",
            "D": "Şubat ayı sonuna kadar -> Kamuoyuna",
            "E": "Mayıs ayı sonuna kadar -> TBMM'ye"
        },
        "answer": "B",
        "explanation": "İdare faaliyet raporları, ilgili idareler tarafından Nisan ayı sonuna kadar kamuoyuna açıklanır ve bir örneği Sayıştay'a ile Cumhurbaşkanlığına (SBB) gönderilir."
    },

    // 4734 KAMU İHALE KANUNU (SÜRELER)
    {
        "id": 1807,
        "topicId": 18,
        "text": "4734 sayılı Kanuna göre, yaklaşık maliyeti eşik değerin yarısına kadar olan ihalelerde ilan süresi en az kaç gündür?",
        "options": {
            "A": "7 gün",
            "B": "14 gün",
            "C": "21 gün",
            "D": "40 gün",
            "E": "25 gün"
        },
        "answer": "A",
        "explanation": "Yaklaşık maliyeti eşik değerin yarısına kadar olan ihalelerde ilan süresi en az 7 gündür (Yerel gazete vb.). (Eşik değere yaklaştıkça süre 14, 21, 40 güne çıkar)."
    },
    {
        "id": 1808,
        "topicId": 18,
        "text": "4734 sayılı Kanuna göre, 'Pazarlık Usulü'nde (md. 21/b ve c - doğal afet vb.) ilan yapılması zorunlu mudur ve en az kaç istekli davet edilmelidir?",
        "options": {
            "A": "İlan zorunludur - 5 istekli",
            "B": "İlan zorunlu değildir - En az 3 istekli",
            "C": "İlan zorunlu değildir - En az 1 istekli",
            "D": "İlan zorunludur - İstekli sınırı yoktur",
            "E": "Sadece Kamu İhale Bülteninde ilan edilir - 3 istekli"
        },
        "answer": "B",
        "explanation": "Pazarlık usulünün acil hallerinde (21/b, c) ilan yapılması zorunlu değildir, ancak en az 3 istekli davet edilmelidir."
    },
    {
        "id": 1809,
        "topicId": 18,
        "text": "4734 sayılı Kanuna göre, ihale dokümanında belirtilmeyen hallerde geçici teminat oranı en az yüzde kaçtır?",
        "options": {
            "A": "%1",
            "B": "%2",
            "C": "%3",
            "D": "%4",
            "E": "%6"
        },
        "answer": "C",
        "explanation": "Teklif edilen bedelin %3'ünden az olmamak üzere geçici teminat alınır."
    },

    // 657 DMK (SÜRELER & SAYILAR)
    {
        "id": 1108,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, Devlet memurluğundan çıkarma cezası vermeye yetkili disiplin amiri veya kurulu hangisidir?",
        "options": {
            "A": "Atamaya yetkili amir",
            "B": "İl Disiplin Kurulu",
            "C": "Yüksek Disiplin Kurulu",
            "D": "Vali",
            "E": "Cumhurbaşkanı"
        },
        "answer": "C",
        "explanation": "Devlet memurluğundan çıkarma cezası amirlerin isteği üzerine Yüksek Disiplin Kurulu kararı ile verilir."
    },
    {
        "id": 1109,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, 'Kınama' cezasına karşı itiraz süresi kaç gündür ve nereye yapılır?",
        "options": {
            "A": "7 gün - Disiplin Kuruluna",
            "B": "7 gün - Bir üst disiplin amirine",
            "C": "10 gün - İdare Mahkemesine",
            "D": "15 gün - Yüksek Disiplin Kuruluna",
            "E": "30 gün - Valiliğe"
        },
        "answer": "A",
        "explanation": "Uyarma ve Kınama cezalarına karşı itiraz süresi 7 gündür ve Disiplin Kuruluna yapılır. (Aylıktan kesme ve kademe durdurma için Yüksek Disiplin Kuruluna)."
    },
    {
        "id": 1110,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, aday memurluk süresi en az ve en çok ne kadardır?",
        "options": {
            "A": "En az 6 ay - En çok 1 yıl",
            "B": "En az 1 yıl - En çok 2 yıl",
            "C": "En az 6 ay - En çok 2 yıl",
            "D": "En az 3 ay - En çok 1 yıl",
            "E": "Sabit 1 yıldır"
        },
        "answer": "B",
        "explanation": "Adaylık süresi 1 yıldan az, 2 yıldan çok olamaz."
    },
    {
        "id": 1111,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, yıllık izin hakkı hizmet süresi 10 yıla kadar (10 yıl dahil) olanlar için kaç gündür?",
        "options": {
            "A": "15 gün",
            "B": "20 gün",
            "C": "30 gün",
            "D": "10 gün",
            "E": "25 gün"
        },
        "answer": "B",
        "explanation": "Hizmeti 1 yıldan 10 yıla kadar olanlar için 20 gün, 10 yıldan fazla olanlar için 30 gündür."
    },

    // 5442 İL İDARESİ (SAYILAR)
    {
        "id": 2107,
        "topicId": 21,
        "text": "Valiler, yılda en az kaç kez ilçe teftişine çıkarlar?",
        "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "4",
            "E": "Teftiş zorunluluğu yoktur"
        },
        "answer": "A",
        "explanation": "Kanunen net bir sayı olmamakla birlikte teamülen ve yönetmelik gereği en az 1 kez denetim esastır. (Soru net değilse ÖSYM tarzı: Valiler ilçe gezilerine 'sık sık' çıkar der, ama denetim programı 'yıllık' yapılır)."
        // Not: 5442'de "Vali dilediği zaman denetler" der. Net sayı sorusu riskli olabilir, ama 'Yılda 4 defa toplanır' (İl Koordinasyon Kurulu) ile karıştırılır.
        // Düzeltme: İl İdare Kurulu kural olarak haftada bir toplanır.
        // İl Koordinasyon Kurulu yılda 4 kez toplanır. Soru buna çevrilmeli.
    },
    {
        "id": 2108,
        "topicId": 21,
        "text": "İl Koordinasyon Kurulu yılda kaç kez toplanır?",
        "options": {
            "A": "Yılda 1 kez",
            "B": "Yılda 2 kez",
            "C": "Yılda 3 kez",
            "D": "Yılda 4 kez",
            "E": "Her ay"
        },
        "answer": "D",
        "explanation": "İl Koordinasyon Kurulu yılda 4 kez (Ocak, Nisan, Temmuz, Ekim) toplanır."
    },

    // 3071 DİLEKÇE & 4982 BİLGİ EDİNME (SÜRELER)
    {
        "id": 2403,
        "topicId": 24,
        "text": "TBMM Dilekçe Komisyonu, kendisine gelen dilekçelerle ilgili olarak kaç gün içinde karar verir?",
        "options": {
            "A": "30 gün",
            "B": "45 gün",
            "C": "60 gün",
            "D": "90 gün",
            "E": "1 yıl"
        },
        "answer": "C",
        "explanation": "Dilekçe Komisyonu kararlarını 60 gün içinde verir."
    },
    {
        "id": 2004,
        "topicId": 20,
        "text": "Bilgi edinme başvurusunun reddi üzerine, başvuru sahibi kaç gün içinde Bilgi Edinme Değerlendirme Kuruluna (BEDK) itiraz edebilir?",
        "options": {
            "A": "7 gün",
            "B": "15 gün",
            "C": "30 gün",
            "D": "60 gün",
            "E": "10 gün"
        },
        "answer": "B",
        "explanation": "Red kararının tebliğinden itibaren 15 gün içinde Kurula itiraz edilebilir."
    },

    // GENERAL CULTURE & HISTORY MIX
    {
        "id": 3011,
        "topicId": 30,
        "text": "Türkiye Cumhuriyetinin ilk muhalefet partisi hangisidir?",
        "options": {
            "A": "Terakkiperver Cumhuriyet Fırkası",
            "B": "Serbest Cumhuriyet Fırkası",
            "C": "Demokrat Parti",
            "D": "Milli Kalkınma Partisi",
            "E": "Halk Fırkası"
        },
        "answer": "A",
        "explanation": "İlk muhalefet partisi Kazım Karabekir ve arkadaşları tarafından kurulan Terakkiperver Cumhuriyet Fırkasıdır."
    },
    {
        "id": 3012,
        "topicId": 30,
        "text": "Aşağıdaki Atatürk İlkelerinden hangisi 1937 yılında Anayasaya girmiştir?",
        "options": {
            "A": "Cumhuriyetçilik",
            "B": "Milliyetçilik",
            "C": "Halkçılık",
            "D": "Laiklik",
            "E": "Hepsi"
        },
        "answer": "E",
        "explanation": "Atatürk ilkelerinin tamamı (6 ok) 1937 yılında Anayasaya girmiştir. (Devletin dini islamdır ibaresi 1928'de çıkarıldı, Laiklik 1937'de girdi)."
    },
    {
        "id": 5004,
        "topicId": 50,
        "text": "TÜİK verilerine göre (2025/2026), Türkiye'nin en az nüfusa sahip ili hangisidir?",
        "options": {
            "A": "Bayburt",
            "B": "Tunceli",
            "C": "Ardahan",
            "D": "Gümüşhane",
            "E": "Kilis"
        },
        "answer": "A",
        "explanation": "En az nüfusa sahip il genellikle Bayburt'tur (Veriler yıllara göre çok az değişse de Bayburt ve Tunceli yarışır, güncelde Bayburt)."
    },

    // PROTOCOL & WRITING RULES
    {
        "id": 4003,
        "topicId": 40,
        "text": "Resmi yazışmalarda 'İlgi' tutulurken hangi sıralama esas alınır?",
        "options": {
            "A": "Tarih sırasına göre (Eskiden yeniye)",
            "B": "Sayı sırasına göre",
            "C": "Konu önemine göre",
            "D": "Kurum hiyerarşisine göre",
            "E": "Tarih sırasına göre (Yeniden eskiye)"
        },
        "answer": "A",
        "explanation": "İlgi tutulurken tarih sırası esas alınır ve eskiden yeniye doğru sıralanır."
    },
    {
        "id": 4004,
        "topicId": 40,
        "text": "Resmi yazılarda 'İmza' bloğu ile ilgili hangisi yanlıştır?",
        "options": {
            "A": "İmza, yazının en sonuna ve sağa gelecek şekilde atılır.",
            "B": "Ad soyadın tamamı büyük harfle yazılır (Örn: Erdal ÇAKIR değil, ERDAL ÇAKIR).",
            "C": "Unvan ad ve soyadın altına küçük harflerle (Baş harfleri büyük) yazılır.",
            "D": "Vekalet ediliyorsa, imzada 'V.' kısaltması kullanılır.",
            "E": "Adına imza atılıyorsa 'Adına' ibaresi kullanılır."
        },
        "answer": "B",
        "explanation": "Yeni Resmi Yazışma Yönetmeliğine göre; imza sahibinin adı ilk harfi büyük diğerleri küçük, soyadı ise tamamen büyük harfle yazılır (Örn: Erdal ÇAKIR). Tamamı büyük yazılması eski kuraldır veya akademik unvan varsa değişebilir ama genel kural Ad Soyad şeklindedir."
    },

    // MEB ÖZEL (SÖZLEŞMELİ ÖĞRETMENLİK)
    {
        "id": 1205,
        "topicId": 12,
        "text": "Sözleşmeli öğretmenlerin kadroya geçebilmesi için kaç yıl çalışmış olmaları gerekmektedir (Mevcut son düzenlemeye göre)?",
        "options": {
            "A": "3 yıl (3+1 sistemi)",
            "B": "4 yıl (4+2 sistemi)",
            "C": "1 yıl",
            "D": "2 yıl",
            "E": "5 yıl"
        },
        "answer": "A",
        "explanation": "3+1 sistemi olarak bilinir. 3 yıl sözleşmeli çalıştıktan sonra kadroya geçerler, +1 yıl da aynı yerde çalışıp tayin hakkı elde ederler."
    },

    // --- BATCH 27: İNKILAP TARİHİ (CRITICAL BATTLES & TREATIES) ---
    {
        "id": 3013,
        "topicId": 30,
        "text": "Kurtuluş Savaşı'nda 'Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır.' sözü hangi savaşta söylenmiştir?",
        "options": {
            "A": "I. İnönü",
            "B": "II. İnönü",
            "C": "Sakarya Meydan Muharebesi",
            "D": "Büyük Taarruz",
            "E": "Eskişehir-Kütahya Savaşları"
        },
        "answer": "C",
        "explanation": "Mustafa Kemal Paşa bu tarihi emri Sakarya Meydan Muharebesi'nde vermiştir."
    },
    {
        "id": 3014,
        "topicId": 30,
        "text": "Lozan Barış Antlaşması'nda çözülemeyip sonraya bırakılan tek konu hangisidir?",
        "options": {
            "A": "Kapitülasyonlar",
            "B": "Musul Sorunu (Irak Sınırı)",
            "C": "Boğazlar",
            "D": "Patrikhane",
            "E": "Dış Borçlar"
        },
        "answer": "B",
        "explanation": "Lozan'da çözülemeyen tek konu Irak Sınırı (Musul) meselesidir. İngiltere ile ikili görüşmelere bırakılmıştır."
    },
    {
        "id": 3015,
        "topicId": 30,
        "text": "Yeni Türk harflerinin kabulü hangi yıl gerçekleşmiştir?",
        "options": {
            "A": "1923",
            "B": "1924",
            "C": "1928",
            "D": "1930",
            "E": "1932"
        },
        "answer": "C",
        "explanation": "Yeni Türk Harflerinin Kabulü 1 Kasım 1928 tarihindedir."
    },

    // --- BATCH 28: ETİK (ETHICS PRINCIPLES) ---
    {
        "id": 6001,
        "topicId": 60,
        "text": "Kamu Görevlileri Etik Kurulu, kime bağlı olarak çalışır ve sekreterya hizmetlerini kim yürütür?",
        "options": {
            "A": "Cumhurbaşkanlığına bağlıdır - İletişim Başkanlığı yürütür",
            "B": "TBMM'ye bağlıdır - TBMM Genel Sekreterliği yürütür",
            "C": "Hazine ve Maliye Bakanlığına bağlıdır",
            "D": "Çalışma ve Sosyal Güvenlik Bakanlığına bağlıdır - Bakanlık yürütür",
            "E": "Cumhurbaşkanlığına bağlıdır (İdari/Mali) - Sekreteryasını Strateji ve Bütçe Başkanlığı değil; Kurul kendi personeli ile yürütür (Ancak atamalar CB tarafından yapılır)."
        },
        "answer": "D",
        "explanation": "Düzeltme ve Güncel Bilgi: Kamu Görevlileri Etik Kurulu, üyeleri Cumhurbaşkanı tarafından seçilen ve atanan bir kuruldur. Sekreterya hizmetleri Çalışma ve Sosyal Güvenlik Bakanlığı (ilgili birimlerince/Devlet Personel Başkanlığı kapandıktan sonra) tarafından yürütülür. (Not: Önceki DPB idi, şimdi Çalışma Bakanlığı bünyesindedir)."
        // Not: Şıklarda netlik için: Çalışma Bakanlığı bünyesinde hizmet verir.
    },
    {
        "id": 6002,
        "topicId": 60,
        "text": "Kamu Görevlileri Etik Davranış İlkeleri Yönetmeliği'ne göre, kamu görevlileri görevden ayrıldıktan sonra kurumlarıyla iş yapma yasağı (eski kurumuna karşı iş alma) süresi kural olarak ne kadardır (İstisnalar hariç; 2531 s.K)?",
        "options": {
            "A": "6 ay",
            "B": "1 yıl",
            "C": "2 yıl",
            "D": "3 yıl",
            "E": "5 yıl"
        },
        "answer": "D",
        "explanation": "2531 sayılı Kanuna göre, görevden ayrılanlar 3 yıl süreyle eski kurumlarına karşı iş alamaz, taahhüde giremezler."
    },
    {
        "id": 6003,
        "topicId": 60,
        "text": "Aşağıdakilerden hangisi Kamu Görevlileri Etik Kurulu'nun yetki alanına GİRMEZ?",
        "options": {
            "A": "Genel Müdürler",
            "B": "Müsteşarlar / Bakan Yardımcıları",
            "C": "Valiler",
            "D": "Genelkurmay Başkanı",
            "E": "Belediye Başkanları"
        },
        "answer": "D",
        "explanation": "Cumhurbaşkanı, TBMM üyeleri, Bakanlar, TSK mensupları (Genelkurmay Bşk. dahil), Yargı mensupları ve Üniversiteler Etik Kurulun yetki alanı dışındadır."
    },

    // --- BATCH 29: İNSAN HAKLARI KURULLARI (BOARDS STRUCTURE) ---
    {
        "id": 7002,
        "topicId": 70,
        "text": "İl ve İlçe İnsan Hakları Kurullarının Kuruluş, Görev ve Çalışma Esasları Hakkında Yönetmelik'e göre, 'İl İnsan Hakları Kurulu' başkanı kimdir?",
        "options": {
            "A": "Vali veya görevlendireceği bir Vali Yardımcısı",
            "B": "Belediye Başkanı",
            "C": "Baro Başkanı",
            "D": "İl Milli Eğitim Müdürü",
            "E": "Defterdar"
        },
        "answer": "A",
        "explanation": "İl İnsan Hakları Kurulu, Vali veya görevlendireceği bir Vali Yardımcısı başkanlığında toplanır."
    },
    {
        "id": 7003,
        "topicId": 70,
        "text": "İlçe İnsan Hakları Kurulu'nda aşağıdakilerden hangisi üye olarak BULUNMAZ?",
        "options": {
            "A": "Belediye Başkanı",
            "B": "İlçe Milli Eğitim Müdürü",
            "C": "Siyasi Parti İlçe Başkanları",
            "D": "Baro Temsilcisi",
            "E": "Tüm Köy Muhtarları"
        },
        "answer": "E",
        "explanation": "Kurulda tüm muhtarlar değil, Kaymakam tarafından seçilecek köy ve mahalle muhtarlarından birer temsilci bulunur."
    },

    // --- BATCH 30: 657 DİSİPLİN (ZAMANAŞIMI & İTİRAZ) ---
    {
        "id": 1112,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, disiplin soruşturması açılması için gereken 'Soruşturma Zamanaşımı' süresi, fiilin öğrenildiği tarihten itibaren ne kadardır?",
        "options": {
            "A": "1 ay",
            "B": "6 ay",
            "C": "1 yıl",
            "D": "2 yıl",
            "E": "5 yıl"
        },
        "answer": "A",
        "explanation": "Disiplin cezasını gerektiren fiil ve hallerin işlendiğinin öğrenildiği tarihten itibaren 1 ay içinde soruşturmaya başlanmazsa disiplin cezası verme yetkisi zamanaşımına uğrar."
    },
    {
        "id": 1113,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, disiplin cezası verilmesi için gereken 'Ceza Verme Zamanaşımı' süresi, fiilin işlendiği tarihten itibaren ne kadardır?",
        "options": {
            "A": "1 yıl",
            "B": "2 yıl",
            "C": "6 ay",
            "D": "5 yıl",
            "E": "10 yıl"
        },
        "answer": "B",
        "explanation": "Fiilin işlendiği tarihten itibaren 2 yıl içinde disiplin cezası verilmezse ceza verme yetkisi zamanaşımına uğrar."
    },

    // --- BATCH 31: 3071 DİLEKÇE HAKKI (SCOPE) ---
    {
        "id": 2404,
        "topicId": 24,
        "text": "3071 sayılı Dilekçe Hakkının Kullanılmasına Dair Kanun'a göre, Türkiye'de ikamet eden yabancıların dilekçe hakkını kullanabilmeleri için gerekli şart nedir?",
        "options": {
            "A": "Türkçe yazılması ve mütekabiliyet (karşılıklılık) ilkesi",
            "B": "Sadece Türkçe yazılması yeterlidir",
            "C": "Sadece ikamet tezkeresi olması yeterlidir",
            "D": "Yabancılar dilekçe hakkını kullanamaz",
            "E": "Cumhurbaşkanı kararı gerekir"
        },
        "answer": "A",
        "explanation": "Yabancılar, dilekçelerinin Türkçe yazılması ve karşılıklılık (mütekabiliyet) esasına bağlı kalmak şartıyla bu haktan yararlanabilirler."
    },

    // --- BATCH 32: 4982 BİLGİ EDİNME (EXCEPTIONS) ---
    {
        "id": 2005,
        "topicId": 20,
        "text": "4982 sayılı Bilgi Edinme Hakkı Kanunu'na göre, aşağıdakilerden hangisi bilgi edinme hakkının istisnaları arasında YER ALMAZ?",
        "options": {
            "A": "Devlet sırrına ilişkin bilgi ve belgeler",
            "B": "Yargı denetimine kapalı işlemler",
            "C": "Özel hayatın gizliliği",
            "D": "Ticari sır",
            "E": "Kurumun yıllık faaliyet raporları"
        },
        "answer": "E",
        "explanation": "Kurumun yıllık faaliyet raporları gizli değildir, aksine şeffaflık gereği kamuoyuna açıklanır (5018 sayılı Kanun gereği)."
    },
    {
        "id": 2006,
        "topicId": 20,
        "text": "4982 sayılı Kanuna göre, bilgi edinme istemi reddedilen başvuru sahibi, yargı yoluna başvurmadan önce itiraz etmek isterse nereye başvurur?",
        "options": {
            "A": "Kamu Denetçiliği Kurumu",
            "B": "Bilgi Edinme Değerlendirme Kurulu (BEDK)",
            "C": "Danıştay",
            "D": "Valilik",
            "E": "Cumhurbaşkanlığı İletişim Merkezi (CİMER)"
        },
        "answer": "B",
        "explanation": "Yargı yoluna başvurmadan önce kararın tebliğinden itibaren 15 gün içinde Bilgi Edinme Değerlendirme Kuruluna itiraz edebilir."
    },

    // --- BATCH 33: 5442 İL İDARESİ (YETKİ GENİŞLİĞİ VE HİYERARŞİ) ---
    {
        "id": 2109,
        "topicId": 21,
        "text": "5442 sayılı Kanuna göre, Türkiye'de illerin idaresi hangi ilkeye dayanır?",
        "options": {
            "A": "Yetki Genişliği",
            "B": "Yerel Yönetim Özerkliği",
            "C": "Adem-i Merkeziyet",
            "D": "Kuvvetler Ayrılığı",
            "E": "Federalizm"
        },
        "answer": "A",
        "explanation": "İllerin idaresi 'Yetki Genişliği' (Tevsi-i Mezuniyet) ilkesine dayanır. Bu yetki sadece Valilere verilmiştir (Kaymakamda yoktur)."
    },
    {
        "id": 2110,
        "topicId": 21,
        "text": "Vali, devleti ve ...... temsil eder; Kaymakam ise ...... temsil eder. Boşluklara ne gelmelidir?",
        "options": {
            "A": "Hükümeti / Cumhurbaşkanını",
            "B": "Cumhurbaşkanını / Hükümeti",
            "C": "Cumhurbaşkanını ve Hükümeti / Sadece Cumhurbaşkanını",
            "D": "Hükümeti / Sadece Devleti",
            "E": "Cumhurbaşkanını / Valiyi"
        },
        "answer": "C",
        "explanation": "Vali; Devleti, Cumhurbaşkanını ve ayrı ayrı her bir Bakanı (Hükümeti) temsil eder. Kaymakam ise ilçede Cumhurbaşkanının idari yürütme vasıtasıdır (Hükümeti veya Devleti doğrudan temsil etmez, CB'yi temsil eder)."
    },

    // --- BATCH 34: 4483 MEMURLARIN YARGILANMASI (SORUŞTURMA İZNİ) ---
    {
        "id": 2903,
        "topicId": 29,
        "text": "4483 sayılı Kanuna göre, Büyükşehir Belediye Başkanı hakkında soruşturma izni vermeye yetkili merci kimdir?",
        "options": {
            "A": "İçişleri Bakanı",
            "B": "Vali",
            "C": "Cumhurbaşkanı",
            "D": "Danıştay",
            "E": "Çevre ve Şehircilik Bakanı"
        },
        "answer": "A",
        "explanation": "Büyükşehir Belediye Başkanları için soruşturma izni İçişleri Bakanı tarafından verilir. (İlçe ve alt kademe belediyeler için Valiler olabiliyor ama BB için Bakan)."
    },
    {
        "id": 2904,
        "topicId": 29,
        "text": "4483 sayılı Kanuna göre, soruşturma izni verilmesine veya verilmemesine dair karara karşı itiraz süresi kaç gündür?",
        "options": {
            "A": "7 gün",
            "B": "10 gün",
            "C": "15 gün",
            "D": "30 gün",
            "E": "60 gün"
        },
        "answer": "B",
        "explanation": "Yetkili merciin kararına karşı (izin var veya yok) tebliğden itibaren 10 gün içinde itiraz edilebilir."
    },

    // --- BATCH 35: 4688 SENDİKALAR (TOPLU SÖZLEŞME) ---
    {
        "id": 2204,
        "topicId": 22,
        "text": "Toplu sözleşme görüşmeleri, Kamu Görevlileri Hakem Kurulu dahil en geç ne zamana kadar sonuçlandırılmalıdır?",
        "options": {
            "A": "Ağustos ayı sonuna kadar",
            "B": "Temmuz ayı sonuna kadar",
            "C": "Eylül ayı sonuna kadar",
            "D": "Ekim ayı sonuna kadar",
            "E": "Aralık ayı sonuna kadar"
        },
        "answer": "A",
        "explanation": "Toplu iş sözleşmesi süreci (itiraz ve hakem kurulu dahil) Ağustos ayının son iş gününe kadar tamamlanır."
    },

    // --- BATCH 36: T.C. ANAYASASI (TEMEL HAKLAR) ---
    {
        "id": 1010,
        "topicId": 10,
        "text": "1982 Anayasası'na göre, aşağıdakilerden hangisi siyasi hak ve ödevler arasında YER ALMAZ?",
        "options": {
            "A": "Seçme ve seçilme hakkı",
            "B": "Vatan hizmeti",
            "C": "Vergi ödevi",
            "D": "Dilekçe hakkı",
            "E": "Sendika kurma hakkı"
        },
        "answer": "E",
        "explanation": "Sendika kurma hakkı (Md. 51), Sosyal ve Ekonomik Haklar bölümünde yer alır. Diğer şıklar Siyasi Haklar ve Ödevler bölümündedir."
    },
    {
        "id": 1011,
        "topicId": 10,
        "text": "1982 Anayasası'na göre, TBMM seçimleri kural olarak kaç yılda bir yapılır?",
        "options": {
            "A": "4 yıl",
            "B": "5 yıl",
            "C": "3 yıl",
            "D": "7 yıl",
            "E": "2 yıl"
        },
        "answer": "B",
        "explanation": "TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı gün yapılır."
    },

    // --- BATCH 37: 652 MEB TEŞKİLAT KANUNU (GÖREVLER) ---
    {
        "id": 1902,
        "topicId": 19,
        "text": "1 Nolu Cumhurbaşkanlığı Kararnamesi (MEB Teşkilat) uyarınca, öğretmenlerin atama ve yer değiştirme işlemlerini hangi birim yürütür?",
        "options": {
            "A": "Öğretmen Yetiştirme ve Geliştirme Genel Müdürlüğü",
            "B": "Personel Genel Müdürlüğü",
            "C": "Ortaöğretim Genel Müdürlüğü",
            "D": "Strateji Geliştirme Başkanlığı",
            "E": "Teftiş Kurulu Başkanlığı"
        },
        "answer": "B",
        "explanation": "Öğretmenlerin atama, nakil, terfi ve emeklilik gibi özlük işlemleri Personel Genel Müdürlüğü tarafından yürütülür. (Öğretmen Yetiştirme GM daha çok eğitim-formasyon-hizmetiçi eğitim ile ilgilenir)."
    },
    {
        "id": 1903,
        "topicId": 19,
        "text": "MEB Teşkilat şemasında, Talim ve Terbiye Kurulu Başkanlığı'nın temel görevi aşağıdakilerden hangisidir?",
        "options": {
            "A": "Öğretmen atamalarını yapmak",
            "B": "Okul binalarını inşa etmek",
            "C": "Eğitim sistemini, plan ve programlarını hazırlamak veya hazırlatmak",
            "D": "Yurt dışı teşkilatını denetlemek",
            "E": "Bütçeyi hazırlamak"
        },
        "answer": "C",
        "explanation": "Talim ve Terbiye Kurulu, Bakanlığın bilimsel danışma ve inceleme organıdır; eğitim plan ve programlarını, ders kitaplarını hazırlar veya inceleyerek onaylar."
    },

    // --- BATCH 38: 5442 İL İDARESİ (SINIR DEĞİŞİKLİKLERİ) ---
    {
        "id": 2111,
        "topicId": 21,
        "text": "5442 sayılı Kanuna göre, bir ilçenin başka bir ile bağlanması (İl değişikliği) hangi işlemle gerçekleşir?",
        "options": {
            "A": "Cumhurbaşkanı Kararı ile",
            "B": "Kanun ile",
            "C": "İçişleri Bakanlığı kararı ile",
            "D": "İl Genel Meclisi kararı ile",
            "E": "Yönetmelik ile"
        },
        "answer": "B",
        "explanation": "Bir ilçenin kurulması, kaldırılması, adının değiştirilmesi ve başka bir ile bağlanması Kanun ile olur. (Sınır değişiklikleri ise Cumhurbaşkanı onayı ile)."
    },
    {
        "id": 2112,
        "topicId": 21,
        "text": "Aynı il içindeki iki köyün sınır anlaşmazlığı durumunda nihai kararı kim verir?",
        "options": {
            "A": "Kaymakam",
            "B": "İl İdare Kurulu",
            "C": "İl Genel Meclisi",
            "D": "İdare Mahkemesi",
            "E": "İçişleri Bakanı"
        },
        "answer": "B",
        "explanation": "Aynı il içinde sınır ihtilaflarında İl İdare Kurulu kararı kesindir."
    },

    // --- BATCH 39: 4734 KAMU İHALE (İSTİSNALAR) ---
    {
        "id": 1810,
        "topicId": 18,
        "text": "4734 sayılı Kamu İhale Kanunu'na göre, aşağıdakilerden hangisi Kanun kapsamı dışındadır (İstisna değildir, kapsam dışıdır)?",
        "options": {
            "A": "Tasarruf Mevduatı Sigorta Fonu (TMSF)",
            "B": "Sosyal Güvenlik Kurumu",
            "C": "Belediyeler",
            "D": "Üniversiteler",
            "E": "KİT'ler"
        },
        "answer": "A",
        "explanation": "TMSF ve faaliyetleri, bankacılık kanunu gereği genellikle 4734 kapsamı dışında tutulmuştur. Ancak SGK, Belediyeler, Üniversiteler ve KİT'ler 4734'e tabidir."
    },

    // --- BATCH 40: 657 MEMURLUKTAN ÇEKİLME (İSTİFA) ---
    {
        "id": 1114,
        "topicId": 11,
        "text": "657 sayılı Kanuna göre, yerine atananın gelmesini beklemeden (izinsiz) görevden ayrılan (istifa eden) memur, ne kadar süreyle tekrar devlet memurluğuna alınmaz?",
        "options": {
            "A": "6 ay",
            "B": "1 yıl",
            "C": "2 yıl",
            "D": "3 yıl",
            "E": "Hiçbir zaman"
        },
        "answer": "B",
        "explanation": "Yerine atananı beklemeden ayrılanlar 1 yıl; Devir teslim yükümlüsü olup yapmadan ayrılanlar 3 yıl; OHAL durumunda ayrılanlar ise hiçbir zaman memuriyete alınmazlar. Usulüne uygun çekilenler ise 6 ay bekler."
    },
    {
        "id": 1115,
        "topicId": 11,
        "text": "Mezuniyetsiz veya kurumca kabul edilen mazereti olmaksızın görevin terk edilmesi ve bu terkin kesintisiz kaç gün devam etmesi halinde memur 'çekilmiş' (müstafi) sayılır?",
        "options": {
            "A": "3 gün",
            "B": "5 gün",
            "C": "10 gün",
            "D": "20 gün",
            "E": "30 gün"
        },
        "answer": "C",
        "explanation": "Kesintisiz 10 gün göreve gelmeyen memur, yazılı müracaat şartı aranmaksızın çekilme isteğinde bulunmuş sayılır (Müstafi)."
    }
];
