import { Phone, MapPin, ChevronDown } from 'lucide-react';
import { GYM } from '../data';
import SectionBrand from './SectionBrand';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background layers */}
      <div className="absolute inset-0 bg-ink-950" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(225,6,0,0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(225,6,0,0.18), transparent 60%)',
        }}
      />
      {/* Diagonal red accent line */}
      <div className="absolute top-0 right-0 h-full w-1/3 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 h-[150%] w-px bg-gradient-to-b from-transparent via-red/40 to-transparent rotate-12" />
        <div className="absolute -top-1/4 right-8 h-[150%] w-px bg-gradient-to-b from-transparent via-red/20 to-transparent rotate-12" />
      </div>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-16 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-red" />
            <span className="font-condensed text-red text-sm tracking-widest uppercase">
              Tiruppur's #1 Fitness Club
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal delay-1 font-display text-bone-50 leading-[0.92] tracking-tightest text-5xl sm:text-7xl lg:text-8xl uppercase">
            Train Hard.
            <br />
            <span className="text-red">Transform.</span>
            <br />
            Repeat.
          </h1>

          <SectionBrand className="reveal delay-1" />

          {/* Subtext */}
          <p className="reveal delay-2 mt-8 max-w-xl text-base sm:text-lg text-bone-300 leading-relaxed">
            {GYM.tagline}
          </p>

          {/* CTAs */}
          <div className="reveal delay-3 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${GYM.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-2.5 bg-red hover:bg-red-600 text-white font-semibold uppercase tracking-wider text-sm px-7 py-4 rounded-sm transition-all duration-300 hover:scale-105 red-glow"
            >
              <Phone className="h-4 w-4" />
              Call to Enquire
            </a>
            <a
              href={GYM.maps}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 border border-white/15 hover:border-red text-bone-100 hover:text-red font-semibold uppercase tracking-wider text-sm px-7 py-4 rounded-sm transition-all duration-300 hover:scale-105"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </div>

          {/* Mini stats strip */}
          <div className="reveal delay-4 mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-wider text-bone-400">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red" /> 5.0★ Google Rating
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red" /> Expert Trainers
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red" /> All Age & Gender Friendly
            </span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-bone-500 hover:text-red transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
}
