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
"İzmir, Basmane. Ağustos, öğle. Meydanda, otel girişlerinde, cami avlusunda insanlar; Arapça, Farsça, Kürtçe. Herkes bir telefona bakıyor. Bir adam bir prizi üç telefonla paylaşıyor, sırayla şarj ediyorlar.",
"Dükkân vitrinlerinde can yelekleri. Turuncu, sarı, kırmızı. Çocuk boyları da var. Pembe, üstünde çizgi film karakterleri.",
"Adın Ahmed, otuz sekiz yaşındasın. Halep'te, Salahaddin mahallesinde köşe başında bir eczanen vardı. Üç yıl önce bir varil bombası. Önce eczane, sonra ev.",
"Yanında Hiba. Karın, Arapça öğretmeni, yüzme bilmiyor. Yara. Yedi yaşında, Gaziantep'te bir yıl okula gitti, Türkçe sayıyor, bazen uykusunda. Omar. Üç yaşında, pantolonunun paçasını bırakmıyor.",
"Ceketinin astarında Hiba'nın diktiği bir cep: dört bin dolar. Evin parası, eczanenin dolapları, Hiba'nın bilezikleri.",
"Hamburg'da kardeşin Samir. İki yıl önce geçti. “Çabuk gel. Kapılar kapanıyor.”",
"Telefon titriyor. Bilinmeyen numara: “Cemil. Otel Yıldız, lobi. Saat beş.”"
], secenekler: [
{ t: "Önce can yeleklerine bakarsın. Ne olursa olsun, onlar lazım.", to: "a2", etki: { temkin: 1 } },
{ t: "Hiba ve çocuklarla parkta bir saat oturursun. Önce nefes.", to: "a2", etki: { sorumluluk: 1, park: true } },
{ t: "Samir'i arayıp bir kez daha ne yapacağını sorarsın.", to: "a2", etki: { umut: 1, samir_once: true } },
{ t: "Meydandaki bir aileye hangi kaçakçıyla gittiklerini sorarsın.", to: "a2", etki: { temkin: 1, soruşturdu: true } }
]},

a2: { saat: "Ağustos 2015", baslik: "Yelek", metin: [
P(S("a1A"), "Önce yeleklere gittiniz. Hiba çocukları gölgeden kaldırıp peşinden geldi; Omar yürümek istemedi, kucağına aldın."),
P(S("a1B"), "Parkta oturdunuz. Omar uyudu, Yara güvercinlere simit attı. Hiba başını omzuna koydu. Halep'ten beri bir saat hiçbir şey yapmadığınız ilk öğleden sonraydı."),
P(S("a1C"), "Samir telaşlıydı. “Bu hafta gel. Macaristan tel çekiyor.” Hiba yanında duydu. Parmaklarını eteğinin kumaşında gezdirdi."),
P(S("a1D"), "Bir baba sana üç isim verdi. İkisinin botu geçen hafta batmış. Üçüncüsü Cemil. “Botları yeni,” dedi. “Ama hava kötüyse de gönderir.”"),
"Meydanın köşesinde “Mesut Spor.” Tavana kadar yelek. Mesut, ellilerinde, terli, bir eli hep telefonda. Birkaç Arapça kelime: “Gel, gel. İyi. Ucuz.”",
"İki tür. Yirmi beş liralık: ince, parlak, içi belirsiz. Altmış liralık: kalın, etiketli, sertifika numaralı.",
"Dört yelek. Ucuzlarla yüz lira. İyilerle iki yüz kırk. Astardaki her dolar bir yere ayrılmış.",
"Mesut tereddüdünü görüyor. Eğilip Yara'ya bakarak, Türkçe, alçak sesle: “Bunlar batar. İçi sünger. Şunları al.”",
"Yara pembe flamingolu bir çocuk yeleğine bakıyor. Ucuzlardan."
], secenekler: [
{ t: "Dördü için de iyilerini alırsın. Ne pahasına olursa olsun.", to: "a3", etki: { temkin: 2, yelek: "iyi" } },
{ t: "Mesut'a sorarsın: “Batacağını biliyorsan neden satıyorsun?”", to: "x_mesut", etki: { sorumluluk: 1 } },
{ t: "Ucuzları alırsın. Para teknede lazım olacak.", to: "a3", etki: { umut: 1, yelek: "sahte" } },
{ t: "Yara'nın yanına çömelip hangisini istediğini sorarsın.", to: "x_yara", etki: { sorumluluk: 1 } }
]},

x_mesut: { saat: "Ağustos 2015", baslik: "Mesut", metin: [
"Mesut kapıyı kapatıp levhayı “Kapalı”ya çeviriyor.",
"“Biliyorum,” diyor. Türkçeyi Gaziantep'te öğrendin, anlıyorsun. “Otuz yıl eşofman sattım, forma sattım. Üç yıl önce biri yelek sordu. Sonra yüz kişi.”",
"“Toptancı iyi yelek bulamıyor. Sahteler geliyor, nereden bilmiyorum. Ben satmazsam karşı dükkân satıyor. Satmazsam kızımın okul parası yok.”",
"Duvarda bir fotoğraf: mezuniyet cüppeli bir kız, kepini havaya atmış.",
"“Her gece haberleri izliyorum. Bir bot batınca kaç çocuk, kimin yeleği vardı. Benim yeleklerim miydi? Bakmıyorum.”",
"Raftan iyi bir yelek alıyor, bebek boyu. Omar'ın boyu. “Bu benden. Para istemem.”"
], secenekler: [
{ t: "Yeleği alır, öbür üçü için de iyilerini satın alırsın.", to: "a3", etki: { temkin: 2, yelek: "iyi", mesut_hediye: true } },
{ t: "Yeleği alırsın. Öbürleri için ucuzlarını.", to: "a3", etki: { umut: 1, yelek: "karisik", mesut_hediye: true } },
{ t: "Yeleği geri verirsin: “Bunu başka bir çocuğa ver,” dersin.", to: "a3", etki: { sorumluluk: 2, yelek: "iyi", hediye_ret: true } },
{ t: "Mesut'a: “Sahteleri satmayı bırak,” dersin.", to: "a3", etki: { sorumluluk: 1, yelek: "iyi", mesut_bırak: true } }
]},

x_yara: { saat: "Ağustos 2015", baslik: "Flamingo", metin: [
"Yara'nın yanına çömeliyorsun. Pembe flamingolu yeleği iki eliyle tutuyor.",
"“Baba, bu.” Arapça. “flamingo” Türkçe, Gaziantep'te öğrenmiş. “Çok güzel.”",
"Etiketi yok. Parmağınla bastırınca çöküyor. Sünger.",
"“Yara, bu yelek ne için biliyor musun?”",
"“Denizde yüzmek için. Öğretmen anlattı. Yazın denize gidilir, yelek giyilir.”",
"“Deniz büyük mü baba? Öbür tarafını görebilir miyiz?”",
"Mesut tezgâhın arkasından bakıyor, bir şey demiyor. Telefonu çalıyor, açmıyor."
], secenekler: [
{ t: "Flamingoluyu alırsın. Altına bir iyi yelek giydireceksin.", to: "a3", etki: { sorumluluk: 1, temkin: 1, yelek: "iyi", flamingo: true } },
{ t: "Yara'ya gerçeği söylersin: bu yelek batar. Turuncuyu seçer.", to: "a3", etki: { temkin: 1, yelek: "iyi", yara_bildi: true } },
{ t: "Flamingolu yeleği alırsın. Yalnızca onu.", to: "a3", etki: { umut: 1, yelek: "sahte", flamingo: true } },
{ t: "“Deniz büyük ama öbür tarafını göreceğiz,” deyip iyi yelekleri alırsın.", to: "a3", etki: { umut: 1, yelek: "iyi" } }
]},

a3: { saat: "Ağustos 2015, 17.00", baslik: "Cemil", metin: [
P(function(d){ return d.yelek === "sahte"; }, "Dört yelek, yüz lira. Mesut yelekleri torbaya koyarken gözünü kaçırdı."),
P(function(d){ return d.yelek === "iyi"; }, "İyi yelekler. Kalın, ağır. Torbayı taşırken omzun acıdı. Astardan iki yüzlük eksildi."),
P(function(d){ return d.yelek === "karisik"; }, "Omar'ınki iyi, Mesut'un hediyesi. Öbürleri ucuz. Bir torbada iki tür yelek."),
"Otel Yıldız, arka sokakta. Lobide üç plastik koltuk, bir televizyon. Bir Türk dizisi, sesi kapalı. Koltuklardan birinde Cemil: kırklarında, gözlüklü, ütülü gömlek. Bir sigorta acentesi gibi.",
"“Kişi başı bin iki yüz dolar. Çocuklar yarım. Bebek bedava. Üç bin altı yüz. Bot yeni, kırk kişilik. Midilli yirmi kilometre. Hava iyiyse iki saat.”",
"Hesaplıyorsun. Yetiyor; Almanya'ya varınca hiçbir şey kalmayacak, ama yetiyor.",
"“Hava?”",
"Cemil telefonuna bakıyor. “Bu gece rüzgâr dört-beş. Bir hafta sonra sakin. Ama bir hafta sonra fiyat bin beş yüz. Almanya ne yapar, kimse bilmez.”",
"“Ben taksi şoförüyüm kardeşim. Bindiririm. Denizi ben yapmadım.”"
], secenekler: [
{ t: "Bu gece için yer ayırtırsın. Karar için bir saat istersin.", to: "a4", etki: { umut: 1, bu_gece: true } },
{ t: "Cemil'e geçen hafta batan botları sorarsın.", to: "a4", etki: { temkin: 1, sorgu: true } },
{ t: "Pazarlık edersin: çocuklar için daha az.", to: "a4", etki: { sorumluluk: 1, pazarlik: true } },
{ t: "Hiba'nın yüzüne bakarsın.", to: "a4", etki: { sorumluluk: 1, hibaya_bakti: true } }
]},

a4: { saat: "Ağustos 2015, akşam", baslik: "Oda", metin: [
P(S("a3A"), "“Bir saat,” dedin. “Yarım,” dedi Cemil, saatine bakmadan."),
P(S("a3B"), "Cemil gözlüğünü düzeltti. “Onlar başkasının botlarıydı. Çürük. Benimkiler sağlam.” Sustu. “Ama deniz denizdir.”"),
P(S("a3C"), "Cemil güldü. “Halep'te eczacı mıydın? Pazarlığı bilirsin.” Yüz dolar indirdi. Umursamadığı belliydi."),
P(S("a3D"), "Hiba'nın yüzünde bir şey yoktu. Sonra Arapça, alçak sesle: “Ben yüzme bilmiyorum Ahmed.” On iki yıllık evlilikte bunun bir gün önemli olacağını hiç düşünmemiştin."),
"Dördüncü katta bir oda. On iki kişi. Yer yatakları, bavullar, şarj kabloları. Prizin önünde sıra.",
"Bir köşede Afgan bir aile: Farid, karısı Zahra, sekiz aylık hamile. Pencerenin yanında Hamza. On dokuz, Halep'ten, yalnız, çantasında bir mühendislik kitabı. Kapının yanında yaşlı bir kadın: Ümmü Halil, Humus'tan.",
"Gece yarısı Ümmü Halil yanına geliyor. “Oğlum. Param yok. Oğullarım öldü. İsveç'te torunum var, doktor olmuş. Bana bin dolar yeter. Sende var mı?”",
"Var. Astarda. Almanya'da ilk ayın kirası, Yara'nın ayakkabısı.",
"Odadakiler uyuyor gibi yapıyor. Hamza'nın gözleri açık."
], secenekler: [
{ t: "Ümmü Halil'e bin doları verirsin.", to: "x_umm", etki: { sorumluluk: 2, umm_para: true } },
{ t: "“Yok teyze,” dersin.", to: "a5", etki: { temkin: 1, umm_ret: true } },
{ t: "Odadakileri uyandırıp Ümmü Halil için birlikte para toplamayı önerirsin.", to: "x_ortak", etki: { sorumluluk: 1, umut: 1 } },
{ t: "Samir'i arayıp Ümmü Halil için ondan borç istersin.", to: "a5", etki: { sorumluluk: 1, samir_borc: true } }
]},

x_umm: { saat: "Gece", baslik: "Ümmü Halil", metin: [
"Astarın dikişini sökerek on yüzlük çıkarıyorsun. Hiba izliyor. Yüzü sert.",
"Ümmü Halil parayı saymıyor. Avucunda tutup alnına götürüyor.",
"“Allah razı olsun.” Sonra anlatıyor. Yavaş, gecenin ortasında.",
"Kocası Humus'ta halı tüccarıymış. Üç oğlu: biri halıcı, biri öğretmen, biri asker. Asker olan önce gitmiş. Sonra öğretmen. Bir okulda. Sonra halıcı. Bir kontrol noktasında.",
"“Hepsini ben gömdüm. İsveç'teki torunum büyük oğlumun oğlu. Bebekken gitti. Bir kez görmek istiyorum.”",
"Hiba yaşlı kadının yanına oturuyor.",
"Ümmü Halil sana küçük bir bez kese uzatıyor. İçinde bir avuç toprak. “Humus'tan. Oğullarımın mezarından. Sen al. Senin de bir yere gömmen gereken bir şey olabilir.”"
], secenekler: [
{ t: "Keseyi alırsın.", to: "a5", etki: { sorumluluk: 1, kese: true } },
{ t: "“Bunu torununuza götürün,” dersin.", to: "a5", etki: { sorumluluk: 1 } },
{ t: "Hiba'dan bin dolar için özür dilersin.", to: "a5", etki: { sorumluluk: 1, hibaya_ozur: true } },
{ t: "Ümmü Halil'e bu gece aynı tekneye binmeyi önerirsin.", to: "a5", etki: { umut: 1, birlikte: true } }
]},

x_ortak: { saat: "Gece", baslik: "Ortak Kese", metin: [
"Işığı açıyorsun. On iki kişi gözlerini kısıyor. Arapça, kırık Türkçe, Hamza'nın İngilizcesiyle anlatıyorsun.",
"Hamza çantasından bir zarf çıkarıyor. Elli dolar. “Bu kadar. Gerisi tekne için.”",
"Farid Zahra'yla Farsça bir şey konuşuyor, yirmi dolar uzatıyor.",
"Kürt bir çift. İki çocuk. Adam yere bakıyor. “Bizim de yok.” Herkes biliyor ki yok.",
"Bir saat sonra bir şapkanın içinde iki yüz otuz dolar.",
"Ümmü Halil şapkaya bakıyor. Herkesin elini tek tek öpüyor; Kürt adam elini çekmeye çalışıyor, kadın bırakmıyor.",
"Yedi yüz yetmiş dolar eksik."
], secenekler: [
{ t: "Kalan yedi yüz yetmişi sen tamamlarsın.", to: "a5", etki: { sorumluluk: 2, umm_para: true } },
{ t: "İki yüz otuzla kalır. Bu odanın verebildiği bu.", to: "a5", etki: { temkin: 1, umm_kismi: true } },
{ t: "Cemil'i arayıp Ümmü Halil için indirim istersin.", to: "a5", etki: { sorumluluk: 1, cemil_ara: true } },
{ t: "Hamza'ya teşekkür edersin.", to: "a5", etki: { umut: 1, hamza_yakin: true } }
]},

a5: { saat: "Ağustos 2015, gece", baslik: "Samir", metin: [
P(S("x_ummA"), "Keseyi aldın. Astarın içine, kalan paranın yanına koydun."),
P(S("x_ummB"), "Ümmü Halil keseyi göğsüne bastırdı. “Haklısın. Onu da ben gömeyim.”"),
P(S("x_ummC"), "Hiba elini kaldırdı. “Özür dileme. Ama bu gece hesap yapan sen olma.” Ne demek istediğini sonra anlayacaktın."),
P(S("x_ummD"), "Ümmü Halil yüzüne uzun uzun baktı. “Senin teknen benim teknem olsun.” Hiba başını çevirdi."),
P(S("x_ortakA"), "Kalanı sen tamamladın. Ümmü Halil parayı iki kez saydı. Odadan biri bir şey mırıldandı. Teşekkür mü kıskançlık mı, anlamadın."),
P(S("x_ortakB"), "İki yüz otuz dolar. Işığı kapattın. Karanlıkta şapkanın hışırtısı."),
P(S("x_ortakC"), "Cemil güldü. “Deniz indirim yapar mı kardeşim?” Kapattı. Beş dakika sonra mesaj: “Yaşlıya üç yüz eksik. Kimseye söyleme.”"),
P(S("x_ortakD"), "Hamza kızardı. “Babam olsa o da verirdi.” Babasının nerede olduğunu sormadın."),
P(function(d){ return d.samir_borc; }, "Samir dinledi. “Kardeşim, ben de kirada oturuyorum. Ama tamam. Yarın.” Ümmü Halil Samir için dua etti. Adını iki kez sordu, yanlış telaffuz etti."),
P(function(d){ return d.umm_ret; }, "“Allah yardımcın olsun,” dedi Ümmü Halil. Kapının yanına döndü. Gece boyunca fısıltıyla dua ettiğini duydun. Hiba bir şey demedi. Elini bileğine koydu."),
"Gece ikide Samir'den sesli mesaj. Arkada Almanca haberler.",
"“Ahmed. Macaristan tel örgü çekiyor. Avusturya düşünüyor. Almanya şimdilik açık. Bu gece gel. Ne olursa olsun bu gece.”",
"Hiba dinliyor. Omar kucağında uyuyor.",
"“Bu gece rüzgâr var,” diyor Hiba. Korktuğunda daha da sakin konuşur. “Ben deniz bilmem. Rüzgârı bilirim. Halep'te rüzgârlı gecelerde çatıdaki çanak antenler uçardı.”",
"“Bir hafta beklersek...”",
"“Almanya kapanabilir. Otel parası. Cemil bin beş yüz ister.” Durdu. “Sen eczacıydın. Doz hesaplardın. Hesapla.”"
], secenekler: [
{ t: "“Hesaplanamaz Hiba,” dersin.", to: "a6", etki: { temkin: 1, hesaplanamaz: true } },
{ t: "Rakamları yüksek sesle hesaplarsın: para, gün, rüzgâr, Almanya.", to: "a6", etki: { temkin: 1, umut: 1, hesapladi: true } },
{ t: "Hiba'ya sorarsın: “Sen ne istiyorsun?”", to: "a6", etki: { sorumluluk: 1, hibaya_sordu: true } },
{ t: "Uyuyan Omar'a bakarsın.", to: "a6", etki: { sorumluluk: 1, omara_bakti: true } }
]},

a6: { saat: "Ağustos 2015, 03.00", baslik: "Hava Raporu", metin: [
P(S("a5A"), "Hiba gözlerini kapattı. “O zaman sen seç. Ben seçersem ömür boyu sana yüklerim.”"),
P(S("a5B"), "Üç bin dolar. Bir hafta otel, iki yüz. Bin beş yüz. Rüzgâr dört-beş, sonra iki. Rakamlar odada asılı kaldı. Hiçbirinde Omar'ın kilosu yoktu."),
P(S("a5C"), "Hiba düşündü. “Yara'nın bir okula gitmesini istiyorum. On yıl aynı okula. Bir yerde kalmak istiyorum. Neresi olduğu umurumda değil artık.”"),
P(S("a5D"), "Omar uyuyordu, ağzı açık, bir eli Hiba'nın göğsünde. Halep'i hatırlamıyor. Gaziantep'te bir bahçeyi, bir kediyi hatırlıyor."),
"Saat üç. Hava raporu: Ege, gece yarısından sonra kuzey rüzgârı dört-beş, sabaha doğru üç. Bir hafta sonra bir-iki, deniz düz.",
"Cemil: “Bu gece beşte. Minibüs otelin önünde. Gelmezseniz sıranız gider. Kapora iade yok.”",
"Hamza yanına geliyor. “Ben bu gece gidiyorum. Siz gelirseniz yanınızdayım. Hiba Abla yüzme bilmiyorsa ben bilirim. Halep'te yüzme takımındaydım.” On dokuz yaşında bir gülümseme.",
"Kimsenin söylemediği bir şey: Türkiye'de kalabilirsin. Geçici koruma, bir kimlik, bir iş, bir okul. Gaziantep'te bir yıl yaşadınız. Bir de bedeli: hep misafir olmak.",
"Bir de en karanlığı: Hiba ve çocuklar bu gece Hamza'yla gider. Sen kalır, para biriktirir, sonra gelirsin.",
"Saat üçü beş geçiyor. Omar uyuyor. Yüzü yeleğin turuncusuna dönük."
], secenekler: [
{ t: "Bu gece gidersiniz, hep birlikte. Rüzgâr dört-beş. Ama bir hafta sonra bu kaçakçı, bu para, bu kıyı olmayabilir.", to: "s1", etki: { umut: 2, kol: "deniz" } },
{ t: "Bir hafta beklersiniz. Deniz sakinleşir. Ama paranın, Cemil'in, sınırın bir hafta sonra ne olacağını bilmiyorsun.", to: "w1", etki: { temkin: 2, kol: "bekle" } },
{ t: "Gitmezsiniz. Türkiye'de kalıp BM'ye yeniden yerleşim başvurusu yaparsınız. Yüzde bir ihtimal. Ama kimse boğulmaz.", to: "r1", etki: { temkin: 1, sorumluluk: 1, kol: "kalis" } },
{ t: "Hiba ve çocuklar bu gece Hamza'yla gider. Sen kalıp para biriktirir, sonra gelirsin. Aileni bir denizle bir kaldırım arasında bölerek.", to: "p1", etki: { sorumluluk: 1, umut: 1, kol: "ayri" } }
]},

/* ---------- DENİZ KOLU ---------- */
s1: { saat: "Ağustos 2015, 05.00", baslik: "Kıyı", metin: [
"Bir minibüs, otuz kişi, karanlık. Çeşme yolu, sonra bir köy yolu, sonra bir patika. “İnin. Hızlı. Ses yok.”",
"Zeytinlikler, kayalar, bir kumsal. Deniz görünmüyor, duyuluyor. Karşıda birkaç ışık: Midilli mi, bir gemi mi?",
"Cemil'in adamları botu şişiriyor. Yeni. Ama kırk kişilik dedikleri bot yirmi beş kişiye göre. Kumsalda kırk beş kişi.",
"Herkes yeleklerini giyiyor. Omar ağlıyor. Yelek kulaklarına kadar geliyor. Yara sessiz. Elin elinde, avucu terli.",
P(function(d){ return d.flamingo; }, "Yara'nın üstünde pembe flamingo. Altında ne aldıysan."),
"Adam motoru takıyor. Karanlıkta yüzlere bakıyor. Sana geliyor.",
"“Sen. Sakin görünüyorsun. Motoru sen kullanacaksın. Şu kol gaz. Işıklara doğru düz git. Sahil güvenlik gelirse dur. Karaya varınca botu bıçakla kes, batır. Geri göndermesinler.”",
"Eline bir motor kolu tutuşturuyor. Plastiği yapış yapış. Hiç tekne kullanmadın."
], secenekler: [
{ t: "Kabul edersin. Başka seçenek yok.", to: "s2", etki: { sorumluluk: 2, dumen: true } },
{ t: "Hamza'ya verirsin. Genç, güçlü, yüzme biliyor.", to: "s2", etki: { temkin: 1, dumen_hamza: true } },
{ t: "Adamdan başkasını seçmesini istersin. Senin işin ailen.", to: "s2", etki: { temkin: 1, dumen_ret: true } },
{ t: "Kabul edersin. Önce Ümmü Halil'i ve Zahra'yı ortaya, en güvenli yere oturtursun.", to: "s2", etki: { sorumluluk: 2, dumen: true, yerlesim: true } }
]},

s2: { saat: "Deniz, 06.10", baslik: "Motor", metin: [
P(S("s1A"), "Dümene geçtin. Motorun titreşimi dirseklerine kadar çıktı."),
P(S("s1D"), "Ümmü Halil'i ve Zahra'yı ortaya oturttun. Yaşlı kadın dua mırıldandı, Zahra Farid'in kolunu sıktı. Sonra dümene geçtin."),
P(function(d){ return d.dumen_hamza || d.dumen_ret; }, "Hamza motoru aldı. “Fırat'ta kayık kullanmıştım,” dedi. Yalan olabilirdi. Herkes inanmak istedi."),
"Bot kıyıdan ayrılıyor. Dalgalar önce küçük, sonra büyük. Kuzey rüzgârı yandan vuruyor. Su içeri sıçrıyor. Tuzlu, soğuk.",
"Bir saat. Kıyının ışıkları küçüldü; Midilli'ninkiler büyüdü.",
"Sonra motor öksürüyor. Bir. İki. Duruyor.",
"Rüzgârdan başka ses yok. Bot dönmeye başlıyor. Su artık sıçramıyor, akıyor.",
"Biri bağırıyor: “Batıyoruz!” İnsanlar ayağa kalkıyor. Bot yalpalıyor. Bir çanta denize düşüyor, bir süre yüzüyor, sonra gözden kayboluyor.",
"Hamza motorun ipini çekiyor, çekiyor. Farid bir numarayı arıyor. Çekmiyor. Ümmü Halil yüksek sesle dua ediyor. Sesi titremiyor.",
"Hiba Omar'ı göğsüne bastırmış. Yara kolunda. Su ayak bileklerinde."
], secenekler: [
{ t: "Herkese oturmasını bağırırsın; Arapça, Türkçe, İngilizce.", to: "s3", etki: { sorumluluk: 2, sakinlestirdi: true } },
{ t: "Çantaları denize atmaya başlarsın. Bot hafiflesin.", to: "s3", etki: { temkin: 1, atti: true } },
{ t: "Samir'in dün gönderdiği Yunan sahil güvenliği numarasını ararsın.", to: "s3", etki: { temkin: 2, aradi: true } },
{ t: "Motoru Hamza'dan alıp kendin çalıştırmaya çalışırsın.", to: "s3", etki: { umut: 1, motor: true } }
]},

s3: { saat: "Deniz, 06.40", baslik: "Işık", metin: [
P(S("s2A"), "Üç dilde bağırdın. İnsanlar tek tek oturdu. Bot yalpalamayı bıraktı. Tam değil, ama bıraktı."),
P(S("s2B"), "Çantalar, bavullar. Ümmü Halil'in bavulu. İçinde kocasının dükkânından bir halı. Ümmü Halil bavulun batışını izledi, bir şey demedi."),
P(S("s2C"), "Çekmedi. Bir daha. Üçüncüde İngilizce, Yunan aksanlı bir ses: “Hellenic Coast Guard.” Konum. Kırk beş kişi. Çocuklar."),
P(S("s2D"), "Kapağı açtın. Yakıt hortumuna su girmiş. Söktün, ağzınla çektin, benzini tükürdün, taktın. Motor öksürdü, yarım dakika çalıştı, durdu. Yarım dakika."),
"Su dizlere kadar. Bir dalga botun yanını yırtıyor. Bir ses, kumaş yırtılır gibi. Bot yana yatıyor.",
"Sonra herkes suda.",
"Yara'nın elini tutuyorsun. Hiba Omar'la suda. Yüzme bilmiyor. Yelek onu tutuyor.",
P(function(d){ return d.yelek === "sahte"; }, "Sonra görüyorsun: Yara'nın flamingolu yeleği su çekiyor. Ağırlaşıyor. Omar'ınki de. Sünger."),
P(function(d){ return d.yelek === "sahte"; }, "Hamza yanında beliriyor. Kendi yeleğini çıkarıp Omar'a geçiriyor. Yara'yı senin koluna itiyor. Sonra bir dalga."),
P(function(d){ return d.yelek !== "sahte"; }, "Yelekler tutuyor. Yara'nın yüzü suyun üstünde. Ağzı açık, nefes alıyor. Hiba'nın kucağında Omar, bağırıyor. Bağırması iyi, diyorsun içinden."),
"Bir projektör. Bir motor sesi. Gri bir gemi, Yunan bayrağı.",
"Eller. Bir battaniye. Sıcak çay, bir plastik bardakta. Bir asker Yara'yı kucağına alıp Yunanca bir şey söylüyor. Yara ağlamıyor. Titriyor."
], secenekler: [
{ t: "Herkesi sayarsın. Kırk beş olmalı.", to: "t1", etki: function(d){ d.sorumluluk++; d.saydi = true; if(d.yelek === "sahte") d.hamza_kayip = true; } },
{ t: "Hiba'yı, Yara'yı, Omar'ı kucaklarsın.", to: "t1", etki: function(d){ d.umut++; if(d.yelek === "sahte") d.hamza_kayip = true; } },
{ t: "Denize bakarsın. Hâlâ biri orada mı?", to: "t1", etki: function(d){ d.sorumluluk++; d.denize_bakti = true; if(d.yelek === "sahte") d.hamza_kayip = true; } },
{ t: "Ümmü Halil'i ararsın.", to: "t1", etki: function(d){ d.sorumluluk++; d.umm_aradi = true; if(d.yelek === "sahte") d.hamza_kayip = true; } }
]},

/* ---------- BEKLEME KOLU ---------- */
w1: { saat: "Ağustos 2015", baslik: "Bir Hafta", metin: [
"Cemil'e mesaj: “Bir hafta sonra.” Cevap: “Bin beş yüz. Kapora beş yüz. Yarın.”",
"Saat beşte minibüs geliyor. Hamza, Farid, Zahra, Ümmü Halil biniyor. Kapıda Hamza sarılıyor. “Hamburg'da çay benden.”",
"Oda boşalıyor. Dört kişi ve sekiz boş yer yatağı.",
"Ertesi sabah Basmane'deki Suriyelilerin WhatsApp grubunda bir mesaj: “Dün gece Çeşme açıklarında bir bot. Kırk beş kişi. Yunan sahil güvenliği kurtarmış. Hepsi sağ.”",
"Rahatlıyorsun. Sonra içinde başka bir şey kıpırdıyor. Onlar geçti, sen bir otel odasındasın.",
"Üç gün sonra kaporayı götürüyorsun. Lobi boş. Resepsiyondaki adam omuz silkiyor: “Cemil Bey? Dün gitti. Polis geldi.” Kaporayı aldığı adam telefonunu açmıyor. Beş yüz dolar."
], secenekler: [
{ t: "Polise gidersin.", to: "w2", etki: { temkin: 1, polis: true } },
{ t: "Hemen başka bir kaçakçı ararsın.", to: "w2", etki: { umut: 1, baska: true } },
{ t: "Hiba'ya söylersin. Saklamadan.", to: "w2", etki: { sorumluluk: 1, hibaya_soyledi: true } },
{ t: "Kimseye söylemezsin. Bir yolunu bulursun.", to: "w2", etki: { temkin: 1, sakladi: true } }
]},

w2: { saat: "Eylül 2015", baslik: "Atölye", metin: [
P(S("w1B"), "Bir haftada üç adam: biri yelek de satıyordu, biri çocuklar için ek ücret istedi, biri telefonunu kapattı. Para azaldı."),
P(S("w1D"), "Hiba sordu: “Kapora ne oldu?” “Verdim,” dedin. Doğruydu. Kime verdiğini söylemedin."),
P(S("w1A"), "Karakolda bir memur dinledi. “Kaçakçılık. Siz de suça ortak oldunuz kardeşim.” Tutanak tutmadı."),
P(S("w1C"), "Hiba dinledi. Omar'ı yere bırakıp pencereye gitti. Sonra döndü: “Çalışacağız. İkimiz de.”"),
"Dört bin dolar artık bin beş yüz. Bir kaçakçıya yetmiyor.",
"Bornova'da bir tekstil atölyesi. Bodrum katı, kırk makine, kırk Suriyeli, pencere yok. Günde on iki saat, haftada altı gün. Ayda bin iki yüz lira. Sigortasız.",
"Ütü masasının başındasın. Buhar, sıcak. İlk hafta sol bileğinde iki yanık.",
"Atölye sahibi Hakan Bey bir gün seni çağırıyor. “Kızın kaç yaşında? Burada çocuklar da çalışıyor. İplik keser, etiket diker. Günde yirmi lira.”",
"Köşedeki masada üç çocuk iplik kesiyor. Biri Yara'nın yaşında. Makası iki eliyle tutuyor."
], secenekler: [
{ t: "“Hayır. Kızım okula gidecek,” dersin.", to: "w3", etki: { sorumluluk: 2, okul: true } },
{ t: "Bir ay için kabul edersin. Yalnızca bir ay. Para biriksin diye.", to: "w3", etki: { umut: 1, yara_calisti: true } },
{ t: "İplik kesen çocukların aileleriyle konuşursun.", to: "w3", etki: { sorumluluk: 1, aileler: true } },
{ t: "Hakan Bey'i bir derneğe şikâyet edersin. İşini kaybetme pahasına.", to: "r2", etki: { sorumluluk: 2, sikayet: true, kol: "kalis" } }
]},

w3: { saat: "Eylül 2015", baslik: "Kırmızı Tişört", metin: [
P(S("w2C"), "Aileleri buldun. Biri kapıyı yüzüne kapattı. Biri ağladı: “Ne yapalım, ekmek.” Biri çay koydu, bir şey demedi."),
P(S("w2A"), "Hakan Bey omuz silkti. Yara ertesi hafta bir okula başladı. İlk gün bir resim getirdi: bir ev, bir ağaç, bir deniz. Denizin öbür tarafı boş."),
P(S("w2B"), "Yara bir ay çalıştı. Akşamları parmakları kızarık. Sonra okula yazdırdın. Öğretmen sordu: “Ellerine ne oldu?” Yara cevap vermedi."),
"Bir eylül sabahı atölyede herkes telefonuna bakıyor. Bodrum'da bir kumsal. Kıyıda yüzüstü küçük bir çocuk. Kırmızı tişört, mavi şort. Üç yaşında.",
"Kırk makine duruyor. Bir kadın ağlamaya başlıyor.",
"Omar'ın da kırmızı bir tişörtü var; Gaziantep'te bir pazardan.",
"O gece Omar'ı uyurken izliyorsun. Bekledin. Bir dolandırıcı, bir rüzgâr raporu, bir hafta. Şimdi bu çocuk yatağında."
], secenekler: [
{ t: "Bir daha bot düşünmemeye karar verirsin. Burada kalacaksınız.", to: "t1", etki: { temkin: 2, kal_karar: true } },
{ t: "Hiba'yla fotoğrafa bakıp ağlarsınız.", to: "t1", etki: { sorumluluk: 1 } },
{ t: "Samir'i arayıp yasal bir yol olup olmadığını sorarsın.", to: "t1", etki: { temkin: 1, yasal: true } },
{ t: "Omar'ın kırmızı tişörtünü dolaba kaldırırsın.", to: "t1", etki: { sorumluluk: 1, tisort: true } }
]},

/* ---------- KALIŞ KOLU ---------- */
r1: { saat: "Eylül 2015", baslik: "Kayıt", metin: [
"Cemil'e cevap vermiyorsun. Saat beşte minibüs gidiyor. Kapıda Hamza sana bakıyor. Bir soru. “Hamburg'da görüşürüz,” diyor yine de.",
"Ertesi hafta İl Göç İdaresi. Sabah altıdan beri yüzlerce kişi. Numara: 347. Sıra öğleden sonra üçte geliyor.",
"Yorgun, kibar bir memur. Parmak izi, fotoğraf, adres. Dört kart. Omar parmak izi verirken gülüyor. Mürekkep gıdıklıyor.",
"Başka bir masa: BM Mülteciler. Yeniden yerleşim başvurusu, on iki sayfa. Halep, eczane, varil bombası, Gaziantep, İzmir. Kutucuklar.",
"“Bekleme süresi?”",
"Görevli duraksıyor. “Belirsiz. Yüzde birin altında. Ama sıfır değil.”"
], secenekler: [
{ t: "Bornova'da bir ev kiralarsın. Burada bir hayat kurmaya başlayacaksınız.", to: "r2", etki: { temkin: 1, ev: true } },
{ t: "Bir eczanede iş ararsın. Ne olursa.", to: "r2", etki: { umut: 1, eczane: true } },
{ t: "Hamza'ya mesaj atıp vardı mı diye sorarsın.", to: "r2", etki: { sorumluluk: 1, hamzaya: true } },
{ t: "Formun bir kopyasını alıp her gece okursun.", to: "r2", etki: { umut: 1, form: true } }
]},

r2: { saat: "2016", baslik: "Okul", metin: [
P(S("r1A"), "Bornova'da iki oda, nemli. Pencereden bir çam. Yara ağacın adını sordu. Türkçe öğrendiği ilk kelime: çam."),
P(S("r1D"), "Formun kopyası yastığın altında. Her gece aynı cümle: “Değerlendirme süreci uzun sürebilir.”"),
P(function(d){ return d.sikayet; }, "Şikâyetin bir derneğe ulaştı. Atölye denetlendi. Sen işini kaybettin. Derneğin avukatı seni geçici koruma kaydına, BM başvurusuna, bir eczanedeki kayıt dışı bir işe yönlendirdi."),
P(S("r1C"), "Hamza ertesi gün bir fotoğraf gönderdi: Midilli, ıslak saçlar. “Vardık. Herkes sağ. Ümmü Halil bile.” Rahatladın. Bir de adını koymak istemediğin bir şey hissettin."),
P(S("r1B"), "Karşıyaka'da bir eczane. Kayıt dışı. Eczacı Nilgün Hanım, yetmişlerinde. İlk gün bir reçetede bir etkileşim fark edip söyledin. Nilgün Hanım gözlüğünün üstünden baktı. “Eczacı mıydınız?” Ertesi gün maaşını artırdı."),
"Bir yıl. Yara üçüncü sınıfta. Türkçesi senden iyi; Arapçayı unutmaya başladı. Omar kreşte. Hiba bir dernekte Suriyeli kadınlara Türkçe öğretiyor. Kendi Türkçesi zayıf, ama öğretiyor.",
"Bir akşam Yara'nın öğretmeni Feyza Hanım seni çağırıyor. Bir resim: bir sınıf, köşede yüzü olmayan bir çocuk.",
"“Yara çok başarılı. Ama arkadaşı yok. Bir çocuk ona ‘Suriyeli, ülkene dön’ demiş. Yara bir şey dememiş. Bu resmi çizmiş.”",
"“Ailesiyle konuştum. Ama bu ilk değil, son da olmayacak.”"
], secenekler: [
{ t: "Yara'yla konuşursun. Onun yaşında bir dille.", to: "r3", etki: { sorumluluk: 1, yarayla: true } },
{ t: "O çocuğun ailesiyle sen de konuşmak istersin.", to: "r3", etki: { sorumluluk: 1, aile_konus: true } },
{ t: "Feyza Hanım'a teşekkür edip başka bir okul ararsın.", to: "r3", etki: { temkin: 1, okul_degis: true } },
{ t: "Eve dönüp BM formunu yeniden okursun.", to: "r3", etki: { umut: 1, form2: true } }
]},

r3: { saat: "2018", baslik: "Mülakat", metin: [
P(S("r2C"), "Başka bir okul aradın. Yara itiraz etti: “Ama Feyza Hoca'yı seviyorum.” Bir ay sonra yeni okulda aynı kelimeyi duydu."),
P(S("r2D"), "Formu okudun. Yara'nın okulundan gelen kâğıdı yanına koydun."),
P(S("r2A"), "Balkonda Yara sordu: “Baba, ben Türk müyüm, Suriyeli miyim?” “İkisi,” dedin. Yara düşündü. “İkisi olunca hiçbiri olmuyor.” Dokuz yaşında."),
P(S("r2B"), "Çocuğun babası Sivaslı bir inşaat işçisiydi. Bir kahvede oturdunuz. “Babam altmışlarda Almanya'ya gitmişti,” dedi. “Ona da ‘Türk, ülkene dön’ demişler.” Oğluna ne diyeceğini bilmiyordu. Sen de."),
"İki yıl sonra bir telefon. BM. Ankara'da mülakat.",
"Bir Kanadalı görevli, bir tercüman, üç saat. Her şeyi yeniden anlatıyorsun.",
"Bir ay sonra bir mektup. Toronto. Bir ev, dil kursu, bir yıllık destek. Kalıcı oturum.",
"Yüzde bir. Size düştü.",
"Ama Nilgün Hanım'ın eczanesinde artık bir yerin var. Yara'nın bir arkadaşı oldu sonunda. O Sivaslı çocuk. Omar'ın Arapçası yok. Hiba'nın derneğinde altmış kadın.",
"Yara'nın şiir defteri masada, açık."
], secenekler: [
{ t: "Kanada'ya gidersiniz.", to: "t1", etki: { umut: 2, kanada: true } },
{ t: "İzmir'de kalırsınız.", to: "t1", etki: { temkin: 1, sorumluluk: 1, kaldi: true } },
{ t: "Hiba'ya ve Yara'ya sorarsın. Onlar karar versin. Kararın ağırlığını bir çocuğa yükleme pahasına.", to: "t1", etki: function(d){ d.sorumluluk++; d.aile_karar = true; d.kaldi = true; } },
{ t: "Nilgün Hanım'a danışırsın.", to: "t1", etki: function(d){ d.temkin++; d.nilgun = true; d.kanada = true; } }
]},

/* ---------- AYRI KOL ---------- */
p1: { saat: "Ağustos 2015, 05.00", baslik: "İskele", metin: [
"Minibüs otelin önünde. Hiba, Yara, Omar, Hamza. Sen binmeyeceksin.",
"Astarı söküp üç kişilik parayı Hiba'ya veriyorsun. Kalan sende. Bir sonraki bot için.",
"Hiba'nın yüzü kâğıt gibi. “Ahmed, ben yüzme bilmiyorum.”",
"“Hamza biliyor.” Hamza ciddi. “Ben onlara bakarım Ahmed Abi.”",
"Yara sarılıyor. “Baba neden gelmiyorsun?” Para, sıra, bot. Anlamıyor. “Hamburg'da amcanın evinde görüşürüz.”",
"Omar Hiba'nın kucağında uyuyor. Uyandırmıyorsun.",
"Minibüs kalkıyor. Arka camda Yara'nın eli.",
"Sabah beşte Basmane'de bir kaldırım. Astarın hafif."
], secenekler: [
{ t: "Otele dönüp telefonunu elinden bırakmadan beklersin.", to: "p2", etki: { sorumluluk: 1, bekledi: true } },
{ t: "Minibüsün arkasından koşarsın.", to: "p2", etki: { umut: 1, kostu: true } },
{ t: "Camiye gidip sabah namazına durursun.", to: "p2", etki: { temkin: 1, cami: true } },
{ t: "Bornova'daki atölyeye gidip o sabahtan çalışmaya başlarsın.", to: "p2", etki: { temkin: 1, calisma: true } }
]},

p2: { saat: "Ağustos 2015", baslik: "Sessizlik", metin: [
P(S("p1A"), "Otele döndün. Odada altı kişi kalmıştı. Hiba'nın yer yatağında Omar'ın bir çorabı."),
P(S("p1C"), "Secdede alnın halıya değdi ve kalkmak istemedin."),
P(S("p1D"), "Atölyede makinenin sesi kafanın içindekini bastırsın diye ütüye bastın."),
P(S("p1B"), "Koştun. İki sokak, üç. Minibüs bir köşeyi döndü. Bir fırıncı kepenk açıyordu. Sana baktı, bir şey sormadı."),
"Saat altı. Yedi. Sekiz. Telefon sessiz.",
"Hiba'nın telefonu kapalı. Denizde kapatmak gerekiyormuş.",
"Saat on. Grupta mesajlar: “Çeşme açıklarında bir bot.” “Bir bot batmış, kaç kişi bilinmiyor.”",
"Hangi bot?",
"Saat on bir. Ekranı her otuz saniyede bir yeniliyorsun. Şarj yüzde dokuz.",
"On iki kırk. Bilinmeyen bir Yunan numarası. Bir fotoğraf: bir battaniye, ıslak saçlar, Yara. Arkasında Hiba, Omar kucağında. Bir köşede Hamza.",
"Altında Arapça: “Vardık. Herkes sağ. Gel Ahmed. Çabuk gel.”"
], secenekler: [
{ t: "Otel odasında tek başına ağlarsın.", to: "p3", etki: { umut: 1, agladi: true } },
{ t: "Hemen Cemil'i arayıp bir sonraki botu sorarsın.", to: "p3", etki: { umut: 2, hemen: true } },
{ t: "Hamza'ya bir teşekkür mesajı yazarsın.", to: "p3", etki: { sorumluluk: 1, hamza_tesekkur: true } },
{ t: "Fotoğrafı büyütüp Omar'ın yüzüne bakarsın. Ona veda edemedin.", to: "p3", etki: { sorumluluk: 1, omar_yuz: true } }
]},

p3: { saat: "Kasım 2015", baslik: "Tel", metin: [
P(S("p2A"), "Ağladın. Sonra yüzünü yıkadın. Şarj aletini prize taktın, telefonu yanına koyup uyudun."),
P(S("p2B"), "“Bin beş yüz,” dedi Cemil. “Ama şimdi değil. Kıyılar sıkı.” Elinde bin iki yüz vardı."),
P(S("p2C"), "Hamza'nın cevabı bir fotoğraftı: Omar onun omuzlarında, bir kumsalda. “Oğlun beni yordu.”"),
P(S("p2D"), "Omar uyuyordu. Ona veda edememiştin. O da sana."),
"Bir ay atölye, bir ay daha. Bin iki yüz. Cemil artık bin beş yüz istiyor.",
"Hiba ve çocuklar Midilli'den Atina'ya, Makedonya'ya, Sırbistan'a, Hırvatistan'a. Her gün bir fotoğraf: bir tren, bir çadır, bir sınır. Hamza hep bir köşede.",
"Ekimde Hamburg. Yara bir Alman okul sırasında, yeni bir çanta. Hiba bir pencerenin önünde.",
"Kasımda haberler: Balkan rotası kapandı. Türkiye ile Avrupa Birliği bir anlaşma konuşuyor: adalara geçenler geri gönderilecek.",
"Bin beş yüzün var. Botun öbür tarafında artık yol yok.",
"Hiba görüntülü arıyor. Arkada Yara Almanca ödev yapıyor. “Ahmed, aile birleşimi diye bir şey varmış. Kâğıtla. Belki bir yıl, belki iki. Bota binme. Lütfen.”"
], secenekler: [
{ t: "Aile birleşimi için başvurursun. Bekleyeceksin.", to: "t1", etki: { temkin: 2, birlesim: true } },
{ t: "Bota binersin. Kamp da olsa, onlara bir deniz daha yakın.", to: "t1", etki: { umut: 2, bota_bindi: true } },
{ t: "Hiba'ya “Sen çocukları al gel, burada yaşayalım,” dersin.", to: "t1", etki: { sorumluluk: 1, geri_cagir: true } },
{ t: "Yara'yla konuşmak istersin. Ne istediğini.", to: "t1", etki: { sorumluluk: 1, yara_ne: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Bir yıl sonra", baslik: "Sonra", metin: [
P(S("s3A"), "Saydın; Arapça, Türkçe, parmaklarınla. Her seferinde başka bir sayı. Bir asker omzuna dokundu: “Okay, okay.” Saymayı bırakamadın."),
P(S("s3B"), "Hiba'yı, Yara'yı, Omar'ı kucakladın. Omar'ın yeleği ıslak ve ağırdı. Dördünüz bir battaniyenin altında titrediniz."),
P(S("s3C"), "Denize baktın. Turuncu bir leke gördüğünü sandın. Gemi döndü, leke kayboldu. O lekeyi yıllarca gördün."),
P(S("s3D"), "Ümmü Halil güvertenin köşesinde, battaniyenin içinde dua ediyordu. “Vardık mı oğlum?” Daha değil, dedin."),
P(S("w3A"), "Hiba'ya söyledin. Bir şey demedi. O gece aylardan sonra derin uyudu. Sabah sen onu uyandırdın."),
P(S("w3B"), "Fotoğrafa birlikte baktınız. Omar uyanıp yanınıza geldi. Kırmızı tişörtüyle. İkiniz birden sarıldınız. Ne olduğunu anlamadı."),
P(S("w3C"), "“Aile birleşimi var,” dedi Samir, “ama önce benim oturumum kalıcı olmalı. İki yıl, belki üç.”"),
P(S("w3D"), "Tişörtü dolabın en arkasına kaldırdın. Omar aradı, bulamadı, ağladı. Ona yeşil bir tişört aldın. Üstünde bir dinozor."),
P(S("r3A"), "Nilgün Hanım'ın gözleri doldu. “Gidin. Ama Yara'nın Türkçesi unutulmasın.”"),
P(S("r3B"), "Mektubu bir çekmeceye koydun. Hiba bir gece çekmeceyi açıp okudu, geri koydu."),
P(S("r3C"), "Hiba Kanada dedi. Yara ağladı: okulu, arkadaşları, Türkçe şiirleri. Hiba Yara'ya bakarak “Kalalım,” dedi. Kararı bir çocuk verdi."),
P(S("r3D"), "Nilgün Hanım düşündü. “Ben olsam giderdim. Burada sizi hep misafir sayacaklar.” Kanada'yı seçtin."),
P(S("p3A"), "Aile birleşimine başvurdun. On yedinci sayfada bir soru: “Aileden ayrılma tarihi.” Tarihi yazarken kalemin kâğıdı deldi."),
P(S("p3B"), "Bota bindin. Kasım sonunda, sakin bir gecede, yalnız. Dümende başkası vardı. Sen bir yolcuydun. Yolcu olmanın daha korkunç olduğunu o gece öğrendin."),
P(S("p3C"), "Hiba uzun süre sustu. Ekranın köşesinde Yara'nın Almanca defteri, açık."),
P(S("p3D"), "“Baba, ben burada okumak istiyorum. Ama sen de gel.” İkisi birden olmuyordu."),
P(function(d){ return d.kol === "deniz" && !d.hamza_kayip; }, "Midilli'den sonra yirmi üç gün. Atina, Makedonya, Sırbistan, Hırvatistan, Avusturya. Bir ekim sabahı Hamburg. Samir kapıyı açtı. Koridorda uzun süre sarıldınız. Kırk beş kişiden kırk beşi kurtuldu. Hiçbir haberde yer almadı."),
P(function(d){ return d.hamza_kayip; }, "Askerler kırk dört kişi saydı. Bir eksik. Hamza. Yeleğini Omar'a vermişti. İki gün sonra Midilli'nin kuzey kıyısında buldular. On dokuz yaşında. Çantasında ıslak, sayfaları yapışmış bir mühendislik kitabı."),
P(function(d){ return d.hamza_kayip; }, "Yirmi üç gün sonra Hamburg. Omar'ın üstünde hâlâ o turuncu yelek. Çıkarmak istememişti. Hiba bir hafta sonra yıkadı, katladı, dolaba koydu."),
P(function(d){ return d.kol === "bekle"; }, "İzmir'de bir yıl. Bornova'da bir ev. Basmane'deki yelek dükkânları kapandı. Anlaşmadan sonra kimse geçmiyor."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Toronto. Eksi yirmi. Bir apartman, bir dil kursu, bir eczanede depo görevlisi. Yara'nın İngilizcesi bir yılda Türkçesini geçti."),
P(function(d){ return d.kol === "kalis" && d.kaldi; }, "İzmir'de kaldınız. Yara bir yıl sonra bir şiir yarışmasında birinci oldu. Şiirin adı “İki Deniz.” Müdür soyadını yanlış okudu. Yara mikrofonda düzeltti."),
P(function(d){ return d.kol === "ayri" && d.birlesim; }, "Bir yıl. Hâlâ İzmir. Başvuru Almanya'da bir masada. Omar seni ekrandan tanıyor. “Papa” diyor artık."),
P(function(d){ return d.kol === "ayri" && d.bota_bindi; }, "Midilli. Moria. Bin kişilik bir kampta beş bin kişi. Bir yıl. Ailen Hamburg'da. Aranızda bir anlaşma, bir tel, bir deniz."),
P(function(d){ return d.kol === "ayri" && (d.geri_cagir || d.yara_ne); }, "Hiba gelmedi. “Gelirsek yine başa döneriz Ahmed.” Bir yıl. Sen İzmir'de, onlar Hamburg'da. Bir aile, bir ekranda."),
"Bir sabah Mesut'tan bir mesaj. Bir fotoğraf: vitrin boş. “Kapattım. Yelek satmıyorum artık. Eşofman satıyorum. Kızım üniversiteyi bitirdi.” Altında: “Hepiniz geçtiniz mi?”"
], secenekler: [
{ t: "Mesut'a olduğu gibi yazarsın.", to: "t1b", etki: { sorumluluk: 1, mesuta: true } },
{ t: "Mesut'a bir teşekkür yazarsın.", to: "t1b", etki: { umut: 1 } },
{ t: "Cevap vermezsin.", to: "t1b", etki: { temkin: 1 } },
{ t: "Mesut'a o gün aldığın yeleklerin fotoğrafını gönderirsin.", to: "t1b", etki: { sorumluluk: 1, yelek_foto: true } }
]},

t1b: { saat: "Bir yıl sonra", baslik: "Ümmü Halil", metin: [
P(S("t1A"), "Kim geçti, kim geçmedi, kim nerede. Yazdın. Bir saat sonra cevap: “Kimse bana bunu anlatmamıştı.”"),
P(S("t1B"), "Cevap tek kelimeydi: “Utanıyorum.”"),
P(S("t1C"), "Mesaj telefonunda kaldı: “Hepiniz geçtiniz mi?” Bazı geceler açıp baktın."),
P(S("t1D"), "Dört yelek, bir dolapta. Mesut bir kalp gönderdi, sildi, yeniden gönderdi."),
P(function(d){ return d.hamza_kayip; }, "Bir ay sonra Hamza'nın annesini telefonla buluyorsun; Halep'te. Anlatıyorsun: yeleği, Omar'ı, dalgayı. Uzun bir sessizlik. “O hep böyleydi. Kalemini, ekmeğini verirdi. Şimdi de...” Bitirmiyor."),
"Bir gün İsveç'ten bir fotoğraf. Bir hastane koridoru. Beyaz önlüklü genç bir doktor. Yanında, tekerlekli sandalyede, Ümmü Halil.",
P(function(d){ return d.umm_para || d.samir_borc; }, "Arapça bir not: “Ahmed oğlum. Torunumu buldum. Senin bin dolarınla. Her gün dua ediyorum.”"),
P(function(d){ return d.umm_kismi; }, "Arapça bir not: “O gece bir şapkada iki yüz otuz dolar vardı. Yetmedi. Bir İsveçli gazeteciye anlattım, o yazdı, bir dernek kalanını verdi. O şapka için dua ediyorum.”"),
P(function(d){ return d.umm_ret; }, "Arapça bir not, kime yazıldığı belirsiz: “Basmane'deki otel odasındaki herkese. Bir yıl sürdü ama vardım. Torunum doktor olmuş.” Bir grup mesajı mı, sana mı, bilmiyorsun."),
P(function(d){ return !d.umm_para && !d.samir_borc && !d.umm_kismi && !d.umm_ret; }, "Arapça bir not: “Torunumu buldum. Allah hepinizden razı olsun.”"),
"Ümmü Halil dişsiz gülümsüyor. Torunu elini omzuna koymuş. Doktor önlüğünün cebinde üç kalem.",
P(function(d){ return d.kese; }, "Cebinde hâlâ o bez kese. Humus'un toprağı.")
], secenekler: [
{ t: "Ümmü Halil'e cevap yazarsın.", to: "t2", etki: { sorumluluk: 1 } },
{ t: "Fotoğrafı Hiba'ya ve Yara'ya gösterirsin.", to: "t2", etki: { umut: 1, gosterdi: true } },
{ t: "Fotoğrafa bakıp o otel odasını düşünürsün.", to: "t2", etki: { temkin: 1 } },
{ t: function(d){ return d.kese ? "Bez keseyi açıp toprağa bakarsın." : "Bir şey yapmazsın. Ama fotoğrafı kaydedersin."; }, to: "t2", etki: { sorumluluk: 1, kese_acti: true } }
]},

t2: { saat: "2018", baslik: "Yara", metin: [
P(S("t1bA"), "Uzun bir cevap yazdın. Bir hafta sonra bir sesli mesaj: titrek bir dua, sonra torununun sesi: “Büyükannem sizi hiç unutmadı.”"),
P(S("t1bB"), "Yara hatırlamadı; Hiba hatırladı. “O gece o kadın bana bir şey dedi,” dedi. “Kocana iyi bak. Herkesi kurtarmaya çalışacak, kendini unutacak.”"),
P(S("t1bC"), "On iki kişi, yer yatakları, prizin önünde sıra, bir şapka. O odadakilerin kaçı bir kıyıya vardı, bilmiyorsun."),
P(S("t1bD"), "Telefonunda adı olmayan bir klasör var: bir vitrin, bir hastane koridoru, bir deniz."),
"Yara on yaşında. Bir akşam yanına oturuyor.",
P(function(d){ return d.hamza_kayip; }, "“Baba, Hamza Abi neden öldü?” Bir dalgayı, bir itişi, senin kolunu hatırlıyor. Dört yıldır sormadı."),
P(function(d){ return !d.hamza_kayip && d.kol === "deniz"; }, "“Baba, o gece neden bizi o bota bindirdin?” Karanlığı, soğuk suyu hatırlıyor. Bir yaz tatili değildi."),
P(function(d){ return d.kol !== "deniz"; }, "“Baba, biz neden hiç denize gitmiyoruz? Herkes gidiyor. Sen hep hayır diyorsun.” Deniz kıyısında bir şehirde yaşıyor ve bir kez bile denize girmedi."),
"Gözleri ciddi."
], secenekler: [
{ t: "Ona her şeyi baştan anlatırsın.", to: "y_hikaye", etki: { sorumluluk: 1, anlatti: true } },
{ t: "Onu denize götürürsün. Bir yaz günü. İlk kez.", to: "y_deniz", etki: { umut: 1, denize: true } },
{ t: "“Büyüyünce anlatacağım,” dersin. Onu korumak için. Belki kendini.", to: "t3", etki: { temkin: 1, ertele: true } },
{ t: "“Bilmiyorum kızım,” dersin.", to: "t3", etki: { sorumluluk: 1, bilmiyorum: true } }
]},

y_hikaye: { saat: "2018", baslik: "Hikâye", metin: [
"Halep'ten başlıyorsun. Eczane, Salahaddin, varil bombası, Gaziantep, Basmane.",
"Mesut'u, yelekleri. Cemil'i: “Ben taksi şoförüyüm.” Ümmü Halil'i, Hamza'yı, Farid'i, Zahra'yı. Bir şapkayı.",
P(function(d){ return d.kol === "deniz"; }, "Sonra o geceyi. Kıyıyı, motoru, dalgayı, projektörü."),
P(function(d){ return d.hamza_kayip; }, "Sonra Hamza'yı. Yeleğini. Yara'yı senin koluna iten elini. Sesin kırılıyor. Yara on yaşındaki eliyle bileğini tutuyor."),
P(function(d){ return d.kol !== "deniz"; }, "Sonra minibüse binmediğiniz sabahı. Hamza'nın bindiğini. Bir hafta sonra bir kumsal fotoğrafını."),
"Yara iki saat dinliyor. Bir kez bile sözünü kesmiyor.",
"Sonra: “Baba, sen doğru mu yaptın?”"
], secenekler: [
{ t: "“Bilmiyorum. Ama elimden geleni yaptım,” dersin.", to: "t3", etki: { sorumluluk: 1, elimden: true } },
{ t: "“Hayır. Ama başka doğru yoktu,” dersin.", to: "t3", etki: { temkin: 1 } },
{ t: "“Sen ne düşünüyorsun?” diye sorarsın.", to: "t3", etki: { umut: 1, yaraya_sordu: true } },
{ t: "Bir şey demeden onu kucaklarsın.", to: "t3", etki: { sorumluluk: 1 } }
]},

y_deniz: { saat: "2018, Temmuz", baslik: "Kıyı", metin: [
P(function(d){ return d.kol === "deniz" || d.birlesim; }, "Hamburg'dan bir saat, Baltık. Gri, soğuk, sakin. Almanlar havlularında, çocuklar kumdan kale yapıyor."),
P(function(d){ return d.kol === "bekle" || (d.kol === "kalis" && d.kaldi) || d.geri_cagir || d.yara_ne; }, "Çeşme, Ilıca plajı. Temmuz. Şemsiyeler, dondurmacılar. Ufukta puslu bir ada. Öbür tarafta Midilli."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Toronto, Ontario Gölü. Öbür kıyısı görünmüyor. Kanolar, bir dondurmacı."),
P(function(d){ return d.bota_bindi; }, "Midilli, kampın arkasındaki kayalık. Ailen bir haftalığına gelmiş. Karşıda Ayvalık'ın ışıkları."),
"Yara kıyıda. Dalgalar parmaklarına değip çekiliyor.",
"“Baba, giremem.”",
"Yanına geliyorsun. Birlikte bir adım. Su bileklerde. Bir adım. Dizlerde.",
"Yara titriyor. Gözlerini açıp denize bakıyor. Sakin, mavi.",
"“Deniz bilmiyor, değil mi? Ne olduğunu.”"
], secenekler: [
{ t: "“Bilmiyor. Ama biz biliyoruz,” dersin.", to: "t3", etki: { sorumluluk: 1 } },
{ t: "Onu kucaklayıp biraz daha içeri girersin. Yüzmeyi öğreteceksin.", to: "t3", etki: { umut: 2, yuzme: true } },
{ t: "Onu kıyıya geri götürürsün. Bugünlük bu kadar.", to: "t3", etki: { temkin: 1 } },
{ t: function(d){ return d.kese ? "Cebinden bez keseyi çıkarıp toprağı suya serpersin." : "Avucuna biraz su alıp Yara'nın alnına dokundurursun."; }, to: "t3", etki: { sorumluluk: 1, kese_serpti: true } }
]},

t3: { saat: "2022", baslik: "Dil", metin: [
P(S("t2C"), "“Büyüyünce anlatacağım.” Yara odasına gitti. Dört yıl bir daha sormadı. Sen her gün bekledin."),
P(S("t2D"), "“Bilmiyorum kızım.” Yara sana baktı. “Ben de bilmiyorum. İkimiz bilmiyoruz o zaman.”"),
P(S("y_hikayeA"), "Yara düşündü. “Bu bir cevap değil baba. Ama doğru.”"),
P(S("y_hikayeB"), "Yara sustu. “Belki vardı. Sen görmedin. O da şans.”"),
P(S("y_hikayeC"), "Yara şaşırdı. Sonra: “Bence biz şanslıyız. Ve bu adil değil.” On yaşında."),
P(S("y_hikayeD"), "Onu kucakladın. Yara ağlamadı. Sen ağladın. Bir süre sonra Yara saçını okşadı."),
P(S("y_denizA"), "Yara bir taş alıp suya attı. “O zaman biz hatırlayalım.”"),
P(S("y_denizC"), "Kıyıda Yara havluya sarılıp denize uzun uzun baktı."),
P(S("y_denizB"), "Yara bir haftada yüzmeyi öğrendi. Bir sabah elli metre açılıp el salladı. Sen de salladın. İkiniz de ağladınız; Yara tuzlu su sandı."),
P(S("y_denizD"), "Toprak suya karıştı. Yara elini suya soktu, toprağın dağılışını izledi. Bir şey sormadı."),
"Dört yıl sonra. Yara on dört yaşında. Bir akşam yemekte bir şey fark ediyorsun.",
P(function(d){ return d.kol === "deniz" || d.kol === "ayri"; }, "Yara ve Omar kendi aralarında Almanca konuşuyor. Hızlı, gülerek. Omar yedi yaşında; Arapçası üç kelime: baba, anne, teta. Yara Arapça anlıyor, Almanca cevap veriyor."),
P(function(d){ return d.kol === "bekle" || (d.kol === "kalis" && d.kaldi); }, "Yara ve Omar Türkçe konuşuyor; İzmir şivesiyle. Hiba ile siz Arapça konuşuyorsunuz. Çocuklarınız sizi yabancı bir dili dinler gibi dinliyor."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Yara ve Omar İngilizce konuşuyor. Omar ne Arapça biliyor ne Türkçe. Yara üç dil anlıyor. Düşündüğü dil İngilizce."),
"Çocukların Halep'teki eczaneyi bir fotoğraftan tanıyor.",
"Yara sana Arapça bir şey soruyor. Kelimeler takılıyor, başka bir dilden bir kelime araya giriyor. Gülüyor. “Baba, bana yeniden Arapça öğretir misin?”"
], secenekler: [
{ t: "Evet. Her akşam bir saat.", to: "t4", etki: { sorumluluk: 1, arapca: true } },
{ t: "“Sen buranın dilini konuş. Ben anlarım,” dersin.", to: "t4", etki: { umut: 1, birak: true } },
{ t: "Ona Halep'teki eczanenin tabelasını, eski bir fotoğraftan, Arapça okutursun.", to: "t4", etki: { sorumluluk: 1, tabela: true } },
{ t: "Ona Ümmü Halil'in torununu anlatırsın.", to: "t4", etki: { sorumluluk: 1, umm_anlatti: true } }
]},

t4: { saat: "2025", baslik: "Karşı Kıyı", metin: [
P(S("t3A"), "Her akşam bir saat. Elif, be, te. Bir akşam Yara eczanenin adını tek başına yazdı. “şın”ın noktalarını unuttu."),
P(S("t3B"), "Yara rahatladı. O akşam odasında eski bir Arapça çizgi film izledi, sesini kısarak."),
P(S("t3C"), "“Saydaliyyat el-Şifa.” Yara heceledi. “Bizim eczanemiz,” dedi. Hiç görmediği bir eczane."),
P(S("t3D"), "Bir torunun büyükannesine Arapça yazabilmek için kursa gittiğini anlattın. Ertesi gün Yara Arapça bir kitap istedi."),
"On yıl sonra bir kıyı.",
P(function(d){ return d.kol === "deniz"; }, "Midilli. On yıl sonra, Alman pasaportuyla, turist olarak. Kuzey kıyısı. Zeytinlikler, bir mezarlık. Adı olmayan mezarlar. Karşıda Ayvalık."),
P(function(d){ return d.kol === "bekle" || (d.kol === "kalis" && d.kaldi) || d.birlesim || d.geri_cagir || d.yara_ne; }, "Ayvalık. Bir çay bahçesi. Karşıda Midilli. Feribotla yarım saat, otuz avro. On yıl önce bir lastik botla, bin iki yüz dolara."),
P(function(d){ return d.kol === "kalis" && d.kanada; }, "Bu yaz Ayvalık'a geldin; Kanada pasaportuyla. Karşıda hiç geçmediğin deniz."),
P(function(d){ return d.bota_bindi; }, "Midilli. Bir dernekte tercümansın: Arapça, Türkçe, biraz Yunanca. Hâlâ botlar geliyor. Daha az."),
P(function(d){ return d.hamza_kayip; }, "Küçük bir mezarlıkta bir taş: “Hamza, 1996–2015. Halep.” Biri taşın üstüne plastik bir cetvel bırakmış."),
"Yanında Yara. Yirmi yaşında, mühendislik okuyor.",
"Bir feribot geçiyor. Güvertede biri fotoğraf çekiyor.",
"“Baba. Biz hangi kıyıdayız?”"
], secenekler: [
{ t: "“Burada,” dersin.", to: "ks", etki: { temkin: 1 } },
{ t: "“İkisinde de,” dersin.", to: "ks", etki: { umut: 1 } },
{ t: "“Hiçbirinde,” dersin. Bu kez hüzünle değil.", to: "ks", etki: { sorumluluk: 1 } },
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
P(S("t4A"), "“Burada,” demiştin. Yara başını sallamıştı."),
P(S("t4B"), "“İkisinde de.” Yara gülmüştü: “Kolay cevap.” Kolay değildi."),
P(S("t4C"), "“Hiçbirinde.” Yara koluna girmişti."),
P(S("t4D"), "Ayakkabılarını çıkarmıştın. Yara da çıkardı. Bir dalga ayaklarınıza gelip çekildi."),
"Kırk beş kişi geçti. Bir Yunan gemisi doğru zamanda doğru yerdeydi.",
"Aynı gece aynı denizde bir başka bot. Aynı rüzgâr. O bota gemi yetişmedi. Onların hikâyesini bir gazete yazdı.",
"Hamburg'da bir eczanede çalışıyorsun. Diploman altı yılda tanındı. Omar futbol oynuyor, Almanca bağırıyor. Hiba Suriyeli çocuklara Arapça öğretiyor.",
"Bazı geceler rüyanda bir motor öksürüyor. Kalkıp çocukların odasına bakıyorsun. Omar yorganı tekmelemiş. Üstünü örtüyorsun."
]},

son_deniz: { son: true, baslik: "Hamza", metin: [
P(S("t4A"), "“Burada,” demiştin. Yara başını sallamıştı."),
P(S("t4B"), "“İkisinde de.” Yara gülmüştü: “Kolay cevap.” Kolay değildi."),
P(S("t4C"), "“Hiçbirinde.” Yara koluna girmişti."),
P(S("t4D"), "Ayakkabılarını çıkarmıştın. Yara da çıkardı. Bir dalga ayaklarınıza gelip çekildi."),
"Kırk dört kişi kurtuldu. Hamza kurtulmadı. Yeleğini Omar'a verdi; Omar'ınki sünger çıktı. Basmane'de ucuz olanı sen almıştın.",
"Bunu her gün kendine söylüyorsun. Bazen başka türlü: Mesut satmasaydı. Cemil o gece göndermeseydi. Rüzgâr dört-beş olmasaydı. Savaş olmasaydı. Her cümle doğru. Yük aynı.",
"Omar on yaşında. Hamza'yı hatırlamıyor. Turuncu yelek dolabında. Bir gün sordu: “Bu kimin?” Anlattın. Omar yeleğe baktı. “O zaman ben onun yerine de yaşamalıyım, değil mi?” Ne diyeceğini bilemedin.",
"Yara mühendislik okuyor. “Hamza Abi'nin kitabını ben bitireceğim,” dedi bir gün. Kitabın ıslak sayfalarını tek tek ayırmış.",
"Her yıl ağustosun on dokuzunda Hamza'nın annesine bir mesaj atıyorsun. Bir yıl bir fotoğraf geldi: Hamza on yaşında, havuz kenarında, boynunda bir madalya, dişleri çok büyük."
]},

son_kalan: { son: true, baslik: "Kalan", metin: [
P(S("t4A"), "“Burada,” demiştin. Yara başını sallamıştı."),
P(S("t4B"), "“İkisinde de.” Yara gülmüştü: “Kolay cevap.” Kolay değildi."),
P(S("t4C"), "“Hiçbirinde.” Yara koluna girmişti."),
P(S("t4D"), "Ayakkabılarını çıkarmıştın. Yara da çıkardı. Bir dalga ayaklarınıza gelip çekildi."),
"Kaldınız. İzmir'de.",
P(function(d){ return d.kol === "bekle"; }, "Bekledin. Bir dolandırıcı ve bir rüzgâr seni denizden uzak tuttu. Sonra o kumsal fotoğrafı geldi. Önce pişmanlık, sonra şükür, sonra şükrettiğin için utanç."),
"Yara İzmir şivesiyle konuşuyor, bir Türk üniversitesinde mühendislik okuyor. Kimlik kartında hâlâ “geçici koruma.” On yıldır geçici.",
"Sen eczacı yardımcısısın. Diplomanın denkliği hâlâ yok. Karşıyaka'daki yaşlılar reçetelerini önce sana gösteriyor. “Ahmed Bey bilir.”",
"Bazı akşamlar Kordon'da yürüyorsun. Karşıda Karşıyaka. Öbür kıyısı görünen bir su. Bunu seviyorsun. Nedenini Yara'ya anlatamıyorsun."
]},

son_kagit: { son: true, baslik: "Kâğıt", metin: [
P(S("t4A"), "“Burada,” demiştin. Yara başını sallamıştı."),
P(S("t4B"), "“İkisinde de.” Yara gülmüştü: “Kolay cevap.” Kolay değildi."),
P(S("t4C"), "“Hiçbirinde.” Yara koluna girmişti."),
P(S("t4D"), "Ayakkabılarını çıkarmıştın. Yara da çıkardı. Bir dalga ayaklarınıza gelip çekildi."),
"Yüzde bir size düştü. Bir mektup, bir uçak, Toronto.",
"Hiçbir rüzgâr, hiçbir yelek. Kâğıt.",
"Sizinle aynı sırada bekleyen yüzlerce aile hâlâ bekliyor. Neden siz? Bir memurun bir dosyayı önce açması. Bir kotanın o ay boş olması. Eczacıların “risk altındaki meslek grubu” sayılması.",
"Beş yıl sonra eczacı lisansını aldın. Omar hokey oynuyor. Dişi kırıldı, gururlu. Hiba yeni gelen Suriyeli ailelere yardım ediyor.",
"Bir gün bir aileye form doldurtuyorsun. Dokuzuncu sayfada bir kutucuk: “Daha önce düzensiz yollarla bir sınırı geçmeye çalıştınız mı?” Sizinki boş kalmıştı."
]},

son_ayri: { son: true, baslik: "İki Kıyı", metin: [
P(S("t4A"), "“Burada,” demiştin. Yara başını sallamıştı."),
P(S("t4B"), "“İkisinde de.” Yara gülmüştü: “Kolay cevap.” Kolay değildi."),
P(S("t4C"), "“Hiçbirinde.” Yara koluna girmişti."),
P(S("t4D"), "Ayakkabılarını çıkarmıştın. Yara da çıkardı. Bir dalga ayaklarınıza gelip çekildi."),
"Bir aile bir minibüsün arka camında ikiye bölündü.",
P(function(d){ return d.birlesim; }, "Aile birleşimi iki yıl sürdü. Havalimanında Omar seni tanımadı; Hiba'nın arkasına saklandı. Bir hafta sonra “Papa” dedi."),
P(function(d){ return d.bota_bindi; }, "Midilli'de üç yıl. Bir çadırda, bir telin arkasında. Ailen her yaz feribotla geldi, bir otelde kaldı. Dördüncü yıl bir mahkeme kararı. Hamburg."),
P(function(d){ return d.geri_cagir || d.yara_ne; }, "Hiba gelmedi, sen gitmedin. Hamburg ve İzmir. Her pazar bir ekran. Çocuklar her yaz bir ay İzmir'de. Bir babayı bir ayda tanımaya çalışıyorlar."),
"Hiba bir gün dedi ki: “Bizi bir denize gönderdin. O yüzden buradayız. İkisini birden düşünmeyi öğrenmem yıllar sürdü.”",
"Omar sordu: “Baba, o gece neden gelmedin?” Para, sıra, bot. Anladı. Sonra: “Ben seni o camdan hatırlamıyorum. Uyuyordum.”"
]}

},

ayna: function(d){
  var out = [];
  var u = d.umut, s = d.sorumluluk, t = d.temkin;
  if(u >= s && u >= t) out.push("Çoğu kavşakta karşı kıyıya, Samir'in sesine doğru gittin.");
  else if(s >= t) out.push("Çoğu kavşakta yanındakilere baktın: Hiba'ya, Ümmü Halil'e, odadaki on iki kişiye.");
  else out.push("Çoğu kavşakta hava raporuna, yeleğin etiketine, kâğıtlara baktın.");
  if(d.yelek === "sahte") out.push("Basmane'de ucuz yelekleri aldın.");
  if(d.yelek === "iyi") out.push("İyi yelekleri aldın; omzun torbanın ağırlığından acıdı.");
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
