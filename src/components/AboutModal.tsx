import React, { useState } from 'react';
import { X, Building2, Compass, ShieldCheck, KeyRound, Award, Globe2, Sparkles, Phone, ArrowRight, CheckCircle2, Sliders } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'overview' | 'services';
  onExploreProperties?: () => void;
  onContactBroker?: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'overview',
  onExploreProperties,
  onContactBroker,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'services'>(defaultTab);

  if (!isOpen) return null;

  const brokerageServices = [
    {
      icon: <Building2 className="text-amber-500" size={22} />,
      title: 'Trophy Acquisition & Buyer Representation',
      badge: 'Acquisitions',
      desc: 'Exclusive sourcing, confidential valuation, and principal representation for sculpted concrete and custom architectural residences from prominent design studios.',
      points: [
        'Confidential off-market pocket listings',
        'Comparative market valuation for bespoke architecture',
        'End-to-end deed transfer and closing coordination',
      ],
    },
    {
      icon: <Compass className="text-amber-500" size={22} />,
      title: 'Custom Site Acquisition & Development Advisory',
      badge: 'Development',
      desc: 'Turnkey land acquisition, environmental entitlements, grading feasibility, and master-architect selection for high-desert and coastal custom builds.',
      points: [
        'Coastal and desert parcel zoning verification',
        'Architectural feasibility & entitlement advisory',
        'Contractor vetting and milestone escrow release',
      ],
    },
    {
      icon: <KeyRound className="text-amber-500" size={22} />,
      title: 'Luxury Tenancy & Long-Term Estate Leasing',
      badge: 'Leasing & Tenancy',
      desc: 'White-glove lease placement, high-security background vetting, and tailored tenancy contracts for trophy estates and retreat compounds.',
      points: [
        'Curated ultra-luxury tenant screening',
        'High-value property security and damage deposits in escrow',
        'Seasonal retreat and multi-year lease drafting',
      ],
    },
    {
      icon: <Sliders className="text-amber-500" size={22} />,
      title: 'Engineering Due Diligence & Systems Review',
      badge: 'Engineering Advisory',
      desc: 'Comprehensive technical review of high-performance building systems, geothermal wells, acoustic glazing, solar storage, and automated controls.',
      points: [
        'Structural concrete and Low-E glass inspections',
        'Geothermal, radiant heating, and microgrid audits',
        'Complete infrastructure disclosure reporting',
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[var(--surface-modal)] rounded-[32px] overflow-hidden shadow-2xl border border-[var(--border)] p-6 sm:p-8 text-[var(--text-primary)] my-auto max-h-[94vh] overflow-y-auto backdrop-blur-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full bg-[var(--surface-tag)] text-[var(--text-accent)]">
              ABOUT OUR FIRM & SERVICES
            </span>
            <span className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-wider">
              LICENSED LUXURY REAL ESTATE BROKERAGE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight font-display">
            Vision.Estate Advisory
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
            Representing the intersection of radical architectural engineering and premier luxury real estate.
          </p>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center gap-2 p-1 bg-[var(--surface-card-subtle)] rounded-xl mb-6 border border-[var(--border-subtle)] w-fit shadow-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
            }`}
          >
            About The Brokerage
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'services'
                ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
            }`}
          >
            Brokerage Services (4)
          </button>
        </div>

        {/* ================= TAB 1: OVERVIEW & PHILOSOPHY ================= */}
        {activeTab === 'overview' ? (
          <div className="space-y-6">
            <div className="space-y-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--surface-card)] p-5 rounded-2xl border border-[var(--border-subtle)] shadow-[var(--shadow-sm)]">
              <h3 className="text-sm font-black uppercase tracking-wider text-[var(--text-primary)]">
                Redefining Premier Residential Real Estate
              </h3>
              <p>
                Founded as an elite architectural brokerage, <strong className="text-[var(--text-primary)] font-black">Vision.Estate</strong> provides dedicated client representation for exceptional custom residences, cantilevered cliffside compounds, and desert sanctuaries.
              </p>
              <p>
                Standard real estate practices often overlook the specialized engineering of non-orthogonal residences. We combine licensed brokerage expertise with deep architectural fluency, ensuring our clients receive precise valuation, comprehensive title review, and discrete closing coordination.
              </p>
            </div>

            {/* Performance Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 bg-[var(--surface-card)] rounded-2xl border border-[var(--border-subtle)] text-center shadow-[var(--shadow-sm)]">
                <p className="font-display font-black text-xl text-[var(--text-primary)]">$1.8B+</p>
                <p className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">Closed Transactions</p>
              </div>

              <div className="p-3.5 bg-[var(--surface-card)] rounded-2xl border border-[var(--border-subtle)] text-center shadow-[var(--shadow-sm)]">
                <p className="font-display font-black text-xl text-[var(--text-primary)]">14</p>
                <p className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">Prime Global Regions</p>
              </div>

              <div className="p-3.5 bg-[var(--surface-card)] rounded-2xl border border-[var(--border-subtle)] text-center shadow-[var(--shadow-sm)]">
                <p className="font-display font-black text-xl text-[var(--text-primary)]">28</p>
                <p className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">Design & Escrow Awards</p>
              </div>

              <div className="p-3.5 bg-[var(--surface-card)] rounded-2xl border border-[var(--border-subtle)] text-center shadow-[var(--shadow-sm)]">
                <p className="font-display font-black text-xl text-emerald-600 dark:text-emerald-400">100%</p>
                <p className="text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">Title Verified</p>
              </div>
            </div>

            {/* Our Core Commitments */}
            <div className="p-4 sm:p-5 bg-[var(--surface-card)] rounded-2xl border border-[var(--border-subtle)] space-y-2.5 shadow-[var(--shadow-sm)]">
              <h4 className="text-xs font-black uppercase tracking-wider text-[var(--text-primary)]">
                Fiduciary Standards & Client Guarantees
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-secondary)] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0" />
                  <span>Licensed Real Estate Brokerage Escrow Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0" />
                  <span>Strict Non-Disclosure & Buyer Anonymity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0" />
                  <span>Comprehensive Structural & Environmental Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0" />
                  <span>Direct Liaison with Master Architects & Engineers</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ================= TAB 2: BROKERAGE SERVICES (MOVED FROM SERVICES PAGE) ================= */
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brokerageServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--surface-card)] p-5 rounded-2xl border border-[var(--border-subtle)] shadow-[var(--shadow-sm)] space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 w-fit rounded-xl bg-[var(--surface-tag)]">{service.icon}</div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--surface-badge)] text-[var(--surface-badge-text)]">
                        {service.badge}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-black text-[var(--text-primary)] tracking-wide uppercase">
                      {service.title}
                    </h4>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-1.5 font-medium">
                      {service.desc}
                    </p>
                  </div>

                  <ul className="space-y-1 pt-2 border-t border-[var(--border-subtle)]">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-[11px] text-[var(--text-secondary)] flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer Controls */}
        <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-bold">
            <ShieldCheck size={16} className="text-[var(--accent)] shrink-0" />
            <span>Licensed Real Estate Brokerage · Fiduciary Client Protection</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {onExploreProperties && (
              <button
                onClick={() => {
                  onClose();
                  onExploreProperties();
                }}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[var(--surface-card)] border border-[var(--border)] text-[var(--text-primary)] text-xs font-black uppercase tracking-wider hover:bg-[var(--surface-hover)] transition-colors cursor-pointer shadow-xs"
              >
                Browse Listings
              </button>
            )}

            {onContactBroker && (
              <button
                onClick={() => {
                  onClose();
                  onContactBroker();
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Consult Managing Broker</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
