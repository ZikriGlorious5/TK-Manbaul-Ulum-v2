import React from "react";
import { useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function PrestasiForm({ prestasi }) {
    const isEdit = !!prestasi;
    const { data, setData, post, processing, errors } = useForm({
        judul: prestasi?.judul || "",
        deskripsi: prestasi?.deskripsi || "",
        tahun: prestasi?.tahun || new Date().getFullYear(),
        foto: null,
        _method: isEdit ? "put" : "post",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(isEdit ? `/admin/prestasi/${prestasi.id}` : "/admin/prestasi", {
            forceFormData: true,
        });
    };

    return (
        <div className="max-w-[600px]">
            <h1 className="font-fredoka text-2xl text-green-dark mb-6">
                {isEdit ? "Edit Prestasi" : "Tambah Prestasi"}
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-card p-7 flex flex-col gap-4"
            >
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Judul
                    </label>
                    <input
                        type="text"
                        value={data.judul}
                        onChange={(e) => setData("judul", e.target.value)}
                        className="px-3.5 py-2.5 border-[1.5px] border-cream-dark rounded-lg text-sm font-semibold outline-none focus:border-green-mid"
                    />
                    {errors.judul && (
                        <span className="text-xs text-red-accent font-semibold">
                            {errors.judul}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Deskripsi
                    </label>
                    <textarea
                        rows="4"
                        value={data.deskripsi}
                        onChange={(e) => setData("deskripsi", e.target.value)}
                        className="px-3.5 py-2.5 border-[1.5px] border-cream-dark rounded-lg text-sm font-semibold outline-none focus:border-green-mid resize-none"
                    />
                    {errors.deskripsi && (
                        <span className="text-xs text-red-accent font-semibold">
                            {errors.deskripsi}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Tahun
                    </label>
                    <input
                        type="number"
                        value={data.tahun}
                        onChange={(e) => setData("tahun", e.target.value)}
                        className="px-3.5 py-2.5 border-[1.5px] border-cream-dark rounded-lg text-sm font-semibold outline-none focus:border-green-mid"
                    />
                    {errors.tahun && (
                        <span className="text-xs text-red-accent font-semibold">
                            {errors.tahun}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Foto {isEdit && "(kosongkan jika tidak ganti)"}
                    </label>
                    {isEdit && prestasi.foto_url && (
                        <img
                            src={prestasi.foto_url}
                            alt=""
                            className="w-24 h-24 object-cover rounded-lg mb-2"
                        />
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setData("foto", e.target.files[0])}
                        className="text-sm font-semibold"
                    />
                    {errors.foto && (
                        <span className="text-xs text-red-accent font-semibold">
                            {errors.foto}
                        </span>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="self-start bg-green-dark text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-btn-green hover:-translate-y-0.5 transition-all disabled:opacity-60"
                >
                    {processing ? "Menyimpan..." : isEdit ? "Update" : "Simpan"}
                </button>
            </form>
        </div>
    );
}

PrestasiForm.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default PrestasiForm;
