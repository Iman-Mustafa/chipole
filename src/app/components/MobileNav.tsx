"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
    href: string;
    label: string;
    highlight?: boolean;
}

const navLinks: NavLink[] = [
    { href: "#", label: "Home" },
    { href: "#", label: "Our Mission" },
    { href: "#", label: "Health Care" },
    { href: "#", label: "Education" },
    { href: "#", label: "Development Programs" },
    { href: "#", label: "Enterprises" },
    { href: "#", label: "Please Donate!", highlight: true },
];

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sm:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center h-11 w-11 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 shadow-sm backdrop-blur-sm"
                aria-label="Open Menu"
            >
                <Menu className="h-6 w-6" />
            </button>

            {/* Overlay and Drawer */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Drawer */}
                    <div
                        className={`relative ml-auto h-full w-[85%] max-w-sm border-l p-8 shadow-2xl flex flex-col transition-transform duration-300 ease-out z-[101] bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 ${isOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                        style={{ backgroundColor: 'var(--background)' }}
                    >
                        <div className="flex justify-end mb-12">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all"
                                aria-label="Close Menu"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-xl font-bold transition-all hover:scale-105 active:scale-95 ${link.highlight
                                        ? "text-brand-red border-b-2 border-brand-red pb-1"
                                        : "text-zinc-800 dark:text-zinc-200 hover:text-brand-red"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        <div className="mt-auto pt-12 border-t border-zinc-100 dark:border-zinc-800 text-center">
                            <p className="text-sm font-medium text-zinc-500 mb-6">
                                St. Agnes Convent, Chipole
                            </p>
                            <div className="flex justify-center items-center gap-6">
                                <button className="text-sm font-bold text-zinc-900 dark:text-white border-b-2 border-brand-red pb-0.5">English</button>
                                <button className="text-sm font-bold text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">Swahili</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
