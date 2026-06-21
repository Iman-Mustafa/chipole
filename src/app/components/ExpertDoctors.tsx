import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { caption: "Community Prayer", role: "Spiritual Life", image: "/images/sisters.jpeg" },
  { caption: "Harvesting Fields", role: "Agriculture", image: "/images/sisters3.jpeg" },
  { caption: "Teaching Children", role: "Education", image: "/images/sisters4.jpeg" },
  { caption: "Working the Mill", role: "Enterprises", image: "/images/farm.jpeg" },
];

export default function ExpertDoctors() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-zinc-900 mb-12">Community Life</h2>
        
        {/* Carousel controls - simple CSS scroll setup for now */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {photos.map((photo, index) => (
            <div key={index} className="min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-start bg-[#f9f9fa] rounded-lg overflow-hidden border border-zinc-100">
              <div className="relative h-80 bg-zinc-200">
                <Image 
                  src={photo.image} 
                  alt={photo.caption} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{photo.caption}</h3>
                <p className="text-zinc-500 text-sm">{photo.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end gap-2 mt-4">
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
