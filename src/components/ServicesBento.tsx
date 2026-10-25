import React from 'react';
import { ArrowUpRight, Flame, Shield, Car, Building2, Sparkles, Lock, SunMedium } from 'lucide-react';
import { SERVICE_CATEGORIES, BUSINESS_INFO } from '../data/products';

interface ServicesBentoProps {
  onCategorySelect: (categoryId: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onCategorySelect }) => {
  return (
    <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
            <span>Specialized Glass Film Treatments</span>
            <span aria-hidden="true">·</span>
            <span>Residential, Commercial & Automotive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complete Glass Film Services
          </h2>
        </div>
        <p className="text-sm text-slate-300 max-w-md leading-relaxed">
          Custom on-site glass measurement, precision plotter cutting, and clean installation managed directly by <strong className="text-white">Md Tarik Shaikh</strong>.
        </p>
      </div>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Sun Control (Spans 2 columns on lg) */}
        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 p-6 sm:p-8 flex flex-col justify-between group hover:border-slate-700 transition-all shadow-xl">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 group-hover:opacity-40 transition-opacity pointer-events-none">
            <img
              src="/src/assets/images/hero_glass_architecture_1792940888119.jpg"
              alt="Sun Control Film"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-2">
              <Flame className="w-4 h-4 text-cyan-400" />
              <span>01. Sun Control Architectural Film</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Solar Radiation & Glare Reduction
            </h3>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed mb-6">
              Filters direct solar radiation in residential high-rises, west-facing balconies, and office facades. Softens blinding glare on display monitors and helps protect interior furniture from direct UV exposure.
            </p>

            <div className="flex flex-wrap gap-2 text-xs text-slate-300 mb-6">
              <span className="px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700/60">
                Nano-Ceramic 70% VLT
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700/60">
                High Clarity Daylight
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700/60">
                UV Filtration Layer
              </span>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Free On-Site Inspection & Samples</span>
            <button
              onClick={() => onCategorySelect('sun-control')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>Explore Sun Control Range</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 2: Car Glass Tinting */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 p-6 flex flex-col justify-between group hover:border-slate-700 transition-all shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-2">
              <Car className="w-4 h-4 text-cyan-400" />
              <span>02. Automotive Tint</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Car Tinting Film
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Automotive window tinting installed in a clean workshop bay. Non-conductive formulation ensuring zero interference with GPS, cellular data, and Fastag toll tags.
            </p>
            <div className="text-xs font-mono text-cyan-300/90 mb-6 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              Micro-edge tucking · Clean contoured finish
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Sedans, SUVs & Commercial</span>
            <button
              onClick={() => onCategorySelect('car-tinting')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>View Packages</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 3: Frosted Glass Film */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 p-6 flex flex-col justify-between group hover:border-slate-700 transition-all shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>03. Corporate Privacy</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Frosted Glass Film
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Satin dusted frosted finish, horizontal privacy stripes, and precision plotter-cut company logos for corporate conference rooms, cabins, and clinics.
            </p>
            <div className="text-xs font-mono text-cyan-300/90 mb-6 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              Translucent Daylight · Visual Privacy
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Custom CAD Plotting</span>
            <button
              onClick={() => onCategorySelect('frosted')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>Explore Frosted</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 4: Reflective Solar Film */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 p-6 flex flex-col justify-between group hover:border-slate-700 transition-all shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-2">
              <SunMedium className="w-4 h-4 text-cyan-400" />
              <span>04. Reflective Solar</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Reflective Solar Film
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Sputtered metallic reflective solar film that bounces away high-intensity solar rays on west-facing commercial facades, warehouses, and skylights.
            </p>
            <div className="text-xs font-mono text-cyan-300/90 mb-6 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              Silver Mirror Exterior · Glare Shield
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">High Reflective Shield</span>
            <button
              onClick={() => onCategorySelect('reflective')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>View Reflective Film</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 5: One-Way Privacy Film */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 p-6 flex flex-col justify-between group hover:border-slate-700 transition-all shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>05. Daytime Privacy</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Privacy Film
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Preserve your outdoor views without heavy curtains. Outsiders see an opaque reflective sheen during the day while you enjoy unobstructed daylight.
            </p>
            <div className="text-xs font-mono text-cyan-300/90 mb-6 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              Ground-floor windows · Balcony glass
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Daytime Visibility Shield</span>
            <button
              onClick={() => onCategorySelect('privacy')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>View Privacy Range</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 6: Decorative & Designer Film */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 p-6 flex flex-col justify-between group hover:border-slate-700 transition-all shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>06. Interior Styling</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Decorative & Designer Film
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Textured, reeded, fluted, and artistic films that transform ordinary float glass into upscale designer glass panels without replacement costs.
            </p>
            <div className="text-xs font-mono text-cyan-300/90 mb-6 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              Interior doors · Partitions · Showrooms
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Embossed Architectural Textures</span>
            <button
              onClick={() => onCategorySelect('decorative')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>Explore Designs</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
