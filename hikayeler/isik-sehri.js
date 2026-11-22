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
giris: "Işıl'da kimse hastalanmaz, kimse aç kalmaz, ağaçlar her mevsim meyve verir. Bu mutluluğun bir sebebi var ve on sekiz yaşına basan herkese bir kez gösterilir. Bugün senin doğum günün. Gördüğün şeyden sonra eski hayatına dönemeyeceksin; ama ondan kaçmak da, onu değiştirmek de bir bedel istiyor. Hasta küçük bir kardeş, sessiz bir anne ve kapısı hiç açılmayan bir bodrum. Bir şehrin vicdanının hikâyesi.",
kavramlar: ["Mutluluğun bedeli", "Suç ortaklığı", "Kaçış ve direniş", "Çoğunluğun vicdanı"],
ozet: "Işıl'da kimse hastalanmaz, kimse aç kalmaz, hasat hiç bitmez. Bunun bir sebebi var ve on sekiz yaşına basan herkese gösterilir. Bugün senin doğum günün.",
baslangic: "i1",
durum: { fayda: 0, vicdan: 0, isyan: 0 },

sahneler: {

i1: { baslik: "Gösterim Günü", metin: [
"Işıl'da sabahlar hep güneşli. Kışın bile. Bahçelerde erik, ayva, nar aynı ağaçta, aynı anda. Kimse bunun neden böyle olduğunu sormaz. Sorsa da cevap hep aynı: “Işıl'da böyledir.”",
"Bugün on sekiz yaşına basıyorsun. Adın Deren. Meydanda senin yaşındaki on iki genç için şenlik kuruldu: çiçekler, davul, bal kokulu ekmekler. Bu akşam saat kulesinin altına ineceksiniz. Gösterim.",
"Bunu herkes biliyor ama kimse anlatmıyor. Çocukken büyüklerin kulenin önünden geçerken adımlarını hızlandırdığını görürdün. Sorduğunda biri seni gıdıklar, konu değişirdi. Teyzen bir keresinde “On sekizinde görürsün,” demişti, sonra ağzından kaçırmış gibi kendi eliyle ağzını kapatmıştı.",
"Annen Nermin sabahtan beri mutfakta, aynı tencereyi üçüncü kez yıkıyor. Kardeşin Umut yedi yaşında, masanın altında tahta atlarıyla oynuyor. Doğduğunda solgundu. Kanı bir türlü kırmızıya dönmüyordu. Şehrin ışığı iyileştirdi onu. Işıl'ın dışında, diyor şifacılar, bir yıl yaşamazdı.",
"Annen şenlik elbiseni uzatırken eli eline değiyor. Soğuk.",
"“Akşam aşağı indiğinde,” diyor, “ne görürsen gör, bir şey söyleme. Ne olursa olsun. Söz ver bana.”",
"Elbiseyi sana uzatmış ama bırakmıyor."
], secenekler: [
{ t: "“Aşağıda ne var?” diye sorarsın.", to: "i2", etki: { vicdan: 1, sordu: true } },
{ t: "Söz verip şenliğe gidersin. Bugün senin günün.", to: "i2", etki: { fayda: 1, soz: true } },
{ t: "Ozan Hoca'ya gidersin. Bir keresinde “Gösterimden önce bana uğra,” demişti.", to: "i2", etki: { isyan: 1, ozan: true } },
{ t: "Masanın altına, Umut'un yanına oturursun. Ona biraz daha bakmak istiyorsun.", to: "i2", etki: { vicdan: 1, umut_yaninda: true } }
]},

i2: { saat: "Akşam", baslik: "Bodrum", metin: [
P(S("i1A"), "“Göreceksin,” dedi annen. Başka bir şey söylemedi. Elbiseni düzeltti, saçını taradı. Küçükken yaptığı gibi, iki kez aynı yerden."),
P(S("i1B"), "Şenlikte dans ettin, güldün, bal kokulu ekmekten üç dilim yedin. Sonra güneş battı, kulenin saati çaldı ve on iki genç aynı anda sustu. Davulcu bile."),
P(S("i1C"), "Ozan Hoca kapıyı açtı, seni görünce bir süre baktı. “Hiçbir şey söylemeyeceğim,” dedi. “Söylersem göreceğin şey benim gördüğüm olur. Sen kendininkini gör. Sonra gel.” Kapıyı kapatmadan önce eline bir lokum tutuşturdu."),
P(S("i1D"), "Umut sana bir resim gösterdi: kule, kulenin altında bir ev, evin içinde gülen bir yüz. “Orada kim oturuyor?” dedi. “Herkes oraya gidip dönünce susuyor.” Bilmiyorum, dedin. Gerçekten bilmiyordun."),
"Kulenin altında dar bir merdiven. Rutubet, küf ve başka bir koku. İnsan kokusu. Bekçiler fenerlerle önden iniyor. On iki genç, tek sıra. Defne arkandan elbisenin eteğini tutuyor.",
"Kırk iki basamak. Duvarlarda tırnakla, taşla kazınmış isimler, tarihler. Bir yerde, çok silik: “Gördüm. Affet.” Bir başkasında bir kalp, içinde iki harf.",
"Merdivenin sonunda demir bir kapı. Ortasında küçük bir pencere. Sırayla bakıyorsunuz. Senin sıran.",
"İçeride bir çocuk var. Dokuz yaşında belki, belki daha büyük. O kadar zayıf ki yaşı belli değil. Çıplak taşın üstünde, dizlerini göğsüne çekmiş oturuyor. Fener ışığında gözlerini kısıyor. Bir köşede boş bir tas, yanında ekmek kırıntıları.",
"Bekçi kuralı fısıldıyor, her gence fısıldadığı gibi: “Konuşma. Dokunma. Teselli etme. Bir tek söz, şehrin bütün ışığını söndürür.”",
"Çocuk pencereye doğru sürünüyor. Sesi kuru, kırık: “Beni çıkaracak mısın? Uslu duracağım. Söz. Uslu duracağım.”"
], secenekler: [
{ t: "Hiçbir şey söylemezsin. Kural bu.", to: "i2b", etki: { fayda: 1, sessiz: true } },
{ t: "Kimse duymayacak kadar alçak sesle fısıldarsın: “Adın ne?”", to: "i2b", etki: { vicdan: 1, fisildadin: true } },
{ t: "Pencereden çekilip ağlarsın.", to: "i2b", etki: { vicdan: 1, agladin: true } },
{ t: "Sonuna kadar bakarsın. Bu yüzü unutmamak için.", to: "i2b", etki: { isyan: 1, ezberledin: true } }
]},

i2b: { saat: "Gece", baslik: "Merdivenler", metin: [
P(S("i2A"), "Sustun. Çocuk bir süre daha baktı, sonra geri çekilip duvarın dibine oturdu. Senden sonraki Berk'ti. O da sustu."),
P(S("i2B"), "Fısıldadın. Çocuğun ağzı açıldı ama bir şey çıkmadı. Adını hatırlamaya çalışıyormuş gibi. Tam o sırada bekçinin fenerinin alevi titredi. Sonra düzeldi. Bodrumda rüzgâr yoktu."),
P(S("i2C"), "Pencereden çekildin. Bekçi omzuna dokundu. “Geçer,” dedi. Kibar, alışkın bir sesle. Sonra cebinden bir mendil çıkarıp uzattı. Mendil temizdi, ütülüydü. Her gösterim gecesi yanında getiriyormuş demek."),
P(S("i2D"), "Sonuna kadar baktın: dizindeki yara, kirden rengi belli olmayan saçlar, sol kaşının üstünde bir iz. Bekçi kolundan çekmek zorunda kaldı."),
"Merdivenleri çıkarken kimse konuşmuyor. Dışarıda gece, yıldızlar, bal kokusu. Şehir her zamanki kadar güzel.",
"Kulenin kapısında aileler bekliyor. Çıkan gençlere sarılıyorlar, bir şey sormadan. Annen en arkada. Sana sarılmıyor, yalnızca elbisenin omzundaki tozu silkeliyor.",
"Gençler küçük gruplara ayrılıyor. Defne sinirli sinirli gülüyor: “Abartıyorlar ya. O çocuk orada bir bakıma mutludur bence.” Berk yere bakıyor: “Bir çocuk. Bütün bir şehir. Hesap ortada.” Kaan merdivenin dibine oturmuş, kusuyor. Birisi saçını tutuyor."
], secenekler: [
{ t: "Berk'in yanında durursun. Hesap ortada.", to: "i3", etki: { fayda: 1, berk: true } },
{ t: "Defne'nin yanına gidip gülmeye çalışırsın. Belki böyle katlanılıyor.", to: "i3", etki: { fayda: 1, defne: true } },
{ t: "Kaan'ın yanına oturup sırtını sıvazlarsın.", to: "i3", etki: { vicdan: 1, kaan: true } },
{ t: "Kimseyle konuşmadan eve yürürsün.", to: "i3", etki: { yalniz: true } }
]},

i3: { saat: "Gece", baslik: "Bekçi", metin: [
P(S("i2bA"), "Berk'in yanında durdun. “Bir çocuk, bin kişi,” dedi Berk, parmaklarıyla sayar gibi. “Hesap ortada.” Başını salladın. Eve yürürken o hesap ayakkabının içinde bir taş gibiydi."),
P(S("i2bB"), "Defne bir şaka yaptı, güldün. Sesin kendi kulağına yabancı geldi. Defne bir an durdu. Sonra daha yüksek sesle yine güldü ve elbisesinin kurdelesini çözüp yeniden bağladı, sıkıca."),
P(S("i2bC"), "Kaan'ın sırtını sıvazladın. Sessizce ağlıyordu. “Babam bir ay dedi,” diye fısıldadı. “Bir ay sonra unutacakmışım.” Sonra ağzını koluna sildi."),
P(S("i2bD"), "Kimseyle konuşmadan eve yürüdün. Sokaklar bal kokuyordu. Her pencerede altın bir ışık. Bir pencerede bir aile sofraya oturmuş gülüyordu, biri bir şey devirmiş."),
"Eve vardığında annen mutfakta. İki bardak ıhlamur koymuş.",
"Mutfak her zamanki gibi: bakır tencereler, kurutulmuş nane, pencerenin önünde bir saksı fesleğen. Umut'un tahta atları masanın üstünde, biri devrik.",
P(function(d){ return d.fisildadin; }, "Yüzüne bakar bakmaz anlıyor. “Konuştun,” diyor. Soru değil. Korkmamış. Yorgun. “Fener titredi, değil mi? Hep titrer. Kimse bilmiyor neden.”"),
"“Ben bekçiyim,” diyor. “On iki yıldır. Her sabah o kapıya ekmek ve su bırakıyorum. Tek kelime etmeden.”",
"Bardağını iki eliyle tutuyor. “İlk yıl her gece ağladım. İkinci yıl ağlamadım, kendime kızdım. Üçüncü yıl kızmayı da bıraktım.” Ihlamuru üflüyor, içmiyor.",
"“Neden?” diyorsun. “Neden sen?”",
"“Umut doğduğunda,” diyor, “solgundu. Şifacılar bir yıl dedi. Bekçiliği kabul edersen aileni şehrin en iyi şifacıları bakar, dediler. Kabul ettim. Umut yaşıyor. O çocuk da her sabah benim elimden ekmek alıyor.”",
"Masanın altında Umut uyuyakalmış. Yanakları pembe."
], secenekler: [
{ t: "Annene sarılırsın. Onu yargılayamazsın.", to: "i4", etki: { vicdan: 1, sarildi: true } },
{ t: "“Bunu bana nasıl yaşattın?” dersin.", to: "is_gece", etki: { isyan: 1, ofke: true } },
{ t: "“Doğru olanı yaptın,” dersin. Umut yaşıyor.", to: "i4", etki: { fayda: 1 } },
{ t: "Hiçbir şey söylemeden Umut'un yanına uzanırsın.", to: "is_ruya", etki: { vicdan: 1 } }
]},

i4: { saat: "Birkaç gün sonra", baslik: "Gidenler", metin: [
P(S("is_geceA"), "“Yetişkin olmak,” diye tekrarladı Kaan ve güldü. Gülüşü öksürüğe döndü. Sabaha karşı ikiniz de evlerinize döndünüz."),
P(S("is_geceB"), "Kaan sana baktı. “Ne yapalım?” dedi. Bilmiyordun. O gece çeşmenin başında iki kişi aynı şeyi bilmediğini kabul etti. Kaan elini suya sokup yüzünü yıkadı."),
P(S("is_geceC"), "Sabaha kadar oturdunuz, konuşmadan. Güneş doğunca Kaan kalktı, “Sağ ol,” dedi ve gitti. Neye teşekkür ettiğini ikiniz de bilmiyordunuz."),
P(S("is_geceD"), "“Bir ay,” dedi Kaan. Bir ay sonra gerçekten unutmuş gibiydi. Meydanda seninle karşılaştığında bir şarkı mırıldanıyordu. Sen hâlâ hatırlıyordun."),
P(S("is_ruyaA"), "Annen rüyanı dinledi. Yüzü bembeyaz oldu. “Ben de görüyorum o rüyayı,” dedi. “On iki yıldır. İçerideki hep ben oluyorum.” Sonra kalkıp ekmek dilimlemeye başladı."),
P(S("is_ruyaB"), "Rüyayı unutmaya çalıştın. Gün boyu. Ama akşam kulenin saati çaldığında, pencerede kendi yüzünü gördüğün an geri geldi."),
P(S("is_ruyaC"), "O yüz olmamaya karar verdin. Nasıl, bilmiyordun. Kararı sabah kahvaltısında, ekmeğe bal sürerken verdin. Bal bıçaktan masaya damladı."),
P(S("is_ruyaD"), "Umut uyandı, şaşkın. “Abla, ne oldu?” Bir şey olmadı, dedin. Ama bırakmadın. Umut da sormadı; Işıl'ın çocukları erken öğrenir."),
P(S("i3A"), "Annen önce şaşırdı, sonra bırakmadı. Ihlamur soğudu."),
P(S("i3B"), "Annen bir şey söylemedi. Kalkıp bardakları yıkadı. Arkası sana dönüktü. Omuzları titriyordu ama sesi çıkmadı."),
P(S("i3C"), "Annen sana baktı. “Ben de öyle diyorum kendime,” dedi. “Her sabah. Doğru olanı yaptım. Ama doğruysa niye her sabah söylemem gerekiyor Deren?”"),
P(S("i3D"), "Umut uykusunda koluna sarıldı. Nefesi düzenliydi. Bir ara mırıldandı, atlarından birinin adını söyledi."),
"Birkaç gün sonra Ozan Hoca'nın evinin önünden geçiyorsun. Kapı açık, içerisi boşaltılmış. Ozan Hoca bahçede, sırt çantasıyla, ayakkabısının bağcığını bağlıyor.",
"Sana okumayı o öğretmişti. Sonra tarihi, sonra şiiri. Bir gün sınıfta “İyilik nedir?” diye sormuştu. Kimse bilememişti. Kendisi cevaplamıştı: “Kimse görmezken yaptığın şey.” Sonra sınıfta biri osurmuş, cümle gülüşmelerin arasında kaybolmuştu.",
"“Gidiyorum,” diyor. “Bu gece. Kuzey kapısından.”",
"Işıl'da her yıl birkaç kişi gider. Bir sabah kalkıp kuzey kapısından çıkarlar. Dönmezler. Dışarıda ne olduğunu kimse bilmez.",
"“Kırk yıl çocuklara iyiliği öğrettim,” diyor. “Sonra onları o merdivenden indirdim. Yapamıyorum artık. Gel benimle Deren. Umut'u da al.”",
"“Dışarıda Umut yaşamaz,” diyorsun.",
"Ozan Hoca bağcığı çekip düğüm atıyor. “Biliyorum,” diyor. “O yüzden sormaya utanıyorum. Ama sordum.”"
], secenekler: [
{ t: "Bu gece onunla kapıya kadar yürürsün. Gitmek için değil, görmek için.", to: "i5", etki: { isyan: 1, kapi: true } },
{ t: "“Gitmek de bir susmak hocam. Çocuğu orada bırakıyorsunuz,” dersin.", to: "i5", etki: { isyan: 1, vicdan: 1, gitmek_susmak: true } },
{ t: "“Ben kalıyorum. Umut için,” dersin.", to: "i5", etki: { fayda: 1 } },
{ t: "Annene Ozan Hoca'nın gideceğini söylersin.", to: "i5", etki: { fayda: 1, ispiyon: true } }
]},

i5: { saat: "Gece", baslik: "Ninni", metin: [
P(S("i4A"), "Kuzey kapısı demirden değil, tahtadan. Eski, çatlak. Ozan Hoca kapıdan geçti, bir kez döndü, el salladı. Birkaç adım. Sonra karanlıkta çantasının askısındaki küçük zil bir süre daha duyuldu, sonra o da."),
P(S("i4B"), "Ozan Hoca sana uzun uzun baktı. “Haklısın,” dedi. “Kalmak da bir susmak. Hangisiyle yaşayabileceğini sen seç.” O gece gitti. Bahçe kapısını açık bıraktı."),
P(S("i4C"), "Ozan Hoca başını salladı. “Umut için,” dedi. “Herkesin bir Umut'u var. Bu şehir onun için ayakta.” O gece gitti."),
P(S("i4D"), "Annen dinledi, omuz silkti. “Gidenler de bizim gibi,” dedi. “Yalnızca bakmayı bıraktılar.” Ozan Hoca o gece gitti. Kimse durdurmadı."),
"Bir gece uyuyamıyorsun. Kalkıp kuleye yürüyorsun. Bekçi yok. Gece nöbeti yok, kimse inmez çünkü.",
"Gösterimden beri uykuların değişti. Kulenin saati her çaldığında sayıyorsun. Bir. İki. Üç.",
"Demir kapının önüne geliyorsun. İçeriden ince, kırık bir şarkı.",
"Tanıyorsun. Işıl'ın ninnisi. Annen sana söylerdi, sen Umut'a söylüyorsun: “Uyu güzel kuzum, ay doğdu ışığa...”",
"Çocuk onu nereden biliyor? Biri, yıllar önce, bu kapının önünde, kuralı çiğneyip mırıldanmış olmalı. Belki annen.",
"Bir yerde takılıyor. Kelimeyi bulamıyor. Baştan başlıyor. Yine aynı yerde takılıyor."
], secenekler: [
{ t: "Eksik kelimeyi fısıldarsın.", to: "i6", etki: { vicdan: 1, isyan: 1, sarki: true } },
{ t: "Kapının dibine oturup sessizce dinlersin.", to: "i6", etki: { vicdan: 1, dinledi: true } },
{ t: "Cebindeki bal kokulu ekmeği kapının altından itersin.", to: "i6", etki: { vicdan: 1, ekmek: true } },
{ t: "Merdivenlerden koşarak çıkarsın. Duymamış olmak istiyorsun.", to: "i6", etki: { fayda: 1, kacti: true } }
]},

i6: { saat: "Bir ay sonra", baslik: "Kura", metin: [
P(S("i5A"), "Fısıldadın: “...gümüşe.” Çocuk sustu. Sonra şarkıyı baştan, eksiksiz söyledi. Dışarı çıktığında şehrin ışıkları yerindeydi. Bir sokak lambası söndü, yandı. Hep böyle yapıyordu o lamba. Değil mi?"),
P(S("i5B"), "Kapının dibinde oturdun. Çocuk şarkıyı on kez denedi, on kez takıldı. Sabaha karşı sustu. Kalktın. Bacakların uyuşmuştu, merdiveni duvara tutunarak çıktın."),
P(S("i5C"), "Ekmeği kapının altından ittin. İçeriden ses gelmedi. Uzun bir sessizlikten sonra hışırtı. Sonra çiğneme sesi, çok hızlı. Sonra yine sessizlik."),
P(S("i5D"), "Merdivenlerden koştun. Kulenin dışında nefes nefese durdun. Şehrin bütün ışıkları yanıyordu. Şarkı hâlâ kulağındaydı. O yerde, o kelimede takılıyordu."),
"Bir ay sonra meydanda bir duyuru. Şehrin yaşlıları beyaz giysiler içinde.",
"Yaşlılar en son on iki yıl önce beyaz giymiş. Sen altı yaşındaydın, hatırlamıyorsun. Yalnızca annenin o hafta hiç gülmediğini hatırlıyorsun, bir de yemeklerin hep yanık olduğunu.",
"“Bodrumdaki çocuk tükeniyor,” diyor en yaşlısı. “Ahit gereği yeni bir çocuk seçilecek. Beş ile dokuz yaş arasındaki bütün çocukların adı kuraya girecek. Bir hafta sonra.”",
"Meydanda sessizlik. Sonra bir anne çocuğunu kucağına alıyor. Bir başkası. Bir başkası.",
"Umut yedi yaşında.",
"Annen yanında, beyaz kesilmiş. Elini tutuyorsun. Buz gibi, kımıldamıyor.",
"Kâse meydanın ortasında. İçinde yüz on dört isim. Kura yedi gün sonra."
], secenekler: [
{ t: "Kurayı kabul edersin. Bu şehrin bedeli. Herkes ödüyor. Kâseden Umut'un adı da çıkabilir.", to: "f1", etki: { fayda: 2, kabul: true } },
{ t: "Umut'u alıp kuzey kapısından çıkarsın. Dışarıda ciğerleri belki bir yıl dayanır. Burada kura belki hiç ona düşmez.", to: "g1", etki: { isyan: 1, gidenler: true } },
{ t: "Annenin anahtarını alıp o kapıyı açarsın. Ahit bozulur. Belki onunla birlikte Umut'un nefesi de.", to: "y1", etki: { isyan: 2, vicdan: 1, yikim: true } },
{ t: "Kura kâtibine gidip Umut'un adını listeden çıkarmanın yolunu ararsın. O zaman kâseden başka bir ad çıkacak.", to: "h1", etki: { hile: true } }
]},


is_gece: { saat: "Gece", baslik: "Gece Yürüyüşü", metin: [
"Annenin cevabını beklemeden evden çıkıyorsun. Kapıyı çarpmıyorsun; Işıl'da kimse kapı çarpmaz. Kapı arkandan yavaşça kapanıyor, mandalı tık diye oturuyor.",
"Sokaklar boş ve ılık. Ağaçlar meyve dolu. Kimse toplamıyor, çünkü yarın yine dolu olacaklar. Yerde çürümüş tek bir meyve yok. Işıl'da hiçbir şey çürümez. Ayağına bir erik takılıyor. Eğilip alıyorsun, ısırıyorsun, tükürüyorsun. Tadı yine mükemmel.",
"Meydanda, çeşmenin kenarında Kaan oturuyor. Merdivenin dibinde kusan çocuk. Seni görünce yüzünü kolunun yeniyle siliyor.",
"“Uyuyamadım,” diyor. “Gözümü kapatınca o pencereyi görüyorum.” Bir süre susuyor. “Babama sordum. ‘Ben de senin yaşındayken öyleydim. Bir ay sürer,’ dedi. Bir ay. Babam bir ayda unutmuş.”",
"“Unutmak istemiyorum,” diyor. “Ama hatırlamak da istemiyorum. Bir şeyi hatırlayıp hiçbir şey yapmamak... buna ne deniyor?” Sana bakıyor, sen bilirsin diye."
], secenekler: [
{ t: "“Buna yetişkin olmak deniyor,” dersin. Şaka gibi. Ama değil.", to: "i4", etki: { fayda: 1 } },
{ t: "“O zaman bir şey yapalım,” dersin. Ne olduğunu bilmeden.", to: "i4", etki: { isyan: 1, kaan_ortak: true } },
{ t: "Yanına oturup susarsın. Birlikte sabahı beklersiniz.", to: "i4", etki: { vicdan: 1 } },
{ t: "“Unut,” dersin. “Babanın dediği gibi. Bir ay.” Bunu kendine de söylediğini bilerek.", to: "i4", etki: { fayda: 1, unut: true } }
]},

is_ruya: { saat: "Gece", baslik: "Rüya", metin: [
"Umut'un yanına, masanın altına uzanıyorsun. Umut uykusunda koluna sarılıyor. Nefesi sıcak, ağzı bal kokuyor. Yatmadan önce kaşıkla yemiş, annen kızmış.",
"Uykuya dalıyorsun ve rüyanda bodrumdasın. Kapının öbür tarafında. İçeride.",
"Karanlık. Taş zemin. Kapının küçük penceresinde bir fener, fenerin arkasında yüzler. Hepsi sana bakıyor, hiçbiri konuşmuyor.",
"Yüzlerden birini tanıyorsun: annen. Bir başkası: Ozan Hoca. Bir başkası: Umut, büyümüş, on sekiz yaşında, bıyıkları terlemiş. Ve sonuncusu: sen.",
"“Beni çıkaracak mısın?” demek istiyorsun. Sesin çıkmıyor. Yukarıdan şehrin uğultusu geliyor: davul, kahkaha, bir yerde biri şarkı söylüyor ve yanlış söylüyor.",
"Pencere kapanıyor.",
"Uyandığında Umut hâlâ koluna sarılı. Sabah olmuş. Yanağın ıslak; Umut'un salyası mı, senin gözyaşın mı, bilmiyorsun."
], secenekler: [
{ t: "Rüyayı annene anlatırsın.", to: "i4", etki: { vicdan: 1, ruya_anne: true } },
{ t: "Rüyayı unutmaya çalışırsın.", to: "i4", etki: { fayda: 1 } },
{ t: "Rüyadaki kendi yüzünü düşünürsün. Bir daha o yüz olmamaya karar verirsin.", to: "i4", etki: { isyan: 1 } },
{ t: "Umut'u uyandırıp ona sarılırsın. Uzun, sıkı, açıklamasız.", to: "i4", etki: { vicdan: 1 } }
]},

is_ninni: { baslik: "Ninni", metin: [
P(function(d){ return !d.disarida; }, "O gece annenle Umut'u yatırıyorsunuz. Umut uyumak istemiyor, yatağın üstünde zıplıyor. Annen ninniye başlıyor: “Uyu güzel kuzum, ay doğdu ışığa...”"),
P(function(d){ return d.disarida; }, "O gece ahırın içinde Umut'u yatırıyorsun. Öksürüğü uyutmuyor. Ninniye başlıyorsun: “Uyu güzel kuzum, ay doğdu ışığa...”"),
"Bodrumdaki çocuk da bu ninniyi biliyordu, bir yerinde takılıyordu. Şimdi sen söylerken aynı yerde sesin titriyor: “...gümüşe.”",
"Ninninin sözleri: Ay doğar, ışık iner, kuzular uyur, kimse ağlamaz. Bunu yüzlerce yıldır Işıl'ın anneleri söylüyor. İlk kim söyledi, bilen yok.",
"Umut uyuyor. Ağzı açık, bir eli yorganın dışında.",
"Ninninin son kelimesi havada kalıyor: “...kimse ağlamaz.”"
], secenekler: [
{ t: "Ninniye yeni bir dize eklersin: bodrumdaki çocuk için.", to: "a3", etki: { isyan: 1, yeni_dize: true } },
{ t: "Ninniyi bir daha söylememeye karar verirsin.", to: "a3", etki: { vicdan: 1 } },
{ t: "Ninniyi baştan, eksiksiz söylersin.", to: "a3", etki: { fayda: 1 } },
{ t: "Ninniyi ilk kimin söylediğini araştırmaya karar verirsin.", to: "a3", etki: { isyan: 1, arastir: true } }
]},

is_pencere: { baslik: "Pencere", metin: [
P(function(d){ return !d.disarida; }, "Pencerenin önündesin. Işıl'ın damları, bahçeleri ve hepsinin ortasında saat kulesi. Kulenin saati gece yarısını gösteriyor."),
P(function(d){ return d.disarida; }, "Ahırın küçük penceresinden bakıyorsun. Köyün çamurlu yolu, karanlık evler ve çok uzakta, ufukta, bir ışık adası. Işıl. Buradan bir yıldız kadar."),
"Annenin anlattıkları kulağında. On iki yıl. Bir kelime.",
P(function(d){ return !d.umut_gitti; }, "Annen arkanda duruyor. Sonra yanına geliyor. İkiniz aynı pencereden bakıyorsunuz. Annenin saçından mutfak kokusu geliyor."),
P(function(d){ return d.umut_gitti; }, "Annenin mektubu elinde. Son satırını yeniden okuyorsun."),
"“Bazen düşünüyorum,” diyor annen, ya da mektubun bir satırı diyor, “o çocuk da bizi seyrediyor mu? Her yıl on iki yeni yüz. Hepsi susan. Ona göre biz neyiz, hiç düşündün mü?”"
], secenekler: [
{ t: "Pencereyi açarsın. Gece havası içeri dolsun.", to: "a3", etki: { isyan: 1 } },
{ t: "Perdeyi çekersin.", to: "a3", etki: { fayda: 1 } },
{ t: function(d){ return d.umut_gitti ? "Mektubu katlayıp göğsüne koyarsın ve bakmaya devam edersin." : "Annenin elini tutarsın ve birlikte bakmaya devam edersiniz."; }, to: "a3", etki: { vicdan: 1 } },
{ t: "Pencerenin buğusuna parmağınla bir ad yazarsın. Kimsenin okumayacağı bir ad.", to: "a3", etki: { vicdan: 1, cam: true } }
]},

/* ---------- KABUL KOLU ---------- */
f1: { saat: "Kura günü", baslik: "Çekilen İsim", metin: [
P(S("i6A"), "Kurayı kabul ettin. Yedi gün boyunca her gece Umut'un adını kâsenin içinde düşündün. Yüz on dört kâğıttan biri."),
P(function(d){ return d.geri_cekildi; }, "Son anda vazgeçtin. Ne yapmaya kalkıştığını kimse bilmiyor. Eve dönerken kimseyle göz göze gelmemek için yere baktın."),
"Kura günü meydan dolu. Çocuklar annelerinin bacaklarına sarılmış. Kimse onlara neden sarıldıklarını söylememiş ama biliyorlar.",
"Meydanın ortasında yüksek bir masa, masanın üstünde camdan bir kâse, içinde katlanmış kâğıtlar. Cam o kadar temiz ki her kâğıt görünüyor. Herkes gözleriyle kendi çocuğunun kâğıdını arıyor. Hepsi aynı.",
"Kâtip Tevfik elini kâseye daldırıyor. Bir kâğıt. Açıyor. Gözlüğünü düzeltiyor.",
"“Sedef Aral. Altı yaşında.”",
"Göğsünde biriken nefes dışarı çıkıyor. Umut değil. Umut değil. Bu sesi kendi göğsünde duyuyorsun ve aynı anda meydanın öbür ucundan bir çığlık geliyor.",
"Sedef. Bir sokak ötede oturuyorlar. Annesi çalışırken ona sen bakardın. Saçlarını örmen için yanına oturur, her seferinde “Sıkı yap ama acıtma,” derdi. Sonra acıdığını söyler, sonra gevşetince bozuldu derdi.",
"Annesi Aylin meydanın ortasında yere çökmüş. Kimse ona dokunmuyor. Herkes rahatlamış ve herkes rahatlamasından utanıyor. Kimse kimsenin yüzüne bakmıyor."
], secenekler: [
{ t: "Aylin'in yanına gidip yere, onun yanına çökersin.", to: "f2", etki: { vicdan: 1, aylin: true } },
{ t: "Umut'u kucaklayıp hemen eve götürürsün. Görmesin.", to: "f2", etki: { fayda: 1 } },
{ t: "Sedef'e bakarsın. O sana bakıyor. Bakışını kaçırmazsın.", to: "f2", etki: { vicdan: 1, sedefe_bakti: true } },
{ t: "Kalabalığın içinde kaybolursun.", to: "f2", etki: { fayda: 1 } }
]},

f2: { saat: "Bir gün sonra", baslik: "Eski Çocuk", metin: [
P(S("f1A"), "Aylin'in yanına çöktün. Seni tanıdı. Kolunu yakaladı, tırnakları etine girdi. “Sen ona bakardın,” dedi. “Sen ona bakardın.” Kolunda üç gün tırnak izleri kaldı."),
P(S("f1B"), "Umut'u eve götürdün. Yolda sordu: “Sedef nereye gidecek?” “Bir yere.” “Ne zaman dönecek?” Cevap vermedin. Umut tahta atını cebinden çıkarıp seyretti."),
P(S("f1C"), "Sedef sana baktı. Ağlamıyordu. Şaşkındı. Sonra elini kaldırıp el salladı. Sana. Sen de el salladın."),
P(S("f1D"), "Kalabalığın içinde kayboldun. Yüzlerce insan aynı anda başka yöne bakıyordu. Sen de baktın. Bir fırının önünde durup içerideki ekmeklere baktın, uzun uzun."),
"Ertesi gece eski çocuğu kuleden çıkarıyorlar. Işık gözlerini kör etmesin diye. Kulenin arka kapısından, bir battaniyeye sarılı, bir bekçinin kollarında. Bekçinin kolları onu hiç zorlanmadan taşıyor.",
"Şehrin kenarındaki Şifa Evi'nde penceresiz bir odaya yerleştiriyorlar. Işığa alışana kadar, diyorlar. Ne kadar süreceğini kimse söylemiyor. Ziyarete giden de yok.",
P(function(d){ return d.ezberledin || d.fisildadin; }, "Ona bakıyorsun ve tanıyorsun: sol kaşının üstündeki iz. Gözleri sana dönüyor ve duruyor."),
"Annen yanında. “Kimse ona bakmayacak,” diyor. “Hiç bakmadılar zaten.”"
], secenekler: [
{ t: "Onu evinize almayı teklif edersin.", to: "f3", etki: { vicdan: 2, nur_evde: true } },
{ t: "Her gün Şifa Evi'ne gidip yanında oturmaya söz verirsin.", to: "f3", etki: { vicdan: 1, ziyaret: true } },
{ t: "Hiç adı olmamış bu çocuğa bir ad verirsin: Nur.", to: "f3", etki: { vicdan: 1, ad_verdi: true } },
{ t: "Uzak durursun. Onu her gördüğünde Sedef'i göreceksin.", to: "f3", etki: { fayda: 1 } }
]},

f3: { saat: "Gece", baslik: "İlk Gece", metin: [
P(S("f2A"), "Annen bir süre düşündü, sonra “Olur,” dedi. Çocuğu eve getirdiniz, perdeleri kapattınız. İlk gece masanın altına girip Umut'un yanında uyudu. Umut uyandığında ona baktı, korkmadı. “Adın ne?” dedi. Cevap gelmeyince tahta atlarından birini uzattı."),
P(S("f2B"), "Her gün gittin. İlk gün yüzüne bakmadı. Üçüncü gün baktı. Yedinci gün eline dokundu. Çok hafif, gerçek olup olmadığını anlamak ister gibi, sonra elini hemen çekti."),
P(S("f2C"), "“Nur,” dedin. Çocuk kelimeyi tekrarladı. Ağzında bilmediği bir yiyecek gibi. Sonra bir daha söyledi. Işık demek, dedin. Bunun acı bir şaka olduğunu o gece yatarken düşündün."),
P(S("f2D"), "Uzak durdun. Annen her gün gitti. Bir gün “Seni sordu,” dedi. “Pencereden bakan son yüzlerden birini hatırlıyormuş.”"),
"Sedef'in ilk gecesi. Annen sabah ilk ekmeği götürecek. Gece yarısı kapında duruyor. Elinde anahtar.",
"Bütün gün Sedef'lerin evinin önünden geçmedin. Akşam uzaktan gördün: Aylin'in penceresinde ışık yanıyordu, sonra söndü, sonra yine yandı.",
"“Benimle gelir misin?” diyor annen. “Bir gün bu görev sana geçebilir. Ya da başkasına. Nasıl olduğunu bilmeni isterim.”",
"Aşağıda, demir kapının arkasında, altı yaşında bir kız var. Saçı örülmemiş.",
"Umut odasında uyuyor. Yanakları pembe."
], secenekler: [
{ t: "Annenle aşağı inersin.", to: "a1", etki: { fayda: 1, bekci_yolu: true } },
{ t: "Gitmezsin. O kapının önünde susan bir yüz daha olmayacaksın.", to: "a1", etki: { vicdan: 1 } },
{ t: "Annenle inersin ve karanlıkta, kapının dibinde, Sedef'in adını fısıldarsın.", to: "a1", etki: { vicdan: 1, isyan: 1, sedef_fisilti: true } },
{ t: "Umut'un başında kalırsın. Bütün gece nefesini dinlersin.", to: "a1", etki: { fayda: 1 } }
]},

/* ---------- GİDENLER KOLU ---------- */
g1: { saat: "Gece", baslik: "Kuzey Kapısı", metin: [
"Gece yarısı Umut'u uyandırıyorsun. “Gezmeye gidiyoruz,” diyorsun. Montunu giydiriyorsun. İki ekmek, bir şişe su, tahta atlarından biri.",
"Çıkmadan odana bakıyorsun: yatağın, kitapların, duvardaki çocukluk resimlerin. Resimlerden birinde kulenin altına güneş çizmişsin.",
"Annen mutfakta. Uyumamış. Sizi görünce kalkıyor. Umut'un yakasını düzeltiyor, sana bakıyor.",
"“Dışarıda bir yıl,” diyor. “Belki daha az.” “Burada belki hiç,” diyorsun. Annen gelmiyor. Biri kalmalı. Ya da gitmeye cesareti yok. Ya da kalmak onun cezası. Ekmeklerin yanına bir kavanoz bal koyuyor.",
"Kuzey kapısı: eski, çatlak tahta. Arkasında karanlık.",
P(function(d){ return d.kapi; }, "Bir ay önce burada Ozan Hoca'yı uğurlamıştın. Şimdi sen geçiyorsun. Kapı o kadar kolay açılıyor ki bir an elin mandalda kalıyor."),
"Üç adım. Beş adım. Arkada şehrin ışığı. Önde yalnızca ay.",
"Yirmi adımda Umut öksürüyor. Hayatında ilk kez. Şaşkınlıkla elini ağzına götürüyor ve sana bakıyor. “Abla, bu ne?”"
], secenekler: [
{ t: "Yürümeye devam edersin. Dönersen bir daha çıkamazsın.", to: "g2", etki: { isyan: 1 } },
{ t: "Durup arkana bakarsın, son bir kez.", to: "g2", etki: { vicdan: 1, dondu_bakti: true } },
{ t: "Umut'u sırtına alırsın. Ayakları yorulmasın, ciğerleri yorulmasın.", to: "g2", etki: { vicdan: 1 } },
{ t: "Umut'a nereye gittiğinizi bütün gerçeğiyle anlatırsın.", to: "g2", etki: { isyan: 1, umut_bilir: true } }
]},

g2: { saat: "Haftalar sonra", baslik: "Dışarısı", metin: [
P(S("g1A"), "Yürümeye devam ettin. Umut'un öksürüğü sıklaştıkça sen de adımlarını sıklaştırdın."),
P(S("g1C"), "Umut'u sırtına aldın. Kolları boynuna dolandı. Nefesi ensende, hırıltılı. Üç gün onu indirmedin. Omuzların hâlâ ağrıyor."),
P(S("g1B"), "Arkana baktın. Işıl karanlığın ortasında bir ışık adası gibiydi. Umut da baktı. “Ne güzel,” dedi."),
P(S("g1D"), "Umut dinledi. Sonunda “Yani o çocuk bizim yüzümüzden orada mı?” dedi. “Herkesin yüzünden,” dedin. “O zaman bizim yüzümüzden de,” dedi ve yürümeye devam etti."),
"Üç gün yürüdünüz. Dördüncü gün bir köy: taş evler, çamurlu sokaklar, öksüren yaşlılar, yamalı giysiler. Hasat bitmiş, ambarlar yarı boş.",
"Işıl'ın dışında ağaçların meyvesiz olabildiğini Umut ilk kez görüyor. Çıplak bir dalın altında durup uzun uzun yukarı bakıyor. Hava soğuk. Gerçekten soğuk. Umut'un burnu kızarmış, akıyor.",
"Kapıları çaldığınızda açılıyor. Bir kadın çorba veriyor. Çorbada tuz az, bir parça kemik var. Bir adam ahırında yer gösteriyor. Kimse kim olduğunuzu sormuyor. “Her yıl birkaç kişi gelir sizin oradan,” diyor kadın. “Gözlerinde aynı şey olur.”",
"Köyde Ozan Hoca'yı buluyorsun. Bir ahırın içinde çocuklara okuma öğretiyor. Sizi görünce gülüyor, sonra Umut'un öksürüğünü duyuyor ve gülüşü siliniyor.",
"Köyün şifacısı Umut'u uzun uzun dinliyor, göğsüne kulağını dayıyor. Sonra başını kaldırıyor.",
"“Kanı zayıf,” diyor. “Burada pek bir şey yapamam. Altı ay. Belki bir yıl.”"
], secenekler: [
{ t: "Köyde kalırsın. Altı ay, bir yıl. Bu insanların arasında.", to: "g3", etki: { vicdan: 1, isyan: 1 } },
{ t: "Daha uzağa, büyük şehirlere gidersin. Belki orada bir şifa vardır.", to: "g3", etki: { isyan: 1, uzak: true } },
{ t: "Ozan Hoca'ya ahırdaki okulda yardım edersin.", to: "g3", etki: { vicdan: 1, okul: true } },
{ t: "Her gece Umut'a Işıl'ı anlatırsın. İçindeki çocuğu dışarıda bırakarak.", to: "g3", etki: { fayda: 1 } }
]},

g3: { saat: "Aylar sonra", baslik: "Elçi", metin: [
P(S("g2A"), "Köyde kaldın. Ambarda çalıştın, ekmeği paylaştın. Köylüler önce sana yabancı gibi baktı; Umut'un öksürüğünü duyunca bakmayı bıraktılar. Burada herkes öksürüyordu."),
P(S("g2B"), "Daha uzağa gitmeyi denedin. İki gün yol aldınız; Umut'un ateşi çıktı. Köye geri döndün."),
P(S("g2C"), "Ahırdaki okulda Ozan Hoca'ya yardım ettin: yirmi çocuk, bir tahta, bir kara kalem. Umut en arkada dinledi, öksürürken bile. Bir gün tahtaya kendi adını yazdı, “m”yi ters."),
P(S("g2D"), "Her gece Umut'a Işıl'ı anlattın: altın sabahlar, aynı dalda erik ve nar. Bir gece sordu: “Orada kimse öksürmez mi?” Bir şey demedin."),
"Bir sabah köyün girişinde beyaz giysili biri. Işıl'dan bir elçi. Gidenleri aramaz Işıl. Ama bu kez gelmiş.",
"Köyün çocukları etrafına toplanmış. Biri beyaz eteğine dokunuyor. Elçi geri çekilmiyor, gülümsemiyor da. Ayakkabılarına çamur bulaşmış. Arada bir aşağı bakıyor.",
"“Kura yapıldı,” diyor. “Sedef Aral. Altı yaşında. Sizin komşunuz.”",
"“Annen gönderdi beni,” diyor. “Umut'un hastalandığını duymuş. Dönebilirsiniz. Umut iyileşir. Şehir kimseyi cezalandırmaz. Kura yapıldı, artık bir tehlike yok.”",
"Umut ahırın köşesinde, battaniyeye sarılı, öksürüyor. Yüzü solgun. Doğduğu günkü gibi. Ozan Hoca kapının eşiğinde, elinde tebeşir, elçiye bakıyor ve hiçbir şey söylemiyor."
], secenekler: [
{ t: "Dönersin. Umut'la birlikte.", to: "a1", etki: { fayda: 2, geri_dondu: true } },
{ t: "Kalırsın. Umut'la birlikte, burada, ne kadar varsa.", to: "a1", etki: { isyan: 1, vicdan: 1, disarida: true } },
{ t: "Umut'u elçiyle geri gönderirsin. Sen kalırsın.", to: "a1", etki: { fayda: 1, vicdan: 1, umut_gitti: true, disarida: true } },
{ t: "Elçiye Sedef'i sorarsın, her şeyi. Sonra cevabını verirsin: hayır.", to: "a1", etki: { vicdan: 1, isyan: 1, disarida: true, sedefi_sordu: true } }
]},

/* ---------- YIKIM KOLU ---------- */
y1: { saat: "Gece", baslik: "Anahtar", metin: [
"Annenin anahtarı mutfak kapısının arkasında, bir çivide asılı. On iki yıldır her sabah oradan alınıyor, her öğlen oraya asılıyor. Demir, ağır, paslı.",
"Küçükken sormuştun neyin anahtarı olduğunu. “Kilerin,” demişti annen. Kilere hiç kilit vurulmamıştı ama sen bunu hiç düşünmemiştin.",
"Gece yarısı mutfaktasın. Elini uzatıyorsun.",
"“Deren.”",
"Annen kapıda. Geceliğiyle, yalınayak, elinde bir mum.",
"“Ne yapacağını biliyorum,” diyor. “On iki yıldır her gece aynı şeyi düşündüm. Anahtarı alıp inmek. Kapıyı açmak.” Mumu masaya koyuyor. “Yapmadım. Umut için. Senin için. Ya da korktuğum için.”",
"“Kapı açılırsa ışık söner derler. Hasat çürür, hastalık döner, çocuklar ölür. Ben hiç denemedim. Kimse denemedi. Belki hiçbir şey olmaz.” Mumun fitilini parmaklarıyla düzeltiyor, eli yanıyor, çekiyor.",
"Anahtar elinde. Annen seni durdurmuyor."
], secenekler: [
{ t: "“Benimle gel,” dersin.", to: "y2", etki: { vicdan: 1, anne_geldi: true } },
{ t: "“Beni durdurma,” deyip yürürsün.", to: "y2", etki: { isyan: 1 } },
{ t: "Anahtarı çiviye geri asarsın. Annenin yüzüne dayanamıyorsun.", to: "f1", etki: { fayda: 1, geri_cekildi: true, yikim: false, kabul: true } },
{ t: "Anneni mutfağa kilitlersin. Bu yük onun değil, senin olacak.", to: "y2", etki: { isyan: 1, kilitledi: true } }
]},

y2: { saat: "Gece", baslik: "Karanlıkta", metin: [
P(S("y1A"), "Annen bir süre durdu. Sonra mumu alıp önden yürüdü. On iki yıldır her sabah indiği merdivenleri ilk kez gece iniyordu."),
P(S("y1B"), "Annen kenara çekildi. Arkandan bir ses gelmedi."),
P(S("y1D"), "Kapıyı kilitledin. İçeriden bir ses gelmedi. Annen kapıyı çalmadı, bağırmadı."),
"Anahtar kilitte dönüyor. Pas gıcırdıyor. Demir kapı açılıyor.",
"İçerisi sandığından küçük. Duvarlarda tırnak izleri. Bir köşede taş bir tas, ekmek kırıntıları. Bir köşede taşa oyulmuş bir çukur. Tuvalet. Koku boğazına yapışıyor.",
"Çocuk duvarın dibinde. Seni görünce bir ses çıkarıyor. Korkuyla umut arasında, ikisi ayrılmamış bir ses.",
"Yanına diz çöküyorsun. Elini uzatıp dokunuyorsun. Teni soğuk, kemikleri ince.",
"“Buradayım,” diyorsun. “Geçti. Geçti artık.”",
"Yukarıda bir şey oluyor. Kulenin saati yanlış bir saatte çalıyor. Bir kez. Sonra merdivenden aşağı bir rüzgâr iniyor. Fener sönüyor.",
"Karanlıkta çocuğun eli elini buluyor. “Şimdi ne olacak?” diye fısıldıyor."
], secenekler: [
{ t: "Onu kucaklayıp merdivenlerden çıkarırsın. Meydana, gökyüzünün altına.", to: "y3", etki: { isyan: 1, meydana: true } },
{ t: "Sabaha kadar onunla burada kalırsın, karanlıkta.", to: "y3", etki: { vicdan: 1, kaldi: true } },
{ t: "Ona bir ad verirsin: Nur.", to: "y3", etki: { vicdan: 1, ad_verdi: true } },
{ t: "Kulenin çanını çalmaya koşarsın. Herkes gelsin, herkes görsün.", to: "y3", etki: { isyan: 2, can: true } }
]},

y3: { saat: "Sabah", baslik: "Kalabalık", metin: [
P(S("y2A"), "Meydana çıktığınızda gökyüzü griydi; Işıl'da ilk gri sabah. Çocuk gözlerini kapattı. Gri bile çok fazlaydı ona."),
P(S("y2B"), "Sabaha kadar karanlıkta oturdunuz. Çocuk başını omzuna koyup uyudu. Ağzından bir ıslık sesi çıkıyordu. Yukarıdan koşan ayaklar, bağırışlar, bir çan geldi. Kıpırdamadın."),
P(S("y2C"), "“Nur,” dedin. Çocuk tekrarladı. “Nur.” Sonra güldü. Kuru, kırık bir ses, ama gülüştü."),
P(S("y2D"), "Çanı çaldın. Bir kez, iki kez, on kez. İpin kollarını yaktı. Şehir uyandı. Herkes kuleye koştu, herkes merdivenden aşağı baktı. Aynı anda."),
"Sabah Işıl gri uyanıyor. Ağaçlarda meyveler bir gecede buruşmuş. Kuyuların suyu bulanık. Şenlik çiçekleri kurumuş.",
"İnsanlar sokağa çıkıp gökyüzüne bakıyor. Bir yaşlı adam bahçesinde buruşmuş bir elmayı elinde tutuyor. Ne yapacağını bilmiyor, sonra cebine koyuyor.",
"Bir ev ötede bir çocuk öksürüyor. Bir başka evde bir yaşlı ateşleniyor.",
"Umut. Evde. Annenin kollarında. Yanakları solgun. Öksürüyor.",
"Meydanda kalabalık. Herkes sana bakıyor. Kimse bir şey söylemiyor. Henüz.",
"Bir kadın öne çıkıyor. Kucağında ateşli bir bebek. “Ne yaptın?” diyor. Sesini yükseltmiyor. “Ne yaptın bize?”",
"Çocuk arkanda, eteğine yapışmış."
], secenekler: [
{ t: "Çocuğu kalabalığın önüne çıkarırsın: “Buna bakın. Hepiniz.”", to: "a1", etki: { isyan: 2, yuzlestirdi: true } },
{ t: "Çocuğu alıp kaçarsın. Kalabalık seni dinlemeyecek.", to: "a1", etki: { vicdan: 1, kacti2: true } },
{ t: "Kadına cevap verirsin: “Bir çocuğu kurtardım. Ve sizin çocuğunuzu tehlikeye attım. İkisi de doğru.”", to: "a1", etki: { vicdan: 1, isyan: 1, durust: true } },
{ t: "Çocuğu annene verip kendini yaşlılar meclisine teslim edersin.", to: "a1", etki: { fayda: 1, teslim: true } }
]},

/* ---------- HİLE KOLU ---------- */
h1: { saat: "Gece", baslik: "Kâtip", metin: [
"Kâtip Tevfik'in evi şehrin en eski sokağında. Kapıyı kendisi açıyor. Altmışlarında, ince, gözlüklü, elinde bir kalem. Seni görünce şaşırmıyor.",
"Bahçede gül, kapıda asma, pencerede dantel perde. Bir süre neyin eksik olduğunu bulamıyorsun. Sonra buluyorsun: hiçbir yerde oyuncak yok. Ne avluda ne pencere önünde.",
"“Kardeşin için,” diyor. Soru değil. “Her kuradan önce birkaç kişi gelir. Hep aynı cümle. Kardeşim için. Kızım için. Torunum için.”",
"Seni içeri alıyor. Masada bir kâse, içinde kâğıtlar. Yarınki kâse.",
"“Bir isim çıkarsa öbürlerinin çıkma ihtimali artar,” diyor. “Yüz on dört kâğıt var. Biri eksilirse her biri biraz ağırlaşır. Bodruma biri girecek Deren. Kimin gireceğini değiştirebilirsin. Kimsenin girmemesini değil.”",
"Annenin bekçi madalyası cebinde: altın, ağır. Işıl'da onunla bir ev alınır.",
"Tevfik madalyaya bakmıyor. Ama bakmamaya uğraştığı belli. Gözlüğünü iki kez düzeltiyor."
], secenekler: [
{ t: "Madalyayı masaya bırakırsın.", to: "h2", etki: { fayda: 1, rusvet: true } },
{ t: "“Bunu yapmazsan geçen kuraları kimin için değiştirdiğini herkese söylerim,” dersin.", to: "h2", etki: { isyan: 1, tehdit: true } },
{ t: "Dizlerinin üstüne çöküp yalvarırsın.", to: "h2", etki: { vicdan: 1, yalvardi: true } },
{ t: "Vazgeçip çıkarsın. Kura kimi seçerse seçsin, seçen sen olmayacaksın.", to: "f1", etki: { vicdan: 1, geri_cekildi: true, hile: false, kabul: true } }
]},

h2: { saat: "Kura günü", baslik: "Sedef", metin: [
P(S("h1A"), "Tevfik madalyayı aldı. Cebine değil, masanın çekmecesine koydu. “Bunu ben istemedim,” dedi. “Sen verdin.” Kâseden bir kâğıt çıkarıp sobaya attı."),
P(S("h1B"), "Tevfik uzun uzun yüzüne baktı. Sonra güldü. “Herkes bilir,” dedi. “Kimse söylemez. Sen de söylemeyeceksin. Ama peki. Kardeşin için.” Kâseden bir kâğıt çıkarıp sobaya attı."),
P(S("h1C"), "Tevfik seni kaldırdı. “Kalk,” dedi. “Diz çöken her kardeş için bunu yapsam kâse boşalırdı.” Sonra kâseden bir kâğıt çıkardı, okumadan sobaya attı."),
"Kura günü. Meydan dolu. Tevfik elini kâseye daldırıyor. Bir kâğıt. Açıyor.",
"Dün gece uyumadın. Sabah aynaya baktığında yüzün aynıydı. Bunu beklemiyordun.",
"“Sedef Aral. Altı yaşında.”",
"Bir sokak ötede oturuyorlar. Saçlarını sen örerdin.",
"Bu ismin çıkma ihtimali dün geceden beri biraz daha büyüktü. Yüz on dörtte bir yerine yüz on üçte bir. Tevfik biliyor. Sen biliyorsun.",
"Sedef'in annesi Aylin meydanın ortasında yere çöküyor. Umut senin elini tutuyor. Sıcak, pembe."
], secenekler: [
{ t: "Aylin'in yanına gidip yere çökersin.", to: "h3", etki: { vicdan: 1 } },
{ t: "Umut'u kucaklayıp eve koşarsın.", to: "h3", etki: { fayda: 1 } },
{ t: "Tevfik'e bakarsın. O da sana bakıyor.", to: "h3", etki: { tevfik_bakis: true } },
{ t: "Gözlerini kapatırsın.", to: "h3", etki: { fayda: 1 } }
]},

h3: { saat: "Akşam", baslik: "Sedef'in Gözleri", metin: [
P(S("h2A"), "Aylin'in yanına gidip yere çöktün. Aylin seni itti. Sonra itmeyi bıraktı."),
P(S("h2B"), "Umut'u kucaklayıp eve koştun. Kapıyı kapatınca Umut sordu: “Sedef'e ne oldu?” Cevap vermedin; Umut'a bir bardak süt koydun, elin titredi, süt taştı."),
P(S("h2C"), "Tevfik'e baktın. O da sana. Gözlüğünün arkasında ne suçluluk vardı ne zafer. Yorgunluk. Kâseyi kucağına alıp masadan indi."),
P(S("h2D"), "Gözlerini kapattın. Aylin'in sesi yine de geldi."),
"Akşam Sedef'i kuleye götürüyorlar. İki bekçi iki yanında. Biri annen.",
"Bütün şehir meydanda. Kimse gelmek istemez, herkes gelir. Fenerler yanıyor. Aylin en önde, iki kadının kolunda.",
"Sedef kalabalığın içinde seni görüyor. Bekçilerin elinden kurtulmaya çalışmıyor ama başını sana çeviriyor.",
"“Deren abla,” diyor. Meydan o kadar sessiz ki küçük sesi duyuluyor. “Gelecek misin? Saçlarımı örmeye?”",
"Kalabalık sana dönüyor. Annen sana dönüyor. Tevfik en arkada yere bakıyor.",
"Sedef'in saçları dağınık. Bu sabah kimse örmemiş."
], secenekler: [
{ t: "“Geleceğim,” dersin.", to: "a1", etki: { vicdan: 1, soz_sedef: true } },
{ t: "Kalabalığın önünde itiraf edersin: “Bu kâğıdın çıkmasının sebebi benim.”", to: "a1", etki: { vicdan: 1, isyan: 2, itiraf: true } },
{ t: "Aylin'i bulup kulağına gerçeği söylersin. Yalnızca ona.", to: "a1", etki: { vicdan: 1, aylin_bilir: true } },
{ t: "Bakışını kaçırırsın.", to: "a1", etki: { fayda: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
a1: { saat: "Yedi gün sonra", baslik: "Yedi Gün", metin: [
P(S("f3A"), "Annenle aşağı indin. Annen ekmeği kapının dibine tek kelime etmeden bıraktı. İçeriden bir ses: “Anne?” Sedef'in sesi. Annen dönüp merdivenleri çıktı. Sen bir saniye daha kaldın."),
P(S("f3B"), "Gitmedin. Annen tek başına indi. Sabah döndüğünde gözlerinin altı mordu. Bir şey sormadın, o bir şey söylemedi, ikiniz de kahvaltıda reçel kavanozunu birbirinize uzattınız."),
P(S("f3C"), "Annenle indin ve kapının dibinde Sedef'in adını fısıldadın. İçeriden bir nefes, sonra bir fısıltı: “Deren abla?” Annen kolundan çekti."),
P(S("f3D"), "Umut'un başında kaldın. Bütün gece nefesini dinledin. Bir ara uykusunda güldü. Neye, bilmiyorsun."),
P(S("y3A"), "Çocuğu kalabalığın önüne çıkardın: “Buna bakın. Hepiniz.” Bazıları baktı, bazıları başını çevirdi. Bir anne çocuğunun gözlerini kapattı. Kimse gitmedi."),
P(S("y3B"), "Çocuğu alıp kaçtın. Ara sokaklardan, bahçelerden, bir samanlığa. Arkandan kimse gelmedi. Samanların arasında çocuk hapşırdı, sonra bir daha. Sonra güldü."),
P(S("y3C"), "“Bir çocuğu kurtardım,” dedin. “Ve sizin çocuğunuzu tehlikeye attım. İkisi de doğru.” Kadın bir süre baktı, sonra bebeğini öbür koluna alıp gitti."),
P(S("y3D"), "Çocuğu annene verip yaşlılar meclisine yürüdün. Beyaz giysili yaşlılar seni sessizce dinledi. Sonra biri, en yaşlısı, dedi ki: “Sen yalnızca kapıyı açtın. Biz kapıyı yıllarca kapalı tuttuk.” Seni cezalandırmadılar."),
P(S("h3A"), "“Geleceğim,” dedin Sedef'e. Başını salladı. Kulenin kapısında bir kez arkasına döndü."),
P(S("h3B"), "“Bu kâğıdın çıkmasının sebebi benim.” Meydan sustu. Tevfik yere baktı. Aylin sana doğru yürüdü ve yüzüne bir tokat attı. Kulağın çınladı. Sonra tokattan uzun bir sessizlik."),
P(S("h3C"), "Aylin'in kulağına gerçeği söyledin. Hiçbir şey demedi. Ertesi gün kapına bir ekmek bıraktı, tek kelime etmeden."),
P(S("h3D"), "Bakışını kaçırdın. Kulenin kapısı kapandı. Menteşesi gıcırdadı."),
P(function(d){ return d.yikim; }, "Yedi gün geçti. Işıl gri. Hasadın yarısı çürüdü. Şifa evleri dolu. Üç yaşlı öldü; Işıl'da yıllardır ilk ölümler. Meclis toplanıyor, dağılıyor, yine toplanıyor."),
P(function(d){ return d.yikim && d.teslim; }, "Seni bir odaya kapattılar. Bir pencere, bir yatak. Cezan belli değil. Işıl daha önce kimseyi cezalandırmamış. Nasıl yapılacağını bilmiyorlar. Yemeğini getiren kadın her seferinde özür diliyor."),
P(function(d){ return !d.yikim && IC(d); }, "Yedi gün geçti. Işıl her zamanki gibi. Güneş, erik, ayva, nar. Bir çocuk bodruma indi ve şehrin tek bir gölgesi eksilmedi."),
P(function(d){ return d.geri_dondu; }, "Işıl'a döndün. Umut'un yanakları ilk hafta pembeleşti. Annen sizi kapıda karşıladı. Bir şey sormadı. Kimse bir şey sormadı. Komşu kadın bir tepsi börek getirdi. “Hoş geldiniz” dedi, “nerede kaldınız” demedi."),
P(DIS, "Yedi gün geçti. Köyde kış başladı. Ahır soğuk ama Ozan Hoca'nın okulunda bir soba var. Her sabah onu sen yakıyorsun, ilk günler hep dumanlandırarak."),
P(function(d){ return d.disarida && !d.umut_gitti; }, "Umut yanında. Öksürüğü geceleri artıyor. Gündüz köy çocuklarıyla çamurda oynuyor. Onlar da öksürüyor, onlar da oynuyor."),
P(function(d){ return d.umut_gitti; }, "Umut gitti. Elçinin elini tutup dönüp dönüp bakarak. Tahta atını sana bıraktı."),
"Gösterimden bu yana kaç gün geçti? Saymayı bıraktın."
], secenekler: [
{ t: "Her gün yapman gerekeni yaparsın. Hayat devam ediyor.", to: "a2", etki: { fayda: 1 } },
{ t: "Bu günleri anlamaya çalışırsın: neyi değiştirdin, neyi değiştiremedin?", to: "a2", etki: { vicdan: 1 } },
{ t: "İnsanlarla konuşursun. Herkesle, gördüklerini.", to: "a2", etki: { isyan: 1, konustu: true } },
{ t: "Kime gideceğini bilmeden bir mektup yazarsın.", to: "a2", etki: { vicdan: 1, mektup: true } }
]},

a2: { baslik: "Annen", metin: [
P(S("a1A"), "Her gün yapman gerekeni yaptın: ekmek, su, iş. Ama her akşam eve dönerken adımların kulenin önünde yavaşladı."),
P(S("a1B"), "O günleri anlamaya çalıştın. Bir kâğıda iki sütun çizdin. İkinci sütun daha uzundu. Kâğıdı katlayıp cebine koydun. Sonra pantolonla birlikte yıkandı."),
P(S("a1C"), "Herkesle konuştun: komşularla, yaşlılarla, çarşıdakilerle. Çoğu dinleyip başını salladı. Biri seni kapıdan kovdu. Bir yaşlı kadın elini tuttu: “Ben de biliyorum evladım. Altmış yıldır.”"),
P(S("a1D"), "Kime gideceğini bilmeden bir mektup yazdın. Sonunda zarfın üstüne yazdın: “Aşağıdakine.”"),
P(function(d){ return d.disarida && !d.umut_gitti; }, "Bir sabah köyün girişinde bir kadın: yalnız, sırtında bir çıkın, ayakkabıları çamurdan görünmüyor. Annen. Işıl'dan çıkmış, üç gün yürümüş."),
P(function(d){ return d.disarida && !d.umut_gitti; }, "“Bekçiliği bıraktım,” diyor. “Bir başkası taşıyor artık. Kim, bilmek istemiyorum.” Yanına oturuyor. Çıkınından bir kavanoz bal çıkarıyor."),
P(function(d){ return d.umut_gitti; }, "Elçi bir kez daha geliyor. Bu kez annenden bir mektupla. Umut iyiymiş, yanakları pembeymiş. Sonra mektup başka bir şeye dönüyor."),
P(IC, "Bir akşam annenle mutfaktasınız. İki bardak ıhlamur."),
P(function(d){ return d.yikim; }, "“Bir şey söyleyeceğim,” diyor annen. “Işık söndüğü gece kuzeyden bir fırtına geldi. Kırk yılda bir gelen türden. Hasat o fırtınayla çürümüş olabilir. Hastalık da. Ya da Ahit. Bilmiyoruz. Bilemeyeceğiz de.” Bardağı bırakıyor. “Belki hiç Ahit yoktu. Belki birileri bir şeye inanmak için bir çocuğa ihtiyaç duydu.”"),
P(function(d){ return !d.yikim; }, "“Bir şey söyleyeceğim,” diyor annen. “On iki yıl önce, ilk yılımda, bir sabah kapının önünde dayanamadım. ‘Günaydın,’ dedim. Sadece bu.” Bardağı bırakıyor. “Hiçbir şey olmadı. Işık sönmedi, hasat çürümedi. Ama ben bir daha konuşmadım. Korktuğum için değil. Bir kelime hiçbir şeyi değiştirmiyorsa o çocuk orada neden duruyor? Bunu bilmek istemedim.”"),
P(function(d){ return !d.umut_gitti; }, "Annen ıhlamurunu içiyor. Soğumuş, yüzünü buruşturuyor."),
P(function(d){ return d.umut_gitti; }, "Mektubun sonunda bir satır daha: “Bunu sana yüzüne söyleyemezdim. Kâğıt daha cesur.”")
], secenekler: [
{ t: "“Bunu neden şimdi söylüyorsun?”", to: "a3", etki: { isyan: 1 } },
{ t: function(d){ return d.umut_gitti ? "Mektubu göğsüne bastırırsın." : "Annenin elini tutarsın."; }, to: "is_ninni", etki: { vicdan: 1 } },
{ t: "“Ahit olsa da olmasa da insanlar inandı. İnanmak da bir şeyi ayakta tutar,” dersin.", to: "a3", etki: { fayda: 1 } },
{ t: "Kalkıp pencereye gidersin.", to: "is_pencere", etki: { vicdan: 1 } }
]},

a3: { baslik: "Umut", metin: [
P(function(d){ return d.son === "a2A" && !d.umut_gitti; }, "“Bunu neden şimdi söylüyorsun?” Annen uzun süre sustu. “Çünkü sen sordun,” dedi. “Ben hiç sormadım.”"),
P(function(d){ return d.son === "a2A" && d.umut_gitti; }, "Mektubu bir daha okudun: neden şimdi? Cevap son satırdaydı."),
P(S("a2C"), "“İnanmak da bir şeyi ayakta tutar,” dedin. Annen gözlerini kapattı. “Evet,” dedi. “Bir duvar gibi. Arkasını görmemek için.”"),
P(S("is_ninniA"), "Ninniye bir dize ekledin: “Bir kuzu karanlıkta, kimse sormaz adını.” Annen duydu, bir şey demedi. Ertesi gece Umut o dizeyi kendisi söyledi, yanlış hatırlayarak."),
P(S("is_ninniB"), "Ninniyi bir daha söylemeyeceksin. Umut ertesi gece istedi. Sustun. Umut kendi kendine söyledi. Eksik, yanlış, takılarak."),
P(S("is_ninniC"), "Ninniyi baştan sona, eksiksiz söyledin. Umut “kimse ağlamaz”a gelmeden uyumuştu."),
P(S("is_ninniD"), "Ninninin kaynağını aramaya başladın: eski kitaplar, yaşlıların hafızası. Bir kayıtta bir anne adı geçiyordu. Sayfa yırtıktı. Adın yalnızca ilk harfi kalmıştı."),
P(S("is_pencereA"), "Pencereyi açtın. Gece havası soğuktu. Annen bir şey demedi. Pencereyi kapatmadı da."),
P(S("is_pencereB"), "Perdeyi çektin. “Ben de hep çekerim,” dedi annen."),
P(S("is_pencereC"), "Birlikte baktınız. Uzun uzun. Ne gördüğünüzü konuşmadınız."),
P(S("is_pencereD"), "Buğulu cama bir ad yazdın. Sabah buğu kurudu, ad gitti. Camda parmağının yağlı izi kaldı."),
P(function(d){ return d.umut_gitti; }, "Umut'tan bir mektup geliyor, elçiyle. Yedi yaşında bir çocuğun büyük harfleri: “ABLA BURADA HER ŞEY GÜZEL. AMA SEN YOKSUN. NEDEN?” Altında bir at çizmiş."),
P(function(d){ return !d.umut_gitti; }, "Umut yanına geliyor. Elinde bir resim. Kule, kulenin altında bir oda, odanın içinde bir çocuk. Bu kez çocuğun ağzı aşağı doğru çizilmiş."),
P(function(d){ return !d.umut_gitti; }, "“Abla,” diyor. “Orada bir çocuk var, değil mi? Herkes biliyor. Benim yüzümden mi?”"),
P(function(d){ return d.yikim && !d.umut_gitti; }, "Umut öksürüyor. Yanakları solgun."),
P(function(d){ return d.nur_evde || (d.yikim && d.ad_verdi); }, "Nur masanın altında, Umut'un yanında. İkisi aynı resmi boyuyor. Nur odanın içindeki çocuğu siliyor, yerine bir pencere çiziyor."),
"Umut cevap bekliyor. Resmi iki eliyle tutmuş, buruşturmamaya çalışıyor."
], secenekler: [
{ t: "Gerçeği söylersin. Bütün gerçeği. Yedi yaşında da olsa.", to: "a4", etki: { isyan: 1, umut_gercek: true } },
{ t: "“Hayır, senin yüzünden değil,” dersin. Kimsenin yüzünden değilmiş gibi.", to: "a4", etki: { fayda: 1 } },
{ t: "“On sekizine gelince göstereceğim,” dersin. Söylerken kendinden korkarak.", to: "a4", etki: { fayda: 1, gosterecek: true } },
{ t: "Onu kucaklarsın ve hiçbir şey söylemezsin.", to: "a4", etki: { vicdan: 1 } }
]},

a4: { saat: "Şafak", baslik: "Saat Kulesi", metin: [
P(S("a3A"), "Umut'a gerçeği söyledin. Umut sustu. Sonra elini göğsüne koydu, nefesini dinler gibi. “Bu nefes onun mu?” dedi. Cevap veremedin."),
P(S("a3B"), "“Senin yüzünden değil,” dedin. Umut inandı. Yedi yaşındaydı. Ama gece uykusunda, kimsenin ona söylemediği bir ad sayıkladı."),
P(S("a3C"), "“On sekizine gelince göstereceğim,” dedin. Umut başını salladı. O an annenin on bir yıl önce sana aynı cümleyi kurduğunu hatırladın."),
P(S("a3D"), "Onu kucakladın. Umut da bir şey sormadı. Resim aranızda buruştu."),
P(DIS, "Köyün en yüksek tepesine çıkıyorsun. Uzakta, ufukta, bir ışık adası: Işıl. Kışın ortasında bile parlıyor. Ya da artık parlamıyor, buradan anlaşılmıyor."),
P(IC, "Şafakta saat kulesine çıkıyorsun. Bu kez merdivenler yukarı. Tepeden bütün Işıl görünüyor: bahçeler, damlar, meydan, kuzey kapısı."),
P(function(d){ return d.yikim && IC(d); }, "Şehir gri ama yaşıyor. Bacalardan duman çıkıyor. İnsanlar ilk kez soğuktan korunmak için ateş yakıyor. Bir avluda iki komşu birlikte odun kırıyor. Biri baltayı tutmayı bilmiyor, öbürü gösteriyor."),
P(function(d){ return !d.yikim && IC(d); }, "Şehir her zamanki gibi altın rengi. Ayağının altında, kulenin dibinde, bir çocuk var."),
"Çanın ipi elinin yanında. Bu çan yüzyıllardır yalnızca şenlik ve kura için çalınmış.",
"İp kalın, eski, ellerin değdiği yerlerden parlamış."
], secenekler: [
{ t: function(d){ return d.disarida ? "Köyde kalırsın. Ozan Hoca'nın okulunda öğretmen olursun." : "Bekçi olmayı kabul edersin. Bir dahaki ekmeği sen götüreceksin."; }, to: "is", etki: function(d){ if(d.disarida){ d.ogretmen = true; d.vicdan++; } else { d.bekci = true; d.fayda++; } } },
{ t: function(d){ return d.disarida ? "Işıl'a doğru yürürsün. Geri dönmek için değil. Kapıda durup gidenlere yol göstermek için." : "Kuzey kapısına yürürsün. Bu sefer dönmemek üzere."; }, to: "is", etki: { gitti: true, isyan: 1 } },
{ t: function(d){ return d.disarida ? "Işıl'a bir mektup yazarsın: on sekiz yaşına basan her gence okunmak üzere." : "Çanı çalarsın. Herkes kuleye gelsin. Herkes birlikte aşağı baksın."; }, to: "is", etki: { can: true, isyan: 2 } },
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
P(function(d){ return d.son === "a4C" && d.disarida; }, "Işıl'a bir mektup yazmıştın. On sekizine basan her gence okunmak üzere."),
P(function(d){ return d.son === "a4C" && !d.disarida; }, "İpi çektin. Çanın sesi şehrin üstüne düştü. Uykudaki her evin içine."),
P(S("a4D"), "O sabah hiçbir şey yapmamış, güneşin doğuşunu izlemiştin."),
P(IC, "Bir kez, iki kez, yüz kez. Kolların uyuşana kadar. Kapılar açıldı. İnsanlar geceliklerle, terliklerle meydana döküldü. Kuleye baktılar. Sonra birer birer merdivenlere."),
P(DIS, "Mektubu bir yolcuyla gönderdin. Kimin okuyacağını bilmeden. Yıllar sonra kuzey kapısından çıkan bir gencin cebinde bulundu. Buruşmuş, kenarları yumuşamış, yüz kere katlanıp açılmış."),
"Merdivenler dar. Herkes sığmadı. Arkadakiler öndekilere “Ne var? Ne görüyorsunuz?” diye sordu. Öndekiler cevap vermedi. Bir süre sonra arkadakiler de sormayı bıraktı.",
"O gün Işıl'da ilk kez herkes toplandı. Yaşlılar değil, herkes. Kimse ne yapılacağını bilmiyordu. Biri bağırdı, biri ağladı, biri “Çocuklarımız ne olacak?” dedi, biri “O da birinin çocuğu,” dedi. Akşam oldu, karar çıkmadı. Ertesi gün yine toplandılar.",
"Bodrumdaki çocuk o gece kapısının önünde yüzlerce ayak sesi duydu. Biri kapının altından bir battaniye itti. Biri bir ninni söylemeye başladı, yarıda bıraktı. Biri devam etti."
]},

son_karanlik: { son: true, baslik: "Karanlık Şehir", metin: [
P(S("a4A"), "Bekçi olmayı kabul etmiştin. Ama beklenecek bir kapı kalmamıştı. Yine de her sabah kuleye indin."),
P(S("a4D"), "O sabah hiçbir şey yapmamış, güneşin doğuşunu izlemiştin."),
"Işıl artık sıradan bir şehir. Kışları soğuk, yazları kurak. Bazı yıllar hasat iyi, bazı yıllar kötü. İnsanlar hastalanıyor, iyileşiyor, ölüyor. Erikler artık yalnızca yazın oluyor ve herkes ilk eriği bekliyor.",
P(function(d){ return d.ad_verdi; }, "Nur sizin evde büyüyor. Hâlâ güneşe bakamıyor. Gölgelerde yaşıyor. Ama gülüyor. Her akşam Umut'a ninniyi söylüyor. O kelimeyi artık biliyor."),
P(function(d){ return !d.ad_verdi; }, "Bodrumdaki çocuk Şifa Evi'nde büyüyor. Kimse ona bir ad vermedi. Kendi kendine bir ad seçmiş. Kimseye söylemiyor."),
"Umut iki kış sonra öldü. Solgunluk geri geldi. Cenazeye yarım şehir geldi. Kimse yüzüne bir şey söylemedi. Bir kadın yanına gelip sadece “Benimki de,” dedi ve gitti.",
"Annen bazen Ahit'in hiç olup olmadığını soruyor. Fırtına mıydı, senin sesin miydi? Bilmiyorsunuz.",
"Bir bahar sabahı mezarlıktan dönerken bir çocuğun bir eriği ağacından koparıp ısırdığını, ekşi diye yüzünü buruşturup yine de yediğini görüyorsun. Duruyorsun. Çocuk sana bakıp kaçıyor."
]},

son_gidenler: { son: true, baslik: "Gidenler", metin: [
P(S("a4A"), "Ozan Hoca'nın okulunda öğretmen olmuştun. Ahırdaki tahtanın başında, öksüren çocuklara harf öğreterek."),
P(S("a4D"), "O sabah hiçbir şey yapmamış, güneşin doğuşunu izlemiştin."),
P(function(d){ return d.ogretmen; }, "Ahırdaki okul büyüdü. Bir oda, iki oda. Köyün çocukları, Işıl'dan gelenlerin yanında okumayı öğreniyor. Bu köyde bodrum yok. Soğuk kışlar ve paylaşılan ekmek var."),
P(function(d){ return d.disarida && !d.umut_gitti; }, "Umut bir yıl dayandı. Son kışında köyün çocuklarıyla kartopu oynadı. Öksürerek, gülerek, bir kartopunu Ozan Hoca'nın ensesine atarak. Onu köyün mezarlığına, bir erik fidanının dibine gömdün. Fidan büyüdü. Yalnızca baharda meyve veriyor."),
P(function(d){ return d.umut_gitti; }, "Umut Işıl'da büyüyor. Mektupları seyrekleşti. On sekizinci yaş gününde bir mektup geldi, bu kez küçük harflerle: “Abla, gördüm. Gelemiyorum. Ama anlıyorum.” Zarfın içinde tahta atının kırık bir bacağı vardı."),
P(function(d){ return d.gitti && !d.disarida; }, "Kuzey kapısından geçtin. Bu kez yalnız. Arkanda annen, Umut, bodrum. Önünde ay. Üç gün sonra bir köyde birinin kapısını çaldın. Bir kadın çorba verdi, tuzu az."),
"Bazı geceler ufukta o ışık adasına bakıyorsun. Her yıl birkaç kişi geliyor oradan, gözlerinde aynı şeyle. Geçen hafta biri geldi. On sekiz yaşında bir kız. Ona bir battaniye verdin, bir şey sormadın."
]},

son_bekci: { son: true, baslik: "Yeni Bekçi", metin: [
P(S("a4A"), "Annenin anahtarı artık senin çivine asılı."),
"Bekçi oldun. Her sabah demir kapının önüne ekmek ve su bırakıyorsun. Tek kelime etmeden.",
P(function(d){ return d.sedef_fisilti || d.soz_sedef; }, "İçeride Sedef. Her sabah kapının küçük penceresinden ona bakıyorsun. O sana bakıyor. Bir sabah saçının bir tutamını kapının altından uzattı. Örmedin. Elini uzatıp dokundun, sonra çektin."),
"İlk yıl her gece ağlıyorsun. Annen sesini duyuyor, kapına gelmiyor. Sabah kahvaltıda ekmeğine fazladan bal sürüyor.",
"Umut on sekiz yaşına geldiğinde aşağı inecek. Kapının önünde, fenerin ışığında, elinde ekmekle ablasını görecek.",
"Bir sabah ekmeği bırakırken ağzından bir kelime kaçıyor: “Günaydın.” Annen gibi. İçeriden bir ses gelmiyor. Işık sönmüyor. Merdivenleri çıkıyorsun. Ellerin titriyor, ertesi sabah yine iniyorsun."
]},

son_kul: { son: true, baslik: "Kül", metin: [
P(S("a4D"), "O sabah hiçbir şey yapmamış, güneşin doğuşunu izlemiştin."),
"Umut büyüdü. Sağlıklı, güçlü, pembe yanaklı. On sekiz yaşında aşağı indi, pencereden baktı, eve gelip sana sarıldı. “Şanslıymışız,” dedi. “Kurada adım çıkmamış.”",
"Sedef bodrumda dokuz yıl kaldı. Çıktığında konuşamıyordu. Aylin onu evine alıp perdeleri kapattı. Bazen sokakta Aylin'le karşılaşıyorsun.",
P(function(d){ return d.aylin_bilir; }, "Biliyor. Sen söyledin. O günden beri sana tek kelime etmedi. Bir gün kapına küçük bir paket bıraktı: içinde bir saç tokası. Sedef'in. Tokayı ne yapacağını bilmiyorsun. Çekmecende duruyor."),
P(function(d){ return !d.aylin_bilir; }, "Aylin sana selam veriyor. Bir keresinde pazarda “Sedef seni sordu,” dedi, “saçını örer miymişsin.” Ertesi gün gittin. Sedef'in saçını ördün. Sıkı, acıtmadan. Sedef bir şey demedi. Sen de."),
"Tevfik öldü. Çekmecesinden bir altın madalya çıktı. Kimin olduğunu kimse bilmedi. Sen bildin. Cenazede en arkada durdun."
]},

son_isik: { son: true, baslik: "Işık Şehri", metin: [
P(S("a4D"), "O sabah hiçbir şey yapmamış, güneşin doğuşunu izlemiştin."),
"Işıl'da yaşamaya devam ettin. Güneş, erik, ayva, nar. Umut büyüdü. Sen evlendin, bir kızın oldu. Adını Sedef koymadın. Koymayı düşündün.",
"Her yıl gösterim gününde meydanda şenlik kuruluyor. Sen de gidiyorsun. Gençlerin merdivenden inişini, çıkışını, susuşunu izliyorsun. Çıkanlara sarılıyorsun, bir şey sormadan. Bunu sen de yapıyorsun artık.",
"Bazen biri kuzey kapısından gidiyor. Sen gitmedin.",
"Kızın beş yaşında. Bu sabah saçını örerken “Sıkı yap ama acıtma,” dedi. Elin durdu. Kız aynada sana baktı: “Ne oldu anne?”",
"Gelecek yıl kura var. Adı kâseye girecek."
]}

},

ayna: function(d){
  var out = [];
  var f = d.fayda, v = d.vicdan, i = d.isyan;
  if(f >= v && f >= i) out.push("Bu hikâyede en çok hesaba yaslandın: bir çocuk ve binlerce çocuk.");
  else if(v >= i) out.push("Bu hikâyede en çok vicdanına yaslandın: ağladın, dinledin, baktın, sarıldın.");
  else out.push("Bu hikâyede en çok başkaldırdın: kurala, şehre, alışkanlığa.");
  if(d.fisildadin) out.push("İlk gece, kurala rağmen, bir çocuğa adını sordun.");
  if(d.hile) out.push("Bir kâğıdı ateşe attırdın; bir başkasının adı biraz ağırlaştı.");
  if(d.yikim) out.push("Bir kapıyı açtın.");
  if(d.disarida) out.push("Gittin.");
  if(d.ispiyon) out.push("Bir gidenin gideceğini haber verdin.");
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
