(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "son-vardiya",
baslik: "Son Vardiya",
dunya: "Gerçek dünya",
kategoriler: ["Sağlık ve Tıp"],
giris: "Doğu Anadolu'da küçük bir ilçe hastanesi. Öğleden beri yağan kar bütün yolları kapatmış, ne ambulans gelebiliyor ne helikopter kalkabiliyor. Sen on iki yıldır yoğun bakımda çalışan bir hemşiresin ve daha önlüğünü giymeden asıl derdin ne olduğunu öğreniyorsun: servisteki solunum cihazlarından yalnızca biri boşta. Dört numarada nefesi gittikçe daralan yaşlı bir öğretmen yatıyor, yolda da kaza geçirmiş genç bir asker var. Sabaha kadar sürecek bu gecede doğru cevabın olmadığı bir kararı birinin vermesi gerekecek.",
kavramlar: ["Trajik ikilem", "Ödev ve fayda", "Ahlaki yara", "Ölümle yüzleşme"],
ozet: "Kar yolları kapatmış, küçük bir ilçe hastanesinin yoğun bakımında tek bir solunum cihazı boşta kalmış. Gece daha yeni başlıyor ve nöbetçi hemşire sensin.",
baslangic: "s1",
durum: { merhamet: 0, kural: 0, gercek: 0 },

sahneler: {

s1: { saat: "19.10", baslik: "Kar", metin: [
"Kar öğleden beri hiç durmadan yağıyor. Saat yediyi on geçe yoğun bakımın kapısını itip içeri girdiğinde gözlüğün buğulanıyor, önlüğünün ucuyla silip pencereye bakıyorsun ama dışarıda görecek bir şey kalmamış, sokak lambaları bile karın içinde kaybolup gitmiş.",
"On iki yıldır bu serviste çalışıyorsun Leyla, böyle bir kışı pek hatırlamıyorsun. Gündüzcü hemşire Esin montunun fermuarını çekerken bir yandan da anlatıyor: “Abla yollar kapandı, duydun mu? Ambulans yok, helikopter yok, kimse gelemez gidemez. Ne olursa artık bizim başımıza.” Kapıdan çıkarken aklına gelmiş gibi dönüyor. “Bu arada dört numaranın hanımı akşamdan beri koridorda oturuyor. Termosla çay getirmiş, kimse almadı, kadıncağız bozuldu. Sen bir bardak al bari, gönlü olsun.”",
"Serviste altı yatak var, dördü dolu. Beş solunum cihazının biri üç haftadır bozuk duruyor, yedek parçası her sorduğunda “yolda” deniyor. Kalan dört cihazın üçü hastalara bağlı, biri boşta.",
"Dört numarada İsmail Bey yatıyor, seksen bir yaşında, emekli bir tarih öğretmeni. Maskenin altında dudakları kıpırdıyor, ne dediğini anlamak için eğildiğinde “Bin yetmiş bir, Malazgirt,” dediğini duyuyorsun. Aklı yerinde, ateşi de yok, kendi kendine ders anlatıyor. Ama satürasyonu akşamdan beri ikişer ikişer düşmüş, şimdi doksanda.",
"Koridordaki plastik sandalyede eşi Saniye Hanım oturuyor, kucağında çiçekli bir termos. Seni görünce hemen ayağa kalkıp termosun kapağını açıyor, sonra çekinip geri kapatıyor.",
"Nöbetçi doktor Kaan yirmi yedi yaşında, uzmanlığının daha ikinci yılında. Seni görünce rahatladığını saklamıyor: “Abla, iyi ki geldin, valla iyi ki geldin.” Songül Abla ise ilaç dolabının önünde ampulleri sayıyor, sana dönüp bakmadan konuşuyor: “Dört numaraya bir bak Leyla. Ben beğenmedim onu.”"
], secenekler: [
{ t: "Kurala aldırmadan Saniye Hanım'ı içeri alırsın, eşinin yanında otursun.", to: "s2", etki: { merhamet: 1, saniye_iceride: true } },
{ t: "Kaan'a dört numaranın değerlerini gösterip entübasyon setini hazırlatırsın.", to: "s2", etki: { kural: 1 } },
{ t: "İsmail Bey'in yanına oturup ne istediğini kendisine sorarsın.", to: "s2", etki: { gercek: 1 } },
{ t: "Songül Abla'nın yanına gidip ampulleri onunla birlikte sayarsın.", to: "s2", etki: { songul: true } }
]},

s2: { saat: "21.30", baslik: "İki İstek", metin: [
P(S("s1A"), "Saniye Hanım içeri girerken ayakkabılarını çıkarmaya kalktı, “Gerek yok teyze,” dedin ama yine de parmaklarının ucuna basarak yürüdü. Şimdi yatağın kenarında, çantasını kucağından indirmeden oturuyor. Pek konuşmuyorlar, İsmail Bey arada bir elini çarşafın altından çıkarıp karısının dizine koyuyor."),
P(S("s1B"), "Kaan değerlere bakıp dudağını ısırdı, “Bana sabaha kadar idare eder gibi geldi abla,” dedi. Sen yine de seti hazırladın, tepsiye dizip üstüne bir gazlı bez örttün ve köşeye kaldırdın."),
P(S("s1C"), "Yanına oturup “İsmail Bey, beni duyuyor musunuz?” diye sordun. Gözlerini açtı. “Duyuyorum kızım, bir kulağım sağlam kaldı, onu da laf dinlemek için saklıyorum.” Maskenin altında güldüğünü gözlerinden anladın."),
P(S("s1D"), "Ampulleri birlikte saydınız, dopamin dört kutu, adrenalin on iki, midazolam yedi. Son kutuyu kapatırken Songül Abla omzuyla omzunu dürttü. “Dört numaranın gözünde bir şey var,” dedi. “Bizim rahmetlinin gözünde de vardı, son haftasında.”"),
"Dokuz buçukta satürasyon seksen yediye iniyor. Maskeyi düzeltmek için eğildiğinde İsmail Bey bileğini yakalıyor, parmakları buz gibi ama sandığından çok daha güçlü.",
"“Babamı da bağlamışlardı o makineye,” diyor, iki üç kelimede bir durup nefes alarak. “Üç ay ağzında boruyla yattı, konuşamadı. Gözleriyle bana bir şey anlatmaya çalışıyordu, ben anlayamadım. Kırk yıl geçti, hâlâ anlamış değilim.” Biraz soluklanıyor. “Beni bağlamayın kızım.”",
"Sonra başını kapıya, koridordaki sandalyeye doğru çeviriyor. “Ama Saniye'yi de yalnız bırakmayın. O yalnız duramaz. Bir akşam işten geç geldim diye karakola gitmişti, düşün.”",
"Bunların hiçbiri bir kâğıda yazılmış değil. Dosyada imzalı bir tedavi reddi yok, odada da senden başka duyan kimse yok.",
P(S("s1A"), "Daha doğrusu bir kişi daha duydu. Saniye Hanım çantasının sapını iki eliyle sıkıp bıraktı, sonra yine sıktı."),
"Monitör aynı perdeden ötüp duruyor, kimse sesini kısmayı akıl etmemiş."
], secenekler: [
{ t: "Dosyaya yazarsın: “Hasta mekanik ventilasyon istemediğini sözlü olarak belirtti.” Altına saati ve imzanı atarsın.", to: "s3", etki: { kural: 1, gercek: 1, istek: "yazili" } },
{ t: "Kimseye söylemezsin. Nefesi daralmış, korkmuş yaşlı bir adam bu, sabah ailesiyle doktoru karar verir.", to: "s3", etki: { istek: "sakli" } },
{ t: "Kaan'ı çağırırsın, bunu onun da kendi kulağıyla duyması lazım.", to: "s3", etki: { kural: 1, istek: "kaan" } },
{ t: "Saniye Hanım'a dönüp sorarsın: “Hep böyle mi derdi?”", to: "s3", etki: { merhamet: 1, istek: "saniye" } }
]},

s3: { saat: "22.40", baslik: "Telefon", metin: [
P(S("s2A"), "Notu dosyaya mavi tükenmezle, o yuvarlak el yazınla yazdın. Hemen altında saatlik idrar takibi duruyor, kırk cc. Aynı sayfaya, aynı kalemle."),
P(S("s2B"), "Kimseye anlatmadın ama her alarm çaldığında başını kaldırıp dört numaraya bakıyorsun, biri adını seslenmiş gibi."),
P(S("s2C"), "Kaan dinledi, ensesini kaşıdı. “Akut dönemde hastanın beyanı biraz tartışmalı abla,” dedi, ders kitabından okur gibi. Dosyayı kapattı, bir şey yazmadı."),
P(S("s2D"), "Saniye Hanım termosun kapağıyla oynadı. “Hep derdi,” dedi. “Ama her sabah çalar saati de kendi kurardı, beni o uyandırsın diye. Hem ölmeyi düşünür hem de sabahı düşünürdü, ne bileyim ben şimdi.” Kapağı kapattı. “Siz ne derseniz o kızım. Ben kırk yıldır onsuz bir şeye karar vermedim ki şimdi vereyim.”"),
"On biri yirmi geçe telefon çalıyor, arayan jandarma. Kara yolunda bir araba takla atmış, içinde izne gelen on dokuz yaşında bir asker varmış, adı Deniz. Kafasını vurmuş, göğsü de ezilmiş, nefes almakta zorlanıyormuş. Paletli kar aracıyla getiriyorlar, kırk dakikaya burada olurlar.",
"Kaan ahizeyi yerine koyuyor, oturamıyor, ahizeyi kaldırıp bir daha koyuyor. “Abla cihaz,” diyor. “Bir tane cihazımız var.”",
"Arkadan Songül Abla sesleniyor: “Dört numara seksen ikiye düştü.”",
"Kimse yüksek sesle söylemiyor ama hepiniz aynı hesabı yapıyorsunuz. Birisi seksen bir yaşında, burada yatıyor, nefesini tek tek sayıyorsun. Öteki on dokuz yaşında ve adını beş dakika önce duydun."
], secenekler: [
{ t: "Servis şefi Tahsin Hoca'yı evden aratırsın. Bu karar ne senin ne de Kaan'ın vereceği bir karar.", to: "s4", etki: { kural: 1 } },
{ t: "“İsmail Bey'i şimdi bağlayalım,” dersin. Burada yatan, yolda olandan önce gelir.", to: "s4", etki: { erken: "ismail" } },
{ t: "Cihazı boş tutarsınız, İsmail Bey'i maskeyle idare edip Deniz'i beklersiniz.", to: "s4", etki: { erken: "bos" } },
{ t: "Songül Abla'ya dönüp sorarsın: “Sen olsan ne yapardın?”", to: "s4", etki: { songul: true, songul_sordu: true } }
]},

s4: { saat: "22.55", baslik: "Uzaktaki Ses", metin: [
P(S("s3A"), "Kaan numarayı tuşlarken iki kere yanlış bastı, telefon ancak üçüncüsünde çaldı."),
P(S("s3B"), "Kaan entübasyonu senin elinin üstünde yaptı. Onun eli titriyordu, seninki de titriyordu ama daha az. Şimdi İsmail Bey'in göğsü makinenin temposuyla inip kalkıyor. Saniye Hanım kapının camından baktı, camı buğulandırmasın diye ağzını eliyle kapatmıştı."),
P(function(d){ return d.son === "s3B" && d.istek; }, "Daha bir buçuk saat önce “Beni bağlamayın,” demişti. Makine her nefeste küçük bir tık sesi çıkarıyor, on iki yıldır bu sesi hiç bu kadar duymamıştın."),
P(S("s3C"), "Cihaz boşta bekliyor, ekranı yeşil yanıyor, arada bir kendi kendine test yapıp bipliyor. İsmail Bey'in maskesini bir kez daha sıkıştırdın ama sıkıştıracak yer kalmamıştı."),
P(S("s3D"), "Songül Abla omuz silkti. “Ben olsam mı? Ben olsam yirmi beş yıl önce öğretmen olurdum, anam öyle istiyordu.” Sonra sesini alçalttı. “Gence verirsen ihtiyarın yüzü ömür boyu peşini bırakmaz, ihtiyara verirsen çocuğun anası bırakmaz. Hangisiyle yatıp kalkabileceksen ona ver. Bunun başka hesabı yok kızım.”"),
"Tahsin Hoca'ya sonunda ulaşılıyor. Adam altmış kilometre ötede, evinde oturuyor, arkada televizyon açık, bir yarışma programı oynuyor, biri doğru cevabı bilmiş, alkışlıyorlar.",
"Kaan anlatmaya başlar başlamaz Hoca lafını kesiyor: “Protokol belli Kaan, sağkalım şansı yüksek olana. Ben buradan hastayı göremem ki.” Kaan “Hocam, yazılı bir talimat verseniz—” diyecek oluyor ama Hoca bırakmıyor: “Gece yarısı ne yazılısı oğlum? Leyla Hanım orada değil mi? Tecrübeli kadın, beraber karar verin işte.” Arkada yine alkış kopuyor, sonra hat cızırdayıp kesiliyor.",
"Kaan ahizeyi bırakıp sana dönüyor, “Abla,” diyor, devamını getirmiyor. Getirmesine de gerek yok zaten."
], secenekler: [
{ t: "“Karar senin, ben uygularım,” dersin Kaan'a.", to: "bk", etki: { kural: 1, sinir: true } },
{ t: "Kaan'ın omzunu tutup “Beraber vereceğiz,” dersin.", to: "bk", etki: { merhamet: 1, birlikte: true } },
{ t: "Koridora çıkıp Saniye Hanım'a her şeyi olduğu gibi anlatırsın.", to: "sv_saniye", etki: { gercek: 1, saniye_bilir: true } },
{ t: "Hiç konuşmadan ambu balonlarını ve yedek tüpleri hazırlamaya koyulursun.", to: "sv_depo", etki: { hazir: true } }
]},

bk: { saat: "23.10", baslik: "Bekleyiş", metin: [
P(S("sv_saniyeA"), "Saniye Hanım her şeyi Kaan'a da anlattı, eşine ettiği yemini, kırk yılı. Kaan bu sefer dinleyip yazdı, notun altına Saniye Hanım'ın adını da ekledi."),
P(S("sv_saniyeB"), "Elini tuttun, Saniye Hanım da cümlesini bitirmedi. Parmakları bir süre avucunun içinde kıpırdandı, sonra durdu."),
P(S("sv_saniyeC"), "“Haklısın kızım,” dedi. Rahatladı mı, yoksa kırıldı mı, yüzünden anlayamadın. Termosu yine kucağına aldı."),
P(S("sv_saniyeD"), "Saniye Hanım içeri girip eşinin kulağına eğildi. İsmail Bey'in eli kalktı, karısının yanağına değip yeniden yatağa düştü. Ne konuştuklarını hiçbir zaman öğrenemeyeceksin."),
P(S("sv_depoA"), "Eski çocuk servisinde, el feneriyle, nefesinin buhar olup çıktığı bir odada küçük bir cihazın arkasını söktün. Vidalardan biri yuvarlanıp radyatörün altına kaçınca yere yatıp aradın, sonunda buldun. Merdivenleri koşarak çıkarken valf avucundaydı ama uyup uymayacağını bilmiyordun."),
P(S("sv_depoB"), "Songül Abla eski servise gitti, sen yukarı döndün. Yirmi dakika sonra yanakları soğuktan kıpkırmızı olmuş, elinde valfle geldi. “Uymadı,” dedi. “Diş aralığı farklı, yarım milim. Yarım milim be Leyla, yarım milim!”"),
P(S("sv_depoC"), "Teknisyen telefonu dördüncü çalışta açtı, esneyerek dinledi. “Sakın takmayın,” dedi. “Yanlış valfle basıncı yanlış okur, adamın ciğerini patlatırsınız.” Teşekkür edip kapattın, telefon elinde bir süre öylece durdun."),
P(S("sv_depoD"), "Naylonu geri örttün, Songül Abla da açıkta kalan köşeyi düzeltti, makine üşüyecekmiş gibi."),
P(S("s4A"), "Kaan yutkunup “Tamam,” dedi. Önündeki dosyayı açtı, kapattı, sonra yine açtı."),
P(S("s4B"), "Kaan'ın omzu elinin altında gevşedi. “Beraber,” dedi, biraz da aceleyle, sözünü geri alacakmışsın gibi."),
P(S("s4C"), "Saniye Hanım'a her şeyi anlattın, tek cihazı, yoldaki çocuğu, eşinin değerlerini, hiçbirini yumuşatmadan. Sessizce dinledi, en sonunda tek bir şey sordu: “O çocuğun annesinin haberi var mı?”"),
P(S("s4D"), "Balonları dizdin, tüpleri kontrol ettin, maskeleri boylarına göre büyükten küçüğe sıraladın. Küçüklerine bu gece ihtiyaç olmayacağını biliyordun ama onları da sıraya koydun."),
"Daha yirmi beş dakika var. Pencerenin önüne gidiyorsun, sokak lambasının altında kar artık eğri yağıyor, rüzgâr dönmüş.",
"On dört yıl önce baban bu hastanede öldü, belki de bu koridorda. O gece de kar vardı, sen otogarda kalmıştın çünkü otobüsler kalkmıyordu. Sabah geldiğinde genç bir hemşire babanın son saatlerinde elini tuttuğunu söyledi, sen de o telaşla adını sormadın. Sonra yıllarca kendi kendine sordun durdun.",
"Arkanda termosun kapağı açılıyor. Saniye Hanım bir bardak çay uzatıyor. “İç kızım. Şekeri biraz çoktur ama, İsmail şekersiz içemez de.”"
], secenekler: [
{ t: "Çayı alıp Saniye Hanım'ın yanına oturursun.", to: "s5", etki: { merhamet: 1, cay: true } },
{ t: "Kaan'la protokolü bir kez daha okursunuz: yaş, eşlik eden hastalık, sağkalım puanı.", to: "s5", etki: { kural: 1, protokol: true } },
{ t: "İsmail Bey'in yanına gidip Deniz'i ve tek cihazı anlatırsın, bilmek onun da hakkı.", to: "s5", etki: { gercek: 1, ismail_bilir: true } },
{ t: "Lavaboya gidip yüzünü yıkarsın, aynaya bakmadan.", to: "s5" }
]},

s5: { saat: "23.35", baslik: "Kapı", metin: [
P(S("bkA"), "Çay soğumuştu, dişlerini kamaştıracak kadar da şekerliydi. Saniye Hanım anlattı, İsmail bardağı iki eliyle tutarmış, ilk yudumda her sabah dilini yakar, her sabah da “Yine yaktım,” dermiş. Kırk yıl boyunca."),
P(S("bkB"), "Protokol iki sayfadan ibaret. Seksen yaş üstü için iki puan düşülüyor, kronik akciğer hastalığı için iki puan daha. Kâğıt birini dört puana indiriyor, ötekini dokuzda bırakıyor. Okudukça için biraz rahatlıyor, rahatladığın için de kendine kızıyorsun."),
P(S("bkC"), "İsmail Bey dinledi, gözlerini tavana dikti, sonra elini kaldırıp kapıyı gösterdi. Yoldaki çocuğu mu gösteriyordu, seni mi kovuyordu, sormaya cesaret edemedin."),
P(S("bkD"), "Su buz gibiydi. Lavabonun üstündeki aynada sabun lekeleri vardı, yine de kafanı kaldırıp bakmadın."),
"Paletli aracın motor sesi koridora kadar geliyor, kapı açılınca içeriye kar ve mazot kokusu doluyor. Sedyede bir çocuk yatıyor, yüzü kan içinde, dudakları morarmış, göğsü bir yana çökmüş. Yanında kendisi de çocuk sayılacak üniformalı bir er var, elinde Deniz'in askerî kimliğini bükülecek kadar sıkıyor.",
"Bilinci bulanık, satürasyonu yetmiş dokuz. Songül Abla balonu takıp sıkmaya başlıyor, dudaklarıyla sayıyor.",
P(function(d){ return d.erken === "ismail"; }, "Cihaz İsmail Bey'de, adamın göğsü makineyle inip kalkıyor, değerleri de toparlandı. Deniz'e vermek için önce ondan almak gerekecek."),
P(function(d){ return d.erken !== "ismail"; }, "Dört numaranın monitöründe de aynı rakam yanıyor, yetmiş dokuz."),
"Kaan eldivenlerini giymiş, iki yatağın arasında kıpırdamadan duruyor. Songül Abla başını kaldırmadan sesleniyor: “Leyla, söyle hadi.”"
], secenekler: [
{ t: function(d){ return d.erken === "ismail" ? "Cihazı İsmail Bey'den çıkarıp Deniz'e bağlarsın." : "Cihaz Deniz'e. Gencin şansı daha yüksek."; }, to: "d1", etki: function(d){ d.cihaz = "deniz"; d.secen = "sen"; if(d.erken === "ismail") d.cikardin = true; d.kural++; } },
{ t: function(d){ return d.erken === "ismail" ? "Cihaz İsmail Bey'de kalır. Deniz'i elle solutursunuz." : "Cihaz İsmail Bey'e. O önce buradaydı."; }, to: "i1", etki: function(d){ d.cihaz = "ismail"; d.secen = "sen"; } },
{ t: "Kaan'a bakar ve susarsın. Karar onun olsun.", to: "k1", etki: { devretti: true } },
{ t: function(d){ return d.erken === "ismail" ? "İsmail Bey'i de cihazdan alırsın. İkisini de elle solutacaksınız, sabaha kadar, nöbetleşe. Kimse seçilmeyecek." : "Cihaza kimseyi bağlamazsın. İkisini de elle solutacaksınız, sabaha kadar, nöbetleşe. Kimse seçilmeyecek."; }, to: "e1", etki: function(d){ d.cihaz = "elle"; d.merhamet++; if(d.erken === "ismail") d.cikardin = true; } }
]},

k1: { saat: "23.40", baslik: "Kaan", metin: [
"Kaan'a bakıyorsun ve bir şey demiyorsun.",
"Kaan'ın alnı ter içinde. Önce sana, sonra Songül Abla'ya, sonra da iki monitöre bakıyor, ağzını açıp kapatıyor, eldivenli ellerini önlüğüne siliyor.",
"Sonunda “Deniz'e,” diyor ama sesi çatallanıyor, boğazını temizleyip bir daha söylüyor: “Deniz'e bağlayın.”",
"Sonra gidip lavaboda ellerini yıkıyor, eldivenleri çıkarmayı bile unutmuş.",
"Tutanağa “Dr. Kaan Yılmaz'ın kararıyla” yazılacak, senin adın o satırda geçmeyecek."
], secenekler: [
{ t: "Kaan'ın yanına gidip “Doğru karar verdin,” dersin, doğru olup olmadığını bilmeden.", to: "d1", etki: function(d){ d.cihaz = "deniz"; d.secen = "kaan"; d.merhamet++; d.kaan_teselli = true; } },
{ t: "“Emin misin?” diye sorarsın.", to: "i1", etki: function(d){ d.cihaz = "ismail"; d.secen = "kaan"; d.kaan_dondu = true; } },
{ t: "Hiç konuşmadan Deniz'i cihaza bağlarsın.", to: "d1", etki: function(d){ d.cihaz = "deniz"; d.secen = "kaan"; if(d.erken === "ismail") d.cikardin = true; } },
{ t: "Araya girersin: “Hayır, ikisini de elle solutacağız.”", to: "e1", etki: function(d){ d.cihaz = "elle"; d.secen = "sen"; d.merhamet++; if(d.erken === "ismail") d.cikardin = true; } }
]},


sv_saniye: { saat: "23.00", baslik: "Kırk Yıl", metin: [
"Koridora çıkıp plastik sandalyelerin yanına gidiyorsun ve Saniye Hanım'a her şeyi anlatıyorsun, yoldaki çocuğu da, tek cihazı da, eşinin düşen değerlerini de. Hiçbirini yumuşatmıyorsun.",
"Saniye Hanım termosun kapağını açıp kapatıyor, sonra sana değil de koridorun ucundaki kararmış pencereye bakarak anlatmaya başlıyor:",
"“Kırk bir yıl önce evlendik. Düğünde kar vardı, gelinliğimin eteği çamur oldu. İsmail'in babası o kış makineye bağlıydı, düğüne gelemedi, üç ay sonra da öldü. Cenazeden döndüğümüz gece İsmail bana yemin ettirdi, ‘Beni öyle bir şeye bağlatmayacaksın Saniye,’ dedi. Ben de ettim.”",
"“Ben de ona her akşam ‘Beni bırakma’ derdim. Kırk yıl, her akşam. Şimdi hangisini tutayım ben? Birini tutsam öbürü bozulacak.”",
"Sana dönüyor. “O çocuğun anası var mı?”",
"“Var,” diyorsun. “Belki o da yoldadır.”",
"“O zaman...” diyor Saniye Hanım ama gerisini getirmiyor, termosun kapağını sıkıştırıyor, zaten sıkışmış kapağı bir daha sıkıştırıyor."
], secenekler: [
{ t: "“Bunu Kaan'a da anlatır mısınız?” dersin. Bir tanık olsun istiyorsun.", to: "bk", etki: { gercek: 1, saniye_tanik: true } },
{ t: "Cümlesini bitirmesini beklemeden elini tutarsın.", to: "bk", etki: { merhamet: 1 } },
{ t: "“Bu kararı size yükleyemem,” dersin. “Seçmek bizim işimiz.”", to: "bk", etki: { kural: 1 } },
{ t: "“İçeri girin, eşinize kendiniz söyleyin,” dersin.", to: "bk", etki: { gercek: 1, saniye_soyledi: true } }
]},

sv_depo: { saat: "23.00", baslik: "Arızalı Cihaz", metin: [
"Balonlar, tüpler, maskeler hazır ama ellerin hâlâ yapacak iş arıyor. Songül Abla'nın kolundan tutup “Depoya inelim,” diyorsun.",
"Bodrumdaki depo buz gibi, toz ve eski lastik kokuyor. Köşede naylona sarılmış beşinci cihaz duruyor. Örtüyü çektiğinde ekrana bantla yapıştırılmış bir kâğıt görüyorsun: “ARIZALI, KULLANMAYIN, valf bekleniyor.” Altına biri kurşun kalemle “bekle babam bekle” diye eklemiş.",
"Songül Abla cihazın arkasını açıp bakıyor. “Ekspiratuvar valf,” diyor, parmaklarıyla ceviz büyüklüğünde bir şey gösteriyor. “Şu kadarcık bir şey yüzünden yatıyor koca makine.”",
"Sonra bir şey hatırlamış gibi duruyor. “Eski çocuk servisinde bir tane vardı. Servisi kapatırken onu götürmeyi unuttular. Valfi buna uyar mı bilmem, o da bozuk çıkabilir.”",
"Eski servis binanın öbür kanadında, kaloriferi kapalı, kapısı kilitli, anahtarı da güvenlikte. Gidip bulmak, sökmek, takıp denemek en az bir saat sürer, Deniz ise otuz beş dakika sonra kapıda olacak.",
"“İkimiz birden gidemeyiz,” diyor Songül Abla. “Yukarıda birinin kalması lazım. Sen söyle.”"
], secenekler: [
{ t: "Songül Abla'yı yukarı gönderip eski servise sen gidersin. Bir şans varsa denenmeli.", to: "bk", etki: { merhamet: 1, tamir: "sen" } },
{ t: "Songül Abla'yı eski servise gönderip sen yukarı dönersin. Hastaların başında sen olmalısın.", to: "bk", etki: { kural: 1, tamir: "songul" } },
{ t: "Teknisyeni evden ararsın. Yanlış takılmış bir valf, hiç olmamasından beter olabilir.", to: "bk", etki: { kural: 1, tamir: "telefon" } },
{ t: "Örtüyü geri çekersin. Bu gece bu makine çalışmayacak.", to: "bk", etki: { gercek: 1, tamir: "yok" } }
]},

sv_otogar: { saat: "08.40", baslik: "Otogar", metin: [
"Kapıdan çıkıp yürümeye başlıyorsun, ayakların seni kendiliğinden otogara götürüyor. Seferlerin iptal edildiği, bekleme salonunun ışıklarının yarısının söndürüldüğü o otogara.",
"On dört yıl önce, babanın öldüğü gece bu salonda sabahlamıştın. Banklar yine aynı turuncu plastikten, duvardaki saat hâlâ dört dakika ileri, kimse ayarlamaya üşenmemiş.",
"Bankta montunun yakasını kaldırmış tek bir kişi oturuyor. Jandarma eri Mert, birliğine dönecek otobüsü bekliyor. Seni görünce ayağa kalkıyor, sonra ne yapacağını bilemeyip yine oturuyor.",
"“Abla siz de mi gidiyorsunuz?” diye soruyor.",
"Yanına oturuyorsun. Mert bir süre ellerine bakıyor. “Bütün gece o serum şişesini havada tuttum,” diyor. “Kolum hâlâ havadaymış gibi geliyor, indiremiyorum bir türlü.”",
P(function(d){ return d.deniz_oldu; }, "“Aynı koğuştaydık biz,” diyor. “Anasına ne diyeceğim şimdi? Komutan ‘Sen git’ dedi. Ne diyeceğim ben o kadına?”"),
P(function(d){ return !d.deniz_oldu; }, "“Aynı koğuştaydık biz,” diyor. “Uyanınca bana kızacak, şişeyi yanlış tutmuşum, kolunu şişirmişim. Kızsın abla, kızsın yeter ki.”"),
"Kantinci kepengi yarıya kadar indirmiş, size bakıp “Çay?” diye bağırıyor, ikiniz birden “Olur,” diyorsunuz."
], secenekler: [
{ t: "Mert'e babanı ve bu salonda geçirdiğin o geceyi anlatırsın.", to: "t4", etki: { merhamet: 1, mert_baba: true } },
{ t: "Elini koluna koyup “İndir artık,” dersin.", to: "t4", etki: { merhamet: 1 } },
{ t: "Annesine gerçeği kendi ağzıyla söylemesi gerektiğini söylersin.", to: "t4", etki: { gercek: 1 } },
{ t: "Kalkıp hastaneye geri yürürsün.", to: "t4", etki: { geri_yurudu: true } }
]},

sv_anlatmak: { saat: "08.30", baslik: "Kelimeler", metin: [
"O geceyi herkese anlatıyorsun, tutanağa da, Tahsin Hoca'ya da, sabah ekibine de. Ama birine anlatman çok uzun sürüyor.",
P(function(d){ return d.deniz_oldu || d.deniz_koma; }, "Bu kişi Gülay Hanım. Koridorun sonundaki küçük odada oturuyorsunuz, içeride iki sandalye, bir masa, bir kutu mendil, duvarda da solmuş bir Kapadokya posteri var. Kapısında “Görüşme Odası” yazıyor ama hastanede herkes oraya başka bir ad takmış."),
P(function(d){ return !d.deniz_oldu && !d.deniz_koma; }, "Bu kişi Saniye Hanım. Koridorun sonundaki küçük odada, iki sandalyeyle bir kutu mendilin arasında oturuyorsunuz, duvarda solmuş bir Kapadokya posteri asılı. Eşinin o gecesini dakika dakika soruyor."),
"Anlatırken kelimelerin de işe karıştığını fark ediyorsun. “Cihaz yetmedi” dediğinde gece küçülüyor, “Ben seçtim” dediğinde büyüyor. Doğrusu ikisinin arasında bir yerde ama oraya oturan bir cümle bulamıyorsun.",
"Kadın bir yerde seni durduruyor. “Bir daha söyle, saat kaçtı? Tam olarak.” Söylüyorsun. “Sen neredeydin o sırada?” Onu da söylüyorsun.",
"Sonra bütün gece içinde taşıdığı soruyu soruyor:",
P(function(d){ return d.deniz_oldu || d.deniz_koma; }, "“Acı çekti mi?”"),
P(function(d){ return !d.deniz_oldu && !d.deniz_koma; }, "“Benim adımı söyledi mi?”"),
"Doğru cevabın ne olduğunu biliyorsun."
], secenekler: [
{ t: "Doğruyu olduğu gibi söylersin.", to: "t4", etki: { gercek: 1, aci_dogru: true } },
{ t: "Yalan söylersin, kadının geri kalan ömrü rahat geçsin diye.", to: "t4", etki: { merhamet: 1, aci_yalan: true } },
{ t: "“Bilmiyorum,” dersin.", to: "t4", etki: { bilmiyorum: true } },
{ t: "Cevap vermeden elini tutarsın.", to: "t4", etki: { merhamet: 1 } }
]},

/* ---------- DENİZ KOLU ---------- */
d1: { saat: "00.20", baslik: "Neden O?", metin: [
P(function(d){ return d.cikardin && !d.gulay; }, "Cihazı İsmail Bey'den çıkarmak, bağlamaktan uzun sürdü. Tüpü çekerken öksürdü, gözlerini açıp sana baktı. Ona bir saat önce taktığın maskeyi yeniden taktın."),
P(function(d){ return d.secen === "kaan"; }, "Kararı Kaan verdi ama Deniz'i makineye senin ellerin bağladı. Bunu kafanda ikiye bölüp bir hesaba oturtmaya çalışıyorsun, olmuyor."),
P(function(d){ return d.secen === "sen" && !d.cikardin; }, "Deniz'i bağladın. Makine ilk nefesi verince çocuğun göğsü kalktı, monitördeki sayı yetmiş dokuzdan seksen dörde çıktı. On iki yıldır bu işi yapıyorsun, hâlâ her seferinde şaşırıyorsun."),
"İsmail Bey'i maskeyle idare ediyorsunuz ama değerleri yavaş yavaş, hiç durmadan düşüyor.",
"Saniye Hanım yanına geliyor. Ağlamıyor, yalnızca tek bir şey soruyor: “Neden o?”",
P(function(d){ return d.saniye_bilir; }, "Oysa biliyordu, ona sen anlatmıştın. Bilmek hiçbir işe yaramamış."),
"Ne cevap verirsen ver, bu kadın her gece yatağa girdiğinde o cümleyi hatırlayacak."
], secenekler: [
{ t: "Gerçeği söylersin: “Tek cihaz vardı, gencin yaşama şansı daha yüksekti.”", to: "d2", etki: { gercek: 1, cevap: "gercek" } },
{ t: function(d){ return d.secen === "kaan" ? "“Doktor karar verdi,” dersin. Doğru, ama bütün doğru değil." : "“Doktor karar verdi,” dersin. Kaan'ın adını bir kalkan gibi kullanarak."; }, to: "d2", etki: { kural: 1, cevap: "kalkan" } },
{ t: "İsmail Bey'in sana söylediklerini, makineye bağlanmak istemediğini anlatırsın.", to: "d2", etki: { gercek: 1, cevap: "istek" } },
{ t: "Bir açıklama yapmadan onunla birlikte İsmail Bey'in yanına oturursun.", to: "d2", etki: { merhamet: 1, cevap: "sessiz" } }
]},

d2: { saat: "00.55", baslik: "Son Söz", metin: [
P(S("d1A"), "Saniye Hanım seni dinledi. “Haklısınız,” dedi, çantasından bir mendil çıkarıp kullanmadan geri koydu."),
P(S("d1B"), "“Doktor mu?” diye tekrarladı Saniye Hanım ve Kaan'a baktı. Kaan bir süre bakışlarını kaçırmadı, sonra gözlerini yere indirip cebindeki kalemle oynamaya başladı."),
P(S("d1C"), "Saniye Hanım sana baktı. “Sana mı söyledi?” dedi, sesinde kıskançlığa benzer bir şey vardı. Kırk yıl onunla yaşamıştı, son sözünü ise bir yabancı duymuştu. Sonra omuzları düştü. “İyi bari, biri duymuş.”"),
P(S("d1D"), "Bir açıklama yapmadın. Saniye Hanım'ın eli bir süre elinin içinde kaskatı durdu, sonra yavaş yavaş gevşedi."),
P(S("i2C"), "İki kadının gözü önünde cihazı İsmail Bey'den çıkarıp Deniz'e bağladın. Gülay Hanım da Saniye Hanım da aynı odadaydı ama birbirlerinin yüzüne hiç bakmadılar."),
P(S("e2A"), "Balonu bıraktığında odaya bir sessizlik çöktü. Saniye Hanım eşinin yanına, yatağın kenarına uzandı, yatağa sığamadı, bir bacağı aşağı sarktı. Kaan da Deniz'i cihaza bağladı."),
P(S("e2B"), "Deniz cihazda, İsmail Bey'i elle solutmaya devam ediyorsunuz ama bileklerin yanıyor ve her sıkışta biraz daha az hava gidiyor. Ne yaptığınızı üçünüz de biliyorsunuz, kimse ağzına almıyor."),
"Saat bire doğru İsmail Bey gözlerini açıyor, bakışları berrak. Sona yaklaşanlarda bazen böyle olur, kaç kere gördün sayısını bilmiyorsun.",
"“Kar mı yağıyor?” diye soruyor. “Babam kar yağarken ölmek istemezdi, yollar kapanır, cenaze kalkmaz derdi. Haklıymış rahmetli.” Gülmeye çalışırken öksürüğe boğuluyor.",
"Sonra gözleri karşıdaki yatağa, makineye bağlı çocuğa kayıyor. “O oğlan kurtulur mu?” diye soruyor."
], secenekler: [
{ t: "“Kurtulur,” dersin. Bilmeden, o rahat etsin diye.", to: "d2b", etki: { merhamet: 1, teselli: true, ismail_oldu: true } },
{ t: "“Bilmiyorum,” dersin. Ona yalan söylemek istemiyorsun.", to: "d2b", etki: { gercek: 1, ismail_oldu: true } },
{ t: "Kaan'dan morfini artırmasını istersin. Acısı dinsin diye, nefesinin de yavaşlayacağını bile bile.", to: "d2b", etki: { merhamet: 1, morfin: true, ismail_oldu: true } },
{ t: "Saniye Hanım'ı yanında bırakıp Deniz'in başına dönersin. Yaşayana bakmak senin işin.", to: "d2b", etki: { kural: 1, yalniz: true, ismail_oldu: true } }
]},

d2b: { saat: "01.20", baslik: "Cep", metin: [
P(S("d2A"), "“Kurtulur,” dedin. İsmail Bey gözlerini kapadı. “İyi,” dedi, “iyi o zaman.” Saat bir on ikide öldü."),
P(S("d2B"), "“Bilmiyorum,” dedin. İsmail Bey bir süre yüzüne baktı. “Ben de bilmiyorum,” dedi, “kim biliyor ki kızım.” Saat bir on ikide öldü."),
P(S("d2C"), "Kaan dozu artırdı. İsmail Bey'in alnındaki çizgiler düzeldi, yumruk yaptığı elleri açıldı, nefesi seyrekleşti. Saat bir on ikide öldü. Kaan şırıngayı bırakırken eli tepsiye çarptı, sesi bütün koridorda yankılandı."),
P(S("d2D"), "Deniz'in başına döndün, tüpe, değerlere, gözbebeklerine baktın. Arkandan Saniye Hanım'ın sesi geliyordu, eşine sözlerini tam hatırlayamadığı bir türkü mırıldanıyordu. Saat bir on ikide mırıltı kesildi, dönüp bakmadan anladın."),
"Ölümden sonra yapılacakları ezbere biliyorsun. Monitörü kapatırsın, saati yazarsın, gözleri kapatırsın, çeneyi bağlarsın, çarşafı çekersin. Ellerin bunları kendi kendine yapıyor.",
"Sonra jandarma eri Mert yanına geliyor, elinde bir naylon poşet var. Deniz'in ceplerinden çıkanları koymuşlar, bir cüzdan, bir telefon, yarısı yenmiş bir paket sakız, bir de katlanmış kâğıt.",
"“Abla bunları kime vereyim ben?” diye soruyor.",
"Tam o sırada telefon titremeye başlıyor. Ekranda “Annem” yazıyor, otuz dördüncü cevapsız arama. Kâğıdın üstüne de tükenmezle “Babama. İzin bitince.” yazılmış."
], secenekler: [
{ t: "Kâğıdı okumadan poşete geri koyarsın, o sana yazılmadı.", to: "d3", etki: { kural: 1 } },
{ t: "Kâğıdı açıp okursun. Kimi yaşattığını bilmek istiyorsun.", to: "d3", etki: { mektup: true } },
{ t: function(d){ return d.gulay ? "Kâğıdı ve telefonu Gülay Hanım'a verirsin." : "Telefonu açarsın. Annesine oğlunun yaşadığını söylersin."; }, to: "d3", etki: { merhamet: 1, anneye_soyledi: true } },
{ t: "Poşeti Mert'e geri verip “Sen sakla,” dersin.", to: "d3" }
]},

d3: { saat: "01.50", baslik: "Üçüncü", metin: [
P(S("d2bA"), "Kâğıt poşetin içinde katlı duruyor. Poşeti hemşire masasının çekmecesine koyup çekmeceyi kilitledin, neden kilitlediğini sen de bilmiyorsun."),
P(S("d2bB"), "Kâğıdı açtın. Tükenmez yer yer yazmamış, üstünden ikinci kez geçilmişti: “Baba ben tarlayı istemiyorum, okumak istiyorum. Yüzüne söyleyemedim, o yüzden yazdım. Kızma bana.” Altında bir imza, bir tarih vardı, “kızma” kelimesinin altı da bir kez daha çizilmişti."),
P(function(d){ return d.son === "d2bC" && !d.gulay; }, "Telefonu açtın. Karşıda bir kadın önce çığlık attı, sonra sustu, sonra “Yaşıyor mu?” diye sordu. “Yaşıyor,” dedin. Kadın bir şey daha söyledi ama anlamadın, evin içinde birine “Yaşıyormuş!” diye bağırıyordu."),
P(function(d){ return d.son === "d2bC" && d.gulay; }, "Gülay Hanım kâğıdı okudu, katladı, sonra açıp yine okudu. “Bunu babası okusun,” dedi, “ben okumamalıydım.” Ama kâğıdı göğsüne bastırdı ve bir daha bırakmadı."),
P(S("d2bD"), "Mert poşeti iki eliyle alıp karnına bastırdı. “Tamam abla,” dedi. Poşetin içinde sakız paketi hışırdadı."),
"Saat ikiye on var. Kapı yine açılıyor, içeri yine kar doluyor. Bu sefer bir traktör römorkunda, battaniyelere sarılmış bir adam getiriyorlar. Adı Ferhat, otuz dört yaşında, evinde sobadan zehirlenmiş. Karısı o sırada komşudaymış, kurtulmuş, üç çocuk da anneannedeymiş. Kardeşi onu römorka yükleyip on iki kilometre getirmiş, kendi eldivenlerini bile ona giydirmiş.",
"Ferhat'ın bilinci kapalı, nefesi yüzeysel. Kanındaki zehir yüzünden saatlerce makine desteğine ihtiyacı var ama genç ve sağlam biri, doğru desteği alırsa sabaha ayağa kalkacak türden.",
"Aynı anda Deniz'in başındaki Kaan sesini alçaltarak sesleniyor: “Abla, sol göz bebeği genişledi, ışığa cevap vermiyor. Kafanın içinde kanama ilerliyor olabilir, burada açamayız.”",
"Ferhat'ın kardeşi kapıda duruyor, botlarındaki kar eriyip yerde gölcük oluyor. “Hangi yatağa koyalım abla?” diye soruyor."
], secenekler: [
{ t: "Cihazı Deniz'den alıp Ferhat'a verirsin. Kurtarılabilecek olanı seçersin.", to: "t1", etki: function(d){ d.kural++; d.deniz_oldu = true; d.ikinci_secim = "ferhat"; } },
{ t: "Deniz'de bırakırsın. Bir kere verdiğin nefesi geri almayacaksın.", to: "t1", etki: function(d){ d.ferhat_oldu = true; d.deniz_koma = true; d.ikinci_secim = "deniz"; } },
{ t: "Ferhat'ı elle solutursunuz. Sen, Songül Abla, Mert ve kardeşi sabaha kadar nöbetleşe sıkarsınız.", to: "t1", etki: function(d){ d.merhamet++; d.deniz_oldu = true; d.gozden_kacti = true; d.ikinci_secim = "herkes"; } },
{ t: "Tahsin Hoca'ya bir daha ulaşmaya çalışırsın. Bu sefer kararı yazılı ve onun adıyla istersin.", to: "t1", etki: function(d){ d.kural++; d.ferhat_oldu = true; d.deniz_koma = true; d.yazili_emir = true; d.ikinci_secim = "tahsin"; } }
]},

/* ---------- İSMAİL KOLU ---------- */
i1: { saat: "00.10", baslik: "Balon", metin: [
P(S("s5B"), "Cihazı İsmail Bey'e verdiniz. Deniz'in göğsüne ambu balonuyla dakikada on iki kez hava veriyorsunuz, artık saymıyorsunuz bile, eller kendi kendine sayıyor."),
P(S("k1B"), "“Emin misin?” diye sordun. Kaan'ın yüzü değişti. “Değilim abla,” dedi. “İsmail Bey önce geldi, onda kalsın.” Tek bir soru sordun ve karar tersine döndü."),
P(function(d){ return d.istek && d.erken !== "ismail"; }, "İsmail Bey'i bağlarken “Beni bağlamayın” dediği aklından çıkmıyordu. Tüp boğazından inerken gözlerini açtı, ne gördüğünü bilmiyorsun."),
P(function(d){ return d.istek && d.erken === "ismail"; }, "İsmail Bey zaten makinedeydi. “Beni bağlamayın,” demişti. Onu bağlama kararını sen vermemiş olabilirsin ama bağlı kalmasına karar veren sensin."),
"Songül Abla'yla nöbetleşe Deniz'in balonunu sıkıyorsunuz. Mert serum şişesini havada tutuyor, askıyı gösterdiğin hâlde elinden bırakmıyor.",
"Deniz'in cebindeki telefon durmadan titriyor, ekranda “Annem” yazıyor. Yirmi dakikada on yedi kere aranmış.",
"Telefon her titrediğinde Mert sana bakıyor, sen de balonu sıkmaya devam ediyorsun."
], secenekler: [
{ t: "Telefonu açarsın.", to: "i2", etki: { gercek: 1, telefon: "acti" } },
{ t: "Telefonu kapatırsın. Şu an bir anneye söyleyebilecek bir şeyin yok.", to: "i2", etki: { telefon: "kapatti" } },
{ t: "Mert'e açtırırsın, o konuşsun, senin ellerin dolu.", to: "i2", etki: { telefon: "mert" } },
{ t: "Telefonu açıp Deniz'in kulağına tutarsın, annesinin sesini duysun.", to: "i2", etki: { merhamet: 1, telefon: "kulak" } }
]},

i2: { saat: "00.50", baslik: "Anne", metin: [
P(S("i1A"), "“Ben hemşiresiyim,” dedin. Karşıdan önce bir nefes sesi geldi, sonra bir kadın “Yaşıyor mu?” diye sordu. “Yaşıyor,” dedin. “Geliyorum,” dedi kadın. “Yollar kapalı teyze—” diyecek oldun ama hat çoktan kapanmıştı."),
P(S("i1B"), "Telefonu kapattın, titreşim kesildi. Yirmi kilometre ötede bir kadının aynı numarayı bir daha aradığını ve bu sefer çalmadığını düşündün. Telefonu Mert'in göremeyeceği bir yere kaldırdın."),
P(S("i1C"), "Mert telefonu açtı. “Teyze,” dedi, sesi çatladı. “Deniz iyi. Yani yaşıyor, hastanedeyiz.” Sonra ağlamaya başladı, telefonu kulağından ayırmadan burnunu koluna sile sile. Sen balonu sıkmaya devam ettin."),
P(S("i1D"), "Telefonu Deniz'in kulağına tuttun. Hoparlörden bir kadın sesi durmadan aynı şeyi söylüyordu: “Oğlum, buradayım, buradayım.” Monitördeki nabız bir ara hızlandı. Tesadüf müydü değil miydi, bunu hiç bilmeyeceksin."),
"Saat biri on geçe Gülay Hanım çıkıp geliyor. Komşusunun traktörüyle yirmi kilometre karın içinden gelmiş, yüzü kıpkırmızı, eşarbının ucu buz tutmuş. Kapıda durup odaya bakıyor. Makineye bağlı yaşlı bir adam görüyor, elle nefes verilen oğlunu görüyor.",
"Bir süre öyle bakıyor, sonra eşarbını bile çözmeden sana dönüp soruyor: “Neden benim oğluma değil?”"
], secenekler: [
{ t: "Gerçeği söylersin: “Cihaz birdi, İsmail Bey önce buradaydı.”", to: "i2b", etki: { gercek: 1, gulay: true } },
{ t: "“Doktor karar verdi,” dersin.", to: "i2b", etki: { kural: 1, gulay: true, kalkan: true } },
{ t: "“Haklısınız,” deyip cihazı İsmail Bey'den çıkarır, Deniz'e bağlarsın.", to: "d2", etki: function(d){ d.gulay = true; d.cihaz = "deniz"; d.cikardin = true; d.donus = true; } },
{ t: "Balonu ona uzatırsın: “Gelin, siz tutun. Böyle sıkacaksınız.”", to: "i2b", etki: { merhamet: 1, gulay: true, anne_tuttu: true } }
]},

i2b: { saat: "01.20", baslik: "Avuç", metin: [
P(S("i2A"), "Gülay Hanım dinledi, bir şey söylemeden oğlunun yatağının dibine, yere oturdu. Montunu bile çıkarmadı."),
P(S("i2B"), "“Doktor mu?” dedi Gülay Hanım ve gözleriyle Kaan'ı buldu. Kaan önce ona, sonra sana baktı. Yirmi yedi yaşındaydı ama o an daha da genç görünüyordu."),
P(S("i2D"), "Gülay Hanım balonu aldı. Elleri önce titredi, sonra titremedi. Saymayı ona sen öğretmedin, kendi kendine saymaya başladı. Arada bir oğlunun kulağına eğilip bir şey söylüyor, sonra yine sayıyordu."),
P(S("e2C"), "İsmail Bey'i cihaza bağladın. Deniz'in balonu artık tamamen Songül Abla'yla Mert'te. Saniye Hanım eşinin yanında oturmuş, az önce balon tutan ellerine bakıyor, onları nereye koyacağını bilemiyor."),
"Bir buçuğa doğru İsmail Bey gözlerini açıyor, sakinleştirici biraz hafiflemiş. Boğazında tüp olduğu için konuşamıyor ama sana bakıyor.",
"Titrek, yavaş bir hareketle elini kaldırıp senin elini buluyor, avucunu açıyor ve işaret parmağıyla içine harf yazmaya başlıyor. Önce B, sonra I, sonra R, sonra A.",
"Sonra parmağı duruyor, gözleri kapanıyor. Bir harf daha yazacaktı. “Bırakın” mı diyecekti, “bırakma” mı?",
"Avucunda hiçbir şey yazmıyor ama hâlâ kaşınıyor."
], secenekler: [
{ t: "Sakinleştiriciyi artırırsınız. Uyusun, acı çekmesin, sana da bir daha öyle bakmasın.", to: "i3", etki: { merhamet: 1, uyuttu: true } },
{ t: "Saniye Hanım'ı çağırıp harfleri anlatırsın. Ne demek istediğine o karar versin.", to: "i3", etki: { gercek: 1, saniyeye_sordu: true } },
{ t: "Harfleri “bırakın” diye okursun, gidip Kaan'a söylersin.", to: "i3", etki: { gercek: 1, harf: "birakin" } },
{ t: "Harfleri “bırakma” diye okursun, elini tutup yanında kalırsın.", to: "i3", etki: { merhamet: 1, harf: "birakma" } }
]},

i3: { saat: "01.50", baslik: "Ferhat", metin: [
P(S("i2bA"), "Kaan dozu artırdı, İsmail Bey'in yüzü gevşedi. Sen de gidip avucunu yıkadın, neden yıkadığını bilmeden."),
P(S("i2bB"), "Saniye Hanım harfleri dinledi, eşinin yüzüne baktı. “Bırakın,” dedi sonra, “bırakın demek istedi, ben onu bilirim.” Sesi kararlıydı ama elleri termosu bulamadı, masanın üstünde bir süre arandılar."),
P(S("i2bC"), "Kaan dinledi. “Avuca yazılmış dört harf,” dedi. “Ben bunu dosyaya nasıl yazayım abla?” Haklıydı. Yine de kalemini çıkarıp bir şey karaladı, sonra karaladığının üstünü çizdi."),
P(S("i2bD"), "Elini tuttun. İsmail Bey'in parmakları bir kez sıktı, sonra gevşedi. Ayağınla sandalyeyi çekip yanına oturdun."),
P(function(d){ return !d.gulay; }, "İkiye doğru Deniz'in annesi Gülay Hanım komşusunun traktörüyle çıkıp geliyor. Kapıda durup odaya bakıyor, makinedeki yaşlı adamı, elle nefes verilen oğlunu görüyor. Hiçbir şey sormadan Mert'in elinden balonu alıyor."),
"Saat ikiye on var. Kapı yine açılıyor, içeri yine kar doluyor. Bu sefer bir traktör römorkunda, battaniyelere sarılmış bir adam getiriyorlar. Adı Ferhat, otuz dört yaşında, sobadan zehirlenmiş. Üç çocuğu anneannede. Kardeşi onu on iki kilometre getirmiş, kendi eldivenlerini de ona giydirmiş.",
"Ferhat'ın kanındaki zehir yüzünden saatlerce makine desteği alması gerekiyor ama genç ve sağlam biri, doğru desteği alırsa sabaha ayağa kalkar.",
"Odada şimdi “Beni bağlamayın” demiş olan, makinedeki yaşlı bir adam var. Başında annesi oturan, elle nefes verilen bir çocuk var. Bir de evde üç çocuğu bekleyen yeni gelen adam var.",
"Songül Abla balonu Ferhat'ın kardeşine tutturup nasıl sıkacağını gösteriyor, sonra sana dönüyor. Ağzını açmıyor ama ne sorduğunu biliyorsun."
], secenekler: [
{ t: "Cihazı İsmail Bey'den alıp Ferhat'a verirsin. Otuz dört yaş, üç çocuk ve avucuna yazılmış o yarım kelime.", to: "t1", etki: function(d){ d.kural++; d.ismail_oldu = true; if(!d.anne_tuttu) d.deniz_oldu = true; d.ikinci_secim = "ferhat"; } },
{ t: "Hiçbir şeyi değiştirmezsin, kimseden bir nefesi geri almayacaksın.", to: "t1", etki: function(d){ d.ismail_makinede = true; d.ferhat_oldu = true; if(!d.anne_tuttu) d.deniz_oldu = true; d.ikinci_secim = "kimse"; } },
{ t: "Odadaki herkesi çağırırsın. Saniye Hanım, Gülay Hanım, Mert, Ferhat'ın kardeşi, balonlar elden ele geçecek.", to: "t1", etki: function(d){ d.merhamet++; d.ismail_makinede = true; d.ikinci_secim = "herkes"; } },
{ t: "Tahsin Hoca'ya bir daha ulaşmaya çalışırsın, kararı yazılı ve onun adıyla istersin.", to: "t1", etki: function(d){ d.kural++; d.ismail_oldu = true; d.deniz_koma = true; d.ferhat_oldu = true; d.yazili_emir = true; d.ikinci_secim = "tahsin"; } }
]},

/* ---------- ELLE KOLU ---------- */
e1: { saat: "00.00", baslik: "Eller", metin: [
P(S("s5D"), "Kimseyi cihaza bağlamayacaktın. Kaan bir sana baktı, sonra balonlardan birini aldı, Songül Abla da öbürünü."),
P(S("k1D"), "Sonunda “Hayır,” dedin, “ikisini de elle solutacağız.” Kaan'ın yüzünden önce bir rahatlama geçti, ardından korku."),
P(function(d){ return d.cikardin; }, "İsmail Bey'i cihazdan çıkardın. Kaan bir şey diyecek gibi oldu, demedi. Boşalan makine kendi kendine alarm verdi, sen de susturdun."),
P(function(d){ return d.secen === "sen" && d.devretti; }, "Kaan “Deniz'e” demişti ama sen kararı onun elinden aldın. Önce rahatladı, sonra sana kızdı, sonra yine rahatladı, en sonunda hiçbir şey demeden balonu eline aldı."),
"İki yatak, iki balon var. Makine boş duruyor, ekranında yeşil bir ışık yanıyor.",
"Sen, Songül Abla, Kaan ve Mert, dört kişi iki insana nefes veriyorsunuz. Dakikada on iki kez sıkıyor, yirmi dakikada bir el değiştiriyorsunuz. Mert'e nasıl sıkacağını gösteriyorsun, korkudan çok hızlı sıkıyor, bileğinden tutup yavaşlatıyorsun.",
"Songül Abla balonu sıkarken yüzüne bakmadan söyleniyor: “Bu delilik Leyla. Sabaha kadar dayanamayız biz. Benim bileğimde zaten kist var, biliyorsun.”",
"Senin bileklerin de şimdiden ısınmaya başladı."
], secenekler: [
{ t: "Saniye Hanım'ı da çağırırsın, eşinin balonunu o tutsun.", to: "e2", etki: { merhamet: 1, saniye_tuttu: true } },
{ t: "Kaan'dan bir saat sonra yeniden değerlendirme sözü alırsın. Bu iş sonsuza kadar süremez.", to: "e2", etki: { kural: 1 } },
{ t: "Kimseye bir şey demeden saymaya devam edersin.", to: "e2" },
{ t: "Songül Abla'ya dönersin: “Haklısın, delilik. Ama hangisini seçeceğimi bilmiyorum.”", to: "e2", etki: { gercek: 1 } }
]},

e2: { saat: "01.00", baslik: "Saat Bir", metin: [
P(S("e1A"), "Saniye Hanım balonu aldı. İlk sıkışta ağladı, ikincide durdu, üçüncüde ritmi buldu. “Düğünde de böyleydi,” dedi. “Ben oyun bilmezdim, İsmail ayağıma basa basa öğretti.”"),
P(S("e1B"), "Kaan bir saat için söz verdi, saatine bakıp kronometreyi başlattı."),
P(S("e1C"), "Saydın, bin iki yüz kırk dört, bin iki yüz kırk beş. Saydığın sürece başka bir şey düşünemiyordun, o yüzden saymaya devam ettin."),
P(S("e1D"), "Songül Abla sana baktı ama kızmadı. “Bilmiyorsan bilmiyorum diyen ilk kişisin,” dedi. “Ötekiler hep biliyormuş gibi yapar.”"),
"Saat bir oldu, bir saattir elle nefes veriyorsunuz. Songül Abla'nın sağ eline kramp girdi, sol eliyle devam ediyor. Mert'in parmak uçları morarmış.",
"Deniz'in değerleri düşüyor, elle verilen hava göğsündeki yarayı aşmaya yetmiyor. İsmail Bey'inkiler de düşüyor ama daha yavaş.",
"Sonra İsmail Bey gözlerini açıyor, balonu tutan ellere bakıyor ve yavaşça başını iki yana sallıyor, bir kez, sonra bir kez daha.",
P(function(d){ return d.saniye_tuttu; }, "Balonu tutan Saniye Hanım. Kocası ona hayır diyor. Saniye Hanım'ın elleri bir an duruyor, sonra yine sıkmaya başlıyor."),
"Kaan fısıldıyor: “Abla böyle giderse ikisini de kaybedeceğiz.”"
], secenekler: [
{ t: "İsmail Bey'in isteğine uyarsın. Balonu bırakır, Saniye Hanım'la vedalaşmasına izin verirsin, cihaz Deniz'e gider.", to: "d2", etki: function(d){ d.cihaz = "deniz"; d.vedalasti = true; d.gercek++; } },
{ t: "Cihazı Deniz'e bağlarsın, İsmail Bey'e dayanabildiğiniz kadar elle devam edersiniz.", to: "d2", etki: function(d){ d.cihaz = "deniz"; d.elde = true; } },
{ t: "Cihazı İsmail Bey'e bağlarsın. İlk o geldi, ilk o yoruldu.", to: "i2b", etki: function(d){ d.cihaz = "ismail"; } },
{ t: "Devam edersiniz. Kimse bırakılmayacak.", to: "e3", etki: { merhamet: 1, israr: true } }
]},

e3: { saat: "01.50", baslik: "Boş Makine", metin: [
"Kimseyi bırakmadınız. Saat ikiye doğru ellerinizde hâlâ iki insan var ve makine hâlâ boş.",
"Kapı açılıyor, içeri yine kar doluyor. Bir traktör römorkunda, battaniyelere sarılmış bir adam getiriyorlar. Adı Ferhat, otuz dört yaşında, sobadan zehirlenmiş. Üç çocuğu anneannede. Kardeşi onu on iki kilometre getirmiş.",
"Kanındaki zehir yüzünden saatlerce makine desteği alması gerekiyor ama genç ve sağlam, doğru desteği alırsa sabaha ayağa kalkar.",
"Kimse haksızlığa uğramasın diye boş bıraktığın makinenin yanına şimdi üçüncü bir sedye yanaşıyor.",
"Songül Abla kramp giren eliyle balonu sıkarken konuşuyor: “Leyla, bu sefer seçeceksin. Sen seçmezsen biri ölecek ve onu da sen seçmiş olacaksın.”",
"Kaan duvara yaslanmış, gözleri kıpkırmızı. “İstersen ben seçerim,” diyor alçak sesle. “Bir kere seçtim zaten, alıştım.” Gülmeye çalışıyor ama beceremiyor."
], secenekler: [
{ t: "Makineyi Ferhat'a verirsin, en çok kurtulma şansı olan o.", to: "t1", etki: function(d){ d.kural++; d.ismail_oldu = true; d.ikinci_secim = "ferhat"; } },
{ t: "Makineyi Deniz'e verirsin, önce o geldi, en genç de o.", to: "t1", etki: function(d){ d.ismail_oldu = true; d.ferhat_oldu = true; d.ikinci_secim = "deniz"; } },
{ t: "Makine boş kalır. Hastanedeki herkes üç insan için sabaha kadar balon sıkacak.", to: "t1", etki: function(d){ d.merhamet++; d.deniz_oldu = true; d.ismail_yasadi = true; d.bos_kaldi = true; d.ikinci_secim = "herkes"; } },
{ t: "“Sen seç,” dersin Kaan'a.", to: "t1", etki: function(d){ d.ismail_oldu = true; d.devretti2 = true; d.ikinci_secim = "kaan"; } }
]},

/* ---------- SABAH ---------- */
t1: { saat: "05.40", baslik: "Sabah", metin: [
"Kar beşe doğru diniyor. Önce kimse fark etmiyor, sonra biri pencereye bakıyor, ardından herkes bakıyor. Gökyüzü kurşuni, ortalık daha aydınlanmamış.",
P(function(d){ return d.ismail_oldu && d.vedalasti; }, "İsmail Bey öldü. Balonu bıraktıktan on dört dakika sonra, Saniye Hanım'ın kolları arasında, gözleri açık gitti."),
P(function(d){ return d.ismail_oldu && d.morfin; }, "İsmail Bey öldü, yüzü sakindi. Kaan şırıngayı hâlâ önlüğünün cebinde taşıyor, atmayı unutmuş."),
P(function(d){ return d.ismail_oldu && !d.vedalasti && !d.morfin; }, "İsmail Bey öldü. Çarşafını çektiler, monitörünü kapattılar, dosyasının son satırına bir saat yazıldı."),
P(function(d){ return d.ismail_makinede; }, "İsmail Bey yaşıyor ama makinede. Göğsü kendisine ait olmayan bir ritimle inip kalkıyor. Bir ara gözlerini açıp sana baktı, babası da ona herhalde böyle bakmıştı."),
P(function(d){ return d.ismail_yasadi; }, "İsmail Bey sabahı gördü. Makineye hiç bağlanmadı, maskeyle, kendi nefesiyle ve sizin ellerinizin yardımıyla dayandı. İstediği oldu."),
P(function(d){ return d.deniz_oldu && d.gozden_kacti; }, "Deniz öldü. Dördü yirmi geçe, herkes Ferhat'ın başındayken tüpü tıkandı. Monitörün alarmı odadaki öteki seslerin arasında bir dakika boyunca kimsenin kulağına gitmedi."),
P(function(d){ return d.deniz_oldu && d.ikinci_secim === "ferhat" && d.cihaz === "deniz"; }, "Deniz, cihazı ondan aldıktan bir saat on dakika sonra öldü. “Göz bebekleri zaten genişlemişti,” diyor Kaan, “kurtulamazdı zaten.” Bütün sabah bu cümleyi birbirinize söylüyorsunuz."),
P(function(d){ return d.deniz_oldu && d.bos_kaldi; }, "Deniz öldü, elle verilen hava göğsündeki yarayı aşamadı. Boş makine yan yatakta yeşil ışığıyla sabaha kadar bekledi."),
P(function(d){ return d.deniz_oldu && !d.gozden_kacti && !(d.ikinci_secim === "ferhat" && d.cihaz === "deniz") && !d.bos_kaldi && d.gulay; }, "Deniz saat üçte, elle verilen son nefeslerin arasında öldü. Gülay Hanım yanındaydı. Son yarım saatte balonu senin elinden almak istedi ama sen vermedin."),
P(function(d){ return d.deniz_oldu && !d.gozden_kacti && !(d.ikinci_secim === "ferhat" && d.cihaz === "deniz") && !d.bos_kaldi && !d.gulay; }, "Deniz saat üçte, elle verilen son nefeslerin arasında öldü. Annesi yoldaydı, yetişemedi."),
P(function(d){ return d.deniz_koma; }, "Deniz yaşıyor, makineye bağlı, derin bir uykuda. Beyninde ne kadar hasar olduğunu Kaan bilmiyor. Sabah şehre sevk edilecek."),
P(function(d){ return !d.deniz_oldu && !d.deniz_koma; }, "Deniz yaşıyor. Değerleri sabaha karşı düzeldi, sevk edilecek, belki ameliyat olacak. Babasına yazdığı kâğıt hâlâ cebinde."),
P(function(d){ return d.ferhat_oldu; }, "Ferhat öldü. Kardeşi bütün gece balonu sıktı, dörde doğru elleri durmadı ama Ferhat'ın nefesi durdu. Üç çocuğu anneannelerinin evinde hâlâ uyuyor."),
P(function(d){ return !d.ferhat_oldu; }, "Ferhat yaşıyor. Gözlerini açar açmaz çocuklarını sordu. Kardeşi yatağın kenarına oturmuş, römorkta donmuş botlarıyla hıçkıra hıçkıra ağlıyor."),
"Esin'in yerine gelecek sabah hemşiresi arayıp yolların hâlâ açılmadığını söylüyor. “Biraz daha idare edin abla, ne olur.”"
], secenekler: [
{ t: "Ölenlerin yüzünü kendi ellerinle, tek tek kapatırsın.", to: "t1b", etki: { merhamet: 1 } },
{ t: "Unutmadan gece olanları dakika dakika not etmeye başlarsın.", to: "t1b", etki: { gercek: 1, notlar: true } },
{ t: "Hiçbir şey yapmadan pencerenin önünde durup karın dinişine bakarsın.", to: "t1b" },
{ t: "Kaan'ın yanına gidip “Senin suçun değil,” dersin.", to: "t1b", etki: { merhamet: 1, kaan_korundu: true } }
]},

t1b: { saat: "06.20", baslik: "Çay Ocağı", metin: [
P(S("t1A"), "Yüzleri kapattın. Çarşafın kenarını iki kere katladın, sonra bir kere daha. Ellerin bunu ne zaman öğrendi, hatırlamıyorsun."),
P(S("t1B"), "Saatleri, değerleri, kimin ne dediğini bir kâğıda yazdın. Elin titredi ama yazın titremedi. Kâğıdın kenarına bir yere farkında olmadan küçük bir kar tanesi çizmişsin."),
P(S("t1C"), "Kar dinmişti. Karşı çatıya bir karga kondu, ayağıyla çatıdaki karı eşeledi, bir şey bulamayınca uçup gitti."),
P(S("t1D"), "Kaan sana baktı. “Kimin suçu o zaman abla?” dedi. Cevap veremedin. “Kimsenin suçu değilse ben niye böyle hissediyorum?” Gözlüğünü çıkarıp önlüğünün ucuyla sildi ama gözlük temizlenmedi."),
"Songül Abla çay ocağına iki bardak koymuş, biri senin. Oturuyorsun, bir süre ikiniz de bardağınızı parmaklarınızın arasında çeviriyorsunuz.",
"Sonra anlatmaya başlıyor: “Doksan sekizde böyle bir kış olmuştu. Bir çocuk, bir kadın, bir makine. Ben seçtim, doktor imzaladı. Kadını seçtim. Çocuğun anası sonra koridorda bana bir şey söyledi. Yirmi beş yıldır kimseye ne dediğini anlatmadım.”",
"Çayını karıştırıyor, kaşık durmadan bardağa vuruyor, oysa şeker çoktan erimiş.",
"“Bu işte iki türlü hemşire olur Leyla. Unutanlar ve sayanlar. Unutanlar daha uzun dayanıyor, ben sayanlardanım. Yirmi beş yılda on bir kişi. Sen bu gece kaç kişi saydın?”"
], secenekler: [
{ t: "Saydıklarını isim isim söylersin.", to: "t2", etki: { gercek: 1 } },
{ t: "Unutmayı nasıl öğrendiğini sorarsın.", to: "t2", etki: { unut: true } },
{ t: "Kimseye söylemediği o sözü sorarsın: “Ne dedi kadın?”", to: "t2", etki: { merhamet: 1, cumle: true } },
{ t: "Çayını bitirip kalkarsın, tutanak bekliyor.", to: "t2", etki: { kural: 1 } }
]},

t2: { saat: "07.30", baslik: "Tutanak", metin: [
P(S("t1bA"), "Saydıklarını tek tek söyledin. Songül Abla her isimde çay bardağını biraz daha kendine çekti. “On iki yılda bu kadar mı?” dedi. “Şanslıymışsın.” Gülmüyordu."),
P(S("t1bB"), "“Öğrenilmiyor ki,” dedi Songül Abla, “kendiliğinden oluyor. Bir gün birinin yüzünü hatırlayamadığını fark ediyorsun, o gün de kendine kızıyorsun.”"),
P(S("t1bC"), "Songül Abla kaşığı bıraktı. “‘Sizi affediyorum,’ dedi. Hepsi bu. Bağırsaydı, tükürseydi belki geçerdi. Ama affetti. Ben de yirmi beş yıldır ne yapacağımı bilmiyorum.”"),
P(S("t1bD"), "Kalktın, Songül Abla da arkandan bir şey söylemedi. Senin bardağın masada kaldı, dibinde karıştırılmamış şekerle."),
"Saat yediyi yirmi geçe Tahsin Hoca kar küreme aracının arkasından geliyor. Montunu omuzlarına atmış, yanağında hâlâ yastık izi var. Önce dosyalara, sonra sana bakıyor.",
"“Olay tutanağı lazım,” diyor. “Bugün müdürlük isteyecek, yarın belki savcılık ister, yakınlar şikâyet edebilir.” Sonra sesini alçaltıyor. “Şöyle yazalım, cihaz arızası nedeniyle yeterli destek sağlanamadı, hastalar standart tedaviyi aldı. Kim kime bağlandı, saatler, gerekçeler, oralara hiç girmeyelim. Seçim yapılmış gibi durmasın. Arızalı cihaz zaten gerçek, değil mi? Kimse yalan söylemiyor ki.”",
P(function(d){ return d.yazili_emir; }, "Gece istediğin yazılı talimat, Tahsin Hoca'nın iki satırlık mesajı telefonunda duruyor. Tutanağa girerse onun adı da girer. Hoca mesajdan hiç bahsetmiyor."),
P(function(d){ return d.devretti || d.devretti2; }, "Kaan da odada. Gece verilen kararlardan en az birinin onun ağzından çıktığını üçünüz de biliyorsunuz. Kaan pencereden dışarı bakıyor."),
"Tahsin Hoca kalemi sana uzatıyor. “Sen yaz Leyla Hanım, hepsini sen gördün.”"
], secenekler: [
{ t: "Her şeyi olduğu gibi yazarsın, kimin hangi saatte neye dayanarak karar verdiğini.", to: "t3", etki: { gercek: 2, tutanak: "gercek" } },
{ t: "Hocanın dediği gibi yazarsın. Kurum korunur, kimse yanmaz.", to: "t3", etki: { kural: 1, ortbas: true, tutanak: "ortbas" } },
{ t: "Bütün kararları kendi adına yazarsın, Kaan'ın adı hiç geçmez.", to: "t3", etki: { merhamet: 1, gercek: 1, ustlendi: true, tutanak: "ustlendi" } },
{ t: "Kalemi geri verirsin: “Tutanağı hekim yazar hocam, ben imzalamam.”", to: "t3", etki: { kural: 1, reddetti: true, tutanak: "reddetti" } }
]},

t3: { saat: "08.15", baslik: "Koridor", metin: [
P(S("t2A"), "Her şeyi saat saat, karar karar yazdın. Tahsin Hoca okudu, kâğıdı katlayıp cebine koydu. “Bunun bir bedeli olacak,” dedi, “sana da.” Sesinde tehdit yoktu, yalnızca yorgundu."),
P(S("t2B"), "Yazdın, cümleler kendiliğinden geldi, bu dili yıllardır biliyorsun. Tahsin Hoca okuyup “İyi,” dedi, “herkes için iyi.” İmzanın altına tarih atarken kalemin mürekkebi bitti, Kaan kendi kalemini uzattı."),
P(S("t2C"), "Bütün kararları senin verdiğini yazdın. Kaan okuyunca yüzü bembeyaz oldu. “Bunu yapamazsın abla,” dedi. “Yaptım bile,” dedin. Kâğıdı elinden almaya kalktı ama Tahsin Hoca ondan önce davrandı."),
P(S("t2D"), "Kalemi geri verdin. Tahsin Hoca bir süre yüzüne baktı, sonra oturup kendisi yazdı. Ne yazdığını görmedin, kâğıdı da imzalamadın. O boş imza yeri yıllarca aklına gelecek."),
"Koridora sabah olmuş, nöbet değişiyor, yeni yüzler geliyor, kantinden poğaça kokusu yayılıyor. Plastik sandalyelerde de bekleyenler oturuyor.",
P(function(d){ return d.ismail_oldu; }, "Saniye Hanım montunu giymiş, termosu kucağında. Seni görünce kalkıp termosu uzatıyor. “Çayı içemedim kızım, sen iç. Boşuna dökmeyeyim.”"),
P(function(d){ return d.ismail_makinede; }, "Saniye Hanım eşinin camının önünde duruyor, makinenin her nefesinde dudakları kıpırdıyor. Sana dönüp soruyor: “Ne kadar böyle kalacak?” Bilmiyorsun. Aklına İsmail Bey'in babasının o üç ayı geliyor."),
P(function(d){ return d.ismail_yasadi; }, "Saniye Hanım eşinin yanında uyuyakalmış, başı yatağın kenarında, ağzı açık. Uyandırmıyorsun."),
P(function(d){ return d.deniz_oldu && d.gulay; }, "Gülay Hanım koridorun sonunda duvara yaslanmış duruyor. Seni görüyor ama ne bağırıyor ne ağlıyor, yalnızca bakıyor."),
P(function(d){ return d.deniz_oldu && !d.gulay; }, "Deniz'in annesi Gülay Hanım az önce geldi, kimse daha ona söylemedi. Kaan'ın yüzüne bakıyor, Kaan da seninkine."),
P(function(d){ return !d.deniz_oldu; }, "Gülay Hanım oğlunun sevk evraklarını imzalıyor, adını iki kere yanlış yazıp üstünü karalıyor. Seni görünce kalemi bırakıp sana sarılıyor, sen de kollarını nereye koyacağını bilemiyorsun."),
P(function(d){ return d.ferhat_oldu; }, "Ferhat'ın kardeşi pencerenin kenarında, römorkta donmuş botlarıyla duruyor, dudakları kıpırdıyor. Çocuklara ne diyeceğini kendi kendine tekrarlıyor."),
P(function(d){ return !d.ferhat_oldu; }, "Ferhat'ın kardeşi telefonda çocuklarla konuşuyor. “Babanız iyi, uyandı. Valla uyandı, bak yanındayım.” Her cümlede sesi biraz daha yükseliyor.")
], secenekler: [
{ t: "Bekleyenlerin yanına oturup ne söylerlerse dinlersin.", to: "t4", etki: { merhamet: 1 } },
{ t: "Yüzlerine bakamazsın, çıkış kapısına yürürsün.", to: "sv_otogar", etki: { kacti: true } },
{ t: "Her birine gece olanları kendi ağzınla anlatırsın, başkasından duymasınlar.", to: "sv_anlatmak", etki: { gercek: 1 } },
{ t: "Songül Abla'yı bulup ona sarılırsın.", to: "t4", etki: { songul: true } }
]},

t4: { saat: "09.00", baslik: "Dönüş", metin: [
P(S("sv_otogarA"), "Mert'e babanı anlattın, bu salonu, dört dakika ileri giden saati, adını sormadığın o hemşireyi. Mert dinledi. “Belki o da sizi düşünmüştür abla,” dedi. Sonra otobüsü geldi, binerken çantasını unuttu, koşup aldı, camdan el salladı."),
P(S("sv_otogarB"), "Elini koluna koydun. Kolu önce direndi, sonra indi. Mert koluna yabancı birinin koluymuş gibi baktı. “Uyuşmuş,” dedi, güldü ve burnunu çekti."),
P(S("sv_otogarC"), "“Kendi ağzımla,” diye tekrarladı Mert. Sonra telefonunu çıkarıp bir numaraya uzun uzun baktı. Aramadı, daha değil."),
P(S("sv_otogarD"), "Otogardan hastaneye yürüdün. Yolun yarısında bir fırının önünde durup simit aldın ama yemedin."),
P(S("sv_anlatmakA"), "Doğruyu söyledin. Kadın gözlerini kapadı, bir süre sonra “Sağ ol,” dedi. “Herkes bana yalan söylüyordu, yüzlerinden belliydi.”"),
P(S("sv_anlatmakB"), "Yalan söyledin. Kadının yüzü yumuşadı. Kalkarken sana teşekkür etti, sonra bir daha etti, ikincisinde gözlerine bakamadın."),
P(S("sv_anlatmakC"), "“Bilmiyorum,” dedin. Kadın uzun uzun yüzüne baktı. “O zaman ben de bilmeyeyim,” dedi, kutudan bir mendil alıp katladı ve cebine koydu."),
P(S("sv_anlatmakD"), "Elini tuttun, hiçbir şey söylemedin. Kadın cevabı senin yüzünde aradı. Ne bulduysa bulmuş olacak ki bir süre sonra kalkıp paltosunu ilikledi."),
P(S("t3A"), "Oturup dinledin. Anlattıklarının çoğu sana bir şey ifade etmiyordu, bir düğün fotoğrafı, ikinci el bir bisiklet, bir tarlanın sınır taşı. Hepsini sonuna kadar dinledin."),
P(S("t3B"), "Kapıdan çıktın. Arkandan biri adını seslendi galiba ama dönmedin. Belki de kimse seslenmedi, emin değilsin."),
P(S("t3C"), "Anlattın, bir kere, iki kere, üç kere. Her anlatışta cümleler biraz daha düzgün çıkıyordu. Üçüncüde hiç takılmadan anlattığını fark edip durdun."),
P(S("t3D"), "Songül Abla'ya sarıldın. Önce kaskatı kesildi, eli havada kaldı. Sonra sırtına iki kere vurdu, bir annenin bebeğinin gazını çıkarması gibi."),
"Dışarıda kar dizine kadar çıkmış. Otobüsler çalışmıyor, yürümek zorundasın. Her adımda ayağın gömülüyor, botunun içi karla doluyor, çoraplarına kadar ıslanıyorsun.",
"Hastanenin önündeki köprüde duruyorsun. On dört yıl önce, babanın öldüğü sabah bu köprüden geçmiştin. Elini tutan o hemşire de o sabah bir yerden evine yürümüştür herhalde, kim bilir, belki bu köprüden geçmiştir. Belki o da o gece başka birinin yatağını bırakıp babanın yanına gelip oturmuştu.",
"Köprünün altından dere akıyor, kenarları buz tutmuş ama ortası hâlâ akıyor."
], secenekler: [
{ t: "Eve gidip uyursun, yarın akşam yine nöbettesin.", to: "son", etki: { devam: true } },
{ t: "Eve varınca istifa dilekçeni yazarsın.", to: "son", etki: { istifa: true } },
{ t: "Kar dizine kadar olsa da mezarlığa, babanın mezarına gidersin.", to: "son", etki: { mezar: true, merhamet: 1 } },
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
P(S("t4A"), "O sabah eve gidip on dört saat uyudun, akşam yine nöbetteydin."),
P(S("t4B"), "O sabah eve varınca istifa dilekçeni yazdın, kısa, bir sayfalık."),
P(S("t4C"), "O sabah kar dizine kadarken babanın mezarına gittin, taşın üstündeki karı elinle süpürdün."),
P(S("t4D"), "O sabah hastaneye geri döndün, birinin yanında oturman gerekiyordu."),
"Tutanak müdürlükte bir dosyaya girdi, dosya bir dolaba, dolap da arşive kaldırıldı. Şikâyet edenler “cihaz arızası” yazısını görünce geri çekildiler. Yedek parça iki ay sonra geldi, kutusunu da sen açtın.",
"Tahsin Hoca bir yıl sonra başhekim yardımcısı oldu. Kaan uzmanlığını bitirip başka bir şehre gitti, veda yemeğinde senin karşına oturmadı. Songül Abla emekli oldu, emeklilik pastasını kesmeden önce sana bir dilim ayırdı.",
"Sen çalışmaya devam ettin, çoğu gece uyuyabildin bile.",
"Yıllar sonra bir nöbette, genç bir hemşire mutfakta bardakları kurularken sana soruyor: “Abla, sen hiç seçmek zorunda kaldın mı?”",
"Ağzını açıyorsun, cümle zaten hazır: “Bizde öyle şeyler olmaz kızım, protokol belli.”",
"Kız başını sallayıp bardağı dolaba kaldırıyor. Sen de elindeki havluyu katlıyorsun, açıyorsun, sonra yine katlıyorsun."
]},

son_onluk: { son: true, baslik: "Askıdaki Önlük", metin: [
P(S("t4A"), "O sabah eve gidip on dört saat uyudun, akşam yine nöbetteydin."),
P(S("t4B"), "O sabah eve varınca istifa dilekçeni yazdın, kısa, bir sayfalık."),
P(S("t4C"), "O sabah kar dizine kadarken babanın mezarına gittin, taşın üstündeki karı elinle süpürdün."),
P(S("t4D"), "O sabah hastaneye geri döndün, birinin yanında oturman gerekiyordu."),
"Dilekçe üç satır tuttu, “kişisel nedenlerle” diye yazdın. O iki kelimeyi bulmak bir saatini aldı.",
"Önlüğün kapının arkasındaki askıda, yıkanmış, ütülenmiş öylece asılı kaldı. Bir ay boyunca her sabah ona baktın. Sonra dolaba kaldırdın, sonra bir poşete koydun, sonra o poşet bir ev taşırken kaybolup gitti.",
"Bir kırtasiyede iş buldun. Burada kimse senden bir şey seçmeni istemiyor, en fazla mavi kapak mı olsun kırmızı mı diye soruyorlar. Bazen bir çocuk iki defter arasında kalıyor, annesi “Hadi ama oğlum!” diye söyleniyor. Sen karışmıyorsun, çocuk seçene kadar bekliyorsun.",
"Kış gelince gözün pencereye kayıyor. Kar başladığında, hiçbir yerde nöbette olmadığın hâlde parmakların tezgâhın üstünde kendi kendine bir ritim tutuyor, dakikada on iki.",
"Bir gün dükkâna yaşlı bir kadın girip torununa boyama kitabı alıyor. Parayı uzatırken elinde çiçekli bir termos görüyorsun. Saniye Hanım değil tabii, ama yine de kadın kapıdan çıkıp gidene kadar elin kasada kalıyor, para üstünü vermeyi unutuyorsun."
]},

son_nefes: { son: true, baslik: "Başkasının Nefesi", metin: [
P(S("t4A"), "O sabah eve gidip on dört saat uyudun, akşam yine nöbetteydin."),
P(S("t4B"), "O sabah eve varınca istifa dilekçeni yazdın, kısa, bir sayfalık."),
P(S("t4C"), "O sabah kar dizine kadarken babanın mezarına gittin, taşın üstündeki karı elinle süpürdün."),
P(S("t4D"), "O sabah hastaneye geri döndün, birinin yanında oturman gerekiyordu."),
"İsmail Bey makineye bağlı yetmiş üç gün yaşadı.",
"Saniye Hanım her gün geldi, termosuyla, aynı plastik sandalyeye oturdu. Bazen eşine gazete okudu, spor sayfasını atlayarak. Bir gün sana “Babası da üç ay böyle kalmıştı,” dedi. “O zaman İsmail'e kızardım, her gün gidiyorsun diye. Şimdi anlıyorum onu.”",
"İsmail Bey birkaç kez gözlerini açıp sana baktı. Her seferinde ne demek istediğini anlamaya çalıştın, bir türlü anlayamadın.",
"Yetmiş üçüncü gün öldü. Kar yoktu artık, nisan gelmişti, hastane bahçesindeki erik çiçek açmıştı. Cenaze rahatça kalktı. “Babası da böyle isterdi,” diye düşündün, sonra bunu düşündüğün için kendine kızdın.",
"Saniye Hanım son gün termosu sana bıraktı. “Ben artık kime koyacağım çayı,” dedi. Termos hâlâ hemşire odasında duruyor, kimse kullanmıyor ama kimse atmaya da kıyamıyor."
]},

son_kayit: { son: true, baslik: "Kayıt", metin: [
P(S("t4A"), "O sabah eve gidip on dört saat uyudun, akşam yine nöbetteydin."),
P(S("t4B"), "O sabah eve varınca istifa dilekçeni yazdın, kısa, bir sayfalık."),
P(S("t4C"), "O sabah kar dizine kadarken babanın mezarına gittin, taşın üstündeki karı elinle süpürdün."),
P(S("t4D"), "O sabah hastaneye geri döndün, birinin yanında oturman gerekiyordu."),
"O gecenin her dakikası senin el yazınla, saatleriyle, isimleriyle bir kâğıtta duruyor.",
"Soruşturma açıldı. Neden o hasta, neden o saatte, neden yazılı talimat yok diye sordular. Bazı sorular sana soruldu, bazıları Kaan'a, bazıları Tahsin Hoca'ya. Bazılarını da kimse sormadı, çünkü cevabı herkesi yakacaktı.",
"Altı ay sonra uyarı cezası aldın, Tahsin Hoca da başka bir hastaneye tayin edildi. Yedek parça soruşturmanın ikinci haftasında geldi, teslim tutanağını yine sen imzaladın.",
"Bir gün koridorda biri yanına geldi. Saniye Hanım mıydı, Gülay Hanım mı, Ferhat'ın kardeşi mi, o kadar yorgundun ki şimdi hatırlamıyorsun bile. “Okudum,” dedi, “sağ ol.” Elinde ikiye katlanmış, kenarları yumuşamış bir fotokopi vardı.",
"Kâğıdın bir kopyası senin çekmecende duruyor. Bazen çıkarıp okuyorsun, her seferinde başka bir satırda takılıp kalıyorsun. Bir keresinde bütün gece “23.40” yazan satırın başında oturdun."
]},

son_el: { son: true, baslik: "Bir El", metin: [
P(S("t4A"), "O sabah eve gidip on dört saat uyudun, akşam yine nöbetteydin."),
P(S("t4B"), "O sabah eve varınca istifa dilekçeni yazdın, kısa, bir sayfalık."),
P(S("t4C"), "O sabah kar dizine kadarken babanın mezarına gittin, taşın üstündeki karı elinle süpürdün."),
P(S("t4D"), "O sabah hastaneye geri döndün, birinin yanında oturman gerekiyordu."),
"O geceden sonra bir alışkanlık edindin, ölmek üzere olan hastaların elini tutuyorsun. Protokolde böyle bir şey yok, kimse de senden istemiyor.",
"Bazen beş dakika tutuyorsun, bazen bir saat. Bir keresinde yaşlı bir adam gözlerini açıp “Sen kimsin kızım?” diye sordu. “Hemşireyim,” dedin. “Adın ne?” dedi, söyledin. Adını söylemeyi de yeni yeni yapıyorsun zaten.",
"Arkadaşların bu yüzden seni biraz tuhaf buluyor. Esin bir gün “Abla sen o elleri tutarken nöbet listesi kendi kendine yazılmıyor ama,” diye takıldı, sonra da senin yerine iki ilaç saatini üstlendi.",
"On dört yıl önce adını hiç sormadığın bir hemşire babanın elini tutmuştu. O kadını hiç görmedin ama bazen bir hastanın elini bırakmak üzereyken onun elini bıraktığını düşünüyorsun ve bir dakika daha tutuyorsun.",
"Kar yağınca hâlâ pencereye bakıyorsun. Sonra cebinden el kremini çıkarıp ellerine sürüyorsun, çünkü kış gelince ellerin kuruyup çatlıyor ve kimsenin eline öyle dokunmak istemiyorsun."
]},

son_sayanlar: { son: true, baslik: "Sayanlar", metin: [
"Ertesi akşam yine nöbetteydin, ondan sonraki akşam da.",
"O geceden kimseye bahsetmedin, bu koridorda herkesin böyle bir gecesi var zaten. Songül Abla emekli olurken sana katlanmış bir kâğıt verdi, üstünde on bir isim yazıyordu. “Bunları ben sayıyordum,” dedi, “sende dursun. Okumak zorunda değilsin.”",
"Okudun ve altına kendi isimlerini ekledin. Tükenmezin rengi farklı çıktı. Bir sonraki kış bir isim daha ekledin, ondan sonrakinde iki.",
"Bir gece genç bir hemşire sana “Abla, sen nasıl dayanıyorsun?” diye soruyor. Kâğıdı gösteriyorsun, kız okuyor ama anlamıyor. “Bunlar kim?” diye soruyor. “Hastalar,” diyorsun. Kız kâğıdı sana geri veriyor, bir şey daha soracak gibi oluyor ama vazgeçiyor. Tam o sırada bir monitör ötmeye başlıyor ve ikiniz birden ayağa fırlıyorsunuz."
]}

},

ayna: function(d){
  var out = [];
  var m = d.merhamet, k = d.kural, g = d.gercek;
  if(m >= k && m >= g) out.push("Bu gece çoğu zaman yanındaki insana baktın.");
  else if(k >= g) out.push("Bu gece çoğu zaman protokole, sıraya, yetkiye tutundun.");
  else out.push("Bu gece söylenmesi zor olanı söyledin, yazılması zor olanı yazdın.");
  if(d.devretti || d.devretti2) out.push("Bir yerde kararı başkasına bıraktın.");
  if(d.istek === "sakli") out.push("İsmail Bey'in isteğini yalnızca sen duydun ve kimseye anlatmadın.");
  if(d.cikardin) out.push("Birine verdiğin nefesi geri aldın.");
  if(d.bos_kaldi) out.push("Kimseyi seçmemek için makineyi boş bıraktın.");
  if(d.ustlendi) out.push("Bütün kararları kendi adına yazdın, Kaan'ın adı hiçbir yerde geçmedi.");
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
