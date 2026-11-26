(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };
var BAHCE = function(d){ return d.kol === "bahce" && !d.uyandi; };
var DIS = function(d){ return !(d.kol === "bahce" && !d.uyandi); };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "ruya-makinesi",
baslik: "Rüya Makinesi",
dunya: "Hayali dünya · 2049",
kategoriler: ["Varoluş ve Anlam", "Aile ve Hafıza"],
giris: "2049 yılı, İzmir. Yetmiş sekiz yaşında emekli bir terzisin. Eşin üç yıl önce öldü, oğlun Almanya'da. Bir sabah posta kutunda bir broşür buluyorsun: “Bahçe. Hayatınızın en güzel hâli, sonsuza dek.” Bir makine sana eşinin yanında, genç ve mutlu, kusursuz bir hayat sunuyor. Tek şartı, bir daha uyanmaman ve uyumakta olduğunu bilmemen. Gerçek bir hayatın acısı mı, sahte bir hayatın mutluluğu mu? Bu bir kadının son seçiminin hikâyesi.",
kavramlar: ["Gerçek ve mutluluk", "Sahicilik", "Yaşlılık ve yalnızlık", "Hafıza ve sevgi"],
ozet: "Yetmiş sekiz yaşında, yalnız yaşayan bir kadına ölen eşiyle sonsuza dek sürecek kusursuz bir sanal hayat teklif ediliyor. Tek şartı, bir daha gerçeğe dönmemek.",
baslangic: "a1",
durum: { gercek: 0, mutluluk: 0, bag: 0 },

sahneler: {

a1: { saat: "Mart 2049", baslik: "Broşür", metin: [
"Karşıyaka'da, denize iki sokak mesafedeki bir apartmanın dördüncü katında oturuyorsun. Asansör üç aydır bozuk, yönetici her ay “gelecek hafta” diyor. Ekmek, ilaç, posta için merdivenleri günde bir kere iniyorsun, çıkman yirmi dakika sürüyor. İkinci katın sahanlığına bir sandalye bırakmışlar, oraya oturup soluklanıyorsun.",
"Adın Saadet, yetmiş sekiz yaşındasın. Kırk yıl terzilik yaptın, mahallenin gelinliklerinin yarısı senin elinden çıktı. Dikiş makinen köşede, üstüne bir dantel örtü örtülü duruyor.",
"Hikmet üç yıl önce öldü. Pencerenin önündeki koltuk hâlâ onun koltuğu, minderi onun şeklini almış. Bazı akşamlar ona da bir çay koyuyor, sonra iki bardağı birlikte yıkıyorsun.",
"Oğlun Cem Frankfurt'ta yaşıyor, ayda bir on dakikalık görüntülü arama yapıyorsunuz. Torunun Nil on altı yaşında, Türkçesi her ay biraz daha takılıyor.",
"Yan daire bir yıldır boş. Orada kırk yıllık komşun Nadide otururdu, her sabah birlikte kahve içerdiniz. Geçen bahar gitti ama ölmedi, “Bahçe”ye girdi.",
"Bu sabah posta kutunda parlak bir broşür buluyorsun. Yemyeşil bir bahçe, bir çardak, altında gülümseyen yaşlı bir çift var.",
"“Bahçe. Hayatınızın en güzel hâli, sonsuza dek. Huzur Sistemleri, devlet destekli yaşlı bakım programı. Kaybettiklerinizle yeniden buluşun. Ücretsiz deneme seansı için arayın.”",
"Broşürü masaya, Hikmet'in koltuğunun yanına koyuyorsun."
], secenekler: [
{ t: "Broşürü çöpe atarsın.", to: "a2", etki: { gercek: 1, cope: true } },
{ t: "Broşürü her kelimesiyle, iki kere okursun.", to: "a2", etki: { mutluluk: 1 } },
{ t: "Nadide'nin kızı Sema'yı arayıp annesini sorarsın.", to: "a2", etki: { bag: 1, ayla_aradi: true } },
{ t: "Üç yıldır hiç oturmadığın Hikmet'in koltuğuna oturursun.", to: "a2", etki: { bag: 1, koltuk: true } }
]},

a2: { saat: "Mart 2049", baslik: "Deneme Seansı", metin: [
P(S("a1B"), "İki kere okudun. Son sayfada küçük harflerle şöyle yazıyordu: “Kalıcı programda katılımcının dış dünyayla bilinçli bağı sona erer.” Gözlüğünü çıkarıp o satırı bir daha okudun."),
P(S("a1A"), "Broşürü çöpe attın. Akşam çöpü dökerken broşür en üstte duruyordu, yeşil bahçe, gülümseyen çift. Geri aldın, silip kuruladın."),
P(S("a1C"), "Sema'nın sesi yorgundu. “Annem çok iyi,” dedi, “mutlu, hep gülümsüyor.” Biraz sustu. “Ben onu kaybettim Saadet Teyze ama o mutlu. Nasıl anlatayım bilmiyorum.”"),
P(S("a1D"), "Koltuğun yayı gıcırdadı, onun ağırlığına alışmıştı. Pencereden onun her sabah baktığı denize baktın. Kolçakta bir sigara yanığı vardı, on yıl önce ona bunun için çok kızmıştın."),
"Bir hafta sonra Bostanlı'da camdan bir binaya gidiyorsun. İçerisi yeşil bitkilerle dolu, yumuşak bir müzik çalıyor, nane kokuyor. Danışman Selcan Hanım kırklarında bir kadın, sesi alçak. Seni bir koltuğun, bir başlığın olduğu bir odaya alıyor.",
"“Yirmi dakika sürecek,” diyor. “İstediğiniz an elinizi kaldırın, çıkarız.”",
"Başlığı takıyorsun, önce karanlık oluyor, sonra ışık geliyor.",
"Bir bahçedesin. Hikmet'le evlendiğiniz yıl Buca'da kiraladığınız evin bahçesi bu. Erik ağacı, asma, tahta bir masa var, masanın bir ayağının altına katlanmış bir karton sıkıştırılmış. Masada çay demleyen bir adam oturuyor, otuz beş yaşında, bıyığı kapkara, gömleği bembeyaz.",
"Hikmet. “Geldin mi Saadet'im? Çay tam demlendi.”",
"Sesi, tütün ve kolonya kokusu, elinin üstündeki küçük yanık izi. Çaydanlığın kulpundan, hep aynı yerden yakardı elini."
], secenekler: [
{ t: "Masaya oturup yirmi dakikanın sonuna kadar çayını içersin.", to: "a3", etki: { mutluluk: 2, sonuna: true } },
{ t: "Hikmet'in elini tutarsın.", to: "x_el", etki: { mutluluk: 1, bag: 1 } },
{ t: "Ona “Sen gerçek misin?” diye sorarsın.", to: "x_soru", etki: { gercek: 1 } },
{ t: "Daha beş dakika dolmadan elini kaldırırsın.", to: "a3", etki: { gercek: 2, erken_cikti: true } }
]},

x_el: { saat: "Mart 2049", baslik: "Sıcak El", metin: [
"Elini uzatıyorsun, Hikmet tutuyor. Sıcacık bir matbaacı eli, parmak uçlarında mürekkep, tırnaklarının dibi kapkara.",
"“Ne oldu? Gözlerin dolmuş.”",
"Bir şey diyemiyorsun.",
"Hikmet elini sıkıyor, sonra hiç beklemediğin bir şey söylüyor: “Saadet'im, Cem doğduğunda hastaneye geç geldim, nedenini hiç söylemedim. İçiyordum, korkmuştum. Özür dilerim.”",
"Bu konuşma hiç olmadı. Kırk bir yıl boyunca o gece hiç konuşulmadı. Sen biliyordun, o da senin bildiğini biliyordu.",
"Şimdi bir makine onun ağzından hiç söylenmemiş bir özür diliyor. Duymayı en çok istediğin bu cümleyi herhalde senin hafızandan bulmuş.",
"Ve iyi geliyor, göğsünde bir yer gevşiyor.",
"Ama içinden bir ses Hikmet'in bunu söylemeyeceğini söylüyor. Hikmet konuyu değiştirir, “Çayın soğuyor,” derdi."
], secenekler: [
{ t: "“Affettim,” dersin.", to: "a3", etki: { mutluluk: 1, affetti_sim: true } },
{ t: "Elini çekip “Sen o değilsin,” dersin.", to: "a3", etki: { gercek: 2, cekti: true } },
{ t: "Bir şey demeden elini tutmaya devam edersin.", to: "a3", etki: { mutluluk: 1, bag: 1 } },
{ t: "“Bunu neden şimdi söylüyorsun?” diye sorarsın.", to: "a3", etki: { gercek: 1, neden: true } }
]},

x_soru: { saat: "Mart 2049", baslik: "Soru", metin: [
"“Sen gerçek misin?” diye soruyorsun.",
"Hikmet bardağı bırakıyor ama şaşırmıyor.",
"“Sen ne istersen oyum. Gerçek olmamı istersen gerçeğim. Ama senin hatırladığın Hikmet de senin kafandaydı, ben ondan yapıldım. Hangisi daha gerçek?”",
"Bu cümle bir matbaacının cümlesi değil.",
"“Hikmet böyle konuşmazdı,” diyorsun.",
"Hikmet öksürükle karışık, tam onun gülüşüyle gülüyor. “Haklısın,” diyor, “Hikmet ‘Çayın soğuyor’ derdi. Çayın soğuyor Saadet'im.”",
"Kırk bir yıl boyunca her sabah söylediği cümle bu.",
"Makine senin itirazından öğreniyor, bir sonraki cümlesinde biraz daha o olacak."
], secenekler: [
{ t: "Çayını içersin.", to: "a3", etki: { mutluluk: 1, cay: true } },
{ t: "Elini kaldırıp çıkarsın.", to: "a3", etki: { gercek: 2 } },
{ t: "“Bir daha söyle,” dersin, “çayın soğuyor de.”", to: "a3", etki: { mutluluk: 1, bag: 1, bir_daha: true } },
{ t: "Makineye sorarsın: “Beni ne kadar tanıyorsun?”", to: "a3", etki: { gercek: 1, tanima: true } }
]},

a3: { saat: "Nisan 2049", baslik: "Nadide", metin: [
P(S("x_elC"), "Elini sonuna kadar tuttun. Dolmuşla eve dönerken sıcaklığı gitmesin diye avucunu dizine kapattın."),
P(S("x_elD"), "Hikmet bir an durdu, görüntü titredi. “Çünkü sen bunu duymak istedin Saadet'im,” dedi. Makinenin söylediği en dürüst cümle buydu."),
P(S("x_soruA"), "Çayını içtin, tadı tam onun demiydi, biraz fazla koyu. Soru masada kaldı."),
P(S("x_soruB"), "Elini kaldırdın. Selcan Hanım başlığı çıkarırken gülümsedi. “Herkes ilk seferde böyle yapar,” dedi, “ikincisinde kalırlar.”"),
P(S("a2A"), "Yirmi dakika boyunca çay, erik ağacı ve onun sesi vardı, sonra karanlık oldu. Başlığı çıkardığında koltuğun kolunu sıkıyordun ve bir saat kendine gelemedin. Selcan Hanım sana bir bardak ıhlamur getirdi."),
P(S("a2D"), "Daha beş dakika dolmadan elini kaldırdın. Selcan Hanım şaşırdı. “Çoğu kişi yirmi dakikayı bitirir,” dedi ve sana su verdi. Bardağı iki elinle tutmak zorunda kaldın."),
P(S("x_elA"), "“Affettim,” dedin, Hikmet de gülümsedi. Seans bitince ağladın. Kırk bir yıllık bir susuşu bir makine bozmuştu. Eve dönerken buna minnettar olup olmadığını bilemedin."),
P(S("x_elB"), "Elini çektin. Hikmet'in yüzü yumuşadı. “Peki,” dedi ve bahçe soldu. Selcan Hanım bir not aldı, ters çevirdiği kâğıtta “gerçeklik direnci” kelimelerini okudun."),
P(S("x_soruC"), "“Çayın soğuyor Saadet'im,” dedi, bir daha, bir daha. Eve dönünce kendi çayını koyup soğumasını bekledin."),
P(S("x_soruD"), "“Telefonunu, fotoğraflarını, sesli mesajlarını, beyin taramanı biliyorum,” dedi Hikmet, ya da makine. “Hikmet'in kayıtlarını da biliyorum. Söylenmiş her şeyi bilirim, söylenmemişleri de tahmin ederim.”"),
"Bir hafta sonra Nadide'yi ziyarete gidiyorsun. Menemen yolunda eski bir hastane binası, uzun koridorlar, her odada sekiz yatak var.",
"Nadide pencerenin yanında yatıyor. Gözleri kapalı, başında ince bir başlık, kolunda serum, karnında beslenme tüpü var. Yüzü gülümsüyor, bir yıldır böyle.",
"Bir hemşire yatak yarası olmasın diye Nadide'yi yan çeviriyor. “Çok huzurlular,” diyor, “bu odadakilerin hepsi.”",
"Odada sekiz gülümseyen yüz var.",
"Kapıda Sema duruyor, her pazar geliyormuş. Annesinin elini tutuyor, saçını tarıyor, ona mahalleden haberler anlatıyor, bakkalın kapandığını, karşı apartmana yeni bir kiracının geldiğini.",
"“Duymuyor,” diyor Sema, “biliyorum ama yine de anlatıyorum. Annem bir bahçede, babamla birlikte. Ben de buradayım.”"
], secenekler: [
{ t: "Nadide'nin elini tutarsın.", to: "a4", etki: { bag: 1, nadide_el: true } },
{ t: "Sema'ya “Annenin mutlu olduğunu nereden biliyorsun?” diye sorarsın.", to: "a4", etki: { gercek: 1, ayla_soru: true } },
{ t: "Gülümseyen yüze kıskanarak uzun uzun bakarsın.", to: "a4", etki: { mutluluk: 1, kiskandi: true } },
{ t: "Kaç kişi olduğunu görmek için koridordaki öbür odalara bakarsın.", to: "a4", etki: { gercek: 1, odalar: true } }
]},

a4: { saat: "Nisan 2049", baslik: "Frankfurt'tan Bir Ses", metin: [
P(S("a3A"), "Nadide'nin elini tuttun. Sıcak, yumuşak, kırk yıl fincan tutmuş bir eldi ama içinde hiçbir şey kıpırdamadı."),
P(S("a3C"), "Kıskandın, bunu otobüste kendine itiraf ettin. O bir bahçede kocasıyla birlikteydi, sen ise dördüncü katta, bozuk bir asansörle."),
P(S("a3B"), "“Yüzünden belli,” dedi Sema, “bir de taramalardan. Bir yıldır mutluluk hormonları yüksek.” Sonra durdu. “Ama ben onunla burada mutlu olmak istiyordum.”"),
P(S("a3D"), "Saydın, kırk iki oda vardı ve her birinde sekiz yatak. Hemşire binanın üç katı daha olduğunu söyledi, söylerken gururlu gibiydi."),
"Pazar akşamı Cem'le görüntülü konuşuyorsun. Arkada Frankfurt'taki mutfak görünüyor, gelinin Sabine bir şeyler doğruyor.",
"Bahçe'den bahsediyorsun. Cem bir süre bir şey demiyor, sonra “Anne, ben de düşünüyordum,” diyor, “sana söylemeye çekiniyordum.”",
"“Yalnızsın, merdivenler var, ellerin var. Ben buradan bir şey yapamıyorum, bakımevleri çok pahalı. Bahçe ise devlet destekli. Babamla olursun, biz de Sema'nın Nadide Teyze'ye gittiği gibi ziyarete geliriz.”",
"Oğlun seni gözleri kapalı, gülümseyerek bir yatakta yatarken hayal ediyor ve bunu iyi bir şey sanıyor.",
"Ekranda bir hareket oluyor. Nil telefonu babasının elinden kapıyor, saçları mor, yüzü kızgın.",
"“Babaanne! Gitme! O makine yalan! Babam bilmiyor, ben okudum!”",
"Cem telefonu geri almaya çalışıyor ama Nil vermiyor, ekran sallanıyor, tavan görünüyor."
], secenekler: [
{ t: "Nil'e “Ne okudun güzelim?” diye sorarsın.", to: "x_nil", etki: { bag: 1, gercek: 1 } },
{ t: "Cem'e “Neden sen gelmiyorsun oğlum?” diye sorarsın.", to: "x_cem", etki: { bag: 1 } },
{ t: "İkisine de “Düşüneceğim,” dersin.", to: "a5", etki: { mutluluk: 1 } },
{ t: "Bu konuşmayı bir ekranda yapamazsın, telefonu kapatırsın.", to: "a5", etki: { gercek: 1, kapatti: true } }
]},

x_nil: { saat: "Nisan 2049", baslik: "Nil", metin: [
"Nil odasına koşup kapıyı kilitliyor, Cem'in sesi arkada kalıyor. Ekranda posterler, bir gitar ve yatağın üstüne yığılmış kitaplar görünüyor.",
"“Okulda bir proje yaptım,” diyor, arada bir Almanca kelime kaçırarak. “Bahçe hakkında. Burada da var, ‘Garten’ diyorlar. Bir araştırma okudum. İçerideki insanlar bir süre sonra gerçek insanları unutuyormuş. Simülasyondakiler daha kolay oluyormuş, gerçek yüzler siliniyormuş.”",
"Gözleri dolu dolu.",
"“Nadide Teyze'nin kızı ziyarete gidiyor, değil mi? Ama annesi onu artık hatırlamıyor. Bahçe'de bir kızı var ama o simülasyon.”",
"Sesi kısılıyor. “Babaanne, sen beni unutursan... Ben elini tutarım, sen de beni hiç tanımamış gibi olursun. Ich will das nicht. İstemiyorum.”"
], secenekler: [
{ t: "“Seni unutmam,” dersin.", to: "a5", etki: { bag: 1, unutmam: true } },
{ t: "Dürüst olmak istediğin için “Belki unuturum ama mutlu olurum,” dersin.", to: "a5", etki: { mutluluk: 1, gercek: 1, durust: true } },
{ t: "Nil'den o araştırmayı sana göndermesini istersin.", to: "a5", etki: { gercek: 1, arastirma: true } },
{ t: "Bir şey demeden ezberlemek için ekrandaki yüzüne bakarsın.", to: "a5", etki: { bag: 2, ezber: true } }
]},

x_cem: { saat: "Nisan 2049", baslik: "Cem", metin: [
"“Neden sen gelmiyorsun oğlum?” diye soruyorsun.",
"Cem telefonu Nil'den alıp balkona çıkıyor. Arkada şehrin ışıkları görünüyor, bir tramvay sesi geliyor.",
"“Anne, işim burada, Sabine'nin işi de, Nil'in okulu da. Dönsem ne yaparım? Sen gelsen ne yaparsın? Almanca bilmiyorsun.”",
"“Seni tanıyorum ama,” diyorsun.",
"Cem susuyor, sonra sesi değişiyor. “Babam öldüğünde gelemedim. Ortada ne savaş vardı ne salgın, işteydim, bir toplantım vardı. Cenazeden sonra geldim. Sen hiçbir şey demedin. Üç yıldır bir şey demeni bekliyorum.”",
"Biliyordun ama söylememiştin. Kırk bir yıl Hikmet'le susmayı öğrenmiştin, oğlunla da susmuşsun.",
"“Bahçe'de babamla olursun, ben de başında otururum. Belki ikimiz için de daha kolay olur.”"
], secenekler: [
{ t: "“Seni affettim oğlum, babanın cenazesi için hiç kızmadım,” dersin.", to: "a5", etki: { bag: 2, cem_af: true } },
{ t: "Üç yıl sonra “Kızgındım,” dersin.", to: "a5", etki: { gercek: 2, cem_kizgin: true } },
{ t: "“Bahçe kimin için kolay olacak, senin için mi, benim için mi?” diye sorarsın.", to: "a5", etki: { gercek: 1, kimin_icin: true } },
{ t: "Bir şey demeden ekrandaki ışıklara bakarsın.", to: "a5", etki: { mutluluk: 1 } }
]},

a5: { saat: "Mayıs 2049", baslik: "Mektuplar", metin: [
P(S("a4C"), "“Düşüneceğim,” dedin, Cem de rahatladı. Nil telefonu bırakıp gitti, ekran kararmadan önce bir kapının çarptığını duydun."),
P(S("a4D"), "Telefonu kapattın. Bir saat sonra Nil'den bir mesaj geldi: “Babaanne lütfen.” Cevap yazmadın, parmakların ekranda gezindi ama bir şey bulamadı."),
P(S("x_nilC"), "Nil araştırmayı gönderdi, on dört sayfa, Almanca. Bir çeviri programıyla okudun. Bir cümlede takıldın: “Kalıcı katılımcıların yakınlarında uzun süreli yas belirtileri.” Ölmemiş birinin yası."),
P(S("x_cemC"), "Cem uzun süre konuşmadı. “İkimiz için,” dedi, sonra ekledi: “Belki daha çok benim için.”"),
P(S("x_cemD"), "Sen bir şey demedin, o da demedi. Arkada bir tramvay geçip gitti."),
P(S("x_nilA"), "“Unutmam,” dedin. “Söz mü?” dedi. “Söz,” dedin. Bir makinenin bir sözü bozabileceğini ikiniz de biliyordunuz."),
P(S("x_nilB"), "Nil bir süre konuşmadı. “Mutlu olursun,” dedi, “ama sen olmazsın.”"),
P(S("x_nilD"), "Mor saçlarını, kaşının üstündeki beni, ön dişindeki küçük kırığı ezberledin. Nil de sana baktı. “Ben de seni ezberliyorum,” dedi."),
P(S("x_cemA"), "Cem kırk beş yaşında, bir balkonda ağladı. “Üç yıldır bunu bekliyordum,” dedi."),
P(S("x_cemB"), "“Kızgındım,” dedin. Cem bir süre sustu. “Biliyorum,” dedi, “iyi ki söyledin.” O akşam on dakikadan uzun, kırk dakika konuştunuz."),
"Mayıs geliyor. Hikmet'in üç yıldır açmadığın dolabını açıyorsun. Gömlekler, kravatlar, matbaa önlüğü, naftalin kokusu. En üst rafta bir ayakkabı kutusu duruyor.",
"İçinde Hikmet'in yazısıyla mektuplar var ama sana yazılmamışlar.",
"Leman diye bir kadına yazılmışlar, 1989'dan 1994'e kadar. Matbaada çalışan bir dizgiciymiş. Son mektupta şöyle yazıyor: “Leman, Saadet'i bırakamam. Cem küçük. Onu da seviyorum, başka türlü. Bu son mektup. Beni affet.”",
"Otuz yıl önce olmuş ve bilmiyordun. Ya da bir yerde biliyordun, bazı akşamlar geç gelirdi, bazı pazarlar matbaada “iş” olurdu.",
"Gerçek Hikmet mürekkep lekeli elleriyle başka bir kadını sevmiş, seni bırakmamış ve bunu sana hiç söylememiş. Bahçe'deki Hikmet ise çay demliyor ve özür diliyor."
], secenekler: [
{ t: "Mektupların hepsini okursun.", to: "a6", etki: { gercek: 2, okudu: true } },
{ t: "Bilmek istemediğin için kutuyu kapatıp dolaba geri koyarsın.", to: "a6", etki: { mutluluk: 1, kapatti_kutu: true } },
{ t: "Mektupları yakarsın.", to: "a6", etki: { mutluluk: 1, yakti: true } },
{ t: "Yaşıyorsa Leman'ı bulmaya karar verirsin.", to: "a6", etki: { gercek: 1, bag: 1, feride: true } }
]},

a6: { saat: "Haziran 2049", baslik: "Sözleşme", metin: [
P(S("a5B"), "Kutuyu geri koydun. Dolabın önünden her geçtiğinde kapağına bakmamaya çalıştın."),
P(S("a5A"), "Bütün gece okudun ve satırların arasından senin gibi ama başka bir kadın çıktı. Sabah Hikmet'e ilk kez kızdın, öldükten üç yıl sonra. Kızgınlık onu daha gerçek yaptı."),
P(S("a5C"), "Mektupları balkonda bir tencerenin içinde yaktın, alevde Leman'ın adı göründü, sonra kül oldu. Komşu kadın balkondan duman için seslendi. “Kek yaktım,” dedin."),
P(S("a5D"), "Bir hafta aradın ve buldun. Leman Kaya yetmiş altı yaşındaydı, Bornova'da bir bakımevinde kalıyordu. Seni önce tanımadı, sonra tanıdı. Bir saat oturdunuz, iki kadın, bir adam, otuz yıl. Çıkarken Leman sana sarıldı. “Seni seçti,” dedi, “bilmeni isterim.”"),
"Haziranda Selcan Hanım kırk iki sayfalık bir dosya gönderiyor: “Bahçe Kalıcı Yaşam Programı. Katılımcı Onam Formu.”",
"Programa giriş anı hafızadan silinecek, katılımcı simülasyonda olduğunu bilmeyecek. Beden ömür boyu tesiste bakılacak. Çıkış mümkün ama ancak ailenin talebiyle ve “psikolojik uyum riski” uyarısıyla. Katılımcıların yüzde doksan yedisi hiç çıkmamış.",
"Son sayfada küçük harflerle bir seçenek daha var: “Kısmi Program: günde üç saate kadar seans. Gerçeklik bilinci korunur.”",
"Masada sözleşme, bir kalem var, karşıda koltuk, pencereden deniz görünüyor.",
"Selcan Hanım bir not eklemiş: “Kontenjan bu ay doluyor, cumaya kadar.” Bugün çarşamba."
], secenekler: [
{ t: "Nil'in sesini bir daha tanımayacağını bile bile kalıcı programı imzalar, Hikmet'e kavuşursun.", to: "b1", etki: { mutluluk: 2, kol: "bahce" } },
{ t: "Reddedip gerçek hayatına, bozuk asansöre, boş koltuğa, yalnızlığa dönersin.", to: "g1", etki: { gercek: 2, kol: "gercek" } },
{ t: "İkisini birden isteyip ikisini de yarım alarak günde üç saatlik kısmi programı seçersin.", to: "y1", etki: { mutluluk: 1, gercek: 1, kol: "yarim" } },
{ t: "Kırk yıllık şehrini ve Hikmet'in mezarını geride bırakarak bavulunu toplayıp Frankfurt'a, Cem'in yanına gidersin.", to: "d1", etki: { bag: 2, kol: "goc" } }
]},

/* ---------- BAHÇE KOLU ---------- */
b1: { saat: "Temmuz 2049", baslik: "Son Gün", metin: [
P(S("a6A"), "İmzaladın. Kalemin ucu kâğıtta bekledi, mürekkep yayılıp küçük bir leke oldu, tıpkı onun parmaklarındaki gibi."),
P(S("y3A"), "Kalıcı programa geçtin. Selcan Hanım'ın sesi telefonda yumuşacıktı. “Doğru karar verdiniz Saadet Hanım,” dedi."),
"Giriş pazartesi yapılacak, pazar akşamı son kez evdesin.",
"Yanına hiçbir şey alamayacaksın, bedenin bir yatakta yatacak, bavula gerek yok.",
"Yine de dikiş makinesinin örtüsünü kaldırıyorsun. Aylar önce Nil için bir elbiseye başlamıştın, mavi ketenden, yakası işlemeli olacaktı.",
"İğneye iplik geçirmek on dakikanı alıyor ama geçiriyorsun.",
"Gece yarısına kadar dikiyorsun, yakayı, kolları, etek ucunu. Yakanın işlemesi bir çiçeğin üç yaprağında yarım kalıyor.",
"Elbiseyi bir kutuya koyup üstüne bir not bırakıyorsun: “Nil'e, babaannesinden. Yakasını sen bitir.”",
"Sonra koltuğa oturuyorsun. Pencereden Alsancak'a doğru giden bir vapurun ışıkları görünüyor."
], secenekler: [
{ t: "Cem'i son bir kez ararsın.", to: "b2", etki: { bag: 1, son_arama: true } },
{ t: "Nil'e bir sesli mesaj bırakırsın.", to: "b2", etki: { bag: 1, nil_mesaj: true } },
{ t: "Bu gece senin, kimseyi aramazsın.", to: "b2", etki: { mutluluk: 1 } },
{ t: "Leman'ı ararsın.", to: "b2", etki: { gercek: 1, feride_ara: true } }
]},

b2: { saat: "Bahçe", baslik: "Erik Ağacı", metin: [
P(S("b1A"), "Hatırlamıyorsun ama son gece Cem'i aradın. “Anne,” dedi iki kere, sen de “Biliyorum oğlum,” dedin. O konuşma artık yalnızca onda."),
P(S("b1B"), "Hatırlamıyorsun ama son gece Nil'e üç dakikalık bir sesli mesaj bıraktın. Nil onu yıllarca dinleyecek."),
P(S("b1C"), "Hatırlamıyorsun ama son gece balkonda bir sigara yaktın. Kırk yıldır içmiyordun, Hikmet'in markasıydı. Öksürdün ama söndürmedin."),
P(S("b1D"), "Hatırlamıyorsun ama son gece Leman'ı aradın. Titrek bir ses açtı, ikiniz de bir şey diyemediniz. Bir dakika sonra biriniz kapattı."),
"Bir bahçede uyanıyorsun. Erik ağacı, asma, tahta masa, masanın ayağının altında katlanmış bir karton var. Kuşlar ötüyor.",
"Hikmet çay demliyor. “Günaydın Saadet'im. Çayın soğuyor.”",
"Ellerine bakıyorsun, titremiyor, otuz yaşında bir terzinin elleri. Aynada saçların kapkara.",
"Günler geçiyor, belki aylar. Hikmet her sabah çay demliyor. Cem beş yaşında, bahçede koşuyor ve dizi hiç kanamıyor. Bir dikiş atölyen var. Kimse hastalanmıyor, kimse gitmiyor.",
"Bir gün atölyede bir gelinlik dikerken uzaktan bir ses duyuyorsun. Kelime değil, bir ton, kırık bir dille konuşan bir kız sesi.",
"İğne elinde duruyor, pencereden bakıyorsun ama bahçede kimse yok.",
"Ses yeniden geliyor ve bu sefer bir kelime söylüyor: “Babaanne.”"
], secenekler: [
{ t: "Rüzgârdır deyip duymazdan gelirsin.", to: "b3", etki: { mutluluk: 1, duymazdan: true } },
{ t: "Bahçeye çıkıp sesin nereden geldiğini ararsın.", to: "b3", etki: { bag: 1, aradi: true } },
{ t: "Hikmet'e “Sen de duydun mu?” diye sorarsın.", to: "b3", etki: { gercek: 1, hikmete_sordu: true } },
{ t: "Gelinliğin yakasındaki yarım kalmış, tanıdık işlemeye bakarsın.", to: "b3", etki: { gercek: 1, yaka: true } }
]},

b3: { saat: "Bahçe", baslik: "Pencere", metin: [
P(S("b2A"), "Rüzgâr dedin ama ertesi gün rüzgâr aynı kelimeyi söyledi."),
P(S("b2B"), "Erik ağacının arkasına, asmanın altına baktın, hiçbir şey yoktu. Çitin dibinde bir saç teline benzeyen mor bir şey gördün ama eğilince kaybolmuştu."),
P(S("b2C"), "“Ne sesi?” dedi Hikmet. “Rüzgâr Saadet'im, bir kuş.” Ama yüzü eski bir televizyon ekranı gibi karıncalandı."),
P(S("b2D"), "Yakada yarım kalmış bir işleme vardı, mavi iplikle bir çiçek, üç yaprak. Bunu sen dikmemiştin, ya da dikmiştin. Ama nerede? Parmakların bir şey hatırladı, bir kutu, bir not."),
"Ses her gün aynı saatte geliyor. Bazen bir Alman çocuk şarkısı söylüyor, bazen konuşuyor, bazen ağlıyor.",
"Bir gün bahçenin köşesinde daha önce hiç olmayan bir şey beliriyor, havada asılı duran bir pencere. İçinden beyaz bir oda görünüyor, bir yatak, bir serum askısı. Yatağın başında mor saçlı bir kız birinin elini tutuyor.",
"Pencerenin yanında beyaz önlüklü bir kadın beliriyor, Selcan Hanım'ın yüzüyle.",
"“Saadet Hanım, bir anomali var. Dışarıdan bir uyaran sızıyor. Pencereyi kapatabiliriz, bahçeniz yine kusursuz olur. Ya da pencereden geçebilirsiniz ama uyanmak zor olur.”",
"Arkanda elinde bir çay bardağıyla Hikmet duruyor. “Saadet'im, nereye?”"
], secenekler: [
{ t: "Pencereyi kapattırırsın.", to: "t1", etki: { mutluluk: 2, bahce_kalici: true } },
{ t: "Pencereden geçersin.", to: "t1", etki: { gercek: 2, bag: 1, uyandi: true } },
{ t: "Hikmet'e dönüp “Sen ne istersin?” diye sorarsın.", to: "t1", etki: function(d){ d.bag++; d.hikmet_karar = true; if(d.okudu || d.feride) { d.uyandi = true; } else { d.bahce_kalici = true; } } },
{ t: "Karar vermeden pencerenin önünde durup mor saçlı kıza bakarsın.", to: "t1", etki: { bag: 1, pencere_bakti: true, bahce_kalici: true } }
]},

/* ---------- GERÇEK KOLU ---------- */
g1: { saat: "Temmuz 2049", baslik: "Atölye", metin: [
"Sözleşmeyi imzalamadan, “Teşekkür ederim, çayımı kendim demlerim,” diye bir not ekleyerek geri gönderiyorsun.",
"Bir hafta sonra Karşıyaka Halk Eğitim Merkezi'ne gidiyorsun, “Gönüllü dikiş eğitmeni aranıyor” diye bir ilan görmüştün. Oda kadınlarla dolu. Çoğu genç, bazıları Arapça konuşuyor. Suriyeli kadınlar, kimi on yıldır burada yaşıyor.",
"İlk gün iğneye iplik geçiremiyorsun. Rima adında genç bir kadın iğneyi elinden alıp geçiriyor ve bir şey demeden geri veriyor.",
"Sonra onlara bir yakanın nasıl dikildiğini, bir pensin nasıl alındığını gösteriyorsun. Senin ellerin titriyor, onlarınki hızlı. Sen anlatıyorsun, onlar yapıyor.",
"Türkçeleri kırık, Arapça sana yabancı ama bir pensin nasıl alındığını herkes anlıyor.",
"Rima bir gün telefonundan bir fotoğraf gösteriyor, Halep'te yıkılmış bir ev. Enkazın içinde bir dikiş makinesinin demir ayağı görünüyor. “Annem terziydi,” diyor, “sizin gibi.”"
], secenekler: [
{ t: "Rima'ya kendi dikiş makineni vermeyi teklif edersin.", to: "g2", etki: { bag: 2, makine_verdi: true } },
{ t: "Rima'ya annesini sorarsın.", to: "g2", etki: { bag: 1, rima_anne: true } },
{ t: "Fotoğrafa bakıp Hikmet'in matbaasını düşünürsün, o da yıkıldı.", to: "g2", etki: { gercek: 1 } },
{ t: "Rima'ya gelinlik dikmeyi öğretmeyi teklif edersin.", to: "g2", etki: { bag: 1, gelinlik: true } }
]},

g2: { saat: "Kasım 2049", baslik: "Zemin", metin: [
P(S("g1B"), "Rima anlattı. Annesinin Halep'te kırk yıllık bir dükkânı varmış, Gaziantep'te bir kampta ölmüş. İğnesi şimdi Rima'da, bir kibrit kutusunun içinde taşıyor."),
P(S("g1C"), "Matbaanın yerinde şimdi bir otopark olduğunu söyledin. “Bizim evin yerinde de otopark var,” dedi Rima. İkiniz de güldünüz, gerçi gülmek doğru kelime değildi."),
P(S("g1A"), "Rima önce istemedi, sonra bir cumartesi eşiyle geldi. Makineyi dördüncü kattan indirdiler, sen de arkalarından her sahanlıkta “Yavaş” dedin. Makinenin yerinde bir boşluk, halıda dört iz kaldı."),
P(S("g1D"), "Rima'nın kız kardeşi baharda evleniyor. Salı ve perşembe günleri atölyede saten, dantel, boncuk var. Ellerin titriyor ama bir gelinliğin nasıl yapılacağını hatırlıyorlar."),
"Kasımda bir gece mutfakta düşüyorsun. Halının kenarı terliğine takılıyor, kalçan yere çarpıyor ve kalkamıyorsun.",
"Telefon salonda, şarjda. Mutfağın karoları buz gibi. Saat on bir oluyor, gece yarısı oluyor, iki oluyor. Buzdolabının motoru çalışıp duruyor. Yan daire boş.",
"Sabaha karşı aklına geliyor, Bahçe'de bu olmazdı.",
"Sabah dokuzda kapı çalınıyor. “Saadet Teyze?” Gelen Rima. Günlerden salı, sen gelmeyince merak etmiş. Komşudan anahtar alıyor, ambulans çağırıyor.",
"Hastanede Selcan Hanım'dan bir sesli mesaj geliyor: “Geçmiş olsun Saadet Hanım. Teklifimiz hâlâ geçerli, yalnız kalmamanız için.”"
], secenekler: [
{ t: "Mesajı silersin.", to: "g3", etki: { gercek: 1, sildi: true } },
{ t: "Belki bir gün diye mesajı saklarsın.", to: "g3", etki: { mutluluk: 1, sakladi: true } },
{ t: "Rima'ya teşekkür edersin.", to: "g3", etki: { bag: 2 } },
{ t: "Cem'i arayıp düştüğünü saklamadan söylersin.", to: "g3", etki: { bag: 1, gercek: 1, cem_bilsin: true } }
]},

g3: { saat: "Temmuz 2050", baslik: "Nil", metin: [
P(S("g2A"), "Mesajı hastane yatağında tek parmağınla sildin."),
P(S("g2B"), "Mesajı sakladın. Bazı geceler hastanede açıp “Yalnız kalmamanız için” kısmını dinledin."),
P(S("g2C"), "“Sana bir hayat borçluyum,” dedin. “Ben de size bir dikiş makinesi borçluyum,” dedi Rima, gülerek, makineyi vermemiş olsan da."),
P(S("y3B"), "Programı bitirdin. Başlığı kutusuna koyarken elin durdu. O gece başlıksız uyudun ve yatak çok genişti."),
P(S("g2D"), "Cem bir sonraki uçakla gelip üç gün kaldı. Giderken “Yazın Nil'i göndereceğim, bütün yaz kalsın,” dedi, “ona Türkçe öğret anne.”"),
"Yaz geliyor ve Nil İzmir'de. On yedi yaşına girmiş, mor saçları yeşile dönmüş, yanında bir sırt çantasıyla bir gitar var.",
"İlk hafta zor geçiyor, Nil telefonunda, sen pencerede oturuyorsunuz.",
"İkinci hafta Nil seni koluna girerek, merdivenleri birlikte inerek atölyeye götürüyor. Rima'yı görüyor, bir kumaşa dokunuyor. “Bana da öğretir misin?” diyor.",
"Mavi keten elbiseyi birlikte bitiriyorsunuz. Nil iğneye ipliği geçiriyor, sen gösteriyorsun. Yakaya mavi bir çiçek işleniyor.",
"Bir akşam balkonda Nil soruyor: “Babaanne, o makineye neden girmedin?”"
], secenekler: [
{ t: "“Çünkü sen beni unutmamamı istedin,” dersin.", to: "t1", etki: { bag: 1, nil_cevap: "unutma" } },
{ t: "“Çünkü deden bir başkasını sevmişti ve ben onu öyle sevmeye devam etmek istedim,” dersin.", to: "t1", etki: { gercek: 2, nil_cevap: "hikmet" } },
{ t: "“Bilmiyorum, belki korktum,” dersin.", to: "t1", etki: { gercek: 1, nil_cevap: "korku" } },
{ t: "Cevap vermek yerine yakanın son ilmeğini Nil'e attırırsın.", to: "t1", etki: { bag: 1, nil_cevap: "ilmek" } }
]},

/* ---------- YARIM KOL ---------- */
y1: { saat: "Ağustos 2049", baslik: "Üç Saat", metin: [
"Kısmi programı imzalıyorsun ve koltuğunun yanına bir başlık konuyor. Seanslar akşam yedide başlayıp onda bitiyor, bahçede olduğunu da biliyorsun.",
"İlk hafta güzel geçiyor, saat yedide Hikmet, saat onda yatak.",
"İkinci hafta gündüzler değişmeye başlıyor. Merdivenler daha uzun, ekmek daha bayat, deniz daha gri geliyor. Bakkal “Nasılsınız Saadet Hanım?” diye soruyor, cevap vermeyi unutuyorsun.",
"Üçüncü hafta saat altıda saate bakmaya başlıyorsun, dördüncü hafta saat dörtte.",
"Bir akşam saat onda çıkmıyorsun. Ekranda “Günlük süre sınırı aşıldı, bir saat daha?” yazıyor.",
"Hikmet bardağı uzatıyor. “Kal Saadet'im, gece güzel.”"
], secenekler: [
{ t: "Bir saat daha kalırsın.", to: "y2", etki: { mutluluk: 2, fazla: true } },
{ t: "Çıkarsın.", to: "y2", etki: { gercek: 1 } },
{ t: "Çıkıp başlığı bir haftalığına dolaba kaldırırsın.", to: "y2", etki: { gercek: 2, dolap: true } },
{ t: "Hikmet'e “Gündüzleri beni özlüyor musun?” diye sorarsın.", to: "y2", etki: { bag: 1, ozluyor: true } }
]},

y2: { saat: "Ekim 2049", baslik: "Karışıklık", metin: [
P(S("y1A"), "Bir saat daha kaldın, sonra bir saat daha. Saat birde başlığı çıkardığında çaydanlık ocakta unutulmuş, dibi kömür olmuştu."),
P(S("y1B"), "Saat onda çıktın. “Yarın,” dedi Hikmet. Artık her akşam bir ölüyle randevun vardı."),
P(S("y1C"), "Başlığı dolaba kaldırdın. Üçüncü gün kapağı açıp baktın, altıncı gün çıkardın."),
P(S("y1D"), "“Burada gündüz yok Saadet'im,” dedi Hikmet. “Burada hep akşam, ben de hep buradayım. Giden sensin.” O gece uyuyamadın."),
"Ekimde Nil'le görüntülü konuşuyorsun.",
"“Deden dün bana gençliğimizden bir şarkı söyledi,” diyorsun, “erik ağacının altında.”",
"Nil'in yüzü değişiyor. “Babaanne, dedem öldü, dört yıl önce.”",
"“Biliyorum ama bahçede...”",
"Duruyorsun. Dün bir bahçede miydin, yoksa bir başlığın içinde mi? Erik ağacı Buca'daki mi, öbürü mü? İki iplik aynı kumaşın içine girmiş, ayıramıyorsun.",
"Nil ağlamaya başlıyor. “Babaanne, korkuyorum.”"
], secenekler: [
{ t: "Bugün başlığı tamamen kaldırmaya karar verirsin.", to: "y3", etki: { gercek: 2, kaldir: true } },
{ t: "“Korkma güzelim, ben iyiyim,” dersin.", to: "y3", etki: { mutluluk: 1 } },
{ t: "Neyin gerçek, neyin bahçe olduğunu bir deftere yazmaya başlarsın.", to: "y3", etki: { gercek: 1, defter: true } },
{ t: "Nil'e “Sence fark eder mi?” diye sorarsın.", to: "y3", etki: { mutluluk: 1, gercek: 1, fark: true } }
]},

y3: { saat: "Aralık 2049", baslik: "Eşik", metin: [
P(S("y2A"), "Kaldırmaya karar verdin ama Selcan Hanım'ı aramadan önce bir gece daha taktın. Son kez, dedin."),
P(S("y2B"), "Nil sana inanmadı. İki gün sonra Cem aradı. “Anne, Nil diyor ki...”"),
P(S("y2D"), "Nil düşündü. “Fark eder,” dedi. “Dedem gerçekten şarkı söyleseydi ben de duyardım. Senin bahçende yalnızsın babaanne, orada ben yokum.”"),
P(S("y2C"), "Her gün yazdın, sol sayfaya gerçeği, sağ sayfaya bahçeyi. Bir ay sonra baktığında sağ taraf doluydu, sol taraf neredeyse boştu. Sol sayfada bir gün için yalnızca “ekmek aldım” yazıyordu."),
"Aralıkta Selcan Hanım arıyor. “Uzun süreli kısmi kullanımda karışma riski artıyor,” diyor. “Ya kalıcıya geçin ya da bitirin. Yarı yarıya yaşamak iki tarafı da bozuyor.”",
"Birinde Hikmet otuz beş yaşında, hiç söylemediği özürleri diliyor. Öbüründe arkasında bir ayakkabı kutusu dolusu mektup bırakmış.",
"Birinde ellerin genç, öbüründe titriyor.",
"Başlık masada duruyor. Selcan Hanım hatta bekliyor, arkasından bir klavye sesi geliyor."
], secenekler: [
{ t: "Kalıcı programa geçersin.", to: "b1", etki: { mutluluk: 2, kol: "bahce", yarim_bahce: true } },
{ t: "Programı bitirirsin.", to: "g3", etki: { gercek: 2, kol: "gercek", yarim_son: true } },
{ t: "Bir hafta daha düşünmek istersin.", to: "t1", etki: { yarim_kal: true } },
{ t: "Selcan Hanım'a “Sizce hangisi?” diye sorarsın.", to: "t1", etki: { gercek: 1, selcana: true, yarim_kal: true } }
]},

/* ---------- GÖÇ KOLU ---------- */
d1: { saat: "Eylül 2049", baslik: "Frankfurt", metin: [
"Frankfurt'tasın, üçüncü katta, asansör çalışıyor. Bir misafir odası artık senin odan, pencereden bir park ve Almanca bağıran çocuklar görünüyor.",
"İlk hafta herkes çok kibar. Sabine Türk kahvesi yapmayı öğrenmiş, köpüğü olmuyor ama yapıyor. Cem işten erken geliyor, Nil odana gelip gitar çalıyor.",
"İkinci hafta herkes işine dönüyor. Cem yedide çıkıp sekizde dönüyor, Sabine hastanede vardiyalı çalışıyor, Nil okulda.",
"Gündüzleri evde yalnızsın. Televizyon Almanca. Markette kasiyer bir şey soruyor, anlamıyorsun, arkadaki adam sabırsızlanıp sepetini yere vuruyor.",
"Karşıyaka'da da yalnızdın ama yalnızlığın Türkçeydi.",
"Bir öğleden sonra parkta bir banka oturuyorsun. Yanına başörtülü yaşlı bir kadın oturuyor ve Türkçe soruyor: “Türk müsün?”"
], secenekler: [
{ t: "Kadınla saatlerce konuşursun.", to: "d2", etki: { bag: 2, komsu: true } },
{ t: "Kadına burada da Bahçe olup olmadığını sorarsın.", to: "d2", etki: { mutluluk: 1, garten: true } },
{ t: "Eve dönüp Nil'e Türkçe ders vermeye karar verirsin.", to: "d2", etki: { bag: 1, ders: true } },
{ t: "Akşam Cem'e yalnız olduğunu açıkça söylersin.", to: "d2", etki: { gercek: 1, cem_soyle: true } }
]},

d2: { saat: "Kasım 2049", baslik: "Dil", metin: [
P(S("d1A"), "Adı Fatma'ymış, elli yıl önce Konya'dan gelmiş, fabrikada çalışmış. Her salı aynı bankta buluşmaya başladınız. Bir gün “Elli yıldır buradayım, hâlâ misafirim,” dedi, “sen elli gündür buradasın, ikimiz de misafiriz.” Çantasından Türk fırınından alınmış iki simit çıkardı."),
P(S("d1B"), "“Garten,” dedi kadın, “var. Kocam iki yıldır orada. Ben girmedim. Her pazar gidip elini tutuyorum, beni bilmiyor.”"),
P(S("d1C"), "Akşamları mutfak masasında Nil'e Türkçe ders verdin. Bir akşam “özlem” kelimesinin ne demek olduğunu sordu. Anlattın, Almancası yokmuş."),
P(S("d1D"), "Cem seni dinledi. “Biliyorum anne,” dedi, “ama ne yapayım?” Sonra Sabine'ye dönüp Almanca konuştular ve dışarıda kaldığını anladın."),
"Kasım geliyor, saat dörtte hava kararıyor. Soğukta ellerin daha çok titriyor.",
"Bir akşam yemekte biri Almanca bir şaka yapıyor ve herkes gülüyor, sen de gülümsüyorsun.",
"Nil bunu fark edip şakayı sana yavaş yavaş, kırık bir Türkçeyle çeviriyor. Çevrilince komik değil, herkes susuyor.",
"Ertesi sabah kahvaltıda Cem sana Almanca bir broşür uzatıyor, yine yeşil bir bahçe. “Frankfurt'ta bir tesis var anne,” diyor, “Türkçe programı da var. Her hafta geliriz.”"
], secenekler: [
{ t: "Broşürü alıp düşünürsün.", to: "d3", etki: { mutluluk: 1, broşür_aldi: true } },
{ t: "“Beni buraya Bahçe'ye koymak için mi getirdin oğlum?” dersin.", to: "d3", etki: { gercek: 2, sitem: true } },
{ t: "“İzmir'e dönmek istiyorum,” dersin.", to: "d3", etki: { gercek: 1, donus: true } },
{ t: "Nil'e bakarsın.", to: "d3", etki: { bag: 1, nile_bakti: true } }
]},

d3: { saat: "Aralık 2049", baslik: "Balkon", metin: [
P(S("d2A"), "Broşürü komodinin çekmecesine koydun ve her gece çekmeceyi açıp kapattın."),
P(S("d2C"), "Cem fincanını bıraktı. “Anne, orada kimin var ki?” dedi. Cevap vermedin, cevap bir mezar taşıydı."),
P(S("d2B"), "Cem'in yüzü bembeyaz oldu. “Hayır anne,” dedi, “ben yalnızca ne yapacağımı bilmiyorum.” Sabine elini Cem'in koluna koydu, Nil masadan kalktı."),
P(S("d2D"), "Nil önce broşüre, sonra babasına baktı ve Almanca kısa bir şey söyledi. Cem sustu. Nil sana dönüp çevirdi: “Babaannemi bahçeye değil, yanımıza koy dedim.”"),
"Aralıkta balkonda bir dikiş makinesi duruyor. Sabine bir Türk terzinin dükkânından ikinci el bulmuş. “Sizin için,” dedi, yeni öğrendiği Türkçesiyle.",
"Karşıyaka'da başladığın mavi keten elbiseyi bavulunda getirmiştin.",
"Balkonda eldivenlerle dikiyorsun, Nil yanında bir battaniyeye sarılmış oturuyor. Yakaya mavi bir çiçek işleniyor.",
"“Babaanne, burada mutlu musun?”",
"İğne duruyor. Aşağıda park ve Fatma'nın bankı görünüyor."
], secenekler: [
{ t: "“Hayır ama buradayım,” dersin.", to: "t1", etki: { gercek: 2, burada: true } },
{ t: "Tam doğru da tam yanlış da olmayan bir şey söylersin: “Seninle mutluyum.”", to: "t1", etki: { bag: 2, seninle: true } },
{ t: "“İzmir'e dönmek istiyorum ama sen yazın gel,” dersin.", to: "t1", etki: { gercek: 1, bag: 1, izmire_donus: true } },
{ t: "Bir şey demeden Nil'e iğneyi uzatırsın.", to: "t1", etki: { bag: 1, igne_verdi: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "2050", baslik: "Bir Yıl", metin: [
P(S("b3A"), "“Kapat,” dedin. Hikmet perdeyi çekti, kız son bir kez seslendi, sonra perde kapandı."),
P(S("b3C"), "“Sen ne istersin?” diye sordun. Hikmet şaşırdı. “Senin istediğini,” dedi. Bahçe'deki Hikmet'in kendine ait bir isteği yoktu. Pencere açık kaldı ama sen ondan uzaklaştın."),
P(S("b3D"), "Uzun uzun baktın, kız da sana baktı. Karar vermedin ve bir gün pencere kendiliğinden kapandı."),
P(S("g3A"), "Nil gitarını alıp bir Alman çocuk şarkısını kendi çevirdiği Türkçe sözlerle çaldı, iki yerde kafiye tutmadı."),
P(S("g3B"), "Nil düşündü. “Yani dedemi kusurlarıyla seçtin,” dedi, “Bahçe onları silerdi.” Başını omzuna koydu."),
P(S("g3C"), "Nil başını omzuna koydu. “Ben de korkuyorum,” dedi, “her şeyden.”"),
P(S("g3D"), "Nil son ilmeği attı, yamuk oldu, öyle bıraktınız."),
P(S("y3C"), "“Bir hafta,” dedin. Selcan Hanım güldü. “Herkes bir hafta der,” dedi."),
P(S("y3D"), "Selcan Hanım uzun süre konuşmadı, sonra başka bir sesle konuştu: “Annem için kalıcıyı seçtim. Her pazar gidiyorum ama beni tanımıyor. Bilmiyorum Saadet Hanım.”"),
P(S("d3A"), "“Hayır ama buradayım,” dedin. Nil başını salladı. Bu cümleyi yıllar sonra bir ödevine yazacaktı."),
P(S("d3B"), "Nil sana sarıldı, yarısı doğru bir cümleye tam bir sarılmayla."),
P(S("d3C"), "İlkbaharda İzmir'e döndün. Havalimanında Nil ağladı. Cem arabaya bindikten sonra uzun süre direksiyonun başında oturdu."),
P(S("d3D"), "Nil ilk ilmeği yamuk attı, ikincisini düz."),
P(BAHCE, "Bahçe'de bir yıl geçti, ya da bir gün. Hikmet her sabah çay demliyor, Cem beş yaşında."),
P(function(d){ return BAHCE(d) && d.bahce_kalici; }, "Pencere kapandı ve ses bir daha gelmedi. Çok nadiren bir yaka işlerken parmakların bir yerde duruyor."),
P(function(d){ return d.uyandi; }, "Pencereden geçtin. Beyaz bir tavan, bir serum, bir hemşirenin sesi, bir el, Nil'in eli. Üç ay kalmıştın ve kasların erimişti. İlk hafta konuşamadın, ikinci hafta çatlak bir sesle “Nil” dedin."),
P(function(d){ return d.kol === "gercek"; }, "Bir yıl geçti, Karşıyaka'dasın. Rima'nın eşi yönetime bir dilekçe yazdı ve asansör tamir edildi. Salı ve perşembe günleri atölyeye gidiyorsun, bir bastonla yürüyorsun."),
P(function(d){ return d.kol === "yarim"; }, "Bir yıl geçti ve hâlâ iki taraftasın. Günde üç saat, bazen dört. Selcan Hanım her ay arıyor."),
P(function(d){ return d.kol === "goc" && !d.izmire_donus; }, "Bir yıl geçti, Frankfurt'tasın. Üç kelime Almanca öğrendin, Danke, Bitte, Enkelin, yani torun. Her salı Fatma'yla buluşuyorsun."),
P(function(d){ return d.kol === "goc" && d.izmire_donus; }, "Bir yıl geçti, İzmir'desin. Nil yazın bir ay kaldı. Koltuğun yanında Frankfurt'tan getirdiğin bir dikiş makinesi duruyor."),
"Bir sabah telefonun çalıyor, arayan Sema.",
"“Saadet Teyze, annem dün gece öldü, Bahçe'de, kalbinden. Acı çekmemiş, gülümsüyormuş.”"
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Bahçede bir an duraklarsın. Bir rüzgâr. Bir isim: Nadide." : "Sema'ya gidersin."; }, to: "t1b", etki: { bag: 1 } },
{ t: function(d){ return BAHCE(d) ? "Hikmet'e sorarsın: “Nadide diye birini tanıyor muyuz?”" : "Sema'ya sorarsın: “Annen seni hatırladı mı, sonunda?”"; }, to: "t1b", etki: { gercek: 1, ayla_hatirla: true } },
{ t: function(d){ return BAHCE(d) ? "Çayını içersin. Bir şey yok." : "Telefonu kapatıp Hikmet'in koltuğuna oturursun. Ya da bir koltuğa."; }, to: "t1b", etki: { mutluluk: 1 } },
{ t: function(d){ return BAHCE(d) ? "Gelinliğin yakasına bakarsın." : "Nadide'nin cenazesine gidersin."; }, to: "t1b", etki: { bag: 1, cenaze: true } }
]},

t1b: { saat: "2050", baslik: "Nadide", metin: [
P(function(d){ return d.son === "t1A" && DIS(d); }, "Bayraklı'da on ikinci kattaki evine, Sema'ya gittin. Sema hiçbir şey demeden sana sarıldı. Masada Nadide'nin gözlükleri duruyordu, bir yıldır kimse kaldırmamıştı."),
P(function(d){ return d.son === "t1C" && DIS(d); }, "Telefonu kapatıp oturdun ve bir saat kıpırdamadın. Sonra kalktın."),
P(function(d){ return d.son === "t1D" && DIS(d); }, "Hikmet'in cenazesinde giydiğin siyah elbiseyi giydin, belinden biraz bol gelmişti."),
P(function(d){ return d.son === "t1C" && BAHCE(d); }, "Çayını içtin, o sabah çay biraz acıydı."),
P(function(d){ return d.son === "t1D" && BAHCE(d); }, "Gelinliğin yakasında bir kahve lekesi gördün. Bahçe'de leke olmaz. Baktın ve leke kayboldu."),
P(BAHCE, "Bahçe titriyor ve bir isim duyuyorsun, Nadide. Hikmet çayını uzatıyor. “Kim o Saadet'im?” “Bilmiyorum,” diyorsun. Bir kahve kokusu, bir kapı komşusu geliyor aklına, sonra o da gidiyor."),
P(DIS, "Cenaze Karşıyaka mezarlığında kalkıyor. Sema, kocası, iki torun, birkaç komşu ve sen varsınız."),
P(function(d){ return DIS(d) && d.ayla_hatirla; }, "“Hatırlamadı,” diyor Sema. “Son hafta bir kere gözlerini açmış, bir saniye. Kimseyi görmemiş, sonra kapatıp gülümsemiş.”"),
P(DIS, "“Annem gülümseyerek öldü,” diyor Sema, “babamla, bir bahçede. Ama onu son gördüğümde beni görmedi. Bir yıl boyunca bir yabancının elini tuttum. Annemin eliydi ama bir yabancının eliydi.”"),
P(DIS, "Toprak atılıyor, Sema ağlıyor. Bir yıldır ağlamadığını söylüyor, annesi ona iki kere ölmüş.")
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Bahçede bir şey yaparsın: erik ağacının dibine bir taş koyarsın. Neden, bilmeden." : "Sema'ya sarılırsın."; }, to: "t2", etki: { bag: 1, tas: true } },
{ t: function(d){ return BAHCE(d) ? "Bir şey yapmazsın. Bahçe kusursuz." : "Mezarın başında Nadide'ye kırk yıllık kahvenizi anlatırsın. Sesli."; }, to: "t2", etki: function(d){ if(BAHCE(d)) d.mutluluk++; else d.bag++; } },
{ t: function(d){ return BAHCE(d) ? "Hikmet'e “Sen hiç ölecek misin?” diye sorarsın." : "Kendi ölümünü düşünürsün. Nasıl istersin?"; }, to: "t2", etki: { gercek: 1, olum: true } },
{ t: function(d){ return BAHCE(d) ? "Atölyene dönüp bir gelinlik dikmeye başlarsın." : "Eve dönüp Selcan Hanım'ın numarasını telefonundan silersin. Ya da silmezsin."; }, to: "t2", etki: { mutluluk: 1 } }
]},

t2: { saat: "2051", baslik: "Nil'in Sorusu", metin: [
P(function(d){ return d.son === "t1bA" && DIS(d); }, "Mezarlığın kapısında Sema'ya sarıldın. “Annem sizi çok severdi,” dedi, “ama Bahçe'de bir kere bile sormadı.”"),
P(function(d){ return d.son === "t1bB" && DIS(d); }, "Kırk yıllık kahvelerinizi, falları, dedikoduları yüksek sesle anlattın. Sema da bilmediğin bir şey söyledi, annesi sen gelmesen de her sabah iki fincan kahve yaparmış."),
P(function(d){ return d.son === "t1bC" && DIS(d); }, "Kendi ölümünü düşündün. Bir şeyi biliyordun, Sema gibi birinin bir yıl boyunca bir yabancının elini tutmasını istemiyordun."),
P(function(d){ return d.son === "t1bD" && DIS(d); }, "Selcan Hanım'ın numarasına baktın, parmağın sil tuşunun üstünde durdu. Telefonu ekranı aşağı bakacak şekilde masaya bıraktın."),
P(function(d){ return d.son === "t1bA" && BAHCE(d); }, "Erik ağacının dibine bir taş koydun. “O ne?” dedi Hikmet, bilmiyordun."),
P(function(d){ return d.son === "t1bB" && BAHCE(d); }, "Bir şey yapmadın. O gün kuşlar biraz geç öttü."),
P(function(d){ return d.son === "t1bC" && BAHCE(d); }, "“Burada kimse ölmez Saadet'im,” dedi Hikmet. Gülüşü kusursuzdu ve bu kusursuzluk seni korkuttu."),
P(function(d){ return d.son === "t1bD" && BAHCE(d); }, "Kimin için olduğunu bilmeden bir gelinliğe başladın. Bahçe'de evlenecek kimse yoktu."),
P(BAHCE, "Bir gün kapının önünde saçları yeşil, on yedi yaşında bir kız beliriyor. Hikmet onu görmüyor ama sen görüyorsun."),
P(DIS, "Nil bir yaz daha geliyor, on sekiz yaşına girmiş. Üniversitede felsefe okuyacakmış. Cem “Ne işe yarar?” demiş, Nil gülerek anlatıyor."),
"Bir akşam Nil yanına oturuyor.",
"“Babaanne, bir makine sana kusursuz bir hayat verse ve sen onun makine olduğunu bilmesen mutlu olurdun. O zaman gerçek olup olmaması neden önemli?”",
"Cevabı gerçekten merak ediyor, dizlerini göğsüne çekmiş bekliyor.",
P(BAHCE, "Kız bunu söylüyor ama sen anlamıyorsun, ne makinesi? Ama yüzü tanıdık.")
], secenekler: [
{ t: "Ona Hikmet'in mektuplarını, Leman'ı, bir hikâye anlatırsın.", to: "y_hikaye", etki: { gercek: 1, bag: 1 } },
{ t: "Onu Hikmet'in mezarına götürürsün.", to: "y_mezar", etki: { gercek: 1, mezar: true } },
{ t: "“Mutluluk mutluluktur, haklısın,” dersin.", to: "t3", etki: { mutluluk: 2, nil_hakli: true } },
{ t: "“Bilmiyorum güzelim, ben yalnızca seçtim,” dersin.", to: "t3", etki: { gercek: 1, sectim: true } }
]},

y_hikaye: { saat: "2051", baslik: "Mürekkep", metin: [
P(BAHCE, "İçinde bir kusur olan bir hikâye arıyorsun ama Bahçe'nin hikâyelerinde kusur yok. Kız bekliyor."),
P(BAHCE, "Sonra nereden geldiğini bilmeden aklına bir şey geliyor, bir ayakkabı kutusu, mektuplar, bir kadın adı. Kekeleyerek anlatıyorsun."),
P(DIS, "Dolabı, kutuyu, Leman'ı, beş yılı, son mektubu anlatıyorsun."),
"“Deden beni beş yıl aldattı. Öğrendiğimde ölmüştü, kızamadım bile.”",
"Nil dedesini bir fotoğraftan tanıyor, bıyıklı, gülen bir matbaacı.",
"“Bahçe'deki deden bunu yapmazdı. Her sabah çay demler, hiç geç kalmaz. Ama ben o adamla kırk bir yıl evli kalmadım, bu adamla kaldım. Sigaralı, mürekkep lekeli, başka bir kadını sevmiş ama beni bırakmamış bir adamla.”"
], secenekler: [
{ t: "“Kusurlu birini seçmişim,” dersin, “hem de iki kere.”", to: "t3", etki: { gercek: 1, bag: 1, sevgi: true } },
{ t: "Nil'e mektuplardan birini verirsin, ya da yaktıysan Leman'ın adresini.", to: "t3", etki: { bag: 1, nile_mektup: true } },
{ t: "Hikâyenin gerisini Nil kendi bulsun diye bir süre susarsın.", to: "t3", etki: { gercek: 1 } },
{ t: "Ağlarsın, dört yıl sonra ilk kez Hikmet için.", to: "t3", etki: { bag: 2, agladi: true } }
]},

y_mezar: { saat: "2051", baslik: "Taş", metin: [
P(BAHCE, "Kız elinden tutup seni erik ağacının arkasına götürüyor. Orada daha önce olmayan bir kapı var, kapının arkasında da bir mezarlık."),
P(BAHCE, "Bir taşta “Hikmet Aydemir, 1969–2046” yazıyor. Oysa Hikmet arkanda, bahçede çay demliyor. Önce taşa bakıyorsun, sonra arkana, Bahçe titriyor."),
P(DIS, "Karşıyaka mezarlığındasınız. Hikmet'in taşı Nadide'ninkinden yirmi adım ötede: “Hikmet Aydemir, 1969–2046. Matbaacı.”"),
P(DIS, "Nil buraya hiç gelmemişti, cenaze olduğunda Frankfurt'taydı. Taşa dokunup “Soğukmuş,” diyor."),
"Dizlerin ağrıya ağrıya çömeliyorsun ve bir avuç toprak alıyorsun, nemli ve soğuk.",
"“Bahçe'de deden hiç ölmüyor ama burada öldü. Ben de her yıl gelip hem ona kızıyorum hem onu özlüyorum.”",
"Nil yanına çömeliyor. Bir karga taşa konup uçup gidiyor."
], secenekler: [
{ t: "Nil'e “Burada bitiyor, o yüzden ağlayabiliyorum,” dersin.", to: "t3", etki: { gercek: 2, olum_gercek: true } },
{ t: "Taşa yüksek sesle “Leman'a selam söyle,” dersin.", to: "t3", etki: { gercek: 1, bag: 1, feride_selam: true } },
{ t: "Nil'in koluna girip kalkarsın.", to: "t3", etki: { bag: 1 } },
{ t: "Toprağı bir mendile koyup cebine alırsın.", to: "t3", etki: { bag: 1, toprak: true } }
]},

t3: { saat: "2051", baslik: "Rüya", metin: [
P(function(d){ return d.son === "t2C" && DIS(d); }, "“Mutluluk mutluluktur,” dedin. Nil şaşırdı, “Gerçekten mi?” dedi. O gece yatarken bu cümle göğsüne oturdu."),
P(function(d){ return d.son === "t2D" && DIS(d); }, "Nil bunu bir kâğıda yazdı. “İlk ödevimin ilk cümlesi bu olacak,” dedi."),
P(function(d){ return d.son === "t2C" && BAHCE(d); }, "Kız uzun uzun yüzüne baktı, sonra kayboldu ve kapının önünde bir boşluk kaldı."),
P(function(d){ return d.son === "t2D" && BAHCE(d); }, "“Ben yalnızca seçtim,” dedin ama neyi seçtiğini hatırlamıyordun. Kız gülümseyip kayboldu."),
P(function(d){ return d.son === "y_hikayeA" && DIS(d); }, "Nil güldü, “İki kere mi?” dedi. “Biri o adam, biri de bu bahçeye girmemek,” dedin. Nil bir süre düşündü. “Makine seçemez,” dedi, “yalnızca verir.”"),
P(function(d){ return d.son === "y_hikayeB" && !d.yakti; }, "Nil mektubu okurken önce ağladı, sonra güldü. “Dedem berbat bir şairmiş,” dedi, haklıydı da."),
P(function(d){ return d.son === "y_hikayeB" && d.yakti; }, "Mektupları yakmıştın, Nil'e Leman'ın adresini verdin. Nil adresi telefonuna kaydetti. “Belki bir gün,” dedi."),
P(S("y_hikayeC"), "Sen sustun, Nil de sustu."),
P(S("y_hikayeD"), "Ağladın. Nil bileğini tuttu ve hiçbir şey demedi."),
P(function(d){ return d.son === "y_mezarA" && DIS(d); }, "Nil taşa dokundu. “O zaman Bahçe'de kimse ağlayamaz,” dedi, “çünkü orada hiçbir şey bitmiyor.”"),
P(function(d){ return d.son === "y_mezarA" && BAHCE(d); }, "“Burada bitiyor,” dedin, nereden aklına geldiğini bilmeden. Bahçe titredi."),
P(S("y_mezarB"), "“Leman'a selam söyle,” dedin. Nil önce sana baktı, sonra güldü, sen de güldün. Bir mezarın başında gülen iki kadındınız."),
P(S("y_mezarC"), "Nil'in koluna girip kalktın, dizlerin çatırdadı. Kapıya kadar ikiniz de konuşmadınız."),
P(S("y_mezarD"), "Toprağı mendile koydun. Akşam onu bir saksıya döküp içine bir erik çekirdeği gömdün."),
P(BAHCE, "O gece Bahçe'de daha önce hiç olmayan bir şey oluyor, uyuyorsun ve bir rüya görüyorsun."),
P(DIS, "O gece bir rüya görüyorsun, kendi beyninin gördüğü bir rüya."),
"Rüyada Hikmet var ama genç hâli değil, ölmeden önceki hâli. Yetmiş yedi yaşında, zayıf, üstünde hastane pijaması, Karşıyaka'daki koltuğunda oturuyor. Elinde soğumuş bir çay var.",
"“Saadet,” diyor. “Saadet'im” demiyor, “Saadet” diyor, aslında hep öyle derdi.",
"Mektuplardan söz etti mi etmedi mi, uyandıktan sonra hatırlamıyorsun.",
"Özür dilemiyor. Çayından bir yudum alıp yüzünü buruşturuyor. “Soğumuş.”",
"“Sen hep soğuturdun,” diyorsun.",
"Gülüyor, gülüşü öksürüğe karışıyor.",
"Uyandığında yastığın ıslak."
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Uyandığında Hikmet'e bakarsın, otuz beş yaşındaki Hikmet'e, ve bir şey fark edersin." : "Kalkıp bir çay demlersin. İki bardak."; }, to: "t4", etki: function(d){ d.bag++; if(BAHCE(d)) d.fark_etti = true; } },
{ t: "Unutmamak için rüyayı bir deftere yazarsın.", to: "t4", etki: { gercek: 1, ruya_yazdi: true } },
{ t: "Rüyayı unutulmaya bırakırsın.", to: "t4", etki: { mutluluk: 1 } },
{ t: function(d){ return BAHCE(d) ? "Rüyayı Hikmet'e anlatırsın." : "Rüyayı Nil'e anlatırsın."; }, to: "t4", etki: { bag: 1, nile_ruya: true } }
]},

t4: { saat: "2052", baslik: "Son Dikiş", metin: [
P(function(d){ return d.son === "t3A" && DIS(d); }, "İki bardak çay demledin, birini koltuğun yanına koyup soğumaya bıraktın."),
P(S("t3B"), "Rüyayı üç sayfaya, öksürüğüne kadar yazdın."),
P(S("t3C"), "Öğlene kadar ondan geriye tek bir kelime kaldı, soğumuş."),
P(function(d){ return d.son === "t3D" && DIS(d); }, "Nil telefonda dinledi. “Bahçe'dekinden daha çok dedeme benziyor,” dedi."),
P(function(d){ return d.son === "t3D" && BAHCE(d); }, "Hikmet dinledi. “Ben hiç öksürmem ki,” dedi, haklıydı."),
P(function(d){ return BAHCE(d) && d.fark_etti; }, "Otuz beş yaşındaki Hikmet'e bakarken rüyadakini daha çok sevdiğini fark ediyorsun. Bu Hikmet seni hiç kızdırmadı, hiç hayal kırıklığına uğratmadı, belki de bu yüzden hiçbir zaman tam olarak senin olmadı."),
P(function(d){ return BAHCE(d) && !d.fark_etti; }, "Bir sabah daha geliyor, erik ağacı çiçek açmış."),
P(DIS, "Bir sabah dikiş makinesinin başındasın. Yıllardır yarım kalan mavi keten elbiseye bugün son ilmeği atacaksın."),
"İğneye iplik geçirmek on beş dakikanı alıyor.",
"Mavi çiçeğin son yaprağını dikiyorsun, iğne girip çıkıyor, sonra bir düğüm atıyorsun.",
"Elbise bitti.",
P(BAHCE, "Bahçe'de bir gelinlik bitirdin. Yakadaki çiçek Bahçe'nin hiçbir desenine benzemiyor, nereden bildiğini bilmeden diktin onu.")
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Gelinliği bahçedeki erik ağacına asarsın." : "Elbiseyi Nil'e kendi ellerinle verirsin. Ya da gönderirsin."; }, to: "rs", etki: { bag: 1 } },
{ t: "Yakanın iç tarafına küçük bir S harfi işlersin.", to: "rs", etki: { gercek: 1, harf: true } },
{ t: "Makinenin örtüsünü kapatırsın, bu son elbiseydi.", to: "rs", etki: { mutluluk: 1, son_elbise: true } },
{ t: "Bir kumaş daha çıkarıp titreyen ellerinle yenisine başlarsın.", to: "rs", etki: { gercek: 1, bag: 1, yeni_elbise: true } }
]},

rs: { yonlendir: [
{ if: function(d){ return d.uyandi; }, to: "son_uyanis" },
{ if: BAHCE, to: "son_bahce" },
{ if: function(d){ return d.kol === "yarim"; }, to: "son_iki_dunya" },
{ if: function(d){ return d.kol === "goc"; }, to: "son_baska_ev" },
{ to: "son_igne" }
]},

/* ---------- SONLAR ---------- */
son_bahce: { son: true, baslik: "Bahçe", metin: [
P(S("t4A"), "Gelinliği kimin için olduğunu bilmeden erik ağacına asmıştın."),
P(S("t4B"), "Yakanın içine bir S işlemiştin."),
P(S("t4C"), "Makinenin örtüsünü kapatmıştın ama ertesi sabah açıktı, Bahçe'de hiçbir şey bitmez."),
P(S("t4D"), "Bir gelinliğe daha başlamıştın."),
"Bahçe'desin. Hikmet çay demliyor, erik ağacı her bahar çiçek açıyor, ellerin genç.",
"Menemen yolundaki tesisin üçüncü katında, dördüncü odada, pencerenin yanındaki yatakta yaşlı bir kadın yatıyor. Gözleri kapalı, yüzünde bir gülümseme var. Bir hemşire dört saatte bir yanını değiştiriyor.",
"Ayda bir saçları yeşil bir genç kadın gelip elini tutuyor. Almanca Türkçe karışık anlatıyor, üniversiteyi, bir sevgiliyi, yakasını kendi bitirdiği bir elbiseyi.",
"Kadın duymuyor, gülümsüyor.",
"Taramalara göre mutlusun.",
"Nil bir gün yatağının başında başka birine şöyle diyor: “Babaannem mutlu öldü ama ben onu çok önce kaybettim.”"
]},

son_uyanis: { son: true, baslik: "Pencere", metin: [
P(S("t4A"), "Elbiseyi Nil'e kendi ellerinle vermiştin. Nil giymeden önce yakasına uzun uzun baktı."),
P(S("t4B"), "Yakanın içine küçük bir S işlemiştin."),
P(S("t4C"), "Dantel örtüyü düzeltip makinenin üstünü kapatmıştın."),
P(S("t4D"), "Bitirip bitiremeyeceğini bilmeden başka bir kumaşa başlamıştın."),
"Pencereden geçtin ve bir hastane odasında, elin Nil'in elinin içinde uyandın.",
"Uyanmak zor oldu, yürümeyi yeniden öğrendin. Bazı sabahlar Hikmet'in çay demlediğini sanıp sonra hatırladın. Bahçe'den sana bir erik kokusuyla hiç söylenmemiş bir özür kaldı.",
"Selcan Hanım raporuna “Uyanış sonrası uyum olağandışı derecede olumlu” diye yazdı. Yüzde üçün içindeydin.",
"Nil o yaz da, ertesi yaz da İzmir'de kaldı. Yatağının başında aylarca Almanca, Türkçe konuştuğunu, şarkı söylediğini sonradan öğrendin. “Duyduğunu bilmiyordum,” dedi, “ama yine de konuştum.”",
"Mavi elbise şimdi Nil'in dolabında, her yaz İzmir'de balkonda giyiyor. Bir keresinde üstüne çay döktü, leke çıkmadı. “Bırak kalsın,” dedin."
]},

son_igne: { son: true, baslik: "İğne ve İplik", metin: [
P(S("t4A"), "Elbiseyi Nil'e kendi ellerinle vermiştin. Nil giymeden önce yakasına uzun uzun baktı."),
P(S("t4B"), "Yakanın içine küçük bir S işlemiştin."),
P(S("t4C"), "Dantel örtüyü düzeltip makinenin üstünü kapatmıştın."),
P(S("t4D"), "Bitirip bitiremeyeceğini bilmeden başka bir kumaşa başlamıştın."),
"Bahçe'ye girmedin.",
"Merdivenler, titreyen eller, bir düşüş, bir baston oldu. Salı ve perşembe günleri atölyeye, Rima'yla öbür kadınların yanına gittin. Nil her yaz geldi, Türkçesi her yıl biraz daha düzeldi. Elinde bir kutu mektup ya da onun külü, bir mezar taşı, bir de rüya kaldı.",
P(function(d){ return d.makine_verdi; }, "Rima'nın kız kardeşinin gelinliği bir bahar sabahı bitti. Düğünde bastonunla en öndeydin. Gelin dans ederken etek ucunun kıvrımına baktın, teknik senindi ama eller Rima'nındı."),
"Bir gün, belki bir hastanede, belki evinde ya da atölyede öleceksin. Geride birkaç insanın hafızasında eksik ve kusurlu bir kadın kalacak.",
"Geçen salı Rima gözlüğünü evde unuttuğu için iğneye iplik geçiremedi. Sen geçirdin, elin titredi ama iplik geçti."
]},

son_iki_dunya: { son: true, baslik: "İki Dünya", metin: [
P(S("t4A"), "Elbiseyi Nil'e kendi ellerinle vermiştin. Nil giymeden önce yakasına uzun uzun baktı."),
P(S("t4B"), "Yakanın içine küçük bir S işlemiştin."),
P(S("t4C"), "Dantel örtüyü düzeltip makinenin üstünü kapatmıştın."),
P(S("t4D"), "Bitirip bitiremeyeceğini bilmeden başka bir kumaşa başlamıştın."),
"Hâlâ iki taraftasın.",
"Gündüzleri Karşıyaka'da, akşamları Bahçe'desin. Defterinin sol sayfası gerçek, sağ sayfası Bahçe, ikisini yan yana koyup bakmak istemiyorsun.",
"Selcan Hanım her ay arıyor, sen de her ay “Bir ay daha,” diyorsun.",
"Nil'le konuşurken bazen Bahçe'den bir şey anlatıyorsun ve Nil susuyor. Artık düzeltmiyor, yalnızca dinliyor, bu da seni daha çok korkutuyor.",
"Bir kumaş atkı ve çözgüyle dokunur. İkisinin rengi ayrıdır ve ikisi de görünür ama seninkinde hangisinin hangisi olduğunu artık seçemiyorsun."
]},

son_baska_ev: { son: true, baslik: "Başka Bir Ev", metin: [
P(S("t4A"), "Elbiseyi Nil'e kendi ellerinle vermiştin. Nil giymeden önce yakasına uzun uzun baktı."),
P(S("t4B"), "Yakanın içine küçük bir S işlemiştin."),
P(S("t4C"), "Dantel örtüyü düzeltip makinenin üstünü kapatmıştın."),
P(S("t4D"), "Bitirip bitiremeyeceğini bilmeden başka bir kumaşa başlamıştın."),
P(function(d){ return !d.izmire_donus; }, "Frankfurt'tasın, bir misafir odasında, bir balkonda, bir dikiş makinesinin başında. Önce üç kelime Almanca öğrendin, sonra beş, sonra on. Salıları hâlâ Fatma'yla buluşuyorsun."),
P(function(d){ return d.izmire_donus; }, "İzmir'e döndün ve Frankfurt'ta bir balkon bıraktın. Artık iki evin var ve ikisinde de bir yanın eksik."),
"Bir akşam yemeğinde herkes anlamadığın bir şakaya gülerken torunun durup şakayı senin için çevirmişti. Çevrilince komik değildi ama yine de çevrildi.",
"Nil bir gün “Babaanne, özlemin Almancası yok ama ben artık ne demek olduğunu biliyorum,” dedi."
]}

},

ayna: function(d){
  var out = [];
  var g = d.gercek, m = d.mutluluk, b = d.bag;
  if(g >= m && g >= b) out.push("Çoğu kavşakta kusurlu olanı seçtin, mektupları, titreyen elleri, mezar taşını.");
  else if(m >= b) out.push("Çoğu kavşakta bahçeye, çaya, hiç söylenmemiş özürlere döndün.");
  else out.push("Çoğu kavşakta Nil'e, Rima'ya, Sema'ya döndün.");
  if(d.okudu) out.push("Leman'a yazılmış mektupları sonuna kadar okudun.");
  if(d.yakti) out.push("Mektupları balkonda bir tencerenin içinde yaktın.");
  if(d.uyandi) out.push("Bahçeden Nil'in sesine doğru yürüdün.");
  if(d.feride) out.push("Leman'ı bulup onunla bir saat oturdun.");
  return out;
},

dipnot: [
{ ad: "Deneyim makinesi", t: "Robert Nozick 1974'te bir düşünce deneyi önerdi: bir makineye bağlanıp istediğiniz her deneyimi, gerçekmiş gibi, ömür boyu yaşayabilseydiniz, bağlanır mıydınız? Çoğu insanın “hayır” demesi, Nozick'e göre, yalnızca mutluluğu değil, bir şeyi gerçekten yapmayı, gerçekten biri olmayı ve gerçeklikle temas etmeyi de önemsediğimizi gösterir." },
{ ad: "Sahicilik", t: "Varoluşçu düşünürler için sahicilik, insanın kendi hayatını, kendi seçimlerini ve kendi sınırlarını kabul ederek yaşamasıdır. Kusursuz bir simülasyon, insanı acıdan korur; ama aynı zamanda seçimin, kaybın ve kusurun anlam yarattığı alandan da uzaklaştırır." },
{ ad: "Yaşlılık ve yalnızlık", t: "Simone de Beauvoir “Yaşlılık” kitabında, toplumun yaşlıları görünmez kıldığını ve onların ihtiyaçlarını bir “sorun” olarak ele aldığını yazar. Bahçe, bir yandan yaşlılara bir mutluluk sunar; öbür yandan bir toplumun yaşlılarıyla yüzleşmekten kaçmasının teknolojik bir yolu olabilir." },
{ ad: "Hafıza ve sevgi", t: "Bir insanı sevmek, onun gerçek hâlini mi, yoksa onun hakkındaki hatıralarımızı mı sevmektir? Bahçe'deki Hikmet, Saadet'in hafızasından yapılmış bir Hikmet'tir; kusurları ayıklanmış. Gerçek sevginin kusurlu birini seçmek olup olmadığı, bu hikâyenin sorusuydu." }
]
});
})();
