/**
 * =========================================================================
 * BACKEND GOOGLE APPS SCRIPT
 * DASHBOARD SEKOLAH DIGITAL SMA NEGERI 1 LAMPASIO
 * =========================================================================
 * 
 * Petunjuk Penggunaan:
 * 1. Buka Google Spreadsheet baru (Beri nama misal: "Database SMAN 1 Lampasio")
 * 2. Klik menu "Ekstensi" (Extensions) -> "Apps Script"
 * 3. Hapus kode default, lalu salin seluruh isi file ini dan paste ke editor.
 * 4. Simpan proyek (Ctrl+S) dengan nama "Backend-Dashboard-SMAN1Lampasio"
 * 5. Jalankan fungsi "setupInitialDatabase()" sekali saja untuk membuat sheet & data awal otomatis.
 * 6. Klik "Terapkan" (Deploy) -> "Penerapan baru" (New deployment)
 * 7. Pilih jenis: "Aplikasi Web" (Web app)
 *    - Jalankan sebagai: "Saya" (Me)
 *    - Siapa yang memiliki akses: "Siapa saja" (Anyone) -> PENTING!
 * 8. Salin URL Aplikasi Web yang diberikan, lalu tempel di menu "Pengaturan" pada Dashboard Web.
 */

// Konfigurasi Nama Sheet
const SHEET_NAMES = {
  LINKS: 'MenuLinks',
  USERS: 'Pengguna',
  JURNAL: 'JurnalGuru',
  PELANGGARAN: 'CatatanPelanggaran',
  PERPUSTAKAAN: 'Perpustakaan',
  SISWA: 'DataSiswa',
  GURU: 'DataGuruStaf'
};

/**
 * Inisialisasi awal database di Google Spreadsheet
 * Jalankan fungsi ini SATU KALI dari editor Apps Script
 */
function setupInitialDatabase() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Sheet MenuLinks
  let sheetLinks = ss.getSheetByName(SHEET_NAMES.LINKS);
  if (!sheetLinks) {
    sheetLinks = ss.insertSheet(SHEET_NAMES.LINKS);
    const headers = ['ID', 'Kategori', 'Judul', 'Deskripsi', 'URL', 'Icon', 'Badge', 'Urutan', 'Target', 'TerakhirDiperbarui'];
    sheetLinks.appendRow(headers);
    formatHeaderRow(sheetLinks, '#047857'); // Emerald Green
    
    // Data bawaan untuk SMA Negeri 1 Lampasio
    const defaultLinks = [
      ['link-1', 'Perpustakaan', 'E-Katalog Buku SMAN 1 Lampasio', 'Daftar koleksi buku perpustakaan sekolah lengkap', 'https://drive.google.com', 'book-open', 'Populer', 1, '_blank', new Date().toISOString()],
      ['link-2', 'Perpustakaan', 'Peminjaman Buku Online', 'Formulir peminjaman dan pengembalian buku siswa', 'https://forms.google.com', 'bookmark-check', 'Form', 2, '_blank', new Date().toISOString()],
      ['link-3', 'Perpustakaan', 'Koleksi E-Book & Jurnal Digital', 'Akses ribuan materi bacaan dan e-book gratis', 'https://buku.kemdikbud.go.id', 'library', 'Kemdikbud', 3, '_blank', new Date().toISOString()],
      ['link-4', 'Pembelajaran', 'Google Classroom SMAN 1 Lampasio', 'Ruang kelas digital pembelajaran daring', 'https://classroom.google.com', 'monitor-play', 'Aktif', 1, '_blank', new Date().toISOString()],
      ['link-5', 'Pembelajaran', 'Jadwal Pelajaran Semester Ini', 'Jadwal KBM lengkap seluruh kelas X, XI, XII', 'https://docs.google.com', 'calendar-days', 'PDF', 2, '_blank', new Date().toISOString()],
      ['link-6', 'Pembelajaran', 'Bank Soal & Penilaian (CBT)', 'Portal latihan soal dan ujian daring sekolah', 'https://drive.google.com', 'file-question', 'Ujian', 3, '_blank', new Date().toISOString()],
      ['link-7', 'Data_Guru_Staf_Siswa', 'Data Guru & Tenaga Kependidikan', 'Profil, NIP, dan mata pelajaran pengampu guru', 'https://docs.google.com/spreadsheets', 'users', 'GTK', 1, '_blank', new Date().toISOString()],
      ['link-8', 'Data_Guru_Staf_Siswa', 'Database Siswa (Dapodik)', 'Rekapitulasi data induk siswa per rombongan belajar', 'https://docs.google.com/spreadsheets', 'graduation-cap', 'Dapodik', 2, '_blank', new Date().toISOString()],
      ['link-9', 'Jurnal_Guru', 'Form Pengisian Jurnal Mengajar', 'Input catatan materi dan absensi KBM harian', 'https://forms.google.com', 'pen-tool', 'Wajib', 1, '_blank', new Date().toISOString()],
      ['link-10', 'Jurnal_Guru', 'Rekapitulasi Jurnal Guru Bulanan', 'Laporan supervisi kegiatan belajar mengajar guru', 'https://docs.google.com/spreadsheets', 'file-spreadsheet', 'Rekap', 2, '_blank', new Date().toISOString()],
      ['link-11', 'Catatan_Pelanggaran', 'Input Pelanggaran & Tata Tertib Siswa', 'Pencatatan poin kedisiplinan dan laporan pelanggaran', 'https://forms.google.com', 'alert-triangle', 'BK', 1, '_blank', new Date().toISOString()],
      ['link-12', 'Catatan_Pelanggaran', 'Buku Kendali & Rekap Poin Siswa', 'Monitoring penanganan siswa oleh Wali Kelas & BK', 'https://docs.google.com/spreadsheets', 'clipboard-list', 'Monitoring', 2, '_blank', new Date().toISOString()]
    ];
    defaultLinks.forEach(row => sheetLinks.appendRow(row));
  }

  // 2. Sheet Pengguna (Users)
  let sheetUsers = ss.getSheetByName(SHEET_NAMES.USERS);
  if (!sheetUsers) {
    sheetUsers = ss.insertSheet(SHEET_NAMES.USERS);
    const headers = ['Username', 'Password', 'NamaLengkap', 'Role', 'Status'];
    sheetUsers.appendRow(headers);
    formatHeaderRow(sheetUsers, '#1E3A8A'); // Blue
    sheetUsers.appendRow(['admin', 'admin123', 'Administrator SMAN 1 Lampasio', 'admin', 'Aktif']);
    sheetUsers.appendRow(['guru', 'guru123', 'Dewan Guru SMAN 1 Lampasio', 'guru', 'Aktif']);
    sheetUsers.appendRow(['bk', 'bk123', 'Bimbingan Konseling (BK)', 'bk', 'Aktif']);
    sheetUsers.appendRow(['perpus', 'perpus123', 'Petugas Perpustakaan', 'perpus', 'Aktif']);
  }

  // 3. Sheet Jurnal Guru
  let sheetJurnal = ss.getSheetByName(SHEET_NAMES.JURNAL);
  if (!sheetJurnal) {
    sheetJurnal = ss.insertSheet(SHEET_NAMES.JURNAL);
    const headers = ['ID', 'Tanggal', 'NamaGuru', 'MataPelajaran', 'Kelas', 'JamKe', 'MateriPembelajaran', 'SiswaHadir', 'SiswaTidakHadir', 'CatatanKBM', 'Timestamp'];
    sheetJurnal.appendRow(headers);
    formatHeaderRow(sheetJurnal, '#0F766E'); // Teal
    sheetJurnal.appendRow([
      'JRN-001', 
      new Date().toISOString().slice(0, 10), 
      'Drs. Ahmad Fauzi', 
      'Bahasa Indonesia', 
      'XII MIPA 1', 
      '1 - 2', 
      'Menulis Artikel Opini Ilmiah', 
      '32', 
      '2 (Sakit: Budi, Izin: Siti)', 
      'KBM berjalan lancar dan interaktif', 
      new Date().toISOString()
    ]);
  }

  // 4. Sheet Catatan Pelanggaran Siswa
  let sheetPelanggaran = ss.getSheetByName(SHEET_NAMES.PELANGGARAN);
  if (!sheetPelanggaran) {
    sheetPelanggaran = ss.insertSheet(SHEET_NAMES.PELANGGARAN);
    const headers = ['ID', 'Tanggal', 'NamaSiswa', 'Kelas', 'NISN', 'BentukPelanggaran', 'Poin', 'TindakLanjut', 'GuruPencatat', 'Timestamp'];
    sheetPelanggaran.appendRow(headers);
    formatHeaderRow(sheetPelanggaran, '#B91C1C'); // Red
    sheetPelanggaran.appendRow([
      'PLG-001', 
      new Date().toISOString().slice(0, 10), 
      'Reza Rahardian', 
      'XI IPS 2', 
      '0054321987', 
      'Terlambat masuk sekolah lebih dari 15 menit', 
      '5', 
      'Teguran lisan & pembinaan tata tertib piket', 
      'Ibu Nurul Hidayah, S.Pd', 
      new Date().toISOString()
    ]);
  }

  return 'Database SMA Negeri 1 Lampasio berhasil disiapkan!';
}

// Format Header Tabel di Google Sheets
function formatHeaderRow(sheet, bgColor) {
  const headerRange = sheet.getRange(1, 1, 1, sheet.getLastColumn());
  headerRange.setFontWeight('bold');
  headerRange.setFontColor('#FFFFFF');
  headerRange.setBackground(bgColor);
  sheet.setFrozenRows(1);
}

/**
 * Handle HTTP GET Requests
 */
function doGet(e) {
  try {
    const action = (e && e.parameter && e.parameter.action) ? e.parameter.action : 'getLinks';
    let responseData = {};

    switch (action) {
      case 'ping':
        responseData = { status: 'success', message: 'Koneksi ke Google Apps Script SMAN 1 Lampasio Berhasil!', timestamp: new Date().toISOString() };
        break;

      case 'getLinks':
        responseData = { status: 'success', data: getSheetDataAsJson(SHEET_NAMES.LINKS) };
        break;

      case 'getJurnal':
        responseData = { status: 'success', data: getSheetDataAsJson(SHEET_NAMES.JURNAL) };
        break;

      case 'getPelanggaran':
        responseData = { status: 'success', data: getSheetDataAsJson(SHEET_NAMES.PELANGGARAN) };
        break;

      case 'getAll':
        responseData = {
          status: 'success',
          links: getSheetDataAsJson(SHEET_NAMES.LINKS),
          jurnal: getSheetDataAsJson(SHEET_NAMES.JURNAL),
          pelanggaran: getSheetDataAsJson(SHEET_NAMES.PELANGGARAN)
        };
        break;

      default:
        responseData = { status: 'error', message: 'Aksi GET tidak dikenali: ' + action };
    }

    return createJsonResponse(responseData);
  } catch (error) {
    return createJsonResponse({ status: 'error', message: error.toString() });
  }
}

/**
 * Handle HTTP POST Requests
 */
function doPost(e) {
  try {
    let payload = {};
    if (e.postData && e.postData.contents) {
      payload = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      payload = e.parameter;
    }

    const action = payload.action;
    let responseData = {};

    switch (action) {
      // 1. Verifikasi Login
      case 'login':
        responseData = handleLogin(payload.username, payload.password);
        break;

      // 2. Tambah Link Baru
      case 'addLink':
        responseData = handleAddLink(payload.link);
        break;

      // 3. Edit Link
      case 'updateLink':
        responseData = handleUpdateLink(payload.link);
        break;

      // 4. Hapus Link
      case 'deleteLink':
        responseData = handleDeleteLink(payload.id);
        break;

      // 5. Tambah Jurnal Guru
      case 'addJurnal':
        responseData = handleAddJurnal(payload.jurnal);
        break;

      // 6. Tambah Catatan Pelanggaran
      case 'addPelanggaran':
        responseData = handleAddPelanggaran(payload.pelanggaran);
        break;

      default:
        responseData = { status: 'error', message: 'Aksi POST tidak dikenali: ' + action };
    }

    return createJsonResponse(responseData);
  } catch (error) {
    return createJsonResponse({ status: 'error', message: error.toString() });
  }
}

/**
 * Membaca data dari Sheet dan mengembalikan sebagai array of objects
 */
function getSheetDataAsJson(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    setupInitialDatabase();
    sheet = ss.getSheetByName(sheetName);
  }
  
  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();
  if (lastRow <= 1) return [];

  const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  const rows = sheet.getRange(2, 1, lastRow - 1, lastCol).getValues();

  const data = [];
  for (let i = 0; i < rows.length; i++) {
    const item = {};
    for (let j = 0; j < headers.length; j++) {
      item[headers[j]] = rows[i][j];
    }
    data.push(item);
  }
  return data;
}

/**
 * Autentikasi Pengguna
 */
function handleLogin(username, password) {
  const users = getSheetDataAsJson(SHEET_NAMES.USERS);
  const found = users.find(u => String(u.Username).toLowerCase() === String(username).toLowerCase() && String(u.Password) === String(password));
  
  if (found) {
    return {
      status: 'success',
      message: 'Login berhasil!',
      user: {
        username: found.Username,
        nama: found.NamaLengkap,
        role: found.Role
      }
    };
  } else {
    return { status: 'error', message: 'Username atau password salah!' };
  }
}

/**
 * Tambah Link Baru ke Sheet MenuLinks
 */
function handleAddLink(link) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.LINKS);
  
  const id = link.ID || 'link-' + new Date().getTime();
  const kategori = link.Kategori || 'Lainnya';
  const judul = link.Judul || 'Tanpa Judul';
  const deskripsi = link.Deskripsi || '';
  const url = link.URL || '#';
  const icon = link.Icon || 'link';
  const badge = link.Badge || '';
  const urutan = Number(link.Urutan) || (sheet.getLastRow());
  const target = link.Target || '_blank';
  const updated = new Date().toISOString();

  sheet.appendRow([id, kategori, judul, deskripsi, url, icon, badge, urutan, target, updated]);

  return {
    status: 'success',
    message: 'Link berhasil ditambahkan ke Google Sheets!',
    data: { ID: id, Kategori: kategori, Judul: judul, Deskripsi: deskripsi, URL: url, Icon: icon, Badge: badge, Urutan: urutan, Target: target, TerakhirDiperbarui: updated }
  };
}

/**
 * Perbarui Link di Sheet MenuLinks
 */
function handleUpdateLink(link) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.LINKS);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(link.ID)) {
      const rowNum = i + 1;
      if (link.Kategori !== undefined) sheet.getRange(rowNum, 2).setValue(link.Kategori);
      if (link.Judul !== undefined) sheet.getRange(rowNum, 3).setValue(link.Judul);
      if (link.Deskripsi !== undefined) sheet.getRange(rowNum, 4).setValue(link.Deskripsi);
      if (link.URL !== undefined) sheet.getRange(rowNum, 5).setValue(link.URL);
      if (link.Icon !== undefined) sheet.getRange(rowNum, 6).setValue(link.Icon);
      if (link.Badge !== undefined) sheet.getRange(rowNum, 7).setValue(link.Badge);
      if (link.Urutan !== undefined) sheet.getRange(rowNum, 8).setValue(Number(link.Urutan));
      if (link.Target !== undefined) sheet.getRange(rowNum, 9).setValue(link.Target);
      sheet.getRange(rowNum, 10).setValue(new Date().toISOString());

      return { status: 'success', message: 'Link berhasil diperbarui di Google Sheets!' };
    }
  }
  return { status: 'error', message: 'Link dengan ID ' + link.ID + ' tidak ditemukan.' };
}

/**
 * Hapus Link dari Sheet MenuLinks
 */
function handleDeleteLink(id) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.LINKS);
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      sheet.deleteRow(i + 1);
      return { status: 'success', message: 'Link berhasil dihapus dari Google Sheets!' };
    }
  }
  return { status: 'error', message: 'Link ID tidak ditemukan.' };
}

/**
 * Tambah Record Jurnal Guru
 */
function handleAddJurnal(jurnal) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.JURNAL);
  
  const id = 'JRN-' + new Date().getTime();
  const row = [
    id,
    jurnal.Tanggal || new Date().toISOString().slice(0, 10),
    jurnal.NamaGuru || '',
    jurnal.MataPelajaran || '',
    jurnal.Kelas || '',
    jurnal.JamKe || '',
    jurnal.MateriPembelajaran || '',
    jurnal.SiswaHadir || '',
    jurnal.SiswaTidakHadir || '',
    jurnal.CatatanKBM || '',
    new Date().toISOString()
  ];
  sheet.appendRow(row);
  return { status: 'success', message: 'Jurnal Guru berhasil disimpan ke Google Sheets!', id: id };
}

/**
 * Tambah Catatan Pelanggaran Siswa
 */
function handleAddPelanggaran(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.PELANGGARAN);
  
  const id = 'PLG-' + new Date().getTime();
  const row = [
    id,
    data.Tanggal || new Date().toISOString().slice(0, 10),
    data.NamaSiswa || '',
    data.Kelas || '',
    data.NISN || '',
    data.BentukPelanggaran || '',
    data.Poin || '0',
    data.TindakLanjut || '',
    data.GuruPencatat || '',
    new Date().toISOString()
  ];
  sheet.appendRow(row);
  return { status: 'success', message: 'Catatan pelanggaran siswa berhasil disimpan!', id: id };
}

/**
 * Format respon JSON dengan header CORS
 */
function createJsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
