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
  companyName: "Nexora",
  legalName: "Nexora Digital Studio",
  positioning: "Software House & Digital Product Studio Indonesia",
  email: "hello@nexora.id",
  whatsapp: "+62 812-0000-0000",
  whatsappUrl: "https://wa.me/6281200000000",
  phone: "+62 812-0000-0000",
  address: "Surabaya, East Java, Indonesia",
  location: "Surabaya, Indonesia",
  origin: "https://nexora.id",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "GitHub", href: "https://github.com/" },
  ],
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Company", href: "#company" },
    { label: "Insights", href: "#insights" },
  ],
  services: [
    { name: "Website Development", description: "Kami membangun company profile, corporate website, landing page, dan platform web dengan fokus pada performa, aksesibilitas, SEO, dan pengalaman pengguna." },
    { name: "Custom Web Application", description: "Sistem berbasis web yang dirancang khusus untuk proses bisnis, mulai dari dashboard internal, ERP ringan, sistem operasional, hingga platform SaaS." },
    { name: "UI/UX & Product Design", description: "Riset, information architecture, wireframe, prototype, interface design, dan design system untuk menciptakan produk digital yang intuitif." },
    { name: "Mobile Application", description: "Aplikasi mobile Android dan iOS untuk kebutuhan consumer maupun enterprise dengan pengalaman yang konsisten di berbagai perangkat." },
    { name: "API & System Integration", description: "Integrasi payment gateway, ERP, CRM, WhatsApp API, third-party services, dan berbagai sistem existing melalui API yang aman dan scalable." },
    { name: "AI & Automation", description: "Integrasi artificial intelligence, workflow automation, intelligent search, chatbot, document processing, dan solusi AI yang relevan dengan proses bisnis." },
  ],
  clients: ["Arunika", "Nusantara Retail", "Karya Finance", "Santara Group", "Kopi Raya", "LogistikKu", "EduSpace", "PropertiHub", "MedikaPlus", "AgriLink", "Ventura Labs", "UrbanMart"],
  statistics: [
    { value: "06", label: "Core capabilities" },
    { value: "07", label: "Steps from idea to launch" },
    { value: "01", label: "Partner from start to scale" },
  ],
  projects: [
    { slug: "santara-commerce", name: "Santara Commerce", headline: "Building a scalable commerce platform for a growing retail network", services: ["Web Development", "E-Commerce", "UI/UX", "API Integration"], industry: "Retail", theme: "santara", narrative: "Satu pengalaman belanja yang menyatukan katalog, promosi, dan pesanan di seluruh kanal retail.", scope: "Commerce experience, storefront design, product architecture, and connected operations." },
    { slug: "arunika-finance", name: "Arunika Finance", headline: "Transforming complex financial operations into one intuitive platform", services: ["Product Design", "Web Application", "Dashboard", "Development"], industry: "Fintech", theme: "arunika", narrative: "Ruang kerja finansial yang menyederhanakan informasi kompleks menjadi keputusan yang lebih jelas.", scope: "Information architecture, dashboard systems, and financial product interfaces." },
    { slug: "logistikku", name: "LogistikKu", headline: "A logistics management platform connecting operations across Indonesia", services: ["Web Application", "API Integration", "Dashboard", "Development"], industry: "Logistics", theme: "logistik", narrative: "Visibilitas pengiriman dan operasional dalam satu sistem yang mudah dibaca oleh seluruh tim.", scope: "Operations platform, shipment tracking, and integration-ready workflows." },
    { slug: "eduspace", name: "EduSpace", headline: "Designing an accessible learning platform for the next generation", services: ["UI/UX", "LMS", "Web Development"], industry: "Education", theme: "eduspace", narrative: "Kelas digital yang memberi ruang bagi pelajar dan pengajar untuk berinteraksi tanpa hambatan.", scope: "Learning journeys, accessible interface design, and course delivery." },
    { slug: "medikaplus", name: "MedikaPlus", headline: "Creating a digital ecosystem for modern healthcare operations", services: ["Product Design", "Web App", "System Integration"], industry: "Healthcare", theme: "medika", narrative: "Alur layanan yang lebih tenang dan terhubung bagi pasien, tenaga kesehatan, dan pengelola klinik.", scope: "Patient experience, scheduling, and clinic operations interface." },
    { slug: "agrilink", name: "AgriLink", headline: "Connecting farmers, distributors, and markets through one digital platform", services: ["Product Strategy", "Web Application", "Mobile", "Development"], industry: "Agriculture", theme: "agri", narrative: "Jembatan digital antara hasil panen, distribusi, dan permintaan pasar.", scope: "Marketplace strategy, inventory journeys, and mobile-first operations." },
  ] satisfies Project[],
  capabilities: [
    { name: "Product Thinking", description: "Kami memahami masalah bisnis sebelum menulis kode." },
    { name: "Design & Experience", description: "Setiap interface dirancang agar jelas, intuitif, dan mudah digunakan." },
    { name: "Engineering", description: "Clean architecture dan teknologi modern untuk produk yang maintainable." },
    { name: "Scalable Architecture", description: "Sistem dirancang agar mampu berkembang bersama bisnis." },
    { name: "Quality Assurance", description: "Testing dan review dilakukan sebelum setiap deployment." },
    { name: "Long-term Support", description: "Kami tetap mendampingi setelah produk diluncurkan." },
  ],
  technologies: ["Laravel", "PHP", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MySQL", "Redis", "Docker", "AWS", "Cloudflare", "Python", "FastAPI", "OpenAI API"],
  process: [
    { name: "Discover", description: "Memahami bisnis, pengguna, kebutuhan, dan batasan project." },
    { name: "Define", description: "Menentukan scope, architecture, timeline, dan prioritas." },
    { name: "Design", description: "Mengubah kebutuhan menjadi UX flow, wireframe, dan interface." },
    { name: "Develop", description: "Membangun frontend, backend, database, dan integrasi." },
    { name: "Test", description: "Quality assurance untuk memastikan produk stabil." },
    { name: "Launch", description: "Deployment menuju production environment." },
    { name: "Improve", description: "Maintenance, analytics, optimization, dan pengembangan lanjutan." },
  ],
  industries: ["Retail & E-Commerce", "Financial Technology", "Education", "Healthcare", "Hospitality", "Logistics", "Property", "Manufacturing", "Professional Services", "Startups"],
  articles: [
    { category: "Business", title: "Berapa biaya membuat website profesional di Indonesia?", date: "28 September 2026", read: "5 min read", theme: "article-business" },
    { category: "Engineering", title: "Laravel vs Next.js: teknologi mana yang tepat untuk project Anda?", date: "16 September 2026", read: "7 min read", theme: "article-engineering" },
    { category: "Digital Transformation", title: "5 kesalahan yang sering terjadi saat digitalisasi bisnis", date: "2 September 2026", read: "4 min read", theme: "article-transformation" },
  ],
  faq: [
    { question: "Berapa biaya pembuatan website?", answer: "Biaya bergantung pada kompleksitas, jumlah halaman, kebutuhan desain, integrasi, serta fitur yang dibutuhkan. Setelah memahami kebutuhan project, kami akan memberikan scope, timeline, dan estimasi biaya secara transparan." },
    { question: "Berapa lama proses development?", answer: "Company profile sederhana umumnya dapat diselesaikan dalam beberapa minggu, sementara custom web application membutuhkan waktu lebih panjang tergantung kompleksitas sistem." },
    { question: "Apakah bisa membuat sistem custom?", answer: "Ya. Kami dapat membangun sistem sesuai proses bisnis seperti dashboard internal, inventory, CRM, membership, booking system, LMS, ERP ringan, hingga platform SaaS." },
    { question: "Apakah bisa melanjutkan project yang sudah ada?", answer: "Ya. Kami dapat melakukan technical assessment terlebih dahulu untuk memahami codebase, infrastructure, dan kondisi aplikasi." },
    { question: "Apakah tersedia maintenance?", answer: "Ya. Kami menyediakan maintenance, monitoring, bug fixing, security updates, performance optimization, dan pengembangan fitur lanjutan." },
    { question: "Teknologi apa yang digunakan?", answer: "Kami memilih teknologi berdasarkan kebutuhan project. Stack yang umum kami gunakan antara lain Laravel, React, Next.js, TypeScript, Node.js, PostgreSQL, MySQL, Redis, dan cloud infrastructure." },
    { question: "Apakah melayani klien di luar kota?", answer: "Ya. Kami dapat bekerja secara remote dengan klien dari seluruh Indonesia maupun luar Indonesia." },
  ],
} as const;
