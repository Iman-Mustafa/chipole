import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Left */}
          <div className="relative">
            <div className="relative h-[400px] w-[80%] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/sisters.jpeg" 
                alt="Doctor working" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -right-4 h-[300px] w-[60%] rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/images/sisters4.jpeg" 
                alt="Consultation" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:pl-8 mt-16 lg:mt-0">
            <div className="inline-block border-b-2 border-brand-red pb-1 mb-4">
              <span className="text-zinc-600 font-medium tracking-wide text-sm">Welcome to Docmed</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
              Best Care For Your <br /> Good Health
            </h2>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-brand-red" />
                <span>Apartments frequently or motionless.</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-brand-red" />
                <span>Duis aute irure dolor in reprehenderit in voluptate.</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-brand-red" />
                <span>Voluptatem quia voluptas sit aspernatur.</span>
              </li>
            </ul>
            <a href="#" className="inline-block bg-brand-red text-white px-8 py-3 rounded font-medium hover:bg-brand-red/90 transition-colors">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
