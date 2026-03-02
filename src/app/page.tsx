import Image from "next/image";
import ImageSlider from "@/app/components/ImageSlider";
import LanguageSelector from "@/app/components/LanguageSelector";
import MobileNav from "@/app/components/MobileNav";

const craftImages = [
  "/images/IMG_4164.jpg",
  "/images/IMG_4184.jpg",
  "/images/IMG_4192.jpg",
  "/images/IMG_4199.jpg",
  "/images/IMG_4200.jpg",
  "/images/IMG_4203.jpg",
  "/images/IMG_4204.jpg",
  "/images/IMG_4216.jpg",
  "/images/IMG_4250.jpg",
  "/images/PD_33_File_007.jpg",
  "/images/Screenshot 2026-03-02 133437.jpg",
  "/images/chipole.jpg",
  "/images/img.jpg",
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* Top Banner Branding */}
      <header className="relative w-full bg-white dark:bg-zinc-900 pt-12 pb-10 px-4 sm:pt-16 sm:px-8 flex flex-col items-center justify-center border-b border-zinc-100 dark:border-zinc-800/50">
        <h1 className="text-3xl font-extrabold tracking-tighter text-center sm:text-5xl lg:text-7xl text-zinc-800 dark:text-white max-w-6xl mb-8 leading-tight">
          BENEDICTINE SISTERS OF ST AGNES, CHIPOLE
        </h1>
        <div className="flex justify-center">
          <Image
            src="/logo/chipole_logo.png"
            alt="Chipole Logo"
            width={120}
            height={120}
            className="object-contain sm:w-[150px] sm:h-[150px] hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 flex w-full items-center justify-between sm:justify-center border-y border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-black/95">
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <NavUrl href="#" active>Home</NavUrl>
          <NavUrl href="#">Our Mission</NavUrl>
          <NavUrl href="#">Health Care</NavUrl>
          <NavUrl href="#">Education</NavUrl>
          <NavUrl href="#">Development Programs</NavUrl>
          <NavUrl href="#">Enterprises</NavUrl>
          <NavUrl href="#" highlight>Please Donate!</NavUrl>
        </div>

        <div className="flex items-center gap-4 ml-auto sm:ml-10">
          <LanguageSelector />
          <MobileNav />
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-12">
        {/* Visual Hero Area */}
        <div className="relative mb-12 aspect-square w-full overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800 shadow-2xl sm:mb-16 sm:aspect-[21/9] sm:rounded-3xl">
          <Image
            src="/images/chipole.jpg"
            alt="Chipole Sisters Hero"
            fill
            className="object-cover opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Welcome Section */}
        <section className="mb-12 max-w-4xl sm:mb-20">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">Home</h2>
          <div className="space-y-6 text-base leading-relaxed sm:text-lg">
            <p className="font-bold text-zinc-800 dark:text-white text-xl sm:text-2xl">
              A special welcome from our Mother Superior, Sr. Beatrice Simon Kapinga OSB
            </p>
            <p className="italic text-zinc-600 dark:text-zinc-400">
              I am very happy that you have taken the time to learn about us. We are a growing community of Benedictine Nuns.
            </p>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatItem value="350+" label="in Final Profession" dot="bg-brand-red" />
              <StatItem value="130" label="In Temporary Vows" dot="bg-brand-gold" />
              <StatItem value="50" label="Novices & Candidates" dot="bg-brand-green" />
            </ul>
            <p className="text-sm font-medium text-zinc-500">
              We have recently celebrated our 75th Anniversary as a religious community.
            </p>
          </div>
        </section>

        <hr className="mb-12 border-zinc-200 dark:border-zinc-800 sm:mb-16" />

        {/* Self-Sufficiency Section */}
        <section className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 sm:mb-24 sm:gap-12">
          <div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl">The Benedictine Tradition of Self-Sufficiency</h3>
            <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              <p>Almost all of our basic daily needs are met by members of our community. We farm: planting, cultivating and harvesting both our food crops and all necessary staple crops in our gardens. All by hand but most rewarding, because the work is carried out as a community.</p>
              <p>Our dairy cattle, poultry and hog raising are devotedly carried on daily by our Sisters. Candle making, Hosts, sewing Mass vestments & many other crafts provide additional support.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-zinc-100 overflow-hidden dark:bg-zinc-900/50 glass border border-white/10 shadow-xl aspect-video relative sm:rounded-3xl">
            <ImageSlider images={craftImages} />
            <div className="absolute top-4 left-4 z-10">
              <p className="text-[10px] font-black text-white uppercase tracking-[0.3em] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                Community Life
              </p>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30 sm:rounded-3xl sm:p-8">
          <h3 className="mb-6 text-xl font-bold sm:mb-8 sm:text-2xl">Leave a Reply</h3>
          <form className="space-y-6">
            <div>
              <label className="form-label">Comment *</label>
              <textarea className="form-input min-h-[120px] sm:min-h-[160px]" required />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <label className="form-label">Name *</label>
                <input type="text" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Email *</label>
                <input type="email" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Website</label>
                <input type="url" className="form-input" />
              </div>
            </div>
            <button className="w-full rounded-lg bg-zinc-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black sm:w-auto">
              Post Comment
            </button>
          </form>
        </section>
      </main>

      {/* Detailed Footer */}
      <footer className="mt-12 border-t border-zinc-200 bg-zinc-100 py-12 px-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:mt-20 sm:py-20 sm:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-12">
          <FooterSection title="Postal Address">
            <address className="not-italic text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
              <p>St. Agnes Convent, Chipole</p>
              <p>P.O. Box 15</p>
              <p>Peramiho</p>
              <p>Tanzania</p>
            </address>
          </FooterSection>

          <FooterSection title="For More Information">
            <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
              <p>Benedictine Sisters of St. Agnes, Chipole</p>
              <p>c/o Sister Presentasia</p>
              <a href="mailto:srpresentasiaosb@gmail.com" className="footer-link block font-medium">srpresentasiaosb@gmail.com</a>
            </div>
          </FooterSection>

          <FooterSection title="Copyright">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © Benedictine Sisters of St. Agnes, 2017-24
            </p>
          </FooterSection>

          <FooterSection title="Search">
            <div className="flex gap-2">
              <input type="text" placeholder="Search ..." className="form-input py-2 flex-1" />
              <button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-bold dark:bg-white dark:text-black hover:opacity-90">Search</button>
            </div>
          </FooterSection>

          <FooterSection title="Donations">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              To make a donation, <a href="#" className="underline font-bold text-brand-red">click here</a>
            </p>
          </FooterSection>

          <FooterSection title="Thanks for Supporting Us">
            <div className="bg-white p-4 rounded-xl border border-zinc-200 inline-block shadow-md">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-zinc-900 rounded-full flex items-center justify-center text-white text-[8px] font-bold">🌀</div>
                <span className="font-bold text-lg tracking-tighter text-black">Resilio</span>
              </div>
              <div className="h-2 w-full bg-brand-gold mt-2 rounded-full" />
            </div>
          </FooterSection>

          <FooterSection title="Categories">
            <select className="form-input py-2 text-sm bg-white dark:bg-zinc-900 cursor-pointer">
              <option>Select Category</option>
              <option>Enterprises</option>
            </select>
          </FooterSection>
        </div>
      </footer>
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
      className={`text-sm font-bold transition-all hover:text-brand-red ${active ? 'text-brand-red underline underline-offset-[12px]' : 'text-zinc-600 dark:text-zinc-400'} ${highlight ? 'text-brand-red border-b-2 border-brand-red pb-1' : ''}`}
    >
      {children}
    </a>
  );
}

function StatItem({ value, label, dot }: { value: string; label: string; dot: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className={`h-2.5 w-2.5 rounded-full ${dot} shadow-sm`} />
      <span className="text-sm font-medium">
        <span className="font-bold text-zinc-900 dark:text-white">{value}</span> {label}
      </span>
    </li>
  );
}

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h4 className="footer-title">{title}</h4>
      {children}
    </div>
  );
}
