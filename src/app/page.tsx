"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { HeartPulse, GraduationCap, Sprout, Cross, ArrowRight, Quote } from "lucide-react";
import ImageSlider from "@/app/components/ImageSlider";
import LanguageSelector from "@/app/components/LanguageSelector";
import MobileNav from "@/app/components/MobileNav";

const heroImages = [
  "/images/sisters.jpeg",
  "/images/sisters3.jpeg",
  "/images/sisters4.jpeg",
  "/images/farm.jpeg",
  "/images/trousers.jpeg",
];

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Smart Navbar Scroll Behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up or at top
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Hero Image Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 mesh-gradient selection:bg-brand-red selection:text-white">
      {/* Floating Modern Navigation with Smart Behavior */}
      <nav 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-5xl transition-transform duration-500 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-32"
        }`}
      >
        <div className="glass-heavy rounded-full px-6 py-4 flex items-center justify-between shadow-2xl border border-white/20">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/chipole_logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="hidden md:block font-black tracking-tighter text-sm uppercase">Chipole Sisters</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <NavUrl href="#home" active>Home</NavUrl>
            <NavUrl href="#mission">Mission</NavUrl>
            <NavUrl href="#health">Health</NavUrl>
            <NavUrl href="#education">Education</NavUrl>
            <NavUrl href="#enterprises">Enterprises</NavUrl>
            <NavUrl href="#donate" highlight>Donate</NavUrl>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Rotating Slider */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        {heroImages.map((img, idx) => (
          <div 
            key={img} 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentHeroIndex === idx ? "opacity-100 scale-105" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Hero ${idx}`}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
        
        {/* Visibility Gradient for Navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-zinc-50 dark:to-black" />
        
        <div className="container-wide relative z-10 text-center space-y-8 reveal">
          <div className="inline-block px-4 py-2 rounded-full glass border border-white/20 text-white text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Since 1945
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] max-w-5xl mx-auto drop-shadow-2xl">
            BENEDICTINE <span className="text-gradient">SISTERS</span> <br /> OF ST AGNES, CHIPOLE
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-xl">
            A growing community of Benedictine Nuns dedicated to prayer and service in the heart of Tanzania.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a href="#mission" className="bg-white text-black hover:bg-zinc-200 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
              Our Story
            </a>
            <a href="#donate" className="bg-brand-red text-white hover:bg-brand-red/90 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
              Support Our Mission
            </a>
          </div>
        </div>

        {/* Hero Slider Dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentHeroIndex === idx ? "w-8 bg-white" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
           </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <main id="mission" className="relative z-10 mt-[-100px] pb-32">
        <div className="container-wide space-y-32">
          
          {/* Main Dashboard Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            <DashboardCard 
              title="Health Care" 
              icon={<HeartPulse className="h-8 w-8 text-brand-red" />}
              text="150-bed referral hospital serving the heart of Chipole."
              color="border-brand-red/20"
              href="#health"
            />
            <DashboardCard 
              title="Education" 
              icon={<GraduationCap className="h-8 w-8 text-brand-gold" />}
              text="Empowering over 2,000 students through values-based education."
              color="border-brand-gold/20"
              href="#education"
            />
            <DashboardCard 
              title="Enterprises" 
              icon={<Sprout className="h-8 w-8 text-brand-green" />}
              text="Sustainable farming and crafts guiding our community legacy."
              color="border-brand-green/20"
              href="#enterprises"
            />
            <DashboardCard 
              title="Mission" 
              icon={<Cross className="h-8 w-8 text-zinc-400" />}
              text="Seeking God through communal prayer and dedicated service."
              color="border-zinc-200/20"
              href="#health"
            />
          </section>

          {/* Trust & Legacy Stats */}
          <section className="glass rounded-[3rem] py-16 px-8 border border-white/10 shadow-2xl reveal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <StatBadge value="350+" label="Final Vows" />
              <StatBadge value="150" label="Hospital Beds" />
              <StatBadge value="2,000+" label="Students" />
            </div>
          </section>

          {/* Detailed Pillars: Health & Education (Z-Pattern) */}
          <div id="health" className="space-y-32 pt-24">
             {/* Health Detail */}
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center reveal">
                <div className="lg:col-span-7 relative group">
                   <div className="absolute -inset-4 bg-brand-red/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                      <Image src="/images/sisters3.jpeg" alt="Health" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                   </div>
                </div>
                <div className="lg:col-span-5 space-y-6">
                   <h2 className="text-brand-red font-black uppercase tracking-widest text-xs">Healing Ministry</h2>
                   <h3 className="text-4xl font-black tracking-tighter">Compassion in Action</h3>
                   <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      St. Benedict's Hospital is a beacon of hope, providing life-saving healthcare and maternal wellness to over 50,000 patients annually.
                   </p>
                   <a href="#donate" className="inline-flex items-center gap-2 font-bold text-brand-red hover:underline group">
                      Support this cause <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
             </div>

             {/* Education Detail */}
             <div id="education" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center reveal">
                <div className="lg:col-span-5 lg:order-1 space-y-6 lg:text-right">
                   <h2 className="text-brand-gold font-black uppercase tracking-widest text-xs">Education Ministry</h2>
                   <h3 className="text-4xl font-black tracking-tighter">Nurturing Wisdom</h3>
                   <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      From preschool to secondary levels, our schools foster academic excellence and moral integrity in the next generation.
                   </p>
                   <a href="#donate" className="inline-flex flex-row-reverse lg:flex-row items-center gap-2 font-bold text-brand-gold hover:underline group">
                      Invest in their future <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
                <div id="enterprises" className="lg:col-span-7 lg:order-2 relative group">
                   <div className="absolute -inset-4 bg-brand-gold/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                      <Image src="/images/sisters4.jpeg" alt="Education" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                   </div>
                </div>
             </div>
          </div>

          {/* Testimonials Grid */}
          <section className="space-y-16 reveal">
            <div className="text-center space-y-4">
               <h2 className="text-brand-red font-black uppercase tracking-widest text-xs">Testimonials</h2>
               <h3 className="text-5xl font-black tracking-tighter">Stories of Impact</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Testimonial 
                quote="The Sisters saved my child’s life at St. Benedict’s hospital. Their care is unparalleled." 
                author="Local Mother" 
                role="Recipient of Care"
              />
              <Testimonial 
                quote="The education I received from St. Agnes gave me the hope and skills to build a better life." 
                author="Former Student" 
                role="Chipole Alumni"
              />
              <Testimonial 
                quote="The community and spirit of prayer here is a constant inspiration to all of us in the region." 
                author="Community Leader" 
                role="Regional Spokesperson"
              />
            </div>
          </section>

          {/* Donation CTA */}
          <section id="donate" className="relative group rounded-[4rem] overflow-hidden bg-brand-red py-24 px-8 text-center text-white shadow-3xl reveal">
            <div className="absolute inset-0 bg-[url('/images/farm.jpeg')] bg-cover opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                 BECOME PART OF <br /> OUR <span className="underline decoration-brand-gold decoration-8">LEGACY</span>
               </h2>
               <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
                 Your support empowers the Benedictine Sisters to continue their mission of healing and education.
               </p>
               <div className="flex flex-wrap justify-center gap-6">
                 <button className="bg-white text-brand-red font-black px-12 py-5 rounded-2xl text-xl hover:bg-zinc-100 transition-all hover:scale-105 shadow-2xl">
                    Donate Now
                 </button>
                 <button className="glass text-white border border-white/30 font-black px-12 py-5 rounded-2xl text-xl hover:bg-white/10 transition-all hover:scale-105">
                    Other Ways to Help
                 </button>
               </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-24">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
               <Image src="/logo/chipole_logo.png" alt="Logo" width={40} height={40} className="object-contain" />
               <span className="font-black tracking-tighter text-lg uppercase">Benedictine Sisters</span>
            </div>
            <div className="flex gap-12">
               <div className="text-center md:text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Rule</p>
                  <p className="text-sm font-bold">Ora et Labora</p>
               </div>
               <div className="text-center md:text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Location</p>
                  <p className="text-sm font-bold">Chipole, Tanzania</p>
               </div>
            </div>
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">© 2026 Benedictine Sisters</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Helper Components */
function DashboardCard({ title, icon, text, color, href }: { title: string; icon: React.ReactNode; text: string; color: string; href: string }) {
  return (
    <a href={href} className={`glass-heavy p-8 rounded-[2rem] shadow-xl border ${color} hover:scale-105 hover:shadow-2xl transition-all group flex flex-col items-center text-center space-y-4`}>
      <div className="p-4 rounded-2xl bg-white/5 shadow-inner group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-black tracking-tight">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">{text}</p>
      <div className="pt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-brand-red transition-colors">
         Explore <ArrowRight className="h-3 w-3" />
      </div>
    </a>
  );
}

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-5xl font-black tracking-tighter text-gradient">{value}</div>
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">{label}</div>
    </div>
  );
}

function Testimonial({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="glass p-10 rounded-[2.5rem] border border-white/5 relative group hover:border-brand-red/20 transition-colors">
      <Quote className="absolute top-8 left-8 h-8 w-8 text-black/5 dark:text-white/5" />
      <p className="relative z-10 italic text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed text-lg mb-8">
        "{quote}"
      </p>
      <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
         <span className="block font-black text-brand-red text-sm uppercase tracking-widest">{author}</span>
         <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">{role}</span>
      </div>
    </div>
  );
}

function NavUrl({ href, children, active = false, highlight = false }: { href: string; children: React.ReactNode; active?: boolean; highlight?: boolean }) {
  return (
    <a href={href} className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-brand-red ${active ? 'text-brand-red' : 'text-zinc-600 dark:text-zinc-400'} ${highlight ? 'text-brand-red px-6 py-2 glass rounded-full border border-brand-red/20' : ''}`}>
      {children}
    </a>
  );
}
