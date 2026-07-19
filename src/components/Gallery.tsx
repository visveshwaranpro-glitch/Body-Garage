import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GALLERY } from '../data';
import SectionBrand from './SectionBrand';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedItem = selectedIndex !== null ? GALLERY[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }
      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % GALLERY.length,
        );
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) =>
          current === null ? null : (current + GALLERY.length - 1) % GALLERY.length,
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex]);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + GALLERY.length - 1) % GALLERY.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % GALLERY.length,
    );
  };

  const handleClose = () => setSelectedIndex(null);

  return (
    <section id="gallery" className="relative py-16 sm:py-24 bg-ink-900 overflow-hidden">
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
            <button
              key={item.label}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className={`reveal-scale delay-${(i % 4) + 1} group relative overflow-hidden rounded-sm bg-gradient-to-br from-ink-800 to-ink-950 border border-white/5 hover:border-red/40 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-red/50 ${item.span}`}
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
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-red/0 group-hover:bg-red/10 transition-colors duration-500" />
              {/* Corner accent */}
              <span className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-red/0 group-hover:border-red/60 transition-colors duration-500" />
              <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-red/0 group-hover:border-red/60 transition-colors duration-500" />
            </button>
          ))}
        </div>

        {selectedItem ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6">
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-ink-950/90 p-3 text-white transition hover:bg-ink-900/95 focus:outline-none focus:ring-2 focus:ring-red/50"
              aria-label="Close gallery preview"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-ink-950/90 p-3 text-white transition hover:bg-ink-900/95 focus:outline-none focus:ring-2 focus:ring-red/50"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-3xl border border-white/10 bg-ink-950 shadow-2xl">
              <img
                src={`/images/${selectedItem.filename}`}
                alt={selectedItem.label}
                className="h-full w-full object-contain bg-black"
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-ink-950/90 p-3 text-white transition hover:bg-ink-900/95 focus:outline-none focus:ring-2 focus:ring-red/50"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
