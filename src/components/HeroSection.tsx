import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Property, PROPERTIES } from '../data/properties';

interface HeroSectionProps {
  onExploreMore: () => void;
  onSelectProperty: (property: Property) => void;
  selectedProperty: Property;
  filterMode?: 'all' | 'sale' | 'rent';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMore,
  onSelectProperty,
  selectedProperty,
}) => {
  const leftWingProperty = PROPERTIES[1];
  const podProperty = PROPERTIES[2];
  const centerProperty = PROPERTIES[0];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-2 sm:py-3">
      {/* 3-Column Responsive Flexbox Container */}
      <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-5 w-full">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="w-full lg:w-[29%] bg-[var(--surface-card)] rounded-[30px] p-4 sm:p-5 flex flex-col justify-between shadow-[var(--shadow-card)] border border-[var(--border)] transition-all hover:shadow-lg">
          {/* Top: Image Card with Overlay Button */}
          <div className="relative w-full rounded-[24px] overflow-hidden group cursor-pointer aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 bg-neutral-900"
               onClick={() => onSelectProperty(leftWingProperty)}>
            <img
              src={leftWingProperty.image}
              alt="Elite Real Estate Architecture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Bottom-left Floating Pill: EXCLUSIVE LISTING + Arrow Button */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 z-10">
              <div className="flex items-center gap-2 bg-[var(--surface-pill)] backdrop-blur-xl px-3.5 py-1.5 rounded-full shadow-md border border-[var(--border-pill)]">
                {/* Small warm orange square/house glyph */}
                <div className="w-3.5 h-3.5 rounded-xs bg-[var(--accent)] flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 bg-white rounded-2xs" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--text-primary)] whitespace-nowrap">
                  EXCLUSIVE LISTINGS
                </span>
              </div>

              {/* Circle arrow button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProperty(leftWingProperty);
                }}
                className="w-7 h-7 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] flex items-center justify-center shadow-md transition-transform active:scale-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 cursor-pointer"
                aria-label="View property listing"
              >
                <ArrowUpRight size={14} className="stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Bottom Content Area */}
          <div className="pt-5 sm:pt-6 pb-2 px-1 flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-xs sm:text-sm font-black uppercase tracking-[0.06em] text-[var(--text-primary)] leading-snug">
                BROKERAGE & ACQUISITION OF <br className="hidden sm:inline" />
                PRIME ARCHITECTURAL ESTATES
              </h2>
              <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] font-semibold leading-relaxed mt-2.5">
                Licensed luxury real estate firm representing private buyers, trusts, and collectors in off-market property transfers.
              </p>
            </div>

            {/* Metric Display */}
            <div className="mt-5 pt-4 border-t border-[var(--border-subtle)]">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--text-primary)] font-display">
                  50+
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.18em] text-[var(--text-secondary)] mt-1 leading-tight">
                PROPERTIES CLOSED <br />
                THIS FISCAL YEAR
              </p>
            </div>
          </div>
        </div>

        {/* ================= CENTER COLUMN (MAIN HERO STAGE) ================= */}
        <div className="w-full lg:w-[47%] relative rounded-[32px] overflow-hidden min-h-[440px] sm:min-h-[500px] lg:min-h-[580px] shadow-sm flex flex-col justify-between group">
          {/* Main Background Image */}
          <img
            src={centerProperty.image}
            alt="Futuristic Organic Luxury Villa"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
          />

          {/* Subtle contrast gradient for typography */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/35 pointer-events-none" />

          {/* Center Headline */}
          <div className="relative z-10 pt-8 sm:pt-10 lg:pt-12 px-6 sm:px-10 text-left">
            <h1 className="flex flex-col text-white font-black tracking-[-0.03em] leading-[0.95] drop-shadow-md">
              <span className="text-4xl sm:text-6xl lg:text-[68px] font-display">
                YOUR HOME
              </span>
              <span className="text-4xl sm:text-6xl lg:text-[68px] font-display">
                IS YOUR
              </span>
              <span className="mt-1 sm:mt-2">
                <span className="inline-block bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-neutral-950 px-3.5 sm:px-4 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl text-3xl sm:text-5xl lg:text-[58px] font-black tracking-tight shadow-md transition-all cursor-pointer"
                      onClick={() => onSelectProperty(centerProperty)}>
                  FUTURE.
                </span>
              </span>
            </h1>
          </div>

          {/* Bottom Floating Interactive Bar for Center Hero */}
          <div className="relative z-10 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="bg-black/55 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-100">
                Solarium Dune Villa · Freehold Deeded Estate
              </span>
            </div>

            <button
              onClick={() => onSelectProperty(centerProperty)}
              className="px-4 py-2 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 text-xs font-black uppercase tracking-wider shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              View Property Listing
            </button>
          </div>
        </div>

        {/* ================= RIGHT COLUMN (GLASS CARD + VERTICAL BADGE + POD CARD) ================= */}
        <div className="w-full lg:w-[24%] flex flex-col justify-between gap-4 relative">
          
          {/* Top Architectural Advisory Card — Semantic surfaces in both themes */}
          <div className="relative w-full bg-[var(--surface-card)] text-[var(--text-primary)] p-6 sm:p-7 rounded-[28px] border border-[var(--border)] flex flex-col justify-between shadow-[var(--shadow-card)] transition-all">
            {/* Subtle Kicker / Dots */}
            <div className="flex items-center gap-1.5 opacity-60 mb-3">
              <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
            </div>

            {/* Heading */}
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-[0.08em] text-[var(--text-primary)] leading-snug">
              LICENSED BROKERAGE & ARCHITECTURAL REAL ESTATE ADVISORY
            </h3>

            {/* Description */}
            <p className="text-[10px] sm:text-[11px] text-[var(--text-secondary)] font-normal leading-relaxed mt-3">
              Representing private buyers and trusts in the confidential acquisition, valuation, and stewardship of premier custom estates.
            </p>

            {/* Explore More Button */}
            <div className="mt-5">
              <button
                type="button"
                onClick={onExploreMore}
                className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] font-black text-[11px] uppercase tracking-[0.14em] shadow-md transition-all active:scale-95 text-center cursor-pointer"
              >
                BROWSE LISTINGS
              </button>
            </div>
          </div>

          {/* Bottom Card: Pod Villa with Glowing Oval Window */}
          <div className="relative w-full rounded-[26px] overflow-hidden group cursor-pointer aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 bg-neutral-800 shadow-xs border border-white/10"
               onClick={() => onSelectProperty(podProperty)}>
            <img
              src={podProperty.image}
              alt="Futuristic Desert Pod Villa"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-400">
                  Joshua Tree Reserve
                </p>
                <p className="text-xs font-bold truncate">
                  The Eclipse High-Desert Retreat
                </p>
              </div>
              <span className="text-[10px] bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-bold">
                $95K / mo
              </span>
            </div>
          </div>

          {/* Vertical Badge: 1.4K + TRANSACTIONS CLOSED */}
          <div className="hidden lg:flex absolute -left-7 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <div className="bg-[var(--surface-pill)] backdrop-blur-2xl border border-[var(--border-pill)] rounded-full px-2.5 py-4 shadow-[var(--shadow-sm)] flex flex-col items-center gap-3">
              {/* Bold Stat */}
              <span className="font-black text-sm text-[var(--text-primary)] tracking-tight"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              1.4K +
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              {/* Vertical Label */}
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[var(--text-secondary)] whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                TRANSACTIONS CLOSED
              </span>
            </div>
          </div>

          {/* Mobile representation of completed projects badge */}
          <div className="lg:hidden flex items-center justify-between bg-[var(--surface-card)] backdrop-blur-2xl px-5 py-3 rounded-2xl border border-[var(--border)] shadow-xs">
            <span className="text-xl font-black text-[var(--text-primary)] font-display">1.4K +</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              TRANSACTIONS CLOSED GLOBALLY
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
