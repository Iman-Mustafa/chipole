import Image from "next/image";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="relative py-32 bg-zinc-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/sisters4.jpeg" 
          alt="Testimonial Background" 
          fill 
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/40 to-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
        <Quote className="w-16 h-16 mx-auto mb-8 text-white/50 rotate-180" />
        <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-12 font-light">
          "Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui."
        </p>
        <div className="w-12 h-1 bg-white/30 mx-auto mb-6"></div>
        <p className="font-bold tracking-widest uppercase text-sm">Asana Korim</p>
      </div>
    </section>
  );
}
