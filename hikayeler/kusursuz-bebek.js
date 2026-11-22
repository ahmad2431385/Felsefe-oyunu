(function(){
var S = function(id){ return function(d){ return d.son === id; }; };
var P = function(f, t){ return { if: f, t: t }; };

window.HIKAYELER = window.HIKAYELER || [];
window.HIKAYELER.push({
id: "kusursuz-bebek",
baslik: "Kusursuz Bebek",
dunya: "Hayali dünya · 2041",
kategoriler: ["Sağlık ve Tıp", "Toplum ve Adalet", "Kimlik ve Beden"],
giris: "2041. Embriyolar rutin olarak taranıyor, genler düzeltiliyor, “ağır engellilik” taşıyan doğumlar yasayla önleniyor. Sen bir genetik danışmansın; kardeşin, artık neredeyse hiç doğmayan bir durumla, Down sendromuyla yaşayan bir simitçi. Bir gün karşına, kendileri gibi işitme engelli bir çocuk isteyen bir çift oturuyor. Bir toplumun “kusur” dediği şeyin ve bir ailenin “biz” dediği şeyin hikâyesi.",
kavramlar: ["Engellilik ve değer", "İyileştirme ve doğallık", "Ebeveyn sevgisi", "Normalin tanımı"],
ozet: "2041. Embriyolar taranıyor, genler düzeltiliyor, “kusurlu” doğumlar yasakla önleniyor. Sen bir genetik danışmansın ve kardeşin Down sendromlu. Bugün karşına, kendileri gibi işitme engelli bir çocuk isteyen bir çift oturuyor.",
baslangic: "a1",
durum: { cesitlilik: 0, yasa: 0, sefkat: 0 },

sahneler: {

a1: { saat: "Mart 2041", baslik: "Merkez", metin: [
"Ankara, Eskişehir yolu. Camdan bir bina. Cephede dev bir ekran, ekranda gülümseyen bir bebek: “Kusursuzluk bir haktır. Yeni Nesil Üreme ve Genetik Merkezi.” Bebeğin bir gözü, ekranın bozuk pikselleri yüzünden üç gündür yeşil yanıp sönüyor.",
"Adın Aslı, otuz dokuz yaşındasın, genetik danışmansın. Masanda bir embriyo modeli, bir bilgisayar ve kâğıt bir poşet: kardeşin Gökhan'ın fırınından, sabah sıcak simit. Poşetin üstüne keçeli kalemle “ABLAMA” yazmış, “M” ters.",
"2039 tarihli Kalıtsal Hastalıkların Önlenmesi Kanunu: tüp bebek tedavisinde bütün embriyolar taranır, “ağır kalıtsal engellilik” taşıyanlar aktarılamaz. Listede kırk yedi durum var. Down sendromu listede. Doğuştan işitme kaybı listede.",
"Kanundan beri Down sendromlu doğumlar yüzde ikiye inmiş. Gökhan o rakamın arka tarafında duruyor. Otuz beş yaşında, Keçiören'in en iyi simitçisi.",
"İlk randevu: Selim ve Nehir Aydın. Dosyada not: “Çift işitme engellidir. Türk İşaret Dili tercümanı talep edilmiştir.” Sekreterin el yazısıyla bir not daha: “Özel bir talepleri var.”",
"Simidin yarısını yiyip yarısını poşete geri koyuyorsun. Susamlar klavyenin arasına dökülüyor. Kapı çalınıyor."
], secenekler: [
{ t: "Kapıyı kendin açıp elini uzatırsın.", to: "a2", etki: { sefkat: 1 } },
{ t: "Dosyayı bir kez daha okursun. “Özel talep” ne olabilir?", to: "a2", etki: { yasa: 1, dosya: true } },
{ t: "İşaret dilinde bildiğin tek kelimeyi hatırlamaya çalışırsın: “Merhaba.”", to: "a2", etki: { cesitlilik: 1, merhaba: true } },
{ t: "Pencereden reklama bakarsın. Yanıp sönen yeşil göze.", to: "a2", etki: { reklam: true } }
]},

a2: { saat: "Mart 2041", baslik: "İşaret", metin: [
P(S("a1A"), "Kapıyı açıp elini uzattın. Selim sıktı; Nehir bir an baktı, sonra o da sıktı. Arkalarında tercüman Gül gülümsedi."),
P(S("a1B"), "Dosyayı yeniden okudun. “Özel talep: işitme durumu.” Başka bir şey yazmıyordu. Ne olabileceğini tahmin ettin. Yanılmış olmayı istedin."),
P(S("a1C"), "Kapıyı açınca elini kaldırıp merhaba dedin. Nehir gülümsedi, elini tutup parmaklarını doğru yere koydu. Daha oturmadan bir ders aldın."),
P(S("a1D"), "Reklamdaki bebeğin gözü yanıp söndü. Altı yıldır bu reklamın altında çalışıyorsun. Bir keresinde arızayı bildirmek için bir form doldurmuştun. Kimse gelmemişti."),
"Selim kırk yaşlarında, uzun, mimar. Nehir otuz altı, bir sağırlar okulunda öğretmen. Tırnaklarında tebeşir tozu. Gül yanlarında, elleri hazır.",
"Selim işaret ediyor. Elleri hızlı, keskin. Gül çeviriyor:",
"“Biz sağırız. İkimiz de doğuştan. Annem, babam, dedem sağırdı. Dört kuşak. Bizim evde konuşulan dil işaret dili.”",
"Nehir ekliyor. Onun elleri daha yavaş:",
"“Embriyolarımız taranacak. Bazıları sağır olacak. İkimiz de aynı geni taşıyoruz. Biz o embriyolardan birini istiyoruz. Sağır bir çocuk.”",
"Gözünü senden ayırmadan:",
"“Bizim için eksiklik değil. Bir dil. Bir aile. İşiten bir çocuk bizim evde yabancı olur.”"
], secenekler: [
{ t: "Kanunu açıklarsın: işitme kaybı listede, aktarım yasak.", to: "a3", etki: { yasa: 2, kanun: true } },
{ t: "Nehir'e çocukluğunu sorarsın.", to: "x_cocukluk", etki: { cesitlilik: 1 } },
{ t: "“Çocuğunuzun kendi geleceğini seçme hakkı ne olacak?” diye sorarsın.", to: "a3", etki: { yasa: 1, acik_gelecek: true } },
{ t: "Onlardan sana bir işaret öğretmelerini istersin: “aile”.", to: "x_isaret", etki: { cesitlilik: 1, sefkat: 1 } }
]},

x_cocukluk: { saat: "Mart 2041", baslik: "Bağlı Eller", metin: [
"Nehir bir süre sana bakıyor. Sonra ellerini kucağına indiriyor. Sonra başlıyor.",
"Gül'ün sesi alçalıyor:",
"“Annemle babam işitiyordu. Doktor ‘sağır’ deyince annem iki yıl ağlamış. Beni konuşturmaya çalıştılar. Bir okula verdiler. İşaret dili yasaktı. Ellerimizle konuşursak ellerimizi arkamızdan bağlarlardı. Dudaktan okuyacaktık.”",
"Nehir bileklerini arkasında çaprazlayıp gösteriyor. Sonra ellerini yeniden öne getiriyor, bir süre masanın üstünde düz tutuyor.",
"“On beş yaşında bir yaz kampında ilk kez sağır çocuklarla tanıştım. İlk akşam onların ellerini izledim. İkinci akşam ben de konuştum. Bir dilim oldu.”",
"Selim karısının bileğini tutuyor. Tam bağlandığı yerden.",
"“Annem öldüğünde hâlâ birbirimizi anlamıyorduk. Beni sevdi, ben onu sevdim. Otuz yıl aynı evde iki yabancı. Annemin son sözünü bir hemşireden öğrendim, kâğıda yazdı. Ben bunu çocuğuma yaşatmayacağım.”"
], secenekler: [
{ t: "“İşiten bir çocuk da sizin dilinizi öğrenebilir,” dersin.", to: "a3", etki: { yasa: 1, isiten_ogrenir: true } },
{ t: "“Anlıyorum,” dersin.", to: "a3", etki: { sefkat: 1 } },
{ t: "Kardeşin Gökhan'dan bahsedersin.", to: "a3", etki: { cesitlilik: 1, ozan_anlatti: true } },
{ t: "Bir şey demezsin. Ellerini izlersin.", to: "a3", etki: { cesitlilik: 1 } }
]},

x_isaret: { saat: "Mart 2041", baslik: "Aile", metin: [
"Selim gülümsüyor. Ellerini yavaşça, senin görebileceğin hızda kaldırıyor. Parmak uçlarını birleştirip bir daire çiziyor. Bir çatı gibi.",
"“Aile,” diyor Gül.",
"Deniyorsun. Daire yamuk çıkıyor. Selim ellerini tutup düzeltiyor. Avuçları kuru ve sıcak, işaret parmağında bir cetvel nasırı. Bir daha. Daha iyi.",
"Nehir başka bir işaret gösteriyor: avucu kalbin üstüne, sonra dışarı. “Sevgi.” Sonra iki parmak, gözlerin önünden ileri. “Görmek.”",
"Gül aracılığıyla soruyorsun: “Sessizlik için bir işaret var mı?”",
"Selim ile Nehir bakışıyor. Selim gülerek uzun uzun işaret ediyor. Gül biraz bekliyor, sonra:",
"“Var ama kullanmayız. Siz bizi sessizlikte yaşıyor sanıyorsunuz. Bizim ev eller, yüzler, ışık, titreşimle dolu. Komşunun matkabı duvardan geçer, biz hissederiz, o bizden daha çok rahatsız eder.”"
], secenekler: [
{ t: "“Ama çocuğunuz işitirse ikisine birden sahip olabilir,” dersin.", to: "a3", etki: { yasa: 1, ikisi: true } },
{ t: "“Aile” işaretini bir kez daha, düzgünce yaparsın.", to: "a3", etki: { sefkat: 1, cesitlilik: 1 } },
{ t: "“Bunu kanunu yapanlara anlatmanız gerek,” dersin.", to: "a3", etki: { cesitlilik: 1, kanun_yapan: true } },
{ t: "Defterine not alırsın: sessizlik bir yokluk değil.", to: "a3", etki: { cesitlilik: 1 } }
]},

a3: { saat: "Mart 2041, akşam", baslik: "Gökhan", metin: [
P(S("x_cocuklukB"), "“Anlıyorum,” demiştin. Nehir başını eğmiş, sonra bir şey eklemişti: “Anlamak başka.” Gül cümlenin devamını çevirmemişti; Nehir de devam etmemişti."),
P(S("x_cocuklukD"), "Bir şey dememiş, Nehir'in ellerini izlemiştin. Bir ara Nehir durup sana baktı, sonra devam etti. Bakıldığını bilmek hoşuna gitmiş gibi."),
P(S("x_isaretA"), "“İkisine birden sahip olabilir,” demiştin. Selim ellerini indirmişti. “Herkes bunu söylüyor,” dedi. “İkisinin arasında yaşayan kimse söylemiyor.”"),
P(S("x_isaretD"), "Not almıştın. Akşam fırına giderken defteri açıp o satıra baktın. Altına Selim'in matkap cümlesini de yazmıştın."),
P(S("a2A"), "Kanunu açıkladın: madde dokuz, liste, aktarım yasağı. Selim'in elleri durdu. Nehir başını eğdi. Sonra Selim: “Biliyoruz. Bir yol arıyoruz. Bu yüzden buradayız.”"),
P(S("a2C"), "Selim'in cevabını Gül çevirdi: “Siz işiten bir çocuğa açık bir gelecek veriyorsunuz. Biz sağır bir çocuğa bir aile veriyoruz. Hangisi daha açık?”"),
P(S("x_cocuklukA"), "“Öğrenebilir,” dedi Nehir. “Annem de öğrenebilirdi. Öğrenmedi.”"),
P(S("x_cocuklukC"), "Gökhan'ı anlattın. Nehir dinledi. Sonra işaret etti: “Kardeşiniz bugün doğsaydı bu binada ne olurdu?” Gül çevirirken sesi kırıldı. Cevap veremedin."),
P(S("x_isaretB"), "“Aile” işaretini yaptın, düzgün. Selim ile Nehir aynı anda güldü. Bir yabancının elinde kendi dillerini görmek, yüzlerinden belliydi."),
P(S("x_isaretC"), "Selim acı acı güldü. “Anlattık,” dedi Gül. “Komisyonda. Beş dakika verdiler. Sonra bir sağlık ekonomisti yarım saat konuştu: bir işitme engellinin topluma maliyeti.”"),
"Akşam Gökhan'ın fırınındasın. Keçiören'de köşe başında küçük bir dükkân. Camında “SİMİT POĞAÇA AÇMA” yazıyor, “AÇMA”nın “Ç”si düşmüş. Gökhan un içinde, simit diziyor. Sabah dörtte kalkıyor, her gün.",
"Seni görünce unlu elleriyle sarılıyor. Montunun sırtında iki beyaz el izi kalıyor. “Abla! Bugün kaç kusursuz bebek yaptınız?”",
"Reklamı otobüsten her gün görüyor. Şaka yapıyor. Gözleri şaka yapmıyor.",
"“Bugün bir teyze geldi,” diyor. “Bana baktı, ‘Artık senin gibiler doğmuyor, değil mi?’ dedi. Ben de ‘Evet teyze, ben sonuncuyum,’ dedim. Güldü. İki simit aldı.”",
"Simitlere bakıyor. Sonra sana dönüyor.",
"“Abla, ben kusurlu muyum?”"
], secenekler: [
{ t: "“Hayır Gökhan. Sen kusursuz bir simitçisin,” dersin.", to: "a4", etki: { sefkat: 1, simit: true } },
{ t: "“Kimse kusursuz değil. Ben de değilim,” dersin.", to: "a4", etki: { cesitlilik: 1 } },
{ t: "“Neden öyle düşünüyorsun?” diye sorarsın.", to: "a4", etki: { sefkat: 1, ozan_dusun: true } },
{ t: "Cevap veremezsin. Ona sarılırsın.", to: "a4", etki: { sefkat: 1, sarildi: true } }
]},

a4: { saat: "Mart 2041", baslik: "Direktör", metin: [
P(S("a3A"), "Gökhan güldü. “Kusursuz simitçi. Tabelaya yazalım.” Sonra ciddileşti. “Ama ben simitçi olmadan önce de vardım abla.”"),
P(S("a3B"), "Gökhan düşündü. “Senin neyin kusurlu?” Cevap bulamadın. Gökhan güldü: “Bilmiyorsun bile. Ben en azından biliyorum.”"),
P(S("a3C"), "“Herkes öyle bakıyor,” dedi Gökhan. “Eskiden bakmazlardı. Eskiden benim gibi başkaları da vardı. Şimdi ben bir... müze gibiyim.” Kelimeyi nereden bulduğunu bilmiyorsun. Geçen ay okul gezisiyle gelen çocuklardan olabilir."),
P(S("a3D"), "Sarıldın. Gökhan'ın unlu kolları sırtında. “Tamam abla. Ağlama. Simitler soğur.”"),
"Ertesi sabah direktör Dr. Bora Ersoy seni odasına çağırıyor. Elli yaşında, spor ayakkabılı, masasında bir sıkma topu. Konuşurken topu sıkıyor.",
"“Aslı, rakamlar harika. Optimum Paket bu çeyrekte yüzde kırk arttı. Sen en iyi danışmanlarımızdansın ama paket satışların düşük. Neden?”",
"Optimum Paket: listede olmayan özellikler için seçim ve düzenleme. Boy, kas yapısı, hastalık riskleri ve “bilişsel potansiyel puanı.” Yasal, pahalı. Her çifte sunman gerekiyor. Sunuyorsun, ısrar etmiyorsun.",
"Sonra sesini alçaltıyor. “Aydın çifti. Duydum. Sağır embriyo istiyorlarmış. Tartışma yok. Lisansımız buna bağlı.”",
"Topu masaya bırakıyor. “Gelecek ay klinik koordinatörlük açılıyor. Adın listede.”"
], secenekler: [
{ t: "“Yasayı biliyorum Bora Bey. Uygulayacağım,” dersin.", to: "a5", etki: { yasa: 2 } },
{ t: "“Satışlarım düşük, çünkü çiftlere çocuklarını ürün gibi seçtirmek istemiyorum,” dersin.", to: "kus_gul", etki: { cesitlilik: 2, paket_ret: true } },
{ t: "“Aydın çiftinin durumu etik kurula gitmeli,” dersin.", to: "a5", etki: { yasa: 1, cesitlilik: 1, kurul: true } },
{ t: "Terfiyi düşünürsün. Bir şey demezsin.", to: "kus_kat", etki: { terfi_dusun: true } }
]},


kus_gul: { saat: "Mart 2041", baslik: "Gül", metin: [
"Kantinde Gül bir köşede tek başına, önünde kahve. Seni görünce el sallıyor. Sonra fark ediyorsun, el sallamıyor, işaret ediyor: “Gel.”",
"Kırklarında. Konuşurken bile elleri bir şey söylüyor.",
"“Ben CODA'yım,” diyor. “Sağır ebeveynlerin işiten çocuğu.”",
"“Beş yaşında annemin tercümanıydım. Doktorda, bankada, öğretmenle görüşmede. Babamın işten atıldığını patronundan ben duydum, ben çevirdim. Altı yaşındaydım. Babamın yüzünü hiç unutmadım. Benim ağzımdan duyduğu için.”",
"Kahvesini karıştırıyor. Kaşık bardağa hiç değmiyor, ses çıkmasın diye. “Bunu evde öğrendim. Ses çıkarmamayı değil. Sesin kimseye bir şey anlatmadığını.”",
"“Nehir ile Selim'i anlıyorum. Annemle babamı da anlıyorum. Beni çok sevdiler. Yabancı olmadım hiç. Yalnızca yorgun oldum.”",
"“Kimse bana sormadı, hangisi olmak isterdin diye.”"
], secenekler: [
{ t: "“Hangisi olmak isterdin?” diye sorarsın.", to: "a5", etki: { cesitlilik: 1, gul_sordu: true } },
{ t: "“Bunu Selim ve Nehir'e anlatır mısın?” diye sorarsın.", to: "a5", etki: { sefkat: 1, gul_anlatsin: true } },
{ t: "“Bu hikâye yasanın lehine bir argüman olabilir,” dersin, düşünerek.", to: "a5", etki: { yasa: 1 } },
{ t: "Kahveni bitirip teşekkür edersin. Düşünmek için zamana ihtiyacın var.", to: "a5", etki: { sefkat: 1 } }
]},

kus_kat: { saat: "Mart 2041", baslik: "On Beşinci Kat", metin: [
"Bora seni yeni binaya götürüyor. Yolun öbür tarafında, henüz açılmamış bir cam kule. Asansör on beşinci kata çıkıyor. İçi hâlâ naylon koruyucu kaplı.",
"Kat boş. Beyaz duvarlar, büyük pencereler. Bora bir köşeyi gösteriyor: “Senin ofisin.”",
"Koridorda kapıları açıyor. “Danışma odaları, on iki tane. Embriyo görüntüleme. Burası Optimum sunum salonu. Perdede çiftler embriyolarının on sekiz yaşındaki muhtemel yüzünü görecek.”",
"Yere dizilmiş posterler. Gülümseyen bebekler, çocuklar, gençler. Hepsi birbirine benziyor. Burun mu, gülüş mü, çıkaramıyorsun.",
"Bora pencerenin önünde. “On yıl sonra doğan her çocuğun yüzde yetmişi bu binadan geçecek. Sen o neslin mimarı olabilirsin.”",
"Aşağıda Eskişehir yolu. Bir yerde, görünmeyen bir köşede, sabah dörtte kalkıp simit yapan biri."
], secenekler: [
{ t: "“Düşüneceğim,” dersin. Gerçekten.", to: "a5", etki: { yasa: 1, terfi_dusun: true } },
{ t: "“Bu posterlerde neden hiç Down sendromlu bir çocuk yok?” diye sorarsın.", to: "a5", etki: { cesitlilik: 2, poster_soru: true } },
{ t: "Pencereden Keçiören'in yönünü bulmaya çalışırsın.", to: "a5", etki: { sefkat: 1 } },
{ t: "“Mimar bina yapar Bora Bey. İnsan değil,” dersin.", to: "a5", etki: { cesitlilik: 1, mimar: true } }
]},

a5: { saat: "Nisan 2041", baslik: "Altı Embriyo", metin: [
P(S("kus_gulA"), "Gül düşündü. Elleri senin anlamadığın bir işaret yaptı. Sesli: “İkisi. Ama kimse ikisi olmama izin vermedi.”"),
P(S("kus_gulB"), "Gül başını salladı. Ertesi hafta Selim ve Nehir'le bir kafede buluştu. Sonra Nehir sana yazdı: “Gül'ü dinledik. Bir şey değişmedi. Her şey biraz değişti.”"),
P(S("kus_gulC"), "Gül sana baktı. “Benim hayatım bir argüman mı oldu şimdi?” Kalktı. Kahvesi masada kaldı."),
P(S("kus_gulD"), "Teşekkür ettin. Gül avucunu kalbine koyup dışarı açtı."),
P(S("kus_katA"), "“Düşüneceğim,” dedin. Asansörde naylon kaplı aynada kendine baktın."),
P(S("kus_katB"), "Bora bir an durdu. “Posterleri pazarlama seçiyor,” dedi. Sonra, daha yavaş: “İyi soru.” Ertesi hafta posterler asıldı. Hâlâ hiçbiri yoktu."),
P(S("kus_katC"), "Keçiören'i buldun. Ya da bulduğunu sandın. Gri bir tepe. Bora ne baktığını sormadı."),
P(S("kus_katD"), "Bora'nın çenesi bir an kasıldı. Sonra güldü. “Felsefe,” dedi. Asansörde konuşmadınız."),
P(S("a4A"), "Bora gülümsedi, topu yeniden eline aldı. “Biliyordum.”"),
P(S("a4B"), "Bora'nın gülümsemesi dondu, sonra yerine oturdu. “Felsefe güzel. Bu bina felsefeyle ayakta durmuyor.”"),
P(S("a4C"), "“Kurul yasayı uygular,” dedi Bora. “Ama tamam, kayda geçsin. Vicdanın rahatlasın.” Bunu sana bir iyilik yapıyormuş gibi söyledi."),
P(S("a4D"), "Bir şey demedin. Bora memnun başını salladı. Odadan çıkarken sessizliğinin bir imza gibi okunduğunu düşündün."),
"Nisanda sonuçlar geliyor. Aydın çiftinin altı embriyosu. Ekranda altı satır.",
"Bir: işitme kaybı geni, iki kopya. Sağır olacak. Başka bulgu yok. İki: aynı. Üç: işiten, taşıyıcı. Dört: işiten. Bilişsel potansiyel puanı yüzde beşlik dilimde. Beş: işiten. Kalp kası hastalığı için yüksek risk.",
"Altı: kromozom yirmi bir, üç kopya. Down sendromu.",
"Altıncı satırda duruyorsun. Kanuna göre bu embriyo atılacak. Bir tıklama. Otuz beş yıl önce aynı tıklama annenin önüne konsaydı, bu sabah poşetin üstüne ters “M” yazan kimse olmazdı.",
"Bütün sonuçları çifte göstermen gerekiyor. Hangisinden başlayacağını sen seçeceksin."
], secenekler: [
{ t: "Sonuçları sırasıyla, yorum katmadan anlatırsın.", to: "a6", etki: { yasa: 1, tarafsiz: true } },
{ t: "Önce dördüncü embriyoyu anlatırsın: işiten, yüksek puanlı. Belki onları yumuşatır.", to: "a6", etki: { yasa: 1, dort_once: true } },
{ t: "Altıncı embriyodan da bahsedersin. Kardeşini anlatarak.", to: "a6", etki: { cesitlilik: 1, alti_anlatti: true } },
{ t: "Önce birinci ve ikinci embriyoyu anlatırsın. İstediklerinin var olduğunu bilsinler.", to: "a6", etki: { cesitlilik: 1, sefkat: 1 } }
]},

a6: { saat: "Nisan 2041", baslik: "Seçim", metin: [
P(S("a5A"), "Sırasıyla anlattın. Altıncıya gelince Nehir'in eli bir hareket yaptı; Gül bir an duraksadı: “O da mı atılacak?” Evet, dedin."),
P(S("a5B"), "Dördüncüyü anlattın. Selim ellerini masaya koydu, bir süre kaldırmadı. Sonra: “Bize zeki bir yabancı mı satıyorsunuz?”"),
P(S("a5C"), "Gökhan'ı anlattın: simitler, sabah dördü, ‘Ben sonuncuyum teyze.’ Nehir'in gözleri doldu. Selim işaret etti: “Kardeşiniz de bizim gibi. Var olmaması için yasa yazılmış biri.”"),
P(S("a5D"), "Birinci ve ikinciyi anlattın. Nehir'in eli karnına gitti. Henüz boş bir karna. Selim karısının omzunu tuttu."),
"Masada altı satırlık bir kâğıt.",
"Selim işaret ediyor. Gül'ün sesi artık bir tercümanın sesi gibi değil:",
"“Biz size bir şey sormuyoruz Aslı Hanım. Anlatıyoruz. İşiten bir embriyo verirseniz onu da severiz. Anne baba olacağız. Ama bu ülke bize, kendiniz gibi bir çocuk istemeniz yanlış demiş olacak.”",
"Nehir son bir işaret yapıyor. Yavaş, senin anlayacağın hızda. Avuç, kalp, dışarı. Sonra kaşları kalkık: bir soru.",
"Elleri masada duruyor."
], secenekler: [
{ t: "Yasaya uyarsın: işiten bir embriyo önerirsin, üçüncüyü. Yasal. Ama onlara bir yabancı doğurtmak pahasına.", to: "y1", etki: { yasa: 2, kol: "yasa" } },
{ t: "Birinci embriyoyu sistemde “belirsiz” işaretlersin. Aktarılabilir. On iki yıllık mesleğini bir tıklamaya koyarak.", to: "i1", etki: { cesitlilik: 2, kol: "ihlal" } },
{ t: "Çifte dava açmalarını önerirsin. Sen de tanık olacaksın. Yıllar sürebilir ve Nehir otuz altı yaşında.", to: "d1", etki: { cesitlilik: 1, yasa: 1, kol: "dava" } },
{ t: "Bir uzlaşma önerirsin: birinci embriyonun işitme genini düzeltmek. Yasal ve onların embriyosu. Ama tam da kaçtıkları şey.", to: "z1", etki: { yasa: 1, sefkat: 1, kol: "duzenle" } }
]},

/* ---------- YASA KOLU ---------- */
y1: { saat: "Nisan 2041", baslik: "Üçüncü", metin: [
P(S("a6A"), "Kâğıdı onlara çevirip parmağını üçüncü satıra koydun. Parmağının altında “taşıyıcı” kelimesi kaldı."),
P(S("i1B"), "Son anda “Onayla”yı seçtin. Parmağın öbür tuşa kaymak istedi. Kaymadı. Ertesi gün çifte üçüncüyü anlattın."),
"“Üçüncü embriyo. İşiten, taşıyıcı. Sağlıklı. Yasa bunu öneriyor. Ben de öneriyorum.”",
"Gül çeviriyor. Selim'in yüzü kıpırdamıyor. Nehir gözlerini kapatıyor.",
"Sonra Nehir gözlerini açıp işaret ediyor:",
"“Yıllardır bir çocuk istiyoruz. Üç deneme. Bu dördüncüsü. Beşincisine paramız yok.” Durup ekliyor: “Kapı buysa bu kapıdan geçeceğiz. Üçüncüyü aktarın.”",
"Selim karısına dönüp hızlı, sert işaret ediyor. Gül çevirmiyor. Aralarında bir konuşma. Sonra Selim sana dönüyor:",
"“Bir çocuğu seveceğiz. Ama bu kâğıdı imzalarken bilin: bir yasa bizim yerimize karar verdi. Siz de o yasanın elisiniz.”",
"Nehir imzalıyor. Selim bir süre kalemi parmaklarının arasında çeviriyor. Sonra o da imzalıyor. İmzası bir bina çizimi gibi düz ve keskin."
], secenekler: [
{ t: "“Haklısınız,” dersin. Başka bir şey bulamadan.", to: "y2", etki: { sefkat: 1 } },
{ t: "“Yasanın eli değilim. Ama yasanın içindeyim,” dersin.", to: "y2", etki: { yasa: 1 } },
{ t: "Bebeğe işaret dilini ilk dili olarak öğretmeleri için kaynaklar önerirsin.", to: "y2", etki: { cesitlilik: 1, kaynak: true } },
{ t: "Kâğıdı alıp sessizce dosyaya koyarsın.", to: "y2", etki: { yasa: 1 } }
]},

y2: { saat: "Mayıs – Aralık 2041", baslik: "Titreşim", metin: [
P(S("y1A"), "“Haklısınız,” dedin. Nehir'in eli imzalarken titremedi. Seninki kâğıdı alırken titredi."),
P(S("y1B"), "Gül çevirdi. Selim düşündü, sonra ellerini kaldırdı: “Biz de.”"),
P(S("y1D"), "Kâğıdı dosyaya koydun. Dosyanın kapağında bir numara."),
P(S("y1C"), "Bir liste verdin: sağırlar derneği, bebek işaret dili grupları, CODA toplulukları. Nehir listeyi katlayıp çantasına koydu. Teşekkür etmedi. Atmadı da."),
"Aktarım tuttu. Nehir hamile. Sen başka çiftler, başka altı satırlık kâğıtlar.",
"Eylülde bir e-posta. Nehir'den. Tercümansız. Yazılı Türkçe, biraz kırık:",
"“Aslı Hanım. Bebek hareket ediyor. Doktor müzik sevdiğini söyledi, ultrasonda müzik açınca kıpırdıyormuş. Biz müziği duymuyoruz. Selim hoparlörü karnıma dayadı. Bebek kıpırdadı. Selim ağladı. Bebek bizim duymadığımız şeyi duyuyor. İçimde yabancı değil. Başka bir dünya.”",
"Aralıkta doğum. Bir kız, Deniz. Hastane tercüman bulamamış; Nehir doğum boyunca ebelerin ne dediğini anlamamış. Bebeğin ilk ağlayışını duymamış. Göğsünde, teninde hissetmiş.",
"Bir fotoğraf: Selim'in elleri bebeğin yüzünün önünde. Altında: “İlk söylediğimiz kelime: aile.”"
], secenekler: [
{ t: "Onları ziyarete gidersin.", to: "y3", etki: { sefkat: 1, ziyaret: true } },
{ t: "Bir tebrik mesajı yazarsın. “aile” işaretinin çizimini ekleyerek.", to: "y3", etki: { cesitlilik: 1 } },
{ t: "Hastaneye doğumda tercüman olmamasıyla ilgili bir şikâyet yazarsın.", to: "y3", etki: { cesitlilik: 1, sikayet: true } },
{ t: "Fotoğrafı kaydedersin. Bir şey yazmazsın.", to: "y3", etki: { yasa: 1 } }
]},

y3: { saat: "2042", baslik: "Deniz", metin: [
P(S("y2B"), "Mesajın sonuna “aile” işaretini çizdin, yamuk. Nehir cevap verdi: “Hâlâ yamuk. Ama bizim.”"),
P(S("y2C"), "Şikâyet yazdın: Nehir sancılarını kâğıda yazarak anlatmıştı. Üç ay sonra cevap: “Değerlendirilecektir.”"),
P(S("y2D"), "Fotoğrafı kaydettin. Aylarca telefonunun ekranında durdu; Gökhan bir gün görüp “Bu kim abla?” dedi."),
P(S("y2A"), "Eryaman'da bir daire. Kapı zili yerine bir lamba yanıyor. Bebek ağlarsa Nehir'in bileğindeki bilezik titriyor."),
"Deniz on aylık. İşitiyor. Kapı çarpınca dönüyor, müzik açılınca gülüyor.",
"Ve elleriyle konuşuyor. “Süt.” “Anne.” Bir de kendi uydurduğu bir işaret: elini kulağına götürüp açıyor. Nehir “ses” demek olduğunu düşünüyor.",
"Nehir seni mutfakta yakalıyor; Gül yanında, artık ailenin bir parçası gibi.",
"“Onu çok seviyorum. Ama bir gün sesle konuşacak. Arkadaşlarıyla telefonda, şarkı söyleyerek. Ben duvarın öbür yanında olacağım. Annemle benim aramdaki duvar şimdi benimle kızım arasında. Yönü değişti, o kadar.”",
"Salonda Deniz babasının kucağında, ellerini sallıyor."
], secenekler: [
{ t: "“Duvar her zaman bir yerde olur Nehir. Siz ona bir kapı da açmışsınız,” dersin.", to: "t1", etki: { sefkat: 1, cocuk: "isiten" } },
{ t: "“Yanlış mı yaptım?” diye sorarsın.", to: "t1", etki: { cesitlilik: 1, cocuk: "isiten", soru: true } },
{ t: "Deniz'in uydurduğu işareti yaparsın: el kulağa, sonra açılış.", to: "t1", etki: { cesitlilik: 1, sefkat: 1, cocuk: "isiten", deniz_isaret: true } },
{ t: "Bir şey demezsin. Ellerini izlersin.", to: "t1", etki: { cocuk: "isiten" } }
]},

/* ---------- İHLAL KOLU ---------- */
i1: { saat: "Nisan 2041", baslik: "Belirsiz", metin: [
"Sistemi on iki yıldır kullanıyorsun. Bir sonucu “belirsiz” işaretlersen yeniden test istenir. Yeniden test başka bir laboratuvarda yapılır ve sonucu yine senin onayına gelir.",
"Bir sonucu değiştirmek değil. Bir belirsizlikle örtmek. Bir hafta. Bir onay.",
"Çifte yalnızca “Birinci embriyonun sonucunda bir belirsizlik var, yeniden test edilecek,” diyorsun. Selim sana uzun uzun bakıyor. Bir şey anlıyor. Ya da anlamak istiyor.",
"Nehir: “İyi bir belirsizlik mi, kötü mü?”",
"“Bilmiyorum,” diyorsun. Tuhaf ama doğru.",
"Bir hafta sonra ikinci laboratuvarın sonucu ekranda: iki kopya. Aynı. Altında senin onay tuşun.",
"İki seçenek var: “Onayla” ve “Belirsiz, aktarıma uygun.” İkincisi mozaiklik şüphesi için. Nadiren kullanılır, kimse kontrol etmez.",
"İmlecin iki tuşun arasında. Masanın kenarında Gökhan'ın simit poşeti, boş."
], secenekler: [
{ t: "“Belirsiz, aktarıma uygun”u seçersin.", to: "i2", etki: { cesitlilik: 1, ihlal: true } },
{ t: "Son anda “Onayla”yı seçersin. Yapamazsın.", to: "y1", etki: { yasa: 2, kol: "yasa", vazgecti: true } },
{ t: "Seçmeden önce Selim ve Nehir'e gerçeği söylersin. Ne yaptığını, ne riske girdiğini.", to: "i2", etki: { cesitlilik: 1, sefkat: 1, ihlal: true, ciftle: true } },
{ t: "Gül'e danışırsın. O da tanık olacak.", to: "i2", etki: { sefkat: 1, ihlal: true, gul_bilir: true } }
]},

i2: { saat: "Haziran 2041", baslik: "Denetim", metin: [
P(S("i1A"), "Tıkladın. Ekran bir saniye düşündü, yeşil bir onay verdi. Kimse kontrol etmedi. Henüz."),
P(S("i1C"), "Selim ve Nehir'e söyledin. Nehir ağladı. Selim işaret etti: “Bizim için mi yapıyorsunuz?” Hayır, dedin, doğru olduğunu düşündüğüm için. Selim: “O zaman bizim için yapıyorsunuz. Biz doğruyuz.”"),
P(S("i1D"), "Gül uzun süre sustu. “Ben tercümanım,” dedi. “Bir mahkemede bunu çevirmem gerekirse çeviririm. Bilin.” Sonra: “Ama şu an bir şey çevirmiyorum. Sadece buradayım.”"),
"Aktarım yapıldı. Tuttu.",
"Haziranda iç denetim. Rutin, diyor Bora. Ama bu yıl denetçiler belirsiz işaretli embriyolara bakıyor. Sistemde altı tane. Beşi başka danışmanlardan, bir yıl öncesinden. Biri senin.",
"Bora seni çağırıyor. Ekranda: Aydın, embriyo bir. Sıkma topu masada, dokunmuyor.",
"“Aslı. Bu belirsizlik neydi?”",
"İkinci laboratuvarın raporu da açık: iki kopya. Belirsizlik yok.",
"“Bunu bana açıklayabilirsin. Ya da ben teknik hata diye kapatırım. Bir şartla: koordinatörlüğü kabul edersin ve bundan sonra her dosyan benim masamdan geçer.”"
], secenekler: [
{ t: "Her şeyi itiraf edersin. Bilerek yaptığını.", to: "i3", etki: { cesitlilik: 1, yasa: 1, itiraf: true } },
{ t: "Teklifi kabul edersin. Dosya kapanır.", to: "i3", etki: { yasa: 1, terfi: true, kapatti: true } },
{ t: "“Teknik hataydı,” dersin. Terfiyi reddederek.", to: "i3", etki: { teknik: true } },
{ t: "“Nehir hamile. Ne yapacaksınız, bebeği mi aldıracaksınız?” dersin.", to: "i3", etki: { cesitlilik: 1, meydan: true } }
]},

i3: { saat: "Aralık 2041", baslik: "Sessiz Doğum", metin: [
P(S("i2A"), "İtiraf ettin. Bora sana uzun uzun baktı, sonra raporu yazdı. Lisansın askıya alındı. Selim ile Nehir'e dokunulmadı. Yasa sağlık çalışanını cezalandırıyor."),
P(S("i2B"), "Kabul ettin. Dosya “teknik hata” diye kapandı. Bir hafta sonra yeni odana taşındın. Kapıda tabela: Klinik Koordinatör. Pencereden reklamın yanıp sönen yeşil gözü görünüyor. Hâlâ tamir edilmemiş."),
P(S("i2C"), "“Teknik hata,” dedin. Bora: “Teknik hata bir kere olur.” Dosyayı kapattı. Terfi listesinde adın artık yoktu."),
P(S("i2D"), "Bora'nın yüzü bembeyaz oldu. “Hayır. Tabii ki hayır.” Topu eline alıp sıktı. Dosya kapandı. Kimse bunun ne demek olduğunu yüksek sesle söylemedi."),
"Aralıkta doğum. Bir oğlan: Efe.",
"Bu kez doğumda Gül var. Ebelerin dediklerini ellere çeviriyor. Bebek ağlıyor. Nehir ağlayışı göğsünde hissediyor.",
"İki hafta sonra işitme taraması: iki kulakta işitme yok. Bir hemşire Nehir'e acıyarak bakıp bir broşür uzatıyor: “Koklear implant seçenekleri.”",
"Nehir broşürü nazikçe geri veriyor. Oğlunun yüzünün önünde ellerini kaldırıyor. Efe annesinin ellerine bakıyor. Gözleri o ellerin peşinde.",
"Bir fotoğraf geliyor. Altında yazılı Türkçe: “Bizim dilimizle doğdu. Teşekkür ederiz. Ne pahasına olduğunu biliyoruz.”"
], secenekler: [
{ t: "Onları ziyarete gidersin. Ne olursa olsun.", to: "t1", etki: { sefkat: 1, cocuk: "sagir", ziyaret: true } },
{ t: "Fotoğrafa bakıp ağlarsın.", to: "t1", etki: { sefkat: 1, cocuk: "sagir" } },
{ t: "Cevap yazarsın: “Pahası benim. Sizin değil.”", to: "t1", etki: { cesitlilik: 1, cocuk: "sagir" } },
{ t: "Fotoğrafı silersin. Kanıt olmasın.", to: "t1", etki: { yasa: 1, cocuk: "sagir", sildi: true } }
]},

/* ---------- DAVA KOLU ---------- */
d1: { saat: "Mayıs 2041", baslik: "Dilekçe", metin: [
"Selim ve Nehir bir avukat buluyor: engelli hakları alanında genç bir kadın, Av. Melike Er. Dava: kanunun dokuzuncu maddesinde işitme kaybını “ağır kalıtsal engellilik” sayan kısmın iptali.",
"Avukat senden bilirkişi tanıklığı istiyor. Merkezin içinden.",
"“Siz içeriden konuşursanız,” diyor Av. Er, “bu dava bir azınlığın talebi olmaktan çıkar.” Konuşurken kalemiyle dosyanın kenarına küçük kutular çiziyor.",
"Bora duyuyor. Bu kez top elinde değil.",
"“Tanıklık edersen burada çalışamazsın. Ayrıca kazanılırsa ne olacak biliyor musun? Sağır çocuk isteyenler, cücelik isteyenler, başka şeyler isteyenler. Bir kapı açılır.”",
"Akşam Gökhan'a anlatıyorsun. Hamuru yoğururken dinliyor. Sonra: “Abla, ben de mi bir kapıydım? Annemiz beni doğururken?”"
], secenekler: [
{ t: "Tanıklık etmeyi kabul edersin. Ne pahasına olursa olsun.", to: "d2", etki: { cesitlilik: 2, tanik: true } },
{ t: "Yazılı bir bilirkişi raporu vermeyi teklif edersin. Mahkemeye çıkmadan.", to: "d2", etki: { cesitlilik: 1, yasa: 1, yazili: true } },
{ t: "Reddedersin. Ama başka bir uzman bulmalarına yardım edersin.", to: "d2", etki: { yasa: 1, sefkat: 1, baska_uzman: true } },
{ t: "Gökhan'a cevap verirsin: “Hayır. Sen bir insandın. Kapılar insanlardan sonra gelir.”", to: "d2", etki: { sefkat: 1, cesitlilik: 1, tanik: true, ozan_cevap: true } }
]},

d2: { saat: "Ekim 2041", baslik: "Mahkeme", metin: [
P(function(d){ return d.tanik; }, "Bora seni işten çıkarmadı. “izne” gönderdi. Ücretsiz, süresiz."),
P(S("d1C"), "Emekli bir profesör buldunuz. Kendisi de işitme engelli. Mahkemede o konuştu. Sen arka sıradaydın. Nehir bir ara dönüp sana bir işaret yaptı. Sonra Gül'e sordun: “Burada olduğun için,” demiş."),
"Anayasa Mahkemesi. Mermer bir salon, yüksek kürsü, on beş üye. Köşede iki tercüman, sırayla. İzleyici sıralarında yüzlerce sağır. Elleri salonda sessiz bir dalga gibi.",
P(function(d){ return d.tanik || d.yazili; }, "Sıra sende. On beş yüz sana bakıyor. Arkanda yüzlerce el."),
P(function(d){ return d.tanik || d.yazili; }, "Altı satırlık kâğıtları anlatıyorsun, bir tıklamayla silinen embriyoları, “ağır” kelimesinin kim tarafından konduğunu. Bir de bir poşetin üstündeki ters “M”yi."),
"Hükümet avukatı konuşuyor: çocuğun açık gelecek hakkı, işiten bir dünyada yaşamanın kolaylığı, kaygan zemin. Güçlü. Bazı üyeler not alıyor.",
"Sonra Nehir, kürsüde, ellerle. Gül çeviriyor. Bağlanan elleri anlatıyor. Yaz kampını. Annesiyle otuz yılı. Sonra bir cümle; Gül'ün sesi titriyor:",
"“Bu yasa bana, sen var olmamalıydın diyor. Ben buradayım. Kimin var olmaması gerektiğine var olanlar mı karar verecek?”"
], secenekler: [
{ t: "Sağır izleyicilerle birlikte ellerini kaldırıp sallarsın. İşaret dilinde alkış.", to: "d3", etki: { cesitlilik: 1, alkis: true } },
{ t: "Hareketsiz oturursun.", to: "d3", etki: { yasa: 1 } },
{ t: "Hükümet avukatının argümanlarını gerçekten dinlersin.", to: "d3", etki: { yasa: 1, dinledi: true } },
{ t: "Nehir'in yanına gidersin.", to: "d3", etki: { sefkat: 1 } }
]},

d3: { saat: "Ocak 2042", baslik: "Karar", metin: [
P(S("d2B"), "Hareketsiz oturdun. Ellerin kucağında, kimse görmeden, “aile” işaretini yaptı."),
P(S("d2D"), "Nehir'in yanına gittin. Hükümet avukatı konuşurken bileğini bırakmadı."),
P(S("d2A"), "Yüzlerce el havada. Mahkeme başkanı bir an durdu, sonra devam etti. Ertesi gün gazetede bir fotoğraf: havada eller ve aralarında beceriksizce sallanan bir çift el. Seninkiler."),
P(S("d2C"), "Hükümet avukatını dinledin. Bazı argümanları gerçekten iyiydi. Bir çocuğun ebeveynlerinin seçiminden bağımsız bir geleceği. Reddedemedin. Nehir'in sorusunu da reddedemedin."),
"Ocakta karar. Sekize yedi.",
"İşitme kaybına ilişkin kısım iptal edildi. Gerekçe: “Devlet, kendine özgü dili olan bir topluluğun yaşam biçimini sağlık politikası adına yok sayamaz.”",
"Yedi üyenin karşı oyu: “Bir gün bu çocuklar büyüyecek ve bu seçimi kimin yaptığını soracaklardır.”",
"Mahkemenin önünde, karda, Selim ile Nehir sarılıyor. Nehir sana bir işaret yapıyor. Bu kez anlıyorsun, çok çalıştın: “Teşekkür ederim.” Sonra bir başkası, anlamadığın. Gül: “Şimdi korkuyorum.”"
], secenekler: [
{ t: "“Korkmanız iyi,” dersin. “Bu bir sorumluluk.”", to: "d4", etki: { yasa: 1 } },
{ t: "Nehir'e sarılırsın.", to: "d4", etki: { sefkat: 1 } },
{ t: "Karşı oy şerhini bir kez daha okursun. Haklı bir yanı var mı?", to: "d4", etki: { yasa: 1, serh: true } },
{ t: "“Şimdi birinci embriyo,” dersin. “Birlikte.”", to: "d4", etki: { cesitlilik: 1 } }
]},

d4: { saat: "Aralık 2042", baslik: "Ece", metin: [
P(S("d3A"), "“Korkmanız iyi,” dedin. Nehir: “Eskiden yasa bizim yerimize korkuyordu. Şimdi biz korkacağız.”"),
P(S("d3B"), "Nehir'e sarıldın. Omzunda ses çıkarmadan ağladı. Gül sonra söyledi: sağırın ağlaması daha sessiz değil. Sadece kimse duymuyor."),
P(S("d3C"), "Şerhi yeniden okudun. Bir çocuk bir gün soracaktı. Bunu sen de biliyordun."),
P(S("d3D"), "“Birlikte,” dedin. Selim'in elleri bir işaret yaptı; Gül çevirmedi, gerek yoktu."),
"Aktarım martta, başka bir merkezde; Bora'nın merkezi “kurumsal politika” gereği reddediyor.",
"Aralıkta bir kız: Ece. İşitme taraması: işitme yok.",
"Gazetelerde: “Türkiye'nin yasal olarak seçilmiş ilk sağır bebeği.” Bir köşe yazarı “bilimin geri adımı” diyor, bir başkası “zafer.” Sosyal medyada biri ailenin adresini paylaşıyor.",
"Bir akşam Nehir'den mesaj: “Kapımıza bir kâğıt bırakmışlar. ‘Kızınıza ne yaptınız?’ yazıyor. Ece uyuyor. Hiçbir şey duymadı. Biz de duymadık. Okuduk.”"
], secenekler: [
{ t: "Aileyi korumak için bir avukatla, polisle iletişime geçersin.", to: "t1", etki: { yasa: 1, cocuk: "sagir", koruma: true } },
{ t: "Bir gazeteye, Ece'nin değil, Nehir'in hikâyesinin yazılması için bir yazı gönderirsin.", to: "t1", etki: { cesitlilik: 1, cocuk: "sagir", yazi: true } },
{ t: "Onları ziyaret edip bir gece kalırsın.", to: "t1", etki: { sefkat: 1, cocuk: "sagir", ziyaret: true } },
{ t: "Kendine sorarsın: bu çocuk bir gün sana ne soracak?", to: "t1", etki: { yasa: 1, cocuk: "sagir", ece_soru: true } }
]},

/* ---------- DÜZENLEME KOLU ---------- */
z1: { saat: "Nisan 2041", baslik: "Düzeltme", metin: [
"“Bir seçenek daha var,” diyorsun. “Birinci embriyo sizin istediğiniz embriyo. Ama işitme genini düzeltebiliriz. Yasal, onaylı. Aynı embriyo. Bir harf değişir. Sizin çocuğunuz olur, yasa da izin verir.”",
"Gül çeviriyor. Selim'in yüzünde bir şey değişiyor.",
"Selim yavaşça, her işareti tek tek:",
"“Bir harf. O harf benim dilim, dedem, karım. Onu değiştirirseniz bizim çocuğumuz olmaz. Bizim genlerimizden yapılmış ama bizim evimizden çıkarılmış bir çocuk olur.”",
"Nehir'in elleri kucağında. İşaret etmiyor.",
"“Düzeltmek,” diyor Selim. “Bu kelimeyi seçtiniz. Bozuk şey düzeltilir. Ben bozuk değilim Aslı Hanım.”"
], secenekler: [
{ t: "Kelime seçimin için özür dilersin. Ama önerinin arkasında durursun.", to: "z2", etki: { sefkat: 1, yasa: 1 } },
{ t: "Önerini geri çekersin.", to: "z2", etki: { cesitlilik: 1, geri_cekti: true } },
{ t: "Nehir'e dönüp onun ne düşündüğünü sorarsın.", to: "z2", etki: { sefkat: 1, nehire_sordu: true } },
{ t: "“Bu, bir yasanın sizin yerinize karar vermesinden iyi değil mi?” dersin.", to: "z2", etki: { yasa: 1 } }
]},

z2: { saat: "Nisan 2041", baslik: "Nehir", metin: [
P(S("z1A"), "Özür diledin ama geri adım atmadın. Selim kalkıp çıktı. Nehir oturmaya devam etti."),
P(S("z1C"), "Nehir uzun süre cevap vermedi. Sonra elleri: “Bilmiyorum.” Selim ona döndü. Bir konuda ilk kez ayrı düşüyorlardı."),
P(S("z1D"), "Selim'in elleri hızlandı; Gül yetişemedi. “Bir yasanın bizi silmesiyle bizim kendimizi silmemiz arasında fark var mı?”"),
P(S("z1B"), "Önerini geri çektin. Selim başını salladı. Nehir ellerini hâlâ kucağında tutuyordu."),
"Ertesi gün Nehir tek başına geliyor; Gül'le, Selim'siz.",
"Uzun süre oturuyor. Sonra:",
"“Selim'e buraya geldiğimi söylemedim. Otuz altı yaşındayım. Üç kez denedik. Paramız yok. Bu son şans.”",
"“Selim sağır bir çocuk istiyor. Ben de. Ama ben daha çok bir çocuk istiyorum. Düzenlenmiş de olsa, işiten de olsa. Benim karnımda büyüsün yeter.”",
"Elleri titriyor.",
"“Ben işiten bir aileden geldim. Selim'in ailesi bana bir dil verdi, bir ev verdi. Şimdi onlara işiten bir torun mu vereceğim?”",
"“Siz ne yapardınız?”"
], secenekler: [
{ t: "“Selim'le konuşun. Birlikte karar verin,” dersin.", to: "z3", etki: { sefkat: 1, konus: true } },
{ t: "“Bir çocuk istemek ihanet değil,” dersin.", to: "z3", etki: { sefkat: 1, ihanet_degil: true } },
{ t: "“Ben olsam beklerdim. Belki yasa değişir,” dersin.", to: "z3", etki: { cesitlilik: 1, bekle: true } },
{ t: "“Bunu ben söyleyemem Nehir,” dersin.", to: "z3", etki: { yasa: 1 } }
]},

z3: { saat: "Haziran 2041", baslik: "Laboratuvar", metin: [
P(S("z2A"), "Üç gün konuştular. Üçüncü gün Selim görüntülü aradı, Gül'süz. Yavaş işaret etti, senin anlayabileceğin kadar: “Düzenle. Karım istiyor. Ben karımı istiyorum.”"),
P(S("z2B"), "Nehir gözlerini sildi. “İhanet değil,” diye işaret etti, senin kelimeni tekrarlayarak. Bir hafta sonra Selim'le geldi. Selim bir şey demedi. İmzaladı."),
P(S("z2C"), "Bir ay sonra Nehir'den e-posta: “Bekleyemiyoruz. Yaşım, paramız. Düzenleme yapalım.” Beklemenin herkesin karşılayamayacağı bir şey olduğunu unutmuştun."),
P(S("z2D"), "Nehir gitti. İki hafta sonra Selim'le birlikte geldi. Kararlarını vermişlerdi. Nasıl, hiç öğrenmeyeceksin."),
"Haziran, laboratuvar. Embriyolog Dr. Can, otuzlarında, kulaklığında hafif bir müzik. Sen camın arkasındasın.",
"Ekranda birinci embriyo. Birkaç düzine hücre. Dr. Can düzenleme aracını iğneyle veriyor. Bir harf. Bir kulağın içindeki küçük tüylerin titreşip titreşmeyeceği.",
"“Bitti,” diyor. Kulaklığını çıkarıyor. “Hedef dışı etkiler için bir hafta.”",
"Bir hafta sonra rapor: başarılı. Hedef dışı etki: “tespit edilemeyecek kadar küçük.”"
], secenekler: [
{ t: "Aktarımda Selim ve Nehir'in yanında olursun.", to: "t1", etki: { sefkat: 1, cocuk: "duzenlenmis" } },
{ t: "Raporu tekrar tekrar okursun. “Tespit edilemeyecek kadar küçük.”", to: "t1", etki: { yasa: 1, cocuk: "duzenlenmis", rapor_endise: true } },
{ t: "Değiştirilmemiş dizilimin bir kopyasını aile için saklarsın.", to: "t1", etki: { cesitlilik: 1, cocuk: "duzenlenmis", kopya: true } },
{ t: "Dr. Can'a sorarsın: “Bunu yaparken ne hissediyorsun?”", to: "t1", etki: { cocuk: "duzenlenmis", can_soru: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "2042", baslik: "Bebek", metin: [
P(function(d){ return d.cocuk === "isiten"; }, "Deniz bir yaşında. İlk kelimesi sesle: “Baba.” Selim duymuyor. Nehir duymuyor. Komşu kadın duyup kapıyı çalıyor. Selim kızına dönüp işaret ediyor: “Ne dedin?” Deniz ellerini kaldırıyor: “Baba.”"),
P(function(d){ return d.cocuk === "sagir"; }, "Bebek bir yaşında. İlk kelimesini elleriyle yapıyor: “Anne.” Evde bir kutlama. Lambalar yanıp sönüyor, eller havada. Alt kattaki komşu ışıklar yüzünden kapıyı çalıyor, sonra o da kalıyor."),
P(function(d){ return d.cocuk === "duzenlenmis"; }, "Bebek doğdu: Arda. İşitiyor. Selim tarama sonucunu okuyor, kâğıdı katlıyor. Sonra oğlunun yüzünün önünde ellerini kaldırıyor: “Aile.” Arda ellere bakıyor. Bir de odada çalan bir telefona."),
P(function(d){ return d.terfi; }, "Klinik koordinatörsün. Optimum satışları senin biriminde yüzde altmış arttı. Bora seni bir konferansta “yeni neslin mimarı” diye tanıttı. Alkışlarken sıkma topunu kürsüde unuttu."),
P(function(d){ return d.itiraf; }, "Lisansın askıda. Bir dernekte gönüllü danışmanlık yapıyorsun. Sağır ailelere, engelli çocuklu ailelere. Çay ocağı senin sorumluluğunda. İlk hafta üç bardak kırdın."),
P(function(d){ return d.tanik && !d.itiraf; }, "Merkezden ayrıldın. Bir üniversitede genetik etik dersi veriyorsun. Öğrencilerin çoğu Optimum Paket'le doğmuş. İlk nesil. Hepsi birbirine biraz benziyor. Bunu düşündüğün için kendine kızıyorsun."),
P(function(d){ return !d.terfi && !d.itiraf && !d.tanik; }, "Merkezde çalışmaya devam ediyorsun. Her gün altı satırlık kâğıtlar. Her gün altıncı satırda parmağın biraz bekliyor.")
], secenekler: [
{ t: "Bebeği görmeye gidersin.", to: "t1b", etki: { sefkat: 1 } },
{ t: "Bu yılı yazmaya başlarsın.", to: "t1b", etki: { cesitlilik: 1, yazi_basladi: true } },
{ t: "İşine odaklanırsın. Başka çiftler bekliyor.", to: "t1b", etki: { yasa: 1 } },
{ t: "Gökhan'ın fırınına gidersin.", to: "t1b", etki: { sefkat: 1 } }
]},

t1b: { saat: "Eylül 2042", baslik: "Otuz Altı", metin: [
P(S("t1A"), "Bebeği görmeye gittin. Minik bir el parmağını kavradı. İşitip işitmediğini o an hiç düşünmedin."),
P(S("t1B"), "Yazmaya başladın. İlk cümleyi yirmi kez değiştirdin. Sonunda: “Kardeşim simitçidir.”"),
P(S("t1C"), "İşine odaklandın. Ama her kâğıtta parmağın bir satırın üstünde bekliyordu."),
P(S("t1D"), "Sabah dördünde fırına gittin. Gökhan bir şey sormadı, eline hamur verdi."),
"Gökhan'ın otuz altıncı doğum günü. Fırının arka odasında bir masa: simitler, poğaçalar, bir pasta; Gökhan kendi yapmış, üstüne krema ile “GÖKHAN 36” yazmış, 6 ters.",
P(function(d){ return d.ziyaret || d.ozan_anlatti || d.alti_anlatti; }, "Kapıda, bebek arabasıyla, Selim ve Nehir. Gökhan davet etmiş. Bir dernek etkinliğinde tanışmışlar. Sana söylememiş."),
P(function(d){ return d.ziyaret || d.ozan_anlatti || d.alti_anlatti; }, "Gökhan kapıya koşup ellerini kaldırıyor. Beceriksiz ama tam: “Hoş geldiniz. Aile.” Nehir gülüyor. Bir ay boyunca her akşam videolardan çalışmış. Selim sarılınca Gökhan'ın unu ceketine bulaşıyor; Selim silmiyor."),
P(function(d){ return !(d.ziyaret || d.ozan_anlatti || d.alti_anlatti); }, "Gökhan otuz altı mumu üflüyor. Nefesi yetmiyor, çırak yardım ediyor. Sonra kâğıttan bir konuşma okuyor. Kendisi yazmış, iki yerde kendi yazısını okuyamayıp güldü."),
"Gökhan dilek tutuyor. Sonra kulağına eğiliyor: “Abla, söyleyeyim mi dileğimi? Benim gibi bir çocuk daha doğsun. Yalnız kalmayayım.”"
], secenekler: [
{ t: "“Dileğin kabul olsun,” dersin.", to: "t2", etki: { cesitlilik: 1, dilek: true } },
{ t: "“Yalnız değilsin Gökhan,” dersin, odadakileri göstererek.", to: "t2", etki: { sefkat: 1 } },
{ t: "Bir şey diyemezsin.", to: "t2", etki: { cesitlilik: 1 } },
{ t: "“Dilekler söylenmez,” dersin, gülümseyerek.", to: "t2", etki: { sefkat: 1 } }
]},

t2: { saat: "Kasım 2042", baslik: "Yeni Yasa", metin: [
P(S("t1bA"), "“Kabul olsun,” dedin. Gökhan mumları üfledi. Biri sönmedi. “O benim,” dedi."),
P(S("t1bB"), "Gökhan saydı: annen, iki komşu, çırak, iki müşteri. “Yedi. İyi sayı.”"),
P(S("t1bC"), "Bir şey diyemedin. Gökhan ilk dilimi sana verdi. Kremanın ters 6'sı senin dilimine düşmüştü."),
P(S("t1bD"), "Gökhan düşündü. “Ama ben söyledim. Belki o yüzden kabul olmaz.” Sonra güldü."),
"Kasımda Meclis'te bir taslak: listeye yirmi üç yeni durum. Otizm spektrumu için “yüksek genetik risk.” Bazı öğrenme güçlükleri. Gerekçede bir cümle: “Bilişsel potansiyel puanı eşiğin altında kalan embriyoların aktarımı caydırılmalıdır.”",
P(function(d){ return d.cocuk === "sagir" && d.kol === "dava"; }, "Taslakta bir madde daha: Anayasa Mahkemesi'nin iptal ettiği işitme kaybı maddesinin “yeniden düzenlenmesi.” Ece'nin doğumundan bir yıl sonra."),
"Sağlık Komisyonu uzman görüşü istiyor. Davet senin adına.",
"Aynı hafta Gökhan'dan mesaj: “Abla, televizyondan aradılar. Benim gibi kalmış son insanlarla program yapıyorlarmış. Gideyim mi?”",
"Aynı gün, aynı saat."
], secenekler: [
{ t: "Komisyona gidersin.", to: "y_komisyon", etki: { cesitlilik: 1, yasa: 1, komisyon: true } },
{ t: "Gökhan'la birlikte televizyona gidersin.", to: "y_ozan", etki: { cesitlilik: 1, sefkat: 1, ozan_tv: true } },
{ t: "İkisini de reddedersin. Gökhan'ı tek başına bırakmak pahasına.", to: "t3", etki: { yasa: 1, ikisi_ret: true } },
{ t: "Komisyona yazılı görüş gönderirsin; Gökhan'a “Sen bilirsin” dersin.", to: "t3", etki: { yasa: 1, yazili_gorus: true } }
]},

y_komisyon: { saat: "Kasım 2042", baslik: "Komisyon", metin: [
"Meclis'te bir salon. Uzun masa, mikrofonlar. On iki milletvekili. Bir sağlık ekonomisti, iki genetikçi, bir hukukçu, bir din bilgini. Sen.",
"Ekonomist önce konuşuyor: bir otizmli bireyin ömür boyu maliyeti, bir Down sendromlunun, bir işitme engellinin. Milyonlar. Tablolarda renkler.",
"Mikrofonun kırmızı ışığı yanıyor. Hazırladığın metni masaya koyuyorsun. Sonra kenara itiyorsun.",
"“Bir kardeşim var. Otuz altı yaşında. Down sendromlu. Sabah dörtte kalkıp simit yapıyor. Geçen ay bir dilek tuttu: kendisi gibi bir çocuk daha doğsun, yalnız kalmasın.”",
"Ekonomist kalemini bırakıyor.",
"“Siz bir maliyet hesaplıyorsunuz. Bir ülke var olmasını istemediği insanları bir listeye yazınca o listedeki son insanlar yalnız kalır. Bunu hangi sütuna yazıyorsunuz?”"
], secenekler: [
{ t: "Konuşmana yasal argümanlarla devam edersin.", to: "t3", etki: { yasa: 1, cesitlilik: 1 } },
{ t: "Sözünü bitirip oturursun.", to: "t3", etki: { cesitlilik: 1, kisa: true } },
{ t: "Bir milletvekilinin itirazını bekleyip cevaplarsın.", to: "t3", etki: { yasa: 1, tartisti: true } },
{ t: "Gökhan'ın bir fotoğrafını kameraya gösterirsin.", to: "t3", etki: { cesitlilik: 1, foto: true } }
]},

y_ozan: { saat: "Kasım 2042", baslik: "Kamera", metin: [
"Bir stüdyo. Program: “Son Nesil.” Üç konuk: Gökhan, otuz dört yaşında spina bifidalı bir kadın, elli yaşında otizmli bir adam. Hepsi yasadan önce doğmuş.",
"Sunucu kibar. Programın havası bir müze gezisi. “Yasadan önce doğan son kuşaksınız. Nasıl bir duygu?”",
"Kamera Gökhan'ın yüzüne yaklaşıyor. Sen kulisten izliyorsun. Makyözün Gökhan'ın alnına sürdüğü pudra fazla, beyaz duruyor.",
"“Ben her sabah dörtte kalkıp simit yapıyorum. Altı yüz simit. Mahallenin yarısı benim simidimi yiyor.” Sunucu gülüyor. Gökhan gülmüyor.",
"“Bana sordular, kusurlu musun diye. Simitlerim kusursuz. Ben değilim. Siz de değilsiniz. O zaman neden listeye sadece beni yazdılar?”",
"Sunucu bir şey diyecek, diyemiyor.",
"Gökhan kameraya dönüyor. “Benim ablam genetikçi. Kusursuz bebekler yapıyor. Ama beni seviyor. Bu bir şey demek değil mi?”",
"Kulisteki herkes sana bakıyor."
], secenekler: [
{ t: "Kulisten çıkıp kameranın önüne, Gökhan'ın yanına gidersin.", to: "t3", etki: { sefkat: 1, cesitlilik: 1, kamera_onu: true } },
{ t: "Kulisten izlemeye devam edersin. Bu onun anı.", to: "t3", etki: { cesitlilik: 1 } },
{ t: "Herkesin önünde ağlarsın.", to: "t3", etki: { sefkat: 1 } },
{ t: "Yapımcıya, Gökhan'ı müze gibi gösterdikleri için itiraz edersin.", to: "t3", etki: { cesitlilik: 1, itiraz: true } }
]},

t3: { saat: "Aralık 2042", baslik: "Bora", metin: [
P(S("t2C"), "İkisini de reddettin. Gökhan telefonda bir süre bir şey demedi. “Tamam abla.” Programa yalnız gitti. Sen evden izledin, sesini kısarak."),
P(S("t2D"), "Yazılı görüşün bir dosyaya girdi; Gökhan'ın yüzü ekranlara. Çıkışta aradı: “Ben iyiydim, değil mi?”"),
P(S("y_komisyonA"), "Anayasa, eşitlik, ayrımcılık yasağı. İki milletvekili not aldı. Biri telefonuna bakıyordu."),
P(S("y_komisyonB"), "Oturdun. Bir iki saniye sessizlik. Sonra başkan: “Teşekkürler, sıradaki.”"),
P(S("y_komisyonC"), "Bir milletvekili: “Duygusal argümanlar yasa yapmaz.” Sen: “Yasalar da duygusuz yapılmaz. Kimin duygusunun sayıldığı değişir.” Tutanağa geçti."),
P(S("y_komisyonD"), "Fotoğrafı gösterdin: un içinde Gökhan. Ertesi gün bir gazetenin ilk sayfasındaydı. Gökhan kızdı: “Bana sormadın abla.” İki gün konuşmadı."),
P(S("y_ozanA"), "Kameranın önüne çıktın. Gökhan elini tutup sunucuya döndü: “Bu benim ablam. O da kusurlu.” Stüdyo güldü. Sonra sustu."),
P(S("y_ozanB"), "İzledin. Çıkınca Gökhan “Nasıldım?” dedi. “Kusursuz,” dedin. İkiniz de güldünüz. Alnındaki pudrayı peçeteyle sildin."),
P(S("y_ozanC"), "Kulisin ortasında ağladın. Bir kameraman mendil uzattı. Kızı otizmliymiş, adını söyledi, sen unuttun, sonra unuttuğuna üzüldün."),
P(S("y_ozanD"), "Yapımcı omuz silkti: “Reyting.” İkinci bölümde Gökhan'ı fırınında, çalışırken çektiler."),
P(function(d){ return d.komisyon; }, "Konuşman bir gün gündemde kaldı. “Bilişsel potansiyel” maddesi geri çekildi. Diğerleri kaldı."),
P(function(d){ return d.ozan_tv; }, "Gökhan'ın son cümlesi bir gecede milyonlarca kez paylaşıldı. Ertesi sabah fırının önünde kuyruk. Altı yüz simit dokuzda bitti. Gökhan kuyruğa bakıp: “Abla, simidimi değil beni görmeye gelmişler. Bu iyi bir şey mi?”"),
"Aralıkta Bora arıyor. Yeni bina açılıyor. Cephede yeni reklam: “Kusursuzluk bir haktır. Şimdi herkes için.” Bebeğin iki gözü de çalışıyor.",
P(function(d){ return !d.itiraf && !d.tanik; }, "“Aslı, seni Optimum biriminin başında istiyorum. Tartışmalı bir yıl geçirdin, biliyorum. Ama tartışma, dürüst olalım, reklamdır.”"),
P(function(d){ return d.itiraf || d.tanik; }, "“Aslı, geçmişi geride bırakalım. Seni danışman olarak geri istiyorum. Tartışma, dürüst olalım, reklamdır.”")
], secenekler: [
{ t: "Kabul edersin. İçeriden değiştireceksin. Ya da değişeceksin.", to: "t4", etki: { yasa: 2, terfi: true } },
{ t: "Reddedersin.", to: "t4", etki: { cesitlilik: 1, red: true } },
{ t: "Bir şartla kabul edersin: her çifte, sonuçlarla birlikte, o durumla yaşayan bir insanın hikâyesi de verilecek.", to: "t4", etki: { cesitlilik: 1, yasa: 1, sart: true } },
{ t: "“Gökhan'a sorayım,” dersin. Ciddi.", to: "t4", etki: { sefkat: 1, ozana_sor: true } }
]},

t4: { saat: "Ocak 2043", baslik: "Fırın", metin: [
P(S("t3A"), "Kabul ettin. On beşinci kattasın. Pencereden reklam ekranı. Artık senin biriminin reklamı."),
P(S("t3B"), "Reddettin. Bora: “Pişman olacaksın.” “Belki,” dedin. Telefonu kapatıp fırına yürüdün."),
P(S("t3C"), "Bora güldü, sonra ciddileşti. “Satışları düşürür.” “Biliyorum.” Bir hafta düşündü. Bir yıllık deneme olarak kabul etti."),
P(S("t3D"), "Gökhan simit dizerken dinledi. “Abla, o reklamın altında çalışırken mutlu musun?” Cevap veremedin. “O zaman neden soruyorsun?”"),
"Ocak. Sabah dört. Gökhan bir hamur parçası uzatıyor. “Hadi abla. Bir simit yap.”",
"Yuvarlıyorsun, uzatıyorsun, büküyorsun. Bir ucu kalın, bir ucu ince. Susamlar bir tarafa toplanmış.",
"Gökhan simidi ışığa tutuyor.",
"“Kusurlu,” diyor. “Ama güzel. Fırına koyalım mı?”",
"Altı yüz simidin arasında bir tane yamuk. Fırın kapanıyor.",
"Yirmi dakika sonra çıkıyor: kızarmış, çıtır, yamuk. Gökhan sana veriyor. “Bunu satmayız. Bunu sen yersin.”"
], secenekler: [
{ t: "Simidi yersin. Gökhan'la birlikte, sabahın dördünde.", to: "ks", etki: { sefkat: 1 } },
{ t: "Simidi saklarsın.", to: "ks", etki: { cesitlilik: 1 } },
{ t: "Gökhan'a sorarsın: “Ben kusurlu muyum?”", to: "ks", etki: { cesitlilik: 1, son_soru: true } },
{ t: "Bir hamur daha alıp bir simit daha yaparsın. Yine yamuk.", to: "ks", etki: { cesitlilik: 1, sefkat: 1 } }
]},

ks: { yonlendir: [
{ if: function(d){ return d.terfi && !d.sart; }, to: "son_kusursuz" },
{ if: function(d){ return d.cocuk === "sagir"; }, to: "son_sessiz" },
{ if: function(d){ return d.ozan_tv || d.cesitlilik >= 7; }, to: "son_ozan" },
{ if: function(d){ return d.cocuk === "duzenlenmis"; }, to: "son_harf" },
{ to: "son_isiten" }
]},

/* ---------- SONLAR ---------- */
son_kusursuz: { son: true, baslik: "On Beşinci Kat", metin: [
P(S("t4A"), "O sabah simidi Gökhan'la birlikte, unlu tezgâhta yemiştin; Gökhan susamları senin yerine toplamıştı."),
P(S("t4B"), "Yamuk simidi kâğıda sarıp çantana koymuştun. Bir hafta sonra çantayı açınca hâlâ oradaydı, taş gibi."),
P(S("t4C"), "“Ben kusurlu muyum?” diye sormuştun. Gökhan hamuru yoğururken düşündü. “Evet abla,” dedi. “İyi ki.”"),
P(S("t4D"), "Bir tane daha yapmıştın. Yine yamuk. Gökhan ikisini yan yana dizdi: “İkiz.”"),
"On beşinci kattan Ankara'nın batısına bakıyorsun. Cephede senin biriminin reklamı.",
"Optimum Paket artık sigorta kapsamında. Senin biriminde her ay yüzlerce çift.",
"İyi bir danışmansın. Her şeyi anlatıyorsun. Bir gün bir çift soruyor: “Siz olsanız hangisini seçerdiniz?” Hiç düşünmeden dördüncüyü gösteriyorsun: işiten, sağlıklı, yüksek puanlı.",
"O gece arabada bunu düşünüyorsun. Hiç düşünmeden. Ne zaman olmuştu bu?",
P(function(d){ return d.ihlal && d.kapatti; }, "Bir çekmecede bir dosya: Aydın, embriyo bir. Bora kapattı. Sen bu odadasın."),
"Fırına artık ayda bir gidiyorsun. Gökhan anlıyor. Bir gün sana bir simit veriyor. Yamuk değil, düzgün. “Bu senin,” diyor. “Artık yamuk yapmıyorsun.”"
]},

son_sessiz: { son: true, baslik: "Teyzeye Selam", metin: [
P(S("t4A"), "O sabah simidi Gökhan'la birlikte, unlu tezgâhta yemiştin; Gökhan susamları senin yerine toplamıştı."),
P(S("t4B"), "Yamuk simidi kâğıda sarıp çantana koymuştun. Bir hafta sonra çantayı açınca hâlâ oradaydı, taş gibi."),
P(S("t4C"), "“Ben kusurlu muyum?” diye sormuştun. Gökhan hamuru yoğururken düşündü. “Evet abla,” dedi. “İyi ki.”"),
P(S("t4D"), "Bir tane daha yapmıştın. Yine yamuk. Gökhan ikisini yan yana dizdi: “İkiz.”"),
P(function(d){ return d.kol === "ihlal"; }, "Efe üç yaşında. Annesinin, babasının, dört kuşağın dilinde cümleler kuruyor. Sağırlar kreşine gidiyor. Geçen hafta bir arkadaşının saçını çekmiş; Nehir bunu sana gururla anlattı."),
P(function(d){ return d.kol === "dava"; }, "Ece üç yaşında. Elleriyle cümleler kuruyor. Adı bir gazete arşivinde duruyor. Bir gün parkta bir çocuk ona sesle bir şey soracak ve o duymayacak. Bir gün o gazeteleri okuyacak."),
"Selim ile Nehir her bayram bir fotoğraf gönderiyor. Çocuk hep ellerini kaldırmış, bir işaretin ortasında. Gül'e soruyorsun ne dediğini. Gül gülüyor: “Teyzeye selam.”",
P(function(d){ return d.itiraf; }, "Lisansın iptal edildi. İki yıl sonra yeniden başvurabilirsin. Dernekte çalışıyorsun. Maaşın yarıya düştü. Uykuların düzeldi."),
"Mahkemedeki şerh aklında: “Bu çocuklar büyüyünce bu seçimi kimin yaptığını soracaklar.” Soracaklar. İşiten çocuklar da soracak. Optimum'la doğanlar da.",
"Bir gün Efe ya da Ece senin kapını çalacak. Elleriyle bir şey soracak. Ne cevap vereceğini bilmiyorsun. Cevabı işaret diliyle verebilmek için çalışmaya devam ediyorsun. “aile” hâlâ biraz yamuk."
]},

son_ozan: { son: true, baslik: "Arka Oda", metin: [
P(S("t4A"), "O sabah simidi Gökhan'la birlikte, unlu tezgâhta yemiştin; Gökhan susamları senin yerine toplamıştı."),
P(S("t4B"), "Yamuk simidi kâğıda sarıp çantana koymuştun. Bir hafta sonra çantayı açınca hâlâ oradaydı, taş gibi."),
P(S("t4C"), "“Ben kusurlu muyum?” diye sormuştun. Gökhan hamuru yoğururken düşündü. “Evet abla,” dedi. “İyi ki.”"),
P(S("t4D"), "Bir tane daha yapmıştın. Yine yamuk. Gökhan ikisini yan yana dizdi: “İkiz.”"),
"Gökhan'ın programı ya da senin komisyon konuşman bir şey başlattı. Küçük. Bir dernek: “Son Nesil Değil.” İlk toplantı fırının arka odasında. On iki kişi. Bir yıl sonra bin iki yüz.",
"Yasa değişmedi. Ama listedeki insanlar artık görünüyor. Müze gibi değil, mahalle gibi.",
"Merkezden ayrıldın. Derneğin danışmanısın. Bir de Gökhan'ın fırınında yarı zamanlı çalışıyorsun. Sabah dörtte kalkıyorsun. Simitlerin hâlâ yamuk. Müşteriler onları ayırıp istiyor.",
"Bir sabah Gökhan hamur yoğururken: “Abla, dileğim kabul olmadı. Benim gibi çocuk doğmadı. Ama bak.” Arka odayı gösteriyor: dağınık sandalyeler, çay bardakları, bir işaret dili afişi, yeni yapılmış bir rampa. Rampanın betonuna biri parmağıyla “G” yazmış."
]},

son_harf: { son: true, baslik: "Bir Harf", metin: [
P(S("t4A"), "O sabah simidi Gökhan'la birlikte, unlu tezgâhta yemiştin; Gökhan susamları senin yerine toplamıştı."),
P(S("t4B"), "Yamuk simidi kâğıda sarıp çantana koymuştun. Bir hafta sonra çantayı açınca hâlâ oradaydı, taş gibi."),
P(S("t4C"), "“Ben kusurlu muyum?” diye sormuştun. Gökhan hamuru yoğururken düşündü. “Evet abla,” dedi. “İyi ki.”"),
P(S("t4D"), "Bir tane daha yapmıştın. Yine yamuk. Gökhan ikisini yan yana dizdi: “İkiz.”"),
"Arda iki yaşında. İşitiyor, konuşuyor. Evde elleriyle, parkta sesiyle.",
"Selim ona her akşam elleriyle masal anlatıyor. Arda bazen ellere bakıyor, bazen dışarıdan gelen bir sese dönüyor. Selim her seferinde fark ediyor, masala devam ediyor.",
"Nehir sana yazıyor: “Mutluyuz. Gerçekten. Ama bazen gece Selim'i Arda'nın yatağının başında buluyorum. Ne düşünüyorsun dedim bir kere. Elleri: ‘Bir harf. Onun içinde dedem vardı.’”",
P(function(d){ return d.kopya; }, "Değiştirilmemiş dizilim bir dosyada. Arda büyüyünce isterse görebilecek. Belki hiç bakmayacak."),
"Bir genetikçi olarak bir harfin bir proteini, bir proteinin bir hücreyi, bir hücrenin bir duyuyu değiştirdiğini biliyorsun. Dedesinin ne olduğunu değiştirip değiştirmediğini bilmiyorsun."
]},

son_isiten: { son: true, baslik: "Deniz", metin: [
P(S("t4A"), "O sabah simidi Gökhan'la birlikte, unlu tezgâhta yemiştin; Gökhan susamları senin yerine toplamıştı."),
P(S("t4B"), "Yamuk simidi kâğıda sarıp çantana koymuştun. Bir hafta sonra çantayı açınca hâlâ oradaydı, taş gibi."),
P(S("t4C"), "“Ben kusurlu muyum?” diye sormuştun. Gökhan hamuru yoğururken düşündü. “Evet abla,” dedi. “İyi ki.”"),
P(S("t4D"), "Bir tane daha yapmıştın. Yine yamuk. Gökhan ikisini yan yana dizdi: “İkiz.”"),
"Deniz üç yaşında. İki dilde akıcı. Ellerle annesine masal anlatıyor, sesle kreşte şarkı söylüyor. Bazen kimse bakmazken o uydurduğu işareti yapıyor: el kulağa, sonra açılış.",
"Nehir yazıyor: “Deniz bize tercümanlık yapıyor artık. Markette, doktorda. Üç yaşında. Annemin bana yaptırdığını ben ona yaptırıyorum. Korkuyorum.”",
"Yasaya uydun. Deniz sağlıklı, sevilmiş.",
"Selim'in imzası aklında. Bina çizimi gibi düz. “Siz o yasanın elisiniz.”",
"Gül bir gün Deniz'i parkta izlerken sana dönüyor: “Ben de böyleydim,” diyor. “Bak, annesine bakmadan önce etrafa bakıyor. Kimse bir şey soruyor mu diye.”"
]}

},

ayna: function(d){
  var out = [];
  var a = d.cesitlilik, b = d.yasa, c = d.sefkat;
  if(a >= b && a >= c) out.push("Çoğu kavşakta Selim ile Nehir'in dilinden, Gökhan'ın tarafından baktın.");
  else if(b >= c) out.push("Çoğu kavşakta kanunun ve merkezin içinde kaldın.");
  else out.push("Çoğu kavşakta karşındakinin acısına göre davrandın.");
  if(d.ihlal) out.push("Bir sonucu bilerek “belirsiz” işaretledin.");
  if(d.terfi) out.push("On beşinci kattaki odayı kabul ettin.");
  if(d.alti_anlatti) out.push("Altıncı embriyoyu anlatırken Gökhan'ı anlattın.");
  if(d.ozan_tv) out.push("Gökhan'la stüdyoya gittin.");
  return out;
},

dipnot: [
{ ad: "Engellilik ve değer", t: "Engellilik çalışmaları, engelliliği bir bedenin eksikliği olarak değil, bir toplumun engelleri olarak tanımlayan “sosyal model”i savunur. Sağır topluluğu kendini bir engelli grubu olarak değil, kendine özgü bir dili ve kültürü olan bir azınlık olarak görür (büyük harfle “Deaf”). 2002'de ABD'de sağır bir çiftin bilinçli olarak sağır bir çocuk sahibi olması bu tartışmayı dünya gündemine taşıdı." },
{ ad: "İyileştirme ve doğallık", t: "Michael Sandel, “Mükemmelliğe Karşı” kitabında genetik iyileştirmenin, çocukları bir “armağan” olarak kabul etmek yerine bir “proje” olarak görmeye yol açtığını savunur. Julian Savulescu ise tam tersini: ebeveynlerin, ellerinden geliyorsa, en iyi yaşam şansına sahip çocuğu seçme ahlaki yükümlülüğü olduğunu (“procreative beneficence”) öne sürer." },
{ ad: "Ebeveyn sevgisi ve açık gelecek", t: "Joel Feinberg, çocukların “açık bir gelecek hakkı” olduğunu söyler: ebeveynler, çocuğun ileride kendi seçimlerini yapabileceği seçenekleri önceden kapatmamalıdır. Sağır bir çocuk seçmek bu hakkı ihlal eder mi? Yoksa işiten bir çocuğu sağır bir ailede büyütmek de başka bir kapıyı kapatır mı?" },
{ ad: "Normalin tanımı", t: "Georges Canguilhem, “normal” ile “patolojik” arasındaki farkın biyolojik değil, değerlere dayalı olduğunu savunmuştur. Bir toplumun neyi “kusur” saydığı, o toplumun neye değer verdiğini gösterir. Down sendromlu doğumların bazı ülkelerde neredeyse sıfıra inmesi, bu sorunun bugün bile tartışıldığı bir gerçektir." }
]
});
})();
