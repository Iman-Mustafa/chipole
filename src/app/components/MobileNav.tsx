"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
    href: string;
    label: string;
    highlight?: boolean;
}

const navLinks: NavLink[] = [
    { href: "#home", label: "Home" },
    { href: "#mission", label: "Mission" },
    { href: "#health", label: "Health" },
    { href: "#education", label: "Education" },
    { href: "#enterprises", label: "Enterprises" },
    { href: "#donate", label: "Donate", highlight: true },
];

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center h-11 w-11 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 shadow-sm backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950"
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-nav-dialog"
            >
                <Menu className="h-6 w-6" aria-hidden />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        onClick={() => setIsOpen(false)}
                        aria-hidden
                    />

                    <div
                        id="mobile-nav-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Site navigation"
                        className="relative w-full max-w-sm bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in duration-200"
                    >
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" aria-hidden />
                        </button>

                        <nav className="flex flex-col gap-8 items-center mt-4 w-full" aria-label="Primary">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-2xl font-bold transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 rounded-sm ${link.highlight
                                        ? "text-brand-red border-b-2 border-brand-red pb-1"
                                        : "text-zinc-800 dark:text-zinc-200"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 text-center w-full">
                            <p className="text-sm font-medium text-zinc-500 mb-6">
                                St. Agnes Convent, Chipole
                            </p>
                            <div className="flex justify-center items-center gap-8">
                                <button type="button" className="text-base font-bold text-zinc-900 dark:text-white border-b-2 border-brand-red pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm">English</button>
                                <button type="button" className="text-base font-bold text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm">Swahili</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
