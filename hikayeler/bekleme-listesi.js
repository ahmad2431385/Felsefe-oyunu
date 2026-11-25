(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };
var VAR = function(d){ return d.bagis && d.bagis !== "yok"; };
var YOK = function(d){ return !d.bagis || d.bagis === "yok"; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "bekleme-listesi",
baslik: "Bekleme Listesi",
dunya: "Gerçek dünya",
kategoriler: ["Sağlık ve Tıp", "Toplum ve Adalet"],
giris: "Gece ikide telefonun çalıyor. Sen İzmir'de bir organ nakli koordinatörüsün. On yedi yaşında bir kızın bir bisiklet kazasından sonra beyin ölümü gerçekleşmiş ama kalbi hâlâ atıyor. Annesiyle babası koridorda henüz hiçbir şeyden haberleri olmadan bekliyor. Ankara'da bir çocuk aylardır bir kalp bekliyor. Önünde birkaç saat, bir yas, bir rıza ve bir listenin adaleti var. Bu hikâye, bir bedenin bittiği yerde bir başkasının nasıl başladığını anlatıyor.",
kavramlar: ["Ölümün tanımı", "Beden ve armağan", "Adil paylaşım", "Yas ve rıza"],
ozet: "Gece ikide telefonun çalıyor. On yedi yaşında bir kızın beyni ölmüş ama kalbi atıyor. Ankara'da dokuz yaşında bir çocuk on dört aydır bir kalp bekliyor. Aradaki birkaç saat senin elinde.",
baslangic: "a1",
durum: { adalet: 0, sefkat: 0, riza: 0 },

sahneler: {

a1: { saat: "Gece, 01.40", baslik: "Çağrı", metin: [
"Telefonu ikinci çalışta açıyorsun, elin uykudayken bile yolunu biliyor. Arayan yoğun bakımdan Dr. Nihan. “Barış, olası bir donör var. On yedi yaşında, bisikletle kamyonun altına girmiş. Klinik tablo beyin ölümü, testlere başlıyoruz.”",
"Adın Barış, kırk bir yaşındasın. On yıl yoğun bakım hemşireliği yaptın, yedi yıldır da İzmir'de bir eğitim hastanesinde organ nakli koordinatörüsün. Komodinin üstünde yatmadan önce okuduğun romanın sayfası katlı duruyor, üç haftadır aynı sayfada kalmışsın.",
"Karın dönüp yorganı başına çekiyor. Montunu karanlıkta giyiyorsun, bir kolu ters olmuş. Caddeler bomboş, ışıklar kırmızı yanıyor. Ortalıkta kimse yok ama sen yine de duruyorsun.",
"Yoğun bakımın camından onu görüyorsun, Duru Aksoy. Saçları yastığa dağılmış, alnında sargı, ağzında tüp var. Göğsü makinenin ritmiyle kalkıp iniyor, monitörde kalbi düzenli ve güçlü atıyor. Yatağın altındaki poşetin içinde kanlı bir bisiklet eldiveni duruyor, biri atmaya kıyamamış.",
"Koridorda iki sandalyede annesiyle babası oturuyor. Ayten Hanım edebiyat öğretmeni, Erdal Bey belediye otobüsünde şoför. Erdal Bey'in üstünde hâlâ iş yeleği var, yakasında plaka numarası yazılı bir kart takılı. Onlara daha kimse “beyin ölümü” demedi, “bağış” kelimesini de kimse ağzına almadı.",
"Bu iki kelimeyi onlara sen götüreceksin."
], secenekler: [
{ t: "Henüz bağıştan söz etmeden doğruca aileye gidip kendini tanıtırsın.", to: "a2", etki: { sefkat: 1, erken_tanisti: true } },
{ t: "Önce dosyaya bakarsın, tanı kesinleşmeden aileye yaklaşılmaz.", to: "a2", etki: { adalet: 1 } },
{ t: "Ulusal koordinasyon merkezine ön bildirim yaparsın.", to: "a2", etki: { adalet: 1, merkez_erken: true } },
{ t: "Kendin için arabada bir dakika oturursun.", to: "a2", etki: { riza: 1 } }
]},

a2: { saat: "04.00", baslik: "Apne Testi", metin: [
P(S("a1A"), "“Ben Barış,” dedin, “bu gece sizinle olacağım.” Ayten Hanım elini tutup bırakmadı. Erdal Bey önce yaka kartına, sonra yüzüne baktı. Kim olduğunu tam anlamadı ama bir şeyin geldiğini anladı."),
P(S("a1B"), "Dosyayı okudun. Glasgow üç, göz bebekleri sabit, beyin sapı refleksleri yok, bin kere okuduğun satırlar. Hasta adının yazıldığı satırda bir yazım hatası vardı, “Durru” yazmışlar, kalemle düzelttin."),
P(S("a1C"), "Merkez kaydı aldı, ekranda bir numara belirdi, olası donör, İzmir, on yedi yaşında. Annesine daha kimse bir şey söylememişti."),
P(S("a1D"), "Bir dakika boyunca motoru kapalı arabada oturdun. Ön camdan sokak lambası görünüyordu, bir pervane böceği durmadan ona çarpıyordu. Kaç aileye bu geceyi yaşattın? Bir zamanlar sayıyordun."),
"Sabah dörtte Dr. Nihan apne testini yapıyor. Solunum cihazını birkaç dakikalığına ayırıp beynin nefes alma emri verip vermediğine bakıyorlar. Kan gazı ölçülüyor, karbondioksit yükseliyor.",
"Duru'nun göğsü kıpırdamıyor.",
"Cihazı yeniden bağlıyorlar, göğüs yine kalkıp inmeye başlıyor. İki uzman tanıyı ayrı ayrı imzalıyor. Saat 04.38, Duru Aksoy'un ölüm saati bu. Monitörde kalbi atmaya devam ediyor.",
"Ayten Hanım her şeyi camın arkasından izledi. Yanına gidip anlatıyorsun, beyni öldü, geri dönüşü yok, bu bir ölüm.",
"Ayten Hanım kızına bakıyor, pembe yanaklarına, kalkıp inen göğsüne, yeşil, düzenli çizgiye.",
"“Kalbi atıyor,” diyor, tahtadaki bir yanlışı düzeltir gibi. “Sıcacık, nefes alıyor. Nasıl ölü olsun?”"
], secenekler: [
{ t: "Beyin ölümünü sabırla anlatırsın, nefesi makinenin verdiğini, beyninin hiçbir şey yapmadığını.", to: "a3", etki: { adalet: 1, anlatti: true } },
{ t: "Ayten Hanım'ı içeri, kızının yanına götürürsün.", to: "x_dokunus", etki: { sefkat: 1 } },
{ t: "Dr. Nihan'dan beyin kan akımı görüntülerini göstermesini istersin.", to: "x_cizgi", etki: { adalet: 1 } },
{ t: "Şimdi bir şey açıklamazsın, sırası değil.", to: "a3", etki: { riza: 1, bekledi: true } }
]},

x_dokunus: { saat: "04.50", baslik: "Sıcak El", metin: [
"Ayten Hanım'a önlük, maske, galoş giydiriyorsun. Galoşlardan biri yırtık çıkıyor, sen yenisini bulana kadar kıpırdamadan ayakta bekliyor.",
"Yatağın kenarında duruyor. Önce dokunmaya çekiniyor, sonra kızının elini alıyor. El sıcak, tırnaklarda yarısı dökülmüş mavi bir oje var.",
"“Dün sürdü bunu,” diyor, “banyoda. Bütün ev oje koktu, ona kızdım. ‘Ders çalışacağına,’ dedim. Dün.”",
"Kızının saçını sargıya değdirmeden okşuyor, eğilip kulağına bir şey söylüyor. Sen başını çeviriyorsun.",
"Monitör atıyor. Bir süre Ayten Hanım'ın yüzünde bir şey kıpırdıyor, kızı onu duymuş gibi ekrana bakıyor. Sonra o şey sönüyor.",
"Sana dönmeden “Duymuyor, değil mi?” diye soruyor."
], secenekler: [
{ t: "Yumuşak ama net bir sesle “Hayır,” dersin.", to: "a3", etki: { adalet: 1 } },
{ t: "“Bilmiyoruz,” dersin.", to: "a3", etki: { sefkat: 1, bilmiyoruz: true } },
{ t: "Hiçbir şey demeden bir sandalye çekip onu oturtursun.", to: "a3", etki: { sefkat: 1 } },
{ t: "Erdal Bey'i de içeri çağırırsın.", to: "a3", etki: { riza: 1, baba_iceri: true } }
]},

x_cizgi: { saat: "04.50", baslik: "Kara Görüntü", metin: [
"Dr. Nihan monitörü aileye çeviriyor, ekranda beyin anjiyografisi var. Boya boyundaki damarlara girmiş ama kafatasının içine girmemiş. Boyun bembeyaz görünüyor, kafatasının içi kapkara.",
"“Burası beyin,” diyor Dr. Nihan, kalemiyle gösteriyor. “Kan almıyor. Kan almayan doku yaşamaz.”",
"Erdal Bey ekrana yaklaşıyor. Gözlüğü otobüste kalmış, gözlerini kısarak bakıyor, burnu neredeyse ekrana değiyor.",
"“Bu kızımın beyni mi? Simsiyah mı?”",
"“Kan almıyor,” diyor Dr. Nihan yine.",
"Erdal Bey otuz yıldır İzmir'in bütün hatlarını ezbere bilir, hangi durakta kimin bineceğini, hangi virajda kimin düşeceğini bilir. Şimdi bu siyahın içinde bir yol arıyor gibi.",
"Sonra geri çekiliyor. “Bir makine kızım öldü diyor,” diyor, “öbür makine onu yaşatıyor. Ben hangisine inanayım?”"
], secenekler: [
{ t: "“Makinelere değil, bize inanın. İki doktor ayrı ayrı baktı,” dersin.", to: "a3", etki: { adalet: 1 } },
{ t: "“Bedeni yaşıyor gibi görünüyor ama kızınız artık orada değil,” dersin.", to: "a3", etki: { sefkat: 1, beden_cumlesi: true } },
{ t: "Erdal Bey'in istediği kadar bakmasına izin verirsin.", to: "a3", etki: { riza: 1 } },
{ t: "Bir babaya bu kadarı yeter diye ekranı kapatırsın.", to: "a3", etki: { sefkat: 1 } }
]},

a3: { saat: "06.10", baslik: "Soru", metin: [
P(S("x_dokunusC"), "Bir sandalye çekip Ayten Hanım'ı oturttun. Bir saat boyunca kızının elini tuttu. Kalkarken eli bir süre kızının yanağında kaldı, sonra çekti."),
P(S("x_cizgiA"), "“Bize inanın,” dedin. Erdal Bey yüzüne baktı. “Size inanmak kolay,” dedi, “kızıma inanmamak zor.”"),
P(S("x_cizgiC"), "Erdal Bey kırk dakika boyunca ekrana baktı. Sonra elini uzatıp ekranın camına, o siyah yere dokundu, parmak izi kaldı."),
P(S("x_cizgiD"), "Ekranı kapattın. Erdal Bey kararmış ekrana bakmaya devam etti, camda kendi yüzü vardı."),
P(S("a2A"), "Basit kelimelerle anlattın. Ayten Hanım her cümlende başını salladı, her cümleden sonra camdan kızına baktı ama kelimelerle gördüklerini bir türlü üst üste koyamadı."),
P(S("a2D"), "Bir şey açıklamadın. Ayten Hanım'la Erdal Bey koridorda iki saat yan yana, birbirlerine dokunmadan oturdular. Bir ara Erdal Bey makineden iki çay aldı, bardaklar sandalyenin altında soğudu."),
P(S("x_dokunusA"), "“Hayır,” dedin. Ayten Hanım kızının elini bıraktı, sonra yeniden tuttu."),
P(S("x_dokunusB"), "“Bilmiyoruz,” dedin. Ayten Hanım'ın yüzü açıldı, sonra sana baktı. “Bilmiyoruz mu, yoksa bilmiyor musunuz?” dedi. Öğretmendi ne de olsa."),
P(S("x_dokunusD"), "Erdal Bey içeri girip yatağın ayak ucunda durdu, dokunmadı. Sonra çarşafın altından çıkmış bir ayak gördü, küçük parmağında mavi oje vardı. Yalnızca oraya dokundu."),
P(S("x_cizgiB"), "“Orada değil,” diye tekrarladı Erdal Bey. “O zaman nerede?” Verecek bir cevabın yoktu."),
"Sabah altı oluyor. Aile odasının penceresinden gri bir körfez görünüyor.",
"Bu cümleleri yıllardır kuruyorsun ama hâlâ ilk kelimede boğazın kuruyor: “Duru'nun organları başka insanların hayatını kurtarabilir. Kalbi, karaciğeri, böbrekleri. Bunu düşünmenizi istemek için buradayım. Karar sizin. Hayır demek de bir karardır.”",
"Ayten Hanım yere bakıyor, Erdal Bey pencereye.",
"Erdal Bey bir an bile düşünmeden konuşuyor. “Ben kızımı parçalatmam. Bütün geldi, bütün gidecek. Benim kızım yedek parça değil.”",
"Ayten Hanım susuyor ama kocasına değil, sana bakıyor."
], secenekler: [
{ t: "“Anlıyorum Erdal Bey, kararınıza saygı duyuyorum,” dersin.", to: "a4", etki: { riza: 1 } },
{ t: "Diyanet'in organ bağışını caiz saydığını anlatırsın.", to: "a4", etki: { adalet: 1, fetva: true } },
{ t: "Ayten Hanım'a dönüp onun ne düşündüğünü sorarsın.", to: "bl_anne", etki: { riza: 1, anneye_sordu: true } },
{ t: "Odadan çıkıp onları yalnız bırakırsın.", to: "bl_koridor", etki: { sefkat: 1 } }
]},

a4: { saat: "07.00", baslik: "Kuzey", metin: [
P(S("bl_anneA"), "“Sesi,” dedi Ayten Hanım, sonra kalkıp odaya döndü. Kapı kapandı ve içeriden bir süre hiç ses gelmedi."),
P(S("bl_anneC"), "Ayten Hanım sana baktı. “Haklısınız,” dedi. “On beş yaşındaydı, paraşütle atlamak da istiyordu.” Yüzünde gülümsemeye benzer bir şey belirdi. “Ama yine de yazmış.”"),
P(function(d){ return d.son === "bl_anneB" || d.son === "bl_anneD"; }, "Ayten Hanım defterden bir daha söz etmedi. Odaya dönerken kapıda durup sana bir sırrı paylaşmış birinin bakışıyla baktı."),
P(S("bl_koridorA"), "Nihan düşündü. “Bilmiyorum,” dedi. “Söylesek bize daha çok mu güvenirler, yoksa hiç mi güvenmezler?” Bisküvi paketini buruşturup cebine koydu ve yoğun bakıma döndü."),
P(S("bl_koridorB"), "Nihan sana baktı, sonra yorgun yorgun güldü. “İki küçük ses,” dedi, “bir koridorda. Kimse duymasın.”"),
P(function(d){ return d.son === "bl_koridorC" || d.son === "bl_koridorD"; }, "Nihan “Sağ ol,” dedi. Söylediğin şey için mi, kahve için mi, anlayamadın. Yoğun bakıma döndü, omuzları önlüğün içinde küçücük duruyordu."),
P(S("a3A"), "Erdal Bey seni süzdü. Bir itiraz bekliyordu ama gelmedi. Bu onu rahatlatmadı, savunmasını indiremedi."),
P(S("a3B"), "“Diyanet benim kızımı tanımaz,” dedi Erdal Bey. Ama bir an durdu ve bir şeyi tarttığını gördün."),
P(S("a3C"), "Ayten Hanım uzun süre konuşmadı. Sonra kocasının yüzüne bakmadan anlattı. “Geçen ay kan vermeye gitmiş, on sekizini doldurmadığı için almamışlar. Eve kızgın geldi. ‘İşe yarar bir şey yapmak istedim, izin vermediler,’ dedi.” Erdal Bey karısına döndü, bunu bilmiyordu."),
P(S("a3D"), "Kapının camından gördün. Erdal Bey pencereye gitti, Ayten Hanım ellerini yüzüne kapadı. Sonra Erdal Bey dönüp elini karısının omzuna koydu, gece boyunca ilk kez birbirlerine dokundular."),
"Kantinin köşesinde on iki yaşında bir çocuk oturuyor, Duru'nun kardeşi Kuzey. Onu teyzesi getirmiş, kendisi şimdi dışarıda telefonla konuşuyor. Kuzey bir meyve suyunu pipetle karıştırıyor, pipetin ucu çiğnenmekten düzleşmiş.",
"Seni yaka kartından tanıyor. “Ablamı mı bekliyorsunuz?”",
"Yanına oturuyorsun.",
"“Teyzem telefonda söyledi,” diyor. “Ablamın kalbi başkasına verilebilirmiş. Doğru mu?”",
"“Doğru.”",
"Kuzey pipeti bırakmıyor, sana bakmadan soruyor: “Ablamın kalbi başkasında atarsa ablam biraz yaşar mı? O kişi ablamı sever mi? Kalbi onunsa?”"
], secenekler: [
{ t: "“Hayır, ablan yaşamaz ama o kişi ablan sayesinde yaşar,” dersin.", to: "a5", etki: { adalet: 1 } },
{ t: "“Biraz yaşar, evet. O kişi ablanı hep hatırlar,” dersin.", to: "a5", etki: { sefkat: 1, kuzey_teselli: true } },
{ t: "“Sen ne düşünüyorsun?” diye sorarsın.", to: "a5", etki: { riza: 1, kuzey_dusun: true } },
{ t: "Bir çocuğa bu yükü vermek istemediğin için “Bunu annenle babana sor,” dersin.", to: "a5", etki: { sefkat: 1 } }
]},

a5: { saat: "08.00", baslik: "Liste", metin: [
P(S("a4A"), "“Ablam hep bir şeyleri kurtarmaya çalışırdı,” dedi Kuzey, “kedileri, kuşları. Bir keresinde bir kirpiyi kurtarmaya çalıştı.” Pipeti ısırdı. “Kirpi öldü ama.”"),
P(S("a4B"), "Kuzey'in yüzü aydınlandı. “O zaman ablam yaşar,” dedi, kesin bir sesle. Onu düzeltmedin."),
P(S("a4C"), "Kuzey düşündü. “Kalp yalnızca bir pompa,” dedi, “fende gördük. Ablam kalbinde değildi, kafasındaydı.” Biraz durdu. “Ama kafası da öldü.” Sonra meyve suyunu masaya koyup ağlamaya başladı."),
P(S("a4D"), "Kuzey başını eğdi. “Onlar konuşmuyor ki,” dedi, “ne sorsam cevap vermiyorlar.”"),
"Sabah sekizde ofistesin, ulusal nakil sistemi ekranda açık. Duru'nun kan grubunu, doku uyumunu, organ ölçülerini girdiğinde sistem bekleme süresine, aciliyete, uyuma, mesafeye bakarak bir liste çıkaracak.",
"Ön sorgunun sonuçları geliyor. Kalp için Ankara'da dokuz yaşında bir çocuk çıkıyor. On dört aydır bekliyor, mekanik kalp desteğinde, durumu kritik. Karaciğerde sıranın başında elli sekiz yaşında bir adam var, eski bir alkol bağımlısı ama yıllardır ayık ve tıbben uygun.",
"Telefonun çalıyor, arayan başhekim yardımcısı Dr. Sinan. Sabahın sekizinde, sesi duştan yeni çıkmış gibi dinç.",
"“Barış, günaydın. Duydum, bir aday varmış. Şimdi şöyle bir şey var, karaciğer listesinde birinci sıradakinin alkol geçmişi var, biliyorsun. Bir daha değerlendirmek lazım. Dördüncü sırada çok önemli bir ailenin büyüğü var, milletvekili beyin babası. Ben sadece söylüyorum, sen bilirsin.”"
], secenekler: [
{ t: "“Hocam, liste listedir, kimseyi kaydırmam,” dersin.", to: "a6", etki: { adalet: 2, liste: "adil" } },
{ t: "“Bu benim kararım değil hocam, merkez verir,” deyip konuyu kapatırsın.", to: "a6", etki: { liste: "vip" } },
{ t: "Telefonu kapattıktan sonra konuşmayı yazıp ulusal merkeze bildirirsin.", to: "a6", etki: { adalet: 2, liste: "adil", ihbar: true } },
{ t: "Vakit kazanmak için “Bakarım hocam,” dersin.", to: "a6", etki: { liste: "vip", bakarim: true } }
]},

a6: { saat: "10.00", baslik: "Saat", metin: [
P(S("a5A"), "Sinan bir an sustu. “Tabii,” dedi, “ben de zaten öyle demek istedim.” Telefonu kapattı. Neyi kapattığını sonra öğrenecektin."),
P(S("a5B"), "“Tabii, merkez verir,” dedi Sinan, memnun bir sesle. Telefonu kapattıktan sonra kendi sesinin ne kadar rahat çıktığını düşündün."),
P(S("a5C"), "Bildirimi yazıp gönderdin. Merkezden bir kadın aradı. “Not ettik,” dedi, “bu tür telefonlar sandığınızdan sık geliyor.”"),
P(S("a5D"), "“Bakarım,” dedin, Sinan da memnun bir şekilde kapattı. Ekrandaki karaciğer listesini kapatıp yeniden açtın."),
"Saat on olmuş, Dr. Nihan arıyor. “Barış, tansiyonu düşüyor, ilacı artırdık. Beden dağılmaya başladı. On iki saat, belki daha az kaldı, sonra organlar kullanılamaz hâle gelir.”",
"Aile odasında daha bir karar çıkmadı. Ayten Hanım bir kere sana “evet” der gibi baktı, Erdal Bey bir kere yüksek sesle “Hayır” dedi. Yirmi beş yıllık evliliklerinin ortasından bir duvar geçiyor.",
"Ankara'da bir çocuk bir makineye bağlı yatıyor. Karaciğer listesinde bir liman işçisi ayık geçirdiği günleri sayıyor, dördüncü sırada bir milletvekilinin babası var. İzmir'de de yoğun bakımda ojesi yarısı dökülmüş bir kız yatıyor."
], secenekler: [
{ t: "Saat işlemeye devam ederken aileye kararın tamamen kendilerine ait olduğunu söyleyip geri çekilirsin.", to: "r1", etki: { riza: 2, kol: "saygi" } },
{ t: "Kuralı çiğneyip onlara bir çocuğun hayatını yükleyerek kalbi bekleyen çocuğu, yaşını, kaç aydır beklediğini anlatırsın.", to: "i1", etki: { sefkat: 1, kol: "israr", anonimlik: true } },
{ t: "Ailenin bunu destek mi baskı mı sayacağını bilmeden, oğlunun organlarını bağışlamış bir anneyi ve hastanenin manevi danışmanını çağırırsın.", to: "k1", etki: { sefkat: 1, kol: "topluluk" } },
{ t: "Aileyi bir meslektaşına bırakıp önce listeyi güvenceye almaya gidersin, en ağır saatlerinde yanlarında olmadan.", to: "y1", etki: { adalet: 2, kol: "sistem" } }
]},


bl_anne: { saat: "06.30", baslik: "Ayten", metin: [
"Ayten Hanım'ı koridora çıkarıyorsun. Erdal Bey sırtı size dönük, odada kalıyor.",
"Koridorun sonunda bir pencere, önünde iki plastik sandalye var. Birinin bir ayağı eksik, duvara yaslanmış duruyor. Ötekine Ayten Hanım oturuyor. Sen önce ayakta kalıyorsun, sonra çömeliyorsun.",
"“Duru'nun bir defteri var,” diyor. “Günlük değil, bir liste. ‘Ölmeden önce yapacaklarım’ diye. On beş yaşındayken yazmıştı. Ben gizlice okudum, okumamam gerekiyordu.”",
"“Birinci madde paraşütle atlamak. İkincisi annemle Paris'e gitmek. Üçüncüsü de ‘birine hayatımı borçlu olmak ya da birini bana borçlu bırakmak.’ O zaman çok gülmüştüm, ne biçim cümle bu diye. Kırmızı kalemle düzeltmek istemiştim.”",
"Elinde hâlâ kırmızı bir kalem varmış gibi eline bakıyor.",
"“Erdal'a söyleyemem, okuduğumu bilmiyor. Duru da bilmiyordu. Şimdi kızımın gizli defterini çıkarıp ölümünde mi kullanayım? Bu ona ihanet olmaz mı?”"
], secenekler: [
{ t: "“İhanet değil, bu Duru'nun sesi,” dersin.", to: "a4", etki: { sefkat: 1, liste_ses: true } },
{ t: "“Erdal Bey'e söyleyip söylememek sizin kararınız,” dersin.", to: "a4", etki: { riza: 1 } },
{ t: "Dürüst olmak istediğin için “On beş yaşında yazılmış bir cümle bir karar sayılmaz,” dersin.", to: "a4", etki: { adalet: 1, liste_sayilmaz: true } },
{ t: "Bir şey demeden yanındaki eksik ayaklı sandalyeye dikkatlice oturursun.", to: "a4", etki: { sefkat: 1 } }
]},

bl_koridor: { saat: "06.30", baslik: "Nihan", metin: [
"Dr. Nihan koridorda gözleri kapalı bir duvara yaslanmış duruyor. On altı saattir nöbette, önlüğünün cebinden bir bisküvi paketi sarkıyor. Seni duyunca gözlerini açıyor.",
"“Nasıl?” diye soruyor.",
"“Babası hayır diyor, annesi bir şey demiyor.”",
"Nihan bisküviyi çıkarıp sana uzatıyor. Sen almayınca kendisi yiyor. Sonra hiç beklemediğin bir şey söylüyor. “Ben de bazen emin olamıyorum.”",
"“Neyden?”",
"“Beyin ölümünden. Testler kesin, biliyorum ama yatağın başında o pembe yanakları görünce... Yirmi yıl oldu, yüzlerce tanı koydum. Her seferinde içimde küçücük bir ses ‘Ya yanılıyorsak?’ diyor. Bunu kimseye söylemedim. Sana söylüyorum, çünkü saat altı ve aklım yerinde değil.”",
"Bir hemşire geçerken ikinize bakıp adımlarını hızlandırıyor.",
"“Ailelere ‘kesin’ diyoruz,” diyor Nihan. “Demek zorundayız.”"
], secenekler: [
{ t: "“Bunu ailelere söylememiz sence doğru mu?” diye sorarsın.", to: "a4", etki: { adalet: 1, nihan_soru: true } },
{ t: "Daha önce kimseye söylemediğin bir şeyi söylersin: “Bende de var o ses.”", to: "a4", etki: { sefkat: 1, ses_itiraf: true } },
{ t: "“Testler kesin Nihan, o ses yorgunluktan,” dersin.", to: "a4", etki: { adalet: 1 } },
{ t: "Ona bir kahve getirirsin.", to: "a4", etki: { sefkat: 1 } }
]},

bl_kuzey: { saat: "Dört ay sonra", baslik: "Proje", metin: [
"Bir şubat sabahı tanımadığın bir numaradan bir mesaj geliyor: “Merhaba Barış Bey. Ben Kuzey, Duru'nun kardeşi. Annemin telefonundan yazıyorum. Okulda bilim fuarı var, gelir misiniz?”",
"Bir ortaokulun spor salonuna gidiyorsun. Masalarda yanardağ maketleri, güneş sistemleri, bir patates pili var. Kuzey'in masasında plastik bir kalp modeli duruyor. Odacıkları ayrı renklere boyanmış, sol karıncığın boyası biraz taşmış. Bir akvaryum pompası, bir hortum, kırmızı gıda boyasıyla renklendirilmiş su. Kuzey düğmeye basınca su kalbin içinde dolaşmaya başlıyor, bir yerden sızıp masaya damlıyor, Kuzey de peçeteyle siliyor.",
"Posterin başlığında “Kalp Nasıl Çalışır? (Ve Neden Başka Birinde de Çalışabilir?)” yazıyor.",
"Seni görünce kulakları kızarıyor, sonra kan gruplarını, doku uyumunu, ret ilaçlarını anlatmaya başlıyor. Hepsini okumuş.",
"Sesini alçaltıyor. “Öğretmenim neden bu konuyu seçtiğimi sordu, söylemedim. Siz de söylemeyin.”",
"Bir yandan simit yiyen bir jüri üyesi yaklaşıyor. “Bir kalp başka bir bedende de aynı kalp midir?” diye soruyor.",
"Kuzey önce sana bakıyor, sonra jüriye dönüyor."
], secenekler: [
{ t: "Kuzey'in cevabını beklersin.", to: "t4", etki: { riza: 1, kuzey_cevap: true } },
{ t: "Kuzey'e kaşınla küçük bir işaret yaparsın, hadi.", to: "t4", etki: { sefkat: 1, kuzey_cevap: true } },
{ t: "Fuardan sonra Kuzey'e bu projeyi neden seçtiğini sorarsın.", to: "t4", etki: { sefkat: 1, neden_sordu: true } },
{ t: "Jüriye Kuzey'in bilmediği bir ayrıntıyı anlatırsın, kalbin sinirlerinin kesildiğini, eski bedenini “hatırlamadığını.”", to: "t4", etki: { adalet: 1, sinir: true } }
]},

bl_esra: { saat: "Dört ay sonra", baslik: "Esra", metin: [
P(VAR, "Mektup masanda duruyor. Okudun ama bir şey olmadı. Bir haftadır hiçbir şeyde bir şey olmuyor."),
P(YOK, "Ayten Hanım'ın telefonundan sonra hiçbir şey yapmadın, ne aradın ne yazdın. Bir haftadır hiçbir şeyde bir şey olmuyor."),
"Bir öğle arası Esra elinde iki çayla kapını çalıp içeri giriyor, oturuyor.",
"“Barış, geçen hafta bir aileyle konuştun, ben kapıdaydım. Sesin teyp kaydı gibiydi. Cümleler doğru, sıra doğru ama içinde kimse yoktu.”",
"Çayına şeker atıyorsun, oysa hiç atmazdın.",
"“Ben de yaşadım,” diyor Esra. “Üç yıl önce. Bir gece bir aile benden nefret etti, ertesi gece başka bir aile bana sarıldı. Üçüncü gece ikisini de hatırlamadığımı fark ettim. Bir psikoloğa gittim, kocama bile söylemedim.”",
"Kaşığı bardağın kenarına vurup bırakıyor. “Bir şey yapman lazım. Ne, bilmiyorum ama lazım.”"
], secenekler: [
{ t: "Esra'dan gittiği psikoloğun adını istersin.", to: "t4", etki: { sefkat: 1, psikolog: true } },
{ t: "“Ben iyiyim Esra,” dersin, ikiniz de inanmadan.", to: "t4", etki: { yorgun: true } },
{ t: function(d){ return VAR(d) ? "Mektubu bir kez daha, Esra'nın yanında, yüksek sesle okursun." : "Esra'ya Ayten Hanım'ın sorusunu anlatırsın: “Doğru mu yaptık?”"; }, to: "t4", etki: function(d){ d.sefkat++; if(VAR(d)) d.yuksek_sesle = true; else d.esraya_anlatti = true; } },
{ t: "Bir hafta izin istersin.", to: "t4", etki: { riza: 1, izin: true } }
]},

/* ---------- SAYGI KOLU ---------- */
r1: { saat: "10.20", baslik: "Geri Çekilmek", metin: [
"Aile odasına girip oturuyorsun, bu sefer bir şey istemek için değil.",
"“Ayten Hanım, Erdal Bey, hayır derseniz kimse size kötü gözle bakmaz. Ben bakmam, bu hastane bakmaz. Ne karar verirseniz verin, Duru'ya son ana kadar aynı özenle bakacağız.”",
"Erdal Bey'in omuzları düşüyor. Bütün sabah bir kavgaya hazırlanmış, kavga gelmeyince ellerini nereye koyacağını bilemiyor, dizlerine koyuyor.",
"Ayten Hanım ağlamaya başlıyor, önce sessizce, sonra sesli sesli.",
"“Ben vermek istiyordum,” diyor, kocasına değil, sana. “Bana kimse sormadı. O hayır dedi, siz de saygı duydunuz. Bana kim saygı duyacak?”",
"Erdal Bey karısına dönüyor. Yirmi beş yıldır bu sesi hiç duymamış.",
"“Kalbi bir yerde atsın istiyorum,” diyor Ayten Hanım. “Toprağın altında durmasın, bir yerde atsın.”"
], secenekler: [
{ t: "Bu konuşma onların, odadan çıkıp onları yalnız bırakırsın.", to: "r2", etki: { riza: 1 } },
{ t: "İkisinin arasına oturup konuşmalarına yardım edersin.", to: "r2", etki: { sefkat: 1, arabulucu: true } },
{ t: "Erdal Bey'e Diyanet'in görüşünü yazılı olarak verirsin.", to: "r2", etki: { adalet: 1, fetva: true } },
{ t: "Ayten Hanım'ın tarafını tutarsın: “Sizin de sesiniz var.”", to: "r2", etki: { sefkat: 1, ayten_yaninda: true } }
]},

r2: { saat: "14.00", baslik: "Kalp Yalnız", metin: [
P(S("r1A"), "Kapıyı kapattın, dört saat konuştular. Bir yerde Erdal Bey'in sesi yükseldi, bir yerde Ayten Hanım'ınki. Sonra uzun bir sessizlik oldu, sonra kapı açıldı."),
P(S("r1B"), "Aralarına oturdun. Erdal Bey'in korkusunu, kızının “kesilip biçilmesinden”, “eksik gömülmesinden” korktuğunu dinledin. Ayten Hanım'ın isteğini, “bir yerde atsın” demesini dinledin. Sonunda Erdal Bey karısına dönüp “Sen ne istiyorsun?” diye sordu. Ayten Hanım'ın yüzünden anladığın kadarıyla bunu gerçekten bir soru olarak ilk kez soruyordu."),
P(S("r1C"), "Erdal Bey kâğıdı iki kere okudu, katlayıp yeleğinin cebine koydu. “Allah izin veriyormuş,” dedi, “ben veriyor muyum, onu bilmiyorum.”"),
P(S("r1D"), "Erdal Bey sana döndü. “Siz aramıza giriyorsunuz,” dedi. Doğruydu ama Ayten Hanım'ın sesini o odada duyan da yalnızca sendin."),
"Öğleden sonra ikide kapı açılıyor, Erdal Bey ayakta duruyor. Bir gecede yüzü çökmüş, yeleğinin fermuarı yarıya kadar inmiş.",
"“Kalbini verelim,” diyor. “Yalnızca kalbini, annesi istiyor. Gerisini vermem. Karnını açtırmam, gözlerine dokundurmam. Kalp, o kadar.”",
"Bir kalp, dokuz yaşında bir çocuk için. Karaciğer, iki böbrek, iki kornea da var. Dört beş kişi daha listede beklemeye devam edecek.",
"Ayten Hanım kocasının yeleğinin fermuarını yukarı çekiyor, bir şey diyecek gibi oluyor ama demiyor."
], secenekler: [
{ t: "Kabul edip teşekkür edersin, yalnızca kalp.", to: "r3", etki: { riza: 1, bagis: "kalp" } },
{ t: "Karaciğerin ve böbreklerin de dört kişiyi kurtarabileceğini anlatırsın.", to: "r3", etki: function(d){ d.adalet++; d.israr_kismi = true; d.bagis = d.fetva || d.arabulucu ? "tam" : "yok"; } },
{ t: "Ayten Hanım'la yalnız konuşmak istersin.", to: "r3", etki: function(d){ d.sefkat++; d.bagis = "kalp"; d.ayten_yalniz = true; } },
{ t: "Erdal Bey'e kalbin nasıl alınacağını, bedenin nasıl kapatılacağını, Duru'nun “bütün” gömüleceğini anlatırsın.", to: "r3", etki: { sefkat: 1, adalet: 1, bagis: "kalp", butun_anlatti: true } }
]},

r3: { saat: "16.00", baslik: "Karar Sonrası", metin: [
P(function(d){ return d.israr_kismi && d.bagis === "tam"; }, "Erdal Bey seni dinledi, elinde ya Diyanet'in kâğıdı ya da karısının eli vardı. Sonra “Tamam,” dedi, “hepsi. Ama gözleri kalsın, gözlerini bana bırakın.” Gözler kaldı, gerisi gitti."),
P(function(d){ return d.israr_kismi && d.bagis === "yok"; }, "Erdal Bey'in yüzü kapandı. “Ben size bir kalp verdim,” dedi, “siz fazlasını istiyorsunuz. Hiçbir şey vermiyorum.” Ayten Hanım “Erdal!” diye bağırdı. Erdal Bey kapıyı çekip çıktı. Kapıyı o çekmişti ama sen itmiştin, bunu ikiniz de biliyordunuz."),
P(S("r2C"), "Ayten Hanım'la koridorda konuştun. “Bana sorduğunuz için teşekkür ederim,” dedi, “babam sormazdı, kocam da sormaz.” Kalbe evet dedi ama gerisine ikisi de razı değildi."),
P(S("r2D"), "Erdal Bey kesiği, dikişi, örtüyü, kefeni dinledi. “Bütün mü olacak?” diye sordu. Bütün olacak dedin, kalbi olmadan. Erdal Bey yere baktı. “Tamam,” dedi. Bir babanın o gün verebileceği evet buydu."),
P(VAR, "Ulusal merkeze bildiriyorsun. Birkaç dakika sonra onay geliyor, kalp Ankara'ya gidecek, alıcı belirlendi. Bir ekip, bir uçak ve bir soğuk kutu yola çıkacak."),
P(YOK, "Ulusal merkezi arayıp bağış olmadığını söylüyorsun. Karşıdaki ses bir an duruyor. “Anladım,” diyor, “ailesine başsağlığı dilerim.” Duru'nun numarası listeden siliniyor. Ankara'daki çocuk başka bir geceyi bekleyecek."),
"Akşamüstü yoğun bakımdasın. Ayten Hanım kızının saçını tarıyor, tarağı çantasından çıkarmış, Duru'nunmuş, kırmızı plastik, iki dişi kırık. Erdal Bey yatağın ayak ucunda mavi ojeli parmağı tutuyor. Kuzey kapıda duruyor, içeri girmeye korkuyor."
], secenekler: [
{ t: "Kuzey'i içeri alıp ablasının yanına götürürsün.", to: "t1", etki: { sefkat: 1, kuzey_iceri: true } },
{ t: "Aileyi yalnız bırakırsın.", to: "t1", etki: { riza: 1 } },
{ t: "Ayten Hanım'a Duru'nun saçından bir tutam kesip saklamayı önerirsin.", to: "t1", etki: { sefkat: 1, sac: true } },
{ t: "İşin bu, ekip için hazırlıklara gidersin.", to: "t1", etki: { adalet: 1 } }
]},

/* ---------- ISRAR KOLU ---------- */
i1: { saat: "10.20", baslik: "Dokuz Yaş", metin: [
"Kural açık, alıcının kim olduğu donör ailesine söylenmez. Bir aile bağışı borç gibi görmesin, öbür aile de bir hayatı başkasının gölgesinde yaşamasın diye.",
"Aile odasına girip oturuyor ve kuralı çiğniyorsun.",
"“Ankara'da dokuz yaşında bir çocuk var. On dört aydır kalp bekliyor. Göğsünde bir makine var, kalbi tek başına çalışamıyor. On dört aydır hastanede yatıyor, okula gidemiyor. Doktorları birkaç haftası kaldığını düşünüyor.”",
"Ayten Hanım'ın elleri ağzına gidiyor. Dokuz yaş.",
"Erdal Bey ayağa fırlıyor, sandalyesi arkaya devriliyor.",
"“Bizi suçlu mu çıkaracaksın?” diye bağırıyor. “Kızım bu sabah öldü! Sen bana başkasının çocuğunu mu anlatıyorsun? Kızımın kalbini koparmak için mi?”",
"Devrilen sandalye yerde duruyor, kimse kaldırmıyor.",
"Ayten Hanım kocasının koluna yapışmış. “Dokuz yaşında,” diyor, “dokuz yaşında.”"
], secenekler: [
{ t: "Kuralı çiğnediğin için özür dilersin.", to: "i2", etki: { riza: 1, ozur: true } },
{ t: "Geri adım atmadan “Suçlu değilsiniz, yalnızca bilmenizi istedim,” dersin.", to: "i2", etki: { adalet: 1 } },
{ t: "Ayten Hanım'ın yanına oturursun.", to: "i2", etki: { sefkat: 1 } },
{ t: "Odadan çıkan Erdal Bey'in peşinden gidersin.", to: "i2", etki: { sefkat: 1, erdal_pesinden: true } }
]},

i2: { saat: "11.30", baslik: "Mescit", metin: [
P(S("i1A"), "Özür diledin ama Erdal Bey seni dinlemeden çıktı. Ayten Hanım arkasından “Gitme,” dedi, o yine de gitti."),
P(S("i1B"), "“Bilmemizi istedin,” dedi Erdal Bey. “Ben bu bilgiyle ne yapayım? Ankara'da bir çocuk ölünce ömür boyu ‘benim yüzümden’ mi diyeyim?” Sonra çıktı."),
P(S("i1C"), "Ayten Hanım'ın yanına oturdun, dizleri titriyordu. Erdal Bey ikinize baktı, sonra çıktı. Kapıyı çarpmadı, yavaşça kapattı ve bu daha kötüydü."),
P(S("i1D"), "Erdal Bey'in peşinden çıktın. Önce hızlı yürüyordu, sonra yavaşladı, sonra bir kapının önünde durdu."),
"Hastanenin mescidi bodrum katta. Küçük bir oda, halısı ayak izlerinden yer yer açılmış. Erdal Bey içeride duvara yaslanmış oturuyor, namaz kılmıyor.",
"Ayakkabılarını çıkarıp karşısına oturuyorsun. Çorabının ucunda bir delik olduğunu görüp ayağını altına çekiyorsun.",
"Halıya bakarak konuşmaya başlıyor.",
"“Babam öldüğünde onu köyde yıkadık. Ben yıkadım, amcam yıkadı, bütün bedenini. Hiçbir yeri eksik değildi. Ben de kızımı öyle göndermek istiyorum.”",
"Sonra sesi değişiyor. “Ama dokuz yaşında dedin. Ben dokuz yaşındayken de babam beni otobüse bindirmişti, şoförün yanındaki koltuğa oturtmuştu. O gün şoför olacağım dedim.”"
], secenekler: [
{ t: "Duru'nun da bütün gömüleceğini, kesiğin kapatılacağını anlatırsın.", to: "i3", etki: { sefkat: 1, butun_anlatti: true } },
{ t: "Bir şey demeden onunla birlikte oturursun.", to: "i3", etki: { riza: 1, mescit_sessiz: true } },
{ t: "“Babanız size otobüsü verdi. Siz Duru'ya ne vermek istersiniz?” diye sorarsın.", to: "i3", etki: { sefkat: 1, soru: true } },
{ t: "“Yanlış yaptım, size o çocuğu anlatmamalıydım,” dersin.", to: "i3", etki: { riza: 1, pisman: true } }
]},

i3: { saat: "13.00", baslik: "Evet", metin: [
P(S("i2A"), "Erdal Bey kesiği, dikişi, örtüyü, kefeni dinledi. “Bütün mü olacak?” diye sordu. Bütün olacak dedin, kalbi olmadan ama bütün. Halının bir ipliğini çekiştirip durdu."),
P(S("i2B"), "Yarım saat oturdunuz. Bir ara Erdal Bey ellerini açtı, dudakları kıpırdadı. Sonra yüzünü sıvazlayıp kalktı, ayakkabılarını giymeden kapıya yürüdü, sonra dönüp giydi."),
P(S("i2C"), "Erdal Bey sana baktı. “Ne vermek isterdim? Her şeyi.” Sustu. “Ona artık veremem.” Bir süre daha sustu. “Başkasına belki.”"),
P(S("i2D"), "“Yanlış yapmadın,” dedi Erdal Bey ve sen şaşırdın. “Söylemeseydin bilmeyecektim. Bilmesem hayır demek kolay olurdu, şimdi zor. Ama zor diye yanlış değil.”"),
"Aile odasına dönüyorsunuz. Devrilen sandalye kaldırılmış, onu Ayten Hanım kaldırmış. Kocasının yüzüne bakıyor.",
P(function(d){ return d.butun_anlatti || d.soru; }, "“Verelim,” diyor Erdal Bey. “Kalbini, karaciğerini, böbreklerini, ne lazımsa. Bir şartım var, ameliyattan sonra kızımı ben yıkayacağım.”"),
P(function(d){ return !(d.butun_anlatti || d.soru); }, "“Kalbini verelim,” diyor Erdal Bey. “O çocuk için. Başka bir şey değil.”"),
"Ayten Hanım kocasına sarılıyor. Erdal Bey'in kolları bir süre havada kalıyor, sonra karısının etrafına kapanıyor.",
"Sonra Ayten Hanım sana dönüyor. “O çocuğun adını öğrenebilir miyiz? Bir gün onu görebilir miyiz? Duru'nun kalbini duyabilir miyiz?”"
], secenekler: [
{ t: "“Hayır, bu kural ikiniz için de var,” dersin.", to: "t1", etki: function(d){ d.adalet++; d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; } },
{ t: "“Bir gün, belki. İki aile de isterse,” dersin.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; d.belki_dedi = true; } },
{ t: "“Size isimsiz bir mektup ulaştırabilirim,” dersin.", to: "t1", etki: function(d){ d.riza++; d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; d.mektup_soz = true; } },
{ t: "Şimdilik cevap vermezsin.", to: "t1", etki: function(d){ d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; } }
]},

/* ---------- TOPLULUK KOLU ---------- */
k1: { saat: "11.00", baslik: "Nurgül", metin: [
"Nurgül Hanım'ı aradığında o da ağlamaya başlıyor. Seni tanıyor. Beş yıl önce, bir mart gecesi yirmi bir yaşındaki oğlu Yiğit'in organlarını bağışlamıştı, o gece de sen vardın.",
"Bir saat sonra hastanede. Altmışlarında bir kadın, başörtüsünün ucu ceketinin yakasına sıkışmış, kucağında bir fotoğraf albümü var. Ayten Hanım'ın yanına oturuyor.",
"“Ben de sizin gibiydim,” diyor. “Bu odada, belki bu sandalyede. Oğlum yirmi bir yaşındaydı, motosiklet kazası.”",
"Albümü açıyor. Yiğit bebekken, ilkokul önlüğüyle, askerde bıyıklı. Son sayfada plastiğin içinde bir mektup duruyor.",
"“Geçen yıl geldi, isimsiz. Oğlumun böbreğini alan bir öğretmenden. Okuyayım mı?”",
"Ayten Hanım başıyla evet diyor.",
"“‘On iki yıl diyalize girdim, haftada üç gün, dörder saat. Şimdi her sabah okula gidiyorum. Geçen hafta öğrencilerime organ bağışını anlattım. Bir çocuk “Öğretmenim, içinizde başkası mı yaşıyor?” diye sordu. Ben de “Evet, ama şimdi benimle birlikte ders anlatıyor,” dedim.’”",
"Ayten Hanım da öğretmen, elini ağzına bastırıyor. Erdal Bey duvara bakıyor. Bir yabancının kederinin kendi kederinin içine getirilmesinden rahatsız, ayağını durmadan yere vuruyor."
], secenekler: [
{ t: "Nurgül Hanım'a teşekkür edip onu aileyle yalnız bırakırsın.", to: "k2", etki: { riza: 1 } },
{ t: "Erdal Bey'in yanına gidersin.", to: "k2", etki: { sefkat: 1, erdal_yaninda: true } },
{ t: "Dürüst olsun diye Nurgül Hanım'dan hayır deyip pişman olan aileleri de anlatmasını istersin.", to: "k2", etki: { adalet: 1, durust_gulsum: true } },
{ t: "Bu kadarı yeter diye albümü kapatırsın.", to: "k2", etki: { riza: 1, album_kapandi: true } }
]},

k2: { saat: "12.00", baslik: "Danışman", metin: [
P(S("k1A"), "Nurgül Hanım'la Ayten Hanım bir saat konuştular. Nurgül Hanım çıkarken sana sarıldı. “Annesi istiyor,” dedi, “babası korkuyor. Benim kocam da korkmuştu. Şimdi her bayram o öğretmene adını bilmeden dua ediyor.”"),
P(S("k1B"), "Erdal Bey'in yanında durdun. “Başkasının hikâyesi bu,” dedi, “benimki değil.” Sonra ekledi: “Ama o kadın oğlunu anlatırken gülümsüyordu. Ben bir gün kızımı anlatırken gülümseyebilecek miyim?”"),
P(S("k1C"), "Nurgül Hanım önce şaşırdı, sonra başını eğdi. “Var,” dedi. “Hayır deyip pişman olanı da tanırım, evet deyip pişman olanı da. Ne derseniz deyin, bir gün bir şeye pişman olacaksınız.” Erdal Bey Nurgül Hanım'a ilk kez baktı."),
P(S("k1D"), "Albümü kapattın, Nurgül Hanım da anladı. “Benim acım onlarınkini büyütmesin,” deyip kalktı. Kapıda Ayten Hanım seslendi: “Bekleyin, biraz daha kalın.”"),
"Öğlen manevi danışman geliyor, emekli bir müftü yardımcısı olan gönüllü Mustafa Hoca. Elindeki kehribar tespihin bir tanesi eksik.",
"Erdal Bey'le köşede konuşuyorlar. Bir yerde Erdal Bey'in sesi yükseliyor: “Kıyamet günü!” Mustafa Hoca sakin sakin cevap veriyor. “Kıyamet günü Allah toprakta çürüyen bedeni de bilir Erdal Bey, bir başkasının göğsünde atan kalbi de.”",
"“Fetva benim kızımı tanımaz hocam,” diyor Erdal Bey.",
"“Tanımaz,” diyor Mustafa Hoca, “ama siz tanıyorsunuz. Siz söyleyin, kızınız ne isterdi?”"
], secenekler: [
{ t: "Erdal Bey'e Kuzey'in sana söylediklerini anlatırsın.", to: "k3", etki: { sefkat: 1, kuzey_anlatti: true } },
{ t: "Bu konuşma onların, karışmazsın.", to: "k3", etki: { riza: 1 } },
{ t: "Baskı fazlalaştı diye Mustafa Hoca'ya teşekkür edip konuşmayı bitirmesini istersin.", to: "k3", etki: { riza: 1, baski_bitti: true } },
{ t: "Ayten Hanım'ı da çağırırsın.", to: "k3", etki: { sefkat: 1, ayten_cagrildi: true } }
]},

k3: { saat: "14.00", baslik: "Aile Meclisi", metin: [
P(S("k2A"), "Kuzey'in “Ablamın kalbi başkasında atarsa ablam yaşar mı?” diye sorduğunu anlattın. Erdal Bey'in yüzü çöktü. “Oğlum bunu mu sordu?” dedi ve kantine yürüdü. Yarım saat sonra Kuzey'in elini tutarak döndü, Kuzey'in elinde hâlâ o çiğnenmiş pipet vardı."),
P(S("k2B"), "Karışmadın, bir saat daha konuştular. Sonunda Erdal Bey hocanın elini öptü. Bu bir karar mıydı yoksa bir teşekkür mü, anlayamadın."),
P(S("k2C"), "Mustafa Hoca anlayışla kalktı, Erdal Bey de arkasından baktı. “İyi adam,” dedi, “ama hepiniz benden bir şey istiyorsunuz, hepiniz.”"),
P(S("k2D"), "Ayten Hanım geldi, hoca sorusunu tekrarladı. Ayten Hanım kocasının yerine cevap verdi: “Geçen ay kan vermek istedi, yaşı tutmadı, kızdı.” Erdal Bey karısına baktı, bilmiyordu."),
"Öğleden sonra akrabalar gelmeye başlıyor, dede, iki amca, bir teyze, kuzenler. Aile odası doluyor, koridora taşıyor. Biri börek getirmiş, kâğıt tabaklar elden ele dolaşıyor ama kimse yemiyor.",
"Herkesin bir fikri var. Amcalardan biri “Bizde böyle şey olmaz,” diyor, teyze “Duru olsa verirdi,” diyor, seksen yaşındaki dede “Erdal ne derse o,” diyor. Bir kuzen telefonundan nakil olmuş bir adamın ilk adımlarını gösteren bir video açıyor, arkada alkışlar duyuluyor, sesini kısmayı unutmuş.",
"Erdal Bey odanın ortasında duruyor. Bir babanın kızı hakkında vereceği karar bir aile meclisine dönüşüyor.",
"Dr. Nihan kapıdan başını uzatıp sana bakıyor, tansiyon düşüyor."
], secenekler: [
{ t: "Akrabalardan odayı boşaltmalarını istersin, karar anne babanın.", to: "t1", etki: function(d){ d.riza += 2; d.bagis = (d.kuzey_anlatti || d.ayten_cagrildi || d.durust_gulsum) ? "tam" : "kalp"; d.oda_bosaldi = true; } },
{ t: "Bu ailenin yolu bu, meclisin karar vermesine izin verirsin.", to: "t1", etki: function(d){ d.bagis = (d.kuzey_anlatti || d.erdal_yaninda) ? "kalp" : "yok"; d.meclis_karar = true; } },
{ t: "Zamanı açıkça söylersin: “Birkaç saatimiz var.”", to: "t1", etki: function(d){ d.adalet++; d.bagis = d.baski_bitti ? "yok" : "tam"; d.zaman_baskisi = true; } },
{ t: "Erdal Bey'i koridora çıkarıp yalnız konuşursun.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = (d.album_kapandi || d.baski_bitti) ? "kalp" : "tam"; } }
]},

/* ---------- SİSTEM KOLU ---------- */
y1: { saat: "10.20", baslik: "Merkez", metin: [
"Aileyi meslektaşın Esra'ya bırakıyorsun. Esra'nın gözlerinde “Şimdi mi?” diye bir soru var. Evet, şimdi. Bir organ bağışlanır da yanlış yere giderse bu ailenin verdiği şey bir oyunun içinde kaybolup gider.",
"Ofiste kapıyı kapatıp ulusal merkezi arıyorsun. Ankara'da Seçil Hanım açıyor, yıllardır tanışırsınız ama hiç yüz yüze görüşmediniz.",
P(function(d){ return d.ihbar; }, "“Sabahki bildiriminizi aldık,” diyor Seçil Hanım. “Bu sabah sizin hastaneden bir itiraz daha gelmiş, karaciğer listesindeki birinci hastanın uygunluğuna. Siz mi gönderdiniz?” Hayır diyorsun."),
P(function(d){ return !d.ihbar; }, "Sinan'ın telefonunu, “önemli aile”yi, “sen bilirsin”i anlatıyorsun. Seçil Hanım dinliyor. “Bu sabah sizin hastaneden zaten bir itiraz gelmiş,” diyor, “birinci hastanın alkol geçmişi gerekçesiyle. Altında başhekim yardımcısının imzası var.”"),
"“İnceleyeceğiz,” diyor Seçil Hanım. “Alkol geçmişi tıbbi bir kriter. İki yıllık ayıklık belgesi varsa itiraz reddedilir. Var mı?”",
"Dosyayı açıyorsun. Elli sekiz yaşında, emekli bir liman işçisi. Dosyaya bir fotoğraf iliştirilmiş, kırmızı bir vincin önünde baretini koltuğunun altına almış bıyıklı bir adam. Ayıklık belgesinde bir yıl on bir ay yazıyor.",
"Bir ay eksik."
], secenekler: [
{ t: "Kuralı olduğu gibi uygularsın, bir ay eksik, itiraz geçerli. Ama nedenini yazılı olarak kayda geçirirsin.", to: "y2", etki: { adalet: 1, liste: "kural", kural_yazdi: true } },
{ t: "Adamın bağımlılık doktorunu arayıp güncel bir değerlendirme istersin.", to: "y2", etki: { adalet: 1, sefkat: 1, liste: "adil", rapor: true } },
{ t: "Sinan'ın itirazının arkasındaki baskıyı resmî olarak bildirirsin.", to: "y2", etki: { adalet: 2, liste: "adil", resmi: true } },
{ t: "Elinden geleni yaptın, kararı Seçil Hanım'a bırakırsın.", to: "y2", etki: { liste: "vip" } }
]},

y2: { saat: "12.30", baslik: "Sinan", metin: [
P(S("y1A"), "Kuralı uyguladın ve liman işçisi listeden düştü. İkinci ve üçüncü sıradakiler uyumsuzdu, dördüncü sıradaki birinci oldu. Her şey yasaldı ama sen nedenini yazıp altına adını attın."),
P(S("y1B"), "Bağımlılık doktoru bir saat içinde rapor gönderdi: “Yirmi üç aydır ayık, düzenli takipte. Bir aylık farkın klinik bir önemi yoktur.” Merkez itirazı reddetti, liman işçisi sırasını korudu."),
P(S("y1C"), "Saatleriyle, isimleriyle üç sayfalık bir bildirim yazdın. Seçil Hanım teşekkür etti. “Bir yere gider mi bilmem,” dedi, “ama gider diye yazıyoruz.”"),
P(S("y1D"), "Kararı Seçil Hanım'a bıraktın. Telefonu kapattıktan sonra vinçli fotoğrafı dosyaya geri koyup dosyayı kapattın."),
"Öğle arası Sinan seni odasına çağırıyor. Penceresi denize bakıyor. Masasında aile fotoğrafları, bir futbol takımının flaması ve bir orkide var, yapraklarından biri sararmış.",
"“Barış,” diyor gülümseyerek, “merkezden telefon aldım. Sen mi aradın?”",
"Gülümsemesi yerinde ama gözleri gülmüyor.",
"“On beş yıldır bu hastaneyi ben döndürüyorum. Bütçe, cihaz, kadro, hepsi ilişkilerle olur. Yeni yoğun bakım ünitesini kim yaptırdı biliyor musun? Senin çalıştığın üniteyi. Ben bir şey istemedim, yalnızca bir dosyanın bir daha incelenmesini istedim.”",
"Orkidenin sararmış yaprağını tırnağıyla koparıyor. “Sözleşmen önümüzdeki ay yenileniyor, değil mi?”"
], secenekler: [
{ t: "“Evet hocam. Yenilense de yenilenmese de liste listedir,” dersin.", to: "y3", etki: { adalet: 2, direndi: true } },
{ t: "Kendini koruyarak “Haklısınız hocam, ben de yalnızca kuralı uyguladım,” dersin.", to: "y3", etki: { kendini_korudu: true } },
{ t: "Telefonunu masaya koyup konuşmayı kaydettiğini söylersin.", to: "y3", etki: { adalet: 1, kayit: true } },
{ t: "Bir şey demeden odadan çıkarsın.", to: "y3", etki: { riza: 1 } }
]},

y3: { saat: "13.30", baslik: "Geri Dönüş", metin: [
P(S("y2A"), "Sinan'ın gülümsemesi silindi. “Görürüz,” dedi. Sen kapıdayken ekledi: “Kahramanlar genelde başka hastanelere gider Barış.”"),
P(S("y2B"), "Sinan memnun bir şekilde arkasına yaslandı. “İşte böyle,” dedi, “hepimiz kuralları uyguluyoruz.” Kapıdan çıkarken ağzında metal tadı vardı."),
P(S("y2C"), "Sinan'ın yüzü bembeyaz oldu. “Bunu yapamazsın,” dedi ama yapmıştın. Bir süre sustu. “Ne istiyorsun?” Hiçbir şey istemediğini, yalnızca listenin liste kalmasını istediğini söyledin."),
P(S("y2D"), "Kapıyı arkandan kapattın, Sinan bir şey demedi. Bunun ne demek olduğunu ikiniz de biliyordunuz."),
"Aile odasına dönüyorsun. Üç saat geçmiş, Esra kapıda yorgun bir yüzle duruyor.",
"“Annesi evet diyor,” diyor Esra, “babası hâlâ hayır. Beni tanımıyorlar Barış, ‘Sabahki adam nerede?’ diye soruyorlar.”",
"İçeri giriyorsun. Ayten Hanım ayağa kalkıyor, Erdal Bey kalkmıyor.",
"“Nereye gittin?” diyor Erdal Bey. Öfkeli değil, kırgın. “Bütün sabah buradaydın, sonra gittin. Kızımız burada ölürken başka bir işe mi gittin?”"
], secenekler: [
{ t: "Listeyi, baskıyı, neden gittiğini, her şeyi anlatırsın.", to: "t1", etki: function(d){ d.adalet++; d.bagis = "tam"; d.anlatti_liste = true; } },
{ t: "Başka bir açıklama yapmadan “Özür dilerim, burada olmalıydım,” dersin.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = "kalp"; } },
{ t: "“Kararınız ne olursa olsun, şimdi buradayım,” dersin.", to: "t1", etki: function(d){ d.riza++; d.bagis = "yok"; } },
{ t: "Erdal Bey'in yanına oturup kızını anlatmasını istersin.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = "tam"; d.duru_anlatildi = true; } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Akşam", baslik: "Koridor", metin: [
P(S("r3A"), "Kuzey'i içeri aldın. Önce yatağa yaklaşmadı, sonra ablasının mavi ojeli parmağına dokundu. “Soğuk değil,” dedi, sana dönüp. Bir açıklama bekliyordu ama veremedin."),
P(S("r3B"), "Aileyi yalnız bıraktın. Kapının camından son gördüğün şey, bir yatağın üstüne eğilmiş üç sırttı."),
P(S("r3C"), "Bir tutam saç kesmeyi önerdin. Makası Erdal Bey aldı, elleri titremedi. Tutamı yelek cebinden çıkardığı ütülü bir mendile sardı."),
P(S("r3D"), "Hazırlıklara gittin, telefonlara, saatlere, uçağa. Koridorda arkandan Ayten Hanım'ın sesi geldi, kızına sözlerini unutup baştan aldığı bir şarkı mırıldanıyordu."),
P(S("k3B"), "Meclis karar verdi. Dede konuştu, amcalar konuştu, teyze ağladı. Karar bir saat sonra bir oylamayla değil, bir yorgunlukla çıktı."),
P(S("y3C"), "“Şimdi buradayım,” dedin. Erdal Bey sana baktı. “Kararımız hayır,” dedi, “sen yokken verdik.”"),
P(function(d){ return d.bagis === "tam"; }, "Tam bağış kararı çıktı. Kalp, karaciğer, iki böbrek, iki kornea, altı kişi."),
P(function(d){ return d.bagis === "kalp"; }, "Yalnızca kalp verilecek, bir kişiye, dokuz yaşında bir çocuğa."),
P(YOK, "Bağış yapılmayacak, Duru bütün gidecek."),
P(VAR, "Akşam yedide nakil ekipleri hastaneye geliyor, Ankara'dan kalp ekibi, İstanbul'dan karaciğer ekibi. Ameliyathanenin ışıkları yanıyor."),
P(VAR, "Hastanede birkaç yıldır senin başlattığın bir âdet var. Donör yoğun bakımdan ameliyathaneye götürülürken çalışanlar koridorun iki yanında sıraya diziliyor. Hemşireler, doktorlar, temizlik görevlileri, güvenlik görevlileri, sedye geçerken başlarını eğiyorlar."),
P(VAR, "Bu akşam koridorda kırk kişi var ve kimse onları çağırmadı. Kafeteryadaki kadın önlüğüyle gelmiş, elleri hâlâ unlu. Ayten Hanım'la Erdal Bey sedyenin iki yanında yürüyor, Kuzey teyzesinin elini tutuyor."),
P(YOK, "Akşam yedide Dr. Nihan solunum cihazını kapatmaya hazırlanıyor. Yasal olarak bu bir tedavinin kesilmesi değil, ölmüş bir bedenin makineden ayrılması."),
P(YOK, "Ayten Hanım'la Erdal Bey yatağın iki yanında, Kuzey kapıda duruyor. Nihan sana bakıyor, hazır mıyız diye. Aile hazır değil.")
], secenekler: [
{ t: function(d){ return VAR(d) ? "Sedyenin önünde yürürsün. Yolu açarak." : "Cihaz kapatılırken ailenin yanında durursun."; }, to: "t1b", etki: { sefkat: 1 } },
{ t: function(d){ return VAR(d) ? "Koridordaki sıraya katılır, başını eğersin." : "Kuzey'i kapıdan alıp ailesinin yanına götürürsün."; }, to: "t1b", etki: function(d){ d.riza++; if(YOK(d)) d.kuzey_iceri = true; } },
{ t: function(d){ return VAR(d) ? "Ameliyathane kapısında Ayten Hanım'ın elini tutarsın." : "Ayten Hanım'ın elini tutarsın."; }, to: "t1b", etki: { sefkat: 1 } },
{ t: "Biri bunları yapmalı diye kendini işine, kâğıtlara, saatlere, ekiplere verirsin.", to: "t1b", etki: { adalet: 1 } }
]},

t1b: { saat: "Gece", baslik: "Son Saat", metin: [
P(function(d){ return d.son === "t1A" && VAR(d); }, "Sedyenin önünde kapıları aça aça yürüdün, arkandan tekerleklerin sesi geliyordu. Tekerleklerden biri hafifçe yalpalıyordu."),
P(function(d){ return d.son === "t1A" && YOK(d); }, "Cihaz kapatılırken ailenin yanında durdun. Monitördeki çizgi yavaşladı, sonra düzleşti. Ayten Hanım çizgiye değil, kızının yüzüne baktı."),
P(function(d){ return d.son === "t1B" && VAR(d); }, "Bir hemşireyle bir güvenlik görevlisinin arasına girip sıraya katıldın. Sedye geçerken güvenlik görevlisinin telsizi cızırdadı, adam elini telsizin üstüne kapattı."),
P(function(d){ return d.son === "t1B" && YOK(d); }, "Kuzey'i ailesinin yanına götürdün. Annesinin eteğine yapıştı, gözünü ablasından ayırmadı."),
P(function(d){ return d.son === "t1C" && VAR(d); }, "Ameliyathanenin kapısında Ayten Hanım'ın elini tuttun. Kapı kapandı ama elini bırakmadı."),
P(function(d){ return d.son === "t1C" && YOK(d); }, "Ayten Hanım'ın elini bir saat tuttun, ikiniz de saymadınız."),
P(S("t1D"), "Kâğıtlar, saatler, ekipler, biri yapmalıydı. Saat on bire doğru durup ellerine baktın, tükenmezkalem mürekkebi bulaşmıştı ama yıkamadın."),
P(VAR, "Ameliyathanenin kapısı kapanıyor. Ayten Hanım elini kapının camına koyuyor. Erdal Bey onu geri çekmeye çalışıyor ama çekemiyor, sonra kendi elini de cama koyuyor."),
P(VAR, "İçeride saatler geçiyor. Önce kalbi alıyorlar. Ankara ekibi onu buzlu sıvıya, steril torbalara, sonra mavi bir soğuk kutuya koyuyor. Kutunun üstündeki etikette “İnsan organı. Acil.” yazıyor. Saat dokuzu kırk geçiyor."),
P(YOK, "Nihan cihazı kapatıyor. Göğüs bir kere daha kalkıp iniyor, sonra bir daha kalkmıyor. Monitörde kalp birkaç dakika daha yavaşlayarak atıyor, sonra çizgi düzleşiyor."),
P(YOK, "Ayten Hanım bağırmıyor. Kızının yüzünü iki eliyle tutup bir şarkı mırıldanıyor, okul marşı mı ninni mi, seçemiyorsun. Erdal Bey diz çökmüş, mavi ojeli parmağı tutuyor."),
"Gece yarısı oluyor, koridorlarda temizlik arabalarının tekerlek sesleri duyuluyor."
], secenekler: [
{ t: function(d){ return VAR(d) && d.bagis !== "yok" ? "Kalp ekibiyle birlikte Ankara'ya uçarsın." : "Aileyi evlerine kadar götürürsün."; }, to: "t2", etki: function(d){ if(VAR(d)) d.ucak = true; else d.eve_birakti = true; } },
{ t: "Morga kadar, son ana kadar Duru'nun bedeninin yanında kalırsın.", to: "t2", etki: { morg: true, sefkat: 1 } },
{ t: "Aile odasında Ayten Hanım'la Erdal Bey'in yanına oturursun.", to: "t2", etki: { sefkat: 1 } },
{ t: "Sabaha başka bir çağrı gelebilir diye ofisine dönüp raporları tamamlarsın.", to: "t2", etki: { adalet: 1 } }
]},

t2: { saat: "Gece", baslik: "Yol", metin: [
P(S("t1bC"), "Aile odasında oturdunuz, kimse konuşmadı. Saat birde Erdal Bey kalkıp pencereyi açtı. Körfezden soğuk bir rüzgâr girdi ama kimse pencereyi kapatmadı."),
P(S("t1bD"), "Raporları tamamladın, Duru'nun adını on bir forma yazdın. On ikincisinde kalemin mürekkebi bitti. Çekmecede başka kalem aramak için kalkmadın, bir süre öylece oturdun."),
P(function(d){ return d.ucak; }, "Küçük bir ambulans uçağındasın, yanında iki cerrah, bir perfüzyonist ve mavi kutu var. Kutu ayaklarının dibinde, kemerle bağlı. İzmir'in ışıkları uzaklaşıyor."),
P(function(d){ return d.ucak; }, "Cerrahlardan biri ağzı açık uyuyor, öbürü telefonunda sessizce bir futbol maçının özetini izliyor. Sen kutuya bakıyorsun. Bir türbülansta kutu kıpırdıyor, elini üstüne koyuyorsun, sonra utanıp çekiyorsun."),
P(function(d){ return d.morg; }, "Ameliyattan sonra Duru'nun bedeni morga indiriliyor. Asansörde ikiniz varsınız, beden örtünün altında, kesik özenle dikilmiş."),
P(function(d){ return d.morg; }, "Morgda gece görevlisi Hüseyin Efendi var, seni tanıyor. “Yine sen,” diyor ama kızmadan. Örtüyü düzeltip Duru'nun saçını tarıyor. “Babası yıkayacak değil mi? Hazırlayalım.”"),
P(function(d){ return d.eve_birakti; }, "Ayten Hanım, Erdal Bey ve Kuzey arka koltukta oturuyor, kimse konuşmuyor. Bir kırmızı ışıkta Erdal Bey öne eğilip “Sağdan git, bu saatte Altınyol boştur,” diyor, sen de sağdan gidiyorsun. Kuzey bir yerde başı annesinin omzunda uyuyakalıyor."),
P(function(d){ return !d.ucak && !d.morg && !d.eve_birakti; }, "Sabaha karşı bir saat kadar sandalyede uyukluyorsun. Uyandığında boynun tutulmuş, güneş körfezin üstüne doğmuş.")
], secenekler: [
{ t: function(d){ return d.ucak ? "Ankara'da, ameliyathanenin önünde, çocuğun annesini uzaktan görürsün. Yaklaşmazsın." : "Sabah Ayten Hanım'a bir mesaj atarsın."; }, to: "y_son", etki: function(d){ d.sefkat++; if(d.ucak) d.anneyi_gordu = true; } },
{ t: function(d){ return d.ucak ? "Kalbin yeni göğsünde ilk kez attığı anı, ameliyathanenin camından izlersin." : "Hüseyin Efendi'ye ya da kendine bir çay koyarsın."; }, to: "y_son", etki: function(d){ if(d.ucak) d.ilk_atis = true; } },
{ t: "Eve dönüp hiçbir şey anlatmadan karına sarılırsın.", to: "t3", etki: { riza: 1 } },
{ t: "Hiçbir yere gitmeyip bir sonraki çağrıyı beklersin.", to: "t3", etki: { adalet: 1 } }
]},

y_son: { saat: "Sabah", baslik: "Atış", metin: [
P(function(d){ return d.son === "t2A" && d.ucak; }, "Ameliyathanenin önünde başörtüsü dağılmış, elinde tespih olan bir kadın gördün, çocuğun annesiydi. Yanına yaklaşmadın."),
P(function(d){ return d.son === "t2A" && !d.ucak; }, "Sabah Ayten Hanım'a “Yanınızdayım,” diye bir mesaj attın, cevap gelmedi."),
P(function(d){ return d.son === "t2B" && !d.ucak; }, "Hüseyin Efendi'ye çay koydun, o da sana koydu. Sabaha karşı konuşmadan içtiniz, Hüseyin Efendi çayını şekeri ısıra ısıra içiyordu."),
P(function(d){ return d.anneyi_gordu; }, "Ankara'da bir çocuk hastanesinin ameliyathane koridorundasın. Köşede elleri birleşmiş bir kadın oturuyor. Yanında ayakta duran bir adam durmadan saatine bakıyor, saat durmuş olabilir diye iki kere kulağına götürüyor."),
P(function(d){ return d.anneyi_gordu; }, "Seni tanımıyorlar, mavi kutuyla gelen biri, o kadar. Kadın sana yabancılara gülümseyen biri gibi gülümsüyor, hiçbir şey bilmiyor."),
P(function(d){ return d.ilk_atis; }, "Saatlerce gözlem camından izliyorsun. Sonunda cerrah kelepçeyi açıyor ve kan yeni kalbe doluyor. Önce hiçbir şey olmuyor, sonra bir titreşim, sonra bir atış geliyor, ekranda yeşil bir çizgi beliriyor."),
P(function(d){ return !d.ucak; }, "Sabah oluyor, elinde bir çay bardağıyla pencereden körfeze bakıyorsun."),
P(function(d){ return !d.ucak && VAR(d); }, "Telefonuna merkezden bir mesaj geliyor: “Kalp nakli başarılı. Alıcı stabil.” Bunu Ayten Hanım'a iletemezsin, kural böyle.")
], secenekler: [
{ t: "Yüzünü kimse görmesin diye arkanı dönersin.", to: "t3", etki: { sefkat: 1 } },
{ t: "Bir gün Ayten Hanım'a söylemek için saati bir kâğıda yazarsın.", to: "t3", etki: { saat_yazdi: true } },
{ t: "Hiçbir şey hissetmediğini fark edersin. Yorgunluk mu, yıllar mı?", to: "t3", etki: { yorgun: true } },
{ t: "Kime ettiğini bilmeden dua edersin.", to: "t3", etki: { riza: 1 } }
]},

t3: { saat: "Üç ay sonra", baslik: "Mektup", metin: [
P(S("t2C"), "Eve dönüp karına sarıldın, bir şey anlatmadın, o da sormadı. Kahvaltıda ekmeğine senin sevdiğin peyniri sürdü."),
P(S("t2D"), "Bir sonraki çağrıyı bekledin. Sabah altıda geldi, Manisa'dan, başka bir aile."),
P(S("y_sonA"), "Arkanı döndün. Yanından geçen bir hemşire omzuna dokunup geçti."),
P(S("y_sonB"), "Saati bir kâğıda yazıp cüzdanına, kendi bağışçı kartının yanına koydun."),
P(S("y_sonC"), "Hiçbir şey hissetmedin ve bu, hissetmekten daha çok korkuttu seni."),
P(S("y_sonD"), "Bir kalp için, bir kız için, biraz da kendin için dua ettin."),
P(VAR, "Üç ay sonra ofise merkez aracılığıyla isimsiz bir zarf geliyor. İçinde bir kâğıt ve keçeli kalemle çizilmiş bir resim var, uçan kanatlı bir kalp. Altında büyük harflerle “TEŞEKKÜRLER” yazıyor, Ş'nin çengeli ters."),
P(VAR, "Bir de annenin yazısı var: “Oğlum on dört ay bir makineye bağlı yaşadı. Şimdi okula gidiyor. Geçen hafta bisiklete bindi, düştü, dizi kanadı ama ağlamadı. Her gece kulağımı göğsüne dayıyorum. O kalbin bir adı vardı, biliyorum. Bilmiyorum ama biliyorum.”"),
P(YOK, "Üç ay sonra Ayten Hanım arıyor. “Barış Bey, rahatsız ettim, bir şey soracağım. O çocuk, Ankara'daki, kalp buldu mu?”"),
P(YOK, "Bakmaman gerektiği hâlde sisteme bakıyorsun. Çocuk iki hafta sonra başka bir donörden kalp almış, yaşıyor."),
P(function(d){ return d.liste === "vip" && d.bagis === "tam"; }, "Aynı hafta bir haber çıkıyor: “Milletvekilinin babası başarılı karaciğer nakliyle sağlığına kavuştu.” Fotoğrafta gülümseyen bir aile ve Sinan var. Liman işçisi sistemde hâlâ bekliyor."),
P(function(d){ return d.liste === "kural" && d.bagis === "tam"; }, "Aynı hafta bir haber çıkıyor: “Milletvekilinin babası başarılı karaciğer nakliyle sağlığına kavuştu.” Senin uyguladığın kural, senin imzan. Liman işçisi bir ay sonra iki yılını doldurup listeye döndü, hâlâ bekliyor."),
P(function(d){ return d.liste === "adil" && d.bagis === "tam"; }, "Merkezden kısa bir not geliyor. Karaciğer listenin birincisine, elli sekiz yaşındaki liman işçisine nakledilmiş. Dosyadaki vinçli fotoğraf aklına geliyor.")
], secenekler: [
{ t: function(d){ return VAR(d) ? "Mektubu merkez aracılığıyla Ayten Hanım'a iletirsin." : "Ayten Hanım'a çocuğun yaşadığını söylersin."; }, to: "bl_kuzey", etki: function(d){ d.sefkat++; d.iletti = true; } },
{ t: function(d){ return VAR(d) ? "Mektubu bir süre masanda tutarsın, kendi için okursun, sonra iletirsin." : "“Bilmiyorum,” dersin. Kural bu."; }, to: "t4", etki: function(d){ if(VAR(d)){ d.iletti = true; } else { d.adalet++; } } },
{ t: function(d){ return d.liste === "vip" || d.liste === "kural" ? "Haberi kesip Sinan'ın masasına bırakırsın." : "Mektubun bir fotokopisini çekip kendine saklarsın."; }, to: "t4", etki: function(d){ if(d.liste === "vip" || d.liste === "kural"){ d.adalet++; d.haber_birakti = true; } else { d.kopya = true; d.iletti = true; } } },
{ t: "Hiçbir şey yapmazsın.", to: "bl_esra", etki: { yorgun: true } }
]},

t4: { saat: "Bir yıl sonra", baslik: "Yıl Dönümü", metin: [
P(function(d){ return d.son === "t3B" && VAR(d); }, "Mektubu bir hafta masanda tuttun, her akşam okudun, sonra ilettin."),
P(function(d){ return d.son === "t3B" && YOK(d); }, "“Bilmiyorum,” demiştin. Ayten Hanım “Peki,” demişti. İnanmamış mıydı, yoksa inanmak mı istememişti, anlayamadın."),
P(function(d){ return d.son === "t3C" && (d.liste === "vip" || d.liste === "kural"); }, "Haberi kesip Sinan'ın masasına bıraktın. Ertesi gün masada yoktu, Sinan da sana bakmıyordu."),
P(function(d){ return d.son === "t3C" && !(d.liste === "vip" || d.liste === "kural"); }, "Mektubun fotokopisini çekip kimsenin açmayacağı bir dosyaya koydun."),
P(S("bl_esraB"), "“İyiyim,” dedin. Esra çayını bitirip kalktı, kapıda dönüp “Ben de öyle diyordum,” dedi."),
P(S("bl_esraC"), "Esra'ya Ayten Hanım'ın “Doğru mu yaptık?” sorusunu anlattın. Esra bardağını elinde çevirip durdu. “O soru gitmiyor,” dedi, “yalnızca yer değiştiriyor.”"),
P(function(d){ return d.kuzey_cevap; }, "Kuzey jüriye döndü. “Aynı kalp,” dedi, “ama atışı değişir, yeni bedenin hızına uyar.” Biraz durdu. “Bence kalp kimin olduğunu bilmez, kimin içinde olduğunu bilir.” Jüri üyesi simidini bırakıp not aldı."),
P(function(d){ return d.neden_sordu; }, "Fuardan sonra Kuzey'e sordun. “Ablam hep beni korurdu,” dedi. “Şimdi ben onun kalbini korumak istiyorum, nerede olduğunu bilmesem de. Nasıl çalıştığını bilirsem biraz korumuş olurum.”"),
P(function(d){ return d.sinir; }, "Jüri üyesi not aldı. Kuzey sana bir an kırılmış gibi baktı, sonra “Hatırlamıyor,” dedi, “ama atıyor. Bu daha iyi değil mi?”"),
P(function(d){ return d.psikolog; }, "Psikoloğun adını aldın. İlk seansta kırk dakika konuştun, yedi yılda kurduğun cümlelerden fazlasını kurdun."),
P(function(d){ return d.yuksek_sesle; }, "Mektubu yüksek sesle okudun. “Her gece kulağımı göğsüne dayıyorum” cümlesinde sesin çatladı, devam edemedin. Esra mektubu elinden alıp gerisini kendisi okudu."),
P(function(d){ return d.izin; }, "Bir hafta izin aldın. Kordon'da yürüdün, martılara simit attın. Yedinci gün bir çağrı geldi, açmadın, Esra açtı."),
"Bir yıl sonra bir ekim akşamı Ayten Hanım buluşmak istiyor. Kordon'da denize bakan bir bankta oturuyorsunuz.",
"Zayıflamış, saçının ortasında boyatmadığı beyaz bir şerit var. Çantasından Duru'nun kırmızı tarağının sapı görünüyor.",
P(function(d){ return d.iletti && VAR(d); }, "Çantasından mektubu, kanatlı kalp resmini çıkarıyor. “Her gece okuyorum,” diyor. “Erdal da okuyor ve ağlıyor, hiç ağlamazdı oysa.”"),
P(YOK, "“Erdal bundan hiç bahsetmiyor,” diyor. “Ama geçen hafta ehliyetinin arkasına bir şey yazmış, ‘Organ bağışçısıdır’ diye. Bana göstermedi, pantolonunu yıkamaya atarken cüzdanı düştü.”"),
"Kuzey on üç yaşına girmiş, fen olimpiyatına hazırlanıyor, sesi kalınlaşmaya başlamış.",
P(VAR, "“Barış Bey, o çocuğu görmek istiyorum. Bir kere, konuşmasam da olur. Ya da bir steteskopla göğsünü dinlemek. Duru'nun kalbini bir kere duymak istiyorum, sonra bir daha istemem.”"),
P(YOK, "“Barış Bey, doğru mu yaptık? Erdal'ın istediği gibi bütün gönderdik. Ama her gece o çocuğu düşünüyorum. Biri ona kalp verdi, biz vermedik. Doğru mu yaptık?”")
], secenekler: [
{ t: function(d){ return VAR(d) ? "Merkezle ve alıcı ailesiyle görüşüp, iki tarafın da onayıyla bir buluşma ayarlamaya çalışacağını söylersin." : "“Doğru yaptınız. Hayır demek de bir armağandı. Kızınıza,” dersin."; }, to: "bs", etki: function(d){ if(VAR(d)) d.bulustur = true; else d.sefkat++; } },
{ t: function(d){ return VAR(d) ? "“Yapamam Ayten Hanım. Bu kural sizi de onları da koruyor,” dersin." : "“Bilmiyorum,” dersin. “Ama hangi kararı verseniz, bu soruyu soracaktınız.”"; }, to: "bs", etki: { adalet: 1 } },
{ t: function(d){ return VAR(d) ? "Ona Duru'nun kalbinin ilk kez başka bir göğüste attığı saati söylersin." : "Ona Duru'nun son saatini söylersin. Cihazın kapandığı dakikayı."; }, to: "bs", etki: { sefkat: 1, saat_soyledi: true } },
{ t: "Bunu ilk kez yüksek sesle söylersin: “Ben bu işi bırakıyorum.”", to: "bs", etki: { istifa: true } }
]},

bs: { yonlendir: [
{ if: function(d){ return d.istifa; }, to: "son_koordinator" },
{ if: YOK, to: "son_butun" },
{ if: function(d){ return (d.liste === "vip" || d.liste === "kural") && d.bagis === "tam"; }, to: "son_liste" },
{ if: function(d){ return d.bulustur; }, to: "son_kalp" },
{ to: "son_armagan" }
]},

/* ---------- SONLAR ---------- */
son_armagan: { son: true, baslik: "Yüzmeyi Öğrendi", metin: [
P(S("t4A"), "“Bir buluşma ayarlamaya çalışacağım,” demiştin. Ayten Hanım tarağı titreyen elleriyle çantasına geri koymuştu."),
P(S("t4B"), "“Yapamam,” demiştin, “kural hem sizi hem onları koruyor.” Ayten Hanım “Peki,” demişti, anladığı için değil, yorulduğu için."),
P(S("t4C"), "Kalbin başka bir göğüste ilk kez attığı saati söylemiştin. Ayten Hanım saati telefonuna not etmişti, notun başlığına “Duru” yazdığını gördün."),
"Duru'nun kalbi Ankara'da dokuz yaşında bir çocuğun göğsünde atıyor.",
P(function(d){ return d.bagis === "tam"; }, "Karaciğeri İzmir'de bir adamda. Böbrekleri iki kişide, Bornova'da bir ev hanımında, Eskişehir'de bir üniversite öğrencisinde. Korneaları da iki gözde, biri Kemeraltı'nda bir saatçinin gözü."),
"Ayten Hanım her yıl merkez aracılığıyla bir mektup yazıyor ve her yıl isimsiz bir cevap geliyor. Bir resim, bir karne fotokopisi, bir cümle: “Bu yıl yüzmeyi öğrendi.” Geçen yılın karnesinde Türkçe notu düşükmüş. Ayten Hanım kırmızı kalemle altını çizip gülerek sana gösterdi.",
"Erdal Bey bir gün otobüsünü bir okulun önündeki durakta durdurup kapıyı açtı. Dokuz on yaşlarında bir çocuk nefes nefese koşarak bindi, kartını basmayı unuttu. Erdal Bey bir şey demedi, çocuğu durağı geçene kadar aynadan izledi."
]},

son_liste: { son: true, baslik: "Dördüncü Sıra", metin: [
P(S("t4A"), "“Bir buluşma ayarlamaya çalışacağım,” demiştin. Ayten Hanım tarağı titreyen elleriyle çantasına geri koymuştu."),
P(S("t4B"), "“Yapamam,” demiştin. Ayten Hanım “Peki,” demişti, anladığı için değil, yorulduğu için."),
P(S("t4C"), "Kalbin başka bir göğüste ilk kez attığı saati söylemiştin, Ayten Hanım da saati telefonuna not etmişti."),
"Duru'nun kalbi doğru yere gitti, böbrekleri, korneaları da. Karaciğeri ise bir milletvekilinin babasında.",
P(function(d){ return d.liste === "kural"; }, "Kuralı uyguladın. Bir ay eksik bir belge vardı ve her şey yasaldı. İmzaladığın kâğıt nedeniyle birlikte dosyada duruyor. Bir gün biri okursa belki anlar, belki de hiç okumaz."),
P(function(d){ return d.liste === "vip"; }, "Karar vermedin, “Bakarım” dedin ya da “Merkez verir.” Sonra her şey kendiliğinden olmuş gibi oldu."),
"Liman işçisi bir yıl sonra hâlâ bekliyor, ayıklığının üçüncü yılında. Onu bir kere hastanenin önünde gördün. Vinçli fotoğraftaki bıyığı beyazlamış, elinde bir poşet ilaç vardı. Seni tanımadı.",
"Her ay merkeze gönderdiğin raporlara bir satır ekliyorsun: “Alıcı seçim sürecinde dış müdahale şüphesi.” Kimse cevap vermiyor ama sen yine de ekliyorsun.",
P(function(d){ return d.haber_birakti; }, "Haberi Sinan'ın masasına bırakmıştın. Ertesi gün haber gitmiş, yerine yeni bir orkide gelmişti. Sözleşmen yenilendi, nedenini sormadın."),
"Ayten Hanım kızının karaciğerinin kimde olduğunu hiç öğrenmeyecek. Bir keresinde “Hepsi iyi insanlara gitti değil mi?” diye sordu. “Evet,” dedin."
]},

son_butun: { son: true, baslik: "Kefen", metin: [
P(S("t4A"), "“Hayır demek de kızınıza bir şey vermekti,” demiştin. Ayten Hanım denize bakıp uzun uzun ağlamıştı. Bir martı gelip bankın ucuna konmuş, gitmemişti."),
P(S("t4B"), "“Hangi kararı verseniz bu soruyu soracaktınız,” demiştin. Ayten Hanım bir yıldır ilk kez, kısa bir an burnundan güldü."),
P(S("t4C"), "Ona son saati söylemiştin. Ayten Hanım bilmiyordu, o an saate değil, kızının yüzüne bakıyordu."),
"Duru bütün olarak gömüldü. Erdal Bey kızını kendi elleriyle yıkadı, mavi ojeyi silmedi. Kefeni sararken küçük parmak dışarıda kaldı. Bir süre ona baktı, sonra onu da örttü.",
"Ankara'daki çocuk iki hafta sonra başka bir kalp aldı, başka bir gecede, başka bir ailenin evet demesiyle.",
P(function(d){ return d.israr_kismi; }, "O hayırı sen büyüttün. Bir kalp verilecekti, sen fazlasını istedin ve hepsi gitti. Bunu kimseye söylemedin. Bazen gece uyanınca o dokuz yaşındaki çocuğun on dördüncü ayını hesaplıyorsun, sonra on beşincisini."),
"Erdal Bey'in ehliyetinin arkasında artık “Organ bağışçısıdır” yazıyor. Kızını vermedi ama kendini veriyor. Bir gün Ayten Hanım'a sormuş: “Benim gözlerim de işe yarar mı, şoför gözü?”"
]},

son_kalp: { son: true, baslik: "Kalp Sesi", metin: [
P(S("t4A"), "“Bir buluşma ayarlamaya çalışacağım,” demiştin. Ayten Hanım tarağı titreyen elleriyle çantasına geri koymuştu."),
P(S("t4B"), "“Yapamam,” demiştin, Ayten Hanım da “Peki,” demişti."),
P(S("t4C"), "Kalbin başka bir göğüste ilk kez attığı saati söylemiştin, Ayten Hanım da saati telefonuna not etmişti."),
"Aylarca yazışmalar sürdü, merkezle, iki aileyle, psikologlarla, hukukçularla. Kural esnemedi ama iki ailenin kendi istekleriyle birbirlerini bulmasına bir kapı aralandı.",
"Bir bahar sabahı Ankara'da bir parktasınız, Ayten Hanım, Erdal Bey, Kuzey ve sen. Karşınızda bir kadın, bir adam ve on yaşında bir çocuk var, Emir. Gömleğinin üst düğmesi açık, göğsünde uzun, pembe bir iz görünüyor.",
"Kimse ne diyeceğini bilmiyor. Emir'in babası boğazını temizliyor, sonra vazgeçiyor. Emir annesinin arkasından çıkıp Ayten Hanım'ın önüne geliyor.",
"“Dinlemek ister misiniz?” diye soruyor.",
"Steteskobu sen getirdin. Ayten Hanım kulaklarına takıp diz çöküyor, çocuğun göğsüne koyuyor.",
"Bir dakika, iki dakika geçiyor. Ayten Hanım'ın gözleri kapalı, yanaklarından yaşlar iniyor ama silmiyor.",
"Sonra steteskobu Erdal Bey'e uzatıyor. Erdal Bey önce elini cebine sokuyor, sonra alıyor. Diz çökerken dizi çatırdıyor, Emir gülüyor, Erdal Bey de gülüyor, sonra dinliyor.",
"Kuzey en son dinliyor. Bitince steteskobu sana veriyor. “Biraz hızlı atıyor,” diyor, “ablam zaten hep acele ederdi.”"
]},

son_koordinator: { son: true, baslik: "Gece İkide", metin: [
P(S("t4D"), "“Bırakıyorum,” demiştin. Ayten Hanım şaşırmamıştı. “Bırakın,” demişti. “Bir yıl önce de yorgundunuz, ben fark etmiştim.”"),
"İstifa dilekçeni yazdın, yedi yıl dolmuştu. Yerine Esra geçti. Vedalaşırken sana en çok neyi özleyeceğini sordu. Biraz düşündün. “Koridoru,” dedin, “kimse çağırmadan gelenleri. Elleri unlu kafeteryacı kadını.”",
P(function(d){ return d.liste === "vip" || d.liste === "kural"; }, "Bir de kimseye söylemediğin bir şey var, listeyi. Bir telefonla, bir imzayla nasıl eğildiğini gördün ve düzeltemedin."),
"Şimdi bir aile sağlığı merkezinde hemşiresin, tansiyon ölçüyor, aşı yapıyorsun. Salı günleri gelen yaşlı bir adam her seferinde sana karısının köftesini anlatıyor.",
"Bazı geceler tam ikide uyanıyorsun ama telefon çalmıyor. Karın bu sefer buna alışamadı, o da uyanıp “Yine mi?” diyor, sırtını okşuyor.",
"Cüzdanında bu işe başladığın gün imzaladığın bir kart var, kendi kartın: “Organ bağışçısıdır.” Bir gün, bir gece ikide, senin için de biri telefonu açacak, uykulu uykulu, montunu ters giyerek."
]}

},

ayna: function(d){
  var out = [];
  var a = d.adalet, b = d.sefkat, c = d.riza;
  if(a >= b && a >= c) out.push("Çoğu zaman listeyi ve kuralı korudun, bazen bunun için aileden uzaklaştın.");
  else if(b >= c) out.push("Çoğu zaman Ayten Hanım'ın, Erdal Bey'in, Kuzey'in yanında kaldın.");
  else out.push("Çoğu zaman geri çekildin, kararı da zamanı da aileye bıraktın.");
  if(d.anonimlik) out.push("Kalbi bekleyen çocuğu aileye anlattın. Erdal Bey'in sandalyesi o an devrildi.");
  if(d.liste === "vip") out.push("Liste eğildiğinde onu düzeltmeye çalışmadın.");
  if(d.ihbar || d.resmi) out.push("Sinan'ın baskısını kayda geçirdin.");
  if(d.israr_kismi) out.push("Bir kalp verilmişken fazlasını istedin.");
  return out;
},

dipnot: [
{ ad: "Ölümün tanımı", t: "1968'de Harvard tıp fakültesinin bir komitesi, geri dönüşsüz beyin fonksiyonu kaybını ölüm olarak tanımladı. Bu tanım, solunum cihazlarının bedenleri yaşatabildiği bir çağda zorunlu hâle geldi. Ama bir ailenin gözünde, kalbi atan, sıcak, pembe bir beden “ölü” değildir. Hans Jonas gibi düşünürler bu tanımın tıbbi olduğu kadar pratik bir ihtiyaçtan doğduğunu da sorguladı." },
{ ad: "Beden ve armağan", t: "Marcel Mauss'a göre her armağan bir karşılık beklentisi yaratır. Organ bağışı ise bu döngüyü kırar: veren artık hiçbir şey beklemez, alan kimden aldığını bilmez. Richard Titmuss kan bağışı üzerine yazdığı çalışmada bunu “yabancıya armağan” olarak adlandırır: bir toplumun dayanışmasının en saf biçimlerinden biri." },
{ ad: "Adil paylaşım", t: "Kıt kaynakların dağıtımı (organlar, yoğun bakım yatakları, ilaçlar) adaletin en somut sınavlarından biridir. Bekleme süresi, tıbbi aciliyet, uyum ve beklenen fayda gibi kriterler bir algoritmada birleşir. John Rawls'un “cehalet peçesi” fikri burada anlamlıdır: kimin olduğunu bilmeden kural koymak. Ama kuralları uygulayanlar, peçenin altında değil, dünyanın içinde yaşar." },
{ ad: "Yas ve rıza", t: "Bilgilendirilmiş rıza, bir kişinin kendi bedeni hakkında özgürce karar vermesidir. Ama organ bağışında karar çoğu zaman ölünün değil, yasın en ağır anındaki yakınlarının elindedir. Bir “evet” kadar bir “hayır” da rızanın ifadesidir; ve bir koordinatörün en zor işi, ikisine de aynı saygıyla eşlik etmektir." }
]
});
})();
