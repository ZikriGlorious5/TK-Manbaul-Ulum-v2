import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { url } = usePage();

    const navLinks = [
        { to: "/", label: "Beranda" },
        { to: "/sejarah", label: "Profil" },
        { to: "/kegiatan", label: "Kegiatan" },
        { to: "/prestasi", label: "Prestasi" },
        { to: "/guru", label: "Guru" },
        { to: "/galeri", label: "Galeri" },
        { to: "/kontak", label: "Kontak" },
    ];

    return (
        <>
            {/* TOP BAR */}
            <div className="bg-green-dark text-green-light text-[13px] py-[7px]">
                <div className="max-w-[1100px] mx-auto px-7 flex gap-6 flex-wrap">
                    <span>📞 0251-862325 / 0817 844 809</span>
                    <span>✉️ tkmanbaul-ulum93@yahoo.co.id</span>
                </div>
            </div>

            {/* HEADER / NAVBAR */}
            <header className="bg-white shadow-navbar sticky top-0 z-[200] border-b-2 border-green-light">
                <div className="px-7">
                    <nav className="flex items-center gap-[18px] py-2.5">
                        <div className="flex items-center gap-2.5">
                            <img
                                src="/images/logo.png"
                                alt="Logo TK Manbaul Ulum"
                                className="w-11 h-11 object-contain shrink-0"
                            />
                            <div className="flex flex-col">
                                <Link
                                    href="/"
                                    className="font-fredoka text-xl text-green-dark block"
                                >
                                    TK Manbaul Ulum
                                </Link>
                                <span className="text-[10px] font-bold bg-yellow text-brown-text px-2 py-0.5 rounded-full w-fit">
                                    Ciampea · Kab. Bogor
                                </span>
                            </div>
                        </div>

                        <button
                            className="hidden max-md:block bg-transparent border-none text-2xl cursor-pointer ml-auto text-green-dark"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            &#9776;
                        </button>

                        <ul
                            className={`gap-0.5 ml-auto flex-wrap items-center
                md:flex
                ${menuOpen ? "flex" : "hidden"} max-md:w-full max-md:flex-col max-md:py-3`}
                        >
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        href={link.to}
                                        className={`block px-3.5 py-1.5 rounded-full text-sm font-bold transition-colors
                      ${
                          url === link.to
                              ? "bg-green-light text-green-dark"
                              : "text-brown-text hover:bg-green-light hover:text-green-dark"
                      }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/kontak"
                            className="max-md:hidden bg-red-accent text-white px-[18px] py-2.5 rounded-full text-[13px] font-extrabold border-2 border-transparent shadow-btn-nav transition-all hover:-translate-y-0.5 hover:shadow-btn-nav-hover whitespace-nowrap uppercase tracking-wide"
                        >
                            Pendaftaran
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
