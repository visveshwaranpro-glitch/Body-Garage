import { Dumbbell, Flame, Trophy } from 'lucide-react';
import { SPECIALIZATIONS } from '../data';
import SectionBrand from './SectionBrand';

const ICONS = { Dumbbell, Flame, Trophy } as const;

export default function Specializations() {
  return (
    <section id="specializations" className="relative py-16 sm:py-24 bg-ink-950 overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-red/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-red" />
            <span className="font-condensed text-red text-sm tracking-widest uppercase">What We Do</span>
          </div>
          <h2 className="reveal delay-1 font-display text-bone-50 text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tightest">
            Our <span className="text-red">Specializations</span>
          </h2>
          <p className="reveal delay-2 mt-5 text-bone-400 text-lg">
            Three pillars of training, each engineered to take you from where you are to where you
            want to be.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {SPECIALIZATIONS.map((spec, i) => {
            const Icon = ICONS[spec.icon as keyof typeof ICONS];
            return (
              <article
                key={spec.title}
                className={`reveal-scale delay-${i + 1} group relative bg-ink-900 border border-white/5 hover:border-red/40 rounded-sm p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-red/0 group-hover:bg-red/15 blur-3xl transition-all duration-500" />

                {/* Number */}
                <span className="absolute top-6 right-6 font-display text-5xl text-white/5 group-hover:text-red/15 transition-colors duration-500 select-none">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="relative mb-6">
                  <span className="inline-flex items-center justify-center h-14 w-14 rounded-sm bg-red/10 border border-red/20 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </span>
                </div>

                <h3 className="relative font-display text-bone-50 text-2xl uppercase tracking-tight mb-3">
                  {spec.title}
                </h3>
                <p className="relative text-bone-400 text-sm leading-relaxed">{spec.desc}</p>

                {/* Accent bar */}
                <span className="relative block mt-6 h-px w-12 bg-red transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
