import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-slate-900 text-white font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg" // Place your building image in the public folder as hero-bg.jpg
          alt="Construction site background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header / Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-16 max-w-7xl w-full mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png" // Place your logo image in the public folder as logo.png
            alt="Philip Construction Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Navigation Links & CTA */}
        <nav className="flex items-center space-x-8 md:space-x-12">
          <ul className="hidden md:flex items-center space-x-10 text-xs tracking-wider font-bold uppercase text-[#032A65]">
            <li>
              <a href="#about" className="hover:text-black transition-colors">
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-black transition-colors"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-black transition-colors">
                PROCESS
              </a>
            </li>
          </ul>

          {/* Nav CTA Button */}
        </nav>
        <a
          href="#start-project"
          className="bg-[#F4BE19] text-black font-bold text-xs uppercase px-5 py-3.5 tracking-wider hover:bg-[#e0ac13] transition-colors"
        >
          START A PROJECT
        </a>
      </header>

      {/* Hero Content Body */}
      <main className="relative z-10 flex-grow flex items-center px-6 md:px-16 max-w-7xl w-full mx-auto py-12">
        <div className="max-w-xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight text-white mb-6">
            WE BUILD
            <br />
            SPACES MADE TO
            <br />
            LAST
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md mb-8 font-normal">
            From the first foundation to the final finish, we bring
            construction, renovation and home improvement together under one
            roof.
          </p>

          {/* Primary CTA Button */}
          <a
            href="#consultation"
            className="inline-block bg-[#F4BE19] text-black font-extrabold text-xs uppercase px-6 py-4 tracking-wider hover:bg-[#e0ac13] transition-colors"
          >
            BOOK A FREE CONSULTATION
          </a>
        </div>
      </main>

      {/* Spacer for bottom spacing */}
      <div className="relative z-10 pb-12" />
    </section>
  );
}
