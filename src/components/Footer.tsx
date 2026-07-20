import { Phone, Facebook, Instagram, ArrowUp } from 'lucide-react';
import { GYM, NAV } from '../data';

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M380.9 97.1C339 55.2 286.4 32 231.2 32 131.9 32 47 116.9 47 216.2c0 38.1 10 75.4 28.9 108.3L32 480l159.4-43.2c31.2 17 66.1 26.1 102.9 26.1h.1c99.3 0 184.2-84.9 184.2-184.2 0-55.2-23.2-107.8-65.7-149.6zm-149.7 335.9c-32.9 0-65-8.8-92.8-25.4l-6.6-4-94.6 25.6 25.3-92.3-4.3-7c-17.4-28.8-26.7-61.9-26.7-95.5 0-100.2 81.7-181.9 181.9-181.9 48.5 0 94.1 18.9 128.3 53.1 34.2 34.2 53 79.8 53 128.3 0 100.2-81.7 181.9-181.9 181.9zm101.1-138.9c-5.5-2.7-32.6-16.1-37.7-17.9-5.1-1.8-8.8-2.7-12.5 2.7-3.7 5.5-14.3 17.9-17.5 21.6-3.2 3.7-6.4 4.2-11.9 1.4-32.1-16-53-28.5-74.3-64.3-5.7-9.8 5.7-9.1 16.3-30.2 1.8-3.7.9-6.9-.5-9.6-1.4-2.7-12.5-30.1-17.1-41.3-4.5-10.9-9.1-9.4-12.5-9.6-3.2-.2-6.9-.2-10.5-.2-3.7 0-9.6 1.4-14.6 6.9-5.1 5.5-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.7 3.7 39.1 59.7 94.7 83.7 13.2 5.7 23.5 9.1 31.6 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.4 32.6-13.3 37.2-26.2 4.7-12.9 4.7-24 3.3-26.2-1.4-2.2-5.1-3.6-10.6-6.3z" />
    </svg>
  );
}

export default function Footer() {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-ink-950 border-t border-white/5 overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-red to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Contact block */}
          <div className="md:col-span-5">
            <h3 className="text-bone-50 text-xl font-display uppercase tracking-tightest mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
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
                href="https://wa.me/+919600556550"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-bone-200 hover:text-red transition-colors group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-red/10 border border-red/20 text-red group-hover:bg-red group-hover:text-white transition-all">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
              <div>
                <p className="text-bone-400 uppercase text-[10px] tracking-[0.35em] mb-2">
                  Social Links
                </p>
                <div className="flex items-center gap-3">
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
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-bone-50 text-xl uppercase tracking-tightest mb-5">
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
          <div>
            <h4 className="font-display text-bone-50 text-xl uppercase tracking-tightest mb-5">
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
        <div className="mt-8 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
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
