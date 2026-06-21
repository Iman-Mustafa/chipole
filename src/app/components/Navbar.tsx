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
        <a href="#" className="flex items-center gap-2">
          <div className="bg-brand-red p-2 rounded-lg text-white flex items-center justify-center">
            {/* Using a placeholder icon resembling the caduceus */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-zinc-900">Docmed</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-zinc-600 font-medium">
          <a href="#" className="hover:text-brand-red transition-colors text-brand-red">Home</a>
          <a href="#" className="hover:text-brand-red transition-colors">Department</a>
          <a href="#" className="hover:text-brand-red transition-colors">Blog</a>
          <a href="#" className="hover:text-brand-red transition-colors">Pages</a>
          <a href="#" className="hover:text-brand-red transition-colors">Doctors</a>
          <a href="#" className="hover:text-brand-red transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="#" className="bg-brand-red text-white px-8 py-3 rounded hover:bg-brand-red/90 transition-colors font-medium">
            Make an Appointment
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
          <a href="#" className="text-zinc-600 font-medium hover:text-brand-red">Department</a>
          <a href="#" className="text-zinc-600 font-medium hover:text-brand-red">Blog</a>
          <a href="#" className="text-zinc-600 font-medium hover:text-brand-red">Pages</a>
          <a href="#" className="text-zinc-600 font-medium hover:text-brand-red">Doctors</a>
          <a href="#" className="text-zinc-600 font-medium hover:text-brand-red">Contact</a>
          <a href="#" className="bg-brand-red text-white px-6 py-3 rounded text-center font-medium mt-2">
            Make an Appointment
          </a>
        </div>
      )}
    </nav>
  );
}
