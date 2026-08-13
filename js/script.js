/* ===================================================
   script.js - JavaScript buatan sendiri
   Website Edukasi Pengenalan Perangkat Komputer
   UAS Pemrograman Web I - Kelas IF210
   =================================================== */


/* ---------------------------------------------------
   1. KALKULATOR UKURAN PENYIMPANAN
   Mengubah satu satuan ukuran ke satuan lainnya.
   1 KB = 1024 Byte, 1 MB = 1024 KB, dan seterusnya.
   --------------------------------------------------- */
function hitungUkuran() {
  var angka = parseFloat(document.getElementById("input-angka").value);
  var satuan = document.getElementById("input-satuan").value;
  var kotak = document.getElementById("kotak-hasil");

  // periksa dulu isiannya
  if (isNaN(angka) || angka < 0) {
    kotak.innerHTML = "Silakan isi angka yang benar terlebih dahulu.";
    return;
  }

  // ubah semuanya ke satuan Byte dulu
  var byte = 0;

  if (satuan == "byte") {
    byte = angka;
  } else if (satuan == "kb") {
    byte = angka * 1024;
  } else if (satuan == "mb") {
    byte = angka * 1024 * 1024;
  } else if (satuan == "gb") {
    byte = angka * 1024 * 1024 * 1024;
  } else if (satuan == "tb") {
    byte = angka * 1024 * 1024 * 1024 * 1024;
  }

  // lalu ubah dari Byte ke semua satuan
  var kb = byte / 1024;
  var mb = kb / 1024;
  var gb = mb / 1024;
  var tb = gb / 1024;

  var hasil = "";
  hasil = hasil + "<span class='label'>Byte :</span> " + byte.toLocaleString("id-ID") + " B<br>";
  hasil = hasil + "<span class='label'>KB   :</span> " + kb.toFixed(2) + " KB<br>";
  hasil = hasil + "<span class='label'>MB   :</span> " + mb.toFixed(4) + " MB<br>";
  hasil = hasil + "<span class='label'>GB   :</span> " + gb.toFixed(6) + " GB<br>";
  hasil = hasil + "<span class='label'>TB   :</span> " + tb.toFixed(8) + " TB";

  kotak.innerHTML = hasil;
}

// mengisi contoh supaya pengunjung bisa langsung mencoba
function isiContoh() {
  document.getElementById("input-angka").value = 500;
  document.getElementById("input-satuan").value = "gb";
  hitungUkuran();
}


/* ---------------------------------------------------
   2. KUIS
   --------------------------------------------------- */
var soal = [
  {
    tanya: "Komponen apa yang sering disebut sebagai otak komputer?",
    pilihan: ["RAM", "Processor (CPU)", "Hard disk", "Power supply"],
    benar: 1,
    alasan: "Processor bertugas mengolah semua perintah, jadi sering disebut otak komputer."
  },
  {
    tanya: "Apa yang terjadi pada data di RAM saat komputer dimatikan?",
    pilihan: ["Tetap tersimpan", "Pindah ke hard disk", "Hilang semua", "Jadi file cadangan"],
    benar: 2,
    alasan: "RAM bersifat sementara, sehingga isinya hilang begitu aliran listrik terputus."
  },
  {
    tanya: "Manakah yang termasuk perangkat input?",
    pilihan: ["Monitor", "Printer", "Keyboard", "Speaker"],
    benar: 2,
    alasan: "Keyboard dipakai untuk memasukkan data, jadi termasuk perangkat input."
  },
  {
    tanya: "Apa keunggulan utama SSD dibanding HDD?",
    pilihan: ["Harganya lebih murah", "Kapasitasnya lebih besar", "Kecepatannya lebih tinggi", "Bentuknya lebih besar"],
    benar: 2,
    alasan: "SSD tidak punya bagian berputar, sehingga membaca dan menulis data jauh lebih cepat."
  },
  {
    tanya: "Berapa jumlah Byte dalam 1 Kilobyte?",
    pilihan: ["100 Byte", "1000 Byte", "1024 Byte", "2048 Byte"],
    benar: 2,
    alasan: "Dalam sistem komputer, 1 KB sama dengan 1024 Byte karena berbasis bilangan biner."
  }
];

var nomor = 0;
var skor = 0;

function tampilkanSoal() {
  document.getElementById("nomor-soal").innerHTML = "Soal " + (nomor + 1) + " dari " + soal.length;
  document.getElementById("teks-soal").innerHTML = soal[nomor].tanya;
  document.getElementById("kotak-alasan").style.display = "none";
  document.getElementById("tombol-lanjut").style.display = "none";

  var isi = "";
  for (var i = 0; i < soal[nomor].pilihan.length; i++) {
    isi = isi + '<button class="pilihan" onclick="jawab(' + i + ')">' + soal[nomor].pilihan[i] + '</button>';
  }
  document.getElementById("kotak-pilihan").innerHTML = isi;
}

function jawab(pilih) {
  var tombol = document.getElementsByClassName("pilihan");

  // matikan semua tombol supaya tidak bisa diklik dua kali
  for (var i = 0; i < tombol.length; i++) {
    tombol[i].disabled = true;
  }

  tombol[soal[nomor].benar].className = "pilihan benar";

  if (pilih == soal[nomor].benar) {
    skor = skor + 1;
    document.getElementById("kotak-alasan").innerHTML = "Jawaban benar. " + soal[nomor].alasan;
  } else {
    tombol[pilih].className = "pilihan salah";
    document.getElementById("kotak-alasan").innerHTML = "Jawaban kurang tepat. " + soal[nomor].alasan;
  }

  document.getElementById("kotak-alasan").style.display = "block";
  document.getElementById("tombol-lanjut").style.display = "inline-block";

  if (nomor == soal.length - 1) {
    document.getElementById("tombol-lanjut").innerHTML = "Lihat Hasil";
  }
}

function lanjut() {
  nomor = nomor + 1;

  if (nomor < soal.length) {
    tampilkanSoal();
  } else {
    document.getElementById("bagian-soal").style.display = "none";
    document.getElementById("bagian-hasil").style.display = "block";
    document.getElementById("nilai-akhir").innerHTML = skor + " / " + soal.length;
    document.getElementById("nama-peserta").innerHTML = namaPeserta;

    if (skor == 5) {
      document.getElementById("pesan-hasil").innerHTML = "Bagus sekali, semua jawaban benar!";
    } else if (skor >= 3) {
      document.getElementById("pesan-hasil").innerHTML = "Lumayan, tapi masih ada yang perlu dipelajari lagi.";
    } else {
      document.getElementById("pesan-hasil").innerHTML = "Sebaiknya baca ulang halaman Materi dulu ya.";
    }
  }
}

function ulangKuis() {
  nomor = 0;
  skor = 0;
  document.getElementById("bagian-hasil").style.display = "none";
  document.getElementById("bagian-soal").style.display = "block";
  tampilkanSoal();
}


/* ---------------------------------------------------
   3. FORM ISI NAMA SEBELUM KUIS
   --------------------------------------------------- */
var namaPeserta = "";

function mulaiKuis() {
  var nama = document.getElementById("nama").value;
  var kotak = document.getElementById("pesan-nama");

  if (nama.length < 3) {
    kotak.className = "alert alert-danger";
    kotak.innerHTML = "Nama minimal 3 huruf ya.";
    return false;
  }

  namaPeserta = nama;
  document.getElementById("bagian-mulai").style.display = "none";
  document.getElementById("bagian-soal").style.display = "block";
  tampilkanSoal();
  return false; // supaya halaman tidak berpindah
}


/* ---------------------------------------------------
   4. FORM SARAN DAN MASUKAN
   --------------------------------------------------- */
function kirimSaran() {
  var pengirim = document.getElementById("pengirim").value;
  var email = document.getElementById("email").value;
  var bagian = document.getElementById("bagian-materi").value;
  var saran = document.getElementById("saran").value;
  var kotak = document.getElementById("hasil-saran");

  var error = "";

  if (pengirim.length < 3) {
    error = error + "Nama minimal 3 huruf.<br>";
  }
  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    error = error + "Format email belum benar.<br>";
  }
  if (bagian == "") {
    error = error + "Pilih dulu bagian materinya.<br>";
  }
  if (saran.length < 10) {
    error = error + "Saran minimal 10 huruf.<br>";
  }

  if (error != "") {
    kotak.className = "alert alert-danger";
    kotak.innerHTML = error;
  } else {
    kotak.className = "alert alert-success";
    kotak.innerHTML = "Terima kasih " + pengirim + ", masukan kamu sudah kami terima.";
    document.getElementById("form-saran").reset();
    hitungHuruf();
  }

  return false; // supaya halaman tidak berpindah
}

// menghitung jumlah huruf pada kotak saran
function hitungHuruf() {
  var saran = document.getElementById("saran").value;
  document.getElementById("jumlah-huruf").innerHTML = saran.length + " / 300 huruf";
}


/* ---------------------------------------------------
   5. TAHUN OTOMATIS DI FOOTER
   --------------------------------------------------- */
function tulisTahun() {
  var tahun = new Date().getFullYear();
  document.getElementById("tahun").innerHTML = tahun;
}
