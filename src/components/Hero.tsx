import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Sun, EyeOff, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOpenEstimator }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed kicker with dot separators */}
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-4 tracking-wide uppercase">
              <span>Architectural & Automotive Specialists</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Proprietor: Md Tarik Shaikh</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Supply & Installation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance mb-6">
              Sun Control Film, Car Tinting & Frosted Glass Solutions
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Specialized window film solutions for commercial offices, residential windows, and automotive glass. We supply and install Sun Control, Frosted Privacy, Reflective Solar, and Decorative films with on-site measurement and bubble-free precision.
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href={BUSINESS_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp (+91 7276600033)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Now ({BUSINESS_INFO.phone})</span>
              </a>

              <button
                onClick={onExploreProducts}
                className="px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Browse Films</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Metadata Strip */}
            <div className="pt-6 border-t border-slate-800/70 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>On-Site Measurement & Samples</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Glare & Solar Radiation Control</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 underline underline-offset-2 transition-colors"
                >
                  Find Us on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Carrier */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/70 shadow-2xl group">
              <img
                src="/src/assets/images/hero_glass_architecture_1792940888119.jpg"
                alt="Commercial architectural glass treated with sun control film"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070C18] via-[#070C18]/30 to-transparent" />

              {/* Highlighting Card Overlaid on Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 shadow-lg">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-white">Architectural Glass Film</span>
                  <span className="text-cyan-400 font-mono font-medium">Sun Control 70</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-800/80">
                  <div>
                    <div className="text-slate-400 text-[10px]">Glare Control</div>
                    <div className="text-xs font-bold text-white font-mono">Balanced</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">UV Layer</div>
                    <div className="text-xs font-bold text-cyan-400 font-mono">Multi-Ply</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">Finish</div>
                    <div className="text-xs font-bold text-emerald-400 font-mono">Optically Clear</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Standards Strip in full-width row below */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Solar Control
            </div>
            <div className="text-xs text-slate-400 mt-1">Filters harsh direct sun glare</div>
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold text-cyan-400 tracking-tight">
              Frosted Privacy
            </div>
            <div className="text-xs text-slate-400 mt-1">Office cabins & conference rooms</div>
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Automotive Tint
            </div>
            <div className="text-xs text-slate-400 mt-1">Clean bay precision installation</div>
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
              On-Site Samples
            </div>
            <div className="text-xs text-slate-400 mt-1">Live inspection on your glass</div>
          </div>
        </div>
      </div>
    </section>
  );
};
