import { Phone, Check, Crown } from 'lucide-react';
import { GYM, PRICING_PLANS } from '../data';
import SectionBrand from './SectionBrand';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-10 sm:py-16 bg-ink-950 overflow-hidden grain">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Background pricing text above the plans */}
        <div className="relative pointer-events-none select-none mb-2 flex justify-center">
          <span className="font-display text-stroke font-black text-[22vw] sm:text-[18vw] uppercase leading-[0.8] opacity-35">
            PRICING
          </span>
        </div>

        <div className="text-center -mt-6 sm:-mt-10 relative">
          <div className="reveal flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-red" />
            <span className="font-condensed text-bone-50 text-sm tracking-widest uppercase">
              Membership Plans
            </span>
            <span className="h-px w-10 bg-red" />
          </div>

          <h2 className="reveal delay-1 font-display text-bone-50 text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tightest">
            Built Around <span className="text-red">Your Goals</span>
          </h2>

          <p className="reveal delay-3 mt-8 text-base sm:text-lg text-bone-300 leading-relaxed max-w-2xl mx-auto">
            Flexible membership options designed to match your commitment level. Contact us for
            pricing — we'll find the plan that fits your journey.
          </p>
        </div>

        {/* Plans grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal delay-${(i % 4) + 1} group relative flex flex-col rounded-sm border p-7 transition-all duration-300 ${
                plan.highlight
                  ? 'border-red/60 bg-gradient-to-b from-red/10 to-ink-900 hover:scale-[1.03] red-glow'
                  : 'border-white/10 bg-ink-900/60 hover:border-red/40 hover:scale-[1.02]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                    <Crown className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display text-bone-50 text-xl uppercase tracking-tightest">
                  {plan.name}
                </h3>
                <span className="text-bone-500 text-xs uppercase tracking-widest">
                  {plan.duration}
                </span>
              </div>

              <div className="mb-6">
                <span className="font-display text-bone-50 text-2xl tracking-tightest">
                  Contact
                </span>
                <span className="block text-bone-500 text-xs uppercase tracking-widest mt-1">
                  for pricing
                </span>
              </div>

              <ul className="mb-7 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-bone-300">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        plan.highlight ? 'text-red' : 'text-red/70'
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${GYM.phoneRaw}`}
                className={`mt-auto inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wider text-xs px-5 py-3.5 rounded-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-red hover:bg-red-600 text-white red-glow'
                    : 'border border-white/15 hover:border-red text-bone-100 hover:text-red'
                }`}
              >
                <Phone className="h-3.5 w-3.5" />
                Enquire Now
              </a>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-xs uppercase tracking-widest text-bone-500">
          All plans include full access to equipment · Personal training available separately
        </p>
      </div>
    </section>
  );
}
