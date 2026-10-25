import React from 'react';
import { X, Check, ShieldCheck, Sun, Layers, MessageCircle, Plus, Eye, Award } from 'lucide-react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const handleWhatsAppEnquiry = () => {
    const msg = `Hello Md Tarik Shaikh, I want detailed technical information and quotation for ${product.name} (${product.categoryLabel}). Please share details.`;
    const url = `https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#0B132B] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="relative h-48 sm:h-60 overflow-hidden bg-slate-950 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/50 to-transparent" />

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              {product.categoryLabel}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
          {/* Tagline & Description */}
          <div>
            <p className="text-base text-cyan-300 font-medium mb-2">{product.tagline}</p>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {product.description}
            </p>
          </div>

          {/* Technical Specs Grid */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Certified Technical Metrics</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[11px] text-slate-400">VLT (Clarity)</div>
                <div className="text-base font-mono font-bold text-white mt-0.5">{product.vlt}</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[11px] text-slate-400">Solar Heat Cut</div>
                <div className="text-base font-mono font-bold text-cyan-400 mt-0.5">
                  {product.heatRejection}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[11px] text-slate-400">UV Rejection</div>
                <div className="text-base font-mono font-bold text-emerald-400 mt-0.5">
                  {product.uvProtection}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[11px] text-slate-400">Warranty</div>
                <div className="text-base font-mono font-bold text-white mt-0.5">
                  {product.warranty.split(' ')[0]}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3 pt-3 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400">Film Caliper:</span>{' '}
                <span className="text-white font-mono">{product.thickness}</span>
              </div>
              <div>
                <span className="text-slate-400">Glare Reduction:</span>{' '}
                <span className="text-white font-mono">{product.glareReduction}</span>
              </div>
              <div>
                <span className="text-slate-400">Quote:</span>{' '}
                <span className="text-emerald-400 font-bold">Free Site Measurement</span>
              </div>
            </div>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
              Key Engineering Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Spaces */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Recommended Applications
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.idealFor.map((app, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs">
            <span className="text-slate-400">Installed by: </span>
            <strong className="text-white">Md Tarik Shaikh</strong>
            <span className="text-slate-500"> ({BUSINESS_INFO.phone})</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="py-2.5 px-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Enquiry Cart</span>
            </button>

            <button
              onClick={handleWhatsAppEnquiry}
              className="py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-cyan-400" />
              <span>WhatsApp Tarik</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
