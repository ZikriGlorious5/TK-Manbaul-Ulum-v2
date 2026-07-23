import React from "react";
import { Head, router, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { useConfirm } from "@/Contexts/ConfirmContext";

function PesanKontak({ pesans }) {
    const { flash } = usePage().props;
    const confirm = useConfirm();

    const handleDelete = async (id) => {
        if (await confirm("Hapus pesan ini?")) {
            router.delete(`/admin/pesan/${id}`);
        }
    };

    return (
        <div>
            <Head title="Pesan Masuk" />

            <h1 className="font-fredoka text-2xl text-green-dark mb-1">
                Pesan Masuk
            </h1>
            <p className="text-sm text-gray-soft font-semibold mb-6">
                Total {pesans.length} pesan dari form Kontak
            </p>

            {flash?.success && (
                <div className="bg-green-light text-green-dark font-semibold text-sm px-4 py-3 rounded-lg mb-5">
                    {flash.success}
                </div>
            )}

            {pesans.length === 0 ? (
                <p className="text-center text-gray-soft font-semibold py-10">
                    Belum ada pesan masuk.
                </p>
            ) : (
                <div className="flex flex-col gap-3">
                    {pesans.map((p) => (
                        <div
                            key={p.id}
                            className="bg-white rounded-2xl shadow-card p-5"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <strong className="text-brown-text font-fredoka">
                                    {p.nama}
                                </strong>
                                <span className="text-xs text-gray-soft font-semibold">
                                    {new Date(p.created_at).toLocaleString(
                                        "id-ID",
                                    )}
                                </span>
                            </div>
                            <p className="text-xs text-green-dark font-bold mb-1">
                                {p.email}
                            </p>
                            <p className="text-sm font-extrabold text-brown-text mb-1">
                                {p.subjek}
                            </p>
                            <p className="text-sm text-[#555] mb-3">
                                {p.pesan}
                            </p>
                            <button
                                onClick={() => handleDelete(p.id)}
                                className="text-red-accent font-bold text-xs hover:underline"
                            >
                                Hapus
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

PesanKontak.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default PesanKontak;
