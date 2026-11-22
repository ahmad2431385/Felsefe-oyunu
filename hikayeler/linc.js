(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "linc",
baslik: "Linç",
dunya: "Gerçek dünya",
kategoriler: ["Toplum ve Adalet"],
giris: "2024, İstanbul. Bir lisenin kimya laboratuvarında sekiz saniyelik bir video çekiliyor: bir öğretmen bir öğrencinin kolunu tutup bağırıyor. Bir gecede iki milyon izlenme, bir etiket, bir “öğretmen öğrenciyi darp etti” cümlesi. Sen o gün kapıdaydın ve telefonunda kırk saniyelik bir video var. Kırk saniye gerçeği gösteriyor; ama gerçeği göstermek, bir başka çocuğu yakmak demek. Bir kalabalığın, bir hakikatin ve bir öğretmenin sessizliğinin hikâyesi.",
kavramlar: ["Kitle psikolojisi", "Hakikat sonrası", "Utanç ve itibar", "Sessiz tanık"],
ozet: "Sekiz saniyelik bir video bir öğretmeni bir gecede “şiddet uygulayan öğretmen”e çeviriyor. Sende videonun tamamı var. Ama gerçeği göstermek bir başka çocuğu ateşe atmak demek.",
baslangic: "a1",
durum: { hakikat: 0, koruma: 0, kalabalik: 0 },

sahneler: {

a1: { saat: "Pazartesi, 11.40", baslik: "Laboratuvar", metin: [
"Kadıköy'de bir Anadolu lisesi. Pazartesi, dördüncü ders. Koridor boş; teneffüse beş dakika var.",
"Adın İrem, otuz dört yaşındasın, edebiyat öğretmenisin. Sözleşmelisin; üç yıldır bu okulda, kadroya geçmeyi bekliyorsun. Elinde bir yığın kompozisyon kâğıdı; on birlerin “Hayatımı değiştiren bir an” yazıları.",
"Kimya laboratuvarının önünden geçerken bir ses. Bir bağırış, bir cam sesi. Kapı aralık. Bakıyorsun.",
"İçeride on bir-C. Masaların arasında iki çocuk. Arda; senin öğrencin, sessiz, şiir yazan, gözlüklü. Elinde bir beher; içinde bir sıvı, deney için hazırlanmış bir asit çözeltisi. Karşısında Berk; uzun boylu, basketbol takımı, gülüyor. “Hadi,” diyor Berk, “at bakalım. Atamazsın. Sen bir şey yapamazsın.”",
"Bir refleksle telefonunu çıkarıyorsun. Kayıt. Neden, bilmiyorsun; bir şey olacak, biri görmeli.",
"Arda'nın eli titriyor. Beher yükseliyor. Sınıf donmuş.",
"Sonra kimya öğretmeni Cengiz Bey; elli iki yaşında, sert, sevilmeyen, otuz yıllık. İki adımda Arda'nın yanında. Kolunu yakalıyor; sert. “Bırak onu! Bırak dedim!” Beher Arda'nın elinden kayıyor, masaya düşüyor, devrilmiyor. Sıvı yerinde.",
"Kırk saniye. Telefonunu indiriyorsun. Arda ağlıyor. Berk gülüyor ama sesi titriyor. Cengiz Bey Arda'nın kolunu bırakıp bir sandalyeye çöküyor; elleri titriyor.",
"Zil çalıyor."
], secenekler: [
{ t: "Laboratuvara girip Arda'nın yanına gidersin.", to: "a2", etki: { koruma: 1, girdi: true } },
{ t: "Cengiz Bey'e gidip iyi olup olmadığını sorarsın.", to: "a2", etki: { hakikat: 1, cengize: true } },
{ t: "Videoyu silmeyi düşünürsün; sonra silmezsin.", to: "a2", etki: { kalabalik: 1, silmedi: true } },
{ t: "Kimseye bir şey demeden öğretmenler odasına gidersin.", to: "a2", etki: { kalabalik: 1, gitti: true } }
]},

a2: { saat: "Salı", baslik: "Sekiz Saniye", metin: [
P(S("a1A"), "Arda'nın yanına gittin. Bir şey söylemedi; yalnızca sana baktı. Gözlerinde bir korku ve bir utanç. Sonra koşarak çıktı. Berk arkasından bir şey bağırdı; duymadın."),
P(S("a1B"), "Cengiz Bey sana baktı, sonra başını salladı. “İyiyim,” dedi. “Kimseye bir şey söyleme.” Neyi kastettiğini sormadın."),
"Salı sabahı telefonunda yüz on yedi bildirim.",
"Bir video. Sekiz saniye. Bir öğrencinin telefonundan; masanın arkasından, alçak açıdan. Görüntüde yalnızca Cengiz Bey, Arda'nın kolunu sertçe yakalıyor ve bağırıyor: “Bırak dedim!” Beher görünmüyor. Berk görünmüyor. Önü yok, arkası yok.",
"Altında bir yazı: “Kadıköy'de öğretmen öğrenciyi darp etti! Çocuklarımız güvende mi?”",
"Video gece yarısı bir öğrenci hesabından paylaşılmış. Sabah altıda bir “ebeveyn” hesabı paylaşmış; üç yüz bin takipçili bir annelik hesabı. Hesabın sahibi Gülsüm Hanım: Berk'in annesi.",
"İki milyon izlenme. Bir etiket: #CengizHocaKovulsun. Okulun adı, Cengiz Bey'in tam adı, bir fotoğrafı; eski bir öğretmenler günü kutlamasından.",
"Yorumlar: “Bu adam hapse girmeli.” “Benim çocuğuma dokunsa elini kırardım.” “Bu öğretmenler hep böyle.” “Adresini bulan var mı?”",
"Senin telefonunda kırk saniye. Beher, Berk, “At bakalım.” Hepsi."
], secenekler: [
{ t: "Yorumları okursun. Hepsini.", to: "x_yorum", etki: { kalabalik: 1 } },
{ t: "Cengiz Bey'i ararsın.", to: "x_cengiz", etki: { hakikat: 1 } },
{ t: "Telefonunu kapatıp okula gidersin.", to: "a3", etki: { koruma: 1, kapatti: true } },
{ t: "Kendi videonu yeniden izlersin. Ne gördüğünden emin olmak için.", to: "a3", etki: { hakikat: 1, izledi: true } }
]},

x_yorum: { saat: "Salı", baslik: "Yorumlar", metin: [
"Okuyorsun. Bin, iki bin, beş bin yorum. Sabah kahvesi soğuyor.",
"Bir yorum: “Bu adamı tanıyorum, benim de öğretmenimdi. Hep sertti. Bir gün birini öldürecekti.” Bir başkası: “Ben de bu okulda okudum, bu adam bana hiç dokunmadı ama hep korkardık.” Bir başkası: “Ülkenin hâli bu; öğretmenler çocuk dövüyor, kimse bir şey demiyor.”",
"Bir başkası, Cengiz Bey'in kızının sosyal medya hesabını bulmuş: “Babana söyle, utansın.” Kızı üniversitede; bir fotoğrafında mezuniyet cüppesi.",
"Bir başkası bir adres: Cengiz Bey'in evinin sokağı, Göztepe.",
"Kimse soru sormuyor. Kimse “Önce ne oldu?” demiyor. Sekiz saniye bir cümle olmuş; cümle bir hüküm, hüküm bir öfke.",
"Ve sen fark ediyorsun: bu insanlar kötü değil. Çoğu bir anne, bir baba, bir eski öğrenci. Bir çocuğun korunması gerektiğini düşünüyorlar. Haklılar. Yalnızca, yanlış çocuğu koruduklarını bilmiyorlar.",
"Bir yorumun altında bir başka öğretmen; senin okulundan, adı tanıdık: “Ben de bu okulda öğretmenim. Bu adamla ilgili daha önce de şikâyetler oldu.” Bu doğru değil. Bunu biliyorsun."
], secenekler: [
{ t: "O öğretmene özelden yazıp yalan söylediğini söylersin.", to: "a3", etki: { hakikat: 1, ogretmene: true } },
{ t: "Bir yoruma cevap yazarsın: “Videonun öncesini bilmiyorsunuz.”", to: "a3", etki: { hakikat: 1, yorum_yazdi: true } },
{ t: "Telefonu bırakırsın. Daha fazla okuyamazsın.", to: "a3", etki: { koruma: 1 } },
{ t: "Bir yorumu beğenirsin; yanlışlıkla. Ya da değil.", to: "a3", etki: { kalabalik: 2, begendi: true } }
]},

x_cengiz: { saat: "Salı", baslik: "Cengiz Bey", metin: [
"Telefon uzun süre çalıyor. Sonra bir ses; yorgun, kısık.",
"“Efendim.”",
"“Cengiz Hocam, benim, İrem. Edebiyattan.”",
"Bir sessizlik. “Biliyorum. Ne istiyorsun?”",
"“Hocam, ben o gün kapıdaydım. Her şeyi gördüm. Ve...” Duraksıyorsun. “Kaydettim. Kırk saniye. Beheri, Berk'i, her şeyi.”",
"Uzun bir sessizlik. Bir yerde bir televizyon. Bir kadın sesi; eşi olmalı, bir şey soruyor.",
"“Sil onu,” diyor Cengiz Bey.",
"“Hocam?”",
"“Sil. Kimseye gösterme. Ben otuz yıl öğretmenlik yaptım. Elli iki yaşındayım. Emekliliğime üç yıl var. Bu sekiz saniye beni bitirebilir; bitirsin. Ama o çocuk on altı yaşında. O videoyu gösterirsen, bütün ülke onu asit atmaya kalkan bir çocuk olarak tanır. Ben bir ay sonra unutulurum. O hiç unutulmaz.”",
"Sesi kırılıyor. “Ben bir öğretmenim İrem. Bir öğretmen önce öğrencisini korur.”"
], secenekler: [
{ t: "“Siz de bir insansınız hocam. Sizi kim koruyacak?” dersin.", to: "a3", etki: { hakikat: 1, sizi_kim: true } },
{ t: "“Tamam hocam. Kimseye göstermem,” dersin.", to: "a3", etki: { koruma: 2, cengize_soz: true } },
{ t: "“Silemem hocam. Ama şimdilik göstermem,” dersin.", to: "a3", etki: { koruma: 1, hakikat: 1 } },
{ t: "“Eşiniz ne diyor?” diye sorarsın.", to: "a3", etki: { koruma: 1, esi: true } }
]},

a3: { saat: "Salı, öğleden sonra", baslik: "Müdür", metin: [
P(S("x_yorumD"), "Bir yorumu beğendin. Bir saniye; parmağın kaydı, ya da kaymadı. “Bu öğretmenler hep böyle.” Beğeniyi geri aldın. Ama bir saniyeliğine, iki milyonun içinde, sen de bir sayıydın."),
P(S("x_cengizA"), "Cengiz Bey bir süre sustu. “Beni kimse korumaz İrem,” dedi. “Otuz yılda öğrendim. Öğretmeni kimse korumaz. Ne veli, ne müdür, ne bakanlık. Sen de koruma. Ama o çocuğu da yakma.”"),
P(S("x_cengizD"), "“Eşim ağlıyor,” dedi Cengiz Bey. “Kızımın hesabına mesajlar geliyor. Eşim diyor ki gerçeği söyle. Ben diyorum ki söylemem. Otuz yıllık evlilik; ilk kez bir konuda anlaşamıyoruz.”"),
"Öğleden sonra müdür Nermin Hanım bütün öğretmenleri toplantıya çağırıyor. Öğretmenler odası dolu; herkes telefonuna bakıyor.",
"“Arkadaşlar,” diyor Nermin Hanım. Ellilerinde, yorgun, telefonu masada titreyip duruyor. “Durumu biliyorsunuz. İlçe milli eğitimden müfettiş gelecek. Cengiz Bey tedbiren görevden uzaklaştırıldı; soruşturma bitene kadar. Lütfen basına, sosyal medyaya hiçbir şey söylemeyin. Velilere hiçbir açıklama yapmayın. Kurumun bir açıklaması olacak.”",
"Bir öğretmen el kaldırıyor; matematikten Serkan Bey. “Hocam, o gün laboratuvarda ne olduğunu bilen var mı? Öğrenciler ne diyor?”",
"Nermin Hanım bir an duraksıyor. “Öğrenciler farklı şeyler söylüyor. Müfettiş dinleyecek.” Sonra sana bakıyor; ya da sen öyle hissediyorsun.",
"Odada otuz öğretmen. Biri, belki, bir şey biliyor. Ve herkes, bir kurumun sessizliğinin arkasına geçmeye hazır."
], secenekler: [
{ t: "El kaldırıp “Ben gördüm. Bir videom var,” dersin.", to: "a4", etki: { hakikat: 2, mudure_soyledi: true } },
{ t: "Toplantıdan sonra Nermin Hanım'a özelden söylersin.", to: "a4", etki: { hakikat: 1, ozel: true } },
{ t: "Bir şey söylemezsin. Sözleşmelisin.", to: "a4", etki: { kalabalik: 1, sozlesme: true } },
{ t: "Serkan Bey'e dönüp “Önce Arda'yla konuşmak lazım,” dersin.", to: "a4", etki: { koruma: 1 } }
]},

a4: { saat: "Çarşamba", baslik: "Arda", metin: [
P(S("a3A"), "Oda sustu. Nermin Hanım'ın yüzü bembeyaz oldu. “Toplantıdan sonra odama gel İrem,” dedi. Herkes sana döndü. Bir öğretmen, arka sıradan, fısıldadı: “Sözleşmeli değil miydi?”"),
P(S("a3B"), "Nermin Hanım videoyu izledi. Bir kez. İki kez. Sonra telefonunu sana geri verdi. “Bunu kimseye gösterme,” dedi. “Müfettişe ben söylerim. Ama bu video çıkarsa okul biter. Bir öğrenci asitle bir öğrenciye saldırmaya kalktı; bir öğretmen engelledi; bir başka öğrenci bunu çarpıtıp yaydı; bir veli kendi oğlunun zorbalığını gizlemek için öğretmeni yaktı. Bunun hangi kısmı okulu kurtarır?”"),
"Çarşamba, son ders bitince sınıfta tek başınasın. Kapı açılıyor. Arda.",
"Gözlükleri buğulu. Kapıyı kapatıyor. Bir süre konuşmadan duruyor.",
"“Hocam,” diyor sonunda. “Siz kapıdaydınız. Gördüm sizi. Telefonunuzu da gördüm.”",
"Masaya yaklaşıyor. Sesi titriyor ama net.",
"“Lütfen göstermeyin. Lütfen. Herkes öğrenirse... Herkes benim asit atmaya kalktığımı öğrenir. Okuldan atılırım. Belki polis. Ve herkes neden kalktığımı da öğrenir. Berk'in bana yaptıklarını. İki yıldır. Annem bilmiyor. Babam bilmiyor. Kimse bilmiyor.”",
"Ağlamaya başlıyor. “Cengiz Hoca beni kurtardı hocam. Biliyorum. O gün o beheri atsaydım... Ama şimdi onu ben yaktım. Ve ben bir şey diyemiyorum. Dersem ben yanarım.”"
], secenekler: [
{ t: "“Göstermeyeceğim,” dersin.", to: "a5", etki: { koruma: 2, ardaya_soz: true } },
{ t: "“Berk sana ne yaptı?” diye sorarsın.", to: "x_arda", etki: { hakikat: 1, koruma: 1 } },
{ t: "“Gerçek bir gün çıkacak Arda. Benden ya da başkasından,” dersin.", to: "a5", etki: { hakikat: 2 } },
{ t: "Onu okulun rehber öğretmenine götürürsün.", to: "x_rehber", etki: { koruma: 1, rehber: true } }
]},

x_arda: { saat: "Çarşamba", baslik: "İki Yıl", metin: [
"Arda bir süre susuyor. Sonra telefonunu çıkarıyor. Bir mesajlaşma grubu; sınıfın, ama Arda'sız. Biri ekran görüntülerini Arda'ya göndermiş; acımak için mi, eğlenmek için mi, belli değil.",
"Ekran görüntüleri. İki yıl. Arda'nın fotoğrafları; gizlice çekilmiş, değiştirilmiş, alay edilmiş. Şiirleri; Arda'nın edebiyat defterinden çalınmış, sınıf grubunda okunmuş, gülünmüş. Bir şiirin altında Berk'in yazısı: “Bu ibne şiir mi yazıyor.”",
"Sonra başka şeyler. Arda'nın ailesi hakkında. Babasının işsizliği hakkında. Ve bir mesaj, o pazartesi sabahından: “Bugün laboratuvarda bir şey yapacağız ona. Kaydedin.”",
"Okuduğun her mesajda midende bir şey düğümleniyor. Bu senin sınıfın. Senin öğrencilerin. Sen bu çocuklara her hafta şiir okuttun; Nazım, Cemal Süreya, Edip Cansever. Ve onlar, aynı hafta, şiir yazan bir çocuğu iki yıl boyunca bir gruba hapsettiler.",
"“Ben bir şey yapmak istemedim hocam,” diyor Arda. “O gün... Berk beheri bana gösterdi. ‘At,’ dedi. ‘Atamazsın, korkaksın.’ Ben de... bir an... gerçekten atmak istedim. Bir an. Sonra Cengiz Hoca.”",
"“Bunu kimse bilmemeli,” diyor. “O bir an'ı. Onu bilirlerse, ben de Berk gibi olurum.”"
], secenekler: [
{ t: "Ekran görüntülerini Arda'dan istersin. Bir gün lazım olabilir.", to: "a5", etki: { hakikat: 1, ekran: true } },
{ t: "“O bir an seni Berk gibi yapmaz,” dersin.", to: "a5", etki: { koruma: 2 } },
{ t: "Arda'ya bir şiir okumasını istersin. Kendi şiirlerinden.", to: "a5", etki: { koruma: 1, siir: true } },
{ t: "Berk'in ailesiyle konuşmaya karar verirsin.", to: "a5", etki: { hakikat: 1, berk_aile: true } }
]},

x_rehber: { saat: "Çarşamba", baslik: "Rehber", metin: [
"Rehber öğretmen Tülay Hanım, kırklarında, yumuşak sesli. Odasında bir kanepe, bitkiler, bir kutu mendil.",
"Arda içeri giriyor; sen kapıda duruyorsun. Tülay Hanım ona bir çay koyuyor. Arda bir şey söylemiyor; bir saat.",
"Sonra konuşuyor. Her şeyi. İki yıl. Grup. Şiirler. Berk. Beher. O bir an.",
"Tülay Hanım dinliyor. Çıktığında yüzü ciddi.",
"“İrem Hanım,” diyor sana, alçak sesle, “bu çocuk risk altında. Kendine zarar verme düşünceleri var. Ailesini aramam gerekiyor; yasal olarak. Ve bir şey daha: ben bunu müdüre bildirmek zorundayım. Akran zorbalığı, bir saldırı girişimi. Bu bir rapor. Ve rapor müfettişin önüne gidecek.”",
"Arda kapıda duruyor; duymuş. Yüzü bembeyaz.",
"“Hocam,” diyor sana. “Söz vermiştiniz.”",
"Söz vermedin. Ama bir şey verdin; bir güven. Ve şimdi o güven bir rapora dönüşüyor."
], secenekler: [
{ t: "Tülay Hanım'dan raporu bekletmesini istersin. Bir hafta.", to: "a5", etki: { koruma: 1, beklet: true } },
{ t: "Arda'ya “Bu seni korumak için,” dersin.", to: "a5", etki: { hakikat: 1, koruma: 1 } },
{ t: "Arda'nın ailesini kendin aramayı teklif edersin.", to: "a5", etki: { koruma: 1, aile_ara: true } },
{ t: "Bir şey söylemeden Arda'nın yanına gidersin.", to: "a5", etki: { koruma: 1 } }
]},

a5: { saat: "Perşembe akşamı", baslik: "Göztepe", metin: [
"Perşembe akşamı Cengiz Bey'in evine gidiyorsun. Göztepe'de, eski bir apartman, üçüncü kat. Kapıda bir kâğıt yapıştırılmış; biri yazmış: “Çocuk döven.” Kâğıdı sökmüşler, ama yapışkanın izi kalmış.",
"Kapıyı eşi açıyor. Ayten Hanım; emekli hemşire. Gözleri kızarık. Seni içeri alıyor.",
"Cengiz Bey salonda, televizyonun karşısında. Televizyon kapalı. Masada bir kahve; soğumuş. Üç günde on yaş yaşlanmış.",
"“Kızım,” diyor Ayten Hanım sana, “üniversitede. Hesabını kapattı. Ama okulda herkes biliyor. Bir arkadaşı ona ‘Baban çocuk mu dövüyor?’ demiş. Kızım babasını savundu; arkadaşı onu bir gruptan çıkarmış.”",
"Cengiz Bey bir şey söylemiyor.",
"“Dün gece arabamızın camını kırdılar,” diyor Ayten Hanım. “Polis geldi, tutanak tuttu, gitti. ‘Sosyal medya hassasiyeti,’ dedi polis. Hassasiyet.”",
"Sonra Cengiz Bey sana dönüyor. “Videoyu sildin mi?”",
P(function(d){ return d.cengize_soz; }, "“Silmedim hocam,” diyorsun. “Ama kimseye göstermedim. Söz verdim.”"),
"Ayten Hanım kocasına bakıyor; sonra sana. “Hangi video?”",
"Bir sessizlik. Cengiz Bey eşine hiç söylememiş."
], secenekler: [
{ t: "Ayten Hanım'a gerçeği söylersin; videoyu.", to: "a6", etki: { hakikat: 2, ayten_bildi: true } },
{ t: "Cengiz Bey'e bakarsın. Karar onun.", to: "a6", etki: { koruma: 1 } },
{ t: "“Bir şey yok,” dersin. Cengiz Bey'in sırrını korursun.", to: "a6", etki: { koruma: 1, kalabalik: 1 } },
{ t: "Cengiz Bey'e: “Eşinize siz söyleyin hocam,” dersin.", to: "a6", etki: { hakikat: 1, kendisi_soylesin: true } }
]},

a6: { saat: "Cuma", baslik: "Seçim", metin: [
P(S("a5A"), "Anlattın. Ayten Hanım dinledi; sonra kocasına döndü. “Üç gün,” dedi. “Üç gündür sessizsin. Üç gündür ‘bir şey yok’ diyorsun. Bir video var ve sen...” Cümlesini bitirmedi. Cengiz Bey yere baktı. “O çocuk on altı yaşında Ayten,” dedi. Ayten Hanım uzun süre sustu. Sonra: “Bizim kızımız da yirmi bir yaşında.”"),
P(S("a5D"), "Cengiz Bey eşine anlattı. Ayten Hanım dinledi. Bir süre hiçbir şey söylemedi. Sonra kalkıp mutfağa gitti; kapıyı kapattı. İçeriden bir ses gelmedi. Cengiz Bey sana döndü: “Görüyorsun. Gerçek her şeyi kolaylaştırmıyor.”"),
"Cuma. Video artık beş milyon izlenmede. Bir televizyon kanalı haberini yaptı; ana haber bülteninde, otuz saniye. Bir milletvekili “Öğretmenlerin şiddeti” üzerine bir soru önergesi verdi. Gülsüm Hanım bir canlı yayın yaptı; ağlayarak, “Bir anne olarak” diye başlayarak.",
"Müfettiş pazartesi geliyor. Soruşturma otuz gün sürecek.",
"Otuz gün. İnternette otuz gün, otuz yıl gibi. Cengiz Bey'in adı bir arama motorunda artık yalnızca bu videoyla çıkıyor; bir otuz yıl, sekiz saniyeye indi.",
"Telefonunda kırk saniye. Ve Arda'nın sesi: “Lütfen göstermeyin.” Ve Cengiz Bey'in sesi: “Sil onu.” Ve Ayten Hanım'ın sesi: “Bizim kızımız da yirmi bir yaşında.”",
"Ve bir şey daha: Arda'nın ekran görüntüleri, belki sende, belki değil. İki yıllık bir zorbalığın kanıtı. Berk'in. Gülsüm Hanım'ın oğlunun.",
"Bir şey yapacaksın. Ya da yapmayacaksın; o da bir şey."
], secenekler: [
{ t: "Kırk saniyelik videoyu paylaşırsın. Herkese. Kendi hesabından.", to: "h1", etki: { hakikat: 2, kol: "hakikat" } },
{ t: "Videoyu yalnızca müfettişe verirsin. Resmî yoldan.", to: "r1", etki: { hakikat: 1, koruma: 1, kol: "resmi" } },
{ t: "Hiçbir şey yapmazsın. Arda'ya ve Cengiz Bey'e verdiğin söze uyarsın.", to: "s1", etki: { koruma: 2, kol: "sessiz" } },
{ t: "Videoyu değil, Berk'in iki yıllık mesajlarını paylaşırsın. Asıl suçlu o.", to: "b1", etki: { kalabalik: 1, hakikat: 1, kol: "karsi" } }
]},

/* ---------- HAKİKAT KOLU ---------- */
h1: { saat: "Cuma gecesi", baslik: "Kırk Saniye", metin: [
"Kendi hesabın; yedi yüz takipçi, çoğu eski öğrenci. Videoyu yüklüyorsun. Kırk saniye. Altına bir metin yazıyorsun; üç kez silip yeniden yazıyorsun.",
"“Ben o okulda öğretmenim. O gün kapıdaydım. Bu videonun tamamı. Cengiz Hoca bir öğrenciyi darp etmedi; bir öğrencinin bir başkasına zarar vermesini engelledi. Lütfen sekiz saniyeyle karar vermeyin.”",
"Arda'nın yüzünü bulanıklaştırıyorsun. Berk'inkini de. Kırk saniye; ama yüzsüz.",
"Paylaş.",
"Bir saat: yüz paylaşım. İki saat: bin. Gece yarısı: bir haber sitesi. Sabah altıda: bir milyon.",
"Ve rüzgâr dönüyor. Aynı insanlar, aynı hesaplar, aynı öfke; yön değiştirmiş. “Bu öğretmen kahraman!” “Hepimiz özür dilemeliyiz.” “O veli kim? Gülsüm Hanım'ın oğlu değil mi o?”",
"Sonra başka bir şey. Bulanıklaştırdığın yüzler; biri bulanıklaştırmayı kaldırmış. Bir yapay zekâ aracıyla. Sabah yedide Arda'nın yüzü, net, bir hesapta: “İşte asit atmaya kalkan çocuk.” Altında adı, okul numarası, bir fotoğrafı.",
"Sabah sekizde Arda'nın adı trend."
], secenekler: [
{ t: "Videoyu hemen kaldırırsın.", to: "h2", etki: { koruma: 2, kaldirdi: true } },
{ t: "Bir açıklama yazarsın: Arda'nın neden o beheri tuttuğunu; iki yıllık zorbalığı.", to: "h2", etki: { hakikat: 1, koruma: 1, aciklama: true } },
{ t: "Arda'yı ararsın.", to: "h2", etki: { koruma: 1, ardayi_aradi: true } },
{ t: "Platforma şikâyette bulunursun; Arda'nın yüzünü açan hesaplar için.", to: "h2", etki: { hakikat: 1, sikayet: true } }
]},

h2: { saat: "Cumartesi", baslik: "Arda'nın Annesi", metin: [
P(S("h1A"), "Videoyu kaldırdın. Ama video artık senin değildi; yüz bin kişi indirmişti. Kaldırdığın şey yalnızca senin adındı. Video, sensiz, yayılmaya devam etti."),
P(S("h1B"), "Açıklama yazdın. İki yıl, bir grup, bir şiir defteri. Açıklamayı yazarken Arda'nın adını hiç kullanmadın. Ama artık herkes adını biliyordu. Açıklaman bir savunma gibi değil, bir ikinci ifşa gibi okundu."),
P(S("h1C"), "Arda telefonu açmadı. Bir kez, iki kez, on kez. Sonra bir mesaj geldi: “Neden?” Tek kelime."),
"Cumartesi öğlen kapın çalınıyor. Bir kadın. Kırklarında, başörtülü, gözleri şiş. Arda'nın annesi; Hacer Hanım.",
"İçeri girmiyor. Kapıda duruyor.",
"“Siz miydiniz?” diyor. Sesi titremiyor. “Videoyu siz mi koydunuz?”",
"Evet, diyorsun.",
"“Oğlum dün gece banyoya kapandı,” diyor Hacer Hanım. “Babası kapıyı kırdı. Bir şey yapmamıştı; yalnızca orada oturuyordu, karanlıkta. Telefonunu elinden aldık. Bin mesaj. Bin. ‘Terörist.’ ‘Psikopat.’ ‘Öl.’ On altı yaşında.”",
"Bir süre susuyor. “Ben iki yıl boyunca oğlumun okulda ne yaşadığını bilmiyordum. Dün gece bir yabancının açıklamasından öğrendim. Bir ekrandan. Bir milyon kişiyle birlikte.”",
"“Bir öğretmeni kurtardınız,” diyor. “Bunu biliyorum. Ama benim oğlumu kim kurtaracak?”"
], secenekler: [
{ t: "Özür dilersin.", to: "h3", etki: { koruma: 1, ozur: true } },
{ t: "“Gerçek bir gün çıkacaktı Hacer Hanım,” dersin.", to: "h3", etki: { hakikat: 1 } },
{ t: "Ona Arda'nın iki yıllık zorbalığını belgeleyen her şeyi verirsin; hukuki yol için.", to: "h3", etki: { hakikat: 1, koruma: 1, belge: true } },
{ t: "Hacer Hanım'ı içeri alırsın. Bir çay.", to: "h3", etki: { koruma: 1, cay: true } }
]},

h3: { saat: "İki hafta sonra", baslik: "İkinci Dalga", metin: [
"İki hafta. Cengiz Bey görevine iade edildi; müfettişin raporu beklenmeden, kamuoyu baskısıyla. Bir televizyon programı ona “kahraman öğretmen” dedi. Bir bakan yardımcısı onu ziyaret etti; fotoğraf çekildi.",
"Gülsüm Hanım'ın hesabı kapandı. Önce özür diledi; sonra özrü yetmedi; sonra hesabını kapattı. Berk okula gelmiyor.",
"Arda da gelmiyor. Okul bir disiplin soruşturması başlattı: “Okul içinde tehlikeli madde ile saldırı girişimi.” Soruşturma Arda'yı okuldan uzaklaştırmayı öneriyor. Bir başka okula nakil.",
"Rehber öğretmen sana söylüyor: Arda evden çıkmıyor. Bir psikiyatriste gidiyor. İlaç kullanıyor.",
"Bir öğleden sonra Cengiz Bey odana geliyor. İlk kez okulda yüz yüzesiniz.",
"“Teşekkür ederim,” diyor. Sesi kısık. “Biliyorum ki istemediğim bir şeyi yaptın. Ve biliyorum ki o yaptığın şey beni kurtardı.”",
"Bir süre susuyor. “Ama Arda'yı ziyarete gittim dün. Kapıyı açmadı. Annesi açtı. ‘Oğlum sizi görmek istemiyor,’ dedi. ‘Siz kurtuldunuz. O yandı.’”",
"Cengiz Bey pencereye bakıyor. “Otuz yıl. İlk kez bir öğrencimi kurtaramadım. Ve bunu benim kurtuluşum yaptı.”"
], secenekler: [
{ t: "“Bunu ben yaptım hocam. Siz değil,” dersin.", to: "t1", etki: { hakikat: 1, ben_yaptim: true } },
{ t: "“Arda'yı birlikte ziyaret edelim,” dersin.", to: "t1", etki: { koruma: 2, birlikte_ziyaret: true } },
{ t: "“Disiplin soruşturmasında Arda'yı savunacağım,” dersin.", to: "t1", etki: { koruma: 2, savunma: true } },
{ t: "Bir şey söylemezsin. Pencereden birlikte bakarsınız.", to: "t1", etki: { koruma: 1 } }
]},

/* ---------- RESMÎ KOL ---------- */
r1: { saat: "Pazartesi", baslik: "Müfettiş", metin: [
"Pazartesi sabahı müfettiş Ahmet Bey okulda. Altmışlarında, gözlüklü, ağır. Bir kütüphane odasında masası, önünde dosyalar.",
"İçeri giriyorsun. Telefonunu masaya koyuyorsun. Kırk saniye.",
"Ahmet Bey izliyor. Bir kez. Bir kez daha. Üçüncü kez yavaşlatarak. Yüzünde hiçbir şey kıpırdamıyor. Sonra bir kâğıda bir şey yazıyor.",
"“Bu videonun bir kopyasını alacağım,” diyor. “Resmî kayıt. Sizden yazılı bir ifade de alacağım. Ve bir şey söyleyeyim: bu videoyu başka hiç kimseyle paylaşmayın. Soruşturma bitene kadar. Bu sizin yasal yükümlülüğünüz.”",
"“Ne kadar sürecek?”",
"“Otuz gün. Yönetmelik.”",
"“Hocam, otuz gün içinde Cengiz Bey'in hayatı bitecek. İnternette her gün...”",
"Ahmet Bey gözlüğünü çıkarıyor. “Hanımefendi,” diyor, “ben internete bakmıyorum. Ben dosyaya bakıyorum. İnternet bir mahkeme değil. Bu bir soruşturma. Hakikat yavaş gelir. Hızlı gelen hakikat değil, öfkedir.”"
], secenekler: [
{ t: "“Ama öfke şu an bir insanı öldürüyor,” dersin.", to: "r2", etki: { hakikat: 1, itiraz: true } },
{ t: "Kabul edersin. Bekleyeceksin.", to: "r2", etki: { koruma: 1, bekle: true } },
{ t: "Ahmet Bey'den hiç değilse bir ara açıklama yapılmasını istersin.", to: "r2", etki: { hakikat: 1, ara_aciklama: true } },
{ t: "İfadene Arda'nın iki yıllık zorbalığını da eklersin.", to: "r2", etki: { hakikat: 1, koruma: 1, zorbalik_ifade: true } }
]},

r2: { saat: "İki hafta sonra", baslik: "Otuz Gün", metin: [
P(S("r1A"), "Ahmet Bey seni dinledi. “Biliyorum,” dedi. “Ama ben öfkeyi durduramam. Benim elimde yalnızca bir dosya var.” Bir an duraksadı. “Kırk yıldır.”"),
P(S("r1C"), "Ahmet Bey düşündü. Bir hafta sonra ilçe milli eğitimden kısa bir açıklama yayımlandı: “Olayla ilgili soruşturma sürmekte olup, görüntülerin bağlamından koparılmış olabileceğine dair bulgular incelenmektedir.” İki yüz kişi okudu. Video o gün yedi milyon izlenmedeydi."),
"İki hafta. Bekliyorsun.",
"Cengiz Bey evinden çıkmıyor. Bir televizyon programı Göztepe'deki apartmanın önüne bir muhabir göndermiş; komşular kamerada konuşmuş: “Hep sert bir adamdı.” “Bizimle selamlaşmazdı.” Bir kadın: “Ben ona hep güvenirdim, ama bilmiyorum artık.”",
"Ayten Hanım seni arıyor. “İrem Hanım. Siz bir şey biliyorsunuz. Kocam söylemiyor ama ben biliyorum. Bir şey biliyorsunuz. Söyleyin. Lütfen. Kocam geceleri uyumuyor. Dün gece balkonda buldum onu; saat üçte, korkuluğa yaslanmış, aşağı bakıyordu.”",
"Bir sessizlik. Telefonda Ayten Hanım'ın nefesi.",
"“Yasal yükümlülüğünüz var biliyorum. Müfettiş söylemiştir. Ama kocam otuz gün bekleyemez.”"
], secenekler: [
{ t: "Ayten Hanım'a videoyu gösterirsin; yalnızca ona.", to: "r3", etki: { hakikat: 1, koruma: 1, aytene: true } },
{ t: "Müfettişe gidip Cengiz Bey'in durumunu anlatırsın; acil.", to: "r3", etki: { hakikat: 1, acil: true } },
{ t: "Bir psikiyatrist arkadaşını arayıp Göztepe'ye göndermesini istersin.", to: "r3", etki: { koruma: 2, psikiyatrist: true } },
{ t: "Yükümlülüğünü çiğneyip videoyu paylaşırsın. Artık.", to: "h1", etki: { hakikat: 2, kol: "hakikat", gec_paylasim: true } }
]},

r3: { saat: "Bir ay sonra", baslik: "Rapor", metin: [
P(S("r2A"), "Ayten Hanım'a gösterdin. Kendi evinde, mutfakta, telefonunda. Ayten Hanım izledi; sonra telefonu bırakıp ağladı. “Biliyordum,” dedi. “O hiç kimseye el kaldırmazdı. Biliyordum.” Bu bilgi, bir mutfakta, iki kadının arasında kaldı. Ama bir şey değişti; Ayten Hanım o gece kocasının yanında uyudu."),
P(S("r2C"), "Psikiyatrist arkadaşın Göztepe'ye gitti. Cengiz Bey önce kapıyı açmadı. Sonra açtı. İki saat konuştular. Bir reçete, bir randevu. “Durumu ciddi,” dedi arkadaşın sonra. “Ama artık biri onu izliyor.”"),
"Otuz birinci gün rapor çıkıyor. Ahmet Bey'in kırk iki sayfalık raporu.",
"“İncelenen görüntülerde, öğretmen Cengiz Y.'nin, bir öğrencinin tehlikeli bir madde ile bir başka öğrenciye zarar vermesini engellemek amacıyla müdahale ettiği tespit edilmiştir. Darp unsuru bulunmamaktadır. Öğretmen hakkında idari işlem yapılmasına yer olmadığına...”",
"Ve devamı: “Öğrenci Berk K.'nın uzun süreli akran zorbalığı uyguladığına dair kanıtlar...” “Öğrenci Arda T.'nin rehberlik servisine yönlendirilmesine...” “Velinin sosyal medya paylaşımları hakkında...”",
"Kırk iki sayfa. Adalet. Doğru, eksiksiz, dikkatli.",
"Rapor ilçe milli eğitimin internet sitesinde yayımlanıyor. Bir pdf. On dört kişi indiriyor.",
"Aynı gün video sekiz milyon izlenmede. Cengiz Bey'in adı arama motorunda hâlâ “öğretmen darp” ile çıkıyor. Rapor bir sayfa aşağıda; ikinci sayfada, kimsenin tıklamadığı yerde."
], secenekler: [
{ t: "Raporu kendi hesabından paylaşırsın. Artık yasal.", to: "t1", etki: { hakikat: 1, rapor_paylas: true } },
{ t: "Raporu Cengiz Bey'e götürürsün; basılı, elden.", to: "t1", etki: { koruma: 1, rapor_elden: true } },
{ t: "Bir gazeteciye ulaşıp raporun haberini yapmasını istersin.", to: "t1", etki: { hakikat: 2, gazeteci: true } },
{ t: "Bir şey yapmazsın. Adalet yerini buldu; yavaş da olsa.", to: "t1", etki: { koruma: 1, kalabalik: 1 } }
]},

/* ---------- SESSİZ KOL ---------- */
s1: { saat: "Bir hafta", baslik: "Sessizlik", metin: [
"Bir şey yapmıyorsun. Telefonun cebinde; kırk saniye, dokunulmamış.",
"Bir hafta. Video on milyon. Cengiz Bey'in arabası ikinci kez. Bir televizyon programı, Göztepe. Bir milletvekili, bir soru önergesi. Bir başka okulda bir başka öğretmen, bir başka video; ama Cengiz Bey'in adı bir örnek olarak anılıyor: “Tıpkı Kadıköy'deki gibi.”",
"Öğretmenler odasında herkes susuyor. Bazıları Cengiz Bey'i savunuyor; alçak sesle, odanın içinde. Kimse dışarıda bir şey demiyor. Herkesin bir kadrosu, bir sözleşmesi, bir müdürü var.",
"Arda okula geliyor. Kimse bir şey bilmiyor; ya da biliyor ama söylemiyor. Arda koridorda sana bakıyor; bir minnetle. Ya da bir başka şeyle.",
"Berk okula geliyor. Basketbol antrenmanında. Gülüyor. Annesi hâlâ canlı yayın yapıyor; “Bir anne olarak çocuklarımızı korumalıyız.”",
"Her akşam eve dönünce telefonunu çıkarıp videoya bakıyorsun. Kırk saniye. Ve her akşam kapatıyorsun.",
"Bir sessizliğin bedeli sessiz ödenir. Senin değil; başkasının."
], secenekler: [
{ t: "Videoyu bir buluta yedeklersin. Bir gün.", to: "s2", etki: { hakikat: 1, yedek: true } },
{ t: "Videoyu silersin. Sözünü tutmak için.", to: "s2", etki: { koruma: 2, sildi: true } },
{ t: "Cengiz Bey'e her gün bir mesaj atarsın: “Buradayım.”", to: "s2", etki: { koruma: 1, mesaj: true } },
{ t: "Berk'i antrenmanda izlersin. Uzun uzun.", to: "s2", etki: { hakikat: 1, berki_izledi: true } }
]},

s2: { saat: "İkinci hafta", baslik: "Ece", metin: [
P(S("s1B"), "Videoyu sildin. Bir tıklama. “Son silinenler” klasöründen de. Kırk saniye yok artık; yalnızca senin hafızanda. Hafıza bir kanıt değildir."),
"İkinci haftanın pazartesisi Ece seni bekliyor. On bir-C'den bir başka öğrenci; Arda'nın tek arkadaşı. Elinde telefonu.",
"“Hocam,” diyor, “bende bir video var. O gün. Laboratuvarın öbür köşesinden. Elli saniye. Her şey var. Berk'in ‘At’ demesi de, Arda'nın beheri kaldırması da.”",
"Sesini alçaltıyor. “Ben bunu paylaşacağım. Bu akşam. Cengiz Hoca'ya yapılan haksızlık. Ama Arda'ya sormadım. Arda bilmiyor. Size soruyorum. Ne yapmalıyım?”",
"On altı yaşında bir kız. Bir videosu var; senin videonla aynı. Ve bir kararı var; senin vermediğin karar.",
"Senin susman, birinin konuşmasını engellemedi. Yalnızca konuşmanın kimin ağzından, nasıl, ne zaman olacağını sana bırakmadı.",
"Ece sana bakıyor. Bir öğrencinin bir öğretmene baktığı gibi; bir cevap bekleyerek."
], secenekler: [
{ t: "“Paylaşma Ece. Arda'yı yakarsın,” dersin.", to: "s3", etki: { koruma: 2, ece_durdur: true } },
{ t: "“Önce Arda'yla konuş. O karar versin,” dersin.", to: "s3", etki: { koruma: 1, hakikat: 1, arda_karar: true } },
{ t: "“Paylaş. Ama Arda'nın yüzünü sakla,” dersin.", to: "s3", etki: { hakikat: 1, ece_paylas: true } },
{ t: "Ece'nin videosunu alır, müfettişe götürürsün.", to: "r1", etki: { hakikat: 1, kol: "resmi", ece_mufettis: true } }
]},

s3: { saat: "Bir ay sonra", baslik: "Boş Laboratuvar", metin: [
P(S("s2A"), "Ece paylaşmadı. Gözlerinde bir hayal kırıklığı; ama paylaşmadı. Bir ay sonra Ece'yle koridorda karşılaştın. Seni selamlamadı."),
P(S("s2B"), "Ece Arda'yla konuştu. Arda hayır dedi. Ece paylaşmadı. Ama bir şey oldu: Arda ilk kez, iki yıl sonra, birine Berk'i anlattı. Ece'ye. Bir arkadaşa."),
P(S("s2C"), "Ece paylaştı. Arda'nın yüzü bulanık. Bir gecede rüzgâr döndü. Ama ertesi sabah biri bulanıklığı kaldırdı ve Arda'nın adı trend oldu. Senin değil, Ece'nin kararıydı. Ve senin “Paylaş” demen."),
"Bir ay sonra Cengiz Bey istifa ediyor. Müfettişin raporu çıkmış; aklanmış. Ama kimse okumamış. O okula dönemiyor; her koridorda bir telefon, her sınıfta bir fısıltı.",
"Son günü bir cuma. Laboratuvarı topluyor. Otuz yıllık beherler, tüpler, bir periyodik tablo posteri; köşeleri sararmış.",
"Sen kapıdasın. Bir ay önce bu kapıda bir telefon tutuyordun.",
"Cengiz Bey seni görüyor. Bir şey söylemiyor. Bir beheri alıp ışığa tutuyor; boş, temiz.",
"“Otuz yıl,” diyor. “Bir beheri nasıl tutacaklarını öğrettim çocuklara. Eğik değil, düz. İki elle. Asla yüze doğru değil.” Beheri kutuya koyuyor. “Sekiz saniye.”",
"Sonra sana dönüyor. “Sözünü tuttun,” diyor. “Teşekkür ederim. Ve keşke tutmasaydın.”"
], secenekler: [
{ t: "“Ben de keşke,” dersin.", to: "t1", etki: { hakikat: 1, keske: true } },
{ t: "Kutuyu taşımasına yardım edersin.", to: "t1", etki: { koruma: 1 } },
{ t: "“Arda iyileşiyor hocam,” dersin. “Sizin sayenizde.”", to: "t1", etki: { koruma: 1, arda_iyi: true } },
{ t: "Bir şey söyleyemezsin.", to: "t1", etki: { kalabalik: 1 } }
]},

/* ---------- KARŞI LİNÇ KOLU ---------- */
b1: { saat: "Cuma gecesi", baslik: "Ekran Görüntüleri", metin: [
P(function(d){ return !d.ekran; }, "Arda'ya mesaj atıp ekran görüntülerini istiyorsun. Bir saat sonra cevap: yirmi üç görüntü. Altında tek bir kelime: “Neden?” Cevap vermiyorsun."),
"Yirmi üç ekran görüntüsü. İki yıl. Berk'in mesajları; Arda'nın şiirleriyle alay, ailesiyle alay, “ibne”, “psikopat”, “kendini öldür”. Ve o pazartesi sabahı: “Bugün laboratuvarda bir şey yapacağız ona. Kaydedin.”",
"Hepsinde Berk'in adı, profil fotoğrafı. Arda'nınkini kapatıyorsun; yalnızca Berk.",
"Kendi hesabından paylaşıyorsun. Altına bir metin: “Viral olan videodaki ‘mağdur’ öğrencinin annesi Gülsüm K. Bu da oğlu Berk'in iki yıl boyunca sınıf arkadaşına yaptıkları. O gün laboratuvarda olan şey, bunun sonucuydu. Kim kimi korumalı?”",
"Paylaş.",
"Bir saat: beş yüz paylaşım. Gece yarısı: on bin. Sabah: Gülsüm Hanım'ın hesabının altında elli bin yorum.",
"Rüzgâr dönüyor; ama başka bir yöne. Cengiz Bey'e değil; Berk'e. “Bu çocuk bir canavar.” “Annesi de suç ortağı.” “Bu velet hapse girmeli.” Berk'in fotoğrafı; basketbol forması, gülüyor. Altında: “Okul numarasını bulan var mı?”",
"Sabah yedide biri Berk'in okul numarasını, ev adresini, babasının iş yerini paylaşmış."
], secenekler: [
{ t: "Paylaşımı hemen kaldırırsın.", to: "b2", etki: { koruma: 1, kaldirdi: true } },
{ t: "Bir ek yazarsın: “Lütfen çocuklara saldırmayın. Bir çocuk.”", to: "b2", etki: { koruma: 1, ek: true } },
{ t: "Bekleyip izlersin. Gülsüm Hanım bunu hak etti.", to: "b2", etki: { kalabalik: 2, izledin: true } },
{ t: "Kırk saniyelik videoyu da eklersin. Artık bütün gerçek ortada olsun.", to: "b2", etki: { hakikat: 2, video_ekle: true } }
]},

b2: { saat: "Cumartesi", baslik: "Berk", metin: [
P(S("b1A"), "Kaldırdın. Ama yirmi üç görüntü artık yüz bin telefonda. Bir kalabalık bir kez yön değiştirince, onu ateşleyen kişi onu durduramaz."),
P(S("b1C"), "İzledin. Gülsüm Hanım'ın hesabı bir saatte otuz bin takipçi kaybetti. Bir marka iş birliğini iptal etti. Yorumlar: “Anneliği bıraksın.” Bir an, bir an sadece, bir şey hissettin; bir tatmin. Sonra o tatminin ne olduğunu düşündün."),
"Cumartesi öğleden sonra, okulun boş bahçesinde, bir bankta birini görüyorsun. Berk.",
"Basketbol forması değil; bir eşofman. Kapüşonu başında. Telefonu elinde. Seni görünce kalkıp gitmek istiyor; sonra oturuyor.",
"Yanına oturuyorsun. Uzun süre bir şey söylemiyorsunuz.",
"“Hocam,” diyor sonunda. Sesi kırık; on altı yaşında bir çocuğun sesi. “Siz mi koydunuz onları?”",
"Evet, diyorsun.",
"Berk telefonunu gösteriyor. Mesajlar. Bin. “Öl.” “Kendini as.” “Annen orospu.” “Seni okulun önünde bekleyeceğiz.”",
"“Ben kötü bir şey yaptım,” diyor Berk. “Biliyorum. Arda'ya. İki yıl. Biliyorum. Ama...” Ağlamaya başlıyor. “Babam beni döver hocam. Her gün değil. Ama döver. Annemin hesabı onun hesabı aslında; parayı o kazanıyor. Bu sabah... bu sabah çok kötüydü.”",
"Kapüşonunu indiriyor. Elmacık kemiğinin üstünde bir morluk."
], secenekler: [
{ t: "Berk'i rehber öğretmene, sonra gerekirse polise götürürsün.", to: "b3", etki: { koruma: 2, berk_koru: true } },
{ t: "“Arda'ya yaptıklarını bu haklı çıkarmaz,” dersin.", to: "b3", etki: { hakikat: 1 } },
{ t: "Berk'e sarılırsın.", to: "b3", etki: { koruma: 1, sarildi: true } },
{ t: "Kalkıp gidersin. Bunu taşıyamazsın.", to: "b3", etki: { kalabalik: 1, gitti_b: true } }
]},

b3: { saat: "Bir hafta sonra", baslik: "Döngü", metin: [
P(S("b2A"), "Rehber öğretmen Berk'i dinledi; sonra bir doktor, sonra bir sosyal hizmet uzmanı. Babası hakkında bir soruşturma açıldı. Berk anneannesinin yanına gönderildi; Bursa'ya. Gitmeden önce sana bir mesaj attı: “Teşekkür ederim. Ve Arda'dan özür dileyeceğim. Bir gün. Ondan önce kendimden.”"),
P(S("b2C"), "Berk'e sarıldın. Önce kaskatıydı; sonra bir şey çözüldü. Bir çocuk, bir çocuk gibi ağladı. Sen orada, bir okul bahçesinde, iki yıl bir başka çocuğa işkence etmiş bir çocuğu kucaklıyordun. Bunu kimseye anlatmadın."),
"Bir hafta. Rüzgâr üç kez döndü.",
"Önce Cengiz Bey'e. Sonra Berk'e ve annesine. Sonra, bir gazetecinin “Bir öğretmen bir öğrenciyi ifşa etti” haberiyle, sana. Bir televizyon programı “Öğretmenin çocuk ifşası etik mi?” diye bir tartışma yaptı. Bir milletvekili bir soru önergesi verdi; bu kez senin hakkında.",
"Milli eğitim senin hakkında bir soruşturma açtı: “Öğrenci kişisel verilerinin izinsiz paylaşımı.” Sözleşmen askıya alındı.",
"Cengiz Bey aklandı; ama kimse bunu konuşmadı. Arda'nın adı bir yerde geçmedi; ama okulda herkes biliyordu. Berk Bursa'da. Gülsüm Hanım'ın hesabı kapandı.",
"Ve sen, bir kalabalığı bir yönden öbürüne çevirmeye çalışırken, kalabalığın kendisinin hiçbir yöne bağlı olmadığını öğrendin. Bir hedef ister. Hedefin kim olduğu, ona bir sonraki gün kimin gösterdiğine bağlıdır.",
"Telefonunda bir mesaj, bilinmeyen bir numaradan: “Sen de şimdi bizim gibisin.” Kimden geldiğini bilmiyorsun."
], secenekler: [
{ t: "Soruşturmada her şeyi kabul edersin.", to: "t1", etki: { hakikat: 2, kabul: true } },
{ t: "Kendini savunursun: “Bir çocuğu korumaya çalıştım.”", to: "t1", etki: { koruma: 1, savun: true } },
{ t: "Mesaja cevap yazarsın: “Evet.”", to: "t1", etki: { hakikat: 1, evet: true } },
{ t: "Telefonunu kapatıp bir hafta açmazsın.", to: "t1", etki: { kalabalik: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Bir ay sonra", baslik: "Öğretmenler Odası", metin: [
"Bir ay sonra öğretmenler odası. Pazartesi sabahı. Çay ocağının önünde kuyruk; herkes telefonuna bakıyor, ama artık bu videoya değil. Yeni bir video var; bir başka şehir, bir başka okul, bir başka öğretmen.",
"Kalabalığın hafızası bir aydır. Bir ay sonra Cengiz Bey bir isim, Gülsüm Hanım bir isim, Arda bir isim; bir aydır kimse aramıyor. Ama arama motoru unutmuyor.",
P(function(d){ return d.kol === "hakikat"; }, "Öğretmenler odasında sana farklı bakıyorlar. Bazıları bir kahraman gibi; bir video paylaştın, bir öğretmeni kurtardın. Bazıları başka türlü: bir öğrenciyi ifşa ettin. Serkan Bey yanına gelip alçak sesle: “Ben olsam yapamazdım. Doğru mu yaptın, bilmiyorum. Ama yaptın.”"),
P(function(d){ return d.kol === "resmi"; }, "Öğretmenler odasında kimse bir şey bilmiyor; bir rapor çıktı, kimse okumadı. Serkan Bey yanına geliyor: “Cengiz Hoca aklanmış diyorlar. Doğru mu?” Doğru. “Nereden çıktı bu?” Bir dosyadan. “Kim verdi dosyayı?” Bir şey söylemiyorsun."),
P(function(d){ return d.kol === "sessiz"; }, "Öğretmenler odasında Cengiz Bey'in masası boş. Birisi masanın üstüne bir çiçek koymuş; kurumuş. Kimse kaldırmıyor. Kimse de bir şey demiyor."),
P(function(d){ return d.kol === "karsi"; }, "Öğretmenler odasına girmiyorsun. Sözleşmen askıda. Ama bir arkadaşın sana bir fotoğraf gönderiyor: öğretmenler odasının panosu. Birisi oraya bir kâğıt asmış: “Çocukları sosyal medyada ifşa etmeyin.” Altında imza yok."),
"Nermin Hanım seni odasına çağırıyor.",
"“İrem,” diyor, “bu dönem kadrolu öğretmen kontenjanı açıldı. Senin adın da listede. Ama bir şey soracağım. O günden beri bu okulda bir şey değişti mi sence?”",
"Bir süre düşünüyorsun. Laboratuvarın kapısı. Bir sınıf grubu. Bir beher."
], secenekler: [
{ t: "“Hiçbir şey değişmedi hocam,” dersin.", to: "t1b", etki: { hakikat: 1, degismedi: true } },
{ t: "“Ben değiştim,” dersin.", to: "t1b", etki: { koruma: 1 } },
{ t: "Okulda akran zorbalığına karşı bir program önerirsin.", to: "t1b", etki: { koruma: 2, program: true } },
{ t: "“Kadroyu hak edip etmediğimi bilmiyorum,” dersin.", to: "t1b", etki: { hakikat: 1 } }
]},

t1b: { saat: "Bir ay sonra", baslik: "Gülsüm", metin: [
P(S("t1C"), "Nermin Hanım programını dinledi. “Bunun için bütçe yok,” dedi. Sonra: “Ama yap. Benim adımı koy. Bir şey yapmamız lazım.” Ertesi hafta on bir-C'de ilk oturum. Arda yoktu. Ama Ece vardı."),
"Bir akşam Kadıköy'de bir kafede biri karşına oturuyor. Kırklarında, güneş gözlüklü, sade giyimli. Gözlüğünü çıkarıyor. Gülsüm Hanım.",
"Seni tanıyor. “Konuşabilir miyiz?” diyor. Sesi bir ekrandaki sesten çok farklı; kısık, yorgun.",
"“O videoyu paylaştığımda,” diyor, “oğlumu koruduğumu sanıyordum. Berk o akşam eve geldi ve ‘Cengiz Hoca bana bağırdı’ dedi. Bir şey anlatmadı. Ben de sordum mu? Sormadım. Bir video vardı; bir öğretmen bir çocuğa bağırıyordu. Ben bir anneydim. Üç yüz bin takipçim vardı. Paylaştım.”",
"Bir süre susuyor. “Bir gecede iki milyon. Ve bu, garip bir şey; bir an iyi hissettim. Haklı olmak. Bir şeyin parçası olmak. İki milyon insan benimle aynı şeyi düşünüyordu.”",
"“Sonra,” diyor, “rüzgâr döndü. Ve aynı iki milyon, bu kez beni yaktı. Ve ben anladım ki o iki milyon kimse değildi. Ne benim yanımdaydılar, ne Cengiz Hoca'nın. Yalnızca bir ateşin yanındaydılar.”",
P(function(d){ return d.kol === "karsi"; }, "Sonra sana bakıyor. “Siz de bir ateş yaktınız. Benim oğluma. Şimdi ikimiz aynı masadayız.”")
], secenekler: [
{ t: "Ona Berk'in iyi olup olmadığını sorarsın.", to: "t2", etki: { koruma: 1, berk_sordu: true } },
{ t: "“Siz Cengiz Hoca'dan özür dilediniz mi?” diye sorarsın.", to: "t2", etki: { hakikat: 1, ozur_sordu: true } },
{ t: "Bir şey söylemez, dinlersin.", to: "t2", etki: { koruma: 1 } },
{ t: "Kalkıp gidersin.", to: "t2", etki: { kalabalik: 1, kalkti: true } }
]},

t2: { saat: "Bahar dönemi", baslik: "Ders", metin: [
"Bahar dönemi. Yeni bir dönem, yeni bir ünite. Müfredatta “Roman” ünitesi; bir kitap seçmen gerekiyor, on birlere okutmak için.",
"Listede klasikler: Tutunamayanlar, Kürk Mantolu Madonna, Suç ve Ceza. Ve bir tane daha, listede olmayan ama aklına gelen: Kafka'nın “Dava”sı. Josef K., bir sabah, neyle suçlandığını bilmeden tutuklanıyor. Bir yargılama ki hiçbir zaman ne olduğu söylenmiyor.",
"Ya da bir başka şey: bir ders. Bir kitap değil; bir mektup. Sınıfa, kendi ağzından, o pazartesiyi anlatmak.",
"Sınıfta otuz iki öğrenci. Hepsi o videoyu izledi. Hepsi o etiketi gördü. Belki bazıları paylaştı. Belki bazıları yorum yazdı. Belki bazıları o sınıf grubundaydı.",
P(function(d){ return d.kol !== "karsi"; }, "Arda arka sırada. Bir ay sonra geri döndü; başka bir sınıfa, ama senin dersine."),
P(function(d){ return d.kol === "karsi"; }, "Sözleşmen geri verildi; bir uyarıyla. Bu senin ilk dersin. Arda arka sırada."),
"Ne öğreteceksin bu çocuklara?"
], secenekler: [
{ t: "“Dava”yı okutursun. Josef K.'yi.", to: "y_dava", etki: { hakikat: 1, dava: true } },
{ t: "Sınıfa bir mektup okursun; kendi yazdığın, o pazartesi hakkında.", to: "y_mektup", etki: { hakikat: 1, koruma: 1, mektup: true } },
{ t: "Listeden bir klasik seçersin. Bu bir edebiyat dersi; bir mahkeme değil.", to: "t3", etki: { koruma: 1, klasik: true } },
{ t: "Öğrencilere sorarsın: “Ne okumak istersiniz?”", to: "t3", etki: { koruma: 1, sordu_ogr: true } }
]},

y_dava: { saat: "Bahar", baslik: "Josef K.", metin: [
"“Birisi Josef K.'ye iftira etmiş olmalıydı, çünkü hiçbir kötülük yapmadığı hâlde bir sabah tutuklandı.”",
"İlk cümleyi tahtaya yazıyorsun. Sınıf sessiz.",
"Bir hafta okuyorsunuz. Josef K.'nin mahkemesi; tavan arasında, hiç görmediği yargıçlar, hiç öğrenemediği bir suç. Herkes onun suçlu olduğunu biliyor; kimse neyle suçlandığını bilmiyor.",
"Bir öğrenci el kaldırıyor; Ece. “Hocam, Josef K. hiçbir zaman neyle suçlandığını öğrenmiyor, değil mi?”",
"Evet.",
"“O zaman nasıl savunuyor kendini?”",
"Savunamıyor.",
"Bir başka öğrenci: “Ama hocam, bu sadece bir kitap. Gerçek hayatta mahkemeler var. Deliller var.”",
"Ece ona dönüyor. “Sekiz saniye,” diyor. “Hatırlıyor musun? Mahkeme yoktu. Delil yoktu. Herkes biliyordu ama kimse neyi bildiğini bilmiyordu.”",
"Sınıf susuyor. Arka sırada Arda başını kaldırıyor.",
"Bir kitap, yüz yıl önce Prag'da yazılmış, bir sınıfın içinde, Kadıköy'de, bir aynaya dönüşüyor."
], secenekler: [
{ t: "Ece'ye teşekkür edip konuyu kitapta tutarsın.", to: "t3", etki: { koruma: 1 } },
{ t: "Sınıfa soruyu açarsın: “Siz o sekiz saniyeyi gördüğünüzde ne düşündünüz?”", to: "t3", etki: { hakikat: 2, sinif_soru: true } },
{ t: "Arda'ya bakarsın; konuşmak isteyip istemediğini.", to: "t3", etki: { koruma: 1, ardaya_bakti: true } },
{ t: "Kitabın son cümlesini okursun: “Bir köpek gibi!”", to: "t3", etki: { hakikat: 1 } }
]},

y_mektup: { saat: "Bahar", baslik: "Mektup", metin: [
"Bir kâğıt çıkarıyorsun. Üç gece yazdın; on kez sildin.",
"“Sevgili on birler. Bu bir edebiyat dersi değil. Ya da belki tam olarak bir edebiyat dersi; çünkü edebiyat, bir hikâyenin önünü ve arkasını görmeyi öğretir.”",
"Okuyorsun. O pazartesiyi. Kapıyı, telefonu, kırk saniyeyi. Sonra salıyı; sekiz saniyeyi. Yorumları. Kendi ne yaptığını.",
P(function(d){ return d.kol === "hakikat"; }, "“Videoyu paylaştım. Bir öğretmeni kurtardım. Ve bir öğrenciyi yaktım. İkisini birden yaptım ve hangisinin daha ağır olduğunu hâlâ bilmiyorum.”"),
P(function(d){ return d.kol === "sessiz"; }, "“Sustum. Bir öğrenciyi korudum. Ve bir öğretmeni kaybettik. Susmak, bir şey yapmamak değil; bir şeyin olmasına izin vermek.”"),
P(function(d){ return d.kol === "resmi"; }, "“Doğru yoldan gittim. Bir dosya, bir müfettiş, otuz gün. Adalet geldi; kimse fark etmedi. Doğru yoldan gitmek, bazen, hiçbir yere gitmemek.”"),
P(function(d){ return d.kol === "karsi"; }, "“Bir öğrencinin acısını göstermek için bir başka öğrenciyi ifşa ettim. Bir ateşi söndürmek için bir başka ateş yaktım. Ve öğrendim ki ateş kimseye ait değil.”"),
"“Size bir şey söyleyeceğim: bir gün telefonunuzda bir video olacak. Sekiz saniye ya da kırk. Ve bir karar vereceksiniz. Paylaşmak, susmak, beğenmek, yorum yazmak. Bu kararı vermeden önce bir şey sorun kendinize: bu hikâyenin önünde ne var? Ve arkasında kim kalacak?”",
"Kâğıdı katlıyorsun. Sınıf sessiz. Sonra arka sıradan bir ses. Arda."
], secenekler: [
{ t: "Arda'ya söz verirsin.", to: "t3", etki: { koruma: 1, arda_soz: true } },
{ t: "Mektubu panoya asarsın.", to: "t3", etki: { hakikat: 1, pano: true } },
{ t: "Mektubu Cengiz Bey'e gönderirsin.", to: "t3", etki: { hakikat: 1, cengize_mektup: true } },
{ t: "Mektubu yırtarsın. Söylendi; yeter.", to: "t3", etki: { koruma: 1 } }
]},

t3: { saat: "Haziran", baslik: "Cengiz Bey", metin: [
P(S("y_mektupA"), "Arda bir şey söyledi; kısa, alçak: “Ben de bir mektup yazacağım. Berk'e.” Sınıf ona döndü. Arda başını eğmedi."),
"Haziran. Okul kapanmış. Bir sabah bir mesaj; Cengiz Bey'den. “Moda'da bir çay bahçesi. Saat on.”",
"Moda sahili. Bir çay bahçesi; denize bakan. Cengiz Bey bir masada; yalnız. Zayıflamış. Ama yüzünde bir şey var; birkaç ay öncesinde olmayan.",
P(function(d){ return d.kol === "sessiz"; }, "Emekli oldu; erken, primini doldurmadan, maaşından kesinti yaparak. “Bir okulda daha çalışamazdım,” diyor. “Her koridorda bir telefon.”"),
P(function(d){ return d.kol !== "sessiz"; }, "Okula döndü; ama başka bir okula. Üsküdar'da bir meslek lisesi. “Orada kimse beni tanımıyor,” diyor. “Ya da tanıyor ama umursamıyor. Meslek lisesi çocukları bir öğretmenin sekiz saniyesiyle ilgilenmez; kendi sekiz saniyeleri var.”"),
"Çay geliyor. Bir süre denize bakıyorsunuz.",
"“Arda bana bir mektup yazdı,” diyor Cengiz Bey. Çantasından bir kâğıt çıkarıyor; bir defter sayfası, el yazısı. Okumak için uzatmıyor; tutuyor.",
"“İçinde bir şiir var. Ben fizikçiyim; şiir anlamam. Ama bir dizesi var ki...” Duraksıyor. Sonra okuyor: “Bir el kolumu tuttu ve ben ilk kez düşmediğimi anladım.”",
"Kâğıdı katlayıp çantasına koyuyor. Gözleri yaşlı.",
"“Otuz yıl,” diyor. “Bir öğrenci, otuz yılda ilk kez, bana bir şiir yazdı. Sekiz saniye yüzünden.”"
], secenekler: [
{ t: "“Sekiz saniye değil hocam. Kırk saniye,” dersin.", to: "t4", etki: { hakikat: 1 } },
{ t: "Bir şey söylemez, çayını içersin.", to: "t4", etki: { koruma: 1 } },
{ t: "Ona özür dilersin; ne yaptıysan ya da yapmadıysan.", to: "t4", etki: { koruma: 1, cengiz_ozur: true } },
{ t: "“Arda'yla görüşmek ister misiniz?” diye sorarsın.", to: "t4", etki: { koruma: 1, gorus: true } }
]},

t4: { saat: "Eylül", baslik: "Arda'nın Defteri", metin: [
"Eylül. Yeni bir dönem. İlk gün sınıfa girdiğinde masanın üstünde bir defter var. Mavi kapaklı, köşeleri yıpranmış. Üstünde bir not: “İrem Hocam'a. Arda.”",
"Defteri açıyorsun. Şiirler. İki yıllık. Bazıları sınıf grubunda alay edilmiş olanlar; bazıları yeni.",
"Son sayfada bir şiir. Başlığı: “Sekiz Saniye.”",
"“Bir şehir bir çocuğu bir gecede tanıdı.\nAdını bilmeden, yüzünü bilmeden.\nBir öğretmeni bir gecede tanıdı;\notuz yılını bilmeden.\nBir kalabalık bir beheri gördü,\nbeheri tutan eli görmedi.\nBen o elim.\nBen o beherim.\nBen o kalabalığım da.\nHepimiz bir pazartesi sabahı\naynı laboratuvardaydık.”",
"Altında, Arda'nın el yazısıyla küçük bir not: “Bunu sınıfta okuyabilirsiniz. Benim adımla. Artık saklanmak istemiyorum.”",
"Otuz iki öğrenci. Bir defter. Bir şiir. Ve bir karar daha."
], secenekler: [
{ t: "Şiiri sınıfta Arda'nın adıyla okursun.", to: "ls", etki: { hakikat: 1, okudu_siir: true } },
{ t: "Şiiri sınıfta okursun; adsız. Arda'yı korumak için, bir kez daha.", to: "ls", etki: { koruma: 1, adsiz: true } },
{ t: "Şiiri Arda'nın kendisinin okumasını istersin.", to: "ls", etki: { koruma: 1, hakikat: 1, arda_okudu: true } },
{ t: "Defteri kapatırsın. Şimdilik. Bir şiirin de bir zamanı var.", to: "ls", etki: { koruma: 1 } }
]},

ls: { yonlendir: [
{ if: function(d){ return d.kol === "karsi"; }, to: "son_hedef" },
{ if: function(d){ return d.kol === "hakikat"; }, to: "son_kirk" },
{ if: function(d){ return d.kol === "resmi"; }, to: "son_dosya" },
{ if: function(d){ return d.kol === "sessiz" && d.koruma >= d.hakikat; }, to: "son_sekiz" },
{ to: "son_ogretmen" }
]},

/* ---------- SONLAR ---------- */
son_kirk: { son: true, baslik: "Kırk Saniye", metin: [
"Kırk saniyeyi gösterdin. Gerçek ortaya çıktı. Bir öğretmen aklandı; bir kalabalık özür diledi, bir hafta. Bir başka çocuğun adı trend oldu, bir hafta.",
"Hakikat bir şeyi kurtarır ve bir şeyi yakar. Bunu biliyordun. Yine de yaptın. Pişman mısın? Bazı geceler evet. Bazı sabahlar hayır.",
P(function(d){ return d.arda_okudu || d.okudu_siir; }, "Arda'nın şiiri sınıfta okundu; onun adıyla. Sınıf sessizdi. Sonra biri alkışladı; Ece. Sonra herkes. Arda kızardı. Bir çocuk, bir kalabalığın önünde, bu kez yanmadı; ısındı."),
"Bir şey öğrendin: hakikat bir kalabalığı durdurmaz. Yalnızca yönünü değiştirir. Kalabalık, gerçeği öğrendiğinde bile bir hedef arar; ve hedefi bir sonraki gerçek belirler. Bir öğretmeni kurtarırken bir çocuğu hedef yaptın; çünkü kalabalığın bir hedefe ihtiyacı vardı ve gerçek, ona yeni bir hedef verdi.",
"Belki hakikatin işi kalabalığı yatıştırmak değil. Belki hakikatin işi yalnızca orada olmak; bir gün, bir kişinin, bir kalabalığın içinden çıkıp ona bakabilmesi için.",
"Telefonunda hâlâ o kırk saniye var. Bir gün bir öğrencin sana soracak: “Hocam, siz o videoyu neden paylaştınız?” Ve sen, bu soruya her yıl farklı bir cevap vereceksin."
]},

son_dosya: { son: true, baslik: "Dosya", metin: [
"Doğru yoldan gittin. Bir müfettiş, bir ifade, bir dosya, kırk iki sayfa. Hakikat geldi; yavaş, eksiksiz, dikkatli. Kimse fark etmedi.",
"Cengiz Bey aklandı; kâğıt üstünde. Arama motorunda adı hâlâ “öğretmen darp” ile çıkıyor. Ve bir rapor, bir pdf, ikinci sayfada, kimsenin tıklamadığı yerde.",
P(function(d){ return d.gazeteci; }, "Bir gazeteci raporun haberini yaptı. “Viral videodaki öğretmen aklandı.” Haber on bin kez okundu. Video sekiz milyon kez izlenmişti. Hakikat, bir öfkenin binde biri kadar yol aldı."),
"Arda korundu; adı hiçbir yerde geçmedi. Bu senin kararının armağanı. Ve Cengiz Bey otuz gün boyunca bir balkonda, saat üçte, korkuluğa yaslandı. Bu da senin kararının bedeli.",
"Bir kurumun yavaşlığı, bir kalabalığın hızının karşısında ne işe yarar? Belki işe yaramaz. Belki yalnızca, bir gün, kalabalık dağıldığında, geride doğru bir kayıt bırakır.",
"Ahmet Bey'in sözü aklında: “Hakikat yavaş gelir. Hızlı gelen hakikat değil, öfkedir.” Haklıydı. Ama yavaş gelen hakikatin bir sorunu var: geldiğinde, onu bekleyen kimse kalmamış olabilir.",
"Bir gün o pdf'i yeniden açıyorsun. Kırk iki sayfa. On dördüncü sayfada bir dipnot: “Öğretmen İrem K.'nın sunduğu görüntüler belirleyici olmuştur.” Senin adın. Bir dipnotta. Kimsenin okumadığı yerde. Bu sana yetiyor mu?"
]},

son_sekiz: { son: true, baslik: "Sekiz Saniye", metin: [
"Sustun. Sözünü tuttun. Arda'nın adı hiçbir yerde geçmedi. Bu bir armağan; bir çocuğa, bir hayata.",
"Cengiz Bey istifa etti. Otuz yıl, sekiz saniyeye indi. Bir rapor onu akladı; kimse okumadı. Bir laboratuvar, bir kutu dolusu beher, bir periyodik tablo posteri.",
"Sessizlik bir eylemsizlik değil. Bir seçim. Sen Arda'yı seçtin. Ve bunu yaparken, Cengiz Bey'i kalabalığa bıraktın. Bunu kendisi istedi; “Sil onu,” dedi. Ama bir insanın kendini feda etmesine izin vermek, onu feda etmek değil mi?",
P(function(d){ return d.ece_paylas; }, "Ve sustuğun sırada başka biri konuştu; Ece. Senin “Paylaş” demenle. Senin sessizliğin bir başkasının ağzından konuştu ve bir çocuğu yaktı. Sessizlik bile, bazen, bir başkasına devredilmiş bir söz."),
"Arda iyileşiyor. Bir psikiyatrist, ilaçlar, bir arkadaş: Ece. Bir şiir defteri. Bir gün sana gelip dedi ki: “Hocam, siz susmasaydınız ben bugün burada olmazdım.” Ve sen, bunun doğru olduğunu biliyorsun. Ve bunun bir öğretmenin, bir başka öğretmenin hayatı pahasına olduğunu da.",
"Bazen Moda'da bir çay bahçesinin önünden geçiyorsun. Cengiz Bey orada oturuyor; her sabah, emekli. Bazen el sallıyor. Bazen sallamıyor. Bir sekiz saniye, bir kırk saniye, ve aranızdaki otuz iki saniyelik bir sessizlik."
]},

son_hedef: { son: true, baslik: "Yeni Hedef", metin: [
"Bir kalabalığı bir yönden öbürüne çevirdin. Bir öğretmeni korumak için, bir zorbayı ifşa etmek için. Ve kalabalık, senin gösterdiğin yöne döndü; ve oradaki çocuğu yaktı.",
"Berk on altı yaşında. İki yıl bir çocuğa işkence etti. Ve bir babadan dayak yiyordu. İkisi birden. Bir kalabalık bir çocuğun yalnızca bir yüzünü görür; senin gösterdiğin yüzü.",
P(function(d){ return d.berk_koru; }, "Berk Bursa'da, anneannesinin yanında. Babası hakkında bir dava açıldı. Bir gün sana bir mektup gönderdi; el yazısı, kâğıda: “Hocam, siz beni ifşa ettiniz. Ve sonra beni kurtardınız. İkisini birden yaptınız. Ben de Arda'ya iki şeyi birden yaptım: ona işkence ettim ve onu bir gün o laboratuvara götürdüm ki bir şey olsun. Belki bir şey olmasını istiyordum. Belki birinin beni durdurmasını.”"),
"Sen bir öğretmensin. Bir öğretmen bir kalabalığın parçası olmamalıydı. Ama bir gece, bir telefon, yirmi üç ekran görüntüsü; ve bir kalabalığı yönlendirdin. Bunu yaparken bir an, bir an sadece, haklı olmanın tadını aldın. Gülsüm Hanım'ın aldığı tadı.",
"Gülsüm Hanım'la bir kafede oturdunuz. İki kadın, iki ateş. Bir yerde Gülsüm Hanım dedi ki: “Biz aynı şeyi yaptık. Siz doğru tarafta durduğunuzu sanıyordunuz. Ben de.”",
"Bilinmeyen numaradan gelen mesajı silmedin. “Sen de şimdi bizim gibisin.” Bazen açıp okuyorsun. Kimin yazdığını hiç öğrenmedin. Belki bir yabancı. Belki bir öğrenci. Belki, bir yerde, kalabalığın kendisi."
]},

son_ogretmen: { son: true, baslik: "Öğretmen", metin: [
"Bir kalabalığı durduramadın. Kimse durduramaz. Ama bir sınıfı durdurdun; otuz iki öğrenciyi, bir saatliğine, bir mektupla ya da bir kitapla ya da bir şiirle.",
"Bu yeter mi? Hayır. Cengiz Bey'in otuz yılı sekiz saniyeye indi; Arda'nın adı bir yerde, bir şekilde yandı; Berk'in yüzü bir yerde, bir şekilde. Bir öğretmen bunları geri getiremez.",
"Ama bir öğretmen bir şey yapabilir: bir sonraki pazartesiyi değiştirebilir. Bir sonraki laboratuvarı, bir sonraki videoyu, bir sonraki kalabalığı. Otuz iki öğrenci, bir gün, bir telefonun başında, bir karar verecek. Belki biri, senin dersini hatırlayacak.",
P(function(d){ return d.program; }, "Akran zorbalığı programın ikinci yılında. On bir-C'de bir grup; Arda ve Ece kurdu. Adı: “Önü ve Arkası.” Bir video paylaşılmadan önce, birinin sorması için: bu hikâyenin önünde ne var?"),
"Kadroya geçtin. Ya da geçmedin; fark etmiyor. Bir öğretmen bir kadroyla değil, bir sınıfla öğretmendir.",
"Telefonunda hâlâ o kırk saniye; ya da yok. Arda'nın defteri masanda. “Ben o elim. Ben o beherim. Ben o kalabalığım da.” Her dönem başında bu şiiri okuyorsun; Arda'nın izniyle, onun adıyla.",
"Ve her dönem bir öğrenci el kaldırıp soruyor: “Hocam, o gün siz neredeydiniz?” Ve sen her seferinde aynı cevabı veriyorsun: “Kapıdaydım.” Ve her seferinde, bu cevabın içinde, bir sorunun daha olduğunu biliyorsun: kapıda durmak, içeri girmek değildir."
]}

},

ayna: function(d){
  var out = [];
  var h = d.hakikat, k = d.koruma, c = d.kalabalik;
  if(h >= k && h >= c) out.push("Bu hikâyede en çok hakikate yaslandın: bir videoya, bir dosyaya, bir mektuba. Hakikat bir kalabalığı durdurmaz; ama bir kalabalığın içinde durabilmenin tek yoludur.");
  else if(k >= c) out.push("Bu hikâyede en çok korumaya yaslandın: bir öğrenciyi, bir sözü, bir sırrı. Korumak bir öğretmenin ilk işi. Ama birini korumak, çoğu zaman, bir başkasını açıkta bırakmaktır.");
  else out.push("Bu hikâyede, bazı anlarda, kalabalığın yanında durdun: bir beğeni, bir sessizlik, bir öfkenin tatmini. Kalabalık kötü insanlardan oluşmaz; bir ateşin yanında duran sıradan insanlardan oluşur.");
  if(d.begendi) out.push("Bir yorumu beğendin; bir saniyeliğine. İki milyonun içinde bir sayı oldun.");
  if(d.kol === "karsi") out.push("Bir ateşi söndürmek için bir başka ateş yaktın.");
  if(d.sildi) out.push("Videoyu sildin. Bir sözü tuttun; bir hakikati kaybettin.");
  if(d.ardaya_soz) out.push("Bir öğrenciye söz verdin. Bir sözün, bir başkasının hayatına mal olabileceğini öğrendin.");
  return out;
},

dipnot: [
{ ad: "Kitle psikolojisi", t: "Gustave Le Bon 1895'te kalabalıkların bireylerden farklı davrandığını, sorumluluk duygusunun dağıldığını ve duyguların hızla yayıldığını yazdı. Sosyal medya, bu kalabalığı fiziksel bir meydandan çıkarıp milyonlarca ekrana taşıdı. Jon Ronson “Herkesin Önünde Utandırılmak” kitabında, internetteki toplu linçlerin hedefleri nasıl seçtiğini ve neredeyse her zaman yanlış ölçüde cezalandırdığını anlatır." },
{ ad: "Hakikat sonrası", t: "“Post-truth”, nesnel gerçeklerin kamuoyunu şekillendirmede duygulardan ve kişisel inançlardan daha az etkili olduğu durumları tanımlar. Sekiz saniyelik bir video, kırk iki sayfalık bir rapordan daha hızlı yayılır; çünkü bir rapor düşünmeyi, bir video ise hissetmeyi ister." },
{ ad: "Utanç ve itibar", t: "Antropolog Ruth Benedict, bazı toplumların “suçluluk kültürü”, bazılarının “utanç kültürü” olduğunu öne sürdü. Sosyal medya, bir tür küresel utanç kültürü yarattı: suçun kendisinden çok, görünür kılınması ve kalabalığın tepkisi ceza oldu. Ve bu ceza, mahkemelerin aksine, hiçbir zaman bitmez; bir arama motoru unutmaz." },
{ ad: "Sessiz tanık", t: "Bir haksızlığa tanık olan ama müdahale etmeyen kişi, sosyal psikolojide “seyirci” olarak incelenir (Darley ve Latané). Ama bu hikâyede sessizlik de bir müdahaleydi: bir çocuğu korumak için bir yetişkini feda etmek. Bazen tanığın sorusu “Konuşmalı mıyım?” değil, “Kimin için konuşmalıyım?” olur." }
]
});
})();
