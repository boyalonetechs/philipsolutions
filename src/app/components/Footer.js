import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white font-sans pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 pb-16">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <Image
                src="/images/logo.png" // Place your logo in public/logo.png
                alt="Philip Solutions Logo"
                width={140}
                height={50}
                className="object-contain " // Ensures logo contrast on dark background if needed
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Construction, renovation and complete building solutions.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-5">
              NAVIGATION
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-white transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#invoice"
                  className="hover:text-white transition-colors"
                >
                  Invoice
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-5">
              FOLLOW
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-5">
              CONTACT
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="tel:+2348138540575"
                  className="hover:text-white transition-colors"
                >
                  +234 813 854 0575
                </a>
              </li>
              <li className="text-gray-400 font-medium">LAGOS, NIGERIA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Horizontal Border & Copyright */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs font-medium text-gray-400 tracking-wide">
            © 2026 PHILIP SOLUTIONS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
