import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function OrderDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [pickupTime, setPickupTime] = useState('ASAP (15 mins)');
  const [customerName, setCustomerName] = useState('');

  const subtotal = cartItems.reduce((acc, item) => {
    const numPrice = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
    return acc + numPrice * item.quantity;
  }, 0);

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setTimeout(() => {
      onClearCart();
      setOrderSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <>
      {/* Global Fixed Side-Tab Button on Right Edge (Olive Green #84966B) */}
      <button
        onClick={onClose ? undefined : null}
        className="global-side-cta"
        style={{
          position: 'fixed',
          right: 0,
          top: '42%',
          transform: 'translateY(-50%)',
          backgroundColor: '#84966B', /* Olive Green */
          color: '#F7F5F0', /* Off-White */
          border: 'none',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
          padding: '0.8rem 0.5rem',
          cursor: 'pointer',
          zIndex: 90,
          boxShadow: '-4px 4px 15px rgba(53, 53, 53, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.3s ease'
        }}
        onClick={onClose}
        aria-label="Open Order Online"
      >
        <ShoppingBag size={20} />
        <span
          style={{
            writingMode: 'vertical-rl',
            textTransform: 'uppercase',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '700',
            fontSize: '0.75rem',
            letterSpacing: '0.15em'
          }}
        >
          ORDER ONLINE ({cartItems.reduce((a, b) => a + b.quantity, 0)})
        </span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(30, 30, 30, 0.65)',
            backdropFilter: 'blur(3px)',
            zIndex: 1000,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}

      {/* Drawer Container */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '440px',
          backgroundColor: '#E6DBCF', /* Oat Beige Drawer */
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)',
          zIndex: 1001,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '2px solid #353535'
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: '#353535', /* Charcoal Header */
            color: '#F7F5F0', /* Off-White Text */
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} color="#B57F50" />
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', margin: 0 }}>
              Your Craft Order
            </h3>
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
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {orderSubmitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <CheckCircle2 size={54} color="#84966B" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: '#353535' }}>
                Order Sent to Barista Counter
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#353535', marginTop: '0.5rem' }}>
                Thank you! Your craft espresso &amp; bakery order is being prepared with artisanal care.
              </p>
              <div style={{ marginTop: '1.5rem', backgroundColor: '#F7F5F0', padding: '1rem', borderRadius: '6px', fontSize: '0.85rem' }}>
                Estimated Pickup: <strong style={{ color: '#B57F50' }}>{pickupTime}</strong>
              </div>
            </div>
          ) : cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#353535' }}>
              <ShoppingBag size={48} color="#A9A9A9" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', margin: 0 }}>
                Your Order Bag is Empty
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#353535', opacity: 0.8, marginTop: '0.5rem' }}>
                Browse our interactive craft menu to add artisanal espresso, pastries &amp; copper brews.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: '#353535', /* Charcoal card */
                    color: '#F7F5F0',
                    borderRadius: '6px',
                    padding: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid #353535'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', fontSize: '0.95rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#B57F50', fontWeight: '700', marginTop: '0.1rem' }}>
                      {item.price}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#F7F5F0',
                        borderRadius: '4px',
                        color: '#353535'
                      }}
                    >
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        style={{ border: 'none', background: 'none', padding: '0.3rem 0.5rem', cursor: 'pointer' }}
                      >
                        <Minus size={14} />
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: '700', padding: '0 0.4rem' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        style={{ border: 'none', background: 'none', padding: '0.3rem 0.5rem', cursor: 'pointer' }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      style={{ border: 'none', background: 'none', color: '#A9A9A9', cursor: 'pointer' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout Controls */}
        {cartItems.length > 0 && !orderSubmitted && (
          <div
            style={{
              backgroundColor: '#F7F5F0', /* Off-White Footer */
              borderTop: '1.5px solid #353535',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#353535' }}>
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#353535' }}>
              <span>Estimated GST (5%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.25rem',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: '700',
                color: '#353535',
                borderTop: '1px solid #A9A9A9',
                paddingTop: '0.5rem'
              }}
            >
              <span>Total Amount</span>
              <span style={{ color: '#0088e8', fontWeight: '800' }}>₹{total.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="btn-primary"
              style={{
                backgroundColor: '#84966B', /* Olive Green Button */
                color: '#F7F5F0',
                padding: '0.85rem',
                width: '100%',
                fontSize: '0.9rem'
              }}
            >
              <span>Place Order &amp; Pay at Counter</span>
              <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        .global-side-cta:hover {
          background-color: #B57F50 !important; /* Hover state switches to Copper */
          padding-right: 0.8rem !important;
        }
      `}</style>
    </>
  );
}
