import React from "react";
import { Link } from "@inertiajs/react";

function Footer() {
    return (
        <footer className="relative bg-green-dark text-green-light pt-12">
            <div
                className="absolute top-0 left-0 right-0 h-10 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 40'%3E%3Cpath d='M0,0 Q300,40 600,10 Q900,-20 1200,20 L1200,0 Z' fill='%23f5f0e8'/%3E%3C/svg%3E\")",
                }}
            />

            <div className="pt-10">
                <div className="max-w-[1100px] mx-auto px-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8">
                    <div>
                        <h3 className="font-fredoka text-white text-[17px] mb-3">
                            TK Manbaul Ulum
                        </h3>
                        <p className="text-sm text-[#b7e4c7] mb-1.5 font-semibold">
                            Jl. Letnan Sukarna, Kp. Gedong RT 07/01
                        </p>
                        <p className="text-sm text-[#b7e4c7] mb-1.5 font-semibold">
                            Desa Benteng, Kec. Ciampea, Kab. Bogor
                        </p>
                        <p className="text-sm text-[#b7e4c7] mb-1.5 font-semibold">
                            Jawa Barat 16620
                        </p>
                        <p className="text-sm text-[#b7e4c7] font-semibold mt-2">
                            NPSN: 69868417 · Akreditasi B
                        </p>
                    </div>

                    <div>
                        <h3 className="font-fredoka text-white text-[17px] mb-3">
                            Kontak
                        </h3>
                        <p className="text-sm text-[#b7e4c7] mb-1.5 font-semibold">
                            📞 0251-862325
                        </p>
                        <p className="text-sm text-[#b7e4c7] mb-1.5 font-semibold">
                            📱 0817 844 809
                        </p>
                        <p className="text-sm text-[#b7e4c7] mb-1.5 font-semibold">
                            ✉️ tkmanbaul-ulum93@yahoo.co.id
                        </p>
                        <p className="text-sm text-[#b7e4c7] mb-1.5 font-semibold">
                            🕐 Senin–Jumat: 07.00–11.00 WIB
                        </p>
                    </div>

                    <div>
                        <h3 className="font-fredoka text-white text-[17px] mb-3">
                            Navigasi
                        </h3>
                        <ul className="flex flex-col gap-1">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-[#b7e4c7] font-semibold hover:text-white"
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/sejarah"
                                    className="text-sm text-[#b7e4c7] font-semibold hover:text-white"
                                >
                                    Profil & Sejarah
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kegiatan"
                                    className="text-sm text-[#b7e4c7] font-semibold hover:text-white"
                                >
                                    Kegiatan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/prestasi"
                                    className="text-sm text-[#b7e4c7] font-semibold hover:text-white"
                                >
                                    Prestasi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/guru"
                                    className="text-sm text-[#b7e4c7] font-semibold hover:text-white"
                                >
                                    Guru
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/galeri"
                                    className="text-sm text-[#b7e4c7] font-semibold hover:text-white"
                                >
                                    Galeri
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kontak"
                                    className="text-sm text-[#b7e4c7] font-semibold hover:text-white"
                                >
                                    Lokasi & Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-fredoka text-white text-[17px] mb-3">
                            Yayasan
                        </h3>
                        <p className="text-sm text-[#b7e4c7] mb-1.5 font-semibold">
                            Yayasan Pendidikan Islam Manbaul Ulum
                        </p>
                        <p className="text-sm text-[#b7e4c7] mb-1.5 font-semibold">
                            Ketua: M. Fachrudin, S.Ag
                        </p>
                        <p className="text-sm text-[#b7e4c7] mb-1.5 font-semibold">
                            Kepala TK: ST. Faoziyah Ulfah, M.Pd.I
                        </p>
                        <p className="text-sm text-[#b7e4c7] font-semibold mt-2 text-xs opacity-70">
                            Berdiri sejak 1993
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 text-center py-4 text-[13px] text-[#74c69d] font-bold">
                    <p>
                        &copy; 2025–2026 TK Manbaul Ulum Ciampea · KSP Tahun
                        Pelajaran 2025/2026
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
