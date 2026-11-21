/* Hikâye verisi. Yeni bölüm eklemek için BOLUMLER'e yeni bir anahtar ekle,
   ilgili seçeneğin "sonraki" alanına o anahtarı yaz. sonraki: null => henüz yazılmadı. */
window.BASLANGIC = "b1";
window.BOLUMLER = {
  b1: {
    no: 1,
    baslik: "Mühür",
    dunya: "Gerçekçi dünya",
    tema: "Kötülüğün sıradanlığı (Arendt) · Otoriteye itaat (Milgram)",
    metin: [
      "Salı sabahı, daha çayını koymadan masana bir klasör bırakıldı. Müdür Haluk Bey klasörü bırakırken gözünün içine bakmadı. Bu yirmi yılda ilk defa oluyordu.",
      "İçinde kırk yedi hanenin listesi var. Bir dere kenarındaki mahalle, “kentsel dönüşüm” adı altında boşaltılacak. Senden tek bir şey isteniyor: her dosyaya “tebligat yapılmıştır” mührünü basmak. Gerçekte tebligat yapılmadığını biliyorsun, çünkü zarfların çoğu hâlâ arka odada duruyor. Mühür basılırsa itiraz süresi bu akşam başlayacak. Oysa kimse haberdar olmayacak.",
      "Kimse sana “bunu yap” demedi. Sadece “bu iş bugün bitsin” dediler.",
      "Dosyaların arasında 33 numaralı hane dikkatini çekiyor: Hatice Yılmaz, 78 yaşında, tek başına. Adı bile sana bir yerden tanıdık geliyor. Çocukken karşı komşuları olan, sana kayısı veren kadın olabilir mi? Olmayabilir de, Yılmaz çok yaygın bir soyadı.",
      "Mührü eline alıyorsun. Soğuk, ağır, tanıdık. Yirmi yıldır bu mühür senin değil, kurumun elinde duruyor. Mührü bastığında günah sana ait olmayacak. Sen yalnızca aracı olacaksın. Bu cümle o kadar rahatlatıcı ki, kendi kendine fısıldamaktan korkuyorsun.",
      "Telefon çalıyor. Eşin: “Akşam Defne'nin okul taksidi için bankaya uğra, unutma.” Kızının taksidi, senin maaşın, Haluk Bey'in terfi listesi. Hepsi aynı düğümün ipleri.",
      "Saat 10.15. Haluk Bey kapıdan başını uzatıp soruyor: “Hallettin mi, Selim?”"
    ],
    secenekler: [
      { k: "A", metin: "Mührü basarsın, listenin tamamına. “Ben sadece emri uyguluyorum.” Sorumluluk başkasındadır.", sonraki: null },
      { k: "B", metin: "Kırk altı dosyaya basar, 33 numarayı ayırırsın. Hatice Hanım'ı kimse bulamayacak bir kenara koyarsın. Küçük bir isyan, ama sistemin içinde kalan bir isyan.", sonraki: null },
      { k: "C", metin: "Mührü bırakır, Haluk Bey'e “Zarflar gitmedi, bunu imzalayamam” dersin. Sonucunu bilmeden, tek başına.", sonraki: null },
      { k: "D", metin: "Hiçbirini yapmaz, “Öğleye kadar bakacağım” dersin. Zamanı karar yerine koyarsın.", sonraki: null }
    ]
  }
};
