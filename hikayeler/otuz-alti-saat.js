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
giris: "İstanbul'da bir eğitim hastanesinin acil servisi. Sen üçüncü yılındaki bir asistansın ve otuz altı saatlik bir nöbetin ortasındasın. Bekleme salonunda yüz yirmi kişi var, bir arkadaşın az önce yumruk yedi, gözlerin yorgunluktan kapanıyor. Otuz birinci saatte ekranda açmadığın tek bir sekme her şeyi değiştirecek. Bu hikâye bir hatayı, bir sistemi ve bir insanın kendisiyle yaşamaya devam edip edemeyeceğini anlatıyor.",
kavramlar: ["Tıbbi hata ve dürüstlük", "Ahlaki şans", "Birey ve sistem", "Kendini affetmek"],
ozet: "Acil serviste otuz birinci saatindesin ve yorgunluktan ekrandaki bir sekmeyi açmadın. Yetmiş dört yaşında bir kadın senin yazdığın bir ilaç yüzünden yoğun bakımda. Şimdilik kimse bilmiyor.",
baslangic: "a1",
durum: { durustluk: 0, sistem: 0, sefkat: 0 },

sahneler: {

a1: { saat: "Saat 24 · Sabah 08.00", baslik: "İkinci Gün", metin: [
"Dün sabah sekizde başladın, şimdi yine sabahın sekizi. Önünde on iki saat daha var. Yirmi dört saatlik nöbet, devir teslim, bir de raporlu bir arkadaşın yerine kalman, hepsi otuz altı saat ediyor.",
"Adın Selin, yirmi dokuz yaşındasın, acil tıp asistanısın, üçüncü yılın. Bekleme salonunda yüz yirmi kişi var. Koridor sedyelerle dolu, sedyelerde hastalar, yanlarında poşetler, termoslar, bir kafeste bir muhabbet kuşu. Üç asistan, bir uzman ve altı hemşire var.",
"Gözlerinin arkasında bir basınç var. Gece bir ara bir sandalyede dört dakika uyumuşsun. Uyandığında elinde hâlâ bir kalem vardı ve nerede olduğunu otuz saniye hatırlayamadın.",
"Telefonunda babandan dün geceden kalma bir mesaj duruyor: “Kızım yemek yedin mi?” Cevap vermedin, yemedin de.",
"Yirmi yıllık acil hemşiresi Gönül yanından geçerken cebine bir çikolata sokuyor. “Ye şunu,” diyor, “yoksa yere yığılırsın, seni de ben kaldırırım, belim ağrıyor.”",
"Bir monitör ötüyor, bir ambulans geliyor, bir çocuk ağlıyor, biri “Doktor! Doktor!” diye bağırıyor."
], secenekler: [
{ t: "Çikolatayı yiyip işe dalarsın.", to: "a2", etki: { sefkat: 1 } },
{ t: "Babana kısa bir mesaj atarsın: “Yedim baba.”", to: "a2", etki: { sefkat: 1, babaya_yalan: true } },
{ t: "Haluk Hoca'ya gidip dinlenmen gerektiğini söylersin. Yerine bakacak kimse yok, yükün Ufuk'a kalacak.", to: "a2", etki: { sistem: 1, dinlenme_istedi: true } },
{ t: "Yüzünü soğuk suyla yıkayıp aynaya bakarsın.", to: "a2", etki: { durustluk: 1, ayna: true } }
]},

a2: { saat: "Saat 28 · 12.10", baslik: "Yumruk", metin: [
P(S("a1A"), "Çikolatanın yarısını yedin, öbür yarısı cebinde eridi. Bir saat sonra bir tansiyon aletinin cırt cırtını açarken parmakların yapış yapış oldu."),
P(S("a1B"), "“Yedim baba,” diye yazdın. Bir dakika sonra cevap geldi: “Aferin kızım, uyu biraz.” İkiniz de birer yalan söylemiştiniz, o da uyumadığını biliyordu."),
P(S("a1C"), "Haluk Hoca seni dinledi. “Hepimiz yorgunuz Selin,” dedi, “ben de otuz saattir buradayım, dayan.” Haklıydı ama bu hiçbir şeyi düzeltmiyordu."),
P(S("a1D"), "Aynada gözlerinin altı mosmor, saçı tokasından kurtulmuş, önlüğünde kimin olduğunu hatırlamadığın kurumuş bir kan lekesi olan bir kadın vardı. Yüzünü bir daha yıkadın."),
"Öğlen on ikiyi on geçe sarı alandan bağırışlar geliyor, koşuyorsun.",
"Kırklarında bir adam asistan arkadaşın Ufuk'un yakasına yapışmış. “Üç saattir bekliyoruz! Babam ölüyor!” diye bağırıyor. Babası bir sedyede yatıyor, göğüs ağrısıyla gelmiş, EKG'si normal, tetkikleri bekleniyor. Ufuk bir şey söylüyor ama adam duymuyor.",
"Sonra bir yumruk atıyor. Ufuk geriye savrulup bir sedyeye çarpıyor, yere düşüyor, burnundan kan geliyor.",
"Herkes donup kalıyor, sonra çığlıklar başlıyor. Güvenlik geliyor ama çok uzaktan, çok yavaş geliyor.",
"Adam hâlâ bağırıyor. Ufuk yerde, elini yüzüne kapatmış. Kafesteki muhabbet kuşu deli gibi çırpınıyor."
], secenekler: [
{ t: "Ufuk'un yanına koşarsın.", to: "x_kerem", etki: { sefkat: 1 } },
{ t: "Güvenliğe bırakıp triyaja dönersin, kırk hasta bekliyor.", to: "a3", etki: { sistem: 1, triyaj: true } },
{ t: "Adamın karşısına geçersin.", to: "x_kavga", etki: { durustluk: 1 } },
{ t: "Personel tuvaletine girip kapıyı kilitlersin. İki dakika, yalnızca iki dakika.", to: "a3", etki: { sefkat: 1, tuvalet: true } }
]},

x_kerem: { saat: "Saat 28 · 12.20", baslik: "Ufuk", metin: [
"Ufuk'u personel odasına götürüyorsun. Burnu kanıyor, kırık olabilir. Buz, gazlı bez, bir sandalye buluyorsun. Ufuk titriyor.",
"“Bırakacağım,” diyor, burnu tıkalı. “Yemin ederim Selin. Babam istedi diye tıp okudum. Şimdi bir adam babası üç saat bekledi diye beni yumrukluyor. Üç saat! Ben otuz saattir bekliyorum.”",
"Ağlıyor, gazlı bez kandan ve gözyaşından pembeleşiyor.",
"Polis geliyor, ifade alınıyor. Bir memur iki parmakla yazıyor, her cümleyi iki kere soruyor. “Darp eden şahsın boyu?” Kırk dakika sürüyor.",
"Kırk dakika boyunca sarı alanda bir asistan eksik.",
"İfade bitince Ufuk sana bakıyor. “Sağ ol,” diyor, “sen olmasan...” Cümlesini bitirmiyor.",
"Sarı alana döndüğünde bekleyenlerin sayısı kırk değil, elli iki."
], secenekler: [
{ t: "Ufuk'a eve gitmesini, onun hastalarına senin bakacağını söylersin.", to: "a3", etki: { sefkat: 1, gecikme: true, keremi_gonderdi: true } },
{ t: "“Bırakma,” dersin, “bunu yapan biz değiliz.”", to: "a3", etki: { sistem: 1, gecikme: true } },
{ t: "Elli iki kişi bekleyebilir mi diye düşünerek Ufuk'la biraz daha oturursun.", to: "a3", etki: { sefkat: 1, gecikme: true, uzun_kaldi: true } },
{ t: "Bir şey demeden işe dönersin.", to: "a3", etki: { gecikme: true } }
]},

x_kavga: { saat: "Saat 28 · 12.12", baslik: "Ön", metin: [
"Ufuk'la adamın arasına giriyorsun. Bir altmış beşsin, adam senden bir baş uzun, nefesi sigara kokuyor.",
"“Geri çekilin,” diyorsun ve sesin titremiyor. Bunu sonradan hatırlayıp şaşıracaksın.",
"“Sen de mi? Siz doktor değil kasapsınız! Babamı burada öldüreceksiniz!”",
"Bir el göğsüne değip seni itiyor, bir sedyenin kenarına çarpıyorsun. Canın acımıyor, ya da acıyor ama hissetmiyorsun.",
"Güvenlik yetişiyor, iki görevli adamı kollarından tutuyor. Adam babasının adını, hastanenin adını, bir milletvekilinin adını bağırıyor.",
"Ufuk kanlar içinde yerde. “Delisin,” diyor, sonra “Sağ ol,” diyor.",
"Ellerine bakıyorsun, titriyorlar ve durmuyorlar. Adrenalin çekilirken geride yirmi sekiz saatin üstüne bir boşluk bırakıyor."
], secenekler: [
{ t: "Ellerinin titremesi geçene kadar beş dakika oturursun.", to: "a3", etki: { sefkat: 1, titreme: true } },
{ t: "Titreyen ellerle elli hastanın başına dönersin.", to: "a3", etki: { sistem: 1, titreme: true, devam: true } },
{ t: "Adamın üç saattir bekleyen, göğüs ağrılı babasının yanına gidersin.", to: "a3", etki: { durustluk: 1, titreme: true, babaya_bakti: true } },
{ t: "Haluk Hoca'yı bulup ne olduğunu anlatırsın.", to: "a3", etki: { sistem: 1, titreme: true } }
]},

a3: { saat: "Saat 31 · 15.00", baslik: "Nurten Hanım", metin: [
P(S("x_keremB"), "“Bırakma,” dedin. Ufuk gazlı bezi burnuna bastırdı. Yarım saat sonra sarı alandaydı, morarmış burnuyla bir çocuğun boğazına bakıyordu, çocuk da onun burnuna bakıyordu."),
P(S("x_keremC"), "Ufuk'la oturdun. Sivas'tan, annesinin tandırından, bir gün aile hekimi olma hayalinden bahsetti. Döndüğünde Gönül kapıdaydı. “Neredesin? Elli beş oldu,” dedi."),
P(S("x_keremD"), "Bir şey demeden çıktın. Kapıda Ufuk'un arkandan baktığını hissettin."),
P(S("x_kavgaA"), "Beş dakika oturdun. Titreme geçmedi, yalnızca küçülüp içeri çekildi."),
P(S("x_kavgaB"), "Titreyen ellerinle ilk hastanın damarını iki kere kaçırdın. Gönül hiçbir şey demeden iğneyi elinden aldı."),
P(S("x_kavgaC"), "Adamın babasının yanına gittin, EKG'si normaldi. Yaşlı adam bileğini tuttu. “Oğlum aslında öyle biri değil kızım,” dedi, “korkuyor. Annesini burada kaybettik.”"),
P(S("x_kavgaD"), "Haluk Hoca seni dinledi. “Güvenlik tutanak tutar,” dedi. “Şikâyet edersen sen de mahkemelere düşersin, değer mi?” Cevap beklemedi."),
P(S("a2B"), "Triyaja döndün. Arkanda güvenlik adamı götürüyordu, Ufuk yerdeydi. Dönüp bakmadın, kırk hasta bekliyordu."),
P(S("a2D"), "Tuvaletin kapısına yaslanıp yere oturdun. Ağlamadın, gücün yoktu. Gözlerini kapadın. Biri kapıyı yumruklayıp bağırdı: “Selin! Kırmızı alan!”"),
P(function(d){ return d.keremi_gonderdi; }, "Ufuk eve gitti, onun hastaları da artık senin."),
"Saat üç. Sarı alanın yedinci sedyesinde yetmiş dört yaşında Nurten Hanım yatıyor. Ateşi, öksürüğü, nefes darlığı var. Grafide sağ alt lobda bir gölge görünüyor, zatürre.",
"Gelini yanında, kucağında kayınvalidesinin el çantası duruyor. “Hocam, annem bugün biraz karışık, ateşten herhalde. Normalde turp gibidir.”",
"Nurten Hanım mırıldanıyor: “Kızım... o ilaç... bir keresinde kızarmıştım...” Gelini elini okşuyor. “Tamam anneciğim, doktor hanım bilir.”",
"Ekranda dosyası açık. Üstte sekmeler var, Genel, Tahliller, Görüntüleme, Notlar, Alerjiler. Sistem güncellemesinden beri hiçbiri kırmızı yanmıyor, hepsi aynı gri renkte.",
"Gönül yanında. “Hocam, antibiyotik ne yazıyoruz? Alerjisi var mı?”",
"Gözlerin ekranda ama Alerjiler sekmesine tıklamıyorsun. Bir önceki hasta aklında, o da yaşlıydı, o da zatürreydi ve onun alerjisi yoktu.",
"“Yok,” diyorsun. “Ampisilin-sulbaktam, damardan.”",
"Gönül orderı alıp gidiyor, sen sekizinci sedyeye geçiyorsun."
], secenekler: [
{ t: "Göğüs ağrısı bekleyemez, sekizinci sedyeye geçersin.", to: "a4", etki: { sistem: 1 } },
{ t: "Bir an durursun, bir şey mi unuttun? Hatırlayamaz, devam edersin.", to: "a4", etki: { durustluk: 1, his: true } },
{ t: "Geline annesinin neyi kastettiğini sorarsın.", to: "a4", etki: { durustluk: 1, gelin_soru: true } },
{ t: "Cebindeki erimiş çikolatanın kalanını yersin, ellerin titriyor.", to: "a4", etki: { sefkat: 1 } }
]},

a4: { saat: "Saat 31 · 15.20", baslik: "Kod", metin: [
P(S("a3A"), "Sekizinci sedyede göğüs ağrısı vardı, EKG çektin, troponin istedin. Nurten Hanım'ın dosyası arkanda bir yerde kapanmıştı."),
P(S("a3B"), "Bir şey unutmuştun, dilinin ucundaki bir kelime gibiydi ama bulamadın. Yirmi dakika sonra bir sesle geri gelecekti."),
P(S("a3D"), "Erimiş çikolatayı ambalajından yaladın, tadı bir saniye dilinde kaldı."),
P(S("a3C"), "“Anneniz neyi kastetti?” diye sordun. Gelin omuz silkti. “Bilmiyorum hocam, yıllar önce bir şey olmuş galiba.” Sonra telefonu çaldı ve cümle havada kaldı."),
"Yirmi dakika sonra koridorun öbür ucundan Gönül'ün sesi geliyor, hiç duymadığın bir tonla: “Selin! Yedi!”",
"Koşuyorsun. Nurten Hanım'ın yüzü kıpkırmızı, dudakları şişmiş, boynunda, kollarında kabarıklar çıkmış. Her nefesi bir ıslık gibi. Tansiyonu yetmişe kırk, sonra altmış, sonra elli.",
"Anafilaksi. Sınavlarda sorusunu cevapladın, bir kere de gördün.",
"Serumu kapatıyorsun.",
"Gelin çığlık atıyor. Gönül oksijeni açıyor, biri acil arabasını getiriyor, tekerleği sıkışınca tekmeyle kurtarıyor. Herkes sana bakıyor.",
"Otuz bir saattir ayaktasın. Doğru dozu düşünüyorsun, bir saniye, iki saniye geçiyor."
], secenekler: [
{ t: "Düşünmeden, tam kitaptaki gibi adrenalini hemen kas içine yaparsın.", to: "a5", etki: { erken_adrenalin: true, durustluk: 1 } },
{ t: "Dozu Gönül'le birlikte hesaplayarak önce damar yolundan adrenalin hazırlatırsın.", to: "a5", etki: { sistem: 1, gec_adrenalin: true } },
{ t: "Bir uzman gerektiği için Haluk Hoca'yı çağırtırsın.", to: "a5", etki: { sistem: 1, levent_cagrildi: true } },
{ t: "Donup kalırsın, Gönül'ün sesiyle kendine gelirsin.", to: "a5", etki: { dondu: true } }
]},

a5: { saat: "Saat 32 · 15.50", baslik: "Sekme", metin: [
P(S("a4B"), "Damar yolundan hazırlattın, dozu Gönül'le iki kere hesapladınız. Doğruydu ama hesap dakikalar sürdü ve o dakikalarda Nurten Hanım'ın dudakları morardı."),
P(S("a4C"), "Haluk Hoca'nın gelmesi dört dakika sürdü. Dört dakika boyunca Gönül sana, sen de kapıya baktın. Adrenalini Haluk Hoca yaptı."),
P(S("a4D"), "Donup kaldın, bir, iki, üç saniye. “Selin!” Sonra ellerin kendiliğinden hareket etti, kitaptaki gibi ama geç."),
P(YASADI, "İğne bacağına girdi. Bir dakika, iki dakika geçti, ıslık azaldı. Tansiyonu yükseldi, düştü, yine yükseldi. Damardan ikinci bir doz, steroid, antihistaminik, sıvı verdiniz. Kalbi durmadı."),
P(OLDU, "Doz hesaplandı, hazırlandı, verildi ama hava yolu çoktan kapanmıştı ve kalbi durdu. On iki dakika boyunca Gönül, sen ve başka bir asistan sırayla kalp masajı yaptınız. Kaburgaları kırıldı, hep kırılır. On ikinci dakikada nabzı geldi."),
"Entübe edip yoğun bakıma gönderiyorsunuz.",
"Sedye gidiyor ve yedinci sedyenin yeri boş kalıyor. Yerde enjektör kapakları, buruşuk bir çarşaf, gelinin düşürdüğü el çantası duruyor. Gelin koridorda telefonla konuşurken ağlıyor.",
"Bilgisayara dönüyorsun, bir not yazman gerekiyor.",
"Ve bir refleksle, belki bir önseziyle Alerjiler sekmesine tıklıyorsun.",
"“PENİSİLİN. Reaksiyon: anafilaksi (2019, Kartal Devlet Hastanesi). Kesinlikle verilmemeli.”",
"Ampisilin bir penisilindir.",
"Bir daha okuyorsun ama kelimeler yerinden oynamıyor.",
"Arkanda bir nefes var, Gönül. O da ekrana bakıyor."
], secenekler: [
{ t: "Bir sandalyeye çökersin.", to: "a6", etki: { sefkat: 1 } },
{ t: "Lavaboya koşup kusarsın.", to: "a6", etki: { durustluk: 1, kustu: true } },
{ t: "Gönül'e dönüp “Sen de gördün,” dersin.", to: "a6", etki: { durustluk: 1, hulya_gordu: true } },
{ t: "Düşünmek için bir anlığına ekranı kapatırsın.", to: "a6", etki: { ekran_kapatti: true } }
]},

a6: { saat: "Saat 33 · 17.00", baslik: "Seçim", metin: [
P(S("a5A"), "Bir sandalyeye çöktün. Gönül elini omzuna koydu ama bir şey demedi. Eli ağırdı."),
P(S("a5B"), "Kustun, midende yalnızca çikolata ve kahve vardı. Lavabonun aynasında sabahki kadın duruyordu."),
P(S("a5C"), "Gönül'ün yüzü bembeyazdı. “Ben de sordum,” dedi, “sen yok dedin, ben de bakmadım. İkimiz de.” Bu kelimenin seni hafifletip hafifletmediğini bilmiyorsun."),
P(S("a5D"), "Ekranı kapattın. Kararmış ekranda kendi yansımanı, sekmenin hiç açılmadığı bir dünyayı gördün. Sonra Gönül uzanıp ekranı yeniden açtı. “Hocam,” dedi, başka bir şey demedi."),
"Saat beş oldu, acil hâlâ dolu.",
"Yoğun bakım arıyor. Nurten Hanım stabil ama ağır, bilinci kapalı. Önümüzdeki kırk sekiz saat belirleyici olacak.",
"Dosyadaki order kaydında “ampisilin-sulbaktam, 15.04, Dr. Selin Acar” yazıyor. Alerji kaydında da “penisilin, 2019.” Aynı dosyada, iki ayrı sekmede.",
"Hastanede kâğıt üstünde bir “olay bildirim sistemi” var. Asistanlar arasında bir söz dolaşır: “Bildirirsen sen yanarsın, bildirmezsen hasta yanar.”",
"Koridorda gelinle bir adam sana doğru yürüyor. Nurten Hanım'ın oğlu Oğuz işten koşarak gelmiş, kravatı yamulmuş, elinde bir poşet portakal var."
], secenekler: [
{ t: "Kariyerini, belki diplomanı bir koridorda ortaya koyarak Oğuz'la geline şimdi, burada her şeyi söylersin.", to: "h1", etki: { durustluk: 2, kol: "acik" } },
{ t: "Önce Haluk Hoca'ya gidersin ama ailenin ilk duyacağı şeyi artık sen belirlemeyeceksin.", to: "b1", etki: { sistem: 1, kol: "hiyerarsi" } },
{ t: "Sistemde orderı, ilacın adını düzeltirsin. Belki Gönül dışında kimse fark etmeyecek.", to: "c1", etki: { kol: "ortbas" } },
{ t: "Asıl nedeni otuz altı saatlik nöbet, sekmeler, eksik kadro olarak gösteren bir olay bildirimi yazarsın. Doğru ama ailenin karşısına çıkmadan.", to: "s1", etki: { sistem: 2, kol: "sistem" } }
]},

/* ---------- AÇIKLIK KOLU ---------- */
h1: { saat: "Saat 33 · 17.10", baslik: "Oğuz", metin: [
P(S("a6A"), "Onlara doğru yürüdün. Üç adım attın ve her adımda bir cümle kurup bozdun."),
P(S("b1B"), "“Aileye ben söylemek istiyorum hocam,” dedin. Haluk Hoca sana baktı. “Senin kararın,” dedi, “ama yalnız gideceksin.”"),
P(S("c1C"), "Değişikliği geri aldın, ekranda eski satır yeniden belirdi: ampisilin-sulbaktam, 15.04, Dr. Selin Acar. Sonra koridora yürüdün."),
P(S("c2A"), "“Haklısın,” dedin. Gönül kapıyı açıp bekledi, sen de kaydı geri aldın. Koridora birlikte yürüdünüz."),
"Oğuz kırk beş yaşlarında, yüzü bembeyaz. “Annem nasıl? Sabah iyiydi, yalnızca öksürüyordu.”",
"Onları boş bir odaya alıp kapıyı kapatıyorsun. Oturmuyorlar, portakal poşeti Oğuz'un elinde sallanıyor.",
"Kendi hatanı bir aileye nasıl söyleyeceğini sana kimse öğretmedi.",
"“Annenize bir antibiyotik verdik, penisilin grubundan. Annenizin penisilin alerjisi varmış, kayıtlarda yazıyordu ama ben bakmadım. İlacı ben yazdım. Ağır bir alerjik reaksiyon gelişti, şu an yoğun bakımda. Bu benim hatam.”",
"Oğuz'un yüzü değişmiyor, anlamamış gibi. Gelin bir sandalyeye çöküyor, o anlamış.",
"Oğuz çok alçak bir sesle konuşuyor: “Annemi siz mi... Bir ilaçla mı?”",
"Sonra sesi yükseliyor. “Kaç saattir buradasınız? Uyudunuz mu? Bu nasıl hastane?” Poşet elinden düşüyor, portakallardan biri yuvarlanıp senin ayağına çarpıyor."
], secenekler: [
{ t: "“Otuz üç saattir,” dersin, “ama bu bir bahane değil.”", to: "h2", etki: { durustluk: 1, saat_soyledi: true } },
{ t: "Başka bir şey eklemeden “Özür dilerim,” dersin.", to: "h2", etki: { durustluk: 1, sefkat: 1, ozur: true } },
{ t: "“Hastane yönetimiyle de konuşmanız gerekecek, bu bir kurum meselesi de,” dersin.", to: "h2", etki: { sistem: 1 } },
{ t: "Oğuz'un öfkesini dökmesine izin verirsin.", to: "h2", etki: { sefkat: 1 } }
]},

h2: { saat: "Ertesi gün", baslik: "Avukat", metin: [
P(S("b3A"), "Sabah ilk iş Oğuz'u buldun. Yoğun bakımın kapısında, dünkü gömleğiyle bekliyordu. Dünkü “beklenmedik reaksiyonun” gerçeğini söyledin. Oğuz bir şey demedi ama öğlen avukatını aradı."),
P(S("h1C"), "“Hastane yönetimiyle konuşun,” dedin. Oğuz sana baktı. “Yani suçlu bir bina,” dedi ve gitti."),
P(S("h1D"), "Oğuz bağırdı, duvara vurdu, sonra bir sandalyeye çöküp ağladı. Sen hep oradaydın. Bitince başını kaldırıp “Hâlâ burada mısınız?” dedi. Evet dedin, portakalı yerden alıp ona uzattın. Önce almadı, sonra aldı."),
P(S("h1A"), "“Otuz üç saat ha,” dedi Oğuz. Öfkesi bir an başka bir yere döndü, sonra geri geldi. “Bahane değil. Ama bu da doğru, değil mi?”"),
P(S("h1B"), "“Özür,” dedi Oğuz, kelimeyi tarttı ve çıktı. Gelin arkasından gitmedi. “Annem sizi suçlamazdı,” dedi, “hep doktorlara güvenirdi.” Bu cümle yumruktan ağır geldi."),
"Ertesi sabah hastanenin avukatı seni beşinci kata çağırıyor. Sinem Hanım kırklarında bir kadın, masasında kâğıt peçeteye sarılı yarım bir simit duruyor.",
"“Dün aileye ne söylediniz?” diye soruyor.",
"Anlatıyorsun.",
"Sinem Hanım bir süre bir şey demiyor. Sonra “Bunu yapmamalıydınız,” diyor. “Hatayı kabul etmek davada aleyhinize en güçlü delil olur. Bir dahaki sefere önce bize gelin.”",
"Sonra simidini kenara itiyor. “Yirmi yıldır bu işi yapıyorum. Hekimlerin çoğu söylemez. Hukuken hata yaptınız.” Biraz duruyor. “Gerisini ben söyleyemem, ben avukatım.”",
"Masada bir dosya var, Oğuz Bey bir avukat tutmuş."
], secenekler: [
{ t: "“Yine olsa yine yapardım,” dersin.", to: "h3", etki: { durustluk: 1, yine_yapardim: true } },
{ t: "“Şimdi ne yapmam gerekiyor?” diye sorarsın.", to: "h3", etki: { sistem: 1 } },
{ t: "“Hastaneye zarar verdiysem özür dilerim,” dersin.", to: "h3", etki: { sistem: 1, kurum_ozur: true } },
{ t: "Oğuz Bey'le avukatsız konuşmak istediğini söylersin.", to: "h3", etki: { durustluk: 1, sefkat: 1, ogz_yeniden: true } }
]},

h3: { saat: "Üçüncü gün", baslik: "Yoğun Bakım", metin: [
P(S("h2A"), "“Yine yapardım,” dedin. Sinem Hanım kalemini bıraktı. “Bunu mahkemede söylemeyin,” dedi. Simidini yeniden eline aldı ama ısırmadan tuttu."),
P(S("h2B"), "Sinem Hanım sana bir liste uzattı, ifade, savunma, bilirkişi. Hiçbirinde “Nurten” yazmıyordu."),
P(S("h2C"), "Sinem Hanım başını kaldırdı. “Özür dilemeniz gereken kişi bu katta değil,” dedi, “yedinci katta.”"),
P(S("h2D"), "“Bunu öneremem,” dedi Sinem Hanım, “ama durduramam da.” Akşam yoğun bakımın kapısında Oğuz'un yanına oturdun, bir saat konuşmadınız. Sonra Oğuz anlattı: “‘Kızarmıştım’ demiştir. Hep öyle derdi. Kartal'da o zaman ölüyordu ama hep ‘kızardım’ derdi. Her şeyi küçültürdü.”"),
P(YASADI, "Üçüncü gün tüpü çıkarıyorlar, gözlerini açıyor. Kafası karışık ama oğlunu, gelinini tanıyor. Bir hafta sonra servise, iki hafta sonra evine çıkıyor."),
P(YASADI, "Bir hafta sonra servise uğruyorsun. Nurten Hanım pencerenin önünde oturuyor, seni görünce gülümsüyor ama tanımıyor. “Sen de mi doktorsun kızım? Ne kadar gençsin. Bir şeyler ye, bak ne kadar zayıfsın.”"),
P(OLDU, "Üçüncü gün beyin görüntüleri geliyor. Kalp on iki dakika durmuş, beyin yeterince oksijen alamamış. Uyanmayacak."),
P(OLDU, "Beşinci gün aile cihazın kapatılmasına karar veriyor. Akşam Oğuz annesinin elini tutuyor, gelin dua ediyor. Sen kapının dışındasın, seni çağırmadılar ama gitmeni de istemediler."),
"Aynı hatayı yapan iki hekimden birinin hastası yaşar, öbürününki ölür ve hukuk ikincisini cezalandırır. Senin hangisi olacağını bir saniyelik bir refleks belirledi."
], secenekler: [
{ t: function(d){ return YASADI(d) ? "Nurten Hanım'a kim olduğunu söylersin." : "Yoğun bakımın kapısında Oğuz'u beklersin."; }, to: "t1", etki: function(d){ d.durustluk++; if(YASADI(d)) d.nurtene_soyledi = true; else d.kapida_bekledi = true; } },
{ t: function(d){ return YASADI(d) ? "“Evet teyze, doktorum,” dersin. Başka bir şey söylemeden." : "Hastaneden çıkıp yürürsün."; }, to: "t1", etki: function(d){ d.sefkat++; } },
{ t: "İki ihtimali, yaşamasını ve ölmesini, hangisinin senin elinde olduğunu düşünürsün.", to: "t1", etki: { durustluk: 1, sans_dusundu: true } },
{ t: "Ufuk'u ararsın.", to: "t1", etki: { sefkat: 1, keremi_aradi: true } }
]},

/* ---------- HİYERARŞİ KOLU ---------- */
b1: { saat: "Saat 33 · 17.10", baslik: "Haluk Hoca", metin: [
"Haluk Hoca nöbetçi odasında. Elli yaşında, on beş yıldır bu acilde çalışıyor, masasında yarısı içilmiş üç bardak çay duruyor. Seni görünce yüzü değişiyor.",
"Her şeyi anlatıyorsun, sekmeyi, orderı, reaksiyonu, kodu.",
"Dinliyor, sen bitirince pencereden dışarı bakıyor. Otoparkta biri arabasını iki yeri kaplayacak şekilde park etmiş.",
"“Selin, son beş yılda bu dört kere oldu. Sistem değişti, sekmelerin rengi gitti, uyarı penceresi kaldırıldı. Ben üç kere yazdım, bilgi işleme, başhekimliğe. Kimse bir şey yapmadı.”",
"“Şimdi beni dinle. Bir şey yazma, bildirim de yazma. Dosyaya ‘beklenmedik ilaç reaksiyonu’ yaz. Aileyle ben konuşurum. Sen eve git, uyu.”",
"“Ama hocam...”",
"“Bildirirsen ne olur? Soruşturma, disiplin, belki dava, belki mesleğin gider. Sistem? Sistem aynen kalır. Seni korumak benim işim.”"
], secenekler: [
{ t: "Haluk Hoca'nın dediğini yapıp eve gidersin.", to: "b2", etki: { sistem: 1, eve: true } },
{ t: "“Aileye ben söylemek istiyorum hocam,” dersin.", to: "h1", etki: { durustluk: 2, kol: "acik", hiyerarsi_asti: true } },
{ t: "Eve gitmezsin, Haluk Hoca'nın aileyle nasıl konuşacağını görmek için kalırsın.", to: "b2", etki: { durustluk: 1, kaldi: true } },
{ t: "“Hocam, siz üç kere yazdınız. Dördüncüsünü ben yazayım,” dersin.", to: "s1", etki: { sistem: 2, kol: "sistem", leventle: true } }
]},

b2: { saat: "Saat 34 · 18.00", baslik: "Aile Odası", metin: [
P(S("b1A"), "Eve gittin ama uyumadın. Saat dokuzda Haluk Hoca aradı. “Konuştum,” dedi, “beklenmedik reaksiyon dedim, anladılar, merak etme.” Neyi anlamışlardı?"),
P(S("b1C"), "Kaldın. Aile odasının kapısı aralıktı, sen de koridorda duvara yaslanmış duruyordun."),
P(S("b1C"), "Haluk Hoca sakin, insani bir sesle konuştu. “Annenize bir antibiyotik verildi ve ağır bir alerjik reaksiyon gelişti. Bu bazen olur, ekibimiz çok hızlı müdahale etti.” Her cümlesi doğruydu ama bir şey eksikti."),
P(S("b1C"), "Oğuz sordu: “Annemin alerjisi var mıydı? Siz biliyor muydunuz?” Haluk Hoca bir saniyeden kısa bir süre durdu. “Kayıtlarımızı inceleyeceğiz,” dedi. Oğuz başını salladı, güveniyordu."),
"Gece oluyor. Acil servisin arka kapısında, sigara içenlerin durduğu yerdesin. Sen içmiyorsun, sonra Gönül geliyor, o da içmiyor ama ikiniz de yine oraya geliyorsunuz.",
"“Haluk Hoca ne dedi?” diye soruyor.",
"Anlatıyorsun.",
"Gönül uzun süre konuşmuyor. “Yirmi yıldır buradayım,” diyor sonunda, “bu dördüncüsü. Her seferinde aynı oluyor. Biri konuşuyor, biri susuyor, aile ‘beklenmedik reaksiyon’ deyip evine gidiyor. Sekme hâlâ gri.”"
], secenekler: [
{ t: "“Ne yapmalıyım Gönül Abla?” diye sorarsın.", to: "b3", etki: { sefkat: 1, hulyaya_sordu: true } },
{ t: "“Haluk Hoca beni korumaya çalışıyor,” dersin.", to: "b3", etki: { sistem: 1 } },
{ t: "Nasıl olacağını bilmeden “Bu sefer farklı olacak,” dersin.", to: "b3", etki: { durustluk: 1 } },
{ t: "Bir şey demeden Gönül'ün yanında durursun.", to: "b3", etki: { sefkat: 1 } }
]},

b3: { saat: "Gece", baslik: "Uyku", metin: [
P(S("b2B"), "“Biliyorum,” dedi Gönül, “hepimizi korur ama kimseyi kurtarmaz.”"),
P(S("b2C"), "Gönül bir şey demedi, bu cümleyi yirmi yılda kaç kere duyduğunu sayar gibi yüzüne baktı."),
P(S("b2D"), "Yanında durdun. Bir süre sonra omzunu omzuna değdirdi, sonra ikiniz de içeri girdiniz."),
P(S("b2A"), "“Ne yapmalıyım diye sormayı yirmi yıl önce bıraktım,” dedi Gönül. “Sen sor ama kendine sor.”"),
"Gece ikide uyanıyorsun, kalbin çarpıyor, çarşaf ter içinde. Tavanda bir leke var, demek hep oradaymış.",
"Yoğun bakımı arıyorsun. “Stabil ama ağır,” diyor nöbetçi hemşire. “Siz kimsiniz?” Bir süre cevap veremiyorsun. “Acil asistanıyım,” diyorsun.",
"Evden sisteme bağlanıyorsun. Haluk Hoca'nın notu duruyor: “Antibiyotik sonrası beklenmedik anafilaktik reaksiyon. Hızlı müdahale ile stabilize edildi.” Bir sekme yanında da “Penisilin, 2019” yazıyor.",
"Gözlerini kapatınca açılmamış gri bir sekme görüyorsun."
], secenekler: [
{ t: "Sabah ilk iş Oğuz'u bulup gerçeği söylersin.", to: "h2", etki: { durustluk: 2, kol: "acik", gec_acik: true } },
{ t: "Haluk Hoca'nın haberi olmadan bir olay bildirimi yazarsın.", to: "s2", etki: { sistem: 2, kol: "sistem", gizli_bildirim: true } },
{ t: "Haluk Hoca haklı olabilir diye uyumaya çalışırsın.", to: "t1", etki: { sistem: 1, sustu: true } },
{ t: "Her şeyi kimseye göndermeden bir kâğıda yazarsın.", to: "t1", etki: { durustluk: 1, gunluk: true } }
]},

/* ---------- ÖRTBAS KOLU ---------- */
c1: { saat: "Saat 33 · 17.05", baslik: "Düzeltme", metin: [
"Order ekranında “Ampisilin-sulbaktam, 15.04, Dr. Selin Acar” yazıyor. Düzenle tuşuna bir kere tıklarsan ilacın adı seftriakson olarak değişebilir. O da bir antibiyotik ve penisilinle çapraz reaksiyonu nadir görülür. Nadir. “Beklenmedik reaksiyon.”",
"Ellerin klavyenin üstünde. Titrememeleri seni korkutuyor.",
"“Değişiklik nedeni” kutusu açılıyor, “Yanlış giriş, düzeltildi,” yazıyorsun.",
"Kaydediyorsun.",
"Ekranda yeni bir satır beliriyor, “Seftriakson, 15.04.” Eski satır görünmüyor ama sistemin bir yerinde, bir kayıt dosyasında duruyor, bunu biliyorsun.",
"Arkanda bir nefes hissediyorsun, dönüyorsun ama kimse yok. Ya da biri vardı ve gitti, perde hâlâ hafif hafif sallanıyor.",
"İlacı Gönül hazırlamıştı. Eczaneden gelen kutu bir çöp kutusunda olabilir, üstünde ampisilin yazıyor. Gelin orderı duymuş muydu?"
], secenekler: [
{ t: "Çöp kutusunu karıştırıp ilaç kutusunu bulursun.", to: "c2", etki: { kutu_atti: true } },
{ t: "Ne olacaksa olsun diye hiçbir şey yapmazsın.", to: "c2", etki: { sefkat: 1 } },
{ t: "Bunu yapamazsın, değişikliği geri alıp koridora, ailenin yanına yürürsün.", to: "h1", etki: { durustluk: 2, geri_aldi: true, kol: "acik" } },
{ t: "Ne gördüğünü bilmen gerektiği için Gönül'ü bulursun.", to: "c2", etki: { hulyaya_gitti: true } }
]},

c2: { saat: "Saat 34 · 18.30", baslik: "Gönül", metin: [
P(S("c1B"), "Hiçbir şey yapmadın. Ekran açık kaldı, yeni ilaç adı, yeni satır öylece durdu."),
P(S("c1D"), "Gönül'ü aramaya çıktın ama o seni önce buldu."),
P(S("c1A"), "Çöp kutusunu karıştırdın, enjektörler, gazlı bezler, eldivenler. Sonunda “Ampisilin-sulbaktam 1,5 g” yazan karton bir kutu buldun ve cebine koydun. Tuvalette onu küçük küçük parçalara ayırdın, hayatında bu kadar küçük bir şeyi hiç bu kadar dikkatle yırtmamıştın. Parçaları sifonla gönderdin, biri suyun üstünde kalınca bir daha çektin."),
"Gönül seni personel odasında bulup kapıyı kapatıyor.",
"“Selin,” diyor, bu sefer “hocam” demiyor. “Orderı değiştirdin.”",
"Bu bir soru değil.",
"“İlacı ben hazırladım, kutuyu ben açtım. Şişede ampisilin yazıyordu. Mahkemede sorarlarsa söylerim, yemin ederim söylerim.”",
"“Söylemek zorunda kalmayayım diye sana bir şans veriyorum. Yirmi yılda çok doktor hata yaptı, ben de yaptım. Ama senin için yalan söylemem.”",
"Gözleri kıpkırmızı. Kızgın değil, hayal kırıklığına uğramış ve bu daha kötü."
], secenekler: [
{ t: "“Haklısın, düzeltiyorum,” dersin.", to: "h1", etki: { durustluk: 2, kol: "acik", hulya_dondurdu: true } },
{ t: "“Bu benim kariyerim Gönül Abla, lütfen,” dersin.", to: "c3", etki: { yalvardi: true } },
{ t: "“Senin de sorumluluğun vardı, sen de kontrol etmedin,” dersin.", to: "c3", etki: { sistem: 1, hulyayi_suclad: true } },
{ t: "Bir şey demeden Gönül'ün kapıdan çıkmasını izlersin.", to: "c3", etki: { sustu: true } }
]},

c3: { saat: "Bir hafta sonra", baslik: "Log", metin: [
P(S("c2B"), "Gönül uzun uzun yüzüne baktı. “Senin kariyerin, Nurten Hanım'ın hayatı, benim vicdanım,” dedi ve kapıyı açtı. “Bir şey yapmayacağım ama biri sorarsa yalan da söylemeyeceğim.”"),
P(S("c2C"), "Gönül'ün yüzü kızardı. “Evet, benim de sorumluluğum vardı,” dedi, “ve bunu söyleyeceğim, sen söylemesen de.” Kapıyı yavaşça kapattı."),
P(S("c2D"), "Gönül çıktı. Eşikte durup dönecek gibi oldu ama dönmedi."),
"Bir hafta geçiyor ve kimse bir şey sormuyor. Dosyada “seftriakson sonrası beklenmedik reaksiyon” yazıyor. Gönül seninle aynı nöbete yazılmamak için çizelgeyi değiştirtmiş.",
"Sonra başhekimlikten “Bilgi Sistemi Değişiklik Kaydı İncelemesi” başlıklı bir e-posta geliyor.",
"Bilgi işlem rutin bir denetim yapmış. Son ayda “yanlış giriş, düzeltildi” notuyla değiştirilen on yedi order bulmuşlar ve biri senin. Öncesi, sonrası, saatler, isimler, hepsi orada.",
"“Yarın saat 10.00'da başhekim yardımcısının odasında görüşmek üzere.”",
"Kimse ihbar etmedi, sistem kendi kendini kaydetmişti."
], secenekler: [
{ t: "Toplantıda her şeyi itiraf edersin.", to: "t1", etki: { durustluk: 2, ortaya: true, itiraf: true } },
{ t: "Toplantıda bunun bir teknik hata olduğunu savunursun.", to: "t1", etki: { savundu: true } },
{ t: "Toplantıdan önce Oğuz'u bulup ona her şeyi anlatırsın.", to: "t1", etki: { durustluk: 2, ortaya: true, ogz_ilk: true } },
{ t: "Bir avukat tutarsın.", to: "t1", etki: { sistem: 1, avukat: true } }
]},

/* ---------- SİSTEM KOLU ---------- */
s1: { saat: "Saat 34 · 18.00", baslik: "Bildirim", metin: [
P(S("a6D"), "Nöbet odasına kapanıp bilgisayarı açtın. Koridorda gelinle Oğuz başka bir doktoru bekliyordu, portakal poşeti sandalyenin üstünde duruyordu."),
P(function(d){ return d.leventle; }, "Haluk Hoca çekmecesini açıp üç kâğıt çıkardı, 2021, 2023 ve 2025 tarihli kendi bildirimleri. “Ekle bunları,” dedi, “belki dördüncüsünü biri okur.”"),
"Olay bildirim formu altı sayfa tutuyor, bu hastanede nadiren doldurulan bir belge. Formun üstündeki logo bile eski logo.",
"Yazmaya başlıyorsun. Saat 15.04, ampisilin-sulbaktam, alerji kaydı mevcut, sekme açılmadı, reaksiyon, kod, yoğun bakım.",
"“Katkıda bulunan faktörler” diye bir bölüm var, yorgunluk, iş yükü, iletişim, ekipman, bilgi sistemi, eğitim, diğer.",
"Hepsini işaretliyorsun.",
"Otuz bir saat kesintisiz çalışma, üç asistana yüz yirmi hasta. Alerji sözlü olarak soruldu, sözlü olarak cevaplandı. 2022'deki güncellemeden sonra uyarı rengi kırmızıdan griye döndü. Daha önce üç bildirim yapılmış ama hiçbir işlem yapılmamış. Yirmi sekizinci saatte bir asistan darp edildi ve ekip kırk dakika eksik çalıştı.",
"Son bölümün başlığı “Bireysel sorumluluk değerlendirmesi,” altında boş bir kutu var."
], secenekler: [
{ t: "Kutuya şunu yazarsın: “Sekmeyi ben açmadım, orderı ben yazdım. Sorumluluk benim.”", to: "s2", etki: { durustluk: 2, bireysel: true } },
{ t: "Bunu sistem üretti diye kutuyu boş bırakırsın.", to: "s2", etki: { sistem: 1, bos: true } },
{ t: "“Bireysel ve sistemsel sorumluluk birbirinden ayrılamaz,” yazarsın.", to: "s2", etki: { durustluk: 1, sistem: 1 } },
{ t: "Kutuya Gönül'ün adını da yazarsın: “İkimiz de kontrol etmedik.”", to: "s2", etki: { sistem: 1, hulya_yazdi: true } }
]},

s2: { saat: "İki hafta sonra", baslik: "Komite", metin: [
P(S("s1A"), "Kutuya yazdın. Formu teslim ederken elin titremedi, otuz bir saatten beri ilk kez."),
P(S("s1B"), "Kutuyu boş bıraktın. Toplantıda formun en çok bakılan yeri o boş kutu oldu."),
P(S("s1C"), "“Ayrılamaz,” diye yazdın. Okuyunca bunun bir cümleden çok bir kaçış gibi durduğunu düşündün ama silmedin."),
P(S("s1D"), "Gönül'ün adını da yazdın. Ertesi gün Gönül seninle konuşmadı. İkinci gün yanından geçerken cebine bir çikolata bıraktı ama yine konuşmadı."),
P(function(d){ return d.gizli_bildirim; }, "Bildirimi gece yazıp sabah gönderdin. Haluk Hoca öğrenince bir hafta seninle konuşmadı. Sonra bir sabah önüne bir çay koyup “İyi yazmışsın,” dedi. Bunun bir af mı yoksa bir uyarı mı olduğunu anlayamadın."),
"İki hafta sonra Hasta Güvenliği Komitesi toplanıyor. On iki kişi var, başhekim yardımcısı, bilgi işlem müdürü, hemşirelik müdürü, iki uzman, bir hukukçu ve sen. Masada su şişeleri duruyor ama kimse açmıyor.",
"Bilgi işlem müdürü güncellemenin bakanlık zorunluluğu olduğunu, bütçe olmadığını söylüyor. Hemşirelik müdürü kadro açığının yüzde otuz olduğunu söylüyor. Başhekim yardımcısı nöbet sürelerinin yönetmelikte yazdığını, istisnaların ancak “zorunlu hâllerde” yapıldığını söylüyor.",
"Sorumluluk masanın etrafında dönüp duruyor ama kimsenin önünde durmuyor.",
"Karar özetinde şöyle yazıyor: “Olay çok faktörlü bir sistem hatası olarak değerlendirilmiştir. Bireysel kusur tespit edilmemiştir. Alerji uyarısının yeniden eklenmesi için bakanlığa yazı yazılacaktır.”",
"Oğuz bu cümleyi hiç duymayacak."
], secenekler: [
{ t: "Söz alıp itiraz edersin: “Bireysel kusur var ve o kusur benim.”", to: "s3", etki: { durustluk: 2, itiraz: true } },
{ t: "Sistem değişecekse bu yeter diye kararı kabul edersin.", to: "s3", etki: { sistem: 1 } },
{ t: "Raporun bir kopyasının aileye verilmesini istersin.", to: "s3", etki: { durustluk: 1, sistem: 1, rapor_aile: true } },
{ t: "Bakanlığa gidecek yazıyı kendin yazmayı teklif edersin.", to: "s3", etki: { sistem: 2, yazi: true } }
]},

s3: { saat: "Bir ay sonra", baslik: "Oğuz'un Sorusu", metin: [
P(S("s2B"), "Kararı kabul ettin. Çıkarken kimse sana bakmadı, herkes rahatlamıştı. Biri su şişesini nihayet açtı."),
P(S("s2A"), "Masa sustu, başhekim yardımcısı gözlüğünü çıkardı. “Bu komite suçlu bulmak için toplanmıyor,” dedi. Ama sen cümleni kelimesi kelimesine tutanağa yazdırdın."),
P(S("s2C"), "Hukukçu itiraz etti. Sonunda bir uzlaşmaya varıldı, aileye rapor verilmeden bir “bilgilendirme” yapılacaktı. Bunu kimin yapacağı sorulunca sen istedin."),
P(S("s2D"), "Dört sayfalık yazıyı sen yazdın. Üç ay sonra “Değerlendirmeye alınmıştır” diye bir cevap geldi. Bir yıl sonra bir güncellemeyle alerji sekmesi bütün ülkede yeniden kırmızıya döndü."),
"Bir ay sonra kantinde biri yanına oturuyor, Oğuz bu.",
"“Annemin dosyasında adınız geçiyor, acil hekimi olarak. O gün siz miydiniz?”",
"Evet diyorsun.",
"Oğuz çayına bakıyor. “Avukatım bir şey buldu. Annemin dosyasında bir alerji kaydı var, penisilin. Ona penisilin verilmiş. Hastane ‘sistem hatası’ diyor. Bir sistem ilaç yazar mı? İlacı bir insan yazar.”",
"“Kim yazdı?”"
], secenekler: [
{ t: "“Ben yazdım,” dersin.", to: "t1", etki: { durustluk: 2, ortaya: true, ben_yazdim: true } },
{ t: "“Bir sistemin içinde çalışan bir hekim yazdı, otuz bir saattir uyumamış bir hekim,” dersin.", to: "t1", etki: { sistem: 1, durustluk: 1, ortaya: true } },
{ t: "“Bunu hastane yönetimiyle konuşmanız gerekiyor,” dersin.", to: "t1", etki: { sistem: 1, yonlendirdi: true } },
{ t: "Cevap veremez, kalkıp gidersin.", to: "t1", etki: { kacti: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Sonra", baslik: "Sonuç", metin: [
P(S("h3A"), "Yoğun bakımın kapısında saatlerce bekledin. Oğuz çıkınca yanına oturdu, bir şey demedi, sen de demedin."),
P(S("h3B"), "Hastaneden çıkıp Şişli'den Beşiktaş'a yürüdün. Sahildeki bir bankta otuz altı saat bitti. Bir martı simidini kaptı, kızmaya bile gücün yoktu."),
P(S("h3C"), "İki ihtimali düşündün. Hiçbiri senin elinde değildi ve ikisinde de yaptığın şey aynıydı."),
P(S("h3D"), "Ufuk'u aradın, burnu hâlâ mordu. “Hepimiz bir gün,” dedi, “hepimiz.” Bu cümle seni hem rahatlattı hem korkuttu."),
P(S("b3C"), "Uyumaya çalıştın, sabaha karşı uyuyabildin. Rüyanda bir sekme kıpkırmızıydı."),
P(S("b3D"), "Saatleri, ilacı, sekmeyi, Gönül'ün sesini, her şeyi bir kâğıda yazıp bir kitabın arasına koydun. Kimseye göndermedin ama artık bir yerde yazılıydı."),
P(S("c3C"), "Toplantıdan önce Oğuz'u buldun, ilacı, sekmeyi, değiştirdiğin kaydı söyledin. Oğuz bir şey demedi, telefonunu çıkarıp senin önünde avukatını aradı."),
P(S("s3A"), "“Ben yazdım,” dedin. Oğuz uzun süre konuşmadı. “Teşekkür ederim,” dedi sonunda, “bunu söyleyen ilk kişi sizsiniz.” Kalkıp gitti, çayını bitirmişti."),
P(S("s3B"), "“Otuz bir saattir uyumamış bir hekim,” dedin. Oğuz başını salladı. “Yani siz.” Evet dedin."),
P(S("s3C"), "Oğuz acı acı güldü. “Konuştum,” dedi, “onlar da sizinle konuşmamı söyledi.”"),
P(S("s3D"), "Kalkıp gittin. Kantinin kapısında dönmek istedin ama dönmedin. Oğuz'un çayı soğudu."),
P(function(d){ return YASADI(d) && !(d.kol === "acik" && d.gecti.h3); }, "Nurten Hanım yaşadı. Üç gün sonra tüpü çıkarıldı, iki hafta sonra eve döndü. Bir sabah pencereden onun gelininin koluna girip bahçede yürüdüğünü gördün."),
P(function(d){ return OLDU(d) && !(d.kol === "acik" && d.gecti.h3); }, "Nurten Hanım beşinci gün öldü. Cihazın kapatılmasına aile karar verdi. Oğlu yanındaydı, sen değildin."),
P(function(d){ return d.itiraf; }, "Toplantıda her şeyi anlattın ve hakkında disiplin soruşturması açıldı. Toplantıdan sonra bilgi işlem müdürü odana geldi. “Alerji uyarısını geri getiriyoruz,” dedi, “bakanlığı beklemeden.”"),
P(function(d){ return d.savundu; }, "Bunun bir teknik hata olduğunu söyledin. Başhekim yardımcısı kayıtları gösterdi, 17.04, değişiklik, senin kullanıcı adın. “Teknik hata bir insanın şifresiyle mi girer?” diye sordu. Hakkında iki suçlama oldu, tıbbi hata ve kayıt tahrifatı. İkincisi daha ağırdı."),
P(function(d){ return d.avukat; }, "Avukatın sessiz kalmanı söyledi, sen de sustun. Soruşturma aylarca sürdü. Gönül ifade verdi, ne gördüyse onu anlattı."),
P(function(d){ return d.sustu && d.kol === "hiyerarsi"; }, "Sustun. Dosyada “beklenmedik reaksiyon” yazıyor, kimse bir şey sormadı. Sekme hâlâ gri."),
"Fakültede yaşlı bir hoca bir gün dersin ortasında durup aynı dikkatsizliği yapan iki sürücüyü anlatmıştı. Birinin önüne bir çocuk çıkar, öbürünün önüne çıkmaz. Sonra tahtaya dönüp kaldığı yerden devam etmişti.",
P(YASADI, "Senin önüne çocuk çıkmadı, bir bacağa bir iğne, bir saniye yetti. Aynı hatayı yapıp bir saniye geç kalan biri katil olacaktı."),
P(OLDU, "Senin önüne çocuk çıktı, bir donma, bir hesap, on iki dakika. Aynı hatayı yapan daha hızlı biri onu kurtarabilirdi.")
], secenekler: [
{ t: "Eve gidip on dört saat uyursun.", to: "t1b", etki: { sefkat: 1, uyudu: true } },
{ t: "Programda yazdığı gibi bir sonraki nöbete gelirsin.", to: "t1b", etki: { sistem: 1, nobete_geldi: true } },
{ t: "Babanı ararsın.", to: "t1b", etki: { sefkat: 1, baba: true } },
{ t: "Ufuk'u ararsın.", to: "t1b", etki: { sefkat: 1, kerem2: true } }
]},

t1b: { saat: "Bir hafta sonra", baslik: "Baba", metin: [
P(S("t1C"), "Babanı aradın, ilk çalışta açtı ve sesinden anladı. “Gel kızım,” dedi. Bir hafta izin aldın."),
P(S("t1A"), "On dört saat uyudun, uyandığında akşam olmuştu. Telefonunda yüz yirmi bildirim vardı ama hiçbiri rüyadan gelmiyordu."),
P(S("t1B"), "Nöbete geldin. İlk hastan ateşli bir çocuktu. Alerji sekmesine tıkladın, sonra bir daha, sonra annesine sordun, sonra bir daha tıkladın. Gönül seni izledi, yanından geçerken omzuna dokundu."),
P(S("t1D"), "Ufuk telefonu açtı, sesi daha iyiydi. “Bıraktım,” dedi, “bir aile sağlığı merkezinde başladım. Dokuz-beş, kimse yumruklamıyor.” Ona anlattın, bir sessizlik oldu. “Benim nöbetimde de olabilirdi,” dedi, “bunu biliyorsun değil mi?”"),
"Sivas'ta babanın evindesin, mutfak masasında oturuyorsunuz, sobanın üstünde bir çaydanlık var.",
"Baban emekli bir öğretmen. Seni hep bakkala, berbere, minibüs şoförüne “doktor kızım” diye tanıttı.",
"Uzun uzun anlatıyorsun.",
"Baban çayını karıştırıyor, sen bitirince kaşığı tabağa koyuyor.",
"“Otuz beş yıl öğretmenlik yaptım,” diyor. “Bir çocuğa haksız yere sıfır verdim. Kopya çekti sandım ama çekmemişti. Çocuk ağladı, inanmadım. Bir yıl sonra öğrendim, o yıl sınıfta kalmıştı.”",
"“Adı Mehmet'ti, onu hâlâ düşünürüm. O çocuktan sonra hiçbir çocuğa bakmadan sıfır vermedim. Bir hata ya adamı kırar ya dikkatli yapar. Bazen ikisini birden yapar.”"
], secenekler: [
{ t: "Babana sarılırsın.", to: "t2", etki: { sefkat: 1 } },
{ t: "“Senin hatanda kimse ölmedi baba,” dersin.", to: "t2", etki: { durustluk: 1, kiyas: true } },
{ t: "“Mehmet'e hiç söyledin mi?” diye sorarsın.", to: "t2", etki: { durustluk: 1, mehmet: true } },
{ t: "Ağlarsın.", to: "t2", etki: { sefkat: 2, agladi: true } }
]},

t2: { saat: "Bir ay sonra", baslik: "Sonra", metin: [
P(S("t1bA"), "Babana sarıldın, kazağı naftalin ve soba kokuyordu. Saçını okşadı."),
P(S("t1bB"), "Baban bir süre sustu. “Bilmiyorum,” dedi. “Belki o yıl o çocuğun içinde bir şey öldü, ben bilemem. Sen de bazen bilemezsin.”"),
P(S("t1bC"), "“Söylemedim,” dedi baban. “Her yıl bu yıl bulayım dedim ama bulmadım.” Sonra sana baktı. “Senin cesaretin var mı kızım?”"),
P(S("t1bD"), "Ağladın, babanın mutfağında otuz altı saatin, bir ayın gözyaşlarını döktün. Baban kalkıp arkana geçti, elini başına koydu. Çaydanlık fokurdadı ama ikiniz de kalkmadınız."),
"Bir ay sonra İstanbul'dasın. Acil aynı, bekleme salonu aynı, yalnızca muhabbet kuşunun kafesini başka biri tutuyor."
], secenekler: [
{ t: function(d){ return YASADI(d) ? "Nurten Hanım'ı evinde ziyaret edersin." : "Nurten Hanım'ın mezarını bulursun."; }, to: "y_ziyaret", etki: { durustluk: 1, ziyaret: true } },
{ t: "Uykuların hâlâ yok, bir psikiyatriste gidersin.", to: "y_terapi", etki: { sefkat: 1, terapi: true } },
{ t: "İstifa dilekçeni yazarsın.", to: "t3", etki: { istifa: true } },
{ t: "Hiçbir şey yapmayıp nöbetlerine devam edersin.", to: "t3", etki: { sistem: 1 } }
]},

y_ziyaret: { saat: "Bir ay sonra", baslik: "Ziyaret", metin: [
P(YASADI, "Kartal'da asansörsüz bir apartmanın dördüncü katına çıkıyorsun. Kapıyı gelin açıyor ve seni tanıyor. Yüzü bir an sertleşiyor, sonra yumuşuyor. “Gelin,” diyor, “annem uyanık.”"),
P(YASADI, "Nurten Hanım salonda, televizyonun karşısında, bir battaniyenin altında oturuyor. Zayıflamış ama gözleri parlıyor. “Gel kızım, otur. Çay içer misin?” Televizyonda sesi kısılmış bir yemek programı var."),
P(function(d){ return YASADI(d) && d.ortaya; }, "Biliyor, Oğuz anlatmış. Yine de çay koyuyor. “Oğlum sana çok kızdı ama ben kızmadım. Ben o ilaç için hep ‘kızardım’ derdim, meğer ölüyormuşum. Kendim küçültmüşüm, sen nereden bilecektin?”"),
P(function(d){ return YASADI(d) && !d.ortaya; }, "Bilmiyor, seni hastanedeki doktorlardan biri sanıyor. “Beni kurtaranlardan mısın?” diye sorup cevap bekliyor."),
P(OLDU, "Kartal'da bir mezarlıktasın. Yeni bir mezar var, taşı henüz dikilmemiş, tahta bir levhada “Nurten Yıldırım, 1952–2026” yazıyor. Toprak taze, biri papatya bırakmış."),
P(OLDU, "Mezarın başında duruyorsun. Elin cebinde bir şey arıyor ama ne aradığını bilmiyorsun."),
P(OLDU, "Arkadan bir ses geliyor, Oğuz. Elinde bir şişe suyla toprağı sulamaya gelmiş. Seni görünce duruyor.")
], secenekler: [
{ t: function(d){ return YASADI(d) && !d.ortaya ? "“Hayır teyze. Ben size hata yapan doktorum,” dersin." : "Özür dilersin; yüz yüze."; }, to: "t3", etki: function(d){ d.durustluk += 2; d.yuz_yuze = true; if(YASADI(d)) d.ortaya = true; } },
{ t: function(d){ return YASADI(d) ? "Çayını içersin. Konuşmasını dinlersin." : "Oğuz'un yanına gidip su şişesini alır, toprağı birlikte sularsınız."; }, to: "t3", etki: { sefkat: 1, birlikte: true } },
{ t: "Bir şey demeden gidersin.", to: "t3", etki: { kacti2: true } },
{ t: "Bir mektup bırakırsın.", to: "t3", etki: { durustluk: 1, mektup: true } }
]},

y_terapi: { saat: "Bir ay sonra", baslik: "İkinci Kurban", metin: [
"Psikiyatrist Dr. Feraye ellilerinde bir kadın. Odasında bir kanepe, yaprakları tozlanmış bir kauçuk bitkisi var. Kırk dakika boyunca seni dinliyor.",
"“‘İkinci kurban’ diye bir kavram var,” diyor sonra. “Bir tıbbi hataya karışan sağlık çalışanı için kullanılıyor. Birinci kurban hastadır, ikincisi hatayı yapan kişi. Uykusuzluk, suçluluk, kâbuslar, mesleği bırakma, bazen daha kötüsü.”",
"“Ben kurban değilim,” diyorsun, “hatayı ben yaptım.”",
"“Evet, siz yaptınız. Şimdi de acı çekiyorsunuz. Biri öbürünü silmiyor.”",
"“Bir arkadaşınız bu hatayı yapsaydı, Ufuk diyelim, ona ne derdiniz?”",
"“Sistemi suçlardım. Otuz bir saati, sekmeyi, yumruğu suçlardım.”",
"“Peki bunu kendinize neden söylemiyorsunuz?”",
"Cevap veremiyorsun, kauçuk bitkisinin bir yaprağına bakıyorsun. Biri parmağıyla tozun içine bir çizgi çekmiş."
], secenekler: [
{ t: "“Kendimi affedersem Nurten Hanım'a ihanet etmiş olurum,” dersin.", to: "t3", etki: { durustluk: 1, ihanet: true } },
{ t: "Haftaya yeniden gelmek istediğini söylersin.", to: "t3", etki: { sefkat: 1, devam_terapi: true } },
{ t: "Göğsünde bir şey biraz gevşerken “Belki,” dersin.", to: "t3", etki: { sefkat: 2, gevsedi: true } },
{ t: "“Bunu hak etmiyorum,” deyip kalkarsın.", to: "t3", etki: { durustluk: 1, hak_etmiyorum: true } }
]},

t3: { saat: "Üç ay sonra", baslik: "Mortalite Toplantısı", metin: [
P(S("t2D"), "Nöbetlerine devam ettin. Her orderdan önce elin bir saniye duruyordu ama kimse fark etmedi."),
P(S("y_ziyaretA"), "Yüz yüze özür diledin, kelimeler beklediğinden kısa çıktı. Karşındaki yüz bir süre kıpırdamadı, sonra başını eğdi. Bu bir bağışlama değildi ama kabuldü."),
P(S("y_ziyaretB"), "Toprağı birlikte suladınız, şişeyi sana Oğuz uzattı. Su bitince ikiniz de bir süre boş şişeye baktınız."),
P(S("y_ziyaretC"), "Gittin. Arabaya binmeden dönüp baktığında arkandan baktığını gördün."),
P(S("y_ziyaretD"), "Bir mektup bıraktın. Bir ay sonra tek satırlık bir cevap geldi: “Okudum.”"),
P(S("y_terapiA"), "Dr. Feraye bir süre konuşmadı. “Belki,” dedi. “Ya da ona bir yük daha bindirirsiniz, sizin cezanızı taşıma yükünü.”"),
P(S("y_terapiB"), "Haftaya randevu aldın. Merdivenden inerken bir aydır ilk kez bir randevunun seni rahatlattığını fark ettin."),
P(S("y_terapiC"), "“Belki,” dedin. Dışarıda yağmur başlamıştı. Şemsiyeni açmadın, otobüs durağına kadar ıslandın."),
P(S("y_terapiD"), "“Hak etmiyorum,” deyip kalktın. Dr. Feraye seni durdurmadı. “Kapı açık,” dedi."),
P(function(d){ return d.istifa; }, "Dilekçeni yazdın. Haluk Hoca okuyup çekmecesine koydu. “Bir ay bekle,” dedi, “sonra hâlâ istiyorsan imzalarım.”"),
"Her ayın son perşembesi bir morbidite-mortalite toplantısı yapılır. Kural, kimsenin suçlanmamasıdır ama herkes her sunumun küçük bir mahkeme olduğunu bilir.",
"Bu ay Haluk Hoca senin vakanı seçti, sen sunacaksın.",
"Amfide kırk kişi var. Arka sırada Gönül, ön sırada Haluk Hoca oturuyor. Ufuk da artık başka bir yerde çalıştığı hâlde gelmiş.",
"İlk slaytta “Olgu: 74 yaşında kadın, pnömoni, ilaç reaksiyonu” yazıyor.",
"Söyleyeceğin her şey tutanağa geçecek."
], secenekler: [
{ t: "Vakayı kendi hatan ve kendi otuz bir saatinle bir hikâye olarak anlatırsın.", to: "t4", etki: { durustluk: 2, hikaye: true } },
{ t: "Zaman çizelgesi, kök neden analizi, sistem önerileriyle teknik bir sunum yaparsın.", to: "t4", etki: { sistem: 2, teknik: true } },
{ t: "Sunumun sonuna bir slayt eklersin: “Bu sizin nöbetinizde de olabilirdi.”", to: "t4", etki: { sistem: 1, durustluk: 1, slayt: true } },
{ t: "Başlamadan önce Gönül'e bir söz verirsin.", to: "t4", etki: { sefkat: 1, hulya_soz: true } }
]},

t4: { saat: "Saat 0", baslik: "Yeni Nöbet", metin: [
P(S("t3A"), "Anlattın, otuz bir saati, Ufuk'un burnunu, “kızarmıştım”ı, sekmeyi, “yok” deyişini. Amfide çıt çıkmadı. Sonra arka sıradan biri alkışlamaya başladı, Gönül'dü. Sonra bir başkası. O toplantıda daha önce hiç kimse alkışlanmamıştı."),
P(S("t3B"), "Balık kılçığı diyagramıyla, yedi öneriyle teknik bir sunum yaptın, iyi bir sunumdu. Sonunda bir asistan sordu: “Peki siz nasılsınız?” Duymamış gibi yaptın."),
P(S("t3C"), "Son slayt göründü ve bir sessizlik oldu. Sonra Ufuk ayağa kalkıp “Benim nöbetimde olabilirdi,” dedi. Sonra bir başkası kalktı, sonunda on iki kişi ayaktaydı."),
P(S("t3D"), "Gönül'e söz verdin: “Her alerjiyi iki kere soracağım, bir sana, bir ekrana.” Gönül de “Ben de iki kere soracağım,” dedi."),
"Sabahın sekizinde yeni bir nöbet başlıyor, bu sefer yirmi dört saatlik. Yönetim bir hafta önce kesintisiz çalışmanın yirmi dört saati geçemeyeceğine dair bir genelge çıkardı, kâğıt üstünde.",
P(function(d){ return d.yazi || d.itiraf || d.kol === "sistem"; }, "Bilgi sisteminde bir değişiklik olmuş, alerji sekmesi kırmızı yanıyor. Alerji varsa order yazılmadan önce ekranın ortasında bir pencere açılıyor ve kapatmak için bir neden yazmak gerekiyor."),
"Bekleme salonunda yüz kişi var. İlk hastan yaşlı bir adam, ateşi ve öksürüğü var, akciğerinde ral duyuluyor.",
"Gönül yanına geliyor. “Hocam, antibiyotik ne yazıyoruz?”",
"Ondan önce sen soruyorsun:",
"“Alerjisi var mı?”"
], secenekler: [
{ t: "Sekmeyi açarsın, sonra hastaya, sonra yanındakine sorarsın, sonra yine sekmeye bakarsın.", to: "ss", etki: { durustluk: 1 } },
{ t: "Gönül'le birlikte kontrol edersiniz.", to: "ss", etki: { sistem: 1 } },
{ t: "Hastaya yavaşça, net bir sesle sorarsın: “Hiç bir ilaçtan kızardınız mı?”", to: "ss", etki: { sefkat: 1, kizardiniz: true } },
{ t: "Otuz altı saat önceki o an gibi bir an durursun, sonra devam edersin.", to: "ss", etki: { durustluk: 1, sefkat: 1 } }
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
P(S("t4A"), "O sabah sekmeyi açtın, hastaya sordun, oğluna sordun, sekmeyi yeniden açtın. Gönül güldü. “Yeter kızım,” dedi."),
P(S("t4B"), "Gönül'le birlikte baktınız, iki çift göz, bir sekme."),
P(S("t4C"), "“Hiç bir ilaçtan kızardınız mı?” diye sordun. Adam düşündü. “Bir kere,” dedi, “askerde. Unutmuşum.”"),
P(S("t4D"), "Bir an durdun, sonra devam ettin, bu sefer sekmeyle birlikte."),
"Söyledin, aileye, kuruma, bir amfi dolusu insana, kendi adınla.",
P(function(d){ return d.itiraf || d.savundu; }, "Disiplin soruşturması üç ay sürdü ve kınama cezası aldın. Asistanlığa devam ediyorsun ama dosyanda bir not var."),
"Oğuz'un açtığı dava sürüyor. Sinem Hanım bir gün koridorda yanına geldi. “İtirafınız aleyhimize en güçlü delil,” dedi. “Ama hâkim duruşmada ‘Bu dosyada yalan söylemeyen tek kişi bu hekim’ dedi. Bilmenizi istedim.” Sonra asansör geldi, bindi.",
P(YASADI, "Nurten Hanım her bayram acil servise bir tepsi börek gönderiyor, üstünde not yok. Gönül her seferinde bir dilimini sana ayırıp peçeteye sarıyor, dolabına koyuyor."),
P(OLDU, "Oğuz bir gün mahkeme koridorunda yanına geldi, bir şey demeden elini uzattı. Elini sıktın, o da gitti."),
"Her nöbetin başında aynı soruyu iki kere soruyorsun. Geçen ay yeni bir asistan bunun neden bu kadar önemli olduğunu sordu. Ona otuz bir saati anlattın. Sonuna kadar dinledi, sonra gidip bir önceki hastasının sekmesini açtı."
]},

son_sessiz: { son: true, baslik: "Seftriakson", metin: [
P(S("t4A"), "O sabah sekmeyi açtın, hastaya sordun, oğluna sordun, sekmeyi yeniden açtın. Gönül güldü. “Yeter kızım,” dedi."),
P(S("t4B"), "Gönül'le birlikte baktınız, iki çift göz, bir sekme."),
P(S("t4C"), "“Hiç bir ilaçtan kızardınız mı?” diye sordun. Adam düşündü. “Bir kere,” dedi, “askerde. Unutmuşum.”"),
P(S("t4D"), "Bir an durdun, sonra devam ettin, bu sefer sekmeyle birlikte."),
"Kimse bilmiyor. Dosyada “seftriakson sonrası beklenmedik reaksiyon” yazıyor, kayıtlar bir sunucuda duruyor.",
"Gönül biliyor ama bir daha seninle aynı nöbete yazılmadı.",
P(YASADI, "Nurten Hanım yaşadı. Bir sabah kontrole geldiğinde seni gördü ama tanımadı. “Kızım ne güzel doktorsun,” dedi. Teşekkür ettin, yüzün kızardı, o fark etmedi."),
P(OLDU, "Nurten Hanım öldü. Oğuz dava açmadı, “beklenmedik reaksiyon” diye bildi. Annesini Kartal'a gömdü ve senin adını hiç öğrenmedi."),
"Uzman oldun, artık kendi asistanların var. Alerji sekmesini her seferinde açtırıyorsun.",
"Bir gece saat üçte gözleri kıpkırmızı bir asistan geliyor. “Hocam, bir orderda hata yaptım. Hasta iyi. Ne yapmalıyım?”",
"Ağzında bir cümle var: “Bir şey yazma, ben hallederim.” Haluk Hoca'nın cümlesi bu, tanıdık, rahatlatıcı ve dilinin ucunda."
]},

son_sistem: { son: true, baslik: "Asistan A", metin: [
P(S("t4A"), "O sabah sekmeyi açtın, hastaya sordun, oğluna sordun, sekmeyi yeniden açtın. Gönül güldü. “Yeter kızım,” dedi."),
P(S("t4B"), "Gönül'le birlikte baktınız, iki çift göz, bir sekme."),
P(S("t4C"), "“Hiç bir ilaçtan kızardınız mı?” diye sordun. Adam düşündü. “Bir kere,” dedi, “askerde. Unutmuşum.”"),
P(S("t4D"), "Bir an durdun, sonra devam ettin, bu sefer sekmeyle birlikte."),
"Bildirimin bir şeyleri değiştirdi. Alerji sekmesi bütün ülkede kırmızıya döndü. Nöbetler kâğıt üstünde yirmi dört saatle sınırlandı, acile iki yeni kadro geldi.",
"Komite bildirimini eğitim materyaline koydu, her yeni asistan onu okuyor. Senin adın geçmiyor, “Asistan A” yazıyor.",
"“Bireysel kusur tespit edilmemiştir.”",
P(function(d){ return d.yonlendirdi || d.kacti; }, "Oğuz sana “Kim yazdı?” diye sormuştu ve sen cevap vermemiştin."),
"Bir sistem bir insanın yüzüne bakıp “ben yaptım” diyemez. Sen sistemin değişmesini sağladın ama o cümleyi kimseye söylemedin.",
"Eğitim materyalinin bir sayfasında, kenar boşluğuna bir asistan kurşunkalemle şunu sormuş: “Asistan A'ya sonra ne oldu?” Kimse cevap yazmamış."
]},

son_birak: { son: true, baslik: "Prospektüs", metin: [
P(S("t4A"), "O sabah sekmeyi açtın, hastaya sordun, oğluna sordun, sekmeyi yeniden açtın. Gönül güldü. “Yeter kızım,” dedi."),
P(S("t4B"), "Gönül'le birlikte baktınız, iki çift göz, bir sekme."),
P(S("t4C"), "“Hiç bir ilaçtan kızardınız mı?” diye sordun. Adam düşündü. “Bir kere,” dedi, “askerde. Unutmuşum.”"),
P(S("t4D"), "Bir an durdun, sonra devam ettin, bu sefer sekmeyle birlikte."),
"Bir ay sonra Haluk Hoca dilekçeni imzaladı, kapıda elini sıktı. “Yazık,” dedi, “iyi bir hekimdin.” Geçmiş zamanla.",
"Bir ilaç firmasında tıbbi danışman olarak çalışıyorsun. Kimse seni gece üçte aramıyor, kimse yumruk atmıyor.",
"Maaşın iki katına çıktı ama uykuların düzelmedi.",
"Ufuk'la ayda bir buluşuyorsunuz. Bir gün “Bizim sınıftan on iki kişi bıraktı,” dedi, “otuz kişilik sınıftan.” Bu sayıyı söyledikten sonra ikiniz de çayınıza baktınız.",
P(OLDU, "Bazen Kartal'dan, bir mezarlığın önünden geçiyorsun. Durmuyorsun ama yavaşlıyorsun."),
P(YASADI, "Bir gün bir markette gelininin koluna girmiş yaşlı bir kadın gördün, Nurten Hanım'a benziyordu. Dönüp bakmadın."),
"Her ilaç kutusunun prospektüsünü okurken alerji bölümüne gelince parmağın satırın üstünde duruyor."
]},

son_nobet: { son: true, baslik: "Gri Sekme", metin: [
P(S("t4A"), "O sabah sekmeyi açtın, hastaya sordun, oğluna sordun, sekmeyi yeniden açtın. Gönül güldü. “Yeter kızım,” dedi."),
P(S("t4B"), "Gönül'le birlikte baktınız, iki çift göz, bir sekme."),
P(S("t4C"), "“Hiç bir ilaçtan kızardınız mı?” diye sordun. Adam düşündü. “Bir kere,” dedi, “askerde. Unutmuşum.”"),
P(S("t4D"), "Bir an durdun, sonra devam ettin, bu sefer sekmeyle birlikte."),
"Nöbetlere devam ediyorsun, binlerce order yazıyorsun ve her birinde alerji sekmesine bakıyorsun.",
"Ne tam söyledin ne tam sakladın. Bir yerde konuştun, bir yerde sustun.",
P(YASADI, "Nurten Hanım yaşıyor, bir refleks, bir saniye sayesinde. Bunu hak etmedin ama oldu."),
P(OLDU, "Nurten Hanım öldü, bir donma, bir saniye yüzünden. Bunu da hak etmedin ama oldu."),
"Babanın cümlesi aklından çıkmıyor: “Bir hata ya adamı kırar ya dikkatli yapar. Bazen ikisini birden yapar.”",
"Bazı geceler uyanıp tavandaki lekeye bakıyorsun. Bazı sabahlar bir asistanın orderını iki kere okuyup bir hatayı yakalıyorsun ve o asistan neyin kıyısından döndüğünü hiç bilmiyor.",
"Her nöbetin başında bir kez daha soruyorsun:",
"“Alerjisi var mı?”"
]}

},

ayna: function(d){
  var out = [];
  var a = d.durustluk, b = d.sistem, c = d.sefkat;
  if(a >= b && a >= c) out.push("Çoğu zaman hatanı kendi adınla söyledin.");
  else if(b >= c) out.push("Çoğu zaman sisteme, otuz altı saate, gri sekmeye, yumruğa baktın.");
  else out.push("Çoğu zaman Ufuk'un, Gönül'ün, babanın yanında kaldın.");
  if(d.kol === "ortbas" && !d.ortaya) out.push("Bir kaydı değiştirdin ve kimse bilmedi.");
  if(d.gecikme) out.push("Ufuk'un yanında kaldığın kırk dakika boyunca sarı alanda bir kişi eksikti.");
  if(d.erken_adrenalin) out.push("Adrenalini düşünmeden yaptın, Nurten Hanım o yüzden yaşadı.");
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
