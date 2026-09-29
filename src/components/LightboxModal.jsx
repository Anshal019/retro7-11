import React from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function LightboxModal({ image, allImages, onClose, onNavigate }) {
  if (!image) return null;

  const currentIndex = allImages.findIndex((img) => img.id === image.id);

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    onNavigate(allImages[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % allImages.length;
    onNavigate(allImages[nextIndex]);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(30, 30, 30, 0.92)',
        backdropFilter: 'blur(8px)',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      {/* Lightbox Container - Off-White (#F7F5F0) / Charcoal (#353535) theme */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#F7F5F0', /* Off-White Modal Container */
          border: '2px solid #353535', /* Charcoal Border */
          borderRadius: '8px',
          maxWidth: '960px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            backgroundColor: '#353535', /* Charcoal Header */
            color: '#F7F5F0', /* Off-White Text */
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sparkles size={18} color="#B57F50" />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#F7F5F0'
              }}
            >
              Ambience Showcase ({currentIndex + 1} of {allImages.length})
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#F7F5F0',
              cursor: 'pointer',
              padding: '0.3rem'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Main Viewport */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#353535',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: '65vh',
            minHeight: '350px'
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{
              maxWidth: '100%',
              maxHeight: '65vh',
              objectFit: 'contain',
              display: 'block'
            }}
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#84966B', /* Olive Green Button */
              color: '#F7F5F0',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.25s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#B57F50')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#84966B')}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#84966B', /* Olive Green Button */
              color: '#F7F5F0',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.25s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#B57F50')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#84966B')}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Footer Details in Off-White (#F7F5F0) background */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            backgroundColor: '#F7F5F0',
            color: '#353535',
            borderTop: '1px solid #A9A9A9'
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.75rem',
              color: '#B57F50', /* Copper Feature Headline */
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}
          >
            {image.subtitle}
          </span>
          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.5rem',
              fontWeight: '700',
              margin: '0.2rem 0 0.4rem 0',
              color: '#353535'
            }}
          >
            {image.title}
          </h4>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.88rem', color: '#353535', opacity: 0.8, margin: 0 }}>
            {image.alt} &bull; Filename: <code>{image.src.replace('/', '')}</code>
          </p>
        </div>
      </div>
    </div>
  );
}
