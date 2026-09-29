export type Project = {
  slug: string;
  name: string;
  headline: string;
  industry: string;
  services: readonly string[];
  theme: string;
  narrative: string;
  scope: string;
};

export const site = {
  companyName: "TemuWeb",
  legalName: "TemuWeb Studio Digital",
  positioning: "Studio Produk Digital Indonesia",
  email: "hello@temuweb.id",
  whatsapp: "+62 812-0000-0000",
  whatsappUrl: "https://wa.me/6281200000000",
  phone: "+62 812-0000-0000",
  address: "Surabaya, Jawa Timur, Indonesia",
  location: "Surabaya, Indonesia",
  origin: "https://temuweb.id",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "GitHub", href: "https://github.com/" },
  ],
  navigation: [
    { label: "Portofolio", href: "#work" },
    { label: "Layanan", href: "#services" },
    { label: "Tentang", href: "#company" },
    { label: "Artikel", href: "#insights" },
  ],
  services: [
    { name: "Pembuatan Website", description: "Kami membuat website profil perusahaan, halaman promosi, dan platform web yang cepat, mudah diakses, ramah mesin pencari, dan nyaman dipakai." },
    { name: "Aplikasi Web Khusus", description: "Sistem web sesuai alur bisnis Anda, mulai dari dasbor internal dan sistem operasional hingga ERP sederhana atau produk SaaS." },
    { name: "Desain UI/UX & Produk", description: "Kami meriset kebutuhan, menyusun alur, membuat sketsa dan prototipe, lalu merancang tampilan yang mudah dipahami dan dipakai." },
    { name: "Pembuatan Toko Online", description: "Toko online yang menghubungkan katalog, pembayaran, stok, dan operasional agar pengalaman belanja terasa mudah." },
    { name: "Integrasi API & Sistem", description: "Kami menghubungkan layanan pembayaran, ERP, CRM, WhatsApp, dan layanan lain dengan API yang aman dan siap berkembang." },
    { name: "AI & Otomatisasi", description: "Pemanfaatan AI dan otomatisasi untuk pencarian, chatbot, pengolahan dokumen, dan alur kerja yang benar-benar membantu bisnis." },
  ],
  clients: ["Arunika", "Nusantara Retail", "Karya Finance", "Santara Group", "Kopi Raya", "LogistikKu", "EduSpace", "PropertiHub", "MedikaPlus", "AgriLink", "Ventura Labs", "UrbanMart"],
  statistics: [
    { value: "06", label: "Kapabilitas utama" },
    { value: "07", label: "Tahap dari ide hingga rilis" },
    { value: "01", label: "Rekan dari awal hingga berkembang" },
  ],
  projects: [
    { slug: "santara-commerce", name: "Santara Commerce", headline: "Platform belanja yang siap tumbuh bersama jaringan ritel", services: ["Pembuatan Web", "Toko Online", "UI/UX", "Integrasi API"], industry: "Ritel", theme: "santara", narrative: "Satu pengalaman belanja yang menyatukan katalog, promosi, dan pesanan di seluruh kanal ritel.", scope: "Pengalaman belanja, desain toko online, susunan produk, dan operasional yang saling terhubung." },
    { slug: "arunika-finance", name: "Arunika Finance", headline: "Operasional keuangan yang rumit jadi lebih mudah dipahami", services: ["Desain Produk", "Aplikasi Web", "Dasbor", "Pengembangan"], industry: "Fintech", theme: "arunika", narrative: "Ruang kerja finansial yang menyederhanakan informasi kompleks menjadi keputusan yang lebih jelas.", scope: "Susunan informasi, sistem dasbor, dan antarmuka produk finansial." },
    { slug: "logistikku", name: "LogistikKu", headline: "Satu platform untuk menghubungkan operasional logistik", services: ["Aplikasi Web", "Integrasi API", "Dasbor", "Pengembangan"], industry: "Logistik", theme: "logistik", narrative: "Visibilitas pengiriman dan operasional dalam satu sistem yang mudah dibaca oleh seluruh tim.", scope: "Platform operasional, pelacakan pengiriman, dan alur kerja yang saling terhubung." },
    { slug: "eduspace", name: "EduSpace", headline: "Pengalaman belajar digital yang lebih mudah diakses", services: ["UI/UX", "LMS", "Pembuatan Web"], industry: "Pendidikan", theme: "eduspace", narrative: "Kelas digital yang memberi ruang bagi pelajar dan pengajar untuk berinteraksi tanpa hambatan.", scope: "Alur belajar, tampilan yang mudah diakses, dan penyajian materi." },
    { slug: "medikaplus", name: "MedikaPlus", headline: "Ekosistem digital untuk layanan kesehatan masa kini", services: ["Desain Produk", "Aplikasi Web", "Integrasi Sistem"], industry: "Kesehatan", theme: "medika", narrative: "Alur layanan yang lebih tenang dan terhubung bagi pasien, tenaga kesehatan, dan pengelola klinik.", scope: "Pengalaman pasien, penjadwalan, dan antarmuka operasional klinik." },
    { slug: "agrilink", name: "AgriLink", headline: "Menghubungkan petani, distributor, dan pasar lewat satu platform", services: ["Strategi Produk", "Aplikasi Web", "Aplikasi Mobile", "Pengembangan"], industry: "Pertanian", theme: "agri", narrative: "Jembatan digital antara hasil panen, distribusi, dan permintaan pasar.", scope: "Strategi pasar digital, alur stok, dan operasional yang mengutamakan perangkat mobile." },
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
    { name: "Pahami", description: "Kami mengenal bisnis, pengguna, kebutuhan, dan batasan proyek Anda." },
    { name: "Tentukan", description: "Kami menyepakati ruang lingkup, arsitektur, jadwal, dan prioritas." },
    { name: "Rancang", description: "Kami menyusun alur pengguna, wireframe, dan tampilan produk." },
    { name: "Kembangkan", description: "Kami membangun frontend, backend, basis data, dan integrasinya." },
    { name: "Uji", description: "Kami menguji produk agar berjalan stabil sebelum dirilis." },
    { name: "Rilis", description: "Kami menyiapkan dan meluncurkan produk ke lingkungan produksi." },
    { name: "Tingkatkan", description: "Kami merawat, memantau, dan mengoptimalkan produk seiring kebutuhan Anda." },
  ],
  industries: ["Ritel & Toko Online", "Teknologi Finansial", "Pendidikan", "Kesehatan", "Perhotelan", "Logistik", "Properti", "Manufaktur", "Jasa Profesional", "Startup"],
  articles: [
    { category: "Bisnis", title: "Berapa biaya membuat website profesional di Indonesia?", date: "28 September 2026", read: "5 menit baca", theme: "article-business" },
    { category: "Teknologi", title: "Laravel atau Next.js: mana yang cocok untuk proyek Anda?", date: "16 September 2026", read: "7 menit baca", theme: "article-engineering" },
    { category: "Transformasi Digital", title: "5 kesalahan yang sering terjadi saat bisnis mulai beralih ke digital", date: "2 September 2026", read: "4 menit baca", theme: "article-transformation" },
  ],
  faq: [
    { question: "Berapa biaya pembuatan website?", answer: "Biayanya tergantung jumlah halaman, desain, fitur, dan integrasi yang Anda butuhkan. Setelah memahami kebutuhan Anda, kami akan menjelaskan cakupan, jadwal, dan perkiraan biaya dengan terbuka." },
    { question: "Berapa lama proses pengerjaannya?", answer: "Website profil perusahaan sederhana biasanya selesai dalam beberapa minggu. Aplikasi web khusus butuh waktu lebih lama, tergantung kerumitan sistemnya." },
    { question: "Bisa membuat sistem sesuai kebutuhan kami?", answer: "Bisa. Kami membuat sistem sesuai alur bisnis, seperti dasbor internal, stok barang, CRM, keanggotaan, pemesanan, LMS, ERP sederhana, hingga produk SaaS." },
    { question: "Bisa melanjutkan proyek yang sudah ada?", answer: "Bisa. Kami akan memeriksa kode, infrastruktur, dan kondisi aplikasi terlebih dahulu agar tahu bagian yang perlu dilanjutkan." },
    { question: "Apakah TemuWeb menyediakan perawatan setelah rilis?", answer: "Ya. Kami membantu memantau aplikasi, memperbaiki kendala, memperbarui keamanan, meningkatkan performa, dan mengembangkan fitur baru." },
    { question: "Teknologi apa yang digunakan?", answer: "Kami memilih teknologi sesuai kebutuhan proyek. Yang sering kami pakai antara lain Laravel, React, Next.js, TypeScript, Node.js, PostgreSQL, MySQL, Redis, dan layanan cloud." },
    { question: "Bisa bekerja dengan klien di luar kota?", answer: "Bisa. Kami bekerja jarak jauh dengan klien dari berbagai kota di Indonesia maupun luar negeri." },
  ],
} as const;
