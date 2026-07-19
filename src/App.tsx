import { useScrollReveal } from './hooks';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specializations from './components/Specializations';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Timings from './components/Timings';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ink-950 text-bone-100 font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specializations />
        <Trainers />
        <Pricing />
        <Gallery />
        <Reviews />
        <Timings />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
