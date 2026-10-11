export type Project = {
  slug: string;
  name: string;
  headline: string;
  industry: string;
  services: readonly string[];
  theme: string;
  narrative: string;
  scope: string;
  challenge: string;
  solution: string;
  features: readonly string[];
};

export type PricingPackage = {
  name: string;
  price: number | null;
  audience: string;
  features: readonly string[];
};

export function whatsappUrl(message: string = site.whatsappMessage) {
  const url = new URL(site.whatsappUrl);
  url.searchParams.set("text", message);
  return url.toString();
}

export const site = {
  companyName: "TemuWeb",
  legalName: "TemuWeb Studio Digital",
  positioning: "Studio Produk Digital Indonesia",
  email: "hello@temuweb.id",
  whatsapp: "+62 812-0000-0000",
  whatsappUrl: "https://wa.me/6281200000000",
  whatsappIsDemo: true,
  whatsappMessage: "Halo TemuWeb, saya ingin konsultasi tentang website atau sistem digital.",
  phone: "+62 812-0000-0000",
  address: "Surabaya, Jawa Timur, Indonesia",
  location: "Surabaya, Indonesia",
  origin: "https://temuweb.id",
  navigation: [
    { label: "Portofolio", href: "/portofolio" },
    { label: "Artikel", href: "/artikel" },
    { label: "Layanan", href: "/#services" },
    { label: "Harga", href: "/#pricing" },
    { label: "Proses", href: "/#process" },
  ],
  trust: ["Dibangun sesuai kebutuhan", "Tampilan responsif", "Dukungan setelah rilis"],
  problems: [
    "Website bisnis belum terlihat profesional?",
    "Pesanan masih dicatat lewat chat dan spreadsheet?",
    "Data bisnis tersebar di banyak tempat?",
    "Pekerjaan berulang masih dilakukan manual?",
    "Punya ide aplikasi, tetapi bingung mulai dari mana?",
  ],
  pricing: [
    {
      name: "Website Profil Perusahaan",
      price: 1000000,
      audience: "Untuk UMKM dan bisnis yang ingin tampil profesional",
      features: [
        "Hingga 3 laman website",
        "Domain .com gratis selama 1 tahun",
        "Hosting 1 GB dan SSL gratis selama 1 tahun",
        "Desain responsif untuk desktop dan mobile",
        "Terintegrasi dengan WhatsApp",
        "Google Maps untuk lokasi kantor",
        "1 banner website",
      ],
    },
    {
      name: "Website Bisnis",
      price: 2000000,
      audience: "Untuk bisnis berkembang dengan kebutuhan konten lebih luas",
      features: [
        "Semua fitur paket Website Profil Perusahaan",
        "Hingga 7 laman website",
        "Dashboard untuk mengelola konten website",
        "Video tutorial edit website",
        "3 email dengan domain bisnis selama 1 tahun",
        "Fitur berlangganan newsletter",
        "Halaman blog atau artikel untuk SEO",
        "3 artikel SEO",
      ],
    },
    {
      name: "Toko Online",
      price: 4000000,
      audience: "Untuk bisnis yang ingin mulai menjual produk secara online",
      features: [
        "Semua fitur paket Website Bisnis",
        "Katalog produk, keranjang, dan alur pemesanan",
        "Bantuan upload hingga 10 produk pertama",
        "Dashboard untuk kelola produk dan pesanan",
        "Maintenance teknis gratis selama 1 tahun",
      ],
    },
    {
      name: "Aplikasi Web Khusus",
      price: null,
      audience: "Untuk alur kerja yang membutuhkan sistem khusus",
      features: [
        "Fitur disusun sesuai kebutuhan bisnis",
        "Pilihan dashboard dan sistem internal",
        "Integrasi API sesuai ruang lingkup proyek",
        "Estimasi biaya setelah konsultasi kebutuhan",
      ],
    },
  ] satisfies PricingPackage[],
  services: [
    { name: "Pembuatan Website", description: "Kami membuat website profil perusahaan, halaman promosi, dan platform web yang cepat, mudah diakses, ramah mesin pencari, dan nyaman dipakai." },
    { name: "Aplikasi Web Khusus", description: "Dasbor, keanggotaan, pemesanan, LMS, stok barang, CRM, dan sistem internal yang mengikuti alur bisnis Anda." },
    { name: "Desain UI/UX & Produk", description: "Kami meriset kebutuhan, menyusun alur, membuat sketsa dan prototipe, lalu merancang tampilan yang mudah dipahami dan dipakai." },
    { name: "Pembuatan Toko Online", description: "Toko online yang menghubungkan katalog, pembayaran, stok, dan operasional agar pengalaman belanja terasa mudah." },
    { name: "Integrasi API & Sistem", description: "Kami menghubungkan layanan pembayaran, ERP, CRM, WhatsApp, dan layanan lain dengan API yang aman dan siap berkembang." },
    { name: "AI & Otomatisasi", description: "Pemanfaatan AI dan otomatisasi untuk pencarian, chatbot, pengolahan dokumen, dan alur kerja yang benar-benar membantu bisnis." },
  ],
  projects: [
    { slug: "santara-commerce", name: "Santara Commerce", headline: "Platform belanja yang siap tumbuh bersama jaringan ritel", services: ["Pembuatan Web", "Toko Online", "UI/UX", "Integrasi API"], industry: "Ritel", theme: "santara", narrative: "Satu pengalaman belanja yang menyatukan katalog, promosi, dan pesanan di seluruh kanal ritel.", scope: "Pengalaman belanja, desain toko online, susunan produk, dan operasional yang saling terhubung.", challenge: "Saat katalog, promosi, dan pesanan terpisah, pelanggan sulit menemukan produk dan tim harus mengecek banyak tempat.", solution: "Konsep ini menyatukan pencarian produk dan alur belanja dalam satu toko online, dengan pengelolaan pesanan yang lebih terarah.", features: ["Katalog dengan kategori dan pencarian", "Keranjang dan ringkasan pesanan", "Pilihan pengiriman dalam alur belanja", "Pengelolaan produk dan pesanan"] },
    { slug: "arunika-finance", name: "Arunika Finance", headline: "Operasional keuangan yang rumit jadi lebih mudah dipahami", services: ["Desain Produk", "Aplikasi Web", "Dasbor", "Pengembangan"], industry: "Fintech", theme: "arunika", narrative: "Ruang kerja finansial yang menyederhanakan informasi kompleks menjadi keputusan yang lebih jelas.", scope: "Susunan informasi, sistem dasbor, dan antarmuka produk finansial.", challenge: "Data keuangan yang tersebar membuat tim sulit melihat kondisi bisnis dan menelusuri transaksi.", solution: "Konsep ini menempatkan ringkasan keuangan, transaksi, dan laporan dalam ruang kerja yang mudah dibaca.", features: ["Ringkasan pemasukan dan pengeluaran", "Daftar transaksi dengan filter", "Laporan sesuai periode", "Hak akses sesuai peran tim"] },
    { slug: "logistikku", name: "LogistikKu", headline: "Satu platform untuk menghubungkan operasional logistik", services: ["Aplikasi Web", "Integrasi API", "Dasbor", "Pengembangan"], industry: "Logistik", theme: "logistik", narrative: "Visibilitas pengiriman dan operasional dalam satu sistem yang mudah dibaca oleh seluruh tim.", scope: "Platform operasional, pelacakan pengiriman, dan alur kerja yang saling terhubung.", challenge: "Informasi pengiriman yang berpindah lewat chat dan catatan manual sulit dipantau saat jumlah pesanan bertambah.", solution: "Konsep ini menghubungkan pencatatan pengiriman, pembaruan status, dan pemantauan operasional di satu platform.", features: ["Daftar dan pencarian pengiriman", "Riwayat status setiap pengiriman", "Ringkasan aktivitas operasional", "Pengelolaan pengguna dan peran"] },
    { slug: "eduspace", name: "EduSpace", headline: "Pengalaman belajar digital yang lebih mudah diakses", services: ["UI/UX", "LMS", "Pembuatan Web"], industry: "Pendidikan", theme: "eduspace", narrative: "Kelas digital yang memberi ruang bagi pelajar dan pengajar untuk berinteraksi tanpa hambatan.", scope: "Alur belajar, tampilan yang mudah diakses, dan penyajian materi.", challenge: "Materi, jadwal, dan tugas yang tersebar di banyak kanal membuat pelajar maupun pengajar sulit mengikuti perkembangan kelas.", solution: "Konsep ini menyusun perjalanan belajar dari memilih kelas sampai mengakses materi dan memantau kemajuan.", features: ["Katalog dan pendaftaran kelas", "Materi yang tersusun per modul", "Tugas dan progres belajar", "Ruang pengelolaan kelas untuk pengajar"] },
    { slug: "medikaplus", name: "MedikaPlus", headline: "Ekosistem digital untuk layanan kesehatan masa kini", services: ["Desain Produk", "Aplikasi Web", "Integrasi Sistem"], industry: "Kesehatan", theme: "medika", narrative: "Alur layanan yang lebih tenang dan terhubung bagi pasien, tenaga kesehatan, dan pengelola klinik.", scope: "Pengalaman pasien, penjadwalan, dan antarmuka operasional klinik.", challenge: "Jadwal layanan dan antrean yang dikelola terpisah membuat pasien serta tim klinik sulit mendapat informasi yang jelas.", solution: "Konsep ini menyatukan informasi layanan, pemesanan jadwal, dan pengelolaan antrean dengan alur yang sederhana.", features: ["Informasi layanan dan tenaga kesehatan", "Pemesanan jadwal konsultasi", "Pengelolaan antrean klinik", "Akses operasional sesuai peran"] },
    { slug: "agrilink", name: "AgriLink", headline: "Menghubungkan petani, distributor, dan pasar lewat satu platform", services: ["Strategi Produk", "Aplikasi Web", "Aplikasi Mobile", "Pengembangan"], industry: "Pertanian", theme: "agri", narrative: "Jembatan digital antara hasil panen, distribusi, dan permintaan pasar.", scope: "Strategi pasar digital, alur stok, dan operasional yang mengutamakan perangkat mobile.", challenge: "Informasi hasil panen, stok, dan kebutuhan pembeli sering tidak tersambung, sehingga proses distribusi perlu banyak koordinasi manual.", solution: "Konsep ini mempertemukan penawaran hasil panen dengan kebutuhan pasar lewat alur yang nyaman digunakan dari ponsel.", features: ["Katalog hasil panen", "Informasi stok dan ketersediaan", "Pencatatan permintaan pembeli", "Pemantauan alur distribusi"] },
  ] satisfies Project[],
  capabilities: [
    { name: "Memahami Produk", description: "Kami memahami masalah bisnis Anda sebelum mulai menulis kode." },
    { name: "Desain & Pengalaman", description: "Setiap tampilan dibuat agar jelas, intuitif, dan mudah digunakan." },
    { name: "Pengembangan", description: "Kami menulis kode yang rapi dengan teknologi modern agar produk mudah dirawat." },
    { name: "Sistem Siap Berkembang", description: "Sistem dirancang agar bisa tumbuh bersama bisnis Anda." },
    { name: "Jaminan Kualitas", description: "Kami menguji dan meninjau produk sebelum setiap rilis." },
    { name: "Dukungan Berkelanjutan", description: "Kami tetap mendampingi Anda setelah produk diluncurkan." },
  ],
  technologies: ["Laravel", "PHP", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MySQL", "Redis", "Docker", "AWS", "Cloudflare", "Python", "FastAPI", "OpenAI API"],
  process: [
    { name: "Konsultasi", description: "Ceritakan kebutuhan, masalah, atau ide bisnis Anda." },
    { name: "Proposal", description: "Kami susun solusi, ruang lingkup, jadwal, dan estimasi biaya." },
    { name: "Desain", description: "Alur pengguna dan tampilan dirancang sebelum pengembangan." },
    { name: "Pengembangan", description: "Kami membangun aplikasi, basis data, dan integrasinya." },
    { name: "Pengujian", description: "Produk diuji sebelum digunakan." },
    { name: "Peluncuran", description: "Kami siapkan produk agar siap diakses pengguna." },
    { name: "Dukungan", description: "Kami bantu merawat dan mengembangkan produk setelah rilis." },
  ],
  industries: ["Ritel & Toko Online", "Teknologi Finansial", "Pendidikan", "Kesehatan", "Perhotelan", "Logistik", "Properti", "Manufaktur", "Jasa Profesional", "Startup"],
  faq: [
    { question: "Berapa biaya pembuatan website?", answer: "Biayanya tergantung jumlah halaman, desain, fitur, dan integrasi yang Anda butuhkan. Setelah memahami kebutuhan Anda, kami akan menjelaskan cakupan, jadwal, dan perkiraan biaya dengan terbuka." },
    { question: "Berapa lama proses pengerjaannya?", answer: "Website profil perusahaan sederhana biasanya selesai dalam beberapa minggu. Aplikasi web khusus butuh waktu lebih lama, tergantung kerumitan sistemnya." },
    { question: "Bisakah saya mengelola website sendiri?", answer: "Bisa, jika fitur pengelolaan konten masuk dalam ruang lingkup proyek. Kami akan membahas kebutuhannya sejak awal." },
    { question: "Apakah kode sumber menjadi milik klien?", answer: "Hak atas kode sumber dan penyerahannya akan dijelaskan dalam proposal atau kontrak sebelum pekerjaan dimulai." },
    { question: "Apakah domain, hosting, dan SSL sudah termasuk?", answer: "Termasuk selama 1 tahun pada paket Website Profil Perusahaan, Website Bisnis, dan Toko Online. Paket tersebut mencakup domain .com, hosting dengan penyimpanan 1 GB, dan SSL. Biaya perpanjangan setelah tahun pertama tidak termasuk harga awal." },
    { question: "Bisa membuat sistem sesuai kebutuhan kami?", answer: "Bisa. Kami membuat sistem sesuai alur bisnis, seperti dasbor internal, stok barang, CRM, keanggotaan, pemesanan, LMS, dan ERP sederhana." },
    { question: "Bisa melanjutkan proyek yang sudah ada?", answer: "Bisa. Kami akan memeriksa kode, infrastruktur, dan kondisi aplikasi terlebih dahulu agar tahu bagian yang perlu dilanjutkan." },
    { question: "Apakah TemuWeb menyediakan perawatan setelah rilis?", answer: "Paket Toko Online mencakup maintenance teknis gratis selama 1 tahun untuk perbaikan bug dan pembaruan keamanan. Fitur baru, desain ulang, dan pembaruan konten dibahas terpisah. Paket lain dapat menyertakan maintenance sesuai penawaran." },
    { question: "Teknologi apa yang digunakan?", answer: "Kami memilih teknologi sesuai kebutuhan proyek. Yang sering kami pakai antara lain Laravel, React, Next.js, TypeScript, Node.js, PostgreSQL, MySQL, Redis, dan layanan cloud." },
    { question: "Bisa bekerja dengan klien di luar kota?", answer: "Bisa. Kami bekerja jarak jauh dengan klien dari berbagai kota di Indonesia maupun luar negeri." },
    { question: "Bagaimana sistem pembayarannya?", answer: "Jadwal dan tahapan pembayaran disepakati dalam proposal sebelum proyek dimulai." },
  ],
} as const;
