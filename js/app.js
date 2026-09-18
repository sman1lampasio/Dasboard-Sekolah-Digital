/**
 * =========================================================================
 * JAVASCRIPT DASHBOARD SEKOLAH DIGITAL SMA NEGERI 1 LAMPASIO
 * =========================================================================
 */

// Konstanta Key Penyimpanan Lokal
const STORAGE_KEYS = {
  GAS_URL: 'sman1lampasio_gas_url',
  LINKS: 'sman1lampasio_links_data',
  JURNAL: 'sman1lampasio_jurnal_data',
  PELANGGARAN: 'sman1lampasio_pelanggaran_data',
  USER: 'sman1lampasio_current_user'
};

// Data Default Bawaan untuk SMA Negeri 1 Lampasio
const DEFAULT_LINKS = [
  {
    ID: 'link-1',
    Kategori: 'Perpustakaan',
    Judul: 'E-Katalog Perpustakaan Sekolah',
    Deskripsi: 'Daftar katalog buku pelajaran, fiksi, non-fiksi, dan referensi',
    URL: 'https://buku.kemdikbud.go.id',
    Icon: 'book-open',
    Badge: 'Katalog',
    Urutan: 1,
    Target: '_blank'
  },
  {
    ID: 'link-2',
    Kategori: 'Perpustakaan',
    Judul: 'Formulir Peminjaman Buku Online',
    Deskripsi: 'Layanan peminjaman dan reservasi buku bagi siswa & guru',
    URL: 'https://forms.google.com',
    Icon: 'bookmark-check',
    Badge: 'Form',
    Urutan: 2,
    Target: '_blank'
  },
  {
    ID: 'link-3',
    Kategori: 'Perpustakaan',
    Judul: 'Koleksi E-Book & Modul Literasi',
    Deskripsi: 'Folder Google Drive buku referensi dan modul pembelajaran digital',
    URL: 'https://drive.google.com',
    Icon: 'library',
    Badge: 'Drive',
    Urutan: 3,
    Target: '_blank'
  },
  {
    ID: 'link-4',
    Kategori: 'Pembelajaran',
    Judul: 'Google Classroom SMAN 1 Lampasio',
    Deskripsi: 'Ruang kelas daring, pembagian tugas dan materi interaktif',
    URL: 'https://classroom.google.com',
    Icon: 'monitor-play',
    Badge: 'Classroom',
    Urutan: 1,
    Target: '_blank'
  },
  {
    ID: 'link-5',
    Kategori: 'Pembelajaran',
    Judul: 'Jadwal Pelajaran KBM Semester Ini',
    Deskripsi: 'Jadwal tatap muka dan pembelajaran kelas X, XI, dan XII',
    URL: 'https://docs.google.com',
    Icon: 'calendar-days',
    Badge: 'Jadwal',
    Urutan: 2,
    Target: '_blank'
  },
  {
    ID: 'link-6',
    Kategori: 'Pembelajaran',
    Judul: 'Bank Soal & Penilaian Asesmen (CBT)',
    Deskripsi: 'Kumpulan lembar kerja, bank soal ujian sekolah dan formatif',
    URL: 'https://drive.google.com',
    Icon: 'file-question',
    Badge: 'Asesmen',
    Urutan: 3,
    Target: '_blank'
  },
  {
    ID: 'link-7',
    Kategori: 'Data_Guru_Staf_Siswa',
    Judul: 'Direktori Data Guru & Tenaga Kependidikan',
    Deskripsi: 'Profil GTK, NIP, pangkat/golongan, dan jadwal mengampu',
    URL: 'https://docs.google.com/spreadsheets',
    Icon: 'users',
    Badge: 'GTK',
    Urutan: 1,
    Target: '_blank'
  },
  {
    ID: 'link-8',
    Kategori: 'Data_Guru_Staf_Siswa',
    Judul: 'Database Induk Siswa (Dapodik)',
    Deskripsi: 'Rekap data siswa aktif per rombongan belajar dan kontak wali',
    URL: 'https://docs.google.com/spreadsheets',
    Icon: 'graduation-cap',
    Badge: 'Dapodik',
    Urutan: 2,
    Target: '_blank'
  },
  {
    ID: 'link-9',
    Kategori: 'Jurnal_Guru',
    Judul: 'Formulir Jurnal KBM Harian Guru',
    Deskripsi: 'Pengisian laporan agenda harian guru, materi & absensi siswa',
    URL: '#jurnalSection',
    Icon: 'pen-tool',
    Badge: 'Harian',
    Urutan: 1,
    Target: '_self'
  },
  {
    ID: 'link-10',
    Kategori: 'Jurnal_Guru',
    Judul: 'Rekapitulasi Jurnal Mengajar Bulanan',
    Deskripsi: 'Laporan rekapitulasi supervisi guru untuk Kepala Sekolah & Kurikulum',
    URL: 'https://docs.google.com/spreadsheets',
    Icon: 'file-spreadsheet',
    Badge: 'Rekap',
    Urutan: 2,
    Target: '_blank'
  },
  {
    ID: 'link-11',
    Kategori: 'Catatan_Pelanggaran',
    Judul: 'Input Catatan Tata Tertib Siswa',
    Deskripsi: 'Pencatatan pelanggaran tata tertib dan poin kedisiplinan',
    URL: '#pelanggaranSection',
    Icon: 'alert-triangle',
    Badge: 'Kedisiplinan',
    Urutan: 1,
    Target: '_self'
  },
  {
    ID: 'link-12',
    Kategori: 'Catatan_Pelanggaran',
    Judul: 'Buku Kendali & Rekap Poin Siswa (BK)',
    Deskripsi: 'Monitoring skor pelanggaran dan riwayat bimbingan konseling',
    URL: 'https://docs.google.com/spreadsheets',
    Icon: 'clipboard-list',
    Badge: 'BK',
    Urutan: 2,
    Target: '_blank'
  }
];

const DEFAULT_JURNAL = [
  {
    ID: 'JRN-1',
    Tanggal: '2026-09-18',
    NamaGuru: 'Drs. Ahmad Fauzi',
    MataPelajaran: 'Bahasa Indonesia',
    Kelas: 'XII MIPA 1',
    JamKe: '1 - 2',
    MateriPembelajaran: 'Menulis Teks Editorial / Opini Ilmiah',
    SiswaHadir: '34',
    SiswaTidakHadir: '2 (Sakit: Budi, Izin: Siti)',
    CatatanKBM: 'Seluruh siswa aktif berdiskusi menganalisis teks opini'
  },
  {
    ID: 'JRN-2',
    Tanggal: '2026-09-18',
    NamaGuru: 'Nurul Hidayah, S.Pd',
    MataPelajaran: 'Matematika Wajib',
    Kelas: 'XI IPS 2',
    JamKe: '3 - 4',
    MateriPembelajaran: 'Program Linear Dua Variabel',
    SiswaHadir: '32',
    SiswaTidakHadir: '0 (Nihil)',
    CatatanKBM: 'Latihan soal kelompok berjalan tertib'
  }
];

const DEFAULT_PELANGGARAN = [
  {
    ID: 'PLG-1',
    Tanggal: '2026-09-18',
    NamaSiswa: 'Reza Rahardian',
    Kelas: 'XI IPS 2',
    NISN: '0054321987',
    BentukPelanggaran: 'Terlambat hadir ke sekolah lebih dari 15 menit',
    Poin: '5',
    TindakLanjut: 'Teguran lisan & pembinaan literasi di perpustakaan piket',
    GuruPencatat: 'Ibu Nurul Hidayah, S.Pd'
  },
  {
    ID: 'PLG-2',
    Tanggal: '2026-09-17',
    NamaSiswa: 'Doni Pratama',
    Kelas: 'X-3',
    NISN: '0078912345',
    BentukPelanggaran: 'Tidak memakai atribut seragam lengkap (Dasi & Sabuk)',
    Poin: '5',
    TindakLanjut: 'Peringatan pertama dan pendataan di buku kendali tata tertib',
    GuruPencatat: 'Bapak Hendra, S.Pd'
  }
];

// State Aplikasi
let state = {
  gasUrl: localStorage.getItem(STORAGE_KEYS.GAS_URL) || '',
  links: [],
  jurnal: [],
  pelanggaran: [],
  currentUser: null,
  activeCategory: 'semua',
  searchQuery: ''
};

// =========================================================================
// INISIALISASI
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  loadLocalData();
  checkUserSession();
  updateConnectionStatusUI();
  renderAll();

  // Jika URL GAS sudah ada, coba sinkronisasi di latar belakang
  if (state.gasUrl) {
    syncFromGas(true);
  }
});

// Jam Digital WITA (Sulawesi Tengah UTC+8)
function initLiveClock() {
  const clockEl = document.getElementById('liveClock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Konversi ke WITA (UTC+8)
    const options = { timeZone: 'Asia/Makassar', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeStr = new Intl.DateTimeFormat('id-ID', options).format(now);
    clockEl.textContent = `${timeStr} WITA`;
  }
  update();
  setInterval(update, 1000);
}

// Muat Data dari LocalStorage atau Default
function loadLocalData() {
  const savedLinks = localStorage.getItem(STORAGE_KEYS.LINKS);
  state.links = savedLinks ? JSON.parse(savedLinks) : DEFAULT_LINKS;

  const savedJurnal = localStorage.getItem(STORAGE_KEYS.JURNAL);
  state.jurnal = savedJurnal ? JSON.parse(savedJurnal) : DEFAULT_JURNAL;

  const savedPelanggaran = localStorage.getItem(STORAGE_KEYS.PELANGGARAN);
  state.pelanggaran = savedPelanggaran ? JSON.parse(savedPelanggaran) : DEFAULT_PELANGGARAN;

  const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
  if (savedUser) {
    state.currentUser = JSON.parse(savedUser);
  }
}

// Simpan Data ke LocalStorage
function saveLocalLinks() {
  localStorage.setItem(STORAGE_KEYS.LINKS, JSON.stringify(state.links));
}
function saveLocalJurnal() {
  localStorage.setItem(STORAGE_KEYS.JURNAL, JSON.stringify(state.jurnal));
}
function saveLocalPelanggaran() {
  localStorage.setItem(STORAGE_KEYS.PELANGGARAN, JSON.stringify(state.pelanggaran));
}

// Periksa Sesi Login
function checkUserSession() {
  const btnLogin = document.getElementById('btnLogin');
  const userProfile = document.getElementById('userProfile');
  const loggedUserName = document.getElementById('loggedUserName');
  const loggedUserRole = document.getElementById('loggedUserRole');
  const btnHeroAddLink = document.getElementById('btnHeroAddLink');
  const adminActionGroup = document.getElementById('adminActionGroup');

  if (state.currentUser) {
    btnLogin.classList.add('hidden');
    userProfile.classList.remove('hidden');
    userProfile.classList.add('flex');
    loggedUserName.textContent = state.currentUser.nama || state.currentUser.username;
    loggedUserRole.textContent = state.currentUser.role || 'Admin';

    if (btnHeroAddLink) btnHeroAddLink.classList.remove('hidden');
    if (adminActionGroup) {
      adminActionGroup.classList.remove('hidden');
      adminActionGroup.classList.add('flex');
    }
  } else {
    btnLogin.classList.remove('hidden');
    userProfile.classList.add('hidden');
    userProfile.classList.remove('flex');
    if (btnHeroAddLink) btnHeroAddLink.classList.add('hidden');
    if (adminActionGroup) {
      adminActionGroup.classList.add('hidden');
      adminActionGroup.classList.remove('flex');
    }
  }
}

// Perbarui Status Koneksi UI
function updateConnectionStatusUI() {
  const dot = document.getElementById('statusIndicatorDot');
  const text = document.getElementById('statusIndicatorText');

  if (!state.gasUrl) {
    dot.className = 'w-2.5 h-2.5 rounded-full bg-amber-400';
    text.textContent = 'Mode Lokal (Belum Terhubung)';
  } else {
    dot.className = 'w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot';
    text.textContent = 'Sheets Terhubung';
  }
}

// =========================================================================
// RENDER & FILTER DATA
// =========================================================================

function renderAll() {
  renderLinks();
  renderJurnal();
  renderPelanggaran();
  updateStatsCounters();
  lucide.createIcons();
}

function updateStatsCounters() {
  const statTotalLinks = document.getElementById('statTotalLinks');
  const statPerpus = document.getElementById('statPerpus');
  const statJurnal = document.getElementById('statJurnal');
  const statPelanggaran = document.getElementById('statPelanggaran');

  if (statTotalLinks) statTotalLinks.textContent = state.links.length;
  if (statPerpus) statPerpus.textContent = state.links.filter(l => l.Kategori === 'Perpustakaan').length;
  if (statJurnal) statJurnal.textContent = state.jurnal.length;
  if (statPelanggaran) statPelanggaran.textContent = state.pelanggaran.length;
}

// Render Kartu Tautan Menu
function renderLinks() {
  const cardsGrid = document.getElementById('cardsGrid');
  const emptyState = document.getElementById('emptyState');
  const activeLinkCount = document.getElementById('activeLinkCount');
  const currentTitle = document.getElementById('currentCategoryTitle');
  const currentSub = document.getElementById('currentCategorySubtitle');

  let filtered = state.links;

  // Filter Kategori
  if (state.activeCategory !== 'semua') {
    filtered = filtered.filter(l => l.Kategori === state.activeCategory);
  }

  // Filter Search
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(l => 
      (l.Judul && l.Judul.toLowerCase().includes(q)) ||
      (l.Deskripsi && l.Deskripsi.toLowerCase().includes(q)) ||
      (l.Kategori && l.Kategori.toLowerCase().includes(q)) ||
      (l.Badge && l.Badge.toLowerCase().includes(q))
    );
  }

  // Update Judul Section
  const titles = {
    semua: { t: 'Semua Layanan & Tautan', s: 'Menampilkan seluruh tautan portal aktif SMA Negeri 1 Lampasio' },
    Perpustakaan: { t: '📚 Perpustakaan Digital', s: 'Koleksi buku bacaan, e-katalog, dan peminjaman online' },
    Pembelajaran: { t: '🎓 Pembelajaran & E-Learning', s: 'Google Classroom, jadwal pelajaran, asesmen dan materi ajar' },
    Data_Guru_Staf_Siswa: { t: '👥 Direktori Guru, Staf & Siswa', s: 'Data induk kependidikan Dapodik dan struktur organisasi' },
    Jurnal_Guru: { t: '📝 Jurnal Guru Digital', s: 'Pencatatan materi dan kehadiran kegiatan belajar mengajar harian' },
    Catatan_Pelanggaran: { t: '⚠️ Catatan Pelanggaran Siswa', s: 'Buku kendali tata tertib dan pembinaan kedisiplinan siswa' }
  };
  const meta = titles[state.activeCategory] || { t: 'Layanan Terpadu', s: 'Tautan menu sekolah digital' };
  currentTitle.textContent = meta.t;
  currentSub.textContent = meta.s;
  activeLinkCount.textContent = `${filtered.length} Tautan`;

  if (filtered.length === 0) {
    cardsGrid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  cardsGrid.innerHTML = filtered.map(item => {
    const iconName = item.Icon || 'link-2';
    const badgeHtml = item.Badge ? `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold badge-emerald">${escapeHtml(item.Badge)}</span>` : '';
    const categoryBadge = `<span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">${formatCategoryLabel(item.Kategori)}</span>`;

    // Admin Action Buttons
    let adminControls = '';
    if (state.currentUser) {
      adminControls = `
        <div class="flex items-center space-x-1 pt-3 border-t border-slate-100 mt-3">
          <button onclick="openEditLinkModal('${item.ID}')" class="px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:text-brand-700 hover:bg-slate-100 rounded-md transition flex items-center space-x-1">
            <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
            <span>Edit</span>
          </button>
          <button onclick="handleDeleteLink('${item.ID}')" class="px-2.5 py-1 text-[11px] font-medium text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition flex items-center space-x-1">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            <span>Hapus</span>
          </button>
        </div>
      `;
    }

    // Tombol URL
    let actionBtn = '';
    if (item.URL.startsWith('#')) {
      actionBtn = `
        <a href="${item.URL}" onclick="handleAnchorLink('${item.URL}')" class="inline-flex items-center space-x-1 px-3.5 py-1.5 bg-slate-100 hover:bg-brand-50 text-brand-700 text-xs font-semibold rounded-lg transition">
          <span>Buka Fitur</span>
          <i data-lucide="arrow-down" class="w-3.5 h-3.5"></i>
        </a>
      `;
    } else {
      actionBtn = `
        <a href="${item.URL}" target="${item.Target || '_blank'}" rel="noopener noreferrer" class="inline-flex items-center space-x-1 px-3.5 py-1.5 bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white text-xs font-semibold rounded-lg transition shadow-xs">
          <span>Buka Tautan</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      `;
    }

    return `
      <div class="glass-card rounded-2xl p-5 flex flex-col justify-between shadow-sm">
        <div>
          <div class="flex items-start justify-between gap-2 mb-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 text-brand-600 border border-emerald-100 flex items-center justify-center">
              <i data-lucide="${iconName}" class="w-5 h-5"></i>
            </div>
            <div class="flex items-center space-x-2">
              ${badgeHtml}
            </div>
          </div>
          <div class="mb-1">${categoryBadge}</div>
          <h4 class="font-bold text-slate-900 text-sm sm:text-base leading-snug hover:text-brand-600 transition">
            ${escapeHtml(item.Judul)}
          </h4>
          <p class="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
            ${escapeHtml(item.Deskripsi || 'Tidak ada keterangan')}
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span class="text-[11px] font-mono text-slate-400 truncate max-w-[140px]" title="${item.URL}">
            ${item.URL.startsWith('#') ? 'Fitur Internal' : cleanUrlDisplay(item.URL)}
          </span>
          ${actionBtn}
        </div>

        ${adminControls}
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// Render Tabel Jurnal Guru
function renderJurnal() {
  const tbody = document.getElementById('jurnalTableBody');
  if (!tbody) return;

  if (state.jurnal.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-slate-400">Belum ada catatan jurnal KBM.</td></tr>`;
    return;
  }

  tbody.innerHTML = state.jurnal.map(j => `
    <tr class="hover:bg-slate-50 transition">
      <td class="py-3 px-4 font-mono font-medium text-slate-800">${escapeHtml(j.Tanggal)}</td>
      <td class="py-3 px-4 font-semibold text-slate-900">${escapeHtml(j.NamaGuru)}</td>
      <td class="py-3 px-4">
        <span class="font-medium text-slate-800">${escapeHtml(j.MataPelajaran)}</span>
        <div class="text-[11px] text-slate-500">${escapeHtml(j.Kelas)}</div>
      </td>
      <td class="py-3 px-4 font-mono">${escapeHtml(j.JamKe)}</td>
      <td class="py-3 px-4 font-medium text-slate-800">${escapeHtml(j.MateriPembelajaran)}</td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">Hadir: ${escapeHtml(j.SiswaHadir || '0')}</span>
        ${j.SiswaTidakHadir ? `<div class="text-[11px] text-rose-600 mt-1">${escapeHtml(j.SiswaTidakHadir)}</div>` : ''}
      </td>
      <td class="py-3 px-4 text-slate-500 max-w-xs truncate" title="${escapeHtml(j.CatatanKBM || '')}">
        ${escapeHtml(j.CatatanKBM || '-')}
      </td>
    </tr>
  `).join('');
}

// Render Tabel Catatan Pelanggaran Siswa
function renderPelanggaran() {
  const tbody = document.getElementById('pelanggaranTableBody');
  if (!tbody) return;

  if (state.pelanggaran.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-slate-400">Belum ada catatan pelanggaran siswa.</td></tr>`;
    return;
  }

  tbody.innerHTML = state.pelanggaran.map(p => `
    <tr class="hover:bg-slate-50 transition">
      <td class="py-3 px-4 font-mono font-medium text-slate-800">${escapeHtml(p.Tanggal)}</td>
      <td class="py-3 px-4 font-bold text-slate-900">${escapeHtml(p.NamaSiswa)}</td>
      <td class="py-3 px-4">
        <span class="font-medium text-slate-800">${escapeHtml(p.Kelas)}</span>
        ${p.NISN ? `<div class="text-[10px] font-mono text-slate-400">NISN: ${escapeHtml(p.NISN)}</div>` : ''}
      </td>
      <td class="py-3 px-4 text-slate-800 font-medium">${escapeHtml(p.BentukPelanggaran)}</td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold border border-rose-200">
          +${escapeHtml(p.Poin || '0')} Poin
        </span>
      </td>
      <td class="py-3 px-4 text-slate-600">${escapeHtml(p.TindakLanjut || '-')}</td>
      <td class="py-3 px-4 text-slate-500 font-medium">${escapeHtml(p.GuruPencatat || '-')}</td>
    </tr>
  `).join('');
}

// =========================================================================
// NAVIGASI TAB & SEARCH
// =========================================================================

function switchTab(tabCategory) {
  state.activeCategory = tabCategory;

  // Update styling tombol tab
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const jurnalSection = document.getElementById('jurnalSection');
  const pelanggaranSection = document.getElementById('pelanggaranSection');

  if (tabCategory === 'Jurnal_Guru') {
    jurnalSection.classList.remove('hidden');
    pelanggaranSection.classList.add('hidden');
  } else if (tabCategory === 'Catatan_Pelanggaran') {
    pelanggaranSection.classList.remove('hidden');
    jurnalSection.classList.add('hidden');
  } else {
    jurnalSection.classList.add('hidden');
    pelanggaranSection.classList.add('hidden');
  }

  renderLinks();
}

function handleSearch(val) {
  state.searchQuery = val;
  renderLinks();
}

function handleAnchorLink(targetId) {
  if (targetId === '#jurnalSection') {
    switchTab('Jurnal_Guru');
  } else if (targetId === '#pelanggaranSection') {
    switchTab('Catatan_Pelanggaran');
  }
}

// =========================================================================
// MODAL MANAGEMENT
// =========================================================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    lucide.createIcons();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

function openLoginModal() {
  openModal('loginModal');
  setTimeout(() => document.getElementById('loginUsername')?.focus(), 100);
}

function openSettingsModal() {
  document.getElementById('gasUrlInput').value = state.gasUrl;
  openModal('settingsModal');
}

function openGuideModal() {
  closeModal('settingsModal');
  openModal('guideModal');
}

function openAddLinkModal() {
  if (!state.currentUser) {
    Swal.fire({
      icon: 'info',
      title: 'Login Diperlukan',
      text: 'Silakan login terlebih dahulu untuk menambah tautan baru.',
      confirmButtonColor: '#059669'
    }).then(() => openLoginModal());
    return;
  }

  document.getElementById('linkModalTitle').textContent = 'Tambah Tautan Menu Baru';
  document.getElementById('linkId').value = '';
  document.getElementById('linkForm').reset();
  
  if (state.activeCategory !== 'semua' && state.activeCategory !== 'Lainnya') {
    document.getElementById('linkCategory').value = state.activeCategory;
  }

  openModal('linkModal');
}

function openEditLinkModal(id) {
  const item = state.links.find(l => l.ID === id);
  if (!item) return;

  document.getElementById('linkModalTitle').textContent = 'Edit Tautan Menu';
  document.getElementById('linkId').value = item.ID;
  document.getElementById('linkCategory').value = item.Kategori;
  document.getElementById('linkTitle').value = item.Judul;
  document.getElementById('linkDescription').value = item.Deskripsi || '';
  document.getElementById('linkUrl').value = item.URL;
  document.getElementById('linkIcon').value = item.Icon || 'link-2';
  document.getElementById('linkBadge').value = item.Badge || '';

  openModal('linkModal');
}

function openInputJurnalModal() {
  const today = new Date().toISOString().slice(0, 10);
  document.getElementById('jurnalTanggal').value = today;
  if (state.currentUser) {
    document.getElementById('jurnalNamaGuru').value = state.currentUser.nama || '';
  }
  openModal('jurnalModal');
}

function openInputPelanggaranModal() {
  const today = new Date().toISOString().slice(0, 10);
  document.getElementById('plgTanggal').value = today;
  if (state.currentUser) {
    document.getElementById('plgGuruPencatat').value = state.currentUser.nama || '';
  }
  openModal('pelanggaranModal');
}

// =========================================================================
// CRUD LINK & SUBMIT HANDLERS
// =========================================================================

// Simpan / Update Link
async function handleSaveLink(e) {
  e.preventDefault();
  const id = document.getElementById('linkId').value;
  const kategori = document.getElementById('linkCategory').value;
  const judul = document.getElementById('linkTitle').value.trim();
  const deskripsi = document.getElementById('linkDescription').value.trim();
  const url = document.getElementById('linkUrl').value.trim();
  const icon = document.getElementById('linkIcon').value;
  const badge = document.getElementById('linkBadge').value.trim();

  const isEdit = Boolean(id);
  const linkItem = {
    ID: isEdit ? id : 'link-' + Date.now(),
    Kategori: kategori,
    Judul: judul,
    Deskripsi: deskripsi,
    URL: url,
    Icon: icon,
    Badge: badge,
    Urutan: state.links.length + 1,
    Target: url.startsWith('#') ? '_self' : '_blank'
  };

  if (isEdit) {
    const idx = state.links.findIndex(l => l.ID === id);
    if (idx !== -1) state.links[idx] = { ...state.links[idx], ...linkItem };
  } else {
    state.links.unshift(linkItem);
  }

  saveLocalLinks();
  renderAll();
  closeModal('linkModal');

  Swal.fire({
    icon: 'success',
    title: isEdit ? 'Tautan Diperbarui!' : 'Tautan Ditambahkan!',
    text: `Tautan "${judul}" berhasil disimpan.`,
    timer: 1800,
    showConfirmButton: false
  });

  // Kirim ke Google Apps Script jika URL ada
  if (state.gasUrl) {
    try {
      await fetch(state.gasUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: isEdit ? 'updateLink' : 'addLink',
          link: linkItem
        })
      });
    } catch (err) {
      console.warn('Gagal sinkronisasi ke Google Apps Script:', err);
    }
  }
}

// Hapus Link
async function handleDeleteLink(id) {
  const item = state.links.find(l => l.ID === id);
  if (!item) return;

  const result = await Swal.fire({
    title: 'Hapus Tautan?',
    text: `Apakah Anda yakin ingin menghapus "${item.Judul}"?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#e11d48',
    cancelButtonColor: '#64748b',
    confirmButtonText: 'Ya, Hapus',
    cancelButtonText: 'Batal'
  });

  if (result.isConfirmed) {
    state.links = state.links.filter(l => l.ID !== id);
    saveLocalLinks();
    renderAll();

    Swal.fire({
      icon: 'success',
      title: 'Dihapus!',
      text: 'Tautan telah dihapus.',
      timer: 1500,
      showConfirmButton: false
    });

    if (state.gasUrl) {
      try {
        await fetch(state.gasUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'deleteLink', id: id })
        });
      } catch (err) {
        console.warn('Gagal kirim delete ke GAS:', err);
      }
    }
  }
}

// Simpan Jurnal Guru
async function handleSaveJurnal(e) {
  e.preventDefault();
  const jurnalItem = {
    ID: 'JRN-' + Date.now(),
    Tanggal: document.getElementById('jurnalTanggal').value,
    JamKe: document.getElementById('jurnalJamKe').value,
    NamaGuru: document.getElementById('jurnalNamaGuru').value,
    MataPelajaran: document.getElementById('jurnalMapel').value,
    Kelas: document.getElementById('jurnalKelas').value,
    MateriPembelajaran: document.getElementById('jurnalMateri').value,
    SiswaHadir: document.getElementById('jurnalHadir').value,
    SiswaTidakHadir: document.getElementById('jurnalTidakHadir').value,
    CatatanKBM: document.getElementById('jurnalCatatan').value
  };

  state.jurnal.unshift(jurnalItem);
  saveLocalJurnal();
  renderAll();
  closeModal('jurnalModal');

  Swal.fire({
    icon: 'success',
    title: 'Jurnal Tersimpan!',
    text: 'Catatan KBM harian berhasil didokumentasikan.',
    confirmButtonColor: '#0d9488'
  });

  if (state.gasUrl) {
    try {
      await fetch(state.gasUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'addJurnal', jurnal: jurnalItem })
      });
    } catch (err) {
      console.warn('Gagal kirim jurnal ke GAS:', err);
    }
  }
}

// Simpan Catatan Pelanggaran Siswa
async function handleSavePelanggaran(e) {
  e.preventDefault();
  const pelanggaranItem = {
    ID: 'PLG-' + Date.now(),
    Tanggal: document.getElementById('plgTanggal').value,
    Poin: document.getElementById('plgPoin').value,
    NamaSiswa: document.getElementById('plgNamaSiswa').value,
    Kelas: document.getElementById('plgKelas').value,
    NISN: document.getElementById('plgNISN').value,
    BentukPelanggaran: document.getElementById('plgBentuk').value,
    TindakLanjut: document.getElementById('plgTindakLanjut').value,
    GuruPencatat: document.getElementById('plgGuruPencatat').value
  };

  state.pelanggaran.unshift(pelanggaranItem);
  saveLocalPelanggaran();
  renderAll();
  closeModal('pelanggaranModal');

  Swal.fire({
    icon: 'success',
    title: 'Pelanggaran Dicatat!',
    text: 'Data telah disimpan ke buku kendali ketertiban.',
    confirmButtonColor: '#e11d48'
  });

  if (state.gasUrl) {
    try {
      await fetch(state.gasUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'addPelanggaran', pelanggaran: pelanggaranItem })
      });
    } catch (err) {
      console.warn('Gagal kirim catatan pelanggaran ke GAS:', err);
    }
  }
}

// =========================================================================
// AUTENTIKASI LOGIN / LOGOUT
// =========================================================================

async function handleLoginSubmit(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const btnSubmit = document.getElementById('btnLoginSubmit');

  btnSubmit.disabled = true;
  btnSubmit.textContent = 'Memverifikasi...';

  // Akun Bawaan Offline SMAN 1 Lampasio
  const defaultAccounts = {
    admin: { pass: 'admin123', nama: 'Administrator SMAN 1 Lampasio', role: 'admin' },
    guru: { pass: 'guru123', nama: 'Dewan Guru SMAN 1 Lampasio', role: 'guru' },
    bk: { pass: 'bk123', nama: 'Bimbingan Konseling (BK)', role: 'bk' },
    perpus: { pass: 'perpus123', nama: 'Pengelola Perpustakaan', role: 'perpus' }
  };

  const localMatch = defaultAccounts[username.toLowerCase()];

  if (localMatch && localMatch.pass === password) {
    state.currentUser = {
      username: username,
      nama: localMatch.nama,
      role: localMatch.role
    };
    finishLogin();
    return;
  }

  // Jika ada URL Google Apps Script, coba login online
  if (state.gasUrl) {
    try {
      const resp = await fetch(`${state.gasUrl}?action=getUsers`);
      // Fallback pesan error jika tidak cocok
    } catch (err) {
      console.warn('Error saat login GAS:', err);
    }
  }

  btnSubmit.disabled = false;
  btnSubmit.textContent = 'Masuk ke Dashboard';
  Swal.fire({
    icon: 'error',
    title: 'Login Gagal',
    text: 'Username atau password salah. Coba: admin / admin123',
    confirmButtonColor: '#059669'
  });
}

function finishLogin() {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(state.currentUser));
  checkUserSession();
  closeModal('loginModal');
  renderAll();

  Swal.fire({
    icon: 'success',
    title: 'Selamat Datang!',
    text: `Masuk sebagai ${state.currentUser.nama}`,
    timer: 1500,
    showConfirmButton: false
  });
}

function handleLogout() {
  Swal.fire({
    title: 'Keluar Dashboard?',
    text: 'Anda akan keluar dari sesi administrator.',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#059669',
    cancelButtonColor: '#64748b',
    confirmButtonText: 'Ya, Keluar',
    cancelButtonText: 'Batal'
  }).then(res => {
    if (res.isConfirmed) {
      state.currentUser = null;
      localStorage.removeItem(STORAGE_KEYS.USER);
      checkUserSession();
      renderAll();
      Swal.fire({
        icon: 'info',
        title: 'Sampai Jumpa!',
        text: 'Anda telah berhasil keluar.',
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
}

// =========================================================================
// GOOGLE APPS SCRIPT SINKRONISASI
// =========================================================================

function saveGasSettings() {
  const url = document.getElementById('gasUrlInput').value.trim();
  state.gasUrl = url;
  localStorage.setItem(STORAGE_KEYS.GAS_URL, url);
  updateConnectionStatusUI();
  closeModal('settingsModal');

  Swal.fire({
    icon: 'success',
    title: 'URL Disimpan!',
    text: url ? 'URL Google Apps Script berhasil diperbarui.' : 'Menggunakan mode penyimpanan lokal.',
    confirmButtonColor: '#059669'
  });

  if (url) {
    syncFromGas(false);
  }
}

async function testGasConnection() {
  const url = document.getElementById('gasUrlInput').value.trim();
  const btn = document.getElementById('btnTestConn');

  if (!url) {
    Swal.fire({
      icon: 'warning',
      title: 'URL Kosong',
      text: 'Harap masukkan URL Google Apps Script terlebih dahulu.',
      confirmButtonColor: '#f59e0b'
    });
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Menghubungkan...';

  try {
    const res = await fetch(`${url}?action=ping`);
    const json = await res.json();
    btn.disabled = false;
    btn.textContent = 'Tes Koneksi';

    if (json.status === 'success') {
      Swal.fire({
        icon: 'success',
        title: 'Koneksi Berhasil!',
        text: json.message || 'Google Spreadsheet terhubung dengan baik!',
        confirmButtonColor: '#059669'
      });
    } else {
      throw new Error(json.message);
    }
  } catch (err) {
    btn.disabled = false;
    btn.textContent = 'Tes Koneksi';
    Swal.fire({
      icon: 'info',
      title: 'Info Koneksi',
      html: `Permintaan terkirim. Pastikan deployment Google Apps Script diatur dengan akses: <b>"Siapa saja (Anyone)"</b> agar tidak diblokir oleh Google.<br><br><span class="text-xs text-slate-500 font-mono">${err.message}</span>`,
      confirmButtonColor: '#059669'
    });
  }
}

async function syncFromGas(silent = false) {
  if (!state.gasUrl) return;

  try {
    const res = await fetch(`${state.gasUrl}?action=getAll`);
    const json = await res.json();

    if (json.status === 'success') {
      if (json.links && json.links.length > 0) {
        state.links = json.links;
        saveLocalLinks();
      }
      if (json.jurnal && json.jurnal.length > 0) {
        state.jurnal = json.jurnal;
        saveLocalJurnal();
      }
      if (json.pelanggaran && json.pelanggaran.length > 0) {
        state.pelanggaran = json.pelanggaran;
        saveLocalPelanggaran();
      }
      renderAll();

      if (!silent) {
        Swal.fire({
          icon: 'success',
          title: 'Sinkronisasi Selesai',
          text: 'Data terbaru dari Google Sheets berhasil dimuat.',
          timer: 1500,
          showConfirmButton: false
        });
      }
    }
  } catch (err) {
    if (!silent) {
      console.warn('Gagal memuat data dari GAS:', err);
    }
  }
}

function resetDefaultData() {
  Swal.fire({
    title: 'Reset ke Data Bawaan?',
    text: 'Semua link lokal akan dikembalikan ke data awal SMA Negeri 1 Lampasio.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#e11d48',
    confirmButtonText: 'Ya, Reset',
    cancelButtonText: 'Batal'
  }).then(res => {
    if (res.isConfirmed) {
      state.links = [...DEFAULT_LINKS];
      state.jurnal = [...DEFAULT_JURNAL];
      state.pelanggaran = [...DEFAULT_PELANGGARAN];
      saveLocalLinks();
      saveLocalJurnal();
      saveLocalPelanggaran();
      renderAll();
      closeModal('settingsModal');
      Swal.fire({
        icon: 'success',
        title: 'Berhasil Direset',
        text: 'Data telah dikembalikan ke kondisi awal.',
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
}

// =========================================================================
// UTILITAS
// =========================================================================

function formatCategoryLabel(cat) {
  const map = {
    Perpustakaan: 'Perpustakaan',
    Pembelajaran: 'Pembelajaran',
    Data_Guru_Staf_Siswa: 'Guru, Staf & Siswa',
    Jurnal_Guru: 'Jurnal Guru',
    Catatan_Pelanggaran: 'Pelanggaran Siswa',
    Lainnya: 'Umum'
  };
  return map[cat] || cat;
}

function cleanUrlDisplay(url) {
  try {
    const parsed = new URL(url);
    return parsed.hostname;
  } catch (e) {
    return url;
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#033;');
}
