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
      { k: "A", metin: "Mührü basarsın, listenin tamamına. “Ben sadece emri uyguluyorum.” Sorumluluk başkasındadır.", sonraki: "b2a" },
      { k: "B", metin: "Kırk altı dosyaya basar, 33 numarayı ayırırsın. Hatice Hanım'ı kimse bulamayacak bir kenara koyarsın. Küçük bir isyan, ama sistemin içinde kalan bir isyan.", sonraki: "b2b" },
      { k: "C", metin: "Mührü bırakır, Haluk Bey'e “Zarflar gitmedi, bunu imzalayamam” dersin. Sonucunu bilmeden, tek başına.", sonraki: "b2c" },
      { k: "D", metin: "Hiçbirini yapmaz, “Öğleye kadar bakacağım” dersin. Zamanı karar yerine koyarsın.", sonraki: "b2d" }
    ]
  }
  ,
  b2a: {
    no: 2, baslik: "Temiz Eller", dunya: "Gerçekçi dünya",
    tema: "Kötü niyet (Sartre) · Ahlaki ayrışma (Bandura)",
    metin: [
      "Mühür kırk yedi kez indi. Her seferinde aynı ses: kuru, kısa. Üçüncüden sonra sesi duymayı bıraktın. Aklının sana verdiği ilk armağan buydu.",
      "Öğleden sonra Haluk Bey omzuna dokundu. “Sen adamsın, Selim.” Bu cümleyi yirmi yılda ilk kez duyuyordun ve bir ödül mü, bir ücret mi olduğunu ayıramadın.",
      "Akşam bankada taksidi yatırdın. Kasiyer gülümsedi. Defne'nin adı makbuzda yazılıydı. Eve gelince Nuray sordu: “Zor muydu bugün?” “Her zamanki,” dedin. Yalan değildi. En tuhafı da buydu: yalan değildi.",
      "Üç hafta sonra bir sabah kapıda yaşlı bir kadın belirdi. Elinde buruşmuş bir kâğıt. “Evladım, bana bir şey tebliğ edilmemiş ama kapıma kırmızı bir çarpı çizmişler.” Hatice Yılmaz. Kayısı veren kadın mıydı, değil miydi? Ayırt edemedin ve ayırt edememek seni, ayırt edebilmekten daha çok korkuttu.",
      "Kâğıdı uzattı. İtiraz süresi dün dolmuştu. Sana bakıyordu; onun gözünde sen bir devlet değildin, sırada bekleyen bir adamdın. “Bana ne olacak?” diye sormadı. “Siz bilirsiniz,” dedi.",
      "Kâğıdın köşesinde mührünün izi duruyordu. Kendi elinin izi."
    ],
    secenekler: [
      { k: "A", metin: "Gerçeği söylersin: “Tebligat yapılmadı. Mühür bendendi.” Kendini yakmak pahasına.", sonraki: null },
      { k: "B", metin: "Prosedürün arkasına saklanırsın: “Süre dolmuş, yapabileceğim bir şey yok.”", sonraki: null },
      { k: "C", metin: "Ona sessizce bir avukatın adresini verirsin; kendi rolünü hiç söylemeden.", sonraki: null }
    ]
  },
  b2b: {
    no: 2, baslik: "Kenara Konan Dosya", dunya: "Gerçekçi dünya",
    tema: "Başkaldırı ve suç ortaklığı (Camus) · Bilişsel çelişki (Festinger)",
    metin: [
      "Kırk altı kez mühür indi, bir kez inmedi. O dosya masanın sol çekmecesinde duruyor, senden başka kimsenin görmediği yerde. Kendine “erteliyorum” diyorsun. Vazgeçmedin ama dürüst de olmadın.",
      "Haluk Bey listeyi sayıyor. Kırk altı. Kaşını kaldırıyor. “33 eksik.” “Bir evrak tamamlanmamış, yarın hallederim.” Bakışı iki saniye fazla kalıyor. Çok şey bilen insanların bakışı.",
      "Festinger'e göre akıl, birbirine zıt iki şeyi aynı anda taşıyamaz; birini yumuşatmak zorunda kalır. Akşam bunu yaşıyorsun: “Kırk altı kişiyi harcadım ama bir kişiyi kurtardım. Net hesap: iyi bir gün.” Hesap tutmuyor ama seni ikna edecek kadar yaklaşıyor.",
      "Gece Nuray soruyor: “Bir şey mi var?” Çekmecenin anahtarı cebinde.",
      "Üç gün sonra Haluk Bey anahtarı istiyor: “Çekmeceleri denetleyeceğiz, rutin.” Rutin olmadığını ikiniz de biliyorsunuz.",
      "Kırk altı hane yarın sabah kapılarında kırmızı çarpı bulacak. Bir tanesi bulmayacak. Hatice Hanım bu merhameti hak ettiği için mi bulmayacak, yoksa sen onu tanıdığını sandığın için mi?"
    ],
    secenekler: [
      { k: "A", metin: "Dosyayı gizlice dışarı çıkarıp Hatice Hanım'a bizzat götürürsün; meslekten atılmayı göze alarak.", sonraki: null },
      { k: "B", metin: "Çekmeceyi açar, dosyayı Haluk Bey'e verirsin. Küçük isyan burada biter.", sonraki: null },
      { k: "C", metin: "Kırk altı dosyanın da kopyasını çıkarıp mahalle sakinlerine ulaştırırsın. Bu artık küçük bir isyan değildir.", sonraki: null }
    ]
  },
  b2c: {
    no: 2, baslik: "Hayır", dunya: "Gerçekçi dünya",
    tema: "Sosyal dışlanma · Uyum baskısı (Asch) · Absürd ve başkaldırı (Camus)",
    metin: [
      "“Bunu imzalayamam.” Cümle odada o kadar yalnız duruyordu ki geri almak için neredeyse özür dileyecektin. Haluk Bey ne gülümsedi ne kızdı. “Anladım, Selim,” dedi. Bundan kötüsü yok.",
      "Ertesi gün mühür masandan kalktı. Bir stajyer oturdu başına: Kerem, yirmi dört yaşında. Listeyi dokuz dakikada bitirdi. Zarflar hâlâ arka odadaydı, itiraz süresi akşam başladı. Senin “hayır”ın hiçbir şeyi durdurmadı.",
      "Öğle yemeğinde masan sessiz. Asch'ın deneyinde, çizgilerin uzunluğuna herkes yanlış cevap verdiğinde, doğruyu bilenler bile çoğunlukla uyuyordu. Sen uymadın. Ödülü yok; yalnızca yalnızlığı var.",
      "Bir sabah zemin kattaki arşiv odasına nakil kâğıdı geldi. “Görev değişikliği.” Maaş aynı. Pencere yok.",
      "Camus, Sisifos'u mutlu hayal etmemiz gerektiğini söyler. Sen kayayı itmeyi reddettin ama kaya yine de yuvarlandı. Sisifos'un o kısa anı: kayanın ardından, boş ellerle aşağı inerken.",
      "Akşam Nuray sessizce soruyor: “Defne'nin taksidi?” Haklı. Bu “hayır” yalnızca senin vicdanına yaradı. Ailenin vicdanına sormadın."
    ],
    secenekler: [
      { k: "A", metin: "Nuray'a her şeyi dürüstçe anlatırsın; kararının bedelini birlikte tartarsınız.", sonraki: null },
      { k: "B", metin: "Belgeleri anonim olarak bir gazeteciye ya da barolara iletirsin. “Hayır”ı eyleme çevirirsin.", sonraki: null },
      { k: "C", metin: "İtirazını geri alır, Haluk Bey'e “Yanılmışım” dersin. Yalnızlığın bedeli ağır geldi.", sonraki: null }
    ]
  },
  b2d: {
    no: 2, baslik: "Öğleye Kadar", dunya: "Gerçekçi dünya",
    tema: "Seçmemek de bir seçimdir (Sartre) · Kaygı ve özgürlük (Kierkegaard)",
    metin: [
      "“Öğleye kadar bakacağım,” dedin. Haluk Bey başını salladı. Sana ait bir kararı bir saatin eline vermenin en zarif yolunu bulmuştun.",
      "Mühür masanın üstünde duruyor. Saat on bir. On bir buçuk. Her dakika bir karar gibi geçiyor ama sen hiçbir şey yapmıyorsun. Kierkegaard, özgürlüğün başdönmesine “kaygı” der: uçurumun kenarında insanı korkutan düşmek değil, atlayabilecek olmasıdır.",
      "On bir elli. Arka odaya gidiyorsun, zarflara bakmak için. Hâlâ orada. Birini eline alıyorsun: Hatice Yılmaz, Dere Sokağı 12. Çocukken o sokaktan geçerdin.",
      "Tam on ikide kapı açılıyor. Haluk Bey değil, stajyer Kerem: “Müdür Bey söyledi, mührü ben basayım. Siz meşgul görünüyordunuz.”",
      "Sartre, insanın özgürlüğe mahkûm olduğunu söyler. Seçmemek de bir seçimdir ve bu seçimi sana kolayca devralan bir stajyer var. İlk dosyaya mühür iniyor. Sesi duyuyorsun.",
      "Şimdi iki vicdan var, aynı odada: yapmadığın için temiz hisseden ve yapmadığın için seni yiyip bitiren."
    ],
    secenekler: [
      { k: "A", metin: "Mührü Kerem'in elinden çekip alırsın: “Dur. Yarın bakarız.” Bir gün geç kalmışsındır ama durursun.", sonraki: null },
      { k: "B", metin: "Susarsın. Zaten olan şeyi izlersin; “ben karışmadım” cümlesine sığınırsın.", sonraki: null },
      { k: "C", metin: "Zarfları arka odadan alıp bizzat dağıtmaya çıkarsın: kırk yedi hane, mesai saatinde.", sonraki: null }
    ]
  }
};
