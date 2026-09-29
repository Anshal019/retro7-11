import React from 'react';
import { ArrowDown, Sparkles, Award, Coffee, Compass } from 'lucide-react';
import Logo from './Logo';

export default function Hero({ onExploreClick }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url('/backgroundmain.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#F7F5F0', /* Off-White */
        overflow: 'hidden'
      }}
    >
      {/* Semi-Transparent Espresso Overlay for text legibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(22, 12, 9, 0.62)',
          backdropFilter: 'blur(2px)',
          zIndex: 1
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.75rem'
        }}
        className="animate-fade-in"
      >
        {/* Decorative Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1.25rem',
            borderRadius: '50px',
            backgroundColor: 'rgba(0, 136, 232, 0.15)',
            border: '1px solid rgba(0, 136, 232, 0.5)',
            backdropFilter: 'blur(8px)',
            color: '#F7F5F0',
            fontSize: '0.8rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase'
          }}
        >
          <Sparkles size={14} color="#0088e8" />
          <span>AUTHENTIC & PREMIUM COFFEE</span>
        </div>

        {/* Hero Main Logo Component */}
        <div style={{ margin: '0.5rem 0' }}>
          <Logo size="large" darkBackground={true} variant="stacked" showTagline={true} />
        </div>

        {/* Sub-headline */}
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: '#F7F5F0',
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            fontWeight: '300',
            letterSpacing: '0.06em',
            maxWidth: '680px',
            margin: 0,
            opacity: 0.95,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
          }}
        >
          Rich Brew • Hand-crafted Coffee • Artisan Experience
        </p>

        {/* Buttons Group */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginTop: '1rem'
          }}
        >
          {/* Primary CTA Button: "OUR STORY" in Copper gradient with rounded profile */}
          <a
            href="#about"
            className="btn-story"
          >
            <Compass size={18} />
            <span>OUR STORY</span>
          </a>

          {/* Secondary CTA Button */}
          <a
            href="#menu"
            className="btn-primary"
            style={{
              backgroundColor: '#84966B',
              borderRadius: '50px',
              padding: '0.85rem 2.2rem'
            }}
          >
            <Coffee size={18} />
            <span>EXPLORE MENU</span>
          </a>
        </div>

        {/* Value Highlights Pill */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(247, 245, 240, 0.2)',
            width: '100%',
            maxWidth: '750px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F7F5F0', fontSize: '0.85rem' }}>
            <Award size={16} color="#B57F50" />
            <span>100% Organic Micro-Lot Beans</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F7F5F0', fontSize: '0.85rem' }}>
            <Sparkles size={16} color="#B57F50" />
            <span>Signature Copper Roasting</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F7F5F0', fontSize: '0.85rem' }}>
            <Coffee size={16} color="#B57F50" />
            <span>Artisan Daily Pastries</span>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <a
          href="#menu"
          aria-label="Scroll down to menu"
          style={{
            marginTop: '1rem',
            color: '#F7F5F0',
            opacity: 0.8,
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
        >
          <div
            style={{
              animation: 'bounce 2s infinite',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.2rem',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}
          >
            <span>SCROLL</span>
            <ArrowDown size={18} color="#B57F50" />
          </div>
        </a>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
      `}</style>
    </section>
  );
}
