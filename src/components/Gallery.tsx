import { Camera } from 'lucide-react';
import { GALLERY } from '../data';
import SectionBrand from './SectionBrand';

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="reveal flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-red" />
              <span className="font-condensed text-red text-sm tracking-widest uppercase">The Floor</span>
            </div>
            <h2 className="reveal delay-1 font-display text-bone-50 text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tightest">
              Inside The <span className="text-red">Garage</span>
            </h2>
            <SectionBrand className="reveal delay-2" />
          </div>
          <p className="reveal delay-2 text-bone-400 text-sm max-w-xs">
            A look at our training space, equipment, and the work that happens here every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {GALLERY.map((item, i) => (
            <div
              key={item.label}
              className={`reveal-scale delay-${(i % 4) + 1} group relative overflow-hidden rounded-sm bg-gradient-to-br from-ink-800 to-ink-950 border border-white/5 hover:border-red/40 transition-all duration-500 ${item.span}`}
            >
              {/* Load gallery image if available */}
              <img
                src={`/images/${item.filename}`}
                alt={item.label}
                className="w-full h-full object-cover absolute inset-0"
                style={{ display: 'block' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Placeholder gradient */}
              <div
                className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-60"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 50% 40%, rgba(225,6,0,0.25), transparent 70%)',
                }}
              />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                <Camera className="h-6 w-6 text-bone-600 group-hover:text-red transition-colors duration-500" />
                <span className="text-bone-500 group-hover:text-bone-300 text-xs font-mono uppercase tracking-wider transition-colors duration-500">
                  {item.label}
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-red/0 group-hover:bg-red/10 transition-colors duration-500" />
              {/* Corner accent */}
              <span className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-red/0 group-hover:border-red/60 transition-colors duration-500" />
              <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-red/0 group-hover:border-red/60 transition-colors duration-500" />
            </div>
          ))}
        </div>

        <p className="reveal mt-6 text-center text-bone-600 text-xs uppercase tracking-wider">
          Placeholder imagery — real photos coming soon
        </p>
      </div>
    </section>
  );
}
