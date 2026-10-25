import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, MapPin, ChevronDown, ChevronUp, UserCheck, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { FAQS } from '../data/galleryAndVideos';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Sun Control Film',
    areaSqFt: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number so we can respond.');
      return;
    }

    const text = `*NEW WEBSITE GLASS FILM ENQUIRY*\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Category Required:* ${formData.service}\n` +
      `*Approx Area/Vehicle:* ${formData.areaSqFt || 'To be measured'}\n` +
      `*Site Details/Message:* ${formData.message || 'Please share product details and schedule on-site measurement.'}\n\n` +
      `Md Tarik Shaikh, please check and share quotation.`;

    const url = `https://wa.me/917276600033?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }

    const subject = encodeURIComponent(`Glass Film Enquiry - ${formData.name}`);
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0ACategory: ${formData.service}%0D%0AEstimated Area: ${formData.areaSqFt}%0D%0ADetails: ${formData.message}`;
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
            <span>Direct Communication With Owner</span>
            <span aria-hidden="true">·</span>
            <span>All Types Glass Film</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact & On-Site Measurement
          </h2>
        </div>
        <p className="text-sm text-slate-300 max-w-md leading-relaxed">
          Reach proprietor <strong className="text-white">Md Tarik Shaikh</strong> directly via WhatsApp or phone call for rapid quotations, physical sample inspections, and scheduling.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Owner Card & FAQs */}
        <div className="lg:col-span-5 space-y-6">
          {/* Owner Profile Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0B132B] border border-cyan-500/30 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-cyan-500/30">
                TS
              </div>
              <div>
                <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                  Proprietor & Master Installer
                </div>
                <h3 className="text-xl font-extrabold text-white">Md Tarik Shaikh</h3>
                <div className="text-xs text-slate-400 mt-0.5">
                  All Types Glass Film | Glass Tinting & Film Specialist
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              "We provide on-site measurements, sample testing, and precision clean installation for all your residential, commercial office, and automotive glass needs."
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Call Now</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 font-mono">
                      {BUSINESS_INFO.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-cyan-400 font-medium">Call Directly →</span>
              </a>

              <a
                href="https://wa.me/917276600033"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-cyan-950/50 border border-cyan-500/40 hover:bg-cyan-900/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-[10px] text-cyan-300 uppercase">WhatsApp Inquiry</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 font-mono">
                      +91 7276600033
                    </div>
                  </div>
                </div>
                <span className="text-xs text-cyan-300 font-bold">Open Chat →</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 font-mono">
                      {BUSINESS_INFO.email}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-cyan-400 font-medium">Send Email →</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Workshop Location</div>
                    <div className="text-xs text-white group-hover:text-cyan-300">
                      Open in Google Maps
                    </div>
                  </div>
                </div>
                <span className="text-xs text-cyan-400 font-medium">Directions →</span>
              </a>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
              Common Questions & Answers
            </h4>
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-3.5 text-left text-xs font-bold text-white flex items-center justify-between gap-3 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-3.5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Contact Form with WhatsApp Forwarding */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">Send Your Site Requirement</h3>
            <p className="text-xs text-slate-400 mt-1">
              Submit your inquiry and open directly in WhatsApp to discuss quotation with Md Tarik Shaikh.
            </p>
          </div>

          {formSubmitted && (
            <div className="p-4 mb-6 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="text-white block">Inquiry Dispatched!</strong>
                Your details are prepared and sent. Md Tarik Shaikh will respond promptly.
              </div>
            </div>
          )}

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Patil"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 7276600033"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. yourname@domain.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Film Category Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="Sun Control Film">Sun Control Film</option>
                  <option value="Car Tinting Film">Car Tinting Film</option>
                  <option value="Frosted Glass Film">Frosted Glass Film</option>
                  <option value="Privacy Film">Privacy Film</option>
                  <option value="Reflective Film">Reflective Film</option>
                  <option value="Decorative Film">Decorative Film</option>
                  <option value="Safety & Security Film">Safety & Security Film</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Approximate Glass Dimensions or Vehicle Model
              </label>
              <input
                type="text"
                value={formData.areaSqFt}
                onChange={(e) => setFormData({ ...formData, areaSqFt: e.target.value })}
                placeholder="e.g. 4 Balcony Sliders (~120 sq ft) OR Sedan Car Tinting"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Project Address & Requirements
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your site location, daylight condition, or frosted design preference..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleSubmitWhatsApp}
                className="flex-1 py-3 px-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Submit Enquiry via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleSubmitEmail}
                className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Submit via Email</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
