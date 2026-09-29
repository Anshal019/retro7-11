import React, { useState } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/menuData';
import { FileText, Download, Maximize2, Coffee, Sparkles, Flame, Utensils, CupSoda, Search } from 'lucide-react';
import Logo from './Logo';

export default function DigitalMenu({ onViewPdfMenu }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'Full Menu', icon: Sparkles },
    { id: 'espresso', name: 'Espresso & Coffee', icon: Coffee },
    { id: 'copper-signatures', name: '7/11 Signatures', icon: Flame },
    { id: 'pastries', name: 'Artisan Pastries', icon: Sparkles },
    { id: 'savory', name: 'Gourmet Bites', icon: Utensils },
    { id: 'teas', name: 'Teas & Infusions', icon: CupSoda }
  ];

  return (
    <section
      id="menu"
      style={{
        backgroundColor: '#160c09', /* Espresso Dark background */
        color: '#F7F5F0',
        padding: '5rem 1.5rem',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#0088e8', /* Electric Blue */
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '0.6rem'
            }}
          >
            <Sparkles size={16} color="#0088e8" />
            <span>OFFICIAL ARTISAN MENU</span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: '#F7F5F0',
              fontWeight: '700',
              margin: '0.2rem 0 0.8rem 0'
            }}
          >
            Retro 7/11 Cafe Menu (INR ₹)
          </h2>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#E6DBCF',
              fontSize: '1rem',
              maxWidth: '650px',
              margin: '0 auto',
              opacity: 0.9
            }}
          >
            View our complete artisan menu document below. All prices listed in Indian Rupees (₹).
          </p>
        </div>

        {/* Action Controls & Category Filter Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2rem',
            padding: '1rem 1.25rem',
            backgroundColor: '#221512',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    backgroundColor: isActive ? '#0088e8' : 'rgba(255, 255, 255, 0.06)',
                    color: isActive ? '#FFFFFF' : '#F7F5F0',
                    border: isActive ? '1px solid #0088e8' : '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '50px',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <IconComp size={14} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Quick PDF Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={onViewPdfMenu}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#F7F5F0',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontSize: '0.82rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Maximize2 size={15} />
              <span>Fullscreen PDF</span>
            </button>

            <a
              href="/menu.pdf"
              download="Retro_711_Cafe_Menu.pdf"
              style={{
                backgroundColor: '#0088e8',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '0.5rem 1.1rem',
                borderRadius: '4px',
                fontSize: '0.82rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 2px 10px rgba(0, 136, 232, 0.3)'
              }}
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* EMBEDDED PDF MENU SHEET DOCUMENT VIEW */}
        <div
          style={{
            backgroundColor: '#FBF9F5', /* Premium Off-white Cream Paper */
            color: '#1A1A1A',
            borderRadius: '12px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            padding: ' clamp(1.5rem, 5vw, 3.5rem)',
            border: '2px solid #221512'
          }}
        >
          {/* Menu Sheet Header */}
          <div
            style={{
              textAlign: 'center',
              borderBottom: '2px double #1A1A1A',
              paddingBottom: '2rem',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <Logo size="medium" darkBackground={false} variant="stacked" showTagline={true} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '700', color: '#0088e8' }}>
                ALL PRICES IN INR (₹)
              </span>
              <span style={{ fontSize: '0.78rem', opacity: 0.4 }}>•</span>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '700', color: '#555' }}>
                ORGANIC MICRO-LOT SELECTIONS
              </span>
              <span style={{ fontSize: '0.78rem', opacity: 0.4 }}>•</span>
              <span style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '700', color: '#555' }}>
                BAKED DAILY BEFORE DAWN
              </span>
            </div>
          </div>

          {/* PDF Menu Document Items Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem 3.5rem'
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  borderBottom: '1px dotted rgba(0, 0, 0, 0.15)',
                  paddingBottom: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem'
                }}
              >
                {/* Item Name & Price Line */}
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#1A1A1A',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {item.name}
                    </span>
                    {item.tag && (
                      <span
                        style={{
                          fontSize: '0.65rem',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '3px',
                          backgroundColor: item.tag.includes('Signature') ? 'rgba(0, 136, 232, 0.12)' : 'rgba(0,0,0,0.06)',
                          color: item.tag.includes('Signature') ? '#0088e8' : '#666',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  
                  {/* Price in INR ₹ */}
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '1.15rem',
                      fontWeight: '800',
                      color: '#0088e8',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {item.price}
                  </span>
                </div>

                {/* Item Description */}
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.86rem',
                    color: '#555555',
                    lineHeight: 1.5,
                    margin: 0
                  }}
                >
                  {item.description}
                </p>

                {/* Dietary Tags */}
                {item.dietary && (
                  <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.2rem' }}>
                    {item.dietary.map((d, i) => (
                      <span key={i} style={{ fontSize: '0.68rem', color: '#888', fontStyle: 'italic' }}>
                        #{d}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Menu Sheet Footer Note */}
          <div
            style={{
              marginTop: '3.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px stroke #1A1A1A',
              textAlign: 'center',
              fontSize: '0.8rem',
              color: '#777',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}
          >
            <p>Taxes included as applicable. Please inform your server of any dietary allergies or dietary preferences.</p>
            <p style={{ marginTop: '0.3rem', fontWeight: '600', color: '#1A1A1A' }}>
              Retro 7/11 Cafe • A Premium Coffee Cafe • Open Daily 7:00 AM - 11:00 PM
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
