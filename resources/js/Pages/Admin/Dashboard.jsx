import React from "react";
import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

const cards = [
    {
        href: "/admin/kegiatan",
        label: "Kegiatan",
        icon: "🎪",
        color: "bg-[#e8f5e9]",
    },
    {
        href: "/admin/prestasi",
        label: "Prestasi",
        icon: "🏆",
        color: "bg-[#fffde7]",
    },
    { href: "/admin/guru", label: "Guru", icon: "👩‍🏫", color: "bg-[#e3f2fd]" },
    {
        href: "/admin/galeri",
        label: "Galeri",
        icon: "🖼️",
        color: "bg-[#fde8e8]",
    },
    {
        href: "/admin/sejarah",
        label: "Sejarah",
        icon: "📜",
        color: "bg-[#f3e5f5]",
    },
    {
        href: "/admin/pesan",
        label: "Pesan Masuk",
        icon: "✉️",
        color: "bg-[#e0f2f1]",
    },
];

function Dashboard() {
    return (
        <div>
            <h1 className="font-fredoka text-2xl text-green-dark mb-1">
                Dashboard Admin
            </h1>
            <p className="text-sm text-gray-soft font-semibold mb-8">
                Kelola konten website TK Manbaul Ulum
            </p>

            <div
                className="grid gap-5"
                style={{
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(200px, 1fr))",
                }}
            >
                {cards.map((c) => (
                    <Link
                        key={c.href}
                        href={c.href}
                        className={`${c.color} rounded-2xl p-6 shadow-card border-2 border-cream-dark transition-all hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.1)]`}
                    >
                        <div className="text-[36px] mb-2">{c.icon}</div>
                        <strong className="font-fredoka text-green-dark text-base">
                            {c.label}
                        </strong>
                    </Link>
                ))}
            </div>
        </div>
    );
}

Dashboard.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;
