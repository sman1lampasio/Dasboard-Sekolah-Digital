# Dashboard Sekolah Digital SMA Negeri 1 Lampasio
### Portal Layanan Pendidikan Terintegrasi Google Spreadsheet & Google Apps Script

Aplikasi web modern, responsif, dan interaktif untuk portal sekolah digital **SMA Negeri 1 Lampasio** (Kabupaten Tolitoli, Sulawesi Tengah). Aplikasi ini berfungsi sebagai pusat navigasi administrasi dan pembelajaran daring yang terhubung langsung ke basis data Google Sheets secara gratis tanpa biaya server.

---

## 🌟 Fitur Utama

1. **📚 Perpustakaan Digital**:
   - E-Katalog buku perpustakaan.
   - Formulir peminjaman & pengembalian buku online.
   - Tautan langsung ke folder koleksi e-book & modul literasi Kemdikbud/Drive.

2. **🎓 Pembelajaran & E-Learning**:
   - Akses cepat Google Classroom per mata pelajaran.
   - Jadwal KBM digital per semester.
   - Bank soal dan CBT (Computer Based Test).

3. **👥 Data Guru, Staf & Siswa**:
   - Direktori profil Guru dan Tenaga Kependidikan (GTK).
   - Rekapitulasi data induk siswa aktif (Dapodik).

4. **📝 Jurnal Guru Digital**:
   - Formulir pengisian agenda harian mengajar guru secara langsung.
   - Rekapitulasi materi ajar, jam pelajaran, dan absensi siswa (Hadir/Sakit/Izin/Alpa).
   - Tersimpan langsung ke Google Spreadsheet.

5. **⚠️ Catatan Pelanggaran Siswa & Buku Kendali**:
   - Pencatatan ketertiban dan poin pelanggaran siswa oleh guru piket / Wali Kelas / Guru BK.
   - Pemantauan tindak lanjut dan pembinaan kedisiplinan siswa.

6. **🔐 Halaman Login & Manajemen Tautan Dinamis**:
   - Sistem login admin dan petugas.
   - Admin dapat **menambah tautan baru**, **mengedit tautan**, atau **menghapus tautan** pada setiap menu secara dinamis tanpa perlu mengubah baris kode program.

7. **⚡ Dukungan Hybrid (Offline & Online Google Sheets)**:
   - Tetap berfungsi secara instan menggunakan penyimpanan browser (LocalStorage).
   - Terhubung mulus ke Google Spreadsheet melalui backend **Google Apps Script (`Code.gs`)**.

---

## ⚙️ Menghubungkan ke Google Spreadsheet

Untuk menghubungkan formulir input dan data tautan ke Google Spreadsheet sekolah Anda, ikuti langkah mudah pada:
👉 **[PETUNJUK_SETUP.md](./PETUNJUK_SETUP.md)**

---
---

## 📁 Struktur Direktori

```text
Dasboard-Sekolah-Digital/
├── index.html                  # Halaman web dashboard utama
├── css/
│   └── style.css               # Kustomisasi CSS & tema sekolah
├── js/
│   └── app.js                  # Logika aplikasi, state, & koneksi API
├── google-apps-script/
│   └── Code.gs                 # Kode backend Google Apps Script untuk Google Sheets
├── PETUNJUK_SETUP.md           # Panduan integrasi Spreadsheet bahasa Indonesia
└── README.md                   # Dokumentasi repositori
```

---

&copy; 2026 **SMA Negeri 1 Lampasio** &bull; Kabupaten Tolitoli, Sulawesi Tengah.
