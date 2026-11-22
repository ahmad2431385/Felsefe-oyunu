(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "kan-bedeli",
baslik: "Kan Bedeli",
dunya: "Gerçek dünya",
kategoriler: ["Toplum ve Adalet"],
giris: "1994, bir dağ köyü. Bir tarla kavgasında bir genç öldü ve şimdi kan, kan istiyor. Sen köyün on beş yıllık öğretmenisin; iki ailenin çocukları da senin sıralarında büyüdü. Bir gece kapına, montunun altında tüfek taşıyan eski bir öğrencin geliyor. Töre, devlet, vicdan ve bir annenin ağıdı arasında sıkışmış bir kışın hikâyesi. Bir yabancı bir köyün yasasını değiştirebilir mi, yoksa yalnızca tanıklık mı eder?",
kavramlar: ["Adalet ve intikam", "Affetme", "Töre ve toplumsal baskı", "Şiddetin döngüsü"],
ozet: "1994 sonbaharı, bir dağ köyü. Bir tarla kavgasında bir genç öldü. Şimdi bir başka gencin eline silah verildi. Sen köyün öğretmenisin ve iki ailenin çocukları da senin öğrencin.",
baslangic: "k1",
durum: { adalet: 0, gelenek: 0, merhamet: 0 },

sahneler: {

k1: { saat: "Ekim 1994", baslik: "Silah", metin: [
"Karaağaç köyünde on beşinci kışın. Adın Kerim, kırk yaşındasın; şehirden tayinle geldin, gitmedin. Köyün tek okulunun tek öğretmenisin. Bu köyde yirmi yaşın altındaki herkes, bir zaman senin sıralarında oturdu.",
"Okul dediğin tek bir oda: kara tahta, kırk yıllık sıralar, ortada bir soba. Duvarda çocukların çizdiği bir Türkiye haritası; Karaağaç'ın yeri kırmızı kalemle işaretlenmiş, çünkü gerçek haritalarda yok. Her kış bu odada uyuyorsun; lojmanın sobası çekmiyor. Bu köyde gece on biriden sonra kapı çalınmaz. Çalınırsa ya bir doğum vardır, ya bir ölüm.",
"Üç gün önce Kayaların büyük oğlu Selim, Demircilerin oğlu Rıza'yla su yüzünden kavgaya tutuştu. Bir kürek, bir itiş, bir kaya. Selim yirmi altı yaşındaydı. Rıza dağa çıktı; kimse yerini bilmiyor, herkes biliyor.",
"Bu gece okulun kapısı çalınıyor. Kayaların küçük oğlu Cemal. On yedi yaşında. İki yıl önce sınıfının en iyi kompozisyonlarını o yazardı; bir tanesini hâlâ çekmecende saklıyorsun: “Büyüyünce ne olacağım.”",
"Montunun altında bir şey var. Ağır, uzun. Görmezden gelmeye çalışıyorsun; o da göstermemeye çalışıyor. İkiniz de beceremiyorsunuz.",
"Cemal'i bu sıralarda büyüttün. İlk kez kalem tuttuğunda harfleri ters yazardı; “b” ile “d”yi hiç ayıramadı, sonra bir gün ayırdı ve sana koşup gösterdi, defterini bir ödül gibi havaya kaldırarak. Şimdi aynı eller bir tüfeğin kabzasını montunun altında saklıyor. Bu iki görüntüyü aynı çocukta bir arada tutamıyorsun.",
"Sobanın yanına oturuyor, ellerini ısıtıyor. Uzun süre konuşmuyor.",
"“Hocam,” diyor sonunda. “Dedem tüfeği bana verdi. Ağabeyimin kanı yerde kalmaz, dedi. Ailede büyük erkek benim artık.” Durakladı. “Ben bunu yapmak zorunda mıyım?”",
"Bu soruyu sana soruyor; dedesine değil, imama değil, babasının mezarına değil. Bunun ne anlama geldiğini biliyorsun ve bu bilgi sobanın sıcaklığından daha çok yakıyor."
], secenekler: [
{ t: "Tüfeği ondan alırsın: “Bu gece burada kalsın.”", to: "k2", etki: { merhamet: 1, silah_sende: true } },
{ t: "“Hayır. Bunun adı cinayet. Yasa bunu senden istemiyor,” dersin.", to: "k2", etki: { adalet: 1, konustu: true } },
{ t: "“Bunun cevabını ben veremem. Sen vereceksin,” dersin.", to: "k2", etki: { ozgur: true } },
{ t: "Onu kolundan tutup dedesinin evine götürürsün. Bu konuşma orada yapılmalı.", to: "k2", etki: { gelenek: 1 } }
]},

k2: { saat: "Ekim 1994", baslik: "Hacı Murat", metin: [
P(S("k1A"), "Cemal tüfeği bıraktı. Ellerinden kurtulmuş gibi değil, ellerinden alınmış gibi. Tüfek şimdi senin dolabında, kışlık battaniyelerin arasında. Bir sırrı saklamak gibi; ama bu sır yağlı, soğuk ve dolu."),
P(S("k1B"), "Cemal dinledi. “Yasa,” dedi. “Yasa ağabeyimi geri getirecek mi?” Cevap vermedin. “Rıza'yı tutsalar on yıl yatar, çıkar, köye döner. Ağabeyim dönmez.” Gitti. Tüfek de onunla."),
P(S("k1C"), "Cemal sana uzun süre baktı. Sanki bir kapının açılmasını beklemişti ve kapı açılmamıştı. “Peki hocam,” dedi. Kalktı. Bir çocuğa özgür olduğunu söylemenin, onu yalnız bırakmak olup olmadığını bilmiyorsun."),
P(S("k1D"), "Hacı Murat'ın kapısına vardığınızda Cemal'in kolu elinin içinde titriyordu. İçeri girdin; Cemal'i dışarıda bıraktılar."),
"Ertesi gün Hacı Murat Kaya seni çağırıyor. Yetmiş sekiz yaşında, köyün en yaşlı erkeği. Odası loş, duvarda bir saat ve bir tüfek askısı. Askı boş.",
"Kapıda Cemal'in annesi Hatun seni karşılıyor. Gözleri kan çanağı. Seni içeri alırken kulağına fısıldıyor: “Hocam, onu sen ikna et. Dedesini. Benim sözüm bu evde geçmez.” Sonra kapıyı açıp bir adım geri çekiliyor; bu evde kadınlar o odaya girmez.",
"Çayını kendisi koyuyor; bu bir onur. “Öğretmen,” diyor. “Sen okumuş adamsın. Şehirde kan davası yok derler. Orada ne var? Mahkeme. Mahkeme ne yapar? Katili besler.”",
"Bir süre susuyor. “Bin dokuz yüz elli ikide babamı vurdular. On dokuz yaşındaydım. Ben de vurdum. Yemin ettim, bu iş benimle bitsin diye. Bitmedi. Torunumu toprağa verdim.” Sesi titremiyor. Titremeyi kırk yıl önce bırakmış.",
"“Kan yerde kalmazsa, bir sonraki kan da yerde kalmaz. Bunu biliyorum. Ama kan yerde kalırsa, Kayaların adı yerde kalır. Hangisi daha kötü, sen söyle öğretmen.”"
], secenekler: [
{ t: "“Ad yerde kalsın, Hacı Amca. Ad bir şey değil, insan bir şey,” dersin.", to: "k2b", etki: { merhamet: 1 } },
{ t: "“Devlet var. Rıza yargılanacak. Sizin işiniz değil bu,” dersin.", to: "k2b", etki: { adalet: 1 } },
{ t: "“Bu köyün kurallarını ben koymadım. Ama sulh da bu kuralların bir parçası. Neden sulh değil?” dersin.", to: "k2b", etki: { gelenek: 1, sulh_onerdi: true } },
{ t: "Bir şey söylemezsin. Çayını içer, dinlersin. Bu adam konuşmak istiyor, cevap değil.", to: "k2b", etki: { dinledi: true } }
]},

k2b: { saat: "Ekim 1994", baslik: "Ağıt", metin: [
P(S("k2A"), "Hacı Murat sana baktı, uzun. “Sen şehirlisin,” dedi. “Senin adın yok. O yüzden kolay konuşuyorsun.” Haksız değildi. Bu köyde on beş yıl yaşadın ama hiçbir mezarlıkta bir akraban yok."),
P(S("k2B"), "“Devlet,” dedi Hacı Murat ve güldü. “Devlet elli ikide de vardı. Babamın katili dört yıl yattı.” Fincanı bıraktı. Görüşme bitti."),
P(S("k2C"), "Hacı Murat'ın kaşları kalktı. “Sulh,” dedi. “Demirciler istesin. Ben istemem. İstersem zayıf görünürüm.” Ama gözlerinde bir şey kıpırdadı. Belki kırk yıldır birinin bu kelimeyi söylemesini bekliyordu."),
P(S("k2D"), "Hacı Murat bir saat konuştu: babası, elli ikinin kışı, ilk kez tüfek tuttuğu el. Sen hiçbir şey söylemedin. Kalkarken elini omzuna koydu. “Sağ ol öğretmen,” dedi. “Bunları kimseye anlatmamıştım.”"),
"Selim'in kırkı dolmadan köyde bir ses yükseliyor. Kadınların ağıdı. Mezarlığın yanındaki dut ağacının altında Selim'in annesi Hatun, dizlerine vurarak oğlunu anlatıyor; adını, gülüşünü, ilk dişini.",
"Ağıdın içinde bir cümle var ki herkes duyuyor ama kimse duymamış gibi yapıyor: “Kan istemem, oğlumu isterim. Kan oğlumu getirmez.”",
"Erkekler mezarlığın öbür ucunda duruyor. Hacı Murat kıpırdamıyor. Cemal'in yüzü bembeyaz.",
"Bir kadının ağıdı, bir köyün yasasından daha mı az ağır? Yoksa yalnızca daha az duyuluyor mu?"
], secenekler: [
{ t: "Kadınların yanına gidip Hatun Hanım'ın elini tutarsın. Bu köyde bir erkeğin yapmayacağı şey.", to: "k3", etki: { merhamet: 1, hatun: true } },
{ t: "Cemal'in yanına gidersin. Annesinin sözlerini duyduğundan emin olmak istiyorsun.", to: "k3", etki: { cemal_annesi: true } },
{ t: "Hacı Murat'a bakarsın; onun da duyduğunu bilmek için.", to: "k3", etki: { gelenek: 1 } },
{ t: "Uzaktan izler, karışmazsın. Bu acı senin değil.", to: "k3" }
]},

k3: { saat: "Kasım 1994", baslik: "Ali", metin: [
P(S("k2bA"), "Hatun Hanım'ın elini tuttun. Kadınlar sustu, sonra ağıt kaldığı yerden devam etti. Erkeklerin tarafından bir mırıltı geldi. Yarın köyde bunu konuşacaklar. Konuşsunlar."),
P(S("k2bB"), "Cemal'in yanında durdun. Bir şey söylemedin. Annesinin sesi her yükseldiğinde omuzları biraz daha düştü. Bir an sana döndü; gözleri, iki yıl önce sınıfta bir şiiri anlamadığında baktığı gibi baktı."),
P(S("k2bC"), "Hacı Murat'ın yüzünde hiçbir şey kıpırdamadı. Ama ağıt bitmeden döndü ve eve yürüdü. Yalnız, yavaş, bastonuna yaslanarak."),
P(S("k2bD"), "Uzaktan izledin. Bir yabancı olarak. On beş yılda bu köyün yabancısı olmayı hiç bırakmadığını fark ettin."),
"Sabah derste Demircilerin küçük oğlu Ali sırasında oturuyor. On iki yaşında. Kitabını açmamış. Defterine bir şey çiziyor: bir dağ, dağda bir kulübe, kulübenin içinde bir adam.",
"Ders Türkçe: “Okuduğunu anlama.” Bir paragraf okutuyorsun, sorular soruyorsun. Sınıfın yarısı Kayalara, yarısı Demircilere akraba. Sıralar kendiliğinden ikiye ayrılmış, ortada bir koridor oluşmuş. Geçen hafta bu koridor yoktu. Çocuklar, büyüklerin söylemediği şeyleri onlardan önce öğrenir.",
"Teneffüste Ali yanına geliyor. “Hocam, ağabeyimi vuracaklar mı?” Sonra daha alçak sesle: “Ağabeyimi bulamazlarsa beni mi vururlar? Babam öyle dedi. Erkek olan herkes, dedi.”",
"Öğleden sonra okulun kapısında Zehra Demirci. Ali'nin annesi. Başörtüsünün ucunu ağzına bastırmış.",
"“Hocam,” diyor. “Ali'yi bir süre okulda tutsanız. Gece de. Ya da şehre götürseniz. Kimseye söylemeyiz. Ali sizin öğrenciniz. Sizin yanınızda kimse dokunmaz.”"
], secenekler: [
{ t: "Ali'yi kendi evine alırsın. Kimse sormadıkça kimseye söylemezsin.", to: "kb_ali", etki: { merhamet: 1, ali_sende: true } },
{ t: "Zehra Hanım'a jandarmaya gitmesini söylersin. Koruma onların işi.", to: "k4", etki: { adalet: 1 } },
{ t: "Zehra Hanım'a Rıza'nın teslim olması gerektiğini söylersin. Ali'yi kurtaracak tek şey bu.", to: "k4", etki: { adalet: 1, teslim_dedi: true } },
{ t: "“Ben öğretmenim, Zehra Hanım. Bu kavgada taraf olamam,” dersin.", to: "kb_kahve", etki: { gelenek: 1, taraf_olmadi: true } }
]},

k4: { saat: "Kasım 1994", baslik: "Kulübe", metin: [
P(S("kb_aliA"), "Ali bir süre düşündü. “O zaman ben affederim,” dedi. “Ben yaşıyorum.” Sonra uyudu. Sen sabaha kadar uyuyamadın."),
P(S("kb_aliB"), "Ali gözlerini kapadı, rahatladı. Bir yalan bir çocuğu uyuttu. Sabah, yalanın tadı ağzındaydı."),
P(S("kb_aliC"), "“Söz mü?” dedi Ali. “Söz,” dedin. Bir öğretmen bir çocuğa söz verdi; ikiniz de bu sözün bu dağlarda ne kadar hafif olduğunu bilmeden."),
P(S("kb_aliD"), "Yanına oturdun. Ali elini tuttu. Bir saat sonra uyudu. Elini bırakmadı; sen de çekmedin."),
P(S("kb_kahveA"), "Osman Demirci'nin masasına geçtin. Kahve sustu. Osman başını kaldırmadı ama çayını sana doğru itti. Ertesi gün köyde iki şey konuşuldu: Rıza'nın nerede olduğu, ve öğretmenin kimin masasına oturduğu."),
P(S("kb_kahveB"), "Sözlerin kahvede çınladı. Kimse cevap vermedi. Sonra biri taşları topladı, biri sobaya odun attı; konuşma, sen hiç konuşmamışsın gibi devam etti. Bir köy bir sesi böyle yutar."),
P(S("kb_kahveC"), "Cuma. Namazdan sonra. Bu bilgi şimdi cebinde. Bilmek, bir şey yapmak zorunda olmak demek mi? Kahveden çıkarken bu sorunun cevabını bilmiyordun."),
P(S("kb_kahveD"), "Hacı Murat'ın kapısı açıldı. Yaşlı adam seni dinledi. “Cuma,” dedi. “Evet. Ben söyledim.” Utanmadı. Ama ertesi gün Cemal'i şehre, bir akrabaya gönderdi; bir haftalığına. Neden, kimse bilmiyor."),
P(S("k3A"), "Ali'yi evine aldın. İlk gece uyumadı; sobanın çıtırtısında her ses bir ayak sesi oldu. Sabaha karşı başını dizine koydu ve uyudu. Bir çocuğu korumak bu kadar basit, bu kadar ağır."),
P(S("k3B"), "Zehra Hanım jandarmaya gitti. Bir onbaşı tutanak tuttu, “Gerekeni yaparız,” dedi. Kimse bir şey yapmadı. Devletin gözü köye bir defter kadar uzaktı."),
P(S("k3C"), "Zehra Hanım ağladı. “Teslim olursa öldürürler,” dedi. “Hapiste de bulurlar. Dışarıda da.” Sonra sustu. “Ama siz söylerseniz belki dinler. Sizi severdi.”"),
P(S("k3D"), "Zehra Hanım sana baktı ve bir şey söylemeden gitti. Ali ertesi gün derse gelmedi. Taraf olmamak, kimin tarafında durduğunu değiştirmedi; yalnızca kimin yanında durmadığını belli etti."),
"Pazar günü Zehra Hanım'ın oğlu Rıza seni çağırtıyor. Bir çoban çocuğu, kulağına fısıldıyor: “Yukarı yaylada, eski kulübe. Yalnız gel.”",
"Kulübe soğuk. Rıza yirmi iki yaşında, sakalı uzamış, gözleri çökmüş. Seni görünce ayağa kalkıyor; bir öğrenci gibi.",
"Kulübenin bir köşesinde Rıza'nın yatağı: iki battaniye ve bir koyun postu. Duvarda, bir çivide, annesinin ördüğü yün çoraplar. Ocakta küllenmiş bir ateş; gece yakmaya korkuyor, duman görünür diye. Üç haftadır burada. Rıza'yı son gördüğünde düğünlerde halay başı çeken bir gençti. Üç hafta, bir insanı bir gölgeye çevirmeye yetiyor.",
"“Ben öldürmedim hocam,” diyor. “Yani öldürdüm, ama öldürmek istemedim. Kürekle üstüme geldi. İttim. Taşa düştü. Kafası.” Ellerini gösteriyor; sanki kan hâlâ oradaymış gibi.",
"“Herkes katil diyor. Ben katil miyim?”",
"Bir kazayla bir cinayeti ayıran şey niyet mi, sonuç mu? Köyde bunun cevabı yok. Köyde bir ölü var ve bir borç var. Gerisi ayrıntı."
], secenekler: [
{ t: "Teslim olmasını söylersin. “Mahkeme bunu ayırır. Köy ayıramaz.”", to: "k5", etki: { adalet: 1, riza_teslim: true } },
{ t: "Ona para verip İstanbul'a kaçmasını söylersin.", to: "k5", etki: { merhamet: 1, kacirdi: true } },
{ t: "Sulh meclisine gelmesini, herkesin önünde kendi ağzıyla anlatmasını istersin.", to: "k5", etki: { gelenek: 1, meclise: true } },
{ t: "“Bilmiyorum Rıza,” dersin. Bu soruyu cevaplayabilecek tek kişi toprağın altında.", to: "k5", etki: { bilmiyorum: true } }
]},

k5: { saat: "Aralık 1994", baslik: "Sulh Meclisi", metin: [
P(S("k4A"), "Rıza başını salladı ama gözleri başka yerdeydi. “Düşüneceğim,” dedi. Düşünmek; bu köyde en uzun süren eylem."),
P(S("k4B"), "Parayı aldı. Ertesi sabah kulübe boştu. Kimse nereye gittiğini bilmiyor. Rıza'nın borcu şimdi köyde kaldı; ve köy borcu, borçluyu değil, onun en yakınını bulur."),
P(S("k4C"), "Rıza bir süre sustu. “Gelirim,” dedi. “Sen yanımda olursan.” Bir sözün altına girdin; ne kadar ağır olduğunu henüz bilmiyorsun."),
P(S("k4D"), "“Bilmiyorum,” dedin. Rıza başını salladı. “Ben de,” dedi. İkiniz bir süre kulübenin soğuğunda oturdunuz. Bazen insanlar aynı bilmezliği paylaşınca biraz daha az yalnız oluyor."),
"Aralık başında, cami avlusunda sulh meclisi kuruluyor. Komşu köyün ağası, imam, iki ailenin büyükleri. Jandarma teğmeni uzakta, cipinin yanında sigara içiyor; görünmek ama karışmamak için.",
"Meclis eski usulle kuruluyor: erkekler avlunun ortasında, minderlerde; yaşlılar önde, gençler arkada. Ortada bir sini, sinide çay. Komşu köyün ağası Şeyh Ömer yetmişlerinde, bembeyaz sakallı; bu dağlarda kırk yılda yirmiden fazla kan davasını o bağlamış. Herkes ona bakıyor. O kimseye bakmıyor; tespihini çekiyor.",
"Teklif okunuyor: Demircilerden kan bedeli olarak para, iki tarla ve bir kız. Gül. Demircilerin on altı yaşındaki kızı, Kayaların küçük oğlu Cemal'le evlendirilecek. Kan, kanla değil, akrabalıkla kapanacak.",
"Gül, iki yıl öncesine kadar sınıfının birincisiydi. Öğretmen olmak istiyordu. Bunu sana bir kompozisyonda yazmıştı.",
"Ağa sana dönüyor. “Öğretmen. Sen okumuş adamsın. Bu köyün çocuklarını sen yetiştirdin. Sen de söyle.”",
"Bütün gözler üzerinde. Hacı Murat'ın, Osman Demirci'nin, imamın. Avlunun kenarında, duvarın dibinde, kadınlar. Ve en arkada, kollarını göğsünde kavuşturmuş, Cemal."
], secenekler: [
{ t: "“Sulh olsun, para olsun, tarla olsun. Ama kız verilmez.”", to: "s1", etki: { merhamet: 1, kiz_hayir: true } },
{ t: "“Bu meclisin hiçbir yasal değeri yok. Rıza'nın yeri mahkemedir.”", to: "d1", etki: { adalet: 2, devlet: true } },
{ t: "Susarsın. Bu meclis bu köyün meclisi. Senin değil.", to: "g1", etki: { gelenek: 1, sustu: true } },
{ t: "Kalkarsın. Cemal avludan çıkıyor ve sen onun arkasından gidiyorsun.", to: "c1", etki: { cemal_pesinde: true } }
]},


kb_ali: { saat: "Kasım 1994", baslik: "Ali'nin Soruları", metin: [
"Ali'yi evine getirdin. Lojman iki oda: birinde kitaplar ve bir yatak, ötekinde bir soba ve bir masa. Ali'ye yatağı veriyorsun, sen sobanın yanında, minderde yatacaksın.",
"Ali uyumuyor. Tavana bakıyor. Bir süre sonra soruyor: “Hocam, siz neden evlenmediniz?”",
"Bu soruyu köyde herkes merak eder ama kimse sormaz. Bir çocuk sorar. “Bilmiyorum,” diyorsun. “Belki geç kaldım.” Ali düşünüyor. “Çocuğunuz olsaydı,” diyor, “onu da vurabilirlerdi. İyi ki yok.”",
"On iki yaşında bir çocuğun bir cümlesi. İçinde bir köyün bütün aklı var.",
"Sonra başka bir soru: “Selim ağabey öldü ya. Şimdi cennette mi? Orada Rıza ağabeyimi affeder mi? Ölüler affedebilir mi?”",
"Cevabını bilmediğin bir soru. Ama bir çocuğa cevapsız bir soruyla uyumayı öğretmek mi, yoksa bir cevap uydurmak mı daha doğru?",
"Ali başını yastığa gömüyor. Sesi boğuk: “Ben kimseyi öldürmedim hocam. Neden beni öldürsünler?”",
"Sobanın ateşi çıtırdıyor. Dışarıda bir köpek havlıyor, sonra susuyor. Bütün köy uyuyor, ya da uyuyor gibi yapıyor."
], secenekler: [
{ t: "“Ölüler affedemez Ali. Affetmek yaşayanların işi. Bu yüzden zor,” dersin.", to: "k4", etki: { merhamet: 1, ali_ders: true } },
{ t: "“Selim ağabey çoktan affetti,” dersin. Bir çocuk uyuyabilsin diye.", to: "k4", etki: { merhamet: 1, ali_teselli: true } },
{ t: "“Seni kimse öldürmeyecek. Ben buradayım,” dersin. Tutamayacağın bir söz.", to: "k4", etki: { merhamet: 1, ali_soz: true } },
{ t: "“Bunun cevabını bilmiyorum,” dersin. Yanına oturup uyuyana kadar beklersin.", to: "k4", etki: { adalet: 1 } }
]},

kb_kahve: { saat: "Kasım 1994", baslik: "Kahvehane", metin: [
"Akşam kahvehanedesin. Köyün tek kahvesi: bir oda, altı masa, bir soba, duvarda bir televizyon ki yalnızca tek kanal çeker. Erkekler okey oynuyor. Ya da oynuyormuş gibi yapıyor; taşlar uzun süre masada bekliyor.",
"Seni görünce bir masa yer açıyor. Kayaların akrabaları. Çay geliyor. Konuşma, sen yokmuşsun gibi devam ediyor; ya da tam da sen duyasın diye.",
"“Cemal cuma günü yapacak,” diyor biri. “Cuma namazından sonra. Hacı Murat öyle istemiş. Kan cuma günü alınırsa sevabı olurmuş.” Bir başkası gülüyor. “Sevap mı? Hacı Murat kırk yıl önce de cuma günü almıştı.”",
"Masalar arasında bir boşluk var. Odanın köşesinde, tek başına, Osman Demirci oturuyor. Rıza'nın babası. Önünde soğumuş bir çay. Kimse ona bakmıyor; kimse onunla konuşmuyor; ama kimse de onu dışarı çıkarmıyor. Kahvede herkesin hakkı vardır. Bu köyün kuralları kadar, bu köyün nezaketi de eski.",
"Osman Demirci seni görüyor. Bir an göz göze geliyorsunuz. Sonra o bakışı çeviriyor; senden bir şey beklemekten utanır gibi.",
"Taraf olmamak istemiştin. Ama bu odada iki taraf var ve sen bir masaya oturdun; masanın hangisi olduğunu herkes gördü.",
"Televizyonda haberler. Başka bir yerde, başka bir savaş. Kimse izlemiyor."
], secenekler: [
{ t: "Kalkıp Osman Demirci'nin masasına geçersin.", to: "k4", etki: { merhamet: 1, osman_masa: true } },
{ t: "Masadakilere yüksek sesle söylersin: “Bunu bilip susan herkes ortaktır.”", to: "k4", etki: { adalet: 1, kahve_cikis: true } },
{ t: "Susarsın ve dinlersin. Cuma. Namazdan sonra. Bunu bilmek bir şeydir.", to: "k4", etki: { cuma: true } },
{ t: "Kalkıp doğruca Hacı Murat'ın kapısına gidersin.", to: "k4", etki: { gelenek: 1, murata_gitti_erken: true } }
]},

kb_murat: { saat: "Şubat 1995", baslik: "Son Çay", metin: [
"Savcı gelmeden bir gün önce Hacı Murat seni çağırtıyor. Bir çocuk kapına geliyor: “Hacı dede seni bekliyor.”",
"Oda aynı. Saat, askı, loş ışık. Ama Hacı Murat değişmiş; bir kış ona on yıl eklemiş. Çayı bu kez kendisi koyamıyor; elleri titriyor, gelini koyuyor.",
"“Yarın savcıya her şeyi anlatacakmışsın,” diyor. Soru değil. Köyde hiçbir şey sır kalmaz.",
"“Evet,” diyorsun.",
"Uzun süre susuyor. Sonra: “O zaman bir şey daha anlat. Elli ikide vurduğum adam. Babamın katili diye vurduğum adam.” Sesi kırılıyor. “O değildi. Kardeşiydi babamı vuran. Ben yanlış kardeşi vurdum. On dokuz yaşındaydım, karanlıktı, ikisi birbirine benzerdi. Kırk iki yıl kimseye söylemedim.”",
"Pencereden dışarı bakıyor. “Kan yerde kalmaz dedim. Benim döktüğüm kan kırk iki yıldır yerde. Kimse almadı onu. Çünkü kimse bilmiyordu. Şimdi sen biliyorsun.”",
"Bir adam ömrünün sonunda sana bir yük veriyor. Ve bu yükü ne yapacağını, ona sormadan karar vermen gerekiyor."
], secenekler: [
{ t: "“Bunu da yazdıracağım,” dersin. Kırk iki yıllık bir hakikat de bir dosyaya girer.", to: "t3", etki: { adalet: 1, murat_itiraf: "yazdi" } },
{ t: "“Bu sizin günahınız. Benim değil. Allah'a anlatın,” dersin.", to: "t3", etki: { gelenek: 1, murat_itiraf: "sakla" } },
{ t: "“Vurduğunuz adamın ailesi yaşıyor mu?” diye sorarsın.", to: "t3", etki: { merhamet: 1, murat_itiraf: "aile" } },
{ t: "Hacı Murat'ın elini tutarsın. Bu adam ilk kez birinin elini tutmasına izin veriyor.", to: "t3", etki: { merhamet: 1, murat_itiraf: "el" } }
]},

kb_imam: { saat: "Şubat 1995", baslik: "İmam", metin: [
"Hiçbir şey anlatmamaya karar verdin. Ama kararın ağırlığını tek başına taşıyamıyorsun. Akşam namazından sonra camiye gidiyorsun.",
"İmam Halil Efendi altmış yaşında, köye senden beş yıl önce gelmiş. İkiniz bu köyün iki yabancısısınız; biri çocukları, biri ölüleri yönetir. Yıllardır birbirinize saygı duyarsınız ama hiç dost olmadınız.",
"Caminin avlusunda, çeşmenin başında oturuyorsunuz. Anlatıyorsun: savcıyı, susmayı, nedenini.",
"İmam dinliyor. Sonra abdest suyunu bir avucuna alıp yere döküyor. “Allah her şeyi bilir,” diyor. “Mahkeme bilmese de. Bu bazen bir teselli, bazen bir tehdit. Hangisi olduğunu insan kendi kalbinden anlar.”",
"Bir süre susuyor. “Ben de susuyorum, biliyor musun? Yirmi yıldır bu köyde. Kimin kimi vurduğunu, kimin kızını kime verdiğini, kimin kimden kan aldığını biliyorum. Cenazelerini kıldırıyorum. Hiçbirini savcıya söylemedim.” Başını sana çeviriyor. “Ben kendime şunu söylüyorum: ben bir imamım, bir tanık değil. Sen kendine ne söylüyorsun?”",
"Avluda karanlık. Minarenin ışığı yanıyor."
], secenekler: [
{ t: "“Ben bir öğretmenim. Öğretmenler susmaz,” dersin ve fikrini değiştirirsin.", to: "t3", etki: { adalet: 1, ifade: "kismi", imam_dondu: true } },
{ t: "“Ben bir yabancıyım. Bu köyün kararlarını ben veremem,” dersin.", to: "t3", etki: { gelenek: 1 } },
{ t: "“Siz de konuşun Halil Efendi. Birlikte,” dersin.", to: "t3", etki: { adalet: 1, imama_teklif: true } },
{ t: "Cevap vermezsin. Abdest alıp namaza durursun; yıllardır ilk kez.", to: "t3", etki: { merhamet: 1, namaz: true } }
]},

/* ---------- SULH KOLU ---------- */
s1: { saat: "Aralık 1994", baslik: "Kızın Yerine", metin: [
"“Kız verilmez,” dedin. Avlu sustu. Ağa kaşlarını kaldırdı. Osman Demirci yere baktı; kızını kurtardığın için minnet mi, onu utandırdığın için öfke mi, belli değil.",
"Hacı Murat ayağa kalkıyor. “Kız yoksa sulh yok,” diyor. “Para bir ölünün bedeli değil. Kız gelirse kan karışır, kan karışınca kan dökülmez. Bu eskiden beri böyle.”",
"Şeyh Ömer tespihini durduruyor. Avlu daha da sessizleşiyor. Bu dağlarda kızsız bağlanan sulhler görülmemiş değil ama nadir. Kız, iki aile arasında yaşayan bir rehine gibidir: kanı karışır, çocukları iki aileden olur, kimse kendi torununun dayısını vurmaz. Bu düzenin bir mantığı var. Korkunç, ama işleyen bir mantık.",
"Tam o sırada avlunun kenarından bir ses. Kadınların arasından. Hatun.",
"“Kız istemem.”",
"Meclislerde kadınlar konuşmaz. Herkes donup kalıyor. Hatun bir adım öne çıkıyor; başörtüsü kaymış, umursamıyor.",
"“Oğlumun yerine bir kız almam. Bir annenin oğlu öldü diye bir başka annenin kızını mı alacağım? Selim bunu istemezdi. Ben istemem. Kimse benim adıma kız istemesin.”",
"Hacı Murat'ın yüzü kıpkırmızı. Kadının sözüne karşılık verse bir şey kaybedecek; vermese başka bir şey. İmam gözlerini kapamış. Ağa sana bakıyor; sanki bu kadını sen konuşturmuşsun gibi."
], secenekler: [
{ t: "Hatun Hanım'ın yanına gidip yüksek sesle desteklersin.", to: "s2", etki: { merhamet: 1, hatun_destek: true } },
{ t: "Bir orta yol önerirsin: daha büyük bir bedel ve Rıza'nın köyden sürgünü. Kız yok.", to: "s2", etki: { gelenek: 1, surgun: true } },
{ t: "“Bedel ödensin ama Rıza da teslim olsun. İkisi birden,” dersin.", to: "s2", etki: { adalet: 1, ikili: true } },
{ t: "Susarsın. Söz artık Hatun Hanım'ın. Ona bırakırsın.", to: "s2", etki: { hatuna_birakti: true } }
]},

s2: { saat: "Aralık 1994", baslik: "Yemin", metin: [
P(S("s1A"), "Hatun Hanım'ın yanına geçtin. Erkekler sana öyle bir baktı ki on beş yılın bir anda silindiğini hissettin. Ama Hatun Hanım'ın eli bir an koluna dokundu. O dokunuş, o bakışlardan ağır geldi."),
P(S("s1B"), "Sürgün teklifini ağa beğendi. Hacı Murat itiraz etmedi. Rıza'nın hayatı bağışlanacak ama Karaağaç'a bir daha ayak basmayacak. Bir insanı yaşatmanın bedeli, onu bir yerden silmek."),
P(S("s1C"), "Ağa güldü. “Devlet ve töre bir arada,” dedi. “Hem yatsın hem ödesin.” Hacı Murat düşündü, düşündü. Sonra başını salladı. Bir adam hem mahkemeye hem meclise borçlu olacak."),
P(S("s1D"), "Sustun. Hatun Hanım bekledi; seni, birilerini. Sonra kendi başına devam etti: “Bedel ödensin. Kız yok. Kan da yok.” Ve ağa, şaşırtıcı biçimde, kabul etti. Bir kadının tek başına kazandığı bir şey."),
"Bir hafta sonra cami avlusunda yemin. Kur'an'ın üzerine iki el: Hacı Murat ve Osman Demirci. Sonra gençlerin el sıkışması gerekiyor: Cemal ve Demircilerden biri.",
"Yemin günü köyün bütün erkekleri avluda. Kadınlar duvarın dibinde, çocuklar damlarda. Şeyh Ömer Kur'an'ı yeşil bir örtünün içinden çıkarıyor, iki eliyle kaldırıyor. Tören yavaş, ağır; her hareketi yüzyıllar öncesinden gelen bir sıraya göre. Bu sıranın içinde bir yerde durduğunu fark ediyorsun; öğretmen olarak değil, tanık olarak.",
"Osman Demirci elini uzatıyor. Cemal bakıyor. Bir saniye. İki saniye. Avlu nefesini tutmuş.",
"Cemal elini sıkmıyor. Dönüyor ve avludan çıkıyor. Kapıdan çıkarken sana bakıyor; bir şey söylemek ister gibi ya da senden bir şey bekler gibi.",
"Hacı Murat'ın sesi arkadan: “Gençtir. Geçer.” Kimse inanmıyor."
], secenekler: [
{ t: "Cemal'in peşinden gidersin.", to: "c2", etki: { cemal_pesinde: true } },
{ t: "Bırakırsın. Büyükler halleder; sulh imzalandı.", to: "s3", etki: { gelenek: 1 } },
{ t: "Hacı Murat'a gidip torununu dizginlemesini istersin.", to: "s3", etki: { gelenek: 1, murata_dedi: true } },
{ t: "Kulübeye, Rıza'ya koşarsın. Onu uyarmak için.", to: "c2", etki: { uyardi: true } }
]},

s3: { saat: "Ocak – Mart 1995", baslik: "Ilık Barış", metin: [
P(S("s2B"), "Cemal o gece eve dönmedi. Ertesi gün döndü. Kimseye bir şey söylemedi. Köy rahatladı; ya da rahatlamış gibi yaptı."),
P(S("s2C"), "Hacı Murat dinledi. “Ben ona tüfek verdim,” dedi. “Şimdi tüfeği nasıl geri alacağımı bilmiyorum. Kırk yıl önce benden de kimse geri alamadı.” Yine de o akşam Cemal'i odasına çağırdı. Ne konuştuklarını kimse bilmiyor."),
"Kış geçiyor. Sulh tutuyor. Rıza'nın adı köyde anılmıyor. Ali derse dönüyor; ilk hafta kimseyle konuşmuyor, ikinci hafta konuşuyor.",
"Köy yavaş yavaş eski hâline dönüyor, ya da dönmüş gibi yapıyor. Kahvede iki ailenin erkekleri aynı masada oturmuyor ama aynı odada oturuyor; bu da bir şey. Düğünlerde birbirlerine davetiye gönderiyorlar ve gitmiyorlar; bu da bir şey. Kan davası bir yangınsa, sulh yangının sönmesi değil, közlerin üstüne kül örtülmesi. Közler orada. Herkes biliyor.",
"Cemal okulu bırakıyor. Şehre, bir inşaata işçi olarak gidiyor. Gitmeden önce okulun önünden geçiyor, durmuyor.",
"Bir mart sabahı postacı bir mektup getiriyor. İçinde bir kâğıt, el yazısı tanıdık: “Büyüyünce ne olacağım.” İki yıl önce yazdığı kompozisyon. Sen saklamıştın; nasıl onda? Sonra hatırlıyorsun: aylar önce, o gece, sobanın yanında, çekmeceyi açmıştın.",
"Kâğıdın arkasına yeni bir cümle eklenmiş: “Hiçbir şey olamadım hocam. Ama katil de olmadım. Bu yeter mi?”",
"Barışın sesi bu kadar sessiz mi olur? Kimse ölmedi. Kimse de tamamen yaşamıyor."
], secenekler: [
{ t: "Ona uzun bir mektup yazarsın.", to: "t1", etki: { merhamet: 1, sonuc: "baris", mektup: true } },
{ t: "Şehre gidip onu bulursun.", to: "t1", etki: { merhamet: 1, sonuc: "baris", buldu: true } },
{ t: "Kâğıdı çekmeceye geri koyarsın. Cevap vermezsin. Bazı sorular cevapsız kalmalı.", to: "t1", etki: { sonuc: "baris" } },
{ t: "Kâğıdı Hacı Murat'a götürürsün.", to: "t1", etki: { gelenek: 1, sonuc: "baris", murata_kagit: true } }
]},

/* ---------- DEVLET KOLU ---------- */
d1: { saat: "Aralık 1994", baslik: "Karakol", metin: [
"“Bu meclisin hiçbir yasal değeri yok,” dedin. Ağa yüzünü buruşturdu. Hacı Murat ayağa kalktı ve hiçbir şey söylemeden avludan çıktı. Meclis dağıldı.",
"Akşam karakoldasın. Teğmen Ercan yirmi altı yaşında, buraya üç ay önce gelmiş. Masasında bir harita, bir çay, bir yorgunluk.",
"Karakol köyden on iki kilometre uzakta, bir tepenin üstünde, tel örgülerle çevrili. Kapıdaki nöbetçi er seni tanıyor; geçen yıl kardeşinin okul kaydı için gelmişti. “Hocam, hayırdır?” diyor. Hayırdır. Bu köyden jandarmaya gelen kimse hayır için gelmez.",
"“Öğretmenim,” diyor, “bu köylerde biz yalnızca cesetleri sayarız. Kimse konuşmaz. Siz konuşmaya geldiyseniz, ilk sizsiniz.”",
P(function(d){ return d.kacirdi; }, "Rıza'nın kaçtığını biliyorsun; parayı sen verdin. Teğmene bunu söylersen kendini de suçlarsın. Söylemezsen, borç Ali'nin omzunda kalır."),
P(function(d){ return !d.kacirdi; }, "Rıza'nın kulübesini biliyorsun. Teğmen haritayı sana doğru çeviriyor. Bir parmak uzunluğunda bir yayla. Bir parmak, bir hayat."),
"“Söylediğiniz her şey tutanağa geçer,” diyor teğmen. “Adınız da. Köyde bunun ne anlama geldiğini biliyorsunuzdur.”",
"Biliyorsun. Karaağaç'ta jandarmaya konuşan adamın adı bir daha düzgün anılmaz. Muhbir. Bir kelime ki on beş yılı yer."
], secenekler: [
{ t: function(d){ return d.kacirdi ? "Her şeyi anlatırsın: Rıza'nın kaçtığını, parayı senin verdiğini." : "Kulübenin yerini haritada gösterirsin."; }, to: "d2", etki: { adalet: 1, muhbir: true, gozalti: true } },
{ t: "Rıza'nın can güvenliği sağlanırsa teslim olacağını söylersin; aracı olmayı teklif edersin.", to: "d2", etki: { adalet: 1, merhamet: 1, araci: true, gozalti: true } },
{ t: "Bilmediğini söylersin ama Ali için koruma istersin.", to: "d2", etki: { merhamet: 1, ali_koruma: true } },
{ t: "Rıza'yı yarın sabah kendin getireceğini söylersin. Adı tutanağa geçmeden.", to: "d2", etki: { gelenek: 1, kendin_getir: true, gozalti: true } }
]},

d2: { saat: "Aralık 1994", baslik: "Muhbir", metin: [
P(S("d1A"), "Şafakta iki cip yaylaya çıktı. Rıza'yı kelepçeli indirdiler, köyün ortasından geçirdiler. Kapıların arkasından bakan gözler sana döndü. Akşam okulun iki camı kırıktı."),
P(S("d1B"), "Teğmen kabul etti. Yaylaya birlikte çıktınız. Rıza seni görünce ellerini kendiliğinden uzattı. Kelepçe takılırken sana baktı: “Hocam, sözün sözdür, değil mi?” Söz verdin. Neyin sözünü verdiğini tam bilmeden."),
P(S("d1C"), "Teğmen not aldı. “Koruma,” dedi, “bir erle bir cip. Bir hafta.” Bir hafta. Kan davası kırk yıl sürer."),
P(S("d1D"), "Sabah yaylaya çıktın. Rıza'yı ikna etmen iki saat sürdü. Karakola birlikte yürüdünüz. Kimse görmedi, herkes duydu. Akşam köyde adın değişmişti."),
"Köyde rüzgâr döndü. Hacı Murat'ın kapısı sana kapalı. Kahvede selam alan yok. Zehra Demirci bile, oğlunu sen teslim ettiğin için mi kurtardığın için mi, sana bakamıyor.",
"Bir sabah okulun kapısına bir kâğıt iliştirilmiş: el yazısı, imzasız, tek kelime. Muhbir. Kâğıdı indiriyorsun, katlıyorsun, cebine koyuyorsun; çocuklar gelmeden. Ama çocuklar zaten biliyor. O gün sınıfın yarısı derse gelmiyor, gelenler sana bakmıyor. Bir öğretmenin bir köyde kaybedebileceği en ağır şey: çocukların bakışı.",
"Bir akşam Cemal okulun önünde bekliyor. Gözleri kızarık.",
"“Devlet aldı onu,” diyor. “Benim kanımı devlet aldı. On yıl, belki sekiz. Çıkacak. Ben burada, ağabeyimin mezarının yanında, onu bekleyeceğim. Her gün.” Bir an susuyor. “Ya da beklemem. Demircilerin bir erkeği daha var.”",
"Ali. On iki yaşında. Yarın sabah dokuzda sınıfta olacak."
], secenekler: [
{ t: "Ali'yi bu gece şehre, kendi kız kardeşinin yanına götürürsün.", to: "d3", etki: { merhamet: 1, ali_gitti: true } },
{ t: "Teğmen'e gidip Ali için sürekli koruma istersin.", to: "d3", etki: { adalet: 1 } },
{ t: "Cemal'i içeri alıp sabaha kadar konuşursun.", to: "d3", etki: { merhamet: 1, konustu: true } },
{ t: "Hacı Murat'ın kapısını çalarsın. Kapalı da olsa.", to: "d3", etki: { gelenek: 1, murata_gitti: true } }
]},

d3: { saat: "Ocak 1995", baslik: "Okul Bahçesi", metin: [
P(S("d2A"), "Ali'yi gece yarısı otobüse bindirdin. Pencereden el salladı; yüzü camda bir leke gibi kaldı. Zehra Hanım otobüs durağında seninle bekledi, bir şey söylemedi, sadece elini öptü. Bunu kimse görmedi."),
P(S("d2B"), "Teğmen yorgundu. “Bir çocuğu ne kadar koruyabilirim?” dedi. “Bir ay? Bir yıl? Bu dağlarda yaşayan her erkek çocuğu koruyamam.” Yine de bir er gönderdi. Er okulun kapısında üşüyerek bekledi."),
P(S("d2C"), "Sabaha kadar konuştunuz. Cemal ağladı, sonra öfkelendi, sonra yine ağladı. Şafakta “Bilmiyorum,” dedi. “Ne yapacağımı bilmiyorum.” Bu, bir gece önceki “yapacağım”dan daha iyiydi."),
P(S("d2D"), "Kapı açılmadı. Ama arkasından Hacı Murat'ın sesi geldi: “Git öğretmen. Sen yapacağını yaptın. Biz de yapacağımızı yapacağız.”"),
"Bir ocak sabahı, ikinci dersin ortasında, sınıfın kapısı açılıyor. Cemal. Montunun altında o ağır, uzun şey.",
"Sınıfın penceresinden karlı dağ görünüyor. Çocukların nefesi buğu olup camlara yapışıyor. Sobanın üstünde bir çaydanlık, yanında kurumaya bırakılmış eldivenler. Sıradan bir sabah. Felaketler hep sıradan sabahlarda gelir; çünkü sıradan sabahlar, kimsenin hazırlıklı olmadığı sabahlardır.",
P(function(d){ return !d.ali_gitti; }, "Ali üçüncü sırada. Kalemini bırakmış. Kımıldamıyor. Diğer çocuklar donmuş; biri ağlamaya başlıyor."),
P(function(d){ return d.ali_gitti; }, "Ali'nin sırası boş. Cemal sıraya bakıyor, sonra sana. “Nerede?” diyor. Sesi sakin; bu sakinlik her şeyden korkutucu."),
"Cemal tüfeği çıkarıyor. Elleri titriyor. Sana bakıyor. Bir öğrencinin öğretmenine baktığı gibi; ve bir katilin kurbanına bakmaya hazırlandığı gibi.",
"“Çekil hocam.”"
], secenekler: [
{ t: "Çekilmezsin. Cemal ile çocukların arasında durursun.", to: "t1", etki: { merhamet: 1, sonuc: "yarali" } },
{ t: "Ona “Büyüyünce ne olacağım” kompozisyonunu hatırlatırsın. Kelimesi kelimesine.", to: "t1", etki: { merhamet: 1, sonuc: "baris", cemal_birakti: true } },
{ t: "Pencereden, kapıdaki ere bağırırsın.", to: "t1", etki: { adalet: 1, sonuc: "cemal" } },
{ t: "Cemal'i konuşturur, oyalarsın; bu arada çocuklara arka kapıyı işaret edersin.", to: "t1", etki: { sonuc: "kan", oyaladi: true } }
]},

/* ---------- GELENEK (BERDEL) KOLU ---------- */
g1: { saat: "Aralık 1994", baslik: "Gül", metin: [
"Sustun. Ağa bekledi, sonra sustuğunu bir onay sayarak başını salladı. Sulh kabul edildi. Para, iki tarla ve bir kız.",
"O gece okulun kapısı yine çalınıyor. Bu kez Gül. On altı yaşında, şalını yüzüne sarmış. Babasının evinden gizlice çıkmış.",
"Gül'ü en son iki yıl önce sınıfta gördün; ilkokulu bitirdiği gün. Ortaokul için şehre gitmesine babası izin vermemişti. O gün sana kompozisyon defterini vermişti: “Hocam siz saklayın, evde atarlar.” Defter hâlâ çekmecende, Cemal'in kompozisyonunun yanında. İki çocuğun hayalleri aynı çekmecede, yan yana.",
"Sobanın yanına oturmuyor; ayakta duruyor. “Hocam, siz oradaydınız. Bir şey demediniz.”",
"Sesi suçlamıyor. Bu daha kötü.",
"“Ben öğretmen olmak istiyordum. Size yazmıştım. Siz de altına ‘Olacaksın’ yazmıştınız. Kırmızı kalemle.” Durakladı. “Şimdi bir ölünün kardeşiyle evleneceğim. Kanı temizlemek için. Ben bir sabun muyum hocam?”",
"Cemal'i tanıyor. Aynı sınıftaydılar bir zaman. Cemal'in ona hiç bakmadığını, kendisinin de Cemal'e hiç bakmadığını söylüyor. “Şimdi bir ömür birbirimize bakacağız. Her baktığında ağabeyini görecek. Her baktığımda kendimi bir bedel olarak göreceğim.”",
"Bu kızın sesi, köydeki bütün meclislerin sesinden daha açık. Ama bu köyde hiçbir meclis onu duymayacak."
], secenekler: [
{ t: "Gül'ü bu gece şehre, kız kardeşinin yanına kaçırırsın.", to: "c1", etki: { merhamet: 2, gul_kacti: true } },
{ t: "Osman Demirci'ye gidip kızını vermemesi için yalvarırsın.", to: "g2", etki: { merhamet: 1, osmana: true } },
{ t: "Gül'e bu evliliğin kaç canı kurtaracağını anlatırsın. Bunu kendine de anlatır gibi.", to: "g2", etki: { gelenek: 1, ikna: true } },
{ t: "Cemal'e gidip bu evliliği isteyip istemediğini sorarsın.", to: "g2", etki: { cemale_sordu: true } }
]},

g2: { saat: "Ocak 1995", baslik: "Kına Gecesi", metin: [
P(S("g1B"), "Osman Demirci seni dinledi, başını önüne eğdi. “Hocam,” dedi, “kızımı vermezsem oğlumu verirler. Ya Rıza'yı ya Ali'yi. Söyle, hangisini vereyim?” Cevabın yoktu. Bu köyde bir babanın seçebileceği şeyler bunlardı."),
P(S("g1C"), "Anlattın: sulh olmazsa ne olacağını, kaç kişinin öleceğini, Ali'yi, Rıza'yı, kırk yıllık kan davalarını. Gül dinledi. Sonunda “Hesabı doğru, hocam,” dedi. “Ama hesapta ben yokum.”"),
P(S("g1D"), "Cemal sana baktı. “İstiyor muyum?” dedi. “Kimse bana sormadı. Kimse ona da sormadı. İkimizi de satıyorlar, hocam. Biri kan için, biri barış için.”"),
"Ocakta kına gecesi. Demircilerin evinde kadınlar türkü söylüyor; türküler sevinçli değil, ama sevinçli olmaları gerekiyor. Gül'ün avucuna kına yakılıyor. Gül avucuna bakıyor; sanki bir yarayı izler gibi.",
"Sen de davetlisin; köyün öğretmeni her düğüne çağrılır. Kadınların tarafına geçemezsin; erkeklerle avluda, ateşin başında oturuyorsun. İçeriden türküler geliyor. Gelin evinden ayrılırken ağlar; bu bir gelenek. Bu gece kimse ağlamanın gelenekten mi, başka bir şeyden mi geldiğini ayırmaya çalışmıyor.",
"Gece yarısı Cemal seni dışarıda yakalıyor. Biraz içmiş. “Hocam,” diyor, “yarın onu alacağım. Kimseye söylemeyin ama ben de korkuyorum. Ağabeyimin katilinin kardeşiyle her sabah uyanacağım.”",
"“Dedem diyor ki zamanla alışırsın. Kırk yıl önce babaannemi de böyle almışlar. Bir başka kan için. Alışmış.” Bir süre susuyor. “Alışmak iyi bir şey mi hocam?”"
], secenekler: [
{ t: "Yarın düğünü herkesin önünde durduracağını söylersin.", to: "g3", etki: { merhamet: 1, durduracak: true } },
{ t: "Gül'e bir kitap verirsin. İçine bir not: “Öğretmen olabilirsin. Hâlâ.”", to: "g3", etki: { merhamet: 1, kitap: true } },
{ t: "Hacı Murat'a gidip bu son kez olsun, bu zincir burada kopsun diye söz istersin.", to: "g3", etki: { gelenek: 1, son_kez: true } },
{ t: "Cemal'e “Alışırsın,” dersin. Başka ne diyebilirsin?", to: "g3", etki: { gelenek: 1 } }
]},

g3: { saat: "Ocak 1995", baslik: "Gelin Arabası", metin: [
P(S("g2B"), "Gül'e kitabı verdin. Gül kitabı göğsüne bastırdı, sonra sandığının en dibine koydu; çeyizin altına."),
P(S("g2D"), "Cemal'e “Alışırsın,” dedin. Cemal sana baktı. “Sen alıştın mı öğretmenim?” Cevap veremedin."),
P(S("g2C"), "Hacı Murat seni dinledi. Sonra bir şey yaptı: kalktı, duvardaki boş tüfek askısını çıkardı ve sana verdi. “Bunu sakla,” dedi. “Bu evde bir daha asılmasın.” Bir askı. Belki bir başlangıç."),
"Düğün sabahı kar yağıyor. Demircilerin kapısında süslü bir minibüs. Davul zurna. Gül kırmızı bir duvağın altında, iki kadının kolunda, eşikte duruyor.",
"Minibüsün ön camına bir ayna, bir kurdele, bir de nazar boncuğu bağlanmış. Şoför kasabadan gelmiş; bir düğün, o kadar. Davulcuyla zurnacı da kasabadan. Para alıp çalacak ve gidecekler. Bu sabah bu avluda bu düğünün ne anlama geldiğini bilmeyen tek insanlar onlar; ve en mutlu görünenler de onlar.",
"Bütün köy orada. Hacı Murat, Osman Demirci, imam, ağa. Hatun Hanım kalabalığın en arkasında, yüzü kapalı.",
"Gül bir an duvağın altından sana bakıyor. Göremiyorsun ama biliyorsun.",
"Bir adım. Gül'ün ayağı minibüsün basamağında. Davul hızlanıyor.",
P(function(d){ return d.durduracak; }, "Dün gece Cemal'e düğünü durduracağını söylemiştin. Cemal kalabalığın içinde sana bakıyor. Bekliyor mu, korkuyor mu, bilmiyorsun.")
], secenekler: [
{ t: "Minibüsün önüne geçersin: “Bu kız gitmeyecek.”", to: "t1", etki: { merhamet: 1, sonuc: "kan", durdurdu: true } },
{ t: "Sessizce izlersin. Bu barışın bedeli bu. Ödeniyor.", to: "t1", etki: { gelenek: 1, sonuc: "baris", gelin: true } },
{ t: "Minibüse yaklaşıp Gül'ün eline kız kardeşinin adresini yazdığın bir kâğıt sıkıştırırsın. Bir gün için.", to: "t1", etki: { merhamet: 1, sonuc: "baris", gelin: true, adres: true } },
{ t: "Arkanı dönüp yürürsün. O gün köyden ayrılan ilk otobüse binersin.", to: "t1", etki: { sonuc: "baris", gelin: true, gitti: true } }
]},

/* ---------- CEMAL KOLU ---------- */
c1: { saat: "Gece", baslik: "Dağ Yolu", metin: [
P(S("k5D"), "Sulh meclisinden kalkıp avludan çıktın. Arkandan biri adını seslendi; durmadın."),
P(function(d){ return d.gul_kacti; }, "Gül'ü gece yarısı otobüse bindirdin. Sabah köy uyandığında gelin yoktu ve sulh da yoktu. Hacı Murat'ın sesi bütün köyde duyuldu: “Demirciler sözünden döndü!” O akşam Cemal'i yaylaya çıkan patikada gördüler."),
P(function(d){ return !d.gul_kacti; }, "Cemal'in peşinden avludan çıktın. Köyün son evini geçti, patikaya saptı. Yayla yolu. Elinde bir şey yok gibi; ama dere kenarındaki çalılığa eğildi ve doğrulduğunda omzunda tüfek vardı. Saklamış."),
P(function(d){ return d.silah_sende && !d.gul_kacti; }, "Tüfeği ondan almıştın, battaniyelerin arasında hâlâ duruyor. Bu başka bir tüfek. Bir köyde bir tüfeği almak, tüfekleri bitirmiyor."),
"Gece soğuk. Patika dar, taşlı. Ay bulutların arkasında, gidip geliyor. Önünde, elli adım ileride, Cemal'in gölgesi.",
"Bu patikayı biliyorsun. On beş yıl önce, köye ilk geldiğin yaz, çocuklarla yaylaya çıkmıştın. Cemal o zaman iki yaşındaydı, ağabeyi Selim on bir. Selim en öndeydi, herkese yol gösteriyordu. Bir yerde durmuş, “Hocam, buradan bütün dünya görünür,” demişti. Şimdi o yerin önünden geçiyorsun. Karanlıkta hiçbir şey görünmüyor.",
"Nefesin göğsünde yanıyor. Kırk yaşındasın; on yedi yaşında bir çocuğun peşinden dağa çıkmak için yaşlı, ona yetişmek için yavaş.",
"Bir yerde patika ikiye ayrılıyor. Biri yaylaya, kulübeye. Biri dolanarak kulübenin arkasına, Cemal'den önce varabileceğin kestirme.",
"Cemal bir an duruyor, dönüp arkasına bakıyor. Seni görüyor mu? Bilmiyorsun. Yeniden yürümeye başlıyor."
], secenekler: [
{ t: "Adını bağırırsın. Bütün dağ duysun.", to: "c2", etki: { bagirdi: true } },
{ t: "Sessizce peşinden gidersin. Ne yapacağını görmek istiyorsun.", to: "c2", etki: { izledi: true } },
{ t: "Kestirmeden koşarsın, kulübeye ondan önce varıp Rıza'yı uyarmak için.", to: "c2", etki: { uyardi: true } },
{ t: "Geri dönüp jandarmaya haber vermeye koşarsın.", to: "c2", etki: { adalet: 1, jandarma_yolda: true } }
]},

c2: { saat: "Gece", baslik: "Çoban Kulübesi", metin: [
P(S("s2A"), "Yemin bitmeden kalkıp Cemal'in peşinden gittin; dağ yolunu koşarak çıktın. Kulübeye vardığında nefesin kesilmişti."),
P(S("c1A"), "Adını bağırdın. Ses dağda yankılandı: Cemal, Cemal. Durdu. Dönmedi. Sonra daha hızlı yürüdü."),
P(S("c1B"), "Sessizce izledin. Bir tanık olarak. Ne olacağını görmek, onu engellemekten daha mı kolaydı? Bu soruyu sonra soracaksın."),
P(S("c1D"), "Köye doğru koştun. Yarı yolda bir cipin farlarını gördün; kahvede birileri jandarmayı çoktan aramış. Cipe binip geri döndünüz. Yetişebilecek misiniz?"),
P(function(d){ return d.uyardi; }, "Kulübeye ondan önce vardın. Rıza uyuyordu; seni görünce sıçradı. “Geliyor,” dedin. Rıza'nın yüzünden geçenleri hiç unutmayacaksın: korku, sonra bir tür rahatlama. Sonunda, diyordu yüzü. Sonunda."),
"Kulübenin önünde Cemal. Tüfek omzunda, namlu kapıya dönük. Nefesi buhar olup havaya karışıyor.",
"Ay bulutların arkasından çıkıyor. Kar her şeyi maviye boyuyor: kulübeyi, ağaçları, iki gencin yüzünü. Sessizlik o kadar derin ki Cemal'in nefesini duyabiliyorsun. Dağ, yüzyıllardır bu tür geceleri izlemiş gibi bekliyor.",
"“Çık dışarı!” diye bağırıyor. Sesi çocuk sesi.",
"Kapı açılıyor. Rıza çıkıyor. Elleri boş, başı açık. Karın ortasında duruyor.",
"İki genç. Biri yirmi iki, biri on yedi. Biri kaza mı cinayet mi işlediğini bilmeyen; öbürü intikam mı borç mu ödediğini bilmeyen. Aralarında on adım, bir tüfek, kırk yıllık bir köy.",
"Ve sen, ikisinin de öğretmeni, yan tarafta, karın içinde."
], secenekler: [
{ t: "Aralarına girersin.", to: "c3", etki: { merhamet: 1, araya: true } },
{ t: "Cemal'le konuşursun. Annesinin ağıdını hatırlatarak.", to: "c3", etki: { merhamet: 1, agit: true } },
{ t: "Rıza'ya bağırırsın: “Diz çök! Af dile!”", to: "c3", etki: { gelenek: 1, diz: true } },
{ t: "Kımıldamazsın. Bu onların kavgası. Ne yaparsan yap bir şey yıkılacak.", to: "c3", etki: { izledi2: true } }
]},

c3: { saat: "Gece", baslik: "Tetik", metin: [
P(S("c2A"), "Aralarına girdin. Namlu şimdi senin göğsünde. Cemal'in gözleri büyüdü. “Hocam, çekil.” Sesi titriyor. Senin de."),
P(S("c2B"), "“Annen,” dedin. “Mezarlıkta ne dedi, duydun mu? Kan istemem, oğlumu isterim.” Cemal'in namlusu bir santim indi. Bir santim. Sonra yine kalktı."),
P(S("c2C"), "Rıza diz çöktü. Karın içine. Ellerini birleştirdi. “Ağabeyini ben öldürdüm,” dedi. “İstemeden. Affet.” Cemal'in yüzü buruştu; sanki biri ona bir şey vermiş ve o şeyi tutamıyormuş gibi."),
P(S("c2D"), "Kımıldamadın. Rüzgâr kulübenin tahtalarında ıslık çalıyor. Cemal sana bir an baktı; bir şey bekleyerek. Gelmeyince yüzü taşlaştı."),
P(function(d){ return d.jandarma_yolda; }, "Aşağıdan bir motor sesi. Farlar ağaçların arasından geçiyor. Jandarma geliyor. Cemal sesi duyuyor; parmağı tetikte geriliyor. Zaman daralıyor."),
"Dağda her şey çok yavaş. Karın düşüşü. Cemal'in nefesi. Rıza'nın kapalı gözleri.",
"Bir an için her şeyi aynı anda görüyorsun: Hacı Murat'ın boş tüfek askısı, Hatun'un ağıdı, Zehra'nın ağzına bastırdığı başörtüsü, Ali'nin defterindeki kulübe resmi, meclisin minderleri. Hepsi bu ana akmış. Bu an, bir köyün kırk yılının toplamı. Ve tetik, on yedi yaşında bir çocuğun parmağının altında.",
"Bu anda yapabileceğin tek bir şey daha var. Ne yaparsan yap, bu dağdan herkes aynı insan olarak inmeyecek."
], secenekler: [
{ t: "Cemal'e dönersin: “Önce beni. Beni vurmadan onu vuramazsın.”", to: "t1", etki: { merhamet: 1, sonuc: "baris", cemal_birakti: true } },
{ t: "Namluya uzanırsın.", to: "t1", etki: { sonuc: "yarali" } },
{ t: "Cemal'e kendi kararını vermesini söylersin: “Bu senin kararın Cemal. Ben bir şey demeyeceğim.”", to: "t1", etki: function(d){ d.sonuc = (d.agit || d.diz || d.konustu) ? "baris" : "kan"; d.ozgur2 = true; if(d.sonuc === "baris") d.cemal_birakti = true; } },
{ t: "Arkanı dönersin. Yokuş aşağı yürürsün. Arkandan ne gelirse gelsin.", to: "t1", etki: function(d){ d.sonuc = d.jandarma_yolda ? "cemal" : "kan"; d.dondu = true; } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Sabah", baslik: "Silah Sesi", metin: [
P(function(d){ return d.sonuc === "baris" && d.cemal_birakti; }, "Tüfek kara düştü. Cemal dizlerinin üstüne çöktü ve ağladı; on yedi yaşında bir çocuk gibi, yani olduğu gibi. Rıza'nın ya da senin elini tuttu, hangisi olduğunu sonra kimse hatırlamadı. Tüfeği sen aldın. Ağırdı. Hep ağırdı."),
P(function(d){ return d.sonuc === "baris" && d.gelin; }, "Minibüs köyden çıktı. Davul sustu. Kar, tekerlek izlerini yavaşça kapadı. Köy bir kızı verdi ve bir barış aldı. Kimse ölmedi. Bunu herkes birbirine söyledi: kimse ölmedi."),
P(function(d){ return d.sonuc === "baris" && !d.cemal_birakti && !d.gelin; }, "Sabah köy her zamanki gibi uyandı. Kimse ölmemişti. Bir köyde kimsenin ölmemesi ne zamandan beri bir haber?"),
P(function(d){ return d.sonuc === "kan" && d.durdurdu; }, "Minibüsün önünden çekilmedin. Düğün dağıldı. Gül evine geri götürüldü. O gece, sulh bozulduğu için, Cemal yaylaya çıktı. Sabaha karşı tek bir silah sesi. Rıza'yı kulübenin önünde buldular."),
P(function(d){ return d.sonuc === "kan" && d.oyaladi; }, "Çocuklar arka kapıdan kaçtı. Ali de. Cemal sana baktı, tüfeği indirdi ve gitti. Aynı gece, karakolun önünde, Rıza'yı nakil aracından indirirlerken tek bir silah sesi. Cemal dağdan inmemişti; beklemişti."),
P(function(d){ return d.sonuc === "kan" && !d.durdurdu && !d.oyaladi; }, "Tek bir silah sesi. Dağ yankıladı, sonra sustu. Rıza karın içinde, yüzüstü. Cemal tüfeği bıraktı ve oturdu, öylece, karın ortasında. Sabaha kadar kımıldamadı."),
P(function(d){ return d.sonuc === "cemal"; }, "Jandarma yetişti. Bir uyarı, bir ikinci uyarı. Cemal tüfeği indirmedi; belki duymadı, belki duymak istemedi. Bir er ateş etti. Cemal on yedi yaşındaydı. Ağabeyinden dokuz yaş küçük, ağabeyinin yanına gömüldü."),
P(function(d){ return d.sonuc === "yarali"; }, "Bir patlama. Önce ses, sonra sıcaklık, sonra karın kırmızısı. Saçmalar sol omzuna girdi. Cemal tüfeği attı ve senin üstüne kapandı, bağırarak, ağlayarak. Kimse ölmedi. Sen kanadın. Bu köyde ilk kez, kan bir yabancıdan aktı."),
"Karaağaç'ta sabah. Kar dinmiş. Köyün üstünde bir sessizlik var, her şeyi biliyor ve hiçbir şey söylemiyor.",
"Köyün kadınları çeşmenin başında toplanmış; su doldurmuyorlar, yalnızca duruyorlar. Erkekler kahvede; kimse oyun oynamıyor, çaylar soğuyor. Çocuklar evlere kapatılmış. Bu sessizliği daha önce bir kez duymuştun: Selim'in öldüğü sabah. O zaman bir başlangıcın sessizliğiydi. Şimdi neyin sessizliği olduğunu kimse bilmiyor."
], secenekler: [
{ t: "Doğrudan Hacı Murat'ın evine gidersin.", to: "t2", etki: { gelenek: 1, murat_ev: true } },
{ t: "Demircilerin evine gidersin.", to: "t2", etki: { merhamet: 1, demirci_ev: true } },
{ t: "Okula gidip kapıyı açarsın. Ders saati.", to: "t2", etki: { okul: true } },
{ t: "Evine kapanırsın. Kimseyi görmek istemiyorsun.", to: "t2", etki: { kapandi: true } }
]},

t2: { saat: "Sonraki günler", baslik: "Taziye", metin: [
P(S("t1A"), "Hacı Murat'ın odası. Duvarda saat, askı. Yaşlı adam pencerenin önünde, sırtı sana dönük. “Bu benim işimdi,” diyor, sana dönmeden. “Kırk iki yıl önce başladım. Bitiremedim.” Elleri titriyor. Hayatında ilk kez."),
P(S("t1B"), "Demircilerin evi. Zehra Hanım sana bir sandalye veriyor. Osman Demirci ayakta. Ali köşede. Kimse bir şey söylemiyor. Sonra Ali kalkıp yanına oturuyor; sınıfta oturduğu gibi."),
P(S("t1C"), "Okulun kapısını açtın. Sobayı yaktın. Dokuzda üç çocuk geldi. Onda beş. Dersin konusu kesirlerdi. Bir bütünün parçalarını anlattın. Çocuklar dinledi. Sen de."),
P(S("t1D"), "Kapını kilitledin. Üç gün dışarı çıkmadın. Dördüncü gün kapının önünde bir tabak yemek buldun. Kim bıraktı, bilmiyorsun."),
"Köy bir şeyi taşıyor ve taşıdığı şeyin adını koymuyor.",
P(function(d){ return d.sonuc === "kan" || d.sonuc === "cemal"; }, "Mezarlıkta yeni bir mezar var. Dut ağacının altında yeni bir ağıt. İki ailenin kadınları, ilk kez, aynı ağıtın iki ucundan tutuyor. Erkekler yine mezarlığın öbür ucunda."),
P(function(d){ return d.sonuc === "baris" || d.sonuc === "yarali"; }, "Mezarlıkta yeni bir mezar yok. Bu, bir şeyin bittiği anlamına mı geliyor, yoksa yalnızca ertelendiği mi? Köyün yaşlıları bilir; ve yaşlılar susuyor."),
"Kasabadan bir savcı gelecek. İfaneni alacak. Bu köyde konuşan adamın adı bir daha düzgün anılmaz; konuşmayan adamın adı ise hiç anılmaz."
], secenekler: [
{ t: "Savcıya her şeyi anlatmaya karar verirsin: meclisi, kızı, tüfeği veren eli.", to: "kb_murat", etki: { adalet: 1, ifade: "tam" } },
{ t: "Yalnızca gördüğünü anlatmaya karar verirsin. Köyün yaşlılarını dışarıda tutarak.", to: "t3", etki: { gelenek: 1, ifade: "kismi" } },
{ t: "Cemal'i korumak için anlatacaklarını düzenlemeye karar verirsin.", to: "t3", etki: { merhamet: 1, ifade: "koru" } },
{ t: "Hiçbir şey anlatmamaya karar verirsin. Bu köyün sessizliğine katılırsın.", to: "kb_imam", etki: { gelenek: 1, ifade: "sessiz" } }
]},

t3: { saat: "Şubat 1995", baslik: "Savcı", metin: [
P(S("kb_muratA"), "Hacı Murat başını salladı. “Yaz,” dedi. “Kırk iki yıl ağır geldi.” Savcıya anlattığında savcı kalemini bıraktı. “Bu dava zaman aşımına uğramış,” dedi. “Ama yazacağım.” Yazdı."),
P(S("kb_muratB"), "“Allah'a anlattım,” dedi Hacı Murat. “Kırk iki yıl. Cevap vermedi.” Sustun. Sır, bir odadan bir başka odaya geçti; şimdi seninle birlikte savcının karşısında oturuyor."),
P(S("kb_muratC"), "“Bir kızı vardı,” dedi Hacı Murat. “Şehre gitmiş. Yaşıyorsa altmışında.” Bir adres yoktu, bir ad vardı. Savcıya o adı da söyledin. Neden, bilmeden."),
P(S("kb_muratD"), "Hacı Murat'ın eli kuru, kemikli, soğuktu. Bırakmadı. Kırk iki yıl sonra biri onun elini tutuyordu ve tutan, kan davasının hiçbir tarafından değildi."),
P(S("kb_imamA"), "İmamın yanından kalktın. Fikrini değiştirdin; ama bir yarısını. Savcıya gördüğünü anlattın, yalnızca gördüğünü. Halil Efendi'nin sorusu bütün ifade boyunca kulağındaydı."),
P(S("kb_imamB"), "“Bir yabancı,” dedi imam ve gülümsedi. “İkimiz de. Belki bu yüzden bu köy bizi tutuyor: kimseye tehlikeli değiliz.”"),
P(S("kb_imamC"), "İmam uzun süre sustu. “Belki,” dedi. “Belki bir gün.” Ertesi gün savcı geldiğinde imam caminin kapısında duruyordu. Ama içeri girmedi."),
P(S("kb_imamD"), "Namaz kıldın. Yıllardır ilk kez. Secdede alnın soğuk taşa değdiğinde bir şey hissettin; dua değil, bir tür teslimiyet. Bir köyün sessizliğine, bir dinin sessizliğiyle katıldın."),
"Savcı otuzlarında, gözlüklü, aceleci. Okulun öğretmenler odasında, senin masanda oturuyor. Masada senin çay bardağın, senin kalemin.",
"Kasabadan bir cip ile gelmiş, yanında bir zabıt kâtibi. Kâtip yaşlı, sessiz; daktiloyu sıranın üstüne koyuyor, kâğıdı takıyor ve bekliyor. Bu odada yüzlerce çocuğa yazı yazmayı öğrettin. Şimdi senin sözlerin bir daktiloyla bir dosyaya yazılacak. Yazının ağırlığını hiç bu kadar hissetmemiştin.",
"“Öğretmen bey,” diyor, “bu köylerde kimse konuşmaz. Ama siz devlet memurusunuz. Sizden beklenen başka.”",
P(function(d){ return d.ifade === "tam"; }, "Anlattın. Meclisi, ağayı, kızı, tüfeği veren eli, yemini, ağıdı. Savcı yazdıkça yüzü değişti. “Bu bir dosya değil,” dedi sonunda. “Bu bir köy.” Ama yazdı. Hacı Murat'ın adı da yazıldı."),
P(function(d){ return d.ifade === "kismi"; }, "Gördüğünü anlattın. Yalnızca gördüğünü. Meclisi anlatmadın; ağanın, imamın, yaşlıların adını vermedin. Savcı bir şeylerin eksik olduğunu sezdi ama sormadı. Eksik bir gerçek, bütün bir yalandan daha mı iyi?"),
P(function(d){ return d.ifade === "koru"; }, "Anlattın, ama dikkatle. Cemal'in korktuğunu, kendini kaybettiğini, dedesinin baskısını. Hepsi doğru. Ama doğruları bir sıraya dizdin; sıra bir hikâye yaptı ve hikâye bir çocuğu korudu. Ya da korumaya çalıştı."),
P(function(d){ return d.ifade === "sessiz"; }, "“Hatırlamıyorum,” dedin. “Görmedim.” Savcı kalemini bıraktı. “Siz de mi?” dedi. Sesindeki hayal kırıklığı seni şaşırttı. Bir yabancının senden beklediği şeyi, sen kendinden beklemeyi çoktan bırakmışsın."),
P(function(d){ return d.muhbir; }, "Dosyada bir sayfa senin adını taşıyor: Rıza'nın yerini haritada gösteren adam. Savcı bu sayfaya dokunuyor. “Size teşekkür etmek isterdim,” diyor. “Ama köydeki adınızı da biliyorum. Bu bir teşekkür değil, bir başsağlığı gibi oldu.”"),
"Savcı gidiyor. Masanda kalemin yerinden oynamış. Onu yerine koyuyorsun; tam eskisi gibi değil."
], secenekler: [
{ t: "Akşam Hacı Murat'a gidip ne anlattığını yüzüne söylersin.", to: "t4", etki: { adalet: 1 } },
{ t: "İmama gidip Cuma'da sulh hakkında konuşmasını istersin.", to: "t4", etki: { gelenek: 1 } },
{ t: "Hatun Hanım'ı ziyaret edersin.", to: "t4", etki: { merhamet: 1, hatun_ziyaret: true } },
{ t: "Kimseye bir şey söylemeden ertesi günün dersini hazırlarsın.", to: "t4" }
]},

t4: { saat: "Mart 1995", baslik: "Boş Sıralar", metin: [
P(S("t3A"), "Hacı Murat seni dinledi. Sonra başını salladı. “Doğru yaptın öğretmen,” dedi. Bunu beklemiyordun. “Ben de yapmalıydım. Elli ikide. Babamın katilini mahkemeye bırakmalıydım.” Bir süre durdu. “Ama bırakmadım. Sen bırakmayanların sonunu görüyorsun.”"),
P(S("t3B"), "İmam dinledi. “Hutbe benim değil,” dedi, “müftülük yazar.” Ama Cuma günü, hutbeden sonra, cemaatin önünde kısa bir şey söyledi: “Kim bir cana kıyarsa...” Ayetin devamını herkes biliyordu. Kimse başını kaldırmadı."),
P(S("t3C"), "Hatun Hanım seni avluda karşıladı. Çay koydu. Selim'in bir fotoğrafını gösterdi, sonra bir başkasını. “Herkes intikamdan konuşuyor,” dedi. “Kimse Selim'den konuşmuyor. Sen konuş benimle. Onu anlat bana. Sınıfta nasıldı?”"),
P(S("t3D"), "Kesirler, ikinci ünite. Bir bütün, eşit parçalar. Hazırlarken düşündün: bir köy eşit parçalara bölünebilir mi? Bölünürse hangi parça kimin?"),
"Sınıfta boş sıralar var.",
"Bahar geliyor. Karlar dağların tepesine çekilmiş, dere coşmuş, söğütler yeşermiş. Pencereden tarlalar görünüyor: Kayaların tarlası ile Demircilerin tarlası, aralarındaki su arkıyla. Bütün bu kışın başladığı ark. Bahar suyu iki tarlaya da eşit akıyor; su kimin olduğunu bilmiyor.",
P(function(d){ return d.sonuc === "cemal"; }, "Cemal'in iki yıl önce oturduğu sıra. Kimse oturmuyor. Çocuklar sıranın çevresinden dolanıyor."),
P(function(d){ return d.ali_gitti; }, "Ali'nin sırası. Ali şehirde, senin kız kardeşinin evinde, başka bir okulda. Sana bir mektup yazdı: “Hocam burada kar yağmıyor.”"),
P(function(d){ return d.gelin; }, "Gül'ün kardeşi, sekiz yaşında, ablasının bir zamanlar oturduğu sırada. Ablasının adını defterine yazmış: Gül Kaya. Soyadı değişmiş."),
"Teneffüste küçük bir kız yanına geliyor. Dokuz yaşında, ne Kayalardan ne Demircilerden. “Hocam,” diyor, “kan yerde kalır mı?”",
"Bu soruyu bir çocuk soruyor; çünkü bir yetişkinden duymuş. Ve bir gün kendi çocuğu da soracak."
], secenekler: [
{ t: "“Kalmalı,” dersin. “Ancak yerde kalırsa biter.”", to: "t5", etki: { merhamet: 1, cevap: "kalmali" } },
{ t: "“Kan yerde kalmaz. Ama onu mahkeme alır, insan değil,” dersin.", to: "t5", etki: { adalet: 1, cevap: "mahkeme" } },
{ t: "“Büyüklerine sor,” dersin. Bu köyün cevabını sen veremezsin.", to: "t5", etki: { gelenek: 1, cevap: "buyuk" } },
{ t: "Bir şey demezsin. Onu tahtaya kaldırır, “Barış” kelimesini hecelemesini istersin.", to: "t5", etki: { cevap: "hece" } }
]},

t5: { saat: "Haziran 1995", baslik: "Tayin", metin: [
P(S("t4A"), "“Kalmalı,” demiştin. Çocuk başını salladı; ama gözlerinde bir soru kaldı: kalmasına kim karar verir?"),
P(S("t4B"), "“Onu mahkeme alır, insan değil,” demiştin. Çocuk düşündü. “Mahkeme bizim köye gelir mi?” Cevap veremedin."),
P(S("t4C"), "“Büyüklerine sor,” demiştin. Ertesi gün çocuk geldi: “Dedem kalmaz dedi.” Bir sınıfın içinde, küçük bir sesle, bir kan davası daha başladı."),
P(S("t4D"), "Çocuğu tahtaya kaldırdın. “Ba-rış.” Heceledi, yazdı; noktalı ı'yı unuttu. Sınıf güldü. Çocuk da güldü."),
"Haziran. Okul kapanıyor. Masanda bir zarf: Milli Eğitim'den. Şehre tayin talebin kabul edilmiş.",
"Karne günü. Çocuklar karnelerini alıp koşarak çıkıyor; yaz, dağlar, yaylalar. Son çocuk da gidince sınıfı süpürüyorsun, sıraları siliyorsun, tahtayı temizliyorsun. Tahtanın köşesinde silmeyi unuttuğun tek bir kelime kalmış, bir çocuğun yuvarlak harfleriyle: “Barış.” Silmiyorsun.",
"Bir talepte bulunduğunu hatırlamıyorsun. Ya da hatırlıyorsun: aralık ayında, bir gece, sobanın yanında, ellerin titrerken yazdığın bir dilekçe. Göndermediğini sanıyordun.",
"On beş yıl. Köyün yirmi yaşın altındaki herkesi tanıyorsun. Yaşlılarını gömdün, bebeklerinin adını defterlere yazdın. Ve bu kış, bir kan davasının ortasında, hangi tarafta durduğunu bütün köy gördü. Ya da durmadığını.",
"Gidersen kaçmış olursun. Kalırsan, bundan sonra her kış, aynı soruyla uyanacaksın: bir sonraki kan ne zaman?",
"Avlunun dibinde Hatun Hanım'ın diktiği dut fidanı yaprak vermiş. Selim'in kırkında dikti. Bir ağaç, kırk yılda büyür. Bu köyde her şey kırk yılda büyür; kan davaları da.",
"Kalırsan bir kış daha, bir kan davası daha, belki bir çocuk daha. Gidersen bu köy bir öğretmen daha kaybeder ve kimse şaşırmaz."
], secenekler: [
{ t: "Kalırsın. Zarfı yırtarsın.", to: "ks", etki: { kaldi: true } },
{ t: "Gidersin. Eşyalarını toplarsın.", to: "ks", etki: { gitti: true } },
{ t: "Kalırsın ve gelecek yıl okula bir şey eklersin: yaşlılar için akşam okuma dersi.", to: "ks", etki: { kaldi: true, merhamet: 1, aksam: true } },
{ t: "Gitmeden önce bu kışı bir deftere yazarsın. Bir gün biri okusun diye.", to: "ks", etki: { gitti: true, yazdi: true } }
]},

ks: { yonlendir: [
{ if: function(d){ return d.gelin; }, to: "son_gelin" },
{ if: function(d){ return d.gitti; }, to: "son_yabanci" },
{ if: function(d){ return d.sonuc === "kan" || d.sonuc === "cemal"; }, to: "son_dongu" },
{ if: function(d){ return d.muhbir; }, to: "son_muhbir" },
{ if: function(d){ return d.merhamet >= 5; }, to: "son_zincir" },
{ to: "son_kagit" }
]},

/* ---------- SONLAR ---------- */
son_gelin: { son: true, baslik: "Kına", metin: [
P(S("t5A"), "Zarfı yırtmıştın. Parçaları sobaya attın; bir kış daha."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi; biri Hatun Hanım'dı."),
"Barış tuttu. Kimse kimseyi vurmadı. Ertesi yıl Hacı Murat öldü; cenazesinde iki aile yan yana namaz kıldı. Köyde buna “Gül'ün barışı” diyorlar. Gül'ün adıyla anılan bir barış; ama Gül'e sorulmamış bir barış.",
P(function(d){ return d.adres; }, "Dört yıl sonra bir mektup geldi. Şehirden, kız kardeşinin adresinden. Gül'ün el yazısı: “Hocam, buradayım. İki çocukla. Gece okuluna yazıldım. Kâğıdı saklamıştım.” Altında bir tarih. Kırmızı kalemle değil, mavi tükenmezle: “Olacağım.”"),
P(function(d){ return !d.adres; }, "Yıllar sonra Gül'ü köyün çeşmesinde gördün. Yanında iki çocuk. Sana baktı, gülümsedi. Bir şey söylemedi. Gözlerinin içinde ne vardı, okuyamadın. Belki hiçbir şey. Belki her şey. Belki de alışmıştı; Cemal'in dedesinin dediği gibi."),
"Bir barışın bedeli kimin omzuna yükleniyorsa, barış onun sırtında taşınır. Köy bir kızı verdi ve bir kuşak boyunca kan dökülmedi. Hesap doğru. Ama hesapta Gül yoktu.",
"Bazı geceler kendine soruyorsun: o gün minibüsün önüne geçseydin, bir kız kurtulur, bir genç ölürdü belki. Şimdi bir genç yaşıyor ve bir kız yaşamadığı bir hayatı yaşıyor. Hangisi daha ağır? Bu sorunun cevabı yok; yalnızca taşıyanı var.",
"Ve taşıyan sen değilsin. Bunu bilmek, en ağırı."
]},

son_yabanci: { son: true, baslik: "Yabancı", metin: [
P(S("t5A"), "Zarfı yırtmıştın. Parçaları sobaya attın; bir kış daha."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi; biri Hatun Hanım'dı."),
"Şehre döndün. Bir ortaokulda edebiyat öğretmeni oldun. Kalabalık sınıflar, zil sesleri, kimsenin kimseyi tanımadığı koridorlar.",
"Burada kimse sana kan davası sormuyor. Öğrencilerin dertleri sınavlar, telefonlar, aşk. Bazen bir çocuk kavgaya karışıyor ve sen onu odana çağırıyorsun. Konuşuyorsunuz. Kavga bitiyor. Bu kadar basit, diye düşünüyorsun. Sonra hatırlıyorsun: değil.",
P(function(d){ return d.yazdi; }, "Yazdığın defter çekmecende. Bir gün bir yayınevine gönderdin; geri çevrildi. “Fazla karanlık,” dediler. Haklılar. Ama karanlık, yazıldığı için değil, yaşandığı için karanlık."),
P(function(d){ return d.gelin; }, "Gül'ün düğün günü arkanı dönüp yürüdüğün yol, şimdi her sabah okula yürüdüğün yol gibi geliyor sana. Arkanı dönmek bir kez öğrenilince, insan bir daha unutmuyor."),
"Karaağaç'tan haber almıyorsun. Bir kez, bir bayram, bir kartpostal geldi: Ali'den. “Hocam, öğretmen oldum. Köyde değil. Ama oldum.”",
"On beş yıl bir köyde yaşadın ve bir yabancı olarak ayrıldın. Belki bu yüzden o köyde konuşabildin; belki bu yüzden yeterince konuşamadın. Bir yabancı her şeyi görür ama hiçbir şeyi değiştiremez; çünkü değiştirmek için, bir yere ait olmak gerekir.",
"Ya da belki tam tersi. Bunu hiç bilemeyeceksin."
]},

son_dongu: { son: true, baslik: "Döngü", metin: [
P(S("t5A"), "Zarfı yırtmıştın. Parçaları sobaya attın; bir kış daha."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi; biri Hatun Hanım'dı."),
P(function(d){ return d.sonuc === "kan"; }, "Cemal on iki yıl ceza aldı. Hacı Murat mahkemede başını dik tuttu; torununu vurulmuş bir kahraman gibi değil, borcunu ödemiş bir adam gibi selamladı. Demirciler yas tuttu. Ve yasın içinde, herkesin bildiği bir cümle büyüdü: Demircilerin de bir erkeği daha var. Ali."),
P(function(d){ return d.sonuc === "cemal"; }, "Cemal'i bir er vurdu. Köy, devletin bir Kaya'yı öldürdüğünü söyledi. Demirciler rahatladı; sonra rahatladıkları için korktular. Hacı Murat'ın evinde boş bir tüfek askısı ve iki mezar var. Ve Kayaların, yaşları on'un altında, üç erkek torunu."),
"Kırk yıl sonra Karaağaç'ta bir öğretmen olacak. Belki sen değil; belki senin gibi biri. Bir gece kapısı çalınacak. Montunun altında ağır, uzun bir şey taşıyan bir çocuk soracak: “Hocam, bunu yapmak zorunda mıyım?”",
"Ve o öğretmen, senin bu kış bildiğin hiçbir şeyi bilmeyecek.",
"Kan davası bir olay değil, bir mekanizma. İnsanlar değişir, mekanizma kalır. İçine girdiğin anda bir dişli olursun; dönersen döner, durursan seni ezer.",
"Sen dönmedin mi? Durmadın mı? Bu kış hangisini yaptığını hâlâ bilmiyorsun. Ama mezarlıktaki yeni taşın adını biliyorsun. Ve onun da bir zamanlar sıralarında oturduğunu."
]},

son_muhbir: { son: true, baslik: "Muhbir", metin: [
P(S("t5A"), "Zarfı yırtmıştın. Parçaları sobaya attın; bir kış daha."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi; biri Hatun Hanım'dı."),
"Rıza yedi yıl yattı. Mahkeme, kürek darbesini ve kayayı tarttı; kasten öldürme değil, dedi. Yedi yıl. Hacı Murat'a göre bir hiç. Zehra Hanım'a göre bir ömür.",
"Kimse ölmedi. Bu senin sayende mi, yoksa yalnızca şanslar mı? Bilemiyorsun.",
"Ama köy biliyor bir şeyi: adını. Muhbir. Kahvede kimse selam vermiyor. Çocukların aileleri onları okula gönderiyor; çünkü başka okul yok. Ama veli toplantısına kimse gelmiyor.",
"Bir akşam okulun önünde Zehra Hanım. Elinde bir tabak börek. “Oğlum yaşıyor,” diyor. “Hapiste ama yaşıyor. Bunu kimse sana söylemeyecek. Ben söylüyorum.” Tabağı bırakıp gidiyor, çabuk, kimse görmeden.",
"Adaletin bir bedeli vardı ve sen onu ödedin: aidiyetinle. Devlete konuştun; köye yabancılaştın. Belki bir hayat kurtardın; kesin olarak bir yeri kaybettin.",
"Yıllar sonra Rıza çıktığında, köye dönmedi. Ama sana bir mektup yazdı. Tek cümle: “Hocam, kaza mıydı, cinayet mi, mahkeme karar verdi. Ben hâlâ bilmiyorum.” Sen de bilmiyorsun. Ama birinin bilmesi gerekmiyordu; birinin karar vermesi gerekiyordu. Ve o karar, en azından, bir mezar daha kazdırmadı."
]},

son_zincir: { son: true, baslik: "Kırılan Zincir", metin: [
P(S("t5A"), "Zarfı yırtmıştın. Parçaları sobaya attın; bir kış daha."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi; biri Hatun Hanım'dı."),
"Kimse ölmedi. Tüfek, Hacı Murat'ın evine değil, senin dolabına girdi ve orada kaldı. Bir gün jandarmaya teslim ettin; teğmen tutanağa “sahipsiz silah” yazdı. Sahipsiz. Doğru bir kelime.",
P(function(d){ return d.sonuc === "yarali"; }, "Sol omzunda saçma izleri. Kışın sızlıyor. Cemal her bayram seni arıyor. Sesinde bir şey var; suçluluk değil artık, bir tür bağlılık. Senin kanını akıtmış olmak, onu sana bağladı. Belki de kan davaları böyle de biter: kan akar, ama yanlış yönde."),
P(function(d){ return d.sonuc !== "yarali"; }, "Cemal askere gitti, döndü, evlendi. İlk çocuğu oğlan oldu. Adını sana sordu. “Selim koyma,” dedin. “Ağabeyinin adını taşıyan her çocuk, onun borcunu da taşır.” Adını Umut koydu."),
P(function(d){ return d.hatun_ziyaret || d.hatun_destek || d.hatun; }, "Hatun Hanım her bayram okula bir tabak tatlı gönderiyor. Üstünde bir not yok. Gerek yok."),
"Bir zincirin kırılması, bir zincirin olmadığı anlamına gelmiyor. Halkalar hâlâ orada, birbirinden ayrılmış ama paslanmamış. Yeni bir el onları birleştirebilir.",
"Ama bir kış, bir köyde, bir halka yerine oturmadı. Bunu sen yapmadın; Hatun Hanım'ın ağıdı, Cemal'in titreyen elleri, Rıza'nın diz çökmesi, Hacı Murat'ın yorgunluğu. Sen yalnızca oradaydın, doğru anda, doğru yerde dururken.",
"Belki ahlak bazen yalnızca budur: kaçmadan, orada durmak."
]},

son_kagit: { son: true, baslik: "Kâğıt Barış", metin: [
P(S("t5A"), "Zarfı yırtmıştın. Parçaları sobaya attın; bir kış daha."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi; biri Hatun Hanım'dı."),
"Barış tuttu. Kâğıt üstünde. Kur'an üzerinde, iki el, bir yemin.",
"Ama köyde bir şey çözülmedi, yalnızca donduruldu. Kayalarla Demirciler aynı kahvede oturmuyor. Düğünlere çağırmıyorlar. Çocuklar birbiriyle oynamıyor; büyükler söylemeden, çocuklar biliyor.",
"Hacı Murat öldü. Cenazesinde Demircilerden kimse yoktu. Osman Demirci öldü. Kayalardan kimse yoktu. Ölüm, iki aileyi, dirilikten daha çok ayırdı.",
"Kan dökülmüyor. Ama kan, damarlarda, bir sonraki kıvılcımı bekliyor. Bir tarla sınırı, bir su arkı, bir düğünde yanlış bir söz. Herkes biliyor. Herkes bekliyor.",
"Sen bu barışın tanığısın; belki ortağı. Bir şeyi önledin; bir şeyi çözemedin. Arada kalan şey, bir köyün yıllarca yaşadığı şey oldu: gergin, sessiz, kâğıttan bir barış.",
"Belki dünyadaki barışların çoğu böyledir. Savaşların bittiği değil, yalnızca ertelendiği barışlar. Ve erteleme de bir şeydir. Bir kuşak boyunca hiç kimse ölmezse, belki bir sonraki kuşak neden kavga ettiğini unutur. Unutmak da bazen bir barış biçimi."
]}

},

ayna: function(d){
  var out = [];
  var a = d.adalet, g = d.gelenek, m = d.merhamet;
  if(m >= a && m >= g) out.push("Bu kış en çok merhamete yaslandın: bir annenin ağıdına, bir çocuğun korkusuna, bir kızın sesine. Merhamet senin pusulandı; ama bir pusula yönü gösterir, yolu açmaz.");
  else if(a >= g) out.push("Bu kış en çok yasaya, devlete, mahkemeye yaslandın. Bir köyün kendi yargısının yerine bir başkasını koymak istedin. Adalet bazen bir yere ait olmanın bedeliyle gelir.");
  else out.push("Bu kış en çok köyün kendi yollarına yaslandın: meclis, sulh, yaşlıların sözü. Bir yabancı olarak, bir yere uymaya çalıştın. Uymak bazen anlamaktır; bazen de susmak.");
  if(d.sustu) out.push("Meclisin en kritik anında sustun. O sessizlik bir şeyi kabul etti; ne olduğunu yıllar sonra anlayacaksın.");
  if(d.muhbir) out.push("Devlete konuştun. Bir hayat belki kurtuldu; bir aidiyet kesin kaybedildi.");
  if(d.dondu) out.push("Dağda, son anda, arkanı döndün. Kendini bir tanık saymak istedin; ama bazı anlarda tanık olmak yoktur, yalnızca taraf olmak vardır.");
  if(d.gelin) out.push("Bir kızın bir barışa bedel olmasına izin verdin. Hesap doğruydu. Hesapta o yoktu.");
  if(d.gul_kacti || d.durdurdu) out.push("Bir kızın bedel olmasını engelledin. Bunun bir başka bedeli oldu; adalet bazen bir yükü bir omuzdan alıp öbürüne koymaktır.");
  return out;
},

dipnot: [
{ ad: "Adalet ve intikam", t: "İntikam, zarar görenin kendi eliyle, kendi ölçüsünde aldığı karşılıktır; adalet ise bu karşılığı üçüncü bir tarafa, yasaya ve mahkemeye devretme fikri. Aiskhylos'un Oresteia üçlemesi tam olarak bu geçişi anlatır: intikam tanrıçalarının yerini bir mahkeme alır. Ama mahkemenin yaraları sarabildiği, her zaman kesin değildir." },
{ ad: "Affetme", t: "Hannah Arendt affetmeyi, insanın geri alınamaz eylemlerin zincirinden kurtulmasını sağlayan tek güç olarak görür. Affetmek unutmak değil, bir borcu silmektir; ama yalnızca zarar gören affedebilir. Hatun Hanım'ın ağıdı, köyde bu hakka sahip tek sesti." },
{ ad: "Töre ve toplumsal baskı", t: "Émile Durkheim'a göre toplumsal normlar bireyin dışında ve üstünde durur, uyulmadığında yaptırım uygular. Kan davası ve berdel, kimsenin tek başına istemediği ama herkesin birlikte sürdürdüğü bu tür normların en ağır örnekleridir. Cemal de, Gül de, Hacı Murat da bu yapının hem taşıyıcısı hem kurbanıydı." },
{ ad: "Şiddetin döngüsü", t: "René Girard, şiddetin taklit yoluyla yayıldığını ve her intikamın bir sonrakini doğurduğunu söyler. Toplumlar bu döngüyü kırmak için ya bir “günah keçisi” bulur ya da bir yargı kurumu kurar. Berdelde verilen kız, bu bakımdan, bir barışın bedeli olarak seçilmiş bir kurbandır." }
]
});
})();
