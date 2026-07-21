import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import useReveal from "@/Components/useReveal";

const rapor2025 = [
    {
        label: "Proses Belajar Sesuai Anak Usia Dini",
        status: "Baik",
        naik: true,
        nilai: "+3.48 dari 2024",
    },
    {
        label: "Pembelajaran Membangun Kemampuan Fondasi",
        status: "Baik",
        naik: true,
        nilai: "+0.9 dari 2024",
    },
    {
        label: "Kemitraan dengan Orang Tua/Wali",
        status: "Baik",
        naik: false,
        nilai: "-6.8 dari 2024",
    },
];

const rencanaPeningkatan = [
    "Peningkatan profesionalisme pendidik melalui pelatihan berkelanjutan",
    "Pengembangan asesmen yang lebih responsif terhadap karakteristik anak",
    "Penguatan nilai kebangsaan melalui kegiatan Pra Siaga dan Polisi Sahabat",
    "Peningkatan kemitraan dengan orang tua melalui program parenting rutin",
];

function Prestasi({ prestasis }) {
    useReveal();
    return (
        <>
            <Head title="Prestasi" />

            {/* PAGE HEADER */}
            <section className="relative overflow-hidden text-white text-center px-6 pt-[70px] pb-[50px] bg-gradient-to-br from-green-dark to-green-mid">
                <h1 className="font-fredoka text-[42px] mb-2">
                    Prestasi &amp; Capaian
                </h1>
                <p className="text-[17px] opacity-[0.88] font-semibold">
                    Kebanggaan TK Manbaul Ulum Ciampea
                </p>
                <div
                    className="absolute -bottom-0.5 left-0 right-0 h-10 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,40 Q300,0 600,30 Q900,60 1200,20 L1200,40Z' fill='%23f5f0e8'/%3E%3C/svg%3E\")",
                    }}
                />
            </section>

            {/* PRESTASI LOMBA — dari database */}
            <section className="py-16 bg-white">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        🏆 Prestasi Lomba
                    </h2>
                    <p
                        className="text-center text-[#555] text-base font-semibold max-w-[680px] mx-auto mb-9"
                        data-reveal="up"
                    >
                        Kami bangga dengan pencapaian murid-murid TK Manbaul
                        Ulum yang telah mengharumkan nama sekolah di berbagai
                        ajang.
                    </p>

                    {prestasis.length === 0 ? (
                        <p
                            className="text-center text-gray-soft font-semibold"
                            data-reveal="up"
                        >
                            Belum ada data prestasi yang ditambahkan.
                        </p>
                    ) : (
                        <div
                            className="grid gap-[22px] mt-8"
                            style={{
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(280px, 1fr))",
                            }}
                        >
                            {prestasis.map((item, i) => (
                                <div
                                    key={item.id}
                                    className="relative bg-white rounded px-6 py-[26px] shadow-card border-t-[5px] border-green-mid transition-all hover:-translate-y-1.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
                                    data-reveal="scale"
                                    data-delay={(i % 6) + 1}
                                >
                                    <span className="inline-block bg-yellow text-brown-text font-extrabold text-xs px-3 py-[3px] rounded-full mb-2.5">
                                        {item.tahun}
                                    </span>
                                    <h3 className="font-fredoka text-lg text-green-dark mb-1.5">
                                        {item.judul}
                                    </h3>
                                    <p className="text-[13px] text-gray-soft font-semibold">
                                        {item.deskripsi}
                                    </p>
                                    {item.foto_url && (
                                        <img
                                            src={item.foto_url}
                                            alt={item.judul}
                                            className="w-full h-[140px] object-cover rounded mt-3"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* RAPOR PENDIDIKAN 2025 */}
            <section className="bg-[#e8f5e9] py-[60px]">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        📊 Rapor Pendidikan 2025
                    </h2>
                    <p
                        className="text-center text-[#555] text-base font-semibold max-w-[680px] mx-auto mb-9"
                        data-reveal="up"
                    >
                        Berdasarkan hasil Rapor Pendidikan Kemdikbud Ristek
                        tahun 2025, TK Manbaul Ulum menunjukkan capaian positif:
                    </p>
                    <div
                        className="grid gap-5 mt-7"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(240px, 1fr))",
                        }}
                    >
                        {rapor2025.map((r, i) => (
                            <div
                                key={r.label}
                                data-reveal="scale"
                                data-delay={i + 1}
                                className={`bg-white rounded-2xl p-6 shadow-[0_3px_12px_rgba(0,0,0,0.08)] border-t-4 ${r.naik ? "border-green-mid" : "border-red-accent"}`}
                            >
                                <div className="text-[28px] mb-2">
                                    {r.naik ? "📈" : "📉"}
                                </div>
                                <span
                                    className={`font-extrabold text-xs px-2.5 py-[3px] rounded-full ${r.naik ? "bg-green-light text-[#2d6a4f]" : "bg-[#fde8e8] text-[#b03d2e]"}`}
                                >
                                    {r.status}
                                </span>
                                <p className="font-bold text-brown-text text-sm my-2.5 leading-snug">
                                    {r.label}
                                </p>
                                <span className="text-xs text-gray-soft font-bold">
                                    {r.nilai}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div
                        className="bg-white rounded-2xl p-6 mt-6 shadow-[0_3px_12px_rgba(0,0,0,0.08)]"
                        data-reveal="up"
                    >
                        <h3 className="font-fredoka text-green-dark mb-3">
                            Rencana Peningkatan
                        </h3>
                        <ul className="flex flex-col gap-2">
                            {rencanaPeningkatan.map((item) => (
                                <li
                                    key={item}
                                    className="relative text-sm text-[#555] font-semibold pl-5"
                                >
                                    <span className="absolute left-0 text-green-mid">
                                        ✔
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* EKSTRAKURIKULER — dikosongkan dulu, belum ada data */}
        </>
    );
}

Prestasi.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Prestasi;
