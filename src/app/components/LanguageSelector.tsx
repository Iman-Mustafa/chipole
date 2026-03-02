"use client";

import { useState, useRef, useEffect } from "react";

type Language = {
    code: string;
    name: string;
    flag: string;
};

const languages: Language[] = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "sw", name: "Swahili", flag: "🇹🇿" },
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
                className="flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-bold transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
                <span>{currentLang.flag}</span>
                <span>{currentLang.name}</span>
                <svg
                    className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
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
                                className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 ${currentLang.code === lang.code ? "text-brand-red" : "text-zinc-600 dark:text-zinc-400"
                                    }`}
                            >
                                <span>{lang.flag}</span>
                                <span>{lang.name}</span>
                                {currentLang.code === lang.code && (
                                    <svg className="ml-auto h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
