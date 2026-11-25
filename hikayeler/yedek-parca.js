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
giris: "Kemerli'de bozulan hiçbir şey atılmaz. Süreklilik Kurumu ciğeri de yeniler, kalbi de, hatta anıları bile. Sen elli iki yaşında bir saat tamircisisin ve bedenin seni yavaş yavaş, parça parça bırakmaya başladı. Önce elin gidiyor, sonra kalbin, sonra daha derindeki şeyler. Her yenilenmede bir şey kazanıp bir şey kaybediyorsun. Yanında kızın, bir hurdacı, Kurum'un teknisyeni ve tamir etmeye çalıştığın eski bir cep saati var. Hepsi aynı şeyi merak ediyor: Her şeyi değişen bir adamdan geriye ne kalır?",
kavramlar: ["Kişisel kimlik", "Bellek ve benlik", "Kopya sorunu", "Ölüm ve süreklilik"],
ozet: "Kemerli'de bozulan hiçbir şey atılmaz, yenisi takılır. Ciğer de, kalp de, el de, anı da. Bir saat tamircisinin bedeni onu parça parça bırakmaya başlayınca, geriye ne kalacağı sorusu yalnızca onun derdi olmaktan çıkıyor.",
baslangic: "y1",
durum: { koruma: 0, kabul: 0, bag: 0 },

sahneler: {

y1: { baslik: "Titreme", metin: [
"Kemerli'de otobüs duraklarında da, hastane kapılarında da, simit arabalarının yan camında da aynı çıkartma vardır: “Hiçbir şey kaybolmaz, yalnızca yenilenir.” Bu Süreklilik Kurumu'nun sözüdür. Ciğerin bozulursa yenisini, kalbin yorulursa yenisini, gözün kararırsa yenisini takarlar. Bu şehirde kimse hastalıktan ölmez. Komşun Remzi Efendi'nin dediği gibi, burada adam ölmez, eskir.",
"Bakırcılar Çarşısı'nın en dipteki dükkânı senin. Adın Yusuf, elli iki yaşındasın, saat tamir ediyorsun. Tezgâh da büyüteç de babandan kalma, tezgâhın altındaki çatlak çay bardağı bile babandan. Kimse atmaya kıyamamış.",
"Bu sabah bir cep saatinin spiral yayını yerine oturtmaya uğraşıyorsun ama elin titriyor. Saç teli kadar ince yay cımbızın ucundan üç kere kayıp gidiyor. Dördüncüde cımbızı bırakıp elini dizine koyuyor, bekliyorsun ama titreme dizinde de geçmiyor.",
"Saat, Ece adında on iki yaşında bir kızın, dedesinden kalmış. Dün okul çantasıyla gelip saati tezgâha bıraktı. “Dedem bu saat hiç durmadı derdi,” dedi, “ben durdurdum, teneffüste düşürdüm.” Sonra “Kaç para tutar?” diye sordu ve cevabını beklemeden cebindeki bozuklukları saymaya başladı.",
"Tezgâhın kenarında Kurum'dan gelen mühürlü zarf duruyor, içinde üç satır yazı var: “İlerleyici doku kaybı. Değişim süreciniz başlamıştır. İlk aşama sağ el. Sonraki aşamalar size ayrıca bildirilecektir.” Kemerli'de bu “sonraki aşamalar”ın nerede bittiğini herkes bilir, en sonunda iş kafaya gelir.",
"Evde on yedi yaşındaki kızın Mira var. Annesi Selma altı yıl önce, bir salı akşamı mutfakta öldü, Kurum'un yetişemeyeceği kadar çabuk oldu her şey. Mira o akşamdan beri salı günleri makarna yapmıyor."
], secenekler: [
{ t: "Yarın sabah Kurum'a gidersin, beklemekle elin düzelmeyecek.", to: "y2", etki: { kabul: 1 } },
{ t: "Zarfı çekmeceye kaldırırsın. Mira'nın sınavları var, şimdi söylemeyeceksin.", to: "yp_mira", etki: { koruma: 1, sakladi: true } },
{ t: "Akşam yemeğinde Mira'ya anlatırsın.", to: "y2", etki: { bag: 1, mira_bilir: true } },
{ t: "Titreyen elinle bütün gece o saatle uğraşırsın, bitirene kadar.", to: "yp_ece", etki: { koruma: 1, ece_saati: true } }
]},

y2: { baslik: "Süreklilik Kurumu", metin: [
P(S("yp_miraA"), "Bu sefer hiçbir şeyi eksiltmeden anlattın. Mira bir kere bile sözünü kesmedi, sen bitirince “Tamam,” dedi, “artık ikimizin derdi.” Sabah seni Kurum'un kapısına kadar o götürdü. Otobüste kulaklığının bir tekini sana verdi, ne dinlediğini pek anlamadın."),
P(S("yp_miraB"), "“Bu kadarını bana bırak kızım,” dedin. Mira bir süre yüzüne baktı, sonra kalktı. “Tamam baba.” Kapıda dönüp ekledi: “Annem de hep böyle derdi.” Ertesi sabah kahvaltıda ikiniz de radyoyu dinliyormuş gibi yaptınız."),
P(S("yp_miraC"), "Gece yarısı mutfak masasında söz verdiniz. Mira elini uzattı, el sıkıştınız, esnaf pazarlık bitirir gibi. Sonra Mira güldü. “Amma ciddi olduk ya,” dedi. “Çay koyayım mı?”"),
P(S("yp_miraD"), "Zarfı çekmeceye geri koydun. Mira bir şey demeden odasına gitti. Sabah çekmecede zarfın yanında küçük bir not buldun: “Ben buradayım. Hazır olunca söyle.” Altına bir surat çizmiş, ağzı dümdüz."),
P(S("yp_eceA"), "“El dediğin el işte,” dedin. Ece kaşlarını çattı. “Dedem de öyle derdi ama kendi ellerini hiç değiştirmedi,” dedi, saati cebine koyup okula koştu. Montunun fermuarı açık kalmıştı."),
P(S("yp_eceB"), "“Ben de eski usul adamım galiba,” dedin. Ece tanıdık bir şey bulmuş gibi sırıttı. “Dedem sizi severdi,” dedi. “Hiç tanışmadınız ama yine de severdi. Huysuz adamları severdi o.”"),
P(S("yp_eceC"), "Ece dedesini anlattı. Balıkçıymış, saati bir kere denize düşürmüş, ertesi gün ağdan bir istavritle beraber çıkarmış. “Bak hâlâ benimle,” dermiş. Ece bu kısmı anlatırken gülmekten kırıldı. Zil çalana kadar anlattı durdu."),
P(S("yp_eceD"), "İkiniz de senin ellerine baktınız, titriyordu. Ece kendi küçük, mürekkep lekeli elini uzatıp senin elinin üstüne koydu. Titreme geçmedi ama Ece de elini çekmedi."),
P(S("y1A"), "Gece gözüne uyku girmedi, sabah ilk otobüse bindin. Karşında oturan adamın gözleri o kadar maviydi ki bakmamak için yüzünü cama çevirdin. Kemerli'de kimin neyinin yeni olduğunu sormak ayıptır, bakmak da öyle."),
P(S("y1B"), "Zarf çekmecede kaldı. Kahvaltıda Mira bir şey sordu, cevap verirken çay bardağını sol elinle tuttun ama bardak yine de sallandı. Mira fark etmedi, ya da fark edip bir şey demedi. Bu evde susmak babadan kalmadır."),
P(S("y1C"), "Mira dinledi, sonra hiç beklemediğin bir şey yapıp titreyen sağ elini tuttu. “Beni bisiklete bu el bindirdi,” dedi. “Yenisi bindiremez tabii ama ben artık biliyorum zaten.” Gülmeye çalıştı, burnu kızardı."),
P(S("y1D"), "Sabaha karşı dörtte yay sonunda yerine oturdu ve saat çalıştı. Cımbızı tezgâha bıraktığında elinin kendiliğinden yumruk olduğunu fark ettin, açmak için epey uğraştın."),
"Kurum'un binası bembeyaz. Pencereleri var ama hiçbiri bir yere bakmıyor. İçerisi ılık, havada hafif bir yasemin kokusu var, sonradan havalandırmadan verildiğini öğreneceksin.",
"Yanındaki sandalyede yaşlı bir kadın oturuyor, adı Hayriye Hanım. Sen sormadan anlatmaya başlıyor: “Yüzde seksenim yeni.” Parmaklarıyla sayıyor. “Ciğerler, kalp, böbrekler, iki göz, bir kulak, bir de hafızanın bir kısmı. Düğün günümü hatırlamıyorum ama tarihini biliyorum, on iki haziran. Güzel bir gün olmalı, fotoğraflarda gülüyorum.” Çantasından bir naneli şeker çıkarıp sana uzatıyor.",
"Teknisyen Lale seni içeri çağırıyor. Genç, sakin bir kadın, tırnakları kısacık kesilmiş. “Sağ el,” diyor. “Basit bir işlem. Yeni el eskisinin bütün becerilerini öğrenir, sinir haritanızı çıkarıyoruz zaten. Bir haftaya kalmaz, farkı anlamazsınız. Eski eliniz yasal hakkınızdır, mühürlü bir kutuda size teslim edilir.”",
"Kutunun boyunu elleriyle gösteriyor, bir ayakkabı kutusu kadar."
], secenekler: [
{ t: "Kabul edersin. El dediğin el sonuçta.", to: "y3", etki: { kabul: 1, el: "yeni" } },
{ t: "Reddedersin. Eski elinle gidebildiğin yere kadar gideceksin.", to: "y3", etki: { koruma: 1, el: "eski" } },
{ t: "Önce Hayriye Hanım'a dönüp sorarsın: “Neyi kaybettiğinizi nereden biliyorsunuz?”", to: "y3", etki: { bag: 1, el: "yeni", hayriye: true } },
{ t: "Mira'yı arayıp kararı ona sorarsın.", to: "y3", etki: { bag: 1, el: "yeni", mira_karar: true } }
]},

y3: { baslik: "Kutu", metin: [
P(S("y2C"), "Hayriye Hanım şekeri ağzında bir yanağından öbürüne geçirdi. “Bilmiyorum ki oğlum,” dedi. “Bir şey gidince içimde bir yer serinliyor, kapısı açık kalmış bir oda gibi. İçinde ne vardı hatırlamıyorum ama cereyan yapıyor.” Sonra senin eline baktı. “El kolay ama. El oda değil.”"),
P(S("y2D"), "Mira telefonda bir süre konuşmadı, arkadan okul koridorunun gürültüsü geliyordu. “Değiştir baba,” dedi. “Elini kaybetmek seni kaybetmek demek değil, değil mi? Değil tabii.” Kendi sorusunu kendisi cevapladı, tam o sırada da zil çaldı."),
P(function(d){ return d.el === "yeni"; }, "Bir hafta geçti ve Lale haklı çıktı, farkı anlamıyorsun bile. Yeni el eskisinden daha sağlam, daha hızlı. Ece'nin saatinin yayını üç saniyede taktın, taktıktan sonra da bir süre eline baktın, aferin mi demen lazım bilemedin."),
P(function(d){ return d.el === "yeni"; }, "Bir akşam Mira yanından geçerken alışkanlıkla elini tuttu, sonra hemen bıraktı. “Pardon,” dedi, kimden özür dilediği pek belli değildi. Yeni elin ılık, yumuşak, seninkine benziyor. Mira o akşam bulaşıkları kendisi yıkadı."),
P(function(d){ return d.el === "yeni"; }, "Eski elin Kurum'un mühürlü kutusunda, dolabın üst rafında duruyor. Bazen gece kalkıp kutuya bakıyorsun ama açmıyorsun. Bir keresinde üstündeki tozu yeni elinle sildin, sonra elini pantolonuna sildin."),
P(function(d){ return d.el === "eski"; }, "Bir hafta geçti, titreme kötüleşti. Artık küçük vidaları tutamıyorsun bile. Ece'nin saati tezgâhta açık duruyor. Mira okuldan sonra dükkâna gelip senin tarifinle çalışıyor, ince, sabırlı parmakları var, tıpkı annesininki gibi. Bunu ona söylemiyorsun. Bir gün vidayı düşürünce annesi gibi “Hay aksi” deyince gülüyorsun, o da neye güldüğünü anlamıyor."),
"Bir öğleden sonra kapıda bir adam beliriyor. Uzun boylu, sıska, eski bir paltonun içinde, paltonun düğmelerinin hiçbiri birbirine benzemiyor. Hurdacı Necmi bu, çarşıda herkes bilir ama kimse tanımaz.",
P(function(d){ return d.el === "yeni"; }, "Selam vermeden konuşmaya başlıyor: “Senin eski el bende daha iyi durur. İyi para veririm. Ben eski parçaları toplarım, ne varsa. Bir gün hepsini birleştireceğim, eskilerden bir adam yapacağım. O zaman görürüz hangisi asılmış.”"),
P(function(d){ return d.el === "eski"; }, "Selam vermeden elini işaret ediyor. “Değiştirmemişsin,” diyor. “Akıllıca, ya da değil, bilemem. Ben eski parçaları toplarım. Bir gün değiştirirsen kutuyu bana getir. Bir gün hepsini birleştireceğim, eskilerden bir adam yapacağım. O zaman görürüz hangisi asılmış.”"),
"Gülüyor, dişlerinin yarısı bembeyaz, yarısı sapsarı. Hangilerinin yeni olduğu belli."
], secenekler: [
{ t: function(d){ return d.el === "yeni" ? "Kutuyu Necmi'ye satarsın." : "Necmi'ye, zamanı gelince eski parçalarını ona vereceğine söz verirsin."; }, to: "y3b", etki: { kabul: 1, necmi: true } },
{ t: function(d){ return d.el === "yeni" ? "Kutuyu saklarsın. Atölyenin arka rafında, gözünün önünde." : "Necmi'yi kapıdan çevirirsin. Parçaların kimseye satılık değil."; }, to: "y3b", etki: { koruma: 1, sakla: true } },
{ t: function(d){ return d.el === "yeni" ? "Kutuyu bahçeye, Selma'nın diktiği erik ağacının dibine gömersin." : "Necmi'ye, öldüğünde bedeninin erik ağacının dibine gömüleceğini, kimseye verilmeyeceğini söylersin."; }, to: "y3b", etki: { koruma: 1, gomdu: true } },
{ t: function(d){ return d.el === "yeni" ? "Kutuyu Mira'ya verirsin: “Bu babanın eli. Ne istersen yap.”" : "Necmi'ye cevabı Mira'nın vereceğini söylersin: “Benden sonra benimle ilgili kararlar onun.”"; }, to: "y3b", etki: { bag: 1, miraya_verdi: true } }
]},

y3b: { baslik: "Yüzde Doksan Beş", metin: [
P(S("y3A"), "Necmi parayı tezgâha tek tek sayarak bıraktı, bozuklukları en sona sakladı. Kapıda dönüp “Merak etme,” dedi, “sen kendine bakamıyorsun ama ben senin eskine iyi bakarım.”"),
P(S("y3B"), "Necmi omuz silkti. “Herkes önce böyle der,” dedi. “Sonra kutu dolaba girer, dolap depoya. Bir gün biri açar, ne olduğunu bilmez, çöpe atar. Ben bilirim ama. Bir düşün.” Çıkarken kapının çıngırağına elini koyup susturdu."),
P(S("y3C"), "Necmi bir süre konuşmadı. Sonra şapkasını çıkarıp içini kokladı, yine başına geçirdi. “Toprak da koleksiyoncudur,” dedi, “ama benden sabırlıdır.” Sonra çekip gitti."),
P(S("y3D"), "Mira kutuya da, karara da uzun uzun baktı, sonra kutuyu kendi odasına götürdü. Ne yaptığını sormadın. Bir hafta sonra odasının kapısında bir kâğıt gördün: “Girmeden önce kapıyı çal. Ciddiyim.”"),
"Bir ay sonra kontrol için yine Kurum'a gidiyorsun. Bekleme salonunda yine Hayriye Hanım oturuyor, aynı sandalyede, elinde aynı naneli şekerler.",
"Yanında kırklı yaşlarında bir adam var, oğlu. Ona telefonundan bir fotoğraf gösteriyor. Hayriye Hanım fotoğrafa bakıp nazikçe gülümsüyor. “Ne tatlı çocuk,” diyor, “kimin bu?”",
"Oğlu telefonu cebine koyup sana dönüyor, salonda sizden başka kimse yok. “Yüzde doksan beş,” diyor. “Annem mutlu. Her sabah uyanıyor, kahvaltısını ediyor, bahçede oturuyor, hiçbir şeyden şikâyeti yok. Doktorlar kişiliği korunmuş diyor, kahkahası bile aynı.”",
"Biraz bekliyor. “Ama beni tanımıyor. Her sabah ona kim olduğumu anlatıyorum, o da kibarca inanıyor. ‘Aaa ne güzel, oğlum varmış,’ diyor. Sizce bu hâlâ benim annem mi? Yoksa annemin kahkahasını taşıyan iyi kalpli bir yabancı mı?”",
"Hayriye Hanım ikinize de birer şeker uzatıyor."
], secenekler: [
{ t: "“Hâlâ anneniz,” dersin. “İnsan hatırladıklarından ibaret değil.”", to: "y4", etki: { kabul: 1, cevap_hayriye: "anne" } },
{ t: "“Bilmiyorum,” dersin. “Ama siz hatırladıkça bir şey devam ediyor.”", to: "y4", etki: { bag: 1, cevap_hayriye: "siz" } },
{ t: "Cevap vermezsin. Bir gün Mira'nın sana da aynı soruyu soracağını düşünüyorsun.", to: "y4", etki: { koruma: 1, cevap_hayriye: "sessiz" } },
{ t: "Hayriye Hanım'a dönüp sorarsın: “Mutlu musunuz?”", to: "y4", etki: { cevap_hayriye: "sordu" } }
]},

y4: { baslik: "Kalp", metin: [
P(S("y3bA"), "Adam uzun uzun yüzüne baktı. “Herkes böyle diyor,” dedi, “benden başka herkes.” Kalkıp annesinin paltosunu omuzlarına geçirdi. Hayriye Hanım ona taksi şoförüne teşekkür eder gibi, çok kibar bir şekilde teşekkür etti."),
P(S("y3bB"), "“Ben hatırlıyorum,” dedi adam, “ama bir gün ben de bu sandalyeye oturacağım. O zaman kim hatırlayacak?” Bir şey diyemedin, şekerin kâğıdını açıp kapattın."),
P(S("y3bC"), "Sen konuşmadın, adam da konuşmadı. Aradaki boşluğu Hayriye Hanım doldurdu, havadan, çiçeklerden, yarın yağmur yağıp yağmayacağından bahsetti. Kimse onu dinlemiyordu ama o da pek umursamıyordu."),
P(S("y3bD"), "Hayriye Hanım şaşırdı, biraz düşündü. “Mutlu musun diye soran olmadı hiç,” dedi, “hep kim olduğumu soruyorlar.” Sonra güldü. “Evet. Neye bilmiyorum ama evet.” Oğlu pencereden otoparka bakıyordu."),
"Üç ay sonra bir sabah merdiven çıkarken göğsün sıkışıyor, durup tırabzana tutunuyorsun. Bir sonraki basamakta yine sıkışıyor. İki gün sonra Kurum'un mektubu geliyor: “İkinci aşama: kalp.”",
"Lale yine karşında oturuyor, bu sefer önünde iki kâğıt var. “Kalp değişimi artık rutin bir iş,” diyor. “Ama bu aşamada bir şey daha öneriyoruz, tam yedekleme. Hafızanızın, kişiliğinizin, alışkanlıklarınızın haritasını çıkarıyoruz. Sonraki aşama sinirsel olacak, orada kayıp riski var. Bir şey ters giderse onarım için kullanırız.”",
"“Yalnızca onarım için mi?” diye soruyorsun.",
"Lale'nin gözü kâğıda kayıyor. “Yalnızca onarım için,” diyor, “yönetmelik böyle.” Kaleminin kapağını takıp çıkarıyor.",
P(function(d){ return d.el === "eski"; }, "Elin masanın üstünde titriyor, kâğıdın köşesi elinin altında hışırdıyor. Lale bakıyor. “Elinizi hâlâ değiştirmediniz,” diyor. “Kalpte bu kadar inat edemezsiniz ama, kalp beklemez.”")
], secenekler: [
{ t: "İkisini de kabul edersin, hem yeni kalbi hem tam yedeği.", to: "y4b", etki: { kabul: 1, kalp: "yeni", yedek: true } },
{ t: "Kalbi kabul edip yedeği reddedersin. Bir kopyan olsun istemiyorsun.", to: "y4b", etki: { kalp: "yeni" } },
{ t: "Kalbi de reddedersin. Kendi kalbin ne kadar atarsa o kadar.", to: "y4b", etki: { koruma: 1, kalp: "eski" } },
{ t: "Kararı Mira'ya bırakırsın.", to: "y4b", etki: { bag: 1, kalp: "yeni", yedek: true, mira_karar2: true } }
]},

y4b: { baslik: "Mira", metin: [
P(S("y4A"), "İki imza attın. Yeni kalp ilk gece göğsünde sessiz sessiz attı, eskisinden düzenli, hiç telaşsız. Uyuyamayınca kalkıp bir bardak su içtin. Kurum'un bir yerindeki bir sunucuda bir sen daha uyuyordu ve ondan haberin yoktu."),
P(S("y4B"), "Yedek kâğıdını imzalamadın. Lale bir şey not etti, başka bir şey sormadı. Eve dönerken otobüste kalbini dinledin, yeni kalp şehrin çukurlu yollarında eskisinden bir tık fazla atıyordu."),
P(S("y4C"), "Kalbi de reddettin. Lale itiraz etmedi, Kurum kimseyi zorlamaz, bekler. Merdivenler her gün biraz daha uzuyor. Mira merdivenin başına bir tabure koydu, üstüne de bir minder."),
P(S("y4D"), "Mira bütün gece kâğıtları okudu, sabah ikisini de imzalamanı istedi. “Yedeği de,” dedi. “Ne olur ne olmaz. Seni kaybedersem bir yerde olmalısın.” İmzaladın. Bir yerde olmakla burada olmanın aynı şey olmadığını ona anlatmaya çalışmadın, çünkü sen de tam bilmiyordun."),
"Bir gece Mira mutfakta, ders kitaplarının arasında oturuyor, sınavına üç ay kalmış. Kalemini bırakıp sana bakıyor.",
"“Baba, sinirsel aşamada ne olacak? Lale Hanım bazı şeyler gidebilir dedi. Ya annemi unutursan?”",
"Kalemi alıp kapağını ısırmaya başlıyor. Küçükken de böyle yapardı, Selma da kızardı ona.",
"“Ben annemi pek hatırlamıyorum,” diyor. “On bir yaşındaydım. Yüzünü fotoğraflardan biliyorum ama sesini artık bilmiyorum. Telefonda bir sesli mesajı vardı, telefonu değiştirince o da gitti. Onu en iyi sen hatırlıyorsun. Sen de unutursan hepten gider.”",
"“Annemle nasıl tanıştınız ki? Hiç adam gibi anlatmadın.”",
"Selma bir gün dükkâna bozuk dediği bir kol saatiyle gelmişti. Saat bozuk falan değildi, kurulmamıştı yalnızca. Sen bunu söyleyince kadın kulaklarına kadar kızardı. Ertesi hafta yine geldi, elinde aynı saat, yine kurulmamış. Üçüncü hafta sen sordun: “Bunu bilerek mi kurmuyorsunuz?” “Evet,” dedi, “siz de bilerek mi soruyorsunuz?”"
], secenekler: [
{ t: "Mira'ya her şeyi en küçük ayrıntısına kadar anlatırsın. Sen unutsan da o hatırlasın.", to: "yp_mektuplar", etki: { bag: 1, anlatti: true } },
{ t: "“Unutmayacağım,” dersin, bilmeden.", to: "y5", etki: { koruma: 1, soz: true } },
{ t: "“Unutursam unuttuğumu da unuturum, acı çekmem,” dersin.", to: "yp_mira_gece", etki: { kabul: 1 } },
{ t: "Hiçbir şey demeden onu Selma'nın eski kol saatinin yanına götürürsün, birlikte kurarsınız.", to: "y5", etki: { bag: 1, saat_kurdu: true } }
]},

y5: { baslik: "Bedel", metin: [
P(S("yp_mektuplarA"), "Mira mektupları okudu, bir gece, iki gece, bir hafta boyunca. Her mektupta genç bir adam genç bir kadına kötü yazılmış cümlelerle âşık oluyordu. Bazılarını dinlerken hatırladın, bazılarını yeniden öğrendin, bir süre sonra hangisinin hangisi olduğunu karıştırmaya başladın."),
P(S("yp_mektuplarB"), "Mektupları kutuya koydun. Mira bir şey demedi ama kutuyu kendi odasına götürdü. Gece kapısının altından ışık sızdı, bir ara güldüğünü duydun, sonra burnunu çektiğini."),
P(S("yp_mektuplarC"), "“Bunlar benim hafızam olacak,” dedi Mira kutuya bakarak, “ama ben bunları yaşamadım ki.” Yine de kutuyu bırakmadı. Bazen gece odasından kâğıt hışırtısı geliyor."),
P(S("yp_mektuplarD"), "Bütün gece okudun. Sabaha karşı tezgâhta kurulmamış bir kol saati gördün, gözünün önünde, apaçık, sonra kayboldu. Bir anı mıydı, yoksa uykusuzluktan mı, bilemedin."),
P(S("yp_mira_geceA"), "Saati sabaha kadar birlikte topladınız, senin ellerin ve Mira'nın ince parmakları. Altıda saat çalıştı. Mira başını omzuna koyup hemen uyudu, ağzı açık, tıpkı annesi gibi."),
P(S("yp_mira_geceB"), "“Unutmayacağım,” dedin, bu sefer söz verir gibi. Mira sana baktı. “Tutamasan da söylemen iyi,” dedi. Saati kutusuna koydu ama toplamadı."),
P(S("yp_mira_geceC"), "Mira'ya sarıldın. Dişliler tezgâhın üstünde dağınık hâlde bekledi. Sabah ikiniz de onlara dokunmadan kahvaltınızı ettiniz."),
P(S("yp_mira_geceD"), "Sen tarif ettin, o yaptı, dört saat boyunca her dişliyi tek tek yerleştirdi. Sonunda saat çalışınca Mira gözlerini koluna sildi. “Ben yaptım,” dedi, “ama senin ellerinle. Yani eskileriyle. Neyse, anladın sen.”"),
P(S("y4bA"), "Bir saat boyunca anlattın, kızaran kulakları, saatin markasını, o gün yağan yağmuru, Selma'nın şemsiyesini dükkânda bilerek unutup bir dahaki gelişine bahane etmesini. Mira not almadı, yalnızca dinledi. Anlatırken bazı ayrıntıları uydurduğunu fark ettin. Şemsiye mavi miydi yeşil mi? Mavi dedin."),
P(S("y4bB"), "“Unutmayacağım,” dedin. Mira başını sallamadı, kalemin kapağını ısırmaya devam etti."),
P(S("y4bC"), "Mira yüzüne baktı. “Ama ben hatırlarım,” dedi. “Senin unuttuğunu ben hatırlarım, acıyı da ben çekerim.” Kalkıp odasına gitti, kapıyı çarpmadı ama kapattı."),
P(S("y4bD"), "Selma'nın saati altı yıldır çekmecede durmuş bekliyordu. Mira kurdu, sen ayarladın ve saat çalışmaya başladı. Mira saati bileğine taktı, kayışı bol geldi, bir delik daha açtın."),
"Kış geliyor. Bir sabah aynanın karşısında kendi adını hatırlayamıyorsun, bir saniye, iki saniye geçiyor, sonra aklına geliyor, Yusuf. Diş fırçası hâlâ ağzında, köpüğü lavaboya damlıyor.",
"Kurum'un üçüncü mektubu geliyor: “Sinirsel aşama.” Lale bu sefer seni başka bir odaya alıyor, duvarları koyu yeşil, masada bir kutu mendil var.",
"“Size açık konuşmam lazım,” diyor. “Yeni sinir dokusu neredeyse her şeyi taşıyabiliyor ama aktarım sırasında bir şeyin bırakılması gerekiyor, kapasite meselesi. Büyük, birbirine bağlı bir anı kümesi gidecek. Hangisi olacağını siz seçersiniz. Seçmezseniz sistem seçer.”",
"Bir kâğıt uzatıyor, üzerinde üç satır var. Birincisi Selma'ya dair her şey, tanışmanız, evliliğiniz, ölümü. İkincisi Mira'nın doğumundan on iki yaşına kadar bütün çocukluğu. Üçüncüsü de kendi çocukluğun, babanın dükkânı, babanın elleri, babanın ölümü.",
"“Dördüncü bir yol da var,” diyor Lale, daha alçak sesle. “Sinirsel değişimi reddedebilirsiniz. O zaman hastalık kendi bildiği gibi ilerler. Anılarınız yine gider ama sizin seçmediğiniz bir sırayla, rastgele. En sonunda da...” Mendil kutusunu biraz sana doğru itiyor."
], secenekler: [
{ t: "Selma'yı bırakırsın.", to: "dg1", etki: { kayip: "selma", kabul: 1 } },
{ t: "Mira'nın çocukluğunu bırakırsın.", to: "dg1", etki: { kayip: "mira", kabul: 1 } },
{ t: "Kendi çocukluğunu bırakırsın, babanı, dükkânı, her şeyin başladığı yeri.", to: "dg1", etki: { kayip: "cocukluk", kabul: 1 } },
{ t: "Reddedersin. Ne gidecekse kendi sırasıyla gitsin.", to: "r1", etki: { koruma: 2, ret: true } }
]},


yp_mira: { baslik: "Çekmece", metin: [
"Zarfı çekmeceye koyup kapattın. Akşam yemeğinde Mira okuldan, sınavlardan, sınıftan bir kızın saçını mora boyatıp müdüre yakalanmasından bahsetti. Sen dinledin, güldün, ekmeği sol elinle kopardın.",
"Gece yarısı mutfağın ışığı yanıyor. Mira masada oturuyor, önünde açılmış bir zarf duruyor, üstünde Kurum'un mührü var.",
"“Makas arıyordum,” diyor, “çekmecede makas yoktu, bu vardı.”",
"Karşısına oturuyorsun. Buzdolabının motoru çalışıyor, duruyor, sonra yine çalışıyor.",
"“Ne zaman söyleyecektin?” diye soruyor, sen cevap veremeden de devam ediyor. “Annem hastalanınca da bana söylememiştiniz. On bir yaşındaydım. Bir sabah hastaneye gittiniz, bir akşam sen tek başına döndün. Ben üç gün boyunca annem yorgun diye bildim baba, üç gün. Okula gittim geldim.”",
"Bağırmıyor, yalnızca zarfı tırnağıyla katlayıp açıyor, katlayıp açıyor.",
"“Beni korumaya çalıştığını biliyorum,” diyor. “Ama istemiyorum. Bilmeyince yaşamamış olmuyorum ki, yalnız yaşamış oluyorum.”"
], secenekler: [
{ t: "Özür dileyip bu sefer hiçbir şeyi eksiltmeden her şeyi anlatırsın.", to: "y2", etki: { bag: 1, mira_bilir: true } },
{ t: "“Seni korumak benim işim,” dersin. “Bu kadarını bana bırak.”", to: "y2", etki: { koruma: 1 } },
{ t: "Bir söz istersin. Bundan sonra ikiniz de birbirinizden hiçbir şey saklamayacaksınız.", to: "y2", etki: { bag: 1, soz_mira: true, mira_bilir: true } },
{ t: "Zarfı alıp yeniden çekmeceye koyarsın, konuşmaya hazır değilsin.", to: "y2", etki: { koruma: 1, kacti: true } }
]},

yp_ece: { baslik: "Ece", metin: [
"Sabahın altısında dükkânın kapısı çalınıyor. Çarşı daha açılmamış, demir kepenklerin arasında bir tek senin dükkânının ışığı yanıyor.",
"Gelen Ece. Okul önlüğünün üstüne bir mont geçirmiş, nefes nefese kalmış, bir elinde ısırılmış bir poğaça var. “Annem dedi ki okuldan önce gidersen bitmiş olabilir.”",
"Saati uzatıyorsun. Kulağına götürüp gözlerini kapatıyor, poğaçayı çiğnemeyi bile bırakıyor.",
"“Dedem de böyle dinlerdi,” diyor ağzı dolu dolu. “Her sabah kulağına götürür, ‘Hâlâ benimle,’ derdi. Annem de ‘Baba deli misin sen?’ derdi.”",
"Tezgâhın kenarına oturup ayaklarını sallamaya başlıyor. “Dedem Kurum'a hiç gitmedi, biliyor musunuz? Ciğerleri bozulunca bile gitmedi. Annem çok yalvardı ama dedem ‘Ben eski usul ölürüm,’ dedi. Annem hâlâ kızgın ona. Ben değilim.”",
"“Neden değilsin?” diye soruyorsun.",
"Ece omuz silkiyor. “Çünkü dedem dedemdi. Yenilenseydi belki hâlâ yaşardı ama belki başka biri olurdu, ben de onu dedem diye sevmeye çalışırdım. Zor olurdu.” Saati cebine koyuyor. “Siz de mi Kurum'a gideceksiniz? Elleriniz titriyor da.”"
], secenekler: [
{ t: "“Evet,” dersin. “El dediğin el sonuçta.”", to: "y2", etki: { kabul: 1, ece_evet: true } },
{ t: "“Bilmiyorum,” dersin. “Belki ben de eski usul adamım.”", to: "y2", etki: { koruma: 1 } },
{ t: "Saati değil, dedesini sorarsın.", to: "y2", etki: { bag: 1, ece_dede: true } },
{ t: "Bir şey demeden ellerine bakarsın, Ece de bakıyor.", to: "y2" }
]},

yp_ates: { baslik: "Yakmak", metin: [
"“Yak onu,” dedin. Necmi önce şekle, sonra sana baktı, sonra hiçbir şey demeden deponun arkasına yürüdü.",
"Döndüğünde elinde bir kutu vardı, kendi kutusu. Üstüne kurşun kalemle, yıllar içinde ekleye ekleye kendi adını yazmış: “Necmi Tanrıverdi. Kalp, 1994. Ciğerler, 1998. Gözler, 2003. Hafıza, kısmi, 2009.”",
"“O şekli yakamam,” diyor, “ama bunu yakarım. Kendimi, eskimi. Otuz yıldır saklıyorum, bir gün yine bir araya gelirim diye. Gelmeyecek, haklısın.”",
"Avludaki varile eski gazeteler, tahta parçaları atıyor. İlk kibrit sönüyor, ikincisi tutuyor.",
"Kutuyu açmadan ateşin üstüne tutuyor. Elleri titriyor, hiç titrememesi gereken o yenilenmiş elleri.",
"“Bir şey söyle,” diyor. “Bıraktığım hiçbir şeyde yanımda kimse olmadı. Kurum'da bir kâğıt imzalardım, o kadar. Bir kere de biri bir şey söylesin be.”",
"Alev kutunun köşesini yalamaya başlıyor. Necmi bekliyor, gözleri dumandan sulanmış."
], secenekler: [
{ t: "“Hoşça kal Necmi,” dersin, eski Necmi'ye.", to: "n1b", etki: { bag: 1, kabul: 1, veda: true } },
{ t: "Kutuyu elinden alırsın: “Yakma, yanlış söyledim.”", to: "n1b", etki: { koruma: 1, kurtardi: true } },
{ t: "“Bıraktıkların sen bırakmasan da gitti zaten,” dersin.", to: "n1b", etki: { kabul: 1 } },
{ t: "Hiçbir şey söylemeden yanında durursun.", to: "n1b", etki: { bag: 1 } }
]},

yp_sekil: { baslik: "Şekil", metin: [
"Şeklin eline dokunduğunda Necmi hiçbir şey demedi, ceketini aldı. “Dokuzda kilitlerim,” dedi. “Kalacaksan kal. Tuvalet arkada, sifon kendi kendine akar, aldırma.”",
"Kaldın. Loş ışıkta, kavanozların, kutuların arasında, bir sürü insanın parçalarından yapılmış o şeyle baş başa.",
"Gece ilerledikçe raflardaki etiketleri okumaya başlıyorsun, merakından değil, uyumamak için. “Seher, 1987, gözler.” “Kemal, 2001, sol el.” “Adsız, 1979, kalp.” Birinin üstüne biri kurşun kalemle küçük bir çiçek çizmiş.",
"Saat ikiye doğru şeklin dudaklarının kıpırdadığını görür gibi oluyorsun, belki de gözlerin yorulmuştur.",
"Sonra sesler duyuyorsun. Bir kadın, bir çocuk, yaşlı bir adam, hepsi aynı ağızdan, birbirinin üstüne konuşuyor. “Ben bir eldim, bir adamın ekmeğini kopardım.” “Ben bir kalptim, bir düğünde hızlı hızlı attım.” “Ben iki gözdüm, kalkan bir otobüsün arkasından el salladım.”",
"Bir ses daha geliyor, tanıdık bir ses, senin yıllar önceki sesin: “Ben bir eldim. Bir saatin yayını taktım. Bir kızın saçını ördüm, beceremedim, annesi bozup yeniden ördü.”",
"Kimse kimseye cevap vermiyor, herkes kendi cümlesini söyleyip susuyor.",
"Sabah Necmi kapıyı açtığında seni şeklin ayağının dibinde, yerde, paltoyu üstüne çekmiş hâlde buluyor. “Üşüdün mü?” diyor. “Burası hep soğuktur. Eski şeyler sıcak sevmez.”"
], secenekler: [
{ t: "Necmi'ye gece duyduklarını anlatırsın.", to: "n1b", etki: { bag: 1, sesler: true } },
{ t: "Hiçbir şey anlatmazsın, rüya gördüğüne karar verirsin.", to: "n1b", etki: { koruma: 1 } },
{ t: "Necmi'ye şekli parçalarına ayırıp her parçayı sahibinin adıyla gömmesini önerirsin.", to: "n1b", etki: { kabul: 1, gom: true } },
{ t: "Şeklin eline bir kez daha dokunup çıkarsın.", to: "n1b", etki: { dokundu2: true } }
]},


yp_mektuplar: { baslik: "Mektuplar", metin: [
"Bir saat boyunca anlattın, kızaran kulakları, kurulmamış saati, yağmuru, dükkânda unutulan mavi şemsiyeyi. Mira hiçbir şey sormadı. Sen bitirince kalkıp odasına gitti, elinde bir ayakkabı kutusuyla geri döndü.",
"“Annemin dolabında buldum,” diyor, “geçen yıl. Sana söylemedim, kızma.”",
"Kutunun içinde mektuplar var, senin el yazınla. Yirmi beş yıl önce, evlenmeden önceki bir yıl boyunca her hafta Selma'ya yazdığın mektuplar. Selma hepsini tarih sırasıyla saklamış, lastikle bağlamış. Lastik çürümüş, dokununca kopuyor.",
"Birini açıyorsun. El yazın daha düzgün, daha genç, ğ'leri o zamanlar böyle yazıyormuşsun demek. “Selma, bugün dükkâna gelmedin. Saatin kurulmamış hâlde tezgâhta kaldı. Kurmadım, gelesin diye.”",
"Bunu hiç hatırlamıyorsun. Kendi yazdığın bir cümle ama hiç hatırlamıyorsun.",
"Mira yüzüne bakıyor. “Anlattığında bu yoktu,” diyor. “Şemsiye vardı, yağmur vardı ama kurmadığın saat yoktu.” Bir zarf daha açıp okuyor, kıpkırmızı oluyor. “Baba bu çok fena ya.”"
], secenekler: [
{ t: "Mira'dan mektupları sana yüksek sesle okumasını istersin.", to: "y5", etki: { bag: 1, mektup_okundu: true } },
{ t: "Mektupları kutuya geri koyarsın. Kendi hatırladığın Selma'yı korumak istiyorsun.", to: "y5", etki: { koruma: 1 } },
{ t: "Mektupları Mira'ya verirsin: “Bunlar artık senin.”", to: "y5", etki: { kabul: 1, mektup_mira: true } },
{ t: "Bir mektubu alıp bütün gece hatırlamaya çalışarak tekrar tekrar okursun.", to: "y5", etki: { koruma: 1, gece_okudu: true } }
]},

yp_mira_gece: { baslik: "Arayış", metin: [
"“Unutursam unuttuğumu da unuturum,” dedin. Mira'nın yüzü kapandı. “Acısını ben çekerim ama,” dedi ve kalkıp odasına gitti, kapıyı kilitledi.",
"Gece yarısı odasına baktığında içerisi boş. Pencere açık, perde dışarı uçuşuyor, yastığın üstünde bir not var: “Burak'tayım. Arama.” Burak'ı tanımıyorsun. Sınıftan biri olabilir, ya da başka bir şey. Bilmiyorsun ve o pencerenin önünde daha kaç şeyi bilmediğini saymaya bile cesaret edemiyorsun.",
"Ceketini giyip sokağa çıkıyorsun. Kemerli'nin gece sokaklarında bütün pencerelerde aynı sarı ışık yanıyor. Mira'nın arkadaşlarının adreslerini bilmiyorsun. Okulun önüne gidiyorsun, kapalı. Parka gidiyorsun, boş, salıncaklardan biri rüzgârda gıcırdıyor.",
"En son Bakırcılar Çarşısı'na gidiyorsun. Dükkânın kepengi yarıya kadar açık, içeride ışık yanıyor.",
"Mira tezgâhta oturuyor, önünde Selma'nın saati. Saati açmış, dişlileri her yana dağılmış, elinde cımbız, yanağında siyah bir yağ lekesi. Ağlıyor.",
"Seni görünce “Kurmak istedim,” diyor. “Annemin saatini. Sen unutmadan önce bir şey yapayım dedim ama bozdum. Nasıl yapılıyor bilmiyorum ki, sen bana hiç öğretmedin.”",
"Son cümleyi söyleyince kendisi de şaşırıp cımbızı bırakıyor."
], secenekler: [
{ t: "Yanına oturup saati birlikte toplarsınız.", to: "y5", etki: { bag: 1, saat_topladi: true } },
{ t: "“Unutmayacağım,” dersin, bu sefer söz verir gibi.", to: "y5", etki: { koruma: 1, soz: true } },
{ t: "Mira'ya sarılırsın, saat bekleyebilir.", to: "y5", etki: { bag: 1 } },
{ t: "Cımbızı Mira'ya geri verip tarif edersin, yapan o olsun.", to: "y5", etki: { kabul: 1, mira_yapti: true } }
]},

yp_kayit: { baslik: "Kayıt", metin: [
"Mira telefonunu masaya koyuyor, ekranda kırmızı bir nokta yanıp sönüyor.",
"“Ne anlatayım?” diye soruyorsun.",
"“Her şeyi,” diyor Mira, “baştan. Ama sıkıcı yerleri atla.”",
"Nereden başlanır ki? Doğduğun evden mi, babanın tezgâhından mı, ilk tamir ettiğin saatten mi? Anlatmaya başlıyorsun. Babanın elleri, büyüteç, dükkânın tozlu camı, bir yayı ilk kez yerine oturttuğunda babanın yalnızca “Hah” demesi.",
"Bir saat geçiyor. Mira arada bir kâğıda bir şeyler yazıyor. Babanın bir müşteriye yanlışlıkla iki kere para üstü verdiği günü anlatınca gülüyor.",
"Bir yerde takılıyorsun. Babanın en yakın arkadaşı her cuma dükkâna gelir, tezgâhın kenarına oturur, çayının şekerini ayrı isterdi. Yüzünü görüyorsun, bıyığını, şapkasını görüyorsun ama adını bulamıyorsun.",
"Kırmızı nokta yanıp sönmeye devam ediyor.",
"Sonunda “Adını hatırlamıyorum,” diyorsun.",
"Mira kaydı durdurmuyor. “Bu da kalsın,” diyor ve kâğıdına bir şey yazıyor, ne yazdığını göremiyorsun."
], secenekler: [
{ t: "Unuttuklarınla birlikte anlatmaya devam edersin.", to: "r2", etki: { kabul: 1, unutulan_kayit: true } },
{ t: "Kaydı durdurmasını istersin, unuttuklarının kaydedilmesini istemiyorsun.", to: "r2", etki: { koruma: 1 } },
{ t: "Mira'dan da bir şey anlatmasını istersin, sen de onun bir anısını hatırlamak istiyorsun.", to: "r2", etki: { bag: 1, mira_anlatti: true } },
{ t: "Kayda Selma'ya bir mesaj bırakırsın.", to: "r2", etki: { bag: 1, selma_mesaj: true } }
]},

yp_necmi_ev: { baslik: "Necmi'nin Evi", metin: [
"Necmi'yi deposunda değil, evinde buluyorsun. Çarşının arkasındaki eski bir apartmanın bodrum katında oturuyormuş. Kapıyı açınca şaşırıyor, üstünde atlet, elinde yarım bir ekmek var.",
"Ev boş denecek kadar sade, bir yatak, bir masa, bir sandalye, köşede tüplü bir ocak. Duvarda tek bir fotoğraf asılı, deniz kenarında saçları rüzgârdan yüzüne yapışmış, gülen genç bir kadın.",
"“Bedenimi sana bağışlamak istiyorum,” diyorsun. “Öldüğümde, bütün olarak.”",
"Necmi ekmeği masaya bırakıp sana çay koyuyor. Tek bir bardağı var, onu sana veriyor, kendisi reçel kavanozundan içiyor.",
"“Kırk yıl oldu,” diyor. “Kırk yılda bana kimse bir şey vermedi, hep ben aldım. Herkes eskisinden kurtulmak istedi, ben de aldım, parasını verdim. Kimse kendini vermedi ama.”",
"Fotoğrafa bakıyor. “O da vermedi. Kurum'un yetişemediği bir şeyle gitti. Ailesi gömdü, bana haber bile vermediler, son bir kere dokunamadım.” Kavanozdan bir yudum alıyor. “Kız kardeşi hâlâ bayramlarda arar, ‘Necmi sen iyi misin?’ der. İyiyim derim.”",
"Sonra sana dönüyor. “Niye ben peki? Niye Kurum değil, toprak değil, kızın değil?”"
], secenekler: [
{ t: "“Çünkü her parçanın bir insan olduğunu bir tek sen biliyorsun,” dersin.", to: "r2", etki: { bag: 1, necmi_insan: true } },
{ t: "“Bilmiyorum, yalnız kalmasın diye belki,” dersin.", to: "r2", etki: { bag: 1 } },
{ t: "Fikrini değiştirirsin: “Haklısın, önce kızıma sormalıyım.”", to: "r2", etki: { koruma: 1, mira_sor: true } },
{ t: "“Ben de eski usul ölüyorum, bundan anlayan bir tek sensin,” dersin.", to: "r2", etki: { kabul: 1 } }
]},

/* ---------- DEĞİŞİM KOLU ---------- */
dg1: { baslik: "Uyanış", metin: [
"Uyandığında oda bembeyaz ve sessiz. Kendini iyi hissediyorsun, hatta biraz fazla iyi. Kafanın içi yeni silinmiş bir cam gibi.",
"Adının Yusuf olduğunu, elli üç yaşında olduğunu, saat tamircisi olduğunu hiç uğraşmadan biliyorsun. Neyin eksik olduğunu ise bilmiyorsun, zaten insan eksik olan şeyin yerini bilmez.",
P(function(d){ return d.kayip === "selma"; }, "Mira yatağının yanında, gözleri kıpkırmızı. Bir süre seni izledikten sonra soruyor: “Baba, annemle nerede tanıştınız?” Cevap hemen ağzından çıkıyor: “Dükkânda, kurulmamış bir saatle gelmişti.” Doğru cümle ama içi bomboş, bir kitabın arka kapağını okur gibisin. Kadının yüzü bir fotoğraftan ibaret, adı da yalnızca bir kelime, Selma. Onu sevdiğini biliyorsun, çünkü sana öyle söylediler."),
P(function(d){ return d.kayip === "mira"; }, "Mira yatağının yanında oturuyor, on yedi yaşında bir kız. Kızın olduğunu biliyorsun ve onu seviyorsun, bu değişmemiş. Ama “Baba, bana bisiklete binmeyi öğrettiğin gün ne demiştin?” diye sorunca bilemiyorsun. On iki yaşından öncesi bomboş. Karşındaki genç kadını tanıyorsun ama o küçük kızla hiç tanışmamışsın."),
P(function(d){ return d.kayip === "cocukluk"; }, "Mira yatağının yanında. Onu tanıyorsun, Selma'yı da her şeyiyle hatırlıyorsun. Ama büyüteci düşününce kimden kaldığını bilemiyorsun, dükkânın ne zaman açıldığını, sabrı kimden öğrendiğini bilemiyorsun. Tezgâhın altındaki çatlak bardak aklına geliyor, neden atmadığını bilmiyorsun."),
P(function(d){ return d.anlatti && d.kayip === "selma"; }, "Sonra Mira, bir zamanlar senin ona anlattığın hikâyeyi anlatmaya başlıyor, kızaran kulakları, yağmuru, unutulan şemsiyeyi. Kendi hikâyeni kızının ağzından dinliyorsun. Bir yerde Mira “Mavi şemsiye,” diyor, sen de başını sallıyorsun. Öyle diyorsa öyledir."),
"Mira yüzüne bakıyor, sesinde, yüzünde bir şeyin hâlâ orada olup olmadığını arıyor. Sen de ona bakıyorsun ama ne aradığını bilmiyorsun."
], secenekler: [
{ t: "Mira'ya dürüstçe söylersin, kaybettiğin şeyin yokluğunu bile hissetmiyorsun.", to: "dg2", etki: { bag: 1, durust: true } },
{ t: "Üzülmesin diye hatırlıyormuş gibi yaparsın.", to: "dg2", etki: { rol: true } },
{ t: "Kaybettiğini yeniden öğrenmek istediğini söylersin. O anlatsın, sen yeniden ezberle.", to: "dg2", etki: { kabul: 1, yeniden: true } },
{ t: "Kaybettiğin şeyi umursamadığını fark edersin ve seni en çok bu korkutur.", to: "dg2", etki: { koruma: 1, korku: true } }
]},

dg2: { yonlendir: [
{ if: function(d){ return d.yedek; }, to: "ik1" },
{ to: "dg3" }
]},

dg3: { baslik: "Son Yüzde On", metin: [
P(S("dg1A"), "“Hiçbir şey hissetmiyorum,” dedin. Mira'nın yüzü düştü, sonra kendini toparladı. “En azından dürüstsün,” dedi, “o kalmış.” Kapıdan çıkarken montunu ters giydi, farkına bile varmadı."),
P(S("dg1B"), "Hatırlıyormuş gibi yaptın, Mira'nın da yüzü aydınlandı. O günden sonra her gün biraz eski Yusuf'u oynadın, Mira'nın en iyi bildiği hâliyle. Bunu ne kadar kolay yapabildiğini fark edince korktun."),
P(S("dg1C"), "Mira her akşam anlatıyor, sen dinliyorsun, bazen yemekte, bazen bulaşık yıkarken. Hikâyeler yavaş yavaş yerine oturuyor. Bir akşam Mira'nın anlatmadığı bir ayrıntıyı sen ekleyince Mira duruyor. “Bunu ben söylemedim,” diyor, “nereden bildin?” Bilmiyorsun."),
P(S("dg1D"), "Kaybettiğin şeyi umursamıyorsun, hatta biraz hafiflemiş gibisin. Bu hafifliği kimseye söylemiyorsun, Mira'ya hiç söylemiyorsun."),
"Altı ay geçiyor ve başka parçalar da değişiyor, ciğerler, bir göz, bir kulak. Lale her gidişinde sana bir yüzde söylüyor, bugün doksan dedi.",
"“Kalan yüzde on beyninizin derin bir bölgesi,” diyor Lale. “Hastalık oraya da ulaştı. Son bir işlem önerebiliriz, ondan sonra yüzde yüz Kurum dokusu olursunuz. Bu aşamada bir şey kaybetmezsiniz.”",
"“O yüzde on benim son orijinal parçam,” diyorsun. “İçinde ne var?”",
"Lale kalemini bırakıyor. “Bilmiyoruz,” diyor. “Belki hiçbir şey, belki çok şey. Ölçebildiğimiz bir şey değil.” Sonra kâğıtlara bakmadan ekliyor: “Babam da bunu sormuştu. Ona da bilmiyorum demiştim.”",
"Pencerede kendi yansımanı görüyorsun, elli üç yaşında bir adam."
], secenekler: [
{ t: "Kabul edersin, yüzde yüz olsun. Bu da bir eşik, ötekilerden farkı yok.", to: "dg3b", etki: { kabul: 1, tam: true } },
{ t: "Reddedersin. O yüzde on ne olursa olsun sende kalacak, çürüse bile.", to: "dg3b", etki: { koruma: 1, son_on: true } },
{ t: "Eve gidip Mira'ya sorarsın: “Ben hâlâ senin baban mıyım?”", to: "dg3b", etki: { bag: 1, mira_sordu: true } },
{ t: "Lale'den o yüzde onun içinde ne olduğunu bulmasını istersin, ne pahasına olursa olsun.", to: "dg3b", etki: { koruma: 1, arastir: true } }
]},

dg3b: { baslik: "Kaset", metin: [
P(S("dg3A"), "İşlemi yaptırdın. Uyandığında hiçbir şey değişmemişti. Lale “Nasılsınız?” diye sordu, “Acıktım,” dedin. Gülümseyip not aldı."),
P(S("dg3B"), "Reddettin, Lale de itiraz etmedi. O yüzde on başının içinde bir yerde yavaş yavaş sönüyor. Ne gittiğini bilmiyorsun, bazen bir şarkının nakaratı yarıda kalıyor, o kadar."),
P(S("dg3C"), "Mira uzun süre konuşmadı. “Bilmiyorum baba,” dedi sonunda. “Ama sen bana baba gibi bakıyorsun, ben de sana kızın gibi bakıyorum. Bu yetmiyorsa ne yeter bilmiyorum.” Sonra kalkıp çaydanlığı ocağa koydu."),
P(S("dg3D"), "Lale aylarca uğraştı, sonunda bir rapor getirdi. “Bir ses buldum,” dedi. “Yüzde onun içinde bulabildiğimiz en tutarlı iz bir ses. Bir kadın sözsüz bir şarkı mırıldanıyor.” Raporun arkasına notalarını yazmıştı. Mira'ya gösterdin. Mira bir süre baktı, sonra mırıldanmaya başladı. Bir ninniydi bu."),
"Bir gün dolabı temizlerken bir kutu buluyorsun, içinde eski bir video kaseti var. Üstünde Selma'nın el yazısıyla “Mira, 6 yaş, deniz” yazıyor.",
"Çarşıdaki eskiciden bir video oynatıcı bulup kaseti takıyorsun. Ekranda titrek bir görüntü, bir sahil. Küçük bir kız dalgalardan kaçıp gülüyor. Kamerayı tutan kadının sesi duyuluyor: “Yusuf bak, bak! Çek şunu, ay kaçtı!” Sonra kamera dönüyor ve ekranda sen varsın, genç, güneşten kızarmış, kızını havaya atıp tutuyorsun.",
P(function(d){ return d.kayip === "selma"; }, "O sesi tanımıyorsun. Bu senin karın, sana “Yusuf” diye seslenen ses bu. Ekrandaki adam o sese dönüp gülüyor ama sen o gülüşün nereden geldiğini bilmiyorsun."),
P(function(d){ return d.kayip === "mira"; }, "Bu kızı tanımıyorsun. Bu Mira, altı yaşında. Ekrandaki adamın onu deli gibi sevdiği belli. Sen o adamı bir komşunun düğün kasetini izler gibi izliyorsun."),
P(function(d){ return d.kayip === "cocukluk"; }, "O günü de, o sahili de, Selma'nın sesini de hatırlıyorsun. Ama ekrandaki adamın bileğindeki saat babandan kalma ve sen babanın yüzünü hatırlamıyorsun."),
"Kaset bitiyor, ekran maviye dönüp cızırdamaya başlıyor. Mira kapıda duruyor, ne zamandır orada olduğunu bilmiyorsun."
], secenekler: [
{ t: "Mira'ya ekrandaki adamın sen olup olmadığını bilmediğini söylersin.", to: "dg4", etki: { bag: 1, durust: true } },
{ t: "Kaseti başa sarıp bir daha izlersin, sonra bir daha.", to: "dg4", etki: { koruma: 1 } },
{ t: "Kaseti Mira'ya verirsin: “Bu artık senin.”", to: "dg4", etki: { bag: 1 } },
{ t: "Hiçbir şey hissetmediğini kabul edip kaseti kutusuna geri koyarsın.", to: "dg4", etki: { kabul: 1 } }
]},

dg4: { baslik: "Dedenin Saati", metin: [
P(S("dg3bA"), "“Bilmiyorum,” dedin. Mira gelip yanına oturdu. “Ben de bilmiyorum,” dedi. “O kız benim, biliyorum, ama altı yaşımı hiç hatırlamıyorum. Yani ikimiz de o kasette misafiriz.” Kumandayı alıp kaseti yeniden başlattı."),
P(S("dg3bB"), "Kaseti beş kere izledin, her seferinde bir şey hissetmeye çalıştın ve her seferinde çalıştığını fark ettin. Beşincide bant koptu. Eskici “Yapıştırırım,” dedi, “ama bir saniyesi gider.” Hangi saniyenin gideceğini sormadın."),
P(S("dg3bC"), "Mira kaseti aldı, göğsüne bastırıp “Sağ ol,” dedi ve odasına gitti. O gece oynatıcının çok kısık sesini duydun."),
P(S("dg3bD"), "Kaseti kutusuna geri koydun, için biraz rahatladı. Kutuyu dolabın en üst rafına, eski elinin kutusunun yanına kaldırdın."),
"Bir öğleden sonra dükkânın kapısı açılıyor ve Ece giriyor. On üç yaşına girmiş, boyu uzamış, sesi kalınlaşmış, yüzünde bir sivilce çıkmış.",
"Dedesinin saatini bir yıl boyunca tamir ettin. Önce yay değişti, sonra bir dişli, sonra denge çarkı, kadran camı, akrep. Her ay bir şey bozuldu, her ay bir parça değişti. Şimdi içinde orijinal tek bir parça kalmadı ama aynı kasada, aynı ritimle çalışıyor.",
"Ece saati alıp kulağına götürüyor ve gülümsüyor. Sonra kadranın kenarına bakıyor, dedesinin çakıyla attığı küçük çizik orada değil, cam değişmiş çünkü.",
"“Amca,” diyor, “bu hâlâ dedemin saati mi?”"
], secenekler: [
{ t: "“Evet. Aynı kasa, aynı ritim. Saat parçalarından ibaret değil.”", to: "n1", etki: { kabul: 1, ece: "evet" } },
{ t: "“Hayır. Dedenin saati, değiştirdiğim parçaların kutusunda.”", to: "n1", etki: { koruma: 1, ece: "hayir" } },
{ t: "“Sen onu dedenin saati diye taşıdıkça öyle.”", to: "n1", etki: { bag: 1, ece: "sen" } },
{ t: "“Bilmiyorum kızım, gerçekten bilmiyorum.”", to: "n1", etki: { ece: "bilmem" } }
]},

/* ---------- İKİNCİ KOLU ---------- */
ik1: { baslik: "Kapıdaki Adam", metin: [
P(S("dg1A"), "Mira'ya “Hiçbir şey hissetmiyorum,” dedin. O gece Mira odasında uzun uzun ağladı. Bir hafta sonra kapı çalındı."),
P(S("dg1B"), "Hatırlıyormuş gibi yaptın. Mira inandı, ya da inanmak istedi. Bir hafta boyunca rol yaptın, sonra bir gün kapı çalındı."),
P(S("dg1C"), "Mira her akşam anlattı, sen de ezberledin. Bir hafta sonra, bir akşam kapı çalındı."),
P(S("dg1D"), "Hiçbir şeyi umursamamak içini ürpertti ama kimseye söylemedin. Bir hafta sonra kapı çalındı."),
"Kapıyı Mira açıyor ve bir ses çıkarıyor. Çığlık değil, yutkunurken nefesi ters gitmiş gibi bir ses.",
"Kapıda bir adam duruyor ve bu senin yüzün. Biraz daha genç, teni daha düzgün, omuzları daha dik ama senin yüzün. Sağ elinin başparmağını işaret parmağına sürtüyor, sen de düşünürken hep öyle yaparsın.",
"“Mira,” diyor, sesi de seninki. “Kızım.”",
"Sonra dönüp uzun uzun sana bakıyor.",
"“Kurum'da bir hata olmuş,” diyor. “Senin sinirsel işlemin sırasında birkaç saat boyunca kayıtlarda kaybolmuşsun. Protokol de yedeği yedek bir bedende uyandırmış, yani beni. Uyandığımda her şeyi hatırlıyordum.” Duruyor. “Her şeyi.”",
P(function(d){ return d.kayip === "selma"; }, "Sonra sana değil, Mira'ya bakarak konuşuyor: “Annenin şemsiyesini dükkânda unuttuğu günü hatırlıyorum, yağmur yağıyordu. Kırmızı bir şemsiyeydi, sapı kırıktı.” Mira'nın yüzü değişiyor, sen ona hep mavi demiştin."),
P(function(d){ return d.kayip === "mira"; }, "Sonra sana değil, Mira'ya bakarak konuşuyor: “Bisiklete binmeyi öğrendiğin gün düşmekten korkuyordun. ‘Ben arkadayım’ dedim ve bıraktım. Pedal çevirirken dönüp baktın, ben çok gerideydim. Ağlamadın, güldün, sonra da bir çalıya girdin.” Mira hem gülüyor hem ağlıyor. Sen bunu hatırlamıyorsun."),
P(function(d){ return d.kayip === "cocukluk"; }, "Sonra sana bakarak konuşuyor: “Babamın ellerini hatırlıyorum. Sabahları tezgâhı silerken bir türkü mırıldanırdı. Sen onu artık bilmiyorsun, değil mi?” Bilmiyorsun. O mırıldanmaya başlıyor, iki ölçü sonra susuyor."),
"Kapı hâlâ açık, içeri kış rüzgârı doluyor, Mira'nın ayakları çıplak."
], secenekler: [
{ t: "Onu içeri alırsın. Kim olursa olsun kapıda bırakılmaz.", to: "ik2", etki: { kabul: 1, iceri: true } },
{ t: "Kapıyı kapatıp Kurum'u ararsın.", to: "ik2", etki: { koruma: 1, kurum_aradi: true } },
{ t: "Ona sorarsın: “Senin için ben kimim?”", to: "ik2", etki: { soru: true } },
{ t: "Mira'ya bakarsın, bu kapıda ne olacağına o karar versin.", to: "ik2", etki: { bag: 1, mira_kapi: true } }
]},

ik2: { baslik: "İki Baba", metin: [
P(S("ik1A"), "Onu içeri aldın. Mutfak masasına, hiç düşünmeden senin sandalyene oturdu, sonra fark edip kalktı. “Pardon,” dedi, kendi evinde, kendine."),
P(S("ik1B"), "Kapıyı kapatıp Kurum'u aradın ama hat meşguldü. Adam kapının öbür tarafında bekledi, ne zili çaldı ne de gitti. Bir saat sonra Mira sana sormadan kapıyı açıp ona terlik verdi."),
P(S("ik1C"), "“Senin için ben kimim?” diye sordun. Biraz düşündü. “Bilmiyorum,” dedi. “Galiba sen benim bir yıl sonramsın, ben de senin bir yıl öncen. Ama ikimiz de bugündeyiz. Kafam karıştı.”"),
P(S("ik1D"), "Mira ikinize de baktı, sonra kenara çekilip adamın içeri girmesine izin verdi. Kararı o verdi ama önce dönüp bir kere sana baktı."),
"Ertesi gün Lale geliyor, yüzü solgun, elinde kalın bir dosya. Kurum adına uzun, dikkatli, avukat ağzıyla bir özür diliyor.",
"“Ancak bir sorunumuz var,” diyor. “Kemerli'de bir kişi yalnızca bir kez kayıtlı olabilir. Yusuf Taner adına bir kimlik, bir ev, bir velayet var. Biriniz bu kimliği taşıyacak. Öteki yeni bir adla başka bir şehirde yaşayabilir. Ya da...” Duraksıyor. “Talep edilirse yedek arşive geri alınabilir. Acısız, uyku gibi.”",
"“Hangimiz?” diye soruyor öteki.",
"“Kurum'un görüşü bedensel süreklilik,” diyor Lale. “Bu beden, bu süreç, yani siz.” Sana bakıyor, sonra ötekine dönüyor. “Hukuk müşavirimiz başka düşünüyor, zihinsel süreklilik diyor. Anılar eksiksiz, yani siz.” Dosyayı kapatıyor. “Kendi aramızda da anlaşamadık açıkçası.”",
"Mira köşede, kollarını kavuşturmuş, iki babasına bakıyor.",
P(function(d){ return d.kayip === "mira"; }, "Biri onun çocukluğunu hatırlıyor, öbürü hatırlamıyor."),
P(function(d){ return d.kayip === "selma"; }, "Biri annesini hatırlıyor, öbürü hatırlamıyor."),
P(function(d){ return d.kayip === "cocukluk"; }, "İkisi de onu hatırlıyor, ama yalnızca biri kendi babasını hatırlıyor.")
], secenekler: [
{ t: "Sen kalırsın, o gider. Bu beden de bu hayat da senin.", to: "ik3", etki: { koruma: 1, ikinci: "gitti" } },
{ t: "O kalsın, sen gidersin. Mira'nın ihtiyacı olan eksiksiz olanı.", to: "ik3", etki: { kabul: 1, bag: 1, ikinci: "kaldi" } },
{ t: "Kurum'a rağmen ikiniz de kalırsınız, Mira'nın iki babası olur.", to: "ik3", etki: { bag: 1, ikinci: "ikisi" } },
{ t: "Mira seçsin.", to: "ik3", etki: function(d){ d.bag++; d.ikinci = (d.kayip === "mira" || d.kayip === "selma") ? "kaldi" : "gitti"; d.mira_secti = true; } }
]},

ik3: { baslik: "Ayna", metin: [
P(function(d){ return d.mira_secti && d.ikinci === "kaldi"; }, "Mira uzun süre ikinize baktı, sonra ötekinin yanına geçti. “Özür dilerim,” dedi sana. “Sen de babamsın ama o beni hatırlıyor.” Sesi annesininki kadar kararlıydı, bunu da bir tek öteki biliyordu."),
P(function(d){ return d.mira_secti && d.ikinci === "gitti"; }, "Mira uzun süre ikinize baktı, sonra senin yanına geçip ötekine döndü. “Sen her şeyi hatırlıyorsun,” dedi, “ama bu son yılı ben onunla geçirdim. Elini değiştirdiğini, kalbini değiştirdiğini, unuttuğunu. Sen bunları bilmiyorsun.”"),
P(function(d){ return !d.mira_secti && d.ikinci === "gitti"; }, "Ötekine gitmesini söyledin, o da itiraz etmedi. Lale'ye yeni bir ad seçeceğini söyledi, biraz düşündükten sonra babanızın adını söyledi. “Olur mu?” diye sordu sana. Bir şey diyemedin."),
P(function(d){ return !d.mira_secti && d.ikinci === "kaldi"; }, "Gideceğini söyledin. Mira itiraz etti, ağladı, sonra sustu. Öteki hiçbir şey demedi, yalnızca sana baktı. Dışarıdan nasıl göründüğünü o bakışta gördün, eski bir paltonun içinde yorgun bir adam."),
P(function(d){ return d.ikinci === "ikisi"; }, "Kurum'a hayır dediniz. Lale bir süre dosyaya baktı. “Bu konuda bir yönetmeliğimiz yok,” dedi, “daha önce kimse böyle bir şey istemedi.” Kapıdan çıkarken dönüp ekledi: “Bir şey olursa beni arayın. Kurum'u değil, beni.”"),
"O gece mutfakta ikiniz kalıyorsunuz. Mira uyuyor, ya da uyuyormuş gibi yapıyor. Masada iki çay bardağı var ve ikiniz de bardağı aynı şekilde, sağ elle, başparmak kenarın üstünde tutuyorsunuz. Bunu fark edip aynı anda bırakıyorsunuz.",
"Öteki sana kaybettiğin anıyı anlatmaya başlıyor, yavaş yavaş, bütün ayrıntılarıyla. Sesinde hiç kibir yok. Arada bir durup “Doğru mu anlatıyorum?” diye soruyor, sonra bunun ne kadar saçma bir soru olduğunu fark edip gülüyor, sen de gülüyorsun.",
"Bir saat sonra çaylar soğumuş, hangi bardağın kimin olduğu da karışmış."
], secenekler: [
{ t: "Anıyı baştan, eksiksiz anlatmasını istersin.", to: "n1", etki: { kabul: 1, dinledi: true } },
{ t: "Onu durdurursun. “Bu anı artık senin,” dersin, “ben onsuz devam ederim.”", to: "n1", etki: { koruma: 1 } },
{ t: "Kalkıp ona sarılırsın.", to: "n1", etki: { bag: 1, sarildi: true } },
{ t: "Babandan kalan büyüteci ona verirsin, kimde kalacağına o karar versin.", to: "n1", etki: { bag: 1, buyutec: true } }
]},

/* ---------- RET KOLU ---------- */
r1: { baslik: "Kendi Sırasıyla", metin: [
"“Reddediyorum,” diyorsun. Lale kâğıdı geri çekiyor. “Kurum kimseyi zorlamaz,” diyor, “bekler.” Kalemi kâğıdın üstüne bırakıyor, sonra yeniden alıp cebine koyuyor.",
"Eve dönüp Mira'ya söylüyorsun, o sırada mutfakta patates soyuyor. Önce bir şey demiyor, sonra bıçağı bırakıp bağırıyor, sonra ağlıyor, sonra yine patates soymaya başlıyor. Kabukları kalın kalın kopuyor.",
"“Seçebilirdin,” diyor. “Bir şeyi bırakırdın, gerisi kalırdı. Şimdi hepsi gidecek ve hangi sırayla gideceğini bile bilmeyeceğiz.”",
"Haklı. Ama o kâğıdın üstünde Selma'nın, Mira'nın ya da babanın üstünü çizmeye elin kalkmadı. Bunu ona nasıl anlatacağını bilmiyorsun. Gece tavana bakarken de bunun ilke mi, inat mı olduğunu bilemiyorsun.",
"Bir hafta sonra anahtarlarını kapının dışında unutuyorsun. İki hafta sonra Ece'nin adı aklından çıkıyor, ancak kız kapıdan girince hatırlıyorsun. Bir ay sonra bir sabah bir kelime kayboluyor, şemsiye. Bütün gün tarif edip duruyorsun, yağmurda açılan, kolun altına sıkıştırılan, otobüste unutulan şey. Sonunda Mira söylüyor. “Ha,” diyorsun, “o işte.”",
"Akşam, o kelimeyle birlikte bir şeyin daha gitmek üzere olduğunu hissediyorsun, bir renk, bir dükkân, bir yağmur."
], secenekler: [
{ t: "Bir defter tutmaya başlarsın, her gün hatırladığın her şeyi yazarsın.", to: "r2", etki: { koruma: 1, defter: true } },
{ t: "Mira'dan seni kaydetmesini istersin, sesini, anlattıklarını, yüzünü.", to: "yp_kayit", etki: { bag: 1, kayit: true } },
{ t: "Hiçbir şey yapmazsın, ne gidiyorsa gitsin.", to: "r2", etki: { kabul: 1, birak: true } },
{ t: "Necmi'ye gidip öldüğünde bedenini ona bağışlamak istediğini söylersin.", to: "yp_necmi_ev", etki: { kabul: 1, necmi_soz: true } }
]},

r2: { baslik: "Mira'nın Defteri", metin: [
P(S("yp_kayitA"), "Anlatmaya devam ettin, kayıtlar birikti. Hatırladıklarının arasında, hatırlayamadığın yerlerde uzun sessizlikler kaldı. Mira hiçbirini silmedi. Bir gece o sessizliklerden birini dinlerken uyuyakalmış, sabah telefon yanağının altındaydı."),
P(S("yp_kayitB"), "Mira kaydı durdurdu ama kâğıdına bir şey yazdı. Sonradan defterinde okuyacaktın: “Babam unuttuklarının kaydedilmesini istemedi. Bunu da yazıyorum, kızmasın.”"),
P(S("yp_kayitC"), "Mira senin hatırlamadığın bir geceyi anlattı. Yedi yaşındaymış, ateşi kırka çıkmış. Sen bütün gece başında oturup ona bir saatin içini dişli dişli anlatmışsın. “Dünyanın en sıkıcı masalıydı,” dedi Mira, “ama uyudum.”"),
P(S("yp_kayitD"), "Kayda Selma'ya bir mesaj bıraktın. Ne söyleyeceğini önceden düşünmüştün ama telefon kayda başlayınca hepsi uçup gitti. “Selma,” dedin, sonra uzun süre hiçbir şey diyemedin. En sonunda “Şemsiyen hâlâ bende,” dedin. Mira bu kaydı hiç silmedi."),
P(S("yp_necmi_evA"), "Necmi gözlerini kapadı. “Evet,” dedi, “her parça bir insan.” Sonra fotoğrafa baktı. “Sağ ol.” Kavanozu masaya bırakırken eli titriyordu."),
P(S("yp_necmi_evC"), "Necmi başını salladı. “Doğru, kızına sor.” Kapıda seni uğurlarken ekledi: “Ama aklına geldi ya. Bir kere de biri bana kendini vermek istedi, o da bir şeydir.”"),
P(function(d){ return d.son === "yp_necmi_evB" || d.son === "yp_necmi_evD"; }, "Necmi çayını bitirip kalktı. “Kabul,” dedi. Fotoğrafın önünde durup sana dönmeden konuştu: “Ama acele etme, ben bekleyebilirim. Bekleyemeyen sensin.”"),
P(S("r1A"), "Defterin ilk sayfasına şunu yazdın: “Adım Yusuf. Elli üç yaşındayım. Kızım Mira. Karım Selma, öldü.” Sonra her gün bir sayfa yazdın. Bir ay sonra ilk sayfayı okuduğunda el yazını tanıdın ama cümleleri tanımadın. En altta “Ekmek al” diye bir not vardı. Neden yazdığını bilmeden gidip ekmek aldın."),
P(S("r1B"), "Mira her akşam telefonu masaya koydu, sen de anlattın, babanı, dükkânı, Selma'yı, onun çocukluğunu. Bazı geceler aynı hikâyeyi iki kere anlattın, Mira seni durdurmadı. Bir keresinde “Bunu dün de anlattın,” dedi, sonra hemen “Ama bugün daha güzel anlattın,” diye ekledi."),
P(S("r1C"), "Hiçbir şey yapmadın, kayboluşu seyrettin. Bazı günler hafif geçti, bazı günler korkunç. Bir gün Mira'nın doğum gününü unuttun. Mira bir şey demedi, akşam pastasını kendisi aldı, mumlarını sen yaktın."),
P(S("r1D"), "Necmi seni dinledi. “Bütün olarak ha,” dedi, “hiç bütün bir insan almamıştım.” Gözleri bir parladı, sonra söndü. “Ama seni aldığımda sen sen olmayacaksın ki. Hatıraların gitmiş olacak, bana boş bir kasa bırakacaksın.” Bunu kötü niyetle söylemedi, bir esnaf hesabı yapar gibi söyledi."),
"Aylar geçiyor. Mira sınavlarını verdi. Sonucunu ona üç kere sordun, üçünde de sevindin. Üçüncüsünde Mira da sanki ilk kez duyuyormuş gibi sevindi.",
"Bir sabah mutfakta Mira'yı bir defterin başında buluyorsun. Senin defterin değil, kalın, mavi kapaklı, kendi defteri. Sayfalar dolusu yazı yazmış.",
"“Ne yazıyorsun?” diye soruyorsun.",
"Mira bir süre yüzüne bakıyor. “Seni,” diyor. “Sen unuttukça ben yazıyorum. Senin anlattıklarını, benim hatırladıklarımı, annemin dediklerini. Bir gün hiçbir şey hatırlamadığında sana masal gibi okuyacağım.” Sonra ekliyor: “Sıkıcı yerleri atlayacağım ama.”",
"Defteri sana uzatıyor. Ortalardan bir sayfa açıyorsun, Mira'nın yuvarlak el yazısıyla şöyle yazıyor: “Babam bana bisiklete binmeyi öğrettiği gün ‘Ben arkadayım’ dedi ve bıraktı. Döndüğümde çok uzaktaydı. Bir çalıya girdim.”",
"Bu anıyı artık hatırlamıyorsun, çalıyı da hatırlamıyorsun. Ama okurken yine de gülüyorsun."
], secenekler: [
{ t: "Defteri ondan istersin, her gece kendin okuyacaksın.", to: "r3", etki: { koruma: 1, mira_defter: true } },
{ t: "Yazmayı bırakmasını söylersin: “Sen kendi hayatını yaz, benimkini değil.”", to: "r3", etki: { bag: 1, birak_mira: true } },
{ t: "Sen hâlâ hatırlarken defteri şimdi sesli okumasını istersin.", to: "r3", etki: { bag: 1, okudu: true } },
{ t: "Defteri kapatıp geri verirsin. O sayfalardaki adamı tanımaya hazır değilsin.", to: "r3", etki: { koruma: 1 } }
]},

r3: { baslik: "Yabancı Yüz", metin: [
P(S("r2A"), "Defter artık başucunda duruyor ve her gece okuyorsun. Bazı geceler gülüyorsun, bazı geceler ağlıyorsun. Bazı geceler de hiçbir şey hissetmiyorsun, sabah Mira'ya bir kitap bitirmiş gibi defterin çok güzel yazıldığını söylüyorsun."),
P(S("r2B"), "Mira itiraz etti. “Bu benim hayatım,” dedi, “seni yazmak benim hayatım.” Yazmaya devam etti, sen de bir daha bir şey demedin. Bir gece defteri masada açık bulup bir sayfasını okudun, sonra kapatıp eski yerine koydun."),
P(S("r2C"), "Mira okudu, bir saat, iki saat. Bir yerde durdu, çünkü sen ağlıyordun. “Devam et,” dedin. Neden ağladığını bilmiyordun, Mira da bilmiyordu ama o da ağlıyordu."),
P(S("r2D"), "Defteri geri verdin, Mira da göğsüne bastırdı. “Beklerim,” dedi."),
"Kışın ortasında bir sabah uyanıp mutfağa geliyorsun, içeride genç bir kadın kahve yapıyor. Dönüp gülümsüyor: “Günaydın baba.”",
"Bu kadının kim olduğunu bilmiyorsun. Yüzü tanıdık, her sabah otobüste gördüğün biri gibi.",
"Sonra aklına geliyor, Mira, kızın. Ama o boşluk bir kere oldu ve Mira bunu yüzünden okudu. Elindeki fincan sallanıp kahve tezgâha döküldü, Mira bezi almak için dönmedi bile.",
"“Baba,” diyor, “beni tanıdın mı?”"
], secenekler: [
{ t: "“Tanıdım,” dersin ve o boşluktan hiç söz etmezsin.", to: "r4", etki: { koruma: 1, gizledi: true } },
{ t: "“Önce tanımadım,” dersin. “Sonra tanıdım. Bir gün tanımasam bile seni hep tanıyacağım.”", to: "r4", etki: { bag: 1, durust: true } },
{ t: "Kurum'u aramayı düşünürsün, belki hâlâ geç değildir.", to: "r4", etki: { kabul: 1, pisman: true } },
{ t: "Kalkıp ona sarılırsın, artık kelimelere güvenmiyorsun.", to: "r4", etki: { bag: 1, sarildi: true } }
]},

r4: { baslik: "Berrak Gün", metin: [
P(S("r3A"), "“Tanıdım,” dedin. Mira inandı, ya da inanmayı seçti. Bezi alıp tezgâhı sildi, sonra sana sarıldı. Omzunun üstünden karla kaplı erik ağacını gördün."),
P(S("r3B"), "Mira bir süre konuşmadı, sonra gözleri dolu dolu güldü. “Bir gün tanımasan bile,” dedi. “Güzel cümle, deftere yazacağım.” Kahve lekeli parmaklarıyla hemen yazdı."),
P(S("r3C"), "Kurum'u aradın, Lale sesini tanıdı. “Sinirsel işlem için artık çok geç,” dedi, nazikçe. “Giden doku geri gelmez. Kalanı değiştirebiliriz ama çok az kaldı.” Telefonu kapattın. Mira kapının pervazında duruyordu, ne konuştuğunu duymuştu."),
P(S("r3D"), "Ona sarıldın, saçları kahve ve sabun kokuyordu. Bu kokuyu biliyorsun. Az önce adını bulamadığın kızının kokusunu biliyorsun."),
"Bahara doğru bir sabah uyandığında her şey berrak. Böyle günler oluyor bazen, sis kalkıyor, kalan her şey yerli yerinde ve keskin. Mira bu günlere “iyi gün” diyor, takvime bir yıldız koyuyor.",
"Uzun zamandır gitmediğin dükkâna gidiyorsun. Tezgâh toz içinde ama büyüteç yerinde duruyor. Çekmecede Ece'nin dedesinin saati var, bir türlü teslim edemediğin, yarım kalmış saat.",
"Saati açıyorsun, ellerin titriyor. Yayı yerine oturtmaya çalışıyorsun ama kayıyor. Bir daha deniyorsun, yine kayıyor.",
"Kapı açılıyor, Ece giriyor, yanında Mira var. Ece tezgâhın öbür tarafına, Mira senin yanına oturuyor. Kimse bir şey söylemiyor. Ece çantasından bir paket bisküvi çıkarıp tezgâhın ortasına koyuyor."
], secenekler: [
{ t: "Cımbızı Mira'ya verirsin. “Sen tak, ben söyleyeyim.”", to: "n1", etki: { bag: 1, devretti: true } },
{ t: "Ne kadar sürerse sürsün, kendi elinle bir kez daha denersin.", to: "n1", etki: { koruma: 1, kendi: true } },
{ t: "Saati kapatıp Ece'ye olduğu gibi verirsin: “Bazı saatler durur kızım.”", to: "n1", etki: { kabul: 1, durdu: true } },
{ t: "Ece'ye saati değil, dedesini sorarsın.", to: "n1", etki: { bag: 1, ece_dede: true } }
]},

/* ---------- ORTAK: NECMİ VE SON ---------- */
n1: { baslik: "Necmi'nin Deposu", metin: [
P(function(d){ return d.son && d.son.indexOf("dg4") === 0; }, "Ece saati cebine koyup gitti. Kapıda durup döndü, bir şey soracak gibi oldu ama sormadı. Kapının çıngırağı bir süre sallandı durdu."),
P(function(d){ return d.son && d.son.indexOf("ik3") === 0; }, "Ertesi sabah Necmi kapıyı çaldı. İkinizi birden görünce bir süre ağzını açamadı, sonra uzun, tuhaf, öksürüğe dönen bir kahkaha attı. “Otuz yıldır bunu yapmaya uğraşıyorum,” dedi. “Kurum bir gecede yapmış, hem de kâğıt hatasıyla.”"),
P(S("r4A"), "Mira yayı ilk denemede taktı ve saat çalıştı. Ece önce güldü, sonra ağladı, sonra bisküvi yedi. Sen Mira'nın ellerine baktın, senin tarifinle çalışan başka eller."),
P(S("r4B"), "Yay yirminci denemede yerine oturdu, Ece saymıştı. “Yirmi!” diye bağırıp ayağa kalktı. Sen ellerini dizlerine koyup titremenin geçmesini bekledin."),
P(S("r4C"), "Ece saati alıp kulağına götürdü ama ses gelmedi. “Dedem de durdu,” dedi, “saati de dursun belki.” Saati cebine koydu, bisküvinin son tanesini de sana bıraktı."),
P(S("r4D"), "Ece bir saat boyunca dedesini anlattı, istavriti, ağı, bir de hiç bitmeyen fıkralarını. Saat tezgâhta açık, yarım kaldı. Mira bisküvileri bitirdi."),
"Birkaç gün sonra Necmi seni deposuna çağırıyor. Deposu çarşının en arkasındaki eski bir handa, içeri girerken başını eğmen gerekiyor.",
"Raflarda kavanozlar, kutular, etiketler var. Eller, gözler, kalpler, bir kulak, bir dişeti, her birinin üstünde bir ad ve bir tarih yazılı. Kemerli'nin yenilenirken geride bıraktığı her şey burada toz içinde duruyor.",
"Ortada bir masa, masanın üstünde de bir insan taslağı var. Farklı insanların parçalarından özenle birleştirilmiş, kıpırdamadan yatıyor. Saçları bir yerden, elleri başka bir yerden.",
P(function(d){ return d.necmi && d.el === "yeni"; }, "Şeklin sağ eli senin elin, başparmağının yanındaki kesik izinden tanıyorsun. On yaşında babanın dükkânında yeni bir çakıyla kesmiştin. O el şimdi başka birinin bileğine bağlı."),
"“Bu benim karım,” diyor Necmi. “Yani olmaya çalışıyor. Otuz yıl önce öldü, o günden beri parçaları topluyorum. Onunkileri değil, onunkiler gömüldü. Başkalarınınkileri. Hepsi bir araya gelince belki...” Cümlesini bitirmiyor, şeklin omzundaki tozu üflüyor.",
"“Ben de yüzde yüz yenilendim,” diyor. “Eski parçalarım şu rafta duruyor. Bazen düşünüyorum, hangisi Necmi diye. Raftakinin içinde karımı seven adamın kalbi var. Bendeki kalp ise yalnızca onu sevdiğimi biliyor.”"
], secenekler: [
{ t: function(d){ return d.necmi && d.el === "yeni" ? "Eski elini geri istersin." : "Necmi'ye, şeklin yarım kalmaması için bir parçanı bağışlamayı teklif edersin."; }, to: "n1b", etki: function(d){ if(d.necmi && d.el === "yeni"){ d.koruma++; d.geri_aldi = true; } else { d.kabul++; d.bagisladi = true; } } },
{ t: "Necmi'ye o şekli yakmasını söylersin. Karısı o değil, olamaz da.", to: "yp_ates", etki: { koruma: 1, yak: true } },
{ t: "“O senin karın,” dersin, “sen öyle sevdiğin sürece.”", to: "n1b", etki: { bag: 1, kabul: 1, onay: true } },
{ t: "Ne hissedeceğini bilmeden şeklin eline dokunursun.", to: "yp_sekil", etki: { dokundu: true } }
]},

n1b: { baslik: "Erik Ağacı", metin: [
P(S("yp_atesA"), "“Hoşça kal Necmi,” dedin. Necmi kutuyu ateşe bıraktı, alev yükseldi, karton kıvrıldı. Necmi ağladı, yenilenmiş gözleri kızardı, burnu aktı. “Sağ ol,” dedi, “biri söyledi. Sonunda biri bir şey söyledi.”"),
P(S("yp_atesB"), "Kutuyu elinden aldın, köşesi kararmıştı. Necmi önce şaşırdı, sonra omuzları düştü. “Biliyordum,” dedi. “Kimse gerçekten yakmak istemez. Ama biri istesin istedim.” Kutu kararmış köşesi öne bakacak şekilde rafına geri döndü."),
P(S("yp_atesC"), "Necmi bir süre düşündü, sonra kutuyu ateşe bıraktı. “Haklısın,” dedi, “zaten gitmişti. Ben yalnızca kutusunu tutuyordum.” Ellerini ateşe tutup ısıttı."),
P(S("yp_atesD"), "Hiçbir şey söylemedin. Necmi kutuyu ateşe bıraktı, alev sönene kadar orada durdunuz. Sonra Necmi varilin içine biraz su döküp “Hadi, çay koyayım,” dedi."),
P(S("yp_sekilA"), "Necmi seni dinledi, yüzünde bir değişiklik olmadı. “Ben de duyuyorum,” dedi, “her gece. Burada yatmamamın sebebi de bu.”"),
P(S("yp_sekilB"), "Rüyaydı, dedin kendi kendine. Ama sabah ceketinin cebinde bir etiket buldun: “Yusuf, sağ el.” Nereden geldiğini bilmiyorsun. Çöpe atamadın, cüzdanına koydun."),
P(S("yp_sekilC"), "Necmi uzun uzun düşündü. “Otuz yıl,” dedi. “Ama belki haklısın, belki herkes kendi adıyla gitmeli.” Şeklin saçını okşadı. “Daha değil ama. Bir gün.”"),
P(S("yp_sekilD"), "Şeklin eline bir kez daha dokundun. Bu sefer ılıktı, ya da senin elin ılıktı. Hangisi olduğunu düşünmeden kapıdan çıktın."),
P(S("n1A"), "Necmi rafa dönüp kutuyu indirdi. Bir şey kaybettiği belliydi ama itiraz etmedi. “Herkesin kendi parçasına hakkı var,” dedi. Kutuyu uzatırken bir türlü elinden bırakamadı."),
P(S("n1B"), "Necmi şeklin başında durdu. “Belki haklısın,” dedi, “ama otuz yıl bu. Otuz yılı yakamam.” Yakmadı, sen de ısrar etmedin. Çıkarken şekle bir daha bakmadın."),
P(S("n1C"), "Necmi sana döndü, gözleri yaşlıydı. “Bunu kimse söylemedi,” dedi, “otuz yılda kimse.” Sonra şeklin kimden geldiği bilinmeyen saçlarını parmaklarıyla taradı."),
P(S("n1D"), "Şeklin eline dokundun, soğuktu. Hiçbir şey hissetmedin, belki biraz utandın, birinin karısının eline izinsiz dokunmuş gibi."),
"Eve dönüyorsun. Bahçede Selma'nın diktiği erik ağacı duruyor. Kış bitmek üzere, dallarda ilk tomurcuklar belirmiş.",
"Selma onu Mira doğduğu yıl dikmişti, “Mira büyüdükçe büyüsün,” demişti. Ağaç her yıl budandı, bugün üstündeki dalların hiçbiri Selma'nın diktiği dal değil. Yine de mahallede herkes ona “Selma'nın eriği” diyor, komşular izinsiz toplarken bile.",
P(function(d){ return d.gomdu; }, "Ağacın dibinde, toprağın altında eski elin, ya da elinden kalan söz duruyor. Geçen yaz o köşedeki erikler daha iri oldu. Mira yarı şaka bunun senin elin yüzünden olduğunu söyledi."),
P(function(d){ return d.kayip === "selma"; }, "Selma'yı hatırlamıyorsun ama ağacın onun olduğunu biliyorsun. Her bahar budamak için makası sen alıyorsun."),
"Mira mutfak penceresinden seni görüyor, terliklerini giyip yanına geliyor.",
"“Baba,” diyor, “ölmekten korkuyor musun?”",
P(function(d){ return d.ret; }, "Reddettiğin günden beri bu soruyu bekliyordun. Doktorlar bir yıl diyor, belki daha az."),
P(function(d){ return !d.ret; }, "Kemerli'de kimse ölmez ama kızının ne sorduğunu biliyorsun.")
], secenekler: [
{ t: "“Evet,” dersin. “Ama korktuğum şey ölmek değil, ölmeden önce gitmek.”", to: "n2", etki: { koruma: 1 } },
{ t: "“Hayır,” dersin. “Ben bu ağaç gibiyim, dallar değişse de kökler yerinde.”", to: "n2", etki: { kabul: 1 } },
{ t: "“Sen buradayken korkmuyorum,” dersin.", to: "n2", etki: { bag: 1 } },
{ t: "“Bilmiyorum,” dersin. “Hangi ben ölecek, onu bilmiyorum.”", to: "n2", etki: { bilinmez: true } }
]},

n2: { baslik: "Son Saat", metin: [
P(S("n1bA"), "“Korktuğum şey ölmek değil, ölmeden önce gitmek,” demiştin. Mira bir süre konuşmamış, sonra erik ağacının bir dalını eğip sana bir tomurcuk göstermişti."),
P(S("n1bB"), "“Ben bu ağaç gibiyim,” demiştin. Mira gülmüştü. “Ağaç yeni dalını tanıyor mu ama baba?”"),
P(S("n1bC"), "“Sen buradayken korkmuyorum,” demiştin. Mira koluna girmiş, eve kadar bırakmamıştı."),
P(S("n1bD"), "“Hangi ben ölecek, onu bilmiyorum,” demiştin. Mira uzun uzun yüzüne bakmıştı. “Ben ikisini de tanıyorum,” demişti."),
"O gece dükkândasınız, sen ve Mira. Dışarıda bahar yağmuru çarşının taşlarını ıslatıyor.",
"Tezgâhın üstünde babandan kalan cep saati duruyor, elli yıldır cebinde taşıyorsun. İçinde hiç değişmemiş tek bir parça var, babanın taktığı en eski dişli. Gerisi yıllar içinde senin ellerinle değişti.",
P(function(d){ return d.ikinci === "ikisi"; }, "Öteki de burada, tezgâhın öbür ucunda aynı büyüteçle çalışıyor. Biriniz kahvesini, biriniz çayını içiyor."),
P(function(d){ return d.ikinci === "kaldi"; }, "Bu dükkân artık senin değil, ötekinin. Ona son kez bakmaya geldin, kepengi Mira açtı. Yarın yeni bir adla yeni bir şehre gideceksin."),
P(function(d){ return d.tam; }, "Sen artık yüzde yüz yenisin. Saatin o eski dişlisi senden kalan en eski şey olabilir."),
P(function(d){ return d.ret; }, "Bugün iyi bir gün, takvimde bir yıldız var. Ellerin titriyor ama kafan berrak."),
"Mira yanında oturuyor. “Bu hâlâ dedemin saati mi?” diye soruyor, tıpkı Ece'nin sorduğu gibi. Ece'den duymuş olmalı.",
"Saati açıyorsun, dişliler dönüyor. En altta o eski dişli duruyor, dişleri aşınmış, kenarları yuvarlaklaşmış ama dönüyor.",
"Yağmur kepengin üstünde tıkırdıyor, saatin sesi de ona karışıyor. Bir süre hangisinin hangisi olduğunu ayıramıyorsun."
], secenekler: [
{ t: "Saati kurup bırakırsın, çalışsın.", to: "ys", etki: { saat: "kur" } },
{ t: "Saati durdurursun.", to: "ys", etki: { saat: "dur" } },
{ t: "Saati Mira'ya verirsin.", to: "ys", etki: { saat: "mira", bag: 1 } },
{ t: "O eski dişliyi çıkarıp cebine koyar, saati yeni bir dişliyle kapatırsın.", to: "ys", etki: { saat: "disli", koruma: 1 } }
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
P(function(d){ return d.saat === "kur"; }, "Saati kurdun, dükkânın sessizliğinde çalışmaya başladı."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun, geriye yağmurun sesi kaldı."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin, kapağını kapatmadan avucunda tuttu."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun, saat yeni dişliyle aynı ritimde çalışmaya devam etti."),
"Sonbaharda, erik yaprakları dökülürken bir sabah Mira'nın yüzünü tanımadın ve bu sefer arkasından bir şey gelmedi.",
"Mira yine de her akşam geldi, mavi kapaklı defteri açıp sana bir saat tamircisinin hikâyesini okudu. Kurulmamış bir saatle dükkâna gelen bir kadını, bisikletin arkasını bırakan bir babayı, bir çalıyı okudu. Sen kibarca, ilgiyle dinledin, bazı yerlerde gülümsedin. Mira o yerlerin yanına küçük yıldızlar koydu.",
"Kışın öldün, kendi bedeninde, kendi kalbinle. Kemerli'de buna “eski usul” diyorlar. Cenazeye çarşıdan çok kişi geldi. Necmi en arkada durdu, şapkasını hiç çıkarmadı. Ece dedesinin saatini cebinde getirmişti, çalışıyordu.",
"Mira defterin son sayfasına bir şey yazmadı, boş bıraktı."
]},

son_giden: { son: true, baslik: "Giden", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurup tezgâhın üstüne bıraktın."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurup tezgâhta bıraktın, öteki onu senin ellerinle yeniden kuracak."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verip “Babana ver,” dedin, sonra durdun. “Ötekine yani.” Sonra yine durdun. Mira “Anladım baba,” dedi."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun. Saat kaldı, sen gittin."),
"Ertesi sabah yeni bir adla trene bindin. Kurum bir ad önermişti, reddettin, babanın adını seçtin.",
"Başka bir şehirde, başka bir çarşıda küçük bir dükkân açtın. İnsanlar adını soruyor, söylüyorsun, kimse geçmişini sormuyor. Karşıdaki kunduracı her sabah “Günaydın usta,” diyor, adını hiç kullanmıyor, bu da hoşuna gidiyor.",
"Mira her ay mektup yazıyor, “Sevgili babam,” diye başlıyor. Bir mektubunda “Babam sana selam söylüyor,” yazmış. O cümleyi okuduktan sonra mektubu katlayıp bir süre çekmecede beklettin, sonra yine çıkarıp okudun.",
"Bir yerde, bir mutfakta, senin sesinle konuşan bir adam senin kızına kahvaltı hazırlıyor. Yumurtayı herhalde senin gibi fazla pişiriyordur, Mira da yine de yiyordur."
]},

son_iki: { son: true, baslik: "İki Kişilik Hayat", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurdun, öteki dinledi. İkiniz aynı anda gülümsediniz ama bundan hiç söz etmediniz."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun, öteki elini uzatıp yeniden kurdu. Bu bir kavga değildi, sizin konuşma biçiminizdi."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin, öteki de başıyla onayladı."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi sen çıkardın, yenisini öteki taktı."),
"Kurum bir çözüm bulamadı ve Kemerli'nin kayıtlarında bir boşluk kaldı. Yusuf Taner iki kere yazılı.",
"Dükkânı ikiye böldünüz, sabahları o, öğleden sonraları sen çalışıyorsun. Müşteriler fark etmiyor, ya da fark etmemiş gibi yapıyor. Ece ise fark ediyor ve her gelişinde “Bugün hangisisiniz?” diye soruyor. Bazen bile bile yanlış cevap veriyorsunuz.",
"Bazı akşamlar mutfakta üç kişi oturuyorsunuz. Öteki sana senin kaybettiğin anılardan birini anlatıyor, sen de ona onun hiç yaşamadığı o son yılı anlatıyorsun.",
"Yavaş yavaş birbirinizden farklılaşıyorsunuz. O sabahları kahve içiyor, sen çay. O bahçeye gül dikti, sen dikmezdin. Ama gülü sen sulamaya başladın, nedenini ikiniz de sormadınız."
]},

son_gemi: { son: true, baslik: "Tahta Tahta", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurdun, babanın dişlisi dönmeye devam etti."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun, içindeki eski dişli kıpırdamadan kaldı."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin, eski dişli artık onun cebinde."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun. Saat yeni dişliyle aynı ritimde çalıştı, sen de öyle."),
"Yaşamaya devam ettin, Kemerli'de kimse ölmez.",
"Dükkânı açtın, saatleri tamir ettin. Mira üniversiteye gitti, döndü, evlendi. Düğünde gelin arabasının saatini sen ayarladın, yine de geç kaldılar. Sonra torunun doğdu. Onu kucağına aldığında elin titremedi, o el hiç titremedi zaten.",
"Bir gün torunun sana “Dede, sen hep böyle miydin?” diye soracak ve sen bilemeyeceksin. Elinde, gözünde, kalbinde başlangıçtan kalan tek bir hücre yok. Yine de her sabah aynı adla uyanıp aynı tezgâha oturuyorsun.",
"Eski parçaların Necmi'nin deposunda bir rafta duruyor. Bazen önünden geçiyorsun. Bir keresinde içeri girdin, Necmi seni görünce rafı gösterdi. “İyi duruyor,” dedi, “tozunu alıyorum.” Teşekkür edip kendi elinin kutusuna dokunmadan çıktın."
]},

son_kalan: { son: true, baslik: "Kalan Parça", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurdun. Babanın dişlisi artık hatırlamadığın şeylerin arasında dönüp duruyor."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun ama sen devam ettin."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verip “Bir gün biri sana da bu soruyu soracak,” dedin. Mira saati kulağına götürdü."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun, artık her yere onunla gidiyorsun. Ceketini değiştirirken onu da bir cepten öbür cebe taşıyorsun."),
P(function(d){ return d.ikinci === "gitti"; }, "Öteki gitti. Başka bir şehirde senin kaybettiğin anıyı taşıyan bir adam yaşıyor. Bayramlarda imzasız bir kartpostal geliyor, el yazısı seninki."),
P(function(d){ return d.son_on; }, "O yüzde on yavaş yavaş söndü ve bir gün tamamen gitti. Ne gittiğini hiç öğrenmedin. O akşam yemekte tuzu iki kere istedin, o kadar."),
"Yaşamaya devam ettin ama bir şey eksik. Bazen tezgâhta çalışırken eline bir parça alıyor, nereye takılacağını bilmeden bir süre öylece tutuyorsun.",
P(function(d){ return d.kayip === "selma"; }, "Selma'yı hiç hatırlamadın. Ama erik ağacını her bahar Mira'nın tarifiyle, annesinin yaptığı gibi budadın."),
P(function(d){ return d.kayip === "mira"; }, "Mira'nın çocukluğunu hiç hatırlamadın, onu yeniden tanıdın, on yedi yaşında, yirmi yaşında, otuz yaşında. Bir gün Mira sana bir çocukluk fotoğrafını gösterdi. “Tatlıymışım,” dedi. “Tatlıymışsın,” dedin, fotoğrafı ilk defa görerek."),
P(function(d){ return d.kayip === "cocukluk"; }, "Babanı hiç hatırlamadın ama tezgâhın altındaki çatlak bardağı hâlâ atmıyorsun."),
"Bazen yağmurda kırmızı bir şemsiye görünce duruyorsun. Neden durduğunu bilmeden, şemsiye köşeyi dönene kadar arkasından bakıyorsun."
]}

},

ayna: function(d){
  var out = [];
  var k = d.koruma, a = d.kabul, b = d.bag;
  if(k >= a && k >= b) out.push("Çoğu zaman elini, kalbini, anılarını korumaya çalıştın.");
  else if(a >= b) out.push("Çoğu zaman her yeni parçayı ve her kaybı kabullendin.");
  else out.push("Çoğu zaman Mira'ya, Hayriye Hanım'a, Necmi'ye yaslandın.");
  if(d.kayip) out.push("Bir anı kümesini bıraktın: " + KAYIP[d.kayip] + ".");
  if(d.ret) out.push("Hiçbir anıyı seçmeyi kabul etmedin.");
  if(d.yedek && d.ikinci) out.push("Yedeğine izin verdin, yedeğin uyandı ve bir kapıda kendinle karşılaştın.");
  if(d.rol) out.push("Bir süre eski Yusuf'u oynadın.");
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
