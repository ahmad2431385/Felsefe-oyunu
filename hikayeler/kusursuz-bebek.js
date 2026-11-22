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
"Ankara, Eskişehir yolu. Camdan bir bina, cephesinde dev bir ekran. Ekranda gülümseyen bir bebek ve bir cümle: “Kusursuzluk bir haktır. Yeni Nesil Üreme ve Genetik Merkezi.”",
"Adın Aslı, otuz dokuz yaşındasın, genetik danışmansın. On iki yıldır bu meslekte; bu binada altı yıldır. Masanda bir bilgisayar, bir embriyo modeli, bir de kâğıt poşet: kardeşin Ozan'ın fırınından, sabah sıcak simit.",
"2039'da çıkan Kalıtsal Hastalıkların Önlenmesi Kanunu açık: tüp bebek tedavisinde bütün embriyolar taranır. “Ağır kalıtsal engellilik” taşıyan embriyoların aktarılması yasaktır. Listede kırk yedi durum var. Down sendromu listede. Doğuştan işitme kaybı listede.",
"Kanun çıktığından beri Türkiye'de Down sendromlu doğumlar yüzde ikiye indi. Bir rakam. Kardeşin o rakamın geçmişinde duruyor; otuz beş yaşında, şehrin en iyi simitçisi.",
"Bugünün ilk randevusu: Selim ve Nehir Aydın. Dosyada bir not: “Çift işitme engellidir. Türk İşaret Dili tercümanı talep edilmiştir.” Bir not daha, el yazısıyla, sekreterden: “Özel bir talepleri var.”",
"Simidin yarısını yiyorsun, yarısını poşete geri koyuyorsun. Kapı çalınıyor."
], secenekler: [
{ t: "Kapıyı kendin açarsın ve elini uzatırsın.", to: "a2", etki: { sefkat: 1 } },
{ t: "Dosyayı bir kez daha okursun. “Özel talep” ne olabilir?", to: "a2", etki: { yasa: 1, dosya: true } },
{ t: "İşaret dilinde bildiğin tek kelimeyi hatırlamaya çalışırsın: “Merhaba.”", to: "a2", etki: { cesitlilik: 1, merhaba: true } },
{ t: "Ekrandaki reklama bakarsın. Kusursuzluk bir haktır.", to: "a2", etki: { reklam: true } }
]},

a2: { saat: "Mart 2041", baslik: "İşaret", metin: [
P(S("a1C"), "Kapıyı açtığında elini kaldırıp işaret ettin: merhaba. Yanlış yaptın galiba; Nehir gülümsedi, sonra elini tutup doğru şekli gösterdi. Bir öğretmen gibi. Daha oturmadan bir ders aldın."),
P(S("a1D"), "Reklamdaki bebek gülümsüyor. Kusursuzluk bir haktır. Kimin hakkı? Bebeğin mi, ebeveynin mi, toplumun mu? Altı yıldır bu reklamın altında çalışıyorsun ve bu soruyu hiç sormadın."),
"Selim kırk yaşlarında, uzun boylu, bir mimar. Nehir otuz altı, bir sağırlar okulunda öğretmen. Tercüman Gül yanlarında; ellerini, onların ellerinin söylediğini sesli söylemek için hazırda tutuyor.",
"Selim işaret ediyor. Elleri hızlı, keskin; bir mimarın çizgileri gibi. Gül çeviriyor:",
"“Biz sağırız. İkimiz de doğuştan. Bizim ailemiz sağır. Benim annem, babam, dedem sağırdı. Dört kuşak. Bizim evimizde konuşulan dil işaret dili.”",
"Nehir ekliyor; onun elleri daha yumuşak, daha yavaş:",
"“Embriyolarımız taranacak. Biliyoruz. Bazıları sağır olacak; ikimiz de aynı geni taşıyoruz. Biz o embriyolardan birini istiyoruz. Sağır bir çocuk.”",
"Bir an duruyor. Sonra, gözlerini senden ayırmadan:",
"“Sağırlık bizim için bir eksiklik değil. Bir dil. Bir kültür. Bir aile. İşiten bir çocuk bizim evimizde yabancı olur. Biz bir yabancı doğurmak istemiyoruz.”"
], secenekler: [
{ t: "Kanunu açıklarsın: işitme kaybı listede, aktarım yasak.", to: "a3", etki: { yasa: 2, kanun: true } },
{ t: "Nehir'e çocukluğunu sorarsın.", to: "x_cocukluk", etki: { cesitlilik: 1 } },
{ t: "“Çocuğunuzun kendi geleceğini seçme hakkı ne olacak?” diye sorarsın.", to: "a3", etki: { yasa: 1, acik_gelecek: true } },
{ t: "Onlardan sana bir işaret öğretmelerini istersin: “aile”.", to: "x_isaret", etki: { cesitlilik: 1, sefkat: 1 } }
]},

x_cocukluk: { saat: "Mart 2041", baslik: "Bağlı Eller", metin: [
"Nehir bir süre sana bakıyor. Bu soruyu bekliyor muydu? Sonra ellerini kucağına indiriyor; bir an hiçbir şey söylemiyor. Sonra başlıyor.",
"Gül çeviriyor, sesi alçak:",
"“Annem babam işitiyordu. Ben doğduğumda doktor ‘Sağır’ dedi; annem iki yıl ağladı. Beni konuşturmaya çalıştılar. Bir okula verdiler; işaret dili yasaktı orada. Ellerimizle konuşursak ellerimizi sırtımızda bağlarlardı. Dudaktan okumayı öğrenmemiz gerekiyordu.”",
"Nehir ellerini arkaya götürüp gösteriyor; bileklerini çaprazlıyor. Sonra yeniden öne getiriyor.",
"“On beş yaşında bir yaz kampında ilk kez sağır çocuklarla tanıştım. İlk akşam onların ellerini izledim. Bir saat. İkinci akşam ben de konuştum. Hayatımda ilk kez bir dilim oldu. Hayatımda ilk kez anlaşıldım.”",
"Selim karısının elini tutuyor. Bir şey işaret etmiyor; tutuyor.",
"Nehir devam ediyor: “Annem öldüğünde hâlâ birbirimizi anlamıyorduk. Beni sevdi. Ben onu sevdim. Ama otuz yıl, aynı evde, iki yabancı gibi yaşadık. Ben bunu çocuğuma yaşatmak istemiyorum. Benim çocuğum benim dilimi konuşsun. Benim yüzüme baksın ve anlasın.”"
], secenekler: [
{ t: "“İşiten bir çocuk da sizin dilinizi öğrenebilir,” dersin.", to: "a3", etki: { yasa: 1, isiten_ogrenir: true } },
{ t: "“Anlıyorum,” dersin. Ve anlamaya çalışıyorsun.", to: "a3", etki: { sefkat: 1 } },
{ t: "Kardeşin Ozan'dan bahsedersin. Başka bir “farklı” doğanın hikâyesi.", to: "a3", etki: { cesitlilik: 1, ozan_anlatti: true } },
{ t: "Bir süre hiçbir şey söylemezsin. Ellerinin konuşmasını izlersin.", to: "a3", etki: { cesitlilik: 1 } }
]},

x_isaret: { saat: "Mart 2041", baslik: "Aile", metin: [
"Selim gülümsüyor; ilk kez. Ellerini kaldırıyor, yavaşça, senin görebileceğin hızda. İki elinin parmak uçlarını birleştiriyor, sonra bir daire çiziyor; bir çatı gibi, bir kucak gibi.",
"“Aile,” diyor Gül.",
"Deniyorsun. Parmakların beceriksiz; daire yamuk. Selim düzeltiyor, ellerini tutup. Bir daha deniyorsun. Daha iyi.",
"Nehir başka bir işaret gösteriyor: avucunu kalbinin üstüne koyup dışarı açıyor. “Sevgi,” diyor Gül. Sonra bir başkası: iki parmağını gözlerinin önünden ileri doğru uzatıyor. “Görmek.”",
"Sonra soruyorsun, Gül aracılığıyla: “Sessizlik için bir işaret var mı?”",
"Selim ile Nehir birbirine bakıyor. Sonra Selim, gülerek, uzun uzun işaret ediyor. Gül biraz bekleyip çeviriyor:",
"“Var, ama biz kullanmayız. Çünkü biz sessizlikte yaşamıyoruz. Sizler bizim sessizlikte yaşadığımızı sanıyorsunuz. Bizim dünyamız ellerle, yüzlerle, ışıkla, titreşimle dolu. Sessizlik sizin için bir yokluk. Bizim için değil. Bizim için ses bir yokluk değil; hiç olmamış bir şey. Olmayan bir şeyi özleyemezsiniz.”",
"Ellerin hâlâ havada; “aile” işaretinin yamuk dairesi."
], secenekler: [
{ t: "“Ama çocuğunuz işitirse, ikisine birden sahip olabilir,” dersin.", to: "a3", etki: { yasa: 1, ikisi: true } },
{ t: "“Aile” işaretini bir kez daha, düzgünce yaparsın.", to: "a3", etki: { sefkat: 1, cesitlilik: 1 } },
{ t: "“Bunu kanun yapanlara anlatmanız gerek,” dersin.", to: "a3", etki: { cesitlilik: 1, kanun_yapan: true } },
{ t: "Sessizce not alırsın: sessizlik bir yokluk değil.", to: "a3", etki: { cesitlilik: 1 } }
]},

a3: { saat: "Mart 2041, akşam", baslik: "Ozan", metin: [
P(S("a2A"), "Kanunu açıkladın: madde dokuz, liste, aktarım yasağı. Selim'in elleri durdu. Nehir başını eğdi. Gül çevirmeyi bitirdi ve bir süre kimse bir şey söylemedi. Sonra Selim işaret etti: “Biliyoruz. Bu yüzden buradayız. Bir yol arıyoruz.”"),
P(S("a2C"), "“Açık bir gelecek,” diye çevirdi Gül, Selim'in cevabını. “Siz işiten bir çocuğa açık bir gelecek veriyorsunuz. Biz sağır bir çocuğa bir aile veriyoruz. Hangisi daha açık?”"),
P(S("x_cocuklukA"), "“Öğrenebilir,” dedi Nehir. “Annem de öğrenebilirdi. Öğrenmedi. İkinci dil, birinci dil olmaz.”"),
P(S("x_cocuklukC"), "Ozan'ı anlattın. Nehir dikkatle dinledi. Sonra işaret etti: “Kardeşiniz bugün doğsaydı, bu binada ne olurdu?” Gül çevirirken sesi bir an titredi. Cevap veremedin."),
P(S("x_isaretB"), "“Aile” işaretini yaptın; bu sefer düzgün. Selim ile Nehir aynı anda gülümsedi. Bir yabancının ellerinde kendi dillerini görmenin ne demek olduğunu, yüzlerinden okudun."),
P(S("x_isaretC"), "Selim güldü, acı acı. “Anlattık,” diye çevirdi Gül. “Komisyonda. Bir tercümanla. Beş dakika verdiler. Sonra bir sağlık ekonomisti konuştu, yarım saat: bir işitme engellinin topluma maliyeti.”"),
"Akşam Ozan'ın fırınındasın. Keçiören'de, köşe başında küçük bir dükkân. Ozan otuz beş yaşında; un içinde, gülümseyerek simit diziyor. Sabah dörtte kalkıyor, her gün. Kimse ona bunu öğretmedi; o kendi öğrendi.",
"Seni görünce sarılıyor; unlu ellerle. “Abla! Bugün kaç kusursuz bebek yaptınız?”",
"Şaka yapıyor. Reklamı görmüş, her gün otobüste. Ama gözlerinde bir şey var.",
"Simitleri tezgâha diziyor. “Bugün bir müşteri geldi,” diyor. “Teyze. Bana baktı, ‘Artık senin gibiler doğmuyor, değil mi?’ dedi. Ben ‘Evet teyze, ben sonuncuyum,’ dedim. Güldü.”",
"Bir süre simitlere bakıyor. Sonra sana dönüyor. Sesi küçük.",
"“Abla, ben kusurlu muyum?”"
], secenekler: [
{ t: "“Hayır Ozan. Sen kusursuz bir simitçisin,” dersin.", to: "a4", etki: { sefkat: 1, simit: true } },
{ t: "“Kimse kusursuz değil. Ben de değilim,” dersin.", to: "a4", etki: { cesitlilik: 1 } },
{ t: "“Sen neden öyle düşünüyorsun?” diye sorarsın.", to: "a4", etki: { sefkat: 1, ozan_dusun: true } },
{ t: "Cevap veremezsin. Ona sarılırsın.", to: "a4", etki: { sefkat: 1, sarildi: true } }
]},

a4: { saat: "Mart 2041", baslik: "Direktör", metin: [
P(S("a3A"), "Ozan güldü. “Kusursuz bir simitçi,” diye tekrarladı. “Bunu tabelaya yazalım.” Sonra ciddileşti. “Ama ben simitçi olmadan önce de vardım abla.”"),
P(S("a3B"), "Ozan bir süre düşündü. “Sen de mi kusurlusun?” dedi. “Neyin kusurlu?” Bir cevap bulamadın. Ozan güldü: “Bilmiyorsun bile. Ben en azından biliyorum.”"),
P(S("a3C"), "“Herkes öyle bakıyor,” dedi Ozan. “Eskiden bakmazlardı. Eskiden benim gibi başkaları da vardı. Şimdi ben bir... müze gibiyim.” Bu kelimeyi nereden bulduğunu bilmiyorsun."),
P(S("a3D"), "Sarıldın. Ozan'ın unlu kolları sırtında. “Tamam abla,” dedi. “Tamam. Ağlama. Simitler soğur.”"),
"Ertesi sabah merkezin direktörü Dr. Bora Ersoy seni odasına çağırıyor. Elli yaşında, spor ayakkabılı, gülümseyen bir adam. Masasında bir ekran; ekranda grafikler.",
"“Aslı, rakamlar harika,” diyor. “Bu çeyrekte Optimum Paket satışları yüzde kırk arttı. Sen en iyi danışmanlarımızdansın; ama paket satışların düşük. Neden?”",
"Optimum Paket: listede olmayan özellikler için seçim ve düzenleme. Boy, kas yapısı, hastalık riskleri, ve “bilişsel potansiyel puanı”. Yasal. Pahalı. Her çifte sunulması gerekiyor; sen sunuyorsun ama ısrar etmiyorsun.",
"Sonra Bora sesini alçaltıyor. “Ve Aydın çifti. Duydum. Sağır bir embriyo istiyorlarmış. Aslı, bu konuda tartışma yok. Yasa açık. Lisansımız buna bağlı. Bir hata, bütün merkezi kapatır.”",
"Bir süre bekliyor. “Gelecek ay klinik koordinatörlük açılıyor. Adın listede. Bunu bilmeni istedim.”"
], secenekler: [
{ t: "“Yasayı biliyorum Bora Bey. Uygulayacağım,” dersin.", to: "a5", etki: { yasa: 2 } },
{ t: "“Paket satışlarım düşük, çünkü çiftlere çocuklarını bir ürün gibi seçtirmek istemiyorum,” dersin.", to: "kus_gul", etki: { cesitlilik: 2, paket_ret: true } },
{ t: "“Aydın çiftinin durumu bir etik kurula gitmeli,” dersin.", to: "a5", etki: { yasa: 1, cesitlilik: 1, kurul: true } },
{ t: "Terfiyi düşünürsün. Bir şey söylemezsin.", to: "kus_kat", etki: { terfi_dusun: true } }
]},


kus_gul: { saat: "Mart 2041", baslik: "Gül", metin: [
"Bora'nın odasından çıkıp kantine iniyorsun. Bir köşede tercüman Gül, tek başına, bir kahvenin başında. Seni görünce el sallıyor; sonra fark ediyorsun ki el sallamıyor, işaret ediyor: “Gel.”",
"Oturuyorsun. Gül kırklarında; sesi yumuşak, elleri hiç durmuyor. Konuşurken bile elleri bir şey söylüyor gibi.",
"“Ben bir CODA'yım,” diyor. “Sağır ebeveynlerin işiten çocuğu. Annem babam sağır. Ben işiterek doğdum.”",
"Kahvesini karıştırıyor. “Beş yaşında annemin tercümanıydım. Doktorda, bankada, öğretmenle görüşmede. Babamın işten atıldığını patronundan ben duydum, ben çevirdim. Altı yaşındaydım. Babamın yüzünü hiç unutmadım; benim ağzımdan duyduğu için.”",
"“Evimde iki dil vardı ve ben ikisinin arasında bir köprüydüm. Köprüler kimseye ait değildir. Sağırlar beni işiten sayar; işitenler beni sağırların çocuğu. Ben ikisiyim ve hiçbiri.”",
"Sana bakıyor. “Nehir ile Selim'i anlıyorum. Bir çocuk isterler ki onların dünyasında doğsun, köprü olmak zorunda kalmasın. Ama annemi babamı da anlıyorum; beni çok sevdiler. İşiten bir kız, sağır bir evde. Hiç yabancı olmadım. Yalnızca yorgun oldum.”",
"Bir süre susuyor. “Size bir şey söyleyeyim mi? Kimse bana sormadı, ben hangisi olmak isterdim diye.”"
], secenekler: [
{ t: "“Hangisi olmak isterdin?” diye sorarsın.", to: "a5", etki: { cesitlilik: 1, gul_sordu: true } },
{ t: "“Bunu Selim ve Nehir'e anlatır mısın?” diye sorarsın.", to: "a5", etki: { sefkat: 1, gul_anlatsin: true } },
{ t: "“Bu hikâye yasanın lehine bir argüman olabilir,” dersin. Düşünerek.", to: "a5", etki: { yasa: 1 } },
{ t: "Kahveni bitirip ona teşekkür edersin. Bir şeyi tartmak için zamana ihtiyacın var.", to: "a5", etki: { sefkat: 1 } }
]},

kus_kat: { saat: "Mart 2041", baslik: "On Beşinci Kat", metin: [
"Bora seni yeni binaya götürüyor. Henüz açılmamış; Eskişehir yolunun öbür tarafında, camdan bir kule. Asansör on beşinci kata çıkıyor.",
"Kat boş. Beyaz duvarlar, büyük pencereler, Ankara'nın bütün batısı. Bora bir köşeyi gösteriyor. “Senin ofisin. Klinik koordinatör.”",
"Sonra koridor boyunca yürüyor, her kapıyı açıyor. “Burası danışma odaları. On iki tane. Burası embriyo görüntüleme. Burası Optimum Paket sunum salonu; bir sinema perdesi, çiftler embriyolarının olası yüzlerini görecek, yapay zekâ çizimi, on sekiz yaşında nasıl görünecekleri.”",
"Duvarlarda henüz asılmamış posterler, yere dizilmiş. Gülümseyen bebekler, gülümseyen çocuklar, gülümseyen gençler. Hepsi birbirine benziyor; bir şekilde.",
"Bora pencerenin önünde duruyor. “Aslı,” diyor, “on yıl sonra Türkiye'de doğan her çocuğun yüzde yetmişi bu binadan geçecek. Bir nesil. Sen o neslin mimarı olabilirsin.”",
"Pencereden aşağı bakıyorsun. Eskişehir yolu, arabalar, insanlar. Ve bir yerde, Keçiören'de, görünmeyen bir köşede, sabah dörtte kalkıp simit yapan bir adam.",
"“Bir neslin mimarı,” diyor Bora. “Düşün bunu.”"
], secenekler: [
{ t: "“Düşüneceğim,” dersin. Gerçekten.", to: "a5", etki: { yasa: 1, terfi_dusun: true } },
{ t: "“Bu posterlerde neden hiç Down sendromlu bir çocuk yok?” diye sorarsın.", to: "a5", etki: { cesitlilik: 2, poster_soru: true } },
{ t: "Pencereden Keçiören'in yönünü bulmaya çalışırsın.", to: "a5", etki: { sefkat: 1 } },
{ t: "“Bir mimar bina yapar Bora Bey. İnsan değil,” dersin.", to: "a5", etki: { cesitlilik: 1, mimar: true } }
]},

a5: { saat: "Nisan 2041", baslik: "Altı Embriyo", metin: [
P(S("kus_gulA"), "Gül bir süre düşündü. Sonra elleri hareket etti; senin anlamadığın bir işaret. Sesli söyledi: “İkisi. Ama kimse ikisi olmama izin vermedi. Herkes birini seçmemi istedi.”"),
P(S("kus_gulB"), "Gül başını salladı. Ertesi hafta Selim ve Nehir'le bir kafede buluştu; sen yoktun. Sonra Nehir sana bir mesaj attı: “Gül'ü dinledik. Hiçbir şey değişmedi. Ama her şey biraz değişti.”"),
P(S("kus_gulC"), "Gül yüzüne baktı. “Argüman,” dedi. “Benim hayatım bir argüman mı oldu şimdi?” Kalktı. Kahvesini bitirmeden gitti. Haklıydı."),
P(S("kus_gulD"), "Gül'e teşekkür ettin. Gül gülümsedi, sonra ellerini kaldırıp bir işaret yaptı; avucunu kalbine koyup dışarı açtı. Sevgi. Ya da: anlaşıldım."),
P(S("kus_katA"), "“Düşüneceğim,” dedin. Bora gülümsedi. Asansörle inerken aynada kendine baktın; on beşinci katta bir ofisin sahibi olabilecek bir kadına."),
P(S("kus_katB"), "Bora bir an durdu. “Pazarlama bölümü seçiyor posterleri,” dedi. Sonra, daha yavaş: “İyi soru. Ama kimse sormuyor.” Ertesi hafta posterler asıldı. Hâlâ hiçbiri yoktu."),
P(S("kus_katC"), "Keçiören'i buldun; ya da bulduğunu sandın. Uzakta, bir tepenin üstünde, gri bir mahalle. Bora ne baktığını sormadı."),
P(S("kus_katD"), "Bora'nın yüzü bir an sertleşti. Sonra güldü. “Felsefe,” dedi. “Hep felsefe.” Asansörde konuşmadınız."),
P(S("a4A"), "Bora gülümsedi. “Biliyordum,” dedi. Bir güvenin, bir kafese ne kadar benzeyebileceğini düşündün."),
P(S("a4B"), "Bora'nın gülümsemesi bir an dondu, sonra yeniden yerine oturdu. “Felsefe güzel,” dedi. “Ama bu bina felsefeyle ayakta durmuyor.”"),
P(S("a4C"), "“Kurul,” dedi Bora. “Kurul yasayı uygular. Ama tamam, kayda geçsin. Senin vicdanın rahatlasın.” Vicdanının rahatlamasının, onun için bir hizmet olduğunu fark ettin."),
P(S("a4D"), "Bir şey söylemedin. Bora başını salladı, memnun. Sessizliğin bir onay gibi okunduğu bir odadan çıktın."),
"Nisanda laboratuvar sonuçları geliyor. Aydın çiftinin altı embriyosu. Ekranda altı satır.",
"Bir: işitme kaybı geni, iki kopya. Sağır olacak. Başka bir bulgu yok. İki: aynı. Sağır. Üç: işiten, taşıyıcı. Dört: işiten; Optimum Paket kriterlerine göre bilişsel potansiyel puanı yüksek, yüzde beşlik dilimde. Beş: işiten; ama bir kalp kası hastalığı için yüksek risk.",
"Altı: kromozom yirmi bir, üç kopya. Down sendromu.",
"Altıncı satırda bir süre duruyorsun. Kanuna göre bu embriyo atılacak. Bir tıklama. Bir sistem kaydı. Otuz beş yıl önce aynı tıklama annenin önünde olsaydı, bu sabah sana simit getiren kimse olmazdı.",
"Bilgisayar seni bekliyor. Çifte bütün sonuçları göstermen gerekiyor. Ama hangisinden başlayacağını, hangisini nasıl anlatacağını sen seçeceksin. Bir danışmanın sesi tarafsız değildir; ne kadar tarafsız olmaya çalışsa da."
], secenekler: [
{ t: "Sonuçları sırasıyla, hiçbir yorum katmadan anlatırsın.", to: "a6", etki: { yasa: 1, tarafsiz: true } },
{ t: "Önce dördüncü embriyoyu anlatırsın: işiten, yüksek puanlı. Belki onları yumuşatır.", to: "a6", etki: { yasa: 1, dort_once: true } },
{ t: "Altıncı embriyodan, Down sendromlu olandan da bahsedersin; kardeşini anlatarak.", to: "a6", etki: { cesitlilik: 1, alti_anlatti: true } },
{ t: "Önce birinci ve ikinci embriyoyu anlatırsın. İstediklerinin var olduğunu bilsinler.", to: "a6", etki: { cesitlilik: 1, sefkat: 1 } }
]},

a6: { saat: "Nisan 2041", baslik: "Seçim", metin: [
P(S("a5A"), "Sırasıyla anlattın. Gül çevirdi. Altıncıya geldiğinde Nehir bir el hareketi yaptı; Gül bir an duraksadı, sonra çevirdi: “O da mı atılacak?” Evet, dedin."),
P(S("a5B"), "Dördüncü embriyoyu anlattın: işiten, sağlıklı, “bilişsel potansiyeli yüksek.” Selim ellerini masaya koydu ve bir süre işaret etmedi. Sonra: “Bize zeki bir yabancı mı satıyorsunuz?”"),
P(S("a5C"), "Ozan'ı anlattın; simitleri, sabah dördü, ‘Ben sonuncuyum teyze’. Nehir'in gözleri doldu. Selim işaret etti: “Sizin kardeşiniz de bizim gibi. Var olmaması için bir yasa yazılmış birisi.”"),
P(S("a5D"), "Birinci ve ikinci embriyoyu anlattın. Nehir'in elleri karnına gitti; henüz hiçbir şey olmayan bir karna. Selim karısının omzunu tuttu."),
"Masanın üstünde altı satırlık bir kâğıt. Karşında iki insan ve onların elleri. Yanında bir tercüman.",
"Selim işaret ediyor. Gül çeviriyor; ama sesi, artık bir tercümanın sesi değil, bir tanığın:",
"“Biz size bir şey sormuyoruz Aslı Hanım. Size bir şey anlatıyoruz. Bizim çocuğumuz bizim dilimizle doğsun istiyoruz. Siz bize işiten bir embriyo verirseniz, onu da severiz. Biz anne baba olacağız. Ama bu ülke bize, sizin gibi olmayan bir çocuğu sevemezsiniz demiş olacak. Yasa bize, siz kusurlusunuz ve kusurunuzu çoğaltamazsınız demiş olacak.”",
"Nehir son bir işaret yapıyor; çok yavaş, senin anlayabileceğin bir hızda. Tanıyorsun: avuç, kalp, dışarı açılış. Sevgi. Sonra bir soru işareti; kaşları kalkık.",
"Şimdi bir şey yapacaksın. Ne yaparsan yap, bu dört insanın hayatında, ve kardeşinin hayatında, bir şey değişecek."
], secenekler: [
{ t: "Yasaya uyarsın: işiten bir embriyo önerirsin, üçüncüyü.", to: "y1", etki: { yasa: 2, kol: "yasa" } },
{ t: "Bir yol bulursun: sistem kaydında bir “belirsiz sonuç” işaretlersin; birinci embriyo aktarılabilir.", to: "i1", etki: { cesitlilik: 2, kol: "ihlal" } },
{ t: "Çifte dava açmalarını önerirsin. Sen de tanık olacaksın.", to: "d1", etki: { cesitlilik: 1, yasa: 1, kol: "dava" } },
{ t: "Bir uzlaşma önerirsin: birinci embriyonun işitme genini düzeltmek. Yasal ve “onların” embriyosu.", to: "z1", etki: { yasa: 1, sefkat: 1, kol: "duzenle" } }
]},

/* ---------- YASA KOLU ---------- */
y1: { saat: "Nisan 2041", baslik: "Üçüncü", metin: [
"“Üçüncü embriyo,” diyorsun. “İşiten, taşıyıcı. Sağlıklı. Yasa bunu öneriyor; ben de öneriyorum.”",
"Gül çeviriyor. Selim'in yüzü kıpırdamıyor. Nehir gözlerini kapatıyor.",
"Uzun bir sessizlik. Sessizlik; bu odadaki dört kişiden ikisi için başka bir anlamı olan kelime.",
"Sonra Nehir gözlerini açıyor ve işaret ediyor. Gül çeviriyor:",
"“Bir çocuk istiyoruz. Yıllardır. Üç tüp bebek denemesi. Bu dördüncüsü. Beşincisine paramız yok.” Bir süre duruyor. “Eğer bu kapı kapalıysa, bu kapıdan geçeceğiz. Üçüncüyü aktarın.”",
"Selim karısına dönüyor. Hızlı, sert işaretler. Gül çevirmiyor; onların arasındaki bir konuşma. Sonra Selim sana dönüyor:",
"“Biz bir çocuğu seveceğiz. Ama bu kâğıdı imzalarken bilin ki bir yasa bizim yerimize karar verdi. Ve siz o yasanın elisiniz.”",
"Nehir kâğıdı imzalıyor. Selim bir süre bekliyor. Sonra o da imzalıyor."
], secenekler: [
{ t: "“Haklısınız,” dersin. Başka bir şey söyleyemeden.", to: "y2", etki: { sefkat: 1 } },
{ t: "“Yasanın eli değilim. Ama yasanın içindeyim,” dersin.", to: "y2", etki: { yasa: 1 } },
{ t: "Onlara bebeğe işaret dilini ilk dili olarak öğretmeleri için kaynaklar önerirsin.", to: "y2", etki: { cesitlilik: 1, kaynak: true } },
{ t: "Kâğıdı alırsın ve sessizce dosyaya koyarsın.", to: "y2", etki: { yasa: 1 } }
]},

y2: { saat: "Mayıs – Aralık 2041", baslik: "Titreşim", metin: [
P(S("y1C"), "Bir liste verdin: sağırlar derneği, işaret dili bebek grupları, “CODA” denen işiten çocuklarla sağır ebeveynlerin buluştuğu topluluklar. Nehir listeye baktı, sonra katlayıp çantasına koydu. Teşekkür etmedi. Ama atmadı da."),
"Aktarım tuttu. Nehir hamile. Aylar geçiyor; sen başka çiftlerle, başka embriyolarla, başka altı satırlık kâğıtlarla.",
"Bir eylül sabahı bir e-posta. Nehir'den. Tercümansız; yazılı Türkçe, biraz kırık, ikinci bir dil gibi:",
"“Aslı Hanım. Bebek hareket ediyor. Selim'in eli karnımda. Bebeğin müzik sevdiğini doktor söyledi; ultrasonda müzik açınca kıpırdıyormuş. Biz müziği duymuyoruz. Titreşimini hissediyoruz. Selim hoparlörü karnıma dayadı. Bebek kıpırdadı. Selim ağladı. Bebek bizim duymadığımız bir şeyi duyuyor. İçimde bir yabancı değil. Bir başka dünya.”",
"Aralıkta doğum. Bir kız. Adı Deniz. Doğumda bir tercüman yok; hastane bulamamış. Nehir doğum boyunca ebelerin ne söylediğini anlamamış. Bebeğin ilk ağlayışını duymamış; göğsünde, kendi teninde hissetmiş.",
"Bir fotoğraf geliyor: Nehir, Deniz ve Selim. Selim'in elleri bebeğin yüzünün önünde, bir işaret yapıyor. Altında bir not: “Ona ilk söylediğimiz kelime: aile.”"
], secenekler: [
{ t: "Onları ziyarete gidersin.", to: "y3", etki: { sefkat: 1, ziyaret: true } },
{ t: "Bir tebrik mesajı yazarsın; işaret dilinde “aile” sembolünü ekleyerek.", to: "y3", etki: { cesitlilik: 1 } },
{ t: "Hastaneye doğumda tercüman bulunmamasıyla ilgili bir şikâyet yazarsın.", to: "y3", etki: { cesitlilik: 1, sikayet: true } },
{ t: "Fotoğrafı kaydedersin. Bir şey yazmazsın.", to: "y3", etki: { yasa: 1 } }
]},

y3: { saat: "2042", baslik: "Deniz", metin: [
P(S("y2A"), "Eryaman'da bir apartman dairesi. Kapı zili yerine bir lamba yanıyor. İçeride her odada ışıklı bir bebek monitörü; bebek ağlarsa titreşen bir bilezik. Nehir'in kolunda."),
"Deniz on aylık. İşitiyor. Kapı çarpınca dönüyor; müzik açılınca gülüyor.",
"Ve işaret ediyor. Daha konuşmuyor ama elleriyle bir şeyler yapıyor. “Süt.” “Anne.” Bir de, kendi uydurduğu bir işaret: elini kulağına götürüp açıyor. Ne anlama geldiğini kimse bilmiyor. Nehir “ses” olduğunu düşünüyor.",
"Nehir seni mutfakta yakalıyor. Bu kez tercümanla, Gül'le. Gül, sanki ailenin bir parçası olmuş.",
"“Onu çok seviyorum,” diyor Nehir. “Bilmeni istiyorum. Çok. Ama bir gün konuşacak. Sesle. Ve ben onu duymayacağım. Arkadaşlarıyla telefonda konuşacak, şarkı söyleyecek, ben bir duvarın öbür yanında olacağım. Annemle benim aramdaki duvar, şimdi benim ile kızım arasında. Yönü değişti, o kadar.”",
"Deniz salonda Selim'in kucağında, babasının yüzüne bakıp ellerini sallıyor; iki dilin arasında, ikisine de tam ait olmayacak bir hayatın başında.",
"Bir yasa bu çocuğu işiten yaptı. Bir aile onu sağır bir dünyada büyütüyor. Ve sen, bu ikisinin ortasında, bir mutfakta duruyorsun."
], secenekler: [
{ t: "“Duvar her zaman bir yerde olur Nehir. Siz ona bir kapı da açmışsınız,” dersin.", to: "t1", etki: { sefkat: 1, cocuk: "isiten" } },
{ t: "“Yanlış mı yaptım?” diye sorarsın.", to: "t1", etki: { cesitlilik: 1, cocuk: "isiten", soru: true } },
{ t: "Deniz'in uydurduğu işareti yaparsın: el kulağa, sonra açılış.", to: "t1", etki: { cesitlilik: 1, sefkat: 1, cocuk: "isiten", deniz_isaret: true } },
{ t: "Hiçbir şey söylemezsin. Ellerini izlersin.", to: "t1", etki: { cocuk: "isiten" } }
]},

/* ---------- İHLAL KOLU ---------- */
i1: { saat: "Nisan 2041", baslik: "Belirsiz", metin: [
"Sistemi tanıyorsun. On iki yıldır kullanıyorsun. Bir embriyonun sonucunu “belirsiz” olarak işaretlersen, yeniden test istenir. Yeniden test başka bir laboratuvarda yapılır. Ve o laboratuvarın sonuçları sana gelir; senin onayına.",
"Bir sonucu bir yalanla değiştirmek değil. Bir sonucu bir belirsizlikle örtmek. Bir hafta. Bir kâğıt. Bir onay.",
"Bunu çifte söylemiyorsun. Yalnızca, “Birinci embriyonun sonucunda bir belirsizlik var, yeniden test edilecek,” diyorsun. Selim bir süre sana bakıyor. Bir şey anlıyor; ya da anlamak istiyor.",
"Nehir işaret ediyor; Gül çeviriyor: “Belirsizlik mi? İyi bir belirsizlik mi, kötü bir belirsizlik mi?”",
"“Bilmiyorum,” diyorsun. Ve bu, garip bir şekilde, doğru.",
"Bir hafta sonra ikinci laboratuvarın sonucu ekranında. Birinci embriyo: işitme kaybı geni, iki kopya. Aynı sonuç. Senin onay butonun.",
"Butonun iki seçeneği var: “Onayla” ve “Belirsiz, aktarıma uygun”. İkincisi, mozaiklik şüphesi olan embriyolar için. Nadiren kullanılır. Kimse kontrol etmez. Bir tıklama."
], secenekler: [
{ t: "“Belirsiz, aktarıma uygun”u seçersin.", to: "i2", etki: { cesitlilik: 1, ihlal: true } },
{ t: "Son anda “Onayla”yı seçersin. Yapamazsın.", to: "y1", etki: { yasa: 2, kol: "yasa", vazgecti: true } },
{ t: "Seçmeden önce Selim ve Nehir'e gerçeği söylersin; ne yaptığını, ne risk aldığını.", to: "i2", etki: { cesitlilik: 1, sefkat: 1, ihlal: true, ciftle: true } },
{ t: "Gül'e danışırsın. O da bir tanık olacak.", to: "i2", etki: { sefkat: 1, ihlal: true, gul_bilir: true } }
]},

i2: { saat: "Haziran 2041", baslik: "Denetim", metin: [
P(S("i1C"), "Selim ve Nehir'e söyledin. Nehir ağladı. Selim işaret etti: “Bunu bizim için mi yapıyorsunuz?” Hayır, dedin. Bunu doğru olduğunu düşündüğün için. Selim başını salladı: “O zaman bizim için yapıyorsunuz. Biz doğruyuz.”"),
P(S("i1D"), "Gül uzun süre sustu. “Ben bir tercümanım,” dedi. “Ellerin söylediğini sese çeviririm. Bunu çevirmem gerekecekse, bir mahkemede, çevireceğim. Bunu bilin.” Sonra ekledi: “Ama şu an bir şey çevirmiyorum. Şu an sadece buradayım.”"),
"Aktarım yapıldı. Tuttu. Nehir hamile.",
"Haziranda merkezde bir iç denetim. Rutin, diyor Bora; her yıl yapılır. Ama bu yıl denetçiler belirsiz işaretlenen embriyolara bakıyor. Sistemde altı tane var. Beşi bir yıl öncesinden, başka danışmanlardan. Biri senin.",
"Bora seni odasına çağırıyor. Ekranında bir dosya: Aydın, embriyo bir. “Aslı,” diyor, gülümsemeden. “Bu belirsizlik neydi?”",
"İkinci laboratuvarın raporu da ekranda. Açık, net: iki kopya. Hiçbir belirsizlik yok.",
"“Bunu bana açıklayabilirsin,” diyor Bora. “Ya da ben bunu bir teknik hata olarak kapatabilirim. Ama bir şartla. Klinik koordinatörlüğü kabul edersin. Ve bundan sonra her dosyan, benim masamdan geçer.”"
], secenekler: [
{ t: "Her şeyi itiraf edersin. Bilerek yaptığını.", to: "i3", etki: { cesitlilik: 1, yasa: 1, itiraf: true } },
{ t: "Teklifi kabul edersin. Dosya kapanır.", to: "i3", etki: { yasa: 1, terfi: true, kapatti: true } },
{ t: "“Bir teknik hataydı,” dersin. Terfiyi reddederek.", to: "i3", etki: { teknik: true } },
{ t: "“Nehir hamile. Ne yapacaksınız, bebeği mi aldıracaksınız?” dersin.", to: "i3", etki: { cesitlilik: 1, meydan: true } }
]},

i3: { saat: "Aralık 2041", baslik: "Sessiz Doğum", metin: [
P(S("i2A"), "İtiraf ettin. Bora uzun süre sana baktı. Sonra raporu yazdı. Sağlık Bakanlığı'na gitti. Lisansın askıya alındı; soruşturma açıldı. Selim ve Nehir'e dokunulmadı; yasa ebeveynleri değil, sağlık çalışanını cezalandırıyor."),
P(S("i2B"), "Kabul ettin. Dosya “teknik hata” olarak kapandı. Bir hafta sonra yeni odana taşındın. Kapında yeni bir tabela: Klinik Koordinatör. Pencereden reklam ekranı görünüyor: Kusursuzluk bir haktır."),
P(S("i2C"), "“Teknik hata,” dedin. Bora sana uzun süre baktı. “Teknik hata,” diye tekrarladı, “bir kez olur.” Dosyayı kapattı. Terfi listesinde adın artık yoktu."),
P(S("i2D"), "Bora'nın yüzü bembeyaz oldu. “Hayır,” dedi. “Tabii ki hayır.” Bir yasanın, bir bebeğin varlığıyla karşılaştığı anda, nasıl birden susabildiğini gördün. Dosya kapandı. Kimse bunun ne anlama geldiğini yüksek sesle söylemedi."),
"Aralıkta doğum. Bir oğlan. Adı Ege.",
"Bu kez doğumda tercüman var: Gül. Selim ve Nehir'in yanında, ellerini ebelerin söylediklerine çeviriyor. Bebek doğduğunda ağlıyor. Nehir ağlayışı duymuyor; göğsünde hissediyor.",
"İki hafta sonra işitme taraması. Sonuç: işitme yok, iki kulakta. Hastanede bir hemşire Nehir'e acıyarak bakıyor; bir broşür uzatıyor: “Koklear implant seçenekleri.”",
"Nehir broşürü nazikçe geri veriyor. Sonra oğlunun yüzünün önünde ellerini kaldırıyor ve bir işaret yapıyor. Gül çevirmiyor; çevirmesine gerek yok. Ege annesinin ellerine bakıyor. Gözleri o ellerin peşinde.",
"Bir fotoğraf geliyor. Altında bir not, yazılı Türkçe: “Bizim dilimizle doğdu. Teşekkür ederiz. Ne pahasına olduğunu biliyoruz.”"
], secenekler: [
{ t: "Onları ziyarete gidersin. Ne olursa olsun.", to: "t1", etki: { sefkat: 1, cocuk: "sagir", ziyaret: true } },
{ t: "Fotoğrafa bakar, ağlarsın.", to: "t1", etki: { sefkat: 1, cocuk: "sagir" } },
{ t: "Bir cevap yazarsın: “Pahası benim. Sizin değil.”", to: "t1", etki: { cesitlilik: 1, cocuk: "sagir" } },
{ t: "Fotoğrafı silersin. Kanıt olmasın.", to: "t1", etki: { yasa: 1, cocuk: "sagir", sildi: true } }
]},

/* ---------- DAVA KOLU ---------- */
d1: { saat: "Mayıs 2041", baslik: "Dilekçe", metin: [
"Selim ve Nehir bir avukat buluyor; engelli hakları alanında çalışan genç bir kadın, Av. Zeynep Er. Dava: Kalıtsal Hastalıkların Önlenmesi Kanunu'nun dokuzuncu maddesinin, işitme kaybını “ağır kalıtsal engellilik” olarak sayan kısmının iptali. Anayasa'ya aykırılık: aile hayatına saygı, ayrımcılık yasağı, kültürel haklar.",
"Avukat senden bir şey istiyor: bilirkişi tanıklığı. Bir genetik danışman olarak. Merkezin içinden.",
"“Siz bu sistemin içinden konuşursanız,” diyor Av. Er, “bu dava bir azınlığın talebi olmaktan çıkar. Bir meslek içi itiraza dönüşür.”",
"Bora haberi duyuyor. Seni çağırıyor. Bu kez gülümsemiyor.",
"“Tanıklık edersen,” diyor, “bu merkezde çalışamazsın. Kendi işvereninin uyguladığı yasaya karşı tanıklık edemezsin. Bu bir sadakat meselesi. Ayrıca, Aslı, bu dava kazanılırsa ne olacak biliyor musun? Sağır çocuk isteyen çiftler, cücelik isteyen çiftler, başka şeyler isteyen çiftler. Bir kapı açılır.”",
"Akşam Ozan'a anlatıyorsun. Ozan simit hamurunu yoğururken dinliyor. Sonra: “Abla, ben de mi bir kapıydım? Annemiz beni doğururken?”"
], secenekler: [
{ t: "Tanıklık etmeyi kabul edersin. Ne pahasına olursa olsun.", to: "d2", etki: { cesitlilik: 2, tanik: true } },
{ t: "Yazılı bir bilirkişi raporu vermeyi teklif edersin; mahkemeye çıkmadan.", to: "d2", etki: { cesitlilik: 1, yasa: 1, yazili: true } },
{ t: "Reddedersin. Ama çifte başka bir uzman bulmalarında yardım edersin.", to: "d2", etki: { yasa: 1, sefkat: 1, baska_uzman: true } },
{ t: "Ozan'a cevap verirsin: “Hayır. Sen bir insandın. Kapılar insanlardan sonra gelir.”", to: "d2", etki: { sefkat: 1, cesitlilik: 1, tanik: true, ozan_cevap: true } }
]},

d2: { saat: "Ekim 2041", baslik: "Mahkeme", metin: [
P(function(d){ return d.tanik; }, "Bora seni işten çıkarmadı; “izne” gönderdi. Ücretsiz, süresiz. Bir kapıyı kapatmanın kibar bir yolu."),
P(S("d1C"), "Başka bir uzman buldunuz; emekli bir profesör, kendisi de işitme engelli. Mahkemede o konuştu. Sen salonun arka sırasında oturdun. Bir yerde Nehir dönüp sana baktı; bir şey işaret etti. Anlamadın. Sonra Gül'e sordun: “Burada olduğun için,” demiş."),
"Anayasa Mahkemesi'nde sözlü savunma. Mermer bir salon, yüksek bir kürsü, on beş üye. Bir köşede iki tercüman, sırayla çeviriyor. İzleyici sıralarında sağır insanlar; yüzlerce. Elleri, salonun bir yerinde, sessiz bir dalga gibi hareket ediyor.",
P(function(d){ return d.tanik || d.yazili; }, "Sıra sende. Kürsüye çıkıyorsun. On beş yüz sana bakıyor; ve arkanda, yüzlerce el."),
P(function(d){ return d.tanik || d.yazili; }, "Bir genetik danışman olarak ne gördüğünü anlatıyorsun: altı satırlık kâğıtları, bir tıklamayla silinen embriyoları, “ağır” kelimesinin kim tarafından, neye göre konduğunu. Ve bir şey daha. Bir kardeşi."),
"Hükümet adına bir avukat konuşuyor. Argümanları güçlü: çocuğun açık gelecek hakkı, işiten bir dünyada yaşamanın kolaylığı, devletin sağlık politikası, kaygan zemin. Bazı üyeler not alıyor.",
"Sonra Nehir konuşuyor. Kürsüde, ellerle. Gül çeviriyor. On dakika. Ellerinin bağlandığı okulu anlatıyor. On beş yaşındaki yaz kampını. Annesiyle otuz yıllık yabancılığı. Ve sonra bir cümle; mahkeme salonunda, Gül'ün sesi titreyerek çeviriyor:",
"“Bu yasa bana, sen var olmamalıydın diyor. Ben buradayım. Ve size soruyorum: kimin var olmaması gerektiğine, var olanlar mı karar verecek?”"
], secenekler: [
{ t: "Salondaki sağır izleyicilerle birlikte ellerini kaldırıp sallarsın; işaret dilinde alkış.", to: "d3", etki: { cesitlilik: 1, alkis: true } },
{ t: "Hareketsiz oturursun. Bir tanık olarak.", to: "d3", etki: { yasa: 1 } },
{ t: "Hükümet avukatının yanına gidip argümanlarını dinlersin; gerçekten.", to: "d3", etki: { yasa: 1, dinledi: true } },
{ t: "Nehir'in yanına gidersin.", to: "d3", etki: { sefkat: 1 } }
]},

d3: { saat: "Ocak 2042", baslik: "Karar", metin: [
P(S("d2A"), "Yüzlerce el havada sallandı. Bir sessiz alkış. Mahkeme başkanı bir an durdu, sonra devam etti. Ertesi gün gazetelerde bir fotoğraf: havada eller, ve aralarında, beceriksizce sallanan bir genetik danışmanın elleri."),
P(S("d2C"), "Hükümet avukatını dinledin. Bazı argümanları iyiydi; gerçekten iyiydi. Bir çocuğun, ebeveynlerinin seçimlerinden bağımsız bir gelecek hakkı. Bunu reddedemedin. Ama Nehir'in sorusunu da reddedemedin. İki doğru, bir mahkeme salonunda, yan yana."),
"Ocakta karar. Anayasa Mahkemesi, sekize yedi.",
"Dokuzuncu maddenin işitme kaybına ilişkin kısmı iptal edildi. Gerekçe: “İşitme kaybı, kendine özgü dili ve kültürü olan bir topluluğun parçası olabilir. Devlet, bir yaşam biçimini, sağlık politikası adına yok sayamaz.”",
"Ama karar bir şerh içeriyor; yedi üyenin karşı oyu: “Bu karar, ebeveynlerin çocuklarını kendi suretlerinde yaratma isteğini, çocuğun açık bir geleceğe sahip olma hakkının önüne koymaktadır. Bir gün bu çocuklar büyüyecek ve kendilerine bu seçimi kimin yaptığını soracaklardır.”",
"Selim ve Nehir mahkemenin önünde, karda, sarılıyorlar. Sonra Nehir sana dönüyor. Bir işaret yapıyor. Bu kez anlıyorsun; çok çalıştın: “Teşekkür ederim.” Ve sonra bir başkası, anlamadığın. Gül çeviriyor: “Şimdi korkuyorum.”",
"Kazandılar. Ve kazandıkları şeyin ağırlığı, şimdi, onların omzunda."
], secenekler: [
{ t: "“Korkmanız iyi,” dersin. “Bu bir sorumluluk.”", to: "d4", etki: { yasa: 1 } },
{ t: "Nehir'e sarılırsın.", to: "d4", etki: { sefkat: 1 } },
{ t: "Karşı oy şerhini bir kez daha okursun. Haklı bir yanı var mı?", to: "d4", etki: { yasa: 1, serh: true } },
{ t: "“Şimdi birinci embriyo,” dersin. “Birlikte.”", to: "d4", etki: { cesitlilik: 1 } }
]},

d4: { saat: "Aralık 2042", baslik: "Ece", metin: [
"Aktarım mart ayında yapılıyor; bir başka merkezde, çünkü Bora'nın merkezi “kurumsal politika” gereği bu tür aktarımları yapmayı reddediyor. Yasal; ama yapmıyor.",
"Aralıkta bir kız. Adı Ece. İşitme taraması: işitme yok.",
"Bu doğum gazetelerde. “Türkiye'nin yasal olarak seçilmiş ilk sağır bebeği.” Bir köşe yazarı bunu “bilimin geri adımı” olarak tanımlıyor. Bir başkası “insan haklarının zaferi.” Sosyal medyada binlerce yorum. Bazıları Selim ve Nehir'in adını, adresini paylaşıyor.",
"Bir akşam Nehir'den bir mesaj, tercümansız, yazılı Türkçe: “Kapımızın önüne bir kâğıt bırakmışlar. ‘Kızınıza ne yaptınız?’ yazıyor. Ece uyuyor. Hiçbir şey duymadı. Biz de duymadık. Ama okuduk.”",
"Bir çocuk, doğduğu gün bir tartışmanın sembolü oldu. Bir yasa değişti ve bir bebek o değişimin yüzü olarak büyüyecek. Ece bir gün bu gazeteleri okuyacak.",
"Mahkemedeki şerh aklında: “Bir gün bu çocuklar büyüyecek ve kendilerine bu seçimi kimin yaptığını soracaklardır.”"
], secenekler: [
{ t: "Aileyi korumak için bir avukatla, polisle iletişime geçersin.", to: "t1", etki: { yasa: 1, cocuk: "sagir", koruma: true } },
{ t: "Bir gazeteye, Ece'nin hikâyesinin değil, Nehir'in hikâyesinin yazılması için bir yazı gönderirsin.", to: "t1", etki: { cesitlilik: 1, cocuk: "sagir", yazi: true } },
{ t: "Onları ziyaret edip bir gece kalırsın.", to: "t1", etki: { sefkat: 1, cocuk: "sagir", ziyaret: true } },
{ t: "Kendine sorarsın: bu çocuk bir gün sana ne soracak?", to: "t1", etki: { yasa: 1, cocuk: "sagir", ece_soru: true } }
]},

/* ---------- DÜZENLEME KOLU ---------- */
z1: { saat: "Nisan 2041", baslik: "Düzeltme", metin: [
"“Bir seçenek daha var,” diyorsun. “Birinci embriyo sizin istediğiniz embriyo. Ama işitme genini düzeltebiliriz. Gen düzenleme. Yasal, güvenli, onaylı. Embriyo aynı embriyo; yalnızca bir harf değişir. Sizin çocuğunuz olur; yasa da izin verir.”",
"Gül çeviriyor. Selim'in yüzünde bir şey değişiyor; anlamak mı, öfke mi?",
"Selim işaret ediyor, yavaşça, her işareti tek tek:",
"“Bir harf. Siz bir harf diyorsunuz. O harf benim dilim, benim ailem, benim dedem, benim karım. O harfi değiştirirseniz, aynı çocuk olmaz. Bizim çocuğumuz olmaz. İşiten bir çocuk olur, bizim genlerimizden yapılmış ama bizim dünyamızdan çıkarılmış.”",
"Nehir'in elleri kucağında. İşaret etmiyor. Sana bakıyor; bir şey düşünüyor.",
"“Düzeltmek,” diye devam ediyor Selim. “Bu kelimeyi seçtiniz. Düzeltmek. Bir şey bozuksa düzeltilir. Ben bozuk değilim Aslı Hanım.”",
"Bir dilin içinde bir kelime nasıl bir yaraya dönüşebilir, ilk kez bu kadar açık görüyorsun."
], secenekler: [
{ t: "Özür dilersin; kelime seçimin için. Ama önerinin arkasında durursun.", to: "z2", etki: { sefkat: 1, yasa: 1 } },
{ t: "Önerini geri çekersin.", to: "z2", etki: { cesitlilik: 1, geri_cekti: true } },
{ t: "Nehir'e dönüp onun ne düşündüğünü sorarsın.", to: "z2", etki: { sefkat: 1, nehire_sordu: true } },
{ t: "“Bu, sizin yerinize bir yasanın karar vermesinden iyi değil mi?” dersin.", to: "z2", etki: { yasa: 1 } }
]},

z2: { saat: "Nisan 2041", baslik: "Nehir", metin: [
P(S("z1B"), "Önerini geri çektin. Selim başını salladı. Ama Nehir bir şey söylemedi; ellerini hâlâ kucağında tutuyordu."),
"Ertesi gün Nehir merkeze tek başına geliyor. Selim'siz. Gül'le.",
"Uzun süre oturuyor. Sonra işaret ediyor:",
"“Selim'e söylemedim buraya geldiğimi. Ona bir şey söylemem gerek, ama önce size söylemem gerek. Ben otuz altı yaşındayım. Üç kez denedik. Bir daha denemeye paramız yok. Bu son şans.”",
"“Selim sağır bir çocuk istiyor. Ben de istiyorum. Ama ben daha çok bir çocuk istiyorum. Herhangi bir çocuk. Bizim çocuğumuz. Düzenlenmiş de olsa. İşiten de olsa. Yeter ki benim karnımda büyüsün, yeter ki bizim olsun.”",
"Bir süre duruyor. Elleri titriyor.",
"“Selim'e bunu söyleyemiyorum. Dört kuşak sağır bir aile. Babası, dedesi. Ben işiten bir aileden geldim; Selim'in ailesi bana bir dil verdi, bir yuva verdi. Şimdi ben onlara işiten bir torun mu vereceğim? İhanet gibi geliyor.”",
"“Siz ne yapardınız?”"
], secenekler: [
{ t: "“Selim'le konuşun. Birlikte karar verin,” dersin.", to: "z3", etki: { sefkat: 1, konus: true } },
{ t: "“Bir çocuk istemek ihanet değil,” dersin.", to: "z3", etki: { sefkat: 1, ihanet_degil: true } },
{ t: "“Ben yerinizde olsam, beklerdim. Belki yasa değişir,” dersin.", to: "z3", etki: { cesitlilik: 1, bekle: true } },
{ t: "“Bunu ben söyleyemem Nehir. Bu sizin.”", to: "z3", etki: { yasa: 1 } }
]},

z3: { saat: "Haziran 2041", baslik: "Laboratuvar", metin: [
P(S("z2A"), "Nehir ve Selim üç gün konuştu. Üçüncü gün Selim seni aradı; görüntülü, işaret diliyle, Gül olmadan. Yavaş işaret etti, senin anlayabileceğin kadar: “Düzenle. Karım istiyor. Ben de karımı istiyorum.”"),
P(S("z2B"), "Nehir bir süre sana baktı. Sonra gözlerini sildi. “İhanet değil,” diye işaret etti, senin kelimelerini tekrarlayarak. Bir hafta sonra Selim'le geldi. Selim bir şey söylemedi. İmzaladı."),
P(S("z2C"), "Nehir başını salladı. Ama bir ay sonra bir e-posta geldi: “Bekleyemiyoruz. Yaşım. Paramız. Düzenleme yapalım.” Beklemenin bir lüks olduğunu, herkesin karşılayamadığını unutmuştun."),
P(S("z2D"), "Nehir gitti. İki hafta sonra Selim ve Nehir birlikte geldi. Kararlarını vermişlerdi; nasıl verdiklerini hiç öğrenmeyeceksin."),
"Haziranda laboratuvar. Bir mikroskop, bir ekran, bir embriyolog: Dr. Can, otuzlarında, sessiz. Sen camın arkasındasın.",
"Ekranda birinci embriyo. Birkaç günlük; birkaç düzine hücre. Dr. Can hassas bir iğneyle düzenleme aracını hücrelere veriyor. Bir harf. Bir protein. Bir kulağın içindeki küçük tüylerin titreşip titreşmeyeceği.",
"“Bitti,” diyor Dr. Can. “Hedef dışı etkileri kontrol edeceğiz; bir hafta.”",
"Bir hafta sonra rapor: düzenleme başarılı. Hedef dışı etki: yok. Ya da tespit edilemeyecek kadar küçük.",
"Embriyo artık işitecek. Aynı embriyo. Bir harf eksik. Ya da bir harf fazla. Hangisi olduğunu kim söyleyecek?"
], secenekler: [
{ t: "Aktarımda Selim ve Nehir'in yanında olursun.", to: "t1", etki: { sefkat: 1, cocuk: "duzenlenmis" } },
{ t: "Raporu tekrar tekrar okursun. “Tespit edilemeyecek kadar küçük.”", to: "t1", etki: { yasa: 1, cocuk: "duzenlenmis", rapor_endise: true } },
{ t: "Değiştirilmemiş orijinal dizilimin bir kopyasını aile için saklarsın.", to: "t1", etki: { cesitlilik: 1, cocuk: "duzenlenmis", kopya: true } },
{ t: "Dr. Can'a sorarsın: “Bu işi yaparken ne hissediyorsun?”", to: "t1", etki: { cocuk: "duzenlenmis", can_soru: true } }
]},

/* ---------- ORTAK SON BÖLÜM ---------- */
t1: { saat: "2042", baslik: "Bebek", metin: [
P(function(d){ return d.cocuk === "isiten"; }, "Deniz bir yaşında. İlk kelimesini söylüyor; sesle: “Baba.” Selim duymuyor. Nehir duymuyor. Komşu kadın duyup kapıyı çalıyor, heyecanla anlatıyor. Selim kızına dönüyor ve işaret ediyor: “Ne dedin?” Deniz ellerini kaldırıyor ve işaret ediyor: “Baba.” Selim ağlıyor."),
P(function(d){ return d.cocuk === "sagir"; }, "Bebek bir yaşında. İşaret diliyle ilk kelimesini yapıyor: “Anne.” Nehir ve Selim aynı anda görüyor; aynı anda gülüyor. Evde bir kutlama; sessiz, ama ışıklı. Lambalar yanıp sönüyor, eller havada."),
P(function(d){ return d.cocuk === "duzenlenmis"; }, "Bebek doğdu: bir oğlan, Arda. İşitiyor. Hastanede bir işitme taraması: normal. Selim sonucu okuyor; bir şey söylemiyor. Sonra oğlunun yüzünün önünde ellerini kaldırıyor: “Aile.” Arda ellere bakıyor. Bir de, odada çalan bir telefona."),
"Bu bir yıl boyunca sen de değiştin.",
P(function(d){ return d.terfi; }, "Klinik koordinatörsün. Her dosya senin masandan geçiyor. Optimum Paket satışları senin biriminde yüzde altmış arttı. Bora seni bir konferansta “yeni neslin mimarı” olarak tanıttı."),
P(function(d){ return d.itiraf; }, "Lisansın hâlâ askıda. Soruşturma sürüyor. Bir dernekte gönüllü danışmanlık yapıyorsun; ücretsiz, sağır ailelere, engelli çocuklu ailelere."),
P(function(d){ return d.tanik && !d.itiraf; }, "Merkezden ayrıldın. Bir üniversitede ders veriyorsun: genetik etik. Öğrencilerin çoğu Optimum Paket'le doğmuş; ilk nesil."),
P(function(d){ return !d.terfi && !d.itiraf && !d.tanik; }, "Merkezde çalışmaya devam ediyorsun. Her gün yeni çiftler, yeni embriyolar, yeni altı satırlık kâğıtlar. Ve her gün, altıncı satırda bir an duruyorsun."),
"Bir dünyanın değiştiğini hissediyorsun. Yavaşça, bir bebek doğduğu kadar yavaşça."
], secenekler: [
{ t: "Bebeği görmeye gidersin.", to: "t1b", etki: { sefkat: 1 } },
{ t: "Bir yazı yazmaya başlarsın: bu yılın hikâyesi.", to: "t1b", etki: { cesitlilik: 1, yazi_basladi: true } },
{ t: "İşine odaklanırsın. Başka çiftler bekliyor.", to: "t1b", etki: { yasa: 1 } },
{ t: "Ozan'ın fırınına gidersin.", to: "t1b", etki: { sefkat: 1 } }
]},

t1b: { saat: "Eylül 2042", baslik: "Otuz Altı", metin: [
"Ozan'ın otuz altıncı doğum günü. Fırının arka odasında bir masa: simitler, poğaçalar, bir pasta; Ozan yapmış, kendi için. Annen, birkaç komşu, fırının çırağı, iki müşteri.",
P(function(d){ return d.ziyaret || d.ozan_anlatti || d.alti_anlatti; }, "Ve kapıda, bebek arabasıyla, Selim ve Nehir. Ozan'ın davetiyle. Bir ay önce Ozan bir dernek etkinliğinde onlarla tanışmış; sana söylememiş."),
P(function(d){ return d.ziyaret || d.ozan_anlatti || d.alti_anlatti; }, "Ozan kapıya koşuyor. Ellerini kaldırıyor. Ve işaret ediyor; beceriksiz ama tam: “Hoş geldiniz. Aile.” Nehir gülüyor. Selim Ozan'a sarılıyor. Bir ay boyunca, her akşam, Ozan internetten işaret dili videoları izlemiş."),
P(function(d){ return !(d.ziyaret || d.ozan_anlatti || d.alti_anlatti); }, "Ozan mumları üflüyor; otuz altı mum. Nefesi yetmiyor; çırak yardım ediyor. Herkes gülüyor. Sonra Ozan bir konuşma yapıyor; kâğıttan okuyor, kendi yazmış."),
"Ozan bir dilek tutuyor. Sonra sana dönüp kulağına fısıldıyor: “Abla, dileğimi söyleyeyim mi? Benim gibi bir çocuk daha doğsun. Ben yalnız kalmayayım.”",
"Bir dilek. Yasa bu dileğe izin vermiyor. Bilim bu dileği gereksiz buluyor. Ve kardeşin, otuz altı yaşında, bir pastanın başında, bunu diliyor."
], secenekler: [
{ t: "“Dileğin kabul olsun,” dersin.", to: "t2", etki: { cesitlilik: 1, dilek: true } },
{ t: "“Yalnız değilsin Ozan,” dersin. Odadakileri göstererek.", to: "t2", etki: { sefkat: 1 } },
{ t: "Bir şey söyleyemezsin. Dileğin ağırlığı boğazında.", to: "t2", etki: { cesitlilik: 1 } },
{ t: "“Dilekler söylenmez,” dersin. Gülümseyerek.", to: "t2", etki: { sefkat: 1 } }
]},

t2: { saat: "Kasım 2042", baslik: "Yeni Yasa", metin: [
"Kasımda Meclis'te bir taslak. Kalıtsal Hastalıkların Önlenmesi Kanunu'nda değişiklik: listeye yirmi üç yeni durum eklenmesi. Otizm spektrumu için “yüksek genetik risk” taşıyan embriyolar. Bazı öğrenme güçlükleri. Bir de, gerekçede bir cümle: “Bilişsel potansiyel puanı belirli bir eşiğin altında kalan embriyoların aktarımı, ebeveyne bilgilendirme yapılarak caydırılmalıdır.”",
P(function(d){ return d.cocuk === "sagir" && d.kol === "dava"; }, "Aynı taslakta bir madde daha: Anayasa Mahkemesi'nin iptal ettiği işitme kaybı maddesinin “yeniden düzenlenmesi”. Ece'nin doğumundan bir yıl sonra."),
"Meclis Sağlık Komisyonu uzman görüşü istiyor. Bir davet geliyor; senin adına.",
"Ve aynı hafta Ozan'dan bir mesaj: “Abla, televizyondan aradılar. Bir program. Benim gibi kalmış son insanlarla konuşuyorlarmış. Gideyim mi?”",
"Bir yasa, bir kardeş, bir komisyon, bir kamera. Bir hafta. İkisine birden yetişemezsin."
], secenekler: [
{ t: "Komisyona gidersin.", to: "y_komisyon", etki: { cesitlilik: 1, yasa: 1, komisyon: true } },
{ t: "Ozan'la birlikte televizyona gidersin.", to: "y_ozan", etki: { cesitlilik: 1, sefkat: 1, ozan_tv: true } },
{ t: "İkisini de reddedersin. Ne komisyon, ne kamera.", to: "t3", etki: { yasa: 1, ikisi_ret: true } },
{ t: "Komisyona yazılı görüş gönderirsin; Ozan'a da “Sen bilirsin” dersin.", to: "t3", etki: { yasa: 1, yazili_gorus: true } }
]},

y_komisyon: { saat: "Kasım 2042", baslik: "Komisyon", metin: [
"Meclis'te bir toplantı salonu. Uzun bir masa, mikrofonlar, kameralar. On iki milletvekili. Bir sağlık ekonomisti, iki genetikçi, bir hukukçu, bir din bilgini. Ve sen.",
"Sağlık ekonomisti önce konuşuyor: tablolar, grafikler. Bir otizmli bireyin ömür boyu topluma maliyeti. Bir Down sendromlu bireyin. Bir işitme engellinin. Rakamlar milyonlarla.",
"Sıra sana geliyor. Mikrofon. Kırmızı ışık yanıyor.",
"Hazırladığın bir metin var; yasal argümanlar, bilimsel veriler, uluslararası örnekler. Kâğıdı masaya koyuyorsun.",
"Sonra kâğıdı kenara itiyorsun.",
"“Benim bir kardeşim var,” diyorsun. “Otuz altı yaşında. Down sendromlu. Sabah dörtte kalkıp simit yapıyor. Geçen ay bir dilek tuttu: kendisi gibi bir çocuk daha doğsun, yalnız kalmasın.”",
"Masa sessiz. Ekonomist kalemini bırakmış.",
"“Siz bir maliyeti hesaplıyorsunuz,” diyorsun. “Ben size bir yalnızlığı anlatıyorum. Bir ülke, var olmasını istemediği insanları bir listeye yazdığında, o listedeki insanların var olan son temsilcileri yalnız kalır. Bunun bir maliyeti var mı? Hangi tabloya yazıyorsunuz?”"
], secenekler: [
{ t: "Konuşmana devam edersin: yasal argümanlarla birleştirerek.", to: "t3", etki: { yasa: 1, cesitlilik: 1 } },
{ t: "Sözünü bitirip oturursun. Söyleyeceğin bu kadar.", to: "t3", etki: { cesitlilik: 1, kisa: true } },
{ t: "Bir milletvekilinin itirazını beklersin ve cevaplarsın.", to: "t3", etki: { yasa: 1, tartisti: true } },
{ t: "Ozan'ın bir fotoğrafını kameraya gösterirsin.", to: "t3", etki: { cesitlilik: 1, foto: true } }
]},

y_ozan: { saat: "Kasım 2042", baslik: "Kamera", metin: [
"Bir televizyon stüdyosu. Işıklar, kameralar, bir sunucu. Programın adı: “Son Nesil.” Stüdyoda üç konuk: Ozan, otuz dört yaşında bir spina bifidalı kadın, ve elli yaşında bir otizmli adam. Hepsi yasadan önce doğmuş.",
"Sunucu kibar ama programın bir havası var: bir müze gezisi. “Siz, yasadan önce doğan son kuşaksınız. Nasıl bir duygu?”",
"Ozan'ın sırası. Kamera yüzüne yaklaşıyor. Sen kulisten izliyorsun.",
"Ozan bir süre düşünüyor. Sonra: “Ben her sabah dörtte kalkıp simit yapıyorum. Altı yüz simit. Mahallenin yarısı benim simidimi yiyor.” Sunucu gülüyor. Ozan gülmüyor.",
"“Bana sordular, kusurlu musun? Ben de düşündüm. Simitlerim kusursuz. Ben değilim. Ama siz de değilsiniz. Kimse değil. O zaman neden sadece beni listeye yazdılar?”",
"Sunucu bir şey söyleyecek; söyleyemiyor.",
"Ozan kameraya dönüyor. Doğrudan. “Benim ablam genetikçi. Kusursuz bebekler yapıyor. Ama beni seviyor. Kusurlu kardeşini. Bu bir şey demek değil mi?”",
"Kulisteki herkes sana bakıyor."
], secenekler: [
{ t: "Kulisten çıkıp Ozan'ın yanına, kameranın önüne gidersin.", to: "t3", etki: { sefkat: 1, cesitlilik: 1, kamera_onu: true } },
{ t: "Kulisten izlemeye devam edersin. Bu onun anı.", to: "t3", etki: { cesitlilik: 1 } },
{ t: "Ağlarsın. Herkesin önünde.", to: "t3", etki: { sefkat: 1 } },
{ t: "Programın yapımcısına, Ozan'ı bir “müze” gibi gösterdikleri için itiraz edersin.", to: "t3", etki: { cesitlilik: 1, itiraz: true } }
]},

t3: { saat: "Aralık 2042", baslik: "Bora", metin: [
P(function(d){ return d.komisyon; }, "Komisyondaki konuşman bir gün boyunca gündemde kaldı. Taslaktaki “bilişsel potansiyel” maddesi geri çekildi. Diğerleri kaldı. Bir zafer mi, bir yenilgi mi?"),
P(function(d){ return d.ozan_tv; }, "Program yayınlandı. Ozan'ın son cümlesi bir gecede milyonlarca kez paylaşıldı. Ertesi sabah fırının önünde bir kuyruk vardı; altı yüz simit dokuzda bitti. Ozan kuyruğa bakıp sana dedi ki: “Abla, simidimi değil, beni görmeye gelmişler. Bu iyi bir şey mi?”"),
"Aralıkta Bora seni arıyor. Merkezin yeni binası açılıyor; daha büyük, daha parlak. Cephesinde yeni bir reklam: “Kusursuzluk bir haktır. Şimdi herkes için.”",
P(function(d){ return !d.itiraf && !d.tanik; }, "“Aslı,” diyor, “seni yeni binada bölüm başkanı olarak istiyorum. Optimum biriminin. Tartışmalı bir yıl geçirdin, biliyorum. Ama sen bu işi en iyi bilenlerdensin. Ve tartışma, dürüst olalım, reklamdır.”"),
P(function(d){ return d.itiraf || d.tanik; }, "“Aslı,” diyor, “geçmişi geride bırakalım. Seni geri istiyorum. Danışman olarak. Tartışmalı bir yıl geçirdin; ama sen bu işi en iyi bilenlerdensin. Ve tartışma, dürüst olalım, reklamdır.”"),
"Bora'nın teklifinin altında bir şey var: bir kapı açık. Ve kapının arkasında, bütün bir yeni dünya; her ebeveynin çocuğunu bir katalogdan seçtiği, her embriyonun bir puanı olduğu, “kusurlu” kelimesinin bir gün sözlükten silineceği bir dünya.",
"Bu dünyaya girmek mi? Bu dünyayı içeriden değiştirmeye çalışmak mı? Yoksa dışarıda kalmak mı?"
], secenekler: [
{ t: "Kabul edersin. İçeriden değiştireceksin; ya da değişeceksin.", to: "t4", etki: { yasa: 2, terfi: true } },
{ t: "Reddedersin.", to: "t4", etki: { cesitlilik: 1, red: true } },
{ t: "Bir şartla kabul edersin: her çifte, embriyo sonuçlarıyla birlikte, o durumla yaşayan bir insanın hikâyesi verilecek.", to: "t4", etki: { cesitlilik: 1, yasa: 1, sart: true } },
{ t: "“Ozan'a sorayım,” dersin. Ciddi.", to: "t4", etki: { sefkat: 1, ozana_sor: true } }
]},

t4: { saat: "Ocak 2043", baslik: "Fırın", metin: [
P(S("t3A"), "Kabul ettin. Yeni ofisin on beşinci katta. Pencereden Ankara'nın bütün batısı görünüyor. Ve reklam ekranı; artık senin bölümünün reklamı."),
P(S("t3B"), "Reddettin. Bora bir süre sustu. “Pişman olacaksın,” dedi. “Belki,” dedin. Telefonu kapattıktan sonra fırına yürüdün."),
P(S("t3C"), "Bora şartını dinledi. Güldü; sonra ciddileşti. “Bu satışları düşürür,” dedi. “Biliyorum,” dedin. Bir hafta düşündü. Sonra kabul etti; ama yalnızca deneme olarak, bir yıl."),
P(S("t3D"), "Ozan'a sordun. Ozan simit dizerken dinledi. Sonra: “Abla, o reklamın altında çalışırken mutlu musun?” Cevap veremedin. Ozan devam etti: “O zaman neden soruyorsun?”"),
"Ocak. Sabah dört. Ozan'ın fırınındasın. Ozan bir hamur parçasını sana uzatıyor. “Hadi abla. Bir simit yap.”",
"Hamuru yuvarlıyorsun, uzatıyorsun, büküyorsun. Ozan izliyor. Senin simitin yamuk. Bir ucu kalın, bir ucu ince. Susamları eşit değil.",
"Ozan simidini alıp ışığa tutuyor. Uzun süre bakıyor.",
"“Kusurlu,” diyor. Gülümsüyor. “Ama güzel. Fırına koyalım mı?”",
"Simit fırına giriyor. Altı yüz kusursuz simidin arasında, bir tane yamuk. Fırın kapanıyor.",
"Yirmi dakika sonra çıkıyor. Kızarmış, çıtır, yamuk. Ozan onu sana veriyor. “Bu senin,” diyor. “Bunu satmayız. Bunu sen yersin.”"
], secenekler: [
{ t: "Simidi yersin. Ozan'la birlikte, sabahın dördünde.", to: "ks", etki: { sefkat: 1 } },
{ t: "Simidi saklarsın.", to: "ks", etki: { cesitlilik: 1 } },
{ t: "Ozan'a bir soru sorarsın: “Ben kusurlu muyum?”", to: "ks", etki: { cesitlilik: 1, son_soru: true } },
{ t: "Bir hamur parçası daha alıp bir simit daha yaparsın. Yine yamuk.", to: "ks", etki: { cesitlilik: 1, sefkat: 1 } }
]},

ks: { yonlendir: [
{ if: function(d){ return d.terfi && !d.sart; }, to: "son_kusursuz" },
{ if: function(d){ return d.cocuk === "sagir"; }, to: "son_sessiz" },
{ if: function(d){ return d.ozan_tv || d.cesitlilik >= 7; }, to: "son_ozan" },
{ if: function(d){ return d.cocuk === "duzenlenmis"; }, to: "son_harf" },
{ to: "son_isiten" }
]},

/* ---------- SONLAR ---------- */
son_kusursuz: { son: true, baslik: "Kusursuz", metin: [
"On beşinci kattaki ofisinden Ankara'nın batısını izliyorsun. Yeni binanın cephesinde senin bölümünün reklamı: “Kusursuzluk bir haktır. Şimdi herkes için.”",
"Optimum Paket artık sigorta kapsamında. Bilişsel potansiyel puanı yüksek embriyolar için devlet teşviki var. Senin biriminde her ay yüzlerce çift; her biri altı satırlık bir kâğıdın karşısında.",
"Sen iyi bir danışmansın. Her çifte her şeyi anlatıyorsun; tarafsız, açık, dürüst. Ama bir gün bir çift sana soruyor: “Siz olsanız hangisini seçerdiniz?” Ve sen, hiç düşünmeden, dördüncüyü gösteriyorsun: işiten, sağlıklı, yüksek puanlı.",
"O gece eve dönerken bunu düşünüyorsun. Hiç düşünmeden. Ne zaman olmuştu bu?",
P(function(d){ return d.ihlal && d.kapatti; }, "Masanın bir çekmecesinde bir dosya var: Aydın, embriyo bir, “belirsiz, aktarıma uygun.” Bora onu kapattı; sen onun karşılığında buradasın. Bir kurtarış, bir teslimiyetin karşılığı."),
"Ozan'ın fırınına artık her hafta değil, her ay gidiyorsun. Yoğunsun. Ozan anlıyor. Bir gün sana bir simit veriyor; yamuk değil, kusursuz. “Bu senin,” diyor. “Artık yamuk yapmıyorsun.”",
"Bir dünyayı içeriden değiştirmek istemiştin. Belki değiştirdin; bazı küçük şeyleri. Ama dünya da seni değiştirdi; bazı büyük şeyleri. Hangisinin daha çok değiştiğini, on beşinci kattan bakarak anlayamıyorsun."
]},

son_sessiz: { son: true, baslik: "Sessiz Çocuk", metin: [
P(function(d){ return d.kol === "ihlal"; }, "Ege büyüyor. Üç yaşında. İşaret diliyle cümleler kuruyor; annesinin ve babasının dilinde, dört kuşağın dilinde. Bir sağırlar kreşine gidiyor. Mutlu."),
P(function(d){ return d.kol === "dava"; }, "Ece büyüyor. Üç yaşında. İşaret diliyle cümleler kuruyor. Ama bir şeyi de biliyor, henüz anlamasa da: adı gazetelerde. Bir gün bir çocuk ona parkta, işaret dilinde değil, sesle bir şey soracak ve o duymayacak. Ve bir gün o gazeteleri okuyacak."),
"Selim ile Nehir her bayram sana bir fotoğraf gönderiyor. Fotoğraflarda çocuk hep ellerini kaldırmış; bir işaretin ortasında. Bir fotoğrafta ne işaret ettiğini Gül'e soruyorsun. Gül gülüyor: “Teyzeye selam.”",
P(function(d){ return d.itiraf; }, "Lisansın iptal edildi. İki yıl sonra yeniden başvurabilirsin. Bir dernekte çalışıyorsun; engelli çocuklu ailelere, sağır ailelere, ücretsiz. Maaşın yarıya düştü. Uykuların düzeldi."),
"Bir yasayı çiğnedin ya da değiştirdin. Bir çocuğun “kusurlu” doğmasına yardım ettin; ya da “farklı” doğmasına. Bu kelimelerden hangisini seçtiğin, bütün hikâyeyi değiştiriyor.",
"Mahkemedeki şerh hâlâ aklında: “Bir gün bu çocuklar büyüyecek ve kendilerine bu seçimi kimin yaptığını soracaklardır.” Haklı. Soracaklar. Ama işiten çocuklar da soracak. Ve “kusursuz” çocuklar da. Her çocuk, bir gün, kendisini kimin, neye göre seçtiğini soracak.",
"Belki asıl soru, bir çocuğu nasıl seçeceğimiz değil. Seçtiğimiz çocuğa, o soruyu sorduğu gün, ne cevap vereceğimiz."
]},

son_ozan: { son: true, baslik: "Ozan", metin: [
"Ozan'ın televizyon konuşması, ya da senin komisyondaki konuşman, bir şeyi başlattı. Küçük bir şey. Bir dernek: “Son Nesil Değil.” Yasadan önce doğan engelli insanlar ve aileleri. İlk toplantı Ozan'ın fırınının arka odasında; on iki kişi. Bir yıl sonra bin iki yüz.",
"Yasa değişmedi. Belki değişmeyecek. Ama bir şey değişti: listedeki insanlar artık görünür. Bir müze gibi değil; bir mahalle gibi.",
"Sen merkezden ayrıldın. Derneğin danışmanısın; ücretsiz. Bir de bir fırında yarı zamanlı çalışıyorsun. Ozan'ın fırınında. Sabah dörtte kalkıyorsun. Simitlerin hâlâ yamuk.",
"Bir sabah Ozan sana bir şey söylüyor, hamur yoğururken: “Abla, dileğim kabul olmadı. Benim gibi çocuk doğmadı. Ama bak, yalnız değilim.” Fırının arka odasını gösteriyor; dernek toplantısının dağınıklığı: sandalyeler, çay bardakları, bir işaret dili afişi, bir rampa.",
"Belki bir insanın değeri, kendisi gibi birinin daha doğup doğmamasında değil. Kendisi gibi olmayanların onun yanında durup durmamasında.",
"Kusursuz bir dünya, kusurlu insanların yan yana durduğu bir dünyadan daha mı iyi? Bu soruyu her sabah dörtte, bir hamurun başında, kardeşinin yanında düşünüyorsun. Cevabı bilmiyorsun. Ama yamuk simitler her sabah ilk satılanlar."
]},

son_harf: { son: true, baslik: "Bir Harf", metin: [
"Arda büyüyor. İki yaşında. İşitiyor; konuşuyor. İki dili var: annesinin ve babasının ellerindeki dil, ve dünyanın sesli dili. Evde elleriyle, parkta sesiyle.",
"Selim ona her akşam işaret diliyle masal anlatıyor. Arda dinliyor; bazen ellerine, bazen dışarıdan gelen bir sese dönüyor. Selim bunu her seferinde fark ediyor. Bir şey söylemiyor.",
"Nehir bir gün sana yazıyor: “Mutluyuz. Gerçekten. Ama bazen Selim'i gece Arda'nın yatağının başında buluyorum. Oğlunun uyumasını izliyor. Bir keresinde ona sordum, ne düşünüyorsun? Elleri: ‘Bir harf. Sadece bir harf. Onun içinde dedem vardı.’”",
P(function(d){ return d.kopya; }, "Değiştirilmemiş dizilimin bir kopyası dosyada. Arda bir gün büyüyünce isterse görebilecek: hangi harfin değiştirildiğini, nesil nesil o harfi taşıyan bir ailenin hangi harfini. Belki hiç bakmayacak. Belki bakıp hiçbir şey hissetmeyecek. Belki."),
"Bir uzlaşma, herkesi biraz kazandırır, herkesi biraz kaybettirir. Selim bir oğul kazandı ve bir harfi kaybetti. Nehir bir çocuk kazandı ve bir ihanet duygusunu. Yasa kazandı. Sen bir dosyayı başarıyla kapattın.",
"Ama bir harf. Gerçekten sadece bir harf mi? Bir genetikçi olarak, bir harfin bir proteini, bir proteinin bir hücreyi, bir hücrenin bir duyuyu, bir duyunun bir dünyayı değiştirdiğini biliyorsun. Bir harf, bazen, bütün bir dildir."
]},

son_isiten: { son: true, baslik: "İşiten Çocuk", metin: [
"Deniz büyüyor. Üç yaşında. İki dili var; ikisinde de akıcı. Ellerle annesine masal anlatıyor; sesle kreşte şarkı söylüyor. Ve bazen, kimse bakmadığında, kendi uydurduğu o işareti yapıyor: el kulağa, sonra açılış.",
"Nehir sana yazıyor: “Deniz bize tercümanlık yapıyor artık. Markette, doktorda. Üç yaşında bir tercüman. Bundan korkuyorum. Benim annemin bana yaptırdığını, ben ona yaptırıyorum.”",
"Yasaya uydun. Bir çocuğu, ebeveynlerinin istemediği ama yasanın istediği bir dünyaya getirdin. Deniz sağlıklı, mutlu, sevilmiş. Bir yasa haklı çıktı mı?",
"Belki. Ama bir şeyi de biliyorsun: Selim ve Nehir, bir çocuk sahibi olmak için, kendi varoluşlarının bir yasa tarafından “ağır kusur” olarak tanımlanmasını kabul etmek zorunda kaldılar. Bir kâğıdı imzalarken, Selim'in elleri: “Siz o yasanın elisiniz.”",
"Sen o yasanın eliydin. Belki iyi bir eldin; nazik, dikkatli, açıklayıcı. Ama bir el.",
"Deniz bir gün büyüyecek. İki dünyanın arasında yaşayacak; ikisine de tam ait olmayacak, ikisine de yabancı olmayacak. Belki bu bir yük. Belki bir zenginlik. Belki her insanın kaderi zaten bu: iki dünyanın arasında doğmak ve ikisini de hiçbir zaman tam bilmemek."
]}

},

ayna: function(d){
  var out = [];
  var a = d.cesitlilik, b = d.yasa, c = d.sefkat;
  if(a >= b && a >= c) out.push("Bu hikâyede en çok farklılığa yaslandın: sağır bir ailenin diline, kardeşinin varlığına, “kusur” kelimesinin kim tarafından konduğuna. Farklılığa değer vermek, normalin bir tanım olduğunu, bir gerçek olmadığını kabul etmektir.");
  else if(b >= c) out.push("Bu hikâyede en çok yasaya ve sisteme yaslandın: bir çocuğun açık geleceğine, toplumun sağlık politikasına, kuralların güvenliğine. Yasa bir korumadır. Ama her koruma, kimi koruduğunu ve kimi dışarıda bıraktığını sormak zorundadır.");
  else out.push("Bu hikâyede en çok şefkate yaslandın: bir çiftin acısına, kardeşinin dileğine, bir annenin “ihanet” korkusuna. Şefkat bu hikâyenin bütün kollarında vardı. Ama şefkat tek başına, kimin var olacağına karar veremez.");
  if(d.ihlal) out.push("Bir sistemi bilerek çiğnedin. Bir çocuğun, yasaya rağmen, ailesinin dilinde doğmasına yardım ettin.");
  if(d.terfi) out.push("Bir dünyanın içine girmeyi seçtin. İçeriden değiştirmek ile içeride değişmek arasındaki fark, ancak yıllar sonra görünür.");
  if(d.alti_anlatti) out.push("Altıncı embriyoyu, kardeşin gibi olanı, bir satır olarak değil, bir insan olarak anlattın.");
  if(d.ozan_tv) out.push("Kardeşini bir kameranın önünde yalnız bırakmadın.");
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
