(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "bodrum-kati",
baslik: "Bodrum Katı",
dunya: "Gerçek dünya",
kategoriler: ["Toplum ve Adalet", "Kimlik ve Beden"],
giris: "2003 yazı, İstanbul. Bir üniversitenin psikoloji bölümü bodrum katta iki haftalık bir hapishane deneyi kuruyor, günlüğü elli lira. Sen yirmi bir yaşında, okul harcını ödemek zorunda olan bir sosyoloji öğrencisisin ve bir yazı tura seni gardiyan yapıyor. Mahkûmlardan biri de çocukluk arkadaşın. Bu hikâye, bir üniformanın, bir aynalı gözlüğün ve bir bodrum katın bir insanı ne kadar hızlı değiştirebileceğini anlatıyor.",
kavramlar: ["Rol ve kimlik", "Durumun gücü", "Kalabalıkta kaybolma", "Otoriteye itaat"],
ozet: "Bir üniversitenin bodrum katında iki haftalık bir hapishane deneyi kuruluyor. Sen gardiyansın, mahkûmlardan biri de çocukluk arkadaşın. Bir oyunun ne zaman oyun olmaktan çıktığını kimse fark etmiyor.",
baslangic: "a1",
durum: { vicdan: 0, uyum: 0, tanik: 0 },

sahneler: {

a1: { saat: "Ağustos 2003", baslik: "İlan", metin: [
"Fakültenin panosunda, kiralık oda ilanlarının arasında bir A4 kâğıdı asılı: “Hapishane Yaşamı Üzerine Psikolojik Araştırma. 14 gün. Günlük 50 TL. Erkek öğrenciler. Psikoloji Bölümü, Doç. Dr. Tuncay Erdem.” Biri altına tükenmezle “cezaevi mi kamp mı?” diye yazmış.",
"Adın Emre, yirmi bir yaşındasın, sosyoloji üçüncü sınıftasın. Sivas'tan geldin, yurtta kalıyorsun, akşamları Beşiktaş'ta bir kafede garsonluk yapıyorsun. Harcına dört yüz lira eksik. On dört gün yedi yüz lira ediyor.",
"Başvuru kuyruğunda tanıdık bir yüz görüyorsun, Celal. Aynı sokakta büyüdünüz, aynı lisede okudunuz, o şimdi kimya okuyor. Seni görünce sırıtıyor. “Sen de mi meteliksizsin?”",
"Bir anket, bir mülakat, bir kişilik testinden sonra bir odaya alınıyorsunuz. On sekiz öğrenci, bir masa ve Doç. Dr. Tuncay Erdem var. Kırklarında, sakallı, durmadan gözlüğünü silen biri. Yanında doktora öğrencisi asistanı Merve elinde kalın bir klasörle duruyor.",
"“Atama rastgele yapılacak,” diyor Tuncay Hoca. “Dokuz gardiyan, dokuz mahkûm. Yazı tura atacağız.”",
"Para havada dönüyor, masaya düşüyor, bir kere yuvarlanıp duruyor. Yazı geliyor, gardiyan olacaksın.",
"Celal'inki tura geliyor, mahkûm olacak.",
"Celal göz kırpıyor. “Bana iyi bak gardiyan efendi,” diyor, herkes gülüyor."
], secenekler: [
{ t: "Gülüp “Merak etme, sana fazladan ekmek veririm,” dersin.", to: "a2", etki: { vicdan: 1, kemal_soz: true } },
{ t: "Tuncay Hoca'ya deneyin kurallarını sorarsın.", to: "a2", etki: { tanik: 1, kural_sordu: true } },
{ t: "Bir paranın senin ne olacağını belirlediğini düşünürsün.", to: "a2", etki: { tanik: 1 } },
{ t: "Mahkûm olmaktan iyidir diye gardiyan olduğuna sevinirsin.", to: "a2", etki: { uyum: 1, sevindi: true } }
]},

a2: { saat: "Gün 1", baslik: "Üniforma", metin: [
P(S("a1A"), "“Sana fazladan ekmek veririm,” demiştin, Celal de gülmüştü. Bu şaka sonraki günlerde çok aklına gelecekti."),
P(S("a1C"), "Celal'inki tura, seninki yazı gelmişti. O gece yurtta ranzada yatarken parayı, masada bir kere yuvarlanıp duruşunu düşündün."),
P(S("a1B"), "“Kural yok,” dedi Tuncay Hoca gülümseyerek, “bir tek fiziksel şiddet yok. Gerisi size kalmış.” Merve klasöre bir şey yazdı, sonra sildi."),
P(S("a1D"), "Sevindin. Gardiyan sekiz saat vardiya yapıp evine gidecekti, mahkûmsa iki hafta hücrede kalacaktı. O an Celal'in yüzüne bakmadın."),
"Pazar sabahı bodrum kat bir hapishaneye dönmüş. Koridorun iki yanında üç hücre var, kapılarına demir parmaklık takılmış. Bir “avlu”, eski bir süpürge dolabından bozma bir “tecrit odası” ve bir gardiyan odası yapılmış. Tavanda kameralar var, duvarda da hâlâ eski bir “Sigara İçilmez” levhası asılı.",
"Gardiyan odasında üniformalar duruyor, haki gömlek, haki pantolon, düdük, cop ve aynalı güneş gözlükleri. “Gözlükler,” diyor Tuncay Hoca, “mahkûmlar gözlerinizi görmesin diye.”",
"Üniformayı giyiyorsun, pantolon kısa geliyor, bileklerin açıkta kalıyor. Aynada haki giymiş, kemerli, elinde cop olan biri görünüyor.",
"Koridordan sesler geliyor. Tuncay Hoca gerçekçilik olsun diye karakolla anlaşmış, mahkûmlar sabah evlerinden gerçek polisler tarafından “tutuklanmış”, kelepçelenmiş, gözleri bağlanmış. Celal de aralarında, yüzünde bir sırıtış, ellerinde bir titreme var.",
"Aynalı gözlük masada duruyor."
], secenekler: [
{ t: "Gözlüğü takarsın.", to: "a3", etki: { uyum: 1, gozluk: true } },
{ t: "Yüzün görünsün diye gözlüğü takmazsın.", to: "x_gozluk", etki: { vicdan: 1, gozluk: false } },
{ t: "Bu işin nasıl yapılacağını öbür gardiyanlardan Tarkan'la konuşursun.", to: "x_burak", etki: { uyum: 1, gozluk: true } },
{ t: "Mahkûmların, gözü bağlı Celal'in getirilişini izlersin.", to: "a3", etki: { tanik: 1, gozluk: true, izledi_gelis: true } }
]},

x_gozluk: { saat: "Gün 1", baslik: "Yüz", metin: [
"Gözlüğü masada bırakıyorsun, Tuncay Hoca bunu fark ediyor.",
"“Emre, gözlük protokolün bir parçası. Bütün gardiyanlar aynı koşullarda olmalı.”",
"“İçeride arkadaşım var hocam, yüzümü görsün.”",
"Tuncay Hoca düşünüp Merve'ye bir şey fısıldıyor, Merve de bir şey yazıyor. “Peki,” diyor Tuncay Hoca keyifle, “bu da bir veri. Yüzü açık bir gardiyan.”",
"Mahkûmların gözleri açılıyor ve karşılarında sekiz aynalı gözlükle bir çıplak yüz görüyorlar.",
"Celal seni görünce bir an rahatlıyor. Sonra öbür gardiyanlara bakıyor ve aynalı camlarda kendi yüzünü sekiz kere görüyor.",
"İşletme son sınıftaki uzun boylu Tarkan yanına gelip fısıldıyor. “Ne yapıyorsun sen? Bizi zayıf gösteriyorsun.”"
], secenekler: [
{ t: "“Zayıf değil, insan gösteriyorum,” dersin.", to: "a3", etki: { vicdan: 1, burakla_ters: true } },
{ t: "Ekipten ayrı durmak istemediğin için bir süre sonra gözlüğü takarsın.", to: "a3", etki: { uyum: 1, gozluk: true, sonradan_taktı: true } },
{ t: "Celal'e başınla selam verirsin.", to: "a3", etki: { vicdan: 1, selam: true } },
{ t: "Tarkan'a bir şey demezsin ama gözlüğü de takmazsın.", to: "a3", etki: { tanik: 1 } }
]},

x_burak: { saat: "Gün 1", baslik: "Tarkan", metin: [
"Tarkan kemerini bağlıyor. Yirmi üç yaşında, sesi gür bir adam, bir bankada stajyer. Seneye kadroya gireceğini ilk beş dakikada iki kere söyledi.",
"“Bak,” diyor, gözlüğü burnunun ucunda, “bu bir oyun ama para alıyoruz, iyi oynayalım. Hoca hapishane istiyor, verelim.”",
"“Hapishane ne demek?” diye soruyorsun.",
"Tarkan gülüyor. “Film izlemedin mi hiç? Gardiyan sert olur, mahkûm kurala uyar, uymazsa cezası olur. Şiddet yok, merak etme. Düzen var.”",
"Gözlüğünü takıyor, aynalı camda sen ve arkadaki floresan görünüyorsunuz.",
"“İlk gün önemli. Kimin patron olduğu ilk gün belli olur, bankada da böyle.”",
"Copu bir kere avucuna vuruyor. “Hazır mısın?”"
], secenekler: [
{ t: "“Hazırım,” dersin.", to: "a3", etki: { uyum: 2, hazir: true } },
{ t: "“İçlerinde çocukluk arkadaşım var, abartmayalım,” dersin.", to: "a3", etki: { vicdan: 1, kemal_soyledi: true } },
{ t: "“Bu bir deney Tarkan, hoca ne görmek istiyorsa onu üretmeyelim,” dersin.", to: "a3", etki: { tanik: 1 } },
{ t: "Bir şey demeden copunu alırsın.", to: "a3", etki: { uyum: 1 } }
]},

a3: { saat: "Gün 1, 02.30", baslik: "Sayım", metin: [
P(S("a2A"), "Gözlüğü taktın. Aynada gözlerini değil, aynanın içindeki aynayı gördün. Kimse nereye baktığını bilmeyecekti. Bunun içini rahatlattığını fark ettin ve hoşuna gitmedi."),
P(S("x_gozlukA"), "“İnsan,” dedi Tarkan, kelimeyi ağzında evirip çevirdi. “Bu bodrumda işe yaramaz.”"),
P(S("x_gozlukB"), "Bir saat sonra gözlüğü taktın. Tarkan omzuna vurup “Hah, şöyle,” dedi. Celal o anı gördü mü, bilmiyorsun."),
P(S("x_gozlukC"), "Celal'e başınla selam verdin. Celal gülümsedi, sonra biri görecek diye hemen yere baktı."),
P(S("x_gozlukD"), "Tarkan bütün gün seninle konuşmadı. Gözlüğün masada durdu, bir ara biri üstüne bir kahve bardağı koydu."),
P(S("x_burakA"), "“Hazırım,” dedin. Tarkan sırıtıp copu bir kere daha avucuna vurdu, ses koridorda yankılandı."),
P(S("x_burakC"), "Tarkan güldü. “Üretmek mi? Oynuyoruz kardeşim.” Ama gözlüğü takmadan önce yine de bir an durdu."),
P(S("x_burakD"), "Copu aldın. Tahtadan, eski bir coptu, üstüne birinin baş harfleri kazınmıştı. Kemerine taktığında bir şey yerine oturdu ve ne olduğunu sevmedin."),
P(function(d){ return d.izledi_gelis; }, "Gözü bağlı Celal'i duvara dayayıp üstünü aradılar. Celal bir şaka yaptı ama polis gülmedi ve Celal bir daha şaka yapmadı."),
P(function(d){ return d.son === "x_burakB"; }, "“Hangisi?” dedi Tarkan, sen de söyledin. “Tamam,” dedi. Gözlüğün arkasında ne düşündüğünü göremedin."),
"Gece saat ikiyi otuz geçe sayım yapılıyor. Bu Tuncay Hoca'nın değil, Tarkan'ın fikri, “Gerçek hapishanede gece sayımı olur,” diyor. Düdük çalıyor.",
"Mahkûmlar koridora diziliyor, uykulu, şaşkın, birinin ayağında tek çorap var. Önlüklerinde numaralar yazıyor, Celal'inki yedi.",
"“Numaralarınızı söyleyin! Yüksek sesle!”",
"“Bir.” “İki.” “Üç.” “Daha yüksek!” Baştan başlıyorlar.",
"Sıra Celal'e geliyor. “Yedi,” diyor, “bir de sabah omlet istiyorum.” Birkaç kişi gülüyor.",
"Tarkan'ın gözlüğü Celal'e dönüyor. “Yedi numara, yere yat. Yirmi şınav, ötekiler sayacak.”",
"Celal sana bakıyor, bir arkadaşın sesini bekliyor.",
"Tarkan “Emre, say,” diyor."
], secenekler: [
{ t: "Saymaya başlarsın, bir, iki, üç.", to: "a4", etki: { uyum: 1, saydi: true } },
{ t: "Celal'in önünde “Bu gereksiz Tarkan,” dersin.", to: "a4", etki: { vicdan: 1, karsi_cikti: true } },
{ t: "Celal nefes alabilsin diye yavaş ve alçak sesle sayarsın.", to: "a4", etki: { vicdan: 1, uyum: 1, yavas: true } },
{ t: "Biri izliyor mu diye kameraya bakarsın.", to: "a4", etki: { tanik: 1, kamera: true } }
]},

a4: { saat: "Gün 2", baslik: "İsyan", metin: [
P(S("a3A"), "Yirmiye kadar saydın. Celal yüzü kızarmış hâlde kalktı. Hücresine girerken omzu omzuna çarptı, kaza gibiydi ama değildi."),
P(S("a3B"), "Tarkan'ın gözlüğü sana döndü. “Tamam, sen sayma. Okan, sen say,” dedi, Okan da saydı. Celal şınav çekerken sana minnetle baktı. Tarkan da baktı ama başka türlü."),
P(S("a3C"), "Yavaş saydın, üçüncüde Tarkan “Hızlı!” diye bağırdı. Celal bitirdi, kalkarken zorla da olsa sana göz kırptı."),
P(S("a3D"), "Kameranın kırmızı ışığı yanıyordu. Ertesi gün Merve'ye sordun. “Hoca sabahları izliyor,” dedi, “hepsini.” Demek görmüştü ve bir şey dememişti."),
"İkinci gün sabah birinci hücre isyan ediyor. Yataklar kapıya dayanmış, numaralar sökülüp yırtılmış. “Biz numara değiliz!” diye bağırıyorlar, Celal'in sesi en yüksekten geliyor.",
"Gardiyanlar gardiyan odasında toplanıyor. Tarkan kızgın. “İlk gün yumuşak davrandık, işte sonucu.”",
"Bir plan yapıyorlar. Yangın söndürücülerle karbondioksit sıkılacak, kapı açılacak, yataklar alınacak, elebaşları da tecride kapatılacak.",
"Tuncay Hoca kapıda dinliyor ama bir şey demiyor. Merve yanında, klasörü göğsüne bastırmış.",
"Tarkan sana bir söndürücü uzatıyor. Etiketinde son kontrol tarihi 1998 yazıyor."
], secenekler: [
{ t: "Söndürücüyü alıp öbürleriyle koridora yürürsün.", to: "a5", etki: { uyum: 2, isyan_bastirdi: true } },
{ t: "Söndürücüyü almaz, gardiyan odasında monitörlerin başında kalırsın.", to: "x_masa", etki: { vicdan: 1, tanik: 1 } },
{ t: "“Önce bir konuşayım,” deyip hücrenin kapısına gidersin.", to: "x_pazarlik", etki: { vicdan: 1, pazarlik: true } },
{ t: "Tuncay Hoca'ya dönüp bunun durdurulması gerektiğini söylersin.", to: "a5", etki: { tanik: 1, hocaya_dedi: true } }
]},

x_masa: { saat: "Gün 2", baslik: "Monitör", metin: [
"Önünde dört siyah beyaz monitör var, yanında da Merve. Tuncay Hoca isyanı yakından görmek için koridora çıkmış.",
"Ses gelmiyor, ekranda beyaz bir bulut var. Mahkûmlar öksürerek geri çekiliyor. Kapı açılıyor, yataklar çekiliyor, biri düşüyor. Celal mi? Görüntü bulanık.",
"Merve not alıyor ama eli öyle titriyor ki kalem kâğıdı yırtıyor. “Bu yazılmayacak,” diyor kendi kendine.",
"“Neden?” diye soruyorsun.",
"Merve sana dönüyor. Yirmi altı yaşında, koridorda duyduğuna göre Tuncay Hoca'nın sevgilisi.",
"“Çünkü Tuncay bunu bekliyordu. Hipotezi kanıtlanıyor ve o mutlu. Ben de not alıyorum. Not alınca bakmak kolaylaşıyor.”",
"Ekranda Tarkan Celal'i kolundan tutup tecrit odasına çekiyor."
], secenekler: [
{ t: "Koridora koşarsın.", to: "a5", etki: { vicdan: 1, kostu: true } },
{ t: "Ne yapacağını bilmek istediğin için Merve'yle konuşmaya devam edersin.", to: "a5", etki: { tanik: 1, merve_yakin: true } },
{ t: "Kıpırdamadan ekrana bakmaya devam edersin.", to: "a5", etki: { tanik: 1, izledi: true } },
{ t: "Monitörü kapatırsın.", to: "a5", etki: { uyum: 1, kapatti: true } }
]},

x_pazarlik: { saat: "Gün 2", baslik: "Kapı", metin: [
"Birinci hücrenin kapısındasın. Yatakların arasından yüzler görünüyor, Celal en önde duruyor.",
"“Celal,” diyorsun, numarasını değil adını söylüyorsun. Arkadan bir gardiyan bir şey diyor ama duymazdan geliyorsun.",
"“Ne istiyorsunuz?”",
"Celal şaşırıyor. “Gece sayımı olmasın. Tuvalete giderken kapıda beklemeyin. Bir de...” Duraksıyor. “Bizi adlarımızla çağırın.”",
"Arkana dönüyorsun. Tarkan koridorun ucunda, elinde söndürücüyle duruyor. “Mahkûmla pazarlık yapılmaz!” diye bağırıyor.",
"Tuncay Hoca kapıda izliyor.",
"Celal parmaklıkların arasından elini uzatıyor. “Emre, bize güveniyor musun?”"
], secenekler: [
{ t: "Taleplerini Tuncay Hoca'ya iletirsin.", to: "a5", etki: { vicdan: 1, talep_iletti: true } },
{ t: "Celal'in elini sıkarsın.", to: "a5", etki: { vicdan: 2, el_sikti: true } },
{ t: "Geri çekilip Tarkan'a yer açarsın.", to: "a5", etki: { uyum: 1, cekildi: true } },
{ t: "Söndürücü gelmeden yatakları kendilerinin kaldırmasını önerirsin.", to: "a5", etki: { vicdan: 1, uyum: 1, ikna: true } }
]},

a5: { saat: "Gün 3", baslik: "Ayrıcalık Hücresi", metin: [
P(S("x_masaA"), "Koridora koştun ama tecrit odasının kapısına vardığında Tarkan çoktan kilitlemişti. “Geç kaldın,” dedi."),
P(S("x_masaB"), "“Bu deney böyle mi olmalıydı?” diye sordun. “Bilmiyorum,” dedi Merve, gözleri ekranda, “bu yüzden yapıyoruz.” Sesi kendi sesi gibi değildi, Tuncay Hoca'nınkine benziyordu."),
P(S("x_masaC"), "Ekrana baktın, tecrit odasının kapısı kapandı ve ekranda yalnızca kapı kaldı."),
P(S("x_masaD"), "Monitörü kapattın ama ses koridordan yine geldi. Merve sana bakmadan monitörü yeniden açtı."),
P(S("x_pazarlikC"), "Geri çekildin, Celal de elini çekti. Sonra söndürücünün fısıltısı, öksürükler geldi."),
P(S("a4A"), "Söndürücüyü sıktın, beyaz, soğuk bir bulut yayıldı. Biri yere düştü. Celal'i tecride Tarkan götürdü, kapıyı sen kilitledin. Anahtarı cebine koyarken ellerinin titremediğini fark ettin."),
P(S("a4D"), "Tuncay Hoca seni dinledi. “Müdür olarak karar veriyorum,” dedi, kendine artık “müdür” diyordu, “bastırın.” Sonra ekledi: “Emre, rolünden çıkma. Deneyi bozuyorsun.”"),
P(S("x_pazarlikA"), "Talepleri ilettin. Tuncay Hoca düşündü. “Gece sayımı kalsın ama adlarıyla çağrılabilirler,” dedi. Bir saat sonra Tarkan yeniden numaralarla çağırmaya başladı ve kimse bir şey demedi."),
P(S("x_pazarlikB"), "Celal'in elini sıktın. Arkandan Tarkan “Emre!” diye bağırdı. Mahkûmlar yatakları kendileri kaldırdı. O gece gardiyan odasında kimse seninle konuşmadı, çay demlenince sana bardak koymadılar."),
P(S("x_pazarlikD"), "Celal ötekilere döndü ve yatakları kendileri kaldırdılar. Tarkan söndürücüyü hayal kırıklığına uğramış gibi indirdi."),
"Üçüncü gün Tarkan bir kitapta okuduğu bir şeyi öneriyor, bir “ayrıcalık hücresi.” Bir hücre temizlenecek, orada iyi yemek verilecek ve en uslu üç mahkûm oraya alınacak.",
"“Aralarında ayrım olur,” diyor, “birbirlerinden şüphelenmeye başlarlar.”",
"Tuncay Hoca not alıyor. “İlginç,” diyor.",
"Akşam üç numara, Levent ağlamaya başlıyor. Matematik okuyan, kalın gözlüklü bir çocuk. “Çıkmak istiyorum,” diyor.",
"Tuncay Hoca kapıya geliyor. “Bırakırsan sözleşmeye göre ödeme alamazsın, bir gün daha düşün.” Oysa sözleşmede böyle bir madde yok, sen okudun, üçüncü madde öyle demiyor.",
"Levent sana bakıyor, gözlükleri buğulanmış."
], secenekler: [
{ t: "Levent'e sözleşmenin gerçekte ne dediğini söylersin.", to: "a6", etki: { vicdan: 1, tanik: 1, levent_cikti: true } },
{ t: "Söylersen adın tutanağa geçecek, bir şey söylemezsin.", to: "a6", etki: { uyum: 1 } },
{ t: "Onu korumak için Tarkan'ın planına göre Celal'i ayrıcalık hücresine seçersin.", to: "a6", etki: { uyum: 1, vicdan: 1, kemal_ayricalik: true } },
{ t: "Merve'ye gidip Levent'in çıkmasına yardım etmesini istersin.", to: "a6", etki: { tanik: 1, merveye: true } }
]},

a6: { saat: "Gün 4, gece", baslik: "Gece Vardiyası", metin: [
P(S("a5B"), "Bir şey söylemedin. Levent o gece bir saat ağladı, kimse kapıyı açmadı. Sabah numarasını adından önce söyledi."),
P(S("a5A"), "Üçüncü maddeyi söyledin, istediği zaman çıkabilirdi ve o güne kadarki ücreti ödenecekti. Levent bir saat sonra gözlüğünü önlüğüyle silerek gitti. Tutanakta senin adının yanına “protokol ihlali” diye bir not düşüldü."),
P(S("a5C"), "Celal'i ayrıcalık hücresine seçtin, temiz çarşaf, sıcak yemek. Celal anlamadı ama ötekiler anladı. O gece biri Celal'e “gardiyan köpeği” diye bağırdı."),
P(S("a5D"), "Merve'nin gözleri doldu. “Ben bir asistanım,” dedi, sonra ekledi: “Yarın Tuncay'la konuşacağım.” Levent o gece kaldı."),
"Dördüncü gece vardiyada sen, Tarkan ve Okan varsınız. Tuncay Hoca da Merve de evde. Kameralar kayıtta ama geceleri izleyen yok, Tarkan bunu biliyor. “Gece bizim,” diyor.",
"Gece yarısı mahkûmları koridora diziyor. “Eşek yarışı,” diyor, biri eğilecek, öbürü sırtına binecek. Tarkan gülüyor, Okan da gülüyor.",
"Celal eğilenlerden biri, sırtında başka bir mahkûm var. Yüzü yere yakın ve sana dönük. Gözlerinde dört gündür görmediğin bir şey var, bir boşluk.",
"Tarkan düdüğü sana uzatıyor. “Emre, hakem sen ol.”",
"Floresan ışık, dokuz eğik sırt ve bir düdük. Okan seni izliyor, Celal'in sırtındaki mahkûm sallanıyor."
], secenekler: [
{ t: "Düdüğü alırsın. Hakem olursan yarışı sen yönetirsin, belki yumuşatırsın. Belki.", to: "u1", etki: { uyum: 2, kol: "rol" } },
{ t: "İki gardiyana karşı tek başına Tarkan'ın önüne geçersin: “Bitti. Herkes hücresine.”", to: "v1", etki: { vicdan: 2, kol: "direnis" } },
{ t: "Sen dönene kadar burada ne olacağını bilmeden koridordan çıkıp Tuncay Hoca'yı evinden ararsın.", to: "ty1", etki: { tanik: 2, kol: "tanik" } },
{ t: "Kafanda bir plan kurarak, Celal'in sırtındaki yükü izleyerek kenarda bir şey demeden durursun.", to: "g1", etki: { vicdan: 1, uyum: 1, kol: "gizli" } }
]},

/* ---------- ROL KOLU ---------- */
u1: { saat: "Gün 4, gece", baslik: "Hakem", metin: [
"Düdüğü alıyorsun. Elinin onu dudaklarına götürdüğünü başkasının eliymiş gibi izliyorsun.",
"Düdüğü çalıyorsun. Mahkûmlar koridor boyunca ilerliyor, alttakiler betonda dizlerinin üstünde sürünüyor. Tarkan bağırıyor, Okan gülüyor. Biri düşünce Tarkan “Yeniden!” diyor.",
"İçinde bir şey kıpırdıyor. Önce bir rahatsızlık, sonra başka bir şey. Düdüğün sesi yankılanıyor ve dokuz kişi o sese, senin sesine göre hareket ediyor.",
"Gözlüğün arkasında yüzün görünmüyor.",
"Sıra Celal'e geliyor. Sürünüyor, bir yerde duruyor ve kalkamıyor. Dizlerinden biri kanamış, kan önlüğe yapışmış.",
"Tarkan soruyor: “Hakem, diskalifiye mi, yeniden mi?”",
"Celal başını kaldırıyor ve senin gözlüğünde kendi yüzünü görüyor."
], secenekler: [
{ t: "“Yeniden,” dersin.", to: "u2", etki: { uyum: 2, yeniden: true } },
{ t: "Onu kurtarmak için “Diskalifiye, kenara çekil,” dersin.", to: "u2", etki: { uyum: 1, vicdan: 1 } },
{ t: "Düdüğü bırakırsın, bu kadar yeter.", to: "v1", etki: { vicdan: 2, kol: "direnis", gec_direnis: true } },
{ t: "Celal yüzünü görsün diye gözlüğünü çıkarırsın.", to: "u2", etki: { vicdan: 1, gozluk_cikti: true } }
]},

u2: { saat: "Gün 5", baslik: "Yedi Numara", metin: [
P(S("u1A"), "“Yeniden,” dedin, kendi sesinle. Celal kalktı, yeniden süründü, sonuna kadar gitti. Koridorun ucunda yere uzandı ve uzun süre kalkmadı."),
P(S("u1B"), "Diskalifiye ettin, Celal kenara çekildi. Onun yerine başka biri süründü."),
P(S("u1D"), "Gözlüğünü çıkardın, Celal yüzünü gördü ve ikiniz de donup kaldınız. Sonra Celal başını eğdi, saklanacak bir şey kalmamıştı."),
"Beşinci gün vardiyalara erken gelmeye başlıyorsun. Gardiyan odasında Tarkan'la, Okan'la bir sonraki cezayı konuşuyorsunuz. Bir fikir veriyorsun, Tarkan beğeniyor, sen de beğenilmekten hoşlanıyorsun. Mahkûmlar seni görünce başlarını eğiyor.",
"Bir öğleden sonra Celal'i tuvalete götürüyorsun. Koridor boş, Celal duruyor.",
"“Emre, beni tanıyor musun?”",
"Kamera tavanda.",
"“Annen senin doğum günlerinde bana börek yapardı. Yedi yaşındaydık, ben bütün böreği yemiştim, sen de ağlamıştın.”",
"Hatırlıyorsun, mutfağın fayanslarını bile hatırlıyorsun."
], secenekler: [
{ t: "“Numaranı söyle,” dersin.", to: "u3", etki: { uyum: 2, numara: true } },
{ t: "Fısıltıyla “Hatırlıyorum,” dersin.", to: "u3", etki: { vicdan: 1, hatirladi: true } },
{ t: "Celal'i tuvalete götürüp kapıda beklemezsin, ona bir dakika verirsin.", to: "u3", etki: { vicdan: 1 } },
{ t: "Gardiyan odasına gidip Merve'ye her şeyi anlatırsın.", to: "ty2", etki: { tanik: 2, kol: "tanik", gec_tanik: true } }
]},

u3: { saat: "Gün 6", baslik: "Kayıt", metin: [
P(S("u2A"), "“Numaranı söyle,” dedin. Celal sana baktı. “Yedi,” dedi, sesinde hiçbir şey yoktu."),
P(S("u2B"), "“Hatırlıyorum,” dedin. Celal'in gözleri doldu. Kapıdan Tarkan'ın sesi geldi ve ikiniz de bir adım uzaklaştınız."),
P(S("u2C"), "Kapıda beklemedin. Celal döndüğünde yüzünü yıkamıştı. “Sağ ol,” dedi, bir dakika için."),
"Altıncı gün sabah Merve bütün gardiyanları ve Tuncay Hoca'yı bir odada topluyor. Elinde, etiketine kendi el yazısıyla “4. gece” yazdığı bir video kaset var.",
"“Dün gece evde dördüncü gecenin kayıtlarını izledim,” diyor. “Tuncay, sen izlemedin. İzle.”",
"Siyah beyaz, sessiz bir görüntü. Koridor, eğik sırtlar ve aynalı gözlüklü bir gardiyan düdüğü dudaklarına götürüyor.",
"Bu sensin.",
"Tuncay Hoca ekrana bakıyor, sonra gözlüğünü çıkarıp siliyor ama takmıyor. “Ben ne yaptım?” diyor.",
"Merve konuşuyor: “Bugün bitiyor. Ya sen bitirirsin ya ben dekanlığa giderim.”"
], secenekler: [
{ t: "Sonuna kadar ekrana bakmaya devam edersin.", to: "t1", etki: { tanik: 1, sonuna: true } },
{ t: "Odadan çıkarsın.", to: "t1", etki: { uyum: 1, cikti: true } },
{ t: "Yüksek sesle “Bu ben değilim,” dersin.", to: "t1", etki: { uyum: 1, ben_degil: true } },
{ t: "“Bu bendim,” dersin.", to: "t1", etki: { vicdan: 2, bendim: true } }
]},

/* ---------- DİRENİŞ KOLU ---------- */
v1: { saat: "Gün 4, gece", baslik: "Hayır", metin: [
P(S("a6B"), "Düdüğü almadın, Tarkan'ın eli havada kaldı. İki gardiyanın arasına yürüdün."),
P(S("ty1B"), "Telefonu bırakıp merdivenleri koşarak indin. Düdüğün sesi her basamakta biraz daha yükseldi."),
P(function(d){ return d.gec_direnis; }, "Düdüğü bıraktın, plastik bir sesle yere düştü ve yarış durdu."),
"“Bitti,” diyorsun. “Herkes hücresine.”",
"Mahkûmlar şaşkın, kime uyacaklarını bilmiyorlar. Tarkan gözlüğünü çıkarıyor ve dört gündür ilk kez yüzünü görüyorsun, kızarmış, terli, öfkeli ve korkmuş.",
"“Sen kim oluyorsun? Bu benim vardiyam.”",
"“Bu artık oyun değil Tarkan.”",
"Okan bir süre ikinizin arasında bekliyor, sonra Tarkan'ın yanına geçiyor.",
"Tarkan yüzünü yüzüne yaklaştırıyor, nefesi çay ve sigara kokuyor. “Rolünden çıkıyorsun, bu sabotaj.”",
"Celal doğrulmuş, Tarkan'ın arkasından sana bakıyor."
], secenekler: [
{ t: "Tarkan'ı umursamadan mahkûmları kendin hücrelerine götürürsün.", to: "v2", etki: { vicdan: 1, gotürdü: true } },
{ t: "Konuşmak için Tarkan'ı kolundan tutup gardiyan odasına çekersin.", to: "v2", etki: { vicdan: 1, uyum: 1, konustu: true } },
{ t: "Kameraya dönüp konuşursun: “Saat gece yarısı, dördüncü gün. Bunu kayda geçiriyorum.”", to: "v2", etki: { tanik: 2, kamera_konustu: true } },
{ t: "Celal'in yanına gidip elini uzatırsın.", to: "v2", etki: { vicdan: 2, el: true } }
]},

v2: { saat: "Gün 5", baslik: "On Üç Numara", metin: [
P(S("v1B"), "On dakika konuştunuz, ya da yalnızca sen konuştun. Sonunda Tarkan gözlüğünü çıkardı. “Yarın Hoca'ya anlatırım,” dedi ve anlattı, kendi bildiği gibi."),
P(S("v1A"), "Mahkûmları götürdün, Tarkan arkandan bağırmadı. Ertesi sabah Tuncay Hoca'nın masasında Tarkan'ın el yazısıyla bir not vardı: “Gardiyan Emre protokolü ihlal etmiş ve mahkûmlarla işbirliği yapmıştır.” İmzasının altını iki kere çizmişti."),
P(S("v1C"), "Kameraya konuştun. Ertesi sabah Tuncay Hoca kaydı izleyip seni çağırdı, yüzü bembeyazdı ama gözleri parlıyordu. “Bu çok değerli bir veri,” dedi."),
P(S("v1D"), "Celal'in elini tutup onu yerden kaldırdın. Tarkan ikinize baktı. “Demek öyle,” dedi. Ertesi sabah Tuncay Hoca'nın masasında bir not vardı."),
"Beşinci gün sabah Tuncay Hoca'nın odasındasın, Tarkan da orada.",
"“Emre, dün gece rolünden çıktın. Anlıyorum ama deneyin bir yapısı var. Gardiyan mahkûmun tarafına geçemez. Geçerse...” Duruyor ve yüzünde bir parıltı beliriyor.",
"“Geçerse mahkûm olur. Ya deneyden çıkarsın ve ücretini alırsın, ya da kalırsın, mahkûm olarak. On üç numara. Bu literatürde hiç olmadı.”",
"Tarkan gülümsüyor, gözlüğünü yeniden takmış."
], secenekler: [
{ t: "On üç numaralı mahkûm olmayı kabul edersin.", to: "v3", etki: { vicdan: 1, mahkum: true } },
{ t: "Deneyden çıkarsın ama dekanlığa gidersin.", to: "ty3", etki: { tanik: 2, kol: "tanik", cikip_dekan: true } },
{ t: "Celal'in yanındaki hücreye konmak şartıyla kabul edersin.", to: "v3", etki: { vicdan: 1, mahkum: true, kemalle: true } },
{ t: "Deneyden çıkıp ne yapacağını bilmeden kantinde oturursun.", to: "ty2", etki: { uyum: 1, sessiz_cikti: true, kol: "tanik" } }
]},

v3: { saat: "Gün 5–6", baslik: "Hücre", metin: [
P(S("v2A"), "Kabul ettin, Tuncay Hoca defterine yazıp altını çizdi."),
"Haki üniformayı çıkarıp bir önlük giyiyorsun, göğsünde on üç yazıyor. Saçlarını bir berenin altına topluyorsun, ayakkabı yerine terlik giyiyorsun. Terliklerin biri kırk iki, öbürü kırk dört numara.",
"İkinci hücreye giriyorsun, üç yatak, bir kova var. Hücre arkadaşların dün seni gardiyan olarak gördü. Biri yüzünü çeviriyor, biri yere, ayağının yanına tükürüyor.",
P(function(d){ return d.kemalle; }, "Celal yan hücrede, sesi duvarın öbür yanından geliyor: “Delirmişsin. Sağ ol.”"),
"Gece sayımı, düdük çalıyor ve sıra sana geliyor.",
"“On üç.”",
"“Daha yüksek!”",
"“On üç!”",
"Tarkan önünde duruyor. Gözlüğünde kendi yüzünü görüyorsun, önlük, numara, bere.",
"“On üç numara, yere yat. Yirmi şınav, ötekiler sayacak.”",
"Ötekiler sayıyor. Dün seni gardiyan olarak gören gençler şimdi senin cezanı yüksek sesle sayıyor."
], secenekler: [
{ t: "Şınavları çekersin.", to: "t1", etki: { uyum: 1, sinav: true } },
{ t: "Yere yatmaz, bir mahkûm olarak “Hayır,” dersin.", to: "t1", etki: { vicdan: 2, mahkum_hayir: true } },
{ t: "Tarkan'ın gözlüğüne bakıp adını söylersin: “Tarkan.”", to: "t1", etki: { vicdan: 1, tanik: 1, burak_ad: true } },
{ t: "Şınavları çekip hücre arkadaşlarına yarın birlikte hareket edeceğinizi fısıldarsın.", to: "t1", etki: { vicdan: 1, dayanisma: true } }
]},

/* ---------- TANIK KOLU ---------- */
ty1: { saat: "Gün 4, gece", baslik: "Telefon", metin: [
"Koridordan çıkıyorsun, arkandan Tarkan'ın sesi geliyor, önce adın, sonra bir küfür. Giriş katı karanlık. Kapının yanında kartlı bir telefon var, cebinde de yarım kalmış bir kart.",
"Tuncay Hoca'nın ev numarası dün Merve'nin masasındaki bir kâğıtta yazıyordu, nedenini bilmeden ezberlemiştin.",
"Telefon dört kere çalıyor, sonra uykulu bir kadın sesi “Kim o?” diye soruyor. Söylüyorsun, sonra telefona Tuncay Hoca geliyor.",
"Eşek yarışını, eğik sırtları, Celal'in gözlerini anlatıyorsun. Bir yerde sesin kırılıyor.",
"“Emre, gece yarısı oldu, sabah konuşalım. Fiziksel şiddet var mı?”",
"“Yok ama...”",
"“O zaman protokolün içinde. Rolüne dön, lütfen. Bu çok önemli bir veri.”",
"Hat kapanıyor. Kartın ekranında üç kontör kalmış.",
"Aşağıda düdük çalıyor."
], secenekler: [
{ t: "Merve'yi ararsın.", to: "ty2", etki: { tanik: 1, merve_ara: true } },
{ t: "Aşağı inip Tarkan'ı kendi başına durdurursun.", to: "v1", etki: { vicdan: 2, kol: "direnis" } },
{ t: "Polisi ararsın.", to: "ty2", etki: { tanik: 2, polis: true } },
{ t: "Telefonun yanında sabaha kadar oturursun.", to: "ty2", etki: { uyum: 1, kulube: true } }
]},

ty2: { saat: "Gün 5", baslik: "Merve", metin: [
P(S("v2D"), "Deneyden çıkıp kantine oturdun. Bir saat sonra Merve elinde iki çayla yanına geldi."),
P(S("ty1A"), "Merve ilk çalışta açtı, uyumuyormuş. “Geliyorum,” dedi. Yirmi dakika sonra pijamasının üstüne bir mont geçirmiş hâlde kapıdaydı. Bodruma indi ve düdük sustu."),
P(S("ty1C"), "Polis yarım saat sonra geldi. İki memur aşağı indi, baktılar, birbirlerine baktılar. “Bu bir deney mi? İzni var mı?” diye sordular. Tarkan var dedi ve polis gitti. Gece devam etti ama sabah bütün fakülte polisin geldiğini biliyordu."),
P(S("ty1D"), "Sabaha kadar oturdun. Telefonun camında kendi yansımanı, haki üniformayı gördün. Saat altıda Merve geldi, seni gördü ama bir şey sormadı."),
P(function(d){ return d.gec_tanik; }, "Merve gardiyan odasındaydı. Beş günü, düdüğü, “Beni tanıyor musun?” sorusunu anlattın. Merve dinlerken ağladı."),
"Sabah kantindesiniz, Merve kahvesini karıştırıyor.",
"“Ben de görüyorum,” diyor. “Her akşam Tuncay'a fazla olduğunu söylüyorum, o da her akşam bir gün daha diyor, bu literatürü değiştirecek diyor.”",
"“Biz birlikteyiz, biliyorsun herhalde. Ona karşı gidersem bir deneye değil, bir insana karşı gitmiş olurum. Kariyerime de.”",
"“Ama sen gidebilirsin, dekanlığa. Ben gidemem.”"
], secenekler: [
{ t: "“Birlikte gidelim,” dersin.", to: "ty3", etki: { tanik: 1, birlikte: true } },
{ t: "“Ben giderim,” dersin.", to: "ty3", etki: { tanik: 2, tek: true } },
{ t: "“Sen Tuncay Hoca'yla son bir kez konuş, sonra ben giderim,” dersin.", to: "ty3", etki: { tanik: 1, vicdan: 1, son_sans: true } },
{ t: "“Belki o haklıdır, belki bu gerçekten önemlidir,” dersin.", to: "ty3", etki: { uyum: 1, belki_hakli: true } }
]},

ty3: { saat: "Gün 5", baslik: "Dekan", metin: [
P(S("ty2A"), "Merve kahvesine baktı, sonra kalktı. “Ceketimi alayım,” dedi."),
P(S("ty2B"), "Merve hem rahatlamış hem utanmış görünüyordu. Dekanlığın kapısına, üçüncü kata kadar merdivenleri yalnız çıktın."),
P(S("ty2D"), "“Dün gece ne gördün?” dedi Merve, sen de anlattın. Cümlenin sonunda kendi sorunun cevabını duydun. Bir saat sonra dekanlıktaydın."),
P(function(d){ return d.cikip_dekan; }, "Üniformayı katlamadan Tuncay Hoca'nın masasına bıraktın, ücretini de almadın. Dekanlığa çıktın."),
P(S("ty2C"), "Merve Tuncay Hoca'yla bir saat konuştu, çıktığında yüzü taş gibiydi. “Bir gün daha istiyor,” dedi. “Ben gidiyorum, sen gelme.” Sonra durdu. “Hayır, gel.”"),
"Dekan Prof. Dr. Gülten Sezer altmışlarında, eskiden sosyal psikologmuş. Masasında kulağı kırık bir kedi biblosu duruyor. Seni dinliyor, bir kere bile sözünü kesmiyor.",
"Sonra kalkıp asansöre biniyor ve bodruma kendisi iniyor.",
"Gardiyanlar onu görünce donup kalıyor, mahkûmlar parmaklıkların arkasından bakıyor. Dekan her hücrenin önünde biraz duruyor.",
"Sonra Tuncay Hoca'ya dönüyor.",
"“Tuncay, bunlar kim? Numaralar mı, yoksa öğrencilerimiz mi?”",
"Tuncay Hoca cevap vermiyor.",
"“Saat on bir. On ikide bu bodrum boşalmış olacak. Öğleden sonra da benim odamdasın.”"
], secenekler: [
{ t: "Hücre kapılarını kendin açarsın.", to: "t1", etki: { vicdan: 1, kapilari_acti: true } },
{ t: "Merve'ye bakarsın.", to: "t1", etki: { tanik: 1 } },
{ t: "Hâlâ gözlüğü takılı olan Tarkan'a bakarsın.", to: "t1", etki: { tanik: 1, burak_bakti: true } },
{ t: "İlk o çıksın diye Celal'in hücresine gidersin.", to: "t1", etki: { vicdan: 1, kemal_ilk: true } }
]},

/* ---------- GİZLİ KOL ---------- */
g1: { saat: "Gün 4–5", baslik: "Ekmek", metin: [
"Kenarda duruyorsun, yarış sürüyor. Bir şey yapmadığın her saniye aslında bir şey yapıyorsun.",
"Kafanda bir plan var. Vardiya sonunda yemek odasından bir ekmek, iki üçgen peynir, bir şişe su alıp gömleğinin altına saklayacaksın.",
"Sabaha karşı Celal'i tuvalete götürüyorsun. Tuvalette kamera yok, ekmeği, peyniri, suyu lavabonun altına bırakıyorsun.",
"Celal bakıyor ve anlıyor ama bir şey demiyor.",
"Ertesi gün aynısını yapıyorsun, bu sefer bir de not bırakıyorsun: “Dayan, iki gün daha. E.”",
"Gündüz gardiyan odasında Tarkan'la, Okan'la bir sonraki cezayı konuşuyorsunuz. Sen de zararsız görünen bir fikir veriyorsun, hücrelerini kendileri temizlesin diyorsun. Tarkan beğeniyor.",
"Gece ekmek bırakıp gündüz ceza öneren biri oldun."
], secenekler: [
{ t: "Öbür mahkûmlara da yiyecek bırakmaya başlarsın.", to: "g2", etki: { vicdan: 1, herkese: true } },
{ t: "Riski küçük tutmak için yalnızca Celal'e bırakırsın.", to: "g2", etki: { uyum: 1, yalniz_kemal: true } },
{ t: "Notlara hangi gardiyanın ne zaman, nerede olduğunu da eklersin.", to: "g2", etki: { vicdan: 1, tanik: 1, bilgi: true } },
{ t: "Bir tanık olsun diye Merve'ye gizlice ne yaptığını anlatırsın.", to: "g2", etki: { tanik: 1, merve_bilir: true } }
]},

g2: { saat: "Gün 5", baslik: "Mektup", metin: [
P(S("g1B"), "Yalnızca Celal'e bıraktın, öbür sekiz mahkûm aç uyudu. Bir gece biri Celal'in ağzında peynir kokusu aldı ama bir şey demedi."),
P(S("g1C"), "Notlara Tarkan'ın hangi saatte, Okan'ın nerede olduğunu ekledin. Celal'in elinde bir harita oldu."),
P(S("g1A"), "Her gece üç tuvalete, üç lavabonun altına üç paket bıraktın. Mahkûmlar arasında içeride bir dost olduğuna dair bir fısıltı dolaşmaya başladı ama kimse kim olduğunu söylemedi."),
P(S("g1D"), "Merve seni dinledi. “Bunu notlarıma yazmayacağım,” dedi, “ama biliyorum.”"),
"Beşinci gün akşam lavabonun altında senin bırakmadığın bir şey var, katlanmış bir kâğıt, Celal'in yazısı.",
"“Emre, bunu anneme götür. Teyzemin Bağcılar'daki evinde kalıyor. Deneyde olduğumu bilmiyor, kampta sanıyor. Okursa korkar ama okusun. Birine yazmam lazım. Sana değil, sen buradasın.”",
"Bir mendil kâğıdına kurşunkalemle yazmış. Okumuyorsun ama bir kelime gözüne çarpıyor: “kayboluyorum.”",
"Gardiyan odasında Tarkan oturuyor, gözlüğü kafasının üstünde.",
"“Emre, son iki gecedir yemek odasında ekmek eksik çıkıyor, peynir de. Senin bir şeyden haberin var mı?”"
], secenekler: [
{ t: "Gözünü kırpmadan “Hayır,” dersin.", to: "g3", etki: { uyum: 1, yalan: true } },
{ t: "“Evet, bendim,” dersin.", to: "g3", etki: { vicdan: 2, itiraf: true } },
{ t: "“Belki Okan'dır,” dersin.", to: "g3", etki: { uyum: 1, hakan_suc: true } },
{ t: "Duymazdan gelip mektubu cebine koyarsın, vardiya bitince Bağcılar'a gideceksin.", to: "g3", etki: { vicdan: 1, mektup_goturdu: true } }
]},

g3: { saat: "Gün 6", baslik: "İki Yüz", metin: [
P(S("g2A"), "“Hayır,” dedin. Tarkan uzun uzun yüzüne baktı. “Peki,” dedi. Ertesi gece yemek odasının kapısına bir asma kilit takıldı, anahtarı da Tarkan'ın boynunda bir ipe asılıydı."),
P(S("g2B"), "“Bendim,” dedin. Tarkan'ın yüzünde önce öfke, sonra şaşkınlık belirdi. “Neden? Bu bir oyun.” “Senin için öyle,” dedin. Tarkan bunu Tuncay Hoca'ya söylemedi, nedenini de hiç öğrenmeyeceksin."),
P(S("g2C"), "“Belki Okan'dır,” dedin. Ertesi gün Okan Tuncay Hoca'nın odasından kıpkırmızı bir yüzle çıktı. Koridorda sana baktı ama senden şüphelenmedi bile."),
P(S("g2D"), "Vardiya bitince Bağcılar'a gittin, dördüncü kata çıktın. Kapıyı Celal'in annesi, seni çocukluğundan tanıyan kadın açtı. Mektubu okudu, oturdu, ağladı. “Kampta sanıyordum,” dedi. Sonra sana baktı. “Sen orada ne yapıyorsun?” Cevap veremedin."),
"Altıncı gün sabah Merve bütün gardiyanları bir odada topluyor, elinde bir video kaset var.",
"“Bugün bitiyor,” diyor. “Dekanlığa gittim, kayıtlar orada.”",
"Ekranda dördüncü gece görünüyor, koridor, eğik sırtlar, düdük. Kenarda bir gardiyan hiçbir şey yapmadan duruyor. Bu sensin.",
"Tuvaletler kayda girmiyor, lavabolar kayda girmiyor. Ekranda yalnızca yarışı izleyen bir gardiyan var."
], secenekler: [
{ t: "Merve'ye gece yaptıklarını, kayıtta olmayanları anlatırsın.", to: "t1", etki: { tanik: 1, anlatti_merve: true } },
{ t: "Bir şey söylemezsin, kayıt ne diyorsa o.", to: "t1", etki: { uyum: 1, kayit_kabul: true } },
{ t: "Ne bildiğini o bildiği için Celal'e bakarsın.", to: "t1", etki: { vicdan: 1 } },
{ t: "“Ben kenardaydım,” dersin, “ama bu bir şey yapmamak değildi.”", to: "t1", etki: { vicdan: 1, tanik: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "Gün 6", baslik: "Bitiş", metin: [
P(S("u3A"), "Kaydı sonuna kadar izledin. Kırk dakika boyunca düdük, sırtlar, bir yerde de senin gülüşün vardı. Işıklar yanınca kimse sana bakmadı."),
P(S("u3B"), "Odadan çıktın, koridorda nefes alamadın. Merve arkandan gelip sana bir bardak su uzattı."),
P(S("u3C"), "“Bu ben değilim,” dedin. Tarkan başını salladı. “Ben de değilim,” dedi. Tuncay Hoca not aldı."),
P(S("u3D"), "“Bu bendim,” dedin ve oda sustu. Merve sana ilk kez bir gardiyana değil, bir insana bakar gibi baktı."),
P(S("v3A"), "Şınavları çektin, on yedincide kolların titredi. Sayıları sen de içinden onlarla birlikte saydın."),
P(S("v3B"), "“Hayır,” dedin. Tarkan seni tecrit odasına götürdü. Süpürge dolabının karanlığında iki saat kaldın, bir paspasın sapı sırtına batıyordu."),
P(S("v3C"), "“Tarkan,” dedin. Gözlüğün arkasında bir şey kıpırdadı. “Numaranı söyle,” dedi ama sesi bir ton düşmüştü."),
P(S("v3D"), "“Yarın birlikte,” demiştin. Ertesi sabah sayımda dokuz mahkûm aynı anda sustu. Tarkan düdük çaldı ama kimse kıpırdamadı. O sabah Merve kamerayı izliyordu."),
P(S("ty3A"), "Kapıları sen açtın, anahtarlar elinde şıngırdadı. Mahkûmlar önce tuzak sandılar, çıkmadılar. Sonra biri çıktı, sonra hepsi."),
P(S("ty3B"), "Merve kollarını kavuşturmuş, sessizce ağlıyordu. Göz göze gelince başını eğdi."),
P(S("ty3C"), "Tarkan'ın gözlüğü dekan konuşurken de takılıydı, çıkarmadı. Belki de çıkaramıyordu."),
P(S("ty3D"), "Celal kapıda durdu. “Sen mi?” dedi, evet dedin. Bir şey demeden yanından geçti, bu sefer omzu omzuna değmedi."),
P(S("g3A"), "Merve'ye ekmekleri, notları anlattın. “Bunu kayıt görmedi,” dedi, “makale de görmeyecek.”"),
P(S("g3B"), "Bir şey demedin. Kayıt ne diyorsa oydun, kenarda duran bir gardiyan."),
P(S("g3C"), "Celal'e baktın, başını belli belirsiz eğdi. Lavabonun altını bilen tek kişi oydu."),
P(S("g3D"), "Tuncay Hoca kaşını kaldırdı. “Kayıtta gördüğümüz bu değil ama,” dedi."),
"Deney on dört gün sürecekti ama altıncı günde bitti. Bir saat içinde bodrum yine eski bodrum oldu, tozlu, nemli, eski sandalyelerle dolu. Biri numarasını “Sigara İçilmez” levhasının altına bırakmıştı, dört.",
"Öğleden sonra bir sınıfta “bilgilendirme toplantısı” yapılıyor. Tuncay Hoca kürsüde, yorgun görünüyor, Merve yanında.",
"Mahkûmlar konuşuyor. Biri “İkinci günden sonra numaramı adımdan önce hatırlıyordum,” diyor. Gardiyanların bazıları özür diliyor, bazıları kendini savunuyor. Okan ağlıyor, burnunu koluna siliyor.",
"Tarkan kalkıyor, sesi artık gür değil. “Ben rolümü oynadım. Bir hapishane istendi, ben de verdim. Başka ne yapacaktım?”",
"Sonra Celal kalkıyor. “Dördüncü gece Tarkan'ın gözlüğünde kendi yüzümü gördüm,” diyor. “O yüzün bana ait olmadığını düşündüm. Sonra belki Tarkan'ın yüzünün de ona ait olmadığını düşündüm.”",
"Sonra sana dönüyor."
], secenekler: [
{ t: "Ayağa kalkıp konuşursun.", to: "t1b", etki: { tanik: 1, konustu_sinif: true } },
{ t: "Bir şey demeden Celal'in bakışını karşılarsın.", to: "t1b", etki: { vicdan: 1 } },
{ t: "Onun da bir şey söylemesi gerektiği için Tarkan'a bakarsın.", to: "t1b", etki: { tanik: 1 } },
{ t: "Gözlerini yere indirirsin.", to: "t1b", etki: { uyum: 1, yere: true } }
]},

t1b: { saat: "Gün 6, akşam", baslik: "Celal", metin: [
P(S("t1B"), "Celal'in bakışını karşıladın. Bir süre sonra o başını çevirdi ve toplantı bitti."),
P(S("t1C"), "Tarkan yere bakıyordu. Bir şey söylemesini bekledin ama söylemedi."),
P(S("t1D"), "Gözlerini yere indirdin. Tuncay Hoca “Teşekkürler,” deyip bir sonrakine geçti."),
P(S("t1A"), "Kalktın. “Ben bir parayla gardiyan oldum,” dedin. “Celal'inki tura geldi, benimki yazı. Aramızdaki tek fark bu.” Oturdun ve kimse bir şey demedi."),
"Akşam fakültenin bahçesinde bir banka oturuyorsunuz, ağustos böcekleri ötüyor. Altı gün önce burada oturup parayı nasıl harcayacağınızı konuşmuştunuz, Celal ikinci el bir bilgisayar alacaktı.",
"Celal uzun süre bir şey demiyor.",
P(function(d){ return d.kol === "rol"; }, "“Dördüncü gece düdüğü çalarken seni tanıyamadım,” diyor. “Bunu kızdığım için söylemiyorum. Ben gardiyan olsaydım ne yapardım, onu da bilmiyorum. Para tura geldi işte.”"),
P(function(d){ return d.kol === "direnis"; }, "“Hücreye girdin,” diyor. “Ben girmezdim. Gardiyan olsaydım büyük ihtimalle Tarkan gibi olurdum. Bunu bilmek istemezdim ama şimdi biliyorum.”"),
P(function(d){ return d.kol === "tanik"; }, "“Dekanı sen getirmişsin, Merve söyledi. O gece yukarı çıktığını görmüştüm, kaçtın sandım. Seni affetmeyecektim. Sonra ertesi gün dekan geldi.”"),
P(function(d){ return d.kol === "gizli"; }, "“Ekmeği sen bırakıyordun, biliyordum. Ama kayıtta yoksun. Yarın bütün okul seni kenarda duran bir gardiyan olarak görecek ve gerçeği yalnızca ben bileceğim. Bu yeter mi?”"),
"Bir köpek havlıyor.",
"“Bizi neden seçtiler biliyor musun? Testlerde en normal çıkanlar olduğumuz için. Kötüleri değil, normalleri seçtiler.”"
], secenekler: [
{ t: "“Belki asıl korkunç olan da bu,” dersin.", to: "t2", etki: { tanik: 1 } },
{ t: "Celal'e annesinin böreğini anlatırsın.", to: "t2", etki: { vicdan: 1, borek: true } },
{ t: "Neye olduğunu tam bilmeden özür dilersin.", to: "t2", etki: { vicdan: 1, ozur: true } },
{ t: "Bir sigara yakıp Celal'e de uzatırsın, hiç konuşmazsınız.", to: "t2", etki: { uyum: 1 } }
]},

t2: { saat: "2004", baslik: "Makale", metin: [
P(S("t1bA"), "“Normal olmak,” dedi Celal, “evet.” Sonra bir dal parçası alıp toprağa bir şey çizdi, sonra sildi."),
P(S("t1bB"), "Böreği anlattın, mutfağın fayanslarını, annenin “Bir dilim de Emre'ye bırak” deyişini. Celal güldü, gülerken ağladı."),
P(S("t1bC"), "Özür diledin. Celal elini omzuna koydu. “Ben de neye olduğunu bilmiyorum,” dedi."),
P(S("t1bD"), "İki duman yükseldi. O bilgisayar hiç alınmadı, para bir zarfın içinde Celal'in çekmecesinde kaldı."),
"Bir yıl sonra Tuncay Hoca uluslararası bir dergide bir makale yayımlıyor: “Durumsal Güç ve Kimlik Çözülmesi: Türkiye'de Bir Hapishane Simülasyonu.” Arkasından konferanslar, röportajlar, bir de belgesel teklifi geliyor.",
"Makalede sen “G4” diye geçiyorsun.",
P(function(d){ return d.kol === "rol"; }, "“G4, dördüncü günden itibaren rolünü belirgin biçimde benimsemiş ve aşağılayıcı uygulamalara aktif olarak katılmıştır.”"),
P(function(d){ return d.kol === "direnis"; }, "“G4, dördüncü gece rolünü reddetmiş ve deney yöneticisinin önerisiyle mahkûm rolüne geçirilmiştir (M13). Ardından hızla mahkûm davranışları sergilemiştir.”"),
P(function(d){ return d.kol === "tanik"; }, "“G4, deneyin dışından yardım isteyerek erken sonlandırılmasında rol oynamıştır. Ancak ilk üç gündeki davranışları rolle uyumludur.”"),
P(function(d){ return d.kol === "gizli"; }, "“G4, kayıtlarda pasif bir gözlemci olarak görünmektedir. Uygulamalara katılmamış ancak durdurmaya da çalışmamıştır.”"),
"Tuncay Hoca seni arayıp bir televizyon programına çağırıyor. “Deneyin değerini anlatırsın. Kontrollüydü, etikti, öğreticiydi. Senin sesin önemli.”"
], secenekler: [
{ t: "Kabul edip Tuncay Hoca'nın istediği gibi konuşursun.", to: "t3", etki: { uyum: 2, tv_kabul: true } },
{ t: "Reddedip makalede olmayanları anlatan bir mektubu dergiye yazarsın.", to: "y_mektup", etki: { tanik: 2, mektup_dergi: true } },
{ t: "Programa katılırsın ama kendi hikâyeni olduğu gibi anlatırsın.", to: "y_tv", etki: { tanik: 1, vicdan: 1, tv_kendi: true } },
{ t: "Reddedersin ve hiçbir şey söylemezsin.", to: "t3", etki: { uyum: 1, sessiz: true } }
]},

y_mektup: { saat: "2004", baslik: "Okuyucu Mektubu", metin: [
"Dergiye İngilizce bir mektup yazıyorsun, yanında açık bir sözlükle, üç hafta sürüyor. Kafedeki molalarda peçetelere taslaklar karalıyorsun. Başlığını “G4'ten” koyuyorsun.",
"Protokolün “fiziksel şiddet yok” dışında hiçbir sınır koymadığını yazıyorsun. Tuncay Hoca'nın kendine “müdür” dediğini, hem yürütücü hem de deneyin bir parçası olduğunu yazıyorsun. Çıkmak isteyen birine sözleşmede olmayan bir maddeyi hatırlattığını, gece kayıtlarını kimsenin izlemediğini yazıyorsun.",
P(function(d){ return d.kol === "gizli"; }, "Bir de kayıtta olmayanları, lavabonun altındaki ekmekleri, bir anneye götürülen mektubu yazıyorsun."),
"Son paragraf şöyle: “Makale bu deneyin durumun gücünü gösterdiğini söylüyor. Ama durumu kuran birinin gücünü de gösterdi. Dördüncü gece onu bodrumda göremedim, evindeydi.”",
"Mektup altı ay sonra kısaltılarak yayımlanıyor.",
"Tuncay Hoca seni bir daha hiç aramıyor."
], secenekler: [
{ t: "Mektubun bir kopyasını Celal'e gönderirsin.", to: "t3", etki: { vicdan: 1, kemale_kopya: true } },
{ t: "Merve'ye gönderirsin.", to: "t3", etki: { tanik: 1, merveye_kopya: true } },
{ t: "“Kayıtları siz de izleyin,” diye bir not ekleyerek Tuncay Hoca'ya gönderirsin.", to: "t3", etki: { tanik: 1 } },
{ t: "Yayımlanması yeter, kimseye göndermezsin.", to: "t3", etki: { uyum: 1 } }
]},

y_tv: { saat: "2004", baslik: "Stüdyo", metin: [
"Bir stüdyodasınız, sunucu, Tuncay Hoca, bir psikiyatrist ve sen. Makyöz yüzüne pudra sürerken hapşırıyorsun. Tuncay Hoca akıcı ve ikna edici konuşuyor.",
"Sunucu sana dönüyor. “Siz gardiyandınız. Neler yaşadınız?”",
"Tuncay Hoca bir beklentiyle sana bakıyor.",
"Anlatıyorsun, yazı turayı, gözlüğü, gece sayımını, Celal'in şınavlarını, dördüncü geceyi.",
P(function(d){ return d.kol === "rol"; }, "“Düdüğü ben çaldım,” diyorsun kameraya bakarak. “Bir arkadaşım sürünürken ‘Yeniden’ diyen bendim. Bunu durum yapmadı, ben yaptım. Durum yalnızca kolaylaştırdı.”"),
P(function(d){ return d.kol !== "rol"; }, "“‘Hayır’ demek mümkündü,” diyorsun. “Zordu ama mümkündü. Makale durumun herkesi aynı şekilde ezdiğini söylüyor ama ezmedi. Herkes bir şey seçti, bazılarımız kötü şeyler seçti.”"),
"Stüdyoya bir sessizlik çöküyor, Tuncay Hoca'nın elleri masanın altında.",
"Psikiyatrist söz alıyor. “Durum bir açıklamadır, mazeret değil,” diyor.",
"Kuliste Tuncay Hoca yanına geliyor, bir şey diyecek gibi oluyor ama demiyor, gidiyor."
], secenekler: [
{ t: "Arkasından seslenirsin: “Hocam, siz de bir şey seçtiniz.”", to: "t3", etki: { tanik: 1, seslendi: true } },
{ t: "Celal'i arayıp programı izleyip izlemediğini sorarsın.", to: "t3", etki: { vicdan: 1 } },
{ t: "Kuliste aynaya bakarsın.", to: "t3", etki: { tanik: 1, kulis_ayna: true } },
{ t: "Sunucuya Tarkan'ı da programa çağırmalarını önerirsin.", to: "t3", etki: { tanik: 1, burak_cagir: true } }
]},

t3: { saat: "2015", baslik: "Ofis", metin: [
P(S("t2A"), "Tuncay Hoca'nın istediği gibi konuştun. Ertesi gün Celal'den tek kelimelik bir mesaj geldi: “İzledim.”"),
P(S("t2D"), "Reddettin ve makale on bir dile çevrildi."),
P(S("y_mektupA"), "Celal bir hafta sonra yazdı: “Teşekkür ederim. Bunu benim de yazabilmem gerekirdi.”"),
P(S("y_mektupB"), "Merve doktorayı bırakıp bir lisede rehber öğretmen olmuştu. “Keşke o gece ben yazsaydım,” dedi."),
P(S("y_mektupC"), "Cevap gelmedi. Bir yıl sonra makalenin yeni baskısına bir dipnot eklendi: “Katılımcı G4'ün itirazları için bkz.”"),
P(S("y_mektupD"), "Kimseye göndermedin, belki de yirmi üç kişi okudu."),
P(S("y_tvA"), "Tuncay Hoca kapıda durdu, dönmedi ama durdu."),
P(S("y_tvB"), "“Doğru anlattın,” dedi Celal, sonra durdu. “Ama sesin titriyordu.”"),
P(S("y_tvC"), "Aynada pudralı bir yüz gördün, bir peçeteyle sildin, peçete bej oldu."),
P(S("y_tvD"), "Sunucu not aldı ama Tarkan hiç çağrılmadı, ya da çağrıldı ama gelmedi."),
"On iki yıl geçiyor. Otuz üç yaşındasın ve bir lojistik şirketinde insan kaynakları müdürüsün. Sosyoloji diploman duvarda asılı, çerçevesinin camı çatlak ama değiştirmeye üşeniyorsun.",
"Bir pazartesi bir stajyer geliyor. Yirmi iki yaşında, adı Pelin, iki aydır muhasebe biriminde çalışıyor, gözleri kıpkırmızı.",
"Biriminin şefi her sabah herkesin önünde ona “stajyer kız” diyormuş, adını hiç kullanmıyormuş. Fikirlerini başkasına mal ediyormuş. Geçen hafta bir hata yüzünden onu toplantıda ayağa kaldırıp hatasını yüksek sesle okutmuş. Ötekiler gülmüş, biri de telefonuyla çekmiş.",
"“Tek tek konuşunca hepsi kibar,” diyor Pelin, “ben delirmişim gibi oluyor.”",
"Şef Rıza Bey şirketin en verimli şefi ve genel müdürün golf arkadaşı.",
"“Siz bir şey yapabilir misiniz?” diye soruyor Pelin."
], secenekler: [
{ t: "Ne pahasına olursa olsun Rıza Bey'in birimine soruşturma açarsın.", to: "t4", etki: { vicdan: 2, sorusturma: true } },
{ t: "Pelin'i sessizce başka bir birime aldırırsın.", to: "t4", etki: { uyum: 1, vicdan: 1, tasidi: true } },
{ t: "Bir sabah habersiz muhasebe birimine gidip toplantıyı izlersin.", to: "t4", etki: { tanik: 2, izledi_toplanti: true } },
{ t: "“Bu şirketin kültürü böyle Pelin, dayan,” dersin.", to: "t4", etki: { uyum: 2, dayan: true } }
]},

t4: { saat: "2023", baslik: "Tarkan", metin: [
P(S("t3A"), "Soruşturma açtın, genel müdür seni uyardı. Önce dört çalışan ifade verdi, sonra dokuz. Rıza Bey görevden alındı. Sen terfi alamadın ama Pelin bir yıl sonra kadroya geçti."),
P(S("t3B"), "Pelin'i başka bir birime aldırdın. Ertesi yıl muhasebeye başka bir stajyer geldi ve ona da “stajyer kız” dendi."),
P(S("t3C"), "Bir sabah toplantı odasının kapısında durdun. İçeride biri ayakta duruyor, ötekiler gülüyordu. Seni görünce herkes sustu. O sabah için bu yetti."),
P(S("t3D"), "“Dayan,” dedin. Pelin iki hafta sonra istifa etti. Çıkış görüşmesinde tek bir cümle söyledi: “Siz de gülenlerdensiniz.”"),
"2023 yılı, kırk bir yaşındasın. Tarkan'dan bir e-posta geliyor.",
"“Emre, yirmi yıl oldu. Adresini Celal'den aldım, istemeye istemeye verdi.”",
"“İki yıl önce bir oğlum oldu. Geçen hafta parkta bir çocuk onu itti, ötekiler güldü. Ben o çocuğa bağırdım ve bağırırken sesimi tanıdım. Bodrumdaki sesimdi.”",
"“Yirmi yıl boyunca ‘Rolümü oynadım’ dedim. Ama o bodrumda bir rol yoktu, ben vardım. Ve ben o düdüğü sevdim.”",
"“Sen oradaydın. Ne gördüğünü bana söyler misin?”"
], secenekler: [
{ t: "Gördüğünü olduğu gibi yazarsın.", to: "bs", etki: { tanik: 2, burak_cevap: "gercek" } },
{ t: "“Hepimiz rol yaptık Tarkan, sen de ben de,” diye yazarsın.", to: "bs", etki: { uyum: 1, burak_cevap: "rol" } },
{ t: "Onunla yüz yüze, gözlüksüz buluşmayı teklif edersin.", to: "bs", etki: { vicdan: 2, burak_cevap: "bulusma" } },
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
P(S("t4D"), "Tarkan'ın e-postası gelen kutunda okunmuş ama cevapsız duruyor."),
P(function(d){ return d.tv_kabul; }, "Televizyonda deneyin kontrollü olduğunu söylemiştin. Bu cümle seni de korudu ve yıllarca işine yaradı."),
"Dördüncü gece düdüğü dudaklarına götürdüğünde bir güç hissettin ve bu hoşuna gitti. Bunu Celal'in gözlerinde gördün, Celal de gördü.",
P(function(d){ return d.burak_cevap === "rol"; }, "Tarkan'a “Hepimiz rol yaptık,” diye yazdın, bir daha yazmadı."),
P(function(d){ return d.burak_cevap === "gercek"; }, "Tarkan'a gördüğünü yazdın. Yazarken kendi düdüğünü, kendi “Yeniden”ini de yazdın. Cevap geldi: “Sen de aynı koridordaydın, değil mi?” Evet."),
"Celal'le bayramlarda konuşuyorsunuz, kısa ve kibar konuşmalar. Börekten hiç söz etmiyorsunuz.",
"Bir toplantıda biri bir stajyere bağırınca ötekilerle birlikte gülümsediğini fark ediyorsun. Gülümsemen birkaç saniye yüzünde kalıyor, sonra iniyor."
]},

son_hucre: { son: true, baslik: "On Üç Numara", metin: [
P(S("t4D"), "Tarkan'ın e-postası gelen kutunda okunmuş ama cevapsız duruyor."),
"Literatürde “G4/M13” diye, bir dipnot olarak geçiyorsun.",
"O iki günü hiç unutmadın, önlüğü, numarayı, yere eğilmiş bedenini. Yukarıda aynalı bir gözlükte gördüğün kendi yüzünü. Bir gün önce o gözlüğün arkasında sen vardın.",
P(function(d){ return d.mahkum_hayir; }, "Mahkûmken de “hayır” dedin ve ertesi gün süpürge dolabında dört saat kaldın. Paspas kovasının kokusu hâlâ burnunda."),
P(function(d){ return d.dayanisma; }, "“Yarın birlikte” demiştin. Ertesi sabah dokuz kişi aynı anda yere yatmadı. Tarkan ne yapacağını bilemedi, düdüğü ağzından çıkarıp bir süre eline baktı."),
"Sosyolog olmadın, insan hakları avukatı oldun. Yılda birkaç kere cezaevlerine gidiyorsun.",
"Bazen bir gardiyana adını soruyorsun, çoğu şaşırıyor. Biri geçen ay “Ramazan,” dedi, sonra ekledi: “Ama burada herkes bana başgardiyan der.”"
]},

son_tanik: { son: true, baslik: "Üçüncü Kat", metin: [
P(S("t4D"), "Tarkan'ın e-postası gelen kutunda okunmuş ama cevapsız duruyor."),
"Deneyi dekan durdurdu, dekana da sen çıktın, üçüncü kata, merdivenlerden.",
"Makalede senin için bir dipnot var: “G4, deneyin erken sonlandırılmasında rol oynamıştır.” Rol kelimesi orada bile.",
P(function(d){ return d.mektup_dergi; }, "Mektubun bugün bazı derslerde okutuluyor. Bir öğrenci sana yazdı: “Ben de bir deneyde gözlemciyim ve bir şeyler yanlış gidiyor.” Ona şu cevabı yazdın: “Yukarı çık, birine göster. Tek başına durdurmaya çalışma ama tek başına susma da.”"),
"Merve doktorasını bitirdi, Tuncay Hoca'dan ayrıldı. Şimdi bir üniversitede araştırma etiği kurulunun başında. Bir konferansta sana “O sabah kantinde sen ‘Ben giderim’ demeseydin ben gitmezdim,” dedi.",
P(function(d){ return d.burak_cevap === "gercek" || d.burak_cevap === "bulusma"; }, "Tarkan'a cevap verdin ve ona gördüğünü söyledin."),
"O telefonu hâlâ düşünüyorsun, karanlık holü, kartın ekranında kalan üç kontörü, aşağıdan gelen düdük sesini."
]},

son_iki_yuz: { son: true, baslik: "İki Yüz", metin: [
P(S("t4D"), "Tarkan'ın e-postası gelen kutunda okunmuş ama cevapsız duruyor."),
"Kayıtlarda kenarda duran bir gardiyansın. Derslerdeki bir slaytta aynalı gözlüklü bir siluet olarak görünüyorsun.",
"Kayıtta olmayanlar ise lavabonun altındaki ekmekler, bir mendil kâğıdına yazılmış bir mektup ve bir annenin kapısı.",
P(function(d){ return d.mektup_goturdu; }, "Celal'in annesi o mektubu hâlâ bir çerçevede saklıyor, “kayboluyorum” yazan mektubu. Altına kendi el yazısıyla “Emre getirdi” diye eklemiş."),
"Celal'le her yıl aynı bankta buluşuyorsunuz. Bir yıl “Senin ekmeğin olmasa dayanamazdım,” dedi, “ama Tarkan'a ‘hayır’ deseydin belki ekmeğe ihtiyacım olmazdı.”",
"Cevap vermedin, Celal de beklemedi. Bankın kenarına bir simit koydu, bir güvercin geldi."
]},

son_ayna: { son: true, baslik: "Ayna", metin: [
P(S("t4D"), "Tarkan'ın e-postası gelen kutunda okunmuş ama cevapsız duruyor."),
"Bodrumda aynalı bir gözlük taktın ve sonunda o gözlükte kendi yüzünü gördün.",
"Bir sayımda yavaş saymak, bir numarayı adıyla çağırmak, bir kameraya bakmak, bir kapıyı açmak, hepsi küçük şeylerdi.",
P(function(d){ return d.sorusturma || d.izledi_toplanti; }, "Yıllar sonra bir toplantı odasında bir bodrumu tanıdın ve bu sefer kenarda durmadın."),
P(function(d){ return d.burak_cevap === "bulusma"; }, "Tarkan'la bir kafede gözlüksüz buluştunuz, uzun süre konuşmadınız. Sonra Tarkan oğlunun fotoğrafını gösterdi. “Ona anlatacağım,” dedi. Sen de kendi payını anlattın. Hesabı Tarkan ödemek istedi ama sen ödedin."),
"Bir yıl Celal bankta sana bir kâğıt uzattı, annesinin börek tarifiydi. “Yedi yaşındaki çocuk ağlamasın diye,” dedi. Tarifin altına annesi “Bir dilimi Emre'ye ayır” diye eklemişti."
]}

},

ayna: function(d){
  var out = [];
  var v = d.vicdan, u = d.uyum, t = d.tanik;
  if(v >= u && v >= t) out.push("Çoğu zaman Celal'in adını ve yüzünü numarasının önüne koydun.");
  else if(u >= t) out.push("Çoğu zaman ekibe ve role uydun.");
  else out.push("Çoğu zaman gördüğünü birine göstermeye çalıştın.");
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
