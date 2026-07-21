import InputError from "@/Components/InputError";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Login Admin" />

            <h1 className="mb-1 font-fredoka text-xl text-green-dark">
                Login Admin
            </h1>
            <p className="mb-6 text-sm text-gray-soft">
                Masuk untuk mengelola konten website sekolah.
            </p>

            {status && (
                <div className="mb-4 rounded-sm bg-green-light px-4 py-2 text-sm font-medium text-green-dark">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
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
                        autoFocus
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
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                        className="mt-1 block w-full rounded-sm border-cream-dark focus:border-green-mid focus:ring-green-mid"
                    />
                    <InputError message={errors.password} className="mt-1" />
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-gray-soft">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                            className="rounded border-cream-dark text-green-dark focus:ring-green-mid"
                        />
                        Ingat saya
                    </label>

                    {canResetPassword && (
                        <a
                            href={route("password.request")}
                            className="text-sm text-green-dark underline hover:text-green-mid"
                        >
                            Lupa password?
                        </a>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full rounded-sm bg-green-dark px-4 py-2.5 text-sm font-semibold text-white shadow-btn-green transition hover:bg-green-mid disabled:opacity-50"
                >
                    Masuk
                </button>
            </form>
        </GuestLayout>
    );
}
