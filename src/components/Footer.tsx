import { Phone, MapPin, Facebook, Instagram, ArrowUp } from 'lucide-react';
import { GYM, NAV } from '../data';
import SectionBrand from './SectionBrand';

export default function Footer() {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-ink-950 border-t border-white/5 overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-red to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="flex h-10 w-10 items-center justify-center bg-red rounded-sm">
                <span className="font-display text-white text-lg leading-none">BG</span>
              </span>
              <span className="font-display text-bone-50 text-xl tracking-tightest uppercase">
                Body <span className="text-red">Garage</span> Fitness Club
              </span>
            </div>
            <SectionBrand className="!mt-2 justify-start" />
            <p className="text-bone-400 text-sm leading-relaxed max-w-sm">{GYM.tagline}</p>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${GYM.phoneRaw}`}
                className="flex items-center gap-3 text-bone-200 hover:text-red transition-colors group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-red/10 border border-red/20 text-red group-hover:bg-red group-hover:text-white transition-all">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{GYM.phone}</span>
              </a>
              <a
                href={GYM.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-bone-200 hover:text-red transition-colors group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-red/10 border border-red/20 text-red group-hover:bg-red group-hover:text-white transition-all flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed">{GYM.address}</span>
              </a>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={GYM.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-bone-300 hover:border-red hover:bg-red hover:text-white transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={GYM.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-bone-300 hover:border-red hover:bg-red hover:text-white transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4">
            <h4 className="font-condensed text-bone-50 text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className="text-bone-400 hover:text-red text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-3 bg-red/40 group-hover:w-5 transition-all" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="font-condensed text-bone-50 text-sm uppercase tracking-widest mb-5">
              Start Today
            </h4>
            <p className="text-bone-400 text-sm leading-relaxed mb-5">
              Ready to train hard and transform? Give us a call and let's build your plan.
            </p>
            <a
              href={`tel:${GYM.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 bg-red hover:bg-red-600 text-white font-semibold uppercase tracking-wider text-sm px-6 py-3.5 rounded-sm transition-all duration-300 hover:scale-105 red-glow"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-bone-500 text-xs uppercase tracking-wider">
            © 2026 Body Garage Fitness Club. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-bone-500 hover:text-red text-xs uppercase tracking-wider transition-colors"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
