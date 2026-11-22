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
giris: "Gece ikide telefonun çalıyor. Sen İzmir'de bir organ nakli koordinatörüsün. On yedi yaşında bir kızın, bir bisiklet kazasından sonra beyin ölümü gerçekleşmiş; kalbi hâlâ atıyor. Koridorda annesiyle babası henüz hiçbir şey bilmeden bekliyor. Ankara'da bir çocuk aylardır bir kalp bekliyor. Önünde birkaç saat, bir yas, bir rıza ve bir listenin adaleti var. Bir bedenin bittiği yerde bir başkasının nasıl başladığının hikâyesi.",
kavramlar: ["Ölümün tanımı", "Beden ve armağan", "Adil paylaşım", "Yas ve rıza"],
ozet: "Gece ikide telefonun çalıyor. On yedi yaşında bir kızın beyni ölmüş, kalbi atıyor. Ankara'da dokuz yaşında bir çocuk on dört aydır bir kalp bekliyor. Aradaki birkaç saat senin elinde.",
baslangic: "a1",
durum: { adalet: 0, sefkat: 0, riza: 0 },

sahneler: {

a1: { saat: "Gece, 01.40", baslik: "Çağrı", metin: [
"Telefon ikinci çalışta açılıyor. Elin uyurken bile yolunu biliyor. Yoğun bakımdan Dr. Nihan: “Barış, olası bir donör. On yedi yaşında. Bisiklet, kamyon. Klinik tablo beyin ölümü. Testlere başlıyoruz.”",
"Adın Barış, kırk bir yaşındasın. On yıl yoğun bakım hemşireliği, yedi yıldır İzmir'de bir eğitim hastanesinde organ nakli koordinatörlüğü. Komodinin üstünde, uykudan önce okuduğun romanın sayfası katlı. Üç haftadır aynı sayfa.",
"Karın dönüp yorganı başına çekiyor. Montunu karanlıkta giyiyorsun, bir kolu ters. Caddeler boş, ışıklar kırmızı. Kimse yok, yine de duruyorsun.",
"Yoğun bakımın camından onu görüyorsun. Duru Aksoy. Saçları yastığa dağılmış, alnında sargı, ağzında tüp. Göğsü makinenin ritmiyle kalkıp iniyor. Monitörde kalp: düzenli, güçlü. Yatağın altında, poşetin içinde kanlı bir bisiklet eldiveni. Birisi atmaya kıyamamış.",
"Koridorda iki sandalye. Ayten Hanım, edebiyat öğretmeni; Erdal Bey, belediye otobüsünde şoför. Erdal Bey'in üstünde hâlâ iş yeleği, yakasında plaka numarası yazılı bir yaka kartı. Henüz kimse onlara “beyin ölümü” demedi. “Bağış” kelimesini hiç kimse söylemedi.",
"Bu iki kelimeyi onlara sen götüreceksin."
], secenekler: [
{ t: "Doğruca aileye gidip kendini tanıtırsın. Henüz bağıştan söz etmeden.", to: "a2", etki: { sefkat: 1, erken_tanisti: true } },
{ t: "Önce dosyaya bakarsın. Tanı kesinleşmeden aileye yaklaşılmaz.", to: "a2", etki: { adalet: 1 } },
{ t: "Ulusal koordinasyon merkezine ön bildirim yaparsın.", to: "a2", etki: { adalet: 1, merkez_erken: true } },
{ t: "Arabada bir dakika oturursun. Kendin için.", to: "a2", etki: { riza: 1 } }
]},

a2: { saat: "04.00", baslik: "Apne Testi", metin: [
P(S("a1A"), "“Ben Barış,” dedin. “Bu gece sizinle olacağım.” Ayten Hanım elini tuttu, bırakmadı. Erdal Bey yaka kartına baktı, sonra yüzüne. Kim olduğunu tam anlamadı ama bir şeyin geldiğini anladı."),
P(S("a1B"), "Dosyayı okudun: Glasgow üç, pupiller sabit, beyin sapı refleksleri yok. Bin kez okuduğun satırlar. Hasta adı satırında bir yazım hatası vardı, “Durru”. Kalemle düzelttin."),
P(S("a1C"), "Merkez kaydı aldı. Ekranda bir numara belirdi: olası donör, İzmir, on yedi. Annesine daha kimse bir şey söylememişti."),
P(S("a1D"), "Bir dakika. Motor kapalı. Ön camda sokak lambası, bir pervane böceği çarpıp duruyor. Kaç aileye bu geceyi yaşattın? Bir zamanlar sayıyordun."),
"Sabah dördünde Dr. Nihan apne testini yapıyor. Solunum cihazı birkaç dakikalığına ayrılıyor. Beyin nefes emri veriyor mu, ona bakılıyor. Kan gazı ölçülüyor. Karbondioksit yükseliyor.",
"Duru'nun göğsü kımıldamıyor.",
"Cihaz yeniden bağlanıyor, göğüs yine kalkıp iniyor. İki uzman tanıyı ayrı ayrı imzalıyor. Saat 04.38. Duru Aksoy'un ölüm saati. Monitörde kalp atmaya devam ediyor.",
"Ayten Hanım her şeyi camın arkasından izledi. Yanına gidip anlatıyorsun: beyin öldü, geri dönüşü yok, bu ölüm.",
"Ayten Hanım kızına bakıyor. Pembe yanaklar. Kalkıp inen göğüs. Yeşil, düzenli çizgi.",
"“Kalbi atıyor,” diyor. Tahtadaki bir yanlışı düzeltir gibi. “Sıcak. Nefes alıyor. Nasıl ölü olsun?”"
], secenekler: [
{ t: "Beyin ölümünü sabırla anlatırsın: nefesi makinenin verdiğini, beynin hiçbir şey yapmadığını.", to: "a3", etki: { adalet: 1, anlatti: true } },
{ t: "Ayten Hanım'ı içeri, kızının yanına götürürsün.", to: "x_dokunus", etki: { sefkat: 1 } },
{ t: "Dr. Nihan'dan beyin kan akımı görüntülerini göstermesini istersin.", to: "x_cizgi", etki: { adalet: 1 } },
{ t: "Şimdi bir şey açıklamazsın. Zamanı değil.", to: "a3", etki: { riza: 1, bekledi: true } }
]},

x_dokunus: { saat: "04.50", baslik: "Sıcak El", metin: [
"Ayten Hanım'a önlük giydiriyorsun, maske, galoş. Galoşlardan biri yırtık. Yenisini bulana kadar ayakta bekliyor, kımıldamadan.",
"Yatağın kenarında duruyor. Önce dokunmaya çekiniyor. Sonra kızının elini alıyor. Sıcak. Tırnaklarda oje. Mavi, yarısı dökülmüş.",
"“Dün sürdü bunu,” diyor. “Banyoda. Bütün ev oje koktu. Kızdım ona. ‘Ders çalışacağına,’ dedim. Dün.”",
"Kızının saçını sargıya değdirmeden okşuyor. Eğilip kulağına bir şey söylüyor. Sen başını çeviriyorsun.",
"Monitör atıyor. Bir süre Ayten Hanım'ın yüzünde bir şey kıpırdıyor. Kızı onu duymuş gibi bakıyor ekrana. Sonra o şey sönüyor.",
"“Duymuyor, değil mi?” diyor, sana dönmeden."
], secenekler: [
{ t: "“Hayır,” dersin. Yumuşak ama net.", to: "a3", etki: { adalet: 1 } },
{ t: "“Bilmiyoruz,” dersin.", to: "a3", etki: { sefkat: 1, bilmiyoruz: true } },
{ t: "Bir şey demeden bir sandalye çekip onu oturtursun.", to: "a3", etki: { sefkat: 1 } },
{ t: "Erdal Bey'i de içeri çağırırsın.", to: "a3", etki: { riza: 1, baba_iceri: true } }
]},

x_cizgi: { saat: "04.50", baslik: "Kara Görüntü", metin: [
"Dr. Nihan monitörü aileye çeviriyor. Beyin anjiyografisi: boya boyun damarlarına girmiş, kafatasının içine girmemiş. Boyun beyaz, kafatasının içi siyah.",
"“Burası beyin,” diyor Dr. Nihan, kalemle gösteriyor. “Kan almıyor. Kan almayan doku yaşamaz.”",
"Erdal Bey ekrana yaklaşıyor. Gözlüğü otobüste kalmış. Kısarak bakıyor. Burnu neredeyse ekrana değiyor.",
"“Bu kızımın beyni mi? Siyah mı?”",
"“Kan almıyor,” diyor Dr. Nihan yine.",
"Erdal Bey otuz yıldır İzmir'in bütün hatlarını ezbere bilir. Hangi durakta kim biner, hangi virajda kim düşer. Bu siyahın içinde bir yol arıyor gibi.",
"Sonra geri çekiliyor. “Bir makine kızım öldü diyor,” diyor. “Öbür makine onu yaşatıyor. Ben hangisine inanayım?”"
], secenekler: [
{ t: "“Makinelere değil, bize inanın. İki doktor ayrı ayrı baktı,” dersin.", to: "a3", etki: { adalet: 1 } },
{ t: "“Bedeni yaşıyor gibi görünüyor. Ama kızınız artık orada değil,” dersin.", to: "a3", etki: { sefkat: 1, beden_cumlesi: true } },
{ t: "Erdal Bey'in istediği kadar bakmasına izin verirsin.", to: "a3", etki: { riza: 1 } },
{ t: "Ekranı kapatırsın. Bir babaya bu kadarı yeter.", to: "a3", etki: { sefkat: 1 } }
]},

a3: { saat: "06.10", baslik: "Soru", metin: [
P(S("x_dokunusC"), "Sandalyeyi çekip Ayten Hanım'ı oturttun. Bir saat kızının elini tuttu. Kalkarken eli kızının yanağında bir süre kaldı, sonra çekti."),
P(S("x_cizgiA"), "“Bize inanın,” dedin. Erdal Bey sana baktı. “Size inanmak kolay,” dedi. “Kızıma inanmamak zor.”"),
P(S("x_cizgiC"), "Erdal Bey kırk dakika ekrana baktı. Sonra elini uzatıp ekranın camına, siyah yere dokundu. Parmak izi kaldı."),
P(S("x_cizgiD"), "Ekranı kapattın. Erdal Bey kararmış ekrana bakmaya devam etti. Camda kendi yüzü vardı."),
P(S("a2A"), "Anlattın, basit kelimelerle. Ayten Hanım her cümlende başını salladı, her cümleden sonra camdan kızına baktı. Kelimelerle gördüğünü bir türlü üst üste koyamadı."),
P(S("a2D"), "Bir şey açıklamadın. Ayten Hanım ile Erdal Bey koridorda iki saat yan yana oturdu, dokunmadan. Bir ara Erdal Bey makineden iki çay aldı. Bardaklar sandalyenin altında soğudu."),
P(S("x_dokunusA"), "“Hayır,” dedin. Ayten Hanım kızının elini bıraktı. Sonra yeniden tuttu."),
P(S("x_dokunusB"), "“Bilmiyoruz,” dedin. Ayten Hanım'ın yüzü açıldı. Sonra sana baktı. “Bilmiyoruz mu, bilmiyor musunuz?” dedi. Öğretmen."),
P(S("x_dokunusD"), "Erdal Bey içeri girdi, ayak ucunda durdu. Dokunmadı. Sonra çarşafın altından çıkmış bir ayağı gördü, mavi ojeli küçük parmağı. Yalnızca oraya dokundu."),
P(S("x_cizgiB"), "“Orada değil,” diye tekrarladı Erdal Bey. “O zaman nerede?” Cevabın yoktu."),
"Sabah altı. Pencereden körfez, gri. Aile odası.",
"Bu cümleyi yıllardır kuruyorsun ve hâlâ ilk kelimede boğazın kuruyor. “Duru'nun organları başka insanların hayatını kurtarabilir. Kalbi, karaciğeri, böbrekleri. Bunu düşünmenizi istemek için buradayım. Karar sizin. Hayır demek de bir karar.”",
"Ayten Hanım yere bakıyor. Erdal Bey pencereye.",
"Erdal Bey bir an bile düşünmeden konuşuyor: “Kızımı parçalatmam. Bütün geldi, bütün gidecek. Benim kızım yedek parça değil.”",
"Ayten Hanım susuyor. Ama kocasına değil, sana bakıyor."
], secenekler: [
{ t: "“Anlıyorum Erdal Bey. Kararınıza saygı duyuyorum,” dersin.", to: "a4", etki: { riza: 1 } },
{ t: "Diyanet'in organ bağışını caiz saydığını anlatırsın.", to: "a4", etki: { adalet: 1, fetva: true } },
{ t: "Ayten Hanım'a dönüp onun ne düşündüğünü sorarsın.", to: "bl_anne", etki: { riza: 1, anneye_sordu: true } },
{ t: "Odadan çıkıp onları yalnız bırakırsın.", to: "bl_koridor", etki: { sefkat: 1 } }
]},

a4: { saat: "07.00", baslik: "Kuzey", metin: [
P(S("bl_anneA"), "“Sesi,” dedi Ayten Hanım. Sonra kalkıp odaya döndü. Kapı kapandı. İçeriden bir süre ses gelmedi."),
P(S("bl_anneC"), "Ayten Hanım sana baktı. “Haklısınız,” dedi. “On beş yaşındaydı. Paraşütle atlamak da istiyordu.” Bir şey gülümsemeye benzedi. “Ama yazdı yine de.”"),
P(function(d){ return d.son === "bl_anneB" || d.son === "bl_anneD"; }, "Ayten Hanım defterden bir daha söz etmedi. Odaya dönerken kapıda durup sana baktı. Bir sırrı paylaşmış birinin bakışıyla."),
P(S("bl_koridorA"), "Nihan düşündü. “Bilmiyorum,” dedi. “Söylesek bize daha çok güvenirler mi, hiç güvenmezler mi?” Bisküvi paketini buruşturup cebine koydu, yoğun bakıma döndü."),
P(S("bl_koridorB"), "Nihan sana baktı. Sonra güldü, yorgun. “İki küçük ses,” dedi. “Bir koridorda. Kimse duymasın.”"),
P(function(d){ return d.son === "bl_koridorC" || d.son === "bl_koridorD"; }, "Nihan “Sağ ol,” dedi. Söylediğin şey için mi kahve için mi, bilemedin. Yoğun bakıma döndü. Omuzları önlüğün içinde küçücük duruyordu."),
P(S("a3A"), "Erdal Bey seni süzdü. Bir itiraz bekliyordu, gelmedi. Bu onu rahatlatmadı. Gardını indiremedi."),
P(S("a3B"), "“Diyanet benim kızımı tanımaz,” dedi Erdal Bey. Ama bir an durdu. Bir şeyin tartıldığını gördün."),
P(S("a3C"), "Ayten Hanım uzun süre sustu. Sonra kocasının yüzüne bakmadan: “Geçen ay kan vermeye gitmiş. On sekizini doldurmadığı için almamışlar. Eve kızgın geldi. ‘İşe yarar bir şey yapmak istedim, izin vermediler,’ dedi.” Erdal Bey karısına döndü. Bunu bilmiyordu."),
P(S("a3D"), "Kapının camından gördün: Erdal Bey pencereye gitti; Ayten Hanım ellerini yüzüne kapadı. Sonra Erdal Bey dönüp elini karısının omzuna koydu. Gece boyunca ilk dokunuşları."),
"Kantinin köşesinde on iki yaşında bir çocuk. Kuzey, Duru'nun kardeşi. Teyzesi getirmiş, şimdi dışarıda telefonda. Kuzey bir meyve suyunu pipetle karıştırıyor. Pipetin ucu çiğnenmiş, düzleşmiş.",
"Yaka kartından seni tanıyor. “Ablamı mı bekliyorsunuz?”",
"Yanına oturuyorsun.",
"“Teyzem telefonda söyledi,” diyor. “Ablamın kalbi başkasına verilebilirmiş. Doğru mu?”",
"“Doğru.”",
"Kuzey pipeti bırakmıyor. Sana bakmadan: “Ablamın kalbi başkasında atarsa, ablam biraz yaşar mı? O kişi ablamı sever mi? Kalbi onunsa?”"
], secenekler: [
{ t: "“Hayır, ablan yaşamaz. Ama o kişi yaşar. Ablan sayesinde,” dersin.", to: "a5", etki: { adalet: 1 } },
{ t: "“Biraz, evet. O kişi ablanı hep hatırlar,” dersin.", to: "a5", etki: { sefkat: 1, kuzey_teselli: true } },
{ t: "“Sen ne düşünüyorsun?” diye sorarsın.", to: "a5", etki: { riza: 1, kuzey_dusun: true } },
{ t: "“Bunu annenle babana sor,” dersin. Bir çocuğa bu yükü vermek istemiyorsun.", to: "a5", etki: { sefkat: 1 } }
]},

a5: { saat: "08.00", baslik: "Liste", metin: [
P(S("a4A"), "“Ablam hep bir şeyleri kurtarmaya çalışırdı,” dedi Kuzey. “Kedileri. Kuşları. Bir keresinde bir kirpiyi.” Pipeti ısırdı. “Kirpi öldü ama.”"),
P(S("a4B"), "Kuzey'in yüzü açıldı. “O zaman ablam yaşar,” dedi. Tam, kesin. Düzeltmedin."),
P(S("a4C"), "Kuzey düşündü. “Kalp sadece pompa,” dedi. “Fende gördük. Ablam kalbinde değildi, kafasındaydı.” Durdu. “Ama kafası da öldü.” Sonra meyve suyunu masaya koyup ağladı."),
P(S("a4D"), "Kuzey başını eğdi. “Onlar konuşmuyor ki,” dedi. “Ne sorsam cevap vermiyorlar.”"),
"Sabah sekiz, ofis. Ulusal nakil sistemi ekranda. Duru'nun kan grubu, doku uyumu, organ ölçüleri girilirse sistem bir liste çıkaracak: bekleme süresi, aciliyet, uyum, mesafe.",
"Ön sorgu sonuçları. Kalp: Ankara'da dokuz yaşında bir çocuk. On dört aydır bekliyor, mekanik kalp desteğinde, durumu kritik. Karaciğer, sıranın başında: elli sekiz yaşında bir adam, eski alkol bağımlısı, ayık, tıbben uygun.",
"Telefon. Başhekim yardımcısı Dr. Sinan. Sabahın sekizinde, sesi duştan yeni çıkmış gibi dinç.",
"“Barış, günaydın. Duydum, bir aday var. Şimdi... Karaciğer listesinde birinci sıradakinin alkol geçmişi var, biliyorsun. Bir daha değerlendirmek lazım. Dördüncü sırada çok önemli bir ailenin büyüğü var. Milletvekili Bey'in babası. Ben sadece söylüyorum. Sen bilirsin.”"
], secenekler: [
{ t: "“Hocam, liste listedir. Kimseyi kaydırmam,” dersin.", to: "a6", etki: { adalet: 2, liste: "adil" } },
{ t: "“Bu benim kararım değil hocam, merkez verir,” deyip konuyu kapatırsın.", to: "a6", etki: { liste: "vip" } },
{ t: "Telefonu kapattıktan sonra konuşmayı yazıp ulusal merkeze bildirirsin.", to: "a6", etki: { adalet: 2, liste: "adil", ihbar: true } },
{ t: "“Bakarım hocam,” dersin. Vakit kazanmak için.", to: "a6", etki: { liste: "vip", bakarim: true } }
]},

a6: { saat: "10.00", baslik: "Saat", metin: [
P(S("a5A"), "Sinan bir an sustu. “Tabii,” dedi. “Zaten öyle demek istedim.” Kapattı. Ne kapattığını sonra öğrenecektin."),
P(S("a5B"), "“Tabii, merkez verir,” dedi Sinan, memnun. Telefonu kapattıktan sonra kendi sesinin ne kadar rahat çıktığını düşündün."),
P(S("a5C"), "Bildirimi yazıp gönderdin. Merkezden bir kadın aradı: “Not ettik. Bu tür telefonlar sandığınızdan sık.”"),
P(S("a5D"), "“Bakarım,” dedin. Sinan memnun kapattı. Ekrandaki karaciğer listesini kapatıp yeniden açtın."),
"Saat on. Dr. Nihan arıyor: “Barış, tansiyon düşüyor. İlacı artırdık. Beden dağılmaya başladı. On iki saat, belki daha az. Sonra organlar kullanılamaz.”",
"Aile odasında karar yok. Ayten Hanım bir kez sana “evet” der gibi baktı; Erdal Bey bir kez yüksek sesle “Hayır” dedi. Aralarında yirmi beş yıllık bir evliliğin ortasından geçen bir duvar.",
"Ankara'da bir çocuk, bir makineye bağlı. Bir karaciğer listesinde bir liman işçisi ayıklığının günlerini sayıyor. Dördüncü sırada bir milletvekilinin babası. İzmir'de, yoğun bakımda, ojesi yarısı dökülmüş bir kız."
], secenekler: [
{ t: "Aileye kararın tamamen kendilerine ait olduğunu söyleyip geri çekilirsin. Saat işlemeye devam ederken.", to: "r1", etki: { riza: 2, kol: "saygi" } },
{ t: "Aileye kalbi bekleyen çocuğu anlatırsın: yaşını, kaç aydır beklediğini. Kuralı çiğneyerek ve onlara bir çocuğun hayatını yükleyerek.", to: "i1", etki: { sefkat: 1, kol: "israr", anonimlik: true } },
{ t: "Oğlunun organlarını bağışlamış bir anneyi ve hastanenin manevi danışmanını çağırırsın. Ailenin bunu destek mi baskı mı sayacağını bilmeden.", to: "k1", etki: { sefkat: 1, kol: "topluluk" } },
{ t: "Aileyi bir meslektaşına bırakıp önce listeyi güvenceye almaya gidersin. En ağır saatlerinde yanlarında olmadan.", to: "y1", etki: { adalet: 2, kol: "sistem" } }
]},


bl_anne: { saat: "06.30", baslik: "Ayten", metin: [
"Ayten Hanım'ı koridora çıkarıyorsun. Erdal Bey odada kalıyor, sırtı size dönük.",
"Koridorun sonunda bir pencere, önünde iki plastik sandalye. Birinin ayağı eksik, duvara yaslanmış. Ötekine Ayten Hanım oturuyor. Sen ayakta kalıyorsun, sonra çömeliyorsun.",
"“Duru'nun bir defteri var,” diyor. “Günlük değil. Liste. ‘Ölmeden önce yapacaklarım.’ On beş yaşında yazmıştı. Ben gizlice okudum. Yapmamam gereken bir şey.”",
"“Birinci madde: paraşütle atlamak. İkinci: annemle Paris'e gitmek. Üçüncü: birine hayatımı borçlu olmak ya da birini bana borçlu bırakmak. O zaman çok gülmüştüm, ne biçim cümle bu diye. Kırmızı kalemle düzeltmek istemiştim.”",
"Eline bakıyor. Sanki elinde hâlâ kırmızı kalem varmış gibi.",
"“Erdal'a söyleyemem. Okuduğumu bilmiyor. Duru da bilmiyordu. Şimdi kızımın gizli defterini çıkarıp ölümünde mi kullanayım? Bu ona ihanet olmaz mı?”"
], secenekler: [
{ t: "“İhanet değil. Duru'nun sesi,” dersin.", to: "a4", etki: { sefkat: 1, liste_ses: true } },
{ t: "“Erdal Bey'e söyleyip söylememek sizin kararınız,” dersin.", to: "a4", etki: { riza: 1 } },
{ t: "“On beş yaşında yazılmış bir cümle, bir karar sayılmaz,” dersin. Dürüst olmak istiyorsun.", to: "a4", etki: { adalet: 1, liste_sayilmaz: true } },
{ t: "Bir şey demezsin. Yanındaki sandalyeye, eksik ayaklı olana, dikkatle oturursun.", to: "a4", etki: { sefkat: 1 } }
]},

bl_koridor: { saat: "06.30", baslik: "Nihan", metin: [
"Koridorda Dr. Nihan bir duvara yaslanmış, gözleri kapalı. On altı saattir nöbette. Önlüğünün cebinden bir bisküvi paketi sarkıyor. Seni duyunca gözlerini açıyor.",
"“Nasıl?”",
"“Babası hayır diyor. Annesi bir şey demiyor.”",
"Nihan bisküviyi çıkarıp sana uzatıyor. Almıyorsun, kendisi yiyor. Sonra beklemediğin bir şey söylüyor: “Ben de bazen emin olamıyorum.”",
"“Neyden?”",
"“Beyin ölümünden. Testler kesin, biliyorum. Ama yatağın başında o pembe yanakları görünce... Yirmi yıl, yüzlerce tanı. Her seferinde içimde ufacık bir ses: ya yanılıyorsak? Kimseye söylemedim. Sana söylüyorum, çünkü saat altı ve aklım yerinde değil.”",
"Bir hemşire geçiyor, ikinize bakıp hızlanıyor.",
"“Ailelere ‘kesin’ diyoruz,” diyor Nihan. “Demek zorundayız.”"
], secenekler: [
{ t: "“Bunu ailelere söylemememiz doğru mu sence?” diye sorarsın.", to: "a4", etki: { adalet: 1, nihan_soru: true } },
{ t: "“Bende de var o ses,” dersin. Daha önce kimseye söylemediğin bir şey.", to: "a4", etki: { sefkat: 1, ses_itiraf: true } },
{ t: "“Testler kesin Nihan. O ses yorgunluk,” dersin.", to: "a4", etki: { adalet: 1 } },
{ t: "Ona bir kahve getirirsin.", to: "a4", etki: { sefkat: 1 } }
]},

bl_kuzey: { saat: "Dört ay sonra", baslik: "Proje", metin: [
"Bir şubat sabahı tanımadığın bir numaradan mesaj: “Merhaba Barış Bey. Ben Kuzey, Duru'nun kardeşi. Annemin telefonundan yazıyorum. Okulda bilim fuarı var. Gelir misiniz?”",
"Bir ortaokulun spor salonu. Volkan maketleri, güneş sistemleri, bir patates pil. Kuzey'in masasında plastik bir kalp modeli. Odacıklar ayrı renklerde boyanmış, sol karıncık biraz taşmış. Bir akvaryum pompası, bir hortum, kırmızı gıda boyalı su. Kuzey düğmeye basıyor. Su kalbin içinde dolaşıyor, bir yerden sızıp masaya damlıyor. Peçeteyle siliyor.",
"Posterin başlığı: “Kalp Nasıl Çalışır? (Ve Neden Başka Birinde de Çalışabilir?)”",
"Seni görünce kulakları kızarıyor. Sonra anlatmaya başlıyor: kan grupları, doku uyumu, ret ilaçları. Hepsini okumuş.",
"Sesini alçaltıyor: “Öğretmenim neden bu konuyu seçtiğimi sordu. Söylemedim. Siz de söylemeyin.”",
"Bir jüri üyesi yaklaşıyor, bir yandan simit yiyor. “Bir kalp başka bir bedende de aynı kalp midir?”",
"Kuzey sana bakıyor. Sonra jüriye dönüyor."
], secenekler: [
{ t: "Kuzey'in cevabını beklersin.", to: "t4", etki: { riza: 1, kuzey_cevap: true } },
{ t: "Kuzey'e kaşınla küçük bir işaret yaparsın: hadi.", to: "t4", etki: { sefkat: 1, kuzey_cevap: true } },
{ t: "Fuardan sonra Kuzey'e projeyi neden seçtiğini sorarsın.", to: "t4", etki: { sefkat: 1, neden_sordu: true } },
{ t: "Jüriye Kuzey'in bilmediği bir ayrıntıyı anlatırsın: kalbin sinirlerinin kesildiğini, eski bedenini “hatırlamadığını.”", to: "t4", etki: { adalet: 1, sinir: true } }
]},

bl_esra: { saat: "Dört ay sonra", baslik: "Esra", metin: [
P(VAR, "Mektup masanda duruyor. Okudun. Bir şey olmadı. Bir haftadır hiçbir şeyde bir şey olmuyor."),
P(YOK, "Ayten Hanım'ın telefonundan sonra bir şey yapmadın. Ne aradın ne yazdın. Bir haftadır hiçbir şeyde bir şey olmuyor."),
"Esra bir öğle arası kapını çalıyor, elinde iki çay. Oturuyor.",
"“Barış, geçen hafta bir aileyle konuştun. Ben kapıdaydım. Sesin teyp kaydı gibiydi. Cümleler doğru, sıra doğru. İçinde kimse yoktu.”",
"Çayına şeker atıyorsun. Atmazdın.",
"“Ben de yaşadım,” diyor Esra. “Üç yıl önce. Bir gece bir aile benden nefret etti, ertesi gece başka bir aile bana sarıldı. Üçüncü gece ikisini de hatırlamadığımı fark ettim. Bir psikoloğa gittim. Kocama bile söylemedim.”",
"Kaşığı bardağın kenarına vurup bırakıyor. “Bir şey yapman lazım. Ne, bilmiyorum.”"
], secenekler: [
{ t: "Esra'nın gittiği psikoloğun adını istersin.", to: "t4", etki: { sefkat: 1, psikolog: true } },
{ t: "“Ben iyiyim Esra,” dersin. İkiniz de inanmadan.", to: "t4", etki: { yorgun: true } },
{ t: function(d){ return VAR(d) ? "Mektubu bir kez daha, Esra'nın yanında, yüksek sesle okursun." : "Esra'ya Ayten Hanım'ın sorusunu anlatırsın: “Doğru mu yaptık?”"; }, to: "t4", etki: function(d){ d.sefkat++; if(VAR(d)) d.yuksek_sesle = true; else d.esraya_anlatti = true; } },
{ t: "Bir hafta izin istersin.", to: "t4", etki: { riza: 1, izin: true } }
]},

/* ---------- SAYGI KOLU ---------- */
r1: { saat: "10.20", baslik: "Geri Çekilmek", metin: [
"Aile odasına girip oturuyorsun. Bu kez bir şey istemek için değil.",
"“Ayten Hanım, Erdal Bey. Hayır derseniz kimse size kötü gözle bakmaz. Ben bakmam, bu hastane bakmaz. Ne karar verirseniz verin, Duru'ya son ana kadar aynı özenle bakacağız.”",
"Erdal Bey'in omuzları iniyor. Bütün sabah bir kavgaya hazırlanmış. Kavga gelmeyince ellerini nereye koyacağını bilemiyor, dizlerine koyuyor.",
"Ayten Hanım ağlamaya başlıyor. Önce sessiz, sonra sesli.",
"“Ben vermek istiyordum,” diyor. Kocasına değil, sana. “Kimse bana sormadı. O hayır dedi, siz de saygı duydunuz. Bana kim saygı duyacak?”",
"Erdal Bey karısına dönüyor. Yirmi beş yıl. Bu sesi duymamış.",
"“Kalbi bir yerde atsın istiyorum,” diyor Ayten Hanım. “Toprağın altında durmasın. Bir yerde atsın.”"
], secenekler: [
{ t: "Odadan çıkıp onları yalnız bırakırsın. Bu konuşma onların.", to: "r2", etki: { riza: 1 } },
{ t: "İkisinin arasına oturup konuşmalarına yardım edersin.", to: "r2", etki: { sefkat: 1, arabulucu: true } },
{ t: "Erdal Bey'e Diyanet'in görüşünü yazılı olarak verirsin.", to: "r2", etki: { adalet: 1, fetva: true } },
{ t: "Ayten Hanım'ın tarafını tutarsın: “Sizin de sesiniz var.”", to: "r2", etki: { sefkat: 1, ayten_yaninda: true } }
]},

r2: { saat: "14.00", baslik: "Kalp Yalnız", metin: [
P(S("r1A"), "Kapıyı kapattın. Dört saat konuştular. Bir yerde Erdal Bey'in sesi yükseldi, bir yerde Ayten Hanım'ın. Sonra uzun bir sessizlik. Sonra kapı açıldı."),
P(S("r1B"), "Aralarında oturdun. Erdal Bey'in korkusunu dinledin: kızının “kesilip biçilmesi”, “eksik gömülmesi”. Ayten Hanım'ın isteğini dinledin: “bir yerde atsın.” Sonunda Erdal Bey karısına döndü: “Sen ne istiyorsun?” Bunu soru olarak sorduğu ilk seferdi galiba; Ayten Hanım'ın yüzünden öyle anladın."),
P(S("r1C"), "Erdal Bey kâğıdı iki kez okudu, katlayıp yelek cebine koydu. “Allah izin veriyormuş,” dedi. “Ben veriyor muyum, onu bilmiyorum.”"),
P(S("r1D"), "Erdal Bey sana döndü. “Siz aramıza giriyorsunuz,” dedi. Doğruydu. Ama Ayten Hanım'ın sesini o odada duyan da yalnızca sendin."),
"Öğleden sonra ikide kapı açılıyor. Erdal Bey ayakta. Bir gecede yüzü çökmüş. Yeleğinin fermuarı yarıya kadar inmiş.",
"“Kalbini verelim,” diyor. “Sadece kalbini. Annesi istiyor. Gerisini vermem. Karnını açtırmam. Gözlerine dokundurmam. Kalp, o kadar.”",
"Bir kalp, dokuz yaşında bir çocuk için. Karaciğer, iki böbrek, iki kornea. Dört beş kişi daha listede bekleyecek.",
"Ayten Hanım kocasının yeleğinin fermuarını yukarı çekiyor. Bir şey diyecek gibi oluyor, demiyor."
], secenekler: [
{ t: "Kabul edersin. Teşekkür edersin. Yalnızca kalp.", to: "r3", etki: { riza: 1, bagis: "kalp" } },
{ t: "Karaciğerin ve böbreklerin de dört kişiyi kurtarabileceğini anlatırsın.", to: "r3", etki: function(d){ d.adalet++; d.israr_kismi = true; d.bagis = d.fetva || d.arabulucu ? "tam" : "yok"; } },
{ t: "Ayten Hanım'la yalnız konuşmak istersin.", to: "r3", etki: function(d){ d.sefkat++; d.bagis = "kalp"; d.ayten_yalniz = true; } },
{ t: "Erdal Bey'e kalbin nasıl alınacağını, bedenin nasıl kapatılacağını, Duru'nun “bütün” gömüleceğini anlatırsın.", to: "r3", etki: { sefkat: 1, adalet: 1, bagis: "kalp", butun_anlatti: true } }
]},

r3: { saat: "16.00", baslik: "Karar Sonrası", metin: [
P(function(d){ return d.israr_kismi && d.bagis === "tam"; }, "Erdal Bey seni dinledi. Elinde ya Diyanet'in kâğıdı ya karısının eli. Sonra: “Tamam,” dedi. “Hepsi. Ama gözleri kalsın. Gözlerini bana bırakın.” Gözler kaldı. Gerisi gitti."),
P(function(d){ return d.israr_kismi && d.bagis === "yok"; }, "Erdal Bey'in yüzü kapandı. “Ben size bir kalp verdim,” dedi. “Siz fazlasını istiyorsunuz. Hiçbir şey vermiyorum.” Ayten Hanım “Erdal!” diye bağırdı. Erdal Bey kapıyı çekip çıktı. Kapıyı o çekti ama sen ittin. Bunu ikiniz de biliyordunuz."),
P(S("r2C"), "Ayten Hanım'la koridorda konuştun. “Bana sorduğunuz için teşekkür ederim,” dedi. “Babam sormazdı, kocam sormaz.” Kalp için evet. Gerisi için ikisi de razı değil."),
P(S("r2D"), "Erdal Bey kesiği, dikişi, örtüyü, kefeni dinledi. “Bütün mü olacak?” Bütün olacak, dedin. Kalbi olmadan. Erdal Bey yere baktı. “Tamam,” dedi. Bir babanın o gün verebileceği evet buydu."),
P(VAR, "Ulusal merkeze bildiriyorsun. Birkaç dakika sonra onay: kalp, Ankara, alıcı belirlendi. Bir ekip, bir uçak, bir soğuk kutu."),
P(YOK, "Ulusal merkezi arıyorsun: bağış yok. Karşıdaki ses bir an duruyor. “Anladım. Ailesine başsağlığı.” Duru'nun numarası listeden siliniyor. Ankara'daki çocuk başka bir geceyi bekleyecek."),
"Akşamüstü yoğun bakım. Ayten Hanım kızının saçını tarıyor. Tarağı çantasından çıkardı, Duru'nunmuş, kırmızı plastik, iki dişi kırık. Erdal Bey ayak ucunda mavi ojeli parmağı tutuyor. Kuzey kapıda, içeri girmeye korkuyor."
], secenekler: [
{ t: "Kuzey'i içeri alıp ablasının yanına götürürsün.", to: "t1", etki: { sefkat: 1, kuzey_iceri: true } },
{ t: "Aileyi yalnız bırakırsın.", to: "t1", etki: { riza: 1 } },
{ t: "Ayten Hanım'a Duru'nun bir tutam saçını kesip saklamayı önerirsin.", to: "t1", etki: { sefkat: 1, sac: true } },
{ t: "Ekip için hazırlıklara gidersin. İşin bu.", to: "t1", etki: { adalet: 1 } }
]},

/* ---------- ISRAR KOLU ---------- */
i1: { saat: "10.20", baslik: "Dokuz Yaş", metin: [
"Kural açık: alıcının kim olduğu donör ailesine söylenmez. Bir ailenin bağışı borç gibi görmesini, öbür ailenin bir hayatı başkasının gölgesinde yaşamasını engellemek için.",
"Aile odasına girip oturuyorsun ve kuralı çiğniyorsun.",
"“Ankara'da dokuz yaşında bir çocuk var. On dört aydır kalp bekliyor. Göğsünde bir makine var. Kalbi tek başına çalışamıyor. On dört aydır hastanede. Okula gidemiyor. Doktorları birkaç hafta kaldığını düşünüyor.”",
"Ayten Hanım'ın elleri ağzına gidiyor. Dokuz yaş.",
"Erdal Bey ayağa fırlıyor. Sandalye arkaya devriliyor.",
"“Bizi suçlu mu çıkaracaksın?” diye bağırıyor. “Kızım bu sabah öldü! Sen bana başkasının çocuğunu mu anlatıyorsun? Kızımın kalbini koparmak için mi?”",
"Devrilen sandalye yerde. Kimse kaldırmıyor.",
"Ayten Hanım kocasının koluna yapışmış. “Dokuz yaşında,” diyor. “Dokuz yaşında.”"
], secenekler: [
{ t: "Kuralı çiğnediğin için özür dilersin.", to: "i2", etki: { riza: 1, ozur: true } },
{ t: "“Suçlu değilsiniz. Yalnızca bilmenizi istedim,” dersin. Geri adım atmadan.", to: "i2", etki: { adalet: 1 } },
{ t: "Ayten Hanım'ın yanına oturursun.", to: "i2", etki: { sefkat: 1 } },
{ t: "Odadan çıkan Erdal Bey'in peşinden gidersin.", to: "i2", etki: { sefkat: 1, erdal_pesinden: true } }
]},

i2: { saat: "11.30", baslik: "Mescit", metin: [
P(S("i1A"), "Özür diledin. Erdal Bey seni dinlemeden çıktı. Ayten Hanım arkasından “Gitme,” dedi. Gitti."),
P(S("i1B"), "“Bilmemizi istedin,” dedi Erdal Bey. “Ben bu bilgiyle ne yapayım? Ankara'da bir çocuk ölünce ‘benim yüzümden’ mi diyeyim ömür boyu?” Çıktı."),
P(S("i1C"), "Yanına oturdun. Ayten Hanım'ın dizleri titriyordu. Erdal Bey ikinize baktı, sonra çıktı. Kapıyı çarpmadı, yavaşça kapattı. Daha kötüydü."),
P(S("i1D"), "Erdal Bey'in peşinden çıktın. Hızlı yürüyordu, sonra yavaşladı, sonra bir kapının önünde durdu."),
"Hastanenin mescidi bodrumda. Küçük, halısı ayak izlerinden açılmış. Erdal Bey içeride, duvara yaslanmış oturuyor. Namaz kılmıyor.",
"Ayakkabılarını çıkarıp karşısına oturuyorsun. Çorabının ucunda bir delik var. Ayağını altına çekiyorsun.",
"Halıya bakarak konuşuyor.",
"“Babam öldüğünde köyde yıkadık onu. Ben yıkadım, amcam yıkadı. Bütün bedenini. Bir yeri eksik değildi. Ben de kızımı öyle göndermek istiyorum.”",
"Sonra sesi değişiyor. “Ama dokuz yaşında dedin. Benim de dokuz yaşımda babam beni otobüse bindirmişti. Şoförün yanındaki koltuğa oturtmuştu. O gün şoför olacağım dedim.”"
], secenekler: [
{ t: "Duru'nun da bütün gömüleceğini, kesiğin kapatılacağını anlatırsın.", to: "i3", etki: { sefkat: 1, butun_anlatti: true } },
{ t: "Bir şey demezsin. Onunla birlikte oturursun.", to: "i3", etki: { riza: 1, mescit_sessiz: true } },
{ t: "“Babanız size otobüsü verdi. Siz Duru'ya ne vermek istersiniz?” diye sorarsın.", to: "i3", etki: { sefkat: 1, soru: true } },
{ t: "“Yanlış yaptım, size o çocuğu anlatmamalıydım,” dersin.", to: "i3", etki: { riza: 1, pisman: true } }
]},

i3: { saat: "13.00", baslik: "Evet", metin: [
P(S("i2A"), "Erdal Bey dinledi. Kesik, dikiş, örtü, kefen. “Bütün mü?” Bütün, dedin. Kalbi olmadan ama bütün. Halının bir ipliğini çekiştirdi durdu."),
P(S("i2B"), "Yarım saat oturdunuz. Bir ara Erdal Bey ellerini açtı, dudakları kıpırdadı. Sonra yüzünü sıvazlayıp kalktı, ayakkabılarını giymeden kapıya yürüdü, döndü, giydi."),
P(S("i2C"), "Erdal Bey sana baktı. “Ne vermek isterdim? Her şeyi.” Sustu. “Ona veremem artık.” Bir süre daha sustu. “Başkasına belki.”"),
P(S("i2D"), "“Yanlış yapmadın,” dedi Erdal Bey. Şaşırdın. “Söylemeseydin bilmeyecektim. Bilmesem hayır demek kolaydı. Şimdi zor. Zor diye yanlış değil.”"),
"Aile odasına dönüyorsunuz. Devrilen sandalye kaldırılmış; Ayten Hanım kaldırmış. Kocasının yüzüne bakıyor.",
P(function(d){ return d.butun_anlatti || d.soru; }, "“Verelim,” diyor Erdal Bey. “Kalbini, karaciğerini, böbreklerini. Ne lazımsa. Bir şartım var: ameliyattan sonra kızımı ben yıkayacağım.”"),
P(function(d){ return !(d.butun_anlatti || d.soru); }, "“Kalbini verelim,” diyor Erdal Bey. “O çocuk için. Başka bir şey değil.”"),
"Ayten Hanım kocasına sarılıyor. Erdal Bey'in kolları bir süre havada kalıyor, sonra kapanıyor.",
"Sonra Ayten Hanım sana dönüyor: “O çocuğun adını öğrenebilir miyiz? Bir gün? Görebilir miyiz? Duru'nun kalbini duyabilir miyiz?”"
], secenekler: [
{ t: "“Hayır. Bu kural ikiniz için de var,” dersin.", to: "t1", etki: function(d){ d.adalet++; d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; } },
{ t: "“Bir gün, belki. İki aile de isterse,” dersin.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; d.belki_dedi = true; } },
{ t: "“Size bir mektup ulaştırabilirim. İsimsiz,” dersin.", to: "t1", etki: function(d){ d.riza++; d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; d.mektup_soz = true; } },
{ t: "Cevap vermezsin. Şimdilik.", to: "t1", etki: function(d){ d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; } }
]},

/* ---------- TOPLULUK KOLU ---------- */
k1: { saat: "11.00", baslik: "Gülsüm", metin: [
"Gülsüm Hanım'ı aradığında o da ağlıyor. Seni tanıyor. Beş yıl önce, bir mart gecesi, yirmi bir yaşındaki oğlu Tolga'nın organlarını bağışlamıştı. O gece de sen vardın.",
"Bir saat sonra hastanede. Altmışlarında, başörtüsünün ucu ceketinin yakasına sıkışmış, kucağında bir fotoğraf albümü. Ayten Hanım'ın yanına oturuyor.",
"“Ben de sizin gibiydim,” diyor. “Bu odada. Bu sandalyede belki. Oğlum yirmi bir yaşındaydı. Motosiklet.”",
"Albümü açıyor. Tolga bebekken, ilkokul önlüğüyle, askerde bıyıklı. Son sayfada plastiğin içinde bir mektup.",
"“Geçen yıl geldi. İsimsiz. Oğlumun böbreğini alan bir öğretmenden. Okuyayım mı?”",
"Ayten Hanım başıyla evet diyor.",
"“‘On iki yıl diyalize girdim. Haftada üç gün, dört saat. Şimdi her sabah okula gidiyorum. Geçen hafta öğrencilerime organ bağışını anlattım. Bir çocuk sordu: “Öğretmenim, içinizde başkası mı yaşıyor?” Ben de dedim ki: “Evet. Ama şimdi benimle birlikte ders anlatıyor.”’”",
"Ayten Hanım öğretmen. Elini ağzına bastırıyor. Erdal Bey duvara bakıyor. Bir yabancının kederinin kendi kederinin içine getirilmesinden rahatsız, ayağını yere vurup duruyor."
], secenekler: [
{ t: "Gülsüm Hanım'a teşekkür edip onu aileyle yalnız bırakırsın.", to: "k2", etki: { riza: 1 } },
{ t: "Erdal Bey'in yanına gidersin.", to: "k2", etki: { sefkat: 1, erdal_yaninda: true } },
{ t: "Gülsüm Hanım'dan “hayır” deyip pişman olan aileleri de anlatmasını istersin. Dürüst olsun.", to: "k2", etki: { adalet: 1, durust_gulsum: true } },
{ t: "Albümü kapatırsın. Bu kadarı yeter.", to: "k2", etki: { riza: 1, album_kapandi: true } }
]},

k2: { saat: "12.00", baslik: "Danışman", metin: [
P(S("k1A"), "Gülsüm Hanım ile Ayten Hanım bir saat konuştu. Çıkarken Gülsüm Hanım sana sarıldı. “Annesi istiyor,” dedi. “Babası korkuyor. Benim kocam da korkmuştu. Şimdi her bayram o öğretmene dua ediyor, adını bilmeden.”"),
P(S("k1B"), "Erdal Bey'in yanında durdun. “Başkasının hikâyesi,” dedi. “Benimki değil.” Sonra: “Ama o kadın oğlunu anlatırken gülümsüyordu. Ben bir gün kızımı anlatırken gülümseyebilecek miyim?”"),
P(S("k1C"), "Gülsüm Hanım şaşırdı, sonra başını eğdi. “Var,” dedi. “Hayır deyip pişman olanı da tanırım, evet deyip pişman olanı da. Ne derseniz deyin, bir gün bir şeye pişman olacaksınız.” Erdal Bey Gülsüm Hanım'a ilk kez baktı."),
P(S("k1D"), "Albümü kapattın. Gülsüm Hanım anladı. “Benim acım onlarınkini büyütmesin,” dedi, kalktı. Kapıda Ayten Hanım seslendi: “Bekleyin. Biraz daha kalın.”"),
"Öğlen manevi danışman geliyor: Mustafa Hoca, emekli müftü yardımcısı, gönüllü. Tespihi kehribar, bir tanesi eksik.",
"Erdal Bey'le köşede konuşuyorlar. Bir yerde Erdal Bey'in sesi yükseliyor: “Kıyamet günü!” Mustafa Hoca: “Kıyamet günü Allah toprakta çürüyen bedeni de bilir Erdal Bey, bir başkasının göğsünde atan kalbi de.”",
"Erdal Bey: “Fetva benim kızımı tanımaz hocam.”",
"“Tanımaz,” diyor Mustafa Hoca. “Siz tanıyorsunuz. Siz söyleyin: kızınız ne isterdi?”"
], secenekler: [
{ t: "Erdal Bey'e Kuzey'in sana söylediklerini anlatırsın.", to: "k3", etki: { sefkat: 1, kuzey_anlatti: true } },
{ t: "Karışmazsın. Bu konuşma onların.", to: "k3", etki: { riza: 1 } },
{ t: "Mustafa Hoca'ya teşekkür edip konuşmayı bitirmesini istersin. Baskı fazlalaştı.", to: "k3", etki: { riza: 1, baski_bitti: true } },
{ t: "Ayten Hanım'ı da çağırırsın.", to: "k3", etki: { sefkat: 1, ayten_cagrildi: true } }
]},

k3: { saat: "14.00", baslik: "Aile Meclisi", metin: [
P(S("k2A"), "Kuzey'in sorusunu anlattın: “Ablamın kalbi başkasında atarsa ablam yaşar mı?” Erdal Bey'in yüzü çöktü. “Oğlum bunu mu sordu?” Kantine yürüdü. Yarım saat sonra Kuzey'in elini tutarak döndü; Kuzey'in elinde hâlâ o çiğnenmiş pipet."),
P(S("k2B"), "Karışmadın. Bir saat daha konuştular. Sonunda Erdal Bey hocanın elini öptü. Karar mı teşekkür mü, anlayamadın."),
P(S("k2C"), "Mustafa Hoca anlayışla kalktı. Erdal Bey arkasından baktı. “İyi adam,” dedi. “Ama hepiniz benden bir şey istiyorsunuz. Hepiniz.”"),
P(S("k2D"), "Ayten Hanım geldi. Hoca sorusunu tekrarladı. Ayten Hanım kocası yerine cevap verdi: “Geçen ay kan vermek istedi. Yaşı tutmadı. Kızdı.” Erdal Bey karısına baktı. Bilmiyordu."),
"Öğleden sonra akrabalar geliyor: dede, iki amca, bir teyze, kuzenler. Aile odası doluyor, koridora taşıyor. Biri börek getirmiş. Kâğıt tabaklar elden ele dolaşıyor, kimse yemiyor.",
"Herkesin bir fikri var. Bir amca: “Bizde böyle şey olmaz.” Teyze: “Duru olsa verirdi.” Seksen yaşındaki dede: “Erdal ne derse o.” Bir kuzen telefonundan bir video açıyor: nakil olmuş bir adamın ilk adımları, arkada alkışlar. Sesini kısmayı unutmuş.",
"Erdal Bey odanın ortasında. Bir babanın kızı hakkındaki kararı bir aile meclisine dönüşüyor.",
"Dr. Nihan kapıdan başını uzatıyor, sana bakıyor. Tansiyon düşüyor."
], secenekler: [
{ t: "Akrabalardan odayı boşaltmalarını istersin. Karar anne ve babanın.", to: "t1", etki: function(d){ d.riza += 2; d.bagis = (d.kuzey_anlatti || d.ayten_cagrildi || d.durust_gulsum) ? "tam" : "kalp"; d.oda_bosaldi = true; } },
{ t: "Meclisin karar vermesine izin verirsin. Bu ailenin yolu bu.", to: "t1", etki: function(d){ d.bagis = (d.kuzey_anlatti || d.erdal_yaninda) ? "kalp" : "yok"; d.meclis_karar = true; } },
{ t: "Zamanı açıkça söylersin: “Birkaç saatimiz var.”", to: "t1", etki: function(d){ d.adalet++; d.bagis = d.baski_bitti ? "yok" : "tam"; d.zaman_baskisi = true; } },
{ t: "Erdal Bey'i koridora çıkarıp yalnız konuşursun.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = (d.album_kapandi || d.baski_bitti) ? "kalp" : "tam"; } }
]},

/* ---------- SİSTEM KOLU ---------- */
y1: { saat: "10.20", baslik: "Merkez", metin: [
"Aileyi meslektaşın Esra'ya bırakıyorsun. Esra'nın gözlerinde bir soru: “Şimdi mi?” Şimdi. Bir organ bağışlanır da yanlış yere giderse bu ailenin verdiği şey bir oyunun içinde kaybolur.",
"Ofiste kapıyı kapatıp ulusal merkezi arıyorsun. Ankara'da Selin Hanım. Yıllardır tanışırsınız, hiç yüz yüze görüşmediniz.",
P(function(d){ return d.ihbar; }, "“Sabahki bildiriminizi aldık,” diyor Selin Hanım. “Bu sabah sizin hastaneden bir itiraz daha gelmiş: karaciğer listesindeki birinci hastanın uygunluğuna. Siz mi gönderdiniz?” Hayır, diyorsun."),
P(function(d){ return !d.ihbar; }, "Anlatıyorsun: Sinan'ın telefonunu, “önemli aile”yi, “sen bilirsin”i. Selin Hanım dinliyor. “Bu sabah sizin hastaneden bir itiraz gelmiş zaten,” diyor. “Birinci hastanın alkol geçmişi gerekçesiyle. İmza: başhekim yardımcısı.”"),
"“İnceleyeceğiz,” diyor Selin Hanım. “Alkol geçmişi tıbbi bir kriter. İki yıllık ayıklık belgesi varsa itiraz reddedilir. Var mı?”",
"Dosyayı açıyorsun. Elli sekiz yaşında, emekli liman işçisi. Dosyaya iliştirilmiş bir fotoğraf: kırmızı bir vinç, önünde bıyıklı bir adam, baretini koltuğunun altına almış. Ayıklık belgesi: bir yıl on bir ay.",
"Bir ay eksik."
], secenekler: [
{ t: "Kuralı olduğu gibi uygularsın: bir ay eksik, itiraz geçerli. Ama nedenini yazılı olarak kayda geçirirsin.", to: "y2", etki: { adalet: 1, liste: "kural", kural_yazdi: true } },
{ t: "Adamın bağımlılık doktorunu arayıp güncel bir değerlendirme istersin.", to: "y2", etki: { adalet: 1, sefkat: 1, liste: "adil", rapor: true } },
{ t: "Sinan'ın itirazının arkasındaki baskıyı resmî olarak bildirirsin.", to: "y2", etki: { adalet: 2, liste: "adil", resmi: true } },
{ t: "Kararı Selin Hanım'a bırakırsın. Elinden geleni yaptın.", to: "y2", etki: { liste: "vip" } }
]},

y2: { saat: "12.30", baslik: "Sinan", metin: [
P(S("y1A"), "Kuralı uyguladın. Liman işçisi düştü. İkinci ve üçüncü uyumsuz. Dördüncü sıradaki birinci oldu. Her şey yasal. Ama nedenini yazdın, altına adını attın."),
P(S("y1B"), "Bağımlılık doktoru bir saatte rapor gönderdi: “Yirmi üç aydır ayık, düzenli takipte. Bir aylık farkın klinik önemi yoktur.” Merkez itirazı reddetti. Liman işçisi sırasını korudu."),
P(S("y1C"), "Bildirimini yazdın: üç sayfa, saatleriyle, isimleriyle. Selin Hanım teşekkür etti. “Bir yere gider mi bilmem,” dedi. “Ama gider diye yazıyoruz.”"),
P(S("y1D"), "Kararı Selin Hanım'a bıraktın. Telefonu kapattıktan sonra vinçli fotoğrafı dosyaya geri koydun, dosyayı kapattın."),
"Öğle arası Sinan seni odasına çağırıyor. Pencere denize bakıyor. Masada aile fotoğrafları, bir futbol takımının flaması, bir orkide. Yapraklarından biri sararmış.",
"“Barış,” diyor gülümseyerek. “Merkezden telefon aldım. Sen mi aradın?”",
"Gülümsemesi yerinde. Gözleri değil.",
"“On beş yıldır bu hastaneyi ben döndürüyorum. Bütçe, cihaz, kadro. Hepsi ilişkilerle. Yeni yoğun bakım ünitesini kim yaptırdı biliyor musun? Senin çalıştığın ünite. Ben bir şey istemedim. Bir dosyanın bir daha incelenmesini istedim.”",
"Orkidenin sararmış yaprağını tırnağıyla koparıyor. “Sözleşmen önümüzdeki ay yenileniyor, değil mi?”"
], secenekler: [
{ t: "“Evet hocam. Yenilense de yenilenmese de liste listedir,” dersin.", to: "y3", etki: { adalet: 2, direndi: true } },
{ t: "“Haklısınız hocam. Ben de sadece kuralı uyguladım,” dersin. Kendini koruyarak.", to: "y3", etki: { kendini_korudu: true } },
{ t: "Telefonunu masaya koyup konuşmayı kaydettiğini söylersin.", to: "y3", etki: { adalet: 1, kayit: true } },
{ t: "Bir şey demeden odadan çıkarsın.", to: "y3", etki: { riza: 1 } }
]},

y3: { saat: "13.30", baslik: "Geri Dönüş", metin: [
P(S("y2A"), "Sinan'ın gülümsemesi silindi. “Görürüz,” dedi. Kapıdayken ekledi: “Kahramanlar genelde başka hastanelere gider Barış.”"),
P(S("y2B"), "Sinan memnun arkasına yaslandı. “İşte böyle,” dedi. “Hepimiz kuralları uyguluyoruz.” Kapıdan çıkarken ağzında metal tadı vardı."),
P(S("y2C"), "Sinan'ın yüzü beyazladı. “Bunu yapamazsın.” Yapmıştın. Bir süre sustu. “Ne istiyorsun?” Hiçbir şey, dedin. Listenin liste kalmasını."),
P(S("y2D"), "Kapıyı arkandan kapattın. Sinan bir şey demedi. İkiniz de ne demek olduğunu biliyordunuz."),
"Aile odasına dönüyorsun. Üç saat geçmiş. Esra kapıda. Yüzü yorgun.",
"“Annesi evet diyor,” diyor Esra. “Babası hâlâ hayır. Beni tanımıyorlar Barış. ‘Sabahki adam nerede?’ diye soruyorlar.”",
"İçeri giriyorsun. Ayten Hanım ayağa kalkıyor. Erdal Bey kalkmıyor.",
"“Nereye gittin?” diyor Erdal Bey. Öfkeli değil. Kırgın. “Bütün sabah buradaydın. Sonra gittin. Kızımız burada ölürken başka bir işe mi gittin?”"
], secenekler: [
{ t: "Her şeyi anlatırsın: listeyi, baskıyı, neden gittiğini.", to: "t1", etki: function(d){ d.adalet++; d.bagis = "tam"; d.anlatti_liste = true; } },
{ t: "“Özür dilerim. Burada olmalıydım,” dersin. Başka bir açıklama yapmadan.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = "kalp"; } },
{ t: "“Kararınız ne olursa olsun, şimdi buradayım,” dersin.", to: "t1", etki: function(d){ d.riza++; d.bagis = "yok"; } },
{ t: "Erdal Bey'in yanına oturup kızını anlatmasını istersin.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = "tam"; d.duru_anlatildi = true; } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Akşam", baslik: "Koridor", metin: [
P(S("r3A"), "Kuzey'i içeri aldın. Önce yatağa yaklaşmadı. Sonra ablasının mavi ojeli parmağına dokundu. “Soğuk değil,” dedi, sana dönüp. Bir açıklama bekliyordu. Veremedin."),
P(S("r3B"), "Aileyi yalnız bıraktın. Kapının camından son gördüğün, bir yatağın üstüne eğilmiş üç sırttı."),
P(S("r3C"), "Saç kesmeyi önerdin. Makası Erdal Bey aldı. Elleri titremedi. Tutamı yelek cebinden çıkardığı ütülü bir mendile sardı."),
P(S("r3D"), "Hazırlıklara gittin: telefonlar, saatler, uçak. Koridorda arkandan Ayten Hanım'ın sesi geldi. Kızına bir şarkı mırıldanıyordu, sözlerini unutup baştan alıyordu."),
P(S("k3B"), "Meclis karar verdi. Dede konuştu, amcalar konuştu, teyze ağladı. Karar bir saat sonra çıktı. Bir oylama gibi değil, bir yorgunluk gibi."),
P(S("y3C"), "“Şimdi buradayım,” dedin. Erdal Bey sana baktı. “Kararımız hayır,” dedi. “Sen yokken verdik.”"),
P(function(d){ return d.bagis === "tam"; }, "Karar: tam bağış. Kalp, karaciğer, iki böbrek, iki kornea. Altı kişi."),
P(function(d){ return d.bagis === "kalp"; }, "Karar: yalnızca kalp. Bir kişi. Dokuz yaşında."),
P(YOK, "Karar: bağış yok. Duru bütün gidecek."),
P(VAR, "Akşam yedide nakil ekipleri hastanede. Ankara'dan kalp ekibi, İstanbul'dan karaciğer ekibi. Ameliyathanenin ışıkları yanıyor."),
P(VAR, "Hastanede birkaç yıldır bir âdet var. Senin başlattığın. Donör yoğun bakımdan ameliyathaneye götürülürken koridorun iki yanında çalışanlar sıra olur. Hemşireler, doktorlar, temizlik görevlileri, güvenlik. Sedye geçerken başlarını eğerler."),
P(VAR, "Bu akşam koridorda kırk kişi var. Kimse çağırmadı. Kafeteryadaki kadın önlüğüyle gelmiş, elleri hâlâ unlu. Ayten Hanım ile Erdal Bey sedyenin iki yanında. Kuzey teyzesinin elini tutuyor."),
P(YOK, "Akşam yedide Dr. Nihan solunum cihazını kapatmaya hazırlanıyor. Yasal olarak bir tedavinin kesilmesi değil bu. Ölmüş bir bedenin makineden ayrılması."),
P(YOK, "Ayten Hanım ile Erdal Bey yatağın iki yanında. Kuzey kapıda. Nihan sana bakıyor: hazır mıyız? Aile hazır değil.")
], secenekler: [
{ t: function(d){ return VAR(d) ? "Sedyenin önünde yürürsün. Yolu açarak." : "Cihaz kapatılırken ailenin yanında durursun."; }, to: "t1b", etki: { sefkat: 1 } },
{ t: function(d){ return VAR(d) ? "Koridordaki sıraya katılır, başını eğersin." : "Kuzey'i kapıdan alıp ailesinin yanına götürürsün."; }, to: "t1b", etki: function(d){ d.riza++; if(YOK(d)) d.kuzey_iceri = true; } },
{ t: function(d){ return VAR(d) ? "Ameliyathane kapısında Ayten Hanım'ın elini tutarsın." : "Ayten Hanım'ın elini tutarsın."; }, to: "t1b", etki: { sefkat: 1 } },
{ t: "Kendini işine verirsin: kâğıtlar, saatler, ekipler. Biri bunları yapmalı.", to: "t1b", etki: { adalet: 1 } }
]},

t1b: { saat: "Gece", baslik: "Son Saat", metin: [
P(function(d){ return d.son === "t1A" && VAR(d); }, "Sedyenin önünde kapıları açarak yürüdün. Arkanda tekerleklerin sesi. Birinin tekerleği hafif yalpalıyordu."),
P(function(d){ return d.son === "t1A" && YOK(d); }, "Cihaz kapatılırken ailenin yanında durdun. Monitördeki çizgi yavaşladı, sonra düzleşti. Ayten Hanım çizgiye değil, kızının yüzüne baktı."),
P(function(d){ return d.son === "t1B" && VAR(d); }, "Sıraya katıldın. Bir hemşirenin ve bir güvenlik görevlisinin arasına. Sedye geçerken güvenlik görevlisinin telsizi cızırdadı, adam elini telsizin üstüne kapattı."),
P(function(d){ return d.son === "t1B" && YOK(d); }, "Kuzey'i ailesinin yanına götürdün. Annesinin eteğine yapıştı. Gözünü ablasından ayırmadı."),
P(function(d){ return d.son === "t1C" && VAR(d); }, "Ameliyathane kapısında Ayten Hanım'ın elini tuttun. Kapı kapandı. Eli bırakmadı."),
P(function(d){ return d.son === "t1C" && YOK(d); }, "Ayten Hanım'ın elini tuttun. Bir saat. İkiniz de saymadınız."),
P(S("t1D"), "Kâğıtlar, saatler, ekipler. Biri yapmalıydı. Saat on bire doğru durup ellerine baktın. Tükenmezkalem mürekkebi bulaşmıştı, yıkamadın."),
P(VAR, "Ameliyathanenin kapısı kapanıyor. Ayten Hanım kapının camına elini koyuyor. Erdal Bey onu geri çekmeye çalışıyor, çekemiyor. Sonra kendi elini de cama koyuyor."),
P(VAR, "İçeride saatler. Önce kalp. Ankara ekibi onu buzlu sıvıya, steril torbalara, mavi bir soğuk kutuya koyuyor. Kutunun üstünde etiket: “İnsan organı. Acil.” Saat dokuz kırk."),
P(YOK, "Nihan cihazı kapatıyor. Göğüs bir kez daha kalkıyor, iniyor, kalkmıyor. Monitörde kalp birkaç dakika daha atıyor, yavaşlayarak. Sonra düz çizgi."),
P(YOK, "Ayten Hanım bağırmıyor. Kızının yüzünü iki eliyle tutup bir şarkı mırıldanıyor. Okul marşı mı ninni mi, seçemiyorsun. Erdal Bey diz çökmüş, mavi ojeli parmağı tutuyor."),
"Gece yarısı. Koridorlarda temizlik arabalarının tekerlekleri."
], secenekler: [
{ t: function(d){ return VAR(d) && d.bagis !== "yok" ? "Kalp ekibiyle birlikte Ankara'ya uçarsın." : "Aileyi evlerine kadar götürürsün."; }, to: "t2", etki: function(d){ if(VAR(d)) d.ucak = true; else d.eve_birakti = true; } },
{ t: "Duru'nun bedeniyle kalırsın. Morga kadar, son ana kadar.", to: "t2", etki: { morg: true, sefkat: 1 } },
{ t: "Aile odasında Ayten Hanım ve Erdal Bey'le oturursun.", to: "t2", etki: { sefkat: 1 } },
{ t: "Ofisine dönüp raporları tamamlarsın. Sabaha bir başka çağrı gelebilir.", to: "t2", etki: { adalet: 1 } }
]},

t2: { saat: "Gece", baslik: "Yol", metin: [
P(S("t1bC"), "Aile odasında oturdunuz. Kimse konuşmadı. Saat birde Erdal Bey kalkıp pencereyi açtı. Körfezden soğuk bir rüzgâr girdi, kimse kapatmadı."),
P(S("t1bD"), "Raporları tamamladın. Duru'nun adını on bir forma yazdın. On ikincide kalemin mürekkebi bitti. Çekmecede başka kalem aramak için kalkmadın, bir süre öyle oturdun."),
P(function(d){ return d.ucak; }, "Küçük bir ambulans uçağı. İki cerrah, bir perfüzyonist, sen ve mavi kutu. Kutu ayaklarının dibinde, kemerle bağlı. İzmir'in ışıkları uzaklaşıyor."),
P(function(d){ return d.ucak; }, "Cerrahlardan biri uyuyor, ağzı açık. Öbürü telefonunda bir futbol maçının özetini sessiz izliyor. Sen kutuya bakıyorsun. Bir kere türbülansta kutu kıpırdıyor. Elini üstüne koyuyorsun, sonra utanıp çekiyorsun."),
P(function(d){ return d.morg; }, "Ameliyattan sonra Duru'nun bedeni morga iniyor. Asansörde ikiniz. Bedeni örtünün altında. Kesik özenle dikilmiş."),
P(function(d){ return d.morg; }, "Morgda gece görevlisi Hüseyin Efendi. Seni tanıyor. “Yine sen,” diyor, kızmadan. Örtüyü düzeltiyor, Duru'nun saçını tarıyor. “Babası yıkayacak, değil mi? Hazırlayalım.”"),
P(function(d){ return d.eve_birakti; }, "Ayten Hanım, Erdal Bey ve Kuzey arka koltukta. Kimse konuşmuyor. Bir kırmızı ışıkta Erdal Bey öne eğilip “Sağdan git, bu saatte Altınyol boştur,” diyor. Sağdan gidiyorsun. Kuzey bir yerde uyuyor, başı annesinin omzunda."),
P(function(d){ return !d.ucak && !d.morg && !d.eve_birakti; }, "Sabaha karşı bir saat uyukluyorsun, sandalyede. Uyandığında boynun tutulmuş, güneş körfezin üstünde.")
], secenekler: [
{ t: function(d){ return d.ucak ? "Ankara'da, ameliyathanenin önünde, çocuğun annesini uzaktan görürsün. Yaklaşmazsın." : "Sabah Ayten Hanım'a bir mesaj atarsın."; }, to: "y_son", etki: function(d){ d.sefkat++; if(d.ucak) d.anneyi_gordu = true; } },
{ t: function(d){ return d.ucak ? "Kalbin yeni göğsünde ilk kez attığı anı, ameliyathanenin camından izlersin." : "Hüseyin Efendi'ye ya da kendine bir çay koyarsın."; }, to: "y_son", etki: function(d){ if(d.ucak) d.ilk_atis = true; } },
{ t: "Eve dönersin. Karına sarılırsın. Hiçbir şey anlatmadan.", to: "t3", etki: { riza: 1 } },
{ t: "Hiçbir yere gitmezsin. Bir sonraki çağrıyı beklersin.", to: "t3", etki: { adalet: 1 } }
]},

y_son: { saat: "Sabah", baslik: "Atış", metin: [
P(function(d){ return d.son === "t2A" && d.ucak; }, "Ameliyathanenin önünde bir kadın gördün: başörtüsü dağılmış, elinde tespih. Çocuğun annesi. Yaklaşmadın."),
P(function(d){ return d.son === "t2A" && !d.ucak; }, "Sabah Ayten Hanım'a mesaj attın: “Yanınızdayım.” Cevap gelmedi."),
P(function(d){ return d.son === "t2B" && !d.ucak; }, "Hüseyin Efendi'ye çay koydun, o da sana. Sabaha karşı, konuşmadan içtiniz. Hüseyin Efendi şekeri ısırarak içiyordu."),
P(function(d){ return d.anneyi_gordu; }, "Ankara. Bir çocuk hastanesinin ameliyathane koridoru. Köşede bir kadın oturuyor, elleri birleşmiş. Yanında bir adam ayakta, durmadan saatine bakıyor. Saat durmuş olabilir, iki kez kulağına götürüyor."),
P(function(d){ return d.anneyi_gordu; }, "Seni tanımıyorlar. Mavi kutuyla gelen biri, o kadar. Kadın sana gülümsüyor. Yabancılara gülümseyen biri gibi. Bilmiyor."),
P(function(d){ return d.ilk_atis; }, "Gözlem camından izliyorsun. Saatlerce. Sonra cerrah kelepçeyi açıyor, kan yeni kalbe doluyor. Hiçbir şey. Sonra bir titreşim. Sonra bir atış. Ekranda yeşil bir çizgi."),
P(function(d){ return !d.ucak; }, "Sabah. Elinde çay bardağı, pencereden körfez."),
P(function(d){ return !d.ucak && VAR(d); }, "Telefonuna merkezden mesaj: “Kalp nakli başarılı. Alıcı stabil.” Ayten Hanım'a iletemezsin. Kural.")
], secenekler: [
{ t: "Arkanı dönersin. Yüzünü kimse görmesin.", to: "t3", etki: { sefkat: 1 } },
{ t: "Saati bir kâğıda yazarsın. Ayten Hanım'a bir gün söylemek için.", to: "t3", etki: { saat_yazdi: true } },
{ t: "Hiçbir şey hissetmediğini fark edersin. Yorgunluk mu, yıllar mı?", to: "t3", etki: { yorgun: true } },
{ t: "Dua edersin. Kime ettiğini bilmeden.", to: "t3", etki: { riza: 1 } }
]},

t3: { saat: "Üç ay sonra", baslik: "Mektup", metin: [
P(S("t2C"), "Eve dönüp karına sarıldın. Bir şey anlatmadın. O da sormadı. Kahvaltıda ekmeğine senin sevdiğin peyniri sürdü."),
P(S("t2D"), "Bir sonraki çağrıyı bekledin. Sabah altıda geldi: Manisa, başka bir aile."),
P(S("y_sonA"), "Arkanı döndün. Yanından geçen bir hemşire omzuna dokunup geçti."),
P(S("y_sonB"), "Saati bir kâğıda yazdın, cüzdanına, kendi bağışçı kartının yanına koydun."),
P(S("y_sonC"), "Hiçbir şey hissetmedin. Bu, hissetmemekten daha çok korkuttu."),
P(S("y_sonD"), "Dua ettin. Bir kalp için, bir kız için, biraz da kendin için."),
P(VAR, "Üç ay sonra ofise bir zarf geliyor. Merkez aracılığıyla, isimsiz. İçinde bir kâğıt ve keçeli kalemle bir resim: kanatlı bir kalp, uçuyor. Altında büyük harflerle: “TEŞEKKÜRLER.” “Ş”nin çengeli ters."),
P(VAR, "Bir annenin yazısı: “Oğlum on dört ay bir makineye bağlı yaşadı. Şimdi okula gidiyor. Geçen hafta bisiklete bindi, düştü, dizi kanadı, ağlamadı. Her gece kulağımı göğsüne dayıyorum. O kalbin bir adı vardı, biliyorum. Bilmiyorum ama biliyorum.”"),
P(YOK, "Üç ay sonra Ayten Hanım arıyor. “Barış Bey, rahatsız ettim. Bir şey soracağım. O çocuk, Ankara'daki. Kalp buldu mu?”"),
P(YOK, "Sisteme bakıyorsun. Bakmaman gerekirken. Çocuk iki hafta sonra başka bir donörden kalp almış. Yaşıyor."),
P(function(d){ return d.liste === "vip" && d.bagis === "tam"; }, "Aynı hafta bir haber: “Milletvekilinin babası başarılı karaciğer nakli ile sağlığına kavuştu.” Fotoğrafta gülümseyen bir aile ve Sinan. Liman işçisi sistemde hâlâ bekliyor."),
P(function(d){ return d.liste === "kural" && d.bagis === "tam"; }, "Aynı hafta bir haber: “Milletvekilinin babası başarılı karaciğer nakli ile sağlığına kavuştu.” Senin uyguladığın kural, senin imzan. Liman işçisi bir ay sonra iki yılını doldurdu, listeye döndü. Hâlâ bekliyor."),
P(function(d){ return d.liste === "adil" && d.bagis === "tam"; }, "Merkezden kısa bir not: karaciğer, listenin birincisine, elli sekiz yaşındaki liman işçisine nakledildi. Dosyadaki vinçli fotoğrafı hatırlıyorsun.")
], secenekler: [
{ t: function(d){ return VAR(d) ? "Mektubu merkez aracılığıyla Ayten Hanım'a iletirsin." : "Ayten Hanım'a çocuğun yaşadığını söylersin."; }, to: "bl_kuzey", etki: function(d){ d.sefkat++; d.iletti = true; } },
{ t: function(d){ return VAR(d) ? "Mektubu bir süre masanda tutarsın, kendi için okursun, sonra iletirsin." : "“Bilmiyorum,” dersin. Kural bu."; }, to: "t4", etki: function(d){ if(VAR(d)){ d.iletti = true; } else { d.adalet++; } } },
{ t: function(d){ return d.liste === "vip" || d.liste === "kural" ? "Haberi kesip Sinan'ın masasına bırakırsın." : "Mektubun bir fotokopisini çekip kendine saklarsın."; }, to: "t4", etki: function(d){ if(d.liste === "vip" || d.liste === "kural"){ d.adalet++; d.haber_birakti = true; } else { d.kopya = true; d.iletti = true; } } },
{ t: "Bir şey yapmazsın.", to: "bl_esra", etki: { yorgun: true } }
]},

t4: { saat: "Bir yıl sonra", baslik: "Yıl Dönümü", metin: [
P(function(d){ return d.son === "t3B" && VAR(d); }, "Mektubu bir hafta masanda tuttun, her akşam okudun. Sonra ilettin."),
P(function(d){ return d.son === "t3B" && YOK(d); }, "“Bilmiyorum,” demiştin. Ayten Hanım “Peki,” demişti. İnanmamış mıydı, inanmak mı istememişti, anlamadın."),
P(function(d){ return d.son === "t3C" && (d.liste === "vip" || d.liste === "kural"); }, "Haberi kesip Sinan'ın masasına bıraktın. Ertesi gün masada yoktu. Sinan da sana bakmıyordu."),
P(function(d){ return d.son === "t3C" && !(d.liste === "vip" || d.liste === "kural"); }, "Mektubun fotokopisini çekip kimsenin açmayacağı bir dosyaya koydun."),
P(S("bl_esraB"), "“İyiyim,” dedin. Esra çayını bitirip kalktı. Kapıda döndü: “Ben de öyle diyordum.”"),
P(S("bl_esraC"), "Esra'ya Ayten Hanım'ın sorusunu anlattın: “Doğru mu yaptık?” Esra bardağı çevirdi durdu. “O soru gitmiyor,” dedi. “Yer değiştiriyor sadece.”"),
P(function(d){ return d.kuzey_cevap; }, "Kuzey jüriye döndü. “Aynı kalp,” dedi. “Ama atışı değişir. Yeni bedenin hızına uyar.” Durdu. “Bence kalp kimin olduğunu bilmez. Kimin içinde olduğunu bilir.” Jüri üyesi simidini bıraktı, not aldı."),
P(function(d){ return d.neden_sordu; }, "Fuardan sonra Kuzey'e sordun. “Ablam hep beni korurdu,” dedi. “Şimdi ben onun kalbini korumak istiyorum. Nerede olduğunu bilmesem de. Nasıl çalıştığını bilirsem biraz korumuş olurum.”"),
P(function(d){ return d.sinir; }, "Jüri üyesi not aldı. Kuzey sana baktı. Bir an kırılmış gibi. Sonra: “Hatırlamıyor,” dedi. “Ama atıyor. Bu daha iyi değil mi?”"),
P(function(d){ return d.psikolog; }, "Psikoloğun adını aldın. İlk seansta kırk dakika konuştun. Yedi yılda kurduğun cümlelerden fazlası."),
P(function(d){ return d.yuksek_sesle; }, "Mektubu yüksek sesle okudun. “Her gece kulağımı göğsüne dayıyorum.” Orada sesin çatladı, devam edemedin. Esra mektubu elinden alıp gerisini o okudu."),
P(function(d){ return d.izin; }, "Bir hafta izin aldın. Kordon'da yürüdün, martılara simit attın. Yedinci gün bir çağrı geldi. Açmadın. Esra açtı."),
"Bir yıl sonra, bir ekim akşamı, Ayten Hanım buluşmak istiyor. Kordon'da, denize bakan bir bank.",
"Zayıflamış. Saçının ortasında beyaz bir şerit. Boyatmamış. Elinde Duru'nun kırmızı tarağı, çantasından sapı görünüyor.",
P(function(d){ return d.iletti && VAR(d); }, "Çantasından mektubu çıkarıyor. Kanatlı kalp resmi. “Her gece okuyorum,” diyor. “Erdal da okuyor. Ağlıyor. Hiç ağlamazdı.”"),
P(YOK, "“Erdal bundan hiç konuşmuyor,” diyor. “Ama geçen hafta ehliyetinin arkasına bir şey yazmış. ‘Organ bağışçısıdır.’ Bana göstermedi. Pantolonunu yıkamaya atarken cüzdanı düştü.”"),
"Kuzey on üç yaşında, fen olimpiyatına hazırlanıyor, sesi kalınlaşmaya başlamış.",
P(VAR, "“Barış Bey. O çocuğu görmek istiyorum. Bir kez. Konuşmasam da olur. Ya da göğsünü dinlemek. Bir steteskopla. Duru'nun kalbini duymak istiyorum. Bir kez. Sonra bir daha istemem.”"),
P(YOK, "“Barış Bey. Doğru mu yaptık? Erdal'ın istediği gibi bütün gönderdik. Ama her gece o çocuğu düşünüyorum. Biri ona kalp verdi, biz vermedik. Doğru mu yaptık?”")
], secenekler: [
{ t: function(d){ return VAR(d) ? "Merkezle ve alıcı ailesiyle görüşüp, iki tarafın da onayıyla bir buluşma ayarlamaya çalışacağını söylersin." : "“Doğru yaptınız. Hayır demek de bir armağandı. Kızınıza,” dersin."; }, to: "bs", etki: function(d){ if(VAR(d)) d.bulustur = true; else d.sefkat++; } },
{ t: function(d){ return VAR(d) ? "“Yapamam Ayten Hanım. Bu kural sizi de onları da koruyor,” dersin." : "“Bilmiyorum,” dersin. “Ama hangi kararı verseniz, bu soruyu soracaktınız.”"; }, to: "bs", etki: { adalet: 1 } },
{ t: function(d){ return VAR(d) ? "Ona Duru'nun kalbinin ilk kez başka bir göğüste attığı saati söylersin." : "Ona Duru'nun son saatini söylersin. Cihazın kapandığı dakikayı."; }, to: "bs", etki: { sefkat: 1, saat_soyledi: true } },
{ t: "“Ben bu işi bırakıyorum,” dersin. Bunu ilk kez yüksek sesle söylüyorsun.", to: "bs", etki: { istifa: true } }
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
P(S("t4A"), "“Bir buluşma ayarlamaya çalışacağım,” demiştin. Ayten Hanım tarağı çantasına geri koymuştu, eli titreyerek."),
P(S("t4B"), "“Yapamam,” demiştin. “Kural sizi de onları da koruyor.” Ayten Hanım “Peki,” demişti. Anladığı için değil, yorulduğu için."),
P(S("t4C"), "Kalbin ilk kez başka bir göğüste attığı saati söylemiştin. Ayten Hanım saati telefonuna not etmişti. Notun başlığına “Duru” yazdığını gördün."),
"Duru'nun kalbi Ankara'da, dokuz yaşında bir çocuğun göğsünde atıyor.",
P(function(d){ return d.bagis === "tam"; }, "Karaciğeri İzmir'de bir adamda. Böbrekleri iki kişide: Bornova'da bir ev hanımı, Eskişehir'de bir üniversite öğrencisi. Korneaları iki gözde. Biri Kemeraltı'nda bir saatçi."),
"Ayten Hanım her yıl merkez aracılığıyla bir mektup yazıyor. Her yıl bir cevap geliyor. İsimsiz. Bir resim, bir karne fotokopisi, bir cümle: “Bu yıl yüzmeyi öğrendi.” Geçen yılın karnesinde türkçe notu düşükmüş; Ayten Hanım kırmızı kalemle altını çizip sana gösterdi, gülerek.",
"Erdal Bey bir gün otobüsünü bir okulun önündeki durakta durdurdu. Kapıyı açtı. Dokuz on yaşlarında bir çocuk koşarak bindi, nefes nefese, kartını basmayı unuttu. Erdal Bey bir şey demedi. Çocuğu durağı geçene kadar aynadan izledi."
]},

son_liste: { son: true, baslik: "Dördüncü Sıra", metin: [
P(S("t4A"), "“Bir buluşma ayarlamaya çalışacağım,” demiştin. Ayten Hanım tarağı çantasına geri koymuştu, eli titreyerek."),
P(S("t4B"), "“Yapamam,” demiştin. Ayten Hanım “Peki,” demişti. Anladığı için değil, yorulduğu için."),
P(S("t4C"), "Kalbin ilk kez başka bir göğüste attığı saati söylemiştin. Ayten Hanım saati telefonuna not etmişti."),
"Duru'nun kalbi doğru yere gitti. Böbrekleri, korneaları da. Karaciğeri bir milletvekilinin babasında.",
P(function(d){ return d.liste === "kural"; }, "Kuralı uyguladın. Bir ay eksik bir belge. Her şey yasal. İmzaladığın kâğıt dosyada, nedeniyle birlikte. Bir gün biri okursa belki anlar. Belki okumaz."),
P(function(d){ return d.liste === "vip"; }, "Karar vermedin. “Bakarım” dedin ya da “Merkez verir.” Sonra her şey kendiliğinden oldu gibi oldu."),
"Liman işçisi bir yıl sonra hâlâ bekliyor. Ayıklığının üçüncü yılında. Bir kere hastanenin önünde gördün onu: vinçli fotoğraftaki bıyık beyazlamış, elinde bir poşet ilaç. Seni tanımadı.",
"Her ay merkeze giden raporlara bir satır ekliyorsun: “Alıcı seçim sürecinde dış müdahale şüphesi.” Kimse cevap vermiyor. Yine de ekliyorsun.",
P(function(d){ return d.haber_birakti; }, "Haberi Sinan'ın masasına bırakmıştın. Ertesi gün haber gitmiş, yerine yeni bir orkide gelmişti. Sözleşmen yenilendi. Neden, sormadın."),
"Ayten Hanım kızının karaciğerinin kimde olduğunu hiç öğrenmeyecek. Bir keresinde “Hepsi iyi insanlara gitti, değil mi?” diye sordu. “Evet,” dedin."
]},

son_butun: { son: true, baslik: "Kefen", metin: [
P(S("t4A"), "“Hayır demek de kızınıza bir şey vermekti,” demiştin. Ayten Hanım denize bakıp uzun uzun ağlamıştı. Bir martı gelip bankın ucuna konmuş, gitmemişti."),
P(S("t4B"), "“Hangi kararı verseniz bu soruyu soracaktınız,” demiştin. Ayten Hanım bir yıldır ilk kez gülmüştü. Kısa, burnundan."),
P(S("t4C"), "Ona son saati söylemiştin. Ayten Hanım bilmiyordu. O an saate değil, kızının yüzüne bakıyordu."),
"Duru bütün gömüldü. Erdal Bey kızını kendi elleriyle yıkadı. Mavi ojeyi silmedi. Kefeni sararken küçük parmak dışarıda kaldı. Bir süre baktı, sonra onu da örttü.",
"Ankara'daki çocuk iki hafta sonra başka bir kalp aldı. Başka bir gecede, başka bir ailenin evetinden.",
P(function(d){ return d.israr_kismi; }, "O hayırı sen büyüttün. Bir kalp verilecekti. Fazlasını istedin ve hepsi gitti. Kimseye söylemedin. Gece uyanınca bazen o dokuz yaşındaki çocuğun on dördüncü ayını hesaplıyorsun, sonra on beşinciyi."),
"Erdal Bey'in ehliyetinin arkasında artık bir yazı var: “Organ bağışçısıdır.” Kızını vermedi. Kendini veriyor. Bir gün Ayten Hanım'a sormuş: “Benim gözlerim de işe yarar mı, şoför gözü?”"
]},

son_kalp: { son: true, baslik: "Kalp Sesi", metin: [
P(S("t4A"), "“Bir buluşma ayarlamaya çalışacağım,” demiştin. Ayten Hanım tarağı çantasına geri koymuştu, eli titreyerek."),
P(S("t4B"), "“Yapamam,” demiştin. Ayten Hanım “Peki,” demişti."),
P(S("t4C"), "Kalbin ilk kez başka bir göğüste attığı saati söylemiştin. Ayten Hanım saati telefonuna not etmişti."),
"Aylar süren yazışmalar. Merkez, iki aile, psikologlar, hukukçular. Kural esnemedi. İki ailenin kendi istekleriyle birbirini bulmasına bir kapı aralandı.",
"Bir bahar sabahı Ankara'da bir park. Ayten Hanım, Erdal Bey, Kuzey. Karşılarında bir kadın, bir adam ve on yaşında bir çocuk: Emir. Gömleğinin üst düğmesi açık. Göğsünde uzun, pembe bir iz.",
"Kimse ne diyeceğini bilmiyor. Emir'in babası boğazını temizliyor, vazgeçiyor. Emir annesinin arkasından çıkıp Ayten Hanım'ın önüne geliyor.",
"“Dinlemek ister misiniz?” diyor.",
"Steteskobu sen getirdin. Ayten Hanım kulaklarına takıyor, diz çöküyor, çocuğun göğsüne koyuyor.",
"Bir dakika. İki dakika. Ayten Hanım'ın gözleri kapalı. Yanaklarından yaş iniyor, silmiyor.",
"Sonra steteskobu Erdal Bey'e uzatıyor. Erdal Bey önce elini cebine sokuyor. Sonra alıyor. Diz çökerken dizi çatırdıyor; Emir gülüyor, Erdal Bey de gülüyor. Dinliyor.",
"Kuzey en son dinliyor. Bitince steteskobu sana veriyor. “Biraz hızlı atıyor,” diyor. “Ablam hep acele ederdi zaten.”"
]},

son_koordinator: { son: true, baslik: "Gece İkide", metin: [
P(S("t4D"), "“Bırakıyorum,” demiştin. Ayten Hanım şaşırmamıştı. “Bırakın,” demişti. “Bir yıl önce de yorgundunuz. Ben fark etmiştim.”"),
"İstifa dilekçeni yazdın. Yedi yıl. Esra yerine geçti. Veda ederken sordu: “En çok neyi özleyeceksin?” Düşündün. “Koridoru,” dedin. “Kimse çağırmadan gelenleri. Elleri unlu kafeteryacı kadını.”",
P(function(d){ return d.liste === "vip" || d.liste === "kural"; }, "Bir de kimseye söylemediğin şey: listeyi. Bir telefonla, bir imzayla nasıl eğildiğini gördün ve düzeltemedin."),
"Şimdi bir aile sağlığı merkezinde hemşiresin. Tansiyon ölçüyorsun, aşı yapıyorsun. Salı günleri gelen yaşlı bir adam her seferinde sana karısının köftesini anlatıyor.",
"Bazı geceler tam ikide uyanıyorsun. Telefon çalmıyor. Karın bu sefer alışamadı. O da uyanıyor, “Yine mi?” diyor, sırtını okşuyor.",
"Cüzdanında bir kart var, kendi kartın: “Organ bağışçısıdır.” Bu işe başladığın gün imzalamıştın. Bir gün, bir gece ikide, senin için de biri telefonu açacak. Uykulu, montunu ters giyerek."
]}

},

ayna: function(d){
  var out = [];
  var a = d.adalet, b = d.sefkat, c = d.riza;
  if(a >= b && a >= c) out.push("Çoğu kavşakta listeyi ve kuralı korudun. Bazen bunun için aileden uzaklaştın.");
  else if(b >= c) out.push("Çoğu kavşakta Ayten Hanım'ın, Erdal Bey'in, Kuzey'in yanında kaldın.");
  else out.push("Çoğu kavşakta geri çekildin; kararı ve zamanı aileye bıraktın.");
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
