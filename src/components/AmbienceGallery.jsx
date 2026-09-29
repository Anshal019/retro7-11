import React from 'react';
import { Maximize2, Camera, Sparkles } from 'lucide-react';

export default function AmbienceGallery({ onImageClick }) {
  const galleryImages = [
    {
      id: 0,
      src: '/backgroundmain.jpg',
      alt: 'Retro 7/11 Cafe Main Dining & Lounge Interior',
      title: 'Retro 7/11 Main Dining Hall',
      subtitle: 'Lime & Olive seating, warm booth lounge & custom logo wall'
    },
    {
      id: 1,
      src: '/ambience_1.jpg',
      alt: 'Artisan Latte Pour over Concrete Bar',
      title: 'Barista Craftsmanship',
      subtitle: 'Hand-hammered copper vessel pour'
    },
    {
      id: 2,
      src: '/ambience_2.jpg',
      alt: 'Fresh Bakery on Slate Concrete',
      title: 'Daily Viennoiserie',
      subtitle: 'Artisan sourdough & French butter croissant'
    },
    {
      id: 3,
      src: '/ambience_3.jpg',
      alt: 'Cozy Architectural Seating Nook',
      title: 'Architectural Lounge',
      subtitle: 'Textured concrete walls & Oat Beige seating'
    },
    {
      id: 4,
      src: '/ambience_4.jpg',
      alt: 'Custom Copper Espresso Machine',
      title: 'Copper Extraction',
      subtitle: 'Custom thermal-stable copper group heads'
    },
    {
      id: 5,
      src: '/ambience_5.jpg',
      alt: 'Minimalist Interior Ceramics Detail',
      title: 'Ceramic Tactility',
      subtitle: 'Hand-thrown concrete ceramic cups'
    }
  ];

  return (
    <section
      id="photos"
      style={{
        backgroundColor: '#E6DBCF', /* Oat Beige */
        padding: '5.5rem 1.5rem',
        borderTop: '1px solid #A9A9A9',
        borderBottom: '1px solid #A9A9A9'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#0088e8',
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}
          >
            <Camera size={16} color="#0088e8" />
            <span>ATMOSPHERIC SPACES &amp; INTERIORS</span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: '#353535', /* Charcoal Main Text */
              fontWeight: '700',
              margin: '0.2rem 0 1rem 0'
            }}
          >
            Retro 7/11 Photos
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#353535',
              fontSize: '1rem',
              maxWidth: '650px',
              margin: '0 auto',
              opacity: 0.85
            }}
          >
            Experience the tactile interplay of raw concrete surfaces, warm oat textures, and lustrous copper accents designed for quiet reflection and sensory delight.
          </p>
        </div>

        {/* 2x3 Grid Display with Concrete (#A9A9A9) dividing lines/borders */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            backgroundColor: '#A9A9A9', /* Concrete dividing lines background */
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #A9A9A9' /* Concrete Color Borders */
          }}
        >
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => onImageClick(img, galleryImages)}
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: '#353535',
                border: '1px solid #353535',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="gallery-item-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  display: 'block'
                }}
                className="gallery-img"
              />

              {/* Hover Dark Overlay with Off-White & Copper Text */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(53, 53, 53, 0.72)', /* Charcoal overlay */
                  color: '#F7F5F0', /* Off-White Text */
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  backdropFilter: 'blur(2px)'
                }}
                className="gallery-overlay"
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#B57F50', /* Copper Icon Accent */
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F7F5F0'
                  }}
                >
                  <Maximize2 size={18} />
                </div>

                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.75rem',
                    color: '#B57F50', /* Copper Feature Headline */
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem'
                  }}
                >
                  {img.subtitle}
                </span>

                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#F7F5F0', /* Off-White Text */
                    margin: 0
                  }}
                >
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .gallery-item-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-item-card:hover .gallery-img {
          transform: scale(1.06) !important;
        }
      `}</style>
    </section>
  );
}
