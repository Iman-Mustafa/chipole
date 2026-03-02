"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

type Language = {
    code: string;
    name: string;
};

const languages: Language[] = [
    { code: "en", name: "English" },
    { code: "sw", name: "Swahili" },
];

export default function LanguageSelector() {
    const [currentLang, setCurrentLang] = useState(languages[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-bold transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50"
            >
                <Globe className="h-4 w-4 text-zinc-500" />
                <span>{currentLang.name}</span>
                <ChevronDown
                    className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900 z-50">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setCurrentLang(lang);
                                    setIsOpen(false);
                                }}
                                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 ${currentLang.code === lang.code ? "text-brand-red bg-zinc-50 dark:bg-white/5" : "text-zinc-600 dark:text-zinc-400"
                                    }`}
                            >
                                <span>{lang.name}</span>
                                {currentLang.code === lang.code && (
                                    <Check className="ml-auto h-4 w-4" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
