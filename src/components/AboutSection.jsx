import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Layers } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#353535', /* Charcoal Background */
        color: '#F7F5F0', /* Off-White Text */
        padding: '5.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Accent Subtle Texture */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(181, 127, 80, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Story Text */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#B57F50', /* Copper Headline */
                fontSize: '0.85rem',
                fontWeight: '700',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}
            >
              <Sparkles size={16} color="#0088e8" />
              <span>THE RETRO 7/11 PHILOSOPHY</span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                color: '#F7F5F0', /* Off-White Title */
                fontWeight: '700',
                lineHeight: 1.15,
                marginBottom: '1.5rem'
              }}
            >
              Where Authentic Craft Meets Rich Brew Perfection
            </h2>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: '#E6DBCF', /* Oat Beige Call-out Text */
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: '1.25rem'
              }}
            >
              Retro 7/11 Cafe was founded on a singular vision: to create a premium coffee sanctuary where rich micro-lot roasts, authentic craftsmanship, and communal warmth converge.
            </p>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: '#A9A9A9', /* Concrete Secondary Text */
                fontSize: '0.95rem',
                lineHeight: 1.75,
                marginBottom: '2rem'
              }}
            >
              Every cup is brewed with precision using custom copper heat-exchanger espresso hardware. Our pastries are baked before dawn using organic French butter, and our space is sculpted to celebrate silence, texture, and communal warmth.
            </p>

            {/* Feature Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div
                style={{
                  borderLeft: '2px solid #B57F50',
                  paddingLeft: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B57F50', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                  <Layers size={16} color="#B57F50" />
                  <span>Brutalist Texture</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#A9A9A9', margin: 0 }}>
                  Poured concrete counters &amp; tactile raw Oat Beige interiors.
                </p>
              </div>

              <div
                style={{
                  borderLeft: '2px solid #84966B',
                  paddingLeft: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#84966B', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                  <ShieldCheck size={16} color="#84966B" />
                  <span>Artisanal Mastery</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#A9A9A9', margin: 0 }}>
                  Single-origin roasts, small-batch viennoiserie, zero compromise.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copper Specialty Highlight Card */}
          <div id="copper-specialty">
            <div
              style={{
                backgroundColor: '#A9A9A9', /* Concrete Card Background */
                border: '2px solid #B57F50', /* Copper Feature Border */
                borderRadius: '12px',
                padding: '2.5rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '25px',
                  backgroundColor: '#B57F50',
                  color: '#F7F5F0',
                  fontSize: '0.75rem',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.3rem 1rem',
                  borderRadius: '20px'
                }}
              >
                COPPER EDITION
              </div>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  color: '#353535', /* Charcoal Title */
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}
              >
                The Signature Copper Pour-Over
              </h3>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: '#353535',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}
              >
                Experience our exclusive pour-over extraction served in hand-hammered solid copper carafes. Retaining optimal thermal stability to unlock notes of wild honey, roasted hazelnut, and dark cacao.
              </p>

              <div
                style={{
                  backgroundColor: '#F7F5F0',
                  padding: '1.25rem',
                  borderRadius: '6px',
                  border: '1px solid #353535',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#353535', fontWeight: '700', textTransform: 'uppercase' }}>Daily Roast Batch</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: '#B57F50', fontWeight: '700' }}>Geisha Panama Reserve</div>
                </div>
                <a
                  href="#menu"
                  className="btn-primary"
                  style={{
                    backgroundColor: '#84966B',
                    fontSize: '0.8rem',
                    padding: '0.5rem 1rem'
                  }}
                >
                  Taste Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
