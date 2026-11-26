(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "linc",
baslik: "Linç",
dunya: "Gerçek dünya",
kategoriler: ["Toplum ve Adalet"],
giris: "2024, İstanbul. Bir lisenin kimya laboratuvarında sekiz saniyelik bir video çekiliyor, bir öğretmen bir öğrencinin kolunu tutmuş bağırıyor. Bir gecede iki milyon izlenme, bir etiket ve “öğretmen öğrenciyi darp etti” diye tek bir cümle. Sen o gün kapıdaydın ve telefonunda kırk saniyelik bir video var. O kırk saniye gerçeği gösteriyor ama gerçeği göstermek başka bir çocuğu yakmak demek. Bu, bir kalabalığın, bir hakikatin ve bir öğretmenin sessizliğinin hikâyesi.",
kavramlar: ["Kitle psikolojisi", "Hakikat sonrası", "Utanç ve itibar", "Sessiz tanık"],
ozet: "Sekiz saniyelik bir video bir öğretmeni bir gecede “şiddet uygulayan öğretmen” yapıyor. Videonun tamamı sende var ama gerçeği göstermek başka bir çocuğu ateşe atmak demek.",
baslangic: "a1",
durum: { hakikat: 0, koruma: 0, kalabalik: 0 },

sahneler: {

a1: { saat: "Pazartesi, 11.40", baslik: "Laboratuvar", metin: [
"Kadıköy'de bir Anadolu lisesi, pazartesi, dördüncü ders. Teneffüse beş dakika var, koridor bomboş. Kaloriferin üstünde birinin unuttuğu bir eşofman üstü kuruyor.",
"Adın İrem, otuz dört yaşındasın, edebiyat öğretmenisin. Sözleşmelisin ve üç yıldır kadro bekliyorsun. Koltuğunun altında on birlerin “Hayatımı değiştiren bir an” konulu kompozisyonları var, yarısı aynı internet sitesinden kopyalanmış.",
"Kimya laboratuvarının önünden geçerken içeriden bir bağırış ve bir cam sesi geliyor. Kapı aralık.",
"İçeride on bir-C var. Masaların arasında iki çocuk karşı karşıya durmuş. Biri senin öğrencin Arda, gözlüklü, defterinin arkasına şiir yazan bir çocuk. Elinde deney için hazırlanmış asit çözeltisiyle dolu bir beher var. Karşısında uzun boylu, basketbolcu Berk gülüyor. “Hadi at bakalım, atamazsın.”",
"Telefonunu çıkarıp kaydetmeye başlıyorsun, neden yaptığını sen de bilmiyorsun.",
"Arda'nın eli titriyor, beher yavaş yavaş yükseliyor.",
"Kimya öğretmeni Cengiz Bey elli iki yaşında, sert, otuz yıllık bir öğretmen, öğrenciler arkasından ona “Kimyager Dede” diyor. İki adımda Arda'nın yanına varıp kolunu yakalıyor. “Bırak onu! Bırak dedim!” Beher Arda'nın elinden kayıp masaya düşüyor ama devrilmiyor.",
"Kırk saniye sonra telefonu indiriyorsun. Arda ağlıyor, Berk gülüyor ama sesi titriyor. Cengiz Bey bir sandalyeye çöküp titremesin diye ellerini dizlerine bastırıyor.",
"Zil çalıyor.",
"Arda bembeyaz bir yüzle kapıya yürüyor. Arka sırada bir öğrenci telefonunu hızla cebine sokuyor. Koridor birazdan dolacak."
], secenekler: [
{ t: "Cengiz Bey'i o sandalyede bırakıp Arda'nın peşinden gidersin.", to: "a2", etki: { koruma: 1, girdi: true } },
{ t: "Arda koridora tek başına çıkarken Cengiz Bey'in yanına gidersin.", to: "a2", etki: { hakikat: 1, cengize: true } },
{ t: "Kendi kaydını silmeden arka sıradaki öğrenciden kaydını silmesini istersin.", to: "a2", etki: { kalabalik: 1, silmesini_istedi: true } },
{ t: "Odadaki üç kişiyi kendi hâline bırakıp müdüre haber vermeye koşarsın.", to: "a2", etki: { kalabalik: 1, gitti: true } }
]},

a2: { saat: "Salı", baslik: "Sekiz Saniye", metin: [
P(S("a1C"), "Çocuğun adı Batu'ydu. “Sildim hocam,” deyip galerisini gösterdi, galeri boştu. Kaydın çoktan bir buluta, oradan da bir gruba gittiğini salı sabahı anlayacaktın."),
P(S("a1D"), "Şükran Hanım toplantıdaydı, kırk dakika kapıda bekledin. “Laboratuvarda bir olay oldu,” dedin. “Cengiz Bey halleder,” dedi dosyalarına dönerek. Kaydı göstermedin, o da sormadı."),
P(S("a1A"), "Arda'nın yanına gittin. Bir şey demedi, sana bir baktı, sonra koşarak merdivenlerden indi. Berk arkasından bir şey bağırdı."),
P(S("a1B"), "Cengiz Bey başını kaldırdı. “İyiyim,” dedi, “kimseye bir şey söyleme.” Neyi kastettiğini sormadın."),
"Salı sabahı telefonunda yüz on yedi bildirim var.",
"Bir video dolaşıyor, sekiz saniyelik. Masanın arkasından, alçak bir açıdan çekilmiş. Yalnızca Cengiz Bey'in Arda'nın kolunu sertçe yakalayıp “Bırak dedim!” diye bağırdığı görülüyor. Ne beher görünüyor ne de Berk.",
"Altında şu yazıyor: “Kadıköy'de öğretmen öğrenciyi darp etti! Çocuklarımız güvende mi?”",
"Video gece yarısı bir öğrenci hesabından paylaşılmış. Sabah altıda üç yüz bin takipçili bir annelik hesabı da paylaşmış. Hesabın sahibi Gülsüm Hanım, Berk'in annesi.",
"İki milyon izlenme olmuş, #CengizHocaKovulsun diye bir etiket açılmış. Okulun adı, Cengiz Bey'in tam adı ve eski bir öğretmenler günü fotoğrafı ortalıkta, fotoğrafta elinde bir karanfil var.",
"Yorumlar şöyle: “Bu adam hapse girmeli.” “Benim çocuğuma dokunsa elini kırardım.” “Adresini bulan var mı?”",
"Senin telefonunda ise kırk saniye var, beher de, Berk de, “At bakalım” da içinde. Kapıda olduğunu kimse bilmiyor, ya da sen öyle sanıyorsun."
], secenekler: [
{ t: "Yorumların hepsini okursun.", to: "x_yorum", etki: { kalabalik: 1 } },
{ t: "Cengiz Bey'i ararsın.", to: "x_cengiz", etki: { hakikat: 1, aradi: true } },
{ t: "Telefonu kapatıp otuz iki çocuğun o videoyu izlemiş olarak seni beklediği okula gidersin.", to: "a3", etki: { koruma: 1, kapatti: true } },
{ t: "Kırk saniyenin de bir şeyi göstermiyor olabileceğini düşünüp kendi videonu yeniden izlersin.", to: "a3", etki: { hakikat: 1, izledi: true } }
]},

x_yorum: { saat: "Salı", baslik: "Yorumlar", metin: [
"Okudukça okuyorsun, bin, iki bin, beş bin. Kahven soğuyor, üstünde bir zar oluşuyor.",
"“Benim de öğretmenimdi, hep sertti.” “Bu okulda okudum, bize dokunmadı ama korkardık.” “Ülkenin hâli bu.”",
"Biri Cengiz Bey'in kızının hesabını bulup “Babana söyle, utansın,” yazmış. Kızın son fotoğrafı bir mezuniyet töreninden.",
"Biri de bir sokak adı yazmış, Göztepe.",
"“Önce ne oldu?” diye soran tek kişi yok.",
"Yazanların çoğu anne, baba ya da eski öğrenci. Bir çocuğu korumak istiyorlar ama yanlış çocuğu.",
"Bir yorumun altında kendi okulundan, adını tanıdığın bir öğretmen “Bu adamla ilgili daha önce de şikâyetler olmuştu,” diye yazmış. Olmadığını biliyorsun."
], secenekler: [
{ t: "O öğretmene özelden yazıp yalan söylediğini söylersin.", to: "a3", etki: { hakikat: 1, ogretmene: true } },
{ t: "Bir yoruma “Videonun öncesini bilmiyorsunuz,” diye cevap yazarsın.", to: "a3", etki: { hakikat: 1, yorum_yazdi: true } },
{ t: "Daha fazla okuyamayıp telefonu bırakırsın.", to: "a3", etki: { koruma: 1 } },
{ t: "Başparmağın bir yorumun üstünde kalır ve beğeni düğmesine dokunursun.", to: "a3", etki: { kalabalik: 2, begendi: true } }
]},

x_cengiz: { saat: "Salı", baslik: "Cengiz Bey", metin: [
"Telefon uzun uzun çalıyor, sonra yorgun bir ses “Efendim,” diyor.",
"“Cengiz Hocam, ben İrem, edebiyattan.”",
"“Biliyorum. Ne istiyorsun?”",
"“Ben o gün kapıdaydım, kaydettim. Kırk saniye, beher de var, Berk de.”",
"Arkada bir televizyon açık. Bir kadın sesi bir şey soruyor, Cengiz Bey ahizeyi kapatıp “Okuldan,” diyor.",
"“Sil onu.”",
"“Hocam?”",
"“Sil. Emekliliğime üç yıl var, bu sekiz saniye beni bitirebilir, bitirsin. O çocuk on altı yaşında. O videoyu gösterirsen bütün ülke onu asit atmaya kalkan çocuk diye tanır. Ben bir ay sonra unutulurum ama o unutulmaz.”",
"Sesi kırılıyor, öksürerek toparlıyor. “Önce öğrenci.”"
], secenekler: [
{ t: "“Siz de insansınız hocam, sizi kim koruyacak?” dersin.", to: "a3", etki: { hakikat: 1, sizi_kim: true } },
{ t: "“Tamam hocam, kimseye göstermem,” dersin.", to: "a3", etki: { koruma: 2, cengize_soz: true } },
{ t: "“Silemem hocam ama şimdilik göstermem,” dersin.", to: "a3", etki: { koruma: 1, hakikat: 1 } },
{ t: "“Eşiniz ne diyor?” diye sorarsın.", to: "a3", etki: { koruma: 1, esi: true } }
]},

a3: { saat: "Salı, öğleden sonra", baslik: "Müdür", metin: [
P(S("a2C"), "On bir-C'ye girdiğinde otuz iki baş aynı anda kalkıp aynı anda eğildi. Tahtaya yazarken arkanda biri “Hoca da oradaymış,” diye fısıldadı. Dönmedin ama tebeşir elinde kırıldı."),
P(S("a2D"), "Kare kare izlerken bir şey gördün. Beheri tutan el, Cengiz Bey yakalamadan bir saniye önce inmeye başlamıştı. Arda vazgeçiyor muydu, yoksa sen mi öyle görmek istiyordun?"),
P(S("x_yorumA"), "Yazdın. Üç dakika sonra “Sen kimin tarafındasın?” diye cevap geldi, sonra seni engelledi. Ertesi sabah öğretmenler odasında yanından geçerken başını bile çevirmedi."),
P(S("x_yorumB"), "On dakikada iki yüz cevap geldi. “Öğretmen yalakası.” “Bu da o okuldanmış, bulun.” Yorumunu sildin ama ekran görüntüsü çoktan alınmıştı."),
P(S("x_yorumC"), "Telefonu bıraktın ama son gördüğün yorum aklında kaldı: “Adresini bulan var mı?”"),
P(S("x_cengizB"), "“Kimseye göstermem,” dedin. Kapattıktan sonra sözünün öbür ucunda yanan bir adam olduğunu fark ettin."),
P(S("x_cengizC"), "“Şimdilik,” dedi Cengiz Bey ve bir süre sustu. “İyi kelime, hiç bitmez.”"),
P(S("x_yorumD"), "Yorumda “Bu öğretmenler hep böyle” yazıyordu. Beğeniyi hemen geri aldın ama bir saniyeliğine sen de o iki milyonun içindeki bir sayı olmuştun."),
P(S("x_cengizA"), "“Öğretmeni kimse korumaz İrem,” dedi, “ne veli, ne müdür, ne bakanlık. Sen de koruma ama o çocuğu da yakma.”"),
P(S("x_cengizD"), "“Eşim ağlıyor,” dedi. “Kızımın hesabına mesajlar geliyor. Ona hiçbir şey anlatmadım.”"),
"Öğleden sonra müdür Şükran Hanım bütün öğretmenleri topluyor, herkesin gözü telefonunda.",
"“Arkadaşlar, ilçeden müfettiş gelecek. Cengiz Bey tedbiren görevden uzaklaştırıldı. Basına, sosyal medyaya hiçbir şey söylemeyin, velilere açıklama yapmayın.” Masadaki telefonu titreyip duruyor, ters çeviriyor.",
"Matematik öğretmeni Serkan Bey el kaldırıyor. “O gün ne olduğunu bilen var mı?”",
"Şükran Hanım bir an duraksıyor. “Öğrenciler farklı şeyler söylüyor,” diyor ve sana bakıyor, ya da sana öyle geliyor.",
"Kadro listesi ay sonunda açıklanacak."
], secenekler: [
{ t: "El kaldırıp “Ben gördüm, bir videom var,” dersin.", to: "a4", etki: { hakikat: 2, mudure_soyledi: true } },
{ t: "Toplantıdan sonra Şükran Hanım'a özelden söylersin.", to: "a4", etki: { hakikat: 1, ozel: true } },
{ t: "Sözleşmeli olduğun ve kadro listesi bu ay açıklanacağı için bir şey söylemezsin.", to: "a4", etki: { kalabalik: 1, sozlesme: true } },
{ t: "Serkan Bey'e “Önce Arda'yla konuşmak lazım,” deyip bir şey bildiğini ama hepsini değil, ele verirsin.", to: "a4", etki: { koruma: 1 } }
]},

a4: { saat: "Çarşamba", baslik: "Arda", metin: [
P(S("a3C"), "Bir şey söylemedin. Kapıda Şükran Hanım kolunu tuttu. “O gün laboratuvarın önünde olduğunu söyleyen bir öğrenci var. Bir şey bilseydin söylerdin, değil mi?” Başını ne evet ne hayır anlamına gelecek şekilde oynattın."),
P(S("a3D"), "Oda sana döndü, biri “Arda kim?” diye sordu. Bu isim o odada ilk kez senin ağzından çıkmıştı, Şükran Hanım da not aldı."),
P(S("a3A"), "Oda sustu, Şükran Hanım'ın yüzü bembeyaz oldu. “Toplantıdan sonra odama gel,” dedi. Arka sıradan biri “Sözleşmeli değil miydi bu?” diye fısıldadı."),
P(S("a3B"), "Şükran Hanım videoyu iki kere izleyip telefonunu geri verdi. “Kimseye gösterme, müfettişe ben söylerim. Bu çıkarsa okul biter. Bir öğrenci asit atmaya kalkmış, bir öğretmen engellemiş, biri çarpıtıp yaymış, bir veli de oğlunun zorbalığını gizlemek için öğretmeni yakmış. Hangi kısmı okulu kurtarır söyle?”"),
"Çarşamba son ders bitince sınıfta yalnız kalıyorsun. Kapı açılıyor, gelen Arda.",
"Gözlükleri buğulanmış, kapıyı arkasından kapatıyor.",
"“Hocam, kapıdaydınız. Telefonunuzu da gördüm.”",
"“Lütfen göstermeyin. Herkes asit atmaya kalktığımı öğrenir, okuldan atılırım, belki polis de gelir. Bir de neden kalktığımı öğrenirler, Berk'in iki yıldır yaptıklarını. Annemin bundan haberi yok.”",
"Ağlıyor. “Cengiz Hoca beni kurtardı, şimdi onu ben yaktım. Bir şey de diyemiyorum, dersem ben yanarım.”",
"Koridordan telefonda yüksek sesle konuşan bir velinin sesi geliyor, Cengiz Bey'in adını söylüyor."
], secenekler: [
{ t: "Cengiz Bey'in adı her saat biraz daha yanarken “Göstermeyeceğim,” dersin.", to: "a5", etki: { koruma: 2, ardaya_soz: true } },
{ t: "“Berk sana ne yaptı?” diye sorarsın.", to: "x_arda", etki: { hakikat: 1, koruma: 1 } },
{ t: "Söz vermeyip “Gerçek bir gün çıkacak Arda, benden ya da başkasından,” dersin.", to: "a5", etki: { hakikat: 2 } },
{ t: "Onu rehber öğretmene götürürsün.", to: "x_rehber", etki: { koruma: 1, rehber: true } }
]},

x_arda: { saat: "Çarşamba", baslik: "İki Yıl", metin: [
"Arda telefonunu çıkarıp sınıfın Arda'sız kurulmuş bir grubunu gösteriyor. Biri ekran görüntülerini ona göndermiş.",
"İki yıllık birikim var. Gizlice çekilip değiştirilmiş fotoğraflar, edebiyat defterinden çalınıp grupta okunmuş şiirler. Bir şiirin altına Berk “Bu ibne şiir mi yazıyor” yazmış.",
"Babasının işsizliğiyle ilgili şakalar var. Bir de o pazartesi sabahından bir mesaj: “Bugün laboratuvarda ona bir şey yapacağız, kaydedin.”",
"Bu senin sınıfın. Bu çocuklara her hafta Nâzım'ı, Cemal Süreya'yı, Edip Cansever'i okuttun.",
"“Berk beheri bana gösterdi, ‘At,’ dedi, ‘korkaksın.’ Bir an gerçekten atmak istedim, yalnızca bir an. Sonra Cengiz Hoca geldi.”",
"“O bir anı kimse bilmemeli. Bilirlerse ben de Berk gibi olurum.”"
], secenekler: [
{ t: "Bir gün lazım olabilir diye ekran görüntülerini Arda'dan istersin.", to: "a5", etki: { hakikat: 1, ekran: true } },
{ t: "“O bir an seni Berk gibi yapmaz,” dersin.", to: "a5", etki: { koruma: 2 } },
{ t: "Arda'dan kendi şiirlerinden birini okumasını istersin.", to: "a5", etki: { koruma: 1, siir: true } },
{ t: "Berk'in ailesiyle konuşmaya karar verirsin.", to: "a5", etki: { hakikat: 1, berk_aile: true } }
]},

x_rehber: { saat: "Çarşamba", baslik: "Rehber", metin: [
"Rehber öğretmen Tülay Hanım'ın odasında bir kanepe, bir kaktüs ve bir kutu mendil var.",
"Arda içeri giriyor, sen kapıda kalıyorsun. Tülay Hanım çay koyuyor ama Arda bir saat hiç konuşmuyor.",
"Sonra her şeyi anlatıyor, iki yılı, grubu, şiirleri, beheri ve o bir anı.",
"Tülay Hanım dışarı çıkınca alçak sesle konuşuyor. “Bu çocuk risk altında, kendine zarar verme düşünceleri var. Ailesini aramam gerek. Müdüre de rapor etmek zorundayım, akran zorbalığı var, bir saldırı girişimi var. Rapor müfettişe gider.”",
"Arda kapıda duruyor, duymuş.",
"“Hocam, söz vermiştiniz.”",
"Söz vermemiştin ama ona bir şey vermiştin."
], secenekler: [
{ t: "Tülay Hanım'dan raporu bir hafta bekletmesini istersin.", to: "a5", etki: { koruma: 1, beklet: true } },
{ t: "Arda'ya “Bu seni korumak için,” dersin.", to: "a5", etki: { hakikat: 1, koruma: 1 } },
{ t: "Arda'nın ailesini kendin aramayı teklif edersin.", to: "a5", etki: { koruma: 1, aile_ara: true } },
{ t: "Bir şey demeden Arda'nın yanına oturursun.", to: "a5", etki: { koruma: 1 } }
]},

a5: { saat: "Perşembe akşamı", baslik: "Göztepe", metin: [
P(S("a4A"), "Söz vermiştin. Gece telefonu üç kere açıp videoya baktın, üç kere kapattın."),
P(S("a4C"), "Arda uzun uzun yüzüne baktı. “O zaman başkasından çıksın,” deyip çıktı ve kapıyı kapatmadı."),
P(S("x_ardaA"), "Yirmi üç ekran görüntüsü geldi, ardından da “Kimseye göstermeyin, söz mü?” diye bir mesaj. Cevap yazmadın, yazmadığını o da gördü, iki mavi tik."),
P(S("x_ardaB"), "Arda gözlüğünü çıkarıp sildi. “Siz öyle diyorsunuz,” dedi, “internet öyle demez.”"),
P(S("x_ardaC"), "Arda laboratuvarın penceresinden görünen bir ıhlamur ağacı üstüne yazdığı bir şiiri okudu. Son dizesi “Ağaç bilmez kimin baktığını” idi. Bitirince kısa, utangaç bir gülüş attı."),
P(S("x_ardaD"), "Gülsüm Hanım'ın hesabını açtın. Üç yüz bin takipçi, dün akşam “Bir anne olarak” diye başlayan bir canlı yayın. O kapıyı çalmak bir yangına doğru yürümek gibiydi."),
P(S("x_rehberA"), "“Bir hafta,” dedi Tülay Hanım, “sonra benim de elim kolum bağlı.” Arda koridorda sana baktı."),
P(S("x_rehberB"), "Arda sana öyle bir baktı ki cümlenin içindeki boşluğu duydun. “Herkes beni koruyor ve ben yanıyorum,” dedi."),
P(S("x_rehberC"), "Telefonu annesi Hacer Hanım açtı, “Arda iyi mi?” diye sordu. İyi olduğunu söyledin, okula gelmesini istedin, gerisini anlatmadın."),
P(S("x_rehberD"), "Yanına oturdun, Tülay Hanım dışarı çıktı. Arda omzunu bir saniyeliğine omzuna yasladı, sonra doğruldu."),
"Perşembe akşamı Göztepe'de eski bir apartmanın üçüncü katındasın. Kapıda sökülmüş bir kâğıdın yapışkan izi var. Biri “Çocuk döven” yazıp yapıştırmış, onlar da sökmüş.",
"Kapıyı Cengiz Bey'in eşi Perihan Hanım açıyor. Emekli bir hemşire, gözleri kızarmış.",
"Cengiz Bey salonda kapalı televizyonun karşısında oturuyor, önünde soğumuş bir kahve var. Üç günde yüzü çökmüş, tıraş da olmamış.",
"“Kızım üniversitede,” diyor Perihan Hanım, “hesabını kapattı. Bir arkadaşı ona ‘Baban çocuk mu dövüyor?’ diye sormuş.”",
"“Dün gece arabanın camını kırdılar. Polis gelip tutanak tuttu ve gitti, ‘sosyal medya hassasiyeti’ dedi.”",
P(function(d){ return d.aradi; }, "Cengiz Bey sana dönüyor. “Videoyu sildin mi?”"),
P(function(d){ return !d.aradi; }, "Cengiz Bey sana dönüyor. “O gün kapıdaydın, kaydettin değil mi?” Başını sallıyorsun. “Sil onu.”"),
P(function(d){ return d.cengize_soz; }, "“Silmedim hocam ama kimseye de göstermedim.”"),
"Perihan Hanım önce kocasına, sonra sana bakıyor. “Hangi video?”",
"Cengiz Bey eşine hiç söylememiş."
], secenekler: [
{ t: "Perihan Hanım'a gerçeği, videoyu anlatırsın.", to: "a6", etki: { hakikat: 2, ayten_bildi: true } },
{ t: "Kararın Cengiz Bey'e ait olduğunu düşünüp ona bakarsın ama susman da bir cevap.", to: "a6", etki: { koruma: 1 } },
{ t: "Kocasının sırrı için bir kadının yüzüne bakıp “Bir şey yok,” dersin.", to: "a6", etki: { koruma: 1, kalabalik: 1 } },
{ t: "Cengiz Bey'e “Eşinize siz söyleyin hocam,” dersin.", to: "a6", etki: { hakikat: 1, kendisi_soylesin: true } }
]},

a6: { saat: "Cuma", baslik: "Seçim", metin: [
P(S("a5B"), "Cengiz Bey eşine baktı. “Bir video var Perihan,” dedi yorgun bir sesle, “bir şey değişmez.” Kapıda Perihan Hanım “Teşekkür ederim kızım,” dedi, neye teşekkür ettiğini anlamadın."),
P(S("a5C"), "“Bir şey yok,” dedin. Perihan Hanım otuz yıl boyunca yalan söyleyen hastalara bakmış gözlerle sana baktı ve “Peki,” dedi. Kapıda elini uzatmadı."),
P(S("a5A"), "Anlattın. Perihan Hanım kocasına döndü. “Üç gündür ‘bir şey yok’ diyorsun.” Cengiz Bey yere bakıp “O çocuk on altı yaşında,” dedi. Perihan Hanım uzun süre sustu. “Bizim kızımız da yirmi bir yaşında,” dedi."),
P(S("a5D"), "Cengiz Bey eşine anlattı. Perihan Hanım dinledi, kalkıp mutfağa gitti ve kapıyı kapattı. İçeriden uzun süre musluk sesi geldi. “Görüyorsun,” dedi Cengiz Bey, “doğrusunu söylemek hiçbir şeyi kolaylaştırmıyor.”"),
"Cuma gelmiş, video beş milyon izlenmiş. Ana haber bülteninde otuz saniye yer aldı, bir milletvekili soru önergesi verdi. Gülsüm Hanım ağlayarak “Bir anne olarak...” diye canlı yayın yaptı.",
"Müfettiş pazartesi geliyor ve soruşturma otuz gün sürecek.",
"Cengiz Bey'in adını arama motoruna yazınca ilk sayfanın tamamı o sekiz saniyeden ibaret.",
"Telefonunda kırk saniye duruyor. Kulağında Arda'nın “Lütfen göstermeyin” deyişi, Cengiz Bey'in “Sil onu” deyişi var.",
P(S("a5A"), "Bir de Perihan Hanım'ın sesi: “Bizim kızımız da yirmi bir yaşında.”"),
P(function(d){ return d.ekran; }, "Bir de Arda'nın gönderdiği yirmi üç ekran görüntüsü var, Berk'in, yani Gülsüm Hanım'ın oğlunun yazdıkları."),
P(function(d){ return !d.ekran; }, "Bir de sınıfın mesaj grubu var. İki yılın kanıtı bir öğrencinin telefonunda, bir mesaj uzağında duruyor."),
"Pazartesiye iki gün var."
], secenekler: [
{ t: "Kırk saniyelik videoyu kendi hesabından paylaşırsın. Cengiz Bey kurtulur ama Arda'nın yüzü de görünür.", to: "h1", etki: { hakikat: 2, kol: "hakikat" } },
{ t: "Videoyu yalnızca müfettişe verirsin. Doğru yol bu ama otuz gün sürecek ve Cengiz Bey her gün biraz daha yanacak.", to: "r1", etki: { hakikat: 1, koruma: 1, kol: "resmi" } },
{ t: "Arda'yı korumak için hiçbir şey yapmaz, bir öğretmenin yanışını seyredersin.", to: "s1", etki: { koruma: 2, kol: "sessiz" } },
{ t: "Videoyu değil, Berk'in iki yıllık mesajlarını paylaşıp ateşi asıl suçluya çevirirsin, ama o da on altı yaşında.", to: "b1", etki: { kalabalik: 1, hakikat: 1, kol: "karsi" } }
]},

/* ---------- HAKİKAT KOLU ---------- */
h1: { saat: "Cuma gecesi", baslik: "Kırk Saniye", metin: [
P(S("a6A"), "Cuma gecesi saat on bir, mutfak masasındasın, yanında soğumuş bir ıhlamur var."),
P(S("r2D"), "Otuz günü bekleyemedin. Perihan Hanım'ın telefonundan sonra müfettişi de kadroyu da bir kenara koydun. Gece yarısı olmuştu."),
"Kendi hesabını açıyorsun, yedi yüz takipçin var, çoğu eski öğrencin. Videoyu yüklüyorsun. Altına yazacağın metni üç kere silip yeniden yazıyorsun.",
"“O okulda öğretmenim ve o gün kapıdaydım. Videonun tamamı bu. Cengiz Hoca bir öğrenciyi darp etmedi, bir öğrencinin başka birine zarar vermesini engelledi.”",
"Arda'nın yüzünü bulanıklaştırıyorsun, Berk'inkini de.",
"Paylaşıyorsun.",
"Bir saatte yüz kişi paylaşıyor. Gece yarısı bir haber sitesi alıyor, sabah altıda izlenme bir milyonu buluyor.",
"Aynı hesaplar, aynı öfke, yalnızca yönü değişmiş. “Bu öğretmen kahraman!” “O veli kim? Gülsüm Hanım'ın oğlu değil mi?”",
"Sonra biri bulanıklığı bir yapay zekâ aracıyla kaldırıyor. Sabah yedide Arda'nın yüzü net bir şekilde ortada, altında “İşte asit atmaya kalkan çocuk” yazıyor, adı ve okul numarası da var.",
"Sabah sekizde Arda'nın adı gündemde."
], secenekler: [
{ t: "Videoyu hemen kaldırırsın.", to: "h2", etki: { koruma: 2, kaldirdi: true } },
{ t: "Arda'nın o beheri neden tuttuğunu, iki yılı anlatan bir açıklama yazarsın.", to: "h2", etki: { hakikat: 1, koruma: 1, aciklama: true } },
{ t: "Arda'yı ararsın.", to: "h2", etki: { koruma: 1, ardayi_aradi: true } },
{ t: "Arda'nın yüzünü açan hesapları platforma şikâyet edersin.", to: "h2", etki: { hakikat: 1, sikayet: true } }
]},

h2: { saat: "Cumartesi", baslik: "Arda'nın Annesi", metin: [
P(S("h1D"), "Yüz on iki hesabı şikâyet ettin, “İncelemeye alındı” diye otomatik bir cevap geldi. Sabaha kadar yüz on iki yeni hesap açıldı."),
P(S("h1A"), "Kaldırdın ama yüz bin kişi çoktan indirmişti. Kaldırdığın tek şey senin adındı."),
P(S("h1B"), "Arda'nın adını hiç anmadan bir açıklama yazdın ama artık herkes adını biliyordu. Açıklaman ikinci bir ifşa gibi okundu."),
P(S("h1C"), "On kere aradın, Arda açmadı. Sonra tek kelimelik bir mesaj geldi: “Neden?”"),
"Cumartesi öğlen kapın çalıyor. Kırklarında, başörtülü, gözleri şişmiş bir kadın duruyor, Arda'nın annesi Hacer Hanım. İçeri girmiyor.",
"“Videoyu siz mi koydunuz?”",
"Evet.",
"“Oğlum dün gece banyoya kapandı, babası kapıyı kırdı. Bir şey yapmamıştı, karanlıkta oturuyordu. Telefonunda bin mesaj vardı, ‘psikopat’, ‘öl’. On altı yaşında.”",
"“Oğlumun iki yıldır okulda neler yaşadığını bilmiyordum. Dün gece bir ekrandan, bir milyon kişiyle birlikte öğrendim.”",
"“Bir öğretmeni kurtardınız, benim oğlumu kim kurtaracak?” Elindeki poşette Arda'nın ilaçları var, eczaneden dönüyormuş."
], secenekler: [
{ t: "Özür dilersin.", to: "h3", etki: { koruma: 1, ozur: true } },
{ t: "“Bu bir gün çıkacaktı Hacer Hanım,” dersin.", to: "h3", etki: { hakikat: 1 } },
{ t: "Hukuki yol için Arda'nın iki yılını belgeleyen her şeyi ona verirsin.", to: "h3", etki: { hakikat: 1, koruma: 1, belge: true } },
{ t: "Hacer Hanım'ı içeri alıp çay koyarsın.", to: "h3", etki: { koruma: 1, cay: true } }
]},

h3: { saat: "İki hafta sonra", baslik: "İkinci Dalga", metin: [
P(S("h2A"), "“Özrünüz oğlumun adını internetten silmiyor,” dedi Hacer Hanım, “ama söylediğiniz için teşekkür ederim.”"),
P(S("h2B"), "“Çıkacaktı mı?” dedi Hacer Hanım. “Asıl çıkması gereken, oğlumun iki yıl boyunca her gün eve gelip odasına kapanmasıydı. Onu kimse paylaşmadı.”"),
P(S("h2C"), "Bütün belgeleri verdin. Hacer Hanım bir avukat buldu ve Berk'in ailesine dava açıldı. Gülsüm Hanım da bir canlı yayın daha yaptı."),
P(S("h2D"), "Hacer Hanım bardağı iki eliyle tuttu ve bir saat konuşmadı. Sonra Arda'nın yedi yaşında bir kedi üstüne yazdığı ilk şiirini anlattı. Giderken “Bunu kimseye anlatmamıştım,” dedi."),
"İki hafta geçiyor. Cengiz Bey kamuoyunun baskısıyla göreve iade ediliyor. Bir programda ona “kahraman öğretmen” diyorlar, bir bakan yardımcısı ziyarete geliyor, fotoğraf çekiliyor. Cengiz Bey fotoğrafta gülümsemiyor.",
"Gülsüm Hanım önce özür diliyor, sonra hesabını kapatıyor. Berk okula gelmiyor.",
"Arda da gelmiyor. Okul onun hakkında “tehlikeli madde ile saldırı girişimi” gerekçesiyle disiplin soruşturması başlatıyor ve nakil öneriliyor.",
"Rehber öğretmen Arda'nın evden çıkmadığını, ilaç kullandığını söylüyor.",
"Bir öğleden sonra Cengiz Bey odana geliyor.",
"“Teşekkür ederim. İstemediğim bir şeyi yaptın ama beni kurtardı.”",
"“Dün Arda'ya gittim. Kapıyı annesi açtı, ‘Siz kurtuldunuz, o yandı,’ dedi.”",
"Pencereye bakıyor. “Otuz yılda ilk kez bir öğrencimi kurtaramadım, hem de beni kurtaran şey yüzünden.”"
], secenekler: [
{ t: "“Bunu ben yaptım hocam, siz değil,” dersin.", to: "t1", etki: { hakikat: 1, ben_yaptim: true } },
{ t: "“Arda'yı birlikte ziyaret edelim,” dersin.", to: "t1", etki: { koruma: 2, birlikte_ziyaret: true } },
{ t: "“Disiplin soruşturmasında Arda'yı savunacağım,” dersin.", to: "t1", etki: { koruma: 2, savunma: true } },
{ t: "Bir şey demeden pencereden birlikte bakarsınız.", to: "t1", etki: { koruma: 1 } }
]},

/* ---------- RESMÎ KOL ---------- */
r1: { saat: "Pazartesi", baslik: "Müfettiş", metin: [
P(S("a6B"), "Pazartesi sabahı erkenden okuldasın, kırk saniyeyi bir belleğe kopyalamışsın, cebinde duruyor."),
P(S("s2D"), "İpek'in videosunu aldın. “Arda bilmesin,” dedi İpek, söz vermedin."),
"Müfettiş Necdet Bey altmışlarında bir adam, kütüphanede bir masaya yerleşmiş, dosyaların yanında bir termos duruyor.",
"Telefonunu masaya koyuyorsun.",
"Necdet Bey videoyu bir kere izliyor, bir daha izliyor, üçüncüsünde yavaşlatıyor ve bir kâğıda bir şey yazıyor.",
"“Bir kopyasını alacağım, yazılı ifadenizi de alacağım. Soruşturma bitene kadar bu videoyu kimseyle paylaşmayın, bu sizin yasal yükümlülüğünüz.”",
"“Ne kadar sürecek?”",
"“Otuz gün, yönetmelik böyle.”",
"“Otuz günde Cengiz Bey'in hayatı biter.”",
"Necdet Bey gözlüğünü çıkarıyor. “Hanımefendi, ben internete bakmam, dosyaya bakarım.” Termostan kendine bir bardak çay koyuyor, sana da koyuyor."
], secenekler: [
{ t: "“Ama şu anda bir insanı öldürüyor,” dersin.", to: "r2", etki: { hakikat: 1, itiraz: true } },
{ t: "Kabul edip beklersin.", to: "r2", etki: { koruma: 1, bekle: true } },
{ t: "Hiç değilse bir ara açıklama yapılmasını istersin.", to: "r2", etki: { hakikat: 1, ara_aciklama: true } },
{ t: "İfadene Arda'nın iki yılını da eklersin.", to: "r2", etki: { hakikat: 1, koruma: 1, zorbalik_ifade: true } }
]},

r2: { saat: "İki hafta sonra", baslik: "Otuz Gün", metin: [
P(S("r1B"), "Bekleyecektin. Koridorda iki öğrenci aynı videoyu izliyordu."),
P(S("r1D"), "Tarihleri, isimleri ekledin. Necdet Bey kaşlarını kaldırdı. “Bu dosyayı genişletir,” dedi, “bir de uzatır.”"),
P(S("r1A"), "“Biliyorum,” dedi Necdet Bey, “ama benim elimde yalnızca bir dosya var, kırk yıldır da öyle.”"),
P(S("r1C"), "Bir hafta sonra ilçeden kısa bir açıklama çıktı: “Görüntülerin bağlamından koparılmış olabileceğine dair bulgular incelenmektedir.” Açıklamayı iki yüz kişi okudu, video ise yedi milyona ulaşmıştı."),
"İki hafta geçiyor.",
"Cengiz Bey evden çıkmıyor. Bir program apartmanın önüne muhabir göndermiş, bir komşu “Hep sertti,” diyor, bir başkası “Selam vermezdi,” diyor.",
"Perihan Hanım arıyor. “Bir şey biliyorsunuz, söyleyin. Dün gece onu balkonda buldum, saat üçte, korkuluğa yaslanmış, aşağı bakıyordu.”",
"Telefonda nefesini duyuyorsun.",
"“Yasal yükümlülüğünüz olduğunu biliyorum ama kocam otuz gün bekleyemez.”"
], secenekler: [
{ t: "Videoyu yalnızca Perihan Hanım'a gösterirsin.", to: "r3", etki: { hakikat: 1, koruma: 1, aytene: true } },
{ t: "Müfettişe gidip Cengiz Bey'in durumunun acil olduğunu anlatırsın.", to: "r3", etki: { hakikat: 1, acil: true } },
{ t: "Psikiyatrist bir arkadaşını arayıp Göztepe'ye gitmesini istersin.", to: "r3", etki: { koruma: 2, psikiyatrist: true } },
{ t: "Yükümlülüğünü çiğneyip videoyu paylaşırsın.", to: "h1", etki: { hakikat: 2, kol: "hakikat", gec_paylasim: true } }
]},

r3: { saat: "Bir ay sonra", baslik: "Rapor", metin: [
P(S("r2B"), "“Raporu hızlandıramam,” dedi Necdet Bey, “ama tedbirin kaldırılması için bir ara yazı yazabilirim.” Yazı on gün sonra çıktı ve kimse görmedi."),
P(S("r2A"), "Mutfakta Perihan Hanım'ın telefonunda izlediniz. Telefonu bırakıp ağladı. “Biliyordum,” dedi, “o kimseye el kaldırmazdı.” O gece kocasının yanında uyudu."),
P(S("r2C"), "Arkadaşın gitti. Cengiz Bey önce kapıyı açmadı, sonra açtı. İki saat konuştular ve bir reçete yazıldı. “Durumu ciddi,” dedi arkadaşın, “ama artık onu izleyen biri var.”"),
"Otuz birinci gün kırk iki sayfalık rapor çıkıyor.",
"“Öğretmen Cengiz Y.'nin, bir öğrencinin tehlikeli bir madde ile bir başka öğrenciye zarar vermesini engellemek amacıyla müdahale ettiği tespit edilmiştir. Darp unsuru bulunmamaktadır.”",
"Devamında “Öğrenci Berk K.'nın uzun süreli akran zorbalığı...” ve “Öğrenci Arda T.'nin rehberliğe yönlendirilmesi...” diye maddeler var.",
"Rapor ilçenin sitesinde bir pdf olarak duruyor ve on dört kişi indiriyor.",
"Video sekiz milyona ulaşmış. Cengiz Bey'in adı hâlâ “öğretmen darp” diye çıkıyor, rapor ikinci sayfada."
], secenekler: [
{ t: "Artık yasal olduğu için raporu kendi hesabından paylaşırsın.", to: "t1", etki: { hakikat: 1, rapor_paylas: true } },
{ t: "Raporu basılı olarak Cengiz Bey'e götürürsün.", to: "t1", etki: { koruma: 1, rapor_elden: true } },
{ t: "Bir gazeteciden raporun haberini yapmasını istersin.", to: "t1", etki: { hakikat: 2, gazeteci: true } },
{ t: "Bir şey yapmazsın.", to: "t1", etki: { koruma: 1, kalabalik: 1 } }
]},

/* ---------- SESSİZ KOL ---------- */
s1: { saat: "Bir hafta", baslik: "Sessizlik", metin: [
"Hiçbir şey yapmıyorsun, telefon cebinde duruyor.",
"Bir hafta geçiyor, video on milyona varıyor. Cengiz Bey'in arabası ikinci kez kırılıyor. Başka bir şehirde başka bir öğretmenin başka bir videosu çıkıyor, altında “Tıpkı Kadıköy'deki gibi” yazıyor.",
"Öğretmenler odasında Cengiz Bey'i savunanlar yalnızca odanın içinde, alçak sesle konuşuyor.",
"Arda okula geliyor. Koridorda sana bakıyor, minnet mi, başka bir şey mi, çıkaramıyorsun.",
"Berk antrenmanda gülüp duruyor, annesi hâlâ canlı yayınlarda.",
"Her akşam videoyu açıp kapatıyorsun."
], secenekler: [
{ t: "Bir gün lazım olur diye videoyu bir buluta yedeklersin.", to: "s2", etki: { hakikat: 1, yedek: true } },
{ t: "Sözünü tutmak için videoyu silersin.", to: "s2", etki: { koruma: 2, sildi: true } },
{ t: "Cengiz Bey'e her gün “Buradayım” diye bir mesaj atarsın.", to: "s2", etki: { koruma: 1, mesaj: true } },
{ t: "Berk'i antrenmanda izlersin.", to: "s2", etki: { hakikat: 1, berki_izledi: true } }
]},

s2: { saat: "İkinci hafta", baslik: "İpek", metin: [
P(S("s1A"), "Videoyu şifreli bir klasöre koyup klasörün adını “Kompozisyonlar” yaptın."),
P(S("s1C"), "Dokuz gün cevap gelmedi, onuncu gün tek kelime geldi: “Biliyorum.”"),
P(S("s1D"), "Berk bir arkadaşının sırtına vurdu, arkadaşı irkildi. Bir saat boyunca onu izledin."),
P(S("s1B"), "Videoyu sildin, “son silinenler”den de sildin. Artık yalnızca hafızanda duruyor."),
"İkinci haftanın pazartesi günü İpek seni bekliyor. On bir-C'den, Arda'nın tek arkadaşı.",
"“Hocam, bende de bir video var, laboratuvarın öbür köşesinden çekilmiş, elli saniye. Berk'in ‘At’ demesi de var, Arda'nın beheri kaldırması da.”",
"“Bu akşam paylaşacağım. Arda'ya sormadım, size soruyorum.”",
"Senin vermediğin kararı on altı yaşında bir kız vermek üzere."
], secenekler: [
{ t: "“Paylaşma İpek, Arda'yı yakarsın,” dersin.", to: "s3", etki: { koruma: 2, ece_durdur: true } },
{ t: "“Önce Arda'yla konuş, o karar versin,” dersin.", to: "s3", etki: { koruma: 1, hakikat: 1, arda_karar: true } },
{ t: "“Paylaş ama Arda'nın yüzünü sakla,” dersin.", to: "s3", etki: { hakikat: 1, ece_paylas: true } },
{ t: "İpek'in videosunu alıp müfettişe götürürsün.", to: "r1", etki: { hakikat: 1, kol: "resmi", ece_mufettis: true } }
]},

s3: { saat: "Bir ay sonra", baslik: "Boş Laboratuvar", metin: [
P(S("s2A"), "İpek paylaşmadı. Bir ay sonra koridorda karşılaştığınızda seni selamlamadı."),
P(S("s2B"), "Arda hayır dedi ama Berk'i ilk kez birine, İpek'e anlattı."),
P(S("s2C"), "İpek yüzü bulanıklaştırıp paylaştı. Ertesi sabah biri bulanıklığı kaldırdı ve Arda'nın adı gündeme oturdu."),
"Bir ay sonra Cengiz Bey istifa ediyor. Rapor çıkmış, aklanmış ama kimse okumamış.",
"Son günü cuma. Laboratuvarı topluyor, beherleri, tüpleri, köşeleri sararmış periyodik tabloyu.",
"Sen kapıdasın.",
"Bir beheri ışığa tutuyor. “Otuz yıldır söylerim, düz tut, iki elle tut, asla yüze doğru tutma.” Beheri gazete kâğıdına sarıp kutuya koyuyor.",
"“Sözünü tuttun, teşekkür ederim. Keşke tutmasaydın.”"
], secenekler: [
{ t: "“Ben de keşke tutmasaydım,” dersin.", to: "t1", etki: { hakikat: 1, keske: true } },
{ t: "Kutuyu taşımasına yardım edersin.", to: "t1", etki: { koruma: 1 } },
{ t: "“Arda iyileşiyor hocam,” dersin.", to: "t1", etki: { koruma: 1, arda_iyi: true } },
{ t: "Bir şey diyemezsin.", to: "t1", etki: { kalabalik: 1 } }
]},

/* ---------- KARŞI LİNÇ KOLU ---------- */
b1: { saat: "Cuma gecesi", baslik: "Ekran Görüntüleri", metin: [
P(function(d){ return !d.ekran; }, "İpek'e yazdın. Bir saat sonra yirmi üç ekran görüntüsü geldi, altında “Arda bilmesin hocam” yazıyordu."),
"Yirmi üç ekran görüntüsünde iki yıl var. “İbne.” “Psikopat.” “Kendini öldür.” Bir de o pazartesi sabahki mesaj: “Bugün laboratuvarda ona bir şey yapacağız, kaydedin.”",
"Arda'nın adını kapatıyorsun, yalnızca Berk'in adı kalıyor.",
"“Viral olan videodaki ‘mağdur’ öğrencinin annesi Gülsüm K. Bunlar da oğlunun iki yıl boyunca sınıf arkadaşına yaptıkları.”",
"Paylaşıyorsun.",
"Gece yarısı on bin paylaşım oluyor, sabah Gülsüm Hanım'ın hesabının altında elli bin yorum birikmiş.",
"Rüzgâr Berk'e dönüyor. “Bu çocuk bir canavar.” Basketbol formalı bir fotoğrafı dolaşıyor. “Okul numarasını bulan var mı?”",
"Sabah yedide biri Berk'in ev adresini ve babasının iş yerini paylaşıyor."
], secenekler: [
{ t: "Paylaşımı hemen kaldırırsın.", to: "b2", etki: { koruma: 1, kaldirdi: true } },
{ t: "“Lütfen çocuklara saldırmayın,” diye bir ek yazarsın.", to: "b2", etki: { koruma: 1, ek: true } },
{ t: "Gülsüm Hanım'ın bunu hak ettiğini düşünüp bekler, izlersin.", to: "b2", etki: { kalabalik: 2, izledin: true } },
{ t: "Kırk saniyelik videoyu da eklersin.", to: "b2", etki: { hakikat: 2, video_ekle: true } }
]},

b2: { saat: "Cumartesi", baslik: "Berk", metin: [
P(S("b1B"), "Ekin altına “Asıl annesine söyle” diye iki bin yorum geldi, eki kimse okumadı."),
P(S("b1D"), "Videoyu da ekledin. Kalabalık her şeyi kaptı ve iki çocuğu birden yaktı."),
P(S("b1A"), "Kaldırdın ama görüntüler çoktan yüz bin telefona girmişti."),
P(S("b1C"), "Gülsüm Hanım bir saatte otuz bin takipçi kaybetti, bir marka iş birliğini iptal etti. İçinde bir tatmin kıpırdadı, sonra dönüp o tatmine baktın."),
"Cumartesi öğleden sonra okulun boş bahçesinde, bir bankta Berk oturuyor. Üstünde eşofman var, kapüşonu başında. Seni görünce kalkacak gibi oluyor ama oturuyor.",
"Yanına oturuyorsun.",
"“Hocam, onları siz mi koydunuz?”",
"Evet.",
"Telefonunu gösteriyor, bin mesaj var. “Öl.” “Seni okulun önünde bekleyeceğiz.”",
"“Arda'ya kötü bir şey yaptım, biliyorum.” Ağlıyor. “Babam beni döver hocam. Annemin hesabı aslında onun, parayı o kazanıyor. Bu sabah çok kötüydü.”",
"Kapüşonunu indiriyor, elmacık kemiğinin üstünde bir morluk var."
], secenekler: [
{ t: "Berk'i rehber öğretmene, gerekirse polise götürürsün.", to: "b3", etki: { koruma: 2, berk_koru: true } },
{ t: "“Bu Arda'ya yaptıklarını haklı çıkarmaz,” dersin.", to: "b3", etki: { hakikat: 1 } },
{ t: "Berk'e sarılırsın.", to: "b3", etki: { koruma: 1, sarildi: true } },
{ t: "Kalkıp gidersin.", to: "b3", etki: { kalabalik: 1, gitti_b: true } }
]},

b3: { saat: "Bir hafta sonra", baslik: "Döngü", metin: [
P(S("b2B"), "“Biliyorum,” dedi Berk, “ama bunu da haklı çıkarmaz,” deyip morluğu gösterdi."),
P(S("b2D"), "Kapıda dönüp baktın, Berk bankta oturuyordu, kapüşonu yine başındaydı."),
P(S("b2A"), "Rehber öğretmen, bir doktor ve bir sosyal hizmet uzmanı devreye girdi, babası hakkında soruşturma açıldı. Berk Bursa'ya, anneannesinin yanına gitti. Sonra bir mesaj attı: “Arda'dan özür dileyeceğim, bir gün.”"),
P(S("b2C"), "Önce kaskatı kesildi, sonra omzunda bir çocuk gibi ağladı. Bunu kimseye anlatmadın."),
"Bir haftada rüzgâr üç kere dönüyor. Önce Cengiz Bey'e, sonra Berk'e, sonra bir gazetecinin “Öğretmen öğrenciyi ifşa etti” haberiyle sana.",
"Bir programda “Öğretmenin çocuk ifşası etik mi?” diye tartışılıyor. Bir milletvekili soru önergesi veriyor, bu kez senin hakkında.",
"Milli Eğitim “öğrenci kişisel verilerinin izinsiz paylaşımı” gerekçesiyle soruşturma açıyor ve sözleşmen askıya alınıyor.",
"Bilinmeyen bir numaradan bir mesaj geliyor: “Sen de artık bizim gibisin.”"
], secenekler: [
{ t: "Soruşturmada her şeyi kabul edersin.", to: "t1", etki: { hakikat: 2, kabul: true } },
{ t: "“Bir çocuğu korumaya çalıştım,” diyerek kendini savunursun.", to: "t1", etki: { koruma: 1, savun: true } },
{ t: "Mesaja “Evet” diye cevap yazarsın.", to: "t1", etki: { hakikat: 1, evet: true } },
{ t: "Telefonunu kapatıp bir hafta açmazsın.", to: "t1", etki: { kalabalik: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Bir ay sonra", baslik: "Öğretmenler Odası", metin: [
P(S("h3A"), "Cengiz Bey başını salladı. “Biliyorum,” dedi, “ama faydalanan benim. Bunu nasıl taşıyacağımı bilmiyorum.”"),
P(S("h3B"), "Birlikte Arda'nın evine gittiniz. Hacer Hanım perdenin arkasından baktı ama açmadı. İkinci hafta açtı. Arda odasından çıkmadı, yalnızca kapısını araladı."),
P(S("h3C"), "Kurulda iki saat boyunca ekran görüntüleriyle Arda'yı savundun ve uzaklaştırma bir haftaya indi. Çıkarken bir öğretmen “Önce yakıp sonra savunmak, ilginç bir yöntem,” dedi."),
P(S("h3D"), "Aşağıda bahçede çocuklar top oynuyordu. Top bir ara kantinin camına çarptı ve ikiniz de irkildiniz."),
P(S("r3A"), "Kırk iki sayfayı üç günde iki bin kişi gördü. Videoyu sekiz milyon kişi görmüştü."),
P(S("r3B"), "Cengiz Bey raporun kapağına bakıp masaya koydu. “Kızım bu otuz günde okul değiştirdi,” dedi."),
P(S("r3C"), "Haber bir sitenin dördüncü sayfasında “Darp iddiasındaki öğretmen aklandı” başlığıyla çıktı. Altında üç yorum vardı, biri “Yine de bir şey yapmıştır” diyordu."),
P(S("r3D"), "Adalet yerini bulmuştu, diye söyledin kendine, her sabah biraz daha az inanarak."),
P(S("s3A"), "Cengiz Bey kutuyu kaldırdı. “O zaman ikimiz de keşkeyle yaşarız,” dedi."),
P(S("s3B"), "Kutuyu otoparka kadar birlikte taşıyıp bagaja koydunuz. Teşekkür etmedi, etmesine gerek de yoktu."),
P(S("s3C"), "Cengiz Bey gözlerini kapadı. “İyi,” dedi, “o zaman bir şey işe yaramış.”"),
P(S("s3D"), "Koridorun sonunda bir an durdu ama arkasına bakmadı."),
P(S("b3A"), "Ekran görüntülerini, bir çocuğun adresinin yayılmasına yol açtığını, her şeyi kabul ettin. Sözleşmen askıya alındı."),
P(S("b3B"), "“Bir çocuğu korumaya çalıştım,” dedin. Kurul başkanı “Hangisini?” diye sordu ve cevap veremedin."),
P(S("b3C"), "“Evet,” diye yazdın. Cevap gelmedi, sen de kendi cevabını defalarca okudun."),
P(S("b3D"), "Bir hafta sonra telefonu açtığında dört yüz bildirim vardı, hiçbirine bakmadan hepsini sildin."),
"Bir ay sonra, bir pazartesi sabahı öğretmenler odasındasın. Çay ocağının önünde kuyruk var, herkes telefonuna bakıyor ama bu kez başka bir şehirden başka bir videoya.",
"Bir ay geçti ama arama motoru unutmuyor.",
P(function(d){ return d.kol === "hakikat"; }, "Bazıları sana kahramanmışsın gibi bakıyor, bazıları başka türlü. Serkan Bey alçak sesle “Ben yapamazdım,” diyor, “doğru mu yaptın bilmiyorum ama yaptın.”"),
P(function(d){ return d.kol === "resmi"; }, "Serkan Bey “Cengiz Hoca aklanmış diyorlar, nereden çıktı bu?” diye soruyor. Bir dosyadan çıktı. “Kim verdi peki?” Sen çayını karıştırıyorsun."),
P(function(d){ return d.kol === "sessiz"; }, "Cengiz Bey'in masası boş. Biri üstüne bir karanfil koymuş, karanfil kurumuş ama kimse kaldırmıyor."),
P(function(d){ return d.kol === "karsi"; }, "Öğretmenler odasına girmiyorsun. Bir arkadaşın panonun fotoğrafını gönderiyor, biri “Çocukları sosyal medyada ifşa etmeyin” yazan imzasız bir kâğıt asmış."),
"Şükran Hanım seni odasına çağırıyor.",
"“Kadro kontenjanı açıldı ve adın listede. Sana bir şey soracağım. O günden beri bu okulda bir şey değişti mi?”"
], secenekler: [
{ t: "“Hiçbir şey değişmedi hocam,” dersin.", to: "t1b", etki: { hakikat: 1, degismedi: true } },
{ t: "“Ben değiştim,” dersin.", to: "t1b", etki: { koruma: 1 } },
{ t: "Okulda akran zorbalığına karşı bir program önerirsin.", to: "t1b", etki: { koruma: 2, program: true } },
{ t: "“Kadroyu hak edip etmediğimi bilmiyorum,” dersin.", to: "t1b", etki: { hakikat: 1 } }
]},

t1b: { saat: "Bir ay sonra", baslik: "Gülsüm", metin: [
P(S("t1A"), "“Ben de öyle düşünüyorum,” dedi Şükran Hanım. Liste o akşam açıklandı ve adın yoktu. “Bir sonraki dönem,” dediler."),
P(S("t1B"), "“İyi yönde mi, kötü yönde mi?” diye sordu, bilmiyordun. Adın listeye girdi ama sevinmedin."),
P(S("t1D"), "Şükran Hanım gözlüğünü çıkardı. “Bunu soran ilk öğretmensin,” dedi ve adını listeye yazdı."),
P(S("t1C"), "“Bütçe yok,” dedi Şükran Hanım, “ama sen yap, benim adımı da koy.” Ertesi hafta on bir-C'de ilk oturum yapıldı. Arda yoktu, İpek vardı."),
"Bir akşam Kadıköy'de bir kafede biri karşına oturuyor. Sade giyinmiş, güneş gözlüklü bir kadın, gözlüğünü çıkarıyor. Gülsüm Hanım.",
"“Konuşabilir miyiz?” Sesi ekrandakinden çok farklı, kısık.",
"“Berk o akşam eve gelip ‘Cengiz Hoca bana bağırdı’ dedi. Sordum mu? Sormadım. Bir video vardı, paylaştım.”",
"“Bir gecede iki milyon oldu. Bir an iyi hissettim, haklı olmak güzeldi, iki milyon kişi benimle aynı şeyi düşünüyordu.”",
"“Sonra aynı iki milyon beni yaktı. O iki milyon ne benim yanımdaydı ne de Cengiz Hoca'nın.”",
P(function(d){ return d.kol === "karsi"; }, "Sana bakıyor. “Siz de benim oğlumu yaktınız, şimdi aynı masada oturuyoruz.”"),
"Gözlüğünü masaya bırakıp sapını çevirip duruyor."
], secenekler: [
{ t: "Berk'in nasıl olduğunu sorarsın.", to: "t2", etki: { koruma: 1, berk_sordu: true } },
{ t: "“Cengiz Hoca'dan özür dilediniz mi?” diye sorarsın.", to: "t2", etki: { hakikat: 1, ozur_sordu: true } },
{ t: "Bir şey demeden dinlersin.", to: "t2", etki: { koruma: 1 } },
{ t: "Onun pişmanlığını taşımanın senin işin olmadığını düşünüp kalkıp gidersin.", to: "t2", etki: { kalabalik: 1, kalkti: true } }
]},

t2: { saat: "Bahar dönemi", baslik: "Ders", metin: [
P(S("t1bA"), "“Okul değiştirdi,” dedi. “Gece kalkıp telefonunu kontrol ediyor. On altı yaşında ve uyuyamıyor.” Gözlüğünü taktı."),
P(S("t1bB"), "“Bir mektup yazdım ama göndermedim,” dedi. Masada üstüne bir adres yazılmış bir peçete bıraktı, Göztepe."),
P(S("t1bC"), "Bir saat konuştu. Sonunda “İki milyon kişi bana bağırdı, bir kişi dinledi,” dedi."),
P(S("t1bD"), "Kalkıp gittin. Kapıda dönmek istedin ama dönmedin."),
"Bahar dönemi geldi, sıra “Roman” ünitesinde. On birlere bir kitap seçeceksin.",
"Listede Tutunamayanlar, Kürk Mantolu Madonna, Suç ve Ceza var. Bir de listede olmayan Kafka'nın Dava'sı var, Josef K.'nin bir sabah neyle suçlandığını bilmeden tutuklandığı kitap.",
"Ya da kitap yerine bir mektup okuyabilirsin, o pazartesiyi kendi ağzından anlatırsın.",
"Otuz iki öğrencinin hepsi o videoyu izledi, belki bazıları paylaştı da.",
P(function(d){ return d.kol !== "karsi"; }, "Arda arka sırada oturuyor. Bir ay sonra döndü, başka bir şubeye geçti ama yine senin dersinde."),
P(function(d){ return d.kol === "karsi"; }, "Sözleşmen bir uyarıyla geri verildi ve bu ilk dersin. Arda arka sırada oturuyor."),
"Sınıftan birinin o sekiz saniyeyi ilk paylaşan kişi olduğunu biliyorsun ama kim olduğunu bilmiyorsun."
], secenekler: [
{ t: "Dava'yı okutursun.", to: "y_dava", etki: { hakikat: 1, dava: true } },
{ t: "Sınıfa o pazartesi hakkında kendi yazdığın bir mektubu okursun.", to: "y_mektup", etki: { hakikat: 1, koruma: 1, mektup: true } },
{ t: "Konuyu açmamanın da bir koruma olduğunu düşünüp listeden bir klasik seçersin.", to: "t3", etki: { koruma: 1, klasik: true } },
{ t: "Belki biraz da kaçarak, öğrencilere ne okumak istediklerini sorarsın.", to: "t3", etki: { koruma: 1, sordu_ogr: true } }
]},

y_dava: { saat: "Bahar", baslik: "Josef K.", metin: [
"İlk cümleyi tahtaya yazıyorsun: “Birisi Josef K.'ye iftira etmiş olmalıydı...”",
"Bir hafta boyunca okuyorsunuz. Tavan arasında bir mahkeme, görünmeyen yargıçlar, kimsenin söylemediği bir suç.",
"İpek el kaldırıyor. “Josef K. neyle suçlandığını hiç öğrenmiyor, değil mi? O zaman kendini nasıl savunuyor?”",
"Savunamıyor.",
"Biri “Ama bu bir kitap,” diyor, “gerçekte deliller var.”",
"İpek ona dönüyor. “Sekiz saniye vardı. Ne mahkeme vardı ne delil.”",
"Arka sırada Arda başını kaldırıyor."
], secenekler: [
{ t: "İpek'e teşekkür edip konuyu kitapta tutarsın.", to: "t3", etki: { koruma: 1 } },
{ t: "Sınıfa “Siz o sekiz saniyeyi görünce ne düşündünüz?” diye sorarsın.", to: "t3", etki: { hakikat: 2, sinif_soru: true } },
{ t: "Konuşmak isteyip istemediğini anlamak için Arda'ya bakarsın.", to: "t3", etki: { koruma: 1, ardaya_bakti: true } },
{ t: "Kitabın son cümlesini okursun: “Bir köpek gibi!”", to: "t3", etki: { hakikat: 1 } }
]},

y_mektup: { saat: "Bahar", baslik: "Mektup", metin: [
"Üç gece yazıp on kere sildiğin bir kâğıdı açıyorsun.",
"“Sevgili on birler. Bu bir edebiyat dersi değil, ya da tam olarak öyle, çünkü edebiyat bir hikâyenin önünü de arkasını da görmeyi öğretir.”",
"O pazartesiyi okuyorsun, kapıyı, telefonu, kırk saniyeyi. Sonra salıyı, yorumları ve kendi ne yaptığını.",
P(function(d){ return d.kol === "hakikat"; }, "“Videoyu paylaştım. Bir öğretmeni kurtardım, bir öğrenciyi yaktım.”"),
P(function(d){ return d.kol === "sessiz"; }, "“Sustum. Bir öğrenciyi korudum, bir öğretmeni kaybettik.”"),
P(function(d){ return d.kol === "resmi"; }, "“Bir dosya, bir müfettiş, otuz gün. Adalet geldi ama kimse fark etmedi.”"),
P(function(d){ return d.kol === "karsi"; }, "“Bir öğrencinin acısını göstermek için başka bir öğrenciyi ifşa ettim.”"),
"“Bir gün sizin de telefonunuzda bir video olacak. Paylaşmadan önce kendinize şunu sorun, bu hikâyenin önünde ne var, arkasında kim kalacak?”",
"Kâğıdı katlıyorsun. Arka sıradan bir ses geliyor, Arda."
], secenekler: [
{ t: "Arda'yı dinlersin.", to: "t3", etki: { koruma: 1, arda_soz: true } },
{ t: "Mektubu panoya asarsın.", to: "t3", etki: { hakikat: 1, pano: true } },
{ t: "Mektubu Cengiz Bey'e gönderirsin.", to: "t3", etki: { hakikat: 1, cengize_mektup: true } },
{ t: "Mektubu yırtarsın.", to: "t3", etki: { koruma: 1 } }
]},

t3: { saat: "Haziran", baslik: "Cengiz Bey", metin: [
P(S("t2C"), "Kürk Mantolu Madonna'yı okuttun, kimse o pazartesiden söz etmedi. Son derste Arda “Raif Efendi neden kimseye anlatmadı?” diye sordu, cevap veremedin."),
P(S("t2D"), "İpek “Bir zorbalık kitabı olsun,” deyince gergin bir gülüşme oldu. Oylamada Sefiller çıktı, bir ekmek için on dokuz yıl."),
P(S("y_davaA"), "Zil çalınca herkes çıktı, İpek kaldı. “Ben o videoyu ilk görenlerdendim,” dedi. “Paylaşmadım ama durdurmadım da.”"),
P(S("y_davaB"), "Uzun bir sessizlik oldu. Sonra Batu “Ben paylaştım hocam,” dedi, “gece yarısı, herkes paylaşıyordu.” Sınıf ona döndü, Arda dönmedi."),
P(S("y_davaC"), "Arda başını iki yana salladı. Ders bitince kitabın bir sayfasının köşesini kıvırdığını gördün."),
P(S("y_davaD"), "“Bir köpek gibi!” diye okudun. İpek devamını fısıldadı: “Ve utanç ondan sonra da yaşayacakmış gibiydi.”"),
P(S("y_mektupB"), "Ertesi sabah biri mektubun altına “Biz de oradaydık” yazan bir kâğıt iliştirmişti. Üç gün sonra bir başkası altına “Ben de” yazdı."),
P(S("y_mektupC"), "Bir hafta sonra Moda iskelesi resimli bir kartpostal geldi, arkasında tek satır vardı: “Kapıda durmak da bir şeydir.”"),
P(S("y_mektupD"), "Mektubu sınıfın önünde yırttın. Ders bitince Arda çöp kutusunun başında durup parçalara baktı ama almadı."),
P(S("y_mektupA"), "“Ben de bir mektup yazacağım,” dedi Arda, “Berk'e.” Bunu söylerken başını eğmedi."),
"Haziranda Cengiz Bey'den bir mesaj geliyor: “Moda'da bir çay bahçesi, saat on.”",
"Denize bakan bir masada oturuyor. Zayıflamış ama yüzünde birkaç ay önce olmayan bir şey var.",
P(function(d){ return d.kol === "sessiz"; }, "Maaşından kesinti yapılmasına razı olup erken emekli olmuş. “Başka bir okulda çalışamazdım,” diyor, “her koridorda bir telefon var.”"),
P(function(d){ return d.kol !== "sessiz"; }, "Üsküdar'da bir meslek lisesine geçmiş. “Orada kimse beni umursamıyor,” diyor, “çocukların kendi dertleri var.”"),
"Çaylar geliyor.",
"“Arda bana bir mektup yazdı,” diyor ve bir defter sayfası çıkarıyor, sana uzatmıyor, elinde tutuyor.",
"“Ben kimyacıyım, şiirden anlamam. Ama bir dizesi var.” Okuyor: “Bir el kolumu tuttu ve ilk kez düşmediğimi anladım.”",
"Kâğıdı katlayıp cebine koyuyor, gözlüğünü çıkarıp siliyor."
], secenekler: [
{ t: "“Sekiz saniye değil hocam, kırk saniye,” dersin.", to: "t4", etki: { hakikat: 1 } },
{ t: "Bir şey demeden çayını içersin.", to: "t4", etki: { koruma: 1 } },
{ t: "Ne yaptıysan ya da yapmadıysan, onun için özür dilersin.", to: "t4", etki: { koruma: 1, cengiz_ozur: true } },
{ t: "“Arda'yla görüşmek ister misiniz?” diye sorarsın.", to: "t4", etki: { koruma: 1, gorus: true } }
]},

t4: { saat: "Eylül", baslik: "Arda'nın Defteri", metin: [
P(S("t3A"), "Cengiz Bey gülümsedi. “Otuz iki saniyelik bir fark,” dedi, “ben o farkın içinde yaşadım.”"),
P(S("t3B"), "Martılar uçuşuyor, vapurlar geçiyordu. Bir saat sonra kalktınız, kapıda “Yine gel,” dedi."),
P(S("t3C"), "Elini kaldırdı. “Öğretmen özrünü öğrenciye diler,” dedi, “bana değil.”"),
P(S("t3D"), "“Henüz değil,” dedi, “o hazır olunca.”"),
"Eylülde, okulun ilk günü masanda mavi kapaklı, köşeleri yıpranmış bir defter buluyorsun. Üstünde “İrem Hocam'a. Arda.” yazıyor.",
"İçinde iki yıllık şiirler var, bazıları grupta alay edilenler.",
"Son sayfadakinin adı “Sekiz Saniye.”",
"“Bir şehir bir çocuğu bir gecede tanıdı,\nadını bilmeden, yüzünü bilmeden.\nBir öğretmeni bir gecede tanıdı,\notuz yılını bilmeden.\nBir kalabalık bir beheri gördü,\nbeheri tutan eli görmedi.\nBen o elim.\nBen o beherim.\nBen o kalabalığım da.”",
"Altında küçük bir not var: “Sınıfta okuyabilirsiniz, benim adımla. Artık saklanmak istemiyorum.”",
"Arda üçüncü sırada oturmuş, pencereden dışarı bakıyor."
], secenekler: [
{ t: "Şiiri sınıfta Arda'nın adıyla okursun.", to: "ls", etki: { hakikat: 1, okudu_siir: true } },
{ t: "Arda'yı bir kez daha korumak için şiiri sınıfta adsız okursun.", to: "ls", etki: { koruma: 1, adsiz: true } },
{ t: "Şiiri Arda'nın kendisinin okumasını istersin.", to: "ls", etki: { koruma: 1, hakikat: 1, arda_okudu: true } },
{ t: "Defteri şimdilik kapatırsın.", to: "ls", etki: { koruma: 1 } }
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
P(S("t4B"), "Şiiri adsız okumuştun, Arda pencereden dışarı baktı."),
P(S("t4D"), "Defteri kapatmıştın."),
"Kırk saniyeyi gösterdin ve bir öğretmen aklandı. Kalabalık bir hafta boyunca özür diledi, bir çocuğun adı da bir hafta boyunca gündemde kaldı.",
P(function(d){ return d.arda_okudu || d.okudu_siir; }, "Şiir Arda'nın adıyla okundu. Önce biri alkışladı, İpek, sonra herkes. Arda kıpkırmızı oldu, sıranın altında ellerini sıktı."),
"Bazı geceler pişman oluyorsun, bazı sabahlar olmuyorsun.",
"Telefonunda hâlâ o kırk saniye duruyor. Her yıl biri “Hocam, o videoyu neden paylaştınız?” diye soruyor ve her yıl cevabın biraz değişiyor."
]},

son_dosya: { son: true, baslik: "Dosya", metin: [
P(S("t4B"), "Şiiri bir dosyadaki adsız bir tanık ifadesi gibi adsız okumuştun."),
P(S("t4D"), "Defteri çekmecene, raporun yanına koymuştun."),
"Bir müfettiş, bir ifade ve kırk iki sayfa oldu, kimse fark etmedi.",
P(function(d){ return d.gazeteci; }, "Haber on bin kere okundu. Video sekiz milyon kere izlenmişti."),
"Arda'nın adı hiçbir yerde geçmedi. Cengiz Bey ise otuz gün boyunca gecenin üçünde bir balkonda durdu.",
"Necdet Bey'in sözü aklından çıkmıyor: “Ben dosyaya bakarım.”",
"Bir gün pdf'i yeniden açıyorsun. On dördüncü sayfada bir dipnot var: “Öğretmen İrem K.'nın sunduğu görüntüler belirleyici olmuştur.” Adın bir dipnotta geçiyor."
]},

son_sekiz: { son: true, baslik: "Sekiz Saniye", metin: [
P(S("t4B"), "Şiiri adsız okumuştun, yine onun yerine sen karar vermiştin."),
P(S("t4D"), "Defteri kapatmıştın, zamanını da sen seçmiştin."),
"Sustun ve Arda'nın adı hiçbir yerde geçmedi.",
"Cengiz Bey istifa etti. Bir rapor onu akladı ama kimse okumadı.",
"“Sil onu,” demişti, sen de onu dinledin.",
P(function(d){ return d.ece_paylas; }, "Sen sustuğun sırada İpek konuştu, hem de senin “Paylaş” demenle, ve bir çocuk yine yandı."),
"Arda iyileşiyor. Bir psikiyatrist, ilaçlar, İpek ve bir defter onu ayakta tutuyor. Bir gün sana “Siz susmasaydınız ben bugün burada olmazdım,” dedi. Doğruydu, ama bir öğretmenin otuz yılı pahasına.",
"Bazen Moda'daki bir çay bahçesinin önünden geçiyorsun. Cengiz Bey her sabah orada oturuyor, bazen el sallıyor, bazen sallamıyor."
]},

son_hedef: { son: true, baslik: "Yirmi Üç Görüntü", metin: [
P(S("t4B"), "Şiiri adsız okumuştun. Bir adı saklamayı ancak başka bir adı yaktıktan sonra öğrendin."),
P(S("t4D"), "Defteri kapatmıştın, bir şeyi açmaktan korkuyordun."),
"Kalabalığı çevirdin, o da gösterdiğin yöne dönüp oradaki çocuğu yaktı.",
"Berk iki yıl boyunca bir çocuğa eziyet etti ve bir babadan dayak yedi, ikisi aynı anda oluyordu.",
P(function(d){ return d.berk_koru; }, "Berk Bursa'dan el yazısıyla bir mektup gönderdi: “Siz beni ifşa ettiniz, sonra kurtardınız. Ben de Arda'yı bir şey olsun diye o laboratuvara götürmüştüm. Belki birinin beni durdurmasını istiyordum.”"),
"Gülsüm Hanım o kafede “Siz doğru tarafta durduğunuzu sanıyordunuz, ben de öyle sanıyordum,” demişti.",
"Bilinmeyen numaradan gelen “Sen de artık bizim gibisin” mesajını silmedin."
]},

son_ogretmen: { son: true, baslik: "Öğretmen", metin: [
P(S("t4B"), "Şiiri adsız okumuştun. Sınıfın yarısı kimin yazdığını biliyordu ama kimse söylemedi."),
P(S("t4D"), "Defteri kapatmıştın ama haziranda, son derste Arda onu kendisi açıp kendi sesiyle okudu."),
"Kalabalığı durduramadın ama bir sınıfı bir saatliğine durdurdun.",
"Cengiz Bey'in otuz yılı, Arda'nın adı, Berk'in yüzü, hiçbiri geri gelmiyor.",
P(function(d){ return d.program; }, "Programın ikinci yılında Arda ile İpek “Önü ve Arkası” adında bir grup kurdu. Toplantılar salı öğle aralarında kimya laboratuvarında, Cengiz Bey'in eski masasında yapılıyor."),
"Her dönemin başında Arda'nın şiirini onun adıyla okuyorsun.",
"Her dönem biri “Hocam, o gün siz neredeydiniz?” diye soruyor. “Kapıdaydım,” diyorsun."
]}

},

ayna: function(d){
  var out = [];
  var h = d.hakikat, k = d.koruma, c = d.kalabalik;
  if(h >= k && h >= c) out.push("Çoğu kavşakta olanı göstermeyi seçtin, videoyu, dosyayı, mektubu.");
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
