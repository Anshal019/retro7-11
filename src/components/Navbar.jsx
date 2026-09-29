import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenCart, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Copper', href: '#copper-specialty' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Photos', href: '#photos' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#E6DBCF', /* Oat Beige */
        borderBottom: '1px solid #353535', /* Charcoal border line separating from Hero */
        boxShadow: isScrolled ? '0 4px 20px rgba(53, 53, 53, 0.08)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0.85rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Left: RETRO 7/11 CAFE Badge & Typography Logo */}
        <a
          href="#home"
          style={{
            textDecoration: 'none'
          }}
        >
          <Logo size="small" darkBackground={false} showTagline={true} />
        </a>

        {/* Center: Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.25rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: link.name === 'Copper' ? '#B57F50' : '#353535', /* Copper headline highlight */
                position: 'relative',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#B57F50';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = link.name === 'Copper' ? '#B57F50' : '#353535';
              }}
            >
              {link.name === 'Copper' && <Sparkles size={14} color="#B57F50" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Prominent "Order Online" CTA Button (Olive Green) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onOpenCart}
            className="btn-primary"
            style={{
              backgroundColor: '#84966B', /* Olive Green */
              color: '#F7F5F0', /* Off-White */
              padding: '0.65rem 1.4rem',
              borderRadius: '4px',
              border: 'none',
              fontSize: '0.85rem'
            }}
          >
            <ShoppingBag size={17} />
            <span>Order Online</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#353535',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#E6DBCF',
            borderTop: '1px solid #A9A9A9',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.3rem',
                fontWeight: '600',
                textDecoration: 'none',
                color: link.name === 'Copper' ? '#B57F50' : '#353535',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {link.name === 'Copper' && <Sparkles size={16} color="#B57F50" />}
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 868px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
