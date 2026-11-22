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
"Telefon ikinci çalışta açılıyor; uykunda bile bu sesi tanıyorsun. Yoğun bakımdan Dr. Nihan: “Barış, olası bir donör. On yedi yaşında. Bisiklet, kamyon. Klinik olarak beyin ölümü tablosu var. Testlere başlıyoruz.”",
"Adın Barış, kırk bir yaşındasın. On yıl yoğun bakım hemşireliği yaptın; son yedi yıldır İzmir'de bir eğitim hastanesinde organ nakli koordinatörüsün. Bu meslekte iki türlü gece vardır: birinin öldüğü geceler ve birinin öldüğünün anlaşıldığı geceler. Bu ikincisi.",
"Karın uyanmıyor; alışmış. Montunu giyip arabaya biniyorsun. İzmir'in boş caddeleri, kırmızı yanan trafik ışıkları, kimse beklemiyor ama sen yine de duruyorsun.",
"Yoğun bakımın kapısından girerken camın ardından onu görüyorsun. Duru Aksoy. Saçları yastığa dağılmış, alnında bir sargı, ağzında solunum tüpü. Göğsü makinenin ritmiyle kalkıp iniyor. Monitörde kalp atışları: düzenli, güçlü. On yedi yaşında bir kalp.",
"Koridorda iki sandalyede bir kadın ve bir adam. Anne ve baba. Ayten Hanım öğretmen; Erdal Bey otobüs şoförü. Henüz kimse onlara “beyin ölümü” kelimesini söylemedi. Henüz kimse “bağış” kelimesini hiç söylemedi.",
"Senin işin, bu iki kelimeyi, doğru sırayla, doğru zamanda, onlara taşımak."
], secenekler: [
{ t: "Doğruca aileye gidip kendini tanıtırsın. Henüz bağıştan söz etmeden.", to: "a2", etki: { sefkat: 1, erken_tanisti: true } },
{ t: "Önce dosyaya ve klinik bulgulara bakarsın. Protokol: tanı kesinleşmeden aileye yaklaşılmaz.", to: "a2", etki: { adalet: 1 } },
{ t: "Ulusal koordinasyon merkezini arayıp olası bir donör için ön bildirim yaparsın.", to: "a2", etki: { adalet: 1, merkez_erken: true } },
{ t: "Arabada bir dakika oturursun. Kendine. Bu geceye girmeden önce.", to: "a2", etki: { riza: 1 } }
]},

a2: { saat: "04.00", baslik: "Apne Testi", metin: [
P(S("a1A"), "“Ben Barış,” dedin. “Bu gece sizinle olacağım.” Ayten Hanım elini tuttu; tanımadığı birinin elini, bir can simidi gibi. Erdal Bey seni süzdü. Kim olduğunu tam anlamadı; ama bir şeyin geldiğini anladı."),
P(S("a1B"), "Dosyayı okudun: Glasgow skoru üç, pupiller sabit, beyin sapı refleksleri yok. Her satır, yıllardır okuduğun satırlar. Ama satırların arasında bir isim vardı ve isim on yedi yaşındaydı."),
P(S("a1C"), "Merkez kaydı aldı. Ekranda bir numara belirdi: olası donör, İzmir, on yedi. Daha kimse onun öldüğünü ailesine söylemeden, bir sistem onu bir umuda dönüştürmüştü."),
P(S("a1D"), "Bir dakika. Motor kapalı, sokak lambası ön camda. Bu meslekte yedi yıl. Kaç aileye bu geceyi yaşattın? Saymıyorsun. Saymayı bıraktığın gün, bu işi bırakman gerektiğini biliyorsun."),
"Sabahın dördünde Dr. Nihan apne testini yapıyor. Solunum cihazı birkaç dakikalığına kapatılıyor. Bir beynin nefes emri verip vermediğine bakılıyor. Kan gazı ölçülüyor; karbondioksit yükseliyor, yükseliyor.",
"Duru'nun göğsü kımıldamıyor. Bir kez bile. Beyin hiçbir emir vermiyor.",
"Cihaz yeniden bağlanıyor. Göğüs yine kalkıp inmeye başlıyor. Bir yasa gereği, iki ayrı uzman tanıyı ayrı ayrı onaylıyor. Saat 04.38. Duru Aksoy'un ölüm saati. Kalbi hâlâ atarken.",
"Ayten Hanım camın arkasından her şeyi gördü. İçeri giriyorsun. Ona, kızının beyninin öldüğünü, bunun geri dönüşü olmadığını, bunun ölüm olduğunu söylüyorsun.",
"Ayten Hanım camdan kızına bakıyor. Pembe yanaklar. Kalkıp inen göğüs. Monitörde yeşil, düzenli bir çizgi.",
"“Kalbi atıyor,” diyor. Sesi sakin; bir öğretmen bir öğrenciyi düzeltir gibi. “Sıcak. Nefes alıyor. Nasıl ölü olsun?”"
], secenekler: [
{ t: "Beyin ölümünü açıkça, sabırla anlatırsın: makinenin nefes verdiğini, beynin hiçbir şey yapmadığını.", to: "a3", etki: { adalet: 1, anlatti: true } },
{ t: "Ayten Hanım'ı içeri, kızının yanına götürürsün. Elini tutsun.", to: "x_dokunus", etki: { sefkat: 1 } },
{ t: "Dr. Nihan'dan beyin kan akımı görüntülerini göstermesini istersin.", to: "x_cizgi", etki: { adalet: 1 } },
{ t: "Hiçbir şey açıklamazsın. Şimdi zamanı değil.", to: "a3", etki: { riza: 1, bekledi: true } }
]},

x_dokunus: { saat: "04.50", baslik: "Sıcak El", metin: [
"Ayten Hanım'ı yatağın yanına götürüyorsun. Önlük giydiriyorsun, maske, galoş. Bir anneyi kızının yanına kılık değiştirerek sokmak.",
"Ayten Hanım yatağın kenarında duruyor. Bir an dokunmaya korkuyor; sonra kızının elini alıyor. Sıcak. Parmaklarında oje; mavi, yarısı dökülmüş.",
"“Dün sürdü bunu,” diyor. “Banyoda. Ben kızdım, oje kokusu bütün evi sardı. Kızdım ona. Dün.”",
"Kızının saçını okşuyor. Alnındaki sargıya dokunmamaya çalışarak. Sonra eğiliyor, kulağına bir şey fısıldıyor. Duymuyorsun; duymaman gerekiyor.",
"Monitör atıyor. Makine nefes veriyor. Duru'nun göğsü kalkıp iniyor. Bir an Ayten Hanım'ın yüzünde bir şey beliriyor: umut mu? Kızı onu duymuş gibi. Kalbi onun sesine atıyormuş gibi.",
"Sonra soluyor. Bir öğretmenin aklı, bir annenin kalbine yetişiyor.",
"“Duymuyor, değil mi?” diyor sana dönmeden.",
"Bir annenin, kızının sıcak elini tutarken, kızının ölü olduğunu kabul etmesi. Bunu sözle değil, elle öğrenmesi."
], secenekler: [
{ t: "“Hayır,” dersin. Yumuşak ama net.", to: "a3", etki: { adalet: 1 } },
{ t: "“Bilmiyoruz,” dersin. Bilimin kesin olduğu yerde, bir anneye.", to: "a3", etki: { sefkat: 1, bilmiyoruz: true } },
{ t: "Hiçbir şey söylemeden bir sandalye çekip onu oturtursun.", to: "a3", etki: { sefkat: 1 } },
{ t: "Erdal Bey'i de içeri çağırırsın. Bu an ikisinin.", to: "a3", etki: { riza: 1, baba_iceri: true } }
]},

x_cizgi: { saat: "04.50", baslik: "Kara Görüntü", metin: [
"Dr. Nihan monitörü aileye çeviriyor. Bir beyin anjiyografisi: boyalı madde damarlara verilmiş, kafatasının içine girmemiş. Görüntüde boyun damarları beyaz, kafatasının içi siyah. Kan, beyne gitmiyor.",
"“Burası,” diyor Dr. Nihan, parmağıyla gösteriyor, “beyin. Kan almıyor. Kan almayan doku yaşayamaz.”",
"Erdal Bey ekrana yaklaşıyor. Gözlüğü yok; kısarak bakıyor. Uzun süre.",
"“Bu kızımın beyni mi?” diyor. “Boş mu? Siyah mı?”",
"“Kan almıyor,” diye tekrarlıyor Dr. Nihan.",
"Erdal Bey ekrana bir şey arar gibi bakmaya devam ediyor. Sanki siyahın içinde bir yerde kızını bulacakmış gibi. Otuz yıl otobüs kullanmış bir adam; yolları, işaretleri, haritaları okumayı bilen bir adam. Bu haritayı okuyamıyor.",
"Sonra geri çekiliyor. “Bir makine söylüyor,” diyor. “Bir makine kızımın öldüğünü söylüyor. Öbür makine de onu yaşatıyor. Hangisine inanayım?”",
"Bilimin kesinliği, bir babanın sorusunun karşısında birden çok yalnız kalıyor."
], secenekler: [
{ t: "“İkisine de değil, bize inanın. İki doktor ayrı ayrı baktı,” dersin.", to: "a3", etki: { adalet: 1 } },
{ t: "“Kızınızın bedeni yaşıyor gibi. Ama kızınız artık o bedende değil,” dersin.", to: "a3", etki: { sefkat: 1, beden_cumlesi: true } },
{ t: "Erdal Bey'e istediği kadar bakmasına izin verirsin. Saatlerce olsa da.", to: "a3", etki: { riza: 1 } },
{ t: "Ekranı kapatırsın. Bir babaya bu kadarı yeter.", to: "a3", etki: { sefkat: 1 } }
]},

a3: { saat: "06.10", baslik: "Soru", metin: [
P(S("x_dokunusC"), "Bir sandalye çekip Ayten Hanım'ı oturttun. Bir saat kızının elini tuttu. Kalktığında bir şey söylemedi; ama elini kızının yanağından çekerken bir an durdu."),
P(S("x_cizgiA"), "“Bize inanın,” dedin. Erdal Bey sana baktı. “Size inanmak kolay,” dedi. “Kızıma inanmamak zor.”"),
P(S("x_cizgiC"), "Erdal Bey'in ekrana istediği kadar bakmasına izin verdin. Kırk dakika baktı: siyah bir kafatası, beyaz damarlar. Sonra kızının yüzüne dokunur gibi ekrana dokundu."),
P(S("x_cizgiD"), "Ekranı kapattın. Erdal Bey kararmış ekrana bakmaya devam etti."),
P(S("a2A"), "Anlattın. Sabırla, basit kelimelerle. Ayten Hanım her cümlende başını salladı ve her cümlenden sonra camdan kızına baktı; kelimelerinle gördüğü şeyi bir türlü üst üste koyamadı."),
P(S("a2D"), "Hiçbir şey açıklamadın. Ayten Hanım ile Erdal Bey koridorda, birbirlerine dokunmadan, iki saat oturdular. Bir yerde Erdal Bey kalktı, makineden iki çay aldı. İkisi de içmedi."),
P(S("x_dokunusA"), "“Hayır,” dedin. Ayten Hanım başını salladı. Kızının elini bıraktı; sonra yeniden tuttu. Bir veda, ilk kez; ama son kez değil."),
P(S("x_dokunusB"), "“Bilmiyoruz,” dedin. Ayten Hanım'ın yüzü bir an aydınlandı. Sonra sana baktı. “Bilmiyoruz mu, bilmiyor musunuz?” dedi. Bir öğretmen."),
P(S("x_dokunusD"), "Erdal Bey içeri girdi. Kızının ayak ucunda durdu. Dokunmadı. Sonra çarşafın altından görünen bir ayağı, mavi ojeli küçük parmağı gördü ve oraya, yalnızca oraya, dokundu."),
P(S("x_cizgiB"), "Erdal Bey cümleni tekrarladı: “Artık o bedende değil.” Sonra sana döndü: “O zaman nerede?” Cevabın yoktu. Senin mesleğinde kimsenin yok."),
"Sabah altı. Pencereden İzmir körfezi; gri, sakin. Aile odasındasınız. Ayten Hanım, Erdal Bey ve sen.",
"Yıllardır bu cümleyi kuruyorsun ve her seferinde ilk kez kuruyormuş gibi. “Duru'nun organları başka insanların hayatını kurtarabilir. Kalbi, karaciğeri, böbrekleri. Bunu düşünmenizi istemek için buradayım. Karar tamamen sizin. Hayır demek de bir karar.”",
"Uzun bir sessizlik. Ayten Hanım yere bakıyor. Erdal Bey pencereye.",
"Sonra Erdal Bey konuşuyor; sakin, kesin, hiç düşünmeden: “Kızımı parçalatmam. Bütün gelecek, bütün gidecek. Kıyamet günü bütün kalkacak. Benim kızım bir yedek parça değil.”",
"Ayten Hanım bir şey söylemiyor. Ama gözleri kocasına değil, sana bakıyor."
], secenekler: [
{ t: "“Anlıyorum Erdal Bey. Kararınıza saygı duyuyorum,” dersin.", to: "a4", etki: { riza: 1 } },
{ t: "Diyanet'in organ bağışını caiz saydığını, hatta teşvik ettiğini anlatırsın.", to: "a4", etki: { adalet: 1, fetva: true } },
{ t: "Ayten Hanım'a dönüp onun ne düşündüğünü sorarsın.", to: "bl_anne", etki: { riza: 1, anneye_sordu: true } },
{ t: "Hiçbir şey söylemezsin. Odadan çıkıp onları yalnız bırakırsın.", to: "bl_koridor", etki: { sefkat: 1 } }
]},

a4: { saat: "07.00", baslik: "Kuzey", metin: [
P(S("bl_anneA"), "“Sesi,” diye tekrarladı Ayten Hanım. Defterin o sayfasını gözlerinin önüne getirir gibi baktı. Sonra kalkıp odaya döndü. Kapı kapandı. İçeriden bir süre hiçbir ses gelmedi."),
P(S("bl_anneC"), "Ayten Hanım sana baktı. “Haklısınız,” dedi. “On beş yaşında. Paraşütle atlamak da istiyordu.” Gülümsedi; acı bir gülümseme. “Ama yine de yazdı.”"),
P(function(d){ return d.son === "bl_anneB" || d.son === "bl_anneD"; }, "Ayten Hanım bir süre sessiz kaldı. Sonra defterden hiç söz etmedi. Ama odaya dönerken bir an durup sana baktı; bir sırrı paylaşmış birinin bakışıyla."),
P(S("bl_koridorA"), "Nihan uzun süre düşündü. “Bilmiyorum,” dedi. “Belki söylesek, aileler bize daha çok güvenirdi. Belki hiç güvenmezlerdi.” Kahvesini bitirmeden yoğun bakıma döndü."),
P(S("bl_koridorB"), "Nihan sana baktı. Bir an ikiniz de bir şey söylemediniz. Sonra Nihan güldü, yorgun bir gülüş. “İki küçük ses,” dedi. “Bir koridorda. Kimse duymasın.”"),
P(function(d){ return d.son === "bl_koridorC" || d.son === "bl_koridorD"; }, "Nihan başını salladı. “Haklısın,” dedi; ya da kahve için teşekkür etti. Yoğun bakıma döndü. Arkasından bakarken onun omuzlarının ne kadar düşük olduğunu fark ettin."),
P(S("a3A"), "Erdal Bey seni süzdü; bir itiraz bekliyordu, gelmedi. Bu onu rahatlatmadı; tersine, gardını indiremedi."),
P(S("a3B"), "“Diyanet,” dedi Erdal Bey. “Diyanet benim kızımı tanımaz.” Ama bir an durdu. Bir şeyin tartıldığını gördün; dengesi henüz değişmemişti."),
P(S("a3C"), "Ayten Hanım uzun süre sustu. Sonra kocasının yüzüne bakmadan, çok alçak sesle: “Duru kan bağışına gitmişti geçen ay. On yedisini doldurmadan alamıyorlarmış. Kızmıştı. ‘Yararlı bir şey yapmak istedim, izin vermediler,’ demişti.” Erdal Bey ona döndü. Konuşmadılar."),
P(S("a3D"), "Odadan çıktın. Kapının camından gördün: Erdal Bey ayağa kalktı, pencereye gitti; Ayten Hanım oturdu, ellerini yüzüne kapadı. Sonra Erdal Bey döndü ve elini karısının omzuna koydu. İlk kez bu gece."),
"Kantinde, bir köşede, on iki yaşında bir çocuk. Kuzey. Duru'nun kardeşi. Teyzesi getirmiş; şimdi teyzesi telefonda, Kuzey tek başına bir meyve suyunu pipetle karıştırıyor.",
"Seni hastane kartından tanıyor. “Siz ablamı mı bekliyorsunuz?” diyor.",
"Yanına oturuyorsun. Ne kadar bildiğini bilmiyorsun. Çok şey biliyor; çocuklar her zaman bilir.",
"“Teyzem telefonda söyledi,” diyor. “Ablamın kalbi başka birine verilebilirmiş. Doğru mu?”",
"Başını sallıyorsun.",
"Kuzey pipetle oynamaya devam ediyor. Sonra sana bakmadan: “Ablamın kalbi başkasında atarsa, ablam yaşar mı? Yani biraz? O kişi ablamı sever mi? Kalbi onunsa?”"
], secenekler: [
{ t: "“Hayır, ablan yaşamaz. Ama o kişi yaşar. Ablan sayesinde,” dersin.", to: "a5", etki: { adalet: 1 } },
{ t: "“Belki biraz, evet. O kişi ablanı hep hatırlar,” dersin.", to: "a5", etki: { sefkat: 1, kuzey_teselli: true } },
{ t: "“Sen ne düşünüyorsun?” diye sorarsın.", to: "a5", etki: { riza: 1, kuzey_dusun: true } },
{ t: "“Bunu annenle babana sorman gerek,” dersin. Bir çocuğun omzuna bu yükü koymak istemiyorsun.", to: "a5", etki: { sefkat: 1 } }
]},

a5: { saat: "08.00", baslik: "Liste", metin: [
P(S("a4A"), "Kuzey başını salladı. “Ablam hep birilerini kurtarmak isterdi,” dedi. “Kedileri. Kuşları. Bir keresinde bir kirpiyi.” Pipetin ucunu ısırdı. “Kirpi ölmüştü.”"),
P(S("a4B"), "Kuzey'in yüzü aydınlandı. “O zaman ablam yaşar,” dedi; bir çocuğun mantığıyla, tam ve kesin. Sen bir şey düzeltmedin."),
P(S("a4C"), "Kuzey uzun süre düşündü. “Bence kalp sadece bir pompa,” dedi. “Fende öğrendik. Ablam kalbinde değildi. Ablam kafasındaydı.” Durdu. “Ama kafası da öldü.” Sonra ağladı; ilk kez."),
P(S("a4D"), "Kuzey başını eğdi. “Onlar konuşmuyor,” dedi. “Annemle babam. Ben ne sorsam cevap vermiyorlar.”"),
"Sabah sekizde ofisine dönüyorsun. Bilgisayarda ulusal nakil sistemi. Duru'nun kan grubu, doku uyumu, organ ölçüleri girilirse sistem bir liste çıkaracak. Kimin hangi organı alacağına bir algoritma karar verecek: bekleme süresi, aciliyet, uyum, mesafe.",
"Ön sorgu sonuçları ekranda. Kalp: Ankara'da dokuz yaşında bir çocuk. On dört aydır bekliyor, mekanik kalp destek cihazına bağlı; durumu kritik. Karaciğer, sıranın başında: elli sekiz yaşında bir adam, eski alkol bağımlısı, iki yıldır ayık, tıbbi olarak uygun.",
"Telefon çalıyor. Başhekim yardımcısı Dr. Sinan. Sabahın sekizinde.",
"“Barış, günaydın. Duydum, bir donör adayı var. Bak, şimdi... Karaciğer listesinde birinci sıradaki hastanın alkol geçmişi var, biliyorsun. Tıbbi uygunluğunu bir daha değerlendirmek lazım. Dördüncü sırada bir hasta var; çok önemli bir ailenin büyüğü. Milletvekili Bey'in babası. Ben sadece söylüyorum. Sen bilirsin.”",
"Sen bilirsin. Bu iki kelime, bir talimattan daha ağır."
], secenekler: [
{ t: "“Hocam, liste listedir. Kimseyi kaydırmam,” dersin.", to: "a6", etki: { adalet: 2, liste: "adil" } },
{ t: "“Bu benim kararım değil hocam, merkez verir,” dersin. Konuyu kapatırsın.", to: "a6", etki: { liste: "vip" } },
{ t: "Telefonu kapattıktan sonra konuşmayı not alıp ulusal merkeze bildirirsin.", to: "a6", etki: { adalet: 2, liste: "adil", ihbar: true } },
{ t: "“Bakarım hocam,” dersin. Vakit kazanmak için.", to: "a6", etki: { liste: "vip", bakarim: true } }
]},

a6: { saat: "10.00", baslik: "Saat", metin: [
P(S("a5A"), "Sinan bir an sustu. “Tabii,” dedi. “Ben zaten öyle demek istedim.” Telefonu kapattı. Bir kapı kapandı; arkasında ne kaldığını sonra öğreneceksin."),
P(S("a5B"), "“Tabii,” dedi Sinan. “Merkez verir.” Sesinde bir memnuniyet. Bir şeyi başkasına bırakmanın, onu başkasının yapmasına izin vermek olduğunu biliyordun."),
P(S("a5C"), "Bildirimi yazdın, gönderdin. Merkezden bir kadın sesi: “Not ettik. Teşekkürler. Bu tür telefonlar sanıldığından sık.” Sanıldığından sık."),
P(S("a5D"), "“Bakarım,” dedin. Sinan memnun kapattı. Bir sözün ne kadar hafif söylendiğini ve ne kadar ağır duracağını biliyorsun."),
"Saat on. Yoğun bakımdan Dr. Nihan arıyor: “Barış, tansiyon düşüyor. Vazopresör dozunu artırdık. Beyin ölümünden sonra beden yavaş yavaş dağılır, biliyorsun. Birkaç saatimiz var. Belki on iki, belki daha az. Sonra organlar kullanılamaz hâle gelir.”",
"Aile odasında Ayten Hanım ile Erdal Bey hâlâ karar vermedi. Ayten Hanım bir kez sana “Evet” der gibi baktı; Erdal Bey bir kez yüksek sesle “Hayır” dedi. Aralarında bir duvar var ve duvar, yirmi beş yıllık bir evliliğin ortasından geçiyor.",
"Ankara'da dokuz yaşında bir çocuk, bir makineye bağlı, uyuyor. Bir karaciğer listesinde elli sekiz yaşında bir adam ayıklığının iki yılını sayıyor. Dördüncü sırada bir milletvekilinin babası. Ve İzmir'de, bir yoğun bakım odasında, ojesi yarısı dökülmüş bir kız.",
"Saat işliyor. Bir sonraki adımı sen seçeceksin."
], secenekler: [
{ t: "Aileye kararın tamamen kendilerine ait olduğunu söyleyip geri çekilirsin. Saatin işlemesine izin vererek.", to: "r1", etki: { riza: 2, kol: "saygi" } },
{ t: "Aileye kalbi bekleyen çocuğu anlatırsın: yaşını, kaç aydır beklediğini. Kuralı çiğneyerek; ve onlara bir çocuğun hayatını yükleyerek.", to: "i1", etki: { sefkat: 1, kol: "israr", anonimlik: true } },
{ t: "Oğlunun organlarını bağışlamış bir anneyi ve hastanenin manevi danışmanını çağırırsın. Destek mi baskı mı, ailenin nasıl karşılayacağını bilmeden.", to: "k1", etki: { sefkat: 1, kol: "topluluk" } },
{ t: "Aileyi bir meslektaşına bırakıp önce listeyi güvenceye almaya gidersin. En ağır saatlerinde yanlarında olmadan.", to: "y1", etki: { adalet: 2, kol: "sistem" } }
]},


bl_anne: { saat: "06.30", baslik: "Ayten", metin: [
"Ayten Hanım'ı koridora çıkarıyorsun. Erdal Bey odada kalıyor; pencereden körfeze bakıyor, sırtı size dönük.",
"Koridorun sonunda bir pencere, pencerenin önünde iki plastik sandalye. Oturuyorsunuz. Ayten Hanım uzun süre ellerine bakıyor.",
"“Duru'nun bir defteri var,” diyor sonunda. “Günlük değil. Bir liste. ‘Ölmeden önce yapacaklarım.’ On beş yaşında yazmıştı. Ben gizlice okudum; annelerin yapmaması gereken bir şey.”",
"Bir süre susuyor. “Birinci madde: Paraşütle atlamak. İkinci: Annemle Paris'e gitmek. Üçüncü: Birine hayatını borçlu olmak ya da birinin hayatını bana borçlu bırakmak. O zaman çok gülmüştüm. Ne saçma bir cümle, demiştim. Şimdi...”",
"Cümlesini bitirmiyor. Bitirmesine gerek yok.",
"“Erdal'a söyleyemem bunu,” diyor. “Okuduğumu bilmiyor. Duru da bilmiyordu. Şimdi bir ölü kızın gizli listesini, onun ölümünü kullanmak için mi ortaya çıkarayım? Bu ona bir ihanet olmaz mı?”",
"Bir annenin elinde, kızının yazdığı tek bir cümle. Ve o cümle, bir kararın bütün ağırlığını taşıyor."
], secenekler: [
{ t: "“Bu bir ihanet değil. Duru'nun sesi,” dersin.", to: "a4", etki: { sefkat: 1, liste_ses: true } },
{ t: "“Bunu Erdal Bey'e söyleyip söylememek sizin kararınız,” dersin.", to: "a4", etki: { riza: 1 } },
{ t: "“On beş yaşında yazılmış bir cümle, bir karar sayılmaz,” dersin. Dürüst olmak istiyorsun.", to: "a4", etki: { adalet: 1, liste_sayilmaz: true } },
{ t: "Bir şey söylemezsin. Elini tutarsın.", to: "a4", etki: { sefkat: 1 } }
]},

bl_koridor: { saat: "06.30", baslik: "Nihan", metin: [
"Odadan çıkıyorsun. Koridorda Dr. Nihan, bir duvara yaslanmış, gözleri kapalı. On altı saattir nöbette. Seni duyunca gözlerini açıyor.",
"“Nasıl?” diyor.",
"“Babası hayır diyor,” diyorsun. “Annesi bir şey demiyor.”",
"Nihan başını sallıyor. Sonra, beklemediğin bir şey söylüyor: “Biliyor musun, ben de bazen emin olamıyorum.”",
"“Neyden?”",
"“Beyin ölümünden. Bilimsel olarak eminim; testler kesin, kriterler net. Ama yatağın başında durunca, o pembe yanakları, o sıcak eli görünce... Yirmi yıllık hekimim, yüzlerce tanı koydum. Her seferinde içimde küçük bir ses: ya yanılıyorsak? Bilim yanılmaz diyorum kendime. Ama ben bilim değilim. Ben bir kadınım, bir annenin karşısında.”",
"Kantinden bir kahve kokusu geliyor. Bir hemşire geçiyor, ikinize bakıp hızlanıyor.",
"“Ailelere ‘kesin’ diyoruz,” diyor Nihan. “Kesin demek zorundayız. Ama bizim içimizdeki o küçük ses, onların içindeki büyük sesin küçük bir kardeşi. Bunu hiç söylemiyoruz.”"
], secenekler: [
{ t: "“Bunu ailelere söylemememiz doğru mu sence?” diye sorarsın.", to: "a4", etki: { adalet: 1, nihan_soru: true } },
{ t: "“Bende de var o ses,” dersin. İlk kez yüksek sesle.", to: "a4", etki: { sefkat: 1, ses_itiraf: true } },
{ t: "“Testler kesin Nihan. Ses yalnızca yorgunluk,” dersin.", to: "a4", etki: { adalet: 1 } },
{ t: "Ona bir kahve getirirsin.", to: "a4", etki: { sefkat: 1 } }
]},

bl_kuzey: { saat: "Dört ay sonra", baslik: "Proje", metin: [
"Bir şubat sabahı telefonuna tanımadığın bir numaradan bir mesaj. “Merhaba Barış Bey. Ben Kuzey. Duru'nun kardeşi. Annemin telefonundan yazıyorum. Okulda bir bilim fuarı var. Projemi görmeye gelir misiniz?”",
"Bir ortaokulun spor salonu. Masalar, posterler, volkan maketleri, güneş sistemleri. Kuzey'in masasında plastikten büyük bir kalp modeli; odacıklar, kapakçıklar, damarlar, hepsi farklı renklerde boyanmış. Bir pompa, bir hortum, kırmızı boyalı su. Kuzey bir düğmeye basıyor; su kalbin içinde dolaşıyor.",
"Posterin başlığı: “Kalp Nasıl Çalışır? (Ve Neden Başka Birinde de Çalışabilir?)”",
"Kuzey seni görünce kızarıyor. Sonra anlatmaya başlıyor; bir öğretmene anlatır gibi. Kan grupları, doku uyumu, bağışıklık sistemi, ret ilaçları. Her şeyi okumuş. Her şeyi biliyor.",
"Sonra sesini alçaltıyor: “Öğretmenim bu projeyi neden seçtiğimi sordu. Söylemedim. Siz söylemeyin.”",
"Bir jüri üyesi yaklaşıyor. Kuzey'e bir soru soruyor: “Bir kalp başka bir bedende de aynı kalp midir?”",
"Kuzey sana bakıyor. Bir an. Sonra jüriye dönüyor."
], secenekler: [
{ t: "Kuzey'in cevabını beklersin. Onun cevabı olmalı.", to: "t4", etki: { riza: 1, kuzey_cevap: true } },
{ t: "Kuzey'e gözlerinle cesaret verirsin; bir baş sallamayla.", to: "t4", etki: { sefkat: 1, kuzey_cevap: true } },
{ t: "Fuardan sonra Kuzey'e projeyi neden seçtiğini sorarsın.", to: "t4", etki: { sefkat: 1, neden_sordu: true } },
{ t: "Jüri üyesine Kuzey'in bilmediği bir ayrıntıyı anlatırsın: kalbin sinirlerinin kesildiğini, artık eski bedenini “hatırlamadığını”.", to: "t4", etki: { adalet: 1, sinir: true } }
]},

bl_esra: { saat: "Dört ay sonra", baslik: "Esra", metin: [
P(VAR, "Mektubu masanda bıraktın. Okudun, hissetmedin. Bir haftadır hiçbir şey hissetmiyorsun; ne bir “evet”te, ne bir “hayır”da."),
P(YOK, "Ayten Hanım'ın telefonundan sonra bir şey yapmadın. Ne bir cevap, ne bir arama. Bir haftadır hiçbir şey hissetmiyorsun; ne bir “evet”te, ne bir “hayır”da."),
"Esra bir öğle arası kapını çalıyor. Elinde iki çay. Oturuyor.",
"“Barış,” diyor, “geçen hafta bir aileyle konuştun. Ben kapıdaydım. Sesin... sesin bir kayıt gibiydi. Doğru cümleler, doğru sırayla. Ama içinde kimse yoktu.”",
"Bir şey söylemiyorsun.",
"“Ben de yaşadım bunu,” diyor Esra. “Üç yıl önce. Bir gece bir aile benden nefret etti, ertesi gece başka bir aile bana sarıldı, üçüncü gece ikisini de hatırlamadığımı fark ettim. Psikologa gittim. Kimseye söylemedim.”",
"Çayını karıştırıyor. “Bu iş, bir süre sonra insanı bir kanala çeviriyor. İçinden yas geçiyor, umut geçiyor, organlar geçiyor. Ama kanal hiçbir şeyi tutmuyor; tutarsa tıkanır. Bir gün fark ediyorsun ki sen de bir boru olmuşsun.”",
"Bir süre bekliyor. “Bir şey yapman gerek. Ne, bilmiyorum. Ama bir şey.”"
], secenekler: [
{ t: "Esra'nın gittiği psikoloğun adını istersin.", to: "t4", etki: { sefkat: 1, psikolog: true } },
{ t: "“Ben iyiyim Esra,” dersin. İkiniz de bunun doğru olmadığını bilerek.", to: "t4", etki: { yorgun: true } },
{ t: function(d){ return VAR(d) ? "Mektubu bir kez daha, Esra'nın yanında, yüksek sesle okursun." : "Esra'ya Ayten Hanım'ın sorusunu anlatırsın: “Doğru mu yaptık?”"; }, to: "t4", etki: function(d){ d.sefkat++; if(VAR(d)) d.yuksek_sesle = true; else d.esraya_anlatti = true; } },
{ t: "Bir hafta izin istersin.", to: "t4", etki: { riza: 1, izin: true } }
]},

/* ---------- SAYGI KOLU ---------- */
r1: { saat: "10.20", baslik: "Geri Çekilmek", metin: [
"Aile odasına girip oturuyorsun. Bu kez bir şey istemek için değil.",
"“Ayten Hanım, Erdal Bey,” diyorsun. “Bilmenizi isterim: hayır derseniz kimse size kötü gözle bakmaz. Ben bakmam. Bu hastane bakmaz. Bu sizin kızınız, sizin kararınız. Ne karar verirseniz verin, Duru'ya son ana kadar saygıyla bakacağız.”",
"Erdal Bey'in omuzları gevşiyor. Bütün sabah bir savaşa hazırlanmış; savaş gelmeyince ne yapacağını bilemiyor.",
"Ama Ayten Hanım ağlamaya başlıyor. Sessizce, sonra sesli.",
"“Ben vermek istiyordum,” diyor. Kocasına değil, sana. “Ben vermek istiyordum ama kimse bana sormadı. O hayır dedi, sen de saygı duydun. Bana kim saygı duyacak?”",
"Erdal Bey karısına dönüyor. Şaşkın. Yirmi beş yıl. Bu sesi hiç duymamış.",
"“Duru'nun kalbi,” diyor Ayten Hanım. “Bir yerde atsın istiyorum. Toprağın altında durmasın. Bir yerde atsın.”",
"Bir anne ile bir baba, aynı kızın iki ayrı geleceğini istiyor. Biri bütün bir beden, biri atan bir kalp. Ve sen, saygı duymaya karar verdiğin anda, hangisine saygı duyacağını bilmediğini fark ediyorsun."
], secenekler: [
{ t: "Odadan çıkıp onları yalnız bırakırsın. Bu konuşma onların.", to: "r2", etki: { riza: 1 } },
{ t: "İkisinin arasında arabuluculuk yaparsın.", to: "r2", etki: { sefkat: 1, arabulucu: true } },
{ t: "Erdal Bey'e Diyanet'in görüşünü yazılı olarak verirsin.", to: "r2", etki: { adalet: 1, fetva: true } },
{ t: "Ayten Hanım'ın tarafını tutarsın: “Sizin de sesiniz var.”", to: "r2", etki: { sefkat: 1, ayten_yaninda: true } }
]},

r2: { saat: "14.00", baslik: "Kalp Yalnız", metin: [
P(S("r1A"), "Kapıyı kapattın. Dört saat konuştular. Bir yerde Erdal Bey'in sesi yükseldi, bir yerde Ayten Hanım'ın. Sonra uzun bir sessizlik oldu. Sonra kapı açıldı."),
P(S("r1B"), "İkisinin arasında oturdun. Erdal Bey'in korkularını dinledin: kızının bedeninin “kesilip biçilmesi”, “eksik gömülmesi”. Ayten Hanım'ın dileğini dinledin: “bir yerde atsın.” Sonunda Erdal Bey, sana değil karısına, “Ne istiyorsun?” dedi. Yirmi beş yılda belki ilk kez."),
P(S("r1C"), "Erdal Bey kâğıdı okudu. Bir kez, iki kez. Sonra katlayıp cebine koydu. “Allah izin veriyormuş,” dedi. “Ama ben izin veriyor muyum, onu bilmiyorum.”"),
P(S("r1D"), "Erdal Bey sana öfkeyle baktı. “Siz bizim aramıza giriyorsunuz,” dedi. Haklıydı. Ama Ayten Hanım'ın sesini duyan tek kişi de sendin."),
"Öğleden sonra ikide kapı açılıyor. Erdal Bey ayakta. Yüzü bir gecede on yıl yaşlanmış.",
"“Kalbini verelim,” diyor. “Sadece kalbini. Annesi istiyor. Bir yerde atsın. Ama gerisini vermem. Karnını açtırmam. Gözlerine dokundurmam. Kalp; o kadar.”",
"Bir kalp, dokuz yaşında bir çocuk için. Karaciğer, iki böbrek, iki kornea: dört beş insan daha. Onlar listede bekleyecek. Belki bir başka gece, bir başka kızın ailesi.",
"Ayten Hanım kocasının koluna dokunuyor. Bir şey diyecek gibi; demiyor. Aldığı şey, istediğinden azdı; ama hiçbir şeyden çoktu."
], secenekler: [
{ t: "Kabul edersin. Teşekkür edersin. Yalnızca kalp.", to: "r3", etki: { riza: 1, bagis: "kalp" } },
{ t: "Karaciğerin ve böbreklerin de dört insanı kurtarabileceğini anlatırsın.", to: "r3", etki: function(d){ d.adalet++; d.israr_kismi = true; d.bagis = d.fetva || d.arabulucu ? "tam" : "yok"; } },
{ t: "Ayten Hanım'la yalnız konuşmak istersin.", to: "r3", etki: function(d){ d.sefkat++; d.bagis = "kalp"; d.ayten_yalniz = true; } },
{ t: "Erdal Bey'e kalbin nasıl alınacağını, bedenin nasıl kapatılacağını, Duru'nun “bütün” gömüleceğini anlatırsın.", to: "r3", etki: { sefkat: 1, adalet: 1, bagis: "kalp", butun_anlatti: true } }
]},

r3: { saat: "16.00", baslik: "Karar Sonrası", metin: [
P(function(d){ return d.israr_kismi && d.bagis === "tam"; }, "Erdal Bey seni dinledi. Elinde Diyanet'in kâğıdı ya da karısının eli. Uzun bir sessizlik. Sonra: “Tamam,” dedi. “Hepsi. Ama gözleri kalsın. Gözlerini bana bıraksınlar.” Gözler kaldı. Gerisi gitti."),
P(function(d){ return d.israr_kismi && d.bagis === "yok"; }, "Erdal Bey seni dinledi ve yüzü kapandı. “Ben size bir kalp verdim,” dedi. “Siz daha fazlasını istiyorsunuz. Hiçbir şey vermiyorum. Hiçbir şey.” Ayten Hanım bir çığlık attı, sonra sustu. Bir kapı kapandı ve bu sefer senin elin itti onu."),
P(S("r2C"), "Ayten Hanım'la koridorda konuştun. “Teşekkür ederim,” dedi. “Bana sorduğunuz için. Kimse sormadı. Babam da sormazdı, kocam da.” Kalp için evet; gerisi için ikisi de razı."),
P(S("r2D"), "Erdal Bey dinledi. Kesilecek yeri, dikişi, örtüyü, kefene nasıl sarılacağını. “Bütün mü olacak?” dedi. Bütün olacak, dedin. Kalbi olmadan. Başını salladı. Bu tam bir evet değildi; ama bir babanın verebileceği en büyük evet buydu."),
P(VAR, "Ulusal merkeze bildiriyorsun. Ekranda sistem çalışıyor; birkaç dakika sonra bir onay: kalp, Ankara, alıcı belirlendi. Bir ekip hazırlanıyor. Bir uçak. Bir soğuk kutu."),
P(YOK, "Ulusal merkezi arıyor, bağış olmayacağını bildiriyorsun. Karşıdaki ses bir an susuyor. “Anladım,” diyor. “Ailesine başsağlığı.” Sistem, Duru'yu listeden siliyor. Ankara'daki çocuk, bir başka geceyi bekleyecek."),
"Akşamüstü yoğun bakımda Duru'nun yatağının başındasın. Ayten Hanım kızının saçlarını tarıyor. Erdal Bey ayak ucunda, o mavi ojeli küçük parmağı tutuyor. Kuzey kapıda, içeri girmeye korkuyor.",
"Bir aile, kızlarına veda ediyor. Kalbi hâlâ atarken."
], secenekler: [
{ t: "Kuzey'i içeri alıp ablasının yanına götürürsün.", to: "t1", etki: { sefkat: 1, kuzey_iceri: true } },
{ t: "Aileyi yalnız bırakırsın.", to: "t1", etki: { riza: 1 } },
{ t: "Ayten Hanım'a Duru'nun bir tutam saçını kesip saklamayı önerirsin.", to: "t1", etki: { sefkat: 1, sac: true } },
{ t: "Ekip için hazırlıklara gidersin. İşin bu.", to: "t1", etki: { adalet: 1 } }
]},

/* ---------- ISRAR KOLU ---------- */
i1: { saat: "10.20", baslik: "Dokuz Yaş", metin: [
"Kural açık: alıcının kimliği, ailesi, yaşı, şehri donör ailesine söylenmez. Anonimlik iki tarafı da korur: bir ailenin bağışını borç gibi görmesini, bir başkasının hayatını bir armağanın gölgesinde yaşamasını engeller.",
"Aile odasına giriyorsun. Oturuyorsun. Ve kuralı çiğniyorsun.",
"“Ankara'da dokuz yaşında bir çocuk var,” diyorsun. “On dört aydır bir kalp bekliyor. Göğsüne bir makine takılmış; kalbi tek başına çalışamıyor. Makineyle yaşıyor, hastanede. On dört ay. Okula gidemiyor. Bisiklete binemiyor. Doktorları birkaç hafta kaldığını düşünüyor.”",
"Ayten Hanım'ın elleri yüzüne kalkıyor. Bir çocuk. Dokuz yaş. Bisiklet.",
"Erdal Bey ayağa fırlıyor. Yüzü kıpkırmızı.",
"“Bizi suçlu mu hissettireceksin?” diye bağırıyor. “Kızım öldü! Kızım bu sabah öldü! Sen bana bir başkasının çocuğunu mu anlatıyorsun? Benim kızımın kalbini istemek için mi?”",
"Haklı. Ve sen de haklısın. Bu odada iki haklı insan var ve arada bir çocuk var ki hiçbir odada değil; Ankara'da, bir makineye bağlı, uyuyor.",
"Ayten Hanım ağlıyor ve kocasının koluna yapışmış. “Dokuz yaşında,” diyor tekrar tekrar. “Dokuz yaşında.”"
], secenekler: [
{ t: "Özür dilersin. Kuralı çiğnediğin için.", to: "i2", etki: { riza: 1, ozur: true } },
{ t: "“Suçlu değilsiniz. Yalnızca bilmenizi istedim,” dersin. Geri adım atmadan.", to: "i2", etki: { adalet: 1 } },
{ t: "Ayten Hanım'ın yanına oturup elini tutarsın.", to: "i2", etki: { sefkat: 1 } },
{ t: "Erdal Bey'in peşinden gidersin. Odadan çıkıyor.", to: "i2", etki: { sefkat: 1, erdal_pesinden: true } }
]},

i2: { saat: "11.30", baslik: "Mescit", metin: [
P(S("i1A"), "Özür diledin. Erdal Bey seni dinlemedi; odadan çıktı. Ayten Hanım arkasından bakakaldı. “Gitme,” dedi. Kocası gitti."),
P(S("i1B"), "“Bilmemizi istedin,” diye tekrarladı Erdal Bey. “Peki ben ne yapayım bu bilgiyle? Ömür boyu bir çocuğu düşüneyim mi? Ankara'da bir çocuk ölünce, ‘Benim yüzümden’ mi diyeyim?” Odadan çıktı."),
P(S("i1C"), "Ayten Hanım'ın eli elinde titredi. Erdal Bey ikinize baktı, sonra odadan çıktı. Kapıyı çarpmadı. Daha kötüsü: yavaşça kapattı."),
P(S("i1D"), "Erdal Bey'in peşinden koridora çıktın. Hızlı yürüyordu, sonra yavaşladı, sonra bir kapının önünde durdu."),
"Hastanenin mescidi bodrum katta, küçük, halısı eskimiş. Erdal Bey içeride, duvara yaslanmış oturuyor. Namaz kılmıyor. Yalnızca oturuyor.",
"Seni görünce bir şey söylemiyor. Sen de kapının eşiğinde duruyorsun. Ayakkabılarını çıkarıp içeri giriyorsun, onun karşısına oturuyorsun.",
"Uzun bir sessizlikten sonra konuşuyor. Sana değil, halıya.",
"“Babam öldüğünde,” diyor, “köyde yıkadık onu. Ben yıkadım, amcam yıkadı. Bütün bedenini. Kefene sardık. Bir şeyi eksik değildi. Babam bütün gitti. Ben de kızımı bütün göndermek istiyorum. Babamı nasıl gönderdiysem.”",
"Bir süre susuyor. Sonra sesi kırılıyor: “Ama dokuz yaşında, dedin. Benim de dokuz yaşımda babam beni otobüse bindirmişti. İlk kez. Şoförün yanına oturtmuştu. Ben o gün şoför olmaya karar verdim.”",
"Bir adam, bir mescitte, iki ölünün ve bir çocuğun arasında kalmış."
], secenekler: [
{ t: "Duru'nun da bütün gömüleceğini, kalbin alınacağı yerin kapatılacağını anlatırsın.", to: "i3", etki: { sefkat: 1, butun_anlatti: true } },
{ t: "Hiçbir şey söylemezsin. Onunla birlikte oturursun.", to: "i3", etki: { riza: 1, mescit_sessiz: true } },
{ t: "“Babanız size otobüsü verdi. Siz Duru'ya ne vermek istersiniz?” diye sorarsın.", to: "i3", etki: { sefkat: 1, soru: true } },
{ t: "“Yanlış yaptım, size o çocuğu anlatmamalıydım,” dersin.", to: "i3", etki: { riza: 1, pisman: true } }
]},

i3: { saat: "13.00", baslik: "Evet", metin: [
P(S("i2A"), "Erdal Bey dinledi. Kesik, dikiş, örtü, kefen. “Bütün mü?” dedi. Bütün, dedin. Kalbi olmadan, ama bütün. Uzun süre düşündü."),
P(S("i2B"), "Yarım saat oturdunuz. Hiç konuşmadan. Bir yerde Erdal Bey ellerini açtı, dua etti; sessizce, dudakları kıpırdayarak. Sonra yüzünü sıvazladı ve kalktı."),
P(S("i2C"), "Erdal Bey sana baktı. Uzun süre. “Ne vermek isterdim?” dedi. “Her şeyi.” Sonra sustu. “Ama ona veremem artık. O öldü.” Bir süre daha sustu. “Belki başkasına.”"),
P(S("i2D"), "Erdal Bey başını kaldırdı. “Yanlış yapmadın,” dedi. Şaşırdın. “Söylemeseydin bilmeyecektim. Bilmeseydim belki daha kolay hayır derdim. Şimdi zor. Ama zor olması yanlış olduğu anlamına gelmez.”"),
"Aile odasına dönüyorsunuz. Ayten Hanım ayağa kalkıyor, kocasının yüzüne bakıyor.",
"Erdal Bey bir süre karısının gözlerine bakıyor. Sonra sana dönüyor.",
P(function(d){ return d.butun_anlatti || d.soru; }, "“Verelim,” diyor. “Kalbini. Karaciğerini. Böbreklerini. Ne lazımsa. Ama bir şartım var: kızımı ben yıkayacağım. Ameliyattan sonra. Babamı nasıl yıkadıysam.”"),
P(function(d){ return !(d.butun_anlatti || d.soru); }, "“Kalbini verelim,” diyor. “Dokuz yaşındaki çocuk için. Başka bir şey değil. O çocuk için.”"),
"Ayten Hanım kocasına sarılıyor. Yirmi beş yılın en uzun sarılması.",
"Ama bir şey daha var. Ayten Hanım geri çekiliyor, sana dönüyor: “O çocuğun adını öğrenebilir miyiz? Bir gün. Görebilir miyiz? Duru'nun kalbinin attığını duyabilir miyiz?”",
"Bir kuralı çiğnedin ve şimdi o kural, bir annenin sorusunda geri dönüyor."
], secenekler: [
{ t: "“Hayır. Bu kural ikiniz için de var,” dersin.", to: "t1", etki: function(d){ d.adalet++; d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; } },
{ t: "“Bir gün, belki. İki aile de isterse,” dersin.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; d.belki_dedi = true; } },
{ t: "“Size bir mektup ulaştırabilirim. İsimsiz,” dersin.", to: "t1", etki: function(d){ d.riza++; d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; d.mektup_soz = true; } },
{ t: "Cevap vermezsin. Şimdilik.", to: "t1", etki: function(d){ d.bagis = (d.butun_anlatti || d.soru) ? "tam" : "kalp"; } }
]},

/* ---------- TOPLULUK KOLU ---------- */
k1: { saat: "11.00", baslik: "Gülsüm", metin: [
"Gülsüm Hanım'ı aradığında o da ağlıyor; seni tanıyor. Beş yıl önce, bir mart gecesi, yirmi bir yaşındaki oğlu Burak'ın organlarını bağışlamıştı. O gece de sen oradaydın.",
"Bir saat sonra hastanede. Altmışlarında, başörtülü, elinde bir fotoğraf albümü. Aile odasına giriyor; Ayten Hanım'ın yanına oturuyor. Sen kapının yanında duruyorsun.",
"“Ben de sizin gibiydim,” diyor Gülsüm Hanım. “Bu odada. Bu sandalyelerde. Oğlum yirmi bir yaşındaydı. Motosiklet.”",
"Albümü açıyor. Burak'ın fotoğrafları: bebekken, okulda, askerde. Sonra son sayfa: bir mektup, plastiğin içinde.",
"“Bu geçen yıl geldi,” diyor. “İsimsiz. Oğlumun böbreğini alan bir öğretmenden. Okuyayım mı?”",
"Ayten Hanım başını sallıyor.",
"“‘Sayın Bağışçı Ailesi. Ben bir ilkokul öğretmeniyim. On iki yıl diyalize girdim. Haftada üç gün, dört saat. Şimdi her sabah okula gidiyorum. Geçen hafta öğrencilerime organ bağışını anlattım. Bir çocuk sordu: “Öğretmenim, sizin içinizde başkası mı yaşıyor?” Ben de dedim ki: “Evet. Ama o kişi şimdi benimle birlikte ders anlatıyor.”’”",
"Ayten Hanım öğretmen. Bu cümle ona doğrudan dokunuyor. Erdal Bey ise duvara bakıyor; bir başkasının kederinin kendi kederine karıştırılmasından rahatsız."
], secenekler: [
{ t: "Gülsüm Hanım'a teşekkür edip onu aileyle yalnız bırakırsın.", to: "k2", etki: { riza: 1 } },
{ t: "Erdal Bey'in yanına gidersin. Bir başka babanın sesine ihtiyacı olabilir.", to: "k2", etki: { sefkat: 1, erdal_yaninda: true } },
{ t: "Gülsüm Hanım'a “hayır” deyip pişman olan aileleri de anlatmasını istersin. Dürüst olsun.", to: "k2", etki: { adalet: 1, durust_gulsum: true } },
{ t: "Albümü kapatırsın. Bu kadarı yeter.", to: "k2", etki: { riza: 1, album_kapandi: true } }
]},

k2: { saat: "12.00", baslik: "Danışman", metin: [
P(S("k1A"), "Gülsüm Hanım ile Ayten Hanım bir saat konuştu. Çıktığında Gülsüm Hanım sana sarıldı. “Annesi istiyor,” dedi. “Babası korkuyor. Babalar hep korkar. Benim kocam da korkmuştu. Ama şimdi her bayram o öğretmene dua ediyor.”"),
P(S("k1B"), "Erdal Bey'in yanında durdun. “Bir başkasının hikâyesi,” dedi. “Benimki değil.” Sonra bir süre sustu. “Ama o kadın gülümsüyordu. Oğlunu anlatırken. Ben kızımı anlatırken gülümseyebilecek miyim bir gün?”"),
P(S("k1C"), "Gülsüm Hanım bir an şaşırdı, sonra başını salladı. “Var,” dedi. “Pişman olanları da tanıyorum. Hayır deyip pişman olanları da, evet deyip pişman olanları da. İkisi de var. Kararınız ne olursa olsun, bir gün bir şeye pişman olacaksınız. Bunu bilin.” Erdal Bey ilk kez Gülsüm Hanım'a baktı."),
P(S("k1D"), "Albüm kapandı. Gülsüm Hanım anladı, başını salladı. “Haklısın,” dedi. “Benim acım onların acısını büyütmesin.” Kalktı. Kapıda Ayten Hanım arkasından seslendi: “Bekleyin. Biraz daha kalın.”"),
"Öğlen hastanenin manevi danışmanı geliyor: Mustafa Hoca, eski bir müftü yardımcısı, şimdi emekli, gönüllü. Yaşlı, sakin, ellerinde tespih.",
"Erdal Bey'le köşede konuşuyor. Sen uzaktan izliyorsun. Bir yerde Erdal Bey'in sesi yükseliyor: “Kıyamet günü!” Mustafa Hoca sakin: “Kıyamet günü Allah bedeni nasıl dirilteceğini bilir, Erdal Bey. Toprakta çürüyen bedeni de bilir. Bir başkasının göğsünde atan kalbi de bilir.”",
"“Peki bir insanı kurtarmak?” diyor Mustafa Hoca. “Kim bir canı kurtarırsa, bütün insanlığı kurtarmış gibidir. Bunu ben söylemiyorum.”",
"Erdal Bey uzun süre sessiz. Sonra: “Fetva kızımı tanımaz hoca.”",
"Mustafa Hoca başını sallıyor. “Tanımaz,” diyor. “Siz tanıyorsunuz. Siz söyleyin: kızınız ne isterdi?”"
], secenekler: [
{ t: "Erdal Bey'e Kuzey'in sana söylediklerini anlatırsın.", to: "k3", etki: { sefkat: 1, kuzey_anlatti: true } },
{ t: "Hiçbir şeye karışmazsın. Bu konuşma onların.", to: "k3", etki: { riza: 1 } },
{ t: "Mustafa Hoca'ya teşekkür edip konuşmayı bitirmesini istersin. Baskı fazlalaştı.", to: "k3", etki: { riza: 1, baski_bitti: true } },
{ t: "Ayten Hanım'ı da çağırırsın. Bu sorunun cevabı ikisinde.", to: "k3", etki: { sefkat: 1, ayten_cagrildi: true } }
]},

k3: { saat: "14.00", baslik: "Aile Meclisi", metin: [
P(S("k2A"), "Erdal Bey'e Kuzey'in sorusunu anlattın: “Ablamın kalbi başkasında atarsa ablam yaşar mı?” Erdal Bey'in yüzü çöktü. “Oğlum bunu mu sordu?” Kantine yürüdü. Yarım saat sonra Kuzey'in elini tutarak döndü."),
P(S("k2B"), "Karışmadın. Mustafa Hoca ile Erdal Bey bir saat daha konuştu. Konuşmanın sonunda Erdal Bey hocanın elini öptü; bir karar mıydı bu, bir teşekkür mü, bilmiyorsun."),
P(S("k2C"), "Mustafa Hoca anlayışla başını salladı ve gitti. Erdal Bey arkasından baktı. “İyi adam,” dedi. “Ama hepiniz bir şey istiyorsunuz benden. Hepiniz.”"),
P(S("k2D"), "Ayten Hanım geldi, kocasının yanına oturdu. Mustafa Hoca sorusunu tekrarladı. Ayten Hanım cevap verdi, kocasının yerine: “Kan vermek istedi geçen ay. Yaşı tutmadı. Kızdı.” Erdal Bey karısına baktı. Bilmiyordu."),
"Öğleden sonra ikide akrabalar geliyor. Duru'nun dedesi, iki amca, bir teyze, kuzenler. Haber yayılmış. Aile odası doluyor; koridora taşıyor.",
"Herkesin bir fikri var. Bir amca: “Bizde böyle şey olmaz.” Teyze: “Duru olsa verirdi.” Dede, köyden gelmiş, sekiz yaşında: “Erdal ne derse o.” Bir kuzen telefonundan bir video gösteriyor: bir nakil hastasının ilk adımları.",
"Erdal Bey odanın ortasında, herkesin gözü üstünde. Bir babanın kendi kızı hakkındaki kararı, bir anda bir aile meclisinin kararına dönüşüyor.",
"Saat ikiyi geçiyor. Dr. Nihan kapıdan başını uzatıp sana bakıyor: tansiyon düşüyor. Zaman daralıyor."
], secenekler: [
{ t: "Akrabalardan odayı boşaltmalarını rica edersin. Karar anne ve babanındır.", to: "t1", etki: function(d){ d.riza += 2; d.bagis = (d.kuzey_anlatti || d.ayten_cagrildi || d.durust_gulsum) ? "tam" : "kalp"; d.oda_bosaldi = true; } },
{ t: "Meclisin karar vermesine izin verirsin. Bu ailenin yolu bu.", to: "t1", etki: function(d){ d.bagis = (d.kuzey_anlatti || d.erdal_yaninda) ? "kalp" : "yok"; d.meclis_karar = true; } },
{ t: "Zaman baskısını açıkça söylersin: “Birkaç saatimiz var.”", to: "t1", etki: function(d){ d.adalet++; d.bagis = d.baski_bitti ? "yok" : "tam"; d.zaman_baskisi = true; } },
{ t: "Erdal Bey'i koridora çıkarıp onunla yalnız konuşursun.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = (d.album_kapandi || d.baski_bitti) ? "kalp" : "tam"; } }
]},

/* ---------- SİSTEM KOLU ---------- */
y1: { saat: "10.20", baslik: "Merkez", metin: [
"Aileyi meslektaşın Esra'ya bırakıyorsun. Esra deneyimli; seni anlıyor, ama gözlerinde bir soru: “Şimdi mi?” Evet, şimdi. Bir organ bağışlanırsa ve yanlış birine giderse, bu ailenin armağanı bir yalanın içinde kaybolur. Önce armağanın gideceği yolu temizlemen gerekiyor.",
"Ofisinde kapıyı kapatıp ulusal koordinasyon merkezini arıyorsun. Hattın öbür ucunda Ankara'da bir koordinatör: Selin Hanım, seni yıllardır tanıyor.",
P(function(d){ return d.ihbar; }, "“Sabahki bildiriminizi aldık,” diyor Selin Hanım. “Kayıt altında. Bu sabah Sinan Bey'in hastanesinden başka bir sorgu daha gelmiş: karaciğer listesindeki birinci hastanın tıbbi uygunluğu için bir itiraz. Siz mi gönderdiniz?” Hayır, diyorsun. Sen göndermedin."),
P(function(d){ return !d.ihbar; }, "Anlatıyorsun: Sinan'ın telefonunu, “önemli aile”yi, “sen bilirsin”i. Selin Hanım dinliyor. Sonra: “Bu sabah sizin hastanenizden bir itiraz gelmiş. Karaciğer listesindeki birinci hastanın alkol geçmişi gerekçesiyle. İmza: Başhekim Yardımcısı.”"),
"Bir sistem, bir algoritma, bir sıra. Kimin yaşayacağına adil bir şekilde karar vermek için kurulmuş. Ve bir telefon, bir imza, bir “önemli aile”, o sırayı bir sabahta değiştirmeye çalışıyor.",
"“İtirazı inceleyeceğiz,” diyor Selin Hanım. “Ama biliyorsunuz, alkol geçmişi tıbbi bir kriter. İki yıllık ayıklık belgesi varsa itiraz reddedilir. Belge var mı?”",
"Dosyayı açıyorsun. Birinci sıradaki adamın dosyası. Elli sekiz yaşında, emekli liman işçisi. Ayıklık belgesi: bir yıl on bir ay. İki yıla bir ay eksik.",
"Bir ay. Bir kural. Bir adamın hayatı. Ve dördüncü sırada bir milletvekilinin babası, bu bir ayın içinden geçip yukarı çıkmaya hazır."
], secenekler: [
{ t: "Kuralı olduğu gibi uygularsın: bir ay eksik, itiraz geçerli. Ama bunu yazılı olarak, nedeniyle kayda geçirirsin.", to: "y2", etki: { adalet: 1, liste: "kural", kural_yazdi: true } },
{ t: "Adamın bağımlılık doktorunu arayıp güncel bir değerlendirme istersin. Bir ay, bir rapor kadar.", to: "y2", etki: { adalet: 1, sefkat: 1, liste: "adil", rapor: true } },
{ t: "Sinan'ın itirazının arkasındaki baskıyı resmî olarak bildirirsin.", to: "y2", etki: { adalet: 2, liste: "adil", resmi: true } },
{ t: "Selin Hanım'a karar vermeyi bırakırsın. Sen elinden geleni yaptın.", to: "y2", etki: { liste: "vip" } }
]},

y2: { saat: "12.30", baslik: "Sinan", metin: [
P(S("y1A"), "Kuralı uyguladın. Liman işçisi listeden düştü; ikinci, üçüncü sıradakiler uyumsuz; dördüncü sıradaki adam birinci oldu. Tamamen yasal. Tamamen adil görünen. Ama sen nedenini yazdın, imzaladın. Bir gün biri okursa, bu kâğıdın neden yazıldığını bilecek."),
P(S("y1B"), "Bağımlılık doktoru bir saat içinde rapor gönderdi: “Hasta yirmi üç aydır ayık, düzenli takipte, tedaviye tam uyumlu. Bir aylık farkın klinik önemi yoktur.” Merkez itirazı reddetti. Liman işçisi sırasını korudu."),
P(S("y1C"), "Bildirimini yazdın. Üç sayfa, saatleriyle, isimleriyle. Selin Hanım teşekkür etti. “Bu tür bildirimler bir yere gider mi bilmiyorum,” dedi. “Ama gider diye yazıyoruz.”"),
P(S("y1D"), "Selin Hanım'a bıraktın. Telefonu kapattıktan sonra bir süre ekrana baktın. Elinden geleni yaptın mı? Yoksa yalnızca yapmış gibi görünecek kadarını mı?"),
"Öğle arası Sinan seni odasına çağırıyor. Başhekim yardımcısının odası geniş, penceresi denize bakıyor. Masada aile fotoğrafları, bir futbol takımının bayrağı, bir bitki.",
"“Barış,” diyor Sinan, gülümseyerek. “Merkezden bir telefon aldım. Sen mi aradın?”",
"Gülümsemesi sabit; gözleri değil.",
"“Bak,” diyor, “ben burada on beş yıldır yöneticiyim. Bu hastanenin bütçesi, cihazları, kadroları, hepsi birileriyle iyi ilişkiler sayesinde. Milletvekili Bey'in bu hastaneye ne kadar yardımı dokundu biliyor musun? Yeni yoğun bakım ünitesi. Senin çalıştığın ünite. Ben bir şey istemedim. Sadece bir dosyanın bir daha incelenmesini istedim.”",
"Sonra sesini alçaltıyor: “Sözleşmen önümüzdeki ay yenilenecek, değil mi?”"
], secenekler: [
{ t: "“Evet hocam. Yenilensin ya da yenilenmesin, liste listedir,” dersin.", to: "y3", etki: { adalet: 2, direndi: true } },
{ t: "“Haklısınız hocam. Ben de sadece kuralı uyguladım,” dersin. Kendini koruyarak.", to: "y3", etki: { kendini_korudu: true } },
{ t: "Telefonunu masaya koyup konuşmayı kaydettiğini söylersin.", to: "y3", etki: { adalet: 1, kayit: true } },
{ t: "Bir şey söylemeden odadan çıkarsın.", to: "y3", etki: { riza: 1 } }
]},

y3: { saat: "13.30", baslik: "Geri Dönüş", metin: [
P(S("y2A"), "Sinan'ın gülümsemesi silindi. “Görürüz,” dedi. Odadan çıkarken arkandan ekledi: “Bu hastanede kahraman olmanın bedeli ağır Barış. Kahramanlar genellikle başka hastanelere gider.”"),
P(S("y2B"), "Sinan başını salladı, memnun. “İşte böyle,” dedi. “Hepimiz kuralları uyguluyoruz.” Bir kuralın arkasına saklanmak; bunu da bu sabah öğrendin."),
P(S("y2C"), "Sinan'ın yüzü bembeyaz oldu. “Bunu yapamazsın,” dedi. Yapmıştın. Bir süre sessiz kaldı, sonra koltuğuna yaslandı. “Ne istiyorsun?” dedi. Hiçbir şey, dedin. Yalnızca listenin liste olarak kalmasını."),
P(S("y2D"), "Kapıyı arkandan kapattın. Sinan bir şey söylemedi. Sessizlik, iki taraf için de bir mesajdı."),
"Aile odasına dönüyorsun. Üç saat geçmiş. Esra kapıda seni bekliyor; yüzü yorgun.",
"“Annesi evet diyor,” diyor Esra. “Babası hâlâ hayır. Ben elimden geleni yaptım ama beni tanımıyorlar Barış. Seni soruyorlar. ‘Sabahki adam nerede?’ diyorlar. Seni bekliyorlar.”",
"İçeri giriyorsun. Ayten Hanım seni görünce ayağa kalkıyor. Erdal Bey kalkmıyor.",
"“Nereye gittin?” diyor Erdal Bey. Sesi öfkeli değil; kırgın. “Bütün sabah buradaydın. Sonra gittin. Kızımız burada ölürken, sen başka bir işe mi gittin?”",
"Ona, kızının armağanının doğru yere gitmesi için savaştığını söyleyebilirsin. Ama bu, bir babanın kulağında nasıl duyulur? Bir armağan, henüz verilmemişken, onun için bir savaş verilmiş olabilir mi?"
], secenekler: [
{ t: "Her şeyi anlatırsın: listeyi, baskıyı, neden gittiğini.", to: "t1", etki: function(d){ d.adalet++; d.bagis = "tam"; d.anlatti_liste = true; } },
{ t: "“Özür dilerim. Burada olmalıydım,” dersin. Başka bir açıklama yapmadan.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = "kalp"; } },
{ t: "“Kararınız ne olursa olsun, şimdi buradayım,” dersin.", to: "t1", etki: function(d){ d.riza++; d.bagis = "yok"; } },
{ t: "Erdal Bey'in yanına oturur, kızını anlatmasını istersin.", to: "t1", etki: function(d){ d.sefkat++; d.bagis = "tam"; d.duru_anlatildi = true; } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Akşam", baslik: "Koridor", metin: [
P(S("r3A"), "Kuzey'i içeri alıp ablasının yanına götürdün. Kuzey önce yatağa yaklaşmadı; sonra ablasının mavi ojeli parmağına dokundu. “Soğuk değil,” dedi."),
P(S("r3B"), "Aileyi yalnız bıraktın. Kapının camından gördüğün son şey, bir yatağın üstüne eğilmiş üç sırttı."),
P(S("r3C"), "Bir tutam saç kesmeyi önerdin. Makası Erdal Bey aldı; elleri titremedi. Tutamı bir mendile sarıp cebine koydu."),
P(S("r3D"), "Ekip için hazırlıklara gittin: telefonlar, saatler, bir uçak. Koridorda yürürken arkandan Ayten Hanım'ın sesi geldi; kızına bir ninni söylüyordu."),
P(S("k3B"), "Meclisin karar vermesine izin verdin. Dede konuştu, amcalar konuştu, teyze ağladı. Karar bir saat sonra çıktı; bir oylama gibi değil, bir yorgunluk gibi."),
P(S("y3C"), "“Kararınız ne olursa olsun, şimdi buradayım,” dedin. Erdal Bey sana baktı. “Kararımız hayır,” dedi. “Siz yokken verdik.”"),
P(function(d){ return d.bagis === "tam"; }, "Karar verildi: tam bağış. Kalp, karaciğer, iki böbrek, iki kornea. Altı insan."),
P(function(d){ return d.bagis === "kalp"; }, "Karar verildi: yalnızca kalp. Bir insan. Dokuz yaşında."),
P(YOK, "Karar verildi: bağış yok. Duru bütün gidecek."),
P(VAR, "Akşam yedide nakil ekipleri hastanede. Ankara'dan bir kalp ekibi, İstanbul'dan bir karaciğer ekibi. Ameliyathanede ışıklar yanıyor."),
P(VAR, "Duru'yu yoğun bakımdan ameliyathaneye götürecekler. Ve hastanede bir gelenek var; senin başlattığın, birkaç yıldır yapılan: onur yürüyüşü. Yoğun bakımdan ameliyathaneye giden koridorun iki yanında hastane çalışanları sıra oluyor. Hemşireler, doktorlar, temizlik görevlileri, güvenlik. Sessizce. Sedye geçerken başlarını eğiyorlar."),
P(VAR, "Bu akşam koridorda kırk kişi var. Kimse onları çağırmadı; kendiliğinden gelmişler. Ayten Hanım ile Erdal Bey sedyenin iki yanında yürüyor. Kuzey teyzesinin elini tutuyor."),
P(YOK, "Akşam yedide Dr. Nihan solunum cihazını kapatmak için hazırlanıyor. Beyin ölümü gerçekleşmiş bir hastada bu bir tedavi kesilmesi değil; ölmüş bir bedenin makineden ayrılması. Yasal olarak kesin. Duygusal olarak hiçbir şey kesin değil."),
P(YOK, "Ayten Hanım ile Erdal Bey yatağın iki yanında. Kuzey kapıda. Dr. Nihan sana bakıyor: hazır mısınız? Aile hazır değil. Kimse hiçbir zaman hazır olmaz."),
"Bu meslekte yüzlerce akşam gördün. Her biri birbirine benzer ve hiçbiri aynı değildir."
], secenekler: [
{ t: function(d){ return VAR(d) ? "Sedyenin önünde yürürsün; yolu açarak." : "Cihaz kapatılırken ailenin yanında durursun."; }, to: "t1b", etki: { sefkat: 1 } },
{ t: function(d){ return VAR(d) ? "Koridordaki sıraya katılır, başını eğersin." : "Kuzey'i kapıdan alıp ailesinin yanına götürürsün."; }, to: "t1b", etki: function(d){ d.riza++; if(YOK(d)) d.kuzey_iceri = true; } },
{ t: function(d){ return VAR(d) ? "Ameliyathane kapısında Ayten Hanım'ın elini tutarsın." : "Ayten Hanım'ın elini tutarsın."; }, to: "t1b", etki: { sefkat: 1 } },
{ t: "Kendini işine verirsin: kâğıtlar, saatler, ekipler. Biri bunları yapmalı.", to: "t1b", etki: { adalet: 1 } }
]},

t1b: { saat: "Gece", baslik: "Son Saat", metin: [
P(function(d){ return d.son === "t1A" && VAR(d); }, "Sedyenin önünde kapıları açarak yürüdün. Arkanda tekerleklerin sesi, Ayten Hanım'ın ayak sesleri."),
P(function(d){ return d.son === "t1A" && YOK(d); }, "Cihaz kapatılırken ailenin yanında durdun. Monitördeki çizgi yavaşladı, sonra düzleşti. Ayten Hanım çizgiye değil, kızının yüzüne baktı."),
P(function(d){ return d.son === "t1B" && VAR(d); }, "Koridordaki sıraya katıldın: hemşireler, teknisyenler, temizlik görevlileri. Sedye geçerken herkes başını eğdi."),
P(function(d){ return d.son === "t1B" && YOK(d); }, "Kuzey'i ailesinin yanına götürdün. Annesinin eteğine yapıştı; ama gözlerini ablasından ayırmadı."),
P(function(d){ return d.son === "t1C" && VAR(d); }, "Ameliyathane kapısında Ayten Hanım'ın elini tuttun. Kapı kapandı; el bırakmadı."),
P(function(d){ return d.son === "t1C" && YOK(d); }, "Ayten Hanım'ın elini tuttun. Bir saat; ikiniz de saymadınız."),
P(S("t1D"), "Kendini işine verdin: kâğıtlar, saatler, ekipler. Biri bunları yapmalıydı. Saat on bire doğru bir an durup ellerine baktın."),
P(VAR, "Ameliyathanenin kapısı kapanıyor. Ayten Hanım kapının camına elini koyuyor. Erdal Bey onu geri çekmeye çalışıyor, çekemiyor; sonra kendi elini de cama koyuyor. İki el, bir camın üstünde."),
P(VAR, "İçeride saatler sürüyor. Önce kalp. Ankara ekibi onu çıkarıyor, buzlu bir sıvının içine, steril torbalara, mavi bir soğuk kutuya koyuyor. Kutunun üstüne bir etiket: “İnsan organı. Acil.” Saat dokuz kırk. Bir kalp, artık bir kutunun içinde, kendi bedeninin dışında, bir yolculuğa hazır."),
P(YOK, "Dr. Nihan cihazı kapatıyor. Göğüs bir kez daha kalkıyor, sonra iniyor, sonra kalkmıyor. Monitörde kalp birkaç dakika daha atıyor; yavaşlayarak, düzensizleşerek. Sonra düz bir çizgi. Bir beden, beyninin saatler önce bıraktığı yeri, şimdi bırakıyor."),
P(YOK, "Ayten Hanım çığlık atmıyor. Kızının yüzünü iki eliyle tutuyor ve bir şarkı mırıldanıyor; bir ninni belki, belki bir okul şarkısı. Erdal Bey diz çökmüş, mavi ojeli küçük parmağı tutuyor."),
"Saat gece yarısına yaklaşıyor. Hastane yarı karanlık. Koridorlarda temizlik arabalarının tekerlek sesi.",
"Senin işin bitmedi. Bu gecenin bir sonraki adımı var ve o adımı nerede atacağını sen seçeceksin."
], secenekler: [
{ t: function(d){ return VAR(d) && d.bagis !== "yok" ? "Kalp ekibiyle birlikte Ankara'ya uçarsın." : "Aileyi evlerine kadar götürürsün."; }, to: "t2", etki: function(d){ if(VAR(d)) d.ucak = true; else d.eve_birakti = true; } },
{ t: "Duru'nun bedeniyle kalırsın. Morga kadar, son ana kadar.", to: "t2", etki: { morg: true, sefkat: 1 } },
{ t: "Aile odasında Ayten Hanım ve Erdal Bey'le oturursun.", to: "t2", etki: { sefkat: 1 } },
{ t: "Ofisine dönüp raporları tamamlarsın. Sabaha bir başka çağrı gelebilir.", to: "t2", etki: { adalet: 1 } }
]},

t2: { saat: "Gece", baslik: "Yol", metin: [
P(S("t1bC"), "Aile odasında Ayten Hanım ve Erdal Bey'le oturdun. Kimse konuşmadı. Saat birde Erdal Bey kalkıp pencereyi açtı; körfezden soğuk bir rüzgâr."),
P(S("t1bD"), "Ofisine dönüp raporları tamamladın. Duru'nun adını on bir forma yazdın. On ikincide kalemin durdu."),
P(function(d){ return d.ucak; }, "Küçük bir ambulans uçağı. İçeride iki cerrah, bir perfüzyonist, sen ve mavi bir soğuk kutu. Kutu ayaklarının dibinde, kemerle bağlı. Bir buçuk saatlik uçuş. Pencereden İzmir'in ışıkları uzaklaşıyor."),
P(function(d){ return d.ucak; }, "Cerrahlardan biri uyuyor; alışmış. Öbürü kahve içiyor. Sen kutuya bakıyorsun. İçinde, dört derecelik sıvının içinde, on yedi yıl atmış bir kalp, dokuz yaşında bir göğsü bekliyor. Bir kutu ve bir uçak, bir hayatı bir başkasına taşıyor."),
P(function(d){ return d.morg; }, "Ameliyattan sonra Duru'nun bedeni morga iniyor. Seninle birlikte. Asansörde, sedyenin yanında, ikiniz yalnızsınız. Bedeni bir örtünün altında. Kesik dikilmiş, özenle; cerrahlar bunu her zaman özenle yapar."),
P(function(d){ return d.morg; }, "Morgda görevli yaşlı bir adam; Hüseyin Efendi. Seni tanıyor. “Yine sen,” diyor, kızmadan. “Hep gelirsin.” Örtüyü düzeltiyor. Duru'nun yüzünü açıyor, saçlarını tarıyor. “Babası yıkayacak, değil mi?” diyor. “Hazırlayalım.”"),
P(function(d){ return d.eve_birakti; }, "Ayten Hanım, Erdal Bey ve Kuzey arabanın arka koltuğunda. Kimse konuşmuyor. İzmir'in gece sokakları. Bir yerde Kuzey uyuyor; başı annesinin omzunda."),
P(function(d){ return !d.ucak && !d.morg && !d.eve_birakti; }, "Gece uzun. Sabaha karşı bir saat uyukluyorsun; sandalyende, ofisinde, ya da aile odasının köşesinde. Uyandığında güneş körfezin üstünde."),
"Gece bitiyor. Ama bu gecenin bir devamı olacak; haftalar sonra, aylar sonra."
], secenekler: [
{ t: function(d){ return d.ucak ? "Ankara'da, ameliyathanenin önünde, çocuğun annesini uzaktan görürsün. Yaklaşmazsın." : "Sabah Ayten Hanım'a bir mesaj atarsın."; }, to: "y_son", etki: function(d){ d.sefkat++; if(d.ucak) d.anneyi_gordu = true; } },
{ t: function(d){ return d.ucak ? "Kalbin yeni göğsünde ilk kez attığı anı, ameliyathanenin camından izlersin." : "Hüseyin Efendi'ye ya da kendine bir çay koyarsın."; }, to: "y_son", etki: function(d){ if(d.ucak) d.ilk_atis = true; } },
{ t: "Eve dönersin. Karına sarılırsın. Hiçbir şey anlatmadan.", to: "t3", etki: { riza: 1 } },
{ t: "Hiçbir yere gitmezsin. Bir sonraki çağrıyı beklersin.", to: "t3", etki: { adalet: 1 } }
]},

y_son: { saat: "Sabah", baslik: "Atış", metin: [
P(function(d){ return d.son === "t2A" && d.ucak; }, "Ameliyathanenin önünde bir kadın gördün: yorgun, başörtülü, elinde bir tespih. Çocuğun annesi. Yaklaşmadın."),
P(function(d){ return d.son === "t2A" && !d.ucak; }, "Sabah Ayten Hanım'a bir mesaj attın: “Yanınızdayım.” Cevap gelmedi; gelmesi gerekmiyordu."),
P(function(d){ return d.son === "t2B" && !d.ucak; }, "Hüseyin Efendi'ye bir çay koydun, o da sana. Gece bekçisiyle koordinatör, sabaha karşı, konuşmadan."),
P(function(d){ return d.anneyi_gordu; }, "Ankara. Bir çocuk hastanesinin ameliyathane koridoru. Bir köşede bir kadın oturuyor; otuzlarında, başörtüsü dağılmış, elleri dua eder gibi birleşmiş. Yanında bir adam ayakta, sürekli saatine bakıyor."),
P(function(d){ return d.anneyi_gordu; }, "Onlar seni tanımıyor. Tanımayacaklar. Sen yalnızca bir koordinatörsün, mavi bir kutuyla gelmiş, şimdi koridorda bekleyen biri. Kadın bir an sana bakıyor, gülümsüyor; yabancılara gülümseyen biri gibi. Bilmiyor. Bilmemesi gerekiyor."),
P(function(d){ return d.ilk_atis; }, "Ameliyathanenin gözlem camından izliyorsun. Saatlerce. Sonra o an: cerrah kelepçeyi açıyor, kan yeni kalbe doluyor. Bir an hiçbir şey. Sonra bir titreşim. Sonra bir atış. Sonra bir başka. Ekranda yeşil bir çizgi; bir kez daha, bir başka göğüste, on yedi yaşında bir kalp atmaya başlıyor."),
P(function(d){ return !d.ucak; }, "Sabah. Bir çay bardağı elinde. Pencereden körfez. Bir yerde, Ankara'da ya da hiçbir yerde, bu sabah bir şey başladı ya da bitti."),
P(function(d){ return !d.ucak && VAR(d); }, "Telefonuna merkezden bir mesaj geliyor: “Kalp nakli başarılı. Alıcı stabil.” Ayten Hanım'a iletemezsin; kural. Ama bir gün iletebilirsin, belki, isimsiz bir mektupla."),
"Bir bedenin bittiği yerde bir başkasının devam ettiği bir an. Bunu hiçbir zaman tam olarak anlamayacaksın; bilimini biliyorsun, anlamını bilmiyorsun.",
"Bu anın tanığı olmak, bu mesleğin en ağır armağanı."
], secenekler: [
{ t: "Gözlerin doluyor; kimse görmesin diye arkanı dönersin.", to: "t3", etki: { sefkat: 1 } },
{ t: "Bir kâğıda saati yazarsın. Ayten Hanım'a bir gün söylemek için.", to: "t3", etki: { saat_yazdi: true } },
{ t: "Bir şey hissetmediğini fark edersin. Yorgunluk mu, yıllar mı?", to: "t3", etki: { yorgun: true } },
{ t: "Dua edersin; kime ettiğini bilmeden.", to: "t3", etki: { riza: 1 } }
]},

t3: { saat: "Üç ay sonra", baslik: "Mektup", metin: [
P(S("t2C"), "Eve dönüp karına sarıldın. Bir şey anlatmadın; o da sormadı. Yedi yıldır sormuyordu."),
P(S("t2D"), "Hiçbir yere gitmedin; bir sonraki çağrıyı bekledin. Çağrı sabah altıda geldi: başka bir şehir, başka bir aile."),
P(S("y_sonA"), "Gözlerin doldu; arkanı döndün. Yanından geçen bir hemşire omzuna bir an dokundu."),
P(S("y_sonB"), "Saati bir kâğıda yazdın. Kâğıdı cüzdanına, kendi bağışçı kartının yanına koydun."),
P(S("y_sonC"), "Bir şey hissetmediğini fark ettin. Yedi yıl mı, yorgunluk mu? Bu fark ediş, hissetmemekten daha çok korkuttu."),
P(S("y_sonD"), "Dua ettin; kime ettiğini bilmeden. Bir kalp için, bir kız için, kendin için."),
P(VAR, "Üç ay sonra ofisine bir zarf geliyor. Ulusal merkezin aracılığıyla, isimsiz. İçinde bir kâğıt ve çocuk el yazısıyla bir resim: bir kalp, kanatları var, uçuyor. Altında büyük harflerle: “TEŞEKKÜRLER.”"),
P(VAR, "Kâğıtta bir annenin yazısı: “Sayın Bağışçı Ailesi. Oğlum on dört ay bir makineye bağlı yaşadı. Şimdi okula gidiyor. Geçen hafta bisiklete bindi. Her gece kulağımı göğsüne dayıyorum ve bir kalbin atışını dinliyorum. O kalbin bir adı vardı, biliyorum. Bilmiyorum ama biliyorum. Her gece ona teşekkür ediyorum.”"),
P(YOK, "Üç ay sonra Ayten Hanım seni arıyor. Sesi sakin. “Barış Bey, sizi rahatsız ettim. Bir şey sormak istedim. O çocuk, Ankara'daki... Bir kalp buldu mu?”"),
P(YOK, "Sistemde bakıyorsun; bakmaman gerekirken. Çocuk iki hafta sonra bir başka donörden kalp almış. Yaşıyor. Bunu Ayten Hanım'a söyleyebilir misin?"),
P(function(d){ return d.liste === "vip" && d.bagis === "tam"; }, "Aynı hafta bir haber: “Milletvekilinin babası başarılı karaciğer nakli ile sağlığına kavuştu.” Fotoğrafta bir hastane koridoru, gülümseyen bir aile, bir başhekim yardımcısı. Liman işçisinin adı hiçbir haberde yok. Sistemde bakıyorsun: hâlâ bekliyor. Duru'nun karaciğeri, onun değil, bir başkasının bedeninde."),
P(function(d){ return d.liste === "kural" && d.bagis === "tam"; }, "Aynı hafta bir haber: “Milletvekilinin babası başarılı karaciğer nakli ile sağlığına kavuştu.” Senin uyguladığın kural. Senin imzaladığın kâğıt. Her şey yasal, her şey yerinde. Liman işçisi bir ay sonra ayıklığının iki yılını doldurdu; listeye geri döndü. Hâlâ bekliyor."),
P(function(d){ return d.liste === "adil" && d.bagis === "tam"; }, "Merkezden kısa bir bilgi: karaciğer, listenin birinci sırasındaki alıcıya nakledildi. Elli sekiz yaşında, emekli liman işçisi. İki yıllık ayıklığının iki yıl bir ayına girmek üzere. Duru'nun karaciğeri bir adamın, kendi kendine verdiği bir sözün devamı oldu."),
"Bu meslekte bir armağanın nereye gittiğini çoğu zaman bilmezsin. Bilmemen gerekir. Ama bazen bir zarf gelir, bazen bir haber, bazen bir telefon."
], secenekler: [
{ t: function(d){ return VAR(d) ? "Mektubu merkez aracılığıyla Ayten Hanım'a iletirsin." : "Ayten Hanım'a çocuğun yaşadığını söylersin."; }, to: "bl_kuzey", etki: function(d){ d.sefkat++; d.iletti = true; } },
{ t: function(d){ return VAR(d) ? "Mektubu bir süre masanda tutarsın, kendi için okursun, sonra iletirsin." : "“Bilmiyorum,” dersin. Kural bu."; }, to: "t4", etki: function(d){ if(VAR(d)){ d.iletti = true; } else { d.adalet++; } } },
{ t: function(d){ return d.liste === "vip" || d.liste === "kural" ? "Haberi kesip Sinan'ın masasına bırakırsın." : "Mektubun bir fotokopisini çekip kendine saklarsın."; }, to: "t4", etki: function(d){ if(d.liste === "vip" || d.liste === "kural"){ d.adalet++; d.haber_birakti = true; } else { d.kopya = true; d.iletti = true; } } },
{ t: "Bir şey yapmazsın. Bu da işin bir parçası.", to: "bl_esra", etki: { yorgun: true } }
]},

t4: { saat: "Bir yıl sonra", baslik: "Yıl Dönümü", metin: [
P(function(d){ return d.son === "t3B" && VAR(d); }, "Mektubu bir hafta masanda tuttun, her akşam okudun. Sonra ilettin."),
P(function(d){ return d.son === "t3B" && YOK(d); }, "“Bilmiyorum,” demiştin. Kural buydu. Ayten Hanım başını salladı; inanmadı mı, inanmak mı istemedi, anlamadın."),
P(function(d){ return d.son === "t3C" && (d.liste === "vip" || d.liste === "kural"); }, "Haberi kesip Sinan'ın masasına bıraktın. Ertesi gün haber masada yoktu; Sinan da sana bakmıyordu."),
P(function(d){ return d.son === "t3C" && !(d.liste === "vip" || d.liste === "kural"); }, "Mektubun fotokopisini çekip bir dosyaya koydun; kimsenin açmayacağı bir dosyaya."),
P(S("bl_esraB"), "“Ben iyiyim Esra,” dedin. Esra çayını bitirip kalktı. Kapıda döndü: “Ben de öyle diyordum.”"),
P(S("bl_esraC"), "Esra'ya Ayten Hanım'ın sorusunu anlattın: “Doğru mu yaptık?” Esra uzun süre sustu. “O soru hiç gitmiyor,” dedi. “Sadece yer değiştiriyor.”"),
P(function(d){ return d.kuzey_cevap; }, "Kuzey jüriye döndü. “Kalp aynı kalp,” dedi. “Ama atışı farklı olur. Yeni bedenin hızına uyar.” Sonra bir saniye durdu. “Bence kalp kimin olduğunu bilmez. Ama kimin içinde olduğunu bilir.” Jüri not aldı. Sen not almadın; ezberledin."),
P(function(d){ return d.neden_sordu; }, "Fuardan sonra Kuzey'e sordun. “Ablam hep beni korurdu,” dedi. “Şimdi ben onun kalbini korumak istiyorum. Nerede olduğunu bilmesem de. Nasıl çalıştığını bilirsem, onu biraz korumuş olurum.”"),
P(function(d){ return d.sinir; }, "Jüri üyesi dinledi, not aldı. Kuzey sana baktı; bir an kırılmış gibi. Sonra yüzü değişti. “Hatırlamıyor,” dedi. “Ama atmaya devam ediyor. Bu daha güzel değil mi?”"),
P(function(d){ return d.psikolog; }, "Psikoloğun adını aldın. Bir hafta sonra ilk seansa gittin. Kırk dakika konuştun ve yedi yılın ilk kez kelimelere döküldüğünü gördün."),
P(function(d){ return d.yuksek_sesle; }, "Mektubu yüksek sesle okudun. “Her gece kulağımı göğsüne dayıyorum.” Bu cümlede sesin kırıldı. Esra elini tuttu. Kanal bir an tıkandı; ve ilk kez, bir haftadır, bir şey hissettin."),
P(function(d){ return d.izin; }, "Bir hafta izin aldın. Kordon'da yürüdün, denize baktın, hiç telefon açmadın. Yedinci gün bir çağrı geldi; açmadın. Esra açtı."),
"Bir yıl geçti. Bir ekim akşamı. Ayten Hanım seni arıyor ve buluşmak istiyor. Kordon'da, denize bakan bir bankta.",
"Zayıflamış. Saçlarına ak düşmüş. Ama yüzünde bir sakinlik var; ilk gece hiç olmayan.",
P(function(d){ return d.iletti && VAR(d); }, "Çantasından bir zarf çıkarıyor. Mektup. Bisiklet resmi. “Her gece okuyorum,” diyor. “Erdal da okuyor. Ağlıyor. İlk kez ağlıyor.”"),
P(YOK, "“Erdal hâlâ konuşmuyor bundan,” diyor. “Ama geçen hafta kendi ehliyetinin arkasına bir şey yazdı. Organ bağışçısıdır. Bana göstermedi. Cüzdanını yıkarken buldum.”"),
"Kuzey on üç yaşında olmuş, diyor. Fen olimpiyatlarına hazırlanıyor. Bir proje yapmış: kalbin nasıl çalıştığı. Öğretmeni sormuş neden bu konu; Kuzey cevap vermemiş.",
"Sonra Ayten Hanım sana dönüyor. Bütün yıl boyunca bu cümleyi kurmuş gibi.",
P(VAR, "“Barış Bey. Onu görmek istiyorum. O çocuğu. Bir kez. Konuşmasam bile. Uzaktan. Ya da... göğsünü dinlemek. Bir doktor steteskobu ile. Duru'nun kalbinin attığını duymak istiyorum. Bir kez. Sonra bir daha istemem.”"),
P(YOK, "“Barış Bey. Doğru mu yaptık? Bütün gönderdik. Erdal'ın istediği gibi. Ama her gece o çocuğu düşünüyorum. Biri ona kalp verdi; biz vermedik. Doğru mu yaptık?”"),
"Kural açık. Anonimlik. Ama karşında bir anne var ve bir yıl önce bir gece, bu kadının kızının kalbinin bir kutuya konduğu anı sen gördün.",
"Ayten Hanım cevabı bekliyor. Ne söylersen söyle, bu bankta söylediğin şeyi bir ömür boyu taşıyacak."
], secenekler: [
{ t: function(d){ return VAR(d) ? "Merkezle ve alıcı ailesiyle görüşüp, iki tarafın da onayıyla bir buluşma ayarlamaya çalışacağını söylersin." : "“Doğru yaptınız. Hayır demek de bir armağandı; kızınıza,” dersin."; }, to: "bs", etki: function(d){ if(VAR(d)) d.bulustur = true; else d.sefkat++; } },
{ t: function(d){ return VAR(d) ? "“Yapamam Ayten Hanım. Bu kural sizi de onları da koruyor,” dersin." : "“Bilmiyorum,” dersin. “Ama hangi kararı verseniz, bu soruyu soracaktınız.”"; }, to: "bs", etki: { adalet: 1 } },
{ t: function(d){ return VAR(d) ? "Ona Duru'nun kalbinin ilk kez başka bir göğüste attığı saati söylersin." : "Ona Duru'nun son saatini söylersin; cihazın kapandığı dakikayı."; }, to: "bs", etki: { sefkat: 1, saat_soyledi: true } },
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
son_armagan: { son: true, baslik: "Armağan", metin: [
P(S("t4A"), "“Bir buluşma ayarlamaya çalışacağım,” demiştin. Ayten Hanım'ın gözleri dolmuştu; umutla mı korkuyla mı, anlamadın."),
P(S("t4B"), "“Yapamam Ayten Hanım,” demiştin. “Kural sizi de onları da koruyor.” Başını sallamıştı; anladığı için değil, yorulduğu için."),
P(S("t4C"), "Kalbin ilk kez başka bir göğüste attığı saati söylemiştin. Ayten Hanım saati telefonuna yazmıştı."),
"Duru'nun kalbi Ankara'da, dokuz yaşında bir çocuğun göğsünde atıyor.",
P(function(d){ return d.bagis === "tam"; }, "Karaciğeri İzmir'de, bir liman işçisinin bedeninde. Böbrekleri iki diyaliz hastasında; biri bir ev hanımı, biri bir üniversite öğrencisi. Korneaları iki insanın gözünde; biri bir saatçi, biri adını hiç öğrenmeyeceğin biri."),
"Bir armağan, karşılığı beklenmeden verilen şeydir. Ama bir organ bağışı bir armağandan fazlası: verenin artık hiçbir şeyi olmadığı bir anda, hiçbir şeyi olmayan birine verilen her şey. Ve alan, kimden aldığını hiç bilmeyecek. Veren, kime verdiğini hiç bilmeyecek.",
"Sen ikisini de biliyorsun. Bu bilgi, bu mesleğin en ağır, en sessiz yükü.",
"Ayten Hanım her yıl bir mektup yazıyor; merkez aracılığıyla. Her yıl bir cevap geliyor. İsimsiz. Bir resim, bir karne fotokopisi, bir cümle: “Bu yıl yüzmeyi öğrendi.”",
"Erdal Bey bir gün otobüsünü durdurdu; bir durakta, bir okulun önünde. Kapıyı açtı, yolcular indi, bindi. Bir çocuk, dokuz on yaşlarında, koşarak bindi, nefes nefese. Erdal Bey onu bir süre aynadan izledi. Hiçbir sebebi yoktu. Ama izledi.",
"Bir kalp hangi göğüste atarsa atsın, kimin olduğunu sormaz. Atmaya devam eder. Belki de armağan dediğimiz şey budur: sormadan devam etmek."
]},

son_liste: { son: true, baslik: "Kırık Liste", metin: [
P(S("t4A"), "“Bir buluşma ayarlamaya çalışacağım,” demiştin. Ayten Hanım'ın gözleri dolmuştu; umutla mı korkuyla mı, anlamadın."),
P(S("t4B"), "“Yapamam Ayten Hanım,” demiştin. “Kural sizi de onları da koruyor.” Başını sallamıştı; anladığı için değil, yorulduğu için."),
P(S("t4C"), "Kalbin ilk kez başka bir göğüste attığı saati söylemiştin. Ayten Hanım saati telefonuna yazmıştı."),
"Duru'nun kalbi doğru yere gitti. Böbrekleri, korneaları doğru yere gitti. Ama karaciğeri, bir milletvekilinin babasının bedeninde.",
P(function(d){ return d.liste === "kural"; }, "Sen kuralı uyguladın. Bir ay eksik bir ayıklık belgesi. Her şey yasal. Ama yasanın içinden bir baskı geçti ve sen o baskının geçtiği kapıyı, kuralın elinle, açık tuttun. İmzaladığın kâğıt dosyada duruyor; nedeniyle birlikte. Bir gün biri okursa, belki anlar."),
P(function(d){ return d.liste === "vip"; }, "Sen karar vermedin; başkasına bıraktın. “Bakarım” dedin, ya da “Merkez verir.” Bir kararı başkasına bırakmak, o kararın kimin elinde olduğunu değiştirmiyor; yalnızca senin elinde olmadığını söylemene izin veriyor."),
"Liman işçisi bekliyor. Bir yıl sonra hâlâ bekliyor. Ayıklığının üçüncü yılında.",
"Ayten Hanım bunu bilmiyor. Bilmesi gerekmiyor. Kızının karaciğerinin kimde olduğunu hiç öğrenmeyecek. Ama sen biliyorsun; ve her ay merkeze giden raporlarda bir satır yazıyorsun, kimsenin okumadığı bir satır: “Alıcı seçim sürecinde dış müdahale şüphesi.”",
P(function(d){ return d.haber_birakti; }, "Haberi Sinan'ın masasına bıraktın. Ertesi gün haber gitmişti; masada yerine bir çiçek vardı. Sinan seni koridorda gördüğünde gülümsedi. Sözleşmen yenilendi. Neden, bilmiyorsun."),
"Bir sistem, adil olmak için kurulur. Ama sistemleri insanlar işletir ve insanlar, telefonlar, dostluklar, sözleşmeler, “önemli aileler” arasında yaşar. Bir armağan, ne kadar saf verilirse verilsin, bu dünyanın içinden geçerek yerine ulaşır.",
"Duru on yedi yaşındaydı. Kan vermeye gitmişti, yaşı tutmadığı için kızmıştı. Yararlı bir şey yapmak istiyordu. Yaptı. Ama yararının bir kısmı, kimsenin seçmediği bir yöne gitti."
]},

son_butun: { son: true, baslik: "Bütün", metin: [
P(S("t4A"), "“Hayır demek de bir armağandı; kızınıza,” demiştin. Ayten Hanım denize bakarak uzun süre ağlamıştı."),
P(S("t4B"), "“Hangi kararı verseniz bu soruyu soracaktınız,” demiştin. Ayten Hanım bir yıldır ilk kez gülümsemişti."),
P(S("t4C"), "Ona son saati söylemiştin. Ayten Hanım bilmiyordu; o an saate değil, kızının yüzüne bakıyordu."),
"Duru bütün gömüldü. Erdal Bey kızını kendi elleriyle yıkadı; babasını nasıl yıkadıysa. Mavi ojeyi silmedi. Kefene sararken o küçük parmak dışarıda kaldı; sonra onu da örttü.",
"Ankara'daki çocuk iki hafta sonra bir başka kalp aldı. Bir başka gecede, bir başka şehirde, bir başka ailenin “evet”inden. Bunu Ayten Hanım'a söyledin ya da söylemedin; ama bir gün, bir şekilde, bilecek.",
"Bu meslekte “hayır”ı bir başarısızlık olarak görmek kolay. Sistem öyle görür: kaybedilmiş bir donör, kaçırılmış bir fırsat, listede bekleyen insanlar. Ama sen bir “hayır”ın ardında ne olduğunu gördün: bir babanın kendi babasına sadakati, bir bedenin bütünlüğüne duyulan saygı, bir korku, bir inanç, bir sevgi.",
"Rıza, yalnızca “evet” diyebilmek değildir. “Hayır” diyebilmektir. Ve bir “hayır”a gerçekten saygı duymak, onu ikna edilmesi gereken bir engel olarak değil, bir insanın son sözü olarak duymaktır.",
P(function(d){ return d.israr_kismi; }, "Ama biliyorsun: o “hayır”ı sen büyüttün. Bir kalp verilecekti; daha fazlasını istedin ve hepsi gitti. Bunu kimseye söylemedin. Ama her gece, bir yerde, dokuz yaşında bir çocuğun on dördüncü ayını düşündün."),
"Erdal Bey'in ehliyetinin arkasında artık bir yazı var: Organ bağışçısıdır. Kızını vermedi. Kendini veriyor. Belki de bir babanın yasının en sessiz biçimi bu."
]},

son_kalp: { son: true, baslik: "Kalp Sesi", metin: [
P(S("t4A"), "“Bir buluşma ayarlamaya çalışacağım,” demiştin. Ayten Hanım'ın gözleri dolmuştu; umutla mı korkuyla mı, anlamadın."),
P(S("t4B"), "“Yapamam Ayten Hanım,” demiştin. “Kural sizi de onları da koruyor.” Başını sallamıştı; anladığı için değil, yorulduğu için."),
P(S("t4C"), "Kalbin ilk kez başka bir göğüste attığı saati söylemiştin. Ayten Hanım saati telefonuna yazmıştı."),
"Aylar süren yazışmalar. Merkez, iki aile, psikologlar, hukukçular. Kural esnemedi; yalnızca iki ailenin kendi özgür isteğiyle birbirlerini bulmasına bir kapı aralandı.",
"Bir bahar sabahı Ankara'da bir parkta. Ayten Hanım, Erdal Bey, Kuzey. Ve karşılarında bir kadın, bir adam ve on yaşında bir çocuk. Çocuğun adı Yusuf. Göğsünde, gömleğinin altında, uzun bir yara izi.",
"Kimse ne söyleyeceğini bilmiyor. Uzun bir sessizlik. Sonra Yusuf, bir çocuğun cesaretiyle, Ayten Hanım'ın önüne geliyor.",
"“Dinlemek ister misiniz?” diyor.",
"Steteskobu sen getirdin. Ayten Hanım'a veriyorsun. Kulaklarına takıyor. Diz çöküyor. Çocuğun göğsüne koyuyor.",
"Bir dakika. İki dakika. Ayten Hanım'ın gözleri kapalı. Yüzünde hiçbir şey kıpırdamıyor. Sonra gözyaşları; sessiz, durmadan.",
"Sonra steteskobu Erdal Bey'e uzatıyor. Erdal Bey önce istemiyor. Sonra alıyor. Diz çöküyor. Dinliyor.",
"Otuz yıl otobüs kullanmış bir adam, bir çocuğun göğsünde kızının kalbini dinliyor. Bir tıp kitabı bunun ne olduğunu açıklayamaz. Bir kalp sadece bir pompadır; Kuzey öyle söylemişti. Ama bu parkta, bu sabah, kimse buna inanmıyor.",
"Kuzey en son dinliyor. Bitince steteskobu sana veriyor. “Ablamın kalbi biraz hızlı atıyor,” diyor. “Hep hızlıydı zaten. Hep acelesi vardı.”"
]},

son_koordinator: { son: true, baslik: "Koordinatör", metin: [
P(S("t4D"), "“Ben bu işi bırakıyorum,” demiştin. Ayten Hanım şaşırmamıştı. “Bırakın,” demişti. “Bir yıl önce de yorgundunuz.”"),
"İstifa dilekçeni yazdın. Yedi yıl. Kaç aile, kaç gece, kaç kalp, kaç “hayır”, kaç “evet”. Saymadın. Saymayı bıraktığın gün, bu işi bırakman gerektiğini biliyordun; bıraktın.",
"Esra yerine geçti. Veda ederken sana bir şey sordu: “Neyi en çok özleyeceksin?” Düşündün. “Onur yürüyüşünü,” dedin. “Koridorun iki yanında sıralanan insanları. Kimse çağırmadan gelen.”",
P(function(d){ return d.liste === "vip" || d.liste === "kural"; }, "Ve bir şey daha var, kimseye söylemediğin: listeyi. Bir sistemin, bir telefonla, bir imzayla nasıl eğilebildiğini gördün. Bunu düzeltemedin. Belki bu yüzden gidiyorsun."),
"Şimdi bir aile hekimliğinde hemşiresin. Tansiyon ölçüyorsun, aşı yapıyorsun, yaşlılarla sohbet ediyorsun. Kimse sana gece ikide telefon etmiyor.",
"Ama bazı geceler uyanıyorsun; tam ikide. Telefon çalmıyor. Yine de uyanıyorsun. Karın uyumuyor; alışmamış bu sefer.",
"Bir meslek, bir insanın içinden kolay çıkmaz. Özellikle de ölümü ve yaşamı aynı kutuya koyan bir meslek. Yıllarca bir bedenin bittiği yerde bir başkasının başladığını gördün. Ve bu görüş, bir gün, kendi bedeninin sınırlarını da başka türlü görmeni sağladı.",
"Cüzdanında bir kart var. Kendi kartın. Organ bağışçısıdır. Yedi yıl önce, bu işe başladığın gün imzalamıştın. Şimdi bazen çıkarıp bakıyorsun. Bir gün biri, bir gece ikide, senin için de bir telefon alacak."
]}

},

ayna: function(d){
  var out = [];
  var a = d.adalet, b = d.sefkat, c = d.riza;
  if(a >= b && a >= c) out.push("Bu gece en çok adalete yaslandın: kurallara, listeye, sistemin doğru işlemesine. Bir armağanın doğru yere gitmesi için savaştın. Adalet soğuk bir erdemdir; ama soğuk bir kutunun içinde bir kalbi taşıyan da odur.");
  else if(b >= c) out.push("Bu gece en çok şefkate yaslandın: bir anneye, bir babaya, bir çocuğa. Onların yasının içinde durdun. Şefkat bu işin kalbidir; ama kalbin de bir yön bulması gerekir.");
  else out.push("Bu gece en çok rızaya yaslandın: ailenin kararına, onların zamanına, onların “hayır” deme hakkına. Rızaya saygı, bir insanı ikna edilecek bir engel değil, karar verecek bir özne olarak görmektir.");
  if(d.anonimlik) out.push("Bir kuralı çiğnedin: alıcının kim olduğunu anlattın. Bir aileyi bir çocukla yüz yüze getirdin. Bu bir yardım mıydı, bir baskı mı, ikisi birden mi?");
  if(d.liste === "vip") out.push("Listeyi korumak için yeterince direnmedin. Belki yapamazdın. Ama yapmadığını biliyorsun.");
  if(d.ihbar || d.resmi) out.push("Bir baskıyı kayda geçirdin. Bir sistemin içinde, sistemin kendisine karşı bir tanık oldun.");
  if(d.israr_kismi) out.push("Bir kalp verilmişken daha fazlasını istedin. Bazen bir “evet”i büyütmeye çalışmak, onu bir “hayır”a çevirir.");
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
