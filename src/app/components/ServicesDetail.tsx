import Image from "next/image";
import { BriefcaseMedical } from "lucide-react";

export default function ServicesDetail() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Left */}
          <div>
            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white mb-8 shadow-lg">
              <BriefcaseMedical className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">
              Comprehensive Medical Services
            </h2>
            <p className="text-zinc-600 leading-relaxed text-lg">
              We offer a full range of medical services designed to meet all your healthcare needs. From preventive care and wellness screenings to advanced diagnostic procedures and specialized treatments, our modern facility is equipped to provide exceptional care for you and your family.
            </p>
          </div>

          {/* Image Right */}
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="/images/sisters3.jpeg" 
              alt="Medical Services" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
