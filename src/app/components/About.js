import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-16 px-6 md:px-16 max-w-7xl mx-auto font-sans">
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          {/* Tagline */}
          <span className="text-[11px] font-bold tracking-wider text-black uppercase block mb-2">
            ABOUT PHILP SOLUTIONS
          </span>
          {/* Main Section Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.05]">
            More than construction.
            <br />
            We create places to live.
          </h2>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="#work"
            className="inline-block bg-[#F4BE19] text-black font-bold text-xs uppercase px-5 py-3 tracking-wider hover:bg-[#e0ac13] transition-colors"
          >
            VIEW OUR WORK
          </a>
        </div>
      </div>

      {/* Grid Layout for Cards and Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Stat Card + Smaller Image */}
        <div className="flex flex-col gap-6">
          {/* Stat Card */}
          <div className="bg-[#F8F9FA] rounded-xl p-8 flex flex-col justify-between h-[280px]">
            <span className="text-6xl font-bold text-[#F4BE19]">42+</span>
            <p className="text-gray-700 text-base font-medium">
              Projects Completed
            </p>
          </div>

          {/* Bottom Small Image */}
          <div className="relative h-[240px] rounded-xl overflow-hidden">
            <Image
              src="/about1.jpg" // Add your image to public/about-1.jpg
              alt="Luxury living room"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Column 2: Tall Middle Image */}
        <div className="relative h-[544px] rounded-xl overflow-hidden">
          <Image
            src="/about2.jpg" // Add your image to public/about-2.jpg
            alt="Modern interior with chandelier"
            fill
            className="object-cover"
          />
        </div>

        {/* Column 3: Tall Right Image */}
        <div className="relative h-[544px] rounded-xl overflow-hidden">
          <Image
            src="/about3.jpg" // Add your image to public/about-3.jpg
            alt="Spacious living room with wooden table"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
