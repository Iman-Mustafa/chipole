import { HeartPulse, Phone, BriefcaseMedical } from "lucide-react";

export default function QuickInfoCards() {
  return (
    <section className="w-full relative z-30 -mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 shadow-xl rounded-xl overflow-hidden">
          {/* Card 1 */}
          <div className="bg-brand-red p-10 text-white flex flex-col justify-between group transition-colors hover:bg-brand-red/90">
            <div>
              <HeartPulse className="w-12 h-12 mb-6 text-white/80" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4">Hospitality</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Clinical excellence must be the priority for any health care service provider.
              </p>
            </div>
            <a href="#" className="inline-block border border-white/40 text-white px-6 py-3 rounded hover:bg-white hover:text-brand-red transition-colors self-start font-medium text-sm">
              Apply For A Bed
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-[#a62222] p-10 text-white flex flex-col justify-between group transition-colors hover:bg-[#8f1d1d]">
            <div>
              <Phone className="w-12 h-12 mb-6 text-white/80" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4">Emergency Care</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Clinical excellence must be the priority for any health care service provider.
              </p>
            </div>
            <a href="tel:+106723563567" className="inline-block border border-white/40 text-white px-6 py-3 rounded hover:bg-white hover:text-[#a62222] transition-colors self-start font-medium text-sm">
              +10 672 356 3567
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-red p-10 text-white flex flex-col justify-between group transition-colors hover:bg-brand-red/90">
            <div>
              <BriefcaseMedical className="w-12 h-12 mb-6 text-white/80" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4">Chamber Service</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Clinical excellence must be the priority for any health care service provider.
              </p>
            </div>
            <a href="#" className="inline-block border border-white/40 text-white px-6 py-3 rounded hover:bg-white hover:text-brand-red transition-colors self-start font-medium text-sm">
              Make An Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
