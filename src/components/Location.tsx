import { MapPin, Navigation } from 'lucide-react';
import { GYM } from '../data';
import SectionBrand from './SectionBrand';

export default function Location() {
  return (
    <section id="location" className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-red" />
            <span className="font-condensed text-red text-sm tracking-widest uppercase">Find Us</span>
          </div>
          <h2 className="reveal delay-1 font-display text-bone-50 text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tightest">
            Visit The <span className="text-red">Garage</span>
          </h2>
          <SectionBrand className="reveal delay-2" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Map */}
          <div className="reveal-left lg:col-span-8 relative rounded-sm overflow-hidden border border-white/10 min-h-[360px] bg-ink-950">
            <iframe
              title="Body Garage Fitness Club location"
              src={GYM.mapsEmbed}
              className="w-full h-full min-h-[360px] grayscale contrast-125"
              style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(0.9)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* Red corner accents */}
            <span className="absolute top-3 left-3 h-6 w-6 border-t-2 border-l-2 border-red pointer-events-none" />
            <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-red pointer-events-none" />
          </div>

          {/* Address card */}
          <div className="reveal-right lg:col-span-4 flex flex-col justify-between bg-ink-950 border border-white/5 rounded-sm p-8">
            <div>
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-sm bg-red/10 border border-red/20 text-red mb-6">
                <MapPin className="h-6 w-6" />
              </span>
              <h3 className="font-display text-bone-50 text-2xl uppercase tracking-tight mb-3">
                Our Address
              </h3>
              <p className="text-bone-300 text-sm leading-relaxed">{GYM.address}</p>
            </div>

            <a
              href={GYM.maps}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2.5 bg-red hover:bg-red-600 text-white font-semibold uppercase tracking-wider text-sm px-6 py-3.5 rounded-sm transition-all duration-300 hover:scale-105 red-glow"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
