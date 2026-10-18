import React, { useState } from 'react';
import { X, Bed, Bath, Maximize2, ShieldCheck, Zap, Sparkles, Calendar, Check, ArrowRight } from 'lucide-react';
import { Property, PROPERTIES } from '../data/properties';

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProperty?: (prop: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  isOpen,
  onClose,
  onSelectProperty,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', date: '', notes: '' });

  if (!isOpen || !property) return null;

  const allImages = [property.image, ...(property.additionalImages || [])];

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setInquirySent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[var(--surface-modal)] rounded-[32px] overflow-hidden shadow-2xl border border-[var(--border)] my-auto max-h-[92vh] flex flex-col text-[var(--text-primary)] backdrop-blur-3xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 bg-[var(--surface-modal)] border-b border-[var(--border-subtle)] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-[var(--surface-tag)] text-[var(--text-accent)] border border-[var(--accent)]">
              {property.categoryLabel.toUpperCase()}
            </span>
            <span className="text-xs text-[var(--text-muted)]">·</span>
            <span className="text-xs font-bold text-[var(--text-secondary)]">{property.location}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Gallery Display */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-96 rounded-[24px] overflow-hidden shadow-md group">
              <img
                src={allImages[activeImageIndex]}
                alt={property.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-white">
                <p className="text-xs uppercase tracking-wider text-amber-400 font-black">{property.subtitle}</p>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">{property.title}</h3>
              </div>
              <div className="absolute bottom-4 right-6 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-neutral-950 dark:text-white font-black text-base sm:text-xl px-4 py-1.5 rounded-full shadow-lg border border-white/20">
                {property.price}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[var(--accent)] ring-2 ring-[var(--accent)] scale-102'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[var(--surface-card)] p-4 rounded-2xl border border-[var(--border-subtle)] shadow-[var(--shadow-sm)]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--surface-tag)] text-[var(--text-accent)]">
                <Bed size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[var(--text-secondary)] tracking-wider">Bedrooms</p>
                <p className="text-sm font-black text-[var(--text-primary)]">{property.beds} Suites</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--surface-tag)] text-[var(--text-accent)]">
                <Bath size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[var(--text-secondary)] tracking-wider">Bathrooms</p>
                <p className="text-sm font-black text-[var(--text-primary)]">{property.baths} Baths</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--surface-tag)] text-[var(--text-accent)]">
                <Maximize2 size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[var(--text-secondary)] tracking-wider">Interior</p>
                <p className="text-sm font-black text-[var(--text-primary)]">{property.sqft}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--surface-tag)] text-[var(--text-accent)]">
                <Zap size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[var(--text-secondary)] tracking-wider">Energy</p>
                <p className="text-sm font-black text-emerald-600 dark:text-emerald-400">Net Zero</p>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--surface-card)] p-6 rounded-2xl border border-[var(--border-subtle)] shadow-[var(--shadow-sm)] space-y-3">
              <h4 className="text-xs font-black uppercase tracking-[0.15em] text-[var(--text-primary)]">
                Architectural Concept
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                {property.description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)]">
                <ShieldCheck size={16} className="text-[var(--accent)]" />
                <span>Verified Vision.Estate Signature Portfolio</span>
              </div>
            </div>

            <div className="bg-[var(--surface-card)] p-6 rounded-2xl border border-[var(--border-subtle)] shadow-[var(--shadow-sm)] space-y-3">
              <h4 className="text-xs font-black uppercase tracking-[0.15em] text-[var(--text-primary)]">
                Engineering & Technology
              </h4>
              <ul className="space-y-2">
                {property.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] font-medium">
                    <Sparkles size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other Properties Quick Switcher */}
          <div className="space-y-2">
            <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[var(--text-primary)]">
              Browse Other Architectural Projects
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3).map((other) => (
                <button
                  key={other.id}
                  onClick={() => {
                    setActiveImageIndex(0);
                    onSelectProperty?.(other);
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[var(--surface-card)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all text-left group shadow-xs cursor-pointer"
                >
                  <img
                    src={other.image}
                    alt={other.title}
                    referrerPolicy="no-referrer"
                    className="w-14 h-12 rounded-lg object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="overflow-hidden">
                    <p className="text-xs font-black text-[var(--text-primary)] truncate">{other.title}</p>
                    <p className="text-[11px] text-[var(--text-accent)] font-bold">{other.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Inquiry / Private Viewing Form */}
          <div className="bg-neutral-950 text-white p-5 sm:p-7 rounded-[26px] shadow-xl border border-neutral-800">
            {inquirySent ? (
              <div className="py-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check size={20} />
                </div>
                <h4 className="text-base font-black">Property Disclosures & Showing Requested</h4>
                <p className="text-xs text-neutral-300 max-w-md mx-auto">
                  Our licensed managing broker will reach out within 2 hours with the full architectural disclosures package, structural survey, and private escorted showing schedule.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-black tracking-wider uppercase text-amber-400">
                      Private Showing & Property Disclosures Request
                    </h4>
                    <p className="text-xs text-neutral-300">
                      Confidential consultation with our licensed managing brokers.
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-neutral-300 bg-white/10 px-3 py-1 rounded-full w-fit">
                    Strict Confidentiality
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <input
                    type="text"
                    required
                    placeholder="Full Legal Name / Representative"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Verified Email / Family Office"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs w-full sm:w-auto">
                    <Calendar size={14} className="text-amber-400 shrink-0" />
                    <span>Private escorted viewings scheduled Monday through Saturday</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Disclosures</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
