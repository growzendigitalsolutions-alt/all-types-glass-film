import React from 'react';
import { Shield, Sparkles, MapPin, Phone, MessageCircle, CheckCircle, Layers, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';
import { WORK_STANDARDS } from '../data/galleryAndVideos';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0B132B]/60 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Authentic Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
                <span>About All Types Glass Film</span>
                <span aria-hidden="true">·</span>
                <span>Owner: Md Tarik Shaikh</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Dedicated Craftsmanship in Architectural & Automotive Glass Films
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              At <strong className="text-white font-semibold">{BUSINESS_INFO.name}</strong>, we specialize in high-performance glass surface enhancement. Owned and led by <strong className="text-white font-semibold">Md Tarik Shaikh</strong>, our team provides on-site glass measurements, custom precision film cutting, and clean, bubble-free installations for commercial offices, residential homes, and automotive vehicles.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Whether you need to reduce solar glare on west-facing office windows, introduce executive privacy to corporate conference cabins with frosted glass film, or safeguard your vehicle interior with automotive window tint, we provide tailored, reliable solutions.
            </p>

            {/* Core Work Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {WORK_STANDARDS.map((standard, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 mb-1.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{standard.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Contact Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat with Md Tarik Shaikh</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>View Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              <img
                src="/src/assets/images/corporate_glass_stripes_1792941609499.jpg"
                alt="All Types Glass Film architectural installation"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80">
                <div className="text-xs font-bold text-white mb-1">
                  On-Site Measurement & Consultation
                </div>
                <div className="text-xs text-slate-300">
                  Directly managed by proprietor <strong className="text-cyan-400">Md Tarik Shaikh</strong>. Physical film swatch books available for testing on your actual glass.
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Pune, Mumbai & Surrounding Areas</span>
                  <span className="text-cyan-400 font-medium">Monday – Sunday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
