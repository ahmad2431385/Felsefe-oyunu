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
"Kadıköy'de bir Anadolu lisesi. Pazartesi, dördüncü ders. Koridor boş. Teneffüse beş dakika var. Kalorifer peteğinin üstünde birinin unuttuğu bir eşofman üstü kuruyor.",
"Adın İrem, otuz dört yaşındasın, edebiyat öğretmenisin. Sözleşmelisin. Üç yıldır kadroyu bekliyorsun. Kolunda on birlerin kompozisyonları: “Hayatımı değiştiren bir an.” Yarısı aynı internet sitesinden.",
"Kimya laboratuvarının önünden geçerken bir bağırış, bir cam sesi. Kapı aralık.",
"İçeride on bir-C. Masaların arasında iki çocuk. Arda. Senin öğrencin, gözlüklü, defterinin arkasına şiir yazan. Elinde bir beher. Deney için hazırlanmış asit çözeltisi. Karşısında Berk. Uzun boylu, basketbolcu, gülüyor. “Hadi, at bakalım. Atamazsın.”",
"Telefonunu çıkarıyorsun. Kayıt. Neden, bilmiyorsun.",
"Arda'nın eli titriyor. Beher yükseliyor.",
"Kimya öğretmeni Cengiz Bey. Elli iki yaşında, sert, otuz yıllık, öğrencilerin arkasından “Kimyager Dede” dediği. İki adımda Arda'nın yanında. Kolunu yakalıyor. “Bırak onu! Bırak dedim!” Beher Arda'nın elinden kayıp masaya düşüyor, devrilmiyor.",
"Kırk saniye. Telefonu indiriyorsun. Arda ağlıyor. Berk gülüyor. Sesi titriyor. Cengiz Bey bir sandalyeye çöküyor. Ellerini dizlerine bastırıyor, titremesin diye.",
"Zil çalıyor.",
"Arda kapıya yürüyor, yüzü bembeyaz. Arka sırada bir öğrenci telefonunu hızla cebine sokuyor. Koridor birazdan dolacak."
], secenekler: [
{ t: "Arda'nın peşinden gidersin. Cengiz Bey'i o sandalyede bırakarak.", to: "a2", etki: { koruma: 1, girdi: true } },
{ t: "Cengiz Bey'in yanına gidersin. Arda koridora tek başına çıkarken.", to: "a2", etki: { hakikat: 1, cengize: true } },
{ t: "Arka sıradaki öğrenciden kaydını silmesini istersin. Kendi kaydını silmeden.", to: "a2", etki: { kalabalik: 1, silmesini_istedi: true } },
{ t: "Müdüre haber vermek için koşarsın. Odadaki üç kişiyi kendi hâline bırakarak.", to: "a2", etki: { kalabalik: 1, gitti: true } }
]},

a2: { saat: "Salı", baslik: "Sekiz Saniye", metin: [
P(S("a1C"), "Çocuğun adı Batu'ydu. “Sildim hocam,” dedi, galerisini gösterdi. Boştu. Salı sabahı anlayacaktın: kayıt çoktan bir buluta, oradan bir gruba gitmişti."),
P(S("a1D"), "Şükran Hanım toplantıdaydı. Kırk dakika kapıda bekledin. “Laboratuvarda bir olay oldu.” “Cengiz Bey halleder,” dedi, dosyalarına dönerek. Kaydı göstermedin. Sormadı."),
P(S("a1A"), "Arda'nın yanına gittin. Bir şey demedi. Sana baktı, sonra koşarak merdivenlerden indi. Berk arkasından bir şey bağırdı."),
P(S("a1B"), "Cengiz Bey başını kaldırdı. “İyiyim,” dedi. “Kimseye bir şey söyleme.” Neyi kastettiğini sormadın."),
"Salı sabahı telefonunda yüz on yedi bildirim.",
"Bir video. Sekiz saniye. Masanın arkasından, alçak açıdan. Yalnızca Cengiz Bey, Arda'nın kolunu sertçe yakalıyor: “Bırak dedim!” Beher görünmüyor. Berk görünmüyor.",
"Altında: “Kadıköy'de öğretmen öğrenciyi darp etti! Çocuklarımız güvende mi?”",
"Gece yarısı bir öğrenci hesabından paylaşılmış. Sabah altıda üç yüz bin takipçili bir annelik hesabı paylaşmış. Hesabın sahibi Gülsüm Hanım: Berk'in annesi.",
"İki milyon izlenme. #CengizHocaKovulsun. Okulun adı, Cengiz Bey'in tam adı, eski bir öğretmenler günü fotoğrafı. Elinde bir karanfil.",
"Yorumlar: “Bu adam hapse girmeli.” “Benim çocuğuma dokunsa elini kırardım.” “Adresini bulan var mı?”",
"Senin telefonunda kırk saniye. Beher, Berk, “At bakalım.” Kimse senin kapıda olduğunu bilmiyor. Ya da sen öyle sanıyorsun."
], secenekler: [
{ t: "Yorumları okursun. Hepsini.", to: "x_yorum", etki: { kalabalik: 1 } },
{ t: "Cengiz Bey'i ararsın.", to: "x_cengiz", etki: { hakikat: 1, aradi: true } },
{ t: "Telefonu kapatıp okula gidersin. Otuz iki çocuk o videoyu izlemiş olarak seni bekliyor.", to: "a3", etki: { koruma: 1, kapatti: true } },
{ t: "Kendi videonu yeniden izlersin. Kırk saniye de bir şeyi göstermiyor olabilir.", to: "a3", etki: { hakikat: 1, izledi: true } }
]},

x_yorum: { saat: "Salı", baslik: "Yorumlar", metin: [
"Okuyorsun. Bin, iki bin, beş bin. Kahve soğuyor. Üstünde bir zar oluşuyor.",
"“Benim de öğretmenimdi, hep sertti.” “Bu okulda okudum, bize dokunmadı ama korkardık.” “Ülkenin hâli bu.”",
"Biri Cengiz Bey'in kızının hesabını bulmuş: “Babana söyle, utansın.” Kızın son fotoğrafı bir mezuniyet töreninden.",
"Biri bir sokak adı yazmış: Göztepe.",
"Kimse “Önce ne oldu?” diye sormuyor.",
"Çoğu bir anne, bir baba, bir eski öğrenci. Bir çocuğu korumak istiyorlar. Yanlış çocuğu.",
"Bir yorumun altında senin okulundan bir öğretmen, adı tanıdık: “Bu adamla ilgili daha önce de şikâyetler oldu.” Olmadı. Biliyorsun."
], secenekler: [
{ t: "O öğretmene özelden yazıp yalan söylediğini söylersin.", to: "a3", etki: { hakikat: 1, ogretmene: true } },
{ t: "Bir yoruma cevap yazarsın: “Videonun öncesini bilmiyorsunuz.”", to: "a3", etki: { hakikat: 1, yorum_yazdi: true } },
{ t: "Telefonu bırakırsın. Daha fazla okuyamazsın.", to: "a3", etki: { koruma: 1 } },
{ t: "Başparmağın bir yorumun üstünde kalır. Beğeni düğmesine dokunursun.", to: "a3", etki: { kalabalik: 2, begendi: true } }
]},

x_cengiz: { saat: "Salı", baslik: "Cengiz Bey", metin: [
"Uzun çalıyor. Sonra yorgun bir ses. “Efendim.”",
"“Cengiz Hocam, İrem. Edebiyattan.”",
"“Biliyorum. Ne istiyorsun?”",
"“Ben o gün kapıdaydım. Kaydettim. Kırk saniye. Beheri, Berk'i.”",
"Arkada bir televizyon. Bir kadın sesi bir şey soruyor; Cengiz Bey ahizeyi kapatıp “Okuldan,” diyor.",
"“Sil onu.”",
"“Hocam?”",
"“Sil. Emekliliğime üç yıl var. Bu sekiz saniye beni bitirebilir. Bitirsin. O çocuk on altı yaşında. O videoyu gösterirsen bütün ülke onu asit atmaya kalkan çocuk diye tanır. Ben bir ay sonra unutulurum. O unutulmaz.”",
"Sesi kırılıyor, öksürerek düzeltiyor. “Önce öğrenci.”"
], secenekler: [
{ t: "“Siz de insansınız hocam. Sizi kim koruyacak?” dersin.", to: "a3", etki: { hakikat: 1, sizi_kim: true } },
{ t: "“Tamam hocam. Kimseye göstermem,” dersin.", to: "a3", etki: { koruma: 2, cengize_soz: true } },
{ t: "“Silemem hocam. Ama şimdilik göstermem,” dersin.", to: "a3", etki: { koruma: 1, hakikat: 1 } },
{ t: "“Eşiniz ne diyor?” diye sorarsın.", to: "a3", etki: { koruma: 1, esi: true } }
]},

a3: { saat: "Salı, öğleden sonra", baslik: "Müdür", metin: [
P(S("a2C"), "On bir-C'ye girdiğinde otuz iki baş aynı anda kalktı, aynı anda eğildi. Tahtaya yazarken arkanda bir fısıltı: “Hoca da oradaymış.” Dönmedin. Tebeşir kırıldı."),
P(S("a2D"), "Kare kare izledin. Bir şey gördün: beheri tutan el, Cengiz Bey yakalamadan bir saniye önce inmeye başlamıştı. Arda vazgeçiyor muydu? Yoksa sen mi öyle görmek istiyordun?"),
P(S("x_yorumA"), "Yazdın. Üç dakika sonra cevap: “Sen kimin tarafındasın?” Sonra engelledi. Ertesi sabah öğretmenler odasında yanından geçerken başını çevirmedi."),
P(S("x_yorumB"), "On dakikada iki yüz cevap. “Öğretmen yalakası.” “Bu da o okuldan, bulun.” Yorumunu sildin. Ekran görüntüsü alınmıştı bile."),
P(S("x_yorumC"), "Telefonu bıraktın. Son gördüğün yorum aklında kaldı: “Adresini bulan var mı?”"),
P(S("x_cengizB"), "“Kimseye göstermem.” Kapattıktan sonra fark ettin: sözün öbür ucunda yanan bir adam vardı."),
P(S("x_cengizC"), "“Şimdilik,” dedi Cengiz Bey. Bir süre sustu. “İyi bir kelime. Hiç bitmez.”"),
P(S("x_yorumD"), "“Bu öğretmenler hep böyle.” Beğeniyi hemen geri aldın. Bir saniye boyunca sen de iki milyonun içinde bir sayıydın."),
P(S("x_cengizA"), "“Öğretmeni kimse korumaz İrem. Ne veli, ne müdür, ne bakanlık. Sen de koruma. Ama o çocuğu da yakma.”"),
P(S("x_cengizD"), "“Eşim ağlıyor. Kızımın hesabına mesajlar geliyor. Ona hiçbir şey anlatmadım.”"),
"Öğleden sonra müdür Şükran Hanım bütün öğretmenleri topluyor. Herkes telefonunda.",
"“Arkadaşlar. İlçeden müfettiş gelecek. Cengiz Bey tedbiren görevden uzaklaştırıldı. Basına, sosyal medyaya hiçbir şey söylemeyin. Velilere açıklama yapmayın.” Telefonu masada titreyip duruyor. Ters çeviriyor.",
"Matematikten Serkan Bey el kaldırıyor. “O gün ne olduğunu bilen var mı?”",
"Şükran Hanım duraksıyor. “Öğrenciler farklı şeyler söylüyor.” Sonra sana bakıyor. Ya da sen öyle hissediyorsun.",
"Kadro listesi ay sonunda açıklanacak."
], secenekler: [
{ t: "El kaldırıp “Ben gördüm. Bir videom var,” dersin.", to: "a4", etki: { hakikat: 2, mudure_soyledi: true } },
{ t: "Toplantıdan sonra Şükran Hanım'a özelden söylersin.", to: "a4", etki: { hakikat: 1, ozel: true } },
{ t: "Bir şey söylemezsin. Sözleşmelisin. Kadro listesi bu ay.", to: "a4", etki: { kalabalik: 1, sozlesme: true } },
{ t: "Serkan Bey'e “Önce Arda'yla konuşmak lazım,” dersin. Bir şey bildiğini ele vererek. Ama tamamını değil.", to: "a4", etki: { koruma: 1 } }
]},

a4: { saat: "Çarşamba", baslik: "Arda", metin: [
P(S("a3C"), "Bir şey söylemedin. Kapıda Şükran Hanım kolunu tuttu. “Senin o gün laboratuvarın önünde olduğunu söyleyen bir öğrenci var. Bir şey bilseydin söylerdin, değil mi?” Başını oynattın. Evet de değil, hayır da."),
P(S("a3D"), "Oda sana döndü. “Arda kim?” dedi biri. İsim o odada ilk kez senin ağzından çıktı. Şükran Hanım not aldı."),
P(S("a3A"), "Oda sustu. Şükran Hanım'ın yüzü bembeyaz oldu. “Toplantıdan sonra odama gel.” Arka sıradan bir fısıltı: “Sözleşmeli değil miydi?”"),
P(S("a3B"), "Şükran Hanım videoyu iki kez izledi, telefonu geri verdi. “Kimseye gösterme. Müfettişe ben söylerim. Bu çıkarsa okul biter. Bir öğrenci asit atmaya kalktı, bir öğretmen engelledi, biri çarpıtıp yaydı, bir veli oğlunun zorbalığını gizlemek için öğretmeni yaktı. Hangi kısmı okulu kurtarır?”"),
"Çarşamba, son ders bitince sınıfta yalnızsın. Kapı açılıyor. Arda.",
"Gözlükleri buğulu. Kapıyı kapatıyor.",
"“Hocam. Kapıdaydınız. Telefonunuzu da gördüm.”",
"“Lütfen göstermeyin. Herkes asit atmaya kalktığımı öğrenir. Okuldan atılırım. Belki polis. Bir de neden kalktığımı öğrenirler. Berk'in yaptıklarını. İki yıldır. Annem bilmiyor.”",
"Ağlıyor. “Cengiz Hoca beni kurtardı. Şimdi onu ben yaktım. Bir şey diyemiyorum. Dersem ben yanarım.”",
"Koridordan bir velinin sesi. Telefonda, yüksek, Cengiz Bey'in adını söylüyor."
], secenekler: [
{ t: "“Göstermeyeceğim,” dersin. Cengiz Bey'in adı her saat biraz daha yanarken.", to: "a5", etki: { koruma: 2, ardaya_soz: true } },
{ t: "“Berk sana ne yaptı?” diye sorarsın.", to: "x_arda", etki: { hakikat: 1, koruma: 1 } },
{ t: "“Gerçek bir gün çıkacak Arda. Benden ya da başkasından,” dersin. Söz vermeyi reddederek.", to: "a5", etki: { hakikat: 2 } },
{ t: "Onu rehber öğretmene götürürsün.", to: "x_rehber", etki: { koruma: 1, rehber: true } }
]},

x_arda: { saat: "Çarşamba", baslik: "İki Yıl", metin: [
"Arda telefonunu çıkarıyor. Sınıfın bir grubu; Arda'sız. Biri ekran görüntülerini ona göndermiş.",
"İki yıl. Gizlice çekilmiş, değiştirilmiş fotoğraflar. Edebiyat defterinden çalınmış şiirler, grupta okunmuş. Bir şiirin altında Berk: “Bu ibne şiir mi yazıyor.”",
"Babasının işsizliği hakkında şakalar. Ve o pazartesi sabahından bir mesaj: “Bugün laboratuvarda bir şey yapacağız ona. Kaydedin.”",
"Bu senin sınıfın. Bu çocuklara her hafta Nazım, Cemal Süreya, Edip Cansever okuttun.",
"“Berk beheri bana gösterdi. ‘At,’ dedi. ‘Korkaksın.’ Bir an gerçekten atmak istedim. Bir an. Sonra Cengiz Hoca.”",
"“O bir an'ı kimse bilmemeli. Bilirlerse ben de Berk gibi olurum.”"
], secenekler: [
{ t: "Ekran görüntülerini Arda'dan istersin. Bir gün lazım olabilir.", to: "a5", etki: { hakikat: 1, ekran: true } },
{ t: "“O bir an seni Berk gibi yapmaz,” dersin.", to: "a5", etki: { koruma: 2 } },
{ t: "Arda'dan kendi şiirlerinden birini okumasını istersin.", to: "a5", etki: { koruma: 1, siir: true } },
{ t: "Berk'in ailesiyle konuşmaya karar verirsin.", to: "a5", etki: { hakikat: 1, berk_aile: true } }
]},

x_rehber: { saat: "Çarşamba", baslik: "Rehber", metin: [
"Rehber öğretmen Tülay Hanım. Odasında bir kanepe, bir kaktüs, bir kutu mendil.",
"Arda içeri giriyor. Sen kapıdasın. Tülay Hanım çay koyuyor. Arda bir saat konuşmuyor.",
"Sonra her şeyi anlatıyor. İki yıl. Grup. Şiirler. Beher. O bir an.",
"Tülay Hanım çıkınca alçak sesle: “Bu çocuk risk altında. Kendine zarar verme düşünceleri var. Ailesini aramam gerek. Bir de müdüre rapor etmek zorundayım. Akran zorbalığı, bir saldırı girişimi. Rapor müfettişe gider.”",
"Arda kapıda; duymuş.",
"“Hocam. Söz vermiştiniz.”",
"Söz vermedin. Ama bir şey verdin."
], secenekler: [
{ t: "Tülay Hanım'dan raporu bir hafta bekletmesini istersin.", to: "a5", etki: { koruma: 1, beklet: true } },
{ t: "Arda'ya “Bu seni korumak için,” dersin.", to: "a5", etki: { hakikat: 1, koruma: 1 } },
{ t: "Arda'nın ailesini kendin aramayı teklif edersin.", to: "a5", etki: { koruma: 1, aile_ara: true } },
{ t: "Bir şey demeden Arda'nın yanına oturursun.", to: "a5", etki: { koruma: 1 } }
]},

a5: { saat: "Perşembe akşamı", baslik: "Göztepe", metin: [
P(S("a4A"), "Söz vermiştin. Gece telefonu üç kez açıp videoya baktın, üç kez kapattın."),
P(S("a4C"), "Arda uzun uzun baktı. “O zaman başkasından çıksın,” dedi, çıktı. Kapıyı kapatmadı."),
P(S("x_ardaA"), "Yirmi üç ekran görüntüsü geldi. Sonra: “Kimseye göstermeyin. Söz?” Cevap yazmadın. Yazmadığını o da gördü. İki mavi tik."),
P(S("x_ardaB"), "Arda gözlüğünü çıkarıp sildi. “Siz öyle diyorsunuz. İnternet öyle demez.”"),
P(S("x_ardaC"), "Arda bir şiir okudu. Laboratuvarın penceresinden görünen bir ıhlamur üzerine. Son dize: “Ağaç bilmez kimin baktığını.” Bitirince kısa, utangaç güldü."),
P(S("x_ardaD"), "Gülsüm Hanım'ın hesabını açtın: üç yüz bin takipçi, dün akşam bir canlı yayın, “Bir anne olarak.” Kapısını çalmak bir yangına yürümek gibiydi."),
P(S("x_rehberA"), "“Bir hafta,” dedi Tülay Hanım. “Sonra benim de elim kolum bağlı.” Arda koridorda sana baktı."),
P(S("x_rehberB"), "Arda sana öyle baktı ki cümlenin boşluğunu duydun. “Herkes beni korur ve ben yanarım.”"),
P(S("x_rehberC"), "Annesi Hacer Hanım açtı. “Arda iyi mi?” İyi, dedin. Okula gelmesini istedin. Gerisini söylemedin."),
P(S("x_rehberD"), "Yanına oturdun. Tülay Hanım çıktı. Arda omzunu omzuna yasladı. Bir saniye. Sonra doğruldu."),
"Perşembe akşamı Göztepe. Eski bir apartman, üçüncü kat. Kapıda bir kâğıdın sökülmüş yapışkan izi. Biri “Çocuk döven” yazmış, sökmüşler.",
"Kapıyı eşi Perihan Hanım açıyor. Emekli hemşire. Gözleri kızarık.",
"Cengiz Bey salonda, kapalı televizyonun karşısında. Önünde soğumuş bir kahve. Üç günde yüzü çökmüş. Tıraş olmamış.",
"“Kızım üniversitede,” diyor Perihan Hanım. “Hesabını kapattı. Bir arkadaşı ‘Baban çocuk mu dövüyor?’ demiş.”",
"“Dün gece arabanın camını kırdılar. Polis tutanak tuttu, gitti. ‘Sosyal medya hassasiyeti,’ dedi.”",
P(function(d){ return d.aradi; }, "Cengiz Bey sana dönüyor. “Videoyu sildin mi?”"),
P(function(d){ return !d.aradi; }, "Cengiz Bey sana dönüyor. “O gün kapıdaydın. Kaydettin, değil mi?” Başını sallıyorsun. “Sil onu.”"),
P(function(d){ return d.cengize_soz; }, "“Silmedim hocam. Ama kimseye göstermedim.”"),
"Perihan Hanım kocasına, sonra sana bakıyor. “Hangi video?”",
"Cengiz Bey eşine hiç söylememiş."
], secenekler: [
{ t: "Perihan Hanım'a gerçeği söylersin. Videoyu.", to: "a6", etki: { hakikat: 2, ayten_bildi: true } },
{ t: "Cengiz Bey'e bakarsın. Karar onun. Ama susman da bir cevap.", to: "a6", etki: { koruma: 1 } },
{ t: "“Bir şey yok,” dersin. Bir kadının yüzüne bakarak, kocasının sırrı için.", to: "a6", etki: { koruma: 1, kalabalik: 1 } },
{ t: "Cengiz Bey'e: “Eşinize siz söyleyin hocam,” dersin.", to: "a6", etki: { hakikat: 1, kendisi_soylesin: true } }
]},

a6: { saat: "Cuma", baslik: "Seçim", metin: [
P(S("a5B"), "Cengiz Bey eşine baktı. “Bir video var Perihan,” dedi, yorgun. “Bir şey değişmez.” Kapıda Perihan Hanım “Teşekkür ederim kızım,” dedi. Neye, anlamadın."),
P(S("a5C"), "“Bir şey yok.” Perihan Hanım sana otuz yıl yalan söyleyen hastalara bakmış gözlerle baktı. “Peki.” Kapıda elini uzatmadı."),
P(S("a5A"), "Anlattın. Perihan Hanım kocasına döndü. “Üç gündür ‘bir şey yok’ diyorsun.” Cengiz Bey yere baktı. “O çocuk on altı yaşında.” Perihan Hanım uzun süre sustu. “Bizim kızımız da yirmi bir.”"),
P(S("a5D"), "Cengiz Bey eşine anlattı. Perihan Hanım dinledi, kalkıp mutfağa gitti, kapıyı kapattı. İçeriden musluk sesi geldi, uzun süre. Cengiz Bey: “Görüyorsun. Doğrusunu söylemek bir şeyi kolaylaştırmıyor.”"),
"Cuma. Beş milyon izlenme. Ana haber bülteninde otuz saniye. Bir milletvekili soru önergesi verdi. Gülsüm Hanım ağlayarak canlı yayın yaptı: “Bir anne olarak...”",
"Müfettiş pazartesi geliyor. Soruşturma otuz gün.",
"Cengiz Bey'in adını arama motoruna yazınca ilk sayfanın tamamı o sekiz saniye.",
"Telefonunda kırk saniye. Arda'nın sesi: “Lütfen göstermeyin.” Cengiz Bey'in sesi: “Sil onu.”",
P(S("a5A"), "Perihan Hanım'ın sesi: “Bizim kızımız da yirmi bir.”"),
P(function(d){ return d.ekran; }, "Bir de Arda'nın gönderdiği yirmi üç ekran görüntüsü. Berk'in. Gülsüm Hanım'ın oğlunun."),
P(function(d){ return !d.ekran; }, "Bir de sınıfın mesaj grubu. İki yılın kanıtı, bir öğrencinin telefonunda, bir mesaj uzağında."),
"Pazartesiye iki gün var."
], secenekler: [
{ t: "Kırk saniyelik videoyu kendi hesabından paylaşırsın. Cengiz Bey kurtulur; Arda'nın yüzü de görünür.", to: "h1", etki: { hakikat: 2, kol: "hakikat" } },
{ t: "Videoyu yalnızca müfettişe verirsin. Doğru yol bu. Ama otuz gün sürecek ve Cengiz Bey her gün biraz daha yanacak.", to: "r1", etki: { hakikat: 1, koruma: 1, kol: "resmi" } },
{ t: "Hiçbir şey yapmazsın. Arda'yı korursun. Bir öğretmenin yanışını seyrederek.", to: "s1", etki: { koruma: 2, kol: "sessiz" } },
{ t: "Videoyu değil, Berk'in iki yıllık mesajlarını paylaşırsın. Ateşi asıl suçluya çevirirsin. O da on altı yaşında.", to: "b1", etki: { kalabalik: 1, hakikat: 1, kol: "karsi" } }
]},

/* ---------- HAKİKAT KOLU ---------- */
h1: { saat: "Cuma gecesi", baslik: "Kırk Saniye", metin: [
P(S("a6A"), "Cuma gecesi saat on bir. Mutfak masasında, soğumuş bir ıhlamurun yanında."),
P(S("r2D"), "Otuz günü bekleyemedin. Perihan Hanım'ın telefonundan sonra müfettişi, kadroyu bir kenara koydun. Gece yarısı."),
"Kendi hesabın. Yedi yüz takipçi, çoğu eski öğrenci. Videoyu yüklüyorsun. Altına bir metin. Üç kez silip yeniden yazıyorsun.",
"“O okulda öğretmenim. O gün kapıdaydım. Videonun tamamı bu. Cengiz Hoca bir öğrenciyi darp etmedi. Bir öğrencinin bir başkasına zarar vermesini engelledi.”",
"Arda'nın yüzünü bulanıklaştırıyorsun. Berk'inkini de.",
"Paylaş.",
"Bir saat: yüz paylaşım. Gece yarısı bir haber sitesi. Sabah altıda bir milyon.",
"Aynı hesaplar, aynı öfke. Yön değiştirmiş. “Bu öğretmen kahraman!” “O veli kim? Gülsüm Hanım'ın oğlu değil mi?”",
"Sonra biri bulanıklığı bir yapay zekâ aracıyla kaldırmış. Sabah yedide Arda'nın yüzü, net: “İşte asit atmaya kalkan çocuk.” Adı, okul numarası.",
"Sabah sekizde Arda'nın adı trend."
], secenekler: [
{ t: "Videoyu hemen kaldırırsın.", to: "h2", etki: { koruma: 2, kaldirdi: true } },
{ t: "Bir açıklama yazarsın: Arda'nın neden o beheri tuttuğunu. İki yılı.", to: "h2", etki: { hakikat: 1, koruma: 1, aciklama: true } },
{ t: "Arda'yı ararsın.", to: "h2", etki: { koruma: 1, ardayi_aradi: true } },
{ t: "Arda'nın yüzünü açan hesapları platforma şikâyet edersin.", to: "h2", etki: { hakikat: 1, sikayet: true } }
]},

h2: { saat: "Cumartesi", baslik: "Arda'nın Annesi", metin: [
P(S("h1D"), "Yüz on iki hesabı şikâyet ettin. Otomatik cevap: “İncelemeye alındı.” Sabaha kadar yüz on iki yeni hesap açıldı."),
P(S("h1A"), "Kaldırdın. Yüz bin kişi indirmişti. Kaldırdığın şey yalnızca senin adındı."),
P(S("h1B"), "Açıklama yazdın; Arda'nın adını hiç kullanmadan. Ama herkes adını biliyordu artık. Açıklaman ikinci bir ifşa gibi okundu."),
P(S("h1C"), "Arda açmadı. On kez. Sonra bir mesaj: “Neden?”"),
"Cumartesi öğlen kapın çalınıyor. Kırklarında, başörtülü, gözleri şiş bir kadın. Arda'nın annesi Hacer Hanım. İçeri girmiyor.",
"“Videoyu siz mi koydunuz?”",
"Evet.",
"“Oğlum dün gece banyoya kapandı. Babası kapıyı kırdı. Bir şey yapmamıştı. Karanlıkta oturuyordu. Telefonunda bin mesaj. ‘Psikopat.’ ‘Öl.’ On altı yaşında.”",
"“İki yıl oğlumun okulda ne yaşadığını bilmedim. Dün gece bir ekrandan öğrendim. Bir milyon kişiyle birlikte.”",
"“Bir öğretmeni kurtardınız. Benim oğlumu kim kurtaracak?” Elindeki poşette Arda'nın ilaçları. Eczaneden dönüyormuş."
], secenekler: [
{ t: "Özür dilersin.", to: "h3", etki: { koruma: 1, ozur: true } },
{ t: "“Bir gün çıkacaktı Hacer Hanım,” dersin.", to: "h3", etki: { hakikat: 1 } },
{ t: "Ona Arda'nın iki yılını belgeleyen her şeyi verirsin. Hukuki yol için.", to: "h3", etki: { hakikat: 1, koruma: 1, belge: true } },
{ t: "Hacer Hanım'ı içeri alıp çay koyarsın.", to: "h3", etki: { koruma: 1, cay: true } }
]},

h3: { saat: "İki hafta sonra", baslik: "İkinci Dalga", metin: [
P(S("h2A"), "“Özrünüz oğlumun adını internetten silmiyor,” dedi Hacer Hanım. “Ama söylediğiniz için teşekkür ederim.”"),
P(S("h2B"), "“Çıkacaktı mı?” dedi Hacer Hanım. “Çıkması gereken şey, oğlumun iki yıl her gün eve gelip odasına kapandığıydı. Onu kimse paylaşmadı.”"),
P(S("h2C"), "Bütün belgeleri verdin. Hacer Hanım bir avukat buldu; Berk'in ailesine dava açıldı. Gülsüm Hanım bir canlı yayın daha yaptı."),
P(S("h2D"), "Hacer Hanım bardağı iki eliyle tuttu, bir saat konuşmadı. Sonra Arda'nın ilk şiirini anlattı. Bir kedi üzerine, yedi yaşında. Giderken: “Bunu kimseye anlatmamıştım.”"),
"İki hafta. Cengiz Bey kamuoyu baskısıyla göreve iade edildi. Bir program ona “kahraman öğretmen” dedi. Bir bakan yardımcısı ziyaret etti. Fotoğraf çekildi, Cengiz Bey fotoğrafta gülümsemiyor.",
"Gülsüm Hanım önce özür diledi, sonra hesabını kapattı. Berk okula gelmiyor.",
"Arda da gelmiyor. Okul bir disiplin soruşturması başlattı: “Tehlikeli madde ile saldırı girişimi.” Nakil öneriliyor.",
"Rehber öğretmen: Arda evden çıkmıyor, ilaç kullanıyor.",
"Bir öğleden sonra Cengiz Bey odana geliyor.",
"“Teşekkür ederim. İstemediğim bir şeyi yaptın. Beni kurtardı.”",
"“Dün Arda'ya gittim. Annesi açtı. ‘Siz kurtuldunuz, o yandı,’ dedi.”",
"Pencereye bakıyor. “Otuz yılda ilk kez bir öğrencimi kurtaramadım. Beni kurtaran şey yüzünden.”"
], secenekler: [
{ t: "“Bunu ben yaptım hocam. Siz değil,” dersin.", to: "t1", etki: { hakikat: 1, ben_yaptim: true } },
{ t: "“Arda'yı birlikte ziyaret edelim,” dersin.", to: "t1", etki: { koruma: 2, birlikte_ziyaret: true } },
{ t: "“Disiplin soruşturmasında Arda'yı savunacağım,” dersin.", to: "t1", etki: { koruma: 2, savunma: true } },
{ t: "Bir şey demezsin. Pencereden birlikte bakarsınız.", to: "t1", etki: { koruma: 1 } }
]},

/* ---------- RESMÎ KOL ---------- */
r1: { saat: "Pazartesi", baslik: "Müfettiş", metin: [
P(S("a6B"), "Pazartesi sabahı erkenden okuldasın. Kırk saniye bir belleğe kopyalanmış, cebinde."),
P(S("s2D"), "İpek'in videosunu aldın. “Arda bilmesin,” dedi İpek. Söz vermedin."),
"Müfettiş Ahmet Bey, altmışlarında, kütüphanede bir masa. Dosyaların yanında bir termos.",
"Telefonunu masaya koyuyorsun.",
"Ahmet Bey izliyor. Bir kez, bir daha, üçüncü kez yavaşlatarak. Bir kâğıda bir şey yazıyor.",
"“Bir kopyasını alacağım. Yazılı ifadenizi de. Soruşturma bitene kadar bu videoyu kimseyle paylaşmayın. Yasal yükümlülüğünüz.”",
"“Ne kadar sürecek?”",
"“Otuz gün. Yönetmelik.”",
"“Otuz günde Cengiz Bey'in hayatı bitecek.”",
"Ahmet Bey gözlüğünü çıkarıyor. “Hanımefendi, ben internete bakmıyorum. Dosyaya bakıyorum.” Termostan bir bardak çay koyuyor, sana da koyuyor."
], secenekler: [
{ t: "“Ama şu an bir insanı öldürüyor,” dersin.", to: "r2", etki: { hakikat: 1, itiraz: true } },
{ t: "Kabul edersin. Bekleyeceksin.", to: "r2", etki: { koruma: 1, bekle: true } },
{ t: "Hiç değilse bir ara açıklama yapılmasını istersin.", to: "r2", etki: { hakikat: 1, ara_aciklama: true } },
{ t: "İfadene Arda'nın iki yılını da eklersin.", to: "r2", etki: { hakikat: 1, koruma: 1, zorbalik_ifade: true } }
]},

r2: { saat: "İki hafta sonra", baslik: "Otuz Gün", metin: [
P(S("r1B"), "Bekleyecektin. Koridorda iki öğrenci aynı videoyu izliyordu."),
P(S("r1D"), "Tarihlerle, isimlerle ekledin. Ahmet Bey kaşlarını kaldırdı. “Bu dosyayı genişletir. Ve uzatır.”"),
P(S("r1A"), "“Biliyorum,” dedi Ahmet Bey. “Ama elimde yalnızca bir dosya var. Kırk yıldır.”"),
P(S("r1C"), "Bir hafta sonra ilçeden kısa bir açıklama: “Görüntülerin bağlamından koparılmış olabileceğine dair bulgular incelenmektedir.” İki yüz kişi okudu. Video yedi milyondaydı."),
"İki hafta.",
"Cengiz Bey evden çıkmıyor. Bir program apartmanın önüne muhabir göndermiş. Bir komşu: “Hep sertti.” Bir başkası: “Selamlaşmazdı.”",
"Perihan Hanım arıyor. “Bir şey biliyorsunuz. Söyleyin. Dün gece balkonda buldum onu. Saat üçte, korkuluğa yaslanmış, aşağı bakıyordu.”",
"Telefonda nefesi.",
"“Yasal yükümlülüğünüz var, biliyorum. Ama kocam otuz gün bekleyemez.”"
], secenekler: [
{ t: "Perihan Hanım'a videoyu gösterirsin. Yalnızca ona.", to: "r3", etki: { hakikat: 1, koruma: 1, aytene: true } },
{ t: "Müfettişe gidip Cengiz Bey'in durumunu anlatırsın. Acil.", to: "r3", etki: { hakikat: 1, acil: true } },
{ t: "Psikiyatrist bir arkadaşını Göztepe'ye göndermesi için ararsın.", to: "r3", etki: { koruma: 2, psikiyatrist: true } },
{ t: "Yükümlülüğünü çiğneyip videoyu paylaşırsın.", to: "h1", etki: { hakikat: 2, kol: "hakikat", gec_paylasim: true } }
]},

r3: { saat: "Bir ay sonra", baslik: "Rapor", metin: [
P(S("r2B"), "“Raporu hızlandıramam,” dedi Ahmet Bey. “Tedbirin kaldırılması için bir ara yazı yazabilirim.” On gün sonra çıktı. Kimse görmedi."),
P(S("r2A"), "Mutfakta, Perihan Hanım'ın telefonunda izlediniz. Telefonu bırakıp ağladı. “Biliyordum. O kimseye el kaldırmazdı.” O gece kocasının yanında uyudu."),
P(S("r2C"), "Arkadaşın gitti. Cengiz Bey önce açmadı, sonra açtı. İki saat. Bir reçete. “Ciddi,” dedi arkadaşın. “Ama artık biri onu izliyor.”"),
"Otuz birinci gün rapor. Kırk iki sayfa.",
"“Öğretmen Cengiz Y.'nin bir öğrencinin tehlikeli bir madde ile bir başka öğrenciye zarar vermesini engellemek amacıyla müdahale ettiği tespit edilmiştir. Darp unsuru bulunmamaktadır.”",
"Devamı: “Öğrenci Berk K.'nın uzun süreli akran zorbalığı...” “Öğrenci Arda T.'nin rehberliğe yönlendirilmesi...”",
"Rapor ilçenin sitesinde bir pdf. On dört kişi indiriyor.",
"Video sekiz milyon. Cengiz Bey'in adı hâlâ “öğretmen darp” ile çıkıyor. Rapor ikinci sayfada."
], secenekler: [
{ t: "Raporu kendi hesabından paylaşırsın. Artık yasal.", to: "t1", etki: { hakikat: 1, rapor_paylas: true } },
{ t: "Raporu basılı olarak Cengiz Bey'e götürürsün.", to: "t1", etki: { koruma: 1, rapor_elden: true } },
{ t: "Bir gazeteciden raporun haberini yapmasını istersin.", to: "t1", etki: { hakikat: 2, gazeteci: true } },
{ t: "Bir şey yapmazsın.", to: "t1", etki: { koruma: 1, kalabalik: 1 } }
]},

/* ---------- SESSİZ KOL ---------- */
s1: { saat: "Bir hafta", baslik: "Sessizlik", metin: [
"Bir şey yapmıyorsun. Telefon cebinde.",
"Bir hafta. On milyon. Cengiz Bey'in arabası ikinci kez. Başka bir şehirde başka bir öğretmen, başka bir video: “Tıpkı Kadıköy'deki gibi.”",
"Öğretmenler odasında Cengiz Bey'i savunanlar alçak sesle konuşuyor. Odanın içinde.",
"Arda okula geliyor. Koridorda sana bakıyor. Minnet mi, başka bir şey mi, çıkaramıyorsun.",
"Berk antrenmanda. Gülüyor. Annesi hâlâ canlı yayında.",
"Her akşam videoyu açıp kapatıyorsun."
], secenekler: [
{ t: "Videoyu bir buluta yedeklersin. Bir gün.", to: "s2", etki: { hakikat: 1, yedek: true } },
{ t: "Videoyu silersin. Sözünü tutmak için.", to: "s2", etki: { koruma: 2, sildi: true } },
{ t: "Cengiz Bey'e her gün bir mesaj atarsın: “Buradayım.”", to: "s2", etki: { koruma: 1, mesaj: true } },
{ t: "Berk'i antrenmanda izlersin.", to: "s2", etki: { hakikat: 1, berki_izledi: true } }
]},

s2: { saat: "İkinci hafta", baslik: "İpek", metin: [
P(S("s1A"), "Şifreli bir klasör. Adını “Kompozisyonlar” koydun."),
P(S("s1C"), "Dokuz gün cevap gelmedi. Onuncu gün: “Biliyorum.”"),
P(S("s1D"), "Berk bir arkadaşının sırtına vurdu. Arkadaşı irkildi. Bir saat izledin."),
P(S("s1B"), "Sildin. “Son silinenler”den de. Artık yalnızca hafızanda."),
"İkinci haftanın pazartesisi İpek seni bekliyor. On bir-C'den, Arda'nın tek arkadaşı.",
"“Hocam, bende de bir video var. Laboratuvarın öbür köşesinden. Elli saniye. Berk'in ‘At’ demesi de, Arda'nın beheri kaldırması da var.”",
"“Bu akşam paylaşacağım. Arda'ya sormadım. Size soruyorum.”",
"Senin vermediğin kararı on altı yaşında bir kız vermek üzere."
], secenekler: [
{ t: "“Paylaşma İpek. Arda'yı yakarsın,” dersin.", to: "s3", etki: { koruma: 2, ece_durdur: true } },
{ t: "“Önce Arda'yla konuş. O karar versin,” dersin.", to: "s3", etki: { koruma: 1, hakikat: 1, arda_karar: true } },
{ t: "“Paylaş. Ama Arda'nın yüzünü sakla,” dersin.", to: "s3", etki: { hakikat: 1, ece_paylas: true } },
{ t: "İpek'in videosunu alıp müfettişe götürürsün.", to: "r1", etki: { hakikat: 1, kol: "resmi", ece_mufettis: true } }
]},

s3: { saat: "Bir ay sonra", baslik: "Boş Laboratuvar", metin: [
P(S("s2A"), "İpek paylaşmadı. Bir ay sonra koridorda seni selamlamadı."),
P(S("s2B"), "Arda hayır dedi. Ama ilk kez birine Berk'i anlattı: İpek'e."),
P(S("s2C"), "İpek paylaştı, yüz bulanık. Ertesi sabah biri bulanıklığı kaldırdı. Arda'nın adı trend oldu."),
"Bir ay sonra Cengiz Bey istifa ediyor. Rapor çıkmış, aklanmış. Kimse okumamış.",
"Son günü cuma. Laboratuvarı topluyor: beherler, tüpler, köşeleri sararmış bir periyodik tablo.",
"Sen kapıdasın.",
"Bir beheri ışığa tutuyor. “Otuz yıl. Düz tut, iki elle, asla yüze doğru değil.” Beheri gazete kâğıdına sarıp kutuya koyuyor.",
"“Sözünü tuttun. Teşekkür ederim. Keşke tutmasaydın.”"
], secenekler: [
{ t: "“Ben de keşke,” dersin.", to: "t1", etki: { hakikat: 1, keske: true } },
{ t: "Kutuyu taşımasına yardım edersin.", to: "t1", etki: { koruma: 1 } },
{ t: "“Arda iyileşiyor hocam,” dersin.", to: "t1", etki: { koruma: 1, arda_iyi: true } },
{ t: "Bir şey diyemezsin.", to: "t1", etki: { kalabalik: 1 } }
]},

/* ---------- KARŞI LİNÇ KOLU ---------- */
b1: { saat: "Cuma gecesi", baslik: "Ekran Görüntüleri", metin: [
P(function(d){ return !d.ekran; }, "İpek'e yazdın. Bir saat sonra yirmi üç ekran görüntüsü. Altında: “Arda bilmesin hocam.”"),
"Yirmi üç ekran görüntüsü. İki yıl. “İbne.” “Psikopat.” “Kendini öldür.” O pazartesi sabahı: “Bugün laboratuvarda bir şey yapacağız ona. Kaydedin.”",
"Arda'nın adını kapatıyorsun. Yalnızca Berk.",
"“Viral olan videodaki ‘mağdur’ öğrencinin annesi Gülsüm K. Bu da oğlunun iki yıl boyunca sınıf arkadaşına yaptıkları.”",
"Paylaş.",
"Gece yarısı on bin paylaşım. Sabah Gülsüm Hanım'ın hesabının altında elli bin yorum.",
"Rüzgâr dönüyor; Berk'e. “Bu çocuk bir canavar.” Basketbol formalı bir fotoğraf. “Okul numarasını bulan var mı?”",
"Sabah yedide biri Berk'in ev adresini ve babasının iş yerini paylaşmış."
], secenekler: [
{ t: "Paylaşımı hemen kaldırırsın.", to: "b2", etki: { koruma: 1, kaldirdi: true } },
{ t: "Bir ek yazarsın: “Lütfen çocuklara saldırmayın.”", to: "b2", etki: { koruma: 1, ek: true } },
{ t: "Bekleyip izlersin. Gülsüm Hanım bunu hak etti.", to: "b2", etki: { kalabalik: 2, izledin: true } },
{ t: "Kırk saniyelik videoyu da eklersin.", to: "b2", etki: { hakikat: 2, video_ekle: true } }
]},

b2: { saat: "Cumartesi", baslik: "Berk", metin: [
P(S("b1B"), "Ekin altına iki bin yorum: “Asıl annesine söyle.” Kimse eki okumadı."),
P(S("b1D"), "Videoyu da ekledin. Kalabalık her şeyi aldı ve iki çocuğu birden yaktı."),
P(S("b1A"), "Kaldırdın. Görüntüler yüz bin telefondaydı."),
P(S("b1C"), "Gülsüm Hanım bir saatte otuz bin takipçi kaybetti. Bir marka iş birliğini iptal etti. İçinde bir tatmin kıpırdadı. Sonra o tatmine baktın."),
"Cumartesi öğleden sonra okulun boş bahçesinde bir bankta Berk. Eşofman, kapüşon. Seni görünce kalkacak gibi oluyor, oturuyor.",
"Yanına oturuyorsun.",
"“Hocam. Siz mi koydunuz onları?”",
"Evet.",
"Telefonunu gösteriyor. Bin mesaj. “Öl.” “Seni okulun önünde bekleyeceğiz.”",
"“Kötü bir şey yaptım. Arda'ya. Biliyorum.” Ağlıyor. “Babam beni döver hocam. Annemin hesabı aslında onun. Parayı o kazanıyor. Bu sabah çok kötüydü.”",
"Kapüşonu indiriyor. Elmacık kemiğinin üstünde bir morluk."
], secenekler: [
{ t: "Berk'i rehber öğretmene, gerekirse polise götürürsün.", to: "b3", etki: { koruma: 2, berk_koru: true } },
{ t: "“Arda'ya yaptıklarını bu haklı çıkarmaz,” dersin.", to: "b3", etki: { hakikat: 1 } },
{ t: "Berk'e sarılırsın.", to: "b3", etki: { koruma: 1, sarildi: true } },
{ t: "Kalkıp gidersin.", to: "b3", etki: { kalabalik: 1, gitti_b: true } }
]},

b3: { saat: "Bir hafta sonra", baslik: "Döngü", metin: [
P(S("b2B"), "“Biliyorum,” dedi Berk. “Ama bunu da haklı çıkarmaz.” Morluğu gösterdi."),
P(S("b2D"), "Kapıda dönüp baktın; Berk bankta, kapüşonu yine başında."),
P(S("b2A"), "Rehber öğretmen, bir doktor, bir sosyal hizmet uzmanı. Babası hakkında soruşturma. Berk Bursa'da anneannesinin yanına gitti. Mesaj attı: “Arda'dan özür dileyeceğim. Bir gün.”"),
P(S("b2C"), "Önce kaskatıydı. Sonra omzunda bir çocuk gibi ağladı. Bunu kimseye anlatmadın."),
"Bir hafta. Rüzgâr üç kez döndü: Cengiz Bey'e, Berk'e, sonra bir gazetecinin “Öğretmen öğrenciyi ifşa etti” haberiyle sana.",
"Bir program tartıştı: “Öğretmenin çocuk ifşası etik mi?” Bir milletvekili soru önergesi verdi. Bu kez senin hakkında.",
"Milli eğitim soruşturma açtı: “Öğrenci kişisel verilerinin izinsiz paylaşımı.” Sözleşmen askıya alındı.",
"Bilinmeyen bir numaradan mesaj: “Sen de şimdi bizim gibisin.”"
], secenekler: [
{ t: "Soruşturmada her şeyi kabul edersin.", to: "t1", etki: { hakikat: 2, kabul: true } },
{ t: "Kendini savunursun: “Bir çocuğu korumaya çalıştım.”", to: "t1", etki: { koruma: 1, savun: true } },
{ t: "Mesaja cevap yazarsın: “Evet.”", to: "t1", etki: { hakikat: 1, evet: true } },
{ t: "Telefonunu kapatıp bir hafta açmazsın.", to: "t1", etki: { kalabalik: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Bir ay sonra", baslik: "Öğretmenler Odası", metin: [
P(S("h3A"), "Cengiz Bey başını salladı. “Biliyorum. Ama faydalanan benim. Bunu nasıl taşıyacağımı bilmiyorum.”"),
P(S("h3B"), "Birlikte Arda'nın evine gittiniz. Hacer Hanım perdenin arkasından baktı, açmadı. İkinci hafta açtı. Arda odasından çıkmadı. Kapısını araladı."),
P(S("h3C"), "Kurulda iki saat ekran görüntüleriyle Arda'yı savundun. Uzaklaştırma bir haftaya indi. Çıkarken bir öğretmen: “Önce yakıp sonra savunmak. İlginç yöntem.”"),
P(S("h3D"), "Aşağıda bahçede çocuklar top oynuyordu. Top bir kere kantinin camına çarptı. İkiniz de irkildiniz."),
P(S("r3A"), "Kırk iki sayfa. Üç günde iki bin kişi gördü. Videoyu sekiz milyon kişi görmüştü."),
P(S("r3B"), "Cengiz Bey raporun kapağına baktı, masaya koydu. “Kızım bu otuz günde okul değiştirdi,” dedi."),
P(S("r3C"), "Haber bir sitenin dördüncü sayfasında çıktı: “Darp iddiasındaki öğretmen aklandı.” Altında üç yorum. Biri: “Yine de bir şey yapmıştır.”"),
P(S("r3D"), "Adalet yerini bulmuştu, dedin kendine. Her sabah biraz daha az inanarak."),
P(S("s3A"), "Cengiz Bey kutuyu kaldırdı. “İkimiz de keşkeyle yaşarız o zaman.”"),
P(S("s3B"), "Kutuyu otoparka kadar birlikte taşıdınız. Bagaja koydu. Teşekkür etmedi. Etmesine gerek yoktu."),
P(S("s3C"), "Cengiz Bey gözlerini kapattı. “İyi. O zaman bir şey işe yaradı.”"),
P(S("s3D"), "Koridorun sonunda durdu, arkasına bakmadı."),
P(S("b3A"), "Her şeyi kabul ettin: ekran görüntülerini, bir çocuğun adresinin yayılmasına yol açtığını. Sözleşmen askıya alındı."),
P(S("b3B"), "“Bir çocuğu korumaya çalıştım.” Kurul başkanı sordu: “Hangisini?” Cevap veremedin."),
P(S("b3C"), "“Evet,” yazdın. Cevap gelmedi. Kendi cevabını defalarca okudun."),
P(S("b3D"), "Bir hafta sonra açtığında dört yüz bildirim. Hiçbirine bakmadan hepsini sildin."),
"Bir ay sonra öğretmenler odası, pazartesi sabahı. Çay ocağının önünde kuyruk. Herkes telefonunda. Ama başka bir şehirden başka bir videoya bakıyorlar.",
"Bir ay. Arama motoru unutmuyor.",
P(function(d){ return d.kol === "hakikat"; }, "Bazıları sana kahraman gibi bakıyor, bazıları başka türlü. Serkan Bey alçak sesle: “Ben yapamazdım. Doğru mu yaptın bilmiyorum. Ama yaptın.”"),
P(function(d){ return d.kol === "resmi"; }, "Serkan Bey: “Cengiz Hoca aklanmış diyorlar. Nereden çıktı bu?” Bir dosyadan. “Kim verdi?” Çayını karıştırıyorsun."),
P(function(d){ return d.kol === "sessiz"; }, "Cengiz Bey'in masası boş. Biri üstüne bir karanfil koymuş. Kurumuş. Kimse kaldırmıyor."),
P(function(d){ return d.kol === "karsi"; }, "Öğretmenler odasına girmiyorsun. Bir arkadaşın panonun fotoğrafını gönderiyor: biri bir kâğıt asmış, “Çocukları sosyal medyada ifşa etmeyin.” İmza yok."),
"Şükran Hanım seni çağırıyor.",
"“Kadro kontenjanı açıldı. Adın listede. Bir şey soracağım: o günden beri bu okulda bir şey değişti mi?”"
], secenekler: [
{ t: "“Hiçbir şey değişmedi hocam,” dersin.", to: "t1b", etki: { hakikat: 1, degismedi: true } },
{ t: "“Ben değiştim,” dersin.", to: "t1b", etki: { koruma: 1 } },
{ t: "Okulda akran zorbalığına karşı bir program önerirsin.", to: "t1b", etki: { koruma: 2, program: true } },
{ t: "“Kadroyu hak edip etmediğimi bilmiyorum,” dersin.", to: "t1b", etki: { hakikat: 1 } }
]},

t1b: { saat: "Bir ay sonra", baslik: "Gülsüm", metin: [
P(S("t1A"), "“Ben de öyle düşünüyorum,” dedi Şükran Hanım. Liste o akşam açıklandı. Adın yoktu. “Bir sonraki dönem.”"),
P(S("t1B"), "“İyi mi, kötü mü?” Bilmiyordun. Adın listeye girdi. Sevinmedin."),
P(S("t1D"), "Şükran Hanım gözlüğünü çıkardı. “Bunu soran ilk öğretmensin.” Adını listeye yazdı."),
P(S("t1C"), "“Bütçe yok,” dedi Şükran Hanım. “Ama yap. Benim adımı koy.” Ertesi hafta on bir-C'de ilk oturum. Arda yoktu. İpek vardı."),
"Bir akşam Kadıköy'de bir kafede biri karşına oturuyor. Güneş gözlüklü, sade. Gözlüğü çıkarıyor. Gülsüm Hanım.",
"“Konuşabilir miyiz?” Ekrandaki sesten çok farklı. Kısık.",
"“Berk o akşam eve gelip ‘Cengiz Hoca bana bağırdı’ dedi. Sordum mu? Sormadım. Bir video vardı. Paylaştım.”",
"“Bir gecede iki milyon. Bir an iyi hissettim. Haklı olmak. İki milyon kişi benimle aynı şeyi düşünüyordu.”",
"“Sonra aynı iki milyon beni yaktı. O iki milyon ne benim yanımdaydı ne Cengiz Hoca'nın.”",
P(function(d){ return d.kol === "karsi"; }, "Sana bakıyor. “Siz de benim oğlumu yaktınız. Şimdi aynı masadayız.”"),
"Gözlüğü masaya bırakıyor. Sapını çevirip duruyor."
], secenekler: [
{ t: "Berk'in nasıl olduğunu sorarsın.", to: "t2", etki: { koruma: 1, berk_sordu: true } },
{ t: "“Cengiz Hoca'dan özür dilediniz mi?” diye sorarsın.", to: "t2", etki: { hakikat: 1, ozur_sordu: true } },
{ t: "Bir şey demez, dinlersin.", to: "t2", etki: { koruma: 1 } },
{ t: "Kalkıp gidersin. Onun pişmanlığını taşımak senin işin değil.", to: "t2", etki: { kalabalik: 1, kalkti: true } }
]},

t2: { saat: "Bahar dönemi", baslik: "Ders", metin: [
P(S("t1bA"), "“Okul değiştirdi. Gece kalkıp telefonunu kontrol ediyor. On altı yaşında, uyuyamıyor.” Gözlüğünü taktı."),
P(S("t1bB"), "“Bir mektup yazdım. Göndermedim.” Masada bir peçete bıraktı. Üstünde bir adres. Göztepe."),
P(S("t1bC"), "Bir saat konuştu. Sonunda: “İki milyon kişi bana bağırdı. Bir kişi dinledi.”"),
P(S("t1bD"), "Kalkıp gittin. Kapıda dönmek istedin. Dönmedin."),
"Bahar dönemi. “Roman” ünitesi. On birlere bir kitap seçeceksin.",
"Listede Tutunamayanlar, Kürk Mantolu Madonna, Suç ve Ceza. Bir de listede olmayan Kafka'nın Dava'sı: Josef K. bir sabah neyle suçlandığını bilmeden tutuklanıyor.",
"Ya da kitap değil, bir mektup: o pazartesiyi kendi ağzından anlatmak.",
"Otuz iki öğrenci. Hepsi o videoyu izledi. Belki bazıları paylaştı.",
P(function(d){ return d.kol !== "karsi"; }, "Arda arka sırada. Bir ay sonra döndü. Başka bir şubeye, ama senin dersine."),
P(function(d){ return d.kol === "karsi"; }, "Sözleşmen bir uyarıyla geri verildi. İlk dersin. Arda arka sırada."),
"Sınıfta birinin o sekiz saniyeyi ilk paylaşan kişi olduğunu biliyorsun. Kim olduğunu bilmiyorsun."
], secenekler: [
{ t: "Dava'yı okutursun.", to: "y_dava", etki: { hakikat: 1, dava: true } },
{ t: "Sınıfa o pazartesi hakkında kendi yazdığın bir mektubu okursun.", to: "y_mektup", etki: { hakikat: 1, koruma: 1, mektup: true } },
{ t: "Listeden bir klasik seçersin. Konuyu açmamak da bir koruma.", to: "t3", etki: { koruma: 1, klasik: true } },
{ t: "Öğrencilere ne okumak istediklerini sorarsın. Belki de kaçarak.", to: "t3", etki: { koruma: 1, sordu_ogr: true } }
]},

y_dava: { saat: "Bahar", baslik: "Josef K.", metin: [
"“Birisi Josef K.'ye iftira etmiş olmalıydı...” İlk cümleyi tahtaya yazıyorsun.",
"Bir hafta okuyorsunuz. Tavan arasında bir mahkeme, görünmeyen yargıçlar, söylenmeyen bir suç.",
"İpek el kaldırıyor. “Josef K. neyle suçlandığını hiç öğrenmiyor, değil mi? O zaman nasıl savunuyor kendini?”",
"Savunamıyor.",
"Biri: “Ama bu kitap. Gerçekte deliller var.”",
"İpek ona dönüyor. “Sekiz saniye. Mahkeme yoktu. Delil yoktu.”",
"Arka sırada Arda başını kaldırıyor."
], secenekler: [
{ t: "İpek'e teşekkür edip konuyu kitapta tutarsın.", to: "t3", etki: { koruma: 1 } },
{ t: "Sınıfa sorarsın: “Siz o sekiz saniyeyi görünce ne düşündünüz?”", to: "t3", etki: { hakikat: 2, sinif_soru: true } },
{ t: "Arda'ya bakarsın. Konuşmak isteyip istemediğini.", to: "t3", etki: { koruma: 1, ardaya_bakti: true } },
{ t: "Kitabın son cümlesini okursun: “Bir köpek gibi!”", to: "t3", etki: { hakikat: 1 } }
]},

y_mektup: { saat: "Bahar", baslik: "Mektup", metin: [
"Üç gece yazdığın, on kez sildiğin bir kâğıt.",
"“Sevgili on birler. Bu bir edebiyat dersi değil. Ya da tam olarak öyle. Çünkü edebiyat bir hikâyenin önünü ve arkasını görmeyi öğretir.”",
"O pazartesiyi okuyorsun. Kapıyı, telefonu, kırk saniyeyi. Salıyı. Yorumları. Kendi ne yaptığını.",
P(function(d){ return d.kol === "hakikat"; }, "“Videoyu paylaştım. Bir öğretmeni kurtardım. Bir öğrenciyi yaktım.”"),
P(function(d){ return d.kol === "sessiz"; }, "“Sustum. Bir öğrenciyi korudum. Bir öğretmeni kaybettik.”"),
P(function(d){ return d.kol === "resmi"; }, "“Bir dosya, bir müfettiş, otuz gün. Adalet geldi. Kimse fark etmedi.”"),
P(function(d){ return d.kol === "karsi"; }, "“Bir öğrencinin acısını göstermek için bir başka öğrenciyi ifşa ettim.”"),
"“Bir gün telefonunuzda bir video olacak. Paylaşmadan önce bir şey sorun: bu hikâyenin önünde ne var, arkasında kim kalacak?”",
"Kâğıdı katlıyorsun. Arka sıradan bir ses. Arda."
], secenekler: [
{ t: "Arda'yı dinlersin.", to: "t3", etki: { koruma: 1, arda_soz: true } },
{ t: "Mektubu panoya asarsın.", to: "t3", etki: { hakikat: 1, pano: true } },
{ t: "Mektubu Cengiz Bey'e gönderirsin.", to: "t3", etki: { hakikat: 1, cengize_mektup: true } },
{ t: "Mektubu yırtarsın.", to: "t3", etki: { koruma: 1 } }
]},

t3: { saat: "Haziran", baslik: "Cengiz Bey", metin: [
P(S("t2C"), "Kürk Mantolu Madonna'yı okuttun. Kimse o pazartesiden söz etmedi. Son derste Arda: “Raif Efendi neden kimseye anlatmadı?” Cevap veremedin."),
P(S("t2D"), "İpek: “Bir zorbalık kitabı olsun.” Gergin bir gülüş. Oylama: Sefiller. Bir ekmek, on dokuz yıl."),
P(S("y_davaA"), "Zil çalınca herkes çıktı, İpek kaldı. “Ben o videoyu ilk görenlerdendim. Paylaşmadım. Durdurmadım da.”"),
P(S("y_davaB"), "Uzun bir sessizlik. Sonra Batu: “Ben paylaştım hocam. Gece yarısı. Herkes paylaşıyordu.” Sınıf ona döndü. Arda dönmedi."),
P(S("y_davaC"), "Arda başını iki yana salladı. Ders bitince kitabın bir sayfasının köşesini kıvırdığını gördün."),
P(S("y_davaD"), "“Bir köpek gibi!” İpek devamını fısıldadı: “Ve utanç ondan sonra da yaşayacakmış gibiydi.”"),
P(S("y_mektupB"), "Ertesi sabah altına biri bir kâğıt iliştirmişti: “Biz de oradaydık.” Üç gün sonra altına bir başkası: “Ben de.”"),
P(S("y_mektupC"), "Bir hafta sonra Moda iskelesi resimli bir kartpostal. Arkasında tek satır: “Kapıda durmak da bir şeydir.”"),
P(S("y_mektupD"), "Mektubu sınıfın önünde yırttın. Ders bitince Arda çöp kutusunun başında durdu. Parçalara baktı, almadı."),
P(S("y_mektupA"), "“Ben de bir mektup yazacağım,” dedi Arda. “Berk'e.” Başını eğmedi."),
"Haziran. Cengiz Bey'den mesaj: “Moda'da bir çay bahçesi. Saat on.”",
"Denize bakan bir masa. Zayıflamış. Ama yüzünde birkaç ay önce olmayan bir şey var.",
P(function(d){ return d.kol === "sessiz"; }, "Erken emekli oldu, maaşından kesintiyle. “Bir okulda daha çalışamazdım. Her koridorda bir telefon.”"),
P(function(d){ return d.kol !== "sessiz"; }, "Üsküdar'da bir meslek lisesine geçti. “Orada kimse beni umursamıyor. Çocukların kendi dertleri var.”"),
"Çay geliyor.",
"“Arda bana bir mektup yazdı.” Bir defter sayfası çıkarıyor. Uzatmıyor, tutuyor.",
"“Ben kimyacıyım, şiir anlamam. Ama bir dizesi var.” Okuyor: “Bir el kolumu tuttu ve ilk kez düşmediğimi anladım.”",
"Kâğıdı katlayıp cebine koyuyor. Gözlüğünü çıkarıp siliyor."
], secenekler: [
{ t: "“Sekiz saniye değil hocam. Kırk saniye,” dersin.", to: "t4", etki: { hakikat: 1 } },
{ t: "Bir şey demeden çayını içersin.", to: "t4", etki: { koruma: 1 } },
{ t: "Özür dilersin. Ne yaptıysan ya da yapmadıysan.", to: "t4", etki: { koruma: 1, cengiz_ozur: true } },
{ t: "“Arda'yla görüşmek ister misiniz?” diye sorarsın.", to: "t4", etki: { koruma: 1, gorus: true } }
]},

t4: { saat: "Eylül", baslik: "Arda'nın Defteri", metin: [
P(S("t3A"), "Cengiz Bey gülümsedi. “Otuz iki saniyelik fark. Ben o farkın içinde yaşadım.”"),
P(S("t3B"), "Martılar, vapur. Bir saat sonra kalktınız. Kapıda “Yine gel,” dedi."),
P(S("t3C"), "Elini kaldırdı. “Öğretmenin özrü öğrenciye yapılır. Bana değil.”"),
P(S("t3D"), "“Henüz değil. O hazır olunca.”"),
"Eylül. İlk gün masanda mavi kapaklı, köşeleri yıpranmış bir defter. “İrem Hocam'a. Arda.”",
"Şiirler. İki yıllık. Bazıları grupta alay edilenler.",
"Son sayfada: “Sekiz Saniye.”",
"“Bir şehir bir çocuğu bir gecede tanıdı.\nAdını bilmeden, yüzünü bilmeden.\nBir öğretmeni bir gecede tanıdı;\notuz yılını bilmeden.\nBir kalabalık bir beheri gördü,\nbeheri tutan eli görmedi.\nBen o elim.\nBen o beherim.\nBen o kalabalığım da.”",
"Altında küçük bir not: “Sınıfta okuyabilirsiniz. Benim adımla. Artık saklanmak istemiyorum.”",
"Arda üçüncü sırada. Pencereye bakıyor."
], secenekler: [
{ t: "Şiiri sınıfta Arda'nın adıyla okursun.", to: "ls", etki: { hakikat: 1, okudu_siir: true } },
{ t: "Şiiri sınıfta adsız okursun. Arda'yı bir kez daha korumak için.", to: "ls", etki: { koruma: 1, adsiz: true } },
{ t: "Şiiri Arda'nın kendisinin okumasını istersin.", to: "ls", etki: { koruma: 1, hakikat: 1, arda_okudu: true } },
{ t: "Defteri kapatırsın. Şimdilik.", to: "ls", etki: { koruma: 1 } }
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
P(S("t4B"), "Şiiri adsız okumuştun. Arda pencereden dışarı baktı."),
P(S("t4D"), "Defteri kapatmıştın."),
"Kırk saniyeyi gösterdin. Bir öğretmen aklandı. Kalabalık bir hafta özür diledi. Bir çocuğun adı bir hafta trend oldu.",
P(function(d){ return d.arda_okudu || d.okudu_siir; }, "Şiir Arda'nın adıyla okundu. Sonra biri alkışladı; İpek. Sonra herkes. Arda kızardı, sıranın altında ellerini sıktı."),
"Bazı geceler pişmansın, bazı sabahlar değil.",
"Telefonunda hâlâ o kırk saniye. Her yıl biri soruyor: “Hocam, o videoyu neden paylaştınız?” Her yıl cevabın biraz değişiyor."
]},

son_dosya: { son: true, baslik: "Dosya", metin: [
P(S("t4B"), "Şiiri adsız okumuştun. Bir dosyadaki adsız bir tanık ifadesi gibi."),
P(S("t4D"), "Defteri çekmecene, raporun yanına koymuştun."),
"Bir müfettiş, bir ifade, kırk iki sayfa. Kimse fark etmedi.",
P(function(d){ return d.gazeteci; }, "Haber on bin kez okundu. Video sekiz milyon kez izlenmişti."),
"Arda'nın adı hiçbir yerde geçmedi. Cengiz Bey otuz gün boyunca gecenin üçünde bir balkonda durdu.",
"Ahmet Bey'in sözü aklında: “Ben dosyaya bakıyorum.”",
"Bir gün pdf'i yeniden açıyorsun. On dördüncü sayfada bir dipnot: “Öğretmen İrem K.'nın sunduğu görüntüler belirleyici olmuştur.” Adın, bir dipnotta."
]},

son_sekiz: { son: true, baslik: "Sekiz Saniye", metin: [
P(S("t4B"), "Şiiri adsız okumuştun. Bir kez daha onun yerine karar verdin."),
P(S("t4D"), "Defteri kapatmıştın. Zamanını da sen seçmiştin."),
"Sustun. Arda'nın adı hiçbir yerde geçmedi.",
"Cengiz Bey istifa etti. Bir rapor onu akladı. Kimse okumadı.",
"“Sil onu,” demişti. Sen de dinledin.",
P(function(d){ return d.ece_paylas; }, "Sen sustuğun sırada İpek konuştu. Senin “Paylaş” demenle. Bir çocuk yine yandı."),
"Arda iyileşiyor. Bir psikiyatrist, ilaçlar, İpek, bir defter. Bir gün: “Siz susmasaydınız ben bugün burada olmazdım.” Doğru. Bir öğretmenin otuz yılı pahasına.",
"Moda'da bir çay bahçesinin önünden geçiyorsun bazen. Cengiz Bey her sabah orada. Bazen el sallıyor, bazen sallamıyor."
]},

son_hedef: { son: true, baslik: "Yirmi Üç Görüntü", metin: [
P(S("t4B"), "Şiiri adsız okumuştun. Bir adı saklamayı bir adı yaktıktan sonra öğrendin."),
P(S("t4D"), "Defteri kapatmıştın. Bir şeyi açmaya korkuyordun."),
"Kalabalığı çevirdin. Gösterdiğin yöne döndü ve oradaki çocuğu yaktı.",
"Berk iki yıl bir çocuğa işkence etti. Bir babadan dayak yiyordu. İkisi birden.",
P(function(d){ return d.berk_koru; }, "Berk Bursa'dan el yazısıyla bir mektup gönderdi: “Siz beni ifşa ettiniz, sonra kurtardınız. Ben de Arda'yı o laboratuvara götürdüm ki bir şey olsun. Belki birinin beni durdurmasını istiyordum.”"),
"Gülsüm Hanım bir kafede dedi ki: “Siz doğru tarafta durduğunuzu sanıyordunuz. Ben de.”",
"Bilinmeyen numaradan gelen mesajı silmedin: “Sen de şimdi bizim gibisin.”"
]},

son_ogretmen: { son: true, baslik: "Öğretmen", metin: [
P(S("t4B"), "Şiiri adsız okumuştun. Sınıfın yarısı kimin yazdığını biliyordu, kimse söylemedi."),
P(S("t4D"), "Defteri kapatmıştın. Haziranda Arda kendisi açtı. Son derste, kendi sesiyle."),
"Kalabalığı durduramadın. Bir sınıfı bir saatliğine durdurdun.",
"Cengiz Bey'in otuz yılı, Arda'nın adı, Berk'in yüzü. Hiçbiri geri gelmiyor.",
P(function(d){ return d.program; }, "Programın ikinci yılında Arda ve İpek bir grup kurdu: “Önü ve Arkası.” Toplantılar salı öğle arası, kimya laboratuvarında. Cengiz Bey'in eski masasında."),
"Her dönem başında Arda'nın şiirini okuyorsun. Onun adıyla.",
"Her dönem biri soruyor: “Hocam, o gün siz neredeydiniz?” “Kapıdaydım,” diyorsun."
]}

},

ayna: function(d){
  var out = [];
  var h = d.hakikat, k = d.koruma, c = d.kalabalik;
  if(h >= k && h >= c) out.push("Çoğu kavşakta olanı göstermeyi seçtin: videoyu, dosyayı, mektubu.");
  else if(k >= c) out.push("Çoğu kavşakta Arda'yı korudun.");
  else out.push("Bazı anlarda sen de kalabalığın içindeydin.");
  if(d.begendi) out.push("Bir yorumu bir saniyeliğine beğendin.");
  if(d.kol === "karsi") out.push("Berk'in mesajlarını paylaştın.");
  if(d.sildi) out.push("Kırk saniyeyi sildin.");
  if(d.ardaya_soz) out.push("Arda'ya söz verdin.");
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
