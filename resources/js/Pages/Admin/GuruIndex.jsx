import React from "react";
import { Link, router, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function GuruIndex({ gurus }) {
    const { flash } = usePage().props;
    const handleDelete = (id, nama) => {
        if (confirm(`Hapus data guru "${nama}"?`))
            router.delete(`/admin/guru/${id}`);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="font-fredoka text-2xl text-green-dark">
                        Kelola Guru
                    </h1>
                    <p className="text-sm text-gray-soft font-semibold">
                        Total {gurus.length} guru
                    </p>
                </div>
                <Link
                    href="/admin/guru/create"
                    className="bg-green-dark text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-btn-green hover:-translate-y-0.5 transition-all"
                >
                    + Tambah Guru
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
                            <th className="px-5 py-3 font-extrabold">Nama</th>
                            <th className="px-5 py-3 font-extrabold">
                                Jabatan
                            </th>
                            <th className="px-5 py-3 font-extrabold">Urutan</th>
                            <th className="px-5 py-3 font-extrabold text-right">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {gurus.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-5 py-8 text-center text-gray-soft font-semibold"
                                >
                                    Belum ada data guru.
                                </td>
                            </tr>
                        ) : (
                            gurus.map((g) => (
                                <tr
                                    key={g.id}
                                    className="border-t border-cream-dark"
                                >
                                    <td className="px-5 py-3">
                                        {g.foto_url ? (
                                            <img
                                                src={g.foto_url}
                                                alt={g.nama}
                                                className="w-14 h-14 object-cover rounded-full"
                                            />
                                        ) : (
                                            <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center text-xl">
                                                👩‍🏫
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-5 py-3 font-semibold text-brown-text">
                                        {g.nama}
                                    </td>
                                    <td className="px-5 py-3 text-gray-soft">
                                        {g.jabatan}
                                    </td>
                                    <td className="px-5 py-3 text-gray-soft">
                                        {g.urutan ?? "-"}
                                    </td>
                                    <td className="px-5 py-3 text-right">
                                        <Link
                                            href={`/admin/guru/${g.id}/edit`}
                                            className="text-green-dark font-bold text-xs mr-4 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(g.id, g.nama)
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

GuruIndex.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default GuruIndex;
