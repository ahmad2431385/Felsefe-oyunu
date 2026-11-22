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
giris: "2049, İzmir. Yetmiş sekiz yaşındasın, emekli bir terzisin; eşin üç yıl önce öldü, oğlun Almanya'da. Bir sabah posta kutunda bir broşür: “Bahçe. Hayatınızın en güzel hâli, sonsuza dek.” Bir makine sana kusursuz bir hayat sunuyor; eşin yanında, genç, mutlu. Tek şart, bir daha uyanmamak ve uyumakta olduğunu bilmemek. Gerçek bir hayatın acısı mı, sahte bir hayatın mutluluğu mu? Bir kadının son seçiminin hikâyesi.",
kavramlar: ["Gerçek ve mutluluk", "Sahicilik", "Yaşlılık ve yalnızlık", "Hafıza ve sevgi"],
ozet: "Yetmiş sekiz yaşında, yalnız bir kadına kusursuz bir sanal hayat teklif ediliyor: ölen eşiyle, sonsuza dek. Tek şart, gerçeğe hiç dönmemek.",
baslangic: "a1",
durum: { gercek: 0, mutluluk: 0, bag: 0 },

sahneler: {

a1: { saat: "Mart 2049", baslik: "Broşür", metin: [
"Karşıyaka, denize iki sokak, dördüncü kat. Asansör üç aydır bozuk. Yönetici her ay “gelecek hafta” diyor. Merdivenleri günde bir kez iniyorsun: ekmek, ilaç, posta. Çıkması yirmi dakika. İkinci katın sahanlığında bir sandalye bırakmışlar, oturup soluklanıyorsun.",
"Adın Saadet, yetmiş sekiz yaşındasın. Kırk yıl terzilik yaptın. Mahallenin gelinliklerinin yarısı senin elinden çıktı. Dikiş makinen köşede, üstünde bir dantel örtü.",
"Hikmet üç yıl önce öldü. Koltuğu pencerenin önünde, hâlâ onun koltuğu. Minderi onun şeklini almış. Bazı akşamlar ona da bir çay koyuyorsun. Sonra iki bardağı birlikte yıkıyorsun.",
"Oğlun Cem Frankfurt'ta. Ayda bir görüntülü arama, on dakika. Torunun Nil on altı yaşında; Türkçesi her ay biraz daha takılıyor.",
"Yan daire bir yıldır boş. Nadide oradaydı. Kırk yıllık komşu, sabah kahvesi. Geçen bahar gitti. Ölmedi. “Bahçe”ye girdi.",
"Bu sabah posta kutusunda parlak bir broşür: yeşil bir bahçe, bir çardak, altında gülümseyen yaşlı bir çift.",
"“Bahçe. Hayatınızın en güzel hâli, sonsuza dek. Huzur Sistemleri, devlet destekli yaşlı bakım programı. Kaybettiklerinizle yeniden buluşun. Ücretsiz deneme seansı için arayın.”",
"Broşürü masaya, Hikmet'in koltuğunun yanına koyuyorsun."
], secenekler: [
{ t: "Broşürü çöpe atarsın.", to: "a2", etki: { gercek: 1, cope: true } },
{ t: "Broşürü okursun. Her kelimesini. İki kez.", to: "a2", etki: { mutluluk: 1 } },
{ t: "Nadide'nin kızı Sema'yı arayıp annesini sorarsın.", to: "a2", etki: { bag: 1, ayla_aradi: true } },
{ t: "Hikmet'in koltuğuna oturursun. Üç yıldır hiç oturmadın.", to: "a2", etki: { bag: 1, koltuk: true } }
]},

a2: { saat: "Mart 2049", baslik: "Deneme Seansı", metin: [
P(S("a1B"), "İki kez okudun. Son sayfada, küçük harflerle: “Kalıcı programda katılımcının dış dünyayla bilinçli bağı sona erer.” O satırı gözlüğünü çıkarıp bir daha okudun."),
P(S("a1A"), "Çöpe attın. Akşam çöpü dökerken broşür en üstteydi. Yeşil bahçe, gülümseyen çift. Geri aldın, silip kuruladın."),
P(S("a1C"), "Sema'nın sesi yorgundu. “Annem çok iyi. Mutlu. Hep gülümsüyor.” Sustu. “Ben onu kaybettim Saadet Teyze. Ama o mutlu. Nasıl anlatayım bilmiyorum.”"),
P(S("a1D"), "Koltuğun yayı gıcırdadı. Onun ağırlığına alışmış. Pencereden onun her sabah baktığı deniz. Kolçakta bir sigara yanığı. On yıl önce, sen ona çok kızmıştın."),
"Bir hafta sonra Bostanlı'da camdan bir bina. İçeride yeşil bitkiler, yumuşak bir müzik, nane kokusu. Danışman Selcan Hanım, kırklarında, sesi alçak. Bir oda, bir koltuk, bir başlık.",
"“Yirmi dakika. İstediğiniz an elinizi kaldırın, çıkarız.”",
"Başlığı takıyorsun. Karanlık. Sonra ışık.",
"Bir bahçe. Hikmet'le evlendiğiniz yıl Buca'da kiraladığınız evin bahçesi. Erik ağacı, asma, tahta masa. Masanın bir ayağının altında katlanmış karton. Masada çay demleyen bir adam. Otuz beş yaşında, bıyığı kara, gömleği beyaz.",
"Hikmet. “Geldin mi Saadet'im? Çay tam demlendi.”",
"Sesi. Tütün ve kolonya kokusu. Elinin üstündeki küçük yanık izi. Çaydanlığın kulpundan, hep aynı yerden yakardı."
], secenekler: [
{ t: "Masaya oturup çayını içersin. Yirmi dakikanın sonuna kadar.", to: "a3", etki: { mutluluk: 2, sonuna: true } },
{ t: "Hikmet'in elini tutarsın.", to: "x_el", etki: { mutluluk: 1, bag: 1 } },
{ t: "Ona sorarsın: “Sen gerçek misin?”", to: "x_soru", etki: { gercek: 1 } },
{ t: "Daha beş dakika dolmadan elini kaldırırsın.", to: "a3", etki: { gercek: 2, erken_cikti: true } }
]},

x_el: { saat: "Mart 2049", baslik: "Sıcak El", metin: [
"Elini uzatıyorsun. Hikmet tutuyor. Sıcak. Matbaacı eli. Parmak uçlarında mürekkep, tırnak diplerinde siyah.",
"“Ne oldu? Gözlerin dolmuş.”",
"Bir şey diyemiyorsun.",
"Hikmet elini sıkıyor. Sonra beklemediğin bir şey: “Saadet'im. Cem doğduğunda hastaneye geç geldim. Nedenini hiç söylemedim. İçiyordum. Korkmuştum. Özür dilerim.”",
"Bu konuşma hiç olmadı. Kırk bir yıl o gece hiç konuşulmadı. Sen biliyordun. O da senin bildiğini biliyordu.",
"Şimdi bir makine, onun ağzından, hiç söylenmemiş bir özür söylüyor. Senin hafızandan bulmuş olmalı. Duymayı en çok istediğin cümleyi.",
"Ve iyi geliyor. Göğsünde bir yer gevşiyor.",
"İçinde bir ses: Hikmet bunu söylemezdi. Hikmet konuyu değiştirirdi, “Çayın soğuyor” derdi."
], secenekler: [
{ t: "“Affettim,” dersin.", to: "a3", etki: { mutluluk: 1, affetti_sim: true } },
{ t: "Elini çekersin. “Sen o değilsin,” dersin.", to: "a3", etki: { gercek: 2, cekti: true } },
{ t: "Bir şey demezsin. Elini tutmaya devam edersin.", to: "a3", etki: { mutluluk: 1, bag: 1 } },
{ t: "“Bunu neden şimdi söylüyorsun?” diye sorarsın.", to: "a3", etki: { gercek: 1, neden: true } }
]},

x_soru: { saat: "Mart 2049", baslik: "Soru", metin: [
"“Sen gerçek misin?”",
"Hikmet bardağı bırakıyor. Şaşırmıyor.",
"“Sen ne istersen o. Gerçek olmamı istersen gerçeğim. Ama senin hatırladığın Hikmet de senin kafandaydı. Ben ondan yapıldım. Hangisi daha gerçek?”",
"Bu cümle bir matbaacının değil.",
"“Hikmet böyle konuşmazdı,” diyorsun.",
"Hikmet gülüyor. Öksürükle karışık, tam onun gülüşü. “Haklısın. Hikmet ‘Çayın soğuyor’ derdi. Çayın soğuyor Saadet'im.”",
"Kırk bir yıl her sabah söylediği cümle.",
"Makine senden öğreniyor. Senin itirazından. Bir sonraki cümlede biraz daha o olacak."
], secenekler: [
{ t: "Çayını içersin.", to: "a3", etki: { mutluluk: 1, cay: true } },
{ t: "Elini kaldırıp çıkarsın.", to: "a3", etki: { gercek: 2 } },
{ t: "“Bir daha söyle,” dersin. “Çayın soğuyor.”", to: "a3", etki: { mutluluk: 1, bag: 1, bir_daha: true } },
{ t: "Makineye sorarsın: “Beni ne kadar tanıyorsun?”", to: "a3", etki: { gercek: 1, tanima: true } }
]},

a3: { saat: "Nisan 2049", baslik: "Nadide", metin: [
P(S("x_elC"), "Elini sonuna kadar tuttun. Dolmuşta eve dönerken avucunu dizine kapattın. Sıcaklık gitmesin diye."),
P(S("x_elD"), "Hikmet bir an durdu. Görüntü titredi. “Çünkü sen bunu duymak istedin Saadet'im.” Makinenin söylediği en dürüst cümle buydu."),
P(S("x_soruA"), "Çayını içtin. Tadı tam onun demiydi. Biraz fazla koyu. Soru masada kaldı."),
P(S("x_soruB"), "Elini kaldırdın. Selcan Hanım başlığı çıkarırken gülümsedi: “Herkes ilk seferde böyle yapar. İkincisinde kalırlar.”"),
P(S("a2A"), "Yirmi dakika. Çay, erik ağacı, onun sesi. Sonra karanlık. Başlığı çıkardığında koltuğun kolunu sıkıyordun. Bir saat kendine gelemedin. Selcan Hanım bir bardak ıhlamur getirdi."),
P(S("a2D"), "Beş dakika dolmadan elini kaldırdın. Selcan Hanım şaşırdı. “Çoğu kişi yirmi dakikayı bitirir.” Sana su verdi. Bardağı iki elinle tutmak zorunda kaldın."),
P(S("x_elA"), "“Affettim,” dedin. Hikmet gülümsedi. Seans bitince ağladın. Kırk bir yıllık bir susuşu bir makine bozmuştu. Eve dönerken buna minnettar mıydın, bilemedin."),
P(S("x_elB"), "Elini çektin. Hikmet'in yüzü yumuşadı. “Peki.” Bahçe soldu. Selcan Hanım bir not aldı. Ters çevirdiği kâğıtta “gerçeklik direnci” kelimelerini okudun."),
P(S("x_soruC"), "“Çayın soğuyor Saadet'im.” Bir daha. Bir daha. Eve dönünce kendi çayını koydun ve soğumasını bekledin."),
P(S("x_soruD"), "“Telefonunuzu, fotoğraflarınızı, sesli mesajlarınızı, beyin taramanızı biliyorum,” dedi Hikmet. Ya da makine. “Hikmet'in kayıtlarını da. Söylenmiş her şeyi bilirim. Söylenmemişleri tahmin ederim.”"),
"Bir hafta sonra Nadide'yi ziyarete gidiyorsun. Menemen yolunda eski bir hastane binası. Uzun koridorlar, her odada sekiz yatak.",
"Nadide pencerenin yanında. Gözleri kapalı, başında ince bir başlık, kolunda serum, karnında beslenme tüpü. Yüzü gülümsüyor. Bir yıldır.",
"Bir hemşire Nadide'yi yan çeviriyor. Yatak yarası olmasın. “Çok huzurlular,” diyor. “Bu odadakilerin hepsi.”",
"Odada sekiz gülümseyen yüz.",
"Kapıda Sema. Her pazar geliyor. Annesinin elini tutuyor, saçını tarıyor, mahalleden haberler anlatıyor: bakkal kapanmış, karşı apartmana yeni kiracı gelmiş.",
"“Duymuyor,” diyor Sema. “Biliyorum. Yine de anlatıyorum. Annem bir bahçede, babamla. Ben burada.”"
], secenekler: [
{ t: "Nadide'nin elini tutarsın.", to: "a4", etki: { bag: 1, nadide_el: true } },
{ t: "Sema'ya sorarsın: “Annenin mutlu olduğunu nereden biliyorsun?”", to: "a4", etki: { gercek: 1, ayla_soru: true } },
{ t: "Gülümseyen yüze uzun uzun bakarsın. Kıskanarak.", to: "a4", etki: { mutluluk: 1, kiskandi: true } },
{ t: "Koridordaki öbür odalara bakarsın. Kaç kişi?", to: "a4", etki: { gercek: 1, odalar: true } }
]},

a4: { saat: "Nisan 2049", baslik: "Frankfurt'tan Bir Ses", metin: [
P(S("a3A"), "Nadide'nin elini tuttun. Sıcak, yumuşak. Kırk yıl fincan tutmuş. İçinde hiçbir şey kıpırdamadı."),
P(S("a3C"), "Kıskandın. Bunu otobüste kendine itiraf ettin. O bir bahçede, kocasıyla. Sen dördüncü katta, bozuk bir asansörle."),
P(S("a3B"), "“Yüzünden. Bir de taramalardan. Mutluluk hormonları yüksek, bir yıldır.” Sema durdu. “Ama ben onunla mutlu olmak istiyordum. Burada.”"),
P(S("a3D"), "Saydın. Kırk iki oda, her birinde sekiz yatak. Hemşire binanın üç katı daha olduğunu söyledi. Söylerken gururlu gibiydi."),
"Pazar akşamı Cem'le görüntülü arama. Arkada Frankfurt'taki mutfak. Gelinin Sabine bir şeyler doğruyor.",
"Bahçe'yi açıyorsun. Cem bir süre bir şey demiyor. Sonra: “Anne, ben de düşünüyordum. Sana söylemeye çekiniyordum.”",
"“Yalnızsın. Merdivenler, ellerin. Ben buradan bir şey yapamıyorum. Bakımevleri çok pahalı. Bahçe devlet destekli. Babamla olursun. Biz de ziyarete geliriz; Sema'nın Nadide Teyze'ye gittiği gibi.”",
"Oğlun seni bir yatakta, gözleri kapalı, gülümserken hayal ediyor. Ve bunu iyi bir şey sanıyor.",
"Ekranda bir hareket. Nil telefonu babasının elinden kapıyor. Saçları mor, yüzü kızgın.",
"“Babaanne! Gitme! O makine yalan! Babam bilmiyor, ben okudum!”",
"Cem telefonu geri almaya çalışıyor. Nil vermiyor. Ekran sallanıyor, tavan görünüyor."
], secenekler: [
{ t: "Nil'e sorarsın: “Ne okudun güzelim?”", to: "x_nil", etki: { bag: 1, gercek: 1 } },
{ t: "Cem'e sorarsın: “Neden sen gelmiyorsun oğlum?”", to: "x_cem", etki: { bag: 1 } },
{ t: "“Düşüneceğim,” dersin ikisine de.", to: "a5", etki: { mutluluk: 1 } },
{ t: "Telefonu kapatırsın. Bu konuşmayı bir ekranda yapamazsın.", to: "a5", etki: { gercek: 1, kapatti: true } }
]},

x_nil: { saat: "Nisan 2049", baslik: "Nil", metin: [
"Nil odasına koşup kapıyı kilitliyor; Cem'in sesi arkada kalıyor. Ekranda posterler, bir gitar, yatakta yığılı kitaplar.",
"“Okulda proje yaptım,” diyor. Arada bir Almanca kelime. “Bahçe hakkında. Burada da var, ‘Garten’ diyorlar. Bir araştırma okudum. İçerideki insanlar bir süre sonra gerçek insanları unutuyor. Simülasyondakiler daha kolay. Gerçek yüzler siliniyor.”",
"Gözleri dolu.",
"“Nadide Teyze'nin kızı ziyarete gidiyor, değil mi? Annesi onu hatırlamıyor artık. Bahçe'de bir kızı var ama o simülasyon.”",
"Sesi kısılıyor: “Babaanne, sen beni unutursan... Ben elini tutarım, sen beni hiç tanımamış gibi. Ich will das nicht. İstemiyorum.”"
], secenekler: [
{ t: "“Seni unutmam,” dersin.", to: "a5", etki: { bag: 1, unutmam: true } },
{ t: "“Belki unuturum. Ama mutlu olurum,” dersin. Dürüst olmak istiyorsun.", to: "a5", etki: { mutluluk: 1, gercek: 1, durust: true } },
{ t: "Nil'den o araştırmayı sana göndermesini istersin.", to: "a5", etki: { gercek: 1, arastirma: true } },
{ t: "Bir şey demeden ekrandaki yüzüne bakarsın. Ezberlemek için.", to: "a5", etki: { bag: 2, ezber: true } }
]},

x_cem: { saat: "Nisan 2049", baslik: "Cem", metin: [
"“Neden sen gelmiyorsun oğlum?”",
"Cem telefonu Nil'den alıp balkona çıkıyor. Arkada şehrin ışıkları, bir tramvay sesi.",
"“Anne, işim burada. Sabine'nin işi. Nil'in okulu. Dönsem ne yaparım? Sen gelsen ne yaparsın? Almanca bilmiyorsun.”",
"“Seni tanıyorum.”",
"Cem susuyor. Sonra sesi değişiyor. “Babam öldüğünde gelemedim. Savaş değildi, salgın değildi. İşteydim. Bir toplantı. Cenazeden sonra geldim. Sen hiçbir şey demedin. Üç yıldır bir şey demeni bekliyorum.”",
"Biliyordun. Söylemedin. Kırk bir yıl Hikmet'le susmayı öğrendin. Oğlunla da susmuşsun.",
"“Bahçe'de babamla olursun. Ben de başında otururum. Belki ikimiz için de daha kolay.”"
], secenekler: [
{ t: "“Seni affettim oğlum. Babanın cenazesi için. Hiç kızmadım,” dersin.", to: "a5", etki: { bag: 2, cem_af: true } },
{ t: "“Kızgındım,” dersin. Üç yıl sonra.", to: "a5", etki: { gercek: 2, cem_kizgin: true } },
{ t: "“Bahçe senin için mi kolay olacak, benim için mi?” diye sorarsın.", to: "a5", etki: { gercek: 1, kimin_icin: true } },
{ t: "Bir şey demezsin. Ekrandaki ışıklara bakarsın.", to: "a5", etki: { mutluluk: 1 } }
]},

a5: { saat: "Mayıs 2049", baslik: "Mektuplar", metin: [
P(S("a4C"), "“Düşüneceğim.” Cem rahatladı. Nil telefonu bırakıp gitti. Ekran kararmadan önce bir kapının çarptığını duydun."),
P(S("a4D"), "Telefonu kapattın. Bir saat sonra Nil'den mesaj: “Babaanne lütfen.” Cevap yazmadın. Parmakların ekranda gezindi, bir şey bulamadı."),
P(S("x_nilC"), "Nil araştırmayı gönderdi; Almanca, on dört sayfa. Çeviri programıyla okudun. Bir cümle takıldı: “Kalıcı katılımcıların yakınlarında uzun süreli yas belirtileri.” Ölmemiş birinin yası."),
P(S("x_cemC"), "Cem uzun süre sustu. “İkimiz için,” dedi. Sonra: “Belki daha çok benim için.”"),
P(S("x_cemD"), "Bir şey demedin. O da demedi. Arkada tramvay geçti, gitti."),
P(S("x_nilA"), "“Unutmam.” “Söz mü?” “Söz.” Bir makinenin bir sözü bozabileceğini ikiniz de biliyordunuz."),
P(S("x_nilB"), "Nil sustu. “Mutlu olursun,” dedi. “Ama sen olmazsın.”"),
P(S("x_nilD"), "Mor saçlar, kaşının üstündeki ben, ön dişindeki küçük kırık. Nil de sana baktı. Sonra: “Ben de seni ezberliyorum.”"),
P(S("x_cemA"), "Cem ağladı. Kırk beş yaşında, bir balkonda. “Üç yıl bekledim bunu,” dedi."),
P(S("x_cemB"), "“Kızgındım.” Cem sustu. “Biliyorum. İyi ki söyledin.” O akşam on dakikadan uzun konuştunuz. Kırk dakika."),
"Mayıs. Hikmet'in dolabını açıyorsun. Üç yıldır açmadığın dolabı. Gömlekler, kravatlar, matbaa önlüğü. Naftalin kokusu. En üst rafta bir ayakkabı kutusu.",
"İçinde mektuplar. Hikmet'in yazısı. Sana değil.",
"Feride diye bir kadına. 1989'dan 1994'e. Matbaada bir dizgici. Son mektup: “Feride, Saadet'i bırakamam. Cem küçük. Onu da seviyorum. Başka türlü. Bu mektup son. Beni affet.”",
"Otuz yıl önce. Bilmiyordun. Ya da bir yerde biliyordun: bazı akşamlar geç gelişleri, bazı pazarlar matbaada “iş.”",
"Gerçek Hikmet: mürekkep lekeli, başka bir kadını sevmiş, seni bırakmamış, sana hiç söylememiş. Bahçe'deki Hikmet: çay demliyor, özür diliyor."
], secenekler: [
{ t: "Mektupları okursun. Hepsini.", to: "a6", etki: { gercek: 2, okudu: true } },
{ t: "Kutuyu kapatıp dolaba geri koyarsın. Bilmek istemiyorsun.", to: "a6", etki: { mutluluk: 1, kapatti_kutu: true } },
{ t: "Mektupları yakarsın.", to: "a6", etki: { mutluluk: 1, yakti: true } },
{ t: "Feride'yi bulmaya karar verirsin. Yaşıyorsa.", to: "a6", etki: { gercek: 1, bag: 1, feride: true } }
]},

a6: { saat: "Haziran 2049", baslik: "Sözleşme", metin: [
P(S("a5B"), "Kutuyu geri koydun. Dolabın önünden her geçişinde kapağına bakmamaya çalıştın."),
P(S("a5A"), "Bütün gece okudun. Satırların arasından bir kadın çıktı. Senin gibi ama başka. Sabah ilk kez Hikmet'e kızdın. Öldükten üç yıl sonra. Kızgınlık onu daha gerçek yaptı."),
P(S("a5C"), "Balkonda bir tencerede yaktın. Feride'nin adı alevde göründü. Sonra kül. Komşu kadın balkondan duman için seslendi. “Kek yaktım,” dedin."),
P(S("a5D"), "Bir hafta aradın. Feride Kaya, yetmiş altı, Bornova'da bir bakımevi. Seni önce tanımadı, sonra tanıdı. Bir saat oturdunuz. İki kadın, bir adam, otuz yıl. Çıkarken Feride sarıldı. “Seni seçti,” dedi. “Bilmeni isterim.”"),
"Haziranda Selcan Hanım bir dosya gönderiyor. Kırk iki sayfa. “Bahçe Kalıcı Yaşam Programı. Katılımcı Onam Formu.”",
"Giriş anının hafızadan silinmesi. Katılımcı simülasyonda olduğunu bilmeyecek. Bedenin ömür boyu tesiste bakımı. Çıkış mümkün. Aile talebiyle, “psikolojik uyum riski” uyarısıyla. Katılımcıların yüzde doksan yedisi hiç çıkmamış.",
"Son sayfada küçük harflerle bir seçenek daha: “Kısmi Program: günde üç saate kadar seans. Gerçeklik bilinci korunur.”",
"Masada sözleşme, bir kalem, koltuk, pencereden deniz.",
"Selcan Hanım'ın notu: “Kontenjan bu ay doluyor. Cumaya kadar.” Bugün çarşamba."
], secenekler: [
{ t: "Kalıcı programı imzalarsın. Hikmet'e kavuşursun; Nil'in sesini bir daha tanımayacağını bilerek.", to: "b1", etki: { mutluluk: 2, kol: "bahce" } },
{ t: "Reddedersin. Gerçek hayatına dönersin: bozuk asansöre, boş koltuğa, yalnızlığa.", to: "g1", etki: { gercek: 2, kol: "gercek" } },
{ t: "Kısmi programı seçersin. Günde üç saat. İkisini birden isteyerek. İkisini de yarım alarak.", to: "y1", etki: { mutluluk: 1, gercek: 1, kol: "yarim" } },
{ t: "Bavulunu toplarsın. Frankfurt'a, Cem'in yanına. Kırk yıllık şehrini ve Hikmet'in mezarını geride bırakarak.", to: "d1", etki: { bag: 2, kol: "goc" } }
]},

/* ---------- BAHÇE KOLU ---------- */
b1: { saat: "Temmuz 2049", baslik: "Son Gün", metin: [
P(S("a6A"), "İmzaladın. Kalemin ucu kâğıtta bekledi. Mürekkep yayıldı, küçük bir leke. Onun parmaklarındaki gibi."),
P(S("y3A"), "Kalıcı programa geçtin. Selcan Hanım'ın sesi telefonda yumuşaktı: “Doğru karar Saadet Hanım.”"),
"Giriş pazartesi. Pazar akşamı son kez evdesin.",
"Yanına bir şey alamayacaksın. Bedenin bir yatakta olacak. Bavula gerek yok.",
"Yine de dikiş makinesinin örtüsünü kaldırıyorsun. Aylar önce başladığın bir kumaş: Nil için bir elbise. Mavi keten, yakası işlemeli olacaktı.",
"İğneye iplik geçirmek on dakika sürüyor. Geçiriyorsun.",
"Gece yarısına kadar dikiyorsun. Yaka, kollar, etek ucu. Yakanın işlemesi yarım kalıyor. Bir çiçeğin üç yaprağı.",
"Elbiseyi bir kutuya koyuyorsun. Not: “Nil'e. Babaannesinden. Yakasını sen bitir.”",
"Sonra koltuğa oturuyorsun. Pencerede bir vapurun ışıkları, Alsancak'a doğru."
], secenekler: [
{ t: "Cem'i son kez ararsın.", to: "b2", etki: { bag: 1, son_arama: true } },
{ t: "Nil'e bir sesli mesaj bırakırsın.", to: "b2", etki: { bag: 1, nil_mesaj: true } },
{ t: "Kimseyi aramazsın. Bu gece senin.", to: "b2", etki: { mutluluk: 1 } },
{ t: "Feride'yi ararsın.", to: "b2", etki: { gercek: 1, feride_ara: true } }
]},

b2: { saat: "Bahçe", baslik: "Erik Ağacı", metin: [
P(S("b1A"), "Hatırlamıyorsun: son gece Cem'i aradın. “Anne,” dedi iki kez. Sen “Biliyorum oğlum,” dedin. O konuşma artık yalnızca onda."),
P(S("b1B"), "Hatırlamıyorsun: son gece Nil'e üç dakikalık bir sesli mesaj bıraktın. Nil onu yıllarca dinleyecek."),
P(S("b1C"), "Hatırlamıyorsun: son gece balkonda bir sigara yaktın. Kırk yıldır içmiyordun. Hikmet'in markası. Öksürdün, söndürmedin."),
P(S("b1D"), "Hatırlamıyorsun: son gece Feride'yi aradın. Titrek bir ses açtı. İkiniz de bir şey diyemediniz. Bir dakika sonra biriniz kapattı."),
"Bir bahçede uyanıyorsun. Erik ağacı, asma, tahta masa. Ayağın altında katlanmış karton. Kuşlar.",
"Hikmet çay demliyor. “Günaydın Saadet'im. Çayın soğuyor.”",
"Ellerine bakıyorsun. Titremiyor. Otuz yaşında terzi elleri. Aynada saçların kara.",
"Günler geçiyor. Belki aylar. Hikmet her sabah çay demliyor. Cem beş yaşında, bahçede koşuyor, dizi hiç kanamıyor. Bir dikiş atölyen var. Kimse hastalanmıyor, kimse gitmiyor.",
"Bir gün atölyede bir gelinlik dikerken uzaktan bir ses. Kelime yok, bir ton. Bir kız sesi, kırık bir dilde.",
"İğne elinde duruyor. Pencereden bakıyorsun. Bahçede kimse yok.",
"Ses yeniden. Bu kez bir kelime: “Babaanne.”"
], secenekler: [
{ t: "Duymazdan gelirsin. Rüzgâr.", to: "b3", etki: { mutluluk: 1, duymazdan: true } },
{ t: "Bahçeye çıkıp sesin geldiği yönü ararsın.", to: "b3", etki: { bag: 1, aradi: true } },
{ t: "Hikmet'e sorarsın: “Sen de duydun mu?”", to: "b3", etki: { gercek: 1, hikmete_sordu: true } },
{ t: "Gelinliğin yakasına bakarsın. Yarım kalmış bir işleme. Tanıdık.", to: "b3", etki: { gercek: 1, yaka: true } }
]},

b3: { saat: "Bahçe", baslik: "Pencere", metin: [
P(S("b2A"), "Rüzgâr, dedin. Ertesi gün rüzgâr aynı kelimeyi söyledi."),
P(S("b2B"), "Erik ağacının arkasına, asmanın altına baktın. Hiçbir şey. Çitin dibinde mor bir şey. Bir saç teli gibi. Eğilince yoktu."),
P(S("b2C"), "“Ne sesi?” dedi Hikmet. “Rüzgâr Saadet'im. Bir kuş.” Ama yüzü karıncalandı. Eski bir televizyonun ekranı gibi."),
P(S("b2D"), "Yakada yarım bir işleme: mavi iplik, bir çiçek, üç yaprak. Bunu sen dikmedin. Ya da diktin. Nerede? Parmakların bir şey hatırladı: bir kutu, bir not."),
"Ses her gün aynı saatte geliyor. Bazen bir Alman çocuk şarkısı. Bazen konuşuyor. Bazen ağlıyor.",
"Bir gün bahçenin köşesinde daha önce olmayan bir şey: havada asılı bir pencere. İçinden beyaz bir oda görünüyor, bir yatak, bir serum askısı. Yatağın başında mor saçlı bir kız, birinin elini tutuyor.",
"Pencerenin yanında beyaz önlüklü bir kadın beliriyor. Selcan Hanım'ın yüzü.",
"“Saadet Hanım, bir anomali var. Dışarıdan bir uyaran sızıyor. Pencereyi kapatabiliriz. Bahçeniz kusursuz olur. Ya da geçebilirsiniz. Uyanış zor olur.”",
"Arkanda Hikmet, çay bardağı elinde. “Saadet'im, nereye?”"
], secenekler: [
{ t: "Pencereyi kapattırırsın.", to: "t1", etki: { mutluluk: 2, bahce_kalici: true } },
{ t: "Pencereden geçersin.", to: "t1", etki: { gercek: 2, bag: 1, uyandi: true } },
{ t: "Hikmet'e dönüp sorarsın: “Sen ne istersin?”", to: "t1", etki: function(d){ d.bag++; d.hikmet_karar = true; if(d.okudu || d.feride) { d.uyandi = true; } else { d.bahce_kalici = true; } } },
{ t: "Pencerenin önünde durup mor saçlı kıza bakarsın. Karar vermeden.", to: "t1", etki: { bag: 1, pencere_bakti: true, bahce_kalici: true } }
]},

/* ---------- GERÇEK KOLU ---------- */
g1: { saat: "Temmuz 2049", baslik: "Atölye", metin: [
"Sözleşmeyi imzasız geri gönderiyorsun. Bir not: “Teşekkür ederim. Çayımı kendim demlerim.”",
"Bir hafta sonra Karşıyaka halk eğitim merkezi. İlan görmüştün: “Gönüllü dikiş eğitmeni aranıyor.” Bir oda dolusu kadın. Çoğu genç, bazıları Arapça konuşuyor. Suriyeli kadınlar. Kimi on yıldır burada.",
"İlk gün iğneye iplik geçiremiyorsun. Genç bir kadın, Rima, iğneyi elinden alıp geçiriyor, geri veriyor. Bir şey demiyor.",
"Sonra gösteriyorsun: yaka nasıl dikilir, pens nasıl alınır. Senin ellerin titriyor, onlarınki hızlı. Sen anlatıyorsun, onlar yapıyor.",
"Türkçe kırık, Arapça yabancı. Ama bir pensin nasıl alındığını herkes anlıyor.",
"Rima bir gün telefonundan bir fotoğraf gösteriyor: Halep'te yıkılmış bir ev. Enkazın içinde bir dikiş makinesinin demir ayağı. “Annem terziydi,” diyor. “Siz gibi.”"
], secenekler: [
{ t: "Rima'ya kendi dikiş makineni vermeyi teklif edersin.", to: "g2", etki: { bag: 2, makine_verdi: true } },
{ t: "Rima'ya annesini sorarsın.", to: "g2", etki: { bag: 1, rima_anne: true } },
{ t: "Fotoğrafa bakıp Hikmet'in matbaasını düşünürsün. O da yıkıldı.", to: "g2", etki: { gercek: 1 } },
{ t: "Rima'ya gelinlik dikmeyi öğretmeyi teklif edersin.", to: "g2", etki: { bag: 1, gelinlik: true } }
]},

g2: { saat: "Kasım 2049", baslik: "Zemin", metin: [
P(S("g1B"), "Rima anlattı: Halep'te kırk yıllık bir dükkân. Gaziantep'te bir kampta ölmüş. İğnesi Rima'da. Bir kibrit kutusunda taşıyor."),
P(S("g1C"), "Matbaanın yerinde şimdi otopark var, dedin. “Bizim evin yerinde de,” dedi Rima. İkiniz de güldünüz. Gülmek doğru kelime değildi."),
P(S("g1A"), "Rima önce istemedi. Sonra bir cumartesi eşiyle geldi. Makineyi dördüncü kattan indirdiler. Sen arkalarından, her sahanlıkta “Yavaş” diyerek. Makinenin yerinde bir boşluk kaldı. Halıda dört iz."),
P(S("g1D"), "Rima'nın kız kardeşi baharda evleniyor. Salı ve perşembe atölyede saten, dantel, boncuk. Ellerin titriyor ama bir gelinliğin nasıl yapılacağını hatırlıyorlar."),
"Kasımda bir gece mutfakta düşüyorsun. Halının kenarı, terlik. Kalçan yere çarpıyor. Kalkamıyorsun.",
"Telefon salonda, şarjda. Mutfak karoları soğuk. Saat on bir. Gece yarısı. İki. Buzdolabının motoru çalışıp duruyor. Yan daire boş.",
"Sabaha karşı aklına geliyor: Bahçe'de bu olmazdı.",
"Sabah dokuzda kapı. “Saadet Teyze?” Rima. Salı. Gelmeyince merak etmiş. Komşudan anahtar alıyor. Ambulans.",
"Hastanede Selcan Hanım'ın sesli mesajı: “Geçmiş olsun Saadet Hanım. Teklifimiz geçerli. Yalnız kalmamanız için.”"
], secenekler: [
{ t: "Mesajı silersin.", to: "g3", etki: { gercek: 1, sildi: true } },
{ t: "Mesajı saklarsın. Belki bir gün.", to: "g3", etki: { mutluluk: 1, sakladi: true } },
{ t: "Rima'ya teşekkür edersin.", to: "g3", etki: { bag: 2 } },
{ t: "Cem'i arayıp düştüğünü söylersin. Saklamadan.", to: "g3", etki: { bag: 1, gercek: 1, cem_bilsin: true } }
]},

g3: { saat: "Temmuz 2050", baslik: "Nil", metin: [
P(S("g2A"), "Mesajı hastane yatağında, tek parmakla sildin."),
P(S("g2B"), "Mesajı sakladın. Bazı geceler hastanede açıp dinledin: “Yalnız kalmamanız için.”"),
P(S("g2C"), "“Sana bir hayat borçluyum,” dedin. “Ben de size bir dikiş makinesi,” dedi Rima, gülerek. Makineyi vermemiş olsan da."),
P(S("y3B"), "Programı bitirdin. Başlığı kutusuna koyarken elin durdu. O gece başlıksız uyudun; yatak çok genişti."),
P(S("g2D"), "Cem bir sonraki uçakla geldi, üç gün kaldı. Giderken: “Yazın Nil'i göndereceğim. Bütün yaz. Ona Türkçe öğret anne.”"),
"Yaz. Nil İzmir'de. On yedi yaşında, mor saçlar yeşile dönmüş. Bir sırt çantası, bir gitar.",
"İlk hafta zor. Nil telefonda, sen pencerede.",
"İkinci hafta Nil seni atölyeye götürüyor. Koluna girerek, merdivenleri birlikte inerek. Rima'yı görüyor. Bir kumaşa dokunuyor. “Bana öğretir misin?”",
"Mavi keten elbise. Nil iğneye ipliği geçiriyor. Sen gösteriyorsun. Yakada mavi bir çiçek.",
"Bir akşam balkonda Nil soruyor: “Babaanne, o makineye neden girmedin?”"
], secenekler: [
{ t: "“Çünkü sen beni unutmamamı istedin,” dersin.", to: "t1", etki: { bag: 1, nil_cevap: "unutma" } },
{ t: "“Çünkü deden bir başkasını sevmişti. Ben onu öyle sevmeye devam etmek istedim,” dersin.", to: "t1", etki: { gercek: 2, nil_cevap: "hikmet" } },
{ t: "“Bilmiyorum. Belki korktum,” dersin.", to: "t1", etki: { gercek: 1, nil_cevap: "korku" } },
{ t: "Cevap vermek yerine Nil'e yakanın son ilmeğini attırırsın.", to: "t1", etki: { bag: 1, nil_cevap: "ilmek" } }
]},

/* ---------- YARIM KOL ---------- */
y1: { saat: "Ağustos 2049", baslik: "Üç Saat", metin: [
"Kısmi programı imzalıyorsun. Koltuğun yanına bir başlık konuyor. Akşam yedide başlıyor, onda bitiyor. Bahçede olduğunu biliyorsun.",
"İlk hafta güzel. Yedide Hikmet. Onda yatak.",
"İkinci hafta gündüzler değişiyor. Merdivenler daha uzun, ekmek daha bayat, deniz daha gri. Bakkal “Nasılsınız Saadet Hanım?” diyor. Cevap vermeyi unutuyorsun.",
"Üçüncü hafta saat altıda saate bakmaya başlıyorsun. Dördüncü hafta dörtte.",
"Bir akşam onda çıkmıyorsun. “Günlük süre sınırı aşıldı. Bir saat daha?”",
"Hikmet bardağı uzatıyor. “Kal Saadet'im. Gece güzel.”"
], secenekler: [
{ t: "Bir saat daha kalırsın.", to: "y2", etki: { mutluluk: 2, fazla: true } },
{ t: "Çıkarsın.", to: "y2", etki: { gercek: 1 } },
{ t: "Çıkıp başlığı bir hafta dolaba kaldırırsın.", to: "y2", etki: { gercek: 2, dolap: true } },
{ t: "Hikmet'e sorarsın: “Sen beni gündüz özlüyor musun?”", to: "y2", etki: { bag: 1, ozluyor: true } }
]},

y2: { saat: "Ekim 2049", baslik: "Karışıklık", metin: [
P(S("y1A"), "Bir saat daha. Sonra bir saat daha. Saat birde başlığı çıkardığında çaydanlık ocakta unutulmuş, dibi kömür olmuştu."),
P(S("y1B"), "Onda çıktın. “Yarın,” dedi Hikmet. Her akşam bir randevu. Bir ölüyle."),
P(S("y1C"), "Başlığı dolaba kaldırdın. Üçüncü gün kapağı açıp baktın. Altıncı gün çıkardın."),
P(S("y1D"), "“Gündüz yok Saadet'im,” dedi Hikmet. “Burada hep akşam. Ben hep buradayım. Sen gidiyorsun.” O gece uyuyamadın."),
"Ekimde Nil'le görüntülü konuşuyorsun.",
"“Deden dün bana bir şarkı söyledi,” diyorsun. “Gençliğimizden. Erik ağacının altında.”",
"Nil'in yüzü değişiyor. “Babaanne. Dedem öldü. Dört yıl önce.”",
"“Biliyorum. Ama bahçede...”",
"Duruyorsun. Dün bir bahçede miydin, bir başlığın içinde mi? Erik ağacı Buca'daki mi, öbürü mü? İki iplik aynı kumaşın içinde. Ayıramıyorsun.",
"Nil ağlamaya başlıyor. “Babaanne, korkuyorum.”"
], secenekler: [
{ t: "Başlığı tamamen kaldırmaya karar verirsin. Bugün.", to: "y3", etki: { gercek: 2, kaldir: true } },
{ t: "“Korkma güzelim. Ben iyiyim,” dersin.", to: "y3", etki: { mutluluk: 1 } },
{ t: "Bir deftere yazmaya başlarsın: neyin gerçek, neyin bahçe olduğunu.", to: "y3", etki: { gercek: 1, defter: true } },
{ t: "Nil'e sorarsın: “Sence fark eder mi?”", to: "y3", etki: { mutluluk: 1, gercek: 1, fark: true } }
]},

y3: { saat: "Aralık 2049", baslik: "Eşik", metin: [
P(S("y2A"), "Kaldırmaya karar verdin. Selcan Hanım'ı aramadan önce bir gece daha taktın. Son kez, dedin."),
P(S("y2B"), "Nil inanmadı. İki gün sonra Cem aradı: “Anne, Nil diyor ki...”"),
P(S("y2D"), "Nil düşündü. “Fark eder. Dedem gerçekten şarkı söyleseydi ben de duyardım. Senin bahçende yalnızsın babaanne. Orada ben yokum.”"),
P(S("y2C"), "Her gün yazdın: sol sayfaya gerçek, sağa bahçe. Bir ay sonra baktın: sağ dolu, sol neredeyse boş. Sol sayfada bir gün yalnızca “ekmek aldım” yazıyordu."),
"Aralıkta Selcan Hanım arıyor. “Uzun süreli kısmi kullanımda karışma riski artıyor. Ya kalıcıya geçin ya bitirin. Yarı yarıya yaşamak iki tarafı da bozuyor.”",
"Birinde Hikmet otuz beş yaşında, hiç söylemediği özürleri söylüyor. Öbüründe bir ayakkabı kutusu dolusu mektup bırakmış.",
"Birinde ellerin genç. Öbüründe titriyor.",
"Başlık masada. Selcan Hanım hatta bekliyor. Arkasında bir klavye sesi."
], secenekler: [
{ t: "Kalıcı programa geçersin.", to: "b1", etki: { mutluluk: 2, kol: "bahce", yarim_bahce: true } },
{ t: "Programı bitirirsin.", to: "g3", etki: { gercek: 2, kol: "gercek", yarim_son: true } },
{ t: "Bir hafta daha düşünmek istersin.", to: "t1", etki: { yarim_kal: true } },
{ t: "“Sizce hangisi?” diye sorarsın Selcan Hanım'a.", to: "t1", etki: { gercek: 1, selcana: true, yarim_kal: true } }
]},

/* ---------- GÖÇ KOLU ---------- */
d1: { saat: "Eylül 2049", baslik: "Frankfurt", metin: [
"Frankfurt. Üçüncü kat. Asansör çalışıyor. Bir misafir odası, artık senin. Pencereden bir park, Almanca bağıran çocuklar.",
"İlk hafta herkes kibar. Sabine Türk kahvesi yapmayı öğrenmiş. Köpüğü yok ama yapıyor. Cem erken geliyor. Nil odana gelip gitar çalıyor.",
"İkinci hafta herkes işinde. Cem yedide çıkıyor, sekizde dönüyor. Sabine hastanede, vardiyalı. Nil okulda.",
"Gündüzler evde yalnızsın. Televizyon Almanca. Markette kasiyer bir şey soruyor. Anlamıyorsun. Arkadaki adam sabırsızlanıyor, sepetini yere vuruyor.",
"Karşıyaka'da yalnızdın ama yalnızlığın Türkçeydi.",
"Bir öğleden sonra parkta bir bank. Yanına başörtülü yaşlı bir kadın oturuyor. “Türk müsün?” Türkçe."
], secenekler: [
{ t: "Kadınla konuşursun. Saatlerce.", to: "d2", etki: { bag: 2, komsu: true } },
{ t: "Kadına Bahçe'yi sorarsın. Burada var mı?", to: "d2", etki: { mutluluk: 1, garten: true } },
{ t: "Eve dönüp Nil'e Türkçe ders vermeye karar verirsin.", to: "d2", etki: { bag: 1, ders: true } },
{ t: "Akşam Cem'e yalnız olduğunu söylersin. Açıkça.", to: "d2", etki: { gercek: 1, cem_soyle: true } }
]},

d2: { saat: "Kasım 2049", baslik: "Dil", metin: [
P(S("d1A"), "Adı Fatma. Elli yıl önce Konya'dan gelmiş. Fabrikada çalışmış. Her salı aynı bankta buluşmaya başladınız. Bir gün dedi ki: “Elli yıldır buradayım, hâlâ misafirim. Sen elli gün oldun. İkimiz de misafiriz.” Çantasından iki simit çıkardı; Türk fırınından."),
P(S("d1B"), "“Garten,” dedi kadın. “Var. Kocam orada, iki yıldır. Ben girmedim. Her pazar elini tutmaya gidiyorum. Beni bilmiyor.”"),
P(S("d1C"), "Akşamları mutfak masasında Nil'e Türkçe. Bir akşam sordu: “‘Özlem’ ne demek?” Anlattın. Almancası yokmuş."),
P(S("d1D"), "Cem dinledi. “Biliyorum anne. Ama ne yapayım?” Sonra Sabine'ye döndü, Almanca konuştular. Dışarıda kaldığını anladın."),
"Kasım. Saat dörtte karanlık. Ellerin soğukta daha çok titriyor.",
"Bir akşam yemekte Almanca bir şaka. Herkes gülüyor. Sen de gülümsüyorsun.",
"Nil fark edip sana çeviriyor. Yavaş, kırık. Çevrilince komik değil. Herkes susuyor.",
"Ertesi sabah Cem kahvaltıda bir broşür uzatıyor. Almanca. Yeşil bir bahçe. “Frankfurt'ta bir tesis var anne. Türkçe programı da var. Her hafta geliriz.”"
], secenekler: [
{ t: "Broşürü alırsın. Düşünürsün.", to: "d3", etki: { mutluluk: 1, broşür_aldi: true } },
{ t: "“Beni buraya Bahçe'ye koymak için mi getirdin oğlum?” dersin.", to: "d3", etki: { gercek: 2, sitem: true } },
{ t: "“İzmir'e dönmek istiyorum,” dersin.", to: "d3", etki: { gercek: 1, donus: true } },
{ t: "Nil'e bakarsın.", to: "d3", etki: { bag: 1, nile_bakti: true } }
]},

d3: { saat: "Aralık 2049", baslik: "Balkon", metin: [
P(S("d2A"), "Broşürü komodinin çekmecesine koydun. Her gece çekmeceyi açıp kapattın."),
P(S("d2C"), "Cem fincanı bıraktı. “Anne, orada kimin var?” Cevap vermedin. Cevap bir mezar taşıydı."),
P(S("d2B"), "Cem'in yüzü bembeyaz oldu. “Hayır anne. Ben sadece ne yapacağımı bilmiyorum.” Sabine elini Cem'in koluna koydu. Nil masadan kalktı."),
P(S("d2D"), "Nil broşüre, sonra babasına baktı; Almanca bir şey söyledi, kısa. Cem sustu. Nil sana döndü: “Dedim ki: babaannemi bahçeye değil, bize koy.”"),
"Aralıkta balkonda bir dikiş makinesi. Sabine bulmuş. İkinci el, bir Türk terzinin dükkânından. “Sizin için,” dedi; Türkçesi yeni.",
"Mavi keten. Karşıyaka'da başlamıştın. Bavulda getirdin.",
"Balkonda, eldivenlerle dikiyorsun. Nil yanında, battaniyeye sarılı. Yakada mavi bir çiçek.",
"“Babaanne, burada mutlu musun?”",
"İğne duruyor. Aşağıda park, Fatma'nın bankı."
], secenekler: [
{ t: "“Hayır. Ama buradayım,” dersin.", to: "t1", etki: { gercek: 2, burada: true } },
{ t: "“Seninle mutluyum,” dersin. Tam doğru değil. Tam yanlış da değil.", to: "t1", etki: { bag: 2, seninle: true } },
{ t: "“İzmir'e dönmek istiyorum. Ama sen yazın gel,” dersin.", to: "t1", etki: { gercek: 1, bag: 1, izmire_donus: true } },
{ t: "Bir şey demeden Nil'e iğneyi uzatırsın.", to: "t1", etki: { bag: 1, igne_verdi: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "2050", baslik: "Bir Yıl", metin: [
P(S("b3A"), "“Kapat,” dedin. Hikmet perdeyi çekti. Kız son bir kez seslendi. Sonra perde."),
P(S("b3C"), "“Sen ne istersin?” Hikmet şaşırdı. “Senin istediğini,” dedi. Bahçe'deki Hikmet'in kendine ait bir isteği yoktu. Pencere açık kaldı. Sen ondan uzaklaştın."),
P(S("b3D"), "Uzun uzun baktın. Kız da sana. Karar vermedin. Bir gün pencere kendiliğinden kapandı."),
P(S("g3A"), "Nil gitarını alıp bir şarkı çaldı. Bir Alman çocuk şarkısı, kendi çevirdiği Türkçe sözlerle. İki yerde kafiye tutmadı."),
P(S("g3B"), "Nil düşündü. “Yani dedemi kusurlarıyla seçtin. Bahçe onları silerdi.” Başını omzuna koydu."),
P(S("g3C"), "Nil başını omzuna koydu. “Ben de korkuyorum. Her şeyden.”"),
P(S("g3D"), "Nil son ilmeği attı. Yamuk. Öyle bıraktınız."),
P(S("y3C"), "“Bir hafta.” Selcan Hanım güldü: “Herkes bir hafta der.”"),
P(S("y3D"), "Selcan Hanım uzun süre sustu. Sonra başka bir sesle: “Annem için kalıcıyı seçtim. Her pazar gidiyorum. Beni tanımıyor. Bilmiyorum Saadet Hanım.”"),
P(S("d3A"), "“Hayır. Ama buradayım.” Nil başını salladı. Bu cümleyi yıllar sonra bir ödevine yazacaktı."),
P(S("d3B"), "Nil sarıldı. Yarısı doğru bir cümleye tam bir sarılma."),
P(S("d3C"), "İlkbaharda İzmir'e döndün. Havalimanında Nil ağladı. Cem arabaya binmeden direksiyonda uzun süre oturdu."),
P(S("d3D"), "Nil ilk ilmeği yamuk attı, ikincisini düz."),
P(BAHCE, "Bahçe'de bir yıl. Ya da bir gün. Hikmet her sabah çay demliyor. Cem beş yaşında."),
P(function(d){ return BAHCE(d) && d.bahce_kalici; }, "Pencere kapandı. Ses bir daha gelmedi. Çok nadiren, bir yaka işlerken parmakların bir yerde duruyor."),
P(function(d){ return d.uyandi; }, "Pencereden geçtin. Beyaz bir tavan, bir serum, bir hemşirenin sesi. Bir el; Nil'in eli. Üç ay kalmıştın. Kasların erimiş. İlk hafta konuşamadın. İkinci hafta “Nil” dedin. Ses çatlak çıktı."),
P(function(d){ return d.kol === "gercek"; }, "Bir yıl. Karşıyaka. Asansör tamir edildi; Rima'nın eşi yönetime bir dilekçe yazdı. Salı ve perşembe atölye. Bir bastonla yürüyorsun."),
P(function(d){ return d.kol === "yarim"; }, "Bir yıl. Hâlâ iki tarafta. Günde üç saat, bazen dört. Selcan Hanım her ay arıyor."),
P(function(d){ return d.kol === "goc" && !d.izmire_donus; }, "Bir yıl. Frankfurt. Üç kelime Almanca: Danke, Bitte, Enkelin. Torun. Fatma'yla her salı."),
P(function(d){ return d.kol === "goc" && d.izmire_donus; }, "Bir yıl. İzmir. Nil yazın bir ay kaldı. Koltuğun yanında Frankfurt'tan getirdiğin bir dikiş makinesi."),
"Bir sabah telefon. Sema.",
"“Saadet Teyze. Annem dün gece öldü. Bahçe'de. Kalbi. Acı çekmemiş. Gülümsüyormuş.”"
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Bahçede bir an duraklarsın. Bir rüzgâr. Bir isim: Nadide." : "Sema'ya gidersin."; }, to: "t1b", etki: { bag: 1 } },
{ t: function(d){ return BAHCE(d) ? "Hikmet'e sorarsın: “Nadide diye birini tanıyor muyuz?”" : "Sema'ya sorarsın: “Annen seni hatırladı mı, sonunda?”"; }, to: "t1b", etki: { gercek: 1, ayla_hatirla: true } },
{ t: function(d){ return BAHCE(d) ? "Çayını içersin. Bir şey yok." : "Telefonu kapatıp Hikmet'in koltuğuna oturursun. Ya da bir koltuğa."; }, to: "t1b", etki: { mutluluk: 1 } },
{ t: function(d){ return BAHCE(d) ? "Gelinliğin yakasına bakarsın." : "Nadide'nin cenazesine gidersin."; }, to: "t1b", etki: { bag: 1, cenaze: true } }
]},

t1b: { saat: "2050", baslik: "Nadide", metin: [
P(function(d){ return d.son === "t1A" && DIS(d); }, "Sema'nın evine gittin; Bayraklı, on ikinci kat. Sema hiçbir şey demeden sarıldı. Masada Nadide'nin gözlükleri. Bir yıldır kimse kaldırmamış."),
P(function(d){ return d.son === "t1C" && DIS(d); }, "Telefonu kapatıp oturdun. Bir saat kıpırdamadın. Sonra kalktın."),
P(function(d){ return d.son === "t1D" && DIS(d); }, "Siyah elbiseni giydin; Hikmet'in cenazesindekini. Belinden biraz bol gelmişti."),
P(function(d){ return d.son === "t1C" && BAHCE(d); }, "Çayını içtin. O sabah çay biraz acıydı."),
P(function(d){ return d.son === "t1D" && BAHCE(d); }, "Gelinliğin yakasında bir kahve lekesi. Bahçe'de leke olmaz. Baktın. Leke kayboldu."),
P(BAHCE, "Bahçe titriyor. Bir isim: Nadide. Hikmet çayını uzatıyor. “Kim o Saadet'im?” “Bilmiyorum.” Bir kahve kokusu, bir kapı komşusu. Sonra o da gidiyor."),
P(DIS, "Cenaze Karşıyaka mezarlığında. Sema, kocası, iki torun, birkaç komşu. Sen."),
P(function(d){ return DIS(d) && d.ayla_hatirla; }, "“Hatırlamadı,” diyor Sema. “Son hafta bir kez gözlerini açmış. Bir saniye. Kimseyi görmemiş. Sonra kapamış, gülümsemiş.”"),
P(DIS, "“Annem gülümseyerek öldü,” diyor Sema. “Babamla, bir bahçede. Ama ben onu son gördüğümde o beni görmedi. Bir yıl bir yabancının elini tuttum. Annemin eli. Bir yabancının.”"),
P(DIS, "Toprak. Sema ağlıyor. Bir yıldır ağlamamış, diyor. Annesi ona iki kez ölmüş.")
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Bahçede bir şey yaparsın: erik ağacının dibine bir taş koyarsın. Neden, bilmeden." : "Sema'ya sarılırsın."; }, to: "t2", etki: { bag: 1, tas: true } },
{ t: function(d){ return BAHCE(d) ? "Bir şey yapmazsın. Bahçe kusursuz." : "Mezarın başında Nadide'ye kırk yıllık kahvenizi anlatırsın. Sesli."; }, to: "t2", etki: function(d){ if(BAHCE(d)) d.mutluluk++; else d.bag++; } },
{ t: function(d){ return BAHCE(d) ? "Hikmet'e “Sen hiç ölecek misin?” diye sorarsın." : "Kendi ölümünü düşünürsün. Nasıl istersin?"; }, to: "t2", etki: { gercek: 1, olum: true } },
{ t: function(d){ return BAHCE(d) ? "Atölyene dönüp bir gelinlik dikmeye başlarsın." : "Eve dönüp Selcan Hanım'ın numarasını telefonundan silersin. Ya da silmezsin."; }, to: "t2", etki: { mutluluk: 1 } }
]},

t2: { saat: "2051", baslik: "Nil'in Sorusu", metin: [
P(function(d){ return d.son === "t1bA" && DIS(d); }, "Mezarlık kapısında Sema'ya sarıldın. “Annem sizi çok severdi,” dedi. “Bahçe'de bir kere bile sormadı ama.”"),
P(function(d){ return d.son === "t1bB" && DIS(d); }, "Kırk yıllık kahvelerinizi sesli anlattın: fallar, dedikodular. Sema bilmediğin bir şey söyledi: annesi her sabah iki fincan yaparmış, sen gelmesen de."),
P(function(d){ return d.son === "t1bC" && DIS(d); }, "Kendi ölümünü düşündün. Bir şeyi biliyordun: Sema gibi birinin bir yıl boyunca bir yabancının elini tutmasını istemiyordun."),
P(function(d){ return d.son === "t1bD" && DIS(d); }, "Selcan Hanım'ın numarasına baktın. Parmağın sil tuşunun üstünde durdu. Telefonu ekranı aşağı masaya bıraktın."),
P(function(d){ return d.son === "t1bA" && BAHCE(d); }, "Erik ağacının dibine bir taş koydun. “O ne?” dedi Hikmet. Bilmiyordun."),
P(function(d){ return d.son === "t1bB" && BAHCE(d); }, "Bir şey yapmadın. O gün kuşlar biraz geç öttü."),
P(function(d){ return d.son === "t1bC" && BAHCE(d); }, "“Burada kimse ölmez Saadet'im.” Gülüşü kusursuzdu. Bu kusursuzluk seni korkuttu."),
P(function(d){ return d.son === "t1bD" && BAHCE(d); }, "Bir gelinliğe başladın. Kimin için, bilmeden. Bahçe'de evlenecek kimse yoktu."),
P(BAHCE, "Bir gün kapının önünde bir kız beliriyor. On yedi yaşında, saçları yeşil. Hikmet onu görmüyor. Sen görüyorsun."),
P(DIS, "Nil bir yaz daha geliyor. On sekiz yaşında. Üniversitede felsefe okuyacak. Cem “Ne işe yarar?” demiş. Nil gülerek anlatıyor."),
"Bir akşam Nil yanına oturuyor.",
"“Babaanne. Bir makine sana kusursuz bir hayat verse ve sen makine olduğunu bilmesen, mutlu olurdun. O zaman gerçek olup olmaması neden önemli?”",
"Cevabı gerçekten merak ediyor. Dizlerini göğsüne çekmiş, bekliyor.",
P(BAHCE, "Kız bunu söylüyor ve sen anlamıyorsun. Ne makinesi? Ama yüzü tanıdık.")
], secenekler: [
{ t: "Ona bir hikâye anlatırsın: Hikmet'in mektuplarını, Feride'yi.", to: "y_hikaye", etki: { gercek: 1, bag: 1 } },
{ t: "Onu Hikmet'in mezarına götürürsün.", to: "y_mezar", etki: { gercek: 1, mezar: true } },
{ t: "“Mutluluk mutluluktur, haklısın,” dersin.", to: "t3", etki: { mutluluk: 2, nil_hakli: true } },
{ t: "“Bilmiyorum güzelim. Ben yalnızca seçtim,” dersin.", to: "t3", etki: { gercek: 1, sectim: true } }
]},

y_hikaye: { saat: "2051", baslik: "Mürekkep", metin: [
P(BAHCE, "Bir hikâye arıyorsun ki içinde bir kusur olsun. Bahçe'nin hikâyelerinde yok. Kız bekliyor."),
P(BAHCE, "Sonra nereden geldiğini bilmeden bir şey: bir ayakkabı kutusu, mektuplar, bir kadın adı. Kekeleyerek anlatıyorsun."),
P(DIS, "Anlatıyorsun: dolabı, kutuyu, Feride'yi, beş yılı, son mektubu."),
"“Deden beni aldattı. Beş yıl. Öğrendiğimde ölmüştü. Kızamadım bile.”",
"Nil dedesini bir fotoğraftan tanıyor. Bıyıklı, gülen bir matbaacı.",
"“Bahçe'deki deden bunu yapmazdı. Her sabah çay demler, hiç geç kalmaz. Ama ben o adamla kırk bir yıl evli kalmadım. Bu adamla kaldım. Sigaralı, mürekkep lekeli, başka bir kadını sevmiş, beni bırakmamış.”"
], secenekler: [
{ t: "“Kusurlu birini seçmişim,” dersin. “Hem de iki kere.”", to: "t3", etki: { gercek: 1, bag: 1, sevgi: true } },
{ t: "Nil'e mektuplardan birini verirsin. Ya da yaktıysan, Feride'nin adresini.", to: "t3", etki: { bag: 1, nile_mektup: true } },
{ t: "Bir süre susarsın. Hikâyenin gerisini Nil kendi bulsun.", to: "t3", etki: { gercek: 1 } },
{ t: "Ağlarsın. Dört yıl sonra Hikmet için ilk kez.", to: "t3", etki: { bag: 2, agladi: true } }
]},

y_mezar: { saat: "2051", baslik: "Taş", metin: [
P(BAHCE, "Kız seni elinden tutup erik ağacının arkasına götürüyor. Orada daha önce olmayan bir kapı. Arkasında bir mezarlık."),
P(BAHCE, "Bir taş: Hikmet Aydemir, 1969–2046. Ama Hikmet arkanda, bahçede, çay demliyor. Taşa bakıyorsun. Sonra arkana. Bahçe titriyor."),
P(DIS, "Karşıyaka mezarlığı. Hikmet'in taşı Nadide'ninkinden yirmi adım ötede: “Hikmet Aydemir, 1969–2046. Matbaacı.”"),
P(DIS, "Nil hiç gelmemişti. Cenazede Frankfurt'taydı. Taşa dokunuyor. “Soğuk,” diyor."),
"Çömeliyorsun. Dizlerin ağrıyor. Bir avuç toprak. Nemli, soğuk.",
"“Bahçe'de deden hiç ölmez. Burada öldü. Ben her yıl gelip ona kızıyorum, onu özlüyorum.”",
"Nil yanına çömeliyor. Bir karga taşa konup uçuyor."
], secenekler: [
{ t: "Nil'e: “Burada bitiyor. O yüzden ağlayabiliyorum,” dersin.", to: "t3", etki: { gercek: 2, olum_gercek: true } },
{ t: "Taşa sesli bir şey söylersin: “Feride'ye selam söyle.”", to: "t3", etki: { gercek: 1, bag: 1, feride_selam: true } },
{ t: "Nil'in koluna girip kalkarsın.", to: "t3", etki: { bag: 1 } },
{ t: "Toprağı bir mendile koyup cebine alırsın.", to: "t3", etki: { bag: 1, toprak: true } }
]},

t3: { saat: "2051", baslik: "Rüya", metin: [
P(function(d){ return d.son === "t2C" && DIS(d); }, "“Mutluluk mutluluktur,” dedin. Nil şaşırdı. “Gerçekten mi?” O gece yatarken bu cümle göğsünde ağır durdu."),
P(function(d){ return d.son === "t2D" && DIS(d); }, "Nil bunu bir kâğıda yazdı. “İlk ödevimin ilk cümlesi,” dedi."),
P(function(d){ return d.son === "t2C" && BAHCE(d); }, "Kız uzun uzun yüzüne baktı, sonra kayboldu. Kapının önünde bir boşluk kaldı."),
P(function(d){ return d.son === "t2D" && BAHCE(d); }, "“Ben yalnızca seçtim,” dedin. Neyi seçtiğini hatırlamadan. Kız gülümsedi ve kayboldu."),
P(function(d){ return d.son === "y_hikayeA" && DIS(d); }, "Nil güldü. “İki kere mi?” “Biri o, biri bu bahçeye girmemek,” dedin. Nil bir süre düşündü. “Makine seçemez,” dedi. “Sadece verir.”"),
P(function(d){ return d.son === "y_hikayeB" && !d.yakti; }, "Nil mektubu okudu. Ağladı, sonra güldü. “Dedem berbat bir şairmiş.” Haklıydı."),
P(function(d){ return d.son === "y_hikayeB" && d.yakti; }, "Mektupları yakmıştın. Nil'e Feride'nin adresini verdin. Telefonuna kaydetti. “Belki bir gün.”"),
P(S("y_hikayeC"), "Sustun. Nil de sustu."),
P(S("y_hikayeD"), "Ağladın. Nil bileğini tuttu, sustu."),
P(function(d){ return d.son === "y_mezarA" && DIS(d); }, "Nil taşa dokundu. “O zaman Bahçe'de kimse ağlayamaz,” dedi. “Hiçbir şey bitmiyor.”"),
P(function(d){ return d.son === "y_mezarA" && BAHCE(d); }, "“Burada bitiyor,” dedin. Nereden aklına geldiğini bilmeden. Bahçe titredi."),
P(S("y_mezarB"), "“Feride'ye selam söyle.” Nil sana baktı, sonra güldü. Sen de güldün. Bir mezarın başında iki kadın."),
P(S("y_mezarC"), "Nil'in koluna girip kalktın. Dizlerin çatırdadı. Kapıya kadar konuşmadınız."),
P(S("y_mezarD"), "Toprağı mendile koydun. Akşam bir saksıya döküp içine bir erik çekirdeği gömdün."),
P(BAHCE, "O gece Bahçe'de daha önce olmayan bir şey oluyor: uyuyorsun. Ve bir rüya görüyorsun."),
P(DIS, "O gece bir rüya görüyorsun. Kendi beyninin rüyası."),
"Hikmet. Genç değil. Ölmeden önceki hâli. Yetmiş yedi yaşında, zayıf, hastane pijamasıyla. Karşıyaka'daki koltuğunda. Elinde soğumuş bir çay.",
"“Saadet,” diyor. “Saadet'im” değil. “Saadet.” Hep öyle derdi aslında.",
"Mektuplardan söz ediyor mu, etmiyor mu. Rüyadan sonra hatırlamıyorsun.",
"Bir özür gelmiyor. Çayını içiyor, yüzünü buruşturuyor. “Soğumuş.”",
"“Hep soğuturdun,” diyorsun.",
"Gülüyor. Öksürükle karışık.",
"Uyanıyorsun. Yastık ıslak."
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Uyandığında Hikmet'e bakarsın, otuz beş yaşındaki Hikmet'e, ve bir şey fark edersin." : "Kalkıp bir çay demlersin. İki bardak."; }, to: "t4", etki: function(d){ d.bag++; if(BAHCE(d)) d.fark_etti = true; } },
{ t: "Rüyayı bir deftere yazarsın. Unutmamak için.", to: "t4", etki: { gercek: 1, ruya_yazdi: true } },
{ t: "Rüyayı unutmaya bırakırsın.", to: "t4", etki: { mutluluk: 1 } },
{ t: function(d){ return BAHCE(d) ? "Rüyayı Hikmet'e anlatırsın." : "Rüyayı Nil'e anlatırsın."; }, to: "t4", etki: { bag: 1, nile_ruya: true } }
]},

t4: { saat: "2052", baslik: "Son Dikiş", metin: [
P(function(d){ return d.son === "t3A" && DIS(d); }, "İki bardak çay demledin. Birini koltuğun yanına koyup soğumaya bıraktın."),
P(S("t3B"), "Rüyayı üç sayfaya yazdın. Öksürüğünü bile."),
P(S("t3C"), "Öğlene kadar bir kelimesi kaldı: soğumuş."),
P(function(d){ return d.son === "t3D" && DIS(d); }, "Nil telefonda dinledi. “Bahçe'dekinden daha çok dedem gibi,” dedi."),
P(function(d){ return d.son === "t3D" && BAHCE(d); }, "Hikmet dinledi. “Ben hiç öksürmem ki,” dedi. Haklıydı."),
P(function(d){ return BAHCE(d) && d.fark_etti; }, "Otuz beş yaşındaki Hikmet'e bakıyorsun. Rüyadakini daha çok sevdiğini fark ediyorsun. Bu Hikmet seni hiç kızdırmadı, hiç hayal kırıklığına uğratmadı. Bu yüzden hiç tam senin olmadı."),
P(function(d){ return BAHCE(d) && !d.fark_etti; }, "Bir sabah daha. Erik ağacı çiçek açmış."),
P(DIS, "Bir sabah dikiş makinesinin başındasın. Mavi keten elbise. Yıllardır yarım. Bugün son ilmek."),
"İğneye iplik geçirmek on beş dakika sürüyor.",
"Mavi çiçeğin son yaprağı. İğne giriyor, çıkıyor. Bir düğüm.",
"Elbise bitti.",
P(BAHCE, "Bahçe'de bitirdiğin bir gelinlik. Yakadaki çiçek Bahçe'nin hiçbir desenine benzemiyor. Nereden bildiğini bilmeden diktin.")
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Gelinliği bahçedeki erik ağacına asarsın." : "Elbiseyi Nil'e kendi ellerinle verirsin. Ya da gönderirsin."; }, to: "rs", etki: { bag: 1 } },
{ t: "Yakanın iç tarafına küçük bir harf işlersin: S.", to: "rs", etki: { gercek: 1, harf: true } },
{ t: "Makinenin örtüsünü kapatırsın. Son elbise.", to: "rs", etki: { mutluluk: 1, son_elbise: true } },
{ t: "Bir kumaş daha çıkarırsın. Ellerin titriyor. Başlıyorsun.", to: "rs", etki: { gercek: 1, bag: 1, yeni_elbise: true } }
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
P(S("t4A"), "Gelinliği erik ağacına asmıştın. Kimin için olduğunu bilmeden."),
P(S("t4B"), "Yakanın içine bir S işlemiştin."),
P(S("t4C"), "Makinenin örtüsünü kapatmıştın. Ertesi sabah açıktı. Bahçe'de hiçbir şey bitmez."),
P(S("t4D"), "Bir gelinliğe daha başlamıştın."),
"Bahçe'desin. Hikmet çay demliyor. Erik ağacı her bahar çiçek açıyor. Ellerin genç.",
"Menemen yolundaki tesiste, üçüncü kat, dördüncü oda, pencerenin yanında bir yatak. Yaşlı bir kadın. Gözleri kapalı, yüzü gülümsüyor. Bir hemşire dört saatte bir yanını değiştiriyor.",
"Ayda bir yeşil saçlı bir genç kadın geliyor. Elini tutuyor. Almanca ve Türkçe karışık anlatıyor: üniversite, bir sevgili, bir elbise. Yakasını kendisi bitirmiş.",
"Kadın duymuyor. Gülümsüyor.",
"Taramalara göre mutlusun.",
"Nil bir gün başka birine, yatağının başında: “Babaannem mutlu öldü. Ben onu çok önce kaybettim.”"
]},

son_uyanis: { son: true, baslik: "Pencere", metin: [
P(S("t4A"), "Elbiseyi Nil'e kendi ellerinle vermiştin. Nil giymeden önce yakasına uzun uzun baktı."),
P(S("t4B"), "Yakanın içine küçük bir S işlemiştin."),
P(S("t4C"), "Makinenin örtüsünü kapatmıştın. Dantel örtüyü düzelterek."),
P(S("t4D"), "Başka bir kumaşa başlamıştın. Bitirip bitiremeyeceğini bilmeden."),
"Pencereden geçtin ve bir hastane odasında, Nil'in elinin içinde uyandın.",
"Uyanış zor oldu. Yürümeyi yeniden öğrendin. Bazı sabahlar Hikmet'in çay demlediğini sandın, sonra hatırladın. Bahçe'den bir erik kokusu kaldı, bir de hiç söylenmemiş bir özür.",
"Selcan Hanım raporuna yazdı: “Uyanış sonrası uyum olağandışı derecede olumlu.” Yüzde üçün içindeydin.",
"Nil o yaz da, sonraki yaz da İzmir'de kaldı. Yatağının başında aylarca konuştuğunu öğrendin; Almanca, Türkçe, şarkılar. “Duyduğunu bilmiyordum,” dedi. “Ama konuştum.”",
"Mavi elbise Nil'in dolabında. Her yaz İzmir'de, balkonda giyiyor. Bir keresinde üstüne çay döktü. Leke çıkmadı. Bırakın kalsın, dedin."
]},

son_igne: { son: true, baslik: "İğne ve İplik", metin: [
P(S("t4A"), "Elbiseyi Nil'e kendi ellerinle vermiştin. Nil giymeden önce yakasına uzun uzun baktı."),
P(S("t4B"), "Yakanın içine küçük bir S işlemiştin."),
P(S("t4C"), "Makinenin örtüsünü kapatmıştın. Dantel örtüyü düzelterek."),
P(S("t4D"), "Başka bir kumaşa başlamıştın. Bitirip bitiremeyeceğini bilmeden."),
"Bahçe'ye girmedin.",
"Merdivenler, titreyen eller, bir düşüş, bir baston. Salı ve perşembe atölye. Rima ve öbür kadınlar. Nil, her yaz, Türkçesi biraz daha düz. Bir kutu mektup ya da külü. Bir mezar taşı. Bir rüya.",
P(function(d){ return d.makine_verdi; }, "Rima'nın kız kardeşinin gelinliği bir bahar sabahı bitti. Düğünde en öndeydin, bastonunla. Gelin dans ederken etek ucunun kıvrımına baktın. Senin tekniğin, Rima'nın elleri."),
"Bir gün öleceksin. Bir hastanede ya da evinde ya da atölyede. Geride birkaç insanın hafızasında eksik, kusurlu bir kadın kalacak.",
"Rima geçen salı atölyede iğneye iplik geçiremedi. Gözlüğünü evde unutmuş. Sen geçirdin. Elin titredi, ama geçti."
]},

son_iki_dunya: { son: true, baslik: "İki Dünya", metin: [
P(S("t4A"), "Elbiseyi Nil'e kendi ellerinle vermiştin. Nil giymeden önce yakasına uzun uzun baktı."),
P(S("t4B"), "Yakanın içine küçük bir S işlemiştin."),
P(S("t4C"), "Makinenin örtüsünü kapatmıştın. Dantel örtüyü düzelterek."),
P(S("t4D"), "Başka bir kumaşa başlamıştın. Bitirip bitiremeyeceğini bilmeden."),
"Hâlâ iki taraftasın.",
"Gündüz Karşıyaka, akşam Bahçe. Defterin sol sayfası gerçek, sağ sayfası Bahçe. İki sayfayı yan yana koymak istemiyorsun.",
"Selcan Hanım her ay arıyor. Bir ay daha, diyorsun.",
"Nil'le konuşurken bazen Bahçe'den bir şey anlatıyorsun ve Nil susuyor. Artık düzeltmiyor. Yalnızca dinliyor. Bu seni daha çok korkutuyor.",
"Bir kumaşı atkı ve çözgü dokur. İkisinin rengi farklıdır, ikisi de görünür. Seninkinde hangisi hangisi, artık göremiyorsun."
]},

son_baska_ev: { son: true, baslik: "Başka Bir Ev", metin: [
P(S("t4A"), "Elbiseyi Nil'e kendi ellerinle vermiştin. Nil giymeden önce yakasına uzun uzun baktı."),
P(S("t4B"), "Yakanın içine küçük bir S işlemiştin."),
P(S("t4C"), "Makinenin örtüsünü kapatmıştın. Dantel örtüyü düzelterek."),
P(S("t4D"), "Başka bir kumaşa başlamıştın. Bitirip bitiremeyeceğini bilmeden."),
P(function(d){ return !d.izmire_donus; }, "Frankfurt'tasın. Bir misafir odası, bir balkon, bir dikiş makinesi. Almanca üç kelime, sonra beş, sonra on. Fatma'yla her salı."),
P(function(d){ return d.izmire_donus; }, "İzmir'e döndün. Frankfurt'ta bir balkon bıraktın. Şimdi iki evin var ve ikisinde de bir yanın eksik."),
"Bir akşam yemeğinde, anlamadığın bir şakaya herkes gülerken, torunun durup senin için çevirmişti. Çevrilince komik değildi. Ama çevrildi.",
"Nil bir gün dedi ki: “Babaanne, ‘özlem’in Almancası yok. Ama ben artık ne olduğunu biliyorum.”"
]}

},

ayna: function(d){
  var out = [];
  var g = d.gercek, m = d.mutluluk, b = d.bag;
  if(g >= m && g >= b) out.push("Çoğu kavşakta kusurlu olanı seçtin: mektupları, titreyen elleri, mezar taşını.");
  else if(m >= b) out.push("Çoğu kavşakta bahçeye, çaya, hiç söylenmemiş özürlere döndün.");
  else out.push("Çoğu kavşakta Nil'e, Rima'ya, Sema'ya döndün.");
  if(d.okudu) out.push("Feride'ye yazılmış mektupları sonuna kadar okudun.");
  if(d.yakti) out.push("Mektupları balkonda bir tencerede yaktın.");
  if(d.uyandi) out.push("Bahçeden Nil'in sesine doğru yürüdün.");
  if(d.feride) out.push("Feride'yi bulup onunla bir saat oturdun.");
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
