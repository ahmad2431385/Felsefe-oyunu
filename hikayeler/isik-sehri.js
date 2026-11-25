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
kategoriler: ["Toplum ve Adalet"],
giris: "Işıl'da kimse hastalanmaz, kimse aç kalmaz, ağaçlar her mevsim meyve verir. Bu mutluluğun bir sebebi var ve on sekiz yaşına basan herkese bir kere gösterilir. Bugün senin doğum günün. Göreceğin şeyden sonra eski hayatına dönemeyeceksin ama ondan kaçmanın da, onu değiştirmenin de bir bedeli var. Hasta küçük bir kardeş, sesini çıkarmayan bir anne ve kapısı hiç açılmayan bir bodrum seni bekliyor. Bu, bir şehrin vicdanının hikâyesi.",
kavramlar: ["Mutluluğun bedeli", "Suç ortaklığı", "Kaçış ve direniş", "Çoğunluğun vicdanı"],
ozet: "Işıl'da kimse hastalanmaz, kimse aç kalmaz, hasat hiç bitmez. Bunun bir sebebi var ve on sekiz yaşına basan herkese gösterilir. Bugün senin doğum günün.",
baslangic: "i1",
durum: { fayda: 0, vicdan: 0, isyan: 0 },

sahneler: {

i1: { baslik: "Gösterim Günü", metin: [
"Işıl'da sabahlar hep güneşli olur, kışın bile. Bahçelerde erik, ayva, nar aynı ağaçta, aynı anda yetişir. Kimse bunun neden böyle olduğunu sormaz, sorsa da hep aynı cevabı alır: “Işıl'da böyledir.”",
"Bugün on sekiz yaşına basıyorsun. Adın Deren. Meydanda senin yaşındaki on iki genç için şenlik kurulmuş, çiçekler asılmış, davullar çalıyor, her yer bal kokulu ekmek kokuyor. Akşam saat kulesinin altına ineceksiniz, buna gösterim diyorlar.",
"Bunu herkes bilir ama kimse anlatmaz. Çocukken büyüklerin kulenin önünden geçerken adımlarını hızlandırdığını görürdün. Sorduğunda biri seni gıdıklar, konuyu değiştirirdi. Teyzen bir keresinde “On sekizinde görürsün,” demiş, sonra ağzından kaçırmış gibi eliyle ağzını kapatmıştı.",
"Annen Nermin sabahtan beri mutfakta, aynı tencereyi üçüncü kez yıkıyor. Yedi yaşındaki kardeşin Umut masanın altında tahta atlarıyla oynuyor. Doğduğunda solgun bir bebekti, kanı bir türlü kırmızıya dönmemişti. Onu şehrin ışığı iyileştirdi. Şifacılar Işıl'ın dışında bir yıl bile yaşamayacağını söylüyor.",
"Annen şenlik elbiseni uzatırken eli eline değiyor, buz gibi.",
"“Akşam aşağı indiğinde ne görürsen gör, bir şey söyleme,” diyor. “Ne olursa olsun. Söz ver bana.”",
"Elbiseyi sana uzatmış ama bırakmıyor."
], secenekler: [
{ t: "“Aşağıda ne var?” diye sorarsın.", to: "i2", etki: { vicdan: 1, sordu: true } },
{ t: "Söz verip şenliğe gidersin. Bugün senin günün.", to: "i2", etki: { fayda: 1, soz: true } },
{ t: "Ozan Hoca'ya gidersin. Bir keresinde “Gösterimden önce bana uğra,” demişti.", to: "i2", etki: { isyan: 1, ozan: true } },
{ t: "Masanın altına, Umut'un yanına oturursun. Ona biraz daha bakmak istiyorsun.", to: "i2", etki: { vicdan: 1, umut_yaninda: true } }
]},

i2: { saat: "Akşam", baslik: "Bodrum", metin: [
P(S("i1A"), "“Göreceksin,” dedi annen, başka bir şey söylemedi. Elbiseni düzeltti, saçını taradı, küçükken yaptığı gibi iki kere aynı yerden."),
P(S("i1B"), "Şenlikte dans ettin, güldün, bal kokulu ekmekten üç dilim yedin. Sonra güneş battı, kulenin saati çaldı ve on iki genç aynı anda sustu, davulcu bile."),
P(S("i1C"), "Ozan Hoca kapıyı açtı, seni görünce bir süre yüzüne baktı. “Hiçbir şey söylemeyeceğim,” dedi. “Söylersem göreceğin şey benim gördüğüm olur. Sen kendininkini gör, sonra gel.” Kapıyı kapatmadan önce eline bir lokum tutuşturdu."),
P(S("i1D"), "Umut sana bir resim gösterdi. Kule, kulenin altında bir ev, evin içinde gülen bir yüz. “Orada kim oturuyor?” diye sordu. “Herkes oraya gidip dönünce susuyor.” Bilmiyorum dedin, gerçekten de bilmiyordun."),
"Kulenin altında dar bir merdiven var. Rutubet, küf ve başka bir şey kokuyor, insan kokuyor. Bekçiler fenerlerle önden iniyor, on iki genç tek sıra hâlinde arkalarından gidiyor. Defne arkandan elbisenin eteğini tutmuş.",
"Kırk iki basamak iniyorsunuz. Duvarlara tırnakla, taşla isimler, tarihler kazınmış. Bir yerde çok silik bir yazı var, “Gördüm. Affet.” Bir başka yerde bir kalp, içinde iki harf.",
"Merdivenin sonunda demir bir kapı, ortasında da küçük bir pencere var. Sırayla bakıyorsunuz, sonunda sıra sana geliyor.",
"İçeride bir çocuk var. Dokuz yaşında olabilir, belki daha büyüktür, o kadar zayıf ki yaşı belli değil. Çıplak taşın üstünde dizlerini göğsüne çekmiş oturuyor, fener ışığında gözlerini kısıyor. Bir köşede boş bir tas, yanında ekmek kırıntıları duruyor.",
"Bekçi kuralı her gence fısıldadığı gibi sana da fısıldıyor: “Konuşma. Dokunma. Teselli etme. Tek bir söz şehrin bütün ışığını söndürür.”",
"Çocuk pencereye doğru sürünüyor. Sesi kupkuru, kırık kırık: “Beni çıkaracak mısın? Uslu duracağım, söz. Uslu duracağım.”"
], secenekler: [
{ t: "Hiçbir şey söylemezsin, kural bu.", to: "i2b", etki: { fayda: 1, sessiz: true } },
{ t: "Kimsenin duyamayacağı kadar alçak sesle fısıldarsın: “Adın ne?”", to: "i2b", etki: { vicdan: 1, fisildadin: true } },
{ t: "Pencereden çekilip ağlarsın.", to: "i2b", etki: { vicdan: 1, agladin: true } },
{ t: "Bu yüzü unutmamak için sonuna kadar bakarsın.", to: "i2b", etki: { isyan: 1, ezberledin: true } }
]},

i2b: { saat: "Gece", baslik: "Merdivenler", metin: [
P(S("i2A"), "Sustun. Çocuk bir süre daha baktı, sonra geri çekilip duvarın dibine oturdu. Senden sonra Çağan baktı, o da sustu."),
P(S("i2B"), "Fısıldadın. Çocuğun ağzı açıldı ama bir ses çıkmadı, adını hatırlamaya çalışıyor gibiydi. Tam o sırada bekçinin fenerindeki alev titredi, sonra düzeldi. Oysa bodrumda rüzgâr yoktu."),
P(S("i2C"), "Pencereden çekildin. Bekçi omzuna dokunup “Geçer,” dedi, kibar, alışkın bir sesle. Sonra cebinden bir mendil çıkarıp uzattı. Mendil tertemiz ve ütülüydü, her gösterim gecesi yanında getiriyormuş demek."),
P(S("i2D"), "Sonuna kadar baktın. Dizindeki yarayı, kirden rengi belli olmayan saçlarını, sol kaşının üstündeki izi gördün. Bekçi seni kolundan çekmek zorunda kaldı."),
"Merdivenleri çıkarken kimse konuşmuyor. Dışarıda gece, yıldızlar, bal kokusu var, şehir her zamanki kadar güzel.",
"Kulenin kapısında aileler bekliyor, çıkan gençlere hiçbir şey sormadan sarılıyorlar. Annen en arkada duruyor. Sana sarılmıyor, yalnızca elbisenin omzundaki tozu silkeliyor.",
"Gençler küçük gruplara ayrılıyor. Defne sinirli sinirli gülüyor: “Abartıyorlar ya. O çocuk orada bir bakıma mutludur bence.” Çağan yere bakarak konuşuyor: “Bir çocuk, koca bir şehir. Hesap ortada.” Tuna merdivenin dibine oturmuş kusuyor, biri saçlarını tutuyor."
], secenekler: [
{ t: "Çağan'ın yanında durursun. Hesap ortada.", to: "i3", etki: { fayda: 1, berk: true } },
{ t: "Defne'nin yanına gidip gülmeye çalışırsın, belki böyle katlanılıyordur.", to: "i3", etki: { fayda: 1, defne: true } },
{ t: "Tuna'nın yanına oturup sırtını sıvazlarsın.", to: "i3", etki: { vicdan: 1, kaan: true } },
{ t: "Kimseyle konuşmadan eve yürürsün.", to: "i3", etki: { yalniz: true } }
]},

i3: { saat: "Gece", baslik: "Bekçi", metin: [
P(S("i2bA"), "Çağan'ın yanında durdun. “Bir çocuğa karşılık bin kişi,” dedi Çağan, parmaklarıyla sayar gibi, “hesap ortada.” Başını salladın. Eve yürürken o hesap ayakkabının içindeki bir taş gibi batıp durdu."),
P(S("i2bB"), "Defne bir şaka yaptı, sen de güldün ama sesin kendi kulağına yabancı geldi. Defne bir an durdu, sonra daha yüksek sesle yine güldü, elbisesinin kurdelesini çözüp sıkı sıkı yeniden bağladı."),
P(S("i2bC"), "Tuna'nın sırtını sıvazladın, sessizce ağlıyordu. “Babam bir ay dedi,” diye fısıldadı, “bir ay sonra unutacakmışım.” Sonra ağzını koluna sildi."),
P(S("i2bD"), "Kimseyle konuşmadan eve yürüdün. Sokaklar bal kokuyordu, her pencerede altın sarısı bir ışık yanıyordu. Pencerelerin birinde bir aile sofraya oturmuş gülüyordu, biri bir şey devirmişti."),
"Eve vardığında annen mutfakta, iki bardak ıhlamur koymuş.",
"Mutfak her zamanki gibi, bakır tencereler, kurutulmuş nane, pencerenin önünde bir saksı fesleğen. Umut'un tahta atları masanın üstünde duruyor, biri devrilmiş.",
P(function(d){ return d.fisildadin; }, "Yüzüne bakar bakmaz anlıyor. “Konuştun,” diyor, soru sormuyor. Korkmuş gibi değil, yorgun. “Fener titredi, değil mi? Hep titrer, neden titrediğini kimse bilmiyor.”"),
"“Ben bekçiyim,” diyor. “On iki yıldır her sabah o kapıya ekmekle su bırakıyorum, tek kelime etmeden.”",
"Bardağını iki eliyle tutuyor. “İlk yıl her gece ağladım. İkinci yıl ağlamadım ve kendime kızdım. Üçüncü yıl kızmayı da bıraktım.” Ihlamuru üflüyor ama içmiyor.",
"“Neden?” diye soruyorsun. “Neden sen?”",
"“Umut doğduğunda solgundu,” diyor. “Şifacılar bir yıl dedi. Bekçiliği kabul edersen aileni şehrin en iyi şifacıları bakar dediler, ben de kabul ettim. Umut yaşıyor. O çocuk da her sabah benim elimden ekmek alıyor.”",
"Umut masanın altında uyuyakalmış, yanakları pembe pembe."
], secenekler: [
{ t: "Annene sarılırsın, onu yargılayamazsın.", to: "i4", etki: { vicdan: 1, sarildi: true } },
{ t: "“Bunu bana nasıl yaşattın?” dersin.", to: "is_gece", etki: { isyan: 1, ofke: true } },
{ t: "“Doğru olanı yaptın, Umut yaşıyor,” dersin.", to: "i4", etki: { fayda: 1 } },
{ t: "Hiçbir şey söylemeden Umut'un yanına uzanırsın.", to: "is_ruya", etki: { vicdan: 1 } }
]},

i4: { saat: "Birkaç gün sonra", baslik: "Gidenler", metin: [
P(S("is_geceA"), "“Yetişkin olmak,” diye tekrarladı Tuna ve güldü, gülüşü öksürüğe döndü. Sabaha karşı ikiniz de evlerinize döndünüz."),
P(S("is_geceB"), "Tuna yüzüne baktı. “Ne yapalım peki?” dedi. Bilmiyordun. O gece çeşmenin başında iki kişi aynı şeyi bilmediğini kabul etti. Tuna elini suya sokup yüzünü yıkadı."),
P(S("is_geceC"), "Sabaha kadar konuşmadan oturdunuz. Güneş doğunca Tuna kalktı, “Sağ ol,” deyip gitti. Neye teşekkür ettiğini ikiniz de bilmiyordunuz."),
P(S("is_geceD"), "“Bir ay,” dedi Tuna. Bir ay sonra gerçekten de unutmuş gibiydi. Meydanda karşılaştığınızda bir şarkı mırıldanıyordu. Sen hâlâ hatırlıyordun."),
P(S("is_ruyaA"), "Annen rüyanı dinledi, yüzü bembeyaz oldu. “Ben de görüyorum o rüyayı,” dedi, “on iki yıldır. İçerideki hep ben oluyorum.” Sonra kalkıp ekmek dilimlemeye başladı."),
P(S("is_ruyaB"), "Bütün gün rüyayı unutmaya çalıştın. Ama akşam kulenin saati çaldığında pencerede kendi yüzünü gördüğün o an geri geldi."),
P(S("is_ruyaC"), "O yüz olmamaya karar verdin. Nasıl olacağını bilmiyordun. Kararı sabah kahvaltısında, ekmeğe bal sürerken verdin, bal bıçaktan masaya damladı."),
P(S("is_ruyaD"), "Umut uyandı, şaşkın şaşkın “Abla ne oldu?” diye sordu. Bir şey olmadı dedin ama onu bırakmadın. Umut da sormadı, Işıl'ın çocukları erken öğrenir."),
P(S("i3A"), "Annen önce şaşırdı, sonra o da seni bırakmadı. Ihlamurlar soğudu."),
P(S("i3B"), "Annen bir şey söylemeden kalkıp bardakları yıkadı. Sırtı sana dönüktü, omuzları titriyordu ama sesi çıkmadı."),
P(S("i3C"), "Annen sana baktı. “Ben de kendime öyle diyorum,” dedi, “her sabah. Doğru olanı yaptım diyorum. Ama doğruysa niye her sabah söylemem gerekiyor Deren?”"),
P(S("i3D"), "Umut uykusunda koluna sarıldı. Nefesi düzenliydi, bir ara mırıldanıp atlarından birinin adını söyledi."),
"Birkaç gün sonra Ozan Hoca'nın evinin önünden geçiyorsun. Kapı açık, içerisi boşaltılmış. Ozan Hoca bahçede, sırtında çantası, ayakkabısının bağcığını bağlıyor.",
"Sana okumayı o öğretmişti, sonra tarihi, sonra şiiri. Bir gün sınıfta “İyilik nedir?” diye sormuştu, kimse bilememişti. Kendisi “Kimse görmezken yaptığın şeydir,” diye cevap vermişti ama sınıfta biri osurunca cümle gülüşmelerin arasında kaybolup gitmişti.",
"“Gidiyorum,” diyor. “Bu gece, kuzey kapısından.”",
"Işıl'da her yıl birkaç kişi gider. Bir sabah kalkıp kuzey kapısından çıkarlar ve bir daha dönmezler. Dışarıda ne olduğunu kimse bilmez.",
"“Kırk yıl çocuklara iyiliği öğrettim,” diyor, “sonra onları o merdivenden indirdim. Artık yapamıyorum. Gel benimle Deren, Umut'u da al.”",
"“Dışarıda Umut yaşamaz ki,” diyorsun.",
"Ozan Hoca bağcığı çekip düğümlüyor. “Biliyorum,” diyor. “O yüzden sormaya utanıyorum. Ama sordum işte.”"
], secenekler: [
{ t: "Bu gece onunla kapıya kadar yürürsün, gitmek için değil, görmek için.", to: "i5", etki: { isyan: 1, kapi: true } },
{ t: "“Gitmek de bir susmak hocam, çocuğu orada bırakıyorsunuz,” dersin.", to: "i5", etki: { isyan: 1, vicdan: 1, gitmek_susmak: true } },
{ t: "“Ben kalıyorum, Umut için,” dersin.", to: "i5", etki: { fayda: 1 } },
{ t: "Annene Ozan Hoca'nın gideceğini söylersin.", to: "i5", etki: { fayda: 1, ispiyon: true } }
]},

i5: { saat: "Gece", baslik: "Ninni", metin: [
P(S("i4A"), "Kuzey kapısı demirden değil, eski, çatlak bir tahtadan yapılmıştı. Ozan Hoca kapıdan geçti, bir kere dönüp el salladı, birkaç adım attı. Sonra karanlıkta çantasının askısındaki küçük zil bir süre daha duyuldu, sonra o da kayboldu."),
P(S("i4B"), "Ozan Hoca uzun uzun yüzüne baktı. “Haklısın,” dedi. “Kalmak da bir susmak. Hangisiyle yaşayabileceğini sen seç.” O gece gitti, bahçe kapısını açık bıraktı."),
P(S("i4C"), "Ozan Hoca başını salladı. “Umut için,” dedi. “Herkesin bir Umut'u var, bu şehir onun için ayakta duruyor.” O gece gitti."),
P(S("i4D"), "Annen seni dinledi, omuz silkti. “Gidenler de bizim gibi,” dedi, “yalnızca bakmayı bıraktılar.” Ozan Hoca o gece gitti ve kimse onu durdurmadı."),
"Bir gece uyuyamıyorsun, kalkıp kuleye yürüyorsun. Bekçi yok, gece nöbeti de yok, çünkü geceleri kimse inmez.",
"Gösterimden beri uykuların değişti. Kulenin saati her çaldığında saymaya başlıyorsun, bir, iki, üç.",
"Demir kapının önüne geliyorsun. İçeriden ince, kırık bir şarkı geliyor.",
"Tanıyorsun, Işıl'ın ninnisi bu. Annen sana söylerdi, sen de Umut'a söylüyorsun: “Uyu güzel kuzum, ay doğdu ışığa...”",
"Çocuk bunu nereden biliyor? Biri yıllar önce bu kapının önünde kuralı çiğneyip mırıldanmış olmalı. Belki de annendi.",
"Şarkı bir yerde takılıyor, çocuk kelimeyi bulamıyor, baştan başlıyor ve yine aynı yerde takılıyor."
], secenekler: [
{ t: "Eksik kelimeyi fısıldarsın.", to: "i6", etki: { vicdan: 1, isyan: 1, sarki: true } },
{ t: "Kapının dibine oturup sessizce dinlersin.", to: "i6", etki: { vicdan: 1, dinledi: true } },
{ t: "Cebindeki bal kokulu ekmeği kapının altından itersin.", to: "i6", etki: { vicdan: 1, ekmek: true } },
{ t: "Duymamış olmak için merdivenlerden koşarak çıkarsın.", to: "i6", etki: { fayda: 1, kacti: true } }
]},

i6: { saat: "Bir ay sonra", baslik: "Kura", metin: [
P(S("i5A"), "“...gümüşe,” diye fısıldadın. Çocuk sustu, sonra şarkıyı baştan, eksiksiz söyledi. Dışarı çıktığında şehrin ışıkları yerli yerindeydi. Bir sokak lambası sönüp yeniden yandı. O lamba hep böyle yapardı, değil mi?"),
P(S("i5B"), "Kapının dibine oturdun. Çocuk şarkıyı on kere denedi, on kere de takıldı. Sabaha karşı sustu. Kalktığında bacakların uyuşmuştu, merdivenleri duvara tutuna tutuna çıktın."),
P(S("i5C"), "Ekmeği kapının altından ittin. İçeriden uzun süre ses gelmedi. Sonra bir hışırtı duyuldu, ardından çok hızlı bir çiğneme sesi, sonra yine sessizlik."),
P(S("i5D"), "Merdivenlerden koşarak çıktın, kulenin dışında nefes nefese durdun. Şehrin bütün ışıkları yanıyordu ama şarkı hâlâ kulağındaydı, hep o yerde, o kelimede takılıyordu."),
"Bir ay sonra meydanda bir duyuru yapılıyor. Şehrin yaşlıları beyazlar giymiş.",
"Yaşlılar en son on iki yıl önce beyaz giymişler. Sen altı yaşındaydın, hatırlamıyorsun. Yalnızca annenin o hafta hiç gülmediğini, bir de yemeklerin hep yanık olduğunu hatırlıyorsun.",
"“Bodrumdaki çocuk tükeniyor,” diyor yaşlıların en yaşlısı. “Ahit gereği yeni bir çocuk seçilecek. Beş ile dokuz yaş arasındaki bütün çocukların adı kuraya girecek. Kura bir hafta sonra çekilecek.”",
"Meydana bir sessizlik çöküyor. Sonra bir anne çocuğunu kucağına alıyor, sonra bir başkası, sonra bir başkası.",
"Umut yedi yaşında.",
"Annen yanında, bembeyaz kesilmiş. Elini tutuyorsun, buz gibi ve hiç kıpırdamıyor.",
"Kâse meydanın ortasında duruyor, içinde yüz on dört isim var. Kura yedi gün sonra."
], secenekler: [
{ t: "Kurayı kabul edersin. Bu şehrin bedeli bu ve herkes ödüyor. Kâseden Umut'un adı da çıkabilir.", to: "f1", etki: { fayda: 2, kabul: true } },
{ t: "Umut'u alıp kuzey kapısından çıkarsın. Dışarıda ciğerleri belki bir yıl dayanır ama burada kura belki hiç ona düşmez.", to: "g1", etki: { isyan: 1, gidenler: true } },
{ t: "Annenin anahtarını alıp o kapıyı açarsın. Ahit bozulur, belki onunla birlikte Umut'un nefesi de.", to: "y1", etki: { isyan: 2, vicdan: 1, yikim: true } },
{ t: "Kura kâtibine gidip Umut'un adını listeden çıkarmanın yolunu ararsın. O zaman kâseden başka bir ad çıkacak.", to: "h1", etki: { hile: true } }
]},


is_gece: { saat: "Gece", baslik: "Gece Yürüyüşü", metin: [
"Annenin cevabını beklemeden evden çıkıyorsun. Kapıyı çarpmıyorsun, Işıl'da kimse kapı çarpmaz. Kapı arkandan yavaşça kapanıyor, mandalı tık diye yerine oturuyor.",
"Sokaklar bomboş ve ılık. Ağaçlar meyveyle dolu ama kimse toplamıyor, nasılsa yarın yine dolu olacaklar. Yerde çürümüş tek bir meyve yok, Işıl'da hiçbir şey çürümez. Ayağına bir erik takılıyor, eğilip alıyor, ısırıyorsun, sonra tükürüyorsun. Tadı yine kusursuz.",
"Meydanda, çeşmenin kenarında merdivenin dibinde kusan çocuk, Tuna oturuyor. Seni görünce yüzünü kolunun yeniyle siliyor.",
"“Uyuyamadım,” diyor. “Gözümü kapatınca o pencereyi görüyorum.” Biraz susuyor. “Babama sordum. ‘Ben de senin yaşındayken öyleydim, bir ay sürer,’ dedi. Bir ay. Babam bir ayda unutmuş.”",
"“Unutmak istemiyorum,” diyor, “ama hatırlamak da istemiyorum. Bir şeyi hatırlayıp hiçbir şey yapmamaya ne deniyor?” Sen bilirsin diye sana bakıyor."
], secenekler: [
{ t: "“Buna yetişkin olmak deniyor,” dersin. Şaka gibi söylersin ama şaka değil.", to: "i4", etki: { fayda: 1 } },
{ t: "Ne yapacağınızı bilmeden “O zaman bir şey yapalım,” dersin.", to: "i4", etki: { isyan: 1, kaan_ortak: true } },
{ t: "Yanına oturup susarsın, birlikte sabahı beklersiniz.", to: "i4", etki: { vicdan: 1 } },
{ t: "“Unut,” dersin, “babanın dediği gibi, bir ay.” Bunu kendine de söylediğini bilerek.", to: "i4", etki: { fayda: 1, unut: true } }
]},

is_ruya: { saat: "Gece", baslik: "Rüya", metin: [
"Umut'un yanına, masanın altına uzanıyorsun. Umut uykusunda koluna sarılıyor. Nefesi sıcak, ağzı bal kokuyor, yatmadan önce kaşık kaşık bal yemiş, annen de kızmış.",
"Uykuya dalıyorsun ve rüyanda bodrumdasın, kapının öbür tarafında, içeride.",
"Her yer karanlık, zemin taş. Kapının küçük penceresinde bir fener, fenerin arkasında yüzler var. Hepsi sana bakıyor ama hiçbiri konuşmuyor.",
"Yüzlerden birini tanıyorsun, annen. Bir başkası Ozan Hoca. Bir başkası Umut, büyümüş, on sekiz yaşında, bıyıkları terlemiş. Sonuncusu da sensin.",
"“Beni çıkaracak mısın?” demek istiyorsun ama sesin çıkmıyor. Yukarıdan şehrin uğultusu geliyor, davul, kahkaha, bir yerde biri yanlış söylediği bir şarkıyı söylüyor.",
"Pencere kapanıyor.",
"Uyandığında Umut hâlâ koluna sarılı, sabah olmuş. Yanağın ıslak, Umut'un salyası mı, senin gözyaşın mı, bilmiyorsun."
], secenekler: [
{ t: "Rüyayı annene anlatırsın.", to: "i4", etki: { vicdan: 1, ruya_anne: true } },
{ t: "Rüyayı unutmaya çalışırsın.", to: "i4", etki: { fayda: 1 } },
{ t: "Rüyadaki kendi yüzünü düşünür, bir daha o yüz olmamaya karar verirsin.", to: "i4", etki: { isyan: 1 } },
{ t: "Umut'u uyandırıp ona uzun uzun, sımsıkı, hiçbir şey açıklamadan sarılırsın.", to: "i4", etki: { vicdan: 1 } }
]},

is_ninni: { baslik: "Ninni", metin: [
P(function(d){ return !d.disarida; }, "O gece annenle birlikte Umut'u yatırıyorsunuz. Umut uyumak istemiyor, yatağın üstünde zıplıyor. Annen ninniye başlıyor: “Uyu güzel kuzum, ay doğdu ışığa...”"),
P(function(d){ return d.disarida; }, "O gece ahırın içinde Umut'u yatırıyorsun ama öksürüğü onu uyutmuyor. Ninniye başlıyorsun: “Uyu güzel kuzum, ay doğdu ışığa...”"),
"Bodrumdaki çocuk da bu ninniyi biliyordu ve bir yerinde takılıyordu. Şimdi sen söylerken aynı yerde sesin titriyor: “...gümüşe.”",
"Ninni ayın doğuşunu, ışığın inişini, kuzuların uyuyuşunu, kimsenin ağlamadığını anlatır. Işıl'ın anneleri bunu yüzlerce yıldır söyler, ilk kimin söylediğini bilen yok.",
"Umut uyuyor, ağzı açık, bir eli yorganın dışında.",
"Ninninin son kelimesi havada kalıyor: “...kimse ağlamaz.”"
], secenekler: [
{ t: "Ninniye bodrumdaki çocuk için yeni bir dize eklersin.", to: "a3", etki: { isyan: 1, yeni_dize: true } },
{ t: "Ninniyi bir daha söylememeye karar verirsin.", to: "a3", etki: { vicdan: 1 } },
{ t: "Ninniyi baştan, eksiksiz söylersin.", to: "a3", etki: { fayda: 1 } },
{ t: "Ninniyi ilk kimin söylediğini araştırmaya karar verirsin.", to: "a3", etki: { isyan: 1, arastir: true } }
]},

is_pencere: { baslik: "Pencere", metin: [
P(function(d){ return !d.disarida; }, "Pencerenin önündesin. Işıl'ın damları, bahçeleri görünüyor, hepsinin ortasında da saat kulesi var. Kulenin saati gece yarısını gösteriyor."),
P(function(d){ return d.disarida; }, "Ahırın küçük penceresinden bakıyorsun. Köyün çamurlu yolu, karanlık evler görünüyor, çok uzakta da ufukta bir ışık adası var. Işıl buradan bir yıldız kadar görünüyor."),
"Annenin anlattıkları kulağında, on iki yıl, tek bir kelime.",
P(function(d){ return !d.umut_gitti; }, "Annen arkanda duruyordu, şimdi yanına geliyor ve ikiniz aynı pencereden bakıyorsunuz. Annenin saçları mutfak kokuyor."),
P(function(d){ return d.umut_gitti; }, "Annenin mektubu elinde, son satırını bir kez daha okuyorsun."),
"“Bazen düşünüyorum,” diyor annen, ya da mektubun bir satırı öyle diyor. “O çocuk da bizi seyrediyor mu acaba? Her yıl on iki yeni yüz görüyor ve hepsi susuyor. Ona göre biz neyiz, hiç düşündün mü?”"
], secenekler: [
{ t: "Gece havası içeri dolsun diye pencereyi açarsın.", to: "a3", etki: { isyan: 1 } },
{ t: "Perdeyi çekersin.", to: "a3", etki: { fayda: 1 } },
{ t: function(d){ return d.umut_gitti ? "Mektubu katlayıp göğsüne koyarsın ve bakmaya devam edersin." : "Annenin elini tutarsın ve birlikte bakmaya devam edersiniz."; }, to: "a3", etki: { vicdan: 1 } },
{ t: "Pencerenin buğusuna parmağınla kimsenin okumayacağı bir ad yazarsın.", to: "a3", etki: { vicdan: 1, cam: true } }
]},

/* ---------- KABUL KOLU ---------- */
f1: { saat: "Kura günü", baslik: "Çekilen İsim", metin: [
P(S("i6A"), "Kurayı kabul ettin. Yedi gün boyunca her gece kâsenin içindeki yüz on dört kâğıttan birini, Umut'un adını düşündün."),
P(function(d){ return d.geri_cekildi; }, "Son anda vazgeçtin. Ne yapmaya kalkıştığını kimse bilmiyor. Eve dönerken kimseyle göz göze gelmemek için yere baktın."),
"Kura günü meydan tıklım tıklım dolu. Çocuklar annelerinin bacaklarına sarılmış, onlara kimse neden sarıldıklarını söylememiş ama biliyorlar.",
"Meydanın ortasındaki yüksek masanın üstünde camdan bir kâse duruyor, içinde katlanmış kâğıtlar var. Cam o kadar temiz ki her kâğıt görünüyor. Herkes gözleriyle kendi çocuğunun kâğıdını arıyor ama hepsi birbirinin aynı.",
"Kâtip Tevfik elini kâseye daldırıp bir kâğıt çekiyor, açıyor, gözlüğünü düzeltiyor.",
"“Sedef Aral. Altı yaşında.”",
"Göğsünde biriken nefes dışarı çıkıyor, Umut değil, Umut değil. Bu sesi kendi göğsünde duyarken meydanın öbür ucundan bir çığlık yükseliyor.",
"Sedef bir sokak ötede oturuyor. Annesi çalışırken ona sen bakardın. Saçını ördürmek için yanına oturur, her seferinde “Sıkı yap ama acıtma,” derdi, sonra acıdığını söyler, gevşetince de bozuldu derdi.",
"Annesi Aylin meydanın ortasında yere çökmüş, kimse ona dokunmuyor. Herkes rahatlamış ve herkes rahatladığı için utanıyor, kimse kimsenin yüzüne bakamıyor."
], secenekler: [
{ t: "Aylin'in yanına gidip yere, onun yanına çökersin.", to: "f2", etki: { vicdan: 1, aylin: true } },
{ t: "Görmesin diye Umut'u kucaklayıp hemen eve götürürsün.", to: "f2", etki: { fayda: 1 } },
{ t: "Sedef'e bakarsın. O da sana bakıyor, bakışını kaçırmazsın.", to: "f2", etki: { vicdan: 1, sedefe_bakti: true } },
{ t: "Kalabalığın içinde kaybolursun.", to: "f2", etki: { fayda: 1 } }
]},

f2: { saat: "Bir gün sonra", baslik: "Eski Çocuk", metin: [
P(S("f1A"), "Aylin'in yanına çöktün. Seni tanıdı, kolunu yakaladı, tırnakları etine geçti. “Sen ona bakardın,” dedi, “sen ona bakardın.” Kolunda üç gün tırnak izleri kaldı."),
P(S("f1B"), "Umut'u eve götürdün. Yolda “Sedef nereye gidecek?” diye sordu. “Bir yere,” dedin. “Ne zaman dönecek?” diye sordu, cevap vermedin. Umut tahta atını cebinden çıkarıp ona baktı."),
P(S("f1C"), "Sedef sana baktı. Ağlamıyordu, şaşkındı. Sonra elini kaldırıp sana el salladı, sen de ona el salladın."),
P(S("f1D"), "Kalabalığın içinde kayboldun. Yüzlerce insan aynı anda başka bir yere bakıyordu, sen de baktın. Bir fırının önünde durup içerideki ekmeklere uzun uzun baktın."),
"Ertesi gece eski çocuğu kuleden çıkarıyorlar, ışık gözlerini kör etmesin diye geceyi beklemişler. Kulenin arka kapısından bir battaniyeye sarılı hâlde, bir bekçinin kucağında çıkıyor. Bekçi onu hiç zorlanmadan taşıyor.",
"Şehrin kenarındaki Şifa Evi'nde penceresiz bir odaya yerleştiriyorlar, ışığa alışana kadar orada kalacakmış. Ne kadar süreceğini kimse söylemiyor, onu ziyarete giden de yok.",
P(function(d){ return d.ezberledin || d.fisildadin; }, "Ona bakınca sol kaşının üstündeki izden tanıyorsun. Gözleri sana dönüp duruyor."),
"Annen yanında duruyor. “Kimse ona bakmayacak,” diyor. “Zaten hiç bakmadılar ki.”"
], secenekler: [
{ t: "Onu evinize almayı teklif edersin.", to: "f3", etki: { vicdan: 2, nur_evde: true } },
{ t: "Her gün Şifa Evi'ne gidip yanında oturacağına söz verirsin.", to: "f3", etki: { vicdan: 1, ziyaret: true } },
{ t: "Hiç adı olmamış bu çocuğa bir ad verirsin, Nur.", to: "f3", etki: { vicdan: 1, ad_verdi: true } },
{ t: "Uzak durursun. Onu her gördüğünde Sedef'i göreceksin.", to: "f3", etki: { fayda: 1 } }
]},

f3: { saat: "Gece", baslik: "İlk Gece", metin: [
P(S("f2A"), "Annen biraz düşündü, sonra “Olur,” dedi. Çocuğu eve getirip perdeleri kapattınız. İlk gece masanın altına girip Umut'un yanında uyudu. Umut uyanınca ona baktı ama korkmadı. “Adın ne?” diye sordu, cevap gelmeyince de tahta atlarından birini uzattı."),
P(S("f2B"), "Her gün gittin. İlk gün yüzüne bakmadı, üçüncü gün baktı. Yedinci gün eline dokundu, çok hafifçe, gerçek olup olmadığını anlamak ister gibi, sonra elini hemen çekti."),
P(S("f2C"), "“Nur,” dedin. Çocuk kelimeyi ağzında bilmediği bir yiyeceği tadar gibi tekrarladı, sonra bir daha söyledi. Işık demek, dedin. Bunun acı bir şaka olduğunu o gece yatarken düşündün."),
P(S("f2D"), "Uzak durdun, annen ise her gün gitti. Bir gün “Seni sordu,” dedi. “Pencereden bakan son yüzlerden birini hatırlıyormuş.”"),
"Sedef'in ilk gecesi. Annen sabah ilk ekmeği götürecek ama gece yarısı elinde anahtarla kapında duruyor.",
"Bütün gün Sedeflerin evinin önünden geçmedin. Akşam uzaktan baktın, Aylin'in penceresinde ışık yandı, söndü, sonra yine yandı.",
"“Benimle gelir misin?” diyor annen. “Bir gün bu görev sana geçebilir, ya da başkasına. Nasıl bir şey olduğunu bilmeni isterim.”",
"Aşağıda, demir kapının arkasında altı yaşında bir kız var ve saçı örülmemiş.",
"Umut odasında uyuyor, yanakları pembe pembe."
], secenekler: [
{ t: "Annenle aşağı inersin.", to: "a1", etki: { fayda: 1, bekci_yolu: true } },
{ t: "Gitmezsin. O kapının önünde susan bir yüz daha olmayacaksın.", to: "a1", etki: { vicdan: 1 } },
{ t: "Annenle inersin ve karanlıkta, kapının dibinde Sedef'in adını fısıldarsın.", to: "a1", etki: { vicdan: 1, isyan: 1, sedef_fisilti: true } },
{ t: "Umut'un başında kalıp bütün gece nefesini dinlersin.", to: "a1", etki: { fayda: 1 } }
]},

/* ---------- GİDENLER KOLU ---------- */
g1: { saat: "Gece", baslik: "Kuzey Kapısı", metin: [
"Gece yarısı Umut'u uyandırıyorsun. “Gezmeye gidiyoruz,” deyip montunu giydiriyorsun. Yanına iki ekmek, bir şişe su ve tahta atlarından birini alıyorsun.",
"Çıkmadan önce odana bakıyorsun, yatağına, kitaplarına, duvardaki çocukluk resimlerine. Resimlerin birinde kulenin altına bir güneş çizmişsin.",
"Annen mutfakta, hiç uyumamış. Sizi görünce kalkıp Umut'un yakasını düzeltiyor, sonra sana bakıyor.",
"“Dışarıda bir yıl yaşar,” diyor, “belki daha az.” “Burada belki hiç olmaz,” diyorsun. Annen sizinle gelmiyor. Biri kalmalı belki, ya da gitmeye cesareti yok, ya da kalmak onun cezası. Ekmeklerin yanına bir kavanoz bal koyuyor.",
"Kuzey kapısı eski, çatlak bir tahta kapı, arkasında karanlık var.",
P(function(d){ return d.kapi; }, "Bir ay önce Ozan Hoca'yı burada uğurlamıştın, şimdi sen geçiyorsun. Kapı o kadar kolay açılıyor ki elin bir süre mandalda kalıyor."),
"Üç adım, beş adım atıyorsunuz. Arkada şehrin ışığı, önde yalnızca ay var.",
"Yirminci adımda Umut öksürüyor, hayatında ilk kez. Şaşkınlıkla elini ağzına götürüp sana bakıyor. “Abla bu ne?”"
], secenekler: [
{ t: "Yürümeye devam edersin. Dönersen bir daha çıkamazsın.", to: "g2", etki: { isyan: 1 } },
{ t: "Durup son bir kez arkana bakarsın.", to: "g2", etki: { vicdan: 1, dondu_bakti: true } },
{ t: "Ayakları da ciğerleri de yorulmasın diye Umut'u sırtına alırsın.", to: "g2", etki: { vicdan: 1 } },
{ t: "Umut'a nereye gittiğinizi bütün gerçeğiyle anlatırsın.", to: "g2", etki: { isyan: 1, umut_bilir: true } }
]},

g2: { saat: "Haftalar sonra", baslik: "Dışarısı", metin: [
P(S("g1A"), "Yürümeye devam ettin. Umut'un öksürüğü sıklaştıkça sen de adımlarını sıklaştırdın."),
P(S("g1C"), "Umut'u sırtına aldın, kolları boynuna dolandı, hırıltılı nefesi ensendeydi. Üç gün onu sırtından indirmedin, omuzların hâlâ ağrıyor."),
P(S("g1B"), "Arkana baktın. Işıl karanlığın ortasında bir ışık adası gibi duruyordu. Umut da baktı. “Ne güzel,” dedi."),
P(S("g1D"), "Umut seni dinledi. Sonunda “Yani o çocuk bizim yüzümüzden mi orada?” diye sordu. “Herkesin yüzünden,” dedin. “O zaman bizim yüzümüzden de,” dedi ve yürümeye devam etti."),
"Üç gün yürüdünüz. Dördüncü gün taş evleri, çamurlu sokakları, öksüren yaşlıları, yamalı giysileriyle bir köye vardınız. Hasat bitmiş, ambarlar yarı yarıya boş.",
"Umut ağaçların meyvesiz olabildiğini Işıl'ın dışında ilk kez görüyor. Çıplak bir dalın altında durup uzun uzun yukarı bakıyor. Hava soğuk, gerçekten soğuk. Umut'un burnu kızarmış, akıyor.",
"Kapıları çaldığınızda açılıyor. Bir kadın size çorba veriyor, çorbanın tuzu az, içinde bir parça kemik var. Bir adam ahırında yer gösteriyor. Kimse kim olduğunuzu sormuyor. “Her yıl sizin oradan birkaç kişi gelir,” diyor kadın, “gözlerinde hep aynı şey olur.”",
"Köyde Ozan Hoca'yı buluyorsun, bir ahırın içinde çocuklara okuma öğretiyor. Sizi görünce gülüyor, sonra Umut'un öksürüğünü duyunca gülüşü siliniyor.",
"Köyün şifacısı Umut'u uzun uzun dinliyor, kulağını göğsüne dayıyor, sonra başını kaldırıyor.",
"“Kanı zayıf,” diyor. “Burada pek bir şey yapamam. Altı ay, belki bir yıl.”"
], secenekler: [
{ t: "Köyde, bu insanların arasında kalırsın, altı ay da olsa bir yıl da olsa.", to: "g3", etki: { vicdan: 1, isyan: 1 } },
{ t: "Belki orada bir şifa vardır diye daha uzağa, büyük şehirlere gidersin.", to: "g3", etki: { isyan: 1, uzak: true } },
{ t: "Ozan Hoca'ya ahırdaki okulda yardım edersin.", to: "g3", etki: { vicdan: 1, okul: true } },
{ t: "İçindeki çocuğu dışarıda bırakarak her gece Umut'a Işıl'ı anlatırsın.", to: "g3", etki: { fayda: 1 } }
]},

g3: { saat: "Aylar sonra", baslik: "Elçi", metin: [
P(S("g2A"), "Köyde kaldın, ambarda çalıştın, ekmeği paylaştın. Köylüler önce sana yabancı gibi baktı ama Umut'un öksürüğünü duyunca bakmayı bıraktılar, burada herkes öksürüyordu."),
P(S("g2B"), "Daha uzağa gitmeyi denedin. İki gün yol aldınız ama Umut'un ateşi çıkınca köye geri döndün."),
P(S("g2C"), "Ahırdaki okulda Ozan Hoca'ya yardım ettin, yirmi çocuk, bir tahta, bir kara kalemle. Umut en arkada oturup öksürürken bile dinledi. Bir gün tahtaya kendi adını yazdı, m'yi ters yazmıştı."),
P(S("g2D"), "Her gece Umut'a Işıl'ı anlattın, altın sabahları, aynı dalda yetişen erikle narı. Bir gece “Orada kimse öksürmez mi?” diye sordu, bir şey diyemedin."),
"Bir sabah köyün girişinde beyazlar giymiş biri beliriyor, Işıl'dan bir elçi. Işıl gidenlerin peşine düşmez ama bu sefer biri gelmiş.",
"Köyün çocukları etrafına toplanmış, biri beyaz eteğine dokunuyor. Elçi geri çekilmiyor ama gülümsemiyor da. Ayakkabılarına çamur bulaşmış, arada bir aşağı bakıyor.",
"“Kura çekildi,” diyor. “Sedef Aral çıktı, altı yaşında. Sizin komşunuz.”",
"“Beni annen gönderdi,” diyor. “Umut'un hastalandığını duymuş. Dönebilirsiniz, Umut iyileşir. Şehir kimseyi cezalandırmaz. Kura çekildi, artık bir tehlike kalmadı.”",
"Umut ahırın köşesinde battaniyeye sarılmış, öksürüyor. Yüzü doğduğu günkü gibi solgun. Ozan Hoca kapının eşiğinde, elinde tebeşirle elçiye bakıyor ve hiçbir şey söylemiyor."
], secenekler: [
{ t: "Umut'la birlikte dönersin.", to: "a1", etki: { fayda: 2, geri_dondu: true } },
{ t: "Umut'la birlikte burada, ne kadar varsa o kadar kalırsın.", to: "a1", etki: { isyan: 1, vicdan: 1, disarida: true } },
{ t: "Umut'u elçiyle geri gönderip sen kalırsın.", to: "a1", etki: { fayda: 1, vicdan: 1, umut_gitti: true, disarida: true } },
{ t: "Elçiye Sedef'i, her şeyi sorarsın, sonra cevabını verirsin, hayır.", to: "a1", etki: { vicdan: 1, isyan: 1, disarida: true, sedefi_sordu: true } }
]},

/* ---------- YIKIM KOLU ---------- */
y1: { saat: "Gece", baslik: "Anahtar", metin: [
"Annenin anahtarı mutfak kapısının arkasında bir çivide asılı duruyor. On iki yıldır her sabah oradan alınıp her öğlen oraya asılıyor. Demirden, ağır, paslı bir anahtar.",
"Küçükken neyin anahtarı olduğunu sormuştun, annen “Kilerin,” demişti. Kilere hiç kilit vurulmamıştı ama sen bunu hiç düşünmemiştin.",
"Gece yarısı mutfaktasın ve elini anahtara uzatıyorsun.",
"“Deren.”",
"Annen kapıda duruyor, geceliğiyle, yalınayak, elinde bir mumla.",
"“Ne yapacağını biliyorum,” diyor. “On iki yıldır her gece aynı şeyi düşündüm, anahtarı alıp inmeyi, kapıyı açmayı. Yapmadım. Umut için, senin için, ya da korktuğum için.” Mumu masaya koyuyor.",
"“Kapı açılırsa ışık söner derler. Hasat çürür, hastalık geri döner, çocuklar ölür. Ben hiç denemedim, kimse denemedi. Belki hiçbir şey olmaz.” Mumun fitilini parmaklarıyla düzeltmeye çalışıyor, eli yanınca çekiyor.",
"Anahtar elinde ve annen seni durdurmuyor."
], secenekler: [
{ t: "“Benimle gel,” dersin.", to: "y2", etki: { vicdan: 1, anne_geldi: true } },
{ t: "“Beni durdurma,” deyip yürürsün.", to: "y2", etki: { isyan: 1 } },
{ t: "Annenin yüzüne dayanamayıp anahtarı çiviye geri asarsın.", to: "f1", etki: { fayda: 1, geri_cekildi: true, yikim: false, kabul: true } },
{ t: "Anneni mutfağa kilitlersin. Bu yük onun değil, senin olacak.", to: "y2", etki: { isyan: 1, kilitledi: true } }
]},

y2: { saat: "Gece", baslik: "Karanlıkta", metin: [
P(S("y1A"), "Annen bir süre olduğu yerde durdu, sonra mumu alıp önden yürüdü. On iki yıldır her sabah indiği merdivenleri ilk kez gece iniyordu."),
P(S("y1B"), "Annen kenara çekildi ve arkandan hiçbir ses gelmedi."),
P(S("y1D"), "Kapıyı kilitledin. İçeriden ses gelmedi, annen ne kapıyı çaldı ne de bağırdı."),
"Anahtar kilitte dönüyor, pas gıcırdıyor ve demir kapı açılıyor.",
"İçerisi sandığından küçük. Duvarlarda tırnak izleri var. Bir köşede taş bir tasla ekmek kırıntıları, öbür köşede taşa oyulmuş bir çukur var, tuvalet. Koku boğazına yapışıyor.",
"Çocuk duvarın dibinde oturuyor. Seni görünce korkuyla umudun birbirinden ayrılmadığı bir ses çıkarıyor.",
"Yanına diz çöküp elini uzatıyor, ona dokunuyorsun. Teni soğuk, kemikleri incecik.",
"“Buradayım,” diyorsun. “Geçti, artık geçti.”",
"Yukarıda bir şey oluyor. Kulenin saati yanlış bir saatte bir kere çalıyor. Sonra merdivenden aşağı bir rüzgâr iniyor ve fener sönüyor.",
"Karanlıkta çocuğun eli elini buluyor. “Şimdi ne olacak?” diye fısıldıyor."
], secenekler: [
{ t: "Onu kucaklayıp merdivenlerden çıkarırsın, meydana, gökyüzünün altına.", to: "y3", etki: { isyan: 1, meydana: true } },
{ t: "Sabaha kadar onunla burada, karanlıkta kalırsın.", to: "y3", etki: { vicdan: 1, kaldi: true } },
{ t: "Ona bir ad verirsin, Nur.", to: "y3", etki: { vicdan: 1, ad_verdi: true } },
{ t: "Herkes gelsin, herkes görsün diye kulenin çanını çalmaya koşarsın.", to: "y3", etki: { isyan: 2, can: true } }
]},

y3: { saat: "Sabah", baslik: "Kalabalık", metin: [
P(S("y2A"), "Meydana çıktığınızda gökyüzü griydi, Işıl'ın ilk gri sabahıydı. Çocuk gözlerini kapattı, gri bile ona fazla gelmişti."),
P(S("y2B"), "Sabaha kadar karanlıkta oturdunuz. Çocuk başını omzuna koyup uyudu, nefes alırken ağzından ıslığa benzer bir ses çıkıyordu. Yukarıdan koşan ayak sesleri, bağırışlar, bir çan sesi geldi ama kıpırdamadın."),
P(S("y2C"), "“Nur,” dedin. Çocuk “Nur,” diye tekrarladı ve güldü. Kuru, kırık bir sesti ama bir gülüştü."),
P(S("y2D"), "Çanı çaldın, bir kere, iki kere, on kere. İp kollarını yaktı. Şehir uyandı, herkes kuleye koştu, herkes aynı anda merdivenden aşağı baktı."),
"Sabah Işıl gri uyanıyor. Ağaçlardaki meyveler bir gecede buruşmuş, kuyuların suyu bulanmış, şenlik çiçekleri kurumuş.",
"İnsanlar sokağa çıkıp gökyüzüne bakıyor. Yaşlı bir adam bahçesinde buruşmuş bir elmayı elinde tutuyor, ne yapacağını bilemeyip cebine koyuyor.",
"Bir ev ötede bir çocuk öksürüyor, başka bir evde bir yaşlı ateşleniyor.",
"Umut evde, annenin kollarında. Yanakları solgun ve öksürüyor.",
"Meydan kalabalık. Herkes sana bakıyor ama kimse bir şey söylemiyor, henüz.",
"Kucağında ateşli bir bebekle bir kadın öne çıkıyor. “Ne yaptın?” diyor, sesini yükseltmeden. “Bize ne yaptın?”",
"Çocuk arkanda, eteğine yapışmış duruyor."
], secenekler: [
{ t: "Çocuğu kalabalığın önüne çıkarırsın: “Buna bakın. Hepiniz bakın.”", to: "a1", etki: { isyan: 2, yuzlestirdi: true } },
{ t: "Kalabalık seni dinlemeyecek, çocuğu alıp kaçarsın.", to: "a1", etki: { vicdan: 1, kacti2: true } },
{ t: "Kadına cevap verirsin: “Bir çocuğu kurtardım ve sizin çocuğunuzu tehlikeye attım. İkisi de doğru.”", to: "a1", etki: { vicdan: 1, isyan: 1, durust: true } },
{ t: "Çocuğu annene verip kendini yaşlılar meclisine teslim edersin.", to: "a1", etki: { fayda: 1, teslim: true } }
]},

/* ---------- HİLE KOLU ---------- */
h1: { saat: "Gece", baslik: "Kâtip", metin: [
"Kâtip Tevfik'in evi şehrin en eski sokağında. Kapıyı kendisi açıyor. Altmışlarında, ince, gözlüklü bir adam, elinde bir kalem var. Seni görünce şaşırmıyor.",
"Bahçede güller, kapıda asma, pencerede dantel perde var. Bir süre neyin eksik olduğunu bulamıyorsun, sonra buluyorsun, ne avluda ne pencerenin önünde hiç oyuncak yok.",
"“Kardeşin için geldin,” diyor, soru sormuyor. “Her kuradan önce birkaç kişi gelir ve hep aynı şeyi söyler. Kardeşim için, kızım için, torunum için.”",
"Seni içeri alıyor. Masanın üstünde içinde kâğıtlar olan bir kâse var, yarın çekilecek kuranın kâsesi.",
"“Bir isim çıkarsa öbürlerinin çıkma ihtimali artar,” diyor. “Yüz on dört kâğıt var. Biri eksilirse her biri biraz daha ağırlaşır. Bodruma birinin girmesi şart Deren. Kimin gireceğini değiştirebilirsin ama kimsenin girmemesini sağlayamazsın.”",
"Annenin bekçi madalyası cebinde, altından, ağır bir madalya. Işıl'da onunla bir ev alınır.",
"Tevfik madalyaya bakmıyor ama bakmamaya uğraştığı belli, gözlüğünü iki kere düzeltiyor."
], secenekler: [
{ t: "Madalyayı masaya bırakırsın.", to: "h2", etki: { fayda: 1, rusvet: true } },
{ t: "“Bunu yapmazsan önceki kuraları kimin için değiştirdiğini herkese söylerim,” dersin.", to: "h2", etki: { isyan: 1, tehdit: true } },
{ t: "Dizlerinin üstüne çöküp yalvarırsın.", to: "h2", etki: { vicdan: 1, yalvardi: true } },
{ t: "Vazgeçip çıkarsın. Kura kimi seçerse seçsin, seçen sen olmayacaksın.", to: "f1", etki: { vicdan: 1, geri_cekildi: true, hile: false, kabul: true } }
]},

h2: { saat: "Kura günü", baslik: "Sedef", metin: [
P(S("h1A"), "Tevfik madalyayı aldı ama cebine değil, masanın çekmecesine koydu. “Bunu ben istemedim,” dedi, “sen verdin.” Sonra kâseden bir kâğıt çıkarıp sobaya attı."),
P(S("h1B"), "Tevfik uzun uzun yüzüne baktı, sonra güldü. “Herkes bilir,” dedi, “ama kimse söylemez, sen de söylemeyeceksin. Ama peki, kardeşin için.” Kâseden bir kâğıt çıkarıp sobaya attı."),
P(S("h1C"), "Tevfik seni yerden kaldırdı. “Kalk,” dedi. “Diz çöken her kardeş için bunu yapsam kâse bomboş kalırdı.” Sonra kâseden bir kâğıt çıkarıp okumadan sobaya attı."),
"Kura günü geliyor, meydan dolu. Tevfik elini kâseye daldırıp bir kâğıt çıkarıyor ve açıyor.",
"Dün gece uyumadın. Sabah aynaya baktığında yüzün hiç değişmemişti, bunu beklemiyordun.",
"“Sedef Aral. Altı yaşında.”",
"Bir sokak ötede oturuyorlar, Sedef'in saçlarını sen örerdin.",
"Bu ismin çıkma ihtimali dün geceden beri biraz daha büyüktü. Yüz on dörtte bir değil, yüz on üçte birdi. Tevfik bunu biliyor, sen de biliyorsun.",
"Sedef'in annesi Aylin meydanın ortasında yere çöküyor. Umut senin elini tutuyor, eli sıcak ve pembe."
], secenekler: [
{ t: "Aylin'in yanına gidip yere çökersin.", to: "h3", etki: { vicdan: 1 } },
{ t: "Umut'u kucaklayıp eve koşarsın.", to: "h3", etki: { fayda: 1 } },
{ t: "Tevfik'e bakarsın, o da sana bakıyor.", to: "h3", etki: { tevfik_bakis: true } },
{ t: "Gözlerini kapatırsın.", to: "h3", etki: { fayda: 1 } }
]},

h3: { saat: "Akşam", baslik: "Sedef'in Gözleri", metin: [
P(S("h2A"), "Aylin'in yanına gidip yere çöktün. Aylin seni itti, sonra itmeyi bıraktı."),
P(S("h2B"), "Umut'u kucaklayıp eve koştun. Kapıyı kapatınca Umut “Sedef'e ne oldu?” diye sordu. Cevap vermedin, Umut'a bir bardak süt koydun, elin titredi, süt taştı."),
P(S("h2C"), "Tevfik'e baktın, o da sana baktı. Gözlüğünün arkasında ne suçluluk vardı ne de zafer, yalnızca yorgunluk. Kâseyi kucağına alıp masadan indi."),
P(S("h2D"), "Gözlerini kapattın ama Aylin'in sesi yine de geldi."),
"Akşam Sedef'i kuleye götürüyorlar. İki yanında iki bekçi var, biri annen.",
"Bütün şehir meydanda. Kimse gelmek istemez ama herkes gelir. Fenerler yanıyor. Aylin en önde, iki kadının koluna girmiş duruyor.",
"Sedef kalabalığın içinde seni görüyor. Bekçilerin elinden kurtulmaya çalışmıyor ama başını sana çeviriyor.",
"“Deren abla,” diyor. Meydan o kadar sessiz ki küçücük sesi herkese duyuluyor. “Gelecek misin? Saçlarımı örmeye?”",
"Kalabalık sana dönüyor, annen sana dönüyor. Tevfik en arkada yere bakıyor.",
"Sedef'in saçları dağınık, bu sabah kimse örmemiş."
], secenekler: [
{ t: "“Geleceğim,” dersin.", to: "a1", etki: { vicdan: 1, soz_sedef: true } },
{ t: "Kalabalığın önünde itiraf edersin: “Bu kâğıdın çıkmasının sebebi benim.”", to: "a1", etki: { vicdan: 1, isyan: 2, itiraf: true } },
{ t: "Aylin'i bulup gerçeği yalnızca onun kulağına söylersin.", to: "a1", etki: { vicdan: 1, aylin_bilir: true } },
{ t: "Bakışlarını kaçırırsın.", to: "a1", etki: { fayda: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
a1: { saat: "Yedi gün sonra", baslik: "Yedi Gün", metin: [
P(S("f3A"), "Annenle aşağı indin. Annen ekmeği tek kelime etmeden kapının dibine bıraktı. İçeriden “Anne?” diye bir ses geldi, Sedef'in sesi. Annen dönüp merdivenleri çıktı, sen bir saniye daha kaldın."),
P(S("f3B"), "Gitmedin, annen tek başına indi. Sabah döndüğünde gözlerinin altı mosmordu. Sen bir şey sormadın, o bir şey söylemedi, kahvaltıda ikiniz de reçel kavanozunu birbirinize uzattınız."),
P(S("f3C"), "Annenle inip kapının dibinde Sedef'in adını fısıldadın. İçeriden önce bir nefes, sonra bir fısıltı geldi: “Deren abla?” Annen seni kolundan çekti."),
P(S("f3D"), "Umut'un başında kalıp bütün gece nefesini dinledin. Bir ara uykusunda güldü, neye güldüğünü bilmiyorsun."),
P(S("y3A"), "Çocuğu kalabalığın önüne çıkarıp “Buna bakın, hepiniz bakın,” dedin. Bazıları baktı, bazıları başını çevirdi. Bir anne çocuğunun gözlerini kapattı ama kimse gitmedi."),
P(S("y3B"), "Çocuğu alıp kaçtın, ara sokaklardan, bahçelerden geçip bir samanlığa saklandınız. Arkandan kimse gelmedi. Samanların arasında çocuk hapşırdı, sonra bir daha hapşırdı, sonra güldü."),
P(S("y3C"), "“Bir çocuğu kurtardım ve sizin çocuğunuzu tehlikeye attım, ikisi de doğru,” dedin. Kadın bir süre yüzüne baktı, sonra bebeğini öbür koluna alıp gitti."),
P(S("y3D"), "Çocuğu annene verip yaşlılar meclisine yürüdün. Beyazlı yaşlılar seni sessizce dinledi. Sonra en yaşlıları “Sen yalnızca kapıyı açtın,” dedi, “biz o kapıyı yıllarca kapalı tuttuk.” Seni cezalandırmadılar."),
P(S("h3A"), "Sedef'e “Geleceğim,” dedin. Başını salladı, kulenin kapısında bir kere arkasına döndü."),
P(S("h3B"), "“Bu kâğıdın çıkmasının sebebi benim,” dedin ve meydan sustu. Tevfik yere baktı. Aylin sana doğru yürüyüp yüzüne bir tokat attı, kulağın çınladı. Tokattan sonra uzun bir sessizlik oldu."),
P(S("h3C"), "Gerçeği Aylin'in kulağına söyledin, hiçbir şey demedi. Ertesi gün tek kelime etmeden kapına bir ekmek bıraktı."),
P(S("h3D"), "Bakışlarını kaçırdın. Kulenin kapısı kapandı, menteşesi gıcırdadı."),
P(function(d){ return d.yikim; }, "Yedi gün geçti ve Işıl hâlâ gri. Hasadın yarısı çürüdü, şifa evleri dolup taştı. Üç yaşlı öldü, Işıl'da yıllardır ilk ölümler bunlar. Meclis toplanıyor, dağılıyor, yine toplanıyor."),
P(function(d){ return d.yikim && d.teslim; }, "Seni bir pencereyle bir yataktan ibaret bir odaya kapattılar. Cezan ne olacak, belli değil, Işıl daha önce kimseyi cezalandırmamış, nasıl yapılacağını bilmiyorlar. Yemeğini getiren kadın her seferinde özür diliyor."),
P(function(d){ return !d.yikim && IC(d); }, "Yedi gün geçti ve Işıl her zamanki gibi, güneş, erik, ayva, nar. Bir çocuk bodruma indi ve şehirde tek bir gölge bile eksilmedi."),
P(function(d){ return d.geri_dondu; }, "Işıl'a döndün. Umut'un yanakları ilk hafta pembeleşti. Annen sizi kapıda karşıladı, bir şey sormadı, kimse bir şey sormadı. Komşu kadın bir tepsi börek getirdi, “Hoş geldiniz” dedi ama “Nerede kaldınız” demedi."),
P(DIS, "Yedi gün geçti, köyde kış başladı. Ahır soğuk ama Ozan Hoca'nın okulunda bir soba var. Her sabah onu sen yakıyorsun, ilk günler hep ortalığı dumana boğarak."),
P(function(d){ return d.disarida && !d.umut_gitti; }, "Umut yanında, öksürüğü geceleri artıyor. Gündüzleri köyün çocuklarıyla çamurda oynuyor, onlar da öksürüyor, onlar da oynuyor."),
P(function(d){ return d.umut_gitti; }, "Umut gitti, elçinin elini tutup dönüp dönüp arkasına bakarak. Tahta atını sana bıraktı."),
"Gösterimden bu yana kaç gün geçtiğini saymayı bıraktın."
], secenekler: [
{ t: "Her gün yapman gerekeni yaparsın, hayat devam ediyor.", to: "a2", etki: { fayda: 1 } },
{ t: "Neyi değiştirip neyi değiştiremediğini, bu günleri anlamaya çalışırsın.", to: "a2", etki: { vicdan: 1 } },
{ t: "İnsanlarla, herkesle gördüklerini konuşursun.", to: "a2", etki: { isyan: 1, konustu: true } },
{ t: "Kime gideceğini bilmeden bir mektup yazarsın.", to: "a2", etki: { vicdan: 1, mektup: true } }
]},

a2: { baslik: "Annen", metin: [
P(S("a1A"), "Her gün yapman gerekeni yaptın, ekmeğini, suyunu, işini. Ama her akşam eve dönerken kulenin önünde adımların yavaşladı."),
P(S("a1B"), "O günleri anlamaya çalıştın. Bir kâğıda iki sütun çizdin, ikinci sütun daha uzun çıktı. Kâğıdı katlayıp cebine koydun, sonra pantolonla birlikte yıkandı."),
P(S("a1C"), "Herkesle konuştun, komşularla, yaşlılarla, çarşıdakilerle. Çoğu dinleyip başını salladı, biri seni kapıdan kovdu. Yaşlı bir kadın elini tutup “Ben de biliyorum evladım,” dedi, “altmış yıldır biliyorum.”"),
P(S("a1D"), "Kime gideceğini bilmeden bir mektup yazdın, sonunda zarfın üstüne “Aşağıdakine” yazdın."),
P(function(d){ return d.disarida && !d.umut_gitti; }, "Bir sabah köyün girişinde yalnız bir kadın görünüyor, sırtında bir çıkın, ayakkabıları çamurdan görünmüyor. Annen bu. Işıl'dan çıkıp üç gün yürümüş."),
P(function(d){ return d.disarida && !d.umut_gitti; }, "“Bekçiliği bıraktım,” diyor. “Artık başkası taşıyor, kim olduğunu bilmek istemiyorum.” Yanına oturup çıkınından bir kavanoz bal çıkarıyor."),
P(function(d){ return d.umut_gitti; }, "Elçi bir kez daha geliyor, bu sefer annenden bir mektup getirmiş. Umut iyiymiş, yanakları pembeymiş. Sonra mektup başka bir şeye geçiyor."),
P(IC, "Bir akşam annenle mutfakta oturuyorsunuz, önünüzde iki bardak ıhlamur var."),
P(function(d){ return d.yikim; }, "“Sana bir şey söyleyeceğim,” diyor annen. “Işığın söndüğü gece kuzeyden bir fırtına geldi, kırk yılda bir gelen türden. Hasat o fırtınayla çürümüş olabilir, hastalık da onunla gelmiş olabilir. Ya da Ahit'ten oldu. Bilmiyoruz, bilemeyeceğiz de.” Bardağı bırakıyor. “Belki hiç Ahit yoktu. Belki birileri bir şeye inanmak için bir çocuğa ihtiyaç duydu.”"),
P(function(d){ return !d.yikim; }, "“Sana bir şey söyleyeceğim,” diyor annen. “On iki yıl önce, ilk yılımda bir sabah kapının önünde dayanamadım ve ‘Günaydın’ dedim. Yalnızca bunu dedim.” Bardağı bırakıyor. “Hiçbir şey olmadı, ışık sönmedi, hasat çürümedi. Ama bir daha konuşmadım. Korktuğum için değil. Bir kelime hiçbir şeyi değiştirmiyorsa o çocuk orada neden duruyor? Bunu bilmek istemedim.”"),
P(function(d){ return !d.umut_gitti; }, "Annen ıhlamurundan bir yudum alıyor, soğumuş, yüzünü buruşturuyor."),
P(function(d){ return d.umut_gitti; }, "Mektubun sonunda bir satır daha var: “Bunu sana yüzüne söyleyemezdim. Kâğıt benden cesur.”")
], secenekler: [
{ t: "“Bunu neden şimdi söylüyorsun?”", to: "a3", etki: { isyan: 1 } },
{ t: function(d){ return d.umut_gitti ? "Mektubu göğsüne bastırırsın." : "Annenin elini tutarsın."; }, to: "is_ninni", etki: { vicdan: 1 } },
{ t: "“Ahit olsa da olmasa da insanlar inandı. İnanmak da bir şeyi ayakta tutar,” dersin.", to: "a3", etki: { fayda: 1 } },
{ t: "Kalkıp pencereye gidersin.", to: "is_pencere", etki: { vicdan: 1 } }
]},

a3: { baslik: "Umut", metin: [
P(function(d){ return d.son === "a2A" && !d.umut_gitti; }, "“Bunu neden şimdi söylüyorsun?” diye sordun. Annen uzun süre konuşmadı. “Çünkü sen sordun,” dedi, “ben hiç sormadım.”"),
P(function(d){ return d.son === "a2A" && d.umut_gitti; }, "Mektubu bir daha okuyup neden şimdi yazdığını düşündün. Cevap son satırdaydı."),
P(S("a2C"), "“İnanmak da bir şeyi ayakta tutar,” dedin. Annen gözlerini kapadı. “Evet,” dedi, “bir duvar gibi. Arkasını görmemek için.”"),
P(S("is_ninniA"), "Ninniye bir dize ekledin: “Bir kuzu karanlıkta, kimse sormaz adını.” Annen duydu ama bir şey demedi. Ertesi gece Umut o dizeyi yanlış hatırlayarak kendisi söyledi."),
P(S("is_ninniB"), "Ninniyi bir daha söylemeyecektin. Ertesi gece Umut istedi, sen sustun. Umut kendi kendine söyledi, eksik, yanlış, takıla takıla."),
P(S("is_ninniC"), "Ninniyi baştan sona eksiksiz söyledin. Umut daha “kimse ağlamaz”a gelmeden uyumuştu."),
P(S("is_ninniD"), "Ninninin nereden geldiğini aramaya başladın, eski kitaplara baktın, yaşlılara sordun. Bir kayıtta bir annenin adı geçiyordu ama sayfa yırtıktı, adın yalnızca ilk harfi kalmıştı."),
P(S("is_pencereA"), "Pencereyi açtın, gece havası soğuktu. Annen bir şey demedi ama pencereyi kapatmadı da."),
P(S("is_pencereB"), "Perdeyi çektin. “Ben de hep çekerim,” dedi annen."),
P(S("is_pencereC"), "Birlikte uzun uzun baktınız, ne gördüğünüzü konuşmadınız."),
P(S("is_pencereD"), "Buğulu cama bir ad yazdın. Sabah buğu kurudu, ad da gitti, camda yalnızca parmağının yağlı izi kaldı."),
P(function(d){ return d.umut_gitti; }, "Elçiyle Umut'tan bir mektup geliyor, yedi yaşında bir çocuğun kocaman harfleriyle yazılmış: “ABLA BURADA HER ŞEY GÜZEL. AMA SEN YOKSUN. NEDEN?” Altına bir at çizmiş."),
P(function(d){ return !d.umut_gitti; }, "Umut elinde bir resimle yanına geliyor. Bir kule, kulenin altında bir oda, odanın içinde bir çocuk çizmiş. Bu sefer çocuğun ağzını aşağı doğru çizmiş."),
P(function(d){ return !d.umut_gitti; }, "“Abla,” diyor, “orada bir çocuk var değil mi? Herkes biliyor. Benim yüzümden mi?”"),
P(function(d){ return d.yikim && !d.umut_gitti; }, "Umut öksürüyor, yanakları solgun."),
P(function(d){ return d.nur_evde || (d.yikim && d.ad_verdi); }, "Nur masanın altında, Umut'un yanında oturuyor, ikisi aynı resmi boyuyor. Nur odanın içindeki çocuğu silip yerine bir pencere çiziyor."),
"Umut cevap bekliyor, resmi buruşturmamaya çalışarak iki eliyle tutuyor."
], secenekler: [
{ t: "Yedi yaşında da olsa ona bütün gerçeği söylersin.", to: "a4", etki: { isyan: 1, umut_gercek: true } },
{ t: "Kimsenin yüzünden değilmiş gibi “Hayır, senin yüzünden değil,” dersin.", to: "a4", etki: { fayda: 1 } },
{ t: "Söylerken kendinden korkarak “On sekizine gelince göstereceğim,” dersin.", to: "a4", etki: { fayda: 1, gosterecek: true } },
{ t: "Onu kucaklarsın ve hiçbir şey söylemezsin.", to: "a4", etki: { vicdan: 1 } }
]},

a4: { saat: "Şafak", baslik: "Saat Kulesi", metin: [
P(S("a3A"), "Umut'a gerçeği söyledin. Umut sustu, sonra nefesini dinler gibi elini göğsüne koydu. “Bu nefes onun mu?” diye sordu, cevap veremedin."),
P(S("a3B"), "“Senin yüzünden değil,” dedin, Umut da yedi yaşındaydı, inandı. Ama gece uykusunda kimsenin ona söylemediği bir adı sayıkladı."),
P(S("a3C"), "“On sekizine gelince göstereceğim,” dedin, Umut da başını salladı. Tam o an annenin on bir yıl önce sana aynı cümleyi kurduğunu hatırladın."),
P(S("a3D"), "Onu kucakladın, Umut da bir şey sormadı. Resim aranızda buruşup kaldı."),
P(DIS, "Köyün en yüksek tepesine çıkıyorsun. Uzakta, ufukta bir ışık adası duruyor, Işıl. Kışın ortasında bile parlıyor, ya da artık parlamıyor, buradan anlaşılmıyor."),
P(IC, "Şafakta saat kulesine çıkıyorsun, bu sefer merdivenler yukarı gidiyor. Tepeden bütün Işıl görünüyor, bahçeler, damlar, meydan, kuzey kapısı."),
P(function(d){ return d.yikim && IC(d); }, "Şehir gri ama yaşıyor. Bacalardan duman çıkıyor, insanlar ilk kez soğuktan korunmak için ateş yakıyor. Bir avluda iki komşu birlikte odun kırıyor, biri baltayı tutmayı bilmiyor, öbürü ona gösteriyor."),
P(function(d){ return !d.yikim && IC(d); }, "Şehir her zamanki gibi altın sarısı. Ayaklarının altında, kulenin dibinde bir çocuk var."),
"Çanın ipi elinin yanında duruyor. Bu çan yüzyıllardır yalnızca şenliklerde ve kurada çalınmış.",
"İp kalın ve eski, ellerin değdiği yerler parlamış."
], secenekler: [
{ t: function(d){ return d.disarida ? "Köyde kalırsın. Ozan Hoca'nın okulunda öğretmen olursun." : "Bekçi olmayı kabul edersin. Bir dahaki ekmeği sen götüreceksin."; }, to: "is", etki: function(d){ if(d.disarida){ d.ogretmen = true; d.vicdan++; } else { d.bekci = true; d.fayda++; } } },
{ t: function(d){ return d.disarida ? "Işıl'a doğru yürürsün. Geri dönmek için değil. Kapıda durup gidenlere yol göstermek için." : "Kuzey kapısına yürürsün. Bu sefer dönmemek üzere."; }, to: "is", etki: { gitti: true, isyan: 1 } },
{ t: function(d){ return d.disarida ? "Işıl'a bir mektup yazarsın: on sekiz yaşına basan her gence okunmak üzere." : "Çanı çalarsın. Herkes kuleye gelsin. Herkes birlikte aşağı baksın."; }, to: "is", etki: { can: true, isyan: 2 } },
{ t: "Hiçbir şey yapmazsın, güneşin doğuşunu izlersin. Bazen bir şeyi taşımanın tek yolu onu bırakmamaktır.", to: "is", etki: { vicdan: 1, izledi: true } }
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
P(function(d){ return d.son === "a4C" && d.disarida; }, "On sekizine basan her gence okunsun diye Işıl'a bir mektup yazmıştın."),
P(function(d){ return d.son === "a4C" && !d.disarida; }, "İpi çektin, çanın sesi şehrin üstüne, uyuyan her evin içine düştü."),
P(S("a4D"), "O sabah hiçbir şey yapmamış, güneşin doğuşunu izlemiştin."),
P(IC, "Bir kere, iki kere, yüz kere çaldın, kolların uyuşana kadar. Kapılar açıldı, insanlar geceliklerle, terliklerle meydana döküldü. Önce kuleye baktılar, sonra birer birer merdivenlere."),
P(DIS, "Mektubu kimin okuyacağını bilmeden bir yolcuyla gönderdin. Yıllar sonra kuzey kapısından çıkan bir gencin cebinde buldular. Buruşmuş, kenarları yumuşamış, yüz kere katlanıp açılmıştı."),
"Merdivenler dardı, herkes sığmadı. Arkadakiler öndekilere “Ne var? Ne görüyorsunuz?” diye sordu ama öndekiler cevap vermedi. Bir süre sonra arkadakiler de sormayı bıraktı.",
"O gün Işıl'da ilk kez yalnızca yaşlılar değil, herkes toplandı. Kimse ne yapılacağını bilmiyordu. Biri bağırdı, biri ağladı, biri “Çocuklarımız ne olacak?” dedi, biri de “O da birinin çocuğu,” dedi. Akşam oldu ama bir karar çıkmadı. Ertesi gün yine toplandılar.",
"Bodrumdaki çocuk o gece kapısının önünde yüzlerce ayak sesi duydu. Biri kapının altından bir battaniye itti. Biri bir ninni söylemeye başlayıp yarıda bıraktı, bir başkası devam etti."
]},

son_karanlik: { son: true, baslik: "Karanlık Şehir", metin: [
P(S("a4A"), "Bekçi olmayı kabul etmiştin ama beklenecek bir kapı kalmamıştı. Yine de her sabah kuleye indin."),
P(S("a4D"), "O sabah hiçbir şey yapmamış, güneşin doğuşunu izlemiştin."),
"Işıl artık sıradan bir şehir. Kışları soğuk, yazları kurak geçiyor. Bazı yıllar hasat iyi oluyor, bazı yıllar kötü. İnsanlar hastalanıyor, iyileşiyor, ölüyor. Erikler artık yalnızca yazın yetişiyor ve herkes ilk eriği dört gözle bekliyor.",
P(function(d){ return d.ad_verdi; }, "Nur sizin evde büyüyor. Hâlâ güneşe bakamıyor, gölgelerde yaşıyor ama gülüyor. Her akşam Umut'a ninniyi söylüyor, o kelimeyi artık biliyor."),
P(function(d){ return !d.ad_verdi; }, "Bodrumdaki çocuk Şifa Evi'nde büyüyor. Kimse ona bir ad vermedi, o da kendine bir ad seçmiş ama kimseye söylemiyor."),
"Umut iki kış sonra öldü, solgunluk geri gelmişti. Cenazeye şehrin yarısı geldi, kimse yüzüne bir şey söylemedi. Bir kadın yanına gelip yalnızca “Benimki de,” dedi ve gitti.",
"Annen bazen Ahit'in gerçekten olup olmadığını soruyor. Fırtına mıydı, senin sesin miydi, bilmiyorsunuz.",
"Bir bahar sabahı mezarlıktan dönerken bir çocuğun ağaçtan bir erik koparıp ısırdığını, ekşi diye yüzünü buruşturup yine de yediğini görüyorsun. Durup bakıyorsun, çocuk sana bakıp kaçıyor."
]},

son_gidenler: { son: true, baslik: "Gidenler", metin: [
P(S("a4A"), "Ozan Hoca'nın okulunda öğretmen olmuştun, ahırdaki tahtanın başında öksüren çocuklara harf öğretiyordun."),
P(S("a4D"), "O sabah hiçbir şey yapmamış, güneşin doğuşunu izlemiştin."),
P(function(d){ return d.ogretmen; }, "Ahırdaki okul büyüdü, bir oda oldu, iki oda oldu. Köyün çocukları Işıl'dan gelenlerin yanında okumayı öğreniyor. Bu köyde bodrum yok, soğuk kışlar ve paylaşılan ekmek var."),
P(function(d){ return d.disarida && !d.umut_gitti; }, "Umut bir yıl dayandı. Son kışında köyün çocuklarıyla kartopu oynadı, öksüre öksüre, güle güle, bir kartopunu da Ozan Hoca'nın ensesine attı. Onu köyün mezarlığına, bir erik fidanının dibine gömdün. Fidan büyüdü, yalnızca baharda meyve veriyor."),
P(function(d){ return d.umut_gitti; }, "Umut Işıl'da büyüyor, mektupları seyrekleşti. On sekizinci yaş gününde bu sefer küçük harflerle yazılmış bir mektup geldi: “Abla, gördüm. Gelemiyorum ama anlıyorum.” Zarfın içinde tahta atının kırık bir bacağı vardı."),
P(function(d){ return d.gitti && !d.disarida; }, "Kuzey kapısından bu sefer yalnız geçtin. Arkanda annen, Umut ve bodrum kaldı, önünde ay vardı. Üç gün sonra bir köyde birinin kapısını çaldın, bir kadın sana tuzu az bir çorba verdi."),
"Bazı geceler ufuktaki o ışık adasına bakıyorsun. Her yıl oradan gözlerinde aynı şeyle birkaç kişi geliyor. Geçen hafta on sekiz yaşında bir kız geldi. Ona bir battaniye verdin, hiçbir şey sormadın."
]},

son_bekci: { son: true, baslik: "Yeni Bekçi", metin: [
P(S("a4A"), "Annenin anahtarı artık senin çivinde asılı."),
"Bekçi oldun. Her sabah demir kapının önüne tek kelime etmeden ekmekle su bırakıyorsun.",
P(function(d){ return d.sedef_fisilti || d.soz_sedef; }, "İçeride Sedef var. Her sabah kapının küçük penceresinden ona bakıyorsun, o da sana bakıyor. Bir sabah saçından bir tutamı kapının altından uzattı. Örmedin, elini uzatıp dokundun, sonra çektin."),
"İlk yıl her gece ağlıyorsun. Annen sesini duyuyor ama kapına gelmiyor, sabah kahvaltıda ekmeğine fazladan bal sürüyor.",
"Umut on sekiz yaşına girince aşağı inecek ve kapının önünde, fenerin ışığında, elinde ekmekle ablasını görecek.",
"Bir sabah ekmeği bırakırken annen gibi ağzından bir kelime kaçıyor: “Günaydın.” İçeriden ses gelmiyor, ışık da sönmüyor. Merdivenleri titreyen ellerle çıkıyorsun ve ertesi sabah yine iniyorsun."
]},

son_kul: { son: true, baslik: "Kül", metin: [
P(S("a4D"), "O sabah hiçbir şey yapmamış, güneşin doğuşunu izlemiştin."),
"Umut büyüdü, sağlıklı, güçlü, pembe yanaklı bir genç oldu. On sekiz yaşında aşağı indi, pencereden baktı, eve gelip sana sarıldı. “Şanslıymışız,” dedi, “kurada adım çıkmamış.”",
"Sedef bodrumda dokuz yıl kaldı, çıktığında konuşamıyordu. Aylin onu evine alıp perdeleri kapattı. Bazen sokakta Aylin'le karşılaşıyorsun.",
P(function(d){ return d.aylin_bilir; }, "Aylin biliyor, çünkü ona sen söyledin. O günden beri sana tek kelime etmedi. Bir gün kapına küçük bir paket bıraktı, içinden Sedef'in saç tokası çıktı. Tokayı ne yapacağını bilemedin, çekmecende duruyor."),
P(function(d){ return !d.aylin_bilir; }, "Aylin sana selam veriyor. Bir keresinde pazarda “Sedef seni sordu,” dedi, “saçını örer miymişsin.” Ertesi gün gidip Sedef'in saçını ördün, sıkı ama acıtmadan. Sedef bir şey demedi, sen de demedin."),
"Tevfik öldü, çekmecesinden altın bir madalya çıktı. Kimin olduğunu kimse bilmedi, bir tek sen bildin. Cenazede en arkada durdun."
]},

son_isik: { son: true, baslik: "Işık Şehri", metin: [
P(S("a4D"), "O sabah hiçbir şey yapmamış, güneşin doğuşunu izlemiştin."),
"Işıl'da yaşamaya devam ettin, güneşin, eriğin, ayvanın, narın arasında. Umut büyüdü. Sen evlendin, bir kızın oldu. Adını Sedef koymadın ama koymayı düşündün.",
"Her yıl gösterim gününde meydanda şenlik kuruluyor, sen de gidiyorsun. Gençlerin merdivenlerden inişini, çıkışını, susuşunu izliyorsun. Çıkanlara hiçbir şey sormadan sarılıyorsun, artık sen de bunu yapıyorsun.",
"Bazen biri kuzey kapısından gidiyor. Sen gitmedin.",
"Kızın beş yaşında. Bu sabah saçını örerken “Sıkı yap ama acıtma,” dedi. Elin durdu. Kız aynada sana baktı. “Ne oldu anne?”",
"Gelecek yıl kura çekilecek ve onun adı da kâseye girecek."
]}

},

ayna: function(d){
  var out = [];
  var f = d.fayda, v = d.vicdan, i = d.isyan;
  if(f >= v && f >= i) out.push("Çoğu zaman hesap yaptın: bir çocuk ve binlerce çocuk.");
  else if(v >= i) out.push("Çoğu zaman ağladın, dinledin, baktın, sarıldın.");
  else out.push("Çoğu zaman kurala, şehre, alışkanlığa karşı çıktın.");
  if(d.fisildadin) out.push("İlk gece, kurala rağmen bir çocuğa adını sordun.");
  if(d.hile) out.push("Bir kâğıdı ateşe attırdın ve bir başkasının adı biraz ağırlaştı.");
  if(d.yikim) out.push("Bir kapıyı açtın.");
  if(d.disarida) out.push("Gittin.");
  if(d.ispiyon) out.push("Birinin gideceğini haber verdin.");
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
