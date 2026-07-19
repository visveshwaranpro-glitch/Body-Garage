import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { REVIEWS, GYM } from '../data';
import SectionBrand from './SectionBrand';

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = REVIEWS.length;

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  return (
    <section id="reviews" className="relative py-16 sm:py-24 bg-ink-950 overflow-hidden grain">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-red" />
            <span className="font-condensed text-red text-sm tracking-widest uppercase">Reviews</span>
            <span className="h-px w-10 bg-red" />
          </div>
          <h2 className="reveal delay-1 font-display text-bone-50 text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tightest">
            What Our <span className="text-red">Members Say</span>
          </h2>
          <SectionBrand className="reveal delay-2 justify-center" />

          {/* Rating badge */}
          <div className="reveal delay-2 mt-8 inline-flex flex-col items-center gap-2 bg-ink-800 border border-white/10 rounded-sm px-8 py-5">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-red text-red" />
              ))}
            </div>
            <p className="font-display text-bone-50 text-3xl tracking-tight">5.0</p>
            <p className="text-bone-400 text-xs uppercase tracking-wider">Based on Google Reviews</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="reveal delay-3 relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-700 ease-out"
              style={{ willChange: 'transform' }}
            >
              {REVIEWS.map((r) => (
                <div key={r.name} className="w-full flex-shrink-0 px-1">
                  <figure className="relative bg-ink-900 border border-white/5 rounded-sm p-8 sm:p-10">
                    <Quote className="absolute top-6 right-6 h-10 w-10 text-red/20" />
                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-red text-red" />
                      ))}
                    </div>
                    <blockquote className="text-bone-200 text-lg leading-relaxed">
                      "{r.text}"
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red/15 border border-red/30 text-red font-display text-lg">
                        {r.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-bone-50 font-semibold text-sm">{r.name}</p>
                        {r.badge && (
                          <p className="text-red text-xs uppercase tracking-wider">{r.badge}</p>
                        )}
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-red' : 'w-4 bg-white/15 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous review"
                className="flex items-center justify-center h-10 w-10 rounded-sm border border-white/10 hover:border-red hover:text-red text-bone-300 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next review"
                className="flex items-center justify-center h-10 w-10 rounded-sm border border-white/10 hover:border-red hover:text-red text-bone-300 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Google reviews link */}
        <div className="reveal text-center mt-10">
          <a
            href={GYM.mapsReviews}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-bone-300 hover:text-red text-sm font-medium uppercase tracking-wider transition-colors"
          >
            See all reviews on Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
