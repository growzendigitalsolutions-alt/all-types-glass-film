import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ShoppingBag, ArrowUp, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface FloatingActionsProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ cartCount, onOpenCart }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-all shadow-lg cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Google Maps Location Button */}
      <a
        href={BUSINESS_INFO.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Google Maps Location"
        className="pointer-events-auto flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs shadow-lg transition-all cursor-pointer"
      >
        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
        <span className="hidden sm:inline">Google Maps</span>
      </a>

      {/* Floating Cart Trigger if items exist */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          aria-label="View Enquiry Cart"
          className="pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/95 text-white border border-cyan-500/50 hover:bg-slate-800 transition-all shadow-xl cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold hidden sm:inline">Enquiry Cart</span>
          <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center">
            {cartCount}
          </span>
        </button>
      )}

      {/* Floating WhatsApp Action Button explicitly linked to https://wa.me/917276600033 */}
      <a
        href="https://wa.me/917276600033"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Md Tarik Shaikh on WhatsApp"
        className="pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-all hover:scale-105 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp (+91 7276600033)</span>
      </a>

      {/* Floating Mobile Call Button */}
      <a
        href="tel:+917276600033"
        aria-label="Call Now"
        className="pointer-events-auto sm:hidden flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-cyan-400 font-bold text-xs border border-slate-700 shadow-lg cursor-pointer"
      >
        <Phone className="w-4 h-4 text-cyan-400" />
        <span>Call Now</span>
      </a>
    </div>
  );
};
