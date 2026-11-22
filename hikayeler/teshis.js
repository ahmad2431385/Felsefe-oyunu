(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "teshis",
baslik: "Teşhis",
dunya: "Gerçek dünya",
kategoriler: ["Sağlık ve Tıp", "Aile ve Hafıza"],
giris: "Ankara'da bir onkoloji servisi. Dört yüz on iki numaralı odada emekli bir marangoz, hastane kurallarına rağmen torunu için ceviz bir beşik oyuyor. Sonuçları sen biliyorsun; oğlu da biliyor. Oğlu “Babama söylemeyin” diyor. Usta ise her sabah sana ne zaman evine döneceğini soruyor. Bir hekimin hastasına ne kadar gerçeği borçlu olduğunun ve bir ailenin sevgisinin bazen bir yalanın içinden geçtiğinin hikâyesi.",
kavramlar: ["Hastanın özerkliği", "Hakikat ve umut", "Merhametli yalan", "Ölümle yüzleşme"],
ozet: "Bir marangoz ustası hastane odasında torununa beşik oyuyor. Sonuçları sen biliyorsun, oğlu da biliyor. Oğlu “Babama söylemeyin” diyor. Usta ise sana her sabah aynı soruyu soruyor.",
baslangic: "a1",
durum: { dogruluk: 0, sefkat: 0, ozerklik: 0 },

sahneler: {

a1: { saat: "Kasım, 07.10", baslik: "Film", metin: [
"Sabahın yedisinde onkoloji servisinin doktor odasında, ekranın ışığında tek başınasın. Adın Ayla, kırk sekiz yaşındasın; yirmi yıldır kanserle, daha doğrusu kanserin insanlara yaptıklarıyla uğraşıyorsun.",
"Ekranda dün çekilen PET görüntüleri. Pankreasın başında bir kitle; karaciğerde, akciğerin tabanında, karın zarında parlayan noktalar. Bir yıldız haritası gibi. Bu haritayı okumayı yıllar önce öğrendin. Ne anlama geldiğini bilmek için raporu beklemene gerek yok.",
"Hasta: Hasan Yıldız, altmış iki yaşında, Çorum'dan, emekli marangoz. Servistekiler ona “Usta” diyor; ilk gün hemşirelerin kırık bir sandalyesini tamir etti. Evre dört. Ameliyat şansı yok. Tedaviyle belki altı ay, tedavisiz üç dört ay.",
"Bu cümleleri bir hastaya yüzlerce kez söyledin. Her seferinde kelimelerin ağırlığı değişti; ama hiç hafiflemedi.",
"Odadan çıktığında koridorda biri bekliyor. Otuz beş yaşlarında, takım elbiseli, gözleri uykusuz. Hasan Bey'in oğlu Murat. Raporu senden önce internetten görmüş; hastanenin sistemi aileye de açık.",
"Kolunu tutuyor. Sesini alçaltıyor ama sesi titriyor.",
"“Hocam, babama söylemeyin. Lütfen. Annem öldüğünde iki ay kimseyle konuşmadı. Kalbi kaldırmaz. Siz bir şey uydurun, ben de bir şey uydururum. Bırakın umutla gitsin.”"
], secenekler: [
{ t: "“Bunu ancak babanızla konuşarak karar verebiliriz,” dersin.", to: "a2", etki: { ozerklik: 1 } },
{ t: "“Anlıyorum,” dersin. Ve gerçekten anlıyorsun.", to: "a2", etki: { sefkat: 1, murata_anlayis: true } },
{ t: "“Yasa, hastanın bilgilendirilmesini gerektiriyor,” dersin.", to: "a2", etki: { dogruluk: 1 } },
{ t: "Murat'a babasını sorarsın: nasıl bir adam olduğunu.", to: "a2", etki: { sefkat: 1, murat_anlatti: true } }
]},

a2: { saat: "Kasım, 09.30", baslik: "Dört Yüz On İki", metin: [
P(S("a1A"), "Murat'ın yüzü kapandı. “Babamı tanımıyorsunuz,” dedi ve gitti. Haklıydı. Tanımıyordun."),
P(S("a1B"), "Murat'ın omuzları düştü; teşekkür etti, sanki bir şey vaat etmişsin gibi. Hiçbir şey vaat etmedin. Ama bir şeyin vaat edilmiş gibi durduğunu biliyorsun."),
P(S("a1C"), "“Yasa,” dedi Murat. “Yasa babamın yanında mı oturacak gece?” Cevap veremedin. Yasa gerçekten de geceleri kimsenin yanında oturmaz."),
P(S("a1D"), "Murat anlattı: babasının atölyesini, talaş kokusunu, bir gün ona bir sandalye yapmayı öğrettiğini. “Bir tahtanın içinde çürük varsa,” derdi, “dışından anlaşılmaz. Rendelersin, çıkar.” Bunu anlatırken Murat ağladı, sonra özür diledi."),
"Dört yüz on iki numaralı oda. Hasan Bey yatağında oturuyor, dizlerinde bir havlu, havlunun üstünde talaş. Elinde bir çakı ve bir parça ceviz. Hemşireler kesici alet yasak diye üç kez uyarmış; üç kez gülümsemiş, çakıyı yastığın altına koymuş, sonra yine çıkarmış.",
"“Gel doktor hanım,” diyor. “Bak, bir kuş. Beşiğin başına takacağım. Torunum olacak, dört ay sonra. Murat'ın hanımı. Beşiği ben yapıyorum; atölyede yarısı hazır. Bu kuşu da burada yapayım dedim, eller boş durmasın.”",
"Yüzü sarı. Gözlerinin beyazı sarı. Ama elleri sağlam; ceviz onun elinde bir tüye dönüşüyor.",
"Kuşu ışığa tutup bakıyor. Sonra sana bakıyor. “Ne zaman çıkarım buradan? Beşiği bitirmem lazım.”"
], secenekler: [
{ t: "“Sonuçlara bakıyoruz Usta. Biraz daha zaman lazım,” dersin.", to: "a3", etki: { sefkat: 1, kacamak: true } },
{ t: "“Ne kadarını bilmek istersiniz?” diye sorarsın.", to: "x_bilmek", etki: { ozerklik: 1, sordu: true } },
{ t: "“Sonuçlar ciddi Usta,” dersin. Ne kadar ciddi olduğunu söylemeden.", to: "a3", etki: { dogruluk: 1, ciddi: true } },
{ t: "Yatağın kenarına oturup beşiği sorarsın.", to: "x_besik", etki: { sefkat: 1 } }
]},

x_bilmek: { saat: "Kasım, 09.45", baslik: "Rende", metin: [
"Hasan Bey çakıyı bırakıyor. Kuşu havlunun üstüne, özenle, kanatları yukarı bakacak şekilde koyuyor. Sonra sana dönüyor.",
"“Doktor hanım,” diyor, “ben kırk yıl marangozluk yaptım. Bir tahtanın içinde çürük varsa, rendelemeden bilirim. Ağırlığından, sesinden, kokusundan. Sen bana tahtayı gösterme. Ben zaten biliyorum.”",
"Pencereye bakıyor. Kasım güneşi, Ankara'nın griliğinin içinden zor sızıyor.",
"“Murat'ın yüzünden okudum. Dün akşam elimi tuttu. Murat benim elimi on yaşından beri tutmaz. Bir şey biliyor. Ben de bildiğimi ona belli etmedim.”",
"Bir süre susuyor. Sonra sesini alçaltıyor, sanki koridorda biri dinliyormuş gibi.",
"“Bak ne diyeceğim. Ne biliyorsan bana söyle. Ama Murat'a söylediğini söyleme. O beni koruduğunu sansın. Babası olarak ona bunu borçluyum. Bir babanın son işi, oğluna onu korumuş olduğu hissini bırakmaktır.”",
"Bir hasta, bilmek istiyor. Ve bildiğini saklamak istiyor. Bir yalanı, sevdiği biri için, iki taraflı kurmak istiyor. Bu teklifin içinde ne kadar sevgi, ne kadar yük var, ölçemiyorsun."
], secenekler: [
{ t: "Kabul edersin. Ona her şeyi söyleyecek, Murat'a hiçbir şey söylemeyeceksin.", to: "a3", etki: { ozerklik: 1, cift_sir: true, biliyor: true } },
{ t: "“Murat'la konuşmanız gerek, Usta. İkiniz de birbirinizi korurken yalnız kalacaksınız,” dersin.", to: "a3", etki: { dogruluk: 1 } },
{ t: "“Yarın,” dersin. “Yarın her şeyi konuşacağız.” Bir gün kazanmak için.", to: "a3", etki: { soz_yarin: true } },
{ t: "“Ne kadarını bilmek istersiniz?” diye yeniden sorarsın. Her şey değil belki.", to: "a3", etki: { ozerklik: 1, zaman_ister: true } }
]},

x_besik: { saat: "Kasım, 09.45", baslik: "Beşik", metin: [
"Yatağın kenarına oturuyorsun. Hasan Bey şaşırıyor; doktorlar hastaların yatağına oturmaz. Sonra memnun bir şekilde kuşu sana uzatıyor.",
"“Ceviz,” diyor. “Babamın bahçesindeki ağaçtan. Ağaç kırk yıl önce kurudu, kestim, kurusun diye çatıda sakladım. Kırk yıl. Neye yapacağımı bilmiyordum. Murat'ın hanımı hamile kalınca anladım: beşiğe.”",
"Elleriyle havada bir şekil çiziyor. “Sallanır ama devrilmez. Başında bu kuş olacak; bebek uyanınca ilk onu görsün. Kenarlarına babamın adını oyacağım, annemin adını, hanımımın adını. Torunum büyüyünce bilsin, kimlerin içinden geçti.”",
"Bir süre susuyor. Sonra kuşu senin elinden alıp yeniden işlemeye başlıyor; sana bakmadan:",
"“Dört ay var doğuma. Atölyede yarısı hazır. Dört ay yeter mi doktor hanım?”",
"Soru beşik hakkında. Ya da değil. Bir insan bazen doğrudan soramayacağı bir şeyi, bir tahtanın içinden sorar. Ve sen bu sorunun hangi soru olduğunu biliyorsun. O da bildiğini biliyor mu?",
"Çakı cevizin üstünde kayıyor. Bir talaş kıvrılıp havlunun üstüne düşüyor."
], secenekler: [
{ t: "“Yeter,” dersin.", to: "a3", etki: { sefkat: 1, yeter_dedi: true } },
{ t: "“Acele edin Usta,” dersin. Başka bir şey eklemeden.", to: "a3", etki: { dogruluk: 1, acele: true } },
{ t: "“Bilmiyorum,” dersin. Doğru olan bu.", to: "a3", etki: { dogruluk: 1 } },
{ t: "“Aletlerinizi buraya getirtelim,” dersin. “Beşiği burada bitirin.”", to: "a3", etki: { sefkat: 1, alet: true } }
]},

a3: { saat: "Kasım, 13.00", baslik: "Konsey", metin: [
P(function(d){ return d.son === "a2A"; }, "Hasan Bey başını salladı, “Peki,” dedi. Kuşu işlemeye devam etti. Sen kapıdan çıkarken arkandan söyledi: “Zaman lazım, değil mi? Zaman hep lazım.”"),
P(function(d){ return d.son === "a2C"; }, "“Ciddi,” diye tekrarladı Hasan Bey. Kelimeyi bir tahta gibi tarttı. “Ne kadar ciddi?” Cevap vermeden çıktın. Kapıda, ikinizin de bunu bir cevap saydığını fark ettin."),
P(S("x_bilmekA"), "Söyledin. Her şeyi. Hasan Bey dinledi, bir kez bile gözünü kaçırmadı. Sonunda “Dört ay,” dedi. “Beşiğe yeter.” Sonra kuşu eline aldı. “Murat'a söyleme.” Söz verdin. Şimdi iki sır taşıyorsun: biri babadan oğula, biri oğuldan babaya."),
P(S("x_bilmekB"), "Hasan Bey güldü. “Murat'la konuşmak mı? Biz kırk yıldır konuşmadan anlaşırız doktor hanım. Konuşursak bozulur.”"),
P(S("x_bilmekC"), "“Yarın,” dedi Hasan Bey. “Yarın iyi.” Sanki yarının olacağından emin olmak istiyormuş gibi gülümsedi."),
P(S("x_bilmekD"), "Hasan Bey düşündü. “Adını duymak istemiyorum,” dedi. “Hastalığın. Adını duyunca içime yerleşir. Sadece zamanı söyle. Ne kadar.”"),
P(S("x_besikA"), "“Yeter,” dedin. Hasan Bey'in yüzü aydınlandı. Bir yalan mı söyledin, bir umut mu verdin? Belki dört ay yeter. Belki."),
P(S("x_besikB"), "“Acele edin,” dedin. Hasan Bey'in çakısı bir an durdu. Sonra devam etti, biraz daha hızlı. Bir şey anlaşıldı; söylenmeden."),
P(S("x_besikC"), "“Bilmiyorum,” dedin. Hasan Bey başını salladı. “Kimse bilmez,” dedi. “Ama sen benden daha çok biliyorsun, değil mi?”"),
P(S("x_besikD"), "Hasan Bey'in gözleri parladı. Ertesi gün Murat bir çanta dolusu alet getirdi: rendeler, keskiler, zımparalar. Dört yüz on iki numaralı oda bir atölyeye dönmeye başladı. Hemşireler önce itiraz etti, sonra çay getirmeye başladı."),
"Öğleden sonra tümör konseyi. Uzun bir masa, bir ekran, altı hekim. Masanın başında servis şefi Prof. Tarhan; altmış dört yaşında, otuz yıllık onkolog, saçları bembeyaz.",
"Hasan Bey'in görüntüleri ekranda. Cerrah başını sallıyor: ameliyat yok. Seçenekler sıralanıyor: ağır bir kemoterapi, belki iki üç ay kazandırır ama yan etkileri ağır; deneysel bir ilaç çalışması, sponsorlu, bir kontenjan boş; ya da yalnızca destek bakımı.",
"Tarhan Hoca kalemini masaya vuruyor. “Ailesi söylenmesin istiyorsa söylemeyiz,” diyor. “Bizim hastalarımız böyledir. Otuz yıldır böyle yapıyorum, bir tane hasta bile ‘Neden bana söylemediniz?’ diye şikâyet etmedi.”",
"Masada kimse itiraz etmiyor. Bazıları başını sallıyor. Genç bir asistan not alıyor."
], secenekler: [
{ t: "“Hocam, yönetmelik açık: hasta bilgilendirilir. Aile değil, hasta,” dersin.", to: "a4", etki: { dogruluk: 1 } },
{ t: "“Haklısınız hocam. Bizim kültürümüzde böyle,” dersin.", to: "a4", etki: { sefkat: 1, tarhana_uydu: true } },
{ t: "“Ölen hastalar şikâyet edemez hocam,” dersin. Masada sessizlik.", to: "a4", etki: { ozerklik: 1, tarhan_kizdi: true } },
{ t: "Bir şey söylemezsin. Not alırsın.", to: "a4", etki: { not_aldi: true } }
]},

a4: { saat: "Kasım, 16.00", baslik: "Zeynep", metin: [
P(S("a3A"), "Tarhan Hoca sana uzun uzun baktı. “Yönetmeliği ben de okudum Ayla Hanım,” dedi. “Yönetmelik bir hasta yatağının başında hiç durmadı.” Konsey dağıldı."),
P(S("a3B"), "Tarhan Hoca başını salladı, memnun. Masadan kalkarken genç asistan sana baktı; bir şey sormak ister gibi. Sormadı."),
P(S("a3C"), "Masa sustu. Tarhan Hoca'nın yüzü kızardı, sonra soldu. “Bu bir mahkeme değil,” dedi. Ama kalemini bir daha masaya vurmadı."),
P(S("a3D"), "Not aldın. Kâğıda bakınca gördün ki tek bir kelime yazmışsın: “Usta.” Neden, bilmiyorsun."),
"Saat dörtte koridorda sesler. Hasan Bey'in kızı Zeynep, Hamburg'dan bu sabah gelmiş. Otuz yaşında; on yıldır Almanya'da, bir hastanede hemşire. Murat'la odanın kapısının önünde, alçak sesle ama sert, kavga ediyorlar.",
"“Almanya'da hastaya söylenir,” diyor Zeynep. “Bu babamın hayatı. Ne yapacağına o karar verir. Siz onu çocuk yerine koyuyorsunuz.”",
"“Sen on yıldır burada değilsin,” diyor Murat. “Annem öldüğünde de burada değildin. Babamın o iki ayını sen görmedin. Ben gördüm. Sabah kahvaltısında duvara bakıyordu. Sen Hamburg'dan telefon ediyordun.”",
"Zeynep'in yüzü bembeyaz. Bir an hiçbir şey söylemiyor. Sonra sana dönüyor. Murat da.",
"İki kardeş, bir baba, bir koridor. İkisi de babasını seviyor; ikisi de ötekinin onu yanlış sevdiğinden emin. Ve ikisi de, şimdi, senden bir hüküm bekliyor."
], secenekler: [
{ t: "Zeynep'in tarafını tutarsın: “Babanızın bilmeye hakkı var.”", to: "a5", etki: { dogruluk: 1, zeynep_yaninda: true } },
{ t: "Murat'ın tarafını tutarsın: “Babanızı en iyi tanıyan sizsiniz.”", to: "a5", etki: { sefkat: 1, murat_yaninda: true } },
{ t: "İkisini ayırır, her biriyle ayrı ayrı konuşursun.", to: "a5", etki: { sefkat: 1, ayri: true } },
{ t: "“Babanız ne isterdi? Sizin değil, onun ne isteyeceğini konuşun,” dersin.", to: "a5", etki: { ozerklik: 1 } }
]},

a5: { saat: "Kasım, 02.10", baslik: "Gece", metin: [
P(S("a4A"), "Zeynep sana minnetle baktı. Murat bir şey söylemeden koridorun sonuna yürüdü ve pencerenin önünde durdu. Bir tarafı seçmek, öbür tarafı yalnız bırakmak demek."),
P(S("a4B"), "Murat'ın yüzü yumuşadı. Zeynep ise sana öyle baktı ki bir an Hamburg'daki bir meslektaşının seni yargılayan bakışını hayal ettin. “Siz de mi?” dedi ve odaya girdi."),
P(S("a4C"), "Ayrı ayrı konuştun. Murat'la merdiven boşluğunda, Zeynep'le kantinde. İkisi de sana aynı şeyi söyledi, farklı kelimelerle: “Ben babamı kaybetmekten korkuyorum.” Bunu birbirlerine söyleyemiyorlardı."),
P(S("a4D"), "İkisi de sustu. Uzun süre. Sonra Zeynep, “Bilmek isterdi,” dedi. Murat, “Bilmek istemezdi,” dedi. Aynı anda. Aynı adam hakkında."),
"O gece nöbetçisin. Saat ikiyi on geçe servisi dolaşırken dört yüz on ikinin kapısının altından bir ışık sızıyor. Telefon ışığı.",
"Hasan Bey uyumamış. Yatağında oturuyor, telefonun ışığında kuşu işliyor. Seni görünce çakıyı bırakmıyor.",
"“Uyku tutmuyor,” diyor. “Gece insanın aklına her şey gelir. Gündüz Murat var, hemşireler var, gürültü var. Gece sadece ben varım bir de bu kuş.”",
P(function(d){ return d.biliyor; }, "“Söylediğini düşünüp duruyorum,” diyor. “Dört ay. Tuhaf. Bilmek, bilmemekten daha hafif geldi. Ama Murat'ın yüzüne bakınca ağırlaşıyor.”"),
P(function(d){ return !d.biliyor; }, "Kuşu ışığa tutuyor, sonra yavaşça indiriyor. Sesi sakin, bir sipariş verir gibi:"),
P(function(d){ return !d.biliyor; }, "“Doktor hanım. Gece oldu. Murat yok. Kimse yok. Bana doğru söyle. Ben ölüyor muyum?”"),
P(function(d){ return d.biliyor; }, "Sonra kuşu bırakıyor. “Bir şey soracağım,” diyor. “Murat'a söyleyeyim mi, bildiğimi? Sen olsan ne yapardın?”")
], secenekler: [
{ t: function(d){ return d.biliyor ? "“Söyleyin,” dersin. “İkiniz de yalnız kalmayın.”" : "“Evet,” dersin. Gecenin içinde, tek kelimeyle."; }, to: "a6", etki: function(d){ d.dogruluk++; if(!d.biliyor){ d.biliyor = true; d.gece_soyledi = true; } else { d.murata_soyle = true; } } },
{ t: function(d){ return d.biliyor ? "“Bu sizin kararınız Usta. Ben karışamam,” dersin." : "“Bunu yarın, gündüz, birlikte konuşalım,” dersin."; }, to: "a6", etki: { ertele: true } },
{ t: "“Siz ne düşünüyorsunuz?” diye sorarsın.", to: "a6", etki: { ozerklik: 1, ona_sordu: true } },
{ t: "Bir şey söylemeden yanına oturur, elini tutarsın.", to: "a6", etki: { sefkat: 1, el: true } }
]},

a6: { saat: "Kasım, 09.00", baslik: "Aile Odası", metin: [
P(function(d){ return d.gece_soyledi; }, "“Evet,” demiştin. Hasan Bey gözlerini kapamıştı. Sonra açmış, “Sağ ol,” demişti. “Kimse söylemiyordu. Söylemeyince daha korkunç oluyor.” Sabaha kadar kuşu işlemişti. Şimdi bir şeyi biliyorsun: Usta biliyor. Ve masanın başındaki iki çocuğu, bildiğini bilmiyor."),
P(function(d){ return d.murata_soyle; }, "Hasan Bey düşündü. “Bilmiyorum,” dedi. “Belki. Belki sabah.” Sabah olmadı; olmadı mı, sen mi bilmiyorsun?"),
P(S("a5B"), "Hasan Bey başını salladı. “Gündüz,” dedi. “Peki.” Telefonun ışığını söndürdü. Karanlıkta çakının sesi devam etti; ışığa ihtiyacı yoktu."),
P(S("a5C"), "Hasan Bey uzun süre düşündü. “Ben düşündüm,” dedi sonunda. “Bütün gece düşündüm. Bir sonuca varamadım. Sen varırsan söyle.”"),
P(S("a5D"), "Elini tuttun. Hasan Bey'in eli kuru, sıcak, nasırlı. Bir süre sonra o da senin elini sıktı. Konuşmadınız. Bir şey anlaşıldı mı, yoksa ikiniz de bir şeyi ertelediniz mi, bilmiyorsun."),
"Sabah dokuzda küçük bir toplantı odası. Penceresiz, floresan ışıklı, bir masa, dört sandalye, bir kutu mendil. Hastanede herkes bu odaya “aile odası” der; kimse adını sevmez.",
"Murat bir yanda, Zeynep öbür yanda. Tarhan Hoca kapının yanında ayakta; bu toplantıya katılmak zorunda değil ama gelmiş. Sana bakıyor; bir şey demeden, ama bir şey bekleyerek.",
"Önündeki dosyada Hasan Bey'in görüntüleri, tahlilleri, konsey kararı. Ve bir boşluk: hastanın bilgilendirilme durumu. Boşluğu senin doldurman gerekiyor.",
"Murat konuşuyor: “Hocam, ne karar verirseniz verin, babamın moralini bozmayın. Ben size güveniyorum.” Zeynep konuşuyor: “Ben de size güveniyorum. Doğru olanı yapacağınıza.”",
"İki güven, iki ayrı yöne. Bir karar ve bir hayatın son ayları."
], secenekler: [
{ t: "“Ona her şeyi bugün ben söyleyeceğim.”", to: "h1", etki: { dogruluk: 2, kol: "h" } },
{ t: "“Murat Bey'in istediği gibi yapacağız: küçük bir kitle diyeceğiz, tedaviye başlayacağız.”", to: "s1", etki: { sefkat: 1, kol: "s" } },
{ t: "“Babanıza ne kadarını bilmek istediğini soracağım. Sonra onun dediği olacak.”", to: "c1", etki: { ozerklik: 2, kol: "c" } },
{ t: "“Deneysel bir ilaç çalışması var. Ona bir şans verelim.”", to: "u1", etki: { kol: "u", umut: true } }
]},

/* ---------- HAKİKAT KOLU ---------- */
h1: { saat: "Kasım, 11.00", baslik: "Söylemek", metin: [
P(function(d){ return d.kol === "h" && d.son === "u1A"; }, "Onam formunun üstünde, imza yerinin hemen yukarısında, bir cümle vardı: “Hastalığım ve tedavim hakkında bilgilendirildim.” Bu cümleyi bir yalanın altına attırmadın. Kâğıdı katlayıp dört yüz on ikiye yürüdün."),
"Dört yüz on iki. Hasan Bey kuşu bitirmiş; yatağın yanındaki dolabın üstünde duruyor, kanatları açık. Seni görünce doğruluyor. Yüzündeki ifadeden bir şey anlıyor.",
"Sandalyeyi yatağın yanına çekiyorsun. Oturuyorsun. Yıllar önce bir kursta öğrendiğin sıralama aklına geliyor: önce ne bildiğini sor, sonra ne kadar bilmek istediğini, sonra söyle, sonra sus. Kurslar susmanın ne kadar süreceğini söylemez.",
P(function(d){ return d.biliyor; }, "“Biliyorum,” diyor Hasan Bey, sen daha başlamadan. “Ama sen yine söyle. Gündüz söyle. Herkesin önünde söylenmiş olsun.”"),
"Söylüyorsun. Pankreas. Yayılmış. Ameliyat yok. Tedavi var ama iyileştirmek için değil, zaman kazanmak için. Ne kadar zaman? Bilmiyoruz. Aylar.",
"Hasan Bey dinliyor. Bir kez bile sözünü kesmiyor. Bittiğinde uzun bir sessizlik. Koridordan bir servis arabası geçiyor; tekerleklerinden biri gıcırdıyor.",
"“Dört ay mı?” diyor sonunda.",
"“Belki daha az. Belki biraz daha fazla.”",
"Başını sallıyor. Sonra dolabın üstündeki kuşu alıyor, avucunda tutuyor. “Çakımı ver,” diyor. “Gagası biraz kalın oldu.”",
"Kapıda Murat. Duymuş. Yüzü kâğıt gibi. Bir şey söylemeden dönüp gidiyor."
], secenekler: [
{ t: "Hasan Bey'in yanında kalırsın.", to: "h2", etki: { sefkat: 1, kaldi: true } },
{ t: "Murat'ın peşinden gidersin.", to: "h2", etki: { sefkat: 1, murat_pesinden: true } },
{ t: "Hasan Bey'i bir süre yalnız bırakırsın. Bu ona ait bir an.", to: "h2", etki: { ozerklik: 1 } },
{ t: "Zeynep'i içeri çağırırsın.", to: "h2", etki: { zeynep_iceri: true } }
]},

h2: { saat: "Kasım", baslik: "Şikâyet", metin: [
P(S("h1A"), "Yanında kaldın. Hasan Bey kuşun gagasını inceltti, sessizce, yarım saat. Sonra “Tamam,” dedi. Neyin tamam olduğunu söylemedi."),
P(S("h1B"), "Murat'ı merdiven boşluğunda buldun. Duvara yaslanmış, ağlıyordu. Seni görünce bağırdı: “Size söyledim! Size yalvardım!” Sonra sesi kırıldı. “Benim babamı siz mi tanıyacaksınız?”"),
P(S("h1C"), "Odadan çıktın. Kapıyı arkandan kapattın. Camdan baktığında Hasan Bey'in pencereye döndüğünü gördün. Bir süre kıpırdamadı. Sonra çakıyı aldı."),
P(S("h1D"), "Zeynep içeri girdi, babasının yanına oturdu. İkisi de konuşmadı. Sonra Hasan Bey kızının saçını okşadı; çocukken yaptığı gibi. Zeynep ağladı. Hamburg'dan getirdiği bütün cümleler o an anlamını yitirdi."),
P(S("s2D"), "Zeynep'i beklemeden, kendi kararınla, Hasan Bey'e her şeyi söyledin. Üç haftalık bir yalanı bir öğleden sonra yıktın. Hasan Bey dinledi; bitince “Saçlarım bunun içinmiş,” dedi. Sesinde öfke değil, bir tür rahatlama vardı."),
"İki gün sonra başhekimlikten bir yazı. Hasta yakını Murat Yıldız şikâyet dilekçesi vermiş: “Doktor, ailenin açık talebine rağmen babamı habersizce bilgilendirmiş, moralini bozmuş, tedaviye uyumunu tehlikeye atmıştır.”",
"Tarhan Hoca seni odasına çağırıyor. Kızgın değil; yorgun. “Ayla,” diyor, “yönetmelik senin tarafında. Ama bu servisi ben yönetiyorum ve hastaların aileleriyle savaşamam. Bir dahakine bana sor.”",
"Aynı gün Hasan Bey taburcu olmak istiyor. Evine, Çorum'a. Atölyesine. “Burada ölmem,” diyor. “Talaş kokusu olmayan bir yerde ölmem.”",
"Kemoterapi başlasa iki üç ay kazandırabilir. Başlamasa, belki bu iki üç ayın yerine, atölyede geçen dört ay. Belki daha az. Belki yatağa bağlı."
], secenekler: [
{ t: "Taburculuğunu desteklersin. Evde palyatif bakım ayarlarsın.", to: "h3", etki: { ozerklik: 1, evde: true } },
{ t: "Kemoterapiye ikna etmeye çalışırsın: Çorum'da, devlet hastanesinde alabilir.", to: "h3", etki: { dogruluk: 1, evde: true, kemo: true } },
{ t: "Murat'a gidip özür dilersin. Kararından değil, yolundan.", to: "h3", etki: { sefkat: 1, evde: true, ozur: true } },
{ t: "Başhekime savunmanı yazarsın; tek bir kelimesini geri almadan.", to: "h3", etki: { dogruluk: 1, evde: true, savunma: true } }
]},

h3: { saat: "Aralık", baslik: "Atölye", metin: [
P(S("h2A"), "Evde bakım ekibini aradın, Çorum'daki bir aile hekimine uzun bir mektup yazdın, ağrı kesicilerin dozlarını el yazınla bir kâğıda döktün. Hasan Bey taburcu olurken o kâğıdı katlayıp cebine koydu, kuşun yanına."),
P(S("h2B"), "Hasan Bey dinledi. “Saçlarım dökülür mü?” dedi. Dökülebilir, dedin. “Ellerim titrer mi?” Titreyebilir. Uzun süre düşündü. “Peki,” dedi. “Ama atölyede. Haftada bir hastaneye giderim, gerisi talaş.”"),
P(S("h2C"), "Murat özrünü dinledi. Kabul etmedi; reddetmedi de. “Babam size teşekkür etti,” dedi sonunda, yere bakarak. “Ben size teşekkür edemem. Ama babam etti.”"),
P(S("h2D"), "Savunmanı yazdın: iki sayfa, kaynakçalı, yönetmelik maddeleriyle. Başhekim okudu, dosyaya koydu. Şikâyet bir yere gitmedi; ama koridorda bazı meslektaşların seni artık başka türlü selamlıyor."),
P(S("s3A"), "Murat'a hiçbir şey söylemedin. Kemoterapiyi “bir ara” diye durdurdun. Hasan Bey taburcu oldu; Murat babasının iyileştiğini sandı. Hasan Bey arabaya binerken sana göz kırptı. Bir yalanın içinde, iki adam, birbirini koruyarak eve gitti."),
"Aralık ortasında telefonuna bir fotoğraf geliyor. Zeynep'ten. Bir atölye: tavandan sarkan bir ampul, duvarda dizili keskiler, yerde talaş. Ortada bir beşik. Yarısı bitmiş. Ceviz, kızıl kahverengi, yan tahtalarında oyulmaya başlanmış isimler.",
"Beşiğin yanında, bir taburede, Hasan Bey. Zayıflamış, sararmış; ama elinde bir rende, yüzünde bir gülümseme.",
"Fotoğrafın altında Zeynep'in mesajı: “Her gün iki saat çalışıyor. Sonra yatıyor. Ağrısı var ama ilaçları içiyor. Size selam söylüyor. Kuşu taktı.”",
"Fotoğrafı büyütüyorsun. Beşiğin başında, ceviz bir kuş. Kanatları açık. Gagası ince.",
"Hastanenin floresan ışığının altında bu fotoğrafa bakıyorsun ve bir şey hissediyorsun ki adını koyamıyorsun. Sevinç değil. Hüzün değil. Belki bir hayatın, son aylarında, kendi şekline kavuşmasını izlemenin verdiği bir şey."
], secenekler: [
{ t: "Zeynep'e uzun bir cevap yazarsın.", to: "t1", etki: { sefkat: 1 } },
{ t: "“Bir şeye ihtiyacı olursa beni arayın,” yazarsın. Gece de.", to: "t1", etki: { sefkat: 1, ara_dedi: true } },
{ t: "Fotoğrafı Tarhan Hoca'ya gösterirsin.", to: "t1", etki: { dogruluk: 1, tarhana_foto: true } },
{ t: "Fotoğrafı kaydedersin ve cevap yazmazsın. Bazı şeylere cevap verilmez.", to: "t1" }
]},

/* ---------- SIR KOLU ---------- */
s1: { saat: "Kasım", baslik: "Küçük Bir Kitle", metin: [
"Dört yüz on ikiye Murat'la birlikte giriyorsunuz. Murat babasının yanına oturuyor, elini tutuyor. Sen ayakta kalıyorsun; oturmak, bir yalanı daha rahat söylemek gibi gelecek.",
"“Usta,” diyorsun, “pankreasta küçük bir kitle var. İlaçla küçülteceğiz. Biraz zor bir tedavi ama sizin gibi sağlam biri için sorun değil.”",
"Kelimeler ağzından kolay çıkıyor. Bunu daha önce de yaptın; her onkolog yapmıştır. Küçük. İlaçla. Sorun değil. Her kelime ayrı ayrı doğru olabilir. Birlikte bir yalan oluyorlar.",
"Hasan Bey sana bakıyor. Uzun süre. Yüzünde hiçbir şey kıpırdamıyor. Sonra Murat'a bakıyor; oğlunun elinin titrediğini görüyor.",
"“Peki doktor hanım,” diyor. “Siz bilirsiniz.”",
"Murat rahatlıyor; omuzları düşüyor. Koridora çıktığınızda sana sarılıyor. “Teşekkür ederim hocam. Teşekkür ederim.”",
"Kemoterapi ertesi gün başlıyor. Serum torbası askıda, damla damla. Hasan Bey kuşu işlemeye devam ediyor, sol elinde damar yolu, sağ elinde çakı.",
P(function(d){ return d.biliyor; }, "Ama sen biliyorsun: o zaten biliyor. Bütün bu oyunu, oğlunu korumak için oynuyor. Ve sen de oynuyorsun. Üç kişi, bir odada, birbirine yalan söylüyor; hepsi sevgiyle."),
"Zeynep koridorun sonunda, kollarını göğsünde kavuşturmuş. Sana bakıyor. Hiçbir şey söylemiyor."
], secenekler: [
{ t: "Zeynep'in yanına gidip ona kararını açıklarsın.", to: "s2", etki: { dogruluk: 1 } },
{ t: "Zeynep'le göz göze gelmemeye çalışırsın.", to: "s2", etki: { kacti: true } },
{ t: "Kemoterapi dozunu en düşük seviyede tutarsın; yan etkileri az olsun.", to: "s2", etki: { sefkat: 1, dusuk_doz: true } },
{ t: "Hasan Bey'in odasına bir kez daha girip yalnızca “İyi misiniz?” diye sorarsın.", to: "s2", etki: { sefkat: 1 } }
]},

s2: { saat: "Aralık", baslik: "Saç", metin: [
P(S("s1A"), "Zeynep dinledi. “Siz de mi?” dedi. “Siz de mi bu ülkenin doktorlarından birisiniz?” Sonra yüzü değişti. “Özür dilerim. Ben de Hamburg'da yorgun bir hemşireyim. Kim bilir orada neler söylemiyorum.”"),
P(S("s1B"), "Zeynep'e bakmadın. Ama onun sana baktığını her gün hissettin; koridorda, kantinde, asansörde."),
P(S("s1C"), "Dozu en düşükte tuttun. Hasan Bey'in midesi bulanmadı ilk hafta. Murat sevindi. Bir yalanın içinde bir merhamet daha; ama ilacın tümöre etkisi de en düşükte."),
P(S("s1D"), "“İyiyim,” dedi Hasan Bey. Sonra ekledi: “Sen iyi misin doktor hanım? Yüzün sarı. Benimki gibi.” Güldü."),
"Üç hafta geçiyor. Bir sabah Hasan Bey'in yastığında saç tutamları. Bir hemşire topluyor, bir torbaya koyuyor. Hasan Bey torbaya bakıyor.",
"“Küçük bir şey için bu kadar saç mı gider?” diyor. Sana değil, pencereye.",
"Bulantı, halsizlik, ağızda yaralar. Kuş çakının altında yavaşlıyor. Bazı günler hiç dokunmuyor.",
"Zeynep bir akşam seni kantinde buluyor. “Pazartesi Hamburg'a dönmem gerekiyor,” diyor. “Dönmeden ona söyleyeceğim. Sizin izninizle ya da izniniz olmadan. Babam saçlarının neden döküldüğünü bilmeden ölmesin.”",
"Bir yalan bir kez söylenince kendi kendine devam etmez; her gün yeniden söylenmesi gerekir. Her gün biraz daha pahalıya."
], secenekler: [
{ t: "Yalanı sürdürürsün. Zeynep'e babasının son haftalarını bir çatışmaya çevirmemesini söylersin.", to: "s3", etki: { sefkat: 1, surdur: true } },
{ t: "“Söyleyin,” dersin Zeynep'e. “Ben yanınızda olacağım.”", to: "s3", etki: { dogruluk: 1, zeynep_soyledi: true } },
{ t: "Kemoterapiyi durdurursun. Hiç değilse yalanın bedelini onun bedeni ödemesin.", to: "s3", etki: { sefkat: 1, kemo_dur: true } },
{ t: "Zeynep'i beklemeden kendin söylersin. Bugün.", to: "h2", etki: { dogruluk: 2, kol: "h", ortaya: true } }
]},

s3: { saat: "Aralık", baslik: "Bildiğini Bilmek", metin: [
P(S("s2A"), "Zeynep sana uzun süre baktı. Sonra başını salladı ve pazartesi gitti. Havaalanından bir mesaj attı: “Bu sizin vicdanınız.” Haklıydı."),
P(S("s2B"), "Zeynep babasına söyledi. Sen kapının yanında durdun. Hasan Bey kızını dinledi, sonra elini tuttu: “Biliyordum kızım,” dedi. “Ağabeyine söyleme ama.” Zeynep ağladı, sonra güldü, sonra yine ağladı."),
P(S("s2C"), "Kemoterapiyi durdurdun. Murat'a “bir ara verdik, vücudu dinlensin” dedin. Bir yalanın içinde bir başka yalan; ama bu ikincisi Hasan Bey'in midesini, saçlarını, ellerini kurtardı."),
"Bir akşam, Murat eve gittikten sonra, Hasan Bey seni çağırtıyor. Odada yalnızsınız. Kuş dolabın üstünde, yarım.",
"“Doktor hanım,” diyor, “otur.”",
"Oturuyorsun.",
"“Bana yalan söylediniz,” diyor. Sesi sakin; hiç öfke yok. “Ben biliyordum. Siz de bildiğimi biliyordunuz, değil mi? Gözlerinizden belliydi. Murat da bilmediğimi sanıyor. Hepimiz birbirimize bir oyun oynadık. İyi oynadık. Ama bu oyunun içinde ben yalnız kaldım.”",
"Bir süre susuyor. Pencereden Ankara'nın ışıkları.",
"“Bir şey isteyeceğim. Bu ilacı bırakalım. Beni evime gönderin. Atölyeme. Murat'a da bir şey deyin, iyileştim deyin, ne derseniz deyin. Ben beşiği bitireyim. Oğlum da babasını iyileşmiş sansın. Son yalanımız bu olsun.”"
], secenekler: [
{ t: "Kabul edersin. Taburcu edersin; Murat'a iyileşme yolunda olduğunu söylersin.", to: "h3", etki: { sefkat: 1, ozerklik: 1, evde: true } },
{ t: "“Murat'a gerçeği söyleyelim Usta. Hep birlikte,” dersin.", to: "t1", etki: { dogruluk: 2, ortaya: true, aile_bildi: true } },
{ t: "“Tedaviyi bırakmanızı öneremem,” dersin.", to: "t1", etki: { dogruluk: 1, kemo_devam: true } },
{ t: "Hiçbir şey söyleyemezsin. Gözlerin doluyor; o görüyor.", to: "t1", etki: { sefkat: 1, aglamak: true } }
]},

/* ---------- SEÇİM KOLU ---------- */
c1: { saat: "Kasım", baslik: "Ne Kadarını", metin: [
"Dört yüz on ikide, yalnız. Kapıyı kapatıyorsun. Murat ve Zeynep kantinde bekliyor; ikisine de babalarının ne isterse onun olacağını söyledin. İkisi de bunu kendi lehine yorumladı.",
P(function(d){ return d.sordu; }, "“Yine mi soracaksın?” diyor Hasan Bey, gülerek. “Geçen sefer cevap vermemiştim.”"),
"“Usta,” diyorsun, “size tahlillerinizi anlatabilirim. Her şeyi, olduğu gibi. Ya da yalnızca bilmek istediğiniz kadarını. Bazı insanlar her ayrıntıyı ister. Bazıları hiçbirini. Bazıları yalnızca ne yapmaları gerektiğini. Siz hangisisiniz?”",
"Hasan Bey çakıyı bırakıyor. Bu soruyu ona kimse sormamış; bunu yüzünden görüyorsun.",
"“Hiç düşünmemiştim,” diyor. “Bir insan ne kadarını bilmek ister?” Uzun süre pencereye bakıyor.",
"“Adını söyleme,” diyor sonunda. “Hastalığın. Adını duyarsam içime yerleşir; her gece adıyla uyurum. Ayrıntı da istemem. Resim, rakam, onu bunu. Sadece bir şey söyle: ne kadar zamanım var?”",
P(function(d){ return d.zaman_ister; }, "Daha önce de böyle demişti. Bir insan, aynı isteği iki kez söylediğinde, artık bir istek değil bir karardır."),
"Bir hastanın bilme hakkı var; bu yasada yazıyor. Bilmeme hakkı da var; bu da yazıyor, ama daha küçük harflerle."
], secenekler: [
{ t: "“Üç dört ay, Usta. Belki biraz daha az.”", to: "c2", etki: { dogruluk: 1, zaman_soyledi: "net" } },
{ t: "“Aylar. Kaç ay olduğunu kimse bilemez,” dersin.", to: "c2", etki: { sefkat: 1, zaman_soyledi: "belirsiz" } },
{ t: "“Bunu çocuklarınızın yanında mı duymak istersiniz?” diye sorarsın.", to: "c2", etki: { ozerklik: 1, cocuk_yaninda: true } },
{ t: "“Önce şunu söyleyin: bu zamanla ne yapmak istersiniz?” diye sorarsın.", to: "c2", etki: { ozerklik: 1, ne_yapmak: true } }
]},

c2: { saat: "Kasım", baslik: "Zaman", metin: [
P(S("c1A"), "“Üç dört ay,” dedin. Hasan Bey başını salladı. Parmaklarıyla saydı: kasım, aralık, ocak, şubat. “Mart'ta doğum,” dedi. “Yetişir. Sıkı çalışırsam yetişir.”"),
P(S("c1B"), "“Aylar,” dedin. Hasan Bey güldü. “Kaç ay olduğunu bilmeyen bir marangoz, beşiğe ne zaman başlayacağını bilemez,” dedi. “Ama başlamıştım zaten. Devam ederim.”"),
P(S("c1C"), "Hasan Bey düşündü. “Hayır,” dedi. “Onların yanında değil. Murat ağlar, Zeynep soru sorar. Ben de onları teselli etmek zorunda kalırım. Bu benim zamanım. İlk önce ben duyayım.”"),
P(S("c1D"), "Hasan Bey bir süre düşündü. Sonra parmaklarıyla saydı: “Beşiği bitirmek. Torunumu görmek, görebilirsem. Bir de...” Durdu. “Hanımımın mezarına gitmek. On yıldır gitmedim. Gidemedim.”"),
"Hasan Bey kararını veriyor: kemoterapi yok. Ağrı kesiciler, evde bakım, atölye.",
"Sonra sana bir şey daha söylüyor; sesini alçaltarak.",
"“Çocuklarıma söyleme ki ben biliyorum. Murat beni korumak istiyor; korusun. Zeynep bana gerçeği söylemek istiyor; o da beklesin. İkisi de ne yaptığını bildiğini sansın. Benim bildiğim, ben gidince onlara kalsın; her biri kendi bildiğiyle kalsın.”",
"Bir hastanın bilmeme hakkını korudun. Şimdi aynı hasta, çocuklarının da bir şeyi bilmeme hakkını korumanı istiyor. Haklar bir zincir gibi birbirine bağlanıyor ve zincirin her halkası bir sır."
], secenekler: [
{ t: "Söz verirsin.", to: "c3", etki: { ozerklik: 1, cift_sir: true, evde: true } },
{ t: "“Bu yükü taşıyamam Usta,” dersin. “Onlara bir gün söyleyeceğim.”", to: "c3", etki: { dogruluk: 1, evde: true } },
{ t: "“Siz söyleyin onlara,” dersin. “Ben odada olurum.”", to: "c3", etki: { dogruluk: 1, ozerklik: 1, evde: true, kendisi_soylesin: true } },
{ t: "Yalnızca Zeynep'e söyleyeceğini, Murat'a söylemeyeceğini söylersin.", to: "c3", etki: { evde: true, zeynep_bilir: true } }
]},

c3: { saat: "Kasım", baslik: "İki Kardeş", metin: [
P(S("c2C"), "Hasan Bey bir süre düşündü, sonra çocuklarını çağırdı. Sen odada kaldın. “Biliyorum,” dedi onlara. “Doktor hanım söylemedi; ben biliyordum. Kemoterapi almayacağım. Evime gidiyorum. Beşiği bitireceğim. Sizden bir şey istiyorum: ağlamayın. Ağlayacaksanız atölyenin dışında ağlayın, talaşa damlamasın.”"),
"Ertesi sabah Murat ile Zeynep kapının önünde seni bekliyor. Bu kez kavga etmiyorlar. İkisi de yorgun.",
P(function(d){ return !d.kendisi_soylesin; }, "“Babam taburcu olmak istiyor,” diyor Murat. “Kemoterapiyi de istemiyor. Ne dediniz ona?” Gözlerinde bir şüphe. “Bilmiyor, değil mi? Bilseydi başka türlü davranırdı.”"),
P(function(d){ return !d.kendisi_soylesin; }, "Zeynep kardeşine bakıyor, sonra sana. Onun gözlerinde başka bir şüphe: “Biliyor, değil mi? Biliyor ve bize söylemiyor.”"),
P(function(d){ return d.kendisi_soylesin; }, "“Teşekkür ederim,” diyor Zeynep. Murat bir şey söylemiyor. Sonra elini uzatıyor. Sıkıyorsun. “Ben haksızdım,” diyor. “Babam benden güçlüymüş.”"),
"İki kardeş, aynı babanın iki farklı hikâyesiyle. Hangisinin doğru olduğu senin elinde.",
"Bir sırrı tutmak, bir insanın en zor yükü değil. En zoru, o sırrın etrafında başkalarının birbirini yanlış anlamasını izlemek."
], secenekler: [
{ t: "Sözünü tutarsın. “Babanız kendi kararını verdi. Gerisini ona sorun,” dersin.", to: "t1", etki: { ozerklik: 1 } },
{ t: "İkisini birden oturtur, babalarının bildiğini söylersin.", to: "t1", etki: { dogruluk: 1, aile_bildi: true, soz_bozdu: true } },
{ t: "Murat'a “Bilmiyor” dersin; Zeynep'e ise yalnızca gözlerinle bakarsın.", to: "t1", etki: { sefkat: 1 } },
{ t: "“Babanızla atölyeye gidin. İkiniz birlikte. Gerisi kendiliğinden konuşulur,” dersin.", to: "t1", etki: { sefkat: 1, ozerklik: 1, atolye_birlikte: true } }
]},

/* ---------- UMUT KOLU ---------- */
u1: { saat: "Kasım", baslik: "Onam Formu", metin: [
"Deneysel çalışmanın koordinatörü sana bir dosya getiriyor. On iki sayfa. Sponsor firmanın logosu, protokol numarası, faz iki. Yeni bir bağışıklık ilacı; ilk sonuçlar umut verici, yani yüz hastanın on beşinde tümör küçülmüş, birkaç ay. Yan etkiler: karaciğer, bağırsak, cilt.",
"On ikinci sayfada imza yeri. İmzanın hemen üstünde bir cümle: “Hastalığım, tanım, evrem ve bu çalışmanın deneysel niteliği hakkında bilgilendirildim. Bu çalışmanın beni iyileştirmeyebileceğini anlıyorum.”",
"Bu cümleyi bilmeyen bir hasta imzalayamaz. Etik kurul onaylamaz; sponsor kabul etmez; yasa izin vermez.",
"Murat dosyaya bakıyor. Cümleyi okuyor. Yüzü değişiyor.",
"“Ben imzalarım,” diyor. “Vekâleten. Babamın yerine.”",
"“Babanızın bilinci yerinde,” diyorsun. “Vekâlet olmaz.”",
"Murat bir süre susuyor. Sonra: “O zaman bir şey yapın hocam. Bir yolu vardır. Bu ilaç belki işe yarar. Belki babam o on beşten biridir. Bir kâğıt yüzünden mi şansını kaybedecek?”",
"Bir umut, bir kâğıt, ve kâğıdın üstünde, kimsenin söylemediği bir gerçek. Hasan Bey'e bir şans vermek için ona gerçeği söylemen gerekiyor. Ona gerçeği söylememek için onu bu şanstan mahrum etmen."
], secenekler: [
{ t: "Hasan Bey'e her şeyi söyleyip onamını alırsın.", to: "h1", etki: { dogruluk: 2, kol: "h" } },
{ t: "Murat'ın imzalamasına göz yumarsın. Kâğıt dosyaya girer.", to: "u2", etki: { sahte_onam: true } },
{ t: "Çalışmadan vazgeçersin. Standart kemoterapiye, “küçük bir kitle” yalanıyla başlarsın.", to: "s1", etki: { sefkat: 1, kol: "s" } },
{ t: "Formu Hasan Bey'e okumadan imzalatırsın. “Tedavi izni, Usta. Rutin.”", to: "u2", etki: { sahte_onam: true, okumadan: true } }
]},

u2: { saat: "Aralık", baslik: "Faz İki", metin: [
P(S("u1B"), "Murat imzaladı. Kâğıt dosyaya girdi. Koordinatör bir an imzaya baktı, sonra sana. Bir şey söylemedi. Bazı sessizlikler, bir kurumun bütün işleyişini taşır."),
P(S("u1D"), "Hasan Bey kâğıdı aldı, gözlüğünü taktı, ilk sayfaya baktı. Sonra gözlüğünü çıkardı. “Okuyamam bu kadar yazıyı doktor hanım,” dedi. “Siz ne diyorsanız o.” İmzaladı. İmzası, bir marangozun imzası: büyük, dikkatli, bir tahtaya işler gibi."),
"İlaç her üç haftada bir, damardan. İlk doz sorunsuz. İkinci dozdan sonra Hasan Bey'in cildinde kırmızı lekeler. Üçüncü dozdan sonra karaciğer değerleri yükseliyor; ilaç durduruluyor, steroid başlanıyor, hasta servise yatırılıyor.",
"Hasan Bey haftalardır hastanede. Kuş dolabın üstünde, yarım. Çakı çekmecede. Ellerinin titrediğini fark ediyorsun; steroidden, ya da yorgunluktan.",
"Murat her gün geliyor. Her gün tahlil sonuçlarını soruyor. Her gün umutlu.",
"Bir akşam Hasan Bey'in yanındasın. Pencereden kar yağıyor; Ankara'nın ilk karı.",
"“Doktor hanım,” diyor, “Çorum'da da kar yağıyordur. Atölyenin çatısı akar. Beşiği naylonla örtmüşlerdir umarım.”",
"Bir süre kara bakıyor. “Bu ilaç beni ne zaman eve gönderecek?”"
], secenekler: [
{ t: "“Yakında Usta,” dersin.", to: "u3", etki: { sefkat: 1, yakinda: true } },
{ t: "“Bilmiyorum,” dersin.", to: "u3", etki: { dogruluk: 1 } },
{ t: "Çalışmadan çıkarıp evine göndermeyi önerirsin.", to: "u3", etki: { ozerklik: 1, cikar: true } },
{ t: "Zeynep'i arayıp beşiğin üstüne naylon örtülmesini istersin.", to: "u3", etki: { sefkat: 1, naylon: true } }
]},

u3: { saat: "Ocak", baslik: "Umut", metin: [
P(S("u2C"), "Murat itiraz etti. “Şimdi mi? Tam ilaç işe yarayacakken?” Kimse ilacın işe yarayacağını söylememişti; ama Murat bunu duymuştu, çünkü duymak istemişti. Hasan Bey çalışmada kaldı."),
P(S("u2D"), "Zeynep Hamburg'dan bir komşuyu aradı. Ertesi gün bir fotoğraf geldi: beşik, kalın bir naylonun altında, atölyenin köşesinde. Hasan Bey fotoğrafa uzun uzun baktı. “Sağ ol,” dedi. Bunun için."),
"Ocak ortasında bir tahlil sonucu. Tümör belirteci biraz düşmüş. Az. İstatistiksel bir gürültü kadar az. Murat koridorda seni yakalıyor, gözleri parlıyor: “Düşmüş hocam! Düşmüş!”",
"Bir hafta sonra kontrol tomografisi. Karaciğerdeki noktalar büyümüş. Yenileri var. Karın zarında sıvı.",
"İlaç işe yaramadı. Belki hiç yaramayacaktı. Hasan Bey o on beşten biri değildi; yüzden seksen beşindendi.",
"Akşam odasına giriyorsun. Hasan Bey zayıflamış; yüzü bir cevizin kabuğu gibi. Sana bakıyor.",
"“Bu ilaç beni iyileştiriyor mu doktor hanım?” diyor. “Murat çok sevinçli. Ben iyileşmiyorum ama. Kendi bedenimi bilirim.”",
P(function(d){ return d.okumadan; }, "İmzasını hatırlıyorsun. Büyük, dikkatli. Bir şey okumadan atılmış bir imza, bir insanın sana duyduğu güvenin imzasıydı."),
"Bir umut verdin ve umut, bir ilaç gibi, yan etkileriyle geldi."
], secenekler: [
{ t: "Gerçeği söylersin: “Hayır Usta. İyileştirmiyor.”", to: "t1", etki: { dogruluk: 2, ortaya: true } },
{ t: "“Henüz bilmiyoruz,” dersin.", to: "t1", etki: { sefkat: 1 } },
{ t: "Çalışmayı bitirir, onu evine göndermeyi teklif edersin.", to: "t1", etki: { ozerklik: 1, evde: true, gec_eve: true } },
{ t: "Murat'ı çağırıp tomografi sonucunu önce ona gösterirsin.", to: "t1", etki: { murata_gosterdi: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Ocak", baslik: "Kış", metin: [
P(function(d){ return d.evde && !d.gec_eve; }, "Ocak. Hasan Bey iki aydır Çorum'da. Zeynep Hamburg'dan izin almış, babasının yanında. Her hafta sana bir mesaj atıyor: ağrı skoru, kilo, ne kadar yediği. Ve bir cümle: “Bugün iki saat çalıştı.” Sonra: “Bugün bir saat.” Sonra: “Bugün yarım saat. Ama zımparayı bırakmadı.”"),
P(function(d){ return d.gec_eve; }, "Hasan Bey'i ocak sonunda Çorum'a gönderdiniz. Ambulansla. Atölyeye girebilecek gücü yok artık; yatağını atölyenin yanındaki odaya kurmuşlar, kapıyı açık bırakmışlar. Talaş kokusu içeri doluyor."),
P(function(d){ return !d.evde; }, "Ocak. Hasan Bey hâlâ servisinde. Dört yüz on iki numaralı oda artık onun odası; duvarlarda torununun ultrason görüntüsü, dolabın üstünde yarım kuş. Ağrısı artıyor, morfin dozu artıyor. Bazı günler uyanık, bazı günler değil."),
P(function(d){ return d.aile_bildi; }, "Artık herkes biliyor. Murat da, Zeynep de, Hasan Bey de; ve hepsi birbirinin bildiğini biliyor. Yalanlar bitince odada garip bir hafiflik oldu. Murat bir gün babasının yanında ağladı; Hasan Bey onu hiç teselli etmedi, yalnızca bıraktı ağlasın."),
P(function(d){ return d.cift_sir && !d.aile_bildi; }, "Sır hâlâ yerinde. Murat babasının bilmediğini sanıyor; Hasan Bey oğlunun bildiğini bilmediğini sanıyor. İkisi de birbirini koruyor ve sen, ikisinin ortasında, iki sırrı birden taşıyorsun."),
"Ankara'da kar. Servisin penceresinden hastanenin bahçesindeki çam ağaçları beyaza boyanmış. Bir sabah poliklinikte, bir başka hastaya bir başka teşhis söylerken, aklın Hasan Bey'e gidiyor. Bunun bir anlamı var mı? Bir doktor bir hastayı neden diğerlerinden fazla hatırlar?",
"Belki o hasta bir beşik yaptığı için. Belki sen ona bir şey borçlu olduğun için. Belki o sana bir şey öğrettiği için ve sen henüz ne olduğunu bilmiyorsun."
], secenekler: [
{ t: "Her hafta Zeynep'i ya da Murat'ı arayıp durumunu sorarsın.", to: "t1b", etki: { sefkat: 1 } },
{ t: "Ağrı tedavisini bizzat yönetirsin; dozları her gün gözden geçirirsin.", to: "t1b", etki: { dogruluk: 1 } },
{ t: "Uzaktan izlersin. Bir hekimin bir hastaya fazla bağlanması iyi değil.", to: "t1b", etki: { mesafe: true } },
{ t: "Hasan Bey'e bir mektup yazarsın.", to: "t1b", etki: { sefkat: 1, mektup: true } }
]},


t1b: { saat: "Ocak", baslik: "Elçin", metin: [
"Bir öğleden sonra polikliniğinin kapısında, sırasını bekleyen hastaların arasında, karnı burnunda genç bir kadın. Murat'ın karısı Elçin. Otuz iki haftalık hamile.",
"İçeri alıyorsun. Oturmakta zorlanıyor. Bir süre ellerini karnının üstünde kavuşturup bekliyor; ne söyleyeceğini evde prova etmiş gibi.",
"“Hocam, Murat'ın haberi yok buraya geldiğimden,” diyor. “Kadın doğum doktorumla konuştum. Otuz yedinci haftada doğumu başlatabilirlermiş. İlaçla. Bebek için risk az, dedi; ama yine de risk. Mart'ı beklemeden, şubat ortasında.”",
"Bir süre susuyor. “Babam,” diyor; kayınpederine babam diyor, “torununu görsün istiyorum. Kucağına alsın. Beşiğe koysun. Mart'a yetişir mi? Siz bilirsiniz.”",
"Bir hekim olarak biliyorsun: belki yetişmez. Belki şubat bile çok uzak.",
"Ve bir hekim olarak bunu da biliyorsun: doğmamış bir çocuğun doğum zamanını, ölmekte olan bir adamın son isteği için öne almak, hiçbir kitapta yazmayan bir hesaplaşma. Bir yanda bir bebeğin akciğerleri için birkaç hafta. Öbür yanda bir dedenin kucağı.",
"Elçin sana bakıyor. “Murat'a sorarsam hayır der. Bebeği riske atmaz. Babasını da riske atmaz. İkisinin arasında kalır. Ben ikisinin arasında kalmak istemiyorum. Bir şey yapmak istiyorum.”"
], secenekler: [
{ t: "“Bebeği riske atmayın. Babanız da bunu istemezdi,” dersin.", to: "t2", etki: { dogruluk: 1 } },
{ t: "“Babanız şubatı görmeyebilir,” dersin. Açıkça. Kararı ona bırakarak.", to: "t2", etki: { dogruluk: 1, ozerklik: 1, erken_dogum: true } },
{ t: "“Doğum doktorunuzla birlikte konuşalım. Ben de katılırım,” dersin.", to: "t2", etki: { ozerklik: 1, erken_dogum: true } },
{ t: "“Bebeğin ultrason videosunu ona götürün,” dersin. “Kalbini dinlesin.”", to: "t2", etki: { sefkat: 1, ultrason: true } }
]},

t2: { saat: "Şubat", baslik: "Çağrı", metin: [
P(S("t1bA"), "Elçin başını salladı, gözleri doldu. “Haklısınız,” dedi. Gitti. Bir şey yapmak isteyen birine bir şey yapmamasını söylemek; bazen bir hekimin en zor işi."),
P(S("t1bB"), "Elçin bir süre sustu. Sonra doğruldu. “O zaman bekleyemem,” dedi. Bir hafta sonra Murat seni aradı: “Hocam, Elçin doğumu erkene almış. Benden saklamış. Siz biliyor muydunuz?”"),
P(S("t1bC"), "Kadın doğum uzmanıyla, Elçin'le, bir odada konuştunuz. Riskler, haftalar, akciğer olgunluğu. Sonunda bir tarih yazıldı: on dört şubat. Bir dedeye yetişmek için ayarlanmış bir doğum günü."),
P(S("t1bD"), "Elçin ultrason videosunu Çorum'a götürdü. Hasan Bey telefonu kulağına dayadı; bebeğin kalp sesini dinledi, hızlı, bir at koşusu gibi. “Bu çocuk acele ediyor,” dedi. “Benim gibi.”"),
P(function(d){ return d.mektup; }, "Mektubu kısa tuttun: “Usta, beşik nasıl? Ben her gün sizi düşünüyorum. Kuşun gagası ince olsun.” Zeynep babasına okudu. Hasan Bey güldü, diyor Zeynep, gülerken öksürdü. “Doktor hanıma söyle,” demiş, “gaga incecik oldu.”"),
P(function(d){ return d.mesafe; }, "Uzaktan izledin. Mesafe korudun. Ama her mesaj geldiğinde telefonun ekranına bakmadan önce bir saniye beklediğini fark ettin. Mesafe korumanın da bir bedeli var."),
"Şubat başında, gece on bir buçukta telefonun çalıyor.",
P(function(d){ return d.evde; }, "Zeynep. Sesi alçak. “Hocam, babam sizi soruyor. Ağrısı çok. Bir şey söylemek istiyor, ama sadece size. Gelebilir misiniz? Biliyorum, Çorum iki buçuk saat. Biliyorum çok şey istiyorum.”"),
P(function(d){ return !d.evde; }, "Servis hemşiresi. “Hocam, dört yüz on iki sizi istiyor. Durumu kötü. Nöbetçi asistan baktı ama o sizi istiyor. Bir şey söylemek istiyormuş.”"),
"Saat on bir buçuk. Sabah sekizde poliklinik; kırk hasta. Kocan yatakta, uyuyor. Kızın sınav haftasında.",
"Bir hekimin bir hastaya ne kadar borçlu olduğu, hiçbir yönetmelikte yazmaz."
], secenekler: [
{ t: function(d){ return d.evde ? "Arabana binip Çorum'a sürersin." : "Montunu giyip hastaneye gidersin."; }, to: "y_ziyaret", etki: { sefkat: 1, gitti: true } },
{ t: "Telefonu Hasan Bey'e vermelerini istersin. Konuşursunuz.", to: "y_telefon", etki: { telefon: true } },
{ t: "Nöbetçiye ya da evdeki bakım ekibine ayrıntılı talimat verir, sabah ilk iş geleceğini söylersin.", to: "t3", etki: { dogruluk: 1, gec_kaldi: true } },
{ t: "“Yarın,” dersin. Bu gece gerçekten yapamazsın.", to: "t3", etki: { gec_kaldi: true, yarin: true } }
]},

y_ziyaret: { saat: "Gece", baslik: "Talaş", metin: [
P(function(d){ return d.evde; }, "İki buçuk saat. Karanlık yol, kar savrulan bozkır, tırların farları. Gece ikiye doğru Çorum'dasın. Küçük bir mahalle, iki katlı bir ev, avluda bir atölye. Atölyenin ışığı yanıyor."),
P(function(d){ return !d.evde; }, "Gece yarısı hastanedesin. Dört yüz on iki. Odanın ışığı loş; hemşire bir abajur getirmiş, Hasan Bey floresanı sevmiyor."),
P(function(d){ return d.evde; }, "Hasan Bey atölyenin içinde, bir minderde yatıyor. Yatağını oraya taşıtmış. Yanında, yerde, beşik. Neredeyse bitmiş. Ceviz, kızıl kahverengi, lamba ışığında parlıyor. Yan tahtalarda isimler oyulmuş: babasının, annesinin, karısının. Başında kuş."),
P(function(d){ return !d.evde; }, "Hasan Bey çok zayıf. Dolabın üstünde kuş, ve yanında bir zımpara kâğıdı. Murat bugün atölyeden beşiğin bir parçasını getirmiş: başlık tahtası, kuşun takılacağı yer. Hasan Bey onu göğsünün üstünde tutuyor."),
"Seni görünce gülümsüyor. Konuşması zor; nefesi kısa.",
"“Geldin,” diyor. “Bir şey isteyeceğim. Ellerim artık tutmuyor. Bak.” Ellerini kaldırıyor; titriyor. “Son bir yer kaldı. Kuşun takıldığı yerin kenarı. Pürüzlü. Bebek elini değdirirse batar.”",
"Zımpara kâğıdını sana uzatıyor.",
"“Sen yap. Ben söyleyeyim. Lifin yönüne doğru. Bastırma; tahta kendini verir. Acele etme.”",
"Bir hekimin elleri neşter tutar, iğne tutar, bir hastanın nabzını tutar. Hiç zımpara tutmadı."
], secenekler: [
{ t: "Zımparayı alırsın ve onun tarifiyle, lifin yönünde, yavaşça çalışırsın.", to: "t3", etki: { sefkat: 1, zimpara: true } },
{ t: "Zımparayı Murat'a ya da Zeynep'e verirsin. “Bu sizin işiniz,” dersin.", to: "t3", etki: { ozerklik: 1, cocuklar_zimpara: true } },
{ t: "Önce ağrısını kontrol eder, dozunu ayarlarsın. Sonra zımpara.", to: "t3", etki: { dogruluk: 1, zimpara: true } },
{ t: "Zımparayı alıp onun elinin üstüne kendi elini koyarsın. Birlikte.", to: "t3", etki: { sefkat: 1, zimpara: true, birlikte: true } }
]},

y_telefon: { saat: "Gece", baslik: "Ses", metin: [
"Telefon el değiştiriyor. Bir hışırtı, bir öksürük, sonra Hasan Bey'in sesi; kısık, yorgun, ama onun sesi.",
"“Doktor hanım. Kusura bakma, gece.”",
"“Önemli değil Usta.”",
"Bir süre nefesini dinliyorsun. Hızlı, yüzeysel.",
"“Babam öldüğünde,” diyor, “ben on dokuz yaşındaydım. Askerdeydim. Gelemedim. Annem anlattı: son gece bir şey sormuş. ‘Öbür tarafta talaş kokusu var mı?’ diye. Babam da marangozdu. Annem gülmüş. Ben hiç gülemedim. Kırk üç yıl bu soruyu düşündüm.”",
"Bir öksürük. Sonra:",
"“Sana soruyorum. Sen okumuş insansın, çok ölüm gördün. Öbür tarafta bir şey var mı?”",
"Hiçbir tıp kitabında bu sorunun cevabı yok. Hiçbir konseyde bu soru tartışılmadı. Ama bir hasta bu soruyu sana soruyor; gecenin yarısında, iki buçuk saat uzaktan, bir telefonun hışırtısının içinden."
], secenekler: [
{ t: "“Bilmiyorum Usta. Ama talaş kokusu varsa, sizi orada bulurlar,” dersin.", to: "t3", etki: { sefkat: 1, cevap: "talas" } },
{ t: "“Bilmiyorum,” dersin. Yalnızca bu.", to: "t3", etki: { dogruluk: 1, cevap: "bilmiyorum" } },
{ t: "“Siz ne düşünüyorsunuz?” diye sorarsın.", to: "t3", etki: { ozerklik: 1, cevap: "soru" } },
{ t: "Bir şey söylemeden onun nefesini dinlersin. Uzun süre.", to: "t3", etki: { sefkat: 1, cevap: "sessiz" } }
]},

t3: { saat: "Şubat", baslik: "Son Gün", metin: [
P(function(d){ return d.erken_dogum && d.evde; }, "Bebek on dört şubatta doğdu. Üç gün sonra Elçin onu Çorum'a götürdü; battaniyelere sarılı, bir avuç. Hasan Bey onu kucağına aldı. Elleri titriyordu; bebeği bırakmadı. Beşiğe koydu, kuşun altına. “Hoş geldin,” dedi. Bu, onun son cümlelerinden biri oldu."),
P(function(d){ return d.erken_dogum && !d.evde; }, "Bebek on dört şubatta doğdu. İki gün sonra Elçin onu dört yüz on ikiye getirdi; hemşireler kuralları unutmuş gibi yaptı. Hasan Bey onu göğsüne, beşiğin başlık tahtasının yanına yatırdı. “Hoş geldin,” dedi. Bu, onun son cümlelerinden biri oldu."),
P(function(d){ return d.zimpara && !d.birlikte; }, "Bir saat zımparaladın. Hasan Bey her birkaç dakikada bir “Lif,” dedi, “lifin yönüne.” Sonunda elini uzatıp tahtaya dokundu. “Tamam,” dedi. “Pürüzsüz. Bebek eli değse bir şey olmaz.”"),
P(function(d){ return d.birlikte; }, "Onun elinin üstünde senin elin. Ya da tersi. Bir saat. Hasan Bey'in parmakları seninkilerin altında hareket etti; senin hiç bilmediğin bir dili, sana öğretti. Sonunda “Tamam,” dedi. “İkimiz yaptık.”"),
P(S("y_ziyaretB"), "Murat zımparayı aldı. Babasının yanına diz çöktü. Hasan Bey “Lif,” dedi, “lifin yönüne.” Murat on yaşındaki gibi dinledi. Zeynep kapının eşiğinde ağladı. Sen sabaha kadar ikisini izledin."),
P(S("y_telefonA"), "Hasan Bey güldü. Telefonda, öksürerek. “Talaş kokusu,” dedi. “Babama söylerim.” Sonra telefonu kapattı."),
P(S("y_telefonB"), "“Bilmiyorum,” dedin. Hasan Bey bir süre sustu. “İyi,” dedi. “Herkes biliyormuş gibi konuşuyor. Sen bilmediğini söyledin. İyi.”"),
P(S("y_telefonC"), "Hasan Bey düşündü. “Ben bir şey var sanıyorum,” dedi. “Ama ne olduğunu bilmiyorum. Bir atölye belki. Belki sadece talaş.”"),
P(S("y_telefonD"), "Nefesini dinledin. Yirmi dakika. Bir yerde Hasan Bey uyudu. Zeynep telefonu aldı: “Uyudu hocam. Sizin sesinizle değil, sessizliğinizle uyudu.”"),
P(function(d){ return d.gec_kaldi; }, "Sabah ilk iş aradın. Zeynep açtı. Sesi kırık. “Gece dörtte,” dedi. “Sizi sordu bir kez daha. Sonra sordu mu sormadı mı bilmiyorum; konuşamıyordu artık.”"),
P(function(d){ return !d.gec_kaldi && !d.erken_dogum; }, "Hasan Bey üç gün sonra öldü. Şubatın yedisinde, sabaha karşı."),
P(function(d){ return !d.gec_kaldi && d.erken_dogum; }, "Hasan Bey şubatın yirmisinde öldü. Torununu kucağına aldıktan üç gün sonra."),
P(function(d){ return d.evde; }, "Atölyede, beşiğin yanında. Zeynep yanındaydı, Murat yanındaydı. Pencere açıktı; dışarıda kar, içeride talaş kokusu."),
P(function(d){ return !d.evde; }, "Dört yüz on ikide. Murat yanındaydı. Floresan kapalıydı; abajur yanıyordu. Dolabın üstünde ceviz kuş, kanatları açık."),
"Hasan Yıldız, altmış iki yaşında, marangoz. Ölüm belgesine nedenini sen yazdın; o hiç duymak istemediği adı."
], secenekler: [
{ t: "Cenazeye gidersin.", to: "t4", etki: { sefkat: 1, cenaze: true } },
{ t: "Murat'a ve Zeynep'e bir başsağlığı mesajı yazarsın.", to: "t4", etki: { mesaj: true } },
{ t: "Polikliniğe girersin. Kırk hasta bekliyor.", to: "t4", etki: { dogruluk: 1, poliklinik: true } },
{ t: "Dört yüz on iki numaralı odaya gidip bir süre boş yatağın başında durursun.", to: "t4", etki: { sefkat: 1, oda: true } }
]},

t4: { saat: "Nisan", baslik: "Torun", metin: [
P(S("t3A"), "Cenazeye gittin. Çorum'da, küçük bir mezarlıkta. Bir avuç insan; çoğu marangoz, çırak, komşu. Biri senin elini sıktı: “Usta sizden çok bahsetti.” Ne dediğini sormadın."),
P(S("t3B"), "Mesajı yazdın, sildin, yeniden yazdın. Sonunda gönderdiğin şey dört kelimeydi. Murat'tan cevap geldi: “Babam size güvenirdi.”"),
P(S("t3C"), "Polikliniğe girdin. Kırk hasta. On üçüncüsü, yetmiş yaşında bir adam, sana “Doktor hanım, ben ne zaman evime dönerim?” dedi. Bir an cevap veremedin."),
P(S("t3D"), "Dört yüz on iki yeni bir hastayla doluydu. Genç bir kadın. Seni görünce gülümsedi. Dolabın üstü boştu. Bir an orada bir kuş görür gibi oldun."),
P(function(d){ return !d.erken_dogum; }, "Nisan başında bir öğle arası, odanın kapısı çalınıyor. Murat. Yanında karısı; kucağında bir bebek, üç haftalık."),
P(function(d){ return d.erken_dogum; }, "Nisan başında bir öğle arası, odanın kapısı çalınıyor. Murat. Yanında karısı; kucağında bir bebek, yedi haftalık. Dedesinin kucağına girmiş bir bebek."),
"“Adını Hasan koyduk,” diyor Murat. “Biliyorum, herkes böyle yapar. Ama başka bir isim gelmedi aklımıza.”",
P(function(d){ return (d.evde && !d.kemo && !d.kemo_devam) || d.alet || d.zimpara; }, "Telefonundan bir fotoğraf gösteriyor: ceviz bir beşik, kızıl kahverengi, başında bir kuş. Beşiğin içinde bebek, uyuyor. “Bitirdi,” diyor Murat. “Son haftasında. Kuşun gagasını da inceltti.” Durakladı. “Bir tahta kenarı vardı, pürüzlü kalmıştı. Kim zımparaladı bilmiyorum. Bir sabah kalktım, pürüzsüzdü.”"),
P(function(d){ return !((d.evde && !d.kemo && !d.kemo_devam) || d.alet || d.zimpara); }, "Telefonundan bir fotoğraf gösteriyor: bir atölyenin köşesinde, naylonun altında, yarım bir beşik. Yan tahtalarda isimler var; birinin yarısı oyulmuş. “Bitiremedi,” diyor Murat. “Ben bitirmeye çalıştım. Yapamadım. Ellerim onun elleri değil.”"),
P(function(d){ return d.cift_sir && !d.aile_bildi; }, "Sonra Murat sana bakıyor. “Bir şey soracağım hocam. Babam biliyor muydu? Ben ona hiç söylemedim. Ama son haftasında bana öyle baktı ki... Biliyor muydu?”"),
P(function(d){ return !(d.cift_sir && !d.aile_bildi); }, "Murat bir süre susuyor. “Teşekkür etmeye geldim,” diyor. “Ne için, tam bilmiyorum. Ama geldim.”"),
"Bebek uyanıyor. Gözlerini açıyor. Bir an sana bakıyor; ya da bakmıyor, yeni doğanlar kimseye bakmaz. Ama sen bakıldığını hissediyorsun."
], secenekler: [
{ t: function(d){ return (d.cift_sir && !d.aile_bildi) ? "“Biliyordu,” dersin. Sözünü bozarak." : "Bebeği kucağına almak istersin."; }, to: "ts", etki: function(d){ if(d.cift_sir && !d.aile_bildi){ d.dogruluk++; d.son_acikladi = true; } else { d.sefkat++; } } },
{ t: function(d){ return (d.cift_sir && !d.aile_bildi) ? "“Bilmiyorum,” dersin. Sözünü tutarak." : "Murat'a babasının sana öğrettiği bir şeyi anlatırsın."; }, to: "ts", etki: function(d){ if(d.cift_sir && !d.aile_bildi){ d.sefkat++; d.soz_tuttu = true; } else { d.ozerklik++; } } },
{ t: "“Babanız size bir şey bıraktı. Beşikten daha fazlasını,” dersin.", to: "ts", etki: { sefkat: 1 } },
{ t: "Bir şey söylemezsin. Bebeğe bakmaya devam edersin.", to: "ts", etki: { sessiz_son: true } }
]},

ts: { yonlendir: [
{ if: function(d){ return d.kol === "u"; }, to: "son_umut" },
{ if: function(d){ return d.kol === "s" && !d.ortaya; }, to: "son_yalan" },
{ if: function(d){ return d.kol === "c"; }, to: "son_secim" },
{ if: function(d){ return d.dogruluk >= 6; }, to: "son_hakikat" },
{ to: "son_usta" }
]},

/* ---------- SONLAR ---------- */
son_hakikat: { son: true, baslik: "Rendelenmiş Tahta", metin: [
"Hasan Bey bilerek öldü. Hastalığının adını duydu, zamanını öğrendi, son aylarını kendi seçtiği gibi yaşadı. Murat önce sana öfkelendi, sonra öfkesini babasının yanında eritti.",
"O kıştan sonra servisinde bir şey değişti; belki yalnızca senin içinde. Her yeni hastaya, ilk görüşmede, bir soru soruyorsun: “Ne kadarını bilmek istersiniz?” Bazıları şaşırıyor. Bazıları her şeyi istiyor. Bazıları “Sadece ne yapmam gerektiğini söyleyin” diyor. Bir kadın bir keresinde ağladı: “Bunu bana kimse sormamıştı.”",
"Tarhan Hoca emekli oldu. Veda yemeğinde yanına geldi. “Sen haklıydın galiba,” dedi. “Ama ben de haksız değildim. Otuz yıl insanlara yalan söyledim ve çoğu teşekkür etti.” Bir süre durdu. “Belki asıl mesele kimin haklı olduğu değil. Kime sorduğumuz.”",
"Hakikat bir rende gibidir, demişti Hasan Bey bir keresinde. Tahtanın yüzeyini kaldırır, içini gösterir. Çürük varsa görünür. Ama rendeleme işini yapan, tahtaya saygı duymalıdır; lifin yönünde, acele etmeden, bastırmadan.",
"Bir gerçeği söylemek bir şey. Onu söylerken bir insanın yanında kalmak başka bir şey.",
"Masanda ceviz bir kuş duruyor. Zeynep Hamburg'a dönmeden önce bıraktı. Gagası incecik."
]},

son_yalan: { son: true, baslik: "Merhametli Yalan", metin: [
"Hasan Bey öldü ve kimse ona bilmediği bir şeyi söylemedi. Ya da söylemedi gibi yaptı. Ya da o, bilmiyormuş gibi yaptı.",
"Murat cenazeden sonra seni aradı. “Babam huzurla gitti,” dedi. “Sayenizde. Son ana kadar umudunu kaybetmedi.” Telefonu kapattıktan sonra bir süre ekrana baktın.",
"Hasan Bey'in sana söylediği cümle kulağında: “Hepimiz birbirimize bir oyun oynadık. İyi oynadık. Ama bu oyunun içinde ben yalnız kaldım.”",
"Yalanın merhameti, söyleyene mi aittir, duyana mı? Murat babasını korudu; ama babası onu da korudu. Sen ikisini korudun. Ve üçünüzün arasında bir adam, bildiği bir şeyi kimseyle paylaşamadan, bir hastane odasında yalnız öldü.",
"Belki bu yanlıştı. Belki bu, bu ülkenin, bu kültürün, bu ailenin sevme biçimiydi. Bir sevgi ki ağır, sessiz, karşılıksız; ve bazen bir yalanın içinden geçiyor.",
"Zeynep Hamburg'dan bir mektup gönderdi. Kısa: “Babamı siz öldürmediniz. Ama son aylarını onunla birlikte yaşamamıza da izin vermediniz. Bunu biliyor musunuz?” Biliyorsun. Bunu bilerek her gün işe gidiyorsun. Ve yeni hastalara, yeni ailelerle, yeni koridorlarda, bazen yine aynı şeyi yapıyorsun.",
"Bazen yapmıyorsun. Hangisini ne zaman yaptığını artık sen de bilmiyorsun."
]},

son_secim: { son: true, baslik: "Bilmeme Hakkı", metin: [
"Hasan Bey hastalığının adını hiç duymadı. Ne kadar zamanı olduğunu biliyordu; ne yapacağını biliyordu. Gerisi onu ilgilendirmiyordu. Bir marangoz, bir tahtanın kimyasını bilmek zorunda değildir; nasıl işleneceğini bilmesi yeter.",
"Bu kışın sana öğrettiği bir şey var: hakikat tek bir şey değil. Bir teşhis, bir istatistik, bir görüntü, bir isim; ve bir de bir insanın kendi ölümüyle nasıl karşılaşmak istediği. Bunların hepsi ayrı ayrı gerçekler ve bir insanın hangilerini taşımak istediğine o insan karar verir.",
P(function(d){ return d.soz_tuttu; }, "Murat'a babasının bildiğini söylemedin. Sözünü tuttun. Murat hâlâ babasını koruduğunu düşünüyor. Belki bu, Hasan Bey'in ona bıraktığı en büyük miras: bir oğulun, babasını korumuş olma duygusu."),
P(function(d){ return d.son_acikladi; }, "Murat'a babasının bildiğini söyledin. Sözünü bozdun. Murat bir süre sustu, sonra güldü; ağlarken güldü. “Biliyordu,” dedi. “O zaman bana öyle bakması... Beni koruyordu.” Bir sözü bozmak bazen bir insanı özgürleştirir."),
"Yeni hastalarına artık hep aynı soruyla başlıyorsun: “Ne kadarını bilmek istersiniz?” Bazıları “Her şeyi” diyor. Bazıları “Hiçbirini.” Ve bazıları, Hasan Bey gibi, kendi ölçülerini koyuyor.",
"Masanda bir not var, Zeynep'ten. Babasının son haftasında söylediği bir cümle: “Doktor hanıma söyle, adını duymadan gittim. İyi oldu.”",
"Bir insanın bilmemeyi seçmesi, bir hekimin ona yapabileceği en büyük saygı olabiliyor."
]},

son_umut: { son: true, baslik: "Yarım Beşik", metin: [
"Hasan Bey hastanede öldü; deneysel bir ilacın son dozundan üç hafta sonra. Çalışma raporunda bir satır: “Hasta 0047: hastalık progresyonu, çalışmadan çıkarıldı, eksitus.” Bir hayat, bir satır.",
"Murat cenazeden sonra seni aradı. “Elimizden geleni yaptık hocam,” dedi. “Siz de yaptınız. Her şeyi denedik.” Sesinde bir rahatlama vardı; bir şeyi denemiş olmanın rahatlaması.",
"Ama Hasan Bey'in son haftaları bir serum torbasının altında, bir hastane odasında, beşikten yüzlerce kilometre uzakta geçti. Kuş dolabın üstünde yarım kaldı. Beşik naylonun altında yarım kaldı.",
P(function(d){ return d.sahte_onam; }, "Onam formu dosyada duruyor. Bir imza, bir yalanın altına atılmış. Etik kurul bir gün bu dosyayı açarsa ne bulacak? Bir oğulun umudunu. Bir hekimin göz yummasını. Bir marangozun hiç okumadığı on iki sayfayı."),
"Umut bir ilaç gibidir. Dozu doğru olursa insanı ayakta tutar. Fazla olursa, bir insanın elinden son aylarını alır ve yerine bir bekleyiş koyar.",
"Hasan Bey o on beşten biri olabilirdi. Olmadı. Ama olabileceğini bilmek, o şansı denemeyi doğru yapar mıydı? Bunu herkes başka türlü cevaplıyor. Murat “evet” diyor. Zeynep “hayır.” Sen, hâlâ, bilmiyorsun.",
"Murat bir gün atölyedeki yarım beşiği getirdi; hastanenin bahçesine. “Bunu ne yapacağımı bilmiyorum,” dedi. Sen de bilmiyordun. Beşik şimdi servisin bekleme salonunda, bir köşede. Çocuklar içine oyuncak koyuyor."
]},

son_usta: { son: true, baslik: "Usta", metin: [
"Hasan Bey kendi ölümünü bir iş gibi yaptı. Kırk yıl tahtaya nasıl davrandıysa, son aylarına da öyle davrandı: lifin yönünde, acele etmeden, bastırmadan.",
"Sen bu işin bir parçasıydın. Bazen söyledin, bazen sustun, bazen bir zımpara tuttun, bazen bir telefonun öbür ucunda nefes dinledin. Hiçbir zaman tam olarak doğru olanı yaptığından emin olmadın. Hasan Bey de emin değildi; ama çalışmaya devam etti.",
"Torun Hasan büyüyor. Murat sana her doğum gününde bir fotoğraf gönderiyor. Birinci yaşında beşiğin içinde. İkinci yaşında beşiğin yanında. Üçüncü yaşında, beşiğin başındaki kuşu eline almış, ağzına götürüyor.",
"Bir hekim, hastalarının çoğunu unutur. Unutmak zorundadır; yoksa taşıyamaz. Ama bazıları kalır. Neden kaldıklarını bilmezsin; bir yüz, bir cümle, bir koku.",
"Senin için Hasan Bey talaş kokusu olarak kaldı. Bazen bir mobilya dükkânının önünden geçerken duruyorsun. Bazen bir hastaya kötü bir haber vermeden önce bir an gözlerini kapatıyorsun ve bir ses duyuyorsun: “Lifin yönüne. Bastırma. Tahta kendini verir.”",
"İnsanlar da kendini verir; doğru tutulduklarında. Bir ölüm bile."
]}

},

ayna: function(d){
  var out = [];
  var a = d.dogruluk, b = d.sefkat, c = d.ozerklik;
  if(a >= b && a >= c) out.push("Bu hikâyede en çok doğruluğa yaslandın. Bir hastanın bilmeye hakkı olduğuna inandın ve o hakkı, bazen ailesine karşı, savundun. Doğruluk bir hekimin omurgasıdır; ama omurga tek başına bir insanı ayakta tutmaz.");
  else if(b >= c) out.push("Bu hikâyede en çok şefkate yaslandın: korumaya, yumuşatmaya, umut vermeye. Şefkat bir hekimin elleridir. Ama eller bazen gözleri kapatır.");
  else out.push("Bu hikâyede en çok hastanın kendi kararına yaslandın: ne kadarını bilmek istediğine, nasıl ölmek istediğine. Özerkliğe saygı, bir insanı yetişkin yerine koymaktır. Ama bazen bir yetişkinin de elinin tutulmaya ihtiyacı vardır.");
  if(d.cift_sir) out.push("İki sırrı birden taşıdın: bir babanın oğlundan, bir oğulun babasından sakladığı. Sevgi bazen bir yalanın iki ucundan tutmaktır.");
  if(d.sahte_onam) out.push("Bir onam formunun altına, okunmamış bir imza attırdın. Bir umudun adına bir kuralı esnettin.");
  if(d.zimpara) out.push("Bir gece bir beşiğin kenarını zımparaladın. Hiçbir tıp kitabında olmayan bir iş.");
  if(d.gec_kaldi) out.push("Son gece gitmedin. Bunun bir sebebi vardı. Ama sebepler, bir eksikliği her zaman doldurmaz.");
  return out;
},

dipnot: [
{ ad: "Hastanın özerkliği ve hekim paternalizmi", t: "Modern tıp etiğinin temel ilkelerinden biri, hastanın kendi bedeni ve tedavisi hakkında bilgilendirilmiş karar verme hakkıdır (Beauchamp ve Childress). Paternalizm ise hekimin ya da ailenin, hastanın iyiliği için ondan bilgi saklaması ya da onun yerine karar vermesidir. Türkiye'de Hasta Hakları Yönetmeliği hastanın bilgilendirilmesini esas alır; ama hastanın bilgi almayı reddetme hakkını da tanır." },
{ ad: "Hakikat ve umut", t: "Kötü haberi söylemek üzerine yazılan rehberler (örneğin SPIKES protokolü), hekime önce hastanın ne bildiğini ve ne kadarını bilmek istediğini sormayı öğütler. Araştırmalar, gerçeği bilen hastaların umudu kaybetmediğini; yalnızca umudun konusunun değiştiğini gösterir: iyileşmekten, iyi bir son yaşamaya." },
{ ad: "Merhametli yalan", t: "Kant'a göre yalan, iyi niyetle bile söylense, karşıdakini akıl sahibi bir varlık olarak görmemektir. Ama pek çok kültürde ve ailede, ağır bir gerçeği saklamak bir sevgi biçimi olarak yaşanır. Murat'ın babasından, Hasan Bey'in oğlundan sakladığı şey, aynı sevginin iki yönüydü." },
{ ad: "Ölümle yüzleşme", t: "Heidegger'e göre insan, kendi ölümlülüğünü kabul ettiğinde ancak “sahici” bir varoluşa ulaşır. Hasan Bey'in beşiği, bu kabulün en somut biçimiydi: sonu bilinen bir zamanın içine, kendisinden sonra yaşayacak bir şeyi yerleştirmek." }
]
});
})();
