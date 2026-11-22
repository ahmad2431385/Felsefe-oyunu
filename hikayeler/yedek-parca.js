(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };
var KAYIP = { selma: "Selma'ya dair her şey", mira: "Mira'nın çocukluğu", cocukluk: "kendi çocukluğun" };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "yedek-parca",
baslik: "Yedek Parça",
dunya: "Hayali dünya",
kategoriler: ["Kimlik ve Beden", "Aile ve Hafıza"],
giris: "Kemerli'de bozulan hiçbir şey atılmaz; Süreklilik Kurumu her organı, hatta anıları bile yeniler. Sen elli iki yaşında bir saat tamircisisin ve bedenin parça parça seni bırakmaya başladı. Önce el, sonra kalp, sonra daha derini. Her yenilenmede bir şey kazanıyor, bir şey kaybediyorsun. Kızın, bir hurdacı, Kurum'un teknisyeni ve tamir ettiğin eski bir cep saati eşliğinde bu hikâye tek bir soruyu kovalıyor: her şeyi değişen bir insandan geriye ne kalır?",
kavramlar: ["Kişisel kimlik", "Bellek ve benlik", "Kopya sorunu", "Ölüm ve süreklilik"],
ozet: "Kemerli şehrinde bozulan hiçbir şey atılmaz, yenilenir: ciğer, kalp, el, hatta anı. Bir saat tamircisinin bedeni parça parça vazgeçmeye başladığında, geriye ne kalacağı sorusu yalnızca ona ait değil.",
baslangic: "y1",
durum: { koruma: 0, kabul: 0, bag: 0 },

sahneler: {

y1: { baslik: "Titreme", metin: [
"Kemerli'de otobüs duraklarında, hastane kapılarında, hatta simit arabalarının yan camında aynı çıkartma var: “Hiçbir şey kaybolmaz, yalnızca yenilenir.” Süreklilik Kurumu'nun sözü. Ciğer bozulursa yenisi, kalp yorulursa yenisi, göz kararırsa yenisi. Bu şehirde kimse hastalıktan ölmüyor. Komşun Remzi Efendi'nin dediği gibi: “Burada adam ölmez, eskir.”",
"Bakırcılar Çarşısı'nın en dip dükkânı senin. Adın Yusuf, elli iki yaşındasın, saat tamircisisin. Tezgâh babandan, büyüteç babandan, tezgâhın altındaki çatlak çay bardağı da babandan. Kimse atmaya kıyamadı.",
"Bu sabah bir cep saatinin spiral yayını yerine oturtmaya çalışıyorsun ve elin titriyor. Saç teli inceliğinde yay cımbızın ucundan üç kez kayıyor. Dördüncüde cımbızı bırakıp elini dizine koyuyorsun, bekliyorsun. Titreme dizinde de devam ediyor.",
"Saat, Ece adında on iki yaşında bir kızın. Dedesinden kalmış. Dün okul çantasıyla geldi, saati tezgâha bıraktı. “Dedem bu saat hiç durmadı derdi,” dedi. “Ben durdurdum. Teneffüste düşürdüm.” Sonra “Kaç para?” diye sordu ve cevabı beklemeden cebindeki bozuklukları saymaya başladı.",
"Tezgâhın kenarında Kurum'un mühürlü zarfı duruyor. Üç satır: “İlerleyici doku kaybı. Değişim süreciniz başlamıştır. Önce sağ el. Sonraki aşamalar size bildirilecektir.” Kemerli'de “sonraki aşamalar”ın nerede bittiğini herkes bilir: en son kafada.",
"Evde on yedi yaşındaki kızın Mira var. Annesi Selma altı yıl önce öldü. Bir salı akşamı mutfakta, Kurum'un yetişemeyeceği kadar çabuk. Mira o akşamdan beri salıları makarna yapmıyor."
], secenekler: [
{ t: "Yarın sabah Kurum'a gidersin. Beklemekle el düzelmeyecek.", to: "y2", etki: { kabul: 1 } },
{ t: "Zarfı çekmeceye kaldırırsın. Mira'nın sınavları var. Şimdi söylemeyeceksin.", to: "yp_mira", etki: { koruma: 1, sakladi: true } },
{ t: "Akşam yemeğinde Mira'ya anlatırsın.", to: "y2", etki: { bag: 1, mira_bilir: true } },
{ t: "Bütün gece o saatle uğraşırsın, titreyen elinle, bitirene kadar.", to: "yp_ece", etki: { koruma: 1, ece_saati: true } }
]},

y2: { baslik: "Süreklilik Kurumu", metin: [
P(S("yp_miraA"), "Anlattın. Bu kez hiçbir şeyi eksiltmeden. Mira bir kez bile sözünü kesmedi. Bitince “Tamam,” dedi, “şimdi ikimizin.” Sabah seni Kurum'un kapısına kadar o götürdü. Otobüste kulaklığının bir tekini sana verdi, ne dinlediğini anlamadın."),
P(S("yp_miraB"), "“Bu kadarını bana bırak,” dedin. Mira bir süre baktı, sonra kalktı. “Tamam baba.” Kapıda döndü: “Annem de böyle derdi.” Ertesi sabah kahvaltıda ikiniz de radyoyu dinliyormuş gibi yaptınız."),
P(S("yp_miraC"), "Gece yarısı mutfak masasında söz verdiniz; Mira elini uzattı, el sıkıştınız, bir esnaf pazarlığı gibi. Sonra Mira güldü. “Çok ciddi olduk,” dedi. “Çay koyayım mı?”"),
P(S("yp_miraD"), "Zarfı çekmeceye geri koydun. Mira bir şey demeden odasına gitti. Sabah çekmecede zarfın yanında bir post-it buldun: “Ben buradayım. Hazır olunca.” Altında bir surat çizmiş, ağzı düz."),
P(S("yp_eceA"), "“Bir el yalnızca bir el,” dedin. Ece kaşlarını çattı. “Dedem de öyle derdi,” dedi, “ama ellerini hiç değiştirmedi.” Saati cebine koyup okula koştu. Montunun fermuarı açık kaldı."),
P(S("yp_eceB"), "“Belki ben de eski usulüm,” dedin. Ece sırıttı. Tanıdık bir şey bulmuş gibi. “Dedem sizi severdi,” dedi. “Hiç tanışmadınız ama severdi. Huysuz adamları severdi.”"),
P(S("yp_eceC"), "Ece dedesini anlattı. Balıkçıymış. Saati bir kere denize düşürmüş, ertesi gün ağdan çıkarmış. Bir istavritle beraber. “Hâlâ benimle,” demiş. Ece bu kısmı anlatırken gülmekten bitti. Zil çalana kadar anlattı."),
P(S("yp_eceD"), "İkiniz de senin ellerine baktınız. Titriyordu. Ece kendi elini uzatıp senin elinin üstüne koydu. Küçük, mürekkep lekeli. Titreme durmadı. Ece elini çekmedi."),
P(S("y1A"), "Gece uyumadın. Sabah ilk otobüse bindin. Karşındaki adamın yeni gözleri o kadar maviydi ki bakmamak için cama döndün. Kemerli'de kimin neyinin yeni olduğunu sormak ayıptır. Bakmak da."),
P(S("y1B"), "Zarf çekmecede. Kahvaltıda Mira bir şey sordu. Cevap verirken çay bardağını sol elinle tuttun ve bardak bir an sallandı. Mira fark etmedi. Ya da etti ve bir şey demedi. Bu evde susmak babadan kalma."),
P(S("y1C"), "Mira dinledi, sonra beklemediğin bir şey yaptı: sağ elini tuttu, titreyeni. “Beni bisiklete bu el bindirdi,” dedi. “Yenisi bindiremez. Ama ben artık biliyorum zaten.” Gülmeye çalıştı, burnu kızardı."),
P(S("y1D"), "Sabaha karşı dörtte yay yerine oturdu. Saat çalıştı. Cımbızı tezgâha bıraktın ve elinin kendiliğinden yumruk olduğunu fark ettin. Açmak için bir süre uğraştın."),
"Kurum'un binası bembeyaz. Pencereleri var ama hiçbiri bir şeye bakmıyor. İçerisi ılık, havada hafif bir yasemin kokusu. Sonradan öğreneceksin, havalandırmadan veriliyormuş.",
"Yanındaki sandalyede yaşlı bir kadın. Hayriye Hanım. Sen sormadan söylüyor: “Yüzde seksen.” Parmaklarıyla sayıyor: “Ciğerler, kalp, böbrekler, iki göz, bir kulak, hafızanın bir kısmı. Düğün günümü hatırlamıyorum ama tarihini biliyorum. On iki haziran. Güzel bir gün olmalı, fotoğraflarda gülüyorum.” Çantasından bir naneli şeker çıkarıp sana uzatıyor.",
"Teknisyen Lale seni içeri çağırıyor. Genç, sakin, tırnakları kısa kesilmiş. “Sağ el,” diyor. “Basit bir işlem. Yeni el eskisinin bütün becerilerini öğrenir. Sinir haritanızı çıkarıyoruz. Bir haftada fark etmezsiniz. Eski eliniz yasal hakkınızdır, mühürlü kutuda size teslim edilir.”",
"Kutunun boyutunu elleriyle gösteriyor. Ayakkabı kutusu kadar."
], secenekler: [
{ t: "Kabul edersin. Bir el, sonuçta bir el.", to: "y3", etki: { kabul: 1, el: "yeni" } },
{ t: "Reddedersin. Eski elinle gidebildiğin yere kadar gideceksin.", to: "y3", etki: { koruma: 1, el: "eski" } },
{ t: "Önce Hayriye Hanım'a dönüp sorarsın: “Neyi kaybettiğinizi nereden biliyorsunuz?”", to: "y3", etki: { bag: 1, el: "yeni", hayriye: true } },
{ t: "Mira'yı arayıp kararı ona sorarsın.", to: "y3", etki: { bag: 1, el: "yeni", mira_karar: true } }
]},

y3: { baslik: "Kutu", metin: [
P(S("y2C"), "Hayriye Hanım şekeri ağzında bir yanağından öbürüne geçirdi. “Bilmiyorum,” dedi. “Bir şey gidince içimde bir yer serinliyor. Kapısı açık kalmış bir oda gibi. İçinde ne vardı, hatırlamıyorum. Ama cereyan yapıyor.” Sonra eline baktı. “El kolay oğlum. El oda değil.”"),
P(S("y2D"), "Mira telefonda bir süre sustu. Arkadan okul koridorunun gürültüsü geliyordu. “Değiştir baba,” dedi. “Elini kaybetmek seni kaybetmek değil, değil mi? Değil.” Kendi sorusuna kendi cevap verdi ve zil çaldı."),
P(function(d){ return d.el === "yeni"; }, "Bir hafta geçti. Lale haklıymış: fark etmiyorsun bile. Yeni el eskisinden sabit, eskisinden hızlı. Ece'nin saatinin yayını üç saniyede taktın. Taktıktan sonra bir süre eline baktın. Aferin demek mi lazım, bilemedin."),
P(function(d){ return d.el === "yeni"; }, "Bir akşam Mira yanından geçerken alışkanlıkla elini tuttu ve hemen bıraktı. “Pardon,” dedi. Kimden özür dilediği belli değildi. Yeni elin ılık, yumuşak, seninkine benziyor. Mira o akşam bulaşıkları kendisi yıkadı."),
P(function(d){ return d.el === "yeni"; }, "Eski elin Kurum'un mühürlü kutusunda, dolabın üst rafında. Bazen gece kalkıp kutuya bakıyorsun. Açmıyorsun. Bir keresinde üstündeki tozu yeni elinle sildin, sonra elini pantolonuna sildin."),
P(function(d){ return d.el === "eski"; }, "Bir hafta geçti. Titreme kötüleşti. Artık küçük vidaları tutamıyorsun. Ece'nin saati tezgâhta açık. Mira okuldan sonra dükkâna gelip senin tarifinle çalışıyor. Parmakları ince, sabırlı. Annesininki gibi. Bunu ona söylemiyorsun. O da bir gün vida düşürdüğünde annesi gibi “Hay aksi” diyor. Sen gülüyorsun, o anlamıyor."),
"Bir öğleden sonra kapıda bir adam beliriyor. Uzun, sıska, eski bir paltonun içinde, paltonun düğmeleri birbirinden farklı. Hurdacı Necmi. Çarşıda herkes bilir, kimse tanımaz.",
P(function(d){ return d.el === "yeni"; }, "“Eski elin bende daha iyi durur,” diyor, selam vermeden. “İyi para veririm. Eski parçaları toplarım. Her şeyi. Bir gün hepsini birleştireceğim. Eskilerden bir adam. O zaman görürüz hangisi asıl.”"),
P(function(d){ return d.el === "eski"; }, "“Değiştirmemişsin,” diyor, selam vermeden, elini işaret ederek. “Akıllıca. Ya da değil. Ben eski parçaları toplarım. Bir gün değiştirirsen kutuyu bana getir. Bir gün hepsini birleştireceğim. Eskilerden bir adam. O zaman görürüz hangisi asıl.”"),
"Gülüyor. Dişlerinin yarısı bembeyaz, yarısı sarı. Hangileri yeni, belli."
], secenekler: [
{ t: function(d){ return d.el === "yeni" ? "Kutuyu Necmi'ye satarsın." : "Necmi'ye, zamanı gelince eski parçalarını ona vereceğine söz verirsin."; }, to: "y3b", etki: { kabul: 1, necmi: true } },
{ t: function(d){ return d.el === "yeni" ? "Kutuyu saklarsın. Atölyenin arka rafında, gözünün önünde." : "Necmi'yi kapıdan çevirirsin. Parçaların kimseye satılık değil."; }, to: "y3b", etki: { koruma: 1, sakla: true } },
{ t: function(d){ return d.el === "yeni" ? "Kutuyu bahçeye, Selma'nın diktiği erik ağacının dibine gömersin." : "Necmi'ye, öldüğünde bedeninin erik ağacının dibine gömüleceğini, kimseye verilmeyeceğini söylersin."; }, to: "y3b", etki: { koruma: 1, gomdu: true } },
{ t: function(d){ return d.el === "yeni" ? "Kutuyu Mira'ya verirsin: “Bu babanın eli. Ne istersen yap.”" : "Necmi'ye cevabı Mira'nın vereceğini söylersin: “Benden sonra benimle ilgili kararlar onun.”"; }, to: "y3b", etki: { bag: 1, miraya_verdi: true } }
]},

y3b: { baslik: "Yüzde Doksan Beş", metin: [
P(S("y3A"), "Necmi parayı tezgâha tek tek sayarak bıraktı. Bozuklukları en sona sakladı. Kapıda döndü: “Merak etme. Sen kendine bakamıyorsun ama ben senin eskine iyi bakarım.”"),
P(S("y3B"), "Necmi omuz silkti. “Herkes önce böyle der,” dedi. “Sonra kutu dolaba, dolap depoya gider. Bir gün biri açar, ne olduğunu bilmez, çöpe atar. Ben bilirim. Düşün.” Giderken kapının çıngırağına elini koyup susturdu."),
P(S("y3C"), "Necmi bir süre sustu. Sonra şapkasını çıkardı, içini kokladı, yine taktı. “Toprak da koleksiyoncu,” dedi. “Benden sabırlı ama.” Gitti."),
P(S("y3D"), "Mira kutuyu, ya da kararı, aldı ve uzun süre baktı. Sonra odasına götürdü. Ne yaptığını sormadın. Bir hafta sonra odasının kapısına bir kâğıt yapıştırılmıştı: “Girmeden önce kapıyı çal. Ciddiyim.”"),
"Bir ay sonra kontrol için yine Kurum'dasın. Bekleme salonunda Hayriye Hanım. Aynı sandalye, aynı naneli şeker.",
"Yanında kırklarında bir adam: oğlu. Oğlu ona telefonundan bir fotoğraf gösteriyor. Hayriye Hanım fotoğrafa bakıp nazikçe gülümsüyor. “Ne tatlı çocuk,” diyor. “Kimin?”",
"Oğlu telefonu cebine koyuyor ve sana dönüyor. Odada başka kimse yok. “Yüzde doksan beş,” diyor. “Annem mutlu. Her sabah uyanıyor, kahvaltı ediyor, bahçede oturuyor. Hiçbir şeyden şikâyeti yok. Doktorlar kişiliği korunmuş diyor. Aynı kahkaha.”",
"Bir süre bekliyor. “Ama beni tanımıyor. Her sabah ona kim olduğumu söylüyorum, nazikçe inanıyor. ‘Ay ne güzel,’ diyor, ‘oğlum varmış.’ Sizce bu hâlâ annem mi? Yoksa annemin kahkahasını taşıyan iyi bir yabancı mı?”",
"Hayriye Hanım ikinize de birer şeker uzatıyor."
], secenekler: [
{ t: "“Hâlâ anneniz,” dersin. “İnsan hatırladıklarından ibaret değil.”", to: "y4", etki: { kabul: 1, cevap_hayriye: "anne" } },
{ t: "“Bilmiyorum,” dersin. “Ama siz hatırladıkça bir şey devam ediyor.”", to: "y4", etki: { bag: 1, cevap_hayriye: "siz" } },
{ t: "Cevap vermezsin. Bir gün Mira'nın sana aynı soruyu soracağını düşünüyorsun.", to: "y4", etki: { koruma: 1, cevap_hayriye: "sessiz" } },
{ t: "Hayriye Hanım'a dönüp sorarsın: “Mutlu musunuz?”", to: "y4", etki: { cevap_hayriye: "sordu" } }
]},

y4: { baslik: "Kalp", metin: [
P(S("y3bA"), "Adam sana uzun uzun baktı. “Herkes böyle diyor,” dedi. “Benden başka herkes.” Kalkıp annesinin paltosunu omuzlarına geçirdi. Hayriye Hanım ona teşekkür etti. Bir taksi şoförüne eder gibi, çok kibar."),
P(S("y3bB"), "“Ben hatırlıyorum,” dedi adam. “Ama ben de bir gün bu sandalyeye oturacağım. O zaman kim hatırlayacak?” Bir şey diyemedin. Şekerin kâğıdını açıp kapattın."),
P(S("y3bC"), "Sustun. Adam da sustu. Aranızdaki boşluğu Hayriye Hanım doldurdu: hava, çiçekler, yarın yağmur yağar mı. Kimse dinlemiyordu. O da bunu umursamıyordu."),
P(S("y3bD"), "Hayriye Hanım şaşırdı, düşündü. “Mutlu musun diye soran olmadı,” dedi. “Hep kim olduğumu soruyorlar.” Sonra güldü. “Evet. Neye bilmiyorum ama evet.” Oğlu pencereden otoparka bakıyordu."),
"Üç ay sonra bir sabah merdiven çıkarken göğsün sıkışıyor. Durup tırabzana tutunuyorsun. Bir sonraki basamakta bir daha. Kurum'un mektubu iki gün sonra geliyor: “İkinci aşama: kalp.”",
"Lale yine karşında. Bu kez önünde iki kâğıt var. “Kalp değişimi rutin,” diyor. “Ama bu aşamada bir şey daha öneriyoruz: tam yedekleme. Hafızanızın, kişiliğinizin, alışkanlıklarınızın haritası. Sonraki aşama sinirsel olacak, orada kayıp riski var. Yedek, ters giden bir şey olursa onarım için.”",
"“Yalnızca onarım için mi?”",
"Lale'nin gözü bir an kâğıda iniyor. “Yalnızca onarım için,” diyor. “Yönetmelik böyle.” Kalemin kapağını takıp çıkarıyor.",
P(function(d){ return d.el === "eski"; }, "Elin masada titriyor. Kâğıdın köşesi elinin altında hışırdıyor. Lale bakıyor. “Eli hâlâ değiştirmediniz,” diyor. “Kalpte bu kadar inat edemezsiniz. Kalp beklemez.”")
], secenekler: [
{ t: "İkisini de kabul edersin: yeni kalp, tam yedek.", to: "y4b", etki: { kabul: 1, kalp: "yeni", yedek: true } },
{ t: "Kalbi kabul edersin, yedeği reddedersin. Bir kopyan olsun istemiyorsun.", to: "y4b", etki: { kalp: "yeni" } },
{ t: "Kalbi de reddedersin. Kendi kalbin ne kadar atarsa o kadar.", to: "y4b", etki: { koruma: 1, kalp: "eski" } },
{ t: "Kararı Mira'ya bırakırsın.", to: "y4b", etki: { bag: 1, kalp: "yeni", yedek: true, mira_karar2: true } }
]},

y4b: { baslik: "Mira", metin: [
P(S("y4A"), "İki imza attın. Yeni kalp ilk gece göğsünde sessizce atıyor. Eskisinden düzenli, telaşsız. Uyuyamayıp kalktın, bir bardak su içtin. Bir yerde, Kurum'un bir sunucusunda, sen de uyuyorsun. Ondan haberin yok."),
P(S("y4B"), "Yedeğin kâğıdını imzalamadın. Lale bir şey not etti, başka bir şey sormadı. Eve dönerken otobüste kalbini dinledin. Yeni kalp, eski şehrin çukurlarında bir tık fazla atıyor."),
P(S("y4C"), "Kalbi de reddettin. Lale itiraz etmedi; Kurum kimseyi zorlamaz, bekler. Merdivenler artık her gün biraz daha uzun. Mira sana merdiven başına bir tabure koydu, üstüne bir minder."),
P(S("y4D"), "Mira bir gece boyunca kâğıtları okudu, sabah ikisini de imzalamanı istedi. “Yedek de,” dedi. “Ne olur ne olmaz. Seni kaybedersem bir yerde olmalısın.” İmzaladın. Bir yerde olmakla burada olmak arasındaki farkı ona anlatmaya çalışmadın. Sen de tam bilmiyordun."),
"Bir gece Mira mutfakta, ders kitaplarının arasında. Sınavına üç ay var. Kalemini bırakıp sana bakıyor.",
"“Baba. Sinirsel aşamada ne olacak? Lale Hanım bir şeyler gidebilir dedi. Ya annemi unutursan?”",
"Kalemi alıp kapağını ısırıyor. Küçükken de böyle yapardı, Selma kızardı.",
"“Ben annemi pek hatırlamıyorum,” diyor. “On bir yaşındaydım. Yüzünü fotoğraftan biliyorum. Sesini artık bilmiyorum. Telefonda bir sesli mesajı vardı, telefonu değiştirince gitti. Onu en iyi sen hatırlıyorsun. Sen de unutursan tamamen gider.”",
"“Annemle nasıl tanıştınız? Hiç düzgün anlatmadın.”",
"Selma bir gün dükkâna bozuk dediği bir kol saatiyle gelmişti. Saat bozuk değildi, kurulmamıştı. Söylediğinde kulaklarına kadar kızardı. Ertesi hafta yine geldi. Aynı saat, yine kurulmamış. Üçüncü hafta sen sordun: “Bunu bilerek mi kurmuyorsunuz?” “Evet,” dedi. “Siz de bilerek mi soruyorsunuz?”"
], secenekler: [
{ t: "Mira'ya her şeyi en küçük ayrıntısına kadar anlatırsın. Sen unutsan o hatırlasın.", to: "yp_mektuplar", etki: { bag: 1, anlatti: true } },
{ t: "“Unutmayacağım,” dersin. Bilmeden.", to: "y5", etki: { koruma: 1, soz: true } },
{ t: "“Unutursam unuttuğumu da unuturum. Acı çekmem,” dersin.", to: "yp_mira_gece", etki: { kabul: 1 } },
{ t: "Bir şey demeden onu Selma'nın eski kol saatinin yanına götürürsün. Birlikte kurarsınız.", to: "y5", etki: { bag: 1, saat_kurdu: true } }
]},

y5: { baslik: "Bedel", metin: [
P(S("yp_mektuplarA"), "Mira mektupları okudu: bir gece, iki gece, bir hafta. Her mektupta genç bir adam genç bir kadına âşık oluyordu, kötü yazılmış cümlelerle. Bazılarını dinlerken hatırladın, bazılarını yeniden öğrendin. Bir süre sonra hangisinin hangisi olduğunu karıştırdın."),
P(S("yp_mektuplarB"), "Mektupları kutuya koydun. Mira bir şey demedi ama kutuyu kendi odasına götürdü. Gece kapısının altından ışık sızdı. Bir ara bir kahkaha duydun, sonra burnunu çektiğini."),
P(S("yp_mektuplarC"), "“Benim hafızam olacak bunlar,” dedi Mira, kutuya bakarak. “Ama ben bunları yaşamadım ki.” Kutuyu yine de bırakmadı. Bazen gece odasından kâğıt hışırtısı geliyor."),
P(S("yp_mektuplarD"), "Bütün gece okudun. Sabaha karşı tezgâhta, kurmadığın bir saati gördün. Gözünün önünde, net. Sonra kayboldu. Anı mıydı, uykusuzluk mu, bilemedin."),
P(S("yp_mira_geceA"), "Saati birlikte topladınız. Sabaha kadar. Senin ellerin ve Mira'nın ince parmakları. Altıda saat çalıştı. Mira başını omzuna koydu ve hemen uyudu. Ağzı açık, annesi gibi."),
P(S("yp_mira_geceB"), "“Unutmayacağım,” dedin, bu kez bir söz olarak. Mira sana baktı. “Tutamasan da söylemen iyi,” dedi. Saati kutusuna koydu. Toplamadı."),
P(S("yp_mira_geceC"), "Mira'ya sarıldın. Dişliler tezgâhta, dağınık, bekledi. Sabah ikiniz de onlara dokunmadan kahvaltı ettiniz."),
P(S("yp_mira_geceD"), "Tarif ettin, o yaptı. Dört saat. Her dişliyi tek tek. Sonunda saat çalıştı. Mira gözlerini koluyla sildi. “Ben yaptım,” dedi. “Ama senin ellerinle. Yani eskileriyle. Neyse, anladın.”"),
P(S("y4bA"), "Bir saat anlattın: kızaran kulakları, saatin markası, o gün yağan yağmur, Selma'nın şemsiyesini bilerek dükkânda unutup bir dahaki sefere bahane etmesi. Mira not almadı, dinledi. Anlatırken bazı ayrıntıları uydurduğunu fark ettin. Şemsiye mavi miydi, yeşil mi? Mavi dedin."),
P(S("y4bB"), "“Unutmayacağım,” dedin. Mira başını sallamak yerine kalemin kapağını ısırmaya devam etti."),
P(S("y4bC"), "Mira yüzüne baktı. “Ama ben hatırlarım,” dedi. “Senin unuttuğunu ben hatırlarım. Acıyı ben çekerim.” Kalkıp odasına gitti. Kapıyı çarpmadı ama kapattı."),
P(S("y4bD"), "Selma'nın saati çekmecede, altı yıldır durmuş. Mira kurdu, sen ayarladın. Saat çalışmaya başladı. Mira saati bileğine taktı. Kayışı büyük geldi, bir delik daha açtın."),
"Kış geliyor. Bir sabah aynanın karşısında kendi adını bulamıyorsun. Bir saniye, iki. Sonra geliyor: Yusuf. Diş fırçası ağzında, köpüğü lavaboya damlıyor.",
"Kurum'un üçüncü mektubu: “Sinirsel aşama.” Lale bu kez seni başka bir odaya alıyor. Duvarları koyu yeşil, masada bir kutu mendil.",
"“Açık söylemem lazım,” diyor. “Yeni sinir dokusu neredeyse her şeyi taşıyabilir. Ama aktarımda bir şeyin bırakılması gerekiyor. Kapasite meselesi. Büyük, birbirine bağlı bir anı kümesi. Hangisi olacağını siz seçersiniz. Seçmezseniz sistem seçer.”",
"Bir kâğıt uzatıyor. Üç satır: Selma'ya dair her şey. Tanışmanız, evliliğiniz, ölümü. Mira'nın çocukluğu. Doğumundan on iki yaşına kadar. Kendi çocukluğun. Babanın dükkânı, babanın elleri, babanın ölümü.",
"“Dördüncü bir seçenek de var,” diyor Lale, daha alçak sesle. “Sinirsel değişimi reddedebilirsiniz. O zaman hastalık kendi seyrinde ilerler. Anılarınız gider, ama sizin seçmediğiniz bir sırayla. Rastgele. Ve sonunda...” Mendil kutusunu biraz sana doğru itiyor."
], secenekler: [
{ t: "Selma'yı bırakırsın.", to: "dg1", etki: { kayip: "selma", kabul: 1 } },
{ t: "Mira'nın çocukluğunu bırakırsın.", to: "dg1", etki: { kayip: "mira", kabul: 1 } },
{ t: "Kendi çocukluğunu bırakırsın: babanı, dükkânı, her şeyin başladığı yeri.", to: "dg1", etki: { kayip: "cocukluk", kabul: 1 } },
{ t: "Reddedersin. Ne gidecekse kendi sırasıyla gitsin.", to: "r1", etki: { koruma: 2, ret: true } }
]},


yp_mira: { baslik: "Çekmece", metin: [
"Zarfı çekmeceye koyup kapattın. Akşam yemeğinde Mira okuldan, sınavlardan, sınıftan birinin saçını mora boyatıp müdüre yakalanmasından bahsetti. Sen dinledin, güldün, ekmeği sol elinle kopardın.",
"Gece yarısı mutfakta ışık yanıyor. Mira masada. Önünde açılmış bir zarf; Kurum'un mührü.",
"“Makas arıyordum,” diyor. “Çekmecede makas yoktu. Bu vardı.”",
"Karşısına oturuyorsun. Buzdolabının motoru çalışıyor, duruyor, yine çalışıyor.",
"“Ne zaman söyleyecektin?” Sen cevap veremeden devam ediyor: “Annem hastalandığında da söylememiştiniz. On bir yaşındaydım. Bir sabah hastaneye gittiniz, bir akşam tek başına döndün. Ben üç gün annem yorgun sandım. Üç gün baba. Okula gittim.”",
"Bağırmıyor. Zarfı tırnağıyla katlayıp açıyor, katlayıp açıyor.",
"“Korumaya çalıştığını biliyorum,” diyor. “İstemiyorum ama. Bilmeyince yaşamamış olmuyorum ki. Yalnız yaşamış oluyorum.”"
], secenekler: [
{ t: "Özür dileyip her şeyi anlatırsın. Bu kez hiçbir şeyi eksiltmeden.", to: "y2", etki: { bag: 1, mira_bilir: true } },
{ t: "“Seni korumak benim işim,” dersin. “Bu kadarını bana bırak.”", to: "y2", etki: { koruma: 1 } },
{ t: "Bir söz istersin: bundan sonra ikiniz de birbirinizden hiçbir şey saklamayacaksınız.", to: "y2", etki: { bag: 1, soz_mira: true, mira_bilir: true } },
{ t: "Zarfı alıp yeniden çekmeceye koyarsın. Konuşmaya hazır değilsin.", to: "y2", etki: { koruma: 1, kacti: true } }
]},

yp_ece: { baslik: "Ece", metin: [
"Sabah altıda dükkânın kapısı çalınıyor. Çarşı açılmamış. Demir kepenklerin arasında bir tek seninkinin ışığı yanıyor.",
"Ece. Okul önlüğünün üstüne bir mont geçirmiş, nefes nefese, bir eli hâlâ ağzındaki poğaçada. “Annem dedi, okuldan önce gelirsem bitmiş olabilirmiş.”",
"Saati uzatıyorsun. Kulağına götürüyor, gözlerini kapatıyor. Poğaçayı çiğnemeyi bırakıyor.",
"“Dedem de böyle dinlerdi,” diyor, ağzı dolu. “Her sabah. Kulağına götürür, ‘Hâlâ benimle,’ derdi. Annem ‘Baba deli misin’ derdi.”",
"Tezgâhın kenarına oturuyor, ayaklarını sallıyor. “Dedem Kurum'a hiç gitmedi, biliyor musunuz? Ciğerleri bozulunca bile. Annem çok yalvardı. Dedem ‘Ben eski usul ölürüm,’ dedi. Annem hâlâ kızgın. Ben değilim.”",
"“Neden?”",
"Ece omuz silkiyor. “Dedem dedemdi çünkü. Yenilenseydi belki hâlâ olurdu. Ama belki başka biri olurdu, ben de onu dedem diye sevmeye çalışırdım. Zor olurdu.” Saati cebine koyuyor. “Siz de mi gideceksiniz Kurum'a? Elleriniz titriyor da.”"
], secenekler: [
{ t: "“Evet,” dersin. “Bir el sonuçta bir el.”", to: "y2", etki: { kabul: 1, ece_evet: true } },
{ t: "“Bilmiyorum,” dersin. “Belki ben de eski usulüm.”", to: "y2", etki: { koruma: 1 } },
{ t: "Saatini değil, dedesini sorarsın.", to: "y2", etki: { bag: 1, ece_dede: true } },
{ t: "Bir şey demeden ellerine bakarsın. Ece de bakıyor.", to: "y2" }
]},

yp_ates: { baslik: "Yakmak", metin: [
"“Yak onu,” dedin. Necmi şekle baktı, sonra sana. Sonra hiçbir şey demeden deponun arkasına yürüdü.",
"Döndüğünde elinde bir kutu var. Kendi kutusu. Üstünde kendi adı, kurşun kalemle, yıllar içinde eklene eklene: “Necmi Tanrıverdi. Kalp, 1994. Ciğerler, 1998. Gözler, 2003. Hafıza, kısmi, 2009.”",
"“O şekli yakamam,” diyor. “Ama bunu yakarım. Kendimi. Eskimi. Otuz yıldır saklıyorum, bir gün yine bir araya gelirim diye. Gelmeyecek. Haklısın.”",
"Avludaki varile eski gazeteler, tahta parçaları atıyor. İlk kibrit sönüyor. İkincisi tutuyor.",
"Kutuyu açmadan ateşin üstüne tutuyor. Elleri titriyor. Yenilenmiş, hiç titrememesi gereken elleri.",
"“Bir şey söyle,” diyor. “Bıraktığım hiçbir şeyde yanımda kimse yoktu. Kurum'da hep bir kâğıt imzaladım, o kadar. Bir kere de biri bir şey söylesin.”",
"Alev kutunun köşesini yalıyor. Necmi bekliyor. Gözleri dumandan sulanmış."
], secenekler: [
{ t: "“Hoşça kal Necmi,” dersin. Eski Necmi'ye.", to: "n1b", etki: { bag: 1, kabul: 1, veda: true } },
{ t: "Kutuyu elinden alırsın: “Yakma. Yanlış söyledim.”", to: "n1b", etki: { koruma: 1, kurtardi: true } },
{ t: "“Bıraktıkların sen bırakmasan da gitti,” dersin.", to: "n1b", etki: { kabul: 1 } },
{ t: "Hiçbir şey söylemezsin. Yanında durursun.", to: "n1b", etki: { bag: 1 } }
]},

yp_sekil: { baslik: "Şekil", metin: [
"Şeklin eline dokunduğunda Necmi bir şey demedi. Ceketini aldı. “Dokuzda kilitlerim,” dedi. “Kalacaksan kal. Tuvalet arkada, sifon kendi kendine akar, aldırma.”",
"Kaldın. Loş ışıkta, kavanozların ve kutuların arasında, bir sürü insanın parçalarından yapılmış bir şeyle.",
"Gece ilerledikçe raflardaki etiketleri okumaya başlıyorsun. Okumak için değil, uyumamak için. “Seher, 1987, gözler.” “Kemal, 2001, sol el.” “Adsız, 1979, kalp.” Birinin üstüne biri kurşun kalemle küçük bir çiçek çizmiş.",
"Saat ikiye doğru şeklin dudaklarının kıpırdadığını görüyorsun. Ya da gözlerin yoruldu.",
"Sesler duyuyorsun. Bir kadın, bir çocuk, yaşlı bir adam. Hepsi aynı ağızdan, birbirinin üstüne: “Ben bir eldim, bir adamın ekmeğini kopardım...” “Ben bir kalptim, bir düğünde hızlı attım...” “Ben iki gözdüm, bir otobüsün arkasından el salladım...”",
"Bir ses daha, tanıdık. Kendi sesin, yıllar önceki: “Ben bir eldim. Bir saatin yayını taktım. Bir kızın saçını ördüm, beceremedim, annesi bozdu, yeniden ördü.”",
"Kimse kimseye cevap vermiyor. Herkes kendi cümlesini söyleyip susuyor.",
"Sabah Necmi kapıyı açtığında seni şeklin ayağının dibinde, yerde, paltonu üstüne çekmiş buluyor. “Üşüdün mü?” diyor. “Burası hep soğuk. Eski şeyler sıcak sevmez.”"
], secenekler: [
{ t: "Necmi'ye gece duyduklarını anlatırsın.", to: "n1b", etki: { bag: 1, sesler: true } },
{ t: "Hiçbir şey anlatmazsın. Rüya gördüğüne karar verirsin.", to: "n1b", etki: { koruma: 1 } },
{ t: "Necmi'ye şekli parçalarına ayırıp her parçayı sahibinin adıyla gömmesini önerirsin.", to: "n1b", etki: { kabul: 1, gom: true } },
{ t: "Şeklin eline bir kez daha dokunup çıkarsın.", to: "n1b", etki: { dokundu2: true } }
]},


yp_mektuplar: { baslik: "Mektuplar", metin: [
"Bir saat anlattın: kızaran kulaklar, kurulmamış saat, yağmur, dükkânda unutulan mavi şemsiye. Mira hiçbir şey sormadı. Bitince kalkıp odasına gitti ve elinde bir ayakkabı kutusuyla döndü.",
"“Annemin dolabında buldum,” diyor. “Geçen yıl. Sana söylemedim. Kızma.”",
"Kutunun içinde mektuplar. Senin el yazın. Yirmi beş yıl önce Selma'ya yazdıkların. Evlenmeden önce, bir yıl boyunca, her hafta. Selma hepsini saklamış, tarih sırasıyla, lastikle bağlamış. Lastik çürümüş, dokununca kopuyor.",
"Birini açıyorsun. El yazın daha düzgün, daha genç. “ğ”leri o zamanlar böyle yazıyormuşsun demek. “Selma, bugün dükkâna gelmedin. Saatin kurulmamış olarak tezgâhta kaldı. Kurmadım. Gelesin diye.”",
"Bunu hatırlamıyorsun. Hiç. Kendi yazdığın bir cümle.",
"Mira yüzüne bakıyor. “Anlattığında bu yoktu,” diyor. “Şemsiye vardı, yağmur vardı. Kurmadığın saat yoktu.” Bir zarfı daha açıyor, okuyor, kızarıyor. “Baba bu çok fena.”"
], secenekler: [
{ t: "Mira'dan mektupları sana yüksek sesle okumasını istersin.", to: "y5", etki: { bag: 1, mektup_okundu: true } },
{ t: "Mektupları kutuya geri koyarsın. Kendi hatırladığın Selma'yı korumak istiyorsun.", to: "y5", etki: { koruma: 1 } },
{ t: "Mektupları Mira'ya verirsin: “Bunlar artık senin.”", to: "y5", etki: { kabul: 1, mektup_mira: true } },
{ t: "Bir mektubu alıp bütün gece tekrar tekrar okursun. Hatırlamaya çalışarak.", to: "y5", etki: { koruma: 1, gece_okudu: true } }
]},

yp_mira_gece: { baslik: "Arayış", metin: [
"“Unutursam unuttuğumu da unuturum,” dedin. Mira'nın yüzü kapandı. “Acısını ben çekerim ama,” dedi ve kalkıp odasına gitti. Kapı kilitlendi.",
"Gece yarısı odası boş. Pencere açık, perde dışarı uçuşuyor. Yastığın üstünde bir not: “Burak'tayım. Arama.” Burak'ı tanımıyorsun. Sınıftan biri. Ya da başka bir şey. Bilmiyorsun ve kaç şeyi bilmediğini o pencerenin önünde sayamıyorsun.",
"Ceketini giyip sokağa çıkıyorsun. Kemerli'nin gece sokakları. Bütün pencerelerde aynı sarı ışık. Mira'nın arkadaşlarının adresini bilmiyorsun. Okulun önüne gidiyorsun. Kapalı. Parka. Boş, salıncaklardan biri rüzgârda gıcırdıyor.",
"Sonra Bakırcılar Çarşısı. Dükkânın kepengi yarıya kadar açık. İçeride ışık.",
"Mira tezgâhta. Önünde Selma'nın saati. Açılmış, dişlileri her yana dağılmış. Elinde cımbız, yanağında siyah bir yağ lekesi. Ağlıyor.",
"“Kurmak istedim,” diyor seni görünce. “Annemin saatini. Sen unutmadan önce bir şey yapayım dedim. Bozdum. Nasıl yapılıyor bilmiyorum ki. Hiç öğretmedin.”",
"Son cümleyi söyledikten sonra kendisi de şaşırıyor, cımbızı bırakıyor."
], secenekler: [
{ t: "Yanına oturup saati birlikte toplarsınız.", to: "y5", etki: { bag: 1, saat_topladi: true } },
{ t: "“Unutmayacağım,” dersin. Bu kez bir söz olarak.", to: "y5", etki: { koruma: 1, soz: true } },
{ t: "Mira'ya sarılırsın. Saat bekleyebilir.", to: "y5", etki: { bag: 1 } },
{ t: "Cımbızı Mira'ya geri verip tarif edersin. Yapan o olsun.", to: "y5", etki: { kabul: 1, mira_yapti: true } }
]},

yp_kayit: { baslik: "Kayıt", metin: [
"Mira telefonunu masaya koyuyor. Ekranda kırmızı bir nokta yanıp sönüyor.",
"“Ne anlatayım?”",
"“Her şeyi,” diyor Mira. “Baştan. Ama sıkıcı yerleri atla.”",
"Nereden başlanır? Doğduğun evden mi, babanın tezgâhından mı, ilk tamir ettiğin saatten mi? Anlatmaya başlıyorsun: babanın elleri, büyüteç, dükkânın tozlu camı, ilk kez bir yay yerine oturduğunda babanın “Hah” demesi. Sadece “Hah.”",
"Bir saat geçiyor. Mira arada bir kâğıda bir şey yazıyor. Bir keresinde gülüyor. Babanın müşteriye yanlışlıkla iki kez para üstü verdiği gün.",
"Bir yerde duruyorsun. Babanın en yakın arkadaşı. Her cuma dükkâna gelir, tezgâhın kenarına oturur, şekeri ayrı isterdi. Yüzünü görüyorsun. Bıyığını, şapkasını. Adını bulamıyorsun.",
"Kırmızı nokta yanıp sönmeye devam ediyor.",
"“Adını hatırlamıyorum,” diyorsun sonunda.",
"Mira kaydı durdurmuyor. “Bu da kalsın,” diyor. Kâğıdına bir şey yazıyor. Göremiyorsun."
], secenekler: [
{ t: "Devam edersin. Unuttuklarınla birlikte.", to: "r2", etki: { kabul: 1, unutulan_kayit: true } },
{ t: "Kaydı durdurmasını istersin. Unuttuklarının kaydedilmesini istemiyorsun.", to: "r2", etki: { koruma: 1 } },
{ t: "Mira'dan da bir şey anlatmasını istersin. Sen de onun bir anısını hatırlamak istiyorsun.", to: "r2", etki: { bag: 1, mira_anlatti: true } },
{ t: "Kayda Selma'ya bir mesaj bırakırsın.", to: "r2", etki: { bag: 1, selma_mesaj: true } }
]},

yp_necmi_ev: { baslik: "Necmi'nin Evi", metin: [
"Necmi'yi deposunda değil evinde buluyorsun. Çarşının arkasında, eski bir apartmanın bodrum katında. Kapıyı açınca şaşırıyor. Üstünde atlet, elinde yarım bir ekmek.",
"Ev boş denecek kadar sade: bir yatak, bir masa, bir sandalye, köşede tüplü bir ocak. Duvarda tek bir fotoğraf: deniz kenarında, rüzgârda saçları yüzüne yapışmış, gülen genç bir kadın.",
"“Bedenimi sana bağışlamak istiyorum,” diyorsun. “Öldüğümde. Bütün olarak.”",
"Necmi ekmeği masaya bırakıyor. Sana çay koyuyor. Tek bardağı var, onu sana veriyor, kendisi reçel kavanozundan içiyor.",
"“Kırk yıl,” diyor. “Kırk yılda kimse bana bir şey vermedi. Hep ben aldım. Herkes eskisinden kurtulmak istedi, ben aldım. Para verdim. Kimse kendini vermedi.”",
"Fotoğrafa bakıyor. “O da vermedi. Kurum'un yetişemediği bir şeyle gitti. Ailesi gömdü, bana haber vermediler. Son bir kere dokunamadım.” Kavanozdan bir yudum alıyor. “Kızkardeşi hâlâ bayramlarda arar, ‘Necmi sen iyi misin’ der. İyiyim derim.”",
"Sana dönüyor. “Niye ben? Niye Kurum değil, toprak değil, kızın değil?”"
], secenekler: [
{ t: "“Çünkü sen her parçanın bir insan olduğunu biliyorsun,” dersin.", to: "r2", etki: { bag: 1, necmi_insan: true } },
{ t: "“Bilmiyorum. Yalnız kalmasın diye belki,” dersin.", to: "r2", etki: { bag: 1 } },
{ t: "Fikrini değiştirirsin: “Haklısın. Önce kızıma sormalıyım.”", to: "r2", etki: { koruma: 1, mira_sor: true } },
{ t: "“Ben de eski usul ölüyorum. Bundan anlayan bir tek sensin,” dersin.", to: "r2", etki: { kabul: 1 } }
]},

/* ---------- DEĞİŞİM KOLU ---------- */
dg1: { baslik: "Uyanış", metin: [
"Uyandığında oda beyaz ve sessiz. Kendini iyi hissediyorsun. Fazla iyi. Kafanın içi yeni silinmiş bir cam gibi.",
"Adın Yusuf. Elli üç yaşındasın. Saat tamircisisin. Bunları hiç uğraşmadan biliyorsun. Neyin eksik olduğunu bilmiyorsun. Zaten eksik olan şeyin yerini insan bilmez.",
P(function(d){ return d.kayip === "selma"; }, "Mira yatağının yanında, gözleri kızarık. Bir süre seni izliyor, sonra soruyor: “Baba. Annemle nerede tanıştınız?” Cevap hemen geliyor: “Dükkânda. Kurulmamış bir saatle geldi.” Doğru cümle. Ama içi boş. Bir kitabın arkasındaki özeti okur gibisin. Kadının yüzü bir fotoğraf, adı bir kelime: Selma. Onu sevdiğini biliyorsun, çünkü sana söylediler."),
P(function(d){ return d.kayip === "mira"; }, "Mira yatağının yanında. On yedi yaşında bir kız. Kızın olduğunu biliyorsun ve onu seviyorsun, bu değişmemiş. Ama soruyor: “Baba, bana bisiklete binmeyi öğrettiğin gün ne demiştin?” Bilmiyorsun. On iki yaşından öncesi boş. Karşındaki genç kadını tanıyorsun. O küçük kızla hiç tanışmamışsın."),
P(function(d){ return d.kayip === "cocukluk"; }, "Mira yatağının yanında. Onu tanıyorsun; Selma'yı hatırlıyorsun, her şeyi. Ama büyüteci düşündüğünde kimden kaldığını bilmiyorsun. Dükkânın ne zaman açıldığını, sabrı kimden öğrendiğini. Tezgâhın altındaki çatlak bardak aklına geliyor. Neden atmadığını bilmiyorsun."),
P(function(d){ return d.anlatti && d.kayip === "selma"; }, "Sonra Mira anlatmaya başlıyor. Bir zamanlar senin ona anlattığın hikâyeyi: kızaran kulaklar, yağmur, unutulan şemsiye. Kendi hikâyeni kızının ağzından dinliyorsun. Bir yerde Mira “Mavi şemsiye,” diyor ve sen başını sallıyorsun. Öyleyse öyle."),
"Mira sana bakıyor. Yüzünde, sesinde bir şeyin hâlâ orada olup olmadığını arıyor. Sen de ona bakıyorsun ve onun ne aradığını bilmiyorsun."
], secenekler: [
{ t: "Mira'ya dürüstçe söylersin: kaybettiğin şeyi hissetmiyorsun bile.", to: "dg2", etki: { bag: 1, durust: true } },
{ t: "Hatırlıyormuş gibi yaparsın. Üzülmesin.", to: "dg2", etki: { rol: true } },
{ t: "Kaybettiğini yeniden öğrenmek istediğini söylersin: anlatsın, sen yeniden ezberle.", to: "dg2", etki: { kabul: 1, yeniden: true } },
{ t: "Kaybettiğin şeyi umursamadığını fark edersin. Seni en çok bu korkutur.", to: "dg2", etki: { koruma: 1, korku: true } }
]},

dg2: { yonlendir: [
{ if: function(d){ return d.yedek; }, to: "ik1" },
{ to: "dg3" }
]},

dg3: { baslik: "Son Yüzde On", metin: [
P(S("dg1A"), "“Hiçbir şey hissetmiyorum,” dedin. Mira'nın yüzü düştü, sonra toparlandı. “En azından dürüstsün,” dedi. “O kalmış.” Kapıdan çıkarken montunu ters giydi. Fark etmedi."),
P(S("dg1B"), "Hatırlıyormuş gibi yaptın. Mira'nın yüzü aydınlandı. O günden sonra her gün biraz oynadın: eski Yusuf'u, onun en iyi bildiği hâliyle. Ne kadar kolay oynadığını fark edince korktun."),
P(S("dg1C"), "Mira her akşam anlatıyor, sen dinliyorsun. Bazen yemekte, bazen bulaşık yıkarken. Hikâyeler yerine oturuyor. Bir akşam, anlatmadığı bir ayrıntıyı sen ekliyorsun; Mira duruyor. “Bunu ben söylemedim,” diyor. “Nereden bildin?” Bilmiyorsun."),
P(S("dg1D"), "Kaybettiğin şeyi umursamıyorsun. Hatta biraz hafiflemiş gibisin. Bu hafifliği kimseye söylemiyorsun; Mira'ya hiç."),
"Altı ay geçiyor. Başka parçalar da değişiyor: ciğerler, bir göz, bir kulak. Lale her ziyarette bir yüzde söylüyor. Bugün: doksan.",
"“Kalan yüzde on,” diyor Lale, “beyninizin derin bir bölgesi. Hastalık oraya da ulaştı. Son bir işlem önerebiliriz. Ondan sonra yüzde yüz Kurum dokusu olursunuz. Bu aşamada kayıp yok.”",
"“O yüzde on,” diyorsun. “Benim son orijinal parçam. İçinde ne var?”",
"Lale kalemini bırakıyor. “Bilmiyoruz,” diyor. “Belki hiçbir şey. Belki çok şey. Ölçebildiğimiz bir şey değil.” Sonra, kâğıtlara bakmadan: “Babam da sordu bunu. Ben de bilmiyorum dedim.”",
"Pencerede kendi yansıman. Elli üç yaşında bir adam."
], secenekler: [
{ t: "Kabul edersin. Yüzde yüz. Bir eşik, ötekilerden farklı değil.", to: "dg3b", etki: { kabul: 1, tam: true } },
{ t: "Reddedersin. O yüzde on, ne olursa olsun, sende kalacak. Çürüse bile.", to: "dg3b", etki: { koruma: 1, son_on: true } },
{ t: "Eve gidip Mira'ya sorarsın: “Ben hâlâ senin baban mıyım?”", to: "dg3b", etki: { bag: 1, mira_sordu: true } },
{ t: "Lale'den o yüzde onun içinde ne olduğunu bulmasını istersin. Ne pahasına olursa olsun.", to: "dg3b", etki: { koruma: 1, arastir: true } }
]},

dg3b: { baslik: "Kaset", metin: [
P(S("dg3A"), "İşlemi yaptırdın. Uyandığında hiçbir şey değişmemişti. Lale “Nasılsınız?” diye sordu. “Acıktım,” dedin. Gülümsedi, not aldı."),
P(S("dg3B"), "Reddettin. Lale itiraz etmedi. O yüzde on başının içinde bir yerde yavaş yavaş sönüyor. Ne gittiğini bilmiyorsun. Bazen bir şarkının nakaratı yarıda kalıyor, o kadar."),
P(S("dg3C"), "Mira uzun süre sustu. “Bilmiyorum baba,” dedi sonunda. “Ama sen bana baba gibi bakıyorsun, ben de sana kız gibi. Bu yetmiyorsa ne yetecek bilmiyorum.” Sonra çaydanlığı ocağa koydu."),
P(S("dg3D"), "Lale aylarca uğraştı. Sonunda bir rapor getirdi. “Bir ses,” dedi. “Yüzde onun içinde bulabildiğimiz en tutarlı iz bir ses. Bir kadın, bir şarkı mırıldanıyor. Sözleri yok, ezgi var.” Raporun arkasına notalarını yazmıştı. Mira'ya gösterdin; Mira bir süre baktı, sonra mırıldandı. Ninni."),
"Bir gün dolabı temizlerken bir kutu buluyorsun. Eski bir video kaseti. Üstünde Selma'nın el yazısı: “Mira, 6 yaş, deniz.”",
"Çarşıdaki eskiciden bir video oynatıcı bulup kaseti takıyorsun. Ekranda bir sahil. Görüntü titrek. Küçük bir kız dalgalardan kaçıyor, gülüyor. Kamerayı tutan kadının sesi: “Yusuf bak, bak! Çek şunu, ay kaçtı!” Sonra kamera dönüyor ve ekranda sen varsın. Genç, güneşten kızarmış, kızını havaya atıp tutuyorsun.",
P(function(d){ return d.kayip === "selma"; }, "O sesi tanımıyorsun. Karın bu. Seni “Yusuf” diye çağıran ses. Ekrandaki adam o sese dönüp gülüyor. Sen o gülüşün nereden geldiğini bilmiyorsun."),
P(function(d){ return d.kayip === "mira"; }, "Bu kızı tanımıyorsun. Mira bu. Altı yaşında. Ekrandaki adam onu deli gibi seviyor, belli. Sen o adamı izliyorsun, bir komşunun düğün kasetini izler gibi."),
P(function(d){ return d.kayip === "cocukluk"; }, "Her şeyi hatırlıyorsun: o günü, o sahili, Selma'nın sesini. Ama ekrandaki adamın bileğindeki saat babandan kalma ve sen babanın yüzünü hatırlamıyorsun."),
"Kaset bitiyor. Ekran maviye dönüyor, bir cızırtı. Mira kapıda. Ne zamandır orada, bilmiyorsun."
], secenekler: [
{ t: "Mira'ya ekrandaki adamın sen olup olmadığını bilmediğini söylersin.", to: "dg4", etki: { bag: 1, durust: true } },
{ t: "Kaseti başa sarıp bir daha izlersin. Ve bir daha.", to: "dg4", etki: { koruma: 1 } },
{ t: "Kaseti Mira'ya verirsin: “Bu artık senin.”", to: "dg4", etki: { bag: 1 } },
{ t: "Hiçbir şey hissetmediğini kabul edip kaseti kutusuna geri koyarsın.", to: "dg4", etki: { kabul: 1 } }
]},

dg4: { baslik: "Dedenin Saati", metin: [
P(S("dg3bA"), "“Bilmiyorum,” dedin. Mira yanına oturdu. “Ben de bilmiyorum,” dedi. “O kız benim, biliyorum, ama altı yaşımı hiç hatırlamıyorum. İkimiz de o kasette misafiriz yani.” Kumandayı alıp bir daha başlattı."),
P(S("dg3bB"), "Kaseti beş kez izledin. Her seferinde bir şey hissetmeye çalıştın. Her seferinde çalıştığını fark ettin. Beşincide bant koptu. Eskici “Yapıştırırım,” dedi, “ama bir saniyesi gider.” Hangi saniyenin gideceğini sormadın."),
P(S("dg3bC"), "Mira kaseti aldı, göğsüne bastırdı. “Sağ ol,” dedi. Sonra odasına gitti. O gece oynatıcının sesini duydun, çok kısık."),
P(S("dg3bD"), "Kaseti kutusuna geri koydun. İçinde hafif bir rahatlama. Kutuyu dolabın en üst rafına, eski elinin kutusunun yanına koydun."),
"Bir öğleden sonra dükkânın kapısı açılıyor. Ece. On üç yaşında, boyu uzamış, sesi kalınlaşmış, yüzünde bir sivilce.",
"Dedesinin saatini bir yıl boyunca tamir ettin. Önce yay değişti. Sonra bir dişli. Sonra denge çarkı, kadran camı, akrep. Her ay bir şey bozuldu, her ay bir parça değişti. Şimdi içinde orijinal tek parça kalmadı. Aynı kasada, aynı ritimle çalışıyor.",
"Ece saati alıp kulağına götürüyor, gülümsüyor. Sonra kadranın kenarına bakıyor. Dedesinin çakıyla attığı küçük çizik yok. Cam değişmiş.",
"“Amca,” diyor. “Bu hâlâ dedemin saati mi?”"
], secenekler: [
{ t: "“Evet. Aynı kasa, aynı ritim. Saat parçalarından ibaret değil.”", to: "n1", etki: { kabul: 1, ece: "evet" } },
{ t: "“Hayır. Dedenin saati, değiştirdiğim parçaların kutusunda.”", to: "n1", etki: { koruma: 1, ece: "hayir" } },
{ t: "“Sen onu dedenin saati diye taşıdıkça öyle.”", to: "n1", etki: { bag: 1, ece: "sen" } },
{ t: "“Bilmiyorum kızım. Gerçekten bilmiyorum.”", to: "n1", etki: { ece: "bilmem" } }
]},

/* ---------- İKİNCİ KOLU ---------- */
ik1: { baslik: "Kapıdaki Adam", metin: [
P(S("dg1A"), "“Hiçbir şey hissetmiyorum,” dedin Mira'ya. O gece Mira odasında uzun süre ağladı. Bir hafta sonra kapı çalındı."),
P(S("dg1B"), "Hatırlıyormuş gibi yaptın; Mira inandı, ya da inanmak istedi. Bir hafta oynadın. Sonra kapı çalındı."),
P(S("dg1C"), "Mira her akşam anlattı, sen ezberledin. Bir hafta sonra, bir akşam, kapı çalındı."),
P(S("dg1D"), "Hiçbir şeyi umursamamak içini ürpertti. Kimseye söylemedin. Bir hafta sonra kapı çalındı."),
"Kapıyı Mira açıyor. Sonra bir ses çıkarıyor. Çığlık değil, yutkunurken nefesin ters gitmesi gibi.",
"Kapıda bir adam duruyor. Senin yüzün. Biraz daha genç, teni daha düzgün, omuzları daha dik. Ama senin yüzün. Sağ elinin başparmağını işaret parmağına sürtüyor. Sen düşünürken hep öyle yaparsın.",
"“Mira,” diyor. Sesi seninki. “Kızım.”",
"Sonra sana bakıyor. Uzun süre.",
"“Kurum'da bir hata olmuş,” diyor. “Senin sinirsel işlemin sırasında birkaç saat kayıtlarda kaybolmuşsun. Protokol yedeği yedek bir bedende uyandırmış. Beni. Uyandığımda her şeyi hatırlıyordum.” Duruyor. “Her şeyi.”",
P(function(d){ return d.kayip === "selma"; }, "Sonra sana değil, Mira'ya bakarak: “Annenin şemsiyesini dükkânda unuttuğu günü hatırlıyorum. Yağmur yağıyordu. Kırmızı bir şemsiyeydi, sapı kırık.” Mira'nın yüzü değişiyor. Sen ona hep mavi demiştin."),
P(function(d){ return d.kayip === "mira"; }, "Sonra sana değil, Mira'ya bakarak: “Bisiklete binmeyi öğrendiğin gün düşmekten korkuyordun. ‘Ben arkadayım’ dedim ve bıraktım. Pedal çevirirken dönüp baktın, ben çok gerideydim. Ağlamadın. Güldün. Sonra bir çalıya girdin.” Mira gülüyor ve ağlıyor. Sen bunu hatırlamıyorsun."),
P(function(d){ return d.kayip === "cocukluk"; }, "Sonra sana bakarak: “Babamın elleri. Sabahları tezgâhı silerken mırıldandığı türkü. Sen onu artık bilmiyorsun, değil mi?” Bilmiyorsun. O mırıldanmaya başlıyor. İki ölçü sonra susuyor."),
"Kapı hâlâ açık. Kış rüzgârı içeri doluyor, Mira'nın ayakları çıplak."
], secenekler: [
{ t: "Onu içeri alırsın. Kim olursa olsun, kapıda bırakılmaz.", to: "ik2", etki: { kabul: 1, iceri: true } },
{ t: "Kapıyı kapatıp Kurum'u ararsın.", to: "ik2", etki: { koruma: 1, kurum_aradi: true } },
{ t: "Ona sorarsın: “Senin için ben kimim?”", to: "ik2", etki: { soru: true } },
{ t: "Mira'ya bakarsın. Bu kapıda ne olacağına o karar versin.", to: "ik2", etki: { bag: 1, mira_kapi: true } }
]},

ik2: { baslik: "İki Baba", metin: [
P(S("ik1A"), "Onu içeri aldın. Mutfak masasına oturdu. Senin sandalyene, hiç düşünmeden. Sonra fark edip kalktı. “Pardon,” dedi. Kendi evinde, kendine."),
P(S("ik1B"), "Kapıyı kapattın, Kurum'u aradın. Hat meşguldü. Adam kapının öbür yanında bekledi. Çalmadı, gitmedi. Bir saat sonra Mira, sana sormadan, kapıyı açtı ve ona terlik verdi."),
P(S("ik1C"), "“Senin için ben kimim?” Düşündü. “Bilmiyorum,” dedi. “Sanırım sen, benim bir yıl sonramsın. Ben de senin bir yıl öncen. Ama ikimiz de bugünüz. Kafam karıştı.”"),
P(S("ik1D"), "Mira ikinize de baktı. Sonra kenara çekilip adamın girmesine izin verdi. Kararı o verdi. Ama önce sana bir kez baktı."),
"Ertesi gün Lale geliyor. Yüzü solgun, elinde kalın bir dosya. Kurum adına özür diliyor. Uzun, dikkatli, avukat cümleleriyle.",
"“Ancak bir sorunumuz var,” diyor. “Kemerli'de bir kişi bir kez kayıtlı olabilir. Yusuf Taner adına bir kimlik, bir ev, bir velayet. Biriniz bu kimliği taşıyacak. Öteki yeni bir adla, başka bir şehirde yaşayabilir. Ya da...” Durakladı. “Talep edilirse yedek arşive geri alınabilir. Acısız. Uyku gibi.”",
"“Hangimiz?” diye soruyor öteki.",
"“Kurum'un görüşü bedensel süreklilik,” diyor Lale. “Bu beden, bu süreç. Yani siz.” Sana bakıyor. Sonra ötekine. “Hukuk müşavirimiz başka düşünüyor: zihinsel süreklilik. Anılar eksiksiz. Yani siz.” Dosyayı kapatıyor. “Kendi aramızda da anlaşamadık.”",
"Mira köşede, kollarını kavuşturmuş, iki babasına bakıyor.",
P(function(d){ return d.kayip === "mira"; }, "Biri onun çocukluğunu hatırlıyor. Biri hatırlamıyor."),
P(function(d){ return d.kayip === "selma"; }, "Biri annesini hatırlıyor. Biri hatırlamıyor."),
P(function(d){ return d.kayip === "cocukluk"; }, "İkisi de onu hatırlıyor. Yalnızca biri kendi babasını.")
], secenekler: [
{ t: "Sen kalırsın, o gider. Bu beden, bu hayat senin.", to: "ik3", etki: { koruma: 1, ikinci: "gitti" } },
{ t: "O kalsın, sen gidersin. Mira'nın ihtiyacı olan, eksiksiz olan.", to: "ik3", etki: { kabul: 1, bag: 1, ikinci: "kaldi" } },
{ t: "İkiniz de kalırsınız, Kurum'a rağmen. Mira'nın iki babası olur.", to: "ik3", etki: { bag: 1, ikinci: "ikisi" } },
{ t: "Mira seçsin.", to: "ik3", etki: function(d){ d.bag++; d.ikinci = (d.kayip === "mira" || d.kayip === "selma") ? "kaldi" : "gitti"; d.mira_secti = true; } }
]},

ik3: { baslik: "Ayna", metin: [
P(function(d){ return d.mira_secti && d.ikinci === "kaldi"; }, "Mira uzun süre ikinize baktı. Sonra ötekinin yanına geçti. “Özür dilerim,” dedi sana. “Sen de babamsın. Ama o beni hatırlıyor.” Sesi annesininki kadar kararlıydı. Bunu bilen yalnızca öteki."),
P(function(d){ return d.mira_secti && d.ikinci === "gitti"; }, "Mira uzun süre ikinize baktı. Sonra senin yanına geçti ve ötekine döndü: “Sen her şeyi hatırlıyorsun. Ama bu son yılı ben onunla geçirdim. Elini değiştirdiğini, kalbini, unuttuğunu. Sen bunları bilmiyorsun.”"),
P(function(d){ return !d.mira_secti && d.ikinci === "gitti"; }, "Ötekine gitmesini söyledin. İtiraz etmedi. Lale'ye yeni bir ad seçeceğini söyledi. Bir süre düşündü, sonra babanızın adını söyledi. “Olur mu?” dedi sana. Bir şey diyemedin."),
P(function(d){ return !d.mira_secti && d.ikinci === "kaldi"; }, "Gideceğini söyledin. Mira itiraz etti, ağladı, sonra sustu. Öteki hiçbir şey demedi. Yalnızca sana baktı. Kendini dışarıdan nasıl göründüğünü o bakışta gördün. Yorgun, eski bir paltonun içinde."),
P(function(d){ return d.ikinci === "ikisi"; }, "Kurum'a hayır dediniz. Lale bir süre dosyaya baktı. “Bu konuda yönetmeliğimiz yok,” dedi. “Kimse istemedi daha önce.” Kapıdan çıkarken döndü: “Bir şey olursa beni arayın. Kurum'u değil, beni.”"),
"O gece mutfakta ikiniz kalıyorsunuz. Mira uyuyor ya da uyuyormuş gibi yapıyor. Masada iki çay bardağı. İkiniz de bardağı aynı şekilde tutuyorsunuz. Sağ elle, başparmak kenarın üstünde. Fark edip aynı anda bırakıyorsunuz.",
"Öteki sana senin kaybettiğin anıyı anlatmaya başlıyor. Yavaşça, ayrıntılarıyla. Sesinde hiç kibir yok. Arada bir duruyor, “Doğru mu anlatıyorum?” diye soruyor. Sonra bunun ne saçma bir soru olduğunu fark edip gülüyor. Sen de gülüyorsun.",
"Bir saat sonra çay soğumuş. Hangisinin bardağı hangisi, karışmış."
], secenekler: [
{ t: "Anıyı baştan, eksiksiz anlatmasını istersin.", to: "n1", etki: { kabul: 1, dinledi: true } },
{ t: "Durdurursun. “Bu anı artık senin,” dersin. “Ben onsuz devam ederim.”", to: "n1", etki: { koruma: 1 } },
{ t: "Kalkıp ona sarılırsın.", to: "n1", etki: { bag: 1, sarildi: true } },
{ t: "Babandan kalan büyüteci ona verirsin. Kimde kalacağına o karar versin.", to: "n1", etki: { bag: 1, buyutec: true } }
]},

/* ---------- RET KOLU ---------- */
r1: { baslik: "Kendi Sırasıyla", metin: [
"“Reddediyorum,” diyorsun. Lale kâğıdı geri çekiyor. “Kurum kimseyi zorlamaz,” diyor. “Bekler.” Kalemi kâğıdın üstüne bırakıyor, sonra bir daha alıp cebine koyuyor.",
"Eve dönüyorsun. Mira mutfakta, patates soyuyor. Söylüyorsun. Önce susuyor, sonra bıçağı bırakıp bağırıyor, sonra ağlıyor, sonra yine patates soymaya başlıyor. Kabuklar kalın kalın kopuyor.",
"“Seçebilirdin,” diyor. “Bir şeyi bırakırdın, gerisi kalırdı. Şimdi hepsi gidecek. Hangi sırayla gideceğini bile bilmeyeceğiz.”",
"Haklı. Ama o kâğıdın üstünde Selma'yı ya da Mira'yı ya da babanı karalamak elini kaldıramadığın bir şeydi. Bunu ona nasıl söyleyeceğini bilmiyorsun. İlke mi bu, inat mı. Gece tavana bakarken de bilmiyorsun.",
"Bir hafta sonra anahtarlarını kapının dışında unutuyorsun. İki hafta sonra Ece'nin adı kayboluyor; Ece kapıdan girene kadar. Bir ay sonra bir sabah bir kelime gidiyor: şemsiye. Bütün gün tarif ediyorsun. Yağmurda açılan, kolun altına sıkıştırılan, otobüste unutulan şey. Mira sonunda söylüyor. “Ha,” diyorsun. “O.”",
"Akşam, o kelimeyle birlikte bir şeyin daha gitmek üzere olduğunu hissediyorsun: bir renk, bir dükkân, bir yağmur."
], secenekler: [
{ t: "Bir defter tutmaya başlarsın. Her gün hatırladığın her şeyi yazarsın.", to: "r2", etki: { koruma: 1, defter: true } },
{ t: "Mira'dan seni kaydetmesini istersin: sesini, anlattıklarını, yüzünü.", to: "yp_kayit", etki: { bag: 1, kayit: true } },
{ t: "Hiçbir şey yapmazsın. Ne gidiyorsa gitsin.", to: "r2", etki: { kabul: 1, birak: true } },
{ t: "Necmi'ye gidip öldüğünde bedenini ona bağışlamak istediğini söylersin.", to: "yp_necmi_ev", etki: { kabul: 1, necmi_soz: true } }
]},

r2: { baslik: "Mira'nın Defteri", metin: [
P(S("yp_kayitA"), "Devam ettin. Kayıtlar birikti. Hatırladıklarının yanında, hatırlayamadığın yerlerde uzun sessizlikler. Mira hiçbirini silmedi. Bir gece o sessizliklerden birini dinlerken uyuyakalmış. Sabah telefon yanağının altındaydı."),
P(S("yp_kayitB"), "Mira kaydı durdurdu. Ama kâğıdına bir şey yazdı. Sonradan defterinde okuyacaktın: “Babam unuttuklarının kaydedilmesini istemedi. Bunu da yazıyorum, kızmasın.”"),
P(S("yp_kayitC"), "Mira anlattı: senin hatırlamadığın bir gece. Yedi yaşında, ateşi kırka çıkmış. Sen bütün gece başında oturup bir saatin içini anlatmışsın, dişli dişli. “En sıkıcı masaldı,” dedi Mira. “Ama uyudum.”"),
P(S("yp_kayitD"), "Kayda Selma'ya bir mesaj bıraktın. Söyleyeceklerini düşünmüştün. Telefon kayda başlayınca hepsi gitti. “Selma,” dedin. Sonra uzun bir sessizlik. Sonra “Şemsiyeni hâlâ bende,” dedin. Mira bu kaydı hiç silmedi."),
P(S("yp_necmi_evA"), "Necmi gözlerini kapadı. “Evet,” dedi. “Her parça bir insan.” Sonra fotoğrafa baktı. “Sağ ol.” Kavanozu masaya bıraktı, eli titriyordu."),
P(S("yp_necmi_evC"), "Necmi başını salladı. “Doğru. Kızına sor.” Kapıda seni uğurlarken ekledi: “Ama aklına geldi ya. Bir kere biri bana kendini vermek istedi. O da bir şey.”"),
P(function(d){ return d.son === "yp_necmi_evB" || d.son === "yp_necmi_evD"; }, "Necmi çayını bitirip kalktı. “Kabul,” dedi. Fotoğrafın önünde durdu. Sana dönmeden: “Ama acele etme. Ben bekleyebilirim. Bekleyemeyen sensin.”"),
P(S("r1A"), "Defterin ilk sayfasına yazdın: “Adım Yusuf. Elli üç yaşındayım. Kızım Mira. Karım Selma, öldü.” Sonra her gün bir sayfa. Bir ay sonra ilk sayfayı okuduğunda el yazını tanıdın, cümleleri tanımadın. En altta bir not vardı: “Ekmek al.” Neden yazdığını bilmeden ekmek aldın."),
P(S("r1B"), "Mira her akşam telefonu masaya koydu ve sen anlattın: babanı, dükkânı, Selma'yı, onun çocukluğunu. Bazı geceler aynı hikâyeyi iki kez anlattın; Mira durdurmadı. Bir keresinde “Bunu dün de anlattın,” dedi, sonra hemen “Ama bugün daha güzel anlattın,” diye ekledi."),
P(S("r1C"), "Hiçbir şey yapmadın. Kayboluşu izledin. Bazı günler hafif, bazı günler korkunç. Bir gün Mira'nın doğum gününü unuttun; Mira bir şey demedi, akşam kendi pastasını kendi aldı, sen mumları yaktın."),
P(S("r1D"), "Necmi seni dinledi. “Bütün olarak,” dedi. “Hiç bütün bir insan almamıştım.” Gözleri parladı, sonra söndü. “Ama seni aldığımda sen olmayacaksın ki. Hatıraların gitmiş olacak. Bana boş bir kasa bırakacaksın.” Bunu kötü niyetle söylemedi. Bir esnafın hesabı gibi söyledi."),
"Aylar geçiyor. Mira sınavlarını verdi. Sonucunu ona üç kez sordun, üçünde de sevindin. Üçüncüsünde Mira da gerçekten sevinmiş gibi yaptı.",
"Bir sabah mutfakta Mira'yı bir defterin başında buluyorsun. Senin değil. Kalın, mavi kapaklı, kendi defteri. Sayfa sayfa yazı.",
"“Ne yazıyorsun?”",
"Mira bir süre bakıyor. “Seni,” diyor. “Sen unuttukça ben yazıyorum. Senin anlattıklarını, benim hatırladıklarımı, annemin dediklerini. Bir gün hiçbir şey hatırlamadığında sana okuyacağım. Masal gibi.” Sonra ekliyor: “Sıkıcı yerleri atlayacağım ama.”",
"Defteri uzatıyor. Ortalardan bir sayfa açıyorsun. Mira'nın yuvarlak el yazısıyla: “Babam bana bisiklete binmeyi öğrettiği gün ‘Ben arkadayım’ dedi ve bıraktı. Döndüğümde çok uzaktaydı. Bir çalıya girdim.”",
"Bu anıyı artık hatırlamıyorsun. Çalıyı hatırlamıyorsun. Okurken gülüyorsun yine de."
], secenekler: [
{ t: "Defteri ondan istersin. Her gece kendin okuyacaksın.", to: "r3", etki: { koruma: 1, mira_defter: true } },
{ t: "Yazmayı bırakmasını söylersin: “Sen kendi hayatını yaz. Benimkini değil.”", to: "r3", etki: { bag: 1, birak_mira: true } },
{ t: "Defteri şimdi, sen hâlâ hatırlarken, sesli okumasını istersin.", to: "r3", etki: { bag: 1, okudu: true } },
{ t: "Defteri kapatıp geri verirsin. O sayfalardaki adamı tanımaya hazır değilsin.", to: "r3", etki: { koruma: 1 } }
]},

r3: { baslik: "Yabancı Yüz", metin: [
P(S("r2A"), "Defter artık başucunda. Her gece okuyorsun. Bazı geceler gülüyorsun, bazı geceler ağlıyorsun. Bazı geceler hiçbir şey hissetmiyorsun ve sabah Mira'ya defterin iyi yazıldığını söylüyorsun, bir kitap okumuş gibi."),
P(S("r2B"), "Mira itiraz etti. “Bu benim hayatım,” dedi. “Seni yazmak benim hayatım.” Yazmaya devam etti. Sen bir daha söylemedin. Bir gece defteri masada açık bulup bir sayfasını okudun, sonra kapatıp eski yerine koydun."),
P(S("r2C"), "Mira okudu. Bir saat, iki saat. Bir yerde durdu, çünkü sen ağlıyordun. “Devam et,” dedin. Neden ağladığını bilmiyordun. Mira de bilmiyordu. O da ağlıyordu."),
P(S("r2D"), "Defteri geri verdin. Mira göğsüne bastırdı. “Beklerim,” dedi."),
"Kışın ortasında bir sabah uyanıyorsun ve mutfakta genç bir kadın var. Kahve yapıyor. Dönüp gülümsüyor: “Günaydın baba.”",
"Bu kadının kim olduğunu bilmiyorsun. Yüzü tanıdık. Bir otobüste her sabah gördüğün biri gibi.",
"Sonra geliyor. Mira. Kızın. Ama o boşluk olmuştu ve Mira yüzünden okudu. Elindeki fincan sallandı. Kahve tezgâha döküldü. Bezi almak için dönmedi.",
"“Baba,” diyor. “Beni tanıdın mı?”"
], secenekler: [
{ t: "“Tanıdım,” dersin ve o boşluktan hiç söz etmezsin.", to: "r4", etki: { koruma: 1, gizledi: true } },
{ t: "“Önce tanımadım,” dersin. “Sonra tanıdım. Bir gün tanımasam bile hep tanıyacağım.”", to: "r4", etki: { bag: 1, durust: true } },
{ t: "Kurum'u aramayı düşünürsün. Belki hâlâ geç değildir.", to: "r4", etki: { kabul: 1, pisman: true } },
{ t: "Kalkıp ona sarılırsın. Kelimelere güvenmiyorsun artık.", to: "r4", etki: { bag: 1, sarildi: true } }
]},

r4: { baslik: "Berrak Gün", metin: [
P(S("r3A"), "“Tanıdım,” dedin. Mira inandı, ya da inanmayı seçti. Bezi alıp tezgâhı sildi, sonra sana sarıldı. Omzunun üstünden karla kaplı erik ağacını gördün."),
P(S("r3B"), "Mira bir süre sustu. Sonra güldü. Gözleri dolu, ama güldü. “Bir gün tanımasan bile,” dedi. “Güzel cümle. Deftere yazacağım.” Hemen yazdı, kahve lekeli parmaklarıyla."),
P(S("r3C"), "Kurum'u aradın. Lale sesini tanıdı. “Sinirsel işlem için çok geç,” dedi, nazikçe. “Giden doku geri gelmez. Kalanı değiştirebiliriz ama çok az kaldı.” Telefonu kapattın. Mira kapının pervazında duruyordu. Ne konuştuğunu duymuştu."),
P(S("r3D"), "Ona sarıldın. Saçları kahve ve sabun kokuyordu. Bu kokuyu biliyorsun. Az önce adını bulamadığın kızının kokusunu biliyorsun."),
"Bahara doğru bir sabah uyandığında her şey berrak. Böyle günler oluyor bazen: sis kalkıyor, kalan her şey yerli yerinde, keskin. Mira bu günlere “iyi gün” diyor ve takvime yıldız koyuyor.",
"Dükkâna gidiyorsun. Uzun zamandır gitmiyordun. Tezgâh tozlu. Büyüteç yerinde. Çekmecede Ece'nin dedesinin saati. Hiç teslim edemediğin, yarım kalan.",
"Saati açıyorsun. Ellerin titriyor. Yayı yerine oturtmaya çalışıyorsun. Kayıyor. Bir daha. Kayıyor.",
"Kapı açılıyor. Ece, on üç yaşında. Yanında Mira. Ece tezgâhın öbür tarafına oturuyor, Mira senin yanına. Kimse bir şey söylemiyor; Ece çantasından bir paket bisküvi çıkarıp tezgâhın ortasına koyuyor."
], secenekler: [
{ t: "Cımbızı Mira'ya verirsin. “Sen tak, ben söyleyeyim.”", to: "n1", etki: { bag: 1, devretti: true } },
{ t: "Bir kez daha denersin. Kendi elinle. Ne kadar sürerse.", to: "n1", etki: { koruma: 1, kendi: true } },
{ t: "Saati kapatıp Ece'ye olduğu gibi verirsin: “Bazı saatler durur.”", to: "n1", etki: { kabul: 1, durdu: true } },
{ t: "Ece'ye dedesini sorarsın. Saati değil, adamı.", to: "n1", etki: { bag: 1, ece_dede: true } }
]},

/* ---------- ORTAK: NECMİ VE SON ---------- */
n1: { baslik: "Necmi'nin Deposu", metin: [
P(function(d){ return d.son && d.son.indexOf("dg4") === 0; }, "Ece saati cebine koyup gitti. Kapıda durdu, döndü, bir şey soracaktı, sormadı. Kapı çıngırağı bir süre sallandı."),
P(function(d){ return d.son && d.son.indexOf("ik3") === 0; }, "Ertesi sabah Necmi kapıyı çaldı. İkinizi birden gördü ve bir süre bir şey diyemedi. Sonra güldü. Uzun, tuhaf, öksürüğe dönen bir kahkaha. “Otuz yıldır bunu yapmaya uğraşıyorum,” dedi. “Kurum bir gecede yapmış. Kâğıt hatasıyla.”"),
P(S("r4A"), "Mira yayı ilk denemede taktı. Saat çalıştı. Ece önce güldü, sonra ağladı, sonra bisküvi yedi. Sen Mira'nın ellerine baktın. Senin tarifinle hareket eden başka eller."),
P(S("r4B"), "Yirminci denemede yay yerine oturdu. Ece saymıştı. “Yirmi!” dedi, ayağa kalkıp. Sen ellerini dizine koydun, titremeleri geçsin diye bekledin."),
P(S("r4C"), "Ece saati alıp kulağına götürdü. Ses yok. “Dedem de durdu,” dedi. “Belki saati de dursun.” Cebine koydu, bisküvinin son tanesini sana bıraktı."),
P(S("r4D"), "Ece bir saat boyunca dedesini anlattı: istavrit, ağ, bir de hiç bitmeyen fıkraları. Saat tezgâhta açık, yarım kaldı. Mira bisküvileri bitirdi."),
"Birkaç gün sonra Necmi seni deposuna çağırıyor. Çarşının en arkasında eski bir han. İçeri girerken başını eğmen gerekiyor.",
"Raflarda kavanozlar, kutular, etiketler. Eller, gözler, kalpler, bir kulak, bir dişeti. Her birinin üstünde bir ad ve bir tarih. Kemerli'nin yenilenirken geride bıraktığı her şey, toz içinde.",
"Ortada bir masa. Masanın üstünde bir şekil: bir insanın taslağı. Farklı insanların parçalarından, özenle birleştirilmiş. Kıpırdamıyor. Saçları bir yerden, elleri bir yerden.",
P(function(d){ return d.necmi && d.el === "yeni"; }, "Şeklin sağ eli seninki. Başparmağın yanındaki kesik izinden tanıyorsun. On yaşında babanın dükkânında, yeni bir çakıyla. O el şimdi bir başkasının bileğine bağlı."),
"“Bu benim karım,” diyor Necmi. “Yani olmaya çalışıyor. Otuz yıl önce öldü. O günden beri parçaları topluyorum. Onunkileri değil. Onunkiler gömüldü. Başkalarınınkileri. Hepsi bir araya gelince belki...” Cümleyi bitirmiyor. Şeklin omzundaki tozu üflüyor.",
"“Ben de yüzde yüz yenilendim,” diyor. “Eski parçalarım şu rafta. Bazen düşünüyorum, hangisi Necmi? Rafta duranın içinde karımı seven adamın kalbi var. Bendeki kalp yalnızca onu sevdiğimi biliyor.”"
], secenekler: [
{ t: function(d){ return d.necmi && d.el === "yeni" ? "Eski elini geri istersin." : "Necmi'ye, şeklin yarım kalmaması için bir parçanı bağışlamayı teklif edersin."; }, to: "n1b", etki: function(d){ if(d.necmi && d.el === "yeni"){ d.koruma++; d.geri_aldi = true; } else { d.kabul++; d.bagisladi = true; } } },
{ t: "Necmi'ye o şekli yakmasını söylersin. Karısı o değil, olamaz.", to: "yp_ates", etki: { koruma: 1, yak: true } },
{ t: "“O senin karın,” dersin. “Sen öyle sevdiğin sürece.”", to: "n1b", etki: { bag: 1, kabul: 1, onay: true } },
{ t: "Şeklin eline dokunursun. Ne hissedeceğini bilmeden.", to: "yp_sekil", etki: { dokundu: true } }
]},

n1b: { baslik: "Erik Ağacı", metin: [
P(S("yp_atesA"), "“Hoşça kal Necmi,” dedin. Necmi kutuyu ateşe bıraktı. Alev yükseldi, karton kıvrıldı. Necmi ağladı. Yenilenmiş gözleri kızardı, burnu aktı. “Sağ ol,” dedi. “Biri söyledi. Sonunda biri bir şey söyledi.”"),
P(S("yp_atesB"), "Kutuyu elinden aldın. Köşesi kararmıştı. Necmi önce şaşırdı, sonra omuzları indi. “Biliyordum,” dedi. “Kimse gerçekten yakmak istemez. Ama biri istesin istedim.” Kutu rafına döndü, kararmış köşesi öne bakacak şekilde."),
P(S("yp_atesC"), "Necmi bir süre düşündü, sonra kutuyu ateşe bıraktı. “Haklısın,” dedi. “Zaten gitmişti. Ben kutusunu tutuyordum.” Ellerini ateşe tutup ısıttı."),
P(S("yp_atesD"), "Sustun. Necmi kutuyu ateşe bıraktı. Alev sönene kadar orada durdunuz. Sonra Necmi varilin içine biraz su döktü ve “Hadi, çay koyayım,” dedi."),
P(S("yp_sekilA"), "Necmi dinledi. Yüzü değişmedi. “Ben de duyuyorum,” dedi. “Her gece. Bu yüzden burada yatmıyorum.”"),
P(S("yp_sekilB"), "Rüyaydı, dedin kendine. Ama sabah ceketinin cebinde bir etiket buldun: “Yusuf, sağ el.” Nereden geldiğini bilmiyorsun. Etiketi çöpe atamadın. Cüzdanına koydun."),
P(S("yp_sekilC"), "Necmi uzun süre düşündü. “Otuz yıl,” dedi. “Ama belki haklısın. Belki herkes kendi adıyla gitmeli.” Şeklin saçını okşadı. “Daha değil. Ama bir gün.”"),
P(S("yp_sekilD"), "Şeklin eline bir kez daha dokundun. Bu kez ılıktı. Ya da senin elin ılıktı. Hangisi olduğunu düşünmeden kapıdan çıktın."),
P(S("n1A"), "Necmi rafa döndü ve kutuyu indirdi. Bir şey kaybettiği belliydi, ama itiraz etmedi. “Herkesin kendi parçasına hakkı var,” dedi. Kutuyu uzatırken bir an bırakmadı."),
P(S("n1B"), "Necmi şeklin başında durdu. “Belki haklısın,” dedi. “Ama otuz yıl. Otuz yılı yakamam.” Yakmadı. Sen de ısrar etmedin. Çıkarken şekle bir daha bakmadın."),
P(S("n1C"), "Necmi sana döndü. Gözleri yaşlı. “Kimse bunu söylemedi,” dedi. “Otuz yılda kimse.” Sonra şeklin saçını, kimin olduğu bilinmeyen o saçı, parmaklarıyla taradı."),
P(S("n1D"), "Şeklin eline dokundun. Soğuktu. Hiçbir şey hissetmedin. Belki biraz utanç. Birinin karısının eline izinsiz dokunmuş gibi."),
"Eve dönüyorsun. Bahçede Selma'nın diktiği erik ağacı. Kış bitiyor. Dallarda ilk tomurcuklar.",
"Selma onu Mira doğduğu yıl dikmişti. “Mira büyüdükçe büyüsün,” demişti. Ağaç her yıl budandı. Bugün üstündeki dalların hiçbiri Selma'nın diktiği dal değil. Mahallede yine de herkes “Selma'nın eriği” diyor. Komşular izinsiz toplarken bile.",
P(function(d){ return d.gomdu; }, "Ağacın dibinde, toprağın altında, eski elin ya da elinin sözü duruyor. Geçen yaz o köşedeki erikler daha iri oldu; Mira bunu senin elin yüzünden olduğunu söyledi, şakayla karışık."),
P(function(d){ return d.kayip === "selma"; }, "Selma'yı hatırlamıyorsun. Ama ağacın ona ait olduğunu biliyorsun. Her bahar budamak için makası sen alıyorsun."),
"Mira mutfak penceresinden sana bakıyor. Sonra terliklerini giyip yanına geliyor.",
"“Baba,” diyor. “Ölmekten korkuyor musun?”",
P(function(d){ return d.ret; }, "Reddettiğin günden beri bu soruyu bekliyordun. Doktorlar bir yıl diyor, belki daha az."),
P(function(d){ return !d.ret; }, "Kemerli'de kimse ölmez. Ama kızının ne sorduğunu biliyorsun.")
], secenekler: [
{ t: "“Evet,” dersin. “Ama korktuğum şey ölmek değil. Ölmeden önce gitmek.”", to: "n2", etki: { koruma: 1 } },
{ t: "“Hayır,” dersin. “Ben bu ağaç gibiyim. Dallar değişse de kökler yerinde.”", to: "n2", etki: { kabul: 1 } },
{ t: "“Sen buradayken korkmuyorum,” dersin.", to: "n2", etki: { bag: 1 } },
{ t: "“Bilmiyorum,” dersin. “Hangi ben ölecek, onu bilmiyorum.”", to: "n2", etki: { bilinmez: true } }
]},

n2: { baslik: "Son Saat", metin: [
P(S("n1bA"), "“Korktuğum şey ölmek değil,” demiştin, “ölmeden önce gitmek.” Mira bir süre sustu. Sonra erik ağacının bir dalını eğip sana gösterdi: bir tomurcuk."),
P(S("n1bB"), "“Ben bu ağaç gibiyim,” demiştin. Mira gülmüştü: “Ağaç yeni dalını tanıyor mu ama baba?”"),
P(S("n1bC"), "“Sen buradayken korkmuyorum,” demiştin. Mira koluna girmiş, eve kadar bırakmamıştı."),
P(S("n1bD"), "“Hangi ben ölecek, onu bilmiyorum,” demiştin. Mira uzun süre baktı. “Ben ikisini de tanıyorum,” dedi."),
"O gece dükkândasın. Mira da. Dışarıda bahar yağmuru, çarşının taşlarında.",
"Tezgâhın üstünde babandan kalan cep saati. Elli yıldır cebinde. İçinde hiç değişmemiş tek bir parça var: en eski dişli, babanın taktığı. Gerisi yıllar içinde senin ellerinle değişti.",
P(function(d){ return d.ikinci === "ikisi"; }, "Öteki de burada. Tezgâhın öbür ucunda, aynı büyüteçle. Biri kahvesini, biri çayını içiyor."),
P(function(d){ return d.ikinci === "kaldi"; }, "Bu dükkân artık senin değil, ötekinin. Ona son kez bakmaya geldin. Kepengi Mira açtı. Yarın yeni bir adla, yeni bir şehre gideceksin."),
P(function(d){ return d.tam; }, "Sen artık yüzde yüz yenisin. Saatin o eski dişlisi, senden kalan en eski şey olabilir."),
P(function(d){ return d.ret; }, "Bugün iyi bir gün. Takvimde bir yıldız. Ellerin titriyor ama kafan berrak."),
"Mira yanında. “Bu hâlâ dedemin saati mi?” diye soruyor; Ece'nin sorduğu gibi. Ece'den duymuş olmalı.",
"Saati açıyorsun. Dişliler dönüyor. En altta o eski dişli. Dişleri aşınmış, kenarları yuvarlaklaşmış. Dönüyor.",
"Yağmur kepengin üstünde tıkırdıyor. Saatin sesi ona karışıyor. Hangisinin hangisi olduğunu bir süre ayıramıyorsun."
], secenekler: [
{ t: "Saati kurup bırakırsın. Çalışsın.", to: "ys", etki: { saat: "kur" } },
{ t: "Saati durdurursun.", to: "ys", etki: { saat: "dur" } },
{ t: "Saati Mira'ya verirsin.", to: "ys", etki: { saat: "mira", bag: 1 } },
{ t: "O eski dişliyi çıkarıp cebine koyarsın. Saati yeni bir dişliyle kapatırsın.", to: "ys", etki: { saat: "disli", koruma: 1 } }
]},

ys: { yonlendir: [
{ if: function(d){ return d.ret; }, to: "son_unutus" },
{ if: function(d){ return d.ikinci === "kaldi"; }, to: "son_giden" },
{ if: function(d){ return d.ikinci === "ikisi"; }, to: "son_iki" },
{ if: function(d){ return d.tam; }, to: "son_gemi" },
{ to: "son_kalan" }
]},

/* ---------- SONLAR ---------- */
son_unutus: { son: true, baslik: "Unutuş", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurdun. Dükkânın sessizliğinde çalışmaya başladı."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun. Yağmurun sesi kaldı."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin. Avucunda tuttu, kapağını kapatmadan."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun. Saat yeni dişliyle çalıştı, aynı ritimle."),
"Sonbaharda, erik yaprakları dökülürken, bir sabah Mira'nın yüzünü tanımadın ve bu kez arkasından bir şey gelmedi.",
"Mira yine de her akşam geldi. Mavi kapaklı defteri açıp okudu: bir saat tamircisinin hikâyesi. Kurulmamış bir saatle dükkâna gelen bir kadın. Bisikletin arkasını bırakan bir baba, bir çalı. Sen dinledin. Kibarca, ilgiyle. Bazı yerlerde gülümsedin. Mira o yerlerin yanına küçük yıldızlar koydu.",
"Kışın öldün. Kendi bedeninde, kendi kalbinle. Kemerli'de buna “eski usul” diyorlar. Cenazeye çarşıdan çok kişi geldi. Necmi en arkada durdu, şapkasını hiç çıkarmadı. Ece, dedesinin saatini cebinde getirmişti. Çalışıyordu.",
"Mira defterin son sayfasına bir şey yazmadı. Boş bıraktı."
]},

son_giden: { son: true, baslik: "Giden", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurup tezgâhın üstüne bıraktın."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurup tezgâhta bıraktın. Öteki onu yeniden kuracak. Senin ellerinle."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin. “Babana ver,” dedin. Sonra durdun. “Ötekine.” Sonra yine durdun. Mira “Anladım baba,” dedi."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun. Saat kaldı, sen gittin."),
"Ertesi sabah yeni bir adla trene bindin. Kurum bir ad önermişti. Reddettin, babanın adını seçtin.",
"Başka bir şehirde, başka bir çarşıda küçük bir dükkân. İnsanlar adını soruyor, söylüyorsun. Kimse geçmişini sormuyor. Karşı dükkândaki kunduracı her sabah sana “Günaydın usta” diyor. Adını hiç kullanmıyor, bu hoşuna gidiyor.",
"Mira her ay mektup yazıyor. “Sevgili babam,” diye başlıyor. Bir mektupta “Babam sana selam söylüyor,” yazıyor. O cümleyi okuduktan sonra mektubu katlayıp bir süre çekmecede bekletiyorsun, sonra yine açıp okuyorsun.",
"Bir yerde, bir mutfakta, senin sesinle konuşan bir adam senin kızına kahvaltı hazırlıyor. Yumurtayı da senin gibi fazla pişiriyordur. Mira yine de yiyordur."
]},

son_iki: { son: true, baslik: "İki Kişilik Hayat", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurdun. Öteki dinledi. İkiniz aynı anda gülümsediniz. Bundan hiç söz etmediniz."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun. Öteki elini uzatıp yeniden kurdu. Kavga değildi bu. Bir konuşma biçimiydi."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin. Öteki başıyla onayladı."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi sen çıkardın, yenisini öteki taktı."),
"Kurum bir çözüm bulamadı. Kemerli'nin kayıtlarında bir boşluk: Yusuf Taner, iki kez.",
"Dükkânı ikiye böldünüz: o sabahları, sen öğleden sonraları. Müşteriler fark etmiyor, ya da etmiyormuş gibi yapıyor. Ece fark ediyor ve her gelişinde soruyor: “Hangisisiniz bugün?” Bazen yanlış cevap veriyorsunuz, bilerek.",
"Bazı akşamlar mutfakta üç kişi oturuyorsunuz. Öteki sana senin kaybettiğin anılardan birini anlatıyor. Sen ona onun hiç yaşamadığı son yılı.",
"Yavaş yavaş farklılaşıyorsunuz. O sabahları kahve içiyor, sen çay. O bahçeye gül dikti. Sen dikmezdin. Gülü sen sulamaya başladın, nedenini ikiniz de sormadınız."
]},

son_gemi: { son: true, baslik: "Tahta Tahta", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurdun. Babanın dişlisi dönmeye devam etti."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun. İçindeki eski dişli kıpırdamadan kaldı."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin. Eski dişli şimdi onun cebinde."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun. Saat yeni dişliyle aynı ritimle çalıştı. Sen de."),
"Yaşamaya devam ettin. Kemerli'de kimse ölmez.",
"Dükkânı açtın, saatleri tamir ettin. Mira üniversiteye gitti, döndü, evlendi. Düğünde gelin arabasının saatini sen ayarladın, yine de geç kaldılar. Torunun doğdu. Onu kucağına aldığında elin titremedi. O el hiç titremedi.",
"Bir gün torunun sana soracak: “Dede, sen hep böyle miydin?” Ve sen bilmeyeceksin. Elinde, gözünde, kalbinde başlangıçtan kalan tek bir hücre yok. Yine de her sabah aynı adı söyleyerek uyanıyorsun, aynı tezgâha oturuyorsun.",
"Necmi'nin deposunda bir rafta eski parçaların duruyor. Bazen önünden geçiyorsun. Bir keresinde içeri girdin; Necmi seni görünce rafı gösterdi. “İyi duruyor,” dedi. “Tozunu alıyorum.” Teşekkür ettin, kendi elinin kutusuna dokunmadan çıktın."
]},

son_kalan: { son: true, baslik: "Kalan Parça", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurdun. Babanın dişlisi, artık hatırlamadığın şeylerin arasında dönüyor."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun. Sen devam ettin."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin. “Bir gün biri sana da bu soruyu soracak,” dedin. Mira saati kulağına götürdü."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun. Artık her yere onunla gidiyorsun. Ceketini değiştirirken cebinden cebine taşıyorsun."),
P(function(d){ return d.ikinci === "gitti"; }, "Öteki gitti. Başka bir şehirde, senin kaybettiğin anıyı taşıyan bir adam yaşıyor. Bayramlarda bir kartpostal geliyor. İmzasız. El yazısı seninki."),
P(function(d){ return d.son_on; }, "O yüzde on yavaş yavaş söndü. Bir gün tamamen gitti. Ne gittiğini hiç öğrenmedin. O gün akşam yemeğinde tuzu iki kez istedin, o kadar."),
"Yaşamaya devam ettin. Bir şey eksik. Bazen tezgâhta çalışırken eline bir parça alıp nereye takılacağını bilmeden bir süre tutuyorsun.",
P(function(d){ return d.kayip === "selma"; }, "Selma'yı hiç hatırlamadın. Ama erik ağacını her bahar budadın; Mira'nın tarifiyle, annesinin yaptığı gibi."),
P(function(d){ return d.kayip === "mira"; }, "Mira'nın çocukluğunu hiç hatırlamadın. Onu yeniden tanıdın: on yedi yaşında, yirmi yaşında, otuz yaşında. Bir gün Mira sana bir çocukluk fotoğrafını gösterdi. “Tatlıymışım,” dedi. “Tatlıymışsın,” dedin, ilk kez görerek."),
P(function(d){ return d.kayip === "cocukluk"; }, "Babanı hiç hatırlamadın. Ama tezgâhın altındaki çatlak bardağı hâlâ atmıyorsun."),
"Bazen yağmurda kırmızı bir şemsiye görünce duruyorsun. Neden durduğunu bilmeden, şemsiye köşeyi dönene kadar bakıyorsun."
]}

},

ayna: function(d){
  var out = [];
  var k = d.koruma, a = d.kabul, b = d.bag;
  if(k >= a && k >= b) out.push("Bu hikâye boyunca en çok korumaya çalıştın: elini, kalbini, anılarını.");
  else if(a >= b) out.push("Bu hikâye boyunca en çok kabullendin: her yeni parçayı, her kaybı.");
  else out.push("Bu hikâye boyunca en çok başkalarına yaslandın: Mira'ya, Hayriye Hanım'a, Necmi'ye.");
  if(d.kayip) out.push("Bir anı kümesini bıraktın: " + KAYIP[d.kayip] + ".");
  if(d.ret) out.push("Hiçbir anıyı seçmeyi kabul etmedin.");
  if(d.yedek && d.ikinci) out.push("Yedeğine izin verdin ve yedek uyandı; kendinle bir kapıda karşılaştın.");
  if(d.rol) out.push("Bir süre eski kendini oynadın.");
  if(d.mira_karar || d.mira_karar2) out.push("Bazı kararları Mira'ya bıraktın.");
  return out;
},

dipnot: [
{ ad: "Kişisel kimlik ve Theseus'un Gemisi", t: "Parçaları birer birer değiştirilen bir şey hâlâ aynı şey midir? Antik Yunan'dan beri sorulan bu soru, Hobbes'un eklediği bir kıvrımla daha da keskinleşir: eski parçalar toplanıp yeniden birleştirilse, hangisi asıl olur? Necmi'nin deposu ile Ece'nin saati bu sorunun iki yüzüydü." },
{ ad: "Bellek ve benlik", t: "John Locke'a göre bir insanı zaman içinde aynı kişi yapan şey bedeni değil, bilincinin ve belleğinin sürekliliğidir. Ama bu görüşün bedeli ağırdır: Hayriye Hanım gibi hatırlamayan biri, artık aynı kişi değil midir? Ya bir başkasından öğrenilen bir anı, kendi anın olur mu?" },
{ ad: "Kopya sorunu", t: "Derek Parfit, bir insanın tam bir kopyası yapılsa ve iki kişi aynı anda var olsa “hangisi gerçekten ben?” sorusunun belki de yanlış soru olduğunu öne sürdü. Ona göre önemli olan kimlik değil, psikolojik süreklilik ve bağlılıktır. Ve süreklilik, iki yöne birden gidebilir." },
{ ad: "Ölüm ve süreklilik", t: "Hiç ölmeyen ama sürekli değişen bir varlık için ölüm ne demektir? Belki ölüm bir anda gelen bir son değil, bir şeyin artık kendisi olmaktan çıktığı belirsiz bir nokta. Ve belki bir insan, kendi içinde değil, onu hatırlayanların içinde devam eder." }
]
});
})();
