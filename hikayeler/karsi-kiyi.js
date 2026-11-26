(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "karsi-kiyi",
baslik: "Karşı Kıyı",
dunya: "Gerçek dünya",
kategoriler: ["Toplum ve Adalet", "Aile ve Hafıza"],
giris: "Ağustos 2015, İzmir. Basmane'deki dükkânların vitrinlerinde can yelekleri asılı duruyor. Sen Halep'ten gelmiş bir eczacısın, yanında karın, yedi yaşında bir kızın, üç yaşında bir oğlun ve ceketinin astarına dikilmiş dört bin dolar var. Karşı kıyı, yani Midilli, yirmi kilometre ötede. Elinde bir lastik bot, bir hava raporu ve bir kaçakçının telefonu var. Bu, doğru kararın ancak sonradan ve biraz da şansla belli olduğu bir yolculuğun, bir de bir babanın hikâyesi.",
kavramlar: ["Ahlaki şans", "Aidiyet ve sürgün", "Umut ve risk", "Yardım ödevi"],
ozet: "2015 yazı, İzmir. Halep'ten gelmiş bir baba, ailesiyle Yunanistan'a geçmenin yolunu arıyor. Bir can yeleği, bir hava raporu, bir kaçakçı ve geri alınamayacak kararlar.",
baslangic: "a1",
durum: { umut: 0, sorumluluk: 0, temkin: 0 },

sahneler: {

a1: { saat: "Ağustos 2015", baslik: "Basmane", metin: [
"Ağustos, öğle vakti, İzmir'de Basmane meydanındasın. Meydanda, otel kapılarında, cami avlusunda Arapça, Farsça, Kürtçe konuşan insanlar var ve herkes telefonuna bakıyor. Bir adam tek prizi üç telefonla paylaşıyor, sırayla şarj ediyorlar.",
"Dükkânların vitrinlerinde turuncu, sarı, kırmızı can yelekleri asılı. Çocuk boyları da var, pembe, üstlerinde çizgi film karakterleri.",
"Adın Ahmed, otuz sekiz yaşındasın. Halep'te Salahaddin mahallesinde köşe başında bir eczanen vardı. Üç yıl önce bir varil bombası düştü, önce eczane gitti, sonra ev.",
"Yanında karın Hiba var. Arapça öğretmeni, yüzme bilmiyor. Kızın Yara yedi yaşında, Gaziantep'te bir yıl okula gittiği için Türkçe sayıyor, bazen uykusunda bile. Oğlun Omar üç yaşında ve pantolonunun paçasını bir türlü bırakmıyor.",
"Ceketinin astarında Hiba'nın diktiği gizli bir cep var, içinde dört bin dolar. Evin parası, eczane dolaplarının parası, Hiba'nın bilezikleri.",
"Kardeşin Samir iki yıl önce geçmiş, şimdi Hamburg'da. “Çabuk gel,” diyor, “kapılar kapanıyor.”",
"Telefonun titriyor, bilinmeyen bir numaradan mesaj gelmiş: “Cemil. Otel Yıldız, lobi. Saat beş.”"
], secenekler: [
{ t: "Önce can yeleklerine bakarsın, ne olursa olsun onlar lazım.", to: "a2", etki: { temkin: 1 } },
{ t: "Önce bir nefes alsınlar diye Hiba ve çocuklarla parkta bir saat oturursun.", to: "a2", etki: { sorumluluk: 1, park: true } },
{ t: "Samir'i arayıp ne yapman gerektiğini bir kez daha sorarsın.", to: "a2", etki: { umut: 1, samir_once: true } },
{ t: "Meydandaki bir aileye hangi kaçakçıyla gittiklerini sorarsın.", to: "a2", etki: { temkin: 1, soruşturdu: true } }
]},

a2: { saat: "Ağustos 2015", baslik: "Yelek", metin: [
P(S("a1A"), "Önce yeleklere gittiniz. Hiba çocukları gölgeden kaldırıp peşinden geldi, Omar yürümek istemeyince onu kucağına aldın."),
P(S("a1B"), "Parkta oturdunuz. Omar uyudu, Yara güvercinlere simit attı, Hiba başını omzuna koydu. Halep'ten beri hiçbir şey yapmadan geçirdiğiniz ilk öğleden sonraydı bu."),
P(S("a1C"), "Samir çok telaşlıydı. “Bu hafta gel, Macaristan tel çekiyor,” dedi. Hiba yanında duydu ve parmaklarını eteğinin kumaşında gezdirdi."),
P(S("a1D"), "Bir baba sana üç isim verdi. İkisinin botu geçen hafta batmış, üçüncüsü Cemil'miş. “Botları yeni,” dedi, “ama hava kötü olsa da gönderir.”"),
"Meydanın köşesinde “Mesut Spor” diye bir dükkân var, içi tavana kadar yelek dolu. Mesut ellilerinde, terli bir adam, bir eli hep telefonunda. Birkaç Arapça kelime biliyor: “Gel, gel. İyi. Ucuz.”",
"İki çeşit yelek var. Yirmi beş liralıklar ince ve parlak, içinde ne olduğu belli değil. Altmış liralıklar kalın, etiketli, üstlerinde sertifika numarası var.",
"Dört yelek ucuzlardan yüz lira, iyilerden iki yüz kırk lira tutuyor. Astardaki her doların gideceği yer belli.",
"Mesut tereddüt ettiğini görüyor. Eğilip Yara'ya bakarak alçak sesle Türkçe söylüyor: “Bunlar batar, içi sünger. Sen şunları al.”",
"Yara ucuzlardan, üstünde pembe flamingolar olan bir çocuk yeleğine bakıyor."
], secenekler: [
{ t: "Ne pahasına olursa olsun dördü için de iyilerinden alırsın.", to: "a3", etki: { temkin: 2, yelek: "iyi" } },
{ t: "Mesut'a “Batacağını biliyorsan neden satıyorsun?” diye sorarsın.", to: "x_mesut", etki: { sorumluluk: 1 } },
{ t: "Ucuzları alırsın, para teknede lazım olacak.", to: "a3", etki: { umut: 1, yelek: "sahte" } },
{ t: "Yara'nın yanına çömelip hangisini istediğini sorarsın.", to: "x_yara", etki: { sorumluluk: 1 } }
]},

x_mesut: { saat: "Ağustos 2015", baslik: "Mesut", metin: [
"Mesut kapıyı kapatıp levhayı “Kapalı” tarafına çeviriyor.",
"“Biliyorum,” diyor. Türkçeyi Gaziantep'te öğrendin, anlıyorsun. “Otuz yıl eşofman, forma sattım. Üç yıl önce biri yelek sordu, sonra yüz kişi sordu.”",
"“Toptancı iyi yelek bulamıyor, nereden geldiğini bilmediğim sahteler geliyor. Ben satmazsam karşıdaki dükkân satıyor. Satmazsam kızımın okul parası çıkmıyor.”",
"Duvarda bir fotoğraf asılı, mezuniyet cüppeli bir kız kepini havaya atıyor.",
"“Her gece haberleri izliyorum. Bir bot batınca kaç çocuk ölmüş, kimin yeleği varmış, benim yeleklerim miymiş? Bakmıyorum.”",
"Raftan iyi bir yelek alıyor, bebek boyu, tam Omar'ın boyu. “Bu benden,” diyor, “para istemem.”"
], secenekler: [
{ t: "Yeleği alır, öbür üçü için de iyilerinden satın alırsın.", to: "a3", etki: { temkin: 2, yelek: "iyi", mesut_hediye: true } },
{ t: "Yeleği alırsın, öbürleri için ucuzlardan alırsın.", to: "a3", etki: { umut: 1, yelek: "karisik", mesut_hediye: true } },
{ t: "Yeleği geri verip “Bunu başka bir çocuğa ver,” dersin.", to: "a3", etki: { sorumluluk: 2, yelek: "iyi", hediye_ret: true } },
{ t: "Mesut'a “Sahteleri satmayı bırak,” dersin.", to: "a3", etki: { sorumluluk: 1, yelek: "iyi", mesut_bırak: true } }
]},

x_yara: { saat: "Ağustos 2015", baslik: "Flamingo", metin: [
"Yara'nın yanına çömeliyorsun. Pembe flamingolu yeleği iki eliyle tutuyor.",
"“Baba, bu,” diyor Arapça, ama “flamingo”yu Türkçe söylüyor, Gaziantep'te öğrenmiş. “Çok güzel.”",
"Yeleğin etiketi yok. Parmağınla bastırınca çöküyor, içi sünger.",
"“Yara, bu yelek ne işe yarıyor biliyor musun?”",
"“Denizde yüzmeye. Öğretmen anlatmıştı, yazın denize gidilir, yelek giyilir.”",
"“Deniz büyük mü baba? Öbür tarafını görebilir miyiz?”",
"Mesut tezgâhın arkasından bakıyor ama bir şey demiyor. Telefonu çalıyor, açmıyor."
], secenekler: [
{ t: "Flamingoluyu alırsın ama altına iyi bir yelek giydireceksin.", to: "a3", etki: { sorumluluk: 1, temkin: 1, yelek: "iyi", flamingo: true } },
{ t: "Yara'ya bu yeleğin batacağını söylersin, o da turuncuyu seçer.", to: "a3", etki: { temkin: 1, yelek: "iyi", yara_bildi: true } },
{ t: "Yalnızca flamingolu yeleği alırsın.", to: "a3", etki: { umut: 1, yelek: "sahte", flamingo: true } },
{ t: "“Deniz büyük ama öbür tarafını göreceğiz,” deyip iyi yelekleri alırsın.", to: "a3", etki: { umut: 1, yelek: "iyi" } }
]},

a3: { saat: "Ağustos 2015, 17.00", baslik: "Cemil", metin: [
P(function(d){ return d.yelek === "sahte"; }, "Dört yelek yüz lira tuttu. Mesut yelekleri torbaya koyarken gözlerini senden kaçırdı."),
P(function(d){ return d.yelek === "iyi"; }, "İyi yelekler kalın ve ağırdı, torbayı taşırken omzun acıdı. Astardan iki yüzlük eksildi."),
P(function(d){ return d.yelek === "karisik"; }, "Omar'ınki iyi, Mesut'un hediyesiydi, öbürleri ucuzdu. Aynı torbada iki çeşit yelek taşıyordun."),
"Otel Yıldız arka sokakta. Lobide üç plastik koltuk ve sesi kapalı bir Türk dizisi oynayan bir televizyon var. Koltuklardan birinde Cemil oturuyor, kırklarında, gözlüklü, gömleği ütülü, sigorta acentesine benziyor.",
"“Kişi başı bin iki yüz dolar, çocuklar yarım, bebek bedava. Toplam üç bin altı yüz. Bot yeni, kırk kişilik. Midilli yirmi kilometre, hava iyiyse iki saatte varırsınız.”",
"Hesaplıyorsun. Yetiyor ama Almanya'ya vardığınızda elinizde hiçbir şey kalmayacak.",
"“Hava nasıl?”",
"Cemil telefonuna bakıyor. “Bu gece rüzgâr dört beş. Bir hafta sonra sakin ama bir hafta sonra fiyat bin beş yüz olur. Almanya ne yapar, onu da kimse bilmez.”",
"“Ben taksi şoförüyüm kardeşim. Bindiririm, o kadar. Denizi ben yapmadım.”"
], secenekler: [
{ t: "Bu gece için yer ayırtıp karar vermek için bir saat istersin.", to: "a4", etki: { umut: 1, bu_gece: true } },
{ t: "Cemil'e geçen hafta batan botları sorarsın.", to: "a4", etki: { temkin: 1, sorgu: true } },
{ t: "Çocuklar için daha az demek üzere pazarlık edersin.", to: "a4", etki: { sorumluluk: 1, pazarlik: true } },
{ t: "Hiba'nın yüzüne bakarsın.", to: "a4", etki: { sorumluluk: 1, hibaya_bakti: true } }
]},

a4: { saat: "Ağustos 2015, akşam", baslik: "Oda", metin: [
P(S("a3A"), "“Bir saat,” dedin. Cemil saatine bakmadan “Yarım,” dedi."),
P(S("a3B"), "Cemil gözlüğünü düzeltti. “Onlar başkasının botlarıydı, çürüktü. Benimkiler sağlam,” dedi, sonra biraz durdu. “Ama deniz denizdir.”"),
P(S("a3C"), "Cemil güldü. “Halep'te eczacı mıydın? Pazarlığı bilirsin,” dedi ve yüz dolar indirdi. Umurunda olmadığı belliydi."),
P(S("a3D"), "Hiba'nın yüzünden bir şey okunmuyordu. Sonra Arapça, alçak sesle “Ben yüzme bilmiyorum Ahmed,” dedi. On iki yıllık evliliğinizde bunun bir gün önemli olacağı hiç aklına gelmemişti."),
"Dördüncü katta on iki kişinin kaldığı bir oda. Yer yatakları, bavullar, şarj kabloları var, prizin önünde sıra bekleniyor.",
"Bir köşede Afgan bir aile var, Farid ve sekiz aylık hamile karısı Zahra. Pencerenin yanında Hamza oturuyor, on dokuz yaşında, Halep'ten, yalnız, çantasında bir mühendislik kitabı taşıyor. Kapının yanında da Humuslu yaşlı bir kadın, Ümmü Halil yatıyor.",
"Gece yarısı Ümmü Halil yanına geliyor. “Oğlum, param yok. Oğullarım öldü. İsveç'te bir torunum var, doktor olmuş. Bana bin dolar yeter. Sende var mı?”",
"Var, astarda duruyor. Almanya'daki ilk ayın kirası, Yara'nın ayakkabısı o para.",
"Odadakiler uyuyor gibi yapıyor ama Hamza'nın gözleri açık."
], secenekler: [
{ t: "Ümmü Halil'e bin doları verirsin.", to: "x_umm", etki: { sorumluluk: 2, umm_para: true } },
{ t: "“Yok teyze,” dersin.", to: "a5", etki: { temkin: 1, umm_ret: true } },
{ t: "Odadakileri uyandırıp Ümmü Halil için birlikte para toplamayı önerirsin.", to: "x_ortak", etki: { sorumluluk: 1, umut: 1 } },
{ t: "Samir'i arayıp Ümmü Halil için ondan borç istersin.", to: "a5", etki: { sorumluluk: 1, samir_borc: true } }
]},

x_umm: { saat: "Gece", baslik: "Ümmü Halil", metin: [
"Astarın dikişini söküp on tane yüzlük çıkarıyorsun. Hiba sert bir yüzle seni izliyor.",
"Ümmü Halil parayı saymıyor bile, avucunda tutup alnına götürüyor.",
"“Allah razı olsun,” diyor. Sonra gecenin ortasında, yavaş yavaş anlatmaya başlıyor.",
"Kocası Humus'ta halı tüccarıymış, üç oğlu varmış, biri halıcı, biri öğretmen, biri asker. Önce asker olan gitmiş, sonra öğretmen olan, bir okulda. Sonra halıcı, bir kontrol noktasında.",
"“Hepsini ben gömdüm. İsveç'teki torunum büyük oğlumun oğlu, bebekken gitti. Onu bir kere görmek istiyorum.”",
"Hiba gidip yaşlı kadının yanına oturuyor.",
"Ümmü Halil sana küçük bir bez kese uzatıyor, içinde bir avuç toprak var. “Humus'tan, oğullarımın mezarından. Sen al. Belki senin de bir yere gömmen gereken bir şey olur.”"
], secenekler: [
{ t: "Keseyi alırsın.", to: "a5", etki: { sorumluluk: 1, kese: true } },
{ t: "“Bunu torununuza götürün,” dersin.", to: "a5", etki: { sorumluluk: 1 } },
{ t: "Bin dolar için Hiba'dan özür dilersin.", to: "a5", etki: { sorumluluk: 1, hibaya_ozur: true } },
{ t: "Ümmü Halil'e bu gece sizinle aynı tekneye binmeyi önerirsin.", to: "a5", etki: { umut: 1, birlikte: true } }
]},

x_ortak: { saat: "Gece", baslik: "Ortak Kese", metin: [
"Işığı açıyorsun, on iki kişi gözlerini kısıyor. Arapça, kırık bir Türkçe ve Hamza'nın İngilizcesiyle derdini anlatıyorsun.",
"Hamza çantasından bir zarf çıkarıp elli dolar veriyor. “Bu kadar var, gerisi tekne için.”",
"Farid Zahra'yla Farsça bir şeyler konuşup yirmi dolar uzatıyor.",
"İki çocuklu Kürt bir çift var. Adam yere bakarak “Bizim de yok,” diyor. Olmadığını herkes zaten biliyor.",
"Bir saat sonra bir şapkanın içinde iki yüz otuz dolar birikiyor.",
"Ümmü Halil şapkaya bakıyor, sonra herkesin elini tek tek öpüyor. Kürt adam elini çekmeye çalışıyor ama kadın bırakmıyor.",
"Yedi yüz yetmiş dolar eksik."
], secenekler: [
{ t: "Kalan yedi yüz yetmişi sen tamamlarsın.", to: "a5", etki: { sorumluluk: 2, umm_para: true } },
{ t: "İki yüz otuzla kalır, bu odanın verebileceği bu kadar.", to: "a5", etki: { temkin: 1, umm_kismi: true } },
{ t: "Cemil'i arayıp Ümmü Halil için indirim istersin.", to: "a5", etki: { sorumluluk: 1, cemil_ara: true } },
{ t: "Hamza'ya teşekkür edersin.", to: "a5", etki: { umut: 1, hamza_yakin: true } }
]},

a5: { saat: "Ağustos 2015, gece", baslik: "Samir", metin: [
P(S("x_ummA"), "Keseyi alıp astarın içine, kalan paranın yanına koydun."),
P(S("x_ummB"), "Ümmü Halil keseyi göğsüne bastırdı. “Haklısın, onu da ben gömeyim,” dedi."),
P(S("x_ummC"), "Hiba elini kaldırdı. “Özür dileme,” dedi, “ama bu gece hesabı yapan sen olma.” Ne demek istediğini ancak sonra anlayacaktın."),
P(S("x_ummD"), "Ümmü Halil uzun uzun yüzüne baktı. “Senin teknen benim teknem olsun,” dedi. Hiba başını çevirdi."),
P(S("x_ortakA"), "Kalanı sen tamamladın, Ümmü Halil parayı iki kere saydı. Odadan biri bir şey mırıldandı, teşekkür müydü kıskançlık mı, anlayamadın."),
P(S("x_ortakB"), "İki yüz otuz dolarla kaldı. Işığı kapattın, karanlıkta şapkanın hışırtısı duyuldu."),
P(S("x_ortakC"), "Cemil güldü. “Deniz indirim yapar mı kardeşim?” deyip kapattı. Beş dakika sonra bir mesaj geldi: “Yaşlıya üç yüz eksik. Kimseye söyleme.”"),
P(S("x_ortakD"), "Hamza kızardı. “Babam olsa o da verirdi,” dedi. Babasının nerede olduğunu sormadın."),
P(function(d){ return d.samir_borc; }, "Samir dinledi. “Kardeşim, ben de kirada oturuyorum,” dedi, “ama tamam, yarın.” Ümmü Halil Samir'e dua etti, adını iki kere sordu ve ikisinde de yanlış söyledi."),
P(function(d){ return d.umm_ret; }, "“Allah yardımcın olsun,” dedi Ümmü Halil ve kapının yanındaki yerine döndü. Gece boyunca fısıltıyla dua ettiğini duydun. Hiba bir şey demeden elini bileğine koydu."),
"Gece ikide Samir'den bir sesli mesaj geliyor, arkada Almanca haberler açık.",
"“Ahmed, Macaristan tel örgü çekiyor, Avusturya da düşünüyor. Almanya şimdilik açık. Bu gece gel, ne olursa olsun bu gece gel.”",
"Hiba da dinliyor, Omar kucağında uyuyor.",
"“Bu gece rüzgâr var,” diyor Hiba. Korktuğunda daha da sakin konuşur. “Ben denizden anlamam ama rüzgârı bilirim. Halep'te rüzgârlı gecelerde çatılardaki çanak antenler uçardı.”",
"“Bir hafta beklersek...”",
"“Almanya kapanabilir. Otel parası var, Cemil de bin beş yüz ister.” Biraz duruyor. “Sen eczacıydın, doz hesaplardın. Hesapla bakalım.”"
], secenekler: [
{ t: "“Bu hesaplanamaz Hiba,” dersin.", to: "a6", etki: { temkin: 1, hesaplanamaz: true } },
{ t: "Parayı, günleri, rüzgârı, Almanya'yı yüksek sesle hesaplarsın.", to: "a6", etki: { temkin: 1, umut: 1, hesapladi: true } },
{ t: "Hiba'ya “Sen ne istiyorsun?” diye sorarsın.", to: "a6", etki: { sorumluluk: 1, hibaya_sordu: true } },
{ t: "Uyuyan Omar'a bakarsın.", to: "a6", etki: { sorumluluk: 1, omara_bakti: true } }
]},

a6: { saat: "Ağustos 2015, 03.00", baslik: "Hava Raporu", metin: [
P(S("a5A"), "Hiba gözlerini kapattı. “O zaman sen seç,” dedi, “ben seçersem ömür boyu sana yüklerim.”"),
P(S("a5B"), "Üç bin dolar, bir haftalık otel iki yüz, sonra bin beş yüz. Rüzgâr dört beş, sonra iki. Rakamlar odanın havasında asılı kaldı ve hiçbirinde Omar'ın kilosu yoktu."),
P(S("a5C"), "Hiba düşündü. “Yara'nın bir okula gitmesini istiyorum,” dedi, “on yıl aynı okula. Bir yerde kalmak istiyorum, neresi olduğu artık umurumda değil.”"),
P(S("a5D"), "Omar ağzı açık, bir eli Hiba'nın göğsünde uyuyordu. Halep'i hatırlamıyor, Gaziantep'teki bir bahçeyi ve bir kediyi hatırlıyor."),
"Saat üçte hava raporuna bakıyorsun. Ege'de gece yarısından sonra kuzeyden dört beş kuvvetinde rüzgâr esecek, sabaha doğru üçe inecek. Bir hafta sonra bir iki kuvvetinde, deniz düz olacak.",
"Cemil'den mesaj geliyor: “Bu gece saat beşte minibüs otelin önünde. Gelmezseniz sıranız gider, kapora iade edilmez.”",
"Hamza yanına geliyor. “Ben bu gece gidiyorum. Siz de gelirseniz yanınızdayım. Hiba Abla yüzme bilmiyorsa ben biliyorum, Halep'te yüzme takımındaydım.” On dokuz yaşında birinin gülümsemesiyle gülümsüyor.",
"Kimsenin dile getirmediği bir yol daha var, Türkiye'de kalmak. Geçici koruma, bir kimlik, bir iş, bir okul. Gaziantep'te bir yıl öyle yaşadınız. Bedeli de belli, hep misafir kalmak.",
"Bir de en karanlık yol var. Hiba ve çocuklar bu gece Hamza'yla gider, sen kalıp para biriktirir, sonra peşlerinden gelirsin.",
"Saat üçü beş geçiyor. Omar yüzü yeleğin turuncusuna dönük uyuyor."
], secenekler: [
{ t: "Bu gece hep birlikte gidersiniz. Rüzgâr dört beş ama bir hafta sonra bu kaçakçı, bu para, bu kıyı olmayabilir.", to: "s1", etki: { umut: 2, kol: "deniz" } },
{ t: "Deniz sakinleşsin diye bir hafta beklersiniz, ama paranın, Cemil'in ve sınırın bir hafta sonra ne olacağını bilmiyorsun.", to: "w1", etki: { temkin: 2, kol: "bekle" } },
{ t: "Gitmezsiniz, Türkiye'de kalıp BM'ye yeniden yerleşim başvurusu yaparsınız. İhtimal yüzde bir ama kimse boğulmaz.", to: "r1", etki: { temkin: 1, sorumluluk: 1, kol: "kalis" } },
{ t: "Hiba ve çocuklar bu gece Hamza'yla gider, sen kalıp para biriktirir, sonra gelirsin. Aileni bir denizle bir kaldırım arasında bölersin.", to: "p1", etki: { sorumluluk: 1, umut: 1, kol: "ayri" } }
]},

/* ---------- DENİZ KOLU ---------- */
s1: { saat: "Ağustos 2015, 05.00", baslik: "Kıyı", metin: [
"Karanlıkta otuz kişiyle bir minibüsün içindesiniz. Önce Çeşme yolu, sonra bir köy yolu, sonra bir patika. “İnin, hızlı olun, ses çıkarmayın.”",
"Zeytinliklerin, kayaların arasından bir kumsala iniyorsunuz. Deniz görünmüyor ama sesi geliyor. Karşıda birkaç ışık var, Midilli mi, bir gemi mi, bilemiyorsun.",
"Cemil'in adamları botu şişiriyor. Bot yeni ama kırk kişilik dedikleri bot ancak yirmi beş kişi alır gibi duruyor, kumsalda ise kırk beş kişi var.",
"Herkes yeleğini giyiyor. Yelek kulaklarına kadar çıktığı için Omar ağlıyor. Yara hiç ses çıkarmıyor, elini tutuyor, avucu ter içinde.",
P(function(d){ return d.flamingo; }, "Yara'nın üstünde pembe flamingolu yelek var, altında da sen ne aldıysan o."),
"Adam motoru takıyor, karanlıkta yüzlere bakıyor ve sana geliyor.",
"“Sen sakin görünüyorsun, motoru sen kullanacaksın. Şu kol gaz. Işıklara doğru dümdüz git. Sahil güvenlik gelirse dur. Karaya varınca botu bıçakla kesip batır ki geri göndermesinler.”",
"Eline yapış yapış plastikten bir motor kolu tutuşturuyor. Sen hayatında hiç tekne kullanmadın."
], secenekler: [
{ t: "Başka çare olmadığı için kabul edersin.", to: "s2", etki: { sorumluluk: 2, dumen: true } },
{ t: "Genç, güçlü ve yüzme bildiği için motoru Hamza'ya verirsin.", to: "s2", etki: { temkin: 1, dumen_hamza: true } },
{ t: "Senin işinin ailen olduğunu söyleyip adamdan başkasını seçmesini istersin.", to: "s2", etki: { temkin: 1, dumen_ret: true } },
{ t: "Kabul edersin ama önce Ümmü Halil'le Zahra'yı ortaya, en güvenli yere oturtursun.", to: "s2", etki: { sorumluluk: 2, dumen: true, yerlesim: true } }
]},

s2: { saat: "Deniz, 06.10", baslik: "Motor", metin: [
P(S("s1A"), "Dümene geçtin, motorun titreşimi dirseklerine kadar çıktı."),
P(S("s1D"), "Ümmü Halil'le Zahra'yı ortaya oturttun. Yaşlı kadın dua mırıldanıyor, Zahra Farid'in kolunu sıkıyordu. Sonra dümene geçtin."),
P(function(d){ return d.dumen_hamza || d.dumen_ret; }, "Motoru Hamza aldı. “Fırat'ta kayık kullanmıştım,” dedi. Yalan da olabilirdi ama herkes inanmak istedi."),
"Bot kıyıdan ayrılıyor. Dalgalar önce küçük, sonra büyüyor. Kuzey rüzgârı yandan vuruyor ve tuzlu, soğuk su içeri sıçrıyor.",
"Bir saat geçiyor, kıyının ışıkları küçülüyor, Midilli'ninkiler büyüyor.",
"Sonra motor bir iki kere öksürüp duruyor.",
"Rüzgârdan başka hiç ses yok. Bot kendi etrafında dönmeye başlıyor, su artık sıçramıyor, içeri akıyor.",
"Biri “Batıyoruz!” diye bağırıyor. İnsanlar ayağa kalkınca bot yalpalıyor, bir çanta denize düşüyor, bir süre yüzüp gözden kayboluyor.",
"Hamza motorun ipini çekip duruyor. Farid bir numarayı arıyor ama telefon çekmiyor. Ümmü Halil yüksek sesle dua ediyor, sesi hiç titremiyor.",
"Hiba Omar'ı göğsüne bastırmış, Yara senin kolunda, su ayak bileklerinize gelmiş."
], secenekler: [
{ t: "Arapça, Türkçe, İngilizce, herkese oturmasını bağırırsın.", to: "s3", etki: { sorumluluk: 2, sakinlestirdi: true } },
{ t: "Bot hafiflesin diye çantaları denize atmaya başlarsın.", to: "s3", etki: { temkin: 1, atti: true } },
{ t: "Samir'in dün gönderdiği Yunan sahil güvenliği numarasını ararsın.", to: "s3", etki: { temkin: 2, aradi: true } },
{ t: "Motoru Hamza'dan alıp kendin çalıştırmaya çalışırsın.", to: "s3", etki: { umut: 1, motor: true } }
]},

s3: { saat: "Deniz, 06.40", baslik: "Işık", metin: [
P(S("s2A"), "Üç dilde bağırdın ve insanlar birer birer oturdu. Bot yalpalamayı tamamen olmasa da bıraktı."),
P(S("s2B"), "Çantaları, bavulları attınız, Ümmü Halil'in bavulunu da. İçinde kocasının dükkânından kalma bir halı vardı. Ümmü Halil bavulun batışını izledi ama bir şey demedi."),
P(S("s2C"), "Telefon çekmedi, bir daha denedin. Üçüncüsünde Yunan aksanlı bir ses İngilizce “Hellenic Coast Guard” dedi. Konumu, kırk beş kişi olduğunuzu, çocuklar olduğunu söyledin."),
P(S("s2D"), "Kapağı açınca yakıt hortumuna su girdiğini gördün. Söktün, ağzınla çektin, benzini tükürüp yerine taktın. Motor öksürdü, yarım dakika çalıştı, sonra yine durdu."),
"Su dizlerinize gelmiş. Bir dalga botun yanını kumaş yırtılır gibi bir sesle yırtıyor ve bot yana yatıyor.",
"Sonra herkes suda.",
"Yara'nın elini tutuyorsun. Hiba Omar'la birlikte suda, yüzme bilmiyor ama yelek onu tutuyor.",
P(function(d){ return d.yelek === "sahte"; }, "Sonra Yara'nın flamingolu yeleğinin su çektiğini görüyorsun, gittikçe ağırlaşıyor, Omar'ınki de öyle. İçleri sünger."),
P(function(d){ return d.yelek === "sahte"; }, "Hamza birden yanında beliriyor, kendi yeleğini çıkarıp Omar'a geçiriyor, Yara'yı senin koluna itiyor. Sonra bir dalga geliyor."),
P(function(d){ return d.yelek !== "sahte"; }, "Yelekler tutuyor. Yara'nın yüzü suyun üstünde, ağzı açık, nefes alıyor. Hiba'nın kucağındaki Omar bağırıyor, bağırması iyi, diyorsun içinden."),
"Bir projektör yanıyor, bir motor sesi geliyor, Yunan bayraklı gri bir gemi yaklaşıyor.",
"Uzanan eller, bir battaniye, plastik bardakta sıcak çay. Bir asker Yara'yı kucağına alıp Yunanca bir şey söylüyor. Yara ağlamıyor, yalnızca titriyor."
], secenekler: [
{ t: "Herkesi sayarsın, kırk beş kişi olmalı.", to: "t1", etki: function(d){ d.sorumluluk++; d.saydi = true; if(d.yelek === "sahte") d.hamza_kayip = true; } },
{ t: "Hiba'ya, Yara'ya, Omar'a sarılırsın.", to: "t1", etki: function(d){ d.umut++; if(d.yelek === "sahte") d.hamza_kayip = true; } },
{ t: "Hâlâ orada biri kaldı mı diye denize bakarsın.", to: "t1", etki: function(d){ d.sorumluluk++; d.denize_bakti = true; if(d.yelek === "sahte") d.hamza_kayip = true; } },
{ t: "Ümmü Halil'i ararsın.", to: "t1", etki: function(d){ d.sorumluluk++; d.umm_aradi = true; if(d.yelek === "sahte") d.hamza_kayip = true; } }
]},

/* ---------- BEKLEME KOLU ---------- */
w1: { saat: "Ağustos 2015", baslik: "Bir Hafta", metin: [
"Cemil'e “Bir hafta sonra” diye mesaj atıyorsun. Cevap geliyor: “Bin beş yüz. Kapora beş yüz, yarın getir.”",
"Saat beşte minibüs geliyor, Hamza, Farid, Zahra ve Ümmü Halil biniyor. Kapıda Hamza sana sarılıyor. “Hamburg'da çay benden,” diyor.",
"Oda boşalıyor, dört kişi ve sekiz boş yer yatağı kalıyor.",
"Ertesi sabah Basmane'deki Suriyelilerin WhatsApp grubuna bir mesaj düşüyor: “Dün gece Çeşme açıklarında kırk beş kişilik bir botu Yunan sahil güvenliği kurtarmış. Hepsi sağ.”",
"Rahatlıyorsun ama içinde başka bir şey de kıpırdıyor. Onlar geçti, sense hâlâ bir otel odasındasın.",
"Üç gün sonra kaporayı götürüyorsun ama lobi boş. Resepsiyondaki adam omuz silkiyor. “Cemil Bey mi? Dün gitti, polis geldi.” Kaporayı verdiğin adam telefonunu açmıyor. Beş yüz dolar gitti."
], secenekler: [
{ t: "Polise gidersin.", to: "w2", etki: { temkin: 1, polis: true } },
{ t: "Hemen başka bir kaçakçı ararsın.", to: "w2", etki: { umut: 1, baska: true } },
{ t: "Hiba'ya hiçbir şey saklamadan anlatırsın.", to: "w2", etki: { sorumluluk: 1, hibaya_soyledi: true } },
{ t: "Kimseye söylemeyip bir yolunu bulmaya çalışırsın.", to: "w2", etki: { temkin: 1, sakladi: true } }
]},

w2: { saat: "Eylül 2015", baslik: "Atölye", metin: [
P(S("w1B"), "Bir haftada üç adamla konuştun. Biri yelek de satıyordu, biri çocuklar için ek para istedi, biri telefonunu kapattı. Bu arada para azaldı."),
P(S("w1D"), "Hiba “Kapora ne oldu?” diye sordu. “Verdim,” dedin, doğruydu da. Kime verdiğini söylemedin."),
P(S("w1A"), "Karakolda bir memur seni dinledi. “Kaçakçılık bu kardeşim, siz de suça ortak olmuşsunuz,” dedi ve tutanak bile tutmadı."),
P(S("w1C"), "Hiba dinledi, Omar'ı yere bırakıp pencereye gitti. Sonra dönüp “Çalışacağız,” dedi, “ikimiz de.”"),
"Dört bin dolar bin beş yüze inmiş, bir kaçakçıya bile yetmiyor.",
"Bornova'da bir tekstil atölyesinde iş buluyorsun. Bodrum katında kırk makine, kırk Suriyeli var, pencere yok. Günde on iki saat, haftada altı gün çalışıyorsun, ayda bin iki yüz lira alıyorsun, sigortan yok.",
"Ütü masasının başındasın, buhar ve sıcak bir an bile dinmiyor. İlk hafta sol bileğinde iki yanık oluyor.",
"Bir gün atölyenin sahibi Hakan Bey seni çağırıyor. “Kızın kaç yaşında? Burada çocuklar da çalışıyor, iplik kesiyor, etiket dikiyor. Günde yirmi lira.”",
"Köşedeki masada üç çocuk iplik kesiyor. Biri Yara'yla yaşıt, makası iki eliyle tutuyor."
], secenekler: [
{ t: "“Hayır, kızım okula gidecek,” dersin.", to: "w3", etki: { sorumluluk: 2, okul: true } },
{ t: "Para biriksin diye yalnızca bir aylığına kabul edersin.", to: "w3", etki: { umut: 1, yara_calisti: true } },
{ t: "İplik kesen çocukların aileleriyle konuşursun.", to: "w3", etki: { sorumluluk: 1, aileler: true } },
{ t: "İşini kaybetmeyi göze alıp Hakan Bey'i bir derneğe şikâyet edersin.", to: "r2", etki: { sorumluluk: 2, sikayet: true, kol: "kalis" } }
]},

w3: { saat: "Eylül 2015", baslik: "Kırmızı Tişört", metin: [
P(S("w2C"), "Aileleri buldun. Biri kapıyı yüzüne kapattı, biri “Ne yapalım, ekmek parası,” diye ağladı, biri çay koydu ve hiçbir şey demedi."),
P(S("w2A"), "Hakan Bey omuz silkti. Yara ertesi hafta bir okula başladı ve ilk gün bir resim getirdi, bir ev, bir ağaç, bir deniz. Denizin öbür tarafı boştu."),
P(S("w2B"), "Yara bir ay çalıştı, akşamları parmakları kıpkırmızı oluyordu. Sonra onu okula yazdırdın. Öğretmeni “Ellerine ne oldu?” diye sorunca Yara cevap vermedi."),
"Bir eylül sabahı atölyede herkes telefonuna bakıyor. Bodrum'da bir kumsalda küçük bir çocuk yüzüstü yatıyor, kırmızı tişörtlü, mavi şortlu, üç yaşında.",
"Kırk makine birden duruyor ve bir kadın ağlamaya başlıyor.",
"Omar'ın da Gaziantep'te bir pazardan aldığınız kırmızı bir tişörtü var.",
"O gece Omar uyurken onu izliyorsun. Beklemiştin, bir dolandırıcı, bir rüzgâr raporu, bir hafta yüzünden. Şimdi bu çocuk burada, kendi yatağında yatıyor."
], secenekler: [
{ t: "Bir daha bot düşünmemeye, burada kalmaya karar verirsin.", to: "t1", etki: { temkin: 2, kal_karar: true } },
{ t: "Hiba'yla birlikte fotoğrafa bakıp ağlarsınız.", to: "t1", etki: { sorumluluk: 1 } },
{ t: "Samir'i arayıp yasal bir yol olup olmadığını sorarsın.", to: "t1", etki: { temkin: 1, yasal: true } },
{ t: "Omar'ın kırmızı tişörtünü dolaba kaldırırsın.", to: "t1", etki: { sorumluluk: 1, tisort: true } }
]},

/* ---------- KALIŞ KOLU ---------- */
r1: { saat: "Eylül 2015", baslik: "Kayıt", metin: [
"Cemil'e cevap vermiyorsun ve saat beşte minibüs gidiyor. Kapıda Hamza soru soran gözlerle sana bakıyor ama yine de “Hamburg'da görüşürüz,” diyor.",
"Ertesi hafta İl Göç İdaresi'ne gidiyorsunuz. Sabah altıdan beri yüzlerce kişi bekliyor. Senin numaran 347, sıra öğleden sonra üçte geliyor.",
"Yorgun ama kibar bir memur parmak izlerinizi, fotoğraflarınızı, adresinizi alıyor ve dört kart çıkıyor. Omar parmak izi verirken mürekkep gıdıkladığı için gülüyor.",
"Başka bir masada BM Mülteciler'in görevlisi oturuyor. On iki sayfalık bir yeniden yerleşim başvurusu dolduruyorsun. Halep, eczane, varil bombası, Gaziantep, İzmir, hepsi kutucuklara giriyor.",
"“Ne kadar beklerim?”",
"Görevli bir an duraksıyor. “Belli değil. İhtimal yüzde birin altında ama sıfır değil.”"
], secenekler: [
{ t: "Burada bir hayat kurmaya başlamak için Bornova'da bir ev kiralarsın.", to: "r2", etki: { temkin: 1, ev: true } },
{ t: "Bir eczanede ne iş olursa olsun ararsın.", to: "r2", etki: { umut: 1, eczane: true } },
{ t: "Hamza'ya mesaj atıp varıp varmadığını sorarsın.", to: "r2", etki: { sorumluluk: 1, hamzaya: true } },
{ t: "Formun bir kopyasını alıp her gece okursun.", to: "r2", etki: { umut: 1, form: true } }
]},

r2: { saat: "2016", baslik: "Okul", metin: [
P(S("r1A"), "Bornova'da nemli bir iki oda tuttunuz, pencereden bir çam ağacı görünüyordu. Yara ağacın adını sordu, Türkçe öğrendiği ilk kelime “çam” oldu."),
P(S("r1D"), "Formun kopyası yastığının altında duruyordu, her gece aynı cümleyi okudun: “Değerlendirme süreci uzun sürebilir.”"),
P(function(d){ return d.sikayet; }, "Şikâyetin bir derneğe ulaştı ve atölye denetlendi, sen de işini kaybettin. Derneğin avukatı seni geçici koruma kaydına, BM başvurusuna ve bir eczanedeki kayıt dışı bir işe yönlendirdi."),
P(S("r1C"), "Hamza ertesi gün Midilli'den ıslak saçlı bir fotoğraf gönderdi. “Vardık, herkes sağ, Ümmü Halil bile.” Rahatladın ama adını koymak istemediğin bir şey de hissettin."),
P(S("r1B"), "Karşıyaka'da bir eczanede kayıt dışı iş buldun. Eczacı Nilgün Hanım yetmişlerindeydi. İlk gün bir reçetede bir ilaç etkileşimi fark edip söyledin, Nilgün Hanım gözlüğünün üstünden baktı. “Eczacı mıydınız?” diye sordu ve ertesi gün maaşını artırdı."),
"Bir yıl geçiyor. Yara üçüncü sınıfta, Türkçesi seninkinden iyi, Arapçayı unutmaya başladı. Omar kreşe gidiyor. Hiba bir dernekte Suriyeli kadınlara Türkçe öğretiyor, kendi Türkçesi zayıf ama yine de öğretiyor.",
"Bir akşam Yara'nın öğretmeni Feyza Hanım seni okula çağırıp bir resim gösteriyor. Resimde bir sınıf var, köşede de yüzü olmayan bir çocuk.",
"“Yara çok başarılı ama hiç arkadaşı yok. Bir çocuk ona ‘Suriyeli, ülkene dön’ demiş. Yara bir şey dememiş, gidip bu resmi çizmiş.”",
"“Ailesiyle konuştum ama bu ne ilk ne de son olacak.”"
], secenekler: [
{ t: "Yara'yla onun anlayacağı bir dille konuşursun.", to: "r3", etki: { sorumluluk: 1, yarayla: true } },
{ t: "O çocuğun ailesiyle sen de konuşmak istersin.", to: "r3", etki: { sorumluluk: 1, aile_konus: true } },
{ t: "Feyza Hanım'a teşekkür edip başka bir okul ararsın.", to: "r3", etki: { temkin: 1, okul_degis: true } },
{ t: "Eve dönüp BM formunu yeniden okursun.", to: "r3", etki: { umut: 1, form2: true } }
]},

r3: { saat: "2018", baslik: "Mülakat", metin: [
P(S("r2C"), "Başka bir okul aradın. Yara “Ama ben Feyza Hoca'yı seviyorum,” diye itiraz etti. Bir ay sonra yeni okulda da aynı lafı duydu."),
P(S("r2D"), "Formu yeniden okudun ve Yara'nın okulundan gelen kâğıdı yanına koydun."),
P(S("r2A"), "Balkonda Yara “Baba, ben Türk müyüm, Suriyeli miyim?” diye sordu. “İkisi de,” dedin. Yara biraz düşündü. “İkisi olunca hiçbiri olmuyor ama,” dedi. Daha dokuz yaşındaydı."),
P(S("r2B"), "Çocuğun babası Sivaslı bir inşaat işçisiydi, bir kahvede oturdunuz. “Babam altmışlarda Almanya'ya gitmişti,” dedi, “ona da ‘Türk, ülkene dön’ demişler.” Oğluna ne diyeceğini bilmiyordu, sen de bilmiyordun."),
"İki yıl sonra BM'den bir telefon geliyor, Ankara'da mülakata çağrılıyorsunuz.",
"Kanadalı bir görevli ve bir tercümanla üç saat oturuyorsun, her şeyi baştan anlatıyorsun.",
"Bir ay sonra bir mektup geliyor. Toronto'da bir ev, dil kursu, bir yıllık destek ve kalıcı oturum.",
"O yüzde bir ihtimal size çıkmış.",
"Ama artık Nilgün Hanım'ın eczanesinde bir yerin var. Yara'nın sonunda bir arkadaşı oldu, o Sivaslı çocuk. Omar Arapça bilmiyor. Hiba'nın derneğine altmış kadın geliyor.",
"Masada Yara'nın şiir defteri açık duruyor."
], secenekler: [
{ t: "Kanada'ya gidersiniz.", to: "t1", etki: { umut: 2, kanada: true } },
{ t: "İzmir'de kalırsınız.", to: "t1", etki: { temkin: 1, sorumluluk: 1, kaldi: true } },
{ t: "Kararın ağırlığını bir çocuğa yüklemeyi de göze alıp Hiba'ya ve Yara'ya sorarsın, onlar karar versin.", to: "t1", etki: function(d){ d.sorumluluk++; d.aile_karar = true; d.kaldi = true; } },
{ t: "Nilgün Hanım'a danışırsın.", to: "t1", etki: function(d){ d.temkin++; d.nilgun = true; d.kanada = true; } }
]},

/* ---------- AYRI KOL ---------- */
p1: { saat: "Ağustos 2015, 05.00", baslik: "İskele", metin: [
"Minibüs otelin önünde bekliyor. Hiba, Yara, Omar ve Hamza binecek, sen binmeyeceksin.",
"Astarı söküp üç kişilik parayı Hiba'ya veriyorsun, kalanı bir sonraki bot için sende kalıyor.",
"Hiba'nın yüzü kâğıt gibi bembeyaz. “Ahmed, ben yüzme bilmiyorum.”",
"“Hamza biliyor,” diyorsun. Hamza ciddi bir yüzle “Ben onlara bakarım Ahmed Abi,” diyor.",
"Yara sana sarılıyor. “Baba, sen neden gelmiyorsun?” Parayı, sırayı, botu anlatıyorsun ama anlamıyor. “Hamburg'da amcanın evinde görüşürüz,” diyorsun.",
"Omar Hiba'nın kucağında uyuyor, onu uyandırmıyorsun.",
"Minibüs kalkıyor, arka camda Yara'nın eli kalıyor.",
"Sabahın beşinde Basmane'de bir kaldırımdasın ve astarın hafiflemiş."
], secenekler: [
{ t: "Otele dönüp telefonu elinden bırakmadan beklersin.", to: "p2", etki: { sorumluluk: 1, bekledi: true } },
{ t: "Minibüsün arkasından koşarsın.", to: "p2", etki: { umut: 1, kostu: true } },
{ t: "Camiye gidip sabah namazına durursun.", to: "p2", etki: { temkin: 1, cami: true } },
{ t: "Bornova'daki atölyeye gidip o sabahtan çalışmaya başlarsın.", to: "p2", etki: { temkin: 1, calisma: true } }
]},

p2: { saat: "Ağustos 2015", baslik: "Sessizlik", metin: [
P(S("p1A"), "Otele döndün, odada altı kişi kalmıştı. Hiba'nın yer yatağında Omar'ın bir çorabı duruyordu."),
P(S("p1C"), "Secdede alnın halıya değdi ve kalkmak istemedin."),
P(S("p1D"), "Atölyede makinenin sesi kafanın içindeki sesi bastırsın diye ütüye bastıkça bastın."),
P(S("p1B"), "İki sokak, üç sokak koştun ama minibüs bir köşeyi dönüp gitti. Kepenk açan bir fırıncı sana baktı, bir şey sormadı."),
"Saat altı oluyor, yedi oluyor, sekiz oluyor, telefon hiç çalmıyor.",
"Hiba'nın telefonu kapalı, denizde kapatmak gerekiyormuş.",
"Saat onda gruba mesajlar düşmeye başlıyor. “Çeşme açıklarında bir bot.” “Bir bot batmış, kaç kişi olduğu bilinmiyor.”",
"Hangi bot?",
"Saat on bir oluyor, ekranı otuz saniyede bir yeniliyorsun, şarjın yüzde dokuza inmiş.",
"On ikiyi kırk geçe bilinmeyen bir Yunan numarasından bir fotoğraf geliyor. Bir battaniye, ıslak saçlar, Yara. Arkasında kucağında Omar'la Hiba, bir köşede Hamza.",
"Altında Arapça yazıyor: “Vardık. Herkes sağ. Gel Ahmed, çabuk gel.”"
], secenekler: [
{ t: "Otel odasında tek başına ağlarsın.", to: "p3", etki: { umut: 1, agladi: true } },
{ t: "Hemen Cemil'i arayıp bir sonraki botu sorarsın.", to: "p3", etki: { umut: 2, hemen: true } },
{ t: "Hamza'ya bir teşekkür mesajı yazarsın.", to: "p3", etki: { sorumluluk: 1, hamza_tesekkur: true } },
{ t: "Fotoğrafı büyütüp veda edemediğin Omar'ın yüzüne bakarsın.", to: "p3", etki: { sorumluluk: 1, omar_yuz: true } }
]},

p3: { saat: "Kasım 2015", baslik: "Tel", metin: [
P(S("p2A"), "Doya doya ağladın, sonra yüzünü yıkadın. Şarj aletini prize takıp telefonu yanına koydun ve uyudun."),
P(S("p2B"), "“Bin beş yüz,” dedi Cemil, “ama şimdi olmaz, kıyılar sıkı.” Elinde bin iki yüz vardı."),
P(S("p2C"), "Hamza'nın cevabı bir fotoğraftı, Omar bir kumsalda onun omuzlarında oturuyordu. “Oğlun beni yordu,” diye yazmıştı."),
P(S("p2D"), "Omar uyuyordu, sen ona veda edememiştin, o da sana."),
"Atölyede bir ay geçiyor, bir ay daha. Bin iki yüz biriktirdin ama Cemil artık bin beş yüz istiyor.",
"Hiba ve çocuklar Midilli'den Atina'ya, oradan Makedonya'ya, Sırbistan'a, Hırvatistan'a geçiyor. Her gün bir fotoğraf geliyor, bir tren, bir çadır, bir sınır, Hamza hep bir köşede.",
"Ekimde Hamburg'a varıyorlar. Yara yeni bir çantayla Alman bir okul sırasında oturuyor, Hiba bir pencerenin önünde duruyor.",
"Kasımda haberler Balkan rotasının kapandığını söylüyor. Türkiye'yle Avrupa Birliği adalara geçenlerin geri gönderileceği bir anlaşma konuşuyor.",
"Bin beş yüzün var ama botun öbür tarafında artık yol yok.",
"Hiba görüntülü arıyor, arkada Yara Almanca ödevini yapıyor. “Ahmed, aile birleşimi diye bir şey varmış, kâğıtla oluyor. Belki bir yıl, belki iki. Bota binme, lütfen.”"
], secenekler: [
{ t: "Aile birleşimi için başvurup beklersin.", to: "t1", etki: { temkin: 2, birlesim: true } },
{ t: "Kamp da olsa onlara bir deniz daha yakın olmak için bota binersin.", to: "t1", etki: { umut: 2, bota_bindi: true } },
{ t: "Hiba'ya “Sen çocukları al gel, burada yaşayalım,” dersin.", to: "t1", etki: { sorumluluk: 1, geri_cagir: true } },
{ t: "Ne istediğini sormak için Yara'yla konuşmak istersin.", to: "t1", etki: { sorumluluk: 1, yara_ne: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Bir yıl sonra", baslik: "Sonra", metin: [
P(S("s3A"), "Arapça, Türkçe, parmaklarınla saydın ve her seferinde başka bir sayı çıktı. Bir asker omzuna dokunup “Okay, okay,” dedi ama saymayı bırakamadın."),
P(S("s3B"), "Hiba'ya, Yara'ya, Omar'a sarıldın. Omar'ın yeleği ıslak ve ağırdı. Dördünüz bir battaniyenin altında titrediniz."),
P(S("s3C"), "Denize baktın ve turuncu bir leke gördüğünü sandın. Gemi dönünce leke kayboldu ama sen o lekeyi yıllarca gördün."),
P(S("s3D"), "Ümmü Halil güvertenin bir köşesinde, battaniyeye sarılmış dua ediyordu. “Vardık mı oğlum?” diye sordu. “Daha değil,” dedin."),
P(S("w3A"), "Hiba'ya söyledin, bir şey demedi. O gece aylardan sonra ilk kez derin uyudu, sabah onu sen uyandırdın."),
P(S("w3B"), "Fotoğrafa birlikte baktınız. Omar uyanıp üstünde kırmızı tişörtüyle yanınıza geldi, ikiniz birden ona sarıldınız. Ne olduğunu anlamadı."),
P(S("w3C"), "“Aile birleşimi diye bir şey var,” dedi Samir, “ama önce benim oturumum kalıcı olmalı. İki yıl, belki üç.”"),
P(S("w3D"), "Tişörtü dolabın en arkasına kaldırdın. Omar aradı, bulamayınca ağladı, sen de ona üstünde dinozor olan yeşil bir tişört aldın."),
P(S("r3A"), "Nilgün Hanım'ın gözleri doldu. “Gidin,” dedi, “ama Yara'nın Türkçesi unutulmasın.”"),
P(S("r3B"), "Mektubu bir çekmeceye koydun. Hiba bir gece çekmeceyi açıp okudu ve yerine koydu."),
P(S("r3C"), "Hiba Kanada dedi, Yara ise okulunu, arkadaşlarını, Türkçe şiirlerini sayarak ağladı. Hiba Yara'ya bakıp “Kalalım,” dedi. Kararı bir çocuk vermiş oldu."),
P(S("r3D"), "Nilgün Hanım biraz düşündü. “Ben olsam giderdim,” dedi, “burada sizi hep misafir sayacaklar.” Sen de Kanada'yı seçtin."),
P(S("p3A"), "Aile birleşimine başvurdun. On yedinci sayfada “Aileden ayrılma tarihi” diye bir soru vardı, tarihi yazarken kalem kâğıdı deldi."),
P(S("p3B"), "Kasımın sonunda, sakin bir gecede, tek başına bota bindin. Dümende başkası vardı, sen yalnızca bir yolcuydun. Yolcu olmanın çok daha korkunç olduğunu o gece öğrendin."),
P(S("p3C"), "Hiba uzun süre sustu. Ekranın köşesinde Yara'nın açık duran Almanca defteri görünüyordu."),
P(S("p3D"), "“Baba, ben burada okumak istiyorum ama sen de gel,” dedi Yara. İkisi birden olmuyordu."),
P(function(d){ return d.kol === "deniz" && !d.hamza_kayip; }, "Midilli'den sonra yirmi üç gün yol gittiniz. Atina, Makedonya, Sırbistan, Hırvatistan, Avusturya, sonra bir ekim sabahı Hamburg. Samir kapıyı açtı ve koridorda uzun süre sarıldınız. Kırk beş kişinin kırk beşi de kurtulmuştu ve bu hiçbir haberde yer almadı."),
P(function(d){ return d.hamza_kayip; }, "Askerler kırk dört kişi saydı, biri eksikti. Hamza yeleğini Omar'a vermişti. İki gün sonra onu Midilli'nin kuzey kıyısında buldular. On dokuz yaşındaydı, çantasında sayfaları ıslanıp birbirine yapışmış bir mühendislik kitabı vardı."),
P(function(d){ return d.hamza_kayip; }, "Yirmi üç gün sonra Hamburg'a vardınız. Omar'ın üstünde hâlâ o turuncu yelek vardı, çıkarmak istememişti. Hiba bir hafta sonra yeleği yıkayıp katladı ve dolaba koydu."),
P(function(d){ return d.kol === "bekle"; }, "İzmir'de bir yıl geçti, Bornova'da bir evde oturuyorsunuz. Basmane'deki yelek dükkânları kapandı, anlaşmadan sonra artık kimse geçmiyor."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Toronto'dasınız, hava eksi yirmi. Bir apartman dairesi, bir dil kursu ve bir eczanede depo görevliliği. Yara'nın İngilizcesi bir yılda Türkçesini geçti."),
P(function(d){ return d.kol === "kalis" && d.kaldi; }, "İzmir'de kaldınız. Bir yıl sonra Yara bir şiir yarışmasında “İki Deniz” adlı şiiriyle birinci oldu. Müdür soyadını yanlış okuyunca Yara mikrofonda düzeltti."),
P(function(d){ return d.kol === "ayri" && d.birlesim; }, "Bir yıl oldu ve sen hâlâ İzmir'desin, başvurun Almanya'da bir masanın üstünde bekliyor. Omar seni ekrandan tanıyor, artık sana “Papa” diyor."),
P(function(d){ return d.kol === "ayri" && d.bota_bindi; }, "Midilli'desin, Moria'da, bin kişilik bir kampta beş bin kişiyle. Bir yıl geçti. Ailen Hamburg'da, aranızda bir anlaşma, bir tel ve bir deniz var."),
P(function(d){ return d.kol === "ayri" && (d.geri_cagir || d.yara_ne); }, "Hiba gelmedi. “Gelirsek yine başa döneriz Ahmed,” dedi. Bir yıl geçti, sen İzmir'desin, onlar Hamburg'da, bir aile bir ekranın içinde yaşıyor."),
"Bir sabah Mesut'tan bir mesaj geliyor, boş bir vitrinin fotoğrafı. “Kapattım. Artık yelek satmıyorum, eşofman satıyorum. Kızım üniversiteyi bitirdi.” Altına da bir soru yazmış: “Hepiniz geçtiniz mi?”"
], secenekler: [
{ t: "Mesut'a her şeyi olduğu gibi yazarsın.", to: "t1b", etki: { sorumluluk: 1, mesuta: true } },
{ t: "Mesut'a bir teşekkür yazarsın.", to: "t1b", etki: { umut: 1 } },
{ t: "Cevap vermezsin.", to: "t1b", etki: { temkin: 1 } },
{ t: "Mesut'a o gün aldığın yeleklerin fotoğrafını gönderirsin.", to: "t1b", etki: { sorumluluk: 1, yelek_foto: true } }
]},

t1b: { saat: "Bir yıl sonra", baslik: "Ümmü Halil", metin: [
P(S("t1A"), "Kimin geçtiğini, kimin geçemediğini, kimin nerede olduğunu yazdın. Bir saat sonra cevap geldi: “Bunu bana kimse anlatmamıştı.”"),
P(S("t1B"), "Cevap tek bir kelimeydi: “Utanıyorum.”"),
P(S("t1C"), "“Hepiniz geçtiniz mi?” mesajı telefonunda öylece kaldı, bazı geceler açıp baktın."),
P(S("t1D"), "Dolapta duran dört yeleğin fotoğrafını gönderdin. Mesut bir kalp gönderdi, sildi, sonra yeniden gönderdi."),
P(function(d){ return d.hamza_kayip; }, "Bir ay sonra Halep'teki annesini telefonla buluyorsun ve yeleği, Omar'ı, dalgayı anlatıyorsun. Uzun bir sessizlik oluyor. “O hep böyleydi,” diyor kadın, “kalemini de ekmeğini de verirdi. Şimdi de...” Cümlesini bitiremiyor."),
"Bir gün İsveç'ten bir fotoğraf geliyor. Bir hastane koridorunda beyaz önlüklü genç bir doktor duruyor, yanında tekerlekli sandalyede Ümmü Halil oturuyor.",
P(function(d){ return d.umm_para || d.samir_borc; }, "Altında Arapça bir not var: “Ahmed oğlum, torunumu buldum, senin bin dolarınla. Her gün sana dua ediyorum.”"),
P(function(d){ return d.umm_kismi; }, "Altında Arapça bir not var: “O gece bir şapkada iki yüz otuz dolar vardı, yetmedi. Bir İsveçli gazeteciye anlattım, o yazdı, kalanını bir dernek verdi. O şapka için dua ediyorum.”"),
P(function(d){ return d.umm_ret; }, "Altında kime yazıldığı belli olmayan Arapça bir not var: “Basmane'deki otel odasındaki herkese. Bir yıl sürdü ama vardım, torunum doktor olmuş.” Bir grup mesajı mı, yalnızca sana mı yazılmış, bilmiyorsun."),
P(function(d){ return !d.umm_para && !d.samir_borc && !d.umm_kismi && !d.umm_ret; }, "Altında Arapça bir not var: “Torunumu buldum. Allah hepinizden razı olsun.”"),
"Ümmü Halil dişsiz ağzıyla gülümsüyor. Torunu elini onun omzuna koymuş, önlüğünün cebinde üç kalem var.",
P(function(d){ return d.kese; }, "Senin cebinde hâlâ o bez kese, Humus'un toprağı duruyor.")
], secenekler: [
{ t: "Ümmü Halil'e cevap yazarsın.", to: "t2", etki: { sorumluluk: 1 } },
{ t: "Fotoğrafı Hiba'yla Yara'ya gösterirsin.", to: "t2", etki: { umut: 1, gosterdi: true } },
{ t: "Fotoğrafa bakıp o otel odasını düşünürsün.", to: "t2", etki: { temkin: 1 } },
{ t: function(d){ return d.kese ? "Bez keseyi açıp toprağa bakarsın." : "Bir şey yapmazsın. Ama fotoğrafı kaydedersin."; }, to: "t2", etki: { sorumluluk: 1, kese_acti: true } }
]},

t2: { saat: "2018", baslik: "Yara", metin: [
P(S("t1bA"), "Uzun bir cevap yazdın. Bir hafta sonra bir sesli mesaj geldi, önce titrek bir dua, sonra torununun sesi: “Büyükannem sizi hiç unutmadı.”"),
P(S("t1bB"), "Yara hatırlamadı ama Hiba hatırladı. “O gece o kadın bana bir şey söylemişti,” dedi. “Kocana iyi bak, herkesi kurtarmaya çalışırken kendini unutacak.”"),
P(S("t1bC"), "On iki kişi, yer yatakları, prizin önündeki sıra, bir şapka. O odadakilerin kaçının bir kıyıya vardığını bilmiyorsun."),
P(S("t1bD"), "Telefonunda adı olmayan bir klasör var, içinde bir vitrin, bir hastane koridoru ve bir deniz."),
"Yara on yaşında. Bir akşam gelip yanına oturuyor.",
P(function(d){ return d.hamza_kayip; }, "“Baba, Hamza Abi neden öldü?” Bir dalgayı, bir itişi, senin kolunu hatırlıyor ve dört yıldır hiç sormamıştı."),
P(function(d){ return !d.hamza_kayip && d.kol === "deniz"; }, "“Baba, o gece bizi neden o bota bindirdin?” Karanlığı ve soğuk suyu hatırlıyor, o gecenin bir yaz tatili olmadığını biliyor."),
P(function(d){ return d.kol !== "deniz"; }, "“Baba, biz neden hiç denize gitmiyoruz? Herkes gidiyor, sen hep hayır diyorsun.” Deniz kenarında bir şehirde yaşıyor ama bir kere bile denize girmedi."),
"Gözleri ciddi ciddi sana bakıyor."
], secenekler: [
{ t: "Ona her şeyi en baştan anlatırsın.", to: "y_hikaye", etki: { sorumluluk: 1, anlatti: true } },
{ t: "Bir yaz günü onu ilk kez denize götürürsün.", to: "y_deniz", etki: { umut: 1, denize: true } },
{ t: "Onu, belki de kendini korumak için “Büyüyünce anlatacağım,” dersin.", to: "t3", etki: { temkin: 1, ertele: true } },
{ t: "“Bilmiyorum kızım,” dersin.", to: "t3", etki: { sorumluluk: 1, bilmiyorum: true } }
]},

y_hikaye: { saat: "2018", baslik: "Hikâye", metin: [
"Halep'ten başlıyorsun, eczaneden, Salahaddin'den, varil bombasından, sonra Gaziantep'ten, Basmane'den.",
"Mesut'u, yelekleri, “Ben taksi şoförüyüm” diyen Cemil'i anlatıyorsun. Ümmü Halil'i, Hamza'yı, Farid'le Zahra'yı, bir şapkayı anlatıyorsun.",
P(function(d){ return d.kol === "deniz"; }, "Sonra o geceyi, kıyıyı, motoru, dalgayı, projektörü anlatıyorsun."),
P(function(d){ return d.hamza_kayip; }, "Sonra Hamza'yı, yeleğini, Yara'yı senin koluna iten elini anlatıyorsun. Sesin kırılıyor, Yara on yaşındaki eliyle bileğini tutuyor."),
P(function(d){ return d.kol !== "deniz"; }, "Sonra minibüse binmediğiniz sabahı, Hamza'nın bindiğini, bir hafta sonra gelen kumsal fotoğrafını anlatıyorsun."),
"Yara iki saat boyunca bir kere bile sözünü kesmeden dinliyor.",
"Sonra soruyor: “Baba, sen doğru mu yaptın?”"
], secenekler: [
{ t: "“Bilmiyorum ama elimden geleni yaptım,” dersin.", to: "t3", etki: { sorumluluk: 1, elimden: true } },
{ t: "“Hayır, ama başka doğru yoktu,” dersin.", to: "t3", etki: { temkin: 1 } },
{ t: "“Sen ne düşünüyorsun?” diye sorarsın.", to: "t3", etki: { umut: 1, yaraya_sordu: true } },
{ t: "Bir şey demeden ona sarılırsın.", to: "t3", etki: { sorumluluk: 1 } }
]},

y_deniz: { saat: "2018, Temmuz", baslik: "Kıyı", metin: [
P(function(d){ return d.kol === "deniz" || d.birlesim; }, "Hamburg'a bir saat uzaklıkta, Baltık kıyısındasınız. Deniz gri, soğuk ve sakin. Almanlar havlularına uzanmış, çocuklar kumdan kale yapıyor."),
P(function(d){ return d.kol === "bekle" || (d.kol === "kalis" && d.kaldi) || d.geri_cagir || d.yara_ne; }, "Temmuzda Çeşme'de, Ilıca plajındasınız. Şemsiyeler, dondurmacılar var, ufukta puslu bir ada görünüyor. Öbür taraf Midilli."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Toronto'da, Ontario Gölü'nün kıyısındasınız. Öbür kıyısı görünmüyor, kanolar ve bir dondurmacı var."),
P(function(d){ return d.bota_bindi; }, "Midilli'de, kampın arkasındaki kayalıktasınız. Ailen bir haftalığına gelmiş, karşıda Ayvalık'ın ışıkları yanıyor."),
"Yara kıyıda duruyor, dalgalar parmaklarına değip geri çekiliyor.",
"“Baba, giremiyorum.”",
"Yanına gidiyorsun ve birlikte bir adım atıyorsunuz, su bileklerinize geliyor. Bir adım daha, su dizlerinizde.",
"Yara titriyor ama gözlerini açıp sakin, mavi denize bakıyor.",
"“Deniz bilmiyor, değil mi? Ne olduğunu.”"
], secenekler: [
{ t: "“O bilmiyor ama biz biliyoruz,” dersin.", to: "t3", etki: { sorumluluk: 1 } },
{ t: "Ona yüzmeyi öğretmek için kucaklayıp biraz daha içeri girersin.", to: "t3", etki: { umut: 2, yuzme: true } },
{ t: "Bugünlük bu kadar yeter deyip onu kıyıya götürürsün.", to: "t3", etki: { temkin: 1 } },
{ t: function(d){ return d.kese ? "Cebinden bez keseyi çıkarıp toprağı suya serpersin." : "Avucuna biraz su alıp Yara'nın alnına dokundurursun."; }, to: "t3", etki: { sorumluluk: 1, kese_serpti: true } }
]},

t3: { saat: "2022", baslik: "Dil", metin: [
P(S("t2C"), "“Büyüyünce anlatacağım,” dedin. Yara odasına gitti ve dört yıl boyunca bir daha sormadı. Sen her gün sormasını bekledin."),
P(S("t2D"), "“Bilmiyorum kızım,” dedin. Yara sana baktı. “Ben de bilmiyorum,” dedi, “o zaman ikimiz de bilmiyoruz.”"),
P(S("y_hikayeA"), "Yara düşündü. “Bu bir cevap değil baba,” dedi, “ama doğru.”"),
P(S("y_hikayeB"), "Yara bir süre sustu. “Belki vardı da sen görmedin,” dedi, “o da şans işi.”"),
P(S("y_hikayeC"), "Yara önce şaşırdı, sonra “Bence biz şanslıyız ve bu adil değil,” dedi. On yaşındaydı."),
P(S("y_hikayeD"), "Ona sarıldın. Yara ağlamadı, sen ağladın. Bir süre sonra Yara saçını okşamaya başladı."),
P(S("y_denizA"), "Yara bir taş alıp suya attı. “O zaman biz hatırlayalım,” dedi."),
P(S("y_denizC"), "Kıyıda havluya sarılan Yara denize uzun uzun baktı."),
P(S("y_denizB"), "Yara bir haftada yüzmeyi öğrendi. Bir sabah elli metre açılıp sana el salladı, sen de ona salladın. İkiniz de ağlıyordunuz ama Yara yüzündekinin tuzlu su olduğunu sandı."),
P(function(d){ return d.son === "y_denizD" && d.kese; }, "Keseyi açtın ve toprak suya karıştı. Yara elini suya sokup toprağın dağılışını izledi, hiçbir şey sormadı."),
P(function(d){ return d.son === "y_denizD" && !d.kese; }, "Avucundaki suyu Yara'nın alnına dokundurdun. Yara gözlerini kapadı, hiçbir şey sormadı."),
"Dört yıl sonra Yara on dört yaşında. Bir akşam yemekte bir şey dikkatini çekiyor.",
P(function(d){ return d.kol === "deniz" || d.kol === "ayri"; }, "Yara'yla Omar kendi aralarında hızlı hızlı, gülerek Almanca konuşuyor. Omar yedi yaşında, bildiği Arapça üç kelimeden ibaret, baba, anne, teta. Yara Arapçayı anlıyor ama Almanca cevap veriyor."),
P(function(d){ return d.kol === "bekle" || (d.kol === "kalis" && d.kaldi); }, "Yara'yla Omar İzmir şivesiyle Türkçe konuşuyor, Hiba'yla siz ise Arapça. Çocuklarınız sizi yabancı bir dil dinler gibi dinliyor."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Yara'yla Omar İngilizce konuşuyor. Omar ne Arapça ne Türkçe biliyor. Yara üç dili de anlıyor ama İngilizce düşünüyor."),
"Çocukların Halep'teki eczaneyi yalnızca bir fotoğraftan tanıyor.",
"Yara sana Arapça bir şey soruyor ama kelimeler takılıyor, araya başka bir dilden bir kelime giriyor ve gülüyor. “Baba, bana yeniden Arapça öğretir misin?”"
], secenekler: [
{ t: "Evet dersin, her akşam bir saat.", to: "t4", etki: { sorumluluk: 1, arapca: true } },
{ t: "“Sen buranın dilini konuş, ben anlarım,” dersin.", to: "t4", etki: { umut: 1, birak: true } },
{ t: "Eski bir fotoğraftaki Halep eczanesinin tabelasını ona Arapça okutursun.", to: "t4", etki: { sorumluluk: 1, tabela: true } },
{ t: "Ona Ümmü Halil'in torununu anlatırsın.", to: "t4", etki: { sorumluluk: 1, umm_anlatti: true } }
]},

t4: { saat: "2025", baslik: "Karşı Kıyı", metin: [
P(S("t3A"), "Her akşam bir saat çalıştınız, elif, be, te. Bir akşam Yara eczanenin adını tek başına yazdı, yalnızca şın harfinin noktalarını unuttu."),
P(S("t3B"), "Yara rahatladı. O akşam odasında eski bir Arapça çizgi filmi sesini kısarak izledi."),
P(S("t3C"), "Yara heceleyerek “Saydaliyyat el-Şifa” diye okudu. “Bizim eczanemiz,” dedi, hiç görmediği bir eczane için."),
P(S("t3D"), "Büyükannesine Arapça yazabilmek için kursa giden bir torunu anlattın. Ertesi gün Yara senden Arapça bir kitap istedi."),
"On yıl sonra bir kıyıdasınız.",
P(function(d){ return d.kol === "deniz"; }, "On yıl sonra Alman pasaportuyla, turist olarak Midilli'ye geldin. Kuzey kıyısında zeytinlikler ve isimsiz mezarların olduğu bir mezarlık var, karşıda Ayvalık görünüyor."),
P(function(d){ return d.kol === "bekle" || (d.kol === "kalis" && d.kaldi) || d.birlesim || d.geri_cagir || d.yara_ne; }, "Ayvalık'ta bir çay bahçesindesin, karşıda Midilli var. Feribotla yarım saat sürüyor, otuz avro tutuyor. On yıl önce bir lastik botla bin iki yüz dolardı."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Bu yaz Kanada pasaportuyla Ayvalık'a geldin. Karşında hiç geçmediğin deniz duruyor."),
P(function(d){ return d.bota_bindi; }, "Midilli'de bir dernekte Arapça, Türkçe ve biraz da Yunanca tercümanlık yapıyorsun. Botlar hâlâ geliyor ama daha az."),
P(function(d){ return d.hamza_kayip; }, "Küçük bir mezarlıkta bir taşın üstünde “Hamza, 1996–2015. Halep.” yazıyor. Biri taşın üstüne plastik bir cetvel bırakmış."),
"Yanında Yara var, yirmi yaşında, mühendislik okuyor.",
"Bir feribot geçiyor, güvertede biri fotoğraf çekiyor.",
"“Baba, biz hangi kıyıdayız?”"
], secenekler: [
{ t: "“Burada,” dersin.", to: "ks", etki: { temkin: 1 } },
{ t: "“İkisinde de,” dersin.", to: "ks", etki: { umut: 1 } },
{ t: "Bu kez hüzünlenmeden “Hiçbirinde,” dersin.", to: "ks", etki: { sorumluluk: 1 } },
{ t: "Bir şey demeden Yara'nın yanına çömelip ayakkabılarını çıkarırsın.", to: "ks", etki: { sorumluluk: 1 } }
]},

ks: { yonlendir: [
{ if: function(d){ return d.hamza_kayip; }, to: "son_deniz" },
{ if: function(d){ return d.kol === "deniz"; }, to: "son_kiyi" },
{ if: function(d){ return d.kol === "ayri"; }, to: "son_ayri" },
{ if: function(d){ return d.kol === "kalis" && d.kanada; }, to: "son_kagit" },
{ to: "son_kalan" }
]},

/* ---------- SONLAR ---------- */
son_kiyi: { son: true, baslik: "Kırk Beş", metin: [
P(S("t4A"), "“Burada,” demiştin, Yara da başını sallamıştı."),
P(S("t4B"), "“İkisinde de,” demiştin. Yara gülüp “Kolay cevap,” demişti ama kolay değildi."),
P(S("t4C"), "“Hiçbirinde,” demiştin, Yara da koluna girmişti."),
P(S("t4D"), "Ayakkabılarını çıkarmıştın, Yara da çıkardı. Bir dalga gelip ayaklarınıza değdi ve çekildi."),
"Kırk beş kişi geçti, çünkü bir Yunan gemisi doğru zamanda doğru yerdeydi.",
"Aynı gece aynı denizde, aynı rüzgârda bir bot daha vardı ama ona gemi yetişmedi. Onların hikâyesini bir gazete yazdı.",
"Hamburg'da bir eczanede çalışıyorsun, diploman altı yılda tanındı. Omar futbol oynuyor, sahada Almanca bağırıyor. Hiba Suriyeli çocuklara Arapça öğretiyor.",
"Bazı geceler rüyanda bir motor öksürüyor. Kalkıp çocukların odasına bakıyorsun, Omar yorganı tekmelemiş, üstünü örtüyorsun."
]},

son_deniz: { son: true, baslik: "Hamza", metin: [
P(S("t4A"), "“Burada,” demiştin, Yara da başını sallamıştı."),
P(S("t4B"), "“İkisinde de,” demiştin. Yara gülüp “Kolay cevap,” demişti ama kolay değildi."),
P(S("t4C"), "“Hiçbirinde,” demiştin, Yara da koluna girmişti."),
P(S("t4D"), "Ayakkabılarını çıkarmıştın, Yara da çıkardı. Bir dalga gelip ayaklarınıza değdi ve çekildi."),
"Kırk dört kişi kurtuldu ama Hamza kurtulmadı. Yeleğini Omar'a verdi, çünkü Omar'ınki sünger çıktı. Basmane'de o ucuz yeleği sen almıştın.",
"Bunu her gün kendine söylüyorsun. Bazen başka türlü söylüyorsun, Mesut satmasaydı, Cemil o gece göndermeseydi, rüzgâr dört beş olmasaydı, savaş olmasaydı diye. Her cümle doğru ama yük hep aynı.",
"Omar on yaşında ve Hamza'yı hatırlamıyor. Turuncu yelek onun dolabında duruyor. Bir gün “Bu kimin?” diye sordu, sen de anlattın. Omar yeleğe baktı. “O zaman ben onun yerine de yaşamalıyım, değil mi?” dedi ve ne diyeceğini bilemedin.",
"Yara mühendislik okuyor. Bir gün “Hamza Abi'nin kitabını ben bitireceğim,” dedi. Kitabın ıslak sayfalarını tek tek ayırmış.",
"Her yıl ağustosun on dokuzunda Hamza'nın annesine bir mesaj atıyorsun. Bir yıl karşılığında bir fotoğraf geldi. Hamza on yaşında, bir havuz kenarında, boynunda bir madalya, dişleri ağzına büyük."
]},

son_kalan: { son: true, baslik: "Kalan", metin: [
P(S("t4A"), "“Burada,” demiştin, Yara da başını sallamıştı."),
P(S("t4B"), "“İkisinde de,” demiştin. Yara gülüp “Kolay cevap,” demişti ama kolay değildi."),
P(S("t4C"), "“Hiçbirinde,” demiştin, Yara da koluna girmişti."),
P(S("t4D"), "Ayakkabılarını çıkarmıştın, Yara da çıkardı. Bir dalga gelip ayaklarınıza değdi ve çekildi."),
"İzmir'de kaldınız.",
P(function(d){ return d.kol === "bekle"; }, "Beklemiştin, bir dolandırıcıyla bir rüzgâr seni denizden uzak tuttu. Sonra o kumsal fotoğrafı geldi. Önce pişman oldun, sonra şükrettin, sonra da şükrettiğin için utandın."),
"Yara İzmir şivesiyle konuşuyor ve bir Türk üniversitesinde mühendislik okuyor. Kimlik kartında on yıldır hâlâ “geçici koruma” yazıyor.",
"Sen eczacı yardımcısısın, diplomanın denkliği hâlâ çıkmadı. Karşıyaka'daki yaşlılar reçetelerini önce sana gösteriyor. “Ahmed Bey bilir,” diyorlar.",
"Bazı akşamlar Kordon'da yürüyorsun, karşıda Karşıyaka var. Öbür kıyısı görünen bir suyu seviyorsun ama nedenini Yara'ya anlatamıyorsun."
]},

son_kagit: { son: true, baslik: "Kâğıt", metin: [
P(S("t4A"), "“Burada,” demiştin, Yara da başını sallamıştı."),
P(S("t4B"), "“İkisinde de,” demiştin. Yara gülüp “Kolay cevap,” demişti ama kolay değildi."),
P(S("t4C"), "“Hiçbirinde,” demiştin, Yara da koluna girmişti."),
P(S("t4D"), "Ayakkabılarını çıkarmıştın, Yara da çıkardı. Bir dalga gelip ayaklarınıza değdi ve çekildi."),
"O yüzde bir size çıktı. Bir mektup geldi, bir uçağa bindiniz, Toronto'ya vardınız.",
"Ne rüzgâr vardı ne de yelek, yalnızca kâğıt vardı.",
"Sizinle aynı sırada bekleyen yüzlerce aile hâlâ bekliyor. Neden siz? Belki bir memur sizin dosyanızı önce açtı, belki o ay kota boştu, belki eczacılar “risk altındaki meslek grubu” sayılıyordu.",
"Beş yıl sonra eczacılık lisansını aldın. Omar hokey oynuyor, bir dişi kırıldı ve bununla gurur duyuyor. Hiba yeni gelen Suriyeli ailelere yardım ediyor.",
"Bir gün bir aileye form doldurtuyorsun. Dokuzuncu sayfada bir kutucuk var: “Daha önce düzensiz yollarla bir sınırı geçmeye çalıştınız mı?” Sizin formunuzda o kutucuk boş kalmıştı."
]},

son_ayri: { son: true, baslik: "İki Kıyı", metin: [
P(S("t4A"), "“Burada,” demiştin, Yara da başını sallamıştı."),
P(S("t4B"), "“İkisinde de,” demiştin. Yara gülüp “Kolay cevap,” demişti ama kolay değildi."),
P(S("t4C"), "“Hiçbirinde,” demiştin, Yara da koluna girmişti."),
P(S("t4D"), "Ayakkabılarını çıkarmıştın, Yara da çıkardı. Bir dalga gelip ayaklarınıza değdi ve çekildi."),
"Bir aile bir minibüsün arka camında ikiye bölünmüştü.",
P(function(d){ return d.birlesim; }, "Aile birleşimi iki yıl sürdü. Havalimanında Omar seni tanımayıp Hiba'nın arkasına saklandı, sana “Papa” demesi bir haftayı buldu."),
P(function(d){ return d.bota_bindi; }, "Midilli'de üç yıl bir çadırda, bir telin arkasında kaldın. Ailen her yaz feribotla gelip bir otelde kaldı. Dördüncü yıl bir mahkeme kararı çıktı ve Hamburg'a gittin."),
P(function(d){ return d.geri_cagir || d.yara_ne; }, "Hiba gelmedi, sen de gitmedin. Biriniz Hamburg'da, biriniz İzmir'de, her pazar bir ekranın başında buluşuyorsunuz. Çocuklar her yaz bir ay İzmir'e geliyor ve bir babayı bir ayda tanımaya çalışıyorlar."),
"Hiba bir gün “Bizi bir denize gönderdin, o yüzden buradayız,” dedi. “İkisini aynı anda düşünebilmeyi öğrenmem yıllar sürdü.”",
"Omar da bir gün “Baba, o gece neden gelmedin?” diye sordu. Parayı, sırayı, botu anlattın, anladı. Sonra “Ben seni o camdan hatırlamıyorum ki,” dedi, “uyuyordum.”"
]}

},

ayna: function(d){
  var out = [];
  var u = d.umut, s = d.sorumluluk, t = d.temkin;
  if(u >= s && u >= t) out.push("Çoğu kavşakta karşı kıyıya, Samir'in sesine doğru gittin.");
  else if(s >= t) out.push("Çoğu kavşakta yanındakilere baktın, Hiba'ya, Ümmü Halil'e, odadaki on iki kişiye.");
  else out.push("Çoğu kavşakta hava raporuna, yeleğin etiketine, kâğıtlara baktın.");
  if(d.yelek === "sahte") out.push("Basmane'de ucuz yelekleri aldın.");
  if(d.yelek === "iyi") out.push("İyi yelekleri aldın, torbanın ağırlığından omzun acıdı.");
  if(d.umm_para) out.push("Ümmü Halil'e astardan bin dolar verdin.");
  if(d.dumen) out.push("Botun dümenine geçtin.");
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
