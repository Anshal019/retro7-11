import React from 'react';
import { X, Download, Printer, ExternalLink, FileText, Sparkles, Coffee } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';

export default function MenuPdfModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(30, 30, 30, 0.85)',
        backdropFilter: 'blur(5px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
    >
      <div
        style={{
          backgroundColor: '#F7F5F0', /* Off-White Modal Background */
          border: '2px solid #353535', /* Charcoal Border */
          borderRadius: '10px',
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            backgroundColor: '#353535', /* Charcoal Header */
            color: '#F7F5F0',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileText size={22} color="#B57F50" />
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', margin: 0 }}>
                RETRO 7/11 CAFE - OFFICIAL ARTISAN MENU
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#B57F50', letterSpacing: '0.1em' }}>
                DOCUMENT ASSET: MENU.PDF
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="/menu.pdf"
              download="Retro_711_Cafe_Menu.pdf"
              style={{
                backgroundColor: '#84966B', /* Olive Green */
                color: '#F7F5F0',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: '600'
              }}
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

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
        </div>

        {/* Printable PDF Printable Sheet Preview */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '2.5rem', backgroundColor: '#E6DBCF' }}>
          <div
            style={{
              backgroundColor: '#F7F5F0', /* Off-White Sheet */
              border: '1px solid #353535',
              padding: '3rem',
              borderRadius: '6px',
              color: '#353535',
              boxShadow: '0 4px 20px rgba(53, 53, 53, 0.1)'
            }}
          >
            {/* Sheet Title */}
            <div style={{ textAlign: 'center', borderBottom: '2px solid #353535', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', color: '#B57F50' }}>
                <Coffee size={24} />
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: '700', color: '#353535' }}>
                  RETRO 7/11 CAFE
                </span>
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#B57F50', marginTop: '0.3rem' }}>
                A PREMIUM COFFEE CAFE &bull; SEASONAL CRAFT MENU
              </p>
            </div>

            {/* Menu Sections Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
              <div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: '#B57F50', borderBottom: '1px solid #353535', paddingBottom: '0.3rem', marginBottom: '1rem' }}>
                  ESPRESSO &amp; COPPER BREWS
                </h4>
                {MENU_ITEMS.filter(i => i.category === 'espresso' || i.category === 'copper-signatures').slice(0, 5).map(item => (
                  <div key={item.id} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '0.95rem' }}>
                      <span>{item.name}</span>
                      <span style={{ color: '#0088e8', fontWeight: '800' }}>{item.price}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#353535', opacity: 0.8, margin: '0.2rem 0 0 0' }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: '#0088e8', borderBottom: '1px solid #353535', paddingBottom: '0.3rem', marginBottom: '1rem' }}>
                  ARTISAN BAKERY &amp; SAVORY
                </h4>
                {MENU_ITEMS.filter(i => i.category === 'pastries' || i.category === 'savory').slice(0, 5).map(item => (
                  <div key={item.id} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '0.95rem' }}>
                      <span>{item.name}</span>
                      <span style={{ color: '#0088e8', fontWeight: '800' }}>{item.price}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#353535', opacity: 0.8, margin: '0.2rem 0 0 0' }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sheet Footer */}
            <div style={{ textAlign: 'center', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #353535', fontSize: '0.78rem', color: '#353535' }}>
              <span>Retro 7/11 Cafe • All Prices in INR (₹) • Open Mon-Sun 7am-11pm</span>
            </div>
          </div>
        </div>

        {/* Footer controls */}
        <div style={{ backgroundColor: '#353535', color: '#F7F5F0', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: '#A9A9A9' }}>Asset filename: menu.pdf</span>
          <button
            onClick={() => window.print()}
            style={{
              backgroundColor: 'transparent',
              color: '#F7F5F0',
              border: '1px solid #A9A9A9',
              padding: '0.4rem 1rem',
              borderRadius: '4px',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Printer size={15} />
            <span>Print Document</span>
          </button>
        </div>

      </div>
    </div>
  );
}
