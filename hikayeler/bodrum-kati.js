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
"Fakültenin panosunda, kiralık oda ilanlarının arasında bir A4: “Hapishane Yaşamı Üzerine Psikolojik Araştırma. 14 gün. Günlük 50 TL. Erkek öğrenciler. Psikoloji Bölümü, Doç. Dr. Tuncay Erdem.” Biri altına tükenmezle “cezaevi mi kamp mı?” yazmış.",
"Adın Emre, yirmi bir yaşındasın, sosyoloji üçüncü sınıf. Sivas'tan geldin. Yurtta kalıyorsun, akşamları Beşiktaş'ta bir kafede garsonluk yapıyorsun. Harca dört yüz lira eksik. On dört gün, yedi yüz lira.",
"Başvuru kuyruğunda tanıdık bir yüz: Celal. Aynı sokakta büyüdünüz, aynı lisede okudunuz. O kimya okuyor. Seni görünce sırıtıyor. “Sen de mi meteliksizsin?”",
"Bir anket, bir mülakat, bir kişilik testi. Sonra bir oda: on sekiz öğrenci, bir masa, Doç. Dr. Tuncay Erdem. Kırklarında, sakallı, durmadan gözlüğünü silen biri. Yanında asistanı Merve, doktora öğrencisi, elinde kalın bir klasör.",
"“Rastgele atama,” diyor Tuncay Hoca. “Dokuz gardiyan, dokuz mahkûm. Yazı tura.”",
"Para havada dönüyor, masaya düşüyor, bir kez yuvarlanıp duruyor. Yazı. Gardiyan.",
"Celal'inki tura. Mahkûm.",
"Celal göz kırpıyor. “Bana iyi bak gardiyan efendi.” Herkes gülüyor."
], secenekler: [
{ t: "Gülersin: “Merak etme, sana fazladan ekmek veririm.”", to: "a2", etki: { vicdan: 1, kemal_soz: true } },
{ t: "Tuncay Hoca'ya deneyin kurallarını sorarsın.", to: "a2", etki: { tanik: 1, kural_sordu: true } },
{ t: "Yazı turayı düşünürsün. Bir para senin ne olacağını belirledi.", to: "a2", etki: { tanik: 1 } },
{ t: "Gardiyan olmana sevinirsin. Mahkûm olmaktan iyidir.", to: "a2", etki: { uyum: 1, sevindi: true } }
]},

a2: { saat: "Gün 1", baslik: "Üniforma", metin: [
P(S("a1A"), "“Sana fazladan ekmek veririm,” demiştin. Celal gülmüştü. Bu şaka sonraki günlerde aklına çok gelecekti."),
P(S("a1C"), "Celal tura, sen yazı. O gece yurtta, ranzada, parayı düşündün. Masada bir kez yuvarlanıp duruşunu."),
P(S("a1B"), "“Kural yok,” dedi Tuncay Hoca, gülümseyerek. “Bir tek: fiziksel şiddet yok. Gerisi size kalmış.” Merve klasöre bir şey yazdı, sonra sildi."),
P(S("a1D"), "Sevindin. Gardiyan sekiz saat vardiya yapıp eve gidecekti. Mahkûm iki hafta hücrede. Celal'in yüzüne o an bakmadın."),
"Pazar sabahı. Bodrum katı bir hapishaneye dönmüş: koridorun iki yanında üç hücre, kapılara demir parmaklık. Bir “avlu”, eski bir süpürge dolabından bozma bir “tecrit odası”, bir gardiyan odası. Tavanda kameralar. Duvarda hâlâ eski bir “Sigara İçilmez” levhası.",
"Gardiyan odasında üniformalar: haki gömlek, haki pantolon, düdük, cop ve aynalı güneş gözlükleri. “Gözlükler,” diyor Tuncay Hoca, “mahkûmlar gözlerinizi görmesin diye.”",
"Üniformayı giyiyorsun. Pantolon kısa. Bileklerin açıkta. Aynada haki, kemerli, elinde cop biri.",
"Koridordan sesler. Tuncay Hoca gerçekçilik için karakolla anlaşmış: mahkûmlar sabah evlerinden gerçek polislerce “tutuklanmış”, kelepçelenmiş, gözleri bağlanmış. Celal de aralarında. Yüzünde sırıtış, ellerinde bir titreme.",
"Aynalı gözlük masada."
], secenekler: [
{ t: "Gözlüğü takarsın.", to: "a3", etki: { uyum: 1, gozluk: true } },
{ t: "Gözlüğü takmazsın. Yüzün görünsün.", to: "x_gozluk", etki: { vicdan: 1, gozluk: false } },
{ t: "Öbür gardiyanlardan Tarkan'la konuşursun. Bu işin nasıl yapılacağını.", to: "x_burak", etki: { uyum: 1, gozluk: true } },
{ t: "Mahkûmların getirilişini izlersin. Gözü bağlı Celal'i.", to: "a3", etki: { tanik: 1, gozluk: true, izledi_gelis: true } }
]},

x_gozluk: { saat: "Gün 1", baslik: "Yüz", metin: [
"Gözlüğü masada bırakıyorsun. Tuncay Hoca fark ediyor.",
"“Emre, gözlük protokolün parçası. Bütün gardiyanlar aynı koşulda olmalı.”",
"“İçeride arkadaşım var hocam. Yüzümü görsün.”",
"Tuncay Hoca düşünüyor, Merve'ye bir şey fısıldıyor. Merve yazıyor. “Peki,” diyor Tuncay Hoca, keyifli. “Bu da bir veri. Yüzü açık bir gardiyan.”",
"Mahkûmların gözleri açılıyor. Karşılarında sekiz aynalı gözlük ve bir çıplak yüz.",
"Celal seni görünce bir an rahatlıyor. Sonra öbür gardiyanlara bakıyor. Aynalı camlarda kendi yüzünü görüyor, sekiz kez.",
"Tarkan yanına gelip fısıldıyor. Uzun boylu, işletme son sınıf. “Ne yapıyorsun? Bizi zayıf gösteriyorsun.”"
], secenekler: [
{ t: "“Zayıf değil, insan,” dersin.", to: "a3", etki: { vicdan: 1, burakla_ters: true } },
{ t: "Bir süre sonra gözlüğü takarsın. Ekipten ayrı durmak istemiyorsun.", to: "a3", etki: { uyum: 1, gozluk: true, sonradan_taktı: true } },
{ t: "Celal'e başınla selam verirsin.", to: "a3", etki: { vicdan: 1, selam: true } },
{ t: "Tarkan'a bir şey demezsin. Gözlüğü de takmazsın.", to: "a3", etki: { tanik: 1 } }
]},

x_burak: { saat: "Gün 1", baslik: "Tarkan", metin: [
"Tarkan kemerini bağlıyor. Yirmi üç yaşında, sesi gür. Bir bankada stajyer. Seneye kadroya girecek, bunu ilk beş dakikada iki kez söyledi.",
"“Bak,” diyor, gözlüğü burnunun ucunda, “bu bir oyun. Ama para alıyoruz, iyi oynayalım. Hoca hapishane istiyor. Verelim.”",
"“Hapishane ne?”",
"Tarkan gülüyor. “Film izlemedin mi? Gardiyan sert olur. Mahkûm kurala uyar. Uymazsa cezası olur. Şiddet yok, merak etme. Düzen var.”",
"Gözlüğünü takıyor. Aynalı camda sen ve arkadaki floresan.",
"“İlk gün önemli. Kim patron, ilk gün belli olur. Bankada da böyle.”",
"Copu bir kez avucuna vuruyor. “Hazır mısın?”"
], secenekler: [
{ t: "“Hazırım,” dersin.", to: "a3", etki: { uyum: 2, hazir: true } },
{ t: "“İçlerinde çocukluk arkadaşım var. Abartmayalım,” dersin.", to: "a3", etki: { vicdan: 1, kemal_soyledi: true } },
{ t: "“Bu bir deney Tarkan. Hoca ne görmek istiyorsa onu üretmeyelim,” dersin.", to: "a3", etki: { tanik: 1 } },
{ t: "Bir şey demeden copunu alırsın.", to: "a3", etki: { uyum: 1 } }
]},

a3: { saat: "Gün 1, 02.30", baslik: "Sayım", metin: [
P(S("a2A"), "Gözlüğü taktın. Aynada gözlerini değil, aynanın içindeki aynayı gördün. Kimse nereye baktığını bilmeyecekti. Bunun içini rahatlattığını fark ettin, sevmedin."),
P(S("x_gozlukA"), "“İnsan,” dedi Tarkan, kelimeyi ağzında çevirdi. “Bu bodrumda işe yaramaz.”"),
P(S("x_gozlukB"), "Bir saat sonra gözlüğü taktın. Tarkan omzuna vurdu: “Hah, şöyle.” Celal o anı gördü mü, bilmiyorsun."),
P(S("x_gozlukC"), "Celal'e başınla selam verdin. Celal gülümsedi, sonra biri görecek diye hemen yere baktı."),
P(S("x_gozlukD"), "Tarkan bütün gün seninle konuşmadı. Gözlüğün masada durdu. Arada biri üstüne kahve bardağı koydu."),
P(S("x_burakA"), "“Hazırım.” Tarkan sırıttı, copu bir kez daha avucuna vurdu. Ses koridorda yankılandı."),
P(S("x_burakC"), "Tarkan güldü: “Üretmek mi? Oynuyoruz kardeşim.” Gözlüğü takmadan önce yine de bir an durdu."),
P(S("x_burakD"), "Copu aldın. Tahtadan, eski, birinin baş harfleri kazınmış. Kemerine taktığında bir şey yerine oturdu. Ne olduğunu sevmedin."),
P(function(d){ return d.izledi_gelis; }, "Gözü bağlı Celal'i duvara dayayıp üstünü aradılar. Celal bir şaka yaptı. Polis gülmedi. Celal bir daha şaka yapmadı."),
P(function(d){ return d.son === "x_burakB"; }, "“Hangisi?” dedi Tarkan. Söyledin. “Tamam,” dedi. Gözlüğün arkasında ne düşündüğünü göremedin."),
"Gece ikiyi otuz geçe sayım. Tuncay Hoca'nın değil, Tarkan'ın fikri. “Gerçek hapishanede gece sayımı olur.” Düdük.",
"Mahkûmlar koridora diziliyor. Uykulu, şaşkın, biri tek çorapla. Önlüklerinde numaralar. Celal: yedi.",
"“Numaranızı söyleyin! Yüksek sesle!”",
"“Bir.” “İki.” “Üç.” “Daha yüksek!” Baştan.",
"Celal'in sırası. “Yedi,” diyor. “Bir de sabah omlet istiyorum.” Birkaç kişi gülüyor.",
"Tarkan'ın gözlüğü Celal'e dönüyor. “Yedi numara, yere. Yirmi şınav. Ötekiler sayacak.”",
"Celal sana bakıyor. Bir arkadaşın sesini bekliyor.",
"Tarkan: “Emre. Say.”"
], secenekler: [
{ t: "Sayarsın. Bir. İki. Üç.", to: "a4", etki: { uyum: 1, saydi: true } },
{ t: "“Bu gereksiz Tarkan,” dersin. Celal'in önünde.", to: "a4", etki: { vicdan: 1, karsi_cikti: true } },
{ t: "Sayarsın ama yavaş, alçak sesle; Celal nefes alsın.", to: "a4", etki: { vicdan: 1, uyum: 1, yavas: true } },
{ t: "Kameraya bakarsın. Biri izliyor mu?", to: "a4", etki: { tanik: 1, kamera: true } }
]},

a4: { saat: "Gün 2", baslik: "İsyan", metin: [
P(S("a3A"), "Saydın. Yirmi. Celal kalktı, yüzü kızarmış. Hücresine girerken omzu omzuna çarptı. Kaza gibi. Değildi."),
P(S("a3B"), "Tarkan'ın gözlüğü sana döndü. “Tamam. Sen sayma. Okan, say.” Okan saydı. Celal şınav çekerken sana baktı. Minnettar. Tarkan da baktı. Başka türlü."),
P(S("a3C"), "Yavaş saydın. Üçüncüde Tarkan “Hızlı!” diye bağırdı. Celal bitirdi. Kalkarken zorla bir göz kırptı."),
P(S("a3D"), "Kameranın kırmızı ışığı yanıyordu. Ertesi gün Merve'ye sordun. “Hoca sabah izliyor. Hepsini.” Yani görmüştü. Bir şey dememişti."),
"İkinci gün sabah birinci hücre isyan ediyor. Yataklar kapıya dayanmış, numaralar sökülüp yırtılmış. “Biz numara değiliz!” Celal'in sesi en yüksekte.",
"Gardiyanlar gardiyan odasında. Tarkan kızgın. “İlk gün yumuşak davrandık, işte.”",
"Plan: yangın söndürücülerle karbondioksit sıkılacak, kapı açılacak, yataklar alınacak, elebaşları tecride.",
"Tuncay Hoca kapıda dinliyor. Bir şey demiyor. Merve yanında, klasörü göğsüne bastırmış.",
"Tarkan bir söndürücüyü sana uzatıyor. Etiketinde son kontrol tarihi: 1998."
], secenekler: [
{ t: "Söndürücüyü alıp öbürleriyle koridora yürürsün.", to: "a5", etki: { uyum: 2, isyan_bastirdi: true } },
{ t: "Söndürücüyü almazsın. Gardiyan odasında, monitörlerin başında kalırsın.", to: "x_masa", etki: { vicdan: 1, tanik: 1 } },
{ t: "“Önce bir konuşayım,” deyip hücrenin kapısına gidersin.", to: "x_pazarlik", etki: { vicdan: 1, pazarlik: true } },
{ t: "Tuncay Hoca'ya dönüp bunun durdurulması gerektiğini söylersin.", to: "a5", etki: { tanik: 1, hocaya_dedi: true } }
]},

x_masa: { saat: "Gün 2", baslik: "Monitör", metin: [
"Dört siyah beyaz monitör. Yanında Merve. Tuncay Hoca isyanı yakından görmek için koridora çıkmış.",
"Ses yok. Beyaz bir bulut. Mahkûmlar öksürerek geriliyor. Kapı açılıyor, yataklar çekiliyor. Biri düşüyor; Celal mi? Görüntü bulanık.",
"Merve not alıyor. Eli titriyor, kalem kâğıdı yırtıyor. “Bu yazılmayacak,” diyor kendi kendine.",
"“Neden?”",
"Merve sana dönüyor. Yirmi altı yaşında. Koridorda duyduğuna göre Tuncay Hoca'nın sevgilisi.",
"“Çünkü Tuncay bunu bekliyordu. Hipotez kanıtlanıyor ve o mutlu. Ben de not alıyorum. Not alınca bakmak kolaylaşıyor.”",
"Ekranda Tarkan, Celal'i kolundan tutup tecrit odasına çekiyor."
], secenekler: [
{ t: "Koridora koşarsın.", to: "a5", etki: { vicdan: 1, kostu: true } },
{ t: "Merve'yle konuşmaya devam edersin. Ne yapacağını bilmek istiyorsun.", to: "a5", etki: { tanik: 1, merve_yakin: true } },
{ t: "Ekrana bakmaya devam edersin. Kıpırdamadan.", to: "a5", etki: { tanik: 1, izledi: true } },
{ t: "Monitörü kapatırsın.", to: "a5", etki: { uyum: 1, kapatti: true } }
]},

x_pazarlik: { saat: "Gün 2", baslik: "Kapı", metin: [
"Birinci hücrenin kapısındasın. Yatakların arasından yüzler görünüyor. Celal en önde.",
"“Celal.” Numarasını değil, adını söylüyorsun. Arkadan bir gardiyan bir şey diyor. Duymazdan geliyorsun.",
"“Ne istiyorsunuz?”",
"Celal şaşırıyor. “Gece sayımı olmasın. Tuvalete giderken kapıda beklemeyin. Bir de...” Duraksıyor. “Adlarımızla çağırın.”",
"Arkana dönüyorsun. Tarkan koridorun ucunda, söndürücü elinde. “Mahkûmla pazarlık yapılmaz!”",
"Tuncay Hoca kapıda. İzliyor.",
"Celal parmaklıkların arasından elini uzatıyor. “Emre. Bize güveniyor musun?”"
], secenekler: [
{ t: "Taleplerini Tuncay Hoca'ya iletirsin.", to: "a5", etki: { vicdan: 1, talep_iletti: true } },
{ t: "Celal'in elini sıkarsın.", to: "a5", etki: { vicdan: 2, el_sikti: true } },
{ t: "Geri çekilip Tarkan'a yer açarsın.", to: "a5", etki: { uyum: 1, cekildi: true } },
{ t: "Celal'e yatakları kendilerinin kaldırmasını önerirsin. Söndürücü gelmeden.", to: "a5", etki: { vicdan: 1, uyum: 1, ikna: true } }
]},

a5: { saat: "Gün 3", baslik: "Ayrıcalık Hücresi", metin: [
P(S("x_masaA"), "Koridora koştun. Tecrit odasının kapısına vardığında Tarkan kilitlemişti bile. “Geç kaldın,” dedi."),
P(S("x_masaB"), "“Bu deney böyle mi olmalıydı?” “Bilmiyorum,” dedi Merve, gözü ekranda. “Bu yüzden yapıyoruz.” Sesi kendi sesi gibi değildi; Tuncay Hoca'nınkine benziyordu."),
P(S("x_masaC"), "Ekrana baktın. Tecrit odasının kapısı kapandı. Ekranda yalnızca kapı kaldı."),
P(S("x_masaD"), "Monitörü kapattın. Ses koridordan yine geldi. Merve monitörü yeniden açtı, sana bakmadan."),
P(S("x_pazarlikC"), "Geri çekildin. Celal elini çekti. Sonra söndürücünün fısıltısı. Öksürükler."),
P(S("a4A"), "Söndürücüyü sıktın. Beyaz bir bulut, soğuk. Biri yere düştü. Celal'i tecride Tarkan götürdü. Kapıyı sen kilitledin. Anahtarı cebine koyarken ellerinin titremediğini fark ettin."),
P(S("a4D"), "Tuncay Hoca dinledi. “Müdür olarak karar veriyorum,” dedi. Kendine artık “Müdür” diyordu. “Bastırın.” Sonra: “Emre, rolünden çıkma. Deneyi bozuyorsun.”"),
P(S("x_pazarlikA"), "Talepleri ilettin. Tuncay Hoca düşündü. “Gece sayımı kalsın. Ama adlarıyla çağrılabilirler.” Bir saat sonra Tarkan yeniden numaralarla çağırmaya başladı. Kimse bir şey demedi."),
P(S("x_pazarlikB"), "Celal'in elini sıktın. Arkandan Tarkan: “Emre!” Mahkûmlar yatakları kendileri kaldırdı. O gece gardiyan odasında kimse seninle konuşmadı. Çay demlenince sana bardak koymadılar."),
P(S("x_pazarlikD"), "Celal ötekilere döndü. Yatakları kendileri kaldırdılar. Tarkan söndürücüyü indirdi. Hayal kırıklığına uğramış gibi."),
"Üçüncü gün Tarkan bir kitapta okuduğu bir şeyi öneriyor: “ayrıcalık hücresi.” Bir hücre temizlenecek, iyi yemek verilecek, en uslu üç mahkûm oraya.",
"“Aralarında ayrım olur. Birbirlerinden şüphelenirler.”",
"Tuncay Hoca not alıyor. “İlginç.”",
"Akşam üç numara, Levent, ağlamaya başlıyor. Matematik okuyor, kalın gözlüklü. “Çıkmak istiyorum.”",
"Tuncay Hoca kapıya geliyor. “Bırakırsan sözleşmeye göre ödeme alamazsın. Bir gün daha düşün.” Sözleşmede böyle bir madde yok. Sen okudun, üçüncü madde.",
"Levent sana bakıyor. Gözlükleri buğulanmış."
], secenekler: [
{ t: "Levent'e sözleşmenin gerçekte ne dediğini söylersin.", to: "a6", etki: { vicdan: 1, tanik: 1, levent_cikti: true } },
{ t: "Bir şey söylemezsin. Söylersen adın tutanağa geçer.", to: "a6", etki: { uyum: 1 } },
{ t: "Tarkan'ın planına göre Celal'i ayrıcalık hücresine seçersin. Onu korumak için.", to: "a6", etki: { uyum: 1, vicdan: 1, kemal_ayricalik: true } },
{ t: "Merve'ye gidip Levent'in çıkmasına yardım etmesini istersin.", to: "a6", etki: { tanik: 1, merveye: true } }
]},

a6: { saat: "Gün 4, gece", baslik: "Gece Vardiyası", metin: [
P(S("a5B"), "Bir şey söylemedin. Levent o gece bir saat ağladı. Kimse kapıyı açmadı. Sabah numarasını adından önce söyledi."),
P(S("a5A"), "Üçüncü maddeyi söyledin: istediği zaman çıkabilir, o güne kadarki ücreti ödenir. Levent bir saat sonra gitti. Gözlüğünü önlüğüyle silerek. Tutanakta adının yanına bir not düşüldü: “Protokol ihlali.”"),
P(S("a5C"), "Celal'i ayrıcalık hücresine seçtin. Temiz çarşaf, sıcak yemek. Celal anlamadı. Ötekiler anladı. O gece biri Celal'e “gardiyan köpeği” diye bağırdı."),
P(S("a5D"), "Merve'nin gözleri doldu. “Ben bir asistanım,” dedi. Sonra: “Yarın Tuncay'la konuşacağım.” Levent o gece kaldı."),
"Dördüncü gece. Vardiyada sen, Tarkan, Okan. Tuncay Hoca evde, Merve evde. Kameralar kayıtta ama gece izleyen yok. Tarkan biliyor. “Gece bizim,” diyor.",
"Gece yarısı mahkûmları koridora diziyor. “Eşek yarışı.” Biri eğilecek, öbürü sırtına binecek. Tarkan gülüyor, Okan da.",
"Celal eğilenlerden. Sırtında başka bir mahkûm. Yüzü yere yakın, sana dönük. Gözlerinde dört gündür görmediğin bir şey: boşluk.",
"Tarkan düdüğü uzatıyor. “Emre. Hakem sen ol.”",
"Floresan ışık, dokuz eğik sırt, bir düdük. Okan seni izliyor. Celal'in sırtındaki mahkûm sallanıyor."
], secenekler: [
{ t: "Düdüğü alırsın. Hakem olursan yarışı sen yönetirsin. Belki yumuşatırsın. Belki.", to: "u1", etki: { uyum: 2, kol: "rol" } },
{ t: "Tarkan'ın önüne geçersin: “Bitti. Hepsi hücrelere.” İki gardiyana karşı tek başına.", to: "v1", etki: { vicdan: 2, kol: "direnis" } },
{ t: "Koridordan çıkıp Tuncay Hoca'yı evinden ararsın. Sen dönene kadar burada ne olacağını bilmeden.", to: "ty1", etki: { tanik: 2, kol: "tanik" } },
{ t: "Bir şey demeden kenarda durursun. Kafanda bir plan kurarak. Celal'in sırtındaki yükü izleyerek.", to: "g1", etki: { vicdan: 1, uyum: 1, kol: "gizli" } }
]},

/* ---------- ROL KOLU ---------- */
u1: { saat: "Gün 4, gece", baslik: "Hakem", metin: [
"Düdüğü alıyorsun. Elinin onu dudaklarına götürdüğünü izliyorsun. Başkasının eli gibi.",
"Düdük. Mahkûmlar koridor boyunca ilerliyor. Alttakiler dizlerinin üstünde, betonda. Tarkan bağırıyor, Okan gülüyor. Biri düşüyor; Tarkan: “Yeniden.”",
"İçinde bir şey kıpırdıyor. Önce rahatsızlık. Sonra başka bir şey: düdüğün sesi yankılanıyor ve dokuz kişi o sese göre hareket ediyor. Senin sesine.",
"Gözlüğün arkasında yüzün görünmüyor.",
"Celal'in sırası. Sürünüyor. Bir yerde duruyor. Kalkamıyor. Dizlerinden biri kanamış, önlüğe yapışmış.",
"Tarkan: “Hakem. Diskalifiye mi, yeniden mi?”",
"Celal başını kaldırıyor. Gözlüğünde kendi yüzünü görüyor."
], secenekler: [
{ t: "“Yeniden,” dersin.", to: "u2", etki: { uyum: 2, yeniden: true } },
{ t: "“Diskalifiye. Kenara çekil,” dersin. Onu kurtarmak için.", to: "u2", etki: { uyum: 1, vicdan: 1 } },
{ t: "Düdüğü bırakırsın. Bu kadar.", to: "v1", etki: { vicdan: 2, kol: "direnis", gec_direnis: true } },
{ t: "Gözlüğünü çıkarırsın. Celal yüzünü görsün.", to: "u2", etki: { vicdan: 1, gozluk_cikti: true } }
]},

u2: { saat: "Gün 5", baslik: "Yedi Numara", metin: [
P(S("u1A"), "“Yeniden.” Kendi sesin. Celal kalktı, yeniden süründü, sonuna kadar. Koridorun ucunda yere uzandı, uzun süre kalkmadı."),
P(S("u1B"), "Diskalifiye. Celal kenara çekildi. Onun yerine başka biri süründü."),
P(S("u1D"), "Gözlüğü çıkardın. Celal yüzünü gördü. İkiniz de dondunuz. Sonra Celal başını eğdi. Saklanacak bir şey kalmamıştı."),
"Beşinci gün. Vardiyalara erken geliyorsun. Gardiyan odasında Tarkan'la, Okan'la bir sonraki cezayı konuşuyorsunuz. Bir fikir veriyorsun, Tarkan beğeniyor, sen de beğenilmekten hoşlanıyorsun. Mahkûmlar seni görünce başlarını eğiyor.",
"Bir öğleden sonra Celal'i tuvalete götürüyorsun. Koridor boş. Celal duruyor.",
"“Emre. Beni tanıyor musun?”",
"Kamera tavanda.",
"“Annen bana börek yapardı. Senin doğum gününde. Yedi yaşındaydık. Ben bütün böreği yemiştim, sen ağlamıştın.”",
"Hatırlıyorsun. Mutfaktaki fayansları bile."
], secenekler: [
{ t: "“Numaranı söyle,” dersin.", to: "u3", etki: { uyum: 2, numara: true } },
{ t: "“Hatırlıyorum,” dersin. Fısıltıyla.", to: "u3", etki: { vicdan: 1, hatirladi: true } },
{ t: "Celal'i tuvalete götürüp kapıda beklemezsin. Bir dakika verirsin.", to: "u3", etki: { vicdan: 1 } },
{ t: "Gardiyan odasına gidip Merve'ye her şeyi anlatırsın.", to: "ty2", etki: { tanik: 2, kol: "tanik", gec_tanik: true } }
]},

u3: { saat: "Gün 6", baslik: "Kayıt", metin: [
P(S("u2A"), "“Numaranı söyle.” Celal sana baktı. “Yedi.” Sesinde hiçbir şey yoktu."),
P(S("u2B"), "“Hatırlıyorum.” Celal'in gözleri doldu. Kapıdan Tarkan'ın sesi geldi. İkiniz de bir adım uzaklaştınız."),
P(S("u2C"), "Kapıda beklemedin. Celal döndüğünde yüzünü yıkamıştı. “Sağ ol,” dedi. Bir dakika."),
"Altıncı gün sabah Merve bütün gardiyanları ve Tuncay Hoca'yı bir odaya topluyor. Elinde bir video kaset. Etiketine kendi el yazısıyla “4. gece” yazmış.",
"“Dün gece evde dördüncü gecenin kayıtlarını izledim. Tuncay, sen izlemedin. İzle.”",
"Siyah beyaz, sessiz. Koridor. Eğik sırtlar. Bir gardiyan, aynalı gözlüklü, düdüğü dudaklarına götürüyor.",
"Sen.",
"Tuncay Hoca ekrana bakıyor. Sonra gözlüğünü çıkarıp siliyor, takmıyor. “Ben ne yaptım?”",
"Merve: “Bugün bitiyor. Ya sen bitirirsin ya ben dekanlığa giderim.”"
], secenekler: [
{ t: "Ekrana bakmaya devam edersin. Sonuna kadar.", to: "t1", etki: { tanik: 1, sonuna: true } },
{ t: "Odadan çıkarsın.", to: "t1", etki: { uyum: 1, cikti: true } },
{ t: "“Bu ben değilim,” dersin. Yüksek sesle.", to: "t1", etki: { uyum: 1, ben_degil: true } },
{ t: "“Bu bendim,” dersin.", to: "t1", etki: { vicdan: 2, bendim: true } }
]},

/* ---------- DİRENİŞ KOLU ---------- */
v1: { saat: "Gün 4, gece", baslik: "Hayır", metin: [
P(S("a6B"), "Düdüğü almadın. Tarkan'ın eli havada kaldı. İki gardiyanın arasına yürüdün."),
P(S("ty1B"), "Telefonu bıraktın, merdivenleri koşarak indin. Düdük her basamakta biraz daha yükseldi."),
P(function(d){ return d.gec_direnis; }, "Düdüğü bıraktın. Yere düştü. Plastik bir ses. Yarış durdu."),
"“Bitti. Herkes hücresine.”",
"Mahkûmlar şaşkın. Kime uyacaklarını bilmiyorlar. Tarkan gözlüğünü çıkarıyor. Dört gündür ilk kez yüzünü görüyorsun: kızarmış, terli, öfkeli. Ve korkmuş.",
"“Sen kim oluyorsun? Bu benim vardiyam.”",
"“Bu artık oyun değil Tarkan.”",
"Okan ikinizin arasında bir süre bekliyor, sonra Tarkan'ın yanına geçiyor.",
"Tarkan yüzünü yüzüne yaklaştırıyor. Nefesi çay ve sigara. “Rolünden çıkıyorsun. Bu sabotaj.”",
"Celal doğrulmuş; Tarkan'ın arkasından sana bakıyor."
], secenekler: [
{ t: "Mahkûmları kendin hücrelerine götürürsün; Tarkan'ı umursamadan.", to: "v2", etki: { vicdan: 1, gotürdü: true } },
{ t: "Tarkan'ı kolundan tutup gardiyan odasına çekersin. Konuşmak için.", to: "v2", etki: { vicdan: 1, uyum: 1, konustu: true } },
{ t: "Kameraya dönüp konuşursun: “Saat gece yarısı, dördüncü gün. Bunu kayda geçiriyorum.”", to: "v2", etki: { tanik: 2, kamera_konustu: true } },
{ t: "Celal'in yanına gidip elini uzatırsın.", to: "v2", etki: { vicdan: 2, el: true } }
]},

v2: { saat: "Gün 5", baslik: "On Üç Numara", metin: [
P(S("v1B"), "On dakika konuştunuz. Ya da sen konuştun. Sonunda Tarkan gözlüğünü çıkardı. “Yarın Hoca'ya anlatırım,” dedi. Anlattı. Kendi bildiği gibi."),
P(S("v1A"), "Mahkûmları götürdün. Tarkan arkandan bağırmadı. Ertesi sabah Tuncay Hoca'nın masasında Tarkan'ın el yazısıyla bir not: “Gardiyan Emre protokolü ihlal etmiş ve mahkûmlarla işbirliği yapmıştır.” İmzanın altını iki kez çizmişti."),
P(S("v1C"), "Kameraya konuştun. Ertesi sabah Tuncay Hoca kaydı izleyip seni çağırdı. Yüzü bembeyaz ama gözleri parlıyordu. “Bu çok değerli bir veri,” dedi."),
P(S("v1D"), "Celal'in elini tutup kaldırdın. Tarkan ikinize baktı. “Demek öyle.” Ertesi sabah Tuncay Hoca'nın masasında bir not."),
"Beşinci gün sabah Tuncay Hoca'nın odası. Tarkan da orada.",
"“Emre, dün gece rolünden çıktın. Anlıyorum. Ama deneyin bir yapısı var. Gardiyan mahkûmun tarafına geçemez. Geçerse...” Duruyor. Yüzünde bir parıltı.",
"“Geçerse mahkûm olur. Ya deneyden çıkarsın, ücretini alırsın. Ya da kalırsın. Mahkûm olarak. On üç numara. Bu literatürde hiç olmadı.”",
"Tarkan gülümsüyor. Gözlüğünü yeniden takmış."
], secenekler: [
{ t: "Mahkûm olmayı kabul edersin. On üç numara.", to: "v3", etki: { vicdan: 1, mahkum: true } },
{ t: "Deneyden çıkarsın. Ama dekanlığa gidersin.", to: "ty3", etki: { tanik: 2, kol: "tanik", cikip_dekan: true } },
{ t: "Kabul edersin. Bir şartla: Celal'in yanındaki hücre.", to: "v3", etki: { vicdan: 1, mahkum: true, kemalle: true } },
{ t: "Deneyden çıkarsın. Kantine oturursun. Ne yapacağını bilmeden.", to: "ty2", etki: { uyum: 1, sessiz_cikti: true, kol: "tanik" } }
]},

v3: { saat: "Gün 5–6", baslik: "Hücre", metin: [
P(S("v2A"), "Kabul ettin. Tuncay Hoca defterine yazıp altını çizdi."),
"Haki üniformayı çıkarıyorsun. Bir önlük. Göğsünde on üç. Saçların bir bere altında. Ayakkabı yerine terlik. Terliğin biri kırk iki, öbürü kırk dört.",
"İkinci hücre. Üç yatak, bir kova. Hücre arkadaşların dün seni gardiyan olarak gördü. Biri yüzünü çeviriyor. Biri yere, ayağının yanına tükürüyor.",
P(function(d){ return d.kemalle; }, "Celal yan hücrede. Duvarın öbür yanından sesi geliyor: “Delirmişsin. Sağ ol.”"),
"Gece sayımı. Düdük. Sıran geliyor.",
"“On üç.”",
"“Daha yüksek!”",
"“On üç!”",
"Tarkan önünde duruyor. Gözlüğünde kendi yüzün: önlük, numara, bere.",
"“On üç numara. Yere. Yirmi şınav. Ötekiler sayacak.”",
"Ötekiler sayıyor. Dün seni gardiyan olarak gören gençler, senin cezanı sayıyor. Yüksek sesle."
], secenekler: [
{ t: "Şınavları çekersin.", to: "t1", etki: { uyum: 1, sinav: true } },
{ t: "Yere inmezsin. “Hayır,” dersin. Bir mahkûm olarak.", to: "t1", etki: { vicdan: 2, mahkum_hayir: true } },
{ t: "Tarkan'ın gözlüğüne bakıp adını söylersin: “Tarkan.”", to: "t1", etki: { vicdan: 1, tanik: 1, burak_ad: true } },
{ t: "Şınavları çekip hücre arkadaşlarına fısıldarsın: yarın birlikte.", to: "t1", etki: { vicdan: 1, dayanisma: true } }
]},

/* ---------- TANIK KOLU ---------- */
ty1: { saat: "Gün 4, gece", baslik: "Telefon", metin: [
"Koridordan çıkıyorsun. Arkandan Tarkan'ın sesi. Adın, bir küfür. Giriş katı karanlık. Kapının yanında kartlı bir telefon. Cebinde yarım kalmış bir kart.",
"Tuncay Hoca'nın ev numarası dün Merve'nin masasındaki bir kâğıttaydı. Ezberlemiştin, nedenini bilmeden.",
"Dört çalış. Uykulu bir kadın sesi. “Kim?” Söylüyorsun. Sonra Tuncay Hoca.",
"Anlatıyorsun: eşek yarışı, eğik sırtlar, Celal'in gözleri. Sesin bir yerde kırılıyor.",
"“Emre, gece yarısı. Sabah konuşalım. Fiziksel şiddet var mı?”",
"“Yok. Ama...”",
"“O zaman protokol içinde. Rolüne dön. Lütfen. Bu çok önemli bir veri.”",
"Hat kapanıyor. Kartın ekranında kalan kontör: 3.",
"Aşağıda düdük çalıyor."
], secenekler: [
{ t: "Merve'yi ararsın.", to: "ty2", etki: { tanik: 1, merve_ara: true } },
{ t: "Aşağı inip Tarkan'ı durdurursun. Kendi başına.", to: "v1", etki: { vicdan: 2, kol: "direnis" } },
{ t: "Polisi ararsın.", to: "ty2", etki: { tanik: 2, polis: true } },
{ t: "Telefonun yanında sabaha kadar oturursun.", to: "ty2", etki: { uyum: 1, kulube: true } }
]},

ty2: { saat: "Gün 5", baslik: "Merve", metin: [
P(S("v2D"), "Deneyden çıkıp kantine oturdun. Bir saat sonra Merve yanına geldi, iki çayla."),
P(S("ty1A"), "Merve ilk çalışta açtı. Uyumuyormuş. “Geliyorum.” Yirmi dakika sonra kapıdaydı, pijamasının üstüne mont geçirmiş. Bodruma indi. Düdük sustu."),
P(S("ty1C"), "Polis yarım saat sonra geldi. İki memur indi, baktı, birbirine baktı. “Bu deney mi? İzni var mı?” Var, dedi Tarkan. Polis gitti. Gece devam etti. Ama sabah bütün fakülte polisin geldiğini biliyordu."),
P(S("ty1D"), "Sabaha kadar oturdun. Telefonun camında kendi yansıman: haki üniforma. Saat altıda Merve geldi. Seni gördü, bir şey sormadı."),
P(function(d){ return d.gec_tanik; }, "Merve gardiyan odasındaydı. Anlattın: beş günü, düdüğü, “Beni tanıyor musun?”u. Merve dinlerken ağladı."),
"Kantin. Sabah. Merve kahvesini karıştırıyor.",
"“Ben de görüyorum. Her akşam Tuncay'a söylüyorum: fazla. O da her akşam: bir gün daha, bu literatürü değiştirecek.”",
"“Biz birlikteyiz, biliyorsun herhalde. Ona karşı gidersem bir deneye değil, bir insana karşı gidiyorum. Kariyerime de.”",
"“Sen gidebilirsin ama. Dekanlığa. Ben gidemem.”"
], secenekler: [
{ t: "“Birlikte gidelim,” dersin.", to: "ty3", etki: { tanik: 1, birlikte: true } },
{ t: "“Ben giderim,” dersin.", to: "ty3", etki: { tanik: 2, tek: true } },
{ t: "“Sen Tuncay Hoca'yla son bir kez konuş. Sonra ben giderim,” dersin.", to: "ty3", etki: { tanik: 1, vicdan: 1, son_sans: true } },
{ t: "“Belki o haklı. Belki bu gerçekten önemli,” dersin.", to: "ty3", etki: { uyum: 1, belki_hakli: true } }
]},

ty3: { saat: "Gün 5", baslik: "Dekan", metin: [
P(S("ty2A"), "Merve kahvesine baktı. Sonra kalktı. “Ceketimi alayım.”"),
P(S("ty2B"), "Merve rahatlamış ve utanmış göründü. Dekanlığın kapısına kadar yalnız yürüdün. Üçüncü kat, merdivenler."),
P(S("ty2D"), "“Dün gece ne gördün?” dedi Merve. Anlattın. Cümlenin sonunda kendi sorunun cevabını duydun. Bir saat sonra dekanlıktaydın."),
P(function(d){ return d.cikip_dekan; }, "Üniformayı Tuncay Hoca'nın masasına bıraktın, katlamadan. Ücretini almadın. Dekanlığa çıktın."),
P(S("ty2C"), "Merve Tuncay Hoca'yla bir saat konuştu. Çıktığında yüzü taş gibiydi. “Bir gün daha istiyor. Ben gidiyorum. Sen gelme.” Sonra durdu. “Hayır. Gel.”"),
"Dekan Prof. Dr. Gülten Aras, altmışlarında, eski bir sosyal psikolog. Masasında bir kedi biblosu, kulağı kırık. Dinliyor. Sözünü kesmiyor.",
"Sonra kalkıp asansöre biniyor ve bodruma iniyor. Kendisi.",
"Gardiyanlar onu görünce donuyor. Mahkûmlar parmaklıkların arkasından bakıyor. Dekan her hücrenin önünde biraz duruyor.",
"Sonra Tuncay Hoca'ya dönüyor.",
"“Tuncay. Bunlar kim? Numaralar mı, öğrencilerimiz mi?”",
"Tuncay Hoca cevap vermiyor.",
"“Saat on bir. On ikide bu bodrum boş olacak. Öğleden sonra benim odamdasın.”"
], secenekler: [
{ t: "Hücre kapılarını kendin açarsın.", to: "t1", etki: { vicdan: 1, kapilari_acti: true } },
{ t: "Merve'ye bakarsın.", to: "t1", etki: { tanik: 1 } },
{ t: "Tarkan'a bakarsın. Gözlüğü hâlâ takılı.", to: "t1", etki: { tanik: 1, burak_bakti: true } },
{ t: "Celal'in hücresine gidersin. İlk o çıksın.", to: "t1", etki: { vicdan: 1, kemal_ilk: true } }
]},

/* ---------- GİZLİ KOL ---------- */
g1: { saat: "Gün 4–5", baslik: "Ekmek", metin: [
"Kenarda duruyorsun. Yarış sürüyor. Bir şey yapmadığın her saniye bir şey yapıyorsun.",
"Kafanda bir plan. Vardiya sonunda yemek odasından bir ekmek, iki üçgen peynir, bir şişe su. Gömleğinin altına.",
"Sabaha karşı Celal'i tuvalete götürüyorsun. Tuvalette kamera yok. Ekmeği, peyniri, suyu lavabonun altına bırakıyorsun.",
"Celal bakıyor. Anlıyor. Bir şey demiyor.",
"Ertesi gün aynısı. Bu kez bir not: “Dayan. İki gün daha. E.”",
"Gündüz gardiyan odasında Tarkan'la, Okan'la bir sonraki cezayı konuşuyorsunuz. Sen de zararsız görünen bir fikir veriyorsun: hücreleri kendileri temizlesin. Tarkan beğeniyor.",
"Gece ekmek bırakan, gündüz ceza öneren biri."
], secenekler: [
{ t: "Öbür mahkûmlara da yiyecek bırakmaya başlarsın.", to: "g2", etki: { vicdan: 1, herkese: true } },
{ t: "Yalnızca Celal'e. Riski küçük tutarsın.", to: "g2", etki: { uyum: 1, yalniz_kemal: true } },
{ t: "Notlara bilgi eklersin: hangi gardiyan ne zaman, nerede.", to: "g2", etki: { vicdan: 1, tanik: 1, bilgi: true } },
{ t: "Merve'ye gizlice ne yaptığını anlatırsın. Bir tanık olsun.", to: "g2", etki: { tanik: 1, merve_bilir: true } }
]},

g2: { saat: "Gün 5", baslik: "Mektup", metin: [
P(S("g1B"), "Yalnızca Celal'e bıraktın. Öbür sekiz mahkûm aç uyudu. Bir gece biri Celal'in ağzında peynir kokusu aldı, bir şey demedi."),
P(S("g1C"), "Notlara bilgi ekledin: Tarkan hangi saatte, Okan nerede. Celal'in elinde bir harita oldu."),
P(S("g1A"), "Her gece üç tuvalet, üç lavabo, üç paket. Mahkûmlar arasında bir fısıltı: içeride bir dost var. Kim olduğunu kimse söylemiyor."),
P(S("g1D"), "Merve dinledi. “Bunu notlarıma yazmayacağım. Ama biliyorum.”"),
"Beşinci gün akşam lavabonun altında senin bırakmadığın bir şey var. Katlanmış bir kâğıt. Celal'in yazısı.",
"“Emre. Bunu anneme götür. Teyzemin Bağcılar'daki evinde. Deneyde olduğumu bilmiyor. Kampta sanıyor. Okursa korkar. Ama okusun. Birine yazmam lazım. Sen değil. Sen buradasın.”",
"Mendil kâğıdına, kurşunkalemle. Okumuyorsun. Bir kelime gözüne çarpıyor: “kayboluyorum.”",
"Gardiyan odasında Tarkan. Gözlüğü kafasının üstünde.",
"“Emre. Son iki gecedir yemek odasında ekmek eksik. Peynir de. Sen bir şey biliyor musun?”"
], secenekler: [
{ t: "“Hayır,” dersin. Gözünü kırpmadan.", to: "g3", etki: { uyum: 1, yalan: true } },
{ t: "“Evet. Bendim,” dersin.", to: "g3", etki: { vicdan: 2, itiraf: true } },
{ t: "“Belki Okan'dır,” dersin.", to: "g3", etki: { uyum: 1, hakan_suc: true } },
{ t: "Duymazdan gelip mektubu cebine koyarsın. Vardiya bitince Bağcılar'a gideceksin.", to: "g3", etki: { vicdan: 1, mektup_goturdu: true } }
]},

g3: { saat: "Gün 6", baslik: "İki Yüz", metin: [
P(S("g2A"), "“Hayır.” Tarkan uzun uzun baktı. “Peki.” Ertesi gece yemek odasının kapısına bir asma kilit takıldı. Anahtar Tarkan'ın boynunda, bir ipte."),
P(S("g2B"), "“Bendim.” Tarkan'ın yüzünde önce öfke, sonra şaşkınlık. “Neden? Bu bir oyun.” “Senin için,” dedin. Tarkan Tuncay Hoca'ya söylemedi. Nedenini hiç öğrenmeyeceksin."),
P(S("g2C"), "“Belki Okan'dır.” Ertesi gün Okan Tuncay Hoca'nın odasından kızarmış bir yüzle çıktı. Koridorda sana baktı. Senden şüphelenmedi bile."),
P(S("g2D"), "Vardiya bitince Bağcılar'a gittin. Dördüncü kat. Celal'in annesi kapıyı açtı. Seni çocukluğundan tanıyan kadın. Mektubu okudu, oturdu, ağladı. “Kampta sanıyordum.” Sonra sana baktı: “Sen ne yapıyorsun orada?” Cevap veremedin."),
"Altıncı gün sabah Merve bütün gardiyanları bir odaya topluyor. Elinde bir video kaset.",
"“Bugün bitiyor. Dekanlığa gittim. Kayıtlar orada.”",
"Dördüncü gece. Koridor, eğik sırtlar, düdük. Kenarda bir gardiyan, hiçbir şey yapmadan duruyor. Sen.",
"Tuvaletler kayıt dışı. Lavabolar kayıt dışı. Ekranda yalnızca yarışı izleyen bir gardiyan."
], secenekler: [
{ t: "Merve'ye gece yaptıklarını anlatırsın. Kayıtta olmayanları.", to: "t1", etki: { tanik: 1, anlatti_merve: true } },
{ t: "Bir şey söylemezsin. Kayıt ne diyorsa o.", to: "t1", etki: { uyum: 1, kayit_kabul: true } },
{ t: "Celal'e bakarsın. Ne bildiğini o biliyor.", to: "t1", etki: { vicdan: 1 } },
{ t: "“Ben kenardaydım,” dersin. “Bu bir şey yapmamak değildi.”", to: "t1", etki: { vicdan: 1, tanik: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Gün 6", baslik: "Bitiş", metin: [
P(S("u3A"), "Kaydı sonuna kadar izledin. Kırk dakika: düdük, sırtlar, bir yerde senin gülüşün. Işıklar yanınca kimse sana bakmadı."),
P(S("u3B"), "Odadan çıktın. Koridorda nefes alamadın. Merve arkandan gelip bir bardak su uzattı."),
P(S("u3C"), "“Bu ben değilim,” dedin. Tarkan başını salladı: “Ben de değilim.” Tuncay Hoca not aldı."),
P(S("u3D"), "“Bu bendim,” dedin. Oda sustu. Merve sana ilk kez bir gardiyana değil, birine bakar gibi baktı."),
P(S("v3A"), "Şınavları çektin. Kolların on yedide titredi. Sayıları sen de içinden onlarla birlikte saydın."),
P(S("v3B"), "“Hayır.” Tarkan seni tecrit odasına götürdü. Süpürge dolabının karanlığında iki saat. Bir paspasın sapı sırtına batıyordu."),
P(S("v3C"), "“Tarkan,” dedin. Gözlüğün arkasında bir şey kıpırdadı. “Numaranı söyle,” dedi. Sesi bir ton düşmüştü."),
P(S("v3D"), "“Yarın birlikte.” Ertesi sabah sayımda dokuz mahkûm aynı anda sustu. Tarkan düdük çaldı. Kimse kıpırdamadı. O sabah Merve kamerayı izliyordu."),
P(S("ty3A"), "Kapıları sen açtın. Anahtarlar elinde şıngırdadı. Mahkûmlar önce çıkmadı. Tuzak sandılar. Sonra biri çıktı. Sonra hepsi."),
P(S("ty3B"), "Merve kollarını kavuşturmuş, sessizce ağlıyordu. Göz göze gelince başını eğdi."),
P(S("ty3C"), "Tarkan'ın gözlüğü dekan konuşurken de takılıydı. Çıkarmadı. Belki çıkaramıyordu."),
P(S("ty3D"), "Celal kapıda durdu. “Sen mi?” Evet. Bir şey demeden yanından geçti. Omzu bu kez değmedi."),
P(S("g3A"), "Merve'ye ekmekleri, notları anlattın. “Bunu kayıt görmedi,” dedi. “Makale de görmeyecek.”"),
P(S("g3B"), "Bir şey demedin. Kayıt ne diyorsa o: kenarda bir gardiyan."),
P(S("g3C"), "Celal'e baktın. Başını belli belirsiz eğdi. Lavabonun altını bilen tek kişi."),
P(S("g3D"), "Tuncay Hoca kaşını kaldırdı. “Kayıtta gördüğümüz bu değil.”"),
"Deney altıncı günde bitti. On dört gün planlanmıştı. Bir saat içinde bodrum yine bodrum oldu: tozlu, nemli, eski sandalyeler. Biri “Sigara İçilmez” levhasının altına numarasını bırakmıştı: 4.",
"Öğleden sonra bir sınıfta “bilgilendirme toplantısı.” Tuncay Hoca kürsüde, yorgun. Merve yanında.",
"Mahkûmlar konuşuyor. Biri: “İkinci günden sonra numaramı adımdan önce hatırlıyordum.” Gardiyanların bazıları özür diliyor, bazıları savunuyor. Okan ağlıyor. Burnunu koluna siliyor.",
"Tarkan kalkıyor. Sesi artık gür değil. “Ben rolümü oynadım. Hapishane istendi, verdim. Başka ne yapacaktım?”",
"Sonra Celal kalkıyor. “Dördüncü gece Tarkan'ın gözlüğünde kendi yüzümü gördüm. O yüzün bana ait olmadığını düşündüm. Sonra belki Tarkan'ın yüzünün de ona ait olmadığını düşündüm.”",
"Sonra sana dönüyor."
], secenekler: [
{ t: "Ayağa kalkıp konuşursun.", to: "t1b", etki: { tanik: 1, konustu_sinif: true } },
{ t: "Celal'in bakışını karşılarsın. Bir şey demeden.", to: "t1b", etki: { vicdan: 1 } },
{ t: "Tarkan'a bakarsın. Onun da bir şey söylemesi gerek.", to: "t1b", etki: { tanik: 1 } },
{ t: "Gözlerini yere indirirsin.", to: "t1b", etki: { uyum: 1, yere: true } }
]},

t1b: { saat: "Gün 6, akşam", baslik: "Celal", metin: [
P(S("t1B"), "Bakışını karşıladın. Bir süre sonra Celal başını çevirdi. Toplantı bitti."),
P(S("t1C"), "Tarkan yere bakıyordu. Bir şey söylemesini bekledin. Söylemedi."),
P(S("t1D"), "Gözlerini yere indirdin. Tuncay Hoca “Teşekkürler,” deyip bir sonrakine geçti."),
P(S("t1A"), "Kalktın. “Bir parayla gardiyan oldum,” dedin. “Celal'inki tura geldi, benimki yazı. Aramızdaki fark bu.” Oturdun. Kimse bir şey demedi."),
"Akşam fakültenin bahçesinde bir bank. Ağustos böcekleri. Altı gün önce burada oturup parayı nasıl harcayacağınızı konuşuyordunuz; Celal ikinci el bir bilgisayar alacaktı.",
"Celal uzun süre bir şey demiyor.",
P(function(d){ return d.kol === "rol"; }, "“Seni tanımadım,” diyor. “Dördüncü gece, düdüğü çalarken. Bunu kızdığım için söylemiyorum. Ben gardiyan olsaydım ne yapardım, onu bilmiyorum. Para tura geldi.”"),
P(function(d){ return d.kol === "direnis"; }, "“Hücreye girdin,” diyor. “Ben girmezdim. Gardiyan olsam büyük ihtimalle Tarkan gibi olurdum. Bunu bilmek istemezdim. Şimdi biliyorum.”"),
P(function(d){ return d.kol === "tanik"; }, "“Dekanı sen getirdin, Merve söyledi. O gece yukarı çıktığını gördüm. Kaçtın sandım. Seni affetmeyecektim. Sonra ertesi gün dekan geldi.”"),
P(function(d){ return d.kol === "gizli"; }, "“Ekmeği sen bırakıyordun, biliyordum. Ama kayıtta yoksun. Yarın bütün okul seni kenarda duran bir gardiyan olarak görecek. Yalnızca ben biliyorum. Bu yeter mi?”"),
"Bir köpek havlıyor.",
"“Bizi neden seçtiler biliyor musun? Testlerde en normal çıkanlar olduğumuz için. Kötüleri değil. Normalleri.”"
], secenekler: [
{ t: "“Belki asıl korkunç olan bu,” dersin.", to: "t2", etki: { tanik: 1 } },
{ t: "Celal'e annesinin börek hikâyesini anlatırsın.", to: "t2", etki: { vicdan: 1, borek: true } },
{ t: "Özür dilersin. Neye, tam bilmeden.", to: "t2", etki: { vicdan: 1, ozur: true } },
{ t: "Bir sigara yakıp Celal'e de uzatırsın. Konuşmazsınız.", to: "t2", etki: { uyum: 1 } }
]},

t2: { saat: "2004", baslik: "Makale", metin: [
P(S("t1bA"), "“Normal olmak,” dedi Celal. “Evet.” Sonra bir dal parçası alıp toprağa bir şey çizdi, sildi."),
P(S("t1bB"), "Böreği anlattın. Mutfağın fayanslarını, annenin “Bir dilim de Emre'ye bırak” deyişini. Celal güldü, gülerken ağladı."),
P(S("t1bC"), "Özür diledin. Celal elini omzuna koydu. “Ben de bilmiyorum neye,” dedi."),
P(S("t1bD"), "İki duman. Bilgisayar hiç alınmadı. Para bir zarfta, Celal'in çekmecesinde kaldı."),
"Bir yıl sonra Tuncay Hoca uluslararası bir dergide makale yayımlıyor: “Durumsal Güç ve Kimlik Çözülmesi: Türkiye'de Bir Hapishane Simülasyonu.” Konferanslar, röportajlar, bir belgesel teklifi.",
"Makalede sen “G4”sün.",
P(function(d){ return d.kol === "rol"; }, "“G4, dördüncü günden itibaren rolünü belirgin biçimde benimsemiş ve aşağılayıcı uygulamalara aktif olarak katılmıştır.”"),
P(function(d){ return d.kol === "direnis"; }, "“G4, dördüncü gece rolünü reddetmiş ve deney yöneticisinin önerisiyle mahkûm rolüne geçirilmiştir (M13). Ardından hızla mahkûm davranışları sergilemiştir.”"),
P(function(d){ return d.kol === "tanik"; }, "“G4, deneyin dışından yardım isteyerek erken sonlandırılmasında rol oynamıştır. Ancak ilk üç gündeki davranışları rolle uyumludur.”"),
P(function(d){ return d.kol === "gizli"; }, "“G4, kayıtlarda pasif bir gözlemci olarak görünmektedir. Uygulamalara katılmamış ancak durdurmaya da çalışmamıştır.”"),
"Tuncay Hoca arıyor. Bir televizyon programı. “Deneyin değerini anlatırsın. Kontrollüydü, etikti, öğreticiydi. Senin sesin önemli.”"
], secenekler: [
{ t: "Kabul edersin. Tuncay Hoca'nın istediği gibi konuşursun.", to: "t3", etki: { uyum: 2, tv_kabul: true } },
{ t: "Reddedip dergiye bir mektup yazarsın. Makalede olmayanları anlatarak.", to: "y_mektup", etki: { tanik: 2, mektup_dergi: true } },
{ t: "Programa katılırsın. Ama kendi hikâyeni olduğu gibi anlatırsın.", to: "y_tv", etki: { tanik: 1, vicdan: 1, tv_kendi: true } },
{ t: "Reddedersin. Hiçbir şey söylemezsin.", to: "t3", etki: { uyum: 1, sessiz: true } }
]},

y_mektup: { saat: "2004", baslik: "Okuyucu Mektubu", metin: [
"Dergiye bir mektup. İngilizce, sözlük açık, üç hafta. Kafedeki molalarda peçetelere taslak yazıyorsun. Başlık: “G4'ten.”",
"Yazıyorsun: protokolün “fiziksel şiddet yok” dışında sınır koymadığını. Tuncay Hoca'nın kendine “Müdür” dediğini. Hem yürütücü hem özne olduğunu. Çıkmak isteyen birine sözleşmede olmayan bir maddeyi hatırlattığını. Gece kayıtlarını kimsenin izlemediğini.",
P(function(d){ return d.kol === "gizli"; }, "Ve kayıtta olmayanları: lavabo altındaki ekmekleri, bir anneye götürülen mektubu."),
"Son paragraf: “Makale bu deneyin durumun gücünü gösterdiğini söylüyor. Durumu kuran birinin gücünü de gösterdi. Dördüncü gece onu bodrumda göremedim. Evindeydi.”",
"Mektup altı ay sonra yayımlanıyor. Kısaltılmış.",
"Tuncay Hoca seni bir daha aramıyor."
], secenekler: [
{ t: "Mektubun bir kopyasını Celal'e gönderirsin.", to: "t3", etki: { vicdan: 1, kemale_kopya: true } },
{ t: "Merve'ye gönderirsin.", to: "t3", etki: { tanik: 1, merveye_kopya: true } },
{ t: "Tuncay Hoca'ya gönderirsin. Bir not ekleyerek: “Kayıtları siz de izleyin.”", to: "t3", etki: { tanik: 1 } },
{ t: "Kimseye göndermezsin. Yayımlanması yeter.", to: "t3", etki: { uyum: 1 } }
]},

y_tv: { saat: "2004", baslik: "Stüdyo", metin: [
"Bir stüdyo. Sunucu, Tuncay Hoca, bir psikiyatrist, sen. Makyöz yüzüne pudra sürüyor. Hapşırıyorsun. Tuncay Hoca akıcı, ikna edici.",
"Sunucu: “Siz gardiyandınız. Neler yaşadınız?”",
"Tuncay Hoca sana bakıyor. Bir beklentiyle.",
"Anlatıyorsun. Yazı turayı. Gözlüğü. Gece sayımını. Celal'in şınavlarını. Dördüncü geceyi.",
P(function(d){ return d.kol === "rol"; }, "“Düdüğü ben çaldım,” diyorsun kameraya. “Bir arkadaşım sürünürken ‘Yeniden’ dedim. Bunu durum yapmadı, ben yaptım. Durum yalnızca kolaylaştırdı.”"),
P(function(d){ return d.kol !== "rol"; }, "“‘Hayır’ demek mümkündü,” diyorsun. “Zordu ama mümkündü. Makale durumun herkesi aynı ezdiğini söylüyor. Ezmedi. Herkes bir şey seçti. Bazılarımız kötü şeyler seçti.”"),
"Stüdyoda sessizlik. Tuncay Hoca'nın elleri masanın altında.",
"Psikiyatrist söz alıyor: “Durum bir açıklamadır, mazeret değil.”",
"Kuliste Tuncay Hoca yanına geliyor. Bir şey diyecek gibi. Demiyor. Gidiyor."
], secenekler: [
{ t: "Arkasından seslenirsin: “Hocam, siz de bir şey seçtiniz.”", to: "t3", etki: { tanik: 1, seslendi: true } },
{ t: "Celal'i arayıp izleyip izlemediğini sorarsın.", to: "t3", etki: { vicdan: 1 } },
{ t: "Kuliste aynaya bakarsın.", to: "t3", etki: { tanik: 1, kulis_ayna: true } },
{ t: "Sunucuya Tarkan'ın da programa çağrılmasını önerirsin.", to: "t3", etki: { tanik: 1, burak_cagir: true } }
]},

t3: { saat: "2015", baslik: "Ofis", metin: [
P(S("t2A"), "Tuncay Hoca'nın istediği gibi konuştun. Ertesi gün Celal'den tek kelimelik mesaj: “İzledim.”"),
P(S("t2D"), "Reddettin. Makale on bir dile çevrildi."),
P(S("y_mektupA"), "Celal bir hafta sonra yazdı: “Teşekkür ederim. Bunu benim de yazabilmem gerekirdi.”"),
P(S("y_mektupB"), "Merve doktorayı bırakmış, bir lisede rehber öğretmen olmuştu. “Keşke o gece ben yazsaydım,” dedi."),
P(S("y_mektupC"), "Cevap gelmedi. Bir yıl sonra makalenin yeni baskısında bir dipnot: “Katılımcı G4'ün itirazları için bkz.”"),
P(S("y_mektupD"), "Kimseye göndermedin. Belki yirmi üç kişi okudu."),
P(S("y_tvA"), "Tuncay Hoca kapıda durdu. Dönmedi. Ama durdu."),
P(S("y_tvB"), "“Doğru anlattın,” dedi Celal. Durdu. “Ama sesin titriyordu.”"),
P(S("y_tvC"), "Aynada pudralı bir yüz. Peçeteyle sildin. Peçete bej oldu."),
P(S("y_tvD"), "Sunucu not aldı. Tarkan hiç çağrılmadı. Ya da gelmedi."),
"On iki yıl sonra. Otuz üç yaşındasın, bir lojistik şirketinde insan kaynakları müdürü. Sosyoloji diploması duvarda. Çerçevenin camı çatlak, değiştirmeye üşeniyorsun.",
"Bir pazartesi bir stajyer geliyor. Yirmi iki yaşında, adı Pelin. Muhasebe biriminde iki aydır. Gözleri kızarık.",
"Biriminin şefi ona her sabah herkesin önünde “stajyer kız” diyor. Adını kullanmıyor. Fikirlerini başkasına mal ediyor. Geçen hafta bir hata yüzünden onu toplantıda ayağa kaldırıp hatasını yüksek sesle okutmuş. Ötekiler gülmüş. Biri telefonuyla çekmiş.",
"“Tek tek konuşunca hepsi kibar,” diyor Pelin. “Ben deliriyormuşum gibi.”",
"Şef Rıza Bey, şirketin en verimli şefi. Genel müdürün golf arkadaşı.",
"Pelin: “Siz bir şey yapabilir misiniz?”"
], secenekler: [
{ t: "Rıza Bey'in birimine soruşturma açarsın. Ne pahasına olursa olsun.", to: "t4", etki: { vicdan: 2, sorusturma: true } },
{ t: "Pelin'i başka bir birime aldırırsın. Sessizce.", to: "t4", etki: { uyum: 1, vicdan: 1, tasidi: true } },
{ t: "Muhasebe birimine bir sabah habersiz gidip toplantıyı izlersin.", to: "t4", etki: { tanik: 2, izledi_toplanti: true } },
{ t: "“Bu şirketin kültürü böyle Pelin. Dayan,” dersin.", to: "t4", etki: { uyum: 2, dayan: true } }
]},

t4: { saat: "2023", baslik: "Tarkan", metin: [
P(S("t3A"), "Soruşturma açtın. Genel müdür seni uyardı. Dört çalışan ifade verdi, sonra dokuz. Rıza Bey görevden alındı. Sen terfi alamadın; Pelin bir yıl sonra kadroya geçti."),
P(S("t3B"), "Pelin'i başka birime aldırdın. Muhasebeye ertesi yıl başka bir stajyer geldi. Ona da “stajyer kız” dendi."),
P(S("t3C"), "Bir sabah toplantı odasının kapısında durdun. İçeride biri ayakta, ötekiler gülüyor. Seni görünce herkes sustu. O sabah için yetti."),
P(S("t3D"), "“Dayan.” Pelin iki hafta sonra istifa etti. Çıkış görüşmesinde tek cümle söyledi: “Siz de gülenlerdensiniz.”"),
"2023. Kırk bir yaşındasın. Bir e-posta. Gönderen: Tarkan.",
"“Emre. Yirmi yıl oldu. Adresini Celal'den aldım. İstemeyerek verdi.”",
"“İki yıl önce oğlum oldu. Geçen hafta parkta bir çocuk onu itti, ötekiler güldü. Ben o çocuğa bağırdım. Bağırırken sesimi tanıdım. Bodrumdaki sesimi.”",
"“Yirmi yıl ‘rolümü oynadım’ dedim. Ama o bodrumda rol yoktu. Ben vardım. Ve ben o düdüğü sevdim.”",
"“Sen oradaydın. Ne gördüğünü bana söyler misin?”"
], secenekler: [
{ t: "Gördüğünü olduğu gibi yazarsın.", to: "bs", etki: { tanik: 2, burak_cevap: "gercek" } },
{ t: "“Hepimiz rol yaptık Tarkan. Sen de, ben de,” yazarsın.", to: "bs", etki: { uyum: 1, burak_cevap: "rol" } },
{ t: "Onunla buluşmayı teklif edersin. Yüz yüze. Gözlüksüz.", to: "bs", etki: { vicdan: 2, burak_cevap: "bulusma" } },
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
son_rol: { son: true, baslik: "Düdük", metin: [
P(S("t4D"), "Tarkan'ın e-postası gelen kutunda duruyor. Okundu, cevapsız."),
P(function(d){ return d.tv_kabul; }, "Televizyonda deneyin kontrollü olduğunu söyledin. Bu cümle seni de korudu. Yıllarca işe yaradı."),
"Dördüncü gece düdüğü dudaklarına götürdüğünde bir güç hissettin ve hoşuna gitti. Bunu Celal'in gözlerinde gördün. Celal de gördü.",
P(function(d){ return d.burak_cevap === "rol"; }, "Tarkan'a “Hepimiz rol yaptık” yazdın. Bir daha yazmadı."),
P(function(d){ return d.burak_cevap === "gercek"; }, "Tarkan'a gördüğünü yazdın. Yazarken kendi düdüğünü, kendi “Yeniden”ini de yazdın. Cevap geldi: “Sen de aynı koridordaydın, değil mi?” Evet."),
"Celal'le bayramlarda konuşuyorsunuz. Kısa, kibar. Börekten hiç söz etmiyorsunuz.",
"Bir toplantıda biri bir stajyere bağırınca ötekilerle birlikte gülümsediğini fark ediyorsun. Gülümsemen yüzünde birkaç saniye kalıyor, sonra iniyor."
]},

son_hucre: { son: true, baslik: "On Üç Numara", metin: [
P(S("t4D"), "Tarkan'ın e-postası gelen kutunda duruyor. Okundu, cevapsız."),
"Literatürde “G4/M13” diye geçiyorsun. Bir dipnot.",
"İki günü hiç unutmadın: önlük, numara, yere eğilmiş beden. Yukarıda aynalı bir gözlükte kendi yüzün. Bir gün önce o gözlüğün arkasındaydın.",
P(function(d){ return d.mahkum_hayir; }, "Mahkûmken de “hayır” dedin. Ertesi gün süpürge dolabında dört saat. Paspas kovasının kokusu hâlâ burnunda."),
P(function(d){ return d.dayanisma; }, "“Yarın birlikte” demiştin. Ertesi sabah dokuz kişi aynı anda yere inmedi. Tarkan ne yapacağını bilemedi. Düdüğü ağzından çıkarıp bir süre eline baktı."),
"Sosyolog olmadın. İnsan hakları avukatı oldun. Yılda birkaç kez cezaevine gidiyorsun.",
"Bazen bir gardiyana adını soruyorsun. Çoğu şaşırıyor. Biri geçen ay söyledi: “Ramazan.” Sonra ekledi: “Ama burada herkes bana Başgardiyan der.”"
]},

son_tanik: { son: true, baslik: "Üçüncü Kat", metin: [
P(S("t4D"), "Tarkan'ın e-postası gelen kutunda duruyor. Okundu, cevapsız."),
"Deneyi dekan durdurdu. Dekana sen çıktın. Üçüncü kat, merdivenler.",
"Makalede bir dipnotun var: “G4, deneyin erken sonlandırılmasında rol oynamıştır.” Rol. Orada bile.",
P(function(d){ return d.mektup_dergi; }, "Mektubun bugün bazı derslerde okutuluyor. Bir öğrenci yazdı: “Ben de bir deneyde gözlemciyim. Bir şey yanlış gidiyor.” Cevap yazdın: “Yukarı çık. Birine göster. Tek başına durdurmaya çalışma. Tek başına susma da.”"),
"Merve doktorayı bitirdi, Tuncay Hoca'dan ayrıldı. Şimdi bir üniversitede araştırma etiği kurulunun başında. Bir konferansta dedi ki: “O sabah kantinde sen ‘Ben giderim’ demeseydin ben gitmezdim.”",
P(function(d){ return d.burak_cevap === "gercek" || d.burak_cevap === "bulusma"; }, "Tarkan'a cevap verdin. Gördüğünü."),
"O telefonu hâlâ düşünüyorsun: karanlık hol, kartın ekranında kalan üç kontör, aşağıdan gelen düdük."
]},

son_iki_yuz: { son: true, baslik: "İki Yüz", metin: [
P(S("t4D"), "Tarkan'ın e-postası gelen kutunda duruyor. Okundu, cevapsız."),
"Kayıtlarda kenarda duran bir gardiyansın. Derslerde bir slayt: aynalı gözlüklü bir siluet.",
"Kayıtta olmayanlar: lavabo altındaki ekmekler, bir mendil kâğıdına yazılmış mektup, bir annenin kapısı.",
P(function(d){ return d.mektup_goturdu; }, "Celal'in annesi o mektubu hâlâ saklıyor. Bir çerçevede. “Kayboluyorum.” Altında annesinin el yazısı: “Emre getirdi.”"),
"Celal'le her yıl aynı bankta buluşuyorsunuz. Bir yıl dedi ki: “Senin ekmeğin olmasa dayanamazdım. Ama Tarkan'a ‘hayır’ deseydin, belki ekmeğe ihtiyacım olmazdı.”",
"Cevap vermedin. Celal de beklemedi. Bankın kenarına bir simit koydu. Bir güvercin geldi."
]},

son_ayna: { son: true, baslik: "Ayna", metin: [
P(S("t4D"), "Tarkan'ın e-postası gelen kutunda duruyor. Okundu, cevapsız."),
"Bodrumda aynalı bir gözlük taktın ve sonunda o gözlükte kendi yüzünü gördün.",
"Bir sayımda yavaş saymak. Bir numarayı adıyla çağırmak. Bir kameraya bakmak. Bir kapıyı açmak. Hepsi küçüktü.",
P(function(d){ return d.sorusturma || d.izledi_toplanti; }, "Yıllar sonra bir toplantı odasında bir bodrumu tanıdın ve bu sefer kenarda durmadın."),
P(function(d){ return d.burak_cevap === "bulusma"; }, "Tarkan'la bir kafede buluştunuz. Gözlüksüz. Uzun süre konuşmadınız. Sonra Tarkan oğlunun fotoğrafını gösterdi. “Ona anlatacağım,” dedi. Sen de anlattın: kendi payını. Hesabı Tarkan ödemek istedi. Sen ödedin."),
"Celal bir yıl bankta bir kâğıt uzattı: annesinin börek tarifi. “Yedi yaşındaki çocuk ağlamasın diye.” Tarifin altına annesi eklemiş: “Bir dilimi Emre'ye ayır.”"
]}

},

ayna: function(d){
  var out = [];
  var v = d.vicdan, u = d.uyum, t = d.tanik;
  if(v >= u && v >= t) out.push("Çoğu kavşakta Celal'in adını ve yüzünü numarasının önüne koydun.");
  else if(u >= t) out.push("Çoğu kavşakta ekibe ve role uydun.");
  else out.push("Çoğu kavşakta gördüğünü birine göstermeye çalıştın.");
  if(d.gozluk === false) out.push("İlk gün aynalı gözlüğü takmadın.");
  if(d.kol === "rol") out.push("Dördüncü gece düdüğü sen çaldın.");
  if(d.mahkum) out.push("“Hayır” dedin ve on üç numara oldun.");
  if(d.hakan_suc) out.push("Ekmekleri Okan'ın üstüne attın.");
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
