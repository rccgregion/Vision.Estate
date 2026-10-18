import React from 'react';

export const PartnerLogos: React.FC = () => {
  return (
    <div className="w-full px-6 sm:px-12 py-6 sm:py-7 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors">
      {/* Logo 1: REAL ESTATE. */}
      <div className="flex items-center gap-2 group cursor-pointer hover:text-[var(--text-primary)] transition-colors">
        <div className="w-6 h-6 rounded-md border-2 border-[var(--text-secondary)] flex items-center justify-center">
          <div className="w-2 h-2 rounded-xs bg-[var(--text-secondary)] opacity-90" />
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            REAL
          </span>
          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            ESTATE.
          </span>
        </div>
      </div>

      {/* Logo 2: FUTURE MANSIONS */}
      <div className="flex flex-col text-left leading-none group cursor-pointer hover:text-[var(--text-primary)] transition-colors">
        <span className="text-[13px] font-black tracking-[0.22em] uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors font-display">
          FUTURE
        </span>
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
          MANSIONS
        </span>
      </div>

      {/* Logo 3: LUXVANGUARD */}
      <div className="flex items-center group cursor-pointer hover:text-[var(--text-primary)] transition-colors">
        <span
          className="text-lg sm:text-xl font-medium uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
          style={{ letterSpacing: '0.28em', fontFamily: 'serif' }}
        >
          LUXVANGUARD
        </span>
      </div>

      {/* Logo 4: ELITE NEXT LIVING */}
      <div className="flex items-center gap-2.5 group cursor-pointer hover:text-[var(--text-primary)] transition-colors">
        <div className="w-6 h-6 rounded-t-lg border-2 border-b-0 border-[var(--text-secondary)] flex items-center justify-center opacity-90">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)]" />
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            ELITE NEXT
          </span>
          <span className="text-[9px] font-semibold tracking-[0.35em] uppercase text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
            LIVING
          </span>
        </div>
      </div>
    </div>
  );
};

