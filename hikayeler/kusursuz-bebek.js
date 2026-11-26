(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "kusursuz-bebek",
baslik: "Kusursuz Bebek",
dunya: "Hayali dünya · 2041",
kategoriler: ["Sağlık ve Tıp", "Toplum ve Adalet", "Kimlik ve Beden"],
giris: "2041 yılındayız. Embriyolar rutin olarak taranıyor, genler düzeltiliyor, “ağır engellilik” taşıyan doğumlar yasayla önleniyor. Sen bir genetik danışmansın. Kardeşin ise artık neredeyse hiç doğmayan bir durumla, Down sendromuyla yaşayan bir simitçi. Bir gün karşına, kendileri gibi işitme engelli bir çocuk isteyen bir çift oturuyor. Bu hikâye, bir toplumun “kusur” dediği şeyle bir ailenin “biz” dediği şeyi anlatıyor.",
kavramlar: ["Engellilik ve değer", "İyileştirme ve doğallık", "Ebeveyn sevgisi", "Normalin tanımı"],
ozet: "2041 yılı. Embriyolar taranıyor, genler düzeltiliyor, “kusurlu” doğumlar yasayla önleniyor. Sen bir genetik danışmansın ve kardeşin Down sendromlu. Bugün karşına, kendileri gibi işitme engelli bir çocuk isteyen bir çift oturuyor.",
baslangic: "a1",
durum: { cesitlilik: 0, yasa: 0, sefkat: 0 },

sahneler: {

a1: { saat: "Mart 2041", baslik: "Merkez", metin: [
"Ankara'da, Eskişehir yolunun üstünde camdan bir bina. Cephesindeki dev ekranda gülümseyen bir bebek var, altında da “Kusursuzluk bir haktır. Yeni Nesil Üreme ve Genetik Merkezi.” yazıyor. Ekranın bozuk pikselleri yüzünden bebeğin bir gözü üç gündür yeşil yeşil yanıp sönüyor.",
"Adın Aslı, otuz dokuz yaşındasın, genetik danışmansın. Masanda bir embriyo modeli, bir bilgisayar, bir de kardeşin Gökhan'ın fırınından gelmiş kâğıt bir poşette sabah sıcak simit duruyor. Poşetin üstüne keçeli kalemle “ABLAMA” yazmış, M'yi ters yazmış.",
"2039 tarihli Kalıtsal Hastalıkların Önlenmesi Kanunu'na göre tüp bebek tedavisinde bütün embriyolar taranıyor ve “ağır kalıtsal engellilik” taşıyanlar aktarılamıyor. Listede kırk yedi durum var, Down sendromu da doğuştan işitme kaybı da bu listede.",
"Kanun çıktığından beri Down sendromlu doğumlar yüzde ikiye inmiş. Gökhan o rakamın arka tarafında duruyor. Otuz beş yaşında ve Keçiören'in en iyi simitçisi.",
"Bugünkü ilk randevun Doruk ve Nehir Aydın'la. Dosyada “Çift işitme engellidir, Türk İşaret Dili tercümanı talep edilmiştir,” diye bir not var. Sekreter el yazısıyla bir not daha eklemiş: “Özel bir talepleri var.”",
"Simidin yarısını yiyip kalanını poşete geri koyuyorsun, susamlar klavyenin arasına dökülüyor. Kapı çalınıyor."
], secenekler: [
{ t: "Kapıyı kendin açıp elini uzatırsın.", to: "a2", etki: { sefkat: 1 } },
{ t: "“Özel talep” ne olabilir diye dosyayı bir kez daha okursun.", to: "a2", etki: { yasa: 1, dosya: true } },
{ t: "İşaret dilinde bildiğin tek kelimeyi, “merhaba”yı hatırlamaya çalışırsın.", to: "a2", etki: { cesitlilik: 1, merhaba: true } },
{ t: "Pencereden reklama, yanıp sönen o yeşil göze bakarsın.", to: "a2", etki: { reklam: true } }
]},

a2: { saat: "Mart 2041", baslik: "İşaret", metin: [
P(S("a1A"), "Kapıyı açıp elini uzattın. Doruk elini sıktı, Nehir bir an baktı, sonra o da sıktı. Arkalarında tercüman Pınar gülümsüyordu."),
P(S("a1B"), "Dosyayı yeniden okudun. “Özel talep: işitme durumu.” Başka bir şey yazmıyordu. Ne olabileceğini tahmin ettin ve yanılmış olmayı istedin."),
P(S("a1C"), "Kapıyı açınca elini kaldırıp merhaba dedin. Nehir gülümsedi, elini tutup parmaklarını doğru yere koydu. Daha oturmadan bir ders almıştın."),
P(S("a1D"), "Reklamdaki bebeğin gözü yanıp söndü. Altı yıldır bu reklamın altında çalışıyorsun. Bir keresinde arızayı bildirmek için bir form doldurmuştun ama kimse gelmemişti."),
"Doruk kırk yaşlarında, uzun boylu bir mimar. Nehir otuz altı yaşında, bir sağırlar okulunda öğretmen, tırnaklarında tebeşir tozu var. Pınar yanlarında, elleri hazır bekliyor.",
"Doruk işaret etmeye başlıyor, elleri hızlı ve keskin. Pınar çeviriyor:",
"“Biz sağırız, ikimiz de doğuştan. Annem, babam, dedem de sağırdı, dört kuşak. Bizim evde konuşulan dil işaret dili.”",
"Nehir ekliyor, onun elleri daha yavaş:",
"“Embriyolarımız taranacak ve bazıları sağır olacak, çünkü ikimiz de aynı geni taşıyoruz. Biz o embriyolardan birini istiyoruz. Sağır bir çocuk istiyoruz.”",
"Gözünü senden ayırmadan devam ediyor:",
"“Bizim için bu bir eksiklik değil, bir dil, bir aile. İşiten bir çocuk bizim evde yabancı olur.”"
], secenekler: [
{ t: "Kanunu açıklarsın, işitme kaybı listede, aktarım yasak.", to: "a3", etki: { yasa: 2, kanun: true } },
{ t: "Nehir'e çocukluğunu sorarsın.", to: "x_cocukluk", etki: { cesitlilik: 1 } },
{ t: "“Çocuğunuzun kendi geleceğini seçme hakkı ne olacak?” diye sorarsın.", to: "a3", etki: { yasa: 1, acik_gelecek: true } },
{ t: "Onlardan sana “aile” işaretini öğretmelerini istersin.", to: "x_isaret", etki: { cesitlilik: 1, sefkat: 1 } }
]},

x_cocukluk: { saat: "Mart 2041", baslik: "Bağlı Eller", metin: [
"Nehir bir süre sana bakıyor, sonra ellerini kucağına indiriyor, sonra anlatmaya başlıyor.",
"Pınar'ın sesi alçalıyor:",
"“Annemle babam işitiyordu. Doktor ‘sağır’ deyince annem iki yıl ağlamış. Beni konuşturmaya çalıştılar, bir okula verdiler. Orada işaret dili yasaktı. Ellerimizle konuşursak ellerimizi arkamızdan bağlarlardı, dudaktan okumamız gerekiyordu.”",
"Nehir bileklerini arkasında çaprazlayıp gösteriyor. Sonra ellerini yeniden öne getirip bir süre masanın üstünde düz tutuyor.",
"“On beş yaşında bir yaz kampında ilk kez sağır çocuklarla tanıştım. İlk akşam onların ellerini izledim, ikinci akşam ben de konuştum. Bir dilim olmuştu.”",
"Doruk karısının bileğini tam bağlandığı yerden tutuyor.",
"“Annem öldüğünde hâlâ birbirimizi anlamıyorduk. Beni sevdi, ben de onu sevdim ama otuz yıl aynı evde iki yabancı gibi yaşadık. Annemin son sözünü bir hemşireden öğrendim, kâğıda yazdı. Ben bunu çocuğuma yaşatmayacağım.”"
], secenekler: [
{ t: "“İşiten bir çocuk da sizin dilinizi öğrenebilir,” dersin.", to: "a3", etki: { yasa: 1, isiten_ogrenir: true } },
{ t: "“Anlıyorum,” dersin.", to: "a3", etki: { sefkat: 1 } },
{ t: "Kardeşin Gökhan'dan bahsedersin.", to: "a3", etki: { cesitlilik: 1, ozan_anlatti: true } },
{ t: "Bir şey demeden ellerini izlersin.", to: "a3", etki: { cesitlilik: 1 } }
]},

x_isaret: { saat: "Mart 2041", baslik: "Aile", metin: [
"Doruk gülümsüyor. Ellerini yavaşça, senin görebileceğin bir hızda kaldırıyor. Parmak uçlarını birleştirip çatıya benzer bir daire çiziyor.",
"“Aile,” diyor Pınar.",
"Sen de deniyorsun ama daire yamuk çıkıyor. Doruk ellerini tutup düzeltiyor. Avuçları kuru ve sıcak, işaret parmağında bir cetvel nasırı var. Bir daha deniyorsun, bu sefer daha iyi oluyor.",
"Nehir başka bir işaret gösteriyor, önce avucunu kalbinin üstüne koyup sonra dışarı doğru açıyor. “Sevgi.” Sonra iki parmağını gözlerinin önünden ileri uzatıyor. “Görmek.”",
"Pınar aracılığıyla soruyorsun: “Sessizlik için bir işaret var mı?”",
"Doruk'la Nehir bakışıyor. Doruk gülerek uzun uzun işaret ediyor. Pınar biraz bekleyip çeviriyor:",
"“Var ama kullanmayız. Siz bizi sessizlikte yaşıyor sanıyorsunuz. Bizim ev ellerle, yüzlerle, ışıkla, titreşimle dolu. Komşunun matkabı duvardan geçer, biz hissederiz, hatta ondan daha çok rahatsız oluruz.”"
], secenekler: [
{ t: "“Ama çocuğunuz işitirse ikisine birden sahip olabilir,” dersin.", to: "a3", etki: { yasa: 1, ikisi: true } },
{ t: "“Aile” işaretini bir kez daha, düzgünce yaparsın.", to: "a3", etki: { sefkat: 1, cesitlilik: 1 } },
{ t: "“Bunu kanunu yapanlara anlatmanız gerek,” dersin.", to: "a3", etki: { cesitlilik: 1, kanun_yapan: true } },
{ t: "Defterine bir not alırsın: sessizlik bir yokluk değil.", to: "a3", etki: { cesitlilik: 1 } }
]},

a3: { saat: "Mart 2041, akşam", baslik: "Gökhan", metin: [
P(S("x_cocuklukB"), "“Anlıyorum,” demiştin. Nehir başını eğmiş, sonra bir şey eklemişti: “Anlamak başka.” Pınar cümlenin devamını çevirmemişti, Nehir de devam etmemişti."),
P(S("x_cocuklukD"), "Bir şey dememiş, Nehir'in ellerini izlemiştin. Bir ara Nehir durup sana baktı, sonra devam etti, bakıldığını bilmek hoşuna gitmiş gibiydi."),
P(S("x_isaretA"), "“İkisine birden sahip olabilir,” demiştin. Doruk ellerini indirmişti. “Herkes bunu söylüyor,” dedi, “ama ikisinin arasında yaşayan kimse söylemiyor.”"),
P(S("x_isaretD"), "Not almıştın. Akşam fırına giderken defteri açıp o satıra baktın, altına Doruk'un matkap cümlesini de yazmıştın."),
P(S("a2A"), "Kanunu açıkladın, dokuzuncu madde, liste, aktarım yasağı. Doruk'un elleri durdu, Nehir başını eğdi. Sonra Doruk işaret etti: “Biliyoruz, bir yol arıyoruz. Bu yüzden buradayız.”"),
P(S("a2C"), "Pınar Doruk'un cevabını çevirdi: “Siz işiten bir çocuğa açık bir gelecek veriyorsunuz, biz sağır bir çocuğa bir aile veriyoruz. Hangisi daha açık?”"),
P(S("x_cocuklukA"), "“Öğrenebilir,” dedi Nehir. “Annem de öğrenebilirdi ama öğrenmedi.”"),
P(S("x_cocuklukC"), "Gökhan'ı anlattın. Nehir seni dinledi, sonra işaret etti: “Kardeşiniz bugün doğsaydı bu binada ne olurdu?” Pınar bunu çevirirken sesi kırıldı. Cevap veremedin."),
P(S("x_isaretB"), "“Aile” işaretini düzgünce yaptın. Doruk'la Nehir aynı anda güldüler. Bir yabancının elinde kendi dillerini görmenin onlara ne hissettirdiği yüzlerinden belliydi."),
P(S("x_isaretC"), "Doruk acı acı güldü. Pınar çevirdi: “Anlattık. Komisyonda bize beş dakika verdiler. Sonra bir sağlık ekonomisti yarım saat boyunca bir işitme engellinin topluma maliyetini anlattı.”"),
"Akşam Gökhan'ın fırınındasın. Keçiören'de bir köşe başında küçük bir dükkân, camında “SİMİT POĞAÇA AÇMA” yazıyor ama “AÇMA”nın Ç'si düşmüş. Gökhan un içinde simit diziyor. Her gün sabahın dördünde kalkıyor.",
"Seni görünce unlu elleriyle sarılıyor, montunun sırtında iki beyaz el izi kalıyor. “Abla! Bugün kaç tane kusursuz bebek yaptınız?”",
"Reklamı her gün otobüsten görüyor. Şaka yapıyor ama gözleri şaka yapmıyor.",
"“Bugün bir teyze geldi,” diyor. “Bana baktı, ‘Artık senin gibiler doğmuyor, değil mi?’ dedi. Ben de ‘Evet teyze, ben sonuncuyum,’ dedim. Güldü, iki simit aldı.”",
"Simitlere bakıyor, sonra sana dönüyor.",
"“Abla, ben kusurlu muyum?”"
], secenekler: [
{ t: "“Hayır Gökhan, sen kusursuz bir simitçisin,” dersin.", to: "a4", etki: { sefkat: 1, simit: true } },
{ t: "“Kimse kusursuz değil, ben de değilim,” dersin.", to: "a4", etki: { cesitlilik: 1 } },
{ t: "“Neden öyle düşünüyorsun?” diye sorarsın.", to: "a4", etki: { sefkat: 1, ozan_dusun: true } },
{ t: "Cevap veremez, ona sarılırsın.", to: "a4", etki: { sefkat: 1, sarildi: true } }
]},

a4: { saat: "Mart 2041", baslik: "Direktör", metin: [
P(S("a3A"), "Gökhan güldü. “Kusursuz simitçi, tabelaya yazalım,” dedi, sonra ciddileşti. “Ama abla, ben simitçi olmadan önce de vardım.”"),
P(S("a3B"), "Gökhan biraz düşündü. “Senin neyin kusurlu?” diye sordu. Cevap bulamadın. Gökhan güldü. “Bilmiyorsun bile. Ben en azından biliyorum.”"),
P(S("a3C"), "“Herkes öyle bakıyor,” dedi Gökhan. “Eskiden bakmazlardı. Eskiden benim gibi başkaları da vardı. Şimdi ben bir müze gibiyim.” Bu kelimeyi nereden bulduğunu bilmiyorsun, belki geçen ay okul gezisiyle gelen çocuklardan duymuştu."),
P(S("a3D"), "Ona sarıldın, Gökhan'ın unlu kolları sırtındaydı. “Tamam abla, ağlama,” dedi, “simitler soğuyacak.”"),
"Ertesi sabah direktör Dr. Bora Ersoy seni odasına çağırıyor. Elli yaşında, ayağında spor ayakkabılar, masasında bir sıkma topu var, konuşurken topu sıkıyor.",
"“Aslı, rakamlar harika. Optimum Paket bu çeyrekte yüzde kırk arttı. Sen en iyi danışmanlarımızdan birisin ama paket satışların düşük. Neden?”",
"Optimum Paket, listede olmayan özelliklerin seçilmesi ve düzenlenmesi demek. Boy, kas yapısı, hastalık riskleri, bir de “bilişsel potansiyel puanı.” Yasal ama pahalı. Her çifte sunman gerekiyor, sen de sunuyorsun ama ısrar etmiyorsun.",
"Sonra sesini alçaltıyor. “Aydın çifti. Duydum, sağır embriyo istiyorlarmış. Bunun tartışması yok, lisansımız buna bağlı.”",
"Topu masaya bırakıyor. “Gelecek ay klinik koordinatörlüğü açılıyor, adın listede.”"
], secenekler: [
{ t: "“Yasayı biliyorum Bora Bey, uygulayacağım,” dersin.", to: "a5", etki: { yasa: 2 } },
{ t: "“Satışlarım düşük, çünkü çiftlere çocuklarını ürün seçer gibi seçtirmek istemiyorum,” dersin.", to: "kus_gul", etki: { cesitlilik: 2, paket_ret: true } },
{ t: "“Aydın çiftinin durumu etik kurula gitmeli,” dersin.", to: "a5", etki: { yasa: 1, cesitlilik: 1, kurul: true } },
{ t: "Bir şey demeden terfiyi düşünürsün.", to: "kus_kat", etki: { terfi_dusun: true } }
]},


kus_gul: { saat: "Mart 2041", baslik: "Pınar", metin: [
"Kantinde Pınar bir köşede tek başına oturuyor, önünde bir kahve var. Seni görünce el sallıyor. Sonra fark ediyorsun ki el sallamıyor, “Gel” diye işaret ediyor.",
"Kırklarında bir kadın. Konuşurken bile elleri bir şey söylüyor.",
"“Ben CODA'yım,” diyor, “sağır anne babaların işiten çocuğuyum.”",
"“Beş yaşında annemin tercümanıydım. Doktorda, bankada, öğretmenle görüşmelerde ben çevirirdim. Babamın işten atıldığını patronundan ben duydum ve ben çevirdim, altı yaşındaydım. Babamın yüzünü hiç unutmadım, çünkü bunu benim ağzımdan duymuştu.”",
"Kahvesini karıştırıyor, ses çıkmasın diye kaşığı bardağa hiç değdirmiyor. “Bunu evde öğrendim. Ses çıkarmamayı değil, sesin kimseye bir şey anlatmadığını öğrendim.”",
"“Nehir'le Doruk'u anlıyorum, annemle babamı da anlıyorum. Beni çok sevdiler, hiç yabancı olmadım. Yalnızca yoruldum.”",
"“Kimse bana hangisi olmak isterdin diye sormadı.”"
], secenekler: [
{ t: "“Hangisi olmak isterdin?” diye sorarsın.", to: "a5", etki: { cesitlilik: 1, gul_sordu: true } },
{ t: "“Bunu Doruk'la Nehir'e anlatır mısın?” diye sorarsın.", to: "a5", etki: { sefkat: 1, gul_anlatsin: true } },
{ t: "Düşünerek “Bu hikâye yasanın lehine bir argüman olabilir,” dersin.", to: "a5", etki: { yasa: 1 } },
{ t: "Düşünmek için zamana ihtiyacın var, kahveni bitirip teşekkür edersin.", to: "a5", etki: { sefkat: 1 } }
]},

kus_kat: { saat: "Mart 2041", baslik: "On Beşinci Kat", metin: [
"Bora seni yolun öbür tarafındaki, henüz açılmamış cam kuleye götürüyor. Asansör on beşinci kata çıkıyor, içi hâlâ naylon koruyucuyla kaplı.",
"Kat bomboş, beyaz duvarlar, büyük pencereler. Bora bir köşeyi gösteriyor. “Burası senin ofisin.”",
"Koridordaki kapıları tek tek açıyor. “Danışma odaları, on iki tane. Embriyo görüntüleme burada. Burası da Optimum sunum salonu. Çiftler perdede embriyolarının on sekiz yaşındaki muhtemel yüzünü görecek.”",
"Yere posterler dizilmiş. Gülümseyen bebekler, çocuklar, gençler var ve hepsi birbirine benziyor. Burunları mı, gülüşleri mi, neyin benzediğini çıkaramıyorsun.",
"Bora pencerenin önünde duruyor. “On yıl sonra doğan her çocuğun yüzde yetmişi bu binadan geçecek. Sen o neslin mimarı olabilirsin.”",
"Aşağıda Eskişehir yolu uzanıyor. Bir yerde, buradan görünmeyen bir köşede, sabahın dördünde kalkıp simit yapan biri var."
], secenekler: [
{ t: "Gerçekten düşüneceğin için “Düşüneceğim,” dersin.", to: "a5", etki: { yasa: 1, terfi_dusun: true } },
{ t: "“Bu posterlerde neden hiç Down sendromlu bir çocuk yok?” diye sorarsın.", to: "a5", etki: { cesitlilik: 2, poster_soru: true } },
{ t: "Pencereden Keçiören'in ne tarafta olduğunu bulmaya çalışırsın.", to: "a5", etki: { sefkat: 1 } },
{ t: "“Mimar bina yapar Bora Bey, insan yapmaz,” dersin.", to: "a5", etki: { cesitlilik: 1, mimar: true } }
]},

a5: { saat: "Nisan 2041", baslik: "Altı Embriyo", metin: [
P(S("kus_gulA"), "Pınar düşündü, elleri senin anlamadığın bir işaret yaptı. Sonra sesli söyledi: “İkisi de. Ama kimse ikisi birden olmama izin vermedi.”"),
P(S("kus_gulB"), "Pınar başını salladı. Ertesi hafta Doruk'la Nehir'le bir kafede buluştu. Sonra Nehir sana yazdı: “Pınar'ı dinledik. Hiçbir şey değişmedi ama her şey biraz değişti.”"),
P(S("kus_gulC"), "Pınar sana baktı. “Benim hayatım şimdi bir argüman mı oldu?” dedi ve kalktı, kahvesi masada kaldı."),
P(S("kus_gulD"), "Teşekkür ettin. Pınar avucunu kalbine koyup dışarı doğru açtı."),
P(S("kus_katA"), "“Düşüneceğim,” dedin. Asansörde naylon kaplı aynada kendine baktın."),
P(S("kus_katB"), "Bora bir an durdu. “Posterleri pazarlama seçiyor,” dedi, sonra daha yavaş ekledi: “İyi soru.” Ertesi hafta posterler asıldı ama hâlâ hiçbiri yoktu."),
P(S("kus_katC"), "Keçiören'i buldun, ya da bulduğunu sandın, gri bir tepe. Bora neye baktığını sormadı."),
P(S("kus_katD"), "Bora'nın çenesi bir an kasıldı, sonra güldü. “Felsefe,” dedi. Asansörde hiç konuşmadınız."),
P(S("a4A"), "Bora gülümseyip topu yeniden eline aldı. “Biliyordum,” dedi."),
P(S("a4B"), "Bora'nın gülümsemesi dondu, sonra yerine oturdu. “Felsefe güzel şey,” dedi, “ama bu bina felsefeyle ayakta durmuyor.”"),
P(S("a4C"), "“Kurul yasayı uygular,” dedi Bora. “Ama tamam, kayda geçsin, vicdanın rahatlasın.” Bunu sana bir iyilik yapıyormuş gibi söyledi."),
P(S("a4D"), "Bir şey demedin, Bora da memnun bir şekilde başını salladı. Odadan çıkarken suskunluğunun bir imza gibi okunduğunu düşündün."),
"Nisanda sonuçlar geliyor. Aydın çiftinin altı embriyosu ekranda altı satır olarak duruyor.",
"Birincisinde işitme kaybı geninden iki kopya var, sağır olacak, başka bir bulgu yok. İkincisi de aynı. Üçüncüsü işitiyor ama taşıyıcı. Dördüncüsü işitiyor, bilişsel potansiyel puanı en üstteki yüzde beşlik dilimde. Beşincisi işitiyor ama kalp kası hastalığı riski yüksek.",
"Altıncısında yirmi birinci kromozomdan üç kopya var. Down sendromu.",
"Altıncı satırda duruyorsun. Kanuna göre bu embriyo atılacak, bir tıklamayla. Otuz beş yıl önce aynı tıklama annenin önüne konsaydı bu sabah poşetin üstüne ters bir M yazan kimse olmayacaktı.",
"Bütün sonuçları çifte göstermen gerekiyor ve hangisinden başlayacağına sen karar vereceksin."
], secenekler: [
{ t: "Sonuçları yorum katmadan, sırasıyla anlatırsın.", to: "a6", etki: { yasa: 1, tarafsiz: true } },
{ t: "Belki onları yumuşatır diye önce işiten ve puanı yüksek olan dördüncü embriyoyu anlatırsın.", to: "a6", etki: { yasa: 1, dort_once: true } },
{ t: "Kardeşini anlatarak altıncı embriyodan da bahsedersin.", to: "a6", etki: { cesitlilik: 1, alti_anlatti: true } },
{ t: "İstedikleri şeyin var olduğunu bilsinler diye önce birinci ve ikinci embriyoyu anlatırsın.", to: "a6", etki: { cesitlilik: 1, sefkat: 1 } }
]},

a6: { saat: "Nisan 2041", baslik: "Seçim", metin: [
P(S("a5A"), "Sonuçları sırasıyla anlattın. Altıncıya gelince Nehir'in eli bir hareket yaptı, Pınar bir an duraksayıp çevirdi: “O da mı atılacak?” Evet dedin."),
P(S("a5B"), "Dördüncüyü anlattın. Doruk ellerini masaya koydu, bir süre kaldırmadı. Sonra işaret etti: “Bize zeki bir yabancı mı satıyorsunuz?”"),
P(S("a5C"), "Gökhan'ı anlattın, simitleri, sabahın dördünü, “Ben sonuncuyum teyze” demesini. Nehir'in gözleri doldu. Doruk işaret etti: “Kardeşiniz de bizim gibi, var olmaması için yasa yazılmış biri.”"),
P(S("a5D"), "Birinci ve ikinciyi anlattın. Nehir'in eli henüz boş olan karnına gitti, Doruk karısının omzunu tuttu."),
"Masada altı satırlık bir kâğıt duruyor.",
"Doruk işaret ediyor. Pınar'ın sesi artık bir tercümanın sesi gibi değil:",
"“Size bir şey sormuyoruz Aslı Hanım, anlatıyoruz. İşiten bir embriyo verirseniz onu da severiz, anne baba olacağız. Ama bu ülke bize kendiniz gibi bir çocuk istemeniz yanlış demiş olacak.”",
"Nehir son bir işaret yapıyor, yavaşça, senin anlayabileceğin bir hızda. Avucunu kalbine koyup dışarı açıyor, sonra kaşları kalkıyor, bir soru soruyor.",
"Elleri masanın üstünde bekliyor."
], secenekler: [
{ t: "Yasaya uyar, işiten üçüncü embriyoyu önerirsin. Yasal ama onlara bir yabancı doğurtmak pahasına.", to: "y1", etki: { yasa: 2, kol: "yasa" } },
{ t: "On iki yıllık mesleğini bir tıklamaya koyarak birinci embriyoyu sistemde “belirsiz” diye işaretlersin, böylece aktarılabilir.", to: "i1", etki: { cesitlilik: 2, kol: "ihlal" } },
{ t: "Çifte dava açmalarını önerirsin, sen de tanıklık edeceksin. Yıllar sürebilir ve Nehir otuz altı yaşında.", to: "d1", etki: { cesitlilik: 1, yasa: 1, kol: "dava" } },
{ t: "Bir uzlaşma önerirsin, birinci embriyonun işitme genini düzeltmek. Yasal ve onların embriyosu ama tam da kaçtıkları şey.", to: "z1", etki: { yasa: 1, sefkat: 1, kol: "duzenle" } }
]},

/* ---------- YASA KOLU ---------- */
y1: { saat: "Nisan 2041", baslik: "Üçüncü", metin: [
P(S("a6A"), "Kâğıdı onlara çevirip parmağını üçüncü satıra koydun. Parmağının altında “taşıyıcı” kelimesi kaldı."),
P(S("i1B"), "Son anda “Onayla”yı seçtin. Parmağın öbür tuşa kaymak istedi ama kaymadı. Ertesi gün çifte üçüncü embriyoyu anlattın."),
"“Üçüncü embriyo,” diyorsun. “İşitiyor, taşıyıcı ve sağlıklı. Yasa bunu öneriyor, ben de öneriyorum.”",
"Pınar çeviriyor. Doruk'un yüzü kıpırdamıyor, Nehir gözlerini kapatıyor.",
"Sonra Nehir gözlerini açıp işaret ediyor:",
"“Yıllardır bir çocuk istiyoruz. Üç kere denedik, bu dördüncüsü. Beşincisine paramız yok.” Durup ekliyor: “Kapı buysa bu kapıdan geçeceğiz. Üçüncüyü aktarın.”",
"Doruk karısına dönüp hızlı ve sert bir şekilde işaret ediyor. Pınar çevirmiyor, aralarında bir konuşma geçiyor. Sonra Doruk sana dönüyor:",
"“Bir çocuğu seveceğiz. Ama bu kâğıdı imzalarken bilin ki bizim yerimize bir yasa karar verdi ve siz de o yasanın elisiniz.”",
"Nehir imzalıyor. Doruk bir süre kalemi parmaklarının arasında çeviriyor, sonra o da imzalıyor. İmzası bir bina çizimi gibi düz ve keskin."
], secenekler: [
{ t: "Başka bir şey bulamadığın için “Haklısınız,” dersin.", to: "y2", etki: { sefkat: 1 } },
{ t: "“Yasanın eli değilim ama yasanın içindeyim,” dersin.", to: "y2", etki: { yasa: 1 } },
{ t: "Bebeğe ilk dil olarak işaret dilini öğretmeleri için kaynaklar önerirsin.", to: "y2", etki: { cesitlilik: 1, kaynak: true } },
{ t: "Kâğıdı alıp sessizce dosyaya koyarsın.", to: "y2", etki: { yasa: 1 } }
]},

y2: { saat: "Mayıs – Aralık 2041", baslik: "Titreşim", metin: [
P(S("y1A"), "“Haklısınız,” dedin. Nehir imzalarken eli titremedi ama seninki kâğıdı alırken titredi."),
P(S("y1B"), "Pınar çevirdi. Doruk biraz düşündü, sonra ellerini kaldırdı: “Biz de öyleyiz.”"),
P(S("y1D"), "Kâğıdı dosyaya koydun, dosyanın kapağında bir numara yazıyordu."),
P(S("y1C"), "Sağırlar derneklerini, bebek işaret dili gruplarını, CODA topluluklarını yazdığın bir liste verdin. Nehir listeyi katlayıp çantasına koydu. Teşekkür etmedi ama atmadı da."),
"Aktarım tutuyor, Nehir hamile kalıyor. Sen de başka çiftlerle, başka altı satırlık kâğıtlarla uğraşıyorsun.",
"Eylülde Nehir'den bir e-posta geliyor, tercümansız, biraz kırık bir Türkçeyle yazılmış:",
"“Aslı Hanım. Bebek hareket ediyor. Doktor müzik sevdiğini söyledi, ultrasonda müzik açınca kıpırdıyormuş. Biz müziği duymuyoruz. Doruk hoparlörü karnıma dayadı, bebek kıpırdadı, Doruk ağladı. Bebek bizim duymadığımız şeyi duyuyor. İçimde bir yabancı değil, başka bir dünya.”",
"Aralıkta doğum oluyor, bir kız, Ilgaz. Hastane tercüman bulamamış, Nehir doğum boyunca ebelerin ne dediğini anlamamış. Bebeğin ilk ağlayışını duymamış, göğsünde, teninde hissetmiş.",
"Bir fotoğraf geliyor. Doruk'un elleri bebeğin yüzünün önünde, altında şöyle yazıyor: “Ona söylediğimiz ilk kelime: aile.”"
], secenekler: [
{ t: "Onları ziyarete gidersin.", to: "y3", etki: { sefkat: 1, ziyaret: true } },
{ t: "“Aile” işaretinin çizimini ekleyerek bir tebrik mesajı yazarsın.", to: "y3", etki: { cesitlilik: 1 } },
{ t: "Doğumda tercüman olmadığı için hastaneye bir şikâyet yazarsın.", to: "y3", etki: { cesitlilik: 1, sikayet: true } },
{ t: "Fotoğrafı kaydedersin ama bir şey yazmazsın.", to: "y3", etki: { yasa: 1 } }
]},

y3: { saat: "2042", baslik: "Ilgaz", metin: [
P(S("y2B"), "Mesajın sonuna yamuk bir “aile” işareti çizdin. Nehir cevap verdi: “Hâlâ yamuk ama bizim.”"),
P(S("y2C"), "Bir şikâyet yazdın. Nehir sancılarını kâğıda yazarak anlatmak zorunda kalmıştı. Üç ay sonra “Değerlendirilecektir” diye bir cevap geldi."),
P(S("y2D"), "Fotoğrafı kaydettin. Aylarca telefonunun ekranında durdu. Gökhan bir gün görüp “Bu kim abla?” diye sordu."),
P(S("y2A"), "Eryaman'daki bir daireye gittin. Kapı zili yerine bir lamba yanıyor, bebek ağlarsa Nehir'in bileğindeki bilezik titriyor."),
"Ilgaz on aylık oldu ve işitiyor. Kapı çarpınca dönüp bakıyor, müzik açılınca gülüyor.",
"Ama elleriyle de konuşuyor, “süt,” “anne” diyor. Bir de kendi uydurduğu bir işaret var, elini kulağına götürüp açıyor. Nehir bunun “ses” demek olduğunu düşünüyor.",
"Nehir seni mutfakta yakalıyor, Pınar da yanında, artık ailenin bir parçası gibi.",
"“Onu çok seviyorum,” diyor Nehir. “Ama bir gün sesle konuşacak. Arkadaşlarıyla telefonda konuşacak, şarkı söyleyecek, ben de duvarın öbür yanında kalacağım. Annemle aramdaki duvar şimdi kızımla benim aramda. Yalnızca yönü değişti.”",
"Salonda Ilgaz babasının kucağında ellerini sallıyor."
], secenekler: [
{ t: "“Duvar her zaman bir yerde olur Nehir, ama siz ona bir kapı da açmışsınız,” dersin.", to: "t1", etki: { sefkat: 1, cocuk: "isiten" } },
{ t: "“Yanlış mı yaptım?” diye sorarsın.", to: "t1", etki: { cesitlilik: 1, cocuk: "isiten", soru: true } },
{ t: "Ilgaz'ın uydurduğu işareti yaparsın, elini kulağına götürüp açarsın.", to: "t1", etki: { cesitlilik: 1, sefkat: 1, cocuk: "isiten", deniz_isaret: true } },
{ t: "Bir şey demeden ellerini izlersin.", to: "t1", etki: { cocuk: "isiten" } }
]},

/* ---------- İHLAL KOLU ---------- */
i1: { saat: "Nisan 2041", baslik: "Belirsiz", metin: [
"Bu sistemi on iki yıldır kullanıyorsun. Bir sonucu “belirsiz” diye işaretlersen yeniden test istenir. Yeniden test başka bir laboratuvarda yapılır ve sonuç yine senin onayına gelir.",
"Bu bir sonucu değiştirmek değil, bir belirsizlikle örtmek demek. Bir hafta, bir onay.",
"Çifte yalnızca “Birinci embriyonun sonucunda bir belirsizlik var, yeniden test edilecek,” diyorsun. Doruk sana uzun uzun bakıyor. Bir şey anlıyor, ya da anlamak istiyor.",
"Nehir soruyor: “İyi bir belirsizlik mi, kötü mü?”",
"“Bilmiyorum,” diyorsun. Tuhaf ama doğru bu.",
"Bir hafta sonra ikinci laboratuvarın sonucu ekranda, iki kopya, aynı. Altında senin onay tuşun var.",
"İki seçenek görünüyor, “Onayla” ve “Belirsiz, aktarıma uygun.” İkincisi mozaiklik şüphesi için var, nadiren kullanılır ve kimse kontrol etmez.",
"İmleç iki tuşun arasında duruyor. Masanın kenarında Gökhan'ın boş simit poşeti var."
], secenekler: [
{ t: "“Belirsiz, aktarıma uygun”u seçersin.", to: "i2", etki: { cesitlilik: 1, ihlal: true } },
{ t: "Yapamazsın, son anda “Onayla”yı seçersin.", to: "y1", etki: { yasa: 2, kol: "yasa", vazgecti: true } },
{ t: "Seçmeden önce Doruk'la Nehir'e ne yaptığını, neyi riske attığını, gerçeği söylersin.", to: "i2", etki: { cesitlilik: 1, sefkat: 1, ihlal: true, ciftle: true } },
{ t: "O da tanık olacağı için Pınar'a danışırsın.", to: "i2", etki: { sefkat: 1, ihlal: true, gul_bilir: true } }
]},

i2: { saat: "Haziran 2041", baslik: "Denetim", metin: [
P(S("i1A"), "Tıkladın. Ekran bir saniye düşündü, sonra yeşil bir onay verdi. Kimse kontrol etmedi, henüz."),
P(S("i1C"), "Doruk'la Nehir'e söyledin. Nehir ağladı. Doruk işaret etti: “Bizim için mi yapıyorsunuz?” Hayır, doğru olduğunu düşündüğün için yaptığını söyledin. Doruk “O zaman bizim için yapıyorsunuz,” dedi, “çünkü biz doğruyuz.”"),
P(S("i1D"), "Pınar uzun süre konuşmadı. “Ben tercümanım,” dedi. “Bir mahkemede bunu çevirmem gerekirse çeviririm, bunu bilin.” Sonra ekledi: “Ama şu an hiçbir şey çevirmiyorum, yalnızca buradayım.”"),
"Aktarım yapıldı ve tuttu.",
"Haziranda bir iç denetim yapılıyor. Bora rutin olduğunu söylüyor ama denetçiler bu yıl “belirsiz” diye işaretlenmiş embriyolara bakıyor. Sistemde altı tane var. Beşi başka danışmanlardan, bir yıl öncesinden, biri de senin.",
"Bora seni çağırıyor. Ekranda Aydın dosyası açık, birinci embriyo. Sıkma topu masada duruyor ama dokunmuyor.",
"“Aslı, bu belirsizlik neydi?”",
"İkinci laboratuvarın raporu da açık, iki kopya, hiçbir belirsizlik yok.",
"“Bunu bana açıklayabilirsin,” diyor. “Ya da ben teknik hata deyip kapatırım. Bir şartla, koordinatörlüğü kabul edersin ve bundan sonra her dosyan benim masamdan geçer.”"
], secenekler: [
{ t: "Bilerek yaptığını, her şeyi itiraf edersin.", to: "i3", etki: { cesitlilik: 1, yasa: 1, itiraf: true } },
{ t: "Teklifi kabul edersin ve dosya kapanır.", to: "i3", etki: { yasa: 1, terfi: true, kapatti: true } },
{ t: "Terfiyi reddedip “Teknik bir hataydı,” dersin.", to: "i3", etki: { teknik: true } },
{ t: "“Nehir hamile. Ne yapacaksınız, bebeği aldıracak mısınız?” dersin.", to: "i3", etki: { cesitlilik: 1, meydan: true } }
]},

i3: { saat: "Aralık 2041", baslik: "Sessiz Doğum", metin: [
P(S("i2A"), "İtiraf ettin. Bora uzun uzun yüzüne baktı, sonra raporu yazdı. Lisansın askıya alındı ama Doruk'la Nehir'e dokunulmadı, çünkü yasa sağlık çalışanını cezalandırıyor."),
P(S("i2B"), "Kabul ettin ve dosya “teknik hata” diye kapandı. Bir hafta sonra kapısında “Klinik Koordinatör” yazan yeni odana taşındın. Pencereden reklamın yanıp sönen yeşil gözü görünüyor, hâlâ tamir edilmemiş."),
P(S("i2C"), "“Teknik bir hataydı,” dedin. Bora “Teknik hata bir kere olur,” deyip dosyayı kapattı. Terfi listesinde artık adın yoktu."),
P(S("i2D"), "Bora'nın yüzü bembeyaz oldu. “Hayır, tabii ki hayır,” dedi, topu eline alıp sıktı. Dosya kapandı ama kimse bunun ne demek olduğunu yüksek sesle söylemedi."),
"Aralıkta doğum oluyor, bir oğlan, Efe.",
"Bu sefer doğumda Pınar da var, ebelerin söylediklerini ellerle çeviriyor. Bebek ağlıyor, Nehir ağlayışı göğsünde hissediyor.",
"İki hafta sonra işitme taraması yapılıyor, iki kulakta da işitme yok. Bir hemşire Nehir'e acıyarak bakıp “Koklear implant seçenekleri” yazan bir broşür uzatıyor.",
"Nehir broşürü nazikçe geri veriyor, sonra oğlunun yüzünün önünde ellerini kaldırıyor. Efe annesinin ellerine bakıyor, gözleri o ellerin peşinden gidiyor.",
"Bir fotoğraf geliyor, altına Türkçe yazılmış: “Bizim dilimizle doğdu. Teşekkür ederiz. Bunun ne pahasına olduğunu biliyoruz.”"
], secenekler: [
{ t: "Ne olursa olsun onları ziyarete gidersin.", to: "t1", etki: { sefkat: 1, cocuk: "sagir", ziyaret: true } },
{ t: "Fotoğrafa bakıp ağlarsın.", to: "t1", etki: { sefkat: 1, cocuk: "sagir" } },
{ t: "“Bedelini ben ödüyorum, siz değil,” diye cevap yazarsın.", to: "t1", etki: { cesitlilik: 1, cocuk: "sagir" } },
{ t: "Kanıt olmasın diye fotoğrafı silersin.", to: "t1", etki: { yasa: 1, cocuk: "sagir", sildi: true } }
]},

/* ---------- DAVA KOLU ---------- */
d1: { saat: "Mayıs 2041", baslik: "Dilekçe", metin: [
"Doruk'la Nehir bir avukat buluyor, engelli hakları alanında çalışan genç bir kadın, Av. Melike Er. Kanunun dokuzuncu maddesinde işitme kaybını “ağır kalıtsal engellilik” sayan kısmın iptali için dava açacaklar.",
"Avukat senden, merkezin içinden biri olarak bilirkişi tanıklığı istiyor.",
"“Siz içeriden konuşursanız,” diyor Av. Er, “bu dava bir azınlığın talebi olmaktan çıkar.” Konuşurken kalemiyle dosyanın kenarına küçük kutular çiziyor.",
"Bora bunu duyuyor ve bu sefer topu elinde değil.",
"“Tanıklık edersen burada çalışamazsın. Hem kazanılırsa ne olacak biliyor musun? Sağır çocuk isteyenler, cücelik isteyenler, başka şeyler isteyenler gelecek. Bir kapı açılır.”",
"Akşam Gökhan'a anlatıyorsun. Hamuru yoğururken seni dinliyor, sonra soruyor: “Abla, ben de mi bir kapıydım? Annemiz beni doğururken?”"
], secenekler: [
{ t: "Ne pahasına olursa olsun tanıklık etmeyi kabul edersin.", to: "d2", etki: { cesitlilik: 2, tanik: true } },
{ t: "Mahkemeye çıkmadan yazılı bir bilirkişi raporu vermeyi teklif edersin.", to: "d2", etki: { cesitlilik: 1, yasa: 1, yazili: true } },
{ t: "Reddedersin ama başka bir uzman bulmalarına yardım edersin.", to: "d2", etki: { yasa: 1, sefkat: 1, baska_uzman: true } },
{ t: "Gökhan'a cevap verirsin: “Hayır, sen bir insandın. Kapılar insanlardan sonra gelir.”", to: "d2", etki: { sefkat: 1, cesitlilik: 1, tanik: true, ozan_cevap: true } }
]},

d2: { saat: "Ekim 2041", baslik: "Mahkeme", metin: [
P(function(d){ return d.tanik; }, "Bora seni işten çıkarmadı, ücretsiz ve süresiz “izne” gönderdi."),
P(S("d1C"), "Kendisi de işitme engelli olan emekli bir profesör buldunuz, mahkemede o konuştu. Sen arka sıradaydın. Nehir bir ara dönüp sana bir işaret yaptı. Sonra Pınar'a sordun, “Burada olduğun için,” demiş."),
"Anayasa Mahkemesi'ndesiniz. Mermer bir salon, yüksek bir kürsü, on beş üye var. Köşede sırayla çeviren iki tercüman duruyor. İzleyici sıralarında yüzlerce sağır oturuyor, elleri salonda sessiz bir dalga gibi kıpırdıyor.",
P(function(d){ return d.tanik || d.yazili; }, "Sıra sana geliyor. On beş yüz sana bakıyor, arkanda yüzlerce el var."),
P(function(d){ return d.tanik || d.yazili; }, "Altı satırlık kâğıtları, bir tıklamayla silinen embriyoları, “ağır” kelimesini kimin koyduğunu anlatıyorsun. Bir de bir poşetin üstündeki ters M'yi anlatıyorsun."),
"Hükümet avukatı konuşuyor. Çocuğun açık bir geleceğe hakkı olduğunu, işiten bir dünyada yaşamanın kolaylığını, kaygan zemini anlatıyor. Güçlü bir konuşma, bazı üyeler not alıyor.",
"Sonra Nehir kürsüye çıkıp elleriyle konuşuyor, Pınar çeviriyor. Bağlanan ellerini, yaz kampını, annesiyle geçen otuz yılı anlatıyor. Sonra bir cümle söylüyor ve Pınar'ın sesi titriyor:",
"“Bu yasa bana sen var olmamalıydın diyor. Ama ben buradayım. Kimin var olmaması gerektiğine var olanlar mı karar verecek?”"
], secenekler: [
{ t: "Sağır izleyicilerle birlikte ellerini kaldırıp sallarsın, işaret dilinde alkış böyle yapılır.", to: "d3", etki: { cesitlilik: 1, alkis: true } },
{ t: "Kıpırdamadan oturursun.", to: "d3", etki: { yasa: 1 } },
{ t: "Hükümet avukatının argümanlarını gerçekten dinlersin.", to: "d3", etki: { yasa: 1, dinledi: true } },
{ t: "Nehir'in yanına gidersin.", to: "d3", etki: { sefkat: 1 } }
]},

d3: { saat: "Ocak 2042", baslik: "Karar", metin: [
P(S("d2B"), "Kıpırdamadan oturdun. Kucağındaki ellerin kimse görmeden “aile” işaretini yaptı."),
P(S("d2D"), "Nehir'in yanına gittin. Hükümet avukatı konuşurken bileğini bırakmadın."),
P(S("d2A"), "Yüzlerce el havaya kalktı. Mahkeme başkanı bir an durdu, sonra devam etti. Ertesi gün gazetede bir fotoğraf çıktı, havadaki ellerin arasında beceriksizce sallanan bir çift el, seninkiler."),
P(S("d2C"), "Hükümet avukatını dinledin, bazı argümanları gerçekten iyiydi. Bir çocuğun anne babasının seçiminden bağımsız bir geleceği olmalıydı, bunu reddedemedin. Ama Nehir'in sorusunu da reddedemedin."),
"Ocakta karar çıkıyor, sekize karşı yedi oyla.",
"İşitme kaybıyla ilgili kısım iptal ediliyor. Gerekçede şöyle yazıyor: “Devlet, kendine özgü dili olan bir topluluğun yaşam biçimini sağlık politikası adına yok sayamaz.”",
"Yedi üyenin karşı oy yazısında da şu cümle var: “Bir gün bu çocuklar büyüyecek ve bu seçimi kimin yaptığını soracaklardır.”",
"Mahkemenin önünde, karın içinde Doruk'la Nehir sarılıyor. Nehir sana bir işaret yapıyor ve bu sefer anlıyorsun, çok çalıştın: “Teşekkür ederim.” Sonra anlamadığın bir işaret daha yapıyor. Pınar çeviriyor: “Şimdi korkuyorum.”"
], secenekler: [
{ t: "“Korkmanız iyi, bu bir sorumluluk,” dersin.", to: "d4", etki: { yasa: 1 } },
{ t: "Nehir'e sarılırsın.", to: "d4", etki: { sefkat: 1 } },
{ t: "Haklı bir yanı var mı diye karşı oy yazısını bir kez daha okursun.", to: "d4", etki: { yasa: 1, serh: true } },
{ t: "“Şimdi sıra birinci embriyoda, birlikte,” dersin.", to: "d4", etki: { cesitlilik: 1 } }
]},

d4: { saat: "Aralık 2042", baslik: "İlke", metin: [
P(S("d3A"), "“Korkmanız iyi,” dedin. Nehir işaret etti: “Eskiden yasa bizim yerimize korkuyordu, şimdi biz korkacağız.”"),
P(S("d3B"), "Nehir'e sarıldın, omzunda ses çıkarmadan ağladı. Pınar sonra söyledi, sağırların ağlaması daha sessiz değilmiş, yalnızca kimse duymuyormuş."),
P(S("d3C"), "Karşı oy yazısını yeniden okudun. Bir çocuk bir gün soracaktı, bunu sen de biliyordun."),
P(S("d3D"), "“Birlikte,” dedin. Doruk'un elleri bir işaret yaptı, Pınar çevirmedi, gerek yoktu."),
"Aktarım martta başka bir merkezde yapılıyor, Bora'nın merkezi “kurumsal politika” gereği reddediyor.",
"Aralıkta bir kız doğuyor, İlke. İşitme taraması yapılıyor, işitmiyor.",
"Gazeteler “Türkiye'nin yasal olarak seçilmiş ilk sağır bebeği” diye yazıyor. Bir köşe yazarı buna “bilimin geri adımı” diyor, bir başkası “zafer.” Sosyal medyada biri ailenin adresini paylaşıyor.",
"Bir akşam Nehir'den bir mesaj geliyor: “Kapımıza bir kâğıt bırakmışlar, ‘Kızınıza ne yaptınız?’ yazıyor. İlke uyuyor, hiçbir şey duymadı. Biz de duymadık, okuduk.”"
], secenekler: [
{ t: "Aileyi korumak için bir avukatla, polisle iletişime geçersin.", to: "t1", etki: { yasa: 1, cocuk: "sagir", koruma: true } },
{ t: "Bir gazeteye İlke'nin değil, Nehir'in hikâyesini anlatan bir yazı gönderirsin.", to: "t1", etki: { cesitlilik: 1, cocuk: "sagir", yazi: true } },
{ t: "Onları ziyaret edip bir gece yanlarında kalırsın.", to: "t1", etki: { sefkat: 1, cocuk: "sagir", ziyaret: true } },
{ t: "Bu çocuğun bir gün sana ne soracağını düşünürsün.", to: "t1", etki: { yasa: 1, cocuk: "sagir", ece_soru: true } }
]},

/* ---------- DÜZENLEME KOLU ---------- */
z1: { saat: "Nisan 2041", baslik: "Düzeltme", metin: [
"“Bir seçenek daha var,” diyorsun. “Birinci embriyo sizin istediğiniz embriyo. Ama işitme genini düzeltebiliriz, yasal ve onaylı bir işlem. Aynı embriyo kalır, yalnızca bir harf değişir. Sizin çocuğunuz olur ve yasa da izin verir.”",
"Pınar çeviriyor. Doruk'un yüzünde bir şey değişiyor.",
"Doruk yavaşça, her işareti tek tek yapıyor:",
"“Bir harf. O harf benim dilim, dedem, karım. Onu değiştirirseniz bizim çocuğumuz olmaz. Bizim genlerimizden yapılmış ama bizim evimizden çıkarılmış bir çocuk olur.”",
"Nehir'in elleri kucağında, işaret etmiyor.",
"“Düzeltmek,” diyor Doruk. “Bu kelimeyi siz seçtiniz. Bozuk olan şey düzeltilir. Ben bozuk değilim Aslı Hanım.”"
], secenekler: [
{ t: "Kelime seçimin için özür dilersin ama önerinin arkasında durursun.", to: "z2", etki: { sefkat: 1, yasa: 1 } },
{ t: "Önerini geri çekersin.", to: "z2", etki: { cesitlilik: 1, geri_cekti: true } },
{ t: "Nehir'e dönüp onun ne düşündüğünü sorarsın.", to: "z2", etki: { sefkat: 1, nehire_sordu: true } },
{ t: "“Bu, bir yasanın sizin yerinize karar vermesinden iyi değil mi?” dersin.", to: "z2", etki: { yasa: 1 } }
]},

z2: { saat: "Nisan 2041", baslik: "Nehir", metin: [
P(S("z1A"), "Özür diledin ama geri adım atmadın. Doruk kalkıp çıktı, Nehir oturmaya devam etti."),
P(S("z1C"), "Nehir uzun süre cevap vermedi. Sonra elleriyle “Bilmiyorum,” dedi. Doruk ona döndü, ilk kez bir konuda ayrı düşüyorlardı."),
P(S("z1D"), "Doruk'un elleri öyle hızlandı ki Pınar yetişemedi. “Bir yasanın bizi silmesiyle bizim kendimizi silmemiz arasında bir fark var mı?”"),
P(S("z1B"), "Önerini geri çektin, Doruk başını salladı. Nehir ellerini hâlâ kucağında tutuyordu."),
"Ertesi gün Nehir Pınar'la birlikte, Doruk olmadan geliyor.",
"Uzun süre oturup konuşmuyor, sonra işaret etmeye başlıyor:",
"“Buraya geldiğimi Doruk'a söylemedim. Otuz altı yaşındayım, üç kere denedik, paramız yok. Bu son şansımız.”",
"“Doruk sağır bir çocuk istiyor, ben de istiyorum. Ama ben daha çok bir çocuk istiyorum. Düzenlenmiş de olsa, işiten de olsa, benim karnımda büyüsün yeter.”",
"Elleri titriyor.",
"“Ben işiten bir aileden geldim. Doruk'un ailesi bana bir dil verdi, bir ev verdi. Şimdi onlara işiten bir torun mu vereceğim?”",
"“Siz olsanız ne yapardınız?”"
], secenekler: [
{ t: "“Doruk'la konuşun, birlikte karar verin,” dersin.", to: "z3", etki: { sefkat: 1, konus: true } },
{ t: "“Bir çocuk istemek ihanet değil,” dersin.", to: "z3", etki: { sefkat: 1, ihanet_degil: true } },
{ t: "“Ben olsam beklerdim, belki yasa değişir,” dersin.", to: "z3", etki: { cesitlilik: 1, bekle: true } },
{ t: "“Bunu ben söyleyemem Nehir,” dersin.", to: "z3", etki: { yasa: 1 } }
]},

z3: { saat: "Haziran 2041", baslik: "Laboratuvar", metin: [
P(S("z2A"), "Üç gün konuştular. Üçüncü gün Doruk tercümansız görüntülü aradı, senin anlayabileceğin kadar yavaş işaret etti: “Düzenle. Karım istiyor, ben de karımı istiyorum.”"),
P(S("z2B"), "Nehir gözlerini sildi. “İhanet değil,” diye işaret etti, senin kelimeni tekrarlayarak. Bir hafta sonra Doruk'la birlikte geldi. Doruk hiçbir şey demedi, imzaladı."),
P(S("z2C"), "Bir ay sonra Nehir'den bir e-posta geldi: “Bekleyemiyoruz, yaşım da paramız da buna izin vermiyor. Düzenleme yapalım.” Beklemenin herkesin karşılayabileceği bir şey olmadığını unutmuştun."),
P(S("z2D"), "Nehir gitti, iki hafta sonra Doruk'la birlikte geldi. Kararlarını vermişlerdi. Nasıl verdiklerini hiçbir zaman öğrenmeyeceksin."),
"Haziranda laboratuvardasın. Embriyolog Dr. Can otuzlarında, kulaklığından hafif bir müzik geliyor, sen camın arkasındasın.",
"Ekranda birinci embriyo var, birkaç düzine hücre. Dr. Can düzenleme aracını bir iğneyle veriyor. Değişen tek bir harf, bir kulağın içindeki küçük tüylerin titreşip titreşmeyeceğini belirleyecek.",
"“Bitti,” diyor ve kulaklığını çıkarıyor. “Hedef dışı etkiler için bir hafta bekleyeceğiz.”",
"Bir hafta sonra rapor geliyor, işlem başarılı, hedef dışı etki “tespit edilemeyecek kadar küçük.”"
], secenekler: [
{ t: "Aktarımda Doruk'la Nehir'in yanında olursun.", to: "t1", etki: { sefkat: 1, cocuk: "duzenlenmis" } },
{ t: "Raporu tekrar tekrar okursun, “tespit edilemeyecek kadar küçük.”", to: "t1", etki: { yasa: 1, cocuk: "duzenlenmis", rapor_endise: true } },
{ t: "Aile için değiştirilmemiş dizilimin bir kopyasını saklarsın.", to: "t1", etki: { cesitlilik: 1, cocuk: "duzenlenmis", kopya: true } },
{ t: "Dr. Can'a sorarsın: “Bunu yaparken ne hissediyorsun?”", to: "t1", etki: { cocuk: "duzenlenmis", can_soru: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "2042", baslik: "Bebek", metin: [
P(function(d){ return d.cocuk === "isiten"; }, "Ilgaz bir yaşında, ilk kelimesini sesle söylüyor, “baba.” Doruk duymuyor, Nehir duymuyor, komşu kadın duyup kapıyı çalıyor. Doruk kızına dönüp “Ne dedin?” diye işaret ediyor, Ilgaz da ellerini kaldırıp “baba” diyor."),
P(function(d){ return d.cocuk === "sagir"; }, "Bebek bir yaşında, ilk kelimesini elleriyle söylüyor, “anne.” Evde kutlama yapılıyor, lambalar yanıp sönüyor, eller havada. Alt kattaki komşu ışıklar yüzünden kapıyı çalıyor, sonra o da kalıyor."),
P(function(d){ return d.cocuk === "duzenlenmis"; }, "Bebek doğdu, adı Alp ve işitiyor. Doruk tarama sonucunu okuyup kâğıdı katlıyor. Sonra oğlunun yüzünün önünde ellerini kaldırıyor, “aile.” Alp ellere bakıyor, bir de odada çalan bir telefona."),
P(function(d){ return d.terfi; }, "Klinik koordinatörsün. Senin biriminde Optimum satışları yüzde altmış arttı. Bora bir konferansta seni “yeni neslin mimarı” diye tanıttı, alkışlarken sıkma topunu kürsüde unuttu."),
P(function(d){ return d.itiraf; }, "Lisansın askıda. Bir dernekte sağır ailelere, engelli çocuğu olan ailelere gönüllü danışmanlık yapıyorsun. Çay ocağı senin sorumluluğunda, ilk hafta üç bardak kırdın."),
P(function(d){ return d.tanik && !d.itiraf; }, "Merkezden ayrıldın, bir üniversitede genetik etik dersi veriyorsun. Öğrencilerinin çoğu Optimum Paket'le doğmuş, ilk nesil. Hepsi birbirine biraz benziyor ve bunu düşündüğün için kendine kızıyorsun."),
P(function(d){ return !d.terfi && !d.itiraf && !d.tanik; }, "Merkezde çalışmaya devam ediyorsun. Her gün altı satırlık kâğıtlar geliyor ve her gün parmağın altıncı satırda biraz bekliyor.")
], secenekler: [
{ t: "Bebeği görmeye gidersin.", to: "t1b", etki: { sefkat: 1 } },
{ t: "Bu yılı yazmaya başlarsın.", to: "t1b", etki: { cesitlilik: 1, yazi_basladi: true } },
{ t: "Başka çiftler bekliyor, işine odaklanırsın.", to: "t1b", etki: { yasa: 1 } },
{ t: "Gökhan'ın fırınına gidersin.", to: "t1b", etki: { sefkat: 1 } }
]},

t1b: { saat: "Eylül 2042", baslik: "Otuz Altı", metin: [
P(S("t1A"), "Bebeği görmeye gittin. Minicik bir el parmağını kavradı ve o an işitip işitmediği hiç aklına gelmedi."),
P(S("t1B"), "Yazmaya başladın. İlk cümleyi yirmi kere değiştirdin, sonunda şöyle yazdın: “Kardeşim simitçidir.”"),
P(S("t1C"), "İşine odaklandın ama her kâğıtta parmağın bir satırın üstünde bekliyordu."),
P(S("t1D"), "Sabahın dördünde fırına gittin. Gökhan bir şey sormadı, eline hamur verdi."),
"Gökhan'ın otuz altıncı doğum günü. Fırının arka odasına bir masa kurulmuş, üstünde simitler, poğaçalar ve Gökhan'ın kendi yaptığı bir pasta var. Üstüne kremayla “GÖKHAN 36” yazmış, 6'yı ters yazmış.",
P(function(d){ return d.ziyaret || d.ozan_anlatti || d.alti_anlatti; }, "Kapıda bebek arabasıyla Doruk'la Nehir duruyor. Gökhan onları davet etmiş, bir dernek etkinliğinde tanışmışlar ama sana söylememiş."),
P(function(d){ return d.ziyaret || d.ozan_anlatti || d.alti_anlatti; }, "Gökhan kapıya koşup ellerini kaldırıyor, beceriksizce ama eksiksiz işaret ediyor: “Hoş geldiniz. Aile.” Nehir gülüyor. Gökhan bir ay boyunca her akşam videolardan çalışmış. Doruk sarılınca Gökhan'ın unu ceketine bulaşıyor ama silmiyor."),
P(function(d){ return !(d.ziyaret || d.ozan_anlatti || d.alti_anlatti); }, "Gökhan otuz altı mumu üflüyor, nefesi yetmeyince çırak yardım ediyor. Sonra kendi yazdığı bir konuşmayı kâğıttan okuyor, iki yerde kendi yazısını okuyamayıp gülüyor."),
"Gökhan bir dilek tutuyor, sonra kulağına eğiliyor. “Abla, dileğimi söyleyeyim mi? Benim gibi bir çocuk daha doğsun, yalnız kalmayayım.”"
], secenekler: [
{ t: "“Dileğin kabul olsun,” dersin.", to: "t2", etki: { cesitlilik: 1, dilek: true } },
{ t: "Odadakileri göstererek “Yalnız değilsin Gökhan,” dersin.", to: "t2", etki: { sefkat: 1 } },
{ t: "Bir şey diyemezsin.", to: "t2", etki: { cesitlilik: 1 } },
{ t: "Gülümseyerek “Dilekler söylenmez,” dersin.", to: "t2", etki: { sefkat: 1 } }
]},

t2: { saat: "Kasım 2042", baslik: "Yeni Yasa", metin: [
P(S("t1bA"), "“Kabul olsun,” dedin. Gökhan mumları üfledi, biri sönmedi. “O benim,” dedi."),
P(S("t1bB"), "Gökhan odadakileri saydı, annen, iki komşu, çırak, iki müşteri. “Yedi,” dedi, “iyi sayı.”"),
P(S("t1bC"), "Bir şey diyemedin. Gökhan ilk dilimi sana verdi, kremadaki ters 6 senin dilimine düşmüştü."),
P(S("t1bD"), "Gökhan biraz düşündü. “Ama ben söyledim, belki o yüzden kabul olmaz,” dedi, sonra güldü."),
"Kasımda Meclis'e bir taslak geliyor, listeye yirmi üç yeni durum eklenecek. Otizm spektrumu için “yüksek genetik risk” var, bazı öğrenme güçlükleri var. Gerekçede de şu cümle var: “Bilişsel potansiyel puanı eşiğin altında kalan embriyoların aktarımı caydırılmalıdır.”",
P(function(d){ return d.cocuk === "sagir" && d.kol === "dava"; }, "Taslakta bir madde daha var, Anayasa Mahkemesi'nin iptal ettiği işitme kaybı maddesi “yeniden düzenlenecek.” İlke doğduktan bir yıl sonra."),
"Sağlık Komisyonu uzman görüşü istiyor ve davet senin adına geliyor.",
"Aynı hafta Gökhan'dan bir mesaj geliyor: “Abla, televizyondan aradılar. Benim gibi kalmış son insanlarla bir program yapıyorlarmış. Gideyim mi?”",
"İkisi de aynı gün, aynı saatte."
], secenekler: [
{ t: "Komisyona gidersin.", to: "y_komisyon", etki: { cesitlilik: 1, yasa: 1, komisyon: true } },
{ t: "Gökhan'la birlikte televizyona gidersin.", to: "y_ozan", etki: { cesitlilik: 1, sefkat: 1, ozan_tv: true } },
{ t: "Gökhan'ı tek başına bırakmak pahasına ikisini de reddedersin.", to: "t3", etki: { yasa: 1, ikisi_ret: true } },
{ t: "Komisyona yazılı görüş gönderirsin, Gökhan'a da “Sen bilirsin,” dersin.", to: "t3", etki: { yasa: 1, yazili_gorus: true } }
]},

y_komisyon: { saat: "Kasım 2042", baslik: "Komisyon", metin: [
"Meclis'te bir salondasın. Uzun bir masa, mikrofonlar, on iki milletvekili var. Bir sağlık ekonomisti, iki genetikçi, bir hukukçu, bir din bilgini ve sen.",
"Önce ekonomist konuşuyor. Bir otizmli bireyin, bir Down sendromlunun, bir işitme engellinin ömür boyu maliyetini anlatıyor. Milyonlar konuşuluyor, tablolarda renkler var.",
"Mikrofonunun kırmızı ışığı yanıyor. Hazırladığın metni masaya koyuyorsun, sonra kenara itiyorsun.",
"“Bir kardeşim var. Otuz altı yaşında, Down sendromlu. Sabahın dördünde kalkıp simit yapıyor. Geçen ay bir dilek tuttu, kendisi gibi bir çocuk daha doğsun, yalnız kalmasın diye.”",
"Ekonomist kalemini bırakıyor.",
"“Siz bir maliyet hesaplıyorsunuz. Bir ülke var olmasını istemediği insanları bir listeye yazınca o listedeki son insanlar yalnız kalır. Bunu hangi sütuna yazıyorsunuz?”"
], secenekler: [
{ t: "Konuşmana yasal argümanlarla devam edersin.", to: "t3", etki: { yasa: 1, cesitlilik: 1 } },
{ t: "Sözünü bitirip oturursun.", to: "t3", etki: { cesitlilik: 1, kisa: true } },
{ t: "Bir milletvekilinin itiraz etmesini bekleyip cevap verirsin.", to: "t3", etki: { yasa: 1, tartisti: true } },
{ t: "Kameraya Gökhan'ın bir fotoğrafını gösterirsin.", to: "t3", etki: { cesitlilik: 1, foto: true } }
]},

y_ozan: { saat: "Kasım 2042", baslik: "Kamera", metin: [
"Bir stüdyodasın, programın adı “Son Nesil.” Üç konuk var, Gökhan, otuz dört yaşında spina bifidalı bir kadın ve elli yaşında otizmli bir adam. Hepsi yasadan önce doğmuş.",
"Sunucu kibar ama programın havası bir müze gezisini andırıyor. “Yasadan önce doğan son kuşaksınız, bu nasıl bir duygu?” diye soruyor.",
"Kamera Gökhan'ın yüzüne yaklaşıyor, sen kulisten izliyorsun. Makyöz Gökhan'ın alnına fazla pudra sürmüş, bembeyaz görünüyor.",
"“Ben her sabah dörtte kalkıp simit yapıyorum,” diyor Gökhan. “Altı yüz simit. Mahallenin yarısı benim simidimi yiyor.” Sunucu gülüyor ama Gökhan gülmüyor.",
"“Bana kusurlu musun diye sordular. Simitlerim kusursuz ama ben değilim. Siz de değilsiniz. O zaman neden listeye yalnızca beni yazdılar?”",
"Sunucu bir şey diyecek oluyor ama diyemiyor.",
"Gökhan kameraya dönüyor. “Benim ablam genetikçi, kusursuz bebekler yapıyor. Ama beni seviyor. Bu bir şey demek değil mi?”",
"Kulisteki herkes sana bakıyor."
], secenekler: [
{ t: "Kulisten çıkıp kameranın önüne, Gökhan'ın yanına gidersin.", to: "t3", etki: { sefkat: 1, cesitlilik: 1, kamera_onu: true } },
{ t: "Bu onun anı, kulisten izlemeye devam edersin.", to: "t3", etki: { cesitlilik: 1 } },
{ t: "Herkesin önünde ağlarsın.", to: "t3", etki: { sefkat: 1 } },
{ t: "Gökhan'ı bir müze parçası gibi gösterdikleri için yapımcıya itiraz edersin.", to: "t3", etki: { cesitlilik: 1, itiraz: true } }
]},

t3: { saat: "Aralık 2042", baslik: "Bora", metin: [
P(S("t2C"), "İkisini de reddettin. Gökhan telefonda bir süre konuşmadı, sonra “Tamam abla,” dedi. Programa yalnız gitti, sen de evden sesini kısarak izledin."),
P(S("t2D"), "Yazılı görüşün bir dosyaya girdi, Gökhan'ın yüzü ise ekranlara çıktı. Çıkışta seni aradı: “Ben iyiydim, değil mi?”"),
P(S("y_komisyonA"), "Anayasayı, eşitliği, ayrımcılık yasağını anlattın. İki milletvekili not aldı, biri telefonuna bakıyordu."),
P(S("y_komisyonB"), "Oturdun. Bir iki saniye sessizlik oldu, sonra başkan “Teşekkürler, sıradaki,” dedi."),
P(S("y_komisyonC"), "Bir milletvekili “Duygusal argümanlarla yasa yapılmaz,” dedi. Sen de “Yasalar da duygusuz yapılmaz,” dedin, “yalnızca kimin duygusunun sayıldığı değişir.” Bu tutanağa geçti."),
P(S("y_komisyonD"), "Un içindeki Gökhan'ın fotoğrafını gösterdin, ertesi gün bir gazetenin ilk sayfasındaydı. Gökhan kızdı, “Bana sormadın abla,” dedi ve iki gün seninle konuşmadı."),
P(S("y_ozanA"), "Kameranın önüne çıktın. Gökhan elini tutup sunucuya döndü. “Bu benim ablam,” dedi, “o da kusurlu.” Stüdyo güldü, sonra sustu."),
P(S("y_ozanB"), "İzledin. Gökhan çıkınca “Nasıldım?” diye sordu. “Kusursuz,” dedin, ikiniz de güldünüz. Alnındaki pudrayı bir peçeteyle sildin."),
P(S("y_ozanC"), "Kulisin ortasında ağladın. Bir kameraman sana mendil uzattı. Kızının otizmli olduğunu söyleyip adını da söyledi, sen unuttun, sonra unuttuğuna üzüldün."),
P(S("y_ozanD"), "Yapımcı omuz silkip “Reyting,” dedi. İkinci bölümde Gökhan'ı fırınında çalışırken çektiler."),
P(function(d){ return d.komisyon; }, "Konuşman bir gün gündemde kaldı. “Bilişsel potansiyel” maddesi geri çekildi ama ötekiler kaldı."),
P(function(d){ return d.ozan_tv; }, "Gökhan'ın son cümlesi bir gecede milyonlarca kere paylaşıldı. Ertesi sabah fırının önünde kuyruk vardı, altı yüz simit dokuzda bitti. Gökhan kuyruğa bakıp sordu: “Abla, simidimi değil beni görmeye gelmişler. Bu iyi bir şey mi?”"),
"Aralıkta Bora arıyor. Yeni bina açılıyor ve cephede yeni bir reklam var: “Kusursuzluk bir haktır. Şimdi herkes için.” Bebeğin iki gözü de çalışıyor.",
P(function(d){ return !d.itiraf && !d.tanik; }, "“Aslı, seni Optimum biriminin başında istiyorum. Tartışmalı bir yıl geçirdin, biliyorum, ama dürüst olalım, tartışma da reklamdır.”"),
P(function(d){ return d.itiraf || d.tanik; }, "“Aslı, geçmişi geride bırakalım, seni danışman olarak geri istiyorum. Dürüst olalım, tartışma da reklamdır.”")
], secenekler: [
{ t: "İçeriden değiştireceğini düşünerek kabul edersin. Ya da değişen sen olacaksın.", to: "t4", etki: { yasa: 2, terfi: true } },
{ t: "Reddedersin.", to: "t4", etki: { cesitlilik: 1, red: true } },
{ t: "Bir şartla kabul edersin, her çifte sonuçlarla birlikte o durumla yaşayan bir insanın hikâyesi de verilecek.", to: "t4", etki: { cesitlilik: 1, yasa: 1, sart: true } },
{ t: "Ciddi ciddi “Gökhan'a bir sorayım,” dersin.", to: "t4", etki: { sefkat: 1, ozana_sor: true } }
]},

t4: { saat: "Ocak 2043", baslik: "Fırın", metin: [
P(S("t3A"), "Kabul ettin, şimdi on beşinci kattasın. Pencereden görünen reklam artık senin biriminin reklamı."),
P(S("t3B"), "Reddettin. Bora “Pişman olacaksın,” dedi. “Belki,” dedin, telefonu kapatıp fırına yürüdün."),
P(S("t3C"), "Bora güldü, sonra ciddileşti. “Satışları düşürür,” dedi. “Biliyorum,” dedin. Bir hafta düşündü, sonra bir yıllık bir deneme olarak kabul etti."),
P(S("t3D"), "Gökhan simit dizerken seni dinledi. “Abla, o reklamın altında çalışırken mutlu musun?” diye sordu. Cevap veremedin. “O zaman neden bana soruyorsun?”"),
"Ocak geliyor, sabahın dördü. Gökhan sana bir parça hamur uzatıyor. “Hadi abla, bir simit yap.”",
"Hamuru yuvarlıyor, uzatıyor, büküyorsun. Bir ucu kalın, bir ucu ince çıkıyor, susamlar bir tarafa toplanıyor.",
"Gökhan simidi ışığa tutup bakıyor.",
"“Kusurlu,” diyor, “ama güzel. Fırına koyalım mı?”",
"Altı yüz simidin arasında bir tane yamuk simit fırına giriyor ve fırının kapağı kapanıyor.",
"Yirmi dakika sonra kızarmış, çıtır çıtır ve yamuk çıkıyor. Gökhan onu sana veriyor. “Bunu satmayız, bunu sen yersin.”"
], secenekler: [
{ t: "Sabahın dördünde Gökhan'la birlikte simidi yersin.", to: "ks", etki: { sefkat: 1 } },
{ t: "Simidi saklarsın.", to: "ks", etki: { cesitlilik: 1 } },
{ t: "Gökhan'a sorarsın: “Ben kusurlu muyum?”", to: "ks", etki: { cesitlilik: 1, son_soru: true } },
{ t: "Bir hamur daha alıp bir simit daha yaparsın, o da yamuk olur.", to: "ks", etki: { cesitlilik: 1, sefkat: 1 } }
]},

ks: { yonlendir: [
{ if: function(d){ return d.terfi && !d.sart; }, to: "son_kusursuz" },
{ if: function(d){ return d.cocuk === "sagir"; }, to: "son_sessiz" },
{ if: function(d){ return d.ozan_tv || d.cesitlilik >= 7; }, to: "son_ozan" },
{ if: function(d){ return d.cocuk === "duzenlenmis"; }, to: "son_harf" },
{ to: "son_isiten" }
]},

/* ---------- SONLAR ---------- */
son_kusursuz: { son: true, baslik: "On Beşinci Kat", metin: [
P(S("t4A"), "O sabah simidi unlu tezgâhta Gökhan'la birlikte yemiştin, Gökhan senin yerine susamları toplamıştı."),
P(S("t4B"), "Yamuk simidi kâğıda sarıp çantana koymuştun. Bir hafta sonra çantayı açtığında hâlâ oradaydı, taş gibi olmuştu."),
P(S("t4C"), "“Ben kusurlu muyum?” diye sormuştun. Gökhan hamuru yoğururken düşündü. “Evet abla,” dedi, “iyi ki.”"),
P(S("t4D"), "Bir tane daha yapmıştın, o da yamuktu. Gökhan ikisini yan yana dizip “İkiz,” dedi."),
"On beşinci kattan Ankara'nın batısına bakıyorsun, cephede senin biriminin reklamı var.",
"Optimum Paket artık sigorta kapsamında ve senin birimine her ay yüzlerce çift geliyor.",
"İyi bir danışmansın, her şeyi anlatıyorsun. Bir gün bir çift “Siz olsanız hangisini seçerdiniz?” diye soruyor. Hiç düşünmeden dördüncüyü gösteriyorsun, işiten, sağlıklı, puanı yüksek olanı.",
"O gece arabada bunu düşünüyorsun. Hiç düşünmeden göstermiştin. Bu ne zaman olmuştu?",
P(function(d){ return d.ihlal && d.kapatti; }, "Bir çekmecede bir dosya duruyor, Aydın, birinci embriyo. Dosyayı Bora kapattı ve sen bu odadasın."),
"Fırına artık ayda bir gidiyorsun, Gökhan da anlıyor. Bir gün sana bir simit veriyor, yamuk değil, düzgün. “Bu senin,” diyor, “artık yamuk yapmıyorsun.”"
]},

son_sessiz: { son: true, baslik: "Teyzeye Selam", metin: [
P(S("t4A"), "O sabah simidi unlu tezgâhta Gökhan'la birlikte yemiştin, Gökhan senin yerine susamları toplamıştı."),
P(S("t4B"), "Yamuk simidi kâğıda sarıp çantana koymuştun. Bir hafta sonra çantayı açtığında hâlâ oradaydı, taş gibi olmuştu."),
P(S("t4C"), "“Ben kusurlu muyum?” diye sormuştun. Gökhan hamuru yoğururken düşündü. “Evet abla,” dedi, “iyi ki.”"),
P(S("t4D"), "Bir tane daha yapmıştın, o da yamuktu. Gökhan ikisini yan yana dizip “İkiz,” dedi."),
P(function(d){ return d.kol === "ihlal"; }, "Efe üç yaşında, annesinin, babasının, dört kuşağın dilinde cümleler kuruyor, sağırlar kreşine gidiyor. Geçen hafta bir arkadaşının saçını çekmiş, Nehir bunu sana gururla anlattı."),
P(function(d){ return d.kol === "dava"; }, "İlke üç yaşında, elleriyle cümleler kuruyor. Adı bir gazete arşivinde duruyor. Bir gün parkta bir çocuk ona sesle bir şey soracak ve o duymayacak. Bir gün o gazeteleri okuyacak."),
"Doruk'la Nehir her bayram bir fotoğraf gönderiyor. Çocuk hep ellerini kaldırmış, bir işaretin ortasında. Pınar'a ne dediğini soruyorsun, Pınar gülüyor: “Teyzeye selam.”",
P(function(d){ return d.itiraf; }, "Lisansın iptal edildi, iki yıl sonra yeniden başvurabileceksin. Dernekte çalışıyorsun, maaşın yarıya düştü ama uykuların düzeldi."),
"Mahkemedeki karşı oy yazısı aklından çıkmıyor: “Bu çocuklar büyüyünce bu seçimi kimin yaptığını soracaklar.” Soracaklar. İşiten çocuklar da soracak, Optimum'la doğanlar da.",
"Bir gün Efe ya da İlke senin kapını çalıp elleriyle bir şey soracak. Ne cevap vereceğini bilmiyorsun ama cevabı işaret diliyle verebilmek için çalışmaya devam ediyorsun. “Aile” işaretin hâlâ biraz yamuk."
]},

son_ozan: { son: true, baslik: "Arka Oda", metin: [
P(S("t4A"), "O sabah simidi unlu tezgâhta Gökhan'la birlikte yemiştin, Gökhan senin yerine susamları toplamıştı."),
P(S("t4B"), "Yamuk simidi kâğıda sarıp çantana koymuştun. Bir hafta sonra çantayı açtığında hâlâ oradaydı, taş gibi olmuştu."),
P(S("t4C"), "“Ben kusurlu muyum?” diye sormuştun. Gökhan hamuru yoğururken düşündü. “Evet abla,” dedi, “iyi ki.”"),
P(S("t4D"), "Bir tane daha yapmıştın, o da yamuktu. Gökhan ikisini yan yana dizip “İkiz,” dedi."),
"Gökhan'ın programı ya da senin komisyondaki konuşman küçük bir şey başlattı. “Son Nesil Değil” diye bir dernek kuruldu. İlk toplantı fırının arka odasında on iki kişiyle yapıldı, bir yıl sonra bin iki yüz kişi oldular.",
"Yasa değişmedi ama listedeki insanlar artık görünüyor, bir müze gibi değil, bir mahalle gibi.",
"Merkezden ayrıldın. Derneğin danışmanısın, bir de Gökhan'ın fırınında yarı zamanlı çalışıyorsun. Sabahın dördünde kalkıyorsun. Simitlerin hâlâ yamuk çıkıyor ama müşteriler onları ayırıp istiyor.",
"Bir sabah Gökhan hamur yoğururken konuşuyor: “Abla, dileğim kabul olmadı, benim gibi çocuk doğmadı. Ama bak.” Arka odayı gösteriyor, dağınık sandalyeler, çay bardakları, bir işaret dili afişi, yeni yapılmış bir rampa. Rampanın betonuna biri parmağıyla bir G harfi yazmış."
]},

son_harf: { son: true, baslik: "Bir Harf", metin: [
P(S("t4A"), "O sabah simidi unlu tezgâhta Gökhan'la birlikte yemiştin, Gökhan senin yerine susamları toplamıştı."),
P(S("t4B"), "Yamuk simidi kâğıda sarıp çantana koymuştun. Bir hafta sonra çantayı açtığında hâlâ oradaydı, taş gibi olmuştu."),
P(S("t4C"), "“Ben kusurlu muyum?” diye sormuştun. Gökhan hamuru yoğururken düşündü. “Evet abla,” dedi, “iyi ki.”"),
P(S("t4D"), "Bir tane daha yapmıştın, o da yamuktu. Gökhan ikisini yan yana dizip “İkiz,” dedi."),
"Alp iki yaşında, işitiyor ve konuşuyor. Evde elleriyle konuşuyor, parkta sesiyle.",
"Doruk ona her akşam elleriyle masal anlatıyor. Alp bazen ellere bakıyor, bazen dışarıdan gelen bir sese dönüyor. Doruk her seferinde bunu fark ediyor ama masala devam ediyor.",
"Nehir sana yazıyor: “Mutluyuz, gerçekten. Ama bazen gece Doruk'u Alp'in yatağının başında buluyorum. Bir kere ne düşündüğünü sordum. Elleri şöyle dedi: ‘Bir harf. Onun içinde dedem vardı.’”",
P(function(d){ return d.kopya; }, "Değiştirilmemiş dizilim bir dosyada duruyor. Alp büyüyünce isterse bakabilecek, belki de hiç bakmayacak."),
"Bir genetikçi olarak bir harfin bir proteini, bir proteinin bir hücreyi, bir hücrenin bir duyuyu değiştirdiğini biliyorsun. Ama onun dedesini değiştirip değiştirmediğini bilmiyorsun."
]},

son_isiten: { son: true, baslik: "Ilgaz", metin: [
P(S("t4A"), "O sabah simidi unlu tezgâhta Gökhan'la birlikte yemiştin, Gökhan senin yerine susamları toplamıştı."),
P(S("t4B"), "Yamuk simidi kâğıda sarıp çantana koymuştun. Bir hafta sonra çantayı açtığında hâlâ oradaydı, taş gibi olmuştu."),
P(S("t4C"), "“Ben kusurlu muyum?” diye sormuştun. Gökhan hamuru yoğururken düşündü. “Evet abla,” dedi, “iyi ki.”"),
P(S("t4D"), "Bir tane daha yapmıştın, o da yamuktu. Gökhan ikisini yan yana dizip “İkiz,” dedi."),
"Ilgaz üç yaşında ve iki dili de akıcı konuşuyor. Annesine elleriyle masal anlatıyor, kreşte sesiyle şarkı söylüyor. Bazen kimse bakmazken kendi uydurduğu işareti yapıyor, elini kulağına götürüp açıyor.",
"Nehir yazıyor: “Ilgaz artık bize tercümanlık yapıyor, markette, doktorda. Üç yaşında. Annemin bana yaptırdığını ben ona yaptırıyorum. Korkuyorum.”",
"Yasaya uydun. Ilgaz sağlıklı ve çok sevilen bir çocuk.",
"Doruk'un bina çizimi gibi düz imzası aklından çıkmıyor, bir de “Siz o yasanın elisiniz” demesi.",
"Pınar bir gün parkta Ilgaz'ı izlerken sana dönüyor. “Ben de böyleydim,” diyor. “Bak, annesine bakmadan önce etrafa bakıyor, kimse bir şey soruyor mu diye.”"
]}

},

ayna: function(d){
  var out = [];
  var a = d.cesitlilik, b = d.yasa, c = d.sefkat;
  if(a >= b && a >= c) out.push("Çoğu zaman Doruk'la Nehir'in dilinden, Gökhan'ın tarafından baktın.");
  else if(b >= c) out.push("Çoğu zaman kanunun ve merkezin içinde kaldın.");
  else out.push("Çoğu zaman karşındakinin acısına göre davrandın.");
  if(d.ihlal) out.push("Bir sonucu bile bile “belirsiz” diye işaretledin.");
  if(d.terfi) out.push("On beşinci kattaki odayı kabul ettin.");
  if(d.alti_anlatti) out.push("Altıncı embriyoyu anlatırken Gökhan'ı anlattın.");
  if(d.ozan_tv) out.push("Gökhan'la stüdyoya gittin.");
  return out;
},

dipnot: [
{ ad: "Engellilik ve değer", t: "Engellilik çalışmaları, engelliliği bir bedenin eksikliği olarak değil, bir toplumun engelleri olarak tanımlayan “sosyal model”i savunur. Sağır topluluğu kendini bir engelli grubu olarak değil, kendine özgü bir dili ve kültürü olan bir azınlık olarak görür (büyük harfle “Deaf”). 2002'de ABD'de sağır bir çiftin bilinçli olarak sağır bir çocuk sahibi olması bu tartışmayı dünya gündemine taşıdı." },
{ ad: "İyileştirme ve doğallık", t: "Michael Sandel, “Mükemmelliğe Karşı” kitabında genetik iyileştirmenin, çocukları bir “armağan” olarak kabul etmek yerine bir “proje” olarak görmeye yol açtığını savunur. Julian Savulescu ise tam tersini: ebeveynlerin, ellerinden geliyorsa, en iyi yaşam şansına sahip çocuğu seçme ahlaki yükümlülüğü olduğunu (“procreative beneficence”) öne sürer." },
{ ad: "Ebeveyn sevgisi ve açık gelecek", t: "Joel Feinberg, çocukların “açık bir gelecek hakkı” olduğunu söyler: ebeveynler, çocuğun ileride kendi seçimlerini yapabileceği seçenekleri önceden kapatmamalıdır. Sağır bir çocuk seçmek bu hakkı ihlal eder mi? Yoksa işiten bir çocuğu sağır bir ailede büyütmek de başka bir kapıyı kapatır mı?" },
{ ad: "Normalin tanımı", t: "Georges Canguilhem, “normal” ile “patolojik” arasındaki farkın biyolojik değil, değerlere dayalı olduğunu savunmuştur. Bir toplumun neyi “kusur” saydığı, o toplumun neye değer verdiğini gösterir. Down sendromlu doğumların bazı ülkelerde neredeyse sıfıra inmesi, bu sorunun bugün bile tartışıldığı bir gerçektir." }
]
});
})();
