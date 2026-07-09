import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import useReveal from "@/Components/useReveal";

const mitraData = [
    { icon: "🏥", nama: "Puskesmas Ciampea", ket: "Mitra layanan kesehatan" },
    { icon: "👮", nama: "Polsek Ciampea", ket: "Mitra layanan perlindungan" },
    {
        icon: "📚",
        nama: "Perpustakaan Kab. Bogor",
        ket: "Mitra literasi & numerasi",
    },
    {
        icon: "🏫",
        nama: "STKIP Muhammadiyah Bogor",
        ket: "Mitra perguruan tinggi",
    },
    {
        icon: "🌿",
        nama: "Tempat Wisata & Outbound",
        ket: "Mitra motorik & lingkungan",
    },
    { icon: "💛", nama: "Rasa Foundation", ket: "Mitra layanan pengasuhan" },
];

function Kontak() {
    useReveal();
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        email: "",
        subjek: "",
        pesan: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/kontak", {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            {/* PAGE HEADER */}
            <section className="relative overflow-hidden text-white text-center px-6 pt-[70px] pb-[50px] bg-gradient-to-br from-green-dark to-green-mid">
                <h1 className="font-fredoka text-[42px] mb-2">
                    Lokasi &amp; Kontak
                </h1>
                <p className="text-[17px] opacity-[0.88] font-semibold">
                    Temukan kami di Ciampea, Kabupaten Bogor
                </p>
                <div
                    className="absolute -bottom-0.5 left-0 right-0 h-10 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,40 Q300,0 600,30 Q900,60 1200,20 L1200,40Z' fill='%23f5f0e8'/%3E%3C/svg%3E\")",
                    }}
                />
            </section>

            <section className="pt-[60px] pb-20 bg-cream">
                <div className="max-w-[1100px] mx-auto px-7">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.13)] min-h-[480px] bg-white"
                        data-reveal="up"
                    >
                        {/* Kiri: Form */}
                        <div className="px-9 py-10 sm:px-5 sm:py-7 bg-[#eef2f7]">
                            <h2 className="font-fredoka text-[26px] text-brown-text mb-6">
                                Hubungi Kami
                            </h2>
                            {flash?.success ? (
                                <div className="bg-green-light rounded-xl px-6 py-8 text-center flex flex-col items-center gap-2.5">
                                    <span className="text-[40px]">✅</span>
                                    <p className="text-[15px] font-bold text-green-dark">
                                        {flash.success}
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-extrabold text-[#888] tracking-wide uppercase">
                                                NAMA LENGKAP
                                            </label>
                                            <input
                                                type="text"
                                                value={data.nama}
                                                onChange={(e) =>
                                                    setData(
                                                        "nama",
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Nama Anda"
                                                className="px-3.5 py-2.5 border-[1.5px] border-[#d8dde6] rounded-lg text-sm font-nunito font-semibold text-brown-text bg-white outline-none transition-all focus:border-green-mid focus:shadow-[0_0_0_3px_rgba(90,171,98,0.15)] placeholder:text-[#bbb]"
                                            />
                                            {errors.nama && (
                                                <span className="text-xs text-red-accent font-semibold">
                                                    {errors.nama}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-extrabold text-[#888] tracking-wide uppercase">
                                                EMAIL
                                            </label>
                                            <input
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Email Anda"
                                                className="px-3.5 py-2.5 border-[1.5px] border-[#d8dde6] rounded-lg text-sm font-nunito font-semibold text-brown-text bg-white outline-none transition-all focus:border-green-mid focus:shadow-[0_0_0_3px_rgba(90,171,98,0.15)] placeholder:text-[#bbb]"
                                            />
                                            {errors.email && (
                                                <span className="text-xs text-red-accent font-semibold">
                                                    {errors.email}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[11px] font-extrabold text-[#888] tracking-wide uppercase">
                                            SUBJEK
                                        </label>
                                        <input
                                            type="text"
                                            value={data.subjek}
                                            onChange={(e) =>
                                                setData(
                                                    "subjek",
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Misal: Info PPDB 2025/2026"
                                            className="px-3.5 py-2.5 border-[1.5px] border-[#d8dde6] rounded-lg text-sm font-nunito font-semibold text-brown-text bg-white outline-none transition-all focus:border-green-mid focus:shadow-[0_0_0_3px_rgba(90,171,98,0.15)] placeholder:text-[#bbb]"
                                        />
                                        {errors.subjek && (
                                            <span className="text-xs text-red-accent font-semibold">
                                                {errors.subjek}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[11px] font-extrabold text-[#888] tracking-wide uppercase">
                                            PESAN
                                        </label>
                                        <textarea
                                            value={data.pesan}
                                            onChange={(e) =>
                                                setData("pesan", e.target.value)
                                            }
                                            placeholder="Tulis pesan Anda di sini..."
                                            rows="5"
                                            className="px-3.5 py-2.5 border-[1.5px] border-[#d8dde6] rounded-lg text-sm font-nunito font-semibold text-brown-text bg-white outline-none transition-all resize-none focus:border-green-mid focus:shadow-[0_0_0_3px_rgba(90,171,98,0.15)] placeholder:text-[#bbb]"
                                        ></textarea>
                                        {errors.pesan && (
                                            <span className="text-xs text-red-accent font-semibold">
                                                {errors.pesan}
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="self-start bg-green-dark text-white border-none px-7 py-[13px] rounded-full font-fredoka text-base cursor-pointer shadow-btn-green tracking-wide transition-all hover:-translate-y-1 hover:shadow-[0_7px_0_#2a5e31] disabled:opacity-60"
                                    >
                                        {processing
                                            ? "Mengirim..."
                                            : "Kirim Pesan"}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Kanan: Maps */}
                        <div className="relative min-h-[300px] md:min-h-[420px]">
                            <iframe
                                title="Lokasi TK Manbaul Ulum Ciampea"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952!2d106.6879!3d-6.5458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c11b00000001%3A0x0!2zVEsgTWFuYmF1bCBVbHVtIENpYW1wZWE!5e0!3m2!1sid!2sid!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                className="absolute inset-0 w-full h-full block"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* INFO BAR */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-9 bg-white rounded-2xl px-8 py-7 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                        data-reveal="up"
                        data-delay="2"
                    >
                        <div className="flex items-start gap-3.5">
                            <div className="w-12 h-12 bg-green-dark rounded-full flex items-center justify-center text-xl shrink-0 shadow-[0_3px_0_#2a5e31]">
                                📍
                            </div>
                            <div>
                                <span className="block text-[11px] font-extrabold text-[#aaa] uppercase tracking-wide mb-0.5">
                                    Alamat
                                </span>
                                <span className="block text-[13px] font-bold text-brown-text leading-tight">
                                    Jl. Letnan Sukarna, Kp. Gedong RT 07/01,
                                    Desa Benteng, Ciampea, Kab. Bogor 16620
                                </span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3.5">
                            <div className="w-12 h-12 bg-green-dark rounded-full flex items-center justify-center text-xl shrink-0 shadow-[0_3px_0_#2a5e31]">
                                📞
                            </div>
                            <div>
                                <span className="block text-[11px] font-extrabold text-[#aaa] uppercase tracking-wide mb-0.5">
                                    Telepon
                                </span>
                                <span className="block text-[13px] font-bold text-brown-text leading-tight">
                                    0251-862325
                                    <br />
                                    0817 844 809
                                </span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3.5">
                            <div className="w-12 h-12 bg-green-dark rounded-full flex items-center justify-center text-xl shrink-0 shadow-[0_3px_0_#2a5e31]">
                                ✉️
                            </div>
                            <div>
                                <span className="block text-[11px] font-extrabold text-[#aaa] uppercase tracking-wide mb-0.5">
                                    Email
                                </span>
                                <span className="block text-[13px] font-bold text-brown-text leading-tight">
                                    tkmanbaul-ulum93@yahoo.co.id
                                </span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3.5">
                            <div className="w-12 h-12 bg-green-dark rounded-full flex items-center justify-center text-xl shrink-0 shadow-[0_3px_0_#2a5e31]">
                                🕐
                            </div>
                            <div>
                                <span className="block text-[11px] font-extrabold text-[#aaa] uppercase tracking-wide mb-0.5">
                                    Jam Buka
                                </span>
                                <span className="block text-[13px] font-bold text-brown-text leading-tight">
                                    Senin–Jumat
                                    <br />
                                    07.00–11.00 WIB
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* MITRA */}
                    <div className="mt-10" data-reveal="up">
                        <h2 className="font-fredoka text-[32px] text-green-dark text-center mb-5">
                            Jaringan Kemitraan
                        </h2>
                        <div
                            className="grid gap-3.5"
                            style={{
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(200px, 1fr))",
                            }}
                        >
                            {mitraData.map((m) => (
                                <div
                                    key={m.nama}
                                    className="bg-cream rounded-xl p-4 border-2 border-cream-dark text-center"
                                >
                                    <div className="text-[28px] mb-1.5">
                                        {m.icon}
                                    </div>
                                    <strong className="text-green-dark text-[13px] font-fredoka">
                                        {m.nama}
                                    </strong>
                                    <p className="text-[11px] text-gray-soft font-semibold mt-1">
                                        {m.ket}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

Kontak.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Kontak;
