(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "babamin-defteri",
baslik: "Babamın Defteri",
dunya: "Gerçek dünya",
kategoriler: ["Aile ve Hafıza", "Toplum ve Adalet"],
giris: "Babanın cenazesinden bir hafta sonra çalışma odasında kilitli bir çekmece buluyorsun. İçinde 1993 tarihli bir defter, defterde ise 1999 depreminde yıkılan bir binanın hiç anlatılmamış hikâyesi var. Yirmi dört yıldır bir başkası suçlu biliniyor ve o başkasının kızı hâlâ adalet bekliyor. Sen bir mimarsın ve babanın adını taşıyorsun. Hakikat ile huzur, bir aileye sadakat ile bir yabancıya borç arasında bir seçim.",
kavramlar: ["Hakikat ve huzur", "Kuşaklar arası suç", "Kendini kandırma", "Affetme"],
ozet: "Babanın cenazesinden bir hafta sonra kilitli bir çekmecede bir defter buluyorsun. 1999 depreminde yıkılan bir binanın gerçek hikâyesi orada yazıyor. Yirmi dört yıldır başka bir adam suçlu biliniyor.",
baslangic: "b1",
durum: { hakikat: 0, sadakat: 0, huzur: 0 },

sahneler: {

b1: { saat: "Ekim 2023", baslik: "Çalışma Odası", metin: [
"Babanı yedi gün önce gömdün. Nuri Arslan, yetmiş dokuz yaşında, kalp. Cenazede belediye başkanı konuştu, eski şantiye şefleri ağladı, gazetede yarım sayfa ilan çıktı: “Kentimize değer katan dürüst bir inşaat mühendisi.” İlanın altında yazım hatası vardı. “Arlsan.” Annen üç gün buna sinirlendi.",
"Adın Nesrin, kırk dört yaşındasın, mimarsın. Büronun kapısında da aynı soyadı yazıyor: Arslan Mimarlık. Babanın adı yıllarca önünü açtı. Bunu hiç inkâr etmedin, hiç de yüksek sesle söylemedin.",
"Bugün annen Sevim Hanım babanın çalışma odasını toplamaya çağırdı seni. Kitaplar, plaketler, rulo rulo eski projeler, cetveller. Odada tütün ve kâğıt kokusu. Pencere yıllardır açılmamış.",
"Çocukken bu odaya girmen yasaktı. Bir keresinde gizlice girip masanın altına saklanmıştın. Baban seni bulunca kızmamış, kucağına alıp bir planın üstünde parmağını gezdirmişti: “Bu kolon bütün binayı taşır. Bir kolon eksik olursa her şey çöker.” Sonra sana bir kurşun kalem vermişti. Sen onu üç gün yemek masasına bile götürmüştün.",
"Masanın en alt çekmecesi kilitli. Babanın anahtarlığında, ev anahtarlarının arasında küçük, pirinç bir anahtar var.",
"Çekmecede tek bir şey: kahverengi deri kaplı, köşeleri yıpranmış bir defter. Kapağında bir yıl: 1993.",
"El yazısını tanıyorsun. Düzgün, eğik, mühendis yazısı. Annen mutfaktan sesleniyor: “Nesrin, çay koydum, gel!”"
], secenekler: [
{ t: "Defteri hemen, orada, babanın sandalyesinde açarsın.", to: "b2", etki: { hakikat: 1 } },
{ t: "Defteri çantana koyup eve götürürsün. Yalnızken okumak istiyorsun.", to: "b2", etki: { huzur: 1, eve: true } },
{ t: "Defteri mutfağa, annene götürürsün: “Bunu biliyor muydun?”", to: "b2", etki: { sadakat: 1, anneye_gosterdi: true } },
{ t: "Çekmeceyi yeniden kilitleyip anahtarı cebine koyarsın.", to: "b2", etki: { huzur: 1, sadakat: 1, kilitledi: true } }
]},

b2: { saat: "Ekim 2023", baslik: "18 Ağustos 1999", metin: [
P(S("b1A"), "Defteri orada, babanın sandalyesinde açtın. Sandalye senin ağırlığına alışık değildi. Gıcırdadı. Annen bir daha seslendi, cevap vermedin."),
P(S("b1B"), "Gece, kendi evinde, mutfak masasında açtın. Tarık uyuyordu. Ege odasındaydı, kulaklığından bir şarkının cızırtısı geliyordu."),
P(S("b1C"), "Annen defteri görünce bardağı tabağa koydu. “Babanın notları,” dedi. “Hep bir şeyler yazardı. Al, oku istersen. Ben okumadım.” Sonra şekerliği sana itti. Sen şekersiz içersin, bilir."),
P(S("b1D"), "Çekmeceyi kilitledin. Üç gece uyuyamadın. Dördüncü gece annenin evine gidip anahtarı yeniden çevirdin. Annen uyuyordu, ayakkabılarını kapıda çıkardın."),
"Defterin çoğu teknik notlar: hesaplar, malzeme listeleri, şantiye tarihleri. 1993: “Gölcük, Çınar Apartmanı. Yedi kat, yirmi sekiz daire. Ortak: Rahmi Kara.”",
"Kenarlarda başka şeyler de var. “Malzeme fiyatları arttı.” “Rahmi ile tartıştık.” “Nesrin bugün ilk dişini çıkardı.” İş ve hayat aynı sayfada, aynı mürekkeple. Sen o zaman on yaşındaydın. Diş başka bir dişti, sonradan anlarsın.",
"Sonra 1999. 18 Ağustos. Depremden bir gün sonra. El yazısı farklı. Titrek, sıkışık, satırlar birbirinin üstüne biniyor.",
"“Çınar yıkıldı. Otuz bir kişi. Demirleri ben eksilttim, 1993 baharında. Rahmi bilmiyordu. Çimento oranını da ben değiştirdim. Fark parasıyla Ankara'daki ilk daireyi aldık. Nesrin o evde büyüdü.”",
"Bir sonraki sayfa, 22 Ağustos: “Rahmi'yi gözaltına aldılar. Yarın ifade vereceğim. Ne diyeceğimi biliyorum.”",
"2001: “Rahmi'ye on iki yıl verdiler. Ben beraat ettim.” 2004: “Rahmi cezaevinde öldü. Kalp. Cenazesine gitmedim.”",
"Ankara'daki ilk daire. Senin çocukluk odan. Pencereden kestane ağacı görünen."
], secenekler: [
{ t: "Sonuna kadar okursun.", to: "b2b", etki: { hakikat: 1, tamamini: true } },
{ t: "O sayfada durursun. Daha fazlasını kaldıramazsın.", to: "b2b", etki: { huzur: 1 } },
{ t: "Telefonunla her sayfanın fotoğrafını çekersin.", to: "b2b", etki: { hakikat: 1, foto: true } },
{ t: "O sayfayı defterden yırtıp ayrı bir yere koyarsın.", to: "b2b", etki: { sadakat: 1, yirtti: true } }
]},

b2b: { saat: "Ekim 2023", baslik: "Fotoğraf", metin: [
P(S("b2A"), "Sonuna kadar okudun. 2019: “Nesrin bugün okul ihalesini kazandı. Gurur duydum. Hakkım var mı?” 2022: “Doktor kalbim yorgun dedi. Rahmi'nin kalbi gibi.” Son sayfaya gelmedin. Parmağını o sayfanın kenarında tuttun, çevirmedin."),
P(S("b2B"), "Defteri kapattın. Elin defterin üstünde kaldı, kapak açılmasın diye bastırıyormuş gibi."),
P(S("b2C"), "Kırk iki fotoğraf. Telefonunun galerisinde, tatil fotoğraflarının ve Ege'nin mezuniyet pozlarının arasında. Bir fotoğrafta parmağın çıkmış. Yeniden çekmedin."),
P(S("b2D"), "Sayfayı yırttın. Kâğıt temiz koptu. Katlayıp cüzdanına, ehliyetinin arkasına koydun."),
"Defterin arka kapağının içinde bir fotoğraf sıkışmış. Siyah beyaz, 1993 yazı: Çınar Apartmanı'nın temel atma töreni.",
"Çay soğumuş, dışarısı kararmış.",
"Fotoğrafta iki adam yan yana, ellerinde kürek, gülümsüyor. Biri baban: otuz dokuz yaşında, bıyıklı, gözlüklü. Öbürü Rahmi Kara: daha kısa, daha zayıf, gömleğinin yakası açık, eli babanın omzunda.",
"Arkasında babanın el yazısı: “Rahmi ile. Ortaklığımızın ilk binası. İnşallah son değil.”"
], secenekler: [
{ t: "Fotoğrafı masaya, görünür bir yere koyarsın.", to: "b3", etki: { hakikat: 1 } },
{ t: "Fotoğrafı defterin içine geri koyarsın.", to: "b3", etki: { huzur: 1 } },
{ t: "Rahmi Kara'nın yüzüne uzun uzun bakarsın. Onu tanımak istiyorsun.", to: "b3", etki: { hakikat: 1, rahmi_yuz: true } },
{ t: "Babanın yüzüne bakarsın. Onu tanıdığını sanıyordun.", to: "b3", etki: { sadakat: 1 } }
]},

b3: { saat: "Ekim 2023", baslik: "Annen", metin: [
P(S("b2bA"), "Fotoğrafı masaya, görünür bir yere koydun. Bütün gece iki adam sana gülümsedi."),
P(S("b2bB"), "Fotoğrafı defterin içine geri koydun. Ama hangi sayfaya koyduğunu bilerek: 18 Ağustos."),
P(S("b2bC"), "Rahmi Kara'nın yüzüne uzun uzun baktın: geniş alın, kalın bıyık, bir eli babanın omzunda. Gömleğinin cebinden bir sigara paketi görünüyordu."),
P(S("b2bD"), "Babanın yüzüne baktın. O bıyığı hatırlıyordun. Seni öperken batardı. Sen “Batıyor baba!” derdin, o daha çok bastırırdı."),
"Ertesi gün annenin evindesin. Mutfakta, çocukken ödev yaptığın masada. Annen çay koyuyor.",
"Babanın terlikleri hâlâ kapının önünde, gözlükleri televizyonun üstünde, ceketi askıda. Annen hiçbirine dokunmuyor. “Yerlerinde dursunlar,” diyor.",
"Nasıl sorulur böyle bir şey? Sonunda yalnızca defteri masaya koyuyorsun.",
"Annen defterin kapağına bakıyor. Sonra çay bardağını tabağına bırakıyor. Ses çıkmasın diye yavaşça.",
"“Biliyordum,” diyor.",
"“Depremden bir hafta sonra söyledi. Gece, bu mutfakta. Ağladı. Hayatımda onu iki kez ağlarken gördüm. Biri o geceydi. Öbürü sen doğduğunda.” Sesi düz. “Ertesi gün ifadesini verdi. Gitme demedim. Konuş demedim. Hiçbir şey demedim.”",
"“Neden?”",
"“Sen on yaşındaydın,” diyor. “Rahmi'nin de bir kızı vardı, biliyorum. Ben kendi kızımı seçtim.” Şekerliğin kapağını açıp kapatıyor. “Doğru muydu? Değildi. Ama yine yapardım.”"
], secenekler: [
{ t: "Annene bağırırsın. Yıllardır söylenmemiş her şeyle.", to: "bd_kestane", etki: { hakikat: 1, anneye_kizdi: true } },
{ t: "Annenin elini tutarsın. O da bir yük taşımış.", to: "b3b", etki: { sadakat: 1, anne_el: true } },
{ t: "“Rahmi'nin kızının adı ne?” diye sorarsın.", to: "bd_mezar", etki: { hakikat: 1, elif_adi: true } },
{ t: "Kalkıp gidersin. Bu mutfakta nefes alamıyorsun.", to: "b3b", etki: { huzur: 1 } }
]},

b3b: { saat: "Ekim 2023", baslik: "Arşiv", metin: [
P(S("bd_kestaneA"), "Kestaneyi kıza verdin. Kız teşekkür edip içeri koştu. Pencereden, senin eski pencerenden, bir an el salladı."),
P(S("bd_kestaneB"), "Kestane cebinde. Ankara'dan dönerken elini cebine soktun. Parmakların ona değdi, pürüzsüz, serin. Bir ara direksiyonu bırakıp kestaneyi avucunda tuttun, sonra korna sesiyle kendine geldin."),
P(S("bd_kestaneC"), "Kız gözlerini kocaman açtı. “Gerçekten mi? Benim odamda mı?” Evet, dedin. “Orada hiç korktunuz mu? Ben gece dolaptan korkuyorum.” “Ben de korkardım,” dedin. Yalandı. Sen hiç korkmazdın."),
P(S("bd_kestaneD"), "Arabaya bindin, sokağın sonuna kadar dikiz aynasına bakmadın. Sokağın sonunda baktın: kestane ağacı, apartman, balkon, küçülerek."),
P(S("bd_mezarA"), "Uzaklaştın. Kapıdan çıkarken dönüp baktın. Kadın mezarın başına diz çökmüş, su döküyordu. Seni görmedi."),
P(S("bd_mezarB"), "Kadın yaklaşıp seni gördü, durdu. “Babamı mı tanıyordunuz?” Bir şey diyemedin. “Deprem şehitlerinden birinin yakını mısınız?” Başını ne evet ne hayır diye oynattın. Kadın bir süre baktı, sonra mezarı sulamaya başladı. Su şişesinin kapağını dişleriyle açtı."),
P(S("bd_mezarC"), "Fotoğrafı taşın üstüne, çiçeklerin yanına bıraktın. Uzaklaşırken döndün: kadın fotoğrafı eline almış, bakıyordu. Sonra başını kaldırıp mezarlığın içinde birini aradı."),
P(S("bd_mezarD"), "Ağacın arkasından izledin. Kadın mezarı suladı, çiçekleri düzeltti, taşın kenarına oturdu. Dudakları kıpırdıyordu. Babasıyla konuşuyordu. Bir ara güldü."),
P(S("b3A"), "Bağırdın. Annen dinledi. İtiraz etmedi, ağlamadı. Bitince “Haklısın,” dedi. Sonra kalkıp bardağını yıkadı, seninkini de aldı, daha bitirmemiştin."),
P(S("b3B"), "Annenin elini tuttun. Kemikleri belirgin, derisi ince, parmağında babanın aldığı yüzük gevşemiş. Annen elini çekmedi."),
P(S("b3C"), "“Elif,” dedi annen. “Elif Kara. Senden üç yaş küçük.” Nereden bildiğini sormadın. Yirmi dört yıldır hatırlıyordu."),
P(S("b3D"), "Arabaya bindin, motoru çalıştırmadın. Bir saat oturdun. Annen perdeyi bir kez araladı, bir kez kapattı."),
"O gece büroda, bilgisayarın başında, 1999–2001 gazete arşivlerini tarıyorsun.",
"Büro boş. Masalarda yarım maketler, kahve fincanları. Duvarda ödüllerin. Birinin altında babanın el yazısıyla bir not, çerçeveletmiştin: “Kızıma, benden iyi bir mimar olduğu için.”",
"“Çınar Apartmanı davası.” Bir manşet: “Müteahhit Rahmi Kara'ya 12 yıl.” Altında bir fotoğraf: Rahmi, iki jandarmanın arasında, başı önde. Arkada, kalabalığın içinde, sekiz yaşında bir kız. Elinde bir pankart: “Babam masum.” Pankartın harfleri renkli kalemle, biri ters yazılmış.",
"Mahkeme tutanağından bir alıntı, babanın ifadesi: “Ortağım malzeme tedarikinden sorumluydu. Ben statik hesapları onayladım. Uygulamada ne yapıldığını bilmiyordum. Bilseydim o binaya kendi ailemi yerleştirir miydim?”",
"Ekranın ışığı yüzünde. Saat ikiyi geçiyor."
], secenekler: [
{ t: "Bütün haberleri, bütün tutanakları bir klasöre kaydedersin.", to: "b4", etki: { hakikat: 1, arsiv: true } },
{ t: "Babanın ifadesini bir kez daha okursun. Ve bir kez daha.", to: "b4", etki: { sadakat: 1 } },
{ t: "Pankart tutan kızın fotoğrafını büyütürsün.", to: "b4", etki: { hakikat: 1, elif_foto: true } },
{ t: "Bilgisayarı kapatırsın. Bu gece yeter.", to: "b4", etki: { huzur: 1 } }
]},

b4: { saat: "Kasım 2023", baslik: "Elif Kara", metin: [
P(S("b3bA"), "Bütün haberleri bir klasöre kaydettin. Klasöre ad verirken durakladın. Sonunda: “Çınar.”"),
P(S("b3bB"), "Babanın ifadesini bir kez daha okudun. Ve bir kez daha. “Malzeme sorumluluğu ortağımdaydı.” Beşincide yüksek sesle okudun. Boş büroda sesin tuhaf çıktı."),
P(S("b3bD"), "Bilgisayarı kapattın. Kararan ekranda kendi yüzünü gördün. Çeneni, babanın çenesini."),
"Elif Kara'yı bulmak beş dakika sürüyor. İzmit'te bir ortaokulda Türkçe öğretmeni. Kırk bir yaşında. Bir derneği var: “Çınar'ın Gerçeği.” Eski, sade bir internet sitesi, birkaç video.",
"Fotoğraf galerisinde her yılın 17 Ağustos'u: Çınar'ın yerinde bir anma. Elif'i yıllar içinde yaşlanırken görüyorsun: on dokuz, yirmi beş, otuz, kırk. Her fotoğrafta elinde babasının fotoğrafı. Bir yıl yanında bir bebek arabası var. Sonraki yıllarda bir çocuk, sonra bir genç.",
"Bir videoyu açıyorsun. Elif bir masanın arkasında. Arkasında babasının büyütülmüş fotoğrafı. Sesi sakin, kelimeleri yerli yerinde. Yirmi yıldır aynı şeyi anlatan birinin sesi.",
"“Babam o binanın malzemesini almadı,” diyor. “Faturalar ortağının imzasını taşıyordu. Mahkeme bunu dikkate almadı. Babam cezaevinde öldü. Ona son kez camın arkasından dokundum.”",
"Videonun sonunda kameraya doğrudan bakıyor: “Bir gün biri konuşacak. O binayı kimin yıktığını bilen biri. Ben o günü bekliyorum. Artık babam için değil. Bilmek için.”",
P(function(d){ return d.elif_foto; }, "Pankart tutan sekiz yaşındaki kızın kaşları, ekrandaki kadının kaşları."),
"Sayfanın altında bir iletişim adresi."
], secenekler: [
{ t: "Ona bir mesaj yazarsın, kim olduğunu söylemeden: “Size söylemem gereken bir şey olabilir.”", to: "b5", etki: { hakikat: 1, mesaj: true } },
{ t: "Bütün videoları izlersin. Sabaha kadar.", to: "b5", etki: { hakikat: 1 } },
{ t: "Avukatını ararsın. Ne yapabileceğini, neyi kaybedeceğini öğrenmek için.", to: "b5", etki: { sadakat: 1, avukat_erken: true } },
{ t: "Bilgisayarı kapatırsın. Yirmi yıl beklemiş biri birkaç gün daha bekleyebilir.", to: "b5", etki: { huzur: 1 } }
]},

b5: { saat: "Kasım 2023", baslik: "Tarık", metin: [
P(S("b4A"), "Mesajı gönderdin. Üç dakika sonra cevap geldi: “Kimsiniz?” Cevap vermedin. Ekranda “yazıyor...” belirdi, kayboldu, yine belirdi. Sonra hiçbir şey."),
P(S("b4B"), "Sabaha kadar izledin. Bir videoda Elif'in arkasında, duvarda, bir öğrencinin çizdiği resim asılıydı: bir ev, bir güneş, bir yazı, “Elif öğretmenim.”"),
P(S("b4C"), "Avukat dinledi, not aldı. “Yarın konuşalım,” dedi. Telefonu kapatmadan önce: “Nesrin, babanı tanırdım. Bu defter kimin elinde patlarsa patlasın, ilk seni yakar.”"),
P(S("b4D"), "Bilgisayarı kapattın. Ertesi gün işe gittin, toplantılara girdin, bir proje sundun, güldün bile. Kimse bir şey fark etmedi."),
"Tarık'a anlatman bir haftanı alıyor. Bir akşam mutfakta, Ege odasındayken.",
"O hafta Ege'ye kahvaltı hazırladın, Tarık'la akşam haberlerini izledin, komşunun kızının düğününe gittin. Kimse bir şey anlamadı. Baban yirmi dört yıl her gün bunu yapmış.",
"Tarık dinliyor. Sonra çay bardağını çeviriyor, çeviriyor.",
"“Nesrin. Baban öldü. Rahmi Bey öldü. Bu defter kimi geri getirecek?” Bardağı bırakıyor. “Ama şunu götürecek: büronu, okul projesini, Ege'nin bursunu, soyadımızı. Ölmüş bir adamı yargılarken yaşayanları cezalandıracaksın.”",
"“Peki Elif?”",
"“Elif yirmi dört yıldır bununla yaşıyor. Bir yirmi dört yıl daha yaşar. Sen yaşayabilir misin, onu sor kendine.”",
"Koridorda bir ses. Ege'nin kapısı aralık. Kulaklığın cızırtısı kesilmiş."
], secenekler: [
{ t: "Ege'yi çağırıp ona da anlatırsın. O da bu ailenin bir parçası.", to: "b6", etki: { hakikat: 1, ege_bilir: true } },
{ t: "“Düşüneceğim,” dersin. Tarık'ın haklı olabileceğini kabul ederek.", to: "b6", etki: { huzur: 1 } },
{ t: "“Babam da böyle düşündü. Yirmi dört yıl boyunca,” dersin.", to: "b6", etki: { hakikat: 1 } },
{ t: "Tarık'a sorarsın: “Senin baban olsaydı ne yapardın?”", to: "b6", etki: { sadakat: 1, tarik_soru: true } }
]},

b6: { saat: "Aralık 2023", baslik: "Avukat", metin: [
P(S("b5A"), "Ege dinledi. On dokuz yaşında, mimarlık birinci sınıf. Dedesinin kucağında büyüdü. Dinlerken yüzü bir yetişkinin yüzüne döndü, sonra yine bir çocuğunkine. “Dedem,” dedi. Başka bir şey demedi. Odasına gitti. Kapı kapandı, kilit döndü."),
P(S("b5B"), "“Düşüneceğim,” dedin. Tarık rahatladı, bulaşıkları yıkamaya kalktı. Koridordaki kapı o gece bir daha kapanmadı."),
P(S("b5C"), "Tarık yüzüne baktı. Bir şey diyecekti, demedi. Kalkıp bardağı lavaboya bıraktı. “Haklısın,” dedi, arkası dönük. “Ben de haklıyım ama. Sorun bu.”"),
P(S("b5D"), "Tarık uzun süre düşündü. “Bilmiyorum,” dedi sonunda. “Belki ben de baban gibi yapardım. Belki sen de. Beni korkutan bu.”"),
"Avukat Feride Hanım'ın bürosu. Altmışlarında, gözlüğü burnunun ucunda, defterin fotokopilerini tek tek okuyor.",
"Feride Hanım babanın da avukatıydı. Yirmi yıl şirketin bütün davalarına o baktı. Seni küçüklüğünden tanıyor. Bayramlarda sana harçlık verirdi. Okurken bir kez bile başını kaldırmıyor. Sonunda gözlüğünü çıkarıp gözlerini ovuşturuyor. “Bilmiyordum,” diyor. Ona inanıyorsun. Yirmi yıl hiç sormadığına da.",
"“Hukuken,” diyor, “bu defter yeni bir delil. Yargılamanın yenilenmesi istenebilir. Rahmi Bey'in mahkûmiyeti kaldırılabilir. Ölümünden sonra bile. Bu kızı için çok şey demek.”",
"“Ama babanız ölü olduğu için yargılanamaz. Mirası sorumlu tutulabilir. Otuz bir ailenin tazminat davası açma hakkı doğar. Annenizin evi, büronuzun sermayesi, babanızdan kalan her şey. Bir de basın.”",
"“Ya da,” diyor, daha yavaş, “hiçbir şey yapmazsınız. Defter bir çekmecede kalır. Bu da yasal.”",
"Feride Hanım fotokopileri bir zarfa koyuyor. “Hangi yolu seçersen seç Nesrin, bir şeyi kaybedeceksin. Ben yalnızca neyi kaybedeceğini söyleyebilirim.”"
], secenekler: [
{ t: "Defteri Elif Kara'ya götürürsün. Ne yapacağına o karar versin. Ailenin adı artık onun elinde.", to: "e1", etki: { hakikat: 1, elif_bilir: true } },
{ t: "Savcılığa ve basına kendin gidersin, kendi adınla. Büron, okul ihalesi, Ege'nin soyadı. Hepsi aynı gün.", to: "m1", etki: { hakikat: 2, kamu: true } },
{ t: "Defteri yakmaya karar verirsin. Ailen korunur; Elif yirmi dört yıl daha bekler. Belki sonsuza kadar.", to: "y1", etki: { huzur: 2, yakti: true } },
{ t: "Elif'e kimliğini gizleyerek yardım edersin: para, avukat. Ama defter değil. Hakikatin yerine bir kefaret.", to: "k1", etki: { sadakat: 1, kefaret: true } }
]},


bd_kestane: { saat: "Ekim 2023", baslik: "Kestane Ağacı", metin: [
"Annenin evinden çıkıp arabaya biniyor ve sürmeye başlıyorsun. Nereye gittiğini ancak varınca anlıyorsun: Ankara, Bahçelievler, çocukluğunun geçtiği sokak.",
"Apartman hâlâ orada: dört katlı, krem rengi, balkonlarda çamaşırlar. 1994'te taşınmıştınız, 2008'de satıldı. Şimdi başka bir aile oturuyor. Balkonda pembe bir çocuk bisikleti.",
"Kestane ağacı da orada. Büyümüş. Dalları üçüncü katın penceresine değiyor. Senin pencerene. Her sonbahar kestaneleri sayıp babana gösterirdin. O da her seferinde aynı şakayı yapardı: “Bunlar benim, sen sadece sayıyorsun.”",
"“Fark parasıyla Ankara'daki ilk daireyi aldık.” O cümle şimdi bu krem rengi binanın üstünde duruyor.",
"Burada okumayı öğrendin. Burada ilk aşk mektubunu yazdın, göndermedin. Burada mimar olmaya karar verdin.",
"Ağacın altındaki bankta oturuyorsun. Ayağının dibine bir kestane düşüyor. Kabuğu yarılmış, içi parlak.",
"Bisikletin sahibi kapıdan çıkıyor. Yedi sekiz yaşında bir kız, bir ayakkabısının bağcığı çözük. Seni görüyor. “Teyze, kestane mi topluyorsunuz? Benim penceremden de düşüyor.”"
], secenekler: [
{ t: "Kestaneyi kıza verirsin.", to: "b3b", etki: { sadakat: 1 } },
{ t: "Kestaneyi cebine koyarsın.", to: "b3b", etki: { hakikat: 1, kestane: true } },
{ t: "Kıza o odada eskiden senin yaşadığını söylersin.", to: "b3b", etki: { huzur: 1 } },
{ t: "Kalkıp gidersin. Bu sokağa bir daha gelmeyeceksin.", to: "b3b", etki: { huzur: 1 } }
]},

bd_mezar: { saat: "Ekim 2023", baslik: "Mezar", metin: [
"Elif Kara. Annenin hatırladığı isim. Bir hafta sonra kendini İzmit'te, bir mezarlığın kapısında buluyorsun.",
"Rahmi Kara'nın mezarını bulmak bir saat sürüyor. Görevli defterleri karıştırıyor, bir yön gösteriyor: deprem şehitlerinin yanında ama ayrı bir sırada. “Cezaevinden geldi,” diyor, sesini alçaltmadan. “Ailesi ötekilerin yanına gömdürdü.”",
"Taş sade: “Rahmi Kara, 1951–2004.” Altında sonradan kazınmış gibi derin harflerle bir kelime: “Masumdu.”",
"Mezarın üstünde taze beyaz karanfiller, bir kurdeleyle bağlı. Biri bu hafta gelmiş.",
"Babanın mezarı Ankara'da, Karşıyaka'da. Mermer, adının altında “Mühendis” yazıyor. Cenazesine yüzlerce kişi geldi. Bu mezarın cenazesine baban gelmedi. Defterde yazıyor.",
"Mezarlığın öbür ucundan bir kadın geliyor. Elinde bir şişe su, omzunda bez bir çanta. Kırk yaşlarında. Yüzünü bir gazete fotoğrafından tanıyorsun. Sekiz yaşında, bir pankartın arkasında."
], secenekler: [
{ t: "O seni görmeden uzaklaşırsın.", to: "b3b", etki: { huzur: 1, mezar_kacti: true } },
{ t: "Mezarın başında durmaya devam edersin. Ne olacaksa olsun.", to: "b3b", etki: { hakikat: 1, mezar_karsilasti: true } },
{ t: "Getirdiğin fotoğrafı, iki adamın yan yana olduğu fotoğrafı, taşın üstüne bırakırsın.", to: "b3b", etki: { hakikat: 1, foto_birakti: true } },
{ t: "Bir ağacın arkasına geçip onu izlersin.", to: "b3b", etki: { izledi: true } }
]},

bd_amca: { saat: "Haziran 2024", baslik: "Amca", metin: [
"Mevlitten sonra bahçede, evin arkasında, amcan seni yakalıyor. Seyfi amca: babanın küçük kardeşi, yetmiş üç yaşında, bütün hayatı babanın şirketinde muhasebecilikle geçmiş. Elinde hâlâ mevlit şekeri paketi var.",
"“Bir insanmış, öyle mi?” diyor. Sesi titriyor. “Salonun ortasında, yüz kişinin önünde. Bir insanmış.”",
"Bahçeye bakıyor. Babanın diktiği gül fidanlarına. Sonra sesini alçaltıyor.",
"“Ben biliyordum,” diyor. “Doksan üçte. Faturaları ben tuttum. Demir siparişlerini ben girdim. Bir gün baban gelip ‘Bu siparişi yarıya indir,’ dedi. İndirdim. Niye diye sormadım. Sorsaydım söylerdi. Sormadım.”",
"“Rahmi tutuklanınca cezaevine bir kere gittim. Camın arkasından bana baktı, ‘Seyfi, sen biliyorsun,’ dedi. Ben başımı... öyle bir oynattım. Evet de değil, hayır da değil.” Şeker paketini buruşturuyor. “Otuz yıl. Tek bir cümle bulamadım. Sen salonda buldun.”"
], secenekler: [
{ t: "“Avukata gelir misin?” diye sorarsın. Bir tanık daha.", to: "z2", etki: { hakikat: 1, seyfi_tanik: true } },
{ t: "Amcana sarılırsın.", to: "z2", etki: { sadakat: 1 } },
{ t: "“Neden şimdi bana söylüyorsun?” diye sorarsın.", to: "z2", etki: { hakikat: 1 } },
{ t: "“Bunu kimseye söyleme,” dersin. Bir sır daha.", to: "z2", etki: { huzur: 1, seyfi_sus: true } }
]},

bd_mektup: { saat: "Haziran 2024", baslik: "Gönderilmemiş Mektup", metin: [
"Çalışma odası boşaltılmış: masa toplanmış, raflar bomboş. Ama kilitli çekmecenin bir de çift dibi olduğunu bugün fark ediyorsun. İçteki tahtanın bir köşesi hafifçe kalkık.",
"Tahtayı kaldırıyorsun. Altında bir zarf. Pulu yapıştırılmış, damgalanmamış. Üstünde bir adres: “Elif Kara, İzmit.” Tarih: babanın ölümünden iki hafta önce.",
"Açıyorsun.",
"“Elif Hanım. Sizi aradım, konuşamadım. Yazıyorum, yazmak daha kolay. Babanız masumdu. Biliyorum, çünkü suçlu bendim. Yirmi dört yıldır biliyorum, yirmi dört yıldır susuyorum. Bu mektubu gönderir miyim bilmiyorum. Göndermezsem belki biri bulur. Belki kızım. Ben gönderemiyorum. Özür dilerim. Bu kelime yetmez, başka kelimem yok. Nuri Arslan.”",
"Altına başka bir mürekkeple, sonradan eklenmiş bir satır: “Nesrin, bulduysan, sen karar ver.”",
"Zarfın kapağı yalanmış ama yapışmamış. Baban kapatmaya da karar verememiş."
], secenekler: [
{ t: "Mektubu postaya verirsin. Babanın gönderemediğini sen gönderirsin.", to: "z2", etki: function(d){ d.hakikat++; d.mektup_gitti = true; d.elif_bilir = true; } },
{ t: "Mektubu cebine koyarsın. Ne yapacağını henüz bilmiyorsun.", to: "z2", etki: { huzur: 1, mektup_cep: true } },
{ t: "Mektubu yırtarsın. Kararı sana bırakmak korkaklıktı ve sen ortağı olmayacaksın.", to: "z2", etki: { sadakat: 1, mektup_yirtti: true } },
{ t: "Mektubu annene götürürsün.", to: "z2", etki: { hakikat: 1, mektup_anne: true } }
]},

/* ---------- ELİF KOLU ---------- */
e1: { saat: "Ocak 2024", baslik: "İzmit", metin: [
P(S("b6A"), "Defteri bir naylon dosyaya koydun. İzmit yolu bir buçuk saat sürdü. Dosya bütün yol yan koltukta durdu, bir frende yere düştü, kenara çekip aldın."),
P(S("y2B"), "Defter artık yoktu. Yalnızca hatırladıkların. İzmit yolunda cümleleri kafanda sıraya dizdin, sonra hepsini dağıttın."),
P(S("k2B"), "“Gerçeği söyleyeceğim,” dedin telefona. “Ama yüz yüze.” Ertesi sabah İzmit yolundaydın, çantanda defter."),
P(function(d){ return d.yakti; }, "Defteri yakmıştın. Elinde hiçbir şey yok. Yalnızca hatırladıkların."),
"İzmit. Elif Kara'nın evi depremden sonra yapılmış, beş katlı, sağlam bir binanın üçüncü katında. Yol körfezin kıyısından geçiyor. Karşıda Gölcük, tersaneler, vinçler, yeni binalar.",
"Kapıyı kendisi açıyor. Seni tanıyor. İlk anda. “Arslan,” diyor. Yüzü bembeyaz. Arkasından bir çocuk sesi geliyor. “Anne kim o?” Elif “Odana git,” diyor, gözünü senden ayırmadan.",
"İçeri alıyor seni. Salonun duvarında babasının fotoğrafı. Videolardakinin aynısı.",
P(function(d){ return !d.yakti; }, "Masaya oturuyorsun, defteri çıkarıyorsun. Elif dokunmuyor. “Ne bu?” “Babamın defteri. Doksan dokuz. Ağustos.”"),
P(function(d){ return !d.yakti; }, "Elif defteri alıp okuyor. Sen pencereden körfeze bakıyorsun. Bir saat. Mutfakta çaydanlık ötüyor. Kimse kalkmıyor, çaydanlık susuyor. Sonunda Elif defteri kapatıp iki elini üstüne koyuyor."),
P(function(d){ return d.yakti; }, "Masaya oturuyorsun. Anlatmaya başlıyorsun: çekmece, defter, 18 Ağustos, demirler, ateş. Elif bir kez bile sözünü kesmiyor. Bir saat. Mutfakta çaydanlık ötüyor. Kimse kalkmıyor."),
"“Yirmi dört yıl,” diyor. “Yirmi dört yıl biri konuşsun diye bekledim. Şimdi biri konuştu ve ben ne hissedeceğimi bilmiyorum.”"
], secenekler: [
{ t: "“Özür dilerim,” dersin. Babanın adına değil, kendi adına.", to: "e2", etki: { hakikat: 1, ozur: true } },
{ t: "Hiçbir şey söylemezsin. Ona alan bırakırsın.", to: "e2", etki: { huzur: 1 } },
{ t: "“Ne istersen yapacağım,” dersin.", to: "e2", etki: { hakikat: 1, soz: true } },
{ t: "“Babam iyi bir babaydı,” dersin. Neden söylediğini bilmeden.", to: "e2", etki: { sadakat: 1, iyi_baba: true } }
]},

e2: { saat: "Ocak 2024", baslik: "Elif'in Kararı", metin: [
P(S("e1A"), "Elif sana baktı. “Kendi adına mı? Sen ne yaptın ki?” Sonra durdu. “Sen o evde büyüdün,” dedi. “Benim babamın parasıyla alınan evde. Belki doğru. Sen de bir şey yaptın. Yaşadın.”"),
P(S("e1B"), "Sustun. Elif de. Sonra Elif ağlamaya başladı. Sessiz, sarsılarak. Sen kımıldamadın. Odasından çocuk çıkıp kapıda durdu, annesine baktı, sana baktı, geri girdi."),
P(S("e1C"), "“Ne istersem mi?” Elif güldü. Kısa, kuru. “Babamı geri getir.” Sonra özür diledi. “Haksızlık ettim. Bunu bana sen getirdin. Çoğu insan getirmezdi.”"),
P(S("e1D"), "Elif'in yüzü kaskatı oldu. “Benim babam da iyi bir babaydı,” dedi. “Ama yirmi dört yıl bunu yüksek sesle söyleyebilen sadece birimizdi.”"),
P(function(d){ return d.yakti || d.kefaret; }, "Belgesiz bir itirafın mahkemede ne kadar ağırlığı olacağını ikiniz de biliyorsunuz."),
"Elif'in salonunda her şey düzenli: kitaplar alfabetik, raflarda sırtları etiketli dosyalar. 2000'den 2023'e. Bir dosya hayatı. Rafın en ucunda bir çocuk resmi. Bir adam ve bir kız el ele, adamın başında bir şapka.",
"Bir süre sonra Elif konuşuyor. Kelimeleri tek tek seçerek.",
P(function(d){ return !d.yakti; }, "“Babamın adının temizlenmesini istiyorum. Mahkemede. Herkesin önünde. Bunun için bu defter lazım. Bir de senin tanıklığın.” Durdu. “Bu senin babanın adını kirletecek. Annenin evini. İşini. Biliyor musun?”"),
P(function(d){ return d.yakti; }, "“Babamın adının temizlenmesini istiyorum. Mahkemede. Defter yok, ama sen varsın. Senin tanıklığın.” Durdu. “Bu senin babanın adını kirletecek. Annenin evini. İşini. Biliyor musun?”"),
"“Biliyorum.”",
"“Kabul ediyor musun?”"
], secenekler: [
{ t: "“Evet. Tamamen.”", to: "e3", etki: { hakikat: 2, dava: true } },
{ t: "“Evet. Ama annem yaşadığı sürece değil. Bunu ona yaşatamam.”", to: "e3", etki: { sadakat: 1, erteleme: true, dava: true } },
{ t: "“Mahkemede ben konuşacağım. Defteri değil, beni dinlesinler.”", to: "e3", etki: { hakikat: 1, tanik: true, dava: true } },
{ t: "“Karar senin. Ne yaparsan karşı çıkmam.”", to: "e3", etki: { huzur: 1, elife_birakti: true } }
]},

e3: { saat: "Şubat 2024", baslik: "İki Kız", metin: [
P(S("e2A"), "“Tamamen,” dedin. Elif başını salladı. Bir süre ikiniz de bunun ne demek olduğunu düşünmeden oturdunuz. Sonra düşündünüz."),
P(S("e2B"), "Elif uzun uzun baktı. “Benim annem babamdan iki yıl sonra öldü,” dedi. “Kimse ona bir şey yaşatmamak için beklemedi.” Derin bir nefes aldı. “Peki. Beklerim. Yirmi dört yıl bekledim.”"),
P(S("e2C"), "Elif düşündü. “Senin sesin,” dedi. “Bir kâğıttan fazlası. Mahkeme kâğıdı okur. Ama bir kızın kendi babası hakkında konuşmasını duyarlar.”"),
P(S("e2D"), "“Bana bırakıyorsun,” dedi Elif. “Babam da bana bırakmıştı bu yükü. Biraz da sen taşımayacak mısın?” Haklıydı. Yine de kararı ona bıraktın."),
"Bir şubat günü Elif bir şey istiyor: annenle tanışmak.",
"O günden beri birkaç kez telefonda konuştunuz. Kısa, dikkatli. Arkadaş olmadınız. Bir keresinde Elif kızının matematik ödevinden şikâyet etti. Sen güldün, o da. Sonra ikiniz de sustunuz.",
"Annenin mutfağı. Üç kadın, bir masa. Annen çay koyuyor. Elleri titremiyor ama bardakları masaya koyarken her biri biraz fazla ses çıkarıyor.",
"Elif annene uzun uzun bakıyor. “Siz biliyordunuz.”",
"Annen başını kaldırıyor. “Biliyordum,” diyor. Sana söylediği gibi, aynı düz sesle.",
"“Neden konuşmadınız?”",
"Annen bir an sana bakıyor. “Benim de bir kızım vardı,” diyor. “Senin baban gibi. Ben kendi kızımı seçtim. Seni değil.”",
"Elif'in yüzü kıpırdamıyor. Masanın altında elleri yumruk."
], secenekler: [
{ t: "Annene, Elif'in önünde: “Yanlış seçtin,” dersin.", to: "z1", etki: { hakikat: 1 } },
{ t: "Masanın altında Elif'in elini tutarsın.", to: "z1", etki: { hakikat: 1, elif_el: true } },
{ t: "Annenin yanına geçersin. Bu onun da hikâyesi.", to: "z1", etki: { sadakat: 1 } },
{ t: "Kalkıp ikisini yalnız bırakırsın. Bu konuşma senin değil.", to: "z1", etki: { huzur: 1, yalniz_birakti: true } }
]},

/* ---------- KAMU KOLU ---------- */
m1: { saat: "Ocak 2024", baslik: "Açıklama", metin: [
"Savcılığa dilekçeyi kendin veriyorsun. Ekinde defterin fotokopisi. Memur zarfı alıp bir numara veriyor: 2024/1873. Önünde bir trafik kazası, arkanda bir miras davası bekliyor.",
"Ertesi gün deprem davalarını yıllardır takip eden genç bir gazeteciyle görüşüyorsun. Kahvesine üç şeker atıyor, not defterine hiç bakmadan yazıyor.",
"İki gün sonra haber çıkıyor: “Çınar Apartmanı'nın gerçek sorumlusu: Kızı açıkladı.”",
"Telefonun susmuyor. Akrabalar, meslektaşlar, eski müşteriler. Çoğu aramıyor. Arayanlar tebrik edip hemen kapatıyor. Bir amcan tek bir mesaj atıyor: “Babanın kemiklerini sızlattın.”",
"İnternette yüzün. Yorumlar: “Cesur kadın.” “Babasının parasıyla mimar oldu, şimdi kahraman.” “Otuz bir kişi öldü, bu kadının ofisi hâlâ açık mı?” Birisi büronun adresini paylaşmış.",
P(function(d){ return d.ege_bilir; }, "Ege bir mesaj atıyor: “Anne, gurur duyuyorum. Ama bugün derse gidemedim.” Bir dakika sonra: “Akşam ne var?”"),
"Akşam haber sitelerinde bir video: Elif Kara bir kanalın önünde, mikrofonlar yüzüne uzatılmış. Ağlıyor. “Yirmi dört yıl,” diyor. “Yirmi dört yıl.” Sonra kameraya bakıyor: “O kadına teşekkür ederim. Ama onu affetmem gerekir mi, bilmiyorum. Babası benim babamı öldürdü.”"
], secenekler: [
{ t: "Elif'e ulaşmaya çalışırsın.", to: "m2", etki: { hakikat: 1, elife_ulasti: true } },
{ t: "Bütün telefonları kapatırsın. Bir hafta.", to: "m2", etki: { huzur: 1 } },
{ t: "Bir açıklama daha yaparsın: annenin de bildiğini söylersin.", to: "m2", etki: { hakikat: 2, anne_acikladi: true } },
{ t: "Amcana cevap yazarsın: “Kemikleri zaten sızlıyordu.”", to: "m2", etki: { hakikat: 1 } }
]},

m2: { saat: "Şubat 2024", baslik: "Otuz Bir", metin: [
P(S("m1A"), "Elif açmadı. Bir hafta sonra bir mesaj geldi: “Şimdi değil. Belki hiç değil. Ama teşekkür ederim.”"),
P(S("m1B"), "Bir hafta. Telefon kapalı, perdeler kapalı. Tarık kapının önüne yemek bıraktı. Bir gün tabağın yanına bir de çikolata koymuştu. Sekizinci gün telefonu açtığında yüz yirmi bir cevapsız arama vardı."),
P(S("m1C"), "Annen haberi televizyondan izledi. Seni aramadı. Üç gün sonra bir zarf geldi. İçinde annenin el yazısıyla tek satır: “Hakkın vardı.” İmza yok."),
P(S("m1D"), "Amcan cevap vermedi. Aile mezarlığının anahtarı ondaydı. Ertesi hafta kilidi değiştirmiş, yeni anahtarı sana vermemiş."),
"Bir dernek seni bir toplantıya çağırıyor: Çınar'da ölenlerin aileleri. Gölcük'te, bir belediye salonunda. Yirmi kişi kadar.",
"Gitmeden önce bütün gece ne giyeceğini düşündün. Siyah giydin. Sonra çıkardın, lacivert giydin. Sonra yine siyah.",
"Kapıdan girince herkes susuyor. En önde bir sandalye gösteriyorlar. Sandalyenin üstünde bir çay bardağı, sana bırakılmış mı, birinden kalmış mı, bilemiyorsun.",
"Bir kadın kalkıyor. Altmışlarında. Adı Nazmiye. Kızı yedi yaşındaymış. İkinci katta, annesinin kucağında. Kendisi kurtulmuş, kızı kurtulmamış.",
"“Seni tanımıyorum,” diyor. “Babanı da tanımıyordum. Rahmi Bey'i tanıyordum. Yıllarca lanet ettim ona. Şimdi kime edeceğimi bilmiyorum.” Bir süre susuyor. “Ben kimseyi affetmem. Ama sana teşekkür ederim. Bunlar ayrı şeyler.”",
"Arka sıralarda biri ağlıyor. Biri kalkıp çıkıyor. Kapı arkasından çarpıyor."
], secenekler: [
{ t: "Kalkıp hepsinden kendi ağzınla özür dilersin.", to: "m3", etki: { hakikat: 1, ozur_aileler: true } },
{ t: "Nazmiye Hanım'a kızının adını sorarsın.", to: "m3", etki: { hakikat: 1, kizin_adi: true } },
{ t: "Babanın mirasının tamamını ailelere bırakacağını söylersin.", to: "m3", etki: { hakikat: 1, miras_verdi: true } },
{ t: "Hiçbir şey söylemezsin. Dinlemeye geldin.", to: "m3", etki: { huzur: 1 } }
]},

m3: { saat: "Mart 2024", baslik: "Çöküş", metin: [
P(S("m2A"), "Özür diledin. Kelimeleri hazırlamamıştın. Geldiler, yanlış sırayla. Kimse karşılık vermedi. Bir adam arkadan “Otur kızım,” dedi. Kızgın değildi."),
P(S("m2B"), "“Zeynep,” dedi Nazmiye Hanım. “Pembe bir elbisesi vardı. Ertesi gün okula başlayacaktı. Çantasını kendisi seçmişti, üstünde bir kedi vardı.” Adını söyledi ve oturdu."),
P(S("m2C"), "Salon sustu. Arka sıradan bir adam “Para mı?” dedi. “Para mı istiyoruz sanıyorsun?” Sonra oturdu. Nazmiye Hanım “Ver,” dedi. “Ama para için teşekkür etmeyeceğiz.”"),
P(S("m2D"), "Sustun. Toplantının sonunda biri yanına gelip eline bir fotoğraf tutuşturdu: bir düğün, 1997. Altı kişi gülümsüyor. Dördü Çınar'da öldü. Geri vermek istedin. Almadı."),
"Mart başında okul ihalesi iptal ediliyor. Gerekçe: “Kamuoyu hassasiyeti.” İki proje daha askıya alınıyor. İki çalışanın istifa ediyor. Biri istifa mektubuna teşekkür notu iliştirmiş.",
"Okul projesi en sevdiğin projendi: üç yüz çocuk için bir ilkokul. Her kolonu üç kez hesaplamıştın. Avlunun ortasına bir çınar koymuştun. Şimdi o okulu başka bir firma yapacak.",
"Tarık bir akşam mutfakta, önünde hesaplar. “Altı ay,” diyor. “Altı ay daha dayanırız. Sonra büroyu kapatırız.” Kalemi kulağının arkasına sıkıştırıyor. Hiç böyle bir alışkanlığı yoktu.",
P(function(d){ return d.ege_bilir; }, "Ege bir akşam elinde bir kâğıtla geliyor: bursunun iptal edildiğini bildiren bir mektup. Vakıf, “Arslan” adını taşıyan bir bursu artık vermek istemiyormuş. Ege kâğıdı masaya bırakıyor. “Önemli değil,” diyor, buzdolabını açıp içine uzun uzun bakıyor."),
"Gece yatakta, yıllardır ilk kez, deliksiz uyuyorsun. Sabah uyandığında buna şaşırıyorsun."
], secenekler: [
{ t: "Tarık'a sarılırsın. Bunu birlikte taşıyacaksınız.", to: "z1", etki: { sadakat: 1 } },
{ t: "Büroyu kapatmaya kendin karar verirsin. Babanın adını taşıyan hiçbir şey kalmasın.", to: "z1", etki: { hakikat: 1, buro_kapandi: true } },
{ t: "Ege'ye gidip özür dilersin.", to: "z1", etki: { sadakat: 1, egeye_ozur: true } },
{ t: "Hiçbir şeyden pişman olmadığını yüksek sesle söylersin. Kendine.", to: "z1", etki: { hakikat: 1 } }
]},

/* ---------- YAKMA KOLU ---------- */
y1: { saat: "Aralık 2023", baslik: "Ateş", metin: [
"Bahçedeki eski mangal. Gece yarısı. Tarık uyuyor. Ege'nin odasının ışığı sönük.",
"Bu mangalda her yaz et pişirdiniz. Baban mangalın başında durmayı severdi. Kömürleri çevirir, herkese tabak dağıtır, kendisi en son yerdi. Mangalın dibinde hâlâ geçen yazdan kalma kül var.",
"Defteri açıyorsun. Son bir kez. Sayfaları tek tek koparıyorsun. 1993. 1995. 1999.",
"Çakmak ilk denemede yanmıyor. İkincide. İlk sayfa tutuşuyor, kıvrılıyor, kararıyor. Mürekkep bir an parlıyor.",
"18 Ağustos sayfasına geliyorsun. “Demirleri ben eksilttim.” Alev kelimeleri tek tek yiyor. En son “Nesrin” kalıyor, sonra o da.",
P(function(d){ return d.yirtti; }, "Yırttığın sayfa hâlâ cüzdanında, ehliyetinin arkasında. Onu yakmıyorsun."),
P(function(d){ return d.foto; }, "Telefonunda kırk iki fotoğraf var. Defteri yakıyorsun. Defter galerinde duruyor. Biliyorsun."),
"Son sayfa. Okumaya cesaret edemediğin sayfa. Alev onu kapmadan önce bir kelime görüyorsun: “kızım.”",
"Sonra kül. Komşunun köpeği bir kez havlıyor, susuyor."
], secenekler: [
{ t: "Külü babanın diktiği gül fidanının dibine dökersin.", to: "y2", etki: { sadakat: 1 } },
{ t: "Külü bir kavanoza koyarsın. Atamıyorsun.", to: "y2", etki: { hakikat: 1, kavanoz: true } },
{ t: function(d){ return d.foto ? "Telefonundaki fotoğrafları da silersin." : "Mangalın kapağını kapatıp içeri girersin."; }, to: "y2", etki: function(d){ d.huzur++; if(d.foto){ d.foto = false; d.foto_sildi = true; } } },
{ t: "Mangalın başında sabaha kadar oturursun.", to: "y2", etki: { hakikat: 1 } }
]},

y2: { saat: "Ocak 2024", baslik: "Mektup", metin: [
P(S("y1A"), "Külü babanın diktiği gül fidanının dibine döktün. Ertesi bahar gül hiç açmadığı kadar açtı."),
P(S("y1B"), "Külü bir reçel kavanozuna koydun. Atamadın. Kavanoz çalışma odasının rafında, kitapların arasında duruyor. Etiketi hâlâ üstünde: “Vişne, 2022.”"),
P(S("y1C"), "Mangalın kapağını kapatıp içeri girdin. Sabah Tarık mangalı açtı. Bir şey sormadı, kapağı kapattı."),
P(S("y1D"), "Mangalın başında sabaha kadar oturdun. Kül soğudu. Gün ağarırken komşu kadın balkona çıkıp sana baktı, içeri girdi."),
"Ocakta bir mektup geliyor. Elle yazılmış, İzmit postası. Gönderen: Elif Kara.",
"Zarfı mutfak masasına koyup bir saat açmıyorsun.",
"“Nesrin Hanım. Babanızın vefatını gazetede okudum. Başınız sağ olsun. Bunu içtenlikle söylüyorum. Bir babayı kaybetmenin ne olduğunu bilirim.”",
"“Sormaktan utandığım bir şey var. Babanız ölmeden üç ay önce beni aradı. Telefonumu nereden bulduğunu bilmiyorum. ‘Elif Hanım,’ dedi. Sonra uzun bir sessizlik. Sonra kapattı.”",
"“Babanız bir şey bırakmış olabilir mi? Bir not, bir mektup, herhangi bir şey? Lütfen dürüst olun. Başka bir şey istemiyorum. Yalnızca bilmek.”",
P(function(d){ return d.mesaj; }, "Altında bir not: “Birkaç ay önce bana isimsiz mesaj atan siz miydiniz?”")
], secenekler: [
{ t: "Ona yazarsın: “Hayır. Hiçbir şey bırakmadı.”", to: "y3", etki: { sadakat: 1, yalan: true } },
{ t: "İzmit'e gidip her şeyi yüzüne söylersin. Belge olmadan, yalnızca hatırladıklarınla.", to: "e1", etki: { hakikat: 2, elif_bilir: true, anlatti: true } },
{ t: "Mektuba cevap vermezsin.", to: "y3", etki: { huzur: 1, cevapsiz: true } },
{ t: "“Babam sizi aradığında bir şey söylemek istiyordu. Ne olduğunu ben de bilmiyorum,” diye yazarsın.", to: "y3", etki: { yarim_gercek: true } }
]},

y3: { saat: "Şubat 2024", baslik: "Ege", metin: [
P(S("y2A"), "Mektubu yazıp postaladın. Bir hafta sonra cevap geldi: “Teşekkür ederim. Yine de sordum. Sormasaydım hep soracaktım.”"),
P(S("y2C"), "Cevap vermedin. Elif bir daha yazmadı. Mektubu çekmeceye koydun. Açıp tekrar okumadın, atmadın da."),
P(S("y2D"), "Yazdığın her kelime doğruydu. Elif'ten cevap geldi: “Demek bir şey söylemek istemiş. Bu bile bir şey. Teşekkür ederim.”"),
"Bir akşam Ege mutfağa geliyor. Elinde telefonu, yüzü solgun.",
"Ege son haftalarda değişti. Daha az konuşuyor, daha çok odasında. Bunu sınavlara verdin.",
P(function(d){ return d.foto || d.foto_sildi; }, "“Anne,” diyor. “Telefonundaki fotoğraflar buluta yedeklenmiş... aile albümüne düşmüş. Bir defterin sayfaları.” Telefonu uzatıyor. Ekranda babanın el yazısı."),
P(function(d){ return !d.foto && !d.foto_sildi; }, "“Anne,” diyor. “Geçen ay gece yarısı bahçede ne yaktın? Pencereden gördüm. Sabah mangalda yanmamış bir köşe buldum.” Elinde küçük, kenarları kararmış bir kâğıt parçası. Üstünde babanın el yazısından üç kelime: “Rahmi bilmiyordu. Ben”"),
"“Dedem ne yaptı?” diyor Ege. On dokuz yaşında. Dedesinin kucağında büyüdü."
], secenekler: [
{ t: "Ona her şeyi anlatırsın.", to: "z1", etki: { hakikat: 1, ege_bilir: true } },
{ t: "“Önemli bir şey değil. Eski iş kâğıtları,” dersin.", to: "z1", etki: { sadakat: 1, egeye_yalan: true } },
{ t: "“Sen ne düşünüyorsun?” diye sorarsın. Kararı ona bırakırsın.", to: "z1", etki: { ege_karar: true } },
{ t: "Kâğıdı alıp cüzdanına koyarsın. “Sonra konuşuruz.”", to: "z1", etki: { huzur: 1 } }
]},

/* ---------- KEFARET KOLU ---------- */
k1: { saat: "Ocak 2024", baslik: "İsimsiz Bağış", metin: [
"Bir aracı buluyorsun; Feride Hanım'ın tanıdığı bir avukat. Elif Kara'nın derneğine bir bağış yapılacak: büyük, isimsiz.",
"Feride Hanım planı dinlerken yüzünü buruşturdu. “Para bir şeyi düzeltmez,” dedi. “Ama kolaylaştırır. Kimin işini, ona siz karar verin.” Sonra bir isim, bir hesap numarası yazdı. Kâğıdı sana uzatırken bırakmadı bir süre.",
"İstanbul'dan iyi bir ceza avukatı Rahmi Kara dosyasını “gönüllü olarak” inceleyecek. Ücretini sen ödeyeceksin.",
"Defter çekmecende, kilitli. Babanın çekmecesi gibi.",
"Senin adın hiçbir yerde geçmeyecek.",
"Bağış dekontu bir e-postayla geliyor: bir rakam, bir tarih, bir onay kodu. Babanın doksan üçte eksilttiği demirlerin parası bugün kaç ederdi diye hesaplamaya kalkıyorsun. Telefonun hesap makinesini açıp kapatıyorsun."
], secenekler: [
{ t: "Her ay düzenli bağış talimatı verirsin.", to: "k2", etki: { sadakat: 1, duzenli: true } },
{ t: "Elif'in videolarını izlemeye devam edersin. Paranın ona ulaşıp ulaşmadığını görmek için.", to: "k2", etki: { hakikat: 1 } },
{ t: "Bu kadar. Bir daha düşünmeyeceksin.", to: "k2", etki: { huzur: 1 } },
{ t: "Avukata bir not iletirsin: “1993 malzeme faturalarına bakın.” Bir ipucu. İtiraf değil.", to: "k2", etki: { hakikat: 1, ipucu: true } }
]},

k2: { saat: "Mart 2024", baslik: "Elif'in Sorusu", metin: [
P(S("k1A"), "Her ay düzenli bağış talimatı verdin. Bankacı formu uzatırken “Hayırlı bir iş,” dedi. Başını salladın."),
P(S("k1B"), "Elif'in videolarını izlemeye devam ettin. Birinde derneğin yeni bürosunu gösteriyordu. Duvarda otuz bir fotoğraf."),
P(S("k1C"), "Bir daha düşünmeyecektin. Üç gün dayandın."),
P(S("k1D"), "Avukat ipucunu takip etti. Faturalarda bir şey çıktı: imza Rahmi'nin ama yazı başkasının. Bir el yazısı uzmanı, bir rapor."),
"Mart sonunda bir toplantıdasın. Müşteriler, maketler. Telefon titriyor. Bilinmeyen numara. Normalde açmazsın. Toplantı odasından çıkıp koridorda açıyorsun.",
"“Nesrin Arslan?” Videolardan tanıdığın ses.",
"“Elif Kara,” diyor. “Bağışın kimden geldiğini buldum. Bankalar konuşmaz ama aracılar bazen konuşur.” Bir süre susuyor. “Bir soru soracağım. Bir kez.”",
"“Neden?”",
"Koridorun sonunda sekreterin seni çağırıyor, eliyle işaret ediyor. Sen ona arkanı dönüyorsun."
], secenekler: [
{ t: "“Vicdan,” dersin. “Babam ölmeden önce bir şeyler söylemişti. Tam anlamadım.”", to: "k3", etki: { sadakat: 1, yalan: true } },
{ t: "Gerçeği söylersin: defteri, her şeyi.", to: "e1", etki: { hakikat: 2, elif_bilir: true, anlatti: true } },
{ t: "Telefonu kapatırsın.", to: "k3", etki: { huzur: 1, kapatti: true } },
{ t: "“Babam isterdi,” dersin. Hiç söylemediği bir şeyi ona söyletirsin.", to: "k3", etki: { sadakat: 1, yalan: true, babam_isterdi: true } }
]},

k3: { saat: "Haziran 2024", baslik: "Yalanın Ağırlığı", metin: [
P(S("k2A"), "“Vicdan,” dedin. Hattın öbür ucunda bir şey tıkırdadı. Bir kalem, bir yüzük. “Kimin vicdanı?” dedi Elif. “Babanızın mı, sizin mi?” Cevap vermedin, o kapattı. Bağışlar hesabına düşmeye devam etti. Elif bir daha aramadı."),
P(S("k2C"), "Telefonu kapattın. Elif üç kez daha aradı. Dördüncü gün bir mesaj geldi: “Cevabınız bu muydu?” Mesajı okundu olarak bıraktın."),
P(S("k2D"), "“Babam isterdi,” dedin. Elif'in sesi değişti. “Demek bir şey söyledi,” dedi. “Demek söyledi.” Baban öyle bir şey hiç söylememişti. Telefonu kapattıktan sonra bir süre koridordaki yangın tüpüne baktın."),
"Haziranda bir haber: Rahmi Kara dosyası için yargılamanın yenilenmesi talebi reddedildi. Gerekçe: “Yeni ve kesin delil sunulmamıştır.”",
"Haberi sabah kahvaltıda, telefondan okuyorsun. Üç paragraf. Altında bir dizi oyuncusunun boşanma haberi. Tarık karşında yumurtasını tuzluyor, “Ne oldu?” diyor, “Hiç,” diyorsun.",
P(function(d){ return d.ipucu; }, "El yazısı raporu yetmemiş. Mahkemenin uzmanı başka bir şey söylemiş. Kesin delil istiyorlar. Kesin delil senin çekmecende, kahverengi kapaklı, köşesi kıvrık."),
"Elif'in yeni videosu. Bu sefer kameraya bakmıyor. Arkada mutfak, ocakta bir tencere. “Biri konuşur sanmıştım,” diyor. “Konuşmayacaklar galiba. Ben de yoruldum açıkçası.” Kızı kadraja giriyor, bir şey soruyor; Elif videoyu orada kesiyor.",
"Videoyu üç kez izliyorsun. Üçüncüde kızın ne sorduğunu duyuyorsun: “Anne makarna mı?”"
], secenekler: [
{ t: "Çekmeceyi açıp defteri çıkarırsın. Yalnızca bakmak için.", to: "z1", etki: { hakikat: 1 } },
{ t: "Bağışı ikiye katlarsın.", to: "z1", etki: { sadakat: 1 } },
{ t: "Elif'e uzun bir mektup yazarsın. Göndermezsin.", to: "z1", etki: { hakikat: 1, gonderilmeyen: true } },
{ t: "Videoyu kapatırsın. Bir daha açmazsın.", to: "z1", etki: { huzur: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
z1: { saat: "Haziran 2024", baslik: "Mevlit", metin: [
P(S("e3A"), "“Yanlış seçtin,” dedin annene, Elif'in önünde. Annen bardağını tabağına öyle bir koydu ki çay taştı. Kimse silmedi. Elif'in yumrukları masanın altında açıldı."),
P(S("e3B"), "Elif'in elini masanın altında tuttun. Önce çekmek istedi, sonra bıraktı. Annen fark etmedi. Ya da fark edip çay doldurmaya devam etti."),
P(S("e3C"), "Annenin yanına geçtin. Elif sana bir an öyle baktı ki midene bir şey oturdu. Sonra omuz silkti: “Ben de annemin yanına geçerdim herhalde.”"),
P(S("e3D"), "Balkona çıkıp bir saat bekledin. Komşunun çamaşırları rüzgârda şaklıyordu. İçeri döndüğünde masada tek bir mendil paketi vardı, boşalmış."),
P(S("m3A"), "Tarık'a sarıldın. “Birlikte,” dedi. O gece yine de sırtını dönüp uyudu. Sabah kahveni o yaptı."),
P(S("m3B"), "Büroyu kapattın. Tabelayı indiren usta bir harfi düşürdü. “A” kaldırımda ikiye ayrıldı. Ustaya para fazla verdin, neden verdiğini o da sormadı."),
P(S("m3C"), "Ege'ye gidip özür diledin. Omuz silkti. “Okulda biri dedemin katil olduğunu söyledi,” dedi. “Evet dedim. Ama annem değil, dedim. Sonra kantinde tost yedik.”"),
P(S("m3D"), "“Pişman değilim,” dedin, boş büroda, kendine. Klima kendi kendine çalıştı, durdu."),
P(S("y3A"), "Ege'ye her şeyi anlattın. Sonuna kadar dinledi, bir kere bile telefonuna bakmadan. “Sen yaktın yani,” dedi. “Evet.” Kalkıp bir bardak su içti. “Tamam. Artık ikimiz biliyoruz.”"),
P(S("y3B"), "“Eski iş kâğıtları,” dedin. Ege kâğıdı uzattı. İnanmadığını, kâğıdı bırakırken parmaklarının ne kadar yavaş açıldığından anladın. Annen de sana tam böyle bir şey yapmıştı."),
P(S("y3C"), "“Sen ne düşünüyorsun?” Ege kâğıda uzun uzun baktı. “Bunu bir yere yazmak lazım bence,” dedi. “Dedem yazmış. Biz de yazalım.”"),
P(S("y3D"), "Kâğıdı cüzdanına koydun. “Sonra konuşuruz.” Ege odasına gitti. Konuşmadınız."),
P(S("k3A"), "Defteri çıkarıp yalnızca baktın. Kendi kendine 18 Ağustos'ta açıldı. Cildi oraya alışmış."),
P(S("k3B"), "Bağışı ikiye katladın. Dekont geldi. Rakamın sonundaki sıfırları iki kez saydın."),
P(S("k3C"), "Elif'e dört sayfa yazdın. Zarfa koyup defterin yanına, çekmeceye bıraktın. Artık o çekmecede iki gönderilmemiş mektup vardı. Birini baban yazmıştı."),
P(S("k3D"), "Videoyu kapattın. O akşam makarna yaptın. Tencereyi ocaktan alırken aklına kızın sesi geldi."),
"Babanın ölümünün üstünden sekiz ay geçti. Akrabalar annenin evinde bir mevlit düzenlemiş.",
"Mutfakta helva kokusu. Kapının önünde ayakkabılar üst üste. Birinin terliği senin topuğuna takılıyor. Kadınlar başörtülerini düzeltiyor, erkekler salonun kenarında ayakta, kollarını kavuşturmuş. Seyfi amcan kapıda mevlit şekeri dağıtıyor.",
P(function(d){ return d.kamu; }, "Yüz kişi beklenmiş, yirmi kişi gelmiş. Haberden sonra çoğu aramadı bile. Gelenler sana bakmıyor. Annene bakıyor, sonra halıya."),
P(function(d){ return !d.kamu; }, "Herkes gelmiş. Eski çalışanlar, belediyeden birileri, babanın mühendis arkadaşları. Hepsi sana sarılıp “Ne dürüst adamdı,” diyor. Biri bunu iki kez söylüyor."),
"Babanın teyzesinin oğlu Hikmet kalkıp konuşuyor. İlk şantiyeyi anlatıyor. Babanın çamura gömülen ayakkabısını, eve tek ayakkabıyla döndüğünü. Salon gülüyor.",
P(function(d){ return !d.kamu; }, "“Nuri,” diyor sonra, “bir kere bile bir çivi eksik çakmadı. Bunu bu salonda herkes bilir.” Başlar sallanıyor. Annen gözlerini kapatıyor."),
P(function(d){ return d.kamu; }, "“Nuri hata yaptı,” diyor sonra. “Büyük hata. Kızı doğruyu söyledi.” Bir süre bir şey diyemiyor, öksürüyor. “Ama ben onu yine de severim. Kusura bakmasın kimse.”"),
"Hoca duaya başlıyor. Annen ön sırada. Senin yanında bir çocuk, şeker paketini sessizce açmaya çalışıyor, beceremiyor."
], secenekler: [
{ t: "Kalkıp bir şey söylersin. Ne çıkarsa.", to: "bd_amca", etki: { hakikat: 1, mevlitte_konustu: true } },
{ t: "Dua bitene kadar oturursun. Burası mahkeme değil.", to: "z2", etki: { sadakat: 1 } },
{ t: "Sessizce kalkıp babanın çalışma odasına gidersin.", to: "bd_mektup", etki: { huzur: 1, odaya: true } },
{ t: "Annenin yanına geçip elini tutarsın.", to: "z2", etki: { sadakat: 1, anne_yaninda: true } }
]},

z2: { saat: "Haziran 2024", baslik: "Annenin Sırrı", metin: [
P(S("bd_amcaA"), "Seyfi amca şeker paketini cebine koydu. “Gelirim,” dedi. “Otuz yıl geç. Gelirim.” Sonra “Arabam yok ama,” dedi, “beni sen alırsın.”"),
P(S("bd_amcaB"), "Amcana sarıldın. Yetmiş üç yaşında bir adam omzunda hıçkırdı. Kardeşinin cenazesinde gözü bile yaşarmamıştı. Ceketinden naftalin kokusu geliyordu."),
P(S("bd_amcaC"), "“Çünkü sen söyledin,” dedi amcan. “Sen söyleyince benim de ağzım açıldı. Herkes susarken susmak kolay.”"),
P(S("bd_amcaD"), "“Söylemem,” dedi amcan. “Otuz yıl sustum, otuz yıl daha susarım.” Bunu babanın sesiyle söyledi. İkisinin sesi hiç bu kadar benzememişti."),
P(S("bd_mektupA"), "Postanede memur zarfa damgayı vurdu, “Taahhütlü mü?” dedi. “Hayır,” dedin, sonra “Evet,” dedin. Üç gün sonra telefonun çaldı. Alan kodu 262."),
P(S("bd_mektupB"), "Mektup cebinde. Mutfağa girerken elini cebine soktun. Kâğıdın kenarı parmağını kesti. Kanı peçeteyle sildin, annen “Ne oldu?” dedi, “Kâğıt,” dedin."),
P(S("bd_mektupC"), "Mektubu yırttın. Parçaları çöpe değil, cebine attın. Sonra mutfakta, kimse bakmazken, parçaları bir araya getirip imzanın olduğu köşeyi aradın."),
P(S("bd_mektupD"), "Annen mektubu okudu. Gözlüğünü çıkarıp masaya koydu. “Bunu yazdığını bilmiyordum,” dedi. “Gece kal. Anlatacaklarım var.”"),
P(S("z1A"), "Kalktın. Salon sustu, hoca bile. Ağzından yalnızca şu çıktı: “Babam bir insandı.” Oturdun. Arkada biri öksürdü. Hoca kaldığı yerden devam etti."),
P(S("z1B"), "Dua bitti. Kapıda tanımadığın bir kadın kolunu tuttu: “Baban bir kere benim kiramı ödemişti. Kimseye söyleme demişti.” Şekerini alıp gitti."),
P(S("z1C"), "Çalışma odası boş. Raflar boşaltılmış, masanın üstünde yalnızca babanın gözlük kılıfı. Babanın sandalyesine oturdun. Minder onun şeklini almış, sana uymuyor."),
P(S("z1D"), "Annenin eli buz gibiydi. Dua boyunca bırakmadı. Sonunda kulağına eğildi: “Gece kal. Anlatacaklarım var.”"),
"Gece. Misafirler gitmiş, bulaşık makinesi çalışıyor. Annen saçını açmış. Bembeyaz, beline kadar. Saçının bu kadar uzun olduğunu bilmiyordun. Yıllardır topuz.",
"İki bardak çay koymuş. Kendi bardağını tabağında çeviriyor. Dört kez, beş kez.",
"“Baban o gece bana anlattığında,” diyor, “sabah savcılığa gidecekti. Kararını vermişti. Gömleğini ütületmişti bana.”",
"“Ben vazgeçirdim. ‘Nesrin'i düşün,’ dedim. ‘Kızın babası hapiste diye mi büyüsün? Rahmi'nin kızı zaten babasız kaldı, bir de seninki mi?’ Sabaha kadar. Ezan okununca ağladı, ‘Peki,’ dedi.”",
"Çayından bir yudum alıyor. Soğumuş, yüzünü buruşturuyor.",
"“Defteri de ben aldım ona. Kırtasiyeden. Konuşacağına yazsın diye.”"
], secenekler: [
{ t: "“Neden şimdi söylüyorsun?” dersin.", to: "z3", etki: { hakikat: 1 } },
{ t: "Hiçbir şey söylemezsin. Çayın soğusun.", to: "z3", etki: { huzur: 1 } },
{ t: "“Anlıyorum,” dersin. Ve anladığın için korkarsın.", to: "z3", etki: { sadakat: 1, anladi: true } },
{ t: "“Babamı sen mi öldürdün?” dersin. Ağzından kaçar.", to: "z3", etki: { hakikat: 1, sert: true } }
]},

z3: { saat: "Temmuz 2024", baslik: "Çınar Parkı", metin: [
P(S("z2A"), "“Çünkü sen kendi kararını verdin,” dedi annen. “Benim gibi olup olmadığını görmek istedim.” Bardağı bıraktı. “Hâlâ bilmiyorum.”"),
P(S("z2B"), "Sustun. Annen de. Saat ikiye doğru kalktı, geçerken saçını okşadı, küçükken yaptığı gibi. “Yat artık,” dedi. Yatmadın. Balkonda annenin sakladığı sigara paketini buldun."),
P(S("z2C"), "“Anlıyorsun,” dedi annen. Yüzünde rahatlamaya benzer bir şey vardı. Bu seni her şeyden çok korkuttu."),
P(S("z2D"), "Annen sana uzun uzun baktı. “Doktor kalp dedi,” dedi. “Ben de kalp diyorum. Ama hangi kalp, onu ben biliyorum.” Bunu söylerken sesi titremedi bile."),
"Temmuzda Gölcük'e gidiyorsun.",
"Arabayı park edip motoru kapatıyorsun ama inmiyorsun. Radyoda bir şarkı bitiyor, reklam başlıyor, bir şarkı daha. Sonra iniyorsun. Mahalle tamamen yeni. Yollar, binalar, ağaçlar. Sokak tabelası aynı: Çınar Sokak.",
"Apartmanın yerinde küçük bir park. Üç bank, birkaç çınar fidanı, ayakları beyaz badanalı. Ortada mermer bir taş, üstünde otuz bir isim.",
"Okuyorsun. Bir aile: Yılmazlar, dördü birden. Bir yaşlı çift. Bir öğrenci, yirmi yaşında. Zeynep Yılmaz, yedi yaşında. Zeynep'in adının yanında biri bir toka bırakmış. Pembe, plastik, güneşten solmuş.",
"En altta, ayrı bir satırda, harfleri daha yeni: “Rahmi Kara (1951–2004).”",
P(function(d){ return !d.kamu && !d.dava; }, "Bu satırı kim ekletti, bilmiyorsun. Elif mi, dernek mi. O adın orada neden durduğunu bilen kaç kişi var dünyada? Saymaya kalkıyorsun. Beşe varmıyor."),
P(function(d){ return d.kamu || d.dava; }, "Bu satır haberlerden sonra eklenmiş. Mermerin rengi bile biraz farklı. Senin dilekçenden sonra."),
"Bankta yaşlı bir kadın oturuyor, poşetten ekmek ufalayıp güvercinlere atıyor. Bir güvercin ayakkabına kadar geliyor."
], secenekler: [
{ t: "Taşın önüne çömelip bütün isimleri yüksek sesle okursun.", to: "z4", etki: { hakikat: 1, okudu: true } },
{ t: "Yaşlı kadının yanına oturursun.", to: "z4", etki: { sadakat: 1, kadin: true } },
{ t: "Taşın dibine bir çınar yaprağı bırakırsın.", to: "z4", etki: { huzur: 1 } },
{ t: "Elini Rahmi Kara'nın adının üstüne koyarsın.", to: "z4", etki: { hakikat: 1, rahmi_el: true } }
]},

z4: { saat: "Temmuz 2024", baslik: "Son Sayfa", metin: [
P(S("z3A"), "İsimleri okudun. Zeynep'te sesin çatladı, devam ettin. Sonuncusu Rahmi Kara'ydı. Onu fısıltıyla okudun, neden bilmiyorsun."),
P(S("z3C"), "Taşın dibine bir yaprak bıraktın. Rüzgâr alıp güvercinlerin arasına attı. Gidip almadın."),
P(S("z3B"), "Kadın ekmeğin yarısını sana uzattı. “Her gün buradayım,” dedi. “Kimsem yoktu burada. Ama biri otursun diye oturuyorum.” Ekmeği ufaladın. Güvercinler ikinizi ayırt etmedi."),
P(S("z3D"), "Taş temmuz güneşinde ısınmıştı. Parmaklarının altında harflerin oyukları. R'nin kuyruğunda biraz toz birikmişti. Başparmağınla sildin."),
P(function(d){ return !d.yakti; }, "Akşam otelde defteri açıyorsun. Son sayfa. Aylardır o sayfaya gelince defteri kapatıyordun. Tarih: babanın ölümünden üç hafta önce. Yazı her zamankinden eğri."),
P(function(d){ return d.yakti; }, "Akşam otelde son sayfayı hatırlamaya çalışıyorsun. Alevden önce yalnızca bir kelime görmüştün: “kızım.” Otelin not kâğıdını, otelin kalemini alıyorsun. Kalem birkaç kez çizip yazmaya başlıyor."),
P(function(d){ return !d.yakti; }, "“Nesrin, kızım. Bunu okuyorsan ben yokum, sen de çekmeceyi açtın. Annen açmazdı. Sen açarsın, biliyorum. Küçükken de hediyelerini bayramdan önce bulurdun.”"),
P(function(d){ return !d.yakti; }, "“Ne yapacağına sen karar ver, ben veremedim. Yirmi dört yıl her sabah ‘bugün’ dedim, her akşam ‘yarın’ dedim. Rahmi'nin kızını aradım, sesini duyunca kapattım. Göğsümde bir ağırlık var, doktor tansiyon diyor.”"),
P(function(d){ return !d.yakti; }, "“Senin odanın penceresinden kestaneyi görürdüm. O ağacı ben diktim, sen doğduğun yıl. Hep onu sulamam gerektiğini düşünürdüm, kendi kendine büyüdü. Sen de öyle.”"),
P(function(d){ return !d.yakti; }, "Sayfanın altında bir şey daha başlamış, karalanmış. Altından yalnızca “affet” okunuyor. Önünde “beni” mi var, “onu” mu, seçemiyorsun."),
"Kalem elinde. Otel odasının kliması tıkırdıyor."
], secenekler: [
{ t: "Babanı affedersin.", to: "bs", etki: { affetti: true, sadakat: 1 } },
{ t: "Affetmezsin. Bu senin affedebileceğin bir şey değil.", to: "bs", etki: { affetmedi: true, hakikat: 1 } },
{ t: "Bir satıra “affediyorum”, altına “affetmiyorum” yazarsın. Hiçbirini çizemezsin.", to: "bs", etki: { ikisi: true } },
{ t: "Yeni bir sayfa açıp Ege'ye yazarsın.", to: "bs", etki: { kendi_not: true, hakikat: 1 } }
]},

bs: { yonlendir: [
{ if: function(d){ return d.kamu || d.dava; }, to: "son_hakikat" },
{ if: function(d){ return d.elif_bilir; }, to: "son_iki_kiz" },
{ if: function(d){ return d.sadakat >= 5; }, to: "son_babasinin" },
{ if: function(d){ return d.kefaret; }, to: "son_kefaret" },
{ if: function(d){ return d.yakti; }, to: "son_kul" },
{ to: "son_babasinin" }
]},

/* ---------- SONLAR ---------- */
son_hakikat: { son: true, baslik: "Karar Metni", metin: [
P(S("z4C"), "Defterin son sayfasına iki satır yazmıştın, alt alta: “affediyorum”, “affetmiyorum.” Hangisini çizeceğine hâlâ karar vermedin."),
P(function(d){ return d.kamu; }, "Bir yıl sonra mahkeme yargılamanın yenilenmesine karar verdi. Rahmi Kara'nın mahkûmiyeti, ölümünden yirmi yıl sonra kaldırıldı. Elif salonda babasının fotoğrafını göğsüne bastırıp oturdu, kalkamadı. Avukatı koluna girdi."),
P(function(d){ return d.dava && !d.erteleme; }, "Dava bir buçuk yıl sürdü. Defter, senin ifaden, Elif'in yirmi dört yıllık dosyaları. Karar okunduğunda Elif dönüp sana sarıldı. O kadar sert ki küpen kulağını çizdi. Akşam aynada gördün, bir hafta geçmedi."),
P(function(d){ return d.erteleme; }, "Annen ertesi bahar öldü. Cenazeden bir hafta sonra Elif'i aradın. “Şimdi,” dedin. Dava bir yıl sürdü, mahkûmiyet kaldırıldı. Kararın fotokopisini annenin mezarına götürdün. Rüzgâr uçurmasın diye üstüne taş koydun, sonra geri aldın."),
"Artık babanın adı geçince insanlar bir an duraksıyor. Eczanede, bankada. Soyadını kimliğinden okuyan genç bir memur gözünü kaldırıp sana bakıyor, sonra hiçbir şey olmamış gibi kaşesini basıyor.",
P(function(d){ return d.buro_kapandi; }, "Büro kapandı. Belediyede, deprem denetiminde çalışıyorsun. Maaş yarı yarıya. Her raporu iki kez okuyorsun. Mesai arkadaşların buna gülüyor, sen de gülüyorsun, yine de üçüncü kez açıp bakıyorsun."),
P(function(d){ return !d.buro_kapandi; }, "Büro küçüldü. Kapıdaki tabelada artık yalnızca adın var: “Nesrin Mimarlık.” Bazı müşteriler gitti. Bir tanesi geldi, “Sizi haberden buldum,” dedi. Bir okul yaptırıyormuş."),
"Zeynep Yılmaz hâlâ yedi yaşında. Rahmi Bey cezaevinde ölmüş bir adam olarak kaldı. Baban yirmi dört yıl susan adam olarak.",
"Elif bir gün kararın aslını çerçeveletip salonuna, babasının fotoğrafının yanına astı. Sana fotoğrafını attı. Altına bir şey yazmamıştı. Sen de yazmadın. Yalnızca bir kalp gönderdin, sonra silmek istedin, silmedin.",
P(function(d){ return d.affetti; }, "Babanı affettin. Bunu ancak her şeyi söyledikten sonra yapabildin."),
P(function(d){ return d.affetmedi; }, "Babanı affetmedin. Ama Ege sorduğunda onun çamura gömülen ayakkabısını da anlattın, demirleri de.")
]},

son_iki_kiz: { son: true, baslik: "İki Kız", metin: [
P(S("z4C"), "Defterin son sayfasına iki satır yazmıştın, alt alta: “affediyorum”, “affetmiyorum.” Hangisini çizeceğine hâlâ karar vermedin."),
"Mahkemeye gidilmedi. Elif öyle istedi.",
"“Bilmek istiyordum,” dedi bir gün, telefonda. “Biliyorum artık. Mahkeme bana bundan fazlasını vermez. Ama senin oğluna çok şey yapar. Babam olsa ‘Bırak kızım’ derdi. Hep ‘Bırak kızım’ derdi zaten, sinir olurdum.”",
"Seni affetmedi. Ama seni korudu. Bunun altında ezilip ezilmediğini her sabah yeniden düşünüyorsun.",
P(function(d){ return d.elif_el; }, "Ayda bir buluşuyorsunuz. İzmit sahilinde, bir çay bahçesinde. Garson artık sormadan iki çay getiriyor. Elif sana Rahmi Bey'in nasıl güldüğünü anlatıyor, kahkahası mahalleden duyulurmuş. Sen ona babanın mangalda herkese tabak dağıtıp kendisi en son yediğini."),
P(function(d){ return !d.elif_el; }, "Her yıl 17 Ağustos'ta Çınar Parkı'nda karşılaşıyorsunuz. Konuşmuyorsunuz. Taşın önünde yan yana bir saat duruyorsunuz. Geçen yıl Elif'in kızı da gelmişti. Sana bir sakız uzattı."),
"Gerçek ikinizin arasında kaldı. Ege bilmiyor. Elif'in kızı bilmiyor. Bir gün biri soracak. İkiniz de cevabı hazırlamadınız.",
"Elif bir gün Rahmi Bey'in cezaevinden yazdığı son mektubu gösterdi. Çizgili defter kâğıdı, mavi tükenmez. Son satır: “Kızım, ödevlerini yap, annene yardım et. Kimseye kin tutma, kin insanı yer.” Altında bir güneş çizmiş. Kızına yedi yaşındayken çizdiği güneşin aynısı, dedi Elif."
]},

son_kefaret: { son: true, baslik: "Her Ayın Biri", metin: [
P(S("z4C"), "Defterin son sayfasına iki satır yazmıştın, alt alta: “affediyorum”, “affetmiyorum.” Hangisini çizeceğine hâlâ karar vermedin."),
"Bağış her ayın birinde gidiyor. Elif'in derneği büyüdü: bir oda, sonra iki oda. Bir avukat, bir psikolog, raflarca dosya. Başka depremlerin aileleri de geliyor artık.",
"Elif bir ödül aldı. Konuşmasında “adını bilmediğim bir dosta” teşekkür etti. Sen en arka sıradaydın. Alkışlarken bileziğin sandalyeye çarptı, öndeki kadın dönüp baktı.",
"Rahmi Bey'in adı temizlenmedi. Delil yetersiz bulundu. Delil senin çekmecende.",
P(function(d){ return d.babam_isterdi; }, "Elif o konuşmada şunu da söyledi: “Suçlu bile sonunda pişman olmuş.” Salon alkışladı. Baban öyle bir şey hiç söylememişti. Onu sen söyletmiştin. O akşam eve dönerken arabada radyoyu sonuna kadar açtın."),
"Bazı geceler defteri çekmeceden çıkarıyorsun. Açmıyorsun. Köşesi kıvrık kapağa bakıyorsun, sonra geri koyup kilitliyorsun. Anahtarı ayakkabılıktaki tabakta tutuyorsun; Tarık oranın ne olduğunu hiç sormadı.",
"Bir gün Ege'ye bırakacaksın anahtarı. Yanına bir not yazmayı düşünüyorsun. Taslağı üç kez başladın. Üçü de “Oğlum,” diye başlıyor ve orada bitiyor.",
"Baban hiçbir şey vermedi. Sen her ay veriyorsun. Ayın birinde banka bildirimi geldiğinde telefonu ters çeviriyorsun."
]},

son_kul: { son: true, baslik: "Kül", metin: [
P(S("z4C"), "Defterin son sayfasına iki satır yazmıştın, alt alta: “affediyorum”, “affetmiyorum.” Hangisini çizeceğine hâlâ karar vermedin."),
"Defter yok. Kül bir kavanozda, ya da gül fidanının dibinde, ya da bir rüzgârda.",
"Elif hâlâ bekliyor. Videoları seyrekleşti. Sonuncusunda saçının ortasında beyaz bir tutam vardı. Boyatmamış.",
P(function(d){ return d.ege_bilir; }, "Ege bir gün mutfakta sordu: “Neden yaktın?” “Seni korumak için.” Buzdolabının kapağı elinde, bir süre içeri baktı. “Dedem de anneannemi korumak için mi sustu?” Cevap vermedin. Ege bir yoğurt alıp kapağı kapattı."),
P(function(d){ return d.egeye_yalan; }, "Ege'ye yalan söylemiştin. Kâğıt parçasını cüzdanına koydun sandın; Ege ondan önce telefonuyla fotoğrafını çekmişti. Bir gün, belki sen öldükten sonra, o fotoğrafı bulacak."),
"Babanın gülü bu bahar çok açtı. Tarık “Gübreden,” dedi. Sen bir şey demedin. Bir dal kesip mutfağa koydun. Üç gün sonra yaprakları masaya döküldü, toplamaya kıyamadın, bir hafta öyle kaldı.",
"Bazı gecelerde, uyumadan önce, o sayfaları kafanda okuyorsun. 18 Ağustos. “Demirleri ben eksilttim.” Hatırladığın cümleler her seferinde birazcık değişiyor. Hangisinin gerçekten yazılı olduğunu artık bilmiyorsun.",
"Annenin cenazesinde Elif'i gördün. Kalabalığın en arkasında, siyah bir yağmurlukla. Başıyla selam verdi. Bir şey biliyor mu? Gidip sormadın. Arabana binene kadar sırtında bakışını hissettin, belki hissettiğini sandın."
]},

son_babasinin: { son: true, baslik: "Babasının Kızı", metin: [
P(S("z4C"), "Defterin son sayfasına iki satır yazmıştın, alt alta: “affediyorum”, “affetmiyorum.” Hangisini çizeceğine hâlâ karar vermedin."),
"Okul projesi bitti. Açılışta kurdeleyi kestin. Makas körmüş, iki kez denedin, çocuklar güldü. Bina sağlam. Her demiri kendin kontrol ettin. Üç kez.",
"Defter bir yerde. Ne olduğunu biliyorsun. Bilmek, hiçbir şey yapmamana engel olmadı. Babana da olmamıştı.",
"Elif'in videolarına bakmıyorsun. Bir akşam önerilenlerde çıktı. Küçük resimde Elif ağzını açmış, bir şey söylerken donmuş. Telefonu kapatıp yüzüstü koydun.",
"Hikmet amcanın mevlitte söylediği cümle bazen aklına geliyor: “Bir kere bile bir çivi eksik çakmadı.” Kimse düzeltmedi. Sen de.",
P(function(d){ return d.affetti; }, "Babanı affettin. Bazı günler, onu affettiğin için onun gibi olmanın kolaylaştığını düşünüyorsun. Sonra bu düşünceyi bir kenara koyuyorsun."),
P(function(d){ return d.kendi_not; }, "Defterin son sayfasının arkasına Ege için bir not yazdın: “Oğlum, ben de dedemin yaptığını yaptım. Sen yapma.” Yazdıktan sonra okudun. Yanlış yazmışsın: “dedemin” değil, “dedenin” olacaktı. Düzeltmedin."),
"Bir gece Ege'yi uyurken izliyorsun. Yirmi yaşında. Ertesi gün sınavı var. Masasında enerji içeceği kutuları, ayağı yorganın dışında.",
"Baban da seni böyle izlermiş. Annen anlatmıştı. Kestane ağaçlı odanın kapısında, ışığı yakmadan.",
"Yorganı ayağının üstüne çekiyorsun. Ege uykusunda bir şey mırıldanıyor, dönüyor."
]}

},

ayna: function(d){
  var out = [];
  var h = d.hakikat, s = d.sadakat, z = d.huzur;
  if(h >= s && h >= z) out.push("Defteri saklamak yerine ortaya koydun. Bunun bedelini büron, oğlun, annen de ödedi.");
  else if(s >= z) out.push("Çoğu kavşakta aileni korudun. Baban da aynı gerekçeyi kullanmıştı.");
  else out.push("Çoğu kavşakta kapıyı kapattın, telefonu susturdun. Elif o sırada bekliyordu.");
  if(d.yirtti) out.push("Defterden bir sayfa yırtıp cüzdanında taşıdın.");
  if(d.yalan) out.push("Elif'e en az bir kez yalan söyledin.");
  if(d.anladi) out.push("Annene onu anladığını söyledin.");
  if(d.ege_bilir) out.push("Ege'ye her şeyi anlattın.");
  if(d.egeye_yalan) out.push("Ege'ye yalan söyledin; o kâğıdın fotoğrafını çoktan çekmişti.");
  return out;
},

dipnot: [
{ ad: "Hakikat ve huzur", t: "Bir gerçeği bilmek her zaman iyi midir? Nietzsche, insanın yaşayabilmek için bazı şeyleri unutmaya ihtiyaç duyduğunu söyler. Hakikat ve uzlaşma komisyonları ise tersini savunur: söylenmeyen gerçekler, toplumları ve aileleri içten içe çürütür. Bu hikâyedeki her karar, bu iki ihtiyaç arasında bir yerdeydi." },
{ ad: "Kuşaklar arası suç", t: "Bir babanın suçu, kızına geçer mi? Karl Jaspers savaş sonrası Almanya için yazarken, suçun kişisel olduğunu ama sorumluluğun miras alınabileceğini söyler. Ankara'daki ilk daire, kestane ağaçlı oda, Arslan soyadı; hepsi, Nesrin'in seçmediği ama içinde yaşadığı bir mirastı." },
{ ad: "Kendini kandırma", t: "Sartre buna “kötü niyet” der: insanın kendi özgürlüğünden ve sorumluluğundan kaçmak için kendine yalan söylemesi. Baban “Ne diyeceğimi biliyorum” yazdığında, kendini kandırmayı seçmişti. Annenin “Her anne seçer” cümlesi de, belki, aynı kandırmanın bir biçimiydi." },
{ ad: "Affetme", t: "Jacques Derrida, gerçek affetmenin ancak affedilemez olanı affetmek olduğunu söyler; affedilebilir olanı affetmek, yalnızca bir hesaplaşmadır. Ama kimin affetme hakkı var? Otuz bir ailenin mi, Elif'in mi, yoksa babasının suçunu miras alan kızın mı?" }
]
});
})();
