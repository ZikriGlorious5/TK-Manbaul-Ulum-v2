import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import useReveal from "@/Components/useReveal";

const timelineData = [
    {
        tahun: "1993",
        judul: "Pendirian TK Manbaul Ulum",
        isi: "Didirikan oleh para tokoh masyarakat di Kp. Gedong Ciampea di bawah naungan Yayasan Pendidikan Islam Manbaul Ulum. Kepala sekolah pertama: Ibu Hj. Suyati (Alm).",
    },
    {
        tahun: "1997",
        judul: "Izin Operasional Resmi",
        isi: "Mendapatkan izin operasional resmi No. 165/102.1/Kep/OT/1997. Yayasan terdaftar di Kemenhukam.",
    },
    {
        tahun: "2000–2008",
        judul: "Masa Pengembangan",
        isi: "Dipimpin oleh Ibu Sumijati A.Ma (s.d 2000) lalu Dra. Hj. Farida Ulfah (s.d 2008). Jumlah siswa terus bertambah.",
    },
    {
        tahun: "2004–Sekarang",
        judul: "Era ST. Faoziyah Ulfah, M.Pd.I",
        isi: "Di bawah kepemimpinan Ibu ST. Faoziyah Ulfah, sekolah berkembang pesat: fasilitas modern, akreditasi B, dan penerapan Kurikulum Merdeka.",
    },
    {
        tahun: "2023",
        judul: "Kurikulum Merdeka Berubah",
        isi: "TK Manbaul Ulum resmi menerapkan opsi Merdeka Berubah dengan model sentra: Sentra Seni, Imtaq, Persiapan, dan Kelas Bahan Alam.",
    },
    {
        tahun: "2025–2026",
        judul: "Tahun Pelajaran Terkini",
        isi: "KSP 2025/2026 resmi diberlakukan. Melayani 54 siswa aktif dengan 8 tenaga pendidik dan menerapkan 7 Pembiasaan Anak Indonesia Hebat.",
    },
];

const misiList = [
    "Membiasakan anak senang membaca dan berbagi pengetahuannya",
    "Mewujudkan anak yang berakhlakul karimah dan berperilaku baik",
    "Mewujudkan anak yang sehat jasmani sesuai fase tumbuh kembangnya",
    "Mewujudkan anak memiliki rasa tanggung jawab terhadap kebersihan diri dan lingkungan",
    "Mewujudkan anak yang cerdas, kreatif, dan berkarya sesuai imajinasinya",
    "Mewujudkan anak mandiri yang siap ke pendidikan tingkat dasar",
];

function Sejarah({ gurus }) {
    useReveal();
    return (
        <>
            <Head title="Sejarah" />

            {/* PAGE HEADER */}
            <section className="relative overflow-hidden text-white text-center px-6 pt-[70px] pb-[50px] bg-gradient-to-br from-green-dark to-green-mid">
                <h1 className="font-fredoka text-[42px] mb-2">
                    Profil &amp; Sejarah
                </h1>
                <p className="text-[17px] opacity-[0.88] font-semibold">
                    Lebih dari 30 tahun melayani pendidikan anak usia dini di
                    Ciampea
                </p>
                <div
                    className="absolute -bottom-0.5 left-0 right-0 h-10 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,40 Q300,0 600,30 Q900,60 1200,20 L1200,40Z' fill='%23f5f0e8'/%3E%3C/svg%3E\")",
                    }}
                />
            </section>

            {/* IDENTITAS SEKOLAH */}
            <section className="py-16 bg-white">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        Identitas Sekolah
                    </h2>
                    <div
                        className="grid gap-6 mt-8"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(280px, 1fr))",
                        }}
                    >
                        <div
                            className="bg-[#e8f5e9] border-2 border-[#c8e6c9] rounded shadow-card p-7"
                            data-reveal="left"
                        >
                            <h3 className="font-fredoka text-green-dark text-xl mb-4">
                                Data Pokok
                            </h3>
                            <ul>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Nama: <strong>TK. Manbaul Ulum</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    NPSN: <strong>69868417</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Status: <strong>Swasta / Yayasan</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Akreditasi: <strong>B</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Izin Operasional:{" "}
                                    <strong>165/102.1/Kep/OT/1997</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    No. Telepon: <strong>0251-862325</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Email:{" "}
                                    <strong>
                                        tkmanbaul_ulum93@yahoo.co.id
                                    </strong>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="bg-[#e3f2fd] border-2 border-[#bbdefb] rounded shadow-card p-7"
                            data-reveal="right"
                        >
                            <h3 className="font-fredoka text-green-dark text-xl mb-4">
                                Alamat &amp; Lokasi
                            </h3>
                            <ul>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Jl. Letnan Sukarna, Kp. Gedong
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    RT 07/RW 01, Desa Benteng
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Kec. Ciampea, Kab. Bogor
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Jawa Barat, 16620
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Lintang: <strong>-6.545979</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Bujur: <strong>106.691594</strong>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="bg-[#fffde7] border-2 border-[#fff9c4] rounded shadow-card p-7"
                            data-reveal="up"
                        >
                            <h3 className="font-fredoka text-green-dark text-xl mb-4">
                                Data Siswa 2025
                            </h3>
                            <ul>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Laki-laki: <strong>31 siswa</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Perempuan: <strong>23 siswa</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Total: <strong>54 siswa aktif</strong>
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Kelompok A (usia 4-5 th): Kelas Bahan Alam
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Kelompok B (usia 5-6 th): Sentra Seni,
                                    Imtaq, Persiapan
                                </li>
                                <li className="text-sm text-[#555] py-1.5 border-b border-cream-dark flex items-center gap-2 before:content-['✔'] before:text-green-mid before:font-extrabold before:text-xs">
                                    Bank BOS: <strong>BPD Jabar Banten</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISI MISI */}
            <section className="py-[70px] bg-cream-dark">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        Visi &amp; Misi
                    </h2>
                    <div
                        className="grid gap-7 mt-8"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(280px, 1fr))",
                        }}
                    >
                        <div
                            className="bg-green-dark text-white rounded shadow-card p-[30px]"
                            data-reveal="left"
                        >
                            <h3 className="font-fredoka text-[22px] mb-3.5 text-yellow">
                                🌟 Visi
                            </h3>
                            <p className="text-base leading-[1.8] italic text-white/90 font-semibold">
                                "Menuju Insan Pembelajar, Cerdas, Mandiri dan
                                Berkarakter yang siap melanjutkan menuju
                                pendidikan tingkat Dasar"
                            </p>
                        </div>
                        <div
                            className="bg-white rounded shadow-card p-[30px]"
                            data-reveal="right"
                        >
                            <h3 className="font-fredoka text-[22px] mb-3.5 text-green-dark">
                                🎯 Misi
                            </h3>
                            <ul className="flex flex-col gap-2.5">
                                {misiList.map((item) => (
                                    <li
                                        key={item}
                                        className="relative text-sm font-semibold text-[#555] pl-5 before:content-['🌱'] before:absolute before:left-0 before:text-sm"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section className="py-16 bg-white">
                <div className="max-w-[800px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        Perjalanan Sejarah
                    </h2>
                    <div className="relative pl-7 border-l-[3px] border-dashed border-green-mid my-9">
                        {timelineData.map((item, i) => (
                            <div
                                className="relative mb-8 last:mb-0"
                                key={item.tahun}
                                data-reveal="left"
                                data-delay={(i % 3) + 1}
                            >
                                <span className="absolute -left-[38px] top-1 w-[18px] h-[18px] bg-yellow border-[3px] border-green-dark rounded-full" />
                                <div className="font-fredoka text-[15px] text-red-accent mb-1">
                                    {item.tahun}
                                </div>
                                <h3 className="text-lg font-extrabold text-green-dark mb-1.5">
                                    {item.judul}
                                </h3>
                                <p className="text-[15px] text-[#555] font-semibold">
                                    {item.isi}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DATA GURU — sekarang dari database */}
            <section className="py-[70px] bg-cream-dark">
                <div className="max-w-[1100px] mx-auto px-7">
                    <h2
                        className="font-fredoka text-[32px] text-green-dark text-center mb-2.5"
                        data-reveal="up"
                    >
                        Tenaga Pendidik &amp; Kependidikan
                    </h2>
                    <div
                        className="grid gap-[18px] mt-8"
                        style={{
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(240px, 1fr))",
                        }}
                    >
                        {gurus.map((g, i) => (
                            <div
                                key={g.id}
                                data-reveal="scale"
                                data-delay={(i % 4) + 1}
                                className="bg-white rounded-[14px] px-[18px] py-5 shadow-[0_3px_12px_rgba(0,0,0,0.08)] border-t-4 border-green-mid"
                            >
                                <div className="text-[32px] mb-2">👩‍🏫</div>
                                <strong className="text-green-dark font-fredoka text-[15px] block">
                                    {g.nama}
                                </strong>
                                <span className="text-xs text-red-accent font-extrabold block my-1">
                                    {g.jabatan}
                                </span>
                                <span className="text-xs text-gray-soft font-semibold">
                                    {g.bio}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

Sejarah.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Sejarah;
