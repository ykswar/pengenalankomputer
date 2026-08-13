# Website Edukasi Pengenalan Perangkat Komputer

Tugas UAS Mata Kuliah **Pemrograman Web I**
Kelas IF210 - Prodi PJJ Informatika - Universitas Siber Asia
Dosen Pengampu: Riad Sahara, S.SI., M.T.

## Anggota Kelompok
| No | Nama | NIM |
|----|------|-----|
| 1  |      |     |
| 2  |      |     |
| 3  |      |     |
| 4  |      |     |
| 5  |      |     |

## Tentang Website
Website ini dibuat untuk mengenalkan bagian-bagian perangkat keras komputer
kepada pemula. Isinya ada enam materi bergambar, kalkulator ukuran penyimpanan,
dan kuis untuk menguji pemahaman.

## Isi Folder
```
index.html      -> beranda + kalkulator ukuran + video
materi.html     -> enam materi lengkap dengan gambar + tabel + audio
kuis.html       -> kuis dengan JavaScript + form saran
css/style.css   -> CSS buatan sendiri
js/script.js    -> JavaScript buatan sendiri
gambar/         -> gambar SVG buatan sendiri
media/          -> video mp4 dan audio mp3 buatan sendiri
```

## Komponen yang Dipakai
| Komponen | Ada di halaman |
|----------|----------------|
| Heading (h1-h6) | semua halaman |
| Paragraph | semua halaman |
| Text formatting (b, i, u, mark, code, blockquote) | materi.html |
| Image | index.html, materi.html |
| Link | semua halaman |
| Table | materi.html (2 tabel) |
| List (ul, ol, dl) | materi.html |
| Form | kuis.html (isi nama + form saran) |
| Video | index.html |
| Audio | materi.html |
| CSS | css/style.css |
| Bootstrap 5 | semua halaman (CDN) |
| JavaScript | js/script.js |

## Fungsi JavaScript
1. `hitungUkuran()` - mengubah satuan Byte, KB, MB, GB, TB
2. `isiContoh()` - mengisi contoh angka pada kalkulator
3. `tampilkanSoal()`, `jawab()`, `lanjut()`, `ulangKuis()` - kuis
4. `mulaiKuis()` - validasi nama sebelum kuis dimulai
5. `kirimSaran()` - validasi form saran dan masukan
6. `hitungHuruf()` - menghitung jumlah huruf pada kotak saran
7. `tulisTahun()` - menampilkan tahun otomatis di footer

## Cara Menjalankan
```
python3 -m http.server 8080
```
Lalu buka http://localhost:8080 di browser.

## Link
- Website : (isi setelah deploy)
- Repository : (isi link GitHub)
- Vlog : (isi link YouTube)
