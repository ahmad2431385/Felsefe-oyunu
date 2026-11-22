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
"Karaağaç'ta on beşinci kışın. Adın Kerim, kırk yaşındasın. Şehirden tayinle geldin, bir yıl dayanırım dedin, gitmedin. Köyün tek okulunun tek öğretmenisin. Yirmi yaşın altındaki herkes bir zaman senin sıralarında oturdu, çoğunun kulağını en az bir kere çektin.",
"Okul dediğin tek oda: kara tahta, kırk yıllık sıralar, ortada bir soba. Duvarda çocukların çizdiği bir Türkiye haritası; Karaağaç kırmızı kalemle işaretlenmiş, çünkü gerçek haritalarda yok. Kışları burada yatıyorsun. Lojmanın sobası çekmiyor. Bu köyde gece on birden sonra kapı çalınmaz. Çalınırsa ya doğum vardır ya ölüm.",
"Üç gün önce Kayaların büyük oğlu Selim'le Demircilerin oğlu Rıza su sırası yüzünden kavgaya tutuştu. Selim'in elinde kürek vardı. Rıza itti. Selim'in başı arkındaki taşa geldi. Yirmi altı yaşındaydı, ilkbaharda düğünü olacaktı. Rıza o gece dağa çıktı. Kimse yerini bilmiyor, herkes biliyor.",
"Bu gece okulun kapısı çalınıyor. Kayaların küçüğü Cemal. On yedi yaşında. İki yıl önce sınıfın en iyi kompozisyonlarını o yazardı. Biri hâlâ çekmecende: “Büyüyünce Ne Olacağım.” Cevabı “şoför”dü, bir de “İstanbul'a giden otobüslerin” diye eklemişti.",
"Montunun altında uzun, ağır bir şey var. Görmezden gelmeye çalışıyorsun. O da göstermemeye çalışıyor. İkiniz de beceremiyorsunuz.",
"İlk kalem tuttuğunda “b” ile “d”yi hep ters yazardı. Bir gün ayırdı, defterini havaya kaldırıp sana koştu, sıraya çarpıp burnunu kanattı, ağlamadı. Şimdi aynı eller montun altında kabzayı tutuyor.",
"Sobanın yanına oturup ellerini ısıtıyor. Ellerinin arasında bir parmağının tırnağı kırık, kenarı kanamış.",
"“Hocam,” diyor sonunda. “Dedem tüfeği bana verdi. Ağabeyinin kanı yerde kalmaz dedi. Evin büyük erkeği sensin artık dedi.” Burnunu çekiyor. “Ben bunu yapmak zorunda mıyım?”",
"Bunu dedesine sormamış, imama sormamış. Sana soruyor."
], secenekler: [
{ t: "Tüfeği ondan alırsın: “Bu gece burada kalsın.”", to: "k2", etki: { merhamet: 1, silah_sende: true } },
{ t: "“Hayır. Bunun adı cinayet. Kanun bunu senden istemiyor,” dersin.", to: "k2", etki: { adalet: 1, konustu: true } },
{ t: "“Bunun cevabını ben veremem. Sen vereceksin,” dersin.", to: "k2", etki: { ozgur: true } },
{ t: "Onu kolundan tutup dedesinin evine götürürsün. Bu konuşma orada yapılmalı.", to: "k2", etki: { gelenek: 1 } }
]},

k2: { saat: "Ekim 1994", baslik: "Hacı Murat", metin: [
P(S("k1A"), "Cemal tüfeği bıraktı. Elinden kurtulmuş gibi değil, elinden alınmış gibi. Tüfek şimdi dolabında, kışlık battaniyelerin arasında. Gece kalkıp dolabın kapağının kapalı olduğuna iki kez baktın."),
P(S("k1B"), "Cemal dinledi. “Kanun,” dedi. “Kanun ağabeyimi geri getirecek mi? Rıza'yı tutsalar on sene yatar, çıkar, köye döner. Ağabeyim dönmez.” Kalktı. Tüfek de onunla gitti. Kapıda montunun altına geri soktu, bu kez saklamaya uğraşmadan."),
P(S("k1C"), "Cemal sana uzun uzun baktı. Bir kapının açılmasını beklemiş, kapı açılmamış gibi. “Peki hocam,” dedi. Kalktı. Kapıyı arkasından yavaşça kapattı. Öğrenciyken hep çarpardı."),
P(S("k1D"), "Hacı Murat'ın kapısına vardığınızda Cemal'in kolu elinin içinde titriyordu. Seni içeri aldılar. Cemal'i dışarıda, soğukta bıraktılar."),
"Ertesi gün Hacı Murat Kaya seni çağırıyor. Yetmiş sekiz yaşında, köyün en yaşlı erkeği. Odası loş. Duvarda bir saat, bir de tüfek askısı. Askı boş.",
"Kapıda Cemal'in annesi Hatun karşılıyor seni. Gözleri kan çanağı. İçeri alırken kulağına fısıldıyor: “Hocam, sen ikna et onu. Benim sözüm bu evde geçmez.” Sonra kapıyı açıp bir adım geri çekiliyor. O odaya kadınlar girmez.",
"Hacı Murat çayını kendi eliyle koyuyor. Bu bir onur. “Öğretmen,” diyor. “Sen okumuş adamsın. Şehirde kan davası yok derler. Orada ne var? Mahkeme. Mahkeme ne yapar? Katili besler. Sabah çorbası, akşam pilav.”",
"Bir süre susup şekerini karıştırıyor. “Elli ikide babamı vurdular. On dokuz yaşındaydım. Ben de vurdum. Yemin ettim, benimle bitsin diye. Bitmedi. Torunumu toprağa verdim, üç gün oldu.”",
"“Kan yerde kalmazsa, bir sonraki kan da yerde kalmaz. Bunu bilmiyor muyum sanıyorsun? Ama kan yerde kalırsa Kayaların adı yerde kalır. Hangisi beter, sen söyle öğretmen.”"
], secenekler: [
{ t: "“Ad yerde kalsın Hacı Amca. Ad bir şey değil, insan bir şey,” dersin.", to: "k2b", etki: { merhamet: 1 } },
{ t: "“Devlet var. Rıza yargılanacak. Bu sizin işiniz değil,” dersin.", to: "k2b", etki: { adalet: 1 } },
{ t: "“Bu köyün kurallarını ben koymadım. Ama sulh da bu kuralların içinde. Neden sulh değil?” dersin.", to: "k2b", etki: { gelenek: 1, sulh_onerdi: true } },
{ t: "Bir şey söylemezsin. Çayını içip dinlersin. Bu adam cevap değil, kulak istiyor.", to: "k2b", etki: { dinledi: true } }
]},

k2b: { saat: "Ekim 1994", baslik: "Ağıt", metin: [
P(S("k2A"), "Hacı Murat sana uzun uzun baktı. “Sen şehirlisin,” dedi. “Senin adın yok. Ondan kolay konuşuyorsun.” Haksız değildi. On beş yıldır buradasın. Mezarlıkta bir tane akraban yok."),
P(S("k2B"), "“Devlet,” dedi Hacı Murat ve güldü. Öksürüğe dönen bir gülüş. “Devlet elli ikide de vardı. Babamın katili dört sene yattı, çıktı, düğününe beni de çağırdılar.” Fincanı bıraktı. Görüşme bitmişti."),
P(S("k2C"), "Hacı Murat'ın kaşları kalktı. “Sulh,” dedi. “Demirciler istesin. Ben istemem. Ben istersem zayıf görünürüm.” Ama şekeri karıştırmayı bıraktı. Kaşık bardakta kaldı."),
P(S("k2D"), "Hacı Murat bir saat konuştu: babası, elli ikinin kışı, ilk tüfek tuttuğu gün elinin nasıl yandığı. Sen bir şey demedin. Kalkarken elini omzuna koydu. “Sağ ol öğretmen. Bunları kimseye anlatmamıştım. Hanım bile bilmez.”"),
"Selim'in kırkı dolmadan köyde bir ses yükseliyor: kadınların ağıdı. Mezarlığın yanındaki dut ağacının altında Hatun, dizlerine vurarak oğlunu anlatıyor. Adını, gülüşünü, ilk dişini, çocukken kuyuya düşürdüğü ayakkabısını.",
"Ağıdın içinde bir cümle var. Herkes duyuyor, kimse duymamış gibi yapıyor: “Kan istemem, oğlumu isterim. Kan oğlumu getirmez.”",
"Erkekler mezarlığın öbür ucunda. Hacı Murat kıpırdamıyor. Cemal'in yüzü bembeyaz. Elleri cebinde, cebinde bir şeyi sıkıyor."
], secenekler: [
{ t: "Kadınların yanına gidip Hatun'un elini tutarsın. Bu köyde bir erkeğin yapmayacağı şey.", to: "k3", etki: { merhamet: 1, hatun: true } },
{ t: "Cemal'in yanına gidersin. Annesinin sözlerini duyduğundan emin olmak istiyorsun.", to: "k3", etki: { cemal_annesi: true } },
{ t: "Hacı Murat'a bakarsın. Onun da duyduğunu görmek için.", to: "k3", etki: { gelenek: 1 } },
{ t: "Uzaktan izlersin. Bu acı senin değil.", to: "k3" }
]},

k3: { saat: "Kasım 1994", baslik: "Ali", metin: [
P(S("k2bA"), "Hatun'un elini tuttun. Kadınlar sustu. Sonra ağıt kaldığı yerden devam etti. Erkeklerin tarafından bir mırıltı geldi. Yarın köy bunu konuşacak."),
P(S("k2bB"), "Cemal'in yanında durdun. Annesinin sesi her yükseldiğinde omuzları biraz daha düştü. Bir ara sana döndü. Sınıfta bir şiiri anlamadığında bakardı ya, öyle baktı."),
P(S("k2bC"), "Hacı Murat'ın yüzünde bir şey kıpırdamadı. Ama ağıt bitmeden dönüp eve yürüdü. Bastonuna yaslanarak, her adımda biraz durarak."),
P(S("k2bD"), "Uzaktan izledin. Ağıt bitince kadınlardan biri sana baktı ve başını çevirdi. Ne demek istediğini anlamadın."),
"Sabah derste Demircilerin küçüğü Ali sırasında. On iki yaşında. Kitabını açmamış. Defterine bir şey çiziyor: bir dağ, dağda bir kulübe, kulübede bir adam. Adamın elleri çok büyük çizilmiş.",
"Ders Türkçe, okuduğunu anlama. Sınıfın yarısı Kayalara, yarısı Demircilere akraba. Sıralar kendiliğinden ikiye ayrılmış, ortada bir koridor açılmış. Geçen hafta o koridor yoktu.",
"Teneffüste Ali yanına geliyor. “Hocam, ağabeyimi vuracaklar mı?” Sonra daha alçak sesle: “Bulamazlarsa beni mi vururlar? Babam öyle dedi. Erkek olan herkes, dedi. Ben daha on ikiyim ama.”",
"Öğleden sonra okulun kapısında Zehra Demirci; Ali'nin annesi. Başörtüsünün ucunu ağzına bastırmış.",
"“Hocam,” diyor. “Ali'yi bir süre yanınızda tutsanız. Gece de. Ya da şehre götürseniz. Kimseye söylemeyiz. Sizin yanınızda kimse dokunmaz ona.” Elinde bir bohça var. İçinde Ali'nin pijaması, bir de ekmek."
], secenekler: [
{ t: "Ali'yi kendi evine alırsın. Kimse sormadıkça kimseye söylemezsin.", to: "kb_ali", etki: { merhamet: 1, ali_sende: true } },
{ t: "Zehra Hanım'a jandarmaya gitmesini söylersin. Koruma onların işi.", to: "k4", etki: { adalet: 1 } },
{ t: "Rıza'nın teslim olması gerektiğini söylersin. Ali'yi kurtaracak tek şey bu.", to: "k4", etki: { adalet: 1, teslim_dedi: true } },
{ t: "“Ben öğretmenim Zehra Hanım. Bu kavgada taraf olamam,” dersin.", to: "kb_kahve", etki: { gelenek: 1, taraf_olmadi: true } }
]},

k4: { saat: "Kasım 1994", baslik: "Kulübe", metin: [
P(S("kb_aliA"), "Ali bir süre düşündü. “O zaman ben affederim,” dedi. “Ben yaşıyorum.” Sonra uyudu. Sen sabaha kadar uyuyamadın."),
P(S("kb_aliB"), "Ali gözlerini kapattı. Bir yalanla uyudu. Sabah kahvaltıda “Selim ağabey rüyama girdi,” dedi. Ne gördüğünü sormadın."),
P(S("kb_aliC"), "“Söz mü?” dedi Ali. “Söz,” dedin. Ali serçe parmağını uzattı. Parmaklarınızı kenetlediniz. Bu dağlarda bir sözün ne kadar ettiğini bilen sendin, o değil."),
P(S("kb_aliD"), "Yanına oturdun. Ali elini tuttu. Bir saat sonra uyudu. Elini bırakmadı, sen de çekmedin. Sabah kolun uyuşmuştu."),
P(S("kb_kahveA"), "Osman Demirci'nin masasına geçtin. Kahve sustu. Osman başını kaldırmadı ama çayını sana doğru itti. Ertesi gün köyde iki şey konuşuldu: Rıza'nın nerede olduğu, bir de öğretmenin kimin masasına oturduğu."),
P(S("kb_kahveB"), "Sözlerin kahvede çınladı. Kimse cevap vermedi. Biri taşları topladı, biri sobaya odun attı. Konuşma sen hiç konuşmamışsın gibi devam etti."),
P(S("kb_kahveC"), "Cuma, namazdan sonra. Bu bilgi şimdi cebinde. Kahveden çıkarken ayağın bir taşa takıldı. Kimse gülmedi."),
P(S("kb_kahveD"), "Hacı Murat seni kapıda dinledi. “Cuma,” dedi. “Evet. Ben söyledim.” Utanmadı. Ama ertesi gün Cemal'i şehre, bir akrabaya gönderdi. Bir haftalığına. Neden, kimse bilmiyor."),
P(S("k3A"), "Ali'yi evine aldın. İlk gece uyumadı. Sobanın her çıtırtısı bir ayak sesi oldu. Sabaha karşı başını dizine koyup uyudu. Ağzının kenarından salyası aktı, pantolonun ıslandı."),
P(S("k3B"), "Zehra Hanım jandarmaya gitti. Bir onbaşı tutanak tuttu, “Gerekeni yaparız abla,” dedi. Kimse bir şey yapmadı. Karakol köye kırk kilometre, kışın daha uzak."),
P(S("k3C"), "Zehra Hanım ağladı. “Teslim olursa öldürürler,” dedi. “Hapiste de bulurlar, dışarıda da.” Sonra sustu. “Ama siz söylerseniz dinler. Sizi severdi. Karnesine ‘yaramaz ama zeki’ yazmıştınız, hâlâ gösterir.”"),
P(S("k3D"), "Zehra Hanım sana baktı ve bir şey söylemeden gitti. Bohçayı da götürdü. Ali ertesi gün derse gelmedi."),
"Pazar günü Rıza seni çağırtıyor. Bir çoban çocuğu kulağına fısıldıyor: “Yukarı yaylada, eski kulübe. Yalnız gel. Ekmek de getir dedi.”",
"Kulübe buz gibi. Rıza yirmi iki yaşında. Sakalı uzamış, gözleri çökmüş. Seni görünce ayağa kalkıyor, sınıfa müdür girmiş gibi.",
"Köşede iki battaniye, bir koyun postu. Bir çivide annesinin ördüğü yün çoraplar. Ocakta küllenmiş bir ateş. Gece yakmaya korkuyor, duman görünür diye. Üç haftadır burada. Getirdiğin ekmeği daha sen oturmadan yarıya indiriyor.",
"“Ben öldürmedim hocam,” diyor ağzı dolu. “Yani öldürdüm, ama istemedim. Kürekle üstüme geldi. İttim. Taşa düştü. Kafası.” Ellerine bakıyor, ekmeği bırakıyor.",
"“Herkes katil diyor. Ben katil miyim?”"
], secenekler: [
{ t: "Teslim olmasını söylersin: “Mahkeme bunu ayırır. Köy ayıramaz.”", to: "k5", etki: { adalet: 1, riza_teslim: true } },
{ t: "Ona para verip İstanbul'a kaçmasını söylersin.", to: "k5", etki: { merhamet: 1, kacirdi: true } },
{ t: "Sulh meclisine gelip herkesin önünde kendi ağzıyla anlatmasını istersin.", to: "k5", etki: { gelenek: 1, meclise: true } },
{ t: "“Bilmiyorum Rıza,” dersin. Bu soruyu cevaplayabilecek tek kişi toprağın altında.", to: "k5", etki: { bilmiyorum: true } }
]},

k5: { saat: "Aralık 1994", baslik: "Sulh Meclisi", metin: [
P(S("k4A"), "Rıza “Düşüneceğim,” dedi. Ekmeğin kalanını bir beze sarıp yatağın altına koydu."),
P(S("k4B"), "Parayı aldı. Saydı, sonra utanıp saymayı bıraktı. Ertesi sabah kulübe boştu. Yün çoraplar çivide kalmıştı."),
P(S("k4C"), "Rıza bir süre sustu. “Gelirim,” dedi. “Sen yanımda olursan.” Sonra “Ama önce bir tıraş olayım,” diye ekledi, sakalını kaşıyarak."),
P(S("k4D"), "“Bilmiyorum,” dedin. “Ben de,” dedi Rıza. Bir süre ikiniz kulübenin soğuğunda oturdunuz; Rıza kalan ekmeği ikiye bölüp yarısını sana verdi."),
"Aralık başında cami avlusunda sulh meclisi kuruluyor: komşu köyün ağası, imam, iki ailenin büyükleri. Jandarma teğmeni uzakta, cipinin yanında sigara içiyor. Görünmek ama karışmamak için.",
"Erkekler avlunun ortasında, minderlerde. Yaşlılar önde, gençler arkada. Ortada bir sini, sinide çay. Şeyh Ömer yetmişlerinde, sakalı bembeyaz. Bu dağlarda yirmiden fazla kan davasını o bağlamış. Tespih çekiyor, kimseye bakmıyor.",
"Teklif okunuyor: Demircilerden kan bedeli olarak para, iki tarla ve bir kız. Gül; Demircilerin on altı yaşındaki kızı, Kayaların küçüğü Cemal'le evlendirilecek. Kan, akrabalıkla kapanacak.",
"Gül iki yıl öncesine kadar sınıfının birincisiydi. Öğretmen olmak istiyordu. Bir kompozisyonunda yazmıştı, “Kerim Öğretmen gibi ama daha az kızan,” diye.",
"Ağa sana dönüyor. “Öğretmen. Bu köyün çocuklarını sen yetiştirdin. Sen de söyle.”",
"Bütün gözler üzerinde: Hacı Murat'ın, Osman Demirci'nin, imamın. Avlunun kenarında, duvarın dibinde, kadınlar. En arkada, kollarını kavuşturmuş, Cemal."
], secenekler: [
{ t: "“Sulh olsun, para olsun, tarla olsun. Ama kız verilmez.”", to: "s1", etki: { merhamet: 1, kiz_hayir: true } },
{ t: "“Bu meclisin kanun önünde hiçbir değeri yok. Rıza'nın yeri mahkemedir.”", to: "d1", etki: { adalet: 2, devlet: true } },
{ t: "Susarsın. Bu meclis bu köyün meclisi. Senin değil.", to: "g1", etki: { gelenek: 1, sustu: true } },
{ t: "Kalkarsın. Cemal avludan çıkıyor, sen de peşinden gidiyorsun.", to: "c1", etki: { cemal_pesinde: true } }
]},


kb_ali: { saat: "Kasım 1994", baslik: "Ali'nin Soruları", metin: [
"Ali'yi lojmana getirdin. İki oda: birinde kitaplar ve bir yatak, ötekinde soba ve masa. Yatağı Ali'ye veriyorsun. Sen sobanın yanında, minderde yatacaksın.",
"Ali uyumuyor, tavana bakıyor. Bir süre sonra soruyor: “Hocam, siz niye evlenmediniz?”",
"Köyde herkes merak eder, kimse sormaz. “Bilmiyorum,” diyorsun. “Geç kaldım herhalde.” Ali düşünüyor. “Çocuğunuz olsaydı,” diyor, “onu da vurabilirlerdi. İyi ki yok.”",
"Sonra başka bir şey soruyor: “Selim ağabey öldü ya. Şimdi cennette mi? Orada Rıza ağabeyimi affeder mi? Ölüler affedebilir mi?”",
"Ali başını yastığa gömüyor. Sesi boğuk: “Ben kimseyi öldürmedim ki hocam. Niye beni öldürsünler?”",
"Soba çıtırdıyor. Dışarıda bir köpek havlıyor, susuyor. Ali'nin ayağı yorganın altından çıkmış. Çorabının teki delik."
], secenekler: [
{ t: "“Ölüler affedemez Ali. Affetmek yaşayanların işi. O yüzden zor,” dersin.", to: "k4", etki: { merhamet: 1, ali_ders: true } },
{ t: "“Selim ağabey çoktan affetti,” dersin. Bir çocuk uyuyabilsin diye.", to: "k4", etki: { merhamet: 1, ali_teselli: true } },
{ t: "“Seni kimse öldürmeyecek. Ben buradayım,” dersin. Tutamayacağın bir söz.", to: "k4", etki: { merhamet: 1, ali_soz: true } },
{ t: "“Bilmiyorum,” dersin ve uyuyana kadar yanında oturursun.", to: "k4", etki: { adalet: 1 } }
]},

kb_kahve: { saat: "Kasım 1994", baslik: "Kahvehane", metin: [
"Akşam kahvedesin. Köyün tek kahvesi: bir oda, altı masa, bir soba, duvarda tek kanal çeken bir televizyon. Erkekler okey oynuyor ya da oynuyormuş gibi yapıyor. Taşlar uzun süre masada bekliyor.",
"Seni görünce bir masa yer açıyor; Kayaların akrabaları. Çay geliyor. Konuşma sen yokmuşsun gibi devam ediyor, ya da tam da sen duyasın diye.",
"“Cemal cuma günü yapacak,” diyor biri. “Namazdan sonra. Hacı Murat öyle istemiş. Kan cuma günü alınırsa sevabı olurmuş.” Bir başkası gülüyor. “Sevap mı? Hacı Murat elli ikide de cuma günü almıştı. Sevabı bize mi kaldı?”",
"Köşede, tek başına, Osman Demirci oturuyor; Rıza'nın babası. Önünde soğumuş bir çay. Kimse ona bakmıyor, kimse onunla konuşmuyor, kimse de onu kapıya koymuyor. Kahvede herkesin hakkı vardır.",
"Osman Demirci seni görüyor. Göz göze geliyorsunuz. Sonra o bakışını çeviriyor. Senden bir şey beklemekten utanır gibi.",
"Televizyonda haberler. Başka bir yerde başka bir savaş. Kahveci sesini kısıyor."
], secenekler: [
{ t: "Kalkıp Osman Demirci'nin masasına geçersin.", to: "k4", etki: { merhamet: 1, osman_masa: true } },
{ t: "Yüksek sesle söylersin: “Bunu bilip susan herkes ortaktır.”", to: "k4", etki: { adalet: 1, kahve_cikis: true } },
{ t: "Susup dinlersin. Cuma, namazdan sonra. Bunu bilmek de bir şey.", to: "k4", etki: { cuma: true } },
{ t: "Kalkıp doğruca Hacı Murat'ın kapısına gidersin.", to: "k4", etki: { gelenek: 1, murata_gitti_erken: true } }
]},

kb_murat: { saat: "Şubat 1995", baslik: "Son Çay", metin: [
"Savcı gelmeden bir gün önce Hacı Murat seni çağırtıyor. Bir çocuk kapına geliyor: “Hacı dede seni bekliyor. Çabuk gelsin dedi.”",
"Oda aynı: saat, boş askı, loş ışık. Ama Hacı Murat değişmiş. Bir kış ona on yıl eklemiş. Çayı bu kez kendisi koyamıyor. Elleri titriyor, gelini koyuyor ve odadan çıkmıyor, kapının yanında duruyor. Hacı Murat ona eliyle “Git” işareti yapıyor.",
"“Yarın savcıya her şeyi anlatacakmışsın,” diyor. Soru değil. Köyde hiçbir şey sır kalmaz.",
"“Evet.”",
"Uzun süre susuyor. “O zaman bir şey daha anlat. Elli ikide vurduğum adam. Babamın katili diye vurduğum.” Sesi kırılıyor. “O değildi. Kardeşiydi babamı vuran. Ben yanlış kardeşi vurdum. Karanlıktı, ikisi birbirine benzerdi, on dokuz yaşındaydım. Kırk iki yıl kimseye söylemedim. Hanım öldü, ona da söylemedim.”",
"Pencereden dışarı bakıyor. “Kan yerde kalmaz dedim. Benim döktüğüm kan kırk iki yıldır yerde. Kimse almadı, çünkü kimse bilmiyordu. Şimdi sen biliyorsun.”"
], secenekler: [
{ t: "“Bunu da söyleyeceğim,” dersin. Kırk iki yıllık bir gerçek de dosyaya girer.", to: "t3", etki: { adalet: 1, murat_itiraf: "yazdi" } },
{ t: "“Bu sizin günahınız, benim değil. Allah'a anlatın,” dersin.", to: "t3", etki: { gelenek: 1, murat_itiraf: "sakla" } },
{ t: "“Vurduğunuz adamın ailesi yaşıyor mu?” diye sorarsın.", to: "t3", etki: { merhamet: 1, murat_itiraf: "aile" } },
{ t: "Hacı Murat'ın elini tutarsın.", to: "t3", etki: { merhamet: 1, murat_itiraf: "el" } }
]},

kb_imam: { saat: "Şubat 1995", baslik: "İmam", metin: [
"Hiçbir şey anlatmamaya karar verdin. Ama kararın ağırlığını tek başına taşıyamıyorsun. Akşam namazından sonra camiye gidiyorsun.",
"İmam Halil Efendi altmış yaşında, köye senden beş yıl önce gelmiş. İkiniz bu köyün iki yabancısısınız. Biri çocuklarla, biri ölülerle uğraşır. Yıllardır birbirinize saygılısınız ama bir kez olsun aynı sofraya oturmadınız.",
"Caminin avlusunda, şadırvanın başında oturuyorsunuz. Anlatıyorsun: savcıyı, susmayı, nedenini.",
"İmam dinliyor. Sonra musluğu açıp avucuna su alıyor, yere döküyor. “Ben de susuyorum, biliyor musun?” diyor. “Yirmi yıldır. Kimin kimi vurduğunu, kimin kızını kime verdiğini biliyorum. Cenazelerini kıldırıyorum. Hiçbirini savcıya söylemedim.”",
"Başını sana çeviriyor. “Ben kendime ‘Ben imamım, tanık değilim’ diyorum. Sen kendine ne diyorsun hocam?”",
"Avlu karanlık. Minarenin hoparlöründen bir cızırtı geliyor. Biri kapatmayı unutmuş."
], secenekler: [
{ t: "“Ben öğretmenim. Öğretmen susmaz,” dersin ve fikrini değiştirirsin.", to: "t3", etki: { adalet: 1, ifade: "kismi", imam_dondu: true } },
{ t: "“Ben bir yabancıyım. Bu köyün kararını ben veremem,” dersin.", to: "t3", etki: { gelenek: 1 } },
{ t: "“Siz de konuşun Halil Efendi. Birlikte,” dersin.", to: "t3", etki: { adalet: 1, imama_teklif: true } },
{ t: "Cevap vermezsin. Abdest alıp namaza durursun. Yıllardır yapmadığın bir şey.", to: "t3", etki: { merhamet: 1, namaz: true } }
]},

/* ---------- SULH KOLU ---------- */
s1: { saat: "Aralık 1994", baslik: "Kızın Yerine", metin: [
"“Kız verilmez,” dedin. Avlu sustu. Ağa kaşlarını kaldırdı. Osman Demirci yere baktı. Kızını kurtardığın için minnet mi, onu herkesin önünde konuşulur ettiğin için öfke mi, yüzünden okuyamadın.",
"Hacı Murat ayağa kalkıyor. “Kız yoksa sulh yok,” diyor. “Para bir ölünün bedeli değil. Kız gelirse kan karışır, kan karışınca kan dökülmez. Bu eskiden beri böyle. Kimse kendi torununun dayısını vurmaz.”",
"Şeyh Ömer tespihini durduruyor.",
"Tam o sırada avlunun kenarından, kadınların arasından bir ses. Hatun.",
"“Kız istemem.”",
"Meclislerde kadın konuşmaz. Herkes donup kalıyor. Hatun bir adım öne çıkıyor. Başörtüsü kaymış, düzeltmiyor.",
"“Oğlum öldü diye bir başka ananın kızını mı alacağım? Selim istemezdi. Ben istemem. Kimse benim adıma kız istemesin. Benim adımı ağzınıza almayın.”",
"Hacı Murat'ın yüzü kıpkırmızı. Ağa sana bakıyor. Bu kadını sen konuşturmuşsun gibi."
], secenekler: [
{ t: "Hatun'un yanına gidip yüksek sesle onu desteklersin.", to: "s2", etki: { merhamet: 1, hatun_destek: true } },
{ t: "Orta yol önerirsin: daha büyük bir bedel ve Rıza'nın köyden sürgünü. Kız yok.", to: "s2", etki: { gelenek: 1, surgun: true } },
{ t: "“Bedel ödensin, Rıza da teslim olsun. İkisi birden,” dersin.", to: "s2", etki: { adalet: 1, ikili: true } },
{ t: "Susarsın. Söz artık Hatun'un.", to: "s2", etki: { hatuna_birakti: true } }
]},

s2: { saat: "Aralık 1994", baslik: "Yemin", metin: [
P(S("s1A"), "Hatun'un yanına geçtin. Erkekler sana öyle bir baktı ki on beş yıl bir anda silindi. Hatun'un eli bir an koluna dokundu, hemen çekildi."),
P(S("s1B"), "Sürgün teklifini ağa beğendi. Hacı Murat itiraz etmedi. Rıza yaşayacak ama Karaağaç'a bir daha ayak basmayacak. Zehra Hanım duvarın dibinde bunu duyunca hem güldü hem ağladı. Kadınlar onu tutup oturttu."),
P(S("s1C"), "Ağa güldü. “Devlet de töre de,” dedi. “Hem yatsın hem ödesin.” Hacı Murat düşündü, düşündü, sonra başını aşağı yukarı bir kez oynattı."),
P(S("s1D"), "Sustun. Hatun bekledi. Seni, birilerini. Kimse konuşmayınca devam etti: “Bedel ödensin. Kız yok. Kan da yok.” Ve ağa, herkesi şaşırtarak, kabul etti."),
"Bir hafta sonra cami avlusunda yemin. Kur'an'ın üstüne iki el: Hacı Murat'ın ve Osman Demirci'nin. Sonra gençlerin el sıkışması gerekiyor: Cemal ve Demircilerden biri.",
"Köyün bütün erkekleri avluda. Kadınlar duvar dibinde, çocuklar damlarda. Şeyh Ömer Kur'an'ı yeşil bir örtünün içinden çıkarıyor. Herkes bu töreni daha önce görmüş. Herkes yine de ilk kez görüyormuş gibi susuyor.",
"Osman Demirci elini uzatıyor. Cemal bakıyor. Bir saniye. İki. Bir çocuk damdan aşağı bir taş düşürüyor. Ses avluda çok büyük çıkıyor.",
"Cemal elini sıkmıyor. Dönüp avludan çıkıyor. Kapıda sana bakıyor. Bir şey söyleyecek gibi.",
"Hacı Murat'ın sesi arkadan: “Gençtir. Geçer.”"
], secenekler: [
{ t: "Cemal'in peşinden gidersin.", to: "c2", etki: { cemal_pesinde: true } },
{ t: "Bırakırsın. Sulh imzalandı, gerisini büyükler halleder.", to: "s3", etki: { gelenek: 1 } },
{ t: "Hacı Murat'a gidip torununu dizginlemesini istersin.", to: "s3", etki: { gelenek: 1, murata_dedi: true } },
{ t: "Kulübeye, Rıza'ya koşarsın. Uyarmak için.", to: "c2", etki: { uyardi: true } }
]},

s3: { saat: "Ocak – Mart 1995", baslik: "Ilık Barış", metin: [
P(S("s2B"), "Cemal o gece eve dönmedi. Ertesi gün döndü, kimseyle konuşmadı. Köy rahatladı, ya da rahatlamış gibi yaptı."),
P(S("s2C"), "Hacı Murat dinledi. “Ben verdim ona o tüfeği,” dedi. “Şimdi nasıl geri alacağımı bilmiyorum. Benden de kimse geri alamadı.” Yine de o akşam Cemal'i odasına çağırdı. Ne konuştuklarını kimse bilmiyor; Cemal çıktığında gözleri kızarıktı."),
"Kış geçiyor. Sulh tutuyor. Rıza'nın adı anılmıyor. Ali derse dönüyor. İlk hafta kimseyle konuşmuyor, ikinci hafta teneffüste top oynuyor, Kayaların bir çocuğuyla kavga ediyor, ertesi gün barışıyorlar.",
"Kahvede iki ailenin erkekleri aynı masaya oturmuyor ama aynı odada oturuyor. Düğünlerde birbirlerine davetiye gönderiyorlar ve gitmiyorlar.",
"Cemal okulu bırakıp şehre gidiyor. Bir inşaatta işçi. Gitmeden önce okulun önünden geçiyor, durmuyor. Bir ara pencereden el salladığını görüyorsun. Belki sana değil.",
"Bir mart sabahı postacı bir zarf getiriyor. İçinde bir kâğıt. El yazısı tanıdık: “Büyüyünce Ne Olacağım.” İki yıl önceki kompozisyon. Senin çekmecendeydi. Nasıl onda? Sonra hatırlıyorsun: o gece, sobanın yanında, çekmeceyi açmıştın.",
"Kâğıdın arkasına yeni bir cümle eklenmiş, kurşun kalemle: “Şoför olamadım hocam. İnşaatta çalışıyorum. Ama katil de olmadım. Bu yeter mi?” Altında bir adres yok."
], secenekler: [
{ t: "Ona uzun bir mektup yazarsın. Köyün muhtarından adresini bulup.", to: "t1", etki: { merhamet: 1, sonuc: "baris", mektup: true } },
{ t: "Şehre gidip onu bulursun.", to: "t1", etki: { merhamet: 1, sonuc: "baris", buldu: true } },
{ t: "Kâğıdı çekmeceye geri koyarsın. Cevap vermezsin.", to: "t1", etki: { sonuc: "baris" } },
{ t: "Kâğıdı Hacı Murat'a götürürsün.", to: "t1", etki: { gelenek: 1, sonuc: "baris", murata_kagit: true } }
]},

/* ---------- DEVLET KOLU ---------- */
d1: { saat: "Aralık 1994", baslik: "Karakol", metin: [
"“Bu meclisin kanun önünde değeri yok,” dedin. Ağa yüzünü buruşturdu. Hacı Murat hiçbir şey söylemeden kalkıp avludan çıktı. Meclis dağıldı. Minderler toplanmadan kaldı.",
"Akşam karakoldasın. Karakol köyden on iki kilometre, bir tepenin üstünde, tel örgülerle çevrili. Kapıdaki nöbetçi er seni tanıyor. Geçen yıl kardeşinin okul kaydı için gelmişti. “Hocam, hayırdır?”",
"Teğmen Ercan yirmi altı yaşında, üç ay önce gelmiş. Masasında bir harita, soğumuş bir çay, annesinden gelmiş bir koli. İçinden bir kavanoz reçel çıkmış, kapağı açık.",
"“Hocam,” diyor, “bu köylerde biz cesetleri sayarız. Kimse konuşmaz. Siz konuşmaya geldiyseniz ilk sizsiniz.” Reçel kavanozunun kapağını kapatıyor.",
P(function(d){ return d.kacirdi; }, "Rıza'nın kaçtığını biliyorsun. Parayı sen verdin. Teğmene söylersen kendini de suçlarsın. Söylemezsen borç Ali'nin üstünde kalır."),
P(function(d){ return !d.kacirdi; }, "Rıza'nın kulübesini biliyorsun. Teğmen haritayı sana doğru çeviriyor. Yayla bir parmak uzunluğunda."),
"“Söylediğiniz her şey tutanağa geçer,” diyor teğmen. “Adınız da. Köyde bunun ne demek olduğunu siz benden iyi bilirsiniz.”",
"Biliyorsun. Karaağaç'ta jandarmaya konuşan adamın adının yerine bir başka kelime geçer."
], secenekler: [
{ t: function(d){ return d.kacirdi ? "Her şeyi anlatırsın: Rıza'nın kaçtığını, parayı senin verdiğini." : "Kulübenin yerini haritada gösterirsin."; }, to: "d2", etki: { adalet: 1, muhbir: true, gozalti: true } },
{ t: "Rıza'nın canı güvenceye alınırsa teslim olacağını söyleyip aracı olmayı teklif edersin.", to: "d2", etki: { adalet: 1, merhamet: 1, araci: true, gozalti: true } },
{ t: "Bilmediğini söylersin, ama Ali için koruma istersin.", to: "d2", etki: { merhamet: 1, ali_koruma: true } },
{ t: "Rıza'yı yarın sabah kendin getireceğini söylersin. Adın tutanağa geçmeden.", to: "d2", etki: { gelenek: 1, kendin_getir: true, gozalti: true } }
]},

d2: { saat: "Aralık 1994", baslik: "Muhbir", metin: [
P(S("d1A"), "Şafakta iki cip yaylaya çıktı. Rıza'yı kelepçeli indirdiler, köyün ortasından geçirdiler. Kapı aralıklarından bakan gözler sana döndü. Akşam okulun iki camı kırıktı. Taşlardan biri sobanın borusunu yamultmuştu."),
P(S("d1B"), "Teğmen kabul etti. Yaylaya birlikte çıktınız. Rıza seni görünce ellerini kendiliğinden uzattı. Kelepçe takılırken “Hocam, sözün söz, değil mi?” dedi. “Söz,” dedin. Neyin sözünü verdiğini tam bilmeden."),
P(S("d1C"), "Teğmen not aldı. “Bir er, bir cip,” dedi. “Bir hafta.” Kalemin kapağını dişledi. “Daha fazlasına adam yok hocam, kusura bakmayın.”"),
P(S("d1D"), "Sabah yaylaya çıktın. Rıza'yı ikna etmen iki saat sürdü. Bir ara kulübeden kaçmaya kalktı, karda düştü, kalktı, geri döndü. Karakola birlikte yürüdünüz. Kimse görmedi, herkes duydu."),
"Köyde rüzgâr döndü. Hacı Murat'ın kapısı sana kapalı. Kahvede selamını alan yok. Zehra Demirci bile, oğlunu sen teslim ettin diye mi kurtardın diye mi, yüzüne bakamıyor.",
"Bir sabah okulun kapısına bir kâğıt iliştirilmiş. İmzasız, tek kelime: Muhbir. Kâğıdı indirip cebine koyuyorsun, çocuklar gelmeden. Çocuklar zaten biliyor. O gün sınıfın yarısı gelmiyor. Gelenlerden biri, Kayaların küçük bir kızı, sana bir elma getirmiş. Masana bırakıp yerine kaçıyor.",
"Akşam Cemal okulun önünde bekliyor. Gözleri kızarık.",
"“Devlet aldı onu,” diyor. “Benim kanımı devlet aldı. On sene, belki sekiz. Çıkacak. Ben ağabeyimin mezarının yanında bekleyeceğim. Her gün.” Susuyor. “Ya da beklemem. Demircilerin bir erkeği daha var.”",
"Ali. On iki yaşında. Yarın sabah dokuzda üçüncü sırada oturacak."
], secenekler: [
{ t: "Ali'yi bu gece şehre, kız kardeşinin yanına götürürsün.", to: "d3", etki: { merhamet: 1, ali_gitti: true } },
{ t: "Teğmene gidip Ali için sürekli koruma istersin.", to: "d3", etki: { adalet: 1 } },
{ t: "Cemal'i içeri alıp sabaha kadar konuşursun.", to: "d3", etki: { merhamet: 1, konustu: true } },
{ t: "Hacı Murat'ın kapısını çalarsın. Kapalı da olsa.", to: "d3", etki: { gelenek: 1, murata_gitti: true } }
]},

d3: { saat: "Ocak 1995", baslik: "Okul Bahçesi", metin: [
P(S("d2A"), "Ali'yi gece yarısı otobüse bindirdin. Pencereden el salladı. Zehra Hanım durakta seninle bekledi. Otobüs gidince elini tutup öptü, sonra hızla bıraktı. Kimse görmedi."),
P(S("d2B"), "Teğmen yorgundu. “Bir çocuğu ne kadar koruyabilirim hocam?” dedi. “Bir ay? Bir yıl?” Yine de bir er gönderdi. Er okulun kapısında üşüyerek bekledi. Teneffüste çocuklar ona sigara mı, top mu diye sordu."),
P(S("d2C"), "Sabaha kadar konuştunuz. Cemal ağladı, sonra öfkelendi, sobaya tekme attı, sonra yine ağladı. Şafakta “Bilmiyorum,” dedi. “Ne yapacağımı bilmiyorum hocam.” Çayını bitirdi, bardağı yıkayıp ters çevirdi."),
P(S("d2D"), "Kapı açılmadı. Arkasından Hacı Murat'ın sesi geldi: “Git öğretmen. Sen yapacağını yaptın. Biz de yapacağımızı yapacağız.”"),
"Bir ocak sabahı, ikinci dersin ortasında, sınıfın kapısı açılıyor. Cemal. Montunun altında o uzun, ağır şey.",
"Pencereden karlı dağ görünüyor. Çocukların nefesi camlara buğu olup yapışıyor. Sobanın üstünde çaydanlık, yanında kurumaya bırakılmış eldivenler. Birinin parmağı delik.",
P(function(d){ return !d.ali_gitti; }, "Ali üçüncü sırada. Kalemini bırakmış, kımıldamıyor. Öbür çocuklar donmuş. Biri ağlamaya başlıyor, yanındaki elini onun ağzına kapatıyor."),
P(function(d){ return d.ali_gitti; }, "Ali'nin sırası boş. Cemal sıraya bakıyor, sonra sana. “Nerede?” diyor. Sesi sakin."),
"Cemal tüfeği çıkarıyor. Elleri titriyor.",
"“Çekil hocam.”"
], secenekler: [
{ t: "Çekilmezsin. Cemal ile çocukların arasında durursun.", to: "t1", etki: { merhamet: 1, sonuc: "yarali" } },
{ t: "Ona “Büyüyünce Ne Olacağım”ı hatırlatırsın, kelimesi kelimesine.", to: "t1", etki: { merhamet: 1, sonuc: "baris", cemal_birakti: true } },
{ t: "Pencereden kapıdaki ere bağırırsın.", to: "t1", etki: { adalet: 1, sonuc: "cemal" } },
{ t: "Cemal'i konuşturup oyalarsın. Bu arada çocuklara arka kapıyı işaret edersin.", to: "t1", etki: { sonuc: "kan", oyaladi: true } }
]},

/* ---------- GELENEK (BERDEL) KOLU ---------- */
g1: { saat: "Aralık 1994", baslik: "Gül", metin: [
"Sustun. Ağa bekledi, sonra susmanı onay sayıp başını salladı. Sulh kabul edildi: para, iki tarla, bir kız.",
"O gece okulun kapısı yine çalınıyor. Bu kez Gül. On altı yaşında, şalını yüzüne sarmış. Babasının evinden gizlice çıkmış.",
"Gül'ü en son iki yıl önce, ilkokulu bitirdiği gün gördün. Ortaokul için şehre gitmesine babası izin vermemişti. O gün kompozisyon defterini sana vermişti: “Hocam siz saklayın, evde yakarlar.” Defter hâlâ çekmecende, Cemal'in kompozisyonunun yanında.",
"Sobanın yanına oturmuyor, ayakta duruyor. “Hocam, siz oradaydınız. Bir şey demediniz.”",
"Sesinde suçlama yok. Bir bilgi söyler gibi söylüyor.",
"“Öğretmen olmak istiyordum. Size yazmıştım. Siz altına ‘Olacaksın’ yazmıştınız, kırmızı kalemle.” Şalını biraz açıyor. Yanağı soğuktan çatlamış. “Şimdi bir ölünün kardeşiyle evleneceğim. Kanı temizlesin diye. Ben sabun muyum hocam?”",
"Cemal'i tanıyor. Bir zaman aynı sınıftaydılar. “Hiç bakmazdı bana. Ben de ona. Şimdi bir ömür birbirimize bakacağız. Her baktığında ağabeyini görecek.”",
"Kapının önünde bir köpek havlıyor. Gül irkilip pencereye bakıyor."
], secenekler: [
{ t: "Gül'ü bu gece şehre, kız kardeşinin yanına kaçırırsın.", to: "c1", etki: { merhamet: 2, gul_kacti: true } },
{ t: "Osman Demirci'ye gidip kızını vermemesi için yalvarırsın.", to: "g2", etki: { merhamet: 1, osmana: true } },
{ t: "Gül'e bu evliliğin kaç canı kurtaracağını anlatırsın. Kendine anlatır gibi.", to: "g2", etki: { gelenek: 1, ikna: true } },
{ t: "Cemal'e gidip bu evliliği isteyip istemediğini sorarsın.", to: "g2", etki: { cemale_sordu: true } }
]},

g2: { saat: "Ocak 1995", baslik: "Kına Gecesi", metin: [
P(S("g1B"), "Osman Demirci seni dinledi, başını önüne eğdi. “Hocam,” dedi, “kızımı vermezsem oğlumu verirler. Ya Rıza'yı ya Ali'yi. Sen söyle, hangisini vereyim?” Elinde tespih vardı. Bir boncuk koptu, yere düştü, ikiniz de eğilip almadınız."),
P(S("g1C"), "Anlattın: sulh olmazsa ne olacağını, kaç kişinin öleceğini, Ali'yi, Rıza'yı. Gül dinledi. “Hesabınız doğru hocam,” dedi. “Ama hesapta ben yokum.” Şalını yeniden yüzüne sarıp gitti."),
P(S("g1D"), "Cemal sana baktı. “İstiyor muyum? Kimse bana sormadı. Ona da sormadı. İkimizi de satıyorlar hocam. Biri kan için, biri barış için.” Sonra bir sigara yaktı. On yedi yaşında, öğretmeninin önünde."),
"Ocakta kına gecesi. Demircilerin evinde kadınlar türkü söylüyor. Türküler neşeli olmalı, değil. Gül'ün avucuna kına yakılıyor. Gül avucuna bakıyor.",
"Köyün öğretmeni her düğüne çağrılır. Erkeklerle avluda, ateşin başındasın. İçeriden türküler, bir ara bir kahkaha. Birinin çocuğu tepsiyi devirmiş.",
"Gece yarısı Cemal seni dışarıda yakalıyor. Biraz içmiş. Ağzı rakı kokuyor. “Hocam,” diyor, “yarın onu alacağım. Kimseye söylemeyin ama ben de korkuyorum. Ağabeyimin katilinin kardeşiyle her sabah uyanacağım.”",
"“Dedem zamanla alışırsın diyor. Kırk yıl önce babaannemi de böyle almışlar, bir başka kan için. Alışmış.” Ateşe bir çubuk atıyor. “Alışmak iyi bir şey mi hocam?”"
], secenekler: [
{ t: "Yarın düğünü herkesin önünde durduracağını söylersin.", to: "g3", etki: { merhamet: 1, durduracak: true } },
{ t: "Gül'e bir kitap verirsin. İçine bir not: “Öğretmen olabilirsin. Hâlâ.”", to: "g3", etki: { merhamet: 1, kitap: true } },
{ t: "Hacı Murat'a gidip bu son kez olsun diye söz istersin.", to: "g3", etki: { gelenek: 1, son_kez: true } },
{ t: "Cemal'e “Alışırsın,” dersin. Başka ne diyebilirsin?", to: "g3", etki: { gelenek: 1 } }
]},

g3: { saat: "Ocak 1995", baslik: "Gelin Arabası", metin: [
P(S("g2B"), "Gül'e kitabı verdin. Gül kitabı göğsüne bastırdı, sonra sandığının en dibine, çeyizin altına koydu."),
P(S("g2D"), "Cemal'e “Alışırsın,” dedin. Cemal sana baktı. “Sen alıştın mı hocam?” Cevap veremedin."),
P(S("g2C"), "Hacı Murat seni dinledi. Sonra kalktı, duvardaki boş tüfek askısını çividen söktü, sana verdi. “Bunu götür,” dedi. “Bu evde bir daha asılmasın.” Askının arkasında, duvarda, onun büyüklüğünde açık renk bir iz kaldı."),
"Düğün sabahı kar yağıyor. Demircilerin kapısında süslü bir minibüs. Ön camında bir ayna, bir kurdele, bir nazar boncuğu. Davulcuyla zurnacı kasabadan gelmiş. Para alıp çalacak ve gidecekler. Avludaki herkesten mutlu görünenler onlar.",
"Bütün köy orada. Hatun kalabalığın en arkasında, yüzü kapalı.",
"Gül kırmızı bir duvağın altında, iki kadının kolunda, eşikte duruyor. Bir an duvağın altından sana baktığını hissediyorsun.",
"Bir adım. Gül'ün ayağı minibüsün basamağında. Davul hızlanıyor.",
P(function(d){ return d.durduracak; }, "Dün gece Cemal'e düğünü durduracağını söylemiştin. Cemal kalabalığın içinden sana bakıyor.")
], secenekler: [
{ t: "Minibüsün önüne geçersin: “Bu kız gitmeyecek.”", to: "t1", etki: { merhamet: 1, sonuc: "kan", durdurdu: true } },
{ t: "Sessizce izlersin. Bu barışın bedeli bu. Ödeniyor.", to: "t1", etki: { gelenek: 1, sonuc: "baris", gelin: true } },
{ t: "Minibüse yaklaşıp Gül'ün eline kız kardeşinin adresini yazdığın bir kâğıt sıkıştırırsın. Bir gün lazım olursa.", to: "t1", etki: { merhamet: 1, sonuc: "baris", gelin: true, adres: true } },
{ t: "Arkanı dönüp yürürsün. O gün köyden kalkan ilk otobüse binersin.", to: "t1", etki: { sonuc: "baris", gelin: true, gitti: true } }
]},

/* ---------- CEMAL KOLU ---------- */
c1: { saat: "Gece", baslik: "Dağ Yolu", metin: [
P(S("k5D"), "Sulh meclisinden kalkıp avludan çıktın. Arkandan biri adını seslendi. Durmadın."),
P(function(d){ return d.gul_kacti; }, "Gül'ü gece yarısı otobüse bindirdin. Sabah köy uyandığında gelin yoktu, sulh da yoktu. Hacı Murat'ın sesi bütün köyde duyuldu: “Demirciler sözünden döndü!” Akşam Cemal'i yaylaya çıkan patikada gördüler."),
P(function(d){ return !d.gul_kacti; }, "Cemal köyün son evini geçip patikaya saptı. Elinde bir şey yok gibiydi. Dere kenarındaki çalılığa eğildi, doğrulduğunda omzunda tüfek vardı. Saklamış."),
P(function(d){ return d.silah_sende && !d.gul_kacti; }, "Ondan aldığın tüfek hâlâ battaniyelerin arasında. Bu başka bir tüfek."),
"Gece soğuk. Patika dar, taşlı. Ay bulutların arkasında gidip geliyor. Elli adım ileride Cemal'in gölgesi.",
"Bu patikayı biliyorsun. On beş yıl önce, köye ilk geldiğin yaz, çocuklarla yaylaya çıkmıştın. Selim on bir yaşındaydı, en öndeydi. Bir yerde durup “Hocam, buradan bütün dünya görünür!” demişti. Dünya dediği üç köy, bir de baraj gölüydü. Şimdi o yerin önünden geçiyorsun. Karanlıkta hiçbir şey görünmüyor.",
"Nefesin göğsünü yakıyor. Kırk yaşındasın. On yedi yaşında bir çocuğun peşinden dağa çıkmak için yaşlı, ona yetişmek için yavaş. Ayakkabının içine kar dolmuş.",
"Patika ikiye ayrılıyor. Biri kulübeye. Öbürü dolanıp kulübenin arkasına, Cemal'den önce varabileceğin kestirme.",
"Cemal bir an duruyor, dönüp bakıyor. Seni gördü mü? Yeniden yürümeye başlıyor."
], secenekler: [
{ t: "Adını bağırırsın. Bütün dağ duysun.", to: "c2", etki: { bagirdi: true } },
{ t: "Sessizce peşinden gidersin. Ne yapacağını görmek istiyorsun.", to: "c2", etki: { izledi: true } },
{ t: "Kestirmeden koşarsın. Kulübeye ondan önce varıp Rıza'yı uyarmak için.", to: "c2", etki: { uyardi: true } },
{ t: "Geri dönüp jandarmaya haber vermeye koşarsın.", to: "c2", etki: { adalet: 1, jandarma_yolda: true } }
]},

c2: { saat: "Gece", baslik: "Çoban Kulübesi", metin: [
P(S("s2A"), "Yemin bitmeden kalkıp Cemal'in peşinden gittin. Dağ yolunu koşarak çıktın. Kulübeye vardığında nefesin kesilmişti."),
P(S("c1A"), "Adını bağırdın. Dağ geri verdi: Cemal, Cemal. Durdu. Dönmedi. Sonra daha hızlı yürüdü."),
P(S("c1B"), "Sessizce izledin. Ayağının altında bir dal kırıldı; Cemal durdu, dinledi, devam etti."),
P(S("c1D"), "Köye doğru koştun. Yarı yolda bir cipin farlarını gördün. Kahveden biri jandarmayı çoktan aramış. Cipe binip geri döndünüz. Er vites değiştirirken iki kez stop etti."),
P(function(d){ return d.uyardi; }, "Kulübeye ondan önce vardın. Rıza uyuyordu. Seni görünce fırladı. “Geliyor,” dedin. Rıza önce korktu. Sonra ayakkabılarını giydi, bağcıklarını tek tek bağladı. Acele etmeden."),
"Kulübenin önünde Cemal. Tüfek omzunda, namlu kapıya dönük. Nefesi buhar olup havaya karışıyor.",
"Ay bulutların arkasından çıkıyor. Kar her şeyi maviye boyuyor: kulübeyi, ağaçları, iki gencin yüzünü.",
"“Çık dışarı!” diye bağırıyor Cemal. Sesi çatallanıyor.",
"Kapı açılıyor. Rıza çıkıyor. Elleri boş, başı açık. Karın ortasında duruyor. Annesinin ördüğü çoraplar ayağında, terlikle.",
"Aralarında on adım. Sen yan tarafta, karın içinde, ikisinin de öğretmeni."
], secenekler: [
{ t: "Aralarına girersin.", to: "c3", etki: { merhamet: 1, araya: true } },
{ t: "Cemal'le konuşursun. Annesinin ağıdını hatırlatarak.", to: "c3", etki: { merhamet: 1, agit: true } },
{ t: "Rıza'ya bağırırsın: “Diz çök! Af dile!”", to: "c3", etki: { gelenek: 1, diz: true } },
{ t: "Kımıldamazsın. Ne yaparsan yap bir şey yıkılacak.", to: "c3", etki: { izledi2: true } }
]},

c3: { saat: "Gece", baslik: "Tetik", metin: [
P(S("c2A"), "Aralarına girdin. Namlu şimdi senin göğsünde. Cemal'in gözleri büyüdü. “Hocam, çekil.” Sesi titriyor. Senin dizlerin de."),
P(S("c2B"), "“Annen,” dedin. “Mezarlıkta ne dedi, duydun mu? Kan istemem, oğlumu isterim.” Namlu bir santim indi. Sonra yine kalktı."),
P(S("c2C"), "Rıza diz çöktü, karın içine. Ellerini birleştirdi. “Ağabeyini ben öldürdüm,” dedi. “İstemeden. Affet.” Cemal'in yüzü buruştu. Biri ona bir şey uzatmış da o şeyi tutamıyormuş gibi."),
P(S("c2D"), "Kımıldamadın. Rüzgâr kulübenin tahtalarında ıslık çalıyor. Cemal sana bir an baktı. Bir şey bekleyerek. Gelmeyince yüzü kapandı."),
P(function(d){ return d.jandarma_yolda; }, "Aşağıdan bir motor sesi. Farlar ağaçların arasından geçiyor. Cemal sesi duyuyor. Parmağı tetikte geriliyor."),
"Kar yağmaya başlıyor. İri, ağır taneler. Rıza'nın saçına konup erimiyor.",
"Aklına saçma bir şey geliyor: Cemal'in “b” ile “d”yi ayırdığı gün. Defterini havaya kaldırışı. Burnundaki kan."
], secenekler: [
{ t: "Cemal'e dönersin: “Önce beni. Beni vurmadan onu vuramazsın.”", to: "t1", etki: { merhamet: 1, sonuc: "baris", cemal_birakti: true } },
{ t: "Namluya uzanırsın.", to: "t1", etki: { sonuc: "yarali" } },
{ t: "“Bu senin kararın Cemal,” dersin. “Ben bir şey demeyeceğim.”", to: "t1", etki: function(d){ d.sonuc = (d.agit || d.diz || d.konustu) ? "baris" : "kan"; d.ozgur2 = true; if(d.sonuc === "baris") d.cemal_birakti = true; } },
{ t: "Arkanı dönüp yokuş aşağı yürürsün. Arkandan ne gelirse gelsin.", to: "t1", etki: function(d){ d.sonuc = d.jandarma_yolda ? "cemal" : "kan"; d.dondu = true; } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Sabah", baslik: "Silah Sesi", metin: [
P(function(d){ return d.sonuc === "baris" && d.cemal_birakti; }, "Tüfek kara düştü. Cemal dizlerinin üstüne çöküp ağladı. On yedi yaşında bir çocuk gibi. Birinin elini tuttu; Rıza'nınkini mi seninkini mi, sonra kimse hatırlamadı. Tüfeği sen aldın. Namlusu buz gibiydi, eldivenin yapıştı."),
P(function(d){ return d.sonuc === "baris" && d.gelin; }, "Minibüs köyden çıktı. Davul sustu. Kar tekerlek izlerini yavaşça kapadı. Davulcu parasını sayarken zurnacıya bir şey söyledi, ikisi güldü."),
P(function(d){ return d.sonuc === "baris" && !d.cemal_birakti && !d.gelin; }, "Sabah köy her zamanki gibi uyandı. Kimse ölmemişti. Kadınlar çeşmede, erkekler kahvede, bunu birbirlerine söylemediler."),
P(function(d){ return d.sonuc === "kan" && d.durdurdu; }, "Minibüsün önünden çekilmedin. Düğün dağıldı; Gül evine geri götürüldü, duvağı kapıda düştü. O gece, sulh bozulduğu için, Cemal yaylaya çıktı. Sabaha karşı tek bir silah sesi. Rıza'yı kulübenin önünde buldular."),
P(function(d){ return d.sonuc === "kan" && d.oyaladi; }, "Çocuklar arka kapıdan kaçtı; Ali de. Cemal sana baktı, tüfeği indirip gitti. Aynı gece, karakolun önünde, Rıza'yı nakil aracından indirirlerken tek bir silah sesi. Cemal dağdan inmemiş, beklemiş."),
P(function(d){ return d.sonuc === "kan" && !d.durdurdu && !d.oyaladi; }, "Tek bir silah sesi. Dağ yankıladı, sustu. Rıza karın içinde, yüzüstü. Terliklerinden biri birkaç adım ötede. Cemal tüfeği bırakıp karın ortasına oturdu. Sabaha kadar kımıldamadı."),
P(function(d){ return d.sonuc === "cemal"; }, "Jandarma yetişti. Bir uyarı, bir ikinci uyarı. Cemal tüfeği indirmedi. Belki duymadı. Bir er ateş etti. Er de on dokuz yaşındaydı. Sonra kustu. Cemal ağabeyinin yanına gömüldü."),
P(function(d){ return d.sonuc === "yarali"; }, "Bir patlama. Önce ses, sonra sıcaklık, sonra karın kırmızısı. Saçmalar sol omzuna girdi. Cemal tüfeği atıp senin üstüne kapandı, bağırarak, ağlayarak, “Hocam, hocam!” Kimse ölmedi. Sen kanadın."),
"Karaağaç'ta sabah. Kar dinmiş.",
"Kadınlar çeşmenin başında. Su doldurmuyorlar, duruyorlar. Erkekler kahvede. Kimse oyun oynamıyor. Çocuklar evlere kapatılmış. Pencerelerden yüzleri görünüyor, cama yapışmış burunlar."
], secenekler: [
{ t: "Doğruca Hacı Murat'ın evine gidersin.", to: "t2", etki: { gelenek: 1, murat_ev: true } },
{ t: "Demircilerin evine gidersin.", to: "t2", etki: { merhamet: 1, demirci_ev: true } },
{ t: "Okula gidip kapıyı açarsın. Ders saati.", to: "t2", etki: { okul: true } },
{ t: "Evine kapanırsın. Kimseyi görmek istemiyorsun.", to: "t2", etki: { kapandi: true } }
]},

t2: { saat: "Sonraki günler", baslik: "Taziye", metin: [
P(S("t1A"), "Hacı Murat'ın odası. Yaşlı adam pencerenin önünde, sırtı sana dönük. “Bu benim işimdi,” diyor, dönmeden. “Kırk iki yıl önce başladım. Bitiremedim.” Pencerenin pervazını tutan eli titriyor."),
P(S("t1B"), "Demircilerin evi. Zehra Hanım sana bir sandalye veriyor. Osman Demirci ayakta. Ali köşede. Kimse konuşmuyor. Sonra Ali kalkıp senin sandalyenin yanına, yere oturuyor. Sınıfta sıranın dibine oturduğu gibi."),
P(S("t1C"), "Okulun kapısını açtın, sobayı yaktın. Dokuzda üç çocuk geldi, onda beş. Konu kesirlerdi. Tahtaya bir elma çizip dörde böldün. Bir çocuk “Hocam, elma eşit bölünmez ki, birinde çekirdek olur,” dedi. Herkes güldü. Sen de."),
P(S("t1D"), "Kapını kilitledin. Üç gün dışarı çıkmadın. Dördüncü gün kapının önünde bir tabak bulgur pilavı buldun, üstü bir tabakla kapatılmış. Kim bıraktı, bilmiyorsun. Tabağı yıkayıp kapının önüne geri koydun. Ertesi gün yoktu."),
P(function(d){ return d.sonuc === "kan" || d.sonuc === "cemal"; }, "Mezarlıkta yeni bir mezar var. Dut ağacının altında yeni bir ağıt. İki ailenin kadınları aynı ağıdın iki ucunu tutuyor. Erkekler yine mezarlığın öbür ucunda."),
P(function(d){ return d.sonuc === "baris" || d.sonuc === "yarali"; }, "Mezarlıkta yeni bir mezar yok. Yaşlılar kahvede tespih çekiyor, kimse “bitti” demiyor."),
"Kasabadan bir savcı gelecek, ifadeni alacak. Köyde konuşan adamın adı bir daha düzgün anılmaz. Konuşmayanınki hiç anılmaz."
], secenekler: [
{ t: "Savcıya her şeyi anlatmaya karar verirsin: meclisi, kızı, tüfeği veren eli.", to: "kb_murat", etki: { adalet: 1, ifade: "tam" } },
{ t: "Yalnızca kendi gördüğünü anlatmaya karar verirsin. Köyün yaşlılarını dışarıda bırakarak.", to: "t3", etki: { gelenek: 1, ifade: "kismi" } },
{ t: "Cemal'i korumak için anlatacaklarını ayarlamaya karar verirsin.", to: "t3", etki: { merhamet: 1, ifade: "koru" } },
{ t: "Hiçbir şey anlatmamaya karar verirsin. Köyün sessizliğine katılırsın.", to: "kb_imam", etki: { gelenek: 1, ifade: "sessiz" } }
]},

t3: { saat: "Şubat 1995", baslik: "Savcı", metin: [
P(S("kb_muratA"), "Hacı Murat başını salladı. “Söyle,” dedi. “Kırk iki yıl ağır geldi.” Savcıya anlattığında savcı kalemini bıraktı. “Bu zaman aşımına uğramış,” dedi. “Ama yazacağım.” Yazdı. Kâtip daktiloyu durdurup sana baktı, sonra yazmaya devam etti."),
P(S("kb_muratB"), "“Allah'a anlattım,” dedi Hacı Murat. “Kırk iki yıl. Cevap vermedi.” Sustun. Savcının karşısına o sırla oturdun. Ağzına kadar gelip geri gitti."),
P(S("kb_muratC"), "“Bir kızı vardı,” dedi Hacı Murat. “Şehre gitti. Yaşıyorsa altmışındadır.” Bir adı vardı, adresi yoktu. Savcıya o adı da söyledin. Neden söylediğini kendine de açıklayamadın."),
P(S("kb_muratD"), "Hacı Murat'ın eli kuru, kemikli, soğuktu. Bırakmadı. Gelini kapıdan bakıp çekildi."),
P(S("kb_imamA"), "Fikrini değiştirdin. Ama yarısını. Savcıya kendi gördüğünü anlattın, yalnızca onu. İfade boyunca Halil Efendi'nin sorusu kulağındaydı."),
P(S("kb_imamB"), "“Yabancı,” dedi imam ve güldü. “İkimiz de. Bu köy bizi o yüzden tutuyor. Kimseye zararımız yok.” Musluğu kapattı. Damlamaya devam etti."),
P(S("kb_imamC"), "İmam uzun süre sustu. “Belki bir gün,” dedi. Ertesi gün savcı geldiğinde imam caminin kapısında duruyordu. İçeri girmedi. Ama gitmedi de."),
P(S("kb_imamD"), "Namaza durdun. Rükûda belin tuttu. Yıllardır eğilmemişsin. Secdede alnın soğuk halıya değdi. Ne okuduğunu tam hatırlamıyordun. İmamın sesinin arkasından gittin."),
"Savcı otuzlarında, gözlüklü, aceleci. Öğretmenler odasında, senin masanda oturuyor. Senin çay bardağını kenara itmiş.",
"Yanında yaşlı bir zabıt kâtibi. Daktiloyu bir öğrenci sırasının üstüne koyuyor, kâğıdı takıyor, bekliyor. Bu odada yüzlerce çocuğa yazı öğrettin. Şimdi senin sözlerin tek tek tuşlara basılarak yazılacak.",
"“Öğretmen Bey,” diyor savcı, “bu köylerde kimse konuşmaz. Ama siz devlet memurusunuz. Sizden beklenen başka.”",
P(function(d){ return d.ifade === "tam"; }, "Anlattın: meclisi, ağayı, kızı, tüfeği veren eli, yemini, ağıdı. Savcı yazdırdıkça yüzü değişti. “Bu bir dosya değil,” dedi sonunda. “Bu bir köy.” Hacı Murat'ın adı da yazıldı. Kâtip adını yazarken bir harfi yanlış bastı, silmek için daksil aradı."),
P(function(d){ return d.ifade === "kismi"; }, "Kendi gördüğünü anlattın, yalnızca onu. Meclisi anlatmadın. Ağanın, imamın, yaşlıların adını vermedin. Savcı bir şeyin eksik olduğunu sezdi, gözlüğünün üstünden baktı, sormadı."),
P(function(d){ return d.ifade === "koru"; }, "Anlattın, dikkatle. Cemal'in korktuğunu, dedesinin baskısını, ağabeyine düşkünlüğünü. Hepsi doğruydu. Ama sıraya dizdin ve sıra bir hikâye oldu. Savcı “Çocuğu çok seviyorsunuz,” dedi. Cevap vermedin."),
P(function(d){ return d.ifade === "sessiz"; }, "“Hatırlamıyorum,” dedin. “Görmedim.” Savcı kalemini bıraktı. “Siz de mi?” dedi. Kâtip daktilodan kâğıdı çıkarıp katladı. Yazacak bir şey kalmamıştı."),
P(function(d){ return d.muhbir; }, "Dosyada bir sayfa senin adını taşıyor: Rıza'nın yerini gösteren adam. Savcı o sayfaya dokunuyor. “Size teşekkür etmek isterdim,” diyor. “Ama köydeki adınızı da duydum. Geçmiş olsun.”"),
"Savcı gidiyor. Kalemin masada yerinden oynamış. Yerine koyuyorsun. Tam eskisi gibi değil."
], secenekler: [
{ t: "Akşam Hacı Murat'a gidip ne anlattığını yüzüne söylersin.", to: "t4", etki: { adalet: 1 } },
{ t: "İmama gidip cuma günü sulh hakkında konuşmasını istersin.", to: "t4", etki: { gelenek: 1 } },
{ t: "Hatun'u ziyaret edersin.", to: "t4", etki: { merhamet: 1, hatun_ziyaret: true } },
{ t: "Kimseye bir şey söylemeden ertesi günün dersini hazırlarsın.", to: "t4" }
]},

t4: { saat: "Mart 1995", baslik: "Boş Sıralar", metin: [
P(S("t3A"), "Hacı Murat seni dinledi. “Doğru yaptın öğretmen,” dedi. Bunu beklemiyordun. “Ben de elli ikide babamın katilini mahkemeye bırakmalıydım. Bırakmadım.” Sonra torunlarından birini çağırıp sana çay getirtti."),
P(S("t3B"), "İmam dinledi. “Hutbeyi müftülük yazar,” dedi. Ama cuma günü, hutbeden sonra, cemaatin önünde kısa bir şey söyledi: “Kim bir cana kıyarsa...” Devamını herkes biliyordu. Kimse başını kaldırmadı."),
P(S("t3C"), "Hatun seni avluda karşıladı, çay koydu. Selim'in bir fotoğrafını gösterdi, sonra bir başkasını. Askerde, şapkası yamuk. “Herkes intikamdan konuşuyor,” dedi. “Kimse Selim'den konuşmuyor. Sen anlat. Sınıfta nasıldı?” Anlattın: bir keresinde sobaya kestane koyup patlatmıştı, bütün sınıf masaların altına girmişti. Hatun güldü. Ağlayarak."),
P(S("t3D"), "Kesirler, ikinci ünite. Hazırlarken defterin kenarına iki tarla çizdin, arasından bir ark geçirdin. Sonra karalayıp bir pasta çizdin."),
"Bahar geliyor. Karlar dağın tepesine çekilmiş, dere coşmuş, söğütler yeşermiş. Pencereden iki tarla görünüyor: Kayaların ve Demircilerin, arada su arkı. Bahar suyu ikisine de eşit akıyor.",
"Sınıfta boş sıralar var.",
P(function(d){ return d.sonuc === "cemal"; }, "Cemal'in iki yıl önce oturduğu sıra. Kimse oturmuyor. Çocuklar sıranın çevresinden dolanıyor. Bir gün biri üstüne bir kır çiçeği bırakmış."),
P(function(d){ return d.ali_gitti; }, "Ali'nin sırası. Ali şehirde, senin kız kardeşinin evinde, başka bir okulda. Bir mektup yazdı: “Hocam burada kar yağmıyor. Herkes bana köylü diyor. Ben de onlara şehirli diyorum.”"),
P(function(d){ return d.gelin; }, "Gül'ün kardeşi, sekiz yaşında, ablasının bir zamanlar oturduğu sırada. Defterinin kapağına ablasının adını yazmış: Gül Kaya. Soyadı değişmiş."),
"Teneffüste dokuz yaşında bir kız yanına geliyor. Ne Kayalardan ne Demircilerden. Burnunu siliyor. “Hocam,” diyor, “kan yerde kalır mı?”"
], secenekler: [
{ t: "“Kalmalı,” dersin. “Ancak yerde kalırsa biter.”", to: "t5", etki: { merhamet: 1, cevap: "kalmali" } },
{ t: "“Kalmaz. Ama onu mahkeme alır, insan değil,” dersin.", to: "t5", etki: { adalet: 1, cevap: "mahkeme" } },
{ t: "“Büyüklerine sor,” dersin. Bu köyün cevabını sen veremezsin.", to: "t5", etki: { gelenek: 1, cevap: "buyuk" } },
{ t: "Bir şey demeden onu tahtaya kaldırır, “Barış” kelimesini hecelemesini istersin.", to: "t5", etki: { cevap: "hece" } }
]},

t5: { saat: "Haziran 1995", baslik: "Tayin", metin: [
P(S("t4A"), "“Kalmalı,” demiştin. Kız düşündü. “Kim karar veriyor kalacak mı?” Cevap beklemeden ip atlamaya koştu."),
P(S("t4B"), "“Mahkeme alır,” demiştin. Kız düşündü. “Mahkeme bizim köye gelir mi?” Cevap veremedin."),
P(S("t4C"), "“Büyüklerine sor,” demiştin. Ertesi gün kız geldi: “Dedem kalmaz dedi.” Sonra çantasından bir şeker çıkarıp sana verdi. İkisini aynı anda söylemiş gibi."),
P(S("t4D"), "Kızı tahtaya kaldırdın. “Ba-rış.” Heceledi, yazdı. Noktalı i'yi unuttu, sonra döndü, noktayı ekledi. Sınıf güldü. Kız da güldü."),
"Haziran. Karne günü. Çocuklar karnelerini alıp koşarak çıkıyor. Son çocuk da gidince sınıfı süpürüyor, sıraları siliyorsun. Tahtanın köşesinde silmeyi unuttuğun bir kelime kalmış, bir çocuğun yuvarlak harfleriyle: “Barış.” Silmiyorsun.",
"Masanda bir zarf: Milli Eğitim. Şehre tayin talebin kabul edilmiş.",
"Bir talepte bulunduğunu unutmuştun. Aralıkta, bir gece, sobanın yanında, ellerin titrerken yazdığın bir dilekçe. Göndermediğini sanıyordun. Muhtar postaya vermiş, sana sormadan.",
"Avlunun dibinde Hatun'un Selim'in kırkında diktiği dut fidanı yaprak vermiş. Dört yaprak.",
"Kalırsan bir kış daha. Gidersen bu köy bir öğretmen daha kaybeder ve kimse şaşırmaz. Muhtar yeni öğretmene de aynı lojmanı gösterir, sobanın çekmediğini söylemez."
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
P(S("t5A"), "Zarfı yırtmıştın. Parçalarını sobaya attın."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi. Biri Hatun'du. İlk kelimesi “Selim” oldu."),
P(S("t5D"), "Gitmeden önce bir defter doldurmuştun. Kırk sayfa, sobanın başında, üç gecede."),
"Barış tuttu. Kimse kimseyi vurmadı. Ertesi yıl Hacı Murat öldü. Cenazesinde iki aile yan yana namaz kıldı. Köyde buna “Gül'ün barışı” diyorlar. Gül'e kimse sormadı.",
P(function(d){ return d.adres; }, "Dört yıl sonra bir mektup geldi. Şehirden, kız kardeşinin adresinden. Gül'ün el yazısı: “Hocam, buradayım. İki çocukla. Gece okuluna yazıldım. Kâğıdı saklamıştım.” Altında bir kelime, mavi tükenmezle: “Olacağım.”"),
P(function(d){ return !d.adres; }, "Yıllar sonra Gül'ü köyün çeşmesinde gördün. Yanında iki çocuk. Biri ayakkabısının bağcığını çözüp duruyordu, Gül her seferinde eğilip bağlıyordu. Sana baktı, başıyla selam verdi. Bir şey söylemedi. Kovasını doldurup gitti."),
"Bazı geceler o sabahı düşünüyorsun: minibüsün basamağı, davulun hızlanışı, duvağın altından gelen o bakış. Duvağın altında hangi yüz vardı, hiç görmedin."
]},

son_yabanci: { son: true, baslik: "Yabancı", metin: [
P(S("t5A"), "Zarfı yırtmıştın. Parçalarını sobaya attın."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi. Biri Hatun'du. İlk kelimesi “Selim” oldu."),
P(S("t5D"), "Gitmeden önce bir defter doldurmuştun. Kırk sayfa, sobanın başında, üç gecede."),
"Şehre döndün. Bir ortaokulda Türkçe öğretmeni oldun. Kalabalık sınıflar, zil sesleri, adını bilmediğin öğretmenler.",
"Burada kimse kan davası sormuyor. Öğrencilerin dertleri sınavlar, futbol, bir kızın kime baktığı. Bir gün iki çocuk tuvalette kavga ediyor. İkisini odana çağırıyorsun, konuşuyorsunuz, el sıkışıyorlar. Çıkarken biri ötekine omuz atıyor. Gülüyorsun. Sonra gülmeyi bırakıyorsun.",
P(function(d){ return d.yazdi; }, "Yazdığın defter çekmecende. Bir yayınevine gönderdin. Geri çevrildi, “fazla karanlık” diye. Defteri çekmeceye geri koydun; Cemal'in kompozisyonunun yanına."),
P(function(d){ return d.gelin; }, "Gül'ün düğün sabahı arkanı dönüp yürüdüğün yolu bazen rüyanda yürüyorsun. Rüyada dönüp bakıyorsun. Uyanınca bakmadığını hatırlıyorsun."),
"Karaağaç'tan haber almıyorsun. Bir bayram bir kartpostal geldi; Ali'den. “Hocam, öğretmen oldum. Köyde değil. Ama oldum. Sobası çeken bir okul.”"
]},

son_dongu: { son: true, baslik: "Döngü", metin: [
P(S("t5A"), "Zarfı yırtmıştın. Parçalarını sobaya attın."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi. Biri Hatun'du. İlk kelimesi “Selim” oldu."),
P(S("t5D"), "Gitmeden önce bir defter doldurmuştun. Kırk sayfa, sobanın başında, üç gecede."),
P(function(d){ return d.sonuc === "kan"; }, "Cemal on iki yıl ceza aldı. Hacı Murat mahkemede başını dik tuttu. Demirciler yas tuttu. Ve yasın içinde bir cümle büyüdü, kimse yüksek sesle söylemeden: Demircilerin bir erkeği daha var."),
P(function(d){ return d.sonuc === "cemal"; }, "Cemal'i bir er vurdu. Köy, devlet bir Kaya'yı öldürdü dedi. Demirciler rahatladı. Sonra rahatladıkları için korktular. Hacı Murat'ın evinde boş bir tüfek askısı, mezarlıkta iki taş. Ve Kayaların, yaşları onun altında, üç erkek torunu."),
"Bir sonbahar okulun kapısında, sınıfa ilk günü gelen yedi yaşında bir oğlan. Annesi elinden tutmuş. “Kayaların torunu,” diyor annesi, “Selim'in kardeşinin oğlu.” Çocuğun adı Selim.",
"Çocuğa bir sıra gösteriyorsun. Pencerenin yanındaki, Cemal'in eskiden oturduğu. Sonra fikrini değiştirip öndeki sırayı gösteriyorsun. Çocuk hangisinin farkı olduğunu bilmeden oturuyor ve çantasından yeni kalemlerini çıkarıp sıraya diziyor."
]},

son_muhbir: { son: true, baslik: "Muhbir", metin: [
P(S("t5A"), "Zarfı yırtmıştın. Parçalarını sobaya attın."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi. Biri Hatun'du. İlk kelimesi “Selim” oldu."),
P(S("t5D"), "Gitmeden önce bir defter doldurmuştun. Kırk sayfa, sobanın başında, üç gecede."),
"Rıza yedi yıl yattı. Mahkeme küreği ve kayayı tarttı: kasten öldürme değil. Yedi yıl. Hacı Murat'a göre hiçbir şey. Zehra Hanım'a göre bir ömür.",
"Köyde adın değişti. Kahvede selam veren yok. Çocuklar okula geliyor, çünkü başka okul yok. Veli toplantısına kimse gelmiyor. Bir gün sobanın odununu kimin getirmediğini sordun. Kimse cevap vermedi, ertesi gün odun kapındaydı.",
"Bir akşam okulun önünde Zehra Hanım. Elinde bir tabak börek. “Oğlum yaşıyor,” diyor. “İçeride ama yaşıyor. Bunu kimse sana söylemeyecek. Ben söylüyorum.” Tabağı bırakıp çabucak gidiyor. Köşeyi dönmeden önce iki yanına bakıyor.",
"Yıllar sonra Rıza çıktığında köye dönmedi. Sana bir mektup yazdı. Tek cümle: “Hocam, kaza mıydı cinayet mi, mahkeme karar verdi. Ben hâlâ bilmiyorum.” Mektubun arkasına cezaevinde öğrendiği bir şeyi çizmişti: bir saat, akrep ve yelkovanı yerinde, rakamları eksik."
]},

son_zincir: { son: true, baslik: "Kırılan Zincir", metin: [
P(S("t5A"), "Zarfı yırtmıştın. Parçalarını sobaya attın."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi. Biri Hatun'du. İlk kelimesi “Selim” oldu."),
P(S("t5D"), "Gitmeden önce bir defter doldurmuştun. Kırk sayfa, sobanın başında, üç gecede."),
"Kimse ölmedi. Tüfek senin dolabına girdi ve orada kaldı. Bir gün jandarmaya teslim ettin. Teğmen tutanağa “sahipsiz silah” yazdı.",
P(function(d){ return d.sonuc === "yarali"; }, "Sol omzunda saçma izleri var. Kışın sızlıyor, nem olunca da. Cemal her bayram arıyor. Bir keresinde, telefonu kapatmadan önce, “Hocam omzun nasıl?” diye sordu. “Yağmur yağacak,” dedin. Güldü."),
P(function(d){ return d.sonuc !== "yarali"; }, "Cemal askere gitti, döndü, evlendi. İlk çocuğu oğlan oldu. Adını sana sordu. “Selim koyma,” dedin. Adını Umut koydu. Köyde şimdi iki Umut var, biri Demircilerde."),
P(function(d){ return d.hatun_ziyaret || d.hatun_destek || d.hatun; }, "Hatun her bayram okula bir tabak irmik helvası gönderiyor. Üstünde not yok. Tabağı her seferinde yıkayıp geri gönderiyorsun. Bir keresinde içine bir kalem koydun. Bir sonraki bayram helvanın yanında o kalem geri geldi, ucu açılmış."),
"Bir bahar yaylaya çıkıyorsun. Selim'in “Buradan bütün dünya görünür” dediği yerde oturuyorsun. Üç köy, bir baraj gölü. Aşağıda iki tarla, arada ark. Su akıyor."
]},

son_kagit: { son: true, baslik: "Kâğıt Barış", metin: [
P(S("t5A"), "Zarfı yırtmıştın. Parçalarını sobaya attın."),
P(S("t5B"), "Eşyalarını toplamıştın: iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son kez baktın."),
P(S("t5C"), "Kalmış ve bir akşam okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi. Biri Hatun'du. İlk kelimesi “Selim” oldu."),
P(S("t5D"), "Gitmeden önce bir defter doldurmuştun. Kırk sayfa, sobanın başında, üç gecede."),
"Barış tuttu. Kâğıt üstünde. Kur'an üzerinde iki el, bir yemin.",
"Kayalarla Demirciler aynı kahvede oturmuyor. Düğünlere çağırmıyorlar. Çocuklar teneffüste ayrı köşelerde oynuyor. Kimse söylemeden.",
"Hacı Murat öldü. Cenazesinde Demircilerden kimse yoktu. Osman Demirci öldü; Kayalardan kimse yoktu.",
"Her ilkbahar arkın suyu açılırken köyün erkekleri tarlanın kenarında birikiyor, suyun hangi tarafa ne kadar aktığına bakıyor. Kimse bir şey söylemiyor. Sen de gidiyorsun, bakıyorsun. Su iki tarafa da akıyor. Erkekler dağılıyor. Bir yıl daha."
]}

},

ayna: function(d){
  var out = [];
  var a = d.adalet, g = d.gelenek, m = d.merhamet;
  if(m >= a && m >= g) out.push("Bu kış en çok merhamete yaslandın: bir annenin ağıdına, bir çocuğun korkusuna, bir kızın sesine.");
  else if(a >= g) out.push("Bu kış en çok kanuna, devlete, mahkemeye yaslandın.");
  else out.push("Bu kış en çok köyün kendi yollarına yaslandın: meclis, sulh, yaşlıların sözü.");
  if(d.sustu) out.push("Meclisin en kritik anında sustun.");
  if(d.muhbir) out.push("Devlete konuştun ve köydeki adın değişti.");
  if(d.dondu) out.push("Dağda, son anda, arkanı döndün.");
  if(d.gelin) out.push("Bir kızın bir barışa bedel olmasına ses çıkarmadın.");
  if(d.gul_kacti || d.durdurdu) out.push("Bir kızın bedel olmasını engelledin; bunun da bir bedeli oldu.");
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
