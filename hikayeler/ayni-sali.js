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
"Alarm. 06.47. Ekranda: Salı, 12 Mart.",
"Adın Tolga, kırk iki yaşındasın, bir sigorta şirketinde hasar eksperisin. Kaza yerlerinde fotoğraf çekip rapor yazıyorsun. Kızılay'da bir oda bir mutfak. Boşanalı iki yıl.",
"Kahve makinesi. Fincan tezgâhın kenarına çarpıyor. Kahve gömleğine. Küfrediyorsun. Mavi gömleği giyiyorsun, ütüsüz.",
"Radyoda seksenlerden bir Türkçe pop. Adını hatırlamıyorsun. “Bir gün bir yerde...”",
"Burcu'dan mesaj: “Bugün Ela'nın gösterisi. 18.00. Lütfen bu sefer geç kalma. Rolü var. Tilki.”",
"Ela on yaşında. Okulda “Küçük Prens” oynanıyor. Geçen yıl koro gösterisine geç kalmıştın; Ela son şarkıda seni kapıda görmüş, arabada eve kadar camdan dışarı bakmıştı.",
"07.15. Otobüs 07.30'da.",
"Nihat Bey'den mesaj: “Tolga, 17.00'de Gölbaşı'nda fabrika yangını. Ekspertiz bugün bitecek, başka kimse yok.” Gölbaşı'ndan okula akşam trafiğinde en az elli dakika. İki yazılı uyarın var."
], secenekler: [
{ t: "Burcu'ya “Geleceğim. Söz.” yazarsın. Gölbaşı'nı araya nasıl sığdıracağını bilmeden.", to: "a2", etki: { bag: 1, soz: true } },
{ t: "Nihat Bey'e dosyayı başkasına vermesini yazarsın. Üçüncü uyarı olabilir.", to: "a2", etki: { bag: 1, is_risk: true } },
{ t: "Burcu'ya dürüstçe yazarsın: “Yetişmeye çalışacağım ama söz veremem.”", to: "a2", etki: { anlam: 1, durust: true } },
{ t: "Burcu'ya değil, Ela'ya yazarsın: “Tilki kızım, akşam görüşürüz.”", to: "a2", etki: { bag: 1, ela_mesaj: true } }
]},

a2: { saat: "Salı, 06.47", baslik: "Yine", metin: [
P(S("a1A"), "Söz verdin. Beşte yanık fabrikadaydın, altı buçukta okulun kapısında. Tilki son repliğini söylüyordu. Ela seni gördü. Burcu da. Sözün telefonda duruyordu, “okundu.”"),
P(S("a1B"), "Nihat Bey öğlen tek kelime yazdı: “Konuşacağız.” Gösteri boyunca telefonu cebinde sıktın."),
P(S("a1C"), "Burcu: “Tamam.” Gölbaşı uzadı. Yedi buçukta vardın. Salon boştu. Bir sandalyenin üstünde karton tilki kulakları."),
P(S("a1D"), "Ela üç tilki emojisiyle cevap verdi. Yetişmek için iki kez kırmızıda geçtin. Salona girdiğinde tilki konuşuyordu. Burcu dönüp sana baktı. Saate değil, sana."),
"Gece yarısı uyuyorsun.",
"Alarm. 06.47. Salı, 12 Mart.",
"Telefonun tarihi bozulmuş, diyorsun. Fincan tezgâha çarpıyor. Kahve gömleğine.",
"Radyo: “Bir gün bir yerde...”",
"Burcu: “Bugün Ela'nın gösterisi. 18.00.” Ardından Nihat Bey: “Tolga, 17.00'de Gölbaşı'nda...” Kelimesi kelimesine.",
"Mesajlara bakıyorsun. Dünkü cevabın yok.",
"Pencere. Aşağıda aynı kadın aynı köpeği gezdiriyor. Köpek aynı ağacın dibinde duruyor. Karşı balkonda aynı adam aynı sigarayı içiyor, aynı yerde öksürüyor.",
"Delirmiş olabilirsin. Bunu sana söyleyecek tek kişi sensin."
], secenekler: [
{ t: "Bir deney yaparsın: bugünün olaylarını önceden yazarsın.", to: "x_test", etki: { anlam: 1 } },
{ t: "Bir nöroloğa gidersin. Gölbaşı yine yarım kalır.", to: "x_doktor", etki: { anlam: 1, doktor: true } },
{ t: "Yatağa dönersin. Uykuyla girdiysen uykuyla çıkarsın, diye düşünüyorsun.", to: "a3", etki: { haz: 1, yatak: true } },
{ t: "Burcu'yu arayıp anlatırsın. Velayet duruşmasında avukatı sana “dengesiz” demişti.", to: "a3", etki: { bag: 1, burcu_ara: true } }
]},

x_test: { saat: "Salı", baslik: "Tahmin", metin: [
"Bir kâğıda yazıyorsun.",
"07.30: Otobüs iki dakika geç. Şoför bir yolcuyla tartışır. 08.05: Kızılay'da bir ışık bozuk. 08.20: Bir bisikletli kurye, bir minibüs, Atatürk Bulvarı. 12.30: Kantinde mercimek biter. 15.40: Şarj yüzde on. 18.10: Gösteriye on dakika geç.",
"07.32. Otobüs. Şoför aynı kelimelerle tartışıyor. 08.05. Işık bozuk. Tik.",
"08.19. Atatürk Bulvarı. Kâğıtta: kurye, minibüs.",
"Yirmilerinin başında bir kız. Sarı kurye çantası, kulaklık. Yanından geçerken göz göze geliyorsunuz.",
"08.20. Fren sesi. Bir çarpma. Kız havaya kalkıp yere düşüyor.",
"Kâğıttaki tik elinde."
], secenekler: [
{ t: "Kıza koşarsın.", to: "a3", etki: { bag: 1, kosti: true } },
{ t: "Kâğıda bakarsın. Hepsi doğru.", to: "a3", etki: { anlam: 1 } },
{ t: "Ambulansı ararsın.", to: "a3", etki: { bag: 1, ambulans: true } },
{ t: "Gözlerini kapatırsın. Biliyordun ve bir şey yapmadın.", to: "a3", etki: { anlam: 1, bildi: true } }
]},

x_doktor: { saat: "Salı", baslik: "Nörolog", metin: [
"Çankaya'da özel bir hastane. Randevun yok. Acil diyorsun. İki saat bekleme, bir otomattan iki kez su.",
"Dr. Pelin Aydın, otuzlarının sonunda. Masasında yarıda kalmış bir roman, ayraç ortasında.",
"Anlatıyorsun: fincanı, şarkıyı.",
"Uyku, ilaç, alkol, stres, bir kayıp.",
"“Boşandım. İki yıl önce.”",
"“Kızınızla?”",
"“İyi. Bazen geç kalıyorum.”",
"“Bir MR isteyeceğim. Bir de psikiyatriste yönlendireceğim. Bazen beyin bir şeyle yüzleşmek istemeyince bir döngü kurar.”",
"“Ya gerçekse?”",
"Gülümsüyor. “O zaman yarın gelin ve bugün ne konuştuğumuzu anlatın. Ben hatırlamayacağım. Siz hatırlarsanız belki inanırım.”"
], secenekler: [
{ t: "Yarın gelip ona bugünü anlatmaya karar verirsin.", to: "a3", etki: { anlam: 1, doktor_yarin: true } },
{ t: "Ona sorarsın: “Siz aynı günü sonsuza kadar yaşasaydınız ne yapardınız?”", to: "a3", etki: { anlam: 1, doktor_soru: true } },
{ t: "Teşekkür edip çıkarsın.", to: "a3", etki: { haz: 1 } },
{ t: "Kızından, geç kalmalardan bahsetmeye devam edersin.", to: "a3", etki: { bag: 1, acildi: true } }
]},

a3: { saat: "Salı", baslik: "Güvercinler", metin: [
P(S("a2C"), "Perdeleri çekip uyudun. Öğlen telefonda Nihat Bey'den yedi cevapsız arama. Gösteriye gitmedin. Gece uyandın. Sonra yine 06.47."),
P(S("a2D"), "Burcu dinledi. “Tolga, içtin mi?” İçmedin. “Bir doktora git. Ela seni bu hâlde görmesin.” Sesinde endişe değil korku vardı."),
P(S("x_testB"), "Hepsi doğruydu. “08.20: kurye” satırı artık bir tahmin değildi. Kâğıdı katlayıp cebine koydun. Bütün gün oradaydı."),
P(S("x_testC"), "Operatör sordu: “Bilinci açık olduğunu nereden biliyorsunuz?” Daha yanına gitmemiştin."),
P(S("x_testD"), "Gözlerini kapattın. Fren sesi yine geldi."),
P(S("x_doktorA"), "Aynı sabah yine gittin. Dr. Aydın'a dünkü konuşmayı anlattın, masasındaki romanın adını bile. Yüzü soldu. MR'ı imzalarken eli titriyordu."),
P(S("x_doktorC"), "Otoparkta alnını direksiyona dayadın. Korna çaldı. Kafanı kaldırdın."),
P(S("x_doktorD"), "Dr. Aydın kalemi bıraktı. “Bugün kızınızın gösterisi varsa ben sizin yerinizde MR'dan önce oraya giderdim.”"),
P(S("x_testA"), "Yerde, bilinci açık, bacağı garip bir açıda. “İyiyim,” dedi. Adı Nazlı. Yirmi üç, kurye, üniversiteyi bırakmış."),
P(S("x_doktorB"), "“Bitiremediğim bir kitap var,” dedi. “Her gün bir bölüm okurdum.” Masadaki romanı gösterdi. “Sonra sıkılırdım herhalde.”"),
"Ertesi gün. Ya da aynı gün. 06.47.",
"Üçüncü salı. Dördüncü. Beşinci. Bir hafta.",
"Her şey aynı. Sen aynı değilsin. Hatırlıyorsun. Ve hatırladığın her şey gece yarısı siliniyor.",
"Bir sabah otobüs durağının bankında yaşlı bir adam. Kasketli, bir torba ekmek kırıntısı, güvercinlere atıyor.",
"Sana bakmadan: “Bugün hava güzel. Dün de güzeldi. Yarın da güzel olacak.”",
"“Yarın olmayacak.”",
"Adam dönüyor. Gözleri mavi, sulu, keskin. Elini uzatıyor. “Halit. Kırk yıldır bu banktayım. Her sabah. Sen?”",
"08.08. Bulvar on dakika."
], secenekler: [
{ t: "Halit Bey'e her şeyi anlatırsın. 08.20'ye yetişemezsin; Nazlı bu sabah da yalnız düşer.", to: "a4", etki: { bag: 1, halite_anlatti: true } },
{ t: "“Yarın da burada olacağım,” dersin. Şaka gibi. Değil.", to: "a4", etki: { anlam: 1 } },
{ t: "Ondan biraz ekmek alıp sen de güvercinlere atarsın. Saate bakmadan.", to: "a4", etki: { bag: 1, guvercin: true } },
{ t: "Kalkıp Bulvar'a yürürsün. On iki dakika var.", to: "a4", etki: { anlam: 1, bulvar: true } }
]},

a4: { saat: "Salı, 08.20", baslik: "Nazlı", metin: [
P(S("a3B"), "Halit Bey öksürerek güldü. “İyi. Burası yalnız kalmaya gelmez.” Her sabah aynı cümleyi söyledin, her sabah aynı gülüşü aldın."),
P(S("a3C"), "Kırıntıları attın. Güvercinler kaçtı, geri geldi. Halit Bey bir şey sormadı."),
P(S("a3D"), "08.18'de Bulvar'daydın. İlk kez ne olacağını bilerek bekledin."),
P(S("a3A"), "Halit Bey bir kez bile şaşırmadı. Sonunda bir avuç kırıntı attı. “Demek sen de,” dedi. Ne demek istediğini sordun. Bir güvercin omzuna kondu."),
"Her sabah 08.20. Bulvar. Nazlı. Minibüs.",
"İlk hafta izledin. Sonra bir sabah, 08.19'da.",
"Kaldırımın kenarı. Nazlı geliyor. Sarı çanta, kulaklık. Minibüs köşeden dönmek üzere.",
"Bugün kurtarsan, yarın yine aynı minibüs.",
"Bu döngünün içinde ölürsen ne olur, bilmiyorsun. 06.47'de uyanabilirsin. Ya da Ela'nın tilkisi babasız bir akşama çıkar."
], secenekler: [
{ t: "Yola atlarsın. Minibüs seni de alabilir.", to: "x_kurtar", etki: { bag: 1, anlam: 1 } },
{ t: "Kaldırımdan bağırırsın: “Dur!” Kulaklık takıyor. Sen kaldırımda kalırsın.", to: "a5", etki: { bag: 1, bagirdi: true } },
{ t: "Kazayı engellemezsin. Sonrasında yanında olursun. Düşüşünü bir kez daha izleyerek.", to: "x_el", etki: { bag: 2 } },
{ t: "Hiçbir şey yapmazsın. Kimseyi kurtarmamanın sana ne yaptığını görmek istiyorsun.", to: "a5", etki: { haz: 1, yapmadi: true } }
]},

x_kurtar: { saat: "Salı, 08.19", baslik: "Bir Saniye", metin: [
"Atlıyorsun. Nazlı fren yapıyor. Bisiklet yan yatıyor. İkiniz de kaldırıma düşüyorsunuz. Dirseğin asfaltta sıyrılıyor.",
"08.20. Minibüs bir metre öteden geçiyor.",
"Nazlı kulaklığını çıkarıyor. “Ne yapıyorsun be! Deli misin?”",
"Sonra minibüsün geçtiği yere bakıyor. Yüzü değişiyor.",
"“Beni... gördün mü? Minibüsü?”",
"Evet.",
"Dizinde bir sıyrık. Bisikletini düzeltiyor, zinciri yerinden çıkmış, takıyor. Elleri yağ oluyor.",
"“Teşekkür ederim. Adım Nazlı.”",
"“Biliyorum,” diyorsun. Söylememen gerekiyordu.",
"Garip bir adam, sabah sekizde, adını biliyor. Sonra gülüyor. “Bir teslimatım var. Ama sana bir çay borçluyum. Yarın? Burada?”"
], secenekler: [
{ t: "“Yarın,” dersin.", to: "a5", etki: { bag: 1, yarin_yalan: true } },
{ t: "“Bugün,” dersin. “Şimdi içelim.”", to: "a5", etki: { bag: 2, cay_nazli: true } },
{ t: "Ona gerçeği söylersin: yarın seni hatırlamayacak.", to: "a5", etki: { anlam: 1, gercek_nazli: true } },
{ t: "Bir şey demeden gidersin.", to: "a5", etki: { anlam: 1 } }
]},

x_el: { saat: "Salı, 08.21", baslik: "El", metin: [
"Kaza oluyor. Bu sabah yanına koşuyorsun.",
"Yerde. Bilinci açık. Bacağı garip bir açıda.",
"Yanına diz çöküyorsun. Eli soğuk, titrek.",
"“Ambulans geliyor.” On bir dakika. Her sabah on bir dakika.",
"“Annemi arar mısın?” Ekranı kırık bir telefon.",
"Kayseri aksanlı bir kadın sesi. Bağırıyor, susuyor, “Geliyorum,” diyor. Kayseri'den.",
"On bir dakika. Resim okuyormuş. Para yetmemiş. Kuryelik geçici, diyor. İki yıldır geçici. Bir ara gülüyor, gülerken acıdan yüzünü buruşturuyor.",
"Sedye. “Adın ne?” “Tolga.” “Sağ ol Tolga.”"
], secenekler: [
{ t: "Her sabah bunu yapmaya karar verirsin. On bir dakika.", to: "a5", etki: { bag: 2, her_sabah_el: true } },
{ t: "Yarın onu kurtarmaya karar verirsin.", to: "a5", etki: { anlam: 1 } },
{ t: "Nazlı'nın resimlerini merak edersin. Yarın sorarsın.", to: "a5", etki: { bag: 1, resim: true } },
{ t: "Kaldırımda bir süre oturup ellerine bakarsın.", to: "a5", etki: { anlam: 1 } }
]},

a5: { saat: "Salı, 18.00", baslik: "Tilki", metin: [
P(S("a4B"), "“Dur!” Nazlı duymadı. Şoför duydu. Fren bir saniye erken ya da geç. Nazlı yine düştü. Bu kez kolu kırıldı, bacağı değil."),
P(S("x_kurtarA"), "“Yarın.” Nazlı bisikletine bindi. Yarın 08.20'de seni tanımamış olacak. Sen yine atlayacaksın."),
P(S("x_kurtarB"), "Bulvar'daki büfede iki çay. Nazlı resmi, bıraktığı okulu, annesini anlattı. Teslimat kırk dakika gecikti. Patronu arayıp bağırdı. “Değdi,” dedi Nazlı, telefonu kapatırken."),
P(S("x_kurtarC"), "Nazlı yüzüne baktı, çantasını omzuna aldı. “Ağabey, birini aramamı ister misin?” Bir hayat kurtarmıştın ve sana deli gibi bakıyordu."),
P(S("x_kurtarD"), "Arkandan “Hey!” dedi. Dönmedin. Dirseğin bütün gün sızladı. Gece yarısı sıyrık da gitti."),
P(S("x_elA"), "Her sabah on bir dakika, bir el, Kayseri'ye bir telefon."),
P(S("x_elB"), "Yarın kurtarırsan bugün tuttuğun el hiç olmamış olacak. Bütün gün bunu düşündün."),
P(S("x_elC"), "Bütün gün onun resimlerini düşündün. Hangi rengi severdi?"),
P(S("x_elD"), "Avucunda Nazlı'nın kanından küçük bir leke. Gece yarısı o da gidecekti. Yıkamadın."),
"18.00. Bir ilkokulun spor salonu. Plastik sandalyeler, havada telefonlar. Sahnede karton bir gezegen, bir gül.",
P(function(d){ return d.yapmadi; }, "Sabah bir şey yapmadın. Minibüs, çarpma, düşüş. Bütün gün o düşüş aklındaydı."),
"Bu kez zamanında geldin. Burcu ön sırada. Şaşırıyor, yanındaki boş sandalyeyi gösteriyor.",
"Perde açılıyor. Sarı perukla bir oğlan, bir gül, bir kral. Bir tilki.",
"Ela. Turuncu kostüm, karton kulaklar, kuyruk. Seni görüyor. Repliğini unutacak gibi oluyor. Sonra gülümsüyor.",
"“Benimle oynayamazsın. Evcilleştirilmedim.”",
"“Evcilleştirmek ne demek?”",
"“Bağ kurmak,” diyor Ela. “Şimdilik sen benim için yüz bin küçük çocuktan birisin. Ama beni evcilleştirirsen, sen benim için dünyada tek olursun.”",
"Seyirciler gülüyor. Sen gülmüyorsun.",
"Gece yarısı bu replik de silinecek. Yarın Ela seni yine ilk kez görecek."
], secenekler: [
{ t: "Ela'yla yürürsün. Burcu'nun “önemli” dediği şey bu akşam söylenmeden kalır.", to: "a6", etki: { bag: 2, yuruyus: true } },
{ t: "Burcu'yla kahveye gidersin. Ela kostümüyle arka koltuğa biner.", to: "a6", etki: { bag: 1, burcu_kahve: true } },
{ t: "İkisine de “Başka zaman” deyip eve gider, bu günü kâğıda dökersin.", to: "a6", etki: { anlam: 1, replik: true } },
{ t: "Bir bara gidersin. Nasılsa yarın sıfırlanacak.", to: "a6", etki: { haz: 1, bar: true } }
]},

a6: { saat: "Otuzuncu salı", baslik: "Otuzuncu Salı", metin: [
P(S("a5B"), "Kızılay'da eskiden birlikte gittiğiniz kafe. Burcu fincanı iki eliyle tutup söyledi: haziranda İzmir'e taşınıyorlar, Ela'yla. Bir iş teklifi. Bir şey diyemedin. Haziran hiç gelmeyecekti. Bu düşünce bir an rahatlık gibi geldi. Bundan utandın."),
P(S("a5C"), "“Başka zaman.” Ela'nın yüzü söndü. Eve gidip yazarken bu cümleyi daha önce de kurduğunu hissettin. Nerede, hatırlamadın."),
P(S("a5A"), "Tilki kostümüyle eve kadar yürüdünüz. Kuyruk sallanarak. Ela bütün yol konuştu: Küçük Prens'i oynayan çocuk sahnede burnunu karıştırmış. Kapıda sarıldı. “Geldin,” dedi."),
P(S("a5D"), "Bir bar, bir şişe, bir yabancı. Sonra 06.47. Baş ağrısı yok. Hiçbir şeyin bedeli yoktu."),
"Otuz salı. Bir ay.",
"Fincanı artık çarpmıyorsun. Elini kaydırıyorsun. Radyodaki şarkının bütün sözlerini biliyorsun. Nihat Bey'in unuttuğu dosyanın numarasını söylüyorsun. Her seferinde şaşırıyor. Mercimek bitmeden kantine iniyorsun.",
"Ne yaparsan yap, gece yarısı siliniyor. Bir iyilik, bir yumruk, bir öpücük.",
"Bir gece, 23.58'de, tavana bakıyorsun."
], secenekler: [
{ t: "Hiçbir şeyin bedeli yoksa her şeyi yaparsın. Hiçbir şey kaybetmezsin. Kendinden başka.", to: "h1", etki: { haz: 2, kol: "haz" } },
{ t: "Kusursuz bir gün kurmaya çalışırsın: herkesi kurtarmak için her dakikayı hesaplayarak.", to: "m1", etki: { bag: 1, anlam: 1, kol: "mukemmel" } },
{ t: "Döngüden çıkmanın yolunu ararsın. Gösteriyi yeniden ve yeniden kaçırmak pahasına bile.", to: "k1", etki: { anlam: 1, kol: "kacis" } },
{ t: "Her gün bir şey öğrenirsin: bir dil, bir enstrüman, bir insan. Kimsenin değiştiğini bilmeyeceği biri olmayı kabul ederek.", to: "o1", etki: { anlam: 2, kol: "ogren" } }
]},

/* ---------- HAZ KOLU ---------- */
h1: { saat: "Salı 31–100", baslik: "Bedelsiz", metin: [
"Bir salı Nihat Bey'e toplantıda yıllardır söylemek istediğin her şeyi söylüyorsun. Seni kovuyor. 06.47. Sabah seni selamlıyor.",
"Bir salı kredi kartının limitini harcıyorsun: bir saat, bir takım elbise, bir restoran. 06.47. Limit yerinde.",
"Bir salı Bodrum'a uçuyorsun. Mart. Deniz buz gibi. Giriyorsun. Dişlerin takırdıyor. 06.47. Kızılay.",
"Bir salı bir barda bir kadın. 06.47. Seni hiç tanımamış.",
"Elli salı. Seksen. Yüz.",
"Yüzüncü salı bir restoranda, ilk gün bir aylık maaşına mal olan bir tabağın başında. Tadı yok. Lokma bir sonrakine bağlanmıyor. Gece sabaha."
], secenekler: [
{ t: "Daha fazlasını denersin. Daha büyük, daha tehlikeli.", to: "h2", etki: { haz: 2, daha: true } },
{ t: "Bir gün hiçbir şey yapmazsın. Yatakta kalırsın.", to: "h2", etki: { anlam: 1, yatakta: true } },
{ t: "Halit Bey'in bankına gidersin.", to: "h2", etki: { bag: 1, halit_h: true } },
{ t: "Gösteriye gidersin. Yüz salıdır gitmiyordun.", to: "h2", etki: { bag: 1, gosteri_h: true } }
]},

h2: { saat: "Salı 100–300", baslik: "Boşluk", metin: [
P(S("h1A"), "Bir araba çaldın, Eskişehir yolunda iki yüz kırkla sürdün. Bir köprünün korkuluğunda yürüdün. Hepsi silindi. Her seferinde içinden bir şey eksildi. Ne olduğunu bilmiyorsun."),
P(S("h1B"), "Bütün gün tavan. 18.10'da Burcu: “Gelmedin. Yine.” 06.47. Mesaj silindi. Senin hatıran silinmedi."),
P(S("h1C"), "Halit Bey bir şey sormadı. Bir saat oturdunuz. “Her gün aynı güvercinler,” dedi. “Ama her gün ilk kez bakıyormuş gibi bakarım. Yoksa sıkılırdım.”"),
P(S("h1D"), "Ela tilki. “Bağ kurmak.” Gösteriden sonra Ela sana koştu. Sen kalktın, çıktın. Arabada direksiyona kapandın."),
"İki yüz salı. Üç yüz.",
"Bir sabah alarmı kapatmıyorsun. Çalıyor. Çalıyor.",
"İstediğin bir şey kalmamış. Her şeyi denedin. Silinen her şeyle birlikte bir şey istemek de silinmiş."
], secenekler: [
{ t: "Bir şeyi yeniden istemeyi denersin. Küçük bir şeyi. Bir çay. Bir güneş.", to: "h3", etki: { anlam: 1, kucuk: true } },
{ t: "Halit Bey'e gidip ne yapacağını sorarsın.", to: "o2", etki: { bag: 1, kol: "ogren", haz_halit: true } },
{ t: "Bu boşlukta kalırsın.", to: "h3", etki: { haz: 1, bosluk: true } },
{ t: "Ela'yı gösteriden önce, öğlen okuldan alırsın.", to: "h3", etki: { bag: 2, ela_ogle: true } }
]},

h3: { saat: "Salı 300+", baslik: "Bir Çay", metin: [
P(S("h2C"), "Günlerce boşlukta kaldın. Bir sabah sebepsiz, bir çay bahçesinin önünde durdun."),
P(S("h2A"), "Kızılay'da bir çay bahçesi. Çay sıcaktı. Üç yüz salıdır bir şeyin sıcak olduğunu fark etmemiştin. Bir yudum daha."),
P(S("h2D"), "Öğretmene bir yalan söyleyip Ela'yı aldın. Bir pastanede Ela profiterol yedi, yüzü çikolata oldu. “Aynı günü hep yaşasan ne yapardın?” Ela düşündü. “Her gün sana bir şey öğretirdim. Sen hep unutuyorsun çünkü.”"),
"Her şeyi tüketme açlığı bitti.",
"Geride bir yer açıldı. Küçük, bir çay bardağı kadar."
], secenekler: [
{ t: "Bundan sonra her salıyı Ela'ya adarsın.", to: "t1", etki: { bag: 2, ela_adadi: true } },
{ t: "Her sabah Halit Bey'in bankında oturmaya başlarsın.", to: "t1", etki: { bag: 1, anlam: 1, halit_sabah: true } },
{ t: "Bu kez daha yavaş, daha dikkatli eğlenmeye dönersin.", to: "t1", etki: { haz: 1, yavas_haz: true } },
{ t: "Her gün aynı çay bahçesinde aynı çayı içersin.", to: "t1", etki: { anlam: 1, cay_her: true } }
]},

/* ---------- MÜKEMMEL KOLU ---------- */
m1: { saat: "Salı 31–60", baslik: "Kusursuz Gün", metin: [
"Bir kâğıda dakika dakika plan.",
"06.47 fincan. 07.15 Burcu'ya “Geleceğim.” 07.30 otobüste tartışan yolcuyu sakinleştir. 08.05 yaşlı bir kadını karşıya geçir. 08.19 Nazlı. 09.00 Nihat Bey'in dosyası. 12.30 son mercimeği stajyere ver. 17.30 papatya. 18.00 ön sıra.",
"Otuz salı. Her gün bir şey ters gidiyor. Bir gün otobüs kaçıyor. Bir gün yaşlı kadın seni tanımadığı için korkup çantasına sarılıyor. Bir gün Nazlı'yı kurtarırken kolun kırılıyor. Gösteriye alçıyla gidiyorsun.",
"Bir saniye erken, bir adım sola, bir kelime farklı.",
"Altmışıncı salı. Her şey yerinde. Nazlı sağ. Kadın karşıda. Nihat Bey memnun. Stajyer çorbasını içti. Ela'ya papatya. Ön sıra. Gösteriden sonra Ela'nın sarılması.",
"23.58. Yatakta.",
"23.59. Şimdi mi?"
], secenekler: [
{ t: "Gözlerini kapatıp beklersin.", to: "m2", etki: { anlam: 1 } },
{ t: "Kusursuz günün listesini yazarsın. Sonsuza kadar tekrarlamak için.", to: "m2", etki: { anlam: 1, liste: true } },
{ t: "Burcu'yu ararsın; 23.59'da ona bir şey söylemek için.", to: "m2", etki: { bag: 1, burcu_gece: true } },
{ t: "Ela'nın sarılışını düşünürsün. Bir şey eksikti.", to: "m2", etki: { bag: 1, yanlis: true } }
]},

m2: { saat: "Salı 61–200", baslik: "Bedel", metin: [
P(S("m1A"), "23.59. Karanlık. Sonra alarm."),
P(S("m1B"), "Bir sayfa, küçük harflerle. Kâğıt silindi. Satırlar kafandaydı."),
P(S("m1C"), "Uykulu bir ses: “Tolga? Ne oldu?” “Ela'yı böyle büyüttüğün için teşekkür ederim.” Cevap gelmeden saat döndü."),
P(S("m1D"), "Sarılış sıkıydı ama kısaydı. Kusursuz günü yaşayan sendin. Ela yalnızca babasının her şeyi doğru yaptığı bir akşamı yaşamıştı."),
"06.47. Salı.",
"Altmış birinci salı bir şey fark ediyorsun. Nazlı'yı kurtardığın sabah minibüs yoluna devam ediyor ve 08.35'te, iki sokak ötede, yaşlı bir adama çarpıyor. Daha önce minibüs Nazlı'da durmuştu.",
"Kontrol ediyorsun. Kurtarınca: 08.35, yaşlı adam. Kurtarmayınca: Nazlı.",
"Yaşlı adamı da kurtarmaya çalışıyorsun. Bir gün başarıyorsun. O akşam sinirleri bozulmuş şoför Ela'nın okulunun önünde bir velinin arabasına çarpıyor.",
"Yüz salı. İki yüz. Bir yeri kapatınca başka bir yer açılıyor."
], secenekler: [
{ t: "Daha büyük bir plan yaparsın. Bütün Kızılay'ı hesaba katan.", to: "m3", etki: { anlam: 1, buyuk_plan: true } },
{ t: "Yalnızca Nazlı'yı kurtarmaya devam edersin.", to: "m3", etki: { bag: 1, onundeki: true } },
{ t: "Kimseyi kurtarmamaya karar verirsin.", to: "m3", etki: { haz: 1, kurtarmama: true } },
{ t: "Halit Bey'e gidip bu terazinin ne olduğunu sorarsın.", to: "o2", etki: { bag: 1, kol: "ogren", mukemmel_halit: true } }
]},

m3: { saat: "Salı 200–500", baslik: "Kafes", metin: [
P(S("m2A"), "Bir harita, bir defter, yüzlerce isim. Bir gün neredeyse kusursuzdu. Yalnızca bir kedi. Ertesi gün kediyi kurtardın. Bir çocuk ağladı."),
P(S("m2B"), "Her sabah Nazlı. Her sabah 08.35'te yaşlı bir adam. Bir gün yüzüne baktın: bastonlu, eczaneye gidiyor. Adı Rıfat. Senin yüzünden her sabah bir kaldırıma düşüyor."),
P(S("m2C"), "Kimseyi kurtarmadın. Nazlı her sabah düştü; Rıfat Bey her sabah eczaneye vardı. Her sabah kaldırımda durup izledin."),
"Beş yüz salı.",
"Bir gün fark ediyorsun: hiçbir şeyi yaşamıyorsun. Yönetiyorsun.",
"Gösteride Ela tilki. Sen ön sıradasın. Aklın 08.35'te. Saatine bakıyorsun.",
"Gösteriden sonra Ela sana koşuyor. “Baba, sen beni hiç dinlemedin.”",
"Bu cümleyi beş yüz salıdır ilk kez duyuyorsun."
], secenekler: [
{ t: "Haritayı yırtarsın.", to: "t1", etki: { bag: 2, yirtti: true } },
{ t: "Ela'dan özür dileyip bütün akşam onu dinlersin.", to: "t1", etki: { bag: 2, dinledi: true } },
{ t: "Haritayı geliştirmeye devam edersin. Bir gün kusursuz olacak.", to: "t1", etki: { anlam: 1, devam: true } },
{ t: "Halit Bey'in bankına gidersin.", to: "t1", etki: { bag: 1, anlam: 1, halit_m: true } }
]},

/* ---------- KAÇIŞ KOLU ---------- */
k1: { saat: "Salı 31–80", baslik: "Uyanık", metin: [
"Kural: gece yarısı. Ya uyumazsan?",
"Kahve, film, soğuk duş. 23.59. Gözlerin açık.",
"00.00. Gözlerin açıkken karanlık. Sonra alarm.",
"Bir salı Sinop'a sürüyorsun. Gece yarısı bir otel odası. 06.47. Kızılay, kendi yatağın.",
"Bir salı Londra. Saat dilimi. Ankara saatiyle 23.59'da bir havalimanı koltuğu. 06.47. Kızılay.",
"Elli deneme. Seksen. Her yol aynı yatağa çıkıyor."
], secenekler: [
{ t: "Bir uyku kliniğine gidip uykunu izletirsin.", to: "k2", etki: { anlam: 1, klinik: true } },
{ t: "Döngünün nedenini ararsın: 12 Mart'ta ne oldu?", to: "k2", etki: { anlam: 1, neden: true } },
{ t: "Bir din adamına gidersin.", to: "k2", etki: { anlam: 1, din: true } },
{ t: "Halit Bey'e gidip sorarsın: o da mı?", to: "o2", etki: { bag: 1, kol: "ogren", kacis_halit: true } }
]},

k2: { saat: "Salı 80–200", baslik: "Neden", metin: [
P(S("k1B"), "E-postaları, fotoğrafları, takvimi taradın."),
P(S("k1A"), "Elektrotlar, kameralar. 23.59'da teknisyen monitöre baktı; 06.47'de sen kendi yatağında. Teknisyen seni hiç görmemişti."),
P(S("k1C"), "Bir caminin imamı uzun süre dinledi. “Belki bir sınav değil evladım. Herkes ‘bir gün daha’ ister. Sana verilmiş.” Tespihini çekti, bir şey eklemedi."),
"12 Mart.",
"Boşanma davası. Hayır, 14'üydü. Babanın ölümü eylülde. Ela'nın doğum günü haziranda.",
"Sonra hatırlıyorsun. Bir yıl önce, 11 Mart gecesi on bir. Ela aramıştı. “Baba, yarın prova var, gelir misin?” “Yarın işim var kızım.” “Ama baba...” “Başka zaman.”",
"Bu bir neden mi? Bilmiyorsun. Ama “Başka zaman” şimdi önünde duruyor."
], secenekler: [
{ t: "Bu salı Ela'yı provaya götürürsün.", to: "k3", etki: { bag: 2, prova: true } },
{ t: "Bir nedeni olmadığını kabul edersin.", to: "k3", etki: { anlam: 1, nedensiz: true } },
{ t: "Kaçmaya devam edersin.", to: "k3", etki: { anlam: 1, kacmaya: true } },
{ t: "Yatağa uzanıp bütün gün kalkmazsın.", to: "k3", etki: { haz: 1, dip: true } }
]},

k3: { saat: "Salı 200+", baslik: "Dip", metin: [
P(S("k2B"), "Kabul ettin. Ya da etmeye çalıştın. Kabul etmekle razı olmak arasında bir mesafe vardı. Sen o mesafede yaşadın."),
P(S("k2C"), "Van, Kars, bir gemi. Bir gece bir tren istasyonunda 23.58'de ağlamaya başladın. Yanındaki yaşlı kadın bir simit uzattı."),
P(S("k2A"), "Öğlen provaya götürdün. Ela kâğıttan okuyordu. “Bağ kurmak”ta takıldı. Sen fısıldadın. “Nasıl biliyorsun?” Bir şey demedin. 06.47. Döngü bitmedi."),
P(S("k2D"), "Bir gün yatakta. Bir gün daha. Bir ay. Her sabah alarmla."),
"Bir sabah tavana bakarken dedenin anlattığı bir masal geliyor aklına: bir kayayı tepeye iten, kaya yuvarlanınca inip yeniden iten bir adam. Masalın sonunda deden gülümserdi: “Bence o adam mutluydu.”",
"Çocukken buna kızardın. “Nasıl mutlu olur dede?” Deden omuz silkerdi. “İnerken elleri boş. Belki o zaman ıslık çalıyordur.”",
"Senin kayan bir salı."
], secenekler: [
{ t: "Kalkıp kahveni yaparsın. Fincan düşmüyor.", to: "t1", etki: { anlam: 2, sisifos: true } },
{ t: "Kalkıp Halit Bey'in bankına yürürsün.", to: "t1", etki: { bag: 1, anlam: 1, halit_k: true } },
{ t: "Kalkıp Ela'ya bir mesaj atarsın: “Akşam görüşürüz tilki.”", to: "t1", etki: { bag: 2, mesaj_k: true } },
{ t: "Kalkmazsın. Henüz değil.", to: "t1", etki: { haz: 1, kalkmadi: true } }
]},

/* ---------- ÖĞRENME KOLU ---------- */
o1: { saat: "Salı 31–300", baslik: "Piyano", metin: [
"Kızılay'da bir müzik kursu. Sevgi Hanım, altmışlarında, emekli konservatuvar hocası. Parmakları yamuk, romatizma. Her salı ilk ders. “Hiç piyano çaldınız mı?” “Hayır.”",
"Her salı biraz daha iyi. Sevgi Hanım her salı şaşırıyor.",
"Elli salı sonra bir Chopin noktürnü. Sevgi Hanım'ın gözleri doluyor. “Bunu kim öğretti size?”",
"Siz, demek istiyorsun. Elli kez.",
"Sonra Arapça. Sonra resim. Sonra kütüphanede her gün elli sayfa. Sonra insanlar.",
"Otobüs şoförünün kızı hasta. Trafik ışığındaki kadının oğlu Almanya'da. Kantindeki stajyer şiir yazıyor. Nihat Bey'in dosyayı unutma nedeni: karısının teşhisi, dün akşam."
], secenekler: [
{ t: "Nihat Bey'e karısını sorarsın.", to: "o2", etki: { bag: 2, nihat: true } },
{ t: "Piyanoda Ela için bir şarkı yazarsın.", to: "o2", etki: { bag: 1, anlam: 1, sarki: true } },
{ t: "Her sabah Nazlı'ya resmi bırakmamasını söylersin.", to: "o2", etki: { bag: 1, nazli_resim: true } },
{ t: "Halit Bey'in hikâyesini öğrenmeye karar verirsin.", to: "o2", etki: { anlam: 1, halit_ogren: true } }
]},

o2: { saat: "Bir sabah", baslik: "Halit", metin: [
P(S("o1C"), "Her sabah 08.20'den önce Nazlı'yı durdurup bir cümle: “Resim yapmayı bırakma.” Bazı sabahlar güldü, bazıları kızdı. Bir sabah sordu: “Nereden biliyorsun?”"),
P(S("o1D"), "Onu acele ettiremezdin. O hikâye bir salıya sığmazdı. Her sabah biraz daha oturdun."),
P(function(d){ return d.haz_halit || d.mukemmel_halit || d.kacis_halit; }, "Bütün o salılardan sonra Halit Bey'in bankına gittin. Yanındaki yeri gösterdi."),
P(S("o1A"), "Koridorda Nihat Bey'e karısını sordun. Uzun uzun baktı, sonra ağladı. Kırk yıllık bir müdür. Bir saat konuştunuz. Ertesi salı seni hatırlamıyordu."),
P(S("o1B"), "Ela'nın tilki repliğinin melodisi. Bir gün bitti. Gösteriden sonra okulun eski piyanosunda çaldın. İki tuşu basmıyordu. “Bu benim şarkım mı?” Ela ağladı."),
"Halit Bey'in bankı.",
"“Siz de mi aynı günü yaşıyorsunuz?”",
"Halit Bey uzun süre ekmek atıyor.",
"“Hayır evlat. Takvimin yaprağı düşüyor. Ama kırk yıldır bu banktayım. Aynı saatte, aynı ekmekle. Karım öldüğünden beri.”",
"“İlk yıl her gün ağladım. İkinci yıl ağlamadım, kendime kızdım. Onuncu yıl fark ettim: her gün aynı şeyi yapıyorum ve her gün başka. Güvercinler başka. Ben başkayım.”",
"“Sen aynı mısın?”"
], secenekler: [
{ t: "“Hayır,” dersin. “Her gün değişiyorum.”", to: "o3", etki: { anlam: 2 } },
{ t: "Halit Bey'den karısını anlatmasını istersin.", to: "o3", etki: { bag: 2, halit_es: true } },
{ t: "“Bu döngüden çıkmak istiyorum,” dersin.", to: "o3", etki: { anlam: 1, cikmak: true } },
{ t: "Bir avuç ekmek alıp güvercinlere atarsın.", to: "o3", etki: { bag: 1, ekmek: true } }
]},

o3: { saat: "Bininci salı", baslik: "Bin Salı", metin: [
P(S("o2A"), "“O zaman aynı günü yaşamıyorsun evlat. Sadece aynı takvimi.”"),
P(S("o2C"), "“Ben de kırk yıl çıkmak istedim. Sonra içeride kalmanın da bir yol olduğunu gördüm.”"),
P(S("o2D"), "Bir saat konuşmadan ekmek attınız."),
P(S("o2B"), "Karısının adı Sevinç'ti. Terzi. Kırk iki yıl. “Bazen düşünürüm,” dedi, “o kırk iki yılı aynen yeniden yaşamak ister miyim? Kavgalarıyla, hastalığıyla, ölümüyle? Her seferinde evet diyorum.”"),
"Bininci salı. Saymayı bıraktın.",
"Piyano; Sevgi Hanım her salı ağlıyor. Arapça. Kursta Suriyeli bir öğretmen var, Rana Hanım, seninle Halep'i konuşuyor. Resim; Nazlı'ya her sabah bir tanesini gösteriyorsun.",
"Kızılay'daki herkesi tanıyorsun. Kimse seni tanımıyor.",
"Bir akşam gösteriden sonra Ela: “Baba, nasıl bu kadar çok şey biliyorsun? Geçen hafta piyano bilmiyordun.”"
], secenekler: [
{ t: "“Seni dinleyerek öğrendim,” dersin.", to: "t1", etki: { bag: 2 } },
{ t: "“Bir gün anlatacağım,” dersin.", to: "t1", etki: { anlam: 1 } },
{ t: "Ela'ya piyano öğretmeyi teklif edersin.", to: "t1", etki: { bag: 1, anlam: 1, ela_piyano: true } },
{ t: "Onu kucaklarsın.", to: "t1", etki: { bag: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Salı", baslik: "Sayısız", metin: [
P(S("h3A"), "Her salı: öğlen okul çıkışı, pastane, gösteri, eve yürüyüş. Ela her gün seni yeniden şaşkınlıkla karşılıyordu. Sen her gün onu biraz daha tanıyordun."),
P(S("h3B"), "Her sabah bankta. Çoğu sabah konuşmadınız. Güvercinler, ekmek, mart güneşi."),
P(S("h3C"), "Bir yemeği bir saatte yedin, bir şarkıyı yirmi kez dinledin. Tatmayı yeniden öğreniyordun."),
P(S("h3D"), "Aynı masa, aynı çay. Garson seni her gün yabancı sanıyordu. Sen her gün onun nasırlı ellerine biraz daha dikkatle bakıyordun."),
P(S("m3A"), "Haritayı yırttın. Yüzlerce isim, parça parça çöpe. Gece yarısı zaten silinecekti. Yırtmak senin elindeydi."),
P(S("m3B"), "Pizzacıda, eve dönerken dinledin: sınıfta bir kızla küs olduğu, tilki kostümünü sevmediği, aslında gülü oynamak istediği."),
P(S("m3C"), "Haritanın kenarına küçük harflerle yazdın: 18.00 – dinle. Sildin. Yeniden yazdın."),
P(S("m3D"), "Haritayı Halit Bey'in yanına koydun. Baktı. “Ağır,” dedi. Bir güvercin üstüne kondu."),
P(S("k3A"), "Kahveni yaptın. Fincan düşmedi. Düşürmemeyi seçtiğini hissettin."),
P(S("k3B"), "Halit Bey tanımadığı bir adama yanını gösterdi. Oturdun."),
P(S("k3C"), "Bir dakika sonra üç tilki emojisi. Her mesajına aynı cevabı veriyordu ve bunu yeni fark ettin."),
P(S("k3D"), "Bir gün daha kalkmadın. Sonra bir sabah, sebepsiz, kalktın."),
P(S("o3A"), "Ela kaşlarını çattı, anlamadı. Ama sarıldı."),
P(S("o3B"), "“Söz mü?” Söz, dedin. Sonsuz kez verdin, sonsuz kez tutamadın."),
P(S("o3C"), "Okulun eski piyanosunda üç nota. Her seferinde sıfırdan. Ama her seferinde biraz daha hızlı öğrendi. Parmak uçlarında bir şey gece yarısını geçiyor muydu?"),
P(S("o3D"), "Karton kulak burnuna battı. Ela güldü. Sen de."),
"Saymayı bıraktın. Bir zamanlar kâğıda çentik atıyordun. Kâğıt siliniyordu. Sonra kafanda saydın. Bir yerde karıştı.",
P(function(d){ return d.kol === "haz"; }, "Büyük şeylerin tadı kalmadı. Bir çayın, bazen, var."),
P(function(d){ return d.kol === "mukemmel"; }, "Kusursuz gün yoktu. Her kurtarış başka bir kaza."),
P(function(d){ return d.kol === "kacis"; }, "Her yol aynı yatağa çıktı. Şimdi her sabah kalkıyorsun."),
P(function(d){ return d.kol === "ogren"; }, "Bir piyano, bir dil, bir şehir. Hiçbiri ertesi güne geçmedi. Yalnızca sana."),
"Bir sabah, 07.28, otobüs durağı.",
"Her gün başka bir şey görüyorsun. Bir gün şoförün gözlerindeki yorgunluk. Bir gün trafik ışığındaki kadının telefonu; Almanya'dan mesaj bekliyor. Bir gün Nazlı'nın kulaklığından taşan şarkı. Bir Arapça şarkı, annesinin dinlediği.",
"Halit Bey bankta. Sana el sallıyor. Seni tanımadığı hâlde. Herkese sallıyor olabilir."
], secenekler: [
{ t: "Halit Bey'in yanına oturursun.", to: "t1b", etki: { bag: 1 } },
{ t: "Otobüs şoförüne adıyla günaydın dersin. Recep.", to: "t1b", etki: { bag: 1, recep: true } },
{ t: "Durakta durup gökyüzüne bakarsın.", to: "t1b", etki: { anlam: 1 } },
{ t: "Otobüse binmezsin. Bugün yürüyeceksin.", to: "t1b", etki: { anlam: 1, yurudu: true } }
]},

t1b: { saat: "Salı", baslik: "Halit'in Sorusu", metin: [
P(S("t1A"), "Halit Bey kese kâğıdını uzattı."),
P(S("t1C"), "Gökyüzünde bir bulutun hep aynı yerde, aynı biçimde durduğunu o sabah fark ettin. Bir köpek başına benziyordu. Sonra banka yürüdün."),
P(S("t1D"), "Yürüdün: bir fırın, bir ayakkabı tamircisi. Camdan gördüğün dükkânların kokuları. Bankta Halit Bey'in de her sabah Ulus'tan yürüyerek geldiğini öğrendin."),
P(S("t1B"), "“Günaydın Recep Abi.” Şoför şaşırdı. “Tanışıyor muyuz?” Gülümsedin. O sabah yolcuyla tartışmadı."),
"Bankta Halit Bey'in yanındasın.",
"“Size garip bir soru soracağım.”",
"“Sor evlat.”",
"“Biri gelse de dese ki: bu hayatı, aynen, bütün acılarıyla sevinçleriyle, sonsuz kez yeniden yaşayacaksın. Ne dersiniz?”",
"Halit Bey uzun süre ekmek atıyor.",
"“Önce ağlarım. Sevinç'in hastalığını sonsuz kez yaşamak. Son gecesini.”",
"“Sonra evet derim. O son gece elini tuttuğum gece. Hastalık sonsuz kez, el de sonsuz kez. Birini almadan öbürünü alamazsın.”",
"“Sen? Bu salıyı sonsuz kez yaşamak ister misin?”"
], secenekler: [
{ t: "“Bilmiyorum,” dersin.", to: "t2", etki: { anlam: 1, bilmiyorum: true } },
{ t: "“Hayır,” dersin. “Ben bir yarın istiyorum.”", to: "t2", etki: { haz: 1, yarin: true } },
{ t: "“Evet,” dersin. Sesinde bir tereddüt var.", to: "t2", etki: { anlam: 1, tereddut: true } },
{ t: "Bir şey demezsin. Güvercinlere bakarsın.", to: "t2", etki: { bag: 1 } }
]},

t2: { saat: "Salı, 18.00", baslik: "Gösteri", metin: [
P(S("t1bA"), "“İyi,” demişti Halit Bey. “Bilen biri bu soruya cevap veremez.”"),
P(S("t1bB"), "Halit Bey gülmüştü: “Yarın gelince onu da bugün gibi yaşarsın.” Bütün gün buna kızdın."),
P(S("t1bC"), "Halit Bey titremeyi duymuştu. “Yarım evet de bir şeydir.”"),
P(S("t1bD"), "Halit Bey üstelememişti. Bir saat ekmek."),
"Akşam. Spor salonu. Karton gezegen.",
"Burcu ön sırada. Yanındaki sandalyeyi gösteriyor.",
"Perde açılıyor.",
"Ela. “Benimle oynayamazsın. Evcilleştirilmedim.”",
"Ela'nın sesindeki küçük titremeyi, son hecedeki yükselişi, kulaklardan birinin hep biraz yana kaydığını ezbere biliyorsun."
], secenekler: [
{ t: "Gösteriden önce sahne arkasına gidip Ela'yı bulursun.", to: "y_kulis", etki: { bag: 2, kulis: true } },
{ t: "Oturup bütün gösteriyi ilk kez izliyormuş gibi izlersin.", to: "y_izle", etki: { anlam: 2, izle: true } },
{ t: "Burcu'nun elini tutarsın.", to: "t3", etki: { bag: 1, burcu_el: true } },
{ t: "Telefonunla kaydedersin. Gece yarısı silinecek.", to: "t3", etki: { anlam: 1, kayit: true } }
]},

y_kulis: { saat: "Salı, 17.45", baslik: "Kulis", metin: [
"Sahne arkası. Kostümler, karton parçalar, bir öğretmen “Sessiz olun!” diye fısıldıyor.",
"Ela bir köşede yalnız. Karton kulaklar elinde. Gözleri dolu.",
"“Baba? Sen buraya gelmezdin.”",
"“Ne oldu tilki?”",
"“Repliğimi unutacağım. Herkes gülecek. Sen de geç kalacaksın. Görmeyeceksin. Ya da göreceksin. Hangisi daha kötü bilmiyorum.”",
"Sahnede hiç unutmadı. Ama bu köşeyi hiç görmedin.",
"“Unutmayacaksın.”",
"“Nasıl biliyorsun?”",
"Repliği söylüyorsun. Onun titremesiyle, son hecedeki yükselişle: “Bağ kurmak. Şimdilik sen benim için yüz bin küçük çocuktan biri gibisin...”",
"“Baba, sen benim repliğimi biliyorsun.”"
], secenekler: [
{ t: "“Sen benim için dünyada teksin,” dersin. Repliğin devamı.", to: "t3", etki: { bag: 2, tek: true } },
{ t: "Karton kulaklarını takarsın.", to: "t3", etki: { bag: 1, kulak: true } },
{ t: "Ona her şeyi anlatırsın: döngüyü, salıları.", to: "t3", etki: { anlam: 1, anlatti_ela: true } },
{ t: "Perdenin arkasında, o sahneden inene kadar beklersin.", to: "t3", etki: { bag: 2, perde: true } }
]},

y_izle: { saat: "Salı, 18.00", baslik: "İlk Kez", metin: [
"İzliyorsun.",
"Küçük Prens'in peruğu yamuk. Çocuk her seferinde düzeltmeye çalışıyor. Gül bir yaprağını düşürüyor. Kralın karton tacının köşesi bantlı.",
"Ela'nın kuyruğu Burcu'nun eski bir eşarbından. Turuncu, solmuş. Kulaklardan birinin içine mavi kalemle küçük bir kalp çizilmiş. Bu kulağı sayısız kez gördün. Kalbi görmedin.",
"“Evcilleştirmek ne demek?”",
"“Bağ kurmak.”",
"“Sen benim için dünyada tek olursun” derken Ela sana bakıyor. Her seferinde mi bakıyordu? Bilmiyorsun."
], secenekler: [
{ t: "Gösteriden sonra Ela'ya kulağındaki kalbi sorarsın.", to: "t3", etki: { bag: 2, kalp: true } },
{ t: "Salonun ortasında ağlarsın.", to: "t3", etki: { bag: 1, anlam: 1 } },
{ t: "Burcu'ya “Teşekkür ederim,” dersin. Ne için olduğunu söylemeden.", to: "t3", etki: { bag: 1, burcu_tesekkur: true } },
{ t: "Perde kapanana kadar kıpırdamadan izlersin.", to: "t3", etki: { anlam: 1 } }
]},

t3: { saat: "Salı, 23.00", baslik: "Ses", metin: [
P(S("t2C"), "Burcu önce elini çekecek gibi oldu, sonra bırakmadı. Tilki sahneden ellerinizi gördü. Repliğinde tökezledi, sonra güldü."),
P(S("t2D"), "Gece on birde videoyu açtın. Bir saat sonra silinecekti. Üç kez izledin."),
P(S("y_kulisA"), "Ela gözlerini kocaman açtı, kuyruğunu düzeltip sahneye çıktı. Son cümlede sana baktı."),
P(S("y_kulisB"), "Biri yine yana kaydı. “Bırak,” dedi Ela, “tilkinin kulağı böyle.”"),
P(S("y_kulisD"), "Perdenin arkasında bekledin. İnince önce sana koştu. Bir öğretmen seni kulisten çıkarmak istedi; Ela elini bırakmadı."),
P(S("y_izleB"), "Plastik bir sandalyede ağladın. Burcu bir mendil uzattı, bir şey sormadı. Sonra kendi gözlerini sildi."),
P(S("y_izleC"), "“Ne için?” Söyleyemedin. Burcu bir saniye başını omzuna yasladı, eski bir alışkanlıkla."),
P(S("y_izleD"), "Herkes çıkarken hâlâ oturuyordun. Ela sahne kenarından: “Baba, bitti!”"),
P(S("y_izleA"), "“Senin için,” dedi Ela. “Herkes kulağına bir şey çizdi. Ben kalp çizdim. Geleceğini bilmiyordum. Yine de çizdim.”"),
P(S("y_kulisC"), "Ela dinledi. “Yani yarın beni hatırlamayacaksın?” Ben hatırlayacağım, dedin. Sen beni hatırlamayacaksın. Ela düşündü. “O zaman her gün bana yeniden söyle. Ben her gün yeniden inanırım.”"),
"Gece on bir. Evdesin.",
"Bir saat sonra her şey sıfırlanacak.",
"Odada bir ses. Kafanın içinde mi, yorgunluktan mı, bilmiyorsun.",
"“Bu hayatı, şimdi yaşadığın gibi, sayısız kez yeniden yaşayacaksın. Her acı, her sevinç, aynı sırayla. Bu kahve, bu minibüs, bu tilki.”",
"Halit Bey'in sabahki sorusunun yankısı gibi."
], secenekler: [
{ t: "Gece yarısına kadar bu soruyu düşünürsün.", to: "t4", etki: { anlam: 1 } },
{ t: "Sese bağırırsın: “Hayır!”", to: "t4", etki: { haz: 1, hayir: true } },
{ t: "Ela'yı ararsın.", to: "t4", etki: { bag: 1, son_ara: true } },
{ t: "Halit Bey'i düşünürsün. Sevinç'in elini.", to: "t4", etki: { bag: 1, anlam: 1, nermin: true } }
]},

t4: { saat: "Salı, 23.59", baslik: "23.59", metin: [
P(S("t3A"), "Soru her seferinde başka bir yüzle geldi: Nazlı'nın, Halit Bey'in, Ela'nın."),
P(S("t3B"), "Komşu duvara vurdu. Ses cevap vermedi."),
P(S("t3D"), "Hastalık sonsuz kez, el de sonsuz kez."),
P(S("t3C"), "Ela uykulu açtı. “Baba? İyi misin?” İyiyim. “Gösteriye geldin. Bunu hatırlayacağım.” Hatırlamayacaktı. Sen hatırlayacaktın."),
"23.59.",
"Kahve fincanı. Radyo. Nazlı'nın sarı çantası. Fren sesi. Güvercinler. Mercimek çorbası. Tilki.",
P(function(d){ return d.kol === "haz"; }, "Tatsız tabaklar, hatırlanmayan geceler. Onlar da."),
P(function(d){ return d.kol === "mukemmel"; }, "Haritalar, kurtarışlar, Rıfat Bey'in düşüşü. Onlar da."),
P(function(d){ return d.kol === "kacis"; }, "Sinop, Londra, uyku kliniği, yatakta geçen ay. Onlar da."),
P(function(d){ return d.kol === "ogren"; }, "Chopin, Arapça, bir şehrin bin hayatı. Onlar da."),
"Otuz saniye.",
"Evet dersen Nazlı'nın düşüşüne de evet demiş olacaksın; Ela'nın repliğine de.",
"On saniye."
], secenekler: [
{ t: "“Evet,” dersin. Fısıltıyla. Gerçekten kastederek.", to: "ss", etki: { amor: true, anlam: 2 } },
{ t: "“Evet,” dersin. Ama bir şartla: Ela'yı her gün yeniden bulmak.", to: "ss", etki: { amor: true, bag: 2, sartli: true } },
{ t: "“Hayır,” deyip gözlerini kapatırsın.", to: "ss", etki: { haz: 1, ret: true } },
{ t: "Bir şey demezsin. Saatin son saniyesine bakarsın.", to: "ss", etki: { anlam: 1, sessiz: true } }
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
P(S("t4B"), "Şartlı bir evet. Bir dua gibi."),
"Alarm. 06.47.",
"Ekranda: Çarşamba, 13 Mart.",
"Yatakta oturup ekrana bakıyorsun. Neden bitti? Bilmiyorsun.",
"Kahve makinesi. Fincan kenara çarpmıyor. Bir alışkanlık.",
"Radyoda bilmediğin bir şarkı. Bir şarkının yeni olması için ağlıyorsun.",
"Burcu: “Ela dün akşam bütün gece senden bahsetti. Cumartesi yemeğe gelir misin?”",
"Pencere. Köpek bu sabah başka bir ağacın dibinde duruyor.",
"Bugün ne olacağını bilmiyorsun. Ayakkabını giyerken bağcığın kopuyor. Gülüyorsun."
]},

son_sisifos: { son: true, baslik: "Dedenin Masalı", metin: [
P(S("t4A"), "“Evet” demiştin. 06.47 yine geldi."),
P(S("t4B"), "Şartlı bir evet. Döngü bitmedi."),
"Alarm. 06.47. Salı, 12 Mart.",
"Bir “evet”in anahtar olduğunu sanmıştın.",
"Kahve. Radyodaki şarkıyı bu sabah birlikte söylüyorsun. Nakaratta sesin çatlıyor.",
"Bankta Halit Bey. “Bugün hava güzel. Dün de güzeldi. Yarın da güzel olacak.” “Evet,” diyorsun.",
"Dedenin masalı aklında. Kaya iniyor. Adam boş elleriyle peşinden. Deden “Belki ıslık çalıyordur,” derdi.",
"Bulvar'a yürürken ıslık çalıyorsun. Kötü. Halit Bey arkandan gülüyor."
]},

son_bos: { son: true, baslik: "Boşluk", metin: [
P(S("t4C"), "“Hayır” deyip gözlerini kapatmıştın. Açtığında aynı tavan."),
P(S("t4D"), "Son saniyeye baktın. Rakamlar sıfırlandı."),
"Alarm. 06.47. Salı.",
"Bazı salılar yatakta. Bazı salılar büyük, tehlikeli, bedelsiz bir şey. Hiçbiri bir şey bırakmıyor.",
P(function(d){ return d.cay_her || d.kucuk; }, "Bir çay var. Kızılay'da, her sabah aynı çay. Sıcak."),
P(function(d){ return d.ela_adadi || d.ela_ogle; }, "Bir de Ela. Bazı salılar öğlen okuldan alıyorsun. Profiterol. Her seferinde sana bir şey öğretmeye çalışıyor. Sen öğreniyorsun. O unutuyor."),
"Bugün de çay bahçesine gidiyorsun. Garson masayı siliyor. Masada bir halka iz kalıyor. Bir önceki çaydan."
]},

son_kusursuz: { son: true, baslik: "Kusursuz Gün", metin: [
P(S("t4C"), "“Hayır.” Kusursuz olmayan bir salıya evet diyemedin."),
P(S("t4D"), "Bir cevap da plan gibi geldi. Vermedin."),
"Alarm. 06.47. Salı.",
P(function(d){ return d.yirtti || d.dinledi; }, "Haritayı yırttığın günden beri planlamıyorsun. Nazlı'yı kurtarıyorsun, çünkü önündesin. Rıfat Bey'e bazı sabahlar yetişiyorsun, bazı sabahlar yetişemiyorsun."),
P(function(d){ return d.devam; }, "Harita büyüyor. Bin isim. Ela'nın gösterisinde ön sıradasın. Saatine bakıyorsun. Kulağındaki kalbi hiç görmedin."),
"Nazlı her sabah sana bir çay borçlu olduğunu söylüyor. Bazı sabahlar o çayı içiyorsunuz. Büfede, bir minibüs geçerken. Nazlı çantasından bir eskiz defteri çıkarıyor. Bu sabah ilk kez."
]},

son_tilki: { son: true, baslik: "Tilki", metin: [
P(S("t4C"), "Sabah kahveni yaparken gece verdiğin “hayır”ı düşündün."),
P(S("t4D"), "Son saniye, her zamanki gibi, geçmişti."),
"Alarm. 06.47.",
"Salı mı çarşamba mı, ekrana bakmıyorsun.",
P(function(d){ return d.tek || d.kalp; }, "Kulaktaki kalbi gördüğün ya da repliği kuliste onunla söylediğin günden beri bir şeyi biliyorsun: Ela seni çoktan evcilleştirmişti. Görmen biraz uzun sürdü."),
"Bir yıl önce bir telefonda “Başka zaman” demiştin.",
"Akşam altıda bir spor salonu. Gideceksin. Erken. Ön sıraya bir papatya koyabilirsin."
]}

},

ayna: function(d){
  var out = [];
  var a = d.anlam, h = d.haz, b = d.bag;
  if(a >= h && a >= b) out.push("Çoğu salı bir neden aradın; kâğıtlarda, kliniklerde, gece yarısındaki seste.");
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
