import { HeartPulse, BookOpen, Users } from "lucide-react";

export default function QuickInfoCards() {
  return (
    <section className="relative z-30 -mt-20 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-[#a62222] text-white p-10 rounded-xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
          <HeartPulse className="w-12 h-12 mb-6 opacity-80" />
          <h3 className="text-2xl font-bold mb-4">Health Care</h3>
          <p className="text-white/80 mb-6 leading-relaxed">
            Providing compassionate medical services and healthcare to the community.
          </p>
          <a href="#" className="font-medium hover:underline text-sm tracking-wide uppercase">
            Learn More
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-brand-red text-white p-10 rounded-xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
          <BookOpen className="w-12 h-12 mb-6 opacity-80" />
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <p className="text-white/80 mb-6 leading-relaxed">
            Nurturing minds through our Primary, Secondary, and Vocational Training schools.
          </p>
          <a href="#" className="font-medium hover:underline text-sm tracking-wide uppercase">
            Learn More
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-900 text-white p-10 rounded-xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
          <Users className="w-12 h-12 mb-6 text-brand-red" />
          <h3 className="text-2xl font-bold mb-4">Orphans & Children</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            Caring for orphans and vulnerable children with love and dedication.
          </p>
          <a href="#" className="text-brand-red font-medium hover:underline text-sm tracking-wide uppercase">
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}
