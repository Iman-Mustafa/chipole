import Image from "next/image";
import ImageSlider from "@/app/components/ImageSlider";
import LanguageSelector from "@/app/components/LanguageSelector";
import MobileNav from "@/app/components/MobileNav";

const craftImages = [
  "/images/3d.jpeg",
  "/images/farm.jpeg",
  "/images/garden.jpeg",
  "/images/hall.jpeg",
  "/images/hall2.jpeg",
  "/images/sisters.jpeg",
  "/images/sisters2.jpeg",
  "/images/sisters3.jpeg",
  "/images/sisters4.jpeg",
  "/images/sisters5.jpeg",
  "/images/trousers.jpeg",
];

export default function Home() {
  return (
    <div id="home" className="relative min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 mesh-gradient selection:bg-brand-red selection:text-white">
      {/* Floating Modern Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-5xl">
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
            <NavUrl href="#crafts">Enterprises</NavUrl>
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

      {/* Immersive Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/trousers.jpeg"
          alt="Chipole Sisters Hero"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-zinc-50 dark:to-black" />
        
        <div className="container-wide relative z-10 text-center space-y-8 reveal">
          <div className="inline-block px-4 py-2 rounded-full glass border border-white/20 text-white text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Established 1945
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] max-w-5xl mx-auto">
            BENEDICTINE <span className="text-gradient">SISTERS</span> <br /> OF ST AGNES, CHIPOLE
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
           </div>
        </div>
      </section>

      <main className="relative z-10 mt-[-100px]">
        <div className="container-wide">
          {/* Mission Glass Card */}
          <section id="mission" className="relative z-20 mb-32 scroll-mt-32 reveal">
            <div className="glass p-8 md:p-16 rounded-[3rem] shadow-2xl border border-white/10 overflow-hidden relative group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-red/10 rounded-full blur-[100px] group-hover:bg-brand-red/20 transition-colors" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-4">Our Mission</h2>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                      Dedicated to <span className="text-brand-red">Prayer</span> & <br /> Humble <span className="text-brand-gold">Service</span>
                    </h3>
                  </div>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    We follow the Rule of St. Benedict, seeking God through prayer and work (Ora et Labora) in the heart of Africa.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                    <StatCard value="350+" label="Final Vows" />
                    <StatCard value="130" label="Temporary" />
                    <StatCard value="50" label="Novices" />
                  </div>
                </div>
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image src="/images/sisters.jpeg" alt="Sisters" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                    <p className="text-white italic text-sm">
                      "We seek God through communal prayer and dedicated service."
                      <span className="block mt-2 font-bold not-italic">— Sr. Beatrice Simon Kapinga OSB</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Health Care: Z-Layout */}
          <section id="health" className="mb-32 scroll-mt-32 reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative group">
                <div className="absolute -inset-4 bg-brand-green/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image src="/images/sisters3.jpeg" alt="Health" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
                    <div className="glass px-6 py-4 rounded-2xl">
                      <p className="text-white font-bold">St. Benedict's Hospital</p>
                      <p className="text-white/70 text-sm">Providing care since 1950</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-8 lg:pl-8">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-4">Healing Ministry</h2>
                  <h3 className="text-4xl font-black tracking-tighter leading-tight">Compassion in <span className="text-brand-green">Action</span></h3>
                </div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                  Our medical mission provides life-saving care through St. Benedict's Hospital and rural health centers.
                </p>
                <ul className="space-y-4">
                  {["150-bed referral hospital", "Maternal Wellness Center", "Outreach programs"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                      <div className="h-6 w-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-xs font-bold group-hover:bg-brand-green group-hover:text-white transition-colors">✓</div>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Education: Z-Layout */}
          <section id="education" className="mb-32 scroll-mt-32 reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 lg:order-1 space-y-8 lg:pr-8">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">Education</h2>
                  <h3 className="text-4xl font-black tracking-tighter leading-tight">Nurturing <span className="text-brand-gold">Wisdom</span></h3>
                </div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                  We empower youth through values-based education from nursery to secondary levels.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Nursery", "Primary", "Secondary", "Technical"].map(cat => (
                    <span key={cat} className="glass px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-brand-gold transition-colors">{cat}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 lg:order-2 relative group">
                <div className="absolute -inset-4 bg-brand-gold/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image src="/images/sisters4.jpeg" alt="Education" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </section>

          {/* Enterprises: Mosaic */}
          <section id="crafts" className="mb-32 scroll-mt-32 reveal">
            <div className="text-center mb-16 space-y-4">
               <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Enterprises</h2>
               <h3 className="text-4xl font-black tracking-tighter">Ora et <span className="text-gradient">Labora</span></h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
               <MosaicItem img="/images/farm.jpeg" label="Agriculture" span="col-span-2 row-span-2" />
               <MosaicItem img="/images/garden.jpeg" label="Gardening" />
               <MosaicItem img="/images/hall.jpeg" label="Hospitality" />
               <MosaicItem img="/images/hall2.jpeg" label="Community" span="col-span-2" />
            </div>
          </section>

          {/* Donation: High Impact */}
          <section id="donate" className="mb-32 scroll-mt-32 reveal">
             <div className="relative rounded-[4rem] overflow-hidden bg-zinc-900 py-24 px-8 text-center">
                <Image src="/images/sisters5.jpeg" alt="Support" fill className="object-cover opacity-30 mix-blend-overlay" />
                <div className="relative z-10 max-w-3xl mx-auto space-y-12">
                   <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
                     BECOME PART OF <br /> OUR <span className="text-brand-red underline decoration-brand-gold decoration-8">LEGACY</span>
                   </h2>
                   <p className="text-xl text-zinc-300 font-medium">Help us serve those who need it most.</p>
                   <div className="flex flex-wrap justify-center gap-6">
                      <button className="bg-brand-red text-white font-black px-12 py-5 rounded-2xl text-xl hover:bg-red-700 transition-all hover:scale-105 shadow-2xl">Donate Now</button>
                      <button className="glass text-white font-black px-12 py-5 rounded-2xl text-xl hover:bg-white/10 transition-all hover:scale-105">Learn More</button>
                   </div>
                </div>
             </div>
          </section>

          {/* Comments */}
          <section className="mx-auto max-w-4xl glass p-12 rounded-[2.5rem] mb-32 reveal">
            <h3 className="mb-8 text-3xl font-black tracking-tighter">Leave a Message</h3>
            <form className="space-y-6">
              <textarea className="form-input min-h-[160px]" placeholder="Share your thoughts..." required />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" className="form-input" placeholder="Name" required />
                <input type="email" className="form-input" placeholder="Email" required />
              </div>
              <button className="bg-zinc-900 dark:bg-white text-white dark:text-black font-black px-10 py-4 rounded-xl hover:scale-105 transition-all">Post Comment</button>
            </form>
          </section>
        </div>
      </main>

      <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <FooterSection title="Postal Address">
              <address className="not-italic text-sm text-zinc-500 space-y-1 font-medium">
                <p>St. Agnes Convent, Chipole</p>
                <p>P.O. Box 15, Peramiho</p>
                <p>Tanzania</p>
              </address>
            </FooterSection>
            <FooterSection title="Inquiries">
              <a href="mailto:srpresentasiaosb@gmail.com" className="text-zinc-900 dark:text-white font-bold hover:text-brand-red transition-colors block">srpresentasiaosb@gmail.com</a>
            </FooterSection>
            <FooterSection title="Navigation">
              <div className="flex flex-col gap-2">
                 {["Mission", "Health", "Education", "Enterprises"].map(link => (
                   <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-bold text-zinc-500 hover:text-brand-red transition-colors">{link}</a>
                 ))}
              </div>
            </FooterSection>
            <FooterSection title="Community">
              <select className="form-input py-2 text-[10px] font-black uppercase tracking-widest bg-zinc-50 dark:bg-zinc-900 outline-none">
                <option>Chipole</option>
                <option>Peramiho</option>
              </select>
            </FooterSection>
          </div>
          <div className="mt-24 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex justify-between items-center">
             <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">© 2026 Benedictine Sisters</p>
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Ora et Labora</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Helper Components */
function MosaicItem({ img, label, span = "" }: { img: string; label: string; span?: string }) {
  return (
    <div className={`relative rounded-3xl overflow-hidden group shadow-lg ${span}`}>
       <Image src={img} alt={label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
          <span className="text-white font-black uppercase tracking-[0.3em] text-xs">{label}</span>
       </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass px-6 py-4 rounded-2xl border border-white/10 hover:border-brand-red/50 transition-colors text-center">
      <div className="text-2xl font-black text-brand-red tracking-tighter">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mt-1">{label}</div>
    </div>
  );
}

function NavUrl({ href, children, active = false, highlight = false }: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  highlight?: boolean;
}) {
  return (
    <a
      href={href}
      className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-brand-red ${active ? 'text-brand-red' : 'text-zinc-600 dark:text-zinc-400'} ${highlight ? 'text-brand-red px-6 py-2 glass rounded-full' : ''}`}
    >
      {children}
    </a>
  );
}

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">{title}</h4>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}
