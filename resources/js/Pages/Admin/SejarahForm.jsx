import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function SejarahForm({ sejarah }) {
    const { flash } = usePage().props;
    const { data, setData, put, processing, errors } = useForm({
        konten: sejarah?.konten || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put("/admin/sejarah");
    };

    return (
        <div className="max-w-[700px]">
            <h1 className="font-fredoka text-2xl text-green-dark mb-2">
                Kelola Teks Sejarah
            </h1>
            <p className="text-sm text-gray-soft font-semibold mb-6">
                Catatan: bagian Identitas Sekolah, Visi/Misi, dan Timeline di
                halaman Sejarah masih statis (belum bisa diedit lewat sini). Ini
                khusus untuk konten teks bebas tambahan.
            </p>

            {flash?.success && (
                <div className="bg-green-light text-green-dark font-semibold text-sm px-4 py-3 rounded-lg mb-5">
                    {flash.success}
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-card p-7 flex flex-col gap-4"
            >
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Konten Sejarah
                    </label>
                    <textarea
                        rows="10"
                        value={data.konten}
                        onChange={(e) => setData("konten", e.target.value)}
                        className="px-3.5 py-2.5 border-[1.5px] border-cream-dark rounded-lg text-sm font-semibold outline-none focus:border-green-mid resize-none"
                    />
                    {errors.konten && (
                        <span className="text-xs text-red-accent font-semibold">
                            {errors.konten}
                        </span>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="self-start bg-green-dark text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-btn-green hover:-translate-y-0.5 transition-all disabled:opacity-60"
                >
                    {processing ? "Menyimpan..." : "Simpan"}
                </button>
            </form>
        </div>
    );
}

SejarahForm.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default SejarahForm;
