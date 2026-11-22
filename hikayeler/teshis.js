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
"Sabahın yedisi, onkoloji servisinin doktor odası. Kahve makinesi yine bozuk. Birisi üstüne “ARIZALI, VURMAYIN” yazıp bantlamış. Adın Ayla, kırk sekiz yaşındasın, yirmi yıldır bu serviste çalışıyorsun.",
"Ekranda dünkü PET görüntüleri. Pankreasın başında bir kitle. Karaciğerde, akciğerin tabanında, karın zarında parlak noktalar. Raporu beklemene gerek yok. Bu noktaları sayarken parmağın ekrana değiyor, bir iz kalıyor, kazağının koluyla siliyorsun.",
"Hasta: Hasan Yıldız, altmış iki, Çorum, emekli marangoz. Servistekiler ona “Usta” diyor. İlk gün hemşire odasının sallanan sandalyesini bir kibrit çöpü ve biraz tutkalla düzeltti. Evre dört. Ameliyat yok. Tedaviyle belki altı ay, tedavisiz üç dört.",
"Odadan çıktığında koridorda biri bekliyor. Otuz beş yaşlarında, takım elbiseli, kravatı gevşek, gömleğinin bir düğmesi yanlış iliklenmiş. Hasan Bey'in oğlu Murat. Raporu gece hastanenin sisteminden okumuş.",
"Kolunu tutuyor. Fark edince bırakıyor, özür diliyor, sonra yine tutuyor.",
"“Hocam, babama söylemeyin. Lütfen. Annem öldüğünde iki ay ağzını açmadı. Sabah kahvaltıda duvara bakıp otururdu. Siz bir şey deyin, ben de bir şey derim. Bırakın umutla gitsin.”"
], secenekler: [
{ t: "“Bu kararı babanızla konuşmadan veremeyiz,” dersin.", to: "a2", etki: { ozerklik: 1 } },
{ t: "“Anlıyorum,” dersin. Anlıyorsun da.", to: "a2", etki: { sefkat: 1, murata_anlayis: true } },
{ t: "“Yasa hastanın bilgilendirilmesini istiyor,” dersin.", to: "a2", etki: { dogruluk: 1 } },
{ t: "Murat'a babasının nasıl bir adam olduğunu sorarsın.", to: "a2", etki: { sefkat: 1, murat_anlatti: true } }
]},

a2: { saat: "Kasım, 09.30", baslik: "Dört Yüz On İki", metin: [
P(S("a1A"), "Murat'ın yüzü kapandı. “Babamı tanımıyorsunuz,” dedi ve asansöre yürüdü. Düğmeye üç kez bastı."),
P(S("a1B"), "Murat'ın omuzları düştü. “Sağ olun hocam,” dedi. Sanki bir söz vermişsin gibi. Hiçbir söz vermedin. Ama o öyle duydu, sen de düzeltmedin."),
P(S("a1C"), "“Yasa,” dedi Murat. “Gece babamın yanında yasa mı oturacak?” Bir cevabın yoktu."),
P(S("a1D"), "Murat anlattı: atölyeyi, talaş kokusunu, on yaşında ona ilk tabureyi yaptırdığını. “Taburenin bir ayağı kısa kaldı,” dedi. “Babam ‘Böyle kalsın, ilk işin bu, hatırla,’ dedi. Hâlâ duruyor bizim evde.” Sonra gözlerini sildi, “Kusura bakmayın,” dedi."),
"Dört yüz on iki numaralı oda. Hasan Bey yatakta oturuyor, dizlerinde bir havlu, havlunun üstünde talaş. Elinde bir çakı ve bir parça ceviz. Hemşireler kesici alet yasak diye üç kez uyarmış. Üç kez gülümsemiş, çakıyı yastığın altına koymuş, sonra yine çıkarmış.",
"“Gel doktor hanım,” diyor. “Bak, kuş. Beşiğin başına takacağım. Torunum olacak, dört ay sonra; Murat'ın hanımı. Beşiğin yarısı atölyede hazır. Bu kuşu da burada yapayım dedim, el boş durunca kafa çalışıyor.”",
"Yüzü sarı. Gözlerinin akı sarı. Elleri ise sağlam. Çakı cevizin üstünde hiç takılmıyor.",
"Kuşu pencereye tutup bakıyor, bir yerini üfleyip temizliyor. “Ne zaman çıkarım buradan? Beşiği bitirmem lazım.”"
], secenekler: [
{ t: "“Sonuçlara bakıyoruz Usta. Biraz daha zaman lazım,” dersin.", to: "a3", etki: { sefkat: 1, kacamak: true } },
{ t: "“Ne kadarını bilmek istersiniz?” diye sorarsın.", to: "x_bilmek", etki: { ozerklik: 1, sordu: true } },
{ t: "“Sonuçlar ciddi Usta,” dersin. Ne kadar ciddi olduğunu söylemeden.", to: "a3", etki: { dogruluk: 1, ciddi: true } },
{ t: "Yatağın kenarına oturup beşiği sorarsın.", to: "x_besik", etki: { sefkat: 1 } }
]},

x_bilmek: { saat: "Kasım, 09.45", baslik: "Rende", metin: [
"Hasan Bey çakıyı bırakıyor. Kuşu havlunun üstüne kanatları yukarı bakacak şekilde koyuyor, bir kez düzeltiyor.",
"“Doktor hanım,” diyor, “kırk yıl marangozluk yaptım. Tahtanın içinde çürük varsa rendelemeden bilirim. Elime alırım, ağırlığından bilirim. Vurursun, sesinden bilirim.”",
"“Dün akşam Murat elimi tuttu. Murat benim elimi askerden döndüğünden beri tutmadı. Bir şey biliyor. Ben de bildiğimi ona belli etmedim. Televizyonu açtım, maç vardı, maçtan konuştuk.”",
"Sesini alçaltıyor. Kapı kapalı olduğu hâlde.",
"“Ne biliyorsan bana söyle. Ama Murat'a söylediğini söyleme. O beni koruduğunu sansın. Çocukken ben onu çok korudum. Bir kere de o beni korusun, ne olur.”"
], secenekler: [
{ t: "Kabul edersin. Ona her şeyi söyleyeceksin, Murat'a hiçbir şey.", to: "a3", etki: { ozerklik: 1, cift_sir: true, biliyor: true } },
{ t: "“Murat'la konuşmanız gerek Usta. Yoksa ikiniz de birbirinizi korurken yalnız kalırsınız,” dersin.", to: "a3", etki: { dogruluk: 1 } },
{ t: "“Yarın,” dersin. “Yarın konuşalım.” Bir gün kazanmak için.", to: "a3", etki: { soz_yarin: true } },
{ t: "“Ne kadarını bilmek istersiniz?” diye yeniden sorarsın. Belki her şeyi değil.", to: "a3", etki: { ozerklik: 1, zaman_ister: true } }
]},

x_besik: { saat: "Kasım, 09.45", baslik: "Beşik", metin: [
"Yatağın kenarına oturuyorsun. Hasan Bey şaşırıyor. Doktorlar yatağa oturmaz. Sonra kuşu sana uzatıyor. Ceviz avucunda ılık.",
"“Babamın bahçesindeki ağaçtan,” diyor. “Kırk yıl önce kurudu. Kestim, çatıya kaldırdım, kurusun diye. Hanım her bahar ‘Şu odunları at artık,’ derdi. Atmadım. Murat'ın hanımı hamile kalınca anladım neden atmadığımı.”",
"Elleriyle havada bir beşik çiziyor. “Sallanır ama devrilmez. Başında bu kuş. Bebek uyanınca ilk onu görsün. Kenarlara babamın adını oyacağım, annemin, hanımın. Torun büyüyünce okusun.”",
"Kuşu senden geri alıp işlemeye devam ediyor. Sana bakmadan:",
"“Doğuma dört ay var. Dört ay yeter mi doktor hanım?”",
"Çakı cevizin üstünde kayıyor. İnce bir talaş kıvrılıp havluya düşüyor."
], secenekler: [
{ t: "“Yeter,” dersin.", to: "a3", etki: { sefkat: 1, yeter_dedi: true } },
{ t: "“Acele edin Usta,” dersin. Başka bir şey eklemeden.", to: "a3", etki: { dogruluk: 1, acele: true } },
{ t: "“Bilmiyorum,” dersin.", to: "a3", etki: { dogruluk: 1 } },
{ t: "“Aletlerinizi buraya getirtelim,” dersin. “Beşiği burada bitirin.”", to: "a3", etki: { sefkat: 1, alet: true } }
]},

a3: { saat: "Kasım, 13.00", baslik: "Konsey", metin: [
P(function(d){ return d.son === "a2A"; }, "Hasan Bey “Peki,” dedi, kuşa döndü. Sen kapıdan çıkarken arkandan seslendi: “Zaman lazım, değil mi? Zaman hep lazım.”"),
P(function(d){ return d.son === "a2C"; }, "“Ciddi,” dedi Hasan Bey, kelimeyi eline alıp tartar gibi. “Ne kadar ciddi?” Cevap vermeden çıktın. Koridorda, onun da bunu bir cevap saydığını düşündün."),
P(S("x_bilmekA"), "Her şeyi söyledin. Hasan Bey dinledi, bir kere bile gözünü kaçırmadı. Sonunda “Dört ay,” dedi. “Beşiğe yeter.” Kuşu eline aldı. “Murat'a söyleme.” Söz verdin. Artık babanın da oğulun da sırrı sendeydi."),
P(S("x_bilmekB"), "Hasan Bey güldü. “Murat'la konuşmak mı? Biz kırk yıldır konuşmadan anlaşırız. Konuşursak kavga ederiz, bilirim.”"),
P(S("x_bilmekC"), "“Yarın,” dedi Hasan Bey. “Yarın iyi.” Gülümsedi. “Yarın da gelirsin o zaman.”"),
P(S("x_bilmekD"), "Hasan Bey düşündü. “Adını söyleme,” dedi. “Hastalığın. Adını duyarsam içime yerleşir. Sadece ne kadar, onu söyle.”"),
P(S("x_besikA"), "“Yeter,” dedin. Hasan Bey'in yüzü açıldı, çakı hızlandı. Koridorda kendine dört ayı saydın: aralık, ocak, şubat, mart."),
P(S("x_besikB"), "“Acele edin,” dedin. Çakı durdu. Sonra devam etti, biraz daha hızlı. İkiniz de başka bir şey demediniz."),
P(S("x_besikC"), "“Bilmiyorum,” dedin. “Kimse bilmez,” dedi Hasan Bey. Çakıyı bıraktı. “Ama sen benden fazla biliyorsun.”"),
P(S("x_besikD"), "Ertesi gün Murat bir çanta dolusu alet getirdi: rendeler, keskiler, zımpara. Dört yüz on iki atölyeye döndü. Başhemşire önce tutanak tutmakla tehdit etti, üçüncü gün bir çaydanlık getirdi."),
"Öğleden sonra tümör konseyi. Uzun masa, ekran, altı hekim, bir tabak kuru pasta. Masanın başında servis şefi Prof. Tarhan. Altmış dört yaşında, saçları bembeyaz, toplantılarda kalemini dişler.",
"Hasan Bey'in görüntüleri ekranda. Cerrah başını iki yana sallıyor: ameliyat yok. Seçenekler: ağır bir kemoterapi, belki iki üç ay, yan etkileri ağır. Sponsorlu bir deneysel ilaç çalışması, bir kontenjan boş. Ya da yalnızca destek bakımı.",
"Tarhan Hoca kalemini masaya vuruyor. “Ailesi istemiyorsa söylemeyiz,” diyor. “Otuz yıldır böyle yapıyorum. Bir tane hasta gelip ‘Neden bana söylemediniz?’ demedi.”",
"Kimse itiraz etmiyor. Genç bir asistan not alıyor, pastaya uzanıp vazgeçiyor."
], secenekler: [
{ t: "“Hocam, yönetmelik açık: hasta bilgilendirilir. Aile değil, hasta,” dersin.", to: "a4", etki: { dogruluk: 1 } },
{ t: "“Haklısınız hocam. Bizde böyle,” dersin.", to: "a4", etki: { sefkat: 1, tarhana_uydu: true } },
{ t: "“Ölen hasta şikâyet edemez hocam,” dersin.", to: "a4", etki: { ozerklik: 1, tarhan_kizdi: true } },
{ t: "Bir şey söylemezsin. Not alırsın.", to: "a4", etki: { not_aldi: true } }
]},

a4: { saat: "Kasım, 16.00", baslik: "Nurcan", metin: [
P(S("a3A"), "Tarhan Hoca sana baktı. “Yönetmeliği ben de okudum Ayla Hanım,” dedi. “Yönetmelik hiç gece nöbeti tutmadı.” Konsey dağıldı. Pastaya kimse dokunmamıştı."),
P(S("a3B"), "Tarhan Hoca memnun, kalemini cebine koydu. Masadan kalkarken genç asistan sana baktı, bir şey soracak gibi oldu, sormadı."),
P(S("a3C"), "Masa sustu. Tarhan Hoca'nın kulakları kızardı. “Burası mahkeme değil,” dedi. Kalemini bir daha masaya vurmadı."),
P(S("a3D"), "Not aldın. Sonra kâğıda baktın: yalnızca “Usta” yazmışsın, altını iki kez çizmişsin."),
"Saat dörtte koridorda sesler. Hasan Bey'in kızı Nurcan, sabah Hamburg'dan inmiş. Valizi hâlâ yanında, tekerleğinde havaalanı etiketi. Otuz yaşında, on yıldır Almanya'da hemşire. Murat'la kapının önünde, alçak sesle ama sert, kavga ediyorlar.",
"“Almanya'da hastaya söylenir,” diyor Nurcan. “Babamın hayatı bu. Onu çocuk yerine koyuyorsunuz.”",
"“Sen on yıldır yoksun,” diyor Murat. “Annem öldüğünde de yoktun. Babamın o iki ayını ben gördüm. Ben. Sen Hamburg'dan telefonda ‘Nasılsın baba?’ diyordun, o da ‘İyiyim kızım’ diyordu.”",
"Nurcan'ın yüzü beyazlıyor. Valizin sapını öyle sıkıyor ki parmak boğumları ağarıyor. Sonra ikisi de sana dönüyor."
], secenekler: [
{ t: "Nurcan'ın tarafını tutarsın: “Babanızın bilmeye hakkı var.”", to: "a5", etki: { dogruluk: 1, zeynep_yaninda: true } },
{ t: "Murat'ın tarafını tutarsın: “Babanızı en iyi siz tanıyorsunuz.”", to: "a5", etki: { sefkat: 1, murat_yaninda: true } },
{ t: "İkisini ayırır, ayrı ayrı konuşursun.", to: "a5", etki: { sefkat: 1, ayri: true } },
{ t: "“Sizin ne istediğinizi değil, babanızın ne isteyeceğini konuşun,” dersin.", to: "a5", etki: { ozerklik: 1 } }
]},

a5: { saat: "Kasım, 02.10", baslik: "Gece", metin: [
P(S("a4A"), "Nurcan sana minnetle baktı. Murat koridorun sonuna yürüdü, pencerenin önünde durdu, telefonunu çıkarıp ekrana baktı. Ekran kapalıydı."),
P(S("a4B"), "Murat'ın yüzü yumuşadı. Nurcan ise “Siz de mi?” dedi, valizi sürükleyerek odaya girdi. Tekerlek eşiğe takıldı, sert çekti."),
P(S("a4C"), "Murat'la merdiven boşluğunda, Nurcan'la kantinde konuştun. İkisi de aynı cümleyi kurdu, başka kelimelerle: “Babamı kaybetmekten korkuyorum.” Birbirlerine bunu söyleyemiyorlardı."),
P(S("a4D"), "İkisi de sustu. Sonra aynı anda konuştular. Nurcan “Bilmek isterdi,” dedi. Murat “İstemezdi,” dedi. Birbirlerine baktılar. İlk kez neredeyse gülecek gibi oldular."),
"O gece nöbetçisin. Saat ikiyi on geçe dört yüz on ikinin kapısının altından ışık sızıyor. Telefon ışığı.",
"Hasan Bey uyumamış. Telefonun fenerini açıp komodine yaslamış, ışığında kuşu işliyor. Seni görünce çakıyı bırakmıyor.",
"“Uyku tutmuyor,” diyor. “Gündüz Murat var, hemşireler var, yemek arabası var. Gece bir ben varım bir de bu kuş.”",
P(function(d){ return d.biliyor; }, "“Söylediğini düşünüp duruyorum,” diyor. “Dört ay. Tuhaf, bilince hafifledim. Ama Murat'ın yüzüne bakınca yine ağırlaşıyor.”"),
P(function(d){ return !d.biliyor; }, "Kuşu ışığa tutuyor, sonra indiriyor. Sesi sakin. Bir tahta siparişi verir gibi:"),
P(function(d){ return !d.biliyor; }, "“Doktor hanım. Gece oldu. Murat yok, kimse yok. Doğru söyle bana. Ölüyor muyum?”"),
P(function(d){ return d.biliyor; }, "Sonra kuşu bırakıyor. “Bir şey soracağım. Murat'a söyleyeyim mi bildiğimi? Sen olsan ne yapardın?”")
], secenekler: [
{ t: function(d){ return d.biliyor ? "“Söyleyin,” dersin. “İkiniz de yalnız kalmayın.”" : "“Evet,” dersin. Gecenin içinde, tek kelimeyle."; }, to: "a6", etki: function(d){ d.dogruluk++; if(!d.biliyor){ d.biliyor = true; d.gece_soyledi = true; } else { d.murata_soyle = true; } } },
{ t: function(d){ return d.biliyor ? "“Bu sizin kararınız Usta. Ben karışamam,” dersin." : "“Bunu yarın, gündüz, birlikte konuşalım,” dersin."; }, to: "a6", etki: { ertele: true } },
{ t: "“Siz ne düşünüyorsunuz?” diye sorarsın.", to: "a6", etki: { ozerklik: 1, ona_sordu: true } },
{ t: "Bir şey demeden yatağın yanındaki sandalyeye oturursun. Fener ışığında, onunla.", to: "a6", etki: { sefkat: 1, el: true } }
]},

a6: { saat: "Kasım, 09.00", baslik: "Aile Odası", metin: [
P(function(d){ return d.gece_soyledi; }, "“Evet,” demiştin. Hasan Bey feneri kapatmıştı. Karanlıkta “Sağ ol,” demişti. “Kimse söylemiyordu. Söylemeyince daha korkunç.” Sabaha kadar çakının sesini duydun. Şimdi Usta biliyor. Masanın başındaki iki çocuğu bildiğini bilmiyor."),
P(function(d){ return d.murata_soyle; }, "Hasan Bey düşündü. “Belki sabah,” dedi. Sabah Murat geldi, kahvaltı tepsisini açtı, babasına peynir böldü. Hasan Bey bir şey söylemedi."),
P(S("a5B"), "“Gündüz,” dedi Hasan Bey. “Peki.” Feneri kapattı. Karanlıkta çakının sesi devam etti. Işığa ihtiyacı yoktu."),
P(S("a5C"), "Hasan Bey kuşu çevirdi durdu. “Bütün gece düşündüm,” dedi. “Bir yere varamadım. Sen varırsan söyle.”"),
P(S("a5D"), "Oturdun. Hasan Bey bir süre çalıştı, sonra kuşu sana uzattı: “Tut şunu, ışığa doğru.” Tuttun. Kanadın bir yerini inceltti. Saat üçe kadar ikiniz de başka bir şey konuşmadınız."),
"Sabah dokuz. Penceresiz bir toplantı odası. Masa, dört sandalye, bir kutu mendil. Hastanede buraya “aile odası” derler. Mendil kutusunun yanında biri bir kalem unutmuş, kapağı yok.",
"Murat bir yanda, Nurcan öbür yanda. Tarhan Hoca kapının yanında ayakta. Gelmek zorunda değildi, gelmiş.",
"Dosyada bir boşluk var: “Hastanın bilgilendirilme durumu.” Onu senin doldurman gerekiyor.",
"“Hocam, ne karar verirseniz verin, babamın moralini bozmayın,” diyor Murat. “Size güveniyorum.” Nurcan: “Ben de güveniyorum. Doğru olanı yapacağınıza.” İkisi de “güveniyorum” derken sana değil, birbirine bakıyor."
], secenekler: [
{ t: "“Ona her şeyi bugün ben söyleyeceğim.”", to: "h1", etki: { dogruluk: 2, kol: "h" } },
{ t: "“Murat Bey'in dediği gibi yapacağız: küçük bir kitle diyeceğiz, tedaviye başlayacağız.”", to: "s1", etki: { sefkat: 1, kol: "s" } },
{ t: "“Babanıza ne kadarını bilmek istediğini soracağım. Sonra onun dediği olacak.”", to: "c1", etki: { ozerklik: 2, kol: "c" } },
{ t: "“Deneysel bir ilaç çalışması var. Ona bir şans verelim.” Bu şansı gerçeği söylemeden verip veremeyeceğini bilmeden.", to: "u1", etki: { kol: "u", umut: true } }
]},

/* ---------- HAKİKAT KOLU ---------- */
h1: { saat: "Kasım, 11.00", baslik: "Söylemek", metin: [
P(S("a6A"), "Aile odasından doğruca dört yüz on ikiye yürüdün. Murat arkandan bir şey söyledi. Duymadın, ya da duymamış gibi yaptın."),
P(function(d){ return d.kol === "h" && d.son === "u1A"; }, "Onam formunda, imza yerinin hemen üstünde bir cümle vardı: “Hastalığım ve tedavim hakkında bilgilendirildim.” O imzayı bir yalanın altına attırmayacaktın. Kâğıdı katlayıp dört yüz on ikiye yürüdün."),
"Hasan Bey kuşu bitirmiş. Dolabın üstünde duruyor, kanatları açık. Seni görünce doğruluyor. Yüzünden bir şey okuyor.",
"Sandalyeyi yatağa çekiyorsun. Yıllar önce bir kursta öğrendiğin sıralama aklına geliyor: önce ne bildiğini sor, sonra ne kadar bilmek istediğini, sonra söyle, sonra sus. Kursta susmanın kaç dakika süreceğini söylememişlerdi.",
P(function(d){ return d.biliyor; }, "“Biliyorum,” diyor Hasan Bey, sen daha başlamadan. “Ama sen yine söyle. Gündüz söyle. Gece söylenen sayılmaz.”"),
"Söylüyorsun. Pankreas. Yayılmış. Ameliyat yok. Tedavi var. İyileştirmek için değil, zaman kazanmak için. Ne kadar zaman? Aylar.",
"Hasan Bey dinliyor. Koridordan bir servis arabası geçiyor. Tekerleklerinden biri gıcırdıyor, uzaklaşıyor.",
"“Dört ay mı?” diyor.",
"“Belki daha az. Belki biraz fazla.”",
"Dolabın üstündeki kuşu alıyor. “Çakımı ver,” diyor. “Gagası kalın oldu.”",
"Kapıda Murat. Duymuş. Elindeki simit poşeti yere düşüyor. Almadan dönüp gidiyor."
], secenekler: [
{ t: "Hasan Bey'in yanında kalırsın.", to: "h2", etki: { sefkat: 1, kaldi: true } },
{ t: "Murat'ın peşinden gidersin.", to: "h2", etki: { sefkat: 1, murat_pesinden: true } },
{ t: "Hasan Bey'i bir süre yalnız bırakırsın.", to: "h2", etki: { ozerklik: 1 } },
{ t: "Nurcan'ı içeri çağırırsın.", to: "h2", etki: { zeynep_iceri: true } }
]},

h2: { saat: "Kasım", baslik: "Şikâyet", metin: [
P(S("h1A"), "Yanında kaldın. Hasan Bey yarım saat kuşun gagasını inceltti. Sonra simit poşetini işaret etti: “Al şunu, yazık.” Simidi ikiye böldünüz."),
P(S("h1B"), "Murat'ı merdiven boşluğunda buldun. Duvara yaslanmış, ağlıyordu. “Size söyledim!” diye bağırdı, ses merdivenlerde yankılandı. Sonra sesi kırıldı. “Benim babamı siz mi tanıyacaksınız?”"),
P(S("h1C"), "Odadan çıktın. Kapının camından baktığında Hasan Bey'in pencereye döndüğünü gördün. Uzun süre kıpırdamadı. Sonra çakıya uzandı."),
P(S("h1D"), "Nurcan içeri girdi, babasının yanına oturdu. Hasan Bey kızının saçını kulağının arkasına itti, küçükken yaptığı gibi. Nurcan Hamburg'dan getirdiği cümlelerin hiçbirini kurmadı. Ağladı."),
P(S("s2D"), "Nurcan'ı beklemeden Hasan Bey'e her şeyi söyledin. Üç haftalık bir yalanı bir öğleden sonra yıktın. Bitince Hasan Bey kafasını sıvazladı, eline kalan saçlara baktı. “Bunun içinmiş demek,” dedi. Sesi neredeyse rahatlamıştı."),
"İki gün sonra başhekimlikten bir yazı. Murat Yıldız şikâyet dilekçesi vermiş: “Doktor, ailenin açık talebine rağmen babamı habersizce bilgilendirmiş, moralini bozmuştur.”",
"Tarhan Hoca seni odasına çağırıyor. Kızgın değil. Yorgun. Masasında torununun resmi, yanında bir kutu mide ilacı. “Ayla, yönetmelik senden yana. Ama bu servisi ben yönetiyorum, ailelerle savaşamam. Bir dahakine bana sor.”",
"Aynı gün Hasan Bey taburcu olmak istiyor. Çorum'a, atölyesine. “Burada ölmem,” diyor. “Burası çamaşır suyu kokuyor.”",
"Kemoterapi başlasa iki üç ay kazandırabilir. Başlamasa atölyede belki dört ay. Belki daha az. Belki yatakta."
], secenekler: [
{ t: "Taburculuğunu desteklersin. Evde bakım ayarlarsın.", to: "h3", etki: { ozerklik: 1, evde: true } },
{ t: "Kemoterapiye ikna etmeye çalışırsın: Çorum'da da alabilir.", to: "h3", etki: { dogruluk: 1, evde: true, kemo: true } },
{ t: "Murat'a gidip özür dilersin. Kararından değil, yolundan.", to: "h3", etki: { sefkat: 1, evde: true, ozur: true } },
{ t: "Başhekime savunmanı yazarsın. Tek kelimesini geri almadan.", to: "h3", etki: { dogruluk: 1, evde: true, savunma: true } }
]},

h3: { saat: "Aralık", baslik: "Atölye", metin: [
P(S("h2A"), "Evde bakım ekibini aradın, Çorum'daki aile hekimine uzun bir mektup yazdın, ağrı kesici dozlarını el yazınla bir kâğıda döktün. Hasan Bey kâğıdı katlayıp gömlek cebine koydu, kuşun yanına."),
P(S("h2B"), "“Saçım dökülür mü?” Dökülebilir. “Ellerim titrer mi?” Titreyebilir. Hasan Bey ellerine baktı. “Peki,” dedi. “Ama haftada bir hastane. Gerisi atölye.”"),
P(S("h2C"), "Murat özrünü dinledi. Ne kabul etti ne reddetti. “Babam size teşekkür etti,” dedi, ayakkabısına bakarak. “Ben edemem. Ama o etti.”"),
P(S("h2D"), "Savunmanı yazdın: iki sayfa, yönetmelik maddeleriyle. Başhekim dosyaya koydu. Şikâyet bir yere varmadı. Kantinde bazı meslektaşların artık senin masana oturmuyor."),
P(S("s3A"), "Murat'a hiçbir şey söylemedin. Kemoterapiyi “ara verdik” diye durdurdun. Hasan Bey taburcu oldu; Murat babasının iyileştiğini sandı. Arabaya binerken Hasan Bey sana göz kırptı."),
"Aralık ortasında telefonuna bir fotoğraf geliyor, Nurcan'dan. Bir atölye: tavandan sarkan çıplak ampul, duvarda dizili keskiler, yerde talaş. Ortada yarım bir beşik. Ceviz, kızıl kahverengi. Yan tahtalarda isimler oyulmaya başlanmış.",
"Beşiğin yanında, bir taburede Hasan Bey. Zayıflamış, yanakları çökmüş. Elinde rende. Taburenin bir ayağı kısa. Altına katlanmış bir karton sıkıştırılmış.",
"Altında Nurcan'ın mesajı: “Günde iki saat çalışıyor, sonra yatıyor. İlaçlarını içiyor. Size selam söyledi. Kuşu taktı.”",
"Fotoğrafı büyütüyorsun. Beşiğin başında ceviz kuş. Gagası incecik. O kısa ayaklı taburenin Murat'ın ilk işi olduğunu düşünüyorsun. Sonra bunu nereden bildiğini hatırlayamıyorsun."
], secenekler: [
{ t: "Nurcan'a uzun bir cevap yazarsın.", to: "t1", etki: { sefkat: 1 } },
{ t: "“Bir şeye ihtiyacı olursa arayın,” yazarsın. “Gece de.”", to: "t1", etki: { sefkat: 1, ara_dedi: true } },
{ t: "Fotoğrafı Tarhan Hoca'ya gösterirsin.", to: "t1", etki: { dogruluk: 1, tarhana_foto: true } },
{ t: "Fotoğrafı kaydedersin, cevap yazmazsın.", to: "t1" }
]},

/* ---------- SIR KOLU ---------- */
s1: { saat: "Kasım", baslik: "Küçük Bir Kitle", metin: [
P(S("u1C"), "Onam formunu koordinatöre imzasız geri verdin. “Başka bir hastaya,” dedin. Koordinatör formu dosyasına koyup bir sonraki ismi okudu."),
P(S("a6B"), "Murat'ın omuzları gevşedi. Nurcan kalkıp çıktı. Kapıyı çarpmadı. Kapıyı yavaşça, sonuna kadar kapattı."),
"Dört yüz on ikiye Murat'la giriyorsunuz. Murat babasının yanına oturup elini tutuyor. Sen ayakta kalıyorsun. Oturursan yalan kolaylaşacak gibi geliyor.",
"“Usta,” diyorsun, “pankreasta küçük bir kitle var. İlaçla küçülteceğiz. Biraz zor bir tedavi, ama siz sağlamsınız.”",
"Kelimeler kolay çıkıyor. Bunu daha önce yaptın. Servisteki herkes yaptı. Küçük. İlaçla. Sağlamsınız. Her biri tek başına neredeyse doğru.",
"Hasan Bey sana bakıyor. Yüzünde bir şey kıpırdamıyor. Sonra Murat'a bakıyor. Oğlunun elinin titrediğini görüyor, onu kendi iki elinin arasına alıyor.",
"“Peki doktor hanım,” diyor. “Siz bilirsiniz.”",
"Koridora çıkınca Murat sana sarılıyor. Ceketi sigara ve kolonya kokuyor. “Sağ olun hocam. Sağ olun.”",
"Kemoterapi ertesi gün başlıyor. Serum torbası askıda. Hasan Bey sol kolunda damar yoluyla, sağ eliyle kuşu işliyor. Arada serumun damlalarını sayıyor.",
P(function(d){ return d.biliyor; }, "Ama sen biliyorsun: o zaten biliyor. Bu oyunu oğlu için oynuyor. Sen de oynuyorsun. Odada üç kişi birbirine yalan söylüyor ve kimse kimseye kızgın değil."),
"Nurcan koridorun sonunda, kollarını kavuşturmuş. Sana bakıyor."
], secenekler: [
{ t: "Nurcan'ın yanına gidip kararını açıklarsın.", to: "s2", etki: { dogruluk: 1 } },
{ t: "Nurcan'la göz göze gelmemeye çalışırsın.", to: "s2", etki: { kacti: true } },
{ t: "Kemoterapi dozunu en düşükte tutarsın. Yan etkiler az olsun.", to: "s2", etki: { sefkat: 1, dusuk_doz: true } },
{ t: "Hasan Bey'in odasına bir kez daha girip yalnızca “İyi misiniz?” diye sorarsın.", to: "s2", etki: { sefkat: 1 } }
]},

s2: { saat: "Aralık", baslik: "Saç", metin: [
P(S("s1A"), "Nurcan dinledi. “Siz de mi bu ülkenin doktorlarından birisiniz?” dedi. Sonra yüzünü ovuşturdu. “Pardon. Ben de Hamburg'da yorgun bir hemşireyim. Orada ben neleri söylemiyorum kim bilir.”"),
P(S("s1B"), "Nurcan'a bakmadın. Ama koridorda, kantinde, asansörde bakışını ensende hissettin. Asansörü beklemeyi bırakıp merdivenden inmeye başladın."),
P(S("s1C"), "Dozu en düşükte tuttun. İlk hafta Hasan Bey'in midesi bulanmadı; Murat çok sevindi. İlacın tümöre etkisi de en düşükteydi. Bunu Murat'a söylemedin."),
P(S("s1D"), "“İyiyim,” dedi Hasan Bey. Sonra seni süzdü. “Sen iyi misin? Yüzün sarı. Benimki gibi.” Güldü, öksürdü, yine güldü."),
"Üç hafta geçiyor. Bir sabah Hasan Bey'in yastığında saç tutamları. Hemşire bir poşete topluyor. Hasan Bey poşete bakıyor.",
"“Küçük bir şey için bu kadar saç mı gider?” diyor. Pencereye.",
"Bulantı, halsizlik, ağızda yaralar. Çakı yavaşladı. Bazı günler kuşa hiç dokunmuyor. Dolabın üstünde, yarım.",
"Nurcan bir akşam seni kantinde buluyor, tepsisinde soğumuş bir mercimek çorbası. “Pazartesi dönmem lazım,” diyor. “Dönmeden ona söyleyeceğim. İzninizle ya da izniniz olmadan. Babam saçının neden döküldüğünü bilmeden ölmesin.”"
], secenekler: [
{ t: "Yalanı sürdürürsün. Nurcan'dan babasının son haftalarını kavgaya çevirmemesini istersin.", to: "s3", etki: { sefkat: 1, surdur: true } },
{ t: "“Söyleyin,” dersin. “Ben yanınızda olurum.”", to: "s3", etki: { dogruluk: 1, zeynep_soyledi: true } },
{ t: "Kemoterapiyi durdurursun. Yalanın bedelini hiç değilse onun bedeni ödemesin.", to: "s3", etki: { sefkat: 1, kemo_dur: true } },
{ t: "Nurcan'ı beklemeden kendin söylersin. Bugün.", to: "h2", etki: { dogruluk: 2, kol: "h", ortaya: true } }
]},

s3: { saat: "Aralık", baslik: "Bildiğini Bilmek", metin: [
P(S("s2A"), "Nurcan sana uzun uzun baktı, sonra pazartesi gitti. Havaalanından bir mesaj attı: “Bu sizin vicdanınız.” Mesajı silmedin."),
P(S("s2B"), "Nurcan babasına söyledi. Sen kapının yanında durdun. Hasan Bey kızını dinledi, sonra “Biliyordum kızım,” dedi. “Ağabeyine söyleme ama.” Nurcan ağladı, sonra güldü, sonra burnunu çekip yine ağladı."),
P(S("s2C"), "Kemoterapiyi durdurdun. Murat'a “Vücudu dinlensin, ara verdik,” dedin. Bir yalanın içine bir yalan daha. Bu ikincisi Hasan Bey'in midesini ve ellerini kurtardı."),
"Bir akşam, Murat gittikten sonra, Hasan Bey seni çağırtıyor. Kuş dolabın üstünde, yarım.",
"“Otur doktor hanım.”",
"Oturuyorsun.",
"“Bana yalan söylediniz,” diyor. Sesinde öfke yok. “Ben biliyordum. Sen de bildiğimi biliyordun, gözünden belliydi. Murat da bilmediğimi sanıyor. İyi oynadık, hepimiz. Ama oyunda en çok ben yalnız kaldım. Gece bunu konuşacak kimsem yoktu.”",
"Pencereden Ankara'nın ışıkları. Bir yerde bir inşaat vinci kırmızı yanıp sönüyor.",
"“Bu ilacı bırakalım. Beni eve gönderin. Murat'a iyileşti deyin, ne derseniz deyin. Ben beşiği bitireyim. Oğlum da babası iyileşti sansın. Son yalanımız bu olsun.”"
], secenekler: [
{ t: "Kabul edersin. Taburcu edersin; Murat'a iyileşme yolunda olduğunu söylersin.", to: "h3", etki: { sefkat: 1, ozerklik: 1, evde: true } },
{ t: "“Murat'a hep birlikte gerçeği söyleyelim Usta,” dersin.", to: "t1", etki: { dogruluk: 2, ortaya: true, aile_bildi: true } },
{ t: "“Tedaviyi bırakmanızı öneremem,” dersin.", to: "t1", etki: { dogruluk: 1, kemo_devam: true } },
{ t: "Bir cevap veremezsin. Boğazın düğümleniyor ve o bunu görüyor.", to: "t1", etki: { sefkat: 1, aglamak: true } }
]},

/* ---------- SEÇİM KOLU ---------- */
c1: { saat: "Kasım", baslik: "Ne Kadarını", metin: [
"Dört yüz on ikide, yalnız. Kapıyı kapatıyorsun. Murat'la Nurcan kantinde bekliyor. İkisine de babalarının ne derse o olacağını söyledin. İkisi de bunu kendi lehine anladı.",
P(function(d){ return d.sordu; }, "“Yine mi soracaksın?” diyor Hasan Bey. “Geçen sefer cevap vermemiştim, değil mi?”"),
"“Usta, size tahlillerinizi anlatabilirim. Her şeyi. Ya da yalnızca bilmek istediğiniz kadarını. Kimi her ayrıntıyı ister, kimi hiçbirini, kimi yalnızca ne yapması gerektiğini. Siz hangisisiniz?”",
"Hasan Bey çakıyı bırakıyor. Bunu ona kimsenin sormadığını yüzünden görüyorsun.",
"“Hiç düşünmedim,” diyor. “İnsan ne kadarını bilmek ister ki?” Pencereye bakıyor. Bir güvercin pervaza konup gidiyor.",
"“Adını söyleme,” diyor sonunda. “Hastalığın. Adını duyarsam her gece onunla yatarım. Resim, rakam da istemem. Bir şey söyle yalnız: ne kadar zamanım var?”",
P(function(d){ return d.zaman_ister; }, "Bunu geçen sefer de istemişti. Bu kez sesi daha düz.")
], secenekler: [
{ t: "“Üç dört ay Usta. Belki biraz daha az.”", to: "c2", etki: { dogruluk: 1, zaman_soyledi: "net" } },
{ t: "“Aylar. Kaç ay olduğunu kimse bilemez,” dersin.", to: "c2", etki: { sefkat: 1, zaman_soyledi: "belirsiz" } },
{ t: "“Bunu çocuklarınızın yanında mı duymak istersiniz?” diye sorarsın.", to: "c2", etki: { ozerklik: 1, cocuk_yaninda: true } },
{ t: "“Önce şunu söyleyin: bu zamanla ne yapmak istersiniz?” diye sorarsın.", to: "c2", etki: { ozerklik: 1, ne_yapmak: true } }
]},

c2: { saat: "Kasım", baslik: "Zaman", metin: [
P(S("c1A"), "“Üç dört ay,” dedin. Hasan Bey parmaklarıyla saydı: kasım, aralık, ocak, şubat. “Mart'ta doğum,” dedi. “Sıkı çalışırsam yetişir.”"),
P(S("c1B"), "“Aylar,” dedin. Hasan Bey güldü. “Kaç ay olduğunu bilmeyen marangoz işe ne zaman başlayacağını bilemez,” dedi. “Ben başlamıştım ama. Devam.”"),
P(S("c1C"), "“Yok,” dedi Hasan Bey. “Onların yanında değil. Murat ağlar, Nurcan soru sorar, ben de onları avutmaya uğraşırım. Önce ben duyayım.”"),
P(S("c1D"), "Hasan Bey parmaklarıyla saydı: “Beşiği bitirmek. Torunu görmek, görebilirsem. Bir de...” Durdu. “Hanımın mezarına gitmek. On yıldır gidemedim. Gidip ne diyeceğimi bilemedim.”"),
"Hasan Bey kararını veriyor: kemoterapi yok. Ağrı kesici, evde bakım, atölye.",
"Sonra sesini alçaltıyor.",
"“Çocuklara bildiğimi söyleme. Murat beni korumak istiyor. Korusun. Nurcan bana gerçeği söylemek istiyor. O da beklesin. Ben gidince ne bildiysem onlarda kalsın, her biri kendi bildiğiyle.”"
], secenekler: [
{ t: "Söz verirsin.", to: "c3", etki: { ozerklik: 1, cift_sir: true, evde: true } },
{ t: "“Bu yükü taşıyamam Usta,” dersin. “Onlara bir gün söyleyeceğim.”", to: "c3", etki: { dogruluk: 1, evde: true } },
{ t: "“Siz söyleyin onlara,” dersin. “Ben odada olurum.”", to: "c3", etki: { dogruluk: 1, ozerklik: 1, evde: true, kendisi_soylesin: true } },
{ t: "Yalnızca Nurcan'a söyleyeceğini, Murat'a söylemeyeceğini söylersin.", to: "c3", etki: { evde: true, zeynep_bilir: true } }
]},

c3: { saat: "Kasım", baslik: "İki Kardeş", metin: [
P(S("c2A"), "Söz verdin. Hasan Bey nasırlı eliyle elini sıktı. Canın acıdı. “Usta sözü,” dedi."),
P(S("c2B"), "“Onlara bir gün söyleyeceğim.” Hasan Bey sana baktı. “O gün ben olmayayım,” dedi. “Yeter.”"),
P(S("c2D"), "Yalnızca Nurcan'a söyleyeceğini söyledin. Hasan Bey düşündü. “Kız sağlamdır,” dedi. “Murat'ı da o taşır. Küçükken de taşırdı, sırtında.”"),
P(S("c2C"), "Hasan Bey çocuklarını çağırdı. Sen odada kaldın. “Biliyorum,” dedi onlara. “Doktor hanım söylemedi, ben biliyordum. İlaç almayacağım. Eve gidiyorum, beşiği bitireceğim. Ağlayacaksanız atölyenin dışında ağlayın, talaşa damlamasın.”"),
"Ertesi sabah Murat ile Nurcan kapının önünde seni bekliyor. Bu kez kavga etmiyorlar. İkisinin elinde de birer karton bardak çay.",
P(function(d){ return !d.kendisi_soylesin; }, "“Babam taburcu olmak istiyor,” diyor Murat. “İlacı da istemiyor. Ne dediniz ona?” Gözlerini kısıyor. “Bilmiyor, değil mi? Bilse başka türlü davranırdı.”"),
P(function(d){ return !d.kendisi_soylesin; }, "Nurcan kardeşine bakıyor, sonra sana. Onun gözlerinde başka bir şüphe: “Biliyor. Biliyor ve bize söylemiyor.”"),
P(function(d){ return d.kendisi_soylesin; }, "“Teşekkür ederim,” diyor Nurcan. Murat bir şey demiyor, sonra çayını Nurcan'a tutturup elini uzatıyor. “Ben haksızdım,” diyor. “Babam benden güçlüymüş. Hep öyleydi, ben unutmuşum.”")
], secenekler: [
{ t: "Sözünü tutarsın: “Babanız kararını verdi. Gerisini ona sorun.”", to: "t1", etki: { ozerklik: 1 } },
{ t: "İkisini birden oturtup babalarının bildiğini söylersin.", to: "t1", etki: { dogruluk: 1, aile_bildi: true, soz_bozdu: true } },
{ t: "Murat'a “Bilmiyor” dersin. Nurcan'a yalnızca bakarsın.", to: "t1", etki: { sefkat: 1 } },
{ t: "“Babanızla atölyeye gidin, ikiniz birlikte. Gerisi orada konuşulur,” dersin.", to: "t1", etki: { sefkat: 1, ozerklik: 1, atolye_birlikte: true } }
]},

/* ---------- UMUT KOLU ---------- */
u1: { saat: "Kasım", baslik: "Onam Formu", metin: [
"Deneysel çalışmanın koordinatörü bir dosya getiriyor. On iki sayfa, sponsor firmanın logosu, faz iki. Yeni bir bağışıklık ilacı. İlk sonuçlar: yüz hastanın on beşinde tümör küçülmüş, birkaç aylığına. Yan etkiler: karaciğer, bağırsak, cilt.",
"On ikinci sayfada imza yeri. Hemen üstünde bir cümle: “Hastalığım, tanım, evrem ve bu çalışmanın deneysel niteliği hakkında bilgilendirildim. Bu çalışmanın beni iyileştirmeyebileceğini anlıyorum.”",
"Bu cümleyi bilmeyen biri imzalayamaz. Etik kurul onaylamaz, sponsor kabul etmez.",
"Murat cümleyi okuyor, bir daha okuyor.",
"“Ben imzalarım,” diyor. “Vekâleten.”",
"“Babanızın bilinci yerinde. Vekâlet olmaz.”",
"Murat kâğıdın köşesini kıvırıp açıyor, kıvırıp açıyor. “O zaman bir yolunu bulun hocam. Belki babam o on beşten biri. Bir kâğıt yüzünden mi kaçıracak?”"
], secenekler: [
{ t: "Hasan Bey'e her şeyi söyleyip onamını alırsın.", to: "h1", etki: { dogruluk: 2, kol: "h" } },
{ t: "Murat'ın imzalamasına göz yumarsın.", to: "u2", etki: { sahte_onam: true } },
{ t: "Çalışmadan vazgeçersin. “Küçük bir kitle” diyerek standart kemoterapiye başlarsın.", to: "s1", etki: { sefkat: 1, kol: "s" } },
{ t: "Formu Hasan Bey'e okutmadan imzalatırsın. “Tedavi izni Usta. Rutin.”", to: "u2", etki: { sahte_onam: true, okumadan: true } }
]},

u2: { saat: "Aralık", baslik: "Faz İki", metin: [
P(S("u1B"), "Murat imzaladı. Koordinatör imzaya baktı, sonra sana. Formu zımbalayıp dosyaya koydu. Zımbanın sesi odada fazla yüksek çıktı."),
P(S("u1D"), "Hasan Bey gözlüğünü taktı, ilk sayfaya baktı, gözlüğü çıkardı. “Bu kadar yazıyı okuyamam doktor hanım. Siz ne diyorsanız.” İmzaladı: büyük, dikkatli harfler, bir tahtaya işaret koyar gibi."),
"İlaç üç haftada bir, damardan. İlk doz sorunsuz. İkinciden sonra ciltte kırmızı lekeler. Üçüncüden sonra karaciğer değerleri fırlıyor. İlaç durduruluyor, steroid başlanıyor.",
"Hasan Bey haftalardır serviste. Kuş dolabın üstünde, yarım. Çakı çekmecede. Elleri titriyor. Steroidden mi yorgunluktan mı, ayırt edemiyorsun.",
"Murat her gün geliyor, her gün tahlilleri soruyor. Her gün bir umut cümlesi buluyor. Bir değerin virgülden sonraki rakamında bile.",
"Bir akşam Hasan Bey'in yanındasın. Dışarıda Ankara'nın ilk karı.",
"“Çorum'da da yağıyordur,” diyor. “Atölyenin çatısı akar. Beşiği naylonla örtmüşlerdir umarım. Ceviz ıslanırsa çatlar.”",
"Kara bakıyor. “Bu ilaç beni ne zaman eve gönderecek?”"
], secenekler: [
{ t: "“Yakında Usta,” dersin.", to: "u3", etki: { sefkat: 1, yakinda: true } },
{ t: "“Bilmiyorum,” dersin.", to: "u3", etki: { dogruluk: 1 } },
{ t: "Çalışmadan çıkarıp eve göndermeyi önerirsin.", to: "u3", etki: { ozerklik: 1, cikar: true } },
{ t: "Nurcan'ı arayıp beşiğin üstünü örttürmesini istersin.", to: "u3", etki: { sefkat: 1, naylon: true } }
]},

u3: { saat: "Ocak", baslik: "Umut", metin: [
P(S("u2A"), "“Yakında,” dedin. Hasan Bey kara bakmaya devam etti. “Yakında,” dedi. Kelimeyi ağzında evirip çevirdi."),
P(S("u2B"), "“Bilmiyorum,” dedin. “Sen de bilmiyorsun,” dedi Hasan Bey. “Ben de. Ne güzel, ikimiz de bilmiyoruz.”"),
P(S("u2C"), "Murat karşı çıktı. “Tam işe yarayacakken mi?” Kimse işe yarayacak dememişti; Murat duymak istediğini duymuştu. Hasan Bey çalışmada kaldı."),
P(S("u2D"), "Nurcan Hamburg'dan Çorum'daki bir komşuyu aradı. Ertesi gün fotoğraf geldi: beşik, kalın bir naylonun altında, köşeleri tuğlayla bastırılmış. Hasan Bey fotoğrafa uzun uzun baktı. “Tuğlayı iyi koymuş,” dedi."),
"Ocak ortasında tümör belirteci biraz düşüyor. Çok az. Murat koridorda seni yakalıyor: “Düşmüş hocam! Düşmüş!” Telefonundaki ekran görüntüsünü gösteriyor, sayıyı parmağıyla büyütüyor.",
"Bir hafta sonra tomografi. Karaciğerdeki noktalar büyümüş. Yenileri var. Karında sıvı.",
"Hasan Bey on beşten biri değilmiş.",
"Akşam odasına giriyorsun. Yüzü küçülmüş. Elmacık kemikleri sivrilmiş.",
"“Bu ilaç beni iyileştiriyor mu doktor hanım?” diyor. “Murat çok sevinçli. Ama ben iyileşmiyorum. Kendi bedenimi bilirim.”",
P(function(d){ return d.okumadan; }, "O imzayı hatırlıyorsun. Büyük, dikkatli harfler. “Siz ne diyorsanız.”")
], secenekler: [
{ t: "“Hayır Usta. İyileştirmiyor,” dersin.", to: "t1", etki: { dogruluk: 2, ortaya: true } },
{ t: "“Henüz bilmiyoruz,” dersin.", to: "t1", etki: { sefkat: 1 } },
{ t: "Çalışmayı bitirip onu eve göndermeyi teklif edersin.", to: "t1", etki: { ozerklik: 1, evde: true, gec_eve: true } },
{ t: "Murat'ı çağırıp tomografiyi önce ona gösterirsin.", to: "t1", etki: { murata_gosterdi: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Ocak", baslik: "Kış", metin: [
P(S("h3A"), "Nurcan'a uzun bir cevap yazdın: kuş, ceviz, taburenin kısa ayağı. Bir saat sonra cevap geldi: “Babama okudum. Güldü. ‘Doktor hanım şair olmuş,’ dedi.”"),
P(S("h3B"), "“Gece de arayın.” Nurcan bir kalp gönderdi. O geceden sonra telefonu sessize almayı bıraktın. Kocan ilk hafta söylendi, sonra alıştı."),
P(S("h3C"), "Fotoğrafı Tarhan Hoca'ya gösterdin. Gözlüğünü alnına itip baktı. “Otuz yılda bana böyle bir fotoğraf gelmedi,” dedi. Bir sonraki konseyde kalemini masaya vurmadı."),
P(S("h3D"), "Fotoğrafı kaydettin, cevap yazmadın. O akşam eve dönerken bir marangoz dükkânının önünde arabayı yavaşlattın."),
P(S("s3C"), "“Öneremem,” dedin. Hasan Bey bir şey demedi. Ertesi gün bir sonraki doz verildi. Kuş dolabın üstünde yarım kaldı."),
P(S("s3D"), "Bir şey diyemedin. Hasan Bey elini uzatıp koluna dokundu. “Tamam kızım,” dedi. “Anladım.” Neyi anladığını sormadın."),
P(S("c3A"), "“Gerisini ona sorun,” dedin. Murat'la Nurcan birbirine baktı. Aynı soruyu ikisi de babalarına sormadı."),
P(S("c3C"), "Murat'a “Bilmiyor” dedin; Nurcan'a yalnızca baktın. Nurcan anladı, Murat anlamadı. O günden sonra Nurcan ağabeyine her şeyi biraz daha yumuşak söylemeye başladı."),
P(S("c3D"), "Atölyeye gittiler. Akşam Nurcan bir fotoğraf attı: üç kişi bir tezgâhın başında, Murat'ın saçında talaş."),
P(S("u3A"), "“Hayır Usta. İyileştirmiyor.” Hasan Bey bir süre tavana baktı. “Biliyordum,” dedi. “Ama senden duymak iyi oldu.” Murat kapıdaydı. Elinde iki çay."),
P(S("u3B"), "“Henüz bilmiyoruz,” dedin. Murat'ın yüzü aydınlandı; Hasan Bey'inki aydınlanmadı. Aynı cümleyi başka başka duydular."),
P(S("u3D"), "Tomografiyi önce Murat'a gösterdin. Ekrana baktı, anlamadı. Sen anlattın. “Babama söylemeyin,” dedi yine. Bu kez yalvarmıyordu. Yalnızca yorgundu."),
P(function(d){ return d.evde && !d.gec_eve; }, "Ocak. Hasan Bey iki aydır Çorum'da. Nurcan Hamburg'dan ücretsiz izin almış. Her hafta mesaj atıyor: ağrı, kilo, ne yediği. Ve bir satır: “Bugün iki saat çalıştı.” Sonra: “Bir saat.” Sonra: “Yarım saat. Zımparayı elinden bırakmadı.”"),
P(function(d){ return d.gec_eve; }, "Hasan Bey'i ocak sonunda ambulansla Çorum'a gönderdiniz. Atölyeye girecek gücü yok. Yatağını atölyenin yanındaki odaya kurmuşlar, ara kapıyı açık bırakmışlar. Talaş kokusu içeri doluyor."),
P(function(d){ return !d.evde; }, "Ocak. Hasan Bey hâlâ serviste. Dört yüz on iki artık onun odası: duvarda torununun ultrason çıktısı, bantla yapıştırılmış. Dolabın üstünde yarım kuş. Morfin dozu her hafta biraz artıyor."),
P(function(d){ return d.aile_bildi; }, "Artık herkes biliyor ve herkes herkesin bildiğini biliyor. Odadaki hava değişti. Murat bir gün babasının yanında hıçkırarak ağladı; Hasan Bey onu susturmaya çalışmadı, ağlasın diye bıraktı, bir yandan kuşu zımparaladı."),
P(function(d){ return d.cift_sir && !d.aile_bildi; }, "Sır hâlâ yerinde. Murat babasının bilmediğini sanıyor; Hasan Bey oğlunun bildiğini bilmiyormuş gibi yapıyor. İkisini de sen dinliyorsun, ikisine de başka bir yüzle."),
"Ankara'da kar. Bir sabah poliklinikte başka bir hastaya başka bir teşhis söylerken aklın Çorum'daki atölyeye gidiyor. Hasta “Doktor hanım?” diyor. Cümleni kaldığın yerden tamamlıyorsun."
], secenekler: [
{ t: "Her hafta Nurcan'ı ya da Murat'ı arayıp durumunu sorarsın.", to: "t1b", etki: { sefkat: 1 } },
{ t: "Ağrı tedavisini kendin yönetirsin. Dozları her gün kontrol edersin.", to: "t1b", etki: { dogruluk: 1 } },
{ t: "Uzaktan izlersin. Bir hastaya bu kadar bağlanmak iyi değil.", to: "t1b", etki: { mesafe: true } },
{ t: "Hasan Bey'e bir mektup yazarsın.", to: "t1b", etki: { sefkat: 1, mektup: true } }
]},


t1b: { saat: "Ocak", baslik: "Elçin", metin: [
P(S("t1A"), "Her hafta aradın. Cümleler kısaldı: “Aynı.” “Biraz yorgun.” “Atölyede.” Bir keresinde Murat “Bugün güldü,” dedi. Neye güldüğünü sormadın, sormak istedin."),
P(S("t1B"), "Dozları her gün gözden geçirdin. Bir gece saat ikide hemşire aradı: “Usta uyuyor hocam. Bütün gece uyudu. Haber vereyim dedim.”"),
P(S("t1C"), "Uzaktan izledin. Yine de dosyasını her sabah açıp kapattın. Sistem kaç kez açtığını kaydediyordu, otuz ikiye gelince saymayı bıraktın."),
P(S("t1D"), "Bir sayfalık mektubu el yazınla yazdın, Çorum'a postaladın. Nurcan sonra söyledi: mektup tezgâhın üstünde, bir keskinin altında duruyormuş, uçmasın diye."),
"Bir öğleden sonra poliklinik kapısında, sırasını bekleyenlerin arasında karnı burnunda bir kadın. Murat'ın karısı Elçin. Otuz iki haftalık.",
"İçeri alıyorsun. Sandalyeye zor oturuyor, bir eliyle belini tutuyor. Ne diyeceğini evde prova ettiği belli. İlk cümleyi iki kez başlıyor.",
"“Hocam, Murat'ın buraya geldiğimden haberi yok. Doğum doktorumla konuştum. Otuz yedinci haftada doğumu başlatabilirlermiş. İlaçla. Risk az dedi, ama yine de risk. Mart'ı beklemeden, şubat ortası.”",
"“Babam,” diyor. Kayınpederine babam diyor, “torununu kucağına alsın istiyorum. Beşiğe koysun. Mart'a yetişir mi? Siz bilirsiniz.”",
"Biliyorsun: belki şubat bile uzak.",
"“Murat'a sorsam hayır der,” diyor Elçin. “Bebeği riske atmaz, babasını da. İkisinin arasında kalır, kendini yer. Ben bir şey yapmak istiyorum.” Karnında bebek tekmeliyor; Elçin eliyle bastırıyor, susturur gibi."
], secenekler: [
{ t: "“Bebeği riske atmayın. Kayınpederiniz de bunu istemezdi,” dersin.", to: "t2", etki: { dogruluk: 1 } },
{ t: "“Şubatı görmeyebilir,” dersin. Açıkça. Kararı ona bırakarak.", to: "t2", etki: { dogruluk: 1, ozerklik: 1, erken_dogum: true } },
{ t: "“Doğum doktorunuzla birlikte konuşalım, ben de gelirim,” dersin.", to: "t2", etki: { ozerklik: 1, erken_dogum: true } },
{ t: "“Bebeğin ultrason kaydını ona götürün,” dersin. “Kalbini dinlesin.”", to: "t2", etki: { sefkat: 1, ultrason: true } }
]},

t2: { saat: "Şubat", baslik: "Çağrı", metin: [
P(S("t1bA"), "“Haklısınız,” dedi, çantasını aldı. Kapıda durup karnına baktı, sonra çıktı."),
P(S("t1bB"), "Elçin bir süre sustu. “O zaman bekleyemem,” dedi. Bir hafta sonra Murat aradı: “Hocam, Elçin doğumu erkene almış. Benden saklamış. Siz biliyor muydunuz?”"),
P(S("t1bC"), "Doğum uzmanı, Elçin ve sen bir odada oturdunuz. Haftalar, akciğer olgunluğu, riskler. Sonunda uzman takvimde bir güne daire çizdi: on dört şubat. Elçin “Sevgililer günü,” dedi, güldü, sonra ağladı."),
P(S("t1bD"), "Elçin kaydı Çorum'a götürdü. Hasan Bey telefonu kulağına dayayıp bebeğin kalp sesini dinledi. Hızlı, dörtnala. “Bu çocuk acele ediyor,” dedi. “Bana çekmiş.”"),
P(function(d){ return d.mektup; }, "Mektubu kısa tutmuştun: “Usta, beşik nasıl? Kuşun gagası ince olsun.” Nurcan babasına okumuş. Hasan Bey gülmüş, gülerken öksürmüş. “Doktor hanıma söyle, gaga iğne gibi oldu.”"),
P(function(d){ return d.mesafe; }, "Uzaktan izledin. Ama her mesaj geldiğinde ekrana bakmadan önce telefonu bir süre ters tuttuğunu fark ettin."),
"Şubat başı. Gece on bir buçukta telefonun çalıyor.",
P(function(d){ return d.evde; }, "Nurcan. Sesi alçak. “Hocam, babam sizi soruyor. Ağrısı çok. Bir şey söylemek istiyor, sadece size. Çorum iki buçuk saat, biliyorum. Çok şey istediğimi biliyorum.”"),
P(function(d){ return !d.evde; }, "Servis hemşiresi. “Hocam, dört yüz on iki sizi istiyor. Durumu kötü. Nöbetçi baktı ama Usta sizi istiyor. Bir şey söyleyecekmiş.”"),
"Sabah sekizde poliklinik, kırk hasta. Kocan yanında uyuyor, ağzı açık. Kızının odasından hâlâ ışık sızıyor. Sınav haftası."
], secenekler: [
{ t: function(d){ return d.evde ? "Arabana binip Çorum'a sürersin." : "Montunu giyip hastaneye gidersin."; }, to: "y_ziyaret", etki: { sefkat: 1, gitti: true } },
{ t: "Telefonu Hasan Bey'e vermelerini istersin. Konuşursunuz.", to: "y_telefon", etki: { telefon: true } },
{ t: "Nöbetçiye ya da evdeki ekibe ayrıntılı talimat verir, sabah ilk iş geleceğini söylersin.", to: "t3", etki: { dogruluk: 1, gec_kaldi: true } },
{ t: "“Yarın,” dersin. Bu gece gerçekten yapamazsın.", to: "t3", etki: { gec_kaldi: true, yarin: true } }
]},

y_ziyaret: { saat: "Gece", baslik: "Talaş", metin: [
P(function(d){ return d.evde; }, "İki buçuk saat. Karanlık bozkır, savrulan kar, tırların farları. Bir benzinlikte durup kahve alıyorsun. Makine bozuk, çay içiyorsun. Gece ikiye doğru Çorum'dasın. İki katlı bir ev, avluda bir atölye. Işığı yanıyor."),
P(function(d){ return !d.evde; }, "Gece yarısı hastanedesin. Dört yüz on ikinin ışığı loş. Bir hemşire evinden bir abajur getirmiş. Usta floresanı sevmiyor."),
P(function(d){ return d.evde; }, "Hasan Bey atölyede, bir minderin üstünde yatıyor. Yatağını oraya taşıtmış. Yanında, yerde beşik. Neredeyse bitmiş. Ampulün ışığında ceviz kızıl parlıyor. Yan tahtalarda isimler: babası, annesi, karısı. Başında kuş."),
P(function(d){ return !d.evde; }, "Hasan Bey çok zayıf. Murat bugün atölyeden beşiğin başlık tahtasını getirmiş, kuşun takılacağı parçayı. Hasan Bey onu göğsünün üstünde tutuyor, iki eliyle."),
"Seni görünce gülümsüyor. Nefesi kısa.",
"“Geldin,” diyor. “Bak.” Ellerini kaldırıyor. Titriyor. “Tutmuyor artık. Bir yer kaldı. Kuşun takıldığı yerin kenarı pürüzlü. Bebek elini değdirirse kıymık batar.”",
"Zımpara kâğıdını sana uzatıyor. Kâğıdın arkasında kurşun kalemle bir rakam yazılı: 240.",
"“Sen yap, ben söyleyeyim. Lifin yönüne. Bastırma. Tahta kendini verir. Acele etme.”"
], secenekler: [
{ t: "Zımparayı alırsın. Onun tarifiyle, lifin yönünde, yavaşça çalışırsın.", to: "t3", etki: { sefkat: 1, zimpara: true } },
{ t: "Zımparayı Murat'a ya da Nurcan'a verirsin. “Bu sizin işiniz,” dersin.", to: "t3", etki: { ozerklik: 1, cocuklar_zimpara: true } },
{ t: "Önce ağrısına bakar, dozunu ayarlarsın. Sonra zımpara.", to: "t3", etki: { dogruluk: 1, zimpara: true } },
{ t: "Zımparayı onun eline verir, kendi elini üstüne koyarsın.", to: "t3", etki: { sefkat: 1, zimpara: true, birlikte: true } }
]},

y_telefon: { saat: "Gece", baslik: "Ses", metin: [
"Telefon el değiştiriyor. Hışırtı, bir öksürük, sonra Hasan Bey'in sesi. Kısık ama onun sesi.",
"“Kusura bakma doktor hanım. Gece gece.”",
"“Önemli değil Usta.”",
"Nefesini dinliyorsun. Hızlı, sığ.",
"“Babam öldüğünde on dokuz yaşındaydım,” diyor. “Askerdeydim, gelemedim. Annem anlattı: son gece bir şey sormuş. ‘Öbür tarafta talaş kokusu var mı?’ Babam da marangozdu. Annem gülmüş. Ben gülemedim. Kırk üç yıl bunu düşündüm.”",
"Öksürüyor. Arkada Nurcan'ın “Su ver baba,” dediğini duyuyorsun.",
"“Sana soruyorum. Okumuşsun, çok ölüm gördün. Öbür tarafta bir şey var mı?”"
], secenekler: [
{ t: "“Bilmiyorum Usta. Ama talaş kokusu varsa sizi orada bulurlar,” dersin.", to: "t3", etki: { sefkat: 1, cevap: "talas" } },
{ t: "“Bilmiyorum,” dersin. Yalnızca bu.", to: "t3", etki: { dogruluk: 1, cevap: "bilmiyorum" } },
{ t: "“Siz ne düşünüyorsunuz?” diye sorarsın.", to: "t3", etki: { ozerklik: 1, cevap: "soru" } },
{ t: "Bir şey demezsin. Nefesini dinlersin.", to: "t3", etki: { sefkat: 1, cevap: "sessiz" } }
]},

t3: { saat: "Şubat", baslik: "Son Gün", metin: [
P(function(d){ return d.erken_dogum && d.evde; }, "Bebek on dört şubatta doğdu. Üç gün sonra Elçin onu Çorum'a götürdü. Battaniyelere sarılı, bir avuç. Hasan Bey kucağına aldı. Elleri titriyordu, bırakmadı. Beşiğe, kuşun altına koydu. “Hoş geldin,” dedi."),
P(function(d){ return d.erken_dogum && !d.evde; }, "Bebek on dört şubatta doğdu. İki gün sonra Elçin onu dört yüz on ikiye getirdi. Başhemşire bir şey görmemiş gibi yaptı. Hasan Bey bebeği göğsüne, başlık tahtasının yanına yatırdı. “Hoş geldin,” dedi."),
P(function(d){ return d.zimpara && !d.birlikte; }, "Bir saat zımparaladın. Hasan Bey birkaç dakikada bir “Lif,” dedi, “lifin yönüne.” Bir keresinde “Bastırıyorsun,” dedi, haklıydı. Sonunda elini uzatıp kenara dokundu. “Tamam. Bebek eli değse bir şey olmaz.”"),
P(function(d){ return d.birlikte; }, "Onun eli altta, seninki üstte. Bir saat. Sonra bir yerde fark ettin ki artık sen onun elini değil, o senin elini götürüyor. “Tamam,” dedi. “İkimiz yaptık. Kimseye söyleme, ben yaptım diyeceğim.”"),
P(S("y_ziyaretB"), "Murat zımparayı aldı. Babasının yanına diz çöktü. “Lif,” dedi Hasan Bey, “lifin yönüne.” Murat on yaşındaymış gibi dinledi, dilini dişlerinin arasına sıkıştırarak. Nurcan kapının eşiğinde ağladı. Sen sabaha kadar oturdun."),
P(S("y_telefonA"), "Hasan Bey güldü. Öksürerek. “Talaş kokusu,” dedi. “Babama söylerim.” Telefonu Nurcan'a verdi."),
P(S("y_telefonB"), "“Bilmiyorum,” dedin. Hasan Bey öksürdü. “İyi,” dedi sonra. “Herkes biliyormuş gibi konuşuyor. Hoca bile. Sen bilmiyorum dedin. İyi.”"),
P(S("y_telefonC"), "Hasan Bey düşündü. “Bir şey var sanıyorum,” dedi. “Ne olduğunu bilmiyorum. Bir atölye belki. Belki sadece talaş.”"),
P(S("y_telefonD"), "Nefesini dinledin. Yirmi dakika. Bir yerde nefes yavaşladı. Nurcan telefonu aldı, fısıldadı: “Uyudu hocam.” Kapatmadınız. Bir süre daha ikiniz de bekledi."),
P(function(d){ return d.gec_kaldi; }, "Sabah ilk iş aradın. Nurcan açtı. “Gece dörtte,” dedi. “Bir kere daha sizi sordu. Sonra soramadı artık.”"),
P(function(d){ return !d.gec_kaldi && !d.erken_dogum; }, "Hasan Bey üç gün sonra öldü. Şubatın yedisinde, sabaha karşı."),
P(function(d){ return !d.gec_kaldi && d.erken_dogum; }, "Hasan Bey şubatın yirmisinde öldü. Torununu kucağına aldıktan üç gün sonra."),
P(function(d){ return d.evde; }, "Atölyede, beşiğin yanında. Nurcan da Murat da oradaydı. Pencere aralıktı. Dışarıda kar, içeride talaş."),
P(function(d){ return !d.evde; }, "Dört yüz on ikide. Murat yanındaydı. Floresan kapalı, abajur açıktı. Dolabın üstünde ceviz kuş."),
"Ölüm belgesine nedenini sen yazdın. Hiç duymak istemediği o adı, büyük harflerle, kutucuğun içine."
], secenekler: [
{ t: "Cenazeye gidersin.", to: "t4", etki: { sefkat: 1, cenaze: true } },
{ t: "Murat'a ve Nurcan'a başsağlığı mesajı yazarsın.", to: "t4", etki: { mesaj: true } },
{ t: "Polikliniğe girersin. Kırk hasta bekliyor.", to: "t4", etki: { dogruluk: 1, poliklinik: true } },
{ t: "Dört yüz on ikiye gidip bir süre boş yatağın başında durursun.", to: "t4", etki: { sefkat: 1, oda: true } }
]},

t4: { saat: "Nisan", baslik: "Torun", metin: [
P(S("t3A"), "Cenazeye gittin. Çorum'da küçük bir mezarlık. Çoğu marangoz, çırak, komşu. Ellerinde yara izleri. Biri elini sıktı: “Usta sizi çok anlattı.” Ne anlattığını sormadın. Sonra arabada sormadığına kızdın."),
P(S("t3B"), "Mesajı yazdın, sildin, yazdın. Sonunda dört kelime gönderdin. Murat'tan cevap geldi: “Babam size güvenirdi.”"),
P(S("t3C"), "Polikliniğe girdin. On üçüncü hasta, yetmişlerinde bir adam, “Doktor hanım, ben ne zaman evime dönerim?” dedi. Dosyasına bakıyormuş gibi yaptın, bir süre başını kaldırmadın."),
P(S("t3D"), "Dört yüz on ikide yeni bir hasta vardı, genç bir kadın. Seni görünce gülümsedi. Dolabın üstü boştu. Toz bezinin bıraktığı bir iz, kuşun durduğu yerde."),
P(function(d){ return !d.erken_dogum; }, "Nisan başında bir öğle arası kapın çalınıyor. Murat. Yanında Elçin. Kucağında üç haftalık bir bebek."),
P(function(d){ return d.erken_dogum; }, "Nisan başında bir öğle arası kapın çalınıyor. Murat. Yanında Elçin. Kucağında yedi haftalık bir bebek."),
"“Adını Hasan koyduk,” diyor Murat. “Herkes böyle yapar, biliyorum. Başka isim gelmedi aklımıza. Elçin ‘Kuzey’ diyordu, ben ağladım, vazgeçti.”",
P(function(d){ return (d.evde && !d.kemo && !d.kemo_devam) || d.alet || d.zimpara; }, "Telefonunda bir fotoğraf: ceviz beşik, başında kuş, içinde bebek uyuyor. “Bitirdi,” diyor Murat. “Son haftasında. Gagayı da inceltti.” Durakladı. “Bir tahta kenarı pürüzlü kalmıştı. Kim zımparaladı bilmiyorum. Bir sabah kalktım, pürüzsüzdü.”"),
P(function(d){ return !((d.evde && !d.kemo && !d.kemo_devam) || d.alet || d.zimpara); }, "Telefonunda bir fotoğraf: atölyenin köşesinde, naylonun altında yarım bir beşik. Yan tahtada bir isim yarıda kalmış: “Fat—”. “Bitiremedi,” diyor Murat. “Ben denedim. Yapamadım. Ellerim onun elleri değil.”"),
P(function(d){ return d.cift_sir && !d.aile_bildi; }, "Sonra sana bakıyor. “Bir şey soracağım hocam. Babam biliyor muydu? Ben hiç söylemedim. Ama son haftasında bana bir baktı... Biliyor muydu?”"),
P(function(d){ return !(d.cift_sir && !d.aile_bildi); }, "Murat ceketinin cebini yokluyor, bir şey bulamıyor. “Teşekkür etmeye geldim,” diyor sonra. “Ne için, tam bilmiyorum. Ama geldim.”"),
"Bebek uyanıyor, yüzünü buruşturuyor, ağlayacak gibi olup vazgeçiyor. Elçin “Acıktı,” diyor, kimse kalkmıyor."
], secenekler: [
{ t: function(d){ return (d.cift_sir && !d.aile_bildi) ? "“Biliyordu,” dersin. Sözünü bozarak." : "Bebeği kucağına almak istersin."; }, to: "ts", etki: function(d){ if(d.cift_sir && !d.aile_bildi){ d.dogruluk++; d.son_acikladi = true; } else { d.sefkat++; } } },
{ t: function(d){ return (d.cift_sir && !d.aile_bildi) ? "“Bilmiyorum,” dersin. Sözünü tutarak." : "Murat'a babasının sana öğrettiği bir şeyi anlatırsın."; }, to: "ts", etki: function(d){ if(d.cift_sir && !d.aile_bildi){ d.sefkat++; d.soz_tuttu = true; } else { d.ozerklik++; } } },
{ t: "“Babanız size beşikten fazlasını bıraktı,” dersin.", to: "ts", etki: { sefkat: 1 } },
{ t: "Bir şey demezsin. Bebeğe bakarsın.", to: "ts", etki: { sessiz_son: true } }
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
P(function(d){ return d.son === "t4A" && (d.cift_sir && !d.aile_bildi); }, "“Biliyordu,” demiştin Murat'a, sözünü bozarak. Murat bebeğe baktı. “Biliyordu,” dedi. Sonra güldü; Elçin koluna dokundu, gülmesi ağlamaya döndü."),
P(function(d){ return d.son === "t4A" && !(d.cift_sir && !d.aile_bildi); }, "Bebeği kucağına almıştın. Bir ceviz kuşu kadar hafif değildi. Beklediğinden ağırdı, sıcaktı, ağzını açıp kapatıyordu."),
P(function(d){ return d.son === "t4B" && (d.cift_sir && !d.aile_bildi); }, "“Bilmiyorum,” demiştin, sözünü tutarak. Murat “Peki,” demişti. İnanıp inanmadığını hiç öğrenmedin."),
P(function(d){ return d.son === "t4B" && !(d.cift_sir && !d.aile_bildi); }, "Murat'a babasının sana öğrettiğini anlatmıştın: lifin yönüne, bastırmadan. Murat “Bana da öyle derdi,” dedi. “Ben hep bastırırdım.”"),
P(S("t4C"), "“Babanız size beşikten fazlasını bıraktı,” demiştin. Murat bebeğin battaniyesini düzeltmişti, düzeltilecek bir yeri yoktu."),
P(S("t4D"), "Bir şey dememiştin. Bebek bir süre tavana baktı, sonra uyudu."),
"Hasan Bey bilerek öldü. Hastalığının adını duydu, zamanını öğrendi, son aylarını kendi istediği yerde geçirdi. Murat önce sana öfkelendi. Sonra öfkesi bir yerde kayboldu, nerede, sen de bilmiyorsun.",
"O kıştan sonra yeni hastalarına ilk görüşmede bir soru soruyorsun: “Ne kadarını bilmek istersiniz?” Kimi şaşırıyor. Kimi her şeyi istiyor. Kimi “Ne yapmam gerektiğini söyleyin yeter,” diyor. Bir kadın bir keresinde ağladı: “Bunu bana kimse sormamıştı.”",
"Tarhan Hoca emekli oldu. Veda yemeğinde tabağını alıp yanına oturdu. “Sen haklıydın galiba,” dedi. “Ama otuz yıl insanlara söylemedim ve çoğu bana teşekkür etti. Onu da unutma.” Sonra pilavından bir kaşık aldı, “Tuzsuz,” dedi.",
"Masanda ceviz bir kuş duruyor. Nurcan Hamburg'a dönmeden önce bıraktı. Gagası incecik. Temizlikçi kadın her hafta onu kaldırıp altını siliyor, yerine biraz yamuk koyuyor. Sen her pazartesi düzeltiyorsun."
]},

son_yalan: { son: true, baslik: "Huzurla Gitti", metin: [
P(function(d){ return d.son === "t4A" && (d.cift_sir && !d.aile_bildi); }, "“Biliyordu,” demiştin Murat'a, sözünü bozarak. Murat bebeğe baktı. “Biliyordu,” dedi. Sonra güldü; Elçin koluna dokundu, gülmesi ağlamaya döndü."),
P(function(d){ return d.son === "t4A" && !(d.cift_sir && !d.aile_bildi); }, "Bebeği kucağına almıştın. Bir ceviz kuşu kadar hafif değildi. Beklediğinden ağırdı, sıcaktı, ağzını açıp kapatıyordu."),
P(function(d){ return d.son === "t4B" && (d.cift_sir && !d.aile_bildi); }, "“Bilmiyorum,” demiştin, sözünü tutarak. Murat “Peki,” demişti. İnanıp inanmadığını hiç öğrenmedin."),
P(function(d){ return d.son === "t4B" && !(d.cift_sir && !d.aile_bildi); }, "Murat'a babasının sana öğrettiğini anlatmıştın: lifin yönüne, bastırmadan. Murat “Bana da öyle derdi,” dedi. “Ben hep bastırırdım.”"),
P(S("t4C"), "“Babanız size beşikten fazlasını bıraktı,” demiştin. Murat bebeğin battaniyesini düzeltmişti, düzeltilecek bir yeri yoktu."),
P(S("t4D"), "Bir şey dememiştin. Bebek bir süre tavana baktı, sonra uyudu."),
"Hasan Bey öldü ve kimse ona bir şey söylemedi. Ya da söylememiş gibi yaptı. Ya da o, duymamış gibi yaptı.",
"Murat cenazeden sonra aradı. “Babam huzurla gitti hocam,” dedi. “Sayenizde. Son ana kadar umudunu kaybetmedi.” Telefonu kapattıktan sonra arabayı park yerinde çalıştırmadan oturdun.",
"Hasan Bey'in o akşamki sesi aklında: “Oyunda en çok ben yalnız kaldım. Gece bunu konuşacak kimsem yoktu.”",
"Nurcan Hamburg'dan bir mektup gönderdi. Kısa: “Babamı siz öldürmediniz. Ama son aylarını onunla gerçekten yaşamamıza izin vermediniz. Biliyor musunuz bunu?” Mektubu çekmecene koydun. Arada açıp okuyorsun. Her seferinde ilk cümlede duruyorsun.",
"Hâlâ bazı ailelerle koridorda aynı konuşmayı yapıyorsun. Bazen “Peki,” diyorsun. Bazen demiyorsun. Neye göre karar verdiğini sorsalar söyleyemezsin."
]},

son_secim: { son: true, baslik: "Adını Duymadan", metin: [
P(function(d){ return d.son === "t4A" && (d.cift_sir && !d.aile_bildi); }, "“Biliyordu,” demiştin Murat'a, sözünü bozarak. Murat bebeğe baktı. “Biliyordu,” dedi. Sonra güldü; Elçin koluna dokundu, gülmesi ağlamaya döndü."),
P(function(d){ return d.son === "t4A" && !(d.cift_sir && !d.aile_bildi); }, "Bebeği kucağına almıştın. Bir ceviz kuşu kadar hafif değildi. Beklediğinden ağırdı, sıcaktı, ağzını açıp kapatıyordu."),
P(function(d){ return d.son === "t4B" && (d.cift_sir && !d.aile_bildi); }, "“Bilmiyorum,” demiştin, sözünü tutarak. Murat “Peki,” demişti. İnanıp inanmadığını hiç öğrenmedin."),
P(function(d){ return d.son === "t4B" && !(d.cift_sir && !d.aile_bildi); }, "Murat'a babasının sana öğrettiğini anlatmıştın: lifin yönüne, bastırmadan. Murat “Bana da öyle derdi,” dedi. “Ben hep bastırırdım.”"),
P(S("t4C"), "“Babanız size beşikten fazlasını bıraktı,” demiştin. Murat bebeğin battaniyesini düzeltmişti, düzeltilecek bir yeri yoktu."),
P(S("t4D"), "Bir şey dememiştin. Bebek bir süre tavana baktı, sonra uyudu."),
"Hasan Bey hastalığının adını hiç duymadı. Ne kadar zamanı olduğunu ve o zamanla ne yapacağını biliyordu. Gerisini sormadı. “Marangoz tahtanın kimyasını bilmez,” demişti bir keresinde, “nasıl işleneceğini bilir.”",
P(function(d){ return d.soz_tuttu; }, "Murat'a babasının bildiğini söylemedin. Murat hâlâ babasını koruduğunu düşünüyor. Her yıl bayramda arayıp teşekkür ediyor. Her seferinde sesinde biraz gurur var."),
P(function(d){ return d.son_acikladi; }, "Murat'a babasının bildiğini söyledin. “O zaman bana öyle bakması...” dedi, cümlenin sonunu getiremedi. “Beni koruyormuş,” dedi sonra. “Ben onu korudum sanıyordum.”"),
"Yeni hastalarına artık aynı soruyla başlıyorsun: “Ne kadarını bilmek istersiniz?” Kimi “Her şeyi,” diyor. Kimi “Hiçbirini.” Kimi, Usta gibi, kendi ölçüsünü koyuyor. Adını değil, zamanını istiyor.",
"Masanda bir not var, Nurcan'ın el yazısıyla. Babasının son haftasında söylediği bir cümle: “Doktor hanıma söyle, adını duymadan gittim. İyi oldu.” Notun köşesinde bir kahve lekesi. Atmadın."
]},

son_umut: { son: true, baslik: "Yarım Beşik", metin: [
P(function(d){ return d.son === "t4A" && (d.cift_sir && !d.aile_bildi); }, "“Biliyordu,” demiştin Murat'a, sözünü bozarak. Murat bebeğe baktı. “Biliyordu,” dedi. Sonra güldü; Elçin koluna dokundu, gülmesi ağlamaya döndü."),
P(function(d){ return d.son === "t4A" && !(d.cift_sir && !d.aile_bildi); }, "Bebeği kucağına almıştın. Bir ceviz kuşu kadar hafif değildi. Beklediğinden ağırdı, sıcaktı, ağzını açıp kapatıyordu."),
P(function(d){ return d.son === "t4B" && (d.cift_sir && !d.aile_bildi); }, "“Bilmiyorum,” demiştin, sözünü tutarak. Murat “Peki,” demişti. İnanıp inanmadığını hiç öğrenmedin."),
P(function(d){ return d.son === "t4B" && !(d.cift_sir && !d.aile_bildi); }, "Murat'a babasının sana öğrettiğini anlatmıştın: lifin yönüne, bastırmadan. Murat “Bana da öyle derdi,” dedi. “Ben hep bastırırdım.”"),
P(S("t4C"), "“Babanız size beşikten fazlasını bıraktı,” demiştin. Murat bebeğin battaniyesini düzeltmişti, düzeltilecek bir yeri yoktu."),
P(S("t4D"), "Bir şey dememiştin. Bebek bir süre tavana baktı, sonra uyudu."),
"Hasan Bey hastanede öldü, deneysel ilacın son dozundan üç hafta sonra. Çalışma raporunda bir satır: “Hasta 0047: progresyon, çalışmadan çıkarıldı, eksitus.”",
"Murat cenazeden sonra aradı. “Her şeyi denedik hocam,” dedi. “Siz de denediniz.” Sesi rahattı. Denemiş olmanın rahatlığı.",
"Hasan Bey'in son haftaları bir serum torbasının altında, beşikten iki yüz kilometre uzakta geçti. Kuş dolabın üstünde yarım kaldı. Beşik naylonun altında yarım kaldı.",
P(function(d){ return d.sahte_onam; }, "Onam formu dosyada. Bir etik kurul bir gün dosyayı açarsa bir imza bulacak. Ya bir oğulun ya da on iki sayfayı hiç okumamış bir marangozun. Bazı geceler o dosyanın arşivde hangi rafta durduğunu düşünüyorsun."),
"Murat'a sorsan “Doğru yaptık,” der. Nurcan'a sorsan “Hayır.” Sana soran olmadı.",
"Bir gün Murat atölyedeki yarım beşiği getirdi. “Bunu ne yapacağımı bilmiyorum,” dedi. Sen de bilmiyordun. Beşik şimdi servisin bekleme salonunun köşesinde. Çocuklar içine oyuncak atıyor. Geçen hafta biri içinde uyuyakalmış bir ayıcık unuttu. Kimse almadı, hâlâ orada."
]},

son_usta: { son: true, baslik: "Usta", metin: [
P(function(d){ return d.son === "t4A" && (d.cift_sir && !d.aile_bildi); }, "“Biliyordu,” demiştin Murat'a, sözünü bozarak. Murat bebeğe baktı. “Biliyordu,” dedi. Sonra güldü; Elçin koluna dokundu, gülmesi ağlamaya döndü."),
P(function(d){ return d.son === "t4A" && !(d.cift_sir && !d.aile_bildi); }, "Bebeği kucağına almıştın. Bir ceviz kuşu kadar hafif değildi. Beklediğinden ağırdı, sıcaktı, ağzını açıp kapatıyordu."),
P(function(d){ return d.son === "t4B" && (d.cift_sir && !d.aile_bildi); }, "“Bilmiyorum,” demiştin, sözünü tutarak. Murat “Peki,” demişti. İnanıp inanmadığını hiç öğrenmedin."),
P(function(d){ return d.son === "t4B" && !(d.cift_sir && !d.aile_bildi); }, "Murat'a babasının sana öğrettiğini anlatmıştın: lifin yönüne, bastırmadan. Murat “Bana da öyle derdi,” dedi. “Ben hep bastırırdım.”"),
P(S("t4C"), "“Babanız size beşikten fazlasını bıraktı,” demiştin. Murat bebeğin battaniyesini düzeltmişti, düzeltilecek bir yeri yoktu."),
P(S("t4D"), "Bir şey dememiştin. Bebek bir süre tavana baktı, sonra uyudu."),
"Hasan Bey ölümünü bir iş gibi yaptı. Kırk yıl tahtaya nasıl davrandıysa son aylarına da öyle davrandı: lifin yönüne, acele etmeden.",
"Sen o işin içindeydin. Bazen söyledin, bazen sustun, bir gece bir zımpara tuttun ya da bir telefonun ucunda nefes dinledin. Hiçbirinde doğru yaptığından emin değildin.",
"Torun Hasan büyüyor. Murat her doğum gününde bir fotoğraf gönderiyor. Bir yaşında beşiğin içinde. İki yaşında beşiğin yanında, tutunarak ayakta. Üç yaşında kuşu sökmüş, ağzına götürüyor; Elçin arkada elini uzatmış, bulanık.",
"Hastaların çoğunu unutuyorsun. Bazıları kalıyor. Usta talaş kokusu olarak kaldı. Bazen bir mobilyacının önünden geçerken yavaşlıyorsun. Bazen kötü bir haber vermeden önce elini masanın kenarında gezdiriyorsun, pürüz arar gibi."
]}

},

ayna: function(d){
  var out = [];
  var a = d.dogruluk, b = d.sefkat, c = d.ozerklik;
  if(a >= b && a >= c) out.push("Çoğu kavşakta gerçeği söyledin, ailesine rağmen bile. Murat bunu sana uzun süre affetmedi.");
  else if(b >= c) out.push("Çoğu kavşakta yumuşattın, korudun, umut verdin. Usta bazı geceler bunu konuşacak kimseyi bulamadı.");
  else out.push("Çoğu kavşakta kararı Usta'ya bıraktın: ne kadarını bilmek istediğini, nerede ölmek istediğini.");
  if(d.cift_sir) out.push("Babanın da oğulun da sırrını taşıdın; ikisine de başka bir yüzle baktın.");
  if(d.sahte_onam) out.push("Bir onam formuna okunmamış bir imza attırdın.");
  if(d.zimpara) out.push("Bir gece bir beşiğin kenarını zımparaladın.");
  if(d.gec_kaldi) out.push("Son gece gitmedin. Sabah aradığında artık geçti.");
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
