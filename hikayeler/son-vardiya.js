(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "son-vardiya",
baslik: "Son Vardiya",
dunya: "Gerçek dünya",
kategoriler: ["Sağlık ve Tıp"],
giris: "Doğu Anadolu'da küçük bir ilçe hastanesi. Kar bütün yolları kapatmış; ambulans gelmez, helikopter kalkmaz. Sen on iki yıllık bir yoğun bakım hemşiresisin ve gece daha başlamadan bir sorun olduğunu biliyorsun: boşta tek bir solunum cihazı var. Koridorda eşinin beklediği yaşlı bir öğretmen, yolda olduğu söylenen yaralı bir asker ve sabaha kadar uzayacak bir gece. Bu hikâye, doğru cevabın olmadığı yerde nasıl karar verildiğini soruyor.",
kavramlar: ["Trajik ikilem", "Ödev ve fayda", "Ahlaki yara", "Ölümle yüzleşme"],
ozet: "Kar yolları kapatmış. Küçük bir ilçe hastanesinin yoğun bakımında tek bir boş solunum cihazı var. Gece uzun ve sen nöbetçi hemşiresin.",
baslangic: "s1",
durum: { merhamet: 0, kural: 0, gercek: 0 },

sahneler: {

s1: { saat: "19.10", baslik: "Kar", metin: [
"Kar öğleden beri yağıyor. Yediyi on geçe yoğun bakımın kapısını ittiğinde önce gözlüğün buğulanıyor. Silip pencereye bakıyorsun: dışarısı yok. Ne yol var ne ışık. Camda kendi yüzün, arkanda yanıp sönen monitörler.",
"Adın Leyla. On iki yıldır bu koridorda, bu terliklerle yürüyorsun. Sağ terliğin tabanı geçen ay delindi. İçine bir karton parçası koydun, kimseye söylemedin.",
"Gündüzcü hemşire Esin montunun fermuarını çekerken anlatıyor: “Yollar kapandı abla. Ambulans yok, helikopter yok, hiçbir şey yok. Ne olursa bizde.” Kapıda dönüyor. “Dört numaranın karısı akşamdan beri koridorda. Termosla çay getirmiş, kimse içmiyor. Sen bir iç bari.”",
"Altı yatak, dördü dolu. Beş solunum cihazından biri üç haftadır arızalı. Yedek parçası “yolda”, kimse ne zamandan beri yolda olduğunu bilmiyor. Üçü dolu. Biri boşta.",
"Dört numarada İsmail Bey yatıyor: seksen bir yaşında, emekli tarih öğretmeni. Maskenin altında dudakları kıpırdıyor. Ne dediğini anlamak için eğildiğinde “Bin yetmiş bir,” diyor, “Malazgirt.” Ateşi yok, aklı yerinde. Kendi kendine ders anlatıyor. Satürasyonu doksan, akşamdan beri ikişer ikişer iniyor.",
"Koridorda, plastik sandalyede eşi Saniye Hanım. Kucağında çiçekli bir termos. Seni görünce kalkıyor, termosun kapağını açıyor, sonra kapatıyor. İkram etmeye cesaret edemiyor.",
"Nöbetçi doktor Kaan yirmi yedi yaşında, uzmanlığının ikinci yılında. Seni görünce omuzları iniyor ve bunu saklamaya çalışmıyor bile: “Abla, iyi ki sen geldin.” Songül Abla ilaç dolabının önünde ampulleri sayıyor, dudakları kıpır kıpır. Sana dönmeden konuşuyor: “Dört numaraya bir bak. Ben beğenmedim.”"
], secenekler: [
{ t: "Kurala aldırmadan Saniye Hanım'ı içeri alırsın. Eşinin yanına otursun.", to: "s2", etki: { merhamet: 1, saniye_iceride: true } },
{ t: "Kaan'a dört numaranın değerlerini gösterip entübasyon setini hazırlatırsın.", to: "s2", etki: { kural: 1 } },
{ t: "İsmail Bey'in yanına oturup ne istediğini ona sorarsın.", to: "s2", etki: { gercek: 1 } },
{ t: "Songül Abla'nın yanına gidip ampulleri onunla birlikte sayarsın.", to: "s2", etki: { songul: true } }
]},

s2: { saat: "21.30", baslik: "İki İstek", metin: [
P(S("s1A"), "Saniye Hanım içeri girerken ayakkabılarını çıkarmaya kalktı. “Gerek yok teyze,” dedin. Yine de parmak uçlarında yürüdü. Şimdi yatağın kenarında, çantasını kucağından indirmeden oturuyor. Konuşmuyorlar. İsmail Bey bir ara elini çarşafın altından çıkarıp onun dizine koyuyor, o kadar."),
P(S("s1B"), "Kaan değerlere baktı, dudağını ısırdı. “Sabaha kadar dayanır gibi,” dedi. Setini yine de hazırladın, tepsiye dizip üstüne bir gazlı bez örttün, köşeye koydun."),
P(S("s1C"), "Yanına oturdun. “İsmail Bey, beni duyuyor musunuz?” Gözlerini açtı. “Duyuyorum kızım. Bir kulağım sağlam kaldı, o da laf dinlemek için.” Maskenin altında güldüğünü gözlerinden anladın."),
P(S("s1D"), "Ampulleri birlikte saydınız: dopamin dört, adrenalin on iki, midazolam yedi. Son kutuyu kapatırken Songül Abla omzunu omzuna vurdu. “Dört numara,” dedi yine. “Gözünde bir şey var. Benim rahmetlide de vardı, son hafta.”"),
"Dokuz buçukta satürasyon seksen yediye iniyor. Maskeyi düzeltmek için eğildiğinde İsmail Bey bileğini yakalıyor. Parmakları soğuk ve beklemediğin kadar güçlü.",
"“Babamı da bağlamışlardı o makineye,” diyor. İki üç kelimede bir duruyor, nefes alıyor. “Üç ay. Ağzında boru. Konuşamadı. Gözüyle bir şey anlatmaya çalışıyordu, ben anlamadım. Kırk yıl oldu, hâlâ anlamadım.” Bir nefes. “Beni bağlamayın.”",
"Sonra başını kapıya, koridordaki sandalyeye çeviriyor.",
"“Saniye'yi de yalnız koymayın ama. O yalnız duramaz. Bir akşam işten geç geldim diye karakola gitmişti.”",
"Bunların hiçbiri bir kâğıtta yazmıyor. Dosyada imzalı bir tedavi reddi yok. Odada senden başka duyan da yok.",
P(S("s1A"), "Yok, var: Saniye Hanım da duydu. Çantasının sapını iki eliyle sıktı, bıraktı, yine sıktı."),
"Monitör aynı notada ötüp duruyor. Kimse sesini kısmayı akıl etmemiş."
], secenekler: [
{ t: "Dosyaya yazarsın: “Hasta mekanik ventilasyon istemediğini sözlü olarak belirtti.” Saatiyle, imzanla.", to: "s3", etki: { kural: 1, gercek: 1, istek: "yazili" } },
{ t: "Kimseye söylemezsin. Nefesi daralmış, korkmuş yaşlı bir adam. Sabah ailesi ve doktoru karar verir.", to: "s3", etki: { istek: "sakli" } },
{ t: "Kaan'ı çağırırsın. Bunu onun da duyması lazım.", to: "s3", etki: { kural: 1, istek: "kaan" } },
{ t: "Saniye Hanım'a sorarsın: “Hep böyle mi derdi?”", to: "s3", etki: { merhamet: 1, istek: "saniye" } }
]},

s3: { saat: "22.40", baslik: "Telefon", metin: [
P(S("s2A"), "Not dosyada, mavi tükenmezle, yuvarlak el yazınla. Hemen altında saatlik idrar: 40 cc. Aynı sayfa, aynı kalem."),
P(S("s2B"), "Kimseye anlatmadın. Ama her alarmda başını kaldırıp dört numaraya bakıyorsun, adın seslenilmiş gibi."),
P(S("s2C"), "Kaan dinledi, ensesini kaşıdı. “Akut dönemde hastanın beyanı... tartışmalı abla,” dedi. Ders kitabından okur gibi. Dosyayı kapattı. Bir şey yazmadı."),
P(S("s2D"), "Saniye Hanım termosun kapağıyla oynadı. “Hep derdi,” dedi. “Ama her sabah saati de kendi kurardı, beni o uyandırsın diye. İkisini birden isterdi. Ne bileyim ben şimdi.” Kapağı kapattı. “Siz ne derseniz. Ben kırk yıldır onsuz bir şeye karar vermedim, şimdi mi vereceğim.”"),
"On biri yirmi geçe telefon çalıyor. Jandarma. Kara yolunda bir otomobil takla atmış. Sürücü on dokuz yaşında, adı Deniz, izne gelen bir asker. Kafa travması, göğüs travması, nefesi kötü. Paletli kar aracıyla getiriyorlar. Kırk dakika.",
"Kaan ahizeyi yerine koyuyor. Oturmuyor, bir daha koyuyor. “Cihaz,” diyor. “Bir tane var.”",
"Arkadan Songül Abla: “Dört numara seksen ikiye düştü.”",
"Kimse yüksek sesle söylemiyor ama hepiniz aynı hesabı yapıyorsunuz: seksen bir ve on dokuz. Biri burada, nefesini tek tek sayıyorsun. Ötekinin adını beş dakika önce duydun."
], secenekler: [
{ t: "Servis şefi Tahsin Hoca'yı evden aratırsın. Bu karar ne senin ne Kaan'ın olmalı.", to: "s4", etki: { kural: 1 } },
{ t: "“İsmail Bey'i şimdi bağlayalım,” dersin. Burada olan, yolda olandan önce gelir.", to: "s4", etki: { erken: "ismail" } },
{ t: "Cihazı boş tutarsınız; İsmail Bey'i maskeyle idare edip Deniz'i beklersiniz.", to: "s4", etki: { erken: "bos" } },
{ t: "Songül Abla'ya dönersin: “Sen olsan ne yapardın?”", to: "s4", etki: { songul: true, songul_sordu: true } }
]},

s4: { saat: "22.55", baslik: "Uzaktaki Ses", metin: [
P(S("s3A"), "Kaan numarayı tuşlarken iki kez yanlış bastı. Üçüncüde çaldı."),
P(S("s3B"), "Kaan entübasyonu senin elinin üstünde yaptı. Onun eli titriyordu, seninki de, ama daha az. Şimdi İsmail Bey'in göğsü makinenin temposunda inip kalkıyor. Saniye Hanım kapının camından izledi, camı buğulandırmamak için ağzını eliyle kapattı."),
P(function(d){ return d.son === "s3B" && d.istek; }, "“Beni bağlamayın,” demişti, bir buçuk saat önce. Makine her nefeste küçük bir tık sesi çıkarıyor. On iki yıldır bu sesi hiç bu kadar net duymamıştın."),
P(S("s3C"), "Cihaz boş. Ekranı yeşil yanıyor, arada bir kendi kendine test yapıp bipliyor. İsmail Bey'in maskesini bir kez daha sıktın. Sıkacak yer kalmamıştı."),
P(S("s3D"), "Songül Abla omuz silkti. “Ben olsam mı? Ben olsam yirmi beş yıl önce öğretmen olurdum, anam öyle istiyordu.” Sonra sesini alçalttı. “Gence ver, o ihtiyarın yüzü ömür boyu peşinde. İhtiyara ver, çocuğun anası peşinde. Hangisiyle yatıp kalkabilirsin, ona bak. Başka hesabı yok bunun.”"),
"Tahsin Hoca'ya sonunda ulaşılıyor. Altmış kilometre ötede, evinde. Arkada televizyon açık, bir yarışma programı. Biri doğru cevabı bilmiş, alkış.",
"Kaan anlatırken Hoca sözünü kesiyor: “Protokol belli Kaan. Sağkalımı yüksek olan. Ben buradan hastayı göremem ki.” “Hocam, yazılı bir talimat—” “Gece yarısı ne yazılısı oğlum? Leyla Hanım orada değil mi? Tecrübeli. Beraber karar verin.” Yine alkış.",
"Hat cızırdıyor, kesiliyor.",
"Kaan ahizeyi bırakıp sana dönüyor. “Abla,” diyor. Başka bir şey eklemiyor. Eklemesine gerek yok."
], secenekler: [
{ t: "“Karar senin, ben uygularım,” dersin Kaan'a.", to: "bk", etki: { kural: 1, sinir: true } },
{ t: "Kaan'ın omzunu tutup “Beraber vereceğiz,” dersin.", to: "bk", etki: { merhamet: 1, birlikte: true } },
{ t: "Koridora çıkıp Saniye Hanım'a her şeyi, olduğu gibi anlatırsın.", to: "sv_saniye", etki: { gercek: 1, saniye_bilir: true } },
{ t: "Hiçbir şey demeden ambu balonlarını ve yedek tüpleri hazırlamaya koyulursun.", to: "sv_depo", etki: { hazir: true } }
]},

bk: { saat: "23.10", baslik: "Bekleyiş", metin: [
P(S("sv_saniyeA"), "Saniye Hanım Kaan'a da anlattı. Yemini, kırk yılı. Kaan dinledi ve bu kez bir şey yazdı. Altına Saniye Hanım'ın adını da ekledi."),
P(S("sv_saniyeB"), "Elini tuttun. Saniye Hanım cümlesini bitirmedi. Parmakları bir süre elinin içinde kıpırdandı, sonra durdu."),
P(S("sv_saniyeC"), "“Haklısın kızım,” dedi. Rahatladı mı kırıldı mı, yüzünden okuyamadın. Termosu yeniden kucağına aldı."),
P(S("sv_saniyeD"), "Saniye Hanım içeri girip eşinin kulağına eğildi. İsmail Bey'in eli kalktı, karısının yanağına değdi, düştü. Ne konuştuklarını hiç öğrenmeyeceksin."),
P(S("sv_depoA"), "Eski çocuk servisinde, el feneriyle, nefesinin buhar olduğu bir odada küçük bir cihazın arkasını söktün. Vidalardan biri yuvarlanıp radyatörün altına kaçtı. Yere yatıp aradın, buldun. Valf avucunda, merdivenleri koşarak çıkarken uyup uymayacağını bilmiyordun."),
P(S("sv_depoB"), "Songül Abla eski servise gitti, sen yukarı döndün. Yirmi dakika sonra geldi, yanakları soğuktan kıpkırmızı, elinde valf. “Uymadı,” dedi. “Diş aralığı farklı. Yarım milim. Yarım milim be Leyla!”"),
P(S("sv_depoC"), "Teknisyen dördüncü çalışta açtı, esneyerek dinledi. “Sakın takmayın,” dedi. “Yanlış valfle basıncı yanlış okur, adamın ciğerini patlatırsınız.” Teşekkür edip kapattın. Telefon elinde bir süre durdun."),
P(S("sv_depoD"), "Örtüyü geri çektin. Songül Abla naylonun açıkta kalan köşesini düzeltti. Makine üşüyecekmiş gibi."),
P(S("s4A"), "“Tamam,” dedi Kaan. Yutkundu. Önündeki dosyayı açtı, kapadı, yine açtı."),
P(S("s4B"), "Kaan'ın omzu elinin altında gevşedi. “Beraber,” dedi, biraz fazla çabuk. Sözünü geri alırsın diye korkmuş gibi."),
P(S("s4C"), "Saniye Hanım'a anlattın: tek cihaz, yoldaki çocuk, eşinin değerleri. Yumuşatmadın. Dinledi ve sonunda tek bir şey sordu: “O çocuğun annesi biliyor mu?”"),
P(S("s4D"), "Balonları dizdin, tüpleri kontrol ettin, maskeleri boylarına göre sıraladın: büyük, orta, küçük. Küçüklere bu gece ihtiyaç olmayacaktı. Onları da sıraladın."),
"Yirmi beş dakika. Pencerenin önüne gidiyorsun. Sokak lambasının altında kar eğri yağıyor. Rüzgâr dönmüş.",
"On dört yıl önce baban bu hastanede öldü. Belki bu koridorda. O gece de kar vardı. Sen otogarda kalmıştın, otobüsler kalkmıyordu. Sabah geldiğinde genç bir hemşire babanın son saatlerinde elini tuttuğunu söyledi. Adını sormadın. Sonra yıllarca kendine sordun.",
"Arkanda termosun kapağı açılıyor. Saniye Hanım bir bardak uzatıyor. “İç kızım. Şekeri çoktur ama. İsmail şekersiz içemez.”"
], secenekler: [
{ t: "Çayı alıp Saniye Hanım'ın yanına oturursun.", to: "s5", etki: { merhamet: 1, cay: true } },
{ t: "Kaan'la protokolü bir kez daha okursunuz: yaş, eşlik eden hastalık, sağkalım puanı.", to: "s5", etki: { kural: 1, protokol: true } },
{ t: "İsmail Bey'in yanına gidip Deniz'i ve tek cihazı anlatırsın. Bilmek onun da hakkı.", to: "s5", etki: { gercek: 1, ismail_bilir: true } },
{ t: "Lavaboya gidip yüzünü yıkarsın. Aynaya bakmadan.", to: "s5" }
]},

s5: { saat: "23.35", baslik: "Kapı", metin: [
P(S("bkA"), "Çay soğumuştu, diş kamaştıracak kadar şekerliydi. Saniye Hanım anlattı: İsmail bardağı iki eliyle tutarmış, ilk yudumda dilini yakar, her sabah “Yine yaktım” dermiş. Kırk yıl."),
P(S("bkB"), "Protokol iki sayfa. Seksen yaş üstü: eksi iki. Kronik akciğer hastalığı: eksi iki. Kâğıt birini dört puana, ötekini dokuza indiriyor. Okudukça içinde bir şey gevşiyor. Gevşediği için kendine kızıyorsun."),
P(S("bkC"), "İsmail Bey dinledi, gözlerini tavana dikti. Sonra elini kaldırıp kapıyı gösterdi. Yoldaki çocuğu mu gösterdi, seni mi kovdu? Sormaya cesaret edemedin."),
P(S("bkD"), "Su buz gibiydi. Lavabonun üstündeki aynada sabun lekeleri vardı. Yine de bakmadın."),
"Paletli aracın motoru koridora kadar geliyor. Kapı açılınca içeri kar ve mazot kokusu doluyor. Sedyede bir çocuk: yüzü kan içinde, dudakları mor, göğsü bir yana kaykık. Yanında üniformalı, kendisi de çocuk sayılacak bir er. Elinde Deniz'in askerî kimliği. Kartı bükülecek kadar sıkıyor.",
"Bilinç bulanık. Satürasyon yetmiş dokuz. Songül Abla balonu takıp sıkmaya başlıyor. Dudaklarıyla sayıyor.",
P(function(d){ return d.erken === "ismail"; }, "Cihaz İsmail Bey'de. Göğsü makineyle inip kalkıyor, değerleri toparlandı. Deniz'e vermek için önce ondan almak lazım."),
P(function(d){ return d.erken !== "ismail"; }, "Dört numaranın monitöründe de aynı rakam var: yetmiş dokuz."),
"Kaan iki yatağın arasında, eldivenlerini giymiş, kıpırdamadan duruyor. Songül Abla başını kaldırmadan:",
"“Leyla. Söyle.”"
], secenekler: [
{ t: function(d){ return d.erken === "ismail" ? "Cihazı İsmail Bey'den çıkarıp Deniz'e bağlarsın." : "Cihaz Deniz'e. Gencin şansı daha yüksek."; }, to: "d1", etki: function(d){ d.cihaz = "deniz"; d.secen = "sen"; if(d.erken === "ismail") d.cikardin = true; d.kural++; } },
{ t: function(d){ return d.erken === "ismail" ? "Cihaz İsmail Bey'de kalır. Deniz'i elle solutursunuz." : "Cihaz İsmail Bey'e. O önce buradaydı."; }, to: "i1", etki: function(d){ d.cihaz = "ismail"; d.secen = "sen"; } },
{ t: "Kaan'a bakar ve susarsın. Karar onun olsun.", to: "k1", etki: { devretti: true } },
{ t: function(d){ return d.erken === "ismail" ? "İsmail Bey'i de cihazdan alırsın. İkisini de elle solutacaksınız, sabaha kadar, nöbetleşe. Kimse seçilmeyecek." : "Cihaza kimseyi bağlamazsın. İkisini de elle solutacaksınız, sabaha kadar, nöbetleşe. Kimse seçilmeyecek."; }, to: "e1", etki: function(d){ d.cihaz = "elle"; d.merhamet++; if(d.erken === "ismail") d.cikardin = true; } }
]},

k1: { saat: "23.40", baslik: "Kaan", metin: [
"Kaan'a bakıyorsun ve susuyorsun.",
"Kaan'ın alnında ter. Önce sana, sonra Songül Abla'ya, sonra iki monitöre bakıyor. Ağzını açıp kapatıyor. Eldivenli elini önlüğüne siliyor. Eldivenin silinecek bir yeri yokmuş gibi.",
"“Deniz'e,” diyor sonunda. Sesi çatallanıyor. Boğazını temizleyip tekrar ediyor. “Deniz'e bağlayın.”",
"Sonra lavaboya gidip ellerini yıkıyor. Eldivenleri çıkarmadan.",
"Tutanağa “Dr. Kaan Yılmaz'ın kararıyla” yazılacak. Senin adın o satırda geçmeyecek."
], secenekler: [
{ t: "Kaan'ın yanına gidip “Doğru karar,” dersin. Doğru olup olmadığını bilmeden.", to: "d1", etki: function(d){ d.cihaz = "deniz"; d.secen = "kaan"; d.merhamet++; d.kaan_teselli = true; } },
{ t: "“Emin misin?” diye sorarsın.", to: "i1", etki: function(d){ d.cihaz = "ismail"; d.secen = "kaan"; d.kaan_dondu = true; } },
{ t: "Bir şey demeden Deniz'i cihaza bağlarsın.", to: "d1", etki: function(d){ d.cihaz = "deniz"; d.secen = "kaan"; if(d.erken === "ismail") d.cikardin = true; } },
{ t: "Araya girersin: “Hayır. İkisini de elle solutacağız.”", to: "e1", etki: function(d){ d.cihaz = "elle"; d.secen = "sen"; d.merhamet++; if(d.erken === "ismail") d.cikardin = true; } }
]},


sv_saniye: { saat: "23.00", baslik: "Kırk Yıl", metin: [
"Koridora, plastik sandalyelerin yanına çıkıyorsun ve Saniye Hanım'a her şeyi anlatıyorsun: yoldaki çocuğu, tek cihazı, eşinin düşen değerlerini. Yumuşatmıyorsun.",
"Saniye Hanım termosun kapağını açıp kapatıyor. Sonra sana değil, koridorun ucundaki kararmış pencereye anlatmaya başlıyor:",
"“Kırk bir yıl önce evlendik. Düğünde kar vardı, gelinliğin eteği çamur oldu. İsmail'in babası o kış makinedeydi, gelemedi. Üç ay sonra öldü. Cenazeden döndüğümüz gece İsmail yemin ettirdi: ‘Beni öyle bir şeye bağlatma Saniye.’ Ettim.”",
"“Ben de ona her akşam ‘Beni bırakma’ derdim. Kırk yıl, her akşam. Şimdi hangisini tutayım? Birini tutsam öbürünü bozacağım.”",
"Sana dönüyor. “O çocuğun anası var mı?”",
"“Var,” diyorsun. “Yolda olabilir.”",
"“O zaman...” diyor Saniye Hanım. Gerisini getirmiyor. Termosun kapağını sıkıştırıyor, sıkışmış kapağı bir daha sıkıştırıyor."
], secenekler: [
{ t: "“Bunu Kaan'a da söyler misiniz?” dersin. Bir tanık olsun.", to: "bk", etki: { gercek: 1, saniye_tanik: true } },
{ t: "Elini tutarsın. Cümlesini bitirmesini beklemeden.", to: "bk", etki: { merhamet: 1 } },
{ t: "“Bu kararı size yükleyemem,” dersin. “Seçmek bizim işimiz.”", to: "bk", etki: { kural: 1 } },
{ t: "“İçeri girin, eşinize siz söyleyin,” dersin.", to: "bk", etki: { gercek: 1, saniye_soyledi: true } }
]},

sv_depo: { saat: "23.00", baslik: "Arızalı Cihaz", metin: [
"Balonlar, tüpler, maskeler hazır. Ellerin hâlâ iş arıyor. Songül Abla'nın kolundan tutuyorsun: “Depo.”",
"Bodrumdaki depo buz gibi. Toz ve eski kauçuk kokuyor. Köşede naylona sarılmış beşinci cihaz duruyor. Örtüyü çekiyorsun. Ekrana bantla bir kâğıt yapıştırılmış: “ARIZALI – KULLANMAYIN – valf bekleniyor.” Altına biri kurşun kalemle eklemiş: “bekle babam bekle”.",
"Songül Abla cihazın arkasını açıyor. “Ekspiratuvar valf,” diyor. “Şu kadarcık bir şey.” Parmaklarıyla ceviz büyüklüğünde bir şey gösteriyor.",
"Sonra duruyor. “Eski çocuk servisinde bir tane vardı. Servisi kapatırken götürmeyi unuttular. Valfi uyar mı, bilmem. O da bozuk çıkabilir.”",
"Eski servis binanın öbür kanadında. Kaloriferi kapalı, kapısı kilitli, anahtar güvenlikte. Gitmek, bulmak, sökmek, takmak, denemek: bir saati bulur. Deniz otuz beş dakika sonra kapıda.",
"“İkimiz birden gidemeyiz,” diyor Songül Abla. “Yukarıda biri lazım. Sen söyle.”"
], secenekler: [
{ t: "Songül Abla'yı yukarı gönderip eski servise sen gidersin. Bir şans varsa denenecek.", to: "bk", etki: { merhamet: 1, tamir: "sen" } },
{ t: "Songül Abla'yı eski servise gönderip sen yukarı dönersin. Hastaların başında sen olmalısın.", to: "bk", etki: { kural: 1, tamir: "songul" } },
{ t: "Teknisyeni evden ararsın. Yanlış takılmış bir valf, hiç olmamasından beter olabilir.", to: "bk", etki: { kural: 1, tamir: "telefon" } },
{ t: "Örtüyü geri çekersin. Bu gece bu makine çalışmayacak.", to: "bk", etki: { gercek: 1, tamir: "yok" } }
]},

sv_otogar: { saat: "08.40", baslik: "Otogar", metin: [
"Kapıdan çıkıp yürüyorsun. Ayakların seni otogara götürüyor. Seferlerin iptal edildiği, bekleme salonunun ışıklarının yarısının söndürüldüğü otogara.",
"On dört yıl önce, babanın öldüğü gece, bu salonda kalmıştın. Banklar aynı turuncu plastik. Duvardaki saat hâlâ dört dakika ileri. Kimse ayarlamamış.",
"Bankta tek bir kişi var, montunun yakası kalkık: Mert, jandarma eri. Birliğine dönecek otobüsü bekliyor. Seni görünce ayağa kalkıyor, sonra ne yapacağını bilemeyip yine oturuyor.",
"“Abla,” diyor. “Siz de mi gidiyorsunuz?”",
"Yanına oturuyorsun. Mert bir süre ellerine bakıyor. “Bütün gece serum şişesini tuttum,” diyor. “Kolum hâlâ havadaymış gibi geliyor. İndiremiyorum.”",
P(function(d){ return d.deniz_oldu; }, "“Aynı koğuştaydık,” diyor. “Anasına ne diyeceğim? Komutan ‘Sen git’ dedi. Ne diyeceğim ben kadına?”"),
P(function(d){ return !d.deniz_oldu; }, "“Aynı koğuştaydık,” diyor. “Uyanınca bana kızacak. Şişeyi yanlış tutmuşum, kolunu şişirmişim. Kızsın. Kızsın, yeter.”"),
"Kantinci kepengi yarıya kadar indirmiş. Size bakıp “Çay?” diye bağırıyor. İkiniz birden “Olur,” diyorsunuz."
], secenekler: [
{ t: "Mert'e babanı, bu salonda geçirdiğin o geceyi anlatırsın.", to: "t4", etki: { merhamet: 1, mert_baba: true } },
{ t: "Elini koluna koyup “İndir artık,” dersin.", to: "t4", etki: { merhamet: 1 } },
{ t: "Annesine gerçeği kendi ağzıyla söylemesi gerektiğini söylersin.", to: "t4", etki: { gercek: 1 } },
{ t: "Kalkıp hastaneye geri yürürsün.", to: "t4", etki: { geri_yurudu: true } }
]},

sv_anlatmak: { saat: "08.30", baslik: "Kelimeler", metin: [
"Herkese anlatıyorsun: tutanağa, Tahsin Hoca'ya, sabah ekibine. Ama biriyle uzun sürüyor.",
P(function(d){ return d.deniz_oldu || d.deniz_koma; }, "Gülay Hanım. Koridorun sonundaki küçük oda: iki sandalye, bir masa, bir kutu mendil, duvarda solmuş bir Kapadokya posteri. Kapısında “Görüşme Odası” yazıyor. Hastanede herkes ona başka bir ad takmış."),
P(function(d){ return !d.deniz_oldu && !d.deniz_koma; }, "Saniye Hanım. Koridorun sonundaki küçük oda: iki sandalye, bir masa, bir kutu mendil, duvarda solmuş bir Kapadokya posteri. Eşinin gecesini dakika dakika soruyor."),
"Anlatırken kelimelerin işe karıştığını fark ediyorsun. “Cihaz yetmedi” deyince gece küçülüyor. “Ben seçtim” deyince büyüyor. Doğrusu ikisinin arasında bir yerde ama oraya uyan bir cümle bulamıyorsun.",
"Kadın bir yerde seni durduruyor: “Bir daha söyle. Saati. Tam olarak.” Söylüyorsun. “Sen neredeydin o sırada?” Onu da söylüyorsun.",
"Sonra bütün gece taşıdığı soruyu soruyor:",
P(function(d){ return d.deniz_oldu || d.deniz_koma; }, "“Acı çekti mi?”"),
P(function(d){ return !d.deniz_oldu && !d.deniz_koma; }, "“Benim adımı söyledi mi?”"),
"Doğru cevabı biliyorsun."
], secenekler: [
{ t: "Doğruyu söylersin, olduğu gibi.", to: "t4", etki: { gercek: 1, aci_dogru: true } },
{ t: "Bir yalan söylersin. Onun geri kalan ömrü için.", to: "t4", etki: { merhamet: 1, aci_yalan: true } },
{ t: "“Bilmiyorum,” dersin.", to: "t4", etki: { bilmiyorum: true } },
{ t: "Cevap vermeden elini tutarsın.", to: "t4", etki: { merhamet: 1 } }
]},

/* ---------- DENİZ KOLU ---------- */
d1: { saat: "00.20", baslik: "Neden O?", metin: [
P(function(d){ return d.cikardin && !d.gulay; }, "Cihazı İsmail Bey'den çıkarmak, bağlamaktan uzun sürdü. Tüpü çekerken öksürdü, gözlerini açıp sana baktı. Maskesini taktın. Bir saat önce taktığın aynı maskeyi."),
P(function(d){ return d.secen === "kaan"; }, "Kararı Kaan söyledi; Deniz'i makineye senin ellerin bağladı. Bunu kafanda bir hesap gibi ikiye bölmeye çalışıyorsun. Bölünmüyor."),
P(function(d){ return d.secen === "sen" && !d.cikardin; }, "Deniz'i bağladın. Makine ilk nefesi verince göğsü kalktı ve monitördeki sayı yetmiş dokuzdan seksen dörde çıktı. On iki yıl oldu, bu hâlâ seni şaşırtıyor: bir tıkırtı ve bir sayı."),
"İsmail Bey maskede. Değerleri yavaş yavaş, ama hiç durmadan düşüyor.",
"Saniye Hanım yanına geliyor. Ağlamıyor. Tek bir şey soruyor:",
"“Neden o?”",
P(function(d){ return d.saniye_bilir; }, "Biliyordu. Ona sen anlatmıştın. Bilmek işe yaramamış."),
"Ne cevap verirsen, bu kadın her gece yatağa girdiğinde o cümleyi hatırlayacak."
], secenekler: [
{ t: "Gerçeği söylersin: “Tek cihaz vardı. Gencin yaşama şansı daha yüksekti.”", to: "d2", etki: { gercek: 1, cevap: "gercek" } },
{ t: function(d){ return d.secen === "kaan" ? "“Doktor karar verdi,” dersin. Doğru, ama bütün doğru değil." : "“Doktor karar verdi,” dersin. Kaan'ın adını bir kalkan gibi kullanarak."; }, to: "d2", etki: { kural: 1, cevap: "kalkan" } },
{ t: "İsmail Bey'in sana söylediklerini anlatırsın: makineye bağlanmak istemediğini.", to: "d2", etki: { gercek: 1, cevap: "istek" } },
{ t: "Açıklama yapmazsın. Onunla birlikte İsmail Bey'in yanına oturursun.", to: "d2", etki: { merhamet: 1, cevap: "sessiz" } }
]},

d2: { saat: "00.55", baslik: "Son Söz", metin: [
P(S("d1A"), "Saniye Hanım dinledi. “Haklısınız,” dedi. Çantasından bir mendil çıkardı, kullanmadan geri koydu."),
P(S("d1B"), "“Doktor,” diye tekrarladı Saniye Hanım ve Kaan'a baktı. Kaan bakışını bir süre tuttu, sonra yere indirdi. Cebindeki kalemle oynamaya başladı."),
P(S("d1C"), "Saniye Hanım sana baktı. “Sana mı söyledi?” dedi. Sesinde kıskançlığa benzer bir şey vardı. Kırk yıl onunla yaşamış, son sözünü bir yabancı duymuştu. Sonra omuzları indi. “İyi. Biri duymuş bari.”"),
P(S("d1D"), "Açıklama yapmadın. Saniye Hanım'ın eli bir süre elinin içinde kaskatı durdu, sonra gevşedi."),
P(S("i2C"), "İki kadının gözü önünde cihazı İsmail Bey'den çıkarıp Deniz'e bağladın. Gülay Hanım da Saniye Hanım da aynı odadaydı. Biri ötekinin yüzüne bakmadı."),
P(S("e2A"), "Balonu bıraktığında oda sessizleşti. Saniye Hanım eşinin yanına, yatağın kenarına uzandı. Sığmadı, bir bacağı aşağı sarktı. Kaan Deniz'i cihaza bağladı."),
P(S("e2B"), "Deniz cihazda. İsmail Bey'i elle solutmaya devam ediyorsunuz ama bileklerin yanıyor. Her sıkışta biraz daha az hava gidiyor. Ne yaptığınızı üçünüz de biliyorsunuz. Kimse ağzına almıyor."),
"Saat bire doğru İsmail Bey gözlerini açıyor. Bakışı berrak. Sona yaklaşanlarda bazen olur bu. Kaç kez gördüğünü sayamazsın.",
"“Kar mı yağıyor?” diyor. “Babam kar yağarken ölmek istemezdi. Yollar kapanır, cenaze kalkmaz derdi. Haklıymış.” Gülmeye çalışıyor, öksürüyor.",
"Sonra gözleri karşıdaki yatağa, makineye bağlı çocuğa kayıyor.",
"“O oğlan,” diyor. “Kurtulur mu?”"
], secenekler: [
{ t: "“Kurtulur,” dersin. Bilmeden. O rahat etsin diye.", to: "d2b", etki: { merhamet: 1, teselli: true, ismail_oldu: true } },
{ t: "“Bilmiyorum,” dersin. Ona yalan söylemek istemiyorsun.", to: "d2b", etki: { gercek: 1, ismail_oldu: true } },
{ t: "Kaan'dan morfini artırmasını istersin. Acısı dinsin. Nefesinin de yavaşlayacağını bilerek.", to: "d2b", etki: { merhamet: 1, morfin: true, ismail_oldu: true } },
{ t: "Saniye Hanım'ı yanında bırakıp Deniz'in başına dönersin. Yaşayana bakmak senin işin.", to: "d2b", etki: { kural: 1, yalniz: true, ismail_oldu: true } }
]},

d2b: { saat: "01.20", baslik: "Cep", metin: [
P(S("d2A"), "“Kurtulur,” dedin. İsmail Bey gözlerini kapadı. “İyi,” dedi. “İyi.” Saat 01.12'de öldü."),
P(S("d2B"), "“Bilmiyorum,” dedin. İsmail Bey bir süre baktı. “Ben de bilmiyorum,” dedi. “Kim biliyor ki kızım.” Saat 01.12'de öldü."),
P(S("d2C"), "Kaan dozu artırdı. İsmail Bey'in alnındaki çizgi düzeldi, yumruk yaptığı elleri açıldı. Nefesi seyreldi. Saat 01.12'de öldü. Kaan şırıngayı tepsiye bırakırken eli tepsiye çarptı. Ses koridorda yankılandı."),
P(S("d2D"), "Deniz'in başına döndün: tüp, değerler, pupiller. Arkandan Saniye Hanım'ın sesi geliyordu. Eşine sözlerini hatırlamadığı bir türkü mırıldanıyordu. Saat 01.12'de mırıltı kesildi. Dönmeden anladın."),
"Ölümden sonra yapılacak işleri biliyorsun: monitörü kapatmak, saati yazmak, gözleri kapamak, çeneyi bağlamak, çarşafı çekmek. Ellerin bunları kendi kendine yapıyor.",
"Sonra jandarma eri yanına geliyor. Adı Mert. Elinde bir naylon poşet; Deniz'in ceplerinden çıkanlar: cüzdan, telefon, yarısı yenmiş bir paket sakız, katlanmış bir kâğıt.",
"“Abla, bunları kime vereyim?”",
"Telefon titriyor. Ekranda “Annem” yazıyor. Otuz dördüncü cevapsız arama. Kâğıdın üstünde tükenmezle: “Babama. İzin bitince.”"
], secenekler: [
{ t: "Kâğıdı okumadan poşete geri koyarsın. Sana yazılmadı.", to: "d3", etki: { kural: 1 } },
{ t: "Kâğıdı açıp okursun. Kimi yaşattığını bilmek istiyorsun.", to: "d3", etki: { mektup: true } },
{ t: function(d){ return d.gulay ? "Kâğıdı ve telefonu Gülay Hanım'a verirsin." : "Telefonu açarsın. Annesine oğlunun yaşadığını söylersin."; }, to: "d3", etki: { merhamet: 1, anneye_soyledi: true } },
{ t: "Poşeti Mert'e geri verirsin: “Sen sakla.”", to: "d3" }
]},

d3: { saat: "01.50", baslik: "Üçüncü", metin: [
P(S("d2bA"), "Kâğıt poşetin içinde, katlı duruyor. Poşeti hemşire masasının çekmecesine koydun ve çekmeceyi kilitledin. Neden kilitlediğini sen de bilmiyorsun."),
P(S("d2bB"), "Kâğıdı açtın. Tükenmez yer yer yazmamış, üstünden ikinci kez geçilmiş: “Baba ben tarlayı istemiyorum. Okumak istiyorum. Yüzüne söyleyemedim o yüzden yazdım. Kızma bana.” Altında bir imza, bir tarih. Sonra “kızma” kelimesinin altı bir kez daha çizilmiş."),
P(function(d){ return d.son === "d2bC" && !d.gulay; }, "Telefonu açtın. Karşıda bir kadın. Önce bir çığlık, sonra hiçbir şey, sonra “Yaşıyor mu?” “Yaşıyor,” dedin. Kadın bir şey daha söyledi, anlamadın. Birine bağırıyordu, “Yaşıyormuş!” diye, evin içinde."),
P(function(d){ return d.son === "d2bC" && d.gulay; }, "Gülay Hanım kâğıdı okudu, katladı, açtı, yine okudu. “Babası okusun bunu,” dedi. “Ben okumamalıydım.” Ama kâğıdı göğsüne bastırdı ve bırakmadı."),
P(S("d2bD"), "Mert poşeti iki eliyle aldı, karnına bastırdı. “Tamam abla,” dedi. Poşetin içinde sakız paketi hışırdadı."),
"Saat ikiye on var. Kapı yine açılıyor, yine kar. Bu kez bir traktör römorkunda, battaniyelere sarılı bir adam: Ferhat, otuz dört yaşında. Evinde soba zehirlenmesi. Karısı komşudaymış, kurtulmuş. Üç çocuk anneannede. Kardeşi onu römorka yükleyip on iki kilometre getirmiş, kendi eldivenlerini de ona giydirmiş.",
"Ferhat'ın bilinci kapalı, nefesi yüzeysel. Kanındaki zehir saatlerce makine desteği istiyor. Ama genç ve sağlam. Doğru desteği alırsa sabaha ayağa kalkacak türden.",
"Aynı anda Kaan, Deniz'in başından sesini alçaltarak: “Abla. Sol pupil genişledi. Işığa cevap yok.” Bir an duruyor. “Kafanın içinde kanama ilerliyor olabilir. Burada açamayız.”",
"Ferhat'ın kardeşi kapıda, botlarından kar eriyip yere göllenirken soruyor: “Hangi yatağa koyalım?”"
], secenekler: [
{ t: "Cihazı Deniz'den alıp Ferhat'a verirsin. Kurtarılabilecek olanı seçersin.", to: "t1", etki: function(d){ d.kural++; d.deniz_oldu = true; d.ikinci_secim = "ferhat"; } },
{ t: "Deniz'de bırakırsın. Bir kez verdiğin nefesi geri almayacaksın.", to: "t1", etki: function(d){ d.ferhat_oldu = true; d.deniz_koma = true; d.ikinci_secim = "deniz"; } },
{ t: "Ferhat'ı elle solutursunuz: sen, Songül Abla, Mert, kardeşi. Sabaha kadar, nöbetleşe.", to: "t1", etki: function(d){ d.merhamet++; d.deniz_oldu = true; d.gozden_kacti = true; d.ikinci_secim = "herkes"; } },
{ t: "Tahsin Hoca'ya bir daha ulaşmaya çalışırsın. Bu kez kararı yazılı, onun adıyla istersin.", to: "t1", etki: function(d){ d.kural++; d.ferhat_oldu = true; d.deniz_koma = true; d.yazili_emir = true; d.ikinci_secim = "tahsin"; } }
]},

/* ---------- İSMAİL KOLU ---------- */
i1: { saat: "00.10", baslik: "Balon", metin: [
P(S("s5B"), "Cihaz İsmail Bey'e. Deniz'in göğsüne ambu balonuyla hava veriyorsunuz. Dakikada on iki kez. Saymıyorsunuz artık, eller kendi sayıyor."),
P(S("k1B"), "“Emin misin?” diye sordun. Kaan'ın yüzü değişti. “Değilim,” dedi. “İsmail Bey önce geldi. Onda kalsın.” Bir soru sordun ve karar tersine döndü."),
P(function(d){ return d.istek && d.erken !== "ismail"; }, "İsmail Bey'i bağlarken “Beni bağlamayın” demesi kulağındaydı. Tüp boğazından inerken gözlerini açtı. Ne gördü, bilmiyorsun."),
P(function(d){ return d.istek && d.erken === "ismail"; }, "İsmail Bey zaten makinedeydi. “Beni bağlamayın,” demişti. Onu bağlayan ilk karar senin değildi belki. Bağlı kalmasına karar veren sensin."),
"Songül Abla'yla nöbetleşe Deniz'in balonunu sıkıyorsunuz. Mert serum şişesini havada tutuyor. Askıyı göstermene rağmen bırakmıyor.",
"Deniz'in cebindeki telefon titriyor. Durmadan. Ekranda “Annem” yazıyor. Yirmi dakikada on yedi arama.",
"Her titreşimde Mert sana bakıyor. Sen balonu sıkıyorsun."
], secenekler: [
{ t: "Telefonu açarsın.", to: "i2", etki: { gercek: 1, telefon: "acti" } },
{ t: "Telefonu kapatırsın. Şu an bir anneye söyleyecek bir şeyin yok.", to: "i2", etki: { telefon: "kapatti" } },
{ t: "Mert'e açtırırsın. O konuşsun. Senin ellerin dolu.", to: "i2", etki: { telefon: "mert" } },
{ t: "Telefonu açıp Deniz'in kulağına tutarsın. Annesinin sesini duysun.", to: "i2", etki: { merhamet: 1, telefon: "kulak" } }
]},

i2: { saat: "00.50", baslik: "Anne", metin: [
P(S("i1A"), "“Ben hemşiresiyim,” dedin. Karşıda önce nefes, sonra bir kadın: “Yaşıyor mu?” “Yaşıyor.” “Geliyorum.” “Yollar kapalı teyze—” Hat çoktan kapanmıştı."),
P(S("i1B"), "Telefonu kapattın. Titreşim kesildi. Yirmi kilometre ötede bir kadının aynı numarayı bir daha aradığını ve bu kez çalmadığını düşündün. Telefonu Mert'in görmeyeceği bir yere koydun."),
P(S("i1C"), "Mert açtı. “Teyze,” dedi, sesi çatladı. “Deniz iyi. Yani... yaşıyor. Hastanedeyiz.” Sonra ağlamaya başladı. Telefonu kulağından ayırmadan, burnunu koluna silerek. Sen balonu sıkmaya devam ettin."),
P(S("i1D"), "Telefonu Deniz'in kulağına tuttun. Hoparlörden bir kadın sesi aynı şeyi tekrarlıyordu: “Oğlum, buradayım, buradayım.” Monitördeki nabız bir ara hızlandı. Tesadüf mü, değil mi. Hiç bilmeyeceksin."),
"Biri on geçe Gülay Hanım geliyor. Komşusunun traktörüyle, yirmi kilometre karın içinden. Yüzü kıpkırmızı, eşarbının ucu buz tutmuş. Kapıda durup odayı görüyor: makineye bağlı yaşlı bir adam, elle nefes verilen oğlu.",
"Bir saniye bakıyor. Sonra eşarbını çözmeden sana dönüyor:",
"“Neden benim oğluma değil?”"
], secenekler: [
{ t: "Gerçeği söylersin: “Cihaz birdi. İsmail Bey önce buradaydı.”", to: "i2b", etki: { gercek: 1, gulay: true } },
{ t: "“Doktor karar verdi,” dersin.", to: "i2b", etki: { kural: 1, gulay: true, kalkan: true } },
{ t: "“Haklısınız,” deyip cihazı İsmail Bey'den çıkarır, Deniz'e bağlarsın.", to: "d2", etki: function(d){ d.gulay = true; d.cihaz = "deniz"; d.cikardin = true; d.donus = true; } },
{ t: "Balonu ona uzatırsın: “Gelin. Siz tutun. Böyle sıkacaksınız.”", to: "i2b", etki: { merhamet: 1, gulay: true, anne_tuttu: true } }
]},

i2b: { saat: "01.20", baslik: "Avuç", metin: [
P(S("i2A"), "Gülay Hanım dinledi. Bir şey demedi. Oğlunun yatağının dibine, yere oturdu. Montunu bile çıkarmadan."),
P(S("i2B"), "“Doktor,” dedi Gülay Hanım ve gözleriyle Kaan'ı buldu. Kaan ona baktı, sonra sana. Yirmi yedi yaşındaydı ve o anda daha da genç görünüyordu."),
P(S("i2D"), "Gülay Hanım balonu aldı. Elleri titriyordu, sonra titremedi. Bir, iki, üç. Saymayı sen öğretmedin. Kendi saydı. Arada bir oğlunun kulağına eğilip bir şey söylüyor, sonra yine sayıyordu."),
P(S("e2C"), "İsmail Bey'i cihaza bağladın. Deniz'in balonu artık tamamen Songül Abla'yla Mert'te. Saniye Hanım eşinin yanında. Az önce balon tutan ellerine bakıyor, ellerini nereye koyacağını bilemiyor."),
"Bir buçuğa doğru İsmail Bey'in gözleri açılıyor. Sedasyon hafiflemiş. Konuşamıyor, boğazında tüp var. Ama sana bakıyor.",
"Elini kaldırıyor. Titrek, yavaş. Senin elini buluyor, avucunu açıyor ve işaret parmağıyla içine harf yazmaya başlıyor.",
"B. I. R. A.",
"Sonra parmağı duruyor. Gözleri kapanıyor. Bir harf daha yazacaktı. “Bırakın” mı, “bırakma” mı?",
"Avucunda hiçbir şey yazmıyor. Kaşınıyor."
], secenekler: [
{ t: "Sedasyonu artırırsınız. Uyusun, acı çekmesin. Bir daha da bakmasın.", to: "i3", etki: { merhamet: 1, uyuttu: true } },
{ t: "Saniye Hanım'ı çağırıp harfleri anlatırsın. Ne demek istediğine o karar versin.", to: "i3", etki: { gercek: 1, saniyeye_sordu: true } },
{ t: "Harfleri “bırakın” diye okursun. Kaan'a gidip söylersin.", to: "i3", etki: { gercek: 1, harf: "birakin" } },
{ t: "Harfleri “bırakma” diye okursun. Elini tutup yanında kalırsın.", to: "i3", etki: { merhamet: 1, harf: "birakma" } }
]},

i3: { saat: "01.50", baslik: "Ferhat", metin: [
P(S("i2bA"), "Kaan dozu artırdı. İsmail Bey'in yüzü gevşedi. Avucunu yıkadın. Neden yıkadığını bilmeden."),
P(S("i2bB"), "Saniye Hanım harfleri dinledi, eşinin yüzüne baktı. “Bırakın,” dedi sonra. “Bırakın demek istedi. Ben onu bilirim.” Sesi kararlıydı. Elleri termosu bulamadı. Masanın üstünde arandılar."),
P(S("i2bC"), "Kaan dinledi. “Avuca yazılmış dört harf,” dedi. “Bunu dosyaya nasıl yazacağım abla?” Haklıydı. Yine de kalemini çıkarıp bir şey karaladı, sonra karaladığının üstünü çizdi."),
P(S("i2bD"), "Elini tuttun. İsmail Bey'in parmakları bir kez sıktı, sonra gevşedi. Yanındaki sandalyeyi ayağınla çekip oturdun."),
P(function(d){ return !d.gulay; }, "İkiye doğru Deniz'in annesi Gülay Hanım komşusunun traktörüyle geliyor. Kapıda durup odayı görüyor: makinedeki yaşlı adamı, elle nefes verilen oğlunu. Hiçbir şey sormuyor. Mert'in elinden balonu alıyor."),
"Saat ikiye on var. Kapı yine açılıyor, yine kar. Bir traktör römorkunda, battaniyelere sarılı bir adam: Ferhat, otuz dört yaşında. Soba zehirlenmesi. Üç çocuğu anneannede. Kardeşi onu on iki kilometre getirmiş. Kendi eldivenlerini de ona giydirmiş.",
"Ferhat'ın kanındaki zehir saatlerce makine desteği istiyor. Ama genç ve sağlam. Doğru desteği alırsa sabaha kalkacak türden.",
"Odada şimdi makinedeki adam var, “bağlamayın” demişti. Elle nefes verilen çocuk var, annesi başında. Bir de yeni gelen adam. Evde üç çocuğu bekliyor.",
"Songül Abla balonu Ferhat'ın kardeşine tutturuyor, nasıl sıkılacağını gösteriyor. Sonra sana dönüyor ve bir şey demiyor. Demesine gerek yok."
], secenekler: [
{ t: "Cihazı İsmail Bey'den alıp Ferhat'a verirsin. Otuz dört yaş, üç çocuk ve avucuna yazılmış o yarım kelime.", to: "t1", etki: function(d){ d.kural++; d.ismail_oldu = true; if(!d.anne_tuttu) d.deniz_oldu = true; d.ikinci_secim = "ferhat"; } },
{ t: "Hiçbir şeyi değiştirmezsin. Kimseden bir nefes geri almayacaksın.", to: "t1", etki: function(d){ d.ismail_makinede = true; d.ferhat_oldu = true; if(!d.anne_tuttu) d.deniz_oldu = true; d.ikinci_secim = "kimse"; } },
{ t: "Odadaki herkesi çağırırsın: Saniye Hanım, Gülay Hanım, Mert, Ferhat'ın kardeşi. Balonlar elden ele geçecek.", to: "t1", etki: function(d){ d.merhamet++; d.ismail_makinede = true; d.ikinci_secim = "herkes"; } },
{ t: "Tahsin Hoca'ya bir daha ulaşmaya çalışır, kararı yazılı ve onun adıyla istersin.", to: "t1", etki: function(d){ d.kural++; d.ismail_oldu = true; d.deniz_koma = true; d.ferhat_oldu = true; d.yazili_emir = true; d.ikinci_secim = "tahsin"; } }
]},

/* ---------- ELLE KOLU ---------- */
e1: { saat: "00.00", baslik: "Eller", metin: [
P(S("s5D"), "Kimseyi cihaza bağlamayacaktın. Kaan sana baktı, sonra balonu aldı. Songül Abla öbürünü."),
P(S("k1D"), "“Hayır,” dedin sonunda. “İkisini de elle solutacağız.” Kaan'ın yüzünden önce rahatlama geçti, sonra korku."),
P(function(d){ return d.cikardin; }, "İsmail Bey'i cihazdan aldın. Kaan bir şey diyecekti, demedi. Boşalan makine kendi kendine bir alarm çaldı. Susturdun."),
P(function(d){ return d.secen === "sen" && d.devretti; }, "Kaan “Deniz'e” demişti. Sen kararı elinden aldın. Önce rahatladı, sonra sana kızdı, sonra yine rahatladı. Sonunda bir şey demeden balonu eline aldı."),
"İki yatak, iki balon. Makine boş duruyor, ekranında yeşil bir ışık.",
"Sen, Songül Abla, Kaan ve Mert. Dört kişi, iki insan için. Dakikada on iki kez. Yirmi dakikada bir el değiştiriyorsunuz. Mert'e nasıl sıkılacağını gösteriyorsun. Çok hızlı sıkıyor, korkudan, bileğinden tutup yavaşlatıyorsun.",
"Songül Abla balonu sıkarken yüzüne bakmadan söylüyor: “Bu delilik Leyla. Sabaha kadar dayanamayız. Benim bileğimde zaten kist var, biliyorsun.”",
"Bileklerin şimdiden ısınmaya başladı."
], secenekler: [
{ t: "Saniye Hanım'ı da çağırırsın. Eşinin balonunu o tutsun.", to: "e2", etki: { merhamet: 1, saniye_tuttu: true } },
{ t: "Kaan'dan bir saat sonra yeniden değerlendirme sözü alırsın. Bu sonsuza kadar sürmez.", to: "e2", etki: { kural: 1 } },
{ t: "Kimseye bir şey söylemezsin. Sayarsın.", to: "e2" },
{ t: "Songül Abla'ya dönersin: “Haklısın, delilik. Ama hangisini seçeceğimi bilmiyorum.”", to: "e2", etki: { gercek: 1 } }
]},

e2: { saat: "01.00", baslik: "Saat Bir", metin: [
P(S("e1A"), "Saniye Hanım balonu aldı. İlk sıkışta ağladı, ikincide durdu, üçüncüde ritmi buldu. “Düğünde de böyleydi,” dedi, “oyunu bilmiyordum, İsmail ayağıma bastı, öğrendim.”"),
P(S("e1B"), "Kaan söz verdi: bir saat. Saatine baktı ve kronometreyi başlattı. Ekranda sayılar akmaya başladı."),
P(S("e1C"), "Saydın. Bin iki yüz kırk dört. Bin iki yüz kırk beş. Saydığın sürece başka bir şey düşünemiyordun. O yüzden saydın."),
P(S("e1D"), "Songül Abla sana baktı. Kızmadı. “Bilmiyorsan bilmiyorum diyen ilk kişisin,” dedi. “Ötekiler bilir gibi yapar.”"),
"Saat bir. Bir saattir elle nefes veriyorsunuz. Songül Abla'nın sağ eline kramp girdi, sol eliyle devam ediyor. Mert'in parmak uçları morarmış.",
"Deniz'in değerleri düşüyor. Elle verilen hava göğsündeki yarayı aşmaya yetmiyor. İsmail Bey'inkiler de düşüyor, daha yavaş.",
"Sonra İsmail Bey gözlerini açıyor. Balonu tutan ellere bakıyor ve başını iki yana sallıyor, yavaşça. Bir kez, bir kez daha.",
P(function(d){ return d.saniye_tuttu; }, "Balonu tutan Saniye Hanım. Eşi ona hayır diyor. Saniye Hanım'ın elleri duruyor, sonra yine sıkıyor."),
"Kaan fısıldıyor: “Abla. Böyle ikisini de kaybedeceğiz.”"
], secenekler: [
{ t: "İsmail Bey'in isteğine uyarsın: balonu bırakır, Saniye Hanım'la vedalaşmasına izin verirsin. Cihaz Deniz'e.", to: "d2", etki: function(d){ d.cihaz = "deniz"; d.vedalasti = true; d.gercek++; } },
{ t: "Cihazı Deniz'e bağlarsın. İsmail Bey'e elle devam edeceksiniz, dayanabildiğiniz kadar.", to: "d2", etki: function(d){ d.cihaz = "deniz"; d.elde = true; } },
{ t: "Cihazı İsmail Bey'e bağlarsın. İlk o geldi, ilk o yoruldu.", to: "i2b", etki: function(d){ d.cihaz = "ismail"; } },
{ t: "Devam edersiniz. Kimse bırakılmayacak.", to: "e3", etki: { merhamet: 1, israr: true } }
]},

e3: { saat: "01.50", baslik: "Boş Makine", metin: [
"Kimse bırakılmadı. Saat ikiye doğru ellerinizde iki insan var ve makine hâlâ boş.",
"Kapı açılıyor, yine kar. Bir traktör römorkunda, battaniyelere sarılı bir adam: Ferhat, otuz dört yaşında. Soba zehirlenmesi. Üç çocuğu anneannede. Kardeşi onu on iki kilometre getirmiş.",
"Ferhat'ın kanındaki zehir saatlerce makine desteği istiyor. Ama genç ve sağlam. Doğru desteği alırsa sabaha kalkacak türden.",
"Eşit olsun diye boş bıraktığın makinenin yanına şimdi üçüncü bir sedye yanaşıyor.",
"Songül Abla kramp giren eliyle balonu sıkarken: “Leyla. Bu sefer seçeceksin. Sen seçmezsen biri ölecek, o seçmiş olacak.”",
"Kaan duvara yaslanmış, gözleri kızarık. “İstersen ben seçerim,” diyor alçak sesle. “Bir kere seçtim zaten. Alıştım.” Gülmeye çalışıyor, beceremiyor."
], secenekler: [
{ t: "Makineyi Ferhat'a verirsin. En çok kurtulma şansı olana.", to: "t1", etki: function(d){ d.kural++; d.ismail_oldu = true; d.ikinci_secim = "ferhat"; } },
{ t: "Makineyi Deniz'e verirsin. Önce gelen ve en genç olana.", to: "t1", etki: function(d){ d.ismail_oldu = true; d.ferhat_oldu = true; d.ikinci_secim = "deniz"; } },
{ t: "Makine boş kalır. Hastanedeki herkes sabaha kadar balon sıkacak. Üç insan için.", to: "t1", etki: function(d){ d.merhamet++; d.deniz_oldu = true; d.ismail_yasadi = true; d.bos_kaldi = true; d.ikinci_secim = "herkes"; } },
{ t: "“Sen seç,” dersin Kaan'a.", to: "t1", etki: function(d){ d.ismail_oldu = true; d.devretti2 = true; d.ikinci_secim = "kaan"; } }
]},

/* ---------- SABAH ---------- */
t1: { saat: "05.40", baslik: "Sabah", metin: [
"Kar beşe doğru diniyor. Önce kimse fark etmiyor. Sonra biri pencereye bakıyor ve herkes bakıyor. Gökyüzü kurşuni, ışık henüz yok.",
P(function(d){ return d.ismail_oldu && d.vedalasti; }, "İsmail Bey öldü. Balon bırakıldıktan on dört dakika sonra, Saniye Hanım'ın kolunda, gözleri açık."),
P(function(d){ return d.ismail_oldu && d.morfin; }, "İsmail Bey öldü. Yüzü sakin. Kaan şırıngayı hâlâ önlüğünün cebinde taşıyor. Atmayı unutmuş."),
P(function(d){ return d.ismail_oldu && !d.vedalasti && !d.morfin; }, "İsmail Bey öldü. Çarşafı çekildi, monitörü kapandı. Dosyanın son satırına bir saat yazıldı."),
P(function(d){ return d.ismail_makinede; }, "İsmail Bey yaşıyor, makinede. Göğsü kendisine ait olmayan bir ritimle inip kalkıyor. Bir ara gözlerini açıp sana baktı. Babası da ona böyle bakmıştı herhalde."),
P(function(d){ return d.ismail_yasadi; }, "İsmail Bey sabaha çıktı. Makineye hiç bağlanmadı. Maskeyle, kendi nefesiyle, ellerinizin yardımıyla. İstediği oldu."),
P(function(d){ return d.deniz_oldu && d.gozden_kacti; }, "Deniz öldü. Dördü yirmi geçe, herkes Ferhat'ın başındayken tüpü tıkandı. Monitörün alarmı, odadaki öteki seslerin arasında bir dakika boyunca kimsenin kulağına gitmedi."),
P(function(d){ return d.deniz_oldu && d.ikinci_secim === "ferhat" && d.cihaz === "deniz"; }, "Deniz öldü. Cihazı ondan aldıktan bir saat on dakika sonra. “Pupilleri zaten genişlemişti,” diyor Kaan, “zaten kurtulamazdı.” Bu cümleyi bütün sabah birbirinize söylüyorsunuz."),
P(function(d){ return d.deniz_oldu && d.bos_kaldi; }, "Deniz öldü. Elle verilen hava göğsündeki yarayı aşamadı. Boş makine yan yatakta, yeşil ışığıyla sabaha kadar bekledi."),
P(function(d){ return d.deniz_oldu && !d.gozden_kacti && !(d.ikinci_secim === "ferhat" && d.cihaz === "deniz") && !d.bos_kaldi && d.gulay; }, "Deniz öldü. Saat üçte, elle verilen son nefeslerin arasında. Gülay Hanım yanındaydı. Son yarım saatte balonu senin elinden almak istedi, sen vermedin."),
P(function(d){ return d.deniz_oldu && !d.gozden_kacti && !(d.ikinci_secim === "ferhat" && d.cihaz === "deniz") && !d.bos_kaldi && !d.gulay; }, "Deniz öldü. Saat üçte, elle verilen son nefeslerin arasında. Annesi yoldaydı, yetişemedi."),
P(function(d){ return d.deniz_koma; }, "Deniz yaşıyor. Makinede, derin bir uykuda. Beyninde ne kadar hasar olduğunu Kaan bilmiyor. Sabah şehre sevk edilecek."),
P(function(d){ return !d.deniz_oldu && !d.deniz_koma; }, "Deniz yaşıyor. Değerleri sabaha karşı düzeldi. Sevk edilecek, belki ameliyat olacak. Babasına yazdığı kâğıt hâlâ cebinde."),
P(function(d){ return d.ferhat_oldu; }, "Ferhat öldü. Kardeşi bütün gece balonu sıktı. Dörtte elleri durmadı ama nefes durdu. Üç çocuk anneannelerinin evinde, hâlâ uyuyor."),
P(function(d){ return !d.ferhat_oldu; }, "Ferhat yaşıyor. Gözlerini açar açmaz çocuklarını sordu. Kardeşi yatağın kenarında, römorkta donmuş botlarıyla, hıçkıra hıçkıra ağlıyor."),
"Esin'in yerine gelecek sabah hemşiresi telefonla arayıp yolların açılmadığını söylüyor. “Biraz daha idare edin abla.”"
], secenekler: [
{ t: "Ölenlerin yüzünü kendi ellerinle kapatırsın, tek tek.", to: "t1b", etki: { merhamet: 1 } },
{ t: "Gece olanları dakika dakika not etmeye başlarsın, unutmadan.", to: "t1b", etki: { gercek: 1, notlar: true } },
{ t: "Pencerenin önünde durup karın dinişine bakarsın. Hiçbir şey yapmadan.", to: "t1b" },
{ t: "Kaan'ın yanına gidip “Senin suçun değil,” dersin.", to: "t1b", etki: { merhamet: 1, kaan_korundu: true } }
]},

t1b: { saat: "06.20", baslik: "Çay Ocağı", metin: [
P(S("t1A"), "Yüzleri kapattın. Çarşafın kenarını iki kez katlıyorsun, sonra bir kez daha. Ellerin bunu ne zaman öğrendi, hatırlamıyorsun."),
P(S("t1B"), "Bir kâğıda yazdın: saatler, değerler, kim ne dedi. Elin titredi, yazın titremedi. Kâğıdın kenarına bir yerde farkında olmadan küçük bir kar tanesi çizmişsin."),
P(S("t1C"), "Kar dindi. Karşı çatıya bir karga kondu, çatıdaki karı ayağıyla eşeledi, bir şey bulamayıp uçtu."),
P(S("t1D"), "Kaan sana baktı. “Kimin suçu o zaman?” dedi. Cevap veremedin. “Kimsenin değilse niye böyle hissediyorum?” Gözlüğünü çıkarıp önlüğünün ucuyla sildi. Temizlenmedi."),
"Songül Abla çay ocağında iki bardak koymuş. Biri senin. Oturuyorsun. Bir süre ikiniz de bardağınızı çeviriyorsunuz.",
"“Doksan sekizde,” diyor sonra, “böyle bir kış. Bir çocuk, bir kadın, bir makine. Ben seçtim, doktor imzaladı. Kadını seçtim. Çocuğun anası koridorda bana bir şey dedi. Yirmi beş yıldır kimseye söylemedim ne dediğini.”",
"Çayını karıştırıyor. Kaşık bardağa vurup duruyor. Şeker çoktan erimiş.",
"“Bu işte iki türlü hemşire var Leyla. Unutanlar, sayanlar. Unutanlar daha çok dayanıyor. Ben sayıyorum. Yirmi beş yılda on bir. Sen bu gece kaç tane saydın?”"
], secenekler: [
{ t: "Saydıklarını söylersin, isim isim.", to: "t2", etki: { gercek: 1 } },
{ t: "Unutmayı nasıl öğrendiğini sorarsın.", to: "t2", etki: { unut: true } },
{ t: "Kimseye söylemediği o cümleyi sorarsın: “Ne dedi kadın?”", to: "t2", etki: { merhamet: 1, cumle: true } },
{ t: "Çayını bitirip kalkarsın. Tutanak bekliyor.", to: "t2", etki: { kural: 1 } }
]},

t2: { saat: "07.30", baslik: "Tutanak", metin: [
P(S("t1bA"), "Saydıklarını söyledin. Songül Abla her isimde çay bardağını biraz daha kendine çekti. “On iki yılda bu kadar mı?” dedi. “Şanslıymışsın.” Gülmedi."),
P(S("t1bB"), "“Öğrenilmiyor ki,” dedi Songül Abla. “Kendiliğinden oluyor. Bir gün birinin yüzünü hatırlayamadığını fark ediyorsun, o gün de kendine kızıyorsun.”"),
P(S("t1bC"), "Songül Abla kaşığı bıraktı. “‘Sizi affediyorum’ dedi,” dedi. “Hepsi bu. Bağırsaydı, tükürseydi, belki geçerdi. Affetti. Ben de yirmi beş yıldır ne yapacağımı bilmiyorum.”"),
P(S("t1bD"), "Kalktın. Songül Abla arkandan bir şey söylemedi. Senin bardağın masada, dibinde karıştırılmamış şeker."),
"Yediyi yirmi geçe kar küreme aracının arkasından Tahsin Hoca geliyor. Montu omuzlarına atılmış, yanağında yastık izi. Önce dosyalara, sonra sana bakıyor.",
"“Olay tutanağı lazım,” diyor. “Bugün müdürlük isteyecek, yarın belki savcılık. Yakınlar şikâyet edebilir.” Sesini alçaltıyor. “Şöyle yazalım: cihaz arızası nedeniyle yeterli destek sağlanamadı, hastalar standart tedaviyi aldı. Kim kime bağlandı, saatler, gerekçeler... onlara girmeyelim. Seçim yapılmış gibi durmasın. Arızalı cihaz zaten gerçek, değil mi? Kimse yalan söylemiyor ki.”",
P(function(d){ return d.yazili_emir; }, "Gece istediğin yazılı talimat telefonunda duruyor: Tahsin Hoca'nın iki satırlık mesajı. Tutanağa girerse onun adı da girer. Hoca mesajdan hiç söz etmiyor."),
P(function(d){ return d.devretti || d.devretti2; }, "Kaan da odada. Gece kararlardan en az birinin onun ağzından çıktığını üçünüz de biliyorsunuz. Kaan pencereye bakıyor."),
"Tahsin Hoca kalemi sana uzatıyor. “Sen yaz Leyla Hanım. Hepsini sen gördün.”"
], secenekler: [
{ t: "Her şeyi olduğu gibi yazarsın: kim, hangi saatte, neye dayanarak karar verdi.", to: "t3", etki: { gercek: 2, tutanak: "gercek" } },
{ t: "Hocanın dediği gibi yazarsın. Kurum korunur, kimse yanmaz.", to: "t3", etki: { kural: 1, ortbas: true, tutanak: "ortbas" } },
{ t: "Bütün kararları kendi adına yazarsın. Kaan'ın adı geçmez.", to: "t3", etki: { merhamet: 1, gercek: 1, ustlendi: true, tutanak: "ustlendi" } },
{ t: "Kalemi geri verirsin: “Tutanağı hekim yazar hocam. Ben imzalamam.”", to: "t3", etki: { kural: 1, reddetti: true, tutanak: "reddetti" } }
]},

t3: { saat: "08.15", baslik: "Koridor", metin: [
P(S("t2A"), "Yazdın. Saat saat, karar karar. Tahsin Hoca okudu, katlayıp cebine koydu. “Bunun bir bedeli olacak,” dedi. “Sana da.” Sesinde tehdit yoktu. Yorgundu."),
P(S("t2B"), "Yazdın. Cümleler kendiliğinden geldi. Bu dili yıllardır biliyorsun. Tahsin Hoca okudu. “İyi,” dedi. “Herkes için iyi.” İmzanın altına tarih atarken kalemin mürekkebi bitti; Kaan kendi kalemini uzattı."),
P(S("t2C"), "Bütün kararları senin verdiğini yazdın. Kaan okudu, yüzü bembeyaz oldu. “Bunu yapamazsın,” dedi. “Yaptım,” dedin. Kâğıdı elinden almaya kalktı; Tahsin Hoca daha hızlıydı."),
P(S("t2D"), "Kalemi geri verdin. Tahsin Hoca bir süre baktı, sonra kendisi yazdı. Ne yazdığını görmedin. Kâğıdı imzalamadın. O boş imza yeri yıllarca aklına gelecek."),
"Koridorda sabah. Nöbet değişimi, yeni yüzler, kantinden gelen poğaça kokusu. Ve plastik sandalyelerde bekleyenler.",
P(function(d){ return d.ismail_oldu; }, "Saniye Hanım montunu giymiş, termosu kucağında. Seni görünce kalkıyor, termosu uzatıyor: “Çayı içemedim. Sen iç kızım. Dökmeyeyim boşuna.”"),
P(function(d){ return d.ismail_makinede; }, "Saniye Hanım eşinin camının önünde, makinenin her nefesinde dudakları kıpırdıyor. Sana dönüyor: “Ne kadar böyle kalacak?” Bilmiyorsun. Babasının üç ayını düşünüyorsun."),
P(function(d){ return d.ismail_yasadi; }, "Saniye Hanım eşinin yanında uyuyakalmış. Başı yatağın kenarında, ağzı açık. Uyandırmıyorsun."),
P(function(d){ return d.deniz_oldu && d.gulay; }, "Gülay Hanım koridorun sonunda, duvara yaslanmış. Seni görüyor. Ne bağırıyor ne ağlıyor. Bakıyor, o kadar."),
P(function(d){ return d.deniz_oldu && !d.gulay; }, "Deniz'in annesi Gülay Hanım az önce geldi. Kimse henüz söylemedi. Kaan'ın yüzüne bakıyor. Kaan seninkine."),
P(function(d){ return !d.deniz_oldu; }, "Gülay Hanım oğlunun sevk evraklarını imzalıyor. Adını iki kez yanlış yazıp üstünü karalıyor. Seni görünce kalemi bırakıp sana sarılıyor. Kollarını nereye koyacağını bilemiyorsun."),
P(function(d){ return d.ferhat_oldu; }, "Ferhat'ın kardeşi pencere kenarında, römorkta donmuş botlarıyla. Dudakları kıpırdıyor. Çocuklara ne diyeceğini prova ediyor."),
P(function(d){ return !d.ferhat_oldu; }, "Ferhat'ın kardeşi telefonda çocuklarla konuşuyor: “Babanız iyi. Uyandı. Valla uyandı.” Her cümlede sesi biraz daha yükseliyor.")
], secenekler: [
{ t: "Bekleyenlerin yanına oturup dinlersin. Ne söylerlerse.", to: "t4", etki: { merhamet: 1 } },
{ t: "Yüzlerine bakamazsın. Çıkış kapısına yürürsün.", to: "sv_otogar", etki: { kacti: true } },
{ t: "Her birine gece olanları kendi ağzınla anlatırsın. Başkasından duymasınlar.", to: "sv_anlatmak", etki: { gercek: 1 } },
{ t: "Songül Abla'yı bulup ona sarılırsın.", to: "t4", etki: { songul: true } }
]},

t4: { saat: "09.00", baslik: "Dönüş", metin: [
P(S("sv_otogarA"), "Mert'e babanı anlattın. Bu salonu, dört dakika ileri saati, adını sormadığın hemşireyi. Mert dinledi. “Belki o da sizi düşünmüştür abla,” dedi. Otobüsü geldi. Binerken çantasını unuttu, koşup aldı, el salladı."),
P(S("sv_otogarB"), "Elini koluna koydun. Kol önce direndi, sonra indi. Mert koluna baktı, bir yabancının koluymuş gibi. “Uyuşmuş,” dedi ve güldü. Burnunu çekti."),
P(S("sv_otogarC"), "“Kendi ağzımla,” diye tekrarladı Mert. Sonra telefonunu çıkarıp bir numaraya uzun uzun baktı. Aramadı. Henüz."),
P(S("sv_otogarD"), "Otogardan hastaneye yürüdün. Yarı yolda bir fırının önünde durdun, simit aldın, yemedin."),
P(S("sv_anlatmakA"), "Doğruyu söyledin. Kadın gözlerini kapadı. Bir süre sonra “Sağ ol,” dedi. “Herkes bana yalan söylüyordu, yüzlerinden belliydi.”"),
P(S("sv_anlatmakB"), "Yalan söyledin. Kadının yüzü yumuşadı. Kalkarken sana teşekkür etti, sonra bir daha etti. İkincisinde gözlerine bakamadın."),
P(S("sv_anlatmakC"), "“Bilmiyorum,” dedin. Kadın uzun uzun baktı. “Ben de bilmeyeyim o zaman,” dedi ve mendil kutusundan bir mendil alıp katladı, cebine koydu."),
P(S("sv_anlatmakD"), "Elini tuttun, sustun. Kadın cevabı senin yüzünde aradı. Neyi bulduysa, bir süre sonra kalktı ve paltosunu ilikledi."),
P(S("t3A"), "Oturup dinledin. Söylenenlerin çoğu sana bir şey ifade etmiyordu: bir düğün fotoğrafı, ikinci el bir bisiklet, bir tarlanın sınır taşı. Hepsini dinledin."),
P(S("t3B"), "Kapıdan çıktın. Arkanda biri adını söyledi. Dönmedin. Ya da söylemedi. Emin değilsin."),
P(S("t3C"), "Anlattın. Bir kez, iki kez, üç kez. Her anlatışta cümleler biraz daha düzgün çıktı. Üçüncüde hiç takılmadan anlattığını fark edip durdun."),
P(S("t3D"), "Songül Abla'ya sarıldın. Önce kaskatıydı, eli havada kaldı. Sonra sırtına iki kez vurdu, bir annenin çocuğun gazını çıkarması gibi."),
"Dışarıda kar dizine kadar. Otobüs çalışmıyor, yürüyorsun. Her adımda ayağın batıyor, botunun içine kar doluyor. Deliğin üstüne koyduğun karton çoktan ıslandı.",
"Hastanenin önündeki köprüde duruyorsun. On dört yıl önce, babanın öldüğü sabah, bu köprüden geçmiştin. Elini tutan o hemşire de o sabah bir yerden eve yürüdü herhalde. Belki bu köprüden. Belki o da babanı biri yüzünden bırakmıştı, sonra gelip yanına oturmuştu.",
"Köprünün altından dere akıyor. Kenarları buz tutmuş, ortası akıyor."
], secenekler: [
{ t: "Eve gidip uyursun. Yarın akşam yine nöbettesin.", to: "son", etki: { devam: true } },
{ t: "Eve varınca istifa dilekçeni yazarsın.", to: "son", etki: { istifa: true } },
{ t: "Mezarlığa, babanın mezarına gidersin. Kar dizine kadar olsa da.", to: "son", etki: { mezar: true, merhamet: 1 } },
{ t: "Geri dönersin. Hastanede birinin yanında oturman lazım.", to: "son", etki: { geri: true, merhamet: 1 } }
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
P(S("t4A"), "O sabah eve gidip uyudun. On dört saat. Akşam yine nöbetteydin."),
P(S("t4B"), "O sabah eve varınca istifa dilekçeni yazdın. Bir sayfa, kısa."),
P(S("t4C"), "O sabah kar dizine kadarken babanın mezarına gittin. Taşın üstündeki karı elinle süpürdün."),
P(S("t4D"), "O sabah geri döndün. Birinin yanında oturman gerekiyordu."),
"Tutanak müdürlükte bir dosyaya girdi, dosya bir dolaba, dolap arşive. Şikâyet edenler “cihaz arızası” yazısını görünce geri çekildi. Yedek parça iki ay sonra geldi. Kutusunu sen açtın.",
"Tahsin Hoca bir yıl sonra başhekim yardımcısı oldu. Kaan uzmanlığını bitirip başka bir şehre gitti. Veda yemeğinde senin karşına oturmadı. Songül Abla emekli oldu, emeklilik pastasını kesmeden önce sana bir dilim ayırdı.",
"Sen çalışmaya devam ettin. Uyuyabildin bile, çoğu gece.",
"Yıllar sonra bir nöbette, genç bir hemşire mutfakta bardakları kurularken soruyor: “Abla, sen hiç seçmek zorunda kaldın mı?”",
"Ağzını açıyorsun. Cümle hazır: “Bizde öyle şeyler olmaz, protokol belli.”",
"Kız başını sallıyor, bardağı dolaba kaldırıyor. Sen elindeki havluyu katlıyorsun, açıyorsun, yine katlıyorsun."
]},

son_onluk: { son: true, baslik: "Askıdaki Önlük", metin: [
P(S("t4A"), "O sabah eve gidip uyudun. On dört saat. Akşam yine nöbetteydin."),
P(S("t4B"), "O sabah eve varınca istifa dilekçeni yazdın. Bir sayfa, kısa."),
P(S("t4C"), "O sabah kar dizine kadarken babanın mezarına gittin. Taşın üstündeki karı elinle süpürdün."),
P(S("t4D"), "O sabah geri döndün. Birinin yanında oturman gerekiyordu."),
"Dilekçe üç satır sürdü. “Kişisel nedenlerle.” O iki kelimeyi bulmak bir saatini aldı.",
"Önlüğün kapının arkasındaki askıda kaldı. Yıkanmış, ütülenmiş. Bir ay her sabah ona baktın. Sonra dolaba kaldırdın, sonra bir poşete koydun, sonra poşet bir taşınmada kayboldu.",
"Bir kırtasiyede iş buldun. Kimse senden bir şey seçmeni istemiyor. Mavi kapak mı kırmızı kapak mı, o kadar. Bazen bir çocuk iki defter arasında kalıyor, annesi “Hadi ama!” diye söyleniyor. Sen karışmıyorsun. Çocuk seçene kadar bekliyorsun.",
"Kış gelince pencereye bakıyorsun. Kar başladığında, hiçbir yerde nöbette olmasan da, parmakların tezgâhın üstünde kendi kendine bir ritim tutuyor. Dakikada on iki.",
"Bir gün dükkâna yaşlı bir kadın giriyor, torununa boyama kitabı alıyor. Parayı uzatırken elinde çiçekli bir termos var. Saniye Hanım değil. Değil işte. Yine de kadın gidene kadar elin kasada, para üstünü vermeyi unutuyorsun."
]},

son_nefes: { son: true, baslik: "Başkasının Nefesi", metin: [
P(S("t4A"), "O sabah eve gidip uyudun. On dört saat. Akşam yine nöbetteydin."),
P(S("t4B"), "O sabah eve varınca istifa dilekçeni yazdın. Bir sayfa, kısa."),
P(S("t4C"), "O sabah kar dizine kadarken babanın mezarına gittin. Taşın üstündeki karı elinle süpürdün."),
P(S("t4D"), "O sabah geri döndün. Birinin yanında oturman gerekiyordu."),
"İsmail Bey makinede yetmiş üç gün yaşadı.",
"Saniye Hanım her gün geldi. Termosuyla, aynı plastik sandalyede. Bazen eşine gazete okudu, spor sayfasını atlayarak. Bir gün sana “Babası da üç ay kalmıştı,” dedi. “O zaman İsmail'e kızardım, her gün gidiyorsun diye. Şimdi anlıyorum.”",
"İsmail Bey birkaç kez gözlerini açtı. Her seferinde sana baktı. Her seferinde ne demek istediğini anlamaya çalıştın, anlamadın.",
"Yetmiş üçüncü gün öldü. Kar yoktu. Nisandı, hastane bahçesindeki erik çiçek açmıştı. Cenaze rahat kalktı. “Babası öyle isterdi,” diye düşündün, sonra düşündüğüne kızdın.",
"Saniye Hanım son gün termosu sana bıraktı. “Ben artık kime koyacağım,” dedi. Termos hâlâ hemşire odasında, kimse kullanmıyor, kimse de atmıyor."
]},

son_kayit: { son: true, baslik: "Kayıt", metin: [
P(S("t4A"), "O sabah eve gidip uyudun. On dört saat. Akşam yine nöbetteydin."),
P(S("t4B"), "O sabah eve varınca istifa dilekçeni yazdın. Bir sayfa, kısa."),
P(S("t4C"), "O sabah kar dizine kadarken babanın mezarına gittin. Taşın üstündeki karı elinle süpürdün."),
P(S("t4D"), "O sabah geri döndün. Birinin yanında oturman gerekiyordu."),
"O gecenin her dakikası bir kâğıtta. Kendi el yazınla, saatleriyle, isimleriyle.",
"Soruşturma açıldı. Neden o, neden o saatte, neden yazılı talimat yok. Bazı sorular sana, bazıları Kaan'a, bazıları Tahsin Hoca'ya. Bazıları hiç sorulmadı. Cevabı herkesi yakacaktı.",
"Altı ay sonra bir uyarı cezası aldın. Tahsin Hoca başka bir hastaneye tayin edildi. Yedek parça soruşturmanın ikinci haftasında geldi. Teslim tutanağını da sen imzaladın.",
"Bir gün koridorda biri yanına yaklaştı; Saniye Hanım mı, Gülay Hanım mı, Ferhat'ın kardeşi mi, o kadar yorgundun ki şimdi hatırlamıyorsun. “Okudum,” dedi. “Sağ ol.” Elinde ikiye katlanmış, kenarları yumuşamış bir fotokopi vardı.",
"Kâğıdın bir kopyası çekmecende duruyor. Bazen çıkarıp okuyorsun. Her seferinde başka bir satırda duruyorsun. Bir keresinde bütün gece “23.40” yazan satırda kaldın."
]},

son_el: { son: true, baslik: "Bir El", metin: [
P(S("t4A"), "O sabah eve gidip uyudun. On dört saat. Akşam yine nöbetteydin."),
P(S("t4B"), "O sabah eve varınca istifa dilekçeni yazdın. Bir sayfa, kısa."),
P(S("t4C"), "O sabah kar dizine kadarken babanın mezarına gittin. Taşın üstündeki karı elinle süpürdün."),
P(S("t4D"), "O sabah geri döndün. Birinin yanında oturman gerekiyordu."),
"O geceden sonra bir alışkanlık edindin: ölmekte olan hastanın elini tutuyorsun. Protokolde yok, kimse istemiyor.",
"Bazen beş dakika, bazen bir saat. Bir keresinde yaşlı bir adam gözlerini açıp “Sen kimsin?” dedi. “Hemşire,” dedin. “Adın ne?” Söyledin. Adını söylemeyi de yeni yapıyorsun.",
"Arkadaşların seni bu yüzden biraz tuhaf buluyor. Esin bir gün “Abla, sen o elleri tutarken nöbet listesi kendini yazmıyor ama,” diye takıldı. Sonra senin yerine iki ilaç saatini kendi üstlendi.",
"On dört yıl önce adını hiç sormadığın bir hemşire babanın elini tuttu. Sen o kadını hiç görmedin. Ama bazen bir hastanın elini bırakmak üzereyken onun elini bıraktığını hayal ediyorsun ve bir dakika daha tutuyorsun.",
"Kar yağdığında hâlâ pencereye bakıyorsun. Sonra cebinden el kremini çıkarıp ellerine sürüyorsun. Kış geldi mi elin kuruyor, çatlıyor, kimsenin eline öyle dokunmak istemiyorsun."
]},

son_sayanlar: { son: true, baslik: "Sayanlar", metin: [
"Ertesi akşam yine nöbetteydin. Ondan sonraki akşam da.",
"O geceden kimseye bahsetmedin. Bu koridorda herkesin bir gecesi var. Songül Abla emekli olurken sana katlanmış bir kâğıt verdi. Üstünde on bir isim. “Bunları ben sayıyordum,” dedi. “Sende dursun. Okumak zorunda değilsin.”",
"Okudun. Altına kendi isimlerini ekledin. Tükenmezin rengi farklı çıktı. Bir sonraki kış bir isim daha. Bir sonrakinde iki.",
"Bir gece genç bir hemşire soruyor: “Abla, nasıl dayanıyorsun?” Kâğıdı gösteriyorsun. Okuyor, anlamıyor. “Bunlar kim?” diyor. “Hastalar,” diyorsun. Kız kâğıdı geri veriyor, bir şey daha soracak gibi olup vazgeçiyor. O sırada bir monitör ötüyor ve ikiniz birden kalkıyorsunuz."
]}

},

ayna: function(d){
  var out = [];
  var m = d.merhamet, k = d.kural, g = d.gercek;
  if(m >= k && m >= g) out.push("Bu gece en çok yanındaki insana yaslandın: bir ele, bir yüze. Kurallar da gerçekler de bir adım geride kaldı.");
  else if(k >= g) out.push("Bu gece en çok çizgilere yaslandın: protokol, sıra, yetki. Seni ayakta tutan onlardı.");
  else out.push("Bu gece en çok gerçeğe yaslandın: söylenmesi zor olanı söyledin, yazılması zor olanı yazdın.");
  if(d.devretti || d.devretti2) out.push("Bir noktada kararı başkasına bıraktın.");
  if(d.istek === "sakli") out.push("İsmail Bey'in son isteğini yalnızca sen duydun ve kimseye söylemedin.");
  if(d.cikardin) out.push("Birine verilmiş bir nefesi geri aldın.");
  if(d.bos_kaldi) out.push("Kimseyi seçmemek için makineyi boş bıraktın.");
  if(d.ustlendi) out.push("Bütün kararları kendi adına yazdın; Kaan'ın adı hiçbir yerde geçmedi.");
  if(d.kacti) out.push("Sabah bekleyenlerin yüzüne bakamadın.");
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
