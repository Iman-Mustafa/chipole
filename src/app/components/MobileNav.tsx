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
                className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="Open Menu"
            >
                <Menu className="h-6 w-6" />
            </button>

            {/* Overlay and Drawer */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-white dark:bg-zinc-900 flex flex-col p-8 animate-in fade-in slide-in-from-right duration-300">
                    <div className="flex justify-end mb-12">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                            aria-label="Close Menu"
                        >
                            <X className="h-8 w-8" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-8 items-center text-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-2xl font-bold transition-colors ${link.highlight
                                        ? "text-brand-red border-b-2 border-brand-red pb-1"
                                        : "text-zinc-800 dark:text-zinc-200 hover:text-brand-red"
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto pt-12 border-t border-zinc-100 dark:border-zinc-800 text-center">
                        <p className="text-sm font-medium text-zinc-500 mb-4">
                            St. Agnes Convent, Chipole
                        </p>
                        <div className="flex justify-center gap-4 text-xs font-bold text-zinc-400">
                            <span>EN</span>
                            <span className="opacity-20">|</span>
                            <span>SW</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
