import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import useReveal from "@/Components/useReveal";

function Galeri({ galeris }) {
    useReveal();
    const [selected, setSelected] = useState(null);

    return (
        <>
            <Head title="Galeri Foto" />

            {/* PAGE HEADER */}
            <section className="relative overflow-hidden text-white text-center px-6 pt-[70px] pb-[50px] bg-gradient-to-br from-green-dark to-green-mid">
                <h1 className="font-fredoka text-[42px] mb-2">Galeri Foto</h1>
                <p className="text-[17px] opacity-[0.88] font-semibold">
                    Momen keseharian anak-anak di TK Manbaul Ulum
                </p>
                <div
                    className="absolute -bottom-0.5 left-0 right-0 h-10 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,40 Q300,0 600,30 Q900,60 1200,20 L1200,40Z' fill='%23f5f0e8'/%3E%3C/svg%3E\")",
                    }}
                />
            </section>

            <section className="py-16 bg-cream">
                <div className="max-w-[1100px] mx-auto px-7">
                    {galeris.length === 0 ? (
                        <p
                            className="text-center text-gray-soft font-semibold"
                            data-reveal="up"
                        >
                            Belum ada foto yang ditambahkan.
                        </p>
                    ) : (
                        <div
                            className="grid gap-4"
                            style={{
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(220px, 1fr))",
                            }}
                        >
                            {galeris.map((foto, i) => (
                                <button
                                    key={foto.id}
                                    onClick={() => setSelected(foto)}
                                    data-reveal="scale"
                                    data-delay={(i % 6) + 1}
                                    className="relative rounded-xl overflow-hidden shadow-card border-2 border-cream-dark group cursor-pointer"
                                >
                                    <img
                                        src={foto.foto_url}
                                        alt={
                                            foto.caption ||
                                            "Galeri TK Manbaul Ulum"
                                        }
                                        className="w-full h-[200px] object-cover transition-transform group-hover:scale-105"
                                    />
                                    {foto.caption && (
                                        <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs font-semibold px-3 py-2 text-left">
                                            {foto.caption}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* LIGHTBOX SEDERHANA */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/80 z-[300] flex items-center justify-center p-6"
                    onClick={() => setSelected(null)}
                >
                    <div className="max-w-[800px] w-full">
                        <img
                            src={selected.foto_url}
                            alt={selected.caption || ""}
                            className="w-full rounded-xl"
                        />
                        {selected.caption && (
                            <p className="text-white text-center mt-3 font-semibold">
                                {selected.caption}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

Galeri.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Galeri;
