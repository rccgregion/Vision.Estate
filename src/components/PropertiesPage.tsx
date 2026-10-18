import React, { useState, useMemo } from 'react';
import { Property, PROPERTIES } from '../data/properties';
import { Bed, Bath, Maximize2, ArrowLeft, Search, ArrowUpRight, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';

interface PropertiesPageProps {
  initialTypeFilter?: string; // 'all' | 'sale' | 'rent' | 'lease'
  onSelectProperty: (property: Property) => void;
  onBackToHome: () => void;
  onOpenSignUp: () => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  initialTypeFilter = 'all',
  onSelectProperty,
  onBackToHome,
  onOpenSignUp,
}) => {
  const [selectedType, setSelectedType] = useState<string>(initialTypeFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-desc' | 'sqft'>('featured');

  const filterTabs = [
    { id: 'all', label: 'All Listings', count: PROPERTIES.length },
    { id: 'sale', label: 'For Sale', count: PROPERTIES.filter((p) => p.type === 'sale').length },
    { id: 'rent', label: 'For Rent', count: PROPERTIES.filter((p) => p.type === 'rent').length },
    { id: 'lease', label: 'Long-term Lease', count: PROPERTIES.filter((p) => p.type === 'lease').length },
  ];

  const locations = [
    { id: 'all', label: 'All Regions' },
    { id: 'California', label: 'California Coast & Desert' },
    { id: 'Colorado', label: 'Colorado Alpine Highlands' },
    { id: 'Arizona', label: 'Arizona Desert Reserve' },
  ];

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((item) => {
      // Type matching
      if (selectedType !== 'all' && item.type !== selectedType) {
        return false;
      }
      // Location matching
      if (selectedLocation !== 'all' && !item.location.includes(selectedLocation)) {
        return false;
      }
      // Search matching
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesLocation = item.location.toLowerCase().includes(query);
        const matchesSubtitle = item.subtitle.toLowerCase().includes(query);
        const matchesFeatures = item.features.some((f) => f.toLowerCase().includes(query));
        if (!matchesTitle && !matchesLocation && !matchesSubtitle && !matchesFeatures) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'sqft') {
        const sqftA = parseInt(a.sqft.replace(/\D/g, ''), 10) || 0;
        const sqftB = parseInt(b.sqft.replace(/\D/g, ''), 10) || 0;
        return sqftB - sqftA;
      }
      return 0;
    });
  }, [selectedType, selectedLocation, searchQuery, sortBy]);

  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 py-6 sm:py-8 space-y-8 animate-fade-in transition-colors">
      
      {/* Top Header & Breadcrumb — Glassy Banner with Maximum Contrast */}
      <div className="relative p-6 sm:p-8 rounded-[32px] bg-[var(--surface-elevated)] border border-[var(--border)] shadow-[var(--shadow-elevated)] backdrop-blur-2xl flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] px-5 py-2.5 rounded-full shadow-md transition-all mb-4 cursor-pointer active:scale-95"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform stroke-[2.5]" />
            <span>Return to Featured Residence</span>
          </button>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight font-display drop-shadow-2xs">
            Residential Property Portfolio
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-extrabold max-w-2xl mt-3 leading-relaxed">
            Curated offerings of custom architectural estates, coastal cantilevered compounds, and private high-desert retreats available through our licensed brokerage.
          </p>
        </div>

        {/* Quick Action */}
        <div className="shrink-0">
          <button
            onClick={onOpenSignUp}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] font-black text-xs uppercase tracking-[0.16em] shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles size={14} className="text-[var(--accent)]" />
            <span>Buyer Registration</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs & Search Controls — Glassy Pill Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-[var(--surface-elevated)] p-4 sm:p-5 rounded-2xl border border-[var(--border)] shadow-[var(--shadow)] backdrop-blur-2xl">
        
        {/* Type Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[var(--surface-card-subtle)] rounded-xl border border-[var(--border-subtle)]">
          {filterTabs.map((tab) => {
            const isActive = selectedType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-black tracking-[0.12em] uppercase transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-sm scale-102'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                  isActive
                    ? 'bg-[var(--accent)] text-[var(--accent-text)]'
                    : 'bg-[var(--surface-badge)] text-[var(--surface-badge-text)]'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Location Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          {/* Location Select with Bespoke Dropdown Look */}
          <div className="relative w-full sm:w-auto min-w-[200px]">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="appearance-none w-full pl-4 pr-10 py-2.5 bg-[var(--surface-input)] border border-[var(--border-input)] rounded-xl text-xs font-bold text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] shadow-xs cursor-pointer"
            >
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id} className="bg-[var(--surface-dropdown)] text-[var(--text-primary)] font-medium py-1">
                  {loc.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none stroke-[2.5]" />
          </div>

          {/* Sort Select with Bespoke Dropdown Look */}
          <div className="relative w-full sm:w-auto min-w-[170px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="appearance-none w-full pl-4 pr-10 py-2.5 bg-[var(--surface-input)] border border-[var(--border-input)] rounded-xl text-xs font-bold text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] shadow-xs cursor-pointer"
            >
              <option value="featured" className="bg-[var(--surface-dropdown)] text-[var(--text-primary)] font-medium py-1">Sort: Featured</option>
              <option value="sqft" className="bg-[var(--surface-dropdown)] text-[var(--text-primary)] font-medium py-1">Sort: Largest Floor Area</option>
            </select>
            <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none stroke-[2.5]" />
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search by city, features, estate..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[var(--surface-input)] border border-[var(--border-input)] rounded-xl text-xs font-bold text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden focus:ring-2 focus:ring-[var(--accent)] shadow-xs"
            />
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      {filteredProperties.length === 0 ? (
        <div className="py-20 text-center bg-[var(--surface-card)] rounded-3xl border border-[var(--border)] space-y-3 backdrop-blur-xl">
          <p className="text-base font-bold text-[var(--text-primary)]">
            No properties match your current search criteria.
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Please reset your filter criteria or search for another location.
          </p>
          <button
            onClick={() => {
              setSelectedType('all');
              setSelectedLocation('all');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] text-xs font-black uppercase tracking-wider shadow-sm cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              onClick={() => onSelectProperty(property)}
              className="group bg-[var(--surface-card)] rounded-[28px] overflow-hidden border border-[var(--border)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:bg-[var(--surface-card)] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image & Badges */}
              <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                <img
                  src={property.image}
                  alt={property.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.16em] backdrop-blur-md bg-black/60 text-white border border-white/20">
                    {property.categoryLabel}
                  </span>

                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.14em] backdrop-blur-md bg-amber-500 text-neutral-950">
                    Built {property.year}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                    {property.location}
                  </p>
                  <h3 className="text-lg font-black tracking-tight drop-shadow-sm truncate">
                    {property.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-4 bg-[var(--surface-card)]">
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl font-black text-[var(--text-primary)] font-display">
                      {property.price}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--text-secondary)]">
                      {property.type === 'rent' ? 'Monthly Lease' : property.type === 'lease' ? 'Annual Lease' : 'Freehold Title'}
                    </span>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] font-medium line-clamp-2 mt-2 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Spec Indicators */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-[var(--surface-card-subtle)] border border-[var(--border-subtle)] shadow-xs text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-black text-[var(--text-primary)]">{property.beds}</span>
                    <span className="text-[9px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-[var(--border-subtle)]">
                    <span className="text-xs font-black text-[var(--text-primary)]">{property.baths}</span>
                    <span className="text-[9px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-black text-[var(--text-primary)]">{property.sqft}</span>
                    <span className="text-[9px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Floor Area</span>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-1 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-black text-[var(--text-accent)]">
                    <ShieldCheck size={14} className="stroke-[2.5]" />
                    <span>Verified Title</span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProperty(property);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] text-xs font-black uppercase tracking-wider transition-all group-hover:scale-102 cursor-pointer shadow-sm"
                  >
                    <span>View Listing</span>
                    <ArrowUpRight size={13} className="stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Brokerage Guarantee Callout */}
      <div className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-r from-neutral-950 to-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-neutral-800">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-xs font-black uppercase tracking-widest text-amber-400">
              Private Brokerage & Advisory
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            Inquiring about off-market private acquisitions or custom site development?
          </h3>
          <p className="text-xs text-neutral-300 max-w-xl">
            Our brokerage directors advise private buyers, trustees, and family offices on off-market property acquisition, architectural feasibility, and escrow execution.
          </p>
        </div>

        <button
          onClick={onOpenSignUp}
          className="shrink-0 px-7 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-xs uppercase tracking-[0.18em] transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Consult Managing Broker
        </button>
      </div>

    </div>
  );
};
