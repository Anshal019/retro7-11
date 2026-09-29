import React from 'react';
import { MapPin, Clock, Phone, Mail, Compass, ExternalLink, Coffee, Globe, Share2 } from 'lucide-react';
import Logo from './Logo';

export default function LocationFooter() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153167!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus";
  const locationDirectUrl = "https://maps.google.com/?q=Retro+711+Cafe+Artisan+Way";

  return (
    <div>
      {/* Location Section */}
      <section
        style={{
          backgroundColor: '#E6DBCF', /* Oat Beige */
          padding: '5rem 1.5rem',
          borderTop: '1px solid #353535'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            {/* Location Info */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#B57F50', /* Copper Feature Headline */
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}
              >
                <MapPin size={16} color="#B57F50" />
                <span>FIND OUR SANCTUARY</span>
              </div>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  color: '#353535',
                  fontWeight: '700',
                  marginBottom: '1.25rem'
                }}
              >
                Location &amp; Visiting Hours
              </h2>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: '#353535',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  marginBottom: '2rem'
                }}
              >
                Situated in the heart of the cultural district, Retro 7/11 Cafe offers an architectural escape with dedicated parking, outdoor terrace seating, and complimentary high-speed fiber internet.
              </p>

              {/* Operating Hours Box */}
              <div
                style={{
                  backgroundColor: '#353535', /* Charcoal Box */
                  color: '#F7F5F0', /* Off-White Text */
                  borderRadius: '6px',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  border: '1px solid #353535'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#B57F50', fontWeight: '700', marginBottom: '0.8rem' }}>
                  <Clock size={18} color="#B57F50" />
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Operating Hours</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(169, 169, 169, 0.3)', paddingBottom: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span>Monday – Friday</span>
                  <span style={{ fontWeight: '600', color: '#B57F50' }}>7:00 AM – 8:00 PM</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span>Saturday – Sunday</span>
                  <span style={{ fontWeight: '600', color: '#B57F50' }}>8:00 AM – 9:00 PM</span>
                </div>
              </div>

              {/* Direct Maps Link Button */}
              <a
                href={locationDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  backgroundColor: '#84966B',
                  color: '#F7F5F0',
                  fontSize: '0.85rem'
                }}
              >
                <ExternalLink size={16} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Embed Map Container with subtle Concrete-color (#A9A9A9) border */}
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '4px solid #A9A9A9', /* Subtle Concrete-color Border as specified */
                boxShadow: '0 12px 35px rgba(53, 53, 53, 0.15)',
                height: '380px',
                position: 'relative'
              }}
            >
              <iframe
                title="Cafe Embiance Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: '#353535', /* Footer Background: Charcoal */
          color: '#F7F5F0', /* Footer Text: Off-White */
          padding: '4.5rem 1.5rem 2rem 1.5rem',
          borderTop: '2px solid #B57F50' /* Subtle Copper accent line top border */
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '3rem',
              marginBottom: '3.5rem'
            }}
          >
            {/* Column 1: Simplified Copper & Off-White Logo + Bio */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1.5px solid #B57F50', /* Copper Logo Border */
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'transparent'
                  }}
                >
                  <Coffee size={20} color="#B57F50" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.45rem',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      color: '#F7F5F0' /* Off-White Logo Text */
                    }}
                  >
                    CAFE EMBIANCE
                  </span>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      color: '#B57F50', /* Copper Secondary Logo Accent */
                      textTransform: 'uppercase'
                    }}
                  >
                    ART &amp; FLAVOR MEET
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: '#F7F5F0', /* Off-White Footer Text */
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  opacity: 0.8,
                  marginBottom: '1.5rem'
                }}
              >
                A premium, sophisticated cafe experience combining concrete architectural aesthetics with hand-crafted organic coffee extractions.
              </p>

              {/* Social Media Links */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(247, 245, 240, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B57F50',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B57F50'; e.currentTarget.style.color = '#F7F5F0'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(247, 245, 240, 0.1)'; e.currentTarget.style.color = '#B57F50'; }}
                >
                  <Globe size={18} />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(247, 245, 240, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B57F50',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B57F50'; e.currentTarget.style.color = '#F7F5F0'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(247, 245, 240, 0.1)'; e.currentTarget.style.color = '#B57F50'; }}
                >
                  <Share2 size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Sitemap Navigation */}
            <div>
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.25rem',
                  color: '#B57F50', /* Copper Header */
                  fontWeight: '700',
                  marginBottom: '1.2rem',
                  letterSpacing: '0.05em'
                }}
              >
                Navigation &amp; Links
              </h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {['Home', 'Copper', 'About', 'Menu', 'Ambience', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      style={{
                        color: '#F7F5F0',
                        fontSize: '0.88rem',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        opacity: 0.85
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#B57F50'; e.currentTarget.style.opacity = '1'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#F7F5F0'; e.currentTarget.style.opacity = '0.85'; }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Hours Summary */}
            <div>
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.25rem',
                  color: '#B57F50',
                  fontWeight: '700',
                  marginBottom: '1.2rem',
                  letterSpacing: '0.05em'
                }}
              >
                Hours of Operation
              </h4>

              <div style={{ fontSize: '0.88rem', color: '#F7F5F0', opacity: 0.9, lineHeight: 1.6 }}>
                <p><strong>Mon – Fri:</strong> 7:00 AM – 8:00 PM</p>
                <p><strong>Sat – Sun:</strong> 8:00 AM – 9:00 PM</p>
                <p style={{ marginTop: '0.8rem', color: '#B57F50' }}>* Kitchen closes 45 mins prior to close.</p>
              </div>
            </div>

            {/* Column 4: Contact Quick Info */}
            <div>
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.25rem',
                  color: '#B57F50',
                  fontWeight: '700',
                  marginBottom: '1.2rem',
                  letterSpacing: '0.05em'
                }}
              >
                Sanctuary Address
              </h4>

              <div style={{ fontSize: '0.88rem', color: '#F7F5F0', opacity: 0.9, lineHeight: 1.6 }}>
                <p>711 Concrete &amp; Artisan Blvd</p>
                <p>Suite 100, Creative Quarter</p>
                <p style={{ marginTop: '0.5rem' }}>
                  <a href={locationDirectUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#B57F50', textDecoration: 'underline' }}>
                    View Interactive Map
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright bar */}
          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid rgba(169, 169, 169, 0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.78rem',
              color: '#F7F5F0',
              opacity: 0.75
            }}
          >
            <span>&copy; {new Date().getFullYear()} Cafe Embiance. All rights reserved.</span>
            <span>Designed for Premium, Sophisticated &amp; Natural Aesthetics.</span>
          </div>

        </div>
      </footer>
    </div>
  );
}
