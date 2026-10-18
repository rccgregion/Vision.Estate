import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSignUp: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenSignUp,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simplified header navigation with "Properties" replacing "Buy" and "Rent", and "Services" removed
  const navItems = [
    { id: 'HOME', label: 'HOME', badge: null },
    { id: 'PROPERTIES', label: 'PROPERTIES', badge: '6' },
    { id: 'ABOUT', label: 'ABOUT', badge: null },
    { id: 'CONTACT', label: 'CONTACT', badge: null },
  ];

  return (
    <header className="relative w-full px-5 sm:px-8 lg:px-12 py-4 sm:py-5 flex items-center justify-between z-30 transition-colors">
      {/* Brand Logo — Ultra-Clear Contrast in Light & Dark Mode */}
      <button
        onClick={() => onSelectTab('HOME')}
        className="group flex items-center gap-2.5 font-black text-sm sm:text-base tracking-[0.22em] uppercase transition-all py-1.5 px-3 rounded-full bg-[var(--surface-pill)] border border-[var(--border-pill)] shadow-xs cursor-pointer text-[var(--text-primary)]"
        aria-label="Vision Estate Home"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-sm group-hover:scale-125 transition-transform shrink-0" />
        <span className="font-display font-black text-[var(--text-primary)] tracking-[0.2em]">
          VISION.ESTATE
        </span>
      </button>

      {/* Desktop Navigation — Glassy Pill with High-Contrast Luxury Aesthetic */}
      <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 p-1.5 rounded-full bg-[var(--surface-pill)] border border-[var(--border-pill)] shadow-[var(--shadow-sm)] backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`relative px-4 lg:px-5 py-1.5 rounded-full text-[11px] lg:text-xs font-black tracking-[0.16em] uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-md scale-102'
                  : 'text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
              }`}
            >
              <span>{item.label}</span>

              {/* Minimalist Micro-Badge for Listings */}
              {item.badge && (
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full font-black transition-colors ${
                    isActive
                      ? 'bg-[var(--accent)] text-[var(--accent-text)]'
                      : 'bg-[var(--surface-badge)] text-[var(--surface-badge-text)]'
                  }`}
                >
                  {item.badge}
                </span>
              )}

              {/* Active glow dot */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-xs" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right Controls: Theme Toggle & Sign Up Action */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Light / Dark Mode Toggle — Clearly visible in both light & dark mode */}
        <button
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="p-2 sm:p-2.5 rounded-full bg-[var(--toggle-bg)] hover:bg-[var(--toggle-hover)] text-[var(--toggle-icon)] transition-all border border-[var(--toggle-border)] shadow-xs active:scale-90 cursor-pointer flex items-center justify-center"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? (
            <Sun size={16} className="text-[var(--accent)] transition-transform rotate-0 hover:rotate-45" />
          ) : (
            <Moon size={16} className="text-[var(--text-primary)] transition-transform -rotate-12 hover:rotate-0" />
          )}
        </button>

        {/* Sign Up / VIP Button — Bold, Distinct Contrast in Both Modes */}
        <button
          onClick={onOpenSignUp}
          className="px-5 sm:px-6 py-2.5 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] text-[11px] sm:text-xs font-black tracking-[0.16em] uppercase shadow-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
        >
          <Sparkles size={13} className="text-[var(--accent)]" />
          <span>SIGN UP</span>
        </button>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-[var(--surface-pill)] border border-[var(--border-pill)] text-[var(--text-primary)] cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] shadow-2xl px-6 py-6 z-50 transition-all flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between text-left text-sm font-black tracking-[0.16em] uppercase py-3 px-4 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-md'
                    : 'text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent)] text-[var(--accent-text)] font-black">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <span className="text-xs font-black text-[var(--text-primary)]">
              Color Theme:
            </span>
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--toggle-bg)] border border-[var(--toggle-border)] text-xs font-black text-[var(--toggle-icon)] cursor-pointer"
            >
              {theme === 'dark' ? <Sun size={14} className="text-[var(--accent)]" /> : <Moon size={14} className="text-[var(--text-primary)]" />}
              <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </button>
          </div>

          <button
            onClick={() => {
              onOpenSignUp();
              setMobileMenuOpen(false);
            }}
            className="w-full mt-2 py-3.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-text)] text-xs font-black tracking-[0.16em] uppercase shadow-md text-center cursor-pointer"
          >
            BUYER & TENANT REGISTRATION
          </button>
        </div>
      )}
    </header>
  );
};
