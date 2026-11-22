(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };
var YASADI = function(d){ return d.erken_adrenalin; };
var OLDU = function(d){ return !d.erken_adrenalin; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "otuz-alti-saat",
baslik: "36 Saat",
dunya: "Gerçek dünya",
kavramlar: ["Tıbbi hata ve dürüstlük", "Ahlaki şans", "Birey ve sistem", "Kendini affetmek"],
ozet: "Acil serviste otuz birinci saatindesin. Yorgunluktan ekrandaki bir sekmeyi açmadın. Yetmiş dört yaşında bir kadın, senin yazdığın bir ilaçla yoğun bakımda. Şimdi kimse bilmiyor. Henüz.",
baslangic: "a1",
durum: { durustluk: 0, sistem: 0, sefkat: 0 },

sahneler: {

a1: { saat: "Saat 24 · Sabah 08.00", baslik: "İkinci Gün", metin: [
"Dün sabah sekizde başladın. Şimdi yine sabah sekiz. Yirmi dört saattir ayaktasın; on iki saat daha var. Kâğıt üstünde yirmi dört saatlik nöbet, artı “devir teslim süresi”, artı bir arkadaşın raporlu olduğu için onun yerine kalman. Otuz altı saat.",
"Adın Selin, yirmi dokuz yaşındasın, acil tıp asistanısın; üçüncü yıl. İstanbul'da bir eğitim araştırma hastanesinin acil servisi. Bekleme salonunda yüz yirmi kişi. Koridorda sedyeler, sedyelerde hastalar, hastaların yanında yakınlar. Üç asistan, bir uzman, altı hemşire.",
"Gözlerinin arkasında bir basınç. Ellerin hafifçe titriyor; kahve mi, yorgunluk mu, bilmiyorsun. Gece bir ara, dört dakika, bir sandalyede uyumuşsun. Uyandığında nerede olduğunu otuz saniye hatırlayamadın.",
"Telefonunda babandan bir mesaj, dün geceden: “Kızım yemek yedin mi?” Cevap vermedin. Yemek yemedin.",
"Hemşire Hülya, yirmi yıllık acil hemşiresi, yanından geçerken bir çikolata bırakıyor. “Ye,” diyor. “Yoksa düşersin.”",
"Monitörler ötüyor. Bir ambulans geliyor. Bir çocuk ağlıyor. Biri adını bağırıyor: “Doktor! Doktor!”"
], secenekler: [
{ t: "Çikolatayı yiyip işe dalarsın.", to: "a2", etki: { sefkat: 1 } },
{ t: "Babana kısa bir mesaj atarsın: “Yedim baba.” Bir yalan.", to: "a2", etki: { sefkat: 1, babaya_yalan: true } },
{ t: "Uzman Levent Hoca'ya gidip nöbet süresinin fazla olduğunu, dinlenmeye ihtiyacın olduğunu söylersin.", to: "a2", etki: { sistem: 1, dinlenme_istedi: true } },
{ t: "Yüzünü soğuk suyla yıkarsın ve aynaya bakarsın.", to: "a2", etki: { durustluk: 1, ayna: true } }
]},

a2: { saat: "Saat 28 · 12.10", baslik: "Yumruk", metin: [
P(S("a1C"), "Levent Hoca seni dinledi. “Hepimiz yorgunuz Selin,” dedi. “Ben de otuz saattir buradayım. Kimse yok yerine geçecek. Dayan.” Haklıydı. Ve bu, onu haklı yapmıyordu."),
P(S("a1D"), "Aynada bir kadın. Gözlerinin altı mor, saçı dağınık, önlüğünde kurumuş bir kan lekesi; kimin, hatırlamıyorsun. Bir an onu tanımadın. Sonra tanıdın; ve tanımamış olmayı tercih ederdin."),
"Öğlen on iki on. Sarı alanda bir bağrışma. Koşuyorsun.",
"Bir adam, kırklarında, asistan arkadaşın Kerem'in yakasına yapışmış. “Üç saattir bekliyoruz! Babam ölüyor! Siz ne yapıyorsunuz?” Babası bir sedyede; göğüs ağrısı, EKG normal, tetkikler bekleniyor. Kerem bir şey söylüyor; adam duymuyor.",
"Sonra bir yumruk. Kerem'in yüzüne. Kerem geriye savruluyor, bir sedyeye çarpıyor, yere düşüyor. Burnundan kan.",
"Bir an herkes donuyor. Sonra çığlıklar. Güvenlik koşarak geliyor; uzakta, çok uzakta.",
"Adam hâlâ bağırıyor. Kerem yerde, elini yüzüne kapatmış. Ve sarı alanda, kırk hasta, senin bir sonraki adımını bekliyor."
], secenekler: [
{ t: "Kerem'in yanına koşarsın.", to: "x_kerem", etki: { sefkat: 1 } },
{ t: "Güvenliğe bırakırsın. Triyaja dönersin; kırk hasta bekliyor.", to: "a3", etki: { sistem: 1, triyaj: true } },
{ t: "Adamın karşısına geçersin.", to: "x_kavga", etki: { durustluk: 1 } },
{ t: "Personel tuvaletine gidip kapıyı kilitlersin. İki dakika. Sadece iki dakika.", to: "a3", etki: { sefkat: 1, tuvalet: true } }
]},

x_kerem: { saat: "Saat 28 · 12.20", baslik: "Kerem", metin: [
"Kerem'i personel odasına götürüyorsun. Burnu kanıyor; kırık olabilir. Buz, gazlı bez, bir sandalye. Kerem oturuyor ve titriyor.",
"“Bırakacağım,” diyor. Sesi kısık, burnu tıkalı. “Selin, bırakacağım. Yemin ederim. Babam istedi diye tıp okudum. Altı yıl, artı üç yıl asistanlık. Şimdi bir adam beni yumrukluyor çünkü babası üç saat bekledi. Üç saat! Ben otuz saattir bekliyorum. Kim benim için bir şey yapıyor?”",
"Ağlıyor. Saklamaya çalışmıyor.",
"Polis geliyor. İfade. Kerem'in ifadesi, senin ifaden, güvenliğin ifadesi. Kırk dakika. Bir memur yavaşça yazıyor; her cümleyi iki kez soruyor.",
"Kırk dakika boyunca sarı alanda bir asistan eksik. Senin yerine kimse yok.",
"İfade bitince Kerem sana bakıyor. “Sağ ol,” diyor. “Gerçekten. Sen olmasan...” Cümleyi bitirmiyor.",
"Saat bir. Sarı alana dönüyorsun. Bekleyen hasta sayısı kırk değil, elli iki."
], secenekler: [
{ t: "Kerem'e evine gitmesini söylersin. Onun yerine de sen bakacaksın.", to: "a3", etki: { sefkat: 1, gecikme: true, keremi_gonderdi: true } },
{ t: "Kerem'e “Bırakma,” dersin. “Bunu yapan biz değiliz.”", to: "a3", etki: { sistem: 1, gecikme: true } },
{ t: "Kerem'le birlikte biraz daha oturursun. Elli iki hasta bekleyebilir mi?", to: "a3", etki: { sefkat: 1, gecikme: true, uzun_kaldi: true } },
{ t: "Hiçbir şey söylemeden işe dönersin. Yapacak bir şey yok.", to: "a3", etki: { gecikme: true } }
]},

x_kavga: { saat: "Saat 28 · 12.12", baslik: "Ön", metin: [
"Adamın karşısına geçiyorsun. Kerem ile onun arasına. Bir metre altmış beş santimsin; adam senden bir baş uzun.",
"“Geri çekilin,” diyorsun. Sesin titremiyor; bunu sonra hatırlayıp şaşıracaksın.",
"Adam sana bakıyor. Bir an. Sonra bağırıyor: “Sen de mi? Doktor değil kasapsınız! Babamı burada öldüreceksiniz!”",
"Bir el göğsüne değiyor, itiyor. Geriye bir adım atıyorsun; bir sedyenin kenarına çarpıyorsun. Acıtmıyor. Ya da acıtıyor ama hissetmiyorsun; adrenalin.",
"Güvenlik nihayet yetişiyor. İki görevli adamı kollarından tutuyor. Adam hâlâ bağırıyor; babasının adını, hastanenin adını, bir milletvekilinin adını.",
"Kerem'e dönüyorsun. Yerde, kanlar içinde, sana bakıyor. “Delisin,” diyor. Sonra: “Teşekkürler.”",
"Ellerine bakıyorsun. Titriyor. Gerçekten titriyor; durmuyor. Adrenalin çekilirken geriye bir şey bırakıyor: bir tükeniş, bir boşluk, bir yorgunluk ki yirmi sekiz saatin üstüne eklenmiş."
], secenekler: [
{ t: "Ellerinin titremesi geçene kadar beş dakika oturursun.", to: "a3", etki: { sefkat: 1, titreme: true } },
{ t: "Titreyen ellerle işe dönersin. Elli hasta.", to: "a3", etki: { sistem: 1, titreme: true, devam: true } },
{ t: "Adamın babasına gidersin. Üç saattir bekleyen göğüs ağrılı hasta.", to: "a3", etki: { durustluk: 1, titreme: true, babaya_bakti: true } },
{ t: "Levent Hoca'yı bulup ne olduğunu anlatırsın.", to: "a3", etki: { sistem: 1, titreme: true } }
]},

a3: { saat: "Saat 31 · 15.00", baslik: "Nurten Hanım", metin: [
P(S("a2B"), "Triyaja döndün. Arkanda güvenlik adamı götürüyordu, Kerem yerdeydi. Dönüp bakmadın. Kırk hasta. Bir sistemin içinde, bir başkasının acısının yanından geçmek; bunu da öğrendin bu meslekte."),
P(S("a2D"), "İki dakika. Tuvaletin kapısına yaslanıp oturdun. Ağlamadın; ağlayacak gücün yoktu. Gözlerini kapadın. Biri kapıyı çaldı: “Selin! Kırmızı alan!” İki dakika bitti."),
P(function(d){ return d.keremi_gonderdi; }, "Kerem eve gitti. Şimdi onun hastaları da senin. Bir sistemde bir boşluk açıldığında, o boşluğu en yakındaki kişi doldurur."),
"Saat üç. Sarı alan. Yedinci sedye. Nurten Hanım, yetmiş dört yaşında. Ateş, öksürük, nefes darlığı. Akciğer grafisinde sağ alt lobda bir gölge. Pnömoni.",
"Gelini yanında. “Hocam, annem biraz karışık bugün. Ateşten. Normalde çok sağlamdır.”",
"Nurten Hanım sana bakıyor. Bir şey söylüyor; mırıldanarak. “Kızım... o ilaç... bir keresinde kızarmıştım...” Gelin araya giriyor: “Anneciğim sakin ol, doktor hanım bilir.”",
"Bilgisayarda hasta dosyası açık. Hasta bilgileri, tahliller, grafi. Ekranın üstünde sekmeler: Genel. Tahliller. Görüntüleme. Notlar. Alerjiler. Alerjiler sekmesi kırmızı değil; sistem güncellemesinden beri hiçbir sekme kırmızı değil.",
"Hülya yanına geliyor. “Hocam, antibiyotik ne yazıyoruz? Alerjisi var mı?”",
"Gözlerin ekranda. Alerjiler sekmesine tıklamıyorsun. Bir önceki hastanın dosyası aklında; o da yaşlıydı, o da pnömoniydi, onun alerjisi yoktu.",
"“Yok,” diyorsun. “Ampisilin-sulbaktam. Damardan.”",
"Hülya order'ı alıyor ve gidiyor. Sen sekizinci sedyeye geçiyorsun. Bir göğüs ağrısı. Bir başka dosya."
], secenekler: [
{ t: "Sekizinci sedyenin hastasına odaklanırsın.", to: "a4", etki: { sistem: 1 } },
{ t: "Bir an durursun. Bir şey unuttun mu? Hatırlayamazsın. Devam edersin.", to: "a4", etki: { durustluk: 1, his: true } },
{ t: "Nurten Hanım'ın gelinine bir şey sorarsın: annesi neyi kastetti?", to: "a4", etki: { durustluk: 1, gelin_soru: true } },
{ t: "Çikolatanın son parçasını yersin. Kan şekerin düşüyor.", to: "a4", etki: { sefkat: 1 } }
]},

a4: { saat: "Saat 31 · 15.20", baslik: "Kod", metin: [
P(S("a3C"), "“Neyi kastetti annen?” dedin. Gelin omuz silkti. “Bilmiyorum hocam, karışık konuşuyor, yıllar önce bir şey olmuş galiba.” Sonra telefonu çaldı. Sen sekizinci sedyeye döndün. Bir cümle, havada asılı kaldı."),
"Yirmi dakika sonra Hülya'nın sesi; koridorun öbür ucundan, hiç duymadığın bir tonla: “Selin! Yedi!”",
"Koşuyorsun. Nurten Hanım'ın yüzü kıpkırmızı, dudakları şişmiş. Boynunda, kollarında kabarıklar. Nefesi hırıltılı; her nefes bir ıslık. Monitörde tansiyon: yetmiş bölü kırk. Altmış. Elli.",
"Anafilaksi. Kitaplarda okudun, sınavlarda cevapladın, bir kez gördün. Şimdi gözlerinin önünde, yetmiş dört yaşında bir kadının bedeninde.",
"Serumu kapatıyorsun. Bir şey yapman gerekiyor; şimdi, bu saniye.",
"Gelin çığlık atıyor. Hülya oksijeni açıyor. Bir başka hemşire acil arabasını getiriyor. Herkes sana bakıyor.",
"Otuz bir saattir ayaktasın. Beynin ağır, yavaş. Doğru dozu düşünüyorsun; bir saniye, iki saniye. Her saniye bir hava yolunun biraz daha kapanması."
], secenekler: [
{ t: "Hiç düşünmeden adrenalini kas içine yaparsın. Şimdi. Kitaptaki gibi.", to: "a5", etki: { erken_adrenalin: true, durustluk: 1 } },
{ t: "Önce damar yolundan adrenalin hazırlatırsın; doğru dozu Hülya'yla birlikte hesaplayarak.", to: "a5", etki: { sistem: 1, gec_adrenalin: true } },
{ t: "Levent Hoca'yı çağırtırsın. Bir uzmanın yanında olması gerek.", to: "a5", etki: { sistem: 1, levent_cagrildi: true } },
{ t: "Bir an donup kalırsın. Hülya'nın sesiyle kendine gelirsin.", to: "a5", etki: { dondu: true } }
]},

a5: { saat: "Saat 32 · 15.50", baslik: "Sekme", metin: [
P(YASADI, "İğne bacağa girdi; kitaptaki gibi, düşünmeden. Bir dakika. İki. Hırıltı azaldı. Tansiyon yükselmeye başladı; sonra düştü, sonra yeniden yükseldi. Damar yolundan ikinci doz. Steroid, antihistaminik, sıvı. Nurten Hanım'ın kalbi durmadı. Bir kez bile."),
P(OLDU, "Saniyeler. Doz hesaplandı, hazırlandı, verildi. Ama hava yolu kapanmıştı. Nurten Hanım'ın kalbi durdu. Kalp masajı: on iki dakika. Hülya, sen, bir başka asistan, sırayla. Kaburgalar kırıldı; hep kırılır. On ikinci dakikada nabız geri geldi."),
"Entübe edildi. Yoğun bakıma kaldırıldı.",
"Sedye gittikten sonra yedinci sedyenin başında duruyorsun. Boş bir yatak, yerde enjektör kapakları, buruşmuş bir çarşaf. Gelin koridorda, telefonla birine ağlıyor.",
"Bilgisayara dönüyorsun. Nurten Hanım'ın dosyası hâlâ açık. Notlar için; olanları yazman gerek.",
"Ve sonra, refleksle, belki bir önsezi, belki yalnızca bir sistemin alışkanlığı: Alerjiler sekmesine tıklıyorsun.",
"“PENİSİLİN. Reaksiyon: anafilaksi (2019, Kartal Devlet Hastanesi). Kesinlikle verilmemeli.”",
"Ampisilin bir penisilin.",
"Ekrana bakıyorsun. Kelimeler yerinden oynamıyor. Bir daha okuyorsun. Bir daha.",
"Arkanda bir nefes. Hülya. O da ekrana bakıyor."
], secenekler: [
{ t: "Bir sandalyeye çökersin.", to: "a6", etki: { sefkat: 1 } },
{ t: "Lavaboya koşarsın; kusarsın.", to: "a6", etki: { durustluk: 1, kustu: true } },
{ t: "Hülya'ya dönersin: “Sen de gördün.”", to: "a6", etki: { durustluk: 1, hulya_gordu: true } },
{ t: "Ekranı kapatırsın. Bir anlığına; düşünmek için.", to: "a6", etki: { ekran_kapatti: true } }
]},

a6: { saat: "Saat 33 · 17.00", baslik: "Seçim", metin: [
P(S("a5A"), "Sandalyeye çöktün. Bir süre kımıldamadın. Hülya elini omzuna koydu; bir şey söylemedi."),
P(S("a5B"), "Kustun. Midende hiçbir şey yoktu; yalnızca bir çikolata ve otuz üç saatlik kahve. Lavabonun aynasında bir kadın. Bu sabah tanımamış olmayı tercih ettiğin kadın."),
P(S("a5C"), "Hülya sana baktı. Yirmi yıllık bir hemşirenin bakışı. “Ben de sordum,” dedi. “Alerji var mı diye. Sen yok dedin. Ben kontrol etmedim. İkimiz de.” İkimiz de. Bu kelimenin seni hafifletip hafifletmediğini bilmiyorsun."),
P(S("a5D"), "Ekranı kapattın. Karanlık bir ekranda yansıman. Bir an, yalnızca bir an, sekmenin hiç açılmadığı bir dünya düşündün. Sonra Hülya ekranı yeniden açtı. “Hocam,” dedi. Başka bir şey söylemedi."),
"Saat beş. Acil servis hâlâ dolu. Ama senin için zaman durmuş.",
"Yoğun bakımdan bir telefon: Nurten Hanım stabil ama ağır. Bilinci kapalı. Önümüzdeki kırk sekiz saat belirleyici.",
"Bilgisayarda Nurten Hanım'ın dosyası. Order kaydı: ampisilin-sulbaktam, 15.04, Dr. Selin Acar. Alerji kaydı: penisilin, 2019. İkisi aynı dosyada, iki ayrı sekmede.",
"Bu hastanede tıbbi hatalar için bir “olay bildirim sistemi” var. Kâğıt üstünde. Asistanlar arasında bir söz: “Bildirirsen sen yanarsın, bildirmezsen hasta yanar.” Ve kimse bilmiyor ki: bazen ikisi birden.",
"Koridorda gelin ve bir adam; Nurten Hanım'ın oğlu Oğuz, işten koşarak gelmiş. Sana doğru yürüyorlar."
], secenekler: [
{ t: "Oğuz'a ve geline, şimdi, burada, ne olduğunu söylersin. Her şeyi.", to: "h1", etki: { durustluk: 2, kol: "acik" } },
{ t: "Önce Levent Hoca'ya gidersin. Hiyerarşi; bir asistan bunu tek başına söyleyemez.", to: "b1", etki: { sistem: 1, kol: "hiyerarsi" } },
{ t: "Order'ı sistemde düzeltirsin; ilacın adını, saatini. Kimse fark etmeyecek.", to: "c1", etki: { kol: "ortbas" } },
{ t: "Bir olay bildirimi yazarsın; ama asıl nedeni sistem olarak: otuz altı saat, sekmeler, personel.", to: "s1", etki: { sistem: 2, kol: "sistem" } }
]},

/* ---------- AÇIKLIK KOLU ---------- */
h1: { saat: "Saat 33 · 17.10", baslik: "Oğuz", metin: [
"Oğuz kırk beş yaşlarında, kravatı gevşek, yüzü bembeyaz. “Annem nasıl? Ne oldu? Sabah iyiydi, öksürüyordu sadece.”",
"Onu ve gelini boş bir odaya alıyorsun. Kapıyı kapatıyorsun. Oturmalarını istiyorsun. Oturmuyorlar.",
"Kelimeleri hazırlamadın. Bir tıp fakültesinde, bir asistanlık eğitiminde, hiç kimse sana bunu öğretmedi: kendi hatanı bir aileye nasıl söylersin.",
"“Annenize bir antibiyotik verdik,” diyorsun. “Penisilin grubundan. Annenizin penisilin alerjisi vardı; kayıtlarda yazıyordu. Ben bakmadım. Ben yazdım. Annenizde ağır bir alerjik reaksiyon gelişti. Şu an yoğun bakımda. Bu benim hatam.”",
"Bir sessizlik. Oğuz'un yüzü değişmiyor; sanki cümleleri anlamamış gibi. Gelin bir sandalyeye çöküyor; o anlamış.",
"Sonra Oğuz konuşuyor. Sesi alçak, çok alçak.",
"“Annemi siz mi... Bir ilaçla mı? Bir sekme yüzünden mi?”",
"Ve sonra sesi yükseliyor: “Kaç saattir buradasınız? Uyudunuz mu? Bu nasıl bir hastane? Bu nasıl bir ülke?”"
], secenekler: [
{ t: "“Otuz üç saattir,” dersin. “Ama bu bir bahane değil.”", to: "h2", etki: { durustluk: 1, saat_soyledi: true } },
{ t: "“Özür dilerim,” dersin. Başka hiçbir şey.", to: "h2", etki: { durustluk: 1, sefkat: 1, ozur: true } },
{ t: "“Hastane yönetimiyle de konuşmanız gerekecek. Bu bir kurum meselesi de,” dersin.", to: "h2", etki: { sistem: 1 } },
{ t: "Oğuz'un öfkesine izin verirsin; bir şey söylemeden.", to: "h2", etki: { sefkat: 1 } }
]},

h2: { saat: "Ertesi gün", baslik: "Avukat", metin: [
P(S("h1A"), "“Otuz üç saat,” diye tekrarladı Oğuz. Bir an öfkesi sana değil, başka bir yere döndü. Sonra geri geldi. “Bahane değil. Doğru. Ama bu da bir gerçek.”"),
P(S("h1B"), "“Özür,” dedi Oğuz. “Özür.” Kelimeyi tarttı. Sonra döndü ve odadan çıktı. Gelin arkasından gitmedi. Sana baktı. “Annem sizi suçlamazdı,” dedi. “O hep doktorlara güvenirdi.” Bu cümle bir yumruktan daha ağır geldi."),
"Ertesi sabah hastane avukatı seni çağırıyor. Hukuk müşavirliği, beşinci kat. Avukat Sinem Hanım, kırklarında, yorgun ama keskin.",
"“Selin Hanım,” diyor, “dün aileye ne söylediniz?”",
"Anlatıyorsun.",
"Sinem Hanım bir süre bir şey söylemiyor. Sonra: “Bunu yapmamanız gerekiyordu. Hata kabulü, bir dava açıldığında sizin aleyhinize en güçlü delil olur. Hastane de sorumlu tutulur. Bir dahakine önce bizimle konuşun.”",
"Sonra sesini yumuşatıyor: “Ama size bir şey söyleyeyim. Yirmi yıldır bu işi yapıyorum. Hekimlerin çoğu söylemez. Bunu yapan çok az kişi gördüm. Hukuken hata yaptınız. Başka türlü... başka türlü bir şey yaptınız.”",
"Masasında bir dosya. Oğuz Bey bir avukat tutmuş. Bir ön bildirim gelmiş."
], secenekler: [
{ t: "“Yine yapardım,” dersin.", to: "h3", etki: { durustluk: 1, yine_yapardim: true } },
{ t: "“Ne yapmam gerekiyor şimdi?” diye sorarsın.", to: "h3", etki: { sistem: 1 } },
{ t: "“Hastaneye zarar verdiysem özür dilerim,” dersin.", to: "h3", etki: { sistem: 1, kurum_ozur: true } },
{ t: "Oğuz Bey'le yeniden konuşmak istediğini söylersin; avukatsız.", to: "h3", etki: { durustluk: 1, sefkat: 1, ogz_yeniden: true } }
]},

h3: { saat: "Üçüncü gün", baslik: "Yoğun Bakım", metin: [
P(S("h2D"), "Sinem Hanım sana uzun süre baktı. “Bunu size öneremem,” dedi. “Ama sizi durduramam da.” Akşam yoğun bakımın kapısında Oğuz'u buldun. Yanına oturdun. İkiniz de konuşmadınız; bir saat. Sonra Oğuz, “Annem kızarmıştı demiştir,” dedi. “Hep öyle derdi. ‘Bir keresinde kızarmıştım.’ Ölmek üzereydi o zaman, Kartal'da. Ona hep ‘kızardım’ derdi. Böyle küçültürdü her şeyi.”"),
P(YASADI, "Üçüncü gün Nurten Hanım'ın tüpü çıkarılıyor. Gözlerini açıyor. Kafası karışık ama tanıyor: oğlunu, gelinini. Bir hafta sonra servise, iki hafta sonra eve."),
P(YASADI, "Bir hafta sonra servise gidiyorsun. Nurten Hanım pencerenin önünde, bir sandalyede. Seni görünce gülümsüyor; tanımıyor. “Sen de mi doktorsun kızım? Ne kadar gençsin.”"),
P(OLDU, "Üçüncü gün Nurten Hanım'ın beyin görüntüleri geliyor. On iki dakikalık kalp durması; beyin yeterince oksijen alamamış. Uyanmayacak. Belki hiç."),
P(OLDU, "Beşinci gün aile solunum cihazının kapatılmasına karar veriyor. Yoğun bakımda, akşam. Oğuz annesinin elini tutuyor; gelin dua ediyor. Sen kapının dışındasın. Seni çağırmadılar. Ama gitmeni de istemediler."),
"Bir hata bir insanın başına gelen bir şey değil; bir insanın yaptığı bir şey. Ve ne yaptığının sonucunu sen belirlemiyorsun; şans belirliyor. Bir saniyelik bir refleks, bir dozun hızı, bir bedenin direnci.",
"Aynı hatayı yapan iki hekim düşün: birinin hastası yaşar, öbürünün ölür. Hangisi daha suçlu? Hukuk diyor ki ikincisi. Vicdan ne diyor?"
], secenekler: [
{ t: function(d){ return YASADI(d) ? "Nurten Hanım'a kim olduğunu söylersin." : "Yoğun bakımın kapısında Oğuz'u beklersin."; }, to: "t1", etki: function(d){ d.durustluk++; if(YASADI(d)) d.nurtene_soyledi = true; else d.kapida_bekledi = true; } },
{ t: function(d){ return YASADI(d) ? "“Evet teyze, doktorum,” dersin. Başka bir şey söylemeden." : "Hastaneden çıkıp yürürsün."; }, to: "t1", etki: function(d){ d.sefkat++; } },
{ t: "Bu iki ihtimali düşünürsün: yaşaması, ölmesi. Ve hangisinin senin elinde olduğunu.", to: "t1", etki: { durustluk: 1, sans_dusundu: true } },
{ t: "Kerem'i ararsın.", to: "t1", etki: { sefkat: 1, keremi_aradi: true } }
]},

/* ---------- HİYERARŞİ KOLU ---------- */
b1: { saat: "Saat 33 · 17.10", baslik: "Levent Hoca", metin: [
"Levent Hoca nöbetçi odasında, bir dosyanın başında. Elli yaşında, acil tıp uzmanı; on beş yıldır bu acilde. Seni görünce yüzündeki ifade değişiyor; bir şey olduğunu anlıyor.",
"Anlatıyorsun. Her şeyi. Sekme, order, reaksiyon, kod.",
"Levent Hoca dinliyor. Bir kez bile sözünü kesmiyor. Bitince bir süre pencereden dışarı bakıyor.",
"“Selin,” diyor, “bu hastanede son beş yılda dört kez oldu bu. Bilgi sistemi değişti, sekmeler renk kaybetti, alerji uyarısı açılır pencere olmaktan çıktı. Ben üç kez yazdım. Bilgi işleme. Başhekimliğe. Kimse bir şey yapmadı.”",
"Sonra sana dönüyor. “Şimdi beni dinle. Bir şey yazma. Olay bildirimi yazma. Dosyaya ‘beklenmedik ilaç reaksiyonu’ yaz. Aileyle ben konuşacağım. Sen eve git, uyu.”",
"“Ama hocam...”",
"“Selin. Bir hata bildirirsen ne olur biliyor musun? Soruşturma. Disiplin. Belki dava. Belki mesleğin. Ve sistem? Sistem aynen kalır. Bir sonraki asistan aynı sekmeyi açmaz. Seni korumak benim işim.”"
], secenekler: [
{ t: "Levent Hoca'nın dediğini yaparsın. Eve gidersin.", to: "b2", etki: { sistem: 1, eve: true } },
{ t: "“Aileye ben söylemek istiyorum hocam,” dersin.", to: "h1", etki: { durustluk: 2, kol: "acik", hiyerarsi_asti: true } },
{ t: "Eve gitmezsin; Levent Hoca'nın aileyle konuşmasını izlemek için kalırsın.", to: "b2", etki: { durustluk: 1, kaldi: true } },
{ t: "“Hocam, siz üç kez yazdınız. Ben dördüncüsünü yazayım,” dersin.", to: "s1", etki: { sistem: 2, kol: "sistem", leventle: true } }
]},

b2: { saat: "Saat 34 · 18.00", baslik: "Aile Odası", metin: [
P(S("b1A"), "Eve gittin. Ama uyumadın. Yatakta tavana baktın. Saat dokuzda telefonun çaldı: Levent Hoca. “Konuştum,” dedi. “Beklenmedik bir ilaç reaksiyonu dedim. Anladılar. Merak etme.” Anladılar. Neyi?"),
P(S("b1C"), "Kaldın. Aile odasının kapısı aralık. İçeride Levent Hoca, Oğuz, gelin. Sen koridorda, duvara yaslanmış."),
P(S("b1C"), "Levent Hoca konuşuyor; sakin, profesyonel, insani. “Annenize bir antibiyotik verildi. Maalesef ağır bir alerjik reaksiyon gelişti. Bu bazen olur; ilaçlar beklenmedik tepkiler yaratabilir. Ekibimiz çok hızlı müdahale etti.” Her cümle doğru. Hiçbiri gerçek değil."),
P(S("b1C"), "Oğuz soruyor: “Annemin bir alerjisi var mıydı? Biliyor muydunuz?” Levent Hoca bir an duraksıyor. Bir saniye; belki daha az. “Kayıtlarımızı inceleyeceğiz,” diyor. Oğuz başını sallıyor. Güveniyor."),
"Bir yalan, bir kurumun ağzından söylendiğinde, yalan gibi durmuyor. Bir prosedür gibi duruyor.",
"Gece. Acil servisin arka kapısı. Bir sigara içmiyorsun ama sigara içenlerin durduğu yerde duruyorsun. Hülya geliyor; o da içmiyor.",
"“Levent Hoca ne dedi?” diyor Hülya.",
"Anlatıyorsun.",
"Hülya uzun süre susuyor. Sonra: “Yirmi yıldır bu acildeyim. Bu dördüncü. Her seferinde aynı şey oldu. Biri bir şey söyledi, biri sustu, aile ‘beklenmedik reaksiyon’ diye eve gitti. Ve sekme hâlâ aynı renkte.”"
], secenekler: [
{ t: "“Ne yapmalıyım Hülya Abla?” diye sorarsın.", to: "b3", etki: { sefkat: 1, hulyaya_sordu: true } },
{ t: "“Levent Hoca beni korumaya çalışıyor,” dersin.", to: "b3", etki: { sistem: 1 } },
{ t: "“Bu sefer farklı olacak,” dersin. Nasıl, bilmeden.", to: "b3", etki: { durustluk: 1 } },
{ t: "Hiçbir şey söylemezsin. Hülya'nın yanında durursun.", to: "b3", etki: { sefkat: 1 } }
]},

b3: { saat: "Gece", baslik: "Uyku", metin: [
P(S("b2A"), "“Ben ne yapmalıyım diye sormayı yirmi yıl önce bıraktım,” dedi Hülya. “Sen sor. Ama kendine sor.”"),
"Gece ikide uyanıyorsun. Kendi yatağındasın. Bir an nerede olduğunu bilmiyorsun. Sonra hatırlıyorsun. Hepsini.",
"Kalp çarpıntısı. Terlemiş çarşaflar. Tavanda bir leke; hep oradaydı, hiç fark etmemiştin.",
"Telefonunu alıyorsun. Yoğun bakımın numarası. Nöbetçi hemşireye Nurten Hanım'ı soruyorsun. “Stabil,” diyor. “Ama ağır. Siz kimsiniz?” Bir an cevap veremiyorsun. “Acil asistanı,” diyorsun sonunda.",
"Sonra hastane bilgi sistemine evden bağlanıyorsun. Nurten Hanım'ın dosyası. Levent Hoca'nın notu: “Antibiyotik sonrası beklenmedik anafilaktik reaksiyon. Hızlı müdahale ile stabilize edildi.” Alerji sekmesi değişmemiş: “Penisilin. 2019.” İkisi yan yana. Bir sekme farkıyla.",
"Bir dosya, iki gerçek. Biri bir kurumun gerçeği; öbürü bir kayıt sisteminin.",
"Uyumak istiyorsun. Ama gözlerini her kapattığında bir sekme görüyorsun; açılmamış."
], secenekler: [
{ t: "Sabah ilk iş Oğuz'u bulup ona gerçeği söylersin.", to: "h2", etki: { durustluk: 2, kol: "acik", gec_acik: true } },
{ t: "Bir olay bildirimi yazarsın; Levent Hoca'nın haberi olmadan.", to: "s2", etki: { sistem: 2, kol: "sistem", gizli_bildirim: true } },
{ t: "Uyumaya çalışırsın. Levent Hoca haklı olabilir.", to: "t1", etki: { sistem: 1, sustu: true } },
{ t: "Bir kâğıda her şeyi yazarsın; kimseye göndermeden.", to: "t1", etki: { durustluk: 1, gunluk: true } }
]},

/* ---------- ÖRTBAS KOLU ---------- */
c1: { saat: "Saat 33 · 17.05", baslik: "Düzeltme", metin: [
"Order ekranı açık. “Ampisilin-sulbaktam, 15.04, Dr. Selin Acar.” Düzenle butonu. Bir tıklama ve ilacın adı değişebilir: seftriakson. O da bir antibiyotik; o da penisilinle çapraz reaksiyon verebilir ama nadiren. Nadiren. Bir “beklenmedik reaksiyon”.",
"Ellerin klavyenin üstünde. Titrememeleri seni korkutuyor.",
"Bir tıklama. “Değişiklik nedeni” diye bir kutu açılıyor. Yazıyorsun: “Yanlış giriş, düzeltildi.”",
"Kaydet.",
"Ekranda yeni order: “Seftriakson, 15.04.” Eski satır yok. Ya da var; sistemin bir yerinde, bir logda. Bunu biliyorsun. Bilmezden geliyorsun.",
"Arkanda bir nefes. Döndüğünde kimse yok. Ya da biri vardı ve gitti.",
"Şimdi ilacı hazırlayan Hülya'ydı. Eczaneden alınan kutu hâlâ bir çöp kutusunda olabilir. Ampisilin yazıyor üstünde. Nurten Hanım'ın gelini order'ı duydu mu? Hatırlar mı?",
"Bir yalan bir kez söylenmez. Her gün, her yeni bilgiyle, yeniden söylenmesi gerekir."
], secenekler: [
{ t: "Çöp kutusuna gidip ilaç kutusunu bulursun ve atarsın.", to: "c2", etki: { kutu_atti: true } },
{ t: "Hiçbir şey yapmazsın. Ne olacaksa olsun.", to: "c2", etki: { sefkat: 1 } },
{ t: "Değişikliği geri alırsın. Yapamazsın bunu. Sonra koridora, aileye yürürsün.", to: "h1", etki: { durustluk: 2, geri_aldi: true, kol: "acik" } },
{ t: "Hülya'yı bulursun. Onun ne gördüğünü bilmen gerek.", to: "c2", etki: { hulyaya_gitti: true } }
]},

c2: { saat: "Saat 34 · 18.30", baslik: "Hülya", metin: [
P(S("c1A"), "Çöp kutusu. Enjektörler, gazlı bezler, eldivenler. Ve bir karton kutu: “Ampisilin-sulbaktam 1,5 g.” Alıp cebine koydun. Tuvalette parçalara ayırdın. Hiç bu kadar küçük bir şeyi bu kadar dikkatle yırtmamıştın."),
"Hülya seni personel odasında buluyor. Kapıyı kapatıyor.",
"“Selin,” diyor. Bu sefer “hocam” demiyor. “Order'ı değiştirdin.”",
"Soru değil.",
"“Ben ilacı hazırladım. Ben kutuyu açtım. Ben şişenin etiketini okudum: ampisilin. Bunu bir mahkemede söylemem gerekirse söylerim. Yemin ederim söylerim.”",
"Bir süre bekliyor.",
"“Ama söylemem gerekmesin diye bir şans veriyorum sana. Yirmi yıldır bu acildeyim. Doktorların hata yaptığını gördüm, ben de yaptım. Ama ben senin için yalan söylemem. Kayıtta ne yazarsa yazsın, ben ne gördüysem onu söylerim. Bunu bil ve kararını ver.”",
"Hülya'nın gözleri kızarık. Kızgın değil. Hayal kırıklığına uğramış; bu daha kötü."
], secenekler: [
{ t: "“Haklısın. Düzeltiyorum,” dersin. Ve geri dönersin.", to: "h1", etki: { durustluk: 2, kol: "acik", hulya_dondurdu: true } },
{ t: "“Benim kariyerim Hülya Abla. Lütfen,” dersin.", to: "c3", etki: { yalvardi: true } },
{ t: "“Senin de sorumluluğun vardı,” dersin. “Sen de kontrol etmedin.”", to: "c3", etki: { sistem: 1, hulyayi_suclad: true } },
{ t: "Bir şey söylemezsin. Hülya'nın kapıdan çıkmasını izlersin.", to: "c3", etki: { sustu: true } }
]},

c3: { saat: "Bir hafta sonra", baslik: "Log", metin: [
P(S("c2B"), "Hülya uzun süre sana baktı. “Senin kariyerin,” dedi. “Nurten Hanım'ın hayatı. Benim vicdanım. Hepsi bir terazide.” Kapıyı açtı. “Ben bir şey yapmayacağım. Ama birisi sorarsa, yalan da söylemeyeceğim.” Gitti."),
P(S("c2C"), "Hülya'nın yüzü kıpkırmızı oldu. “Evet,” dedi. “Benim de sorumluluğum vardı. Ve ben bunu söyleyeceğim. Sen söylemesen de.” Gitti. Kapıyı arkasından çarpmadı; yavaşça kapattı. Bu daha kötüydü."),
P(S("c2D"), "Hülya kapıdan çıktı. Bir saniye eşikte durdu; dönecek gibi oldu. Dönmedi."),
"Bir hafta geçiyor. Hiçbir şey olmuyor. Kimse bir şey sormuyor. Nurten Hanım'ın dosyasında “seftriakson sonrası beklenmedik reaksiyon” yazıyor.",
"Sonra bir öğleden sonra başhekimlikten bir e-posta. Konu: “Bilgi Sistemi Değişiklik Kaydı İncelemesi.”",
"Hastanenin bilgi işlem birimi rutin bir denetim yapmış. Son ayda “yanlış giriş, düzeltildi” notuyla değiştirilen order'lar. On yedi tane. Biri senin. Değişiklikten önce ve sonra. Saatler. İsimler.",
"E-postanın son satırı: “Yarın saat 10.00'da Başhekim Yardımcısı odasında görüşmek üzere.”",
"Hülya bir şey söylemedi. Kimse bir şey söylemedi. Bir sistem, sessizce, kendi kendini kaydetti."
], secenekler: [
{ t: "Toplantıda her şeyi itiraf edersin.", to: "t1", etki: { durustluk: 2, ortaya: true, itiraf: true } },
{ t: "Toplantıda bir teknik hata olduğunu savunursun.", to: "t1", etki: { savundu: true } },
{ t: "Toplantıdan önce Oğuz'u bulup ona her şeyi söylersin.", to: "t1", etki: { durustluk: 2, ortaya: true, ogz_ilk: true } },
{ t: "Bir avukat tutarsın.", to: "t1", etki: { sistem: 1, avukat: true } }
]},

/* ---------- SİSTEM KOLU ---------- */
s1: { saat: "Saat 34 · 18.00", baslik: "Bildirim", metin: [
P(function(d){ return d.leventle; }, "Levent Hoca bir süre sana baktı. Sonra çekmecesini açtı, üç kâğıt çıkardı: kendi bildirimleri: 2021, 2023, 2025. “Al,” dedi. “Ekle bunları. Belki dördüncüde biri okur.”"),
"Olay bildirim formu. Altı sayfa. Bir hastanenin kendi hatalarını kaydetmek için tasarladığı bir belge; nadiren doldurulan.",
"Yazıyorsun. Saat 15.04. Ampisilin-sulbaktam. Alerji kaydı mevcut. Sekme açılmadı. Reaksiyon. Kod. Yoğun bakım.",
"Sonra “Katkıda bulunan faktörler” bölümü. Bir liste: yorgunluk, iş yükü, iletişim, ekipman, bilgi sistemi, eğitim, diğer.",
"Her birini işaretliyorsun.",
"Yorgunluk: otuz bir saat kesintisiz çalışma. İş yükü: üç asistan, yüz yirmi hasta. İletişim: alerji sorusu sözlü soruldu, sözlü cevaplandı; kontrol mekanizması yok. Bilgi sistemi: 2022 güncellemesinden sonra alerji uyarısı kırmızıdan griye döndü, açılır pencere kaldırıldı; üç ayrı bildirim yapılmış, işlem yapılmamış. Şiddet: saat 28'de bir asistan darp edildi, ekip kırk dakika eksik çalıştı.",
"Altı sayfa doluyor. Bir bireysel hatayı bir sistemin haritasına çeviriyorsun.",
"Ve son bölüm: “Bireysel sorumluluk değerlendirmesi.” Boş bir kutu."
], secenekler: [
{ t: "Kutuya yazarsın: “Sekmeyi ben açmadım. Order'ı ben yazdım. Sorumluluk benim.”", to: "s2", etki: { durustluk: 2, bireysel: true } },
{ t: "Kutuyu boş bırakırsın. Sistem bunu üretti.", to: "s2", etki: { sistem: 1, bos: true } },
{ t: "“Bireysel ve sistemsel sorumluluk ayrılamaz,” yazarsın.", to: "s2", etki: { durustluk: 1, sistem: 1 } },
{ t: "Kutuya Hülya'nın adını da yazarsın: “İkimiz kontrol etmedik.”", to: "s2", etki: { sistem: 1, hulya_yazdi: true } }
]},

s2: { saat: "İki hafta sonra", baslik: "Komite", metin: [
P(function(d){ return d.gizli_bildirim; }, "Bildirimi gece yazdın, sabah gönderdin. Levent Hoca öğrendiğinde bir şey söylemedi. Bir hafta seninle konuşmadı. Sonra bir sabah kahve getirdi. “İyi yazmışsın,” dedi. Bunun bir af mı, bir uyarı mı olduğunu bilmiyorsun."),
"İki hafta sonra Hasta Güvenliği Komitesi toplanıyor. Uzun bir masa, on iki kişi: başhekim yardımcısı, bilgi işlem müdürü, hemşirelik müdürü, iki uzman, bir hukukçu, sen.",
"Bildirimin ekranda. Sayfa sayfa okunuyor.",
"Bilgi işlem müdürü savunmaya geçiyor: güncelleme bakanlık tarafından zorunlu tutuldu, arayüz değişikliği merkezi kararla yapıldı, bütçe yok. Hemşirelik müdürü: personel açığı yüzde otuz, kadro talepleri üç yıldır bekliyor. Başhekim yardımcısı: nöbet süreleri yönetmelikle belirlenmiş, istisnalar “zorunlu hâllerde”.",
"Herkes kendi payını bir başkasına devrediyor. Sorumluluk masanın etrafında dönüyor ve hiçbir yerde durmuyor.",
"Sonunda başhekim yardımcısı karar özetini okuyor: “Olay, çok faktörlü bir sistem hatası olarak değerlendirilmiştir. Bireysel kusur tespit edilmemiştir. Bilgi sistemine alerji uyarısının yeniden eklenmesi için bakanlığa yazı yazılacaktır.”",
"Bireysel kusur tespit edilmemiştir. Bir cümle; seni kurtarıyor. Ve Nurten Hanım'ın oğlu bu cümleyi hiç duymayacak."
], secenekler: [
{ t: "Söz alıp itiraz edersin: “Bireysel kusur var. Benim.”", to: "s3", etki: { durustluk: 2, itiraz: true } },
{ t: "Kararı kabul edersin. Sistem değişecekse, bu yeter.", to: "s3", etki: { sistem: 1 } },
{ t: "Aileye bu raporun bir kopyasının verilmesini talep edersin.", to: "s3", etki: { durustluk: 1, sistem: 1, rapor_aile: true } },
{ t: "Bakanlığa yazılacak yazıyı kendin yazmayı teklif edersin.", to: "s3", etki: { sistem: 2, yazi: true } }
]},

s3: { saat: "Bir ay sonra", baslik: "Oğuz'un Sorusu", metin: [
P(S("s2A"), "Masa sustu. Başhekim yardımcısı gözlüğünü çıkardı. “Selin Hanım,” dedi, “bu komitenin amacı suçlu bulmak değil. Sistemi düzeltmek.” Ama tutanağa senin cümleni de yazdırdın. Kelimesi kelimesine."),
P(S("s2C"), "Hukukçu itiraz etti. Başhekim yardımcısı düşündü. Sonunda bir uzlaşma: aileye “olay hakkında bilgilendirme” yapılacak, rapor verilmeden. Bilgilendirmeyi kim yapacak? Sen istedin."),
P(S("s2D"), "Yazıyı yazdın. Dört sayfa. Bakanlığa gitti. Üç ay sonra bir cevap geldi: “Talebiniz değerlendirmeye alınmıştır.” Altı ay sonra hiçbir şey. Ama bir yıl sonra, bir güncellemeyle, alerji sekmesi kırmızıya döndü. Bütün Türkiye'de."),
"Bir ay sonra hastanenin kantininde biri yanına oturuyor. Oğuz.",
"Seni tanımıyor; ya da tanıyor. “Annemin dosyasında adınız var,” diyor. “Acil hekimi. Siz miydiniz o gün?”",
"Evet, diyorsun.",
"Oğuz bir süre çayına bakıyor. Sonra: “Bir şey soracağım. Avukatım bir şey buldu. Annemin dosyasında bir alerji kaydı var. Penisilin. Ve ona penisilin verilmiş. Hastane bana ‘sistem hatası’ diyor. Ben bir şey anlamıyorum. Sistem hatası ne demek? Bir sistem bir ilaç yazar mı? Bir insan yazar.”",
"Sana bakıyor. Doğrudan.",
"“Kim yazdı?”"
], secenekler: [
{ t: "“Ben yazdım,” dersin.", to: "t1", etki: { durustluk: 2, ortaya: true, ben_yazdim: true } },
{ t: "“Bir sistemin içinde çalışan bir hekim yazdı. Otuz bir saattir uyumamış bir hekim,” dersin.", to: "t1", etki: { sistem: 1, durustluk: 1, ortaya: true } },
{ t: "“Bunu hastane yönetimiyle konuşmanız gerekiyor,” dersin.", to: "t1", etki: { sistem: 1, yonlendirdi: true } },
{ t: "Cevap veremezsin. Kalkıp gidersin.", to: "t1", etki: { kacti: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Sonra", baslik: "Sonuç", metin: [
P(function(d){ return YASADI(d) && !(d.kol === "acik" && d.gecti.h3); }, "Nurten Hanım yaşadı. Üç gün sonra tüpü çıkarıldı; iki hafta sonra evine döndü. Bir sabah gelinin koluna girip hastanenin bahçesinde yürüdüğünü gördün; pencereden, uzaktan."),
P(function(d){ return OLDU(d) && !(d.kol === "acik" && d.gecti.h3); }, "Nurten Hanım öldü. Beşinci gün. Aile solunum cihazının kapatılmasına karar verdi. Oğlu yanındaydı. Sen değildin."),
P(function(d){ return d.itiraf; }, "Toplantıda her şeyi anlattın. Başhekim yardımcısı sessizce dinledi. Disiplin soruşturması açıldı. Ama bir şey daha oldu: toplantıdan sonra bilgi işlem müdürü odana geldi. “Alerji uyarısını geri getiriyoruz,” dedi. “Bakanlığı beklemeden. Kendi yazılımımızla.”"),
P(function(d){ return d.savundu; }, "Teknik hata olduğunu savundun. Başhekim yardımcısı logları gösterdi: saat 17.04, değişiklik, senin kullanıcı adın. “Teknik hata,” dedi, “bir insanın şifresiyle mi giriş yapar?” Disiplin soruşturması açıldı. İki suçlama: tıbbi hata ve kayıt tahrifatı. İkincisi birincisinden ağır."),
P(function(d){ return d.avukat; }, "Avukatın sana sessiz kalmanı söyledi. Kaldın. Soruşturma aylarca sürdü. Hülya ifade verdi. Kelimesi kelimesine; ne gördüyse."),
P(function(d){ return d.sustu && d.kol === "hiyerarsi"; }, "Sustun. Levent Hoca'nın dediği gibi. Dosyada “beklenmedik reaksiyon” yazıyor. Kimse bir şey sormadı. Kimse bir şey öğrenmedi. Sekme hâlâ gri."),
"Bir hata bir hastanenin koridorunda bir an olur ve sonra yıllarca sürer.",
"Ahlaki şans diye bir şey var, diye öğrenmiştin bir zamanlar, bir etik dersinde. Aynı dikkatsizliği yapan iki sürücü: birinin önüne bir çocuk çıkar, öbürünün çıkmaz. Biri katil olur, öbürü olmaz. Ama ikisinin yaptığı aynıydı.",
P(YASADI, "Senin önüne bir çocuk çıkmadı. Bir saniyelik bir refleks; bacağa yapılmış bir iğne. Nurten Hanım yaşadı. Sen şanslıydın. Ve bu şansın içinde bir utanç var: aynı hatayı yapan bir başkası, o refleksi bir saniye geç gösterseydi, katil olacaktı. Sen değil."),
P(OLDU, "Senin önüne bir çocuk çıktı. Bir saniyelik bir donma, bir dozun hesaplanması, on iki dakikalık bir kod. Nurten Hanım öldü. Aynı hatayı yapan bir başkası, daha hızlı bir refleksle, onu kurtarabilirdi. Sen kurtaramadın. Hatan aynıydı; sonucu değil.")
], secenekler: [
{ t: "Eve gidip uyursun. Gerçekten uyursun; on dört saat.", to: "t1b", etki: { sefkat: 1, uyudu: true } },
{ t: "Bir sonraki nöbete gelirsin. Programdaki gibi.", to: "t1b", etki: { sistem: 1, nobete_geldi: true } },
{ t: "Babanı ararsın.", to: "t1b", etki: { sefkat: 1, baba: true } },
{ t: "Kerem'i ararsın.", to: "t1b", etki: { sefkat: 1, kerem2: true } }
]},

t1b: { saat: "Bir hafta sonra", baslik: "Baba", metin: [
P(S("t1A"), "On dört saat. Uyandığında akşamdı. Bir an her şeyin bir rüya olduğunu düşündün. Sonra telefonunda yüz yirmi bildirim gördün. Hiçbiri bir rüyadan gelmiyordu."),
P(S("t1B"), "Nöbete geldin. Bekleme salonunda yine yüz kişi. İlk hastan bir çocuk; ateş. Alerji sekmesine tıkladın. Sonra bir daha. Sonra annesine sordun. Sonra bir daha tıkladın. Hülya izledi, bir şey söylemedi. Ama yanından geçerken omzuna dokundu."),
P(S("t1D"), "Kerem açtı. Sesi daha iyi. “Bıraktım,” dedi. “Bir aile hekimliğinde başladım. Sabah dokuz, akşam beş. Hiç kimse beni yumruklamıyor.” Sonra: “Sen nasılsın?” Anlattın. Uzun bir sessizlik. “Bunu ben de yapabilirdim,” dedi. “O gün, benim nöbetimde. Bunu biliyorsun, değil mi?”"),
"Babanla telefonda. Ya da babanın evinde, Sivas'ta, bir hafta izin aldın; mutfak masasında.",
"Baban emekli bir öğretmen. Seni hep “doktor kızım” diye tanıttı; komşulara, akrabalara, bakkala. Şimdi masanın karşısında, sana bakıyor.",
"Anlatıyorsun. Her şeyi. Uzun süre.",
"Baban dinliyor. Bir kez bile sözünü kesmiyor. Bitince bir süre çayını karıştırıyor.",
"“Kızım,” diyor, “otuz beş yıl öğretmenlik yaptım. Bir keresinde bir çocuğa haksız yere sıfır verdim. Kopya çekti sandım. Çekmemişti. Çocuk ağladı; ben inanmadım. Bir yıl sonra öğrendim. Çocuk o yıl sınıfta kalmıştı.”",
"Bir süre susuyor.",
"“O çocuğu hâlâ düşünürüm. Kırk yıl oldu. Adı Mehmet'ti. Ama bil ki, o çocuktan sonra bir daha hiçbir çocuğa bakmadan sıfır vermedim. Bir hata bir insanı ya kırar ya da dikkatli yapar. İkisi birden de olabilir.”"
], secenekler: [
{ t: "Babana sarılırsın.", to: "t2", etki: { sefkat: 1 } },
{ t: "“Senin hatanda kimse ölmedi baba,” dersin.", to: "t2", etki: { durustluk: 1, kiyas: true } },
{ t: "“Mehmet'e hiç söyledin mi?” diye sorarsın.", to: "t2", etki: { durustluk: 1, mehmet: true } },
{ t: "Ağlarsın. İlk kez.", to: "t2", etki: { sefkat: 2, agladi: true } }
]},

t2: { saat: "Bir ay sonra", baslik: "Sonra", metin: [
P(S("t1bB"), "Baban bir süre sustu. “Bilmiyorum,” dedi. “Belki öldü. Belki o yıl, sınıfta kaldığı yıl, içinde bir şey öldü. Ben bunu bilemem. Sen de bilemezsin; bazen.”"),
P(S("t1bC"), "“Söylemedim,” dedi baban. “Cesaretim olmadı. Kırk yıl. Her yıl düşündüm, bu yıl bulayım onu. Bulmadım.” Sonra sana baktı. “Senin cesaretin var mı kızım?”"),
P(S("t1bD"), "Ağladın. Babanın mutfağında, bir çay bardağının başında, otuz bir saatin, otuz altı saatin, bir ayın gözyaşları. Baban kalkıp arkana geçti, elini başına koydu. Küçükken yaptığı gibi. Hiçbir şey söylemedi."),
"Bir ay geçti. İstanbul'a döndün. Acil servis aynı. Bekleme salonu aynı. Ama sen aynı değilsin.",
"Bir şey yapman gerekiyor. Bunu hissediyorsun. Ama ne?"
], secenekler: [
{ t: function(d){ return YASADI(d) ? "Nurten Hanım'ı evinde ziyaret edersin." : "Nurten Hanım'ın mezarını bulursun."; }, to: "y_ziyaret", etki: { durustluk: 1, ziyaret: true } },
{ t: "Bir psikiyatriste gidersin. Uykuların hâlâ yok.", to: "y_terapi", etki: { sefkat: 1, terapi: true } },
{ t: "İstifa dilekçeni yazarsın.", to: "t3", etki: { istifa: true } },
{ t: "Hiçbir şey yapmazsın. Nöbetlerine devam edersin.", to: "t3", etki: { sistem: 1 } }
]},

y_ziyaret: { saat: "Bir ay sonra", baslik: "Ziyaret", metin: [
P(YASADI, "Kartal'da bir apartman, dördüncü kat, asansörsüz. Kapıyı gelin açıyor. Seni tanıyor; yüzü bir an sertleşiyor, sonra yumuşuyor. “Gelin,” diyor. “Annem uyanık.”"),
P(YASADI, "Nurten Hanım salonda, televizyonun karşısında, bir battaniyenin altında. Zayıflamış ama gözleri parlak. Seni görünce gülümsüyor. “Gel kızım. Otur. Çay içer misin?”"),
P(function(d){ return YASADI(d) && d.ortaya; }, "Biliyor. Oğuz anlatmış. Ama seni yine de çaya davet ediyor. “Oğlum çok kızdı sana,” diyor. “Ben kızmadım. Ben hep ‘kızardım’ derdim o ilaç için. Kızardım. Ölüyormuşum meğer. Kendim de küçülttüm. Sen nereden bilecektin?”"),
P(function(d){ return YASADI(d) && !d.ortaya; }, "Bilmiyor. Seni hastanede gördüğü doktorlardan biri sanıyor. “Beni kurtaranlardan mısın?” diyor. Bir cevap bekliyor."),
P(OLDU, "Kartal'da bir mezarlık. Yeni bir mezar; taşı henüz dikilmemiş, tahta bir levha: “Nurten Yıldırım, 1952–2026.” Toprak hâlâ taze. Biri çiçek bırakmış; papatya."),
P(OLDU, "Mezarın başında duruyorsun. Ne söyleyeceğini bilmiyorsun. Bir mezara ne söylenir? Özür mü? Bir açıklama mı? Bir otuz bir saat mi?"),
P(function(d){ return OLDU(d); }, "Arkadan bir ses. Oğuz. Elinde bir şişe su; toprağı sulamaya gelmiş. Seni görüyor. Duruyor."),
"Bir hatanın yüzüyle karşılaşmak. Bir hatanın sonucunun bir insan olduğunu, bir istatistik ya da bir dosya değil, bir insan, bir aile, bir çay daveti ya da bir toprak yığını olduğunu, kendi gözlerinle görmek."
], secenekler: [
{ t: function(d){ return YASADI(d) && !d.ortaya ? "“Hayır teyze. Ben size hata yapan doktorum,” dersin." : "Özür dilersin; yüz yüze."; }, to: "t3", etki: function(d){ d.durustluk += 2; d.yuz_yuze = true; if(YASADI(d)) d.ortaya = true; } },
{ t: function(d){ return YASADI(d) ? "Çayını içersin. Konuşmasını dinlersin." : "Oğuz'un yanına gidip su şişesini alır, toprağı birlikte sularsınız."; }, to: "t3", etki: { sefkat: 1, birlikte: true } },
{ t: "Bir şey söylemeden gidersin.", to: "t3", etki: { kacti2: true } },
{ t: "Bir mektup bırakırsın.", to: "t3", etki: { durustluk: 1, mektup: true } }
]},

y_terapi: { saat: "Bir ay sonra", baslik: "İkinci Kurban", metin: [
"Psikiyatrist Dr. Aylin, ellilerinde, sakin. Odasında bir kanepe, bir bitki, kitaplar. Seni dinliyor. Kırk dakika.",
"“Bir kavram var,” diyor sonunda. “‘İkinci kurban.’ Tıbbi bir hataya karışan sağlık çalışanları için kullanılıyor. Birinci kurban hasta. İkinci kurban, hatayı yapan. Uykusuzluk, suçluluk, kâbuslar, mesleği bırakma düşünceleri, bazen daha kötüsü.”",
"“Ben kurban değilim,” diyorsun. “Ben hatayı yaptım.”",
"“Evet,” diyor Dr. Aylin. “Siz hatayı yaptınız. Ve şimdi acı çekiyorsunuz. İkisi birden doğru. Bunlardan biri, öbürünü iptal etmiyor.”",
"Bir süre susuyor.",
"“Size bir soru soracağım. Bir arkadaşınız bu hatayı yapsaydı, Kerem diyelim, ona ne söylerdiniz?”",
"Düşünüyorsun. “Sistemi suçlardım,” diyorsun. “Otuz bir saati. Sekmeyi. Yumruğu.”",
"“Peki kendinize neden söylemiyorsunuz?”",
"Cevap veremiyorsun.",
"“Çünkü,” diyor Dr. Aylin, “kendinize söylerseniz, bir bahane uydurmuş gibi hissedeceksiniz. Ama bir başkasına söylediğinizde, bir gerçeği söylemiş olacaksınız. İkisi aynı cümle. Fark, kimin söylediği.”"
], secenekler: [
{ t: "“Kendimi affedersem, Nurten Hanım'a ihanet etmiş olurum,” dersin.", to: "t3", etki: { durustluk: 1, ihanet: true } },
{ t: "Haftaya yeniden gelmek istediğini söylersin.", to: "t3", etki: { sefkat: 1, devam_terapi: true } },
{ t: "“Belki,” dersin. Ve ilk kez, bir şeyin gevşediğini hissedersin.", to: "t3", etki: { sefkat: 2, gevsedi: true } },
{ t: "“Bunu yeterince hak etmiyorum,” dersin ve kalkarsın.", to: "t3", etki: { durustluk: 1, hak_etmiyorum: true } }
]},

t3: { saat: "Üç ay sonra", baslik: "Mortalite Toplantısı", metin: [
P(function(d){ return d.istifa; }, "İstifa dilekçeni yazdın. Levent Hoca okudu, sonra çekmecesine koydu. “Bir ay bekle,” dedi. “Sonra hâlâ istiyorsan, imzalarım.” Bir ay. Bu bir ay boyunca nöbetlere devam ettin."),
"Her ayın son perşembesi acil serviste bir “morbidite-mortalite toplantısı” yapılır. Asistanlar, uzmanlar, hemşireler. Ayın en kötü vakaları, en büyük hataları tartışılır. Kural: suçlama yok, öğrenme var. Pratikte herkes bilir ki her sunum bir mahkemedir.",
"Bu ay Levent Hoca senin vakanı seçti. Sen sunacaksın.",
"Amfi dolu. Kırk kişi. Arka sırada Hülya. Ön sırada Levent Hoca. Kerem gelmiş; artık başka bir yerde çalışmasına rağmen.",
"Projeksiyon açılıyor. İlk slayt: “Olgu: 74 yaşında kadın, pnömoni, ilaç reaksiyonu.”",
"Bunu nasıl sunacağın sana kalmış. Bir vaka olarak: zaman çizelgesi, ilaçlar, dozlar, sonuçlar. Ya da bir hikâye olarak: otuz bir saat, bir yumruk, bir sekme, bir “yok”.",
"Kırk kişi bekliyor. Bazıları merakla. Bazıları korkuyla; çünkü biliyorlar, bir gün bu kürsüde kendileri olabilir."
], secenekler: [
{ t: "Vakayı bir hikâye olarak anlatırsın; kendi hatanla, kendi otuz bir saatinle.", to: "t4", etki: { durustluk: 2, hikaye: true } },
{ t: "Vakayı teknik olarak sunarsın: zaman çizelgesi, kök neden analizi, sistem önerileri.", to: "t4", etki: { sistem: 2, teknik: true } },
{ t: "Sunumun sonuna bir slayt eklersin: “Bu olabilirdi: sizin nöbetinizde.”", to: "t4", etki: { sistem: 1, durustluk: 1, slayt: true } },
{ t: "Sunuma başlamadan önce Hülya'ya bir söz verirsin.", to: "t4", etki: { sefkat: 1, hulya_soz: true } }
]},

t4: { saat: "Saat 0", baslik: "Yeni Nöbet", metin: [
P(S("t3A"), "Anlattın. Otuz bir saati, Kerem'in burnunu, Nurten Hanım'ın “kızarmıştım” deyişini, sekmeyi, “yok”u. Amfi çıt çıkarmadı. Bitince kimse soru sormadı. Sonra arka sıradan biri alkışlamaya başladı. Hülya. Sonra bir başkası. Bir M&M toplantısında daha önce hiç kimse alkışlanmamıştı."),
P(S("t3B"), "Teknik sundun. Kök neden analizi, balık kılçığı diyagramı, yedi öneri. İyi bir sunumdu. Levent Hoca başını salladı. Sonunda bir asistan sordu: “Peki siz nasılsınız?” Cevap vermedin. Soruyu duymamış gibi yaptın."),
P(S("t3C"), "Son slayt: “Bu olabilirdi: sizin nöbetinizde.” Amfide bir sessizlik. Sonra Kerem ayağa kalktı. “Benim nöbetimde olabilirdi,” dedi. Sonra bir başkası. Bir başkası. On iki kişi ayağa kalktı."),
P(S("t3D"), "Hülya'ya söz verdin: “Bundan sonra her alerjiyi iki kez soracağım. Bir kez sana, bir kez ekrana.” Hülya başını salladı. “Ben de,” dedi. “Ben de iki kez soracağım.”"),
"Sabah sekiz. Yeni bir nöbet başlıyor. Yirmi dört saat; bu kez yalnızca yirmi dört. Bir değişiklik olmuş; küçük, ama olmuş. Yönetim bir hafta önce yeni bir genelge yayınladı: “Asistanların kesintisiz çalışma süresi yirmi dört saati geçemez.” Kâğıt üstünde.",
P(function(d){ return d.yazi || d.itiraf || d.kol === "sistem"; }, "Ve bilgi sisteminde bir değişiklik: alerji sekmesi artık kırmızı. Bir alerji varsa, order yazılmadan önce ekranın ortasında bir pencere açılıyor: “DİKKAT: Hastanın kayıtlı alerjisi var.” Kapatmak için bir neden yazmak gerekiyor."),
"Bekleme salonunda yüz kişi. İlk hastanı çağırıyorsun. Yaşlı bir adam; ateş, öksürük. Muayene ediyorsun. Akciğerde ral. Pnömoni.",
"Hülya yanına geliyor. “Hocam, antibiyotik ne yazıyoruz?”",
"Ve sonra, alışkanlıkla, bir refleksle, bir yaranın öğrettiği bir şeyle, sen soruyorsun, Hülya'dan önce:",
"“Alerjisi var mı?”"
], secenekler: [
{ t: "Sekmeyi açarsın. Sonra hastaya sorarsın. Sonra gelinine. Sonra yeniden sekmeyi.", to: "ss", etki: { durustluk: 1 } },
{ t: "Hülya'ya bakarsın. Birlikte kontrol edersiniz.", to: "ss", etki: { sistem: 1 } },
{ t: "Hastanın elini tutarsın ve yavaşça, net bir sesle sorarsın: “Hiç bir ilaçtan kızardınız mı?”", to: "ss", etki: { sefkat: 1, kizardiniz: true } },
{ t: "Bir an durursun. Otuz altı saat önceki bir an gibi. Sonra devam edersin.", to: "ss", etki: { durustluk: 1, sefkat: 1 } }
]},

ss: { yonlendir: [
{ if: function(d){ return d.istifa && !d.gevsedi; }, to: "son_birak" },
{ if: function(d){ return d.kol === "ortbas" && !d.ortaya; }, to: "son_sessiz" },
{ if: function(d){ return d.kol === "sistem" && !d.ortaya; }, to: "son_sistem" },
{ if: function(d){ return d.kol === "acik" || d.durustluk >= 8; }, to: "son_acik" },
{ to: "son_nobet" }
]},

/* ---------- SONLAR ---------- */
son_acik: { son: true, baslik: "Açık Kayıt", metin: [
"Söyledin. Aileye, kuruma, bir amfi dolusu insana. Kendi hatanı, kendi adınla.",
P(function(d){ return d.itiraf || d.savundu; }, "Disiplin soruşturması üç ay sürdü. Bir kınama cezası aldın. Asistanlığına devam ediyorsun; ama dosyanda bir not var, bir ömür sürecek."),
"Oğuz'un açtığı dava hâlâ sürüyor. Hastane avukatı Sinem Hanım bir gün koridorda yanına geldi: “Senin itirafın bizim aleyhimize en güçlü delil,” dedi. “Ama mahkemede hâkim bir şey söyledi. ‘Bu hekim yalan söylemedi. Bu dosyada en az yalan söyleyen o.’ Bunu bilmeni istedim.”",
P(YASADI, "Nurten Hanım her bayram acil servise bir tepsi börek gönderiyor. Üstünde bir not yok. Hülya her seferinde bir dilimini sana ayırıyor."),
P(OLDU, "Oğuz bir gün, mahkeme koridorunda, yanına geldi. Bir şey söylemedi. Elini uzattı. Sıktın. Sonra gitti. Bunun ne anlama geldiğini hiç bilmeyeceksin. Belki hiçbir şey. Belki her şey."),
"Hata yaptığını söylemek seni temize çıkarmadı. Hiçbir zaman çıkarmayacak. Ama bir şey yaptı: hatanın bir sır olarak, bir yara olarak, bir hastane koridorunun duvarında bir leke olarak kalmasını engelledi. Hatan şimdi görünür. Herkesin görebileceği bir yerde. Ve görünür olan bir hata, düzeltilebilir.",
"Her nöbetin başında aynı soruyu soruyorsun. İki kez. Bir kez ekrana, bir kez hastaya. Bir gün bir asistan sana bunun neden bu kadar önemli olduğunu soracak. Ve sen ona otuz bir saati anlatacaksın."
]},

son_sessiz: { son: true, baslik: "Sessiz Düzeltme", metin: [
"Kimse bilmiyor. Dosyada “seftriakson sonrası beklenmedik reaksiyon” yazıyor. Log kayıtları bir sunucuda; kimse bakmadı, kimse bakmayacak. Belki bir gün.",
"Hülya bilmiyor mu? Biliyor. Bir daha seninle aynı nöbete yazılmadı. Kendisi istedi.",
P(YASADI, "Nurten Hanım yaşadı. Bir sabah acil serviste gördün onu; kontrole gelmiş, gelininin koluna girmiş. Seni görünce gülümsedi. Tanımadı. “Kızım,” dedi, “sen ne güzel bir doktorsun.” Teşekkür ettin. Yüzün kızardı. Ama o fark etmedi."),
P(OLDU, "Nurten Hanım öldü. Oğuz bir dava açmadı; “beklenmedik reaksiyon” diye. Bir doktor ne yapabilir ki? Annesini Kartal'a gömdü. Senin adını hiç öğrenmedi."),
"Asistanlığını bitirdin. Uzman oldun. Şimdi kendi asistanların var. Onlara iyi bir hoca olduğunu düşünüyorsun; dikkatli, titiz, alerji sekmesini her seferinde açtıran.",
"Ama bir gün bir asistanın, gece üçte, sana bir şey anlatmaya geliyor. Gözleri kızarık. “Hocam, bir order'da bir hata yaptım. Hasta iyi. Ama... ne yapmalıyım?”",
"Ve sen, bir an, Levent Hoca'nın cümlesini söylemek üzeresin: “Bir şey yazma. Ben hallederim.” Cümle ağzında. Tanıdık. Rahatlatıcı.",
"Bir sessizliğin nasıl öğretildiğini, ve nasıl kuşaktan kuşağa geçtiğini, o gece, kendi ağzında hissediyorsun."
]},

son_sistem: { son: true, baslik: "Sistem", metin: [
"Bildirimin bir şeyi değiştirdi. Alerji sekmesi artık kırmızı; bütün Türkiye'de, bir bakanlık güncellemesiyle. Asistan nöbetleri yirmi dört saatle sınırlandı; kâğıt üstünde, ama sınırlandı. Acil servise iki yeni kadro verildi.",
"Hasta güvenliği komitesi senin bildirimini bir “örnek vaka” olarak eğitim materyaline koydu. Her yeni asistan okuyor. İsmin yok; “Asistan A” yazıyor.",
"Bireysel kusur tespit edilmemiştir.",
"Bu cümle seni kurtardı. Bu cümle yüzlerce gelecek hastayı kurtaracak bir değişikliğin başlangıcı oldu. Bu cümle doğru: bir sistem bir hatayı üretti; sen o sistemin bir parçasıydın.",
"Ama bu cümle bir şeyi de sildi: senin adını. Senin elini. Senin “yok” deyişini.",
P(function(d){ return d.yonlendirdi || d.kacti; }, "Oğuz bir gün sana “Kim yazdı?” diye sordu. Ona cevap vermedin. Bir sistemin arkasında durdun; bir sistemin, bir insanın sorusuna cevap veremeyeceğini bile bile."),
"Sistemler değişir; bunu öğrendin. Ama sistemler bir insanın yüzüne bakıp “ben yaptım” diyemez. Bunu ancak bir insan yapabilir. Ve sen, sistemin değişmesini sağlarken, o cümleyi kimseye söylemedin.",
"Belki ikisi birden olamazdı. Belki sen bir şeyi seçtin: geleceğin hastalarını, geçmişin hastasına tercih ettin. Bu bir faydacılık hesabı. Doğru bir hesap. Ama Nurten Hanım'ın adı hesapta değil."
]},

son_birak: { son: true, baslik: "Bırakış", metin: [
"Bir ay sonra Levent Hoca dilekçeni imzaladı. Bir şey söylemedi. Kapıda elini sıktı. “Yazık,” dedi. “İyi bir hekimdin.” Geçmiş zaman.",
"Şimdi bir ilaç firmasında tıbbi danışmansın. Ofis, bilgisayar, toplantılar. Kimse sana gece üçte telefon etmiyor. Kimse yumruk atmıyor. Kimse bir sekmenin açılmamasından ölmüyor.",
"Maaşın iki katı. Uykuların düzelmedi.",
"Kerem'le ayda bir buluşuyorsunuz. O da bıraktı. İkiniz, bir kafede, eski nöbet hikâyeleri anlatıyorsunuz. Bazıları komik. Çoğu değil. Bir gün Kerem diyor ki: “Biliyor musun, bizim sınıftan on iki kişi bıraktı. Otuz kişilik sınıf. On iki.” Bir sistem, kendi doktorlarını tüketiyor; ve tükenmiş doktorlar hata yapıyor; ve hata yapan doktorlar bırakıyor.",
P(OLDU, "Bazen Kartal'dan geçiyorsun. Bir mezarlığın önünden. Durmuyorsun. Ama yavaşlıyorsun."),
P(YASADI, "Bir gün bir markette yaşlı bir kadın gördün. Gelininin koluna girmiş. Nurten Hanım'a benziyordu. Belki oydu. Belki değil. Dönüp bakmadın."),
"Bıraktığın şey bir meslek. Bırakamadığın şey bir an: otuz bir saat, bir ekran, bir soru, bir “yok”. O an seninle geldi; ilaç firmasına, kafeye, yatağına.",
"Bir gün belki geri dönersin. Bir aile hekimliğine; Kerem gibi. Belki dönmezsin. Ama her ilaç kutusunun prospektüsünü okurken, alerji bölümüne geldiğinde, bir an duruyorsun. Hâlâ."
]},

son_nobet: { son: true, baslik: "Yeniden Nöbet", metin: [
"Nöbetlere devam ediyorsun. Her gün, her gece. Yüzlerce hasta. Binlerce order. Her birinde, alerji sekmesi.",
"Ne tam olarak söyledin ne tam olarak sakladın. Bir yerde bir şey söyledin, bir yerde sustun. Bir insanın bir hatayla yaşamasının çoğu zaman böyle olduğunu öğrendin: ne tam bir itiraf, ne tam bir yalan. Bir ara bölge. Gri bir sekme.",
P(YASADI, "Nurten Hanım yaşıyor. Bu senin şansın. Bir refleks, bir saniye. Aynı hatayı yapan bir başkası katil olabilirdi; sen olmadın. Bunu hak etmedin. Ama oldu."),
P(OLDU, "Nurten Hanım öldü. Bu senin şanssızlığın. Bir donma, bir saniye. Aynı hatayı yapan bir başkası onu kurtarabilirdi; sen kurtaramadın. Bunu hak etmedin. Ama oldu."),
"Babanın cümlesi aklında: “Bir hata bir insanı ya kırar ya da dikkatli yapar. İkisi birden de olabilir.”",
"Sen ikisi birden oldun. Kırık ve dikkatli. Bazı geceler kırık yanın ağır basıyor; uyanıp tavana bakıyorsun. Bazı sabahlar dikkatli yanın; bir asistanın order'ını iki kez okuyup bir hatayı yakalıyorsun ve o asistan hiçbir zaman ne kadar yakın olduğunu bilmiyor.",
"Bu meslekte kimse kusursuz değil. Bunu herkes söyler. Ama bunu kendi bedeninde, kendi elinde, kendi “yok” deyişinde öğrenmek başka. Bunu öğrendin. Ve her nöbetin başında, otuz altı saatin ağırlığını taşıyarak, bir kez daha soruyorsun:",
"“Alerjisi var mı?”"
]}

},

ayna: function(d){
  var out = [];
  var a = d.durustluk, b = d.sistem, c = d.sefkat;
  if(a >= b && a >= c) out.push("Bu hikâyede en çok dürüstlüğe yaslandın: kendi hatanı kendi adınla söylemeye. Dürüstlük seni temize çıkarmadı; ama hatanı görünür kıldı. Görünür olan bir hata, bir sırdan daha az ağır mıdır? Bunu ancak yıllar söyleyecek.");
  else if(b >= c) out.push("Bu hikâyede en çok sisteme baktın: otuz altı saate, gri sekmeye, eksik kadroya, yumruğa. Bir hatanın tek bir insanın değil, bir yapının ürünü olduğunu gösterdin. Bu doğru. Ama bir sistemin arkasında, her zaman, bir insanın eli de vardır.");
  else out.push("Bu hikâyede en çok şefkate yaslandın: Kerem'e, Hülya'ya, babana, belki sonunda kendine. Kendine şefkat göstermek bir bahane mi, bir iyileşme mi? Bu sorunun cevabı, şefkatin ne yaptığında: seni sustururken mi, yoksa ayağa kaldırırken mi?");
  if(d.kol === "ortbas" && !d.ortaya) out.push("Bir kaydı değiştirdin ve kimse bilmedi. Bir yalanın en ağır yanı, söylenmesi değil; her gün yeniden söylenmesidir.");
  if(d.gecikme) out.push("Bir arkadaşın yanında kaldın; o kırk dakika, bir sistemin içinde başka bir yerde eksik kaldı. İyilik bile bir bedel taşıyor.");
  if(d.erken_adrenalin) out.push("Bir saniyelik bir refleks, bir hayatı kurtardı. Bu seni iyi bir hekim mi yapar, yoksa yalnızca şanslı mı?");
  if(!d.erken_adrenalin) out.push("Bir saniyelik bir duraksama. Aynı hatayı yapan bir başkası daha hızlı olabilirdi. Ahlaki şans, en çok, sonucun sizin elinizde olmadığını bildiğinizde acıtır.");
  return out;
},

dipnot: [
{ ad: "Tıbbi hata ve dürüstlük", t: "Araştırmalar, tıbbi hataların büyük çoğunluğunun bireysel ihmalden değil, sistem tasarımından kaynaklandığını gösterir (Lucian Leape, “To Err Is Human” raporu, 1999). Ama hastalar ve aileler, açıklama ve özür alamadıklarında en çok yaralanır. Birçok ülkede “açık bildirim” (open disclosure) politikaları, hekimlerin hatalarını aileye açıklamasını teşvik eder; hukuki korkular ise bunu zorlaştırır." },
{ ad: "Ahlaki şans", t: "Bernard Williams ve Thomas Nagel'in tartıştığı bu kavram, bir insanın ahlaki değerlendirmesinin kontrolü dışındaki sonuçlara bağlı olmasını sorgular. Aynı dikkatsizliği yapan iki sürücüden yalnızca birinin önüne bir çocuk çıkar. Biri “katil”, öbürü değil. Ama ikisinin yaptığı aynıydı. Hukuk sonuca bakar; vicdan ise neye bakmalı?" },
{ ad: "Birey ve sistem", t: "James Reason'ın “İsviçre peyniri modeli”, bir hatanın, her biri kendi deliği olan birçok savunma katmanının delikleri aynı hizaya geldiğinde gerçekleştiğini söyler: yorgunluk, tasarım, iletişim, personel. Ama sistem odaklı yaklaşım, bireysel sorumluluğu ortadan kaldırmaz; yalnızca onu yalnız bırakmaz." },
{ ad: "Kendini affetmek ve ikinci kurban", t: "Albert Wu, tıbbi hatalara karışan sağlık çalışanlarını “ikinci kurban” olarak tanımladı: suçluluk, uykusuzluk, depresyon, meslekten ayrılma. Kendini affetmek, hatayı küçümsemek değildir; hatayla birlikte yaşamaya devam edebilmenin, ve bir sonraki hastaya bakabilmenin koşuludur." }
]
});
})();
