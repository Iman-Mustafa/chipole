import Image from "next/image";

export default function EmergencyBanner() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-brand-red text-white py-20 px-8 lg:px-16 relative overflow-hidden">
        {/* Placeholder subtle background */}
        <div className="absolute inset-0 opacity-10 mix-blend-multiply">
            <Image src="/images/sisters.jpeg" alt="Emergency" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">For Any Emergency Contact</h2>
          <p className="text-white/80 mb-8 max-w-sm">
            Esteem spirit temper too say adieus.
          </p>
          <a href="tel:+103784673467" className="inline-block border border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-brand-red transition-colors font-medium">
            +10 378 4673 467
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-[#a62222] text-white py-20 px-8 lg:px-16 relative overflow-hidden">
         {/* Placeholder subtle background */}
         <div className="absolute inset-0 opacity-10 mix-blend-multiply">
            <Image src="/images/sisters4.jpeg" alt="Appointment" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Make an Online Appointment</h2>
          <p className="text-white/80 mb-8 max-w-sm">
            Esteem spirit temper too say adieus.
          </p>
          <a href="#" className="inline-block border border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-[#a62222] transition-colors font-medium">
            Make An Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
