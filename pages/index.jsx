import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu, X, Mail } from 'lucide-react';
import HomePage from '../components/HomePage';
import PlatformSciencePage from '../components/PlatformSciencePage';
import PartnersPage from '../components/PartnersPage';
import AboutPage from '../components/AboutPage';
import ContactForm from '../components/ContactForm';
import Translate from '../components/Translate';

export default function Site() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactContext, setContactContext] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const overHero = !scrolled;

  const navItems = [
    { name: 'Platform & Science', id: 'platform-science' },
    { name: 'For Partners', id: 'partners' },
    { name: 'About', id: 'about' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openContact = (type, message) => {
    // Guard against onClick={openContact} passing the DOM click event as `type`.
    setContactContext(typeof type === 'string' ? { type, message: message || '' } : null);
    setShowContactModal(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'platform-science': return <PlatformSciencePage onNavigate={handleNavClick} />;
      case 'partners':   return <PartnersPage onContactClick={openContact} />;
      case 'about':      return <AboutPage onContactClick={openContact} />;
      default:           return <HomePage onContactClick={openContact} onNavigate={handleNavClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Seco Bio — Protecting what matters</title>
        <meta
          name="description"
          content="Seco Bio uses AI and robotics to keep living organisms alive, making probiotics deliver what the label promises."
        />
        <link rel="canonical" href="https://seco.bio" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Seco Bio" />
        <meta property="og:url" content="https://seco.bio" />
        <meta property="og:title" content="Seco Bio — Protecting what matters" />
        <meta
          property="og:description"
          content="Seco Bio uses AI and robotics to keep living organisms alive, making probiotics deliver what the label promises."
        />
        <meta property="og:image" content="https://seco.bio/images/hero-poster.jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seco Bio — Protecting what matters" />
        <meta
          name="twitter:description"
          content="Seco Bio uses AI and robotics to keep living organisms alive, making probiotics deliver what the label promises."
        />
        <meta name="twitter:image" content="https://seco.bio/images/hero-poster.jpg" />
      </Head>

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: overHero ? 'transparent' : '#FFFFFF',
          boxShadow: overHero ? 'none' : '0 1px 3px rgba(0,0,0,0.06)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Seco Bio home"
          >
            <div style={{ position: 'relative', height: 34, width: 28, flexShrink: 0 }}>
              {/* Both variants render from mount and crossfade via opacity — swapping
                  the `src` directly caused a flicker while the other file loaded. */}
              <img
                src="/images/seco-mark-white.png"
                alt="Seco Bio"
                style={{ position: 'absolute', inset: 0, height: 34, width: 28, display: 'block', opacity: overHero ? 1 : 0, transition: 'opacity 250ms ease' }}
              />
              <img
                src="/images/seco-mark.png"
                alt=""
                aria-hidden="true"
                style={{ position: 'absolute', inset: 0, height: 34, width: 28, display: 'block', opacity: overHero ? 0 : 1, transition: 'opacity 250ms ease' }}
              />
            </div>
            <div
              className="text-lg font-bold"
              style={{ color: overHero ? '#FFFFFF' : '#3B60E4', letterSpacing: '0.08em', lineHeight: 1 }}
            >
              SECO BIO
            </div>
          </button>
        </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const activeUnderline = overHero ? 'rgba(255,255,255,0.95)' : '#3B60E4';
              const hoverColor = overHero ? 'rgba(255,255,255,0.7)' : '#3B60E4';
              return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-semibold transition-colors"
                style={{
                  color: overHero
                    ? isActive ? '#FFFFFF' : 'rgba(255,255,255,0.75)'
                    : isActive ? '#3B60E4' : '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  paddingBottom: '4px',
                  borderBottom: `2px solid ${isActive ? activeUnderline : 'transparent'}`,
                  transition: 'color 0.2s, border-color 0.2s'
                }}
                onMouseOver={(e) => { if (!isActive) e.currentTarget.style.borderBottomColor = hoverColor; }}
                onMouseOut={(e) => { if (!isActive) e.currentTarget.style.borderBottomColor = 'transparent'; }}
              >
                {item.name}
              </button>
              );
            })}
          </div>

          {/* Single Translate instance, always rendered — Google's widget
              doesn't support being initialized twice on one page (confirmed:
              a second new TranslateElement() call silently does nothing,
              even targeting a distinct element id), so there can only ever
              be one on the page regardless of viewport. It sits between the
              nav and the Get in touch/hamburger, visible at every width —
              those two stay one-or-the-other via hidden/md:hidden so the
              visual order (Translate, then the trailing action) matches on
              both desktop and mobile. */}
          <div className="flex items-center gap-3 md:gap-4">
            <Translate />
            <button
              onClick={openContact}
              className="hidden md:inline-flex px-6 py-2.5 text-sm font-semibold text-white rounded-full"
              style={{ background: 'linear-gradient(90deg, #3B60E4 0%, #2F4FC9 100%)' }}
            >
              Get in touch
            </button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: overHero ? '#FFFFFF' : '#3D4654' }}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t" style={{ borderColor: '#DCE3F7' }}>
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm font-medium text-left"
                  style={{ color: '#3D4654' }}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => { openContact(); setMobileMenuOpen(false); }}
                className="px-4 py-2.5 text-sm font-semibold text-white rounded-full w-full"
                style={{ background: 'linear-gradient(90deg, #3B60E4 0%, #2F4FC9 100%)' }}
              >
                Get in touch
              </button>
            </div>
          </div>
        )}
      </nav>

      <main style={{ paddingTop: 0 }}>{renderPage()}</main>

      {currentPage !== 'home' && (
        <button
          onClick={openContact}
          className="fixed bottom-8 right-8 p-4 rounded-full text-white shadow-lg z-40"
          style={{ background: 'linear-gradient(135deg, #3B60E4 0%, #2F4FC9 100%)' }}
          aria-label="Get in touch"
        >
          <Mail size={24} />
        </button>
      )}

      {showContactModal && (
        <ContactForm
          onClose={() => setShowContactModal(false)}
          initialType={contactContext?.type}
          initialMessage={contactContext?.message}
        />
      )}
      <footer
        className="py-10 px-6"
        style={{
          background: 'linear-gradient(120deg, #0D4429 0%, #125A39 55%, #176E46 100%)',
          color: 'white',
          borderTop: '3px solid #1E8E5A'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Logo · contact — single row */}
          <div
            className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left"
            style={{
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingBottom: '1.25rem',
              marginBottom: '1.25rem',
              borderBottom: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/images/seco-mark-white.png" alt="" style={{ height: 26, width: 'auto' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: '0.5px' }}>SECO BIO</div>
                <div style={{ fontSize: 12, opacity: 0.65 }}>Protecting what matters.</div>
              </div>
            </div>

            <a
              href="mailto:info@seco.bio"
              className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
              style={{ fontSize: 13 }}
            >
              <Mail size={14} strokeWidth={1.8} />
              info@seco.bio
            </a>
          </div>

          <div className="text-xs text-center" style={{ opacity: 0.5 }}>
            © 2026 Seco Bio. Privacy · Terms
          </div>
        </div>
      </footer>
    </div>
  );
}
