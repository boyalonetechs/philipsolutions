import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="relative w-full min-h-[550px] md:min-h-[620px] flex items-center overflow-hidden bg-slate-900 text-white font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact.jpg" // Place your background image in the public folder as cta-bg.jpg
          alt="Construction site interior with hazard tape"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-6 md:px-16 max-w-7xl w-full mx-auto py-16">
        <div className="max-w-2xl">
          {/* Section Tagline */}
          <span className="text-xs font-bold tracking-wider text-[#F4BE19] uppercase block mb-4">
            GET IN TOUCH
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
            Let &apos;s build something
            <br />
            worth coming home
            <br />
            to.
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md mb-8 font-normal">
            Have a construction, renovation or home improvement project in mind?
            Let &apos;s talk.
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/2348138540575"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F4BE19] text-black font-extrabold text-xs uppercase px-6 py-4 tracking-wider hover:bg-[#e0ac13] transition-colors"
          >
            START A PROJECT
          </a>
        </div>
      </div>
    </section>
  );
}
