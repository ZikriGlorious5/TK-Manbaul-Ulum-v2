import {
    createContext,
    useCallback,
    useContext,
    useRef,
    useState,
} from "react";

const ConfirmContext = createContext(() => Promise.resolve(false));

/**
 * Bungkus bagian admin dengan <ConfirmProvider> ini, lalu pakai
 * hook useConfirm() di halaman manapun untuk memunculkan modal
 * konfirmasi bertema, sebagai pengganti window.confirm() bawaan browser.
 *
 * Contoh:
 *   const confirm = useConfirm();
 *   const handleDelete = async (id) => {
 *       if (await confirm("Hapus data ini?")) {
 *           router.delete(`/admin/xxx/${id}`);
 *       }
 *   };
 */
export function ConfirmProvider({ children }) {
    const [state, setState] = useState({
        open: false,
        title: "Konfirmasi",
        message: "",
        confirmLabel: "Hapus",
        cancelLabel: "Batal",
    });
    const resolveRef = useRef(null);

    const confirm = useCallback((message, options = {}) => {
        setState({
            open: true,
            title: options.title ?? "Konfirmasi",
            message,
            confirmLabel: options.confirmLabel ?? "Hapus",
            cancelLabel: options.cancelLabel ?? "Batal",
        });

        return new Promise((resolve) => {
            resolveRef.current = resolve;
        });
    }, []);

    const close = (result) => {
        setState((s) => ({ ...s, open: false }));
        resolveRef.current?.(result);
        resolveRef.current = null;
    };

    return (
        <ConfirmContext.Provider value={confirm}>
            {children}

            {state.open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
                    onClick={() => close(false)}
                >
                    <div
                        className="w-full max-w-sm rounded-DEFAULT bg-white p-6 shadow-card"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="mb-2 font-fredoka text-lg text-brown-text">
                            {state.title}
                        </h2>
                        <p className="mb-6 text-sm text-gray-soft">
                            {state.message}
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => close(false)}
                                className="rounded-sm px-5 py-2 text-sm font-semibold text-gray-soft transition hover:bg-cream"
                            >
                                {state.cancelLabel}
                            </button>
                            <button
                                type="button"
                                autoFocus
                                onClick={() => close(true)}
                                className="rounded-sm bg-red-accent px-5 py-2 text-sm font-semibold text-white shadow-btn-cta transition hover:-translate-y-0.5"
                            >
                                {state.confirmLabel}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </ConfirmContext.Provider>
    );
}

export function useConfirm() {
    return useContext(ConfirmContext);
}
