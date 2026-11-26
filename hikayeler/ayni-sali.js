(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "ayni-sali",
baslik: "Aynı Salı",
dunya: "Hayali dünya",
kategoriler: ["Varoluş ve Anlam", "Aile ve Hafıza"],
giris: "Ankara, 12 Mart, salı. Alarm 06.47'de çalıyor. Kırk iki yaşında bir sigorta eksperisin, boşanmışsın, on yaşında bir kızın var ve bu akşamki okul gösterisine yine geç kalacaksın. Gece yarısı uyuyorsun ve alarm yine 06.47'de çalıyor. Yine 12 Mart, yine salı. Sonra yine, sonra yine. Hiçbir şeyin sonucu olmayan, her şeyin silindiği bir günün içinde insan ne yapar? Bu, hiç bitmeyen bir salının hikâyesi.",
kavramlar: ["Ebedi dönüş", "Absürd ve anlam", "Özgürlük ve sonuç", "Bağ kurmak"],
ozet: "Aynı salı gününü tekrar tekrar yaşayan bir adam. Hiçbir şeyin sonucu yok, her şey başa dönüyor. O zaman önemli olan ne?",
baslangic: "a1",
durum: { anlam: 0, haz: 0, bag: 0 },

sahneler: {

a1: { saat: "Salı, 06.47", baslik: "06.47", metin: [
"Alarm çalıyor, saat 06.47. Ekranda “Salı, 12 Mart” yazıyor.",
"Adın Tolga, kırk iki yaşındasın, bir sigorta şirketinde hasar eksperisin. Kaza yerlerine gidip fotoğraf çekiyor, rapor yazıyorsun. Kızılay'da bir oda bir mutfak bir evde oturuyorsun, boşanalı iki yıl oldu.",
"Kahve makinesinden fincanı alırken tezgâhın kenarına çarpıyorsun, kahve gömleğine dökülüyor. Küfredip ütüsüz mavi gömleği giyiyorsun.",
"Radyoda seksenlerden bir Türkçe pop şarkı çalıyor, adını hatırlamıyorsun. “Bir gün bir yerde...”",
"Burcu'dan mesaj geliyor: “Bugün Ela'nın gösterisi var, 18.00'de. Lütfen bu sefer geç kalma. Rolü var, tilki.”",
"Ela on yaşında, okulda “Küçük Prens” oynanıyor. Geçen yıl koro gösterisine de geç kalmıştın. Ela son şarkıda seni kapıda görmüş, eve kadar arabada camdan dışarı bakmıştı.",
"Saat 07.15 oldu, otobüs 07.30'da.",
"Nihat Bey'den mesaj geliyor: “Tolga, 17.00'de Gölbaşı'nda fabrika yangını var. Ekspertiz bugün bitecek, gidecek başka kimse yok.” Akşam trafiğinde Gölbaşı'ndan okula en az elli dakika. Zaten iki yazılı uyarı almışsın."
], secenekler: [
{ t: "Gölbaşı'nı araya nasıl sığdıracağını bilmeden Burcu'ya “Geleceğim, söz,” yazarsın.", to: "a2", etki: { bag: 1, soz: true } },
{ t: "Üçüncü uyarı gelebileceğini bile bile Nihat Bey'e dosyayı başkasına vermesini yazarsın.", to: "a2", etki: { bag: 1, is_risk: true } },
{ t: "Burcu'ya dürüstçe “Yetişmeye çalışacağım ama söz veremem,” yazarsın.", to: "a2", etki: { anlam: 1, durust: true } },
{ t: "Burcu'ya değil Ela'ya yazarsın: “Tilki kızım, akşam görüşürüz.”", to: "a2", etki: { bag: 1, ela_mesaj: true } }
]},

a2: { saat: "Salı, 06.47", baslik: "Yine", metin: [
P(S("a1A"), "Söz verdin. Beşte yanık fabrikadaydın, altı buçukta okulun kapısında. Tilki son repliğini söylüyordu. Ela seni gördü, Burcu da gördü. Sözün telefonda “okundu” olarak duruyordu."),
P(S("a1B"), "Nihat Bey öğlen tek kelime yazdı: “Konuşacağız.” Gösteri boyunca cebindeki telefonu sıkıp durdun."),
P(S("a1C"), "Burcu “Tamam,” diye cevap verdi. Gölbaşı uzadı ve yedi buçukta vardın. Salon boştu, bir sandalyenin üstünde karton tilki kulakları duruyordu."),
P(S("a1D"), "Ela üç tilki emojisiyle cevap verdi. Yetişmek için iki kere kırmızıda geçtin. Salona girdiğinde tilki konuşuyordu. Burcu dönüp sana baktı, saate değil, sana."),
"Gece yarısı uyuyorsun.",
"Alarm 06.47'de çalıyor. Salı, 12 Mart.",
"Telefonun tarihi bozulmuş herhalde, diyorsun. Fincan yine tezgâha çarpıyor, kahve yine gömleğine dökülüyor.",
"Radyoda yine “Bir gün bir yerde...” çalıyor.",
"Burcu'nun “Bugün Ela'nın gösterisi var, 18.00'de” mesajı geliyor, ardından Nihat Bey'in “Tolga, 17.00'de Gölbaşı'nda...” mesajı. Kelimesi kelimesine aynı.",
"Mesajlara bakıyorsun, dün yazdığın cevap yok.",
"Pencereden bakıyorsun. Aşağıda aynı kadın aynı köpeği gezdiriyor, köpek aynı ağacın dibinde duruyor. Karşı balkonda aynı adam aynı sigarayı içip aynı yerde öksürüyor.",
"Delirmiş olabilirsin ve bunu sana söyleyebilecek tek kişi yine sensin."
], secenekler: [
{ t: "Bir deney yapıp bugün olacakları önceden yazarsın.", to: "x_test", etki: { anlam: 1 } },
{ t: "Gölbaşı yine yarım kalacak olsa da bir nöroloğa gidersin.", to: "x_doktor", etki: { anlam: 1, doktor: true } },
{ t: "Uykuyla girdiysen uykuyla çıkarsın diye düşünüp yatağa dönersin.", to: "a3", etki: { haz: 1, yatak: true } },
{ t: "Velayet duruşmasında avukatı sana “dengesiz” dediği hâlde Burcu'yu arayıp anlatırsın.", to: "a3", etki: { bag: 1, burcu_ara: true } }
]},

x_test: { saat: "Salı", baslik: "Tahmin", metin: [
"Bir kâğıda yazmaya başlıyorsun.",
"07.30, otobüs iki dakika geç gelir, şoför bir yolcuyla tartışır. 08.05, Kızılay'da bir trafik ışığı bozuktur. 08.20, Atatürk Bulvarı'nda bir bisikletli kurye ile bir minibüs. 12.30, kantinde mercimek biter. 15.40, şarj yüzde on. 18.10, gösteriye on dakika geç.",
"Saat 07.32'de otobüs geliyor, şoför aynı kelimelerle tartışıyor. 08.05'te ışık bozuk. Tik atıyorsun.",
"08.19'da Atatürk Bulvarı'ndasın. Kâğıtta “kurye, minibüs” yazıyor.",
"Yirmilerinin başında bir kız geçiyor, sırtında sarı bir kurye çantası, kulağında kulaklık. Yanından geçerken göz göze geliyorsunuz.",
"08.20'de bir fren sesi ve bir çarpma sesi duyuluyor. Kız havaya kalkıp yere düşüyor.",
"Kâğıttaki tik elinde kalıyor."
], secenekler: [
{ t: "Kıza koşarsın.", to: "a3", etki: { bag: 1, kosti: true } },
{ t: "Kâğıda bakarsın, hepsi doğru çıkmış.", to: "a3", etki: { anlam: 1 } },
{ t: "Ambulansı ararsın.", to: "a3", etki: { bag: 1, ambulans: true } },
{ t: "Bildiğin hâlde hiçbir şey yapmadığın için gözlerini kapatırsın.", to: "a3", etki: { anlam: 1, bildi: true } }
]},

x_doktor: { saat: "Salı", baslik: "Nörolog", metin: [
"Çankaya'da özel bir hastaneye gidiyorsun. Randevun yok, acil diyorsun. İki saat bekliyor, otomattan iki kere su alıyorsun.",
"Dr. Ayşen Sezgin otuzlarının sonunda bir kadın. Masasında ayracı tam ortasında duran, yarım kalmış bir roman var.",
"Fincanı, şarkıyı, her şeyi anlatıyorsun.",
"Uykunu, ilaç kullanıp kullanmadığını, alkolü, stresi, yakın zamanda bir kayıp yaşayıp yaşamadığını soruyor.",
"“İki yıl önce boşandım.”",
"“Kızınızla aranız nasıl?”",
"“İyi. Bazen geç kalıyorum.”",
"“Bir MR isteyeceğim, bir de sizi psikiyatriste yönlendireceğim. Beyin bazen bir şeyle yüzleşmek istemeyince bir döngü kurar.”",
"“Ya gerçekse?”",
"Gülümsüyor. “O zaman yarın gelin, bugün ne konuştuğumuzu bana anlatın. Ben hatırlamayacağım ama siz hatırlarsanız belki inanırım.”"
], secenekler: [
{ t: "Yarın gelip ona bugünü anlatmaya karar verirsin.", to: "a3", etki: { anlam: 1, doktor_yarin: true } },
{ t: "Ona “Siz aynı günü sonsuza kadar yaşasaydınız ne yapardınız?” diye sorarsın.", to: "a3", etki: { anlam: 1, doktor_soru: true } },
{ t: "Teşekkür edip çıkarsın.", to: "a3", etki: { haz: 1 } },
{ t: "Kızından, geç kalmalarından bahsetmeye devam edersin.", to: "a3", etki: { bag: 1, acildi: true } }
]},

a3: { saat: "Salı", baslik: "Güvercinler", metin: [
P(S("a2C"), "Perdeleri çekip uyudun. Öğlen telefonunda Nihat Bey'den yedi cevapsız arama vardı. Gösteriye gitmedin, gece uyandın ve sonra yine 06.47 oldu."),
P(S("a2D"), "Burcu dinledi. “Tolga, içtin mi sen?” dedi. İçmemiştin. “Bir doktora git. Ela seni bu hâlde görmesin.” Sesinde endişe değil korku vardı."),
P(S("x_testB"), "Hepsi doğruydu. “08.20, kurye” satırı artık bir tahmin değildi. Kâğıdı katlayıp cebine koydun ve bütün gün orada durdu."),
P(S("x_testC"), "Operatör “Bilincinin açık olduğunu nereden biliyorsunuz?” diye sordu. Sen daha yanına bile gitmemiştin."),
P(S("x_testD"), "Gözlerini kapattın ama fren sesi yine geldi."),
P(S("x_doktorA"), "Ertesi sabah, yani aynı sabah yine gittin. Dr. Sezgin'a dünkü konuşmayı, masasındaki romanın adına kadar anlattın. Kadının yüzü bembeyaz oldu, MR'ı imzalarken eli titriyordu."),
P(S("x_doktorC"), "Otoparkta alnını direksiyona dayadın, korna çalınca kafanı kaldırdın."),
P(S("x_doktorD"), "Dr. Sezgin kalemi bıraktı. “Bugün kızınızın gösterisi varsa,” dedi, “ben sizin yerinizde olsam MR'dan önce oraya giderdim.”"),
P(S("x_testA"), "Kız yerde yatıyordu, bilinci açıktı ama bacağı garip bir açıyla duruyordu. “İyiyim,” dedi. Adı Nazlı'ydı, yirmi üç yaşındaydı, kuryeydi, üniversiteyi bırakmıştı."),
P(S("x_doktorB"), "“Bitiremediğim bir kitap var,” dedi ve masadaki romanı gösterdi. “Her gün bir bölüm okurdum. Sonra herhalde sıkılırdım.”"),
"Ertesi gün, ya da aynı gün, saat yine 06.47.",
"Üçüncü salı geçiyor, dördüncü, beşinci, derken bir hafta oluyor.",
"Her şey aynı ama sen aynı değilsin, çünkü hatırlıyorsun. Hatırladığın her şey de gece yarısı siliniyor.",
"Bir sabah otobüs durağındaki bankta yaşlı bir adam oturuyor. Kasketli, elinde bir torba ekmek kırıntısı, güvercinlere atıyor.",
"Sana bakmadan konuşuyor. “Bugün hava güzel. Dün de güzeldi, yarın da güzel olacak.”",
"“Yarın olmayacak.”",
"Adam dönüp sana bakıyor. Mavi, sulu ama keskin gözleri var. Elini uzatıyor. “Ben Halit. Kırk yıldır her sabah bu banktayım. Ya sen?”",
"Saat 08.08, Bulvar'a on dakika var."
], secenekler: [
{ t: "Halit Bey'e her şeyi anlatırsın. 08.20'ye yetişemezsin ve Nazlı bu sabah da yalnız düşer.", to: "a4", etki: { bag: 1, halite_anlatti: true } },
{ t: "Şaka gibi ama şaka olmayan bir sesle “Yarın da burada olacağım,” dersin.", to: "a4", etki: { anlam: 1 } },
{ t: "Saate bakmadan ondan biraz ekmek alıp sen de güvercinlere atarsın.", to: "a4", etki: { bag: 1, guvercin: true } },
{ t: "On iki dakika kala kalkıp Bulvar'a yürürsün.", to: "a4", etki: { anlam: 1, bulvar: true } }
]},

a4: { saat: "Salı, 08.20", baslik: "Nazlı", metin: [
P(S("a3B"), "Halit Bey öksürerek güldü. “İyi,” dedi, “burası yalnız oturulacak yer değil.” Her sabah aynı cümleyi kurdun, her sabah aynı gülüşü aldın."),
P(S("a3C"), "Kırıntıları attın, güvercinler kaçıp geri geldi. Halit Bey hiçbir şey sormadı."),
P(S("a3D"), "08.18'de Bulvar'daydın ve ilk kez ne olacağını bilerek bekledin."),
P(S("a3A"), "Halit Bey bir kere bile şaşırmadı. Sonunda bir avuç kırıntı atıp “Demek sen de,” dedi. Ne demek istediğini sordun ama o sırada bir güvercin omzuna kondu."),
"Her sabah 08.20'de Bulvar'da Nazlı'yla minibüs karşılaşıyor.",
"İlk hafta yalnızca izledin. Sonra bir sabah, saat 08.19.",
"Kaldırımın kenarındasın. Nazlı sarı çantası ve kulaklığıyla geliyor, minibüs köşeyi dönmek üzere.",
"Bugün kurtarsan bile yarın yine aynı minibüs gelecek.",
"Bu döngünün içinde ölürsen ne olacağını bilmiyorsun. Belki yine 06.47'de uyanırsın, belki de Ela'nın tilkisi babasız bir akşama çıkar."
], secenekler: [
{ t: "Minibüsün seni de alabileceğini bile bile yola atlarsın.", to: "x_kurtar", etki: { bag: 1, anlam: 1 } },
{ t: "Kulaklık taktığını bile bile kaldırımdan “Dur!” diye bağırır, kaldırımda kalırsın.", to: "a5", etki: { bag: 1, bagirdi: true } },
{ t: "Kazayı engellemez, düşüşünü bir kez daha izleyip sonrasında yanında olursun.", to: "x_el", etki: { bag: 2 } },
{ t: "Kimseyi kurtarmamanın sana ne yaptığını görmek için hiçbir şey yapmazsın.", to: "a5", etki: { haz: 1, yapmadi: true } }
]},

x_kurtar: { saat: "Salı, 08.19", baslik: "Bir Saniye", metin: [
"Atlıyorsun. Nazlı fren yapıyor, bisiklet yana yatıyor ve ikiniz de kaldırıma düşüyorsunuz. Dirseğin asfaltta sıyrılıyor.",
"Saat 08.20, minibüs bir metre öteden geçip gidiyor.",
"Nazlı kulaklığını çıkarıyor. “Ne yapıyorsun be! Deli misin?”",
"Sonra minibüsün geçtiği yere bakıyor ve yüzü değişiyor.",
"“Sen... minibüsü gördün mü?”",
"Evet.",
"Dizinde bir sıyrık var. Bisikletini kaldırıyor, yerinden çıkan zinciri takarken elleri yağa bulanıyor.",
"“Teşekkür ederim. Adım Nazlı.”",
"“Biliyorum,” diyorsun. Söylememen gerekiyordu.",
"Sabahın sekizinde adını bilen garip bir adam. Sonra gülüyor. “Bir teslimatım var ama sana bir çay borçluyum. Yarın, burada?”"
], secenekler: [
{ t: "“Yarın,” dersin.", to: "a5", etki: { bag: 1, yarin_yalan: true } },
{ t: "“Bugün,” dersin, “şimdi içelim.”", to: "a5", etki: { bag: 2, cay_nazli: true } },
{ t: "Yarın seni hatırlamayacağını, gerçeği söylersin.", to: "a5", etki: { anlam: 1, gercek_nazli: true } },
{ t: "Bir şey demeden gidersin.", to: "a5", etki: { anlam: 1 } }
]},

x_el: { saat: "Salı, 08.21", baslik: "El", metin: [
"Kaza oluyor ve bu sabah yanına koşuyorsun.",
"Nazlı yerde yatıyor, bilinci açık ama bacağı garip bir açıyla duruyor.",
"Yanına diz çöküp elini tutuyorsun, eli soğuk ve titriyor.",
"“Ambulans geliyor,” diyorsun. On bir dakika sürecek, her sabah on bir dakika sürüyor.",
"“Annemi arar mısın?” deyip sana ekranı kırık bir telefon uzatıyor.",
"Kayseri aksanlı bir kadın açıyor. Bağırıyor, susuyor, sonra “Geliyorum,” diyor, Kayseri'den.",
"On bir dakika boyunca konuşuyorsunuz. Resim okuyormuş ama para yetmemiş. Kuryeliğin geçici olduğunu söylüyor, iki yıldır geçiciymiş. Bir ara gülüyor ama gülerken acıdan yüzünü buruşturuyor.",
"Sedyeye alınırken “Adın ne?” diye soruyor. “Tolga.” “Sağ ol Tolga.”"
], secenekler: [
{ t: "Her sabah bu on bir dakikayı yapmaya karar verirsin.", to: "a5", etki: { bag: 2, her_sabah_el: true } },
{ t: "Yarın onu kurtarmaya karar verirsin.", to: "a5", etki: { anlam: 1 } },
{ t: "Nazlı'nın resimlerini merak eder, yarın sormaya karar verirsin.", to: "a5", etki: { bag: 1, resim: true } },
{ t: "Kaldırımda bir süre oturup ellerine bakarsın.", to: "a5", etki: { anlam: 1 } }
]},

a5: { saat: "Salı, 18.00", baslik: "Tilki", metin: [
P(S("a4B"), "“Dur!” diye bağırdın. Nazlı duymadı ama şoför duydu. Fren bir saniye erken mi geç mi bastı bilinmez, Nazlı yine düştü. Bu kez bacağı değil, kolu kırıldı."),
P(S("x_kurtarA"), "“Yarın,” dedin, Nazlı bisikletine bindi. Yarın 08.20'de seni tanımayacak, sen de yine atlayacaksın."),
P(S("x_kurtarB"), "Bulvar'daki büfede iki çay içtiniz. Nazlı resmi, bıraktığı okulu, annesini anlattı. Teslimat kırk dakika gecikti, patronu arayıp bağırdı. Nazlı telefonu kapatırken “Değdi,” dedi."),
P(S("x_kurtarC"), "Nazlı yüzüne baktı, çantasını omzuna aldı. “Ağabey, birini aramamı ister misin?” dedi. Bir hayat kurtarmıştın ve sana deliymişsin gibi bakıyordu."),
P(S("x_kurtarD"), "Arkandan “Hey!” diye seslendi ama dönmedin. Dirseğin bütün gün sızladı, gece yarısı sıyrık da kayboldu."),
P(S("x_elA"), "Her sabah on bir dakika, bir el ve Kayseri'ye bir telefon."),
P(S("x_elB"), "Yarın kurtarırsan bugün tuttuğun el hiç olmamış olacaktı. Bütün gün bunu düşündün."),
P(S("x_elC"), "Bütün gün onun resimlerini düşündün. Hangi rengi seviyordu acaba?"),
P(S("x_elD"), "Avucunda Nazlı'nın kanından küçük bir leke kalmıştı. Gece yarısı o da gidecekti ama yıkamadın."),
"Saat 18.00, bir ilkokulun spor salonundasın. Plastik sandalyeler, havaya kaldırılmış telefonlar, sahnede karton bir gezegen ve bir gül var.",
P(function(d){ return d.yapmadi; }, "Sabah bir şey yapmamıştın, minibüs çarpmış, Nazlı düşmüştü. O düşüş bütün gün aklından çıkmadı."),
"Bu kez zamanında geldin. Burcu ön sırada oturuyor, şaşırıyor ve yanındaki boş sandalyeyi gösteriyor.",
"Perde açılıyor. Sarı perukla bir oğlan, bir gül, bir kral ve bir tilki çıkıyor.",
"Tilki Ela. Turuncu kostümü, karton kulakları ve kuyruğu var. Seni görüyor, repliğini unutacak gibi oluyor, sonra gülümsüyor.",
"“Benimle oynayamazsın, ben evcilleştirilmedim.”",
"“Evcilleştirmek ne demek?”",
"“Bağ kurmak,” diyor Ela. “Şimdilik sen benim için yüz bin küçük çocuktan birisin. Ama beni evcilleştirirsen, sen benim için dünyada tek olursun.”",
"Seyirciler gülüyor ama sen gülmüyorsun.",
"Gece yarısı bu replik de silinecek ve Ela yarın seni yine ilk kez görecek."
], secenekler: [
{ t: "Burcu'nun “önemli” dediği şey bu akşam söylenmeden kalsa da Ela'yla yürürsün.", to: "a6", etki: { bag: 2, yuruyus: true } },
{ t: "Ela kostümüyle arka koltuğa binerken Burcu'yla kahveye gidersin.", to: "a6", etki: { bag: 1, burcu_kahve: true } },
{ t: "İkisine de “Başka zaman” deyip eve gider, bu günü kâğıda dökersin.", to: "a6", etki: { anlam: 1, replik: true } },
{ t: "Nasılsa yarın sıfırlanacak diye bir bara gidersin.", to: "a6", etki: { haz: 1, bar: true } }
]},

a6: { saat: "Otuzuncu salı", baslik: "Otuzuncu Salı", metin: [
P(S("a5B"), "Kızılay'da eskiden birlikte gittiğiniz kafeye gittiniz. Burcu fincanı iki eliyle tutarak söyledi, bir iş teklifi almış, haziranda Ela'yla İzmir'e taşınıyorlarmış. Bir şey diyemedin. Haziran hiç gelmeyecekti ve bu düşünce bir an sana rahatlık gibi geldi. Bundan utandın."),
P(S("a5C"), "“Başka zaman,” dedin ve Ela'nın yüzü söndü. Eve gidip yazarken bu cümleyi daha önce de kurduğunu hissettin ama nerede kurduğunu hatırlayamadın."),
P(S("a5A"), "Ela tilki kostümüyle, kuyruğunu sallaya sallaya eve kadar yürüdünüz. Bütün yol konuştu, Küçük Prens'i oynayan çocuk sahnede burnunu karıştırmış. Kapıda sana sarıldı. “Geldin,” dedi."),
P(S("a5D"), "Bir bar, bir şişe, bir yabancı, sonra yine 06.47. Başın bile ağrımıyordu, hiçbir şeyin bedeli yoktu."),
"Otuz salı geçti, yani bir ay.",
"Fincanı artık tezgâha çarpmıyorsun, elini kaydırıyorsun. Radyodaki şarkının bütün sözlerini ezbere biliyorsun. Nihat Bey'in unuttuğu dosyanın numarasını söylüyorsun, o da her seferinde şaşırıyor. Mercimek bitmeden kantine iniyorsun.",
"Ne yaparsan yap gece yarısı siliniyor, bir iyilik de, bir yumruk da, bir öpücük de.",
"Bir gece saat 23.58'de tavana bakıyorsun."
], secenekler: [
{ t: "Hiçbir şeyin bedeli yoksa her şeyi yaparsın. Kendinden başka hiçbir şey kaybetmezsin.", to: "h1", etki: { haz: 2, kol: "haz" } },
{ t: "Herkesi kurtarmak için her dakikayı hesaplayıp kusursuz bir gün kurmaya çalışırsın.", to: "m1", etki: { bag: 1, anlam: 1, kol: "mukemmel" } },
{ t: "Gösteriyi tekrar tekrar kaçırmak pahasına bile döngüden çıkmanın yolunu ararsın.", to: "k1", etki: { anlam: 1, kol: "kacis" } },
{ t: "Kimsenin değiştiğini bilmeyeceği biri olmayı kabul edip her gün bir dil, bir enstrüman, bir insan, yeni bir şey öğrenirsin.", to: "o1", etki: { anlam: 2, kol: "ogren" } }
]},

/* ---------- HAZ KOLU ---------- */
h1: { saat: "Salı 31–100", baslik: "Bedelsiz", metin: [
"Bir salı toplantıda Nihat Bey'e yıllardır söylemek istediğin her şeyi söylüyorsun, seni kovuyor. Sonra saat 06.47 oluyor ve sabah seni selamlıyor.",
"Bir salı kredi kartının bütün limitini harcıyorsun, bir saate, bir takım elbiseye, bir restorana. 06.47'de limit yerinde duruyor.",
"Bir salı Bodrum'a uçuyorsun. Mart ayı, deniz buz gibi ama giriyorsun, dişlerin takır takır ediyor. 06.47'de yine Kızılay'dasın.",
"Bir salı bir barda bir kadınla tanışıyorsun. 06.47'de kadın seni hiç tanımamış oluyor.",
"Elli salı geçiyor, seksen, yüz.",
"Yüzüncü salı bir restoranda, ilk günlerde bir aylık maaşına mal olacak bir tabağın başında oturuyorsun ama hiçbir tadı yok. Bir lokma ötekine bağlanmıyor, gece de sabaha bağlanmıyor."
], secenekler: [
{ t: "Daha büyük, daha tehlikeli, daha fazlasını denersin.", to: "h2", etki: { haz: 2, daha: true } },
{ t: "Bir gün hiçbir şey yapmadan yatakta kalırsın.", to: "h2", etki: { anlam: 1, yatakta: true } },
{ t: "Halit Bey'in bankına gidersin.", to: "h2", etki: { bag: 1, halit_h: true } },
{ t: "Yüz salıdır gitmediğin gösteriye gidersin.", to: "h2", etki: { bag: 1, gosteri_h: true } }
]},

h2: { saat: "Salı 100–300", baslik: "Boşluk", metin: [
P(S("h1A"), "Bir araba çalıp Eskişehir yolunda iki yüz kırkla sürdün, bir köprünün korkuluğunda yürüdün. Hepsi silindi ama her seferinde içinden bir şey eksildi, ne olduğunu bilmiyorsun."),
P(S("h1B"), "Bütün gün tavana baktın. 18.10'da Burcu'dan “Gelmedin, yine” diye bir mesaj geldi. 06.47'de mesaj silindi ama senin hatıran silinmedi."),
P(S("h1C"), "Halit Bey hiçbir şey sormadı, bir saat birlikte oturdunuz. “Her gün aynı güvercinler,” dedi, “ama her gün ilk kez bakıyormuş gibi bakarım, yoksa sıkılırdım.”"),
P(S("h1D"), "Ela tilkiydi, “bağ kurmak” dedi. Gösteriden sonra sana koştu ama sen kalkıp çıktın ve arabada direksiyona kapandın."),
"İki yüz salı geçiyor, üç yüz.",
"Bir sabah alarmı kapatmıyorsun, çalıyor, çalıyor.",
"İstediğin hiçbir şey kalmamış, her şeyi denemişsin. Silinen her şeyle birlikte bir şey istemek de silinmiş."
], secenekler: [
{ t: "Bir çay, biraz güneş gibi küçük bir şeyi yeniden istemeyi denersin.", to: "h3", etki: { anlam: 1, kucuk: true } },
{ t: "Halit Bey'e gidip ne yapman gerektiğini sorarsın.", to: "o2", etki: { bag: 1, kol: "ogren", haz_halit: true } },
{ t: "Bu boşlukta kalırsın.", to: "h3", etki: { haz: 1, bosluk: true } },
{ t: "Ela'yı gösteriden önce, öğlen okuldan alırsın.", to: "h3", etki: { bag: 2, ela_ogle: true } }
]},

h3: { saat: "Salı 300+", baslik: "Bir Çay", metin: [
P(S("h2C"), "Günlerce o boşlukta kaldın. Sonra bir sabah, hiçbir sebep yokken bir çay bahçesinin önünde durdun."),
P(S("h2A"), "Kızılay'da bir çay bahçesine oturdun. Çay sıcaktı ve üç yüz salıdır bir şeyin sıcak olduğunu fark etmemiştin. Bir yudum daha aldın."),
P(S("h2D"), "Öğretmene bir yalan söyleyip Ela'yı okuldan aldın. Bir pastanede profiterol yerken yüzü gözü çikolata oldu. “Aynı günü hep yaşasan ne yapardın?” diye sordun. Ela düşündü. “Her gün sana bir şey öğretirdim,” dedi, “çünkü sen hep unutuyorsun.”"),
"Her şeyi tüketme açlığın geçti.",
"Geride küçük bir yer açıldı, bir çay bardağı kadar."
], secenekler: [
{ t: "Bundan sonra her salıyı Ela'ya adarsın.", to: "t1", etki: { bag: 2, ela_adadi: true } },
{ t: "Her sabah Halit Bey'in bankında oturmaya başlarsın.", to: "t1", etki: { bag: 1, anlam: 1, halit_sabah: true } },
{ t: "Bu kez daha yavaş, daha dikkatli bir şekilde eğlenmeye dönersin.", to: "t1", etki: { haz: 1, yavas_haz: true } },
{ t: "Her gün aynı çay bahçesinde aynı çayı içersin.", to: "t1", etki: { anlam: 1, cay_her: true } }
]},

/* ---------- MÜKEMMEL KOLU ---------- */
m1: { saat: "Salı 31–60", baslik: "Kusursuz Gün", metin: [
"Bir kâğıda dakika dakika bir plan yapıyorsun.",
"06.47 fincan. 07.15 Burcu'ya “Geleceğim.” 07.30 otobüste tartışan yolcuyu sakinleştir. 08.05 yaşlı bir kadını karşıdan karşıya geçir. 08.19 Nazlı. 09.00 Nihat Bey'in dosyası. 12.30 son mercimeği stajyere ver. 17.30 papatya. 18.00 ön sıra.",
"Otuz salı boyunca her gün bir şey ters gidiyor. Bir gün otobüsü kaçırıyorsun. Bir gün yaşlı kadın seni tanımadığı için korkup çantasına sarılıyor. Bir gün Nazlı'yı kurtarırken kolun kırılıyor ve gösteriye alçıyla gidiyorsun.",
"Bir saniye erken, bir adım sola ya da farklı bir kelime her şeyi değiştiriyor.",
"Altmışıncı salı her şey yerine oturuyor. Nazlı sağ, kadın karşıya geçti, Nihat Bey memnun, stajyer çorbasını içti. Ela'ya papatya verdin, ön sıradaydın ve gösteriden sonra Ela sana sarıldı.",
"Saat 23.58'de yataktasın.",
"23.59 oluyor. Şimdi mi?"
], secenekler: [
{ t: "Gözlerini kapatıp beklersin.", to: "m2", etki: { anlam: 1 } },
{ t: "Sonsuza kadar tekrarlamak için kusursuz günün listesini yazarsın.", to: "m2", etki: { anlam: 1, liste: true } },
{ t: "23.59'da ona bir şey söylemek için Burcu'yu ararsın.", to: "m2", etki: { bag: 1, burcu_gece: true } },
{ t: "Ela'nın sarılışını düşünürsün, bir şey eksikti.", to: "m2", etki: { bag: 1, yanlis: true } }
]},

m2: { saat: "Salı 61–200", baslik: "Bedel", metin: [
P(S("m1A"), "Saat 23.59'da her şey karardı, sonra alarm çaldı."),
P(S("m1B"), "Küçük harflerle bir sayfa doldurdun. Kâğıt silindi ama satırlar kafandaydı."),
P(S("m1C"), "Uykulu bir ses “Tolga? Ne oldu?” diye sordu. “Ela'yı böyle büyüttüğün için teşekkür ederim,” dedin. Cevap gelmeden saat döndü."),
P(S("m1D"), "Ela sıkı sarılmıştı ama kısacık. Kusursuz günü yaşayan sendin, Ela yalnızca babasının her şeyi doğru yaptığı bir akşam yaşamıştı."),
"Saat 06.47, yine salı.",
"Altmış birinci salı bir şey fark ediyorsun. Nazlı'yı kurtardığın sabahlar minibüs yoluna devam ediyor ve 08.35'te iki sokak ötede yaşlı bir adama çarpıyor. Önceden minibüs Nazlı'da durmuştu.",
"Kontrol ediyorsun. Kurtarınca 08.35'te yaşlı adama, kurtarmayınca Nazlı'ya çarpıyor.",
"Yaşlı adamı da kurtarmaya uğraşıyorsun ve bir gün başarıyorsun. O akşam sinirleri bozulan şoför Ela'nın okulunun önünde bir velinin arabasına çarpıyor.",
"Yüz salı, iki yüz salı geçiyor. Bir yeri kapatınca başka bir yer açılıyor."
], secenekler: [
{ t: "Bütün Kızılay'ı hesaba katan daha büyük bir plan yaparsın.", to: "m3", etki: { anlam: 1, buyuk_plan: true } },
{ t: "Yalnızca Nazlı'yı kurtarmaya devam edersin.", to: "m3", etki: { bag: 1, onundeki: true } },
{ t: "Kimseyi kurtarmamaya karar verirsin.", to: "m3", etki: { haz: 1, kurtarmama: true } },
{ t: "Halit Bey'e gidip bu terazinin ne olduğunu sorarsın.", to: "o2", etki: { bag: 1, kol: "ogren", mukemmel_halit: true } }
]},

m3: { saat: "Salı 200–500", baslik: "Kafes", metin: [
P(S("m2A"), "Bir harita, bir defter, yüzlerce isim. Bir gün neredeyse kusursuzdu, yalnızca bir kedi ölmüştü. Ertesi gün kediyi kurtardın, bu kez bir çocuk ağladı."),
P(S("m2B"), "Her sabah Nazlı'yı kurtardın, her sabah 08.35'te yaşlı bir adam düştü. Bir gün yüzüne baktın. Bastonlu bir adamdı, eczaneye gidiyordu, adı Rıfat'tı. Senin yüzünden her sabah bir kaldırıma düşüyordu."),
P(S("m2C"), "Kimseyi kurtarmadın. Nazlı her sabah düştü, Rıfat Bey her sabah eczaneye vardı. Sen de her sabah kaldırımda durup izledin."),
"Beş yüz salı geçiyor.",
"Bir gün hiçbir şeyi yaşamadığını, yalnızca yönettiğini fark ediyorsun.",
"Gösteride Ela tilki, sen ön sıradasın ama aklın 08.35'te, saatine bakıp duruyorsun.",
"Gösteriden sonra Ela sana koşuyor. “Baba, sen beni hiç dinlemedin.”",
"Bu cümleyi beş yüz salıdır ilk kez duyuyorsun."
], secenekler: [
{ t: "Haritayı yırtarsın.", to: "t1", etki: { bag: 2, yirtti: true } },
{ t: "Ela'dan özür dileyip bütün akşam onu dinlersin.", to: "t1", etki: { bag: 2, dinledi: true } },
{ t: "Bir gün kusursuz olacağını düşünüp haritayı geliştirmeye devam edersin.", to: "t1", etki: { anlam: 1, devam: true } },
{ t: "Halit Bey'in bankına gidersin.", to: "t1", etki: { bag: 1, anlam: 1, halit_m: true } }
]},

/* ---------- KAÇIŞ KOLU ---------- */
k1: { saat: "Salı 31–80", baslik: "Uyanık", metin: [
"Kural belli, gece yarısı. Ya hiç uyumazsan?",
"Kahve içiyorsun, film izliyorsun, soğuk duş alıyorsun. Saat 23.59 ve gözlerin açık.",
"00.00 olunca gözlerin açıkken her şey kararıyor, sonra alarm çalıyor.",
"Bir salı Sinop'a kadar arabayla gidiyorsun, gece yarısı bir otel odasındasın. 06.47'de Kızılay'da, kendi yatağında uyanıyorsun.",
"Bir salı Londra'ya uçuyorsun, saat dilimini deniyorsun. Ankara saatiyle 23.59'da bir havalimanı koltuğundasın. 06.47'de yine Kızılay.",
"Elli deneme, seksen deneme. Her yol aynı yatağa çıkıyor."
], secenekler: [
{ t: "Bir uyku kliniğine gidip uykunu izletirsin.", to: "k2", etki: { anlam: 1, klinik: true } },
{ t: "12 Mart'ta ne olduğunu, döngünün nedenini ararsın.", to: "k2", etki: { anlam: 1, neden: true } },
{ t: "Bir din adamına gidersin.", to: "k2", etki: { anlam: 1, din: true } },
{ t: "Halit Bey'e gidip onun da aynı şeyi yaşayıp yaşamadığını sorarsın.", to: "o2", etki: { bag: 1, kol: "ogren", kacis_halit: true } }
]},

k2: { saat: "Salı 80–200", baslik: "Neden", metin: [
P(S("k1B"), "E-postaları, fotoğrafları, takvimi didik didik ettin."),
P(S("k1A"), "Elektrotlar takıldı, kameralar kuruldu. 23.59'da teknisyen monitöre bakıyordu, 06.47'de sen kendi yatağındaydın ve teknisyen seni hiç görmemişti."),
P(S("k1C"), "Bir caminin imamı seni uzun uzun dinledi. “Belki bu bir sınav değildir evladım,” dedi. “Herkes ‘bir gün daha’ ister, sana verilmiş.” Tespihini çekti ve başka bir şey eklemedi."),
"12 Mart.",
"Boşanma davası mıydı? Hayır, o 14'üydü. Babanın ölümü eylüldeydi, Ela'nın doğum günü haziranda.",
"Sonra hatırlıyorsun. Bir yıl önce, 11 Mart gecesi saat on birde Ela aramıştı. “Baba, yarın prova var, gelir misin?” “Yarın işim var kızım.” “Ama baba...” “Başka zaman.”",
"Bu bir neden mi, bilmiyorsun. Ama o “başka zaman” şimdi önünde duruyor."
], secenekler: [
{ t: "Bu salı Ela'yı provaya götürürsün.", to: "k3", etki: { bag: 2, prova: true } },
{ t: "Bunun bir nedeni olmadığını kabul edersin.", to: "k3", etki: { anlam: 1, nedensiz: true } },
{ t: "Kaçmaya devam edersin.", to: "k3", etki: { anlam: 1, kacmaya: true } },
{ t: "Yatağa uzanıp bütün gün kalkmazsın.", to: "k3", etki: { haz: 1, dip: true } }
]},

k3: { saat: "Salı 200+", baslik: "Dip", metin: [
P(S("k2B"), "Kabul ettin, ya da kabul etmeye çalıştın. Kabul etmekle razı olmak arasında bir mesafe vardı ve sen o mesafede yaşadın."),
P(S("k2C"), "Van'a, Kars'a gittin, bir gemiye bindin. Bir gece bir tren istasyonunda saat 23.58'de ağlamaya başladın, yanındaki yaşlı kadın sana bir simit uzattı."),
P(S("k2A"), "Öğlen onu provaya götürdün. Ela kâğıttan okuyordu ve “bağ kurmak”ta takıldı. Sen fısıldadın. “Nereden biliyorsun?” diye sordu, bir şey demedin. 06.47'de döngü bitmemişti."),
P(S("k2D"), "Bir gün yatakta kaldın, bir gün daha, derken bir ay oldu. Her sabah alarm çaldı."),
"Bir sabah tavana bakarken dedenin anlattığı bir masal geliyor aklına. Bir adam bir kayayı tepeye itiyormuş, kaya aşağı yuvarlanınca inip yeniden itiyormuş. Masalın sonunda deden gülümser, “Bence o adam mutluydu,” derdi.",
"Çocukken buna kızardın. “Nasıl mutlu olur dede?” Deden omuz silkerdi. “İnerken elleri boş, belki o zaman ıslık çalıyordur.”",
"Senin kayan da bir salı."
], secenekler: [
{ t: "Kalkıp kahveni yaparsın ve fincan düşmez.", to: "t1", etki: { anlam: 2, sisifos: true } },
{ t: "Kalkıp Halit Bey'in bankına yürürsün.", to: "t1", etki: { bag: 1, anlam: 1, halit_k: true } },
{ t: "Kalkıp Ela'ya “Akşam görüşürüz tilki” diye bir mesaj atarsın.", to: "t1", etki: { bag: 2, mesaj_k: true } },
{ t: "Henüz kalkmazsın.", to: "t1", etki: { haz: 1, kalkmadi: true } }
]},

/* ---------- ÖĞRENME KOLU ---------- */
o1: { saat: "Salı 31–300", baslik: "Piyano", metin: [
"Kızılay'da bir müzik kursu var. Müjgan Hanım altmışlarında, emekli bir konservatuvar hocası, parmakları romatizmadan yamulmuş. Her salı ilk dersin oluyor ve her salı “Hiç piyano çaldınız mı?” diye soruyor. “Hayır,” diyorsun.",
"Her salı biraz daha iyi çalıyorsun ve Müjgan Hanım her salı şaşırıyor.",
"Elli salı sonra bir Chopin noktürnü çalıyorsun. Müjgan Hanım'ın gözleri doluyor. “Bunu size kim öğretti?”",
"Siz öğrettiniz, demek istiyorsun, elli kere.",
"Sonra Arapça öğreniyorsun, sonra resim. Sonra kütüphanede her gün elli sayfa okuyorsun. Sonra insanları öğreniyorsun.",
"Otobüs şoförünün kızı hasta. Trafik ışığındaki kadının oğlu Almanya'da. Kantindeki stajyer şiir yazıyor. Nihat Bey'in dosyayı unutmasının nedeni de karısının dün akşam aldığı teşhis."
], secenekler: [
{ t: "Nihat Bey'e karısını sorarsın.", to: "o2", etki: { bag: 2, nihat: true } },
{ t: "Piyanoda Ela için bir şarkı yazarsın.", to: "o2", etki: { bag: 1, anlam: 1, sarki: true } },
{ t: "Her sabah Nazlı'ya resmi bırakmamasını söylersin.", to: "o2", etki: { bag: 1, nazli_resim: true } },
{ t: "Halit Bey'in hikâyesini öğrenmeye karar verirsin.", to: "o2", etki: { anlam: 1, halit_ogren: true } }
]},

o2: { saat: "Bir sabah", baslik: "Halit", metin: [
P(S("o1C"), "Her sabah 08.20'den önce Nazlı'yı durdurup “Resim yapmayı bırakma,” dedin. Bazı sabahlar güldü, bazı sabahlar kızdı. Bir sabah “Nereden biliyorsun?” diye sordu."),
P(S("o1D"), "Onu acele ettiremezdin, o hikâye bir salıya sığmazdı. Her sabah biraz daha uzun oturdun."),
P(function(d){ return d.haz_halit || d.mukemmel_halit || d.kacis_halit; }, "Bütün o salılardan sonra Halit Bey'in bankına gittin, yanındaki yeri gösterdi."),
P(S("o1A"), "Koridorda Nihat Bey'e karısını sordun. Uzun uzun yüzüne baktı, sonra ağladı, kırk yıllık bir müdür. Bir saat konuştunuz ve ertesi salı seni hatırlamıyordu."),
P(S("o1B"), "Ela'nın tilki repliğine bir melodi yazdın ve bir gün bitti. Gösteriden sonra okulun iki tuşu basmayan eski piyanosunda çaldın. “Bu benim şarkım mı?” dedi Ela ve ağladı."),
"Halit Bey'in bankındasın.",
"“Siz de mi aynı günü yaşıyorsunuz?”",
"Halit Bey uzun süre ekmek atıyor.",
"“Hayır evlat, benim takvimimin yaprağı düşüyor. Ama karım öldüğünden beri kırk yıldır bu banktayım. Hep aynı saatte, hep aynı ekmekle.”",
"“İlk yıl her gün ağladım. İkinci yıl ağlamadım, kendime kızdım. Onuncu yıl her gün aynı şeyi yaptığımı ama her günün başka olduğunu fark ettim. Güvercinler başka, ben başkayım.”",
"“Sen aynı mısın?”"
], secenekler: [
{ t: "“Hayır, her gün değişiyorum,” dersin.", to: "o3", etki: { anlam: 2 } },
{ t: "Halit Bey'den karısını anlatmasını istersin.", to: "o3", etki: { bag: 2, halit_es: true } },
{ t: "“Bu döngüden çıkmak istiyorum,” dersin.", to: "o3", etki: { anlam: 1, cikmak: true } },
{ t: "Bir avuç ekmek alıp güvercinlere atarsın.", to: "o3", etki: { bag: 1, ekmek: true } }
]},

o3: { saat: "Bininci salı", baslik: "Bin Salı", metin: [
P(S("o2A"), "“O zaman aynı günü yaşamıyorsun evlat,” dedi, “yalnızca aynı takvimi.”"),
P(S("o2C"), "“Ben de kırk yıl çıkmak istedim,” dedi, “sonra içeride kalmanın da bir yol olduğunu gördüm.”"),
P(S("o2D"), "Bir saat boyunca hiç konuşmadan ekmek attınız."),
P(S("o2B"), "Karısının adı Sevinç'miş, terziymiş, kırk iki yıl evli kalmışlar. “Bazen düşünürüm,” dedi, “o kırk iki yılı kavgalarıyla, hastalığıyla, ölümüyle aynen yeniden yaşamak ister miyim diye. Her seferinde evet diyorum.”"),
"Bininci salıya geldin, saymayı bıraktın.",
"Piyano çalıyorsun ve Müjgan Hanım her salı ağlıyor. Arapça kursunda Suriyeli bir öğretmen var, Rana Hanım, seninle Halep'i konuşuyor. Resim yapıyorsun, her sabah Nazlı'ya bir tanesini gösteriyorsun.",
"Kızılay'daki herkesi tanıyorsun ama kimse seni tanımıyor.",
"Bir akşam gösteriden sonra Ela soruyor: “Baba, sen nasıl bu kadar çok şey biliyorsun? Geçen hafta piyano bilmiyordun.”"
], secenekler: [
{ t: "“Seni dinleyerek öğrendim,” dersin.", to: "t1", etki: { bag: 2 } },
{ t: "“Bir gün anlatacağım,” dersin.", to: "t1", etki: { anlam: 1 } },
{ t: "Ela'ya piyano öğretmeyi teklif edersin.", to: "t1", etki: { bag: 1, anlam: 1, ela_piyano: true } },
{ t: "Onu kucaklarsın.", to: "t1", etki: { bag: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Salı", baslik: "Sayısız", metin: [
P(S("h3A"), "Her salı aynıydı, öğlen okul çıkışı, pastane, gösteri ve eve yürüyüş. Ela her gün seni yeniden şaşkınlıkla karşılıyordu, sen de onu her gün biraz daha tanıyordun."),
P(S("h3B"), "Her sabah banktaydın. Çoğu sabah hiç konuşmadınız, güvercinler, ekmek ve mart güneşi yetiyordu."),
P(S("h3C"), "Bir yemeği bir saatte yedin, bir şarkıyı yirmi kere dinledin. Tatmayı yeniden öğreniyordun."),
P(S("h3D"), "Hep aynı masa, aynı çay. Garson seni her gün yabancı sanıyordu, sen de her gün onun nasırlı ellerine biraz daha dikkatle bakıyordun."),
P(S("m3A"), "Haritayı yırttın, yüzlerce isim parça parça çöpe gitti. Gece yarısı zaten silinecekti ama yırtmak senin elindeydi."),
P(S("m3B"), "Pizzacıda ve eve dönerken onu dinledin. Sınıfta bir kızla küsmüş, tilki kostümünü sevmiyormuş, aslında gülü oynamak istiyormuş."),
P(S("m3C"), "Haritanın kenarına küçük harflerle “18.00 – dinle” yazdın, sildin, sonra yeniden yazdın."),
P(S("m3D"), "Haritayı Halit Bey'in yanına koydun. Halit Bey baktı, “Ağır,” dedi. Bir güvercin gelip üstüne kondu."),
P(S("k3A"), "Kahveni yaptın ve fincan düşmedi. Düşürmemeyi seçtiğini hissettin."),
P(S("k3B"), "Halit Bey tanımadığı bir adama yanındaki yeri gösterdi, sen de oturdun."),
P(S("k3C"), "Bir dakika sonra üç tilki emojisi geldi. Her mesajına aynı cevabı veriyordu ve bunu yeni fark ettin."),
P(S("k3D"), "Bir gün daha kalkmadın. Sonra bir sabah, hiçbir sebep yokken kalktın."),
P(S("o3A"), "Ela kaşlarını çattı, anlamadı ama sana sarıldı."),
P(S("o3B"), "“Söz mü?” dedi. Söz verdin, sonsuz kere verdin ve sonsuz kere tutamadın."),
P(S("o3C"), "Okulun eski piyanosunda ona üç nota öğrettin. Her seferinde sıfırdan başladı ama her seferinde biraz daha hızlı öğrendi. Parmak uçlarında bir şey gece yarısını geçiyor muydu acaba?"),
P(S("o3D"), "Karton kulak burnuna battı, Ela güldü, sen de güldün."),
"Saymayı bıraktın. Bir zamanlar kâğıda çentik atıyordun ama kâğıt siliniyordu. Sonra kafanda saydın, bir yerde karıştı.",
P(function(d){ return d.kol === "haz"; }, "Büyük şeylerin tadı kalmadı ama bir çayın tadı, bazen, var."),
P(function(d){ return d.kol === "mukemmel"; }, "Kusursuz bir gün yokmuş, her kurtarış başka bir kazaya yol açtı."),
P(function(d){ return d.kol === "kacis"; }, "Her yol aynı yatağa çıktı ve şimdi her sabah kalkıyorsun."),
P(function(d){ return d.kol === "ogren"; }, "Bir piyano, bir dil, bir şehir öğrendin. Hiçbiri ertesi güne geçmedi, yalnızca sana geçti."),
"Bir sabah saat 07.28'de otobüs durağındasın.",
"Her gün başka bir şey görüyorsun. Bir gün şoförün gözlerindeki yorgunluğu, bir gün trafik ışığındaki kadının Almanya'dan mesaj beklediği telefonunu, bir gün Nazlı'nın kulaklığından taşan şarkıyı görüyorsun. Annesinin dinlediği bir Arapça şarkıymış.",
"Halit Bey bankta oturuyor ve seni tanımadığı hâlde sana el sallıyor. Belki de herkese sallıyordur."
], secenekler: [
{ t: "Halit Bey'in yanına oturursun.", to: "t1b", etki: { bag: 1 } },
{ t: "Otobüs şoförüne adıyla, “Günaydın Recep Ağabey,” dersin.", to: "t1b", etki: { bag: 1, recep: true } },
{ t: "Durakta durup gökyüzüne bakarsın.", to: "t1b", etki: { anlam: 1 } },
{ t: "Bugün otobüse binmeyip yürümeye karar verirsin.", to: "t1b", etki: { anlam: 1, yurudu: true } }
]},

t1b: { saat: "Salı", baslik: "Halit'in Sorusu", metin: [
P(S("t1A"), "Halit Bey kese kâğıdını sana uzattı."),
P(S("t1C"), "O sabah gökyüzündeki bir bulutun hep aynı yerde, aynı şekilde durduğunu fark ettin, bir köpek başına benziyordu. Sonra banka yürüdün."),
P(S("t1D"), "Yürüdün, bir fırının, bir ayakkabı tamircisinin önünden geçtin, camlarından gördüğün dükkânların kokusunu aldın. Bankta Halit Bey'in de her sabah Ulus'tan yürüyerek geldiğini öğrendin."),
P(S("t1B"), "“Günaydın Recep Ağabey,” dedin. Şoför şaşırdı, “Tanışıyor muyuz?” dedi. Gülümsedin. O sabah yolcuyla tartışmadı."),
"Bankta Halit Bey'in yanında oturuyorsun.",
"“Size garip bir soru soracağım.”",
"“Sor evlat.”",
"“Biri gelip size bu hayatı bütün acılarıyla, sevinçleriyle, aynen sonsuz kere yeniden yaşayacağınızı söylese ne dersiniz?”",
"Halit Bey uzun süre ekmek atıyor.",
"“Önce ağlarım. Sevinç'in hastalığını, son gecesini sonsuz kere yaşamak...”",
"“Sonra evet derim, çünkü o son gece elini tuttuğum geceydi. Hastalık sonsuz kere gelecekse el de sonsuz kere gelecek. Birini almadan öbürünü alamazsın.”",
"“Ya sen? Bu salıyı sonsuz kere yaşamak ister misin?”"
], secenekler: [
{ t: "“Bilmiyorum,” dersin.", to: "t2", etki: { anlam: 1, bilmiyorum: true } },
{ t: "“Hayır, ben bir yarın istiyorum,” dersin.", to: "t2", etki: { haz: 1, yarin: true } },
{ t: "Sesinde bir tereddütle “Evet,” dersin.", to: "t2", etki: { anlam: 1, tereddut: true } },
{ t: "Bir şey demeden güvercinlere bakarsın.", to: "t2", etki: { bag: 1 } }
]},

t2: { saat: "Salı, 18.00", baslik: "Gösteri", metin: [
P(S("t1bA"), "“İyi,” demişti Halit Bey, “bu soruya cevap verebilen biri zaten bilmiyordur.”"),
P(S("t1bB"), "Halit Bey gülmüştü. “Yarın gelince onu da bugün gibi yaşarsın,” demişti. Bütün gün buna kızdın."),
P(S("t1bC"), "Halit Bey sesindeki titremeyi duymuştu. “Yarım bir evet de bir şeydir,” demişti."),
P(S("t1bD"), "Halit Bey üstelememişti, bir saat boyunca ekmek attınız."),
"Akşam oluyor, spor salonundasın, sahnede karton gezegen duruyor.",
"Burcu ön sırada oturmuş, yanındaki sandalyeyi gösteriyor.",
"Perde açılıyor.",
"Ela “Benimle oynayamazsın, ben evcilleştirilmedim,” diyor.",
"Ela'nın sesindeki küçük titremeyi, son hecede sesinin nasıl yükseldiğini, kulaklardan birinin hep biraz yana kaydığını ezbere biliyorsun."
], secenekler: [
{ t: "Gösteriden önce sahne arkasına gidip Ela'yı bulursun.", to: "y_kulis", etki: { bag: 2, kulis: true } },
{ t: "Oturup bütün gösteriyi ilk kez izliyormuş gibi izlersin.", to: "y_izle", etki: { anlam: 2, izle: true } },
{ t: "Burcu'nun elini tutarsın.", to: "t3", etki: { bag: 1, burcu_el: true } },
{ t: "Gece yarısı silineceğini bile bile telefonunla kaydedersin.", to: "t3", etki: { anlam: 1, kayit: true } }
]},

y_kulis: { saat: "Salı, 17.45", baslik: "Kulis", metin: [
"Sahne arkasında kostümler, karton parçalar var, bir öğretmen “Sessiz olun!” diye fısıldıyor.",
"Ela bir köşede tek başına oturuyor, karton kulakları elinde, gözleri dolu.",
"“Baba? Sen buraya hiç gelmezdin.”",
"“Ne oldu tilki?”",
"“Repliğimi unutacağım ve herkes gülecek. Sen de geç kalıp görmeyeceksin. Ya da göreceksin. Hangisi daha kötü bilmiyorum.”",
"Sahnede hiç unutmadı ama sen bu köşeyi hiç görmemiştin.",
"“Unutmayacaksın.”",
"“Nereden biliyorsun?”",
"Onun titremesiyle, son hecedeki yükselişiyle repliği söylüyorsun: “Bağ kurmak. Şimdilik sen benim için yüz bin küçük çocuktan biri gibisin...”",
"“Baba, sen benim repliğimi biliyorsun.”"
], secenekler: [
{ t: "Repliğin devamını söylersin: “Sen benim için dünyada teksin.”", to: "t3", etki: { bag: 2, tek: true } },
{ t: "Karton kulaklarını takarsın.", to: "t3", etki: { bag: 1, kulak: true } },
{ t: "Ona her şeyi, döngüyü, salıları anlatırsın.", to: "t3", etki: { anlam: 1, anlatti_ela: true } },
{ t: "O sahneden inene kadar perdenin arkasında beklersin.", to: "t3", etki: { bag: 2, perde: true } }
]},

y_izle: { saat: "Salı, 18.00", baslik: "İlk Kez", metin: [
"İzliyorsun.",
"Küçük Prens'in peruğu yamuk duruyor, çocuk her seferinde düzeltmeye çalışıyor. Gül bir yaprağını düşürüyor. Kralın karton tacının bir köşesi bantlanmış.",
"Ela'nın kuyruğu Burcu'nun eski bir eşarbından yapılmış, turuncu ama solmuş. Kulaklardan birinin içine mavi kalemle küçük bir kalp çizilmiş. O kulağı sayısız kere görmüştün ama kalbi hiç görmemiştin.",
"“Evcilleştirmek ne demek?”",
"“Bağ kurmak.”",
"“Sen benim için dünyada tek olursun,” derken Ela sana bakıyor. Her seferinde bakıyor muydu acaba, bilmiyorsun."
], secenekler: [
{ t: "Gösteriden sonra Ela'ya kulağındaki kalbi sorarsın.", to: "t3", etki: { bag: 2, kalp: true } },
{ t: "Salonun ortasında ağlarsın.", to: "t3", etki: { bag: 1, anlam: 1 } },
{ t: "Burcu'ya ne için olduğunu söylemeden “Teşekkür ederim,” dersin.", to: "t3", etki: { bag: 1, burcu_tesekkur: true } },
{ t: "Perde kapanana kadar kıpırdamadan izlersin.", to: "t3", etki: { anlam: 1 } }
]},

t3: { saat: "Salı, 23.00", baslik: "Ses", metin: [
P(S("t2C"), "Burcu önce elini çekecek gibi oldu, sonra bırakmadı. Tilki sahneden ellerinizi gördü, repliğinde tökezledi, sonra güldü."),
P(S("t2D"), "Gece on birde videoyu açtın. Bir saat sonra silinecekti, üç kere izledin."),
P(S("y_kulisA"), "Ela gözlerini kocaman açtı, kuyruğunu düzeltip sahneye çıktı ve son cümlede sana baktı."),
P(S("y_kulisB"), "Kulaklardan biri yine yana kaydı. “Bırak,” dedi Ela, “tilkinin kulağı böyle olur.”"),
P(S("y_kulisD"), "Perdenin arkasında bekledin. Ela sahneden inince önce sana koştu. Bir öğretmen seni kulisten çıkarmak istedi ama Ela elini bırakmadı."),
P(S("y_izleB"), "Plastik bir sandalyede ağladın. Burcu bir şey sormadan bir mendil uzattı, sonra kendi gözlerini sildi."),
P(S("y_izleC"), "“Ne için?” dedi Burcu, söyleyemedin. Eski bir alışkanlıkla bir saniyeliğine başını omzuna yasladı."),
P(S("y_izleD"), "Herkes çıkarken sen hâlâ oturuyordun. Ela sahnenin kenarından “Baba, bitti!” diye seslendi."),
P(S("y_izleA"), "“Senin için,” dedi Ela. “Herkes kulağına bir şey çizdi, ben de kalp çizdim. Geleceğini bilmiyordum ama yine de çizdim.”"),
P(S("y_kulisC"), "Ela dinledi. “Yani yarın beni hatırlamayacak mısın?” dedi. Ben hatırlayacağım, dedin, sen beni hatırlamayacaksın. Ela düşündü. “O zaman her gün bana yeniden anlat,” dedi, “ben de her gün yeniden inanırım.”"),
"Gece saat on bir, evdesin.",
"Bir saat sonra her şey sıfırlanacak.",
"Odada bir ses duyuyorsun. Kafanın içinden mi geliyor, yorgunluktan mı, bilmiyorsun.",
"“Bu hayatı şimdi yaşadığın gibi sayısız kere yeniden yaşayacaksın. Her acıyı, her sevinci aynı sırayla. Bu kahveyi, bu minibüsü, bu tilkiyi.”",
"Halit Bey'in sabahki sorusunun yankısı gibi."
], secenekler: [
{ t: "Gece yarısına kadar bu soruyu düşünürsün.", to: "t4", etki: { anlam: 1 } },
{ t: "Sese “Hayır!” diye bağırırsın.", to: "t4", etki: { haz: 1, hayir: true } },
{ t: "Ela'yı ararsın.", to: "t4", etki: { bag: 1, son_ara: true } },
{ t: "Halit Bey'i, Sevinç'in elini düşünürsün.", to: "t4", etki: { bag: 1, anlam: 1, nermin: true } }
]},

t4: { saat: "Salı, 23.59", baslik: "23.59", metin: [
P(S("t3A"), "Soru her seferinde başka bir yüzle geldi, Nazlı'nın, Halit Bey'in, Ela'nın."),
P(S("t3B"), "Komşu duvara vurdu ama ses cevap vermedi."),
P(S("t3D"), "Hastalık sonsuz kere gelecekse el de sonsuz kere gelecekti."),
P(S("t3C"), "Ela uykulu bir sesle açtı. “Baba? İyi misin?” İyiyim, dedin. “Gösteriye geldin, bunu hatırlayacağım,” dedi. Hatırlamayacaktı, sen hatırlayacaktın."),
"Saat 23.59.",
"Kahve fincanı, radyo, Nazlı'nın sarı çantası, fren sesi, güvercinler, mercimek çorbası, tilki, hepsi aklından geçiyor.",
P(function(d){ return d.kol === "haz"; }, "Tatsız tabaklar, hatırlanmayan geceler de."),
P(function(d){ return d.kol === "mukemmel"; }, "Haritalar, kurtarışlar, Rıfat Bey'in düşüşü de."),
P(function(d){ return d.kol === "kacis"; }, "Sinop, Londra, uyku kliniği, yatakta geçen o ay da."),
P(function(d){ return d.kol === "ogren"; }, "Chopin, Arapça, bir şehrin bin hayatı da."),
"Otuz saniye kaldı.",
"Evet dersen Nazlı'nın düşüşüne de evet demiş olacaksın, Ela'nın repliğine de.",
"On saniye kaldı."
], secenekler: [
{ t: "Gerçekten kastederek, fısıltıyla “Evet,” dersin.", to: "ss", etki: { amor: true, anlam: 2 } },
{ t: "Ela'yı her gün yeniden bulmak şartıyla “Evet,” dersin.", to: "ss", etki: { amor: true, bag: 2, sartli: true } },
{ t: "“Hayır,” deyip gözlerini kapatırsın.", to: "ss", etki: { haz: 1, ret: true } },
{ t: "Bir şey demeden saatin son saniyesine bakarsın.", to: "ss", etki: { anlam: 1, sessiz: true } }
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
P(S("t4A"), "On saniye kala “Evet” demiştin."),
P(S("t4B"), "Bir dua gibi, şartlı bir evet demiştin."),
"Alarm 06.47'de çalıyor.",
"Ekranda “Çarşamba, 13 Mart” yazıyor.",
"Yatakta oturup ekrana bakıyorsun. Neden bitti, bilmiyorsun.",
"Kahve makinesine gidiyorsun, alışkanlıktan fincanı kenara çarptırmıyorsun.",
"Radyoda bilmediğin bir şarkı çalıyor ve bir şarkı yeni diye ağlıyorsun.",
"Burcu'dan mesaj geliyor: “Ela dün akşam bütün gece senden bahsetti. Cumartesi yemeğe gelir misin?”",
"Pencereden bakıyorsun, köpek bu sabah başka bir ağacın dibinde duruyor.",
"Bugün ne olacağını bilmiyorsun. Ayakkabını giyerken bağcığın kopuyor ve gülüyorsun."
]},

son_sisifos: { son: true, baslik: "Dedenin Masalı", metin: [
P(S("t4A"), "“Evet” demiştin ama 06.47 yine geldi."),
P(S("t4B"), "Şartlı bir evet demiştin ama döngü bitmedi."),
"Alarm 06.47'de çalıyor. Salı, 12 Mart.",
"Bir “evet”in anahtar olduğunu sanmıştın.",
"Kahveni yapıyorsun. Bu sabah radyodaki şarkıya eşlik ediyorsun, nakaratta sesin çatlıyor.",
"Bankta Halit Bey oturuyor. “Bugün hava güzel. Dün de güzeldi, yarın da güzel olacak.” “Evet,” diyorsun.",
"Dedenin masalı aklında. Kaya aşağı yuvarlanıyor, adam boş elleriyle peşinden iniyor. Deden “Belki ıslık çalıyordur,” derdi.",
"Bulvar'a yürürken ıslık çalıyorsun, hem de kötü. Halit Bey arkandan gülüyor."
]},

son_bos: { son: true, baslik: "Boşluk", metin: [
P(S("t4C"), "“Hayır” deyip gözlerini kapatmıştın, açtığında aynı tavan vardı."),
P(S("t4D"), "Son saniyeye baktın ve rakamlar sıfırlandı."),
"Alarm 06.47'de çalıyor, yine salı.",
"Bazı salılar yatakta kalıyorsun, bazı salılar büyük, tehlikeli, bedelsiz bir şey yapıyorsun. Hiçbiri geride bir şey bırakmıyor.",
P(function(d){ return d.cay_her || d.kucuk; }, "Bir çay var ama. Kızılay'da her sabah içtiğin aynı çay, sıcacık."),
P(function(d){ return d.ela_adadi || d.ela_ogle; }, "Bir de Ela var. Bazı salılar onu öğlen okuldan alıyorsun, profiterol yiyorsunuz. Her seferinde sana bir şey öğretmeye çalışıyor, sen öğreniyorsun, o unutuyor."),
"Bugün de çay bahçesine gidiyorsun. Garson masayı siliyor ama masada bir önceki çaydan kalma bir halka iz kalıyor."
]},

son_kusursuz: { son: true, baslik: "Kusursuz Gün", metin: [
P(S("t4C"), "Kusursuz olmayan bir salıya evet diyemeyip “Hayır” demiştin."),
P(S("t4D"), "Bir cevap vermek de sana bir plan gibi gelmişti, vermedin."),
"Alarm 06.47'de çalıyor, yine salı.",
P(function(d){ return d.yirtti || d.dinledi; }, "Haritayı yırttığın günden beri plan yapmıyorsun. Nazlı'yı kurtarıyorsun, çünkü önünde o var. Rıfat Bey'e bazı sabahlar yetişiyorsun, bazı sabahlar yetişemiyorsun."),
P(function(d){ return d.devam; }, "Harita büyüyor, bin isme ulaştı. Ela'nın gösterisinde ön sıradasın ama saatine bakıyorsun. Kulağındaki kalbi hiç görmedin."),
"Nazlı her sabah sana bir çay borçlu olduğunu söylüyor. Bazı sabahlar büfede, bir minibüs geçerken o çayı içiyorsunuz. Bu sabah Nazlı ilk kez çantasından bir eskiz defteri çıkarıyor."
]},

son_tilki: { son: true, baslik: "Tilki", metin: [
P(S("t4C"), "Sabah kahveni yaparken gece verdiğin “hayır” cevabını düşündün."),
P(S("t4D"), "Son saniye her zamanki gibi geçip gitmişti."),
"Alarm 06.47'de çalıyor.",
"Salı mı, çarşamba mı, ekrana bakmıyorsun.",
P(function(d){ return d.tek || d.kalp; }, "Kulaktaki kalbi gördüğün, ya da kuliste repliği onunla birlikte söylediğin günden beri bir şeyi biliyorsun. Ela seni çoktan evcilleştirmişti, senin bunu görmen biraz uzun sürdü."),
"Bir yıl önce bir telefonda “Başka zaman” demiştin.",
"Akşam altıda bir spor salonu seni bekliyor. Gideceksin, hem de erkenden. Ön sıraya bir papatya bırakabilirsin."
]}

},

ayna: function(d){
  var out = [];
  var a = d.anlam, h = d.haz, b = d.bag;
  if(a >= h && a >= b) out.push("Çoğu salı kâğıtlarda, kliniklerde, gece yarısındaki seste bir neden aradın.");
  else if(h >= b) out.push("Bir süre bedelsiz olan her şeyi denedin.");
  else out.push("Çoğu salı Ela'ya, Halit Bey'e, Nazlı'ya gittin.");
  if(d.amor) out.push("On saniye kala “Evet” dedin.");
  if(d.ret) out.push("On saniye kala “Hayır” dedin.");
  if(d.prova) out.push("Bir yıl önce “Başka zaman” dediğin provaya gittin.");
  if(d.her_sabah_el) out.push("Her sabah on bir dakika Nazlı'nın yanında oturdun.");
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
