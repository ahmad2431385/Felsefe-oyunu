(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "babamin-defteri",
baslik: "Babamın Defteri",
dunya: "Gerçek dünya",
kavramlar: ["Hakikat ve huzur", "Kuşaklar arası suç", "Kendini kandırma", "Affetme"],
ozet: "Babanın cenazesinden bir hafta sonra kilitli bir çekmecede bir defter buluyorsun. 1999 depreminde yıkılan bir binanın gerçek hikâyesi orada yazıyor. Yirmi dört yıldır başka bir adam suçlu biliniyor.",
baslangic: "b1",
durum: { hakikat: 0, sadakat: 0, huzur: 0 },

sahneler: {

b1: { saat: "Ekim 2023", baslik: "Çalışma Odası", metin: [
"Babanı yedi gün önce gömdün. Nuri Arslan, yetmiş dokuz yaşında, kalp. Cenazede belediye başkanı konuştu, eski çalışanları ağladı, gazetede yarım sayfa bir ilan çıktı: “Kentimize değer katan dürüst bir inşaat mühendisi.”",
"Adın Nesrin, kırk dört yaşındasın, mimarsın. Kendi büronun kapısında da aynı soyadı yazıyor: Arslan Mimarlık. Babanın adı, yıllar boyunca, seninkinin önünü açtı. Bunu hiç inkâr etmedin; ama hiç de yüksek sesle söylemedin.",
"Bugün annen Sevim Hanım seni babanın çalışma odasını toplamaya çağırdı. Kitaplar, ödüller, eski projeler, cetveller. Odada tütün ve kâğıt kokusu.",
"Masanın en alt çekmecesi kilitli. Babanın anahtarlığında, ev anahtarlarının arasında, küçük, pirinç bir anahtar.",
"Çekmecede tek bir şey var: kahverengi deri kaplı, köşeleri yıpranmış bir defter. Kapağında yalnızca bir yıl: 1993.",
"Babanın el yazısını tanıyorsun; düzgün, eğik, mühendis yazısı. Defteri elinde tartıyorsun. Ağır değil. Ama bir şey söylüyor: kilitlenmiş şeyler, bir sebeple kilitlenmiştir."
], secenekler: [
{ t: "Defteri hemen, orada, babanın sandalyesinde açarsın.", to: "b2", etki: { hakikat: 1 } },
{ t: "Defteri çantana koyup eve götürürsün. Yalnız okumak istiyorsun.", to: "b2", etki: { huzur: 1, eve: true } },
{ t: "Defteri annene gösterirsin: “Bunu biliyor muydun?”", to: "b2", etki: { sadakat: 1, anneye_gosterdi: true } },
{ t: "Çekmeceyi yeniden kilitler, anahtarı cebine koyarsın. Bazı kapılar kapalı kalmalı.", to: "b2", etki: { huzur: 1, sadakat: 1, kilitledi: true } }
]},

b2: { saat: "Ekim 2023", baslik: "18 Ağustos 1999", metin: [
P(S("b1B"), "Gece, kendi evinde, mutfak masasında açtın defteri. Tarık uyuyordu. Ege odasındaydı, kulaklık takılı. Ev sessizdi; bu sessizlik birazdan başka bir şeye dönüşecekti."),
P(S("b1C"), "Annen defteri görünce yüzü değişti. Bir an. Sonra toparlandı. “Babanın notları,” dedi. “Hep bir şeyler yazardı. Al, oku istersen. Ben okumadım.” Sesi bir cümle fazla sakindi."),
P(S("b1D"), "Çekmeceyi kilitledin. Üç gece uyuyamadın. Dördüncü gece annenin evine gidip anahtarı yeniden çevirdin. Kapalı kapılar, kapalı tutulmaya çalışıldıkça daha çok ses çıkarıyor."),
"Defterin çoğu teknik notlar: hesaplar, malzeme listeleri, şantiye tarihleri. 1993: “Gölcük, Çınar Apartmanı. Yedi kat, yirmi sekiz daire. Ortak: Rahmi Kara.”",
"Sonra 1999. 18 Ağustos. Depremden bir gün sonra. El yazısı farklı; titrek, sıkışık.",
"“Çınar yıkıldı. Otuz bir kişi. Demirleri ben eksilttim, 1993 baharında. Rahmi bilmiyordu. Çimento oranını da ben değiştirdim. Fark parası ile Ankara'daki ilk daireyi aldık. Nesrin o evde büyüdü.”",
"Bir sonraki sayfa, 22 Ağustos: “Rahmi'yi gözaltına aldılar. Yarın ifade vereceğim. Ne diyeceğimi biliyorum.”",
"Sayfa sayfa ilerliyor. 2001: “Rahmi'ye on iki yıl verdiler. Ben beraat ettim.” 2004: “Rahmi cezaevinde öldü. Kalp. Cenazesine gitmedim.”",
"Ankara'daki ilk daire. Senin çocukluk odan. Pencereden kestane ağacı görünen."
], secenekler: [
{ t: "Sonuna kadar okursun. Ne varsa.", to: "b2b", etki: { hakikat: 1, tamamini: true } },
{ t: "O sayfada durursun. Daha fazlasını kaldıramazsın.", to: "b2b", etki: { huzur: 1 } },
{ t: "Telefonunla her sayfanın fotoğrafını çekersin.", to: "b2b", etki: { hakikat: 1, foto: true } },
{ t: "O sayfayı defterden yırtıp ayrı bir yere koyarsın.", to: "b2b", etki: { sadakat: 1, yirtti: true } }
]},

b2b: { saat: "Ekim 2023", baslik: "Fotoğraf", metin: [
P(S("b2A"), "Sonuna kadar okudun. 2019: “Nesrin bugün okul ihalesini kazandı. Gurur duydum. Hakkım var mı?” 2022: “Doktor kalbimin yorgun olduğunu söyledi. Rahmi'nin kalbi gibi.” Son sayfa boş değil; ama oraya henüz gelmedin. Gelmek istemedin."),
P(S("b2B"), "Defteri kapattın. Ellerin titriyordu. Okumadığın sayfalar artık okunmamış sayfalar değil; kaçtığın sayfalar."),
P(S("b2C"), "Kırk iki fotoğraf. Telefonunun galerisinde, tatil fotoğraflarının ve Ege'nin mezuniyet resimlerinin arasında. Bir şeyi kopyalamak, onu silinemez kılmak. Bunu neden yaptığını tam bilmiyorsun."),
P(S("b2D"), "Sayfayı yırttın. Kâğıt temiz koptu; defter otuz yıldır bu kopuşu bekliyormuş gibi. Sayfa şimdi cüzdanında. Defter bir yalan söylüyor artık; ama gerçeğin kendisi cebinde."),
"Defterin arka kapağının içinde bir fotoğraf sıkışmış. Siyah beyaz. 1993 yazı. Çınar Apartmanı'nın temel atma töreni.",
"İki adam yan yana, kürek ellerinde, gülümsüyor. Biri baban; otuz dokuz yaşında, bıyıklı, gözlüklü. Öbürü Rahmi Kara. Daha kısa, daha zayıf, gömleğinin yakası açık. Elini babanın omzuna koymuş.",
"Fotoğrafın arkasında babanın el yazısıyla: “Rahmi ile. Ortaklığımızın ilk binası. İnşallah son değil.”",
"İki adam. Biri yirmi dört yıl boyunca dürüst bir mühendis olarak yaşadı. Öbürü cezaevinde, katil olarak öldü.",
"İkisi de bu fotoğrafta gülümsüyor. İkisi de neyin geleceğini bilmiyor. Ya da biri biliyor."
], secenekler: [
{ t: "Fotoğrafı masana, görünür bir yere koyarsın.", to: "b3", etki: { hakikat: 1 } },
{ t: "Fotoğrafı defterin içine geri koyarsın.", to: "b3", etki: { huzur: 1 } },
{ t: "Rahmi Kara'nın yüzüne uzun uzun bakarsın. Onu tanımak istiyorsun.", to: "b3", etki: { hakikat: 1, rahmi_yuz: true } },
{ t: "Babanın yüzüne bakarsın. Onu tanıdığını sanmıştın.", to: "b3", etki: { sadakat: 1 } }
]},

b3: { saat: "Ekim 2023", baslik: "Annen", metin: [
"Ertesi gün annenin evindesin. Mutfakta, aynı masada, çocukken ödev yaptığın masada. Annen çay koyuyor.",
"Nasıl sorulur böyle bir şey? Kelimeler ağzında dönüp duruyor. Sonunda yalnızca defteri masaya koyuyorsun.",
"Annen defterin kapağına bakıyor. Uzun süre. Sonra çay bardağını tabağına bırakıyor, ses çıkarmadan.",
"“Biliyordum,” diyor.",
"Bir kelime. Yirmi dört yıl.",
"“Depremden bir hafta sonra söyledi. Gece, bu mutfakta. Ağladı. Hayatımda onu iki kez ağlarken gördüm. Biri o geceydi.” Sesi düz, yorgun. “Ertesi gün ifadesini verdi. Ben ona gitme demedim. Konuş demedim. Hiçbir şey demedim.”",
"“Neden?” diyorsun.",
"Annen sana bakıyor. “Sen on yaşındaydın,” diyor. “Kardeşin yoktu ama sen vardın. Rahmi'nin de bir kızı vardı, biliyorum. Ben kendi kızımı seçtim. Her anne seçer.” Bir süre susuyor. “Doğru muydu? Hayır. Ama yine yapardım.”"
], secenekler: [
{ t: "Annene kızarsın. Yüksek sesle, yıllarca söylenmemiş her şeyle.", to: "b3b", etki: { hakikat: 1, anneye_kizdi: true } },
{ t: "Annenin elini tutarsın. O da bir yük taşımış.", to: "b3b", etki: { sadakat: 1, anne_el: true } },
{ t: "“Rahmi'nin kızının adı ne?” diye sorarsın.", to: "b3b", etki: { hakikat: 1, elif_adi: true } },
{ t: "Kalkıp gidersin. Bu mutfakta artık nefes alamıyorsun.", to: "b3b", etki: { huzur: 1 } }
]},

b3b: { saat: "Ekim 2023", baslik: "Arşiv", metin: [
P(S("b3A"), "Bağırdın. Annen dinledi. Hiç itiraz etmedi; hiç ağlamadı. Bitince yalnızca, “Haklısın,” dedi. Haklı olmak hiçbir şeyi değiştirmedi. Masadaki çay soğudu."),
P(S("b3B"), "Annenin eli elinde. Kemikleri belirgin, derisi ince. Bu el yirmi dört yıl boyunca bir sırrı taşıdı. Bir babanın kızı olduğunu biliyordun; bir annenin de kızı olduğunu şimdi anlıyorsun."),
P(S("b3C"), "“Elif,” dedi annen. “Elif Kara. Senden üç yaş küçük.” Bunu nasıl bildiğini sormadın. Bir annenin bilmemesi gereken bir şeyi yirmi dört yıl hatırlaması, her şeyi anlatıyordu."),
P(S("b3D"), "Arabaya bindin, motoru çalıştırmadın. Bir saat oturdun. Annen pencereden izledi; perdeyi bir kez araladı, bir kez kapattı."),
"O gece büronda, bilgisayarın başında, 1999-2001 yıllarının gazete arşivlerini tarıyorsun.",
"“Çınar Apartmanı davası.” Bir manşet: “Müteahhit Rahmi Kara'ya 12 yıl.” Altında bir fotoğraf: Rahmi, iki jandarmanın arasında, başı önde. Arkada, kalabalığın içinde, sekiz yaşında bir kız. Elinde bir pankart: “Babam masum.”",
"Bir başka haber, mahkeme tutanağından alıntı. Babanın ifadesi: “Ortağım malzeme tedarikinden sorumluydu. Ben statik hesapları onayladım. Hesaplar doğruydu. Uygulamada ne yapıldığını bilmiyordum. Bilseydim, o binaya kendi ailemi yerleştirirdim, yerleştirmezdim değil.”",
"Kendi ailesi. Sen. Otuz bir kişinin öldüğü bir binayı, bir cümlede, kızının adıyla savundu.",
"Ekranın ışığı yüzünde. Saat gece ikiyi geçiyor."
], secenekler: [
{ t: "Bütün haberleri, bütün tutanakları bir klasöre kaydedersin.", to: "b4", etki: { hakikat: 1, arsiv: true } },
{ t: "Babanın ifadesini bir kez daha okursun. Ve bir kez daha.", to: "b4", etki: { sadakat: 1 } },
{ t: "Pankart tutan kızın fotoğrafını büyütürsün.", to: "b4", etki: { hakikat: 1, elif_foto: true } },
{ t: "Bilgisayarı kapatırsın. Bu gece yeter.", to: "b4", etki: { huzur: 1 } }
]},

b4: { saat: "Kasım 2023", baslik: "Elif Kara", metin: [
"Elif Kara'yı bulmak beş dakika sürüyor. İzmit'te bir ortaokulda Türkçe öğretmeni. Kırk bir yaşında. Bir derneği var: “Çınar'ın Gerçeği.” Bir internet sitesi, birkaç video, yirmi yıllık bir dava dosyası.",
"Bir videoyu açıyorsun. Elif bir masanın arkasında, arkasında babasının büyütülmüş fotoğrafı. Sesi sakin, kelimeleri özenli; yirmi yıldır aynı şeyi anlatan birinin sesi.",
"“Babam o binanın malzemesini almadı,” diyor. “Faturalar ortağının imzasını taşıyordu. Mahkeme bunu dikkate almadı. Babam cezaevinde öldü. Ben ona son kez camın arkasından dokundum.”",
"Videonun sonunda bir cümle. Kameraya doğrudan bakarak söylüyor:",
"“Bir gün biri konuşacak. O binayı kimin yıktığını bilen biri. Ben o günü bekliyorum. Babam için değil artık. Kendim için. Bilmek için.”",
P(function(d){ return d.elif_foto; }, "Pankart tutan sekiz yaşındaki kızın yüzü, ekrandaki kırk bir yaşındaki kadının yüzünde. Aynı kaşlar. Aynı inat."),
"Sayfanın altında bir iletişim adresi."
], secenekler: [
{ t: "Ona bir mesaj yazarsın. Kim olduğunu söylemeden: “Size söylemem gereken bir şey olabilir.”", to: "b5", etki: { hakikat: 1, mesaj: true } },
{ t: "Bütün videoları izlersin. Sabaha kadar.", to: "b5", etki: { hakikat: 1 } },
{ t: "Avukatını ararsın. Ne yapabileceğini, neyi kaybedeceğini öğrenmek için.", to: "b5", etki: { sadakat: 1, avukat_erken: true } },
{ t: "Bilgisayarı kapatırsın. Yirmi yıl beklemiş biri, birkaç gün daha bekleyebilir.", to: "b5", etki: { huzur: 1 } }
]},

b5: { saat: "Kasım 2023", baslik: "Tarık", metin: [
P(S("b4A"), "Mesajı gönderdin. Üç dakika sonra cevap geldi: “Kimsiniz?” Cevap vermedin. Ekranda “yazıyor...” belirdi, kayboldu, yine belirdi. Sonra hiçbir şey."),
P(S("b4B"), "Sabaha kadar izledin. Elif'in on dokuz yaşında, yirmi beş yaşında, otuz yaşında konuştuğu videolar. Her yıl biraz daha yorgun, ama her yıl aynı cümle: bir gün biri konuşacak."),
P(S("b4C"), "Avukat dinledi, not aldı. “Yarın konuşalım,” dedi. “Ama şimdiden söyleyeyim: bu defter bir bomba. Kime patlayacağını siz seçeceksiniz.”"),
P(S("b4D"), "Bilgisayarı kapattın. Ertesi gün işe gittin, toplantılara girdin, bir proje sundun. Kimse bir şey fark etmedi. Bir şeyi saklamanın bu kadar kolay olması seni korkuttu; babanın da böyle başladığını düşündün."),
"Tarık'a anlatman bir haftayı buluyor. Bir akşam, mutfakta, Ege odasındayken.",
"Tarık dinliyor. Sonra uzun süre susuyor. Sonra:",
"“Nesrin. Baban öldü. Rahmi Bey öldü. Bu defter kimi geri getirecek?” Çay bardağını çeviriyor. “Ama şunu götürecek: senin büronu, okul projesini, Ege'nin üniversite bursunu, soyadımızı. Ölmüş bir adamı yargılarken yaşayanları cezalandıracaksın.”",
"“Peki Elif?” diyorsun.",
"“Elif yirmi dört yıldır bununla yaşıyor. Bir yirmi dört yıl daha yaşayabilir. Sen yaşayabilir misin? Bunu sor kendine.”",
"Koridorda bir ses. Ege'nin odasının kapısı aralık."
], secenekler: [
{ t: "Ege'yi çağırıp ona da anlatırsın. O da bu ailenin bir parçası.", to: "b6", etki: { hakikat: 1, ege_bilir: true } },
{ t: "“Düşüneceğim,” dersin. Tarık'ın haklı olabileceğini kabul ederek.", to: "b6", etki: { huzur: 1 } },
{ t: "“Babam da böyle düşündü. Yirmi dört yıl boyunca,” dersin.", to: "b6", etki: { hakikat: 1 } },
{ t: "Tarık'a sorarsın: “Senin baban olsaydı ne yapardın?”", to: "b6", etki: { sadakat: 1, tarik_soru: true } }
]},

b6: { saat: "Aralık 2023", baslik: "Avukat", metin: [
P(S("b5A"), "Ege dinledi. On dokuz yaşında, mimarlık birinci sınıf. Dedesinin kucağında büyüdü. Dinlerken yüzü bir yetişkinin yüzüne dönüştü, sonra yine bir çocuğunkine. “Dedem,” dedi sadece. Başka bir şey söylemedi. Odasına gitti. Kapı kapandı."),
P(S("b5B"), "“Düşüneceğim,” dedin. Tarık başını salladı, rahatladı. Ama koridordaki aralık kapı, o gece, bir daha kapanmadı."),
P(S("b5C"), "Tarık yüzüne baktı. Bir şey söyleyecekti, söylemedi. Kalktı, bardağı lavaboya bıraktı. “Haklısın,” dedi, arkası dönükken. “Ama ben de haklıyım. Sorun bu.”"),
P(S("b5D"), "Tarık uzun süre düşündü. “Bilmiyorum,” dedi sonunda. “Gerçekten bilmiyorum. Belki ben de baban gibi yapardım. Belki sen de. Bu yüzden korkuyorum.”"),
"Avukat Feride Hanım'ın bürosu. Altmışlarında, gözlükleri burnunun ucunda, defterin fotokopilerini tek tek okuyor.",
"“Hukuki olarak,” diyor, “bu defter yeni bir delil. Yargılamanın yenilenmesi istenebilir. Rahmi Bey'in mahkûmiyeti kaldırılabilir. Ölümünden sonra bile. Bu kızı için çok şey demek.”",
"“Ama,” diyor ve gözlüğünü çıkarıyor, “babanız ölü olduğu için yargılanamaz. Mirası ise sorumlu tutulabilir. Otuz bir ailenin tazminat davası açma hakkı doğar. Annenizin evi, sizin büronuzun sermayesi, babanızdan kalan her şey. Ve basın. Soyadınız.”",
"“Ya da,” diyor, daha yavaş, “hiçbir şey yapmazsınız. Defter bir çekmecede kalır. Kimse bilmez. Bu da yasal.”",
"Masada defter duruyor. Kahverengi, yıpranmış, 1993."
], secenekler: [
{ t: "Defteri Elif Kara'ya götürürsün. Ne yapacağına o karar versin.", to: "e1", etki: { hakikat: 1, elif_bilir: true } },
{ t: "Savcılığa ve basına kendin gidersin. Kendi adınla.", to: "m1", etki: { hakikat: 2, kamu: true } },
{ t: "Defteri yakmaya karar verirsin.", to: "y1", etki: { huzur: 2, yakti: true } },
{ t: "Elif'e kimliğini gizleyerek yardım edersin: para, avukat, ama defter değil.", to: "k1", etki: { sadakat: 1, kefaret: true } }
]},

/* ---------- ELİF KOLU ---------- */
e1: { saat: "Ocak 2024", baslik: "İzmit", metin: [
P(function(d){ return d.yakti; }, "Defteri yakmıştın. Ama Elif'in sorusu sana gerçeği söyletti. Şimdi elinde bir defter yok; yalnızca hatırladıkların var. Bir tanığın sözü, bir belgeden daha mı az ağır?"),
"İzmit. Elif Kara'nın evi, deprem sonrası yapılmış, beş katlı, sağlam bir binanın üçüncü katında. Kapıyı kendisi açıyor.",
"Seni tanıyor. İlk anda. “Arslan,” diyor. Soru değil. Yüzü bembeyaz.",
"İçeri alıyor seni. Salonun duvarında babasının fotoğrafı; videolardaki aynı fotoğraf.",
P(function(d){ return !d.yakti; }, "Masaya oturuyorsun. Defteri çıkarıyorsun. Elif dokunmuyor. “Ne bu?” “Babamın defteri,” diyorsun. “1999. Ağustos.”"),
P(function(d){ return !d.yakti; }, "Elif defteri alıyor. Açıyor. Okuyor. Sen salonun penceresinden İzmit körfezine bakıyorsun; Gölcük karşıda, sisin içinde. Bir saat. Elif tek kelime etmiyor. Sonunda defteri kapatıyor ve iki elini üstüne koyuyor, bir kitabı değil, bir mezarı örter gibi."),
P(function(d){ return d.yakti; }, "Masaya oturuyorsun. Elinde hiçbir şey yok. Anlatmaya başlıyorsun: çekmeceyi, defteri, 18 Ağustos'u, demirleri, ateşi. Elif bir kez bile sözünü kesmiyor. Sen anlatırken o İzmit körfezine bakıyor; Gölcük karşıda, sisin içinde. Bir saat."),
"“Yirmi dört yıl,” diyor. Sesi bir fısıltı. “Yirmi dört yıl biri konuşsun diye bekledim. Şimdi biri konuştu ve ben ne hissedeceğimi bilmiyorum.”"
], secenekler: [
{ t: "“Özür dilerim,” dersin. Babın adına değil, kendi adına.", to: "e2", etki: { hakikat: 1, ozur: true } },
{ t: "Hiçbir şey söylemezsin. Onun hissetmesine alan bırakırsın.", to: "e2", etki: { huzur: 1 } },
{ t: "“Ne istersen yapacağım,” dersin.", to: "e2", etki: { hakikat: 1, soz: true } },
{ t: "“Babam iyi bir babaydı,” dersin. Bunu neden söylediğini bilmeden.", to: "e2", etki: { sadakat: 1, iyi_baba: true } }
]},

e2: { saat: "Ocak 2024", baslik: "Elif'in Kararı", metin: [
P(S("e1A"), "Elif sana baktı. “Kendi adına mı?” dedi. “Sen ne yaptın ki?” Sonra durdu. “Sen o evde büyüdün,” dedi. “Benim babamın parasıyla alınan evde. Belki de doğru: sen de bir şey yaptın. Yaşadın.”"),
P(S("e1B"), "Sustun. Elif de. Sonra Elif ağlamaya başladı; sessiz, kontrolsüz, yirmi dört yıllık bir ağlama. Sen kımıldamadın. Bir yabancının yasına tanık olmak, o yasın sebebinin kızıyken."),
P(S("e1C"), "“Ne istersem mi?” dedi Elif. Gülümsedi; acı bir gülümseme. “Babamı geri getir. Yapabilir misin?” Sonra özür diledi. “Haksızlık ettim. Sen bunu bana getirdin. Çoğu insan getirmezdi.”"),
P(S("e1D"), "Elif'in yüzü kaskatı oldu. “Benim babam da iyi bir babaydı,” dedi. “Ama sadece birimiz bunu yüksek sesle söyleyebildi yirmi dört yıl boyunca.” Cümlenin ağırlığı odaya çöktü."),
P(function(d){ return d.yakti || d.kefaret; }, "Elif'in sorusunu hatırlıyorsun: “Neden şimdi?” Belgesiz bir itirafın, bir mahkemede ne kadar ağırlığı olacağını ikiniz de biliyorsunuz. Ama bir insanın içinde, belki her şeyden ağır."),
"Bir süre sonra Elif konuşuyor. Kelimeleri dikkatle seçerek.",
P(function(d){ return !d.yakti; }, "“Babamın adının temizlenmesini istiyorum. Mahkemede. Herkesin önünde. Bunun için bu defter gerekiyor. Ve senin tanıklığın.” Durakladı. “Bu senin babanın adını kirletecek. Annenin evini. Senin işini. Bunu biliyor musun?”"),
P(function(d){ return d.yakti; }, "“Babamın adının temizlenmesini istiyorum. Mahkemede. Herkesin önünde. Defter yok; ama sen varsın. Senin tanıklığın.” Durakladı. “Bu senin babanın adını kirletecek. Annenin evini. Senin işini. Bunu biliyor musun?”"),
"“Biliyorum,” diyorsun.",
"“Kabul ediyor musun?”"
], secenekler: [
{ t: "“Evet. Tamamen.”", to: "e3", etki: { hakikat: 2, dava: true } },
{ t: "“Evet. Ama annem yaşadığı sürece değil. Ona bunu yaşatamam.”", to: "e3", etki: { sadakat: 1, erteleme: true, dava: true } },
{ t: "“Mahkemede ben konuşacağım. Defteri değil, beni dinlesinler.”", to: "e3", etki: { hakikat: 1, tanik: true, dava: true } },
{ t: "“Karar senin. Ne yaparsan yap, karşı çıkmayacağım.”", to: "e3", etki: { huzur: 1, elife_birakti: true } }
]},

e3: { saat: "Şubat 2024", baslik: "İki Kız", metin: [
P(S("e2A"), "“Tamamen,” dedin. Elif başını salladı. Bir an ikiniz de, bunun ne anlama geldiğini düşünmeden durdunuz. Sonra düşündünüz."),
P(S("e2B"), "Elif uzun süre sana baktı. “Annen,” dedi. “Benim annem babam öldükten iki yıl sonra öldü. Kimse ona bir şey yaşatmamak için beklemedi.” Sonra derin bir nefes aldı. “Ama tamam. Bekleyeceğim. Yirmi dört yıl bekledim.”"),
P(S("e2C"), "Elif bir süre düşündü. “Senin sesin,” dedi. “Bir belgeden daha fazlası. Mahkeme bir kâğıdı okur. Ama bir kızın kendi babası hakkında konuşması... bunu duyacaklar.”"),
P(S("e2D"), "Elif bir süre sana baktı. “Bana bırakıyorsun,” dedi. “Babam da bana bırakmıştı. Bu yükü. Biraz da senin taşıman gerekmez mi?” Haklıydı. Ama yine de kararı ona bıraktın."),
"Bir şubat günü Elif bir şey istiyor: annenle tanışmak.",
"Annenin mutfağı. Üç kadın, bir masa. Sevim Hanım, Elif, sen. Annen çay koyuyor; elleri titremiyor ama bardakları masaya koyarken her biri biraz fazla ses çıkarıyor.",
"Elif annene bakıyor. Uzun süre. Sonra:",
"“Siz biliyordunuz.”",
"Annen başını kaldırıyor. “Biliyordum,” diyor. Sana söylediği gibi. Aynı düz sesle.",
"“Neden susmadınız? Yani, neden konuşmadınız?”",
"Annen bir an sana bakıyor. Sonra Elif'e. “Benim de bir kızım vardı,” diyor. “Senin baban gibi. Her ebeveyn kendi çocuğunu seçer. Ben de seçtim. Seni değil.”",
"Elif'in yüzü kıpırdamıyor. Ama elleri masanın altında yumruk."
], secenekler: [
{ t: "Annene: “Yanlış seçtin,” dersin. Elif'in önünde.", to: "z1", etki: { hakikat: 1 } },
{ t: "Elif'in elini masanın altında tutarsın.", to: "z1", etki: { hakikat: 1, elif_el: true } },
{ t: "Annenin yanına geçersin. Bu onun da hikâyesi.", to: "z1", etki: { sadakat: 1 } },
{ t: "Kalkıp ikisini yalnız bırakırsın. Bu konuşma senin değil.", to: "z1", etki: { huzur: 1, yalniz_birakti: true } }
]},

/* ---------- KAMU KOLU ---------- */
m1: { saat: "Ocak 2024", baslik: "Açıklama", metin: [
"Savcılığa dilekçeyi kendin veriyorsun. Ekinde defterin fotokopisi. Ertesi gün bir gazeteciyle görüşüyorsun; genç bir kadın, deprem davalarını yıllardır takip ediyor.",
"İki gün sonra haber çıkıyor. Başlık: “Çınar Apartmanı'nın gerçek sorumlusu: Kızı açıkladı.”",
"Telefonun susmuyor. Akrabalar, meslektaşlar, eski müşteriler. Bazıları tebrik ediyor; çoğu sessiz kalmayı seçiyor. Bir amcan tek bir mesaj atıyor: “Babanın kemiklerini sızlattın.”",
"Sosyal medyada yüzün. Bazı yorumlar: “Cesur bir kadın.” Bazıları: “Babasının parasıyla mimar oldu, şimdi kahraman.” Bazıları: “Otuz bir kişi öldü, bu kadının ofisi hâlâ açık mı?”",
P(function(d){ return d.ege_bilir; }, "Ege'nin üniversitede arkadaşları ona soruyor. O sana bir mesaj atıyor: “Anne, gurur duyuyorum. Ama bugün derse gidemedim.”"),
"Akşam, haber sitelerinde bir video: Elif Kara, bir televizyon kanalının önünde, mikrofonlar yüzüne uzatılmış. Ağlıyor. “Yirmi dört yıl,” diyor. “Yirmi dört yıl.” Sonra kameraya bakıyor: “O kadına teşekkür ederim. Ama onu affetmem gerekip gerekmediğini bilmiyorum. Babası benim babamı öldürdü.”"
], secenekler: [
{ t: "Elif'e ulaşmaya çalışırsın.", to: "m2", etki: { hakikat: 1, elife_ulasti: true } },
{ t: "Bütün telefonları kapatırsın. Bir hafta.", to: "m2", etki: { huzur: 1 } },
{ t: "Bir açıklama daha yaparsın: annenin bildiğini de söylersin.", to: "m2", etki: { hakikat: 2, anne_acikladi: true } },
{ t: "Amcana cevap yazarsın: “Kemikleri zaten sızlıyordu.”", to: "m2", etki: { hakikat: 1 } }
]},

m2: { saat: "Şubat 2024", baslik: "Otuz Bir", metin: [
P(S("m1A"), "Elif telefonunu açmadı. Bir hafta sonra bir mesaj geldi: “Şimdi değil. Belki hiç değil. Ama teşekkür ederim.” Belki hiç değil. Bu cümleyi kabullenmek zorundasın."),
P(S("m1B"), "Bir hafta. Telefonun kapalı, perdeler kapalı. Tarık kapının önüne yemek bıraktı. Sekizinci gün açtığında yüz yirmi bir cevapsız arama. Bir tanesi bir sesli mesaj bırakmıştı."),
P(S("m1C"), "Annen haberi televizyondan izledi. Seni aramadı. Üç gün sonra bir mektup geldi, el yazısıyla, tek satır: “Hakkın vardı.” Altında imza yok."),
P(S("m1D"), "Amcan cevap vermedi. Aile mezarlığının anahtarı ondaydı; ertesi hafta kilidi değiştirmiş, sana haber vermiş. Bir ailenin bir üyeyi dışarıda bırakma biçimleri, bir mahkemenin kararlarından daha kesin."),
"Bir dernek seni bir toplantıya çağırıyor. Çınar Apartmanı'nda ölenlerin aileleri. Gölcük'te, bir belediye salonunda. Yirmi kişi kadar.",
"Kapıdan giriyorsun. Herkes susuyor. Bir sandalye gösteriyorlar, en önde.",
"Bir kadın kalkıyor. Altmışlarında. Adı Nazmiye. Kızı yedi yaşındaymış; ikinci katta, annesinin kucağında. Kendisi kurtulmuş; kızı kurtulmamış.",
"“Seni tanımıyorum,” diyor. “Babanı da tanımıyordum. Rahmi Bey'i tanıyordum; yıllarca ona lanet ettim. Şimdi kime lanet edeceğimi bilmiyorum.” Bir süre susuyor. “Ben kimseyi affetmem. Ama sana teşekkür ederim. Bunlar ayrı şeyler. Sen bunu bilmelisin.”",
"Salonun arkasında biri ağlıyor. Biri kalkıp çıkıyor. Kimse sana bir şey sormuyor."
], secenekler: [
{ t: "Kalkıp hepsine kendi ağzınla özür dilersin.", to: "m3", etki: { hakikat: 1, ozur_aileler: true } },
{ t: "Nazmiye Hanım'ın kızının adını sorarsın.", to: "m3", etki: { hakikat: 1, kizin_adi: true } },
{ t: "Babanın mirasının tamamını ailelere bırakacağını söylersin.", to: "m3", etki: { hakikat: 1, miras_verdi: true } },
{ t: "Hiçbir şey söylemezsin. Dinlemeye geldin.", to: "m3", etki: { huzur: 1 } }
]},

m3: { saat: "Mart 2024", baslik: "Çöküş", metin: [
P(S("m2A"), "Özür diledin. Kelimeleri hazırlamamıştın; geldiler. Kimse karşılık vermedi. Bir özrün bir şeyi düzeltmediğini biliyordun; ama bir şeyin söylenmesi gerekiyordu ve kimse söylememişti."),
P(S("m2B"), "“Zeynep,” dedi Nazmiye Hanım. “Zeynep. Pembe bir elbisesi vardı. Ertesi gün okula başlayacaktı.” Adını söyledi ve bir şey çözüldü; sanki yirmi dört yıldır kimse sormamıştı."),
P(S("m2C"), "Salon sustu. Bir adam, arka sıradan, “Para mı?” dedi. “Para mı istiyoruz sanıyorsun?” Sonra oturdu. Nazmiye Hanım başını salladı: “Ver,” dedi. “Ama para için teşekkür etmeyeceğiz.”"),
P(S("m2D"), "Sustun. Toplantının sonunda biri yanına geldi, eline bir fotoğraf tutuşturdu: bir düğün, 1997. Altı kişi gülümsüyor. Dördü Çınar'da öldü. Fotoğrafı geri vermek istedin; almadı."),
"Mart başında okul ihalesi iptal ediliyor. Gerekçe: “Kamuoyu hassasiyeti.” Büronun iki projesi daha askıya alınıyor. Çalışanlarından ikisi istifa ediyor.",
"Tarık bir akşam mutfakta oturuyor, önünde hesaplar. “Altı ay,” diyor. “Altı ay daha dayanabiliriz. Sonra büroyu kapatırız.” Sesi kızgın değil. Yorgun.",
P(function(d){ return d.ege_bilir; }, "Ege bir akşam elinde bir kâğıtla geliyor. Bursunun iptal edildiğini bildiren bir mektup. Bağışçı vakıf, “Arslan” adını taşıyan bir bursu artık vermek istemiyormuş. Ege kâğıdı masaya bırakıyor. “Önemli değil,” diyor. Ama önemli."),
"Bir gerçeği söylemenin bedeli, gerçeğin kendisinden daha somut. Banka hesabında. Boş bir ofis odasında. Bir çocuğun yüzünde.",
"Ve yine de, gece yatağında, yıllardır ilk kez, bir şey hafiflemiş."
], secenekler: [
{ t: "Tarık'a sarılırsın. Bu yükü birlikte taşıyacaksınız.", to: "z1", etki: { sadakat: 1 } },
{ t: "Büroyu kapatmaya kendin karar verirsin. Babanın adını taşıyan hiçbir şey kalmasın.", to: "z1", etki: { hakikat: 1, buro_kapandi: true } },
{ t: "Ege'ye gidip ona özür dilersin.", to: "z1", etki: { sadakat: 1, egeye_ozur: true } },
{ t: "Hiçbir şeyden pişman olmadığını yüksek sesle söylersin. Kendine.", to: "z1", etki: { hakikat: 1 } }
]},

/* ---------- YAKMA KOLU ---------- */
y1: { saat: "Aralık 2023", baslik: "Ateş", metin: [
"Bahçedeki eski mangalda. Gece yarısı. Tarık uyuyor. Ege'nin odasının ışığı sönük.",
"Defteri açıyorsun, son bir kez. Sayfaları tek tek koparıyorsun. 1993. 1995. 1999. Babanın titrek el yazısı.",
"Çakmak. İlk sayfa tutuşuyor. Kâğıt kıvrılıyor, kararıyor, mürekkep bir an parlıyor sonra yok oluyor. İkinci sayfa. Üçüncü.",
"18 Ağustos 1999 sayfasına geliyorsun. “Demirleri ben eksilttim.” Alev kelimeleri tek tek yiyor; en son “Nesrin” kelimesi kalıyor, sonra o da gidiyor.",
P(function(d){ return d.yirtti; }, "Yırttığın sayfa hâlâ cüzdanında. Defteri yaktın ama o sayfayı yakmadın. Neden? Bilmiyorsun. Belki bir şeyin tamamen yok olmasına dayanamıyorsun."),
P(function(d){ return d.foto; }, "Telefonunda kırk iki fotoğraf var. Defteri yakıyorsun; ama defter galerinde yaşıyor. Bunu biliyorsun. Bilmezden geliyorsun."),
"Son sayfa. Henüz okumadığın, okumaya cesaret edemediğin sayfa. Babanın son el yazısı. Bir kelime görüyorsun, alev onu kapmadan önce: “kızım.”",
"Sonra kül.",
"Mangalın içinde, siyah, ince, rüzgârda kıpırdayan bir kül tabakası. Yirmi dört yılın, otuz bir hayatın, bir adamın tek itirafının külü."
], secenekler: [
{ t: "Külü bahçeye, babanın diktiği gül fidanının dibine dökersin.", to: "y2", etki: { sadakat: 1 } },
{ t: "Külü bir kavanoza koyarsın. Atamıyorsun.", to: "y2", etki: { hakikat: 1, kavanoz: true } },
{ t: function(d){ return d.foto ? "Telefonundaki fotoğrafları da silersin." : "Mangalın kapağını kapatıp içeri girersin."; }, to: "y2", etki: function(d){ d.huzur++; if(d.foto){ d.foto = false; d.foto_sildi = true; } } },
{ t: "Mangalın başında sabaha kadar oturursun.", to: "y2", etki: { hakikat: 1 } }
]},

y2: { saat: "Ocak 2024", baslik: "Mektup", metin: [
"Ocakta bir mektup geliyor. Elle yazılmış, İzmit postası. Gönderen: Elif Kara.",
"“Nesrin Hanım,” diye başlıyor. “Babanızın vefatını gazetede okudum. Başınız sağ olsun. Bunu içtenlikle söylüyorum; bir babayı kaybetmenin ne olduğunu biliyorum.”",
"“Size bir şey sormak istiyorum ve sormaktan utanıyorum. Babanız ölmeden üç ay önce beni aradı. Telefonumu nereden bulduğunu bilmiyorum. ‘Elif Hanım,’ dedi. Sonra uzun bir sessizlik. Sonra telefonu kapattı.”",
"“Yirmi dört yıldır bir şey bekliyorum. Babanız bir şey bırakmış olabilir mi? Bir not, bir mektup, herhangi bir şey? Lütfen bana dürüst olun. Başka hiçbir şey istemiyorum. Yalnızca bilmek.”",
P(function(d){ return d.mesaj; }, "Altında bir not: “Bana birkaç ay önce isimsiz bir mesaj atan siz miydiniz?”"),
"Mektubu iki kez okuyorsun. Bahçede, mangalın yanında, gül fidanının dibinde ya da bir kavanozda, kül."
], secenekler: [
{ t: "Ona yazarsın: “Hayır. Hiçbir şey bırakmadı.”", to: "y3", etki: { sadakat: 1, yalan: true } },
{ t: "İzmit'e gidip ona her şeyi yüzüne söylersin. Belge olmadan, yalnızca hatırladıklarınla.", to: "e1", etki: { hakikat: 2, elif_bilir: true, anlatti: true } },
{ t: "Mektuba cevap vermezsin.", to: "y3", etki: { huzur: 1, cevapsiz: true } },
{ t: "“Babam sizi aradığında bir şey söylemek istiyordu. Ne olduğunu ben de bilmiyorum,” diye yazarsın.", to: "y3", etki: { yarim_gercek: true } }
]},

y3: { saat: "Şubat 2024", baslik: "Ege", metin: [
P(S("y2A"), "Mektubu yazdın. Postaladın. Bir hafta sonra bir cevap geldi: “Teşekkür ederim. Yine de sordum, çünkü sormasaydım hep soracaktım.” Bu cümle, defterin külünden daha ağır."),
P(S("y2C"), "Cevap vermedin. Elif bir daha yazmadı. Belki bekliyor. Belki artık beklemiyor. Sessizlik de bir cevaptır ve sen bu cevabı babanın yaptığı gibi verdin."),
P(S("y2D"), "Yazdığın her kelime doğruydu. Ve hepsi bir yalanın parçasıydı. Elif'ten bir cevap geldi: “Demek bir şey söylemek istedi. Bu bile bir şey. Teşekkür ederim.” Bir şey bile. Senin ona verdiğin şey bu: bir şey bile."),
"Bir akşam Ege mutfağa geliyor. Elinde telefonu. Yüzü solgun.",
P(function(d){ return d.foto || d.foto_sildi; }, "“Anne,” diyor. “Bulutta yedeklenen fotoğrafların... aile albümüne düşmüş. Bir defterin sayfaları.” Telefonu sana uzatıyor. Ekranda babanın el yazısı. Sildiğini sandığın şey, bir yerde, bir sunucuda yaşamaya devam etmiş."),
P(function(d){ return !d.foto && !d.foto_sildi; }, "“Anne,” diyor. “Geçen ay gece yarısı bahçede ne yaktın? Ben pencereden gördüm. Sonra sabah mangalda yanmamış bir köşe buldum.” Elinde küçük, kararmış bir kâğıt parçası. Üstünde babanın el yazısından üç kelime: “Rahmi bilmiyordu. Ben”"),
"“Dedem ne yaptı?” diyor Ege. On dokuz yaşında. Mimarlık okuyor. Dedesinin kucağında büyüdü.",
"Bir soru bir başka kuşağa geçti. Senin yaktığın şey, oğlunun elinde."
], secenekler: [
{ t: "Ona her şeyi anlatırsın.", to: "z1", etki: { hakikat: 1, ege_bilir: true } },
{ t: "“Önemli bir şey değil. Eski iş kâğıtları,” dersin.", to: "z1", etki: { sadakat: 1, egeye_yalan: true } },
{ t: "“Sen ne düşünüyorsun?” diye sorarsın. Kararı ona bırakırsın.", to: "z1", etki: { ege_karar: true } },
{ t: "Kâğıdı ondan alıp kendi cüzdanına koyarsın. “Sonra konuşuruz.”", to: "z1", etki: { huzur: 1 } }
]},

/* ---------- KEFARET KOLU ---------- */
k1: { saat: "Ocak 2024", baslik: "İsimsiz Bağış", metin: [
"Bir aracı buluyorsun; Feride Hanım'ın tanıdığı bir avukat. Elif Kara'nın derneğine bir bağış yapılacak. Büyük. İsimsiz.",
"Ayrıca İstanbul'un iyi bir ceza avukatı, Rahmi Kara dosyasını ücretsiz incelemeyi “gönüllü olarak” teklif edecek. Ücretini sen ödeyeceksin. Kimse bilmeyecek.",
"Defter çekmecende. Kilitli. Babanın çekmecesi gibi.",
"Bir şeyi düzeltmek için iki yol var: gerçeği söylemek ya da sonuçlarını hafifletmek. Sen ikincisini seçtin. Para, avukat, zaman. Elif'in hayatı biraz daha kolay olacak. Rahmi Bey'in adı belki temizlenecek, belki temizlenmeyecek.",
"Senin adın hiçbir yerde geçmeyecek.",
"Bağış dekontu bir e-postayla geliyor. Bir rakam, bir tarih, bir onay kodu. Ekranda bir an duruyorsun. Babanın 1993 yılında eksilttiği demirlerin parası kaç ederdi bugün? Bunu hesaplamaya kalkıyorsun, sonra vazgeçiyorsun."
], secenekler: [
{ t: "Her ay düzenli bağış talimatı verirsin.", to: "k2", etki: { sadakat: 1, duzenli: true } },
{ t: "Elif'in videolarını izlemeye devam edersin. Paranın ona ulaşıp ulaşmadığını görmek için.", to: "k2", etki: { hakikat: 1 } },
{ t: "Bu kadar. Bir daha düşünmeyeceksin.", to: "k2", etki: { huzur: 1 } },
{ t: "Avukata bir not iletirsin: “1993 yılının malzeme faturalarına bakın.” Bir ipucu, bir itiraf değil.", to: "k2", etki: { hakikat: 1, ipucu: true } }
]},

k2: { saat: "Mart 2024", baslik: "Elif'in Sorusu", metin: [
P(S("k1D"), "Avukat ipucunu takip etti. Faturalarda bir şey buldu: imza Rahmi'nin ama yazı başkasının. Bir el yazısı uzmanı. Bir rapor. Bir kapı aralandı."),
"Mart sonunda telefonun çalıyor. Bilinmeyen bir numara.",
"“Nesrin Arslan?” Bir kadın sesi. Sakin. Videolardan tanıdığın ses.",
"“Elif Kara,” diyor. “Bağışın kimden geldiğini buldum. Bankalar konuşmaz ama aracılar bazen konuşur.” Bir süre susuyor. “Bir soru soracağım. Bir kez soracağım.”",
"“Neden?”",
"Telefonun öbür ucunda yirmi dört yıl bekleyen bir kadın. Senin önünde kilitli bir çekmece.",
"Bu tek kelimeye verilecek her cevap, bir kapıyı açacak ya da kapatacak. Ve bu kez, çekmeceyi kilitlemek yetmeyecek."
], secenekler: [
{ t: "“Vicdan,” dersin. “Babam ölmeden önce bir şeyler söylemişti; ne olduğunu tam anlamadım.”", to: "k3", etki: { sadakat: 1, yalan: true } },
{ t: "Gerçeği söylersin. Defteri. Her şeyi.", to: "e1", etki: { hakikat: 2, elif_bilir: true, anlatti: true } },
{ t: "Telefonu kapatırsın.", to: "k3", etki: { huzur: 1, kapatti: true } },
{ t: "“Babam isterdi,” dersin. Hiçbir zaman söylemediği bir şeyi ona söyletirsin.", to: "k3", etki: { sadakat: 1, yalan: true, babam_isterdi: true } }
]},

k3: { saat: "Haziran 2024", baslik: "Yalanın Ağırlığı", metin: [
P(S("k2A"), "“Vicdan,” dedin. Elif uzun süre sustu. “Vicdan,” diye tekrarladı. “Babanızın mı, sizin mi?” Cevap vermedin. Telefonu kapattı. Bağışlar hesabına düşmeye devam etti; ama Elif bir daha aramadı."),
P(S("k2C"), "Telefonu kapattın. Elif üç kez daha aradı. Açmadın. Dördüncü gün bir mesaj: “Cevabınız bu muydu?” Evet, diye düşündün. Bu muydu."),
P(S("k2D"), "“Babam isterdi,” dedin. Elif'in sesi değişti; bir an yumuşadı. “Demek söyledi,” dedi. “Demek bir şey söyledi.” Babana hiç söylemediği bir pişmanlık hediye ettin. Ona da, Elif'e de. Kendine de."),
"Haziranda bir haber: Rahmi Kara dosyası için yargılamanın yenilenmesi talebi reddedildi. Gerekçe: “Yeni ve kesin delil sunulmamıştır.”",
P(function(d){ return d.ipucu; }, "El yazısı raporu yetmemiş. Bir uzman, bir başka uzmanla çelişmiş. Kesin delil. O delil senin çekmecende, kilitli, kahverengi, 1993."),
"Elif'in yeni videosu. Yorgun. Bu sefer kameraya bakmıyor. “Biri konuşacak demiştim,” diyor. “Belki kimse konuşmayacak. Belki konuşabilecek olanlar da susmayı seçecek. Ben de artık bekleyemiyorum.”",
"Bu videoyu üç kez izliyorsun. Çekmecenin anahtarı cebinde."
], secenekler: [
{ t: "Çekmeceyi açar, defteri çıkarırsın. Ama yalnızca bakarsın.", to: "z1", etki: { hakikat: 1 } },
{ t: "Bağışı ikiye katlarsın.", to: "z1", etki: { sadakat: 1 } },
{ t: "Elif'e uzun bir mektup yazarsın. Göndermezsin.", to: "z1", etki: { hakikat: 1, gonderilmeyen: true } },
{ t: "Videoyu kapatırsın. Bir daha açmazsın.", to: "z1", etki: { huzur: 1 } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
z1: { saat: "Haziran 2024", baslik: "Mevlit", metin: [
"Babanın ölümünün üzerinden sekiz ay geçti. Akrabalar bir mevlit düzenlemiş; annenin evinde, salonda. Yüz kişi kadar.",
P(function(d){ return d.kamu; }, "Ama yüz kişi gelmedi. Yirmi kişi geldi. Haberden sonra akrabaların çoğu çekildi. Gelenler sana bakmıyor; annene bakıyor, sonra yere."),
P(function(d){ return !d.kamu; }, "Herkes geldi. Eski çalışanlar, belediyeden birileri, babanın mühendis arkadaşları. Herkes sana sarılıyor, “Ne kadar dürüst bir adamdı,” diyor."),
"Bir amcan kalkıp konuşuyor. Babanın gençliğini, ilk şantiyesini, ilk binasını anlatıyor.",
P(function(d){ return !d.kamu; }, "“Nuri,” diyor, “bu memlekette dürüstlüğün timsaliydi. Bir kez bile bir çivi eksik çakmadı. Bunu herkes bilir.” Salonda başlar sallanıyor."),
P(function(d){ return d.kamu; }, "“Nuri,” diyor, “hata yaptı. Büyük bir hata. Ama benim kardeşimdi.” Sesi titriyor. “Kızı doğruyu söyledi. Biz de doğruyu söyleyelim: onu hâlâ seviyoruz. Bu da bir doğru.”"),
"Hoca duaya başlıyor. Salon sessiz. Annen ön sırada, gözleri kapalı.",
"Bir çivi eksik çakmadı. Ya da, belki: her şeyi biliyoruz ve yine de seviyoruz. Hangisi söylendiyse, sen o salonda, o cümlenin ortasında oturuyorsun."
], secenekler: [
{ t: "Kalkıp bir şey söylersin. Ne olursa.", to: "z2", etki: { hakikat: 1, mevlitte_konustu: true } },
{ t: "Dua bitene kadar oturursun. Bu bir dua, bir mahkeme değil.", to: "z2", etki: { sadakat: 1 } },
{ t: "Salondan çıkıp babanın çalışma odasına gidersin.", to: "z2", etki: { huzur: 1, odaya: true } },
{ t: "Annenin yanına oturup elini tutarsın.", to: "z2", etki: { sadakat: 1, anne_yaninda: true } }
]},

z2: { saat: "Haziran 2024", baslik: "Annenin Sırrı", metin: [
P(S("z1A"), "Kalktın. Salon sustu. Ne söyleyeceğini bilmeden ağzını açtın ve yalnızca şu çıktı: “Babam bir insandı.” Sonra oturdun. Kimse bir şey demedi. Bazı cümleler bir mahkemeden daha uzun sürer."),
P(S("z1B"), "Dua bitti. İnsanlar dağıldı. Bir kadın, hiç tanımadığın biri, kapıda elini tuttu: “Baban bana bir iyilik yapmıştı. Yıllar önce. Kimse bilmez.” Gitti. Bir adamın içinde bir sürü adam."),
P(S("z1C"), "Çalışma odası boş. Masa toplanmış, raflar boşaltılmış. Yalnızca kilitli çekmece, artık kilitsiz. Masanın başına oturdun; babanın oturduğu yere. Pencereden bahçe görünüyordu. Babanın kırk yıl baktığı bahçe."),
P(S("z1D"), "Annenin eli soğuktu. Dua boyunca bırakmadı. Sonunda kulağına eğildi: “Gece kal,” dedi. “Sana anlatmam gereken bir şey var.”"),
"Gece. Annenin mutfağı. Annen iki bardak çay koymuş.",
"“Sana söylemediğim bir şey var,” diyor. “Baban o gece ağlayarak bana anlattığında, ertesi gün savcıya gidip her şeyi söyleyecekti. Kararını vermişti.”",
"Bardağını çeviriyor.",
"“Ben vazgeçirdim onu. ‘Nesrin'i düşün,’ dedim. ‘Kızını hapisteki bir babayla mı büyüteceksin? Rahmi'nin kızı zaten babasız kaldı, bir de seninki mi?’ Bütün gece konuştum. Sabah ifadeye gitti ve benim istediğim gibi konuştu.”",
"Annen sana bakıyor.",
"“O defteri ben yazdırdım, Nesrin. Söyleyemediği her şeyi bir yere yazsın diye. Konuşmasın diye.”"
], secenekler: [
{ t: "“Neden bunu şimdi söylüyorsun?”", to: "z3", etki: { hakikat: 1 } },
{ t: "Uzun süre hiçbir şey söylemezsin.", to: "z3", etki: { huzur: 1 } },
{ t: "“Seni anlıyorum,” dersin. Ve bundan korkarsın.", to: "z3", etki: { sadakat: 1, anladi: true } },
{ t: "“Babamı sen mi öldürdün?” diye sorarsın. Kalbinden. Yirmi dört yıllık bir sır.", to: "z3", etki: { hakikat: 1, sert: true } }
]},

z3: { saat: "Temmuz 2024", baslik: "Çınar Parkı", metin: [
P(S("z2A"), "“Çünkü sen kendi kararını verdin,” dedi annen. “Ve ben senin, benim gibi olmadığını görmek istedim. Ya da benim gibi olduğunu.” Bir an durdu. “Hangisi olduğunu hâlâ bilmiyorum.”"),
P(S("z2B"), "Sustun. Annen de. Çay bardakları soğudu. Saat ikiye doğru annen kalktı, saçını okşadı; küçükken yaptığı gibi. “Uyu,” dedi. Uyumadın."),
P(S("z2C"), "“Anlıyorsun,” dedi annen. Gülümsedi; hüzünlü, rahatlamış. “Ben de bundan korkuyordum.”"),
P(S("z2D"), "Annen sana uzun süre baktı. “Belki,” dedi. “Kalbi sessizlikten yoruldu. Doktor öyle demedi ama ben biliyorum. Ben onu susturdum ve sessizlik onu öldürdü.” Hiç ağlamadı. Bunu hiç ağlamadan söyledi."),
"Temmuzda Gölcük'e gidiyorsun.",
"Çınar Apartmanı'nın yerinde küçük bir park var. Birkaç bank, birkaç çınar fidanı. Ortada mermer bir anıt. Üzerinde otuz bir isim.",
"Okuyorsun. Tek tek. Bir aile: anne, baba, iki çocuk. Bir yaşlı çift. Bir öğrenci. Zeynep Yılmaz, yedi yaşında.",
"Listenin en altında, ayrı bir satırda, daha küçük harflerle, yakın zamanda eklenmiş gibi: “Rahmi Kara (1951–2004). Çınar'ın otuz ikinci kurbanı.”",
P(function(d){ return !d.kamu && !d.dava; }, "Bu satırı Elif mi ekletmiş? Derneği mi? Bilmiyorsun. Ama bu taşın üzerine, otuz bir isimden sonra, bir otuz ikinci isim yazılmış ve bu ismin neden orada olduğunu bilen, dünyada yalnızca birkaç kişi var."),
P(function(d){ return d.kamu || d.dava; }, "Bu satır yeni. Haberlerden sonra eklenmiş. Otuz ikinci isim. Senin konuşman sayesinde bir taşa kazınmış bir isim."),
"Bankta biri oturuyor. Yaşlı bir kadın, elinde bir poşet ekmek, güvercinleri besliyor."
], secenekler: [
{ t: "Anıtın önüne çömelip otuz iki ismi bir kez daha, yüksek sesle okursun.", to: "z4", etki: { hakikat: 1, okudu: true } },
{ t: "Yaşlı kadının yanına oturursun.", to: "z4", etki: { sadakat: 1, kadin: true } },
{ t: "Anıtın dibine bir çınar yaprağı bırakırsın.", to: "z4", etki: { huzur: 1 } },
{ t: "Rahmi Kara'nın adının üstüne elini koyarsın.", to: "z4", etki: { hakikat: 1, rahmi_el: true } }
]},

z4: { saat: "Temmuz 2024", baslik: "Son Sayfa", metin: [
P(S("z3B"), "Yaşlı kadın sana ekmeğin yarısını uzattı. Güvercinlere attın. “Ben burada otururum her gün,” dedi. “Kimseyi kaybetmedim. Ama birinin burada oturması gerekir, değil mi?” Ne diyeceğini bilemedin."),
P(S("z3D"), "Taş soğuk değildi; temmuz güneşinde ısınmıştı. Elinin altında beş harf. Bir adamın adı, bir başka adamın suçu, bir kızın yirmi dört yılı."),
P(function(d){ return !d.yakti; }, "Akşam otelde, defteri açıyorsun. Son sayfa. Hiç okumadığın sayfa. Tarih: üç ay önce. Babanın ölümünden üç hafta önce."),
P(function(d){ return d.yakti; }, "Akşam otelde gözlerini kapıyorsun ve son sayfayı hatırlamaya çalışıyorsun. Yalnızca bir kelime görmüştün, alev onu yutmadan önce: “kızım.” Gerisini bilmiyorsun. Gerisini hiçbir zaman bilmeyeceksin. Ya da şimdi, burada, kendin yazacaksın."),
P(function(d){ return !d.yakti; }, "“Nesrin, kızım. Bunu okuyorsan ben yokum ve sen çekmeceyi açtın. Annen açmazdı. Sen açarsın; çünkü sen benden daha cesursun.”"),
P(function(d){ return !d.yakti; }, "“Ne yapacağına sen karar ver. Ben veremedim. Yirmi dört yıl boyunca her sabah karar vermeye çalıştım ve her sabah ertesi güne bıraktım. Rahmi'yi aradım, sesini duyamadım; kızını aradım, konuşamadım. Kalbim yoruldu. Belki de bu yüzden.”"),
P(function(d){ return !d.yakti; }, "“Beni affetmeni istemiyorum. Ama bilmeni istiyorum: seni o kestane ağaçlı odada büyütürken, her gece pencereden ağaca bakıp düşündüm. Bu ağacı kim dikti? Otuz bir kişi. Sen. Ben. Hepimiz.”"),
"Son sayfa. Bir babanın son sözü. Ya da bir babanın son sözünün yokluğu.",
"Şimdi kalem senin elinde."
], secenekler: [
{ t: "Onu affedersin.", to: "bs", etki: { affetti: true, sadakat: 1 } },
{ t: "Onu affetmezsin. Bu senin affedebileceğin bir şey değil.", to: "bs", etki: { affetmedi: true, hakikat: 1 } },
{ t: "Hem affeder hem affetmezsin. İkisi de doğru.", to: "bs", etki: { ikisi: true } },
{ t: "Bir sayfa açıp kendi notunu yazarsın. Ege için.", to: "bs", etki: { kendi_not: true, hakikat: 1 } }
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
son_hakikat: { son: true, baslik: "Hakikat", metin: [
P(function(d){ return d.kamu; }, "Bir yıl sonra mahkeme yargılamanın yenilenmesine karar verdi. Rahmi Kara'nın mahkûmiyeti, ölümünden yirmi yıl sonra kaldırıldı. Elif mahkeme salonunda ayağa kalktı, babasının fotoğrafını göğsüne bastırdı ve hiçbir şey söylemedi."),
P(function(d){ return d.dava && !d.erteleme; }, "Dava bir buçuk yıl sürdü. Defter, senin tanıklığın, Elif'in yirmi dört yıllık dosyası. Rahmi Kara'nın mahkûmiyeti kaldırıldı. Elif kararı duyduğunda sana döndü. Salonda, herkesin önünde, sana sarıldı. Kısa, sert, neredeyse acı veren bir sarılma."),
P(function(d){ return d.erteleme; }, "Annen ertesi bahar öldü. Bir hafta sonra Elif'i aradın. “Şimdi,” dedin. Dava bir yıl sürdü. Rahmi Kara'nın mahkûmiyeti kaldırıldı. Annenin mezarına bir gün bunu anlatmaya gittin; dinlediğinden emin değilsin."),
"Babanın adı şimdi otuz bir kişinin ölümüyle anılıyor. Çınar Parkı'ndaki anıtın üstünde değil; ama herkesin aklında.",
P(function(d){ return d.buro_kapandi; }, "Büro kapandı. Bir devlet dairesinde, deprem dayanıklılığı denetiminde çalışıyorsun. Maaş az. Ama her imzaladığın raporu iki kez okuyorsun. Üç kez."),
P(function(d){ return !d.buro_kapandi; }, "Büro küçüldü. Kapıdaki tabelayı değiştirdin: artık yalnızca adın yazıyor. Soyadsız. Müşterilerin bazıları gitti; bazıları, tam da bu yüzden geldi."),
"Gerçek hiçbir şeyi geri getirmedi. Otuz bir kişi hâlâ ölü. Rahmi Bey hâlâ cezaevinde, kalp krizinden ölmüş. Baban hâlâ yirmi dört yıl boyunca susmuş bir adam.",
"Ama bir şey değişti: bir kız, babasının masum olduğunu ilk kez bir mahkeme kararında okudu. Ve bir başka kız, babasının suçlu olduğunu ilk kez yüksek sesle söyledi. Belki hakikat budur: kimseyi kurtarmaz, ama herkesin nerede durduğunu gösterir.",
P(function(d){ return d.affetti; }, "Babanı affettin. Hakikati söyledikten sonra. Belki ancak o zaman affedilebilirdi."),
P(function(d){ return d.affetmedi; }, "Babanı affetmedin. Ama onu anlattın; bütün yüzleriyle. Belki bu, affetmekten daha dürüst bir şey.")
]},

son_iki_kiz: { son: true, baslik: "İki Kız", metin: [
"Mahkemeye gidilmedi. Elif öyle istedi ya da öyle kabul etti.",
"“Bilmek istiyordum,” dedi bir gün. “Yalnızca bilmek. Şimdi biliyorum. Bir mahkeme bana bundan fazlasını veremez. Ama senin annene, senin oğluna, senin hayatına çok şey yapabilir. Ben babamın adını temizlemek için bir başka çocuğun babasının adını kirletmek istemiyorum. Bu babamın da isteyeceği bir şey değil.”",
"Bu kararın bir lütuf mu, bir yük mü olduğunu bilmiyorsun. Elif'in verebileceği en büyük şeyi verdi: seni affetmedi ama seni korudu.",
P(function(d){ return d.elif_el; }, "Bazen buluşuyorsunuz. İzmit'te, sahilde, bir çay bahçesinde. Babalarınızdan konuşuyorsunuz; ikisinden de. Elif sana Rahmi Bey'in nasıl güldüğünü anlatıyor. Sen ona babanın nasıl ağladığını. İki kız, iki baba, bir bina."),
P(function(d){ return !d.elif_el; }, "Yılda bir, 17 Ağustos'ta, Çınar Parkı'nda karşılaşıyorsunuz. Konuşmuyorsunuz. Yan yana duruyorsunuz, otuz iki ismin önünde, bir saat. Sonra ayrılıyorsunuz. Bu da bir dil."),
"Gerçek iki kişinin arasında kaldı. Bir sır, artık iki kişilik. Belki dünya bunu hiç öğrenmeyecek. Belki Ege, ya da Elif'in bir öğrencisi, bir gün öğrenecek.",
"Bazen düşünüyorsun: hakikat bir mahkemede mi yaşar, yoksa iki insanın arasında mı? Bir gerçek, onu bilmesi gereken kişi bildiğinde, tamamlanmış sayılır mı?",
"Elif bir gün sana Rahmi Bey'in son mektubunu gösterdi. Cezaevinden. Son satır: “Kızım, kimseye kin tutma. Kin, insanın kendi kalbini yer.” Babanın kalbi sessizlikten yoruldu. Rahmi Bey'inki kinden korunmaya çalışırken. İki kalp, aynı binanın altında kaldı."
]},

son_kefaret: { son: true, baslik: "Sessiz Kefaret", metin: [
"Bağışlar her ay düzenli gidiyor. Elif'in derneği büyüdü; deprem davalarında başka ailelere de yardım ediyor. Bir binada bir avukat, bir psikolog, bir oda dolusu dosya. Hepsinin parası, kimsenin bilmediği bir kaynaktan.",
"Elif bir gün bir ödül aldı. Konuşmasında “isimsiz bir dosta” teşekkür etti. Sen salonun arkasındaydın. Alkışladın.",
"Rahmi Bey'in adı temizlenmedi. Yargılamanın yenilenmesi reddedildi; delil yetersiz. Delil çekmecende.",
"Bir şeyi telafi etmek ile bir şeyi itiraf etmek arasında bir fark var. Sen birincisini seçtin. Paran Elif'in hayatını kolaylaştırdı; gerçeğin onu özgürleştirebileceği şekilde değil, ama kolaylaştırdı.",
P(function(d){ return d.babam_isterdi; }, "Elif'e babanın pişman olduğunu söylemiştin. Hiç söylemediği bir şeyi. Elif bunu bir ödül konuşmasında tekrarladı: “Suçlu bile pişman oldu.” Babana bir yalan armağan ettin. Bu armağanın sahibi artık sensin."),
"Gece bazen defteri çekmeceden çıkarıyorsun. Açmıyorsun. Kapağındaki yıla bakıyorsun: 1993. Sonra geri koyuyorsun. Kilitliyorsun.",
"Anahtarı Ege'ye bırakacaksın. Bir gün. Belki bir mektupla. Belki mektupsuz.",
"Babanın yaptığını yaptığını biliyorsun. Bir farkla: o hiçbir şey vermedi. Sen her ay bir şey veriyorsun. Bu fark, bir babayı ondan farklı bir kız yapar mı? Bunu çekmeceye sormak istiyorsun. Çekmece susuyor."
]},

son_kul: { son: true, baslik: "Kül", metin: [
"Defter yok. Kül bir kavanozda ya da bir gül fidanının dibinde ya da rüzgârda.",
"Elif hâlâ bekliyor. Videoları seyrekleşti. Son videosunda saçlarında beyazlar vardı.",
P(function(d){ return d.ege_bilir; }, "Ege biliyor. Senin anlattığın kadarıyla. Bir gün sana sordu: “Anne, neden yaktın?” Cevap verdin: “Seni korumak için.” Ege bir süre düşündü. “Dedem de annemi korumak için mi sustu?” Cevap vermedin."),
P(function(d){ return d.egeye_yalan; }, "Ege'ye yalan söyledin. Kâğıt parçası onun çekmecesinde; sen cüzdanına koydun sandın, o bir fotoğrafını çekmişti. Bir gün, belki yirmi yıl sonra, kendi çekmecesinde bulacak. Ve kendi kararını verecek."),
"Huzur buldun mu? Bazı günler evet. Babanın gül fidanı bu bahar çok çiçek açtı; Tarık bunun gübreden olduğunu söyledi. Sen bilmiyorsun neyden olduğunu.",
"Bir gerçeği yakmak, onu yok etmez. Yalnızca taşıyıcısını değiştirir. Babanın defteri artık sende; kâğıtta değil, içinde. Ve içindeki defter, kâğıttakinden daha ağır, çünkü onu kimseye veremezsin.",
"Annen öldüğünde cenazesinde Elif'i gördün. Arkada, kalabalığın en dibinde. Seni gördü. Başıyla selam verdi. Bir şey biliyor mu? Bilmiyor mu? Bu soruyu, bir ömür boyu, kül gibi taşıyacaksın."
]},

son_babasinin: { son: true, baslik: "Babasının Kızı", metin: [
"Hayatın devam etti. Okul projesi bitti; açılışında bir kurdele kestin. Çocuklar koşuşturdu. Bina sağlam; her demiri kendin kontrol ettin. Üç kez.",
"Defter bir yerde. Ya da hiçbir yerde. Fark etmez; artık onun ne olduğunu biliyorsun ve bilmek, hiçbir şey yapmamak için yeterli bir sebep olmadı. Babanın da olmamıştı.",
"Elif'in videolarına bakmıyorsun. Bir keresinde bir akşam, yanlışlıkla, önerilenlerde çıktı. Kapattın.",
"Mevlitte amcanın söylediği cümle bazen kulağında: “Bir kez bile bir çivi eksik çakmadı.” Bu cümleyi kimse düzeltmedi. Sen de.",
P(function(d){ return d.affetti; }, "Babanı affettin. Belki bu yüzden onun gibi davranabildin. Affetmek, bazen, aynı şeyi yapmaya izin vermektir."),
P(function(d){ return d.kendi_not; }, "Defterin son sayfasının arkasına bir not yazdın. Ege için. “Oğlum, ben de dedemin yaptığını yaptım. Sen yapma.” Bir babanın kendi çocuğuna yapamadığı şeyi yapmamasını söylemesi. Belki de her kuşak bunu yapıyor."),
"Bir gece Ege'yi uyurken izliyorsun. Yirmi yaşında. Yarın sınavı var. Yüzü huzurlu.",
"Babanın da seni böyle izlediğini düşünüyorsun; kestane ağaçlı odada. O da bir şeyi korumak için susmuştu: bu yüzü, bu uykuyu, bu huzuru.",
"Şimdi anlıyorsun onu. Ve onu anladığın için, kendinden biraz korkuyorsun."
]}

},

ayna: function(d){
  var out = [];
  var h = d.hakikat, s = d.sadakat, z = d.huzur;
  if(h >= s && h >= z) out.push("Bu hikâyede en çok hakikate yaslandın. Bir babanın adını, bir ailenin huzurunu, bir mesleğin geleceğini bir gerçeğin karşısına koydun. Hakikat seni temize çıkarmadı; ama seni babandan ayırdı.");
  else if(s >= z) out.push("Bu hikâyede en çok sadakate yaslandın: babana, annene, ailene, soyadına. Sevdiklerini korumak istedin. Babanın da tam olarak bunu yaptığını biliyorsun.");
  else out.push("Bu hikâyede en çok huzura yaslandın: kapıları kapatmaya, sayfaları yakmaya, telefonları susturmaya. Huzur bir sığınaktı. Ama sığınaklar, dışarıdaki fırtınayı durdurmaz.");
  if(d.yirtti) out.push("Defterden bir sayfa yırttın. Gerçeği bir yerden koparıp başka bir yere taşıdın; yok etmeden.");
  if(d.yalan) out.push("Elif'e bir yalan söyledin. Babanın yirmi dört yıl söylediği yalanın küçük bir kardeşi.");
  if(d.anladi) out.push("Annenin sırrını dinledin ve onu anladığını söyledin. Bir sırrı anlamak, onu tekrarlamanın ilk adımıdır; ya da onu kırmanın.");
  if(d.ege_bilir) out.push("Gerçeği oğluna anlattın. Bir sırrın kuşaktan kuşağa geçişini, en azından bir kez, durdurdun.");
  if(d.egeye_yalan) out.push("Oğluna yalan söyledin. Annenin sana söylediği gibi; babanın annene söylettiği gibi.");
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
