"use client";

import Image from "next/image";
import { useState, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { HeartPulse, GraduationCap, Sprout, Cross, ArrowRight, Quote } from "lucide-react";
import LanguageSelector from "@/app/components/LanguageSelector";
import MobileNav from "@/app/components/MobileNav";

const heroImages = [
  { src: "/images/sisters.jpeg", alt: "Benedictine sisters gathered in community" },
  { src: "/images/sisters3.jpeg", alt: "Sisters at work in the Chipole community" },
  { src: "/images/sisters4.jpeg", alt: "Sisters supporting education and outreach" },
  { src: "/images/farm.jpeg", alt: "Sustainable farming on community land" },
  { src: "/images/trousers.jpeg", alt: "Handcrafts and enterprise activities" },
];

function subscribeMotionPreference(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeMotionPreference,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prefersReducedMotion) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const heroTransitionClass = prefersReducedMotion
    ? ""
    : "transition-opacity duration-700 ease-out motion-safe:duration-1000";
  const pillarImageHoverClass = prefersReducedMotion
    ? "object-cover"
    : "object-cover motion-safe:group-hover:scale-[1.02]";

  return (
    <div id="home" className="relative min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 mesh-gradient selection:bg-brand-red selection:text-white">
      <a href="#mission" className="skip-to-content">
        Skip to main content
      </a>

      <nav
        aria-label="Primary"
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-5xl transition-transform duration-300 ease-out motion-safe:duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-32"
        }`}
      >
        <div className="glass-heavy rounded-full px-6 py-4 flex items-center justify-between shadow-xl border border-white/20 dark:border-white/10">
          <a
            href="#home"
            className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950"
          >
            <Image
              src="/logo/chipole_logo.png"
              alt=""
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="hidden md:block font-black tracking-tighter text-sm uppercase">Benedictine Sisters</span>
          </a>

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

      <section
        aria-roledescription="carousel"
        aria-label="Community photography"
        className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden"
      >
        {heroImages.map((img, idx) => (
          <div
            key={img.src}
            className={`absolute inset-0 ${heroTransitionClass} ${
              currentHeroIndex === idx ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={currentHeroIndex !== idx}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-zinc-50 dark:to-black z-[2]" />

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {currentHeroIndex + 1} of {heroImages.length}
        </p>

        <div className="container-wide relative z-10 text-center space-y-8 reveal">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Since 1945
          </div>
          <h1 className="text-hero font-black tracking-tighter text-white leading-[0.95] max-w-5xl mx-auto drop-shadow-2xl">
            BENEDICTINE <span className="text-gradient">SISTERS</span> <br /> OF ST AGNES, CHIPOLE
          </h1>
          <p className="text-lead text-white/95 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-xl">
            A growing community of Benedictine Nuns dedicated to prayer and service in the heart of Tanzania.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a
              href="#mission"
              className="rounded-full bg-white px-10 py-4 text-lg font-bold text-black shadow-lg transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 motion-safe:hover:scale-[1.02] motion-safe:transition-transform"
            >
              Our Story
            </a>
            <a
              href="#donate"
              className="rounded-full bg-brand-red px-10 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-brand-red/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 motion-safe:hover:scale-[1.02] motion-safe:transition-transform"
            >
              Support Our Mission
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-2"
          role="group"
          aria-label="Hero slideshow"
        >
          {heroImages.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              aria-label={`Slide ${idx + 1}: ${img.alt}`}
              aria-current={currentHeroIndex === idx ? "true" : undefined}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-2 rounded-full transition-[width,background-color] duration-200 motion-safe:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 ${
                currentHeroIndex === idx ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <div
          className={`absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-white/50 motion-safe:animate-bounce ${prefersReducedMotion ? "hidden" : ""}`}
          aria-hidden
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 p-1">
            <div className="h-2 w-1 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      <main className="relative z-10 mt-[-100px] pb-32">
        <div className="container-wide space-y-32">
          <section
            id="mission"
            className="scroll-mt-32 space-y-6 rounded-[2rem] border border-zinc-200/80 bg-zinc-50/90 px-8 py-12 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80 reveal md:px-12 md:py-14"
          >
            <h2 className="text-brand-red font-black uppercase tracking-widest text-xs">Our mission</h2>
            <p className="text-section font-black tracking-tighter text-zinc-900 dark:text-zinc-100 max-w-3xl">
              Prayer and work in community
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              We live by the Rule of St. Benedict—<em className="not-italic font-semibold text-zinc-800 dark:text-zinc-200">Ora et Labora</em>—seeking God through the liturgy, hospitality, and service to our neighbors in Chipole and beyond. Every ministry flows from that single call: to love Christ in one another and in those we serve.
            </p>
          </section>

          <section
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 reveal"
            aria-label="Ministry areas"
          >
            <DashboardCard
              title="Health Care"
              icon={<HeartPulse className="h-8 w-8 text-brand-red" aria-hidden />}
              text="150-bed referral hospital serving the heart of Chipole."
              color="border-brand-red/25"
              href="#health"
              className="lg:col-span-2 lg:row-span-2 min-h-[280px] lg:min-h-0"
            />
            <DashboardCard
              title="Education"
              icon={<GraduationCap className="h-8 w-8 text-brand-gold" aria-hidden />}
              text="Empowering over 2,000 students through values-based education."
              color="border-brand-gold/25"
              href="#education"
              className="lg:col-span-2"
            />
            <DashboardCard
              title="Enterprises"
              icon={<Sprout className="h-8 w-8 text-brand-green" aria-hidden />}
              text="Sustainable farming and crafts guiding our community legacy."
              color="border-brand-green/25"
              href="#enterprises"
              className="lg:col-span-1"
            />
            <DashboardCard
              title="Mission"
              icon={<Cross className="h-8 w-8 text-zinc-400" aria-hidden />}
              text="Seeking God through communal prayer and dedicated service."
              color="border-zinc-200/60 dark:border-zinc-600/40"
              href="#mission"
              className="lg:col-span-1"
            />
          </section>

          <section className="surface-panel rounded-[2rem] py-16 px-8 shadow-sm reveal md:rounded-[3rem]">
            <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
              <StatBadge value="350+" label="Final Vows" />
              <StatBadge value="150" label="Hospital Beds" />
              <StatBadge value="2,000+" label="Students" />
            </div>
          </section>

          <div id="health" className="scroll-mt-32 space-y-32 pt-8">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 reveal">
              <div className="group relative lg:col-span-7">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-red/10 opacity-0 blur-2xl transition-opacity motion-safe:duration-500 group-hover:opacity-100" />
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-zinc-200/60 shadow-lg dark:border-white/10">
                  <Image
                    src="/images/sisters3.jpeg"
                    alt="Sisters and staff at St. Benedict's Hospital"
                    fill
                    className={`object-cover transition-transform motion-safe:duration-700 ${pillarImageHoverClass}`}
                  />
                </div>
              </div>
              <div className="space-y-6 lg:col-span-5">
                <h2 className="text-xs font-black uppercase tracking-widest text-brand-red">Healing Ministry</h2>
                <h3 className="text-section font-black tracking-tighter">Compassion in Action</h3>
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  St. Benedict&apos;s Hospital is a beacon of hope, providing life-saving healthcare and maternal wellness to over 50,000 patients annually.
                </p>
                <a
                  href="#donate"
                  className="group inline-flex items-center gap-2 font-bold text-brand-red hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 rounded-sm"
                >
                  Support this cause <ArrowRight className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden />
                </a>
              </div>
            </div>

            <div id="education" className="scroll-mt-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-12 reveal">
              <div className="space-y-6 lg:order-1 lg:col-span-5 lg:text-right">
                <h2 className="text-xs font-black uppercase tracking-widest text-brand-gold">Education Ministry</h2>
                <h3 className="text-section font-black tracking-tighter">Nurturing Wisdom</h3>
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  From preschool to secondary levels, our schools foster academic excellence and moral integrity in the next generation.
                </p>
                <a
                  href="#donate"
                  className="group inline-flex flex-row-reverse items-center gap-2 font-bold text-brand-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 rounded-sm lg:flex-row"
                >
                  Invest in their future <ArrowRight className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden />
                </a>
              </div>
              <div className="group relative lg:order-2 lg:col-span-7">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-gold/10 opacity-0 blur-2xl transition-opacity motion-safe:duration-500 group-hover:opacity-100" />
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-zinc-200/60 shadow-lg dark:border-white/10">
                  <Image
                    src="/images/sisters4.jpeg"
                    alt="Students and sisters at St. Agnes schools"
                    fill
                    className={`object-cover transition-transform motion-safe:duration-700 ${pillarImageHoverClass}`}
                  />
                </div>
              </div>
            </div>
          </div>

          <section
            id="enterprises"
            className="scroll-mt-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-12 reveal"
            aria-labelledby="enterprises-heading"
          >
            <div className="space-y-6 lg:col-span-5">
              <h2 className="text-xs font-black uppercase tracking-widest text-brand-green">
                Enterprises &amp; sustainability
              </h2>
              <h3 className="text-section font-black tracking-tighter" id="enterprises-heading">
                Land, labor, and legacy
              </h3>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Our farms and craft workshops support the convent and local employment—turning the fruits of the earth into resources for healthcare, education, and care for those in need. Sustainability here is not a slogan; it is how we steward what we have been given.
              </p>
              <a
                href="#donate"
                className="group inline-flex items-center gap-2 font-bold text-brand-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 rounded-sm"
              >
                Support our work <ArrowRight className="h-4 w-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden />
              </a>
            </div>
            <div className="group relative lg:col-span-7">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-green/10 opacity-0 blur-2xl transition-opacity motion-safe:duration-500 group-hover:opacity-100" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-zinc-200/60 shadow-lg dark:border-white/10">
                <Image
                  src="/images/farm.jpeg"
                  alt="Sustainable farming on community land"
                  fill
                  className={`object-cover transition-transform motion-safe:duration-700 ${pillarImageHoverClass}`}
                />
              </div>
            </div>
          </section>

          <section className="space-y-16 reveal">
            <div className="space-y-4 text-center">
              <h2 className="text-xs font-black uppercase tracking-widest text-brand-red">Testimonials</h2>
              <h3 className="text-display font-black tracking-tighter">Stories of Impact</h3>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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

          <section
            id="donate"
            className="scroll-mt-32 group relative overflow-hidden rounded-[2.5rem] bg-brand-red px-8 py-24 text-center text-white shadow-lg reveal md:rounded-[4rem]"
          >
            <div className="absolute inset-0 bg-[url('/images/farm.jpeg')] bg-cover opacity-20 mix-blend-overlay motion-safe:transition-transform motion-safe:duration-1000 motion-safe:group-hover:scale-110" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl space-y-12">
              <h2 className="text-display mb-8 font-black leading-none tracking-tighter">
                BECOME PART OF <br /> OUR <span className="underline decoration-brand-gold decoration-4 md:decoration-8">LEGACY</span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl font-medium text-white/90 md:text-2xl">
                Your support empowers the Benedictine Sisters to continue their mission of healing and education.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#site-footer"
                  className="rounded-2xl bg-white px-12 py-5 text-xl font-black text-brand-red shadow-lg transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red motion-safe:hover:scale-[1.02] motion-safe:transition-transform"
                >
                  Donate Now
                </a>
                <a
                  href="#site-footer"
                  className="surface-panel-on-red rounded-2xl border border-white/35 px-12 py-5 text-xl font-black text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red motion-safe:hover:scale-[1.02] motion-safe:transition-transform"
                >
                  Other Ways to Help
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer
        id="site-footer"
        className="scroll-mt-28 border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="container-wide">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-3">
              <Image src="/logo/chipole_logo.png" alt="" width={40} height={40} className="object-contain" />
              <span className="text-lg font-black uppercase tracking-tighter">Benedictine Sisters</span>
            </div>
            <div className="flex gap-12">
              <div className="text-center md:text-left">
                <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">Rule</p>
                <p className="text-sm font-bold">Ora et Labora</p>
              </div>
              <div className="text-center md:text-left">
                <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">Location</p>
                <p className="text-sm font-bold">Chipole, Tanzania</p>
              </div>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">© 2026 Benedictine Sisters</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DashboardCard({
  title,
  icon,
  text,
  color,
  href,
  className = "",
}: {
  title: string;
  icon: ReactNode;
  text: string;
  color: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group surface-card flex min-h-[220px] flex-col items-center space-y-4 rounded-[1.75rem] border p-8 text-center shadow-sm transition-[box-shadow,transform,border-color] motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950 ${color} ${className}`}
    >
      <div className="rounded-2xl bg-zinc-100/80 p-4 transition-colors group-hover:bg-zinc-200/80 dark:bg-white/5 dark:group-hover:bg-white/10">{icon}</div>
      <h3 className="text-xl font-black tracking-tight">{title}</h3>
      <p className="text-sm font-medium leading-relaxed text-zinc-600 dark:text-zinc-400">{text}</p>
      <div className="flex items-center gap-2 pt-4 text-xs font-black uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-brand-red dark:text-zinc-400">
        Explore <ArrowRight className="h-3 w-3" aria-hidden />
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
    <figure className="surface-card relative rounded-[2rem] border border-zinc-200/70 p-10 shadow-sm transition-colors dark:border-white/10 md:rounded-[2.5rem]">
      <Quote className="pointer-events-none absolute left-8 top-8 h-8 w-8 text-zinc-200 dark:text-white/10" aria-hidden />
      <blockquote className="relative z-10 mb-8 text-lg font-medium italic leading-relaxed text-zinc-700 dark:text-zinc-300">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="border-t border-zinc-100 pt-6 dark:border-zinc-800">
        <span className="block text-sm font-black uppercase tracking-widest text-brand-red">{author}</span>
        <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest text-zinc-500">{role}</span>
      </figcaption>
    </figure>
  );
}

function NavUrl({
  href,
  children,
  active = false,
  highlight = false,
}: {
  href: string;
  children: ReactNode;
  active?: boolean;
  highlight?: boolean;
}) {
  return (
    <a
      href={href}
      className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full ${
        active ? "text-brand-red" : "text-zinc-600 dark:text-zinc-400"
      } ${
        highlight
          ? "rounded-full border border-brand-red/25 bg-white/10 px-6 py-2 text-brand-red backdrop-blur-sm dark:bg-white/5"
          : ""
      }`}
    >
      {children}
    </a>
  );
}
