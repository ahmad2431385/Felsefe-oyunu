(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "son-ders",
baslik: "Son Ders",
dunya: "Gerçek dünya",
kavramlar: ["Ölme hakkı", "Yasa ve vicdan", "Acının anlamı", "Kilitli zihin"],
ozet: "Otuz yıl önce sana tıp etiği dersi veren hocan şimdi yalnızca gözleriyle konuşabiliyor. Sen onun palyatif bakım hekimisin. Senden ölmesine yardım etmeni istiyor. Türkiye'de bu bir suç.",
baslangic: "a1",
durum: { yasa: 0, merhamet: 0, ozerklik: 0 },

sahneler: {

a1: { saat: "Ekim", baslik: "Göz Klavyesi", metin: [
"Cihangir'de, yokuşun ortasında, eski bir apartmanın üçüncü katı. Merdivenlerde kedi kokusu ve deniz kokusu. Kapıyı otuzlarında, yorgun yüzlü bir kadın açıyor: Defne, hastanın yeğeni. “Hoş geldiniz Ömer Bey. Teyzem sizi bekliyor.”",
"Adın Ömer, elli iki yaşındasın, palyatif bakım uzmanısın. Ev ziyaretlerinde ölümün nasıl bir yere yerleştiğini görürsün: bazı evlerde bir misafir gibi, bazılarında bir kiracı gibi, bazılarında ev sahibi gibi.",
"Salon kitaplarla dolu. Tavana kadar raflar; Yunanca, Almanca, Fransızca sırtlar. Pencerenin önünde bir hastane yatağı ve yatakta Prof. Dr. Nevin Arıkan. Yetmiş bir yaşında, emekli felsefe profesörü. Üç yıldır ALS. Kolları, bacakları, dili, yutkunması gitmiş. Geceleri bir maskeyle nefes alıyor; midesindeki bir tüple besleniyor.",
"Gözleri kalmış. Yatağın önünde, bir askıda, bir tablet. Gözlerinin hareketini okuyan bir kamera. Ekranda bir klavye; Nevin Hoca bir harfe bakıyor, bekliyor, harf seçiliyor. Yavaş. Çok yavaş.",
"Mekanik bir kadın sesi konuşuyor:",
"“Merhaba Ömer. Tıp fakültesi. 1993. Tıp etiği seçmeli dersi. Arka sırada otururdun. Final ödevin ötanazi üzerineydi. Karşı yazmıştın. İyi bir ödevdi. B artı verdim.”",
"Bu cümleyi yazmak ona dört dakika sürdü. Her harf bir göz kırpışı. Ve sen, dört dakika boyunca, otuz yıl önceki o amfiyi, o ödevi, o B artıyı hatırladın."
], secenekler: [
{ t: "Gülümsersin: “Hâlâ A hak ettiğimi düşünüyorum hocam.”", to: "a2", etki: { merhamet: 1, sakalastin: true } },
{ t: "“Sizi hatırlıyorum hocam,” dersin. Ciddi, saygılı.", to: "a2", etki: { yasa: 1 } },
{ t: "Bir şey söylemeden yatağın yanına oturup ekrana bakarsın; onun hızında.", to: "a2", etki: { ozerklik: 1, sabir: true } },
{ t: "“Ödevimde ne yazdığımı hatırlıyor musunuz?” diye sorarsın.", to: "a2", etki: { odev: true } }
]},

a2: { saat: "Ekim", baslik: "İstek", metin: [
P(S("a1A"), "Ekranda harfler belirdi, yavaş: “Hâlâ B artı.” Sonra: “Ama gülümsemen A.” Defne mutfakta bir şey düşürdü; sonra güldü. Bu evde yıllardır kimse gülmemiş gibi."),
P(S("a1B"), "Nevin Hoca'nın gözleri bir an parladı. Ekranda: “Saygıyı sevmezdim. Hâlâ sevmem. Ama teşekkür ederim.”"),
P(S("a1C"), "Ekranın yanına oturdun. Her harfi onunla birlikte bekledin. Bir yerde Nevin Hoca durdu, sana baktı, sonra yazdı: “Kimse benim hızımda beklemiyor. Herkes cümlemi tamamlamaya çalışıyor.”"),
P(S("a1D"), "Ekranda: “Hayatın kutsallığı. Kaygan zemin. Hekimin rolü iyileştirmektir. Üç argüman. Üçü de kitaplardan.” Bir süre durdu. “Senin değildi. O yaşta kimsenin değildir.”"),
"Muayene ediyorsun. Akciğer sesleri zayıf; geceleri maske olmadan oksijeni düşüyor. Kas kaybı ilerlemiş. Göz kaslarında da hafif bir yavaşlama var; henüz.",
"İşin bittiğinde Nevin Hoca ekrana dönüyor. Harfler beliriyor. Uzun bir cümle; dakikalar sürüyor. Defne mutfaktan çıkıp kapının eşiğinde duruyor; ne yazılacağını biliyor gibi.",
"Mekanik ses:",
"“Ömer. Senden bir şey isteyeceğim. Bunu sana yirmi dokuz yıl önce verdiğim ödevin karşı tezi olarak düşün. Bana ölmemde yardım et.”",
"Mekanik sesin hiçbir tonu yok. Bir hava durumu raporu gibi. Ama arkasındaki gözler sana bakıyor ve o gözlerde her ton var."
], secenekler: [
{ t: "“Yapamam hocam. Bu bir suç ve ben bir hekimim,” dersin.", to: "a3", etki: { yasa: 2, ret: true } },
{ t: "“Neden şimdi?” diye sorarsın.", to: "x_neden", etki: { ozerklik: 1 } },
{ t: "“Düşünmem gerek,” dersin.", to: "a3", etki: { dusun: true } },
{ t: "“O ödevin argümanlarını hâlâ savunuyorum hocam. Tartışalım,” dersin.", to: "x_tartisma", etki: { yasa: 1, tartisma: true } }
]},

x_neden: { saat: "Ekim", baslik: "Kutu", metin: [
"Nevin Hoca'nın gözleri ekranda geziniyor. Cevap uzun olacak; Defne'ye bir bakış atıyor, Defne ikinize çay getiriyor. Sonra yeniden mutfağa çekiliyor.",
"Yirmi dakika. Mekanik ses okuyor:",
"“Ağrım yok. Morfin işe yarıyor. Bunu bilmeni istiyorum; çünkü herkes ağrıdan dolayı istediğimi sanıyor. Ağrı değil.”",
"“Ben bir düşünürdüm Ömer. Kırk yıl konuştum. Amfilerde, konferanslarda, mutfakta, bu salonda. Şimdi bir göz kapağıyım. Dilim gitti, ellerim gitti, yutkunmam gitti. Gözlerim gidiyor; nörolog söyledi, sen de bugün fark ettin.”",
"“Gözlerim gidince ne kalacak biliyor musun? Bir zihin. Bir kutunun içinde. Düşünen, duyan, hisseden; ama hiçbir şey söyleyemeyen, hiçbir şeye işaret edemeyen. Kilitli. Herkes benim artık orada olmadığımı sanacak. Ben orada olacağım. Yıllarca belki.”",
"Bir süre durdu. Sonra:",
"“Ölümden korkmuyorum. O kutudan korkuyorum. Bir felsefeci için cehennemin tanımı bu: düşünmeye devam etmek ve bunu kimsenin bilmemesi.”",
"Defne mutfağın kapısında, elinde bir bardak, kıpırdamadan duruyor."
], secenekler: [
{ t: "“Gözleriniz gittiğinde başka iletişim yolları var hocam. Beyin-bilgisayar arayüzleri...” dersin.", to: "a3", etki: { yasa: 1, teknoloji: true } },
{ t: "“Anlıyorum,” dersin. Ve anlıyorsun.", to: "a3", etki: { merhamet: 1 } },
{ t: "“Bu kararı ne zaman verdiniz?” diye sorarsın.", to: "a3", etki: { ozerklik: 1, ne_zaman: true } },
{ t: "Bir şey söyleyemezsin. Çayın soğuyor.", to: "a3", etki: { merhamet: 1 } }
]},

x_tartisma: { saat: "Ekim", baslik: "Seminer", metin: [
"“Hayatın kutsallığı,” diyorsun. “İnsan hayatı, kişinin kendisi tarafından bile sonlandırılamayacak bir değer taşır. Hekim bu değerin bekçisidir.”",
"Nevin Hoca'nın gözlerinde bir parıltı. Otuz yıl önce amfide gördüğün parıltı; bir öğrenci iyi bir itiraz yaptığında.",
"Ekranda harfler, hızla, onun için hızla:",
"“Kutsal olan hayat mı, yaşayan mı? Bir hayat, yaşayanın ona bir anlam verememesi durumunda hâlâ kutsal mı? Kime göre?”",
"“Kaygan zemin,” diyorsun. “Bugün siz, yarın yaşlılar, öbür gün engelliler. Bir kapı açılınca kimin geçeceğini kontrol edemeyiz.”",
"Uzun bir bekleyiş. Sonra:",
"“Doğru. Kontrol edemeyiz. Ama kapıyı kapalı tutarak da bir şeyi kontrol ediyoruz: bana ne olacağını. Ben kaygan zeminde değilim Ömer. Ben zeminin en altındayım. Benim için zemin bitti.”",
"Bir süre bekliyor. Sonra son bir cümle:",
"“Yirmi dokuz yıl önce bana yazdığın ödevi hâlâ hatırlıyorum. İyi bir ödevdi. Ama içinde kimsenin bedeni yoktu.”",
"Bu cümleyi duyduktan sonra bir süre ne söyleyeceğini bilemiyorsun. Bir argümanı çürütmek kolay. Bir bedeni çürütemezsin."
], secenekler: [
{ t: "“Haklısınız hocam. Bedeni olmayan bir argüman yarım,” dersin.", to: "a3", etki: { ozerklik: 1, kabul_argüman: true } },
{ t: "“Ama benim bedenim var hocam. Elimle sizi öldüremem,” dersin.", to: "a3", etki: { yasa: 1, beden: true } },
{ t: "Tartışmaya devam edersin; saatlerce. Bunun ona iyi geldiğini görüyorsun.", to: "a3", etki: { merhamet: 1, seminer: true } },
{ t: "Susarsın. Bir hocanın son dersini dinler gibi.", to: "a3", etki: { merhamet: 1 } }
]},

a3: { saat: "Kasım", baslik: "Defne", metin: [
P(S("a2A"), "Nevin Hoca bir süre sana baktı. Sonra ekranda: “Biliyorum. Herkes öyle söylüyor. Senin farkın, bunu yüzüme söylemen.” Gözlerini kapadı. Konuşma bitti."),
P(S("a2C"), "Nevin Hoca'nın gözleri ekrana döndü: “Düşün. Ama çok uzun düşünme. Gözlerim seni beklemeyebilir.”"),
P(S("x_nedenA"), "Nevin Hoca bir süre baktı. “Okudum,” yazdı. “Elektrotlar, implantlar. Bir zihnin bir makineyle konuşması. Belki. Ama o zihin yine bir kutuda olacak. Kutu yalnızca bir pencere kazanacak.”"),
P(S("x_nedenC"), "Ekranda: “Bir yıl önce. Ellerim gidince. Sana bir yıl önce sormadım çünkü daha bir yılım vardı. Şimdi yok.”"),
P(S("x_tartismaC"), "Üç saat tartıştınız. Defne iki kez çay yenilendi. Bir yerde Nevin Hoca'nın gözleri yorgunluktan kaydı, yazdıkları anlamsızlaştı. Sonra toparlandı. Sonunda ekranda: “Uzun zamandır böyle bir akşam geçirmedim. Teşekkür ederim. Bu fikrimi değiştirmez. Ama teşekkür ederim.”"),
"Birkaç hafta sonra, ikinci ziyaretinde, Defne seni kapıda yakalayıp mutfağa çekiyor. Kapıyı kapatıyor.",
"Otuz dört yaşında. İki yıldır teyzesine bakıyor; bir yayınevindeki işini bırakmış, kendi evini kiraya vermiş, bu salonun bir köşesinde bir çekyatta uyuyor. Gözlerinin altı mor.",
"“Ömer Bey,” diyor, sesini alçaltarak. “Bunu kimseye söylemedim. Ben de onun ölmesini istiyorum.”",
"Durakladı. Gözleri doldu.",
"“Onun için mi istiyorum, kendim için mi, bilmiyorum. Bazı geceler uyanıyorum, maskenin sesini dinliyorum, ve bir an, bir an sadece, durmasını diliyorum. Sonra kendimden nefret ediyorum. Bu beni canavar mı yapar?”"
], secenekler: [
{ t: "“Hayır. Sizi yorgun bir insan yapar,” dersin.", to: "a4", etki: { merhamet: 1, defne_teselli: true } },
{ t: "“Bu duygunun teyzenizin kararına karışmaması gerekiyor,” dersin.", to: "a4", etki: { ozerklik: 1, ayir: true } },
{ t: "Ona bir bakım destek ekibi ve bir psikolog ayarlarsın. Hemen.", to: "a4", etki: { yasa: 1, destek: true } },
{ t: "“Teyzeniz bunu biliyor mu?” diye sorarsın.", to: "a4", etki: { ozerklik: 1, teyze_bilir: true } }
]},

a4: { saat: "Kasım", baslik: "Etik Kurul", metin: [
P(S("a3A"), "Defne ağladı; ilk kez, belki iki yıldır ilk kez, birinin önünde. “Yorgun,” dedi. “Evet. Çok yorgun.”"),
P(S("a3B"), "Defne başını salladı. “Biliyorum,” dedi. “Bu yüzden ona hiç söylemedim. Kararı onun olsun. Ama ben de bu evde yaşıyorum Ömer Bey.”"),
P(S("a3C"), "Bir hafta sonra bir bakım asistanı gelmeye başladı; haftada üç gün. Defne ilk gün dışarı çıktı ve dört saat Boğaz'da yürüdü. Döndüğünde sana bir mesaj attı: “Unutmuşum denizi.”"),
P(S("a3D"), "“Biliyor,” dedi Defne. “Bir gece yazdı: ‘Yorgunsun. Biliyorum. Senin için de istiyorum.’ Ben ağladım. O da ağladı; gözleriyle. Bunu sizden saklamıştık.”"),
"Hastanenin etik kurulu başkanı Dr. Suat Erol, altmışlarında bir iç hastalıkları profesörü, odasında seni bekliyor. Masada Türk Ceza Kanunu'nun ilgili maddeleri açık.",
"“Ömer,” diyor, “açık konuşalım. Türkiye'de ötanazi yasak. Bir hastanın ölümüne aktif olarak yardım edersen, kasten öldürmeden yargılanırsın. İntihara yardım da suç. Bunlar tartışmaya açık değil.”",
"“Ama,” diyor ve bir başka kâğıt çıkarıyor, “Hasta Hakları Yönetmeliği hastaya tedaviyi reddetme hakkı tanır. Bilinci yerinde bir hasta, hayatını uzatan bir tedaviyi, solunum desteğini, tüple beslenmeyi reddedebilir. Bu ötanazi değil. Bu, hastanın kendi bedeni üzerindeki hakkı.”",
"“Ve palyatif sedasyon var: dayanılmaz, başka hiçbir şeyle giderilemeyen semptomlarda, hastayı derin uykuya almak. Ama ‘varoluşsal acı’ bir semptom mu? Kurul bunda bölünmüş. Ben bölünmüş kurulun başkanıyım.”"
], secenekler: [
{ t: "“Hocam, yasanın izin verdiği yerin tam sınırına kadar gitmek istiyorum,” dersin.", to: "a5", etki: { yasa: 1, ozerklik: 1, sinir: true } },
{ t: "“Varoluşsal acı da bir acıdır hocam,” dersin.", to: "a5", etki: { merhamet: 1, varolussal: true } },
{ t: "“Yasanın dışına çıkmayacağım hocam. Merak etmeyin,” dersin.", to: "a5", etki: { yasa: 2 } },
{ t: "“Sizce hocam, siz onun yerinde olsanız ne isterdiniz?” diye sorarsın.", to: "a5", etki: { ozerklik: 1, suata_sordu: true } }
]},

a5: { saat: "Aralık, 03.10", baslik: "Gece", metin: [
P(S("a4A"), "Suat Hoca uzun süre sana baktı. “Sınırın tam üstünde durmak,” dedi, “en yalnız yerdir. Bunu bil.”"),
P(S("a4B"), "Suat Hoca başını salladı. “Benim de bir annem vardı,” dedi. Başka bir şey söylemedi. Kâğıtları topladı."),
P(S("a4C"), "Suat Hoca rahatladı; omuzları gevşedi. “Güzel,” dedi. Bir başkasının vicdanının yükünü taşımak zorunda kalmamak, bir kurul başkanı için bir lütuf."),
P(S("a4D"), "Suat Hoca gözlüğünü çıkardı. Uzun süre bir şey söylemedi. “Bunu bana kimse sormaz,” dedi sonunda. “Kurulda herkes ‘hasta ne ister, yasa ne der’ diye sorar. ‘Sen ne isterdin’ diye kimse sormaz.” Cevap vermedi. Gözleri cevap verdi."),
"Aralık. Gece üçü on geçe telefonun çalıyor. Defne. Sesinin arkasında bir alarm: maskenin alarmı.",
"“Ömer Bey, nefes alamıyor! Balgam! Makine öttü, aspiratörü çalıştırdım ama...”",
"Yirmi dakikada Cihangir'desin. Merdivenleri koşarak çıkıyorsun. Nevin Hoca'nın yüzü mor; gözleri açık, panik içinde. Balgam soluk borusunu tıkamış. Aspiratörü alıyorsun, sondayı ilerletiyorsun, çekiyorsun. Bir kez. İki kez. Üçüncüde açılıyor. Maske yeniden yerine. Oksijen yükseliyor; seksen, seksen beş, doksan.",
"Nevin Hoca'nın gözleri kapanıyor. Bir süre öyle kalıyor. Sonra açıyor, ekrana dönüyor. Defne tableti düzeltiyor.",
"Harfler beliriyor, yavaş, titrek; yorgun gözlerin titrekliği:",
"“Neden kurtardın?”"
], secenekler: [
{ t: "“Görevim bu hocam,” dersin.", to: "a6", etki: { yasa: 1, gorev: true } },
{ t: "“Bilmiyorum. Ellerim yaptı,” dersin.", to: "a6", etki: { merhamet: 1, eller: true } },
{ t: "“Henüz konuşmadık hocam. Bir gecede değil,” dersin.", to: "a6", etki: { ozerklik: 1 } },
{ t: "Cevap vermezsin. Sabaha kadar yanında oturursun.", to: "a6", etki: { merhamet: 1, sabah: true } }
]},

a6: { saat: "Aralık", baslik: "Karar", metin: [
P(S("a5A"), "Ekranda: “Görev.” Sonra, uzun bir aradan sonra: “Doğru. Seni suçlamıyorum. Ama bir dahakine, sor bana önce.”"),
P(S("a5B"), "Ekranda: “Ellerin.” Sonra: “Ellerin benden dürüst. Ellerin yaşatmak istiyor. Sen ne istiyorsun?”"),
P(S("a5C"), "Ekranda: “Haklısın. Bir gecede değil. Ama bir gece gelecek ve o gece konuşamayacağım.”"),
P(S("a5D"), "Sabaha kadar oturdun. Nevin Hoca bir süre uyudu. Uyandığında sen hâlâ oradaydın. Ekranda tek kelime: “Kal.” Kaldın; güneş Boğaz'ın üstünden doğana kadar."),
"Bir hafta sonra yeniden Cihangir'desin. Defne seni salona alıyor ve mutfağa çekiliyor; bu kez kapıyı kapatmadan.",
"Nevin Hoca ekranda bir dosya açmış; adı: “Ömer'e.” İçinde dört satır. Mekanik ses okuyor:",
"“Biliyorum ki bu senin için kolay bir karar değil. Bu yüzden sana seçenekleri ben sıralıyorum. Bir: Hayır de. Bana iyi bak. Yanımda ol. Bunu da kabul ederim. İki: Yasanın sana tanıdığı hakkı kullanmama yardım et. Maskeyi, tüpü bırakayım; sen uyut beni. Üç: İsviçre. Param var. Raporlarını yaz, uçağa bindir. Dört: Bunu yazmaya utanıyorum. Ama yazıyorum. Bana bir yol bırak. Kimsenin bilmeyeceği.”",
"Ekran kararıyor; göz kırpışıyla kapatılmış.",
"Nevin Hoca sana bakıyor. Bir hoca, bir öğrencisine. Otuz yıl önce bir amfide, sınavın son sorusunu dağıtırken baktığı gibi."
], secenekler: [
{ t: "“Hayır hocam. Ama size söz: sonuna kadar yanınızdayım.”", to: "bk1", etki: { yasa: 1, merhamet: 1, kol: "bakim" } },
{ t: "“İkinci yol. Yasanın sınırında. Ben de sizinle o sınırda duracağım.”", to: "br1", etki: { ozerklik: 2, kol: "birak" } },
{ t: "“İsviçre. Raporlarınızı yazacağım.”", to: "z1", etki: { ozerklik: 2, kol: "zurih" } },
{ t: "Bir şey söylemezsin. Ama gözlerine bakarak, yavaşça başını sallarsın.", to: "g1", etki: { merhamet: 2, kol: "gizli" } }
]},

/* ---------- BAKIM KOLU ---------- */
bk1: { saat: "Ocak", baslik: "Söz", metin: [
"“Hayır,” diyorsun. “Ama söz: sonuna kadar yanınızdayım. Ağrınız, nefesiniz, korkunuz; hepsinin başında. Gözleriniz gittiğinde bile.”",
"Nevin Hoca uzun süre sana bakıyor. Sonra ekranda harfler:",
"“Bir söz, bir ders değildir Ömer. Ama iyi bir söz.” Bir süre durup ekliyor: “Hayal kırıklığına uğradım. Ve sana saygı duyuyorum. İkisi birden olabilir. Bunu öğrencilerime hep söylerdim.”",
"Sözünü tutmaya başlıyorsun. Haftada üç ziyaret. Morfin, ama düşük doz; zihnini bulandırmasın. Gece için bir hemşire. Defne'ye haftada iki gün izin.",
"Ve bir şey daha: Nevin Hoca'nın kitaplarını okumaya başlıyorsun. Ona, sesli. Kendi yazdığı kitapları. Otuz yıl önce bir amfide anlattığı şeyleri, şimdi onun salonunda, ona.",
"İlk gün “Acı ve Anlam” adlı kitabının ilk bölümünü okuyorsun. Nevin Hoca bir yerde gözlerini kapatıyor. Uyudu sanıyorsun. Sonra ekranda bir kelime: “Yanlış.” Okumayı durduruyorsun. “Kırk yıl önce yanlış yazmışım,” yazıyor. “Devam et. Ama yanlış olduğunu bil.”"
], secenekler: [
{ t: "“Neresi yanlış hocam?” diye sorarsın.", to: "bk2", etki: { ozerklik: 1, yanlis: true } },
{ t: "Okumaya devam edersin; yanlışlığı onun bilmesine bırakarak.", to: "bk2", etki: { merhamet: 1 } },
{ t: "Kitabı kapatıp başka bir şey okumayı teklif edersin: şiir, roman, gazete.", to: "bk2", etki: { merhamet: 1, siir: true } },
{ t: "“Bir sonraki baskı için notlarınızı yazdırın bana,” dersin.", to: "bk2", etki: { ozerklik: 1, notlar: true } }
]},

bk2: { saat: "Şubat", baslik: "Spinoza", metin: [
P(S("bk1A"), "Ekranda: “Acının bir anlamı olduğunu yazmışım. Acı insanı derinleştirir, olgunlaştırır, diye. Bunu acı çekmeyen biri yazmış. Acının anlamı yok Ömer. Anlam, acıya rağmen bulduğun şey.”"),
P(S("bk1C"), "Bir gün Cemal Süreya okudun. Bir gün Sait Faik. Nevin Hoca bir öyküde gözlerini kapadı; sonra ekranda: “Deniz. Sait Faik'in denizi. Ben de onu severdim.” Ertesi hafta Defne onu tekerlekli sandalyeyle balkona çıkardı; ilk kez bir yıl sonra."),
P(S("bk1D"), "Not almaya başladın. Her ziyarette yarım saat. Kırk yıl önceki kitabına yeni bir son bölüm. Başlığını o koydu: “Bir Bedenden Yazılan Düzeltmeler.”"),
"Şubat. Evde bir kedi var: Spinoza. On beş yaşında, tekir, tek kulağı yırtık. Nevin Hoca'nın emekli olduğu yıl sokaktan almış. Spinoza bütün gün yatağın ayak ucunda uyuyor.",
"Bir öğleden sonra Spinoza yatağa çıkıp Nevin Hoca'nın göğsüne yatıyor. Mırlıyor. Nevin Hoca'nın gözleri kapalı; ama yüzünde, yıllardır felçli kaslarında, bir şey kıpırdıyor. Bir gülümseme değil; bir gülümsemenin hatırası.",
"Ekranda, uzun uğraşla:",
"“Bu kedinin mırlaması. Bunu hâlâ hissedebiliyorum. Derim hissediyor. Bunu bilmiyordum. Bütün kaslarım gitti ama derim kaldı.”",
"Bir süre bekliyor. Sonra:",
"“Belki kutunun içinde de bir kedi olur. Belki.”",
"Bunu bir şaka mı, bir umut mu, bir teslimiyet mi olarak yazdı, bilmiyorsun."
], secenekler: [
{ t: "“Belki,” dersin.", to: "bk3", etki: { merhamet: 1 } },
{ t: "“Kutu sandığınız kadar boş olmayabilir hocam,” dersin.", to: "bk3", etki: { yasa: 1, umut: true } },
{ t: "Kediyi okşarsın. Bir şey söylemeden.", to: "bk3", etki: { merhamet: 1 } },
{ t: "“Fikriniz değişti mi?” diye sorarsın.", to: "bk3", etki: { ozerklik: 1, fikir_sordu: true } }
]},

bk3: { saat: "Mart", baslik: "Gözler", metin: [
P(S("bk2D"), "Ekranda uzun bir bekleyiş. Sonra: “Hayır. Ama bugün değişmedi diye yarın da değişmeyecek değil. Felsefecilerin en büyük hatası budur: bir fikri bir kez düşünüp sonsuza kadar düşündüğünü sanmak.”"),
"Mart. Göz takip kamerası Nevin Hoca'nın bakışlarını artık zor okuyor. Gözler yavaşladı; bazı harflere ulaşamıyor. Bir cümle eskiden beş dakika sürüyordu, şimdi yirmi.",
"Nörolog evet diyor: birkaç hafta. Belki daha az. Sonra yalnızca göz kırpışları kalacak; evet için bir, hayır için iki. Sonra belki o da.",
"Bir sabah geldiğinde Defne kapıda. “Bütün gece bir şey yazmaya çalıştı,” diyor. “Bitirdi. Sizi bekliyor.”",
"Ekranda, bir dosya: “Son.” Bir cümle. Mekanik ses okuyor:",
"“Ömer. Gözlerim gidince bir sorum olacak ve soramayacağım. Şimdi soruyorum: o zaman bana nasıl bakacaksın? Bir hasta gibi mi, bir beden gibi mi, yoksa hâlâ orada biri varmış gibi mi? Cevap verme. Yalnızca hatırla.”",
"Nevin Hoca gözlerini kapatıyor. Uzun bir süre açmıyor. Sonra açıyor. Bir kez kırpıyor: evet. Neye evet dediğini bilmiyorsun."
], secenekler: [
{ t: "“Hâlâ orada biri varmış gibi. Her zaman,” dersin. Cevap verme dese de.", to: "t1", etki: { merhamet: 1, cevap_verdi: true } },
{ t: "Cevap vermezsin. Hatırlayacaksın.", to: "t1", etki: { ozerklik: 1 } },
{ t: "Bir evet-hayır sistemi kurarsın; gözleri gittiğinde bile konuşabilmesi için.", to: "t1", etki: { yasa: 1, sistem: true } },
{ t: "Eğilip alnından öpersin.", to: "t1", etki: { merhamet: 1, opucuk: true } }
]},

/* ---------- BIRAKMA KOLU ---------- */
br1: { saat: "Ocak", baslik: "Ret Belgesi", metin: [
"Yasanın sınırı, kâğıtların içinden geçer. Bir avukatla, Suat Hoca'yla, bir noterle konuşuyorsun. Bilinci yerinde bir hastanın hayati tedaviyi reddetmesi: bir belge, iki tanık, bir psikiyatri raporu, bir bekleme süresi.",
"Psikiyatrist geliyor; Nevin Hoca'yla iki saat konuşuyor, ekranın hızında. Çıkarken sana: “Depresyonu yok. Karar verme yetisi tam. Hatta benden daha tam.”",
"Belge hazırlanıyor. Nevin Hoca onu gözleriyle okuyor; her satırı. İmza yerine gelince bir sorun: imza atamaz. Göz takip sistemi bir imza üretebilir mi? Noter düşünüyor. Sonunda bir çözüm: video kaydı, iki tanık, gözle seçilmiş harflerden oluşan adı, ve Defne'nin elini kullanarak bir parmak izi.",
"Nevin Hoca adını seçiyor. N. E. V. İ. N. Sonra soyadını. On beş dakika. Video kaydediyor.",
"Defne teyzesinin elini alıyor. Parmağını mürekkebe, sonra kâğıda. Bir parmak izi. Defne'nin eli titriyor; Nevin Hoca'nın eli titremiyor, çünkü artık titreyemiyor.",
"Belge imzalandı. Bir tarih seçilecek. Nevin Hoca ekranda: “Bahar. Erguvanlar açınca. Son bir kez görmek istiyorum.”"
], secenekler: [
{ t: "Kabul edersin. Erguvanları beklersiniz.", to: "br2", etki: { ozerklik: 1, erguvan: true } },
{ t: "“Bahar uzak hocam. O zamana kadar gözleriniz...” diye başlarsın.", to: "br2", etki: { yasa: 1, erken: true } },
{ t: "Defne'ye bu tarihi onun da onaylayıp onaylamadığını sorarsın.", to: "br2", etki: { merhamet: 1, defne_onay: true } },
{ t: "Belgeyi bir kez daha okursun. Her kelimesini. Yanlışlık olmasın diye.", to: "br2", etki: { yasa: 1 } }
]},

br2: { saat: "Nisan", baslik: "Erguvan", metin: [
P(S("br1B"), "Nevin Hoca bir süre düşündü. Sonra: “Haklısın. O zaman erguvanları hayal ederim. Kırk yıldır her nisan gördüm; bir tanesini atlarsam bir şey olmaz.” Tarih öne alındı: mart sonu."),
P(S("br1C"), "Defne uzun süre sustu. Sonra “Evet,” dedi. “Bahar. Benim de son baharım olacak onunla.”"),
"Nisan. Defne yatağı pencerenin önüne çekmiş. Boğaz'ın karşı yakasında, Kandilli'nin yamaçlarında erguvanlar açmış; pembe, mor, sisin içinde. Nevin Hoca bütün sabah onlara bakıyor.",
"Öğleden sonra her şey hazır. Bir hemşire, sen, Defne, Spinoza. Bir serum askısı. Sedasyon ilaçları. Maske hâlâ yüzünde, makine hâlâ nefes veriyor.",
"Planı daha önce konuştunuz: önce sedasyon, derin bir uyku. Sonra maske çıkarılacak. Tüple beslenme çoktan durduruldu. Ondan sonra ne kadar sürer? Saatler belki, belki bir gün. Sedasyon onu rahat tutacak. Bu bir öldürme değil; bir tedavinin bırakılması. Yasa böyle der. Senin ellerin ise bunun farkını o kadar net bilmiyor.",
"Nevin Hoca ekrana dönüyor. Son mesaj. Yirmi dakika.",
"“Ömer. Defne. Spinoza. Ve erguvanlar. Teşekkür ederim. Ders bitti. Sınav yok.”",
"Defne ağlıyor. Spinoza yatağa çıkıyor, göğsüne yatıyor. Nevin Hoca sana bakıyor ve bir kez kırpıyor: evet."
], secenekler: [
{ t: "Sedasyonu kendin başlatırsın.", to: "br3", etki: { ozerklik: 1, kendi_eli: true } },
{ t: "Hemşireye başlatmasını söylersin.", to: "br3", etki: { yasa: 1, hemsire: true } },
{ t: "Bir an durursun. “Emin misiniz hocam?” diye son kez sorarsın.", to: "br3", etki: { yasa: 1, son_soru: true } },
{ t: "Defne'nin elini tutup birlikte serumu açarsınız.", to: "br3", etki: { merhamet: 1, birlikte: true } }
]},

br3: { saat: "Nisan", baslik: "Otuz Saat", metin: [
P(S("br2C"), "Nevin Hoca'nın gözleri sana döndü. Bir kez kırptı. Sonra bir daha. İki. Kalbin durdu: hayır mı? Sonra ekranda, son harfler: “Sorma. Ama sorduğun için sağ ol.”"),
P(S("br2D"), "Defne'nin eli seninkinin üstünde. Serum açıldı. İkinizin elleriyle. Bir yük, iki omuz."),
"İlaç damarlara giriyor. Nevin Hoca'nın gözleri ağırlaşıyor. Erguvanlara bakmaya çalışıyor; sonra gözkapakları iniyor. Uyuyor.",
"Bir saat sonra maskeyi çıkarıyorsun. Makine susuyor. Odada bir sessizlik ki üç yıldır hiç olmamış.",
"Nevin Hoca'nın nefesi zayıf ama düzenli. Kendi nefesi; kendi ciğerlerinden, kendi gücüyle, ne kadar kaldıysa.",
"Sandığından uzun sürüyor. Saatler. Gece oluyor. Defne bir sandalyede uyukluyor. Sen yatağın yanındasın. Spinoza göğsünde.",
"Gece ikide nefesi değişiyor; araları uzuyor. Sabaha karşı bir an tamamen duruyor, sonra yeniden başlıyor. Yasanın “tedavinin bırakılması” dediği şey, odada, bir nefesin saatler süren son yolculuğu.",
"Öğleden sonra, otuz saat sonra, bir nefes alıyor ve vermiyor.",
"Kandilli'nin yamaçlarında erguvanlar hâlâ açık."
], secenekler: [
{ t: "Ölüm belgesine nedeni yazarsın: amiyotrofik lateral skleroz, solunum yetmezliği. Doğru ve eksik.", to: "t1", etki: { yasa: 1 } },
{ t: "Defne'yi uyandırıp birlikte pencereyi açarsınız.", to: "t1", etki: { merhamet: 1, pencere: true } },
{ t: "Spinoza'yı kucağına alırsın.", to: "t1", etki: { merhamet: 1, spinoza: true } },
{ t: "Bir süre hiçbir şey yapmazsın. Otuz saatin ağırlığı.", to: "t1", etki: { ozerklik: 1 } }
]},

/* ---------- ZÜRİH KOLU ---------- */
z1: { saat: "Ocak", baslik: "Belgeler", metin: [
"İsviçre'de, yardımlı ölüme izin veren bir dernek. Yabancıları da kabul ediyor. Koşulları: ağır, iyileşmez bir hastalık; karar verme yetisi; tekrarlanan, tutarlı bir istek. Ve son adımı hastanın kendisinin atması: ilacı kendi içmesi, ya da kendi eliyle bir vanayı açması.",
"Nevin Hoca'nın eli yok.",
"Dernekle yazışıyorsun. Cevap geliyor: göz kontrollü bir infüzyon pompası. Hasta bir ekrana bakarak vanayı kendisi açabilir. Bu daha önce yapılmış. Yasal olarak, son eylem hastanındır.",
"Senden istenen bir rapor: tanı, prognoz, karar yetisi. Türkiye'de bir hekim olarak bu raporu yazmak suç mu? Avukat düşünüyor. “Gri,” diyor. “Rapor yazmak suç değil. Ama raporun ne için yazıldığını biliyorsan ve savcı bunu bir yardım sayarsa... Kimse daha önce denemedi.”",
"Defne mutfakta. Bu planı duyduğundan beri sana bakmıyor.",
"“Onu bir uçağa mı bindireceksiniz?” diyor sonunda. “Bir ambulans uçağına, makineleriyle, maskeleriyle? Yabancı bir şehre? Yabancı bir odada ölsün diye? Neden burada değil? Neden kendi kitaplarının arasında değil?”",
"Nevin Hoca ekranda Defne'nin cümlelerini dinliyor. Sonra yazıyor: “Çünkü burada seni suçlu yaparlar.”"
], secenekler: [
{ t: "Raporu yazarsın. Bütün riskini üstlenerek.", to: "z2", etki: { ozerklik: 1, rapor: true } },
{ t: "Raporu yazarsın ama yalnızca tıbbi gerçekleri; amacından söz etmeden.", to: "z2", etki: { yasa: 1, rapor: true, temkin: true } },
{ t: "Defne'yle yalnız konuşursun. Onun da bu yolculuğa razı olması gerek.", to: "z2", etki: { merhamet: 1, rapor: true, defne_konustu: true } },
{ t: "Nevin Hoca'ya son bir kez ikinci yolu, burada ölmeyi önerirsin.", to: "z2", etki: { yasa: 1, rapor: true, ikinci_oneri: true } }
]},

z2: { saat: "Şubat", baslik: "Uçak", metin: [
P(S("z1C"), "Defne seni dinledi. Uzun süre. Sonra “Gelmeyeceğim,” dedi. Sonra: “Geleceğim. Ama ona veda etmek için değil. Onunla gitmek için. Sonuna kadar.”"),
P(S("z1D"), "Nevin Hoca'nın gözleri ekrana döndü. “Burada mı? Yasanın kenarında, bir hemşirenin eliyle, senin ellerinle? Hayır. Ben kendi elimle istiyorum. Elim yoksa gözümle.”"),
"Şubat sonu. Bir ambulans uçağı, Atatürk Havalimanı'nın genel havacılık terminalinden. Nevin Hoca bir sedyede, maskesi takılı, tableti göğsünün üstünde bir askıda. Defne yanında. Sen yanındasın; izin aldın, “kişisel nedenlerle”.",
"Gümrükte bir memur pasaportlara bakıyor, sedyeye bakıyor, sana bakıyor. Bir şey soracak gibi; sormuyor. Bir damga.",
"Uçak kalkıyor. Nevin Hoca pencereden İstanbul'a bakıyor. Boğaz, köprüler, Cihangir'in yokuşları; bir an, sonra bulutlar.",
"Ekranda, yavaş: “Kırk yıl önce ilk kez Almanya'ya doktora için gittiğimde de böyle bakmıştım. Döneceğimi biliyordum o zaman.”",
"Üç saat. Nevin Hoca'nın gözleri yorgun; bazen kapanıyor. Bir yerde ekranda bir kelime: “Spinoza?” Defne'nin gözleri doluyor: “Komşuda teyzeciğim. İyi bakacaklar.”",
"Zürih'e iniş. Ocak gibi soğuk bir şubat. Bir minibüs. Şehrin dışında, bir sanayi bölgesinde, mavi boyalı küçük bir ev."
], secenekler: [
{ t: "Nevin Hoca'yla son geceyi birlikte geçirmeyi teklif edersin; otelde, eve gitmeden.", to: "z3", etki: { merhamet: 1, son_gece: true } },
{ t: "Doğruca eve gidersiniz. Yolculuk uzadıkça ağırlaşıyor.", to: "z3", etki: { ozerklik: 1 } },
{ t: "Defne ile Nevin Hoca'yı bir süre yalnız bırakırsın.", to: "z3", etki: { merhamet: 1 } },
{ t: "Derneğin hekimiyle karar yetisini bir kez daha değerlendirirsin.", to: "z3", etki: { yasa: 1 } }
]},

z3: { saat: "Şubat", baslik: "Mavi Ev", metin: [
P(S("z2A"), "Bir otel odası. Nevin Hoca, Defne, sen. Pencereden Zürih gölü. Nevin Hoca bütün gece uyumadı. Ekranda tek bir cümle, sabaha karşı: “Bir gece daha. Bu kadarı yeter.”"),
"Mavi evin içi sade. Bir yatak, bir kanepe, pencerenin önünde bir saksı. Duvarda bir resim: bir göl, dağlar. Binlerce insan bu odadan geçmiş. Hiçbiri geri dönmemiş.",
"Derneğin iki gönüllüsü: yaşlı bir İsviçreli kadın ve genç bir adam. Kibar, sakin, hiç acele etmeyen. Belgeler bir kez daha okunuyor. Nevin Hoca'ya soruluyor, bir tercüman aracılığıyla: istediği hâlâ bu mu? Ekranda: “Evet.”",
"Pompa kuruluyor. Ekranda bir düğme belirecek. Nevin Hoca o düğmeye üç saniye bakarsa, vana açılacak. Önce bir uyku ilacı. Sonra bir başka ilaç.",
"Her şey hazır. Gönüllüler bir kenara çekiliyor. Defne yatağın bir yanında, sen öbür yanında.",
"Nevin Hoca son bir mesaj yazıyor. Yirmi dakika. Kimse acele etmiyor.",
"“Ömer. Bu son ders. Sınavı ben veriyorum, sen izle. Defne. Seni seviyorum. Bunu hiç yüksek sesle söylemedim; sesim olduğu zamanlarda bile. Şimdi bir makine söylüyor. Ama ben söylüyorum.”",
"Ekranda düğme beliriyor. Yeşil. Nevin Hoca ona bakmıyor; önce Defne'ye, sonra sana bakıyor. Sonra düğmeye.",
"Bir. İki. Üç."
], secenekler: [
{ t: "Elini tutarsın.", to: "t1", etki: { merhamet: 1, el_tuttu: true } },
{ t: "Gözlerini kapamazsın. Sonuna kadar izlersin; o öyle istedi.", to: "t1", etki: { ozerklik: 1, izledi: true } },
{ t: "Defne'nin yanına geçip onu tutarsın.", to: "t1", etki: { merhamet: 1, defneyi_tuttu: true } },
{ t: "Son anda başını çevirirsin. Yapamazsın.", to: "t1", etki: { yasa: 1, cevirdi: true } }
]},

/* ---------- GİZLİ KOL ---------- */
g1: { saat: "Ocak", baslik: "Pompa", metin: [
"Başını sallıyorsun. Bir kez. Nevin Hoca'nın gözleri kapanıyor; teşekkür eder gibi, ya da bir yükün altına girdiğini gördüğü için bir özür gibi.",
"Bir hafta sonra bir pompa getiriyorsun. Ağrı tedavisi için kullanılan, hastanın kendisinin doz ayarlayabildiği türden; ama bu, bir göz takip sistemine bağlı. Mühendis bir arkadaşın bir akşamüstü yazılımını değiştiriyor; ne için olduğunu sormuyor.",
"Pompanın içinde morfin. Normal dozun çok üstünde bir yedek hazne. Ekranda, menülerin en derininde, bir seçenek. Nevin Hoca oraya ulaşıp beş saniye bakarsa, hazne boşalır.",
"Kurulumu gece yapıyorsun. Defne uyuyor. Ya da uyuyor gibi yapıyor.",
"Nevin Hoca her adımı izliyor. Bittiğinde ekranda: “Göster.” Ona menüyü gösteriyorsun. Bir, iki, üç, dört adım. Sonra beş saniye.",
"Ekranda: “Anladım.” Sonra: “Bunu kimse bilmeyecek mi?”",
"Biliyorsun ki bu bir suç. Kasten öldürme ya da intihara yardım; savcının nasıl yorumlayacağına bağlı. On yıl, belki daha fazla. Mesleğin, adın, ailen.",
"Ve biliyorsun ki bu odada bir kadın, ilk kez üç yıldır, kendi bedeni üzerinde bir şeye karar verebilecek."
], secenekler: [
{ t: "“Kimse bilmeyecek,” dersin.", to: "g2", etki: { merhamet: 1, sir: true } },
{ t: "“Ben bileceğim hocam,” dersin.", to: "g2", etki: { ozerklik: 1, ben_bilecegim: true } },
{ t: "“Defne bilmeli,” dersin.", to: "g2", etki: { yasa: 1, defne_bilsin: true } },
{ t: "Bir şey söylemeden pompanın kayıt dosyasını silersin.", to: "g2", etki: { sir: true, kayit_sildi: true } }
]},

g2: { saat: "Şubat", baslik: "Bekleyiş", metin: [
P(S("g1C"), "Ertesi sabah Defne'ye anlattın. Defne uzun süre sustu. Sonra pompaya baktı; bir yılan gibi. “Bunu ben bilmek istemiyordum,” dedi. “Ama artık biliyorum. Ve hiçbir şey yapmayacağım.”"),
"Bir hafta. İki hafta. Üç.",
"Nevin Hoca menüye gitmiyor.",
"Ziyaretlerine devam ediyorsun. Ağrı, nefes, morfin dozu. Her seferinde pompanın kayıtlarına bakıyorsun; hiçbir şey. Spinoza yatakta. Erguvanlar henüz açmadı.",
"Bir gün soruyorsun, kimse yokken: “Hocam, neden...?” Cümleyi bitirmiyorsun.",
"Ekranda, uzun bir bekleyişten sonra:",
"“Bilmek yetti. Yapabileceğimi bilmek. Üç yıldır bir şeye karar verme gücüm yoktu. Şimdi var. Her sabah uyanıyorum ve bugün değil diyorum. Bunu ben diyorum. Bunu sen bana verdin.”",
"Bir süre durup ekliyor: “Belki hiç basmayacağım. Belki yarın. Bilmiyorum. Ama ilk kez bilmemek korkutucu değil.”",
"Bir yasanın yasakladığı bir şeyi yaptın ve o şey, şimdiye kadar, kimseyi öldürmedi. Yalnızca bir kadına bir sabahı geri verdi."
], secenekler: [
{ t: "Pompayı kaldırmayı düşünürsün. Amacına ulaştı.", to: "g3", etki: { yasa: 1, kaldir_dusun: true } },
{ t: "Hiçbir şey değiştirmezsin. Karar onun.", to: "g3", etki: { ozerklik: 1 } },
{ t: "Ona bu duygusunu yazmasını önerirsin. Kitabının son bölümü için.", to: "g3", etki: { ozerklik: 1, yazsin: true } },
{ t: "Kendi avukatınla konuşursun. Ne olursa olsun hazırlıklı olmak için.", to: "g3", etki: { yasa: 1, avukat: true } }
]},

g3: { saat: "Mart, 04.20", baslik: "Gece Telefonu", metin: [
P(S("g2C"), "Yazdı. On gün boyunca, her gün biraz. Başlık: “Bir Düğmenin Özgürlüğü.” Dosyanın sonunda bir not: “Bu metni ben öldükten sonra yayımlayın. Ömer'in adını geçirmeden.”"),
"Mart. Gece dördü yirmi geçe telefon. Defne. Sesi sakin; tuhaf bir şekilde sakin.",
"“Ömer Bey. Teyzem gitti. Uyandım, maskenin sesi yoktu. Pompa... ekranda bir şey yazıyor.”",
"Yirmi dakikada oradasın. Nevin Hoca yatakta, gözleri kapalı, yüzü sakin. Spinoza ayak ucunda. Pompanın ekranında: “Hazne boşaltıldı. 02.47.”",
"Ve tabletin ekranında, son yazdığı mesaj. Kaydedilmiş, saat 02.41:",
"“Bugün. Erguvanları beklemedim. Gözlerim artık menüye ulaşamayacaktı; birkaç gün sonra. Ya bugün ya hiç. Ömer, teşekkür ederim. Defne, özür dilerim. Spinoza'yı sev.”",
"Şimdi bir ölüm belgesi doldurman gerekiyor. Ölüm nedeni. Bir hekimin imzası. Ve bir pompa, kayıtlarıyla, bir savcının okuyabileceği bir dilde, saat 02.47'yi gösteriyor.",
"Defne sana bakıyor. Hiçbir şey sormuyor. Bu gece ne yazacağına, ikinizin de geri kalan hayatı bağlı."
], secenekler: [
{ t: "Ölüm nedenine “ALS, solunum yetmezliği” yazarsın. Pompayı sökersin.", to: "t1", etki: { merhamet: 1, ortbas: true } },
{ t: "Her şeyi olduğu gibi bildirirsin. Pompayı, kayıtları, kendi rolünü.", to: "t1", etki: { yasa: 2, itiraf: true } },
{ t: "Ölüm nedenine doğruyu yazarsın ama pompanın nasıl kurulduğunu söylemezsin.", to: "t1", etki: { yasa: 1, yarim: true } },
{ t: "Defne'ye ne istediğini sorarsın. Bu onun da hayatı.", to: "t1", etki: function(d){ d.ozerklik++; d.defne_secti = true; d.ortbas = true; } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Sonra", baslik: "Ölümden Sonra", metin: [
P(function(d){ return d.kol === "bakim"; }, "Nevin Hoca nisan ortasında öldü. Gözleri iki hafta önce gitmişti. Son iki haftasında yalnızca göz kırpışlarıyla konuştu; sonra o da zorlaştı. Bir sabah nefesi yavaşladı, yavaşladı, durdu. Yanındaydın. Söz verdiğin gibi."),
P(function(d){ return d.kol === "bakim" && d.sistem; }, "Kurduğun evet-hayır sistemi son güne kadar işledi. Son sorduğun soru: “Rahat mısınız hocam?” Bir kırpış: evet. Sonra, yavaşça, bir daha: hayır. Sonra bir daha: evet. Ne demek istediğini hiç bilemeyeceksin."),
P(function(d){ return d.kol === "birak"; }, "Nevin Hoca erguvanların altında öldü; kendi seçtiği gün, kendi salonunda, kendi kitaplarının arasında. Yasa buna ötanazi demiyor. Sen ne dediğini bilmiyorsun."),
P(function(d){ return d.kol === "zurih"; }, "Nevin Hoca Zürih'in dışında, mavi bir evde öldü. Gözleriyle açtığı bir vanayla. İsviçre yasasına göre, kendi eliyle. Cenazesini İstanbul'a getirdiniz; bir kargo uçağıyla, bir tabutun içinde."),
P(function(d){ return d.kol === "gizli"; }, "Nevin Hoca mart sonunda, gece ikiyi kırk yedi geçe öldü. Erguvanları beklemeden. Kendi seçtiği anda; senin elinin kurduğu bir düğmeyle."),
P(function(d){ return d.ortbas; }, "Ölüm belgesinde “ALS, solunum yetmezliği” yazıyor. Doğru. Ve eksik. Pompa senin arabanın bagajında; sonra bir hastanenin tıbbi atık konteynerinde."),
P(function(d){ return d.itiraf; }, "Bildirimini yaptın. Ertesi gün bir savcı aradı. Bir hafta sonra ifade verdin. Avukatın yanındaydı. Savcı dosyayı okurken uzun süre sustu. Sonra: “Bu bir cinayet dosyası mı, bir vicdan dosyası mı, ben de bilmiyorum.”"),
"Cenaze Aşiyan'da. Boğaz'a bakan, şairlerin, yazarların, düşünürlerin gömüldüğü yamaçta. Kalabalık değil: eski öğrenciler, birkaç meslektaş, komşular, Defne. Spinoza'yı getirmemişler; ama Defne'nin çantasında bir tutam tekir tüy var, sonra sana gösterecek.",
"Mezar taşına ne yazılacağını Nevin Hoca kendisi seçmiş. Defne söylüyor: tek bir cümle, kendi kitabından değil, Montaigne'den. “Felsefe yapmak, ölmeyi öğrenmektir.”"
], secenekler: [
{ t: "Mezarın başında bir şey söylersin.", to: "t1b", etki: { merhamet: 1, konustu: true } },
{ t: "Kalabalığın arkasında durursun. Seni tanıyan yok.", to: "t1b", etki: { ozerklik: 1 } },
{ t: "Defne'nin yanında durursun.", to: "t1b", etki: { merhamet: 1 } },
{ t: "Cenazeye gitmezsin.", to: "t1b", etki: { yasa: 1, gitmedi: true } }
]},

t1b: { saat: "Bir ay sonra", baslik: "Kitaplar", metin: [
P(S("t1A"), "Ne söyleyeceğini bilmiyordun. Ağzından çıkan şu oldu: “Hocam bana bir B artı vermişti. Hâlâ itiraz ediyorum.” Kalabalıktan birkaç kişi güldü; eski öğrenciler. Onlar da biliyordu."),
P(S("t1D"), "Cenazeye gitmedin. Neden, kendine bile açıklayamadın. Defne bir mesaj attı: “Sizi aradım. Yoktunuz. Anlıyorum.” Anlıyor muydu?"),
"Bir ay sonra Defne seni arıyor. Daireyi boşaltıyor; ev sahibi yeni kiracı bulmuş. Kitapların çoğu bir üniversite kütüphanesine gidecek. Ama bazılarını sana ayırmış.",
"Cihangir'deki salon yarı boş. Raflarda boşluklar. Yatak sökülmüş; yerinde halıda dört iz kalmış. Pencere açık, deniz kokusu.",
"Defne sana bir koli veriyor. İçinde on iki kitap. En üstte, Nevin Hoca'nın kendi kitabı: “Acı ve Anlam.” Kırk yıl önceki ilk baskı.",
"İlk sayfayı açıyorsun. El yazısıyla bir ithaf. Eski, mürekkep solmuş; ama bir kelime yeni, bir başkasının eliyle yazılmış, belli ki Defne'ye yazdırılmış:",
"“Ömer'e. Arka sıradaki öğrenciye. Bu kitabın her şeyi yanlış. Ama bir şey doğru: insan, ancak kendi ölümünü düşünürken başkalarına bakmayı öğrenir.”",
"Spinoza kolinin yanına gelip koklıyor. Defne onu alıp kucağına koyuyor. “Benimle kalacak,” diyor. “Teyzemin vasiyeti. Ona iyi bakacağım. Bu sefer kimse beni yorgun bulmayacak.”"
], secenekler: [
{ t: "Kitabı göğsüne bastırırsın.", to: "t2", etki: { merhamet: 1 } },
{ t: "Defne'ye nasıl olduğunu sorarsın. Gerçekten.", to: "t2", etki: { merhamet: 1, defne_sordu: true } },
{ t: "Kitabın kenarlarındaki notları okumaya başlarsın.", to: "t2", etki: { ozerklik: 1, notlari_okudu: true } },
{ t: "Koliyi kapatıp gidersin. Okumaya hazır değilsin.", to: "t2", etki: { yasa: 1 } }
]},

t2: { saat: "Eylül", baslik: "Davet", metin: [
P(S("t1bB"), "Defne bir süre düşündü. “Rahatladım,” dedi. “Ve bundan utanıyorum. Ve utandığım için de rahatlıyorum, çünkü demek ki onu hâlâ seviyorum.” Gülümsedi; iki yıldır ilk gülümsemesi belki."),
P(S("t1bC"), "Kenarlarda kırk yıllık notlar: genç Nevin'in el yazısı, “burayı genişlet,” “bu argüman zayıf,” “Simone'a sor.” Bir sayfada, kırmızı kalemle, bir cümlenin altı çizilmiş: “Ölüm, hayatın sınavı değil, son dersidir.” Yanında, çok daha yeni bir el yazısıyla, Defne'nin: “Teyzem bunu sildirmek istedi. Bıraktım.”"),
"Eylülde bir zarf geliyor. Tıp fakültesinden. Dekanlık.",
"“Sayın Dr. Ömer Kılıç. Fakültemizin Tıp Etiği seçmeli dersi, Prof. Dr. Nevin Arıkan'ın anısına, bu dönem yeniden açılacaktır. Dersi vermeniz konusunda önerinizi bekliyoruz. Prof. Arıkan'ın yeğeni Defne Hanım sizi önermiştir.”",
P(function(d){ return d.itiraf; }, "Mektubun altında, dekanın el yazısıyla bir not: “Hakkınızdaki soruşturmanın sürdüğünü biliyorum. Bu teklif ondan bağımsızdır. Ya da değildir; siz karar verin.”"),
"Bir amfi. Arka sıralar. Bir ödev. Otuz yıl önce senin oturduğun yerde, şimdi başkaları oturacak. Ve onlara, senin bir zamanlar karşı yazdığın konuyu anlatman gerekecek."
], secenekler: [
{ t: "Kabul edersin. İlk dersi hazırlamaya başlarsın.", to: "y_kursu", etki: { ozerklik: 1, kursu: true } },
{ t: "Reddedersin. Bu ders senin değil.", to: "t3", etki: { yasa: 1, ret_kursu: true } },
{ t: "Kabul edersin; ama ilk ders olarak Nevin Hoca'nın son yazdıklarını okuyacağını söylersin.", to: "y_not", etki: { ozerklik: 1, kursu: true, not_oku: true } },
{ t: "Bir yıl erteleme istersin.", to: "t3", etki: { erteledi: true } }
]},

y_kursu: { saat: "Ekim", baslik: "Amfi", metin: [
"Ekim. Tıp fakültesinin eski amfisi. Ahşap sıralar, yüksek pencereler, tahtanın üstünde silinmemiş bir anatomi çizimi. Otuz yıl önceki amfi. Hiçbir şey değişmemiş; yalnızca sen arka sıradan kürsüye geçmişsin.",
"Kırk iki öğrenci. Çoğu ikinci sınıf. Telefonları masalarında, yarısı ilgisiz. Arka sırada birkaç kişi fısıldaşıyor.",
"Kürsüye çıkıyorsun. Bir süre bir şey söylemiyorsun. Sessizlik amfiyi dolduruyor; telefonlar bir bir kapanıyor.",
"“Bu dersi otuz yıl önce bir hocadan aldım,” diyorsun. “Arka sırada otururdum. Final ödevim ötanazi üzerineydi. Karşı yazdım. B artı aldım.”",
"Birkaç öğrenci gülüyor.",
"“Bu yıl o hoca öldü. ALS. Son yılında gözleriyle konuşuyordu.”",
"Gülüşler kesiliyor.",
"“Bu derste size doğru cevapları öğretmeyeceğim. Çünkü bilmiyorum. Size yalnızca bir şey öğreteceğim: her argümanın içine bir beden koyun. Bir hasta, bir yatak, bir göz klavyesi. Bedeni olmayan bir argüman, ne kadar iyi olursa olsun, yarımdır.”",
"Arka sıradan bir el kalkıyor. Genç bir kadın. “Hocam, siz ne yaptınız? O hocanıza?”"
], secenekler: [
{ t: "Gerçeği anlatırsın. Ne yaptıysan.", to: "t3", etki: { yasa: 1, ozerklik: 1, anlatti_ders: true } },
{ t: "“Bunu dönem sonunda konuşalım,” dersin. Önce onların düşünmesini istiyorsun.", to: "t3", etki: { ozerklik: 1 } },
{ t: "“Sizce ne yapmalıydım?” diye sorarsın. Ve dönemin final ödevini bu soru yaparsın.", to: "t3", etki: { ozerklik: 2, final: true } },
{ t: "“Yanında kaldım,” dersin. Başka bir şey söylemeden.", to: "t3", etki: { merhamet: 1 } }
]},

y_not: { saat: "Ekim", baslik: "Son Notlar", metin: [
"İlk derste amfiye bir tablet getiriyorsun. Nevin Hoca'nın tableti. Defne sana verdi; içinde iki yılın yazışmaları, notları, yarım kalmış cümleleri var.",
"Kırk iki öğrenci. Tableti projeksiyona bağlıyorsun. Ekranda bir dosya listesi: “Ömer'e.” “Son.” “Defne.” “Bir Bedenden Yazılan Düzeltmeler.” “Spinoza.”",
"Birini açıyorsun; en kısasını. Mekanik ses amfide yankılanıyor:",
"“Bugün bir öğrencim gelecek. Otuz yıl önceki. Bana bir şey sormayacak; ben ona soracağım. Cevabını bilmiyorum. Bir felsefecinin en dürüst anı: soruyu sorduğu ama cevabı bilmediği an.”",
"Amfide çıt yok.",
"Bir başkasını açıyorsun. Mekanik ses:",
"“Acının anlamı yok. Bunu kırk yıl önce yanlış yazdım. Ama acının içinden bir şey geçebilir: başka birinin eli, bir kedinin mırıltısı, bir öğrencinin sabrı. Anlam acıda değil. Acının içinden geçen şeyde.”",
"Bir öğrenci ağlıyor. Saklamaya çalışmıyor.",
"Tableti kapatıyorsun. Ne söyleyeceğini bilmiyorsun. Kırk iki genç yüz sana bakıyor."
], secenekler: [
{ t: "“Bu dönem bu notları birlikte okuyacağız,” dersin.", to: "t3", etki: { ozerklik: 1, notlar_ders: true } },
{ t: "“Bugünlük bu kadar,” dersin. Dersi erken bitirirsin.", to: "t3", etki: { merhamet: 1 } },
{ t: "Öğrencilere bir soru yazarsın tahtaya: “Bir hekim, bir hastanın ölme isteğine ne borçludur?”", to: "t3", etki: { ozerklik: 1, final: true } },
{ t: "Ağlayan öğrencinin yanına gidersin.", to: "t3", etki: { merhamet: 1 } }
]},

t3: { saat: "Aralık", baslik: "Son Dosya", metin: [
P(S("y_kursuA"), "Anlattın. Kırk iki öğrenci, çıt çıkarmadan dinledi. Bitince kimse soru sormadı. Ertesi hafta amfi doluydu; başka sınıflardan gelenler de vardı."),
P(S("y_kursuC"), "Dönem sonunda kırk iki ödev geldi. Yirmi ikisi “yapmalıydınız,” on dokuzu “yapmamalıydınız” diyordu. Biri boş bir sayfa teslim etmişti, ortasında tek bir cümle: “Bunu ben bilemem; bilmeyi de istemiyorum. Ama yanında olurdum.” O öğrenciye A verdin."),
P(function(d){ return d.ret_kursu; }, "Dersi vermedin. Bir başka hoca verdi; iyi bir hoca, kitaplardan. Dönem sonu bir öğrenci sana e-posta yazdı: “Hocam, Nevin Arıkan'ın öğrencisiymişsiniz. Neden siz vermediniz?” Cevap vermedin."),
P(function(d){ return d.erteledi; }, "Bir yıl erteledin. Dekanlık kabul etti. Bir yıl, bir dersi hazırlamak için uzun bir süre. Ya da bir şeyden kaçmak için."),
"Aralık. Defne'den bir e-posta. Ekinde bir dosya. Nevin Hoca'nın bilgisayarında bulunmuş, tabletten ayrı; ölümünden birkaç ay önce yazılmış, belli ki çok uzun zamanda. Adı: “Son Ders.”",
P(function(d){ return d.kol === "bakim"; }, "“Ömer, bana hayır dedin. Bunu senin yerinde ben de yapardım; belki. Ama bir şeyi bil: hayır demen, bana bir şey öğretti. Bir insanın, isteğine karşı bir hayır duyduğunda bile yalnız olmayabileceğini. Sen hayır dedin ve kaldın. Çoğu insan evet der ve gider.”"),
P(function(d){ return d.kol === "birak"; }, "“Ömer, sınırın tam üstünde durdun benimle. Yasa bunu bir tedavinin bırakılması sayacak. Ben bunu bir elin bırakılması sayıyorum: senin elinin. Tutmaya devam etmek kolaydı. Bırakmak, tutmaktan daha cesur bir iş.”"),
P(function(d){ return d.kol === "zurih"; }, "“Ömer, beni bir uçağa bindirdin. Kendi ülkemden çıkıp ölmek. Bunu bir sürgün gibi yaşayacağımı sanıyordum. Değil. Ben gidiyorum çünkü burada ölmeme izin vermiyorlar; ama burada yaşamama izin verdiler, uzun ve güzel bir hayat. Bu ülkeye kızgın değilim. Yalnızca bir kapı burada kapalı.”"),
P(function(d){ return d.kol === "gizli"; }, "“Ömer, bana bir düğme verdin. Bunun ne kadar ağır olduğunu biliyorum; senin için. Belki hiç basmayacağım. Ama basarsam, bil ki son eylemim benim olacak. Ve bil ki bunu sana borçluyum. Bir insana kendi ölümünü vermek, ona kendi hayatını geri vermektir; bunu ancak şimdi anlıyorum.”"),
"Dosyanın sonunda bir satır daha var: “Ödevini yeniden yaz. Bu sefer bir bedenle. Notunu ben veremeyeceğim. Kendine ver.”"
], secenekler: [
{ t: "Ödevi yeniden yazmaya başlarsın. Bu gece.", to: "t4", etki: { ozerklik: 1, odev_yazdi: true } },
{ t: "Dosyayı Defne'ye geri gönderirsin: “Bu sizin.”", to: "t4", etki: { merhamet: 1 } },
{ t: "Dosyayı yazdırıp Nevin Hoca'nın kitabının arasına koyarsın.", to: "t4", etki: { merhamet: 1, kitaba: true } },
{ t: "Dosyayı okursun ve bir daha açmazsın.", to: "t4", etki: { yasa: 1 } }
]},

t4: { saat: "Nisan", baslik: "Aşiyan", metin: [
"Bir yıl sonra, nisanda, Aşiyan'dasın. Yamaç erguvanlarla pembe. Aşağıda Boğaz; bir şilep yavaşça geçiyor.",
"Mezar taşı: “Prof. Dr. Nevin Arıkan. 1953–2025. Felsefe yapmak, ölmeyi öğrenmektir.”",
"Taşın üstünde biri bir şey bırakmış: küçük, tekir bir kedi heykelciği. Defne olmalı.",
P(function(d){ return d.itiraf; }, "Soruşturma devam ediyor. Bir yıl oldu. Meslekten men edilmedin ama hastanede kimse seni eskisi gibi selamlamıyor. Bazıları hiç selamlamıyor. Bazıları ise, koridorda, kimse görmeden, elini sıkıyor."),
P(function(d){ return d.ortbas; }, "Pompanın yerini kimse bilmiyor. Ölüm belgesinde hiçbir yanlış yok; yalnızca bir eksik. Bir yıl boyunca her gece, uykuya dalmadan önce, o eksikliğin şeklini düşündün."),
P(function(d){ return d.kursu; }, "Dersin ikinci dönemi başladı. Amfi dolu. Arka sırada bir öğrenci her hafta gözlerini sana dikip dinliyor ve hiç soru sormuyor. Otuz yıl önceki sen gibi."),
"Taşın önüne çömeliyorsun. Bir şey bırakmak istiyorsun. Elinde bir şey var mı?",
"Otuz yıl önce bir amfide bir hoca sana bir ders vermişti. Bu yıl bir hasta sana bir ders verdi. İkisi aynı kişiydi. Hangisinin dersini daha iyi öğrendiğini, bilmiyorsun."
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
son_bakim: { son: true, baslik: "Bakım", metin: [
"Hayır dedin ve kaldın. Nevin Hoca, korktuğu kutunun içinde iki hafta yaşadı. Gözleri gittikten sonra, son iki haftasında, gerçekten orada olup olmadığını kimse bilmedi. Sen bildiğini sandın. Her sabah ona bir şey okudun; bir şiir, bir öykü, onun kendi kitabından bir paragraf. Cevap vermedi. Belki duydu.",
"Bir yasanın sınırının içinde kaldın. Mesleğin, adın, vicdanın; hepsi yerinde. Ve bir insanın açıkça istediği bir şeyi ona vermedin.",
"Bunun doğru olup olmadığını hiç bilmeyeceksin. Palyatif bakımın vaat ettiği şey buydu: hiç kimse acı içinde ölmesin. Nevin Hoca acı içinde ölmedi. Ama korktuğu şeyin içinde, bir kutunun içinde, iki hafta yaşadı.",
"Bazı geceler onu düşünüyorsun. O iki haftayı. Orada mıydı? Seni duyuyor muydu? Okuduğun şiirleri anlıyor muydu? Ve eğer anlıyorsa, eğer oradaysa, bir şey söylemek istiyor muydu?",
"“Sen hayır dedin ve kaldın,” yazmıştı. “Çoğu insan evet der ve gider.”",
"Belki kalmak, bir hayırın içindeki en büyük evettir. Belki de yalnızca bir hekimin, kendini affettirme biçimidir. Bilmiyorsun. Ama kaldın. Bu, en azından, doğru."
]},

son_birakmak: { son: true, baslik: "Bırakmak", metin: [
"Yasanın izin verdiği yerin tam sınırında durdun. Bir tedaviyi bıraktın; bir eli bıraktın. Nevin Hoca otuz saat sonra, erguvanların altında, kendi salonunda öldü.",
"Hiçbir soruşturma açılmadı. Belge, tanıklar, psikiyatri raporu; her şey yerindeydi. Suat Hoca bir gün koridorda yanına geldi: “Doğru yaptın,” dedi. “Yasaya uygun.” Sonra durdu. “Ama yasa bir şeyi uygun bulunca, onun hafif olduğu anlamına gelmez.”",
"Bir öldürme ile bir bırakma arasında bir fark var. Felsefecilerin yüzyıllardır tartıştığı bir fark. Biri bir şey yapar; öbürü bir şey yapmayı bırakır. Biri neden olur; öbürü izin verir.",
"Ama o otuz saat boyunca, odada, o farkı hissetmedin. Bir kadın ölüyordu; senin bir kararın sonucunda. Maskenin çıkarılması bir eylemdi. Serumun açılması bir eylemdi. Ve sonra oturup beklemek de bir eylemdi.",
"Belki fark hissedilmek için değil, yaşanabilmek için var. Bir hekimin, bir hastanın ölümüne eşlik ederken, kendini katil gibi değil, bir yol arkadaşı gibi görebilmesi için.",
"Her nisan Kandilli'nin yamaçlarına bakıyorsun. Erguvanlar her yıl aynı. Sen her yıl biraz farklı."
]},

son_zurih: { son: true, baslik: "Zürih", metin: [
"Nevin Hoca kendi gözleriyle, kendi kararıyla, yabancı bir şehirde öldü. Son eylemi kendisinindi. Bunu İsviçre yasası güvence altına aldı; Türkiye yasası ise bunu yalnızca “yurt dışında gerçekleşen bir ölüm” olarak kaydetti.",
"Senin raporun bir dosyada. Kimse sormadı. Belki bir gün biri sorar.",
P(function(d){ return d.cevirdi; }, "Son anda başını çevirdin. Bunu Defne gördü; bir şey söylemedi. Ama sen biliyorsun: o sınavı izlemeyi bitiremedin. Bir hoca sana son dersini veriyordu ve sen gözlerini kaçırdın. Belki insan olmak bunu da gerektirir."),
P(function(d){ return d.el_tuttu || d.izledi; }, "Sonuna kadar oradaydın. Gözleri kapandı; eli elindeydi ya da gözlerin onun gözlerindeydi. Bir saniye, iki, üç. Sonra uyku. Sonra bir başka şey. Mavi evin penceresinden göl görünüyordu; bir kuğu geçti."),
"Bir insanın ölmek için ülkesini terk etmek zorunda kalması. Bunun bir onur mu, bir sürgün mü olduğunu Nevin Hoca'nın kendisi de tam bilmiyordu. “Bu ülkeye kızgın değilim,” yazmıştı. “Yalnızca bir kapı burada kapalı.”",
"Sen o kapının önünde bir hekimsin. Her gün başka hastalar, başka aileler, başka istekler. Bazıları aynı şeyi soruyor. Ve sen her seferinde onlara İsviçre'yi anlatıp anlatmamak arasında kalıyorsun.",
"Uçağın penceresinden İstanbul'a son kez bakan bir kadının yüzü aklında. Döneceğini bilmeden bakmıştı. Bir şehre, bir hayata, bir veda olarak."
]},

son_suc: { son: true, baslik: "Suç", metin: [
P(function(d){ return d.itiraf; }, "Dava iki yıl sürdü. Savcı “intihara yardım” ile “kasten öldürme” arasında gidip geldi. Sonunda mahkeme intihara yardımdan bir ceza verdi; ertelendi. Meslekten men edilmedin; ama palyatif bakım servisinden alındın. Şimdi bir aile sağlığı merkezinde tansiyon ölçüyorsun."),
P(function(d){ return d.itiraf; }, "Bir yasayı çiğnedin ve bunu açıkça söyledin. Yasa seni cezalandırdı; hafifçe, ama cezalandırdı. Ve sen bu cezayı, garip bir şekilde, haklı buldun. Bir insanın yasaya karşı vicdanıyla hareket etmesi, yasanın ona karşı hareket etmesini de kabul etmesini gerektirir."),
P(function(d){ return d.ortbas; }, "Kimse bilmiyor. Defne biliyor; ve sen. Ölüm belgesinde bir eksik var ve o eksik senin geri kalan hayatın."),
P(function(d){ return d.ortbas; }, "Meslek hayatına devam ediyorsun. Başka hastalar, başka evler, başka istekler. Bazıları aynı şeyi soruyor. Ve sen her seferinde bir pompanın, bir menünün, beş saniyenin ağırlığını hissediyorsun. Bir daha yapmadın. Yapar mısın, bilmiyorsun."),
P(function(d){ return d.yarim; }, "Ölüm nedenine doğruyu yazdın; pompanın nasıl kurulduğunu yazmadın. Bir soruşturma açıldı, sonra kapandı: “Hastanın kendi kullandığı bir ağrı pompası.” Doğru. Ve eksik. Bir yarım gerçek, bir yarım suç."),
"Nevin Hoca'nın son yazdığı dosyada bir cümle var: “Bir insana kendi ölümünü vermek, ona kendi hayatını geri vermektir.”",
"Bunu bir felsefeci yazdı; ölmek üzere olan bir felsefeci. Yasa bunu kabul etmiyor. Sen ise, bazı geceler, yasanın mı yoksa o cümlenin mi daha doğru olduğunu bilmeden uyuyorsun.",
"Erguvanları beklemedi. Gözleri menüye ulaşamayacaktı. “Ya bugün ya hiç.” Bir insanın özgürlüğü bazen beş saniyeye sığar. Ve bazen o beş saniyeyi ona bir başkası vermek zorundadır."
]},

son_ders: { son: true, baslik: "Son Ders", metin: [
"Her ekim aynı amfide, aynı kürsüde duruyorsun. Kırk, elli, altmış öğrenci. Ders artık seçmeli değil; zorunlu. Fakülte kurulu karar verdi; bir öğrenci dilekçesiyle.",
"İlk derste her yıl aynı şeyi yapıyorsun: bir tablet getiriyorsun. Nevin Hoca'nın tableti. Bir dosya açıyorsun. Mekanik bir ses amfide yankılanıyor. Ve öğrenciler, her yıl, aynı yerde susuyor.",
"Doğru cevapları öğretmiyorsun. Bilmiyorsun. Ama bir şey öğretiyorsun: her argümanın içine bir beden koymayı. Bir hasta, bir yatak, bir göz klavyesi. Bir kedi.",
P(function(d){ return d.kol === "bakim"; }, "Hayır dediğini anlatıyorsun. Ve kaldığını. Öğrencilerin bazıları bunu cesaret buluyor; bazıları korkaklık. İkisini de not etmiyorsun."),
"Final ödevi her yıl aynı soru: “Bir hekim, bir hastanın ölme isteğine ne borçludur?” Her yıl yüzlerce cevap. Hiçbiri aynı değil. Bazıları çok iyi. Hiçbirine B artıdan aşağı vermiyorsun; ama hiçbirine de A vermiyorsun.",
"Neden, diye soruyor bir öğrenci bir gün.",
"“Çünkü,” diyorsun, “bu sorunun tam notunu ancak bir hasta verebilir. Ve o hasta, notu verdiği gün, artık burada olmaz.”",
"Arka sırada bir el kalkıyor. Hep bir el kalkıyor. Ve sen, otuz yıl önce arka sırada oturan bir öğrencinin, bir gün kürsüde duracağını bilmediği gibi, o elin sahibinin de bir gün nereye varacağını bilmiyorsun."
]}

},

ayna: function(d){
  var out = [];
  var a = d.yasa, b = d.merhamet, c = d.ozerklik;
  if(a >= b && a >= c) out.push("Bu hikâyede en çok yasaya yaslandın: kurallara, sınırlara, bir hekimin yapamayacaklarına. Yasa seni korudu; ama bir insanın isteğinin karşısında da tuttu. Bir sınırın içinde kalmak güvenlidir. Güvenli olmak, doğru olmakla aynı şey değildir.");
  else if(b >= c) out.push("Bu hikâyede en çok merhamete yaslandın: bir elin tutulmasına, bir gecenin geçirilmesine, bir kedinin mırlamasına. Merhamet bir hekimin en eski aracıdır. Ama bazen merhamet, bir insanın istediğini değil, bizim dayanabileceğimizi seçer.");
  else out.push("Bu hikâyede en çok özerkliğe yaslandın: bir insanın kendi bedeni, kendi ölümü üzerindeki hakkına. Bir hocanın son dersini dinledin. Özerkliğe saygı bazen bir insanı istediği yere kadar götürmektir; ve o yerde onu bırakmaktır.");
  if(d.kol === "gizli") out.push("Bir yasayı gizlice çiğnedin. Bir kadına beş saniye verdin. O beş saniyenin ağırlığı, artık senin.");
  if(d.itiraf) out.push("Yaptığını açıkça söyledin. Vicdanınla hareket ettin ve yasanın sana karşı hareket etmesini kabul ettin.");
  if(d.cevirdi) out.push("Son anda başını çevirdin. İnsan olmak bazen bir şeyi sonuna kadar izleyememektir.");
  if(d.kursu) out.push("Bir dersi devraldın. Bir hocanın sorusunu, kendi öğrencilerine taşıdın.");
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
