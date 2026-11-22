(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "karsi-kiyi",
baslik: "Karşı Kıyı",
dunya: "Gerçek dünya",
kategoriler: ["Toplum ve Adalet", "Aile ve Hafıza"],
giris: "Ağustos 2015, İzmir. Basmane'de dükkânların vitrininde can yelekleri asılı. Sen Halep'ten gelen bir eczacısın; yanında karın, yedi yaşında bir kız, üç yaşında bir oğul ve ceketinin astarına dikilmiş dört bin dolar. Karşı kıyı, Midilli, yirmi kilometre. Bir lastik bot, bir hava raporu, bir kaçakçının telefonu. Doğru kararın ancak sonradan, şansla belli olduğu bir yolculuğun ve bir babanın hikâyesi.",
kavramlar: ["Ahlaki şans", "Aidiyet ve sürgün", "Umut ve risk", "Yardım ödevi"],
ozet: "2015 yazı, İzmir. Halep'ten gelen bir baba, ailesiyle birlikte Yunanistan'a geçmenin yollarını arıyor. Bir can yeleği, bir hava raporu, bir kaçakçı ve geri alınamayacak kararlar.",
baslangic: "a1",
durum: { umut: 0, sorumluluk: 0, temkin: 0 },

sahneler: {

a1: { saat: "Ağustos 2015", baslik: "Basmane", metin: [
"İzmir, Basmane. Ağustosun öğle sıcağı. Meydanda, otel girişlerinde, cami avlusunda insanlar: aileler, gençler, yaşlılar. Arapça, Farsça, Kürtçe. Herkes bir telefona bakıyor; herkes bir şey bekliyor.",
"Dükkânların vitrinlerinde can yelekleri asılı. Turuncu, sarı, kırmızı. Çocuk boyları da var; pembe, üstlerinde çizgi film karakterleri. Bir şehir, bir denize hazırlanıyor.",
"Adın Ahmed, otuz sekiz yaşındasın. Halep'te bir eczanen vardı; Salahaddin mahallesinde, köşe başında. Üç yıl önce bir varil bombası düştü. Eczane gitti. Sonra ev. Sonra mahalle.",
"Yanında Hiba; karın, Arapça öğretmeni, yüzme bilmiyor. Yara; yedi yaşında, Gaziantep'te bir yıl okula gitti, Türkçe sayıyor. Omar; üç yaşında, seni bırakmıyor.",
"Ceketinin astarında, Hiba'nın diktiği bir cepte, dört bin dolar. Halep'teki evin parası, eczanenin dolapları, Hiba'nın altın bilezikleri. Bütün bir hayat, bir astarın içinde.",
"Hamburg'da kardeşin Samir var; iki yıl önce geçmiş. “Gel,” diyor her telefonda. “Çabuk gel. Kapılar kapanıyor.”",
"Telefonun titriyor. Bir mesaj, bilinmeyen numaradan: “Cemil. Otel Yıldız, lobi. Saat beş.”"
], secenekler: [
{ t: "Önce can yeleklerine bakarsın. Ne olursa olsun, onlar lazım.", to: "a2", etki: { temkin: 1 } },
{ t: "Hiba ve çocuklarla parkta oturup bir saat hiçbir şey yapmazsın. Önce nefes.", to: "a2", etki: { sorumluluk: 1, park: true } },
{ t: "Samir'i ararsın. Bir kez daha ne yapacağını sorarsın.", to: "a2", etki: { umut: 1, samir_once: true } },
{ t: "Meydandaki bir aileye yaklaşıp hangi kaçakçıyla gittiklerini sorarsın.", to: "a2", etki: { temkin: 1, soruşturdu: true } }
]},

a2: { saat: "Ağustos 2015", baslik: "Yelek", metin: [
P(S("a1B"), "Parkta oturdunuz. Omar uyudu, Yara güvercinlere ekmek attı. Hiba başını omzuna koydu. Bir saat. Halep'ten beri ilk kez, bir saat hiçbir şey yapmadınız. Sonra kalktınız."),
P(S("a1C"), "Samir'in sesi telefonda telaşlı. “Bu hafta gel Ahmed. Macaristan teller çekiyor. Almanya ne zaman kapatır, bilmiyoruz. Bu hafta.” Hiba yanında duydu. Yüzünden bir şey geçti; korku mu, umut mu, ayırt edemedin."),
P(S("a1D"), "Bir aile sana üç kaçakçı adı verdi. İkisinin teknesi geçen hafta batmış; biri kayıp. Üçüncüsü Cemil. “Cemil iyidir,” dedi baba. “Botları yeni. Yalnızca hava kötüyse sormadan gönderir.”"),
"Meydanın köşesinde bir dükkân. Tabelada “Mesut Spor”. İçeride tavana kadar can yelekleri. Dükkân sahibi Mesut, ellilerinde, terli, bir eli hep telefonunda. Arapça birkaç kelime öğrenmiş: “Gel, gel. Iyi. Ucuz.”",
"Yelekleri gösteriyor. İki tür. Biri yirmi beş lira; ince, parlak, içinde bir şey var ama ne olduğu belli değil. Biri altmış lira; kalın, etiketli, bir sertifika numarası.",
"Dört yelek. Biri çocuk boyu, biri bebek. Ucuzlarla yüz lira; iyilerle iki yüz kırk. Fark küçük bir para; ama astarındaki her dolar bir başka şeye ayrılmış.",
"Mesut senin tereddüdünü görüyor. Etrafa bakıyor. Sonra eğilip alçak sesle, Türkçe, Yara'ya bakarak: “Bunlar batar. Ucuzlar. İçi sünger. Su çeker. Şunları al.”",
"Yara pembe, flamingolu bir çocuk yeleğine bakıyor. Ucuzlardan."
], secenekler: [
{ t: "Dördü için de iyilerini alırsın. Ne pahasına olursa olsun.", to: "a3", etki: { temkin: 2, yelek: "iyi" } },
{ t: "Mesut'a sorarsın: “Batacağını biliyorsan neden satıyorsun?”", to: "x_mesut", etki: { sorumluluk: 1 } },
{ t: "Ucuzları alırsın. Para teknede lazım olacak.", to: "a3", etki: { umut: 1, yelek: "sahte" } },
{ t: "Yara'nın yanına çömelip ona hangisini istediğini sorarsın.", to: "x_yara", etki: { sorumluluk: 1 } }
]},

x_mesut: { saat: "Ağustos 2015", baslik: "Mesut", metin: [
"Mesut bir süre sana bakıyor. Sonra dükkânın kapısını kapatıyor; “Kapalı” levhasını çeviriyor.",
"“Biliyorum,” diyor. Türkçe; ama sen Türkçeyi Gaziantep'te bir yılda öğrendin, anlıyorsun. “Sana bir şey söyleyeyim kardeşim. Ben bu dükkânı otuz yıldır açıyorum. Eşofman satardım, forma satardım. Üç yıl önce bir adam geldi, can yeleği sordu. Sonra beş adam. Sonra yüz.”",
"“Şimdi yelek satıyorum. Toptancı bana iyi yelek veremiyor; fabrikalar yetişemiyor. Sahteler geliyor; kimse bilmiyor nereden. Satmazsam karşı dükkân satıyor. Satmazsam benim kızımın okul parası yok.”",
"Bir süre susuyor. Duvardaki bir fotoğrafa bakıyor: bir genç kız, mezuniyet cüppesiyle.",
"“Her gece haberleri izliyorum. Bir bot batınca kaç kişi, kaç çocuk. Kimin yeleği vardı, kiminki battı. Benim yeleklerim miydi? Bilmiyorum. Bilmek istemiyorum.”",
"Sonra raftan bir iyi yelek alıyor, bebek boyu. Omar'ın boyu. Sana uzatıyor. “Bu benden. Para istemem.”",
"Bir adam, bir sistemin içinde, her gün bir suça ortak oluyor ve her gün bir çocuğa bir yelek hediye ediyor. İkisini birden yapıyor."
], secenekler: [
{ t: "Yeleği alır, öbür üçü için de iyilerini satın alırsın.", to: "a3", etki: { temkin: 2, yelek: "iyi", mesut_hediye: true } },
{ t: "Yeleği alırsın; öbürleri için ucuzlarını. Mesut'un hediyesi yeter.", to: "a3", etki: { umut: 1, yelek: "karisik", mesut_hediye: true } },
{ t: "Yeleği geri verirsin: “Sen bunu başka bir çocuğa ver,” dersin.", to: "a3", etki: { sorumluluk: 2, yelek: "iyi", hediye_ret: true } },
{ t: "Mesut'a: “Sahteleri satmayı bırak,” dersin.", to: "a3", etki: { sorumluluk: 1, yelek: "iyi", mesut_bırak: true } }
]},

x_yara: { saat: "Ağustos 2015", baslik: "Flamingo", metin: [
"Yara'nın yanına çömeliyorsun. Pembe flamingolu yeleği iki eliyle tutuyor; gözleri parlıyor.",
"“Baba, bu,” diyor. Arapça; ama “flamingo” Türkçe, Gaziantep'teki okulda öğrenmiş. “Bu çok güzel.”",
"Yeleğin etiketine bakıyorsun. Etiket yok. İçi yumuşak; parmağınla bastırınca çöküyor. Sünger.",
"“Yara,” diyorsun, “bu yelek ne için biliyor musun?”",
"Yara düşünüyor. “Denizde yüzmek için,” diyor. “Gaziantep'te öğretmen anlattı. Yaz tatilinde denize gidilir. Yelek giyilir. Sonra yüzülür.”",
"“Deniz büyük mü baba?” diyor sonra. “Öbür tarafını görebilir miyiz?”",
"Bir çocuğa denizi nasıl anlatırsın? Bir tatil gibi mi, bir sınır gibi mi? Bir yaz gibi mi, bir mezar gibi mi?",
"Yara yeleği bırakmıyor. Mesut tezgâhın arkasından bakıyor; bir şey söylemiyor."
], secenekler: [
{ t: "Flamingolu yeleği alırsın. Yara mutlu olsun. Ama içine bir iyi yelek de giydireceksin; altına.", to: "a3", etki: { sorumluluk: 1, temkin: 1, yelek: "iyi", flamingo: true } },
{ t: "Yara'ya gerçeği söylersin: bu yelek batar. Turuncuyu seçer.", to: "a3", etki: { temkin: 1, yelek: "iyi", yara_bildi: true } },
{ t: "Flamingolu yeleği alırsın. Yalnızca onu.", to: "a3", etki: { umut: 1, yelek: "sahte", flamingo: true } },
{ t: "“Deniz büyük ama öbür tarafını göreceğiz,” dersin. Ve iyi yelekleri alırsın.", to: "a3", etki: { umut: 1, yelek: "iyi" } }
]},

a3: { saat: "Ağustos 2015, 17.00", baslik: "Cemil", metin: [
P(function(d){ return d.yelek === "sahte"; }, "Dört yelek, yüz lira. Astardan bir yüzlük eksildi; geri kalanı tekne için. Mesut yelekleri bir torbaya koyarken gözlerini kaçırdı."),
P(function(d){ return d.yelek === "iyi"; }, "İyi yelekler. Kalın, etiketli, ağır. Torbayı taşırken omzun acıdı. Astardan iki yüzlük eksildi. Bunun neyi eksilttiğini sonra göreceksin."),
P(function(d){ return d.yelek === "karisik"; }, "Omar'ın yeleği iyi; Mesut'un hediyesi. Öbürleri ucuz. Bir torbada iki tür hayat; biri bir yabancının vicdanından, öbürü bir hesaptan."),
"Otel Yıldız, Basmane'nin arka sokağında, lobisinde üç plastik koltuk ve bir televizyon. Koltuklardan birinde Cemil; kırklarında, gözlüklü, ütülü gömlek. Bir sigorta acentesi gibi.",
"“Kişi başı bin iki yüz dolar,” diyor. “Çocuklar yarım. Bebek bedava. Toplam üç bin altı yüz. Bot yeni; kırk kişilik. Motor yeni. Midilli yirmi kilometre; hava iyiyse iki saat.”",
"Hesap yapıyorsun. Dört bin; eksi yelekler; eksi otel. Kalan, yetiyor; Almanya'ya varınca hiçbir şey kalmayacak, ama yetiyor.",
"“Hava?” diyorsun.",
"Cemil telefonuna bakıyor. “Bu gece rüzgâr dört-beş. Bir hafta sonra sakin. Ama bir hafta sonra fiyat bin beş yüz. Ve bir hafta sonra kimse bilmiyor Almanya ne yapar. Siz bilirsiniz.”",
"Sonra ekliyor; bir şey söylerken hiçbir şey söylemeyen bir sesle: “Ben taksi şoförüyüm kardeşim. Bindiririm, gönderirim. Denizi ben yapmadım.”"
], secenekler: [
{ t: "Bu gece için yer ayırtırsın. Ama karar vermek için bir saat istersin.", to: "a4", etki: { umut: 1, bu_gece: true } },
{ t: "Cemil'e geçen hafta batan botları sorarsın.", to: "a4", etki: { temkin: 1, sorgu: true } },
{ t: "Pazarlık edersin: çocuklar için daha az.", to: "a4", etki: { sorumluluk: 1, pazarlik: true } },
{ t: "Hiba'nın yüzüne bakarsın. O ne diyor?", to: "a4", etki: { sorumluluk: 1, hibaya_bakti: true } }
]},

a4: { saat: "Ağustos 2015, akşam", baslik: "Oda", metin: [
P(S("a3B"), "Cemil gözlüğünü düzeltti. “Onlar başka kaçakçının botları,” dedi. “Ucuz motor, çürük bot. Benimkiler sağlam.” Bir süre sustu. “Ama deniz denizdir.”"),
P(S("a3C"), "Cemil güldü. “Pazarlık,” dedi. “Halep'te eczacı mıydın? Pazarlığı bilirsin.” Yüz dolar indirdi. Yüz dolar; bir otel gecesi, belki bir tren bileti. Cemil'in yüz doları önemsemediği belliydi."),
P(S("a3D"), "Hiba'nın yüzünde hiçbir şey yoktu. Sonra Arapça, alçak sesle: “Ben yüzme bilmiyorum Ahmed. Sen bunu biliyorsun.” Biliyordun. Bütün evliliğiniz boyunca bunu biliyordun ve bir gün önemli olacağını hiç düşünmemiştin."),
"Otelin dördüncü katında bir oda. On iki kişi. Yer yatakları, bavullar, şarj kabloları. Pencereden Basmane'nin ışıkları.",
"Bir köşede bir Afgan aile: Farid, karısı Zahra, sekiz aylık hamile. Pencerenin yanında Hamza; on dokuz yaşında, Halep'ten, yalnız, sırt çantasında bir mühendislik kitabı. Kapının yanında yaşlı bir kadın: Ümmü Halil. Humus'tan. Seksenine yakın.",
"Gece yarısı Ümmü Halil yanına geliyor. Arapça, yavaş, onurlu: “Oğlum. Benim param yok. Oğullarım öldü, gelinlerim Lübnan'da. Ben torunlarımın yanına gitmek istiyorum. İsveç'te. Bir torunum doktor olmuş. Bana bin dolar yeter. Sende var mı?”",
"Var. Astarda. Ama o bin dolar, Almanya'da ilk ayın kirası, Yara'nın ayakkabısı, Omar'ın ilacı.",
"Odadaki herkes uyuyormuş gibi yapıyor. Herkes dinliyor."
], secenekler: [
{ t: "Ümmü Halil'e parayı verirsin. Bin dolar.", to: "x_umm", etki: { sorumluluk: 2, umm_para: true } },
{ t: "“Yok teyze,” dersin. Bir yalan; ya da bir gerçek, ailene göre.", to: "a5", etki: { temkin: 1, umm_ret: true } },
{ t: "Odadaki herkesi uyandırıp Ümmü Halil için birlikte para toplamayı önerirsin.", to: "x_ortak", etki: { sorumluluk: 1, umut: 1 } },
{ t: "Samir'i arayıp ondan Ümmü Halil için borç istersin.", to: "a5", etki: { sorumluluk: 1, samir_borc: true } }
]},

x_umm: { saat: "Gece", baslik: "Ümmü Halil", metin: [
"Astarın dikişini sökerek on yüzlük çıkarıyorsun. Hiba seni izliyor; bir şey söylemiyor. Yüzü sert.",
"Ümmü Halil parayı alıyor. Saymıyor. Avucunda tutuyor; sonra iki elini birleştirip alnına götürüyor.",
"“Allah razı olsun oğlum,” diyor. Sonra sana bir şey anlatıyor; uzun, yavaş, gecenin ortasında.",
"Kocası bir halı tüccarıymış. Humus'ta bir dükkânları varmış; üç kuşak. Üç oğlu; biri halı, biri öğretmen, biri asker. Asker olanı ilk gitmiş. Sonra öğretmen olanı; bir okulda, bir bomba. Sonra halı tüccarı olanı; bir kontrol noktasında, bir kurşun.",
"“Hepsini ben gömdüm,” diyor. “Bir kadın, üç oğul, bir mezarlık. Şimdi İsveç'te bir torunum var; büyük oğlumun oğlu. Doktor olmuş. Beni hiç görmedi; bebekken gitti. Ben onu bir kez görmek istiyorum. Bir kez. Sonra ölebilirim.”",
"Hiba'nın yüzü yumuşuyor. Ümmü Halil'in elini tutuyor.",
"Sonra Ümmü Halil sana bir şey veriyor: küçük bir bez kese. İçinde bir avuç toprak. “Humus'tan,” diyor. “Oğullarımın mezarından. Bunu İsveç'e götürecektim. Sen al. Senin de bir yere gömmen gereken bir şey olabilir.”"
], secenekler: [
{ t: "Keseyi alırsın.", to: "a5", etki: { sorumluluk: 1, kese: true } },
{ t: "“Bunu siz torununuza götürün,” dersin.", to: "a5", etki: { sorumluluk: 1 } },
{ t: "Hiba'ya bakıp ondan özür dilersin; bin dolar için.", to: "a5", etki: { sorumluluk: 1, hibaya_ozur: true } },
{ t: "Ümmü Halil'e bu gece aynı tekneye binmenizi önerirsin.", to: "a5", etki: { umut: 1, birlikte: true } }
]},

x_ortak: { saat: "Gece", baslik: "Ortak Kese", metin: [
"Odanın ışığını açıyorsun. On iki kişi gözlerini kırpıştırıyor. Arapça, sonra kırık Türkçe, sonra Hamza'nın İngilizcesiyle Farid'e anlatıyorsun: Ümmü Halil'in hikâyesini, bin doları.",
"Bir sessizlik. Sonra Hamza kalkıyor. Sırt çantasını açıyor, bir zarf çıkarıyor. Elli dolar. “Bu kadar,” diyor. “Gerisi tekne için.”",
"Farid, Zahra'yla bir şey konuşuyor; Farsça. Sonra yirmi dolar uzatıyor. Zahra karnını tutarak gülümsüyor.",
"Pencerenin yanındaki bir aile; bir Kürt çift, iki çocuk. Hiçbir şey vermiyorlar. Adam yere bakıyor. “Bizim de yok,” diyor. Herkes biliyor ki yok.",
"Bir saat sonra bir şapkanın içinde iki yüz otuz dolar. Bin değil. Ama bir şey.",
"Ümmü Halil şapkaya bakıyor. Ağlamıyor. “Bu,” diyor, “bin dolardan daha fazla.” Sonra herkesin elini tek tek öpüyor; Hamza'nın, Farid'in, Kürt adamın, seninkini.",
"Gerisi sende. Yedi yüz yetmiş dolar. Astarın içinde."
], secenekler: [
{ t: "Kalan yedi yüz yetmişi sen tamamlarsın.", to: "a5", etki: { sorumluluk: 2, umm_para: true } },
{ t: "İki yüz otuzla kalır. Bu odanın verebildiği bu.", to: "a5", etki: { temkin: 1, umm_kismi: true } },
{ t: "Cemil'i arayıp Ümmü Halil için indirim istersin.", to: "a5", etki: { sorumluluk: 1, cemil_ara: true } },
{ t: "Hamza'ya teşekkür edersin. Bir oğlun gibi.", to: "a5", etki: { umut: 1, hamza_yakin: true } }
]},

a5: { saat: "Ağustos 2015, gece", baslik: "Samir", metin: [
P(function(d){ return d.samir_borc; }, "Samir telefonda dinledi. “Kardeşim, ben de kirada oturuyorum,” dedi. “Ama tamam. Western Union. Yarın.” Ümmü Halil'e söyledin; yaşlı kadın sana uzun uzun baktı, sonra Samir için dua etti."),
P(function(d){ return d.umm_ret; }, "“Yok teyze.” Ümmü Halil başını salladı. “Allah yardımcın olsun,” dedi. Kapının yanına geri döndü. Gece boyunca onun sessizce dua ettiğini duydun. Hiba hiçbir şey söylemedi. Ama elini tuttu; senin yerine karar vermiş gibi."),
"Gece ikide Samir'den bir sesli mesaj. Hamburg'dan. Arkada bir televizyon, Almanca haberler.",
"“Ahmed. Haberleri izliyorum. Macaristan sınırı kapatıyor; tel örgü. Avusturya düşünüyor. Almanya şimdilik açık ama kimse bilmiyor ne kadar. Bu hafta gelmezsen belki hiç gelemezsin. Bu gece gel kardeşim. Ne olursa olsun bu gece.”",
"Hiba mesajı dinliyor. Omar onun kucağında uyuyor.",
"“Bu gece rüzgâr var,” diyor Hiba. Sesi sakin; Hiba hep sakindir, korktuğunda daha da sakin. “Cemil söyledi. Dört-beş. Ben deniz bilmem Ahmed. Ama rüzgârı bilirim. Halep'te rüzgârlı gecelerde çatıdaki çanak antenler uçardı.”",
"“Bir hafta beklersek,” diyorsun.",
"“Bir hafta beklersek Almanya kapanabilir. Samir öyle diyor.” Durakladı. “Bir hafta beklersek bir haftalık otel parası. Bir hafta beklersek Cemil bin beş yüz ister.”",
"Hiba sana bakıyor. “Sen eczacıydın. Riskleri hesaplardın. İlaç dozları, yan etkiler. Hesapla.”"
], secenekler: [
{ t: "“Hesaplanamaz Hiba,” dersin.", to: "a6", etki: { temkin: 1, hesaplanamaz: true } },
{ t: "Rakamları yüksek sesle hesaplarsın: para, gün, rüzgâr, Almanya.", to: "a6", etki: { temkin: 1, umut: 1, hesapladi: true } },
{ t: "Hiba'ya sorarsın: “Sen ne istiyorsun?”", to: "a6", etki: { sorumluluk: 1, hibaya_sordu: true } },
{ t: "Uyuyan Omar'a bakarsın. Uzun süre.", to: "a6", etki: { sorumluluk: 1, omara_bakti: true } }
]},

a6: { saat: "Ağustos 2015, 03.00", baslik: "Hava Raporu", metin: [
P(S("a5C"), "Hiba uzun süre düşündü. “Ben Yara'nın okula gitmesini istiyorum,” dedi. “Bir yerde. Bir yıl değil, on yıl. Aynı okula. Bir yerde kalmak istiyorum. Nerede olduğu umurumda değil artık.”"),
P(S("a5D"), "Omar uyuyordu, ağzı açık, bir eli Hiba'nın göğsünde. Üç yaşında. Halep'i hatırlamıyor. Savaşı hatırlamıyor. Gaziantep'i hatırlıyor; bir bahçe, bir kedi. Bir sonraki hatırlayacağı şey, şimdi verdiğin karar olacak."),
"Saat üç. Telefonunda hava raporu: Ege, gece yarısından sonra kuzey rüzgârı dört-beş, sabaha doğru azalarak üç. Bir hafta sonra: bir-iki, deniz düz.",
"Cemil'den mesaj: “Bu gece saat beşte. Minibüs otelin önünde. Gelirseniz gelin, gelmezseniz sıranızı başkasına veriyorum. Para iadesi yok.” Daha önce ödemedin; ama kapora istiyor.",
"Hamza yanına geliyor, fısıltıyla. “Ben bu gece gidiyorum,” diyor. “Siz gelirseniz, ben yanınızda olurum. Hiba Abla yüzme bilmiyorsa, ben bilirim. Halep'te yüzme takımındaydım.” Gülümsüyor; on dokuz yaşında bir gülümseme.",
"Bir de bir şey var ki kimse söylemiyor ama herkes biliyor: Türkiye'de kalabilirsin. Geçici koruma, bir kimlik kartı, bir iş, bir okul. Gaziantep'te bir yıl yaşadınız. Ama burada kalmanın da bir bedeli var: hep misafir olmak, hep “Suriyeli” olmak, Yara'nın hiçbir zaman tam bir yere ait olamaması.",
"Ve bir son seçenek, en karanlığı: Hiba ve çocuklar bu gece gider, Hamza'yla; sen kalırsın, para biriktirirsin, sonra gelirsin. Bir aile, bir denizle ikiye ayrılır.",
"Saat üçü beş geçiyor. Minibüs ikiye kadar."
], secenekler: [
{ t: "Bu gece gidersiniz. Hep birlikte.", to: "s1", etki: { umut: 2, kol: "deniz" } },
{ t: "Bir hafta beklersiniz. Deniz sakinleşsin.", to: "w1", etki: { temkin: 2, kol: "bekle" } },
{ t: "Gitmezsiniz. Türkiye'de kalıp BM'ye yeniden yerleşim başvurusu yaparsınız.", to: "r1", etki: { temkin: 1, sorumluluk: 1, kol: "kalis" } },
{ t: "Hiba ve çocuklar bu gece Hamza'yla gider. Sen kalıp para biriktirir, sonra gelirsin.", to: "p1", etki: { sorumluluk: 1, umut: 1, kol: "ayri" } }
]},

/* ---------- DENİZ KOLU ---------- */
s1: { saat: "Ağustos 2015, 05.00", baslik: "Kıyı", metin: [
"Bir minibüs, otuz kişi, karanlık. İzmir'den çıkıp bir saat, iki saat; Çeşme yolu, sonra bir köy yolu, sonra bir patika. Minibüs duruyor. “İnin. Hızlı. Ses yok.”",
"Zeytinlikler, sonra kayalar, sonra bir kumsal. Karanlıkta deniz; görünmüyor ama duyuluyor. Rüzgâr. Dalgalar. Karşıda, çok uzakta, birkaç ışık: Midilli? Yoksa bir gemi?",
"Cemil'in adamları botu şişiriyor. Bir lastik bot; Cemil'in dediği gibi yeni. Ama kırk kişilik dediği bot, yirmi beş kişiye göre. Kırk beş kişi kıyıda.",
"Herkes yeleklerini giyiyor. Omar ağlıyor; yelek ona büyük. Yara sessiz; bir eli senin elinde.",
P(function(d){ return d.flamingo; }, "Yara'nın üstünde pembe flamingo. Altında, görünmeyen, bir turuncu yelek daha; ya da yok, ne aldıysan."),
"Cemil'in adamı motoru takıyor. Sonra herkese bakıyor; karanlıkta yüzlere. Sana geliyor.",
"“Sen,” diyor. Türkçe. “Sen sakin görünüyorsun. Motoru sen kullanacaksın. Şu kol, gaz. Şu yön, ışıklar. Düz git. Yunan sahil güvenliği gelirse dur. Türk gelirse dur. Kimse gelmezse karaya kadar git, botu bıçakla kes, batır. Geri göndermesinler.”",
"Ellerine bir motor kolu tutuşturuyor. Sen eczacısın. Hiç bir tekne kullanmadın.",
"Kırk beş insan, bir lastik bot, karanlık bir deniz. Ve dümende sen."
], secenekler: [
{ t: "Kabul edersin. Başka seçenek yok.", to: "s2", etki: { sorumluluk: 2, dumen: true } },
{ t: "Hamza'ya verirsin. Genç, güçlü, yüzme biliyor.", to: "s2", etki: { temkin: 1, dumen_hamza: true } },
{ t: "Adamdan bir başkasını seçmesini istersin. Senin işin ailen.", to: "s2", etki: { temkin: 1, dumen_ret: true } },
{ t: "Kabul edersin; ama önce Ümmü Halil'i ve Zahra'yı ortaya, en güvenli yere oturtursun.", to: "s2", etki: { sorumluluk: 2, dumen: true, yerlesim: true } }
]},

s2: { saat: "Deniz, 06.10", baslik: "Motor", metin: [
P(function(d){ return d.dumen_hamza || d.dumen_ret; }, "Hamza motoru aldı. Gülümsedi; “Halep'te kayık kullanmıştım, Fırat'ta,” dedi. Yalan olabilirdi. Herkes inanmak istedi."),
"Bot kıyıdan ayrılıyor. Dalgalar önce küçük, sonra büyük. Rüzgâr kuzeyden; botun yan tarafına vuruyor. Su içeri sıçrıyor. Kadınlar dua ediyor. Çocuklar ağlıyor.",
"Bir saat. Kıyının ışıkları arkada küçüldü; önde, Midilli'nin ışıkları büyüdü. Yarı yol.",
"Sonra motor öksürüyor. Bir kez. İki kez. Duruyor.",
"Bir sessizlik ki rüzgârın sesinden daha gürültülü. Bot dalgaların içinde dönmeye başlıyor. Su içeri giriyor; artık sıçramıyor, akıyor.",
"Biri bağırıyor: “Bot batıyor!” Panik. İnsanlar ayağa kalkıyor; bot sallanıyor. Bir çanta denize düşüyor.",
"Hamza motorun başında; çekiyor, çekiyor. Çalışmıyor. Farid bir telefonla bir numarayı arıyor; çekmiyor. Ümmü Halil dua ediyor; yüksek sesle, sakin.",
"Hiba Omar'ı göğsüne bastırmış. Yara senin kolunda. Su ayak bileklerine kadar.",
"Bir şey yapman gerekiyor. Şimdi."
], secenekler: [
{ t: "Herkese oturmasını, sakin olmasını bağırırsın; Arapça, Türkçe, İngilizce.", to: "s3", etki: { sorumluluk: 2, sakinlestirdi: true } },
{ t: "Çantaları, bavulları denize atmaya başlarsın. Bot hafiflesin.", to: "s3", etki: { temkin: 1, atti: true } },
{ t: "Telefonunla Yunan sahil güvenliğinin numarasını ararsın; Samir'in bir gün önce gönderdiği numarayı.", to: "s3", etki: { temkin: 2, aradi: true } },
{ t: "Motoru Hamza'dan alıp kendin çalıştırmaya çalışırsın; eczacı elleriyle, bir pompayı, bir şırıngayı düşünerek.", to: "s3", etki: { umut: 1, motor: true } }
]},

s3: { saat: "Deniz, 06.40", baslik: "Işık", metin: [
P(S("s2A"), "Bağırdın. Üç dilde. İnsanlar bir bir oturdu. Bot sallanmayı bıraktı; tam değil, ama bıraktı. Bir panik, bir ses ile durdu."),
P(S("s2B"), "Çantalar, bavullar, bir valiz dolusu fotoğraf. Ümmü Halil'in bavulu; içinde bir halı, kocasının dükkânından. Ümmü Halil bir şey demedi; bavulun batışını izledi."),
P(S("s2C"), "Telefon çekmedi. Bir kez daha. Üçüncüde bir ses, İngilizce, Yunan aksanlı: “Hellenic Coast Guard.” Konum. Kırk beş kişi. Çocuklar. Bot batıyor."),
P(S("s2D"), "Motorun kapağını açtın. Yakıt hortumu; su girmiş. Hortumu söktün, ağzınla çektin, tükürdün, taktın. Bir kez çekiştir. Motor öksürdü; sonra çalıştı. Yarım dakika. Sonra yine durdu. Ama yarım dakika, dalgaların arasından biraz daha ileri."),
"Su artık dizlere kadar. Bir dalga botun yanından büyük bir parçayı yırtıyor; lastik, bir yerden, bir ses. Bot bir yana yatıyor.",
"Sonra insanlar denizde.",
"Her şey bir dakikada. Bir çığlık, bir dalga, bir el. Yara'nın elini tutuyorsun; bırakmıyorsun. Hiba Omar'la birlikte suda; yüzme bilmiyor; yeleği onu tutuyor.",
P(function(d){ return d.yelek === "sahte"; }, "Ve sonra görüyorsun: Yara'nın flamingolu yeleği su çekiyor. Ağırlaşıyor. Yara batmaya başlıyor. Omar'ın yeleği de. Sünger. Mesut'un dediği gibi."),
P(function(d){ return d.yelek === "sahte"; }, "Hamza yanında beliriyor. Kendi yeleğini çıkarıyor; turuncu, iyi, Basmane'de bir başka dükkândan. Omar'a geçiriyor. Sonra Yara'yı senin koluna itiyor. Sonra bir dalga."),
P(function(d){ return d.yelek !== "sahte"; }, "Yelekler tutuyor. Hepinizi. Kalın, etiketli, ağır yelekler. Yara'nın yüzü suyun üstünde; korkmuş ama nefes alıyor. Hiba'nın kucağında Omar."),
"Sonra bir ışık. Uzaktan. Bir projektör. Bir motor sesi. Bir gemi; gri, büyük, üstünde Yunan bayrağı.",
"Sonra eller. Sizi çekiyorlar. Bir battaniye. Sıcak çay. Bir Yunan askeri Yara'yı kucağına alıyor, Yunanca bir şey söylüyor. Yara ağlamıyor; yalnızca titriyor."
], secenekler: [
{ t: "Herkesi sayarsın. Kırk beş. Kırk beş olmalı.", to: "t1", etki: function(d){ d.sorumluluk++; d.saydi = true; if(d.yelek === "sahte") d.hamza_kayip = true; } },
{ t: "Hiba'yı, Yara'yı, Omar'ı kucaklarsın; başka hiçbir şeye bakmadan.", to: "t1", etki: function(d){ d.umut++; if(d.yelek === "sahte") d.hamza_kayip = true; } },
{ t: "Denize bakarsın. Hâlâ biri orada mı?", to: "t1", etki: function(d){ d.sorumluluk++; d.denize_bakti = true; if(d.yelek === "sahte") d.hamza_kayip = true; } },
{ t: "Ümmü Halil'i ararsın.", to: "t1", etki: function(d){ d.sorumluluk++; d.umm_aradi = true; if(d.yelek === "sahte") d.hamza_kayip = true; } }
]},

/* ---------- BEKLEME KOLU ---------- */
w1: { saat: "Ağustos 2015", baslik: "Bir Hafta", metin: [
"Cemil'e mesaj atıyorsun: “Bir hafta sonra.” Cevap: “Fiyat bin beş yüz. Kapora beş yüz. Yarın.”",
"Saat beşte minibüs geliyor. Hamza gidiyor; Farid ve Zahra gidiyor; Ümmü Halil gidiyor. Kapıda Hamza sana sarılıyor. “Hamburg'da görüşürüz,” diyor. “Ben size bir çay ısmarlarım.”",
"Oda boşalıyor. Siz dördünüz kalıyorsunuz ve on iki kişilik bir sessizlik.",
"Ertesi sabah kahvaltıda telefonun titriyor. Bir WhatsApp grubu; Basmane'deki Suriyelilerin grubu. Bir mesaj: “Dün gece Çeşme açıklarında bir bot. Kırk beş kişi. Yunan sahil güvenliği kurtarmış. Hepsi sağ.”",
"Rahatlıyorsun. Hamza, Farid, Zahra, Ümmü Halil. Sağ. Midilli'de.",
"Sonra bir şey içinde kıpırdıyor; bir pişmanlık mı? Onlar geçti. Sen burada, bir otel odasında, bir hafta daha.",
"Üç gün sonra Cemil'e kaporayı götürüyorsun. Otel Yıldız'ın lobisi boş. Resepsiyondaki adam omuz silkiyor: “Cemil Bey? Dün gitti. Polis geldi. Bir daha gelmez.” Kaporanı aldığı bir başka adam, telefonunu açmıyor. Beş yüz dolar."
], secenekler: [
{ t: "Polise gidersin.", to: "w2", etki: { temkin: 1, polis: true } },
{ t: "Başka bir kaçakçı ararsın. Hemen.", to: "w2", etki: { umut: 1, baska: true } },
{ t: "Hiba'ya söylersin. Saklamadan.", to: "w2", etki: { sorumluluk: 1, hibaya_soyledi: true } },
{ t: "Kimseye söylemezsin. Bir yolunu bulursun.", to: "w2", etki: { temkin: 1, sakladi: true } }
]},

w2: { saat: "Eylül 2015", baslik: "Atölye", metin: [
P(S("w1A"), "Karakolda bir memur dinledi. “Kaçakçılık,” dedi. “Siz de bir suça ortak oldunuz kardeşim. Ne bekliyorsunuz?” Bir tutanak tutmadı. Beş yüz dolar, bir karakol kapısında, bir cümleyle kayboldu."),
P(S("w1C"), "Hiba dinledi. Bir şey söylemedi. Sonra Omar'ı yere bırakıp kalktı, pencereye gitti. “Bin dolar Ümmü Halil'e,” dedi, ya da “Beş yüz Cemil'e.” Hesap yapıyordu. Sonra döndü: “Çalışacağız. İkimiz de.”"),
"Para azaldı. Dört bin dolar artık iki bin; sonra bin beş yüz. Bir kaçakçı için yetmiyor; Almanya için hiç yetmiyor.",
"Bornova'da bir tekstil atölyesinde iş buluyorsun. Bir bodrum katı, kırk dikiş makinesi, kırk Suriyeli, hiçbir pencere. Günde on iki saat; haftada altı gün. Ayda bin iki yüz lira. Sigortasız.",
"Halep'te bir eczacıydın. Burada bir ütü masasının başındasın. Kumaş, buhar, sıcak. Ellerin yanıyor.",
"Atölyenin sahibi Hakan Bey bir gün seni çağırıyor. “Ahmed, senin kızın kaç yaşında?” Yedi. “Burada çocuklar da çalışıyor biliyorsun. İplik keser, etiket diker. Günde yirmi lira. Okul paralı değil mi?”",
"Atölyenin köşesinde, bir masada, üç çocuk iplik kesiyor. On yaşında, belki on bir. Biri Yara'nın yaşında."
], secenekler: [
{ t: "“Hayır. Kızım okula gidecek,” dersin.", to: "w3", etki: { sorumluluk: 2, okul: true } },
{ t: "Bir ay için kabul edersin. Yalnızca bir ay; para biriksin diye.", to: "w3", etki: { umut: 1, yara_calisti: true } },
{ t: "İplik kesen çocukların ailelerini bulup konuşursun.", to: "w3", etki: { sorumluluk: 1, aileler: true } },
{ t: "Hakan Bey'i bir sivil toplum kuruluşuna şikâyet edersin; işini kaybetme pahasına.", to: "r2", etki: { sorumluluk: 2, sikayet: true, kol: "kalis" } }
]},

w3: { saat: "Eylül 2015", baslik: "Kırmızı Tişört", metin: [
P(S("w2A"), "Hakan Bey omuz silkti. “Sen bilirsin,” dedi. Yara ertesi hafta bir Türk okuluna başladı; Gaziantep'te bir yıl okumuştu, sınıfın en iyi Türkçe konuşanlarından biriydi. İlk gün sana bir resim getirdi: bir ev, bir ağaç, bir deniz. Denizin öbür tarafında bir şey yok."),
P(S("w2B"), "Yara bir ay atölyede çalıştı. Akşamları parmakları kızarık, sessiz. Bir ay sonra para birikmişti; yüz elli lira fazla. Yara'yı okula yazdırdın. İlk gün öğretmen sordu: “Ellerine ne oldu?” Yara cevap vermedi."),
"Bir eylül sabahı atölyede herkes telefonuna bakıyor. Bir fotoğraf. Bodrum. Bir kumsal. Kıyıda, yüzüstü, küçük bir çocuk. Kırmızı tişört, mavi şort, küçük ayakkabılar. Üç yaşında. Bir botun batışından.",
"Atölyede kırk makine duruyor. Kimse bir şey söylemiyor. Bir kadın ağlamaya başlıyor; sonra bir başkası.",
"Omar üç yaşında. Omar'ın da kırmızı bir tişörtü var.",
"O gece eve dönünce Omar'ı uyurken izliyorsun. Bir saat. İki. Bir hafta önce o bot sizin botunuz olabilirdi. Ya da Hamza'nın botu. Ya da herhangi bir bot. Deniz kimin olduğunu sormaz.",
"Beklemeye karar verdin. Ve o karar, şimdi, şans eseri, bir çocuğu yaşattı. Senin bir erdemin mi bu? Yoksa yalnızca bir rüzgâr raporu, bir dolandırıcı, bir haftalık gecikme?"
], secenekler: [
{ t: "Bir daha bot düşünmemeye karar verirsin. Burada kalacaksınız.", to: "t1", etki: { temkin: 2, kal_karar: true } },
{ t: "Hiba'yla birlikte fotoğrafa bakıp ağlarsınız.", to: "t1", etki: { sorumluluk: 1 } },
{ t: "Samir'i arayıp yasal bir yol olup olmadığını sorarsın; aile birleşimi, vize, herhangi bir şey.", to: "t1", etki: { temkin: 1, yasal: true } },
{ t: "Omar'ın kırmızı tişörtünü dolaba kaldırırsın. Bir daha giymesin.", to: "t1", etki: { sorumluluk: 1, tisort: true } }
]},

/* ---------- KALIŞ KOLU ---------- */
r1: { saat: "Eylül 2015", baslik: "Kayıt", metin: [
"Cemil'e cevap vermiyorsun. Saat beşte minibüs gidiyor; Hamza, Farid, Zahra, Ümmü Halil. Kapıda Hamza sana bakıyor; bir soru, bir hayal kırıklığı. “Hamburg'da görüşürüz,” diyor yine de.",
"Ertesi hafta İzmir İl Göç İdaresi'ndesin. Bir sıra; yüzlerce kişi, sabah altıdan beri. Bir numara: 347. Öğleden sonra üçte sıra geliyor.",
"Bir memur, yorgun, kibar. Geçici koruma kimliği. Parmak izi, fotoğraf, adres. Bir kart; yabancı kimlik numarası. Hiba'ya, Yara'ya, Omar'a da. Dört kart.",
"Sonra bir başka masa: Birleşmiş Milletler Mülteciler Yüksek Komiserliği. Yeniden yerleşim başvurusu. Bir form; on iki sayfa. Halep, eczane, varil bombası, Gaziantep, İzmir. Bütün bir hayat, kutucuklara.",
"“Bekleme süresi?” diye soruyorsun.",
"Görevli bir an duraksıyor. “Belirsiz,” diyor. “Yüzde birin altında bir şans. Ama yüzde bir, sıfır değil.”",
"Bir kart, bir form, yüzde bir. Ve bir şehir, İzmir, ki bundan sonra sizin olacak mı, olmayacak mı, bilmiyorsun."
], secenekler: [
{ t: "Bornova'da bir ev kiralarsın. Burada bir hayat kurmaya başlayacaksınız.", to: "r2", etki: { temkin: 1, ev: true } },
{ t: "Bir eczanede iş ararsın; eczacı yardımcısı, ne olursa.", to: "r2", etki: { umut: 1, eczane: true } },
{ t: "Hamza'ya mesaj atıp vardı mı diye sorarsın.", to: "r2", etki: { sorumluluk: 1, hamzaya: true } },
{ t: "Formun bir kopyasını alıp her gece okursun; yüzde bir.", to: "r2", etki: { umut: 1, form: true } }
]},

r2: { saat: "2016", baslik: "Okul", metin: [
P(function(d){ return d.sikayet; }, "Şikâyetin bir derneğe ulaştı. Atölye bir ay sonra denetlendi; sen işini kaybettin. Ama derneğin avukatı seni bir şeye yönlendirdi: geçici koruma kaydı, BM yeniden yerleşim başvurusu, bir eczanede kayıt dışı bir iş. Bir şikâyet, bir kapıyı kapatıp bir başkasını açtı."),
P(S("r1C"), "Hamza'dan cevap ertesi gün geldi; bir fotoğraf. Midilli, bir kamp, Hamza ıslak saçlarla gülümsüyor. “Vardık. Herkes sağ. Ümmü Halil bile.” Rahatladın. Ve bir şey daha hissettin; adını koymak istemediğin."),
P(S("r1B"), "Karşıyaka'da bir eczanede iş buldun; eczacı yardımcısı, kayıt dışı. Eczacı Nilgün Hanım, yetmişlerinde. İlk gün bir reçeteye baktın, bir ilaç etkileşimi fark ettin, söyledin. Nilgün Hanım sana uzun uzun baktı. “Siz eczacı mıydınız?” Evet. “Halep'te mi?” Evet. Bir şey söylemedi. Ama ertesi gün maaşını artırdı."),
"Bir yıl. Yara Bornova'da bir ilkokulda, üçüncü sınıf. Türkçesi senden iyi; artık Arapçayı unutuyor. Omar bir kreşte. Hiba bir dernekte Suriyeli kadınlara Türkçe öğretiyor; kendi Türkçesi zayıf, ama öğretiyor.",
"Bir akşam Yara'nın öğretmeni seni okula çağırıyor. Elif Hanım; genç, ciddi. Bir resim gösteriyor: Yara'nın çizdiği. Bir sınıf; sıralar, tahta, çocuklar. Bir çocuk, köşede, tek başına; yüzü yok.",
"“Yara çok başarılı,” diyor Elif Hanım. “Ama arkadaşı yok. Bir çocuk geçen hafta ona ‘Suriyeli, ülkene dön’ demiş. Yara ağlamamış. Bir şey dememiş. Bu resmi çizmiş.”",
"Bir süre susuyor. “Ben bu çocukla konuştum. Ailesiyle de. Ama size bir şey söylemem gerekiyor: bu ilk değil, son da olmayacak. Burada kalacaksanız, Yara bununla büyüyecek.”"
], secenekler: [
{ t: "Yara'yla konuşursun; onun yaşında bir dille.", to: "r3", etki: { sorumluluk: 1, yarayla: true } },
{ t: "O çocuğun ailesiyle sen de konuşmak istersin.", to: "r3", etki: { sorumluluk: 1, aile_konus: true } },
{ t: "Elif Hanım'a teşekkür edip Yara için başka bir okul ararsın.", to: "r3", etki: { temkin: 1, okul_degis: true } },
{ t: "Eve dönüp BM formunu yeniden okursun. Yüzde bir.", to: "r3", etki: { umut: 1, form2: true } }
]},

r3: { saat: "2018", baslik: "Mülakat", metin: [
P(S("r2A"), "Yara'yla balkonda konuştun. “Baba, ben Türk müyüm, Suriyeli miyim?” dedi. Bilmiyordun. “İkisi,” dedin. Yara düşündü. “İkisi olunca hiçbiri olmuyor,” dedi. Dokuz yaşında."),
P(S("r2B"), "O çocuğun babası bir inşaat işçisiydi; Sivaslı. Bir kahvede buluştunuz. Uzun süre bir şey konuşmadınız. Sonra adam dedi ki: “Benim babam da Almanya'ya gitmişti. Altmışlarda. Ona da ‘Türk, ülkene dön’ demişler.” Oğluna ne diyeceğini bilmediğini söyledi. Sen de bilmiyordun."),
"İki yıl sonra bir telefon. BM. Bir mülakat. Ankara.",
"Bir oda, bir masa, bir Kanadalı görevli ve bir tercüman. Üç saat. Halep, eczane, varil bombası, Gaziantep, İzmir, Yara'nın okulu, Omar'ın kreşi. Her şeyi yeniden anlatıyorsun; bu kez bir dosyaya, bir ülkeye.",
"Bir ay sonra bir mektup. Kanada. Toronto. Bir ev, bir dil kursu, bir yıllık destek. Kalıcı oturum. Beş yıl sonra vatandaşlık.",
"Yüzde bir. Size düştü.",
"Ama artık İzmir'de bir eczanen var; kendinin değil, Nilgün Hanım'ın, ama orada bir yerin var. Yara Bornova'da, beşinci sınıfta, bir arkadaşı oldu sonunda; o Sivaslı çocuk. Omar Türkçe konuşuyor; Arapçası yok. Hiba'nın derneğinde altmış kadın.",
"İzmir sizin oldu mu? Hayır. Ama bir şey oldu."
], secenekler: [
{ t: "Kanada'ya gidersiniz.", to: "t1", etki: { umut: 2, kanada: true } },
{ t: "Kalırsınız. İzmir'de.", to: "t1", etki: { temkin: 1, sorumluluk: 1, kaldi: true } },
{ t: "Hiba'ya ve Yara'ya sorarsın; onlar karar versin.", to: "t1", etki: function(d){ d.sorumluluk++; d.aile_karar = true; d.kaldi = true; } },
{ t: "Nilgün Hanım'a danışırsın.", to: "t1", etki: function(d){ d.temkin++; d.nilgun = true; d.kanada = true; } }
]},

/* ---------- AYRI KOL ---------- */
p1: { saat: "Ağustos 2015, 05.00", baslik: "İskele", metin: [
"Minibüs otelin önünde. Hiba, Yara, Omar. Hamza. Ve sen; minibüse binmeyeceksin.",
"Astarı söküp üç kişilik parayı Hiba'ya veriyorsun. Geri kalanı sende; bir sonraki bot için. Bir ay, belki iki. Çalışıp biriktirip gelirsin.",
"Hiba'nın yüzü kâğıt gibi. “Ahmed,” diyor, “ben yüzme bilmiyorum.”",
"“Hamza biliyor,” diyorsun. Hamza başını sallıyor; ciddi, on dokuz yaşında, bir erkek gibi. “Ben onlara bakarım Ahmed Abi. Söz.”",
"Yara sana sarılıyor. “Baba neden gelmiyorsun?” Bir açıklama yapıyorsun; para, sıra, bot. Yara anlamıyor. Anlamaması gerekiyor. “Hamburg'da amcanın evinde görüşürüz,” diyorsun.",
"Omar uyuyor; Hiba'nın kucağında. Ona veda edemiyorsun; uyandırmak istemiyorsun.",
"Minibüs kalkıyor. Arka camda Yara'nın yüzü; bir el, sallanan.",
"Basmane'nin sokağında, sabah beşte, tek başına duruyorsun. Astarın hafif. Bir ailenin yarısı bir minibüste, öbür yarısı bir kaldırımda."
], secenekler: [
{ t: "Otele dönüp telefonunu elinden bırakmadan beklersin.", to: "p2", etki: { sorumluluk: 1, bekledi: true } },
{ t: "Minibüsün arkasından koşarsın; bir sokak, iki sokak.", to: "p2", etki: { umut: 1, kostu: true } },
{ t: "Camiye gidip sabah namazına durursun.", to: "p2", etki: { temkin: 1, cami: true } },
{ t: "Bornova'daki atölyeye gidip o sabahtan çalışmaya başlarsın.", to: "p2", etki: { temkin: 1, calisma: true } }
]},

p2: { saat: "Ağustos 2015", baslik: "Sessizlik", metin: [
P(S("p1B"), "Koştun. İki sokak, üç. Minibüs bir köşeyi döndü ve kayboldu. Bir kaldırımda nefes nefese durdun. Bir fırıncı kepengini açıyordu; sana baktı, bir şey sormadı. Basmane'de herkes birilerinin arkasından koşan birini görmüştü."),
"Saat altı. Yedi. Sekiz. Telefon sessiz.",
"Hiba'nın telefonu kapalı; denizde kapatmak gerekiyor, Cemil'in adamları öyle demiş. Hamza'nınki de.",
"Saat dokuz. On. WhatsApp grubunda mesajlar: “Çeşme açıklarında bir bot görüldü.” “Yunan sahil güvenliği bir operasyon yapıyor.” “Bir bot batmış, kaç kişi bilinmiyor.”",
"Hangi bot? Kimin botu? Kırk beş kişi mi, yirmi beş mi?",
"Saat on bir. Ellerin titriyor. Telefon elinde; ekranı her otuz saniyede bir yeniliyorsun.",
"Saat on iki kırk. Bir mesaj. Bilinmeyen bir Yunan numarası.",
"Bir fotoğraf. Bir battaniye, ıslak saçlar, bir çocuk yüzü. Yara. Arkasında Hiba; Omar kucağında. Ve Hamza, bir köşede, gülümsüyor.",
"Altında Hiba'nın yazısı, Arapça: “Vardık. Herkes sağ. Midilli. Gel Ahmed. Çabuk gel.”"
], secenekler: [
{ t: "Ağlarsın. Basmane'de, bir otel odasında, tek başına.", to: "p3", etki: { umut: 1, agladi: true } },
{ t: "Hemen Cemil'i arayıp bir sonraki botu sorarsın.", to: "p3", etki: { umut: 2, hemen: true } },
{ t: "Hamza'ya bir teşekkür mesajı yazarsın.", to: "p3", etki: { sorumluluk: 1, hamza_tesekkur: true } },
{ t: "Fotoğrafa uzun uzun bakarsın. Omar'ın yüzüne. Ona veda edemedin.", to: "p3", etki: { sorumluluk: 1, omar_yuz: true } }
]},

p3: { saat: "Kasım 2015", baslik: "Tel", metin: [
"Para yetmiyor. Bir ay atölyede, sonra bir ay daha. Bin dolar. Bin iki yüz. Cemil artık bin beş yüz istiyor. Bir ay daha.",
"Hiba ve çocuklar Midilli'den Atina'ya, Atina'dan Makedonya'ya, Sırbistan'a, Hırvatistan'a. Her gün bir fotoğraf; bir tren, bir çadır, bir sınır, bir otobüs. Hamza her zaman bir köşede.",
"Ekimde Hamburg. Samir'in evi. Bir fotoğraf: Yara bir Alman okul sırasında, yeni bir çanta. Omar bir parkta. Hiba bir pencerenin önünde; yüzü yorgun, ama bir pencerenin önünde.",
"Kasımda haberler: Avrupa sınırları kapanıyor. Balkan rotası kapandı. Yunanistan'dan öteye geçilmiyor. Ve Türkiye ile Avrupa Birliği arasında bir anlaşma konuşuluyor: Yunan adalarına geçenler Türkiye'ye geri gönderilecek.",
"Bin beş yüz doların var. Bir bot var. Ama botun öbür tarafında artık bir yol yok. Midilli'de bir kamp, belki yıllarca.",
"Hiba görüntülü arıyor. Arkada Yara, Almanca ödev yapıyor. “Ahmed,” diyor Hiba, “aile birleşimi diye bir şey varmış. Kâğıtla. Yasal. Belki bir yıl, belki iki. Avukat söyledi. Bota binme. Lütfen. Bota binme.”"
], secenekler: [
{ t: "Aile birleşimi için başvurursun. Bekleyeceksin.", to: "t1", etki: { temkin: 2, birlesim: true } },
{ t: "Bota binersin. Kamp da olsa, onlara bir deniz daha yakın.", to: "t1", etki: { umut: 2, bota_bindi: true } },
{ t: "Hiba'ya “Sen gel, çocukları al gel, burada yaşayalım,” dersin.", to: "t1", etki: { sorumluluk: 1, geri_cagir: true } },
{ t: "Yara'yla konuşmak istersin. Ne istediğini.", to: "t1", etki: { sorumluluk: 1, yara_ne: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Bir yıl sonra", baslik: "Sonra", metin: [
P(function(d){ return d.kol === "deniz" && !d.hamza_kayip; }, "Midilli'den sonra yirmi üç gün. Atina, Makedonya, Sırbistan, Hırvatistan, Avusturya, Almanya. Bir Ekim sabahı Hamburg. Samir kapıyı açtı; iki kardeş, bir koridorda, uzun süre sarıldınız. Kırk beş kişiden kırk beşi kurtuldu o sabah. Bir haberde bile yer almadı; haber olmak için birinin ölmesi gerekiyordu."),
P(function(d){ return d.hamza_kayip; }, "Yunan askerleri kırk dört kişi saydı. Kırk dört. Bir eksik. Hamza. Kendi yeleğini Omar'a giydirmişti. Yüzme biliyordu; Halep'te yüzme takımındaydı. Ama o dalga bir yüzücü için değildi. İki gün sonra cesedini Midilli'nin kuzey kıyısında buldular. On dokuz yaşında. Sırt çantasında bir mühendislik kitabı, ıslak, sayfaları yapışmış."),
P(function(d){ return d.hamza_kayip; }, "Hamburg'a vardınız. Yirmi üç gün sonra. Samir kapıyı açtı. Omar'ın üstünde hâlâ o turuncu yelek vardı; çıkarmak istememişti. Hiba bir hafta sonra yeleği yıkadı, katladı, bir dolaba koydu."),
P(function(d){ return d.kol === "bekle"; }, "İzmir'de bir yıl. Bornova'da bir ev, bir oda, bir mutfak. Bot düşüncesi bir gece, bir fotoğraf, bir kırmızı tişörtle bitti. Basmane'deki can yeleği dükkânları kapandı; anlaşmadan sonra kimse geçmiyor artık."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Toronto. Bir kış ki Halep'in de İzmir'in de hiç görmediği; eksi yirmi. Bir apartman, bir dil kursu, bir eczanede depo görevlisi. Yara Kanadalı bir okulda; İngilizcesi bir yılda Türkçesini geçti."),
P(function(d){ return d.kol === "kalis" && d.kaldi; }, "İzmir'de kaldınız. Kanada'nın mektubunu bir çekmeceye koydun. Yara bir yıl sonra bir şiir yarışmasında birinci oldu; Türkçe bir şiir, adı “İki Deniz”. Okul müdürü onu sahneye çağırırken soyadını yanlış okudu. Yara düzeltti."),
P(function(d){ return d.kol === "ayri" && d.birlesim; }, "Bir yıl. Hâlâ İzmir'desin. Aile birleşimi başvurusu Almanya'da, bir masanın üstünde. Her hafta Hiba'yla görüntülü konuşuyorsun. Omar seni tanıyor; ama “Papa” diyor artık, Almanca."),
P(function(d){ return d.kol === "ayri" && d.bota_bindi; }, "Bota bindin. Kasım sonunda, sakin bir gecede. Midilli. Bir kamp; Moria. Bir çadır, bin kişilik bir kampta beş bin kişi. Bir yıl. Hâlâ oradasın. Ailen Hamburg'da, sen bir adada; aranızda bir anlaşma, bir tel, bir deniz."),
P(function(d){ return d.kol === "ayri" && (d.geri_cagir || d.yara_ne); }, "Hiba gelmedi. Yara Almanca okuyordu; Omar kreşe başlamıştı. “Gelirsek yine başa döneriz Ahmed,” dedi Hiba. Bir yıl. Sen İzmir'de, onlar Hamburg'da. Bir aile, bir ekranda."),
"Bir sabah bir mesaj. Mesut'tan. Basmane'deki dükkân. Bir fotoğraf: dükkânın vitrini boş. “Kapattım,” yazıyor. “Yelek satmıyorum artık. Eşofman satıyorum. Kızım üniversiteyi bitirdi.” Altında bir cümle daha: “Hepiniz geçtiniz mi?”"
], secenekler: [
{ t: "Mesut'a cevap yazarsın; olduğu gibi.", to: "t1b", etki: { sorumluluk: 1, mesuta: true } },
{ t: "Mesut'a bir teşekkür yazarsın.", to: "t1b", etki: { umut: 1 } },
{ t: "Cevap vermezsin. Ne diyeceğini bilmiyorsun.", to: "t1b", etki: { temkin: 1 } },
{ t: "Mesut'a o gün aldığın yeleklerin fotoğrafını gönderirsin.", to: "t1b", etki: { sorumluluk: 1, yelek_foto: true } }
]},

t1b: { saat: "Bir yıl sonra", baslik: "Ümmü Halil", metin: [
P(function(d){ return d.hamza_kayip; }, "Bir ay sonra Hamza'nın annesini buluyorsun. Halep'te; telefonla. Ona ne söyleyeceğini bilmiyorsun. Bir yabancının sesi, bir oğlun son saatleri. Anlatıyorsun: yeleği, Omar'ı, dalgayı. Kadın uzun süre bir şey söylemiyor. Sonra: “O hep böyleydi. Hep birine bir şeyini verirdi. Kalemini, ekmeğini. Şimdi de...” Cümleyi bitirmiyor."),
"Bir gün bir mesaj geliyor; İsveç'ten. Bir fotoğraf. Bir hastane koridoru. Beyaz önlüklü genç bir doktor; yanında, tekerlekli sandalyede, çok yaşlı bir kadın. Ümmü Halil.",
P(function(d){ return d.umm_para || d.samir_borc; }, "Altında Arapça bir not: “Ahmed oğlum. Torunumu buldum. Senin bin dolarınla. Her gün senin için dua ediyorum. Ümmü Halil.”"),
P(function(d){ return d.umm_kismi; }, "Altında Arapça bir not: “O gece bir şapkada iki yüz otuz dolar vardı. Yetmedi. Ama o şapkayı bir İsveçli gazeteciye anlattım; o yazdı; bir dernek kalanını verdi. Torunumu buldum. O şapka için her gün dua ediyorum.”"),
P(function(d){ return d.umm_ret; }, "Altında Arapça bir not, kime yazıldığı belirsiz: “Basmane'deki otel odasındaki herkese. Ben vardım. Bir yıl sürdü. Ama vardım. Torunum doktor olmuş.” Bu mesajı sana kim gönderdi, bilmiyorsun. Belki bir grup mesajı. Belki sana."),
P(function(d){ return !d.umm_para && !d.samir_borc && !d.umm_kismi && !d.umm_ret; }, "Altında Arapça bir not: “Torunumu buldum. Allah hepinizden razı olsun.”"),
"Fotoğrafa bakıyorsun. Ümmü Halil gülümsüyor; dişsiz, buruşuk, doksanına yaklaşmış bir gülümseme. Torunu elini omzuna koymuş.",
P(function(d){ return d.kese; }, "Cebinde hâlâ o bez kese var. Humus'un toprağı. Oğullarının mezarından. Bir gün nereye gömeceğini bileceksin."),
"Bir kadın, seksenine yakın, üç oğlunu gömmüş, bir denizi geçmiş, bir torunu bulmuş. Senin ona verdiğin ya da vermediğin bin dolar, bu hikâyenin neresinde?"
], secenekler: [
{ t: "Ümmü Halil'e cevap yazarsın.", to: "t2", etki: { sorumluluk: 1 } },
{ t: "Fotoğrafı Hiba'ya ve Yara'ya gösterirsin.", to: "t2", etki: { umut: 1, gosterdi: true } },
{ t: "Fotoğrafa bakıp o otel odasını, o geceyi düşünürsün.", to: "t2", etki: { temkin: 1 } },
{ t: function(d){ return d.kese ? "Bez keseyi açıp toprağa bakarsın." : "Bir şey yapmazsın; ama fotoğrafı kaydedersin."; }, to: "t2", etki: { sorumluluk: 1, kese_acti: true } }
]},

t2: { saat: "2018", baslik: "Yara", metin: [
"Yara on yaşında. Bir akşam yanına oturuyor ve sana bir soru soruyor; bütün bu yılların sorusu.",
P(function(d){ return d.hamza_kayip; }, "“Baba, Hamza Abi neden öldü?” Yara o geceyi hatırlıyor; bir dalga, bir el, bir itiş. Kendisinin bir babanın koluna itildiğini, Hamza'nın gittiğini. Dört yıldır bir şey sormadı. Şimdi soruyor."),
P(function(d){ return !d.hamza_kayip && d.kol === "deniz"; }, "“Baba, o gece denizde neden bizi o bota bindirdin?” Yara o geceyi hatırlıyor; karanlık, rüzgâr, soğuk su. Bir yaz tatili değildi. Dört yıldır sormadı. Şimdi soruyor."),
P(function(d){ return d.kol !== "deniz"; }, "“Baba, biz neden denize hiç gitmedik? Herkes yazın denize gidiyor. Sen hep hayır diyorsun.” Yara deniz kıyısında bir şehirde yaşıyor ve dört yıldır bir kez bile denize girmedi."),
"Yara'nın gözleri ciddi. Bir çocuğun gözleri değil artık; bir soru soran birinin.",
"Bu soruya bir cevap var mı? Bir rüzgâr raporu, bir yelek, bir dolandırıcı, bir dalga. Bir babanın kararları ve bir denizin hiç kimseye sormadan yaptıkları."
], secenekler: [
{ t: "Ona her şeyi anlatırsın; bir hikâye gibi, baştan.", to: "y_hikaye", etki: { sorumluluk: 1, anlatti: true } },
{ t: "Onu denize götürürsün. Bir yaz günü. İlk kez.", to: "y_deniz", etki: { umut: 1, denize: true } },
{ t: "“Büyüyünce anlatacağım,” dersin.", to: "t3", etki: { temkin: 1, ertele: true } },
{ t: "“Bilmiyorum kızım,” dersin. Dürüstçe.", to: "t3", etki: { sorumluluk: 1, bilmiyorum: true } }
]},

y_hikaye: { saat: "2018", baslik: "Hikâye", metin: [
"Anlatıyorsun. Halep'ten başlıyorsun. Eczaneyi. Salahaddin mahallesini. Varil bombasını. Gaziantep'i. Basmane'yi.",
"Mesut'u anlatıyorsun; yelekleri. Cemil'i anlatıyorsun; “Ben taksi şoförüyüm.” Ümmü Halil'i, Hamza'yı, Farid'i, Zahra'yı. Otel odasını, bir şapkayı.",
P(function(d){ return d.kol === "deniz"; }, "Sonra o geceyi. Kıyıyı, motoru, dalgayı. Bir ışığı. Bir Yunan askerinin kollarını."),
P(function(d){ return d.hamza_kayip; }, "Sonra Hamza'yı. Yeleğini. Omar'ı. Yara'yı senin koluna iten elini. Bunu anlatırken sesin kırılıyor ve Yara elini tutuyor; on yaşında bir el, senin elini."),
P(function(d){ return d.kol !== "deniz"; }, "Sonra o sabahı; minibüse binmediğiniz sabahı. Hamza'nın bindiğini. Ve bir hafta sonra bir fotoğrafı; bir kumsal, bir kırmızı tişört."),
"Yara dinliyor. Bir saat. İki. Bir kez bile sözünü kesmiyor.",
"Bitince uzun süre susuyor. Sonra:",
"“Baba, sen doğru mu yaptın?”",
"Bu soruyu kendine kaç kez sordun? Her gece. Ve her gece cevap değişti. Bir gece evet; şans. Bir gece hayır; şans. Doğru kararın ancak sonradan, bir denizin keyfiyle belli olduğu bir dünyada, bir baba neyi bilebilir?"
], secenekler: [
{ t: "“Bilmiyorum. Ama elimden geleni yaptım,” dersin.", to: "t3", etki: { sorumluluk: 1, elimden: true } },
{ t: "“Hayır. Ama başka doğru yoktu,” dersin.", to: "t3", etki: { temkin: 1 } },
{ t: "“Sen ne düşünüyorsun?” diye sorarsın.", to: "t3", etki: { umut: 1, yaraya_sordu: true } },
{ t: "Bir şey söylemez, onu kucaklarsın.", to: "t3", etki: { sorumluluk: 1 } }
]},

y_deniz: { saat: "2018, Temmuz", baslik: "Kıyı", metin: [
P(function(d){ return d.kol === "deniz" || d.birlesim; }, "Hamburg'dan bir saat, Baltık Denizi. Gri, soğuk, sakin. Bir kumsal; Almanlar havlularının üstünde, çocuklar kumdan kale yapıyor."),
P(function(d){ return d.kol === "bekle" || (d.kol === "kalis" && d.kaldi) || d.geri_cagir || d.yara_ne; }, "Çeşme. Ilıca plajı. Temmuz. Turistler, şemsiyeler, dondurmacılar. Ve karşıda, ufukta, puslu, bir ada: Sakız. Öbür tarafta Midilli. Yirmi kilometre."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Toronto, Ontario Gölü. Bir göl ama deniz gibi; öbür kıyısı görünmüyor. Bir kumsal, kanolar, bir dondurmacı."),
P(function(d){ return d.bota_bindi; }, "Midilli. Kampın arkasındaki kayalık. Ailen Hamburg'dan bir yaz için gelmiş; bir otel, bir haftalık izin. Yara denize bakıyor; karşıda Türkiye, Ayvalık'ın ışıkları."),
"Yara kıyıda duruyor. Ayakları kumda. Dalgalar parmaklarına değiyor; geri çekiliyor; yeniden değiyor.",
"“Baba,” diyor, “giremem.”",
"Yanına geliyorsun. Elini tutuyorsun. Birlikte bir adım. Su bileklerinizde. Bir adım daha. Dizlerinizde.",
"Yara titriyor. Gözleri kapalı. Sonra açıyor. Denize bakıyor; sakin, mavi, hiçbir şey hatırlamayan bir deniz.",
"“Deniz bilmiyor,” diyor Yara. “Ne olduğunu. Bilmiyor, değil mi?”",
"Bir babanın bir kızına deniz hakkında söyleyebileceği bir şey var mı?"
], secenekler: [
{ t: "“Bilmiyor. Ama biz biliyoruz,” dersin.", to: "t3", etki: { sorumluluk: 1 } },
{ t: "Onu kucaklayıp suya biraz daha girersin. Yüzmeyi öğreteceksin.", to: "t3", etki: { umut: 2, yuzme: true } },
{ t: "Onu kıyıya geri götürürsün. Bugünlük bu kadar.", to: "t3", etki: { temkin: 1 } },
{ t: function(d){ return d.kese ? "Cebinden bez keseyi çıkarıp toprağı suya serpersin." : "Avucuna biraz su alıp Yara'nın alnına dokundurursun."; }, to: "t3", etki: { sorumluluk: 1, kese_serpti: true } }
]},

t3: { saat: "2022", baslik: "Dil", metin: [
P(S("y_denizB"), "Yara bir haftada yüzmeyi öğrendi. Önce senin kollarında, sonra tek başına. Bir sabah kıyıdan elli metre açıldı ve sana el salladı. Sen de el salladın. İkiniz de ağladınız; Yara tuzlu su sandı."),
P(S("y_denizD"), "Toprak suya karıştı. Humus'un toprağı, Ege'nin ya da Baltık'ın suyunda. Yara bir şey sormadı. Ümmü Halil'in oğulları; bir başka denizde. Yara elini suya soktu, toprağın dağılışını izledi."),
"Dört yıl sonra. Yara on dört yaşında. Bir akşam yemekte, aile masasında, bir şey fark ediyorsun.",
P(function(d){ return d.kol === "deniz" || d.kol === "ayri"; }, "Yara ve Omar Almanca konuşuyor. Kendi aralarında; hızlı, gülerek. Hiba anlamaya çalışıyor; sen de. Omar yedi yaşında; Arapça birkaç kelime biliyor: “Baba”, “Anne”, “Teta”. Yara Arapça anlıyor ama cevabı Almanca veriyor."),
P(function(d){ return d.kol === "bekle" || (d.kol === "kalis" && d.kaldi); }, "Yara ve Omar Türkçe konuşuyor. Kendi aralarında; İzmir şivesiyle, gülerek. Omar yedi yaşında; Arapça birkaç kelime biliyor. Yara Arapçayı anlıyor ama cevabı Türkçe veriyor. Hiba ile sen Arapça konuşuyorsunuz; çocuklarınız sizi bir yabancı dilde dinliyor gibi."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Yara ve Omar İngilizce konuşuyor. Kendi aralarında; Kanada aksanıyla. Omar yedi yaşında; ne Arapça ne Türkçe. Yara üç dil anlıyor; ama düşündüğü dil İngilizce."),
"Halep'te bir eczanen vardı. Bir mahallen, bir dilin, bir hayatın. Çocukların o dili konuşmuyor. O mahalleyi bilmiyor. O eczaneyi bir fotoğraftan tanıyor.",
"Bir şey kaybettin. Bir şey kazandın. Bir dil, bir yer, bir aidiyet; bir sınırın iki yanına bölünmüş.",
"Yara sana dönüyor; bir şey soruyor, Arapça, ama kelimeler takılıyor. Bir Almanca ya da Türkçe ya da İngilizce kelime araya giriyor. Sonra gülüyor. “Baba, bana yeniden Arapça öğretir misin?”"
], secenekler: [
{ t: "Evet. Her akşam bir saat.", to: "t4", etki: { sorumluluk: 1, arapca: true } },
{ t: "“Sen buranın dilini konuş. Ben anlarım,” dersin.", to: "t4", etki: { umut: 1, birak: true } },
{ t: "Ona Halep'teki eczanenin tabelasını, bir fotoğraftan, Arapça okutursun.", to: "t4", etki: { sorumluluk: 1, tabela: true } },
{ t: "Ona Ümmü Halil'i anlatırsın; bir torunun, büyükannesini bulmak için öğrendiği dili.", to: "t4", etki: { sorumluluk: 1, umm_anlatti: true } }
]},

t4: { saat: "2025", baslik: "Karşı Kıyı", metin: [
"On yıl. Bir sabah bir kıyıda duruyorsun.",
P(function(d){ return d.kol === "deniz"; }, "Midilli'desin. On yıl sonra, bir turist olarak; Alman pasaportuyla. Kuzey kıyısı. Kayalar, zeytinlikler, bir mezarlık; adı olmayan mezarlar, üstlerinde yalnızca tarihler. Karşıda Türkiye. Ayvalık'ın ışıkları."),
P(function(d){ return d.kol === "bekle" || (d.kol === "kalis" && d.kaldi) || d.birlesim || d.geri_cagir || d.yara_ne; }, "Ayvalık'tasın. On yıl sonra. Bir kıyı, bir çay bahçesi, turistler. Karşıda Midilli. Yirmi kilometre. Her yaz binlerce turist feribotla geçiyor; yarım saat, otuz avro. On yıl önce bir lastik botla, bin iki yüz dolara, bir gece."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Toronto'dasın; ama bu yaz Ayvalık'a geldin. On yıl sonra, Kanada pasaportuyla. Bir kıyı, bir çay bahçesi. Karşıda Midilli. Hiç geçmediğin deniz."),
P(function(d){ return d.bota_bindi; }, "Hâlâ Midilli'desin; ya da yeniden. Kamp kapandı, yandı, yeniden kuruldu. Sen artık bir dernekte tercümansın; Arapça, Türkçe, biraz Yunanca. Her hafta yeni botlar geliyor; daha az, ama geliyor."),
P(function(d){ return d.hamza_kayip; }, "Bir mezar buluyorsun. Midilli'nin kuzeyinde, küçük bir mezarlıkta. Üstünde Yunanca, Arapça ve İngilizce: “Hamza, 1996–2015. Halep.” Birisi taşa bir mühendislik cetveli bırakmış. Kim, bilmiyorsun."),
"Yanında Yara. Yirmi yaşında. Üniversitede; mühendislik.",
"Denize bakıyorsunuz. Sakin, mavi, bir yaz sabahı. Bir feribot geçiyor; yarım saat, turistler, fotoğraf makineleri.",
"Yara bir şey söylüyor; hangi dilde, artık fark etmiyor.",
"“Baba. Biz neredeyiz? Hangi kıyıdayız?”"
], secenekler: [
{ t: "“Burada,” dersin. Yalnızca bu.", to: "ks", etki: { temkin: 1 } },
{ t: "“İkisinde de,” dersin.", to: "ks", etki: { umut: 1 } },
{ t: "“Hiçbirinde,” dersin. Ve bu kez bir hüzünle değil.", to: "ks", etki: { sorumluluk: 1 } },
{ t: "Bir şey söylemez, Yara'nın elini tutarsın.", to: "ks", etki: { sorumluluk: 1 } }
]},

ks: { yonlendir: [
{ if: function(d){ return d.hamza_kayip; }, to: "son_deniz" },
{ if: function(d){ return d.kol === "deniz"; }, to: "son_kiyi" },
{ if: function(d){ return d.kol === "ayri"; }, to: "son_ayri" },
{ if: function(d){ return d.kol === "kalis" && d.kanada; }, to: "son_kagit" },
{ to: "son_kalan" }
]},

/* ---------- SONLAR ---------- */
son_kiyi: { son: true, baslik: "Karşı Kıyı", metin: [
"Geçtiniz. Hepiniz. Kırk beş kişi, bir lastik bot, rüzgârlı bir gece. Bir Yunan sahil güvenlik gemisi, doğru zamanda, doğru yerde. Kırk beş kişi.",
"Bu bir erdem miydi? Bir karar mıydı? Yoksa bir rüzgârın, bir motorun, bir projektörün şansı mıydı?",
"Aynı gece, aynı denizde, bir başka bot. O botun yolcuları da bir karar verdi; aynı karar. Rüzgâr aynıydı, deniz aynıydı. O botta bir Yunan gemisi doğru zamanda gelmedi. O botun hikâyesini bir gazete yazdı; seninkini kimse yazmadı.",
"Hamburg'da bir eczanede çalışıyorsun. Diploman tanındı; altı yıl sonra. Yara mühendislik okuyor. Omar futbol oynuyor; Almanca bağırıyor. Hiba Arapça öğretmeni; bir okulda, Suriyeli çocuklara. Kendi dillerini unutmasınlar diye.",
"Bir babanın en büyük kararı, çoğu zaman, doğru ya da yanlış olarak değil, şanslı ya da şanssız olarak hatırlanır. Senin kararın şanslı çıktı. Ve sen her gün, bir yerde, o şansın bir başkasının talihsizliğinden ayrı olmadığını biliyorsun.",
"Bazı geceler rüyanda bir motor öksürüyor. Uyanıp çocuklarının odasına bakıyorsun. Uyuyorlar. Bir kıyıda. Hangisinde olduğu, bazen, hiç fark etmiyor."
]},

son_deniz: { son: true, baslik: "Deniz", metin: [
"Kırk dört kişi kurtuldu. Biri değil. Hamza. On dokuz yaşında, Halep'ten, yüzme takımından. Sırt çantasında bir mühendislik kitabı. Kendi yeleğini Omar'a giydirdi; çünkü Omar'ın yeleği sahteydi. Çünkü sen, Basmane'de, bir dükkânda, ucuz olanı almıştın.",
"Bu cümleyi her gün kendine söylüyorsun. Bazen başka türlü söylüyorsun: Mesut onları satmasaydı. Cemil o gece göndermeseydi. Rüzgâr dört-beş olmasaydı. Avrupa bir yol açsaydı. Bir savaş olmasaydı. Her cümle doğru. Hiçbiri yükü hafifletmiyor.",
"Omar on yaşında. Hamza'yı hatırlamıyor; üç yaşındaydı. Ama turuncu yelek hâlâ dolabında. Bir gün sordu: “Bu kimin?” Anlattın. Omar uzun süre yeleğe baktı. Sonra: “O zaman ben onun yerine de yaşamalıyım, değil mi?” Bir çocuğun omzuna bir yük koydun mu? Yoksa bir anlam mı?",
"Yara mühendislik okuyor. Bir gün sana dedi ki: “Hamza Abi'nin kitabını ben bitireceğim.”",
"Hamza'nın annesine her yıl bir mesaj atıyorsun. Ağustosun on dokuzunda. Bazen cevap veriyor; bazen vermiyor. Bir yıl bir fotoğraf gönderdi: Hamza, on yaşında, bir havuzun kenarında, madalyasıyla.",
"Ahlaki şans diye bir şey var, demişti bir zamanlar Halep'teki bir felsefe hocası; eczane müşterisi, emekli. Aynı kararı veren iki insan; birinin önüne bir talih çıkar, öbürünün bir felaket. Hangisi daha suçlu? Senin önüne bir felaket çıktı; ama o felaketin bedelini bir başkası ödedi. Bu, bir şansın en ağır hâli."
]},

son_kalan: { son: true, baslik: "Kalan", metin: [
"Kaldınız. Türkiye'de, İzmir'de. Bir bot düşüncesi bir gece, bir rüzgâr raporuyla ya da bir kırmızı tişörtle bitti.",
P(function(d){ return d.kol === "bekle"; }, "Bekleme kararın, bir dolandırıcı ve bir rüzgâr sayesinde, seni bir denizden uzak tuttu. O haftanın sonunda o kumsaldaki fotoğraf geldi. Sen o hafta bir otel odasında, beş yüz doları çalınmış, bir pişmanlıkla oturuyordun. Pişmanlığın, sonra, bir şükre dönüştü; ve şükür, bir utanca. Başkasının çocuğunun ölümüne şükretmek."),
"Yara Bornova'da büyüdü. Türkçe konuşuyor; İzmir şivesiyle. Bir Türk üniversitesinde mühendislik okuyor. Kimlik kartında hâlâ “geçici koruma” yazıyor; on yıl sonra. Geçici. Bir kelime ki bir hayatı tarif ediyor.",
"Sen bir eczanede çalışıyorsun; Nilgün Hanım'ın eczanesinde. O emekli oldu; dükkânı başkasına devretti. Yeni eczacı da seni tuttu. Diplomanın denkliği hâlâ yok. On yıldır eczacı yardımcısısın; ama Karşıyaka'daki yaşlılar reçetelerini sana gösteriyor. “Ahmed Bey bilir,” diyorlar.",
"Bir yere ait olmak bir kâğıtla mı olur? Bir dille mi? Bir mahallenin seni adınla çağırmasıyla mı?",
"Bazı akşamlar Kordon'da yürüyorsun. Karşıda, puslu, Karşıyaka. Bir körfez. Bir deniz değil; bir körfez. Öbür kıyısı görünen bir su. Bunu seviyorsun; nedenini Yara'ya anlatamıyorsun.",
"Kalan, gidenler kadar cesur değil midir? Kalan da bir denizi geçer; yalnızca o deniz zamandır."
]},

son_kagit: { son: true, baslik: "Kâğıt", metin: [
"Yüzde bir. Size düştü. Bir mektup, bir uçak, bir şehir: Toronto.",
"Bir bota binmediniz. Bir denizi geçmediniz. Bir mülakat, bir dosya, bir ülkenin kararıyla bir okyanusun öbür yanına uçtunuz. Hiçbir rüzgâr, hiçbir motor, hiçbir yelek. Yalnızca kâğıt.",
"Ve kâğıt, bir deniz kadar keyfi. Yüzde bir. Sizinle aynı sırada bekleyen yüzlerce aile hâlâ bekliyor; bazıları on yıldır. Neden siz? Bir memurun bir dosyayı önce açması. Bir kotanın o ay boş olması. Bir eczacının “risk altındaki meslek grubu” sayılması.",
"Toronto'da bir eczanede depo görevlisi olarak başladın; beş yıl sonra eczacı lisansını aldın. Yara bir Kanada üniversitesinde. Omar hokey oynuyor. Hiba bir dernekte; yeni gelen Suriyeli ailelere yardım ediyor, kendisine yardım eden insanlar gibi.",
"Bir gün bir aileye bir formu doldurmalarına yardım ederken bir şey fark ediyorsun: formun dokuzuncu sayfasında bir kutucuk. “Daha önce düzensiz yollarla bir sınırı geçmeye çalıştınız mı?” Siz hiç denemediniz. Bu kutucuk boş kaldı. Ve belki, bu boş kutucuk, yüzde birin bir parçasıydı.",
"Basmane'deki otel odasındakileri düşünüyorsun. Hamza, Farid, Zahra, Ümmü Halil. Onlar bir bota bindi; siz bir kâğıda. Hepiniz bir karşı kıyıya vardınız; ama hiçbiriniz aynı denizi geçmediniz."
]},

son_ayri: { son: true, baslik: "İki Kıyı", metin: [
"Bir aile, bir gece, bir minibüsün arka camında ikiye bölündü. Bir yarısı bir denizi geçti; öbür yarısı bir kaldırımda kaldı.",
P(function(d){ return d.birlesim; }, "Aile birleşimi iki yıl sürdü. İki yıl sonra bir uçakla, bir vizeyle, bir koltukta Hamburg'a vardın. Havalimanında Omar seni tanımadı; beş yaşındaydı. Hiba'nın arkasına saklandı. Bir hafta sonra “Baba” dedi; Arapça değil, Almanca. “Papa.”"),
P(function(d){ return d.bota_bindi; }, "Bota bindin. Midilli'de üç yıl. Bir kampta, bir çadırda, bir tel örgünün arkasında. Ailen her yaz bir hafta geldi; turist olarak, feribotla. Bir aile, bir adanın iki yanında; bir yanı kamp, öbür yanı otel. Dördüncü yıl bir mahkeme kararı. Hamburg."),
P(function(d){ return d.geri_cagir || d.yara_ne; }, "Hiba gelmedi; sen gitmedin. Yıllar geçti. Hamburg ve İzmir. Bir ekran, her pazar. Yara ve Omar her yaz İzmir'e geliyor; bir ay. Bir babayı bir ayda tanımaya çalışıyorlar; bir baba, çocuklarını bir ayda yeniden öğreniyor."),
"Bir babanın en zor kararı, ailesini bir denize, kendini bir kıyıya bırakmaktı. Bunun bir fedakârlık mı, bir korkaklık mı olduğunu hâlâ bilmiyorsun. Hiba da bilmiyor. Bir gün sana dedi ki: “Sen bizi bir denize gönderdin. Ama bizi bir denize gönderdiğin için bugün buradayız. İkisini birden düşünmeyi öğrenmem yıllar sürdü.”",
"Omar bir gün sordu: “Baba, sen o gece neden gelmedin?” Bir açıklama yaptın; para, sıra, bot. Omar anladı; on yaşında, anladı. Ama bir şey daha söyledi: “Ben seni o minibüsün camından hatırlamıyorum. Uyuyordum. Bir babayı uyurken bırakmak, ona veda etmemek mi demek?”",
"Bir kıyı, iki kıyı. Bir aile, bir deniz. Hangi kıyıda olduğunun önemi yok artık; ikisinde de bir eksiğin var."
]}

},

ayna: function(d){
  var out = [];
  var u = d.umut, s = d.sorumluluk, t = d.temkin;
  if(u >= s && u >= t) out.push("Bu hikâyede en çok umuda yaslandın: bir karşı kıyıya, bir kardeşin sesine, bir yeni hayata. Umut bir denizi geçirir; ama denizin kendisi umudu bilmez.");
  else if(s >= t) out.push("Bu hikâyede en çok sorumluluğa yaslandın: ailene, Ümmü Halil'e, bir botun kırk beş yolcusuna. Bir babanın sorumluluğu, kendi çocuklarıyla bitmiyor; bir otel odasının bütün yaşlılarına uzanıyor.");
  else out.push("Bu hikâyede en çok temkine yaslandın: hava raporlarına, sağlam yeleklere, kâğıtlara, beklemeye. Temkin bir babanın kalkanıdır. Ama bazen temkin bile bir şansa dönüşür; ve şans kimseye ait değildir.");
  if(d.yelek === "sahte") out.push("Basmane'de ucuz yelekleri aldın. Bu bir hesaptı; bir denizin içinde, bir başkasının hayatına mal olan bir hesap.");
  if(d.yelek === "iyi") out.push("İyi yelekleri aldın. Belki bir hayatı kurtardın; belki hiçbir şey değiştirmedi. Bunu asla bilmeyeceksin.");
  if(d.umm_para) out.push("Bir yabancıya, kendi ailenin parasından bin dolar verdin. Bir kadın bir torunu buldu.");
  if(d.dumen) out.push("Bir eczacı olarak bir botun dümenine geçtin; kırk beş insanın.");
  return out;
},

dipnot: [
{ ad: "Ahlaki şans", t: "Bernard Williams ve Thomas Nagel'in tartıştığı bu kavram, bir eylemin ahlaki değerlendirmesinin kişinin kontrolü dışındaki sonuçlara bağlı olmasını sorgular. Aynı kararı veren iki insandan birinin önüne bir felaket, öbürünün önüne bir kurtuluş çıkar. Hukuk ve toplum sonuca bakar; ama karar veren, sonucu bilemeden karar vermiştir." },
{ ad: "Aidiyet ve sürgün", t: "Edward Said “Sürgün Üzerine Düşünceler”de sürgünü “bir insanla doğduğu yer arasındaki iyileşmez yarık” olarak tanımlar. Sürgün yalnızca bir yeri kaybetmek değil, bir dili, bir mahalleyi, çocukların ana dilini kaybetmektir. Ama Said'e göre sürgün aynı zamanda “birden fazla kültürü, birden fazla yeri” görebilmenin de kaynağıdır." },
{ ad: "Umut ve risk", t: "2015'te bir milyondan fazla insan Ege'yi geçerek Avrupa'ya ulaştı; binlercesi yolda hayatını kaybetti. Eylül 2015'te Bodrum'da kıyıya vuran üç yaşındaki Alan Kurdi'nin fotoğrafı, dünyanın bu krizi görmesinde bir dönüm noktası oldu. Mart 2016'da Türkiye ve Avrupa Birliği arasında imzalanan anlaşma, Ege rotasını büyük ölçüde kapattı." },
{ ad: "Yardım ödevi", t: "Peter Singer'ın “boğulan çocuk” örneği: yolda giderken bir gölde boğulmak üzere olan bir çocuk görseniz ve onu kurtarmak yalnızca ayakkabılarınızı ıslatmaya mal olsa, kurtarmanız gerekir. Singer'a göre uzaktaki yabancılara karşı da aynı ödeve sahibiz. Ama bu ödev, kendi çocuklarımıza karşı olan ödevle çatıştığında ne olur? Ahmed'in otel odasındaki gecesi bu sorunun ta kendisiydi." }
]
});
})();
