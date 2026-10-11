import type { Project } from "@/data/site";

export function ProjectArt({ project }: { project: Project }) {
  return (
    <div
      className={`project-art art-${project.theme}`}
      aria-label={`Konsep antarmuka produk ${project.name}`}
      role="img"
    >
      {project.theme === "santara" && (
        <div className="art-frame santara-frame">
          <div className="mock-nav">
            <strong>
              SANTARA
              <span>
                ®
              </span>
            </strong>
            <span>
              Belanja&nbsp;&nbsp; Koleksi&nbsp;&nbsp; Tentang
            </span>
            <span>
              Cari&nbsp; ◯
            </span>
          </div>
          <div className="santara-content">
            <div className="santara-copy">
              <span>
                Untuk setiap ruang,
              </span>
              <strong>
                Pilihan
                <br />
                sehari-hari.
              </strong>
              <small>
                Dibuat dengan hati. Tahan lama.
              </small>
              <i>
                Lihat koleksi ↗
              </i>
            </div>
            <div className="santara-object">
              <div className="santara-vase" />
              <div className="santara-shadow" />
            </div>
          </div>
          <div className="santara-strip">
            <span>
              KOLEKSI BARU / 2026
            </span>
            <span>
              01 — 04
            </span>
          </div>
        </div>
      )}
      {project.theme === "arunika" && (
        <>
          <div className="arunika-glow" />
          <div className="art-frame arunika-frame">
            <div className="dashboard-side">
              <strong>
                arunika
                <span>
                  ✳
                </span>
              </strong>
              <span>
                Ringkasan
              </span>
              <span>
                Rekening
              </span>
              <span>
                Transaksi
              </span>
              <span>
                Analisis
              </span>
              <small>
                PENGATURAN
              </small>
            </div>
            <div className="dashboard-main">
              <div className="dashboard-top">
                <span>
                  Ringkasan
                </span>
                <span>
                  ◯ &nbsp; ID
                </span>
              </div>
              <small>
                Selamat datang kembali, Aditya
              </small>
              <div className="finance-balance">
                <span>
                  Total saldo
                </span>
                <strong>
                  Rp 2.458.900.000
                </strong>
                <span>
                  ↗ 12,8% bulan ini
                </span>
              </div>
              <div className="finance-grid">
                <div>
                  <span>
                    Arus kas
                  </span>
                  <div className="finance-bars">
                    {[38, 55, 44, 72, 60, 88, 68, 96, 75, 80, 62, 92].map(
                      (height, index) => (
                        <i key={index} style={{ height: `${height}%` }} />
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <span>
                    Alokasi
                  </span>
                  <div className="finance-ring" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {project.theme === "logistik" && (
        <div className="logistik-scene">
          <div className="logistik-title">
            Kirim lebih jauh.
            <br />
            <em>
              Pantau lebih mudah.
            </em>
          </div>
          <div className="logistik-map">
            <div className="map-route" />
            <span className="map-pin pin-one">
              ●
            </span>
            <span className="map-pin pin-two">
              ●
            </span>
            <span className="map-pin pin-three">
              ●
            </span>
            <div className="shipment">
              <small>
                PENGIRIMAN AKTIF
              </small>
              <strong>
                Jakarta → Surabaya
              </strong>
              <span>
                Dalam perjalanan · Tiba 16.45
              </span>
              <div className="shipment-progress" />
            </div>
          </div>
          <div className="logistik-mark">
            LOGISTIK
            <span>
              KU
            </span>
            {" "}/ OPERASIONAL
          </div>
        </div>
      )}
      {project.theme === "eduspace" && (
        <div className="eduspace-scene">
          <div className="edu-orbit orbit-one" />
          <div className="edu-orbit orbit-two" />
          <div className="edu-window">
            <div className="edu-header">
              <strong>
                edu
                <span>
                  space
                </span>
              </strong>
              <span>
                Jelajahi &nbsp; Kelas saya &nbsp; Profil ◯
              </span>
            </div>
            <div className="edu-main">
              <div>
                <small>
                  LANGKAH BARU DIMULAI DI SINI
                </small>
                <strong>
                  Belajar tanpa
                  <br />
                  batas
                  <span>
                    .
                  </span>
                </strong>
                <p>
                  Beri ruang untuk ide baru.
                </p>
                <i>
                  Jelajahi kelas ↗
                </i>
              </div>
              <div className="edu-shape">
                <span>
                  ✳
                </span>
              </div>
            </div>
            <div className="edu-bottom">
              <span>
                DESAIN PRODUK
              </span>
              <span>
                PRODUK & TEKNOLOGI
              </span>
              <span>
                KARYA KREATIF
              </span>
            </div>
          </div>
        </div>
      )}
      {project.theme === "medika" && (
        <div className="medika-scene">
          <div className="medika-disc" />
          <div className="medika-window">
            <div className="medika-top">
              <strong>
                medika
                <span>
                  +
                </span>
              </strong>
              <span>
                Layanan &nbsp; Pasien &nbsp; Jadwal &nbsp; •••
              </span>
            </div>
            <div className="medika-body">
              <div>
                <small>
                  SELAMAT PAGI, DR. MAYA
                </small>
                <h3>
                  Layanan jadi
                  <br />
                  lebih mudah.
                </h3>
                <span>
                  Semua yang Anda butuhkan untuk merawat pasien.
                </span>
                <div className="medika-action">
                  Lihat janji temu ↗
                </div>
              </div>
              <div className="medika-schedule">
                <span>
                  Selasa, 28 September
                </span>
                <strong>
                  Jadwal hari ini
                </strong>
                <p>
                  09.00 &nbsp; Konsultasi · Nabila S.
                </p>
                <p>
                  10.30 &nbsp; Kontrol · Ardi P.
                </p>
                <p>
                  13.00 &nbsp; Konsultasi · Dewi K.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {project.theme === "agri" && (
        <div className="agri-scene">
          <div className="agri-type">
            Dari kebun
            <br />
            ke{" "}
            <em>
              mana saja.
            </em>
          </div>
          <div className="agri-phone">
            <div className="phone-notch" />
            <div className="agri-phone-inner">
              <div className="agri-phone-top">
                <strong>
                  agrilink.
                </strong>
                <span>
                  ☰
                </span>
              </div>
              <small>
                SELAMAT PAGI, BUDI
              </small>
              <strong>
                Tumbuh lebih baik,
                <br />
                bersama.
              </strong>
              <div className="agri-harvest">
                <div className="harvest-shape" />
                <span>
                  Panen segar
                  <br />
                  <b>
                    Jelajahi pasar ↗
                  </b>
                </span>
              </div>
              <div className="agri-list">
                <span>
                  Tersedia hari ini
                </span>
                <p>
                  Sayuran organik{" "}
                  <b>
                    →
                  </b>
                </p>
                <p>
                  Buah lokal{" "}
                  <b>
                    →
                  </b>
                </p>
              </div>
            </div>
          </div>
          <span className="agri-side-note">
            TUMBUH DI SINI · TERHUBUNG KE SELURUH NEGERI
          </span>
        </div>
      )}
    </div>
  );
}
