import Image from "next/image";
import { Sprout } from "lucide-react";

export default function ServicesDetail() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Left */}
          <div>
            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white mb-8 shadow-lg">
              <Sprout className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">
              The Benedictine Tradition of Self-Sufficiency
            </h2>
            <p className="text-zinc-600 leading-relaxed text-lg">
              Almost all of our basic daily needs are met by members of our community. We farm: planting, cultivating and harvesting both our food crops and all necessary staple crops in our gardens. All by hand but most rewarding, because the work is carried out as a community.
              <br /><br />
              Our dairy cattle, poultry and hog raising are devotedly carried on daily by our Sisters. Candle making, Hosts, sewing Mass vestments & many other crafts provide additional support.
            </p>
          </div>

          {/* Image Right */}
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="/images/sisters3.jpeg" 
              alt="Agriculture" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
