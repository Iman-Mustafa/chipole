import Image from "next/image";

const enterprises = [
  { title: "Agriculture", image: "/images/sisters3.jpeg", description: "Planting, cultivating and harvesting our food crops and all necessary staple crops in our gardens by hand." },
  { title: "Lupilo Hydroelectric Power", image: "/images/sisters.jpeg", description: "Providing sustainable energy solutions to support our community and the surrounding areas." },
  { title: "Bookbinding Service", image: "/images/sisters4.jpeg", description: "Professional bookbinding services offered in Songea." },
  { title: "Maize Mill", image: "/images/farm.jpeg", description: "Processing maize to ensure food security and support local agriculture." },
  { title: "Sister Bernadeta Hotel", image: "/images/trousers.jpeg", description: "Providing hospitality and accommodation in Mbamba Bay." },
  { title: "Dairy & Poultry", image: "/images/sisters3.jpeg", description: "Our dairy cattle, poultry and hog raising are devotedly carried on daily by our Sisters." },
];

export default function DepartmentsGrid() {
  return (
    <section className="py-24 bg-[#f9f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Our Enterprises</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            The Benedictine Tradition of Self-Sufficiency drives our various enterprises.<br />
            Almost all of our basic daily needs are met by members of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterprises.map((enterprise, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={enterprise.image} 
                  alt={enterprise.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{enterprise.title}</h3>
                <p className="text-zinc-600 mb-4 leading-relaxed text-sm">
                  {enterprise.description}
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
