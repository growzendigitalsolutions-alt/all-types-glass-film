import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { BUSINESS_INFO } from '../data/products';

interface EnquiryCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateSqFt: (productId: string, sqFt: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const EnquiryCartDrawer: React.FC<EnquiryCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateSqFt,
  onRemoveItem,
  onClearCart,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [siteType, setSiteType] = useState('Office / Commercial');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  if (!isOpen) return null;

  const totalEstSqFt = items.reduce((acc, item) => acc + (item.sqFt || 100), 0);

  const generateWhatsAppMessage = () => {
    let text = `*NEW GLASS FILM ENQUIRY*\n`;
    text += `*From:* ${clientName || 'Customer'}\n`;
    if (clientPhone) text += `*Phone:* ${clientPhone}\n`;
    if (clientCity) text += `*Location:* ${clientCity}\n`;
    text += `*Property Type:* ${siteType}\n\n`;
    text += `*SELECTED FILM PRODUCTS:*\n`;

    items.forEach((item, idx) => {
      text += `${idx + 1}. *${item.product.name}*\n`;
      text += `   - Category: ${item.product.categoryLabel}\n`;
      text += `   - Quantity/Area: ${item.sqFt} ${item.product.category === 'car-tinting' ? 'Vehicle(s)' : 'sq. ft'}\n`;
      text += `   - Specifications: VLT ${item.product.vlt} · Heat Cut ${item.product.heatRejection}\n`;
      if (item.notes) text += `   - Note: ${item.notes}\n`;
    });

    text += `\n*Total Estimated Area:* ~${totalEstSqFt} sq. ft\n\n`;
    text += `Md Tarik Shaikh, please check availability and share quotation with on-site sample inspection/measurement slot.`;

    return encodeURIComponent(text);
  };

  const handleSendWhatsApp = () => {
    const text = generateWhatsAppMessage();
    const url = `https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=${text}`;
    window.open(url, '_blank');
    setSubmittedFeedback(true);
    setTimeout(() => setSubmittedFeedback(false), 4000);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Glass Film Quotation Enquiry - ${clientName || 'New Client'}`);
    const body = generateWhatsAppMessage().replaceAll('%0A', '%0D%0A');
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0B132B] border-l border-slate-800 text-white flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Enquiry Cart</span>
                <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-800">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Request custom quotation directly from Md Tarik Shaikh
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close Enquiry Cart"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 text-slate-500">
                  <X className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Your Enquiry Cart is Empty</h3>
                <p className="text-xs text-slate-400 max-w-xs mb-6">
                  Browse our Sun Control, Car Tinting, Frosted, and Privacy film catalogue and add items to request a custom quote.
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              <>
                {/* List of items */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col gap-2.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded-lg object-cover border border-slate-800 shrink-0"
                          />
                          <div>
                            <div className="text-xs font-bold text-white line-clamp-1">
                              {item.product.name}
                            </div>
                            <div className="text-[11px] text-cyan-400">
                              {item.product.categoryLabel} · {item.product.vlt} VLT
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          aria-label={`Remove ${item.product.name}`}
                          className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Area/Quantity Controller */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                        <span className="text-slate-400 text-[11px]">
                          {item.product.category === 'car-tinting' ? 'Vehicles' : 'Est. Area (sq. ft):'}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              onUpdateSqFt(
                                item.product.id,
                                Math.max(10, (item.sqFt || 100) - (item.product.category === 'car-tinting' ? 1 : 25))
                              )
                            }
                            className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-200"
                          >
                            <Minus className="w-3 h-3" />
                          </button>

                          <span className="font-mono font-bold text-white px-2">
                            {item.sqFt || 100}
                          </span>

                          <button
                            onClick={() =>
                              onUpdateSqFt(
                                item.product.id,
                                (item.sqFt || 100) + (item.product.category === 'car-tinting' ? 1 : 25)
                              )
                            }
                            className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-200"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {item.notes && (
                        <div className="text-[11px] text-cyan-300/80 bg-slate-950/60 px-2 py-1 rounded">
                          {item.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Client Details Form for Fast WhatsApp Message */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 pt-4">
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                    Your Contact Details (Optional)
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Ramesh Patil"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="e.g. 9822000000"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">City / Area</label>
                      <input
                        type="text"
                        value={clientCity}
                        onChange={(e) => setClientCity(e.target.value)}
                        placeholder="e.g. Pune, Kothrud"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Clear Cart Button */}
                <div className="flex justify-end">
                  <button
                    onClick={onClearCart}
                    className="text-xs text-slate-400 hover:text-red-400 transition-colors"
                  >
                    Clear All Items
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Footer with Checkout Actions */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-800 bg-slate-950/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Items in Enquiry:</span>
                <span className="text-sm font-bold font-mono text-cyan-300">
                  {items.length} Films (~{totalEstSqFt} sq. ft)
                </span>
              </div>

              {submittedFeedback && (
                <div className="p-2.5 bg-emerald-950/70 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Redirecting to WhatsApp with your enquiry!</span>
                </div>
              )}

              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Request Custom Quote on WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleSendEmail}
                  className="py-2 px-3 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Send via Email</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="py-2 px-3 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
