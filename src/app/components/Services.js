import Image from "next/image";

const services = [
  {
    title: "Residential Construction",
    description:
      "High quality customized homes designed for long-lasting comfort and home living.",
    image: "/service-1.jpg",
  },
  {
    title: "Interior Design",
    description:
      "Bespoke interior design solutions tailored to transform your vision into welcoming living spaces.",
    image: "/service-2.jpg",
  },
  {
    title: "Project Management",
    description:
      "Full-scope project management ensuring timely delivery, quality control, and budget management.",
    image: "/service-3.jpg",
  },
  {
    title: "Renovation",
    description:
      "Transforming existing spaces into modern, functional, and elegant homes.",
    image: "/service-4.jpg",
  },
  {
    title: "Electrical Work",
    description:
      "Professional electrical wiring, lighting systems, and modern installation.",
    image: "/service-5.jpg",
  },
  {
    title: "Plumbing",
    description:
      "Complete residential and commercial plumbing installations and repairs.",
    image: "/service-6.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 px-6 md:px-16 max-w-7xl mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sticky Left Section */}
        <div className="lg:col-span-5">
          <div className="sticky top-12">
            <span className="text-[11px] font-bold tracking-wider text-black uppercase block mb-2">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.05]">
              Everything your
              <br />
              space needs.
            </h2>
          </div>
        </div>

        {/* Right Section: Scrollable Services List */}
        <div className="lg:col-span-7 flex flex-col space-y-12">
          {services.map((service, index) => (
            <div key={index} className="flex bg-gray-100 rounded-2xl flex-col">
              {/* Image Container */}
              <div className="relative w-full  h-[320px] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Information */}
              <div className="bg-gray-100 p-4 rounded-b-2xl">
                <h3 className="text-xl font-bold text-black mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
