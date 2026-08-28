// ════════════════════════════════════════════════════════════
//  KENANGAN KELAS VIII — DATA TUNGGAL (SHARED)
// ════════════════════════════════════════════════════════════
//  File ini dipakai oleh DUA halaman: kenangan-kelas-viii.html
//  (desktop) dan mobile.html. Edit di sini = otomatis berubah
//  di kedua halaman. Tidak perlu edit dua kali lagi.
//
//  PANDUAN EDIT:
//  - Nama, pesan, kesan siswa  → cari STUDENTS
//  - Kegiatan/events           → cari EVENTS
//  - Quote berjalan            → cari QUOTES
//  - Timeline tahun            → cari TIMELINE
//  - Link video YouTube        → cari VIDEO_EMBED
//  - Foto diambil dari folder "foto/" di lokasi yang sama
// ════════════════════════════════════════════════════════════

const QUOTES = [
  "Masa SMP adalah masa di mana kita belajar arti persahabatan yang sesungguhnya.",
  "Bukan tentang seberapa lama kita bersama, tapi seberapa dalam kenangan yang kita ciptakan.",
  "Kelas VIII: Tempat di mana tawa paling keras dan cerita paling konyol tercipta.",
  "Kita mungkin akan berpisah jalan, tapi kenangan di kelas ini akan selalu jadi rumah.",
  "Terima kasih untuk setiap contekan PR, candaan di jam kosong, dan dukungan saat ujian.",
  "Jangan pernah lupakan masa-masa di mana masalah terbesar kita hanyalah PR Matematika.",
  "Setiap sudut sekolah ini punya cerita tentang kita.",
  "Kita masuk sebagai orang asing, dan keluar sebagai keluarga.",
  "Kenangan indah tidak akan pernah pudar, ia hanya tersimpan rapi di sudut hati.",
  "Sampai jumpa di puncak kesuksesan, teman-teman!",
];

// Foto galeri — taruh file di folder "foto/" (galeri1.jpg, galeri2.jpg, dst)
const GALLERY = Array.from({ length: 12 }, (_, i) => ({
  src: `galeri${i + 1}.jpg`,
  fb: `https://picsum.photos/seed/gallery${i + 1}/800/800`,
  fallback: `https://picsum.photos/seed/gallery${i + 1}/800/800`, // alias utk file desktop lama
  cap: `Kenangan ${i + 1}`,
  caption: `Kenangan ${i + 1}`, // alias utk file desktop lama
}));

const EVENTS = [
  {
    title: "Muncak ke keteri",
    date: "13 Mar 2026",
    desc: "Keseruan mendaki bukit bersama teachers.",
    src: "event1.jpg",
    fb: "https://picsum.photos/seed/event1/600/400",
    fallback: "https://picsum.photos/seed/event1/600/400",
  },
  {
    title: "Class Meeting",
    date: "10 Des 2024",
    desc: "Juara 1 lomba tarik tambang antar kelas! Kekompakan Kelas VIII memang tiada duanya.",
    src: "event2.jpg",
    fb: "https://picsum.photos/seed/event2/600/400",
    fallback: "https://picsum.photos/seed/event2/600/400",
  },
  {
    title: "Hari Guru Nasional",
    date: "25 Nov 2024",
    desc: "Memberikan kejutan kecil untuk wali kelas tercinta. Penuh haru dan tawa.",
    src: "event3.jpg",
    fb: "https://picsum.photos/seed/event3/600/400",
    fallback: "https://picsum.photos/seed/event3/600/400",
  },
  {
    title: "Lomba 17 Agustus",
    date: "17 Ags 2024",
    desc: "Keseruan lomba balap karung dan makan kerupuk di lapangan sekolah.",
    src: "event4.jpg",
    fb: "https://picsum.photos/seed/event4/600/400",
    fallback: "https://picsum.photos/seed/event4/600/400",
  },
  {
    title: "Pentas Seni",
    date: "20 Feb 2025",
    desc: "Penampilan drama musikal dari Kelas VIII yang memukau seluruh sekolah.",
    src: "event5.jpg",
    fb: "https://picsum.photos/seed/event5/600/400",
    fallback: "https://picsum.photos/seed/event5/600/400",
  },
  {
    title: "Buka Puasa Bersama",
    date: "10 Apr 2025",
    desc: "Momen kebersamaan di bulan Ramadhan, berbagi cerita sambil menunggu waktu berbuka.",
    src: "event6.jpg",
    fb: "https://picsum.photos/seed/event6/600/400",
    fallback: "https://picsum.photos/seed/event6/600/400",
  },
  {
    title: "Kerja Bakti Kelas",
    date: "5 Mar 2026",
    desc: "Membersihkan dan menghias kelas bersama agar lebih nyaman untuk belajar.",
    src: "event7.jpg",
    fb: "https://picsum.photos/seed/event7/600/400",
    fallback: "https://picsum.photos/seed/event7/600/400",
  },
  {
    title: "Kunjungan Museum",
    date: "12 Okt 2026",
    desc: "Belajar sejarah langsung dari sumbernya. Seru dan menambah wawasan.",
    src: "event8.jpg",
    fb: "https://picsum.photos/seed/event8/600/400",
    fallback: "https://picsum.photos/seed/event8/600/400",
  },
  {
    title: "Ujian Praktek",
    date: "15 Mar 2026",
    desc: "Tegang tapi seru saat ujian praktek kesenian dan olahraga.",
    src: "event9.jpg",
    fb: "https://picsum.photos/seed/event9/600/400",
    fallback: "https://picsum.photos/seed/event9/600/400",
  },
  {
    title: "Malam Perpisahan",
    date: "20 Jun 2026",
    desc: "Malam puncak penuh air mata dan pelukan hangat sebelum melangkah ke jenjang berikutnya.",
    src: "event10.jpg",
    fb: "https://picsum.photos/seed/event10/600/400",
    fallback: "https://picsum.photos/seed/event10/600/400",
  },
];

const TIMELINE = [
  {
    year: "2024",
    title: "Awal Perjumpaan",
    desc: "Hari pertama masuk sekolah, masih malu-malu dan canggung. Masa orientasi yang penuh kejutan.",
    src: "timeline1.jpg",
    fb: "https://picsum.photos/seed/time1/400/300",
    fallback: "https://picsum.photos/seed/time1/400/300",
  },
  {
    year: "2025",
    title: "Masa Paling Seru",
    desc: "Mulai akrab satu sama lain. Banyak kegiatan seru seperti class meeting dan study tour pertama.",
    src: "timeline2.jpg",
    fb: "https://picsum.photos/seed/time2/400/300",
    fallback: "https://picsum.photos/seed/time2/400/300",
  },
  {
    year: "2026",
    title: "Persiapan Kelulusan",
    desc: "Fokus ujian, tapi tetap menyempatkan waktu untuk membuat kenangan terakhir sebelum berpisah.",
    src: "timeline3.jpg",
    fb: "https://picsum.photos/seed/time3/400/300",
    fallback: "https://picsum.photos/seed/time3/400/300",
  },
];

// Data siswa — semua siswa ditampilkan setara (rata), tidak ada yang "ditonjolkan".
const STUDENTS = [
  {
    id: 1,
    name: "Arya suganda",
    cita: "Software Engineer",
    pesan: "Jangan lupa ngerjain PR ya guys!",
    kesan: "Kelas paling berisik tapi paling ngangenin.",
    src: "siswa1.jpg",
    fb: "https://picsum.photos/seed/std1/200/200",
    fallback: "https://picsum.photos/seed/std1/200/200",
  },
  {
    id: 2,
    name: "Audy zambwalogina",
    cita: "Dokter Anak",
    pesan: "Semoga kita semua sukses di masa depan.",
    kesan: "Senang bisa kenal kalian semua, sahabat terbaik.",
    src: "siswa2.jpg",
    fb: "https://picsum.photos/seed/std2/200/200",
    fallback: "https://picsum.photos/seed/std2/200/200",
  },
  {
    id: 3,
    name: "Elsa adeylia putri",
    cita: "Dokter",
    pesan: "Kalo di sapa jangan sombong.",
    kesan: "Kelas ter asik.",
    src: "siswa3.jpg",
    fb: "https://picsum.photos/seed/std3/200/200",
    fallback: "https://picsum.photos/seed/std3/200/200",
  },
  {
    id: 4,
    name: "Faiha afriza",
    cita: "Polwan",
    pesan: "Teruslah bermimpi dan berkarya.",
    kesan: "Wali kelas kita yang paling sabar ngadepin kita.",
    src: "siswa4.jpg",
    fb: "https://picsum.photos/seed/std4/200/200",
    fallback: "https://picsum.photos/seed/std4/200/200",
  },
  {
    id: 5,
    name: "Putri Laila yumna",
    cita: "Polwan",
    pesan: "Semangat terus untuk belajar, dan jangan bolos.",
    kesan: "Seru bisa ketemu sama temen kaya kalian semua",
    src: "siswa5.jpg",
    fb: "https://picsum.photos/seed/std6/200/200",
    fallback: "https://picsum.photos/seed/std6/200/200",
  },
  {
    id: 6,
    name: "Ikrom lutfi",
    cita: "Desainer Grafis",
    pesan: "Warnai hidupmu dengan hal positif.",
    kesan: "Suka banget pas kita hias kelas bareng-bareng.",
    src: "siswa6.jpg",
    fb: "https://picsum.photos/seed/std6/200/200",
    fallback: "https://picsum.photos/seed/std6/200/200",
  },
  {
    id: 7,
    name: "M lisky anugrah ",
    cita: "Polisi",
    pesan: "Tetap disiplin dan semangat belajar.",
    kesan: "Sering dihukum bareng karena telat, haha.",
    src: "siswa7.jpg",
    fb: "https://picsum.photos/seed/std7/200/200",
    fallback: "https://picsum.photos/seed/std7/200/200",
  },
  {
    id: 8,
    name: "Nurul mujahidah fillah",
    cita: "Penyanyi",
    pesan: "Kejar mimpimu setinggi langit.",
    kesan: "Pentas seni kelas kita yang paling pecah!",
    src: "siswa8.jpg",
    fb: "https://picsum.photos/seed/std8/200/200",
    fallback: "https://picsum.photos/seed/std8/200/200",
  },
  {
    id: 9,
    name: "Samaituqi arina sofia",
    cita: "Guru",
    pesan: "Jangan menyerah walau banyak cobaan.",
    kesan: "Sering terlamabat tapi selalu masuk.",
    src: "siswa9.jpg",
    fb: "https://picsum.photos/seed/std9/200/200",
    fallback: "https://picsum.photos/seed/std9/200/200",
  },
  {
    id: 10,
    name: "M nabil ar rasyid",
    cita: "Guru",
    pesan: "Ilmu itu penting, jangan malas belajar.",
    kesan: "Sering ngajarin temen-temen pas mau ujian.",
    src: "siswa10.jpg",
    fb: "https://picsum.photos/seed/std10/200/200",
    fallback: "https://picsum.photos/seed/std10/200/200",
  },
  {
    id: 11,
    name: "Regita surya larasati",
    cita: "Dokter",
    pesan:
      "walapun waktu kalian sama aku cuma sebentar, tapi kenal sama kalian itu salah satu bagian terindah yg pernah aku temui.",
    kesan: "Sering tidur pas jam pelajaran",
    src: "siswa11.jpg",
    fb: "https://picsum.photos/seed/std11/200/200",
    fallback: "https://picsum.photos/seed/std11/200/200",
  },
  {
    id: 12,
    name: "Naswa Hasma Halwa",
    cita: "Polwan",
    pesan:
      "jika waktu bisa diputar kembali,salah satu yang ingin ku putar kembali adalah kembali ke era bersama kalian,jujur aku kangen bangett sama kalian.",
    kesan: "Sering jahilin temen di kelas",
    src: "siswa12.jpg",
    fb: "https://picsum.photos/seed/std11/200/200",
    fallback: "https://picsum.photos/seed/std11/200/200",
  },
];

// Link video YouTube
const VIDEO_EMBED =
  "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&rel=0";
