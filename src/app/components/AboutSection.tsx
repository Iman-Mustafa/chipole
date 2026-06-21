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
                alt="Sisters working" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -right-4 h-[300px] w-[60%] rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/images/sisters4.jpeg" 
                alt="Community life" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:pl-8 mt-16 lg:mt-0">
            <div className="inline-block border-b-2 border-brand-red pb-1 mb-4">
              <span className="text-zinc-600 font-medium tracking-wide text-sm">A Special Welcome</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
              From our Mother Superior, <br /> Sr. Sairis Msaidizi Mkinga
            </h2>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              I am very happy that you have taken the time to learn about us. We have recently celebrated our 75th Anniversary as a religious community. We are a growing community of Benedictine Nuns:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-brand-red" />
                <span>Over 350 in Final Profession</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-brand-red" />
                <span>Some 130 In Temporary Vows</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-brand-red" />
                <span>Around 50 Novices & Candidates</span>
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
