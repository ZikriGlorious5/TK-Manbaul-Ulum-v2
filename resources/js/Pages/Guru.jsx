import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import useReveal from "@/Components/useReveal";

function Guru({ gurus }) {
    useReveal();
    return (
        <>
            <Head title="Guru & Tenaga Kependidikan" />

            {/* PAGE HEADER */}
            <section className="relative overflow-hidden text-white text-center px-6 pt-[70px] pb-[50px] bg-gradient-to-br from-green-dark to-green-mid">
                <h1 className="font-fredoka text-[42px] mb-2">
                    Guru &amp; Tenaga Kependidikan
                </h1>
                <p className="text-[17px] opacity-[0.88] font-semibold">
                    Pendidik yang berdedikasi untuk tumbuh kembang anak
                </p>
                <div
                    className="absolute -bottom-0.5 left-0 right-0 h-10 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,40 Q300,0 600,30 Q900,60 1200,20 L1200,40Z' fill='%23f5f0e8'/%3E%3C/svg%3E\")",
                    }}
                />
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-[1100px] mx-auto px-7">
                    {gurus.length === 0 ? (
                        <p
                            className="text-center text-gray-soft font-semibold"
                            data-reveal="up"
                        >
                            Belum ada data guru yang ditambahkan.
                        </p>
                    ) : (
                        <div
                            className="grid gap-6"
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
                                    className="bg-cream rounded-2xl overflow-hidden shadow-card border-2 border-cream-dark text-center transition-all hover:-translate-y-1.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
                                >
                                    {g.foto_url ? (
                                        <img
                                            src={g.foto_url}
                                            alt={g.nama}
                                            className="w-full h-[220px] object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-[220px] bg-green-light flex items-center justify-center text-[64px]">
                                            👩‍🏫
                                        </div>
                                    )}
                                    <div className="p-5">
                                        <strong className="text-green-dark font-fredoka text-base block">
                                            {g.nama}
                                        </strong>
                                        <span className="text-xs text-red-accent font-extrabold block my-1">
                                            {g.jabatan}
                                        </span>
                                        {g.nip && (
                                            <span className="text-[11px] text-gray-soft font-semibold block">
                                                NIP: {g.nip}
                                            </span>
                                        )}
                                        {g.bio && (
                                            <p className="text-[13px] text-[#666] font-semibold mt-2 leading-relaxed">
                                                {g.bio}
                                            </p>
                                        )}
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

Guru.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Guru;
