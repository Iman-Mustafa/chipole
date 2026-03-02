import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* Top Banner Branding */}
      <header className="w-full bg-white dark:bg-zinc-900 pt-12 pb-6 px-8 text-center sm:text-left">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-zinc-800 dark:text-white max-w-5xl">
          BENEDICTINE SISTERS OF ST AGNES, CHIPOLE
        </h1>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-4 border-y border-zinc-200 bg-white/80 px-8 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
        <NavUrl href="#" active>Home</NavUrl>
        <NavUrl href="#">Our Mission</NavUrl>
        <NavUrl href="#">Health Care</NavUrl>
        <NavUrl href="#">Education</NavUrl>
        <NavUrl href="#">Development Programs</NavUrl>
        <NavUrl href="#">Enterprises</NavUrl>
        <NavUrl href="#" highlight>Please Donate!</NavUrl>
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="opacity-60">🇬🇧 English</span>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-8 py-12">
        {/* Visual Hero Area */}
        <div className="relative mb-16 aspect-[21/9] w-full overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-800 shadow-2xl">
          <Image
            src="/C:\Users\imanm\.gemini\antigravity\brain\164657de-3115-4bf8-9425-d2122684241e\chipole_sisters_hero_placeholder_1772018697509.png"
            alt="Chipole Sisters Hero"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Welcome Section */}
        <section className="mb-20 max-w-4xl">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-red">Home</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="font-bold text-zinc-800 dark:text-white text-2xl">
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

        <hr className="mb-16 border-zinc-200 dark:border-zinc-800" />

        {/* Self-Sufficiency Section */}
        <section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-3xl font-bold tracking-tight">The Benedictine Tradition of Self-Sufficiency</h3>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <p>Almost all of our basic daily needs are met by members of our community. We farm: planting, cultivating and harvesting both our food crops and all necessary staple crops in our gardens. All by hand but most rewarding, because the work is carried out as a community.</p>
              <p>Our dairy cattle, poultry and hog raising are devotedly carried on daily by our Sisters. Candle making, Hosts, sewing Mass vestments & many other crafts provide additional support.</p>
            </div>
          </div>
          <div className="rounded-3xl bg-zinc-100 p-8 dark:bg-zinc-900/50 glass border border-white/10 shadow-xl">
            <div className="h-full w-full rounded-2xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center p-8 text-center">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                Supporting Community through<br />Crafts & Production
              </p>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30">
          <h3 className="mb-8 text-2xl font-bold">Leave a Reply</h3>
          <form className="space-y-6">
            <div>
              <label className="form-label">Comment *</label>
              <textarea className="form-input min-h-[160px]" required />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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
            <button className="rounded-lg bg-zinc-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black">
              Post Comment
            </button>
          </form>
        </section>
      </main>

      {/* Detailed Footer */}
      <footer className="mt-20 border-t border-zinc-200 bg-zinc-100 py-20 px-8 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
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
