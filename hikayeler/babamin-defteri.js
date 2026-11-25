(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "babamin-defteri",
baslik: "Babamın Defteri",
dunya: "Gerçek dünya",
kategoriler: ["Aile ve Hafıza", "Toplum ve Adalet"],
giris: "Babanın cenazesinden bir hafta sonra çalışma odasında kilitli bir çekmece buluyorsun. İçinden 1993 tarihli bir defter çıkıyor ve defterde 1999 depreminde yıkılan bir binanın hiç anlatılmamış hikâyesi yazıyor. Yirmi dört yıldır başka bir adam suçlu biliniyor ve o adamın kızı hâlâ adalet bekliyor. Sen bir mimarsın ve babanın soyadını taşıyorsun. Gerçekle huzur, ailene bağlılıkla bir yabancıya olan borcun arasında bir seçim yapman gerekecek.",
kavramlar: ["Hakikat ve huzur", "Kuşaklar arası suç", "Kendini kandırma", "Affetme"],
ozet: "Babanın cenazesinden bir hafta sonra kilitli bir çekmecede bir defter buluyorsun. 1999 depreminde yıkılan bir binanın gerçek hikâyesi orada yazıyor. Yirmi dört yıldır başka bir adam suçlu biliniyor.",
baslangic: "b1",
durum: { hakikat: 0, sadakat: 0, huzur: 0 },

sahneler: {

b1: { saat: "Ekim 2023", baslik: "Çalışma Odası", metin: [
"Babanı yedi gün önce toprağa verdin. Nuri Arslan, yetmiş dokuz yaşında, kalpten gitti. Cenazede belediye başkanı konuştu, eski şantiye şefleri ağladı, gazeteye yarım sayfa ilan verildi: “Kentimize değer katan dürüst bir inşaat mühendisi.” İlandaki soyadı “Arlsan” diye yanlış basılmıştı, annen üç gün buna sinirlendi.",
"Adın Nesrin, kırk dört yaşındasın, mimarsın. Büronun kapısında da aynı soyadı yazıyor, Arslan Mimarlık. Babanın adı yıllarca önünü açtı. Bunu hiç inkâr etmedin ama yüksek sesle de söylemedin.",
"Bugün annen Sevim Hanım babanın çalışma odasını toplamak için seni çağırdı. Kitaplar, plaketler, rulo rulo eski projeler, cetveller var. Oda tütün ve kâğıt kokuyor, pencere yıllardır açılmamış.",
"Çocukken bu odaya girmen yasaktı. Bir keresinde gizlice girip masanın altına saklanmıştın. Baban seni bulunca kızmamış, kucağına alıp parmağını bir planın üstünde gezdirmişti: “Bak, bu kolon bütün binayı taşır. Bir kolon eksik olursa her şey çöker.” Sonra sana bir kurşun kalem vermişti, sen de onu üç gün yemek masasına bile götürmüştün.",
"Masanın en alttaki çekmecesi kilitli. Babanın anahtarlığında, ev anahtarlarının arasında küçük, pirinç bir anahtar var.",
"Çekmecede tek bir şey duruyor, kahverengi deri kaplı, köşeleri yıpranmış bir defter. Kapağında bir yıl yazıyor, 1993.",
"Düzgün, eğik, mühendis yazısını hemen tanıyorsun. Annen mutfaktan sesleniyor: “Nesrin, çay koydum, gel hadi!”"
], secenekler: [
{ t: "Defteri hemen orada, babanın sandalyesinde açarsın.", to: "b2", etki: { hakikat: 1 } },
{ t: "Yalnızken okumak için defteri çantana koyup eve götürürsün.", to: "b2", etki: { huzur: 1, eve: true } },
{ t: "Defteri mutfağa, annene götürüp sorarsın: “Bunu biliyor muydun?”", to: "b2", etki: { sadakat: 1, anneye_gosterdi: true } },
{ t: "Çekmeceyi yeniden kilitleyip anahtarı cebine koyarsın.", to: "b2", etki: { huzur: 1, sadakat: 1, kilitledi: true } }
]},

b2: { saat: "Ekim 2023", baslik: "18 Ağustos 1999", metin: [
P(S("b1A"), "Defteri orada, babanın sandalyesinde açtın. Sandalye senin ağırlığına alışık değildi, gıcırdadı. Annen bir daha seslendi, cevap vermedin."),
P(S("b1B"), "Defteri gece, kendi evinde, mutfak masasında açtın. Tarık uyuyordu, Ege odasındaydı, kulaklığından bir şarkının cızırtısı geliyordu."),
P(S("b1C"), "Annen defteri görünce bardağı tabağına koydu. “Babanın notları,” dedi. “Hep bir şeyler yazardı. Al oku istersen, ben okumadım.” Sonra şekerliği sana doğru itti, oysa şekersiz içtiğini bilirdi."),
P(S("b1D"), "Çekmeceyi kilitledin ve üç gece uyuyamadın. Dördüncü gece annenin evine gidip anahtarı yeniden çevirdin. Annen uyuyordu, ayakkabılarını kapıda çıkarmıştın."),
"Defterin çoğu teknik notlardan ibaret, hesaplar, malzeme listeleri, şantiye tarihleri. 1993'te şöyle yazmış: “Gölcük, Çınar Apartmanı. Yedi kat, yirmi sekiz daire. Ortak: Rahmi Kara.”",
"Kenarlarda başka şeyler de var. “Malzeme fiyatları arttı.” “Rahmi ile tartıştık.” “Nesrin bugün dişini düşürdü.” İş de hayat da aynı sayfada, aynı mürekkeple yazılmış. Sen o zaman on yaşındaydın.",
"Sonra 1999 geliyor, 18 Ağustos, depremden bir gün sonrası. El yazısı değişmiş, titrek, sıkışık, satırlar birbirinin üstüne binmiş.",
"“Çınar yıkıldı. Otuz bir kişi. Demirleri ben eksilttim, 1993 baharında. Rahmi bilmiyordu. Çimento oranını da ben değiştirdim. Aradaki parayla Ankara'daki ilk daireyi aldık. Nesrin o evde büyüdü.”",
"Bir sonraki sayfa 22 Ağustos tarihli: “Rahmi'yi gözaltına aldılar. Yarın ifade vereceğim. Ne diyeceğimi biliyorum.”",
"2001'de şunu yazmış: “Rahmi'ye on iki yıl verdiler. Ben beraat ettim.” 2004'te de şunu: “Rahmi cezaevinde öldü. Kalp. Cenazesine gitmedim.”",
"Ankara'daki ilk daire, senin çocukluk odan, penceresinden kestane ağacı görünen oda."
], secenekler: [
{ t: "Sonuna kadar okursun.", to: "b2b", etki: { hakikat: 1, tamamini: true } },
{ t: "O sayfada durursun, daha fazlasını kaldıramazsın.", to: "b2b", etki: { huzur: 1 } },
{ t: "Telefonunla her sayfanın fotoğrafını çekersin.", to: "b2b", etki: { hakikat: 1, foto: true } },
{ t: "O sayfayı defterden yırtıp ayrı bir yere koyarsın.", to: "b2b", etki: { sadakat: 1, yirtti: true } }
]},

b2b: { saat: "Ekim 2023", baslik: "Fotoğraf", metin: [
P(S("b2A"), "Sonuna kadar okudun. 2019'da “Nesrin bugün okul ihalesini kazandı. Gurur duydum. Hakkım var mı?” diye yazmış, 2022'de “Doktor kalbim yorgun dedi. Rahmi'nin kalbi gibi.” Son sayfaya gelince parmağını sayfanın kenarında tuttun ama çevirmedin."),
P(S("b2B"), "Defteri kapattın. Elin kapağın üstünde kaldı, açılmasın diye bastırıyormuş gibi."),
P(S("b2C"), "Kırk iki fotoğraf çektin. Şimdi telefonunun galerisinde tatil fotoğraflarının, Ege'nin mezuniyet pozlarının arasında duruyorlar. Birinde parmağın da çıkmış ama yeniden çekmedin."),
P(S("b2D"), "Sayfayı yırttın, kâğıt tertemiz koptu. Katlayıp cüzdanına, ehliyetinin arkasına koydun."),
"Defterin arka kapağının içine bir fotoğraf sıkışmış. Siyah beyaz, 1993 yazında çekilmiş, Çınar Apartmanı'nın temel atma töreni.",
"Çay soğumuş, dışarısı kararmış.",
"Fotoğrafta iki adam ellerinde kürekle yan yana durup gülümsüyor. Biri baban, otuz dokuz yaşında, bıyıklı, gözlüklü. Öbürü Rahmi Kara, babandan kısa, daha zayıf, gömleğinin yakası açık, eli babanın omzunda.",
"Fotoğrafın arkasında babanın el yazısı var: “Rahmi ile. Ortaklığımızın ilk binası. İnşallah son değil.”"
], secenekler: [
{ t: "Fotoğrafı masaya, görünür bir yere koyarsın.", to: "b3", etki: { hakikat: 1 } },
{ t: "Fotoğrafı defterin içine geri koyarsın.", to: "b3", etki: { huzur: 1 } },
{ t: "Onu tanımak için Rahmi Kara'nın yüzüne uzun uzun bakarsın.", to: "b3", etki: { hakikat: 1, rahmi_yuz: true } },
{ t: "Babanın yüzüne bakarsın. Onu tanıdığını sanıyordun.", to: "b3", etki: { sadakat: 1 } }
]},

b3: { saat: "Ekim 2023", baslik: "Annen", metin: [
P(S("b2bA"), "Fotoğrafı masaya, görünür bir yere koydun. Bütün gece iki adam sana gülümseyip durdu."),
P(S("b2bB"), "Fotoğrafı defterin içine geri koydun ama hangi sayfaya koyduğunu bilerek, 18 Ağustos'a."),
P(S("b2bC"), "Rahmi Kara'nın yüzüne uzun uzun baktın, geniş alnına, kalın bıyığına, babanın omzundaki eline. Gömleğinin cebinden bir sigara paketi görünüyordu."),
P(S("b2bD"), "Babanın yüzüne baktın. O bıyığı hatırlıyordun, seni öperken batardı. Sen “Batıyor baba!” diye bağırırdın, o da daha çok bastırırdı."),
"Ertesi gün annenin evinde, çocukken ödevlerini yaptığın mutfak masasında oturuyorsun. Annen çay koyuyor.",
"Babanın terlikleri hâlâ kapının önünde, gözlükleri televizyonun üstünde, ceketi askıda duruyor. Annen hiçbirine dokunmuyor. “Yerlerinde dursunlar,” diyor.",
"Böyle bir şey nasıl sorulur ki? Sonunda yalnızca defteri masaya koyuyorsun.",
"Annen defterin kapağına bakıyor, sonra çay bardağını ses çıkmasın diye yavaşça tabağına bırakıyor.",
"“Biliyordum,” diyor.",
"“Depremden bir hafta sonra söyledi. Gece, bu mutfakta. Ağladı. Hayatımda onu iki kere ağlarken gördüm, biri o geceydi, öbürü sen doğduğunda.” Sesi dümdüz. “Ertesi gün ifadesini verdi. Ben de gitme demedim, konuş demedim, hiçbir şey demedim.”",
"“Neden?” diye soruyorsun.",
"“Sen on yaşındaydın,” diyor. “Rahmi'nin de bir kızı vardı, biliyorum. Ben kendi kızımı seçtim.” Şekerliğin kapağını açıp kapatıyor. “Doğru muydu? Değildi. Ama yine olsa yine yapardım.”"
], secenekler: [
{ t: "Yıllardır söylenmemiş her şeyle annene bağırırsın.", to: "bd_kestane", etki: { hakikat: 1, anneye_kizdi: true } },
{ t: "Annenin elini tutarsın, o da bir yük taşımış.", to: "b3b", etki: { sadakat: 1, anne_el: true } },
{ t: "“Rahmi'nin kızının adı ne?” diye sorarsın.", to: "bd_mezar", etki: { hakikat: 1, elif_adi: true } },
{ t: "Bu mutfakta nefes alamıyorsun, kalkıp gidersin.", to: "b3b", etki: { huzur: 1 } }
]},

b3b: { saat: "Ekim 2023", baslik: "Arşiv", metin: [
P(S("bd_kestaneA"), "Kestaneyi kıza verdin. Kız teşekkür edip içeri koştu, pencereden, senin eski pencerenden bir an el salladı."),
P(S("bd_kestaneB"), "Kestaneyi cebine koydun. Ankara'dan dönerken elini cebine soktun, parmakların ona değdi, pürüzsüz ve serindi. Bir ara direksiyonu bırakıp kestaneyi avucunda tuttun, bir korna sesiyle kendine geldin."),
P(S("bd_kestaneC"), "Kız gözlerini kocaman açtı. “Gerçekten mi? Benim odamda mı?” Evet, dedin. “Orada hiç korktunuz mu? Ben geceleri dolaptan korkuyorum.” “Ben de korkardım,” dedin. Yalandı, sen hiç korkmazdın."),
P(S("bd_kestaneD"), "Arabaya bindin, sokağın sonuna gelene kadar dikiz aynasına bakmadın. Sokağın sonunda baktın, kestane ağacı, apartman, balkon küçülerek uzaklaşıyordu."),
P(S("bd_mezarA"), "Uzaklaştın. Kapıdan çıkarken dönüp baktın, kadın mezarın başına diz çökmüş, su döküyordu. Seni görmedi."),
P(S("bd_mezarB"), "Kadın yaklaşınca seni gördü ve durdu. “Babamı tanıyor muydunuz?” diye sordu. Bir şey diyemedin. “Deprem şehitlerinden birinin yakını mısınız?” Başını ne evet ne hayır diye oynattın. Kadın bir süre baktı, sonra su şişesinin kapağını dişleriyle açıp mezarı sulamaya başladı."),
P(S("bd_mezarC"), "Fotoğrafı taşın üstüne, çiçeklerin yanına bıraktın. Uzaklaşırken dönüp baktın, kadın fotoğrafı eline almış bakıyordu. Sonra başını kaldırıp mezarlığın içinde birini aradı."),
P(S("bd_mezarD"), "Ağacın arkasından izledin. Kadın mezarı suladı, çiçekleri düzeltti, taşın kenarına oturdu. Dudakları kıpırdıyordu, babasıyla konuşuyordu. Bir ara güldü."),
P(S("b3A"), "Bağırdın. Annen dinledi, itiraz etmedi, ağlamadı. Sen bitirince “Haklısın,” dedi. Sonra kalkıp kendi bardağını yıkadı, daha bitirmemiş olduğun halde seninkini de aldı."),
P(S("b3B"), "Annenin elini tuttun. Kemikleri belirginleşmiş, derisi incelmiş, babanın aldığı yüzük parmağında bollaşmıştı. Annen elini çekmedi."),
P(S("b3C"), "“Elif,” dedi annen. “Elif Kara. Senden üç yaş küçük.” Nereden bildiğini sormadın. Yirmi dört yıldır hatırlıyordu."),
P(S("b3D"), "Arabaya bindin ama motoru çalıştırmadın, bir saat öylece oturdun. Annen perdeyi bir kere araladı, bir kere kapattı."),
"O gece büroda bilgisayarın başında 1999 ile 2001 arasının gazete arşivlerini tarıyorsun.",
"Büro boş. Masalarda yarım kalmış maketler, kahve fincanları duruyor. Duvarda ödüllerin asılı. Birinin altına babanın el yazısıyla yazdığı bir notu çerçeveletmiştin: “Kızıma, benden iyi bir mimar olduğu için.”",
"Çınar Apartmanı davasını arıyorsun. Bir manşet çıkıyor: “Müteahhit Rahmi Kara'ya 12 yıl.” Altındaki fotoğrafta Rahmi iki jandarmanın arasında, başı önde yürüyor. Arkada, kalabalığın içinde sekiz yaşında bir kız var, elinde “Babam masum” yazan bir pankart. Harfler renkli kalemle yazılmış, biri ters.",
"Mahkeme tutanağında babanın ifadesinden bir alıntı var: “Ortağım malzeme tedarikinden sorumluydu. Ben statik hesapları onayladım. Uygulamada ne yapıldığını bilmiyordum. Bilseydim o binaya kendi ailemi yerleştirir miydim?”",
"Ekranın ışığı yüzüne vuruyor, saat ikiyi geçmiş."
], secenekler: [
{ t: "Bütün haberleri, bütün tutanakları bir klasöre kaydedersin.", to: "b4", etki: { hakikat: 1, arsiv: true } },
{ t: "Babanın ifadesini bir daha okursun, sonra bir daha.", to: "b4", etki: { sadakat: 1 } },
{ t: "Pankart tutan kızın fotoğrafını büyütürsün.", to: "b4", etki: { hakikat: 1, elif_foto: true } },
{ t: "Bu gecelik yeter deyip bilgisayarı kapatırsın.", to: "b4", etki: { huzur: 1 } }
]},

b4: { saat: "Kasım 2023", baslik: "Elif Kara", metin: [
P(S("b3bA"), "Bütün haberleri bir klasöre kaydettin. Klasöre ad verirken bir süre durakladın, sonunda “Çınar” yazdın."),
P(S("b3bB"), "Babanın ifadesini bir daha okudun, sonra bir daha. “Ortağım malzeme tedarikinden sorumluydu.” Beşincisinde yüksek sesle okudun, boş büroda sesin tuhaf çıktı."),
P(S("b3bD"), "Bilgisayarı kapattın. Kararan ekranda kendi yüzünü, babanınkine benzeyen çeneni gördün."),
"Elif Kara'yı bulmak beş dakikanı alıyor. İzmit'te bir ortaokulda Türkçe öğretmeni, kırk bir yaşında. “Çınar'ın Gerçeği” diye bir derneği var, eski, sade bir internet sitesi, birkaç da video.",
"Fotoğraf galerisinde her yılın 17 Ağustos'u var, Çınar'ın eski yerinde yapılan anmalar. Elif'in yıllar içinde yaşlandığını görüyorsun, on dokuz, yirmi beş, otuz, kırk. Her fotoğrafta elinde babasının fotoğrafı var. Bir yıl yanında bir bebek arabası duruyor, sonraki yıllarda bir çocuk, sonra bir genç.",
"Bir video açıyorsun. Elif bir masanın arkasında oturuyor, arkasında babasının büyütülmüş fotoğrafı asılı. Sesi sakin, kelimeleri yerli yerinde, yirmi yıldır aynı şeyi anlatan birinin sesi bu.",
"“Babam o binanın malzemesini almadı,” diyor. “Faturalarda ortağının imzası vardı ama mahkeme bunu dikkate almadı. Babam cezaevinde öldü. Ona son kez camın arkasından dokunabildim.”",
"Videonun sonunda doğrudan kameraya bakıyor: “Bir gün biri konuşacak. O binayı kimin yıktığını bilen biri. Ben o günü bekliyorum. Artık babam için değil, bilmek için bekliyorum.”",
P(function(d){ return d.elif_foto; }, "Pankart tutan sekiz yaşındaki kızın kaşlarıyla ekrandaki kadının kaşları aynı."),
"Sayfanın altında bir iletişim adresi var."
], secenekler: [
{ t: "Kim olduğunu söylemeden ona bir mesaj yazarsın: “Size söylemem gereken bir şey olabilir.”", to: "b5", etki: { hakikat: 1, mesaj: true } },
{ t: "Sabaha kadar bütün videoları izlersin.", to: "b5", etki: { hakikat: 1 } },
{ t: "Ne yapabileceğini, neyi kaybedeceğini öğrenmek için avukatını ararsın.", to: "b5", etki: { sadakat: 1, avukat_erken: true } },
{ t: "Bilgisayarı kapatırsın. Yirmi yıl beklemiş biri birkaç gün daha bekleyebilir.", to: "b5", etki: { huzur: 1 } }
]},

b5: { saat: "Kasım 2023", baslik: "Tarık", metin: [
P(S("b4A"), "Mesajı gönderdin. Üç dakika sonra “Kimsiniz?” diye cevap geldi ama sen cevap vermedin. Ekranda “yazıyor...” yazısı belirdi, kayboldu, yine belirdi, sonra hiçbir şey gelmedi."),
P(S("b4B"), "Sabaha kadar izledin. Videolardan birinde Elif'in arkasındaki duvarda bir öğrencinin çizdiği resim asılıydı, bir ev, bir güneş, altında da “Elif öğretmenim” yazıyordu."),
P(S("b4C"), "Avukat seni dinleyip not aldı. “Yarın konuşalım,” dedi. Telefonu kapatmadan önce de ekledi: “Nesrin, babanı tanırdım. Bu defter kimin elinde patlarsa patlasın, önce seni yakar.”"),
P(S("b4D"), "Bilgisayarı kapattın. Ertesi gün işe gittin, toplantılara girdin, bir proje sundun, hatta güldün. Kimse bir şey fark etmedi."),
"Tarık'a anlatman bir haftanı alıyor. Sonunda bir akşam, Ege odasındayken mutfakta anlatıyorsun.",
"O hafta Ege'ye kahvaltı hazırladın, Tarık'la akşam haberlerini izledin, komşunun kızının düğününe gittin ve kimse bir şey anlamadı. Baban yirmi dört yıl boyunca her gün bunu yapmış.",
"Tarık dinliyor, sonra çay bardağını parmaklarının arasında çevirip duruyor.",
"“Nesrin, baban öldü. Rahmi Bey de öldü. Bu defter kimi geri getirecek?” Bardağı bırakıyor. “Ama bak neleri götürecek. Büronu, okul projesini, Ege'nin bursunu, soyadımızı. Ölmüş bir adamı yargılarken yaşayanları cezalandırmış olacaksın.”",
"“Peki ya Elif?” diyorsun.",
"“Elif yirmi dört yıldır bununla yaşıyor, bir yirmi dört yıl daha yaşar. Sen yaşayabilir misin, onu sor kendine.”",
"Koridordan bir ses geliyor. Ege'nin kapısı aralık, kulaklığın cızırtısı kesilmiş."
], secenekler: [
{ t: "Ege'yi çağırıp ona da anlatırsın, o da bu ailenin bir parçası.", to: "b6", etki: { hakikat: 1, ege_bilir: true } },
{ t: "Tarık'ın haklı olabileceğini kabul ederek “Düşüneceğim,” dersin.", to: "b6", etki: { huzur: 1 } },
{ t: "“Babam da böyle düşündü, yirmi dört yıl boyunca,” dersin.", to: "b6", etki: { hakikat: 1 } },
{ t: "Tarık'a sorarsın: “Senin baban olsaydı ne yapardın?”", to: "b6", etki: { sadakat: 1, tarik_soru: true } }
]},

b6: { saat: "Aralık 2023", baslik: "Avukat", metin: [
P(S("b5A"), "Ege seni dinledi. On dokuz yaşında, mimarlık birinci sınıfta, dedesinin kucağında büyüdü. Dinlerken yüzü önce bir yetişkininkine, sonra yine bir çocuğunkine döndü. “Dedem,” dedi, başka bir şey demedi. Odasına gitti, kapıyı kapattı, kilidi çevirdi."),
P(S("b5B"), "“Düşüneceğim,” dedin. Tarık rahatladı, kalkıp bulaşıkları yıkamaya başladı. Koridordaki kapı o gece bir daha kapanmadı."),
P(S("b5C"), "Tarık yüzüne baktı. Bir şey diyecekti, vazgeçti. Kalkıp bardağı lavaboya bıraktı. “Haklısın,” dedi, sırtı sana dönük. “Ama ben de haklıyım. Sorun da bu zaten.”"),
P(S("b5D"), "Tarık uzun süre düşündü. “Bilmiyorum,” dedi sonunda. “Belki ben de baban gibi yapardım. Belki sen de öyle yapardın. Beni korkutan da bu.”"),
"Avukat Feride Hanım'ın bürosundasın. Altmışlarında, gözlüğü burnunun ucunda, defterin fotokopilerini tek tek okuyor.",
"Feride Hanım babanın da avukatıydı, yirmi yıl boyunca şirketin bütün davalarına o baktı. Seni küçüklüğünden beri tanır, bayramlarda sana harçlık verirdi. Okurken bir kere bile başını kaldırmıyor. Sonunda gözlüğünü çıkarıp gözlerini ovuşturuyor. “Bilmiyordum,” diyor. Ona inanıyorsun, yirmi yıl boyunca hiç sormadığına da inanıyorsun.",
"“Hukuken bu defter yeni bir delil,” diyor. “Yargılamanın yenilenmesi istenebilir ve Rahmi Bey'in mahkûmiyeti ölümünden sonra bile kaldırılabilir. Bu, kızı için çok şey demek.”",
"“Ama babanız öldüğü için yargılanamaz. Mirası sorumlu tutulabilir. Otuz bir ailenin tazminat davası açma hakkı doğar. Annenizin evi, büronuzun sermayesi, babanızdan kalan her şey gider. Bir de basın var tabii.”",
"“Ya da,” diyor, daha yavaş, “hiçbir şey yapmazsınız. Defter bir çekmecede kalır. Bu da yasal.”",
"Feride Hanım fotokopileri bir zarfa koyuyor. “Hangi yolu seçersen seç Nesrin, bir şey kaybedeceksin. Ben sana yalnızca neyi kaybedeceğini söyleyebilirim.”"
], secenekler: [
{ t: "Defteri Elif Kara'ya götürürsün, ne yapacağına o karar versin. Ailenin adı artık onun elinde.", to: "e1", etki: { hakikat: 1, elif_bilir: true } },
{ t: "Kendi adınla savcılığa ve basına gidersin. Büron, okul ihalesi, Ege'nin soyadı, hepsi aynı gün gider.", to: "m1", etki: { hakikat: 2, kamu: true } },
{ t: "Defteri yakmaya karar verirsin. Ailen korunur, Elif yirmi dört yıl daha bekler, belki de sonsuza kadar.", to: "y1", etki: { huzur: 2, yakti: true } },
{ t: "Kimliğini gizleyerek Elif'e para ve avukatla yardım edersin, ama defteri vermezsin. Gerçeğin yerine bir kefaret.", to: "k1", etki: { sadakat: 1, kefaret: true } }
]},


bd_kestane: { saat: "Ekim 2023", baslik: "Kestane Ağacı", metin: [
"Annenin evinden çıkıp arabaya biniyor ve sürmeye başlıyorsun. Nereye gittiğini ancak varınca anlıyorsun, Ankara'da, Bahçelievler'de, çocukluğunun geçtiği sokaktasın.",
"Apartman hâlâ orada duruyor, dört katlı, krem rengi, balkonlarında çamaşırlar asılı. 1994'te taşınmıştınız, 2008'de satıldı. Şimdi başka bir aile oturuyor, balkonda pembe bir çocuk bisikleti var.",
"Kestane ağacı da orada, büyümüş, dalları üçüncü katın penceresine, senin pencerene değiyor. Her sonbahar kestaneleri sayıp babana gösterirdin, o da her seferinde aynı şakayı yapardı: “Bunlar benim, sen yalnızca sayıyorsun.”",
"“Aradaki parayla Ankara'daki ilk daireyi aldık.” O cümle şimdi bu krem rengi binanın üstüne çökmüş gibi duruyor.",
"Burada okumayı öğrendin. Burada ilk aşk mektubunu yazdın ama göndermedin. Burada mimar olmaya karar verdin.",
"Ağacın altındaki banka oturuyorsun. Ayağının dibine kabuğu yarılmış, içi parlayan bir kestane düşüyor.",
"Bisikletin sahibi kapıdan çıkıyor, yedi sekiz yaşlarında bir kız, ayakkabısının bir bağcığı çözülmüş. Seni görüyor. “Teyze kestane mi topluyorsunuz? Benim penceremden de düşüyor.”"
], secenekler: [
{ t: "Kestaneyi kıza verirsin.", to: "b3b", etki: { sadakat: 1 } },
{ t: "Kestaneyi cebine koyarsın.", to: "b3b", etki: { hakikat: 1, kestane: true } },
{ t: "Kıza o odada eskiden senin oturduğunu söylersin.", to: "b3b", etki: { huzur: 1 } },
{ t: "Kalkıp gidersin, bu sokağa bir daha gelmeyeceksin.", to: "b3b", etki: { huzur: 1 } }
]},

bd_mezar: { saat: "Ekim 2023", baslik: "Mezar", metin: [
"Annenin hatırladığı o isim, Elif Kara, aklından çıkmıyor. Bir hafta sonra kendini İzmit'te bir mezarlığın kapısında buluyorsun.",
"Rahmi Kara'nın mezarını bulmak bir saatini alıyor. Görevli defterleri karıştırıp sana bir yön gösteriyor, deprem şehitlerinin yanında ama ayrı bir sırada. “Cezaevinden geldi,” diyor, sesini alçaltmadan, “ailesi ötekilerin yanına gömdürdü.”",
"Taş sade, “Rahmi Kara, 1951–2004” yazıyor. Altına sonradan kazınmış gibi duran derin harflerle bir kelime daha yazılmış: “Masumdu.”",
"Mezarın üstünde bir kurdeleyle bağlanmış taze beyaz karanfiller var, biri bu hafta gelmiş.",
"Babanın mezarı Ankara'da, Karşıyaka'da, mermerden, adının altında “Mühendis” yazıyor. Onun cenazesine yüzlerce kişi geldi. Bu adamın cenazesine ise baban gelmedi, defterde yazıyor.",
"Mezarlığın öbür ucundan bir kadın geliyor, elinde bir şişe su, omzunda bez bir çanta var, kırk yaşlarında. Yüzünü bir gazete fotoğrafından tanıyorsun, sekiz yaşındayken bir pankartın arkasında duran kız bu."
], secenekler: [
{ t: "O seni görmeden uzaklaşırsın.", to: "b3b", etki: { huzur: 1, mezar_kacti: true } },
{ t: "Ne olacaksa olsun diye mezarın başında durmaya devam edersin.", to: "b3b", etki: { hakikat: 1, mezar_karsilasti: true } },
{ t: "Getirdiğin fotoğrafı, iki adamın yan yana durduğu fotoğrafı taşın üstüne bırakırsın.", to: "b3b", etki: { hakikat: 1, foto_birakti: true } },
{ t: "Bir ağacın arkasına geçip onu izlersin.", to: "b3b", etki: { izledi: true } }
]},

bd_amca: { saat: "Haziran 2024", baslik: "Amca", metin: [
"Mevlitten sonra evin arkasındaki bahçede amcan seni yakalıyor. Seyfi amca babanın küçük kardeşi, yetmiş üç yaşında, bütün hayatı babanın şirketinde muhasebecilik yaparak geçmiş. Elinde hâlâ mevlit şekeri paketi var.",
"“Bir insanmış öyle mi?” diyor, sesi titriyor. “Salonun ortasında, yüz kişinin önünde. Bir insanmış ha.”",
"Bahçeye, babanın diktiği gül fidanlarına bakıyor, sonra sesini alçaltıyor.",
"“Ben biliyordum,” diyor. “Doksan üçte faturaları ben tuttum, demir siparişlerini ben girdim. Bir gün baban gelip ‘Bu siparişi yarıya indir,’ dedi, ben de indirdim. Niye diye sormadım. Sorsaydım söylerdi ama sormadım.”",
"“Rahmi tutuklanınca cezaevine bir kere gittim. Camın arkasından bana baktı, ‘Seyfi, sen biliyorsun,’ dedi. Ben de başımı öyle bir oynattım, ne evet ne hayır.” Şeker paketini buruşturuyor. “Otuz yıl oldu, tek bir cümle bulamadım. Sen salonda buldun.”"
], secenekler: [
{ t: "Bir tanık daha olsun diye “Avukata gelir misin?” diye sorarsın.", to: "z2", etki: { hakikat: 1, seyfi_tanik: true } },
{ t: "Amcana sarılırsın.", to: "z2", etki: { sadakat: 1 } },
{ t: "“Neden şimdi bana söylüyorsun?” diye sorarsın.", to: "z2", etki: { hakikat: 1 } },
{ t: "“Bunu kimseye söyleme,” dersin, bir sır daha eklenir.", to: "z2", etki: { huzur: 1, seyfi_sus: true } }
]},

bd_mektup: { saat: "Haziran 2024", baslik: "Gönderilmemiş Mektup", metin: [
"Çalışma odası boşaltılmış, masa toplanmış, raflar bomboş. Ama kilitli çekmecenin bir de çift dibi olduğunu bugün fark ediyorsun, içteki tahtanın bir köşesi hafifçe kalkık.",
"Tahtayı kaldırınca altından bir zarf çıkıyor. Pulu yapıştırılmış ama damgalanmamış. Üstünde “Elif Kara, İzmit” yazıyor. Tarihi babanın ölümünden iki hafta öncesi.",
"Zarfı açıyorsun.",
"“Elif Hanım. Sizi aradım, konuşamadım. Yazıyorum, yazmak daha kolay. Babanız masumdu. Biliyorum, çünkü suçlu bendim. Yirmi dört yıldır biliyorum, yirmi dört yıldır susuyorum. Bu mektubu gönderir miyim bilmiyorum. Göndermezsem belki biri bulur, belki kızım. Ben gönderemiyorum. Özür dilerim. Bu kelime yetmez ama başka kelimem yok. Nuri Arslan.”",
"Altına başka bir mürekkeple, sonradan bir satır eklenmiş: “Nesrin, bulduysan, sen karar ver.”",
"Zarfın kapağı yalanmış ama yapıştırılmamış. Baban kapatmaya da karar verememiş."
], secenekler: [
{ t: "Mektubu postaya verirsin, babanın gönderemediğini sen gönderirsin.", to: "z2", etki: function(d){ d.hakikat++; d.mektup_gitti = true; d.elif_bilir = true; } },
{ t: "Mektubu cebine koyarsın, ne yapacağını henüz bilmiyorsun.", to: "z2", etki: { huzur: 1, mektup_cep: true } },
{ t: "Mektubu yırtarsın. Kararı sana bırakmak korkaklıktı ve sen bu korkaklığa ortak olmayacaksın.", to: "z2", etki: { sadakat: 1, mektup_yirtti: true } },
{ t: "Mektubu annene götürürsün.", to: "z2", etki: { hakikat: 1, mektup_anne: true } }
]},

/* ---------- ELİF KOLU ---------- */
e1: { saat: "Ocak 2024", baslik: "İzmit", metin: [
P(S("b6A"), "Defteri naylon bir dosyaya koydun. İzmit yolu bir buçuk saat sürdü. Dosya bütün yol boyunca yan koltukta durdu, bir frende yere düştü, kenara çekip aldın."),
P(S("y2B"), "Defter artık yoktu, elinde yalnızca hatırladıkların vardı. İzmit yolunda cümleleri kafanda sıraya dizdin, sonra hepsini dağıttın."),
P(S("k2B"), "Telefonda “Gerçeği söyleyeceğim,” dedin, “ama yüz yüze.” Ertesi sabah çantanda defterle İzmit yolundaydın."),
P(function(d){ return d.yakti; }, "Defteri yakmıştın, elinde hiçbir şey yoktu, yalnızca hatırladıkların vardı."),
"İzmit'e varıyorsun. Elif Kara depremden sonra yapılmış, beş katlı, sağlam bir binanın üçüncü katında oturuyor. Yol körfezin kıyısından geçiyor, karşıda Gölcük, tersaneler, vinçler, yeni binalar görünüyor.",
"Kapıyı kendisi açıyor ve seni ilk anda tanıyor. “Arslan,” diyor, yüzü bembeyaz. Arkasından bir çocuk sesi geliyor, “Anne kim o?” Elif gözünü senden ayırmadan “Odana git,” diyor.",
"Seni içeri alıyor. Salonun duvarında babasının videolardaki fotoğrafı asılı.",
P(function(d){ return !d.yakti; }, "Masaya oturup defteri çıkarıyorsun. Elif ona dokunmuyor. “Ne bu?” diye soruyor. “Babamın defteri,” diyorsun, “doksan dokuz, ağustos.”"),
P(function(d){ return !d.yakti; }, "Elif defteri alıp okumaya başlıyor, sen de pencereden körfeze bakıyorsun. Bir saat geçiyor. Mutfakta çaydanlık ötüyor ama kimse kalkmıyor, sonunda çaydanlık susuyor. Elif defteri kapatıp iki elini üstüne koyuyor."),
P(function(d){ return d.yakti; }, "Masaya oturup anlatmaya başlıyorsun, çekmeceyi, defteri, 18 Ağustos'u, demirleri, ateşi. Elif bir kere bile sözünü kesmiyor. Bir saat geçiyor. Mutfakta çaydanlık ötüyor ama kimse kalkmıyor."),
"“Yirmi dört yıl,” diyor. “Yirmi dört yıl biri konuşsun diye bekledim. Şimdi biri konuştu ve ben ne hissedeceğimi bilmiyorum.”"
], secenekler: [
{ t: "Babanın adına değil, kendi adına “Özür dilerim,” dersin.", to: "e2", etki: { hakikat: 1, ozur: true } },
{ t: "Ona alan bırakmak için hiçbir şey söylemezsin.", to: "e2", etki: { huzur: 1 } },
{ t: "“Ne istersen yapacağım,” dersin.", to: "e2", etki: { hakikat: 1, soz: true } },
{ t: "Neden söylediğini bilmeden “Babam iyi bir babaydı,” dersin.", to: "e2", etki: { sadakat: 1, iyi_baba: true } }
]},

e2: { saat: "Ocak 2024", baslik: "Elif'in Kararı", metin: [
P(S("e1A"), "Elif sana baktı. “Kendi adına mı? Sen ne yaptın ki?” Sonra durdu. “Sen o evde büyüdün,” dedi, “benim babamın parasıyla alınan evde. Belki doğru, sen de bir şey yaptın. Yaşadın.”"),
P(S("e1B"), "Sustun, Elif de sustu. Sonra Elif ağlamaya başladı, sessizce, sarsıla sarsıla. Sen kıpırdamadın. Odasından çocuk çıkıp kapıda durdu, önce annesine, sonra sana baktı, sonra geri girdi."),
P(S("e1C"), "“Ne istersem mi?” dedi Elif ve kısa, kuru bir kahkaha attı. “Babamı geri getir o zaman.” Sonra özür diledi. “Haksızlık ettim. Bunu bana sen getirdin, çoğu insan getirmezdi.”"),
P(S("e1D"), "Elif'in yüzü kaskatı kesildi. “Benim babam da iyi bir babaydı,” dedi. “Ama yirmi dört yıl boyunca bunu yüksek sesle söyleyebilen yalnızca birimizdi.”"),
P(function(d){ return d.yakti || d.kefaret; }, "Belgesi olmayan bir itirafın mahkemede ne kadar ağırlığı olacağını ikiniz de biliyorsunuz."),
"Elif'in salonunda her şey düzenli, kitaplar alfabetik sıralanmış, raflarda sırtları etiketli dosyalar var. 2000'den 2023'e kadar, bir hayat dolusu dosya. Rafın en ucunda bir çocuk resmi duruyor, el ele tutuşmuş bir adamla bir kız, adamın başında bir şapka.",
"Bir süre sonra Elif kelimelerini tek tek seçerek konuşmaya başlıyor.",
P(function(d){ return !d.yakti; }, "“Babamın adının temizlenmesini istiyorum, mahkemede, herkesin önünde. Bunun için bu defter lazım, bir de senin tanıklığın.” Biraz durdu. “Bu senin babanın adını kirletecek, annenin evini, işini. Biliyor musun?”"),
P(function(d){ return d.yakti; }, "“Babamın adının temizlenmesini istiyorum, mahkemede. Defter yok ama sen varsın, senin tanıklığın lazım.” Biraz durdu. “Bu senin babanın adını kirletecek, annenin evini, işini. Biliyor musun?”"),
"“Biliyorum,” diyorsun.",
"“Kabul ediyor musun?”"
], secenekler: [
{ t: "“Evet, tamamen.”", to: "e3", etki: { hakikat: 2, dava: true } },
{ t: "“Evet, ama annem yaşadığı sürece değil. Bunu ona yaşatamam.”", to: "e3", etki: { sadakat: 1, erteleme: true, dava: true } },
{ t: "“Mahkemede ben konuşacağım. Defteri değil, beni dinlesinler.”", to: "e3", etki: { hakikat: 1, tanik: true, dava: true } },
{ t: "“Karar senin, ne yaparsan karşı çıkmam.”", to: "e3", etki: { huzur: 1, elife_birakti: true } }
]},

e3: { saat: "Şubat 2024", baslik: "İki Kız", metin: [
P(S("e2A"), "“Tamamen,” dedin. Elif başını salladı. Bir süre ikiniz de bunun ne demek olduğunu düşünmeden oturdunuz, sonra düşünmeye başladınız."),
P(S("e2B"), "Elif uzun uzun yüzüne baktı. “Benim annem babamdan iki yıl sonra öldü,” dedi. “Ona bir şey yaşatmamak için kimse beklemedi.” Derin bir nefes aldı. “Peki, beklerim. Yirmi dört yıl bekledim zaten.”"),
P(S("e2C"), "Elif düşündü. “Senin sesin bir kâğıttan fazlası,” dedi. “Mahkeme kâğıdı okur ama bir kızın kendi babası hakkında konuştuğunu duyar.”"),
P(S("e2D"), "“Bana bırakıyorsun,” dedi Elif. “Babam da bu yükü bana bırakmıştı. Biraz da sen taşımayacak mısın?” Haklıydı ama sen yine de kararı ona bıraktın."),
"Bir şubat günü Elif senden bir şey istiyor, annenle tanışmak istiyor.",
"O günden beri telefonda birkaç kere konuştunuz, kısa ve dikkatli konuşmalar. Arkadaş olmadınız. Bir keresinde Elif kızının matematik ödevinden şikâyet etti, sen güldün, o da güldü, sonra ikiniz de sustunuz.",
"Annenin mutfağında üç kadın bir masanın etrafında oturuyorsunuz. Annen çay koyuyor. Elleri titremiyor ama bardakları masaya koyarken her biri biraz fazla ses çıkarıyor.",
"Elif annene uzun uzun bakıyor. “Siz biliyordunuz,” diyor.",
"Annen başını kaldırıyor. “Biliyordum,” diyor, sana söylediği gibi, aynı düz sesle.",
"“Neden konuşmadınız?”",
"Annen bir an sana bakıyor. “Benim de bir kızım vardı,” diyor, “tıpkı senin baban gibi. Ben kendi kızımı seçtim, seni değil.”",
"Elif'in yüzü kıpırdamıyor ama masanın altında elleri yumruk olmuş."
], secenekler: [
{ t: "Elif'in önünde annene “Yanlış seçtin,” dersin.", to: "z1", etki: { hakikat: 1 } },
{ t: "Masanın altında Elif'in elini tutarsın.", to: "z1", etki: { hakikat: 1, elif_el: true } },
{ t: "Annenin yanına geçersin, bu onun da hikâyesi.", to: "z1", etki: { sadakat: 1 } },
{ t: "Bu konuşma senin değil, kalkıp ikisini yalnız bırakırsın.", to: "z1", etki: { huzur: 1, yalniz_birakti: true } }
]},

/* ---------- KAMU KOLU ---------- */
m1: { saat: "Ocak 2024", baslik: "Açıklama", metin: [
"Savcılığa dilekçeyi kendin veriyorsun, ekinde defterin fotokopisi var. Memur zarfı alıp sana bir numara veriyor, 2024/1873. Önünde bir trafik kazası, arkanda bir miras davası sırada bekliyor.",
"Ertesi gün deprem davalarını yıllardır takip eden genç bir gazeteciyle görüşüyorsun. Kahvesine üç şeker atıyor, not defterine hiç bakmadan yazıyor.",
"İki gün sonra haber çıkıyor: “Çınar Apartmanı'nın gerçek sorumlusu: Kızı açıkladı.”",
"Telefonun susmak bilmiyor, akrabalar, meslektaşlar, eski müşteriler. Aslında çoğu aramıyor, arayanlar da tebrik edip hemen kapatıyor. Amcalarından biri tek bir mesaj atıyor: “Babanın kemiklerini sızlattın.”",
"İnternette her yerde yüzün var. Yorumlarda kimi “Cesur kadın” diyor, kimi “Babasının parasıyla mimar oldu, şimdi de kahraman oldu” diyor, kimi “Otuz bir kişi öldü, bu kadının ofisi hâlâ açık mı?” diye soruyor. Biri büronun adresini paylaşmış.",
P(function(d){ return d.ege_bilir; }, "Ege bir mesaj atıyor: “Anne gurur duyuyorum. Ama bugün derse gidemedim.” Bir dakika sonra bir mesaj daha geliyor: “Akşam ne var?”"),
"Akşam haber sitelerinde bir video dolaşıyor. Elif Kara bir kanalın önünde, mikrofonlar yüzüne uzatılmış, ağlıyor. “Yirmi dört yıl,” diyor, “yirmi dört yıl.” Sonra kameraya bakıyor. “O kadına teşekkür ederim. Ama onu affetmem gerekir mi, bilmiyorum. Babası benim babamı öldürdü.”"
], secenekler: [
{ t: "Elif'e ulaşmaya çalışırsın.", to: "m2", etki: { hakikat: 1, elife_ulasti: true } },
{ t: "Bir hafta boyunca bütün telefonları kapatırsın.", to: "m2", etki: { huzur: 1 } },
{ t: "Bir açıklama daha yapıp annenin de bildiğini söylersin.", to: "m2", etki: { hakikat: 2, anne_acikladi: true } },
{ t: "Amcana cevap yazarsın: “Kemikleri zaten sızlıyordu.”", to: "m2", etki: { hakikat: 1 } }
]},

m2: { saat: "Şubat 2024", baslik: "Otuz Bir", metin: [
P(S("m1A"), "Elif telefonu açmadı. Bir hafta sonra bir mesaj geldi: “Şimdi değil. Belki hiç değil. Ama teşekkür ederim.”"),
P(S("m1B"), "Bir hafta boyunca telefon kapalı, perdeler kapalı oturdun. Tarık kapının önüne yemek bıraktı, bir gün tabağın yanına bir de çikolata koymuştu. Sekizinci gün telefonu açtığında yüz yirmi bir cevapsız arama vardı."),
P(S("m1C"), "Annen haberi televizyondan izledi ama seni aramadı. Üç gün sonra bir zarf geldi, içinde annenin el yazısıyla tek bir satır vardı: “Hakkın vardı.” İmza atmamıştı."),
P(S("m1D"), "Amcan cevap vermedi. Aile mezarlığının anahtarı ondaydı. Ertesi hafta kilidi değiştirmiş, yeni anahtarı sana vermemiş."),
"Bir dernek seni Çınar'da ölenlerin aileleriyle bir toplantıya çağırıyor. Gölcük'te, belediyenin bir salonunda yirmi kişi kadar toplanmışlar.",
"Gitmeden önce bütün gece ne giyeceğini düşündün. Siyah giydin, sonra çıkarıp lacivert giydin, sonra yine siyaha döndün.",
"Kapıdan girince herkes susuyor, sana en önde bir sandalye gösteriyorlar. Sandalyenin üstünde bir çay bardağı duruyor, sana mı bırakılmış, birinden mi kalmış, bilemiyorsun.",
"Altmışlarında bir kadın ayağa kalkıyor, adı Nazmiye. Yedi yaşındaki kızı ikinci katta, annesinin kucağındaymış. Kendisi kurtulmuş ama kızı kurtulamamış.",
"“Seni tanımıyorum,” diyor. “Babanı da tanımıyordum. Rahmi Bey'i tanıyordum, yıllarca ona lanet ettim. Şimdi kime lanet edeceğimi bilmiyorum.” Bir süre susuyor. “Ben kimseyi affetmem. Ama sana teşekkür ederim. Bunlar ayrı şeyler.”",
"Arka sıralarda biri ağlıyor, biri kalkıp çıkıyor, kapı arkasından çarpıyor."
], secenekler: [
{ t: "Kalkıp hepsinden kendi ağzınla özür dilersin.", to: "m3", etki: { hakikat: 1, ozur_aileler: true } },
{ t: "Nazmiye Hanım'a kızının adını sorarsın.", to: "m3", etki: { hakikat: 1, kizin_adi: true } },
{ t: "Babanın mirasının tamamını ailelere bırakacağını söylersin.", to: "m3", etki: { hakikat: 1, miras_verdi: true } },
{ t: "Hiçbir şey söylemezsin, dinlemeye geldin.", to: "m3", etki: { huzur: 1 } }
]},

m3: { saat: "Mart 2024", baslik: "Çöküş", metin: [
P(S("m2A"), "Özür diledin. Kelimeleri hazırlamamıştın, yanlış sırayla döküldüler ağzından. Kimse karşılık vermedi. Arkadan bir adam “Otur kızım,” dedi, kızgın değildi."),
P(S("m2B"), "“Zeynep,” dedi Nazmiye Hanım. “Pembe bir elbisesi vardı. Ertesi gün okula başlayacaktı, çantasını kendisi seçmişti, üstünde bir kedi vardı.” Adını söyledi ve oturdu."),
P(S("m2C"), "Salon sustu. Arka sıradan bir adam “Para mı?” dedi. “Para mı istiyoruz sanıyorsun?” Sonra oturdu. Nazmiye Hanım “Ver,” dedi, “ama para için teşekkür etmeyeceğiz.”"),
P(S("m2D"), "Hiçbir şey söylemedin. Toplantının sonunda biri yanına gelip eline bir fotoğraf tutuşturdu, 1997'de çekilmiş bir düğün fotoğrafı. Altı kişi gülümsüyordu ve dördü Çınar'da ölmüştü. Geri vermek istedin ama almadı."),
"Mart başında okul ihalesi iptal ediliyor, gerekçe olarak “kamuoyu hassasiyeti” yazmışlar. İki proje daha askıya alınıyor, iki çalışanın istifa ediyor. Biri istifa mektubuna bir teşekkür notu iliştirmiş.",
"Okul projesi en sevdiğin projendi, üç yüz çocuk için bir ilkokul. Her kolonu üç kere hesaplamış, avlunun ortasına bir çınar ağacı koymuştun. Şimdi o okulu başka bir firma yapacak.",
"Tarık bir akşam mutfakta, önünde hesaplarla oturuyor. “Altı ay,” diyor, “altı ay daha dayanırız, sonra büroyu kapatırız.” Kalemi kulağının arkasına sıkıştırıyor, oysa hiç böyle bir alışkanlığı yoktu.",
P(function(d){ return d.ege_bilir; }, "Ege bir akşam elinde bir kâğıtla geliyor, bursunun iptal edildiğini bildiren bir mektup bu. Vakıf “Arslan” soyadını taşıyan birine artık burs vermek istemiyormuş. Ege kâğıdı masaya bırakıp “Önemli değil,” diyor, buzdolabını açıp içine uzun uzun bakıyor."),
"Gece yatakta yıllardır ilk kez deliksiz uyuyorsun. Sabah uyanınca buna kendin de şaşırıyorsun."
], secenekler: [
{ t: "Tarık'a sarılırsın, bunu birlikte taşıyacaksınız.", to: "z1", etki: { sadakat: 1 } },
{ t: "Babanın adını taşıyan hiçbir şey kalmasın diye büroyu kapatmaya kendin karar verirsin.", to: "z1", etki: { hakikat: 1, buro_kapandi: true } },
{ t: "Ege'ye gidip özür dilersin.", to: "z1", etki: { sadakat: 1, egeye_ozur: true } },
{ t: "Hiçbir şeyden pişman olmadığını yüksek sesle, kendine söylersin.", to: "z1", etki: { hakikat: 1 } }
]},

/* ---------- YAKMA KOLU ---------- */
y1: { saat: "Aralık 2023", baslik: "Ateş", metin: [
"Gece yarısı bahçedeki eski mangalın başındasın. Tarık uyuyor, Ege'nin odasının ışığı sönmüş.",
"Bu mangalda her yaz et pişirirdiniz. Baban mangalın başında durmayı severdi, kömürleri çevirir, herkese tabak dağıtır, kendisi en son yerdi. Mangalın dibinde hâlâ geçen yazdan kalma kül var.",
"Defteri son bir kez açıyor, sayfaları tek tek koparıyorsun, 1993, 1995, 1999.",
"Çakmak ilk denemede yanmıyor, ikincisinde yanıyor. İlk sayfa tutuşup kıvrılıyor, kararıyor, mürekkep bir an parlıyor.",
"18 Ağustos sayfasına geliyorsun. “Demirleri ben eksilttim.” Alev kelimeleri tek tek yiyor, en son “Nesrin” kalıyor, sonra o da gidiyor.",
P(function(d){ return d.yirtti; }, "Yırttığın sayfa hâlâ cüzdanında, ehliyetinin arkasında duruyor. Onu yakmıyorsun."),
P(function(d){ return d.foto; }, "Defteri yakıyorsun ama telefonunda kırk iki fotoğraf duruyor. Defter galerinde yaşıyor ve sen bunu biliyorsun."),
"Son sayfaya geliyorsun, okumaya cesaret edemediğin sayfaya. Alev onu kapmadan önce bir kelime görüyorsun, “kızım.”",
"Sonra geriye kül kalıyor. Komşunun köpeği bir kere havlayıp susuyor."
], secenekler: [
{ t: "Külü babanın diktiği gül fidanının dibine dökersin.", to: "y2", etki: { sadakat: 1 } },
{ t: "Atamıyorsun, külü bir kavanoza koyarsın.", to: "y2", etki: { hakikat: 1, kavanoz: true } },
{ t: function(d){ return d.foto ? "Telefonundaki fotoğrafları da silersin." : "Mangalın kapağını kapatıp içeri girersin."; }, to: "y2", etki: function(d){ d.huzur++; if(d.foto){ d.foto = false; d.foto_sildi = true; } } },
{ t: "Sabaha kadar mangalın başında oturursun.", to: "y2", etki: { hakikat: 1 } }
]},

y2: { saat: "Ocak 2024", baslik: "Mektup", metin: [
P(S("y1A"), "Külü babanın diktiği gül fidanının dibine döktün. Ertesi bahar gül hiç açmadığı kadar açtı."),
P(S("y1B"), "Külü bir reçel kavanozuna koydun, atamadın. Kavanoz şimdi çalışma odasındaki rafta, kitapların arasında duruyor, etiketi hâlâ üstünde, “Vişne, 2022.”"),
P(S("y1C"), "Mangalın kapağını kapatıp içeri girdin. Sabah Tarık mangalı açtı, bir şey sormadan kapağı geri kapattı."),
P(S("y1D"), "Sabaha kadar mangalın başında oturdun, kül soğudu. Gün ağarırken komşu kadın balkona çıkıp sana baktı, sonra içeri girdi."),
"Ocak ayında İzmit postasından elle yazılmış bir mektup geliyor. Gönderen Elif Kara.",
"Zarfı mutfak masasına koyup bir saat açmadan bekliyorsun.",
"“Nesrin Hanım. Babanızın vefatını gazetede okudum. Başınız sağ olsun. Bunu içtenlikle söylüyorum, bir babayı kaybetmenin ne demek olduğunu bilirim.”",
"“Sormaktan utandığım bir şey var. Babanız ölmeden üç ay önce beni aradı. Telefonumu nereden bulduğunu bilmiyorum. ‘Elif Hanım,’ dedi. Sonra uzun bir sessizlik oldu, sonra kapattı.”",
"“Babanız bir şey bırakmış olabilir mi? Bir not, bir mektup, herhangi bir şey? Lütfen dürüst olun. Başka bir şey istemiyorum, yalnızca bilmek istiyorum.”",
P(function(d){ return d.mesaj; }, "Altına bir not daha düşmüş: “Birkaç ay önce bana isimsiz mesaj atan siz miydiniz?”")
], secenekler: [
{ t: "Ona “Hayır, hiçbir şey bırakmadı,” diye yazarsın.", to: "y3", etki: { sadakat: 1, yalan: true } },
{ t: "İzmit'e gidip belge olmadan, yalnızca hatırladıklarınla her şeyi yüzüne söylersin.", to: "e1", etki: { hakikat: 2, elif_bilir: true, anlatti: true } },
{ t: "Mektuba cevap vermezsin.", to: "y3", etki: { huzur: 1, cevapsiz: true } },
{ t: "“Babam sizi aradığında bir şey söylemek istiyordu ama ne olduğunu ben de bilmiyorum,” diye yazarsın.", to: "y3", etki: { yarim_gercek: true } }
]},

y3: { saat: "Şubat 2024", baslik: "Ege", metin: [
P(S("y2A"), "Mektubu yazıp postaladın. Bir hafta sonra cevap geldi: “Teşekkür ederim. Yine de sordum, sormasaydım hep soracaktım.”"),
P(S("y2C"), "Cevap vermedin, Elif de bir daha yazmadı. Mektubu çekmeceye koydun, ne açıp bir daha okudun ne de attın."),
P(S("y2D"), "Yazdığın her kelime doğruydu. Elif'ten cevap geldi: “Demek bir şey söylemek istemiş. Bu bile bir şey. Teşekkür ederim.”"),
"Bir akşam Ege elinde telefonuyla mutfağa geliyor, yüzü bembeyaz.",
"Ege son haftalarda değişti, daha az konuşuyor, daha çok odasında kalıyor. Sen bunu sınavlara vermiştin.",
P(function(d){ return d.foto || d.foto_sildi; }, "“Anne,” diyor, “telefonundaki fotoğraflar buluta yedeklenmiş, aile albümüne düşmüş. Bir defterin sayfaları.” Telefonu sana uzatıyor, ekranda babanın el yazısı var."),
P(function(d){ return !d.foto && !d.foto_sildi; }, "“Anne,” diyor, “geçen ay gece yarısı bahçede ne yaktın? Pencereden gördüm. Sabah mangalda yanmamış bir köşe buldum.” Elinde kenarları kararmış küçük bir kâğıt parçası var, üstünde babanın el yazısıyla üç kelime okunuyor: “Rahmi bilmiyordu. Ben”"),
"“Dedem ne yaptı?” diye soruyor. On dokuz yaşında ve dedesinin kucağında büyüdü."
], secenekler: [
{ t: "Ona her şeyi anlatırsın.", to: "z1", etki: { hakikat: 1, ege_bilir: true } },
{ t: "“Önemli bir şey değil, eski iş kâğıtları,” dersin.", to: "z1", etki: { sadakat: 1, egeye_yalan: true } },
{ t: "Kararı ona bırakıp “Sen ne düşünüyorsun?” diye sorarsın.", to: "z1", etki: { ege_karar: true } },
{ t: "Kâğıdı alıp cüzdanına koyarsın. “Sonra konuşuruz.”", to: "z1", etki: { huzur: 1 } }
]},

/* ---------- KEFARET KOLU ---------- */
k1: { saat: "Ocak 2024", baslik: "İsimsiz Bağış", metin: [
"Feride Hanım'ın tanıdığı bir avukatı aracı olarak buluyorsun. Elif Kara'nın derneğine büyük ve isimsiz bir bağış yapılacak.",
"Feride Hanım planı dinlerken yüzünü buruşturdu. “Para bir şeyi düzeltmez,” dedi, “ama kolaylaştırır. Kimin işini kolaylaştırdığına siz karar verin.” Sonra bir kâğıda bir isimle bir hesap numarası yazıp sana uzattı ama bir süre bırakmadı.",
"İstanbul'dan iyi bir ceza avukatı Rahmi Kara dosyasını “gönüllü olarak” inceleyecek, ücretini sen ödeyeceksin.",
"Defter babanın çekmecesi gibi kilitli bir çekmecede, senin çekmecende duruyor.",
"Senin adın hiçbir yerde geçmeyecek.",
"Bağış dekontu bir e-postayla geliyor, bir rakam, bir tarih, bir onay kodu. Babanın doksan üçte eksilttiği demirlerin parası bugün kaç eder diye hesaplamaya kalkıyorsun, telefonun hesap makinesini açıp kapatıyorsun."
], secenekler: [
{ t: "Her ay düzenli bağış talimatı verirsin.", to: "k2", etki: { sadakat: 1, duzenli: true } },
{ t: "Paranın ona ulaşıp ulaşmadığını görmek için Elif'in videolarını izlemeye devam edersin.", to: "k2", etki: { hakikat: 1 } },
{ t: "Bu kadar, bir daha düşünmeyeceksin.", to: "k2", etki: { huzur: 1 } },
{ t: "Avukata “1993 malzeme faturalarına bakın,” diye bir not iletirsin. Bir ipucu bu, bir itiraf değil.", to: "k2", etki: { hakikat: 1, ipucu: true } }
]},

k2: { saat: "Mart 2024", baslik: "Elif'in Sorusu", metin: [
P(S("k1A"), "Her ay düzenli bağış talimatı verdin. Bankacı formu uzatırken “Hayırlı bir iş,” dedi, sen de başını salladın."),
P(S("k1B"), "Elif'in videolarını izlemeye devam ettin. Birinde derneğin yeni bürosunu gösteriyordu, duvarda otuz bir fotoğraf asılıydı."),
P(S("k1C"), "Bir daha düşünmeyecektin ama ancak üç gün dayanabildin."),
P(S("k1D"), "Avukat ipucunun peşine düştü ve faturalarda bir şey çıktı. İmza Rahmi'nindi ama yazı başkasınındı. Bir el yazısı uzmanı rapor hazırladı."),
"Mart sonunda bir toplantıdasın, müşteriler, maketler arasında. Telefonun titriyor, bilinmeyen bir numara. Normalde açmazsın ama toplantı odasından çıkıp koridorda açıyorsun.",
"“Nesrin Arslan?” Videolardan tanıdığın bir ses bu.",
"“Ben Elif Kara,” diyor. “Bağışın kimden geldiğini buldum. Bankalar konuşmaz ama aracılar bazen konuşur.” Bir süre susuyor. “Size bir soru soracağım, bir kere.”",
"“Neden?”",
"Koridorun sonunda sekreterin eliyle işaret edip seni çağırıyor, sen ona arkanı dönüyorsun."
], secenekler: [
{ t: "“Vicdan,” dersin. “Babam ölmeden önce bir şeyler söylemişti, tam anlamadım.”", to: "k3", etki: { sadakat: 1, yalan: true } },
{ t: "Defteri, her şeyi, gerçeği söylersin.", to: "e1", etki: { hakikat: 2, elif_bilir: true, anlatti: true } },
{ t: "Telefonu kapatırsın.", to: "k3", etki: { huzur: 1, kapatti: true } },
{ t: "Babanın hiç söylemediği bir şeyi ona söyletirsin: “Babam isterdi.”", to: "k3", etki: { sadakat: 1, yalan: true, babam_isterdi: true } }
]},

k3: { saat: "Haziran 2024", baslik: "Yalanın Ağırlığı", metin: [
P(S("k2A"), "“Vicdan,” dedin. Hattın öbür ucunda bir şey tıkırdadı, bir kalem ya da bir yüzük. “Kimin vicdanı?” dedi Elif, “babanızın mı, sizin mi?” Cevap vermeyince kapattı. Bağışlar hesabına yatmaya devam etti, Elif bir daha aramadı."),
P(S("k2C"), "Telefonu kapattın. Elif üç kere daha aradı. Dördüncü gün “Cevabınız bu muydu?” diye bir mesaj geldi, mesajı okunmuş olarak bıraktın."),
P(S("k2D"), "“Babam isterdi,” dedin. Elif'in sesi değişti. “Demek bir şey söyledi,” dedi, “demek söyledi.” Oysa baban öyle bir şey hiç söylememişti. Telefonu kapattıktan sonra bir süre koridordaki yangın tüpüne baktın."),
"Haziranda bir haber çıkıyor. Rahmi Kara dosyası için yargılamanın yenilenmesi talebi “yeni ve kesin delil sunulmamıştır” gerekçesiyle reddedilmiş.",
"Haberi sabah kahvaltıda telefondan okuyorsun, üç paragraf, altında bir dizi oyuncusunun boşanma haberi var. Karşında yumurtasını tuzlayan Tarık “Ne oldu?” diye soruyor, “Hiç,” diyorsun.",
P(function(d){ return d.ipucu; }, "El yazısı raporu yetmemiş, mahkemenin uzmanı başka bir şey söylemiş. Kesin delil istiyorlar. Kesin delil ise senin çekmecende duruyor, kahverengi kapaklı, köşesi kıvrık."),
"Elif'in yeni bir videosu var. Bu sefer kameraya bakmıyor, arkada bir mutfak, ocakta bir tencere görünüyor. “Biri konuşur sanmıştım,” diyor, “konuşmayacaklar galiba. Ben de yoruldum açıkçası.” Kızı kadraja girip bir şey soruyor ve Elif videoyu orada kesiyor.",
"Videoyu üç kere izliyorsun, üçüncüsünde kızın ne sorduğunu duyuyorsun: “Anne makarna mı?”"
], secenekler: [
{ t: "Yalnızca bakmak için çekmeceyi açıp defteri çıkarırsın.", to: "z1", etki: { hakikat: 1 } },
{ t: "Bağışı ikiye katlarsın.", to: "z1", etki: { sadakat: 1 } },
{ t: "Elif'e uzun bir mektup yazarsın ama göndermezsin.", to: "z1", etki: { hakikat: 1, gonderilmeyen: true } },
{ t: "Videoyu kapatırsın ve bir daha açmazsın.", to: "z1", etki: { huzur: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
z1: { saat: "Haziran 2024", baslik: "Mevlit", metin: [
P(S("e3A"), "Elif'in önünde annene “Yanlış seçtin,” dedin. Annen bardağını tabağına öyle bir koydu ki çay taştı ama kimse silmedi. Elif'in masanın altındaki yumrukları açıldı."),
P(S("e3B"), "Masanın altında Elif'in elini tuttun. Önce çekmek istedi, sonra bıraktı. Annen fark etmedi, ya da fark edip çay doldurmaya devam etti."),
P(S("e3C"), "Annenin yanına geçtin. Elif sana öyle bir baktı ki midene bir şey oturdu. Sonra omuz silkti. “Ben de herhalde annemin yanına geçerdim,” dedi."),
P(S("e3D"), "Balkona çıkıp bir saat bekledin, komşunun çamaşırları rüzgârda şaklıyordu. İçeri döndüğünde masada boşalmış tek bir mendil paketi duruyordu."),
P(S("m3A"), "Tarık'a sarıldın. “Birlikte,” dedi ama o gece yine de sırtını dönüp uyudu. Sabah kahveni o yaptı."),
P(S("m3B"), "Büroyu kapattın. Tabelayı indiren usta bir harfi düşürdü, A kaldırımda ikiye ayrıldı. Ustaya fazladan para verdin, neden verdiğini o da sormadı."),
P(S("m3C"), "Ege'ye gidip özür diledin, omuz silkti. “Okulda biri dedemin katil olduğunu söyledi,” dedi. “Evet dedim, ama annem değil dedim. Sonra kantinde tost yedik.”"),
P(S("m3D"), "Boş büroda kendine “Pişman değilim,” dedin. Klima kendi kendine çalıştı, sonra durdu."),
P(S("y3A"), "Ege'ye her şeyi anlattın. Sonuna kadar dinledi, bir kere bile telefonuna bakmadı. “Sen yaktın yani,” dedi. “Evet.” Kalkıp bir bardak su içti. “Tamam. Artık ikimiz biliyoruz.”"),
P(S("y3B"), "“Eski iş kâğıtları,” dedin. Ege kâğıdı uzattı. Kâğıdı bırakırken parmaklarının ne kadar yavaş açıldığından sana inanmadığını anladın. Annen de sana tam böyle bir şey yapmıştı."),
P(S("y3C"), "“Sen ne düşünüyorsun?” diye sordun. Ege kâğıda uzun uzun baktı. “Bence bunu bir yere yazmak lazım,” dedi. “Dedem yazmış, biz de yazalım.”"),
P(S("y3D"), "Kâğıdı cüzdanına koyup “Sonra konuşuruz,” dedin. Ege odasına gitti ve konuşmadınız."),
P(S("k3A"), "Defteri çıkarıp yalnızca baktın. Defter kendi kendine 18 Ağustos'ta açıldı, cildi oraya alışmıştı."),
P(S("k3B"), "Bağışı ikiye katladın. Dekont gelince rakamın sonundaki sıfırları iki kere saydın."),
P(S("k3C"), "Elif'e dört sayfa yazdın. Zarfa koyup defterin yanına, çekmeceye bıraktın. Artık o çekmecede gönderilmemiş iki mektup vardı, birini baban yazmıştı."),
P(S("k3D"), "Videoyu kapattın. O akşam makarna yaptın, tencereyi ocaktan alırken aklına kızın sesi geldi."),
"Babanın ölümünün üstünden sekiz ay geçti. Akrabalar annenin evinde bir mevlit düzenlemiş.",
"Mutfak helva kokuyor, kapının önünde ayakkabılar üst üste yığılmış, birinin terliği topuğuna takılıyor. Kadınlar başörtülerini düzeltiyor, erkekler salonun kenarında kollarını kavuşturmuş ayakta duruyor. Seyfi amcan kapıda mevlit şekeri dağıtıyor.",
P(function(d){ return d.kamu; }, "Yüz kişi bekleniyordu ama yirmi kişi gelmiş, haberden sonra çoğu aramadı bile. Gelenler sana bakmıyor, annene bakıp sonra gözlerini halıya indiriyor."),
P(function(d){ return !d.kamu; }, "Herkes gelmiş, eski çalışanlar, belediyeden birileri, babanın mühendis arkadaşları. Hepsi sana sarılıp “Ne dürüst adamdı,” diyor, biri bunu iki kere söylüyor."),
"Babanın teyzesinin oğlu Yaşar kalkıp konuşuyor. İlk şantiyeyi anlatıyor, babanın ayakkabısının çamura gömüldüğünü, eve tek ayakkabıyla döndüğünü anlatıyor. Salon gülüyor.",
P(function(d){ return !d.kamu; }, "Sonra “Nuri bir kere bile bir çivi eksik çakmadı,” diyor. “Bunu bu salonda herkes bilir.” Başlar sallanıyor, annen gözlerini kapatıyor."),
P(function(d){ return d.kamu; }, "Sonra “Nuri hata yaptı,” diyor, “büyük bir hata yaptı. Kızı da doğruyu söyledi.” Bir süre bir şey diyemeyip öksürüyor. “Ama ben onu yine de severim, kimse kusura bakmasın.”"),
"Hoca duaya başlıyor. Annen ön sırada oturuyor. Senin yanındaki bir çocuk şeker paketini sessizce açmaya çalışıyor ama beceremiyor."
], secenekler: [
{ t: "Kalkıp ağzından ne çıkarsa bir şey söylersin.", to: "bd_amca", etki: { hakikat: 1, mevlitte_konustu: true } },
{ t: "Dua bitene kadar oturursun, burası mahkeme değil.", to: "z2", etki: { sadakat: 1 } },
{ t: "Sessizce kalkıp babanın çalışma odasına gidersin.", to: "bd_mektup", etki: { huzur: 1, odaya: true } },
{ t: "Annenin yanına geçip elini tutarsın.", to: "z2", etki: { sadakat: 1, anne_yaninda: true } }
]},

z2: { saat: "Haziran 2024", baslik: "Annenin Sırrı", metin: [
P(S("bd_amcaA"), "Seyfi amca şeker paketini cebine koydu. “Gelirim,” dedi, “otuz yıl geç ama gelirim.” Sonra “Arabam yok ama,” diye ekledi, “beni sen alırsın.”"),
P(S("bd_amcaB"), "Amcana sarıldın. Yetmiş üç yaşında bir adam omzunda hıçkıra hıçkıra ağladı. Kardeşinin cenazesinde gözü bile yaşarmamıştı. Ceketi naftalin kokuyordu."),
P(S("bd_amcaC"), "“Çünkü sen söyledin,” dedi amcan. “Sen söyleyince benim de ağzım açıldı. Herkes susarken susmak kolay.”"),
P(S("bd_amcaD"), "“Söylemem,” dedi amcan. “Otuz yıl sustum, otuz yıl daha susarım.” Bunu babanın sesiyle söyledi, ikisinin sesi hiç bu kadar benzememişti."),
P(S("bd_mektupA"), "Postanede memur zarfa damgayı vurup “Taahhütlü mü?” diye sordu. “Hayır,” dedin, sonra “Evet,” dedin. Üç gün sonra telefonun çaldı, alan kodu 262'ydi."),
P(S("bd_mektupB"), "Mektup cebindeydi. Mutfağa girerken elini cebine soktun, kâğıdın kenarı parmağını kesti. Kanı peçeteyle sildin, annen “Ne oldu?” diye sordu, “Kâğıt,” dedin."),
P(S("bd_mektupC"), "Mektubu yırttın ama parçaları çöpe değil, cebine attın. Sonra mutfakta kimse bakmazken parçaları bir araya getirip imzanın olduğu köşeyi aradın."),
P(S("bd_mektupD"), "Annen mektubu okudu, gözlüğünü çıkarıp masaya koydu. “Bunu yazdığını bilmiyordum,” dedi. “Gece kal, anlatacaklarım var.”"),
P(S("z1A"), "Kalktın, salon sustu, hoca bile sustu. Ağzından yalnızca “Babam bir insandı,” çıktı ve oturdun. Arkada biri öksürdü, hoca kaldığı yerden devam etti."),
P(S("z1B"), "Dua bitti. Kapıda tanımadığın bir kadın kolunu tuttu. “Baban bir kere benim kiramı ödemişti,” dedi, “kimseye söyleme demişti.” Şekerini alıp gitti."),
P(S("z1C"), "Çalışma odası bomboştu, raflar boşaltılmış, masanın üstünde yalnızca babanın gözlük kılıfı kalmıştı. Babanın sandalyesine oturdun. Minder onun şeklini almıştı, sana uymadı."),
P(S("z1D"), "Annenin eli buz gibiydi ve dua boyunca elini bırakmadı. Sonunda kulağına eğilip “Gece kal,” dedi, “anlatacaklarım var.”"),
"Gece oldu. Misafirler gitmiş, bulaşık makinesi çalışıyor. Annen saçını açmış, bembeyaz saçları beline kadar iniyor. Saçının bu kadar uzun olduğunu bilmiyordun, yıllardır topuz yapıyordu.",
"İki bardak çay koymuş, kendi bardağını tabağında dört kere, beş kere çeviriyor.",
"“Baban o gece bana anlattığında sabah savcılığa gidecekti,” diyor. “Kararını vermişti, bana gömleğini ütületmişti.”",
"“Ben vazgeçirdim. ‘Nesrin'i düşün,’ dedim. ‘Kızın babası hapiste diye mi büyüsün? Rahmi'nin kızı zaten babasız kaldı, bir de seninki mi kalsın?’ Sabaha kadar konuştuk. Ezan okununca ağladı ve ‘Peki,’ dedi.”",
"Çayından bir yudum alıyor, soğumuş, yüzünü buruşturuyor.",
"“Defteri de ona ben aldım, kırtasiyeden. Konuşacağına yazsın diye.”"
], secenekler: [
{ t: "“Neden şimdi söylüyorsun?” dersin.", to: "z3", etki: { hakikat: 1 } },
{ t: "Hiçbir şey söylemezsin, bırakırsın çayın soğusun.", to: "z3", etki: { huzur: 1 } },
{ t: "“Anlıyorum,” dersin ve anladığın için korkarsın.", to: "z3", etki: { sadakat: 1, anladi: true } },
{ t: "Ağzından kaçar: “Babamı sen mi öldürdün?”", to: "z3", etki: { hakikat: 1, sert: true } }
]},

z3: { saat: "Temmuz 2024", baslik: "Çınar Parkı", metin: [
P(S("z2A"), "“Çünkü sen kendi kararını verdin,” dedi annen. “Benim gibi olup olmadığını görmek istedim.” Bardağı bıraktı. “Hâlâ bilmiyorum.”"),
P(S("z2B"), "Sen sustun, annen de sustu. Saat ikiye doğru kalktı, yanından geçerken küçükken yaptığı gibi saçını okşadı. “Yat artık,” dedi. Yatmadın, balkonda annenin sakladığı sigara paketini buldun."),
P(S("z2C"), "“Anlıyorsun,” dedi annen ve yüzünde rahatlamaya benzer bir şey belirdi. Bu seni her şeyden çok korkuttu."),
P(S("z2D"), "Annen sana uzun uzun baktı. “Doktor kalp dedi,” dedi. “Ben de kalp diyorum. Ama hangi kalp olduğunu ben biliyorum.” Bunu söylerken sesi titremedi bile."),
"Temmuzda Gölcük'e gidiyorsun.",
"Arabayı park edip motoru kapatıyorsun ama inmiyorsun. Radyoda bir şarkı bitiyor, reklam başlıyor, bir şarkı daha çalıyor, sonra iniyorsun. Mahalle baştan aşağı yenilenmiş, yollar, binalar, ağaçlar yeni. Yalnızca sokak tabelası aynı, Çınar Sokak.",
"Apartmanın yerinde küçük bir park var, üç bank, ayakları beyaza badanalanmış birkaç çınar fidanı. Ortada üstünde otuz bir isim yazılı mermer bir taş duruyor.",
"İsimleri okuyorsun. Dördü birden ölmüş bir aile, Yılmazlar. Yaşlı bir çift. Yirmi yaşında bir öğrenci. Yedi yaşında Zeynep Yılmaz. Zeynep'in adının yanına biri pembe, plastik, güneşten solmuş bir toka bırakmış.",
"En altta, ayrı bir satırda, daha yeni harflerle bir isim daha var: “Rahmi Kara (1951–2004).”",
P(function(d){ return !d.kamu && !d.dava; }, "Bu satırı kimin ekletti, bilmiyorsun, Elif mi, dernek mi? O adın orada neden durduğunu bilen kaç kişi var dünyada diye saymaya kalkıyorsun, beşe varmıyor."),
P(function(d){ return d.kamu || d.dava; }, "Bu satır haberlerden sonra, senin dilekçenden sonra eklenmiş, mermerin rengi bile biraz farklı."),
"Bankta yaşlı bir kadın oturmuş, poşetten ekmek ufalayıp güvercinlere atıyor. Bir güvercin ayakkabına kadar geliyor."
], secenekler: [
{ t: "Taşın önüne çömelip bütün isimleri yüksek sesle okursun.", to: "z4", etki: { hakikat: 1, okudu: true } },
{ t: "Yaşlı kadının yanına oturursun.", to: "z4", etki: { sadakat: 1, kadin: true } },
{ t: "Taşın dibine bir çınar yaprağı bırakırsın.", to: "z4", etki: { huzur: 1 } },
{ t: "Elini Rahmi Kara'nın adının üstüne koyarsın.", to: "z4", etki: { hakikat: 1, rahmi_el: true } }
]},

z4: { saat: "Temmuz 2024", baslik: "Son Sayfa", metin: [
P(S("z3A"), "İsimleri okudun. Zeynep'e gelince sesin çatladı ama devam ettin. Sonuncusu Rahmi Kara'ydı, onu neden olduğunu bilmeden fısıltıyla okudun."),
P(S("z3C"), "Taşın dibine bir yaprak bıraktın. Rüzgâr onu alıp güvercinlerin arasına attı, gidip almadın."),
P(S("z3B"), "Kadın ekmeğin yarısını sana uzattı. “Her gün buradayım,” dedi. “Burada kimsem yoktu ama biri otursun diye oturuyorum.” Ekmeği ufaladın, güvercinler ikinizi birbirinden ayırt etmedi."),
P(S("z3D"), "Taş temmuz güneşinde ısınmıştı. Parmaklarının altında harflerin oyuklarını hissettin. R'nin kuyruğunda biraz toz birikmişti, başparmağınla sildin."),
P(function(d){ return !d.yakti; }, "Akşam otelde defteri açıyorsun. Aylardır son sayfaya gelince defteri kapatıyordun. Tarih babanın ölümünden üç hafta öncesi, yazı her zamankinden eğri."),
P(function(d){ return d.yakti; }, "Akşam otelde son sayfayı hatırlamaya çalışıyorsun. Alevden önce yalnızca bir kelime görmüştün, “kızım.” Otelin not kâğıdını ve kalemini alıyorsun, kalem birkaç kere çizdikten sonra yazmaya başlıyor."),
P(function(d){ return !d.yakti; }, "“Nesrin, kızım. Bunu okuyorsan ben yokum, sen de çekmeceyi açtın demektir. Annen açmazdı ama sen açarsın, biliyorum. Küçükken de hediyelerini bayramdan önce bulurdun.”"),
P(function(d){ return !d.yakti; }, "“Ne yapacağına sen karar ver, ben veremedim. Yirmi dört yıl her sabah ‘bugün’ dedim, her akşam ‘yarın’ dedim. Rahmi'nin kızını aradım, sesini duyunca kapattım. Göğsümde bir ağırlık var, doktor tansiyon diyor.”"),
P(function(d){ return !d.yakti; }, "“Senin odanın penceresinden kestaneyi görürdüm. O ağacı sen doğduğun yıl ben dikmiştim. Hep onu sulamam gerektiğini düşünürdüm ama kendi kendine büyüdü. Sen de öyle.”"),
P(function(d){ return !d.yakti; }, "Sayfanın altında bir şey daha yazmaya başlamış, sonra karalamış. Altından yalnızca “affet” okunuyor, önünde “beni” mi var “onu” mu, seçemiyorsun."),
"Kalem elinde, otel odasının kliması tıkırdıyor."
], secenekler: [
{ t: "Babanı affedersin.", to: "bs", etki: { affetti: true, sadakat: 1 } },
{ t: "Affetmezsin, bu senin affedebileceğin bir şey değil.", to: "bs", etki: { affetmedi: true, hakikat: 1 } },
{ t: "Bir satıra “affediyorum”, altına “affetmiyorum” yazarsın ve hiçbirinin üstünü çizemezsin.", to: "bs", etki: { ikisi: true } },
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
P(S("z4C"), "Defterin son sayfasına alt alta iki satır yazmıştın, “affediyorum” ve “affetmiyorum.” Hangisinin üstünü çizeceğine hâlâ karar vermedin."),
P(function(d){ return d.kamu; }, "Bir yıl sonra mahkeme yargılamanın yenilenmesine karar verdi ve Rahmi Kara'nın mahkûmiyeti ölümünden yirmi yıl sonra kaldırıldı. Elif salonda babasının fotoğrafını göğsüne bastırıp oturdu, kalkamadı, avukatı koluna girdi."),
P(function(d){ return d.dava && !d.erteleme; }, "Dava bir buçuk yıl sürdü, defter, senin ifaden, Elif'in yirmi dört yıllık dosyaları. Karar okunduğunda Elif dönüp sana o kadar sıkı sarıldı ki küpen kulağını çizdi. Akşam aynada gördün, bir hafta geçmedi."),
P(function(d){ return d.erteleme; }, "Annen ertesi bahar öldü. Cenazeden bir hafta sonra Elif'i arayıp “Şimdi,” dedin. Dava bir yıl sürdü, mahkûmiyet kaldırıldı. Kararın fotokopisini annenin mezarına götürdün, rüzgâr uçurmasın diye üstüne bir taş koydun, sonra geri aldın."),
"Artık babanın adı geçince insanlar bir an duraksıyor, eczanede, bankada. Soyadını kimliğinden okuyan genç bir memur gözlerini kaldırıp sana bakıyor, sonra hiçbir şey olmamış gibi kaşesini basıyor.",
P(function(d){ return d.buro_kapandi; }, "Büro kapandı, belediyede deprem denetiminde çalışıyorsun. Maaşın yarı yarıya düştü. Her raporu iki kere okuyorsun. Mesai arkadaşların buna gülüyor, sen de gülüyorsun ama yine de üçüncü kez açıp bakıyorsun."),
P(function(d){ return !d.buro_kapandi; }, "Büro küçüldü. Kapıdaki tabelada artık yalnızca senin adın yazıyor, Nesrin Mimarlık. Bazı müşteriler gitti. Biri geldi, “Sizi haberden buldum,” dedi, bir okul yaptırıyormuş."),
"Zeynep Yılmaz hâlâ yedi yaşında. Rahmi Bey cezaevinde ölmüş bir adam olarak kaldı, baban da yirmi dört yıl susmuş bir adam olarak.",
"Elif bir gün kararın aslını çerçeveletip salonuna, babasının fotoğrafının yanına astı ve sana fotoğrafını attı. Altına bir şey yazmamıştı, sen de bir şey yazmadın. Yalnızca bir kalp gönderdin, sonra silmek istedin ama silmedin.",
P(function(d){ return d.affetti; }, "Babanı affettin ama bunu ancak her şeyi söyledikten sonra yapabildin."),
P(function(d){ return d.affetmedi; }, "Babanı affetmedin. Ama Ege sorduğunda ona babanın çamura gömülen ayakkabısını da anlattın, demirleri de.")
]},

son_iki_kiz: { son: true, baslik: "İki Kız", metin: [
P(S("z4C"), "Defterin son sayfasına alt alta iki satır yazmıştın, “affediyorum” ve “affetmiyorum.” Hangisinin üstünü çizeceğine hâlâ karar vermedin."),
"Mahkemeye gidilmedi, Elif öyle istedi.",
"Bir gün telefonda “Bilmek istiyordum,” dedi. “Artık biliyorum. Mahkeme bana bundan fazlasını vermez ama senin oğluna çok şey yapar. Babam olsa ‘Bırak kızım’ derdi. Zaten hep ‘Bırak kızım’ derdi, sinir olurdum.”",
"Seni affetmedi ama seni korudu. Bunun altında ezilip ezilmediğini her sabah yeniden düşünüyorsun.",
P(function(d){ return d.elif_el; }, "Ayda bir İzmit sahilinde bir çay bahçesinde buluşuyorsunuz, garson artık sormadan iki çay getiriyor. Elif sana Rahmi Bey'in kahkahasının mahalleden duyulduğunu anlatıyor, sen ona babanın mangalda herkese tabak dağıtıp kendisinin en son yediğini."),
P(function(d){ return !d.elif_el; }, "Her yıl 17 Ağustos'ta Çınar Parkı'nda karşılaşıyorsunuz ama konuşmuyorsunuz, taşın önünde yan yana bir saat duruyorsunuz. Geçen yıl Elif'in kızı da gelmişti, sana bir sakız uzattı."),
"Gerçek ikinizin arasında kaldı. Ege bilmiyor, Elif'in kızı bilmiyor. Bir gün biri soracak ve ikiniz de daha cevabı hazırlamadınız.",
"Elif bir gün sana Rahmi Bey'in cezaevinden yazdığı son mektubu gösterdi, çizgili bir defter kâğıdına mavi tükenmezle yazılmış. Son satırında “Kızım, ödevlerini yap, annene yardım et. Kimseye kin tutma, kin insanı yer,” diyordu. Altına bir güneş çizmişti. Elif, babasının ona yedi yaşındayken çizdiği güneşin aynısı olduğunu söyledi."
]},

son_kefaret: { son: true, baslik: "Her Ayın Biri", metin: [
P(S("z4C"), "Defterin son sayfasına alt alta iki satır yazmıştın, “affediyorum” ve “affetmiyorum.” Hangisinin üstünü çizeceğine hâlâ karar vermedin."),
"Bağış her ayın birinde gidiyor. Elif'in derneği büyüdü, önce bir oda oldu, sonra iki oda. Bir avukatı, bir psikoloğu, raf raf dosyası var. Artık başka depremlerin aileleri de geliyor.",
"Elif bir ödül aldı ve konuşmasında “adını bilmediğim bir dosta” teşekkür etti. Sen en arka sıradaydın. Alkışlarken bileziğin sandalyeye çarptı, öndeki kadın dönüp baktı.",
"Rahmi Bey'in adı temizlenmedi, delil yetersiz bulundu. Delil ise senin çekmecende duruyor.",
P(function(d){ return d.babam_isterdi; }, "Elif o konuşmada bir şey daha söyledi: “Suçlu bile sonunda pişman olmuş.” Salon alkışladı. Baban öyle bir şey hiç söylememişti, onu ona sen söyletmiştin. O akşam eve dönerken arabada radyonun sesini sonuna kadar açtın."),
"Bazı geceler defteri çekmeceden çıkarıyorsun ama açmıyorsun. Köşesi kıvrık kapağına bakıp geri koyuyor, kilitliyorsun. Anahtarı ayakkabılıktaki tabakta tutuyorsun, Tarık oradaki anahtarın neyin anahtarı olduğunu hiç sormadı.",
"Bir gün anahtarı Ege'ye bırakacaksın. Yanına bir not yazmayı düşünüyorsun, taslağına üç kere başladın. Üçü de “Oğlum,” diye başlıyor ve orada bitiyor.",
"Baban hiçbir şey vermedi, sen her ay veriyorsun. Ayın birinde banka bildirimi gelince telefonu ters çeviriyorsun."
]},

son_kul: { son: true, baslik: "Kül", metin: [
P(S("z4C"), "Defterin son sayfasına alt alta iki satır yazmıştın, “affediyorum” ve “affetmiyorum.” Hangisinin üstünü çizeceğine hâlâ karar vermedin."),
"Defter artık yok. Külü bir kavanozda, ya da gül fidanının dibinde, ya da bir rüzgârın içinde.",
"Elif hâlâ bekliyor. Videoları seyrekleşti. Sonuncusunda saçının ortasında beyaz bir tutam vardı, boyatmamıştı.",
P(function(d){ return d.ege_bilir; }, "Ege bir gün mutfakta “Neden yaktın?” diye sordu. “Seni korumak için,” dedin. Buzdolabının kapağı elinde, bir süre içeri baktı. “Dedem de anneannemi korumak için mi sustu?” Cevap vermedin. Ege bir yoğurt alıp kapağı kapattı."),
P(function(d){ return d.egeye_yalan; }, "Ege'ye yalan söylemiştin. Kâğıt parçasını cüzdanına koyduğunu sanıyordun ama Ege ondan önce telefonuyla fotoğrafını çekmişti. Bir gün, belki sen öldükten sonra, o fotoğrafı bulacak."),
"Babanın gülü bu bahar çok açtı. Tarık “Gübreden,” dedi, sen bir şey demedin. Bir dal kesip mutfağa koydun. Üç gün sonra yaprakları masaya döküldü, toplamaya kıyamadın, bir hafta öyle kaldı.",
"Bazı geceler uyumadan önce o sayfaları kafanın içinde okuyorsun. 18 Ağustos. “Demirleri ben eksilttim.” Hatırladığın cümleler her seferinde birazcık değişiyor, hangisinin gerçekten yazılı olduğunu artık bilmiyorsun.",
"Annenin cenazesinde Elif'i gördün, kalabalığın en arkasında, siyah bir yağmurlukla duruyordu. Başıyla selam verdi. Bir şey biliyor muydu? Gidip sormadın. Arabana binene kadar bakışlarını sırtında hissettin, ya da hissettiğini sandın."
]},

son_babasinin: { son: true, baslik: "Babasının Kızı", metin: [
P(S("z4C"), "Defterin son sayfasına alt alta iki satır yazmıştın, “affediyorum” ve “affetmiyorum.” Hangisinin üstünü çizeceğine hâlâ karar vermedin."),
"Okul projesi bitti. Açılışta kurdeleyi sen kestin, makas körmüş, iki kere denemek zorunda kaldın, çocuklar güldü. Bina sağlam, her demirini kendin kontrol ettin, üç kere.",
"Defter bir yerde duruyor ve sen ne olduğunu biliyorsun. Bilmek, hiçbir şey yapmamana engel olmadı. Babana da olmamıştı.",
"Elif'in videolarına bakmıyorsun. Bir akşam önerilenlerde karşına çıktı, küçük resimde Elif ağzını açmış, bir şey söylerken donmuştu. Telefonu kapatıp yüzüstü koydun.",
"Yaşar amcanın mevlitte söylediği cümle bazen aklına geliyor: “Bir kere bile bir çivi eksik çakmadı.” Kimse düzeltmedi, sen de düzeltmedin.",
P(function(d){ return d.affetti; }, "Babanı affettin. Bazı günler, onu affettiğin için onun gibi olmanın kolaylaştığını düşünüyorsun, sonra bu düşünceyi bir kenara koyuyorsun."),
P(function(d){ return d.kendi_not; }, "Defterin son sayfasının arkasına Ege için bir not yazdın: “Oğlum, ben de dedemin yaptığını yaptım. Sen yapma.” Yazdıktan sonra okudun, yanlış yazmıştın, “dedemin” değil “dedenin” olacaktı. Düzeltmedin."),
"Bir gece Ege'yi uyurken izliyorsun. Yirmi yaşında, ertesi gün sınavı var. Masasında enerji içeceği kutuları duruyor, ayağı yorganın dışında kalmış.",
"Baban da seni böyle izlermiş, annen anlatmıştı, kestane ağaçlı odanın kapısında, ışığı yakmadan.",
"Yorganı ayağının üstüne çekiyorsun. Ege uykusunda bir şey mırıldanıp dönüyor."
]}

},

ayna: function(d){
  var out = [];
  var h = d.hakikat, s = d.sadakat, z = d.huzur;
  if(h >= s && h >= z) out.push("Defteri saklamadın, ortaya koydun. Bedelini büron, oğlun, annen de ödedi.");
  else if(s >= z) out.push("Çoğu yol ayrımında aileni korudun. Baban da aynı gerekçeye sığınmıştı.");
  else out.push("Çoğu yol ayrımında kapıyı kapattın, telefonu susturdun. Elif o sırada bekliyordu.");
  if(d.yirtti) out.push("Defterden bir sayfa yırtıp cüzdanında taşıdın.");
  if(d.yalan) out.push("Elif'e en az bir kere yalan söyledin.");
  if(d.anladi) out.push("Annene onu anladığını söyledin.");
  if(d.ege_bilir) out.push("Ege'ye her şeyi anlattın.");
  if(d.egeye_yalan) out.push("Ege'ye yalan söyledin ama o kâğıdın fotoğrafını çoktan çekmişti.");
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
