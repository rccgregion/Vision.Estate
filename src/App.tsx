/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PartnerLogos } from './components/PartnerLogos';
import { PropertyModal } from './components/PropertyModal';
import { SignUpModal } from './components/SignUpModal';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { PropertiesPage } from './components/PropertiesPage';
import { PROPERTIES, Property } from './data/properties';
import { Maximize2, Minimize2, Building2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [currentPage, setCurrentPage] = useState<'home' | 'properties'>('home');
  const [propertyFilterType, setPropertyFilterType] = useState<string>('all');
  
  const [selectedProperty, setSelectedProperty] = useState<Property>(PROPERTIES[0]);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [aboutModalTab, setAboutModalTab] = useState<'overview' | 'services'>('overview');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Light / Dark Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Toggle between exact Framed Presentation view and Full-Bleed View
  const [isFramedView, setIsFramedView] = useState(true);

  // Sync theme class and data-theme attribute on root element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);

    if (tab === 'HOME') {
      setCurrentPage('home');
    } else if (tab === 'PROPERTIES') {
      setPropertyFilterType('all');
      setCurrentPage('properties');
    } else if (tab === 'ABOUT') {
      setAboutModalTab('overview');
      setIsAboutModalOpen(true);
    } else if (tab === 'CONTACT') {
      setIsContactModalOpen(true);
    }
  };

  const handleOpenProperty = (property: Property) => {
    setSelectedProperty(property);
    setIsPropertyModalOpen(true);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-0 sm:p-4 md:p-6 lg:p-10 transition-colors duration-300 font-sans antialiased text-[var(--text-primary)]"
      style={{ background: 'var(--bg)' }}
    >
      {/* Viewport Control Bar — High Contrast in Both Themes */}
      <aside
        aria-label="Display View Controls"
        className="w-full max-w-6xl mb-3 px-4 sm:px-5 py-2.5 rounded-full flex flex-wrap items-center justify-between gap-3 text-xs transition-colors z-20 bg-[var(--surface-pill)] border border-[var(--border-pill)] shadow-[var(--shadow-sm)] text-[var(--text-primary)] backdrop-blur-md"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
          <span className="font-black tracking-[0.16em] uppercase text-[11px] text-[var(--text-primary)]">
            VISION.ESTATE BROKERAGE
          </span>
          <span className="hidden sm:inline text-[var(--border-strong)]">|</span>
          <span className="hidden sm:inline text-[10px] uppercase font-bold tracking-wider text-[var(--text-secondary)]">
            Licensed Luxury Real Estate Portfolio
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Properties Catalog Quick Switcher */}
          <button
            onClick={() => {
              if (currentPage === 'home') {
                setPropertyFilterType('all');
                setCurrentPage('properties');
                setActiveTab('PROPERTIES');
              } else {
                setCurrentPage('home');
                setActiveTab('HOME');
              }
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--btn-control-bg)] hover:bg-[var(--btn-control-hover)] text-[var(--btn-control-text)] border border-[var(--btn-control-border)] text-[11px] font-black tracking-wider uppercase transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <Building2 size={12} className="text-[var(--accent)]" />
            <span>{currentPage === 'home' ? 'All Residences (6)' : 'Featured Villa View'}</span>
          </button>

          {/* Canvas View Switcher */}
          <button
            onClick={() => setIsFramedView(!isFramedView)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--btn-control-bg)] hover:bg-[var(--btn-control-hover)] text-[var(--btn-control-text)] border border-[var(--btn-control-border)] text-[11px] font-black tracking-wider uppercase transition-all shadow-xs cursor-pointer active:scale-95"
          >
            {isFramedView ? (
              <>
                <Maximize2 size={12} />
                <span className="hidden sm:inline">Full-Bleed View</span>
              </>
            ) : (
              <>
                <Minimize2 size={12} />
                <span className="hidden sm:inline">Framed Canvas View</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Main Container Card — Mirrors the exact rounded device/canvas window with zero layout shift between themes */}
      <main
        className={`w-full transition-all duration-300 overflow-hidden relative z-10 ${
          isFramedView
            ? 'max-w-[1340px] rounded-[32px] sm:rounded-[44px] shadow-[var(--shadow-main)]'
            : 'max-w-full rounded-none min-h-screen shadow-none'
        } bg-[var(--surface-canvas)] backdrop-blur-3xl border border-[var(--border)] flex flex-col justify-between`}
      >
        {/* Elevated Top Navigation */}
        <Navbar
          activeTab={activeTab}
          onSelectTab={handleTabSelect}
          onOpenSignUp={() => setIsSignUpModalOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Page Switcher: Main Hero Landing vs Full Properties Catalog */}
        {currentPage === 'home' ? (
          <>
            {/* Hero Section */}
            <HeroSection
              selectedProperty={selectedProperty}
              onExploreMore={() => {
                setPropertyFilterType('all');
                setCurrentPage('properties');
                setActiveTab('PROPERTIES');
              }}
              onSelectProperty={handleOpenProperty}
            />

            {/* Bottom Partner Logos Strip */}
            <PartnerLogos />
          </>
        ) : (
          /* Dedicated Properties Full Page */
          <PropertiesPage
            initialTypeFilter={propertyFilterType}
            onSelectProperty={handleOpenProperty}
            onBackToHome={() => {
              setCurrentPage('home');
              setActiveTab('HOME');
            }}
            onOpenSignUp={() => setIsSignUpModalOpen(true)}
          />
        )}
      </main>

      {/* Interactive Modals */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isPropertyModalOpen}
        onClose={() => setIsPropertyModalOpen(false)}
        onSelectProperty={(p) => setSelectedProperty(p)}
      />

      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />

      {/* About & Services Modal (Contains all Services content merged into About) */}
      <AboutModal
        isOpen={isAboutModalOpen}
        defaultTab={aboutModalTab}
        onClose={() => setIsAboutModalOpen(false)}
        onExploreProperties={() => {
          setIsAboutModalOpen(false);
          setPropertyFilterType('all');
          setCurrentPage('properties');
          setActiveTab('PROPERTIES');
        }}
        onContactBroker={() => {
          setIsAboutModalOpen(false);
          setIsContactModalOpen(true);
        }}
      />

      {/* Contact Brokerage Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
