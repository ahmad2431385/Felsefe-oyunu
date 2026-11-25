(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "son-ders",
baslik: "Son Ders",
dunya: "Gerçek dünya",
kategoriler: ["Sağlık ve Tıp"],
giris: "İstanbul, Cihangir. Sen bir palyatif bakım hekimisin ve yeni hastan otuz yıl önce sana tıp etiği dersi vermiş olan hocan. Artık ne hareket edebiliyor ne konuşabiliyor, yalnızca gözleriyle bir ekrandaki harflere bakarak yazabiliyor. İlk ziyaretinde senden bir şey istiyor ve Türkiye'de bu bir suç. Bu hikâye, yasayla vicdanın, merhametle kişinin kendi kararının arasında bir öğrencinin hocasına verebileceği son cevabı anlatıyor.",
kavramlar: ["Ölme hakkı", "Yasa ve vicdan", "Acının anlamı", "Kilitli zihin"],
ozet: "Otuz yıl önce sana tıp etiği dersi veren hocan şimdi yalnızca gözleriyle konuşabiliyor. Sen onun palyatif bakım hekimisin ve senden ölmesine yardım etmeni istiyor. Türkiye'de bu bir suç.",
baslangic: "a1",
durum: { yasa: 0, merhamet: 0, ozerklik: 0 },

sahneler: {

a1: { saat: "Ekim", baslik: "Göz Klavyesi", metin: [
"Cihangir'de, yokuşun ortasında eski bir apartmanın üçüncü katına çıkıyorsun. Merdivenler kedi maması ve rutubet kokuyor, ikinci katın kapısının önünde bir çift çamurlu bot duruyor. Kapıyı saçını bir kurşunkalemle tutturmuş otuzlarında bir kadın açıyor, hastanın yeğeni Hande. “Hoş geldiniz Selçuk Bey,” diyor, “teyzem sabahtan beri saate bakıyor.”",
"Adın Selçuk, elli iki yaşındasın, palyatif bakım uzmanısın. Çantanda tansiyon aleti, morfin reçeteleri, bir de kızının dün arabada unuttuğu bir saç tokası var.",
"Salonun duvarları tavana kadar kitap dolu, Yunanca, Almanca, Fransızca sırtlar görünüyor, bazı rafların önünde ikinci bir sıra var. Pencerenin önünde bir hastane yatağı duruyor. Yatakta yetmiş bir yaşındaki emekli felsefe profesörü Prof. Dr. Nevin Arıkan yatıyor. Üç yıldır ALS hastası. Kollarını, bacaklarını, dilini, yutkunmasını kaybetmiş. Geceleri maskeyle nefes alıyor, midesindeki bir tüple besleniyor.",
"Ama gözleri duruyor. Yatağın önündeki bir askıda bir tablet ve gözlerinin hareketini okuyan bir kamera var. Nevin Hoca bir harfe bakıp bekliyor, harf seçiliyor.",
"Mekanik bir kadın sesi konuşmaya başlıyor:",
"“Merhaba Selçuk. Tıp fakültesi, 1993. Tıp etiği seçmeli dersi. Arka sırada otururdun. Final ödevin ötanazi üzerineydi, karşı yazmıştın. İyi bir ödevdi, B artı verdim.”",
"Bu cümle dört dakika sürdü. Sen o dört dakikada amfinin tahta sıralarını, birinin sıranın üstüne pergelle kazıdığı “Gülay” yazısını, B artıyı görünce koridorda arkadaşına nasıl söylendiğini hatırladın."
], secenekler: [
{ t: "Gülümseyerek “Hâlâ A hak ettiğimi düşünüyorum hocam,” dersin.", to: "a2", etki: { merhamet: 1, sakalastin: true } },
{ t: "Ciddi ve saygılı bir sesle “Sizi hatırlıyorum hocam,” dersin.", to: "a2", etki: { yasa: 1 } },
{ t: "Bir şey demeden yatağın yanına oturup ekrana bakarsın, onun hızında.", to: "a2", etki: { ozerklik: 1, sabir: true } },
{ t: "“Ödevimde ne yazdığımı hatırlıyor musunuz?” diye sorarsın.", to: "a2", etki: { odev: true } }
]},

a2: { saat: "Ekim", baslik: "İstek", metin: [
P(S("a1A"), "Ekranda harfler yavaş yavaş belirdi: “Hâlâ B artı.” Sonra: “Ama gülümsemen A.” Mutfakta Hande bir tencere kapağı düşürdü, sonra kendi kendine güldü."),
P(S("a1B"), "Ekranda şu yazdı: “Saygıyı sevmezdim, hâlâ da sevmem. Otur.”"),
P(S("a1C"), "Yanına oturup her harfi onunla birlikte bekledin. Bir yerde durup sana baktı, sonra yazdı: “Kimse benim hızımda beklemiyor. Herkes cümlemi benim yerime bitiriyor, genelde de yanlış bitiriyor.”"),
P(S("a1D"), "Ekranda şu yazdı: “Hayatın kutsallığı, kaygan zemin, hekim iyileştirir. Üç argüman, üçü de kitaptan.” Durdu. “Yirmi iki yaşında kimsenin kendi argümanı olmaz. Benim de yoktu.”"),
"Onu muayene ediyorsun. Akciğer sesleri zayıf, maske olmadan oksijeni düşüyor. Göz kaslarında da hafif bir yavaşlama var, şimdilik.",
"Steteskobu çantana koyarken Nevin Hoca ekrana dönüp uzun bir cümle yazmaya başlıyor, dakikalarca sürüyor. Hande mutfaktan çıkıp elinde bir bulaşık beziyle kapının eşiğinde duruyor, ne yazılacağını biliyor gibi.",
"“Selçuk, senden bir şey isteyeceğim. Bunu o ödevin karşı tezi say. Ölmemde bana yardım et.”",
"Mekanik ses bunu hava durumu okur gibi söylüyor ama gözleri öyle bakmıyor."
], secenekler: [
{ t: "“Yapamam hocam, bu bir suç ve ben hekimim,” dersin.", to: "a3", etki: { yasa: 2, ret: true } },
{ t: "“Neden şimdi?” diye sorarsın.", to: "x_neden", etki: { ozerklik: 1 } },
{ t: "“Düşünmem gerek,” dersin.", to: "a3", etki: { dusun: true } },
{ t: "“O ödevdeki argümanları hâlâ savunuyorum hocam, tartışalım,” dersin.", to: "x_tartisma", etki: { yasa: 1, tartisma: true } }
]},

x_neden: { saat: "Ekim", baslik: "Kutu", metin: [
"Cevap uzun sürecek. Nevin Hoca Hande'ye bir bakış atıyor, Hande iki çay getirip mutfağa çekiliyor. Senin çayının tabağına sormadan iki küp şeker koymuş.",
"Cevap yirmi dakika sürüyor.",
"“Ağrım yok. Morfin işe yarıyor, bunu bil. Herkes ağrıdan sanıyor ama ağrıdan değil.”",
"“Kırk yıl konuştum Selçuk. Amfide, konferanslarda, bu salonda, mutfakta Hande'nin annesiyle kavga ederek konuştum. Şimdi bir göz kapağından ibaretim. Gözlerim de gidiyor. Nörolog söyledi, sen de bugün fark ettin, yüzünden anladım.”",
"“Gözlerim gidince bir zihin kalacak. Düşünen, duyan ama hiçbir şeyi gösteremeyen bir zihin. Herkes artık orada olmadığımı sanacak ama ben orada olacağım, belki yıllarca. Biri yanımda saçma bir şey söyleyecek ve ben düzeltemeyeceğim.”",
"“Ölümden korkmuyorum. O kutudan korkuyorum.”",
"Hande mutfak kapısında elinde bir bardakla kıpırdamadan duruyor."
], secenekler: [
{ t: "“Gözleriniz gidince başka yollar da var hocam, beyin-bilgisayar arayüzleri...” dersin.", to: "a3", etki: { yasa: 1, teknoloji: true } },
{ t: "“Anlıyorum,” dersin.", to: "a3", etki: { merhamet: 1 } },
{ t: "“Bu kararı ne zaman verdiniz?” diye sorarsın.", to: "a3", etki: { ozerklik: 1, ne_zaman: true } },
{ t: "Bir cevap bulamazsın, çayın soğuyor.", to: "a3", etki: { merhamet: 1 } }
]},

x_tartisma: { saat: "Ekim", baslik: "Seminer", metin: [
"“Hayatın kutsallığı,” diyorsun. “İnsan hayatı kişinin kendisinin bile sonlandıramayacağı bir değer taşır, hekim de bunun bekçisidir.”",
"Nevin Hoca'nın gözleri parlıyor, amfide iyi bir itiraz duyduğunda yaptığı gibi. Bunu hatırlıyorsun, böyle anlarda kaşının biri kalkardı. Kaşı artık kalkmıyor.",
"Ekrana kendi ölçüsünde hızlı sayılacak bir sürede yazıyor:",
"“Kutsal olan hayat mı, yaşayan mı? Kime göre kutsal?”",
"“Kaygan zemin,” diyorsun. “Bugün siz, yarın yaşlılar, öbür gün engelliler. Kapı bir açılınca kimin geçeceğini kontrol edemeyiz.”",
"Uzun bir süre bekliyorsun.",
"“Doğru, edemeyiz. Ama kapıyı kapalı tutarak bir şeyi kontrol ediyoruz, bana ne olacağını. Ben zeminde kaymıyorum Selçuk, ben zaten dipteyim.”",
"Sonra bir şey daha yazıyor:",
"“O ödevi hatırlıyorum. İyi bir ödevdi ama içinde kimsenin bedeni yoktu.”"
], secenekler: [
{ t: "“Haklısınız hocam, bedeni olmayan bir argüman yarımdır,” dersin.", to: "a3", etki: { ozerklik: 1, kabul_argüman: true } },
{ t: "“Ama benim bir bedenim var hocam, sizi kendi elimle öldüremem,” dersin.", to: "a3", etki: { yasa: 1, beden: true } },
{ t: "Ona iyi geldiğini görüyorsun, saatlerce tartışmaya devam edersin.", to: "a3", etki: { merhamet: 1, seminer: true } },
{ t: "Susup dinlersin.", to: "a3", etki: { merhamet: 1 } }
]},

a3: { saat: "Kasım", baslik: "Hande", metin: [
P(S("x_nedenB"), "“Anlıyorum,” dedin. Nevin Hoca bir kere göz kırptı. Ekranda “Anlamıyorsun ama iyi denedin,” yazdı."),
P(S("x_nedenD"), "Bir şey diyemedin, çay soğudu. Hande bardakları topladı, seninki dolu duruyordu, şekerler erimemişti."),
P(S("x_tartismaA"), "“Bedeni olmayan bir argüman yarımdır,” dedin. Ekranda tek bir kelime belirdi: “Aferin.” Otuz yıl gecikmiş bir A'ydı bu."),
P(S("x_tartismaB"), "“Kendi elimle öldüremem,” dedin. Ekranda “Öldürmeni istemiyorum, bırakmanı istiyorum. Bütün tartışma bu farkta,” yazdı."),
P(S("x_tartismaD"), "Sustun. Nevin Hoca bir süre daha yazdı, Hume'dan bahsetti, sonra bir şaka yaptı, sonra yine Hume'a döndü. Sonra gözleri yoruldu ve kapandı. Sen hâlâ dinliyordun."),
P(S("a2A"), "Ekranda şu yazdı: “Biliyorum. Herkes öyle söylüyor ama sen bunu yüzüme söyledin, fark bu.” Sonra gözlerini kapattı."),
P(S("a2C"), "Ekranda şu yazdı: “Düşün ama çok uzun düşünme. Gözlerim seni beklemeyebilir.”"),
P(S("x_nedenA"), "“Okudum,” diye yazdı. “Elektrotlar, implantlar. Belki. Kutu bir pencere kazanır ama yine kutu olarak kalır.”"),
P(S("x_nedenC"), "Ekranda şu yazdı: “Bir yıl önce, ellerim gidince. Sana o zaman sormadım, çünkü bir yılım vardı.”"),
P(S("x_tartismaC"), "Üç saat tartıştınız, Hande iki kere çayları tazeledi. Bir yerde Nevin Hoca'nın gözleri kaydı, ekranda anlamsız harfler belirdi, “kkantt.” Sonra toparlandı. En sonunda şunu yazdı: “Uzun zamandır böyle bir akşam geçirmemiştim. Fikrim değişmedi ama teşekkür ederim.”"),
"Birkaç hafta sonra, ikinci ziyaretinde Hande seni kapıda yakalayıp mutfağa çekiyor ve kapıyı kapatıyor. Tezgâhta kurusun diye bir havlunun üstüne yıkanmış şırıngalar dizilmiş.",
"Otuz dört yaşında, iki yıldır teyzesine bakıyor. İşini bırakmış, kendi evini kiraya vermiş, salonun köşesindeki çekyatta uyuyor. Gözlerinin altı mosmor.",
"“Selçuk Bey,” diyor alçak sesle, “bunu kimseye söylemedim. Ben de ölmesini istiyorum.”",
"Bulaşık bezini katlayıp açıyor.",
"“Onun için mi, kendim için mi, bilmiyorum. Bazı geceler uyanıp maskenin sesini dinliyorum ve bir saniye, bir saniyecik dursun istiyorum. Sonra kalkıp maskenin hortumunu kontrol ediyorum. Ben canavar mıyım?”"
], secenekler: [
{ t: "“Hayır, yalnızca yorgunsunuz,” dersin.", to: "sd_balkon", etki: { merhamet: 1, defne_teselli: true } },
{ t: "“Bu duygu teyzenizin kararına karışmamalı,” dersin.", to: "a4", etki: { ozerklik: 1, ayir: true } },
{ t: "Hemen ona bir bakım destek ekibi ve bir psikolog ayarlarsın.", to: "a4", etki: { yasa: 1, destek: true } },
{ t: "“Teyzeniz bunu biliyor mu?” diye sorarsın.", to: "sd_iki_kadin", etki: { ozerklik: 1, teyze_bilir: true } }
]},

a4: { saat: "Kasım", baslik: "Etik Kurul", metin: [
P(S("sd_balkonA"), "“Editör,” dedi Hande, kelimeyi ağzında denedi. Bir an yüzünde iki yıl önceki kadın göründü. Sonra içeri girip teyzesinin tabletini düzeltti."),
P(S("sd_balkonC"), "Hande içeri girip teyzesine sordu. Cevap yarım saat sürdü. Hande okudu, ağladı ama sana göstermedi. Ertesi hafta yayınevini aradığını duydun."),
P(function(d){ return d.son === "sd_balkonB" || d.son === "sd_balkonD"; }, "Hande izmaritini saksıya gömüp içeri girdi, sen balkonda yalnız kaldın. Aşağıda bir simitçi son simitlerini satmaya çalışıyordu."),
P(S("sd_iki_kadinC"), "Hande'ye bir hemşire ayarlayabileceğini söyledin. “Gerçekten gidebilir miyim?” dedi. Bir hafta sonra Berlin'e bir e-posta yazdı. Henüz gitmedi ama yazdı."),
P(S("sd_iki_kadinD"), "Cevap uzun sürdü: “Belki. Birini korumanın en eski yolu ondan önce gitmektir. Annem de öyle yapmıştı, ona kızmıştım. Şimdi anlıyorum.”"),
P(function(d){ return d.son === "sd_iki_kadinA" || d.son === "sd_iki_kadinB"; }, "O gece yokuşu inerken arabanın camını açtın. O evde iki kadın birbirini korumak için birbirinden ayrılmaya çalışıyordu."),
P(S("a3A"), "Hande ağladı, belki de iki yıldır ilk kez birinin önünde ağlıyordu. “Yorgunum,” dedi. “Evet, çok yorgunum.”"),
P(S("a3B"), "Hande başını salladı. “Biliyorum, bu yüzden ona hiç söylemedim, karar onun olsun. Ama ben de bu evde yaşıyorum Selçuk Bey.”"),
P(S("a3C"), "Bir hafta sonra bir bakım asistanı gelmeye başladı. Hande ilk gün dışarı çıkıp dört saat Boğaz kıyısında yürüdü, sana “Denizi unutmuşum,” diye mesaj attı."),
P(S("a3D"), "“Biliyor,” dedi Hande. “Bir gece ‘Yorgunsun, senin için de istiyorum,’ diye yazdı. Ben ağladım, o da gözleriyle ağladı. Sizden saklamıştık.”"),
"Hastanenin etik kurulunun başkanı Dr. Suat Erol, altmışlarında bir dahiliyeci, odasında seni bekliyor. Masasında açık bir Türk Ceza Kanunu ve yarısı yenmiş bir elma var.",
"“Selçuk, açık konuşalım,” diyor. “Ötanazi yasak. Aktif olarak ölümüne yardım edersen kasten öldürmeden yargılanırsın. İntihara yardım da suç.”",
"Başka bir kâğıt çıkarıyor. “Ama hasta tedaviyi reddedebilir. Bilinci yerindeyse solunum desteğini de, tüple beslenmeyi de reddedebilir. Bu ötanazi sayılmaz.”",
"“Bir de palyatif sedasyon var, başka hiçbir şeyle geçmeyen semptomlarda hastayı derin bir uykuya almak. Ama ‘varoluşsal acı’ bir semptom mu? Kurul bu konuda ikiye bölünmüş durumda, ben de bölünmüş bir kurulun başkanıyım.” Elmayı alıp bir ısırık daha alıyor, sonra bırakıyor."
], secenekler: [
{ t: "“Hocam, yasanın izin verdiği yerin tam sınırına kadar gitmek istiyorum,” dersin.", to: "a5", etki: { yasa: 1, ozerklik: 1, sinir: true } },
{ t: "“Varoluşsal acı da acıdır hocam,” dersin.", to: "a5", etki: { merhamet: 1, varolussal: true } },
{ t: "“Yasanın dışına çıkmayacağım hocam,” dersin.", to: "a5", etki: { yasa: 2 } },
{ t: "“Siz onun yerinde olsanız ne isterdiniz hocam?” diye sorarsın.", to: "a5", etki: { ozerklik: 1, suata_sordu: true } }
]},

a5: { saat: "Aralık, 03.10", baslik: "Gece", metin: [
P(S("a4A"), "Suat Hoca seni süzdü. “Sınırın tam üstünde durmak,” dedi, “en yalnız yerdir, bunu bil.”"),
P(S("a4B"), "Suat Hoca elmanın sapını parmaklarının arasında çevirdi. “Benim de bir annem vardı,” dedi ve başka bir şey eklemedi."),
P(S("a4C"), "Suat Hoca'nın omuzları gevşedi. “Güzel,” dedi ve elmasını bitirdi."),
P(S("a4D"), "Suat Hoca gözlüğünü çıkarıp camlarını kravatıyla sildi. “Bunu bana kimse sormaz,” dedi. “Kurulda hasta ne istiyor, yasa ne diyor diye konuşulur, sen ne isterdin diyen olmaz.” Gözlüğünü takmadı, elinde tuttu."),
"Aralık ayında bir gece saat üçü on geçe telefonun çalıyor, arayan Hande, arkadan bir alarm sesi geliyor.",
"“Selçuk Bey, nefes alamıyor! Balgam tıkadı! Aspiratörü çalıştırdım ama...”",
"Yirmi dakikada oradasın, arabayı kaldırımın üstüne bırakıyorsun. Nevin Hoca'nın yüzü mosmor, gözleri açık ve panik içinde. Sondayı ilerletip çekiyorsun, bir, iki, üçüncüde yol açılıyor. Maskeyi yerine takıyorsun, oksijen seksene, seksen beşe, doksana çıkıyor.",
"Nevin Hoca gözlerini kapatıyor, sonra açıp ekrana dönüyor. Hande titreyen elleriyle tableti düzeltiyor.",
"Harfler titrek titrek beliriyor:",
"“Neden kurtardın?”"
], secenekler: [
{ t: "“Görevim bu hocam,” dersin.", to: "a6", etki: { yasa: 1, gorev: true } },
{ t: "“Bilmiyorum, ellerim yaptı,” dersin.", to: "a6", etki: { merhamet: 1, eller: true } },
{ t: "“Daha konuşmadık hocam, bu iş bir gecede olmaz,” dersin.", to: "a6", etki: { ozerklik: 1 } },
{ t: "Cevap vermeden sabaha kadar yanında oturursun.", to: "a6", etki: { merhamet: 1, sabah: true } }
]},

a6: { saat: "Aralık", baslik: "Karar", metin: [
P(S("a5A"), "Ekranda “Görev,” yazdı, uzun bir aradan sonra devam etti: “Doğru, kızmıyorum. Ama bir dahaki sefere önce bana sor.”"),
P(S("a5B"), "Ekranda “Ellerin,” yazdı, sonra devam etti: “Ellerin yaşatmak istiyor. Peki sen ne istiyorsun?”"),
P(S("a5C"), "Ekranda şu yazdı: “Bir gecede olmaz, doğru. Ama bir gece gelecek ve o gece yazamayacağım.”"),
P(S("a5D"), "Sabaha kadar oturdun. Nevin Hoca uyudu, uyandı, sen hep oradaydın. Ekranda tek bir kelime belirdi: “Kal.” Güneş Üsküdar'ın üstünden doğana kadar kaldın. Sabah Hande ikinize de çay koydu, seninkine yine iki şeker attı."),
"Bir hafta sonra yine Cihangir'desin. Hande seni salona alıp mutfağa geçiyor, bu sefer kapıyı açık bırakıyor.",
"Nevin Hoca ekranda “Selçuk'a” diye bir dosya açmış, mekanik ses okumaya başlıyor:",
"“Bunun senin için kolay olmadığını biliyorum. Seçenekleri ben sıralayayım. Birincisi, hayır dersin. Bana iyi bakarsın, yanımda olursun, bunu da kabul ederim. İkincisi, yasanın tanıdığı hakkı kullanmama yardım edersin. Ben maskeyi, tüpü bırakırım, sen de beni uyutursun. Üçüncüsü İsviçre. Param var, sen raporlarımı yazarsın. Dördüncüsünü yazmaya utanıyorum ama yazıyorum. Bana kimsenin bilmeyeceği bir yol bırakırsın.”",
"Ekran kararıyor.",
"Nevin Hoca amfide sınav kâğıtlarını dağıtırken nasıl bakarsa öyle bakıyor sana."
], secenekler: [
{ t: "Onu korktuğu kutuya bırakmak pahasına “Hayır hocam ama söz veriyorum, sonuna kadar yanınızdayım,” dersin.", to: "bk1", etki: { yasa: 1, merhamet: 1, kol: "bakim" } },
{ t: "O sınırı bir gün bir savcının nereye çizeceğini bilmeden “İkinci yol, tedaviyi bırakmak. Yasanın sınırında, ben de sizinle o sınırda duracağım,” dersin.", to: "br1", etki: { ozerklik: 2, kol: "birak" } },
{ t: "Kendi şehrinden uzakta, yabancı bir odada ölmesine razı olarak “İsviçre. Raporlarınızı ben yazacağım,” dersin.", to: "z1", etki: { ozerklik: 2, kol: "zurih" } },
{ t: "Bir şey demeden gözlerine bakıp yavaşça başını sallarsın. Neye evet dediğinizi ikiniz de biliyorsunuz.", to: "g1", etki: { merhamet: 2, kol: "gizli" } }
]},


sd_balkon: { saat: "Kasım", baslik: "Balkon", metin: [
"Hande'yi balkona çıkarıyorsun. Bir kasım akşamı, Cihangir'in damları görünüyor, uzakta da Boğaz. Hande bir sigara yakıyor, iki yıldır içmediğini söylüyor, çakmağı üç kere çakıyor.",
"“Bir yayınevinde editördüm,” diyor, “şiir editörü. Şiiri kimse okumaz, ben okurdum. Bir sevgilim vardı, Berlin'e gitti, ‘Gel,’ dedi, ben gitmedim. Teyzem hastalandı. Annem yok, babam yok, kim bakacaktı?”",
"“İki yıl oldu. Bu çekyatta, bu maskenin sesiyle. Her gece onun yerine de nefes alıyormuşum gibi geliyor.”",
"İçeriden mekanik ses balkona kadar geliyor:",
"“Hande, sigarayı söndür ve gel.”",
"Hande gülüyor. “Duyuyor,” diyor, “balkonda ağladığımı da duyuyor, biliyorum.”",
"Sigarayı saksıya bastırıyor, kapıda dönüyor. “O ölünce ben ne olacağım Selçuk Bey? Bakıcı mı, yeğen mi? İki yıldır yalnızca onun etrafında varım.”"
], secenekler: [
{ t: "“Bir editör,” dersin, “şiir okuyan bir editör.”", to: "a4", etki: { merhamet: 1, editor: true } },
{ t: "“Bunu şimdi düşünün, o öldükten sonra değil,” dersin.", to: "a4", etki: { ozerklik: 1 } },
{ t: "“Bunu ona sorun, cevap vermek isteyebilir,” dersin.", to: "a4", etki: { ozerklik: 1, ona_sor: true } },
{ t: "Bir şey demeden içeri girersin.", to: "a4", etki: { yasa: 1 } }
]},

sd_iki_kadin: { saat: "Kasım", baslik: "Git", metin: [
"“Biliyor,” diyor Hande. Tabletteki eski mesajları açıp gece saat üçte yazılmış birini gösteriyor:",
"“Yorgunsun, biliyorum. Senin için de istiyorum.”",
"Hande tableti alıp salona dönüyor, sen kapıda kalıyorsun. Hande yatağın yanına diz çöküyor.",
"“Teyze, o mesajı yine okudum. ‘Senin için de’ yazmışsın. İstemiyorum. Benim için ölme. Benim yorgunluğum senin sebebin olmasın.”",
"Ekranda uzun süre hiçbir şey çıkmıyor. Sonra harfler belirmeye başlıyor:",
"“Senin için ölmüyorum ama senin için de ölüyorum. İkisi de doğru. Kırk yıl sana bunu öğretmeye çalıştım, sen hep matematik dersine kaçtın.”",
"Hande burnunu çekip gülüyor.",
"“Git. Berlin'e git, şiirlerine git. Ben bir hemşireyle de ölürüm. Sen benimle ölme.”"
], secenekler: [
{ t: "Odaya girip Hande'nin omzuna dokunursun.", to: "a4", etki: { merhamet: 1 } },
{ t: "Kapıyı yavaşça çekersin.", to: "a4", etki: { ozerklik: 1 } },
{ t: "Sonra Hande'ye, gidebilsin diye bir bakım hemşiresi ayarlayabileceğini söylersin.", to: "a4", etki: { yasa: 1, destek: true, berlin: true } },
{ t: "Hande çıkınca Nevin Hoca'ya sorarsın: “Onu kendi ölümünüzden mi koruyorsunuz?”", to: "a4", etki: { ozerklik: 1, nevin_soru: true } }
]},

sd_kenar: { saat: "Bir ay sonra", baslik: "Kenar Notları", metin: [
"Koliyi eve götürüyorsun. Gece mutfak masasında kitapları tek tek açıyorsun.",
"Kenarlarda genç Nevin'in hızlı, eğik el yazısı var. “Burayı genişlet.” “Zayıf.” “Simone'a sor.” Bir sayfada yalnızca bir ünlem işareti var. Bir başkasında bir kahve lekesi, altında da şu yazıyor: “Paris, 1981, Cafe de Flore. Yağmur. Şemsiyeyi yine unuttum.”",
"“Acı ve Anlam”ın kenarında çok daha yeni, titrek bir yazı var, ellerinin son yılından kalma.",
"“Bunu yanlış yazmışım. Acının anlamı yok. Ama acıya rağmen anlam bulanlar var ve onlar benden akıllı. Ben daha değilim.”",
"Arka kapağın içinde tarihsiz, katlanmış bir kâğıt duruyor. “Chère Simone,” diye başlıyor, sonra Türkçeye geçiyor:",
"“Bu mektubu sana gönderemeyeceğim, çünkü sen çoktan öldün. Yine de yazıyorum. Ölülere yazmak kolay, cevap vermiyorlar.”",
"Simone kim? Bunu sana kimse söylemeyecek. Kâğıdın bir köşesine küçük bir kedi çizilmiş."
], secenekler: [
{ t: "Belki biliyordur diye mektubu Hande'ye gösterirsin.", to: "t2", etki: { merhamet: 1, simone_defne: true } },
{ t: "Mektubu kitabın içine geri koyarsın.", to: "t2", etki: { ozerklik: 1 } },
{ t: "Bir gün yayımlanır diye kenar notlarını bir deftere geçirmeye başlarsın.", to: "t2", etki: { ozerklik: 1, notlar_defter: true } },
{ t: "Sen de ölü birine, Nevin Hoca'ya bir mektup yazarsın.", to: "t2", etki: { merhamet: 1, mektup_yazdi: true } }
]},

sd_kedi: { saat: "İki ay sonra", baslik: "Mırıltı", metin: [
"Koliyi açmadan dolabın üstüne koydun, iki ay orada durdu. Kızın bir gün üstüne ders kitaplarını yığdı.",
"Bir akşam Hande arıyor. “Bir haftalığına Berlin'e gidiyorum, şiir festivali var. İki yıldır ilk kez bir yere gidiyorum.” Biraz duraksıyor. “Spinoza'yı size bırakabilir miyim? Komşu alerjik çıktı.”",
"Spinoza ilk gün kanepenin altından çıkmıyor. İkinci gün mutfakta mamasını kokluyor ama yemiyor. Üçüncü gece sen kanepede kitap okurken yanına çıkıyor.",
"Sonra göğsüne çıkıyor, ağır ve sıcak, mırlamaya başlıyor.",
"Mırıltıyı göğüs kemiğinde hissediyorsun. Nevin Hoca'nın yazdığı aklına geliyor: “Bütün kaslarım gitti ama derim kaldı.”",
"Dokunma duyusu en son giden duyulardan biridir, biliyorsun. Görme gider, işitme silinir ama deri hâlâ hisseder.",
"Spinoza uyuyor, sen kıpırdamıyorsun, kitap açık duruyor ama okumuyorsun. Kızın yanından geçerken ikinizin fotoğrafını çekiyor, deklanşör sesini kapatmayı unutuyor."
], secenekler: [
{ t: "Koliyi dolabın üstünden indirip açarsın.", to: "t2", etki: { merhamet: 1, koli_acti: true } },
{ t: "Bir hafta boyunca her akşam böyle oturursun.", to: "t2", etki: { merhamet: 1 } },
{ t: "Hande dönünce Spinoza'yı sende tutmayı teklif edersin.", to: "t2", etki: { merhamet: 1, spinoza_sende: true } },
{ t: "Bir yere bir soru yazarsın: kilitli kalmış bir zihinde dokunma duyusu kalır mı?", to: "t2", etki: { ozerklik: 1, yazdi: true } }
]},

/* ---------- BAKIM KOLU ---------- */
bk1: { saat: "Ocak", baslik: "Söz", metin: [
"“Hayır,” diyorsun. “Ama sonuna kadar yanınızdayım. Ağrınızın, nefesinizin başında olacağım, gözleriniz gittiğinde de.”",
"Nevin Hoca uzun süre yüzüne bakıyor. Ekranda şu yazıyor:",
"“Söz ders değildir Selçuk. Ama iyi bir söz.” Sonra devam ediyor: “Hayal kırıklığına uğradım. Sana saygı da duyuyorum. İkisi birden, evet. Sınavda çıkar.”",
"Haftada üç ziyaret yapıyorsun. Zihni bulanmasın diye morfini düşük dozda tutuyorsun. Geceler için bir hemşire ayarlıyorsun, Hande'ye haftada iki gün izin çıkıyor.",
"Bir de ona kendi kitaplarını sesli okumaya başlıyorsun.",
"İlk gün “Acı ve Anlam”ın ilk bölümünü okuyorsun. Nevin Hoca bir yerde gözlerini kapatıyor, uyudu sanıyorsun. Ekranda bir kelime beliriyor: “Yanlış.” Duruyorsun. “Kırk yıl önce yanlış yazmışım. Devam et ama yanlış olduğunu bil.”"
], secenekler: [
{ t: "“Neresi yanlış hocam?” diye sorarsın.", to: "bk2", etki: { ozerklik: 1, yanlis: true } },
{ t: "Okumaya devam edersin.", to: "bk2", etki: { merhamet: 1 } },
{ t: "Kitabı kapatıp başka bir şey, şiir, öykü ya da gazete okumayı teklif edersin.", to: "bk2", etki: { merhamet: 1, siir: true } },
{ t: "“Bir sonraki baskı için düzeltmelerinizi bana yazdırın,” dersin.", to: "bk2", etki: { ozerklik: 1, notlar: true } }
]},

bk2: { saat: "Şubat", baslik: "Spinoza", metin: [
P(S("bk1B"), "Okumaya devam ettin. Bölüm bitince ekranda “Sağ ol,” yazdı. Ne için olduğunu sormadın."),
P(S("bk1A"), "Ekranda şu yazdı: “Acı insanı derinleştirir diye yazmışım. Bunu acı çekmeyen biri yazmış. Acının anlamı yok. Anlam, acıya rağmen bulduğun şeydir.”"),
P(S("bk1C"), "Bir gün Cemal Süreya okudun, bir gün Sait Faik. Bir öyküde Nevin Hoca gözlerini kapattı, sonra “Burgaz,” diye yazdı. “Bir yaz orada kalmıştık. Hande'nin annesi denizde kolunu kırmıştı.” Ertesi hafta Hande onu tekerlekli sandalyeyle balkona çıkardı, bir yıldır ilk kez."),
P(S("bk1D"), "Her ziyarette yarım saat not almaya başladın, kırk yıllık bir kitaba yeni bir son bölüm. Başlığını o koydu: “Bir Bedenden Yazılan Düzeltmeler.”"),
"Şubat geliyor. Evde bir kedi var, Spinoza. On beş yaşında, tekir, bir kulağı yırtık. Nevin Hoca onu emekli olduğu yıl sokaktan almış. Gün boyu yatağın ayak ucunda uyuyor, arada bir maskenin hortumuna pati atıyor.",
"Bir öğleden sonra Spinoza yatağa çıkıp Nevin Hoca'nın göğsüne yatıyor ve mırlamaya başlıyor. Nevin Hoca'nın felçli yüzünde bir şey kıpırdıyor, gülümseme değil ama gülümsemenin hatırası gibi bir şey.",
"Ekranda uzun uğraşlarla şu yazıyor:",
"“Mırlamasını hâlâ hissediyorum. Derim hissediyor. Bütün kaslarım gitti ama derim kaldı. Bilmiyordum.”",
"Sonra ekliyor:",
"“Belki kutuda da bir kedi olur.”"
], secenekler: [
{ t: "“Belki,” dersin.", to: "bk3", etki: { merhamet: 1 } },
{ t: "“Kutu sandığınız kadar boş olmayabilir hocam,” dersin.", to: "bk3", etki: { yasa: 1, umut: true } },
{ t: "Kediyi okşarsın.", to: "bk3", etki: { merhamet: 1 } },
{ t: "“Fikriniz değişti mi?” diye sorarsın.", to: "bk3", etki: { ozerklik: 1, fikir_sordu: true } }
]},

bk3: { saat: "Mart", baslik: "Gözler", metin: [
P(S("bk2A"), "“Belki,” dedin. Nevin Hoca'nın gözlerinde bir şey güldü ama dudakları kıpırdamadı."),
P(S("bk2B"), "Ekranda şu yazdı: “Bunu kutudan çıkmış biri söylese inanırdım.”"),
P(S("bk2C"), "Kediyi okşadın, Spinoza mırladı, ses bütün odayı doldurdu. Nevin Hoca gözlerini kapattı."),
P(S("bk2D"), "Ekranda uzun süre bir şey çıkmadı. Sonra şu yazdı: “Hayır. Ama bugün değişmedi diye yarın değişmeyecek değil. Bir fikri bir kere düşünüp ömür boyu düşündüğünü sanmak, meslektaşlarımın çoğunun hastalığı buydu.”"),
"Mart geliyor. Kamera artık bakışlarını zor okuyor, bazı harflere ulaşamıyor. Eskiden beş dakikada yazdığı bir cümle şimdi yirmi dakika sürüyor.",
"Nörolog birkaç hafta kaldığını söylüyor, sonra yalnızca göz kırpışları kalacak. Evet için bir, hayır için iki kere kırpacak. Sonra belki o da kalmayacak.",
"Bir sabah Hande kapıda bekliyor. “Bütün gece bir şey yazmaya uğraştı,” diyor, “bitirdi, sizi bekliyor.”",
"Ekranda “Son” adında bir dosya var. Mekanik ses okuyor:",
"“Selçuk, gözlerim gidince bir sorum olacak ve soramayacağım. O yüzden şimdi soruyorum. O zaman bana nasıl bakacaksın? Bir hasta gibi mi, bir beden gibi mi, yoksa orada hâlâ biri varmış gibi mi? Cevap verme, hatırla.”",
"Nevin Hoca gözlerini kapatıyor, sonra açıp bir kere kırpıyor, evet. Neye evet dediğini bilmiyorsun."
], secenekler: [
{ t: "Cevap verme dese de “Hâlâ orada biri varmış gibi, her zaman,” dersin.", to: "t1", etki: { merhamet: 1, cevap_verdi: true } },
{ t: "Cevap vermezsin, hatırlayacaksın.", to: "t1", etki: { ozerklik: 1 } },
{ t: "Gözleri gittiğinde de konuşabilsin diye bir evet-hayır sistemi kurarsın.", to: "t1", etki: { yasa: 1, sistem: true } },
{ t: "Eğilip alnından öpersin.", to: "t1", etki: { merhamet: 1, opucuk: true } }
]},

/* ---------- BIRAKMA KOLU ---------- */
br1: { saat: "Ocak", baslik: "Ret Belgesi", metin: [
"Yasanın sınırı kâğıtların içinden geçiyor. Bir avukat, Suat Hoca, bir noter bir araya geliyorsunuz. Bilinci yerinde bir hastanın hayati tedaviyi reddetmesi için bir belge, iki tanık, bir psikiyatri raporu ve bir bekleme süresi gerekiyor.",
"Psikiyatrist geliyor ve ekranın hızında iki saat konuşuyor. Çıkarken kapıda “Depresyonu yok,” diyor, “karar verme yetisi tam. Benimkinden daha tam.” Sonra ekliyor: “Bir de beni Kierkegaard'dan sınava çekti.”",
"Belge hazırlanıyor ama imza yerinde bir sorun var, imza atamıyor. Noter kalemini dişleyerek düşünüyor. Sonunda bir video kaydı, iki tanık, gözle seçilmiş harflerle yazılmış adı ve Hande'nin yardımıyla basılacak bir parmak izinde karar kılıyorlar.",
"Nevin Hoca adını seçiyor, N, E, V, İ, N. On beş dakika sürüyor. Noter bir ara saatine bakıyor, sonra utanıp kolunu indiriyor.",
"Hande teyzesinin parmağını önce ıstampaya, sonra kâğıda bastırıyor. Hande'nin eli titriyor, Nevin Hoca'nınki titreyemiyor.",
"Bir tarih seçilmesi gerekiyor. Ekranda şu yazıyor: “Bahar. Erguvanlar açınca. Son bir kere görmek istiyorum.”"
], secenekler: [
{ t: "Kabul eder, erguvanları beklersiniz.", to: "br2", etki: { ozerklik: 1, erguvan: true } },
{ t: "“Bahar uzak hocam, o zamana kadar gözleriniz...” diye söze başlarsın.", to: "br2", etki: { yasa: 1, erken: true } },
{ t: "Hande'ye bu tarihi onun da isteyip istemediğini sorarsın.", to: "br2", etki: { merhamet: 1, defne_onay: true } },
{ t: "Belgeyi kelime kelime bir kez daha okursun.", to: "br2", etki: { yasa: 1 } }
]},

br2: { saat: "Nisan", baslik: "Erguvan", metin: [
P(S("br1A"), "Erguvanları beklediniz. Her hafta karşı yakaya baktın, önce tomurcuklar, sonra pembe bir buğu belirdi. Her hafta gözleri biraz daha yavaşladı."),
P(S("br1D"), "Belgeyi yeniden okudun ve bir virgülün eksik olduğunu gördün. Noter yeniden yazdırdı. Bir ölüm bir virgül kadar gecikti."),
P(S("br1B"), "Nevin Hoca düşündü. “Haklısın,” diye yazdı. “Kırk yıl her nisan gördüm, birini atlarsam bir şey olmaz.” Tarih mart sonuna çekildi."),
P(S("br1C"), "Hande bir süre ellerine baktı, parmak uçlarında hâlâ mürekkep vardı. “Bahar,” dedi, “benim de onunla son baharım.”"),
"Nisan geliyor. Hande yatağı pencerenin önüne çekmiş. Karşıda Kandilli'nin yamaçları pembe ve mor görünüyor, Nevin Hoca bütün sabah onlara bakıyor.",
"Öğleden sonra hazırlık yapılıyor. Bir hemşire, sen, Hande ve Spinoza oradasınız. Bir serum askısı, sedasyon ilaçları hazır, maske hâlâ yüzünde.",
"Plan konuşulmuştu. Önce sedasyonla derin bir uykuya alınacak, sonra maske çıkarılacak. Tüple beslenme günler önce durduruldu. Sonra ne kadar sürer? Saatler, belki bir gün. Yasa buna tedavinin bırakılması diyor ama senin ellerin aradaki farkı o kadar iyi bilmiyor.",
"Nevin Hoca son mesajını yirmi dakikada yazıyor.",
"“Selçuk. Hande. Spinoza. Erguvanlar. Teşekkürler. Ders bitti. Sınav yok.”",
"Spinoza yatağa çıkıp göğsüne yatıyor. Nevin Hoca sana bakıp bir kere göz kırpıyor."
], secenekler: [
{ t: "Sedasyonu kendin başlatırsın.", to: "br3", etki: { ozerklik: 1, kendi_eli: true } },
{ t: "Hemşireye başlatmasını söylersin.", to: "br3", etki: { yasa: 1, hemsire: true } },
{ t: "Durup son bir kez “Emin misiniz hocam?” diye sorarsın.", to: "br3", etki: { yasa: 1, son_soru: true } },
{ t: "Hande'yle birlikte, onun eli senin elinin üstünde, serumu açarsınız.", to: "br3", etki: { merhamet: 1, birlikte: true } }
]},

br3: { saat: "Nisan", baslik: "Otuz Saat", metin: [
P(S("br2A"), "Sedasyonu kendin başlattın, valf parmaklarının altında buz gibiydi."),
P(S("br2B"), "Hemşireye söyledin. Hemşire sana bir an baktı, sonra başlattı. O bakışı da, adını da hiç unutmadın, Reyhan'dı."),
P(S("br2C"), "Nevin Hoca bir kere göz kırptı, sonra bir daha, iki kere. Kalbin durdu. Sonra ekranda son harfler belirdi: “Sorma. Ama sorduğun için sağ ol.”"),
P(S("br2D"), "Hande'nin eli senin elinin üstündeydi ve serum açıldı."),
"İlaç damardan giriyor. Nevin Hoca erguvanlara bakmaya çalışıyor ama göz kapakları iniyor.",
"Bir saat sonra maskeyi çıkarıyorsun ve makine susuyor. Üç yıldır bu salonda hiç olmamış bir sessizlik çöküyor, buzdolabının motorunu duyuyorsun.",
"Nefesi zayıf ama düzenli, kendi nefesi.",
"Sandığından uzun sürüyor. Gece oluyor, Hande sandalyede uyukluyor, Spinoza onun göğsünde yatıyor.",
"Gece ikide nefesleri seyrekleşiyor. Sabaha karşı bir süre tamamen duruyor, sonra yeniden başlıyor. Hande uyanıp sana bakıyor, sen başını iki yana sallıyorsun.",
"Ertesi gün öğleden sonra, otuz saat sonra bir nefes alıyor ve vermiyor.",
"Karşı yamaçta erguvanlar hâlâ açık."
], secenekler: [
{ t: "Ölüm belgesine doğru ama eksik bir şey yazarsın: amiyotrofik lateral skleroz, solunum yetmezliği.", to: "t1", etki: { yasa: 1 } },
{ t: "Hande'yi uyandırıp birlikte pencereyi açarsınız.", to: "t1", etki: { merhamet: 1, pencere: true } },
{ t: "Spinoza'yı kucağına alırsın.", to: "t1", etki: { merhamet: 1, spinoza: true } },
{ t: "Bir süre hiçbir şey yapmazsın.", to: "t1", etki: { ozerklik: 1 } }
]},

/* ---------- ZÜRİH KOLU ---------- */
z1: { saat: "Ocak", baslik: "Belgeler", metin: [
"İsviçre'de yabancıları da kabul eden bir dernek buluyorsunuz. Koşulları belli: iyileşmeyecek ağır bir hastalık, karar verme yetisi, tekrarlanan bir istek. Son adımı da hastanın kendisinin atması gerekiyor, ilacı kendisi içecek ya da vanayı kendisi açacak.",
"Nevin Hoca'nın elleri yok.",
"Dernekten bir cevap geliyor. Göz kontrollü bir infüzyon pompası varmış, hasta ekrana bakarak vanayı kendisi açabiliyormuş, daha önce de yapılmış.",
"Senden bir rapor istiyorlar, tanı, seyir, karar verme yetisi. Türkiye'de bunu yazmak suç mu? Avukat “Gri bir alan,” diyor. “Rapor yazmak suç değil ama ne için yazıldığını biliyorsan ve savcı bunu yardım sayarsa... Henüz deneyen olmadı.”",
"Hande bu planı duyduğundan beri sana bakmıyor, çayını tabağa koyup gidiyor.",
"Sonunda konuşuyor. “Onu uçağa mı bindireceksiniz? Makineleriyle, maskesiyle? Yabancı bir şehirde, yabancı bir odada ölsün diye mi? Neden kendi kitaplarının arasında değil?”",
"Nevin Hoca dinliyor. Ekranda şu yazıyor: “Çünkü burada seni suçlu yaparlar.”"
], secenekler: [
{ t: "Bütün riskini üstlenerek raporu yazarsın.", to: "z2", etki: { ozerklik: 1, rapor: true } },
{ t: "Raporu yazarsın ama amacından söz etmeden, yalnızca tıbbi gerçeklerle.", to: "z2", etki: { yasa: 1, rapor: true, temkin: true } },
{ t: "Onun da razı olması gerektiği için Hande'yle yalnız konuşursun.", to: "z2", etki: { merhamet: 1, rapor: true, defne_konustu: true } },
{ t: "Nevin Hoca'ya son bir kez burada, ikinci yoldan ölmeyi önerirsin.", to: "z2", etki: { yasa: 1, rapor: true, ikinci_oneri: true } }
]},

z2: { saat: "Şubat", baslik: "Uçak", metin: [
P(S("z1A"), "Raporu yazdın. Tarihi atarken elin titremedi, oysa titremesinden korkmuştun."),
P(S("z1B"), "Raporu yazdın, yalnızca tıbbi gerçekleri. Amaç hakkında tek kelime yoktu."),
P(S("z1C"), "Hande seni dinledi. “Gelmeyeceğim,” dedi, sonra “Geleceğim, sonuna kadar,” dedi."),
P(S("z1D"), "Ekranda şu yazdı: “Burada mı? Yasanın kenarında, bir hemşirenin eliyle, senin elinle mi? Hayır. Ben kendi elimle istiyorum. Elim yoksa gözümle.”"),
"Şubat sonunda genel havacılık terminalinden bir ambulans uçağı kalkacak. Nevin Hoca sedyede, maskesi takılı, tableti göğsünün üstünde bir askıda duruyor. Hande yanında, sen de “kişisel nedenlerle” izin almışsın.",
"Pasaport kontrolünde memur önce sedyeye, sonra sana bakıyor, bir şey soracak gibi oluyor ama sormuyor, damgayı basıyor.",
"Uçak kalkıyor. Nevin Hoca pencereden bakıyor, köprüler, Cihangir'in yokuşu bir an görünüyor, sonra bulutlar kaplıyor.",
"Ekranda şu yazıyor: “Kırk yıl önce Almanya'ya doktoraya giderken de böyle bakmıştım. O zaman döneceğimi biliyordum.”",
"Bir yerde ekranda tek bir kelime beliriyor: “Spinoza?” Hande “Komşuda teyzeciğim,” diyor, “üç poşet mama bıraktım.”",
"Zürih'e iniyorsunuz, kuru bir soğuk var. Bir minibüs sizi şehrin dışındaki bir sanayi bölgesine, bir oto yıkamanın yanındaki mavi boyalı küçük bir eve götürüyor."
], secenekler: [
{ t: "Son geceyi birlikte otelde geçirmeyi teklif edersin.", to: "z3", etki: { merhamet: 1, son_gece: true } },
{ t: "Doğruca eve gidersiniz.", to: "z3", etki: { ozerklik: 1 } },
{ t: "Hande'yle Nevin Hoca'yı bir süre yalnız bırakırsın.", to: "z3", etki: { merhamet: 1 } },
{ t: "Derneğin hekimiyle karar verme yetisini bir kez daha değerlendirirsin.", to: "z3", etki: { yasa: 1 } }
]},

z3: { saat: "Şubat", baslik: "Mavi Ev", metin: [
P(S("z2B"), "Doğruca eve gittiniz, yol kısaydı."),
P(S("z2C"), "Onları yalnız bıraktın. Yarım saat boyunca koridorda bir İsviçre doğa dergisinin sayfalarını hiçbirini okumadan çevirdin. Döndüğünde Hande'nin gözleri kuruydu ama Nevin Hoca'nınkiler değildi."),
P(S("z2D"), "Derneğin hekimiyle değerlendirme yaptınız. Nevin Hoca “Sınav mı? Yine mi B artı?” diye yazdı, hekim tercümeyi duyunca güldü. Sen gülemedin."),
P(S("z2A"), "Gölü gören bir otel odasında kaldınız. Nevin Hoca hiç uyumadı. Sabaha karşı ekranda şu yazdı: “Bir gece daha. Bu kadarı yeter.”"),
"Mavi evin içi sade, bir yatak, bir kanepe, pencerede bir saksı sardunya var. Duvarda bir göl resmi asılı, biraz eğri asılmış ama kimse düzeltmemiş.",
"İki gönüllü var, yaşlı bir İsviçreli kadınla genç bir adam, kimse acele etmiyor. Tercüman aracılığıyla istediği şeyin hâlâ bu olup olmadığını soruyorlar. Ekranda “Evet,” yazıyor.",
"Pompayı kuruyorlar. Ekranda bir düğme belirecek. Nevin Hoca ona üç saniye bakarsa vana açılacak.",
"Gönüllüler bir kenara çekiliyor. Hande bir yanında, sen öbür yanındasın.",
"Son mesajını yazıyor, yirmi dakika sürüyor.",
"“Selçuk, bu son ders. Sınavı bu sefer ben veriyorum, sen izle. Hande, seni seviyorum. Sesim varken söylemedim, şimdi makine söylüyor ama aslında ben söylüyorum.”",
"Yeşil bir düğme beliriyor. Nevin Hoca önce Hande'ye, sonra sana, sonra düğmeye bakıyor."
], secenekler: [
{ t: "Elini tutarsın.", to: "t1", etki: { merhamet: 1, el_tuttu: true } },
{ t: "O öyle istediği için gözlerini kaçırmadan sonuna kadar izlersin.", to: "t1", etki: { ozerklik: 1, izledi: true } },
{ t: "Hande'nin yanına geçip ona tutunursun.", to: "t1", etki: { merhamet: 1, defneyi_tuttu: true } },
{ t: "Yapamazsın, son anda başını çevirirsin.", to: "t1", etki: { yasa: 1, cevirdi: true } }
]},

/* ---------- GİZLİ KOL ---------- */
g1: { saat: "Ocak", baslik: "Pompa", metin: [
"Başını sallıyorsun. Nevin Hoca gözlerini kapatıyor, teşekkür eder gibi, ya da sana bir yük verdiği için özür diler gibi.",
"Bir hafta sonra bir pompa getiriyorsun. Hastanın dozunu kendisinin ayarladığı türden ama bir göz takip sistemine bağlı. Mühendis bir arkadaşın bir akşam yazılımını değiştiriyor. Ne için olduğunu sormuyor, yalnızca “Bira borcun var,” diyor.",
"Pompanın içinde morfin, bir de normal dozun çok üstünde bir yedek hazne var. Menülerin en derininde bir seçenek duruyor. Oraya ulaşıp beş saniye bakarsa hazne boşalacak.",
"Kurulumu gece yapıyorsun. Hande uyuyor, ya da uyuyor gibi yapıyor, çekyattan gelen nefesi fazla düzenli.",
"Nevin Hoca her adımı izliyor. Sen bitirince ekranda “Göster,” yazıyor. Menüyü gösteriyorsun, bir, iki, üç, dört adım, sonra beş saniye.",
"Ekranda “Anladım,” yazıyor, sonra soruyor: “Kimse bilmeyecek mi?”",
"Bu bir suç. Kasten öldürme ya da intihara yardım sayılır, savcıya bağlı. On yıl, belki daha fazla. Mesleğin, adın, kızın gider."
], secenekler: [
{ t: "“Kimse bilmeyecek,” dersin.", to: "g2", etki: { merhamet: 1, sir: true } },
{ t: "“Ben bileceğim hocam,” dersin.", to: "g2", etki: { ozerklik: 1, ben_bilecegim: true } },
{ t: "“Hande bilmeli,” dersin.", to: "g2", etki: { yasa: 1, defne_bilsin: true } },
{ t: "Bir şey demeden pompanın kayıt dosyasını silersin.", to: "g2", etki: { sir: true, kayit_sildi: true } }
]},

g2: { saat: "Şubat", baslik: "Bekleyiş", metin: [
P(S("g1A"), "“Kimse bilmeyecek,” dedin. Nevin Hoca bir kere, sonra iki kere göz kırptı. Ekranda “Sen bileceksin,” yazdı."),
P(S("g1B"), "“Ben bileceğim,” dedin. Ekranda “Bu yüzden sana sordum,” yazdı."),
P(S("g1D"), "Kayıt dosyasını sildin. Tuşa basarken parmağın biraz fazla bastı, ekran bir an dondu, kalbin de dondu."),
P(S("g1C"), "Sabah Hande'ye anlattın. Hande pompaya bir böceğe bakar gibi baktı. “Bilmek istemiyordum,” dedi, “ama artık biliyorum. Bir şey yapmayacağım.” Sonra her zamanki gibi çay koydu, iki şeker attı."),
"Bir hafta geçiyor, iki, üç.",
"Nevin Hoca menüye gitmiyor.",
"Ziyaretler sürüyor. Her seferinde pompanın kayıtlarına bakıyorsun ama hiçbir şey yok. Spinoza yatakta, erguvanlar daha açmadı.",
"Bir gün kimse yokken “Hocam, neden...” diye başlıyorsun ama bitiremiyorsun.",
"Uzun bir bekleyişten sonra ekranda şu yazıyor:",
"“Bilmek yetti. Yapabileceğimi bilmek yetti. Üç yıldır hiçbir şeye karar veremiyordum. Şimdi her sabah uyanıp bugün değil diyorum. Bunu ben diyorum.”",
"Sonra ekliyor: “Belki hiç basmam, belki yarın basarım, bilmiyorum. Bilmemek ilk defa korkutmuyor.”"
], secenekler: [
{ t: "Pompayı kaldırmayı düşünürsün.", to: "g3", etki: { yasa: 1, kaldir_dusun: true } },
{ t: "Karar onun, hiçbir şeyi değiştirmezsin.", to: "g3", etki: { ozerklik: 1 } },
{ t: "Kitabının son bölümü için bu duygusunu yazmasını önerirsin.", to: "g3", etki: { ozerklik: 1, yazsin: true } },
{ t: "Kendi avukatınla konuşursun.", to: "g3", etki: { yasa: 1, avukat: true } }
]},

g3: { saat: "Mart, 04.20", baslik: "Gece Telefonu", metin: [
P(S("g2A"), "Pompayı kaldırmayı düşündün. Ekranda şu yazdı: “Kaldırma. Belki kullanmam ama orada dursun.”"),
P(S("g2B"), "Hiçbir şeyi değiştirmedin."),
P(S("g2D"), "Avukatın seni dinledi. “Bunu bana hiç anlatmadın,” dedi, “ben de hiç duymadım.” Bir kâğıda iki telefon numarası yazıp uzattı."),
P(S("g2C"), "Yazdı, on gün boyunca her gün biraz. Başlığı “Bir Düğmenin Özgürlüğü” oldu. Sonuna bir not ekledi: “Ben öldükten sonra yayımlayın. Selçuk'un adını geçirmeden.”"),
"Mart ayında bir gece saat dördü yirmi geçe telefonun çalıyor. Arayan Hande, sesi tuhaf bir şekilde sakin.",
"“Selçuk Bey, teyzem gitti. Uyandım, maskenin sesi yoktu. Pompanın ekranında bir şey yazıyor.”",
"Yirmi dakikada oradasın. Nevin Hoca gözleri kapalı yatıyor. Spinoza yatağın ayak ucunda, kulakları geriye yatmış. Pompanın ekranında “Hazne boşaltıldı. 02.47.” yazıyor.",
"Tabletin ekranında da saat 02.41'de yazılmış son mesajı duruyor:",
"“Bugün. Erguvanları beklemedim. Gözlerim birkaç gün sonra menüye ulaşamayacaktı, ya bugün ya hiç. Selçuk, teşekkür ederim. Hande, özür dilerim. Spinoza'yı sev.”",
"Bir ölüm belgesi doldurman gerekiyor. Pompa da kayıtlarında bir savcının okuyabileceği bir dille 02.47'yi gösteriyor.",
"Hande sana bakıyor ama bir şey sormuyor. Spinoza'yı kucağına almış, yüzünü kedinin tüylerine gömmüş."
], secenekler: [
{ t: "Ölüm nedenine “ALS, solunum yetmezliği” yazıp pompayı sökersin.", to: "t1", etki: { merhamet: 1, ortbas: true } },
{ t: "Pompayı, kayıtları, kendi rolünü, her şeyi olduğu gibi bildirirsin.", to: "t1", etki: { yasa: 2, itiraf: true } },
{ t: "Ölüm nedenine doğruyu yazarsın ama pompanın nasıl kurulduğunu söylemezsin.", to: "t1", etki: { yasa: 1, yarim: true } },
{ t: "Bu onun da hayatı, Hande'ye ne istediğini sorarsın.", to: "t1", etki: function(d){ d.ozerklik++; d.defne_secti = true; d.ortbas = true; } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Sonra", baslik: "Ölümden Sonra", metin: [
P(S("bk3A"), "“Hâlâ orada biri varmış gibi,” dedin, bir kere göz kırptı. Son iki hafta bu cümleyi her sabah paltonu çıkarmadan önce tekrarladın."),
P(S("bk3B"), "Cevap vermedin ama hatırladın, her sabah yatağın başında."),
P(S("bk3C"), "Bir evet-hayır sistemi kurdun, bir kırpış evet, iki kırpış hayır. Gözleri tamamen gidene kadar on bir gün kullandı. Son kelimesi bir kırpıştı."),
P(S("bk3D"), "Alnından öptün, gözlerini açmadı. Monitörde nabzı bir an hızlandı, ya da sana öyle geldi."),
P(S("br3A"), "Belgeye ALS, solunum yetmezliği yazdın. Kalemin “sedasyon” kelimesinin üstünde bir süre bekledi ama yazmadın."),
P(S("br3B"), "Pencereyi açtınız. Erguvan kokmaz ama rüzgâr vardı, perdeyi Nevin Hoca'nın yatağının üstüne kadar şişirdi."),
P(S("br3C"), "Spinoza'yı kucağına aldın, direnmedi. Tırnaklarını kazağına geçirip bıraktı, geçirip bıraktı."),
P(S("br3D"), "Bir süre koltukta oturdun. Hande uyandığında hâlâ oradaydın, elinde boş bir şırınga kapağı vardı."),
P(S("z3A"), "Elini tuttun. O hissetmiyordu ama sen hissettin."),
P(S("z3B"), "Gözleri kapanana kadar, sonra bir süre daha, sonuna kadar izledin."),
P(S("z3C"), "Hande'ye tutundun, titriyordu. Nevin Hoca'nın son gördüğü şey birbirine tutunan iki insandı."),
P(S("z3D"), "Son anda başını çevirdin. Pencereden oto yıkamada birinin kırmızı bir arabayı köpürttüğünü gördün. Döndüğünde her şey bitmişti."),
P(S("g3C"), "Belgeye doğruyu yazdın ama pompanın nasıl kurulduğunu yazmadın."),
P(function(d){ return d.kol === "bakim"; }, "Nevin Hoca nisan ortasında öldü. Gözleri iki hafta önce gitmişti. Bir sabah nefesi yavaşladı ve durdu, yanındaydın."),
P(function(d){ return d.kol === "bakim" && d.sistem; }, "Ona sorduğun son soru “Rahat mısınız hocam?” oldu. Bir kere göz kırptı, sonra yavaşça bir daha, sonra bir daha. Ne demek istediğini hiçbir zaman bilemeyeceksin."),
P(function(d){ return d.kol === "birak"; }, "Nevin Hoca erguvanların karşısında, kendi salonunda, kendi seçtiği günde öldü."),
P(function(d){ return d.kol === "zurih"; }, "Nevin Hoca Zürih'in dışında, mavi bir evde, gözleriyle açtığı bir vanayla öldü. Cenazesini İstanbul'a bir kargo uçağıyla getirdiniz. Görevli formdaki “içerik” kutusuna ne yazacağını sana sordu."),
P(function(d){ return d.kol === "gizli"; }, "Nevin Hoca mart sonunda, gece ikiyi kırk yedi geçe, erguvanları beklemeden öldü."),
P(function(d){ return d.ortbas; }, "Ölüm belgesinde “ALS, solunum yetmezliği” yazıyor. Pompa önce arabanın bagajında durdu, sonra bir hastanenin tıbbi atık konteynerine gitti."),
P(function(d){ return d.itiraf; }, "Bildirdin. Ertesi gün bir savcı aradı, bir hafta sonra avukatının yanında ifade verdin. Savcı dosyayı okurken uzun süre konuşmadı. “Bunun ne dosyası olduğunu ben de bilmiyorum,” dedi ve çayını karıştırdı."),
"Cenaze Aşiyan'da, Boğaz'a bakan yamaçta kalkıyor. Eski öğrencileri, birkaç meslektaşı, komşuları ve Hande gelmiş. Hande'nin paltosunun yakasında birkaç tekir tüyü var.",
"Mezar taşına ne yazılacağını kendisi seçmiş. Hande söylüyor, Montaigne'den bir cümle: “Felsefe yapmak, ölmeyi öğrenmektir.” Sonra ekliyor: “Önce ‘Notuma itiraz etmeyin’ yazdırmak istemiş, ben vazgeçirdim.”"
], secenekler: [
{ t: "Mezarın başında bir şey söylersin.", to: "t1b", etki: { merhamet: 1, konustu: true } },
{ t: "Kalabalığın arkasında durursun.", to: "t1b", etki: { ozerklik: 1 } },
{ t: "Hande'nin yanında durursun.", to: "t1b", etki: { merhamet: 1 } },
{ t: "Cenazeye gitmezsin.", to: "t1b", etki: { yasa: 1, gitmedi: true } }
]},

t1b: { saat: "Bir ay sonra", baslik: "Kitaplar", metin: [
P(S("t1B"), "Kalabalığın arkasında durdun. Çıkarken yaşlı bir adam koluna dokundu. “Sen o B artı alan çocuksun,” dedi, “bize her sene anlatırdı.”"),
P(S("t1C"), "Hande'nin yanında durdun. Toprak atılırken bileğini tuttu, bir saniye tuttu, sonra bıraktı."),
P(S("t1A"), "Ağzından şu çıktı: “Hocam bana bir B artı vermişti, hâlâ itiraz ediyorum.” Birkaç eski öğrenci güldü, onlar da biliyordu."),
P(S("t1D"), "Gitmedin. Hande bir mesaj attı: “Sizi aradım, yoktunuz. Anlıyorum.” Mesajı üç gün sonra açtın."),
"Bir ay sonra Hande daireyi boşaltıyor. Kitapların çoğu bir üniversite kütüphanesine gidecek ama bazılarını sana ayırmış.",
"Salon yarı yarıya boşalmış. Raflarda boşluklar, tozun çizdiği dikdörtgenler kalmış. Yatak sökülmüş, halıda dört ayağının izi var, pencere açık.",
"Hande sana on iki kitaplık bir koli uzatıyor. En üstte “Acı ve Anlam”ın ilk baskısı duruyor.",
"İlk sayfada eski, solmuş bir ithaf var. Altına yeni bir satır eklenmiş, belli ki Hande'ye dikte edilmiş, onun el yazısıyla:",
"“Selçuk'a, arka sıradaki öğrenciye. Bu kitabın çoğu yanlış. Bir şey doğru: insan ancak kendi ölümünü düşünürken başkalarına bakmayı öğrenir.”",
"Spinoza kolinin kenarını kokluyor, Hande onu kucağına alıyor. “Benimle kalacak, vasiyeti böyle. Bu sefer kimse beni yorgun bulmayacak.”"
], secenekler: [
{ t: "Kitabı göğsüne bastırırsın.", to: "t2", etki: { merhamet: 1 } },
{ t: "Hande'ye gerçekten nasıl olduğunu sorarsın.", to: "t2", etki: { merhamet: 1, defne_sordu: true } },
{ t: "Kitabın kenarlarındaki notları okumaya başlarsın.", to: "sd_kenar", etki: { ozerklik: 1, notlari_okudu: true } },
{ t: "Okumaya hazır değilsin, koliyi kapatıp gidersin.", to: "sd_kedi", etki: { yasa: 1 } }
]},

t2: { saat: "Eylül", baslik: "Davet", metin: [
P(S("t1bA"), "Kitabı göğsüne bastırdın. Kapıda Hande “Size en çok bunu bırakmak istedi,” dedi."),
P(S("sd_kenarB"), "Mektubu geri koydun. Bazen kitabı açıp mektubun orada olup olmadığına baktın ama okumadın."),
P(S("sd_kediB"), "Bir hafta boyunca her akşam öyle oturdun. Sekizinci akşam bir sayfa okudun."),
P(S("sd_kenarA"), "Hande mektubu okudu. “Simone,” dedi, “teyzemin Paris'teki doktora hocası. O ölünce teyzem bir yıl kimseyle konuşmamış, annem anlatırdı.” Biraz durdu. “Kedi çizimini de o yapardı, her mektubunun köşesine.”"),
P(S("sd_kenarC"), "Deftere geçirmeye başladın, her akşam bir kitap. Kenar notları kendi başına bir kitap oldu, kırk yıllık bir zihnin kendisiyle kavgası."),
P(S("sd_kenarD"), "“Sevgili Nevin Hoca,” diye başladın ve üç sayfa yazdın. Bitince katlayıp onun kitabının arasına koydun."),
P(S("sd_kediA"), "Koliyi indirip en üstteki kitabı açtın. Spinoza göğsüne geri çıktı, kitabı onun üstünden okudun."),
P(S("sd_kediC"), "Hande döndüğünde ona teklif ettin. Spinoza'ya uzun uzun baktı. “Bırakamam,” dedi, “son bağım o.” Her ay bir kere getireceğine söz verdi ve getiriyor."),
P(S("sd_kediD"), "“Kilitli bir zihinde dokunma kalır mı?” diye yazdın. Önce bir paragraf, sonra bir sayfa oldu. Başlığını “Kutudaki Kedi” koydun."),
P(S("t1bB"), "Hande biraz düşündü. “Rahatladım,” dedi. “Bundan utanıyorum. Utandığım için de rahatlıyorum, demek hâlâ seviyorum onu.” Güldü, burnunu sildi."),
P(S("t1bC"), "Kenarlarda notlar vardı, “burayı genişlet,” “zayıf,” “Simone'a sor.” Bir sayfada bir cümlenin altı kırmızıyla çizilmişti: “Ölüm hayatın sınavı değil, son dersidir.” Yanına Hande'nin el yazısıyla şu eklenmişti: “Teyzem bunu sildirmek istedi, bıraktım.”"),
"Eylülde tıp fakültesinden bir zarf geliyor.",
"“Sayın Dr. Selçuk Kılıç. Tıp Etiği seçmeli dersi bu dönem Prof. Dr. Nevin Arıkan'ın anısına yeniden açılacaktır. Dersi sizin vermenizi öneriyoruz. Öneren: Hande Arıkan.”",
P(function(d){ return d.itiraf; }, "Altında dekanın el yazısıyla bir not var: “Soruşturmanın sürdüğünü biliyorum. Bu teklif ondan bağımsızdır, ya da değildir. Siz karar verin.”")
], secenekler: [
{ t: "Kabul edip ilk dersi hazırlamaya başlarsın.", to: "y_kursu", etki: { ozerklik: 1, kursu: true } },
{ t: "Reddedersin, bu ders senin değil.", to: "t3", etki: { yasa: 1, ret_kursu: true } },
{ t: "Kabul edersin. İlk derste Nevin Hoca'nın son yazdıklarını okuyacaksın.", to: "y_not", etki: { ozerklik: 1, kursu: true, not_oku: true } },
{ t: "Bir yıl erteleme istersin.", to: "t3", etki: { erteledi: true } }
]},

y_kursu: { saat: "Ekim", baslik: "Amfi", metin: [
"Ekim geliyor. Eski amfidesin, ahşap sıralar, yüksek pencereler, tahtada silinmemiş bir anatomi çizimi duruyor. Üçüncü sıradaki “Gülay” yazısı hâlâ orada.",
"Kırk iki öğrenci var, çoğu ikinci sınıf. Telefonlar masalarda, arka sırada birkaç kişi fısıldaşıyor.",
"Kürsüye çıkıp bir süre hiçbir şey demiyorsun. Telefonlar tek tek kapanıyor.",
"“Bu dersi otuz yıl önce bir hocadan aldım. Arka sırada otururdum. Final ödevim ötanazi üzerineydi, karşı yazdım, B artı aldım.”",
"Birkaç kişi gülüyor.",
"“Bu yıl o hoca öldü, ALS'den. Son yılında gözleriyle konuşuyordu.”",
"Gülüşler kesiliyor.",
"“Size doğru cevapları öğretmeyeceğim, çünkü bilmiyorum. Sizden yalnızca şunu isteyeceğim, her argümanın içine bir beden koyun. Bir yatak, bir göz klavyesi koyun.”",
"Arka sıradan bir el kalkıyor. Saçını kurşunkalemle tutturmuş genç bir kadın. “Hocam, siz ne yaptınız? O hocanıza ne yaptınız?”"
], secenekler: [
{ t: "Ne yaptıysan, gerçeği anlatırsın.", to: "t3", etki: { yasa: 1, ozerklik: 1, anlatti_ders: true } },
{ t: "Önce onlar düşünsün diye “Bunu dönem sonunda konuşalım,” dersin.", to: "t3", etki: { ozerklik: 1 } },
{ t: "“Sizce ne yapmalıydım?” diye sorup dönemin final ödevini bu soru yaparsın.", to: "t3", etki: { ozerklik: 2, final: true } },
{ t: "Başka bir şey eklemeden “Yanında kaldım,” dersin.", to: "t3", etki: { merhamet: 1 } }
]},

y_not: { saat: "Ekim", baslik: "Son Notlar", metin: [
"İlk derse Nevin Hoca'nın tabletini getiriyorsun, Hande vermişti. İçinde iki yılın yazışmaları, yarım kalmış cümleler var.",
"Tableti projeksiyona bağlıyorsun. Ekranda dosyalar görünüyor: “Selçuk'a.” “Son.” “Hande.” “Bir Bedenden Yazılan Düzeltmeler.” “Spinoza.”",
"En kısasını açıyorsun, mekanik ses amfide yankılanıyor:",
"“Bugün bir öğrencim gelecek, otuz yıl önceki öğrencim. Bana bir şey sormayacak, ben ona soracağım. Cevabını bilmiyorum.”",
"Amfide çıt çıkmıyor. Biri öksürüyor, özür diler gibi elini ağzına kapatıyor.",
"Bir başkasını açıyorsun:",
"“Acının anlamı yok, kırk yıl önce yanlış yazmışım. Ama acının içinden bir şey geçebilir. Başka birinin eli, bir kedinin mırıltısı, bir öğrencinin sabrı.”",
"Ön sırada bir öğrenci saklamadan ağlıyor.",
"Tableti kapatıyorsun, kırk iki yüz sana bakıyor."
], secenekler: [
{ t: "“Bu dönem bu notları birlikte okuyacağız,” dersin.", to: "t3", etki: { ozerklik: 1, notlar_ders: true } },
{ t: "“Bugünlük bu kadar,” dersin.", to: "t3", etki: { merhamet: 1 } },
{ t: "Tahtaya bir soru yazarsın: “Bir hekim, bir hastanın ölme isteğine ne borçludur?”", to: "t3", etki: { ozerklik: 1, final: true } },
{ t: "Ağlayan öğrencinin yanına gidersin.", to: "t3", etki: { merhamet: 1 } }
]},

t3: { saat: "Aralık", baslik: "Son Dosya", metin: [
P(S("y_kursuB"), "“Dönem sonunda konuşalım,” dedin, kız da elini indirdi. Dönem boyunca her derste arka sıradan sana baktı."),
P(S("y_kursuD"), "“Yanında kaldım,” dedin. Kız başını salladı, bunun bir cevap olmadığını ama doğru olduğunu anlamış gibi."),
P(S("y_notA"), "On dört hafta boyunca bir ölünün yarım cümleleri bir amfide okundu ve her öğrenci kendi sonunu yazdı."),
P(S("y_notB"), "Dersi erken bitirdin. Çıkarken kimse konuşmadı. Biri tabletin yanına bir kalem bırakıp gitti."),
P(S("y_notC"), "Soruyu tahtaya yazdın ve silmedin. Ertesi hafta temizlikçi de silmemişti."),
P(S("y_notD"), "Ağlayan öğrencinin yanına gittin. Babası iki yıl önce ALS'den ölmüş. “Keşke onun da böyle bir tableti olsaydı,” dedi, “son altı ayında ne düşündüğünü hiç bilmiyoruz.”"),
P(S("y_kursuA"), "Anlattın, kırk iki kişi çıt çıkarmadan dinledi. Ertesi hafta amfi tıklım tıklımdı, başka sınıflardan gelip merdivenlere oturanlar vardı."),
P(S("y_kursuC"), "Dönem sonunda kırk iki ödev geldi. Yirmi ikisi “yapmalıydınız” diyordu, on dokuzu “yapmamalıydınız.” Biri boş bir sayfanın ortasına tek bir cümle yazmıştı: “Bilemem ama yanında olurdum.” Ona A verdin, sonra notu B artıya çevirdin, sonra yine A yaptın."),
P(function(d){ return d.ret_kursu; }, "Dersi kitaplardan anlatan iyi bir hoca verdi. Dönem sonunda bir öğrenci sana yazdı: “Nevin Arıkan'ın öğrencisiymişsiniz, dersi neden siz vermediniz?” Cevap vermedin."),
P(function(d){ return d.erteledi; }, "Bir yıl erteledin, dekanlık da kabul etti."),
"Aralık ayında Hande'den bir e-posta geliyor. Ekinde bir dosya var, tabletten değil, Nevin Hoca'nın eski bilgisayarından. Ölümünden aylar önce, çok uzun bir sürede yazılmış. Adı “Son Ders.”",
P(function(d){ return d.kol === "bakim"; }, "“Selçuk, hayır dedin. Senin yerinde ben de belki öyle derdim. Ama bir şey öğrendim, insan hayır duyduğunda da yalnız kalmayabiliyor. Sen hayır dedin ve kaldın.”"),
P(function(d){ return d.kol === "birak"; }, "“Selçuk, sınırın üstünde benimle durdun. Yasa buna tedavinin bırakılması diyecek, ben elin bırakılması diyorum. Senin elinin.”"),
P(function(d){ return d.kol === "zurih"; }, "“Selçuk, beni uçağa bindirdin. Bir sürgün gibi olacak sanıyordum ama değil. Burada ölmeme izin vermiyorlar ama burada uzun, güzel bir hayat yaşadım. Bu ülkeye kızgın değilim, bir kapı kapalı, o kadar.”"),
P(function(d){ return d.kol === "gizli"; }, "“Selçuk, bana bir düğme verdin. Senin için ne kadar ağır olduğunu biliyorum. Belki hiç basmam ama basarsam yaptığım son şey benim olacak.”"),
"Dosyanın sonunda tek bir satır var: “Ödevini yeniden yaz, bu sefer bir bedenle. Notunu ben veremeyeceğim, kendine ver. Cömert olma.”"
], secenekler: [
{ t: "Bu gece ödevi yeniden yazmaya başlarsın.", to: "t4", etki: { ozerklik: 1, odev_yazdi: true } },
{ t: "Dosyayı “Bu sizin,” diyerek Hande'ye geri gönderirsin.", to: "t4", etki: { merhamet: 1 } },
{ t: "Dosyayı yazdırıp Nevin Hoca'nın kitabının arasına koyarsın.", to: "t4", etki: { merhamet: 1, kitaba: true } },
{ t: "Dosyayı okursun ve bir daha açmazsın.", to: "t4", etki: { yasa: 1 } }
]},

t4: { saat: "Nisan", baslik: "Aşiyan", metin: [
P(S("t3A"), "O gece ödevi yeniden yazmaya başladın. Başlık aynı kaldı, ilk cümle şu oldu: “Bir hastam vardı.”"),
P(S("t3B"), "Hande cevap yazdı: “Hayır. Teyzem dosyanın adının altına sizin adınızı yazmış.”"),
P(S("t3C"), "Dosyayı yazdırıp kitabın arasına, onun “yanlış” dediği bölüme koydun."),
P(S("t3D"), "Bir daha açmadın ama son cümlesini, özellikle de “Cömert olma” kısmını ezbere biliyordun."),
"Bir yıl sonra nisanda Aşiyan'dasın. Yamaç erguvanlarla pembeleşmiş, aşağıdan bir şilep yavaşça geçiyor.",
"Taşta “Prof. Dr. Nevin Arıkan. 1953–2025. Felsefe yapmak, ölmeyi öğrenmektir.” yazıyor.",
"Taşın üstünde küçük, tekir bir kedi heykelciği duruyor, kulağının yırtığı bile boyanmış. Hande koymuş olmalı.",
P(function(d){ return d.itiraf; }, "Soruşturma sürüyor. Meslekten men edilmedin ama hastanede bazıları seni selamlamıyor. Bazıları da asansörde kimse yokken elini sıkıyor."),
P(function(d){ return d.ortbas; }, "Pompanın nerede olduğunu kimse bilmiyor. Belgede yanlış bir şey yok ama bir eksik var. Bir yıl boyunca her gece uyumadan önce o eksiğin şeklini düşündün."),
P(function(d){ return d.kursu; }, "Dersin ikinci dönemi başladı. Arka sırada bir öğrenci her hafta gözlerini sana dikiyor ama hiç soru sormuyor."),
"Taşın önüne çömeliyorsun."
], secenekler: [
{ t: "Yeniden yazdığın ödevi taşın üstüne bırakırsın.", to: "ds", etki: { ozerklik: 1, odev_birakti: true } },
{ t: "Bir erguvan dalı koparıp bırakırsın.", to: "ds", etki: { merhamet: 1 } },
{ t: "Hiçbir şey bırakmadan bir süre oturursun.", to: "ds", etki: { yasa: 1 } },
{ t: "Yüksek sesle konuşursun: “Hocam, notumu hâlâ beğenmedim.”", to: "ds", etki: { merhamet: 1, ozerklik: 1, son_soz: true } }
]},

ds: { yonlendir: [
{ if: function(d){ return d.kol === "gizli"; }, to: "son_suc" },
{ if: function(d){ return d.kol === "zurih"; }, to: "son_zurih" },
{ if: function(d){ return d.kol === "birak"; }, to: "son_birakmak" },
{ if: function(d){ return d.kursu; }, to: "son_ders" },
{ to: "son_bakim" }
]},

/* ---------- SONLAR ---------- */
son_bakim: { son: true, baslik: "On Bir Gün", metin: [
P(S("t4A"), "Ödevi bir çakıl taşıyla taşın üstüne sabitlemiştin."),
P(S("t4B"), "Bir erguvan dalı bırakmıştın, dalda bir arı vardı, gitmedi."),
P(S("t4C"), "Bir şey bırakmamış, bir süre oturmuştun, pantolonun toz olmuştu."),
P(S("t4D"), "“Notumu hâlâ beğenmedim,” demiştin. Bir martı cevap verir gibi bağırmıştı."),
"Hayır dedin ve onun yanında kaldın. Nevin Hoca korktuğu kutunun içinde iki hafta yaşadı. Her sabah ona bir şey okudun, bir şiir, bir öykü, kendi kitabından bir paragraf, bir keresinde de elinde o olduğu için gazetenin spor sayfasını. Cevap vermedi, belki de duydu.",
"Mesleğin, adın, belgelerin, hepsi yerinde duruyor. Ama bir insanın açıkça istediği şeyi ona vermedin.",
"Bazı geceler o iki haftayı düşünüyorsun. Orada mıydı? Spor sayfasını okurken içinden sana kızıyor muydu? Bu ihtimal bazen seni güldürüyor, sonra güldüğün için kendine kızıyorsun.",
"Hande her yıl nisanda arıyor. Konuşacak bir şey bulamayınca Spinoza'dan konuşuyorsunuz, geçen yıl iki dişini çektirmişler."
]},

son_birakmak: { son: true, baslik: "Otuz Saat", metin: [
P(S("t4A"), "Ödevi bir çakıl taşıyla taşın üstüne sabitlemiştin."),
P(S("t4B"), "Bir erguvan dalı bırakmıştın, dalda bir arı vardı, gitmedi."),
P(S("t4C"), "Bir şey bırakmamış, bir süre oturmuştun, pantolonun toz olmuştu."),
P(S("t4D"), "“Notumu hâlâ beğenmedim,” demiştin. Bir martı cevap verir gibi bağırmıştı."),
"Yasanın izin verdiği yerin tam sınırında durdun. Nevin Hoca otuz saat sonra, erguvanların karşısında, kendi salonunda öldü.",
"Soruşturma açılmadı, belge, tanıklar, rapor, hepsi yerindeydi. Suat Hoca bir gün koridorda yanına geldi. “Doğru yaptın, yasaya uygun,” dedi. Biraz durdu. “Ama yasaya uygun olunca hafiflemiyor, değil mi?” Cevap beklemeden asansöre bindi.",
"Öldürmekle bırakmak arasında bir fark var, kitaplarda var. O otuz saat boyunca o farkı odada aradın ama bulamadın. Maskeyi çıkarmak da bir şeydi, serumu açmak da, oturup beklemek de.",
"Bir yıl sonra bir kongrede hemşire Reyhan'la karşılaştınız. Kahve kuyruğunda yan yana durdunuz, ikiniz de o günden hiç söz etmediniz. O sana şekeri uzattı, sen ona karıştırıcıyı.",
"Her nisan karşı yamaca bakıyorsun."
]},

son_zurih: { son: true, baslik: "Mavi Ev", metin: [
P(S("t4A"), "Ödevi bir çakıl taşıyla taşın üstüne sabitlemiştin."),
P(S("t4B"), "Bir erguvan dalı bırakmıştın, dalda bir arı vardı, gitmedi."),
P(S("t4C"), "Bir şey bırakmamış, bir süre oturmuştun, pantolonun toz olmuştu."),
P(S("t4D"), "“Notumu hâlâ beğenmedim,” demiştin. Bir martı cevap verir gibi bağırmıştı."),
"Nevin Hoca yabancı bir şehirde, kendi gözleriyle öldü, son hareket onundu. Türkiye'deki kayıtlarda “yurt dışında ölüm” diye geçiyor.",
"Yazdığın rapor bir dosyada duruyor ama kimse sormadı.",
P(function(d){ return d.cevirdi; }, "Son anda başını çevirdin. Hande gördü ama bir şey demedi. Dönüşte uçakta kulakların tıkanmasın diye sana bir sakız uzattı."),
P(function(d){ return d.el_tuttu || d.izledi; }, "Sonuna kadar oradaydın, bir, iki, üç saniye. Sonra uyku, sonra başka bir şey. Pencereden oto yıkamanın köpükleri görünüyordu, biri radyoyu açmıştı, bir İtalyan şarkısı çalıyordu."),
"Hastalarının bazıları sana aynı şeyi soruyor. Her seferinde İsviçre'yi anlatıp anlatmamak arasında kalıyorsun. Çoğu zaman anlatmıyorsun, bazen anlatıyorsun.",
"Uçağın penceresinden şehre bakan bir kadının yüzü aklından çıkmıyor. O sefer döneceğini bilmeden bakıyordu."
]},

son_suc: { son: true, baslik: "02.47", metin: [
P(S("t4A"), "Ödevi bir çakıl taşıyla taşın üstüne sabitlemiştin."),
P(S("t4B"), "Bir erguvan dalı bırakmıştın, dalda bir arı vardı, gitmedi."),
P(S("t4C"), "Bir şey bırakmamış, bir süre oturmuştun, pantolonun toz olmuştu."),
P(S("t4D"), "“Notumu hâlâ beğenmedim,” demiştin. Bir martı cevap verir gibi bağırmıştı."),
P(function(d){ return d.itiraf; }, "Dava iki yıl sürdü. Savcı “intihara yardım” ile “kasten öldürme” arasında gidip geldi, sonunda mahkeme intihara yardımdan ceza verdi ve cezayı erteledi. Meslekten men edilmedin ama palyatif servisten alındın. Şimdi bir aile sağlığı merkezinde tansiyon ölçüyorsun."),
P(function(d){ return d.itiraf; }, "Mahkeme salonunda Hande en arka sıradaydı. Karar okununca kalkıp gitti. Akşam bir mesaj attı: “Spinoza size selam söylüyor.”"),
P(function(d){ return d.ortbas; }, "Kimse bilmiyor, yalnızca Hande ve sen biliyorsunuz. Bazen bir hastanın ölüm belgesini doldururken kalemin “neden” kutusunda biraz fazla kalıyor."),
P(function(d){ return d.ortbas; }, "Başka hastalar da aynı şeyi soruyor. Bir daha yapmadın, yapar mısın, bilmiyorsun. Mühendis arkadaşın bir akşam bira içerken “O pompa ne oldu?” diye sordu. “Hangi pompa?” dedin, bir daha sormadı."),
P(function(d){ return d.yarim; }, "Bir soruşturma açılıp kapandı, kayıtlara “hastanın kendi kullandığı bir ağrı pompası” diye geçti. Doğru ama eksik."),
"Erguvanları beklemedi, “ya bugün ya hiç” dedi. Saat 02.41'de yazmaya başlamış, yazması altı dakika sürmüş. Sonra beş saniye."
]},

son_ders: { son: true, baslik: "Son Ders", metin: [
P(S("t4A"), "Ödevi bir çakıl taşıyla taşın üstüne sabitlemiştin."),
P(S("t4B"), "Bir erguvan dalı bırakmıştın, dalda bir arı vardı, gitmedi."),
P(S("t4C"), "Bir şey bırakmamış, bir süre oturmuştun, pantolonun toz olmuştu."),
P(S("t4D"), "“Notumu hâlâ beğenmedim,” demiştin. Bir martı cevap verir gibi bağırmıştı."),
"Her ekim aynı amfide duruyorsun, kırk, elli, altmış öğrencinin karşısında. Bir öğrencinin verdiği dilekçeyle ders artık zorunlu oldu.",
"İlk derse her yıl tableti getirip bir dosya açıyorsun. Mekanik ses amfide yankılanıyor ve öğrenciler her yıl aynı yerde susuyor.",
P(function(d){ return d.kol === "bakim"; }, "Hayır dediğini ve yanında kaldığını anlatıyorsun. Bazıları buna cesaret diyor, bazıları korkaklık. İkisine de not vermiyorsun."),
"Final ödevi her yıl aynı: “Bir hekim, bir hastanın ölme isteğine ne borçludur?” Hiçbir ödeve B artıdan aşağı vermiyorsun, hiçbirine de A vermiyorsun.",
"Bir öğrenci nedenini soruyor.",
"“O notu ben veremem,” diyorsun. “Verebilecek olan öldü.”",
"Arka sırada bir el kalkıyor, hep bir el kalkıyor."
]}

},

ayna: function(d){
  var out = [];
  var a = d.yasa, b = d.merhamet, c = d.ozerklik;
  if(a >= b && a >= c) out.push("Çoğu zaman yasanın içinde kaldın. Nevin Hoca bunun için sana kızmadı ama istediğini de alamadı.");
  else if(b >= c) out.push("Çoğu zaman yanında kaldın, gecelerde, çaylarda, kedinin yanında.");
  else out.push("Çoğu zaman ne zaman, nerede, nasıl olacağına Nevin Hoca'nın karar vermesine izin verdin.");
  if(d.kol === "gizli") out.push("Gizlice bir pompa kurdun.");
  if(d.itiraf) out.push("Yaptığını savcıya kendin anlattın.");
  if(d.cevirdi) out.push("Son anda başını çevirdin.");
  if(d.kursu) out.push("Onun dersini devraldın.");
  return out;
},

dipnot: [
{ ad: "Ölme hakkı", t: "Bir insanın kendi ölümünün zamanını ve biçimini seçme hakkı olup olmadığı, John Stuart Mill'in “kişi kendi bedeni ve zihni üzerinde egemendir” ilkesinden beri tartışılır. Hollanda, Belçika, Kanada, İsviçre gibi ülkeler farklı biçimlerde yardımlı ölüme izin verir; Türkiye'de ise ötanazi ve intihara yardım suçtur. Hastanın tedaviyi reddetme hakkı ise Hasta Hakları Yönetmeliği ile tanınır." },
{ ad: "Yasa ve vicdan", t: "Sofokles'in Antigone'si devletin yasasına karşı vicdanın yasasını savunur ve bunun bedelini öder. Martin Luther King, adaletsiz bir yasaya karşı gelmenin ancak açıkça ve cezasını kabul ederek yapılabileceğini söyler. Selçuk'un her yolu, bu iki yasanın arasında bir yerde durmaktı." },
{ ad: "Öldürmek ve ölmesine izin vermek", t: "Felsefede “eylem” ile “eylemsizlik” arasındaki ahlaki farkın sınırları tartışmalıdır. James Rachels bu farkın ahlaki olarak önemsiz olduğunu savunmuştur; pek çok hukuk sistemi ve hekim ise bu ayrımı korur. Maskeyi çıkarmak bir eylem midir, yoksa bir tedavinin bırakılması mı? Odada bulunan için bu soru, kitaplardakinden başka türlü yaşanır." },
{ ad: "Acının anlamı ve kilitli zihin", t: "Viktor Frankl, insanın acıya bir anlam verebildiği sürece dayanabileceğini yazdı. Ama Jean-Dominique Bauby gibi yalnızca göz kapağıyla iletişim kurabilen hastaların tanıklıkları, “kilitli” bir zihnin ne yaşadığını bilmenin ne kadar zor olduğunu gösterir. Nevin Hoca'nın korkusu ölüm değil, bu sessizlikti." }
]
});
})();
