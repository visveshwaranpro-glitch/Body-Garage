import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { GYM, NAV } from '../data';
import { useScrolledPast, useActiveSection } from '../hooks';

export default function Navbar() {
  const scrolled = useScrolledPast(40);
  const active = useActiveSection(NAV.map((n) => n.id));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-xl border-b border-white/5 py-1'
          : 'bg-transparent py-2'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between min-h-[64px]">

        {/* LEFT — logo */}
        <button
          onClick={() => handleClick('home')}
          aria-label="Body Garage Fitness Club home"
          className="group flex-shrink-0"
        >
          <div
            className={`relative transition-all duration-500 ${
              scrolled ? 'h-12 w-12' : 'h-14 w-14'
            }`}
          >
            {/* Red ring pulse */}
            <span className="absolute inset-0 rounded-full bg-red/20 scale-110 group-hover:scale-125 transition-transform duration-500 blur-sm" />
            <img
              src="/images/logo.jpeg"
              alt="Body Garage Fitness Club logo"
              className="relative h-full w-full rounded-full object-cover border-2 border-red shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:border-red-400"
              style={{ boxShadow: '0 0 18px 4px rgba(225,6,0,0.45)' }}
            />
          </div>
        </button>

        {/* CENTER — gym name */}
        <button
          onClick={() => handleClick('home')}
          aria-label="Go to top"
          className="absolute left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
        >
          <span className="block font-display leading-none uppercase select-none">
            {/* Main title */}
            <span
              className={`block tracking-tightest transition-all duration-500 ${
                scrolled ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl lg:text-5xl'
              }`}
              style={{
                background: 'linear-gradient(90deg, #fff 0%, #e10600 40%, #ff3b30 60%, #fff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 14px rgba(225,6,0,0.7))',
              }}
            >
              BODY GARAGE
            </span>
            {/* Sub title */}
            <span
              className={`block text-bone-300 font-condensed transition-all duration-500 ${
                scrolled ? 'text-[9px] sm:text-[11px]' : 'text-[10px] sm:text-xs lg:text-sm'
              }`}
              style={{ letterSpacing: '0.35em' }}
            >
              FITNESS CLUB
            </span>
          </span>
        </button>

        {/* RIGHT — nav + CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          {/* Desktop nav hidden to always use the menu toggle */}
          <ul className="hidden items-center gap-1 mr-2">
            {NAV.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`relative px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                    active === item.id ? 'text-red' : 'text-bone-300 hover:text-bone-50'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-px bg-red transition-transform duration-300 origin-left ${
                      active === item.id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-bone-100 p-1"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 pb-6 pt-2 bg-ink-950/95 backdrop-blur-xl border-t border-white/5">
          {/* Mobile header brand */}
          <div className="flex items-center gap-3 py-3 mb-1">
            <img
              src="/images/logo.jpeg"
              alt="Body Garage Fitness Club"
              className="h-10 w-10 rounded-full border border-red/60 object-cover"
              style={{ boxShadow: '0 0 10px 2px rgba(225,6,0,0.35)' }}
            />
            <span className="font-display text-base text-bone-50 uppercase tracking-tightest">
              Body <span className="text-red">Garage</span>
            </span>
          </div>
          <ul className="flex flex-col">
            {NAV.map((item, i) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`w-full text-left py-3.5 border-b border-white/5 text-sm font-medium uppercase tracking-wider transition-colors ${
                    active === item.id ? 'text-red' : 'text-bone-200'
                  }`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${GYM.phoneRaw}`}
            className="mt-4 inline-flex items-center gap-2 bg-red text-white text-sm font-semibold uppercase tracking-wider px-5 py-3 rounded-sm w-full justify-center"
          >
            <Phone className="h-4 w-4" />
            Call {GYM.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
