(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };
var DIS = function(d){ return d.disarida; };
var IC = function(d){ return !d.disarida; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "isik-sehri",
baslik: "Işık Şehri",
dunya: "Hayali dünya",
kavramlar: ["Mutluluğun bedeli", "Suç ortaklığı", "Kaçış ve direniş", "Çoğunluğun vicdanı"],
ozet: "Işıl'da kimse hastalanmaz, kimse aç kalmaz, hasat hiç bitmez. Bunun bir sebebi var ve on sekiz yaşına basan herkese gösterilir. Bugün senin doğum günün.",
baslangic: "i1",
durum: { fayda: 0, vicdan: 0, isyan: 0 },

sahneler: {

i1: { baslik: "Gösterim Günü", metin: [
"Işıl'da sabahlar hep güneşli. Kışın bile. Bahçelerde erik, ayva, nar; aynı ağaçta, aynı anda. Kimse bunun neden böyle olduğunu sormaz, çünkü sorulmadan önce cevap verilmiştir.",
"Bugün on sekiz yaşına basıyorsun. Adın Deren. Meydanda senin yaşındaki on iki genç için şenlik kuruldu: çiçekler, müzik, bal kokulu ekmekler. Bu akşam, saat kulesinin altına ineceksiniz. Gösterim.",
"Herkes oraya iner. Herkes bir şey görür. Ve herkes geri çıktığında biraz daha sessizdir. Sonra geçer. Işıl'da her şey geçer.",
"Annen Nermin sabahtan beri mutfakta. Yüzün aydınlık değil; Işıl'da bu bir tuhaflık. Kardeşin Umut yedi yaşında, masanın altında oynuyor. Doğduğunda solgundu; kanı bir türlü kırmızıya dönmüyordu. Şehrin ışığı onu iyileştirdi. Şehir dışında, diyor doktorlar, bir yıl yaşamazdı.",
"Annen sana şenlik elbiseni uzatırken elin eline değiyor. Soğuk.",
"“Akşam aşağı indiğinde,” diyor, “ne görürsen gör, bir şey söyleme. Ne olursa olsun. Bana söz ver.”"
], secenekler: [
{ t: "“Aşağıda ne var?” diye sorarsın.", to: "i2", etki: { vicdan: 1, sordu: true } },
{ t: "Söz verirsin ve şenliğe gidersin. Bugün senin günün.", to: "i2", etki: { fayda: 1, soz: true } },
{ t: "Ozan Hoca'ya gidersin. “Gösterimden önce bana uğra,” demişti bir keresinde.", to: "i2", etki: { isyan: 1, ozan: true } },
{ t: "Masanın altına, Umut'un yanına oturursun. Ona biraz daha bakmak istiyorsun.", to: "i2", etki: { vicdan: 1, umut_yaninda: true } }
]},

i2: { saat: "Akşam", baslik: "Bodrum", metin: [
P(S("i1A"), "“Göreceksin,” dedi annen. Başka bir şey söylemedi. Elbiseyi düzeltti, saçını taradı; küçükken yaptığı gibi. Sanki seni bir yere değil, bir şeyden önceki son ana hazırlıyordu."),
P(S("i1B"), "Şenlikte dans ettin, güldün, bal kokulu ekmek yedin. Bir an her şeyi unuttun. Sonra güneş battı ve kulenin saati çaldı ve on iki genç aynı anda sustu."),
P(S("i1C"), "Ozan Hoca kapıyı açtı, seni görünce başını salladı. “Hiçbir şey söylemeyeceğim,” dedi. “Söylersem, göreceğin şey benim gördüğüm olur. Sen kendi gördüğünü gör. Sonra gel.”"),
P(S("i1D"), "Umut sana bir resim gösterdi: kule, kulenin altında bir ev, evin içinde gülümseyen bir yüz. “Orada kim oturuyor?” dedi. “Herkes oraya gidip dönünce susuyor.” Bilmiyorsun, dedin. Bilmiyordun."),
"Kulenin altında dar bir merdiven. Rutubet, küf, ve başka bir koku; insan kokusu. Bekçiler fenerle önden iniyor. On iki genç, tek sıra.",
"Merdivenin sonunda demir bir kapı. Kapının ortasında küçük bir pencere. Sırayla bakıyorsunuz. Senin sıran.",
"İçeride bir çocuk var. Dokuz yaşında belki, belki daha büyük; o kadar zayıf ki yaşı belli değil. Çıplak bir zeminde oturuyor, dizlerini göğsüne çekmiş. Gözleri feneri görünce kısılıyor. Işığa alışkın değil.",
"Bekçi kuralı fısıldıyor, her gence fısıldadığı gibi: “Konuşma. Dokunma. Teselli etme. Bir tek söz, şehrin bütün ışığını söndürür.”",
"Çocuk pencereye doğru sürünüyor. Sesi kuru, kırık: “Beni çıkaracak mısın? Uslu duracağım. Söz. Uslu duracağım.”"
], secenekler: [
{ t: "Hiçbir şey söylemezsin. Kural bu. Şehrin bütün ışığı.", to: "i2b", etki: { fayda: 1, sessiz: true } },
{ t: "Fısıldarsın, öyle alçak ki kimse duymasın: “Adın ne?”", to: "i2b", etki: { vicdan: 1, fisildadin: true } },
{ t: "Pencereden çekilir, ağlarsın.", to: "i2b", etki: { vicdan: 1, agladin: true } },
{ t: "Sonuna kadar bakarsın. Bu yüzü unutmamak için. Hiçbir şeyi atlamadan.", to: "i2b", etki: { isyan: 1, ezberledin: true } }
]},

i2b: { saat: "Gece", baslik: "Merdivenler", metin: [
P(S("i2A"), "Sustun. Çocuk bir süre daha baktı, sonra geri çekildi. Belki her yıl on iki yüz görüyordu ve her yıl on iki yüz susuyordu. Sen de onlardan biri oldun. Bu kadar kolaymış."),
P(S("i2B"), "Fısıldadın. Çocuğun gözleri büyüdü. Ağzını açtı ama bir şey söyleyemedi; sanki adını hatırlamaya çalışıyordu. Tam o sırada bekçinin fenerinin alevi titredi. Bir an. Sonra düzeldi. Rüzgâr mıydı? Bodrumda rüzgâr yoktu."),
P(S("i2C"), "Pencereden çekildin. Gözyaşların yanaklarını yaktı. Bekçi omzuna dokundu, “Geçer,” dedi. Kibar, alışkın bir ses. Kaç gencin ağladığını görmüştü ve kaç gencin ağlamayı bıraktığını."),
P(S("i2D"), "Sonuna kadar baktın. Çocuğun dizindeki yara, saçının rengi, sol kaşının üstündeki iz. Bekçi seni çekmek zorunda kaldı. Bu yüz artık senin içinde. Bir yüzü ezberlemek, bir sorumluluğu ezberlemek gibi."),
"Merdivenleri çıkarken kimse konuşmuyor. Kulenin dışında gece, yıldızlar, bal kokusu. Şehir her zamanki kadar güzel. Bu güzellik şimdi bir şey söylüyor.",
"Gençler küçük gruplara ayrılıyor. Defne sinirli sinirli gülüyor: “Abartıyorlar, eminim o çocuk orada mutludur bir bakıma.” Berk yere bakıyor: “Bir çocuk. Ve bütün bir şehir. Hesap ortada.” Kaan merdivenin dibinde oturmuş, kusuyor.",
"Bir saat önce hepiniz aynı şeyi gördünüz. Şimdi her biriniz başka bir şey söylüyor; söylediğiniz şey, kim olacağınızı belirliyor."
], secenekler: [
{ t: "Berk'in yanında durursun. Hesap ortada.", to: "i3", etki: { fayda: 1, berk: true } },
{ t: "Defne'nin yanına gidip gülmeye çalışırsın. Belki bu katlanmanın yolu.", to: "i3", etki: { fayda: 1, defne: true } },
{ t: "Kaan'ın yanına oturup sırtını sıvazlarsın.", to: "i3", etki: { vicdan: 1, kaan: true } },
{ t: "Kimseyle konuşmadan eve yürürsün.", to: "i3", etki: { yalniz: true } }
]},

i3: { saat: "Gece", baslik: "Bekçi", metin: [
"Eve vardığında annen mutfakta. Seni bekliyor. İki bardak ıhlamur.",
P(function(d){ return d.fisildadin; }, "Yüzüne bakar bakmaz anlıyor. “Konuştun,” diyor. Soru değil. Sesi korkmuş değil; yorgun. “Fener titredi, değil mi? Hep titrer. Kimse bilmiyor neden.”"),
"“Ben bekçiyim,” diyor. “On iki yıldır. Her sabah o kapıya ekmek ve su bırakıyorum. Tek kelime etmeden. On iki yıl.”",
"Bardağını iki eliyle tutuyor. “İlk yıl her gece ağladım. İkinci yıl ağlamadım ve kendimden nefret ettim. Üçüncü yıl nefret etmeyi de bıraktım. Bir şeye alışmak, onu anlamaktan daha korkunç.”",
"“Neden?” diyorsun. “Neden sen?”",
"Annen başını kaldırıyor. “Umut doğduğunda,” diyor, “solgundu. Doktorlar bir yıl dedi. Bekçilik görevini kabul edersen ailene şehrin en iyi şifacıları bakar, dediler. Kabul ettim. Umut yaşıyor. O çocuk ise her sabah benim elimden ekmek alıyor.”",
"Masanın altında Umut uyuyor. Yanakları pembe. Bu pembeliğin nereden geldiğini artık biliyorsun."
], secenekler: [
{ t: "Annene sarılırsın. Onu yargılayamazsın.", to: "i4", etki: { vicdan: 1, sarildi: true } },
{ t: "“Bunu bana nasıl yaşattın?” dersin.", to: "i4", etki: { isyan: 1, ofke: true } },
{ t: "“Doğru olanı yaptın,” dersin. Umut yaşıyor.", to: "i4", etki: { fayda: 1 } },
{ t: "Hiçbir şey söylemeden Umut'un yanına uzanırsın.", to: "i4", etki: { vicdan: 1 } }
]},

i4: { saat: "Birkaç gün sonra", baslik: "Gidenler", metin: [
P(S("i3A"), "Annen sarılmana önce şaşırdı, sonra bırakmadı. Uzun süre. On iki yılın ilk sarılması gibi."),
P(S("i3B"), "Annen bir şey söylemedi. Kalktı, bardakları yıkadı. Arkası sana dönüktü. Omuzları titriyordu ama sesi çıkmadı; on iki yıldır sesini çıkarmamayı öğrenmişti."),
P(S("i3C"), "Annen sana baktı. “Doğru mu?” dedi. “Ben de öyle söylüyorum kendime. Her sabah. Doğru olanı yaptım. Söyle bana Deren: o zaman neden her sabah söylemem gerekiyor?”"),
P(S("i3D"), "Umut uykusunda koluna sarıldı. Nefesi düzenliydi. Bir şehrin bütün ağırlığı, yedi yaşında bir çocuğun düzenli nefesinin üstünde duruyordu."),
"Birkaç gün sonra Ozan Hoca'nın evinin önünden geçiyorsun. Kapı açık, içerisi boşaltılmış. Ozan Hoca bahçede, sırt çantasıyla.",
"“Gidiyorum,” diyor. “Bu gece. Kuzey kapısından.”",
"Işıl'da her yıl birkaç kişi gider. Gösterimden günler, bazen yıllar sonra. Bir sabah kalkarlar ve kuzey kapısından çıkıp yürürler. Geri dönmezler. Nereye gittiklerini kimse bilmez. Şehrin dışında ne olduğunu kimse bilmez; bilmek istemez.",
"“Kırk yıldır bu şehirde öğretmenim,” diyor Ozan Hoca. “Kırk yıl boyunca çocuklara iyiliği öğrettim. Sonra onları o merdivenden indirdim. Artık yapamıyorum. Gel benimle, Deren. Umut'u da al.”",
"“Dışarıda Umut yaşamaz,” diyorsun.",
"Ozan Hoca bir süre susuyor. “Biliyorum,” diyor. “Bu yüzden sana sormaya utanıyorum. Ama sordum.”"
], secenekler: [
{ t: "Bu gece onunla kapıya kadar yürürsün. Gitmek için değil, görmek için.", to: "i5", etki: { isyan: 1, kapi: true } },
{ t: "“Gitmek de bir susmak, hocam. Çocuğu orada bırakıyorsunuz,” dersin.", to: "i5", etki: { isyan: 1, vicdan: 1, gitmek_susmak: true } },
{ t: "“Ben kalıyorum. Umut için,” dersin.", to: "i5", etki: { fayda: 1 } },
{ t: "Annene Ozan Hoca'nın gideceğini söylersin.", to: "i5", etki: { fayda: 1, ispiyon: true } }
]},

i5: { saat: "Gece", baslik: "Ninni", metin: [
P(S("i4A"), "Kuzey kapısı demirden değil, tahtadan; eski, çatlak. Ozan Hoca kapıdan geçti, bir kez döndü, el salladı. Karanlıkta birkaç adım. Sonra şehrin ışığı onu bırakmadı; o şehrin ışığını bıraktı. Gözden kayboldu."),
P(S("i4B"), "Ozan Hoca sana uzun süre baktı. “Haklısın,” dedi. “Gitmek de bir susmak. Ama kalmak da. Hangi susmayla yaşayabileceğini sen seç.” O gece gitti."),
P(S("i4C"), "Ozan Hoca başını salladı. “Umut için,” dedi. “Herkesin bir Umut'u var. Bu şehir bu yüzden ayakta.” O gece gitti."),
P(S("i4D"), "Annen dinledi, sonra omuz silkti. “Gidenler de bizim gibi,” dedi. “Yalnızca bakmayı bıraktılar. Bırakmak, bakmaktan kolay.” Ozan Hoca o gece gitti. Kimse durdurmadı. Işıl'da kimse kimseyi durdurmaz."),
"Bir gece uyuyamıyorsun. Kalkıp kuleye yürüyorsun. Bekçi yok; gece nöbeti yok, çünkü kimse inmez. Merdivenler karanlık.",
"Demir kapının önüne geliyorsun. İçeriden bir ses: bir şarkı. İnce, kırık, kelimeleri yarım.",
"Tanıyorsun. Bu Işıl'ın ninnisi. Annen sana bu ninniyi söylerdi; sen Umut'a söylüyorsun. “Uyu güzel kuzum, ay doğdu ışığa...”",
"Çocuk onu nereden biliyor? Kim söyledi ona? Belki biri, yıllar önce, bu kapının önünde, kuralı çiğneyip bir şarkı mırıldandı. Belki annen. Belki kimse; belki şehrin ninnisi duvarlardan sızıyor.",
"Çocuk şarkının bir yerinde takılıyor. Kelimeyi hatırlayamıyor. Tekrar başlıyor. Yine takılıyor."
], secenekler: [
{ t: "Eksik kelimeyi fısıldarsın.", to: "i6", etki: { vicdan: 1, isyan: 1, sarki: true } },
{ t: "Kapının dibine oturup sessizce dinlersin.", to: "i6", etki: { vicdan: 1, dinledi: true } },
{ t: "Kapının altından cebindeki bal kokulu ekmeği itersin.", to: "i6", etki: { vicdan: 1, ekmek: true } },
{ t: "Merdivenlerden koşarak çıkarsın. Duymamış olmak istiyorsun.", to: "i6", etki: { fayda: 1, kacti: true } }
]},

i6: { saat: "Bir ay sonra", baslik: "Kura", metin: [
P(S("i5A"), "Kelimeyi fısıldadın: “...gümüşe.” Çocuk sustu. Sonra şarkıyı baştan, eksiksiz söyledi. Bütün kule, sanki nefesini tuttu. Dışarı çıktığında şehrin ışıkları yerindeydi. Belki bir an titremişti. Belki sen öyle görmek istedin."),
P(S("i5B"), "Kapının dibinde oturdun. Çocuk şarkıyı on kez denedi, on kez takıldı. Sabaha karşı sustu. Sen de kalktın. Kimseye söylemedin. Bir şeye tanık olmak ve hiçbir şey yapmamak; bunu da öğreniyorsun."),
P(S("i5C"), "Ekmeği kapının altından ittin. İçeriden hiçbir ses gelmedi. Sonra, çok uzun bir sessizlikten sonra, kâğıt hışırtısı. Bir çocuğun bal kokulu bir ekmeği ilk kez kokladığını hayal ettin. Kural “teselli etme” diyordu. Bir ekmek teselli mi?"),
P(S("i5D"), "Merdivenlerden koştun. Kulenin dışında nefes nefese durdun. Şehrin bütün ışıkları yanıyordu. Duymamış olmak istedin; ama duymuştun, ve bir şeyi duymamış olmak, onu duymaktan çok daha zor."),
"Bir ay sonra meydanda bir duyuru. Şehrin yaşlıları, beyaz giysiler içinde.",
"“Bodrumdaki çocuk tükeniyor,” diyor en yaşlısı. Tükeniyor. Bir şehrin bir çocuğu tüketmesi; bu kelimeyi kimse yadırgamıyor. “Ahit gereği, yeni bir çocuk seçilecek. Beş ile dokuz yaş arasındaki bütün çocukların adı kuraya girecek. Bir hafta sonra.”",
"Meydanda sessizlik. Sonra bir anne çocuğunu kucağına alıyor. Bir başkası. Bir başkası.",
"Umut yedi yaşında. Adı kuraya girecek.",
"Annen yanında, beyaz kesilmiş. Elini tutuyorsun. Annenin eli değil, bir taşın eli."
], secenekler: [
{ t: "Kurayı kabul edersin. Bu şehrin bedeli. Herkes ödüyor.", to: "f1", etki: { fayda: 2, kabul: true } },
{ t: "Umut'u alıp kuzey kapısından çıkarsın. Dışarıda bir yıl, burada belki hiç.", to: "g1", etki: { isyan: 1, gidenler: true } },
{ t: "Annenin anahtarını alıp o kapıyı açmaya karar verirsin. Ahit bozulsun.", to: "y1", etki: { isyan: 2, vicdan: 1, yikim: true } },
{ t: "Kura kâtibine gidip Umut'un adını listeden çıkarmanın bir yolunu ararsın.", to: "h1", etki: { hile: true } }
]},

/* ---------- KABUL KOLU ---------- */
f1: { saat: "Kura günü", baslik: "Çekilen İsim", metin: [
P(function(d){ return d.geri_cekildi; }, "Son anda vazgeçtin. Ne yapmaya kalkıştığını kimse bilmiyor. Bu bir rahatlama mı, yoksa bir sırrın ilk günü mü?"),
"Kura günü meydan dolu. Çocuklar annelerinin bacaklarına sarılmış; kimse onlara neden sarıldıklarını söylememiş ama biliyorlar.",
"Kâtip Tevfik camdan bir kâseye elini daldırıyor. Bir kâğıt. Açıyor. Gözlüğünü düzeltiyor.",
"“Sedef Aral. Altı yaşında.”",
"Bir an önce ciğerlerinde biriken nefes dışarı çıkıyor. Umut değil. Umut değil. Bu rahatlamanın sesini kendi göğsünde duyuyorsun ve aynı anda bir başka ses, meydanın öbür ucundan: bir çığlık.",
"Sedef. Bir sokak ötede oturuyorlar. Annesi çalışırken ona sen bakardın. Sedef sana “Deren abla” der, saçlarını örmen için yanına oturur, her seferinde “sıkı yap ama acıtma” derdi.",
"Annesi Aylin meydanın ortasında yere çökmüş. Kimse ona dokunmuyor. Dokunmak bir şeyi kabul etmek olur; kimse kabul etmek istemiyor. Herkes rahatlamış ve herkes rahatlamasından utanıyor; utanç da rahatlamayı silmiyor."
], secenekler: [
{ t: "Aylin'in yanına gidip yere, onun yanına çökersin.", to: "f2", etki: { vicdan: 1, aylin: true } },
{ t: "Umut'u kucaklayıp hemen eve götürürsün. Görmesin.", to: "f2", etki: { fayda: 1 } },
{ t: "Sedef'e bakarsın. O sana bakıyor. Bakışını kaçırmazsın.", to: "f2", etki: { vicdan: 1, sedefe_bakti: true } },
{ t: "Kalabalığın içinde kaybolursun. Bu, herkesin sessizliğinde senin de payın.", to: "f2", etki: { fayda: 1 } }
]},

f2: { saat: "Bir gün sonra", baslik: "Eski Çocuk", metin: [
P(S("f1A"), "Aylin'in yanına çöktün. Seni tanıdı. Kolunu yakaladı, tırnakları etine girdi. “Sen ona bakardın,” dedi. “Sen ona bakardın.” Başka bir şey söylemedi. Söylemesine gerek yoktu."),
P(S("f1B"), "Umut'u eve götürdün. Yolda sordu: “Sedef nereye gidecek?” “Bir yere,” dedin. “Ne zaman dönecek?” Cevap vermedin. Umut ısrar etmedi. Işıl'ın çocukları, sorulmayan soruları erken öğrenir."),
P(S("f1C"), "Sedef sana baktı. Ağlamıyordu; şaşkındı. Sonra elini kaldırdı, el salladı. Sana. Sen de el salladın. Elinin havada ne kadar ağır olduğunu bilemezsin."),
P(S("f1D"), "Kalabalığın içinde kayboldun. Sessizlik büyüktü; kimse kimseye bakmıyordu. Sen de bakmadın. Yüzlerce insanın birlikte bakmaması, tek bir insanın bakmamasından daha mı az ağır? Daha mı çok?"),
"Ertesi gün eski çocuğu kuleden çıkarıyorlar. Gece, ışık gözlerini kör etmesin diye. Bir battaniyeye sarılı, iki bekçinin kollarında.",
"Onu şehrin kenarındaki Şifa Evi'ne yerleştiriyorlar. Penceresiz bir oda. Işığa alışana kadar, diyorlar. Kimse ne kadar süreceğini bilmiyor. Kimse ziyarete gitmiyor. Bir şehrin borcunu taşıyan çocuk, borç ödenince, unutulmak istiyor.",
P(function(d){ return d.ezberledin || d.fisildadin; }, "Ona bakıyorsun ve tanıyorsun. Sol kaşının üstündeki iz. Seni de tanıyor mu? Gözleri sana dönüyor, bir an duruyor."),
"Annen yanında. “Kimse ona bakmayacak,” diyor. “Hiçbir zaman bakmadılar.”"
], secenekler: [
{ t: "Onu evinize almayı teklif edersin.", to: "f3", etki: { vicdan: 2, nur_evde: true } },
{ t: "Her gün Şifa Evi'ne gidip yanında oturmaya söz verirsin.", to: "f3", etki: { vicdan: 1, ziyaret: true } },
{ t: "Ona bir ad verirsin. Hiç adı olmamış bir çocuğa. Nur.", to: "f3", etki: { vicdan: 1, ad_verdi: true } },
{ t: "Uzak durursun. Onu her gördüğünde Sedef'i göreceksin.", to: "f3", etki: { fayda: 1 } }
]},

f3: { saat: "Gece", baslik: "İlk Gece", metin: [
P(S("f2A"), "Annen bir süre düşündü, sonra başını salladı. Çocuğu eve getirdiniz. Perdeleri kapattınız. İlk gece masanın altına girip uyudu; Umut'un yanına. Umut uyandığında ona baktı, korkmadı. “Adın ne?” dedi. Çocuk cevap vermedi."),
P(S("f2B"), "Her gün gittin. İlk gün yüzüne bakmadı. Üçüncü gün bakmaya başladı. Yedinci gün eline dokundu, çok hafifçe, bir şeyin gerçek olup olmadığını anlamak ister gibi."),
P(S("f2C"), "“Nur,” dedin. Çocuk bu kelimeyi tekrarladı; ağzında bir yabancı yiyecek gibi. Sonra yine söyledi. Işık demek, dedin. Bunun acı bir şaka olup olmadığını düşünmedin; o gece, yatarken düşündün."),
P(S("f2D"), "Uzak durdun. Annen her gün gitti. Bir gün sana “Seni sordu,” dedi. “Bodruma bakan son yüzlerden birini hatırlıyormuş.” Sen sustun."),
"Sedef'in ilk gecesi. Annen bekçi olarak sabah ilk ekmeği götürecek. Gece yarısı kapında duruyor.",
"“Benimle gelir misin?” diyor. “Bir gün bu görev sana geçecek. Belki. Ya da başkasına. Ama bilmeni isterim, nasıl olduğunu.”",
"Aşağıda, demir kapının arkasında, altı yaşında bir kız var. Saçlarını sen örerdin. Şimdi orada, karanlıkta, “sıkı yap ama acıtma” diyecek kimse yok.",
"Umut odasında uyuyor. Yanakları pembe."
], secenekler: [
{ t: "Annenle aşağı inersin.", to: "a1", etki: { fayda: 1, bekci_yolu: true } },
{ t: "Gitmezsin. O kapının önünde susan bir yüz daha olmayacaksın.", to: "a1", etki: { vicdan: 1 } },
{ t: "Annenle inersin ve karanlıkta, kapının dibinde, Sedef'in adını fısıldarsın.", to: "a1", etki: { vicdan: 1, isyan: 1, sedef_fisilti: true } },
{ t: "Umut'un başında kalırsın. Bütün gece onun nefesini dinlersin.", to: "a1", etki: { fayda: 1 } }
]},

/* ---------- GİDENLER KOLU ---------- */
g1: { saat: "Gece", baslik: "Kuzey Kapısı", metin: [
"Gece yarısı Umut'u uyandırıyorsun. “Gezmeye gidiyoruz,” diyorsun. Montunu giydiriyorsun, iki ekmek, bir şişe su.",
"Annen mutfakta. Uyumamış. Sizi görünce kalkıyor. Bir şey söylemiyor. Umut'un saçını düzeltiyor, sana bakıyor.",
"“Dışarıda bir yıl,” diyor sonunda. “Belki daha az.” “Burada belki hiç,” diyorsun. Annen başını sallıyor. Gelmiyor. Biri bekçi olarak kalmalı; ya da gitmeye cesareti yok; ya da kalmak onun cezası. Hangisi, bilmiyorsun.",
"Kuzey kapısı. Eski, çatlak tahta. Arkasında karanlık.",
P(function(d){ return d.kapi; }, "Bir ay önce burada Ozan Hoca'yı uğurlamıştın. Şimdi kendin geçiyorsun. Kapıdan geçmenin bu kadar kolay olduğunu bilmiyordun. Belki herkes biliyor; belki bu yüzden kimse geçmiyor."),
"Üç adım. Beş adım. Arkada şehrin ışığı. Önde yalnızca ay.",
"Yirmi adımda Umut öksürüyor. Hayatında ilk kez. Şaşkınlıkla elini ağzına götürüyor, sanki öksürüğün nereden geldiğini bulmak istiyor."
], secenekler: [
{ t: "Yürümeye devam edersin. Dönersen bir daha çıkamazsın.", to: "g2", etki: { isyan: 1 } },
{ t: "Durup arkana bakarsın. Son bir kez.", to: "g2", etki: { vicdan: 1, dondu_bakti: true } },
{ t: "Umut'u sırtına alırsın. Ayakları yorulmasın, ciğerleri yorulmasın.", to: "g2", etki: { vicdan: 1 } },
{ t: "Umut'a nereye gittiğinizi açıklarsın, bütün gerçeğiyle.", to: "g2", etki: { isyan: 1, umut_bilir: true } }
]},

g2: { saat: "Haftalar sonra", baslik: "Dışarısı", metin: [
P(S("g1B"), "Arkana baktın. Işıl bir ışık adası gibiydi; karanlığın ortasında, yanıyor, ısıtmıyor. İçinde bir çocuk vardı. Şimdi belki iki."),
P(S("g1D"), "Umut dinledi. Yedi yaşında. Sonunda “Yani o çocuk bizim yüzümüzden orada mı?” dedi. “Herkesin yüzünden,” dedin. “O zaman bizim yüzümüzden de,” dedi."),
"Üç gün yürüdünüz. Dördüncü gün bir köy. Taş evler, çamurlu sokaklar, öksüren yaşlılar, yamalı giysiler. Hasat bitmiş, ambarlar yarı boş.",
"Ama kapıları çaldığınızda açılıyor. Bir kadın size çorba veriyor. Bir adam ahırında yer gösteriyor. Kimse kim olduğunuzu sormuyor; Işıl'dan geldiğinizi tahmin ediyorlar. “Her yıl birkaç kişi gelir,” diyor kadın. “Sizin oradan. Gözlerinde aynı bakış.”",
"Köyde Ozan Hoca'yı buluyorsun. Çocuklara okuma öğretiyor, bir ahırın içinde. Sizi görünce gülüyor, sonra Umut'un öksürüğünü duyuyor ve gülüşü siliniyor.",
"Köyün şifacısı Umut'u muayene ediyor. Uzun süre. Sonra başını kaldırıyor.",
"“Kanı zayıf,” diyor. “Burada yapabileceğim çok şey yok. Altı ay. Belki bir yıl. Sizin oradan gelenlerin hep böyle bir yükü olur. Ya kendileri taşır ya da bir sevdikleri.”"
], secenekler: [
{ t: "Köyde kalırsın. Altı ay, bir yıl; ama bu insanların arasında.", to: "g3", etki: { vicdan: 1, isyan: 1 } },
{ t: "Daha uzağa, büyük şehirlere gidersin. Belki orada bir şifa vardır.", to: "g3", etki: { isyan: 1, uzak: true } },
{ t: "Ozan Hoca'ya yardım edersin. Ahırdaki okulda.", to: "g3", etki: { vicdan: 1, okul: true } },
{ t: "Her gece Umut'a Işıl'ı anlatırsın. Gördüğü en güzel şeyi; içindeki çocuğu dışarıda bırakarak.", to: "g3", etki: { fayda: 1 } }
]},

g3: { saat: "Aylar sonra", baslik: "Elçi", metin: [
"Bir sabah köyün girişinde beyaz giysili biri. Işıl'dan bir elçi. Gidenleri aramaz Işıl; ama bu kez gelmiş.",
"“Kura yapıldı,” diyor. “Sedef Aral. Altı yaşında. Sizin komşunuz.”",
"Söz bir taş gibi düşüyor. Sedef. Saçlarını ördüğün kız.",
"“Annen beni gönderdi,” diyor elçi. “Umut'un hastalandığını duymuş. Geri dönebilirsiniz. Umut iyileşir. Şehir kimseyi cezalandırmaz; yalnızca kabul eder. Kura yapıldı, artık bir risk yok.”",
"Risk yok. Sedef bodrumda olduğu için. Umut'un adının kâseden çıkmayacağı bir sonraki kura otuz yıl sonra.",
"Umut ahırın köşesinde, battaniyeye sarılı, öksürüyor. Yüzü solgun; doğduğu günkü gibi. Ozan Hoca kapının eşiğinde, elçiye bakıyor ve hiçbir şey söylemiyor."
], secenekler: [
{ t: "Dönersin. Umut'la birlikte.", to: "a1", etki: { fayda: 2, geri_dondu: true } },
{ t: "Kalırsın. Umut'la birlikte, burada, ne kadar varsa.", to: "a1", etki: { isyan: 1, vicdan: 1, disarida: true } },
{ t: "Umut'u elçiyle geri gönderirsin. Sen kalırsın.", to: "a1", etki: { fayda: 1, vicdan: 1, umut_gitti: true, disarida: true } },
{ t: "Elçiye Sedef'i sorarsın. Her şeyi. Sonra cevabını verirsin: hayır.", to: "a1", etki: { vicdan: 1, isyan: 1, disarida: true, sedefi_sordu: true } }
]},

/* ---------- YIKIM KOLU ---------- */
y1: { saat: "Gece", baslik: "Anahtar", metin: [
"Annenin anahtarı mutfak kapısının arkasında, bir çivide asılı. On iki yıldır her sabah oradan alınıyor, her öğlen oraya asılıyor. Demir, ağır, paslı.",
"Gece yarısı mutfaktasın. Elini uzatıyorsun.",
"“Deren.”",
"Annen kapıda. Geceliğiyle, yalınayak. Elindeki mumun ışığında yüzü yaşlı.",
"“Ne yapacağını biliyorum,” diyor. “On iki yıldır her gece aynı şeyi düşündüm. Anahtarı alıp inmek. Kapıyı açmak. Bir kelime söylemek.” Mumu masaya koyuyor. “Hiç yapmadım. Umut için. Sen için. Bütün şehir için. Ya da yalnızca korktuğum için.”",
"“Kapı açılırsa ışık söner, derler. Hasat çürür, hastalık döner, çocuklar ölür. Ben hiç denemedim. Kimse denemedi. Belki hiçbir şey olmaz. Belki her şey olur. Bunu bilmeden yaşadık. Bilmemek, bu şehrin asıl ahdi.”",
"Anahtar elinde. Annen seni durdurmuyor. Ama gözleri bir şey soruyor."
], secenekler: [
{ t: "“Benimle gel,” dersin.", to: "y2", etki: { vicdan: 1, anne_geldi: true } },
{ t: "“Beni durdurma,” dersin ve yürürsün.", to: "y2", etki: { isyan: 1 } },
{ t: "Anahtarı çiviye geri asarsın. Annenin gözlerindeki soruya dayanamıyorsun.", to: "f1", etki: { fayda: 1, geri_cekildi: true, yikim: false, kabul: true } },
{ t: "Anneni mutfağa kilitlersin. Bu yük onun değil, senin olacak.", to: "y2", etki: { isyan: 1, kilitledi: true } }
]},

y2: { saat: "Gece", baslik: "Karanlıkta", metin: [
P(S("y1A"), "Annen bir süre durdu. Sonra mumu aldı ve önden yürüdü. On iki yıl her sabah indiği merdivenleri, ilk kez gece, ilk kez bir şey söylemek için iniyordu."),
P(S("y1B"), "Annen kenara çekildi. Arkandan bir ses gelmedi. Belki ağlıyordu, belki rahatlamıştı, belki ikisi."),
P(S("y1D"), "Kapıyı kilitledin. İçeriden bir ses gelmedi. Annen kapıyı çalmadı, bağırmadı. Sanki bunun gelmesini on iki yıldır bekliyordu."),
"Anahtar kilitte dönüyor. Pas çığlık atıyor. Demir kapı açılıyor.",
"İçerisi sandığından küçük. Duvarlarda tırnak izleri. Bir köşede taş bir tas, yanında ekmek kırıntıları.",
"Çocuk duvarın dibinde. Seni görünce bir ses çıkarıyor; korku mu, umut mu, ikisinin ayrılmadığı bir ses.",
"Yanına diz çöküyorsun. Elini uzatıyorsun. Dokunuyorsun. Teni soğuk, kemikleri ince.",
"“Buradayım,” diyorsun. “Geçti. Geçti artık.”",
"Bir kelime. Teselli. Yasak olan.",
"Yukarıda, çok yukarıda, bir şey oluyor. Kulenin saati yanlış bir saatte çalıyor. Bir kez. Sonra merdivenden aşağı doğru bir rüzgâr iniyor; bodrumda olmaması gereken bir rüzgâr. Fener sönüyor.",
"Karanlıkta çocuğun eli elini buluyor. “Şimdi ne olacak?” diye fısıldıyor."
], secenekler: [
{ t: "Onu kucaklayıp merdivenlerden çıkarırsın. Meydana, gökyüzünün altına.", to: "y3", etki: { isyan: 1, meydana: true } },
{ t: "Sabaha kadar onunla burada kalırsın. Karanlıkta, birlikte.", to: "y3", etki: { vicdan: 1, kaldi: true } },
{ t: "Ona bir ad verirsin: Nur.", to: "y3", etki: { vicdan: 1, ad_verdi: true } },
{ t: "Kulenin çanını çalmaya koşarsın. Herkes gelsin. Herkes görsün.", to: "y3", etki: { isyan: 2, can: true } }
]},

y3: { saat: "Sabah", baslik: "Kalabalık", metin: [
P(S("y2A"), "Meydana çıktığınızda gökyüzü griydi. Işıl'da ilk gri sabah. Çocuk gözlerini kapadı; ışık değil, gri bile çok fazlaydı ona."),
P(S("y2B"), "Sabaha kadar karanlıkta oturdunuz. Çocuk başını omzuna koydu ve uyudu. Yukarıdan sesler geldi: koşan ayaklar, bağrışmalar, bir çan. Sen kıpırdamadın."),
P(S("y2C"), "“Nur,” dedin. Çocuk tekrarladı. “Nur.” Sonra güldü; kuru, kırık, ama bir gülüş. Belki bu şehrin dibinde ilk kez biri gülüyordu."),
P(S("y2D"), "Çan çaldı. Bir kez, iki kez, on kez. Şehir uyandı. Herkes kuleye koştu. Ve herkes, ilk kez, birlikte, aynı anda, aşağı baktı."),
"Sabah Işıl gri uyanıyor. Ağaçlarda meyveler bir gecede buruşmuş. Kuyuların suyu bulanık. Şenlik çiçekleri kurumuş.",
"Bir ev ötede bir çocuk öksürüyor. Bir başka evde bir yaşlı ateşleniyor.",
P(function(d){ return true; }, "Umut. Evde. Annenin kollarında. Yanakları solgun. Öksürüyor."),
"Meydanda kalabalık. Yüzler sana dönük. Kimin yaptığını herkes biliyor. Kimse bir şey söylemiyor; henüz.",
"Bir kadın öne çıkıyor. Kucağında ateşli bir bebek. “Ne yaptın?” diyor. Sesi yüksek değil. “Ne yaptın bize?”",
"Çocuk, Nur ya da adsız, senin arkanda, eteğine yapışmış."
], secenekler: [
{ t: "Çocuğu kalabalığın önüne çıkarırsın: “Buna bakın. Hepiniz. Bunu siz yaptınız.”", to: "a1", etki: { isyan: 2, yuzlestirdi: true } },
{ t: "Çocuğu alıp kaçarsın. Kalabalık seni dinlemeyecek.", to: "a1", etki: { vicdan: 1, kacti2: true } },
{ t: "Kadına cevap verirsin: “Bir çocuğu kurtardım. Ve sizin çocuğunuzu tehlikeye attım. İkisi de doğru.”", to: "a1", etki: { vicdan: 1, isyan: 1, durust: true } },
{ t: "Çocuğu annene verip kendini yaşlılar meclisine teslim edersin.", to: "a1", etki: { fayda: 1, teslim: true } }
]},

/* ---------- HİLE KOLU ---------- */
h1: { saat: "Gece", baslik: "Kâtip", metin: [
"Kâtip Tevfik'in evi şehrin en eski sokağında. Kapıyı kendisi açıyor. Altmışlarında, ince, gözlüklü. Seni görünce şaşırmıyor.",
"“Kardeşin için,” diyor. Soru değil. “Her kura öncesi birkaç kişi gelir. Hep aynı cümleyle. Kardeşim için. Kızım için. Torunum için.”",
"Seni içeri alıyor. Masanın üstünde bir kâse, içinde kâğıtlar. Yarınki kâse.",
"“Bir isim çıkarılırsa,” diyor, “bir başka ismin çıkma ihtimali artar. Bunu biliyorsun, değil mi? Kâsede yüz kırk iki isim var. Biri eksilirse, her biri biraz daha ağırlaşır. Bodruma birileri girecek, Deren. Kimin gireceğini değiştirebilirsin. Kimsenin girmemesini değil.”",
"Annenin bekçi madalyası cebinde. Altın, ağır. Işıl'da onunla bir ev alınır.",
"Tevfik madalyaya bakmıyor. Ama bakmamaya çalıştığı belli."
], secenekler: [
{ t: "Madalyayı masaya bırakırsın.", to: "h2", etki: { fayda: 1, rusvet: true } },
{ t: "“Bunu yapmazsan geçen kuraları kimin için değiştirdiğini herkese söylerim,” dersin.", to: "h2", etki: { isyan: 1, tehdit: true } },
{ t: "Dizlerinin üstüne çöküp yalvarırsın.", to: "h2", etki: { vicdan: 1, yalvardi: true } },
{ t: "Vazgeçersin. Kalkıp çıkarsın. Kura kimi seçerse seçsin, seçen sen olmayacaksın.", to: "f1", etki: { vicdan: 1, geri_cekildi: true, hile: false, kabul: true } }
]},

h2: { saat: "Kura günü", baslik: "Sedef", metin: [
P(S("h1A"), "Tevfik madalyayı aldı. Cebine koymadı; masanın çekmecesine. “Bunu ben istemedim,” dedi. “Sen verdin.” Bir şeyin sorumluluğunu nasıl paylaştırdığını gördün: herkes bir parçasını öbürüne bırakıyor."),
P(S("h1B"), "Tevfik yüzüne baktı, uzun. Sonra güldü. “Herkes biliyor,” dedi. “Kimse söylemez. Sen de söylemeyeceksin. Ama tamam. Kardeşin için.” Kâseden bir kâğıt çıkardı ve sobaya attı."),
P(S("h1C"), "Tevfik seni kaldırdı. “Kalk,” dedi. “Diz çöken her kardeş için bunu yapsam kâse boşalırdı.” Sonra kâseden bir kâğıt çıkardı. Okumadan sobaya attı. Okumasına gerek yoktu."),
"Kura günü. Meydan dolu. Tevfik elini kâseye daldırıyor. Bir kâğıt. Açıyor.",
"“Sedef Aral. Altı yaşında.”",
"Bir sokak ötede oturuyorlar. Annesi çalışırken ona sen bakardın. Saçlarını sen örerdin. “Sıkı yap ama acıtma,” derdi.",
"Bu ismin çıkma ihtimali, dün geceden bu yana biraz daha büyüktü. Ne kadar? Yüz kırk ikide bir yerine yüz kırk birde bir. Bir matematik hatası kadar küçük. Ama sen biliyorsun, Tevfik biliyor.",
"Sedef'in annesi Aylin meydanın ortasında yere çöküyor. Umut senin elini tutuyor, sıcak, pembe."
], secenekler: [
{ t: "Aylin'in yanına gidip yanına çökersin.", to: "h3", etki: { vicdan: 1 } },
{ t: "Umut'u kucaklayıp eve koşarsın.", to: "h3", etki: { fayda: 1 } },
{ t: "Tevfik'e bakarsın. O da sana bakıyor.", to: "h3", etki: { tevfik_bakis: true } },
{ t: "Gözlerini kapatırsın. Bir şeyi görmemek için değil, kendini görmemek için.", to: "h3", etki: { fayda: 1 } }
]},

h3: { saat: "Akşam", baslik: "Sedef'in Gözleri", metin: [
"Akşam Sedef'i kuleye götürüyorlar. İki bekçi, iki yanında. Biri annen.",
"Sedef bir an duruyor. Kalabalığın içinde seni görüyor. Bekçilerin elinden kurtulmuyor ama başını sana çeviriyor.",
"“Deren abla,” diyor. Sesi küçük ama meydan sessiz. “Gelecek misin? Saçlarımı örmeye?”",
"Kalabalık sana dönüyor. Annen sana dönüyor. Tevfik, en arkada, yere bakıyor.",
"Bu soruyu cevaplayabileceğin bir dünya yok. Evet dersen yalan. Hayır dersen bir çocuğun son umudunu kesmek. Sus dersen, bütün şehrin yaptığını yapmak.",
"Sedef'in saçları dağınık. Bu sabah kimse örmemiş."
], secenekler: [
{ t: "“Geleceğim,” dersin.", to: "a1", etki: { vicdan: 1, soz_sedef: true } },
{ t: "Kalabalığın önünde itiraf edersin: “Bu kâğıdın çıkmasının sebebi benim.”", to: "a1", etki: { vicdan: 1, isyan: 2, itiraf: true } },
{ t: "Aylin'i bulup kulağına gerçeği söylersin. Yalnızca ona.", to: "a1", etki: { vicdan: 1, aylin_bilir: true } },
{ t: "Bakışını kaçırırsın.", to: "a1", etki: { fayda: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
a1: { saat: "Yedi gün sonra", baslik: "Yedi Gün", metin: [
P(function(d){ return d.yikim; }, "Yedi gün geçti. Işıl gri. Hasatın yarısı çürüdü. Şifa evleri dolu. Üç yaşlı öldü; Işıl'da yıllardır ilk ölümler. Yaşlılar meclisi toplanıyor, dağılıyor, yine toplanıyor. Kimse ne yapacağını bilmiyor; Işıl'ın hiçbir yasası bunu öngörmemiş."),
P(function(d){ return d.yikim && d.teslim; }, "Seni bir odaya kapattılar; bir pencere, bir yatak. Cezan henüz belli değil. Işıl daha önce kimseyi cezalandırmadı. Cezalandırmayı da bilmiyor."),
P(function(d){ return !d.yikim && IC(d); }, "Yedi gün geçti. Işıl her zamanki gibi. Güneş, erik, ayva, nar. Bir çocuk bodruma indi ve şehir tek bir gölge bile kaybetmedi. Bu her şeyden korkunç."),
P(function(d){ return d.geri_dondu; }, "Işıl'a döndün. Umut'un yanakları ilk hafta pembeleşti. Annen sizi kapıda karşıladı; hiçbir şey sormadı. Kimse bir şey sormadı. Gidip dönenlere Işıl sormaz. Yalnızca kabul eder."),
P(DIS, "Yedi gün geçti. Köyde kış başladı. Ahırın içi soğuk, ama Ozan Hoca'nın okulunda bir soba var ve sen her sabah onu yakıyorsun."),
P(function(d){ return d.disarida && !d.umut_gitti; }, "Umut yanında. Öksürüğü geceleri artıyor. Gündüzleri köy çocuklarıyla oynuyor; onlar da öksürüyor, onlar da oynuyor."),
P(function(d){ return d.umut_gitti; }, "Umut gitti. Elçinin elini tutup, dönüp dönüp bakarak. Şimdi Işıl'da, pembe yanaklarıyla, kızkardeşinin neden gelmediğini soruyordur. Belki sormuyordur. Işıl'ın çocukları sorulmayan soruları erken öğrenir."),
"Bir şey bitti, bir şey başladı. Hangisinin hangisi olduğu henüz belli değil."
], secenekler: [
{ t: "Her gün yapman gerekeni yaparsın. Hayat devam ediyor; senin de devam etmen gerek.", to: "a2", etki: { fayda: 1 } },
{ t: "Bu yedi günü anlamaya çalışırsın. Neyi değiştirdin, neyi değiştiremedin?", to: "a2", etki: { vicdan: 1 } },
{ t: "İnsanlarla konuşursun. Herkesle. Gördüklerini, bildiklerini.", to: "a2", etki: { isyan: 1, konustu: true } },
{ t: "Bir mektup yazarsın; kime gideceğini bilmeden.", to: "a2", etki: { vicdan: 1, mektup: true } }
]},

a2: { baslik: "Annen", metin: [
P(function(d){ return d.disarida && !d.umut_gitti; }, "Bir sabah köyün girişinde bir kadın. Yalnız, sırtında küçük bir çıkın. Annen. Işıl'dan çıkmış, üç gün yürümüş."),
P(function(d){ return d.disarida && !d.umut_gitti; }, "“Bekçiliği bıraktım,” diyor. “Bir başkası taşıyor artık. Kim olduğunu bilmek istemiyorum.” Yanına oturuyor. Uzun süre ikiniz de konuşmuyorsunuz."),
P(function(d){ return d.umut_gitti; }, "Elçi bir kez daha geliyor; bu kez annenden bir mektupla. Umut iyi, yazıyor; yanakları pembe. Sonra mektup başka bir şeye dönüyor, sanki yıllardır yazmak istediği bir şeye. Okurken annenin sesini duyuyorsun."),
P(IC, "Bir akşam annenle mutfaktasın. İki bardak ıhlamur. Bir ay önceki gece gibi."),
P(function(d){ return d.yikim; }, "“Bir şey söyleyeceğim,” diyor annen. “Ve ne yapacağını bilmeden söyleyeceğim. Işık söndüğü gece kuzeyden bir fırtına geldi. Kırk yılda bir gelen türden. Hasat o fırtınayla çürümüş olabilir. Hastalık da. Ya da Ahit. Bilmiyoruz. Hiçbir zaman bilemeyeceğiz.” Bardağını bırakıyor. “Belki Ahit hiç yoktu. Belki yalnızca bir şeye inanmak için bir çocuk gerekiyordu.”"),
P(function(d){ return !d.yikim; }, "“Bir şey söyleyeceğim,” diyor annen. “On iki yıl önce, ilk bekçilik yılımda, bir sabah kapının önünde dayanamadım. Konuştum. ‘Günaydın,’ dedim. Sadece bu. Kimse duymadı.” Bardağını bırakıyor. “Hiçbir şey olmadı. Işık sönmedi, hasat çürümedi. Ertesi gün de, sonraki gün de. Ama ben bir daha konuşmadım. Neden, biliyor musun? Korktuğum için değil. Bir şey olmamasından korktuğum için. Eğer bir kelime hiçbir şeyi değiştirmiyorsa, o çocuk orada neden duruyor?”"),
P(function(d){ return !d.umut_gitti; }, "Annen sana bakıyor. On iki yılın ağırlığıyla."),
P(function(d){ return d.umut_gitti; }, "Mektubun sonunda bir satır daha: “Sana bunu yüzüne söyleyemezdim. Kâğıt daha cesur.”")
], secenekler: [
{ t: "“Bunu neden şimdi söylüyorsun?”", to: "a3", etki: { isyan: 1 } },
{ t: function(d){ return d.umut_gitti ? "Mektubu göğsüne bastırırsın." : "Annenin elini tutarsın."; }, to: "a3", etki: { vicdan: 1 } },
{ t: "“Ahit olsa da olmasa da, insanlar inandı. İnanç da bir şeyi ayakta tutar,” dersin.", to: "a3", etki: { fayda: 1 } },
{ t: "Kalkıp pencereye gidersin. Bir şey söyleyemeyecek kadar ağır.", to: "a3", etki: { vicdan: 1 } }
]},

a3: { baslik: "Umut", metin: [
P(function(d){ return d.umut_gitti; }, "Umut'tan bir mektup geliyor, elçiyle. Yedi yaşında bir çocuğun büyük harfleri: “ABLA BURADA HER ŞEY GÜZEL. AMA SEN YOKSUN. NEDEN?”"),
P(function(d){ return !d.umut_gitti; }, "Umut yanına geliyor. Elinde bir resim. Kule, kulenin altında bir oda, odanın içinde bir çocuk. Bu kez çocuğun yüzü üzgün çizilmiş."),
P(function(d){ return !d.umut_gitti; }, "“Abla,” diyor. “Orada bir çocuk var, değil mi? Herkes biliyor. Benim yüzümden mi?”"),
P(function(d){ return d.yikim && !d.umut_gitti; }, "Umut öksürüyor. Yanakları solgun. Şehrin ışığı onun için sönen ilk ışıktı belki; ve son ışığı belki o."),
P(function(d){ return d.nur_evde || (d.yikim && d.ad_verdi); }, "Nur masanın altında, Umut'un yanında oturuyor. İkisi aynı resmi boyuyor. Nur, odanın içindeki çocuğu silip yerine bir pencere çiziyor."),
"Bu sorunun cevabı yedi yaşındaki bir çocuğa nasıl verilir? Belki verilmez. Işıl'da on sekizinci yaş bunun için var: bir şeyi taşıyabilecek yaşa gelene kadar ondan saklamak. Ama sen artık bu düzenin bir parçası olup olmadığını bilmiyorsun."
], secenekler: [
{ t: "Gerçeği söylersin. Bütün gerçeği. Yedi yaşında da olsa.", to: "a4", etki: { isyan: 1, umut_gercek: true } },
{ t: "“Hayır. Senin yüzünden değil,” dersin. Kimsenin yüzünden değilmiş gibi.", to: "a4", etki: { fayda: 1 } },
{ t: "“On sekiz yaşına gelince sana göstereceğim,” dersin. Ve bunu söylediğin için kendinden korkarsın.", to: "a4", etki: { fayda: 1, gosterecek: true } },
{ t: "Onu kucaklarsın ve hiçbir şey söylemezsin.", to: "a4", etki: { vicdan: 1 } }
]},

a4: { saat: "Şafak", baslik: "Saat Kulesi", metin: [
P(DIS, "Köyün en yüksek tepesine çıkıyorsun. Uzakta, ufkun çizgisinde, bir ışık adası: Işıl. Kış ortasında bile parlıyor. Ya da artık parlamıyor; buradan bilmek zor."),
P(IC, "Şafakta saat kulesine çıkıyorsun. Merdivenler bu kez yukarı. Kulenin tepesinden bütün Işıl görünüyor: bahçeler, damlar, meydan, kuzey kapısı."),
P(function(d){ return d.yikim && IC(d); }, "Şehir gri ama yaşıyor. Bacalardan duman çıkıyor; Işıl'da ilk kez insanlar soğuktan korunmak için ateş yakıyor. Bir avluda iki komşu, birlikte odun kırıyor."),
P(function(d){ return !d.yikim && IC(d); }, "Şehir her zamanki gibi altın rengi. Ayağının altında, kulenin derinliğinde, bir çocuk var. Bu sabah ona ekmeği kim götürecek?"),
"Çanın ipi elinin yanında. Bir çekiş ve bütün şehir uyanır.",
"Bu sabah bir karar daha vereceksin. Belki son kararın değil. Ama bütün öncekileri anlamlı kılacak olan."
], secenekler: [
{ t: function(d){ return d.disarida ? "Köyde kalırsın. Ozan Hoca'nın okulunda öğretmen olursun." : "Bekçi olmayı kabul edersin. Bir dahaki ekmeği sen götüreceksin."; }, to: "is", etki: function(d){ if(d.disarida){ d.ogretmen = true; d.vicdan++; } else { d.bekci = true; d.fayda++; } } },
{ t: function(d){ return d.disarida ? "Işıl'a doğru yürürsün. Geri dönmek için değil; kapıda durup gidenlere yol göstermek için." : "Kuzey kapısına yürürsün. Bu sefer dönmemek üzere."; }, to: "is", etki: { gitti: true, isyan: 1 } },
{ t: function(d){ return d.disarida ? "Işıl'a bir mektup yazarsın: on sekiz yaşına basan her gence okunmak üzere." : "Çanı çalarsın. Herkes kuleye gelsin; herkes birlikte aşağı baksın."; }, to: "is", etki: { can: true, isyan: 2 } },
{ t: "Hiçbir şey yapmazsın. Güneşin doğuşunu izlersin. Bazen bir şeyi taşımanın tek yolu onu bırakmamaktır.", to: "is", etki: { vicdan: 1, izledi: true } }
]},

is: { yonlendir: [
{ if: function(d){ return d.can; }, to: "son_can" },
{ if: function(d){ return d.yikim; }, to: "son_karanlik" },
{ if: function(d){ return d.disarida || d.gitti; }, to: "son_gidenler" },
{ if: function(d){ return d.bekci; }, to: "son_bekci" },
{ if: function(d){ return d.hile && !d.itiraf; }, to: "son_kul" },
{ to: "son_isik" }
]},

/* ---------- SONLAR ---------- */
son_can: { son: true, baslik: "Çan", metin: [
P(IC, "Çanı çaldın. Bir kez. İki kez. Yüz kez. Şehir uyandı, kapılar açıldı, insanlar meydana döküldü. Kuleye baktılar. Sonra, birer birer, merdivenlere."),
P(DIS, "Mektubu yazdın. Elçiyle, bir gidenle, bir yolcuyla gönderdin. Kimin okuyacağını bilmeden. Yıllar sonra, kuzey kapısından çıkan bir gencin cebinde bulundu; buruşmuş, defalarca okunmuş."),
"Bir şehrin bir şeyi hep birlikte görmesi, onu tek tek görmekten farklı. Tek tek gören susar; çünkü her biri, ötekilerin de susacağını bilir. Birlikte gören, birbirinin yüzüne bakmak zorunda kalır.",
"O gün Işıl'da ilk kez bir meclis toplandı: yaşlılar değil, herkes. Kimse ne yapılacağını bilmiyordu. Ahidi bozmak mı, sürdürmek mi? Kimin çocuğu, kimin hayatı, kimin mutluluğu?",
"Tartışma günlerce sürdü. Belki hâlâ sürüyor. Bir karar çıkmadı; ama bir şey değişti: artık kimse, bilmediğini söyleyemiyor.",
"Sen bir şeyi çözmedin. Bir sessizliği bozdun. Bazen bir topluluğun yapabileceği en dürüst şey, ne yapacağını bilmediğini birlikte kabul etmektir. Ve bodrumdaki çocuk, ilk kez, kapısının önünde yüzlerce ayak sesi duydu. Susmayan."
]},

son_karanlik: { son: true, baslik: "Karanlık Şehir", metin: [
"Işıl artık sıradan bir şehir. Kışları soğuk, yazları kurak. Bazı yıllar hasat iyi, bazı yıllar kötü. İnsanlar hastalanıyor, iyileşiyor, ölüyor.",
P(function(d){ return d.ad_verdi; }, "Nur, sizin evde büyüyor. Hâlâ güneşe bakamıyor; gölgelerde yaşıyor. Ama gülüyor. Her akşam Umut'a ninniyi söylüyor; eksik kelimeyi artık biliyor."),
P(function(d){ return !d.ad_verdi; }, "Bodrumdaki çocuk Şifa Evi'nde büyüyor. Kimse ona bir ad vermedi; kendi kendine bir ad seçti. Kimseye söylemiyor."),
"Umut iki kış sonra öldü. Solgunluk geri geldi ve şehrin artık onu durduracak ışığı yoktu. Cenazesine yarım şehir geldi. Kimse seni suçlamadı; yüzüne. Ama bir anne yanına gelip sadece “Benimki de,” dedi ve gitti.",
"Bir çocuğu kurtardın ve bir başkasını, kendi kardeşini, kaybettin. Bu hesap mı? Hayır. Bu bir hesap değil. Hesap yapan şehir, Işık'ın şehriydi; sen o şehri bitirdin.",
"Annen bazen Ahit'in hiç olup olmadığını soruyor. Fırtına mıydı, kelime miydi? Bilemiyorsunuz. Belki en çok bu acıtıyor: bir çocuğun yıllarca karanlıkta tutulduğu bir düzenin, belki de hiçbir şeye dayanmadığını bilmeden yaşamak. Ya da dayandığını bilerek.",
"İkisi de bir tür karanlık. Sen birini seçtin."
]},

son_gidenler: { son: true, baslik: "Gidenler", metin: [
P(function(d){ return d.ogretmen; }, "Ozan Hoca'nın ahırdaki okulu büyüdü. Bir oda oldu, iki oda oldu. Köyün çocukları, Işıl'dan gelen gençlerin yanında okumayı öğreniyor. Kimse onlara bodrumu anlatmıyor; çünkü bu köyde bodrum yok. Yalnızca soğuk kışlar ve paylaşılan ekmek var."),
P(function(d){ return d.disarida && !d.umut_gitti; }, "Umut bir yıl dayandı. Son kışında köyün çocuklarıyla kartopu oynadı. Öksürerek, gülerek. Onu köyün mezarlığına, Ozan Hoca'nın diktiği bir erik fidanının dibine gömdün. Fidan büyüdü; Işıl'daki gibi her mevsim değil, yalnızca baharda meyve veriyor."),
P(function(d){ return d.umut_gitti; }, "Umut Işıl'da büyüyor. Mektupları seyrekleşti. On sekizinci yaş gününde bir mektup geldi, bu kez küçük harflerle: “Abla, gördüm. Şimdi anlıyorum. Gelemiyorum. Ama anlıyorum.”"),
P(function(d){ return d.gitti && !d.disarida; }, "Kuzey kapısından geçtin. Bu kez yalnız. Arkanda annen, Umut, bodrum. Önünde ay ve bilmediğin bir dünya. Işıl'da yaşamaya dayanamadın; Işıl'ı değiştirmeye de cesaretin olmadı. Gitmek ikisinin arasında bir yer. Ozan Hoca haklıydı: gitmek de bir susmak."),
"Gidenler kimseyi kurtarmaz. Bodrumdaki çocuk hâlâ orada; ya da yerine bir başkası. Işıl hâlâ altın rengi.",
"Ama gidenler bir şeyi reddeder: suç ortaklığını. Bir sistemin içinde mutlu olmayı. Bu yeterli mi? Hayır. Ama bir şey. Bazen insanın yapabileceği en dürüst şey, bir şeye katılmamaktır; onu değiştiremese bile.",
"Ve bazen geceleri, ufkun çizgisinde o ışık adasına bakarken, şunu düşünüyorsun: her yıl birkaç kişi geliyor. Belki bir gün yeterince kişi gelir. Belki bir gün Işıl, gidenlerden boşalır. Ve geride yalnızca bir çocuk ve bir kapı kalır."
]},

son_bekci: { son: true, baslik: "Yeni Bekçi", metin: [
"Bekçi oldun. Her sabah demir kapının önüne ekmek ve su bırakıyorsun. Tek kelime etmeden.",
P(function(d){ return d.sedef_fisilti || d.soz_sedef; }, "İçeride Sedef. Onun saçlarını örerdin. Şimdi her sabah kapının küçük penceresinden ona bakıyorsun; o sana bakıyor. Birbirinizi tanıyorsunuz. Hiçbir şey söylemiyorsunuz. Bu sessizlik, iki insanın arasında kurulabilecek en ağır bağ."),
"Annen gibi, ilk yıl her gece ağlayacaksın. İkinci yıl ağlamayacaksın ve kendinden nefret edeceksin. Üçüncü yıl nefret etmeyi de bırakacaksın.",
"Bunu biliyorsun ve yine de kabul ettin. Çünkü biri yapmalı. Çünkü yapmazsan bir başkası yapacak ve o başkası belki hiç ağlamayacak. Ya da yalnızca sen, kendine böyle söylüyorsun.",
"Umut on sekiz yaşına geldiğinde aşağı inecek. Kapının önünde, fenerin ışığında, ablasını görecek: elinde bir ekmek, yüzünde hiçbir şey.",
"Bir sistemin içinde vicdanlı kalmanın bir yolu var mı? Belki var: onu en yakından görmek, her gün, kaçmadan. Belki yok: çünkü en yakından görüp yine de devam etmek, vicdanın en derin biçimde susmasıdır.",
"Her sabah bu soruyla kapıya iniyorsun. Cevabı içeride, karanlıkta oturuyor."
]},

son_kul: { son: true, baslik: "Kül", metin: [
"Umut büyüdü. Sağlıklı, güçlü, pembe yanaklı. On sekiz yaşında aşağı indi, kapının penceresinden baktı, eve geldi ve sana sarıldı. “Şanslıydık,” dedi. “Kurada adım çıkmadı.”",
"Şanslıydınız. Evet.",
"Sedef bodrumda dokuz yıl kaldı. Çıktığında konuşamıyordu. Aylin onu evine aldı, perdeleri kapattı. Bazen sokakta karşılaşıyorsunuz. Aylin sana bakıyor. Bir şey biliyor mu? Bilmiyorsun.",
P(function(d){ return d.aylin_bilir; }, "Biliyor. Sen söyledin. Bir kere, kulağına, kura günü. O günden beri sana tek kelime etmedi. Ama bir gün kapına bir paket bıraktı: içinde bir saç tokası. Sedef'in. Ne anlama geldiğini hâlâ bilmiyorsun."),
"Tevfik öldü. Cenazesinde bir altın madalya çıktı çekmecesinden; kimin olduğunu kimse bilmedi. Sen bildin.",
"Kardeşini kurtardın. Bir başkasının kızını bodruma gönderdin; tek bir kâğıt parçasıyla, bir sobanın alevinde. Hiçbir kural çiğnemedin; çünkü hiçbir kural bunu öngörmemişti.",
"Bir şeyi yakmak kolaydır. Külü taşımak zordur. Ve sen bir ömür boyu, kimsenin görmediği bir avuç külü taşıyorsun. Pembe yanaklı kardeşinin her gülüşünde, biraz daha ağır."
]},

son_isik: { son: true, baslik: "Işık Şehri", metin: [
"Işıl'da yaşamaya devam ettin. Güneş, erik, ayva, nar. Umut büyüdü. Sen evlendin, bir çocuğun oldu. Bir kızın. Adını Sedef koymadın; koymayı düşündün.",
"Her yıl gösterim gününde meydanda on sekiz yaşına basan gençler için şenlik kuruluyor. Sen de gidiyorsun. Onların merdivenlerden inişini izliyorsun. Çıkışlarını. Sessizliklerini.",
"Bazen biri gidiyor. Kuzey kapısından. Sen gitmedin. Kalan herkes gibi, sen de nedenini biliyorsun: çünkü burada çocuklar ölmüyor. Çünkü bir çocuk, binlerce çocuk için. Çünkü hesap ortada.",
"Ama hesabın bir yeri hep eksik kalıyor. O yer bodrumda, demir kapının arkasında, dizlerini göğsüne çekmiş oturuyor. Ve “Uslu duracağım” diyor.",
"Mutluluk bir bedelle gelir, derler. Işıl bunu herkesten daha iyi bilir. Ama Işıl'ın bilmediği bir şey var, ya da bilmek istemediği: bedeli ödeyen, mutlu olan değil.",
"Kızın beş yaşında. Gelecek yıl kura var. Adı kâseye girecek."
]}

},

ayna: function(d){
  var out = [];
  var f = d.fayda, v = d.vicdan, i = d.isyan;
  if(f >= v && f >= i) out.push("Bu hikâyede en çok hesaba yaslandın: bir çocuk ve binlerce çocuk. Hesap doğruydu. Ama hesabın bir tarafında hep bir yüz vardı ve o yüz hesaba girmiyordu.");
  else if(v >= i) out.push("Bu hikâyede en çok vicdanına yaslandın: ağladın, dinledin, baktın, sarıldın. Vicdan seni insan tuttu. Ama vicdan, eyleme dönüşmediğinde, bazen yalnızca daha ağır bir susmaktır.");
  else out.push("Bu hikâyede en çok başkaldırdın: kurala, şehre, alışkanlığa. Başkaldırı bir şeyi değiştirdi. Ama her değişimin, kimin üstüne düştüğünü seçemediğin bir bedeli var.");
  if(d.fisildadin) out.push("İlk gece, kurala rağmen, bir çocuğa adını sordun. Fener titredi. Belki rüzgârdı.");
  if(d.hile) out.push("Bir kâğıdı ateşe attırdın. Kimse görmedi. Bir başkasının adı biraz daha ağırlaştı.");
  if(d.yikim) out.push("Bir kapıyı açtın. Ne açtığını hâlâ bilmiyorsun: bir çocuğun hücresini mi, bir şehrin kaderini mi?");
  if(d.disarida) out.push("Gittin. Ama gidenlerin yükü de seninle geldi.");
  if(d.ispiyon) out.push("Bir gidenin gideceğini haber verdin. Kimse durdurmadı; ama sen, bir şeyin parçası olduğunu ilk o gece gösterdin.");
  return out;
},

dipnot: [
{ ad: "Mutluluğun bedeli", t: "Faydacılık, en çok sayıda insana en çok mutluluğu getiren eylemi doğru sayar. Ursula K. Le Guin'in “Omelas'tan Çekip Gidenler” öyküsü bu fikri en keskin hâliyle sınar: bütün bir şehrin mutluluğu tek bir çocuğun acısına dayanıyorsa, bu mutluluk meşru mudur? Dostoyevski de Karamazov Kardeşler'de İvan'a aynı soruyu sordurur." },
{ ad: "Suç ortaklığı", t: "Bir haksızlığı doğrudan yapmasak da onun sürdüğü bir düzenden yararlanıyorsak, ona ne kadar ortağız? Işıl'da kimse çocuğa dokunmuyor; herkes yalnızca bakıyor ve susuyor. Sorumluluğun en çok dağıldığı yer, aynı zamanda en az görüldüğü yerdir." },
{ ad: "Kaçış ve direniş", t: "Albert O. Hirschman bir topluluktan memnun olmayanların iki seçeneği olduğunu söyler: çıkış (exit) ya da ses (voice). Gidenler çıkışı seçer; temiz kalırlar ama hiçbir şeyi değiştirmezler. Ses ise kalmayı ve bedel ödemeyi gerektirir. Bu hikâyedeki her seçim, bu ikisinin arasında bir yerdeydi." },
{ ad: "Çoğunluğun vicdanı", t: "Kalabalığın içinde bireysel sorumluluk duygusu zayıflar; herkes başkalarının da sustuğunu bildiği için susar. Ama aynı kalabalık birlikte görmeye zorlandığında, bu sessizlik sürdürülemez hâle gelir. Çanın sesi, bu yüzden, bir kapının açılmasından daha büyük bir şey olabilir." }
]
});
})();
