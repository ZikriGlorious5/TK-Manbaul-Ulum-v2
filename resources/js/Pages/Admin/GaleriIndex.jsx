import React from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { useConfirm } from "@/Contexts/ConfirmContext";

function GaleriIndex({ galeris }) {
    const { flash } = usePage().props;
    const confirm = useConfirm();

    const handleDelete = async (id) => {
        if (await confirm("Hapus foto ini?")) {
            router.delete(`/admin/galeri/${id}`);
        }
    };

    return (
        <div>
            <Head title="Kelola Galeri" />

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="font-fredoka text-2xl text-green-dark">
                        Kelola Galeri
                    </h1>
                    <p className="text-sm text-gray-soft font-semibold">
                        Total {galeris.length} foto
                    </p>
                </div>
                <Link
                    href="/admin/galeri/create"
                    className="bg-green-dark text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-btn-green hover:-translate-y-0.5 transition-all"
                >
                    + Tambah Foto
                </Link>
            </div>

            {flash?.success && (
                <div className="bg-green-light text-green-dark font-semibold text-sm px-4 py-3 rounded-lg mb-5">
                    {flash.success}
                </div>
            )}

            {galeris.length === 0 ? (
                <p className="text-center text-gray-soft font-semibold py-10">
                    Belum ada foto.
                </p>
            ) : (
                <div
                    className="grid gap-4"
                    style={{
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(200px, 1fr))",
                    }}
                >
                    {galeris.map((foto) => (
                        <div
                            key={foto.id}
                            className="bg-white rounded-xl overflow-hidden shadow-card"
                        >
                            <img
                                src={foto.foto_url}
                                alt={foto.caption || ""}
                                className="w-full h-[150px] object-cover"
                            />
                            <div className="p-3">
                                <p className="text-xs font-semibold text-brown-text mb-2 truncate">
                                    {foto.caption || "(tanpa caption)"}
                                </p>
                                <button
                                    onClick={() => handleDelete(foto.id)}
                                    className="text-red-accent font-bold text-xs hover:underline"
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

GaleriIndex.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default GaleriIndex;
