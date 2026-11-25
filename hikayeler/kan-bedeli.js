(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "kan-bedeli",
baslik: "Kan Bedeli",
dunya: "Gerçek dünya",
kategoriler: ["Toplum ve Adalet"],
giris: "1994, bir dağ köyü. Bir tarla kavgasında bir genç öldü ve şimdi kan, kan istiyor. Sen on beş yıldır bu köyün öğretmenisin, iki ailenin çocukları da senin sıralarında büyüdü. Bir gece kapına, montunun altında tüfek taşıyan eski bir öğrencin geliyor. Töre ile devletin, vicdan ile bir annenin ağıdının arasında sıkışıp kalmış bir kışı anlatıyor bu hikâye. Bir yabancı bir köyün yasasını değiştirebilir mi, yoksa elinden gelen yalnızca olanlara tanıklık etmek mi?",
kavramlar: ["Adalet ve intikam", "Affetme", "Töre ve toplumsal baskı", "Şiddetin döngüsü"],
ozet: "1994 sonbaharı, bir dağ köyü. Bir tarla kavgasında bir genç öldü, şimdi de başka bir gencin eline silah verildi. Sen köyün öğretmenisin ve iki ailenin çocukları da senin öğrencin.",
baslangic: "k1",
durum: { adalet: 0, gelenek: 0, merhamet: 0 },

sahneler: {

k1: { saat: "Ekim 1994", baslik: "Silah", metin: [
"Karaağaç'taki on beşinci kışın bu. Adın Kerim, kırk yaşındasın. Şehirden tayinle gelmiştin, bir yıl dayanırım demiştin ama gidemedin. Köyün tek okulunun tek öğretmenisin, yirmi yaşın altındaki herkes bir zamanlar senin sıralarında oturdu, çoğunun kulağını en az bir kere çektin.",
"Okul dediğin tek bir oda. Kara tahta, kırk yıllık sıralar, ortada bir soba. Duvarda çocukların çizdiği bir Türkiye haritası asılı, Karaağaç'ı kırmızı kalemle işaretlemişler, çünkü gerçek haritalarda yok. Lojmanın sobası çekmediği için kışları burada yatıyorsun. Bu köyde gece on birden sonra kapı çalınmaz, çalınırsa ya doğum vardır ya ölüm.",
"Üç gün önce Kayaların büyük oğlu Selim'le Demircilerin oğlu Rıza su sırası yüzünden kavgaya tutuştular. Selim'in elinde kürek varmış, Rıza itmiş, Selim de başını arkın kenarındaki taşa çarpmış. Yirmi altı yaşındaydı, ilkbaharda düğünü olacaktı. Rıza o gece dağa çıktı. Kimse nerede olduğunu bilmiyor ama aslında herkes biliyor.",
"Bu gece okulun kapısını çalan Kayaların küçüğü Cemal. On yedi yaşında. İki yıl önce sınıfın en güzel kompozisyonlarını o yazardı, birini hâlâ çekmecende saklıyorsun. Konusu “Büyüyünce Ne Olacağım”dı, o da “şoför” yazmış, yanına da “İstanbul'a giden otobüslerin” diye eklemişti.",
"Montunun altında uzun, ağır bir şey var. Sen görmezden gelmeye çalışıyorsun, o da göstermemeye çalışıyor ama ikiniz de beceremiyorsunuz.",
"Kalemi ilk tuttuğunda b ile d'yi hep ters yazardı. Bir gün ayırt etmeyi başarınca defterini havaya kaldırıp sana koşmuş, sıraya çarpıp burnunu kanatmıştı da ağlamamıştı. Şimdi aynı eller montun altında bir kabzayı tutuyor.",
"Sobanın yanına oturup ellerini ısıtıyor. Bir parmağının tırnağı kırılmış, kenarı kanamış.",
"Sonunda konuşuyor: “Hocam, dedem tüfeği bana verdi. Ağabeyinin kanı yerde kalmaz dedi, evin büyük erkeği artık sensin dedi.” Burnunu çekiyor. “Ben bunu yapmak zorunda mıyım?”",
"Bunu dedesine de, imama da sormamış, sana soruyor."
], secenekler: [
{ t: "Tüfeği elinden alırsın: “Bu gece burada kalsın.”", to: "k2", etki: { merhamet: 1, silah_sende: true } },
{ t: "“Hayır, bunun adı cinayet. Kanun bunu senden istemiyor,” dersin.", to: "k2", etki: { adalet: 1, konustu: true } },
{ t: "“Bunun cevabını ben veremem, sen vereceksin,” dersin.", to: "k2", etki: { ozgur: true } },
{ t: "Onu kolundan tutup dedesinin evine götürürsün. Bu konuşma orada yapılmalı.", to: "k2", etki: { gelenek: 1 } }
]},

k2: { saat: "Ekim 1994", baslik: "Hacı Murat", metin: [
P(S("k1A"), "Cemal tüfeği bıraktı. Elinden kurtulmuş gibi değil de elinden alınmış gibi bıraktı. Tüfek şimdi dolabında, kışlık battaniyelerin arasında duruyor. Gece kalkıp dolabın kapağının kapalı olup olmadığına iki kere baktın."),
P(S("k1B"), "Cemal seni dinledi. “Kanun ağabeyimi geri getirecek mi hocam?” dedi. “Rıza'yı tutsalar on sene yatar, çıkar, köye döner. Ağabeyim dönmez ama.” Kalktı ve tüfek de onunla gitti. Kapıda tüfeği montunun altına geri soktu, bu sefer saklamaya bile uğraşmadan."),
P(S("k1C"), "Cemal uzun uzun yüzüne baktı, bir kapının açılmasını beklemiş de kapı açılmamış gibi. “Peki hocam,” dedi ve kalktı. Kapıyı arkasından yavaşça kapattı, oysa öğrenciyken hep çarpardı."),
P(S("k1D"), "Hacı Murat'ın kapısına vardığınızda Cemal'in kolu elinin içinde titriyordu. Seni içeri aldılar, Cemal'i ise dışarıda, soğukta bıraktılar."),
"Ertesi gün Hacı Murat Kaya seni çağırtıyor. Yetmiş sekiz yaşında, köyün en yaşlı erkeği. Odası loş, duvarda bir saat, bir de tüfek askısı var. Askı boş.",
"Kapıda Cemal'in annesi Hatun karşılıyor seni, gözleri kan çanağına dönmüş. İçeri alırken kulağına fısıldıyor: “Hocam, sen ikna et onu. Benim sözüm bu evde geçmez.” Sonra kapıyı açıp bir adım geri çekiliyor, o odaya kadınlar girmez.",
"Hacı Murat çayını kendi eliyle koyuyor, bu bir hürmet. “Öğretmen,” diyor, “sen okumuş adamsın. Şehirde kan davası yok derler. Peki orada ne var? Mahkeme var. Mahkeme ne yapar? Katili besler. Sabah çorbasını, akşam pilavını verir.”",
"Bir süre konuşmadan şekerini karıştırıyor. “Elli ikide babamı vurdular, ben on dokuz yaşındaydım. Ben de vurdum. Benimle bitsin diye yemin ettim ama bitmedi işte. Üç gün önce torunumu toprağa verdim.”",
"“Kan yerde kalmazsa bir sonraki kan da yerde kalmaz, bunu bilmiyor muyum sanıyorsun? Ama kan yerde kalırsa Kayaların adı yerde kalır. Hangisi daha beter, sen söyle bakalım öğretmen.”"
], secenekler: [
{ t: "“Ad yerde kalsın Hacı Amca. Ad bir şey değil, insan bir şey,” dersin.", to: "k2b", etki: { merhamet: 1 } },
{ t: "“Devlet var, Rıza yargılanacak. Bu sizin işiniz değil,” dersin.", to: "k2b", etki: { adalet: 1 } },
{ t: "“Bu köyün kurallarını ben koymadım ama sulh da bu kuralların içinde. Neden sulh olmasın?” dersin.", to: "k2b", etki: { gelenek: 1, sulh_onerdi: true } },
{ t: "Hiçbir şey söylemeden çayını içip dinlersin. Bu adam cevap değil, kulak istiyor.", to: "k2b", etki: { dinledi: true } }
]},

k2b: { saat: "Ekim 1994", baslik: "Ağıt", metin: [
P(S("k2A"), "Hacı Murat uzun uzun yüzüne baktı. “Sen şehirlisin,” dedi, “senin adın yok, ondan kolay konuşuyorsun.” Haksız da sayılmazdı. On beş yıldır buradasın ama mezarlıkta bir tane akraban yok."),
P(S("k2B"), "“Devlet,” dedi Hacı Murat ve güldü, gülüşü öksürüğe döndü. “Devlet elli ikide de vardı. Babamın katili dört sene yattı, çıktı, düğününe beni de çağırdılar.” Fincanı bıraktı, görüşme bitmişti."),
P(S("k2C"), "Hacı Murat'ın kaşları kalktı. “Sulh mu?” dedi. “Demirciler istesin. Ben istemem, ben istersem zayıf görünürüm.” Ama şekeri karıştırmayı bıraktı, kaşık bardağın içinde kaldı."),
P(S("k2D"), "Hacı Murat bir saat boyunca anlattı. Babasını, elli ikinin kışını, ilk tüfek tuttuğu gün elinin nasıl yandığını. Sen hiçbir şey demedin. Kalkarken elini omzuna koydu. “Sağ ol öğretmen,” dedi. “Bunları kimseye anlatmamıştım, hanım bile bilmez.”"),
"Selim'in kırkı dolmadan köyde bir ses yükseliyor, kadınların ağıdı. Mezarlığın yanındaki dut ağacının altında Hatun dizlerine vura vura oğlunu anlatıyor. Adını, gülüşünü, ilk dişini, çocukken kuyuya düşürdüğü ayakkabısını anlatıyor.",
"Ağıdın içinde bir söz var ki herkes duyuyor ama kimse duymamış gibi yapıyor: “Kan istemem, oğlumu isterim. Kan oğlumu getirmez.”",
"Erkekler mezarlığın öbür ucunda duruyor. Hacı Murat kıpırdamıyor. Cemal'in yüzü bembeyaz, elleri cebinde, cebindeki bir şeyi sıkıyor."
], secenekler: [
{ t: "Kadınların yanına gidip Hatun'un elini tutarsın, bu köyde bir erkeğin yapmayacağı bir şeyi yaparsın.", to: "k3", etki: { merhamet: 1, hatun: true } },
{ t: "Cemal'in yanına gidersin. Annesinin sözlerini duyduğundan emin olmak istiyorsun.", to: "k3", etki: { cemal_annesi: true } },
{ t: "Hacı Murat'ın da duyduğunu görmek için ona bakarsın.", to: "k3", etki: { gelenek: 1 } },
{ t: "Uzaktan izlersin. Bu acı senin değil.", to: "k3" }
]},

k3: { saat: "Kasım 1994", baslik: "Ali", metin: [
P(S("k2bA"), "Hatun'un elini tuttun. Kadınlar bir an sustu, sonra ağıt kaldığı yerden devam etti. Erkeklerin tarafından bir mırıltı geldi. Köy yarın bunu konuşacaktı."),
P(S("k2bB"), "Cemal'in yanında durdun. Annesinin sesi her yükseldiğinde omuzları biraz daha düştü. Bir ara dönüp sana baktı, sınıfta bir şiiri anlamadığında nasıl bakarsa öyle."),
P(S("k2bC"), "Hacı Murat'ın yüzünde hiçbir şey kıpırdamadı ama ağıt bitmeden dönüp evine yürüdü, bastonuna yaslanarak, her adımda biraz durarak."),
P(S("k2bD"), "Uzaktan izledin. Ağıt bitince kadınlardan biri sana bakıp başını çevirdi. Ne demek istediğini anlamadın."),
"Sabah derste Demircilerin küçüğü Ali sırasında oturuyor. On iki yaşında. Kitabını açmamış, defterine bir şey çiziyor. Bir dağ, dağda bir kulübe, kulübede bir adam. Adamın ellerini kocaman çizmiş.",
"Ders Türkçe, okuduğunu anlama. Sınıfın yarısı Kayalara, yarısı Demircilere akraba. Sıralar kendiliğinden ikiye ayrılmış, ortada bir koridor açılmış, geçen hafta o koridor yoktu.",
"Teneffüste Ali yanına geliyor. “Hocam, ağabeyimi vuracaklar mı?” diye soruyor, sonra sesini alçaltıyor. “Bulamazlarsa beni mi vururlar? Babam öyle dedi, erkek olan herkesi vururlar dedi. Ama ben daha on iki yaşındayım.”",
"Öğleden sonra okulun kapısında Ali'nin annesi Zehra Demirci bekliyor, başörtüsünün ucunu ağzına bastırmış.",
"“Hocam,” diyor, “Ali'yi bir süre yanınızda tutsanız. Geceleri de. Ya da şehre götürseniz, kimseye söylemeyiz. Sizin yanınızda kimse ona dokunmaz.” Elinde bir bohça var, içinde Ali'nin pijaması, bir de ekmek."
], secenekler: [
{ t: "Ali'yi kendi evine alırsın, kimse sormadıkça da kimseye söylemezsin.", to: "kb_ali", etki: { merhamet: 1, ali_sende: true } },
{ t: "Zehra Hanım'a jandarmaya gitmesini söylersin, koruma onların işi.", to: "k4", etki: { adalet: 1 } },
{ t: "Rıza'nın teslim olması gerektiğini söylersin, Ali'yi kurtaracak tek şey bu.", to: "k4", etki: { adalet: 1, teslim_dedi: true } },
{ t: "“Ben öğretmenim Zehra Hanım, bu kavgada taraf olamam,” dersin.", to: "kb_kahve", etki: { gelenek: 1, taraf_olmadi: true } }
]},

k4: { saat: "Kasım 1994", baslik: "Kulübe", metin: [
P(S("kb_aliA"), "Ali bir süre düşündü. “O zaman ben affederim,” dedi, “ben yaşıyorum.” Sonra uyudu. Sen sabaha kadar gözünü kırpmadın."),
P(S("kb_aliB"), "Ali gözlerini kapattı ve bir yalanla uyudu. Sabah kahvaltıda “Selim ağabey rüyama girdi,” dedi. Ne gördüğünü sormadın."),
P(S("kb_aliC"), "“Söz mü?” dedi Ali. “Söz,” dedin. Ali serçe parmağını uzattı, parmaklarınızı birbirine kenetlediniz. Bu dağlarda bir sözün kaç para ettiğini bilen sendin, o değil."),
P(S("kb_aliD"), "Yanına oturdun, Ali de elini tuttu. Bir saat sonra uyudu ama elini bırakmadı, sen de çekmedin. Sabah kolun uyuşmuştu."),
P(S("kb_kahveA"), "Kalkıp Osman Demirci'nin masasına geçtin ve kahve bir anda sustu. Osman başını kaldırmadı ama çayını sana doğru itti. Ertesi gün köyde iki şey konuşuldu, Rıza'nın nerede olduğu, bir de öğretmenin kimin masasına oturduğu."),
P(S("kb_kahveB"), "Sözlerin kahvede çınladı ama kimse cevap vermedi. Biri taşları topladı, biri sobaya odun attı, konuşma sen hiç ağzını açmamışsın gibi sürüp gitti."),
P(S("kb_kahveC"), "Cuma, namazdan sonra. Bunu artık biliyorsun. Kahveden çıkarken ayağın bir taşa takıldı, kimse gülmedi."),
P(S("kb_kahveD"), "Hacı Murat seni kapıda dinledi. “Cuma,” dedi, “evet, ben söyledim.” Hiç utanmadı. Ama ertesi gün Cemal'i bir haftalığına şehre, bir akrabasının yanına gönderdi. Neden gönderdiğini kimse bilmiyor."),
P(S("k3A"), "Ali'yi evine aldın. İlk gece hiç uyumadı, sobanın her çıtırtısını ayak sesi sandı. Sabaha karşı başını dizine koyup uyudu, ağzının kenarından akan salya pantolonunu ıslattı."),
P(S("k3B"), "Zehra Hanım jandarmaya gitti. Bir onbaşı tutanak tuttu, “Gerekeni yaparız abla,” dedi ama kimse bir şey yapmadı. Karakol köye kırk kilometre uzakta, kışın daha da uzak."),
P(S("k3C"), "Zehra Hanım ağladı. “Teslim olursa öldürürler,” dedi, “hapiste de bulurlar, dışarıda da.” Sonra biraz durdu. “Ama siz söylerseniz dinler. Sizi severdi. Karnesine ‘yaramaz ama zeki’ yazmıştınız, hâlâ gösterir herkese.”"),
P(S("k3D"), "Zehra Hanım sana baktı ve bir şey söylemeden bohçasını alıp gitti. Ali ertesi gün derse gelmedi."),
"Pazar günü Rıza seni çağırtıyor. Bir çoban çocuğu gelip kulağına fısıldıyor: “Yukarı yaylada, eski kulübede. Yalnız gel dedi, ekmek de getirsin dedi.”",
"Kulübe buz gibi. Rıza yirmi iki yaşında, sakalı uzamış, gözleri çukura kaçmış. Seni görünce sınıfa müdür girmiş gibi ayağa fırlıyor.",
"Köşede iki battaniyeyle bir koyun postu var, bir çivide annesinin ördüğü yün çoraplar asılı. Ocaktaki ateş küllenmiş, geceleri duman görünür diye yakmaya korkuyor. Üç haftadır burada saklanıyor. Getirdiğin ekmeğin yarısını sen daha oturmadan bitiriyor.",
"“Ben öldürmedim hocam,” diyor ağzı dolu dolu. “Yani öldürdüm ama istemedim. Kürekle üstüme geldi, ben de ittim, taşa düştü. Kafası...” Ellerine bakıp ekmeği bırakıyor.",
"“Herkes bana katil diyor. Ben katil miyim?”"
], secenekler: [
{ t: "Teslim olmasını söylersin: “Mahkeme bunu ayırır, köy ayıramaz.”", to: "k5", etki: { adalet: 1, riza_teslim: true } },
{ t: "Ona para verip İstanbul'a kaçmasını söylersin.", to: "k5", etki: { merhamet: 1, kacirdi: true } },
{ t: "Sulh meclisine gelip herkesin önünde kendi ağzıyla anlatmasını istersin.", to: "k5", etki: { gelenek: 1, meclise: true } },
{ t: "“Bilmiyorum Rıza,” dersin. Bu soruya cevap verebilecek tek kişi toprağın altında.", to: "k5", etki: { bilmiyorum: true } }
]},

k5: { saat: "Aralık 1994", baslik: "Sulh Meclisi", metin: [
P(S("k4A"), "Rıza “Düşüneceğim,” dedi ve ekmeğin kalanını bir beze sarıp yatağın altına koydu."),
P(S("k4B"), "Parayı aldı, saymaya başladı, sonra utanıp saymayı bıraktı. Ertesi sabah kulübe bomboştu, yalnızca yün çoraplar çivide asılı kalmıştı."),
P(S("k4C"), "Rıza bir süre düşündü. “Gelirim,” dedi, “ama sen yanımda olursan.” Sonra sakalını kaşıyarak ekledi: “Ama önce bir tıraş olayım.”"),
P(S("k4D"), "“Bilmiyorum,” dedin. “Ben de bilmiyorum,” dedi Rıza. İkiniz bir süre kulübenin soğuğunda oturdunuz, sonra Rıza kalan ekmeği ikiye bölüp yarısını sana verdi."),
"Aralık başında cami avlusunda sulh meclisi kuruluyor. Komşu köyün ağası, imam, iki ailenin büyükleri gelmiş. Jandarma teğmeni biraz uzakta, cipinin yanında sigara içiyor, görünmek ama karışmamak için orada.",
"Erkekler avlunun ortasında minderlere oturmuş, yaşlılar önde, gençler arkada. Ortada bir sini, sinide çay var. Şeyh Ömer yetmişlerinde, sakalı bembeyaz bir adam, bu dağlarda yirmiden fazla kan davasını bağlamış. Tespihini çekiyor, kimsenin yüzüne bakmıyor.",
"Teklif okunuyor. Demirciler kan bedeli olarak para verecek, iki tarla verecek, bir de kız verecek. Demircilerin on altı yaşındaki kızı Gül, Kayaların küçüğü Cemal'le evlendirilecek ve kan akrabalıkla kapanacak.",
"Gül iki yıl öncesine kadar sınıfının birincisiydi, öğretmen olmak istiyordu. Bir kompozisyonunda “Kerim Öğretmen gibi ama daha az kızan” bir öğretmen olacağını yazmıştı.",
"Ağa sana dönüyor. “Öğretmen, bu köyün çocuklarını sen yetiştirdin. Bir de sen söyle.”",
"Bütün gözler senin üstünde, Hacı Murat'ınki, Osman Demirci'ninki, imamınki. Avlunun kenarında, duvarın dibinde kadınlar duruyor. En arkada da kollarını kavuşturmuş Cemal var."
], secenekler: [
{ t: "“Sulh olsun, para olsun, tarla olsun. Ama kız verilmez.”", to: "s1", etki: { merhamet: 1, kiz_hayir: true } },
{ t: "“Bu meclisin kanun önünde hiçbir değeri yok. Rıza'nın yeri mahkemedir.”", to: "d1", etki: { adalet: 2, devlet: true } },
{ t: "Susarsın. Bu meclis bu köyün meclisi, senin değil.", to: "g1", etki: { gelenek: 1, sustu: true } },
{ t: "Kalkarsın. Cemal avludan çıkıyor, sen de peşinden gidiyorsun.", to: "c1", etki: { cemal_pesinde: true } }
]},


kb_ali: { saat: "Kasım 1994", baslik: "Ali'nin Soruları", metin: [
"Ali'yi lojmana getirdin. Lojman iki oda, birinde kitaplarınla bir yatak var, ötekinde soba ve masa. Yatağı Ali'ye veriyorsun, sen sobanın yanında, minderde yatacaksın.",
"Ali uyumuyor, tavana bakıyor. Bir süre sonra soruyor: “Hocam, siz niye evlenmediniz?”",
"Köyde herkes merak eder ama kimse sormaz. “Bilmiyorum,” diyorsun, “geç kaldım herhalde.” Ali biraz düşünüyor. “Çocuğunuz olsaydı onu da vurabilirlerdi,” diyor. “İyi ki yok.”",
"Sonra başka bir şey soruyor: “Selim ağabey öldü ya, şimdi cennette mi? Orada Rıza ağabeyimi affeder mi? Ölüler affedebilir mi hocam?”",
"Başını yastığa gömüyor, sesi boğuk geliyor: “Ben kimseyi öldürmedim ki hocam. Beni niye öldürsünler?”",
"Soba çıtırdıyor, dışarıda bir köpek havlayıp susuyor. Ali'nin ayağı yorganın altından çıkmış, çorabının teki delik."
], secenekler: [
{ t: "“Ölüler affedemez Ali. Affetmek yaşayanların işi, o yüzden zor,” dersin.", to: "k4", etki: { merhamet: 1, ali_ders: true } },
{ t: "Bir çocuk uyuyabilsin diye “Selim ağabey çoktan affetti,” dersin.", to: "k4", etki: { merhamet: 1, ali_teselli: true } },
{ t: "“Seni kimse öldürmeyecek, ben buradayım,” dersin, tutamayacağın bir söz verirsin.", to: "k4", etki: { merhamet: 1, ali_soz: true } },
{ t: "“Bilmiyorum,” dersin ve uyuyana kadar yanında oturursun.", to: "k4", etki: { adalet: 1 } }
]},

kb_kahve: { saat: "Kasım 1994", baslik: "Kahvehane", metin: [
"Akşam kahvedesin. Köyün tek kahvesi bir odadan ibaret, altı masa, bir soba, duvarda da tek kanal çeken bir televizyon var. Erkekler okey oynuyor, ya da oynuyormuş gibi yapıyor, taşlar uzun uzun masada bekliyor.",
"Seni görünce Kayaların akrabalarının oturduğu bir masa yer açıyor, çay geliyor. Konuşma sen yokmuşsun gibi devam ediyor, ya da belki tam da sen duyasın diye.",
"“Cemal cuma günü yapacakmış,” diyor biri, “namazdan sonra. Hacı Murat öyle istemiş, kan cuma günü alınırsa sevabı olurmuş.” Bir başkası gülüyor. “Sevap mı? Hacı Murat elli ikide de cuma günü almıştı, sevabı bize mi kaldı?”",
"Köşede Rıza'nın babası Osman Demirci tek başına oturuyor, önündeki çay soğumuş. Kimse ona bakmıyor, kimse onunla konuşmuyor ama kimse onu kapıya da koymuyor, kahvede herkesin hakkı vardır.",
"Osman Demirci seni görüyor, göz göze geliyorsunuz. Sonra senden bir şey beklemekten utanmış gibi bakışlarını kaçırıyor.",
"Televizyonda haberler var, başka bir yerde başka bir savaş. Kahveci sesini kısıyor."
], secenekler: [
{ t: "Kalkıp Osman Demirci'nin masasına geçersin.", to: "k4", etki: { merhamet: 1, osman_masa: true } },
{ t: "Yüksek sesle söylersin: “Bunu bilip susan herkes ortaktır.”", to: "k4", etki: { adalet: 1, kahve_cikis: true } },
{ t: "Susup dinlersin. Cuma, namazdan sonra. Bunu bilmek de bir şey.", to: "k4", etki: { cuma: true } },
{ t: "Kalkıp doğruca Hacı Murat'ın kapısına gidersin.", to: "k4", etki: { gelenek: 1, murata_gitti_erken: true } }
]},

kb_murat: { saat: "Şubat 1995", baslik: "Son Çay", metin: [
"Savcı gelmeden bir gün önce Hacı Murat seni çağırtıyor. Bir çocuk kapına gelip “Hacı dede seni bekliyor, çabuk gelsin dedi,” diyor.",
"Oda aynı oda, aynı saat, aynı boş askı, aynı loş ışık. Ama Hacı Murat değişmiş, bu kış ona on yıl eklemiş sanki. Bu sefer çayı kendisi koyamıyor, elleri titriyor. Çayı gelini koyuyor ve odadan çıkmayıp kapının yanında bekliyor. Hacı Murat eliyle git işareti yapıyor.",
"“Yarın savcıya her şeyi anlatacakmışsın,” diyor. Soru sormuyor, köyde hiçbir şey sır kalmaz.",
"“Evet,” diyorsun.",
"Uzun süre konuşmuyor. “O zaman bir şey daha anlat,” diyor sonunda. “Elli ikide babamın katili diye vurduğum adamı da anlat.” Sesi kırılıyor. “O değildi. Babamı vuran kardeşiydi, ben yanlış kardeşi vurdum. Karanlıktı, ikisi birbirine çok benzerdi, ben de on dokuz yaşındaydım. Kırk iki yıl kimseye söylemedim. Hanım öldü, ona bile söylemedim.”",
"Pencereden dışarı bakıyor. “Kan yerde kalmaz dedim. Benim döktüğüm kan kırk iki yıldır yerde duruyor. Kimse almadı, çünkü kimse bilmiyordu. Şimdi sen biliyorsun.”"
], secenekler: [
{ t: "“Bunu da söyleyeceğim,” dersin. Kırk iki yıllık bir gerçek de dosyaya girer.", to: "t3", etki: { adalet: 1, murat_itiraf: "yazdi" } },
{ t: "“Bu sizin günahınız, benim değil. Allah'a anlatın,” dersin.", to: "t3", etki: { gelenek: 1, murat_itiraf: "sakla" } },
{ t: "“Vurduğunuz adamın ailesi yaşıyor mu?” diye sorarsın.", to: "t3", etki: { merhamet: 1, murat_itiraf: "aile" } },
{ t: "Hacı Murat'ın elini tutarsın.", to: "t3", etki: { merhamet: 1, murat_itiraf: "el" } }
]},

kb_imam: { saat: "Şubat 1995", baslik: "İmam", metin: [
"Hiçbir şey anlatmamaya karar verdin ama bu kararın ağırlığını tek başına taşıyamıyorsun. Akşam namazından sonra camiye gidiyorsun.",
"İmam Nevzat Efendi altmış yaşında, köye senden beş yıl önce gelmiş. İkiniz bu köyün iki yabancısısınız, biriniz çocuklarla uğraşır, öbürünüz ölülerle. Yıllardır birbirinize saygı duyarsınız ama bir kere olsun aynı sofraya oturmadınız.",
"Caminin avlusunda, şadırvanın başında oturuyorsunuz. Ona savcıyı, susmaya karar verdiğini, nedenini anlatıyorsun.",
"İmam dinliyor. Sonra musluğu açıp avucuna su alıyor ve yere döküyor. “Ben de susuyorum biliyor musun?” diyor. “Yirmi yıldır susuyorum. Kimin kimi vurduğunu, kimin kızını kime verdiğini biliyorum. Hepsinin cenazesini kıldırıyorum ama hiçbirini savcıya söylemedim.”",
"Başını sana çeviriyor. “Ben kendime ‘Ben imamım, tanık değilim’ diyorum. Sen kendine ne diyorsun hocam?”",
"Avlu karanlık. Minarenin hoparlöründen bir cızırtı geliyor, biri kapatmayı unutmuş."
], secenekler: [
{ t: "“Ben öğretmenim, öğretmen susmaz,” deyip fikrini değiştirirsin.", to: "t3", etki: { adalet: 1, ifade: "kismi", imam_dondu: true } },
{ t: "“Ben bir yabancıyım, bu köyün kararını ben veremem,” dersin.", to: "t3", etki: { gelenek: 1 } },
{ t: "“Siz de konuşun Nevzat Efendi, birlikte konuşalım,” dersin.", to: "t3", etki: { adalet: 1, imama_teklif: true } },
{ t: "Cevap vermezsin. Abdest alıp namaza durursun, yıllardır yapmadığın bir şeyi yaparsın.", to: "t3", etki: { merhamet: 1, namaz: true } }
]},

/* ---------- SULH KOLU ---------- */
s1: { saat: "Aralık 1994", baslik: "Kızın Yerine", metin: [
"“Kız verilmez,” dedin ve avlu sustu. Ağa kaşlarını kaldırdı, Osman Demirci yere baktı. Kızını kurtardığın için minnet mi duyuyordu, yoksa onu herkesin ağzına düşürdüğün için öfke mi, yüzünden anlayamadın.",
"Hacı Murat ayağa kalkıyor. “Kız yoksa sulh da yok,” diyor. “Para bir ölünün bedeli olmaz. Kız gelirse kan karışır, kan karışınca da kan dökülmez. Bu eskiden beri böyledir, kimse kendi torununun dayısını vurmaz.”",
"Şeyh Ömer tespihini durduruyor.",
"Tam o sırada avlunun kenarından, kadınların arasından bir ses yükseliyor. Hatun bu.",
"“Ben kız istemem.”",
"Meclislerde kadın konuşmaz, herkes olduğu yerde donup kalıyor. Hatun bir adım öne çıkıyor, başörtüsü kaymış ama düzeltmiyor.",
"“Oğlum öldü diye başka bir ananın kızını mı alacağım? Selim istemezdi, ben de istemem. Kimse benim adıma kız istemesin. Benim adımı ağzınıza almayın.”",
"Hacı Murat'ın yüzü kıpkırmızı kesiliyor. Ağa, bu kadını sen konuşturmuşsun gibi sana bakıyor."
], secenekler: [
{ t: "Hatun'un yanına gidip yüksek sesle onu desteklersin.", to: "s2", etki: { merhamet: 1, hatun_destek: true } },
{ t: "Orta bir yol önerirsin. Bedel daha büyük olsun, Rıza köyden sürülsün, kız verilmesin.", to: "s2", etki: { gelenek: 1, surgun: true } },
{ t: "“Bedel de ödensin, Rıza da teslim olsun. İkisi birden,” dersin.", to: "s2", etki: { adalet: 1, ikili: true } },
{ t: "Susarsın. Söz artık Hatun'un.", to: "s2", etki: { hatuna_birakti: true } }
]},

s2: { saat: "Aralık 1994", baslik: "Yemin", metin: [
P(S("s1A"), "Hatun'un yanına geçtin. Erkekler sana öyle bir baktı ki on beş yıl bir anda silinip gitti. Hatun'un eli bir an koluna değdi, hemen çekildi."),
P(S("s1B"), "Sürgün teklifini ağa beğendi, Hacı Murat da itiraz etmedi. Rıza yaşayacak ama Karaağaç'a bir daha ayak basmayacak. Duvarın dibindeki Zehra Hanım bunu duyunca hem güldü hem ağladı, kadınlar onu tutup oturttular."),
P(S("s1C"), "Ağa güldü. “Hem devlet hem töre ha,” dedi, “hem yatsın hem ödesin.” Hacı Murat düşündü de düşündü, sonra bir kere başını salladı."),
P(S("s1D"), "Sen sustun. Hatun bekledi, seni ya da başka birini. Kimse konuşmayınca kendisi devam etti: “Bedel ödensin. Kız yok. Kan da yok.” Ağa da herkesi şaşırtarak kabul etti."),
"Bir hafta sonra cami avlusunda yemin ediliyor. Kur'an'ın üstüne iki el konuyor, Hacı Murat'ın ve Osman Demirci'nin eli. Sonra gençlerin el sıkışması gerekiyor, Cemal'le Demircilerden biri sıkışacak.",
"Köyün bütün erkekleri avluda, kadınlar duvar diplerinde, çocuklar damlarda. Şeyh Ömer Kur'an'ı yeşil bir örtünün içinden çıkarıyor. Herkes bu töreni daha önce görmüş ama yine de ilk kez görüyormuş gibi susuyor.",
"Osman Demirci elini uzatıyor. Cemal bakıyor, bir saniye, iki saniye. Damdaki çocuklardan biri aşağı bir taş düşürüyor, ses avluda kocaman çıkıyor.",
"Cemal elini sıkmıyor, dönüp avludan çıkıyor. Kapıda dönüp sana bakıyor, bir şey söyleyecek gibi.",
"Arkadan Hacı Murat'ın sesi geliyor: “Gençtir, geçer.”"
], secenekler: [
{ t: "Cemal'in peşinden gidersin.", to: "c2", etki: { cemal_pesinde: true } },
{ t: "Bırakırsın. Sulh imzalandı, gerisini büyükler halleder.", to: "s3", etki: { gelenek: 1 } },
{ t: "Hacı Murat'a gidip torununu dizginlemesini istersin.", to: "s3", etki: { gelenek: 1, murata_dedi: true } },
{ t: "Rıza'yı uyarmak için kulübeye koşarsın.", to: "c2", etki: { uyardi: true } }
]},

s3: { saat: "Ocak – Mart 1995", baslik: "Ilık Barış", metin: [
P(S("s2B"), "Cemal o gece eve dönmedi, ertesi gün döndü ve kimseyle konuşmadı. Köy rahatladı, ya da rahatlamış gibi yaptı."),
P(S("s2C"), "Hacı Murat seni dinledi. “O tüfeği ona ben verdim,” dedi. “Şimdi nasıl geri alacağımı bilmiyorum, benden de kimse geri alamamıştı.” Yine de o akşam Cemal'i odasına çağırdı. Ne konuştuklarını kimse bilmiyor ama Cemal odadan çıktığında gözleri kıpkırmızıydı."),
"Kış geçiyor ve sulh tutuyor. Rıza'nın adı anılmıyor. Ali derse dönüyor. İlk hafta kimseyle konuşmuyor, ikinci hafta teneffüste top oynamaya başlıyor, Kayaların bir çocuğuyla kavga ediyor, ertesi gün barışıyorlar.",
"Kahvede iki ailenin erkekleri aynı masaya oturmuyor ama aynı odada oturuyorlar. Düğünlerde birbirlerine davetiye gönderiyorlar ama gitmiyorlar.",
"Cemal okulu bırakıp şehre gidiyor, bir inşaatta işçi olmuş. Gitmeden önce okulun önünden geçiyor ama durmuyor. Pencereden el salladığını görüyorsun, belki sana sallamıyordu.",
"Bir mart sabahı postacı bir zarf getiriyor. İçinde bir kâğıt var ve el yazısı tanıdık. İki yıl önceki “Büyüyünce Ne Olacağım” kompozisyonu bu, senin çekmecendeydi. Nasıl onun eline geçti diye düşünürken hatırlıyorsun, o gece sobanın yanında çekmeceyi açmıştın.",
"Kâğıdın arkasına kurşun kalemle yeni bir şey eklenmiş: “Şoför olamadım hocam, inşaatta çalışıyorum. Ama katil de olmadım. Bu yeter mi?” Altında bir adres yok."
], secenekler: [
{ t: "Muhtardan adresini bulup ona uzun bir mektup yazarsın.", to: "t1", etki: { merhamet: 1, sonuc: "baris", mektup: true } },
{ t: "Şehre gidip onu bulursun.", to: "t1", etki: { merhamet: 1, sonuc: "baris", buldu: true } },
{ t: "Kâğıdı çekmeceye geri koyarsın, cevap vermezsin.", to: "t1", etki: { sonuc: "baris" } },
{ t: "Kâğıdı Hacı Murat'a götürürsün.", to: "t1", etki: { gelenek: 1, sonuc: "baris", murata_kagit: true } }
]},

/* ---------- DEVLET KOLU ---------- */
d1: { saat: "Aralık 1994", baslik: "Karakol", metin: [
"“Bu meclisin kanun önünde bir değeri yok,” dedin. Ağa yüzünü buruşturdu, Hacı Murat bir şey söylemeden kalkıp avludan çıktı ve meclis dağıldı. Minderler toplanmadan öylece kaldı.",
"Akşam karakoldasın. Karakol köyden on iki kilometre uzakta, bir tepenin üstünde, etrafı tel örgüyle çevrili. Kapıdaki nöbetçi er seni tanıyor, geçen yıl kardeşinin okul kaydı için gelmişti. “Hayırdır hocam?” diye soruyor.",
"Teğmen Ercan yirmi altı yaşında, üç ay önce gelmiş. Masasında bir harita, soğumuş bir çay, bir de annesinden gelmiş bir koli var. Koliden bir kavanoz reçel çıkmış, kapağı açık duruyor.",
"“Hocam,” diyor, “bu köylerde biz yalnızca ceset sayarız, kimse konuşmaz. Siz konuşmaya geldiyseniz ilk siz olacaksınız.” Reçel kavanozunun kapağını kapatıyor.",
P(function(d){ return d.kacirdi; }, "Rıza'nın kaçtığını biliyorsun, çünkü parayı sen verdin. Teğmene söylersen kendini de suçlamış olursun, söylemezsen borç Ali'nin üstünde kalır."),
P(function(d){ return !d.kacirdi; }, "Rıza'nın kulübesinin yerini biliyorsun. Teğmen haritayı sana doğru çeviriyor, yayla haritada bir parmak uzunluğunda."),
"“Söylediğiniz her şey tutanağa geçer,” diyor teğmen, “adınız da geçer. Köyde bunun ne demek olduğunu siz benden iyi bilirsiniz.”",
"Biliyorsun. Karaağaç'ta jandarmaya konuşan adamın adını kimse anmaz, onun yerine başka bir kelime söylenir."
], secenekler: [
{ t: function(d){ return d.kacirdi ? "Her şeyi anlatırsın: Rıza'nın kaçtığını, parayı senin verdiğini." : "Kulübenin yerini haritada gösterirsin."; }, to: "d2", etki: { adalet: 1, muhbir: true, gozalti: true } },
{ t: "Rıza'nın canı güvenceye alınırsa teslim olacağını söyleyip aracı olmayı teklif edersin.", to: "d2", etki: { adalet: 1, merhamet: 1, araci: true, gozalti: true } },
{ t: "Bilmediğini söylersin ama Ali için koruma istersin.", to: "d2", etki: { merhamet: 1, ali_koruma: true } },
{ t: "Adın tutanağa geçmesin diye Rıza'yı yarın sabah kendin getireceğini söylersin.", to: "d2", etki: { gelenek: 1, kendin_getir: true, gozalti: true } }
]},

d2: { saat: "Aralık 1994", baslik: "Muhbir", metin: [
P(S("d1A"), "Şafakta iki cip yaylaya çıktı. Rıza'yı kelepçeli indirip köyün ortasından geçirdiler, kapı aralıklarından bakan gözler sana döndü. Akşam okulun iki camı kırılmıştı, taşlardan biri sobanın borusunu yamultmuştu."),
P(S("d1B"), "Teğmen kabul etti ve yaylaya birlikte çıktınız. Rıza seni görünce ellerini kendiliğinden uzattı. Kelepçe takılırken “Hocam, sözün söz değil mi?” diye sordu. “Söz,” dedin, neyin sözünü verdiğini pek bilmeden."),
P(S("d1C"), "Teğmen not aldı. “Bir er, bir cip, bir hafta,” dedi, kaleminin kapağını dişledi. “Daha fazlasına adamım yok hocam, kusura bakmayın.”"),
P(S("d1D"), "Sabah yaylaya çıktın. Rıza'yı ikna etmen iki saat sürdü. Bir ara kulübeden kaçmaya kalktı, karda düştü, kalktı, geri döndü. Karakola birlikte yürüdünüz. Kimse görmedi ama herkes duydu."),
"Köyde rüzgâr döndü. Hacı Murat'ın kapısı sana kapalı, kahvede kimse selamını almıyor. Zehra Demirci bile yüzüne bakamıyor, oğlunu teslim ettin diye mi, yoksa kurtardın diye mi, belli değil.",
"Bir sabah okulun kapısına imzasız bir kâğıt iliştirilmiş, üstünde tek kelime yazıyor: Muhbir. Çocuklar gelmeden kâğıdı indirip cebine koyuyorsun ama çocuklar zaten biliyor. O gün sınıfın yarısı gelmiyor. Gelenlerden biri, Kayaların küçük bir kızı, sana bir elma getirmiş, masana bırakıp yerine kaçıyor.",
"Akşam Cemal okulun önünde bekliyor, gözleri kıpkırmızı.",
"“Devlet aldı onu,” diyor. “Benim kanımı devlet aldı. On sene yatar, belki sekiz. Sonra çıkacak, ben de ağabeyimin mezarının yanında her gün onu bekleyeceğim.” Biraz susuyor. “Ya da beklemem. Demircilerin bir erkeği daha var.”",
"Ali. On iki yaşında, yarın sabah dokuzda üçüncü sırada oturacak."
], secenekler: [
{ t: "Ali'yi bu gece şehre, kız kardeşinin yanına götürürsün.", to: "d3", etki: { merhamet: 1, ali_gitti: true } },
{ t: "Teğmene gidip Ali için sürekli koruma istersin.", to: "d3", etki: { adalet: 1 } },
{ t: "Cemal'i içeri alıp sabaha kadar konuşursun.", to: "d3", etki: { merhamet: 1, konustu: true } },
{ t: "Kapalı olsa da Hacı Murat'ın kapısını çalarsın.", to: "d3", etki: { gelenek: 1, murata_gitti: true } }
]},

d3: { saat: "Ocak 1995", baslik: "Okul Bahçesi", metin: [
P(S("d2A"), "Ali'yi gece yarısı otobüse bindirdin, pencereden el salladı. Zehra Hanım durakta seninle bekledi, otobüs gidince elini tutup öptü, sonra hemen bıraktı. Kimse görmedi."),
P(S("d2B"), "Teğmen yorgundu. “Bir çocuğu ne kadar koruyabilirim ki hocam?” dedi. “Bir ay mı, bir yıl mı?” Yine de bir er gönderdi. Er okulun kapısında üşüye üşüye bekledi, teneffüste çocuklar ona sigara mı istersin top mu diye sordu."),
P(S("d2C"), "Sabaha kadar konuştunuz. Cemal ağladı, sonra öfkelendi, sobaya bir tekme attı, sonra yine ağladı. Şafakta “Bilmiyorum hocam,” dedi, “ne yapacağımı bilmiyorum.” Çayını bitirdi, bardağı yıkayıp ters çevirdi."),
P(S("d2D"), "Kapı açılmadı. Arkasından Hacı Murat'ın sesi geldi: “Git öğretmen. Sen yapacağını yaptın, biz de yapacağımızı yapacağız.”"),
"Bir ocak sabahı, ikinci dersin ortasında sınıfın kapısı açılıyor. Gelen Cemal, montunun altında yine o uzun, ağır şey.",
"Pencereden karlı dağlar görünüyor, çocukların nefesi camlarda buğu olup kalmış. Sobanın üstünde çaydanlık, yanında kurusun diye bırakılmış eldivenler var.",
P(function(d){ return !d.ali_gitti; }, "Ali üçüncü sırada oturuyor. Kalemini bırakmış, kıpırdamıyor. Öbür çocuklar da donup kalmış. Biri ağlamaya başlıyor, yanındaki elini onun ağzına kapatıyor."),
P(function(d){ return d.ali_gitti; }, "Ali'nin sırası boş. Cemal sıraya bakıyor, sonra sana dönüyor. “Nerede?” diye soruyor, sesi sakin."),
"Cemal tüfeği çıkarıyor, elleri titriyor.",
"“Çekil hocam.”"
], secenekler: [
{ t: "Çekilmezsin, Cemal'le çocukların arasında durursun.", to: "t1", etki: { merhamet: 1, sonuc: "yarali" } },
{ t: "Ona “Büyüyünce Ne Olacağım”ı kelimesi kelimesine hatırlatırsın.", to: "t1", etki: { merhamet: 1, sonuc: "baris", cemal_birakti: true } },
{ t: "Pencereden kapıdaki ere bağırırsın.", to: "t1", etki: { adalet: 1, sonuc: "cemal" } },
{ t: "Cemal'i konuşturup oyalarken çocuklara arka kapıyı işaret edersin.", to: "t1", etki: { sonuc: "kan", oyaladi: true } }
]},

/* ---------- GELENEK (BERDEL) KOLU ---------- */
g1: { saat: "Aralık 1994", baslik: "Gül", metin: [
"Sen sustun, ağa da bekledi. Sonra susmanı onay sayıp başını salladı ve sulh kabul edildi. Para, iki tarla, bir de kız.",
"O gece okulun kapısı yine çalınıyor, bu sefer gelen Gül. On altı yaşında, şalını yüzüne sarmış, babasının evinden gizlice çıkmış.",
"Gül'ü en son iki yıl önce, ilkokulu bitirdiği gün görmüştün. Babası ortaokul için şehre gitmesine izin vermemişti. O gün kompozisyon defterini sana vermişti, “Hocam siz saklayın, evde yakarlar,” demişti. Defter hâlâ çekmecende, Cemal'in kompozisyonunun yanında duruyor.",
"Sobanın yanına oturmuyor, ayakta duruyor. “Hocam, siz oradaydınız ve bir şey demediniz,” diyor.",
"Sesinde suçlama yok, bir şeyi bildirir gibi söylüyor.",
"“Öğretmen olmak istiyordum, size yazmıştım. Siz de altına kırmızı kalemle ‘Olacaksın’ yazmıştınız.” Şalını biraz açıyor, yanağı soğuktan çatlamış. “Şimdi bir ölünün kardeşiyle evleneceğim, kanı temizlesin diye. Ben sabun muyum hocam?”",
"Cemal'i tanıyor, bir zamanlar aynı sınıftaydılar. “Bana hiç bakmazdı, ben de ona bakmazdım. Şimdi bir ömür birbirimize bakacağız. Bana her baktığında ağabeyini görecek.”",
"Kapının önünde bir köpek havlıyor, Gül irkilip pencereye bakıyor."
], secenekler: [
{ t: "Gül'ü bu gece şehre, kız kardeşinin yanına kaçırırsın.", to: "c1", etki: { merhamet: 2, gul_kacti: true } },
{ t: "Osman Demirci'ye gidip kızını vermemesi için yalvarırsın.", to: "g2", etki: { merhamet: 1, osmana: true } },
{ t: "Gül'e bu evliliğin kaç canı kurtaracağını anlatırsın, kendi kendine anlatır gibi.", to: "g2", etki: { gelenek: 1, ikna: true } },
{ t: "Cemal'e gidip bu evliliği isteyip istemediğini sorarsın.", to: "g2", etki: { cemale_sordu: true } }
]},

g2: { saat: "Ocak 1995", baslik: "Kına Gecesi", metin: [
P(S("g1B"), "Osman Demirci seni dinledi, başını önüne eğdi. “Hocam,” dedi, “kızımı vermezsem oğlumu verirler. Ya Rıza'yı ya Ali'yi. Sen söyle, hangisini vereyim?” Elindeki tespihin bir boncuğu kopup yere düştü, ikiniz de eğilip almadınız."),
P(S("g1C"), "Ona sulh olmazsa neler olacağını, kaç kişinin öleceğini anlattın, Ali'yi, Rıza'yı anlattın. Gül seni dinledi. “Hesabınız doğru hocam,” dedi, “ama hesapta ben yokum.” Şalını yeniden yüzüne sarıp çıktı gitti."),
P(S("g1D"), "Cemal sana baktı. “İstiyor muyum? Bana kimse sormadı ki, ona da sormadılar. İkimizi de satıyorlar hocam, birimizi kan için, öbürümüzü barış için.” Sonra öğretmeninin önünde, on yedi yaşında, bir sigara yaktı."),
"Ocak ayında kına gecesi yapılıyor. Demircilerin evinde kadınlar türkü söylüyor. Türkülerin neşeli olması lazım ama değil. Gül'ün avucuna kına yakıyorlar, Gül de avucuna bakıyor.",
"Köyün öğretmeni her düğüne çağrılır. Sen erkeklerle birlikte avluda, ateşin başındasın. İçeriden türküler geliyor, bir ara bir kahkaha kopuyor, birinin çocuğu tepsiyi devirmiş.",
"Gece yarısı Cemal seni dışarıda yakalıyor. Biraz içmiş, ağzı rakı kokuyor. “Hocam,” diyor, “yarın onu alacağım. Kimseye söylemeyin ama ben de korkuyorum. Ağabeyimin katilinin kardeşiyle her sabah uyanacağım.”",
"“Dedem zamanla alışırsın diyor. Kırk yıl önce babaannemi de böyle almışlar, başka bir kan için. O da alışmış.” Ateşe bir çubuk atıyor. “Alışmak iyi bir şey mi hocam?”"
], secenekler: [
{ t: "Yarın düğünü herkesin önünde durduracağını söylersin.", to: "g3", etki: { merhamet: 1, durduracak: true } },
{ t: "Gül'e bir kitap verirsin, içine de “Öğretmen olabilirsin, hâlâ,” diye bir not koyarsın.", to: "g3", etki: { merhamet: 1, kitap: true } },
{ t: "Hacı Murat'a gidip bunun son kez olacağına dair söz istersin.", to: "g3", etki: { gelenek: 1, son_kez: true } },
{ t: "Cemal'e “Alışırsın,” dersin. Başka ne diyebilirsin ki?", to: "g3", etki: { gelenek: 1 } }
]},

g3: { saat: "Ocak 1995", baslik: "Gelin Arabası", metin: [
P(S("g2B"), "Gül'e kitabı verdin. Gül kitabı göğsüne bastırdı, sonra sandığının en dibine, çeyizinin altına sakladı."),
P(S("g2D"), "Cemal'e “Alışırsın,” dedin. Cemal yüzüne baktı. “Sen alıştın mı hocam?” diye sordu, cevap veremedin."),
P(S("g2C"), "Hacı Murat seni dinledi, sonra kalkıp duvardaki boş tüfek askısını çividen söktü ve sana verdi. “Bunu götür,” dedi, “bu evde bir daha asılmasın.” Askının arkasında, duvarda onun büyüklüğünde açık renkli bir iz kaldı."),
"Düğün sabahı kar yağıyor. Demircilerin kapısında süslü bir minibüs bekliyor, ön camında bir ayna, bir kurdele, bir nazar boncuğu var. Davulcuyla zurnacı kasabadan gelmiş, parasını alıp çalacak ve gidecekler. Avludaki herkesten daha mutlu görünenler onlar.",
"Bütün köy orada. Hatun kalabalığın en arkasında, yüzü kapalı duruyor.",
"Gül kırmızı bir duvağın altında, iki kadının koluna girmiş, eşikte duruyor. Duvağın altından sana baktığını hissediyorsun.",
"Bir adım atıyor, ayağı minibüsün basamağında. Davul hızlanıyor.",
P(function(d){ return d.durduracak; }, "Dün gece Cemal'e düğünü durduracağını söylemiştin. Cemal kalabalığın arasından sana bakıyor.")
], secenekler: [
{ t: "Minibüsün önüne geçersin: “Bu kız gitmeyecek.”", to: "t1", etki: { merhamet: 1, sonuc: "kan", durdurdu: true } },
{ t: "Sessizce izlersin. Bu barışın bedeli bu ve ödeniyor.", to: "t1", etki: { gelenek: 1, sonuc: "baris", gelin: true } },
{ t: "Minibüse yaklaşıp Gül'ün eline kız kardeşinin adresini yazdığın bir kâğıt sıkıştırırsın, bir gün lazım olursa diye.", to: "t1", etki: { merhamet: 1, sonuc: "baris", gelin: true, adres: true } },
{ t: "Arkanı dönüp yürürsün ve o gün köyden kalkan ilk otobüse binersin.", to: "t1", etki: { sonuc: "baris", gelin: true, gitti: true } }
]},

/* ---------- CEMAL KOLU ---------- */
c1: { saat: "Gece", baslik: "Dağ Yolu", metin: [
P(S("k5D"), "Sulh meclisinden kalkıp avludan çıktın. Arkandan biri adını seslendi ama durmadın."),
P(function(d){ return d.gul_kacti; }, "Gül'ü gece yarısı otobüse bindirdin. Sabah köy uyandığında ne gelin vardı ne de sulh. Hacı Murat'ın “Demirciler sözünden döndü!” diye bağırışı bütün köyde duyuldu. Akşam da Cemal'i yaylaya çıkan patikada gördüler."),
P(function(d){ return !d.gul_kacti; }, "Cemal köyün son evini geçip patikaya saptı. Elinde bir şey yok gibiydi ama dere kenarındaki çalılığa eğilip doğrulduğunda omzunda bir tüfek vardı, oraya saklamış."),
P(function(d){ return d.silah_sende && !d.gul_kacti; }, "Ondan aldığın tüfek hâlâ battaniyelerin arasında duruyor, bu başka bir tüfek."),
"Gece soğuk, patika dar ve taşlı. Ay bulutların arkasına girip çıkıyor. Elli adım ileride Cemal'in gölgesini görüyorsun.",
"Bu patikayı iyi biliyorsun. On beş yıl önce, köye ilk geldiğin yaz çocuklarla yaylaya çıkmıştın. Selim on bir yaşındaydı, en önden gidiyordu. Bir yerde durup “Hocam, buradan bütün dünya görünür!” demişti. Dünya dediği üç köyle bir baraj gölüydü. Şimdi o yerin önünden geçiyorsun ama karanlıkta hiçbir şey görünmüyor.",
"Nefesin göğsünü yakıyor. Kırk yaşındasın, on yedi yaşında bir çocuğun peşinden dağa çıkmak için yaşlı, ona yetişmek için yavaşsın. Ayakkabının içi karla dolmuş.",
"Patika ikiye ayrılıyor. Biri kulübeye gidiyor, öbürü dolanıp kulübenin arkasına çıkıyor, oradan gidersen Cemal'den önce varabilirsin.",
"Cemal bir an durup dönüyor. Seni gördü mü, bilmiyorsun. Sonra yeniden yürümeye başlıyor."
], secenekler: [
{ t: "Bütün dağ duysun diye adını bağırırsın.", to: "c2", etki: { bagirdi: true } },
{ t: "Ne yapacağını görmek için sessizce peşinden gidersin.", to: "c2", etki: { izledi: true } },
{ t: "Ondan önce kulübeye varıp Rıza'yı uyarmak için kestirmeden koşarsın.", to: "c2", etki: { uyardi: true } },
{ t: "Geri dönüp jandarmaya haber vermeye koşarsın.", to: "c2", etki: { adalet: 1, jandarma_yolda: true } }
]},

c2: { saat: "Gece", baslik: "Çoban Kulübesi", metin: [
P(S("s2A"), "Yemin bitmeden kalkıp Cemal'in peşinden gittin, dağ yolunu koşa koşa çıktın. Kulübeye vardığında nefesin kesilmişti."),
P(S("c1A"), "Adını bağırdın, dağ da geri yolladı, Cemal, Cemal. Durdu ama dönmedi, sonra daha hızlı yürümeye başladı."),
P(S("c1B"), "Sessizce izledin. Bir ara ayağının altında bir dal kırıldı. Cemal durup dinledi, sonra yoluna devam etti."),
P(S("c1D"), "Köye doğru koştun. Yolun yarısında bir cipin farlarını gördün, kahveden biri jandarmayı çoktan aramıştı. Cipe binip geri döndünüz, er vites değiştirirken iki kere arabayı stop ettirdi."),
P(function(d){ return d.uyardi; }, "Kulübeye ondan önce vardın. Rıza uyuyordu, seni görünce yerinden fırladı. “Geliyor,” dedin. Rıza önce korktu, sonra ayakkabılarını giyip bağcıklarını acele etmeden tek tek bağladı."),
"Kulübenin önünde Cemal duruyor, tüfek omzunda, namlusu kapıya dönük. Nefesi buhar olup havaya karışıyor.",
"Ay bulutların arkasından çıkıyor ve kar her şeyi, kulübeyi, ağaçları, iki gencin yüzünü maviye boyuyor.",
"“Çık dışarı!” diye bağırıyor Cemal, sesi çatallanıyor.",
"Kapı açılıyor ve Rıza çıkıyor. Elleri boş, başı açık, karın ortasında duruyor. Ayağında annesinin ördüğü çoraplarla terlikler var.",
"Aralarında on adım var. Sen de yan tarafta, karın içinde, ikisinin de öğretmeni olarak duruyorsun."
], secenekler: [
{ t: "Aralarına girersin.", to: "c3", etki: { merhamet: 1, araya: true } },
{ t: "Annesinin ağıdını hatırlatarak Cemal'le konuşursun.", to: "c3", etki: { merhamet: 1, agit: true } },
{ t: "Rıza'ya bağırırsın: “Diz çök! Af dile!”", to: "c3", etki: { gelenek: 1, diz: true } },
{ t: "Kımıldamazsın. Ne yaparsan yap bir şey yıkılacak.", to: "c3", etki: { izledi2: true } }
]},

c3: { saat: "Gece", baslik: "Tetik", metin: [
P(S("c2A"), "Aralarına girdin ve namlu şimdi senin göğsüne dönmüş durumda. Cemal'in gözleri büyüdü. “Hocam çekil,” dedi, sesi titriyordu. Senin dizlerin de titriyordu."),
P(S("c2B"), "“Annen mezarlıkta ne dedi, duydun mu?” dedin. “Kan istemem, oğlumu isterim dedi.” Namlu bir parmak indi, sonra yine kalktı."),
P(S("c2C"), "Rıza karın içine diz çöktü, ellerini birleştirdi. “Ağabeyini ben öldürdüm,” dedi, “istemeden. Affet beni.” Cemal'in yüzü buruştu, biri ona bir şey uzatmış da tutamıyormuş gibi."),
P(S("c2D"), "Kımıldamadın. Rüzgâr kulübenin tahtalarında ıslık çalıyordu. Cemal bir an sana baktı, bir şey bekledi, gelmeyince yüzü kapandı."),
P(function(d){ return d.jandarma_yolda; }, "Aşağıdan bir motor sesi geliyor, farlar ağaçların arasından geçiyor. Cemal sesi duyuyor, tetikteki parmağı geriliyor."),
"Kar yağmaya başlıyor, iri, ağır taneler halinde. Taneler Rıza'nın saçına konuyor ve erimiyor.",
"Tam o anda aklına saçma bir şey geliyor. Cemal'in b ile d'yi ayırt ettiği gün aklına geliyor, defterini havaya kaldırışı, burnundaki kan."
], secenekler: [
{ t: "Cemal'e dönüp “Önce beni vur,” dersin. “Beni vurmadan onu vuramazsın.”", to: "t1", etki: { merhamet: 1, sonuc: "baris", cemal_birakti: true } },
{ t: "Namluya uzanırsın.", to: "t1", etki: { sonuc: "yarali" } },
{ t: "“Bu senin kararın Cemal, ben bir şey demeyeceğim,” dersin.", to: "t1", etki: function(d){ d.sonuc = (d.agit || d.diz || d.konustu) ? "baris" : "kan"; d.ozgur2 = true; if(d.sonuc === "baris") d.cemal_birakti = true; } },
{ t: "Arkanı dönüp yokuş aşağı yürürsün, arkandan ne gelirse gelsin.", to: "t1", etki: function(d){ d.sonuc = d.jandarma_yolda ? "cemal" : "kan"; d.dondu = true; } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Sabah", baslik: "Silah Sesi", metin: [
P(function(d){ return d.sonuc === "baris" && d.cemal_birakti; }, "Tüfek kara düştü. Cemal dizlerinin üstüne çöküp on yedi yaşında bir çocuk gibi ağladı. Birinin elini tuttu, Rıza'nınkini mi seninkini mi, sonradan kimse hatırlamadı. Tüfeği sen aldın, namlusu buz gibiydi, eldivenin yapıştı."),
P(function(d){ return d.sonuc === "baris" && d.gelin; }, "Minibüs köyden çıktı ve davul sustu. Kar tekerlek izlerini yavaş yavaş kapattı. Davulcu parasını sayarken zurnacıya bir şey söyledi, ikisi birden güldü."),
P(function(d){ return d.sonuc === "baris" && !d.cemal_birakti && !d.gelin; }, "Sabah köy her zamanki gibi uyandı ve kimse ölmemişti. Kadınlar çeşmede, erkekler kahvede bunu birbirlerine söylemediler bile."),
P(function(d){ return d.sonuc === "kan" && d.durdurdu; }, "Minibüsün önünden çekilmedin ve düğün dağıldı. Gül'ü evine geri götürdüler, duvağı kapıda düştü. Sulh bozulduğu için o gece Cemal yaylaya çıktı. Sabaha karşı tek bir silah sesi duyuldu ve Rıza'yı kulübenin önünde buldular."),
P(function(d){ return d.sonuc === "kan" && d.oyaladi; }, "Çocuklar arka kapıdan kaçtı, Ali de onlarla. Cemal sana baktı, tüfeği indirip gitti. Aynı gece karakolun önünde Rıza'yı nakil aracından indirirlerken tek bir silah sesi duyuldu. Cemal dağdan inmemiş, onu beklemiş."),
P(function(d){ return d.sonuc === "kan" && !d.durdurdu && !d.oyaladi; }, "Tek bir silah sesi duyuldu, dağ onu yankıladı ve sustu. Rıza karın içinde yüzüstü yatıyordu, terliklerinden biri birkaç adım ötedeydi. Cemal tüfeği bırakıp karın ortasına oturdu ve sabaha kadar kıpırdamadı."),
P(function(d){ return d.sonuc === "cemal"; }, "Jandarma yetişti. Bir uyarı, sonra ikinci bir uyarı. Cemal tüfeği indirmedi, belki de duymadı. Bir er ateş etti. Er de on dokuz yaşındaydı ve sonra kustu. Cemal'i ağabeyinin yanına gömdüler."),
P(function(d){ return d.sonuc === "yarali"; }, "Önce bir patlama sesi duydun, sonra bir sıcaklık hissettin, sonra karın kırmızıya döndüğünü gördün. Saçmalar sol omzuna girmişti. Cemal tüfeği atıp “Hocam, hocam!” diye bağırarak, ağlayarak üstüne kapandı. Kimse ölmedi, yalnızca sen kanadın."),
"Karaağaç'ta sabah oluyor, kar dinmiş.",
"Kadınlar çeşmenin başında duruyor ama su doldurmuyorlar. Erkekler kahvede ama kimse oyun oynamıyor. Çocukları evlere kapatmışlar, pencerelerde burunları cama yapışmış yüzler görünüyor."
], secenekler: [
{ t: "Doğruca Hacı Murat'ın evine gidersin.", to: "t2", etki: { gelenek: 1, murat_ev: true } },
{ t: "Demircilerin evine gidersin.", to: "t2", etki: { merhamet: 1, demirci_ev: true } },
{ t: "Ders saati geldi, okula gidip kapıyı açarsın.", to: "t2", etki: { okul: true } },
{ t: "Evine kapanırsın, kimseyi görmek istemiyorsun.", to: "t2", etki: { kapandi: true } }
]},

t2: { saat: "Sonraki günler", baslik: "Taziye", metin: [
P(S("t1A"), "Hacı Murat'ın odasına girdin. Yaşlı adam pencerenin önünde, sırtı sana dönük duruyordu. “Bu benim işimdi,” dedi, dönmeden. “Kırk iki yıl önce başladım, bitiremedim.” Pencerenin pervazını tutan eli titriyordu."),
P(S("t1B"), "Demircilerin evine gittin. Zehra Hanım sana bir sandalye verdi, Osman Demirci ayakta durdu, Ali köşedeydi. Kimse konuşmadı. Sonra Ali kalkıp sınıfta sıranın dibine oturduğu gibi senin sandalyenin yanına, yere oturdu."),
P(S("t1C"), "Okulun kapısını açıp sobayı yaktın. Dokuzda üç çocuk geldi, onda beş. Konu kesirlerdi, tahtaya bir elma çizip dörde böldün. Bir çocuk “Hocam elma eşit bölünmez ki, birinde çekirdek olur,” dedi, herkes güldü, sen de güldün."),
P(S("t1D"), "Kapını kilitleyip üç gün dışarı çıkmadın. Dördüncü gün kapının önünde üstü başka bir tabakla kapatılmış bir tabak bulgur pilavı buldun. Kimin bıraktığını bilmiyorsun. Tabağı yıkayıp kapının önüne geri koydun, ertesi gün yoktu."),
P(function(d){ return d.sonuc === "kan" || d.sonuc === "cemal"; }, "Mezarlıkta yeni bir mezar var, dut ağacının altında yeni bir ağıt yakılıyor. İki ailenin kadınları aynı ağıdın iki ucundan tutuyor. Erkekler yine mezarlığın öbür ucunda."),
P(function(d){ return d.sonuc === "baris" || d.sonuc === "yarali"; }, "Mezarlıkta yeni bir mezar yok. Yaşlılar kahvede tespih çekiyor ama kimse bitti demiyor."),
"Kasabadan bir savcı gelip ifadeni alacak. Köyde konuşan adamın adı bir daha düzgün anılmaz, konuşmayanınki ise hiç anılmaz."
], secenekler: [
{ t: "Savcıya her şeyi anlatmaya karar verirsin, meclisi, kızı, tüfeği veren eli.", to: "kb_murat", etki: { adalet: 1, ifade: "tam" } },
{ t: "Köyün yaşlılarını dışarıda bırakıp yalnızca kendi gördüğünü anlatmaya karar verirsin.", to: "t3", etki: { gelenek: 1, ifade: "kismi" } },
{ t: "Cemal'i korumak için anlatacaklarını ayarlamaya karar verirsin.", to: "t3", etki: { merhamet: 1, ifade: "koru" } },
{ t: "Hiçbir şey anlatmamaya, köyün sessizliğine katılmaya karar verirsin.", to: "kb_imam", etki: { gelenek: 1, ifade: "sessiz" } }
]},

t3: { saat: "Şubat 1995", baslik: "Savcı", metin: [
P(S("kb_muratA"), "Hacı Murat başını salladı. “Söyle,” dedi, “kırk iki yıl ağır geldi.” Savcıya anlattığında savcı kalemini bıraktı. “Bu zaman aşımına uğramış,” dedi, “ama yazacağım.” Ve yazdı. Kâtip daktiloyu durdurup sana baktı, sonra yazmaya devam etti."),
P(S("kb_muratB"), "“Allah'a anlattım,” dedi Hacı Murat, “kırk iki yıl boyunca. Cevap vermedi.” Sustun. Savcının karşısına o sırla oturdun, sır ağzına kadar gelip geri gitti."),
P(S("kb_muratC"), "“Bir kızı vardı,” dedi Hacı Murat, “şehre gitti. Yaşıyorsa altmışındadır.” Elinde bir ad vardı ama adres yoktu. Savcıya o adı da söyledin, neden söylediğini kendine bile açıklayamadın."),
P(S("kb_muratD"), "Hacı Murat'ın eli kuru, kemikli ve soğuktu ama elini bırakmadı. Gelini kapıdan bakıp geri çekildi."),
P(S("kb_imamA"), "Fikrini değiştirdin ama yarı yarıya. Savcıya yalnızca kendi gördüğünü anlattın. İfade boyunca Nevzat Efendi'nin sorusu kulağında çınlayıp durdu."),
P(S("kb_imamB"), "“Yabancı,” dedi imam ve güldü. “İkimiz de yabancıyız. Bu köy bizi o yüzden tutuyor, kimseye zararımız yok.” Musluğu kapattı ama musluk damlamaya devam etti."),
P(S("kb_imamC"), "İmam uzun süre konuşmadı. “Belki bir gün,” dedi. Ertesi gün savcı geldiğinde imam caminin kapısında duruyordu. İçeri girmedi ama gitmedi de."),
P(S("kb_imamD"), "Namaza durdun. Yıllardır eğilmediğin için rükûda belin tuttu. Secdede alnın soğuk halıya değdi. Ne okuduğunu tam hatırlamıyordun, imamın sesinin arkasından gittin."),
"Savcı otuzlarında, gözlüklü, aceleci bir adam. Öğretmenler odasında senin masana oturmuş, senin çay bardağını kenara itmiş.",
"Yanında yaşlı bir zabıt kâtibi var. Daktiloyu bir öğrenci sırasının üstüne koyup kâğıdı takıyor ve bekliyor. Bu odada yüzlerce çocuğa yazı öğrettin, şimdi senin sözlerin tuşlara basıla basıla yazılacak.",
"“Öğretmen Bey,” diyor savcı, “bu köylerde kimse konuşmaz ama siz devlet memurusunuz. Sizden beklenen başka.”",
P(function(d){ return d.ifade === "tam"; }, "Her şeyi anlattın, meclisi, ağayı, kızı, tüfeği veren eli, yemini, ağıdı. Savcı yazdırdıkça yüzü değişti. “Bu bir dosya değil, bu bir köy,” dedi sonunda. Hacı Murat'ın adı da yazıldı. Kâtip adı yazarken bir harfi yanlış bastı, silmek için daksil aradı."),
P(function(d){ return d.ifade === "kismi"; }, "Yalnızca kendi gördüğünü anlattın. Meclisi anlatmadın, ağanın, imamın, yaşlıların adını vermedin. Savcı bir şeyin eksik olduğunu sezdi, gözlüğünün üstünden baktı ama sormadı."),
P(function(d){ return d.ifade === "koru"; }, "Dikkatle anlattın. Cemal'in korktuğunu, dedesinin baskısını, ağabeyine ne kadar düşkün olduğunu anlattın. Hepsi doğruydu ama sen onları bir sıraya dizdin ve sıra bir hikâyeye dönüştü. Savcı “Çocuğu çok seviyorsunuz,” dedi, cevap vermedin."),
P(function(d){ return d.ifade === "sessiz"; }, "“Hatırlamıyorum,” dedin, “görmedim.” Savcı kalemini bıraktı. “Siz de mi?” dedi. Kâtip kâğıdı daktilodan çıkarıp katladı, yazacak bir şey kalmamıştı."),
P(function(d){ return d.muhbir; }, "Dosyadaki sayfalardan biri senin adını taşıyor, Rıza'nın yerini gösteren adam olarak. Savcı o sayfaya dokunuyor. “Size teşekkür etmek isterdim,” diyor, “ama köydeki adınızı da duydum. Geçmiş olsun.”"),
"Savcı gidiyor. Kalemin masada yerinden oynamış, alıp yerine koyuyorsun ama tam eskisi gibi olmuyor."
], secenekler: [
{ t: "Akşam Hacı Murat'a gidip ne anlattığını yüzüne söylersin.", to: "t4", etki: { adalet: 1 } },
{ t: "İmama gidip cuma günü sulh hakkında konuşmasını istersin.", to: "t4", etki: { gelenek: 1 } },
{ t: "Hatun'u ziyaret edersin.", to: "t4", etki: { merhamet: 1, hatun_ziyaret: true } },
{ t: "Kimseye bir şey söylemeden ertesi günün dersini hazırlarsın.", to: "t4" }
]},

t4: { saat: "Mart 1995", baslik: "Boş Sıralar", metin: [
P(S("t3A"), "Hacı Murat seni dinledi. “Doğru yaptın öğretmen,” dedi, bunu hiç beklemiyordun. “Ben de elli ikide babamın katilini mahkemeye bırakmalıydım ama bırakmadım.” Sonra torunlarından birini çağırıp sana çay getirtti."),
P(S("t3B"), "İmam seni dinledi. “Hutbeyi müftülük yazar,” dedi. Ama cuma günü hutbeden sonra cemaatin önünde kısa bir şey söyledi: “Kim bir cana kıyarsa...” Devamını herkes biliyordu, kimse başını kaldırmadı."),
P(S("t3C"), "Hatun seni avluda karşılayıp çay koydu. Selim'in bir fotoğrafını gösterdi, sonra askerde, şapkası yamuk çekilmiş bir başkasını. “Herkes intikamdan konuşuyor,” dedi, “kimse Selim'den konuşmuyor. Sen anlat, sınıfta nasıldı?” Anlattın. Bir keresinde sobaya kestane koyup patlatmış, bütün sınıf sıraların altına girmişti. Hatun ağlaya ağlaya güldü."),
P(S("t3D"), "Kesirler, ikinci ünite. Dersi hazırlarken defterin kenarına iki tarla çizdin, arasından bir ark geçirdin, sonra karalayıp yerine bir pasta çizdin."),
"Bahar geliyor. Kar dağın tepesine çekilmiş, dere coşmuş, söğütler yeşermiş. Pencereden Kayaların ve Demircilerin tarlaları görünüyor, aralarından su arkı geçiyor. Bahar suyu ikisine de eşit akıyor.",
"Sınıfta boş sıralar var.",
P(function(d){ return d.sonuc === "cemal"; }, "Cemal'in iki yıl önce oturduğu sıraya kimse oturmuyor, çocuklar sıranın etrafından dolanıp geçiyor. Bir gün biri üstüne bir kır çiçeği bırakmış."),
P(function(d){ return d.ali_gitti; }, "Ali'nin sırası boş. Ali şehirde, senin kız kardeşinin evinde kalıyor, başka bir okula gidiyor. Bir mektup yazdı: “Hocam burada kar yağmıyor. Herkes bana köylü diyor, ben de onlara şehirli diyorum.”"),
P(function(d){ return d.gelin; }, "Gül'ün sekiz yaşındaki kardeşi ablasının bir zamanlar oturduğu sırada oturuyor. Defterinin kapağına ablasının adını yazmış, Gül Kaya. Soyadı değişmiş."),
"Teneffüste dokuz yaşında bir kız yanına geliyor, ne Kayalardan ne Demircilerden. Burnunu silip soruyor: “Hocam, kan yerde kalır mı?”"
], secenekler: [
{ t: "“Kalmalı,” dersin. “Ancak yerde kalırsa biter.”", to: "t5", etki: { merhamet: 1, cevap: "kalmali" } },
{ t: "“Kalmaz, ama onu mahkeme alır, insan değil,” dersin.", to: "t5", etki: { adalet: 1, cevap: "mahkeme" } },
{ t: "“Büyüklerine sor,” dersin. Bu köyün cevabını sen veremezsin.", to: "t5", etki: { gelenek: 1, cevap: "buyuk" } },
{ t: "Bir şey demeden onu tahtaya kaldırır, “barış” kelimesini hecelemesini istersin.", to: "t5", etki: { cevap: "hece" } }
]},

t5: { saat: "Haziran 1995", baslik: "Tayin", metin: [
P(S("t4A"), "“Kalmalı,” demiştin. Kız biraz düşündü. “Kalıp kalmayacağına kim karar veriyor?” diye sordu ve cevap beklemeden ip atlamaya koştu."),
P(S("t4B"), "“Mahkeme alır,” demiştin. Kız düşündü. “Mahkeme bizim köye gelir mi?” diye sordu, cevap veremedin."),
P(S("t4C"), "“Büyüklerine sor,” demiştin. Ertesi gün kız gelip “Dedem kalmaz dedi,” dedi. Sonra çantasından bir şeker çıkarıp sana verdi, ikisini aynı anda söylemiş gibi."),
P(S("t4D"), "Kızı tahtaya kaldırdın. “Ba-rış,” diye heceleyip yazdı. i'nin noktasını unuttu, sonra geri dönüp noktayı koydu. Sınıf güldü, kız da güldü."),
"Haziran geliyor, karne günü. Çocuklar karnelerini alıp koşarak çıkıyor. Son çocuk da gidince sınıfı süpürüp sıraları siliyorsun. Tahtanın köşesinde silmeyi unuttuğun bir kelime kalmış, bir çocuğun yuvarlak harfleriyle “Barış” yazıyor. Silmiyorsun.",
"Masanda Milli Eğitim'den gelmiş bir zarf duruyor. Şehre tayin talebin kabul edilmiş.",
"Böyle bir talepte bulunduğunu unutmuştun. Aralıkta bir gece sobanın yanında, ellerin titrerken bir dilekçe yazmıştın, göndermediğini sanıyordun. Muhtar sana sormadan postaya vermiş.",
"Avlunun dibinde Hatun'un Selim'in kırkında diktiği dut fidanı dört yaprak vermiş.",
"Kalırsan bir kış daha geçireceksin. Gidersen bu köy bir öğretmen daha kaybedecek ve kimse şaşırmayacak. Muhtar yeni öğretmene de aynı lojmanı gösterecek, sobanın çekmediğini de söylemeyecek."
], secenekler: [
{ t: "Kalırsın ve zarfı yırtarsın.", to: "ks", etki: { kaldi: true } },
{ t: "Gidersin, eşyalarını toplarsın.", to: "ks", etki: { gitti: true } },
{ t: "Kalırsın ve gelecek yıl okula bir şey eklersin, yaşlılar için akşamları okuma dersi.", to: "ks", etki: { kaldi: true, merhamet: 1, aksam: true } },
{ t: "Gitmeden önce bir gün biri okusun diye bu kışı bir deftere yazarsın.", to: "ks", etki: { gitti: true, yazdi: true } }
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
P(S("t5A"), "Zarfı yırtıp parçalarını sobaya atmıştın."),
P(S("t5B"), "Eşyalarını toplamıştın, iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son bir kez baktın."),
P(S("t5C"), "Kalıp akşamları okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi, biri Hatun'du. Öğrendiği ilk kelime “Selim” oldu."),
P(S("t5D"), "Gitmeden önce sobanın başında üç gecede kırk sayfalık bir defter doldurmuştun."),
"Barış tuttu, kimse kimseyi vurmadı. Ertesi yıl Hacı Murat öldü, cenazesinde iki aile yan yana namaz kıldı. Köyde buna “Gül'ün barışı” diyorlar ama Gül'e kimse sormadı.",
P(function(d){ return d.adres; }, "Dört yıl sonra şehirden, kız kardeşinin adresinden bir mektup geldi, el yazısı Gül'ündü. “Hocam, buradayım, iki çocukla. Gece okuluna yazıldım. Kâğıdı saklamıştım.” Altına mavi tükenmezle bir kelime daha yazmıştı: “Olacağım.”"),
P(function(d){ return !d.adres; }, "Yıllar sonra Gül'ü köyün çeşmesinde gördün, yanında iki çocuk vardı. Biri durmadan ayakkabısının bağcığını çözüyor, Gül de her seferinde eğilip bağlıyordu. Sana bakıp başıyla selam verdi, bir şey söylemedi, kovasını doldurup gitti."),
"Bazı geceler o sabahı düşünüyorsun, minibüsün basamağını, davulun hızlanmasını, duvağın altından gelen o bakışı. Duvağın altında nasıl bir yüz vardı, hiç göremedin."
]},

son_yabanci: { son: true, baslik: "Yabancı", metin: [
P(S("t5A"), "Zarfı yırtıp parçalarını sobaya atmıştın."),
P(S("t5B"), "Eşyalarını toplamıştın, iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son bir kez baktın."),
P(S("t5C"), "Kalıp akşamları okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi, biri Hatun'du. Öğrendiği ilk kelime “Selim” oldu."),
P(S("t5D"), "Gitmeden önce sobanın başında üç gecede kırk sayfalık bir defter doldurmuştun."),
"Şehre döndün ve bir ortaokulda Türkçe öğretmeni oldun. Kalabalık sınıflar, zil sesleri, adını bilmediğin öğretmenler arasında çalışıyorsun.",
"Burada kimse kan davası sormuyor. Öğrencilerin derdi sınavlar, futbol, bir kızın kime baktığı. Bir gün iki çocuk tuvalette kavga ediyor. İkisini odana çağırıp konuşuyorsunuz, el sıkışıyorlar. Çıkarken biri ötekine omuz atıyor. Gülüyorsun, sonra gülmeyi bırakıyorsun.",
P(function(d){ return d.yazdi; }, "Yazdığın defter çekmecende duruyor. Bir yayınevine göndermiştin, “fazla karanlık” diye geri çevirdiler. Defteri Cemal'in kompozisyonunun yanına, çekmeceye geri koydun."),
P(function(d){ return d.gelin; }, "Gül'ün düğün sabahı arkanı dönüp yürüdüğün yolu bazen rüyanda yürüyorsun. Rüyada dönüp bakıyorsun ama uyanınca o gün bakmadığını hatırlıyorsun."),
"Karaağaç'tan pek haber almıyorsun. Bir bayram Ali'den bir kartpostal geldi: “Hocam öğretmen oldum. Köyde değil ama oldum. Sobası çeken bir okulda.”"
]},

son_dongu: { son: true, baslik: "Döngü", metin: [
P(S("t5A"), "Zarfı yırtıp parçalarını sobaya atmıştın."),
P(S("t5B"), "Eşyalarını toplamıştın, iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son bir kez baktın."),
P(S("t5C"), "Kalıp akşamları okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi, biri Hatun'du. Öğrendiği ilk kelime “Selim” oldu."),
P(S("t5D"), "Gitmeden önce sobanın başında üç gecede kırk sayfalık bir defter doldurmuştun."),
P(function(d){ return d.sonuc === "kan"; }, "Cemal on iki yıl ceza aldı. Hacı Murat mahkemede başını dik tuttu, Demirciler yas tuttu. Yasın içinde de kimse yüksek sesle söylemeden bir söz büyüdü: Demircilerin bir erkeği daha var."),
P(function(d){ return d.sonuc === "cemal"; }, "Cemal'i bir er vurdu. Köy, devlet bir Kaya'yı öldürdü dedi. Demirciler rahatladı, sonra rahatladıkları için korktular. Hacı Murat'ın evinde boş bir tüfek askısı, mezarlıkta iki taş kaldı. Bir de Kayaların, yaşları Cemal'inkinin altında, üç erkek torunu."),
"Bir sonbahar okulun kapısına ilk gününde yedi yaşında bir oğlan geliyor, annesi elinden tutmuş. “Kayaların torunu,” diyor annesi, “Selim'in kardeşinin oğlu.” Çocuğun adı Selim.",
"Çocuğa pencerenin yanındaki, Cemal'in eskiden oturduğu sırayı gösteriyorsun. Sonra fikrini değiştirip öndeki sırayı gösteriyorsun. Çocuk ikisi arasındaki farkı bilmeden oturuyor, çantasından yeni kalemlerini çıkarıp sıraya diziyor."
]},

son_muhbir: { son: true, baslik: "Muhbir", metin: [
P(S("t5A"), "Zarfı yırtıp parçalarını sobaya atmıştın."),
P(S("t5B"), "Eşyalarını toplamıştın, iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son bir kez baktın."),
P(S("t5C"), "Kalıp akşamları okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi, biri Hatun'du. Öğrendiği ilk kelime “Selim” oldu."),
P(S("t5D"), "Gitmeden önce sobanın başında üç gecede kırk sayfalık bir defter doldurmuştun."),
"Rıza yedi yıl yattı. Mahkeme küreği de kayayı da tarttı, kasten öldürme demedi, yedi yıl verdi. Hacı Murat'a göre bu hiçbir şeydi, Zehra Hanım'a göre bir ömür.",
"Köyde adın değişti, kahvede selam veren yok. Çocuklar okula geliyor, çünkü başka okul yok, ama veli toplantısına kimse gelmiyor. Bir gün sobanın odununu kimin getirmediğini sordun. Kimse cevap vermedi ama ertesi gün odun kapındaydı.",
"Bir akşam Zehra Hanım okulun önüne geliyor, elinde bir tabak börek var. “Oğlum yaşıyor,” diyor. “İçeride ama yaşıyor. Bunu sana kimse söylemeyecek, ben söylüyorum.” Tabağı bırakıp hızla gidiyor, köşeyi dönmeden önce iki yanına bakıyor.",
"Yıllar sonra Rıza cezaevinden çıktığında köye dönmedi. Sana tek cümlelik bir mektup yazdı: “Hocam, kaza mıydı cinayet mi, mahkeme karar verdi ama ben hâlâ bilmiyorum.” Mektubun arkasına cezaevinde öğrendiği bir şeyi çizmişti, akrebi yelkovanı yerinde ama rakamları eksik bir saat."
]},

son_zincir: { son: true, baslik: "Kırılan Zincir", metin: [
P(S("t5A"), "Zarfı yırtıp parçalarını sobaya atmıştın."),
P(S("t5B"), "Eşyalarını toplamıştın, iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son bir kez baktın."),
P(S("t5C"), "Kalıp akşamları okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi, biri Hatun'du. Öğrendiği ilk kelime “Selim” oldu."),
P(S("t5D"), "Gitmeden önce sobanın başında üç gecede kırk sayfalık bir defter doldurmuştun."),
"Kimse ölmedi. Tüfek senin dolabına girdi ve orada kaldı, bir gün jandarmaya teslim ettin. Teğmen tutanağa “sahipsiz silah” yazdı.",
P(function(d){ return d.sonuc === "yarali"; }, "Sol omzunda saçma izleri kaldı, kışın da, havalar nemlenince de sızlıyor. Cemal her bayram arıyor. Bir keresinde telefonu kapatmadan önce “Hocam omzun nasıl?” diye sordu. “Yağmur yağacak,” dedin, güldü."),
P(function(d){ return d.sonuc !== "yarali"; }, "Cemal askere gitti, döndü, evlendi. İlk çocuğu oğlan olunca adını sana sordu. “Selim koyma,” dedin. Adını Doğan koydu. Köyde şimdi iki Doğan var, biri de Demircilerde."),
P(function(d){ return d.hatun_ziyaret || d.hatun_destek || d.hatun; }, "Hatun her bayram okula bir tabak irmik helvası gönderiyor, üstünde not yok. Tabağı her seferinde yıkayıp geri gönderiyorsun. Bir keresinde tabağın içine bir kalem koydun. Bir sonraki bayram helvanın yanında o kalem, ucu açılmış olarak geri geldi."),
"Bir bahar yaylaya çıkıp Selim'in “Buradan bütün dünya görünür” dediği yere oturuyorsun. Üç köy, bir baraj gölü görünüyor. Aşağıda iki tarla, aralarında ark, su akıyor."
]},

son_kagit: { son: true, baslik: "Kâğıt Barış", metin: [
P(S("t5A"), "Zarfı yırtıp parçalarını sobaya atmıştın."),
P(S("t5B"), "Eşyalarını toplamıştın, iki bavul, bir koli kitap, bir de duvardaki harita. Minibüsün camından okulun çatısına son bir kez baktın."),
P(S("t5C"), "Kalıp akşamları okuma dersi açmıştın. İlk akşam üç yaşlı kadın geldi, biri Hatun'du. Öğrendiği ilk kelime “Selim” oldu."),
P(S("t5D"), "Gitmeden önce sobanın başında üç gecede kırk sayfalık bir defter doldurmuştun."),
"Barış tuttu, kâğıt üstünde. Kur'an'ın üstünde iki el, bir yeminle tuttu.",
"Kayalarla Demirciler aynı kahvede oturmuyor, birbirlerini düğünlere çağırmıyorlar. Çocuklar teneffüste kimse söylemeden ayrı köşelerde oynuyor.",
"Hacı Murat öldü, cenazesinde Demircilerden kimse yoktu. Osman Demirci öldü, onun cenazesinde de Kayalardan kimse yoktu.",
"Her ilkbahar arkın suyu açılırken köyün erkekleri tarlanın kenarında toplanıp suyun hangi tarafa ne kadar aktığına bakıyor. Kimse bir şey söylemiyor. Sen de gidip bakıyorsun. Su iki tarafa da akıyor, erkekler dağılıyor ve bir yıl daha geçiyor."
]}

},

ayna: function(d){
  var out = [];
  var a = d.adalet, g = d.gelenek, m = d.merhamet;
  if(m >= a && m >= g) out.push("Bu kış çoğu zaman bir annenin ağıdına, bir çocuğun korkusuna, bir kızın sesine kulak verdin.");
  else if(a >= g) out.push("Bu kış çoğu zaman kanuna, devlete, mahkemeye güvendin.");
  else out.push("Bu kış çoğu zaman köyün kendi yollarına, meclise, sulha, yaşlıların sözüne uydun.");
  if(d.sustu) out.push("Meclisin en çetin anında sustun.");
  if(d.muhbir) out.push("Jandarmaya konuştun ve köydeki adın değişti.");
  if(d.dondu) out.push("Dağda, son anda arkanı döndün.");
  if(d.gelin) out.push("Bir kızın bir barışa bedel olmasına ses çıkarmadın.");
  if(d.gul_kacti || d.durdurdu) out.push("Bir kızın bedel olmasını engelledin, bunun da bir bedeli oldu.");
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
