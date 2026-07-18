import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import FeaturedMacbook from '@/sections/FeaturedMacbook';
import TechOrbit from '@/sections/TechOrbit';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FeaturedMacbook />
      <TechOrbit />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
