/* Hikâye verisi. Yeni bölüm eklemek için BOLUMLER'e yeni bir anahtar ekle,
   ilgili seçeneğin "sonraki" alanına o anahtarı yaz. sonraki: null => henüz yazılmadı. */
window.BASLANGIC = "b1";
window.BOLUMLER = {
 "b1": {
  "no": 1,
  "baslik": "Mühür",
  "dunya": "Gerçekçi dünya",
  "tema": "Kötülüğün sıradanlığı (Arendt) · Otoriteye itaat (Milgram)",
  "metin": [
   "Salı sabahı, daha çayını koymadan masana bir klasör bırakıldı. Müdür Haluk Bey klasörü bırakırken gözünün içine bakmadı. Bu yirmi yılda ilk defa oluyordu.",
   "İçinde kırk yedi hanenin listesi var. Bir dere kenarındaki mahalle, “kentsel dönüşüm” adı altında boşaltılacak. Senden tek bir şey isteniyor: her dosyaya “tebligat yapılmıştır” mührünü basmak. Gerçekte tebligat yapılmadığını biliyorsun, çünkü zarfların çoğu hâlâ arka odada duruyor. Mühür basılırsa itiraz süresi bu akşam başlayacak. Oysa kimse haberdar olmayacak.",
   "Kimse sana “bunu yap” demedi. Sadece “bu iş bugün bitsin” dediler.",
   "Dosyaların arasında 33 numaralı hane dikkatini çekiyor: Hatice Yılmaz, 78 yaşında, tek başına. Adı bile sana bir yerden tanıdık geliyor. Çocukken karşı komşuları olan, sana kayısı veren kadın olabilir mi? Olmayabilir de, Yılmaz çok yaygın bir soyadı.",
   "Mührü eline alıyorsun. Soğuk, ağır, tanıdık. Yirmi yıldır bu mühür senin değil, kurumun elinde duruyor. Mührü bastığında günah sana ait olmayacak. Sen yalnızca aracı olacaksın. Bu cümle o kadar rahatlatıcı ki, kendi kendine fısıldamaktan korkuyorsun.",
   "Telefon çalıyor. Eşin: “Akşam Defne'nin okul taksidi için bankaya uğra, unutma.” Kızının taksidi, senin maaşın, Haluk Bey'in terfi listesi. Hepsi aynı düğümün ipleri.",
   "Saat 10.15. Haluk Bey kapıdan başını uzatıp soruyor: “Hallettin mi, Selim?”"
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Mührü basarsın, listenin tamamına. “Ben sadece emri uyguluyorum.” Sorumluluk başkasındadır.",
    "sonraki": "b2a"
   },
   {
    "k": "B",
    "metin": "Kırk altı dosyaya basar, 33 numarayı ayırırsın. Hatice Hanım'ı kimse bulamayacak bir kenara koyarsın. Küçük bir isyan, ama sistemin içinde kalan bir isyan.",
    "sonraki": "b2b"
   },
   {
    "k": "C",
    "metin": "Mührü bırakır, Haluk Bey'e “Zarflar gitmedi, bunu imzalayamam” dersin. Sonucunu bilmeden, tek başına.",
    "sonraki": "b2c"
   },
   {
    "k": "D",
    "metin": "Hiçbirini yapmaz, “Öğleye kadar bakacağım” dersin. Zamanı karar yerine koyarsın.",
    "sonraki": "b2d"
   }
  ]
 },
 "b2a": {
  "no": 2,
  "baslik": "Temiz Eller",
  "dunya": "Gerçekçi dünya",
  "tema": "Kötü niyet (Sartre) · Ahlaki ayrışma (Bandura)",
  "metin": [
   "Mühür kırk yedi kez indi. Her seferinde aynı ses: kuru, kısa. Üçüncüden sonra sesi duymayı bıraktın. Aklının sana verdiği ilk armağan buydu.",
   "Öğleden sonra Haluk Bey omzuna dokundu. “Sen adamsın, Selim.” Bu cümleyi yirmi yılda ilk kez duyuyordun ve bir ödül mü, bir ücret mi olduğunu ayıramadın.",
   "Akşam bankada taksidi yatırdın. Kasiyer gülümsedi. Defne'nin adı makbuzda yazılıydı. Eve gelince Nuray sordu: “Zor muydu bugün?” “Her zamanki,” dedin. Yalan değildi. En tuhafı da buydu: yalan değildi.",
   "Üç hafta sonra bir sabah kapıda yaşlı bir kadın belirdi. Elinde buruşmuş bir kâğıt. “Evladım, bana bir şey tebliğ edilmemiş ama kapıma kırmızı bir çarpı çizmişler.” Hatice Yılmaz. Kayısı veren kadın mıydı, değil miydi? Ayırt edemedin ve ayırt edememek seni, ayırt edebilmekten daha çok korkuttu.",
   "Kâğıdı uzattı. İtiraz süresi dün dolmuştu. Sana bakıyordu; onun gözünde sen bir devlet değildin, sırada bekleyen bir adamdın. “Bana ne olacak?” diye sormadı. “Siz bilirsiniz,” dedi.",
   "Kâğıdın köşesinde mührünün izi duruyordu. Kendi elinin izi."
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Gerçeği söylersin: “Tebligat yapılmadı. Mühür bendendi.” Kendini yakmak pahasına.",
    "sonraki": "b3a1"
   },
   {
    "k": "B",
    "metin": "Prosedürün arkasına saklanırsın: “Süre dolmuş, yapabileceğim bir şey yok.”",
    "sonraki": "b3a2"
   },
   {
    "k": "C",
    "metin": "Ona sessizce bir avukatın adresini verirsin; kendi rolünü hiç söylemeden.",
    "sonraki": "b3a3"
   }
  ]
 },
 "b2b": {
  "no": 2,
  "baslik": "Kenara Konan Dosya",
  "dunya": "Gerçekçi dünya",
  "tema": "Başkaldırı ve suç ortaklığı (Camus) · Bilişsel çelişki (Festinger)",
  "metin": [
   "Kırk altı kez mühür indi, bir kez inmedi. O dosya masanın sol çekmecesinde duruyor, senden başka kimsenin görmediği yerde. Kendine “erteliyorum” diyorsun. Vazgeçmedin ama dürüst de olmadın.",
   "Haluk Bey listeyi sayıyor. Kırk altı. Kaşını kaldırıyor. “33 eksik.” “Bir evrak tamamlanmamış, yarın hallederim.” Bakışı iki saniye fazla kalıyor. Çok şey bilen insanların bakışı.",
   "Festinger'e göre akıl, birbirine zıt iki şeyi aynı anda taşıyamaz; birini yumuşatmak zorunda kalır. Akşam bunu yaşıyorsun: “Kırk altı kişiyi harcadım ama bir kişiyi kurtardım. Net hesap: iyi bir gün.” Hesap tutmuyor ama seni ikna edecek kadar yaklaşıyor.",
   "Gece Nuray soruyor: “Bir şey mi var?” Çekmecenin anahtarı cebinde.",
   "Üç gün sonra Haluk Bey anahtarı istiyor: “Çekmeceleri denetleyeceğiz, rutin.” Rutin olmadığını ikiniz de biliyorsunuz.",
   "Kırk altı hane yarın sabah kapılarında kırmızı çarpı bulacak. Bir tanesi bulmayacak. Hatice Hanım bu merhameti hak ettiği için mi bulmayacak, yoksa sen onu tanıdığını sandığın için mi?"
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Dosyayı gizlice dışarı çıkarıp Hatice Hanım'a bizzat götürürsün; meslekten atılmayı göze alarak.",
    "sonraki": "b3b1"
   },
   {
    "k": "B",
    "metin": "Çekmeceyi açar, dosyayı Haluk Bey'e verirsin. Küçük isyan burada biter.",
    "sonraki": "b3b2"
   },
   {
    "k": "C",
    "metin": "Kırk altı dosyanın da kopyasını çıkarıp mahalle sakinlerine ulaştırırsın. Bu artık küçük bir isyan değildir.",
    "sonraki": "b3b3"
   }
  ]
 },
 "b2c": {
  "no": 2,
  "baslik": "Hayır",
  "dunya": "Gerçekçi dünya",
  "tema": "Sosyal dışlanma · Uyum baskısı (Asch) · Absürd ve başkaldırı (Camus)",
  "metin": [
   "“Bunu imzalayamam.” Cümle odada o kadar yalnız duruyordu ki geri almak için neredeyse özür dileyecektin. Haluk Bey ne gülümsedi ne kızdı. “Anladım, Selim,” dedi. Bundan kötüsü yok.",
   "Ertesi gün mühür masandan kalktı. Bir stajyer oturdu başına: Kerem, yirmi dört yaşında. Listeyi dokuz dakikada bitirdi. Zarflar hâlâ arka odadaydı, itiraz süresi akşam başladı. Senin “hayır”ın hiçbir şeyi durdurmadı.",
   "Öğle yemeğinde masan sessiz. Asch'ın deneyinde, çizgilerin uzunluğuna herkes yanlış cevap verdiğinde, doğruyu bilenler bile çoğunlukla uyuyordu. Sen uymadın. Ödülü yok; yalnızca yalnızlığı var.",
   "Bir sabah zemin kattaki arşiv odasına nakil kâğıdı geldi. “Görev değişikliği.” Maaş aynı. Pencere yok.",
   "Camus, Sisifos'u mutlu hayal etmemiz gerektiğini söyler. Sen kayayı itmeyi reddettin ama kaya yine de yuvarlandı. Sisifos'un o kısa anı: kayanın ardından, boş ellerle aşağı inerken.",
   "Akşam Nuray sessizce soruyor: “Defne'nin taksidi?” Haklı. Bu “hayır” yalnızca senin vicdanına yaradı. Ailenin vicdanına sormadın."
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Nuray'a her şeyi dürüstçe anlatırsın; kararının bedelini birlikte tartarsınız.",
    "sonraki": "b3c1"
   },
   {
    "k": "B",
    "metin": "Belgeleri anonim olarak bir gazeteciye ya da barolara iletirsin. “Hayır”ı eyleme çevirirsin.",
    "sonraki": "b3c2"
   },
   {
    "k": "C",
    "metin": "İtirazını geri alır, Haluk Bey'e “Yanılmışım” dersin. Yalnızlığın bedeli ağır geldi.",
    "sonraki": "b3c3"
   }
  ]
 },
 "b2d": {
  "no": 2,
  "baslik": "Öğleye Kadar",
  "dunya": "Gerçekçi dünya",
  "tema": "Seçmemek de bir seçimdir (Sartre) · Kaygı ve özgürlük (Kierkegaard)",
  "metin": [
   "“Öğleye kadar bakacağım,” dedin. Haluk Bey başını salladı. Sana ait bir kararı bir saatin eline vermenin en zarif yolunu bulmuştun.",
   "Mühür masanın üstünde duruyor. Saat on bir. On bir buçuk. Her dakika bir karar gibi geçiyor ama sen hiçbir şey yapmıyorsun. Kierkegaard, özgürlüğün başdönmesine “kaygı” der: uçurumun kenarında insanı korkutan düşmek değil, atlayabilecek olmasıdır.",
   "On bir elli. Arka odaya gidiyorsun, zarflara bakmak için. Hâlâ orada. Birini eline alıyorsun: Hatice Yılmaz, Dere Sokağı 12. Çocukken o sokaktan geçerdin.",
   "Tam on ikide kapı açılıyor. Haluk Bey değil, stajyer Kerem: “Müdür Bey söyledi, mührü ben basayım. Siz meşgul görünüyordunuz.”",
   "Sartre, insanın özgürlüğe mahkûm olduğunu söyler. Seçmemek de bir seçimdir ve bu seçimi sana kolayca devralan bir stajyer var. İlk dosyaya mühür iniyor. Sesi duyuyorsun.",
   "Şimdi iki vicdan var, aynı odada: yapmadığın için temiz hisseden ve yapmadığın için seni yiyip bitiren."
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Mührü Kerem'in elinden çekip alırsın: “Dur. Yarın bakarız.” Bir gün geç kalmışsındır ama durursun.",
    "sonraki": "b3d1"
   },
   {
    "k": "B",
    "metin": "Susarsın. Zaten olan şeyi izlersin; “ben karışmadım” cümlesine sığınırsın.",
    "sonraki": "b3d2"
   },
   {
    "k": "C",
    "metin": "Zarfları arka odadan alıp bizzat dağıtmaya çıkarsın: kırk yedi hane, mesai saatinde.",
    "sonraki": "b3d3"
   }
  ]
 },
 "b3a1": {
  "no": 3,
  "baslik": "İtiraf",
  "dunya": "Gerçekçi dünya",
  "tema": "Yüz ve sorumluluk (Levinas) · Suçluluk ve utanç (Tangney)",
  "metin": [
   "“Tebligat yapılmadı,” dedin. Sesin kendi sesin gibi gelmedi. “Mühür bendendi.”",
   "Hatice Hanım bir süre bir şey söylemedi. Öfkelenmesini bekledin. Öfke kolaydı, başa çıkılabilir bir şeydi. Ama gözleri sana değil, elindeki kâğıda baktı. Sonra yavaşça: “Yıllar önce de bir adam gelmişti. O da özür dilemişti. Özür dilemek ona yetmişti galiba.”",
   "Levinas'a göre Öteki'nin yüzü bize daha biz bir şey bilmeden sorumluluk yükler. Hatice Hanım'ın yüzü sana bir şey söylemiyordu ve tam bu yüzden her şeyi söylüyordu.",
   "Psikologlar suçluluk ile utancı ayırır. Suçluluk “Bir şey yaptım” der ve onarmaya iter. Utanç “Ben kötüyüm” der ve insanı saklanmaya iter. İçinde hangisinin olduğundan emin değilsin, çünkü ikisi de aynı kıyafeti giyiyor.",
   "Haluk Bey'in kapısı aralık. Her şeyi duymuş olabilir."
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "İtirafını yazılı hâle getirirsin, kurumsal olarak kayda geçirirsin.",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "Dosyanın yeniden açılması için elinden geleni yaparsın; mesleğinin kuralları dışına çıkarak.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "Özür dilersin ama özrünün onu kurtarmayacağını bilirsin. Sadece orada kalıp dinlersin.",
    "sonraki": null
   }
  ]
 },
 "b3a2": {
  "no": 3,
  "baslik": "Pencere Şehri",
  "dunya": "Hayali dünya",
  "tema": "Demir kafes (Weber) · Ahlaki mesafe (Bauman)",
  "metin": [
   "O gece bir şehirde uyandın. Sokak yoktu, yalnızca pencereler vardı. Her bina bir sıra pencereydi ve her pencerenin arkasında bir memur oturuyordu.",
   "Pencerelerin önünde sıra bekleyenlere kimse bakmıyordu, herkes kâğıda bakıyordu. Bir kadın bağırdı: “Çocuğum düştü!” Memur başını kaldırmadan: “Yanlış pencere.”",
   "Weber modern bürokrasiyi “demir kafes” olarak adlandırdı: kuralları akılcı, sonuçları insanlık dışı bir düzen. Bauman'a göre bürokrasi sorumluluğu şöyle çözer: eylemle sonuç arasına o kadar çok halka koyar ki kimse sonucun faili olmaz.",
   "Pencerelerden birinde kendi yüzünü gördün, mührü elinde. Ama o “sen” seni tanımadı. Sırada bekleyen kişi ona “Siz kimsiniz?” diye sordu.",
   "Kafesin demir çubuklarına dokundun. Soğuktu. Bir an için çubuklar kendi kollarının uzantısı gibi göründü.",
   "Uyandığında sabahtı ve mühür masanın üstünde duruyordu."
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Sabah işe gider, “bugün farklı yapacağım” dersin. Küçük bir şeyle başlarsın: sırada bekleyen ilk kişinin gözünün içine bakarsın.",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "Rüyayı rüya olarak bırakırsın, uykusuzluğa verirsin.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "İşten ayrılmayı düşünürsün; kafesin dışında ne olduğunu bilmeden.",
    "sonraki": null
   }
  ]
 },
 "b3a3": {
  "no": 3,
  "baslik": "İsimsiz İyilik",
  "dunya": "Gerçekçi dünya",
  "tema": "Gyges'in yüzüğü (Platon) · Ahlaki lisans",
  "metin": [
   "Avukatın adresini bir kâğıda yazdın. Ona verirken ellerin titremedi, bu seni şaşırttı. Hatice Hanım kâğıdı cebine koydu. “Teşekkür ederim, evladım.” Kendine “iyilik yaptım” demek istedin, sesin çıkmadı.",
   "Çünkü kimse bilmiyordu. Hatice Hanım mührü senin bastığını bilmiyordu, Haluk Bey avukatı bilmiyordu. Platon'un Devlet'inde Gyges, onu görünmez kılan bir yüzük bulur. Kimsenin göremediği yerde insan hâlâ adil kalabilir mi?",
   "Senin yüzüğün mühürdü ve görünmezlik iki yönlü çalışıyordu: kötülüğünü de gizliyordu, iyiliğini de.",
   "Üç hafta sonra haberi duydun: avukat bir dava açmıştı, mahalle için bir iptal kararı çıkabilirdi. İçinde bir şey kabardı. Gurur muydu, rahatlama mı? Bir de saklamak zorunda olmanın tuhaf yalnızlığı.",
   "Psikolojide buna “ahlaki lisans” denir: iyi bir davranıştan sonra insan, bir sonraki kötülüğe kendine daha kolay izin verir. Bir elinde mühür, diğer elinde avukat adresi. Hesap defterin dengelendi mi?"
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Hesap defterini bırakırsın. İyiliği saymadan yaparsın, sonuç ne olursa olsun.",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "Haluk Bey'e kendini ifşa edersin; gizli iyiliği açık dürüstlüğe çevirirsin.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "Sessizliğini sürdürürsün. Mührü basan eli zaten kimse bilmeyecek.",
    "sonraki": null
   }
  ]
 },
 "b3b1": {
  "no": 3,
  "baslik": "Dere Sokağı 12",
  "dunya": "Gerçekçi dünya",
  "tema": "Ödev ahlakı (Kant) · Faydacılık (Bentham, Mill)",
  "metin": [
   "Gece yarısı dosyayı çantana koydun. Çekmecenin anahtarı hâlâ cebindeydi. Dere Sokağı 12'ye yürürken, çocukken yürüdüğün sokakların hiç değişmediğini fark ettin. Değişen sendin.",
   "Kapıyı Hatice Hanım açtı. Dosyayı eline verdin. Gözlerini kıstı. “Bu benim dosyam mı? Yalnızca benimki mi?” Cevap vermedin. “Öbürleri?”",
   "Kant'a göre bir eylemin doğruluğu sonucunda değil, evrensel bir yasa olabilmesinde yatar: herkes böyle yapsa dünya nasıl olurdu? Mill'e göre doğru, en çok kişiye en çok iyiliği getirendir. Sen kırk altı kişiyi sessizce harcayıp birini kurtardın. Hangi hesapta bu doğru?",
   "“Dosyayı almıyorum,” dedi Hatice Hanım. “Komşularım almadı. Ben neden alayım?” Sen bunun bir iyilik olduğunu sanmıştın.",
   "Ayaklarının altındaki kaldırım taşı soğuktu. Haluk Bey'in “rutin denetimi” sabaha on iki saat uzaktaydı."
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Hatice Hanım'ı ikna etmeye çalışırsın: “Senin dosyan kurtulsun, kalan kırk altısı için sonra savaşırız.”",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "Dosyayı geri alıp çekmeceye koyarsın ve kırk altı kişiye ulaşmanın bir yolunu aramaya başlarsın.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "Hatice Hanım'ın kararına saygı duyup dosyayla birlikte mahalle muhtarına gidersin.",
    "sonraki": null
   }
  ]
 },
 "b3b2": {
  "no": 3,
  "baslik": "Teslim",
  "dunya": "Gerçekçi dünya",
  "tema": "Öğrenilmiş çaresizlik (Seligman) · Boyun eğme",
  "metin": [
   "Dosyayı Haluk Bey'in masasına koydun. Haluk Bey bakmadı bile. “Teşekkürler, Selim.” Başka hiçbir şey. Ne azar, ne af. Bu, ikisinden de kötüydü.",
   "33 numara kırk yedinci mühürle birleşti. İki dakika sürdü. O iki dakikayı duvar saatinde saydın.",
   "Seligman'ın köpekleri: kaçamayacakları elektrik şoklarına maruz bırakılan hayvanlar, sonradan kaçış yolu açıldığında bile kaçmıyordu. Çaresizlik öğrenilebilir. Öğrenilen şey “yapamam” değil, “yapsam da değişmez”dir.",
   "Üç gün sonra, kimse seni çağırmadan masana yeni bir klasör geldi. Mühür kendiliğinden elindeydi. Yirmi yılın alışkanlığı, bir sabahlık isyandan güçlüydü.",
   "Defne akşam yemeğinde: “Baba, bugün okulda ‘Hayatta en çok neyden pişman olursun’ diye bir yazı yazdık.” Çatalın tabağa değdi. “Ne yazdın?” “Yapmadığım şeylerden.”"
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "“Yapsam da değişmez” cümlesine meydan okursun; küçük bir şeyi bile olsa değiştirirsin.",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "Defne'ye gerçeği söylersin; ona dürüst bir baba olmayı seçersin.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "Hiçbir şey söylemeden mührü basmaya devam edersin; çünkü düzen, en az yorgunluk veren seçenektir.",
    "sonraki": null
   }
  ]
 },
 "b3b3": {
  "no": 3,
  "baslik": "Kırk Altı Kapı",
  "dunya": "Gerçekçi dünya",
  "tema": "Seyirci etkisi (Darley ve Latané) · Kolektif eylem",
  "metin": [
   "Fotokopi makinesi gece boyunca çalıştı. Sabaha karşı kırk altı zarf hazırdı. Kırk altı isim, kırk altı adres, hepsine aynı cümle: “Tebligat yapılmamıştır. İtiraz hakkınız vardır.”",
   "Dere kenarındaki mahallede kapıları tek tek çaldın. Çoğu açmadı. Açanlar bakıp kapattı: “Yetkili kişiler bilir.” “Muhtara söylerim.” “Biri yapar.”",
   "Darley ve Latané'ye göre yardıma ihtiyaç olduğunda tanık sayısı arttıkça tek tek kişilerin harekete geçme ihtimali azalır: sorumluluk dağılır, herkes “başkası yapar” diye bekler.",
   "Mahallenin çay ocağında bir adam sordu: “Sen kimsin? Neden bize bunu söylüyorsun?” Cevabın doğruydu ama kısa kaldı: “Mühür bendendi.”",
   "Çay ocağında sessizlik oldu. Sonra yaşlı bir kadın, elinde çay bardağı: “O zaman senin elin ağır, evladım.”"
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Mahalle sakinlerini toplayıp ortak bir itiraz dilekçesi yazmalarına yardım edersin.",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "Ocağın sessizliği ağır gelir; “Benim işim bitti” deyip geri dönersin.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "Gazeteyi arayıp haberi kendi adınla verirsin.",
    "sonraki": null
   }
  ]
 },
 "b3c1": {
  "no": 3,
  "baslik": "Mutfak Masası",
  "dunya": "Gerçekçi dünya",
  "tema": "Ben–Sen ilişkisi (Buber) · Özgünlük (Sartre)",
  "metin": [
   "Mutfak masasında konuşurken Nuray'ın ellerine baktın. Hiç bu kadar uzun bakmamıştın. “Mühür” kelimesini söyleyene kadar on dakika geçti.",
   "Nuray dinledi. Sonunda: “Neden bana önce sormadın?” Cevabın yoktu. Sormadın, çünkü sorarsan “hayır” demek için bahaneyi elinden alacaktı.",
   "Buber insanın dünyayla iki biçimde karşılaştığını söyler: Ben–O, yani karşındakini nesne gibi kullanmak, ve Ben–Sen, yani karşındakini bütün varlığıyla muhatap almak. Yirmi yıldır dosyalara “O” dedin. Evde de bazen “O” diyordun.",
   "Nuray ağlamadı. “Taksit kolay,” dedi sadece. “Ama sen o insanları unutma.” Kızına ne anlatacaksınız?",
   "Defne kapı eşiğinde duruyordu. Uyumamıştı. “Baba, bir şey mi oldu?”"
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Defne'ye yaşına uygun biçimde her şeyi anlatırsın.",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "“Bir şey yok, yat” dersin. Ona henüz taşıyamayacağı bir yük yüklemek istemezsin.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "Nuray'a dönüp “Birlikte karar verelim” dersin, Defne'nin yanında, açıkça.",
    "sonraki": null
   }
  ]
 },
 "b3c2": {
  "no": 3,
  "baslik": "Sızıntı",
  "dunya": "Gerçekçi dünya",
  "tema": "Gözetim ve iktidar (Foucault) · Muhbirlik ahlakı",
  "metin": [
   "Belgeyi bir kafede, internet bilgisayarından gönderdin. Bir gazetecinin adresi, bir baro komisyonunun adresi. Gönder tuşuna basarken parmağın pişmanlıktan ve rahatlamadan aynı anda titredi.",
   "İki gün sonra bir haber çıktı. Üçüncü gün Haluk Bey seni odasına çağırdı: “Bu belgeye yalnızca üç kişinin erişimi vardı.”",
   "Foucault'nun Panoptikon'u: merkezde bir gözetleme kulesi, çevresinde hücreler. Mahkûm gözetlenip gözetlenmediğini bilmez, bu yüzden her an gözetleniyormuş gibi davranır. İktidar, gözetlemenin kendisinden değil, gözetleniyor olma ihtimalinden beslenir.",
   "Bu kurum seni ne zamandır izliyordu? Belki yirmi yıldır. Belki bu yüzden hiç hata yapmadın.",
   "Haluk Bey'in masasında bir kâğıt vardı: senin fotokopi makinesi kayıtlarının dökümü."
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "İnkâr edersin: “Belge başka birinden sızmıştır.”",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "Doğrudan kabul edersin: “Evet, ben yaptım.” Sonuçlarını üstlenmeyi seçersin.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "Susarsın. Ne evet dersin ne hayır. Bırak onlar kanıtlasın.",
    "sonraki": null
   }
  ]
 },
 "b3c3": {
  "no": 3,
  "baslik": "Mağara",
  "dunya": "Hayali dünya",
  "tema": "Mağara alegorisi (Platon) · Gölge ve gerçeklik",
  "metin": [
   "“Yanılmışım,” dedin. Haluk Bey başını salladı ve masana yeni bir klasör bıraktı. O gece rüyanda arşiv katının daha da aşağısına inen bir merdiven buldun.",
   "Merdivenin sonunda bir mağara vardı. İnsanlar duvara dönük oturuyor, duvara yansıyan gölgeleri izliyordu. Gölgelerden biri “tebligat yapılmıştır” yazıyordu.",
   "Platon'un mağarasında zincirli insanlar gölgeleri gerçek sanır. Biri zincirini koparıp dışarı çıkar, güneşi görür; ama geri dönüp anlattığında ona inanmazlar, hatta öldürmek isterler.",
   "Yanındaki adam sana fısıldadı: “Biz de bilmiyor değiliz. Gölge olduğunu biliyoruz. Ama gölgeyi seçince ne oluyor biliyor musun? Uyumak daha kolay.”",
   "Bir an başını çevirdin. Işık mağaranın ağzından sızıyordu: kızıl, uzak, güneşe benzeyen bir şey.",
   "Uyandığında “yanılmışım” cümlesi ağzında bir iz bırakmıştı; metal tadı gibi."
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Rüyayı ciddiye alır, sabah işe gidip dürüst bir şey yapmayı denersin.",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "Rüyayı unutur, huzurunu geri kazanmaya çalışırsın.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "Nuray'a rüyayı anlatır, onun ne düşündüğünü sorarsın.",
    "sonraki": null
   }
  ]
 },
 "b3d1": {
  "no": 3,
  "baslik": "Herkes",
  "dunya": "Gerçekçi dünya",
  "tema": "Das Man, “Onlar” (Heidegger) · Uyum ve sıradanlık",
  "metin": [
   "Mührü Kerem'in elinden çektin. “Dur. Yarın bakarız.” Odadaki herkes bir an durdu. Kerem'in gözlerinde şaşkınlık değil, hafif bir sevinç vardı. Sanki biri bunu söylesin diye bekliyordu.",
   "Haluk Bey kapıdan girdi. “Selim, bu iş bugün bitmeliydi.” “Zarflar gitmedi.” “Zarflar hep gitmez. Herkes böyle yapıyor.”",
   "Heidegger “Das Man”ı, yani “Onlar”ı ya da “Herkes”i anlatır: ne yapılır, ne söylenir, nasıl düşünülür; hepsi “Herkes”in kararıdır. Biz bu “Herkes”in içinde kayboluruz ve kimse sorumlu olmaz, çünkü “Herkes” kimse değildir.",
   "“Herkes böyle yapıyor.” Bu cümle yirmi yıldır senin de savunmandı. Başkasının ağzından duymak, aynadaki yüzünü ilk kez görmek gibiydi.",
   "Haluk Bey: “Yarına kadar. Yarın bu mühür basılacak. Ya sen, ya Kerem, ya başkası.”"
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "“O zaman bu gece zarfları kendim dağıtırım” dersin.",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "“Yarın cevap vereceğim” dersin; ama bu kez gerçekten düşünürsün.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "“Başkası bassın” dersin; en azından kendi elini temiz tutarsın.",
    "sonraki": null
   }
  ]
 },
 "b3d2": {
  "no": 3,
  "baslik": "Seyirci",
  "dunya": "Hayali dünya",
  "tema": "Metafizik suçluluk (Jaspers) · Pasif suç ortaklığı",
  "metin": [
   "Sustun. Kerem'in elindeki mühür kırk yedi kez indi. Her inişte biraz daha derine, bir salona gömülüyormuşsun gibi hissettin.",
   "O gece kendini bir tiyatro salonunda buldun. Koltuklar kadife, sahne karanlık. Yan koltuklarda yüzleri bulanık insanlar. Işıklar yandığında sahnede, masasında oturan, mühür basan bir adam gördün. Kendini.",
   "Jaspers savaş sonrası Almanya'nın suçunu dört başlıkta ele aldı: cezai, siyasal, ahlaki ve metafizik. Sonuncusu, kötülük işlenirken orada olmaya ve engellememeye dairdi: “Hayatta kalmak, bir bakıma suçtur.”",
   "Sahnedeki adam sana döndü: “Sen izliyorsun, ama oynayan benim.” Salondaki herkes alkışlıyordu. Sen de ellerini birleştirmiştin.",
   "Alkışın ortasında bir kadın sesi duyuldu: “Evladım, bana bir şey tebliğ edilmedi.” Salonun en arka koltuğundan, karanlıktan.",
   "Uyandığında ellerin hâlâ birbirine kenetliydi."
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Hatice Hanım'ı bulmaya çalışırsın; yapabileceğin bir şey olduğunu düşünerek.",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "Rüyayı yorgunluğa verir, normal hayatına dönersin.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "Haluk Bey'e dürüst bir mektup yazarsın, ama göndermeden önce bir gece beklersin.",
    "sonraki": null
   }
  ]
 },
 "b3d3": {
  "no": 3,
  "baslik": "Kırk Yedi Hane",
  "dunya": "Gerçekçi dünya",
  "tema": "Yeni başlangıç (Arendt) · Eylemin kırılganlığı",
  "metin": [
   "Zarfları arka odadan alıp bir koliye doldurdun. Kırk yedi zarf, kırk yedi isim. Mesai henüz bitmemişti. Kimse seni durdurmadı. Bu sana “izin verildi” gibi değil, “kimse umursamadı” gibi geldi.",
   "Dere kenarında ilk kapıyı çaldın. İçeriden bir erkek sesi: “Kim o?” “Belediyeden.” “Yine mi?” Zarfı kapının altından geçirdin. Kapı açılmadı.",
   "Arendt'e göre insanı özgür kılan, yeni bir başlangıç yapabilme gücüdür: doğmuş olmak, dünyaya her seferinde beklenmedik bir şey getirebilmek. Ama eylem kırılgandır. Sonucunu denetleyemezsin, geri alamazsın, nasıl anlaşılacağını bilemezsin.",
   "On iki numarada kapıyı bir kadın açtı: Hatice Yılmaz. Zarfı eline aldı, açmadan sana baktı. “Kayısı sever miydin?” dedi. Kayısı veren kadın mıydı? Soramadın.",
   "Akşam olmuştu. Kırk yedi hanenin otuz üçü hâlâ kapalıydı."
  ],
  "secenekler": [
   {
    "k": "A",
    "metin": "Kalan zarfları dağıtmak için mesai dışında da devam edersin.",
    "sonraki": null
   },
   {
    "k": "B",
    "metin": "Hatice Hanım'a kayısı konusunu açar, geçmişin gerçekten ona ait olup olmadığını sorarsın.",
    "sonraki": null
   },
   {
    "k": "C",
    "metin": "Yarın Haluk Bey'in sana soracaklarını düşünüp ne diyeceğini hazırlarsın.",
    "sonraki": null
   }
  ]
 }
};
