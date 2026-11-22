(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "son-ders",
baslik: "Son Ders",
dunya: "Gerçek dünya",
kategoriler: ["Sağlık ve Tıp"],
giris: "İstanbul, Cihangir. Sen bir palyatif bakım hekimisin; yeni hastan, otuz yıl önce sana tıp etiği dersi veren hocan. Artık hareket edemiyor, konuşamıyor; yalnızca gözleriyle, bir ekrandaki harflere bakarak yazabiliyor. Ve ilk ziyaretinde senden bir şey istiyor. Türkiye'de bu bir suç. Yasa ile vicdan, merhamet ile özerklik arasında, bir öğrencinin hocasına verebileceği son cevabın hikâyesi.",
kavramlar: ["Ölme hakkı", "Yasa ve vicdan", "Acının anlamı", "Kilitli zihin"],
ozet: "Otuz yıl önce sana tıp etiği dersi veren hocan şimdi yalnızca gözleriyle konuşabiliyor. Sen onun palyatif bakım hekimisin. Senden ölmesine yardım etmeni istiyor. Türkiye'de bu bir suç.",
baslangic: "a1",
durum: { yasa: 0, merhamet: 0, ozerklik: 0 },

sahneler: {

a1: { saat: "Ekim", baslik: "Göz Klavyesi", metin: [
"Cihangir, yokuşun ortasında eski bir apartman, üçüncü kat. Merdivenlerde kedi maması ve rutubet kokusu. İkinci katın kapısının önünde bir çift çamurlu bot. Kapıyı otuzlarında bir kadın açıyor. Saçını bir kurşunkalemle tutturmuş. Hande, hastanın yeğeni. “Hoş geldiniz Ömer Bey. Teyzem sabahtan beri saate bakıyor.”",
"Adın Ömer, elli iki yaşındasın, palyatif bakım uzmanısın. Çantanda tansiyon aleti, morfin reçeteleri ve kızının dün unuttuğu bir saç tokası.",
"Salon tavana kadar kitap. Yunanca, Almanca, Fransızca sırtlar. Bazı rafların önünde ikinci sıra. Pencerenin önünde hastane yatağı. Yatakta Prof. Dr. Nevin Arıkan, yetmiş bir, emekli felsefe profesörü. Üç yıldır ALS. Kolları, bacakları, dili, yutkunması gitmiş. Geceleri maskeyle nefes alıyor, midesindeki bir tüple besleniyor.",
"Gözleri kalmış. Yatağın önünde bir askıda tablet. Gözlerinin hareketini okuyan bir kamera. Nevin Hoca bir harfe bakıyor, bekliyor, harf seçiliyor.",
"Mekanik bir kadın sesi:",
"“Merhaba Ömer. Tıp fakültesi, 1993. Tıp etiği seçmeli. Arka sırada otururdun. Final ödevin ötanazi üzerineydi. Karşı yazmıştın. İyi ödevdi. B artı verdim.”",
"Bu cümle dört dakika sürdü. Sen o dört dakikada amfinin tahta sıralarını, sıranın üstüne birinin pergelle kazıdığı “Gülay” yazısını, B artıyı görünce koridorda arkadaşına söylendiğini hatırladın."
], secenekler: [
{ t: "Gülümsersin: “Hâlâ A hak ettiğimi düşünüyorum hocam.”", to: "a2", etki: { merhamet: 1, sakalastin: true } },
{ t: "“Sizi hatırlıyorum hocam,” dersin. Ciddi, saygılı.", to: "a2", etki: { yasa: 1 } },
{ t: "Bir şey demeden yatağın yanına oturup ekrana bakarsın. Onun hızında.", to: "a2", etki: { ozerklik: 1, sabir: true } },
{ t: "“Ödevimde ne yazdığımı hatırlıyor musunuz?” diye sorarsın.", to: "a2", etki: { odev: true } }
]},

a2: { saat: "Ekim", baslik: "İstek", metin: [
P(S("a1A"), "Ekranda harfler, yavaş: “Hâlâ B artı.” Sonra: “Ama gülümsemen A.” Mutfakta Hande bir tencere kapağı düşürdü, sonra kendi kendine güldü."),
P(S("a1B"), "Ekranda: “Saygıyı sevmezdim. Hâlâ sevmem. Otur.”"),
P(S("a1C"), "Yanına oturup her harfi onunla bekledin. Bir yerde durup sana baktı, sonra yazdı: “Kimse benim hızımda beklemiyor. Herkes cümlemi benim yerime bitiriyor. Genelde yanlış.”"),
P(S("a1D"), "Ekranda: “Hayatın kutsallığı. Kaygan zemin. Hekim iyileştirir. Üç argüman, üçü de kitaptan.” Durdu. “Yirmi iki yaşında kimsenin kendi argümanı olmaz. Bende de yoktu.”"),
"Muayene ediyorsun. Akciğer sesleri zayıf. Maske olmadan oksijeni düşüyor. Göz kaslarında da hafif bir yavaşlama var. Şimdilik.",
"Stetoskobu çantaya koyarken Nevin Hoca ekrana dönüyor. Uzun bir cümle. Dakikalar. Hande mutfaktan çıkıp kapı eşiğinde duruyor, elinde bir bulaşık bezi. Ne yazılacağını biliyor gibi.",
"“Ömer. Senden bir şey isteyeceğim. Bunu o ödevin karşı tezi say. Ölmemde bana yardım et.”",
"Ses hava durumu okur gibi. Gözler öyle değil."
], secenekler: [
{ t: "“Yapamam hocam. Bu bir suç ve ben hekimim,” dersin.", to: "a3", etki: { yasa: 2, ret: true } },
{ t: "“Neden şimdi?” diye sorarsın.", to: "x_neden", etki: { ozerklik: 1 } },
{ t: "“Düşünmem gerek,” dersin.", to: "a3", etki: { dusun: true } },
{ t: "“O ödevin argümanlarını hâlâ savunuyorum hocam. Tartışalım,” dersin.", to: "x_tartisma", etki: { yasa: 1, tartisma: true } }
]},

x_neden: { saat: "Ekim", baslik: "Kutu", metin: [
"Cevap uzun olacak. Nevin Hoca Hande'ye bir bakış atıyor; Hande iki çay getirip mutfağa çekiliyor. Seninkinin tabağına iki küp şeker koymuş, sormadan.",
"Yirmi dakika.",
"“Ağrım yok. Morfin işe yarıyor. Bunu bil. Herkes ağrıdan sanıyor. Ağrı değil.”",
"“Kırk yıl konuştum Ömer. Amfide, konferansta, bu salonda, mutfakta Hande'nin annesiyle kavga ederek. Şimdi bir göz kapağıyım. Gözlerim de gidiyor. Nörolog söyledi, sen de bugün fark ettin, yüzünden gördüm.”",
"“Gözlerim gidince bir zihin kalacak. Düşünen, duyan, ama hiçbir şeyi gösteremeyen. Herkes benim artık orada olmadığımı sanacak. Ben orada olacağım. Belki yıllarca. Biri yanımda saçma bir şey söyleyecek ve ben düzeltemeyeceğim.”",
"“Ölümden korkmuyorum. O kutudan korkuyorum.”",
"Hande mutfak kapısında, elinde bir bardak, kıpırdamadan."
], secenekler: [
{ t: "“Gözleriniz gidince başka yollar var hocam. Beyin-bilgisayar arayüzleri...” dersin.", to: "a3", etki: { yasa: 1, teknoloji: true } },
{ t: "“Anlıyorum,” dersin.", to: "a3", etki: { merhamet: 1 } },
{ t: "“Bu kararı ne zaman verdiniz?” diye sorarsın.", to: "a3", etki: { ozerklik: 1, ne_zaman: true } },
{ t: "Bir cevap bulamazsın. Çayın soğuyor.", to: "a3", etki: { merhamet: 1 } }
]},

x_tartisma: { saat: "Ekim", baslik: "Seminer", metin: [
"“Hayatın kutsallığı,” diyorsun. “İnsan hayatı, kişinin kendisi bile sonlandıramayacağı bir değer taşır. Hekim bunun bekçisidir.”",
"Nevin Hoca'nın gözleri parlıyor. Amfide iyi bir itiraz duyduğunda yaptığı gibi. Bunu hatırlıyorsun: kaşının biri kalkardı. Kaş artık kalkmıyor.",
"Ekranda, onun ölçüsüyle hızla:",
"“Kutsal olan hayat mı, yaşayan mı? Kime göre?”",
"“Kaygan zemin,” diyorsun. “Bugün siz, yarın yaşlılar, öbür gün engelliler. Kapı açılınca kimin geçeceğini kontrol edemeyiz.”",
"Uzun bir bekleyiş.",
"“Doğru. Edemeyiz. Ama kapıyı kapalı tutarak bir şeyi kontrol ediyoruz: bana ne olacağını. Ben zeminde kaymıyorum Ömer. Ben dipteyim.”",
"Sonra:",
"“O ödevi hatırlıyorum. İyi ödevdi. İçinde kimsenin bedeni yoktu.”"
], secenekler: [
{ t: "“Haklısınız hocam. Bedeni olmayan bir argüman yarım,” dersin.", to: "a3", etki: { ozerklik: 1, kabul_argüman: true } },
{ t: "“Ama benim bedenim var hocam. Sizi kendi elimle öldüremem,” dersin.", to: "a3", etki: { yasa: 1, beden: true } },
{ t: "Tartışmaya devam edersin, saatlerce. Ona iyi geldiğini görüyorsun.", to: "a3", etki: { merhamet: 1, seminer: true } },
{ t: "Susup dinlersin.", to: "a3", etki: { merhamet: 1 } }
]},

a3: { saat: "Kasım", baslik: "Hande", metin: [
P(S("x_nedenB"), "“Anlıyorum,” dedin. Nevin Hoca bir kez kırptı. Ekranda: “Anlamıyorsun. Ama iyi denedin.”"),
P(S("x_nedenD"), "Bir şey diyemedin. Çay soğudu. Hande bardakları topladı. Seninki dolu, şekerler erimemiş."),
P(S("x_tartismaA"), "“Bedeni olmayan argüman yarım,” dedin. Ekranda tek kelime: “Aferin.” Otuz yıl gecikmiş bir A."),
P(S("x_tartismaB"), "“Kendi elimle öldüremem.” Ekranda: “Öldürmeni istemiyorum. Bırakmanı istiyorum. Bütün tartışma bu farkta.”"),
P(S("x_tartismaD"), "Sustun. Nevin Hoca bir süre daha yazdı: Hume, sonra bir şaka, sonra Hume. Sonra gözleri yoruldu, kapandı. Sen hâlâ dinliyordun."),
P(S("a2A"), "Ekranda: “Biliyorum. Herkes öyle söylüyor. Sen bunu yüzüme söyledin, o fark.” Gözlerini kapattı."),
P(S("a2C"), "Ekranda: “Düşün. Çok uzun düşünme. Gözlerim seni beklemeyebilir.”"),
P(S("x_nedenA"), "“Okudum,” yazdı. “Elektrot, implant. Belki. Kutu bir pencere kazanır. Yine kutu.”"),
P(S("x_nedenC"), "Ekranda: “Bir yıl önce. Ellerim gidince. Sana o zaman sormadım çünkü bir yılım vardı.”"),
P(S("x_tartismaC"), "Üç saat tartıştınız. Hande iki kez çay tazeledi. Bir yerde Nevin Hoca'nın gözleri kaydı, harfler anlamsızlaştı: “kkantt”. Sonra toparlandı. Sonunda: “Uzun zamandır böyle bir akşam geçirmedim. Fikrim değişmedi. Teşekkür ederim.”"),
"Birkaç hafta sonra, ikinci ziyarette, Hande seni kapıda yakalayıp mutfağa çekiyor, kapıyı kapatıyor. Tezgâhta yıkanmış şırıngalar kurusun diye bir havlunun üstüne dizilmiş.",
"Otuz dört yaşında. İki yıldır teyzesine bakıyor. İşini bırakmış, kendi evini kiraya vermiş, salonun köşesindeki çekyatta uyuyor. Gözlerinin altı mor.",
"“Ömer Bey,” diyor alçak sesle. “Kimseye söylemedim. Ben de ölmesini istiyorum.”",
"Bulaşık bezini katlayıp açıyor.",
"“Onun için mi, kendim için mi, bilmiyorum. Bazı geceler uyanıp maskenin sesini dinliyorum ve bir saniye, bir saniyecik, dursun istiyorum. Sonra kalkıp maskenin hortumunu kontrol ediyorum. Ben canavar mıyım?”"
], secenekler: [
{ t: "“Hayır. Yorgunsunuz,” dersin.", to: "sd_balkon", etki: { merhamet: 1, defne_teselli: true } },
{ t: "“Bu duygu teyzenizin kararına karışmamalı,” dersin.", to: "a4", etki: { ozerklik: 1, ayir: true } },
{ t: "Ona hemen bir bakım destek ekibi ve bir psikolog ayarlarsın.", to: "a4", etki: { yasa: 1, destek: true } },
{ t: "“Teyzeniz bunu biliyor mu?” diye sorarsın.", to: "sd_iki_kadin", etki: { ozerklik: 1, teyze_bilir: true } }
]},

a4: { saat: "Kasım", baslik: "Etik Kurul", metin: [
P(S("sd_balkonA"), "“Bir editör,” dedi Hande, kelimeyi denedi. Bir an yüzünde iki yıl önceki kadın göründü. Sonra içeri girip teyzesinin tabletini düzeltti."),
P(S("sd_balkonC"), "Hande içeri girip teyzesine sordu. Cevap yarım saat sürdü. Hande okudu, ağladı, sana göstermedi. Ertesi hafta yayınevini aradığını duydun."),
P(function(d){ return d.son === "sd_balkonB" || d.son === "sd_balkonD"; }, "Hande izmariti saksıya gömüp içeri girdi. Balkonda yalnız kaldın. Aşağıda bir simitçi son simitlerini satmaya çalışıyordu."),
P(S("sd_iki_kadinC"), "Hande'ye bir hemşire ayarlayabileceğini söyledin. “Gidebilir miyim gerçekten?” dedi. Bir hafta sonra Berlin'e bir e-posta yazdı. Gitmedi henüz. Yazdı."),
P(S("sd_iki_kadinD"), "Cevap uzun sürdü: “Belki. Birini korumanın en eski yolu ondan önce gitmek. Annem de öyle yaptı. Ona kızmıştım. Şimdi anlıyorum.”"),
P(function(d){ return d.son === "sd_iki_kadinA" || d.son === "sd_iki_kadinB"; }, "O gece yokuşu inerken arabanın camını açtın. Bu evde iki kadın birbirini korumak için birbirinden ayrılmaya çalışıyordu."),
P(S("a3A"), "Hande ağladı. Birinin önünde, belki iki yıldır ilk kez. “Yorgunum,” dedi. “Evet. Çok.”"),
P(S("a3B"), "Hande başını salladı. “Biliyorum. Bu yüzden ona hiç söylemedim. Karar onun olsun. Ama ben de bu evde yaşıyorum Ömer Bey.”"),
P(S("a3C"), "Bir hafta sonra bir bakım asistanı gelmeye başladı. Hande ilk gün dışarı çıkıp dört saat Boğaz kıyısında yürüdü. Sana mesaj attı: “Denizi unutmuşum.”"),
P(S("a3D"), "“Biliyor,” dedi Hande. “Bir gece yazdı: ‘Yorgunsun. Senin için de istiyorum.’ Ben ağladım. O da ağladı, gözleriyle. Sizden saklamıştık.”"),
"Hastanenin etik kurulu başkanı Dr. Suat Erol, altmışlarında bir dahiliyeci, odasında bekliyor. Masada Türk Ceza Kanunu açık, yanında yarısı yenmiş bir elma.",
"“Ömer, açık konuşalım. Ötanazi yasak. Aktif olarak ölümüne yardım edersen kasten öldürmeden yargılanırsın. İntihara yardım da suç.”",
"Başka bir kâğıt çıkarıyor. “Ama hasta tedaviyi reddedebilir. Bilinci yerindeyse solunum desteğini, tüple beslenmeyi reddedebilir. Bu ötanazi değil.”",
"“Bir de palyatif sedasyon var: başka hiçbir şeyle geçmeyen semptomlarda derin uyku. Ama ‘varoluşsal acı’ semptom mu? Kurul bunda ikiye bölünmüş. Ben de bölünmüş kurulun başkanıyım.” Elmayı alıp bir ısırık daha alıyor, sonra bırakıyor."
], secenekler: [
{ t: "“Hocam, yasanın izin verdiği yerin tam sınırına kadar gitmek istiyorum,” dersin.", to: "a5", etki: { yasa: 1, ozerklik: 1, sinir: true } },
{ t: "“Varoluşsal acı da acıdır hocam,” dersin.", to: "a5", etki: { merhamet: 1, varolussal: true } },
{ t: "“Yasanın dışına çıkmayacağım hocam,” dersin.", to: "a5", etki: { yasa: 2 } },
{ t: "“Siz onun yerinde olsanız ne isterdiniz hocam?” diye sorarsın.", to: "a5", etki: { ozerklik: 1, suata_sordu: true } }
]},

a5: { saat: "Aralık, 03.10", baslik: "Gece", metin: [
P(S("a4A"), "Suat Hoca seni süzdü. “Sınırın tam üstünde durmak,” dedi, “en yalnız yer. Bil bunu.”"),
P(S("a4B"), "Suat Hoca elmanın sapını çevirdi. “Benim de bir annem vardı,” dedi. Başka bir şey eklemedi."),
P(S("a4C"), "Suat Hoca'nın omuzları indi. “Güzel,” dedi. Elmasını bitirdi."),
P(S("a4D"), "Suat Hoca gözlüğünü çıkarıp camlarını kravatıyla sildi. “Bunu bana kimse sormaz,” dedi. “Kurulda ‘hasta ne ister, yasa ne der’ derler. ‘Sen ne isterdin’ diyen olmaz.” Gözlüğü takmadı. Elinde tuttu."),
"Aralık. Gece üçü on geçe telefon. Hande. Arkada bir alarm.",
"“Ömer Bey, nefes alamıyor! Balgam! Aspiratörü çalıştırdım ama...”",
"Yirmi dakikada oradasın. Arabayı kaldırımın üstüne bırakıyorsun. Nevin Hoca'nın yüzü mor, gözleri açık, panik içinde. Sondayı ilerletiyorsun, çekiyorsun. Bir. İki. Üçüncüde açılıyor. Maske yerine. Oksijen: seksen, seksen beş, doksan.",
"Nevin Hoca gözlerini kapatıyor. Sonra açıp ekrana dönüyor. Hande tableti düzeltiyor. Elleri titriyor.",
"Harfler, titrek:",
"“Neden kurtardın?”"
], secenekler: [
{ t: "“Görevim bu hocam,” dersin.", to: "a6", etki: { yasa: 1, gorev: true } },
{ t: "“Bilmiyorum. Ellerim yaptı,” dersin.", to: "a6", etki: { merhamet: 1, eller: true } },
{ t: "“Henüz konuşmadık hocam. Bir gecede olmaz,” dersin.", to: "a6", etki: { ozerklik: 1 } },
{ t: "Cevap vermezsin. Sabaha kadar yanında oturursun.", to: "a6", etki: { merhamet: 1, sabah: true } }
]},

a6: { saat: "Aralık", baslik: "Karar", metin: [
P(S("a5A"), "Ekranda: “Görev.” Uzun bir aradan sonra: “Doğru. Kızmıyorum. Ama bir dahakine önce bana sor.”"),
P(S("a5B"), "Ekranda: “Ellerin.” Sonra: “Ellerin yaşatmak istiyor. Sen ne istiyorsun?”"),
P(S("a5C"), "Ekranda: “Bir gecede olmaz, doğru. Ama bir gece gelecek ve o gece yazamayacağım.”"),
P(S("a5D"), "Sabaha kadar oturdun. Nevin Hoca uyudu, uyandı. Sen oradaydın. Ekranda tek kelime: “Kal.” Kaldın. Güneş Üsküdar'ın üstünden doğana kadar. Hande sabah ikinize de çay koydu, seninkine yine iki şeker."),
"Bir hafta sonra yine Cihangir. Hande seni salona alıp mutfağa geçiyor. Bu kez kapıyı açık bırakıyor.",
"Nevin Hoca ekranda bir dosya açmış: “Ömer'e.” Mekanik ses okuyor:",
"“Bu senin için kolay değil, biliyorum. Seçenekleri ben sıralayayım. Bir: hayır de. Bana iyi bak. Yanımda ol. Bunu da kabul ederim. İki: yasanın tanıdığı hakkı kullanmama yardım et. Maskeyi, tüpü bırakayım. Sen uyut beni. Üç: İsviçre. Param var. Raporlarımı yaz. Dört: bunu yazmaya utanıyorum ama yazıyorum. Bana bir yol bırak. Kimsenin bilmeyeceği.”",
"Ekran kararıyor.",
"Nevin Hoca sana bakıyor. Amfide sınav kâğıtlarını dağıtırken baktığı gibi."
], secenekler: [
{ t: "“Hayır hocam. Ama söz: sonuna kadar yanınızdayım.” Onu korktuğu kutuya bırakmak pahasına.", to: "bk1", etki: { yasa: 1, merhamet: 1, kol: "bakim" } },
{ t: "“İkinci yol: tedaviyi bırakmak. Yasanın sınırında. Ben de sizinle o sınırda duracağım.” O sınırı bir gün bir savcının nereye çizeceğini bilmeden.", to: "br1", etki: { ozerklik: 2, kol: "birak" } },
{ t: "“İsviçre. Raporlarınızı yazacağım.” Onun kendi şehrinden uzakta, yabancı bir odada ölmesine razı olarak.", to: "z1", etki: { ozerklik: 2, kol: "zurih" } },
{ t: "Bir şey demezsin. Gözlerine bakıp yavaşça başını sallarsın. Neye evet dediğinizi ikiniz de biliyorsunuz.", to: "g1", etki: { merhamet: 2, kol: "gizli" } }
]},


sd_balkon: { saat: "Kasım", baslik: "Balkon", metin: [
"Hande'yi balkona çıkarıyorsun. Kasım akşamı, Cihangir'in damları, uzakta Boğaz. Hande bir sigara yakıyor. İki yıldır içmediğini söylüyor, çakmağı üç kere çakıyor.",
"“Bir yayınevinde editördüm,” diyor. “Şiir. Kimse okumaz şiir, ben okurdum. Bir sevgilim vardı, Berlin'e gitti, ‘Gel’ dedi. Gitmedim. Teyzem hastalandı. Annem yok, babam yok. Kim bakacaktı?”",
"“İki yıl. Bu çekyatta, bu maskenin sesiyle. Her gece onun yerine de nefes alıyorum gibi.”",
"İçeriden mekanik ses, balkona kadar:",
"“Hande. Sigarayı söndür. Ve gel.”",
"Hande gülüyor. “Duyuyor,” diyor. “Balkonda ağladığımı da duyuyor, biliyorum.”",
"Sigarayı saksıya bastırıyor. Kapıda dönüyor: “O ölünce ben ne olacağım Ömer Bey? Bakıcı mı, yeğen mi? İki yıldır yalnızca onun etrafında varım.”"
], secenekler: [
{ t: "“Bir editör,” dersin. “Şiir okuyan.”", to: "a4", etki: { merhamet: 1, editor: true } },
{ t: "“Bunu şimdi düşünün. O öldükten sonra değil,” dersin.", to: "a4", etki: { ozerklik: 1 } },
{ t: "“Bunu ona sorun,” dersin. “Cevap vermek isteyebilir.”", to: "a4", etki: { ozerklik: 1, ona_sor: true } },
{ t: "Bir şey demeden içeri girersin.", to: "a4", etki: { yasa: 1 } }
]},

sd_iki_kadin: { saat: "Kasım", baslik: "Git", metin: [
"“Biliyor,” diyor Hande. Tabletin geçmiş mesajlarını açıp gösteriyor. Bir gece, saat üç:",
"“Yorgunsun. Biliyorum. Senin için de istiyorum.”",
"Hande tableti alıp salona dönüyor. Sen kapıda kalıyorsun. Hande yatağın yanına diz çöküyor.",
"“Teyze, o mesajı yine okudum. ‘Senin için de’ yazmışsın. İstemiyorum. Benim için ölme. Benim yorgunluğum senin sebebin olmasın.”",
"Ekranda uzun bir süre bir şey çıkmıyor. Sonra:",
"“Senin için ölmüyorum. Ama senin için de ölüyorum. İkisi birden doğru. Kırk yıl öğretmeye çalıştım sana bunu, hep matematik dersine kaçtın.”",
"Hande burnunu çekip gülüyor.",
"“Git. Berlin'e. Şiirlerine. Ben bir hemşireyle de ölürüm. Sen benimle ölme.”"
], secenekler: [
{ t: "Odaya girip Hande'nin omzuna dokunursun.", to: "a4", etki: { merhamet: 1 } },
{ t: "Kapıyı yavaşça çekersin.", to: "a4", etki: { ozerklik: 1 } },
{ t: "Sonra Hande'ye bir bakım hemşiresi ayarlayabileceğini söylersin. Gidebilsin diye.", to: "a4", etki: { yasa: 1, destek: true, berlin: true } },
{ t: "Hande çıkınca Nevin Hoca'ya sorarsın: “Onu kendi ölümünüzden mi koruyorsunuz?”", to: "a4", etki: { ozerklik: 1, nevin_soru: true } }
]},

sd_kenar: { saat: "Bir ay sonra", baslik: "Kenar Notları", metin: [
"Koliyi eve götürüyorsun. Gece, mutfak masasında, kitapları tek tek açıyorsun.",
"Genç Nevin'in el yazısı. Hızlı, eğik. “Burayı genişlet.” “Zayıf.” “Simone'a sor.” Bir sayfada yalnızca bir ünlem. Bir başkasında kahve lekesi ve altında: “Paris, 1981, Cafe de Flore. Yağmur. Şemsiyeyi yine unuttum.”",
"“Acı ve Anlam”ın kenarında çok daha yeni, titrek bir yazı. Ellerinin son yılından.",
"“Bunu yanlış yazmışım. Acının anlamı yok. Ama acıya rağmen anlam bulanlar var ve benden akıllılar. Ben henüz değilim.”",
"Arka kapağın içinde katlanmış bir kâğıt. Tarih yok. “Chère Simone,” diye başlıyor, sonra Türkçeye geçiyor:",
"“Bu mektubu sana gönderemeyeceğim, çünkü sen çoktan öldün. Yine de yazıyorum. Ölülere yazmak kolay. Cevap vermiyorlar.”",
"Simone kim? Kimse sana söylemeyecek. Kâğıdın bir köşesinde küçük bir kedi çizimi."
], secenekler: [
{ t: "Mektubu Hande'ye gösterirsin. Belki biliyordur.", to: "t2", etki: { merhamet: 1, simone_defne: true } },
{ t: "Mektubu kitabın içine geri koyarsın.", to: "t2", etki: { ozerklik: 1 } },
{ t: "Kenar notlarını bir deftere geçirmeye başlarsın. Bir gün yayımlanmak üzere.", to: "t2", etki: { ozerklik: 1, notlar_defter: true } },
{ t: "Sen de bir mektup yazarsın. Ölü birine. Nevin Hoca'ya.", to: "t2", etki: { merhamet: 1, mektup_yazdi: true } }
]},

sd_kedi: { saat: "İki ay sonra", baslik: "Mırıltı", metin: [
"Koliyi açmadan dolabın üstüne koydun. İki ay orada durdu. Kızın bir gün üstüne ders kitaplarını yığdı.",
"Bir akşam Hande arıyor. “Bir hafta Berlin'e gidiyorum. Şiir festivali. İki yıl sonra ilk kez bir yere.” Duraksıyor. “Spinoza'yı size bırakabilir miyim? Komşu alerjik çıktı.”",
"Spinoza ilk gün kanepenin altından çıkmıyor. İkinci gün mutfakta mamasını kokluyor, yemiyor. Üçüncü gece sen kanepede kitap okurken yanına çıkıyor.",
"Sonra göğsüne. Ağır, sıcak. Mırlıyor.",
"Mırıltıyı göğüs kemiğinde hissediyorsun. Nevin Hoca'nın yazdığı aklına geliyor: “Bütün kaslarım gitti ama derim kaldı.”",
"Dokunma en son giden duyulardan biridir. Biliyorsun. Görme gider, işitme silinir, deri hâlâ hisseder.",
"Spinoza uyuyor. Kımıldamıyorsun. Kitap açık, okunmadan. Kızın geçerken ikinizin fotoğrafını çekiyor, sesini kapatmayı unutuyor."
], secenekler: [
{ t: "Koliyi dolabın üstünden indirip açarsın.", to: "t2", etki: { merhamet: 1, koli_acti: true } },
{ t: "Bir hafta her akşam böyle oturursun.", to: "t2", etki: { merhamet: 1 } },
{ t: "Hande dönünce Spinoza'yı sende tutmayı teklif edersin.", to: "t2", etki: { merhamet: 1, spinoza_sende: true } },
{ t: "Bir yere yazarsın: kilitli zihinde dokunma kalır mı?", to: "t2", etki: { ozerklik: 1, yazdi: true } }
]},

/* ---------- BAKIM KOLU ---------- */
bk1: { saat: "Ocak", baslik: "Söz", metin: [
"“Hayır,” diyorsun. “Ama sonuna kadar yanınızdayım. Ağrınızın, nefesinizin başında. Gözleriniz gittiğinde de.”",
"Nevin Hoca uzun süre bakıyor. Ekranda:",
"“Söz ders değildir Ömer. İyi bir söz ama.” Sonra: “Hayal kırıklığına uğradım. Sana saygı da duyuyorum. İkisi birden, evet. Sınavda çıkar.”",
"Haftada üç ziyaret. Morfin, düşük doz. Zihni bulanmasın. Gece için bir hemşire. Hande'ye haftada iki gün izin.",
"Bir de kitaplarını ona sesli okumaya başlıyorsun. Kendi kitaplarını.",
"İlk gün “Acı ve Anlam”ın ilk bölümü. Nevin Hoca bir yerde gözlerini kapatıyor. Uyudu sanıyorsun. Ekranda bir kelime: “Yanlış.” Duruyorsun. “Kırk yıl önce yanlış yazmışım. Devam et. Ama yanlış olduğunu bil.”"
], secenekler: [
{ t: "“Neresi yanlış hocam?” diye sorarsın.", to: "bk2", etki: { ozerklik: 1, yanlis: true } },
{ t: "Okumaya devam edersin.", to: "bk2", etki: { merhamet: 1 } },
{ t: "Kitabı kapatıp başka bir şey okumayı teklif edersin: şiir, öykü, gazete.", to: "bk2", etki: { merhamet: 1, siir: true } },
{ t: "“Bir sonraki baskı için düzeltmelerinizi bana yazdırın,” dersin.", to: "bk2", etki: { ozerklik: 1, notlar: true } }
]},

bk2: { saat: "Şubat", baslik: "Spinoza", metin: [
P(S("bk1B"), "Okumaya devam ettin. Bölüm bitince ekranda: “Sağ ol.” Neye, sormadın."),
P(S("bk1A"), "Ekranda: “Acı insanı derinleştirir diye yazmışım. Acı çekmeyen biri yazmış bunu. Acının anlamı yok. Anlam, acıya rağmen bulduğun şey.”"),
P(S("bk1C"), "Bir gün Cemal Süreya, bir gün Sait Faik. Bir öyküde Nevin Hoca gözlerini kapattı. “Burgaz,” yazdı sonra. “Bir yaz orada kalmıştık. Hande'nin annesi denizde kolunu kırmıştı.” Ertesi hafta Hande onu tekerlekli sandalyeyle balkona çıkardı. Bir yıl sonra ilk kez."),
P(S("bk1D"), "Not almaya başladın, her ziyarette yarım saat. Kırk yıllık kitaba yeni bir son bölüm. Başlığını o koydu: “Bir Bedenden Yazılan Düzeltmeler.”"),
"Şubat. Evde bir kedi var: Spinoza. On beş yaşında, tekir, tek kulağı yırtık. Nevin Hoca emekli olduğu yıl sokaktan almış. Gün boyu yatağın ayak ucunda uyuyor, arada maskenin hortumuna pati atıyor.",
"Bir öğleden sonra Spinoza yatağa çıkıp Nevin Hoca'nın göğsüne yatıyor. Mırlıyor. Nevin Hoca'nın yüzünde, felçli kaslarında, bir şey kıpırdıyor. Gülümseme değil, gülümsemenin hatırası.",
"Ekranda, uzun uğraşla:",
"“Mırlaması. Hâlâ hissediyorum. Derim hissediyor. Bütün kaslarım gitti ama derim kaldı. Bilmiyordum.”",
"Sonra:",
"“Belki kutuda da bir kedi olur.”"
], secenekler: [
{ t: "“Belki,” dersin.", to: "bk3", etki: { merhamet: 1 } },
{ t: "“Kutu sandığınız kadar boş olmayabilir hocam,” dersin.", to: "bk3", etki: { yasa: 1, umut: true } },
{ t: "Kediyi okşarsın.", to: "bk3", etki: { merhamet: 1 } },
{ t: "“Fikriniz değişti mi?” diye sorarsın.", to: "bk3", etki: { ozerklik: 1, fikir_sordu: true } }
]},

bk3: { saat: "Mart", baslik: "Gözler", metin: [
P(S("bk2A"), "“Belki,” dedin. Nevin Hoca'nın gözlerinde bir şey güldü. Dudakları kıpırdamadı."),
P(S("bk2B"), "Ekranda: “Bunu kutudan çıkan biri söylese inanırdım.”"),
P(S("bk2C"), "Kediyi okşadın. Spinoza mırladı. Ses odayı doldurdu. Nevin Hoca gözlerini kapattı."),
P(S("bk2D"), "Ekranda uzun bir bekleyiş. “Hayır. Ama bugün değişmedi diye yarın değişmeyecek değil. Bir fikri bir kere düşünüp ömür boyu düşündüğünü sanmak. Meslektaşlarımın çoğunun hastalığı buydu.”"),
"Mart. Kamera bakışları artık zor okuyor. Bazı harflere ulaşamıyor. Bir cümle eskiden beş dakikaydı, şimdi yirmi.",
"Nörolog: birkaç hafta. Sonra yalnızca göz kırpışları. Evet için bir, hayır için iki. Sonra belki o da yok.",
"Bir sabah Hande kapıda. “Bütün gece bir şey yazmaya uğraştı. Bitirdi. Sizi bekliyor.”",
"Ekranda bir dosya: “Son.” Mekanik ses:",
"“Ömer. Gözlerim gidince bir sorum olacak ve soramayacağım. Şimdi soruyorum: o zaman bana nasıl bakacaksın? Hasta gibi mi, beden gibi mi, yoksa orada hâlâ biri varmış gibi mi? Cevap verme. Hatırla.”",
"Nevin Hoca gözlerini kapatıyor. Sonra açıp bir kez kırpıyor: evet. Neye evet dediğini bilmiyorsun."
], secenekler: [
{ t: "“Hâlâ orada biri varmış gibi. Her zaman,” dersin. Cevap verme dese de.", to: "t1", etki: { merhamet: 1, cevap_verdi: true } },
{ t: "Cevap vermezsin. Hatırlayacaksın.", to: "t1", etki: { ozerklik: 1 } },
{ t: "Bir evet-hayır sistemi kurarsın. Gözleri gittiğinde de konuşabilsin diye.", to: "t1", etki: { yasa: 1, sistem: true } },
{ t: "Eğilip alnından öpersin.", to: "t1", etki: { merhamet: 1, opucuk: true } }
]},

/* ---------- BIRAKMA KOLU ---------- */
br1: { saat: "Ocak", baslik: "Ret Belgesi", metin: [
"Yasanın sınırı kâğıtların içinden geçiyor. Bir avukat, Suat Hoca, bir noter. Bilinci yerinde bir hastanın hayati tedaviyi reddetmesi: bir belge, iki tanık, bir psikiyatri raporu, bir bekleme süresi.",
"Psikiyatrist geliyor. İki saat, ekranın hızında. Çıkarken kapıda: “Depresyonu yok. Karar verme yetisi tam. Benimkinden tam.” Sonra ekliyor: “Bir de beni Kierkegaard'dan sınava çekti.”",
"Belge hazırlanıyor. İmza yerinde bir sorun: imza atamaz. Noter düşünüyor, kalemini dişliyor. Sonunda: video kaydı, iki tanık, gözle seçilmiş harflerle adı, Hande'nin eliyle bir parmak izi.",
"Nevin Hoca adını seçiyor. N. E. V. İ. N. On beş dakika. Noter bir ara saatine bakıyor, sonra utanıp kolunu indiriyor.",
"Hande teyzesinin parmağını ıstampaya, sonra kâğıda bastırıyor. Hande'nin eli titriyor; Nevin Hoca'nınki titreyemiyor.",
"Bir tarih seçilecek. Ekranda: “Bahar. Erguvanlar açınca. Son bir kere görmek istiyorum.”"
], secenekler: [
{ t: "Kabul edersin. Erguvanları beklersiniz.", to: "br2", etki: { ozerklik: 1, erguvan: true } },
{ t: "“Bahar uzak hocam. O zamana kadar gözleriniz...” diye başlarsın.", to: "br2", etki: { yasa: 1, erken: true } },
{ t: "Hande'ye bu tarihi onun da isteyip istemediğini sorarsın.", to: "br2", etki: { merhamet: 1, defne_onay: true } },
{ t: "Belgeyi kelime kelime bir kez daha okursun.", to: "br2", etki: { yasa: 1 } }
]},

br2: { saat: "Nisan", baslik: "Erguvan", metin: [
P(S("br1A"), "Erguvanları beklediniz. Her hafta karşı yakaya baktın: tomurcuk, sonra pembe bir buğu. Her hafta gözleri biraz daha yavaşladı."),
P(S("br1D"), "Belgeyi yeniden okudun. Bir virgül eksikti. Noter yeniden yazdırdı. Bir ölüm, bir virgül kadar gecikti."),
P(S("br1B"), "Nevin Hoca düşündü. “Haklısın. Kırk yıl her nisan gördüm. Birini atlarsam bir şey olmaz.” Tarih mart sonuna alındı."),
P(S("br1C"), "Hande bir süre ellerine baktı. Parmak uçlarında hâlâ mürekkep vardı. “Bahar,” dedi. “Benim de onunla son baharım.”"),
"Nisan. Hande yatağı pencerenin önüne çekmiş. Karşıda Kandilli'nin yamaçları pembe, mor. Nevin Hoca bütün sabah onlara bakıyor.",
"Öğleden sonra hazırlık. Bir hemşire, sen, Hande, Spinoza. Bir serum askısı. Sedasyon ilaçları. Maske hâlâ yüzünde.",
"Plan konuşuldu: önce sedasyon, derin uyku. Sonra maske çıkarılacak. Tüple beslenme günler önce durdu. Sonra ne kadar sürer? Saatler, belki bir gün. Yasa buna tedavinin bırakılması diyor. Senin ellerin farkı o kadar iyi bilmiyor.",
"Nevin Hoca son mesajını yazıyor. Yirmi dakika.",
"“Ömer. Hande. Spinoza. Erguvanlar. Teşekkürler. Ders bitti. Sınav yok.”",
"Spinoza yatağa çıkıp göğsüne yatıyor. Nevin Hoca sana bakıp bir kez kırpıyor."
], secenekler: [
{ t: "Sedasyonu kendin başlatırsın.", to: "br3", etki: { ozerklik: 1, kendi_eli: true } },
{ t: "Hemşireye başlatmasını söylersin.", to: "br3", etki: { yasa: 1, hemsire: true } },
{ t: "Durursun. “Emin misiniz hocam?” diye son kez sorarsın.", to: "br3", etki: { yasa: 1, son_soru: true } },
{ t: "Hande'yle birlikte serumu açarsınız. Onun eli seninkinin üstünde.", to: "br3", etki: { merhamet: 1, birlikte: true } }
]},

br3: { saat: "Nisan", baslik: "Otuz Saat", metin: [
P(S("br2A"), "Sedasyonu kendin başlattın. Valf parmaklarının altında soğuktu."),
P(S("br2B"), "Hemşireye söyledin. Hemşire sana bir an baktı, sonra başlattı. O bakışı unutmadın. Adını da unutmadın: Saadet."),
P(S("br2C"), "Nevin Hoca bir kez kırptı. Sonra bir daha. İki. Kalbin durdu. Sonra ekranda son harfler: “Sorma. Ama sorduğun için sağ ol.”"),
P(S("br2D"), "Hande'nin eli seninkinin üstündeydi. Serum açıldı."),
"İlaç giriyor. Nevin Hoca erguvanlara bakmaya çalışıyor. Göz kapakları iniyor.",
"Bir saat sonra maskeyi çıkarıyorsun. Makine susuyor. Üç yıldır bu salonda hiç olmamış bir sessizlik. Buzdolabının motorunu duyuyorsun.",
"Nefesi zayıf ama düzenli. Kendi nefesi.",
"Sandığından uzun sürüyor. Gece oluyor. Hande sandalyede uyukluyor. Spinoza göğsünde.",
"Gece ikide nefesler seyreliyor. Sabaha karşı bir süre tamamen duruyor, sonra yeniden başlıyor; Hande uyanıp sana bakıyor, sen başını iki yana sallıyorsun.",
"Öğleden sonra, otuz saat sonra, bir nefes alıyor ve vermiyor.",
"Karşı yamaçta erguvanlar hâlâ açık."
], secenekler: [
{ t: "Ölüm belgesine yazarsın: amiyotrofik lateral skleroz, solunum yetmezliği. Doğru ve eksik.", to: "t1", etki: { yasa: 1 } },
{ t: "Hande'yi uyandırıp birlikte pencereyi açarsınız.", to: "t1", etki: { merhamet: 1, pencere: true } },
{ t: "Spinoza'yı kucağına alırsın.", to: "t1", etki: { merhamet: 1, spinoza: true } },
{ t: "Bir süre hiçbir şey yapmazsın.", to: "t1", etki: { ozerklik: 1 } }
]},

/* ---------- ZÜRİH KOLU ---------- */
z1: { saat: "Ocak", baslik: "Belgeler", metin: [
"İsviçre'de yabancıları da kabul eden bir dernek. Koşullar: iyileşmez ağır hastalık, karar yetisi, tekrarlanan istek. Ve son adımı hastanın kendisinin atması: ilacı kendi içmesi ya da vanayı kendi açması.",
"Nevin Hoca'nın eli yok.",
"Dernekten cevap: göz kontrollü bir infüzyon pompası. Hasta ekrana bakarak vanayı kendisi açar. Daha önce yapılmış.",
"Senden bir rapor isteniyor: tanı, prognoz, karar yetisi. Türkiye'de bunu yazmak suç mu? Avukat: “Gri. Rapor yazmak suç değil. Ama ne için yazıldığını biliyorsan ve savcı bunu yardım sayarsa... Deneyen olmadı.”",
"Hande bu planı duyduğundan beri sana bakmıyor. Çayını tabağa koyup gidiyor.",
"“Onu uçağa mı bindireceksiniz?” diyor sonunda. “Makineleriyle, maskesiyle? Yabancı bir şehirde, yabancı bir odada ölsün diye? Neden kendi kitaplarının arasında değil?”",
"Nevin Hoca dinliyor. Ekranda: “Çünkü burada seni suçlu yaparlar.”"
], secenekler: [
{ t: "Raporu yazarsın. Bütün riskini üstlenerek.", to: "z2", etki: { ozerklik: 1, rapor: true } },
{ t: "Raporu yazarsın ama yalnızca tıbbi gerçeklerle. Amacından söz etmeden.", to: "z2", etki: { yasa: 1, rapor: true, temkin: true } },
{ t: "Hande'yle yalnız konuşursun. Onun da razı olması gerek.", to: "z2", etki: { merhamet: 1, rapor: true, defne_konustu: true } },
{ t: "Nevin Hoca'ya son bir kez burada, ikinci yoldan ölmeyi önerirsin.", to: "z2", etki: { yasa: 1, rapor: true, ikinci_oneri: true } }
]},

z2: { saat: "Şubat", baslik: "Uçak", metin: [
P(S("z1A"), "Raporu yazdın. Tarihi atarken elin titremedi. Titremesinden korkmuştun."),
P(S("z1B"), "Raporu yazdın. Yalnızca tıbbi gerçekler. Amaç hakkında tek kelime yok."),
P(S("z1C"), "Hande dinledi. “Gelmeyeceğim,” dedi. Sonra: “Geleceğim. Sonuna kadar.”"),
P(S("z1D"), "Ekranda: “Burada mı? Yasanın kenarında, bir hemşirenin eliyle, senin elinle? Hayır. Ben kendi elimle istiyorum. Elim yoksa gözümle.”"),
"Şubat sonu. Genel havacılık terminalinden bir ambulans uçağı. Nevin Hoca sedyede, maske takılı, tablet göğsünün üstünde bir askıda. Hande yanında. Sen “kişisel nedenlerle” izin aldın.",
"Pasaport kontrolünde memur sedyeye, sonra sana bakıyor. Bir şey soracak gibi. Sormuyor. Damga.",
"Uçak kalkıyor. Nevin Hoca pencereden bakıyor: köprüler, Cihangir'in yokuşu, bir an, sonra bulut.",
"Ekranda: “Kırk yıl önce Almanya'ya doktoraya giderken de böyle bakmıştım. O zaman döneceğimi biliyordum.”",
"Bir yerde ekranda tek kelime: “Spinoza?” Hande: “Komşuda teyzeciğim. Mamasını üç poşet bıraktım.”",
"Zürih. Kuru bir soğuk. Bir minibüs. Şehrin dışında bir sanayi bölgesi. Bir oto yıkamanın yanında mavi boyalı küçük bir ev."
], secenekler: [
{ t: "Son geceyi birlikte, otelde geçirmeyi teklif edersin.", to: "z3", etki: { merhamet: 1, son_gece: true } },
{ t: "Doğruca eve gidersiniz.", to: "z3", etki: { ozerklik: 1 } },
{ t: "Hande'yle Nevin Hoca'yı bir süre yalnız bırakırsın.", to: "z3", etki: { merhamet: 1 } },
{ t: "Derneğin hekimiyle karar yetisini bir kez daha değerlendirirsin.", to: "z3", etki: { yasa: 1 } }
]},

z3: { saat: "Şubat", baslik: "Mavi Ev", metin: [
P(S("z2B"), "Doğruca eve gittiniz. Yol kısaydı."),
P(S("z2C"), "Onları yalnız bıraktın. Koridorda yarım saat bir İsviçre doğa dergisine baktın, hiçbir sayfayı okumadan. Döndüğünde Hande'nin gözleri kuruydu; Nevin Hoca'nınkiler değildi."),
P(S("z2D"), "Derneğin hekimiyle değerlendirdin. Nevin Hoca yazdı: “Sınav mı? Yine mi B artı?” Hekim tercümeyi duyunca güldü. Sen gülemedin."),
P(S("z2A"), "Bir otel odası. Pencereden göl. Nevin Hoca uyumadı. Sabaha karşı ekranda: “Bir gece daha. Bu kadarı yeter.”"),
"Mavi evin içi sade. Bir yatak, bir kanepe, pencerede bir saksı sardunya. Duvarda bir göl resmi. Biraz eğri asılmış, kimse düzeltmemiş.",
"İki gönüllü: yaşlı bir İsviçreli kadın, genç bir adam. Kimse acele etmiyor. Tercüman aracılığıyla soruluyor: istediği hâlâ bu mu? Ekranda: “Evet.”",
"Pompa kuruluyor. Ekranda bir düğme belirecek. Nevin Hoca ona üç saniye bakarsa vana açılacak.",
"Gönüllüler bir kenara çekiliyor. Hande bir yanda, sen öbür yanda.",
"Son mesaj. Yirmi dakika.",
"“Ömer. Son ders bu. Sınavı ben veriyorum, sen izle. Hande. Seni seviyorum. Sesim varken söylemedim. Şimdi makine söylüyor. Ama ben söylüyorum.”",
"Düğme beliriyor. Yeşil. Nevin Hoca önce Hande'ye, sonra sana, sonra düğmeye bakıyor."
], secenekler: [
{ t: "Elini tutarsın.", to: "t1", etki: { merhamet: 1, el_tuttu: true } },
{ t: "Gözlerini kaçırmazsın. Sonuna kadar izlersin. O öyle istedi.", to: "t1", etki: { ozerklik: 1, izledi: true } },
{ t: "Hande'nin yanına geçip ona tutunursun.", to: "t1", etki: { merhamet: 1, defneyi_tuttu: true } },
{ t: "Son anda başını çevirirsin. Yapamazsın.", to: "t1", etki: { yasa: 1, cevirdi: true } }
]},

/* ---------- GİZLİ KOL ---------- */
g1: { saat: "Ocak", baslik: "Pompa", metin: [
"Başını sallıyorsun. Nevin Hoca'nın gözleri kapanıyor. Teşekkür eder gibi, ya da sana bir yük verdiği için özür diler gibi.",
"Bir hafta sonra bir pompa getiriyorsun. Hastanın kendi doz ayarladığı türden, ama bir göz takip sistemine bağlı. Mühendis bir arkadaşın bir akşam yazılımını değiştiriyor. Ne için olduğunu sormuyor, yalnızca “Bira borcun var,” diyor.",
"İçinde morfin. Normal dozun çok üstünde bir yedek hazne. Menülerin en derininde bir seçenek. Oraya ulaşıp beş saniye bakarsa hazne boşalır.",
"Kurulumu gece yapıyorsun. Hande uyuyor. Ya da uyuyor gibi yapıyor, çekyattan nefesi fazla düzenli geliyor.",
"Nevin Hoca her adımı izliyor. Bitince ekranda: “Göster.” Menüyü gösteriyorsun. Bir, iki, üç, dört adım. Sonra beş saniye.",
"Ekranda: “Anladım.” Sonra: “Kimse bilmeyecek mi?”",
"Bu bir suç. Kasten öldürme ya da intihara yardım. Savcıya bağlı. On yıl, belki daha fazla. Mesleğin, adın, kızın."
], secenekler: [
{ t: "“Kimse bilmeyecek,” dersin.", to: "g2", etki: { merhamet: 1, sir: true } },
{ t: "“Ben bileceğim hocam,” dersin.", to: "g2", etki: { ozerklik: 1, ben_bilecegim: true } },
{ t: "“Hande bilmeli,” dersin.", to: "g2", etki: { yasa: 1, defne_bilsin: true } },
{ t: "Bir şey demeden pompanın kayıt dosyasını silersin.", to: "g2", etki: { sir: true, kayit_sildi: true } }
]},

g2: { saat: "Şubat", baslik: "Bekleyiş", metin: [
P(S("g1A"), "“Kimse bilmeyecek,” dedin. Nevin Hoca bir kez kırptı. Sonra iki kez. Ekranda: “Sen bileceksin.”"),
P(S("g1B"), "“Ben bileceğim.” Ekranda: “Bu yüzden sana sordum.”"),
P(S("g1D"), "Kayıt dosyasını sildin. Tuşa basarken parmağın biraz fazla bastı. Ekran bir an dondu, kalbin de."),
P(S("g1C"), "Sabah Hande'ye anlattın. Hande pompaya baktı. Bir böceğe bakar gibi. “Bilmek istemiyordum,” dedi. “Ama biliyorum artık. Bir şey yapmayacağım.” Sonra her zamanki gibi çay koydu, iki şeker."),
"Bir hafta. İki. Üç.",
"Nevin Hoca menüye gitmiyor.",
"Ziyaretler sürüyor. Her seferinde pompanın kayıtlarına bakıyorsun. Hiçbir şey. Spinoza yatakta. Erguvanlar henüz açmadı.",
"Bir gün, kimse yokken: “Hocam, neden...?” Bitiremiyorsun.",
"Ekranda, uzun bir bekleyişten sonra:",
"“Bilmek yetti. Yapabileceğimi bilmek. Üç yıldır hiçbir şeye karar veremiyordum. Şimdi her sabah uyanıyorum ve bugün değil diyorum. Bunu ben diyorum.”",
"Sonra: “Belki hiç basmam. Belki yarın. Bilmiyorum. Bilmemek ilk defa korkutmuyor.”"
], secenekler: [
{ t: "Pompayı kaldırmayı düşünürsün.", to: "g3", etki: { yasa: 1, kaldir_dusun: true } },
{ t: "Hiçbir şeyi değiştirmezsin. Karar onun.", to: "g3", etki: { ozerklik: 1 } },
{ t: "Bu duygusunu yazmasını önerirsin. Kitabının son bölümü için.", to: "g3", etki: { ozerklik: 1, yazsin: true } },
{ t: "Kendi avukatınla konuşursun.", to: "g3", etki: { yasa: 1, avukat: true } }
]},

g3: { saat: "Mart, 04.20", baslik: "Gece Telefonu", metin: [
P(S("g2A"), "Pompayı kaldırmayı düşündün. Ekranda: “Kaldırma. Belki kullanmam. Ama orada dursun.”"),
P(S("g2B"), "Hiçbir şeyi değiştirmedin."),
P(S("g2D"), "Avukatın dinledi. “Bunu bana hiç anlatmadın,” dedi, “ben de hiç duymadım.” Bir kâğıda iki telefon numarası yazıp uzattı."),
P(S("g2C"), "Yazdı. On gün, her gün biraz. Başlık: “Bir Düğmenin Özgürlüğü.” Sonunda bir not: “Ben öldükten sonra yayımlayın. Ömer'in adını geçirmeden.”"),
"Mart. Gece dördü yirmi geçe telefon. Hande. Sesi tuhaf sakin.",
"“Ömer Bey. Teyzem gitti. Uyandım, maskenin sesi yoktu. Pompanın ekranında bir şey yazıyor.”",
"Yirmi dakikada oradasın. Nevin Hoca yatakta, gözleri kapalı. Spinoza ayak ucunda, kulakları geriye yatık. Pompanın ekranında: “Hazne boşaltıldı. 02.47.”",
"Tabletin ekranında son mesaj, 02.41:",
"“Bugün. Erguvanları beklemedim. Gözlerim birkaç güne menüye ulaşamayacaktı. Ya bugün ya hiç. Ömer, teşekkür ederim. Hande, özür dilerim. Spinoza'yı sev.”",
"Bir ölüm belgesi doldurman gerekiyor. Pompa, kayıtlarıyla, bir savcının okuyabileceği dilde 02.47'yi gösteriyor.",
"Hande sana bakıyor. Bir şey sormuyor. Spinoza'yı kucağına almış, kedinin tüyüne yüzünü gömmüş."
], secenekler: [
{ t: "Ölüm nedenine “ALS, solunum yetmezliği” yazarsın. Pompayı sökersin.", to: "t1", etki: { merhamet: 1, ortbas: true } },
{ t: "Her şeyi olduğu gibi bildirirsin. Pompayı, kayıtları, kendi rolünü.", to: "t1", etki: { yasa: 2, itiraf: true } },
{ t: "Ölüm nedenine doğruyu yazarsın ama pompanın nasıl kurulduğunu söylemezsin.", to: "t1", etki: { yasa: 1, yarim: true } },
{ t: "Hande'ye ne istediğini sorarsın. Bu onun da hayatı.", to: "t1", etki: function(d){ d.ozerklik++; d.defne_secti = true; d.ortbas = true; } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Sonra", baslik: "Ölümden Sonra", metin: [
P(S("bk3A"), "“Hâlâ orada biri varmış gibi,” dedin. Bir kez kırptı. Son iki haftada bu cümleyi her sabah, paltonu çıkarmadan önce tekrarladın."),
P(S("bk3B"), "Cevap vermedin. Hatırladın. Her sabah yatağın başında."),
P(S("bk3C"), "Bir evet-hayır sistemi kurdun: bir kırpış evet, iki hayır. Gözleri tamamen gidene kadar on bir gün kullandı. Son kelimesi bir kırpıştı."),
P(S("bk3D"), "Alnından öptün. Gözlerini açmadı. Monitörde nabız bir an hızlandı. Ya da sen öyle gördün."),
P(S("br3A"), "Belgeye yazdın: ALS, solunum yetmezliği. Kalemin “sedasyon” kelimesinin üstünde bir süre bekledi, yazmadı."),
P(S("br3B"), "Pencereyi açtınız. Erguvan kokmaz, ama rüzgâr vardı. Perdeyi Nevin Hoca'nın yatağının üstüne kadar şişirdi."),
P(S("br3C"), "Spinoza'yı kucağına aldın. Direnmedi. Tırnaklarını kazağına geçirip bıraktı, geçirip bıraktı."),
P(S("br3D"), "Bir süre koltukta oturdun. Hande uyandığında hâlâ oradaydın, elinde boş bir şırınga kapağı."),
P(S("z3A"), "Elini tuttun. O hissetmiyordu. Sen hissettin."),
P(S("z3B"), "Sonuna kadar izledin. Gözleri kapanana kadar. Sonra bir süre daha."),
P(S("z3C"), "Hande'ye tutundun. Titriyordu. Nevin Hoca'nın son gördüğü, birbirine tutunan iki insandı."),
P(S("z3D"), "Son anda başını çevirdin. Pencerenin dışında oto yıkamada biri kırmızı bir arabayı köpürtüyordu. Döndüğünde bitmişti."),
P(S("g3C"), "Belgeye doğruyu yazdın. Pompanın nasıl kurulduğunu yazmadın."),
P(function(d){ return d.kol === "bakim"; }, "Nevin Hoca nisan ortasında öldü. Gözleri iki hafta önce gitmişti. Bir sabah nefesi yavaşladı, durdu. Yanındaydın."),
P(function(d){ return d.kol === "bakim" && d.sistem; }, "Son sorduğun soru: “Rahat mısınız hocam?” Bir kırpış. Sonra yavaşça bir daha. Sonra bir daha. Ne demek istediğini hiç bilemeyeceksin."),
P(function(d){ return d.kol === "birak"; }, "Nevin Hoca erguvanların karşısında, kendi salonunda, kendi seçtiği günde öldü."),
P(function(d){ return d.kol === "zurih"; }, "Nevin Hoca Zürih'in dışında, mavi bir evde, gözleriyle açtığı bir vanayla öldü. Cenazesini İstanbul'a bir kargo uçağıyla getirdiniz. Formda “içerik” kutusuna ne yazacağını görevli sana sordu."),
P(function(d){ return d.kol === "gizli"; }, "Nevin Hoca mart sonunda, gece ikiyi kırk yedi geçe öldü. Erguvanları beklemeden."),
P(function(d){ return d.ortbas; }, "Ölüm belgesinde “ALS, solunum yetmezliği” yazıyor. Pompa önce arabanın bagajında, sonra bir hastanenin tıbbi atık konteynerinde."),
P(function(d){ return d.itiraf; }, "Bildirdin. Ertesi gün bir savcı aradı. Bir hafta sonra ifade verdin, avukatın yanında. Savcı dosyayı okurken uzun süre sustu. “Bunun ne dosyası olduğunu ben de bilmiyorum,” dedi, çayını karıştırdı."),
"Cenaze Aşiyan'da. Boğaz'a bakan yamaç. Eski öğrenciler, birkaç meslektaş, komşular, Hande. Hande'nin paltosunun yakasında birkaç tekir tüy.",
"Mezar taşına ne yazılacağını kendisi seçmiş. Hande söylüyor: Montaigne. “Felsefe yapmak, ölmeyi öğrenmektir.” Sonra ekliyor: “Önce ‘Notumu itiraz etmeyin’ yazdırmak istemiş. Ben vazgeçirdim.”"
], secenekler: [
{ t: "Mezarın başında bir şey söylersin.", to: "t1b", etki: { merhamet: 1, konustu: true } },
{ t: "Kalabalığın arkasında durursun.", to: "t1b", etki: { ozerklik: 1 } },
{ t: "Hande'nin yanında durursun.", to: "t1b", etki: { merhamet: 1 } },
{ t: "Cenazeye gitmezsin.", to: "t1b", etki: { yasa: 1, gitmedi: true } }
]},

t1b: { saat: "Bir ay sonra", baslik: "Kitaplar", metin: [
P(S("t1B"), "Arkada durdun. Çıkarken yaşlı bir adam koluna dokundu: “Sen o B artı alan çocuksun,” dedi. “Bize anlatırdı. Her sene.”"),
P(S("t1C"), "Hande'nin yanında durdun. Toprak atılırken bileğini tuttu, bir saniye, sonra bıraktı."),
P(S("t1A"), "Ağzından şu çıktı: “Hocam bana bir B artı vermişti. Hâlâ itiraz ediyorum.” Birkaç eski öğrenci güldü. Onlar da biliyordu."),
P(S("t1D"), "Gitmedin. Hande mesaj attı: “Sizi aradım. Yoktunuz. Anlıyorum.” Mesajı üç gün sonra açtın."),
"Bir ay sonra Hande daireyi boşaltıyor. Kitapların çoğu bir üniversite kütüphanesine gidecek. Bazılarını sana ayırmış.",
"Salon yarı boş. Raflarda boşluklar, tozun çizdiği dikdörtgenler. Yatak sökülmüş. Halıda dört iz. Pencere açık.",
"Hande bir koli uzatıyor. On iki kitap. En üstte “Acı ve Anlam”, ilk baskı.",
"İlk sayfada eski, solmuş bir ithaf. Altında yeni bir satır, Hande'nin el yazısı, belli ki dikte edilmiş:",
"“Ömer'e. Arka sıradaki öğrenciye. Bu kitabın çoğu yanlış. Bir şey doğru: insan ancak kendi ölümünü düşünürken başkalarına bakmayı öğrenir.”",
"Spinoza kolinin kenarını kokluyor. Hande onu kucağına alıyor. “Benimle kalacak. Vasiyet. Bu sefer kimse beni yorgun bulmayacak.”"
], secenekler: [
{ t: "Kitabı göğsüne bastırırsın.", to: "t2", etki: { merhamet: 1 } },
{ t: "Hande'ye nasıl olduğunu sorarsın. Gerçekten.", to: "t2", etki: { merhamet: 1, defne_sordu: true } },
{ t: "Kitabın kenarlarındaki notları okumaya başlarsın.", to: "sd_kenar", etki: { ozerklik: 1, notlari_okudu: true } },
{ t: "Koliyi kapatıp gidersin. Okumaya hazır değilsin.", to: "sd_kedi", etki: { yasa: 1 } }
]},

t2: { saat: "Eylül", baslik: "Davet", metin: [
P(S("t1bA"), "Kitabı göğsüne bastırdın. Kapıda Hande: “Size en çok bunu bırakmak istedi,” dedi."),
P(S("sd_kenarB"), "Mektubu geri koydun. Bazen kitabı açıp mektubun orada olup olmadığına baktın. Okumadan."),
P(S("sd_kediB"), "Bir hafta her akşam öyle oturdun. Sekizinci akşam bir sayfa okudun."),
P(S("sd_kenarA"), "Hande mektubu okudu. “Simone,” dedi. “Teyzemin doktora hocası. Paris'te. O ölünce teyzem bir yıl kimseyle konuşmamış, annem anlatırdı.” Biraz durdu. “Kedi çizimini de o yapardı. Her mektubun köşesine.”"),
P(S("sd_kenarC"), "Deftere geçirmeye başladın. Her akşam bir kitap. Kenar notları kendi başına bir kitap oldu: kırk yıllık bir zihnin kendisiyle kavgası."),
P(S("sd_kenarD"), "“Sevgili Nevin Hoca,” diye başladın. Üç sayfa. Bitince katlayıp onun kitabının arasına koydun."),
P(S("sd_kediA"), "Koliyi indirdin. En üstteki kitabı açtın. Spinoza göğsüne geri çıktı. Kitabı onun üstünden okudun."),
P(S("sd_kediC"), "Hande döndüğünde teklif ettin. Spinoza'ya uzun uzun baktı. “Bırakamam,” dedi. “Son bağım.” Her ay bir kez getireceğine söz verdi. Getiriyor."),
P(S("sd_kediD"), "Yazdın: “Kilitli bir zihinde dokunma kalır mı?” Bir paragraf, sonra bir sayfa. Başlık koydun: “Kutudaki Kedi.”"),
P(S("t1bB"), "Hande düşündü. “Rahatladım,” dedi. “Utanıyorum bundan. Utandığım için de rahatlıyorum. Demek hâlâ seviyorum onu.” Güldü, burnunu sildi."),
P(S("t1bC"), "Kenarlarda notlar: “burayı genişlet,” “zayıf,” “Simone'a sor.” Bir sayfada bir cümlenin altı kırmızı çizilmiş: “Ölüm hayatın sınavı değil, son dersidir.” Yanında Hande'nin yazısı: “Teyzem bunu sildirmek istedi. Bıraktım.”"),
"Eylülde tıp fakültesinden bir zarf.",
"“Sayın Dr. Ömer Kılıç. Tıp Etiği seçmeli dersi, Prof. Dr. Nevin Arıkan'ın anısına bu dönem yeniden açılacaktır. Dersi vermenizi öneriyoruz. Öneren: Hande Arıkan.”",
P(function(d){ return d.itiraf; }, "Altında dekanın el yazısıyla bir not: “Soruşturmanın sürdüğünü biliyorum. Bu teklif ondan bağımsızdır. Ya da değildir. Siz karar verin.”")
], secenekler: [
{ t: "Kabul edersin. İlk dersi hazırlamaya başlarsın.", to: "y_kursu", etki: { ozerklik: 1, kursu: true } },
{ t: "Reddedersin. Bu ders senin değil.", to: "t3", etki: { yasa: 1, ret_kursu: true } },
{ t: "Kabul edersin. İlk derste Nevin Hoca'nın son yazdıklarını okuyacaksın.", to: "y_not", etki: { ozerklik: 1, kursu: true, not_oku: true } },
{ t: "Bir yıl erteleme istersin.", to: "t3", etki: { erteledi: true } }
]},

y_kursu: { saat: "Ekim", baslik: "Amfi", metin: [
"Ekim. Eski amfi. Ahşap sıralar, yüksek pencereler, tahtada silinmemiş bir anatomi çizimi. Üçüncü sıradaki “Gülay” yazısı hâlâ orada.",
"Kırk iki öğrenci, çoğu ikinci sınıf. Telefonlar masada. Arka sırada birkaç kişi fısıldaşıyor.",
"Kürsüye çıkıyorsun. Bir süre bir şey demiyorsun. Telefonlar tek tek kapanıyor.",
"“Bu dersi otuz yıl önce bir hocadan aldım. Arka sırada otururdum. Final ödevim ötanazi üzerineydi. Karşı yazdım. B artı aldım.”",
"Birkaç kişi gülüyor.",
"“Bu yıl o hoca öldü. ALS. Son yılında gözleriyle konuşuyordu.”",
"Gülüşler kesiliyor.",
"“Size doğru cevapları öğretmeyeceğim, bilmiyorum. Yalnızca şunu isteyeceğim: her argümanın içine bir beden koyun. Bir yatak. Bir göz klavyesi.”",
"Arka sıradan bir el kalkıyor. Genç bir kadın, saçını kurşunkalemle tutturmuş. “Hocam, siz ne yaptınız? O hocanıza?”"
], secenekler: [
{ t: "Gerçeği anlatırsın. Ne yaptıysan.", to: "t3", etki: { yasa: 1, ozerklik: 1, anlatti_ders: true } },
{ t: "“Bunu dönem sonunda konuşalım,” dersin. Önce onlar düşünsün.", to: "t3", etki: { ozerklik: 1 } },
{ t: "“Sizce ne yapmalıydım?” diye sorarsın ve dönemin final ödevini bu soru yaparsın.", to: "t3", etki: { ozerklik: 2, final: true } },
{ t: "“Yanında kaldım,” dersin. Başka bir şey eklemeden.", to: "t3", etki: { merhamet: 1 } }
]},

y_not: { saat: "Ekim", baslik: "Son Notlar", metin: [
"İlk derse Nevin Hoca'nın tabletini getiriyorsun. Hande verdi. İçinde iki yılın yazışmaları, yarım kalmış cümleler.",
"Projeksiyona bağlıyorsun. Ekranda dosyalar: “Ömer'e.” “Son.” “Hande.” “Bir Bedenden Yazılan Düzeltmeler.” “Spinoza.”",
"En kısasını açıyorsun. Mekanik ses amfide:",
"“Bugün bir öğrencim gelecek, otuz yıl önceki. Bana bir şey sormayacak. Ben ona soracağım. Cevabını bilmiyorum.”",
"Amfide çıt yok. Biri öksürüyor, özür diler gibi elini ağzına kapatıyor.",
"Bir başkası:",
"“Acının anlamı yok. Kırk yıl önce yanlış yazdım. Ama acının içinden bir şey geçebilir: başka birinin eli, bir kedinin mırıltısı, bir öğrencinin sabrı.”",
"Ön sırada bir öğrenci ağlıyor. Saklamıyor.",
"Tableti kapatıyorsun. Kırk iki yüz sana bakıyor."
], secenekler: [
{ t: "“Bu dönem bu notları birlikte okuyacağız,” dersin.", to: "t3", etki: { ozerklik: 1, notlar_ders: true } },
{ t: "“Bugünlük bu kadar,” dersin.", to: "t3", etki: { merhamet: 1 } },
{ t: "Tahtaya bir soru yazarsın: “Bir hekim, bir hastanın ölme isteğine ne borçludur?”", to: "t3", etki: { ozerklik: 1, final: true } },
{ t: "Ağlayan öğrencinin yanına gidersin.", to: "t3", etki: { merhamet: 1 } }
]},

t3: { saat: "Aralık", baslik: "Son Dosya", metin: [
P(S("y_kursuB"), "“Dönem sonunda konuşalım,” dedin. Kız elini indirdi. Dönem boyunca her derste arka sıradan sana baktı."),
P(S("y_kursuD"), "“Yanında kaldım,” dedin. Kız başını salladı. Bunun cevap olmadığını ama doğru olduğunu anlamış gibi."),
P(S("y_notA"), "On dört hafta bir ölünün yarım cümleleri bir amfide okundu. Her öğrenci kendi sonunu yazdı."),
P(S("y_notB"), "Dersi erken bitirdin. Çıkarken kimse konuşmadı. Biri tabletin yanına bir kalem bırakıp gitti."),
P(S("y_notC"), "Tahtaya yazdın, silmedin. Ertesi hafta temizlikçi de silmemişti."),
P(S("y_notD"), "Ağlayan öğrencinin yanına gittin. Babası iki yıl önce ALS'den ölmüş. “Keşke onun da böyle bir tableti olsaydı,” dedi. “Son altı ayında ne düşündüğünü hiç bilmiyoruz.”"),
P(S("y_kursuA"), "Anlattın. Kırk iki kişi çıt çıkarmadan dinledi. Ertesi hafta amfi doluydu. Başka sınıflardan gelip merdivenlere oturanlar vardı."),
P(S("y_kursuC"), "Dönem sonunda kırk iki ödev. Yirmi ikisi “yapmalıydınız,” on dokuzu “yapmamalıydınız.” Biri boş sayfanın ortasına tek cümle yazmıştı: “Bilemem. Ama yanında olurdum.” Ona A verdin. Sonra notu B artıya çevirip yine A yaptın."),
P(function(d){ return d.ret_kursu; }, "Dersi başka bir hoca verdi. İyi bir hoca, kitaplardan. Dönem sonunda bir öğrenci sana yazdı: “Nevin Arıkan'ın öğrencisiymişsiniz. Neden siz vermediniz?” Cevaplamadın."),
P(function(d){ return d.erteledi; }, "Bir yıl erteledin. Dekanlık kabul etti."),
"Aralık. Hande'den bir e-posta. Ekinde bir dosya. Tabletten değil, Nevin Hoca'nın eski bilgisayarından. Ölümünden aylar önce, çok uzun sürede yazılmış. Adı: “Son Ders.”",
P(function(d){ return d.kol === "bakim"; }, "“Ömer, hayır dedin. Senin yerinde ben de belki öyle derdim. Bir şey öğrendim ama: insan hayır duyduğunda da yalnız kalmayabiliyor. Sen hayır dedin ve kaldın.”"),
P(function(d){ return d.kol === "birak"; }, "“Ömer, sınırın üstünde benimle durdun. Yasa buna tedavinin bırakılması diyecek. Ben elin bırakılması diyorum. Senin elinin.”"),
P(function(d){ return d.kol === "zurih"; }, "“Ömer, beni uçağa bindirdin. Sürgün gibi olur sanıyordum. Değil. Burada ölmeme izin vermiyorlar, ama burada uzun, güzel bir hayat yaşadım. Bu ülkeye kızgın değilim. Bir kapı kapalı, o kadar.”"),
P(function(d){ return d.kol === "gizli"; }, "“Ömer, bana bir düğme verdin. Senin için ne kadar ağır olduğunu biliyorum. Belki hiç basmam. Basarsam, son yaptığım şey benim olacak.”"),
"Dosyanın sonunda bir satır: “Ödevini yeniden yaz. Bu sefer bir bedenle. Notunu ben veremeyeceğim. Kendine ver. Cömert olma.”"
], secenekler: [
{ t: "Ödevi yeniden yazmaya başlarsın. Bu gece.", to: "t4", etki: { ozerklik: 1, odev_yazdi: true } },
{ t: "Dosyayı Hande'ye geri gönderirsin: “Bu sizin.”", to: "t4", etki: { merhamet: 1 } },
{ t: "Dosyayı yazdırıp Nevin Hoca'nın kitabının arasına koyarsın.", to: "t4", etki: { merhamet: 1, kitaba: true } },
{ t: "Dosyayı okursun ve bir daha açmazsın.", to: "t4", etki: { yasa: 1 } }
]},

t4: { saat: "Nisan", baslik: "Aşiyan", metin: [
P(S("t3A"), "O gece ödevi yeniden yazmaya başladın. Başlık aynı. İlk cümle: “Bir hastam vardı.”"),
P(S("t3B"), "Hande cevap yazdı: “Hayır. Teyzem dosyanın adının altına sizin adınızı yazmış.”"),
P(S("t3C"), "Yazdırıp kitabın arasına, “yanlış” dediği bölüme koydun."),
P(S("t3D"), "Bir daha açmadın. Son cümlesini ezbere biliyordun. “Cömert olma” kısmını özellikle."),
"Bir yıl sonra, nisanda, Aşiyan. Yamaç erguvanlarla pembe. Aşağıda bir şilep yavaşça geçiyor.",
"Taş: “Prof. Dr. Nevin Arıkan. 1953–2025. Felsefe yapmak, ölmeyi öğrenmektir.”",
"Taşın üstünde küçük, tekir bir kedi heykelciği. Hande olmalı. Kulağı yırtık boyanmış.",
P(function(d){ return d.itiraf; }, "Soruşturma sürüyor. Meslekten men edilmedin, ama hastanede bazıları seni selamlamıyor. Bazıları ise asansörde, kimse yokken, elini sıkıyor."),
P(function(d){ return d.ortbas; }, "Pompanın yerini kimse bilmiyor. Belgede yanlış yok. Bir eksik var. Bir yıl boyunca her gece, uyumadan önce, o eksiğin şeklini düşündün."),
P(function(d){ return d.kursu; }, "Dersin ikinci dönemi başladı. Arka sırada bir öğrenci her hafta gözünü sana dikiyor, hiç soru sormuyor."),
"Taşın önüne çömeliyorsun."
], secenekler: [
{ t: "Yeniden yazdığın ödevi taşın üstüne bırakırsın.", to: "ds", etki: { ozerklik: 1, odev_birakti: true } },
{ t: "Bir erguvan dalı koparıp bırakırsın.", to: "ds", etki: { merhamet: 1 } },
{ t: "Hiçbir şey bırakmazsın. Bir süre oturursun.", to: "ds", etki: { yasa: 1 } },
{ t: "Sesli konuşursun: “Hocam, notumu hâlâ beğenmedim.”", to: "ds", etki: { merhamet: 1, ozerklik: 1, son_soz: true } }
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
P(S("t4A"), "Ödevi taşın üstüne bir çakılla sabitlemiştin."),
P(S("t4B"), "Bir erguvan dalı bırakmıştın. Dalda bir arı vardı, gitmedi."),
P(S("t4C"), "Bir şey bırakmamıştın. Bir süre oturmuştun, pantolonun toz olmuştu."),
P(S("t4D"), "“Notumu hâlâ beğenmedim,” demiştin. Bir martı bağırmıştı. Cevap gibi."),
"Hayır dedin ve kaldın. Nevin Hoca korktuğu kutunun içinde iki hafta yaşadı. Her sabah ona bir şey okudun: bir şiir, bir öykü, kendi kitabından bir paragraf, bir keresinde de gazetenin spor sayfası, çünkü elinde o vardı. Cevap vermedi. Belki duydu.",
"Mesleğin, adın, belgelerin. Hepsi yerinde. Bir insanın açıkça istediği şeyi ona vermedin.",
"Bazı geceler o iki haftayı düşünüyorsun. Orada mıydı? Spor sayfasını okurken içinden sana kızıyor muydu? Bu ihtimal seni bazen güldürüyor, sonra güldüğün için kendine kızıyorsun.",
"Hande her yıl nisanda arıyor. Konuşacak bir şey bulamıyorsunuz; Spinoza'dan konuşuyorsunuz. Geçen yıl dişlerinden ikisi çekilmiş."
]},

son_birakmak: { son: true, baslik: "Otuz Saat", metin: [
P(S("t4A"), "Ödevi taşın üstüne bir çakılla sabitlemiştin."),
P(S("t4B"), "Bir erguvan dalı bırakmıştın. Dalda bir arı vardı, gitmedi."),
P(S("t4C"), "Bir şey bırakmamıştın. Bir süre oturmuştun, pantolonun toz olmuştu."),
P(S("t4D"), "“Notumu hâlâ beğenmedim,” demiştin. Bir martı bağırmıştı. Cevap gibi."),
"Yasanın izin verdiği yerin tam sınırında durdun. Nevin Hoca otuz saat sonra, erguvanların karşısında, kendi salonunda öldü.",
"Soruşturma açılmadı. Belge, tanıklar, rapor. Hepsi yerindeydi. Suat Hoca bir gün koridorda yanına geldi: “Doğru yaptın. Yasaya uygun.” Durdu. “Yasaya uygun olunca hafif olmuyor ama, değil mi?” Cevap beklemeden asansöre bindi.",
"Öldürmek ile bırakmak arasında bir fark var. Kitaplarda var. O otuz saat boyunca o farkı odada aradın, bulamadın. Maskeyi çıkarmak bir şeydi. Serumu açmak bir şeydi. Oturup beklemek de bir şeydi.",
"Hemşire Saadet'le bir yıl sonra bir kongrede karşılaştınız. Kahve kuyruğunda yan yana durdunuz. İkiniz de o günden söz etmediniz. O sana şekeri uzattı, sen ona karıştırıcıyı.",
"Her nisan karşı yamaca bakıyorsun."
]},

son_zurih: { son: true, baslik: "Mavi Ev", metin: [
P(S("t4A"), "Ödevi taşın üstüne bir çakılla sabitlemiştin."),
P(S("t4B"), "Bir erguvan dalı bırakmıştın. Dalda bir arı vardı, gitmedi."),
P(S("t4C"), "Bir şey bırakmamıştın. Bir süre oturmuştun, pantolonun toz olmuştu."),
P(S("t4D"), "“Notumu hâlâ beğenmedim,” demiştin. Bir martı bağırmıştı. Cevap gibi."),
"Nevin Hoca kendi gözleriyle, yabancı bir şehirde öldü. Son hareket onundu. Türkiye'deki kayıtlarda “yurt dışında ölüm” diye geçiyor.",
"Raporun bir dosyada. Kimse sormadı.",
P(function(d){ return d.cevirdi; }, "Son anda başını çevirdin. Hande gördü, bir şey demedi. Dönüşte uçakta sana bir sakız uzattı, kulakların tıkanmasın diye."),
P(function(d){ return d.el_tuttu || d.izledi; }, "Sonuna kadar oradaydın. Bir, iki, üç. Sonra uyku. Sonra başka bir şey. Pencereden oto yıkamanın köpükleri görünüyordu. Birisi radyoyu açmıştı, bir İtalyan şarkısı."),
"Hastaların bazıları sana aynı şeyi soruyor. Her seferinde İsviçre'yi anlatıp anlatmamak arasında kalıyorsun. Çoğu zaman anlatmıyorsun. Bazen anlatıyorsun.",
"Uçağın penceresinden şehre bakan bir kadının yüzü aklında. O sefer döneceğini bilmeden bakıyordu."
]},

son_suc: { son: true, baslik: "02.47", metin: [
P(S("t4A"), "Ödevi taşın üstüne bir çakılla sabitlemiştin."),
P(S("t4B"), "Bir erguvan dalı bırakmıştın. Dalda bir arı vardı, gitmedi."),
P(S("t4C"), "Bir şey bırakmamıştın. Bir süre oturmuştun, pantolonun toz olmuştu."),
P(S("t4D"), "“Notumu hâlâ beğenmedim,” demiştin. Bir martı bağırmıştı. Cevap gibi."),
P(function(d){ return d.itiraf; }, "Dava iki yıl sürdü. Savcı “intihara yardım” ile “kasten öldürme” arasında gidip geldi. Mahkeme intihara yardımdan ceza verdi. Ertelendi. Meslekten men edilmedin ama palyatif servisten alındın. Şimdi bir aile sağlığı merkezinde tansiyon ölçüyorsun."),
P(function(d){ return d.itiraf; }, "Mahkeme salonunda Hande en arka sıradaydı. Karar okununca kalkıp gitti. Akşam bir mesaj attı: “Spinoza size selam söylüyor.”"),
P(function(d){ return d.ortbas; }, "Kimse bilmiyor. Hande biliyor, sen biliyorsun. Bazen bir hastanın ölüm belgesini doldururken kalemin “neden” kutusunda biraz fazla kalıyor."),
P(function(d){ return d.ortbas; }, "Başka hastalar aynı şeyi soruyor. Bir daha yapmadın. Yapar mısın, bilmiyorsun. Mühendis arkadaşın bir akşam bira içerken “O pompa ne oldu?” diye sordu. “Hangi pompa?” dedin. Bir daha sormadı."),
P(function(d){ return d.yarim; }, "Bir soruşturma açıldı, kapandı: “Hastanın kendi kullandığı bir ağrı pompası.” Doğru. Eksik."),
"Erguvanları beklemedi. “Ya bugün ya hiç.” Saat 02.41'de yazmaya başlamış. Yazması altı dakika sürmüş. Sonra beş saniye."
]},

son_ders: { son: true, baslik: "Son Ders", metin: [
P(S("t4A"), "Ödevi taşın üstüne bir çakılla sabitlemiştin."),
P(S("t4B"), "Bir erguvan dalı bırakmıştın. Dalda bir arı vardı, gitmedi."),
P(S("t4C"), "Bir şey bırakmamıştın. Bir süre oturmuştun, pantolonun toz olmuştu."),
P(S("t4D"), "“Notumu hâlâ beğenmedim,” demiştin. Bir martı bağırmıştı. Cevap gibi."),
"Her ekim aynı amfide duruyorsun. Kırk, elli, altmış öğrenci. Ders artık zorunlu. Bir öğrenci dilekçesiyle.",
"İlk derste her yıl tableti getiriyorsun. Bir dosya açıyorsun. Mekanik ses amfide yankılanıyor ve öğrenciler her yıl aynı yerde susuyor.",
P(function(d){ return d.kol === "bakim"; }, "Hayır dediğini anlatıyorsun. Ve kaldığını. Bazıları buna cesaret diyor, bazıları korkaklık. İkisini de not etmiyorsun."),
"Final ödevi her yıl aynı: “Bir hekim, bir hastanın ölme isteğine ne borçludur?” Hiçbirine B artıdan aşağı vermiyorsun. Hiçbirine de A vermiyorsun.",
"Bir öğrenci neden diye soruyor.",
"“O notu ben veremem,” diyorsun. “Verebilecek olan öldü.”",
"Arka sırada bir el kalkıyor. Hep bir el kalkıyor."
]}

},

ayna: function(d){
  var out = [];
  var a = d.yasa, b = d.merhamet, c = d.ozerklik;
  if(a >= b && a >= c) out.push("Çoğu kavşakta yasanın içinde kaldın. Nevin Hoca bunun için sana kızmadı; ama istediğini de alamadı.");
  else if(b >= c) out.push("Çoğu kavşakta yanında kaldın: geceler, çaylar, kedi.");
  else out.push("Çoğu kavşakta kararı Nevin Hoca'ya bıraktın; ne zaman, nerede, nasıl.");
  if(d.kol === "gizli") out.push("Gizlice bir pompa kurdun.");
  if(d.itiraf) out.push("Yaptığını savcıya kendin anlattın.");
  if(d.cevirdi) out.push("Son anda başını çevirdin.");
  if(d.kursu) out.push("Onun dersini devraldın.");
  return out;
},

dipnot: [
{ ad: "Ölme hakkı", t: "Bir insanın kendi ölümünün zamanını ve biçimini seçme hakkı olup olmadığı, John Stuart Mill'in “kişi kendi bedeni ve zihni üzerinde egemendir” ilkesinden beri tartışılır. Hollanda, Belçika, Kanada, İsviçre gibi ülkeler farklı biçimlerde yardımlı ölüme izin verir; Türkiye'de ise ötanazi ve intihara yardım suçtur. Hastanın tedaviyi reddetme hakkı ise Hasta Hakları Yönetmeliği ile tanınır." },
{ ad: "Yasa ve vicdan", t: "Sofokles'in Antigone'si devletin yasasına karşı vicdanın yasasını savunur ve bunun bedelini öder. Martin Luther King, adaletsiz bir yasaya karşı gelmenin ancak açıkça ve cezasını kabul ederek yapılabileceğini söyler. Ömer'in her yolu, bu iki yasanın arasında bir yerde durmaktı." },
{ ad: "Öldürmek ve ölmesine izin vermek", t: "Felsefede “eylem” ile “eylemsizlik” arasındaki ahlaki farkın sınırları tartışmalıdır. James Rachels bu farkın ahlaki olarak önemsiz olduğunu savunmuştur; pek çok hukuk sistemi ve hekim ise bu ayrımı korur. Maskeyi çıkarmak bir eylem midir, yoksa bir tedavinin bırakılması mı? Odada bulunan için bu soru, kitaplardakinden başka türlü yaşanır." },
{ ad: "Acının anlamı ve kilitli zihin", t: "Viktor Frankl, insanın acıya bir anlam verebildiği sürece dayanabileceğini yazdı. Ama Jean-Dominique Bauby gibi yalnızca göz kapağıyla iletişim kurabilen hastaların tanıklıkları, “kilitli” bir zihnin ne yaşadığını bilmenin ne kadar zor olduğunu gösterir. Nevin Hoca'nın korkusu ölüm değil, bu sessizlikti." }
]
});
})();
