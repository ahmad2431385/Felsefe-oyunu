(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };
var KAYIP = { selma: "Selma'ya dair her şey", mira: "Mira'nın çocukluğu", cocukluk: "kendi çocukluğun" };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "yedek-parca",
baslik: "Yedek Parça",
dunya: "Hayali dünya",
kavramlar: ["Kişisel kimlik", "Bellek ve benlik", "Kopya sorunu", "Ölüm ve süreklilik"],
ozet: "Kemerli şehrinde bozulan hiçbir şey atılmaz, yenilenir: ciğer, kalp, el, hatta anı. Bir saat tamircisinin bedeni parça parça vazgeçmeye başladığında, geriye ne kalacağı sorusu yalnızca ona ait değil.",
baslangic: "y1",
durum: { koruma: 0, kabul: 0, bag: 0 },

sahneler: {

y1: { baslik: "Titreme", metin: [
"Kemerli'de hiçbir şey kaybolmaz. Şehrin her kapısında, her otobüs durağında aynı yazı: “Hiçbir şey kaybolmaz, yalnızca yenilenir.” Süreklilik Kurumu'nun sözü bu. Bozulan ciğer yenilenir, yorulan kalp yenilenir, kör olan göz yenilenir. Kemerli'de kimse hastalıktan ölmez. Yalnızca, bir gün, yeterince değişmiş olur.",
"Sen Bakırcılar Çarşısı'nın en dip dükkânında saat tamircisisin. Adın Yusuf, elli iki yaşındasın. Babandan kalan tezgâh, babandan kalan büyüteç, babandan kalan sabır.",
"Bu sabah bir cep saatinin spiral yayını yerine oturtmaya çalışıyorsun ve elin titriyor. Saç teli inceliğinde bir yay, üç kez kayıyor. Dördüncüde bırakıyorsun. Ellerine bakıyorsun; elli yıldır seninle olan, her çizgisini bildiğin eller.",
"Saat, Ece adında on iki yaşında bir kızın. Dedesinden kalmış. Dün getirdi, tezgâha bıraktı ve “Dedem bu saatin hiç durmadığını söylerdi,” dedi. “Ben onu durdurdum. Düşürdüm.”",
"Tezgâhın kenarında bir zarf duruyor. Kurum'un mührü. İçindeki kâğıt kısa: “İlerleyici doku kaybı. Değişim süreciniz başlamıştır. Önce sağ el. Sonraki aşamalar size bildirilecektir.” Sonraki aşamalar. Kemerli'de herkes bu kelimenin sonunun nereye vardığını bilir: en son baş.",
"Evde on yedi yaşındaki kızın Mira bekliyor. Annesi Selma altı yıl önce öldü; Kurum'un yenileyemediği türden, ani bir şeyle. Kemerli'de bile bazı şeyler yenilenmeye fırsat bırakmıyor."
], secenekler: [
{ t: "Yarın sabah Kurum'a gidersin. Bir şeyi ertelemek, onu iyileştirmez.", to: "y2", etki: { kabul: 1 } },
{ t: "Zarfı çekmeceye kaldırırsın. Mira'nın sınavları var; şimdi söylemeyeceksin.", to: "y2", etki: { koruma: 1, sakladi: true } },
{ t: "Akşam yemeğinde Mira'ya her şeyi anlatırsın.", to: "y2", etki: { bag: 1, mira_bilir: true } },
{ t: "Bütün gece o saatle uğraşırsın, titreyen elinle, bitirene kadar.", to: "y2", etki: { koruma: 1, ece_saati: true } }
]},

y2: { baslik: "Süreklilik Kurumu", metin: [
P(S("y1A"), "Gece uyumadın. Sabah ilk otobüse bindin. Camdan, birer birer yenilenmiş insanların yüzlerine baktın; hangisinin hangi parçası yeni, anlaşılmıyor. Kemerli'de bunu sormak ayıptır."),
P(S("y1B"), "Zarf çekmecede. Mira kahvaltıda sana bir şey sordu, cevap verirken kahve fincanını sol elinle tuttun. Fark etmedi. Ya da fark etti ve o da sana bir şey söylemedi; bu evde susmak bir aile mirası."),
P(S("y1C"), "Mira dinledi ve sonra, hiç beklemediğin bir şey yaptı: elini tuttu, sağ elini, titreyeni. “Bu el beni bisiklete binmeyi öğretti,” dedi. “Yenisi öğretemez ki. Ben zaten biliyorum artık.” Gülmeye çalıştı."),
P(S("y1D"), "Sabaha karşı dörtte yay yerine oturdu. Saat çalışmaya başladı; tik, tak, Ece'nin dedesinin ritmiyle. Elin bunu son kez yapabildi, belki. Bunu bilerek yapmak, işi bir vedaya çevirdi."),
"Kurum'un binası beyaz, penceresiz değil ama pencereleri hiçbir şeye bakmıyor. İçerisi ılık, hafif bir çiçek kokusu. Bekleme salonunda insanlar sessiz.",
"Yanında yaşlı bir kadın oturuyor. Hayriye Hanım. Kendisi söylüyor, sormadan: “Yüzde seksen,” diyor ve gülümsüyor. “Ciğerler, kalp, böbrekler, iki göz, bir kulak, hafızanın bir kısmı. Düğün günümü hatırlamıyorum ama tarihini biliyorum. On iki haziran. Güzel bir gün olmalı.”",
"Teknisyen Lale seni içeri çağırıyor. Genç, sakin, gözleri biraz fazla parlak. “Sağ el,” diyor. “Basit bir işlem. Yeni el, eskisinin bütün becerilerini öğrenir; sinir haritanızı çıkarıyoruz. Bir haftada fark etmezsiniz bile. Eski eliniz yasal hakkınızdır, size mühürlü bir kutuda teslim edilir.”",
"Bir kutu. Elli iki yılın içinde bir kutu."
], secenekler: [
{ t: "Kabul edersin. Bir el, yalnızca bir eldir.", to: "y3", etki: { kabul: 1, el: "yeni" } },
{ t: "Reddedersin. Eski elinle gidebildiğin yere kadar gideceksin.", to: "y3", etki: { koruma: 1, el: "eski" } },
{ t: "Kabul etmeden önce Hayriye Hanım'a dönüp sorarsın: “Neyi kaybettiğinizi nasıl biliyorsunuz?”", to: "y3", etki: { bag: 1, el: "yeni", hayriye: true } },
{ t: "Mira'yı arar, kararı ona sorarsın.", to: "y3", etki: { bag: 1, el: "yeni", mira_karar: true } }
]},

y3: { baslik: "Kutu", metin: [
P(S("y2C"), "Hayriye Hanım bir süre düşündü. “Bilmiyorum,” dedi. “Ama bir şeyi kaybettiğimde içimde bir yer serinliyor. Kapısı açık kalmış bir oda gibi. Odada ne olduğunu hatırlamıyorum, ama kapının açık olduğunu biliyorum.” Sonra senin eline baktı. “El kolay. El oda değil.”"),
P(S("y2D"), "Mira telefonda uzun süre sustu. Sonra “Değiştir baba,” dedi. “Seni kaybetmek istemiyorum. Elini kaybetmek seni kaybetmek değil, değil mi?” Bu bir soru muydu? Cevap vermedin; o da beklemedi."),
P(function(d){ return d.el === "yeni"; }, "Bir hafta geçti. Lale haklıydı: fark etmiyorsun bile. Yeni el, eskisinden daha sabit, daha hızlı. Ece'nin saatinin yayını üç saniyede taktın. Büyütecin altında dişliler, hiç olmadığı kadar net."),
P(function(d){ return d.el === "yeni"; }, "Ama bir akşam Mira yanından geçerken elini tuttu, bir alışkanlıkla; ve hemen bıraktı. Bir saniye. Belki daha az. Hiçbir şey söylemedi. Sen de söylemedin. Elin ılıktı, yumuşaktı, seninkine benziyordu. Yalnızca benziyordu."),
P(function(d){ return d.el === "yeni"; }, "Eski elin, Kurum'un mühürlü kutusunda, dolabın üst rafında duruyor. Bazen gece kalkıp kutuya bakıyorsun. Açmıyorsun."),
P(function(d){ return d.el === "eski"; }, "Bir hafta geçti. Titreme kötüleşti. Artık küçük vidaları tutamıyorsun. Ece'nin saati tezgâhta açık duruyor. Mira okuldan sonra dükkâna geliyor; sen tarif ediyorsun, o yapıyor. Parmakları ince, sabırlı. Annesininki gibi. Bunu ona söylemiyorsun."),
"Bir öğleden sonra dükkânın kapısında bir adam beliriyor. Uzun, zayıf, eski bir paltonun içinde. Hurdacı Necmi. Çarşının herkes tarafından bilinen ve kimse tarafından tanınmayan adamı.",
P(function(d){ return d.el === "yeni"; }, "“Eski elin bende daha iyi korunur,” diyor, selam vermeden. “İyi para veririm. Eski parçaları toplarım. Her şeyi. Bir gün hepsini birleştireceğim. Eski parçalardan bir insan. O zaman göreceğiz, hangisi asıl.”"),
P(function(d){ return d.el === "eski"; }, "“Elini değiştirmemişsin,” diyor, selam vermeden. “Akıllıca. Ya da değil. Ben eski parçaları toplarım. Bir gün değiştirirsen, kutuyu bana getir. Bir gün hepsini birleştireceğim. Eski parçalardan bir insan. O zaman göreceğiz, hangisi asıl.”"),
"Gülüyor. Dişlerinin yarısı parlak, yarısı sarı."
], secenekler: [
{ t: function(d){ return d.el === "yeni" ? "Kutuyu Necmi'ye satarsın." : "Necmi'ye, zamanı gelince eski parçalarını ona vereceğine söz verirsin."; }, to: "y3b", etki: { kabul: 1, necmi: true } },
{ t: function(d){ return d.el === "yeni" ? "Kutuyu saklarsın. Atölyenin arka rafında, gözünün önünde." : "Necmi'yi kapıdan çevirirsin. Parçaların kimseye satılık değil."; }, to: "y3b", etki: { koruma: 1, sakla: true } },
{ t: function(d){ return d.el === "yeni" ? "Kutuyu bahçeye, Selma'nın diktiği erik ağacının dibine gömersin." : "Necmi'ye, öldüğünde bedeninin erik ağacının dibine gömüleceğini, kimseye verilmeyeceğini söylersin."; }, to: "y3b", etki: { koruma: 1, gomdu: true } },
{ t: function(d){ return d.el === "yeni" ? "Kutuyu Mira'ya verirsin: “Bu babanın eli. Ne istersen yap.”" : "Necmi'ye cevabı Mira'nın vereceğini söylersin: “Benden sonra benimle ilgili kararlar onun.”"; }, to: "y3b", etki: { bag: 1, miraya_verdi: true } }
]},

y3b: { baslik: "Yüzde Doksan Beş", metin: [
P(S("y3A"), "Necmi parayı tezgâha sayarak bıraktı. Gitmeden kapıda döndü: “Merak etme,” dedi. “Ben iyi bakarım. Sen kendine bakamıyorsun ama ben senin eskine bakarım.”"),
P(S("y3B"), "Necmi omuz silkti. “Herkes önce böyle der,” dedi. “Sonra parçaların bir kutuya, kutu bir dolaba, dolap bir depoya gider. Bir gün biri dolabı açar ve ne olduğunu bilmez. Ben bilirim. Düşün.”"),
P(S("y3C"), "Necmi bir süre sustu. Sonra şapkasını çıkardı. “Toprak da bir koleksiyoncu,” dedi. “Benden daha sabırlı.” Gitti."),
P(S("y3D"), "Mira kutuyu ya da kararı aldı, uzun süre baktı. Sonra kendi odasına götürdü. Ne yaptığını sormadın. Bir babanın bir parçası, kızının odasında; bu bir miras mı, bir yük mü, ikisi de mi?"),
"Bir ay sonra kontrol için yine Kurum'dasın. Bekleme salonunda Hayriye Hanım. Ya da Hayriye Hanım'ın oturduğu sandalyede oturan biri.",
"Yanında kırklarında bir adam var: oğlu. Oğlu ona bir fotoğraf gösteriyor. Hayriye Hanım fotoğrafa bakıyor, nazikçe gülümsüyor. “Ne güzel bir çocuk,” diyor. “Kimin?”",
"Oğlu fotoğrafı cebine koyuyor. Sana dönüyor, çünkü odada başka kimse yok. “Yüzde doksan beş,” diyor, sesini alçaltmadan. “Annem mutlu. Her sabah uyanıyor, kahvaltı ediyor, bahçede oturuyor, gülümsüyor. Hiçbir şeyden şikâyeti yok. Doktorlar kişiliğinin korunduğunu söylüyor. Aynı kahkaha, aynı bakış.”",
"Bir süre susuyor. “Ama beni tanımıyor. Ve her sabah ona kim olduğumu söylediğimde, nazikçe inanıyor. Sizce o hâlâ annem mi? Yoksa annemin kahkahasını taşıyan iyi bir yabancı mı?”",
"Hayriye Hanım ikinize de gülümsüyor. Güzel, sıcak, tanıdık bir gülümseme. Kime ait olduğunu bilmediğin bir gülümseme."
], secenekler: [
{ t: "“Hâlâ anneniz,” dersin. “Bir insan hatırladıklarından ibaret değil.”", to: "y4", etki: { kabul: 1, cevap_hayriye: "anne" } },
{ t: "“Bilmiyorum,” dersin. “Ama siz onu hatırladığınız sürece bir şey devam ediyor.”", to: "y4", etki: { bag: 1, cevap_hayriye: "siz" } },
{ t: "Cevap vermezsin. Bu soruyu bir gün kendi kızının sana soracağını düşünüyorsun.", to: "y4", etki: { koruma: 1, cevap_hayriye: "sessiz" } },
{ t: "Hayriye Hanım'a dönüp sorarsın: “Mutlu musunuz?”", to: "y4", etki: { cevap_hayriye: "sordu" } }
]},

y4: { baslik: "Kalp", metin: [
P(S("y3bA"), "Adam sana uzun süre baktı. “Herkes böyle söylüyor,” dedi. “Benden başka herkes.” Kalktı, annesinin paltosunu düzeltti ve onu kolundan tuttu. Hayriye Hanım ona teşekkür etti; bir yabancıya eder gibi, çok nazikçe."),
P(S("y3bB"), "Adam başını salladı. “Ben hatırlıyorum,” dedi. “Ama ben de bir gün buraya geleceğim. O zaman ne olacak? Kim hatırlayacak?” Cevabın yoktu."),
P(S("y3bC"), "Sustun. Adam da sustu. Aranızdaki sessizliği Hayriye Hanım doldurdu; havadan, çiçeklerden, yarın yağmur yağıp yağmayacağından bahsetti. Kimse dinlemiyordu. Kimsenin dinlemesine gerek yoktu."),
P(S("y3bD"), "Hayriye Hanım sana baktı, düşündü. “Mutlu musun diye soran ilk kişisiniz,” dedi. “Herkes kim olduğumu soruyor.” Sonra gülümsedi. “Evet. Bilmiyorum ama evet.” Oğlu pencereden dışarı bakıyordu."),
"Üç ay sonra bir sabah merdivenleri çıkarken göğsünde bir sıkışma. Durup nefes alıyorsun. Bir sonraki basamakta bir daha. Kurum'un mektubu iki gün sonra geliyor: “İkinci aşama: kalp.”",
"Lale yine karşında. Bu kez yanında bir kâğıt daha var. “Kalp değişimi rutin,” diyor. “Ama bu aşamada bir şey daha öneriyoruz: tam yedekleme. Hafızanızın, kişiliğinizin, alışkanlıklarınızın bütün haritası. Bir sonraki aşama sinirsel olacak ve sinirsel aşamada kayıp riski var. Yedek, bir şeyler ters giderse onarım için kullanılır.”",
"“Yalnızca onarım için mi?” diye soruyorsun.",
"Lale bir an duraksıyor. Gözleri bir an kâğıda iniyor. “Yalnızca onarım için,” diyor. “Yönetmelik böyle.”",
P(function(d){ return d.el === "eski"; }, "Elin masanın üstünde titriyor. Lale ona bakıyor, sonra sana. “Eli hâlâ değiştirmediniz,” diyor. “Kalpte bu kadar sabırlı olamazsınız. Kalp beklemiyor.”")
], secenekler: [
{ t: "İkisini de kabul edersin: yeni kalp ve tam yedek.", to: "y4b", etki: { kabul: 1, kalp: "yeni", yedek: true } },
{ t: "Kalbi kabul edersin, yedeği reddedersin. Kendinin bir kopyası olsun istemiyorsun.", to: "y4b", etki: { kalp: "yeni" } },
{ t: "Kalbi de reddedersin. Kendi kalbin ne kadar atarsa o kadar.", to: "y4b", etki: { koruma: 1, kalp: "eski" } },
{ t: "Kararı Mira'ya bırakırsın.", to: "y4b", etki: { bag: 1, kalp: "yeni", yedek: true, mira_karar2: true } }
]},

y4b: { baslik: "Mira", metin: [
P(S("y4A"), "İki imza attın. Yeni kalp göğsünde, ilk gece sessizce atıyor; eskisinden daha düzenli, daha az telaşlı. Ve bir yerde, Kurum'un bir sunucusunda, sen varsın. Tamamen. Uyuyan bir sen."),
P(S("y4B"), "Yedeğin kâğıdını imzalamadın. Lale başını salladı, bir şey not etti. Yeni kalbin göğsünde atarken, hiçbir yerde ikinci bir sen olmadığını bilmek içini rahatlattı. Ya da tersine: geri dönüşü olmayan bir yola girdiğini."),
P(S("y4C"), "Kalbi de reddettin. Lale itiraz etmedi; Kurum kimseyi zorlamaz, yalnızca bekler. Merdivenler artık her gün daha uzun. Ama göğsündeki ses, eskisi gibi düzensiz, eskisi gibi senin."),
P(S("y4D"), "Mira bir gece boyunca kâğıtları okudu. Sabah ikisini de imzalamanı istedi. “Yedek de,” dedi. “Ne olur ne olmaz. Seni kaybedersem bir yerde olmalısın.” Onu kırmadın. Bir yerde olmak ile burada olmak arasındaki farkı ona anlatamadın."),
"Bir gece Mira mutfakta, ders kitaplarının arasında. Sınavlarına üç ay var. Kalemini bırakıp sana bakıyor.",
"“Baba,” diyor. “Sinirsel aşamaya gelince ne olacak? Lale Hanım bir şeylerin kaybolabileceğini söyledi. Ya annemi unutursan?”",
"Sesi sakin ama elleri değil.",
"“Ben annemi pek hatırlamıyorum,” diyor. “On bir yaşındaydım. Yüzünü fotoğraflardan biliyorum. Sesini artık bilmiyorum. Onu en iyi sen hatırlıyorsun. Sen de unutursan, o tamamen gider.”",
"Bir süre susuyor. “Annemle nasıl tanıştınız? Hiç düzgün anlatmadın.”",
"Selma bir gün dükkâna bozuk bir kol saatiyle gelmişti. Saat bozuk değildi, yalnızca kurulmamıştı. Bunu ona söylediğinde kızardı. Ertesi hafta yine geldi; aynı saat, yine kurulmamış. Üçüncü hafta sen sordun: “Bu saati bilerek mi kurmuyorsunuz?” “Evet,” dedi. Bu kadar."
], secenekler: [
{ t: "Mira'ya her şeyi en ince ayrıntısına kadar anlatırsın. Sen unutsan bile o hatırlasın.", to: "y5", etki: { bag: 1, anlatti: true } },
{ t: "“Unutmayacağım,” dersin. Bilmeden.", to: "y5", etki: { koruma: 1, soz: true } },
{ t: "“Unutursam, unuttuğumu da unuturum. Acı çekmem,” dersin.", to: "y5", etki: { kabul: 1 } },
{ t: "Hiçbir şey söylemezsin. Onu Selma'nın eski kol saatinin yanına götürür, birlikte kurarsınız.", to: "y5", etki: { bag: 1, saat_kurdu: true } }
]},

y5: { baslik: "Bedel", metin: [
P(S("y4bA"), "Bir saat boyunca anlattın. Kızarık yanakları, saatin markası, o gün yağan yağmur, Selma'nın şemsiyesini dükkânda unutup bir dahaki gelişe bahane yapması. Mira not almadı; dinledi. Anlatırken bir şey fark ettin: bazı ayrıntıları uyduruyordun. Nerede hatırladığın bitip nerede kurduğun başlıyor, bilemedin."),
P(S("y4bB"), "“Unutmayacağım,” dedin. Mira başını salladı, sana inanmak istedi. İkiniz de bunun bir söz değil, bir dua olduğunu biliyordunuz."),
P(S("y4bC"), "Mira yüzüne baktı. “Ama ben hatırlarım,” dedi. “Senin unuttuğunu ben hatırlarım. Acıyı ben çekerim.” Bu cümle seni yıllarca takip edecek."),
P(S("y4bD"), "Selma'nın saati çekmecede, altı yıldır durmuş. Mira kurdu, sen ayarladın. Saat çalışmaya başladı. İkiniz de bir şey söylemediniz; bir süre ikiniz de o sesi dinlediniz. Tik. Tak."),
"Kış geliyor. Bir sabah aynanın karşısında kendi adını bir an hatırlayamıyorsun. Yalnızca bir an. Sonra geliyor: Yusuf. Ama o bir an, içinde açık kalmış bir kapı gibi.",
"Kurum'un üçüncü mektubu: “Sinirsel aşama.” Lale bu kez seni farklı bir odaya alıyor. Duvarlar daha koyu.",
"“Şunu açıkça söylemem gerek,” diyor. “Yeni sinir dokusu her şeyi taşıyabilir, ama aktarım sırasında bir şeyin bırakılması gerekiyor. Kapasite meselesi. Büyük, birbirine bağlı bir anı kümesi. Hangisi olacağını siz seçersiniz. Seçmezseniz sistem seçer.”",
"“Seçenekler,” diyor ve bir kâğıt uzatıyor. Kâğıtta üç satır var. Selma'ya dair her şey: tanışmanız, evliliğiniz, ölümü. Mira'nın çocukluğu: doğumundan on iki yaşına kadar. Ya da kendi çocukluğun: babanın dükkânı, babanın elleri, babanın ölümü.",
"“Bir de dördüncü seçenek var,” diyor Lale, daha sessiz. “Sinirsel değişimi reddedebilirsiniz. O zaman hastalık doğal seyrinde ilerler. Anılarınız gider, ama sizin seçmediğiniz bir sırayla. Rastgele. Ve sonunda...” Cümleyi bitirmiyor."
], secenekler: [
{ t: "Selma'yı bırakırsın.", to: "dg1", etki: { kayip: "selma", kabul: 1 } },
{ t: "Mira'nın çocukluğunu bırakırsın.", to: "dg1", etki: { kayip: "mira", kabul: 1 } },
{ t: "Kendi çocukluğunu bırakırsın: babanı, dükkânı, her şeyin başladığı yeri.", to: "dg1", etki: { kayip: "cocukluk", kabul: 1 } },
{ t: "Reddedersin. Ne gidecekse kendi sırasıyla gitsin. Sen sen olarak öleceksin.", to: "r1", etki: { koruma: 2, ret: true } }
]},

/* ---------- DEĞİŞİM KOLU ---------- */
dg1: { baslik: "Uyanış", metin: [
"Uyandığında oda beyaz ve sessiz. Kendini iyi hissediyorsun. Çok iyi. Zihnin hiç olmadığı kadar berrak; bir saatin bütün dişlilerini aynı anda görebiliyormuşsun gibi.",
"Adın Yusuf. Elli üç yaşındasın. Saat tamircisisin. Bunları hiç çaba harcamadan biliyorsun. Neyin eksik olduğunu bilmiyorsun. Eksik olan şeyin yeri, insanın bildiği bir şey değil.",
P(function(d){ return d.kayip === "selma"; }, "Mira yatağının yanında. Gözleri kızarık. Bir süre seni izliyor, sonra soruyor: “Baba. Annemle nerede tanıştınız?” Cevap hemen geliyor: “Dükkânda. Kurulmamış bir saatle geldi.” Doğru cümle. Ama içinde hiçbir şey yok. Bir ansiklopediden okuyor gibisin. Kadının yüzü bir fotoğraf, adı bir kelime: Selma. Kim olduğunu biliyorsun. Onu sevdiğini biliyorsun; çünkü biri sana söyledi."),
P(function(d){ return d.kayip === "mira"; }, "Mira yatağının yanında. On yedi yaşında bir kız; kızın olduğunu biliyorsun ve onu seviyorsun, bu değişmedi. Ama bir şey soruyor: “Baba, bana bisiklete binmeyi öğrettiğin gün ne demiştin?” Bilmiyorsun. Mira'nın on iki yaşından önceki hayatı bir boşluk. Karşındaki genç kadını tanıyorsun; o küçük kızı hiç tanımadın."),
P(function(d){ return d.kayip === "cocukluk"; }, "Mira yatağının yanında. Onu tanıyorsun; Selma'yı hatırlıyorsun, her şeyi. Ama sağ elini kaldırıp büyüteci düşünüyorsun ve büyütecin kimden kaldığını bilmiyorsun. Dükkânın ne zaman açıldığını, sabrı kimden öğrendiğini. Arkanda bir yol vardı; artık yalnızca nereden başladığını bilmediğin bir yürüyüş var."),
P(function(d){ return d.anlatti && d.kayip === "selma"; }, "Sonra Mira anlatmaya başlıyor. Bir zamanlar senin ona anlattığın hikâyeyi: kızarık yanaklar, yağmur, unutulan şemsiye. Kendi hikâyeni kızının ağzından duyuyorsun. Ayrıntıları biliyorsun artık. Ama bilmek, hatırlamak değil."),
"Mira'nın sana bakışında bir şey var: arıyor. Yüzünde, sesinde, bir şeyin hâlâ orada olup olmadığını."
], secenekler: [
{ t: "Mira'ya dürüstçe söylersin: kaybettiğin şeyi hissetmiyorsun bile.", to: "dg2", etki: { bag: 1, durust: true } },
{ t: "Hatırlıyormuş gibi yaparsın. Onu üzmemek için.", to: "dg2", etki: { rol: true } },
{ t: "Kayıp olanı yeniden öğrenmek istediğini söylersin: anlatsın, sen yeniden ezberle.", to: "dg2", etki: { kabul: 1, yeniden: true } },
{ t: "Kaybettiğin şeyi umursamadığını fark edersin ve bu seni her şeyden çok korkutur.", to: "dg2", etki: { koruma: 1, korku: true } }
]},

dg2: { yonlendir: [
{ if: function(d){ return d.yedek; }, to: "ik1" },
{ to: "dg3" }
]},

dg3: { baslik: "Son Yüzde On", metin: [
P(S("dg1A"), "“Hiçbir şey hissetmiyorum,” dedin. Mira'nın yüzü düştü, sonra toparlandı. “En azından dürüstsün,” dedi. “Dürüstlük kalmış.” Bunu bir iltifat gibi söylemedi."),
P(S("dg1B"), "Hatırlıyormuş gibi yaptın. Mira'nın yüzü aydınlandı. O akşam, o gün ve ondan sonraki her gün, bir rol oynamaya başladın: eski Yusuf'u, onun en iyi bildiği kişi olarak. Ne kadar iyi oynadığını fark ettikçe korktun. Belki eski Yusuf da bir roldü."),
P(S("dg1C"), "Mira her akşam anlatıyor, sen dinliyorsun. Hikâyeler yerine oturuyor; boşluk, kelimelerle doluyor. Ama yeni öğrendiğin bir anının, eskisinin yerini tutup tutmadığını bilmiyorsun. Bir saatin kopyalanmış dişlisi, eskisi gibi döner; ama eskisi değildir. Değil midir?"),
P(S("dg1D"), "Kaybettiğin şeyi umursamıyorsun. Ve bu umursamazlık sana bir şey anlatıyor: yeni sen, eski senin acısını taşımıyor. Belki daha mutlu. Ama eski sen, şu an burada olsaydı, buna nasıl bakardı?"),
"Altı ay geçiyor. Başka parçalar da değişiyor: ciğerler, bir göz, bir kulak. Lale her ziyarette bir yüzde söylüyor. Bugün: doksan.",
"“Kalan yüzde on,” diyor Lale, “beyninizin derin bir bölgesi. Hastalık oraya da ulaştı. Son bir işlem önerebiliriz. Ondan sonra yüzde yüz Kurum dokusu olacaksınız. Hiçbir şeyi kaybetmezsiniz; işlemin bu bölümünde kayıp yok.”",
"“Peki o yüzde on,” diyorsun. “Benim en son orijinal parçam. Orada ne var?”",
"Lale bir süre düşünüyor. “Bilmiyoruz,” diyor. “Belki hiçbir şey. Belki her şey. Birine sorsanız bir şey der, öbürüne başka. Bizim ölçebildiğimiz bir şey değil.”",
"Pencere hiçbir şeye bakmıyor. Kendi yansımanı görüyorsun. Elli üç yaşında bir adam. Ya da elli üç yıllık bir adamın, yüzde doksanı yenilenmiş bir devamı."
], secenekler: [
{ t: "Kabul edersin. Yüzde yüz. Bir eşiği geçmek, ötekileri geçmekten farklı değil.", to: "dg3b", etki: { kabul: 1, tam: true } },
{ t: "Reddedersin. O yüzde on ne olursa olsun, sende kalacak; çürüse bile.", to: "dg3b", etki: { koruma: 1, son_on: true } },
{ t: "Eve gidip Mira'ya sorarsın: “Ben hâlâ senin baban mıyım?”", to: "dg3b", etki: { bag: 1, mira_sordu: true } },
{ t: "Lale'den o yüzde onun içinde ne olduğunu bulmasını istersin, ne pahasına olursa olsun.", to: "dg3b", etki: { koruma: 1, arastir: true } }
]},

dg3b: { baslik: "Kaset", metin: [
P(S("dg3A"), "İşlemi yaptırdın. Uyandığında hiçbir şey değişmemişti. Bu en tuhafıydı: bir eşik geçtin ve eşiğin öbür tarafı, berisiyle aynıydı. Belki hiç eşik yoktu. Belki baştan beri yoktu."),
P(S("dg3B"), "Reddettin. Lale itiraz etmedi. O yüzde on, beyninin derin bir köşesinde, yavaşça sönüyor. Her gün biraz daha az. Ne kaybettiğini bilmeden, bir şeyin gittiğini hissediyorsun."),
P(S("dg3C"), "Mira uzun süre sustu. “Bilmiyorum baba,” dedi sonunda. “Ama sen bana baba diye bakıyorsun. Ben de sana öyle bakıyorum. Belki baba olmak böyle bir şey. Bir anlaşma.”"),
P(S("dg3D"), "Lale aylarca uğraştı. Sonunda bir rapor getirdi: “Bir ses,” dedi. “Yüzde onun içinde bulabildiğimiz en tutarlı iz bir ses. Bir kadın sesi, bir şarkı mırıldanıyor. Kim olduğunu bilmiyoruz.” Sen de bilmiyorsun. Ama o ses, şu an, her şeyden daha yakın."),
"Bir gün dolabı temizlerken bir kutu buluyorsun. Eski bir video kaseti. Üzerinde Selma'nın el yazısı: “Mira, 6 yaş, deniz.”",
"Kaseti oynatıyorsun. Ekranda bir sahil. Küçük bir kız dalgalardan kaçıyor, gülüyor. Kamerayı tutan kadının sesi: “Yusuf, bak, bak!” Sonra kamera dönüyor ve ekranda sen varsın. Genç, güneşte, kumların içinde, kızını havaya kaldırıyorsun.",
P(function(d){ return d.kayip === "selma"; }, "O sesi tanımıyorsun. Karın bu. Seni “Yusuf” diye çağıran ses. Hiçbir şey hissetmiyorsun ve hiçbir şey hissetmemek, ekrandaki adamın sen olmadığını söylüyor."),
P(function(d){ return d.kayip === "mira"; }, "Bu kızı tanımıyorsun. Mira bu. Senin kızın, altı yaşında. Ekrandaki adam onu seviyor; bu açık. Sen o adamın sevgisini izliyorsun, bir yabancının mutluluğunu izler gibi."),
P(function(d){ return d.kayip === "cocukluk"; }, "Her şeyi hatırlıyorsun: o günü, o sahili, Selma'nın sesini. Ama ekrandaki adamın elindeki saat, babandan kalan saat; ve sen babanın yüzünü hatırlamıyorsun. Ekrandaki adam, kendisinden önce gelen birini taşıyor; sen yalnızca onu taşıyorsun."),
"Kaset bitiyor. Ekran mavi. Mira kapıda duruyor; ne zamandır orada olduğunu bilmiyorsun."
], secenekler: [
{ t: "Mira'ya ekrandaki adamın sen olup olmadığını bilmediğini söylersin.", to: "dg4", etki: { bag: 1, durust: true } },
{ t: "Kaseti başa sarıp bir daha izlersin. Ve bir daha.", to: "dg4", etki: { koruma: 1 } },
{ t: "Kaseti Mira'ya verirsin: “Bu artık senin.”", to: "dg4", etki: { bag: 1 } },
{ t: "Ekrandaki adama karşı hiçbir şey hissetmediğini kabul eder, kaseti kutusuna geri koyarsın.", to: "dg4", etki: { kabul: 1 } }
]},

dg4: { baslik: "Dedenin Saati", metin: [
P(S("dg3bA"), "“Bilmiyorum,” dedin. Mira yanına oturdu. “Ben de bilmiyorum,” dedi. “Ama ekrandaki kızın ben olduğunu biliyorum ve onu da hatırlamıyorum. Altı yaşımı hiç hatırlamıyorum. Yani bir bakıma, ikimiz de o kasette yabancıyız.”"),
P(S("dg3bB"), "Kaseti beş kez izledin. Her seferinde bir şey hissetmeye çalıştın; her seferinde hissetmeye çalıştığını hissettin. Bir anıyı izlemek ile onu yaşamış olmak arasında bir duvar var ve o duvar, ne kadar izlersen izle, yerinde."),
P(S("dg3bC"), "Mira kaseti aldı, göğsüne bastırdı. “Teşekkür ederim,” dedi. Bir babadan bir anı aldı; ama o anının sahibi artık babası mı, kendisi mi?"),
P(S("dg3bD"), "Kaseti kutusuna geri koydun. Hafif bir rahatlama. Bu rahatlamanın ne söylediğini düşünmek istemiyorsun."),
"Bir öğleden sonra dükkânın kapısı açılıyor. Ece. Artık on üç yaşında. Bir yıl önce dedesinin saatini getirmişti.",
"O saati bir yıl boyunca tamir ettin. Önce yay değişti. Sonra bir dişli. Sonra denge çarkı, sonra kadran camı, sonra akrep. Her ay bir şey bozuldu ve her ay bir parça değişti. Şimdi saatin içinde orijinal tek bir parça kalmadı. Ama aynı kasada, aynı ritimle çalışıyor. Tik, tak.",
"Ece saati alıyor, kulağına götürüyor. Gülümsüyor. Sonra bir şey fark ediyor: kadranın kenarında, dedesinin yaptığı küçük bir çizik yok. Cam değişmiş.",
"Sana bakıyor. “Amca,” diyor. “Bu hâlâ dedemin saati mi?”"
], secenekler: [
{ t: "“Evet. Aynı kasada, aynı ritimle çalışıyor. Bir saat parçalarından ibaret değil.”", to: "n1", etki: { kabul: 1, ece: "evet" } },
{ t: "“Hayır. Dedenin saati, değiştirdiğim parçaların kutusunda.”", to: "n1", etki: { koruma: 1, ece: "hayir" } },
{ t: "“Sen onu dedenin saati diye taşıdıkça, öyle.”", to: "n1", etki: { bag: 1, ece: "sen" } },
{ t: "“Bilmiyorum, kızım. Gerçekten bilmiyorum.”", to: "n1", etki: { ece: "bilmem" } }
]},

/* ---------- İKİNCİ KOLU ---------- */
ik1: { baslik: "Kapıdaki Adam", metin: [
P(S("dg1A"), "“Hiçbir şey hissetmiyorum,” dedin Mira'ya. O gece Mira odasında uzun süre ağladı. Ertesi sabah kapı çalındı."),
P(S("dg1B"), "Hatırlıyormuş gibi yaptın ve Mira inandı. Ya da inanmak istedi. Bir hafta boyunca bir rol oynadın. Sonra kapı çalındı."),
P(S("dg1C"), "Mira her akşam anlatmaya başladı; sen ezberledin. Bir hafta sonra, bir akşam, kapı çalındı."),
P(S("dg1D"), "Kaybettiğin şeyi umursamamak içini ürpertti. Bunu kimseye söylemedin. Bir hafta sonra kapı çalındı."),
"Kapıyı Mira açıyor. Sonra bir ses çıkarıyor; çığlık değil, nefesin yanlış yere gitmesi gibi bir ses.",
"Kapıda bir adam duruyor. Senin yüzün. Biraz daha genç görünüyor; teni daha düzgün, omuzları daha dik. Ama senin yüzün. Senin duruşun. Ve sağ elini, senin her zaman yaptığın gibi, başparmağını işaret parmağına sürterek tutuyor.",
"“Mira,” diyor. Sesi seninki. “Kızım.”",
"Sonra sana bakıyor. Uzun süre. Bir aynaya bakar gibi değil; bir aynanın kendisine bakar gibi.",
"“Kurum'da bir hata olmuş,” diyor. “Senin sinirsel işlemin sırasında, birkaç saat boyunca kayıtlarda “kaybedildi” olarak görünmüşsün. Protokol yedeği yedek bir bedende uyandırmış. Ben. Uyandığımda her şeyi hatırlıyordum.” Durakladı. “Her şeyi.”",
P(function(d){ return d.kayip === "selma"; }, "Ve sonra, sana değil, Mira'ya bakarak: “Annenin şemsiyesini dükkânda unuttuğu günü hatırlıyorum. Yağmur yağıyordu. Kırmızı bir şemsiyeydi.” Mira'nın yüzü değişiyor. Sen bunu hatırlamıyorsun. O hatırlıyor."),
P(function(d){ return d.kayip === "mira"; }, "Ve sonra, sana değil, Mira'ya bakarak: “Bisiklete binmeyi öğrendiğin gün, düşmekten korkuyordun. Sana ‘Ben arkadayım’ dedim ve bıraktım. Sen pedal çevirirken dönüp baktın ve ben çok uzaktaydım. Ağlamadın. Güldün.” Mira'nın gözleri doluyor. Sen bunu hatırlamıyorsun. O hatırlıyor."),
P(function(d){ return d.kayip === "cocukluk"; }, "Ve sonra, sana bakarak: “Babamızın elleri. Sabahları tezgâhı silerken mırıldandığı şarkı. Sen onu artık bilmiyorsun, değil mi?” Bilmiyorsun. O biliyor."),
"Mira ikinizin arasında duruyor. Kapı hâlâ açık. Kış rüzgârı içeri doluyor."
], secenekler: [
{ t: "Onu içeri alırsın. Kim olursa olsun, kapıda bırakılmaz.", to: "ik2", etki: { kabul: 1, iceri: true } },
{ t: "Kapıyı kapatır, Kurum'u ararsın.", to: "ik2", etki: { koruma: 1, kurum_aradi: true } },
{ t: "Ona sorarsın: “Senin için ben kimim?”", to: "ik2", etki: { soru: true } },
{ t: "Mira'ya bakarsın. Bu kapıda ne olacağına o karar versin.", to: "ik2", etki: { bag: 1, mira_kapi: true } }
]},

ik2: { baslik: "İki Baba", metin: [
P(S("ik1A"), "Onu içeri aldın. Mutfak masasına oturdu; senin sandalyene, hiç düşünmeden. Sonra fark edip kalktı. “Pardon,” dedi. Kendi evinde, kendine özür diledi."),
P(S("ik1B"), "Kapıyı kapattın. Kurum'u aradın. Kapının öbür tarafında adam bekliyordu; çalmadı, gitmedi. Mira pencereden onu izledi ve bir saat sonra, sana sormadan, kapıyı açtı."),
P(S("ik1C"), "“Senin için ben kimim?” diye sordun. Uzun süre düşündü. “Bilmiyorum,” dedi. “Sanırım ben, senin olabileceğin kişiyim. Ya da senin olduğun kişi. Ya da sen, benim olduğum kişiden bir şey eksiği.”"),
P(S("ik1D"), "Mira ikinize de baktı. Sonra kenara çekildi ve adamın içeri girmesine izin verdi. Kararı o verdi; ama sana bakmadan değil."),
"Ertesi gün Lale geliyor. Yüzü solgun, elinde bir dosya. Kurum adına özür diliyor; uzun, dikkatli, yasal cümlelerle.",
"“Ancak bir sorunumuz var,” diyor. “Kemerli'de bir kişi yalnızca bir kez kayıtlı olabilir. Yusuf Taner adına yalnızca bir kimlik, bir ev, bir velayet. Biriniz bu kimliği taşıyacak. Öteki yeni bir adla yaşayabilir, başka bir şehirde. Ya da...” Durakladı. “Yedek, talep edilirse arşive geri alınabilir. Acısız. Uyku gibi.”",
"“Hangimiz?” diye soruyor öteki.",
"“Kurum'un görüşü,” diyor Lale, “bedensel süreklilik. Bu beden, bu süreç, kesintisiz. Yani siz.” Sana bakıyor. Sonra ötekine. “Ama hukuk müşavirimiz başka bir görüşte: zihinsel süreklilik. Bütün anılar, eksiksiz. Yani siz.”",
"Mira köşede duruyor. Kollarını göğsünde kavuşturmuş, iki babasına bakıyor.",
P(function(d){ return d.kayip === "mira"; }, "Biri onun çocukluğunu hatırlıyor. Biri hatırlamıyor."),
P(function(d){ return d.kayip === "selma"; }, "Biri annesini hatırlıyor. Biri hatırlamıyor."),
P(function(d){ return d.kayip === "cocukluk"; }, "İkisi de onu hatırlıyor. Ama yalnızca biri, kendisinin nereden geldiğini.")
], secenekler: [
{ t: "Sen kalırsın, o gider. Bu beden, bu süreç, bu hayat senin.", to: "ik3", etki: { koruma: 1, ikinci: "gitti" } },
{ t: "O kalsın, sen gidersin. Mira'nın ihtiyacı olan, eksiksiz olan.", to: "ik3", etki: { kabul: 1, bag: 1, ikinci: "kaldi" } },
{ t: "İkiniz de kalırsınız, Kurum'a rağmen. Mira'nın iki babası olur.", to: "ik3", etki: { bag: 1, ikinci: "ikisi" } },
{ t: "Mira seçsin.", to: "ik3", etki: function(d){ d.bag++; d.ikinci = (d.kayip === "mira" || d.kayip === "selma") ? "kaldi" : "gitti"; d.mira_secti = true; } }
]},

ik3: { baslik: "Ayna", metin: [
P(function(d){ return d.mira_secti && d.ikinci === "kaldi"; }, "Mira uzun süre ikinize baktı. Sonra ötekinin yanına geçti. “Özür dilerim,” dedi sana. “Sen de babamsın. Ama o... o beni hatırlıyor.” Ağlamadı. Sesindeki kararlılık, annesininkiydi. Bunu bilen yalnızca öteki."),
P(function(d){ return d.mira_secti && d.ikinci === "gitti"; }, "Mira uzun süre ikinize baktı. Sonra senin yanına geçti. Ötekine döndü: “Sen her şeyi hatırlıyorsun,” dedi. “Ama bu son bir yılı ben onunla yaşadım. Elini değiştirdiğini, kalbini değiştirdiğini, unuttuğunu. Sen bunları bilmiyorsun. Sen onun dünkü hâlisin.”"),
P(function(d){ return !d.mira_secti && d.ikinci === "gitti"; }, "Ötekine gitmesini söyledin. Başını salladı. İtiraz etmedi; belki itiraz etmemeyi senden öğrenmişti, ya da sen ondan. Lale'ye yeni bir ad seçeceğini söyledi. Başka bir şehir."),
P(function(d){ return !d.mira_secti && d.ikinci === "kaldi"; }, "Gideceğini söyledin. Mira itiraz etti, ağladı, sonra sustu. Öteki hiçbir şey söylemedi. Yalnızca sana baktı ve sen o bakışta, kendini nasıl göründüğünü ilk kez gördün."),
P(function(d){ return d.ikinci === "ikisi"; }, "Kurum'a hayır dediniz. Lale bir süre sessiz kaldı, sonra dosyasını kapattı. “Bu konuda bir yönetmeliğimiz yok,” dedi. “Hiç olmadı. Kimse istemedi.” Bir yasa boşluğunda, iki kişi aynı adı taşıyacak."),
"O gece mutfakta ikiniz kalıyorsunuz. Mira uyuyor ya da uyuyormuş gibi yapıyor. Masada iki çay bardağı. İkiniz de bardağı aynı şekilde tutuyorsunuz; sağ elle, başparmak kulpun üstünde.",
"Öteki bir şey anlatmaya başlıyor. Senin kaybettiğin anıyı. Yavaşça, ayrıntılarıyla. Sesinde hiçbir kibir yok; yalnızca bir şeyi geri vermeye çalışan birinin özeni.",
"Dinlerken fark ediyorsun: kendi hayatının bir parçası sana bir başkasının ağzından geliyor. Ve o başkası, senin sesinle konuşuyor.",
"Bir an, ikinizden hangisinin asıl olduğu sorusu anlamını yitiriyor. Belki baştan beri “asıl” diye bir şey yoktu. Belki yalnızca devam eden şeyler vardı ve devam etmek, birden fazla yöne gidebiliyordu."
], secenekler: [
{ t: "Ondan anıyı baştan, eksiksiz anlatmasını istersin.", to: "n1", etki: { kabul: 1, dinledi: true } },
{ t: "Durdurursun. “Bu anı artık senin,” dersin. “Ben onsuz devam edeceğim.”", to: "n1", etki: { koruma: 1 } },
{ t: "Kalkıp ona sarılırsın.", to: "n1", etki: { bag: 1, sarildi: true } },
{ t: "Ona babandan kalan büyüteci verirsin. Hangisinde kalacağına o karar versin.", to: "n1", etki: { bag: 1, buyutec: true } }
]},

/* ---------- RET KOLU ---------- */
r1: { baslik: "Kendi Sırasıyla", metin: [
"“Reddediyorum,” diyorsun. Lale bir süre sessiz kalıyor, sonra kâğıdı geri çekiyor. “Kurum kimseyi zorlamaz,” diyor. Kemerli'de herkesin bildiği bir cümle. “Yalnızca bekler.”",
"Eve dönüyorsun. Mira mutfakta. Kararını söylüyorsun. Önce susuyor, sonra öfkeleniyor, sonra ağlıyor, sonra tekrar susuyor.",
"“Seçebilirdin,” diyor. “Bir şeyi bırakırdın ama geri kalanı kalırdı. Şimdi her şey gidecek. Hangi sırayla gideceğini bile bilmeyeceğiz.”",
"Haklı. Ama sen de bir şey biliyorsun: hangi anıyı bırakacağını seçmek, kendi kendini budamaktı. Neyin değerli olduğuna karar vermek, geri kalanın değersiz olduğuna karar vermekti. Sen hiçbir şeyi değersiz ilan etmedin. Hepsini kaybedeceksin ama hiçbirini ele vermedin.",
"Bu bir ilke mi, yoksa inat mı? Gece yatakta tavana bakarken bunu bilmiyorsun.",
"Bir hafta sonra anahtarlarını kapının dışında bırakıyorsun. İki hafta sonra Ece'nin adını hatırlayamıyorsun; Ece kapıdan girene kadar. Bir ay sonra bir sabah bir kelime kayboluyor: “şemsiye.” Bir gün boyunca o şeyi tarif ediyorsun, yağmurda açılan, ama adını bulamıyorsun.",
"Ve “şemsiye” kelimesiyle birlikte bir şey daha titreşiyor, gitmek üzere: kırmızı, bir dükkânda unutulmuş."
], secenekler: [
{ t: "Bir defter tutmaya başlarsın. Her gün, hatırladığın her şeyi yazarsın.", to: "r2", etki: { koruma: 1, defter: true } },
{ t: "Mira'dan seni kaydetmesini istersin: sesini, anlattıklarını, yüzünü.", to: "r2", etki: { bag: 1, kayit: true } },
{ t: "Hiçbir şey yapmazsın. Ne gidiyorsa gitsin. Unutmak da hayatın bir parçası.", to: "r2", etki: { kabul: 1, birak: true } },
{ t: "Necmi'ye gidip, öldüğünde bedenini ona bağışlamak istediğini söylersin.", to: "r2", etki: { kabul: 1, necmi_soz: true } }
]},

r2: { baslik: "Mira'nın Defteri", metin: [
P(S("r1A"), "Defterin ilk sayfasına yazdın: “Adım Yusuf. Elli üç yaşındayım. Kızım Mira. Karım Selma, öldü.” Sonra her gün bir sayfa. Bir ay sonra ilk sayfayı okuduğunda, kendi el yazını tanıdın ama cümleleri tanımadın. Biri sana senin hayatını anlatıyordu ve o biri sendin."),
P(S("r1B"), "Mira her akşam telefonu masaya koydu ve sen anlattın. Babanı, dükkânı, Selma'yı, onun çocukluğunu. Bazı geceler aynı hikâyeyi iki kez anlattın; Mira seni durdurmadı. Kayıtlar birikiyor. Bir gün onlar senden daha çok sen olacak."),
P(S("r1C"), "Hiçbir şey yapmadın. Kayboluşu izledin, bir sonbahar ağacını izler gibi. Bazı günler hafif, bazı günler korkunç. Gitmesine izin vermenin bir tür huzuru var; ama o huzurun içinde, giden şeyin ne olduğunu bilmemenin derin bir serinliği."),
P(S("r1D"), "Necmi seni dinledi, başını salladı. “Bütün olarak,” dedi. “Hiç bütün bir insan almamıştım.” Gözleri parladı. Sonra söndü. “Ama seni bütün olarak alacağım zaman, sen artık sen olmayacaksın. Hatıraların gitmiş olacak. Bana boş bir saat kasası bırakacaksın.”"),
"Aylar geçiyor. Mira sınavlarını verdi; sonucunu ona üç kez sordun, her seferinde sevinçle.",
"Bir sabah mutfakta Mira'yı buluyorsun; bir defterin başında. Senin değil, kendi defteri. Kalın, mavi kapaklı. Sayfa sayfa yazı.",
"“Ne yazıyorsun?” diye soruyorsun.",
"Mira bir süre bakıyor. “Seni,” diyor. “Sen unuttukça ben yazıyorum. Senin anlattıklarını, benim hatırladıklarımı, annemin dediklerini. Bir gün sen hiçbir şeyi hatırlamadığında, ben sana senin hayatını okuyacağım. Bir masal gibi.”",
"Defteri sana uzatıyor. Ortalardan bir sayfa açıyorsun. Mira'nın yuvarlak el yazısıyla: “Babam bana bisiklete binmeyi öğrettiği gün, ‘Ben arkadayım’ dedi ve bıraktı. Döndüğümde çok uzaktaydı.”",
"Bu anıyı hatırlamıyorsun artık. Ama kızının el yazısında okuyorsun ve bir şey kıpırdıyor; bir anı değil, bir anının gölgesi."
], secenekler: [
{ t: "Defteri ondan istersin. Her gece kendin okuyacaksın.", to: "r3", etki: { koruma: 1, mira_defter: true } },
{ t: "Mira'ya yazmayı bırakmasını söylersin: “Sen kendi hayatını yaşa. Benimkini değil.”", to: "r3", etki: { bag: 1, birak_mira: true } },
{ t: "Mira'dan defteri sesli okumasını istersin. Şimdi. Hatırlarken.", to: "r3", etki: { bag: 1, okudu: true } },
{ t: "Defteri kapatıp geri verirsin. O sayfalardaki adamı tanımaya hazır değilsin.", to: "r3", etki: { koruma: 1 } }
]},

r3: { baslik: "Yabancı Yüz", metin: [
P(S("r2A"), "Defter artık başucunda. Her gece okuyorsun. Bazı geceler gülüyorsun, bazı geceler ağlıyorsun, bazı geceler hiçbir şey hissetmiyorsun ve bu en kötüsü."),
P(S("r2B"), "Mira itiraz etti. “Bu benim hayatım,” dedi. “Seni yazmak benim hayatım.” Haklıydı ya da değildi; ama yazmaya devam etti. Sen de bir daha söylemedin."),
P(S("r2C"), "Mira okudu. Bir saat, iki saat. Sesini dinledin. Bir yerde sustu, çünkü sen ağlıyordun. “Devam et,” dedin. Ne için ağladığını bilmiyordun. Belki hatırladığın için. Belki hatırlamadığın için."),
P(S("r2D"), "Defteri geri verdin. Mira kapattı, göğsüne bastırdı. “Bekleyeceğim,” dedi."),
"Kışın ortasında bir sabah uyanıyorsun ve mutfakta genç bir kadın var. Kahve yapıyor. Sana dönüp gülümsüyor: “Günaydın baba.”",
"Bir an. Yalnızca bir an. Ama o an boyunca bu kadının kim olduğunu bilmiyorsun. Yüzü tanıdık bir manzara gibi ama ne zaman, nerede görüldüğü belli değil.",
"Sonra geliyor. Mira. Kızın. Ama o bir an olmuştu ve Mira bunu yüzünden okudu. Elindeki fincan titredi. Kahve dökülmedi; ama neredeyse.",
"“Baba,” diyor. Sesi kırık. “Beni tanıdın mı?”",
"Bu sorunun cevabı “evet”. Ama cevap gelmeden önceki o boşluk, ikinizin arasına bir şey yerleştirdi. Bir daha bu soruyu sormadan sana bakamayacak."
], secenekler: [
{ t: "“Tanıdım,” dersin. Ve o bir anı hiç anmazsın.", to: "r4", etki: { koruma: 1, gizledi: true } },
{ t: "“Bir an tanımadım,” dersin. “Ama sonra tanıdım. Hep tanıyacağım, bir gün tanımasam bile.”", to: "r4", etki: { bag: 1, durust: true } },
{ t: "Kurum'u aramayı düşünürsün; belki geç değildir.", to: "r4", etki: { kabul: 1, pisman: true } },
{ t: "Kalkıp ona sarılırsın. Kelimelere güvenmiyorsun artık.", to: "r4", etki: { bag: 1, sarildi: true } }
]},

r4: { baslik: "Berrak Gün", metin: [
P(S("r3A"), "“Tanıdım,” dedin. Mira sana inandı. Ya da inanmayı seçti. Kahveyi bıraktı, sana sarıldı. Omzunun üstünden, mutfağın penceresinden, karla kaplı erik ağacına baktın."),
P(S("r3B"), "Mira bir süre sustu. Sonra güldü; gözleri dolu, ama güldü. “Bir gün tanımasan bile,” dedi. “Bu iyi bir cümle. Bunu deftere yazacağım.”"),
P(S("r3C"), "Kurum'u aradın. Lale sesini tanıdı. “Sinirsel işlem için çok geç,” dedi, nazikçe. “Kaybedilen doku geri getirilemez. Kalanı değiştirebiliriz ama kalan, artık çok az.” Telefonu kapattın. Bir yolun kapandığını bilmek, onu kendin kapatmış olmaktan daha mı ağır?"),
P(S("r3D"), "Ona sarıldın. Mira'nın saçları kahve ve sabun kokuyordu. Bu kokuyu hatırlıyorsun. İsmini bir an unuttuğun kızının kokusunu hatırlıyorsun. Zihin, hiç kimseye sormadan, neyi tutacağını kendi seçiyor."),
"Bahara doğru bir sabah uyandığında her şey berrak. Bazen böyle günler oluyor: sis kalkıyor ve geride kalan her şey keskin, renkli, yerli yerinde. Kaybettiklerin geri gelmiyor ama kalanlar parlıyor.",
"Dükkâna gidiyorsun. Uzun zamandır gitmiyordun. Tezgâh tozlu. Büyüteç yerinde. Çekmecede Ece'nin dedesinin saati; hiç teslim edemediğin, yarım kalan.",
"Saati açıyorsun. Ellerin titriyor ama bugün titreme bile tanıdık. Yayı yerine oturtmaya çalışıyorsun. Kayıyor. Bir kez daha. Kayıyor.",
"Kapı açılıyor. Ece. On üç yaşında. Yanında Mira. İkisi de bir şey söylemiyor. Ece tezgâhın öbür tarafına geçip oturuyor. Mira senin yanına.",
"Mira'nın parmakları ince, sabırlı."
], secenekler: [
{ t: "Mira'ya cımbızı verirsin. “Sen tak. Ben söyleyeyim.”", to: "n1", etki: { bag: 1, devretti: true } },
{ t: "Bir kez daha denersin. Kendi elinle. Ne kadar sürerse sürsün.", to: "n1", etki: { koruma: 1, kendi: true } },
{ t: "Saati kapatıp Ece'ye olduğu gibi verirsin: “Bazı saatler durmalı.”", to: "n1", etki: { kabul: 1, durdu: true } },
{ t: "Ece'ye dedesini sorarsın. Saati değil, adamı.", to: "n1", etki: { bag: 1, ece_dede: true } }
]},

/* ---------- ORTAK: NECMİ VE SON ---------- */
n1: { baslik: "Necmi'nin Deposu", metin: [
P(function(d){ return d.son && d.son.indexOf("dg4") === 0; }, "Ece saati cebine koydu ve gitti. Kapıda bir an durdu, döndü, bir şey söyleyecekti, söylemedi. O soruyu artık sen de taşıyorsun; bir saatin değil, bir hayatın sorusu olarak."),
P(function(d){ return d.son && d.son.indexOf("ik3") === 0; }, "Ertesi sabah Necmi kapıyı çaldı. İkinizi birden gördü ve bir süre hiçbir şey söylemedi. Sonra güldü; uzun, garip, neredeyse ağlamaya benzeyen bir kahkaha. “Ben yıllardır bunu yapmaya çalışıyorum,” dedi. “Kurum bir gecede yapmış.”"),
P(S("r4A"), "Mira yayı taktı. Bir denemede. Saat çalışmaya başladı. Ece ağladı, gülerek. Sen bir şey hissettin: kendi ellerinin başka birinin ellerinde devam ettiği bir an."),
P(S("r4B"), "Yirminci denemede yay yerine oturdu. Ellerin bunu bir kez daha yapabildi. Belki son kez. Bu sefer kesin."),
P(S("r4C"), "Ece saati aldı, kulağına götürdü. Sessizlik. “Dedem de durdu,” dedi. “Belki saati de dursun.” Cebine koydu."),
P(S("r4D"), "Ece bir saat boyunca dedesini anlattı. Sen dinledin. Saat tezgâhta açık, yarım kaldı. Bir adamı tanıdın: hiç görmediğin, yalnızca saatini tanıdığın bir adamı."),
"Birkaç gün sonra Necmi seni deposuna çağırıyor. Çarşının en arkasında, eski bir han. İçerisi loş, raflar tavana kadar.",
"Raflarda kavanozlar, kutular, etiketler. Eller, gözler, kalpler, bir kulak, bir dişeti. Her birinin üstünde bir ad ve bir tarih. Kemerli'nin, yenilenirken bıraktığı her şey.",
"Ortada bir masa. Masanın üstünde bir şekil. Bir insan. Ya da bir insanın taslağı. Farklı insanların parçalarından, özenle birleştirilmiş. Hareket etmiyor. Ama bir insanın bütün parçaları yerli yerinde.",
P(function(d){ return d.necmi && d.el === "yeni"; }, "Şeklin sağ eli seninki. Tanıyorsun: başparmağın yanındaki eski kesik, çocukken babanın dükkânında. Elli yıl seninle olan el, şimdi bir başkasının bileğine bağlı."),
"“Bu benim karım,” diyor Necmi. “Yani olmaya çalışıyor. Otuz yıl önce öldü. Kurum yenileyemedi. O günden beri parçaları topluyorum. Onunkileri değil; onunkiler gömüldü. Başkalarınınkileri. Her parça bir başkasının, ama hepsi bir araya gelince... belki.”",
"Bir süre şekle bakıyor. “Ben de yüzde yüz yenilendim,” diyor. “Eski parçalarım şurada, o rafta. Bazen düşünüyorum: hangisi Necmi? Rafta duran mı, burada konuşan mı? Rafta duranın içinde karımı seven adamın kalbi var. Bende yalnızca onu sevdiğimi bilen bir kalp var.”"
], secenekler: [
{ t: function(d){ return d.necmi && d.el === "yeni" ? "Eski elini geri istersin." : "Necmi'ye, şeklin yarım kalmaması için bir parçanı bağışlamayı teklif edersin."; }, to: "n1b", etki: function(d){ if(d.necmi && d.el === "yeni"){ d.koruma++; d.geri_aldi = true; } else { d.kabul++; d.bagisladi = true; } } },
{ t: "Necmi'ye o şekli yakmasını söylersin. Karısı o değil, olamaz.", to: "n1b", etki: { koruma: 1, yak: true } },
{ t: "“O senin karın,” dersin. “Sen öyle sevdiğin sürece.”", to: "n1b", etki: { bag: 1, kabul: 1, onay: true } },
{ t: "Şeklin eline dokunursun. Ne hissedeceğini bilmeden.", to: "n1b", etki: { dokundu: true } }
]},

n1b: { baslik: "Erik Ağacı", metin: [
P(S("n1A"), "Necmi bir süre sustu. Sonra başını salladı ve rafa döndü. Bu ona bir şey kaybettirdi; gözlerinden belliydi. Ama itiraz etmedi. “Herkesin kendi parçası üzerinde hakkı var,” dedi. “Yalnızca, bir parçanın bir bütünden ayrılınca hâlâ kime ait olduğunu düşün. Bir gün.”"),
P(S("n1B"), "Necmi şeklin başında uzun süre durdu. “Belki haklısın,” dedi. “Ama otuz yıl. Otuz yılı yakamam.” Yakmadı. Sen de ısrar etmedin."),
P(S("n1C"), "Necmi sana döndü. Gözleri yaşlı. “Kimse bunu söylemedi,” dedi. “Otuz yılda kimse.” Sonra şeklin saçını, kimin olduğu bilinmeyen o saçı, nazikçe düzeltti."),
P(S("n1D"), "Şeklin eline dokundun. Soğuktu. Hiçbir şey hissetmedin. Ya da şunu hissettin: bir insanın bütün parçaları bir araya gelse bile, onları bir insan yapan şey parçaların arasında, ölçülemeyen bir yerde duruyor. Belki o yer de bir parçadır. Belki hiçbir yer değildir."),
"Eve dönüyorsun. Bahçede, Selma'nın diktiği erik ağacı. Kış bitiyor; dallarda ilk tomurcuklar.",
"Selma bu ağacı Mira doğduğu yıl dikmişti. “Mira büyüdükçe büyüsün,” demişti. Ağaç her yıl budandı, her yıl yenilendi. Kökleri dışında, bugün üzerindeki hiçbir dal, Selma'nın diktiği dal değil. Yine de herkes ona “Selma'nın ağacı” diyor.",
P(function(d){ return d.gomdu; }, "Ağacın dibinde, toprağın altında, eski elin ya da onun sözü duruyor. Bir şeyin bir başka şeyi beslemesi. Belki bu da bir süreklilik biçimi."),
P(function(d){ return d.kayip === "selma"; }, "Selma'yı hatırlamıyorsun. Ama ağacın ona ait olduğunu biliyorsun. Bir ağaç, bir kadını, onu hatırlamayan bir adama hatırlatıyor."),
"Mira mutfak penceresinden sana bakıyor. Sonra çıkıp yanına geliyor. Bir süre ikiniz de konuşmadan ağaca bakıyorsunuz.",
"“Baba,” diyor Mira. “Ölmekten korkuyor musun?”",
P(function(d){ return d.ret; }, "Ret ettiğin günden beri bu soruyu bekliyordun. Hastalık ilerliyor. Doktorlar bir yıl diyor, belki daha az."),
P(function(d){ return !d.ret; }, "Kemerli'de kimse ölmez. Ama bu soruyu soran kızının ne sorduğunu biliyorsun: biten bir şey olup olmadığını. Değişen bir şeyin bir noktada bitip bitmediğini.")
], secenekler: [
{ t: "“Evet,” dersin. “Ama korktuğum şey ölmek değil. Ölmeden önce gitmek.”", to: "n2", etki: { koruma: 1 } },
{ t: "“Hayır,” dersin. “Ben bu ağaç gibiyim. Dallar değişse de kökler yerinde.”", to: "n2", etki: { kabul: 1 } },
{ t: "“Sen buradayken korkmuyorum,” dersin.", to: "n2", etki: { bag: 1 } },
{ t: "“Bilmiyorum,” dersin. “Hangi ben ölecek, onu bilmiyorum.”", to: "n2", etki: { bilinmez: true } }
]},

n2: { baslik: "Son Saat", metin: [
"O gece dükkândasın. Mira da. Dışarıda bahar yağmuru, çarşının taş zemininde.",
"Tezgâhın üstünde babandan kalan cep saati. Elli yıldır senin cebinde. İçinde hiç değişmemiş tek bir parça var: en eski dişli, babanın ellerinin ilk taktığı. Geri kalan her şey yıllar içinde değişti, senin ellerinle.",
P(function(d){ return d.ikinci === "ikisi"; }, "Öteki de burada. Tezgâhın öbür ucunda oturuyor, aynı büyüteçle, aynı sessizlikle. İkiniz aynı saati tamir edebilirsiniz. Belki bu gece bunu deneyeceksiniz."),
P(function(d){ return d.ikinci === "kaldi"; }, "Bu dükkân artık senin değil. Ötekinin. Ona son kez bakmaya geldin. Mira seni yalnız bırakmadı; anahtarı o açtı. Yarın yeni bir adla, yeni bir şehre gideceksin. Bir sen, burada devam edecek."),
P(function(d){ return d.tam; }, "Sen artık yüzde yüz yenisin. Saatin o eski dişlisi, belki de dünyada senden kalan en eski şey."),
P(function(d){ return d.ret; }, "Bugün iyi bir gün. Ellerin titriyor ama zihnin berrak. Böyle günlerin azaldığını biliyorsun."),
"Mira yanında oturuyor. “Bu saat hâlâ dedemin saati mi?” diye soruyor, Ece'nin sorduğu gibi. Belki Ece'den duydu. Belki her çocuk bir gün bu soruyu sorar.",
"Saati açıyorsun. Dişliler dönüyor. Ortada, en altta, o eski dişli; aşınmış, kenarları yuvarlaklaşmış, ama dönüyor.",
"Bir hayat boyunca neyin “sen” olduğunu sordun: el mi, kalp mi, anılar mı, beden mi, bir başkasının taşıdığı sesin mi? Hiçbirinin tek başına yetmediğini, ama hepsinin birlikte de yetmediğini öğrendin. Belki “sen” bir parça değil, parçaların birbirine geçme biçimi. Bir ritim. Tik, tak.",
"Ve ritimler, onları başlatan el gittikten sonra da devam edebilir."
], secenekler: [
{ t: "Saati kurar ve bırakırsın. Çalışsın.", to: "ys", etki: { saat: "kur" } },
{ t: "Saati durdurursun. Bazı şeylerin bir sonu olmalı.", to: "ys", etki: { saat: "dur" } },
{ t: "Saati Mira'ya verirsin.", to: "ys", etki: { saat: "mira", bag: 1 } },
{ t: "Saatin içinden o eski dişliyi çıkarıp cebine koyarsın; saati yeni bir dişliyle kapatırsın.", to: "ys", etki: { saat: "disli", koruma: 1 } }
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
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun. Sessizlik, dükkânı bir an doldurdu."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin. Avucunda tuttu, kapatmadan."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun. Saat yeni dişliyle çalıştı; aynı ritimle."),
"Sonbaharda, erik ağacının yaprakları dökülürken, Mira'nın yüzünü bir sabah tanımadın ve bu kez “sonra” gelmedi.",
"Ama Mira her akşam geldi. Mavi kapaklı defteri açtı ve okudu: bir saat tamircisinin hikâyesi. Kurulmamış bir saatle dükkâna gelen bir kadın. Bisikletin arkasını bırakan bir baba. Sen dinledin; nazikçe, ilgiyle, bir yabancının hikâyesini dinler gibi. Bazen bir yerde gülümsedin. Mira o yerleri işaretledi.",
"Kışın öldün. Kendi bedeninde, kendi kalbinle, kendi seçmediğin bir sırayla her şeyi kaybetmiş olarak. Kemerli'de buna “eski usul ölüm” diyorlar ve az insan seçiyor.",
"Senden geriye bir defter kaldı, bir saat, bir erik ağacı ve bir kız. Hiçbiri sen değildi. Hepsi senin bir biçimindi.",
"Bütün yaşamın boyunca neyin “sen” olduğunu sordun. Sonunda cevap, senin dışında bir yerde bulundu: bir başkasının seni hatırlama biçiminde. Belki de kimlik, insanın kendi içinde değil, onu taşıyanların arasında yaşar. Sen bunu hiç bilmedin. Mira biliyor."
]},

son_giden: { son: true, baslik: "Giden", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurdun ve tezgâhın üstüne bıraktın. Öteki için. Kendin için."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun ve tezgâhta bıraktın. Öteki onu yeniden kuracak; o senin ellerinle, senin sabrınla."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin. “Babana ver,” dedin. Sonra durdun. “Ötekine,” dedin. Sonra yine durdun. Hangi kelime doğruydu, bilemedin."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun. Saat kaldı, sen gittin. Bir parçanı yanına aldın; en eski, en aşınmış olanı."),
"Ertesi sabah yeni bir adla trene bindin. Kurum bir ad önermişti; reddettin, kendin seçtin. Babanın adı. Kimse bunun ne anlama geldiğini bilmeyecek.",
"Başka bir şehirde, başka bir çarşıda küçük bir dükkân. Saat tamiri. İnsanlar sana adını soruyor, söylüyorsun. Kimse sana geçmişini sormuyor; sen de anlatmıyorsun.",
"Mira her ay mektup yazıyor. Her mektuba “Sevgili babam” diye başlıyor. Sen de cevap yazıyorsun. Bir gün bir mektupta “Babam sana selam söylüyor,” yazıyor. Bu cümleyi uzun süre okuyorsun.",
"Bir yerde, bir mutfakta, senin sesinle konuşan bir adam senin kızına kahvaltı hazırlıyor. Onun hayatı, senin olabilecek hayat. Senin hayatın, onun olmayan hayat. Hangisi asıl? Bu soru artık seni rahatsız etmiyor.",
"Giden olmayı seçtin. Belki de baştan beri bir insan, kendisinden çıkıp başka biri olabilecek kadar genişti. Ve bunu, ancak kendini bırakarak öğrenebildin."
]},

son_iki: { son: true, baslik: "İki Kişilik Hayat", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurdun. Öteki onu dinledi. İkiniz de aynı anda gülümsediniz ve bundan hiç bahsetmediniz."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun. Öteki elini uzattı, yeniden kurdu. Bir şey söylemediniz. Bir anlaşmazlık değil; bir konuşma biçimi."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin. Öteki başıyla onayladı. İkinizin de aynı şeyi yapacağını biliyordunuz."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi çıkardın. Öteki yeni dişliyi taktı. İki el, bir saat."),
"Kurum bir çözüm bulamadı. Kemerli'nin bütün kayıtlarında bir boşluk: Yusuf Taner, iki kez.",
"Dükkânı ikiye böldünüz. O sabahları, sen öğleden sonraları. Müşteriler fark etmiyor; ya da fark edip bir şey söylemiyor. Ece fark ediyor ve güler: “Hangisisiniz bugün?” Cevap vermiyorsunuz; artık cevabın bir önemi yok.",
"Bazı akşamlar mutfakta üç kişi oturuyorsunuz. Mira, sen ve öteki. Öteki bazen sana senin kaybettiğin anılarından birini anlatıyor; sen de ona, onun hiç yaşamadığı son bir yılı. Bir hayat, iki kişinin arasında, iki yöne doğru büyüyor.",
"İkiniz yavaş yavaş farklılaşıyorsunuz. O sabahları kahve içiyor, sen çay. O bahçeye gül dikti. Sen dikmezdin. Her gün biraz daha az aynı.",
"Bir gün belki artık iki Yusuf değil, iki farklı adam olacaksınız; aynı yerden başlayıp ayrı yerlere varmış. Belki herkes böyledir: her sabah, dünkünden biraz farklı biri uyanıyor ve kimse ona “sen hâlâ sen misin?” diye sormuyor. Sizin farkınız, bunu birbirinizin yüzünde görebilmeniz."
]},

son_gemi: { son: true, baslik: "Theseus'un Gemisi", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurdun. Babanın dişlisi dönmeye devam etti; yüzde yüz yeni bir adamın elinde, dünyadaki en eski şeylerden biri."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun. İçindeki eski dişli hareketsiz kaldı. Belki ondan geriye yalnızca bu hareketsizlik kalacak."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin. Eski dişli, şimdi onun cebinde. Bir gün o da bir parçayı değiştirecek. Belki."),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun. Saat yeni dişliyle aynı ritimle çalıştı. Ve sen de."),
"Yaşamaya devam ettin. Kemerli'de kimse ölmez.",
"Dükkânı açtın, saatleri tamir ettin, Mira üniversiteye gitti, sonra döndü, sonra evlendi. Torunun dünyaya geldi. Onu kucağına aldığında elin titremedi; o el hiç titremedi, hiç titreyemezdi.",
"Bir gün torunun sana soracak: “Dede, sen hep böyle miydin?” Ve sen bilmeyeceksin. Elinde, gözünde, kalbinde, zihninde başlangıçtan kalan tek bir hücre yok. Yine de her sabah aynı adı söyleyerek uyanıyorsun. Aynı tezgâha oturuyorsun. Aynı sabırla.",
"Eski bir hikâye var: bir gemi, tahtaları birer birer değiştirilerek yüzyıllarca korunur. Sonunda tek bir orijinal tahta kalmaz. Hâlâ aynı gemi midir? Ya eski tahtalar toplanıp yeniden bir gemi yapılsa, hangisi asıl olur?",
"Necmi'nin deposunda bir yerde eski parçaların duruyor. Sen burada, yaşıyor ve konuşuyorsun. Hangisi asıl, bilmiyorsun. Ama şunu öğrendin: bu soru, gemiyi kullananlar için değil, kıyıda durup izleyenler için önemli. Gemi, denizde olduğu sürece, sadece yüzüyor."
]},

son_kalan: { son: true, baslik: "Kalan Parça", metin: [
P(function(d){ return d.saat === "kur"; }, "Saati kurdun. Tik, tak. Babanın dişlisi, senin elinle, senin artık hatırlamadığın şeylerin arasında dönüyor."),
P(function(d){ return d.saat === "dur"; }, "Saati durdurdun. Bazı şeylerin bir sonu olmalı, dedin. Ama sen devam ettin."),
P(function(d){ return d.saat === "mira"; }, "Saati Mira'ya verdin. “Bir gün sana bu soruyu soran biri olacak,” dedin. “Ne cevap vereceğini sen bileceksin.”"),
P(function(d){ return d.saat === "disli"; }, "Eski dişliyi cebine koydun. Artık her yere onunla gidiyorsun. Bir parça; başka hiçbir şeyin yerini tutamayacağı bir parça."),
P(function(d){ return d.ikinci === "gitti"; }, "Öteki gitti. Bir yerde, başka bir şehirde, senin kaybettiğin anıyı taşıyan bir adam yaşıyor. Bazen düşünüyorsun: o anı hâlâ bir yerde var. Yalnızca sende değil. Bu bir teselli mi, bir yara mı, her gün başka."),
P(function(d){ return d.son_on; }, "O yüzde on yavaş yavaş söndü. Bir gün tamamen gitti. Ne kaybettiğini hiç öğrenmedin. Belki bir kadın sesi, bir şarkı. Belki hiçbir şey."),
"Yaşamaya devam ettin. Bir şey eksik; ama her insanda bir şey eksik, diye düşünüyorsun bazen. Sen yalnızca neyin eksik olduğunu biliyorsun. Bu seni ötekilerden daha mı eksik yapıyor, yoksa daha mı bütün?",
P(function(d){ return d.kayip === "selma"; }, "Selma'yı hiç hatırlamadın. Ama erik ağacını her bahar budadın. Kim için yaptığını bilmeden, onun için."),
P(function(d){ return d.kayip === "mira"; }, "Mira'nın çocukluğunu hiç hatırlamadın. Ama onu yeniden tanıdın: on yedi yaşında, yirmi yaşında, otuz yaşında. Bir babanın kızını ikinci kez, bu kez yetişkin olarak tanıması. Belki bazı babalar bu şansı hiç bulamıyor."),
P(function(d){ return d.kayip === "cocukluk"; }, "Babanı hiç hatırlamadın. Ama onun sabrı ellerinde, onun büyüteci tezgâhında. Bir adamı hatırlamadan taşımak mümkünmüş."),
"Kayıp, bir yerde bir boşluk bırakıyor. Hayriye Hanım'ın dediği gibi: kapısı açık kalmış bir oda. İçinde ne olduğunu bilmiyorsun. Ama bazen, bir şarkı duyduğunda ya da yağmurda kırmızı bir şemsiye gördüğünde, o odanın kapısından bir rüzgâr esiyor. Ve sen, bilmeden, dönüp bakıyorsun."
]}

},

ayna: function(d){
  var out = [];
  var k = d.koruma, a = d.kabul, b = d.bag;
  if(k >= a && k >= b) out.push("Bu hikâye boyunca en çok korumaya çalıştın: elini, kalbini, anılarını, olduğun şeyi. Değişime karşı durmak bir tür sadakatti. Ama neye sadık olduğunu, o şey değiştikçe bilmek zorlaştı.");
  else if(a >= b) out.push("Bu hikâye boyunca en çok kabullendin. Her yeni parçayı, her kaybı, her eşiği. Bunun bir bilgelik mi, bir teslimiyet mi olduğu, kimin baktığına göre değişir.");
  else out.push("Bu hikâye boyunca en çok başkalarına yaslandın: Mira'ya, Hayriye'ye, Necmi'ye, hatta ötekine. Kendini başkalarının gözünde tanımaya çalıştın. Belki kimlik zaten orada yaşıyor.");
  if(d.kayip) out.push("Bir anı kümesini, " + KAYIP[d.kayip] + ", bıraktın. Bir şeyi değerli bulmak, başka bir şeyi daha az değerli bulmaktı. Seçimin, neyi kim olduğunun dışında tuttuğunu gösterdi.");
  if(d.ret) out.push("Hiçbir anıyı seçmeyi reddettin. Hepsini kaybettin, ama hiçbirini ele vermedin.");
  if(d.yedek && d.ikinci) out.push("Bir yedeğe izin verdin ve yedek uyandı. Kendinle karşılaştın; bir aynada değil, bir kapıda.");
  if(d.rol) out.push("Bir süre eski kendini oynadın. İyi oynadığını fark ettiğinde, eski kendinin de belki bir rol olduğunu düşündün.");
  if(d.mira_karar || d.mira_karar2) out.push("Bazı kararları Mira'ya bıraktın. Bir babanın kızına yük mü verdiği, güven mi, yalnızca o bilecek.");
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
