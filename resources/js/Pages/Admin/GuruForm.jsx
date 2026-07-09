import React from "react";
import { useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function GuruForm({ guru }) {
    const isEdit = !!guru;
    const { data, setData, post, processing, errors } = useForm({
        nama: guru?.nama || "",
        nip: guru?.nip || "",
        jabatan: guru?.jabatan || "",
        bio: guru?.bio || "",
        urutan: guru?.urutan || "",
        foto: null,
        _method: isEdit ? "put" : "post",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(isEdit ? `/admin/guru/${guru.id}` : "/admin/guru", {
            forceFormData: true,
        });
    };

    return (
        <div className="max-w-[600px]">
            <h1 className="font-fredoka text-2xl text-green-dark mb-6">
                {isEdit ? "Edit Guru" : "Tambah Guru"}
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-card p-7 flex flex-col gap-4"
            >
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Nama
                    </label>
                    <input
                        type="text"
                        value={data.nama}
                        onChange={(e) => setData("nama", e.target.value)}
                        className="px-3.5 py-2.5 border-[1.5px] border-cream-dark rounded-lg text-sm font-semibold outline-none focus:border-green-mid"
                    />
                    {errors.nama && (
                        <span className="text-xs text-red-accent font-semibold">
                            {errors.nama}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        NIP (opsional)
                    </label>
                    <input
                        type="text"
                        value={data.nip}
                        onChange={(e) => setData("nip", e.target.value)}
                        className="px-3.5 py-2.5 border-[1.5px] border-cream-dark rounded-lg text-sm font-semibold outline-none focus:border-green-mid"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Jabatan
                    </label>
                    <input
                        type="text"
                        value={data.jabatan}
                        onChange={(e) => setData("jabatan", e.target.value)}
                        className="px-3.5 py-2.5 border-[1.5px] border-cream-dark rounded-lg text-sm font-semibold outline-none focus:border-green-mid"
                    />
                    {errors.jabatan && (
                        <span className="text-xs text-red-accent font-semibold">
                            {errors.jabatan}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Bio / Pendidikan (opsional)
                    </label>
                    <textarea
                        rows="3"
                        value={data.bio}
                        onChange={(e) => setData("bio", e.target.value)}
                        className="px-3.5 py-2.5 border-[1.5px] border-cream-dark rounded-lg text-sm font-semibold outline-none focus:border-green-mid resize-none"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Urutan Tampil (opsional)
                    </label>
                    <input
                        type="number"
                        value={data.urutan}
                        onChange={(e) => setData("urutan", e.target.value)}
                        className="px-3.5 py-2.5 border-[1.5px] border-cream-dark rounded-lg text-sm font-semibold outline-none focus:border-green-mid"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-soft uppercase">
                        Foto {isEdit && "(kosongkan jika tidak ganti)"}
                    </label>
                    {isEdit && guru.foto_url && (
                        <img
                            src={guru.foto_url}
                            alt=""
                            className="w-24 h-24 object-cover rounded-full mb-2"
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

GuruForm.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default GuruForm;
