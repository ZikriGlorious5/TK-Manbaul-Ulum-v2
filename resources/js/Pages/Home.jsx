import React from "react";
import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import useReveal from "@/Components/useReveal";

const howSteps = [
    {
        icon: "📋",
        label: "Daftar & Seleksi",
        desc: "Hubungi kami untuk info PPDB dan jadwal seleksi",
    },
    {
        icon: "🏫",
        label: "Masa Perkenalan",
        desc: "MPLS — adaptasi lingkungan sekolah bersama guru",
    },
    {
        icon: "🎮",
        label: "Merdeka Bermain",
        desc: "Belajar lewat bermain bermakna di 4 sentra",
    },
    {
        icon: "🌟",
        label: "Tumbuh & Berkembang",
        desc: "Anak siap melanjutkan ke jenjang pendidikan dasar",
    },
];

const fasilitasList = [
    {
        label: "Smartboard Interaktif",
        desc: "Media belajar digital di setiap kelas",
    },
    { label: "Ayunan (3 unit)", desc: "Area bermain motorik kasar" },
    { label: "Trampolin", desc: "Stimulasi keseimbangan tubuh anak" },
    {
        label: "Sepeda (4 unit) & Skuter (4 unit)",
        desc: "Melatih koordinasi dan keberanian",
    },
    {
        label: "Papan Luncur & Jungkat-jungkit",
        desc: "Playground lengkap dan aman",
    },
    {
        label: "Pojok Baca (2 unit)",
        desc: "Menumbuhkan minat literasi sejak dini",
    },
];

const sentraList = [
    {
        icon: "🎨",
        name: "Sentra Seni",
        desc: "Mengembangkan kreativitas dan ekspresi diri melalui melukis, kolase, dan kerajinan.",
    },
    {
        icon: "🕌",
        name: "Sentra Imtaq",
        desc: "Penanaman nilai agama Islam, hafalan doa, surat pendek, dan pembiasaan ibadah.",
    },
    {
        icon: "✏️",
        name: "Sentra Persiapan",
        desc: "Pengenalan literasi, numerasi, dan kesiapan memasuki pendidikan dasar.",
    },
    {
        icon: "🌿",
        name: "Kelas Bahan Alam",
        desc: "Eksplorasi alam sekitar, sains sederhana, dan kecintaan lingkungan hidup.",
    },
];

const pembiasaanList = [
    { e: "🌅", t: "Bangun Pagi", d: "Tiba di sekolah tepat waktu" },
    { e: "🕌", t: "Beribadah", d: "Pembiasaan sholat & doa harian" },
    { e: "🤸", t: "Berolahraga", d: "Senam & gerak lagu setiap hari" },
    { e: "🥗", t: "Makan Sehat", d: "Bekal bergizi & program makan bersama" },
    { e: "📚", t: "Gemar Belajar", d: "Jurnal pagi & pojok baca" },
    { e: "🤝", t: "Bermasyarakat", d: "Berkeliling lingkungan & camping day" },
    { e: "🌙", t: "Tidur Cepat", d: "Koordinasi dengan orang tua via WA" },
];

function Home() {
    useReveal();
    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden flex items-center min-h-[88vh] py-[60px] bg-gradient-to-br from-[#1b4332] via-[#2d6a4f] to-[#a8d8b0]">
                <div
                    className="absolute bottom-0 left-0 right-0 h-[60px] bg-no-repeat bg-cover bg-bottom"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 60'%3E%3Cpath d='M0,60 L0,35 Q100,5 200,30 Q300,55 400,28 Q500,0 600,30 Q700,58 800,28 Q900,0 1000,30 Q1100,58 1200,30 L1200,60Z' fill='%23f5f0e8'/%3E%3C/svg%3E\")",
                    }}
                />
                <div
                    className="absolute rounded-full opacity-[0.18] pointer-events-none bg-white"
                    style={{ width: 200, height: 200, top: "10%", right: "5%" }}
                />
                <div
                    className="absolute rounded-full opacity-[0.18] pointer-events-none bg-white"
                    style={{
                        width: 120,
                        height: 120,
                        bottom: "20%",
                        left: "3%",
                    }}
                />

                <div className="relative z-[2] max-w-[1100px] mx-auto px-7 flex items-center gap-10 flex-wrap">
                    <div className="flex-1 min-w-[340px] text-white">
                        <span className="inline-block bg-yellow text-brown-text font-extrabold text-xs px-3.5 py-1 rounded-full mb-4 uppercase tracking-wide">
                            ✨ Kurikulum Merdeka — Merdeka Bermain
                        </span>
                        <h1
                            data-reveal="up"
                            className="font-fredoka text-[54px] leading-[1.1] mb-4.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
                        >
                            Selamat Datang di
                            <br />
                            TK Manbaul Ulum
                        </h1>
                        <p
                            data-reveal="up"
                            data-delay="1"
                            className="text-lg opacity-[0.92] mb-8 font-semibold max-w-[480px]"
                        >
                            Membentuk generasi cerdas, mandiri, dan berakhlakul
                            karimah sejak usia dini.
                            <br />
                            Berdiri sejak 1993 di Ciampea, Kabupaten Bogor.
                        </p>
                        <div
                            className="flex gap-3.5 flex-wrap"
                            data-reveal="up"
                            data-delay="2"
                        >
                            <Link
                                href="/kontak"
                                className="inline-block bg-red-accent text-white px-[30px] py-[13px] rounded-full font-extrabold text-[15px] shadow-btn-cta uppercase tracking-wide transition-all hover:-translate-y-1 hover:shadow-btn-cta-hover"
                            >
                                Daftar Siswa Baru
                            </Link>
                            <Link
                                href="/sejarah"
                                className="inline-block border-2 border-white text-white px-[30px] py-[13px] rounded-full font-bold text-[15px] transition-colors hover:bg-white/15"
                            >
                                Tentang Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CARA KERJA */}
            <section className="py-[70px] bg-white">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        Bagaimana Cara Bergabung?
                    </h2>
                    <p
                        className="text-center text-gray-soft text-[15px] max-w-[600px] mx-auto mb-9 font-semibold"
                        data-reveal="up"
                        data-delay="1"
                    >
                        Proses pendaftaran mudah dan transparan — kami siap
                        membantu setiap langkahnya
                    </p>
                    <div
                        className="grid gap-5 mt-9"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(200px, 1fr))",
                        }}
                    >
                        {howSteps.map((s, i) => (
                            <div
                                className="relative bg-cream rounded border-2 border-cream-dark text-center px-5 py-7 transition-all hover:-translate-y-1.5 hover:shadow-card"
                                key={s.label}
                                data-reveal="up"
                                data-delay={i + 1}
                            >
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-accent text-white w-7 h-7 rounded-full text-[13px] font-extrabold flex items-center justify-center shadow-[0_2px_0_#b03d2e]">
                                    {i + 1}
                                </div>
                                <div className="text-[52px] my-2.5 mb-3.5">
                                    {s.icon}
                                </div>
                                <h3 className="font-fredoka text-base text-brown-text uppercase tracking-wide">
                                    {s.label}
                                </h3>
                                <p className="text-[13px] text-[#666] mt-2 font-semibold">
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROFIL & FASILITAS */}
            <section className="py-[70px] bg-cream">
                <div className="max-w-[1100px] mx-auto px-7">
                    <div
                        className="grid gap-8"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(300px, 1fr))",
                        }}
                    >
                        <div
                            className="bg-[#e8f5e9] border-2 border-[#c8e6c9] rounded shadow-card p-7"
                            data-reveal="left"
                        >
                            <h2 className="font-fredoka text-2xl text-green-dark mb-3">
                                Tentang TK Manbaul Ulum
                            </h2>
                            <p className="text-[15px] text-[#555] mb-3">
                                Didirikan tahun <strong>1993</strong> di bawah
                                naungan Yayasan Pendidikan Islam Manbaul Ulum,
                                TK Manbaul Ulum telah melayani pendidikan anak
                                usia dini di Kp. Gedong, Ciampea, Kabupaten
                                Bogor selama lebih dari 30 tahun.
                            </p>
                            <h3 className="text-[15px] font-extrabold text-green-mid mt-4 mb-2">
                                📊 Data Sekolah 2025/2026
                            </h3>
                            <ul>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    NPSN: <strong>69868417</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Akreditasi: <strong>B</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Siswa aktif: <strong>54 siswa</strong> (31
                                    L, 23 P)
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Tenaga pendidik: <strong>8 orang</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Kurikulum: <strong>Merdeka Berubah</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Kepala TK:{" "}
                                    <strong>ST. Faoziyah Ulfah, M.Pd.I</strong>
                                </li>
                            </ul>
                            <Link
                                href="/sejarah"
                                className="text-green-dark font-extrabold text-sm inline-flex items-center gap-1 hover:underline mt-4"
                            >
                                Baca Selengkapnya →
                            </Link>
                        </div>

                        <div
                            className="bg-[#e3f2fd] border-2 border-[#bbdefb] rounded shadow-card p-7"
                            data-reveal="right"
                        >
                            <h2 className="font-fredoka text-2xl text-green-dark mb-3">
                                Fasilitas Pembelajaran
                            </h2>
                            <p className="text-[15px] text-[#555] mb-3">
                                Sarana lengkap untuk mendukung tumbuh kembang
                                optimal anak:
                            </p>
                            <ul>
                                {fasilitasList.map((f) => (
                                    <li
                                        key={f.label}
                                        className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs"
                                    >
                                        <span>
                                            <strong>{f.label}:</strong> {f.desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 SENTRA */}
            <section className="py-[70px] bg-green-light">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        4 Sentra Pembelajaran
                    </h2>
                    <p
                        className="text-center text-gray-soft text-[15px] max-w-[600px] mx-auto mb-9 font-semibold"
                        data-reveal="up"
                        data-delay="1"
                    >
                        Model sentra mendorong anak belajar sesuai minat dan
                        tahap perkembangannya
                    </p>
                    <div
                        className="grid gap-3.5 mt-8"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(210px, 1fr))",
                        }}
                    >
                        {sentraList.map((s, i) => (
                            <div
                                key={s.name}
                                data-reveal="scale"
                                data-delay={i + 1}
                                className="bg-white rounded-[14px] px-[22px] py-5 shadow-[0_3px_12px_rgba(0,0,0,0.08)] border-l-4 border-green-mid"
                            >
                                <div className="text-[36px] mb-2.5">
                                    {s.icon}
                                </div>
                                <strong className="font-fredoka text-green-dark text-base">
                                    {s.name}
                                </strong>
                                <p className="text-[13px] text-[#666] mt-1.5 font-semibold leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KEUNGGULAN */}
            <section className="py-[70px] bg-white">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        7 Pembiasaan Anak Hebat
                    </h2>
                    <p
                        className="text-center text-gray-soft text-[15px] max-w-[600px] mx-auto mb-9 font-semibold"
                        data-reveal="up"
                    >
                        Program harian membentuk karakter Profil Pelajar
                        Pancasila
                    </p>
                    <div
                        className="grid gap-4 mt-7"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(200px, 1fr))",
                        }}
                    >
                        {pembiasaanList.map((item, i) => (
                            <div
                                key={item.t}
                                data-reveal="scale"
                                data-delay={(i % 4) + 1}
                                className="bg-cream rounded-xl px-4 py-[18px] text-center border-2 border-cream-dark transition-transform"
                            >
                                <div className="text-[36px] mb-2">{item.e}</div>
                                <strong className="font-fredoka text-green-dark text-sm">
                                    {item.t}
                                </strong>
                                <p className="text-xs text-gray-soft mt-1 font-semibold">
                                    {item.d}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOKASI */}
            <section className="py-[70px] bg-cream">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        Lokasi Sekolah
                    </h2>
                    <div
                        className="grid gap-8 items-start mt-8"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(280px, 1fr))",
                        }}
                    >
                        <div data-reveal="left">
                            <h2 className="font-fredoka text-2xl text-green-dark mb-4">
                                Temukan Kami di Ciampea
                            </h2>
                            <p className="text-[#555] mb-3 font-semibold">
                                📍 Jl. Letnan Sukarna, Kp. Gedong RT 07/01,
                                <br />
                                Desa Benteng, Kec. Ciampea, Kab. Bogor 16620
                            </p>
                            <p className="text-[#555] mb-3 font-semibold">
                                📞 0251-862325 / 0817 844 809
                            </p>
                            <p className="text-[#555] mb-3 font-semibold">
                                ✉️ tkmanbaul-ulum93@yahoo.co.id
                            </p>
                            <p className="text-[#555] mb-3 font-semibold">
                                🕐 Senin–Jumat, 07.00–11.00 WIB
                            </p>
                            <div className="flex gap-3 flex-wrap mt-4">
                                href="https://wa.me/6281289695442"
                                className="inline-block bg-[#25D366] text-white
                                px-[22px] py-[11px] rounded-full font-extrabold
                                text-sm shadow-btn-wa transition-transform
                                hover:-translate-y-0.5" target="_blank"
                                rel="noreferrer"
                                <a>Chat WhatsApp</a>
                                href="https://maps.google.com/?q=-6.545979,106.691594"
                                className="inline-block bg-yellow
                                text-brown-text px-[22px] py-[11px] rounded-full
                                font-extrabold text-sm shadow-btn-download
                                transition-transform hover:-translate-y-0.5"
                                target="_blank" rel="noreferrer"
                                <a>Buka di Maps</a>
                            </div>
                        </div>
                        <div
                            className="h-[260px] bg-green-light rounded flex items-center justify-center text-green-dark text-[15px] font-bold border-2 border-dashed border-green-mid"
                            data-reveal="right"
                        >
                            <iframe
                                title="Lokasi TK Manbaul Ulum"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963!2d106.6897!3d-6.5458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c11b7e3c1b1d%3A0x0!2zVEsgTWFuYmF1bCBVbHVtIENpYW1wZWE!5e0!3m2!1sid!2sid"
                                width="100%"
                                height="260"
                                style={{ border: 0, borderRadius: 12 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-0 overflow-visible text-center bg-red-accent px-6 pt-20 pb-[90px]">
                <div
                    className="absolute -top-[38px] left-0 right-0 h-10 bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 40' preserveAspectRatio='none'%3E%3Cpath d='M0,0 C240,40 480,40 720,20 C960,0 1200,0 1440,30 L1440,0 Z' fill='%23e05c4b'/%3E%3C/svg%3E\")",
                        backgroundSize: "100% 100%",
                    }}
                />
                <div
                    className="absolute -bottom-[38px] left-0 right-0 h-10 bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 40' preserveAspectRatio='none'%3E%3Cpath d='M0,40 C240,0 480,0 720,20 C960,40 1200,40 1440,10 L1440,40 Z' fill='%23e05c4b'/%3E%3C/svg%3E\")",
                        backgroundSize: "100% 100%",
                    }}
                />
                <div
                    className="relative z-[1] max-w-[1100px] mx-auto px-7"
                    data-reveal="up"
                >
                    <h2 className="font-fredoka text-[34px] text-white mb-3">
                        Ajak Anak Anda Bergabung Bersama Kami!
                    </h2>
                    <p className="text-base text-white/[0.92] mb-7 font-semibold">
                        Daftarkan putra-putri Anda sekarang dan berikan
                        pendidikan terbaik sejak dini.
                    </p>
                    <Link
                        href="/kontak"
                        className="inline-block bg-white text-red-accent px-9 py-[13px] rounded-full font-extrabold text-[15px] shadow-[0_4px_0_rgba(0,0,0,0.18)] uppercase tracking-wide transition-all hover:-translate-y-1 hover:shadow-[0_7px_0_rgba(0,0,0,0.18)]"
                    >
                        Daftar Sekarang
                    </Link>
                </div>
            </section>
        </>
    );
}

Home.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
