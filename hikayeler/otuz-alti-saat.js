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
kategoriler: ["Sağlık ve Tıp"],
giris: "İstanbul'da bir eğitim hastanesinin acil servisi. Sen üçüncü yılında bir asistansın ve otuz altı saatlik bir nöbetin ortasındasın. Bekleme salonunda yüz yirmi kişi var, bir arkadaşın az önce yumruklandı, gözlerin yorgunluktan kapanıyor. Otuz birinci saatte, ekranda açmadığın tek bir sekme her şeyi değiştirecek. Bir hatanın, bir sistemin ve bir insanın kendisiyle yaşamaya devam edip edemeyeceğinin hikâyesi.",
kavramlar: ["Tıbbi hata ve dürüstlük", "Ahlaki şans", "Birey ve sistem", "Kendini affetmek"],
ozet: "Acil serviste otuz birinci saatindesin. Yorgunluktan ekrandaki bir sekmeyi açmadın. Yetmiş dört yaşında bir kadın, senin yazdığın bir ilaçla yoğun bakımda. Şimdi kimse bilmiyor. Henüz.",
baslangic: "a1",
durum: { durustluk: 0, sistem: 0, sefkat: 0 },

sahneler: {

a1: { saat: "Saat 24 · Sabah 08.00", baslik: "İkinci Gün", metin: [
"Dün sabah sekizde başladın. Şimdi yine sabah sekiz. On iki saat daha var: yirmi dört saatlik nöbet, artı devir teslim, artı raporlu bir arkadaşın yerine kalman. Otuz altı.",
"Adın Selin, yirmi dokuz yaşındasın, acil tıp asistanısın. Üçüncü yıl. Bekleme salonunda yüz yirmi kişi. Koridorda sedyeler, sedyelerde hastalar, yanlarında poşetler, termoslar, bir kafeste muhabbet kuşu. Üç asistan, bir uzman, altı hemşire.",
"Gözlerinin arkasında bir basınç. Gece bir ara, dört dakika, bir sandalyede uyumuşsun. Uyandığında elinde hâlâ bir kalem vardı, nerede olduğunu otuz saniye hatırlayamadın.",
"Telefonda babandan dün geceden kalma bir mesaj: “Kızım yemek yedin mi?” Cevap vermedin. Yemedin.",
"Hemşire Gönül, yirmi yıllık acil hemşiresi, yanından geçerken cebine bir çikolata sokuyor. “Ye,” diyor. “Yoksa yere yığılırsın, seni de ben kaldırırım, belim ağrıyor.”",
"Bir monitör ötüyor. Bir ambulans. Bir çocuk ağlıyor. Biri bağırıyor: “Doktor! Doktor!”"
], secenekler: [
{ t: "Çikolatayı yiyip işe dalarsın.", to: "a2", etki: { sefkat: 1 } },
{ t: "Babana kısa bir mesaj atarsın: “Yedim baba.”", to: "a2", etki: { sefkat: 1, babaya_yalan: true } },
{ t: "Haluk Hoca'ya gidip dinlenmen gerektiğini söylersin. Yerine kimse yok. Yükün Ufuk'a kalacak.", to: "a2", etki: { sistem: 1, dinlenme_istedi: true } },
{ t: "Yüzünü soğuk suyla yıkayıp aynaya bakarsın.", to: "a2", etki: { durustluk: 1, ayna: true } }
]},

a2: { saat: "Saat 28 · 12.10", baslik: "Yumruk", metin: [
P(S("a1A"), "Çikolatanın yarısını yedin. Öbür yarısı cebinde eridi. Bir saat sonra bir tansiyon aletinin cırt cırtını açarken parmakların yapış yapıştı."),
P(S("a1B"), "“Yedim baba.” Bir dakika sonra: “Aferin kızım. Uyu biraz.” İkiniz de birer yalan söylemiştiniz. O da uyumadığını biliyordu."),
P(S("a1C"), "Haluk Hoca dinledi. “Hepimiz yorgunuz Selin. Ben de otuz saattir buradayım. Dayan.” Haklıydı. Bu durumu düzeltmiyordu."),
P(S("a1D"), "Aynada bir kadın: gözaltları mor, saçı tokadan kurtulmuş, önlükte kurumuş bir kan lekesi. Kimin, hatırlamıyorsun. Yüzünü bir daha yıkadın."),
"Öğlen on iki on. Sarı alanda bağrışma. Koşuyorsun.",
"Kırklarında bir adam, asistan arkadaşın Ufuk'un yakasına yapışmış. “Üç saattir bekliyoruz! Babam ölüyor!” Babası bir sedyede. Göğüs ağrısı, EKG normal, tetkikler bekleniyor. Ufuk bir şey söylüyor. Adam duymuyor.",
"Sonra bir yumruk. Ufuk geriye savrulup bir sedyeye çarpıyor, yere düşüyor. Burnundan kan.",
"Herkes donuyor. Sonra çığlıklar. Güvenlik geliyor. Çok uzaktan, çok yavaş.",
"Adam hâlâ bağırıyor. Ufuk yerde, elini yüzüne kapatmış. Muhabbet kuşu kafeste deli gibi çırpınıyor."
], secenekler: [
{ t: "Ufuk'un yanına koşarsın.", to: "x_kerem", etki: { sefkat: 1 } },
{ t: "Güvenliğe bırakırsın. Triyaja dönersin. Kırk hasta bekliyor.", to: "a3", etki: { sistem: 1, triyaj: true } },
{ t: "Adamın karşısına geçersin.", to: "x_kavga", etki: { durustluk: 1 } },
{ t: "Personel tuvaletine girip kapıyı kilitlersin. İki dakika. Sadece iki dakika.", to: "a3", etki: { sefkat: 1, tuvalet: true } }
]},

x_kerem: { saat: "Saat 28 · 12.20", baslik: "Ufuk", metin: [
"Ufuk'u personel odasına götürüyorsun. Burnu kanıyor. Kırık olabilir. Buz, gazlı bez, bir sandalye. Ufuk titriyor.",
"“Bırakacağım,” diyor, burnu tıkalı. “Yemin ederim Selin. Babam istedi diye tıp okudum. Şimdi bir adam beni yumrukluyor çünkü babası üç saat bekledi. Üç saat! Ben otuz saattir bekliyorum.”",
"Ağlıyor. Gazlı bez kandan ve gözyaşından pembeleşiyor.",
"Polis geliyor. İfade. Bir memur iki parmakla yazıyor, her cümleyi iki kez soruyor. “Darp eden şahsın boyu?” Kırk dakika.",
"Kırk dakika boyunca sarı alanda bir asistan eksik.",
"İfade bitince Ufuk sana bakıyor. “Sağ ol,” diyor. “Sen olmasan...” Bitirmiyor.",
"Sarı alana dönüyorsun. Bekleyen sayısı kırk değil, elli iki."
], secenekler: [
{ t: "Ufuk'a eve gitmesini söylersin. Onun hastalarına da sen bakacaksın.", to: "a3", etki: { sefkat: 1, gecikme: true, keremi_gonderdi: true } },
{ t: "“Bırakma,” dersin. “Bunu yapan biz değiliz.”", to: "a3", etki: { sistem: 1, gecikme: true } },
{ t: "Ufuk'la biraz daha oturursun. Elli iki kişi bekleyebilir mi?", to: "a3", etki: { sefkat: 1, gecikme: true, uzun_kaldi: true } },
{ t: "Bir şey demeden işe dönersin.", to: "a3", etki: { gecikme: true } }
]},

x_kavga: { saat: "Saat 28 · 12.12", baslik: "Ön", metin: [
"Ufuk ile adamın arasına giriyorsun. Bir altmış beşsin. Adam senden bir baş uzun, nefesi sigara kokuyor.",
"“Geri çekilin,” diyorsun. Sesin titremiyor. Bunu sonra hatırlayıp şaşıracaksın.",
"“Sen de mi? Doktor değil kasapsınız! Babamı burada öldüreceksiniz!”",
"Bir el göğsüne değip itiyor. Bir sedyenin kenarına çarpıyorsun. Acıtmıyor. Ya da acıtıyor ve hissetmiyorsun.",
"Güvenlik yetişiyor. İki görevli adamı kollarından tutuyor. Adam bağırıyor: babasının adını, hastanenin adını, bir milletvekilinin adını.",
"Ufuk yerde, kanlar içinde. “Delisin,” diyor. Sonra: “Sağ ol.”",
"Ellerine bakıyorsun. Titriyor. Durmuyor. Adrenalin çekilirken geriye bir boşluk bırakıyor. Yirmi sekiz saatin üstüne."
], secenekler: [
{ t: "Ellerinin titremesi geçene kadar beş dakika oturursun.", to: "a3", etki: { sefkat: 1, titreme: true } },
{ t: "Titreyen ellerle işe dönersin. Elli hasta.", to: "a3", etki: { sistem: 1, titreme: true, devam: true } },
{ t: "Adamın babasına gidersin. Üç saattir bekleyen göğüs ağrılı hasta.", to: "a3", etki: { durustluk: 1, titreme: true, babaya_bakti: true } },
{ t: "Haluk Hoca'yı bulup ne olduğunu anlatırsın.", to: "a3", etki: { sistem: 1, titreme: true } }
]},

a3: { saat: "Saat 31 · 15.00", baslik: "Nurten Hanım", metin: [
P(S("x_keremB"), "“Bırakma,” dedin. Ufuk gazlı bezi burnuna bastırdı. Yarım saat sonra sarı alandaydı. Morarmış burnuyla bir çocuğun boğazına bakıyordu, çocuk onun burnuna bakıyordu."),
P(S("x_keremC"), "Ufuk'la oturdun. Sivas'tan, annesinin tandırından, bir gün aile hekimi olma hayalinden bahsetti. Döndüğünde Gönül kapıdaydı: “Neredesin? Elli beş oldu.”"),
P(S("x_keremD"), "Bir şey demeden çıktın. Kapıda Ufuk'un arkandan baktığını hissettin."),
P(S("x_kavgaA"), "Beş dakika oturdun. Titreme geçmedi. Yalnızca küçüldü, içeri çekildi."),
P(S("x_kavgaB"), "Titreyen ellerle ilk hastanın damarını iki kez kaçırdın. Gönül bir şey demeden iğneyi elinden aldı."),
P(S("x_kavgaC"), "Adamın babasına gittin. EKG normaldi. Yaşlı adam bileğini tuttu: “Oğlum öyle değil aslında kızım. Korkuyor. Annesini burada kaybettik.”"),
P(S("x_kavgaD"), "Haluk Hoca dinledi. “Güvenlik tutanak tutar. Şikâyet edersen sen de mahkemelere düşersin. Değer mi?” Cevap beklemedi."),
P(S("a2B"), "Triyaja döndün. Arkanda güvenlik adamı götürüyordu, Ufuk yerdeydi. Dönüp bakmadın. Kırk hasta."),
P(S("a2D"), "Tuvaletin kapısına yaslanıp yere oturdun. Ağlamadın. Gücün yoktu. Gözlerini kapadın. Biri kapıyı yumrukladı: “Selin! Kırmızı alan!”"),
P(function(d){ return d.keremi_gonderdi; }, "Ufuk eve gitti. Onun hastaları da şimdi senin."),
"Saat üç. Sarı alan, yedinci sedye. Nurten Hanım, yetmiş dört. Ateş, öksürük, nefes darlığı. Grafide sağ alt lobda bir gölge. Pnömoni.",
"Gelini yanında, kucağında kayınvalidesinin el çantası. “Hocam, annem biraz karışık bugün. Ateşten. Normalde turp gibidir.”",
"Nurten Hanım mırıldanıyor: “Kızım... o ilaç... bir keresinde kızarmıştım...” Gelin elini okşuyor: “Tamam anneciğim, doktor hanım bilir.”",
"Ekranda dosya. Üstte sekmeler: Genel. Tahliller. Görüntüleme. Notlar. Alerjiler. Sistem güncellemesinden beri hiçbiri kırmızı değil. Hepsi aynı gri.",
"Gönül yanında: “Hocam, antibiyotik ne yazıyoruz? Alerjisi var mı?”",
"Gözlerin ekranda. Alerjiler sekmesine tıklamıyorsun. Bir önceki hasta aklında: o da yaşlıydı, o da pnömoniydi, onun alerjisi yoktu.",
"“Yok,” diyorsun. “Ampisilin-sulbaktam. Damardan.”",
"Gönül order'ı alıp gidiyor. Sen sekizinci sedyeye geçiyorsun."
], secenekler: [
{ t: "Sekizinci sedyeye geçersin. Göğüs ağrısı bekleyemez.", to: "a4", etki: { sistem: 1 } },
{ t: "Bir an durursun. Bir şey mi unuttun? Hatırlayamazsın. Devam edersin.", to: "a4", etki: { durustluk: 1, his: true } },
{ t: "Geline sorarsın: annesi neyi kastetti?", to: "a4", etki: { durustluk: 1, gelin_soru: true } },
{ t: "Cebindeki erimiş çikolatanın kalanını yersin. Ellerin titriyor.", to: "a4", etki: { sefkat: 1 } }
]},

a4: { saat: "Saat 31 · 15.20", baslik: "Kod", metin: [
P(S("a3A"), "Sekizinci sedye: göğüs ağrısı, EKG, troponin. Nurten Hanım'ın dosyası arkanda bir yerde kapanmıştı."),
P(S("a3B"), "Bir şey unutmuştun. Dilinin ucunda bir kelime gibi. Bulamadın. Yirmi dakika sonra bir sesle geri gelecekti."),
P(S("a3D"), "Erimiş çikolatayı ambalajdan yaladın. Tadı bir saniye dilinde kaldı."),
P(S("a3C"), "“Neyi kastetti annen?” Gelin omuz silkti. “Bilmiyorum hocam, yıllar önce bir şey olmuş galiba.” Sonra telefonu çaldı. Cümle havada kaldı."),
"Yirmi dakika sonra Gönül'ün sesi koridorun öbür ucundan. Hiç duymadığın bir tonla: “Selin! Yedi!”",
"Koşuyorsun. Nurten Hanım'ın yüzü kıpkırmızı, dudakları şişmiş. Boynunda, kollarında kabarıklar. Her nefes bir ıslık. Tansiyon: yetmiş bölü kırk. Altmış. Elli.",
"Anafilaksi. Sınavlarda cevapladın, bir kez gördün.",
"Serumu kapatıyorsun.",
"Gelin çığlık atıyor. Gönül oksijeni açıyor. Biri acil arabasını getiriyor. Tekerleği sıkışıyor, tekmeyle kurtarıyor. Herkes sana bakıyor.",
"Otuz bir saattir ayaktasın. Doğru dozu düşünüyorsun. Bir saniye, iki saniye."
], secenekler: [
{ t: "Düşünmeden adrenalini kas içine yaparsın. Şimdi. Kitaptaki gibi.", to: "a5", etki: { erken_adrenalin: true, durustluk: 1 } },
{ t: "Önce damar yolundan adrenalin hazırlatırsın. Dozu Gönül'le birlikte hesaplayarak.", to: "a5", etki: { sistem: 1, gec_adrenalin: true } },
{ t: "Haluk Hoca'yı çağırtırsın. Bir uzman gerek.", to: "a5", etki: { sistem: 1, levent_cagrildi: true } },
{ t: "Donup kalırsın. Gönül'ün sesiyle kendine gelirsin.", to: "a5", etki: { dondu: true } }
]},

a5: { saat: "Saat 32 · 15.50", baslik: "Sekme", metin: [
P(S("a4B"), "Damar yolundan hazırlattın. Dozu Gönül'le iki kez hesapladınız. Doğruydu. Ama hesap dakikalar sürdü ve o dakikalarda Nurten Hanım'ın dudakları morardı."),
P(S("a4C"), "Haluk Hoca'nın gelmesi dört dakika sürdü. Dört dakika Gönül sana baktı, sen kapıya. Adrenalini Haluk Hoca yaptı."),
P(S("a4D"), "Donup kaldın. Bir, üç saniye. “Selin!” Sonra ellerin kendiliğinden hareket etti. Kitaptaki gibi, ama geç."),
P(YASADI, "İğne bacağa girdi. Bir dakika. İki. Islık azaldı. Tansiyon yükseldi, düştü, yükseldi. Damardan ikinci doz. Steroid, antihistaminik, sıvı. Kalbi durmadı."),
P(OLDU, "Doz hesaplandı, hazırlandı, verildi. Hava yolu kapanmıştı. Kalbi durdu. Kalp masajı on iki dakika; Gönül, sen, bir başka asistan, sırayla. Kaburgalar kırıldı. Hep kırılır. On ikinci dakikada nabız geldi."),
"Entübe. Yoğun bakım.",
"Sedye gidiyor. Yedinci sedyenin yeri boş. Yerde enjektör kapakları, buruşuk bir çarşaf, gelinin düşürdüğü el çantası. Gelin koridorda telefonda ağlıyor.",
"Bilgisayara dönüyorsun. Not yazman gerek.",
"Ve refleksle, belki bir önseziyle: Alerjiler sekmesine tıklıyorsun.",
"“PENİSİLİN. Reaksiyon: anafilaksi (2019, Kartal Devlet Hastanesi). Kesinlikle verilmemeli.”",
"Ampisilin bir penisilin.",
"Bir daha okuyorsun. Kelimeler yerinden oynamıyor.",
"Arkanda bir nefes. Gönül. O da ekrana bakıyor."
], secenekler: [
{ t: "Bir sandalyeye çökersin.", to: "a6", etki: { sefkat: 1 } },
{ t: "Lavaboya koşup kusarsın.", to: "a6", etki: { durustluk: 1, kustu: true } },
{ t: "Gönül'e dönersin: “Sen de gördün.”", to: "a6", etki: { durustluk: 1, hulya_gordu: true } },
{ t: "Ekranı kapatırsın. Bir anlığına. Düşünmek için.", to: "a6", etki: { ekran_kapatti: true } }
]},

a6: { saat: "Saat 33 · 17.00", baslik: "Seçim", metin: [
P(S("a5A"), "Sandalyeye çöktün. Gönül elini omzuna koydu. Bir şey demedi. Eli ağırdı."),
P(S("a5B"), "Kustun. Midende yalnızca çikolata ve kahve vardı. Lavabonun aynasında sabahki kadın."),
P(S("a5C"), "Gönül'ün yüzü bembeyazdı. “Ben de sordum,” dedi. “Sen yok dedin. Ben bakmadım. İkimiz de.” Bu kelime seni hafifletti mi, bilmiyorsun."),
P(S("a5D"), "Ekranı kapattın. Kararmış ekranda yansıman. Sekmenin hiç açılmadığı bir dünya. Sonra Gönül uzanıp ekranı yeniden açtı. “Hocam,” dedi. Başka bir şey demedi."),
"Saat beş. Acil hâlâ dolu.",
"Yoğun bakım arıyor: Nurten Hanım stabil ama ağır. Bilinci kapalı. Kırk sekiz saat belirleyici.",
"Dosyada order kaydı: ampisilin-sulbaktam, 15.04, Dr. Selin Acar. Alerji kaydı: penisilin, 2019. Aynı dosyada, iki ayrı sekmede.",
"Hastanede bir “olay bildirim sistemi” var. Kâğıt üstünde. Asistanlar arasında bir söz: “Bildirirsen sen yanarsın, bildirmezsen hasta.”",
"Koridorda gelin ve bir adam: Nurten Hanım'ın oğlu Oğuz, işten koşarak gelmiş, kravatı yamuk, elinde bir poşet portakal. Sana doğru yürüyorlar."
], secenekler: [
{ t: "Oğuz'a ve geline şimdi, burada, her şeyi söylersin. Kariyerini, belki diplomanı bir koridorda ortaya koyarak.", to: "h1", etki: { durustluk: 2, kol: "acik" } },
{ t: "Önce Haluk Hoca'ya gidersin. Ama ailenin ilk duyacağı şeyi artık sen belirlemeyeceksin.", to: "b1", etki: { sistem: 1, kol: "hiyerarsi" } },
{ t: "Order'ı sistemde düzeltirsin. İlacın adını. Kimse fark etmeyecek. Gönül dışında, belki.", to: "c1", etki: { kol: "ortbas" } },
{ t: "Bir olay bildirimi yazarsın. Asıl nedeni sistem olarak: otuz altı saat, sekmeler, kadro. Doğru. Ama ailenin karşısına çıkmadan.", to: "s1", etki: { sistem: 2, kol: "sistem" } }
]},

/* ---------- AÇIKLIK KOLU ---------- */
h1: { saat: "Saat 33 · 17.10", baslik: "Oğuz", metin: [
P(S("a6A"), "Onlara doğru yürüdün. Üç adım. Her adımda bir cümle kurup bozdun."),
P(S("b1B"), "“Aileye ben söylemek istiyorum hocam.” Haluk Hoca baktı. “Senin kararın. Ama yalnız gideceksin.”"),
P(S("c1C"), "Değişikliği geri aldın. Ekranda eski satır: ampisilin-sulbaktam, 15.04, Dr. Selin Acar. Sonra koridora yürüdün."),
P(S("c2A"), "“Haklısın,” dedin. Gönül kapıyı açıp bekledi. Kaydı geri aldın. Birlikte koridora yürüdünüz."),
"Oğuz kırk beş yaşlarında, yüzü bembeyaz. “Annem nasıl? Sabah iyiydi, öksürüyordu sadece.”",
"Boş bir odaya alıyorsun. Kapıyı kapatıyorsun. Oturmuyorlar. Portakal poşeti Oğuz'un elinde sallanıyor.",
"Kendi hatanı bir aileye nasıl söyleyeceğini kimse öğretmedi.",
"“Annenize bir antibiyotik verdik. Penisilin grubundan. Annenizin penisilin alerjisi vardı. Kayıtlarda yazıyordu. Ben bakmadım. Ben yazdım. Ağır bir alerjik reaksiyon gelişti. Şu an yoğun bakımda. Bu benim hatam.”",
"Oğuz'un yüzü değişmiyor. Anlamamış gibi. Gelin bir sandalyeye çöküyor. O anlamış.",
"Oğuz konuşuyor, çok alçak sesle: “Annemi siz mi... Bir ilaçla mı?”",
"Sonra sesi yükseliyor: “Kaç saattir buradasınız? Uyudunuz mu? Bu nasıl hastane?” Poşet elinden düşüyor. Portakallardan biri yuvarlanıp senin ayağına çarpıyor."
], secenekler: [
{ t: "“Otuz üç saattir,” dersin. “Ama bu bir bahane değil.”", to: "h2", etki: { durustluk: 1, saat_soyledi: true } },
{ t: "“Özür dilerim,” dersin. Başka bir şey eklemeden.", to: "h2", etki: { durustluk: 1, sefkat: 1, ozur: true } },
{ t: "“Hastane yönetimiyle de konuşmanız gerekecek. Bu bir kurum meselesi de,” dersin.", to: "h2", etki: { sistem: 1 } },
{ t: "Oğuz'un öfkesine izin verirsin.", to: "h2", etki: { sefkat: 1 } }
]},

h2: { saat: "Ertesi gün", baslik: "Avukat", metin: [
P(S("b3A"), "Sabah ilk iş Oğuz'u buldun. Yoğun bakımın kapısında, dünkü gömleğiyle. Dünkü “beklenmedik reaksiyon”un gerçeğini söyledin. Oğuz bir şey demedi. Öğlen avukatını aradı."),
P(S("h1C"), "“Hastane yönetimiyle konuşun,” dedin. Oğuz sana baktı. “Yani suçlu bir bina,” dedi, gitti."),
P(S("h1D"), "Oğuz bağırdı, duvara vurdu, sonra bir sandalyeye çöküp ağladı. Sen oradaydın. Bitince başını kaldırdı: “Hâlâ burada mısınız?” Evet. Portakalı yerden alıp ona uzattın. Almadı, sonra aldı."),
P(S("h1A"), "“Otuz üç saat,” dedi Oğuz. Öfkesi bir an başka bir yere döndü. Sonra geri geldi. “Bahane değil. Ama bu da doğru, değil mi?”"),
P(S("h1B"), "“Özür,” dedi Oğuz, kelimeyi tarttı, çıktı. Gelin arkasından gitmedi. “Annem sizi suçlamazdı,” dedi. “Hep doktorlara güvenirdi.” Bu cümle yumruktan ağır geldi."),
"Ertesi sabah hastane avukatı seni çağırıyor. Beşinci kat. Sinem Hanım, kırklarında. Masasında yarım bir simit, kâğıt peçeteye sarılı.",
"“Dün aileye ne söylediniz?”",
"Anlatıyorsun.",
"Sinem Hanım bir süre bir şey demiyor. Sonra: “Bunu yapmamalıydınız. Hata kabulü davada aleyhinize en güçlü delil. Bir dahaki sefere önce bize gelin.”",
"Sonra simidini kenara itiyor. “Yirmi yıldır bu işi yapıyorum. Hekimlerin çoğu söylemez. Hukuken hata yaptınız.” Duruyor. “Gerisini ben söyleyemem, avukatım.”",
"Masada bir dosya: Oğuz Bey bir avukat tutmuş."
], secenekler: [
{ t: "“Yine yapardım,” dersin.", to: "h3", etki: { durustluk: 1, yine_yapardim: true } },
{ t: "“Ne yapmam gerekiyor şimdi?” diye sorarsın.", to: "h3", etki: { sistem: 1 } },
{ t: "“Hastaneye zarar verdiysem özür dilerim,” dersin.", to: "h3", etki: { sistem: 1, kurum_ozur: true } },
{ t: "Oğuz Bey'le avukatsız konuşmak istediğini söylersin.", to: "h3", etki: { durustluk: 1, sefkat: 1, ogz_yeniden: true } }
]},

h3: { saat: "Üçüncü gün", baslik: "Yoğun Bakım", metin: [
P(S("h2A"), "“Yine yapardım.” Sinem Hanım kalemini bıraktı. “Bunu mahkemede söylemeyin,” dedi. Simidini yeniden aldı, ısırmadan tuttu."),
P(S("h2B"), "Sinem Hanım bir liste uzattı: ifade, savunma, bilirkişi. Hiçbirinde “Nurten” yazmıyordu."),
P(S("h2C"), "Sinem Hanım başını kaldırdı. “Özür dilemeniz gereken kişi bu katta değil. Yedinci katta.”"),
P(S("h2D"), "“Bunu öneremem,” dedi Sinem Hanım. “Durduramam da.” Akşam yoğun bakımın kapısında Oğuz'un yanına oturdun. Bir saat konuşmadınız. Sonra Oğuz: “‘Kızarmıştım’ demiştir. Hep öyle derdi. Kartal'da ölüyordu o zaman. Hep ‘kızardım’ derdi. Her şeyi küçültürdü.”"),
P(YASADI, "Üçüncü gün tüp çıkarılıyor. Gözlerini açıyor. Kafası karışık ama oğlunu, gelinini tanıyor. Bir hafta sonra servise, iki hafta sonra eve."),
P(YASADI, "Bir hafta sonra servise uğruyorsun. Nurten Hanım pencerenin önünde. Seni görünce gülümsüyor. Tanımıyor. “Sen de mi doktorsun kızım? Ne kadar gençsin. Bir şey ye, bak zayıfsın.”"),
P(OLDU, "Üçüncü gün beyin görüntüleri geliyor. On iki dakikalık durma. Beyin yeterince oksijen alamamış. Uyanmayacak."),
P(OLDU, "Beşinci gün aile cihazın kapatılmasına karar veriyor. Akşam. Oğuz annesinin elini tutuyor, gelin dua ediyor. Sen kapının dışındasın. Seni çağırmadılar. Gitmeni de istemediler."),
"Aynı hatayı yapan iki hekim: birinin hastası yaşar, öbürününki ölür. Hukuk ikincisine ceza verir. Senin hangisi olduğunu bir saniyelik bir refleks belirledi."
], secenekler: [
{ t: function(d){ return YASADI(d) ? "Nurten Hanım'a kim olduğunu söylersin." : "Yoğun bakımın kapısında Oğuz'u beklersin."; }, to: "t1", etki: function(d){ d.durustluk++; if(YASADI(d)) d.nurtene_soyledi = true; else d.kapida_bekledi = true; } },
{ t: function(d){ return YASADI(d) ? "“Evet teyze, doktorum,” dersin. Başka bir şey söylemeden." : "Hastaneden çıkıp yürürsün."; }, to: "t1", etki: function(d){ d.sefkat++; } },
{ t: "İki ihtimali düşünürsün: yaşaması, ölmesi. Hangisinin senin elinde olduğunu.", to: "t1", etki: { durustluk: 1, sans_dusundu: true } },
{ t: "Ufuk'u ararsın.", to: "t1", etki: { sefkat: 1, keremi_aradi: true } }
]},

/* ---------- HİYERARŞİ KOLU ---------- */
b1: { saat: "Saat 33 · 17.10", baslik: "Haluk Hoca", metin: [
"Haluk Hoca nöbetçi odasında. Elli yaşında, on beş yıldır bu acilde. Masasında yarısı içilmiş üç bardak çay. Seni görünce yüzü değişiyor.",
"Her şeyi anlatıyorsun. Sekme, order, reaksiyon, kod.",
"Dinliyor. Bitince pencereden dışarı bakıyor. Otoparkta biri arabasını iki yeri kaplayacak şekilde park etmiş.",
"“Selin, son beş yılda dört kez oldu bu. Sistem değişti, sekmeler renk kaybetti, uyarı penceresi kaldırıldı. Ben üç kez yazdım. Bilgi işleme, başhekimliğe. Kimse bir şey yapmadı.”",
"“Şimdi dinle. Bir şey yazma. Bildirim yazma. Dosyaya ‘beklenmedik ilaç reaksiyonu’ yaz. Aileyle ben konuşurum. Sen eve git, uyu.”",
"“Ama hocam...”",
"“Bildirirsen ne olur? Soruşturma. Disiplin. Belki dava. Belki mesleğin. Sistem? Aynen kalır. Seni korumak benim işim.”"
], secenekler: [
{ t: "Haluk Hoca'nın dediğini yaparsın. Eve gidersin.", to: "b2", etki: { sistem: 1, eve: true } },
{ t: "“Aileye ben söylemek istiyorum hocam,” dersin.", to: "h1", etki: { durustluk: 2, kol: "acik", hiyerarsi_asti: true } },
{ t: "Eve gitmezsin; Haluk Hoca'nın aileyle konuşmasını izlemek için kalırsın.", to: "b2", etki: { durustluk: 1, kaldi: true } },
{ t: "“Hocam, siz üç kez yazdınız. Dördüncüsünü ben yazayım,” dersin.", to: "s1", etki: { sistem: 2, kol: "sistem", leventle: true } }
]},

b2: { saat: "Saat 34 · 18.00", baslik: "Aile Odası", metin: [
P(S("b1A"), "Eve gittin. Uyumadın. Saat dokuzda Haluk Hoca aradı: “Konuştum. Beklenmedik reaksiyon dedim. Anladılar. Merak etme.” Neyi anladılar?"),
P(S("b1C"), "Kaldın. Aile odasının kapısı aralık. Sen koridorda, duvara yaslanmış."),
P(S("b1C"), "Haluk Hoca konuşuyor. Sakin, insani. “Annenize bir antibiyotik verildi. Ağır bir alerjik reaksiyon gelişti. Bu bazen olur. Ekibimiz çok hızlı müdahale etti.” Her cümle doğru. Bir şey eksik."),
P(S("b1C"), "Oğuz: “Annemin alerjisi var mıydı? Biliyor muydunuz?” Haluk Hoca bir saniyeden kısa bir süre duruyor. “Kayıtlarımızı inceleyeceğiz.” Oğuz başını sallıyor. Güveniyor."),
"Gece. Acil servisin arka kapısı. Sigara içenlerin durduğu yer. Sen içmiyorsun. Gönül geliyor. O da içmiyor. İkiniz de oraya geliyorsunuz yine de.",
"“Haluk Hoca ne dedi?”",
"Anlatıyorsun.",
"Gönül uzun süre susuyor. “Yirmi yıldır buradayım. Bu dördüncü. Her seferinde aynı. Biri konuştu, biri sustu, aile ‘beklenmedik reaksiyon’ diye eve gitti. Sekme hâlâ gri.”"
], secenekler: [
{ t: "“Ne yapmalıyım Gönül Abla?” diye sorarsın.", to: "b3", etki: { sefkat: 1, hulyaya_sordu: true } },
{ t: "“Haluk Hoca beni korumaya çalışıyor,” dersin.", to: "b3", etki: { sistem: 1 } },
{ t: "“Bu sefer farklı olacak,” dersin. Nasıl, bilmeden.", to: "b3", etki: { durustluk: 1 } },
{ t: "Bir şey demeden Gönül'ün yanında durursun.", to: "b3", etki: { sefkat: 1 } }
]},

b3: { saat: "Gece", baslik: "Uyku", metin: [
P(S("b2B"), "“Biliyorum,” dedi Gönül. “Hepimizi korur. Kimseyi kurtarmaz.”"),
P(S("b2C"), "Gönül bir şey demedi. Bu cümleyi yirmi yılda kaç kez duyduğunu sayar gibi baktı."),
P(S("b2D"), "Yanında durdun. Bir süre sonra omzunu omzuna değdirdi. Sonra ikiniz de içeri girdiniz."),
P(S("b2A"), "“Ben ne yapmalıyım diye sormayı yirmi yıl önce bıraktım,” dedi Gönül. “Sen sor. Ama kendine sor.”"),
"Gece ikide uyanıyorsun. Kalp çarpıntısı, terli çarşaf. Tavanda bir leke. Hep oradaymış.",
"Yoğun bakımı arıyorsun. “Stabil,” diyor nöbetçi hemşire. “Ağır. Siz kimsiniz?” Bir süre cevap veremiyorsun. “Acil asistanı.”",
"Evden sisteme bağlanıyorsun. Haluk Hoca'nın notu: “Antibiyotik sonrası beklenmedik anafilaktik reaksiyon. Hızlı müdahale ile stabilize edildi.” Bir sekme yanında: “Penisilin. 2019.”",
"Gözlerini kapatınca bir sekme görüyorsun. Gri, açılmamış."
], secenekler: [
{ t: "Sabah ilk iş Oğuz'u bulup gerçeği söylersin.", to: "h2", etki: { durustluk: 2, kol: "acik", gec_acik: true } },
{ t: "Haluk Hoca'nın haberi olmadan bir olay bildirimi yazarsın.", to: "s2", etki: { sistem: 2, kol: "sistem", gizli_bildirim: true } },
{ t: "Uyumaya çalışırsın. Haluk Hoca haklı olabilir.", to: "t1", etki: { sistem: 1, sustu: true } },
{ t: "Bir kâğıda her şeyi yazarsın. Kimseye göndermeden.", to: "t1", etki: { durustluk: 1, gunluk: true } }
]},

/* ---------- ÖRTBAS KOLU ---------- */
c1: { saat: "Saat 33 · 17.05", baslik: "Düzeltme", metin: [
"Order ekranı: “Ampisilin-sulbaktam, 15.04, Dr. Selin Acar.” Düzenle. Bir tıklamayla ilacın adı değişebilir: seftriakson. O da antibiyotik. Penisilinle çapraz reaksiyonu nadir. Nadir. “Beklenmedik reaksiyon.”",
"Ellerin klavyenin üstünde. Titrememeleri seni korkutuyor.",
"“Değişiklik nedeni” kutusu açılıyor. Yazıyorsun: “Yanlış giriş, düzeltildi.”",
"Kaydet.",
"Ekranda yeni satır: “Seftriakson, 15.04.” Eski satır yok. Ya da var. Sistemin bir yerinde, bir logda. Biliyorsun.",
"Arkanda bir nefes. Dönüyorsun. Kimse yok. Ya da biri vardı ve gitti. Perde hâlâ hafif sallanıyor.",
"İlacı Gönül hazırladı. Eczaneden gelen kutu bir çöp kutusunda olabilir. Üstünde ampisilin yazıyor. Gelin order'ı duydu mu?"
], secenekler: [
{ t: "Çöp kutusunu karıştırıp ilaç kutusunu bulursun.", to: "c2", etki: { kutu_atti: true } },
{ t: "Hiçbir şey yapmazsın. Ne olacaksa olsun.", to: "c2", etki: { sefkat: 1 } },
{ t: "Değişikliği geri alırsın. Yapamazsın bunu. Sonra koridora, aileye yürürsün.", to: "h1", etki: { durustluk: 2, geri_aldi: true, kol: "acik" } },
{ t: "Gönül'ü bulursun. Ne gördüğünü bilmen gerek.", to: "c2", etki: { hulyaya_gitti: true } }
]},

c2: { saat: "Saat 34 · 18.30", baslik: "Gönül", metin: [
P(S("c1B"), "Hiçbir şey yapmadın. Ekran açık kaldı. Yeni ilaç adı, yeni satır."),
P(S("c1D"), "Gönül'ü aramaya çıktın. O seni önce buldu."),
P(S("c1A"), "Çöp kutusu: enjektörler, gazlı bezler, eldivenler. Bir karton kutu: “Ampisilin-sulbaktam 1,5 g.” Cebine koydun. Tuvalette küçük parçalara ayırdın. Bu kadar küçük bir şeyi hiç bu kadar dikkatle yırtmamıştın. Parçaları sifonla gönderdin. Biri suyun üstünde kaldı, bir daha çektin."),
"Gönül seni personel odasında buluyor. Kapıyı kapatıyor.",
"“Selin.” Bu kez “hocam” demiyor. “Order'ı değiştirdin.”",
"Soru değil.",
"“İlacı ben hazırladım. Kutuyu ben açtım. Şişede ampisilin yazıyordu. Mahkemede sorarlarsa söylerim. Yemin ederim söylerim.”",
"“Söylemem gerekmesin diye sana bir şans veriyorum. Yirmi yılda çok doktor hata yaptı, ben de yaptım. Ama ben senin için yalan söylemem.”",
"Gözleri kızarık. Kızgın değil. Hayal kırıklığı. Daha kötü."
], secenekler: [
{ t: "“Haklısın. Düzeltiyorum,” dersin.", to: "h1", etki: { durustluk: 2, kol: "acik", hulya_dondurdu: true } },
{ t: "“Benim kariyerim Gönül Abla. Lütfen,” dersin.", to: "c3", etki: { yalvardi: true } },
{ t: "“Senin de sorumluluğun vardı,” dersin. “Sen de kontrol etmedin.”", to: "c3", etki: { sistem: 1, hulyayi_suclad: true } },
{ t: "Bir şey demezsin. Gönül'ün kapıdan çıkmasını izlersin.", to: "c3", etki: { sustu: true } }
]},

c3: { saat: "Bir hafta sonra", baslik: "Log", metin: [
P(S("c2B"), "Gönül sana uzun uzun baktı. “Senin kariyerin. Nurten Hanım'ın hayatı. Benim vicdanım.” Kapıyı açtı. “Bir şey yapmayacağım. Ama biri sorarsa yalan da söylemeyeceğim.”"),
P(S("c2C"), "Gönül'ün yüzü kızardı. “Evet. Benim de vardı. Bunu söyleyeceğim. Sen söylemesen de.” Kapıyı yavaşça kapattı."),
P(S("c2D"), "Gönül çıktı. Eşikte durdu. Dönecek gibi oldu. Dönmedi."),
"Bir hafta. Kimse bir şey sormuyor. Dosyada “seftriakson sonrası beklenmedik reaksiyon.” Gönül seninle aynı nöbete yazılmamak için çizelgeyi değiştirtmiş.",
"Sonra başhekimlikten bir e-posta: “Bilgi Sistemi Değişiklik Kaydı İncelemesi.”",
"Bilgi işlem rutin bir denetim yapmış. Son ayda “yanlış giriş, düzeltildi” notuyla değiştirilen on yedi order. Biri senin. Öncesi, sonrası, saatler, isimler.",
"“Yarın saat 10.00'da Başhekim Yardımcısı odasında görüşmek üzere.”",
"Kimse ihbar etmedi. Sistem kendi kendini kaydetmişti."
], secenekler: [
{ t: "Toplantıda her şeyi itiraf edersin.", to: "t1", etki: { durustluk: 2, ortaya: true, itiraf: true } },
{ t: "Toplantıda bir teknik hata olduğunu savunursun.", to: "t1", etki: { savundu: true } },
{ t: "Toplantıdan önce Oğuz'u bulup ona her şeyi söylersin.", to: "t1", etki: { durustluk: 2, ortaya: true, ogz_ilk: true } },
{ t: "Bir avukat tutarsın.", to: "t1", etki: { sistem: 1, avukat: true } }
]},

/* ---------- SİSTEM KOLU ---------- */
s1: { saat: "Saat 34 · 18.00", baslik: "Bildirim", metin: [
P(S("a6D"), "Nöbet odasına kapanıp bilgisayarı açtın. Koridorda gelin ve Oğuz başka bir doktoru bekliyordu. Portakal poşeti sandalyenin üstündeydi."),
P(function(d){ return d.leventle; }, "Haluk Hoca çekmecesini açıp üç kâğıt çıkardı: kendi bildirimleri. 2021, 2023, 2025. “Ekle bunları. Belki dördüncüyü biri okur.”"),
"Olay bildirim formu. Altı sayfa. Bu hastanede nadiren doldurulan bir belge. Formun üstündeki logo eski logo.",
"Yazıyorsun. Saat 15.04. Ampisilin-sulbaktam. Alerji kaydı mevcut. Sekme açılmadı. Reaksiyon. Kod. Yoğun bakım.",
"“Katkıda bulunan faktörler”: yorgunluk, iş yükü, iletişim, ekipman, bilgi sistemi, eğitim, diğer.",
"Hepsini işaretliyorsun.",
"Otuz bir saat kesintisiz çalışma. Üç asistan, yüz yirmi hasta. Alerji sözlü soruldu, sözlü cevaplandı. 2022 güncellemesinden sonra uyarı kırmızıdan griye döndü. Üç bildirim yapılmış, işlem yok. Saat 28'de bir asistan darp edildi, ekip kırk dakika eksik.",
"Son bölüm: “Bireysel sorumluluk değerlendirmesi.” Boş bir kutu."
], secenekler: [
{ t: "Kutuya yazarsın: “Sekmeyi ben açmadım. Order'ı ben yazdım. Sorumluluk benim.”", to: "s2", etki: { durustluk: 2, bireysel: true } },
{ t: "Kutuyu boş bırakırsın. Sistem bunu üretti.", to: "s2", etki: { sistem: 1, bos: true } },
{ t: "“Bireysel ve sistemsel sorumluluk ayrılamaz,” yazarsın.", to: "s2", etki: { durustluk: 1, sistem: 1 } },
{ t: "Kutuya Gönül'ün adını da yazarsın: “İkimiz kontrol etmedik.”", to: "s2", etki: { sistem: 1, hulya_yazdi: true } }
]},

s2: { saat: "İki hafta sonra", baslik: "Komite", metin: [
P(S("s1A"), "Kutuya yazdın. Formu teslim ederken elin titremedi. Otuz bir saatten beri ilk kez."),
P(S("s1B"), "Kutuyu boş bıraktın. Toplantıda formun en çok bakılan yeri o boş kutu oldu."),
P(S("s1C"), "“Ayrılamaz,” yazdın. Okuyunca bir cümleden çok bir kaçış gibi geldi. Silmedin."),
P(S("s1D"), "Gönül'ün adını da yazdın. Ertesi gün Gönül seninle konuşmadı. İkinci gün yanından geçerken cebine bir çikolata bıraktı, yine konuşmadı."),
P(function(d){ return d.gizli_bildirim; }, "Bildirimi gece yazıp sabah gönderdin. Haluk Hoca öğrenince bir hafta seninle konuşmadı. Sonra bir sabah önüne bir çay koydu. “İyi yazmışsın,” dedi. Af mı uyarı mı, anlamadın."),
"İki hafta sonra Hasta Güvenliği Komitesi. On iki kişi: başhekim yardımcısı, bilgi işlem müdürü, hemşirelik müdürü, iki uzman, bir hukukçu, sen. Masada su şişeleri. Kimse açmıyor.",
"Bilgi işlem müdürü: güncelleme bakanlık zorunluluğu, bütçe yok. Hemşirelik müdürü: kadro açığı yüzde otuz. Başhekim yardımcısı: nöbet süreleri yönetmelikte, istisnalar “zorunlu hâllerde.”",
"Sorumluluk masanın etrafında dönüyor, kimsenin önünde durmuyor.",
"Karar özeti: “Olay çok faktörlü bir sistem hatası olarak değerlendirilmiştir. Bireysel kusur tespit edilmemiştir. Alerji uyarısının yeniden eklenmesi için bakanlığa yazı yazılacaktır.”",
"Oğuz bu cümleyi hiç duymayacak."
], secenekler: [
{ t: "Söz alıp itiraz edersin: “Bireysel kusur var. Benim.”", to: "s3", etki: { durustluk: 2, itiraz: true } },
{ t: "Kararı kabul edersin. Sistem değişecekse bu yeter.", to: "s3", etki: { sistem: 1 } },
{ t: "Aileye raporun bir kopyasının verilmesini istersin.", to: "s3", etki: { durustluk: 1, sistem: 1, rapor_aile: true } },
{ t: "Bakanlığa gidecek yazıyı kendin yazmayı teklif edersin.", to: "s3", etki: { sistem: 2, yazi: true } }
]},

s3: { saat: "Bir ay sonra", baslik: "Oğuz'un Sorusu", metin: [
P(S("s2B"), "Kararı kabul ettin. Çıkarken kimse sana bakmadı. Herkes rahatlamıştı. Biri su şişesini nihayet açtı."),
P(S("s2A"), "Masa sustu. Başhekim yardımcısı gözlüğünü çıkardı. “Bu komite suçlu bulmak için değil.” Ama cümleni tutanağa yazdırdın, kelimesi kelimesine."),
P(S("s2C"), "Hukukçu itiraz etti. Sonunda bir uzlaşma: aileye “bilgilendirme” yapılacak, rapor verilmeden. Kim yapacak? Sen istedin."),
P(S("s2D"), "Yazıyı yazdın. Dört sayfa. Üç ay sonra cevap: “Değerlendirmeye alınmıştır.” Bir yıl sonra bir güncellemeyle alerji sekmesi kırmızıya döndü. Bütün ülkede."),
"Bir ay sonra kantinde biri yanına oturuyor. Oğuz.",
"“Annemin dosyasında adınız var. Acil hekimi. Siz miydiniz o gün?”",
"Evet.",
"Oğuz çayına bakıyor. “Avukatım bir şey buldu. Annemin dosyasında alerji kaydı var. Penisilin. Ona penisilin verilmiş. Hastane ‘sistem hatası’ diyor. Bir sistem ilaç yazar mı? Bir insan yazar.”",
"“Kim yazdı?”"
], secenekler: [
{ t: "“Ben yazdım,” dersin.", to: "t1", etki: { durustluk: 2, ortaya: true, ben_yazdim: true } },
{ t: "“Bir sistemin içinde çalışan bir hekim yazdı. Otuz bir saattir uyumamış bir hekim,” dersin.", to: "t1", etki: { sistem: 1, durustluk: 1, ortaya: true } },
{ t: "“Bunu hastane yönetimiyle konuşmanız gerekiyor,” dersin.", to: "t1", etki: { sistem: 1, yonlendirdi: true } },
{ t: "Cevap veremezsin. Kalkıp gidersin.", to: "t1", etki: { kacti: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Sonra", baslik: "Sonuç", metin: [
P(S("h3A"), "Yoğun bakımın kapısında saatlerce bekledin. Oğuz çıkınca yanına oturdu. Bir şey demedi. Sen de."),
P(S("h3B"), "Hastaneden çıkıp Şişli'den Beşiktaş'a yürüdün. Sahilde bir bankta otuz altı saat bitti. Bir martı simidini kaptı. Kızmaya gücün yoktu."),
P(S("h3C"), "İki ihtimali düşündün. Hiçbiri senin elinde değildi. İkisinde de yaptığın şey aynıydı."),
P(S("h3D"), "Ufuk'u aradın. Burnu hâlâ morardı. “Hepimiz bir gün,” dedi. “Hepimiz.” Bu cümle seni hem rahatlattı hem korkuttu."),
P(S("b3C"), "Uyumaya çalıştın. Sabaha karşı uyudun. Rüyanda bir sekme kırmızıydı."),
P(S("b3D"), "Her şeyi bir kâğıda yazdın. Saatler, ilaç, sekme, Gönül'ün sesi. Bir kitabın arasına koydun. Kimseye göndermedin. Ama artık bir yerde yazılıydı."),
P(S("c3C"), "Toplantıdan önce Oğuz'u buldun: ilacı, sekmeyi, değiştirdiğin kaydı söyledin. Oğuz bir şey demedi. Telefonunu çıkarıp senin önünde avukatını aradı."),
P(S("s3A"), "“Ben yazdım.” Oğuz uzun süre sustu. “Teşekkür ederim. Bunu söyleyen ilk kişisiniz.” Kalkıp gitti. Çayını bitirmişti."),
P(S("s3B"), "“Otuz bir saattir uyumamış bir hekim.” Oğuz başını salladı. “Yani siz.” Evet."),
P(S("s3C"), "Oğuz güldü. Acı. “Konuştum. Onlar da sizinle konuşmamı söyledi.”"),
P(S("s3D"), "Kalkıp gittin. Kantinin kapısında dönmek istedin. Dönmedin. Oğuz'un çayı soğudu."),
P(function(d){ return YASADI(d) && !(d.kol === "acik" && d.gecti.h3); }, "Nurten Hanım yaşadı. Üç gün sonra tüp çıktı. İki hafta sonra eve döndü. Bir sabah gelininin koluna girip bahçede yürüdüğünü pencereden gördün."),
P(function(d){ return OLDU(d) && !(d.kol === "acik" && d.gecti.h3); }, "Nurten Hanım öldü. Beşinci gün. Cihazın kapatılmasına aile karar verdi. Oğlu yanındaydı. Sen değildin."),
P(function(d){ return d.itiraf; }, "Toplantıda her şeyi anlattın. Disiplin soruşturması açıldı. Toplantıdan sonra bilgi işlem müdürü odana geldi. “Alerji uyarısını geri getiriyoruz,” dedi. “Bakanlığı beklemeden.”"),
P(function(d){ return d.savundu; }, "Teknik hata dedin. Başhekim yardımcısı logları gösterdi: 17.04, değişiklik, senin kullanıcı adın. “Teknik hata bir insanın şifresiyle mi girer?” İki suçlama: tıbbi hata ve kayıt tahrifatı. İkincisi daha ağır."),
P(function(d){ return d.avukat; }, "Avukatın sessiz kalmanı söyledi. Kaldın. Soruşturma aylarca sürdü. Gönül ifade verdi. Ne gördüyse."),
P(function(d){ return d.sustu && d.kol === "hiyerarsi"; }, "Sustun. Dosyada “beklenmedik reaksiyon” yazıyor. Kimse bir şey sormadı. Sekme hâlâ gri."),
"Fakültede yaşlı bir hoca bir gün dersin ortasında durup anlatmıştı: aynı dikkatsizliği yapan iki sürücü. Birinin önüne bir çocuk çıkar, öbürünün çıkmaz. Sonra tahtaya dönüp kaldığı yerden devam etmişti.",
P(YASADI, "Senin önüne çocuk çıkmadı. Bacağa bir iğne, bir saniye. Aynı hatayı yapıp bir saniye geç kalan bir başkası katil olacaktı."),
P(OLDU, "Senin önüne çocuk çıktı. Bir donma, bir hesap, on iki dakika. Aynı hatayı yapan daha hızlı biri onu kurtarabilirdi.")
], secenekler: [
{ t: "Eve gidip uyursun. On dört saat.", to: "t1b", etki: { sefkat: 1, uyudu: true } },
{ t: "Bir sonraki nöbete gelirsin. Programdaki gibi.", to: "t1b", etki: { sistem: 1, nobete_geldi: true } },
{ t: "Babanı ararsın.", to: "t1b", etki: { sefkat: 1, baba: true } },
{ t: "Ufuk'u ararsın.", to: "t1b", etki: { sefkat: 1, kerem2: true } }
]},

t1b: { saat: "Bir hafta sonra", baslik: "Baba", metin: [
P(S("t1C"), "Babanı aradın. İlk çalışta açtı. Sesinden anladı. “Gel kızım.” Bir hafta izin aldın."),
P(S("t1A"), "On dört saat. Uyandığında akşamdı. Telefonda yüz yirmi bildirim. Hiçbiri rüyadan gelmiyordu."),
P(S("t1B"), "Nöbete geldin. İlk hastan ateşli bir çocuk. Alerji sekmesine tıkladın. Sonra bir daha. Sonra annesine sordun. Sonra bir daha tıkladın. Gönül izledi. Yanından geçerken omzuna dokundu."),
P(S("t1D"), "Ufuk açtı. Sesi daha iyi. “Bıraktım. Bir aile sağlığı merkezinde başladım. Dokuz-beş. Kimse yumruklamıyor.” Anlattın. Sessizlik. “Benim nöbetimde de olabilirdi,” dedi. “Biliyorsun değil mi?”"),
"Babanın evi, Sivas. Mutfak masası. Sobanın üstünde bir çaydanlık.",
"Baban emekli bir öğretmen. Seni hep “doktor kızım” diye tanıttı. Bakkala, berbere, minibüs şoförüne.",
"Anlatıyorsun. Uzun süre.",
"Baban çayını karıştırıyor. Bitince kaşığı tabağa koyuyor.",
"“Otuz beş yıl öğretmenlik yaptım. Bir çocuğa haksız yere sıfır verdim. Kopya çekti sandım. Çekmemişti. Çocuk ağladı. İnanmadım. Bir yıl sonra öğrendim. O yıl sınıfta kalmıştı.”",
"“Adı Mehmet'ti. Hâlâ düşünürüm. O çocuktan sonra hiçbir çocuğa bakmadan sıfır vermedim. Bir hata ya kırar adamı ya dikkatli yapar. İkisini birden de yapar.”"
], secenekler: [
{ t: "Babana sarılırsın.", to: "t2", etki: { sefkat: 1 } },
{ t: "“Senin hatanda kimse ölmedi baba,” dersin.", to: "t2", etki: { durustluk: 1, kiyas: true } },
{ t: "“Mehmet'e hiç söyledin mi?” diye sorarsın.", to: "t2", etki: { durustluk: 1, mehmet: true } },
{ t: "Ağlarsın.", to: "t2", etki: { sefkat: 2, agladi: true } }
]},

t2: { saat: "Bir ay sonra", baslik: "Sonra", metin: [
P(S("t1bA"), "Babana sarıldın. Kazağı naftalin ve soba kokuyordu. Saçını okşadı."),
P(S("t1bB"), "Baban bir süre sustu. “Bilmiyorum,” dedi. “Belki o yıl içinde bir şey öldü. Ben bilemem. Sen de bilemezsin bazen.”"),
P(S("t1bC"), "“Söylemedim,” dedi baban. “Her yıl bu yıl bulayım dedim. Bulmadım.” Sonra sana baktı. “Senin cesaretin var mı kızım?”"),
P(S("t1bD"), "Ağladın. Babanın mutfağında, otuz altı saatin, bir ayın gözyaşları. Baban kalkıp arkana geçti, elini başına koydu. Çaydanlık fokurdadı. İkiniz de kalkmadınız."),
"Bir ay sonra İstanbul. Acil aynı. Bekleme salonu aynı. Muhabbet kuşu kafesiyle başka biri."
], secenekler: [
{ t: function(d){ return YASADI(d) ? "Nurten Hanım'ı evinde ziyaret edersin." : "Nurten Hanım'ın mezarını bulursun."; }, to: "y_ziyaret", etki: { durustluk: 1, ziyaret: true } },
{ t: "Bir psikiyatriste gidersin. Uykuların hâlâ yok.", to: "y_terapi", etki: { sefkat: 1, terapi: true } },
{ t: "İstifa dilekçeni yazarsın.", to: "t3", etki: { istifa: true } },
{ t: "Hiçbir şey yapmazsın. Nöbetlerine devam edersin.", to: "t3", etki: { sistem: 1 } }
]},

y_ziyaret: { saat: "Bir ay sonra", baslik: "Ziyaret", metin: [
P(YASADI, "Kartal'da bir apartman, dördüncü kat, asansörsüz. Kapıyı gelin açıyor. Seni tanıyor. Yüzü bir an sertleşiyor, sonra yumuşuyor. “Gelin. Annem uyanık.”"),
P(YASADI, "Nurten Hanım salonda, televizyonun karşısında, battaniyenin altında. Zayıflamış. Gözleri parlak. “Gel kızım. Otur. Çay içer misin?” Televizyonda bir yemek programı. Sesi kısık."),
P(function(d){ return YASADI(d) && d.ortaya; }, "Biliyor. Oğuz anlatmış. Yine de çay koyuyor. “Oğlum çok kızdı sana. Ben kızmadım. Ben hep ‘kızardım’ derdim o ilaç için. Meğer ölüyormuşum. Kendim küçülttüm. Sen nereden bilecektin?”"),
P(function(d){ return YASADI(d) && !d.ortaya; }, "Bilmiyor. Seni hastanedeki doktorlardan biri sanıyor. “Beni kurtaranlardan mısın?” diyor, cevap bekliyor."),
P(OLDU, "Kartal'da bir mezarlık. Yeni bir mezar. Taşı henüz yok, tahta bir levha: “Nurten Yıldırım, 1952–2026.” Toprak taze. Biri papatya bırakmış."),
P(OLDU, "Mezarın başında duruyorsun. Elin cebinde, cebinde bir şey arıyor. Ne aradığını bilmiyorsun."),
P(OLDU, "Arkadan bir ses. Oğuz. Elinde bir şişe su. Toprağı sulamaya gelmiş. Seni görüyor. Duruyor.")
], secenekler: [
{ t: function(d){ return YASADI(d) && !d.ortaya ? "“Hayır teyze. Ben size hata yapan doktorum,” dersin." : "Özür dilersin; yüz yüze."; }, to: "t3", etki: function(d){ d.durustluk += 2; d.yuz_yuze = true; if(YASADI(d)) d.ortaya = true; } },
{ t: function(d){ return YASADI(d) ? "Çayını içersin. Konuşmasını dinlersin." : "Oğuz'un yanına gidip su şişesini alır, toprağı birlikte sularsınız."; }, to: "t3", etki: { sefkat: 1, birlikte: true } },
{ t: "Bir şey demeden gidersin.", to: "t3", etki: { kacti2: true } },
{ t: "Bir mektup bırakırsın.", to: "t3", etki: { durustluk: 1, mektup: true } }
]},

y_terapi: { saat: "Bir ay sonra", baslik: "İkinci Kurban", metin: [
"Psikiyatrist Dr. Aylin, ellilerinde. Odasında bir kanepe, bir kauçuk bitkisi, yaprakları tozlu. Kırk dakika dinliyor.",
"“Bir kavram var: ‘ikinci kurban.’ Bir tıbbi hataya karışan sağlık çalışanı için. Birinci kurban hasta. İkincisi hatayı yapan. Uykusuzluk, suçluluk, kâbus, mesleği bırakma, bazen daha kötüsü.”",
"“Ben kurban değilim. Hatayı ben yaptım.”",
"“Evet. Siz yaptınız. Şimdi de acı çekiyorsunuz. Biri öbürünü silmiyor.”",
"“Bir arkadaşınız bu hatayı yapsaydı, Ufuk diyelim, ona ne derdiniz?”",
"“Sistemi suçlardım. Otuz bir saati. Sekmeyi. Yumruğu.”",
"“Kendinize neden söylemiyorsunuz?”",
"Cevap veremiyorsun. Kauçuk bitkisinin bir yaprağına bakıyorsun. Biri üstüne parmağıyla bir çizgi çekmiş, tozun içinde."
], secenekler: [
{ t: "“Kendimi affedersem Nurten Hanım'a ihanet etmiş olurum,” dersin.", to: "t3", etki: { durustluk: 1, ihanet: true } },
{ t: "Haftaya yeniden gelmek istediğini söylersin.", to: "t3", etki: { sefkat: 1, devam_terapi: true } },
{ t: "“Belki,” dersin. Göğsünde bir şey biraz gevşiyor.", to: "t3", etki: { sefkat: 2, gevsedi: true } },
{ t: "“Bunu hak etmiyorum,” deyip kalkarsın.", to: "t3", etki: { durustluk: 1, hak_etmiyorum: true } }
]},

t3: { saat: "Üç ay sonra", baslik: "Mortalite Toplantısı", metin: [
P(S("t2D"), "Nöbetlere devam ettin. Her order'dan önce elin bir saniye duruyordu. Kimse fark etmedi."),
P(S("y_ziyaretA"), "Yüz yüze özür diledin. Kelimeler beklediğinden kısa çıktı. Karşındaki yüz bir süre kıpırdamadı, sonra başını eğdi. Bağışlama değil. Kabul."),
P(S("y_ziyaretB"), "Toprağı birlikte suladınız. Şişeyi sana Oğuz uzattı. Su bitince ikiniz de bir süre boş şişeye baktınız."),
P(S("y_ziyaretC"), "Gittin. Arabaya binmeden dönüp baktın. Arkandan bakıyordu."),
P(S("y_ziyaretD"), "Bir mektup bıraktın. Bir ay sonra tek satır cevap geldi: “Okudum.”"),
P(S("y_terapiA"), "Dr. Aylin bir süre sustu. “Belki,” dedi. “Ya da ona bir yük daha bindirirsiniz: sizin cezanızı taşımak.”"),
P(S("y_terapiB"), "Haftaya randevu aldın. Merdivenden inerken bir aydır ilk kez bir randevunun seni rahatlattığını fark ettin."),
P(S("y_terapiC"), "“Belki,” dedin. Dışarıda yağmur başlamıştı. Şemsiyeni açmadın, otobüs durağına kadar ıslandın."),
P(S("y_terapiD"), "“Hak etmiyorum,” deyip kalktın. Dr. Aylin durdurmadı. “Kapı açık,” dedi."),
P(function(d){ return d.istifa; }, "Dilekçeni yazdın. Haluk Hoca okudu, çekmecesine koydu. “Bir ay bekle. Sonra hâlâ istiyorsan imzalarım.”"),
"Her ayın son perşembesi bir morbidite-mortalite toplantısı yapılır. Kural: suçlama yok. Herkes bilir ki her sunum küçük bir mahkemedir.",
"Bu ay Haluk Hoca senin vakanı seçti. Sen sunacaksın.",
"Amfi dolu. Kırk kişi. Arka sırada Gönül. Ön sırada Haluk Hoca. Ufuk gelmiş. Artık başka yerde çalıştığı hâlde.",
"İlk slayt: “Olgu: 74 yaşında kadın, pnömoni, ilaç reaksiyonu.”",
"Söyleyeceğin her şey tutanağa geçecek."
], secenekler: [
{ t: "Vakayı bir hikâye olarak anlatırsın. Kendi hatanla, kendi otuz bir saatinle.", to: "t4", etki: { durustluk: 2, hikaye: true } },
{ t: "Teknik sunarsın: zaman çizelgesi, kök neden analizi, sistem önerileri.", to: "t4", etki: { sistem: 2, teknik: true } },
{ t: "Sunumun sonuna bir slayt eklersin: “Bu olabilirdi: sizin nöbetinizde.”", to: "t4", etki: { sistem: 1, durustluk: 1, slayt: true } },
{ t: "Başlamadan önce Gönül'e bir söz verirsin.", to: "t4", etki: { sefkat: 1, hulya_soz: true } }
]},

t4: { saat: "Saat 0", baslik: "Yeni Nöbet", metin: [
P(S("t3A"), "Anlattın. Otuz bir saati, Ufuk'un burnunu, “kızarmıştım”ı, sekmeyi, “yok”u. Amfi çıt çıkarmadı. Sonra arka sıradan biri alkışlamaya başladı. Gönül. Sonra bir başkası. O toplantıda daha önce kimse alkışlanmamıştı."),
P(S("t3B"), "Teknik sundun: balık kılçığı diyagramı, yedi öneri. İyi sunumdu. Sonunda bir asistan sordu: “Peki siz nasılsınız?” Duymamış gibi yaptın."),
P(S("t3C"), "Son slayt. Sessizlik. Sonra Ufuk ayağa kalktı: “Benim nöbetimde olabilirdi.” Sonra bir başkası. On iki kişi ayaktaydı."),
P(S("t3D"), "Gönül'e söz verdin: “Her alerjiyi iki kez soracağım. Bir sana, bir ekrana.” Gönül: “Ben de iki kez soracağım.”"),
"Sabah sekiz. Yeni nöbet. Bu kez yirmi dört saat. Yönetim bir hafta önce bir genelge çıkardı: kesintisiz çalışma yirmi dört saati geçemez. Kâğıt üstünde.",
P(function(d){ return d.yazi || d.itiraf || d.kol === "sistem"; }, "Bilgi sisteminde bir değişiklik: alerji sekmesi kırmızı. Alerji varsa order yazılmadan önce ekranın ortasında bir pencere açılıyor. Kapatmak için bir neden yazmak gerekiyor."),
"Bekleme salonunda yüz kişi. İlk hastan yaşlı bir adam. Ateş, öksürük. Akciğerde ral.",
"Gönül yanına geliyor. “Hocam, antibiyotik ne yazıyoruz?”",
"Ondan önce sen soruyorsun:",
"“Alerjisi var mı?”"
], secenekler: [
{ t: "Sekmeyi açarsın. Sonra hastaya sorarsın. Sonra yanındakine. Sonra yeniden sekmeyi.", to: "ss", etki: { durustluk: 1 } },
{ t: "Gönül'le birlikte kontrol edersiniz.", to: "ss", etki: { sistem: 1 } },
{ t: "Hastaya yavaşça, net bir sesle sorarsın: “Hiç bir ilaçtan kızardınız mı?”", to: "ss", etki: { sefkat: 1, kizardiniz: true } },
{ t: "Bir an durursun. Otuz altı saat önceki o an gibi. Sonra devam edersin.", to: "ss", etki: { durustluk: 1, sefkat: 1 } }
]},

ss: { yonlendir: [
{ if: function(d){ return d.istifa && !d.gevsedi; }, to: "son_birak" },
{ if: function(d){ return d.kol === "ortbas" && !d.ortaya; }, to: "son_sessiz" },
{ if: function(d){ return d.kol === "sistem" && !d.ortaya; }, to: "son_sistem" },
{ if: function(d){ return d.kol === "acik" || d.durustluk >= 8; }, to: "son_acik" },
{ to: "son_nobet" }
]},

/* ---------- SONLAR ---------- */
son_acik: { son: true, baslik: "Kendi Adınla", metin: [
P(S("t4A"), "O sabah sekmeyi açtın, hastaya sordun, oğluna sordun, sekmeyi yeniden açtın. Gönül güldü: “Yeter kızım.”"),
P(S("t4B"), "Gönül'le birlikte baktınız: iki çift göz, bir sekme."),
P(S("t4C"), "“Hiç bir ilaçtan kızardınız mı?” Adam düşündü. “Bir kere,” dedi. “Askerde. Unutmuşum.”"),
P(S("t4D"), "Bir an durdun. Sonra devam ettin. Bu kez sekmeyle."),
"Söyledin. Aileye, kuruma, bir amfi dolusu insana. Kendi adınla.",
P(function(d){ return d.itiraf || d.savundu; }, "Disiplin soruşturması üç ay sürdü. Kınama cezası. Asistanlığa devam ediyorsun. Dosyanda bir not var."),
"Oğuz'un açtığı dava sürüyor. Sinem Hanım bir gün koridorda yanına geldi: “İtirafın aleyhimize en güçlü delil. Ama hâkim duruşmada bir şey söyledi: ‘Bu dosyada yalan söylemeyen tek kişi bu hekim.’ Bilmeni istedim.” Sonra asansör geldi, bindi.",
P(YASADI, "Nurten Hanım her bayram acil servise bir tepsi börek gönderiyor. Üstünde not yok. Gönül her seferinde bir dilimi sana ayırıyor, peçeteye sarıp dolabına koyuyor."),
P(OLDU, "Oğuz bir gün mahkeme koridorunda yanına geldi. Bir şey demedi. Elini uzattı. Sıktın. Gitti."),
"Her nöbetin başında aynı soruyu iki kez soruyorsun. Geçen ay yeni bir asistan bunun neden bu kadar önemli olduğunu sordu. Ona otuz bir saati anlattın. Sonuna kadar dinledi, sonra gidip bir önceki hastasının sekmesini açtı."
]},

son_sessiz: { son: true, baslik: "Seftriakson", metin: [
P(S("t4A"), "O sabah sekmeyi açtın, hastaya sordun, oğluna sordun, sekmeyi yeniden açtın. Gönül güldü: “Yeter kızım.”"),
P(S("t4B"), "Gönül'le birlikte baktınız: iki çift göz, bir sekme."),
P(S("t4C"), "“Hiç bir ilaçtan kızardınız mı?” Adam düşündü. “Bir kere,” dedi. “Askerde. Unutmuşum.”"),
P(S("t4D"), "Bir an durdun. Sonra devam ettin. Bu kez sekmeyle."),
"Kimse bilmiyor. Dosyada “seftriakson sonrası beklenmedik reaksiyon.” Loglar bir sunucuda.",
"Gönül biliyor. Bir daha seninle aynı nöbete yazılmadı.",
P(YASADI, "Nurten Hanım yaşadı. Bir sabah kontrole geldiğinde seni gördü. Tanımadı. “Kızım, ne güzel doktorsun,” dedi. Teşekkür ettin. Yüzün kızardı. O fark etmedi."),
P(OLDU, "Nurten Hanım öldü. Oğuz dava açmadı. “beklenmedik reaksiyon.” Annesini Kartal'a gömdü. Adını hiç öğrenmedi."),
"Uzman oldun. Kendi asistanların var. Alerji sekmesini her seferinde açtırıyorsun.",
"Bir gece üçte bir asistan geliyor, gözleri kızarık. “Hocam, bir order'da hata yaptım. Hasta iyi. Ne yapmalıyım?”",
"Ağzında bir cümle: “Bir şey yazma. Ben hallederim.” Haluk Hoca'nın cümlesi. Tanıdık, rahatlatıcı. Dilinin ucunda."
]},

son_sistem: { son: true, baslik: "Asistan A", metin: [
P(S("t4A"), "O sabah sekmeyi açtın, hastaya sordun, oğluna sordun, sekmeyi yeniden açtın. Gönül güldü: “Yeter kızım.”"),
P(S("t4B"), "Gönül'le birlikte baktınız: iki çift göz, bir sekme."),
P(S("t4C"), "“Hiç bir ilaçtan kızardınız mı?” Adam düşündü. “Bir kere,” dedi. “Askerde. Unutmuşum.”"),
P(S("t4D"), "Bir an durdun. Sonra devam ettin. Bu kez sekmeyle."),
"Bildirimin bir şeyi değiştirdi. Alerji sekmesi kırmızı. Bütün ülkede. Nöbetler yirmi dört saatle sınırlandı. Kâğıt üstünde. Acile iki yeni kadro geldi.",
"Komite bildirimini eğitim materyaline koydu. Her yeni asistan okuyor. Adın yok. “Asistan A” yazıyor.",
"Bireysel kusur tespit edilmemiştir.",
P(function(d){ return d.yonlendirdi || d.kacti; }, "Oğuz sana “Kim yazdı?” diye sormuştu. Cevap vermedin."),
"Bir sistem bir insanın yüzüne bakıp “ben yaptım” diyemez. Sen sistemin değişmesini sağladın. O cümleyi kimseye söylemedin.",
"Eğitim materyalinin bir sayfasında, kenar boşluğunda, bir asistan kurşunkalemle sormuş: “Asistan A sonra ne oldu?” Kimse cevap yazmamış."
]},

son_birak: { son: true, baslik: "Prospektüs", metin: [
P(S("t4A"), "O sabah sekmeyi açtın, hastaya sordun, oğluna sordun, sekmeyi yeniden açtın. Gönül güldü: “Yeter kızım.”"),
P(S("t4B"), "Gönül'le birlikte baktınız: iki çift göz, bir sekme."),
P(S("t4C"), "“Hiç bir ilaçtan kızardınız mı?” Adam düşündü. “Bir kere,” dedi. “Askerde. Unutmuşum.”"),
P(S("t4D"), "Bir an durdun. Sonra devam ettin. Bu kez sekmeyle."),
"Bir ay sonra Haluk Hoca dilekçeni imzaladı. Kapıda elini sıktı. “Yazık. İyi bir hekimdin.” Geçmiş zaman.",
"Bir ilaç firmasında tıbbi danışmansın. Kimse gece üçte aramıyor. Kimse yumruk atmıyor.",
"Maaşın iki katı. Uykuların düzelmedi.",
"Ufuk'la ayda bir buluşuyorsunuz. Bir gün: “Bizim sınıftan on iki kişi bıraktı. Otuz kişilik sınıf.” Sayıyı söyledikten sonra ikiniz de çayınıza baktınız.",
P(OLDU, "Bazen Kartal'dan geçiyorsun. Bir mezarlığın önünden. Durmuyorsun. Yavaşlıyorsun."),
P(YASADI, "Bir gün bir markette yaşlı bir kadın gördün, gelininin koluna girmiş. Nurten Hanım'a benziyordu. Dönüp bakmadın."),
"Her ilaç kutusunun prospektüsünü okurken alerji bölümüne gelince parmağın satırın üstünde duruyor."
]},

son_nobet: { son: true, baslik: "Gri Sekme", metin: [
P(S("t4A"), "O sabah sekmeyi açtın, hastaya sordun, oğluna sordun, sekmeyi yeniden açtın. Gönül güldü: “Yeter kızım.”"),
P(S("t4B"), "Gönül'le birlikte baktınız: iki çift göz, bir sekme."),
P(S("t4C"), "“Hiç bir ilaçtan kızardınız mı?” Adam düşündü. “Bir kere,” dedi. “Askerde. Unutmuşum.”"),
P(S("t4D"), "Bir an durdun. Sonra devam ettin. Bu kez sekmeyle."),
"Nöbetlere devam ediyorsun. Binlerce order. Her birinde alerji sekmesi.",
"Ne tam söyledin ne tam sakladın. Bir yerde konuştun, bir yerde sustun.",
P(YASADI, "Nurten Hanım yaşıyor. Bir refleks, bir saniye. Bunu hak etmedin. Ama oldu."),
P(OLDU, "Nurten Hanım öldü. Bir donma, bir saniye. Bunu da hak etmedin. Ama oldu."),
"Babanın cümlesi: “Ya kırar ya dikkatli yapar. İkisini birden de yapar.”",
"Bazı geceler uyanıp tavandaki lekeye bakıyorsun. Bazı sabahlar bir asistanın order'ını iki kez okuyup bir hatayı yakalıyorsun ve o asistan ne kadar yakından döndüğünü hiç bilmiyor.",
"Her nöbetin başında, bir kez daha:",
"“Alerjisi var mı?”"
]}

},

ayna: function(d){
  var out = [];
  var a = d.durustluk, b = d.sistem, c = d.sefkat;
  if(a >= b && a >= c) out.push("Çoğu kavşakta hatanı kendi adınla söyledin.");
  else if(b >= c) out.push("Çoğu kavşakta sisteme baktın: otuz altı saate, gri sekmeye, yumruğa.");
  else out.push("Çoğu kavşakta Ufuk'un, Gönül'ün, babanın yanında kaldın.");
  if(d.kol === "ortbas" && !d.ortaya) out.push("Bir kaydı değiştirdin ve kimse bilmedi.");
  if(d.gecikme) out.push("Ufuk'un yanında kaldığın kırk dakika sarı alanda eksikti.");
  if(d.erken_adrenalin) out.push("Adrenalini düşünmeden yaptın. Nurten Hanım o yüzden yaşadı.");
  if(!d.erken_adrenalin) out.push("Adrenalinden önce birkaç saniye geçti.");
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
