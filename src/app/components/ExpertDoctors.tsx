import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const doctors = [
  { name: "Mirazul Alom", specialty: "Neurologist", image: "/images/sisters.jpeg" },
  { name: "Mirazul Alom", specialty: "Neurologist", image: "/images/sisters3.jpeg" },
  { name: "Mirazul Alom", specialty: "Neurologist", image: "/images/sisters4.jpeg" },
  { name: "Mirazul Alom", specialty: "Neurologist", image: "/images/farm.jpeg" },
];

export default function ExpertDoctors() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-zinc-900 mb-12">Expert Doctors</h2>
        
        {/* Carousel controls - simple CSS scroll setup for now */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {doctors.map((doctor, index) => (
            <div key={index} className="min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-start bg-[#f9f9fa] rounded-lg overflow-hidden border border-zinc-100">
              <div className="relative h-80 bg-zinc-200">
                <Image 
                  src={doctor.image} 
                  alt={doctor.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{doctor.name}</h3>
                <p className="text-zinc-500 text-sm">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end gap-2 mt-4">
            {/* These would normally trigger the carousel scroll */}
            <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-brand-red hover:border-brand-red transition-colors">
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-brand-red hover:border-brand-red transition-colors">
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
      </div>
    </section>
  );
}
