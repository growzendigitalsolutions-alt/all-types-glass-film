import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ShoppingBag, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Simulator', href: '#simulator' },
    { name: 'Estimator', href: '#calculator' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070C18]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-[#070C18]/60 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-extrabold text-sm shadow-md shadow-cyan-500/20">
              AT
            </span>
            <span className="font-extrabold tracking-tight">All Types Glass Film</span>
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-slate-300"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary actions (Cart & Direct Call/WhatsApp) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Enquiry Cart Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="View Enquiry Cart"
              className="relative p-2 sm:px-3 sm:py-2 text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Enquiry Cart</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct Call Now Button */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 border border-slate-700 hover:border-cyan-500/50 rounded-lg hover:bg-slate-800 transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Quick Quote */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
                'Hello Md Tarik Shaikh, I would like to inquire about glass film installation.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all whitespace-nowrap shrink-0 shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 lg:hidden text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-[#0B132B]/95 rounded-xl px-4 shadow-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 px-3 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-md transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-800 flex flex-col gap-2 mt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 rounded-lg"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call Md Tarik Shaikh ({BUSINESS_INFO.phone})</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
