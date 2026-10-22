import { whatsappUrl } from "./site";

export type ServiceCategory = "landing-page" | "company-profile" | "ecommerce" | "katalog-produk" | "booking" | "custom-web-app" | "maintenance";
export type PackagePrice = { amount: number; period: "project" | "month" };
export type ServiceFeature = { id: string; label: string; value: true | string };
export type ServicePackage = {
  name: string;
  audience: string;
  price: PackagePrice;
  features: ServiceFeature[];
  recommended?: boolean;
  note?: string;
};
export type Service = {
  id: ServiceCategory;
  name: string;
  tab: string;
  description: string;
  useCases: string[];
  packages: ServicePackage[];
  disclaimer?: string;
};
export type ServiceAddon = { id: string; name: string; description: string; price: { min: number; max?: number; unit?: string } | null };
export type FAQItem = { question: string; answer: string };

const responsive: ServiceFeature = { id: "responsive", label: "Desain responsif desktop/mobile", value: true };
const whatsapp: ServiceFeature = { id: "whatsapp", label: "Integrasi WhatsApp", value: true };
const basicSeo: ServiceFeature = { id: "seo", label: "SEO", value: "Pengaturan dasar" };
const contactForm: ServiceFeature = { id: "contact-form", label: "Formulir kontak", value: true };
const maintenancePrice: PackagePrice = { amount: 350000, period: "month" };
const portfolioManagement: ServiceFeature = { id: "portfolio", label: "Portofolio", value: "Pengelolaan portofolio" };
const cms: ServiceFeature = { id: "cms", label: "CMS / dashboard admin", value: true };
const ecommerceProfessional: ServiceFeature[] = [
  { id: "catalog", label: "Katalog produk", value: "Lengkap" },
  { id: "categories", label: "Kategori produk", value: true },
  { id: "cart", label: "Keranjang belanja", value: true },
  { id: "checkout", label: "Checkout", value: "Checkout di website" },
  { id: "payment", label: "Pembayaran", value: "Integrasi payment gateway" },
  { id: "shipping", label: "Pengiriman", value: "Integrasi API ongkos kirim" },
  { id: "admin", label: "Dashboard admin", value: true },
  { id: "orders", label: "Pengelolaan pesanan", value: true },
  responsive,
  { id: "reporting", label: "Laporan penjualan", value: "Laporan dasar" },
];

export const services: Service[] = [
  {
    id: "landing-page", name: "Landing Page", tab: "Landing Page",
    description: "Website satu halaman yang dirancang untuk memperkenalkan produk, meningkatkan konversi, dan mendukung kampanye pemasaran digital.",
    useCases: ["Promosi produk", "Personal branding", "Kampanye pemasaran", "Acara", "Bisnis baru"],
    packages: [
      {
        name: "Starter", audience: "Untuk bisnis kecil yang ingin mulai memperkenalkan produk.", price: { amount: 1500000, period: "project" },
        features: [
          { id: "sections", label: "Jumlah bagian", value: "Hingga 5 bagian" },
          { id: "design", label: "Desain", value: "Semi-custom" },
          responsive, whatsapp, basicSeo,
          { id: "contact-info", label: "Informasi kontak", value: true },
          { id: "revisions", label: "Revisi desain", value: "1 kali" },
        ],
      },
      {
        name: "Professional", audience: "Untuk promosi profesional dan kebutuhan pemasaran.", price: { amount: 2800000, period: "project" }, recommended: true,
        features: [
          { id: "sections", label: "Jumlah bagian", value: "Hingga 8 bagian" },
          { id: "design", label: "Desain", value: "Custom" },
          responsive, whatsapp, basicSeo, contactForm,
          { id: "analytics", label: "Integrasi analitik", value: "Dasar" },
          { id: "revisions", label: "Revisi desain", value: "2 kali" },
        ],
      },
      {
        name: "Premium", audience: "Untuk kampanye dengan kebutuhan desain dan interaksi lebih lengkap.", price: { amount: 4500000, period: "project" },
        features: [
          { id: "sections", label: "Jumlah bagian", value: "Hingga 12 bagian" },
          { id: "design", label: "Desain", value: "Custom premium" },
          responsive, whatsapp, basicSeo, contactForm,
          { id: "analytics", label: "Integrasi analitik", value: true },
          { id: "animations", label: "Animasi custom", value: true },
          { id: "revisions", label: "Revisi desain", value: "3 kali" },
        ],
      },
    ],
  },
  {
    id: "company-profile", name: "Company Profile", tab: "Company Profile",
    description: "Website profesional yang membangun kredibilitas perusahaan dan memperkenalkan bisnis Anda kepada calon pelanggan.",
    useCases: ["Perusahaan", "UMKM", "Konsultan", "Agensi", "Bisnis profesional"],
    packages: [
      {
        name: "Starter", audience: "Untuk perusahaan yang membutuhkan profil bisnis yang jelas.", price: { amount: 3000000, period: "project" },
        features: [
          { id: "pages", label: "Jumlah halaman", value: "Hingga 3 halaman" },
          { id: "design", label: "Desain", value: "Semi-custom" }, responsive,
          { id: "company-info", label: "Informasi perusahaan", value: true },
          { id: "portfolio", label: "Portofolio", value: "Bagian portofolio" },
          { id: "contact-page", label: "Halaman kontak", value: true }, basicSeo,
          { id: "revisions", label: "Revisi desain", value: "1 kali" },
        ],
      },
      {
        name: "Professional", audience: "Untuk bisnis yang ingin mengelola konten dan portofolio sendiri.", price: { amount: 5500000, period: "project" }, recommended: true,
        features: [
          { id: "pages", label: "Jumlah halaman", value: "Hingga 6 halaman" },
          { id: "design", label: "Desain", value: "Custom" }, responsive, portfolioManagement, cms,
          { id: "blog", label: "Blog / berita", value: "Bagian blog atau berita" }, basicSeo,
          { id: "revisions", label: "Revisi desain", value: "2 kali" },
        ],
      },
      {
        name: "Premium", audience: "Untuk profil perusahaan dengan konten lebih luas dan dua bahasa.", price: { amount: 9500000, period: "project" },
        features: [
          { id: "pages", label: "Jumlah halaman", value: "Hingga 12 halaman" },
          { id: "design", label: "Desain", value: "Custom premium" }, responsive, cms,
          { id: "blog", label: "Blog / berita", value: "Pengelolaan blog" }, portfolioManagement,
          { id: "languages", label: "Dukungan bahasa", value: "Dua bahasa" },
          { id: "seo", label: "SEO", value: "Pengaturan SEO" },
          { id: "revisions", label: "Revisi desain", value: "3 kali" },
        ],
      },
    ],
  },
  {
    id: "ecommerce", name: "E-Commerce", tab: "E-Commerce",
    description: "Toko online modern dengan pengelolaan produk, keranjang belanja, checkout, dan fitur penjualan sesuai kebutuhan bisnis.",
    useCases: ["Brand lokal", "Ritel", "Fashion", "Produk digital", "Bisnis online"],
    disclaimer: "Biaya penyedia pembayaran, penyedia pengiriman, dan layanan eksternal tidak termasuk, kecuali disepakati secara tertulis. Fitur custom mengikuti ruang lingkup yang disepakati, bukan fitur tanpa batas.",
    packages: [
      {
        name: "Starter", audience: "Untuk mulai berjualan dengan proses pesanan yang sederhana.", price: { amount: 6500000, period: "project" },
        note: "Pembayaran dan pemenuhan pesanan ditangani secara manual.",
        features: [
          { id: "catalog", label: "Katalog produk", value: true },
          { id: "categories", label: "Kategori produk", value: true },
          { id: "product-detail", label: "Halaman detail produk", value: true },
          { id: "cart", label: "Keranjang belanja", value: true },
          { id: "checkout", label: "Checkout", value: "Melalui WhatsApp" },
          { id: "admin", label: "Dashboard admin", value: "Dashboard dasar" },
          { id: "orders", label: "Pengelolaan pesanan", value: "Pengelolaan dasar" }, responsive,
        ],
      },
      {
        name: "Professional", audience: "Untuk toko yang membutuhkan checkout dan integrasi operasional.", price: { amount: 12500000, period: "project" }, recommended: true,
        features: ecommerceProfessional,
      },
      {
        name: "Premium", audience: "Untuk bisnis dengan kebutuhan pelanggan dan operasional lebih luas.", price: { amount: 22000000, period: "project" },
        features: [
          ...ecommerceProfessional.map((feature) => feature.id === "reporting" ? { ...feature, value: "Laporan lebih lengkap" } : feature),
          { id: "customer-accounts", label: "Akun pelanggan", value: true },
          { id: "customer-dashboard", label: "Dashboard pelanggan", value: true },
          { id: "vouchers", label: "Sistem voucher dan diskon", value: true },
          { id: "product-management", label: "Pengelolaan produk lanjutan", value: true },
          { id: "admin-roles", label: "Beberapa peran admin", value: true },
          { id: "custom-features", label: "Fitur bisnis custom", value: "Sesuai ruang lingkup" },
        ],
      },
    ],
  },
  {
    id: "katalog-produk", name: "Katalog Produk", tab: "Katalog Produk",
    description: "Website katalog digital untuk menampilkan produk secara profesional tanpa sistem checkout online yang kompleks.",
    useCases: ["Distributor", "Supplier", "Showroom", "Grosir", "UMKM"],
    disclaimer: "Pemesanan dibahas melalui WhatsApp. Sistem checkout dan pembayaran online tidak termasuk ruang lingkup awal.",
    packages: [{
      name: "Ruang lingkup awal", audience: "Untuk bisnis yang ingin menampilkan produk dan menerima pertanyaan pelanggan.", price: { amount: 3500000, period: "project" },
      features: [
        { id: "products", label: "Produk awal", value: "Hingga 30 entri produk" },
        { id: "categories", label: "Kategori produk", value: true },
        { id: "product-detail", label: "Detail produk", value: true },
        { id: "inquiry", label: "Pertanyaan melalui WhatsApp", value: true }, responsive,
        { id: "management", label: "Pengelolaan produk sederhana", value: true },
      ],
    }],
  },
  {
    id: "booking", name: "Booking & Reservasi", tab: "Booking",
    description: "Website reservasi yang membantu pelanggan melakukan pemesanan layanan dan mengatur jadwal secara lebih praktis.",
    useCases: ["Salon", "Klinik", "Rental", "Konsultan", "Penginapan"],
    disclaimer: "Ruang lingkup awal menerima permintaan reservasi. Konfirmasi dilakukan oleh admin; ketersediaan real-time dan pembayaran otomatis tidak termasuk kecuali disepakati terpisah.",
    packages: [{
      name: "Ruang lingkup awal", audience: "Untuk layanan yang membutuhkan pencatatan jadwal dan permintaan reservasi.", price: { amount: 5000000, period: "project" },
      features: [
        { id: "booking-form", label: "Formulir permintaan booking", value: true },
        { id: "schedule", label: "Antarmuka penjadwalan", value: true },
        { id: "reservation-admin", label: "Pengelolaan reservasi oleh admin", value: true },
        { id: "customer-info", label: "Informasi kontak pelanggan", value: true },
        { id: "notifications", label: "Notifikasi admin dasar", value: true }, responsive,
      ],
    }],
  },
  {
    id: "custom-web-app", name: "Custom Web Application", tab: "Custom Web App",
    description: "Pengembangan aplikasi berbasis web yang disesuaikan dengan proses bisnis, operasional, dan kebutuhan perusahaan Anda.",
    useCases: ["Sistem ERP", "CRM", "LMS", "Dashboard internal", "Sistem manajemen"],
    disclaimer: "Harga akhir bergantung pada jumlah modul, integrasi, alur kerja, dan kompleksitas teknis. Fitur dan hasil pengerjaan ditentukan dalam proposal, bukan pengembangan tanpa batas.",
    packages: [{
      name: "Ruang lingkup awal", audience: "Untuk tim yang membutuhkan sistem sesuai alur kerja bisnis.", price: { amount: 15000000, period: "project" },
      features: [
        { id: "consultation", label: "Konsultasi kebutuhan", value: true },
        { id: "interface", label: "Antarmuka web custom", value: true },
        { id: "login", label: "Login yang aman", value: true },
        { id: "roles", label: "Hak akses berdasarkan peran", value: true },
        { id: "crud", label: "Pengelolaan data (CRUD)", value: true },
        { id: "dashboard", label: "Dashboard dasar", value: true },
        { id: "database", label: "Integrasi database", value: true },
      ],
    }],
  },
  {
    id: "maintenance", name: "Website Maintenance", tab: "Maintenance",
    description: "Layanan pemeliharaan website untuk membantu menjaga keamanan, stabilitas, performa, dan kelancaran operasional.",
    useCases: ["Website perusahaan", "Toko online", "Aplikasi web", "Website bisnis"],
    disclaimer: "Maintenance mencakup perawatan sesuai kesepakatan, bukan desain ulang besar atau pengembangan fitur baru. Frekuensi backup, batas pembaruan, dan waktu bantuan dibahas dalam proposal.",
    packages: [{
      name: "Ruang lingkup awal", audience: "Untuk bisnis yang membutuhkan bantuan teknis dan perawatan rutin.", price: maintenancePrice,
      features: [
        { id: "monitoring", label: "Pemantauan website", value: true },
        { id: "backup", label: "Backup berkala", value: true },
        { id: "updates", label: "Pembaruan kecil", value: true },
        { id: "bug-fixes", label: "Perbaikan bug dasar", value: true },
        { id: "assistance", label: "Bantuan teknis", value: true },
      ],
    }],
  },
];

export const serviceAddons: ServiceAddon[] = [
  { id: "page", name: "Halaman standar tambahan", description: "Untuk konten baru di luar jumlah halaman paket.", price: { min: 300000, max: 600000, unit: "halaman" } },
  { id: "cms", name: "CMS / panel admin sederhana", description: "Kelola konten tanpa mengubah kode website.", price: { min: 2000000 } },
  { id: "copywriting", name: "Penulisan konten website", description: "Bantu pengunjung memahami bisnis dan layanan Anda.", price: { min: 500000 } },
  { id: "multilingual", name: "Website multibahasa", description: "Tambahkan dukungan bahasa sesuai kebutuhan.", price: { min: 1500000 } },
  { id: "seo-setup", name: "Pengaturan SEO lanjutan", description: "Persiapan SEO dengan cakupan yang disepakati.", price: { min: 1500000 } },
  { id: "monthly-seo", name: "SEO bulanan", description: "Pengerjaan SEO berkelanjutan sesuai rencana kerja.", price: { min: 1500000, unit: "bulan" } },
  { id: "priority", name: "Maintenance prioritas", description: "Dukungan dengan prioritas sesuai kesepakatan layanan.", price: { min: 1200000, unit: "bulan" } },
  { id: "api", name: "Integrasi API custom", description: "Hubungkan website dengan sistem atau layanan lain.", price: null },
];

export const serviceProcess = [
  { name: "Konsultasi", description: "Memahami kebutuhan, tujuan, dan karakter bisnis Anda." },
  { name: "Perencanaan", description: "Menentukan fitur, struktur website, serta ruang lingkup pengerjaan." },
  { name: "Desain & Development", description: "Membangun website dengan tampilan modern dan teknologi yang sesuai." },
  { name: "Review & Revisi", description: "Melakukan pengujian dan penyempurnaan berdasarkan paket yang dipilih." },
  { name: "Launching", description: "Mempublikasikan website dan memberikan panduan penggunaan." },
];

export const serviceFaq: FAQItem[] = [
  { question: "Apakah harga sudah termasuk domain dan hosting?", answer: "Untuk paket pada halaman ini, domain dan hosting tidak termasuk kecuali dicantumkan dalam proposal tertulis. Paket ringkas di beranda memiliki penawaran dan ketentuan tersendiri. Kami menjelaskan biaya awal dan biaya berulang sebelum proyek dimulai." },
  { question: "Berapa lama proses pembuatan website?", answer: "Jadwal mengikuti kompleksitas, kesiapan materi, integrasi, dan ruang lingkup yang disepakati. Estimasi serta tahapan pengerjaan dijelaskan dalam proposal sebelum proyek dimulai." },
  { question: "Apakah website bisa dibuka melalui smartphone?", answer: "Ya. Website dirancang responsif agar nyaman dibuka melalui smartphone, tablet, dan desktop. Pengujian tampilan dilakukan sebagai bagian dari pengerjaan." },
  { question: "Apakah saya bisa meminta desain custom?", answer: "Bisa. Paket Professional dan Premium untuk Landing Page serta Company Profile mencakup desain custom sesuai tingkat paket. Untuk layanan lainnya, kebutuhan desain dibahas dalam ruang lingkup proyek." },
  { question: "Apakah tersedia revisi desain?", answer: "Landing Page dan Company Profile mencakup 1 revisi pada Starter, 2 pada Professional, dan 3 pada Premium. Revisi untuk layanan lain mengikuti proposal. Penambahan fitur atau perubahan ruang lingkup dibahas terpisah." },
  { question: "Apakah website memiliki dashboard admin?", answer: "Dashboard atau CMS tersedia hanya pada paket yang mencantumkannya. Paket Company Profile Professional dan Premium, E-Commerce, serta panel layanan yang menyebut pengelolaan admin memiliki akses sesuai cakupan masing-masing." },
  { question: "Apakah saya mendapatkan source code website?", answer: "Kepemilikan kode sumber, lisensi komponen pihak ketiga, dan cara penyerahan mengikuti perjanjian proyek. Ketentuan tersebut dibahas sebelum pekerjaan dimulai, bukan penyerahan tanpa syarat." },
  { question: "Apakah bisa menambahkan fitur setelah website selesai?", answer: "Bisa. Kami akan memeriksa kebutuhan dan kondisi website, lalu menyepakati ruang lingkup, biaya, serta jadwal pengerjaan tambahan. Add-on tidak ditagihkan ulang jika sudah termasuk dalam paket yang dipilih." },
  { question: "Apakah TemuWeb menyediakan maintenance?", answer: `Ya, layanan maintenance tersedia mulai ${formatServicePrice(maintenancePrice)} sesuai cakupan awal. Perawatan rutin berbeda dari desain ulang besar atau pengembangan fitur baru. Batas layanan dan prioritas bantuan ditentukan dalam kesepakatan.` },
  { question: "Bagaimana sistem pembayaran proyek?", answer: "Tahapan pembayaran, tenggat, dan ketentuan proyek disepakati sebelum pengerjaan dimulai. Untuk maintenance, periode pembayaran mengikuti layanan bulanan yang dipilih. Tidak ada ketentuan pembayaran universal yang menggantikan perjanjian proyek." },
];

export function resolveServiceCategory(value: unknown): ServiceCategory | "semua" {
  return services.find((service) => service.id === value)?.id ?? "semua";
}

export function formatServicePrice(price: PackagePrice) {
  return `Rp${new Intl.NumberFormat("id-ID").format(price.amount)}${price.period === "month" ? "/bulan" : ""}`;
}

export function serviceFeatureText(feature: ServiceFeature) {
  return feature.value === true ? feature.label : `${feature.label}: ${feature.value}`;
}

export function servicePackageWhatsapp(service: Service, selectedPackage: ServicePackage) {
  const packageName = service.packages.length === 3 ? ` paket ${selectedPackage.name}` : " dengan ruang lingkup awal";
  return whatsappUrl(`Halo TemuWeb, saya tertarik dengan layanan ${service.name}${packageName} (${formatServicePrice(selectedPackage.price)}). Saya ingin konsultasi mengenai kebutuhan website saya.`);
}
