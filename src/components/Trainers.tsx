import { Phone } from 'lucide-react';
import { TRAINERS } from '../data';
import SectionBrand from './SectionBrand';

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-10 sm:py-16 bg-ink-900 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-red" />
            <span className="font-condensed text-red text-sm tracking-widest uppercase">The Crew</span>
          </div>
          <h2 className="reveal delay-1 font-display text-bone-50 text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tightest">
            Meet Our Trainers
          </h2>
          <SectionBrand className="reveal delay-2" />
          <p className="reveal delay-2 mt-5 text-bone-400 text-lg">
            Train with Gold Medalist Bodybuilders and Weightlifters who provide expert coaching, personalized workout plans, and one-on-one personal training to help you achieve your fitness goals.
          </p>
        </div>

        {/* Trainer cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((t, i) => (
            <a
              key={t.name}
              href={`tel:${t.phone.replace(/\s/g, '')}`}
              className={`reveal-scale delay-${i + 1} group relative block bg-ink-950 border border-white/5 hover:border-red/50 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2`}
              aria-label={`Call ${t.name} at ${t.phone}`}
            >
              {/* Image container */}
              <div className="relative aspect-[5/6] sm:aspect-[4/5] overflow-hidden bg-gradient-to-br from-ink-800 to-ink-950">
                <img
                  src={`/images/trainer-${i + 1}.jpg`}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  style={{ display: 'block' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div
                  className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 30%, rgba(225,6,0,0.4), transparent 70%)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-7xl text-white/10 group-hover:text-red/20 transition-colors duration-500 select-none">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-ink-950/80 text-bone-100 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm backdrop-blur-sm">
                    <Phone className="h-3 w-3 text-red" />
                    Tap to Call
                  </span>
                </div>
                {/* Hover number reveal */}
                <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center px-4">
                    <Phone className="h-8 w-8 text-red mx-auto mb-3 animate-pulse-red rounded-full p-1.5 bg-red/10" />
                    <p className="text-bone-100 text-sm font-semibold">{t.phone}</p>
                    <p className="text-bone-500 text-xs mt-1 uppercase tracking-wider">Tap to call</p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-bone-50 text-xl uppercase tracking-tight">
                  {t.name}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <span className="h-1 w-1 rounded-full bg-red" />
                  <span className="text-red font-medium">{t.role}</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
