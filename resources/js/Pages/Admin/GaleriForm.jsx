import React from "react";
import { useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function GaleriForm() {
    const { data, setData, post, processing, errors } = useForm({
        foto: null,
        caption: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/galeri", { forceFormData: true });
    };

    return (
        <div className="max-w-[600px]">
            <h1 className="font-fredoka text-2xl text-green-dark mb-6">
                Tambah Foto Galeri
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-card p-7 flex flex-col gap-4"
            >
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Foto
                    </label>
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
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Caption (opsional)
                    </label>
                    <input
                        type="text"
                        value={data.caption}
                        onChange={(e) => setData("caption", e.target.value)}
                        className="px-3.5 py-2.5 border-[1.5px] border-cream-dark rounded-lg text-sm font-semibold outline-none focus:border-green-mid"
                    />
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="self-start bg-green-dark text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-btn-green hover:-translate-y-0.5 transition-all disabled:opacity-60"
                >
                    {processing ? "Mengunggah..." : "Simpan"}
                </button>
            </form>
        </div>
    );
}

GaleriForm.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default GaleriForm;
