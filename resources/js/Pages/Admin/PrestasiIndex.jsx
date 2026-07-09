import React from "react";
import { Link, router, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function PrestasiIndex({ prestasis }) {
    const { flash } = usePage().props;

    const handleDelete = (id, judul) => {
        if (confirm(`Hapus prestasi "${judul}"?`))
            router.delete(`/admin/prestasi/${id}`);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="font-fredoka text-2xl text-green-dark">
                        Kelola Prestasi
                    </h1>
                    <p className="text-sm text-gray-soft font-semibold">
                        Total {prestasis.length} prestasi
                    </p>
                </div>
                <Link
                    href="/admin/prestasi/create"
                    className="bg-green-dark text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-btn-green hover:-translate-y-0.5 transition-all"
                >
                    + Tambah Prestasi
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
                            <th className="px-5 py-3 font-extrabold">Tahun</th>
                            <th className="px-5 py-3 font-extrabold text-right">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {prestasis.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-5 py-8 text-center text-gray-soft font-semibold"
                                >
                                    Belum ada data prestasi.
                                </td>
                            </tr>
                        ) : (
                            prestasis.map((p) => (
                                <tr
                                    key={p.id}
                                    className="border-t border-cream-dark"
                                >
                                    <td className="px-5 py-3">
                                        {p.foto_url ? (
                                            <img
                                                src={p.foto_url}
                                                alt={p.judul}
                                                className="w-14 h-14 object-cover rounded-lg"
                                            />
                                        ) : (
                                            <div className="w-14 h-14 bg-cream rounded-lg flex items-center justify-center text-xl">
                                                🏆
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-5 py-3 font-semibold text-brown-text">
                                        {p.judul}
                                    </td>
                                    <td className="px-5 py-3 text-gray-soft">
                                        {p.tahun}
                                    </td>
                                    <td className="px-5 py-3 text-right">
                                        <Link
                                            href={`/admin/prestasi/${p.id}/edit`}
                                            className="text-green-dark font-bold text-xs mr-4 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(p.id, p.judul)
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

PrestasiIndex.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default PrestasiIndex;
