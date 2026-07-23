import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 py-10">
            <Link href="/" className="mb-6 flex flex-col items-center gap-2">
                <img
                    src="/images/logo.png"
                    alt="Logo TK Manbaul Ulum"
                    className="h-28 w-28 object-contain"
                />
                <span className="font-fredoka text-lg text-green-dark">
                    TK Manbaul Ulum
                </span>
            </Link>

            <div className="w-full overflow-hidden rounded-DEFAULT bg-white px-6 py-8 shadow-card sm:max-w-md">
                {children}
            </div>
        </div>
    );
}
