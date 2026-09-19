# Panduan Lengkap Integrasi Google Sheets & Apps Script
## Dashboard Sekolah Digital SMA Negeri 1 Lampasio

Panduan ini memandu Anda menghubungkan Dashboard Sekolah Digital dengan Google Spreadsheet secara gratis dan mudah, sehingga setiap tautan, jurnal guru, dan catatan pelanggaran siswa otomatis tersimpan di Google Drive sekolah.

---

### Langkah 1: Buat Google Spreadsheet Baru
1. Buka browser dan masuk ke akun Google sekolah Anda.
2. Buka link: [https://sheets.new](https://sheets.new)
3. Beri nama file Spreadsheet di pojok kiri atas, contoh: **`Database SMAN 1 Lampasio`**.

---

### Langkah 2: Buka Editor Google Apps Script
1. Pada menu Spreadsheet, klik **Ekstensi (Extensions)** &rarr; **Apps Script**.
2. Beri nama proyek skrip di pojok kiri atas, misalnya: **`Backend-Dashboard-Lampasio`**.
3. Di editor kode, hapus seluruh tulisan yang ada di dalam file `Code.gs`.

---

### Langkah 3: Salin Kode Backend
1. Buka file [`google-apps-script/Code.gs`](./google-apps-script/Code.gs) yang ada di repositori ini.
2. Salin (**Copy**) seluruh isi kodenya.
3. Tempel (**Paste**) ke editor Google Apps Script Anda.
4. Tekan tombol **Simpan Proyek** (ikon disket atau `Ctrl + S`).

---

### Langkah 4: Inisialisasi Database Otomatis (Hanya Sekali)
1. Pada bilah atas editor Apps Script, temukan menu dropdown pilihan fungsi di sebelah tombol *Debug*.
2. Pilih fungsi: **`setupInitialDatabase`**.
3. Klik tombol **Jalankan (Run)**.
4. Google akan meminta izin otorisasi (*Authorization Required*):
   - Klik **Tinjau Izin (Review permissions)**.
   - Pilih akun Google Anda.
   - Jika muncul peringatan *"Google hasn't verified this app"*, klik tautan **Advanced** (Lanjutan) di bagian bawah &rarr; klik **Go to Backend-Dashboard-Lampasio (unsafe)**.
   - Klik **Allow (Izinkan)**.
5. Tunggu 5-10 detik sampai muncul keterangan *"Eksekusi selesai"*.
6. Buka kembali Google Spreadsheet Anda, Anda akan melihat sheet otomatis terbuat:
   - `MenuLinks` (Daftar semua tautan menu)
   - `Pengguna` (Akun admin, guru, bk, perpus)
   - `JurnalGuru` (Rekapitulasi KBM)
   - `CatatanPelanggaran` (Buku kendali siswa)

---

### Langkah 5: Terapkan (Deploy) Sebagai Aplikasi Web
1. Di editor Apps Script, klik tombol biru **Terapkan (Deploy)** di pojok kanan atas &rarr; pilih **Penerapan baru (New deployment)**.
2. Klik ikon gerigi (roda gigi) di sebelah *Pilih jenis* &rarr; pilih **Aplikasi web (Web app)**.
3. Lengkapi konfigurasi berikut:
   - **Deskripsi**: `Versi 1.0 Dashboard SMAN 1 Lampasio`
   - **Jalankan sebagai (Execute as)**: **`Saya (emailanda@gmail.com)`**
   - **Siapa yang memiliki akses (Who has access)**: **`Siapa saja (Anyone)`** &larr; *(Sangat penting agar dashboard web dapat membaca dan menulis data)*.
4. Klik **Terapkan (Deploy)**.
5. Salin (**Copy**) **URL Aplikasi Web** yang berakhiran `/exec`.
   - Contoh format: `https://script.google.com/macros/s/AKfycbx.../exec`

---

### Langkah 6: Masukkan URL ke Dashboard Web
1. Buka Dashboard Web SMA Negeri 1 Lampasio di browser.
2. Klik tombol **Ikon Gerigi (Pengaturan)** di bilah navigasi kanan atas.
3. Tempelkan URL Aplikasi Web ke kolom **Google Apps Script Web App URL**.
4. Klik tombol **Tes Koneksi** untuk memastikan status sukses.
5. Klik **Simpan URL**.

Selamat! Dashboard Digital SMA Negeri 1 Lampasio sekarang telah sepenuhnya terhubung secara real-time ke Google Spreadsheet sekolah Anda! 🎉

