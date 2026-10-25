import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesBento } from './components/ServicesBento';
import { ProductCatalogue } from './components/ProductCatalogue';
import { BeforeAfterSimulator } from './components/BeforeAfterSimulator';
import { Calculator } from './components/Calculator';
import { EnquiryCartDrawer } from './components/EnquiryCartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ImageGallery } from './components/ImageGallery';
import { VideoSection } from './components/VideoSection';
import { GoogleMapsLocation } from './components/GoogleMapsLocation';
import { ContactSection } from './components/ContactSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { CartItem, Product } from './types';
import { PRODUCTS, BUSINESS_INFO } from './data/products';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (product: Product, sqFt: number = 100) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, sqFt: (item.sqFt || 100) + sqFt }
            : item
        );
      }
      return [...prev, { product, sqFt }];
    });
    showToast(`Added "${product.name}" to Enquiry Cart!`);
  };

  const handleAddCustomEstimateToCart = (product: Product, sqFt: number, note: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, sqFt, notes: note }
            : item
        );
      }
      return [...prev, { product, sqFt, notes: note }];
    });
    showToast(`Estimate added to Enquiry Cart!`);
    setIsCartOpen(true);
  };

  const handleUpdateSqFt = (productId: string, sqFt: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, sqFt } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart.');
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Enquiry Cart cleared.');
  };

  const handleCategorySelectFromBento = (catId: string) => {
    setSelectedCategory(catId);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEstimator = () => {
    const el = document.getElementById('calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070C18] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 border border-cyan-500/50 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Navigation */}
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProducts={handleExploreProducts}
          onOpenEstimator={handleOpenEstimator}
        />

        {/* About Us Section */}
        <AboutUs />

        {/* Services Bento Grid */}
        <ServicesBento onCategorySelect={handleCategorySelectFromBento} />

        {/* Product Catalogue with Search & Category Filters */}
        <ProductCatalogue
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onViewDetails={(product) => setDetailProduct(product)}
        />

        {/* Interactive Clear vs Film Simulator */}
        <BeforeAfterSimulator
          onSelectFilmForQuote={(product) => {
            handleAddToCart(product, 100);
            setIsCartOpen(true);
          }}
        />

        {/* Area & Requirement Estimator */}
        <Calculator onAddCustomEstimateToCart={handleAddCustomEstimateToCart} />

        {/* Image Gallery */}
        <ImageGallery />

        {/* Video Demonstrations */}
        <VideoSection />

        {/* Google Maps Location */}
        <GoogleMapsLocation />

        {/* Contact & On-Site Measurement Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Controls */}
      <FloatingActions
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Enquiry Cart Slide-over Drawer */}
      <EnquiryCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateSqFt={handleUpdateSqFt}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product In-Depth Spec Modal */}
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
