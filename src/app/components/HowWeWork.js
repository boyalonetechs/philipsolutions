import Image from "next/image";

export default function HowWeWork() {
  const steps = [
    {
      number: "1",
      title: "Consultation",
      description:
        "We understand your vision and project goals through consultation.",
      image: "/images/project_icon.svg", // Path to your consultation image in /public
    },
    {
      number: "2",
      title: "Planning & Design",
      description: "We create precise plans and budgets for smooth execution.",
      image: "/images/project_icon1.svg", // Path to your planning & design image in /public
    },
    {
      number: "3",
      title: "Execution & Delivery",
      description:
        "We deliver your project with quality craftsmanship and precision.",
      image: "/images/project_icon2.svg", // Path to your execution image in /public
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-20 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-[11px] font-bold tracking-wider text-black uppercase block mb-2">
            HOW WE WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.05]">
            Our Projects Define
            <br />
            Precision and Quality
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              {/* Circle Graphic with Number Badge */}
              <div className="relative mb-6">
                {/* Number Badge */}
                <span className="absolute -top-1 -left-1 z-20 bg-[#F4BE19] text-black font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                  {step.number}
                </span>

                {/* Circular Image Container */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover scale-60"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-black mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
