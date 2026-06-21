import { Linkedin, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-zinc-50 border-b border-zinc-200 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex justify-between items-center text-sm text-zinc-600">
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-brand-red transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href="#" className="hover:text-brand-red transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="hover:text-brand-red transition-colors"><Twitter className="w-4 h-4" /></a>
          <a href="#" className="hover:text-brand-red transition-colors"><Instagram className="w-4 h-4" /></a>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-red" />
            <span>Songea, Tanzania</span>
          </div>
        </div>
      </div>
    </div>
  );
}
