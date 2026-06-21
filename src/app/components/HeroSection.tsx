import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#f0f4f8] pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/90 sm:to-white/20 z-10" />
        <div className="w-full h-full relative object-cover object-center lg:object-right">
            <Image 
                src="/images/sisters3.jpeg" 
                alt="Hero Background" 
                fill 
                className="object-cover object-center opacity-40 mix-blend-multiply" 
                priority
            />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 mb-6 leading-tight tracking-tighter">
            Benedictine Sisters <br />
            <span className="font-light text-zinc-700 text-4xl lg:text-5xl">of St Agnes, Chipole</span>
          </h1>
          <p className="text-lg text-zinc-600 mb-10 max-w-xl leading-relaxed">
            Songea, Tanzania - A growing community of African Benedictine Nuns dedicated to prayer and service in the heart of Tanzania.
          </p>
          <a href="#" className="inline-block bg-brand-red text-white px-8 py-4 rounded font-medium hover:bg-brand-red/90 transition-colors shadow-lg">
            Our Mission
          </a>
        </div>
      </div>
    </section>
  );
}
