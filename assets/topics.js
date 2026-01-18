const EXAM_CONFIG = {
    // Sınav Süresi (Dakika) - Opsiyonel
    duration: 120, 
    // Toplam Soru Sayısı: 60
    totalQuestions: 60,
    // Konu Dağılımı ve Soru Sayıları
    topics: [
        { id: 1, name: "Türkçe Dil Bilgisi", count: 5 },
        { id: 2, name: "Yönetimde İnsan İlişkileri ve İletişim", count: 2 },
        { id: 3, name: "Yönetim, Liderlik ve Organizasyon", count: 3 },
        { id: 4, name: "İnsan Hakları ve Demokrasi", count: 1 },
        { id: 5, name: "Yönetimde Etik", count: 1 },
        { id: 6, name: "Türk İdare Sistemi", count: 2 },
        { id: 7, name: "Protokol Kuralları", count: 1 },
        { id: 8, name: "Atatürk İlkeleri ve İnkılap Tarihi", count: 2 },
        { id: 9, name: "Genel Kültür", count: 5 },
        { id: 10, name: "T.C. Anayasası", count: 5 },
        { id: 11, name: "657 Sayılı Devlet Memurları Kanunu", count: 4 },
        { id: 12, name: "1739 Sayılı Milli Eğitim Temel Kanunu", count: 4 },
        { id: 13, name: "222 Sayılı İlköğretim ve Eğitim Kanunu", count: 4 },
        { id: 14, name: "652 Sayılı KHK", count: 1 },
        { id: 15, name: "4483 Sayılı Memurlar Yargılama Kanunu", count: 2 },
        { id: 16, name: "5018 Sayılı Kamu Mali Yönetimi Kanunu", count: 3 },
        { id: 17, name: "2886 Sayılı Devlet İhale Kanunu", count: 2 },
        { id: 18, name: "4734 Sayılı Kamu İhale Kanunu", count: 2 },
        { id: 19, name: "4735 Sayılı Kamu İhale Sözleşmeleri Kanunu", count: 1 },
        { id: 20, name: "4982 Sayılı Bilgi Edinme Hakkı Kanunu", count: 1 },
        { id: 21, name: "5442 Sayılı İl İdaresi Kanunu", count: 3 },
        { id: 22, name: "4688 Sayılı Kamu Görevlileri Sendikaları Kanunu", count: 3 },
        { id: 23, name: "5580 Sayılı Özel Öğretim Kurumları Kanunu", count: 3 }
    ]
};

// Modül olarak dışa aktarmaya gerek yok, direkt window objesine eklenecek veya script tag ile yüklenecek.
