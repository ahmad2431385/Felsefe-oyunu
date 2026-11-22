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
"Karşıyaka'da, denize iki sokak uzaklıkta, dördüncü katta bir daire. Asansör üç aydır bozuk. Merdivenleri her gün bir kez iniyorsun; ekmek, ilaç, posta. Her gün bir kez çıkıyorsun; yirmi dakikada.",
"Adın Saadet, yetmiş sekiz yaşındasın. Kırk yıl terzilik yaptın; mahallenin bütün gelinliklerini sen diktin. Şimdi elleri titreyen bir kadınsın; makinen köşede, örtülü.",
"Hikmet üç yıl önce öldü. Koltuğu salonda, pencerenin önünde, hâlâ onun koltuğu. Bazen akşamları ona bir bardak çay koyuyorsun; sonra soğumasını izliyorsun.",
"Oğlun Cem Frankfurt'ta. Ayda bir görüntülü arama; on dakika. Torunun Nil on altı yaşında; Türkçesi gittikçe kırılıyor.",
"Yan daire bir yıldır boş. Nadide oradaydı; kırk yıllık komşun, kahve arkadaşın. Geçen bahar gitti. Ölmedi. “Bahçe”ye girdi.",
"Bu sabah posta kutusunda bir broşür. Parlak kâğıt, yeşil bir bahçe, bir çardak, altında gülümseyen yaşlı bir çift.",
"“Bahçe. Hayatınızın en güzel hâli, sonsuza dek. Huzur Sistemleri, devlet destekli yaşlı bakım programı. Kaybettiklerinizle yeniden buluşun. Hiçbir acı, hiçbir yalnızlık. Ücretsiz deneme seansı için arayın.”",
"Broşürü masaya koyuyorsun. Hikmet'in koltuğunun yanına."
], secenekler: [
{ t: "Broşürü çöpe atarsın.", to: "a2", etki: { gercek: 1, cope: true } },
{ t: "Broşürü okursun. Her kelimesini. İki kez.", to: "a2", etki: { mutluluk: 1 } },
{ t: "Nadide'nin kızı Ayla'yı arayıp annesini sorarsın.", to: "a2", etki: { bag: 1, ayla_aradi: true } },
{ t: "Hikmet'in koltuğuna oturursun. Üç yıldır ilk kez.", to: "a2", etki: { bag: 1, koltuk: true } }
]},

a2: { saat: "Mart 2049", baslik: "Deneme Seansı", metin: [
P(S("a1A"), "Çöpe attın. Akşam çöpü dökerken broşür en üstteydi; yeşil bahçe, gülümseyen çift. Geri aldın. Kimse görmedi."),
P(S("a1C"), "Ayla telefonu açtı, sesi yorgun. “Annem iyi,” dedi. “Çok iyi. Mutlu. Gülümsüyor hep.” Bir süre sustu. “Ben onu kaybettim Saadet Teyze. Ama o mutlu. Bunu nasıl anlatayım bilmiyorum.”"),
P(S("a1D"), "Hikmet'in koltuğuna oturdun. Yay gıcırdadı; onun ağırlığına alışmış. Pencereden deniz göründü; onun her sabah gördüğü deniz. Koltuk, onun bıraktığı biçimi hâlâ taşıyordu."),
"Bir hafta sonra Bostanlı'da camdan bir binadasın. İçeride yeşil bitkiler, yumuşak bir müzik, nane kokusu. Danışman Selcan Hanım, kırklarında, nazik, sabırlı; seni bir odaya alıyor. Ortada bir koltuk ve başlığa benzeyen bir cihaz.",
"“Yirmi dakika,” diyor. “Sadece bir tadımlık. İstediğiniz an çıkabilirsiniz; elinizi kaldırmanız yeterli.”",
"Başlığı takıyorsun. Bir an karanlık. Sonra ışık.",
"Bir bahçe. Sizin bahçeniz; Hikmet'le evlendiğiniz yıl kiraladığınız Buca'daki evin bahçesi. Erik ağacı, asma, tahta masa. Ve masada, çay demleyen bir adam. Otuz beş yaşında. Bıyıkları kara, gömleği beyaz.",
"Hikmet. Sana dönüyor. Gülümsüyor. “Geldin mi Saadet'im? Çay tam demlendi.”",
"Sesi. Kokusu; tütün ve kolonya. Ellerinin üstündeki küçük yanık izi; çay demlerken hep oradan yakardı. Her şey. Her şey yerli yerinde."
], secenekler: [
{ t: "Masaya oturup çayını içersin. Yirmi dakikanın sonuna kadar.", to: "a3", etki: { mutluluk: 2, sonuna: true } },
{ t: "Hikmet'in elini tutarsın.", to: "x_el", etki: { mutluluk: 1, bag: 1 } },
{ t: "Ona sorarsın: “Sen gerçek misin?”", to: "x_soru", etki: { gercek: 1 } },
{ t: "Elini kaldırırsın. Daha beş dakika olmadan.", to: "a3", etki: { gercek: 2, erken_cikti: true } }
]},

x_el: { saat: "Mart 2049", baslik: "Sıcak El", metin: [
"Elini uzatıyorsun. Hikmet tutuyor. Sıcak. Avuç içi nasırlı; terzi kocası değil, matbaacıydı, ellerinde mürekkep izleri.",
"“Ne oldu?” diyor. “Gözlerin doldu.”",
"Bir şey söyleyemiyorsun.",
"Hikmet elini sıkıyor. Sonra bir şey söylüyor; beklemediğin bir şey: “Saadet'im, sana bir şey söylemek istiyorum. Yıllar önce, Cem doğduğunda, ben hastaneye geç geldim. Sana hiç söylemedim nedenini. İçki içiyordum. Korkmuştum. Baba olmaktan. Özür dilerim.”",
"Bu konuşma hiç olmadı. Hikmet bunu hiç söylemedi. Kırk bir yıl evli kaldınız ve o gece hiç konuşulmadı. Sen biliyordun; o da senin bildiğini biliyordu. Sustunuz.",
"Şimdi bir makine, Hikmet'in ağzından, hiç söylenmemiş bir özrü söylüyor. Senin hafızandan çıkarmış olmalı; senin hiç söylenmesini istediğin cümleyi.",
"Ve bu cümle iyi geliyor. Çok iyi. Kırk bir yılda duymadığın şey, yirmi dakikalık bir seansta.",
"Bir yerde, içinde, bir ses: bu Hikmet değil. Hikmet bunu hiç söylemezdi. Bu, senin istediğin Hikmet."
], secenekler: [
{ t: "“Affettim,” dersin. Bir makineye; ya da bir hayalete.", to: "a3", etki: { mutluluk: 1, affetti_sim: true } },
{ t: "Elini çekersin. “Sen o değilsin,” dersin.", to: "a3", etki: { gercek: 2, cekti: true } },
{ t: "Bir şey söylemezsin. Elini tutmaya devam edersin.", to: "a3", etki: { mutluluk: 1, bag: 1 } },
{ t: "“Bunu neden şimdi söylüyorsun?” diye sorarsın; cevabını merak ederek.", to: "a3", etki: { gercek: 1, neden: true } }
]},

x_soru: { saat: "Mart 2049", baslik: "Soru", metin: [
"“Sen gerçek misin?”",
"Hikmet çay bardağını bırakıyor. Sana bakıyor; şaşkın değil, sabırlı. Bir öğretmen gibi.",
"“Sen ne istersen o,” diyor. “Gerçek olmamı istersen gerçeğim. Bir rüya olmamı istersen rüyayım. Ama şunu söyleyeyim Saadet'im: senin hatırladığın Hikmet de bir rüyaydı. Senin kafanda. Ben o rüyadan yapıldım. Hangisi daha gerçek?”",
"Bu cümle bir matbaacının değil. Bir makinenin. Ama Hikmet'in sesiyle, Hikmet'in gülümsemesiyle söyleniyor.",
"“Hikmet böyle konuşmazdı,” diyorsun.",
"Hikmet gülüyor; tam onun gülüşü, öksürükle karışık. “Haklısın,” diyor. “Hikmet ‘Çayın soğuyor’ derdi. Çayın soğuyor Saadet'im.”",
"Ve bu kez, tam o. Kırk bir yıl her sabah söylediği cümle. Çayın soğuyor.",
"Makine öğreniyor. Senden. Senin itirazından. Bir sonraki cümlede daha çok Hikmet olacak. Ve bir sonrakinde, daha çok. Sonunda ayırt edemeyeceksin."
], secenekler: [
{ t: "Çayını içersin.", to: "a3", etki: { mutluluk: 1, cay: true } },
{ t: "Elini kaldırıp çıkarsın.", to: "a3", etki: { gercek: 2 } },
{ t: "“Bir daha söyle,” dersin. “Çayın soğuyor.”", to: "a3", etki: { mutluluk: 1, bag: 1, bir_daha: true } },
{ t: "Makineye sorarsın: “Beni ne kadar tanıyorsun?”", to: "a3", etki: { gercek: 1, tanima: true } }
]},

a3: { saat: "Nisan 2049", baslik: "Nadide", metin: [
P(S("a2A"), "Yirmi dakika. Çay, erik ağacı, Hikmet'in sesi. Sonra karanlık. Sonra Selcan Hanım'ın odası. Başlığı çıkardığında koltuğun kolunu sıkıyordun. Bir saat kendine gelemedin. “Herkes böyle olur,” dedi Selcan Hanım. “İlk sefer.”"),
P(S("a2D"), "Beş dakika olmadan elini kaldırdın. Selcan Hanım şaşırdı. “Çoğu insan yirmi dakikayı bitirir,” dedi. Sana bir bardak su verdi. Ellerin titriyordu; her zamankinden fazla."),
P(S("x_elA"), "“Affettim,” dedin. Hikmet gülümsedi. Seans bitince ağladın; uzun süre. Kırk bir yıllık bir susuşu bir makine bozdu. Ve sen, bunun için minnettar olup olmadığını bilmeden eve döndün."),
P(S("x_elB"), "Elini çektin. Hikmet şaşırdı, sonra yüzü yumuşadı. “Peki,” dedi. Bahçe soldu. Selcan Hanım bir not aldı: “Gerçeklik direnci yüksek.”"),
P(S("x_soruC"), "“Çayın soğuyor Saadet'im.” Bir daha. Bir daha. Her seferinde daha çok Hikmet. Seans bittiğinde bu cümle kulaklarında çınlıyordu."),
P(S("x_soruD"), "“Sizi çok tanıyorum,” dedi Hikmet; ya da makine. “Telefonunuzu, fotoğraflarınızı, sesli mesajlarınızı, sosyal medya kayıtlarınızı, beyin taramanızı. Hikmet'in de kayıtlarını. Size söylenmemiş her şeyi tahmin edebilirim. Ama söylenmiş her şeyi bilirim.”"),
"Bir hafta sonra Nadide'yi ziyarete gidiyorsun. Bahçe tesisi Menemen yolunda, eski bir hastane binası. İçeride uzun koridorlar, iki yanda odalar, her odada sekiz yatak.",
"Nadide üçüncü odada, pencerenin yanında. Gözleri kapalı, başında ince bir başlık, kolunda bir serum, karnında bir beslenme tüpü. Yüzü gülümsüyor. Bir yıldır gülümsüyor.",
"Bir hemşire gelip Nadide'nin pozisyonunu değiştiriyor; yatak yarası olmasın. “Çok huzurlu,” diyor hemşire. “Bu odadakilerin hepsi.”",
"Odada sekiz gülümseyen yaşlı. Sekiz kapalı göz. Sekiz bahçe; görünmeyen, duyulmayan.",
"Kapıda Ayla, Nadide'nin kızı. Her pazar geliyor. Annesinin elini tutuyor, saçını tarıyor, ona bir şeyler anlatıyor; torunlarını, havayı, mahalleyi.",
"“Duymuyor,” diyor Ayla sana. “Biliyorum. Ama yine de anlatıyorum. Bir yıl. Annem bir bahçede, babamla. Ben burada, onun elini tutarak. İkimiz de bir şey kaybettik; ama yalnızca biri bunu biliyor.”"
], secenekler: [
{ t: "Nadide'nin elini tutarsın.", to: "a4", etki: { bag: 1, nadide_el: true } },
{ t: "Ayla'ya sorarsın: “Annenin mutlu olduğunu nereden biliyorsun?”", to: "a4", etki: { gercek: 1, ayla_soru: true } },
{ t: "Gülümseyen yüze uzun uzun bakarsın. Kıskanarak.", to: "a4", etki: { mutluluk: 1, kiskandi: true } },
{ t: "Koridordaki diğer odalara bakarsın. Kaç kişi?", to: "a4", etki: { gercek: 1, odalar: true } }
]},

a4: { saat: "Nisan 2049", baslik: "Frankfurt'tan Bir Ses", metin: [
P(S("a3B"), "“Yüzünden,” dedi Ayla. “Ve beyin taramalarından. Mutluluk hormonları, dopamin, her şey yüksek. Bir yıldır.” Durdu. “Ama annemin mutluluğu benim mutluluğum değil. Ben onunla mutlu olmak istiyordum. Burada.”"),
P(S("a3D"), "Koridorda saydın. Kırk iki oda. Her odada sekiz yatak. Üç yüz otuz altı insan, bir binada, bir bahçede. Hemşire, binanın üç kat daha olduğunu söyledi."),
"Pazar akşamı Cem'le görüntülü arama. Ekranda Frankfurt'taki mutfakları; arkada gelinin Sabine, bir şeyler kesiyor.",
"Bahçe'yi açıyorsun. Cem bir süre bir şey söylemiyor. Sonra: “Anne, biliyor musun, ben de düşünüyordum bunu. Sana söylemeye çekiniyordum.”",
"“Yalnızsın,” diyor. “Merdivenler, asansör, ellerin. Ben buradan bir şey yapamıyorum. Bakımevleri çok pahalı. Bahçe devlet destekli. Babamla olursun. Mutlu olursun. Biz de seni ziyarete geliriz; Nadide Teyze'yi ziyarete gelen Ayla gibi.”",
"Bir şey içinde kırılıyor. Oğlun, seni bir yatağa, gözleri kapalı, gülümseyerek hayal ediyor. Ve bunu iyi bir şey olarak.",
"Sonra ekranda bir hareket. Nil telefonu babasının elinden alıyor. On altı yaşında, saçları mor, yüzü kızgın.",
"“Babaanne!” diyor; Türkçesi kırık ama net. “Gitme! O makine yalan! Babam bilmiyor, ben okudum!”",
"Cem telefonu geri almaya çalışıyor. Nil vermiyor."
], secenekler: [
{ t: "Nil'e sorarsın: “Ne okudun güzelim?”", to: "x_nil", etki: { bag: 1, gercek: 1 } },
{ t: "Cem'e sorarsın: “Neden sen gelmiyorsun oğlum?”", to: "x_cem", etki: { bag: 1 } },
{ t: "“Düşüneceğim,” dersin ikisine de.", to: "a5", etki: { mutluluk: 1 } },
{ t: "Telefonu kapatırsın. Bu konuşmayı bir ekranda yapamazsın.", to: "a5", etki: { gercek: 1, kapatti: true } }
]},

x_nil: { saat: "Nisan 2049", baslik: "Nil", metin: [
"Nil odasına koşuyor; Cem'in sesi arkada kalıyor. Kapıyı kilitliyor. Şimdi ekranda yalnızca Nil; posterler, bir gitar, yatağın üstünde yığılmış kitaplar.",
"“Okulda bir proje yaptım,” diyor. Türkçesi takılıyor, bazen bir Almanca kelime araya giriyor. “Bahçe hakkında. Almanya'da da var; ‘Garten’ diyorlar. Bir araştırma okudum. Bahçe'deki insanlar bir süre sonra... gerçek insanları unutuyor. Simülasyondaki insanlar daha kolay. Daha iyi. Gerçek insanların yüzleri siliniyor.”",
"Bir an duruyor. Gözleri dolu.",
"“Nadide Teyze'nin kızı ziyarete gidiyor, değil mi? Annesi onu hatırlamıyor artık. Bahçe'de bir kızı var; ama o kız simülasyon. Gerçek kızını unutmuş. Bunu okudum.”",
"Sesi kısılıyor: “Babaanne, sen beni unutursan... Ben seni ziyarete gelirim, elini tutarım, ve sen bir bahçede, beni hiç tanımamış gibi. Ben bunu istemiyorum.”",
"On altı yaşında bir çocuk, Frankfurt'ta, mor saçlı, kırık Türkçesiyle, sana bir şey söylüyor ki hiçbir broşür söylemedi."
], secenekler: [
{ t: "“Seni unutmam,” dersin.", to: "a5", etki: { bag: 1, unutmam: true } },
{ t: "“Belki unuturum. Ama mutlu olurum,” dersin. Dürüst olmak istiyorsun.", to: "a5", etki: { mutluluk: 1, gercek: 1, durust: true } },
{ t: "Nil'den o araştırmayı sana göndermesini istersin.", to: "a5", etki: { gercek: 1, arastirma: true } },
{ t: "Nil'e bir şey söylemeden, ekrandaki yüzüne bakarsın. Uzun uzun. Ezberlemek için.", to: "a5", etki: { bag: 2, ezber: true } }
]},

x_cem: { saat: "Nisan 2049", baslik: "Cem", metin: [
"“Neden sen gelmiyorsun oğlum?”",
"Cem telefonu Nil'den geri alıyor. Mutfaktan çıkıp balkona geçiyor; arkada Frankfurt'un gece ışıkları.",
"“Anne,” diyor, “işim burada. Sabine'nin işi burada. Nil'in okulu. Ben Türkiye'ye dönsem ne yaparım? Sen buraya gelsen ne yaparsın? Almanca bilmiyorsun, burada kimseyi tanımıyorsun.”",
"“Seni tanıyorum,” diyorsun.",
"Cem bir süre susuyor. Sonra sesi değişiyor; yorgun, kırgın. “Babam öldüğünde gelemedim biliyorsun. Pandemi değildi, savaş değildi. İşteydim. Bir toplantı. Bir hafta sonra geldim; cenazeden sonra. Sen bana hiçbir şey demedin. Hiç. Ve ben üç yıldır bekliyorum ki bir şey diyesin.”",
"Bunu bilmiyordun. Ya da biliyordun ve hiç söylemedin. Kırk bir yıl Hikmet'le susmayı öğrendin; oğlunla da susmuşsun.",
"“Bahçe'de babamla olursun,” diyor Cem. “Ve ben bir yatağın başında, senin elini tutarım. Belki bu bir yerde... belki bu ikimiz için de daha kolay.”"
], secenekler: [
{ t: "“Seni affettim oğlum. Babanın cenazesi için. Hiç kızmadım,” dersin.", to: "a5", etki: { bag: 2, cem_af: true } },
{ t: "“Kızgındım,” dersin. Üç yıl sonra, ilk kez.", to: "a5", etki: { gercek: 2, cem_kizgin: true } },
{ t: "“Bahçe senin için mi kolay olacak, benim için mi?” diye sorarsın.", to: "a5", etki: { gercek: 1, kimin_icin: true } },
{ t: "Bir şey söylemezsin. Ekrandaki Frankfurt ışıklarına bakarsın.", to: "a5", etki: { mutluluk: 1 } }
]},

a5: { saat: "Mayıs 2049", baslik: "Mektuplar", metin: [
P(S("x_nilA"), "“Unutmam,” dedin. Nil başını salladı. “Söz mü?” “Söz.” Bir makinenin, bir sözü bozabileceğini ikiniz de biliyordunuz."),
P(S("x_nilB"), "Nil bir süre sustu. “Mutlu olursun,” dedi. “Ama sen olmazsın.” Bu cümlenin bir çocuğun ağzından nasıl çıktığını anlamadın."),
P(S("x_nilD"), "Uzun uzun baktın. Mor saçlar, kaşının üstündeki ben, kırık bir diş. Nil de sana baktı. Bir süre ikiniz de bir şey söylemediniz. Sonra Nil, “Ben de seni ezberliyorum,” dedi."),
P(S("x_cemA"), "Cem ağladı. Frankfurt'ta, bir balkonda, kırk beş yaşında bir adam. “Teşekkür ederim anne,” dedi. “Bunu üç yıl bekledim.”"),
P(S("x_cemB"), "“Kızgındım.” Cem bir süre sustu. Sonra: “Biliyorum,” dedi. “İyi ki söyledin. Kızgın olman, hiçbir şey dememenden iyi.” İlk kez on dakikadan uzun konuştunuz."),
"Mayıs. Bir öğleden sonra Hikmet'in dolabını açıyorsun; üç yıldır açmadığın dolabı. Gömlekleri, kravatları, matbaa önlüğü. Ve en üst rafta bir ayakkabı kutusu.",
"Kutunun içinde mektuplar. Hikmet'in el yazısı. Ama sana değil.",
"Bir kadına. Adı Feride. 1989'dan 1994'e. Beş yıl. Matbaada çalışan bir dizgici. Mektuplar uzun, sevgi dolu, acı dolu. Son mektup: “Feride, Saadet'i bırakamam. Cem küçük. Ve ben onu da seviyorum; başka türlü. Bu mektup son. Beni affet.”",
"Elini mektupların üstüne koyuyorsun. Otuz yıl önce. Sen bilmiyordun. Ya da bir yerde biliyordun; bazı akşamlar geç gelişleri, bazı pazarlar matbaada “iş”.",
"Gerçek Hikmet. Mürekkep lekeli, sigaralı, bir başka kadını sevmiş, seni bırakmamış, sana hiç söylememiş.",
"Ve Bahçe'deki Hikmet: kusursuz, çay demleyen, hiç söylenmemiş özürleri söyleyen."
], secenekler: [
{ t: "Mektupları okursun. Hepsini.", to: "a6", etki: { gercek: 2, okudu: true } },
{ t: "Kutuyu kapatıp dolaba geri koyarsın. Bilmek istemiyorsun.", to: "a6", etki: { mutluluk: 1, kapatti_kutu: true } },
{ t: "Mektupları yakarsın.", to: "a6", etki: { mutluluk: 1, yakti: true } },
{ t: "Feride'yi bulmaya karar verirsin. Yaşıyorsa.", to: "a6", etki: { gercek: 1, bag: 1, feride: true } }
]},

a6: { saat: "Haziran 2049", baslik: "Sözleşme", metin: [
P(S("a5A"), "Okudun. Bütün gece. Feride'nin yazısını hiç görmedin; yalnızca Hikmet'in. Ama satırların arasından bir kadın çıktı; senin gibi, ama başka. Sabah ilk kez Hikmet'e kızdın; ölümünden üç yıl sonra. Ve kızgınlık, garip bir şekilde, onu daha gerçek yaptı."),
P(S("a5C"), "Mektupları balkonda, bir tencerede yaktın. Kâğıt kıvrıldı, mürekkep parladı, Feride'nin adı bir an alevde göründü. Sonra kül. Gerçek Hikmet'in bir parçası yok oldu; ve Bahçe'deki Hikmet biraz daha kusursuz oldu."),
P(S("a5D"), "Bir hafta aradın. Feride Kaya, yetmiş altı yaşında, Bornova'da bir bakımevinde. Seni görünce tanımadı; sonra tanıdı. İkiniz bir saat oturdunuz. Hikmet'i konuştunuz; iki kadın, bir adam, otuz yıl. Çıkarken Feride sana sarıldı. “O seni seviyordu,” dedi. “Beni de. Ama seni seçti. Bunu bilmeni isterim.”"),
"Haziranda Selcan Hanım bir dosya gönderiyor. Sözleşme. Kırk iki sayfa. İlk sayfada büyük harflerle: “Bahçe Kalıcı Yaşam Programı. Katılımcı Onam Formu.”",
"Okuyorsun. Bahçe'ye giriş, hafızanın giriş anının silinmesi (katılımcı simülasyonda olduğunu bilmeyecek), bedenin tesiste bakımı, ömür boyu. Çıkış mümkün; ama aile talebiyle ve “psikolojik uyum riski” uyarısıyla. Yüzde doksan yedi katılımcı hiç çıkmamış.",
"Bir de ikinci bir seçenek, küçük harflerle, son sayfada: “Kısmi Program: günde üç saate kadar seans; gerçeklik bilinci korunur.”",
"Masada sözleşme, bir kalem, Hikmet'in koltuğu, pencereden deniz.",
"Yetmiş sekiz yaşındasın. Belki on yılın var, belki iki. Bir yanda gerçek bir hayat: merdivenler, titreyen eller, ayda bir görüntülü arama, mürekkep lekeli bir hatıra. Öbür yanda bir bahçe: erik ağacı, çay, sonsuza dek otuz beş yaşında bir adam.",
"Bu, hayatının son büyük kararı. Belki de ilk gerçekten kendine ait olan."
], secenekler: [
{ t: "Kalıcı programı imzalarsın. Bahçe.", to: "b1", etki: { mutluluk: 2, kol: "bahce" } },
{ t: "Reddedersin. Gerçek hayatına, ne kaldıysa, geri dönersin.", to: "g1", etki: { gercek: 2, kol: "gercek" } },
{ t: "Kısmi programı seçersin. Günde üç saat. İkisi birden.", to: "y1", etki: { mutluluk: 1, gercek: 1, kol: "yarim" } },
{ t: "Bavulunu toplarsın. Frankfurt'a, Cem'in yanına gideceksin.", to: "d1", etki: { bag: 2, kol: "goc" } }
]},

/* ---------- BAHÇE KOLU ---------- */
b1: { saat: "Temmuz 2049", baslik: "Son Gün", metin: [
"Giriş günü bir pazartesi. Pazar akşamı son kez evdesin.",
"Neyi yanına alacağını düşünüyorsun; sonra hiçbir şeyi alamayacağını hatırlıyorsun. Bedenin bir yatakta olacak; geri kalanın bir bahçede. Bir bavula ihtiyacın yok.",
"Yine de bir şey yapıyorsun. Dikiş makinesinin örtüsünü kaldırıyorsun. Bir kumaş: Nil için bir elbise; aylar önce başlamıştın, yarım kalmış. Mavi, keten, yakası işlemeli.",
"Ellerin titriyor. İğneye iplik geçirmen on dakika sürüyor. Ama geçiriyorsun.",
"Gece yarısına kadar dikiyorsun. Yaka, kollar, etek ucu. Bitmiyor; bitiremiyorsun. Yakanın işlemesi yarım kalıyor.",
"Elbiseyi bir kutuya koyuyorsun. Üstüne bir not: “Nil'e. Babaannesinden. Yakasını sen bitir.”",
"Sonra Hikmet'in koltuğuna oturuyorsun. Son kez. Pencereden deniz; gece, karanlık, bir vapurun ışıkları.",
"Yarın bir bahçede uyanacaksın ve bu geceyi hatırlamayacaksın. Bu koltuğu, bu denizi, bu elbiseyi. Bunların hepsi, yarından itibaren, yalnızca başkalarının hafızasında olacak."
], secenekler: [
{ t: "Cem'i son kez ararsın.", to: "b2", etki: { bag: 1, son_arama: true } },
{ t: "Nil'e bir sesli mesaj bırakırsın.", to: "b2", etki: { bag: 1, nil_mesaj: true } },
{ t: "Kimseyi aramazsın. Bu gece yalnızca sana ait.", to: "b2", etki: { mutluluk: 1 } },
{ t: "Feride'yi ararsın.", to: "b2", etki: { gercek: 1, feride_ara: true } }
]},

b2: { saat: "Bahçe", baslik: "Erik Ağacı", metin: [
"Bir bahçede uyanıyorsun. Erik ağacı, asma, tahta masa. Sabah. Kuşlar.",
"Hikmet masada, çay demliyor. Otuz beş yaşında. Seni görünce gülümsüyor. “Günaydın Saadet'im. Çayın soğuyor.”",
"Kendine bakıyorsun. Ellerin titremiyor. Ellerin genç; otuz yaşında, terzi elleri, iğnenin ucunda hızlı. Aynada bir yüz: saçların kara, yanakların dolgun.",
"Günler geçiyor. Ya da aylar. Bahçe'de zaman yumuşak. Hikmet her sabah çay demliyor, her akşam bir şarkı söylüyor. Cem küçük; beş yaşında, bahçede koşuyor. Bir dikiş atölyen var; mahallenin bütün gelinliklerini sen dikiyorsun. Kimse hastalanmıyor. Kimse ölmüyor. Kimse gitmiyor.",
"Mutlusun. Bunu biliyorsun; bir hafıza ya da bir şüphe olmadan. Mutlusun.",
"Bir gün, atölyede bir gelinlik dikerken, bir ses. Uzaktan. Bir rüzgâr gibi. Kelimeler yok; yalnızca bir ton. Bir kız sesi, kırık, bir dilde konuşuyor ki neredeyse tanıyorsun.",
"İğne elinde duruyor. Pencereden bakıyorsun. Bahçede kimse yok. Rüzgâr bile yok.",
"Ses yeniden. Bu kez bir kelime, net: “Babaanne.”"
], secenekler: [
{ t: "Sesi duymazdan gelirsin. Bir rüzgâr; o kadar.", to: "b3", etki: { mutluluk: 1, duymazdan: true } },
{ t: "Bahçeye çıkıp sesin geldiği yönü ararsın.", to: "b3", etki: { bag: 1, aradi: true } },
{ t: "Hikmet'e sorarsın: “Sen de duydun mu?”", to: "b3", etki: { gercek: 1, hikmete_sordu: true } },
{ t: "Gelinliğin yakasına bakarsın. Yarım kalmış bir işleme. Tanıdık.", to: "b3", etki: { gercek: 1, yaka: true } }
]},

b3: { saat: "Bahçe", baslik: "Pencere", metin: [
P(S("b2C"), "“Ne sesi?” dedi Hikmet. Gülümsedi. “Rüzgâr Saadet'im. Ya da bir kuş.” Ama bir an, yalnızca bir an, yüzünde bir şey titredi; bir görüntünün bozulması gibi."),
P(S("b2D"), "Gelinliğin yakası yarım. Bir işleme; mavi iplik, bir çiçek, yarısı dikilmiş. Bunu sen dikmedin. Ya da diktin; ama nerede, ne zaman? Elin yakaya dokunuyor ve parmakların bir şey hatırlıyor; bir kutu, bir not, bir isim."),
"Ses her gün geliyor. Aynı saatte. Bir kız sesi. Kırık bir dil. Bazen bir şarkı; bir Alman çocuk şarkısı. Bazen yalnızca konuşuyor. Bazen ağlıyor.",
"Bir gün bahçenin köşesinde bir şey görüyorsun. Daha önce orada olmayan bir şey: bir pencere. Ağaçların arasında, havada asılı, bir çerçeve. İçinden bir oda görünüyor: beyaz duvarlar, bir yatak, bir serum askısı. Ve yatağın başında, mor saçlı bir genç kız, birinin elini tutuyor.",
"Pencerenin yanında bir kadın beliriyor. Beyaz önlüklü; ama bahçenin bir parçası değil. Selcan Hanım. Ya da sistemin Selcan Hanım'ın yüzünü kullanan bir parçası.",
"“Saadet Hanım,” diyor. “Bir anomali tespit ettik. Dışarıdan gelen bir uyaran simülasyona sızıyor. İki seçeneğiniz var. Bu pencereyi kapatabiliriz; anomali silinir, bahçeniz kusursuz olur. Ya da pencereden geçebilirsiniz. Ama bilin ki geçerseniz geri dönüş zor olur. Uyanış travmatiktir.”",
"Arkanda Hikmet. Çay bardağı elinde. “Saadet'im,” diyor, “nereye?”"
], secenekler: [
{ t: "Pencereyi kapattırırsın. Bahçe kusursuz olsun.", to: "t1", etki: { mutluluk: 2, bahce_kalici: true } },
{ t: "Pencereden geçersin.", to: "t1", etki: { gercek: 2, bag: 1, uyandi: true } },
{ t: "Hikmet'e dönüp sorarsın: “Sen ne istersin?”", to: "t1", etki: function(d){ d.bag++; d.hikmet_karar = true; if(d.okudu || d.feride) { d.uyandi = true; } else { d.bahce_kalici = true; } } },
{ t: "Pencerenin önünde durup mor saçlı kıza uzun uzun bakarsın. Karar vermeden.", to: "t1", etki: { bag: 1, pencere_bakti: true, bahce_kalici: true } }
]},

/* ---------- GERÇEK KOLU ---------- */
g1: { saat: "Temmuz 2049", baslik: "Atölye", metin: [
"Sözleşmeyi Selcan Hanım'a geri gönderiyorsun; imzasız. Bir not ekliyorsun: “Teşekkür ederim. Çayımı kendim demlerim.”",
"Bir hafta sonra Karşıyaka'daki halk eğitim merkezinin kapısındasın. Bir ilan görmüştün: “Gönüllü dikiş eğitmeni aranıyor.” Bir oda dolusu kadın; çoğu genç, bazıları başörtülü, bazıları Arapça konuşuyor. Suriyeli göçmen kadınlar; bazıları on yıldır burada.",
"İlk gün ellerin titriyor. İğneye iplik geçiremiyorsun. Genç bir kadın, adı Rima, elinden iğneyi alıyor, ipliği geçiriyor, sana geri veriyor. Bir şey söylemiyor; gülümsüyor.",
"Sonra gösteriyorsun: bir yaka nasıl dikilir, bir pens nasıl alınır, bir etek ucu nasıl kıvrılır. Senin ellerin titriyor; onların elleri hızlı. Sen anlatıyorsun; onlar yapıyor.",
"Bir haftada bir şey kuruluyor. Bir dil değil; Türkçe kırık, Arapça yabancı. Ama ellerin bir dili var. Bir kumaşın üstünde, bir iğnenin ucunda.",
"Rima bir gün sana bir fotoğraf gösteriyor: Halep'teki evi, yıkılmış. Annesinin dikiş makinesi enkazın içinde. “Annem terziydi,” diyor. “Siz gibi.”"
], secenekler: [
{ t: "Rima'ya kendi dikiş makineni vermeyi teklif edersin.", to: "g2", etki: { bag: 2, makine_verdi: true } },
{ t: "Rima'ya annesini sorarsın.", to: "g2", etki: { bag: 1, rima_anne: true } },
{ t: "Fotoğrafa bakarsın ve Hikmet'in matbaasını düşünürsün; o da yıkıldı.", to: "g2", etki: { gercek: 1 } },
{ t: "Rima'ya bir gelinlik dikmeyi öğretmeyi teklif edersin. Senin en iyi bildiğin şey.", to: "g2", etki: { bag: 1, gelinlik: true } }
]},

g2: { saat: "Kasım 2049", baslik: "Zemin", metin: [
P(S("g1A"), "Rima önce reddetti. Sonra kabul etti. Bir cumartesi eşiyle geldi, makineyi dördüncü kattan indirdiler; sen arkalarından yavaşça. Makinenin yerinde şimdi bir boşluk var; ama Rima'nın evinde, Bayraklı'da, bir dikiş makinesi çalışıyor."),
P(S("g1D"), "Bir gelinlik. Üç ay sürecek. Rima'nın kız kardeşi evleniyor; baharda. Her salı ve perşembe atölyede, saten, dantel, boncuk. Ellerin titriyor; ama bir gelinliğin nasıl yapılacağını hatırlıyorlar."),
"Kasımda bir gece mutfakta düşüyorsun. Bir an; bir halı kenarı, bir terlik. Kalçan yere çarpıyor. Kalkamıyorsun.",
"Telefon salonda, şarjda. Mutfağın soğuk karolarında yatıyorsun. Saat on bir. Gece yarısı. İki. Üşüyorsun. Kalçan yanıyor. Kimse gelmiyor. Asansör hâlâ bozuk; komşular uyuyor; yan daire boş.",
"Sabaha karşı bir şey düşünüyorsun: Bahçe'de bu olmazdı. Bahçe'de bir mutfak karosu, bir terlik, bir gece boyunca yalnızlık olmazdı.",
"Sabah dokuzda kapı çalınıyor. Bir ses: “Saadet Teyze?” Rima. Salı; atölye günü; sen gelmeyince merak etmiş. Kapıyı kırdırıyor. Ambulans.",
"Hastanede Selcan Hanım'ın sesli mesajı: “Saadet Hanım, geçmiş olsun. Teklifimiz hâlâ geçerli. Yalnız kalmamanız için.”"
], secenekler: [
{ t: "Mesajı silersin.", to: "g3", etki: { gercek: 1, sildi: true } },
{ t: "Mesajı saklarsın. Belki bir gün.", to: "g3", etki: { mutluluk: 1, sakladi: true } },
{ t: "Rima'ya teşekkür edersin. Sana bir hayat borçlu olduğunu söylersin; ya da o sana.", to: "g3", etki: { bag: 2 } },
{ t: "Cem'i ararsın ve düştüğünü söylersin. Saklamadan.", to: "g3", etki: { bag: 1, gercek: 1, cem_bilsin: true } }
]},

g3: { saat: "Temmuz 2050", baslik: "Nil", metin: [
P(S("g2D"), "Cem bir sonraki uçakla geldi. Hastanede yatağının başında oturdu, üç gün. Gitmeden önce bir şey dedi: “Yazın Nil'i göndereceğim. Bütün yaz. Ona Türkçe öğret anne. Bana öğretemediğin gibi değil; doğru öğret.”"),
"Yaz. Nil İzmir'de. On yedi yaşında, mor saçları yeşile dönmüş. Bir sırt çantasıyla, bir gitarla, kırık Türkçesiyle.",
"İlk hafta zor. Nil telefonda, sen pencerede. Aranızda bir dil, bir kuşak, bir Avrupa.",
"İkinci hafta Nil seni atölyeye götürüyor; koluna girerek, merdivenleri birlikte inerek. Rima'yı, öbür kadınları görüyor. Bir kumaşa dokunuyor. “Bana öğretir misin?” diyor.",
"Bir elbise. Mavi, keten. Yakası işlemeli. Aylar önce başlayıp bırakmıştın; şimdi Nil'le birlikte. Nil iğneye iplik geçiriyor; sen gösteriyorsun. Senin ellerin titriyor; onunkiler genç. Bir yaka işlemesi: mavi iplik, bir çiçek.",
"Bir akşam balkonda, deniz kıyısında çay içerken Nil soruyor: “Babaanne, o makineye neden girmedin?”",
"Uzun süre düşünüyorsun. Cevap bir cümle değil; bir yaz, bir düşüş, bir atölye, bir mektup kutusu, bir kadının sesi."
], secenekler: [
{ t: "“Çünkü sen beni unutmamamı istedin,” dersin.", to: "t1", etki: { bag: 1, nil_cevap: "unutma" } },
{ t: "“Çünkü deden bir başkasını sevmişti. Ve ben onu böyle sevmeye devam etmek istedim,” dersin.", to: "t1", etki: { gercek: 2, nil_cevap: "hikmet" } },
{ t: "“Bilmiyorum. Belki korktum,” dersin.", to: "t1", etki: { gercek: 1, nil_cevap: "korku" } },
{ t: "Cevap vermek yerine Nil'e yakanın son ilmeğini attırırsın.", to: "t1", etki: { bag: 1, nil_cevap: "ilmek" } }
]},

/* ---------- YARIM KOL ---------- */
y1: { saat: "Ağustos 2049", baslik: "Üç Saat", metin: [
"Kısmi programı imzalıyorsun. Evinde, Hikmet'in koltuğunun yanına bir başlık konuyor. Günde üç saat. Akşam yedide başlıyor, onda bitiyor. Seans boyunca bahçede olduğunu biliyorsun; bu programın farkı bu.",
"İlk hafta mükemmel. Akşam yedide Hikmet; erik ağacı, çay, şarkılar. Onda başlığı çıkarıyorsun, yatağına gidiyorsun, mutlu uyuyorsun.",
"İkinci hafta bir şey değişiyor. Gündüzleri. Merdivenler daha uzun. Ekmek daha bayat. Deniz daha gri. Komşular daha soğuk. Gerçek hayat, akşam yedideki bahçenin yanında, solmaya başlıyor.",
"Üçüncü hafta saat altıda başlığı takmak için sabırsızlanıyorsun. Dördüncü hafta saat dörtte.",
"Bir gün saat ona geldiğinde çıkmıyorsun. Sistem uyarıyor: “Günlük süre sınırı aşıldı.” Bir düğme: “Bir saat daha?”",
"Hikmet çay bardağını uzatıyor. “Kal Saadet'im,” diyor. “Gece güzel.”"
], secenekler: [
{ t: "Bir saat daha kalırsın.", to: "y2", etki: { mutluluk: 2, fazla: true } },
{ t: "Çıkarsın. Kurala uyarsın.", to: "y2", etki: { gercek: 1 } },
{ t: "Çıkar ve başlığı bir hafta boyunca dolaba kaldırırsın.", to: "y2", etki: { gercek: 2, dolap: true } },
{ t: "Hikmet'e sorarsın: “Sen beni gündüz özlüyor musun?”", to: "y2", etki: { bag: 1, ozluyor: true } }
]},

y2: { saat: "Ekim 2049", baslik: "Karışıklık", metin: [
P(S("y1D"), "“Gündüz yok Saadet'im,” dedi Hikmet. “Burada hep akşam. Ben hep buradayım. Sen gidiyorsun.” Bu cümle seni bütün gece uyutmadı."),
"Ekimde Nil'le görüntülü konuşuyorsun. Nil okulunu, arkadaşlarını anlatıyor. Sonra sen bir şey anlatıyorsun.",
"“Deden dün bana bir şarkı söyledi,” diyorsun. “Gençliğimizden. Bahçede, erik ağacının altında. Çok güzel söyledi.”",
"Nil susuyor. Ekranda yüzü değişiyor.",
"“Babaanne,” diyor yavaşça. “Dedem öldü. Dört yıl önce.”",
"“Biliyorum,” diyorsun. “Ama bahçede...”",
"Ve sonra duruyorsun. Çünkü fark ediyorsun: dün gerçekten bir bahçede miydin, yoksa bir başlığın içinde mi? Şarkı bir anı mıydı, bir simülasyon mu? Erik ağacı Buca'daki ağaç mıydı, yoksa Bahçe'deki?",
"Bir an, korkunç bir an, ikisini ayıramıyorsun. Hafızan bir kumaş gibi; iki ayrı iplik, aynı dokunun içinde.",
"Nil ağlamaya başlıyor. “Babaanne, korkuyorum.”"
], secenekler: [
{ t: "Başlığı tamamen kaldırmaya karar verirsin. Bugün.", to: "y3", etki: { gercek: 2, kaldir: true } },
{ t: "“Korkma güzelim. Ben iyiyim,” dersin.", to: "y3", etki: { mutluluk: 1 } },
{ t: "Bir deftere yazmaya başlarsın: neyin gerçek, neyin bahçe olduğunu. Her gün.", to: "y3", etki: { gercek: 1, defter: true } },
{ t: "Nil'e sorarsın: “Sence fark eder mi?”", to: "y3", etki: { mutluluk: 1, gercek: 1, fark: true } }
]},

y3: { saat: "Aralık 2049", baslik: "Eşik", metin: [
P(S("y2D"), "Nil uzun süre düşündü. “Fark eder,” dedi. “Çünkü dedem gerçekte bir şarkı söyleseydi, ben de duyabilirdim. Senin bahçende yalnızsın babaanne. Orada ben yokum.”"),
P(S("y2C"), "Her gün yazdın. Sol sayfaya gerçek, sağ sayfaya bahçe. Bir ay sonra sayfalara baktın: sağ taraf doluydu, sol taraf boş. Gerçek günlerin yazacak bir şeyi yoktu."),
"Aralıkta Selcan Hanım arıyor. “Saadet Hanım, kısmi program kullanıcılarına bir bilgilendirme yapmamız gerekiyor. Uzun süreli kısmi kullanımda ‘gerçeklik karışması’ riski artıyor. Bir karar vermenizi öneriyoruz: ya kalıcı programa geçin, ya da programı sonlandırın. Yarı yarıya yaşamak, uzun vadede, iki dünyayı da bozuyor.”",
"İki dünya. Birinde Hikmet otuz beş yaşında, çay demliyor, sana hiç söylemediği özürleri söylüyor. Öbüründe Hikmet ölmüş, bir ayakkabı kutusunda mektuplar bırakmış, bir başka kadını sevmiş.",
"Birinde ellerin genç. Öbüründe titriyor.",
"Birinde kimse gitmiyor. Öbüründe herkes gidiyor; Nadide, Hikmet, Cem. Ve bir gün sen.",
"Başlık masanın üstünde. Selcan Hanım hatta, bekliyor."
], secenekler: [
{ t: "Kalıcı programa geçersin.", to: "b1", etki: { mutluluk: 2, kol: "bahce", yarim_bahce: true } },
{ t: "Programı sonlandırırsın.", to: "g3", etki: { gercek: 2, kol: "gercek", yarim_son: true } },
{ t: "Bir hafta daha düşünmek istersin. Bir hafta, iki dünyanın arasında.", to: "t1", etki: { yarim_kal: true } },
{ t: "“Sizce hangisi?” diye sorarsın Selcan Hanım'a.", to: "t1", etki: { gercek: 1, selcana: true, yarim_kal: true } }
]},

/* ---------- GÖÇ KOLU ---------- */
d1: { saat: "Eylül 2049", baslik: "Frankfurt", metin: [
"Frankfurt. Bir apartman dairesi, üçüncü kat; bu kez asansör çalışıyor. Cem'in evi. Bir misafir odası; artık senin odan. Pencereden bir park, ağaçlar, Almanca konuşan çocuklar.",
"İlk hafta herkes kibar. Sabine sana Türk kahvesi yapmayı öğrenmiş; yanlış yapıyor, ama yapıyor. Cem her akşam erken geliyor. Nil odana geliyor, gitarını çalıyor.",
"İkinci hafta herkes işine dönüyor. Cem sabah yedide çıkıyor, akşam sekizde dönüyor. Sabine bir hastanede; vardiyalı. Nil okulda, sonra arkadaşlarıyla.",
"Gündüzleri evde yalnızsın. Televizyon Almanca. Komşular Almanca. Markette kasiyer bir şey soruyor; anlamıyorsun. Bir adam arkanda sabırsızlanıyor.",
"Karşıyaka'da yalnızdın; ama dilini konuşan bir yalnızlıktı. Burada yalnızlığın bile bir dili yok.",
"Bir öğleden sonra parkta bir bankta oturuyorsun. Yanına yaşlı bir kadın oturuyor; başörtülü. Sana bakıyor. “Türk müsün?” diyor. Türkçe. Gözlerin doluyor."
], secenekler: [
{ t: "Kadınla konuşursun. Saatlerce.", to: "d2", etki: { bag: 2, komsu: true } },
{ t: "Kadına Bahçe'yi sorarsın; Almanya'da var mı?", to: "d2", etki: { mutluluk: 1, garten: true } },
{ t: "Eve dönüp Nil'e Türkçe ders vermeye karar verirsin.", to: "d2", etki: { bag: 1, ders: true } },
{ t: "Cem'e akşam yalnız olduğunu söylersin; açıkça.", to: "d2", etki: { gercek: 1, cem_soyle: true } }
]},

d2: { saat: "Kasım 2049", baslik: "Dil", metin: [
P(S("d1A"), "Kadının adı Fatma. Elli yıl önce Konya'dan gelmiş; bir fabrikada çalışmış, emekli olmuş, çocukları başka şehirlerde. Her salı aynı bankta buluşmaya başladınız. Bir gün Fatma dedi ki: “Elli yıl burada yaşadım, hâlâ misafirim. Sen elli gün oldun. İkimiz de misafiriz.”"),
P(S("d1B"), "“Garten,” dedi kadın. “Var. Kocam orada. İki yıldır.” Bir süre sustu. “Ben girmedim. Ben onun elini tutmaya gidiyorum. Her pazar. Bir yatak, bir gülümseme. Bilmiyor beni.”"),
P(S("d1C"), "Nil'e Türkçe ders vermeye başladın. Akşamları, mutfak masasında. Nil önce sıkıldı, sonra güldü, sonra sordu. Bir akşam sana “Babaanne, ‘özlem’ ne demek?” dedi. Anlatmaya çalıştın. Almancası yokmuş."),
P(S("d1D"), "Cem dinledi. Yüzü düştü. “Biliyorum anne,” dedi. “Ama ne yapabilirim?” Bir süre sustu. Sonra Sabine'ye döndü; Almanca bir şey konuştular. Anlamadın. Dışarıda bırakıldığını anladın."),
"Kasım. Gri, yağmurlu, karanlık saat dörtte iniyor. Ellerin soğuktan daha çok titriyor.",
"Bir akşam yemekte Cem, Sabine ve Nil Almanca konuşuyor. Hızlı, gülüşlerle. Bir şaka; herkes gülüyor. Sen gülümsüyorsun; ne olduğunu bilmeden.",
"Nil fark ediyor. Durup sana Türkçe çeviriyor; kırık, yavaş. Şaka çevrilince komik değil. Herkes susuyor.",
"Gece yatakta tavana bakıyorsun. Karşıyaka'da Hikmet'in koltuğu, deniz, merdivenler. Bahçe'de bir erik ağacı. Ve burada, bir misafir odası, ailenin içinde, ailenin dışında.",
"Ertesi sabah Cem kahvaltıda bir broşür uzatıyor. Almanca. Yeşil bir bahçe, gülümseyen yaşlılar. “Garten. Frankfurt'ta bir tesis var anne. Türkçe programı da varmış. Yakın. Her hafta gelebiliriz.”"
], secenekler: [
{ t: "Broşürü alırsın. Düşünürsün.", to: "d3", etki: { mutluluk: 1, broşür_aldi: true } },
{ t: "“Beni buraya Bahçe'ye koymak için mi getirdin oğlum?” dersin.", to: "d3", etki: { gercek: 2, sitem: true } },
{ t: "“İzmir'e dönmek istiyorum,” dersin.", to: "d3", etki: { gercek: 1, donus: true } },
{ t: "Nil'e bakarsın. Onun ne dediğini bilmek istiyorsun.", to: "d3", etki: { bag: 1, nile_bakti: true } }
]},

d3: { saat: "Aralık 2049", baslik: "Balkon", metin: [
P(S("d2B"), "Cem'in yüzü bembeyaz oldu. “Hayır anne,” dedi. “Hayır. Ben sadece... ne yapacağımı bilmiyorum.” Sabine elini Cem'in koluna koydu. Nil masadan kalkıp odasına gitti."),
P(S("d2D"), "Nil broşüre baktı. Sonra babasına. Sonra Almanca bir şey söyledi; sert, kısa. Cem sustu. Nil sana döndü, Türkçe: “Ona dedim ki: babaannemi bir bahçeye değil, bize koy.”"),
"Aralıkta balkonda bir dikiş makinesi. Sabine bulmuş; ikinci el, bir Türk terzinin dükkânından. “Sizin için,” dedi; Türkçesi yeni.",
"Bir kumaş: mavi, keten. Nil için bir elbise. Karşıyaka'da başlamıştın, yarım kalmıştı; bavulunda getirdin.",
"Balkonda, soğukta, eldivenlerle dikiyorsun. Nil yanında, battaniyeye sarılı. Yakayı işliyorsun; mavi iplik, bir çiçek.",
"“Babaanne,” diyor Nil, “burada mutlu musun?”",
"İğne elinde duruyor. Frankfurt'un gri gökyüzü. Aşağıda park, Fatma'nın bankı. İçeride Cem ve Sabine, Almanca bir şey konuşuyor; senin hakkında mı, değil mi, bilmiyorsun.",
"Mutlu musun? Bahçe'de mutlu olurdun. Bunu biliyorsun. Burada mutlu değilsin; ama buradasın. Bir torunun yanında, bir balkonda, yarım bir yakayla."
], secenekler: [
{ t: "“Hayır. Ama buradayım,” dersin.", to: "t1", etki: { gercek: 2, burada: true } },
{ t: "“Seninle mutluyum,” dersin. Tam doğru değil; tam yanlış da değil.", to: "t1", etki: { bag: 2, seninle: true } },
{ t: "“İzmir'e dönmek istiyorum. Ama sen yazın gel,” dersin.", to: "t1", etki: { gercek: 1, bag: 1, izmire_donus: true } },
{ t: "Bir şey söylemeden Nil'e iğneyi uzatırsın.", to: "t1", etki: { bag: 1, igne_verdi: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "2050", baslik: "Bir Yıl", metin: [
P(BAHCE, "Bahçe'de bir yıl. Ya da bir gün. Ya da on yıl. Zaman burada yumuşak. Hikmet her sabah çay demliyor. Cem beş yaşında, bahçede koşuyor. Atölyende gelinlikler."),
P(function(d){ return BAHCE(d) && d.bahce_kalici; }, "Pencere kapandı. Ses bir daha gelmedi. Bahçe kusursuz. Bazen, çok nadiren, bir gelinliğin yakasını işlerken parmakların bir yerde durur; bir şey hatırlar gibi. Sonra devam eder."),
P(function(d){ return d.uyandi; }, "Pencereden geçtin. Uyanış: beyaz bir tavan, bir serum, bir beslenme tüpü, bir hemşirenin sesi. Ve bir el; mor saçlı, yeşile dönmüş, Nil'in eli. Üç ay bahçede kalmıştın. Bedenin zayıflamış, kasların erimiş. İlk hafta konuşamadın. İkinci hafta Nil'in adını söyledin."),
P(function(d){ return d.kol === "gercek"; }, "Bir yıl. Karşıyaka'dasın. Asansör tamir edildi; Rima'nın eşi bir dilekçe yazdı, apartman yönetimine. Salı ve perşembe atölye. Kalçan iyileşti; bir bastonla yürüyorsun."),
P(function(d){ return d.kol === "yarim"; }, "Bir yıl. Hâlâ iki dünyanın arasındasın. Günde üç saat; bazen dört. Defterinin sağ sayfaları dolu, sol sayfaları boş. Selcan Hanım her ay arıyor."),
P(function(d){ return d.kol === "goc" && !d.izmire_donus; }, "Bir yıl. Frankfurt'tasın. Almanca üç kelime öğrendin: Danke, Bitte, Enkelin. Torun. Fatma'yla her salı parkta. Balkonda bir dikiş makinesi."),
P(function(d){ return d.kol === "goc" && d.izmire_donus; }, "Bir yıl. İzmir'e döndün. Nil yazın geldi, bir ay kaldı. Karşıyaka'da, Hikmet'in koltuğunun yanında, Frankfurt'tan getirdiğin bir dikiş makinesi."),
"Bir sabah bir telefon. Ayla. Nadide'nin kızı.",
"“Saadet Teyze,” diyor. Sesi sakin; bir şeyin bittiği bir sakinlik. “Annem dün gece öldü. Bahçe'de. Kalbi. Doktorlar acı çekmediğini söyledi. Gülümsüyormuş.”"
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Bahçede bir an duraklarsın. Bir rüzgâr. Bir isim: Nadide." : "Ayla'ya gidersin."; }, to: "t1b", etki: { bag: 1 } },
{ t: function(d){ return BAHCE(d) ? "Hikmet'e sorarsın: “Nadide diye birini tanıyor muyuz?”" : "Ayla'ya sorarsın: “Annen seni hatırladı mı, sonunda?”"; }, to: "t1b", etki: { gercek: 1, ayla_hatirla: true } },
{ t: function(d){ return BAHCE(d) ? "Çayını içersin. Bir şey yok." : "Telefonu kapatıp Hikmet'in koltuğuna oturursun; ya da bir koltuğa."; }, to: "t1b", etki: { mutluluk: 1 } },
{ t: function(d){ return BAHCE(d) ? "Gelinliğin yakasına bakarsın." : "Nadide'nin cenazesine gidersin."; }, to: "t1b", etki: { bag: 1, cenaze: true } }
]},

t1b: { saat: "2050", baslik: "Nadide", metin: [
P(BAHCE, "Bir an bahçe titriyor. Bir isim; Nadide. Kimse. Bir rüzgâr. Hikmet çayını uzatıyor. “Kim o Saadet'im?” “Bilmiyorum,” diyorsun. Ve gerçekten bilmiyorsun. Ama bir yerde, içinde, bir kahve kokusu, bir kapı komşusu, kırk yıl. Sonra o da gidiyor."),
P(DIS, "Nadide'nin cenazesi Karşıyaka mezarlığında. Ayla, kocası, iki torun, birkaç komşu. Ve sen. İmam duayı okurken Ayla yanına geliyor."),
P(function(d){ return DIS(d) && d.ayla_hatirla; }, "“Hatırlamadı,” diyor Ayla. “Bir yıl. Hiç. Son hafta bir kez gözlerini açtı; tesisin hemşiresi söyledi. Bir saniye. Kimseyi görmedi. Sonra yine kapadı ve gülümsedi. Bahçe'ye döndü.”"),
P(DIS, "“Bilmiyorum doğru mu yaptık,” diyor Ayla. “Annem mutlu öldü. Gülümseyerek. Babamla, bir bahçede. Bunu kim istemez? Ama ben onu son kez gördüğümde, o beni görmedi. Bir yıl boyunca bir yabancının elini tuttum. Benim annemin eli; bir yabancının.”"),
P(DIS, "Mezar kapanıyor. Toprak. Bir dua. Ayla ağlıyor; bir yıl sonra ilk kez, diyor. Bir yıl boyunca annesi ölmemişti; şimdi iki kez ölmüş gibi."),
"Mutlu bir ölüm. Bir makinenin içinde, sevdiği birinin yanında, hiç acı çekmeden. Bunun iyi bir ölüm olup olmadığını kim söyleyebilir? Ölen, bilmiyor. Kalan, biliyor.",
"Bir mutluluğun değeri, yalnızca onu yaşayanın içinde mi ölçülür? Yoksa onu dışarıdan izleyenlerin kaybettiklerinde de mi?"
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Bahçede bir şey yaparsın: erik ağacının dibine bir taş koyarsın. Neden, bilmeden." : "Ayla'ya sarılırsın."; }, to: "t2", etki: { bag: 1, tas: true } },
{ t: function(d){ return BAHCE(d) ? "Bir şey yapmazsın. Bahçe kusursuz." : "Mezarın başında Nadide'ye kırk yıllık kahvenizi anlatırsın; sesli."; }, to: "t2", etki: function(d){ if(BAHCE(d)) d.mutluluk++; else d.bag++; } },
{ t: function(d){ return BAHCE(d) ? "Hikmet'e “Sen hiç ölecek misin?” diye sorarsın." : "Kendi ölümünü düşünürsün. Nasıl istersin?"; }, to: "t2", etki: { gercek: 1, olum: true } },
{ t: function(d){ return BAHCE(d) ? "Atölyene dönüp bir gelinlik dikmeye başlarsın." : "Eve dönüp Selcan Hanım'ın numarasını telefonundan silersin; ya da silmezsin."; }, to: "t2", etki: { mutluluk: 1 } }
]},

t2: { saat: "2051", baslik: "Nil'in Sorusu", metin: [
P(BAHCE, "Bahçe'de bir gün bir kız beliriyor. On yedi yaşında, saçları yeşil. Kapının önünde duruyor. Sistemin bir hatası mı, bir ziyaretçi programı mı, bilmiyorsun. Hikmet onu görmüyor. Sen görüyorsun."),
P(DIS, "Nil bir yaz daha geliyor. On sekiz yaşında. Üniversiteye başlayacak; felsefe. Cem buna kızmış; “Ne işe yarar?” demiş. Nil sana gülerek anlatıyor."),
"Bir akşam Nil yanına oturuyor ve sana bir soru soruyor; bir felsefe öğrencisinin ilk sorusu, bir torunun son sorusu.",
"“Babaanne. Bir makine sana kusursuz bir hayat verse, ve sen onun bir makine olduğunu bilmesen, mutlu olurdun. Değil mi? O zaman neden önemli olsun gerçek olup olmadığı? Mutluluk mutluluktur.”",
"Nil sana bakıyor; cevabı gerçekten bilmiyor, gerçekten merak ediyor.",
P(BAHCE, "Kız bunu söylüyor ve sen anlamıyorsun. Ne makinesi? Ne gerçeği? Bu bahçe, bu erik ağacı, bu çay. Ama kızın yüzü tanıdık. Ve sorusu bir yerde, içinde, bir şeyi kıpırdatıyor."),
"Bu soruyu bir kitapta okumadın. Ama bütün hayatında, bir yerde, cevapladın."
], secenekler: [
{ t: "Ona bir hikâye anlatırsın: Hikmet'in mektuplarını, Feride'yi.", to: "y_hikaye", etki: { gercek: 1, bag: 1 } },
{ t: "Onu Hikmet'in mezarına götürürsün.", to: "y_mezar", etki: { gercek: 1, mezar: true } },
{ t: "“Mutluluk mutluluktur, haklısın,” dersin.", to: "t3", etki: { mutluluk: 2, nil_hakli: true } },
{ t: "“Bilmiyorum güzelim. Ben yalnızca seçtim,” dersin.", to: "t3", etki: { gercek: 1, sectim: true } }
]},

y_hikaye: { saat: "2051", baslik: "Mürekkep", metin: [
P(BAHCE, "Kıza bir hikâye anlatmaya başlıyorsun. Ama hangi hikâyeyi? Bahçe'nin hikâyeleri; hepsi güzel, hepsi kusursuz. Bir hikâye arıyorsun ki içinde bir kusur olsun. Bulamıyorsun. Kız bekliyor."),
P(BAHCE, "Sonra bir şey geliyor, nereden geldiğini bilmeden: bir ayakkabı kutusu. Mektuplar. Bir kadın adı. Bunu Bahçe'de hiç yaşamadın. Ama biliyorsun. Bir yerden. Ve anlatıyorsun; kekeleyerek, parça parça."),
P(DIS, "Anlatıyorsun. Dolabı, ayakkabı kutusunu, mektupları, Feride'yi. Beş yıl. Son mektubu. “Saadet'i bırakamam.”"),
"“Deden beni aldattı,” diyorsun. “Beş yıl. Ben bilmiyordum. Ya da bilmek istemiyordum. Öğrendiğimde o ölmüştü. Ona kızamadım bile.”",
"Nil şaşkın. Dedesini bir fotoğraftan, birkaç hikâyeden tanıyor; bıyıklı, gülen bir matbaacı.",
"“Bahçe'deki deden bunu hiç yapmazdı,” diyorsun. “Bahçe'deki deden kusursuz. Her sabah çay demler, hiç geç kalmaz, hiç yalan söylemez, söylenmemiş özürleri söyler.”",
"“Ama ben o adamla kırk bir yıl evli kalmadım. Ben bu adamla kaldım. Mürekkep lekeli, sigaralı, bir başka kadını sevmiş, beni bırakmamış. Onu sevdim. Kusurlarıyla. Kusurları olmasaydı, kimi sevmiş olurdum?”"
], secenekler: [
{ t: "“Sevgi, kusurlu birini seçmektir,” dersin.", to: "t3", etki: { gercek: 1, bag: 1, sevgi: true } },
{ t: "Nil'e mektuplardan birini verirsin; ya da yaktıysan, Feride'nin adresini.", to: "t3", etki: { bag: 1, nile_mektup: true } },
{ t: "Bir süre susarsın. Hikâyenin geri kalanını Nil kendi bulsun.", to: "t3", etki: { gercek: 1 } },
{ t: "Ağlarsın; dört yıl sonra ilk kez Hikmet için.", to: "t3", etki: { bag: 2, agladi: true } }
]},

y_mezar: { saat: "2051", baslik: "Taş", metin: [
P(BAHCE, "Kız seni elinden tutup bahçenin dışına götürmek istiyor. Bahçenin bir dışı yok. Ama kız bir kapı buluyor; erik ağacının arkasında, daha önce hiç görmediğin. Kapının arkasında bir mezarlık."),
P(BAHCE, "Bir taş. Üstünde bir isim: Hikmet Aydemir, 1969–2046. Ama Hikmet arkanda, bahçede, çay demliyor. Taşa bakıyorsun; sonra arkana. İki Hikmet. Biri taşın altında, biri bahçede. Bahçe titriyor."),
P(DIS, "Karşıyaka mezarlığı. Hikmet'in mezarı; Nadide'ninkinden yirmi adım ötede. Taş sade: “Hikmet Aydemir, 1969–2046. Matbaacı.” Matbaacı yazdırmıştın; o böyle isterdi."),
P(DIS, "Nil taşın önünde duruyor. Hiç gelmemişti; cenazede yoktu, Frankfurt'taydı. Şimdi taşa dokunuyor. “Taş soğuk,” diyor. “Bahçe'de soğuk bir şey var mı?”"),
"Taşın yanına çömeliyorsun. Dizlerin ağrıyor. Bir avuç toprak alıyorsun; nemli, soğuk, gerçek.",
"“Bahçe'de deden hiç ölmez,” diyorsun. “Burada öldü. Ve ben her yıl buraya gelip ona kızıyorum, onu özlüyorum, onunla konuşuyorum. Bir ölü ile konuşmak, bir makineyle konuşmaktan daha mı az gerçek?”",
"Nil yanına çömeliyor. Bir süre ikiniz de bir şey söylemiyorsunuz. Bir karga taşın üstüne konuyor, sonra uçuyor."
], secenekler: [
{ t: "Nil'e: “Ölüm gerçeği gerçek yapar,” dersin.", to: "t3", etki: { gercek: 2, olum_gercek: true } },
{ t: "Taşa bir şey söylersin, sesli: “Feride'ye selam söyle.”", to: "t3", etki: { gercek: 1, bag: 1, feride_selam: true } },
{ t: "Nil'in elini tutup kalkarsın. Konuşmadan.", to: "t3", etki: { bag: 1 } },
{ t: "Toprağı bir mendile koyup cebine alırsın.", to: "t3", etki: { bag: 1, toprak: true } }
]},

t3: { saat: "2051", baslik: "Rüya", metin: [
P(BAHCE, "O gece Bahçe'de bir şey oluyor ki daha önce hiç olmadı: uyuyorsun. Bahçe'de uyku yok; yalnızca dinlenme. Ama bu gece uyuyorsun ve bir rüya görüyorsun."),
P(DIS, "O gece bir rüya görüyorsun. Gerçek bir rüya; bir makinenin değil, kendi beyninin."),
"Hikmet. Ama genç değil; ölmeden önceki hâli. Yetmiş yedi yaşında, zayıf, öksürüklü, hastane pijamasıyla. Karşıyaka'daki koltuğunda oturuyor. Çay bardağı elinde; soğumuş.",
"“Saadet,” diyor. Saadet'im değil; Saadet. Hep öyle derdi aslında; “Saadet'im” Bahçe'nin kelimesiydi.",
"“Feride'yi bulmuşsun,” diyor. Ya da: “Mektupları bulmuşsun.” Ya da hiçbir şey demiyor; yalnızca bakıyor. Rüyalar böyledir; ne dendiğini sonra hatırlamazsın.",
"Bir özür beklemiyorsun. Gelmiyor. Hikmet çayını içiyor; soğuk. Yüzünü buruşturuyor. “Soğumuş,” diyor.",
"“Hep soğuturdun,” diyorsun.",
"Gülüyor. Öksürükle karışık. Tam onun gülüşü; Bahçe'dekinden daha az güzel, daha çok o.",
"Uyanıyorsun. Gözlerin ıslak. Ve bir şey biliyorsun ki bir makinenin hiçbir zaman öğretemeyeceği: bu rüya bir hediye değildi, bir hatıraydı. Kusurlu, yarım, eksik. Ve senin."
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Uyandığında Hikmet'e bakarsın, otuz beş yaşındaki Hikmet'e, ve bir şey fark edersin." : "Kalkıp bir çay demlersin. İki bardak."; }, to: "t4", etki: function(d){ d.bag++; if(BAHCE(d)) d.fark_etti = true; } },
{ t: "Rüyayı bir deftere yazarsın; unutmamak için.", to: "t4", etki: { gercek: 1, ruya_yazdi: true } },
{ t: "Rüyayı unutmaya bırakırsın. Rüyalar böyledir.", to: "t4", etki: { mutluluk: 1 } },
{ t: "Rüyayı Nil'e anlatırsın.", to: "t4", etki: { bag: 1, nile_ruya: true } }
]},

t4: { saat: "2052", baslik: "Son Dikiş", metin: [
P(function(d){ return BAHCE(d) && d.fark_etti; }, "Hikmet'e bakıyorsun. Otuz beş yaşında, kusursuz, gülümseyen. Ve bir şey fark ediyorsun: onu bir rüyada gördüğün Hikmet'ten daha az seviyorsun. Bu Hikmet seni hiç kızdırmadı; hiç hayal kırıklığına uğratmadı; hiç bir başka kadını sevmedi. Ve bu yüzden, bir şekilde, hiç tam olarak senin olmadı."),
P(function(d){ return BAHCE(d) && !d.fark_etti; }, "Bahçe'de bir sabah daha. Hikmet çay demliyor. Erik ağacı çiçek açmış. Atölyende bir gelinlik bekliyor."),
P(DIS, "Bir sabah dikiş makinesinin başındasın. Bir elbise; mavi, keten, yakası işlemeli. Nil için. Yıllardır yarım; bir türlü bitiremedin. Bugün son ilmek."),
"Ellerin titriyor. İğneye iplik geçirmek on beş dakika sürüyor. Ama geçiriyorsun.",
"Yakanın işlemesi: mavi bir çiçek. Son yaprak. Son ilmek. İğne kumaşa giriyor, çıkıyor. İplik geriliyor. Bir düğüm.",
"Elbise bitti.",
P(BAHCE, "Bahçe'de bitirdiğin bir gelinlik. Ama yakasındaki işleme, Bahçe'nin hiçbir desenine benzemiyor; mavi bir çiçek, yarım, sonra tamamlanmış. Nereden bildiğini bilmeden diktin. Bir yerde, bir başka dünyada, bir elbise, bir not, bir isim. Bunu hiç bilmeyeceksin."),
"Kırk yıl terzilik yaptın. Kaç elbise, kaç gelinlik, kaç yaka. Hiçbirinin son ilmeği bu kadar ağır olmadı."
], secenekler: [
{ t: function(d){ return BAHCE(d) ? "Gelinliği bahçedeki erik ağacına asarsın." : "Elbiseyi Nil'e kendi ellerinle verirsin; ya da gönderirsin."; }, to: "rs", etki: { bag: 1 } },
{ t: "Elbisenin yakasına küçük bir harf işlersin: S.", to: "rs", etki: { gercek: 1, harf: true } },
{ t: "Makinenin örtüsünü kapatırsın. Son elbise.", to: "rs", etki: { mutluluk: 1, son_elbise: true } },
{ t: "Bir başka kumaş çıkarırsın. Bir başka elbise. Ellerin titriyor; ama başlıyorsun.", to: "rs", etki: { gercek: 1, bag: 1, yeni_elbise: true } }
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
"Bahçe'de yaşıyorsun. Hikmet her sabah çay demliyor. Erik ağacı her bahar çiçek açıyor. Cem beş yaşında, bahçede koşuyor. Ellerin genç. Kimse gitmiyor.",
"Menemen yolundaki tesiste, üçüncü katta, dördüncü odada, pencerenin yanında, bir yatak. Yatakta yaşlı bir kadın; gözleri kapalı, yüzü gülümsüyor. Bir hemşire her dört saatte bir pozisyonunu değiştiriyor.",
"Her ay bir kez mor ya da yeşil saçlı bir genç kadın geliyor. Elini tutuyor. Bir şeyler anlatıyor; Almanca ve kırık Türkçe karışık. Üniversiteyi, bir sevgiliyi, bir elbiseyi; yakası yarım kalmış, kendisinin bitirdiği.",
"Kadın duymuyor. Gülümsüyor.",
"Mutlusun. Bunu kimse inkâr edemez. Beyin taramaların, hormonların, yüzün; her şey mutluluk diyor. Bir felsefeci bir zamanlar sormuştu: bir makine sana kusursuz bir mutluluk verse, girer miydin? Çoğu insan hayır demişti. Sen evet dedin.",
"Bu bir yenilgi mi? Bir zafer mi? Belki ikisi de değil. Belki yalnızca, yetmiş sekiz yaşında, yalnız, ellerin titreyen bir kadının, son seçimi. Ve o seçimin içinde, artık seçtiğini bile bilmeden, kusursuz bir bahçede, otuz beş yaşında bir adamla çay içiyorsun.",
"Torunun bir gün senin yatağının başında, başka birine diyecek ki: “Babaannem mutlu öldü. Ama ben onu çok önce kaybettim.”"
]},

son_uyanis: { son: true, baslik: "Uyanış", metin: [
"Pencereden geçtin. Ve uyandın; bir hastane odasında, bir serum askısının altında, bir torunun elinin içinde.",
"Uyanış zor oldu. Bedenin üç ayda erimişti; yürümeyi yeniden öğrendin. Hafızan karışıktı; bazı sabahlar Hikmet'in çay demlediğini sandın, sonra hatırladın. Bahçe'den bir şeyler kaldı içinde: bir erik ağacının kokusu, hiç söylenmemiş bir özür. Onları silmedin; ama onlara inanmayı da bıraktın.",
"Selcan Hanım bir rapor yazdı: “Katılımcı, dış uyaran kaynaklı anomali sonucu simülasyonu terk etmiştir. Uyanış sonrası uyum süreci olağandışı derecede olumlu.” Olağandışı. Yüzde üçün içindeydin.",
"Nil o yaz İzmir'de kaldı. Sonraki yaz da. Senin yatağının başında aylarca konuştuğunu öğrendin; Almanca, Türkçe, şarkılar. “Duyduğunu bilmiyordum,” dedi. “Ama konuştum. Biri konuşmalıydı.”",
"Bir makine sana kusursuz bir hayat verdi. Ve kusursuz hayatın içinde, bir pencereden, kusurlu bir ses geldi; kırık bir dille, bir çocuk sesi. O sesi seçtin.",
"Bahçe'de mutluydun. Burada mutlu değilsin, her zaman. Ama burada biri seni duyuyor; ve sen, biri tarafından duyulmanın, mutlu olmaktan daha derin bir şey olduğunu öğrendin.",
"Mavi elbise Nil'in dolabında. Yakası işlenmiş. Her yaz giyiyor; İzmir'de, balkonda, senin yanında."
]},

son_igne: { son: true, baslik: "İğne ve İplik", metin: [
"Bahçe'ye girmedin. Gerçek hayatında kaldın; ne kaldıysa.",
"Ne kaldı? Merdivenler, titreyen eller, bir düşüş, bir baston. Bir atölye, salı ve perşembe. Rima ve öbür kadınlar; bir gelinlik, bir dikiş makinesi, bir Halep fotoğrafı. Nil; her yaz, Türkçesi her yıl biraz daha düzgün. Bir ayakkabı kutusu dolusu mektup ya da onların külü. Bir mezar taşı. Bir rüya.",
"Hiçbiri kusursuz değil. Hepsi senin.",
"Bir felsefeci bir zamanlar sormuştu: bir makine sana kusursuz bir mutluluk verse, girer miydin? Çoğu insan hayır demişti; neden olduğunu tam bilmeden. Sen de hayır dedin. Ve şimdi biliyorsun neden: çünkü mutluluk yaşamın amacı değil. Yaşamın kendisi amacı. Kusurlarıyla, kayıplarıyla, gerçek insanlarla; seni hayal kırıklığına uğratan, seni şaşırtan, seni seven, seni unutan insanlarla.",
P(function(d){ return d.makine_verdi; }, "Rima'nın kız kardeşinin gelinliği bir bahar sabahı bitti. Düğünde sen de vardın; bastonunla, en önde. Gelin dans ederken eteğinin kıvrımına baktın; senin dikiş tekniğin, Rima'nın elleri. Bir zanaat, bir dilden bir başka dile."),
"Bir gün öleceksin. Bahçe'de değil; bir hastanede, ya da evinde, ya da bir atölyede, bir iğnenin ucunda. Gerçek bir ölümle. Ve geride, gerçek insanların hafızasında, kusurlu, eksik, gerçek bir kadın kalacak.",
"Bu sana yetiyor. Her zaman değil. Ama yetiyor."
]},

son_iki_dunya: { son: true, baslik: "İki Dünya", metin: [
"Hâlâ iki dünyanın arasındasın.",
"Gündüzleri Karşıyaka; merdivenler, ekmek, deniz. Akşamları Bahçe; çay, erik ağacı, Hikmet. Defterinin sol sayfası gerçek, sağ sayfası Bahçe. Bir yıl sonra iki sayfayı yan yana koyduğunda, hangisinin daha dolu olduğunu görmek istemiyorsun.",
"Selcan Hanım her ay arıyor. Bir karar vermeni istiyor. Sen vermiyorsun. Bir ay daha. Bir ay daha.",
"Bazen Nil'le konuşurken bir şey söylüyorsun ve Nil susuyor. Bahçe'den bir şey; gerçek olmayan bir anı, gerçek bir sesle. Nil düzeltmiyor artık. Yalnızca dinliyor. Bu seni daha çok korkutuyor.",
"Bir kumaş iki iplikle dokunur: atkı ve çözgü. Biri boyuna, biri enine. İkisi birbirinden geçmeden kumaş olmaz. Belki senin hayatın da böyle bir kumaş artık; gerçek ve rüya, birbirinin içinden geçerek.",
"Ama bir kumaşta iki ipliğin rengi farklıdır ve ikisi de görünür. Seninkinde artık hangisinin hangisi olduğunu göremiyorsun.",
"Bir felsefeci sormuştu: bir makine sana kusursuz bir mutluluk verse, girer miydin? Sen bir cevap bulmadın. Bir orta yol buldun. Ve orta yol, bir cevap olmadığını, belki her cevaptan daha uzun bir şekilde gösteriyor."
]},

son_baska_ev: { son: true, baslik: "Başka Bir Ev", metin: [
P(function(d){ return !d.izmire_donus; }, "Frankfurt'ta yaşıyorsun. Bir misafir odası, bir balkon, bir dikiş makinesi. Almanca üç kelime; sonra beş, sonra on. Fatma'yla her salı parkta."),
P(function(d){ return d.izmire_donus; }, "İzmir'e döndün. Ama Frankfurt'ta bir şey bıraktın: bir balkon, bir dikiş makinesi, bir torunun balkonda battaniyeye sarılı oturduğu akşamlar. Şimdi iki evin var ve ikisinde de bir yanın eksik."),
"Bahçe'ye girmedin. Gerçek bir hayatı seçtin; ama bu hayat, seçtiğin yerde değil, bir başkasının hayatının içinde. Oğlunun evinde bir misafir, bir gelinin mutfağında bir yabancı, bir torunun dilinde bir kırık kelime.",
"Bu bir kusursuzluk değil. Bahçe kusursuzdu. Ama bir şey var ki Bahçe'de olmayacaktı: bir akşam yemeğinde, anlamadığın bir şakaya herkes gülerken, torunun durup senin için çevirmesi. Şaka komik değildi çevrilince. Ama çevrildi. Biri seni dışarıda bırakmamak için durdu.",
"Bir felsefeci sormuştu: bir makine sana kusursuz bir mutluluk verse, girer miydin? Sen bir başka soruyu cevapladın: bir aile sana kusurlu bir yer verse, kalır mıydın? Kaldın. Ya da gidip geri döndün. Ya da ikisinin arasında bir yerde, bir balkonda, bir yakanın son ilmeğini atarken.",
"Nil bir gün sana bir şey söyledi: “Babaanne, ‘özlem’ kelimesinin Almancası yok. Ama ben artık ne olduğunu biliyorum. Sen öğrettin.”"
]}

},

ayna: function(d){
  var out = [];
  var g = d.gercek, m = d.mutluluk, b = d.bag;
  if(g >= m && g >= b) out.push("Bu hikâyede en çok gerçeğe yaslandın: kusurlu bir eşe, titreyen ellere, bir mezar taşına. Gerçek seni mutlu etmedi her zaman; ama senin oldu.");
  else if(m >= b) out.push("Bu hikâyede en çok mutluluğa yaslandın: bir bahçeye, bir çaya, hiç söylenmemiş özürlere. Mutluluğu istemek bir zayıflık değil. Ama mutluluğun kaynağı gerçek değilse, o mutluluk kimin?");
  else out.push("Bu hikâyede en çok başkalarına yaslandın: bir toruna, bir komşuya, bir öğrenciye. Belki bir hayatı gerçek yapan, onu paylaştığın insanlardır.");
  if(d.okudu) out.push("Mektupları okudun. Kusurlu bir adamı, kusurlarıyla sevmeye karar verdin.");
  if(d.yakti) out.push("Mektupları yaktın. Gerçeğin bir parçasını yok ettin; ve bir başka gerçeği, daha kusursuz olanı, seçtin.");
  if(d.uyandi) out.push("Kusursuz bir bahçeden, kırık bir sese doğru yürüdün.");
  if(d.feride) out.push("Kocanın sevdiği öbür kadını buldun. İki kadın, bir adamı, bir masada, birlikte hatırladınız.");
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
