(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "teshis",
baslik: "Teşhis",
dunya: "Gerçek dünya",
kategoriler: ["Sağlık ve Tıp", "Aile ve Hafıza"],
giris: "Ankara'da bir onkoloji servisi. Dört yüz on iki numaralı odada yatan emekli bir marangoz, hastane kurallarına aldırmadan torunu için cevizden bir beşik oyuyor. Sonuçları sen biliyorsun, oğlu da biliyor. Oğlu “Babama söylemeyin” diye yalvarıyor, usta ise her sabah sana ne zaman evine döneceğini soruyor. Bu hikâye, bir hekimin hastasına ne kadar gerçek borçlu olduğunu ve bir ailenin sevgisinin bazen bir yalanın içinden nasıl geçtiğini anlatıyor.",
kavramlar: ["Hastanın özerkliği", "Hakikat ve umut", "Merhametli yalan", "Ölümle yüzleşme"],
ozet: "Bir marangoz ustası hastane odasında torununa beşik oyuyor. Sonuçları sen biliyorsun, oğlu da biliyor. Oğlu “Babama söylemeyin” diyor, usta ise sana her sabah aynı soruyu soruyor.",
baslangic: "a1",
durum: { dogruluk: 0, sefkat: 0, ozerklik: 0 },

sahneler: {

a1: { saat: "Kasım, 07.10", baslik: "Film", metin: [
"Sabahın yedisi, onkoloji servisinin doktor odasındasın. Kahve makinesi yine bozuk, biri üstüne “ARIZALI, VURMAYIN” yazıp bantlamış. Adın Ayla, kırk sekiz yaşındasın, yirmi yıldır bu serviste çalışıyorsun.",
"Ekranda dünkü PET görüntüleri açık. Pankreasın başında bir kitle var, karaciğerde, akciğerin tabanında, karın zarında da parlak noktalar. Raporu beklemene gerek yok. Noktaları sayarken parmağın ekrana değip iz bırakıyor, kazağının koluyla siliyorsun.",
"Hasta Hasan Yıldız, altmış iki yaşında, Çorumlu, emekli bir marangoz. Servistekiler ona “Usta” diyor, çünkü ilk gün hemşire odasındaki sallanan sandalyeyi bir kibrit çöpüyle biraz tutkal kullanarak düzeltmiş. Evre dört, ameliyat şansı yok. Tedaviyle belki altı ay, tedavisiz üç dört ay ömrü var.",
"Odadan çıktığında koridorda biri seni bekliyor. Otuz beş yaşlarında, takım elbiseli, kravatı gevşemiş, gömleğinin bir düğmesi yanlış iliklenmiş bir adam. Hasan Bey'in oğlu Kenan, raporu gece hastanenin sisteminden okumuş.",
"Kolunu tutuyor, fark edince bırakıp özür diliyor, sonra yine tutuyor.",
"“Hocam, babama söylemeyin, ne olur. Annem öldüğünde iki ay ağzını açmadı, sabah kahvaltıda duvara bakıp otururdu. Siz bir şey uydurun, ben de bir şey uydururum. Bırakın umutla gitsin.”"
], secenekler: [
{ t: "“Bu kararı babanızla konuşmadan veremeyiz,” dersin.", to: "a2", etki: { ozerklik: 1 } },
{ t: "“Anlıyorum,” dersin, gerçekten de anlıyorsun.", to: "a2", etki: { sefkat: 1, murata_anlayis: true } },
{ t: "“Yasa hastanın bilgilendirilmesini istiyor,” dersin.", to: "a2", etki: { dogruluk: 1 } },
{ t: "Kenan'a babasının nasıl bir adam olduğunu sorarsın.", to: "a2", etki: { sefkat: 1, murat_anlatti: true } }
]},

a2: { saat: "Kasım, 09.30", baslik: "Dört Yüz On İki", metin: [
P(S("a1A"), "Kenan'ın yüzü kapandı. “Babamı tanımıyorsunuz,” dedi ve asansöre yürüdü, düğmeye üç kere bastı."),
P(S("a1B"), "Kenan'ın omuzları düştü. “Sağ olun hocam,” dedi, sanki ona bir söz vermişsin gibi. Hiçbir söz vermemiştin ama o öyle duydu, sen de düzeltmedin."),
P(S("a1C"), "“Yasa mı?” dedi Kenan. “Gece babamın yanında yasa mı oturacak?” Verecek bir cevabın yoktu."),
P(S("a1D"), "Kenan anlattı, atölyeyi, talaş kokusunu, on yaşındayken babasının ona ilk tabureyi yaptırdığını. “Taburenin bir ayağı kısa kaldı,” dedi. “Babam ‘Böyle kalsın, ilk işin bu, hatırla,’ dedi. Hâlâ bizim evde duruyor.” Sonra gözlerini silip “Kusura bakmayın,” dedi."),
"Dört yüz on iki numaralı odaya giriyorsun. Hasan Bey yatakta oturmuş, dizlerinde bir havlu, havlunun üstünde talaşlar. Elinde bir çakıyla bir parça ceviz var. Hemşireler kesici alet yasak diye onu üç kere uyarmış, o da üç kere gülümseyip çakıyı yastığın altına koymuş, sonra yine çıkarmış.",
"“Gel doktor hanım,” diyor, “bak, kuş. Beşiğin başına takacağım. Torunum olacak, Kenan'ın hanımı dört ay sonra doğuracak. Beşiğin yarısı atölyede hazır, bu kuşu da burada yapayım dedim. El boş durunca kafa çalışıyor.”",
"Yüzü sararmış, gözlerinin akı sapsarı ama elleri sağlam. Çakı cevizin üstünde hiç takılmadan kayıyor.",
"Kuşu pencereye tutup bakıyor, bir yerini üfleyip temizliyor. “Ne zaman çıkarım buradan? Beşiği bitirmem lazım.”"
], secenekler: [
{ t: "“Sonuçlara bakıyoruz Usta, biraz daha zaman lazım,” dersin.", to: "a3", etki: { sefkat: 1, kacamak: true } },
{ t: "“Ne kadarını bilmek istersiniz?” diye sorarsın.", to: "x_bilmek", etki: { ozerklik: 1, sordu: true } },
{ t: "Ne kadar ciddi olduğunu söylemeden “Sonuçlar ciddi Usta,” dersin.", to: "a3", etki: { dogruluk: 1, ciddi: true } },
{ t: "Yatağın kenarına oturup beşiği sorarsın.", to: "x_besik", etki: { sefkat: 1 } }
]},

x_bilmek: { saat: "Kasım, 09.45", baslik: "Rende", metin: [
"Hasan Bey çakıyı bırakıyor. Kuşu kanatları yukarı bakacak şekilde havlunun üstüne koyup bir kere düzeltiyor.",
"“Doktor hanım,” diyor, “kırk yıl marangozluk yaptım. Tahtanın içinde çürük varsa rendelemeden bilirim. Elime alırım, ağırlığından anlarım, vururum, sesinden anlarım.”",
"“Dün akşam Kenan elimi tuttu. Kenan askerden döndüğünden beri elimi tutmamıştı. Bir şey biliyor. Ben de bildiğimi ona belli etmedim, televizyonu açtım, maç vardı, maçtan konuştuk.”",
"Kapı kapalı olduğu hâlde sesini alçaltıyor.",
"“Ne biliyorsan bana söyle. Ama Kenan'a söylediğini söyleme, o beni koruduğunu sansın. Çocukken ben onu çok korudum, bir kere de o beni korusun, ne olur.”"
], secenekler: [
{ t: "Kabul edersin. Ona her şeyi söyleyeceksin, Kenan'a hiçbir şey.", to: "a3", etki: { ozerklik: 1, cift_sir: true, biliyor: true } },
{ t: "“Kenan'la konuşmanız lazım Usta, yoksa ikiniz de birbirinizi korurken yalnız kalırsınız,” dersin.", to: "a3", etki: { dogruluk: 1 } },
{ t: "Bir gün kazanmak için “Yarın konuşalım,” dersin.", to: "a3", etki: { soz_yarin: true } },
{ t: "Belki her şeyi bilmek istemiyordur diye “Ne kadarını bilmek istersiniz?” diye yeniden sorarsın.", to: "a3", etki: { ozerklik: 1, zaman_ister: true } }
]},

x_besik: { saat: "Kasım, 09.45", baslik: "Beşik", metin: [
"Yatağın kenarına oturuyorsun. Hasan Bey şaşırıyor, doktorlar yatağa oturmaz. Sonra kuşu sana uzatıyor, ceviz avucunda ılık.",
"“Babamın bahçesindeki ağaçtan bu,” diyor. “Kırk yıl önce kurudu, kestim, kurusun diye çatıya kaldırdım. Hanım her bahar ‘Şu odunları at artık,’ derdi, atmadım. Kenan'ın hanımı hamile kalınca neden atmadığımı anladım.”",
"Elleriyle havada bir beşik çiziyor. “Sallanacak ama devrilmeyecek. Başında da bu kuş olacak, bebek uyanınca ilk onu görsün. Kenarlarına babamın, annemin, hanımın adını oyacağım. Torun büyüyünce okusun.”",
"Kuşu senden geri alıp işlemeye devam ediyor ve sana bakmadan soruyor:",
"“Doğuma dört ay var. Dört ay yeter mi doktor hanım?”",
"Çakı cevizin üstünde kayıyor, ince bir talaş kıvrılıp havluya düşüyor."
], secenekler: [
{ t: "“Yeter,” dersin.", to: "a3", etki: { sefkat: 1, yeter_dedi: true } },
{ t: "Başka bir şey eklemeden “Acele edin Usta,” dersin.", to: "a3", etki: { dogruluk: 1, acele: true } },
{ t: "“Bilmiyorum,” dersin.", to: "a3", etki: { dogruluk: 1 } },
{ t: "“Aletlerinizi buraya getirtelim, beşiği burada bitirin,” dersin.", to: "a3", etki: { sefkat: 1, alet: true } }
]},

a3: { saat: "Kasım, 13.00", baslik: "Konsey", metin: [
P(function(d){ return d.son === "a2A"; }, "Hasan Bey “Peki,” deyip kuşa döndü. Sen kapıdan çıkarken arkandan seslendi: “Zaman lazım değil mi? Zaman hep lazım.”"),
P(function(d){ return d.son === "a2C"; }, "“Ciddi,” dedi Hasan Bey, kelimeyi eline alıp tartar gibi. “Ne kadar ciddi?” Cevap vermeden çıktın. Koridorda yürürken onun bunu da bir cevap saydığını düşündün."),
P(S("x_bilmekA"), "Her şeyi söyledin. Hasan Bey seni dinledi, bir kere bile gözlerini kaçırmadı. Sonunda “Dört ay,” dedi, “beşiğe yeter.” Kuşu eline aldı. “Kenan'a söyleme.” Söz verdin. Artık hem babanın hem oğlun sırrı sendeydi."),
P(S("x_bilmekB"), "Hasan Bey güldü. “Kenan'la konuşmak mı? Biz kırk yıldır konuşmadan anlaşırız. Konuşursak kavga ederiz, bilirim.”"),
P(S("x_bilmekC"), "“Yarın,” dedi Hasan Bey, “yarın iyi.” Gülümsedi. “O zaman yarın da gelirsin.”"),
P(S("x_bilmekD"), "Hasan Bey düşündü. “Hastalığın adını söyleme,” dedi. “Adını duyarsam içime yerleşir. Yalnızca ne kadar kaldığını söyle.”"),
P(S("x_besikA"), "“Yeter,” dedin. Hasan Bey'in yüzü açıldı, çakı hızlandı. Koridorda kendi kendine dört ayı saydın, aralık, ocak, şubat, mart."),
P(S("x_besikB"), "“Acele edin,” dedin. Çakı durdu, sonra biraz daha hızlı devam etti. İkiniz de başka bir şey demediniz."),
P(S("x_besikC"), "“Bilmiyorum,” dedin. “Kimse bilmez,” dedi Hasan Bey ve çakıyı bıraktı. “Ama sen benden fazla biliyorsun.”"),
P(S("x_besikD"), "Ertesi gün Kenan bir çanta dolusu alet getirdi, rendeler, keskiler, zımparalar. Dört yüz on iki atölyeye döndü. Başhemşire önce tutanak tutacağını söyleyip tehdit etti, üçüncü gün bir çaydanlık getirdi."),
"Öğleden sonra tümör konseyi toplanıyor. Uzun bir masa, bir ekran, altı hekim ve bir tabak kuru pasta var. Masanın başında servis şefi Prof. Tarhan oturuyor, altmış dört yaşında, saçları bembeyaz, toplantılarda kalemini dişleyen bir adam.",
"Hasan Bey'in görüntüleri ekranda. Cerrah başını iki yana sallıyor, ameliyat yok. Seçenekler ortada. Ya ağır bir kemoterapi verilecek, belki iki üç ay kazandırır ama yan etkileri ağır. Ya sponsorlu bir deneysel ilaç çalışmasına girecek, bir kontenjan boş. Ya da yalnızca destek bakımı verilecek.",
"Tarhan Hoca kalemini masaya vuruyor. “Ailesi istemiyorsa söylemeyiz,” diyor. “Otuz yıldır böyle yapıyorum, bir tane hasta gelip ‘Neden bana söylemediniz?’ demedi.”",
"Kimse itiraz etmiyor. Genç bir asistan not alıyor, pastaya uzanıp vazgeçiyor."
], secenekler: [
{ t: "“Hocam, yönetmelik açık, hasta bilgilendirilir. Aile değil, hasta,” dersin.", to: "a4", etki: { dogruluk: 1 } },
{ t: "“Haklısınız hocam, bizde böyledir,” dersin.", to: "a4", etki: { sefkat: 1, tarhana_uydu: true } },
{ t: "“Ölen hasta şikâyet edemez ki hocam,” dersin.", to: "a4", etki: { ozerklik: 1, tarhan_kizdi: true } },
{ t: "Bir şey söylemeden not alırsın.", to: "a4", etki: { not_aldi: true } }
]},

a4: { saat: "Kasım, 16.00", baslik: "Nurcan", metin: [
P(S("a3A"), "Tarhan Hoca sana baktı. “Yönetmeliği ben de okudum Ayla Hanım,” dedi. “Ama yönetmelik hiç gece nöbeti tutmadı.” Konsey dağıldı, pastaya kimse dokunmamıştı."),
P(S("a3B"), "Tarhan Hoca memnun bir şekilde kalemini cebine koydu. Masadan kalkarken genç asistan sana baktı, bir şey soracak gibi oldu ama sormadı."),
P(S("a3C"), "Masa sustu, Tarhan Hoca'nın kulakları kızardı. “Burası mahkeme değil,” dedi ve kalemini bir daha masaya vurmadı."),
P(S("a3D"), "Not aldın. Sonra kâğıda baktığında yalnızca “Usta” yazdığını, altını da iki kere çizdiğini gördün."),
"Saat dörtte koridordan sesler geliyor. Hasan Bey'in kızı Nurcan sabah Hamburg'dan inmiş, valizi hâlâ yanında, tekerleğinde havaalanı etiketi asılı. Otuz yaşında, on yıldır Almanya'da hemşirelik yapıyor. Kenan'la kapının önünde alçak sesle ama sert sert kavga ediyorlar.",
"“Almanya'da hastaya söylenir,” diyor Nurcan. “Bu babamın hayatı. Onu çocuk yerine koyuyorsunuz.”",
"“Sen on yıldır yoksun,” diyor Kenan. “Annem öldüğünde de yoktun. Babamın o iki ayını ben gördüm, ben. Sen Hamburg'dan telefonda ‘Nasılsın baba?’ diyordun, o da ‘İyiyim kızım’ diyordu.”",
"Nurcan'ın yüzü bembeyaz kesiliyor. Valizin sapını öyle sıkıyor ki parmak boğumları ağarıyor. Sonra ikisi birden sana dönüyor."
], secenekler: [
{ t: "Nurcan'ın tarafını tutarsın: “Babanızın bilmeye hakkı var.”", to: "a5", etki: { dogruluk: 1, zeynep_yaninda: true } },
{ t: "Kenan'ın tarafını tutarsın: “Babanızı en iyi siz tanıyorsunuz.”", to: "a5", etki: { sefkat: 1, murat_yaninda: true } },
{ t: "İkisini ayırıp ayrı ayrı konuşursun.", to: "a5", etki: { sefkat: 1, ayri: true } },
{ t: "“Sizin ne istediğinizi değil, babanızın ne isteyeceğini konuşun,” dersin.", to: "a5", etki: { ozerklik: 1 } }
]},

a5: { saat: "Kasım, 02.10", baslik: "Gece", metin: [
P(S("a4A"), "Nurcan sana minnetle baktı. Kenan koridorun sonuna yürüyüp pencerenin önünde durdu, telefonunu çıkarıp ekrana baktı. Ekran kapalıydı."),
P(S("a4B"), "Kenan'ın yüzü yumuşadı. Nurcan ise “Siz de mi?” deyip valizini sürükleyerek odaya girdi, tekerlek eşiğe takılınca sertçe çekti."),
P(S("a4C"), "Kenan'la merdiven boşluğunda, Nurcan'la kantinde konuştun. İkisi de başka kelimelerle aynı cümleyi kurdu: “Babamı kaybetmekten korkuyorum.” Bunu birbirlerine söyleyemiyorlardı."),
P(S("a4D"), "İkisi de sustu, sonra aynı anda konuştular. Nurcan “Bilmek isterdi,” dedi, Kenan “İstemezdi,” dedi. Birbirlerine baktılar ve ilk kez neredeyse gülecek gibi oldular."),
"O gece nöbetçisin. Saat ikiyi on geçe dört yüz on ikinin kapısının altından ışık sızıyor, telefon ışığı.",
"Hasan Bey uyumamış. Telefonun fenerini açıp komodine yaslamış, ışığında kuşu işliyor. Seni görünce çakıyı elinden bırakmıyor.",
"“Uyku tutmuyor,” diyor. “Gündüz Kenan var, hemşireler var, yemek arabası var. Gece bir ben varım, bir de bu kuş.”",
P(function(d){ return d.biliyor; }, "“Söylediklerini düşünüp duruyorum,” diyor. “Dört ay. Tuhaf ama bilince hafifledim. Ama Kenan'ın yüzüne bakınca yine ağırlaşıyorum.”"),
P(function(d){ return !d.biliyor; }, "Kuşu ışığa tutup bakıyor, sonra indiriyor. Bir tahta siparişi verir gibi sakin bir sesle konuşuyor:"),
P(function(d){ return !d.biliyor; }, "“Doktor hanım, gece oldu. Kenan yok, kimse yok. Doğru söyle bana, ölüyor muyum?”"),
P(function(d){ return d.biliyor; }, "Sonra kuşu bırakıyor. “Sana bir şey soracağım. Kenan'a bildiğimi söyleyeyim mi? Sen olsan ne yapardın?”")
], secenekler: [
{ t: function(d){ return d.biliyor ? "“Söyleyin,” dersin. “İkiniz de yalnız kalmayın.”" : "“Evet,” dersin. Gecenin içinde, tek kelimeyle."; }, to: "a6", etki: function(d){ d.dogruluk++; if(!d.biliyor){ d.biliyor = true; d.gece_soyledi = true; } else { d.murata_soyle = true; } } },
{ t: function(d){ return d.biliyor ? "“Bu sizin kararınız Usta. Ben karışamam,” dersin." : "“Bunu yarın, gündüz, birlikte konuşalım,” dersin."; }, to: "a6", etki: { ertele: true } },
{ t: "“Siz ne düşünüyorsunuz?” diye sorarsın.", to: "a6", etki: { ozerklik: 1, ona_sordu: true } },
{ t: "Bir şey demeden yatağın yanındaki sandalyeye oturursun, fener ışığında onunla birlikte.", to: "a6", etki: { sefkat: 1, el: true } }
]},

a6: { saat: "Kasım, 09.00", baslik: "Aile Odası", metin: [
P(function(d){ return d.gece_soyledi; }, "“Evet,” demiştin. Hasan Bey feneri kapatmış, karanlıkta “Sağ ol,” demişti. “Kimse söylemiyordu. Söylemeyince daha korkunç oluyor.” Sabaha kadar çakının sesini duydun. Şimdi Usta biliyor ama masanın başındaki iki çocuğu onun bildiğini bilmiyor."),
P(function(d){ return d.murata_soyle; }, "Hasan Bey biraz düşündü. “Belki sabah,” dedi. Sabah Kenan geldi, kahvaltı tepsisini açıp babasına peynir böldü. Hasan Bey bir şey söylemedi."),
P(S("a5B"), "“Gündüz,” dedi Hasan Bey. “Peki.” Feneri kapattı. Karanlıkta çakının sesi devam etti, ışığa ihtiyacı yoktu."),
P(S("a5C"), "Hasan Bey kuşu elinde çevirip durdu. “Bütün gece düşündüm,” dedi, “bir yere varamadım. Sen varırsan söyle.”"),
P(S("a5D"), "Oturdun. Hasan Bey bir süre çalıştı, sonra kuşu sana uzatıp “Tut şunu, ışığa doğru,” dedi. Tuttun, o da kanadın bir yerini inceltti. Saat üçe kadar ikiniz de başka bir şey konuşmadınız."),
"Sabah dokuzda penceresiz bir toplantı odasındasınız. Bir masa, dört sandalye, bir kutu mendil var. Hastanede buraya “aile odası” derler. Mendil kutusunun yanında biri kapağı kayıp bir kalem unutmuş.",
"Kenan masanın bir yanında, Nurcan öbür yanında oturuyor. Tarhan Hoca kapının yanında ayakta duruyor. Gelmek zorunda değildi ama gelmiş.",
"Dosyada “Hastanın bilgilendirilme durumu” diye boş bir satır var ve onu senin doldurman gerekiyor.",
"“Hocam, ne karar verirseniz verin, babamın moralini bozmayın,” diyor Kenan, “size güveniyorum.” Nurcan da “Ben de doğru olanı yapacağınıza güveniyorum,” diyor. İkisi de “güveniyorum” derken sana değil, birbirine bakıyor."
], secenekler: [
{ t: "“Ona her şeyi bugün ben söyleyeceğim.”", to: "h1", etki: { dogruluk: 2, kol: "h" } },
{ t: "“Kenan Bey'in dediği gibi yapacağız. Küçük bir kitle diyeceğiz, tedaviye başlayacağız.”", to: "s1", etki: { sefkat: 1, kol: "s" } },
{ t: "“Babanıza ne kadarını bilmek istediğini soracağım, sonra onun dediği olacak.”", to: "c1", etki: { ozerklik: 2, kol: "c" } },
{ t: "Gerçeği söylemeden bu şansı verip veremeyeceğini bilmeden “Deneysel bir ilaç çalışması var, ona bir şans verelim,” dersin.", to: "u1", etki: { kol: "u", umut: true } }
]},

/* ---------- HAKİKAT KOLU ---------- */
h1: { saat: "Kasım, 11.00", baslik: "Söylemek", metin: [
P(S("a6A"), "Aile odasından doğruca dört yüz on ikiye yürüdün. Kenan arkandan bir şey söyledi ama duymadın, ya da duymamış gibi yaptın."),
P(function(d){ return d.kol === "h" && d.son === "u1A"; }, "Onam formunda, imza yerinin hemen üstünde bir cümle vardı: “Hastalığım ve tedavim hakkında bilgilendirildim.” O imzayı bir yalanın altına attırmayacaktın. Kâğıdı katlayıp dört yüz on ikiye yürüdün."),
"Hasan Bey kuşu bitirmiş, kanatları açık hâlde dolabın üstünde duruyor. Seni görünce doğruluyor ve yüzünden bir şey okuyor.",
"Sandalyeyi yatağa çekiyorsun. Yıllar önce bir kursta öğrendiğin sıra aklına geliyor. Önce ne bildiğini sorarsın, sonra ne kadar bilmek istediğini, sonra söylersin, sonra susarsın. Kursta susmanın kaç dakika süreceğini söylememişlerdi.",
P(function(d){ return d.biliyor; }, "Sen daha başlamadan Hasan Bey “Biliyorum,” diyor, “ama sen yine de söyle. Gündüz söyle, gece söylenen sayılmaz.”"),
"Söylüyorsun. Pankreasta, yayılmış, ameliyat edilemez. Tedavi var ama iyileştirmek için değil, zaman kazanmak için. Ne kadar zaman? Aylar.",
"Hasan Bey dinliyor. Koridordan bir servis arabası geçiyor, tekerleklerinden biri gıcırdaya gıcırdaya uzaklaşıyor.",
"“Dört ay mı?” diye soruyor.",
"“Belki daha az, belki biraz fazla.”",
"Dolabın üstündeki kuşu alıyor. “Çakımı ver,” diyor, “gagası kalın oldu.”",
"Kapıda Kenan duruyor, duymuş. Elindeki simit poşeti yere düşüyor, almadan dönüp gidiyor."
], secenekler: [
{ t: "Hasan Bey'in yanında kalırsın.", to: "h2", etki: { sefkat: 1, kaldi: true } },
{ t: "Kenan'ın peşinden gidersin.", to: "h2", etki: { sefkat: 1, murat_pesinden: true } },
{ t: "Hasan Bey'i bir süre yalnız bırakırsın.", to: "h2", etki: { ozerklik: 1 } },
{ t: "Nurcan'ı içeri çağırırsın.", to: "h2", etki: { zeynep_iceri: true } }
]},

h2: { saat: "Kasım", baslik: "Şikâyet", metin: [
P(S("h1A"), "Yanında kaldın. Hasan Bey yarım saat boyunca kuşun gagasını inceltti, sonra simit poşetini işaret etti. “Al şunu, yazık,” dedi. Simidi ikiye böldünüz."),
P(S("h1B"), "Kenan'ı merdiven boşluğunda buldun, duvara yaslanmış ağlıyordu. “Size söyledim!” diye bağırdı, sesi merdivenlerde yankılandı. Sonra sesi kırıldı. “Benim babamı siz mi tanıyacaksınız?”"),
P(S("h1C"), "Odadan çıktın. Kapının camından baktığında Hasan Bey'in pencereye döndüğünü gördün. Uzun süre kıpırdamadı, sonra çakıya uzandı."),
P(S("h1D"), "Nurcan içeri girip babasının yanına oturdu. Hasan Bey küçükken yaptığı gibi kızının saçını kulağının arkasına itti. Nurcan Hamburg'dan getirdiği cümlelerin hiçbirini kuramadı, ağladı."),
P(S("s2D"), "Nurcan'ı beklemeden Hasan Bey'e her şeyi söyledin, üç haftalık bir yalanı bir öğleden sonra yıktın. Sen bitirince Hasan Bey başını sıvazladı, eline gelen saçlara baktı. “Bunun içinmiş demek,” dedi. Sesi neredeyse rahatlamış gibiydi."),
"İki gün sonra başhekimlikten bir yazı geliyor. Kenan Yıldız şikâyet dilekçesi vermiş: “Doktor, ailenin açık talebine rağmen babamı habersizce bilgilendirmiş, moralini bozmuştur.”",
"Tarhan Hoca seni odasına çağırıyor. Kızgın değil, yorgun. Masasında torununun resmi, yanında bir kutu mide ilacı duruyor. “Ayla, yönetmelik senden yana,” diyor, “ama bu servisi ben yönetiyorum, ailelerle savaşamam. Bir dahaki sefere bana sor.”",
"Aynı gün Hasan Bey taburcu olmak istiyor, Çorum'a, atölyesine dönmek istiyor. “Burada ölmem,” diyor, “burası çamaşır suyu kokuyor.”",
"Kemoterapi başlasa ona iki üç ay kazandırabilir. Başlamasa belki dört ay atölyesinde yaşar, belki daha az, belki de yatakta."
], secenekler: [
{ t: "Taburcu olmasını destekler, evde bakım ayarlarsın.", to: "h3", etki: { ozerklik: 1, evde: true } },
{ t: "Kemoterapiyi Çorum'da da alabileceğini söyleyip onu ikna etmeye çalışırsın.", to: "h3", etki: { dogruluk: 1, evde: true, kemo: true } },
{ t: "Kenan'a gidip özür dilersin. Kararın için değil, yolun için.", to: "h3", etki: { sefkat: 1, evde: true, ozur: true } },
{ t: "Tek kelimesini geri almadan başhekime savunmanı yazarsın.", to: "h3", etki: { dogruluk: 1, evde: true, savunma: true } }
]},

h3: { saat: "Aralık", baslik: "Atölye", metin: [
P(S("h2A"), "Evde bakım ekibini aradın, Çorum'daki aile hekimine uzun bir mektup yazdın, ağrı kesici dozlarını el yazınla bir kâğıda geçirdin. Hasan Bey kâğıdı katlayıp kuşun yanına, gömleğinin cebine koydu."),
P(S("h2B"), "“Saçım dökülür mü?” diye sordu, dökülebilir dedin. “Ellerim titrer mi?” Titreyebilir. Hasan Bey ellerine baktı. “Peki,” dedi, “ama haftada bir hastane, gerisi atölye.”"),
P(S("h2C"), "Kenan özrünü dinledi, ne kabul etti ne reddetti. Ayakkabılarına bakarak “Babam size teşekkür etti,” dedi. “Ben edemem ama o etti.”"),
P(S("h2D"), "Yönetmelik maddeleriyle dolu iki sayfalık savunmanı yazdın. Başhekim dosyaya koydu, şikâyet bir yere varmadı. Ama kantinde bazı meslektaşların artık senin masana oturmuyor."),
P(S("s3A"), "Kenan'a hiçbir şey söylemedin. Kemoterapiyi “ara verdik” diyerek durdurdun. Hasan Bey taburcu oldu, Kenan da babasının iyileştiğini sandı. Arabaya binerken Hasan Bey sana göz kırptı."),
"Aralık ortasında telefonuna Nurcan'dan bir fotoğraf geliyor. Bir atölye, tavandan sarkan çıplak bir ampul, duvarda dizili keskiler, yerde talaşlar. Ortada kızıl kahverengi, yarım bir ceviz beşik duruyor. Yan tahtalara isimler oyulmaya başlanmış.",
"Beşiğin yanındaki bir taburede elinde rendeyle Hasan Bey oturuyor. Zayıflamış, yanakları çökmüş. Taburenin bir ayağı kısa, altına katlanmış bir karton sıkıştırılmış.",
"Nurcan altına bir mesaj yazmış: “Günde iki saat çalışıyor, sonra yatıyor. İlaçlarını içiyor. Size selam söyledi. Kuşu taktı.”",
"Fotoğrafı büyütüyorsun. Beşiğin başında ceviz kuş duruyor, gagası incecik olmuş. O kısa ayaklı taburenin Kenan'ın ilk işi olduğunu düşünüyorsun, sonra bunu nereden bildiğini hatırlayamıyorsun."
], secenekler: [
{ t: "Nurcan'a uzun bir cevap yazarsın.", to: "t1", etki: { sefkat: 1 } },
{ t: "“Bir şeye ihtiyacı olursa arayın, gece de olsa,” diye yazarsın.", to: "t1", etki: { sefkat: 1, ara_dedi: true } },
{ t: "Fotoğrafı Tarhan Hoca'ya gösterirsin.", to: "t1", etki: { dogruluk: 1, tarhana_foto: true } },
{ t: "Fotoğrafı kaydedersin ama cevap yazmazsın.", to: "t1" }
]},

/* ---------- SIR KOLU ---------- */
s1: { saat: "Kasım", baslik: "Küçük Bir Kitle", metin: [
P(S("u1C"), "Onam formunu imzasız olarak koordinatöre geri verip “Başka bir hastaya,” dedin. Koordinatör formu dosyasına koyup bir sonraki ismi okudu."),
P(S("a6B"), "Kenan'ın omuzları gevşedi. Nurcan kalkıp çıktı, kapıyı çarpmadı, yavaşça, sonuna kadar kapattı."),
"Dört yüz on ikiye Kenan'la birlikte giriyorsunuz. Kenan babasının yanına oturup elini tutuyor. Sen ayakta kalıyorsun, oturursan yalan kolaylaşacakmış gibi geliyor.",
"“Usta,” diyorsun, “pankreasta küçük bir kitle var. İlaçla küçülteceğiz. Biraz zor bir tedavi ama siz sağlamsınız.”",
"Kelimeler kolayca çıkıyor ağzından, bunu daha önce de yaptın, servisteki herkes yaptı. Küçük, ilaçla, sağlamsınız. Her biri tek başına neredeyse doğru.",
"Hasan Bey sana bakıyor, yüzünde hiçbir şey kıpırdamıyor. Sonra Kenan'a bakıyor, oğlunun elinin titrediğini görüp onu kendi iki elinin arasına alıyor.",
"“Peki doktor hanım,” diyor, “siz bilirsiniz.”",
"Koridora çıkınca Kenan sana sarılıyor, ceketi sigara ve kolonya kokuyor. “Sağ olun hocam, sağ olun.”",
"Kemoterapi ertesi gün başlıyor, serum torbası askıya takılıyor. Hasan Bey'in sol kolunda damar yolu var, sağ eliyle kuşu işliyor, arada bir serumun damlalarını sayıyor.",
P(function(d){ return d.biliyor; }, "Ama o zaten biliyor ve sen bunu biliyorsun. Bu oyunu oğlu için oynuyor, sen de oynuyorsun. Odada üç kişi birbirine yalan söylüyor ve kimse kimseye kızgın değil."),
"Nurcan koridorun sonunda, kollarını kavuşturmuş sana bakıyor."
], secenekler: [
{ t: "Nurcan'ın yanına gidip kararını açıklarsın.", to: "s2", etki: { dogruluk: 1 } },
{ t: "Nurcan'la göz göze gelmemeye çalışırsın.", to: "s2", etki: { kacti: true } },
{ t: "Yan etkiler az olsun diye kemoterapi dozunu en düşükte tutarsın.", to: "s2", etki: { sefkat: 1, dusuk_doz: true } },
{ t: "Hasan Bey'in odasına bir kez daha girip yalnızca “İyi misiniz?” diye sorarsın.", to: "s2", etki: { sefkat: 1 } }
]},

s2: { saat: "Aralık", baslik: "Saç", metin: [
P(S("s1A"), "Nurcan seni dinledi. “Siz de mi bu ülkenin doktorlarından birisiniz?” dedi. Sonra yüzünü ovuşturdu. “Pardon. Ben de Hamburg'da yorgun bir hemşireyim, orada neleri söylemiyorum kim bilir.”"),
P(S("s1B"), "Nurcan'a bakmadın ama bakışlarını koridorda, kantinde, asansörde hep ensende hissettin. Sonunda asansörü beklemeyi bırakıp merdivenlerden inmeye başladın."),
P(S("s1C"), "Dozu en düşükte tuttun. İlk hafta Hasan Bey'in midesi bulanmadı, Kenan buna çok sevindi. İlacın tümöre etkisi de en düşükteydi ama bunu Kenan'a söylemedin."),
P(S("s1D"), "“İyiyim,” dedi Hasan Bey, sonra seni süzdü. “Sen iyi misin? Yüzün sarı, benimki gibi.” Güldü, öksürdü, yine güldü."),
"Üç hafta geçiyor. Bir sabah Hasan Bey'in yastığında saç tutamları görüyorsun, hemşire onları bir poşete topluyor. Hasan Bey poşete bakıyor.",
"“Küçük bir şey için bu kadar saç mı gider?” diyor, pencereye bakarak.",
"Bulantı, halsizlik, ağızda yaralar başlıyor. Çakı yavaşladı, bazı günler kuşa hiç dokunmuyor, kuş dolabın üstünde yarım duruyor.",
"Nurcan bir akşam seni kantinde buluyor, tepsisinde soğumuş bir mercimek çorbası var. “Pazartesi dönmem lazım,” diyor. “Dönmeden ona söyleyeceğim, izninizle ya da izniniz olmadan. Babam saçının neden döküldüğünü bilmeden ölmesin.”"
], secenekler: [
{ t: "Yalanı sürdürürsün ve Nurcan'dan babasının son haftalarını kavgaya çevirmemesini istersin.", to: "s3", etki: { sefkat: 1, surdur: true } },
{ t: "“Söyleyin,” dersin, “ben yanınızda olurum.”", to: "s3", etki: { dogruluk: 1, zeynep_soyledi: true } },
{ t: "Yalanın bedelini hiç değilse onun bedeni ödemesin diye kemoterapiyi durdurursun.", to: "s3", etki: { sefkat: 1, kemo_dur: true } },
{ t: "Nurcan'ı beklemeden bugün kendin söylersin.", to: "h2", etki: { dogruluk: 2, kol: "h", ortaya: true } }
]},

s3: { saat: "Aralık", baslik: "Bildiğini Bilmek", metin: [
P(S("s2A"), "Nurcan uzun uzun yüzüne baktı, sonra pazartesi gitti. Havaalanından bir mesaj attı: “Bu sizin vicdanınız.” Mesajı silmedin."),
P(S("s2B"), "Nurcan babasına söyledi, sen de kapının yanında durdun. Hasan Bey kızını dinledi, sonra “Biliyordum kızım,” dedi, “ağabeyine söyleme ama.” Nurcan ağladı, sonra güldü, sonra burnunu çekip yine ağladı."),
P(S("s2C"), "Kemoterapiyi durdurdun. Kenan'a “Vücudu dinlensin diye ara verdik,” dedin, bir yalanın içine bir yalan daha. Ama bu ikincisi Hasan Bey'in midesini ve ellerini kurtardı."),
"Bir akşam, Kenan gittikten sonra Hasan Bey seni çağırtıyor. Kuş hâlâ dolabın üstünde yarım duruyor.",
"“Otur doktor hanım.”",
"Oturuyorsun.",
"“Bana yalan söylediniz,” diyor, sesinde hiç öfke yok. “Ben biliyordum. Sen de bildiğimi biliyordun, gözünden belliydi. Kenan da bilmediğimi sanıyor. İyi oynadık, hepimiz. Ama bu oyunda en çok ben yalnız kaldım. Gece bunu konuşacak kimsem yoktu.”",
"Pencereden Ankara'nın ışıkları görünüyor, bir yerde bir inşaat vincinin kırmızı ışığı yanıp sönüyor.",
"“Bu ilacı bırakalım. Beni eve gönderin. Kenan'a iyileşti deyin, ne derseniz deyin. Ben beşiği bitireyim, oğlum da babası iyileşti sansın. Son yalanımız bu olsun.”"
], secenekler: [
{ t: "Kabul edip taburcu edersin, Kenan'a da iyileşme yolunda olduğunu söylersin.", to: "h3", etki: { sefkat: 1, ozerklik: 1, evde: true } },
{ t: "“Kenan'a hep birlikte gerçeği söyleyelim Usta,” dersin.", to: "t1", etki: { dogruluk: 2, ortaya: true, aile_bildi: true } },
{ t: "“Tedaviyi bırakmanızı öneremem,” dersin.", to: "t1", etki: { dogruluk: 1, kemo_devam: true } },
{ t: "Cevap veremezsin, boğazın düğümleniyor ve o bunu görüyor.", to: "t1", etki: { sefkat: 1, aglamak: true } }
]},

/* ---------- SEÇİM KOLU ---------- */
c1: { saat: "Kasım", baslik: "Ne Kadarını", metin: [
"Dört yüz on ikide yalnızsınız, kapıyı kapatıyorsun. Kenan'la Nurcan kantinde bekliyor. İkisine de babalarının ne derse o olacağını söyledin, ikisi de bunu kendi lehine anladı.",
P(function(d){ return d.sordu; }, "“Yine mi soracaksın?” diyor Hasan Bey. “Geçen sefer cevap vermemiştim, değil mi?”"),
"“Usta, size tahlillerinizi anlatabilirim, her şeyi,” diyorsun. “Ya da yalnızca bilmek istediğiniz kadarını. Kimi her ayrıntıyı ister, kimi hiçbirini, kimi yalnızca ne yapması gerektiğini. Siz hangisisiniz?”",
"Hasan Bey çakıyı bırakıyor. Bunu ona kimsenin sormadığını yüzünden anlıyorsun.",
"“Hiç düşünmedim,” diyor. “İnsan ne kadarını bilmek ister ki?” Pencereye bakıyor, bir güvercin pervaza konup gidiyor.",
"Sonunda “Hastalığın adını söyleme,” diyor. “Adını duyarsam her gece onunla yatarım. Resim de istemem, rakam da istemem. Yalnızca bir şey söyle, ne kadar zamanım var?”",
P(function(d){ return d.zaman_ister; }, "Bunu geçen sefer de istemişti ama bu sefer sesi daha düz çıkıyor.")
], secenekler: [
{ t: "“Üç dört ay Usta, belki biraz daha az.”", to: "c2", etki: { dogruluk: 1, zaman_soyledi: "net" } },
{ t: "“Aylar. Kaç ay olduğunu kimse bilemez,” dersin.", to: "c2", etki: { sefkat: 1, zaman_soyledi: "belirsiz" } },
{ t: "“Bunu çocuklarınızın yanında mı duymak istersiniz?” diye sorarsın.", to: "c2", etki: { ozerklik: 1, cocuk_yaninda: true } },
{ t: "“Önce şunu söyleyin, bu zamanla ne yapmak istersiniz?” diye sorarsın.", to: "c2", etki: { ozerklik: 1, ne_yapmak: true } }
]},

c2: { saat: "Kasım", baslik: "Zaman", metin: [
P(S("c1A"), "“Üç dört ay,” dedin. Hasan Bey parmaklarıyla saydı, kasım, aralık, ocak, şubat. “Doğum martta,” dedi. “Sıkı çalışırsam yetişir.”"),
P(S("c1B"), "“Aylar,” dedin. Hasan Bey güldü. “Kaç ay olduğunu bilmeyen marangoz işe ne zaman başlayacağını bilemez,” dedi. “Ama ben başlamıştım zaten. Devam.”"),
P(S("c1C"), "“Yok,” dedi Hasan Bey, “onların yanında değil. Kenan ağlar, Nurcan soru sorar, ben de onları avutmaya uğraşırım. Önce ben duyayım.”"),
P(S("c1D"), "Hasan Bey parmaklarıyla saydı. “Beşiği bitirmek. Torunu görmek, görebilirsem. Bir de...” Durdu. “Hanımın mezarına gitmek. On yıldır gidemedim, gidip ne diyeceğimi bilemedim.”"),
"Hasan Bey kararını veriyor, kemoterapi yok. Ağrı kesici, evde bakım ve atölye.",
"Sonra sesini alçaltıyor.",
"“Çocuklara bildiğimi söyleme. Kenan beni korumak istiyor, korusun. Nurcan bana gerçeği söylemek istiyor, o da beklesin. Ben gidince ne bildiyse onlarda kalsın, her biri kendi bildiğiyle.”"
], secenekler: [
{ t: "Söz verirsin.", to: "c3", etki: { ozerklik: 1, cift_sir: true, evde: true } },
{ t: "“Bu yükü taşıyamam Usta,” dersin, “onlara bir gün söyleyeceğim.”", to: "c3", etki: { dogruluk: 1, evde: true } },
{ t: "“Siz söyleyin onlara, ben de odada olurum,” dersin.", to: "c3", etki: { dogruluk: 1, ozerklik: 1, evde: true, kendisi_soylesin: true } },
{ t: "Yalnızca Nurcan'a söyleyeceğini, Kenan'a söylemeyeceğini söylersin.", to: "c3", etki: { evde: true, zeynep_bilir: true } }
]},

c3: { saat: "Kasım", baslik: "İki Kardeş", metin: [
P(S("c2A"), "Söz verdin. Hasan Bey nasırlı eliyle elini öyle bir sıktı ki canın acıdı. “Usta sözü,” dedi."),
P(S("c2B"), "“Onlara bir gün söyleyeceğim,” dedin. Hasan Bey sana baktı. “O gün ben olmayayım da,” dedi, “yeter.”"),
P(S("c2D"), "Yalnızca Nurcan'a söyleyeceğini söyledin. Hasan Bey biraz düşündü. “Kız sağlamdır,” dedi. “Kenan'ı da o taşır. Küçükken de sırtında taşırdı.”"),
P(S("c2C"), "Hasan Bey çocuklarını çağırdı, sen de odada kaldın. “Biliyorum,” dedi onlara. “Doktor hanım söylemedi, ben biliyordum. İlaç almayacağım. Eve gidiyorum, beşiği bitireceğim. Ağlayacaksanız atölyenin dışında ağlayın, gözyaşınız talaşa damlamasın.”"),
"Ertesi sabah Kenan'la Nurcan kapının önünde seni bekliyor. Bu sefer kavga etmiyorlar, ikisinin elinde de birer karton bardak çay var.",
P(function(d){ return !d.kendisi_soylesin; }, "“Babam taburcu olmak istiyor,” diyor Kenan, “ilacı da istemiyor. Ona ne dediniz?” Gözlerini kısıyor. “Bilmiyor, değil mi? Bilse başka türlü davranırdı.”"),
P(function(d){ return !d.kendisi_soylesin; }, "Nurcan önce kardeşine, sonra sana bakıyor, onun gözlerinde başka bir şüphe var. “Biliyor,” diyor. “Biliyor ve bize söylemiyor.”"),
P(function(d){ return d.kendisi_soylesin; }, "“Teşekkür ederim,” diyor Nurcan. Kenan bir şey demiyor, sonra çayını Nurcan'a tutuşturup elini uzatıyor. “Ben haksızdım,” diyor. “Babam benden güçlüymüş. Hep öyleydi zaten, ben unutmuşum.”")
], secenekler: [
{ t: "Sözünü tutarsın: “Babanız kararını verdi, gerisini ona sorun.”", to: "t1", etki: { ozerklik: 1 } },
{ t: "İkisini birden oturtup babalarının bildiğini söylersin.", to: "t1", etki: { dogruluk: 1, aile_bildi: true, soz_bozdu: true } },
{ t: "Kenan'a “Bilmiyor,” dersin, Nurcan'a ise yalnızca bakarsın.", to: "t1", etki: { sefkat: 1 } },
{ t: "“Babanızla birlikte atölyeye gidin, ikiniz de. Gerisi orada konuşulur,” dersin.", to: "t1", etki: { sefkat: 1, ozerklik: 1, atolye_birlikte: true } }
]},

/* ---------- UMUT KOLU ---------- */
u1: { saat: "Kasım", baslik: "Onam Formu", metin: [
"Deneysel çalışmanın koordinatörü bir dosya getiriyor. On iki sayfa, üstünde sponsor firmanın logosu, faz iki bir çalışma. Yeni bir bağışıklık ilacı denenecekmiş. İlk sonuçlara göre yüz hastanın on beşinde tümör birkaç aylığına küçülmüş. Yan etkileri karaciğerde, bağırsakta, ciltte görülüyor.",
"On ikinci sayfada imza yeri var, hemen üstünde de bir cümle: “Hastalığım, tanım, evrem ve bu çalışmanın deneysel niteliği hakkında bilgilendirildim. Bu çalışmanın beni iyileştirmeyebileceğini anlıyorum.”",
"Bu cümleyi bilmeyen biri imzalayamaz. Etik kurul da onaylamaz, sponsor da kabul etmez.",
"Kenan cümleyi okuyor, bir daha okuyor.",
"“Ben imzalarım,” diyor, “vekâleten.”",
"“Babanızın bilinci yerinde, vekâlet olmaz,” diyorsun.",
"Kenan kâğıdın köşesini kıvırıp açıyor, kıvırıp açıyor. “O zaman bir yolunu bulun hocam. Belki babam o on beşten biridir. Bir kâğıt yüzünden mi kaçıracak?”"
], secenekler: [
{ t: "Hasan Bey'e her şeyi söyleyip onayını alırsın.", to: "h1", etki: { dogruluk: 2, kol: "h" } },
{ t: "Kenan'ın imzalamasına göz yumarsın.", to: "u2", etki: { sahte_onam: true } },
{ t: "Çalışmadan vazgeçer, “küçük bir kitle” diyerek standart kemoterapiye başlarsın.", to: "s1", etki: { sefkat: 1, kol: "s" } },
{ t: "Formu Hasan Bey'e okutmadan imzalatırsın. “Tedavi izni Usta, rutin bir şey.”", to: "u2", etki: { sahte_onam: true, okumadan: true } }
]},

u2: { saat: "Aralık", baslik: "Faz İki", metin: [
P(S("u1B"), "Kenan imzaladı. Koordinatör önce imzaya, sonra sana baktı, formu zımbalayıp dosyaya koydu. Zımbanın sesi odada fazla yüksek çıktı."),
P(S("u1D"), "Hasan Bey gözlüğünü taktı, ilk sayfaya baktı, gözlüğü çıkardı. “Bu kadar yazıyı okuyamam doktor hanım,” dedi, “siz ne diyorsanız o.” Bir tahtaya işaret koyar gibi büyük, dikkatli harflerle imzaladı."),
"İlaç üç haftada bir damardan veriliyor. İlk doz sorunsuz geçiyor. İkinciden sonra ciltte kırmızı lekeler çıkıyor, üçüncüden sonra karaciğer değerleri fırlıyor. İlacı durdurup steroid başlıyorsunuz.",
"Hasan Bey haftalardır serviste yatıyor. Kuş dolabın üstünde yarım, çakı çekmecede duruyor. Elleri titriyor, steroidden mi yorgunluktan mı, ayırt edemiyorsun.",
"Kenan her gün geliyor, her gün tahlilleri soruyor ve her gün bir umut cümlesi buluyor, bir değerin virgülden sonraki rakamında bile.",
"Bir akşam Hasan Bey'in yanındasın. Dışarıda Ankara'ya ilk kar yağıyor.",
"“Çorum'a da yağıyordur,” diyor. “Atölyenin çatısı akar. Umarım beşiği naylonla örtmüşlerdir, ceviz ıslanırsa çatlar.”",
"Kara bakıyor. “Bu ilaç beni ne zaman eve gönderecek?”"
], secenekler: [
{ t: "“Yakında Usta,” dersin.", to: "u3", etki: { sefkat: 1, yakinda: true } },
{ t: "“Bilmiyorum,” dersin.", to: "u3", etki: { dogruluk: 1 } },
{ t: "Çalışmadan çıkarıp eve göndermeyi önerirsin.", to: "u3", etki: { ozerklik: 1, cikar: true } },
{ t: "Nurcan'ı arayıp beşiğin üstünü örttürmesini istersin.", to: "u3", etki: { sefkat: 1, naylon: true } }
]},

u3: { saat: "Ocak", baslik: "Umut", metin: [
P(S("u2A"), "“Yakında,” dedin. Hasan Bey kara bakmaya devam etti. “Yakında,” diye tekrarladı, kelimeyi ağzında evirip çevirdi."),
P(S("u2B"), "“Bilmiyorum,” dedin. “Sen de bilmiyorsun, ben de bilmiyorum,” dedi Hasan Bey. “Ne güzel, ikimiz de bilmiyoruz.”"),
P(S("u2C"), "Kenan karşı çıktı. “Tam işe yarayacakken mi?” Kimse işe yarayacak dememişti ama Kenan duymak istediğini duymuştu. Hasan Bey çalışmada kaldı."),
P(S("u2D"), "Nurcan Hamburg'dan Çorum'daki bir komşuyu aradı. Ertesi gün bir fotoğraf geldi, beşik kalın bir naylonun altında, köşeleri tuğlayla bastırılmıştı. Hasan Bey fotoğrafa uzun uzun baktı. “Tuğlayı iyi koymuş,” dedi."),
"Ocak ortasında tümör belirteci biraz düşüyor, çok az. Kenan koridorda seni yakalıyor. “Düşmüş hocam! Düşmüş!” Telefonundaki ekran görüntüsünü gösteriyor, sayıyı parmağıyla büyütüyor.",
"Bir hafta sonra tomografi çekiliyor. Karaciğerdeki noktalar büyümüş, yenileri çıkmış, karında sıvı birikmiş.",
"Hasan Bey o on beşten biri değilmiş.",
"Akşam odasına giriyorsun. Yüzü küçülmüş, elmacık kemikleri sivrilmiş.",
"“Bu ilaç beni iyileştiriyor mu doktor hanım?” diye soruyor. “Kenan çok sevinçli ama ben iyileşmiyorum. Ben kendi bedenimi bilirim.”",
P(function(d){ return d.okumadan; }, "O imzayı hatırlıyorsun, büyük, dikkatli harfler ve “Siz ne diyorsanız o.”")
], secenekler: [
{ t: "“Hayır Usta, iyileştirmiyor,” dersin.", to: "t1", etki: { dogruluk: 2, ortaya: true } },
{ t: "“Henüz bilmiyoruz,” dersin.", to: "t1", etki: { sefkat: 1 } },
{ t: "Çalışmayı bitirip onu eve göndermeyi teklif edersin.", to: "t1", etki: { ozerklik: 1, evde: true, gec_eve: true } },
{ t: "Kenan'ı çağırıp tomografiyi önce ona gösterirsin.", to: "t1", etki: { murata_gosterdi: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Ocak", baslik: "Kış", metin: [
P(S("h3A"), "Nurcan'a uzun bir cevap yazdın, kuşu, cevizi, taburenin kısa ayağını yazdın. Bir saat sonra cevap geldi: “Babama okudum, güldü. ‘Doktor hanım şair olmuş,’ dedi.”"),
P(S("h3B"), "“Gece de arayın,” diye yazdın, Nurcan da bir kalp gönderdi. O geceden sonra telefonu sessize almayı bıraktın. Kocan ilk hafta söylendi, sonra alıştı."),
P(S("h3C"), "Fotoğrafı Tarhan Hoca'ya gösterdin. Gözlüğünü alnına itip baktı. “Otuz yılda bana böyle bir fotoğraf gelmedi,” dedi. Bir sonraki konseyde kalemini masaya vurmadı."),
P(S("h3D"), "Fotoğrafı kaydettin ama cevap yazmadın. O akşam eve dönerken bir marangoz dükkânının önünde arabayı yavaşlattın."),
P(S("s3C"), "“Öneremem,” dedin, Hasan Bey de bir şey demedi. Ertesi gün bir sonraki doz verildi, kuş dolabın üstünde yarım kaldı."),
P(S("s3D"), "Bir şey diyemedin. Hasan Bey elini uzatıp koluna dokundu. “Tamam kızım,” dedi, “anladım.” Neyi anladığını sormadın."),
P(S("c3A"), "“Gerisini ona sorun,” dedin. Kenan'la Nurcan birbirlerine baktılar ama ikisi de babalarına aynı soruyu sormadı."),
P(S("c3C"), "Kenan'a “Bilmiyor,” dedin, Nurcan'a ise yalnızca baktın. Nurcan anladı, Kenan anlamadı. O günden sonra Nurcan ağabeyine her şeyi biraz daha yumuşak söylemeye başladı."),
P(S("c3D"), "Atölyeye gittiler. Akşam Nurcan bir fotoğraf attı, bir tezgâhın başında üç kişi, Kenan'ın saçında talaş."),
P(S("u3A"), "“Hayır Usta, iyileştirmiyor,” dedin. Hasan Bey bir süre tavana baktı. “Biliyordum,” dedi, “ama senden duymak iyi oldu.” Kenan kapıdaydı, elinde iki çay vardı."),
P(S("u3B"), "“Henüz bilmiyoruz,” dedin. Kenan'ın yüzü aydınlandı ama Hasan Bey'inki aydınlanmadı. Aynı cümleyi ikisi başka başka duydu."),
P(S("u3D"), "Tomografiyi önce Kenan'a gösterdin. Ekrana baktı ama anlamadı, sen anlattın. “Babama söylemeyin,” dedi yine. Bu sefer yalvarmıyordu, yalnızca yorgundu."),
P(function(d){ return d.evde && !d.gec_eve; }, "Ocak geldi. Hasan Bey iki aydır Çorum'da. Nurcan Hamburg'dan ücretsiz izin almış, her hafta ağrısını, kilosunu, ne yediğini yazıyor ve her mesajın sonuna bir satır ekliyor. Önce “Bugün iki saat çalıştı” yazdı, sonra “Bir saat,” sonra “Yarım saat. Zımparayı elinden bırakmadı.”"),
P(function(d){ return d.gec_eve; }, "Hasan Bey'i ocak sonunda ambulansla Çorum'a gönderdiniz. Atölyeye girecek gücü kalmamış. Yatağını atölyenin yanındaki odaya kurmuşlar, ara kapıyı açık bırakmışlar, içeri talaş kokusu doluyor."),
P(function(d){ return !d.evde; }, "Ocak geldi, Hasan Bey hâlâ serviste. Dört yüz on iki artık onun odası olmuş. Duvarda torununun ultrason çıktısı bantla yapıştırılmış, dolabın üstünde yarım kuş duruyor. Morfin dozu her hafta biraz artıyor."),
P(function(d){ return d.aile_bildi; }, "Artık herkes biliyor ve herkes herkesin bildiğini biliyor, odadaki hava değişti. Kenan bir gün babasının yanında hıçkıra hıçkıra ağladı. Hasan Bey onu susturmaya çalışmadı, ağlasın diye bıraktı, bir yandan da kuşu zımparaladı."),
P(function(d){ return d.cift_sir && !d.aile_bildi; }, "Sır hâlâ yerinde duruyor. Kenan babasının bilmediğini sanıyor, Hasan Bey de oğlunun bildiğini bilmiyormuş gibi yapıyor. İkisini de sen dinliyorsun, ikisine de ayrı bir yüzle."),
"Ankara'da kar var. Bir sabah poliklinikte başka bir hastaya başka bir teşhis söylerken aklın Çorum'daki atölyeye gidiyor. Hasta “Doktor hanım?” diyor, cümleni kaldığın yerden tamamlıyorsun."
], secenekler: [
{ t: "Her hafta Nurcan'ı ya da Kenan'ı arayıp durumunu sorarsın.", to: "t1b", etki: { sefkat: 1 } },
{ t: "Ağrı tedavisini kendin yönetir, dozları her gün kontrol edersin.", to: "t1b", etki: { dogruluk: 1 } },
{ t: "Bir hastaya bu kadar bağlanmak iyi değil diye uzaktan izlersin.", to: "t1b", etki: { mesafe: true } },
{ t: "Hasan Bey'e bir mektup yazarsın.", to: "t1b", etki: { sefkat: 1, mektup: true } }
]},


t1b: { saat: "Ocak", baslik: "Elçin", metin: [
P(S("t1A"), "Her hafta aradın, cümleler gittikçe kısaldı. “Aynı.” “Biraz yorgun.” “Atölyede.” Bir keresinde Kenan “Bugün güldü,” dedi. Neye güldüğünü sormak istedin ama sormadın."),
P(S("t1B"), "Dozları her gün gözden geçirdin. Bir gece saat ikide hemşire aradı. “Usta uyuyor hocam, bütün gece uyudu. Haber vereyim dedim.”"),
P(S("t1C"), "Uzaktan izledin ama yine de dosyasını her sabah açıp kapattın. Sistem kaç kere açtığını kaydediyordu, otuz ikiye gelince saymayı bıraktın."),
P(S("t1D"), "El yazınla bir sayfalık bir mektup yazıp Çorum'a postaladın. Nurcan sonra mektubun uçmasın diye tezgâhın üstünde bir keskinin altında durduğunu söyledi."),
"Bir öğleden sonra poliklinik kapısında sırasını bekleyenlerin arasında karnı burnunda bir kadın görüyorsun. Kenan'ın karısı Elçin, otuz iki haftalık hamile.",
"Onu içeri alıyorsun. Sandalyeye zorla oturuyor, bir eliyle belini tutuyor. Ne diyeceğini evde prova ettiği belli, ilk cümlesine iki kere başlıyor.",
"“Hocam, Kenan'ın buraya geldiğimden haberi yok. Doğum doktorumla konuştum. Otuz yedinci haftada doğumu ilaçla başlatabilirlermiş. Risk az dedi ama yine de bir risk var. Martı beklemeden, şubat ortasında.”",
"Kayınpederine “babam” diyor: “Babam torununu kucağına alsın, beşiğe koysun istiyorum. Marta yetişir mi? Siz bilirsiniz.”",
"Biliyorsun, belki şubat bile uzak.",
"“Kenan'a sorsam hayır der,” diyor Elçin. “Ne bebeği riske atar ne babasını. İkisinin arasında kalır, kendini yer. Ben bir şey yapmak istiyorum.” Karnında bebek tekmeliyor, Elçin susturur gibi eliyle bastırıyor."
], secenekler: [
{ t: "“Bebeği riske atmayın, kayınpederiniz de bunu istemezdi,” dersin.", to: "t2", etki: { dogruluk: 1 } },
{ t: "Kararı ona bırakarak açıkça söylersin: “Şubatı görmeyebilir.”", to: "t2", etki: { dogruluk: 1, ozerklik: 1, erken_dogum: true } },
{ t: "“Doğum doktorunuzla birlikte konuşalım, ben de gelirim,” dersin.", to: "t2", etki: { ozerklik: 1, erken_dogum: true } },
{ t: "“Bebeğin ultrason kaydını ona götürün, kalbini dinlesin,” dersin.", to: "t2", etki: { sefkat: 1, ultrason: true } }
]},

t2: { saat: "Şubat", baslik: "Çağrı", metin: [
P(S("t1bA"), "“Haklısınız,” dedi Elçin ve çantasını aldı. Kapıda durup karnına baktı, sonra çıktı."),
P(S("t1bB"), "Elçin bir süre konuşmadı. “O zaman bekleyemem,” dedi. Bir hafta sonra Kenan aradı. “Hocam, Elçin doğumu erkene almış, benden saklamış. Siz biliyor muydunuz?”"),
P(S("t1bC"), "Doğum uzmanı, Elçin ve sen bir odada oturup haftaları, akciğer olgunluğunu, riskleri konuştunuz. Sonunda uzman takvimde bir günü daire içine aldı, on dört şubat. Elçin “Sevgililer günü,” dedi, güldü, sonra ağladı."),
P(S("t1bD"), "Elçin kaydı Çorum'a götürdü. Hasan Bey telefonu kulağına dayayıp bebeğin hızlı, dörtnala atan kalp sesini dinledi. “Bu çocuk acele ediyor,” dedi, “bana çekmiş.”"),
P(function(d){ return d.mektup; }, "Mektubu kısa tutmuştun: “Usta, beşik nasıl? Kuşun gagası ince olsun.” Nurcan babasına okumuş, Hasan Bey gülerken öksürmüş. “Doktor hanıma söyle, gaga iğne gibi oldu.”"),
P(function(d){ return d.mesafe; }, "Uzaktan izledin ama her mesaj geldiğinde ekrana bakmadan önce telefonu bir süre ters tuttuğunu fark ettin."),
"Şubat başında gece on bir buçukta telefonun çalıyor.",
P(function(d){ return d.evde; }, "Arayan Nurcan, sesi alçak. “Hocam, babam sizi soruyor. Ağrısı çok, bir şey söylemek istiyor, yalnızca size. Çorum iki buçuk saat, biliyorum, çok şey istediğimi biliyorum.”"),
P(function(d){ return !d.evde; }, "Arayan servis hemşiresi. “Hocam, dört yüz on iki sizi istiyor, durumu kötü. Nöbetçi baktı ama Usta sizi istiyor, bir şey söyleyecekmiş.”"),
"Sabah sekizde poliklinik var, kırk hasta bekliyor. Kocan yanında ağzı açık uyuyor. Kızının odasından hâlâ ışık sızıyor, sınav haftası."
], secenekler: [
{ t: function(d){ return d.evde ? "Arabana binip Çorum'a sürersin." : "Montunu giyip hastaneye gidersin."; }, to: "y_ziyaret", etki: { sefkat: 1, gitti: true } },
{ t: "Telefonu Hasan Bey'e vermelerini istersin, konuşursunuz.", to: "y_telefon", etki: { telefon: true } },
{ t: "Nöbetçiye ya da evdeki ekibe ayrıntılı talimat verip sabah ilk iş geleceğini söylersin.", to: "t3", etki: { dogruluk: 1, gec_kaldi: true } },
{ t: "“Yarın,” dersin, bu gece gerçekten yapamazsın.", to: "t3", etki: { gec_kaldi: true, yarin: true } }
]},

y_ziyaret: { saat: "Gece", baslik: "Talaş", metin: [
P(function(d){ return d.evde; }, "İki buçuk saat boyunca karanlık bozkırda, savrulan karın, tırların farlarının arasında gidiyorsun. Bir benzinlikte kahve almak için duruyorsun ama makine bozuk, çay içiyorsun. Gece ikiye doğru Çorum'dasın. İki katlı bir ev, avluda bir atölye var, ışığı yanıyor."),
P(function(d){ return !d.evde; }, "Gece yarısı hastanedesin. Dört yüz on ikinin ışığı loş, Usta floresanı sevmediği için bir hemşire evinden bir abajur getirmiş."),
P(function(d){ return d.evde; }, "Hasan Bey yatağını atölyeye taşıtmış, bir minderin üstünde yatıyor. Yanında, yerde beşik duruyor, neredeyse bitmiş. Ampulün ışığında ceviz kızıl kızıl parlıyor. Yan tahtalara babasının, annesinin, karısının adları oyulmuş, başında kuş var."),
P(function(d){ return !d.evde; }, "Hasan Bey çok zayıflamış. Kenan bugün atölyeden beşiğin başlık tahtasını, kuşun takılacağı parçayı getirmiş. Hasan Bey onu iki eliyle göğsünün üstünde tutuyor."),
"Seni görünce gülümsüyor, nefesi kısa kısa geliyor.",
"“Geldin,” diyor. “Bak.” Titreyen ellerini kaldırıyor. “Tutmuyor artık. Bir yer kaldı. Kuşun takıldığı yerin kenarı pürüzlü, bebek elini değdirirse kıymık batar.”",
"Sana bir zımpara kâğıdı uzatıyor, arkasına kurşun kalemle 240 yazılmış.",
"“Sen yap, ben söyleyeyim. Lifin yönüne doğru, bastırma. Tahta kendini verir, acele etme.”"
], secenekler: [
{ t: "Zımparayı alıp onun tarifiyle, lifin yönünde, yavaş yavaş çalışırsın.", to: "t3", etki: { sefkat: 1, zimpara: true } },
{ t: "Zımparayı Kenan'a ya da Nurcan'a verirsin. “Bu sizin işiniz,” dersin.", to: "t3", etki: { ozerklik: 1, cocuklar_zimpara: true } },
{ t: "Önce ağrısına bakıp dozunu ayarlarsın, zımpara sonra.", to: "t3", etki: { dogruluk: 1, zimpara: true } },
{ t: "Zımparayı onun eline verip kendi elini onun elinin üstüne koyarsın.", to: "t3", etki: { sefkat: 1, zimpara: true, birlikte: true } }
]},

y_telefon: { saat: "Gece", baslik: "Ses", metin: [
"Telefon el değiştiriyor. Önce bir hışırtı, bir öksürük geliyor, sonra Hasan Bey'in kısık ama yine de kendi sesi.",
"“Kusura bakma doktor hanım, gece gece.”",
"“Önemli değil Usta.”",
"Hızlı, sığ nefesini dinliyorsun.",
"“Babam öldüğünde on dokuz yaşındaydım,” diyor. “Askerdeydim, gelemedim. Annem anlattı, son gece bir şey sormuş. ‘Öbür tarafta talaş kokusu var mı?’ demiş. Babam da marangozdu. Annem gülmüş ama ben gülemedim. Kırk üç yıl bunu düşündüm.”",
"Öksürüyor. Arkadan Nurcan'ın “Su ver baba,” dediğini duyuyorsun.",
"“Sana soruyorum. Okumuşsun, çok ölüm gördün. Öbür tarafta bir şey var mı?”"
], secenekler: [
{ t: "“Bilmiyorum Usta. Ama talaş kokusu varsa sizi orada bulurlar,” dersin.", to: "t3", etki: { sefkat: 1, cevap: "talas" } },
{ t: "Yalnızca “Bilmiyorum,” dersin.", to: "t3", etki: { dogruluk: 1, cevap: "bilmiyorum" } },
{ t: "“Siz ne düşünüyorsunuz?” diye sorarsın.", to: "t3", etki: { ozerklik: 1, cevap: "soru" } },
{ t: "Bir şey demeden nefesini dinlersin.", to: "t3", etki: { sefkat: 1, cevap: "sessiz" } }
]},

t3: { saat: "Şubat", baslik: "Son Gün", metin: [
P(function(d){ return d.erken_dogum && d.evde; }, "Bebek on dört şubatta doğdu. Üç gün sonra Elçin onu battaniyelere sarılı, bir avuç hâlde Çorum'a götürdü. Hasan Bey bebeği kucağına aldı, elleri titriyordu ama bırakmadı. Onu beşiğe, kuşun altına yatırıp “Hoş geldin,” dedi."),
P(function(d){ return d.erken_dogum && !d.evde; }, "Bebek on dört şubatta doğdu. İki gün sonra Elçin onu dört yüz on ikiye getirdi, başhemşire bir şey görmemiş gibi yaptı. Hasan Bey bebeği göğsüne, başlık tahtasının yanına yatırıp “Hoş geldin,” dedi."),
P(function(d){ return d.zimpara && !d.birlikte; }, "Bir saat boyunca zımparaladın. Hasan Bey birkaç dakikada bir “Lif,” dedi, “lifin yönüne.” Bir keresinde “Bastırıyorsun,” dedi, haklıydı. Sonunda elini uzatıp kenara dokundu. “Tamam,” dedi, “bebek eli değse bir şey olmaz.”"),
P(function(d){ return d.birlikte; }, "Onun eli altta, seninki üstte, bir saat çalıştınız. Bir yerde artık senin onun elini değil, onun senin elini götürdüğünü fark ettin. “Tamam,” dedi, “ikimiz yaptık. Kimseye söyleme ama, ben yaptım diyeceğim.”"),
P(S("y_ziyaretB"), "Kenan zımparayı alıp babasının yanına diz çöktü. “Lif,” dedi Hasan Bey, “lifin yönüne.” Kenan dilini dişlerinin arasına sıkıştırıp on yaşındaymış gibi dinledi. Nurcan kapının eşiğinde ağladı, sen sabaha kadar oturdun."),
P(S("y_telefonA"), "Hasan Bey öksürerek güldü. “Talaş kokusu,” dedi, “babama söylerim.” Sonra telefonu Nurcan'a verdi."),
P(S("y_telefonB"), "“Bilmiyorum,” dedin. Hasan Bey öksürdü. “İyi,” dedi sonra. “Herkes biliyormuş gibi konuşuyor, hoca bile. Sen bilmiyorum dedin. İyi.”"),
P(S("y_telefonC"), "Hasan Bey düşündü. “Bir şey var sanıyorum,” dedi. “Ne olduğunu bilmiyorum, bir atölye belki. Belki de yalnızca talaş.”"),
P(S("y_telefonD"), "Yirmi dakika boyunca nefesini dinledin. Bir yerde nefes yavaşladı, Nurcan telefonu alıp “Uyudu hocam,” diye fısıldadı. Kapatmadınız, bir süre daha ikiniz de beklediniz."),
P(function(d){ return d.gec_kaldi; }, "Sabah ilk iş aradın. Nurcan açtı. “Gece dörtte,” dedi. “Bir kere daha sizi sordu, sonra artık soramadı.”"),
P(function(d){ return !d.gec_kaldi && !d.erken_dogum; }, "Hasan Bey üç gün sonra, şubatın yedisinde, sabaha karşı öldü."),
P(function(d){ return !d.gec_kaldi && d.erken_dogum; }, "Hasan Bey şubatın yirmisinde, torununu kucağına aldıktan üç gün sonra öldü."),
P(function(d){ return d.evde; }, "Atölyede, beşiğin yanında öldü. Nurcan da Kenan da oradaydı, pencere aralıktı. Dışarıda kar vardı, içeride talaş."),
P(function(d){ return !d.evde; }, "Dört yüz on ikide öldü, Kenan yanındaydı. Floresan kapalıydı, abajur açıktı, dolabın üstünde ceviz kuş duruyordu."),
"Ölüm belgesine ölüm nedenini sen yazdın. Hiç duymak istemediği o adı büyük harflerle kutucuğun içine yazdın."
], secenekler: [
{ t: "Cenazeye gidersin.", to: "t4", etki: { sefkat: 1, cenaze: true } },
{ t: "Kenan'a ve Nurcan'a başsağlığı mesajı yazarsın.", to: "t4", etki: { mesaj: true } },
{ t: "Polikliniğe girersin, kırk hasta bekliyor.", to: "t4", etki: { dogruluk: 1, poliklinik: true } },
{ t: "Dört yüz on ikiye gidip bir süre boş yatağın başında durursun.", to: "t4", etki: { sefkat: 1, oda: true } }
]},

t4: { saat: "Nisan", baslik: "Torun", metin: [
P(S("t3A"), "Cenazeye gittin. Çorum'da küçük bir mezarlık, gelenlerin çoğu marangoz, çırak, komşu, ellerinde yara izleri var. Biri elini sıktı. “Usta sizi çok anlattı,” dedi. Ne anlattığını sormadın, sonra arabada sormadığın için kendine kızdın."),
P(S("t3B"), "Mesajı yazdın, sildin, yeniden yazdın, sonunda dört kelime gönderdin. Kenan'dan cevap geldi: “Babam size güvenirdi.”"),
P(S("t3C"), "Polikliniğe girdin. On üçüncü hasta yetmişlerinde bir adamdı, “Doktor hanım, ben ne zaman evime dönerim?” diye sordu. Dosyasına bakıyormuş gibi yapıp bir süre başını kaldırmadın."),
P(S("t3D"), "Dört yüz on ikide yeni bir hasta vardı, genç bir kadın, seni görünce gülümsedi. Dolabın üstü boştu, kuşun durduğu yerde toz bezinin bıraktığı bir iz kalmıştı."),
P(function(d){ return !d.erken_dogum; }, "Nisan başında bir öğle arası kapın çalınıyor. Gelen Kenan, yanında Elçin, kucaklarında üç haftalık bir bebek var."),
P(function(d){ return d.erken_dogum; }, "Nisan başında bir öğle arası kapın çalınıyor. Gelen Kenan, yanında Elçin, kucaklarında yedi haftalık bir bebek var."),
"“Adını Hasan koyduk,” diyor Kenan. “Herkes böyle yapıyor biliyorum ama başka isim gelmedi aklımıza. Elçin ‘Aras’ diyordu, ben ağladım, vazgeçti.”",
P(function(d){ return (d.evde && !d.kemo && !d.kemo_devam) || d.alet || d.zimpara; }, "Telefonundan bir fotoğraf gösteriyor, ceviz beşik, başında kuş, içinde uyuyan bebek. “Bitirdi,” diyor Kenan, “son haftasında. Gagayı da inceltti.” Biraz duraklıyor. “Bir tahtanın kenarı pürüzlü kalmıştı, kim zımparaladı bilmiyorum. Bir sabah kalktım, pürüzsüzdü.”"),
P(function(d){ return !((d.evde && !d.kemo && !d.kemo_devam) || d.alet || d.zimpara); }, "Telefonundan bir fotoğraf gösteriyor, atölyenin köşesinde, naylonun altında yarım bir beşik. Yan tahtadaki bir isim yarıda kalmış, “Fat—”. “Bitiremedi,” diyor Kenan. “Ben denedim ama yapamadım. Ellerim onun elleri değil.”"),
P(function(d){ return d.cift_sir && !d.aile_bildi; }, "Sonra sana bakıyor. “Hocam, bir şey soracağım. Babam biliyor muydu? Ben hiç söylemedim ama son haftasında bana öyle bir baktı ki... Biliyor muydu?”"),
P(function(d){ return !(d.cift_sir && !d.aile_bildi); }, "Kenan ceketinin ceplerini yokluyor ama bir şey bulamıyor. “Teşekkür etmeye geldim,” diyor sonra. “Ne için, tam bilmiyorum ama geldim işte.”"),
"Bebek uyanıyor, yüzünü buruşturup ağlayacak gibi oluyor, sonra vazgeçiyor. Elçin “Acıktı,” diyor ama kimse kalkmıyor."
], secenekler: [
{ t: function(d){ return (d.cift_sir && !d.aile_bildi) ? "“Biliyordu,” dersin. Sözünü bozarak." : "Bebeği kucağına almak istersin."; }, to: "ts", etki: function(d){ if(d.cift_sir && !d.aile_bildi){ d.dogruluk++; d.son_acikladi = true; } else { d.sefkat++; } } },
{ t: function(d){ return (d.cift_sir && !d.aile_bildi) ? "“Bilmiyorum,” dersin. Sözünü tutarak." : "Kenan'a babasının sana öğrettiği bir şeyi anlatırsın."; }, to: "ts", etki: function(d){ if(d.cift_sir && !d.aile_bildi){ d.sefkat++; d.soz_tuttu = true; } else { d.ozerklik++; } } },
{ t: "“Babanız size beşikten fazlasını bıraktı,” dersin.", to: "ts", etki: { sefkat: 1 } },
{ t: "Bir şey demeden bebeğe bakarsın.", to: "ts", etki: { sessiz_son: true } }
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
P(function(d){ return d.son === "t4A" && (d.cift_sir && !d.aile_bildi); }, "Sözünü bozup Kenan'a “Biliyordu,” demiştin. Kenan bebeğe baktı. “Biliyordu,” dedi, sonra güldü. Elçin koluna dokununca gülmesi ağlamaya döndü."),
P(function(d){ return d.son === "t4A" && !(d.cift_sir && !d.aile_bildi); }, "Bebeği kucağına almıştın. Bir ceviz kuşu kadar hafif değildi, beklediğinden ağır ve sıcaktı, ağzını açıp kapatıyordu."),
P(function(d){ return d.son === "t4B" && (d.cift_sir && !d.aile_bildi); }, "Sözünü tutup “Bilmiyorum,” demiştin. Kenan “Peki,” demişti. İnanıp inanmadığını hiç öğrenemedin."),
P(function(d){ return d.son === "t4B" && !(d.cift_sir && !d.aile_bildi); }, "Kenan'a babasının sana öğrettiğini anlatmıştın, lifin yönüne, bastırmadan. “Bana da öyle derdi,” dedi Kenan, “ben hep bastırırdım.”"),
P(S("t4C"), "“Babanız size beşikten fazlasını bıraktı,” demiştin. Kenan düzeltilecek bir yeri olmadığı hâlde bebeğin battaniyesini düzeltmişti."),
P(S("t4D"), "Bir şey dememiştin. Bebek bir süre tavana baktı, sonra uyudu."),
"Hasan Bey bilerek öldü. Hastalığının adını duydu, ne kadar zamanı kaldığını öğrendi, son aylarını kendi istediği yerde geçirdi. Kenan önce sana öfkelendi, sonra öfkesi bir yerde kaybolup gitti, nerede kaybolduğunu sen de bilmiyorsun.",
"O kıştan sonra yeni hastalarına ilk görüşmede bir soru soruyorsun: “Ne kadarını bilmek istersiniz?” Kimi şaşırıyor, kimi her şeyi istiyor, kimi “Ne yapmam gerektiğini söyleyin, yeter,” diyor. Bir kadın bir keresinde ağladı: “Bunu bana kimse sormamıştı.”",
"Tarhan Hoca emekli oldu. Veda yemeğinde tabağını alıp yanına oturdu. “Galiba sen haklıydın,” dedi. “Ama ben otuz yıl insanlara söylemedim ve çoğu bana teşekkür etti, onu da unutma.” Sonra pilavından bir kaşık alıp “Tuzsuz,” dedi.",
"Masanda Nurcan'ın Hamburg'a dönmeden önce bıraktığı ceviz kuş duruyor, gagası incecik. Temizlikçi kadın her hafta onu kaldırıp altını siliyor, sonra biraz yamuk koyuyor. Sen de her pazartesi düzeltiyorsun."
]},

son_yalan: { son: true, baslik: "Huzurla Gitti", metin: [
P(function(d){ return d.son === "t4A" && (d.cift_sir && !d.aile_bildi); }, "Sözünü bozup Kenan'a “Biliyordu,” demiştin. Kenan bebeğe baktı. “Biliyordu,” dedi, sonra güldü. Elçin koluna dokununca gülmesi ağlamaya döndü."),
P(function(d){ return d.son === "t4A" && !(d.cift_sir && !d.aile_bildi); }, "Bebeği kucağına almıştın. Bir ceviz kuşu kadar hafif değildi, beklediğinden ağır ve sıcaktı, ağzını açıp kapatıyordu."),
P(function(d){ return d.son === "t4B" && (d.cift_sir && !d.aile_bildi); }, "Sözünü tutup “Bilmiyorum,” demiştin. Kenan “Peki,” demişti. İnanıp inanmadığını hiç öğrenemedin."),
P(function(d){ return d.son === "t4B" && !(d.cift_sir && !d.aile_bildi); }, "Kenan'a babasının sana öğrettiğini anlatmıştın, lifin yönüne, bastırmadan. “Bana da öyle derdi,” dedi Kenan, “ben hep bastırırdım.”"),
P(S("t4C"), "“Babanız size beşikten fazlasını bıraktı,” demiştin. Kenan düzeltilecek bir yeri olmadığı hâlde bebeğin battaniyesini düzeltmişti."),
P(S("t4D"), "Bir şey dememiştin. Bebek bir süre tavana baktı, sonra uyudu."),
"Hasan Bey öldü ve kimse ona bir şey söylemedi. Ya da söylememiş gibi yaptılar, ya da o duymamış gibi yaptı.",
"Kenan cenazeden sonra aradı. “Babam huzurla gitti hocam,” dedi, “sizin sayenizde. Son ana kadar umudunu kaybetmedi.” Telefonu kapattıktan sonra arabanı çalıştırmadan otoparkta oturdun.",
"Hasan Bey'in o akşamki sesi aklından çıkmıyor: “Bu oyunda en çok ben yalnız kaldım. Gece bunu konuşacak kimsem yoktu.”",
"Nurcan Hamburg'dan kısa bir mektup gönderdi: “Babamı siz öldürmediniz. Ama son aylarını onunla gerçekten yaşamamıza izin vermediniz. Bunu biliyor musunuz?” Mektubu çekmecene koydun. Arada açıp okuyorsun ve her seferinde ilk cümlede takılıp kalıyorsun.",
"Koridorda bazı ailelerle hâlâ aynı konuşmayı yapıyorsun. Bazen “Peki,” diyorsun, bazen demiyorsun. Neye göre karar verdiğini sorsalar söyleyemezsin."
]},

son_secim: { son: true, baslik: "Adını Duymadan", metin: [
P(function(d){ return d.son === "t4A" && (d.cift_sir && !d.aile_bildi); }, "Sözünü bozup Kenan'a “Biliyordu,” demiştin. Kenan bebeğe baktı. “Biliyordu,” dedi, sonra güldü. Elçin koluna dokununca gülmesi ağlamaya döndü."),
P(function(d){ return d.son === "t4A" && !(d.cift_sir && !d.aile_bildi); }, "Bebeği kucağına almıştın. Bir ceviz kuşu kadar hafif değildi, beklediğinden ağır ve sıcaktı, ağzını açıp kapatıyordu."),
P(function(d){ return d.son === "t4B" && (d.cift_sir && !d.aile_bildi); }, "Sözünü tutup “Bilmiyorum,” demiştin. Kenan “Peki,” demişti. İnanıp inanmadığını hiç öğrenemedin."),
P(function(d){ return d.son === "t4B" && !(d.cift_sir && !d.aile_bildi); }, "Kenan'a babasının sana öğrettiğini anlatmıştın, lifin yönüne, bastırmadan. “Bana da öyle derdi,” dedi Kenan, “ben hep bastırırdım.”"),
P(S("t4C"), "“Babanız size beşikten fazlasını bıraktı,” demiştin. Kenan düzeltilecek bir yeri olmadığı hâlde bebeğin battaniyesini düzeltmişti."),
P(S("t4D"), "Bir şey dememiştin. Bebek bir süre tavana baktı, sonra uyudu."),
"Hasan Bey hastalığının adını hiç duymadı. Ne kadar zamanı kaldığını ve o zamanla ne yapacağını biliyordu, gerisini sormadı. Bir keresinde “Marangoz tahtanın kimyasını bilmez,” demişti, “nasıl işleneceğini bilir.”",
P(function(d){ return d.soz_tuttu; }, "Kenan'a babasının bildiğini söylemedin. Kenan hâlâ babasını koruduğunu düşünüyor. Her bayram arayıp teşekkür ediyor ve her seferinde sesinde biraz gurur oluyor."),
P(function(d){ return d.son_acikladi; }, "Kenan'a babasının bildiğini söyledin. “O zaman bana öyle bakması...” dedi ama cümlenin sonunu getiremedi. “Beni koruyormuş,” dedi sonra, “ben onu koruduğumu sanıyordum.”"),
"Yeni hastalarına artık hep aynı soruyla başlıyorsun: “Ne kadarını bilmek istersiniz?” Kimi “Her şeyi,” diyor, kimi “Hiçbirini.” Kimi de Usta gibi kendi ölçüsünü koyuyor, hastalığın adını değil, zamanını istiyor.",
"Masanda Nurcan'ın el yazısıyla bir not duruyor, babasının son haftasında söylediği bir cümle: “Doktor hanıma söyle, adını duymadan gittim. İyi oldu.” Notun köşesinde bir kahve lekesi var, atmadın."
]},

son_umut: { son: true, baslik: "Yarım Beşik", metin: [
P(function(d){ return d.son === "t4A" && (d.cift_sir && !d.aile_bildi); }, "Sözünü bozup Kenan'a “Biliyordu,” demiştin. Kenan bebeğe baktı. “Biliyordu,” dedi, sonra güldü. Elçin koluna dokununca gülmesi ağlamaya döndü."),
P(function(d){ return d.son === "t4A" && !(d.cift_sir && !d.aile_bildi); }, "Bebeği kucağına almıştın. Bir ceviz kuşu kadar hafif değildi, beklediğinden ağır ve sıcaktı, ağzını açıp kapatıyordu."),
P(function(d){ return d.son === "t4B" && (d.cift_sir && !d.aile_bildi); }, "Sözünü tutup “Bilmiyorum,” demiştin. Kenan “Peki,” demişti. İnanıp inanmadığını hiç öğrenemedin."),
P(function(d){ return d.son === "t4B" && !(d.cift_sir && !d.aile_bildi); }, "Kenan'a babasının sana öğrettiğini anlatmıştın, lifin yönüne, bastırmadan. “Bana da öyle derdi,” dedi Kenan, “ben hep bastırırdım.”"),
P(S("t4C"), "“Babanız size beşikten fazlasını bıraktı,” demiştin. Kenan düzeltilecek bir yeri olmadığı hâlde bebeğin battaniyesini düzeltmişti."),
P(S("t4D"), "Bir şey dememiştin. Bebek bir süre tavana baktı, sonra uyudu."),
"Hasan Bey deneysel ilacın son dozundan üç hafta sonra hastanede öldü. Çalışma raporuna tek bir satır yazıldı: “Hasta 0047: progresyon, çalışmadan çıkarıldı, eksitus.”",
"Kenan cenazeden sonra aradı. “Her şeyi denedik hocam,” dedi, “siz de denediniz.” Sesi rahattı, denemiş olmanın rahatlığıydı bu.",
"Hasan Bey'in son haftaları bir serum torbasının altında, beşikten iki yüz kilometre uzakta geçti. Kuş dolabın üstünde yarım kaldı, beşik de naylonun altında yarım kaldı.",
P(function(d){ return d.sahte_onam; }, "Onam formu dosyada duruyor. Bir gün bir etik kurul o dosyayı açarsa bir imza bulacak, ya bir oğulun imzasını, ya da on iki sayfayı hiç okumamış bir marangozun. Bazı geceler o dosyanın arşivde hangi rafta durduğunu düşünüyorsun."),
"Kenan'a sorsan “Doğru yaptık,” der, Nurcan'a sorsan “Hayır,” der. Sana soran olmadı.",
"Bir gün Kenan atölyedeki yarım beşiği getirdi. “Bunu ne yapacağımı bilmiyorum,” dedi, sen de bilmiyordun. Beşik şimdi servisin bekleme salonunun köşesinde duruyor, çocuklar içine oyuncak atıyor. Geçen hafta biri içine bir ayıcık unuttu, kimse almadı, hâlâ orada."
]},

son_usta: { son: true, baslik: "Usta", metin: [
P(function(d){ return d.son === "t4A" && (d.cift_sir && !d.aile_bildi); }, "Sözünü bozup Kenan'a “Biliyordu,” demiştin. Kenan bebeğe baktı. “Biliyordu,” dedi, sonra güldü. Elçin koluna dokununca gülmesi ağlamaya döndü."),
P(function(d){ return d.son === "t4A" && !(d.cift_sir && !d.aile_bildi); }, "Bebeği kucağına almıştın. Bir ceviz kuşu kadar hafif değildi, beklediğinden ağır ve sıcaktı, ağzını açıp kapatıyordu."),
P(function(d){ return d.son === "t4B" && (d.cift_sir && !d.aile_bildi); }, "Sözünü tutup “Bilmiyorum,” demiştin. Kenan “Peki,” demişti. İnanıp inanmadığını hiç öğrenemedin."),
P(function(d){ return d.son === "t4B" && !(d.cift_sir && !d.aile_bildi); }, "Kenan'a babasının sana öğrettiğini anlatmıştın, lifin yönüne, bastırmadan. “Bana da öyle derdi,” dedi Kenan, “ben hep bastırırdım.”"),
P(S("t4C"), "“Babanız size beşikten fazlasını bıraktı,” demiştin. Kenan düzeltilecek bir yeri olmadığı hâlde bebeğin battaniyesini düzeltmişti."),
P(S("t4D"), "Bir şey dememiştin. Bebek bir süre tavana baktı, sonra uyudu."),
"Hasan Bey ölümünü bir iş gibi yaptı. Kırk yıl tahtaya nasıl davrandıysa son aylarına da öyle davrandı, lifin yönüne, acele etmeden.",
"Sen de o işin içindeydin. Bazen söyledin, bazen sustun, bir gece bir zımpara tuttun ya da bir telefonun ucunda nefes dinledin. Hiçbirinde doğru yaptığından emin değildin.",
"Torun Hasan büyüyor, Kenan her doğum gününde bir fotoğraf gönderiyor. Bir yaşında beşiğin içinde, iki yaşında beşiğe tutunmuş ayakta duruyor. Üç yaşında kuşu sökmüş, ağzına götürüyor, arkada Elçin'in uzanan eli bulanık çıkmış.",
"Hastalarının çoğunu unutuyorsun ama bazıları kalıyor. Usta sende talaş kokusu olarak kaldı. Bazen bir mobilyacının önünden geçerken yavaşlıyorsun. Bazen kötü bir haber vermeden önce pürüz arar gibi elini masanın kenarında gezdiriyorsun."
]}

},

ayna: function(d){
  var out = [];
  var a = d.dogruluk, b = d.sefkat, c = d.ozerklik;
  if(a >= b && a >= c) out.push("Çoğu zaman ailesine rağmen bile gerçeği söyledin. Kenan bunu sana uzun süre affetmedi.");
  else if(b >= c) out.push("Çoğu zaman yumuşattın, korudun, umut verdin. Usta bazı geceler bunu konuşacak kimseyi bulamadı.");
  else out.push("Çoğu zaman ne kadarını bilmek istediğine, nerede ölmek istediğine Usta'nın karar vermesine izin verdin.");
  if(d.cift_sir) out.push("Hem babanın hem oğlun sırrını taşıdın, ikisine de ayrı bir yüzle baktın.");
  if(d.sahte_onam) out.push("Bir onam formuna okunmamış bir imza attırdın.");
  if(d.zimpara) out.push("Bir gece bir beşiğin kenarını zımparaladın.");
  if(d.gec_kaldi) out.push("Son gece gitmedin. Sabah aradığında artık çok geçti.");
  return out;
},

dipnot: [
{ ad: "Hastanın özerkliği ve hekim paternalizmi", t: "Modern tıp etiğinin temel ilkelerinden biri, hastanın kendi bedeni ve tedavisi hakkında bilgilendirilmiş karar verme hakkıdır (Beauchamp ve Childress). Paternalizm ise hekimin ya da ailenin, hastanın iyiliği için ondan bilgi saklaması ya da onun yerine karar vermesidir. Türkiye'de Hasta Hakları Yönetmeliği hastanın bilgilendirilmesini esas alır; ama hastanın bilgi almayı reddetme hakkını da tanır." },
{ ad: "Hakikat ve umut", t: "Kötü haberi söylemek üzerine yazılan rehberler (örneğin SPIKES protokolü), hekime önce hastanın ne bildiğini ve ne kadarını bilmek istediğini sormayı öğütler. Araştırmalar, gerçeği bilen hastaların umudu kaybetmediğini; yalnızca umudun konusunun değiştiğini gösterir: iyileşmekten, iyi bir son yaşamaya." },
{ ad: "Merhametli yalan", t: "Kant'a göre yalan, iyi niyetle bile söylense, karşıdakini akıl sahibi bir varlık olarak görmemektir. Ama pek çok kültürde ve ailede, ağır bir gerçeği saklamak bir sevgi biçimi olarak yaşanır. Kenan'ın babasından, Hasan Bey'in oğlundan sakladığı şey, aynı sevginin iki yönüydü." },
{ ad: "Ölümle yüzleşme", t: "Heidegger'e göre insan, kendi ölümlülüğünü kabul ettiğinde ancak “sahici” bir varoluşa ulaşır. Hasan Bey'in beşiği, bu kabulün en somut biçimiydi: sonu bilinen bir zamanın içine, kendisinden sonra yaşayacak bir şeyi yerleştirmek." }
]
});
})();
