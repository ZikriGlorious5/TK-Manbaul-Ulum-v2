import AdminLayout from "@/Layouts/AdminLayout";
import InputError from "@/Components/InputError";
import { Head, useForm } from "@inertiajs/react";

export default function RegisterAdmin() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.register.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AdminLayout>
            <Head title="Tambah Admin" />

            <h1 className="mb-1 font-fredoka text-2xl text-brown-text">
                Tambah Admin Baru
            </h1>
            <p className="mb-6 text-sm text-gray-soft">
                Buat akun admin baru untuk mengelola website. Hanya admin yang
                sedang login yang bisa membuat akun admin lain.
            </p>

            <div className="max-w-lg rounded-DEFAULT bg-white p-6 shadow-card">
                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-brown-text"
                        >
                            Nama
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={data.name}
                            autoComplete="name"
                            autoFocus
                            required
                            onChange={(e) => setData("name", e.target.value)}
                            className="mt-1 block w-full rounded-sm border-cream-dark focus:border-green-mid focus:ring-green-mid"
                        />
                        <InputError message={errors.name} className="mt-1" />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-brown-text"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            required
                            onChange={(e) => setData("email", e.target.value)}
                            className="mt-1 block w-full rounded-sm border-cream-dark focus:border-green-mid focus:ring-green-mid"
                        />
                        <InputError message={errors.email} className="mt-1" />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-brown-text"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="new-password"
                            required
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="mt-1 block w-full rounded-sm border-cream-dark focus:border-green-mid focus:ring-green-mid"
                        />
                        <InputError
                            message={errors.password}
                            className="mt-1"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password_confirmation"
                            className="block text-sm font-semibold text-brown-text"
                        >
                            Konfirmasi Password
                        </label>
                        <input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            autoComplete="new-password"
                            required
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            className="mt-1 block w-full rounded-sm border-cream-dark focus:border-green-mid focus:ring-green-mid"
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-1"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="rounded-sm bg-green-dark px-5 py-2.5 text-sm font-semibold text-white shadow-btn-green transition hover:bg-green-mid disabled:opacity-50"
                    >
                        Tambah Admin
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
}
