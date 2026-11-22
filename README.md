# Felsefe Oyunu

Kararlarınla şekillenen, felsefi ve karanlık etkileşimli hikâyeler.
Site: https://ahmad2431385.github.io/Felsefe-oyunu/

## Hikâyeler
| Hikâye | Dünya | Kavramlar |
|---|---|---|
| Son Vardiya | Gerçek | Trajik ikilem, ödev ve fayda, ahlaki yara, ölümle yüzleşme |
| Yedek Parça | Hayali | Kişisel kimlik, bellek ve benlik, kopya sorunu, ölüm ve süreklilik |
| Kan Bedeli | Gerçek | Adalet ve intikam, affetme, töre ve toplumsal baskı, şiddetin döngüsü |
| Işık Şehri | Hayali | Mutluluğun bedeli, suç ortaklığı, kaçış ve direniş, çoğunluğun vicdanı |
| Babamın Defteri | Gerçek | Hakikat ve huzur, kuşaklar arası suç, kendini kandırma, affetme |
| Teşhis | Gerçek | Hastanın özerkliği, hakikat ve umut, merhametli yalan, ölümle yüzleşme |
| Bekleme Listesi | Gerçek | Ölümün tanımı, beden ve armağan, adil paylaşım, yas ve rıza |
| Son Ders | Gerçek | Ölme hakkı, yasa ve vicdan, acının anlamı, kilitli zihin |
| Kusursuz Bebek | Hayali (2041) | Engellilik ve değer, iyileştirme ve doğallık, ebeveyn sevgisi, normalin tanımı |
| 36 Saat | Gerçek | Tıbbi hata ve dürüstlük, ahlaki şans, birey ve sistem, kendini affetmek |

## Nasıl çalışır?
- Her bölümün sonunda 4 karar vardır.
- Kararlar üç şekilde etki eder: hikâyeyi farklı bölümlere götürür (kavşaklar), sonraki bölümün açılışını değiştirir, arka planda değerleri (ör. merhamet, kural, gerçek) ve olayları (kim yaşadı, ne söylendi) kaydeder.
- Sonu, kararlarının toplamı belirler. Her hikâyenin 5-6 sonu vardır.
- Bitişte: "Ayna" (kararlarının portresi), bulunan sonlar ve hikâyede dokunulan fikirler gösterilir.
- İlerleme tarayıcıda (localStorage) saklanır.

## Yeni hikâye eklemek
`hikayeler/` altına bir dosya ekle ve `window.HIKAYELER.push({...})` ile kaydet, sonra `index.html` içine `<script>` olarak bağla.
Sahne biçimi: `{ baslik, saat?, metin: [metin | {if, t}], secenekler: [{ t, to, etki }] }`; sonlar `{ son: true }`, yönlendirme `{ yonlendir: [{ if, to }] }`.
