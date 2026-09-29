import React from 'react';
import { Phone, Star, Clock, Mail, MapPin, Sparkles, Coffee } from 'lucide-react';

export default function ContactBooking() {
  return (
    <section
      id="contact"
      className="bg-concrete-textured"
      style={{
        padding: '5.5rem 1.5rem',
        color: '#353535', /* Charcoal Main Text */
        borderTop: '1px solid #353535'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#0088e8',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}
          >
            <Sparkles size={16} color="#0088e8" />
            <span>VISIT & CONNECT</span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              color: '#353535',
              fontWeight: '700',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              margin: 0
            }}
          >
            Retro 7/11 Experience
          </h2>

          <div
            style={{
              width: '60px',
              height: '3px',
              backgroundColor: '#0088e8',
              margin: '1rem auto'
            }}
          />

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#555',
              fontSize: '1.05rem',
              fontWeight: '500',
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            A Sanctuary for Artisan Coffee, Cozy Seating &amp; Architectural Design.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Direct Call, Hours & Ratings */}
          <div
            style={{
              backgroundColor: '#E6DBCF', /* Oat Beige card container */
              borderRadius: '12px',
              padding: '2.5rem',
              border: '1.5px solid #353535',
              boxShadow: '0 8px 30px rgba(53, 53, 53, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.8rem',
                  color: '#353535',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}
              >
                Welcome to Retro 7/11 Cafe
              </h3>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: '#353535',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '2rem'
                }}
              >
                Experience our cozy seating ambiance featuring custom olive green armchairs, warm orange velvet lounge booths, and hand-crafted concrete framing.
              </p>

              {/* Direct Phone Contact */}
              <div
                style={{
                  backgroundColor: '#F7F5F0',
                  border: '1.5px solid #84966B',
                  borderRadius: '8px',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: '#84966B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F7F5F0',
                    flexShrink: 0
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#84966B', letterSpacing: '0.1em' }}>
                    Call Us Direct
                  </span>
                  <a
                    href="tel:+15553624262"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '1.2rem',
                      fontWeight: '800',
                      color: '#353535',
                      textDecoration: 'none'
                    }}
                  >
                    +91 (555) 711-CAFE
                  </a>
                </div>
              </div>

              {/* Location & Hours */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#353535', fontSize: '0.95rem' }}>
                  <MapPin size={20} color="#0088e8" />
                  <span>711 Artisan Boulevard, Main Cultural Hub</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#353535', fontSize: '0.95rem' }}>
                  <Clock size={20} color="#0088e8" />
                  <span>Open Daily: 7:00 AM – 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* Google Rating Box */}
            <div
              style={{
                backgroundColor: '#353535',
                borderRadius: '8px',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.3rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#0088e8" color="#0088e8" />
                  ))}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', fontWeight: '700', color: '#F7F5F0' }}>
                  Google Rating 4.9
                </div>
                <span style={{ fontSize: '0.75rem', color: '#A9A9A9' }}>480+ Verified Guest Reviews</span>
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '2.2rem', fontWeight: '900', color: '#0088e8' }}>
                4.9
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Second User Photo (Cafe Interior Wall Showcase) */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '2px solid #353535',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2)',
              minHeight: '420px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              backgroundImage: `url('/cafe_wall_interior.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Subtle Gradient Overlay for Title */}
            <div
              style={{
                background: 'linear-gradient(to top, rgba(22, 12, 9, 0.85) 0%, rgba(22, 12, 9, 0.2) 60%, transparent 100%)',
                padding: '2rem 1.75rem',
                color: '#FFFFFF'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <Coffee size={18} color="#0088e8" />
                <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0088e8' }}>
                  RESERVED LOUNGE CORNER
                </span>
              </div>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: '700', margin: 0 }}>
                Signature Wall &amp; Seating Nook
              </h4>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.88rem', opacity: 0.9, marginTop: '0.4rem', margin: 0 }}>
                Walk-ins welcomed all day. Enjoy hand-crafted coffee surrounded by custom artwork and warm lighting.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
