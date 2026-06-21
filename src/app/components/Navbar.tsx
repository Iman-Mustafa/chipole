"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 bg-white shadow-md py-4" : "relative bg-white py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo/chipole_logo.png"
            alt="Chipole Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-zinc-900 leading-none">Benedictine Sisters</span>
            <span className="text-xs text-brand-red font-medium tracking-wide">OF ST AGNES, CHIPOLE</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-zinc-600 font-medium text-sm">
          <a href="#" className="hover:text-brand-red transition-colors text-brand-red">Home</a>
          <a href="#" className="hover:text-brand-red transition-colors">Our Mission</a>
          <a href="#" className="hover:text-brand-red transition-colors">Health Care</a>
          <a href="#" className="hover:text-brand-red transition-colors">Education</a>
          <a href="#" className="hover:text-brand-red transition-colors">Enterprises</a>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="#" className="bg-brand-red text-white px-8 py-3 rounded hover:bg-brand-red/90 transition-colors font-medium">
            Please Donate!
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-zinc-600 hover:text-brand-red"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-zinc-100 py-4 px-6 flex flex-col gap-4">
          <a href="#" className="text-brand-red font-medium">Home</a>
          <a href="#" className="text-zinc-600 font-medium hover:text-brand-red">Our Mission</a>
          <a href="#" className="text-zinc-600 font-medium hover:text-brand-red">Health Care</a>
          <a href="#" className="text-zinc-600 font-medium hover:text-brand-red">Education</a>
          <a href="#" className="text-zinc-600 font-medium hover:text-brand-red">Enterprises</a>
          <a href="#" className="bg-brand-red text-white px-6 py-3 rounded text-center font-medium mt-2">
            Please Donate!
          </a>
        </div>
      )}
    </nav>
  );
}
