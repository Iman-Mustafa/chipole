import Image from "next/image";

const departments = [
  { title: "Eye Care", image: "/images/sisters3.jpeg" },
  { title: "Physical Therapy", image: "/images/sisters.jpeg" },
  { title: "Dental Care", image: "/images/sisters4.jpeg" },
  { title: "Diagnostic Test", image: "/images/farm.jpeg" },
  { title: "Skin Surgery", image: "/images/trousers.jpeg" },
  { title: "Surgery Service", image: "/images/sisters3.jpeg" },
];

export default function DepartmentsGrid() {
  return (
    <section className="py-24 bg-[#f9f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Our Departments</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Esteem spirit temper too say adieus who direct esteem.<br />
            It esteems luckily or picture placing drawing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={dept.image} 
                  alt={dept.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{dept.title}</h3>
                <p className="text-zinc-600 mb-4 leading-relaxed text-sm">
                  Esteem spirit temper too say adieus who direct esteem.
                </p>
                <a href="#" className="text-brand-red font-medium hover:underline inline-flex items-center gap-1">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
