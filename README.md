# Felsefe Oyunu

Felsefe, psikoloji ve sosyoloji kavramlarını işleyen, okuyucunun ana karakter olduğu etkileşimli bir hikâye dizisi.

## Nasıl işler?
- Her bölüm kısa bir okuma parçasıdır (gerçekçi ya da hayali bir dünyada geçer).
- Bölüm sonunda birkaç seçenek sunulur; okuyucu birini seçer.
- Seçimler `secim-gunlugu.md` dosyasına işlenir ve sonraki bölümlerde geri döner.
- Ton: karamsar, ağır, sorgulayıcı.

## Yapı
- `bolumler/` : bölümler
- `karakter/` : ana karakterin dosyası ve gelişimi
- `secim-gunlugu.md` : yapılan seçimler
- `kavramlar.md` : işlenen kavram ve kuramlar

## Site
`index.html` + `bolumler.js` tek sayfalık oyunu oluşturur. Seçimler tarayıcıda (localStorage) saklanır.
Yeni bölüm eklemek için `bolumler.js` içindeki `BOLUMLER` nesnesine bölüm eklenir ve ilgili seçeneğin `sonraki` alanına bölümün anahtarı yazılır.
Yayın: GitHub Pages (Settings → Pages → Branch: `main`, klasör: `/ (root)`).
