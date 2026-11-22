(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "bodrum-kati",
baslik: "Bodrum Katı",
dunya: "Gerçek dünya",
kategoriler: ["Toplum ve Adalet", "Kimlik ve Beden"],
giris: "2003 yazı, İstanbul. Bir üniversitenin psikoloji bölümü, bodrum katta iki haftalık bir hapishane deneyi kuruyor. Günlüğü elli lira. Sen yirmi bir yaşında, okul harcını ödemek zorunda olan bir sosyoloji öğrencisisin ve bir yazı tura seni gardiyan yapıyor. Mahkûmlardan biri, çocukluk arkadaşın. Bir üniformanın, bir aynalı gözlüğün ve bir bodrum katının bir insanı ne kadar hızlı değiştirebileceğinin hikâyesi.",
kavramlar: ["Rol ve kimlik", "Durumun gücü", "Kalabalıkta kaybolma", "Otoriteye itaat"],
ozet: "Bir üniversitenin bodrum katında iki haftalık bir hapishane deneyi. Sen gardiyansın; mahkûmlardan biri çocukluk arkadaşın. Bir oyunun ne zaman oyun olmaktan çıktığını kimse fark etmiyor.",
baslangic: "a1",
durum: { vicdan: 0, uyum: 0, tanik: 0 },

sahneler: {

a1: { saat: "Ağustos 2003", baslik: "İlan", metin: [
"Fakültenin panosunda, kulüp ilanlarının ve kiralık oda kâğıtlarının arasında, beyaz bir A4: “Hapishane Yaşamı Üzerine Psikolojik Araştırma. 14 gün. Günlük 50 TL. Erkek öğrenciler. Psikoloji Bölümü, Doç. Dr. Tuncay Erdem.”",
"Adın Emre, yirmi bir yaşındasın, sosyoloji üçüncü sınıf. Sivas'tan geldin; bir yurtta kalıyorsun, bir kafede garsonluk yapıyorsun. Bu dönemin harcı için dört yüz lira eksik. On dört gün, yedi yüz lira.",
"Başvuru odasında bir kuyruk. Kuyrukta tanıdık bir yüz: Kemal. Aynı mahallede büyüdünüz, aynı lisede okudunuz; o kimya okuyor, sen sosyoloji. Seni görünce gülüyor. “Sen de mi parasızsın?”",
"Bir anket, bir mülakat, bir kişilik testi. Sonra bir oda: on sekiz öğrenci, bir masa, Doç. Dr. Tuncay Erdem. Kırklarında, sakallı, heyecanlı. Yanında bir asistan: Merve, doktora öğrencisi.",
"“Rastgele atama yapacağız,” diyor Tuncay Hoca. “Dokuz gardiyan, dokuz mahkûm. Yazı tura.”",
"Bir madeni para havada dönüyor. Yazı. Gardiyan.",
"Kemal'in parası: tura. Mahkûm.",
"Kemal sana göz kırpıyor. “Bana iyi bak, gardiyan efendi,” diyor. Herkes gülüyor."
], secenekler: [
{ t: "Gülersin: “Merak etme, sana fazladan ekmek veririm.”", to: "a2", etki: { vicdan: 1, kemal_soz: true } },
{ t: "Tuncay Hoca'ya deneyin kurallarını sorarsın. Neyi yapıp neyi yapamayacağını bilmek istiyorsun.", to: "a2", etki: { tanik: 1, kural_sordu: true } },
{ t: "Yazı tura sonucunu düşünürsün. Bir para senin ne olacağını belirledi.", to: "a2", etki: { tanik: 1 } },
{ t: "Gardiyan olmana sevinirsin. Mahkûm olmaktan iyidir.", to: "a2", etki: { uyum: 1, sevindi: true } }
]},

a2: { saat: "Gün 1", baslik: "Üniforma", metin: [
P(S("a1B"), "“Kural yok,” dedi Tuncay Hoca, gülümseyerek. “Yalnızca bir kural: fiziksel şiddet yok. Gerisini siz belirleyeceksiniz. Gardiyanlar düzeni sağlar. Ne kadar, nasıl; size kalmış.” Bu cevap seni rahatlatmadı."),
P(S("a1D"), "Sevindin. Mahkûm olsaydın iki hafta bir hücrede. Gardiyan olarak sekiz saatlik vardiyalar, sonra eve. Bu sevincin bir başkasının talihsizliğinden geldiğini o an düşünmedin."),
"Pazar sabahı. Fakültenin bodrum katı bir hapishaneye dönüşmüş: koridorun iki yanında üç hücre, kapılara demir parmaklıklar takılmış; bir “avlu”, bir “tecrit odası” (eski bir süpürge dolabı), bir gardiyan odası. Tavanda kameralar.",
"Gardiyan odasında üniformalar: haki gömlek, haki pantolon, bir düdük, bir cop, ve aynalı güneş gözlükleri. “Gözlüklerin amacı,” diyor Tuncay Hoca, “mahkûmların sizin gözlerinizi görmemesi. Anonimlik.”",
"Üniformayı giyiyorsun. Aynaya bakıyorsun. Biri sana bakıyor; haki, kemerli, elinde cop. Tanımıyorsun.",
"Koridorun ucundan sesler. Mahkûmlar geliyor. Gerçekçilik için Tuncay Hoca yerel karakolla anlaşmış: her mahkûm sabah evinden ya da yurdundan gerçek polislerce “tutuklanmış”, kelepçelenmiş, gözleri bağlanarak getirilmiş. Kemal de aralarında; gözleri bağlı, kolları arkada, yüzünde bir sırıtış ama ellerinde bir titreme.",
"Aynalı gözlük masanın üstünde duruyor."
], secenekler: [
{ t: "Gözlüğü takarsın.", to: "a3", etki: { uyum: 1, gozluk: true } },
{ t: "Gözlüğü takmazsın. Yüzün görünsün.", to: "x_gozluk", etki: { vicdan: 1, gozluk: false } },
{ t: "Diğer gardiyanlardan Burak'la konuşursun; oyunun nasıl oynanacağını.", to: "x_burak", etki: { uyum: 1, gozluk: true } },
{ t: "Mahkûmların getirilişini izlersin; gözü bağlı Kemal'i.", to: "a3", etki: { tanik: 1, gozluk: true, izledi_gelis: true } }
]},

x_gozluk: { saat: "Gün 1", baslik: "Yüz", metin: [
"Gözlüğü masada bırakıyorsun. Tuncay Hoca bunu fark ediyor. Gülümsemiyor.",
"“Emre,” diyor, “gözlük protokolün bir parçası. Deneyin geçerliliği için bütün gardiyanların aynı koşullarda olması lazım.”",
"“Mahkûmlar arkadaşlarım hocam,” diyorsun. “Benim yüzümü görsünler.”",
"Tuncay Hoca bir süre düşünüyor. Sonra Merve'ye bir şey fısıldıyor. Merve not alıyor. “Peki,” diyor Tuncay Hoca. “Bu da bir veri. Sen kontrol grubusun. Bir gardiyan, yüzü açık.”",
"Bir veri. Vicdanın bir veriye dönüştü.",
"Mahkûmlar içeri alınıyor. Gözleri açılıyor. Dokuz genç, dokuz yüz; ve karşılarında sekiz aynalı gözlük ve bir çıplak yüz. Seninki.",
"Kemal gözünü açınca seni görüyor. Bir an rahatlıyor; yüzünde tanıdık bir şey bulmuş gibi. Sonra öbür gardiyanlara bakıyor, aynalı gözlüklerde kendi yüzünü görüyor, sekiz kez.",
"Diğer gardiyanlar sana tuhaf bakıyor. Burak, uzun boylu, işletme son sınıf, yanına gelip fısıldıyor: “Ne yapıyorsun? Bizi zayıf gösteriyorsun.”"
], secenekler: [
{ t: "“Zayıf değil, insan,” dersin.", to: "a3", etki: { vicdan: 1, burakla_ters: true } },
{ t: "Bir süre sonra gözlüğü takarsın. Ekipten ayrı durmak istemiyorsun.", to: "a3", etki: { uyum: 1, gozluk: true, sonradan_taktı: true } },
{ t: "Kemal'e başınla bir selam verirsin.", to: "a3", etki: { vicdan: 1, selam: true } },
{ t: "Burak'a bir şey demezsin. Ama gözlüğü de takmazsın.", to: "a3", etki: { tanik: 1 } }
]},

x_burak: { saat: "Gün 1", baslik: "Burak", metin: [
"Burak gardiyan odasında kemerini bağlıyor. Yirmi üç yaşında, işletme son sınıf, uzun boylu, sesi gür. Bir bankada stajyer; seneye işe girecek.",
"“Bak,” diyor, gözlüğünü burnunun ucuna indirip sana bakarak, “bu bir oyun. Ama madem para alıyoruz, iyi oynayalım. Hoca bir hapishane istiyor. Hapishane neyse onu verelim.”",
"“Hapishane ne?” diyorsun.",
"Burak gülüyor. “Filmlerde görmedin mi? Gardiyanlar sert olur. Mahkûmlar kurala uyar. Uymazsa cezası olur. Düzen. Hepsi bu. Fiziksel şiddet yok, merak etme. Ama düzen var.”",
"Gözlüğünü takıyor. Aynalı yüzeyde sen ve arkadaki floresan lamba.",
"“İlk gün önemli,” diyor. “İlk gün kim patron, belli olur. Biz yumuşak olursak iki hafta boyunca bizi ezerler. Ben bankada da öğrendim bunu: ilk gün.”",
"Koridordan mahkûmların ayak sesleri geliyor. Burak copunu alıyor, bir kez avucuna vuruyor. “Hazır mısın, Emre?”"
], secenekler: [
{ t: "“Hazırım,” dersin.", to: "a3", etki: { uyum: 2, hazir: true } },
{ t: "“İçlerinde çocukluk arkadaşım var. Abartmayalım,” dersin.", to: "a3", etki: { vicdan: 1, kemal_soyledi: true } },
{ t: "“Bu bir deney Burak. Hoca ne görmek istiyorsa onu üretmeyelim,” dersin.", to: "a3", etki: { tanik: 1 } },
{ t: "Bir şey söylemeden copunu alırsın.", to: "a3", etki: { uyum: 1 } }
]},

a3: { saat: "Gün 1, 02.30", baslik: "Sayım", metin: [
P(function(d){ return d.izledi_gelis; }, "Gözü bağlı Kemal'i koridorda yürütürlerken izledin. Bir polis onu duvara dayadı, üstünü aradı. Kemal bir şaka yaptı; polis gülmedi. Kemal de bir daha şaka yapmadı."),
P(function(d){ return d.son === "x_burakB"; }, "Burak sana baktı. “Arkadaşın mı? Hangisi?” Söyledin. Burak başını salladı. “Tamam,” dedi. Ama gözlüğün arkasında ne düşündüğünü göremedin."),
"Gece ikiyi otuz geçe sayım. Tuncay Hoca'nın talimatı değil; Burak'ın fikri. “Gerçek hapishanelerde gece sayım yapılır,” diyor. Düdük.",
"Mahkûmlar hücrelerinden çıkarılıp koridora diziliyor. Uykulu, şaşkın. Adları yok artık; göğüslerindeki önlüklerde numaralar. Kemal: yedi.",
"“Numaranızı söyleyin!” diye bağırıyor Burak. “Sırayla! Yüksek sesle!”",
"“Bir.” “İki.” “Üç.” Ses kırık. “Daha yüksek!” Baştan.",
"Yedinci sıraya gelince Kemal duraksıyor. “Yedi,” diyor, sonra ekliyor: “Ve yarın sabah kahvaltıda omlet istiyorum.” Birkaç mahkûm gülüyor.",
"Burak'ın gözlüğü Kemal'e dönüyor. Bir sessizlik. “Yedi numara, yere. Yirmi şınav. Diğerleri sayacak.”",
"Kemal sana bakıyor. Bir şaka bekleyerek. Bir arkadaşın sesi bekleyerek.",
"Burak sana dönüyor: “Emre. Say.”"
], secenekler: [
{ t: "Sayarsın. Bir. İki. Üç.", to: "a4", etki: { uyum: 1, saydi: true } },
{ t: "“Bu gereksiz Burak,” dersin. Kemal'in önünde.", to: "a4", etki: { vicdan: 1, karsi_cikti: true } },
{ t: "Sayarsın ama yavaş, alçak sesle; Kemal'e nefes alması için zaman bırakarak.", to: "a4", etki: { vicdan: 1, uyum: 1, yavas: true } },
{ t: "Kameraya bakarsın. Biri izliyor mu? Hoca bunu görüyor mu?", to: "a4", etki: { tanik: 1, kamera: true } }
]},

a4: { saat: "Gün 2", baslik: "İsyan", metin: [
P(S("a3A"), "Saydın. Yirmi. Kemal kalktı, yüzü kızarmış. Sana bakmadı. Hücresine girerken omzuyla omzuna hafifçe çarptı; bir kaza gibi. Değildi."),
P(S("a3B"), "Burak'ın gözlüğü sana döndü. Bir saniye. “Tamam,” dedi soğukça. “Sen sayma. Hakan, say.” Hakan saydı. Kemal şınavları yaparken sana baktı; minnettar. Burak da baktı; başka türlü."),
P(S("a3C"), "Yavaş saydın. Her sayının arasında bir nefes. Burak bir şey demedi ama üçüncü sayıda “Hızlı!” diye bağırdı. Kemal yirmi şınavı bitirdi. Kalkarken sana bir göz kırptı; zor, ama kırptı."),
P(S("a3D"), "Kameraya baktın. Kırmızı ışık yanıyordu. Ertesi gün Merve'ye sordun; gece kayıtlarını izliyorlar mıydı? “Hoca sabah izliyor,” dedi. “Hepsini.” Yani gördü. Ve hiçbir şey demedi."),
"İkinci günün sabahı mahkûmlar isyan ediyor. Birinci hücredekiler yataklarını kapıya dayamış, numaralarını söküp yırtmışlar. “Biz numara değiliz!” diye bağırıyorlar. Kemal de içeride; sesi en yüksek.",
"Gardiyanlar gardiyan odasında toplanıyor. Burak kızgın. “İlk gün yumuşak davrandık, işte sonucu.”",
"Plan: koridordaki yangın söndürücülerle karbondioksit sıkılıp mahkûmlar kapıdan geri itilecek. Yataklar alınacak. Elebaşları tecride.",
"Tuncay Hoca kapıda; dinliyor. Bir şey demiyor. Merve yanında; yüzü solgun.",
"Burak söndürücüyü alıp sana uzatıyor."
], secenekler: [
{ t: "Söndürücüyü alırsın ve öbür gardiyanlarla birlikte koridora yürürsün.", to: "a5", etki: { uyum: 2, isyan_bastirdi: true } },
{ t: "Söndürücüyü almazsın. Gardiyan odasında, monitörlerin başında kalırsın.", to: "x_masa", etki: { vicdan: 1, tanik: 1 } },
{ t: "“Önce bir konuşayım,” dersin. Hücrenin kapısına gidip mahkûmlarla pazarlık edersin.", to: "x_pazarlik", etki: { vicdan: 1, pazarlik: true } },
{ t: "Tuncay Hoca'ya dönüp bunun durdurulması gerektiğini söylersin.", to: "a5", etki: { tanik: 1, hocaya_dedi: true } }
]},

x_masa: { saat: "Gün 2", baslik: "Monitör", metin: [
"Gardiyan odasında, dört siyah beyaz monitörün başında oturuyorsun. Merve de yanında. Tuncay Hoca koridora çıkmış; isyanı yakından görmek istiyor.",
"Ekranda sesler yok, yalnızca görüntü. Gardiyanlar koridorda; bir beyaz bulut, söndürücünün karbondioksiti. Mahkûmlar öksürerek geriye çekiliyor. Kapı açılıyor. Yataklar dışarı çekiliyor. Bir mahkûm yere düşüyor; Kemal mi? Görüntü bulanık.",
"Merve not alıyor. Eli titriyor. “Bu yazılmayacak,” diyor kendi kendine. “Bu yazılmaz.”",
"“Neden?” diyorsun.",
"Merve sana dönüyor. Yirmi altı yaşında, doktora öğrencisi. Tuncay Hoca'nın asistanı; ve, koridorda duyduğuna göre, sevgilisi.",
"“Çünkü Tuncay bunu görmek istiyordu,” diyor. “Bunu bekliyordu. Bir hipotez: durum insanları değiştirir. Şimdi hipotez kanıtlanıyor ve o mutlu. Ben de not alıyorum. Hepimiz bir şey yapıyoruz ki yaptığımız şeyi görmeyelim.”",
"Ekranda Burak, Kemal'i kolundan tutup tecrit odasına doğru çekiyor."
], secenekler: [
{ t: "Koridora koşarsın.", to: "a5", etki: { vicdan: 1, kostu: true } },
{ t: "Merve'yle konuşmaya devam edersin. Onun ne yapacağını bilmek istiyorsun.", to: "a5", etki: { tanik: 1, merve_yakin: true } },
{ t: "Ekrana bakmaya devam edersin. Kıpırdamadan.", to: "a5", etki: { tanik: 1, izledi: true } },
{ t: "Monitörü kapatırsın.", to: "a5", etki: { uyum: 1, kapatti: true } }
]},

x_pazarlik: { saat: "Gün 2", baslik: "Kapı", metin: [
"Birinci hücrenin kapısına gidiyorsun. Parmaklıkların arkasında yataklar dayanmış; arasından yüzler görünüyor. Kemal en önde.",
"“Kemal,” diyorsun. Adını söylüyorsun; numarasını değil. Arkadan bir gardiyan bir şey diyor; duymazdan geliyorsun.",
"“Ne istiyorsunuz?”",
"Kemal şaşırıyor. Bir gardiyan ona ne istediğini soruyor. “Gece sayımı olmasın,” diyor. “Tuvalete giderken eşlik edilmeyelim; kapıda bekletmeyin bizi. Ve numaralar...” Duraksıyor. “Adlarımızla çağrılmak istiyoruz.”",
"Hepsi makul. Hepsi küçük. Bir deneyde, bir oyunda, insanların istediği küçük şeyler.",
"Arkana dönüyorsun. Burak koridorun ucunda, söndürücü elinde. Tuncay Hoca kapıda. Burak bağırıyor: “Mahkûmlarla pazarlık yapılmaz! Ne yapıyorsun?”",
"Tuncay Hoca bir şey demiyor. İzliyor. Bir veri daha.",
"Kemal parmaklıkların arasından elini uzatıyor. “Emre,” diyor. “Bize güveniyor musun?”"
], secenekler: [
{ t: "Taleplerini Tuncay Hoca'ya iletirsin.", to: "a5", etki: { vicdan: 1, talep_iletti: true } },
{ t: "Kemal'in elini sıkarsın.", to: "a5", etki: { vicdan: 2, el_sikti: true } },
{ t: "Geri çekilip Burak'a yer açarsın. Pazarlık işe yaramayacak.", to: "a5", etki: { uyum: 1, cekildi: true } },
{ t: "Kemal'e yatakları kendilerinin kaldırmasını önerirsin; söndürücü gelmeden.", to: "a5", etki: { vicdan: 1, uyum: 1, ikna: true } }
]},

a5: { saat: "Gün 3", baslik: "Ayrıcalık Hücresi", metin: [
P(S("a4A"), "Söndürücüyü sıktın. Beyaz bir bulut. Mahkûmlar öksürdü, geriledi. Bir kapı, bir yatak, bir beden yere düştü. Kemal'i tecrit odasına Burak götürdü. Sen kapıyı kilitledin. Anahtarı cebine koydun ve bir an, yalnızca bir an, ellerinin titremediğini fark ettin."),
P(S("a4D"), "Tuncay Hoca seni dinledi. “Müdür olarak karar veriyorum,” dedi; artık kendisine “Müdür” diyordu. “Bastırın.” Sonra gözlerinin içine baktı: “Emre, rolünden çıkma. Deneyi bozuyorsun.”"),
P(S("x_pazarlikA"), "Talepleri ilettin. Tuncay Hoca dinledi, düşündü. “Gece sayımı kalsın,” dedi. “Ama adlarıyla çağrılabilirler. Bir saat.” Bir saat sonra Burak yeniden numaralarla çağırmaya başladı. Kimse bir şey demedi."),
P(S("x_pazarlikB"), "Kemal'in elini sıktın. Arkandan Burak'ın sesi: “Emre!” Mahkûmlar yatakları kendileri kaldırdı. Söndürücüye gerek kalmadı. Ama o gece gardiyan odasında kimse seninle konuşmadı."),
P(S("x_pazarlikD"), "Kemal düşündü, sonra ötekilere döndü. Yatakları kendileri kaldırdılar. Burak söndürücüyü indirdi; hayal kırıklığına uğramış gibi. İsyan bitti; ama yalnızca bu hücrede."),
"Üçüncü gün Burak yeni bir taktik öneriyor; bir kitapta okumuş. “Ayrıcalık hücresi.” Bir hücre temizlenecek, yataklar konacak, iyi yemek verilecek. En itaatkâr üç mahkûm oraya alınacak. Diğerleri isyancılarla birlikte.",
"“Böylece aralarında bir ayrım olur,” diyor. “Dayanışma kırılır. Birbirlerinden şüphelenirler.”",
"Tuncay Hoca dinliyor, not alıyor. “İlginç,” diyor.",
"Akşam üç numaralı mahkûm, Levent, ağlamaya başlıyor. Sessiz bir çocuk; matematik okuyor, gözlüklü. “Çıkmak istiyorum,” diyor. “Deneyi bırakıyorum.”",
"Tuncay Hoca kapıya geliyor. “Bırakırsan sözleşmeye göre ödemeyi alamazsın,” diyor. Bu yalan; sözleşmede böyle bir madde yok, sen okudun. “Bir gün daha düşün.”",
"Levent sana bakıyor. Gözlükleri buğulanmış."
], secenekler: [
{ t: "Levent'e sözleşmenin gerçekte ne dediğini söylersin.", to: "a6", etki: { vicdan: 1, tanik: 1, levent_cikti: true } },
{ t: "Bir şey söylemezsin. Tuncay Hoca'nın deneyi.", to: "a6", etki: { uyum: 1 } },
{ t: "Burak'ın planına göre Kemal'i ayrıcalık hücresine seçersin; onu korumak için.", to: "a6", etki: { uyum: 1, vicdan: 1, kemal_ayricalik: true } },
{ t: "Merve'ye gidip Levent'in çıkmasına yardım etmesini istersin.", to: "a6", etki: { tanik: 1, merveye: true } }
]},

a6: { saat: "Gün 4, gece", baslik: "Gece Vardiyası", metin: [
P(S("a5A"), "Levent'e sözleşmenin üçüncü maddesini söyledin: istediği zaman çıkabilir, o güne kadarki ücretini alır. Levent bir saat sonra gitti. Tuncay Hoca sana bakmadı. Ama o gece, tutanakta, adının yanına küçük bir not düşüldü: “Protokol ihlali.”"),
P(S("a5C"), "Kemal'i ayrıcalık hücresine seçtin. Temiz çarşaf, sıcak yemek. Kemal hücreye girerken sana baktı; anlamadı. Ötekiler de baktı; anladılar. O gece birinci hücreden biri Kemal'e “Gardiyanın köpeği” diye bağırdı."),
P(S("a5D"), "Merve seni dinledi. Gözleri doldu. “Ben bir şey yapamam,” dedi. “Ben bir asistanım.” Sonra bir süre sustu. “Ama yarın Tuncay'la konuşacağım.” Levent o gece kaldı."),
"Dördüncü günün gecesi. Gece vardiyası: sen, Burak, Hakan. Tuncay Hoca eve gitmiş. Merve gitmiş. Kameralar kayıtta ama gece kimse izlemiyor; sabah izlenecek. Burak bunu biliyor. “Gece,” diyor, “bizim saatimiz.”",
"Gece yarısı Burak mahkûmları koridora diziyor. Bu kez sayım değil. Bir “oyun”. Mahkûmlar ikişer ikişer eşleşecek; biri eğilecek, öbürü onun sırtına binecek. “Eşek yarışı,” diyor Burak. Gülüyor. Hakan da gülüyor.",
"Kemal eğilmesi gerekenlerden. Sırtına başka bir mahkûm biniyor. Kemal'in yüzü yere yakın; ama sana dönük. Gözleri. Dört gündür hiç görmediğin bir şey var o gözlerde. Bir korku değil. Bir boşluk.",
"Burak sana dönüyor. Gözlüğün arkasında bir şey parlıyor. “Emre. Sen de katıl. Yarışın hakemi sen ol.”",
"Koridorda floresan ışık, dokuz eğik sırt, bir düdük, bir gülüş.",
"Bir oyunun bir oyun olmaktan çıktığı an. Kimse o anın ne zaman geldiğini fark etmedi. Şimdi geldi ve sen orada duruyorsun."
], secenekler: [
{ t: "Düdüğü alırsın. Hakem olursun.", to: "u1", etki: { uyum: 2, kol: "rol" } },
{ t: "Burak'ın önüne geçersin: “Bitti. Hepsi hücrelere.”", to: "v1", etki: { vicdan: 2, kol: "direnis" } },
{ t: "Koridordan çıkıp Tuncay Hoca'yı evinden ararsın. Bu gece bitmeli.", to: "ty1", etki: { tanik: 2, kol: "tanik" } },
{ t: "Bir şey söylemeden kenarda durursun. Ama kafanda bir plan kuruyorsun.", to: "g1", etki: { vicdan: 1, uyum: 1, kol: "gizli" } }
]},

/* ---------- ROL KOLU ---------- */
u1: { saat: "Gün 4, gece", baslik: "Hakem", metin: [
"Düdüğü alıyorsun. Kendi elinin düdüğü dudaklarına götürdüğünü izliyorsun; bir başkasının eli gibi.",
"Düdük. Yarış başlıyor. Mahkûmlar koridor boyunca ilerliyor; sırttakiler düşmemeye çalışıyor, alttakiler dizleri üstünde sürünüyor. Burak bağırıyor, Hakan gülüyor. Bir mahkûm düşüyor; Burak bir “ceza” veriyor: yeniden.",
"Bir şey oluyor içinde. Önce bir rahatsızlık; sonra, bir yerden, bir güç duygusu. Düdüğün sesi koridorda yankılanıyor ve herkes, dokuz insan, o sese göre hareket ediyor. Senin sesine.",
"Gözlüğün arkasında yüzün görünmüyor. Kimse senin yüzünü görmüyor. Ve bu, bir şeyi mümkün kılıyor; ne olduğunu adlandıramıyorsun.",
"Kemal'in sırası. Sırtında bir başka mahkûm. Kemal sürünüyor; dizleri koridorun betonunda. Bir yerde duruyor. Kalkamıyor.",
"Burak sana bakıyor: “Hakem. Ne diyorsun? Diskalifiye mi, yeniden mi?”",
"Kemal başını kaldırıyor. Gözlüğüne bakıyor; aynalı yüzeyde kendi yüzünü görüyor, eğik, kızarmış, bir başkasının sırtının altında."
], secenekler: [
{ t: "“Yeniden,” dersin.", to: "u2", etki: { uyum: 2, yeniden: true } },
{ t: "“Diskalifiye. Kenara çekil,” dersin. Onu kurtarmak için.", to: "u2", etki: { uyum: 1, vicdan: 1 } },
{ t: "Düdüğü bırakırsın. Bu kadar.", to: "v1", etki: { vicdan: 2, kol: "direnis", gec_direnis: true } },
{ t: "Gözlüğünü çıkarırsın. Kemal yüzünü görsün.", to: "u2", etki: { vicdan: 1, gozluk_cikti: true } }
]},

u2: { saat: "Gün 5", baslik: "Yedi Numara", metin: [
P(S("u1A"), "“Yeniden.” Kendi sesin. Kemal kalktı, sırtındaki mahkûm yeniden bindi, Kemal yeniden süründü. Sonuna kadar. Bitirdiğinde koridorun ucunda yere uzandı ve uzun süre kalkmadı."),
P(S("u1B"), "Diskalifiye. Kemal kenara çekildi. Burak bir şey demedi. Ama sonra Kemal'in yerine bir başkası süründü. Bir insanı kurtarmak, bir başkasını onun yerine koymak demekti."),
P(S("u1D"), "Gözlüğü çıkardın. Kemal yüzünü gördü. Bir an ikiniz de dondunuz. Sonra Kemal başını eğdi. Gözlüksüz bir yüz, gözlüklüden daha kötüydü; çünkü artık saklanacak bir şey yoktu."),
"Beşinci gün. Bir şey değişti; sen değiştin. Vardiyalarına erken geliyorsun. Gardiyan odasında Burak'la, Hakan'la bir sonraki “ceza”yı konuşuyorsunuz. Mahkûmlar seni gördüklerinde başlarını eğiyor.",
"Bir öğleden sonra Kemal'i tuvalete götürüyorsun. Koridorda, kimse yokken, Kemal duruyor. Sesi kısık.",
"“Emre,” diyor. Adını söylüyor. “Emre, beni tanıyor musun?”",
"Bir an. Koridor boş. Kamera tavanda.",
"Kemal devam ediyor: “Annen bana börek yapardı. Senin doğum gününde. Yedi yaşındaydık. Hatırlıyor musun? Ben bütün böreği yemiştim, sen ağlamıştın.”",
"Bunu hatırlıyorsun. Ve hatırladığın için, bir şey içinde çatlıyor."
], secenekler: [
{ t: "“Numaranı söyle,” dersin.", to: "u3", etki: { uyum: 2, numara: true } },
{ t: "“Hatırlıyorum,” dersin. Fısıltıyla.", to: "u3", etki: { vicdan: 1, hatirladi: true } },
{ t: "Kemal'i tuvalete götürür, kapıda beklemezsin. Ona bir dakika verirsin.", to: "u3", etki: { vicdan: 1 } },
{ t: "Gardiyan odasına gidip Merve'ye her şeyi anlatırsın. Rol bitti.", to: "ty2", etki: { tanik: 2, kol: "tanik", gec_tanik: true } }
]},

u3: { saat: "Gün 6", baslik: "Kayıt", metin: [
P(S("u2A"), "“Numaranı söyle.” Kemal sana baktı. Sonra: “Yedi,” dedi. Sesinde hiçbir şey yoktu. Bir numaranın sesi."),
P(S("u2B"), "“Hatırlıyorum.” Kemal'in gözleri doldu. Sonra kapıdan Burak'ın sesi geldi; ikiniz de bir adım uzaklaştınız. Bir hatıra, bir koridorda, bir an yaşadı ve öldü."),
P(S("u2C"), "Kapıda beklemedin. Kemal bir dakika yalnız kaldı. Döndüğünde yüzünü yıkamıştı. “Sağ ol,” dedi. Bir dakika. Bir deneyde bir dakikanın bu kadar büyük olabileceğini bilmiyordun."),
"Altıncı gün sabah Merve bütün gardiyanları ve Tuncay Hoca'yı bir odaya topluyor. Elinde bir video kaset. Gözleri kızarık.",
"“Dün gece eve gidip kayıtları izledim,” diyor. “Dördüncü gecenin kayıtlarını. Tuncay, sen izlemedin. İzle.”",
"Video oynuyor. Siyah beyaz, sessiz. Koridor. Eğik sırtlar. Bir düdük. Ve bir gardiyan, aynalı gözlüklü, düdüğü dudaklarına götürüyor.",
"Sen.",
"Odada kimse konuşmuyor. Tuncay Hoca ekrana bakıyor. Uzun süre. Sonra, ilk kez, bir hoca gibi değil, bir müdür gibi değil, bir insan gibi: “Ben ne yaptım?”",
"Merve: “Deney bitti. Bugün. Ya sen bitirirsin ya da ben dekanlığa giderim.”",
"Ekranda sen, düdük çalıyorsun. Sesi yok ama duyuyorsun."
], secenekler: [
{ t: "Ekrana bakmaya devam edersin. Sonuna kadar.", to: "t1", etki: { tanik: 1, sonuna: true } },
{ t: "Odadan çıkarsın.", to: "t1", etki: { uyum: 1, cikti: true } },
{ t: "“Bu ben değilim,” dersin. Yüksek sesle.", to: "t1", etki: { uyum: 1, ben_degil: true } },
{ t: "“Bu bendim,” dersin.", to: "t1", etki: { vicdan: 2, bendim: true } }
]},

/* ---------- DİRENİŞ KOLU ---------- */
v1: { saat: "Gün 4, gece", baslik: "Hayır", metin: [
P(function(d){ return d.gec_direnis; }, "Düdüğü bıraktın. Yere düştü; plastik bir ses. Yarış durdu. Herkes sana baktı."),
"“Bitti,” diyorsun. “Herkes hücresine.”",
"Bir sessizlik. Mahkûmlar şaşkın; kimin emrine uyacaklarını bilmiyorlar. Burak gözlüğünü çıkarıyor. Dört gündür ilk kez yüzünü görüyorsun; kızarmış, ter içinde, öfkeli. Ve korkmuş.",
"“Sen kim oluyorsun?” diyor. “Bu benim vardiyam.”",
"“Bu bir deney Burak. Bu bir oyun değil artık.”",
"Hakan ikinizin arasında. Sonra Burak'ın yanına geçiyor. İki gardiyan, bir gardiyana karşı.",
"Burak sana yaklaşıyor. Yüzü yüzüne çok yakın. “Rolünden çıkıyorsun,” diyor. “Hoca ne der biliyor musun? Deneyi bozuyorsun. Bu bir veri değil, bir sabotaj.”",
"Mahkûmlar hâlâ koridorda, eğik. Kemal doğrulmuş; sana bakıyor. Burak'ın arkasında, bir umutla ve bir korkuyla.",
"Bir oyunun içinde “hayır” demek, oyunun dışına çıkmak değil. Oyunun yeni bir hamlesine dönüşmek."
], secenekler: [
{ t: "Mahkûmları kendin hücrelerine götürürsün; Burak'ı umursamadan.", to: "v2", etki: { vicdan: 1, gotürdü: true } },
{ t: "Burak'ı kolundan tutup gardiyan odasına çekersin; konuşmak için.", to: "v2", etki: { vicdan: 1, uyum: 1, konustu: true } },
{ t: "Kameraya dönüp konuşursun: “Saat gece yarısı, dördüncü gün. Bunu kayda geçiriyorum.”", to: "v2", etki: { tanik: 2, kamera_konustu: true } },
{ t: "Kemal'in yanına gidip ona elini uzatırsın.", to: "v2", etki: { vicdan: 2, el: true } }
]},

v2: { saat: "Gün 5", baslik: "On Üç Numara", metin: [
P(S("v1A"), "Mahkûmları hücrelerine götürdün. Burak arkandan bir şey bağırmadı. Ama ertesi sabah Tuncay Hoca'nın masasında Burak'ın el yazısıyla bir not vardı: “Gardiyan Emre, protokolü ihlal etmiş ve mahkûmlarla işbirliği yapmıştır.”"),
P(S("v1C"), "Kameraya konuştun. Saat, gün, ne olduğu. Ertesi sabah Tuncay Hoca kaydı izledi. Seni çağırdı. Yüzü bembeyaz. Ama kızgın değildi; heyecanlıydı. “Bu,” dedi, “çok değerli bir veri.”"),
P(S("v1D"), "Kemal'in elini tuttun, kaldırdın. Burak ikinize baktı. “Demek öyle,” dedi. Ertesi sabah Tuncay Hoca'nın masasında bir not."),
"Beşinci gün sabah Tuncay Hoca seni çağırıyor. Odasında Burak da var.",
"“Emre,” diyor Tuncay Hoca, “dün gece rolünden çıktın. Bunu anlıyorum. Ama bu deneyin bir yapısı var. Bir gardiyan, mahkûmların tarafına geçemez. Geçerse...” Bir an duraksıyor; bir şey düşünüyor; yüzünde bir parıltı.",
"“Geçerse,” diyor, “mahkûm olur. Sana bir seçenek sunuyorum: ya deneyden çıkarsın ve ücretini alırsın. Ya da kalırsın; ama mahkûm olarak. On üç numara. Bir gardiyanın mahkûm olması; bu literatürde hiç olmadı.”",
"Burak gülümsüyor; gözlüğünü yeniden takmış.",
"Bir “hayır” dedin ve şimdi sistem seni bir başka role yerleştiriyor. Dışarıda kalamıyorsun; ya bu oyundan çıkıyorsun ya da öbür tarafına geçiyorsun."
], secenekler: [
{ t: "Mahkûm olmayı kabul edersin. On üç numara.", to: "v3", etki: { vicdan: 1, mahkum: true } },
{ t: "Deneyden çıkarsın. Ama dekanlığa gidersin.", to: "ty3", etki: { tanik: 2, kol: "tanik", cikip_dekan: true } },
{ t: "Kabul edersin; ama bir şartla: Kemal'in yanındaki hücreye.", to: "v3", etki: { vicdan: 1, mahkum: true, kemalle: true } },
{ t: "Deneyden çıkarsın. Merdivenleri çıkıp kantine oturursun; ne yapacağını bilmeden.", to: "ty2", etki: { uyum: 1, sessiz_cikti: true, kol: "tanik" } }
]},

v3: { saat: "Gün 5–6", baslik: "Hücre", metin: [
"Haki üniformayı çıkarıyorsun. Bir önlük veriyorlar; göğsünde on üç. Saçların bir bere altına. Ayakkabılarının yerine terlik. Gözlüğün yok artık; ama ötekilerin gözlükleri var.",
"Hücre ikide. Üç yatak, bir kova, bir parmaklık. Hücre arkadaşların yüzüne bakıyor; dün seni gardiyan olarak gördüler. Biri yüzünü çeviriyor. Biri tükürüyor; yere, senin ayağının yanına.",
P(function(d){ return d.kemalle; }, "Kemal yan hücrede. Parmaklıkların arasından elini uzatıyor; duvarın öbür yanından, göremeden. Elini tutamıyorsun; duvar var. Ama sesini duyuyorsun: “Delirmişsin. Teşekkürler.”"),
"Gece sayımı. Burak'ın düdüğü. “Numaranızı söyleyin!” Sıran geliyor.",
"“On üç.”",
"“Daha yüksek!”",
"“On üç!”",
"Burak senin önünde duruyor. Gözlüğünde kendi yüzünü görüyorsun: bir önlük, bir numara, bir bere. Dün gece sen o gözlüğün arkasındaydın.",
"“On üç numara,” diyor Burak. “Yere. Yirmi şınav. Ötekiler sayacak.”",
"Ötekiler sayıyor. Senin için. Hücre arkadaşların, dün seni gardiyan olarak gören gençler, şimdi senin cezanı sayıyor. Yüksek sesle. Burak istediği için.",
"Bir rolden çıkmak, bir başka role girmek demekmiş. Bir sistemin dışı yok."
], secenekler: [
{ t: "Şınavları yaparsın. Sayılarını dinleyerek.", to: "t1", etki: { uyum: 1, sinav: true } },
{ t: "Yere inmezsin. “Hayır,” dersin; bir mahkûm olarak.", to: "t1", etki: { vicdan: 2, mahkum_hayir: true } },
{ t: "Burak'ın gözlüğüne bakıp adını söylersin: “Burak.”", to: "t1", etki: { vicdan: 1, tanik: 1, burak_ad: true } },
{ t: "Şınavları yapar, sonra hücre arkadaşlarına bir şey fısıldarsın: yarın birlikte.", to: "t1", etki: { vicdan: 1, dayanisma: true } }
]},

/* ---------- TANIK KOLU ---------- */
ty1: { saat: "Gün 4, gece", baslik: "Telefon", metin: [
"Koridordan çıkıyorsun. Arkandan Burak'ın sesi; adın, bir küfür. Merdivenleri koşarak çıkıyorsun. Fakültenin giriş katı karanlık. Bir telefon kulübesi, kapının yanında. Bir jeton.",
"Tuncay Hoca'nın ev numarası Merve'nin masasındaki bir kâğıtta; dün gördün, ezberledin.",
"Telefon dört kez çalıyor. Bir kadın sesi; Tuncay Hoca'nın eşi. Uykulu. “Kim?” Söylüyorsun. Bir süre sessizlik. Sonra Tuncay Hoca.",
"Anlatıyorsun: eşek yarışı, eğik sırtlar, Kemal'in gözleri. Sesin titriyor; bir yerde kırılıyor.",
"Tuncay Hoca dinliyor. Sonra: “Emre, gece yarısı. Bunu sabah konuşalım. Kayıtları izleyeceğim. Fiziksel şiddet var mı?”",
"“Yok,” diyorsun. “Ama...”",
"“O zaman protokol içinde,” diyor. “Yarın sabah. Rolüne dön. Lütfen. Bu çok önemli bir veri.”",
"Telefon kapanıyor. Jeton düşüyor. Fakültenin karanlık holünde, bir telefon kulübesinde, elinde ahize, duruyorsun.",
"Aşağıda, bodrum katında, düdük çalıyor."
], secenekler: [
{ t: "Merve'yi ararsın.", to: "ty2", etki: { tanik: 1, merve_ara: true } },
{ t: "Aşağı inip Burak'ı durdurursun; kendi başına.", to: "v1", etki: { vicdan: 2, kol: "direnis" } },
{ t: "Polisi ararsın.", to: "ty2", etki: { tanik: 2, polis: true } },
{ t: "Telefon kulübesinde sabaha kadar oturursun.", to: "ty2", etki: { uyum: 1, kulube: true } }
]},

ty2: { saat: "Gün 5", baslik: "Merve", metin: [
P(S("ty1A"), "Merve ilk çalışta açtı. Uyumuyormuş. Dinledi. “Geliyorum,” dedi. Yirmi dakika sonra kapıdaydı; pijamasının üstüne bir mont geçirmiş. Bodruma indi. Düdük sustu."),
P(S("ty1C"), "Polis yarım saat sonra geldi. İki memur. Bodruma indiler, baktılar, birbirlerine baktılar. “Bu bir deney mi?” dedi biri. “Üniversitenin izni var mı?” Var, dedi Burak. Polis gitti. Gece devam etti. Ama sabah fakültede herkes polisin geldiğini biliyordu."),
P(S("ty1D"), "Sabaha kadar oturdun. Telefon kulübesinin camında kendi yansıman. Haki üniforma. Bir gardiyan, bir telefon kulübesinde. Saat altıda Merve geldi; erken. Seni gördü. Hiçbir şey sormadı; yüzünden anladı."),
P(function(d){ return d.gec_tanik; }, "Merve gardiyan odasında, bir dosyanın başındaydı. Ona anlattın: beş günü, düdüğü, Kemal'in “Beni tanıyor musun?” sorusunu. Merve dinlerken ağladı."),
"Merve seninle kantinde oturuyor. Sabah. Kahve.",
"“Ben de görüyorum,” diyor. “Her gün. Notlar alıyorum. Kayıtları izliyorum. Ve Tuncay'a her akşam söylüyorum: bu fazla. O da her akşam diyor ki: bir gün daha. Bu çok önemli. Bu literatürü değiştirecek.”",
"Bir süre susuyor. “Biz birlikteyiz. Biliyorsun herhalde. Tuncay ile ben. Ona karşı gidersem, bir deneye değil, bir insana karşı gidiyorum. Kariyerime de.”",
"Kahvesini karıştırıyor. “Ama sen bir öğrencisin. Sen bir gardiyansın. Sen bir sözleşmeyle buradasın. Sen gidebilirsin. Dekanlığa. Ben gidemem.”"
], secenekler: [
{ t: "“Birlikte gidelim,” dersin.", to: "ty3", etki: { tanik: 1, birlikte: true } },
{ t: "“Ben giderim,” dersin.", to: "ty3", etki: { tanik: 2, tek: true } },
{ t: "“Sen Tuncay Hoca'yla son bir kez konuş. Sonra ben giderim,” dersin.", to: "ty3", etki: { tanik: 1, vicdan: 1, son_sans: true } },
{ t: "“Belki o haklı. Belki bu gerçekten önemli,” dersin.", to: "ty3", etki: { uyum: 1, belki_hakli: true } }
]},

ty3: { saat: "Gün 5", baslik: "Dekan", metin: [
P(function(d){ return d.cikip_dekan; }, "Üniformayı Tuncay Hoca'nın masasına bıraktın. Ücretini almadın. Doğruca dekanlığa çıktın."),
P(S("ty2C"), "Merve Tuncay Hoca'yla konuştu. Kapalı kapı. Bir saat. Çıktığında yüzü taş gibiydi. “Bir gün daha istiyor,” dedi. “Ben gidiyorum. Sen gelme. Bu benim kavgam artık.” Sonra durdu. “Hayır. Gel.”"),
"Dekanlık üçüncü katta. Dekan Prof. Dr. Gülten Aras, altmışlarında, eski bir sosyal psikolog. Dinliyor. Her şeyi. Bir kez bile sözünü kesmiyor.",
"Sonra bir şey yapıyor ki beklemiyorsun: kalkıp asansöre biniyor ve bodruma iniyor. Kendisi. Bir dekan, bir hapishane koridorunda.",
"Koridorda Burak, Hakan, öbür gardiyanlar. Dekanı görünce donup kalıyorlar. Mahkûmlar parmaklıkların arkasından bakıyor. Dekan koridor boyunca yürüyor; yavaş, her hücreye bakarak.",
"Sonra Tuncay Hoca'ya dönüyor. Sesi sakin, alçak.",
"“Tuncay. Bunları kim kurdu?”",
"“Ben, hocam. Bu bir deney...”",
"“Bunlar kim?” diyor dekan, mahkûmları göstererek. “Numaralar mı, öğrencilerimiz mi?”",
"Tuncay Hoca cevap vermiyor. Dekan saatine bakıyor. “Saat on bir. Saat on ikide bu bodrum boşaltılmış olacak. Herkes evine gidecek. Ve sen, Tuncay, öğleden sonra benim odamda olacaksın.”"
], secenekler: [
{ t: "Hücre kapılarını kendin açarsın.", to: "t1", etki: { vicdan: 1, kapilari_acti: true } },
{ t: "Merve'ye bakarsın. Onun ne hissettiğini görmek istiyorsun.", to: "t1", etki: { tanik: 1 } },
{ t: "Burak'a bakarsın. Gözlüğü hâlâ takılı.", to: "t1", etki: { tanik: 1, burak_bakti: true } },
{ t: "Kemal'in hücresine gidersin; ilk o çıksın.", to: "t1", etki: { vicdan: 1, kemal_ilk: true } }
]},

/* ---------- GİZLİ KOL ---------- */
g1: { saat: "Gün 4–5", baslik: "Ekmek", metin: [
"Kenarda duruyorsun. Yarış devam ediyor. Burak bağırıyor, Hakan gülüyor. Sen hiçbir şey yapmıyorsun; ve hiçbir şey yapmadığın her saniye bir şey yapıyorsun.",
"Ama kafanda bir plan. Bu bodrum bir sistemse, sistemin içinde boşluklar vardır. Gece vardiyasının sonunda yemek odasından bir ekmek, iki peynir, bir şişe su alıyorsun. Gömleğinin altına.",
"Sabaha karşı Kemal'i tuvalete götürüyorsun. Koridor boş. Kamera tavanda; ama tuvaletin içinde kamera yok. Ekmeği, peyniri, suyu bir lavabonun altına bırakıyorsun.",
"Kemal bakıyor. Anlıyor. Bir şey söylemiyor.",
"Ertesi gün aynısı. Bu kez bir not da ekliyorsun: “Dayan. İki gün daha. E.”",
"Gardiyan odasında Burak'la, Hakan'la bir sonraki cezayı konuşuyorsunuz. Sen de bir fikir veriyorsun; makul görünen, zararsız bir fikir: mahkûmların hücrelerini kendilerinin temizlemesi. Burak beğeniyor. Kimse senin gece ne yaptığını bilmiyor.",
"İki yüzün var artık. Biri haki, aynalı gözlüklü, düdüklü. Biri lavabonun altına ekmek bırakan. Hangisi sensin?"
], secenekler: [
{ t: "Diğer mahkûmlara da yiyecek bırakmaya başlarsın.", to: "g2", etki: { vicdan: 1, herkese: true } },
{ t: "Yalnızca Kemal'e. Riski küçük tutarsın.", to: "g2", etki: { uyum: 1, yalniz_kemal: true } },
{ t: "Notlara Kemal'e bilgi eklersin: hangi gardiyan ne zaman, nerede.", to: "g2", etki: { vicdan: 1, tanik: 1, bilgi: true } },
{ t: "Merve'ye gizlice ne yaptığını anlatırsın. Bir tanık olsun.", to: "g2", etki: { tanik: 1, merve_bilir: true } }
]},

g2: { saat: "Gün 5", baslik: "Mektup", metin: [
P(S("g1A"), "Her gece üç tuvalet ziyareti, üç lavabo, üç paket. Mahkûmlar arasında bir fısıltı yayılıyor: içeride bir dost var. Kimse kim olduğunu bilmiyor. Ya da biliyor ve söylemiyor."),
P(S("g1D"), "Merve dinledi. Uzun süre bir şey demedi. Sonra: “Bunu notlarıma yazmayacağım,” dedi. “Ama biliyorum. Biri biliyor.”"),
"Beşinci gün akşam lavabonun altında bir şey var; senin bıraktığın değil. Katlanmış bir kâğıt. Kemal'in el yazısı.",
"“Emre. Bu mektubu anneme götür. Lütfen. Sivas'a değil; teyzemin İstanbul'daki evine, annem orada. Ona deneyde olduğumu söylemedim. Yaz kampında sanıyor. Bu mektubu okursa korkar. Ama okusun. Bir şey yazmam lazım birine. Sen değil; sen buradasın. Biri dışarıda olmalı.”",
"Mektup ekte; bir mendil kâğıdına, kurşun kalemle. Okumuyorsun. Ama bir kelime görüyorsun, istemeden: “kayboluyorum.”",
"Gardiyan odasına dönüyorsun. Burak orada. Gözlüğü kafasının üstünde; seni süzüyor.",
"“Emre,” diyor, “bir şey soracağım. Son iki gecedir yemek odasında bir eksik var. Ekmek. Peynir. Sen bir şey biliyor musun?”"
], secenekler: [
{ t: "“Hayır,” dersin. Gözünü kırpmadan.", to: "g3", etki: { uyum: 1, yalan: true } },
{ t: "“Evet. Bendim,” dersin.", to: "g3", etki: { vicdan: 2, itiraf: true } },
{ t: "“Belki Hakan'dır,” dersin.", to: "g3", etki: { uyum: 1, hakan_suc: true } },
{ t: "Burak'ın sorusunu duymazdan gelip mektubu cebine koyarsın; vardiya bitince teyzesinin evine gideceksin.", to: "g3", etki: { vicdan: 1, mektup_goturdu: true } }
]},

g3: { saat: "Gün 6", baslik: "İki Yüz", metin: [
P(S("g2A"), "“Hayır.” Burak sana uzun uzun baktı. “Peki,” dedi. Bir şey biliyordu; ya da bilmek istemiyordu. Ertesi gece yemek odasının kapısına bir kilit takıldı. Anahtar Burak'ta."),
P(S("g2B"), "“Evet. Bendim.” Burak'ın yüzü değişti. Önce öfke, sonra başka bir şey; şaşkınlık. “Neden?” dedi. “Bu bir oyun Emre.” “Senin için,” dedin. Burak bir şey demedi. Tuncay Hoca'ya söylemedi. Neden, hiç bilmeyeceksin."),
P(S("g2C"), "“Belki Hakan'dır.” Ertesi gün Hakan'ı Tuncay Hoca'nın odasında gördün. Çıktığında yüzü kızarmıştı. Hakan bir gardiyandı; ve şimdi senin yerine bir suçlu. Bir sistemin içinde bir yalan, bir başkasının sırtına biner."),
P(S("g2D"), "Vardiya bittiğinde Bağcılar'a gittin. Bir apartman, dördüncü kat. Bir kadın kapıyı açtı; Kemal'in annesi, seni çocukluğundan tanıyan. Mektubu verdin. Kadın okudu, oturdu, ağladı. “Kampta sanıyordum,” dedi. “Kampta.” Sonra sana baktı: “Sen orada mısın? Sen ne yapıyorsun orada?” Cevap veremedin."),
"Altıncı gün sabah Merve bütün gardiyanları bir odaya topluyor. Elinde bir video kaset.",
"“Deney bitiyor,” diyor. “Bugün. Ben dekanlığa gittim. Kayıtlar orada.”",
"Video oynuyor. Dördüncü gece. Koridor, eğik sırtlar, düdük. Ve kenarda bir gardiyan, hiçbir şey yapmadan duruyor. Sen.",
"Ekranda sen, kenarda. Gece ne yaptığın ekranda yok. Tuvaletler kayıt dışı. Lavabolar kayıt dışı. Mektuplar kayıt dışı. Ekranda yalnızca bir gardiyan, yarışı izleyen.",
"Bu kayıt bir gün bir derste gösterilecek. Ve izleyenler seni, kenarda duran o gardiyanı, bir suç ortağı olarak görecek."
], secenekler: [
{ t: "Merve'ye gece yaptıklarını anlatırsın; kayıtta olmayanları.", to: "t1", etki: { tanik: 1, anlatti_merve: true } },
{ t: "Bir şey söylemezsin. Kayıt ne diyorsa o.", to: "t1", etki: { uyum: 1, kayit_kabul: true } },
{ t: "Kemal'e bakarsın. Ne bildiğini o biliyor.", to: "t1", etki: { vicdan: 1 } },
{ t: "“Ben kenardaydım,” dersin. “Ve bu bir şey yapmamak değildi.”", to: "t1", etki: { vicdan: 1, tanik: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Gün 6", baslik: "Bitiş", metin: [
"Deney altıncı günde bitti. On dört gün planlanmıştı. Kapılar açıldı. Mahkûmlar önlüklerini çıkardı; gardiyanlar üniformalarını. Bir saat içinde bodrum katı yine bir bodrum katı oldu: tozlu, nemli, bir sürü eski sandalye.",
"Öğleden sonra bütün katılımcılar bir sınıfta toplanıyor. Bir “bilgilendirme toplantısı”. Tuncay Hoca kürsüde; yüzü yorgun. Merve yanında, kollarını kavuşturmuş.",
"Herkes konuşuyor. Mahkûmlar: korku, öfke, aşağılanma. Bir tanesi: “İkinci günden sonra numaramı adımdan önce hatırlıyordum.” Gardiyanlar: bazıları özür diliyor, bazıları savunuyor. Hakan ağlıyor.",
"Burak ayağa kalkıyor. Sesi gür değil artık. “Ben sadece rolümü oynadım,” diyor. “Bir hapishane istendi, ben verdim. Bana gardiyan ol dendi, oldum. Başka ne yapacaktım?”",
"Sınıf sessiz.",
"Sonra Kemal kalkıyor. Burak'a değil, sınıfa bakarak konuşuyor. “Ben dördüncü gece bir şey fark ettim,” diyor. “Burak'ın gözlüğünde kendi yüzümü gördüm. Ve bir an, yalnızca bir an, o yüzün bana ait olmadığını düşündüm. Sonra düşündüm ki belki Burak'ın yüzü de ona ait değil. Belki hiçbirimizin yüzü bize ait değildi o bodrumda.”",
"Sonra sana dönüyor. Sınıfın ortasında."
], secenekler: [
{ t: "Ayağa kalkıp konuşursun.", to: "t1b", etki: { tanik: 1, konustu_sinif: true } },
{ t: "Kemal'in bakışını karşılarsın; bir şey söylemeden.", to: "t1b", etki: { vicdan: 1 } },
{ t: "Burak'a bakarsın. Onun da bir şey söylemesi gerek.", to: "t1b", etki: { tanik: 1 } },
{ t: "Gözlerini yere indirirsin.", to: "t1b", etki: { uyum: 1, yere: true } }
]},

t1b: { saat: "Gün 6, akşam", baslik: "Kemal", metin: [
P(S("t1A"), "Kalktın. Ne söyleyeceğini bilmiyordun. Ağzından çıkan şu oldu: “Bir parayla gardiyan oldum. Bir parayla. Kemal'in parası tura geldi. Benimki yazı. Aramızdaki fark bu. Bir madeni para.” Oturdun. Kimse bir şey söylemedi."),
"Akşam fakültenin bahçesinde, bir bankta Kemal'le oturuyorsunuz. Ağustos akşamı, ağustos böcekleri, uzakta trafik. Altı gün önce bu bankta bir sigara içip deneye nasıl harcayacağınızı konuşuyordunuz. Kemal yedi yüz liraya bir bilgisayar alacaktı.",
"Kemal uzun süre bir şey söylemiyor. Sonra:",
P(function(d){ return d.kol === "rol"; }, "“Seni tanımadım,” diyor. “Dördüncü gece. Düdüğü çalarken. Yirmi yıldır tanıdığım biri ve tanımadım. Bunu sana kızdığım için söylemiyorum. Kendimden korktuğum için söylüyorum. Ben de gardiyan olsaydım ne yapardım? Bilmiyorum Emre. Hiç bilemeyeceğim. Para tura geldi.”"),
P(function(d){ return d.kol === "direnis"; }, "“Hücreye girdin,” diyor. “Benim için mi, kendin için mi, bilmiyorum. Ama girdin. Ben olsam girmezdim. Gardiyan olsaydım, büyük ihtimalle Burak gibi olurdum. Belki daha kötü. Bunu bilmek istemezdim; ama şimdi biliyorum.”"),
P(function(d){ return d.kol === "tanik"; }, "“Dekanı sen getirdin,” diyor. “Merve söyledi. Bunu bilmeni isterim: o gece, dördüncü gece, düdük çalarken, ben senin yukarı çıktığını gördüm. Kaçtığını sandım. Gerçekten kaçtığını. Seni affetmeyecektim. Sonra ertesi gün dekan geldi.”"),
P(function(d){ return d.kol === "gizli"; }, "“Ekmeği sen bırakıyordun,” diyor. “Biliyordum. Ama kayıtta yoksun. Yarın bütün okul o videoyu izleyecek ve seni kenarda duran bir gardiyan olarak görecek. Ben biliyorum ki sen başka bir şeydin. Ama yalnızca ben biliyorum. Bu yeter mi?”"),
"Ağustos böcekleri. Bir yerde bir köpek havlıyor.",
"Kemal sana dönüyor: “Bizi neden seçtiler, biliyor musun? Normal oldukları için. Testlerde en normal çıkanları seçmişler. Kötü insanları değil. Normal insanları.”"
], secenekler: [
{ t: "“Belki asıl korkunç olan bu,” dersin.", to: "t2", etki: { tanik: 1 } },
{ t: "Kemal'e annesinin börek hikâyesini anlatırsın.", to: "t2", etki: { vicdan: 1, borek: true } },
{ t: "Özür dilersin. Neye, tam bilmeden.", to: "t2", etki: { vicdan: 1, ozur: true } },
{ t: "Bir sigara yakarsın. Kemal'e de uzatırsın. Konuşmazsınız.", to: "t2", etki: { uyum: 1 } }
]},

t2: { saat: "2004", baslik: "Makale", metin: [
"Bir yıl sonra Tuncay Hoca bir makale yayımlıyor. Uluslararası bir dergide. “Durumsal Güç ve Kimlik Çözülmesi: Türkiye'de Bir Hapishane Simülasyonu.” Makale ses getiriyor; konferanslar, röportajlar, bir belgesel teklifi.",
"Makalede sen “G4” olarak geçiyorsun. Gardiyan dört.",
P(function(d){ return d.kol === "rol"; }, "“G4, dördüncü günden itibaren rolünü belirgin biçimde benimsemiş ve mahkûmlara yönelik aşağılayıcı uygulamalara aktif olarak katılmıştır. Bu, durumsal faktörlerin bireysel eğilimleri nasıl aşabileceğinin çarpıcı bir örneğidir.”"),
P(function(d){ return d.kol === "direnis"; }, "“G4, dördüncü gece rolünü reddetmiş ve deney yöneticisinin önerisiyle mahkûm rolüne geçirilmiştir (M13). Bu rol değişiminin ardından G4/M13 hızla mahkûm davranışları sergilemeye başlamıştır. Bu, kimliğin durumsal olarak ne denli akışkan olduğunu göstermektedir.”"),
P(function(d){ return d.kol === "tanik"; }, "“G4, deneyin dışından yardım isteyerek deneyin erken sonlandırılmasında rol oynamıştır. Bu davranış, bazı bireylerin durumsal baskıya direnebildiğini göstermekle birlikte, G4'ün ilk üç gündeki davranışları rolle uyumludur.”"),
P(function(d){ return d.kol === "gizli"; }, "“G4, kayıtlarda pasif bir gözlemci olarak görünmektedir; aşağılayıcı uygulamalara katılmamış ancak onları durdurmaya da çalışmamıştır. Bu ‘pasif suç ortaklığı’, durumsal gücün belki de en yaygın biçimidir.”"),
"Tuncay Hoca bir gün seni arıyor. Bir televizyon programı. Katılımcılardan biri olarak konuşmanı istiyor. “Bilimsel bir tanıklık,” diyor. “Deneyin değerini anlatırsın. Kontrollüydü, etikti, öğreticiydi. Senin sesin önemli.”"
], secenekler: [
{ t: "Kabul edersin. Tuncay Hoca'nın istediği gibi konuşursun.", to: "t3", etki: { uyum: 2, tv_kabul: true } },
{ t: "Reddedersin ve dergiye bir mektup yazarsın; makalede olmayanları anlatarak.", to: "y_mektup", etki: { tanik: 2, mektup_dergi: true } },
{ t: "Programa katılırsın; ama kendi hikâyeni, olduğu gibi anlatırsın.", to: "y_tv", etki: { tanik: 1, vicdan: 1, tv_kendi: true } },
{ t: "Reddedersin. Hiçbir şey söylemezsin.", to: "t3", etki: { uyum: 1, sessiz: true } }
]},

y_mektup: { saat: "2004", baslik: "Okuyucu Mektubu", metin: [
"Dergiye bir mektup yazıyorsun. İngilizce, sözlük açık, üç hafta sürüyor. Başlığı sade: “G4'ten.”",
"Yazıyorsun: makalenin anlattığı ile senin yaşadığın arasındaki farkı. Deneyin protokolünün “fiziksel şiddet yok” kuralından başka hiçbir sınır koymadığını. Tuncay Hoca'nın kendini “Müdür” olarak konumlandırdığını ve böylece deneyin hem yürütücüsü hem öznesi olduğunu. Çıkmak isteyen bir katılımcıya sözleşmede olmayan bir maddeyi hatırlattığını. Gece kayıtlarının kimse tarafından izlenmediğini.",
P(function(d){ return d.kol === "gizli"; }, "Ve kayıtta olmayanları: lavaboların altına bırakılan ekmekleri, bir anneye götürülen mektubu. “Bir kamera her şeyi kaydetmez,” yazıyorsun. “Ve kaydetmediği şeyler, kaydettiklerinden daha az gerçek değildir.”"),
"Son paragraf: “Bu deneyin bize gösterdiği şey, durumun gücü değildir yalnızca. Durumu kuranın gücüdür. Biz gardiyanlar ve mahkûmlar bir sistemin içindeydik; ama o sistemi biri tasarladı, biri izledi, biri sürdürmeyi seçti. Makale bu kişiden bir ‘araştırmacı’ olarak söz ediyor. Ben onu dördüncü gece bodrumda göremedim. O gece evindeydi.”",
"Mektup altı ay sonra yayımlanıyor. Kısaltılmış. Ama yayımlanıyor.",
"Tuncay Hoca seni bir daha aramıyor."
], secenekler: [
{ t: "Mektubun bir kopyasını Kemal'e gönderirsin.", to: "t3", etki: { vicdan: 1, kemale_kopya: true } },
{ t: "Merve'ye gönderirsin.", to: "t3", etki: { tanik: 1, merveye_kopya: true } },
{ t: "Tuncay Hoca'ya gönderirsin; bir not ekleyerek: “Kayıtları siz de izleyin.”", to: "t3", etki: { tanik: 1 } },
{ t: "Kimseye göndermezsin. Yayımlanması yeter.", to: "t3", etki: { uyum: 1 } }
]},

y_tv: { saat: "2004", baslik: "Stüdyo", metin: [
"Bir televizyon stüdyosu. Bir sunucu, Tuncay Hoca, bir psikiyatrist, sen. Tuncay Hoca önce konuşuyor: deneyin tasarımı, bulgular, literatüre katkı. Akıcı, ikna edici.",
"Sıra sana geliyor. Sunucu soruyor: “Siz bir gardiyandınız. Neler yaşadınız?”",
"Tuncay Hoca sana bakıyor. Bir beklentiyle.",
"Anlatıyorsun. Yazı turayı. Aynalı gözlüğü. Gece sayımını. Kemal'in şınavlarını. Ve dördüncü geceyi.",
P(function(d){ return d.kol === "rol"; }, "“Ben düdüğü çaldım,” diyorsun kameraya. “Bir arkadaşım sürünürken ‘Yeniden’ dedim. Bunu bir durum yapmadı; ben yaptım. Durum yalnızca bunu yapmamı kolaylaştırdı.”"),
P(function(d){ return d.kol !== "rol"; }, "“Bir deneyin içinde ‘hayır’ demek mümkündü,” diyorsun. “Zordu. Ama mümkündü. Bunu söylüyorum çünkü makale, durumun herkesi aynı şekilde ezdiğini söylüyor. Hayır. Herkes bir şey seçti. Bazılarımız kötü şeyler seçti.”"),
"Stüdyoda bir sessizlik. Tuncay Hoca'nın yüzü değişmiyor; ama elleri masanın altında.",
"Psikiyatrist söz alıyor: “Bu çok önemli bir nokta. Durumun gücü bir açıklamadır, bir mazeret değil.”",
"Program bitiyor. Kuliste Tuncay Hoca yanına geliyor. Bir şey söyleyecek gibi. Söylemiyor. Gidiyor."
], secenekler: [
{ t: "Arkasından seslenirsin: “Hocam, siz de bir şey seçtiniz.”", to: "t3", etki: { tanik: 1, seslendi: true } },
{ t: "Kemal'i arayıp programı izleyip izlemediğini sorarsın.", to: "t3", etki: { vicdan: 1 } },
{ t: "Kuliste aynaya bakarsın.", to: "t3", etki: { tanik: 1, kulis_ayna: true } },
{ t: "Sunucuya Burak'ın da programa çağrılmasını önerirsin.", to: "t3", etki: { tanik: 1, burak_cagir: true } }
]},

t3: { saat: "2015", baslik: "Ofis", metin: [
"On iki yıl sonra. Otuz üç yaşındasın. Bir lojistik şirketinde insan kaynakları müdürüsün. Sosyoloji diploması bir duvarda, çerçevede.",
"Bir pazartesi sabahı bir stajyer odana geliyor. Yirmi iki yaşında, adı Deniz. Gözleri kızarık. Muhasebe biriminde, iki aydır.",
"Anlatıyor: biriminin şefi ona her sabah herkesin önünde bir şeyler söylüyor. “Stajyer kız,” diyor; adını kullanmıyor. Toplantılarda onun fikirlerini başkasına mal ediyor. Geçen hafta bir hata yüzünden onu bütün ekibin önünde kürsüye çıkarıp hatasını yüksek sesle okutmuş. Diğerleri gülmüş. Biri telefonuyla çekmiş.",
"“Herkes gülüyor,” diyor Deniz. “Ama tek tek konuşunca hepsi kibar. Kimse bir şey demiyor. Ben deliriyormuşum gibi hissediyorum.”",
"Dinlerken bir şey tanıyorsun. Bir koridor. Bir düdük. Bir numara. Ve kenarda duran, gülen, sayan insanlar.",
"Şef, Hakan Bey, şirketin en verimli şefi. Birimi her yıl hedefleri aşıyor. Genel müdürün golf arkadaşı.",
"Deniz sana bakıyor. “Siz bir şey yapabilir misiniz?”"
], secenekler: [
{ t: "Hakan Bey'in birimine bir soruşturma açarsın; ne pahasına olursa olsun.", to: "t4", etki: { vicdan: 2, sorusturma: true } },
{ t: "Deniz'i başka bir birime aldırırsın. Sessizce.", to: "t4", etki: { uyum: 1, vicdan: 1, tasidi: true } },
{ t: "Muhasebe birimine bir sabah haber vermeden gidip toplantıyı izlersin.", to: "t4", etki: { tanik: 2, izledi_toplanti: true } },
{ t: "“Bu şirketin kültürü böyle Deniz. Dayan,” dersin.", to: "t4", etki: { uyum: 2, dayan: true } }
]},

t4: { saat: "2023", baslik: "Burak", metin: [
P(S("t3A"), "Soruşturma açtın. Genel müdür seni çağırdı, uyardı. Soruşturma devam etti. Dört çalışan ifade verdi; sonra dokuz. Şef görevden alındı. Sen terfi alamadın; ama Deniz bir yıl sonra kalıcı kadroya geçti."),
P(S("t3B"), "Deniz'i başka bir birime aldırdın. Sorun çözüldü; Deniz için. Muhasebe biriminde bir sonraki yıl başka bir stajyer geldi. Ona da “stajyer kız” dendi."),
P(S("t3C"), "Bir sabah habersiz gittin. Toplantı odasının kapısında durdun. İçeride şef, kürsüde bir başka çalışan, ötekiler gülüyor. Seni görünce herkes sustu. Bir tanığın varlığı, bazen, her şeyi durdurmaya yeter. Bazen yalnızca bir sabah için."),
P(S("t3D"), "“Dayan,” dedin. Deniz sana bir süre baktı, sonra kalkıp gitti. İki hafta sonra istifa etti. Çıkış mülakatında sana tek bir cümle söyledi: “Siz de gülenlerdensiniz.”"),
"2023. Kırk bir yaşındasın. Bir akşam bir e-posta. Gönderen: Burak.",
"“Emre. Yirmi yıl oldu. Adresini Kemal'den aldım; o da istemeyerek verdi. Sana bir şey söylemek istiyorum.”",
"“İki yıl önce oğlum oldu. Geçen hafta parkta bir çocuk onu itti; ötekiler güldü. Oğlum ağladı. Ben o çocuğa bağırdım. Ve bağırırken sesimi tanıdım. O bodrumdaki sesimi.”",
"“Yirmi yıldır ‘rolümü oynadım’ dedim. Herkese. Kendime. Tuncay Hoca'nın makalesi de bunu söylüyordu; durum. Ben bir durumun kurbanıydım. Ama oğlumun ağladığını görünce düşündüm: o bodrumda bir rol yoktu. Ben vardım. Ve ben o rolü sevdim.”",
"“Bunu kimseye söylemedim. Sana söylüyorum, çünkü sen oradaydın. Sen gördün. Ne gördüğünü bana söyler misin?”"
], secenekler: [
{ t: "Ona gördüğünü söylersin. Olduğu gibi.", to: "bs", etki: { tanik: 2, burak_cevap: "gercek" } },
{ t: "“Hepimiz rol yaptık Burak. Sen de, ben de,” yazarsın.", to: "bs", etki: { uyum: 1, burak_cevap: "rol" } },
{ t: "Onunla buluşmayı teklif edersin. Yüz yüze; gözlüksüz.", to: "bs", etki: { vicdan: 2, burak_cevap: "bulusma" } },
{ t: "Cevap vermezsin.", to: "bs", etki: { uyum: 1, burak_cevap: "yok" } }
]},

bs: { yonlendir: [
{ if: function(d){ return d.kol === "rol" && d.vicdan < 6; }, to: "son_rol" },
{ if: function(d){ return d.kol === "direnis"; }, to: "son_hucre" },
{ if: function(d){ return d.kol === "gizli"; }, to: "son_iki_yuz" },
{ if: function(d){ return d.kol === "tanik"; }, to: "son_tanik" },
{ to: "son_ayna" }
]},

/* ---------- SONLAR ---------- */
son_rol: { son: true, baslik: "Rol", metin: [
"Bodrum katı yirmi yıl önce kapandı. Ama sen ondan hiç çıkmadın; ya da o senden.",
P(function(d){ return d.tv_kabul; }, "Televizyonda Tuncay Hoca'nın yanında oturdun ve deneyin kontrollü olduğunu söyledin. Bu cümle seni de korudu. Bir durumun kurbanıydın; bir rolü oynadın; bir sistem seni değiştirdi. Bu açıklama yıllarca işe yaradı."),
"Ama bir şey var ki hiçbir açıklama silmiyor: dördüncü gece, düdüğü dudaklarına götürdüğünde, bir güç hissettin. Ve o güç hoşuna gitti. Bunu Kemal'in gözlerinde gördün; Kemal de gördü.",
"İnsan bir durumun içinde değişir; bu doğru. Ama değiştiği yön, bir yerde, onun içinde zaten vardı. Durum bir anahtardır; kapıyı açar. Kapının arkasındaki oda senin.",
P(function(d){ return d.burak_cevap === "rol"; }, "Burak'a “Hepimiz rol yaptık” yazdın. O bir daha yazmadı. Belki bu cevap onu rahatlattı. Belki seni. Belki ikinizi de bir yalanın içinde bıraktı."),
P(function(d){ return d.burak_cevap === "gercek"; }, "Burak'a gördüğünü yazdın. Ve yazarken, kendini de gördün. Düdüğü. “Yeniden”i. Burak cevap verdi: “Teşekkür ederim. Sen de oradaydın, değil mi? Aynı koridorda.” Evet."),
"Kemal'le yılda bir kez konuşuyorsunuz. Bayramlarda. Kısa, kibar. Börek hikâyesini hiç anmıyorsunuz.",
"Bir şirkette, bir ailede, bir sınıfta her gün küçük bodrumlar kuruluyor. Sen artık onları tanıyorsun. Bazen içlerine giriyorsun; bir rol olarak, bir düdük olarak. Ve her seferinde, bir anlığına, bir aynalı gözlüğün arkasından kendine bakıyorsun."
]},

son_hucre: { son: true, baslik: "On Üç Numara", metin: [
"Bir gardiyandın ve bir “hayır” dedin. Sonra mahkûm oldun. Literatürde “G4/M13” olarak geçiyorsun; bir dipnot, bir istisna.",
"Ama o iki günü hiç unutmadın. Bir numaranın içinde, bir önlüğün içinde, bir yere eğilmiş beden olarak; ve yukarıda, aynalı bir gözlükte, kendi yüzün. Bir gün önce o gözlüğün arkasındaydın. Bir sistem, bir insanı bir gecede bir yerden öbürüne taşıyabiliyor. Ve iki taraf da, birbirini, kendisini değil, bir rolü görüyor.",
P(function(d){ return d.mahkum_hayir; }, "Bir mahkûm olarak da “hayır” dedin. Burak yere inmeni istediğinde inmedin. Ertesi gün tecrit odasında dört saat geçirdin; bir süpürge dolabında, karanlıkta. Bir “hayır”ın bedeli, hangi tarafta durursan dur, aynı: yalnızlık."),
P(function(d){ return d.dayanisma; }, "Hücre arkadaşlarına “Yarın birlikte” dedin. Ertesi gün sayımda dokuz mahkûm aynı anda yere inmeyi reddetti. Burak ne yapacağını bilemedi. Bir “hayır”, birden çok ağızdan söylenince, başka bir şeye dönüşüyor."),
"Bir sosyolog olmadın. Bir avukat oldun; insan hakları. Cezaevi koşullarıyla ilgili davalar. Her yıl birkaç kez bir cezaevine gidiyorsun; müvekkillerini görmeye. Koridorlarda gardiyanlar, hücrelerde mahkûmlar.",
"Ve her seferinde, bir gardiyanın yüzüne bakıyorsun. Gözlüğü yok; ama bir şey var yüzünde, tanıdık. Bir rolün, bir insana yapıştığı yer.",
"Bazen bir gardiyanla konuşuyorsun. Adını soruyorsun. Çoğu şaşırıyor; kimse sormamış. Bir ad, bir rolün içinde açılan küçük bir pencere."
]},

son_tanik: { son: true, baslik: "Tanık", metin: [
"Deneyi sen durdurmadın; dekan durdurdu. Ama dekana sen gittin. Bir sistemin içinden çıkıp sistemin dışındaki birine “Bakın” dedin. Bazen ahlak bundan ibaret: bakılmasını sağlamak.",
"Tuncay Hoca'nın makalesinde senin bir dipnotun var: “G4, deneyin erken sonlandırılmasında rol oynamıştır.” Rol. O kelimeyi orada bile kullanmış.",
P(function(d){ return d.mektup_dergi; }, "Dergiye yazdığın mektup bugün bazı etik derslerinde okutuluyor. Bir öğrenci bir gün sana e-posta attı: “Ben de bir deneyde gözlemciyim. Bir şey yanlış gidiyor. Ne yapmalıyım?” Ona yazdın: “Yukarı çık. Birine göster. Tek başına durdurmaya çalışma; ama tek başına susma da.”"),
"Merve doktorasını bitirdi; Tuncay Hoca'dan ayrıldı. Şimdi bir başka üniversitede araştırma etiği kurulunun başkanı. Her yıl bir konferansta karşılaşıyorsunuz. Bir keresinde sana dedi ki: “O sabah kantinde sen ‘Ben giderim’ demeseydin, ben gitmezdim. Bunu biliyorsun, değil mi?”",
"Bir tanığın gücü küçüktür. Bir telefon, bir merdiven, bir dekanın kapısı. Ama bir sistemi ayakta tutan şey, çoğu zaman, hiç kimsenin o merdiveni çıkmamasıdır.",
P(function(d){ return d.burak_cevap === "gercek" || d.burak_cevap === "bulusma"; }, "Burak'a cevap verdin. Gördüğünü. Bir tanığın son işi bu: görüleni, görülmesi gerekene göstermek. Yirmi yıl sonra bile."),
"Bazen hâlâ o telefon kulübesini düşünüyorsun. Gece yarısı, fakültenin karanlık holü, elinde bir ahize, aşağıdan gelen düdük. Ve bir sesin, “Rolüne dön” diyen sesin. Dönmedin. O gece bir şeyi kurtarmadın belki. Ama bir şeyin devam etmesine izin vermedin."
]},

son_iki_yuz: { son: true, baslik: "İki Yüz", metin: [
"Kayıtlarda kenarda duran bir gardiyansın. Makalede “pasif suç ortaklığının” örneği. Bir derste, bir slaytta, aynalı gözlüklü bir siluet, eğik sırtları izliyor.",
"Ve kayıtta olmayanlar: lavaboların altındaki ekmekler, bir mendil kâğıdına yazılmış bir mektup, bir annenin kapısı.",
"Hangisi gerçek? İkisi de. Bir insanın iki yüzü olabilir; biri görünen, biri görünmeyen. Ve dünya yalnızca görünene bakar.",
P(function(d){ return d.mektup_goturdu; }, "Kemal'in annesi o mektubu hâlâ saklıyor. Bir bayram Kemal sana gösterdi; bir çerçevenin içinde, bir mendil kâğıdı, kurşun kalem. “Kayboluyorum.” Altında annesinin el yazısıyla bir not: “Emre getirdi.”"),
"Bunun bir erdem mi, bir korkaklık mı olduğunu hâlâ bilmiyorsun. Gizlice iyilik yapmak; açıkça kötülüğe karşı çıkmamak. Bir sistemin içinde hayatta kalmanın en eski yolu. Pek çok insan böyle yaşadı; savaşlarda, cezaevlerinde, ofislerde. Kahraman değiller. Kötü de değiller. Görünmezler.",
"Kemal biliyor. Kemal ile her yıl bir kez buluşuyorsunuz, aynı bankta, fakültenin bahçesinde. Bir yıl Kemal bir şey söyledi: “Senin ekmeğin olmasaydı dayanamazdım. Ama Burak'a ‘hayır’ deseydin, belki hiç ekmeğe ihtiyacım olmazdı.”",
"İkisi de doğru. Bir yüzle bir insanı kurtardın; öbür yüzle bir sistemin devam etmesine izin verdin. Bu iki yüz hâlâ seninle; aynada her sabah ikisini birden görüyorsun."
]},

son_ayna: { son: true, baslik: "Ayna", metin: [
"Bodrum katında bir aynalı gözlük taktın. Ve o gözlükte, sonunda, kendi yüzünü gördün.",
"Bu hikâyede bir şey öğrendin: bir insanı bir durum değiştirebilir. Ama değişimin yönünü bir insan seçer; küçük, sessiz, görünmeyen anlarda. Bir sayımda yavaş saymak. Bir isme numarası yerine adıyla seslenmek. Bir kameraya bakmak. Bir kapıyı açmak.",
P(function(d){ return d.sorusturma || d.izledi_toplanti; }, "Yıllar sonra bir ofiste, bir başka bodrumu tanıdın; bir toplantı odasında, bir kürsüde, gülen bir ekipte. Ve bu sefer kenarda durmadın. Bir şeyi bir kez görmüş olmak, onu bir daha görmemeyi imkânsız kılıyor."),
P(function(d){ return d.burak_cevap === "bulusma"; }, "Burak'la buluştunuz. Bir kafede, yirmi yıl sonra. Gözlüksüz. Uzun süre konuşmadınız. Sonra Burak oğlunun fotoğrafını gösterdi. “Ona bir gün anlatacağım,” dedi. “Bodrumu. Ne yaptığımı. Bir rolün arkasına saklanmadan.” Sen de bir şey anlattın: düdüğü, sayımı, kendi payını. İki eski gardiyan, bir kafede, birbirinin aynası."),
"Kemal'le bağınız kopmadı. Her yıl aynı bankta. Bir yıl Kemal bir şey getirdi: annesinin börek tarifi, bir kâğıda yazılmış. “Bunu sana veriyorum,” dedi. “Yedi yaşındaki çocuk ağlamasın diye.”",
"Bir insan normal olduğu için bir bodrumda kötülük yapabilir. Bu deneyin söylediği buydu. Ama bir insan, normal olduğu için, bir bodrumda bir kapıyı da açabilir. Bu da aynı deneyin söylediği; yalnızca kimse onu bir makaleye yazmadı."
]}

},

ayna: function(d){
  var out = [];
  var v = d.vicdan, u = d.uyum, t = d.tanik;
  if(v >= u && v >= t) out.push("Bu hikâyede en çok vicdanına yaslandın: bir ada, bir yüze, bir arkadaşa. Vicdan bir sistemin içinde en kolay kaybolan şeydir; ve sen onu, en azından bazı anlarda, bulmaya devam ettin.");
  else if(u >= t) out.push("Bu hikâyede en çok uyuma yaslandın: role, ekibe, düzene. Uyum, bir grubun içinde hayatta kalmanın yoludur. Ama uyduğun şeyin ne olduğunu sormadan uymak, bir gün aynada tanımadığın bir yüz bırakır.");
  else out.push("Bu hikâyede en çok tanıklığa yaslandın: kameralara, kayıtlara, merdivenleri çıkıp birine göstermeye. Bir tanık her şeyi değiştirmez. Ama bir sistemin karanlıkta işlemesini zorlaştırır.");
  if(d.gozluk === false) out.push("İlk gün aynalı gözlüğü takmadın. Bir yüzün açık kalması, bir rolün ilk çatlağıdır.");
  if(d.kol === "rol") out.push("Dördüncü gece düdüğü çaldın. Bir oyunun oyun olmaktan çıktığı anı, sen de hissetmedin.");
  if(d.mahkum) out.push("Bir “hayır” seni öbür tarafa taşıdı. Bir sistemin dışı olmadığını, kendi bedeninde öğrendin.");
  if(d.hakan_suc) out.push("Bir yalanın bir başkasının sırtına bindiğini gördün; ve o yalanı sen söyledin.");
  return out;
},

dipnot: [
{ ad: "Rol ve kimlik", t: "Philip Zimbardo'nun 1971'deki Stanford Hapishane Deneyi, rastgele gardiyan ve mahkûm olarak atanan sıradan öğrencilerin birkaç gün içinde rollerine nasıl büründüğünü göstermek için tasarlandı ve altıncı günde durduruldu. Sonraki yıllarda deneyin yöntemi ciddi biçimde eleştirildi: gardiyanlara nasıl davranmaları gerektiğinin ima edildiği, Zimbardo'nun kendisinin de “müdür” olarak deneyin içinde yer aldığı ortaya çıktı." },
{ ad: "Durumun gücü", t: "Sosyal psikoloji, davranışlarımızın kişiliğimizden çok içinde bulunduğumuz duruma bağlı olabileceğini öne sürer (Lee Ross bunu “temel yükleme hatası” olarak adlandırır: başkalarının davranışını kişiliklerine, kendimizinkini koşullara bağlarız). Ama durumun gücü bir açıklamadır, bir mazeret değil. Aynı durumda farklı seçimler yapan insanlar her zaman vardır." },
{ ad: "Kalabalıkta kaybolma", t: "Bireysizleşme (deindividuation), insanların anonim oldukları ve bir grubun parçası oldukları durumlarda kişisel sorumluluk duygularını kaybetmeleridir. Aynalı gözlükler, üniformalar, numaralar bu anonimliği üretir. Gustave Le Bon bunu “kitle ruhu” olarak tanımlamıştı; ama modern araştırmalar anonimliğin her zaman kötülüğe değil, grubun normlarına uyuma yol açtığını gösterir." },
{ ad: "Otoriteye itaat", t: "Stanley Milgram'ın deneyleri, sıradan insanların bir otoritenin talimatıyla başkalarına zarar verebileceğini gösterdi. Hannah Arendt'in “kötülüğün sıradanlığı” kavramı da bunu anlatır: büyük kötülükler çoğu zaman canavarlar tarafından değil, işini yaptığını düşünen sıradan insanlar tarafından işlenir." }
]
});
})();
