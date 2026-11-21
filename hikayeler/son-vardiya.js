(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "son-vardiya",
baslik: "Son Vardiya",
dunya: "Gerçek dünya",
kavramlar: ["Trajik ikilem", "Ödev ve fayda", "Ahlaki yara", "Ölümle yüzleşme"],
ozet: "Kar yolları kapatmış. Küçük bir ilçe hastanesinin yoğun bakımında tek bir boş solunum cihazı var. Gece uzun ve sen nöbetçi hemşiresin.",
baslangic: "s1",
durum: { merhamet: 0, kural: 0, gercek: 0 },

sahneler: {

s1: { saat: "19.10", baslik: "Kar", metin: [
"Kar öğleden beri yağıyor. Saat yediyi on geçe yoğun bakımın kapısından girdiğinde pencerenin dışında dünya bitmiş gibi: ne yol var ne ışık ne ses. Camda yalnızca kendi yansıman var. Otuz altı yaşında, on iki yıldır bu koridorlarda yürüyen bir kadın. Adın Leyla.",
"Gündüz ekibinin hemşiresi dosyaları masaya bırakıp montunu giyerken söylüyor: “Yollar kapandı. Şehirle bağlantı yok. Ambulans da gelmez, helikopter de kalkmaz. Bu gece ne olursa bizde olur.”",
"Altı yatak, dördü dolu. Beş solunum cihazı var; biri üç haftadır arızalı, yedek parçası “yolda”. Ötekilerin üçü dolu. Yani boşta bir tane kaldı. Bir tane.",
"Dört numarada İsmail Bey yatıyor. Seksen bir yaşında, emekli tarih öğretmeni; ciğerleri yıllardır yavaş yavaş kapanıyor. Maskeyle nefes alıyor ama değerleri akşamdan beri düşüyor. Koridorda, plastik bir sandalyede eşi Saniye Hanım oturuyor. Kucağında bir termos çay var; kimseye ikram etmeyi beceremediği.",
"Nöbetçi doktor Kaan yirmi yedi yaşında, uzmanlığının ikinci yılında. Seni görünce rahatlıyor ve bunu saklamaya çalışmıyor bile. Songül Abla, yirmi beş yıllık hemşire, ilaç dolabını sayıyor ve hiçbir şey söylemiyor. Söylemediği şey odayı dolduruyor.",
"Gece daha başlamadı. Ama bazı gecelerin başlamadan bittiğini biliyorsun."
], secenekler: [
{ t: "Kurala rağmen Saniye Hanım'ı içeri alır, eşinin yanına oturtursun.", to: "s2", etki: { merhamet: 1, saniye_iceride: true } },
{ t: "Kaan'a İsmail Bey'in değerlerini gösterir, olası bir entübasyon için hazırlık istersin.", to: "s2", etki: { kural: 1 } },
{ t: "İsmail Bey'in yanına oturup ona ne istediğini doğrudan sorarsın.", to: "s2", etki: { gercek: 1 } },
{ t: "Songül Abla'nın yanına gider, dolabı onunla birlikte sessizce sayarsın.", to: "s2", etki: { songul: true } }
]},

s2: { saat: "21.30", baslik: "İki İstek", metin: [
P(S("s1A"), "Saniye Hanım içeri girerken ayakkabılarını çıkarmak istedi; izin vermedin. O yine de parmak uçlarında yürüdü, ses yaparsa bir şey kırılacakmış gibi. Şimdi eşinin elini tutuyor ve ikisi de konuşmuyor. Kırk yıl evli kalmış insanların sessizliği bu; içinde her şey var."),
P(S("s1B"), "Kaan değerlere baktı, dudağını ısırdı. “Sabaha kadar dayanır belki,” dedi. Belki. Bu meslekte en ağır kelime. Entübasyon setini yine de hazırladın, bir köşeye, kimsenin görmeyeceği ama herkesin bildiği bir yere."),
P(S("s1C"), "Yanına oturdun. “İsmail Bey, beni duyabiliyor musunuz?” Gözlerini açtı. Maskenin arkasında bir gülümseme denemesi. “Kızım,” dedi, “bana en son ne istediğimi soran kişi annemdi.”"),
P(S("s1D"), "Songül Abla dolabı kapatırken yanında durdun. Bir şey demedi ama omzunu omzuna bir saniye değdirdi. Yirmi beş yıl o bir saniyeye sığdı. Sonra “Dört numaraya dikkat,” dedi. “Gözlerinde o bakış var.”"),
"Saat dokuz buçukta İsmail Bey'in değerleri bir basamak daha düşüyor. Maskeyi düzeltmek için eğildiğinde elini tutuyor. Parmakları kâğıt gibi, ama sıkıyor.",
"“Babamı da o makineye bağlamışlardı,” diyor, her kelimenin arasında bir nefes. “Üç ay. Konuşamadı. Gözleriyle bana bir şey söylüyordu, anlamadım. Hâlâ anlamıyorum.” Bir nefes. “Beni bağlamayın.”",
"Sonra gözleri kapıya kayıyor, koridora, plastik sandalyeye. “Ama Saniye'yi yalnız bırakmayın.”",
"Bir isteği ötekini yiyor ve ikisi de aynı adamın. Bu sözler hiçbir kâğıda yazılmadı. Dosyada “yaşam desteği reddi” diye bir belge yok. Bu odada bunu yalnızca sen duydun.",
P(S("s1A"), "Hayır, yalnızca sen değil. Saniye Hanım da duydu. Hiçbir şey söylemedi; eşinin elini biraz daha sıkı tuttu, o kadar."),
"Monitörün sesi, yanlış çalınan bir şarkının tekrar eden notası gibi."
], secenekler: [
{ t: "Söylediklerini dosyaya yazarsın: “Hasta, mekanik ventilasyon istemediğini sözlü olarak belirtti.”", to: "s3", etki: { kural: 1, gercek: 1, istek: "yazili" } },
{ t: "Duyduğunu kendine saklarsın. Korkmuş, yaşlı bir adamın sözleriydi; kararı sabah ailesiyle doktor verir.", to: "s3", etki: { istek: "sakli" } },
{ t: "Kaan'ı çağırıp İsmail Bey'in sözlerini onun da duymasını sağlarsın.", to: "s3", etki: { kural: 1, istek: "kaan" } },
{ t: "Saniye Hanım'a sorarsın: “Eşiniz bunu hep böyle mi söylerdi?”", to: "s3", etki: { merhamet: 1, istek: "saniye" } }
]},

s3: { saat: "22.40", baslik: "Telefon", metin: [
P(S("s2A"), "Not dosyada, mavi tükenmez kalemle, senin yuvarlak el yazınla. Bir insanın son isteği tek bir cümle; hemen altında ilaç dozları ve idrar miktarı. Kâğıt her şeyi aynı ağırlıkta taşıyor."),
P(S("s2B"), "Sözler cebinde katlanmış bir kâğıt gibi duruyor. Kimse görmüyor. Ama attığın her adımda köşesi bir yerine batıyor."),
P(S("s2C"), "Kaan dinledi, başını salladı, bir şey yazmadı. “Akut dönemde hastanın kararı tartışmalıdır,” dedi, kitaptan okur gibi. Sonra gözlerini kaçırdı. Kitap ona sığınacak bir yer veriyordu; sana vermiyordu."),
P(S("s2D"), "Saniye Hanım uzun süre sustu. “Hep söylerdi,” dedi sonunda. “Ama hep de yaşamak isterdi. Kırk yıl, ikisi birden.” Termosu açtı, sonra kapattı. “Siz ne yapacaksanız yapın kızım. Ben karar veremem. Kırk yıldır hiçbir şeye o olmadan karar vermedim.”"),
"Saat on biri yirmi geçe telefon çalıyor. Jandarma. Kara yolunda bir otomobil devrilmiş. Sürücü on dokuz yaşında, adı Deniz; askerden izne geliyormuş. Kafa travması, göğüs travması, solunumu kötü. Paletli bir kar aracıyla getiriyorlar. Kırk dakika.",
"Kaan ahizeyi yerine koyuyor, ahize yerine oturmuyor, bir daha koyuyor. “Cihaz,” diyor. “Tek cihaz var.”",
"Arkadan Songül Abla'nın sesi: “Dört numaranın satürasyonu seksen ikiye indi.”",
"İki rakam, iki insan. Biri seksen bir yaşında, biri on dokuz. Biri burada, nefesini sayıyorsun; ötekinin adını beş dakika önce duydun. İkisini aynı terazide tartmak zorunda olduğunu henüz kimse söylemedi. Ama herkes biliyor."
], secenekler: [
{ t: "Servis şefi Tahsin Hoca'nın evden aranmasını istersin. Bu karar ne senin ne de Kaan'ın kararı olmalı.", to: "s4", etki: { kural: 1 } },
{ t: "İsmail Bey'i şimdi cihaza bağlamalarını söylersin. Burada olan, yolda olandan önce gelir.", to: "s4", etki: { erken: "ismail" } },
{ t: "Cihazı boş tutarsın. İsmail Bey'i maskeyle idare edip Deniz'i beklersiniz.", to: "s4", etki: { erken: "bos" } },
{ t: "Songül Abla'ya dönersin: “Sen olsan ne yapardın?”", to: "s4", etki: { songul: true, songul_sordu: true } }
]},

s4: { saat: "22.55", baslik: "Uzaktaki Ses", metin: [
P(S("s3A"), "Kaan telefonu açtı, numarayı tuşlarken parmakları kaydı. İki kez yanlış numara. Üçüncüde çaldı."),
P(S("s3B"), "Kaan entübasyonu senin elinin üstünde yaptı: titreyen bir el ve titremeyen bir el. Şimdi İsmail Bey'in göğsü makinenin ritmiyle inip kalkıyor. Saniye Hanım kapının camından izledi ve camı buğulandırmamak için nefesini tuttu. Karar verilmiş gibi görünüyor. Ama verilmiş gibi görünmek ile verilmiş olmak arasında ince bir yer var ve sen tam orada duruyorsun."),
P(function(d){ return d.son === "s3B" && d.istek; }, "“Beni bağlamayın,” demişti. Bir buçuk saat önce. O cümle şimdi makinenin her nefesinde yeniden söyleniyor."),
P(S("s3C"), "Cihaz boş. Ekranı yeşil yanıyor; kendi kendine test yapıyor, bekliyor. Boş bir yatağın bu kadar gürültülü olabileceğini bilmezdin. İsmail Bey'in maskesini bir kez daha sıkılaştırdın. Sanki sıkılaştırmak yeterli olacakmış gibi."),
P(S("s3D"), "Songül Abla omuz silkti. “Ben olsam mı? Ben olsam yirmi beş yıl önce başka bir iş seçerdim.” Sonra sesini alçalttı: “Gence ver, Leyla. Ama sonra ömrün boyunca o yaşlı adamın yüzünü görürsün. Yaşlıya ver, çocuğun annesinin yüzünü görürsün. Hangi yüzle yaşayabileceğini seç. Başka bir şey seçemezsin.”"),
"Sonunda Tahsin Hoca'ya ulaşılıyor. Servis şefi altmış kilometre ötede, evinde. Sesi uykulu, arkada bir televizyon. Kaan durumu anlatırken sözünü kesiyor:",
"“Protokol belli, Kaan. Sağkalım şansı yüksek olan. Gerisini siz değerlendirin, ben buradan hastayı göremem.” “Hocam, yazılı bir talimat—” “Gece yarısı ne yazılısı? Sen doktorsun. Leyla Hanım da orada, değil mi? Tecrübeli. Birlikte karar verirsiniz.”",
"Hat cızırdıyor, sonra kesiliyor. Kar, telefon direklerini de kapatıyor.",
"Kaan ahizeyi yavaşça bırakıyor ve sana dönüyor. Gözlerinde bir şey var: yalvarmaya benzeyen, ama yalvarmaktan utanan bir şey. “Leyla Abla,” diyor. “Sen ne dersen.”",
"Bir kararın sahibinin yoktan var olduğu an budur. Kimse kimseye yetki vermedi. Yine de yük omzuna yerleşti."
], secenekler: [
{ t: "Kaan'a kararı onun vermesi gerektiğini, senin yalnızca uygulayacağını söylersin.", to: "bk", etki: { kural: 1, sinir: true } },
{ t: "Kaan'ın omzunu tutup “Birlikte vereceğiz,” dersin.", to: "bk", etki: { merhamet: 1, birlikte: true } },
{ t: "Saniye Hanım'ın yanına gidip olabilecek her şeyi ona dürüstçe anlatırsın.", to: "bk", etki: { gercek: 1, saniye_bilir: true } },
{ t: "Hiçbir şey söylemeden ambu balonlarını ve yedek oksijen tüplerini hazırlarsın; ne olursa olsun.", to: "bk", etki: { hazir: true } }
]},

bk: { saat: "23.10", baslik: "Bekleyiş", metin: [
P(S("s4A"), "Kaan başını salladı, yutkundu. “Tamam,” dedi. Tamam olmadığını ikiniz de biliyordunuz. Bir çizgi çektin ve çizginin öbür yanında yirmi yedi yaşında bir çocuk tek başına kaldı."),
P(S("s4B"), "Kaan'ın omzu elinin altında bir an gevşedi. “Birlikte,” dedi. Bu kelimenin ağırlığı bölünmüyor, biliyorsun; yalnızca iki kişi aynı ağırlığı ayrı ayrı taşıyor. Ama yalnız taşımaktan iyidir. Belki."),
P(S("s4C"), "Saniye Hanım'a anlattın: tek cihaz, yoldaki çocuk, eşinin değerleri. Sözlerini yumuşatmadın. Dinledi, başını salladı ve sonunda yalnızca şunu sordu: “O çocuğun annesi biliyor mu?”"),
P(S("s4D"), "Balonları dizdin, tüpleri kontrol ettin, maskeleri boylarına göre sıraladın. Ellerin bir iş bulduğunda zihin susuyor. Eskiden bunu bir kaçış sanırdın; şimdi bir dua biçimi olduğunu düşünüyorsun."),
"Yirmi beş dakika. Pencerenin önüne gidiyorsun. Kar yağmaya devam ediyor; sokak lambasının ışığında, sanki gökyüzü yavaş yavaş dağılıyormuş gibi.",
"On dört yıl önce baban bu hastanede öldü. Bu binada, belki bu koridorda. O gece de kar yağıyordu; sen otogarda mahsur kalmıştın, yollar kapalıydı. Sabah geldiğinde bir hemşire sana babanın son saatlerinde elini tuttuğunu söyledi. Adını sormadın. Sonra hep sormak istedin. Bu meslek o yüzden mi seçildi, yoksa seçtikten sonra mı öyle anlatmaya başladın, artık bilmiyorsun.",
"Saniye Hanım arkanda duruyor. Termosu uzatıyor. “Bir çay iç kızım. Bu gece uzun.”"
], secenekler: [
{ t: "Çayı alır, Saniye Hanım'ın yanına oturursun.", to: "s5", etki: { merhamet: 1, cay: true } },
{ t: "Kaan'la birlikte protokolü bir kez daha okursunuz: yaş, eşlik eden hastalıklar, sağkalım skoru.", to: "s5", etki: { kural: 1, protokol: true } },
{ t: "İsmail Bey'e gidip Deniz'in geleceğini, cihazın tek olduğunu söylersin. Bilmeye hakkı var.", to: "s5", etki: { gercek: 1, ismail_bilir: true } },
{ t: "Lavaboya gidip yüzünü yıkarsın, aynadaki kadına bakmadan.", to: "s5" }
]},

s5: { saat: "23.35", baslik: "Kapı", metin: [
P(S("bkA"), "Çay soğumuştu ve çok şekerliydi. Saniye Hanım eşinin nasıl çay içtiğini anlattı: bardağı iki eliyle tutar, ilk yudumu hep yakarmış. Kırk yıl, her sabah. Sen dinledin ve bir an kar durmuş gibi oldu."),
P(S("bkB"), "Protokol iki sayfa. Yaş. Kronik hastalık. Tahmini sağkalım. Her satırın yanında bir puan. Kâğıt hiçbir şeyin adını söylemiyor; yalnızca sayıların arasındaki farkı. Okudukça içinde bir şey rahatlıyor ve o rahatlamadan utanıyorsun."),
P(S("bkC"), "İsmail Bey dinledi. Gözlerini tavana dikti. Sonra elini kaldırdı ve parmağıyla kapıyı gösterdi. Yoldan gelen çocuğu mu gösteriyordu, yoksa çıkıp gitmeni mi istiyordu? Bilmiyorsun. Bundan sonra da hiç bilmeyeceksin."),
P(S("bkD"), "Su soğuktu. Aynaya bakmadın ama aynanın sana baktığını biliyordun."),
"Paletli aracın sesi koridora kadar geliyor. Kapı açılıyor ve kar içeri doluyor. Sedyede bir çocuk yatıyor. Yüzü kanlı, dudakları mor, göğsü düzensiz inip kalkıyor. Yanında üniformalı, kendisi de çocuk denecek yaşta bir jandarma eri. Elinde Deniz'in askerî kimliği var; tutmayı bırakırsa bir şey kaybolacakmış gibi sıkıyor.",
"Bilinç bulanık. Satürasyon yetmiş dokuz. Songül Abla hemen ambu balonunu takıyor ve sıkmaya başlıyor; bir, iki, üç.",
P(function(d){ return d.erken === "ismail"; }, "Cihaz İsmail Bey'de. Göğsü makinenin ritmiyle kalkıp iniyor ve değerleri düzeldi. Deniz'e cihaz vermek, İsmail Bey'den onu almak demek. Bir şeyi vermek ile bir şeyi almak arasında bütün dünyanın ağırlığı var."),
P(function(d){ return d.erken !== "ismail"; }, "Dört numaradaki monitör de aynı rakamı gösteriyor: yetmiş dokuz. Biri yükseliyor mu düşüyor mu, bilmiyorsun. İki monitör, aynı sayı; iki ayrı ölüm, aynı hızla yaklaşıyor."),
"Kaan iki yatağın arasında duruyor ve kıpırdamıyor. Songül Abla balonu sıkarken başını kaldırmadan söylüyor:",
"“Leyla. Karar.”"
], secenekler: [
{ t: function(d){ return d.erken === "ismail" ? "Cihazı İsmail Bey'den çıkarıp Deniz'e bağlarsın." : "Cihaz Deniz'e. Gencin şansı daha yüksek."; }, to: "d1", etki: function(d){ d.cihaz = "deniz"; d.secen = "sen"; if(d.erken === "ismail") d.cikardin = true; d.kural++; } },
{ t: function(d){ return d.erken === "ismail" ? "Cihaz İsmail Bey'de kalır. Deniz'i elle solutursunuz." : "Cihaz İsmail Bey'e. O önce buradaydı."; }, to: "i1", etki: function(d){ d.cihaz = "ismail"; d.secen = "sen"; } },
{ t: "Kaan'a bakar ve susarsın. Karar onun.", to: "k1", etki: { devretti: true } },
{ t: function(d){ return d.erken === "ismail" ? "İsmail Bey'i de cihazdan alırsın. İkisini de elle solutacaksınız, sabaha kadar, nöbetleşe. Kimse seçilmeyecek." : "Cihaza kimseyi bağlamazsın. İkisini de elle solutacaksınız, sabaha kadar, nöbetleşe. Kimse seçilmeyecek."; }, to: "e1", etki: function(d){ d.cihaz = "elle"; d.merhamet++; if(d.erken === "ismail") d.cikardin = true; } }
]},

k1: { saat: "23.40", baslik: "Kaan", metin: [
"Kaan'a bakıyorsun ve hiçbir şey söylemiyorsun. Sessizlik bir yere düşüyor ve orada kalıyor.",
"Kaan'ın alnında ter var. Önce sana, sonra Songül Abla'ya, sonra iki monitöre bakıyor. Ağzını açıyor, kapatıyor. Tıp fakültesinde altı yıl, uzmanlıkta iki yıl; hiçbiri ona bu odayı öğretmedi. Kitaplarda bu sayfa yok. Belki bu yüzden kitaplar bu kadar kalın: olmayan sayfayı saklamak için.",
"“Deniz'e,” diyor sonunda. Sesi çatlıyor. “Deniz'e bağlayın.”",
"Sonra lavaboya gidiyor ve ellerini yıkıyor. Uzun süre. Su akmaya devam ediyor.",
"Sen sustun ve o konuştu. Ama susmanın da bir karar olduğunu, kararı bir başkasının ağzına koyduğunu biliyorsun. Bu gece yazılacak hiçbir tutanakta senin adın bu satırda geçmeyecek. Bu bir kurtuluş mu, yoksa sonradan bulacağın bir yara mı, henüz bilmiyorsun."
], secenekler: [
{ t: "Kaan'ın yanına gidip “Doğru karar,” dersin; bilmediğin hâlde.", to: "d1", etki: function(d){ d.cihaz = "deniz"; d.secen = "kaan"; d.merhamet++; d.kaan_teselli = true; } },
{ t: "“Emin misin?” diye sorarsın.", to: "i1", etki: function(d){ d.cihaz = "ismail"; d.secen = "kaan"; d.kaan_dondu = true; } },
{ t: "Hiçbir şey demeden Deniz'i cihaza bağlarsın.", to: "d1", etki: function(d){ d.cihaz = "deniz"; d.secen = "kaan"; if(d.erken === "ismail") d.cikardin = true; } },
{ t: "Kararı geri alırsın: “Hayır. İkisini de elle solutacağız.”", to: "e1", etki: function(d){ d.cihaz = "elle"; d.secen = "sen"; d.merhamet++; if(d.erken === "ismail") d.cikardin = true; } }
]},

/* ---------- DENİZ KOLU ---------- */
d1: { saat: "00.20", baslik: "Neden O?", metin: [
P(function(d){ return d.cikardin && !d.gulay; }, "Cihazı İsmail Bey'den çıkarmak, bağlamaktan daha uzun sürdü. Tüpü çekerken öksürdü, gözlerini açtı ve sana baktı. Hiçbir şey söylemedi. Yerine maskeyi taktın; maske, bir saat önce taktığın maskeyle aynıydı ama artık bir ceza gibi görünüyordu."),
P(function(d){ return d.secen === "kaan"; }, "Karar Kaan'ın ağzından çıktı ama Deniz'i cihaza bağlayan senin ellerindi. Ağız ile eller arasındaki mesafeyi ölçmeye çalışıyorsun. Bir türlü ölçemiyorsun."),
P(function(d){ return d.secen === "sen" && !d.cikardin; }, "Deniz'i cihaza bağladın. Makine ilk nefesi verdiğinde göğsü kalktı ve monitördeki sayı yetmiş dokuzdan seksen dörde çıktı. İnsanı yaşatan şeyin bu kadar mekanik olması, hâlâ, on iki yıl sonra bile seni şaşırtıyor."),
"İsmail Bey maskede. Değerleri yavaşça ama durmadan düşüyor. Artık bunun bir yönü var ve yön aşağı.",
"Saniye Hanım yanına geliyor. Ağlamıyor. Belki ağlamayı kırk yıl önce bir yerde bırakmış. Yalnızca soruyor:",
"“Neden o?”",
P(function(d){ return d.saniye_bilir; }, "Biliyordu; sen söylemiştin. Bilmenin hazır olmak demek olmadığını şimdi ikiniz de öğreniyorsunuz."),
"Soru basit. Cevabı da basit olabilir. Ama hangi cevabı verirsen, o cevapla bir kadının geri kalan hayatını döşeyeceksin. Her gece yattığında tavana bakarken hatırlayacağı cümle bu olacak."
], secenekler: [
{ t: "Gerçeği söylersin: “Tek cihaz vardı. Genç olanın yaşama şansı daha yüksekti.”", to: "d2", etki: { gercek: 1, cevap: "gercek" } },
{ t: function(d){ return d.secen === "kaan" ? "“Doktor karar verdi,” dersin. Doğru, ama bütün doğru değil." : "“Doktor karar verdi,” dersin. Kaan'ın adını bir kalkan gibi kullanarak."; }, to: "d2", etki: { kural: 1, cevap: "kalkan" } },
{ t: "İsmail Bey'in sana söylediklerini anlatırsın: makineye bağlanmak istemediğini.", to: "d2", etki: { gercek: 1, cevap: "istek" } },
{ t: "Hiçbir açıklama yapmazsın. Elini tutar, onunla birlikte İsmail Bey'in yanına oturursun.", to: "d2", etki: { merhamet: 1, cevap: "sessiz" } }
]},

d2: { saat: "00.55", baslik: "Son Söz", metin: [
P(S("d1A"), "Saniye Hanım cevabını dinledi ve başını salladı. “Haklısınız,” dedi. Bu, “haksızsınız” demekten daha ağırdı."),
P(S("d1B"), "“Doktor,” diye tekrarladı Saniye Hanım ve Kaan'a baktı. Kaan bakışı karşıladı, sonra yere indirdi. Bir kalkanın arkasında durmanın bir bedeli var: kalkan kendi yüzünü göremez."),
P(S("d1C"), "Saniye Hanım bir süre sana baktı. “Söyledi mi?” dedi. “Sana mı söyledi?” Sesinde kıskançlığa benzer bir şey vardı. Kırk yıl onunla yaşamış, son sözünü bir yabancı duymuştu. Sonra yüzü yumuşadı: “İyi. Biri duymuş.”"),
P(S("d1D"), "Hiçbir şey söylemedin. Saniye Hanım'ın eli elinin içindeydi. Bir süre sonra eli gevşedi; bir cevaba ihtiyacı olmadığını anlamış gibi, ya da cevabın bu olduğunu."),
P(S("i2C"), "Gülay Hanım'ın gözleri önünde, Saniye Hanım'ın gözleri önünde, cihazı İsmail Bey'den çıkardın ve Deniz'e bağladın. İki kadın aynı odada durdu; biri kazandı, biri kaybetti ve ikisi de bunun bir oyun olmadığını biliyordu. Hiçbiri öbürüne bakmadı."),
P(S("e2A"), "Balonu bıraktığında oda bir an çok sessiz oldu. Sonra Saniye Hanım eşinin yanına uzandı, yatağın kenarına, pek sığmadan. Kaan Deniz'i cihaza bağladı. Sen ikisinin arasında durdun; bir yanda başlayan bir nefes, öbür yanda biten bir nefes."),
P(S("e2B"), "Deniz cihazda. İsmail Bey'i elle solutmaya devam ediyorsunuz ama bileklerin artık yanıyor ve her sıkışta biraz daha az hava veriyorsun. Bunun bir ölüm olduğunu biliyorsun; yavaşlatılmış, nöbetleşe, iyi niyetle yapılan bir ölüm."),
"Saat bire doğru İsmail Bey gözlerini açıyor. Bir süre için zihni berrak; sona yaklaşan bedenler bazen böyle bir pencere açar ve sen o pencereyi tanıyorsun.",
"“Kar mı yağıyor?” diyor. “Babam kar yağınca ölmek istemezdi. Yollar kapanır, cenaze zor kalkar derdi.” Gülümsemeye çalışıyor. Sonra gözleri karşı yatağa, makineye bağlı çocuğa kayıyor.",
"“O oğlan,” diyor. “Yaşayacak mı?”"
], secenekler: [
{ t: "“Yaşayacak,” dersin. Bilmediğin bir şeyi, onun huzuru için.", to: "d2b", etki: { merhamet: 1, teselli: true, ismail_oldu: true } },
{ t: "“Bilmiyorum,” dersin. Ona son bir yalan değil, doğruyu borçlusun.", to: "d2b", etki: { gercek: 1, ismail_oldu: true } },
{ t: "Kaan'dan morfin dozunu artırmasını istersin. Acısı dinsin; nefesinin de yavaşlayacağını bilerek.", to: "d2b", etki: { merhamet: 1, morfin: true, ismail_oldu: true } },
{ t: "Saniye Hanım'ı yanına bırakıp Deniz'in başına dönersin. Yaşayana bakmak senin işin.", to: "d2b", etki: { kural: 1, yalniz: true, ismail_oldu: true } }
]},

d2b: { saat: "01.20", baslik: "Cep", metin: [
P(S("d2A"), "“Yaşayacak,” dedin. İsmail Bey gözlerini kapadı. “İyi,” dedi. “İyi.” Saat 01.12'de öldü. Son nefesi bir yalanın üstüne kuruldu ve o yalan bir armağandı. Bir armağanın yalan olması onu daha az armağan yapar mı?"),
P(S("d2B"), "“Bilmiyorum,” dedin. İsmail Bey bir süre baktı, sonra başını hafifçe salladı. “Ben de bilmiyorum,” dedi. “Hiçbirimiz bilmiyoruz.” Sanki bu ikinizi aynı tarafa koymuştu. Saat 01.12'de öldü, doğrunun yanında, tek başına değil."),
P(S("d2C"), "Kaan dozu artırdı. İsmail Bey'in yüzündeki gerginlik çözüldü; alnı düzleşti, elleri açıldı. Nefesi yavaşladı, sonra daha da yavaşladı. Saat 01.12'de öldü. Acıyı dindirdin, ölüme yol açtın; ikisi aynı şırıngadaydı ve hangisini istediğini tam bilmiyorsun."),
P(S("d2D"), "Deniz'in başına döndün. Değerlerine baktın, tüpünü kontrol ettin, göz kapaklarını açıp pupillere ışık tuttun. Arkandan Saniye Hanım'ın sesi geliyordu; eşine bir şarkı mırıldanıyordu, sözleri belli değildi. Saat 01.12'de şarkı durdu. Dönmeden anladın."),
"Bir ölümden sonra yapılacak işler vardır ve sen onları biliyorsun: monitörü kapatmak, saati not etmek, gözleri kapamak, çarşafı çekmek. Ellerin bunları yaparken sen biraz uzakta, kendini izliyorsun.",
"Sonra jandarma eri yanına geliyor. Adı Mert, Deniz'le aynı birlikte. Elinde bir naylon poşet var: Deniz'in cebinden çıkanlar. Bir cüzdan, bir telefon, katlanmış bir kâğıt.",
"“Abla,” diyor, “bunları kime vereyim?”",
"Telefon titriyor. Ekranda “Annem” yazıyor, otuz dördüncü cevapsız arama. Kâğıdın üstünde bir el yazısı: “Babama verilecek. İzin bitince.”"
], secenekler: [
{ t: "Kâğıdı okumadan katlayıp eşyaların arasına koyarsın. O kâğıt sana yazılmadı.", to: "d3", etki: { kural: 1 } },
{ t: "Kâğıdı açıp okursun. Kimi yaşattığını bilmek istiyorsun.", to: "d3", etki: { mektup: true } },
{ t: function(d){ return d.gulay ? "Kâğıdı ve telefonu Gülay Hanım'a verirsin." : "Telefonu açarsın. Annesine oğlunun yaşadığını söylersin."; }, to: "d3", etki: { merhamet: 1, anneye_soyledi: true } },
{ t: "Poşeti Mert'e geri verirsin: “Sen sakla.” Bunlar senin taşıyacağın şeyler değil.", to: "d3" }
]},

d3: { saat: "01.50", baslik: "Üçüncü", metin: [
P(S("d2bA"), "Kâğıt poşetin içinde, okunmamış. Bir sırrı korudun mu, yoksa bilmekten mi kaçtın? Bu gece her erdemin bir kaçış yüzü var."),
P(S("d2bB"), "Kâğıdı açtın. “Baba, ben tarlayı istemiyorum. Okumak istiyorum. Bunu sana yüzüne söyleyemedim, o yüzden yazdım. Kızma.” Altında bir imza ve bir tarih. Kimi yaşattığını öğrendin: babasıyla konuşmaya cesaret edemeyen bir çocuk. Bu bir şeyi değiştirdi mi? Değiştirmemeliydi. Ama değiştirdi."),
P(function(d){ return d.son === "d2bC" && !d.gulay; }, "Telefonu açtın. Karşıda bir kadın sesi, önce bir çığlık, sonra sessizlik, sonra “Yaşıyor mu?” “Yaşıyor,” dedin. Bu kelimeyi söylerken, bir saat önce aynı kelimeyi bir başkasının hesabından düştüğünü düşündün."),
P(function(d){ return d.son === "d2bC" && d.gulay; }, "Gülay Hanım kâğıdı okudu, katladı, tekrar açtı, tekrar okudu. “Babası okusun bunu,” dedi. “Ben okumamalıydım.” Ama göğsüne bastırdı ve bırakmadı."),
P(S("d2bD"), "Mert poşeti iki eliyle aldı, yere bakarak başını salladı. Yirmi yaşında bir çocuk, ölümle yaşam arasındaki bir poşeti taşıyor. Bunu ona sen verdin."),
"Saat ikiye on var. Kapı yine açılıyor, yine kar. Bu kez bir traktör römorkunda, battaniyelere sarılı bir adam: Ferhat, otuz dört yaşında. Evinde soba zehirlenmesi. Karısı komşuda olduğu için kurtulmuş, üç çocuğu anneannede. Kardeşi onu römorka yükleyip on iki kilometre getirmiş.",
"Ferhat'ın bilinci kapalı, nefesi yüzeysel. Kanındaki zehir saatlerce makine desteği istiyor. Ama genç ve sağlam; doğru desteği alırsa, sabaha ayağa kalkacak türden.",
"Aynı anda Kaan, Deniz'in başında, sesini alçaltarak: “Leyla Abla. Sol pupil genişledi. Işığa cevap yok.” Durakladı. “Kafa içi kanama ilerliyor olabilir. Burada ameliyat edemeyiz.”",
"Tek cihaz. Bir yanda kurtarılabilecek bir adam. Öbür yanda, saatler önce seçtiğin ve belki de artık kurtarılamayacak bir çocuk."
], secenekler: [
{ t: "Cihazı Deniz'den alıp Ferhat'a verirsin. Kurtarılabilecek olanı seçersin.", to: "t1", etki: function(d){ d.kural++; d.deniz_oldu = true; d.ikinci_secim = "ferhat"; } },
{ t: "Deniz'de bırakırsın. Bir kez verilmiş bir nefesi geri almak kimsenin hakkı değil.", to: "t1", etki: function(d){ d.ferhat_oldu = true; d.deniz_koma = true; d.ikinci_secim = "deniz"; } },
{ t: "Ferhat'ı elle solutursunuz: sen, Songül Abla, Mert, Ferhat'ın kardeşi. Sabaha kadar. Kimse bırakılmayacak.", to: "t1", etki: function(d){ d.merhamet++; d.deniz_oldu = true; d.gozden_kacti = true; d.ikinci_secim = "herkes"; } },
{ t: "Tahsin Hoca'ya bir kez daha ulaşmaya çalışırsın. Bu kez kararı yazılı, onun adıyla istersin.", to: "t1", etki: function(d){ d.kural++; d.ferhat_oldu = true; d.deniz_koma = true; d.yazili_emir = true; d.ikinci_secim = "tahsin"; } }
]},

/* ---------- İSMAİL KOLU ---------- */
i1: { saat: "00.10", baslik: "Balon", metin: [
P(S("s5B"), "Seçtin. Cihaz İsmail Bey'e. Deniz'in göğsüne ambu balonuyla hava veriyorsunuz; dakikada on iki kez, saymadan, çünkü sayı artık ellerinizin içinde."),
P(S("k1B"), "“Emin misin?” diye sordun. Kaan'ın yüzü değişti. “Hayır,” dedi. “Değilim. İsmail Bey önce geldi. İsmail Bey'de kalsın.” Bir soru sordun ve bir karar tersine döndü. Sorunun da bir el olduğunu, bir şeyi itebileceğini bilmiyordun."),
P(function(d){ return d.istek && d.erken !== "ismail"; }, "İsmail Bey'i bağlarken onun sesi kulağındaydı: “Beni bağlamayın.” Tüp boğazından aşağı inerken bir an gözlerini açtı. Ne gördüğünü bilmiyorsun."),
P(function(d){ return d.istek && d.erken === "ismail"; }, "İsmail Bey zaten makinedeydi. “Beni bağlamayın,” demişti. Onu bağlayan ilk karar senin değildi belki; ama bağlı kalmasını sağlayan bu karar senin."),
"Songül Abla ile nöbetleşe Deniz'in balonunu sıkıyorsunuz. Jandarma eri Mert serum şişesini havada tutuyor; askıyı göstermene rağmen bırakmıyor. Bir şeyi tutmak istiyor.",
"Deniz'in cebindeki telefon titriyor. Durmadan. Ekranda tek bir kelime: “Annem.” Yirmi dakikada on yedi arama.",
"Her titreşimde Mert sana bakıyor. Sen balonu sıkıyorsun. Bir, iki, üç."
], secenekler: [
{ t: "Telefonu açarsın.", to: "i2", etki: { gercek: 1, telefon: "acti" } },
{ t: "Telefonu kapatırsın. Şu an bir anneye söyleyebileceğin hiçbir şey yok.", to: "i2", etki: { telefon: "kapatti" } },
{ t: "Mert'e açtırırsın; o konuşsun. Senin ellerin dolu.", to: "i2", etki: { telefon: "mert" } },
{ t: "Telefonu açıp Deniz'in kulağına tutarsın. Annesinin sesini duysun.", to: "i2", etki: { merhamet: 1, telefon: "kulak" } }
]},

i2: { saat: "00.50", baslik: "Anne", metin: [
P(S("i1A"), "“Ben hemşiresiyim,” dedin. Karşıda önce nefes, sonra bir kadın: “Yaşıyor mu?” “Yaşıyor.” “Geliyorum.” “Yollar—” Hat çoktan kapanmıştı."),
P(S("i1B"), "Telefonu kapattın. Titreşim durdu ve oda bir an daha sessiz oldu. O sessizlikte, yirmi kilometre ötede bir kadının aynı numarayı bir kez daha aradığını ve bu kez çalmadığını hayal ettin."),
P(S("i1C"), "Mert telefonu açtı. “Teyze,” dedi, sesi kırıldı, “Deniz iyi. Yani... yaşıyor. Hastanedeyiz.” Sonra ağladı; bir asker, bir annenin karşısında, telefonla. Sen balonu sıkmaya devam ettin."),
P(S("i1D"), "Telefonu Deniz'in kulağına tuttun. Hoparlörden bir kadın sesi, aynı şeyi tekrar tekrar söylüyor: “Oğlum, oğlum, buradayım.” Monitördeki nabız bir an hızlandı. Belki tesadüf. Belki değil."),
"Saat biri on geçe Gülay Hanım geliyor. Komşusunun traktörüyle, yirmi kilometre karın içinden. Yüzü kızarmış, eşarbı buz tutmuş. Kapıda duruyor ve odayı görüyor: makineye bağlı yaşlı bir adam, elle nefes verilen oğlu.",
"Bir annenin, bir terazinin hangi kefesinde durduğunu anlaması için bir saniye yeter.",
"“Neden oğluma değil?”"
], secenekler: [
{ t: "Gerçeği söylersin: “Cihaz birdi. İsmail Bey önce buradaydı.”", to: "i2b", etki: { gercek: 1, gulay: true } },
{ t: "“Doktor karar verdi,” dersin.", to: "i2b", etki: { kural: 1, gulay: true, kalkan: true } },
{ t: "“Haklısınız,” dersin ve cihazı İsmail Bey'den çıkarıp Deniz'e bağlarsın.", to: "d2", etki: function(d){ d.gulay = true; d.cihaz = "deniz"; d.cikardin = true; d.donus = true; } },
{ t: "Balonu ona uzatırsın: “Gelin. Siz tutun. Böyle sıkacaksınız.”", to: "i2b", etki: { merhamet: 1, gulay: true, anne_tuttu: true } }
]},

i2b: { saat: "01.20", baslik: "Avuç", metin: [
P(S("i2A"), "Gülay Hanım cevabını dinledi ve bir şey söylemedi. Oğlunun yatağının dibine oturdu, yere. Önce gelmek. Hayatta kim önce gelir, kim sonra; bunu kim belirler? Bu soruyu sormadı ama yüzü sordu."),
P(S("i2B"), "“Doktor,” dedi Gülay Hanım ve Kaan'ı buldu gözleriyle. Kaan bir an ona baktı, sonra sana. Kalkanın bir yüzü vardı ve o yüz yirmi yedi yaşındaydı."),
P(S("i2D"), "Gülay Hanım balonu aldı. Elleri titriyordu, sonra titremedi. Bir, iki, üç. Saymayı öğretmedin; kendi saydı. Bir anne oğluna nefes veriyor ve bu odada hiçbir makine bundan daha güçlü görünmüyor."),
P(S("e2C"), "İsmail Bey'i cihaza bağladın. Deniz'in balonu şimdi tamamen Songül Abla ile Mert'te. Saniye Hanım eşinin yanında, bir an önce balonu tuttuğu ellerine bakıyor; sanki elleri ona yabancı."),
"Saat bir buçuğa doğru İsmail Bey'in gözleri açılıyor. Sedasyon hafiflemiş. Konuşamıyor; boğazında tüp var. Ama bakıyor. Sana bakıyor.",
"Elini kaldırıyor. Titrek, yavaş. Senin elini buluyor, avucunu açıyor ve işaret parmağıyla avucuna harf yazmaya başlıyor.",
"B. I. R. A.",
"Sonra parmağı duruyor. Gözleri kapanıyor. Bir şey daha yazacaktı. Belki “bırakın.” Belki “bırakma.” Arada bir harf var ve o harfle bütün bir hayat değişiyor.",
"Avucun yanıyor. Hiçbir şey yazılmamış gibi görünüyor; ama sen ne yazıldığını biliyorsun, yazılmayanı da."
], secenekler: [
{ t: "Sedasyonu artırırsınız; uyusun, acı çekmesin. Bir daha bakmasın.", to: "i3", etki: { merhamet: 1, uyuttu: true } },
{ t: "Saniye Hanım'ı çağırır, harfleri anlatırsın. Ne demek istediğine o karar versin.", to: "i3", etki: { gercek: 1, saniyeye_sordu: true } },
{ t: "Harfleri “bırakın” diye okursun. Kaan'a gidip söylersin.", to: "i3", etki: { gercek: 1, harf: "birakin" } },
{ t: "Harfleri “bırakma” diye okursun. Elini tutar, yanında kalırsın.", to: "i3", etki: { merhamet: 1, harf: "birakma" } }
]},

i3: { saat: "01.50", baslik: "Ferhat", metin: [
P(S("i2bA"), "Kaan dozu artırdı. İsmail Bey'in yüzü gevşedi, avucuna yazdığı harfler de onunla birlikte uyudu. Bir soruyu susturdun; cevaplamadın."),
P(S("i2bB"), "Saniye Hanım harfleri dinledi. Uzun süre eşinin yüzüne baktı. “Bırakın,” dedi sonra. “Bırakın demek istedi. Ben onu tanırım.” Sesi kararlıydı ama elleri onu ele veriyordu."),
P(S("i2bC"), "Kaan dinledi. “Avuca yazılmış dört harf,” dedi. “Bunu dosyaya nasıl yazacağım?” Haklıydı. Yine de gözlerinde bir şey değişti."),
P(S("i2bD"), "Elini tuttun. İsmail Bey'in parmakları bir an karşılık verdi, sonra gevşedi. “Bırakma,” diye okudun ve sanki öyle yazdığı için değil, sen öyle okuduğun için doğru oldu."),
P(function(d){ return !d.gulay; }, "Saat ikiye doğru Deniz'in annesi Gülay Hanım komşusunun traktörüyle geliyor. Kapıda durup odayı görüyor: makinedeki yaşlı adamı, elle soluk verilen oğlunu. Hiçbir şey sormuyor. Bir annenin terazinin hangi kefesinde durduğunu anlaması için bir saniye yeter. Mert'in elinden balonu alıyor."),
"Saat ikiye on var. Kapı yine açılıyor, yine kar. Bir traktör römorkunda, battaniyelere sarılı bir adam: Ferhat, otuz dört yaşında. Evinde soba zehirlenmesi. Üç çocuğu anneannede. Kardeşi onu on iki kilometre getirmiş.",
"Ferhat'ın kanındaki zehir saatlerce makine desteği istiyor. Ama genç ve sağlam. Doğru desteği alırsa sabaha ayağa kalkacak türden.",
"Şimdi odada üç insan, bir makine ve yorgun eller var. Makinedeki adam ona bağlanmak istemediğini söylemişti. Elle soluk verilen çocuğun annesi oğlunun yanında. Ve yeni gelen adamın evde bekleyen üç çocuğu var.",
"Songül Abla balonu Ferhat'ın kardeşine tutturuyor, nasıl sıkılacağını gösteriyor ve sana dönüyor. Bu gece ikinci kez aynı soruyu, bu kez sesini çıkarmadan soruyor."
], secenekler: [
{ t: "Cihazı İsmail Bey'den alıp Ferhat'a verirsin. Otuz dört yaş, üç çocuk ve avucuna yazılmış o yarım kelime.", to: "t1", etki: function(d){ d.kural++; d.ismail_oldu = true; if(!d.anne_tuttu) d.deniz_oldu = true; d.ikinci_secim = "ferhat"; } },
{ t: "Hiçbir şeyi değiştirmezsin. Kimseden bir nefes geri almayacaksın.", to: "t1", etki: function(d){ d.ismail_makinede = true; d.ferhat_oldu = true; if(!d.anne_tuttu) d.deniz_oldu = true; d.ikinci_secim = "kimse"; } },
{ t: "Odadaki herkesi çağırırsın: Saniye Hanım, Gülay Hanım, Mert, Ferhat'ın kardeşi. Balonlar elden ele geçecek, sabaha kadar.", to: "t1", etki: function(d){ d.merhamet++; d.ismail_makinede = true; d.ikinci_secim = "herkes"; } },
{ t: "Tahsin Hoca'ya bir kez daha ulaşmaya çalışır, kararı yazılı ve onun adıyla istersin.", to: "t1", etki: function(d){ d.kural++; d.ismail_oldu = true; d.deniz_koma = true; d.ferhat_oldu = true; d.yazili_emir = true; d.ikinci_secim = "tahsin"; } }
]},

/* ---------- ELLE KOLU ---------- */
e1: { saat: "00.00", baslik: "Eller", metin: [
P(function(d){ return d.cikardin; }, "İsmail Bey'i cihazdan aldın. Kaan bir şey diyecekti, demedi. Makine boşaldı ve kendi kendine bir alarm çaldı, sanki terk edildiğini anlamış gibi. Susturdun."),
P(function(d){ return d.secen === "sen" && d.devretti; }, "Kaan “Deniz'e” demişti. Sen kararı elinden aldın. Bir an rahatladı, sonra sana kızdı, sonra yine rahatladı. Sonunda hiçbir şey demedi; balonu eline aldı."),
"İki yatak, iki balon. Makine boş duruyor, ekranında yeşil bir ışık. Kimse ona bakmıyor; herkes ona bakıyor.",
"Sen, Songül Abla, Kaan ve jandarma eri Mert. Dört kişi, iki insan için. Dakikada on iki kez, her sıkışta göğsün kalkmasını izleyerek. Yirmi dakikada bir el değiştiriyorsunuz. Mert'e nasıl sıkılacağını gösteriyorsun; çok hızlı sıkıyor, korkuyor, yavaşlatıyorsun.",
"Songül Abla balonu sıkarken yüzüne bakmadan söylüyor: “Bu delilik, Leyla. Sabaha kadar dayanamayız.”",
"Belki haklı. Ama bir seçim yapmamanın da bir seçim olduğunu biliyorsun ve sen bunu, iki insandan birini seçmeye tercih ettin. Herkese eşit davranmak mı bu, yoksa kimseye karşı sorumluluk almamak mı? İkisi aynı yüzü taşıyor; biri öbürünün maskesi.",
"Bileklerin şimdiden ısınmaya başladı."
], secenekler: [
{ t: "Saniye Hanım'ı da çağırırsın. Eşinin balonunu o tutsun.", to: "e2", etki: { merhamet: 1, saniye_tuttu: true } },
{ t: "Kaan'dan bir saat sonra yeniden değerlendirme sözü alırsın. Bu sonsuza kadar sürmez.", to: "e2", etki: { kural: 1 } },
{ t: "Kimseye bir şey söylemezsin. Sayarsın. Bir, iki, üç.", to: "e2" },
{ t: "Songül Abla'ya dönersin: “Haklısın. Bu delilik. Ama hangisini seçeceğimi bilmiyorum.”", to: "e2", etki: { gercek: 1 } }
]},

e2: { saat: "01.00", baslik: "Saat Bir", metin: [
P(S("e1A"), "Saniye Hanım balonu aldı. İlk sıkışta ağladı, ikincide durdu, üçüncüde ritmi buldu. Kırk yıl önce bir düğün salonunda dans etmeyi de böyle öğrendiğini söyledi, gülmeden."),
P(S("e1B"), "Kaan söz verdi: bir saat. Bir saat, hiçbir şeyi değiştirmeyen ama her şeyi katlanılır kılan bir sınır. İnsanlar duvar ister, duvar arkasında ne olduğu fark etmez."),
P(S("e1C"), "Saydın. Bin iki yüz kırk dört. Sayı bir dua gibi değil, bir kalkan gibi. Sayarken düşünemiyorsun ve tam da bunun için sayıyorsun."),
P(S("e1D"), "Songül Abla sana baktı, gözlerinde öfke değil, bir tür tanıma vardı. “Bilmiyorsan,” dedi, “bilmediğini söyleyen ilk kişisin. Diğerleri bilir gibi yapar.”"),
"Saat bir. Bir saattir elle nefes veriyorsunuz. Songül Abla'nın sağ eli kramp girmiş, sol eliyle devam ediyor. Mert'in parmakları morarmış.",
"Deniz'in değerleri düşüyor; elle verilen hava göğsündeki yarayı aşmaya yetmiyor. İsmail Bey'inkiler de düşüyor, daha yavaş.",
"Sonra İsmail Bey gözlerini açıyor. Balonu tutan ellere bakıyor ve başını iki yana sallıyor. Yavaşça. Bir kez, bir kez daha. Anlamı açık. Ya da sana öyle geliyor.",
P(function(d){ return d.saniye_tuttu; }, "Balonu tutan Saniye Hanım. Eşi ona hayır diyor. Saniye Hanım'ın elleri duruyor, sonra yine sıkıyor. Kırk yılın içinden bir itaatsizlik."),
"Kaan fısıldıyor: “Leyla Abla. Böyle ikisini de kaybederiz.”"
], secenekler: [
{ t: "İsmail Bey'in isteğine uyarsın: balonu bırakır, Saniye Hanım'la vedalaşmasına izin verirsin. Cihaz Deniz'e.", to: "d2", etki: function(d){ d.cihaz = "deniz"; d.vedalasti = true; d.gercek++; } },
{ t: "Cihazı Deniz'e bağlarsın. İsmail Bey'e elle devam edeceksiniz, ne kadar dayanırsanız.", to: "d2", etki: function(d){ d.cihaz = "deniz"; d.elde = true; } },
{ t: "Cihazı İsmail Bey'e bağlarsın. İlk o geldi, ilk o yoruldu.", to: "i2b", etki: function(d){ d.cihaz = "ismail"; } },
{ t: "Devam edersiniz. Kimse bırakılmayacak.", to: "e3", etki: { merhamet: 1, israr: true } }
]},

e3: { saat: "01.50", baslik: "Boş Makine", metin: [
"Kimse bırakılmadı. Saat ikiye doğru ellerinizin içinde iki insan var ve makine hâlâ boş; inatla, bir anıt gibi.",
"Kapı açılıyor, yine kar. Bir traktör römorkunda, battaniyelere sarılı bir adam: Ferhat, otuz dört yaşında. Soba zehirlenmesi. Üç çocuğu anneannede. Kardeşi onu on iki kilometre getirmiş.",
"Ferhat'ın kanındaki zehir saatlerce makine desteği istiyor. Ama genç ve sağlam. Doğru desteği alırsa sabaha kalkacak türden.",
"Şimdi üç insan ve bir boş makine var. Eşitlik adına boş bıraktığın makine, üçüncü bir insanın kapıdan girmesiyle başka bir anlama büründü: artık kimseye verilmeyen bir şey değil, birinden esirgenen bir şey.",
"Songül Abla, kramp girmiş eliyle balonu sıkarken: “Leyla. Bu sefer seçmek zorundasın. Seçmezsen makine seçecek. Ya da ölüm.”",
"Kaan duvara yaslanmış. Gözleri kızarık. “Ben seçebilirim,” diyor alçak sesle. “İstersen ben seçerim.”"
], secenekler: [
{ t: "Makineyi Ferhat'a verirsin. En çok kurtulma şansı olana.", to: "t1", etki: function(d){ d.kural++; d.ismail_oldu = true; d.ikinci_secim = "ferhat"; } },
{ t: "Makineyi Deniz'e verirsin. Önce gelen ve en genç olana.", to: "t1", etki: function(d){ d.ismail_oldu = true; d.ferhat_oldu = true; d.ikinci_secim = "deniz"; } },
{ t: "Makine boş kalır. Hastanedeki herkes, sabaha kadar balon sıkacak: üç insan için.", to: "t1", etki: function(d){ d.merhamet++; d.deniz_oldu = true; d.ismail_yasadi = true; d.bos_kaldi = true; d.ikinci_secim = "herkes"; } },
{ t: "“Sen seç,” dersin Kaan'a.", to: "t1", etki: function(d){ d.ismail_oldu = true; d.devretti2 = true; d.ikinci_secim = "kaan"; } }
]},

/* ---------- SABAH ---------- */
t1: { saat: "05.40", baslik: "Sabah", metin: [
"Kar saat beşe doğru diniyor. Kimse fark etmiyor; sonra biri pencereye bakıyor ve herkes bakıyor. Gökyüzü kurşuni, ışık henüz gelmemiş ama geleceği belli.",
P(function(d){ return d.ismail_oldu && d.vedalasti; }, "İsmail Bey öldü. Saniye Hanım'ın kolunda, gözleri açık, balon bırakıldıktan sonra on dört dakika. Kendi istediği gibi. Ya da onun istediğini sandığın gibi."),
P(function(d){ return d.ismail_oldu && d.morfin; }, "İsmail Bey öldü. Morfin acısını aldı. Yüzü sakin. Bu sakinliğe senin bir payın var ve hangi payın olduğunu sabaha karşı hâlâ tartıyorsun."),
P(function(d){ return d.ismail_oldu && !d.vedalasti && !d.morfin; }, "İsmail Bey öldü. Çarşafı çekildi, monitörü kapandı. Yatağın başındaki dosyada bir saat yazıyor; o saat bir hayatın son satırı."),
P(function(d){ return d.ismail_makinede; }, "İsmail Bey yaşıyor. Makinede. Göğsü bir ritimle kalkıp iniyor; o ritim ona ait değil. Babası gibi. Bir an gözlerini açtı ve sana baktı. O bakışı anlıyor musun? Hayır. Belki o da babasınınkini hiç anlamamıştı."),
P(function(d){ return d.ismail_yasadi; }, "İsmail Bey sabaha çıktı. Makineye hiç bağlanmadı; maskeyle, kendi nefesiyle, ellerinizin yardımıyla. İsteği yerine geldi. Bunun bedelini başka biri ödedi."),
P(function(d){ return d.deniz_oldu && d.gozden_kacti; }, "Deniz öldü. Saat dördü yirmi geçe; herkes Ferhat'ın başındayken tüpü tıkandı ve monitörün alarmı, odadaki öteki seslerin arasında bir dakika boyunca duyulmadı. Bir dakika. Herkesi kurtarmaya çalışırken, kimsenin bakmadığı yerde biri gitti."),
P(function(d){ return d.deniz_oldu && d.ikinci_secim === "ferhat" && d.cihaz === "deniz"; }, "Deniz öldü. Cihazı ondan aldıktan sonra bir saat on dakika dayandı. Pupilleri zaten genişlemişti, diyor Kaan; zaten kurtulamayacaktı. Bu cümleyi bütün sabah birbirinize söylüyorsunuz; söyledikçe inceliyor."),
P(function(d){ return d.deniz_oldu && d.bos_kaldi; }, "Deniz öldü. Elle verilen hava göğsündeki yarayı aşamadı. Boş makine yanındaki yatakta, yeşil ışığıyla, sabaha kadar bekledi."),
P(function(d){ return d.deniz_oldu && !d.gozden_kacti && !(d.ikinci_secim === "ferhat" && d.cihaz === "deniz") && !d.bos_kaldi && d.gulay; }, "Deniz öldü. Saat üçte, elle verilen son nefeslerin arasında. Gülay Hanım yanındaydı; son saatte balonu senin elinden almak istedi ve sen vermedin. Bu, bu gecenin en çok aklında kalacak ayrıntısı olacak."),
P(function(d){ return d.deniz_oldu && !d.gozden_kacti && !(d.ikinci_secim === "ferhat" && d.cihaz === "deniz") && !d.bos_kaldi && !d.gulay; }, "Deniz öldü. Saat üçte, elle verilen son nefeslerin arasında. Annesinin yolda olduğunu biliyordun; yetişemedi. Bu, bu gecenin en çok aklında kalacak ayrıntısı olacak."),
P(function(d){ return d.deniz_koma; }, "Deniz yaşıyor, makinede, derin bir uykuda. Kaan beyin hasarının boyutunu bilmiyor; sabah şehre sevk edilecek. Yaşıyor demek, bu durumda neyi söylemek? Bu soruyu kimse sesli sormuyor."),
P(function(d){ return !d.deniz_oldu && !d.deniz_koma; }, "Deniz yaşıyor. Değerleri sabaha karşı düzeldi. Sevk edilecek, belki ameliyat olacak. Babasına vereceği kâğıt hâlâ cebinde."),
P(function(d){ return d.ferhat_oldu; }, "Ferhat öldü. Kardeşi bütün gece balonu sıktı ve saat dörtte elleri durmadan, ama nefes durdu. Üç çocuk, anneannelerinin evinde, henüz uyuyor."),
P(function(d){ return !d.ferhat_oldu; }, "Ferhat yaşıyor. Gözlerini açtı ve ilk sorduğu şey çocuklarıydı. Kardeşi yatağın kenarında, römorkta donmuş botlarıyla, ağlıyor."),
"Odada yaşayanlar ve ölenler var ve aralarındaki çizgiyi sen çizdin. Ya da çizgiyi kar çizdi, arızalı cihaz çizdi, altmış kilometre ötede uyuyan bir hoca çizdi. Sabahın ilk ışığında bu ikisini birbirinden ayıramıyorsun."
], secenekler: [
{ t: "Ölenlerin yüzünü kendi ellerinle kapatırsın, tek tek.", to: "t1b", etki: { merhamet: 1 } },
{ t: "Gece olanları dakika dakika not etmeye başlarsın, unutmadan.", to: "t1b", etki: { gercek: 1, notlar: true } },
{ t: "Pencerenin önünde durur, karın dinişini izlersin. Hiçbir şey yapmazsın.", to: "t1b" },
{ t: "Kaan'ın yanına gidip “Senin suçun değil,” dersin.", to: "t1b", etki: { merhamet: 1, kaan_korundu: true } }
]},

t1b: { saat: "06.20", baslik: "Çay Ocağı", metin: [
P(S("t1A"), "Yüzleri kapattın. Çarşafın kenarını katlarken, her seferinde aynı hareket. Ellerinin bunu ne zaman öğrendiğini hatırlamıyorsun. Bir şeyi yüzlerce kez yapmak onu kolaylaştırmıyor; yalnızca daha sessiz yapıyor."),
P(S("t1B"), "Bir kâğıda yazdın: saatler, değerler, kim ne dedi. Ellerin titredi ama yazı düzgün. Unutmak istemediğin için mi yazdın, yoksa yazınca aklından çıkacağını umduğun için mi?"),
P(S("t1C"), "Kar dindi. Bir karga, karla kaplı çatıya kondu, sonra uçtu. Dünya devam ediyor; bu ya teselli ya hakaret, hangisi olduğu güne göre değişiyor."),
P(S("t1D"), "Kaan sana baktı. “Kimin suçu o zaman?” dedi. Cevap veremedin. “Kimsenin değilse,” dedi, “neden böyle hissediyorum?”"),
"Songül Abla çay ocağında, iki bardak çay koymuş. Biri senin için. Oturuyorsun. Uzun süre konuşmuyor.",
"Sonra: “Doksan sekizde,” diyor, “bir kış gecesi. Bir çocuk ve bir kadın. Bir makine. Ben seçtim, doktor imzaladı. Kadını seçtim. Çocuğun annesi koridorda bana bir şey söyledi. Ne söylediğini yirmi beş yıldır kimseye anlatmadım.”",
"Çayını karıştırıyor. Kaşık bardağa vurup duruyor.",
"“Bu meslekte iki tür hemşire var, Leyla. Unutanlar ve sayanlar. Unutanlar daha uzun dayanır. Ben sayıyorum. Yirmi beş yılda on bir. Sen bu gece kaç tane saydın?”"
], secenekler: [
{ t: "Ona saydıklarını söylersin, isim isim.", to: "t2", etki: { gercek: 1 } },
{ t: "Ona unutmayı nasıl öğrenebileceğini sorarsın.", to: "t2", etki: { unut: true } },
{ t: "Anlatmadığı o cümleyi sorarsın: “Anne ne dedi?”", to: "t2", etki: { merhamet: 1, cumle: true } },
{ t: "Çayını bitirip kalkarsın. Tutanak bekliyor.", to: "t2", etki: { kural: 1 } }
]},

t2: { saat: "07.30", baslik: "Tutanak", metin: [
P(S("t1bA"), "Saydıklarını söyledin. Songül Abla her isimde başını salladı, sonra elini elinin üstüne koydu. “On iki yılda bu kadar mı?” dedi. “Şanslısın.” Bunun bir şaka olmadığını ikiniz de biliyordunuz."),
P(S("t1bB"), "“Unutmak öğrenilmez,” dedi Songül Abla. “Olur. Bir gün bir yüzü hatırlamadığını fark edersin ve kendinden nefret edersin. Unutmanın bedeli bu.”"),
P(S("t1bC"), "Songül Abla uzun süre sustu. Sonra söyledi: “Anne bana ‘Sizi affediyorum’ dedi. O kadar. Yirmi beş yıldır o cümleyi taşıyorum. Affedilmek, suçlanmaktan ağırmış meğer. Suçlanınca savunursun; affedilince yapacak bir şey kalmıyor.”"),
P(S("t1bD"), "Kalktın. Songül Abla arkandan baktı ve hiçbir şey söylemedi. Bardağın dibinde, karıştırılmamış şeker."),
"Saat yediyi yirmi geçe kar küreme aracının arkasında Tahsin Hoca geliyor. Montu omuzlarında, gözleri uykulu. Önce dosyalara bakıyor, sonra sana.",
"“Olay tutanağı lazım,” diyor. “Bugün müdürlük isteyecek, yarın belki savcılık. Hasta yakınları şikâyet edebilir.” Sesini alçaltıyor. “Şöyle yazalım: cihaz arızası nedeniyle yeterli destek sağlanamadı, hastalar standart tedaviyi aldı, klinik seyir. Kim kime bağlandı, saatler, gerekçeler, bunlara girmeyelim. Seçim yapılmış gibi görünmesin. Arızalı cihaz zaten gerçek, değil mi? Kimse yalan söylemiyor.”",
"Kimse yalan söylemiyor. Yalnızca gerçeğin bir kısmı, diğer kısmının üstüne örtülüyor.",
P(function(d){ return d.yazili_emir; }, "Gece istediğin yazılı talimat telefonunda duruyor: Tahsin Hoca'nın kısa mesajı. Bu mesaj tutanağa girerse, onun adı da girer. Tahsin Hoca bunu senden daha iyi biliyor; mesajdan hiç bahsetmiyor."),
P(function(d){ return d.devretti || d.devretti2; }, "Kaan da odada. Bu gece kararlardan en az birinin onun ağzından çıktığını üçünüz de biliyorsunuz."),
"Tahsin Hoca kalemi sana uzatıyor. “Sen yaz, Leyla Hanım. Sen hepsini gördün.”"
], secenekler: [
{ t: "Her şeyi olduğu gibi yazarsın: kim, hangi saatte, neye dayanarak karar verdi.", to: "t3", etki: { gercek: 2, tutanak: "gercek" } },
{ t: "Tahsin Hoca'nın dediği gibi yazarsın. Kurum korunur, kimse yanmaz.", to: "t3", etki: { kural: 1, ortbas: true, tutanak: "ortbas" } },
{ t: "Bütün kararları kendi adına yazarsın. Kaan'ın adı geçmez.", to: "t3", etki: { merhamet: 1, gercek: 1, ustlendi: true, tutanak: "ustlendi" } },
{ t: "Kalemi geri verirsin: “Tutanağı hekim yazar, hocam. Ben imzalamam.”", to: "t3", etki: { kural: 1, reddetti: true, tutanak: "reddetti" } }
]},

t3: { saat: "08.15", baslik: "Koridor", metin: [
P(S("t2A"), "Yazdın. Saat saat, karar karar. Tahsin Hoca okudu, yüzü değişmedi; kâğıdı katladı ve cebine koydu. “Bunun bir bedeli olacak,” dedi. “Sana da.” Sesinde tehdit yoktu, yorgunluk vardı. Belki biraz da kıskançlık."),
P(S("t2B"), "Yazdın. Cümleler kolay geldi; bu dili yıllardır biliyorsun. Tahsin Hoca okudu, başını salladı. “İyi,” dedi. “Herkes için iyi.” Kâğıtta hiçbir yalan yoktu. Kâğıdın kendisi bir yalandı."),
P(S("t2C"), "Yazdın: bütün kararları senin verdiğini. Kaan okudu, yüzü bembeyaz oldu. “Bunu yapamazsın,” dedi. “Yaptım,” dedin. Ona bir yük taşıttırmadın; onu bir yükten mahrum bıraktın. Bunun bir iyilik mi, bir hırsızlık mı olduğunu yıllar sonra o karar verecek."),
P(S("t2D"), "Kalemi geri verdin. Tahsin Hoca bir süre sana baktı, sonra kendisi yazdı. Ne yazdığını görmedin. İmzalamadığın bir kâğıt, imzaladığın her şeyden daha uzun süre peşinden gelecek."),
"Koridorda sabahın ışığı. Nöbet değişimi, yeni yüzler, çay kokusu. Ve plastik sandalyelerde bekleyenler.",
P(function(d){ return d.ismail_oldu; }, "Saniye Hanım montunu giymiş, termosunu kucağına almış. Seni görünce kalkıyor. Termosu uzatıyor: “Çayı içemedim. Sen iç.” Kırk yıllık bir sabah ritüelinin son bardağı."),
P(function(d){ return d.ismail_makinede; }, "Saniye Hanım eşinin camının önünde duruyor. Makinenin ritmini sayıyor gibi. Sana dönüp soruyor: “Ne kadar böyle kalacak?” Sen bilmiyorsun. Babasının üç ayını düşünüyorsun."),
P(function(d){ return d.ismail_yasadi; }, "Saniye Hanım eşinin yanında, uyuyor; başı yatağın kenarında. Uyandırmıyorsun."),
P(function(d){ return d.deniz_oldu && d.gulay; }, "Gülay Hanım koridorun sonunda, duvara yaslanmış. Seni görünce hiçbir şey yapmıyor. Ne bağırıyor ne ağlıyor. Yalnızca bakıyor. O bakış, bir soruya ne cevap verirsen ver yetmeyecek olan o bakış."),
P(function(d){ return d.deniz_oldu && !d.gulay; }, "Deniz'in annesi Gülay Hanım az önce geldi. Kimse ona henüz söylemedi. Kaan'ın yüzüne bakıyor; Kaan senin yüzüne bakıyor."),
P(function(d){ return !d.deniz_oldu; }, "Gülay Hanım oğlunun sevk evraklarını imzalıyor. Elleri titriyor. Seni görünce kalemi bırakıp sana sarılıyor ve sen kollarını nereye koyacağını bilemiyorsun."),
P(function(d){ return d.ferhat_oldu; }, "Ferhat'ın kardeşi pencere kenarında, römorkta donmuş botlarıyla. Ağabeyinin çocuklarına ne söyleyeceğini prova ediyor gibi; dudakları kıpırdıyor."),
P(function(d){ return !d.ferhat_oldu; }, "Ferhat'ın kardeşi telefonda, çocuklarla konuşuyor: “Babanız iyi. Babanız uyanık.” Sesi her cümlede biraz daha yükseliyor; inanmak için kendini duyması gerekiyor gibi.")
], secenekler: [
{ t: "Bekleyenlerin yanına oturur, dinlersin. Ne söylerlerse.", to: "t4", etki: { merhamet: 1 } },
{ t: "Yüzlerine bakamazsın. Çıkış kapısına yürürsün.", to: "t4", etki: { kacti: true } },
{ t: "Her birine gece ne olduğunu kendi ağzınla anlatırsın. Kimse bunu onlara başka birinden duymamalı.", to: "t4", etki: { gercek: 1 } },
{ t: "Songül Abla'yı bulup ona sarılırsın.", to: "t4", etki: { songul: true } }
]},

t4: { saat: "09.00", baslik: "Dönüş", metin: [
P(S("t3A"), "Oturdun ve dinledin. Söylenenlerin çoğu bir anlama gelmiyordu: bir düğün fotoğrafı, bir bisiklet, bir tarla. İnsanlar yas tutarken, sevdiklerini küçük şeylerle yeniden kurmaya çalışıyor. Sen o küçük şeyleri bir süre tuttun; tutman yetti."),
P(S("t3B"), "Kapıdan çıktın. Arkanda bir ses adını söyledi ya da söylemedi. Dönmedin. Kaçmak bir cevap değil; ama bazen dayanmanın tek biçimi."),
P(S("t3C"), "Anlattın. Bir kez, iki kez, üç kez. Her anlatışta cümleler biraz daha düzgün çıktı ve bu seni korkuttu. Bir acının hikâyesi anlatıldıkça cilalanıyor; ama acının kendisi yerinde, pürüzlü kalıyor."),
P(S("t3D"), "Songül Abla'ya sarıldın. Önce kaskatıydı, sonra gevşedi. Yirmi beş yılda kimsenin ona sarılmadığını düşündün; sonra kendi on iki yılını düşündün."),
"Dışarıda kar dizine kadar. Güneş bulutların arkasında bir leke gibi. Otobüs çalışmıyor, yürüyorsun. Her adımda ayağın batıyor ve çıkarmak için çaba gerekiyor; sanki yer seni bırakmak istemiyor.",
"Hastanenin önündeki köprüde duruyorsun. On dört yıl önce, babanın öldüğü sabah, bu köprüden geçmiştin. Babanın elini tutan o hemşirenin adını hiç sormadın. Şimdi, ilk kez, onun da o sabah eve yürüdüğünü düşünüyorsun. Bu köprüden belki. Kendi saydıklarını sayarak.",
"Belki o hemşire de babanı seçmişti. Belki de seçmemişti, onu başka biri için bırakmıştı ve sonra yanına oturup elini tutmuştu, çünkü yapabileceği tek şey buydu.",
"Bunu hiç öğrenemeyeceksin. Bu gecenin seninle ilgili bildiklerini de kimse öğrenemeyecek. Yalnızca sen."
], secenekler: [
{ t: "Eve gidip uyursun. Yarın akşam yine nöbete geleceksin.", to: "son", etki: { devam: true } },
{ t: "Eve varınca istifa dilekçeni yazarsın.", to: "son", etki: { istifa: true } },
{ t: "Mezarlığa, babanın mezarına gidersin. Kar dizine kadar olsa da.", to: "son", etki: { mezar: true, merhamet: 1 } },
{ t: "Geri dönersin. Hastanede birinin yanında oturman gerekiyor.", to: "son", etki: { geri: true, merhamet: 1 } }
]},

son: { yonlendir: [
{ if: function(d){ return d.ortbas; }, to: "son_sessiz" },
{ if: function(d){ return d.istifa; }, to: "son_onluk" },
{ if: function(d){ return d.ismail_makinede; }, to: "son_nefes" },
{ if: function(d){ return d.gercek >= 5; }, to: "son_kayit" },
{ if: function(d){ return d.merhamet >= 5; }, to: "son_el" },
{ to: "son_sayanlar" }
]},

/* ---------- SONLAR ---------- */
son_sessiz: { son: true, baslik: "Sessiz Anlaşma", metin: [
"Tutanak müdürlükte bir dosyaya girdi, dosya bir dolaba, dolap bir arşive. Kimse şikâyet etmedi; ya da edenler “cihaz arızası” kelimesinin karşısında durdu ve geri çekildi. Arızalı cihazın yedek parçası iki ay sonra geldi.",
"Tahsin Hoca bir yıl sonra başhekim yardımcısı oldu. Kaan uzmanlığını bitirdi ve başka bir şehre gitti; veda ederken sana bakmadı. Songül Abla emekli oldu.",
"Sen çalışmaya devam ettin. Hiçbir şey olmadı. Gerçekten hiçbir şey. Uyuyabildin bile, çoğu gece.",
"Ama o geceden sonra bir şey fark ettin: hastaların yakınlarına bir şey anlatırken cümlelerin biraz daha düzgün, biraz daha yuvarlak çıkıyor. “Klinik seyir.” “Standart tedavi.” Bu cümleler yalan değil. Yalnızca bir şeyin üzerine örtülmüş temiz çarşaflar.",
"Yıllar sonra bir gece, bir başka nöbette, genç bir hemşire sana soruyor: “Abla, hiç seçmek zorunda kaldın mı?” Ağzını açıyorsun ve cümle hazır: “Bizde öyle şeyler olmaz, protokol belli.”",
"Bunu söylediğin anda o gecenin gerçekten bittiğini anlıyorsun. Sen onu bitirdin. Ve artık hiçbir yerde, hiçbir kâğıtta, senin içinde bile, olduğu gibi durmuyor."
]},

son_onluk: { son: true, baslik: "Askıdaki Önlük", metin: [
"Dilekçeyi üç satırda yazdın. “Kişisel nedenlerle.” Kişisel. Bu kelimeyi seçmek bir saat sürdü.",
"Önlüğün kapının arkasındaki askıda kaldı, yıkanmış ve ütülenmiş. Bir ay boyunca her sabah ona baktın. Sonra bir gün dolaba kaldırdın, sonra bir gün bir torbaya koydun, sonra torba da kayboldu.",
"Bir kırtasiyede iş buldun. Kâğıt, kalem, okul defterleri. Kimse senden bir şey seçmeni istemiyor; mavi kapak mı kırmızı kapak mı, o kadar. Bazen bir çocuk iki defter arasında kararsız kalıyor ve sen ona yardım etmiyorsun. Seçsin. Seçmeyi küçükken öğrenmek iyidir, diye düşünüyorsun.",
"İnsanlar gidenlerin kaçtığını söyler. Belki doğru. Ama kalanlar da bir şeyden kaçıyor olabilir: kendi içlerinde olanı duymaktan. Senin kaçtığın şey dışarıdaydı; içeride olan seninle geldi.",
"Kış gelince hâlâ pencereye bakıyorsun. Kar yağmaya başladığında, hiçbir zaman bir yerde nöbette olmasan da, ellerin kendiliğinden saymaya başlıyor. Bir, iki, üç.",
"Bıraktığın şey meslekti. Bırakamadığın şey o geceydi."
]},

son_nefes: { son: true, baslik: "Başkasının Nefesi", metin: [
"İsmail Bey makinede yetmiş üç gün yaşadı.",
"Saniye Hanım her gün geldi. Termosuyla, aynı plastik sandalyede. Bazen eşine gazete okudu, bazen sustu. Bir keresinde sana, “Babası da üç ay kalmıştı,” dedi. “Ben onu hiç anlamazdım. Şimdi anlıyorum. Bakmak, bakılmaktan zormuş.”",
"İsmail Bey birkaç kez gözlerini açtı. Her seferinde sana baktı ve sen her seferinde onun ne söylemek istediğini anlamaya çalıştın. Babasının ona bıraktığı soruyu, şimdi o sana bırakıyordu. Bir zincir gibi: anlaşılamayan bakışlar, kuşaktan kuşağa.",
"Yetmiş üçüncü gün öldü. Kar yoktu; nisandı. Cenaze rahat kalktı. Babası öyle isterdi, diye düşündün; sonra bunu düşündüğün için kendine kızdın.",
"O gece seçtiğin şey bir hayattı, ve hayat seçildiği gibi değil, yaşandığı gibi oldu: bir makinenin ritminde, kendi isteğinin tersinde, ama sevilerek. Bu bir zafer miydi, bir ihanet mi?",
"İsmail Bey'in avucuna yazamadığı son harfi düşünüyorsun bazen. Yıllar sonra hâlâ. Bir harf. Bütün bir ömrü değiştirecek olan."
]},

son_kayit: { son: true, baslik: "Kayıt", metin: [
"O gecenin her dakikası bir kâğıtta. Kendi el yazınla, saatleriyle, isimleriyle. Kimin ne dediği, kimin ne yapmadığı.",
"Bir soruşturma açıldı. Sorular soruldu; neden o, neden o saatte, neden yazılı talimat yok. Bazı sorular sana, bazıları Kaan'a, bazıları Tahsin Hoca'ya. Bazıları hiç sorulmadı çünkü cevabı herkesi yakacaktı.",
"Altı ay sonra bir uyarı cezası aldın. Tahsin Hoca bir başka hastaneye tayin edildi. Arızalı cihazın parçası soruşturmanın ikinci haftasında geldi.",
"Bir gün koridorda Saniye Hanım ya da Gülay Hanım ya da Ferhat'ın kardeşi, hangisi olduğu fark etmez, sana yaklaştı ve “Okudum,” dedi. “Teşekkür ederim.” Neye teşekkür ettiğini sormadın. Belki gerçeğe. Belki de yalnızca birinin o geceyi kendisi kadar ciddiye almasına.",
"Gerçeği söylemek seni temize çıkarmadı. Kimseyi temize çıkarmadı. Gerçek, bir şeyi düzeltmez; yalnızca o şeyin olduğu gibi kalmasına izin verir. Çarpık, ağır, adil olmayan bir biçimde ama bir yerde, herkesin görebileceği bir yerde.",
"Bazen o kâğıdın bir kopyasını çekmecenden çıkarıp okuyorsun. Her okuyuşta bir başka satırda duruyorsun. Kâğıt aynı. Değişen, onu okuyan kadın."
]},

son_el: { son: true, baslik: "Bir El", metin: [
"O geceden sonra bir alışkanlık edindin: ölmekte olan her hastanın elini tutuyorsun. Protokolde yok. Kimse istemiyor. Yapıyorsun.",
"Bazen beş dakika, bazen bir saat. Bazen hasta farkında, çoğu zaman değil. Bir keresinde yaşlı bir adam gözlerini açıp “Sen kimsin?” dedi. “Hemşire,” dedin. “Adın ne?” Söyledin. Bunu da yeni yapıyorsun: adını söylüyorsun.",
"Hiçbir şeyi düzeltmiyor bu. O gece seçtiğin ya da seçmediğin şeyleri geri getirmiyor. Kimseyi kurtarmıyor. Tartıda bir yere düşmüyor.",
"Ama on dört yıl önce, adını hiç sormadığın bir hemşire babanın elini tuttu. Ve o el, bütün bu yıllar boyunca, senin içinde bir yerde, hâlâ tutuluyor. Bir şeyi kurtarmak ile bir şeyi taşımak arasındaki farkı şimdi biliyorsun.",
"Kararların bir hesabı olabilir. Bir el tutmanın hesabı yok. Belki de bu yüzden, bütün o hesapların ortasında, yapabildiğin tek şey buydu.",
"Kar yağdığında hâlâ pencereye bakıyorsun. Ama artık saymıyorsun. Bir el arıyorsun."
]},

son_sayanlar: { son: true, baslik: "Sayanlar", metin: [
"Ertesi akşam yine nöbetteydin. Ve ondan sonraki akşam. Hayat, bu meslekte, bir sonraki vardiyadan ibaret.",
"O geceden kimseye bahsetmedin. Gerek yoktu; bu koridorda herkesin kendi gecesi var. Songül Abla emekli olurken sana bir şey bıraktı: üzerinde on bir isim yazılı, katlanmış bir kâğıt. “Bunları ben sayıyordum,” dedi. “Artık sen say.”",
"Kâğıdın altına kendi isimlerini ekledin. Bir sonraki kışta bir isim daha. Bir sonrakinde iki.",
"Unutmayı seçmedin. Belki seçemedin. Unutanlar daha uzun dayanır, demişti Songül Abla. Sen dayanıyorsun ama başka türlü: her ismin ağırlığını taşıyarak, hiçbirini bırakmadan, hiçbirine de teslim olmadan.",
"Bir gece genç bir hemşire sana soruyor: “Abla, nasıl dayanıyorsun?” Ona kâğıdı gösteriyorsun. Okuyor, anlamıyor. Anlamayacak, şimdilik. Bir gün kendi gecesi gelecek ve o zaman anlayacak.",
"Doğru bir karar vermiş olduğunu hiçbir zaman bilmeyeceksin. Ama kararını vermiş, ve onu taşımış olduğunu biliyorsun. Bu meslek, belki de bu hayat, bundan başka bir şey vermiyor."
]}

},

ayna: function(d){
  var out = [];
  var m = d.merhamet, k = d.kural, g = d.gercek;
  if(m >= k && m >= g) out.push("Bu gece en çok yakınlığa yaslandın. Bir kuralın ya da bir gerçeğin değil, bir elin, bir yüzün yanında durmayı seçtin. Bu seni sıcak tuttu; ama bazen sıcaklığın gördüğü yer, ışığın göstermediği yerdi.");
  else if(k >= g) out.push("Bu gece en çok çizgilere yaslandın: protokol, sıra, yetki. Çizgiler seni ayakta tuttu. Ama bir çizginin içinde durmak, çizgiyi kimin çektiği sorusunu ortadan kaldırmıyor.");
  else out.push("Bu gece en çok gerçeğe yaslandın: söylenmesi zor olanı söyledin, yazılması zor olanı yazdın. Gerçek kimseyi kurtarmadı. Ama hiçbir şeyin üstünü de örtmedi.");
  if(d.devretti || d.devretti2) out.push("Bir noktada kararı başkasına bıraktın. Bu bir kaçış mıydı, yoksa tek başına taşınamayacak bir yükü bölüşmek mi? İkisinin farkını bilen tek kişi sensin.");
  if(d.istek === "sakli") out.push("Bir adamın son isteğini yalnızca sen duydun ve kimseye söylemedin. O sır artık senin.");
  if(d.cikardin) out.push("Birine verilmiş bir nefesi geri aldın. Vermekle almak arasındaki farkı ellerin öğrendi.");
  if(d.bos_kaldi) out.push("Kimseyi seçmemek için bir makineyi boş bıraktın. Eşitlik bazen herkese aynı şeyi vermek değil, herkesten aynı şeyi esirgemek oluyor.");
  if(d.ustlendi) out.push("Bütün yükü kendi adına yazdın. Bir başkasını korudun; belki de onu kendi hikâyesinden mahrum bıraktın.");
  if(d.kacti) out.push("Sabah bekleyenlerin yüzüne bakamadın. Bu bir zayıflık değil; ama bir borç olarak bir yerde duruyor.");
  return out;
},

dipnot: [
{ ad: "Trajik ikilem", t: "Her seçeneğin vazgeçilmemesi gereken bir değeri çiğnediği, temiz bir çıkışın olmadığı durum. Hangi kararı verirsen ver bir şeyi kaybedersin ve kaybettiğin şey haklı olarak kaybedilmemesi gereken bir şeydir. Antik tragedyalardan bu yana düşünülen bu durumda soru “doğru olan ne?” değil, “neyin bedelini ödemeye razıyım?” olur." },
{ ad: "Ödev ve fayda", t: "Bir yanda “en çok hayatı kurtar, sonuçlara bak” diyen faydacı hesap (Bentham, Mill); öbür yanda “insanı hiçbir hesabın aracı yapma, ilkeye ve söze bağlı kal” diyen ödev ahlakı (Kant). Cihazı kime verdiğin, hangisine yaslandığını gösterdi; ama bu gecede ikisi de seni yalnız bıraktı." },
{ ad: "Ahlaki yara", t: "Kişinin derin değerlerine aykırı bir şeyi yapması, buna engel olamaması ya da tanık olması sonrasında kalan iz. Sağlık çalışanlarında ve askerlerde incelenmiştir. Suçluluktan farklıdır, çünkü çoğu zaman yapılabilecek “doğru” bir şey yoktur; yara, doğru olanın imkânsız olduğu yerde açılır." },
{ ad: "Ölümle yüzleşme", t: "İyi bir ölüm nedir: uzatılan bir yaşam mı, insanın kendi isteğiyle gelen son mu? İsmail Bey'in birbirini yiyen iki isteği, insanın ölüm karşısındaki ikiliğini taşıyordu. Bu soruyu en çok hasta yatağının başında duranlar, cevabı hiç bilmeden taşır." }
]
});
})();
