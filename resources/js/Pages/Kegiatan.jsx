import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import useReveal from "@/Components/useReveal";

const intraData = [
    {
        icon: "🎨",
        title: "Sentra Seni",
        color: "bg-[#fffde7] border-[#fff9c4]",
        desc: "Menempel, menggambar, mewarnai, kolase, dan kerajinan tangan. Mengekspresikan imajinasi melalui berbagai media seni.",
        delay: 1,
    },
    {
        icon: "🕌",
        title: "Sentra Imtaq",
        color: "bg-[#e8f5e9] border-[#c8e6c9]",
        desc: "Hafalan doa harian, surat-surat pendek, praktek sholat berjamaah, dan pengenalan ajaran Islam yang menyenangkan.",
        delay: 2,
    },
    {
        icon: "✏️",
        title: "Sentra Persiapan",
        color: "bg-[#e3f2fd] border-[#bbdefb]",
        desc: "Pengenalan huruf, angka, pramembaca dan pramenulis. Menyiapkan anak memasuki jenjang pendidikan dasar.",
        delay: 3,
    },
    {
        icon: "🌿",
        title: "Kelas Bahan Alam",
        color: "bg-[#e8f5e9] border-[#c8e6c9]",
        desc: "Eksplorasi alam, berkebun, menanam biji, dan sains sederhana. Menumbuhkan kecintaan anak pada lingkungan.",
        delay: 4,
    },
    {
        icon: "🤸",
        title: "Gerak & Lagu",
        color: "bg-[#fffde7] border-[#fff9c4]",
        desc: "Senam anak hebat setiap Rabu, gerak dan lagu harian, serta pengembangan motorik kasar bersama.",
        delay: 5,
    },
];

const proyekData = [
    {
        semester: "Semester 1",
        judul: "Indonesia Tanah Airku",
        topik: "Negaraku",
        alokasi: "30 JP",
        desc: "Dalam rangka HUT RI, anak mengenal sejarah kemerdekaan, budaya Indonesia, lagu nasional, dan menumbuhkan kecintaan terhadap Tanah Air.",
        dimensi: "Beriman & Bertakwa + Berkebhinekaan Global",
    },
    {
        semester: "Semester 2",
        judul: "Daur Ulang Sampah & Bank Sampah",
        topik: "Lingkungan",
        alokasi: "15 JP",
        desc: "Anak belajar membedakan sampah organik dan anorganik, membuat bank sampah mini, dan mencintai lingkungan sekitar sekolah.",
        dimensi: "Beriman & Bertakwa + Gotong Royong + Kreatif",
    },
];

const pembiasaanBulanan = [
    {
        kegiatan: "Makan Sehat Bersama",
        waktu: "Minggu ke-3 setiap bulan",
        ket: "Menu buah, susu, dan bekal sehat bersama orang tua",
    },
    {
        kegiatan: "Makanan Tambahan Kebun",
        waktu: "Rabu minggu pertama",
        ket: "Ubi jalar, jagung, biji-bijian dari hasil kebun sekolah",
    },
    {
        kegiatan: "Puncak Tema",
        waktu: "Akhir setiap tema",
        ket: "Kunjungan atau kegiatan puncak di dalam/luar sekolah",
    },
    {
        kegiatan: "Operasi Bersih (Osih Kasih)",
        waktu: "Setiap tanggal 17",
        ket: "Membersihkan loker, alat main, dan kelas bersama",
    },
    {
        kegiatan: "Penimbangan & Pengukuran",
        waktu: "Selasa minggu pertama",
        ket: "Cek berat dan tinggi badan bersama tim Posyandu",
    },
];

const kemisNyundaItems = [
    "🗣️ Percakapan Basa Sunda",
    "🎵 Lagu Daerah Sunda",
    "👘 Pakaian Adat Sunda",
    "🎶 Alat Musik Angklung",
    "🕺 Tarian Daerah Sunda",
    "📖 Cerita & Dongeng Sunda",
];

function Kegiatan({ kegiatans }) {
    useReveal();
    return (
        <>
            <Head title="Kegiatan" />

            {/* PAGE HEADER */}
            <section className="relative overflow-hidden text-white text-center px-6 pt-[70px] pb-[50px] bg-gradient-to-br from-green-dark to-green-mid">
                <h1 className="font-fredoka text-[42px] mb-2">
                    Kegiatan Pembelajaran
                </h1>
                <p className="text-[17px] opacity-[0.88] font-semibold">
                    Merdeka Bermain — karena bermain adalah belajar
                </p>
                <div
                    className="absolute -bottom-0.5 left-0 right-0 h-10 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,40 Q300,0 600,30 Q900,60 1200,20 L1200,40Z' fill='%23f5f0e8'/%3E%3C/svg%3E\")",
                    }}
                />
            </section>

            {/* 4 SENTRA */}
            <section className="py-16 bg-white">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        Program Intrakurikuler
                    </h2>
                    <p
                        className="text-center text-[#555] text-base font-semibold max-w-[680px] mx-auto mb-9"
                        data-reveal="up"
                    >
                        Di TK Manbaul Ulum, pembelajaran menggunakan{" "}
                        <strong>model sentra</strong> — pendekatan yang
                        menempatkan anak sebagai pusat belajar dan bermain
                        bermakna sesuai minatnya.
                    </p>
                    <div
                        className="grid gap-6"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(280px, 1fr))",
                        }}
                    >
                        {intraData.map((item) => (
                            <div
                                key={item.title}
                                className={`rounded p-7 shadow-card border-2 transition-all hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] ${item.color}`}
                                data-reveal="scale"
                                data-delay={item.delay}
                            >
                                <span className="text-[44px] block mb-3.5">
                                    {item.icon}
                                </span>
                                <h3 className="font-fredoka text-xl text-green-dark mb-2.5">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[#666] font-semibold leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KEMIS NYUNDA */}
            <section className="bg-[#e8f5e9] py-[60px]">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        🎎 Program Kemis Nyunda
                    </h2>
                    <p
                        className="text-center text-[#555] text-base font-semibold max-w-[680px] mx-auto mb-9"
                        data-reveal="up"
                    >
                        Setiap hari <strong>Kamis</strong>, seluruh warga
                        sekolah mengenakan pakaian adat Sunda dan menggunakan
                        Bahasa Sunda dalam kegiatan belajar — sebagai bentuk
                        cinta budaya lokal Kabupaten Bogor.
                    </p>
                    <div
                        className="grid gap-4 mt-7"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(200px, 1fr))",
                        }}
                    >
                        {kemisNyundaItems.map((item, i) => (
                            <div
                                key={item}
                                data-reveal="up"
                                data-delay={(i % 3) + 1}
                                className="bg-white rounded-xl p-4 text-center font-bold text-sm text-green-dark shadow-[0_2px_8px_rgba(0,0,0,0.07)]"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROYEK KOKURIKULER */}
            <section className="py-16 bg-cream">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        Proyek Kokurikuler P5
                    </h2>
                    <p
                        className="text-center text-[#555] text-base font-semibold max-w-[680px] mx-auto mb-9"
                        data-reveal="up"
                    >
                        Dua proyek besar per tahun untuk memperkuat Profil
                        Pelajar Pancasila
                    </p>
                    <div
                        className="grid gap-6 mt-7"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(300px, 1fr))",
                        }}
                    >
                        {proyekData.map((p, i) => (
                            <div
                                key={p.judul}
                                data-reveal={i % 2 === 0 ? "left" : "right"}
                                className="bg-white rounded-2xl p-7 shadow-[0_4px_18px_rgba(0,0,0,0.09)] border-t-[5px] border-red-accent"
                            >
                                <span className="bg-[#fde68a] text-brown-text font-extrabold text-[11px] px-3 py-[3px] rounded-full uppercase">
                                    {p.semester}
                                </span>
                                <h3 className="font-fredoka text-xl text-green-dark my-3">
                                    {p.judul}
                                </h3>
                                <p className="text-sm text-[#666] mb-3 leading-[1.7] font-semibold">
                                    {p.desc}
                                </p>
                                <div className="text-xs text-gray-soft font-bold">
                                    ⏱ {p.alokasi} &nbsp;|&nbsp; 🌿 {p.dimensi}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PEMBIASAAN BULANAN */}
            <section className="py-16 bg-white">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        Pembiasaan Bulanan
                    </h2>
                    <div className="flex flex-col gap-3.5 mt-7">
                        {pembiasaanBulanan.map((p, i) => (
                            <div
                                key={p.kegiatan}
                                data-reveal="left"
                                data-delay={(i % 3) + 1}
                                className="flex gap-5 items-center bg-cream rounded-xl px-5 py-4 border-l-4 border-green-mid"
                            >
                                <div className="min-w-[48px] h-12 bg-green-dark rounded-full flex items-center justify-center text-xl text-white shrink-0">
                                    📅
                                </div>
                                <div>
                                    <strong className="text-green-dark font-fredoka text-base">
                                        {p.kegiatan}
                                    </strong>
                                    <div className="text-xs text-red-accent font-extrabold my-0.5">
                                        {p.waktu}
                                    </div>
                                    <div className="text-[13px] text-[#666] font-semibold">
                                        {p.ket}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOKUMENTASI KEGIATAN — dari database, editable admin */}
            <section className="py-16 bg-cream-dark">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        Dokumentasi Kegiatan Terbaru
                    </h2>
                    <p
                        className="text-center text-[#555] text-base font-semibold max-w-[680px] mx-auto mb-9"
                        data-reveal="up"
                    >
                        Momen-momen kegiatan sekolah yang sudah berlangsung
                    </p>

                    {kegiatans.length === 0 ? (
                        <p
                            className="text-center text-gray-soft font-semibold"
                            data-reveal="up"
                        >
                            Belum ada dokumentasi kegiatan yang ditambahkan.
                        </p>
                    ) : (
                        <div
                            className="grid gap-6"
                            style={{
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(280px, 1fr))",
                            }}
                        >
                            {kegiatans.map((k, i) => (
                                <div
                                    key={k.id}
                                    data-reveal="scale"
                                    data-delay={(i % 3) + 1}
                                    className="bg-white rounded-2xl overflow-hidden shadow-card border-2 border-cream-dark"
                                >
                                    {k.foto_url && (
                                        <img
                                            src={k.foto_url}
                                            alt={k.judul}
                                            className="w-full h-[180px] object-cover"
                                        />
                                    )}
                                    <div className="p-5">
                                        <div className="text-xs text-red-accent font-extrabold mb-1">
                                            {new Date(
                                                k.tanggal,
                                            ).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </div>
                                        <h3 className="font-fredoka text-lg text-green-dark mb-1.5">
                                            {k.judul}
                                        </h3>
                                        <p className="text-sm text-[#666] font-semibold">
                                            {k.deskripsi}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

Kegiatan.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Kegiatan;
