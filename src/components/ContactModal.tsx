import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Check, Send, Clock, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', propertyInterest: 'sale', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[var(--surface-modal)] rounded-[32px] overflow-hidden shadow-2xl border border-[var(--border)] p-5 sm:p-8 text-[var(--text-primary)] my-auto max-h-[94vh] overflow-y-auto backdrop-blur-3xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Header Tag */}
        <div className="space-y-1 mb-5">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full bg-[var(--surface-tag)] text-[var(--text-accent)]">
            LICENSED BROKERAGE INQUIRIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight font-display">
            Contact Vision.Estate
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
            Direct access to our managing brokers, licensed acquisitions team, and private escrow advisory.
          </p>
        </div>

        {/* ================= BOLD CONTACT CHANNELS FIRST (PRIMARY FOCUS) ================= */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-sm)] space-y-4">
          <h3 className="text-xs font-black uppercase tracking-[0.16em] text-[var(--text-primary)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span>HOW TO REACH OUR BROKERAGE DIRECTLY</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Phone */}
            <a
              href="tel:18008474663"
              className="p-3.5 rounded-xl bg-[var(--surface-card-subtle)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all group flex items-start gap-3 shadow-xs"
            >
              <div className="p-2.5 rounded-lg bg-[var(--surface-tag)] text-[var(--text-accent)] shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-[var(--text-secondary)]">
                  Direct Brokerage Line
                </p>
                <p className="text-sm font-black text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  +1 (800) 847-4663
                </p>
                <p className="text-[10px] text-[var(--text-secondary)] mt-0.5 font-bold">
                  Toll-Free · Confidential Call
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:brokerage@vision.estate"
              className="p-3.5 rounded-xl bg-[var(--surface-card-subtle)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all group flex items-start gap-3 shadow-xs"
            >
              <div className="p-2.5 rounded-lg bg-[var(--surface-tag)] text-[var(--text-accent)] shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-[var(--text-secondary)]">
                  Client Inquiries Email
                </p>
                <p className="text-sm font-black text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  brokerage@vision.estate
                </p>
                <p className="text-[10px] text-[var(--text-secondary)] mt-0.5 font-bold">
                  Direct Response within 2 Hours
                </p>
              </div>
            </a>
          </div>

          {/* Physical Offices & Hours */}
          <div className="pt-2 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-2.5 text-[var(--text-secondary)]">
              <MapPin size={15} className="text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-[var(--text-primary)]">Flagship Office</p>
                <p className="text-[11px] text-[var(--text-secondary)] font-medium">
                  9601 Wilshire Blvd, Suite 1200<br />
                  Beverly Hills, CA 90212
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-[var(--text-secondary)]">
              <Clock size={15} className="text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-[var(--text-primary)]">Showing Hours</p>
                <p className="text-[11px] text-[var(--text-secondary)] font-medium">
                  Mon – Sat: 8:00 AM – 7:00 PM PST<br />
                  Private viewings scheduled 7 days a week
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONNECT WITH US / INQUIRY FORM ================= */}
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-[var(--text-primary)]">
              SCHEDULE A PRIVATE SHOWING OR PROPERTY CONSULTATION
            </h3>
          </div>

          {sent ? (
            <div className="py-8 text-center space-y-3 bg-[var(--surface-card)] p-6 rounded-2xl border border-[var(--border-subtle)] shadow-[var(--shadow-sm)]">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <Check size={24} />
              </div>
              <h4 className="text-base font-black text-[var(--text-primary)]">Inquiry Received</h4>
              <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto font-medium">
                Thank you for contacting Vision.Estate. A managing broker will contact you shortly with complete property prospectus materials and private viewing arrangements.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] text-xs font-black uppercase tracking-wider cursor-pointer shadow-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 bg-[var(--surface-card)] p-4 sm:p-5 rounded-2xl border border-[var(--border-subtle)] shadow-[var(--shadow-sm)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-black text-[var(--text-primary)] uppercase tracking-wider mb-1">
                    Client Name / Representative
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jonathan Vance"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[var(--surface-input)] border border-[var(--border-input)] rounded-xl px-3.5 py-2.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-[var(--text-primary)] uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="client@familyoffice.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[var(--surface-input)] border border-[var(--border-input)] rounded-xl px-3.5 py-2.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-black text-[var(--text-primary)] uppercase tracking-wider mb-1">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (310) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[var(--surface-input)] border border-[var(--border-input)] rounded-xl px-3.5 py-2.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-[var(--text-primary)] uppercase tracking-wider mb-1">
                    Transaction Interest
                  </label>
                  <select
                    value={form.propertyInterest}
                    onChange={(e) => setForm({ ...form, propertyInterest: e.target.value })}
                    className="w-full bg-[var(--surface-input)] border border-[var(--border-input)] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] cursor-pointer shadow-xs"
                  >
                    <option value="sale" className="bg-[var(--surface-dropdown)] text-[var(--text-primary)] font-medium">Property Purchase (For Sale)</option>
                    <option value="rent" className="bg-[var(--surface-dropdown)] text-[var(--text-primary)] font-medium">Seasonal Luxury Rental</option>
                    <option value="lease" className="bg-[var(--surface-dropdown)] text-[var(--text-primary)] font-medium">Long-term Estate Lease</option>
                    <option value="custom" className="bg-[var(--surface-dropdown)] text-[var(--text-primary)] font-medium">Custom Architectural Development</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black text-[var(--text-primary)] uppercase tracking-wider mb-1">
                  Specific Property or Inquiry Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Specify target location, budget range, or specific property listing..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[var(--surface-input)] border border-[var(--border-input)] rounded-xl px-3.5 py-2 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] resize-none shadow-xs"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-secondary)] font-bold">
                  <ShieldCheck size={14} className="text-[var(--accent)]" />
                  <span>Licensed Real Estate Brokerage Escrow Protection</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Send size={13} />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
