import React from "react";
import { Link, usePage, router } from "@inertiajs/react";
import { ConfirmProvider } from "@/Contexts/ConfirmContext";

const menuItems = [
    { href: "/dashboard", label: "📊 Dashboard" },
    { href: "/admin/kegiatan", label: "🎪 Kegiatan" },
    { href: "/admin/prestasi", label: "🏆 Prestasi" },
    { href: "/admin/guru", label: "👩‍🏫 Guru" },
    { href: "/admin/galeri", label: "🖼️ Galeri" },
    { href: "/admin/sejarah", label: "📜 Sejarah" },
    { href: "/admin/pesan", label: "✉️ Pesan Masuk" },
    { href: "/admin/tambah-admin", label: "➕ Tambah Admin" },
];

export default function AdminLayout({ children }) {
    const { url } = usePage();
    const { auth, flash } = usePage().props;

    const handleLogout = (e) => {
        e.preventDefault();
        router.post("/logout");
    };

    return (
        <ConfirmProvider>
            <div className="min-h-screen flex bg-cream">
                {/* SIDEBAR */}
                <aside className="w-64 bg-green-dark text-white flex flex-col shrink-0">
                    <div className="px-6 py-5 border-b border-white/10">
                        <h1 className="font-fredoka text-lg">
                            TK Manbaul Ulum
                        </h1>
                        <span className="text-xs text-green-light">
                            Admin Panel
                        </span>
                    </div>
                    <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                                    url.startsWith(item.href)
                                        ? "bg-white/15 text-white"
                                        : "text-green-light hover:bg-white/10"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="px-4 py-4 border-t border-white/10">
                        <div className="text-xs text-green-light mb-2 px-2">
                            {auth?.user?.name}
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 rounded-lg text-sm font-semibold text-white bg-red-accent/80 hover:bg-red-accent transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </aside>

                {/* CONTENT */}
                <main className="flex-1 p-8 overflow-y-auto">
                    {flash?.success && (
                        <div className="mb-6 rounded-sm bg-green-light px-4 py-3 text-sm font-medium text-green-dark">
                            {flash.success}
                        </div>
                    )}
                    {children}
                </main>
            </div>
        </ConfirmProvider>
    );
}
