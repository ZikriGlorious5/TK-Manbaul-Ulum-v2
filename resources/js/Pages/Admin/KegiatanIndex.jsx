import React from "react";
import { Link, router, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function KegiatanIndex({ kegiatans }) {
    const { flash } = usePage().props;

    const handleDelete = (id, judul) => {
        if (confirm(`Hapus kegiatan "${judul}"?`)) {
            router.delete(`/admin/kegiatan/${id}`);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="font-fredoka text-2xl text-green-dark">
                        Kelola Kegiatan
                    </h1>
                    <p className="text-sm text-gray-soft font-semibold">
                        Total {kegiatans.length} kegiatan
                    </p>
                </div>
                <Link
                    href="/admin/kegiatan/create"
                    className="bg-green-dark text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-btn-green hover:-translate-y-0.5 transition-all"
                >
                    + Tambah Kegiatan
                </Link>
            </div>

            {flash?.success && (
                <div className="bg-green-light text-green-dark font-semibold text-sm px-4 py-3 rounded-lg mb-5">
                    {flash.success}
                </div>
            )}

            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-cream text-brown-text text-left">
                        <tr>
                            <th className="px-5 py-3 font-extrabold">Foto</th>
                            <th className="px-5 py-3 font-extrabold">Judul</th>
                            <th className="px-5 py-3 font-extrabold">
                                Tanggal
                            </th>
                            <th className="px-5 py-3 font-extrabold text-right">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {kegiatans.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-5 py-8 text-center text-gray-soft font-semibold"
                                >
                                    Belum ada data kegiatan.
                                </td>
                            </tr>
                        ) : (
                            kegiatans.map((k) => (
                                <tr
                                    key={k.id}
                                    className="border-t border-cream-dark"
                                >
                                    <td className="px-5 py-3">
                                        {k.foto_url ? (
                                            <img
                                                src={k.foto_url}
                                                alt={k.judul}
                                                className="w-14 h-14 object-cover rounded-lg"
                                            />
                                        ) : (
                                            <div className="w-14 h-14 bg-cream rounded-lg flex items-center justify-center text-xl">
                                                🎪
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-5 py-3 font-semibold text-brown-text">
                                        {k.judul}
                                    </td>
                                    <td className="px-5 py-3 text-gray-soft">
                                        {new Date(k.tanggal).toLocaleDateString(
                                            "id-ID",
                                            {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            },
                                        )}
                                    </td>
                                    <td className="px-5 py-3 text-right">
                                        <Link
                                            href={`/admin/kegiatan/${k.id}/edit`}
                                            className="text-green-dark font-bold text-xs mr-4 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(k.id, k.judul)
                                            }
                                            className="text-red-accent font-bold text-xs hover:underline"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

KegiatanIndex.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default KegiatanIndex;
