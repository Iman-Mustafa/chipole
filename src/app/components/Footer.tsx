"use client";

import Image from "next/image";
import { Linkedin, Facebook, Twitter, Instagram, Heart, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-zinc-300 pt-20 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/chipole_logo.png"
                alt="Chipole Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold text-white leading-none">Benedictine Sisters</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              A growing community of African Benedictine Nuns, with over 350 in Final Profession, serving the community for over 75 years.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="bg-zinc-800 p-2 rounded hover:bg-brand-red transition-colors text-white"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="bg-zinc-800 p-2 rounded hover:bg-brand-red transition-colors text-white"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="bg-zinc-800 p-2 rounded hover:bg-brand-red transition-colors text-white"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="bg-zinc-800 p-2 rounded hover:bg-brand-red transition-colors text-white"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Column 2: Departments */}
          <div>
            <h4 className="text-xl font-medium text-white mb-6">Ministries</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-brand-red transition-colors">Church Services</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Health Care</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Education</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Orphans & Vulnerable Children</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Development Programs</a></li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h4 className="text-xl font-medium text-white mb-6">Enterprises</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-brand-red transition-colors">Agriculture</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Hydroelectric Power</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Maize Mill</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Bookbinding Service</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Hospitality</a></li>
            </ul>
          </div>

          {/* Column 4: Address */}
          <div>
            <h4 className="text-xl font-medium text-white mb-6">Location</h4>
            <div className="space-y-4 text-sm text-zinc-400">
              <p>Benedictine Sisters of St Agnes</p>
              <p>Chipole, Songea</p>
              <p>Tanzania</p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>
            Copyright ©{new Date().getFullYear()} Benedictine Sisters of St Agnes, Chipole. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-brand-red p-3 rounded-full text-white hover:bg-brand-red/90 transition-colors shadow-lg"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
