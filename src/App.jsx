import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import DigitalMenu from './components/DigitalMenu';
import AmbienceGallery from './components/AmbienceGallery';
import ContactBooking from './components/ContactBooking';
import LocationFooter from './components/LocationFooter';
import OrderDrawer from './components/OrderDrawer';
import MenuPdfModal from './components/MenuPdfModal';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 201,
      name: 'The Copper Flame Latte',
      price: '$7.25',
      quantity: 1
    }
  ]);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [allGalleryImages, setAllGalleryImages] = useState([]);

  // Cart operations
  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCartItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: newQty } : i)));
  };

  const handleRemoveCartItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Gallery Lightbox operations
  const handleOpenLightbox = (img, imagesList) => {
    setLightboxImage(img);
    setAllGalleryImages(imagesList);
  };

  return (
    <div style={{ backgroundColor: '#E6DBCF', minHeight: '100vh' }}>
      {/* 1. Header (Navbar) */}
      <Navbar onOpenCart={() => setIsCartOpen(true)} />

      {/* 2. Hero Section (Home) */}
      <Hero onExploreClick={() => {}} />

      {/* Philosophy & Copper Speciality Spotlight */}
      <AboutSection />

      {/* 3. Digital Menu Section */}
      <DigitalMenu
        onAddToCart={handleAddToCart}
        onViewPdfMenu={() => setIsPdfModalOpen(true)}
      />

      {/* 4. Ambience Gallery */}
      <AmbienceGallery onImageClick={handleOpenLightbox} />

      {/* 5. Contact & Booking */}
      <ContactBooking />

      {/* 6. Location & Footer */}
      <LocationFooter />

      {/* 7. Global Call-to-Action & Interactive Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(!isCartOpen)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Menu PDF Modal Viewer */}
      <MenuPdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Ambience Lightbox Modal */}
      <LightboxModal
        image={lightboxImage}
        allImages={allGalleryImages}
        onClose={() => setLightboxImage(null)}
        onNavigate={(newImg) => setLightboxImage(newImg)}
      />
    </div>
  );
}
