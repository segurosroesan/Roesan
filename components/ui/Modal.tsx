"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    maxWidthClassName?: string;
}

export function Modal({
    open,
    onClose,
    title,
    children,
    maxWidthClassName = "max-w-5xl",
}: ModalProps) {
    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:items-center sm:p-6"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.98 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className={`relative max-h-[92vh] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_24px_120px_rgba(15,23,42,0.55)] ${maxWidthClassName}`}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                            <div>
                                {title ? (
                                    <p className="text-sm font-medium tracking-[0.24em] text-cyan-300 uppercase">
                                        {title}
                                    </p>
                                ) : null}
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                                aria-label="Cerrar formulario"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="max-h-[calc(92vh-76px)] overflow-y-auto">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
