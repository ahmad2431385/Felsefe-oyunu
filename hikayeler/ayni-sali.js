(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "ayni-sali",
baslik: "Aynı Salı",
dunya: "Hayali dünya",
kategoriler: ["Varoluş ve Anlam", "Aile ve Hafıza"],
giris: "Ankara, 12 Mart, salı. Saat 06.47'de alarm çalıyor. Kırk iki yaşında bir sigorta eksperisin; boşanmışsın, on yaşında bir kızın var ve bu akşam okul gösterisine yine geç kalacaksın. Gece yarısı uyuyorsun. Saat 06.47'de alarm çalıyor. 12 Mart, salı. Yeniden. Ve yeniden. Hiçbir şeyin bir sonucunun olmadığı, her şeyin silindiği bir günün içinde, bir insan ne yapar? Sonsuz bir salının hikâyesi.",
kavramlar: ["Ebedi dönüş", "Absürd ve anlam", "Özgürlük ve sonuç", "Bağ kurmak"],
ozet: "Aynı salı gününü yeniden ve yeniden yaşayan bir adam. Hiçbir şeyin sonucu yok, her şey sıfırlanıyor. Peki o zaman ne önemli?",
baslangic: "a1",
durum: { anlam: 0, haz: 0, bag: 0 },

sahneler: {

a1: { saat: "Salı, 06.47", baslik: "06.47", metin: [
"Alarm. 06.47. Telefonun ekranında: Salı, 12 Mart.",
"Adın Tolga, kırk iki yaşındasın. Ankara'da bir sigorta şirketinde hasar eksperisin; kaza yerlerine gidip fotoğraf çekiyor, raporlar yazıyorsun. Kızılay'da bir apartman dairesi, bir oda, bir mutfak. Boşanalı iki yıl oldu.",
"Kahve makinesini çalıştırıyorsun. Fincanı tezgâha koyarken kenarına çarpıyor; kahve tezgâha, oradan gömleğine. Bir küfür. Gömleği değiştiriyorsun; mavi olanı, ütüsüz.",
"Radyoda bir şarkı; seksenlerden, adını hatırlamadığın bir Türkçe pop. Bir kadın sesi: “Bir gün bir yerde...”",
"Telefonuna bir mesaj. Eski eşin Burcu: “Bugün Ela'nın gösterisi. 18.00. Lütfen bu sefer geç kalma. Rolü var; tilki.”",
"Ela on yaşında. Okulunda “Küçük Prens” sahneleniyor; Ela tilki. Geçen yıl bir koro gösterisine geç kalmıştın; Ela son şarkıda seni kapıda görmüş, bir şey söylememişti. Bir şey söylememesi, söylemesinden kötüydü.",
"Saat 07.15. Otobüs 07.30'da. Dışarıda mart güneşi; soğuk, parlak.",
"Telefon bir kez daha titriyor. Nihat Bey: “Tolga, 17.00'de Gölbaşı'nda fabrika yangını. Ekspertiz bugün bitecek, gidecek başka kimse yok.” Gölbaşı'ndan okula akşam trafiğinde en az elli dakika. Ve sen bu işte iki kez “yarın hallederim” demiş, iki kez yazılı uyarı almış bir adamsın."
], secenekler: [
{ t: "Burcu'ya “Geleceğim. Söz.” yazarsın. Gölbaşı'nı araya nasıl sığdıracağını bilmeden.", to: "a2", etki: { bag: 1, soz: true } },
{ t: "Nihat Bey'e dosyayı başkasına vermesini yazarsın. Üçüncü uyarı olabilir; işini riske atarak.", to: "a2", etki: { bag: 1, is_risk: true } },
{ t: "Burcu'ya dürüstçe yazarsın: “Yetişmeye çalışacağım ama söz veremem.”", to: "a2", etki: { anlam: 1, durust: true } },
{ t: "Burcu'ya değil, Ela'ya yazarsın: “Tilki kızım, akşam görüşürüz.” Söz kızına verilmiş olur; annesine değil.", to: "a2", etki: { bag: 1, ela_mesaj: true } }
]},

a2: { saat: "Salı, 06.47", baslik: "Yine", metin: [
P(S("a1A"), "Söz verdin. Saat beşte Gölbaşı'ndaki yanık fabrikanın içindeydin, altı buçukta okulun kapısında. Salona girdiğinde tilki son repliğini söylüyordu. Ela seni gördü; bir şey söylemedi. Burcu da söylemedi. Sözün telefonunda, “okundu” işaretiyle duruyordu."),
P(S("a1B"), "Nihat Bey'e yazdın: “Gölbaşı'na başkası gitsin.” Cevap öğlen geldi, tek kelime: “Konuşacağız.” Gösteriye zamanında gittin ama bütün gösteri boyunca telefonu cebinde sıktın. “Konuşacağız” kelimesi tilkinin repliklerinden daha yüksek sesle çalıyordu kafanda."),
P(S("a1C"), "“Söz veremem,” yazdın. Burcu'nun cevabı tek kelimeydi: “Tamam.” Gölbaşı uzadı; okula yedi buçukta vardın. Salon boşalmıştı. Bir sandalyenin üstünde karton tilki kulakları unutulmuştu."),
P(S("a1D"), "Ela'ya yazdın, Burcu'ya yazmadın. Ela üç tilki emojisiyle cevap verdi. Gölbaşı'ndan okula yetişmek için iki kez kırmızıda geçtin ve salona tam “bağ kurmak” repliğinde girdin. Ela bunu hiç bilmedi. Burcu bildi; bakışından anladın."),
"Gece yarısı uyuyorsun.",
"Alarm. 06.47.",
"Telefonun ekranında: Salı, 12 Mart.",
"Bir hata, diye düşünüyorsun. Telefonun tarihi. Kahve makinesini çalıştırıyorsun. Fincan tezgâhın kenarına çarpıyor. Kahve gömleğine.",
"Radyoda aynı şarkı. “Bir gün bir yerde...”",
"Telefonuna bir mesaj. Burcu: “Bugün Ela'nın gösterisi. 18.00. Lütfen bu sefer geç kalma. Rolü var; tilki.” Ardından Nihat Bey: “Tolga, 17.00'de Gölbaşı'nda fabrika yangını.” Kelimesi kelimesine.",
"Elin titriyor. Mesajı açıyorsun; dünkü cevabın yok. Dün yoktu. Dün hiç olmadı. Ya da bugün, dünün bir kopyası.",
"Pencereye gidiyorsun. Aşağıda aynı kadın aynı köpeği gezdiriyor; köpek aynı ağacın dibinde duruyor. Karşı apartmanda aynı adam aynı balkonda sigara içiyor.",
"Bir şey çok yanlış. Ya da çok doğru; ama kimse sana ne olduğunu söylemiyor.",
"07.15. Otobüse on beş dakika var. Ne yaparsan yap, bunu ilk kez yapıyorsun; ya da öyle sanıyorsun. Bir de şu var: delirmiş olabilirsin. Bunu sana kimse söylemeyecek. Söyleyecek tek kişi sensin."
], secenekler: [
{ t: "Bir deney yaparsın: bugünün olaylarını önceden tahmin edersin.", to: "x_test", etki: { anlam: 1 } },
{ t: "Bir nöroloğa gidersin. Gölbaşı yine yarım kalır; Nihat Bey bu kez affetmeyebilir.", to: "x_doktor", etki: { anlam: 1, doktor: true } },
{ t: "Yatağa dönersin. Bu bir rüyaysa, uyanmanın yolu belki yine uykudan geçer.", to: "a3", etki: { haz: 1, yatak: true } },
{ t: "Burcu'yu arayıp anlatırsın. İki yıl önce velayet duruşmasında avukatı sana “dengesiz” demişti; bu telefon o kelimeyi geri getirebilir.", to: "a3", etki: { bag: 1, burcu_ara: true } }
]},

x_test: { saat: "Salı", baslik: "Tahmin", metin: [
"Bir kâğıda yazıyorsun; dünü hatırladığın kadarıyla.",
"07.30: Otobüs iki dakika geç gelir. Şoför bir yolcuyla tartışır. 08.05: Kızılay'da bir trafik ışığı bozuk. 08.20: Bir bisikletli kurye, bir minibüs, Atatürk Bulvarı. 09.00: Nihat Bey toplantıda bir dosyayı yanlış hatırlar. 12.30: Kantinde mercimek çorbası biter. 15.40: Telefonun şarjı yüzde onda uyarır. 18.10: Gösteriye on dakika geç.",
"Kâğıdı cebine koyuyorsun. Otobüs durağı.",
"07.32. Otobüs geliyor. Şoför bir yolcuyla tartışıyor; aynı kelimeler. 08.05. Trafik ışığı bozuk. Senin kâğıdında bir tik.",
"08.19. Atatürk Bulvarı'ndasın. Bir dakika. Kâğıda bakıyorsun: bisikletli kurye, minibüs.",
"Bir kız. Yirmilerinin başında, sarı bir kurye çantası, kulaklık. Bisikletiyle yanından geçiyor. Bir an göz göze geliyorsunuz.",
"08.20. Bir minibüs. Bir fren sesi. Bir çarpma. Kız havaya kalkıp yere düşüyor.",
"Kâğıttaki tik, elinde, bir yara gibi."
], secenekler: [
{ t: "Kıza koşarsın.", to: "a3", etki: { bag: 1, kosti: true } },
{ t: "Kâğıda bakarsın. Doğru. Hepsi doğru.", to: "a3", etki: { anlam: 1 } },
{ t: "Ambulansı ararsın.", to: "a3", etki: { bag: 1, ambulans: true } },
{ t: "Gözlerini kapatırsın. Biliyordun; ve bir şey yapmadın.", to: "a3", etki: { anlam: 1, bildi: true } }
]},

x_doktor: { saat: "Salı", baslik: "Nörolog", metin: [
"Bir özel hastane, Çankaya. Randevu yok ama acil diyorsun. İki saat bekleme. Bir nörolog: Dr. Pelin Aydın, otuzlarının sonunda, sakin, ilgili.",
"Anlatıyorsun. Dünü, bugünü, kahve fincanını, radyodaki şarkıyı.",
"Dr. Aydın dinliyor. Not alıyor. Sonra bir dizi soru: uyku düzeni, ilaçlar, alkol, stres, son zamanlarda bir kayıp.",
"“Boşandım,” diyorsun. “İki yıl önce.”",
"“Kızınızla ilişkiniz?”",
"Bir an duraksıyorsun. “İyi. Yani... iyi. Bazen geç kalıyorum.”",
"Dr. Aydın bir şey yazıyor. “Tolga Bey, déjà vu yaşamak normaldir. Ama sizin anlattığınız şey yoğun ve kalıcı. Bir MR isteyeceğim. Bir de bir psikiyatriste yönlendireceğim. Bazen beyin, bir şeyle yüzleşmek istemediğinde, bir döngü kurar.”",
"“Peki ya gerçekse?” diyorsun. “Ya gerçekten aynı günü yaşıyorsam?”",
"Dr. Aydın gülümsüyor; nazik, profesyonel. “O zaman,” diyor, “yarın gelin ve bana bugün ne konuştuğumuzu anlatın. Ben hatırlamayacağım. Ama siz hatırlarsanız, belki inanırım.”"
], secenekler: [
{ t: "Yarın gelip ona bugünü anlatmaya karar verirsin.", to: "a3", etki: { anlam: 1, doktor_yarin: true } },
{ t: "Ona bir şey sorarsın: “Siz aynı günü sonsuza kadar yaşasaydınız ne yapardınız?”", to: "a3", etki: { anlam: 1, doktor_soru: true } },
{ t: "Teşekkür edip çıkarsın. Bir doktor bunu çözemez.", to: "a3", etki: { haz: 1 } },
{ t: "Kızından, geç kalmalardan bahsetmeye devam edersin. Bir şey açılıyor.", to: "a3", etki: { bag: 1, acildi: true } }
]},

a3: { saat: "Salı", baslik: "Güvercinler", metin: [
P(S("a2C"), "Yatağa döndün. Perdeleri çektin, uyudun. Öğlen uyandığında telefonunda Nihat Bey'den yedi cevapsız arama, Burcu'dan bir mesaj: “18.00'i unutma.” Gösteriye gitmedin. Gece uyanmak için uyudun. 06.47."),
P(S("a2D"), "Burcu'yu aradın, anlattın. Uzun bir sessizlik. “Tolga, içtin mi?” İçmedin, dedin. “Bir doktora git,” dedi. “Lütfen. Ela seni bu hâlde görmesin.” Telefonu kapattıktan sonra anladın: sesinde endişe değil, korku vardı. Senden korkuyordu."),
P(S("x_testB"), "Kâğıda baktın. Hepsi doğruydu, tek tek, tik tik. Kâğıttaki son satır, “08.20: kurye”, artık bir tahmin değil, bir suç ortaklığıydı. Ambulans uzaklaşırken kâğıdı katlayıp cebine koydun. Bütün gün ağırlığını hissettin."),
P(S("x_testC"), "Ambulansı aradın. Sesin titremedi, çünkü cümleleri önceden biliyordun: Atatürk Bulvarı, kurye, bilinci açık. Operatör sordu: “Bilinci açık olduğunu nereden biliyorsunuz?” Bilmiyordun. Daha yanına gitmemiştin."),
P(S("x_testD"), "Gözlerini kapattın. Fren sesi yine de geldi; gözler kulakları kapatmıyor. Biliyordun ve bir şey yapmadın. Bunu kâğıda yazmadın ama bütün gün, tik attığın her olayda, o yazılmamış satır gözünün önündeydi."),
P(S("x_doktorA"), "Ertesi sabah, yani aynı sabah, yine o hastaneye gittin. Dr. Aydın'a dünkü konuşmayı kelimesi kelimesine anlattın, bitiremediği kitabı bile. Yüzü bir an soldu. Sonra MR istedi ve psikiyatriste yönlendirdi. “İnanıyorum,” demedi. Ama kâğıdı imzalarken eli titriyordu."),
P(S("x_doktorC"), "Teşekkür edip çıktın. Otoparkta, arabanın içinde alnını direksiyona dayadın. Bir doktor bunu çözemezdi. Ama bunu söyleyen sendin ve sen hiçbir şeyi çözemiyordun."),
P(S("x_doktorD"), "Konuşmaya devam ettin: geç kalmalar, koro gösterisi, Ela'nın bir şey söylememesi. Dr. Aydın kalemi bıraktı. “Tolga Bey,” dedi, “belki beyniniz size bir şey söylüyor, belki söylemiyor. Ama bugün kızınızın gösterisi varsa ben sizin yerinizde MR'dan önce oraya giderdim.”"),
P(S("x_testA"), "Kıza koştun. Yerde, bilinci açık, bacağı garip bir açıda. “İyiyim,” dedi, iyi değildi. Ambulans geldi. Adını sordun; Nazlı. Yirmi üç yaşında, kurye, üniversiteyi bırakmış. Ambulans gitti. Bir dakika önce yanından geçmişti."),
P(S("x_doktorB"), "Dr. Aydın bir süre düşündü. “Bilmiyorum,” dedi. “Belki bir kitap okurdum. Hep bitirmek istediğim bir kitap. Her gün bir bölüm. Sonsuza kadar.” Gülümsedi. “Sonra sıkılırdım herhalde.”"),
"Ertesi gün. Ya da aynı gün. 06.47.",
"Üçüncü salı. Dördüncü. Beşinci. Bir haftadır aynı gün.",
"Bir şey fark ediyorsun: her şey aynı ama sen aynı değilsin. Sen hatırlıyorsun. Ve hatırladığın için, her gün biraz farklı davranıyorsun. Ve farklı davrandığın şeyler, gece yarısında, siliniyor.",
"Bir sabah, otobüs durağında, bir bankta yaşlı bir adam. Daha önce fark etmemişsin. Yetmişlerinde, kasketli, bir torba ekmek kırıntısı. Güvercinlere atıyor.",
"Yanına oturuyorsun. Adam sana bakmadan, güvercinlere ekmek atarak konuşuyor:",
"“Bugün hava güzel. Dün de güzeldi. Yarın da güzel olacak.”",
"“Yarın,” diyorsun, “yarın olmayacak.”",
"Adam sana dönüyor. Bir an. Gözleri mavi, sulu, ama keskin. Sonra güvercinlere dönüyor. “Halit,” diyor, elini uzatarak. “Kırk yıldır bu banktayım. Her sabah. Yarın da burada olacağım. Sen?”",
"Saatine bakıyorsun: 08.08. Atatürk Bulvarı buradan on dakika. Bir yanda bilmecelerle konuşan bu yaşlı adam; öbür yanda on iki dakika sonra bir minibüsün önüne çıkacak bir kız. Ona bir şey borçlu değilsin. Ama bunu her sabah kendine yeniden söylemek zorundasın."
], secenekler: [
{ t: "Halit Bey'e her şeyi anlatırsın. 08.20'ye yetişemezsin; Nazlı bu sabah da yalnız düşer.", to: "a4", etki: { bag: 1, halite_anlatti: true } },
{ t: "“Yarın da burada olacağım,” dersin. Bir şaka gibi; ama değil.", to: "a4", etki: { anlam: 1 } },
{ t: "Ondan biraz ekmek alıp sen de güvercinlere atarsın. Saate bakmadan.", to: "a4", etki: { bag: 1, guvercin: true } },
{ t: "Kalkıp Bulvar'a yürürsün. On iki dakika var ve bu sabah bir şey yapmak istiyorsun.", to: "a4", etki: { anlam: 1, bulvar: true } }
]},

a4: { saat: "Salı, 08.20", baslik: "Nazlı", metin: [
P(S("a3B"), "“Yarın da burada olacağım,” dedin. Halit Bey güldü; kısa, öksürüklü bir gülüş. “İyi,” dedi. “Burası yalnız kalmaya gelmez.” O günden sonra her sabah ona aynı cümleyi söyledin ve her sabah aynı gülüşü aldın."),
P(S("a3C"), "Halit Bey kese kâğıdını uzattı. Kırıntıları attın; güvercinler önce kaçtı, sonra geldi. Halit Bey bir şey sormadı. Bazı insanlarla konuşmadan tanışılıyor."),
P(S("a3D"), "Halit Bey'i bankta bırakıp Bulvar'a yürüdün. Arkandan bir şey söylemedi. 08.18'de oradaydın ve o sabah ilk kez ne olacağını bilerek bekledin."),
P(S("a3A"), "Halit Bey dinledi. Bir kez bile şaşırmadı. Sonunda bir avuç ekmek kırıntısı attı. “Demek sen de,” dedi. Ne demek istediğini sordun. Cevap vermedi; bir güvercin omzuna kondu."),
"Her sabah 08.20. Atatürk Bulvarı. Nazlı. Bir minibüs.",
"İlk hafta izledin. Sonra bir sabah, 08.19'da, bir karar.",
"Kaldırımın kenarındasın. Nazlı bisikletiyle geliyor; sarı çanta, kulaklık. Minibüs köşeden dönmek üzere.",
"Bir şey yapabilirsin. Her gün yapabilirsin. Ve her gece silinecek. Bugün onu kurtarsan, yarın, yani bugün, yine aynı minibüs.",
"Ama bugün, şimdi, bir kız bir minibüsün önüne çıkmak üzere.",
"Bir şey daha biliyorsun: bu döngünün içinde ölürsen ne olacağını bilmiyorsun. Belki 06.47'de uyanırsın. Belki uyanmazsın; Ela'nın tilkisi bir babasız akşama çıkar. Minibüs köşeyi dönüyor. Kırk saniye."
], secenekler: [
{ t: "Yola atlarsın. Minibüs seni de alabilir; bu döngüde ölmenin ne demek olduğunu bilmiyorsun.", to: "x_kurtar", etki: { bag: 1, anlam: 1 } },
{ t: "Kaldırımdan bağırırsın: “Dur!” Kulaklık takıyor, duymayabilir. Ama sen kaldırımda kalırsın.", to: "a5", etki: { bag: 1, bagirdi: true } },
{ t: "Kazayı engellemezsin; sonrasında yanında olursun. Bunun için onun düşüşünü bir kez daha izlemen gerekecek.", to: "x_el", etki: { bag: 2 } },
{ t: "Hiçbir şey yapmazsın. Her şey silinecekse, kimseyi kurtarmamanın sana ne yaptığını görmek istiyorsun.", to: "a5", etki: { haz: 1, yapmadi: true } }
]},

x_kurtar: { saat: "Salı, 08.19", baslik: "Bir Saniye", metin: [
"Kaldırımdan atlıyorsun. Nazlı'nın bisikletinin önüne. Nazlı fren yapıyor; bisiklet yan yatıyor; ikiniz de kaldırıma düşüyorsunuz.",
"08.20. Minibüs geçiyor. Bir metre ötede. Hiçbir şey olmadan.",
"Nazlı kulaklığını çıkarıyor, sana bağırıyor: “Ne yapıyorsun be! Deli misin?”",
"Sonra minibüsün geçtiği yere bakıyor. Bir şey anlıyor; yüzü değişiyor. Bir an hiçbir şey söylemiyor.",
"“Ben...” diyor. “Beni gördün mü? Minibüsü?”",
"Evet, diyorsun.",
"Nazlı kalkıyor, bisikletini düzeltiyor. Dizinde bir sıyrık. Sana bakıyor; şaşkın, sonra minnettar.",
"“Teşekkür ederim,” diyor. “Gerçekten. Ben... adım Nazlı.”",
"Biliyorum, diyorsun. Söylememen gerekiyordu.",
"Nazlı bir an sana bakıyor; garip bir adam, sabah sekizde, adını biliyor. Sonra gülüyor. “Kurye çantamda bir şey var, teslim etmem lazım. Ama sana bir çay borçluyum. Yarın? Burada?”",
"Yarın. Yarın burada olmayacak. Yarın yine 08.20, yine minibüs, ve Nazlı seni hiç tanımamış olacak."
], secenekler: [
{ t: "“Yarın,” dersin. Bir yalan; ya da bir dilek.", to: "a5", etki: { bag: 1, yarin_yalan: true } },
{ t: "“Bugün,” dersin. “Şimdi bir çay içelim.”", to: "a5", etki: { bag: 2, cay_nazli: true } },
{ t: "Ona gerçeği söylersin: yarın seni hatırlamayacak.", to: "a5", etki: { anlam: 1, gercek_nazli: true } },
{ t: "Bir şey söylemeden gidersin. Bugün bir hayat kurtardın; yeter.", to: "a5", etki: { anlam: 1 } }
]},

x_el: { saat: "Salı, 08.21", baslik: "El", metin: [
"Kaza oluyor. Her sabahki gibi. Ama bu sabah yanına koşuyorsun.",
"Nazlı yerde. Bilinci açık. Bacağı garip bir açıda. Gözleri korku dolu.",
"Yanına diz çöküyorsun. Elini tutuyorsun. Soğuk, titrek.",
"“Ambulans geliyor,” diyorsun. Biliyorsun; on bir dakika sonra. Her sabah on bir dakika.",
"Nazlı sana bakıyor. “Annem,” diyor. “Annemi arar mısın?” Telefonunu uzatıyor; ekranı kırık.",
"Annesini arıyorsun. Bir kadın sesi, Kayseri aksanıyla. Anlatıyorsun. Kadın bağırıyor, sonra susuyor, sonra “Geliyorum,” diyor. Kayseri'den.",
"On bir dakika. Nazlı'nın elini bırakmıyorsun. Bir şeyler anlatıyor; acıdan, korkudan. Üniversiteyi bırakmış; resim okuyordu. Para yetmemiş. Kuryelik geçici, diyor; iki yıldır geçici.",
"Ambulans geliyor. Sedye. Nazlı elini bırakırken sana bakıyor. “Adın ne?” “Tolga.” “Teşekkürler Tolga.”",
"Gece yarısı bu el, bu on bir dakika, bu anne telefonu silinecek. Ama şu an, bir kaldırımda, bir kızın eli elinde."
], secenekler: [
{ t: "Her sabah bunu yapmaya karar verirsin. On bir dakika.", to: "a5", etki: { bag: 2, her_sabah_el: true } },
{ t: "Yarın onu kurtarmaya karar verirsin.", to: "a5", etki: { anlam: 1 } },
{ t: "Nazlı'nın resimlerini merak edersin. Yarın sorarsın.", to: "a5", etki: { bag: 1, resim: true } },
{ t: "Kaldırımda bir süre oturursun. Ellerine bakarsın.", to: "a5", etki: { anlam: 1 } }
]},

a5: { saat: "Salı, 18.00", baslik: "Tilki", metin: [
P(S("a4B"), "Bağırdın: “Dur!” Nazlı kulaklığından duymadı; minibüs duydu. Şoför bir an sana döndü, fren bir saniye geç kaldı ya da erken, bilemedin. Nazlı yine düştü ama bu kez kolu kırıldı, bacağı değil. Bir saniye, başka bir kemik. Bütün gün bunu düşündün: bir bağırış neyi değiştirir?"),
P(S("x_kurtarA"), "“Yarın,” dedin. Nazlı gülümseyip bisikletine bindi. Arkasından bakarken biliyordun: yarın sabah 08.20'de seni hiç tanımamış olacak ve sen yine bir minibüsün önüne atlayacaksın. Bir sözü tutmanın tek yolu onu sonsuz kez tutmak."),
P(S("x_kurtarB"), "Bir çay içtiniz; Bulvar'daki büfede, kurye çantası ayağınızın dibinde. Nazlı resim okuduğunu, bıraktığını, annesini anlattı. Teslimat kırk dakika gecikti; patronu arayıp bağırdı. “Değdi,” dedi Nazlı telefonu kapatırken. Neye değdiğini ikiniz de söylemediniz."),
P(S("x_kurtarC"), "Ona gerçeği söyledin. Nazlı uzun uzun yüzüne baktı, sonra çantasını omzuna aldı. “Ağabey,” dedi nazikçe, “birini aramamı ister misin?” Bir hayat kurtarmıştın ve sana deliymişsin gibi bakıyordu. İkisi de doğruydu."),
P(S("x_kurtarD"), "Bir şey söylemeden yürüdün. Arkandan “Hey!” diye seslendi; dönmedin. Bir hayat kurtarıp adını bile almadan gitmenin hafifliği. Ve o hafifliğin altında, bir şeyin eksik kaldığı duygusu."),
P(S("x_elA"), "Her sabah bunu yapmaya karar verdin: on bir dakika, bir el, Kayseri'ye bir telefon. Kurtarmak değil, yalnız bırakmamak. Bunun yetip yetmediğini bilmiyorsun."),
P(S("x_elB"), "Yarın onu kurtaracaksın, dedin kendine. Ama bütün gün bir soru peşindeydi: yarın kurtarırsan, bugün tuttuğun el hiç olmamış olacak. Hangisi daha gerçek; kurtarılan bir hayat mı, tutulan bir el mi?"),
P(S("x_elC"), "Bütün gün onun resimlerini düşündün. Işığı nereden alırdı, hangi rengi severdi? Bir insanı bir kazadan fazlası olarak düşünmeyi o sabah 08.21'de öğrendin."),
P(S("x_elD"), "Kaldırımda oturdun, ellerine baktın. Avucunda Nazlı'nın kanından küçük bir leke vardı. Gece yarısı o da silinecekti. Ama şimdi oradaydı ve silmeye kıyamadın."),
"Saat 18.00. Bir ilkokulun spor salonu. Plastik sandalyeler, veliler, telefonlar havada. Sahnede karton bir gezegen, sarı bir fular, bir gül.",
P(function(d){ return d.yapmadi; }, "Sabah bir şey yapmadın. Nazlı'yı izledin; minibüs, çarpma, düşüş. Nasılsa silinecek, dedin. Ve bütün gün o düşüşü düşündün."),
"Bu sefer zamanında geldin. Belki bu salıların ilk kez. Burcu ön sırada; seni görünce şaşırıyor, sonra yanındaki boş sandalyeyi gösteriyor.",
"Perde açılıyor. Küçük Prens; sarı saçlı bir peruk, bir oğlan. Bir gül. Bir kral. Bir tilki.",
"Ela. Turuncu bir kostüm, karton kulaklar, kuyruk. Sahneye çıkıyor ve seni görüyor. Bir an duruyor; repliğini unutacak gibi. Sonra gülümsüyor.",
"“Benimle oynayamazsın,” diyor tilki Küçük Prens'e. “Evcilleştirilmedim.”",
"“Evcilleştirmek ne demek?” diyor Küçük Prens.",
"“Bağ kurmak,” diyor Ela. Sesi küçük ama net. “Şimdilik sen benim için yüz bin küçük çocuktan biri gibisin. Ben de senin için yüz bin tilkiden biriyim. Ama beni evcilleştirirsen, birbirimize ihtiyaç duyarız. Sen benim için dünyada tek olursun.”",
"Seyirciler gülüyor; tatlı bir tilki. Sen gülmüyorsun. Bir şey boğazında.",
"Gece yarısı bu tilki, bu replik, bu gülümseme silinecek. Yarın, yani bugün, yine bir gösteri. Ve Ela yine seni ilk kez görecek.",
"Perde kapanıyor. Alkış. Ela kostümüyle koşarak geliyor: “Baba, eve beraber yürüyelim mi? Kostümle!” Aynı anda Burcu kolunu tutuyor, sesi alçak: “Tolga, bu akşam konuşmamız lazım. Önemli. Bekleyemez.” İkisi aynı anda. İkisini birden yapamazsın."
], secenekler: [
{ t: "Ela'yla yürürsün. Burcu'nun “önemli” dediği şey bu akşam söylenmeden kalır.", to: "a6", etki: { bag: 2, yuruyus: true } },
{ t: "Burcu'yla kahveye gidersin. Ela kostümüyle arka koltuğa biner, camdan sana bakarak.", to: "a6", etki: { bag: 1, burcu_kahve: true } },
{ t: "İkisine de “Başka zaman” der, eve gidip bu günü kâğıda dökersin. Başka zaman olmadığını bilerek.", to: "a6", etki: { anlam: 1, replik: true } },
{ t: "Bir bara gidersin. Nasılsa yarın sıfırlanacak; hiçbir seçimin bedeli olmayacak.", to: "a6", etki: { haz: 1, bar: true } }
]},

a6: { saat: "Otuzuncu salı", baslik: "Otuzuncu Salı", metin: [
P(S("a5B"), "Kahve, Kızılay'da, eskiden birlikte gittiğiniz yerde. Burcu fincanı iki eliyle tutup söyledi: haziranda İzmir'e taşınıyorlardı. Bir iş teklifi. Ela'yla. “Söylemek için doğru zamanı bekliyordum.” Bir şey diyemedin; çünkü haziran hiç gelmeyecekti. Bu düşünce ilk kez bir rahatlama gibi geldi. Bundan utandın."),
P(S("a5C"), "“Başka zaman,” dedin ikisine de. Ela'nın yüzü bir an söndü; Burcu bir şey demedi. Eve gidip günü kâğıda yazdın: kahve, minibüs, tilki. Yazarken bir şeye takıldın: “Başka zaman” cümlesini daha önce de kurmuştun. Nerede, ne zaman; hatırlayamadın."),
P(S("a5A"), "Ela'yla eve kadar yürüdün. Tilki kostümüyle; kulakları başında, kuyruğu sallanarak. Ela bütün yol konuştu; repliklerini, sahne arkasını, Küçük Prens'i oynayan çocuğun burnunu karıştırdığını. Kapıda sana sarıldı. “Geldin,” dedi. Sadece bu."),
P(S("a5D"), "Bir bar, bir şişe, bir yabancı. Gece yarısında hiçbir şey hatırlamıyordun. Sonra 06.47. Hiçbir şey olmamıştı. Ne bir baş ağrısı, ne bir pişmanlık. Hiçbir şeyin bir bedeli yoktu."),
"Otuz salı. Bir ay. Aynı gün.",
"Kahve fincanını artık çarpmıyorsun; elini kaydırıyorsun, fincan düşmüyor. Radyodaki şarkının bütün sözlerini biliyorsun. Nihat Bey'in toplantıda unuttuğu dosyanın numarasını söylüyorsun; Nihat Bey şaşırıyor, her seferinde. Kantinde mercimek çorbası bitmeden önce gidiyorsun.",
"Ve bir şey fark ediyorsun: hiçbir şey sayılmıyor. Ne yaparsan yap, gece yarısında siliniyor. Bir iyilik, bir kötülük, bir öpücük, bir yumruk; hiçbiri ertesi güne geçmiyor.",
"Bu bir hapishane mi, bir özgürlük mü?",
"Bir gece yatakta, 23.58'de, tavana bakıyorsun. İki dakika sonra her şey sıfırlanacak. Ve sen bir karar vermek zorunda olduğunu hissediyorsun; bir sonraki otuz salı için, belki bir sonraki bin salı için.",
"Bir şey olmalı. Bir yol. Bir anlam. Ya da hiçbiri.",
"Ve hangi yolu seçersen seç, bir şeyi bırakacaksın. Bunu şimdiden biliyorsun."
], secenekler: [
{ t: "Hiçbir şeyin bedeli yoksa her şeyi yaparsın. Ne kaybedeceğini bilmiyorsun: belki hiçbir şey, belki kendini.", to: "h1", etki: { haz: 2, kol: "haz" } },
{ t: "Kusursuz bir gün kurmaya çalışırsın: herkesi kurtarmak için her dakikayı hesaplayarak.", to: "m1", etki: { bag: 1, anlam: 1, kol: "mukemmel" } },
{ t: "Bu döngüden çıkmanın yolunu ararsın. Ne pahasına olursa olsun; gösteriyi yeniden ve yeniden kaçırmak pahasına bile.", to: "k1", etki: { anlam: 1, kol: "kacis" } },
{ t: "Her gün bir şey öğrenirsin: bir dil, bir enstrüman, bir insan. Kimsenin değiştiğini bilmeyeceği biri olmayı kabul ederek.", to: "o1", etki: { anlam: 2, kol: "ogren" } }
]},

/* ---------- HAZ KOLU ---------- */
h1: { saat: "Salı 31–100", baslik: "Bedelsiz", metin: [
"Hiçbir şeyin bedeli yok.",
"Bir salı Nihat Bey'e toplantıda yıllardır söylemek istediğin her şeyi söylüyorsun. Odanın ortasında. Herkesin önünde. Nihat Bey'in yüzü kızarıyor; seni kovuyor. Gece yarısı. 06.47. Nihat Bey seni sabah selamlıyor.",
"Bir salı kredi kartının bütün limitini harcıyorsun; bir saat, bir takım elbise, bir restoran. Gece yarısı. 06.47. Limit yerinde.",
"Bir salı Ankara'dan Bodrum'a uçuyorsun; öğlen, denizde. Mart, soğuk; ama denize giriyorsun. Gece yarısı bir otel odasında. 06.47. Kızılay.",
"Bir salı bir kadınla tanışıyorsun; bir barda. Bir gece. Gece yarısı. 06.47. Kadın seni hiç tanımamış.",
"Elli salı. Seksen. Yüz.",
"Bir şey fark ediyorsun; yüzüncü salıda, bir restoranda, önünde bir tabak ki ilk gün bir aylık maaşına mal olmuştu. Tadı yok. Hiçbir şeyin tadı yok. Çünkü hiçbir şeyin bir öncesi ve bir sonrası yok. Bir lokma, bir sonraki lokmaya bağlanmıyor. Bir gece, bir sonraki sabaha.",
"Haz bir zincir ister; bir beklenti, bir hatıra. Senin zincirin her gece kırılıyor."
], secenekler: [
{ t: "Daha fazlasını denersin. Daha büyük, daha tehlikeli.", to: "h2", etki: { haz: 2, daha: true } },
{ t: "Bir gün hiçbir şey yapmazsın. Yatakta kalırsın.", to: "h2", etki: { anlam: 1, yatakta: true } },
{ t: "Halit Bey'in bankına gidersin.", to: "h2", etki: { bag: 1, halit_h: true } },
{ t: "Gösteriye gidersin. Yüz salıdır gitmiyordun.", to: "h2", etki: { bag: 1, gosteri_h: true } }
]},

h2: { saat: "Salı 100–300", baslik: "Boşluk", metin: [
P(S("h1A"), "Daha büyük. Bir arabayı çaldın, Eskişehir yolunda iki yüz kırkla sürdün. Bir gece bir köprünün korkuluğunda yürüdün. Bir sabah bir bankanın veznesine girdin; ne yapacağını bilmeden çıktın. Hepsi silindi. Ve her seferinde, gece yarısından önce, bir şey eksildi içinden. Ne olduğunu bilmiyorsun."),
P(S("h1B"), "Yatakta kaldın. Bütün gün. Tavan. Telefon çaldı: Burcu, Nihat Bey, Burcu, Burcu. Saat 18.10'da bir mesaj: “Gelmedin. Yine.” Gece yarısı. 06.47. Burcu'nun mesajı silindi. Ela'nın hayal kırıklığı silindi. Ama senin hatıran silinmedi."),
P(S("h1C"), "Halit Bey güvercinlere ekmek atıyordu. Seni görünce hiçbir şey sormadı. Yanına oturdun. Bir saat. Halit Bey bir şey dedi: “Her gün aynı güvercinler. Her gün aynı ekmek. Ama ben her gün onlara ilk kez bakıyormuş gibi bakıyorum. Yoksa sıkılırdım.”"),
P(S("h1D"), "Gösteriye gittin. Ela tilki. “Evcilleştirmek ne demek?” “Bağ kurmak.” Yüz salı sonra bu replik bir bıçak gibi. Gösteriden sonra Ela sana koştu. Sen kaçtın; bir şey, bir utanç. Gece yarısı."),
"İki yüz salı. Üç yüz.",
"Bir sabah, 06.47'de, alarmı kapatmıyorsun. Çalıyor. Çalıyor. Kahve makinesini çalıştırmıyorsun. Radyoyu açmıyorsun. Telefona bakmıyorsun.",
"Yatakta yatıyorsun ve bir şey fark ediyorsun: istediğin bir şey kalmadı. Hiçbir şey. Her şeyi denedin; her şey silindi; ve silinen her şeyle birlikte, bir şeyi istemenin kendisi de silindi.",
"Her şey serbest. Hiçbir kapı kilitli değil, hiçbir yasak ertesi sabaha kalmıyor. Ve her şey serbest olunca, hiçbir şey istenecek kadar değerli değil."
], secenekler: [
{ t: "Bir şeyi yeniden istemeyi denersin; küçük bir şeyi. Bir çay. Bir güneş.", to: "h3", etki: { anlam: 1, kucuk: true } },
{ t: "Halit Bey'e gidip ona ne yapacağını sorarsın.", to: "o2", etki: { bag: 1, kol: "ogren", haz_halit: true } },
{ t: "Bu boşlukta kalırsın. Bu da bir şey.", to: "h3", etki: { haz: 1, bosluk: true } },
{ t: "Ela'yı okuldan alırsın; gösteriden önce, öğlen. Ona bir şey sorarsın.", to: "h3", etki: { bag: 2, ela_ogle: true } }
]},

h3: { saat: "Salı 300+", baslik: "Bir Çay", metin: [
P(S("h2C"), "Boşlukta kaldın. Günlerce. Hiçbir şey istemedin ve bunun bir dinginlik olmasını bekledin; olmadı. Bir sabah, sebepsiz, bir çay bahçesinin önünden geçerken durdun."),
P(S("h2A"), "Bir sabah Kızılay'da bir çay bahçesine oturdun. Bir çay. Güneş. Bir güvercin. Çay sıcaktı; bunu fark ettin. Üç yüz salıdır hiçbir şeyin sıcak olduğunu fark etmemiştin. Bir yudum. Bir yudum daha. Bir şey, küçük, bir yerde, kıpırdadı."),
P(S("h2D"), "Ela'yı öğlen okuldan aldın; bir öğretmene bir yalan söyleyip. Ela şaşkındı; babası hiç öğlen gelmezdi. Bir pastaneye gittiniz. Ela bir profiterol yedi; yüzü çikolata oldu. Sordun: “Ela, aynı günü hep yaşasan ne yapardın?” Ela düşündü. “Her gün sana bir şey öğretirdim,” dedi. “Sen hep unutuyorsun çünkü.”"),
"Haz bitti. Ya da hazzın içindeki o açlık bitti; her şeyi tüketme açlığı.",
"Ve geride bir şey kaldı ki adını koyamıyorsun. Bir yorgunluk değil. Bir sessizlik. Bir boşluk; ama içinde bir yer açılmış, küçük, bir çay bardağı kadar, bir profiterol kadar.",
"Bir şey istemek için bir şeyin bir sonucu olmalı, diye düşünüyordun. Belki yanılıyordun. Belki bir şey istemek için yalnızca o şeyin orada olması yeter; şimdi, bu an, bu çayın sıcaklığı.",
"Ama bir an bir zincir değil. Ve sen zincirini kaybettin; üç yüz salı boyunca, kendi elinle, her gece biraz daha."
], secenekler: [
{ t: "Bundan sonra her salıyı tek bir şeye adarsın: Ela'ya.", to: "t1", etki: { bag: 2, ela_adadi: true } },
{ t: "Halit Bey'in bankına gidip her sabah onunla oturmaya başlarsın.", to: "t1", etki: { bag: 1, anlam: 1, halit_sabah: true } },
{ t: "Haza geri dönersin; bu kez daha yavaş, daha dikkatli.", to: "t1", etki: { haz: 1, yavas_haz: true } },
{ t: "Bir şey yapmazsın. Bir çay. Her gün aynı çay.", to: "t1", etki: { anlam: 1, cay_her: true } }
]},

/* ---------- MÜKEMMEL KOLU ---------- */
m1: { saat: "Salı 31–60", baslik: "Kusursuz Gün", metin: [
"Bir plan yapıyorsun. Bir kâğıda; dakika dakika.",
"06.47: Alarm. Fincan düşmesin. 07.15: Burcu'ya cevap: “Geleceğim.” 07.30: Otobüs; şoförün tartıştığı yolcuyu sakinleştir. 08.05: Trafik ışığı; bir yaşlı kadını karşıya geçir. 08.19: Nazlı. 09.00: Nihat Bey'in dosyası. 12.30: Kantinde son mercimek çorbasını yanındaki stajyere ver. 15.40: Telefonu şarja tak. 17.30: Gösteri için çiçek. 18.00: Ön sıra.",
"Otuz salı boyunca deniyorsun. Her gün bir şey ters gidiyor. Bir gün otobüs kaçıyor. Bir gün yaşlı kadın seni tanımadığı için korkuyor. Bir gün Nazlı'yı kurtarırken sen düşüyorsun; kolun kırılıyor; gösteriye alçıyla gidiyorsun.",
"Ama her gün bir şey öğreniyorsun. Bir saniye erken, bir adım sola, bir kelime farklı.",
"Altmışıncı salıda kusursuz bir gün. Her şey yerinde. Nazlı sağ. Yaşlı kadın karşıda. Nihat Bey memnun. Stajyer çorbasını içti. Ela'ya bir buket papatya. Ön sıra. Ela'nın tilkisi; ve gösteriden sonra Ela'nın sarılması.",
"Gece 23.58. Yatakta. Mutlusun. Bir gün; kusursuz, eksiksiz.",
"23.59. Belki şimdi bitecek. Belki bu döngü bunun için. Kusursuz bir gün."
], secenekler: [
{ t: "Gözlerini kapatıp beklersin.", to: "m2", etki: { anlam: 1 } },
{ t: "Kusursuz günün bir listesini yazarsın; sonsuza kadar tekrarlamak için.", to: "m2", etki: { anlam: 1, liste: true } },
{ t: "Burcu'yu ararsın; bu gece, 23.59'da, ona bir şey söylemek için.", to: "m2", etki: { bag: 1, burcu_gece: true } },
{ t: "Ela'nın sarılışını düşünürsün. Bir şey yanlış. Ne olduğunu bilmiyorsun.", to: "m2", etki: { bag: 1, yanlis: true } }
]},

m2: { saat: "Salı 61–200", baslik: "Bedel", metin: [
P(S("m1A"), "Gözlerini kapatıp bekledin. 23.59. Bir an karanlık. Sonra alarm."),
P(S("m1B"), "Kusursuz günün listesini yazdın: bir sayfa, küçük harflerle. Gece yarısında kâğıt silindi ama liste kafandaydı, her satırıyla."),
P(S("m1C"), "23.59'da Burcu'yu aradın. Uykulu bir ses: “Tolga? Ne oldu?” “Teşekkür ederim,” dedin, “Ela'yı böyle büyüttüğün için.” Bir sessizlik. Cevap gelmeden saat döndü."),
P(S("m1D"), "Ela'nın sarılışını düşündün. Sıkıydı ama kısaydı; seni bir yerden tanıyor ama neresi olduğunu bilmiyormuş gibi. Kusursuz günü yaşayan sendin. Ela yalnızca bir babanın her şeyi doğru yaptığı bir akşamı yaşamıştı. Bir şey eksikti; adını koyamadın."),
"06.47. Salı. 12 Mart.",
"Kusursuz gün yetmedi. Döngü bitmedi.",
"Ama bir şey fark ediyorsun; altmış birinci salıda, kusursuz günü yeniden yaşarken. Nazlı'yı kurtardığın sabah, minibüs onu ıskalayıp yoluna devam ediyor. Ve 08.35'te, iki sokak ötede, bir başka kazaya karışıyor. Bir yaşlı adam. Daha önce hiç görmediğin. Çünkü daha önce minibüs Nazlı'ya çarpıp durmuştu.",
"Kontrol ediyorsun. Ertesi gün; yani aynı gün. Nazlı'yı kurtarıyorsun; minibüs devam ediyor; 08.35, yaşlı adam. Bir başka gün Nazlı'yı kurtarmıyorsun; minibüs Nazlı'ya çarpıyor, duruyor; yaşlı adam yoluna devam ediyor, hiçbir şey bilmeden.",
"Bir kurtarış, bir başka kazayı doğuruyor. Bir iyilik, bir başka yerde bir bedel.",
"Yaşlı adamı da kurtarmaya çalışıyorsun. Bir gün başarıyorsun; minibüsü iki kez durduruyorsun. Ve o gün, gösteri saatinde, minibüs şoförü, bütün gün yaşadığı tuhaflıklardan sinirli, bir okulun önünde, bir velinin arabasına çarpıyor. Ela'nın okulunun önünde.",
"Yüz salı. İki yüz. Her kurtarış bir başka yerde bir yara açıyor. Bir dünya, bir terazi gibi; bir kefesini kaldırınca öbürü iniyor.",
"Kusursuz bir gün yok. Yalnızca hangi kusuru seçeceğin var."
], secenekler: [
{ t: "Daha büyük bir plan yaparsın; bütün Ankara'yı hesaba katan.", to: "m3", etki: { anlam: 1, buyuk_plan: true } },
{ t: "Yalnızca Nazlı'yı kurtarmaya devam edersin. Önündekini.", to: "m3", etki: { bag: 1, onundeki: true } },
{ t: "Hiç kimseyi kurtarmamaya karar verirsin. Dünya kendi kusurlarıyla.", to: "m3", etki: { haz: 1, kurtarmama: true } },
{ t: "Halit Bey'e gidip ona bu terazinin ne olduğunu sorarsın.", to: "o2", etki: { bag: 1, kol: "ogren", mukemmel_halit: true } }
]},

m3: { saat: "Salı 200–500", baslik: "Kafes", metin: [
P(S("m2A"), "Büyük bir plan. Bir harita, bir defter, yüzlerce isim. Kızılay'ın bütün sabahı; her minibüs, her yaya, her trafik ışığı. Yüz salı boyunca haritayı geliştirdin. Bir gün neredeyse kusursuzdu; yalnızca bir kedi, bir apartmanın önünde. Bir kedi. Ertesi gün kediyi kurtardın; bir çocuk ağladı."),
P(S("m2B"), "Yalnızca Nazlı. Her sabah. Ve 08.35'te iki sokak ötede bir yaşlı adam; her sabah. Onu tanımaya başladın; bir gün gidip yüzüne baktın. Yetmişlerinde, bir bastonla, bir eczaneye gidiyor. Adı Rıfat. Senin kurtardığın Nazlı yüzünden, her sabah, bir kaldırıma düşüyor. Bunu bilmeden."),
P(S("m2C"), "Kimseyi kurtarmadın. Nazlı her sabah düştü; Rıfat Bey her sabah eczaneye vardı. Dünya kendi kusurlarıyla dönüyordu. Ve sen, her sabah, bir kaldırımda durup izledin. Kurtarmamak, bir karar. Her sabah verilen."),
"Beş yüz salı. Bir buçuk yıl, aynı günde.",
"Kusursuz bir günün peşinde bir kafes kurdun. Her dakikası planlanmış, her adımı hesaplanmış, her kurtarış bir başka hesabın içinde. Bir gün fark ediyorsun: artık hiçbir şeyi yaşamıyorsun. Yalnızca yönetiyorsun.",
"Gösteride Ela tilki. “Bağ kurmak.” Sen ön sıradasın; ama aklında 08.35, Rıfat Bey, minibüs, harita. Ela'nın gözlerine bakmıyorsun; saatine bakıyorsun.",
"Gösteriden sonra Ela sana koşuyor. “Baba, sen beni hiç dinlemedin.”",
"Bu cümleyi beş yüz salıdır ilk kez duyuyorsun. Çünkü beş yüz salıdır ilk kez, gerçekten, dinlemedin."
], secenekler: [
{ t: "Haritayı yırtarsın.", to: "t1", etki: { bag: 2, yirtti: true } },
{ t: "Ela'ya özür dilersin ve onu dinlersin; bütün akşam.", to: "t1", etki: { bag: 2, dinledi: true } },
{ t: "Haritayı geliştirmeye devam edersin; bir gün kusursuz olacak.", to: "t1", etki: { anlam: 1, devam: true } },
{ t: "Halit Bey'in bankına gidersin. Bir şey bırakman gerek.", to: "t1", etki: { bag: 1, anlam: 1, halit_m: true } }
]},

/* ---------- KAÇIŞ KOLU ---------- */
k1: { saat: "Salı 31–80", baslik: "Uyanık", metin: [
"Bu döngünün bir kuralı var: gece yarısı. 23.59'da her şey sıfırlanıyor. Belki uyumazsan?",
"Bir salı uyumuyorsun. Kahve, bir film, bir kitap, soğuk duş. 23.55. 23.57. 23.59. Gözlerin açık, tavana bakıyorsun.",
"00.00.",
"Bir an karanlık; gözlerini kapatmadığın hâlde. Sonra alarm. 06.47. Salı.",
"Bir başka salı Ankara'dan çıkıyorsun. Bir araba kiralıyorsun; kuzeye. Sinop. Deniz. Gece yarısında Sinop'ta bir otel odasındasın. 23.59.",
"06.47. Kızılay. Kendi yatağın.",
"Bir başka salı bir uçağa biniyorsun. İstanbul, sonra Londra. Saat dilimi. Belki gece yarısı başka bir yerde başka bir zamanda olur. Londra saatiyle 21.59'da, Ankara saatiyle 23.59'da; bir havalimanı koltuğunda.",
"06.47. Kızılay.",
"Elli deneme. Seksen. Her yol aynı yatağa çıkıyor. Bir döngü, coğrafya bilmiyor."
], secenekler: [
{ t: "Bir uyku kliniğine gidip uykunu izletirsin.", to: "k2", etki: { anlam: 1, klinik: true } },
{ t: "Döngünün nedenini aramaya başlarsın: 12 Mart'ta ne oldu?", to: "k2", etki: { anlam: 1, neden: true } },
{ t: "Bir din adamına gidersin. Belki bir lanet; belki bir sınav.", to: "k2", etki: { anlam: 1, din: true } },
{ t: "Halit Bey'e gidip ona sorarsın: o da mı?", to: "o2", etki: { bag: 1, kol: "ogren", kacis_halit: true } }
]},

k2: { saat: "Salı 80–200", baslik: "Neden", metin: [
P(S("k1B"), "Eski e-postalarını, telefondaki fotoğrafları, takvimi taradın. Bir kapı olacak bir tarih arıyordun."),
P(S("k1A"), "Uyku kliniği. Elektrotlar, kameralar, bir gece. Bir teknisyen seni izledi. 23.59'da monitörlere baktı; sonra 06.47'de baktın. Kendi yatağın. Klinikteki teknisyen seni hiç görmemişti."),
P(S("k1C"), "Bir caminin imamı seni dinledi. Uzun süre. Sonra dedi ki: “Belki bu bir sınav değil evladım. Belki bir fırsat. Herkes ‘bir gün daha’ ister. Sana verilmiş.” Bir gün daha. Sonsuz kez."),
"12 Mart. Ne oldu bu tarihte?",
"Düşünüyorsun. İki yıl önce 12 Mart'ta boşanma davası. Hayır; o 14'üydü. Babanın ölüm yıldönümü; hayır, o eylülde. Ela'nın doğum günü; hayır, haziranda.",
"Sonra bir şey hatırlıyorsun. Bir yıl önce, 11 Mart gecesi. Ela seni aramıştı; gece on bir. “Baba, yarın gösteri provası var, gelir misin?” “Yarın işim var kızım.” “Ama baba...” “Başka zaman.” Telefonu kapatmıştın. Bir yıl önce.",
"Bu bir neden mi? Bir döngü, bir telefon yüzünden mi kurulur? Bilmiyorsun. Ama o gece kurduğun cümle, “Başka zaman,” şimdi bir duvar gibi önünde. Başka zaman yok. Yalnızca bu zaman var. Sonsuz kez.",
"Belki döngünün bir nedeni yok. Belki sen bir neden arıyorsun çünkü nedensiz bir şeye katlanamıyorsun."
], secenekler: [
{ t: "Bu salı Ela'yı provaya götürürsün. Bir yıl önce gitmediğin gibi değil.", to: "k3", etki: { bag: 2, prova: true } },
{ t: "Nedensizliği kabul edersin. Bir döngü; o kadar.", to: "k3", etki: { anlam: 1, nedensiz: true } },
{ t: "Kaçmaya devam edersin. Bir yol olmalı.", to: "k3", etki: { anlam: 1, kacmaya: true } },
{ t: "Yatağa uzanıp bir gün boyunca hiç kalkmazsın.", to: "k3", etki: { haz: 1, dip: true } }
]},

k3: { saat: "Salı 200+", baslik: "Dip", metin: [
P(S("k2B"), "Nedensizliği kabul ettin; ya da etmeye çalıştın. Bir döngü, o kadar. Ama bir şeyi kabul etmekle ona razı olmak arasında bir mesafe vardı ve sen o mesafede yaşadın."),
P(S("k2C"), "Kaçmaya devam ettin: Van, Kars, bir gemi, bir tren. Her gece yarısı Kızılay. Bir gece bir tren istasyonunda, 23.58'de ağlamaya başladın; yanındaki yaşlı kadın sana bir simit uzattı."),
P(S("k2A"), "Ela'yı provaya götürdün; öğlen, okul izin verdi. Ela şaşkındı; sonra mutlu. Prova bir saat sürdü. Ela repliklerini bir kâğıttan okuyordu; “Bağ kurmak” kelimesinde takıldı. Sen fısıldadın. Ela sana baktı: “Nasıl biliyorsun?” Bir şey söylemedin. Gece yarısı. 06.47. Döngü bitmedi. Ama bir şey değişti; sen."),
P(S("k2D"), "Bir gün yatakta kaldın. Telefon çaldı; açmadın. Akşam bir mesaj: “Gelmedin.” Gece yarısı. 06.47. Bir gün daha yatakta kaldın. Ve bir gün daha. Bir hafta. Bir ay. Döngü bir hapishane değildi artık; bir mezardı. Ve sen bir mezarın içinde, her sabah, alarm sesiyle dirildin."),
"Bir sabah, 06.47'de, alarmı kapatıp tavana bakarken bir şey düşünüyorsun.",
"Çocukken dedenin anlattığı bir masal: bir kayayı bir tepeye sonsuza kadar itmeye mahkûm edilmiş bir adam. Kaya her seferinde yuvarlanıyor; adam her seferinde iniyor ve yeniden itiyor. Masalın sonunda deden gülümserdi: “Bence o adam mutluydu.”",
"Mutlu. Bir kayayı sonsuza kadar iten bir adam. Neden mutlu? Belki çünkü kaya onun. Çünkü itmek onun. Çünkü bir anlam aramayı bıraktığında, itmenin kendisi bir şey olur.",
"Kayanın tepeden yuvarlandığı an. Adamın aşağı inerken boş elleriyle yürüdüğü o an. Bir an; bir nefes.",
"Senin kayan bir salı. Senin tepen gece yarısı. Ve her sabah 06.47, aşağı inişin."
], secenekler: [
{ t: "Kalkıp kahveni yaparsın. Fincan düşmüyor.", to: "t1", etki: { anlam: 2, sisifos: true } },
{ t: "Kalkıp Halit Bey'in bankına yürürsün.", to: "t1", etki: { bag: 1, anlam: 1, halit_k: true } },
{ t: "Kalkıp Ela'ya bir mesaj atarsın: “Akşam görüşürüz tilki.”", to: "t1", etki: { bag: 2, mesaj_k: true } },
{ t: "Kalkmazsın. Henüz değil.", to: "t1", etki: { haz: 1, kalkmadi: true } }
]},

/* ---------- ÖĞRENME KOLU ---------- */
o1: { saat: "Salı 31–300", baslik: "Piyano", metin: [
"Her gün bir şey öğreneceksin. Bir gün, her şey silinse de, senin içinde kalan şey.",
"Kızılay'da bir müzik kursu. Bir piyano öğretmeni: Sevgi Hanım, altmışlarında, emekli konservatuvar hocası. Her salı ilk derse geliyorsun. Her salı Sevgi Hanım seni ilk kez görüyor. “Hiç piyano çaldınız mı?” “Hayır.”",
"Ama çalıyorsun. Her salı biraz daha iyi. Sevgi Hanım her salı şaşırıyor; ilk derste bu kadar iyi çalan bir öğrenci görmemiş.",
"Elli salı sonra bir Chopin noktürnü. Sevgi Hanım dinliyor; gözleri doluyor. “Siz kimsiniz?” diyor. “Bunu kim öğretti size?”",
"Siz, demek istiyorsun. Siz öğrettiniz; elli kez, her seferinde ilk kez.",
"Piyanodan sonra Arapça; bir dil kursu. Sonra resim; Nazlı'nın bıraktığı yerden. Sonra kalın bir kitap; her gün kütüphanede elli sayfa. Sonra insanlar.",
"Kızılay'daki herkesi tanımaya başlıyorsun. Otobüs şoförünün kızı hasta. Trafik ışığındaki yaşlı kadın, oğlunu bekliyor; oğlu Almanya'da. Kantindeki stajyer bir şair. Nihat Bey'in dosyayı unutmasının nedeni; karısının teşhisi, dün akşam.",
"Bir günün içinde, bin hayat."
], secenekler: [
{ t: "Nihat Bey'e karısını sorarsın.", to: "o2", etki: { bag: 2, nihat: true } },
{ t: "Piyanoda Ela için bir şarkı yazarsın.", to: "o2", etki: { bag: 1, anlam: 1, sarki: true } },
{ t: "Nazlı'ya resim yapmayı yeniden başlatmasını söylersin; her sabah, bir cümleyle.", to: "o2", etki: { bag: 1, nazli_resim: true } },
{ t: "Halit Bey'in hikâyesini öğrenmeye karar verirsin.", to: "o2", etki: { anlam: 1, halit_ogren: true } }
]},

o2: { saat: "Bir sabah", baslik: "Halit", metin: [
P(S("o1C"), "Her sabah 08.20'den önce Nazlı'yı durdurup tek bir cümle söyledin: “Resim yapmayı bırakma.” Her sabah şaşırdı; bazı sabahlar güldü, bazıları kızdı. Bir sabah durup sordu: “Nereden biliyorsun?”"),
P(S("o1D"), "Halit Bey'in hikâyesini öğrenmeye karar verdin. Ama onu acele ettiremezdin; o hikâye bir salıya sığmazdı. Her sabah yanına biraz daha oturdun."),
P(function(d){ return d.haz_halit || d.mukemmel_halit || d.kacis_halit; }, "Halit Bey'in bankına gittin. Bütün o salılardan sonra; yorgun, boş, bir şey arayarak. Halit Bey güvercinlere ekmek atıyordu. Seni görünce yanındaki yeri gösterdi."),
P(S("o1A"), "Nihat Bey'e karısını sordun. Toplantıdan sonra, koridorda. Nihat Bey sana uzun uzun baktı, sonra ağladı; ofisin koridorunda, kırk yıllık bir müdür. Bir saat konuştunuz. Ertesi salı Nihat Bey seni hatırlamıyordu. Ama sen biliyordun ki her salı, bir saatliğine, birine ihtiyacı var."),
P(S("o1B"), "Bir şarkı. Basit, piyano için. Ela'nın tilki repliğinin melodisi. Her salı biraz daha. Bir gün bitti. Gösteriden sonra Ela'ya çaldın; okulun salonundaki eski piyanoda. Ela dinledi. “Bu benim şarkım mı?” Evet. Ela ağladı. Gece yarısı."),
"Halit Bey'in bankı. Bir sabah. Yanına oturuyorsun.",
"“Halit Bey,” diyorsun, “size bir şey soracağım. Siz de mi aynı günü yaşıyorsunuz?”",
"Halit Bey güvercinlere ekmek atıyor. Uzun süre bir şey söylemiyor.",
"“Hayır evlat,” diyor sonunda. “Ben her gün yeni bir gün yaşıyorum. Takvimin yaprağı düşüyor. Ama kırk yıldır bu banktayım. Aynı saatte. Aynı ekmekle. Aynı güvercinlere. Karım öldüğünden beri.”",
"Bir süre susuyor. “Karım her sabah buraya gelirdi. Güvercinleri severdi. O öldü; ben devam ettim. İlk yıl her gün ağladım. İkinci yıl ağlamadım ve kendime kızdım. Onuncu yıl bir şey fark ettim: her gün aynı şeyi yapıyorum ve her gün farklı. Güvercinler farklı. Ekmek farklı. Ben farklıyım.”",
"Sana dönüyor. “Sen aynı günü yaşıyorsun diyorsun. Belki öyle. Ama sen aynı mısın?”"
], secenekler: [
{ t: "“Hayır,” dersin. “Ben her gün değişiyorum.”", to: "o3", etki: { anlam: 2 } },
{ t: "Halit Bey'e karısını anlatmasını istersin.", to: "o3", etki: { bag: 2, halit_es: true } },
{ t: "“Bu döngüden çıkmak istiyorum,” dersin.", to: "o3", etki: { anlam: 1, cikmak: true } },
{ t: "Bir avuç ekmek alıp güvercinlere atarsın. Bir şey söylemeden.", to: "o3", etki: { bag: 1, ekmek: true } }
]},

o3: { saat: "Bininci salı", baslik: "Bin Salı", metin: [
P(S("o2A"), "“Hayır,” demiştin, “ben her gün değişiyorum.” Halit Bey başını sallamıştı: “O zaman aynı günü yaşamıyorsun evlat. Sadece aynı takvimi.”"),
P(S("o2C"), "“Çıkmak istiyorum,” demiştin. Halit Bey güvercinlere bakmıştı: “Ben de kırk yıl çıkmak istedim. Sonra içeride kalmanın da bir yol olduğunu gördüm.”"),
P(S("o2D"), "Ekmek attın; Halit Bey de attı. Bir saat boyunca konuşmadınız. O sabahtan sonra bir şey değişti; neyin değiştiğini söyleyemezsin."),
P(S("o2B"), "Halit Bey anlattı. Karısının adı Nermin'di. Bir terzi. Kırk iki yıl evli kaldılar. Her sabah bu banka gelirlerdi; o güvercinlere, o gazeteye. “Bazen düşünüyorum,” dedi Halit Bey, “o kırk iki yılı yeniden yaşamak ister miyim? Aynen? Kavgalarıyla, hastalığıyla, ölümüyle? Ve her seferinde evet diyorum. Evet. Bir kez daha. Sonsuz kez.”"),
"Bininci salı. Belki. Saymayı bıraktın.",
"Piyano çalıyorsun; Sevgi Hanım her salı ağlıyor. Arapça konuşuyorsun; kursta Suriyeli bir öğretmen var, Hiba Hanım, seninle Halep'i konuşuyor. Resim yapıyorsun; Nazlı'nın tarzında, Nazlı'ya her sabah bir tanesini gösteriyorsun ve Nazlı her sabah resim yapmaya karar veriyor.",
"Kızılay'daki herkesi tanıyorsun. Kimse seni tanımıyor.",
"Ve bu, garip bir şekilde, bir yalnızlık değil. Bir şey. Sen bir şehrin hafızası oldun; bir günün içinde bin hayatı taşıyan bir hafıza. Kimse bilmiyor. Bilmesi gerekmiyor.",
"Bir akşam gösteriden sonra Ela sana bir şey soruyor. Bininci kez; ya da ilk kez.",
"“Baba, sen nasıl bu kadar çok şey biliyorsun? Geçen hafta piyano bilmiyordun.”",
"Geçen hafta. Ela için geçen hafta. Senin için bin salı."
], secenekler: [
{ t: "“Seni dinleyerek öğrendim,” dersin.", to: "t1", etki: { bag: 2 } },
{ t: "“Bir gün anlatacağım,” dersin.", to: "t1", etki: { anlam: 1 } },
{ t: "Ela'ya da bir şey öğretmeyi teklif edersin: piyano.", to: "t1", etki: { bag: 1, anlam: 1, ela_piyano: true } },
{ t: "Bir şey söylemez, onu kucaklarsın.", to: "t1", etki: { bag: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Salı", baslik: "Sayısız", metin: [
P(S("h3A"), "Her salıyı Ela'ya adadın: öğlen okul çıkışı, pastane, akşam gösteri, eve yürüyüş. Ela her gün seni ilk kez böyle görüyordu; sen her gün onu biraz daha tanıyordun. Eşit olmayan bir bağ; ama bir bağ."),
P(S("h3B"), "Her sabah Halit Bey'in bankında oturdun. Çoğu sabah konuşmadınız. Güvercinler, ekmek, mart güneşi. Haz değildi bu; başka bir şeydi."),
P(S("h3C"), "Haza döndün ama yavaşça. Bir yemeği bir saatte yedin, bir şarkıyı yirmi kez dinledin. Artık tüketmiyordun, tadıyordun; ya da tatmayı yeniden öğreniyordun."),
P(S("h3D"), "Her gün aynı çay bahçesi, aynı masa, aynı çay. Garson seni her gün ilk kez görüyordu; sen her gün onun nasırlı ellerine biraz daha dikkatle bakıyordun."),
P(S("m3A"), "Haritayı yırttın. Yüz salılık hesap, yüzlerce isim, parça parça çöpe. Gece yarısı zaten silinecekti. Ama yırtmak senin elindeydi."),
P(S("m3B"), "O akşam Ela'yı dinledin: pizzacıda, eve dönerken. Beş yüz salıdır duymadığın şeyler: sınıfta bir kızla küs olduğu, tilki kostümünü sevmediği, aslında gülü oynamak istediği. Beş yüz salı, ve kızını tanımamışsın."),
P(S("m3C"), "Haritayı geliştirmeye devam ettin. Ama Ela'nın cümlesi haritanın her köşesine sızdı. Bir gün kenara küçük harflerle yazdın: 18.00 – dinle. Sonra sildin. Sonra yeniden yazdın."),
P(S("m3D"), "Halit Bey'in bankına gidip haritayı yanına koydun. Baktı, bir şey sormadı. “Ağır,” dedi yalnızca. Haritayı orada bıraktın; bir güvercin üstüne kondu."),
P(S("k3A"), "Kalktın, kahveni yaptın. Fincan düşmedi. Küçük bir şey; ama sayısız sabahtan sonra ilk kez, düşürmemeyi seçtiğini hissettin."),
P(S("k3B"), "Halit Bey'in bankına yürüdün. Seni görünce yanını gösterdi; tanımadığı bir adama. Oturdun. Kayayı itmek belki de bir banka yürümekti."),
P(S("k3C"), "Ela'ya yazdın: “Akşam görüşürüz tilki.” Bir dakika sonra üç tilki emojisi geldi. Sayısız salıdır her mesajına aynı cevabı veriyordu ve bunu ilk kez fark ettin. Belki her seferinde aynı sevinçle."),
P(S("k3D"), "Kalkmadın. Bir gün daha. Sonra bir sabah, sebepsiz, kalktın. Kaya oradaydı, tepe oradaydı; bir şey yapmak gerekiyordu."),
P(S("o3A"), "“Seni dinleyerek öğrendim,” dedin. Ela kaşlarını çattı, anlamadı. Ama sarıldı. Bazı cümleler anlaşılmadan da yerine ulaşıyor."),
P(S("o3B"), "“Bir gün anlatacağım,” dedin. “Söz mü?” dedi Ela. Söz, dedin. Sonsuz kez söz verdin, sonsuz kez tutamadın, sonsuz kez yeniden verdin."),
P(S("o3C"), "Okul salonundaki eski piyanoda Ela'ya üç nota öğrettin. Her seferinde sıfırdan başladı ama her seferinde biraz daha hızlı öğrendi. Belki bazı şeyler gece yarısını geçiyordu; bir kasta, bir parmak ucunda."),
P(S("o3D"), "Bir şey söylemeden onu kucakladın. Karton kulaklar burnuna battı. Ela gülmeye başladı; sen de."),
"Saymayı bıraktın. Belki bin salı. Belki on bin. Bir gün kâğıda çentik atıyordun; kâğıt gece yarısında siliniyordu. Sonra kafanda sayıyordun; bir yerde kafan karıştı.",
P(function(d){ return d.kol === "haz"; }, "Her şeyi denedin. Her şey silindi. Şimdi bir çay, bir güneş, bir güvercin. Küçük şeyler. Büyük şeylerin tadı yok; küçük şeylerin bir tadı var, bazen."),
P(function(d){ return d.kol === "mukemmel"; }, "Kusursuz bir gün aradın. Bulamadın; çünkü yoktu. Her kurtarış bir başka kaza, her iyilik bir başka yara. Bir terazi; ve sen terazinin bir kefesinde."),
P(function(d){ return d.kol === "kacis"; }, "Kaçmaya çalıştın. Her yol aynı yatağa çıktı. Bir kaya, bir tepe, bir iniş. Şimdi her sabah kalkıyorsun; bir kaya itiyormuş gibi değil, bir kaya senin."),
P(function(d){ return d.kol === "ogren"; }, "Bin şey öğrendin. Bir piyano, bir dil, bir şehir. Bin hayat. Ve hiçbiri ertesi güne geçmedi; yalnızca sana."),
"Bir şey fark ediyorsun; bu sayısız salılardan birinde, otobüs durağında, sabah 07.28'de.",
"Her şey aynı. Ama sen her gün bir şeyi farklı görüyorsun. Bir gün otobüs şoförünün gözlerindeki yorgunluk. Bir gün trafik ışığındaki kadının elindeki telefon; Almanya'dan bir mesaj bekliyor. Bir gün Nazlı'nın kulaklığından gelen şarkı; bir Arapça şarkı, annesinin dinlediği.",
"Aynı gün. Ama bir gün, sonsuz kez yaşanınca, sonsuz bir derinlik kazanıyor. Bir nehir gibi; her gün aynı nehir, ama her gün başka su.",
"Halit Bey bankta. Güvercinler. Sana el sallıyor; seni tanımadığı hâlde. Belki herkese el sallıyor."
], secenekler: [
{ t: "Halit Bey'in yanına oturursun.", to: "t1b", etki: { bag: 1 } },
{ t: "Otobüs şoförüne günaydın dersin; adıyla. Recep.", to: "t1b", etki: { bag: 1, recep: true } },
{ t: "Durakta durup gökyüzüne bakarsın; mart güneşi.", to: "t1b", etki: { anlam: 1 } },
{ t: "Otobüse binmezsin. Bugün yürüyeceksin.", to: "t1b", etki: { anlam: 1, yurudu: true } }
]},

t1b: { saat: "Salı", baslik: "Halit'in Sorusu", metin: [
P(S("t1A"), "Halit Bey seni görünce kese kâğıdını uzattı; her sabah olduğu gibi, ya da ilk kez."),
P(S("t1C"), "Gökyüzüne baktın: mart güneşi, soğuk, parlak. Sayısız kez gördüğün bu gökyüzünde bir bulutun hep aynı yerde, aynı biçimde durduğunu ilk kez fark ettin. Sonra Halit Bey'in bankına yürüdün."),
P(S("t1D"), "Otobüse binmedin, yürüdün: bir fırının, bir ayakkabı tamircisinin önünden. Sayısız salıdır otobüs camından gördüğün dükkânlar; şimdi içlerinden taşan kokular. Bankta Halit Bey'in de her sabah Ulus'tan yürüyerek geldiğini öğrendin."),
P(S("t1B"), "“Günaydın Recep Abi.” Şoför sana bakıyor; şaşkın. “Tanışıyor muyuz?” Bir şey söylemiyorsun; gülümsüyorsun. Recep Abi bir an duraksıyor, sonra gülümsüyor. O sabah yolcuyla tartışmıyor."),
"Halit Bey'in bankı. Yanına oturuyorsun. Güvercinler.",
"“Halit Bey,” diyorsun, “size bir soru soracağım. Garip bir soru.”",
"“Sor evlat.”",
"“Bir gece biri gelse, bir şeytan ya da bir melek, ve size dese ki: bu hayatı, yaşadığın gibi, bütün acılarıyla, bütün sevinçleriyle, sonsuz kez yeniden yaşayacaksın. Aynen. Hiçbir şey değişmeden. Ne dersiniz?”",
"Halit Bey güvercinlere ekmek atıyor. Uzun süre bir şey söylemiyor.",
"“Önce ağlarım,” diyor sonunda. “Nermin'in hastalığını sonsuz kez yaşamak. Onun son gecesini. Sonsuz kez. Ağlarım.”",
"Bir süre susuyor.",
"“Sonra,” diyor, “evet derim. Çünkü o son gece, onun elini tuttuğum gece. Sonsuz kez onun elini tutacağım. Hastalığı sonsuz kez; ama eli de sonsuz kez. Birini almadan öbürünü alamazsın. Bir hayat bir paket evlat. Ya hepsini istersin ya hiçbirini.”",
"Sana dönüyor. “Sen? Sen bu salıyı sonsuz kez yaşamak ister misin? Gerçekten?”"
], secenekler: [
{ t: "“Bilmiyorum,” dersin. Dürüstçe.", to: "t2", etki: { anlam: 1, bilmiyorum: true } },
{ t: "“Hayır,” dersin. “Ben bir yarın istiyorum.”", to: "t2", etki: { haz: 1, yarin: true } },
{ t: "“Evet,” dersin. Ama sesinde bir tereddüt var.", to: "t2", etki: { anlam: 1, tereddut: true } },
{ t: "Bir şey söylemezsin. Güvercinlere bakarsın.", to: "t2", etki: { bag: 1 } }
]},

t2: { saat: "Salı, 18.00", baslik: "Gösteri", metin: [
P(S("t1bA"), "“Bilmiyorum,” demiştin sabah. Halit Bey başını sallamıştı: “İyi. Bilen biri bu soruya cevap veremez.” Bütün gün bu cümle peşindeydi."),
P(S("t1bB"), "“Bir yarın istiyorum,” demiştin. Halit Bey gülmüştü: “Herkes ister evlat. Ama yarın gelince onu da bugün gibi yaşarsın.” Bütün gün buna kızdın; çünkü haklı olabilirdi."),
P(S("t1bC"), "“Evet,” demiştin, sesinde bir titreme. Halit Bey o titremeyi duymuştu. “Evet'in yarısı da bir başlangıç,” demişti."),
P(S("t1bD"), "Bir şey dememiştin; Halit Bey de üstelememişti. Güvercinler, ekmek, bir saat. Sessizlik de bir cevaptı; ama hangisi, bilmiyordun."),
"Akşam. Spor salonu. Plastik sandalyeler, karton gezegen, sarı fular. Sayısız kez gördüğün bir sahne.",
"Burcu ön sırada. Seni görüyor; yanındaki sandalyeyi gösteriyor. Sayısız kez.",
"Perde açılıyor. Küçük Prens. Gül. Kral. Ve tilki.",
"Ela sahneye çıkıyor. Turuncu kostüm, karton kulaklar. Seni görüyor. Gülümsüyor.",
"“Benimle oynayamazsın. Evcilleştirilmedim.”",
"Bu repliği sayısız kez duydun. Ela'nın sesindeki küçük titremeyi, “evcilleştirilmedim”in son hecesinde hafifçe yükselişini, kulağının birinin hep biraz yana kaydığını; hepsini ezbere biliyorsun.",
"Ama bu akşam bir şey farklı. Ya da sen farklısın.",
"Bu gece ne yapacaksın?",
"Ve bir şey daha var: bu salıların ilk kez, bu gece ne yaparsan yap, gece yarısına bir saat kala sana bir soru sorulacakmış gibi hissediyorsun. Neden böyle hissettiğini bilmiyorsun."
], secenekler: [
{ t: "Gösteriden önce sahne arkasına gidip Ela'yı bulursun.", to: "y_kulis", etki: { bag: 2, kulis: true } },
{ t: "Oturup izlersin. Bütün gösteriyi, ilk kez izliyormuş gibi.", to: "y_izle", etki: { anlam: 2, izle: true } },
{ t: "Burcu'nun elini tutarsın.", to: "t3", etki: { bag: 1, burcu_el: true } },
{ t: "Telefonunla kaydedersin. Gece yarısı silinecek, biliyorsun.", to: "t3", etki: { anlam: 1, kayit: true } }
]},

y_kulis: { saat: "Salı, 17.45", baslik: "Kulis", metin: [
"Sahne arkası. Kostümler, karton parçalar, heyecanlı çocuklar, bir öğretmen “Sessiz olun!” diye fısıldıyor.",
"Ela bir köşede, tek başına. Tilki kostümünün içinde, karton kulakları elinde. Gözleri dolu.",
"Seni görünce şaşırıyor. “Baba? Sen buraya gelmezdin.”",
"Yanına çömeliyorsun. “Ne oldu tilki?”",
"Ela bir süre bir şey söylemiyor. Sonra: “Repliğimi unutacağım. Herkes gülecek. Ve sen geç kalacaksın; ve unuttuğumu görmeyeceksin. Ya da göreceksin. Bilmiyorum hangisi daha kötü.”",
"Sayısız salıdır Ela'yı sahnede gördün; repliğini hiç unutmadı. Ama sahne arkasında, bu köşede, bu korkuyla, onu hiç görmedin. Her seferinde salonda oturuyordun.",
"“Unutmayacaksın,” diyorsun. “Biliyorum.”",
"“Nasıl biliyorsun?”",
"Bir an düşünüyorsun. Sonra repliği söylüyorsun; Ela'nın sesindeki titremeyle, son hecesindeki yükselişle: “Bağ kurmak. Şimdilik sen benim için yüz bin küçük çocuktan biri gibisin...”",
"Ela gözlerini açıyor. “Baba, sen benim repliğimi biliyorsun.”",
"Evet. Ezbere. Sonsuz kez."
], secenekler: [
{ t: "“Sen benim için dünyada teksin,” dersin. Repliğin devamı.", to: "t3", etki: { bag: 2, tek: true } },
{ t: "Ona karton kulaklarını takarsın.", to: "t3", etki: { bag: 1, kulak: true } },
{ t: "Ona her şeyi anlatırsın: döngüyü, salıları.", to: "t3", etki: { anlam: 1, anlatti_ela: true } },
{ t: "Onu sahneye kadar götürüp perdenin arkasında beklersin; o çıkana kadar.", to: "t3", etki: { bag: 2, perde: true } }
]},

y_izle: { saat: "Salı, 18.00", baslik: "İlk Kez", metin: [
"İzliyorsun. Sayısız kez gördüğün bir gösteriyi, ilk kez görüyormuş gibi.",
"Küçük Prens'in peruğu yamuk; çocuk her seferinde düzeltmeye çalışıyor. Gülü oynayan kız bir yaprağını düşürüyor; kimse fark etmiyor. Kral'ın tacı kartondan; bir köşesi bantla yapıştırılmış.",
"Ve tilki. Ela.",
"Kuyruğu Burcu'nun eski bir eşarbından yapılmış; turuncu, biraz solmuş. Karton kulakların birinin içine Ela bir şey çizmiş; küçük, mavi kalemle. Bir kalp. Neden? Kimin için? Sayısız kez gördün bu kulağı; kalbi hiç görmedin.",
"“Evcilleştirmek ne demek?”",
"“Bağ kurmak.”",
"Ela'nın gözleri seyircilerin içinde bir şey arıyor. Seni. Seni buluyor. Repliğin devamında, “Sen benim için dünyada tek olursun” derken, sana bakıyor. Doğrudan. Sayısız kez bu repliği duydun ve Ela her seferinde sana mı baktı? Bilmiyorsun. Bu gece görüyorsun.",
"Bir şey göğsünde açılıyor. Bir gün sonsuz kez yaşanınca bir rutin olur, diye düşünüyordun. Yanılıyordun. Bir gün sonsuz kez yaşanınca, ancak o zaman, gerçekten görülür."
], secenekler: [
{ t: "Gösteriden sonra Ela'ya kulağındaki kalbi sorarsın.", to: "t3", etki: { bag: 2, kalp: true } },
{ t: "Ağlarsın. Salonun ortasında.", to: "t3", etki: { bag: 1, anlam: 1 } },
{ t: "Burcu'ya dönüp “Teşekkür ederim,” dersin. Ne için olduğunu söylemeden.", to: "t3", etki: { bag: 1, burcu_tesekkur: true } },
{ t: "Sonuna kadar izlersin. Perde kapanana kadar. Kıpırdamadan.", to: "t3", etki: { anlam: 1 } }
]},

t3: { saat: "Salı, 23.00", baslik: "Ses", metin: [
P(S("t2C"), "Gösteri boyunca Burcu'nun elini tuttun. Önce çekmek istedi, sonra bırakmadı. İki yıldır ilk kez. Tilki sahneden ellerinizi gördü; repliğinde hafifçe tökezledi, sonra gülümsedi."),
P(S("t2D"), "Bütün gösteriyi kaydettin. Gece on birde videoyu açtın: Ela'nın yamuk kulağı, titreyen sesi. Bir saat sonra bu video da silinecekti. Yine de üç kez izledin."),
P(S("y_kulisA"), "“Sen benim için dünyada teksin,” dedin, repliğin devamını. Ela gözlerini kocaman açtı, kuyruğunu düzeltip sahneye çıktı. O akşam repliğinde hiç takılmadı; son cümlede sana baktı."),
P(S("y_kulisB"), "Kulaklarını taktın; biri yine yana kaydı. Düzeltmeye çalıştın; “Bırak,” dedi Ela, “tilkinin kulağı böyle.” Sahneye öyle çıktı: yamuk kulakla, dimdik bir sesle."),
P(S("y_kulisD"), "Perdenin arkasında bekledin; Ela sahneye çıkarken de inerken de. İndiğinde önce sana koştu, sonra annesine. Bir öğretmen seni kulisten çıkarmak istedi; Ela elini bırakmadı."),
P(S("y_izleB"), "Ağladın. Salonun ortasında, plastik bir sandalyede, kırk iki yaşında bir adam. Burcu sana bir mendil uzattı, bir şey sormadı. Sonra kendi gözlerini de sildi."),
P(S("y_izleC"), "“Teşekkür ederim,” dedin Burcu'ya. “Ne için?” Söyleyemedin. Burcu bir an sana baktı, sonra başını omzuna yasladı; bir saniye, eski bir alışkanlıkla. Sonra kaldırdı."),
P(S("y_izleD"), "Perde kapanana, ışıklar yanana, veliler kalkana kadar izledin. Herkes çıkarken sen hâlâ oturuyordun. Ela sahne kenarından seslendi: “Baba, bitti!” Bitmedi, demek istedin."),
P(S("y_izleA"), "“Senin için,” dedi Ela. “Herkes kulağına bir şey çizdi. Ben kalp çizdim. Senin geleceğini bilmiyordum. Ama çizdim.”"),
P(S("y_kulisC"), "Ela dinledi. Bütün salıları, kahve fincanını, Nazlı'yı, Halit Bey'i. Sonunda dedi ki: “Yani yarın beni hatırlamayacaksın?” Hayır, dedin, ben hatırlayacağım; sen beni hatırlamayacaksın. Ela düşündü. “O zaman her gün bana yeniden söyle,” dedi. “Ben her gün yeniden inanırım.”"),
"Gece on bir. Evdesin. Yalnız. Ela'nın gösterisinden sonra, Burcu'nun “İyi geceler”inden sonra, bir taksiden sonra.",
"Yatakta oturuyorsun. Saat 23.00. Bir saat sonra her şey sıfırlanacak.",
"Odada bir ses. Belki kafanın içinde. Belki bir rüya. Belki yorgunluk.",
"“Bu hayatı,” diyor ses, “şimdi yaşadığın gibi, sayısız kez yeniden yaşaman gerekecek. İçinde yeni hiçbir şey olmayacak; her acı, her sevinç, her düşünce, her iç çekiş aynı sırayla. Bu salı, bu kahve, bu fincan, bu minibüs, bu tilki. Sonsuz kez.”",
"“Kendini yere atıp dişlerini gıcırdatarak bu sözleri söyleyene lanet mi edersin? Yoksa ona ‘Sen bir tanrısın; bundan daha kutsal bir şey hiç duymadım’ diyebileceğin bir an yaşadın mı?”",
"Bu sözler Halit Bey'in sabahki sorusunun yankısı gibi. Ama şimdi bir bankta değil; bir odada, gece yarısına bir saat kala, sana soruluyor.",
"Bu salıyı, bütün o salıları, sonsuz kez yeniden yaşamak ister misin?"
], secenekler: [
{ t: "Bu soruyu bir gece boyunca düşünürsün. Saat 23.59'a kadar.", to: "t4", etki: { anlam: 1 } },
{ t: "Sese bağırırsın: “Hayır!”", to: "t4", etki: { haz: 1, hayir: true } },
{ t: "Ela'yı ararsın; gece yarısından önce son kez.", to: "t4", etki: { bag: 1, son_ara: true } },
{ t: "Halit Bey'i düşünürsün. Ve Nermin'in elini.", to: "t4", etki: { bag: 1, anlam: 1, nermin: true } }
]},

t4: { saat: "Salı, 23.59", baslik: "23.59", metin: [
P(S("t3A"), "Bir saat boyunca düşündün. Soru her seferinde başka bir yüzle geldi: Nazlı'nın, Halit Bey'in, Ela'nın. Bir cevaba varmadın. Ama soruyu artık bir tehdit gibi değil, bir ayna gibi tutuyordun."),
P(S("t3B"), "“Hayır!” diye bağırdın. Komşu duvara vurdu, sonra sessizlik. Ses cevap vermedi; sesler cevap vermez. Ama bağırdığın kelime odada bir süre asılı kaldı."),
P(S("t3D"), "Halit Bey'i düşündün; Nermin'in elini. Hastalık sonsuz kez, ama el de sonsuz kez. Bir hayat bir paket. Sen hangi paketi taşıyorsun?"),
P(S("t3C"), "Ela uykulu sesiyle açtı. “Baba?” Bir şey söylemedin; yalnızca nefesini dinledin. “Baba, iyi misin?” İyiyim, dedin. “Gösteriye geldin,” dedi Ela. “Bunu hatırlayacağım.” Sen biliyordun ki hatırlamayacak. Ama sen hatırlayacaktın."),
"23.59.",
"Saatin ekranında rakamlar. Bir dakika. Altmış saniye.",
"Bütün o salılar. Kahve fincanı. Radyodaki şarkı. Nazlı'nın sarı çantası. Minibüsün fren sesi. Halit Bey'in güvercinleri. Nihat Bey'in dosyası. Kantindeki mercimek çorbası. Ve tilki. “Bağ kurmak.”",
P(function(d){ return d.kol === "haz"; }, "Ve bütün o boş hazlar; tatsız tabaklar, hatırlanmayan geceler, silinen limitler. Onlar da. Onlar da sonsuz kez."),
P(function(d){ return d.kol === "mukemmel"; }, "Ve bütün o planlar, haritalar, kurtarışlar ve kurtarışların bedelleri. Rıfat Bey'in düşüşü. Onlar da sonsuz kez."),
P(function(d){ return d.kol === "kacis"; }, "Ve bütün o kaçışlar; Sinop, Londra, bir uyku kliniği, bir yatak, bir dip. Onlar da sonsuz kez."),
P(function(d){ return d.kol === "ogren"; }, "Ve bütün o öğrendiklerin; bir Chopin noktürnü, bir dil, bir şehrin bin hayatı. Onlar da sonsuz kez."),
"Otuz saniye.",
"Şeytanın sorusu odada asılı. Bir cevap vermen gerekmiyor. Kimse duymayacak. Gece yarısı her şey silinecek; cevabın da.",
"Ama sen bileceksin.",
"On saniye.",
"Evet dersen, Nazlı'nın düşüşüne de evet demiş olacaksın; Ela'nın repliğine de. Hayır dersen, ikisine birden."
], secenekler: [
{ t: "“Evet,” dersin. Fısıltıyla. Ve gerçekten kastederek. Bir kez daha. Sonsuz kez.", to: "ss", etki: { amor: true, anlam: 2 } },
{ t: "“Evet,” dersin. Ama bir şartla: Ela'yı her gün yeniden bulmak.", to: "ss", etki: { amor: true, bag: 2, sartli: true } },
{ t: "“Hayır,” dersin. Ve gözlerini kapatırsın.", to: "ss", etki: { haz: 1, ret: true } },
{ t: "Bir şey söylemezsin. Saatin son saniyesine bakarsın.", to: "ss", etki: { anlam: 1, sessiz: true } }
]},

ss: { yonlendir: [
{ if: function(d){ return d.amor && d.bag >= 6; }, to: "son_carsamba" },
{ if: function(d){ return d.kol === "haz" && !d.amor; }, to: "son_bos" },
{ if: function(d){ return d.kol === "mukemmel" && !d.amor; }, to: "son_kusursuz" },
{ if: function(d){ return d.amor; }, to: "son_sisifos" },
{ to: "son_tilki" }
]},

/* ---------- SONLAR ---------- */
son_carsamba: { son: true, baslik: "Çarşamba", metin: [
P(S("t4A"), "Gece yarısına on saniye kala “Evet” demiştin. Fısıltıyla; bir kez daha, sonsuz kez."),
P(S("t4B"), "“Evet,” demiştin, “ama Ela'yı her gün yeniden bulmak şartıyla.” Bir şart değil, bir duaydı belki."),
"Alarm. 06.47.",
"Telefonun ekranında: Çarşamba, 13 Mart.",
"Bir an anlamıyorsun. Sonra anlıyorsun. Sonra yatakta oturup uzun süre ekrana bakıyorsun. Çarşamba. Bir kelime ki sayısız salıdır bir hayal gibiydi.",
"Neden bitti? Bilmiyorsun. Belki bir şeytanın sorusuna verdiğin cevap. Belki Halit Bey'in güvercinleri. Belki bir tilkinin kulağındaki kalp. Belki hiçbir neden yok; bir döngü başlamıştı, bir döngü bitti. Bir imam bunun bir anlamı olduğunu söylerdi; bir doktor olmadığını. Sen artık ikisine de ihtiyaç duymuyorsun.",
"Kahve makinesini çalıştırıyorsun. Fincanı tezgâha koyuyorsun; kenarına çarpmıyor. Bir alışkanlık; sayısız salıdan kalan.",
"Radyoda bir şarkı. Bilmediğin bir şarkı. İlk kez duyduğun bir şarkı. Ağlıyorsun; bir şarkının yeni olması için.",
"Telefonuna bir mesaj. Burcu: “Ela dün akşam çok mutluydu. Bütün gece senden bahsetti. Bu cumartesi bize yemeğe gelir misin?”",
"Pencereden bakıyorsun. Aşağıda bir kadın bir köpeği gezdiriyor; bu sabah başka bir ağacın dibinde duruyor köpek.",
"Bugün ne olacak? Bilmiyorsun. Sayısız salıdır ilk kez, bilmiyorsun. Ve bu bilmemek, bir korku değil; bir armağan.",
"Bir gün sonsuz kez yaşandı. Şimdi bir gün bir kez yaşanacak. Ve sen, onu sonsuz kez yaşayacakmış gibi yaşamayı öğrendin."
]},

son_sisifos: { son: true, baslik: "Kaya", metin: [
P(S("t4A"), "“Evet” demiştin, gerçekten kastederek. Ve hiçbir şey olmadı; 06.47 yine geldi."),
P(S("t4B"), "Şartlı bir evet: Ela'yı her gün yeniden bulmak. Döngü bu şartı kabul etti ama kendini bitirmedi."),
"Alarm. 06.47.",
"Salı, 12 Mart.",
"Döngü bitmedi. Belki hiç bitmeyecek. “Evet” dedin; bir şeytan, bir ses, bir gece yarısı. Ve döngü devam etti. Bir “evet”in bir anahtar olduğunu sanmıştın. Değilmiş.",
"Ama bir şey değişti. Sen.",
"Kahve makinesini çalıştırıyorsun. Fincan tezgâhın kenarına çarpmıyor; çünkü sen kaydırıyorsun. Radyodaki şarkı; bütün sözlerini biliyorsun ve bu sabah birlikte söylüyorsun.",
"Otobüs durağında Halit Bey. Güvercinler. Yanına oturuyorsun. “Bugün hava güzel,” diyor. “Dün de güzeldi. Yarın da güzel olacak.” “Evet,” diyorsun. Ve bu kez, ilk kez, bunun bir bilmece değil, bir cevap olduğunu anlıyorsun.",
"Dedenin masalındaki adam. Kaya her seferinde yuvarlanıyor; adam her seferinde iniyor. Ama kaya onun. İtmek onun. Ve iniş; boş ellerle, bir tepeden aşağı, bir nefeslik bir özgürlük.",
"Senin kayan bir salı. Ve sen her sabah onu itmeye başlıyorsun; bir minibüsün önünden, bir tilkinin repliğine kadar. Her gün aynı. Her gün farklı.",
"Mutlu musun? Bazı salılar evet. Bazı salılar hayır. Ama artık bu soru, bir salının ortasında, bir güvercine ekmek atarken, pek bir şey ifade etmiyor."
]},

son_bos: { son: true, baslik: "Boşluk", metin: [
P(S("t4C"), "“Hayır” demiştin ve gözlerini kapatmıştın. Gözlerini açtığında yine aynı tavan."),
P(S("t4D"), "Bir şey dememiştin; saatin son saniyesine bakmıştın. Rakamlar sıfırlandı. Sen de."),
"Alarm. 06.47.",
"Salı, 12 Mart.",
"“Hayır,” dedin. Gece yarısına on saniye kala. Ve döngü devam etti.",
"Her şeyi denedin. Her şey silindi. Haz bir zincir ister; bir dünün ve bir yarının arasında. Senin zincirin her gece kırıldı ve sen, kırık zincirin içinde, bir şeyi istemenin ne demek olduğunu unuttun.",
"Bazı salılar yatakta kalıyorsun. Bazı salılar bir şeyi deniyorsun; büyük, tehlikeli, bedelsiz. Hiçbiri bir şey bırakmıyor. Her şeyin serbest olduğu yer, bir özgürlük değil, bir uçurummuş. Sen o uçurumun kenarındasın; her sabah 06.47'de.",
P(function(d){ return d.cay_her || d.kucuk; }, "Ama bir şey var. Bir çay. Kızılay'da bir çay bahçesinde, her sabah, aynı çay. Sıcak. Bir yudum. Bu bir zincir değil. Ama bir halka. Belki bir gün, bir halka, bir başka halkaya bağlanır."),
P(function(d){ return d.ela_adadi || d.ela_ogle; }, "Ve bir şey daha var: Ela. Bazı salılar onu öğlen okuldan alıyorsun; bir profiterol. Ela her seferinde şaşırıyor; babası öğlen gelmez. Ve her seferinde, bir pastanede, çikolatalı bir yüzle, sana bir şey öğretmeye çalışıyor. Sen her seferinde öğreniyorsun. O her seferinde unutuyor."),
"Bir hayatın anlamı, bir sonucun olmasında mı? Sen sonuçsuz bir hayatı seçtin; ya da sonuçsuz bir hayat seni seçti. Ve şimdi, her salı, bir anlamın sonuçtan bağımsız olarak var olup olamayacağını arıyorsun. Henüz bulamadın. Ama arıyorsun. Belki bu da bir şey."
]},

son_kusursuz: { son: true, baslik: "Kusursuz Gün", metin: [
P(S("t4C"), "“Hayır,” demiştin. Kusursuz olmayan bir salıya evet diyemezdin."),
P(S("t4D"), "Son saniyeye kadar sustun. Bir cevap da bir plan gibi gelmişti; vermedin."),
"Alarm. 06.47.",
"Salı, 12 Mart.",
"Kusursuz bir gün aradın. Bulamadın. Çünkü her kurtarış bir başka kaza doğurdu; her iyilik bir başka yerde bir bedel. Dünya bir terazi ve sen terazinin kefelerini sonsuz kez dengeledin; her seferinde bir başka yer eğildi.",
P(function(d){ return d.yirtti || d.dinledi; }, "Bir gün haritayı yırttın. Ela'nın “Beni hiç dinlemedin” cümlesinden sonra. O günden beri planlamıyorsun. Nazlı'yı kurtarıyorsun, çünkü önündesin. Rıfat Bey'in düşüşünü biliyorsun ve bazı sabahlar ona da yetişiyorsun, bazı sabahlar yetişemiyorsun. Kusursuz değil. Ama artık yaşıyorsun; yönetmiyorsun."),
P(function(d){ return d.devam; }, "Haritayı geliştirmeye devam ediyorsun. Bin isim, on bin dakika. Bir gün kusursuz olacak, diyorsun kendine. Ela'nın gösterisine her salı gidiyorsun; ön sıradasın; saatine bakıyorsun. Ela'nın kulağındaki kalbi hiç görmedin."),
"Bir şey öğrendin: iyilik bir hesap değil. Bir hesaba dönüştüğü an, bir kafese dönüşüyor. Bir insanı kurtarmak, bütün insanlığı kurtarmak gibi değil; yalnızca bir insanı kurtarmak. Ve bu yeter. Yetmek zorunda.",
"Kusursuz gün yok. Ama bir kusurlu gün, sevgiyle yaşandığında, belki bir kusursuzluktan daha fazlasıdır.",
"Nazlı her sabah sana bir çay borçlu olduğunu söylüyor. Bazı sabahlar o çayı içiyorsunuz; Kızılay'da, bir bankta, bir minibüs geçerken."
]},

son_tilki: { son: true, baslik: "Tilki", metin: [
P(S("t4C"), "Gece yarısında “Hayır” demiştin. Sabah kahveni yaparken bunu düşündün: belki bir hayır da bir başlangıçtı."),
P(S("t4D"), "Hiçbir şey dememiştin. Son saniyeye bakmıştın ve son saniye, her zamanki gibi, geçmişti."),
"Alarm. 06.47.",
"Belki salı. Belki çarşamba. Ekrana bakmıyorsun. Bakmana gerek yok.",
"Bir şey öğrendin bu salılarda; bir tilkiden, karton kulaklı, turuncu kuyruklu, sesinde küçük bir titremeyle.",
"Evcilleştirmek ne demek? Bağ kurmak. Yüz bin çocuktan biri olmaktan çıkıp, birinin dünyasında tek olmak. Ve bunun için zaman gerekiyor; tilkinin dediği gibi, her gün aynı saatte gelmek.",
"Sen sonsuz kez aynı saatte geldin. 18.00. Bir spor salonu. Plastik bir sandalye. Bir tilki.",
P(function(d){ return d.tek || d.kalp; }, "Bir gün Ela'nın kulağındaki kalbi gördün; ya da onun repliğini sahne arkasında, onunla birlikte söyledin. Ve o gün bir şey anladın: Ela seni zaten evcilleştirmişti. Sen yalnızca bunu görmeyi öğrenmek için sonsuz bir salıya ihtiyaç duydun."),
"Bir zamanlar bir telefonda, bir gece yarısı, kızına “Başka zaman” demiştin. Başka zaman yok. Yalnızca bu zaman var. Ve bu zaman, sonsuz kez yaşansa da bir kez yaşansa da, aynı şeyi istiyor: gelmek. Aynı saatte. Dinlemek. Görmek.",
"Bugün ne olacak? Kahve, otobüs, Nazlı, Halit Bey, Nihat Bey, mercimek çorbası. Ve akşam altıda bir gösteri. Belki aynı gösteri. Belki başka.",
"Fark etmez. Gideceksin. Aynı saatte. Çünkü bir tilki, bir zamanlar, sana bunun ne demek olduğunu öğretti."
]}

},

ayna: function(d){
  var out = [];
  var a = d.anlam, h = d.haz, b = d.bag;
  if(a >= h && a >= b) out.push("Bu hikâyede en çok anlam aradın: bir nedende, bir kurtuluşta, gece yarısındaki bir soruda. Anlam bir şeyin sonucunda değil, bir şeyi nasıl yaşadığında bulunabilir. Belki.");
  else if(h >= b) out.push("Bu hikâyede, bir süre, hazza yaslandın: bedelsiz bir dünyada her şeyi denemeye. Ve bedelsiz bir dünyanın, bir şeyi istemenin de bedelini aldığını gördün.");
  else out.push("Bu hikâyede en çok bağa yaslandın: bir kıza, bir yaşlı adama, bir kuryeye. Bir gün sonsuz kez yaşanınca, onu taşıyan şey bir plan değil, bir insan oluyor.");
  if(d.amor) out.push("Gece yarısına on saniye kala “Evet” dedin. Bu salıyı, bütün acısı ve sevinciyle, sonsuz kez.");
  if(d.ret) out.push("Gece yarısına on saniye kala “Hayır” dedin. Ve döngü yine de devam etti.");
  if(d.prova) out.push("Bir yıl önce “Başka zaman” dediğin provaya, bir salı, gittin.");
  if(d.her_sabah_el) out.push("Her sabah on bir dakika, bir yabancının elini tuttun. Kimse hatırlamadı; sen hatırladın.");
  return out;
},

dipnot: [
{ ad: "Ebedi dönüş", t: "Nietzsche “Şen Bilim”de bir düşünce deneyi önerir: bir şeytan gelip hayatınızı, her ayrıntısıyla, sonsuz kez yeniden yaşayacağınızı söylese, ona lanet mi edersiniz, yoksa “Sen bir tanrısın” mı dersiniz? Nietzsche'ye göre bu soruya “evet” diyebilmek, hayatı olduğu gibi sevmek (amor fati) demektir." },
{ ad: "Absürd ve Sisifos", t: "Albert Camus “Sisifos Söyleni”nde insanın anlam arayışı ile dünyanın sessizliği arasındaki çelişkiye “absürd” der. Sisifos, kayasını sonsuza dek bir tepeye iten bir adamdır; ama Camus'ye göre onu mutlu hayal etmeliyiz, çünkü kayası onundur ve isyanı, kaderini bilerek yaşamasındadır." },
{ ad: "Özgürlük ve sonuç", t: "Dostoyevski'nin karakteri İvan Karamazov “Tanrı yoksa her şey mubahtır” der. Sonuçların silindiği bir dünyada her şey mümkündür; ama bu sonsuz özgürlük, Tolga'nın gördüğü gibi, bir şeyi istemenin kendisini de anlamsızlaştırabilir. Sartre'a göre özgürlük bir yük, bir mahkûmiyettir." },
{ ad: "Bağ kurmak", t: "Antoine de Saint-Exupéry'nin Küçük Prens'inde tilki, “evcilleştirmek”i bağ kurmak olarak tanımlar: yüz bin benzerden biri olmaktan çıkıp birinin dünyasında tek olmak. Bunun için zaman ve sadakat gerekir: “Her gün aynı saatte gelmelisin.” Bir döngünün içinde, bir anlamın kaynağı belki tam da budur." }
]
});
})();
