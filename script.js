function konversiNilai() {
    var nilai = parseInt(document.getElementById("nilaiInput").value);
    var hasil;

    if (nilai >= 80 && nilai <= 100) {
        hasil = "A😎";
    } else if (nilai >= 70 && nilai <= 79) {
        hasil = "B🤗";
    } else if (nilai >= 60 && nilai <= 69) {
        hasil = "C😁";
    } else if (nilai >= 50 && nilai <= 59) {
        hasil = "D😖";
    } else if (nilai >= 40 && nilai <= 49) {
        hasil = "E😭";
    } else {
        hasil = "Nilai tidak valid🤣🤣";
    }

    document.getElementById("hasilKonversi").innerHTML = "Hasil Konversi: " + hasil;
}

function hitungPembayaran() {
    var namaBarang = document.getElementById("namaBarang").value;
    var hargaBarang = parseFloat(document.getElementById("hargaBarang").value);
    var jumlahBarang = parseInt(document.getElementById("jumlahBarang").value);

    var totalHarga = hargaBarang * jumlahBarang;
    var diskon = 0;

    if (jumlahBarang >= 3) {
        diskon = totalHarga * 0.1; // Diskon 10%
    }

    var totalPembayaran = totalHarga - diskon;

    document.getElementById("totalPembayaran").innerHTML = "Rp " + totalPembayaran.toFixed(2);
}

function hitungGaji() {
    var namaPegawai = document.getElementById("namaPegawai").value;
    var jamKerja = parseInt(document.getElementById("jamKerja").value);
    var jamLembur = parseInt(document.getElementById("jamLembur").value);

    var gajiHarian = 50000; // Gaji per hari
    var gajiLembur12 = 25000; // Gaji lembur 1-2 jam
    var gajiLembur3p = 35000; // Gaji lembur >= 3 jam
    var uangMakan = 5000; // Uang makan per hari

    var totalJamKerja = jamKerja * 8 + jamLembur;
    var gajiLemburTotal = 0;
    var gajiUangMakan = 0;

    if (jamLembur <= 2) {
        gajiLemburTotal = jamLembur * gajiLembur12;
    } else {
        gajiLemburTotal = 2 * gajiLembur12 + (jamLembur - 2) * gajiLembur3p;
    }

    if (totalJamKerja >= 20) {
        gajiUangMakan = jamKerja * uangMakan;
    }

    var gajiTotal = jamKerja * gajiHarian + gajiLemburTotal + gajiUangMakan;

    document.getElementById("gajiTotal").innerHTML = "Rp " + gajiTotal.toFixed(2);
}

function cekSyarat() {
    var jenisKelamin = document.getElementById("jenisKelamin").value;
    var tinggiBadan = parseInt(document.getElementById("tinggiBadan").value);
    var beratBadanIdeal = tinggiBadan - 110;
    var beratBadan = parseInt(document.getElementById("beratBadan").value);
    var ipk = parseFloat(document.getElementById("ipk").value);
    var pendidikan = document.getElementById("pendidikan").value;
  
    var memenuhiSyarat = false;
  
    if (jenisKelamin === "laki-laki") {
      if (tinggiBadan >= 170 && tinggiBadan <= 179 && beratBadan >= beratBadanIdeal && ipk >= 3.0 && ipk <= 4.0 && (pendidikan === "D3" || pendidikan === "S1")) {
        memenuhiSyarat = true;
      }
    } else if (jenisKelamin === "perempuan") {
      if (tinggiBadan >= 160 && tinggiBadan <= 170 && beratBadan >= beratBadanIdeal && ipk >= 3.0 && ipk <= 4.0 && (pendidikan === "D3" || pendidikan === "S1")) {
        memenuhiSyarat = true;
      }
    }
  
    var hasilText;
    if (memenuhiSyarat) {
      hasilText = "Selamat! Anda memenuhi syarat penerimaan pegawai.";
    } else {
      hasilText = "Maaf, Anda belum memenuhi syarat penerimaan pegawai.";
    }
  
    document.getElementById("hasilSyarat").innerHTML = hasilText;
  }

  function hitungBilling() {
    var detikPemakaian = parseInt(document.getElementById("detikPemakaian").value);
    var totalBiaya = 0;

    // Konversi detik ke menit
    var menitPemakaian = detikPemakaian / 60;

    // Hitung jumlah pulsa yang digunakan
    var pulsaDigunakan = Math.ceil(menitPemakaian / 0.75); // 45 detik = 1 pulsa

    // Hitung total biaya
    totalBiaya = pulsaDigunakan * 30;

    document.getElementById("totalBiaya").innerHTML = totalBiaya;
}

function tampilZodiak() {
    var tanggal = parseInt(document.getElementById("tanggal").value);
    var bulan = parseInt(document.getElementById("bulan").value);

    var zodiak;
    var prediksi;

    if (bulan == 1) {
        if (tanggal <= 19) {
            zodiak = "Capricorn";
            prediksi = "Kesehatan: Jaga pola makan. Asmara: Hindari pertengkaran. Keuangan: Peluang baru datang. Karier: Tetap fokus pada pekerjaan.";
        } else {
            zodiak = "Aquarius";
            prediksi = "Kesehatan: Olahraga teratur. Asmara: Pertahankan komunikasi. Keuangan: Hati-hati dengan pengeluaran. Karier: Tunjukkan kemampuan terbaik.";
        }
    } else if (bulan == 2) {
        if (tanggal <= 18) {
            zodiak = "Aquarius";
            prediksi = "Kesehatan: Hindari stres. Asmara: Perhatian lebih untuk pasangan. Keuangan: Hati-hati dengan penipuan. Karier: Kesempatan untuk promosi.";
        } else {
            zodiak = "Pisces";
            prediksi = "Kesehatan: Istirahat yang cukup. Asmara: Tunjukkan kasih sayang. Keuangan: Peluang investasi muncul. Karier: Bekerja keras dengan cerdas.";
        }
    } else if (bulan == 3) {
        // ... (lanjutkan untuk bulan lainnya)
    } else {
        // ... (tambahkan kode untuk bulan yang tidak valid)
    }

    document.getElementById("hasilZodiak").innerHTML = "Zodiak Anda: " + zodiak + "<br>" + prediksi;
}