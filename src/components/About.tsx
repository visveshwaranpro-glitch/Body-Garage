import { Maximize, Dumbbell, Users, HeartHandshake } from 'lucide-react';
import { STATS } from '../data';
import SectionBrand from './SectionBrand';

const ICONS = { Maximize, Dumbbell, Users, HeartHandshake } as const;

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-ink-900 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <div className="reveal-left flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-red" />
              <span className="font-condensed text-red text-sm tracking-widest uppercase">About Us</span>
            </div>
            <h2 className="reveal-left delay-1 font-display text-bone-50 text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tightest">
              Built For <span className="text-red">Champions</span>
            </h2>
          </div>

          {/* Right: story */}
          <div className="lg:col-span-7">
            <p className="reveal-right text-lg sm:text-xl text-bone-200 leading-relaxed">
              Body Garage Fitness Club is Tiruppur's top-rated gym, known for its{' '}
              <span className="text-bone-50 font-semibold">huge training space</span>,{' '}
              <span className="text-bone-50 font-semibold">advanced equipment</span>, and{' '}
              <span className="text-bone-50 font-semibold">expert trainers</span>.
            </p>
            <p className="reveal-right delay-1 mt-5 text-base text-bone-400 leading-relaxed">
              Whether your goal is to pack on serious muscle, shred stubborn fat, or step on stage
              at a bodybuilding competition, our gym is engineered to forge results. Every age,
              every gender, every level — you belong here.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {STATS.map((stat, i) => {
            const Icon = ICONS[stat.icon as keyof typeof ICONS];
            return (
              <div
                key={stat.label}
                className={`reveal-scale delay-${i + 1} group bg-ink-900 hover:bg-ink-800 transition-colors duration-300 p-6 sm:p-8 flex flex-col items-start gap-4`}
              >
                <span className="flex items-center justify-center h-12 w-12 rounded-sm bg-red/10 border border-red/20 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-condensed text-bone-100 text-sm sm:text-base uppercase tracking-wide leading-snug">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
