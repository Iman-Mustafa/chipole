import { Linkedin, Facebook, Twitter, Instagram, Heart, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-zinc-300 pt-20 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-red p-2 rounded-lg text-white flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">Docmed</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Firmament morning sixth subdue darkness creeping gathered divide.
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
            <h4 className="text-xl font-medium text-white mb-6">Departments</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-brand-red transition-colors">Eye Care</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Skin Care</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Pathology</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Medicine</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Dental</a></li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h4 className="text-xl font-medium text-white mb-6">Useful Links</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-brand-red transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Appointment</a></li>
            </ul>
          </div>

          {/* Column 4: Address */}
          <div>
            <h4 className="text-xl font-medium text-white mb-6">Address</h4>
            <div className="space-y-4 text-sm text-zinc-400">
              <p>200, D-block, Green lane USA</p>
              <p>+10 367 467 8934</p>
              <p>docmed@contact.com</p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>
            Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with <Heart className="w-4 h-4 inline text-brand-red" /> by <a href="#" className="text-brand-red hover:underline">Colorlib</a>
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
