import { site } from "@/data/site";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  theme: "article-business" | "article-engineering" | "article-transformation";
  readMinutes: number;
  sections: { heading: string; paragraphs: string[]; items?: string[] }[];
};

const rupiah = (price: number | null) =>
  price === null ? "harga khusus" : `Rp${new Intl.NumberFormat("id-ID").format(price)}`;

const content: Omit<Article, "readMinutes">[] = [
  {
    slug: "biaya-website-profesional",
    title: "Berapa biaya membuat website profesional di Indonesia?",
    excerpt: "Kenali komponen biaya, pilihan paket, dan hal yang perlu disepakati sebelum membuat website bisnis.",
    category: "Bisnis",
    date: "2026-09-28",
    author: "Tim TemuWeb",
    theme: "article-business",
    sections: [
      {
        heading: "Mulai dari kebutuhan, bukan jumlah halaman",
        paragraphs: [
          "Dua website dengan jumlah halaman yang sama bisa membutuhkan pekerjaan berbeda. Website yang menjelaskan layanan tidak punya alur yang sama dengan toko online yang menerima pesanan. Karena itu, pertanyaan pertama bukan berapa halaman yang ingin dibuat, melainkan apa yang perlu dilakukan pengunjung setelah membukanya.",
          "Untuk bisnis jasa, tujuannya mungkin membuat calon pelanggan memahami layanan lalu menghubungi tim. Untuk ritel, pengunjung perlu melihat katalog dan memesan produk. Tujuan ini membantu menentukan fitur yang memang perlu dibuat, sekaligus menghindari pengeluaran untuk fitur yang belum akan digunakan.",
        ],
      },
      {
        heading: "Apa saja yang membentuk biaya website?",
        paragraphs: [
          "Pekerjaan website mencakup lebih dari tampilan. Ada penyusunan konten, desain, pengembangan, pengujian, dan persiapan peluncuran. Jika dibutuhkan dashboard atau integrasi layanan lain, pekerjaan tersebut juga perlu dihitung dalam ruang lingkup.",
          "Materi yang sudah siap membantu memperjelas pekerjaan. Siapkan logo, deskripsi layanan, foto yang boleh digunakan, dan informasi kontak. Jika materi belum tersedia, bicarakan siapa yang akan menyiapkannya agar tidak ada pekerjaan yang dianggap termasuk padahal belum disepakati.",
        ],
        items: ["Jumlah halaman dan kebutuhan desain", "Fitur pengelolaan konten atau katalog", "Integrasi dengan layanan lain", "Domain, hosting, dan dukungan setelah rilis"],
      },
      {
        heading: "Gambaran paket TemuWeb",
        paragraphs: [
          "TemuWeb menyediakan harga awal untuk membantu Anda menyiapkan anggaran. Harga akhir dan hasil yang diserahkan tetap mengikuti kebutuhan serta ruang lingkup yang disepakati sebelum pekerjaan dimulai.",
        ],
        items: site.pricing.map((item) => `${item.name}: ${item.price === null ? "estimasi setelah konsultasi" : `mulai ${rupiah(item.price)}`}. ${item.features.join("; ")}.`),
      },
      {
        heading: "Pisahkan biaya awal dan biaya berulang",
        paragraphs: [
          "Paket Website Profil Perusahaan, Website Bisnis, dan Toko Online mencakup domain .com, hosting 1 GB, serta SSL selama satu tahun. Biaya perpanjangan setelah tahun pertama tidak termasuk harga awal. Tanyakan biaya perpanjangan sebelum memutuskan agar anggaran tahun berikutnya tidak terlewat.",
          "Paket Toko Online juga mencakup maintenance teknis gratis selama satu tahun untuk perbaikan bug dan pembaruan keamanan. Penambahan fitur, desain ulang, dan pembaruan konten dibahas terpisah. Untuk paket lain, dukungan mengikuti penawaran yang disepakati.",
        ],
      },
      {
        heading: "Apa yang perlu dibawa saat konsultasi?",
        paragraphs: [
          "Ceritakan jenis bisnis, pelanggan yang ingin dijangkau, dan masalah yang ingin diselesaikan. Bawa contoh website sebagai referensi kebutuhan, bukan permintaan untuk menyalin identitasnya. Sebutkan pula siapa yang akan memperbarui konten setelah website selesai.",
          "Dengan kebutuhan yang jelas, Anda bisa membandingkan penawaran berdasarkan hasil kerja, bukan hanya angka paling rendah. Minta rincian halaman, fitur, jadwal, revisi, kepemilikan domain, dan dukungan tertulis. Jika ruang lingkup berubah, bahas perubahan biaya dan waktu sebelum pekerjaan tambahan dimulai.",
        ],
      },
    ],
  },
  {
    slug: "laravel-atau-nextjs",
    title: "Laravel atau Next.js: mana yang cocok untuk proyek Anda?",
    excerpt: "Pilih teknologi berdasarkan alur bisnis, kebutuhan pengguna, dan kemampuan tim yang akan merawatnya.",
    category: "Teknologi",
    date: "2026-09-16",
    author: "Tim TemuWeb",
    theme: "article-engineering",
    sections: [
      {
        heading: "Tidak ada pilihan terbaik untuk semua proyek",
        paragraphs: [
          "Nama teknologi sering muncul sebelum kebutuhan proyek dibahas. Padahal, keputusan yang berguna dimulai dari pengguna, data, dan pekerjaan yang perlu diselesaikan. Website informasi, dashboard operasional, dan platform pemesanan dapat memerlukan pendekatan berbeda meski tampilannya sama-sama dibuka melalui browser.",
          "Laravel adalah framework aplikasi web dalam ekosistem PHP. Next.js adalah framework React untuk membangun aplikasi web. Keduanya bisa digunakan untuk membuat produk digital, tetapi menyediakan pendekatan dan alat yang berbeda. Artikel ini memberi arah diskusi, bukan keputusan teknis yang berlaku untuk setiap bisnis.",
        ],
      },
      {
        heading: "Kapan mempertimbangkan Laravel?",
        paragraphs: [
          "Laravel menyediakan alat untuk routing, validasi, autentikasi, akses database, dan antrean pekerjaan. Saat proyek banyak berurusan dengan data serta aturan operasional, kebutuhan ini layak dibahas bersama tim pengembang. Contohnya adalah pencatatan pesanan, pengelolaan stok, atau persetujuan pekerjaan antarbagian.",
          "Yang perlu diperiksa bukan hanya apakah fitur bisa dibuat. Petakan siapa yang boleh mengakses data, bagaimana perubahan dicatat, dan apa yang terjadi jika proses gagal. Pertimbangkan Laravel jika kemampuan tim dan kebutuhan sistem cocok dengan ekosistem PHP yang akan dipakai untuk merawatnya.",
        ],
      },
      {
        heading: "Kapan mempertimbangkan Next.js?",
        paragraphs: [
          "Next.js memakai React untuk menyusun antarmuka dan menyediakan routing serta komponen yang dapat berjalan di server maupun di sisi pengguna. Pendekatan ini bisa dipertimbangkan untuk website dan aplikasi yang membutuhkan antarmuka berbasis komponen. Website TemuWeb sendiri dibangun dengan Next.js.",
          "Pilihan ini tetap membutuhkan perencanaan data, keamanan, dan deployment. Menggunakan Next.js tidak otomatis membuat semua halaman cepat atau ramah mesin pencari. Isi, cara mengambil data, ukuran aset, dan pengujian pengalaman pengguna tetap perlu dikerjakan.",
        ],
      },
      {
        heading: "Apakah keduanya bisa dipakai bersama?",
        paragraphs: [
          "Bisa. Laravel dapat menyediakan API untuk data dan aturan bisnis, sementara Next.js menangani antarmuka. Namun, membagi aplikasi menjadi dua bagian juga berarti mengelola komunikasi, autentikasi, dan deployment keduanya. Jangan menambah lapisan hanya karena kombinasi tersebut terlihat populer.",
          "Untuk proyek yang sederhana, satu aplikasi yang dirawat dengan baik bisa lebih sesuai daripada dua sistem terpisah. Pemisahan layak dipertimbangkan ketika ada kebutuhan nyata, misalnya data yang dipakai oleh beberapa aplikasi atau pembagian tanggung jawab tim yang sudah jelas.",
        ],
      },
      {
        heading: "Pertanyaan sebelum memilih teknologi",
        paragraphs: [
          "Tuliskan satu alur utama dari awal sampai selesai. Misalnya, pelanggan mengirim permintaan, admin memeriksa data, lalu tim memperbarui status. Alur konkret seperti ini membantu pengembang menjelaskan pilihan teknologi dengan alasan yang dapat Anda evaluasi.",
        ],
        items: ["Siapa pengguna utama dan apa pekerjaan mereka?", "Data apa yang disimpan, siapa yang boleh mengubahnya?", "Apakah sistem perlu terhubung ke aplikasi yang sudah ada?", "Siapa yang akan merawat aplikasi setelah peluncuran?", "Berapa anggaran dan waktu untuk versi pertama?"],
      },
      {
        heading: "Pilih pendekatan yang bisa dirawat",
        paragraphs: [
          "Saat berdiskusi dengan TemuWeb, kebutuhan bisnis menjadi dasar pemilihan teknologi. Minta penjelasan tentang konsekuensi pilihan, bukan daftar fitur framework saja. Dokumentasi, proses pengujian, dan kemampuan tim penerus juga perlu masuk dalam pembicaraan sejak awal.",
          "Mulai dengan kebutuhan yang paling penting, uji alurnya, lalu tambah kemampuan ketika memang diperlukan. Teknologi yang tepat adalah teknologi yang mendukung pekerjaan pengguna dan bisa dirawat oleh tim Anda, bukan sekadar yang paling sering dibicarakan.",
        ],
      },
    ],
  },
  {
    slug: "kesalahan-transformasi-digital",
    title: "5 kesalahan yang sering terjadi saat bisnis mulai beralih ke digital",
    excerpt: "Dari fitur berlebihan sampai data yang belum rapi: kenali hal yang perlu diperhatikan sebelum membangun sistem.",
    category: "Transformasi Digital",
    date: "2026-09-02",
    author: "Tim TemuWeb",
    theme: "article-transformation",
    sections: [
      {
        heading: "Digitalisasi dimulai dari pekerjaan sehari-hari",
        paragraphs: [
          "Memindahkan proses ke aplikasi tidak cukup dengan mengganti kertas atau spreadsheet. Sistem baru perlu membantu orang menyelesaikan pekerjaan yang nyata. Jika alur lama belum dipahami, aplikasi bisa membawa kebingungan yang sama ke tempat baru.",
          "Sebelum memilih alat, amati satu pekerjaan yang paling sering membuat tim terhambat. Tanyakan siapa yang mengerjakannya, informasi apa yang dibutuhkan, dan di mana pekerjaan biasanya tertunda. Lima hal berikut bisa dipakai sebagai daftar periksa saat menyiapkan proyek.",
        ],
      },
      {
        heading: "1. Membeli solusi sebelum memahami masalah",
        paragraphs: [
          "Sebuah dashboard baru mungkin terlihat menarik, tetapi belum tentu menyelesaikan masalah pencatatan pesanan. Jika informasi masuk melalui banyak saluran dan tidak ada penanggung jawabnya, mengganti tampilan tidak mengatasi akar persoalan.",
          "Tuliskan masalah secara spesifik: misalnya admin harus menyalin data pelanggan beberapa kali. Lalu sepakati perubahan yang ingin dicapai, seperti satu pencatatan yang dapat dipakai bersama. Hasil yang jelas membuat keputusan fitur lebih mudah dibatasi.",
        ],
      },
      {
        heading: "2. Memasukkan semua fitur ke versi pertama",
        paragraphs: [
          "Ketika semua ide dianggap wajib, ruang lingkup proyek menjadi sulit dikendalikan. Ada fitur yang penting untuk operasional, ada pula yang baru berguna setelah jumlah pengguna bertambah. Keduanya tidak harus diluncurkan pada saat yang sama.",
          "Pilih satu alur yang bisa digunakan dari awal sampai akhir. Untuk sistem pemesanan, mulai dari pencatatan, pemeriksaan, dan pembaruan status. Simpan ide tambahan dalam daftar terpisah, lalu evaluasi setelah tim mencoba versi pertama.",
        ],
      },
      {
        heading: "3. Mengabaikan orang yang memakai sistem",
        paragraphs: [
          "Pengambil keputusan dan pengguna harian bisa membutuhkan hal berbeda. Laporan yang terlihat lengkap bagi pemilik bisnis belum tentu membantu staf yang memasukkan data melalui ponsel. Libatkan orang yang menjalankan pekerjaan sejak tahap awal.",
          "Minta mereka mencoba alur dengan contoh pekerjaan yang realistis. Perhatikan istilah yang tidak dipahami, informasi yang sulit ditemukan, dan langkah yang membuat mereka kembali ke cara lama. Masukan ini lebih berguna daripada sekadar menanyakan apakah desainnya bagus.",
        ],
      },
      {
        heading: "4. Membawa data lama tanpa pemeriksaan",
        paragraphs: [
          "Data pelanggan ganda, kode produk yang berbeda, dan kolom yang kosong perlu dibahas sebelum dipindahkan. Jika semuanya langsung dimasukkan ke aplikasi baru, tim tetap harus menebak data mana yang benar.",
          "Tentukan format data, penanggung jawab pemeriksaan, dan cara menangani duplikasi. Buat cadangan sebelum pemindahan, lakukan percobaan dengan sebagian data, lalu periksa hasilnya bersama pengguna. Jangan menghapus sumber lama sebelum hasil pemindahan diverifikasi.",
        ],
      },
      {
        heading: "5. Berhenti setelah peluncuran",
        paragraphs: [
          "Peluncuran bukan akhir pekerjaan. Pengguna membutuhkan panduan, jalur pelaporan masalah, dan orang yang bisa mengambil keputusan saat proses belum sesuai harapan. Akses akun, pencadangan, serta perawatan juga perlu memiliki penanggung jawab.",
          "Sepakati masa pendampingan dan batas dukungan sebelum proyek dimulai. Pisahkan perbaikan masalah dari permintaan fitur baru agar keduanya bisa ditangani dengan jelas. Catat masukan setelah penggunaan nyata, lalu pilih perubahan berikutnya berdasarkan kebutuhan tim.",
        ],
      },
      {
        heading: "Langkah kecil yang bisa dimulai sekarang",
        paragraphs: [
          "Pilih satu pekerjaan berulang, gambarkan alurnya, dan ajak pengguna membahas bagian yang paling menyulitkan. Siapkan contoh data tanpa informasi sensitif untuk konsultasi awal. Dari sana, kebutuhan sistem bisa dirumuskan tanpa harus langsung membangun semua fitur.",
          "TemuWeb dapat membantu membahas ruang lingkup website atau aplikasi berdasarkan alur tersebut. Tujuannya bukan menambah alat sebanyak mungkin, tetapi membuat pekerjaan lebih jelas dan sistem yang bisa dipakai serta dirawat setelah rilis.",
        ],
      },
    ],
  },
];

export const articles: Article[] = content.map((article) => ({
  ...article,
  readMinutes: Math.max(1, Math.ceil([
    article.title,
    article.excerpt,
    ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.items ?? [])]),
  ].join(" ").trim().split(/\s+/).length / 200)),
}));

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(date));
}
