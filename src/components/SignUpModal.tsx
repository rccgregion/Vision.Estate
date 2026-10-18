import React, { useState } from 'react';
import { X, Check, Lock, Sparkles, ChevronDown, ShieldCheck } from 'lucide-react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investorType: 'private_buyer',
    priceRange: '15m_plus',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-md bg-[var(--surface-modal)] rounded-[32px] overflow-hidden shadow-2xl border border-[var(--border)] p-6 sm:p-8 text-[var(--text-primary)] my-auto backdrop-blur-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[var(--surface-tag)] text-[var(--text-accent)] mx-auto flex items-center justify-center border border-[var(--accent)]">
              <Check size={28} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-[var(--text-primary)]">Registration Complete</h3>
              <p className="text-xs text-[var(--text-secondary)] font-medium">
                Your private registration profile has been confirmed for <span className="font-black text-[var(--text-primary)]">{formData.email}</span>.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)] text-left space-y-2 shadow-[var(--shadow-sm)]">
              <div className="flex items-center gap-2 text-xs font-black text-[var(--text-primary)]">
                <Sparkles size={14} className="text-[var(--accent)]" />
                <span>Buyer Privileges Activated:</span>
              </div>
              <ul className="text-xs text-[var(--text-secondary)] space-y-1.5 list-disc list-inside font-medium">
                <li>Pre-market off-market pocket listings</li>
                <li>Confidential direct access to managing brokers</li>
                <li>Private showing invitations & escrow priority</li>
              </ul>
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Access Property Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full bg-[var(--surface-tag)] text-[var(--text-accent)]">
                  CONFIDENTIAL REGISTRY
                </span>
                <span className="text-[10px] text-[var(--text-secondary)] font-bold tracking-wider">LICENSED BROKERAGE</span>
              </div>
              <h3 className="text-2xl font-black text-[var(--text-primary)] tracking-tight font-display">
                Buyer & Tenant Registration
              </h3>
              <p className="text-xs text-[var(--text-secondary)] font-medium">
                Receive confidential access to off-market architectural listings, pocket estates, and private showings.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-[11px] font-black text-[var(--text-primary)] uppercase tracking-wider mb-1">
                  Full Legal Name / Entity
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lady Genevieve Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--surface-input)] border border-[var(--border-input)] rounded-xl px-4 py-2.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] shadow-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black text-[var(--text-primary)] uppercase tracking-wider mb-1">
                  Direct Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="client@familyoffice.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[var(--surface-input)] border border-[var(--border-input)] rounded-xl px-4 py-2.5 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] shadow-xs"
                />
              </div>

              {/* Client Profile Dropdown with Custom Look */}
              <div>
                <label className="block text-[11px] font-black text-[var(--text-primary)] uppercase tracking-wider mb-1">
                  Client Profile
                </label>
                <div className="relative">
                  <select
                    value={formData.investorType}
                    onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                    className="appearance-none w-full bg-[var(--surface-input)] border border-[var(--border-input)] rounded-xl pl-4 pr-10 py-2.5 text-xs font-bold text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] cursor-pointer shadow-xs"
                  >
                    <option value="private_buyer" className="bg-[var(--surface-dropdown)] text-[var(--text-primary)] font-medium py-1">
                      Private Buyer (Primary / Vacation Estate)
                    </option>
                    <option value="family_office" className="bg-[var(--surface-dropdown)] text-[var(--text-primary)] font-medium py-1">
                      Family Office / Private Investment Trust
                    </option>
                    <option value="tenant" className="bg-[var(--surface-dropdown)] text-[var(--text-primary)] font-medium py-1">
                      Tenant Seeking Long-Term Luxury Lease
                    </option>
                    <option value="developer" className="bg-[var(--surface-dropdown)] text-[var(--text-primary)] font-medium py-1">
                      Architectural Collector & Land Developer
                    </option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none stroke-[2.5]" />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] font-black text-xs uppercase tracking-[0.16em] transition-all shadow-md active:scale-98 cursor-pointer"
              >
                Submit Client Registration
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[var(--text-secondary)] pt-1 font-bold">
              <ShieldCheck size={13} className="text-[var(--accent)]" />
              <span>Licensed Escrow Representation & Strict Confidentiality</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
