import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* ============ MOBILE / TABLET (< 1024px) ============ */}
      <div className="lg:hidden w-full bg-white overflow-hidden mx-auto font-['Space_Grotesk']">
        <Hero />
        <About />
        <Services />
        <HowWeWork />
        <Contact />
        <Footer />
      </div>

      {/* ============ DESKTOP (>= 1024px) ============ */}
      <div className="hidden lg:block">
        <div className="w-full relative bg-white">
          <Hero />
          <About />
          <Services />
          <HowWeWork />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
