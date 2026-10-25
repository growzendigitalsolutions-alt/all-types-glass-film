import React, { useState } from 'react';
import { Calculator as CalcIcon, Send, MessageCircle, Info, RefreshCw, CheckCircle, Plus, ShieldCheck, Sun } from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS } from '../data/products';
import { Product } from '../types';

interface CalculatorProps {
  onAddCustomEstimateToCart: (product: Product, sqFt: number, note: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onAddCustomEstimateToCart }) => {
  const [appType, setAppType] = useState<'architectural' | 'automotive'>('architectural');

  // Architectural state
  const [widthFt, setWidthFt] = useState<number>(4);
  const [heightFt, setHeightFt] = useState<number>(6);
  const [paneCount, setPaneCount] = useState<number>(4);
  const [selectedFilmId, setSelectedFilmId] = useState<string>('nano-ceramic-sun-control');

  // Automotive state
  const [vehicleType, setVehicleType] = useState<'hatchback' | 'sedan' | 'suv' | 'luxury'>('sedan');
  const [autoFilmGrade, setAutoFilmGrade] = useState<'standard' | 'ceramic-pro'>('ceramic-pro');

  const [estimateAdded, setEstimateAdded] = useState(false);

  // Selected Film
  const currentFilm = PRODUCTS.find((p) => p.id === selectedFilmId) || PRODUCTS[0];

  // Calculation
  const totalSqFt = Math.max(1, Math.round(widthFt * heightFt * paneCount));
  const estimatedRunningFeet = Math.round(totalSqFt / 5); // based on standard 5ft architectural rolls

  // Vehicle descriptions
  const vehicleDescriptions: Record<string, { desc: string; glassCount: string }> = {
    hatchback: { desc: 'Swift, i20, Baleno, Tiago', glassCount: '6 Glass Panels (Front, Rear, 4 Windows)' },
    sedan: { desc: 'City, Verna, Ciaz, Slavia', glassCount: '6 Glass Panels + Quarter Glasses' },
    suv: { desc: 'Creta, Seltos, Harrier, Scorpio', glassCount: '8 Glass Panels (Including Rear Quarters)' },
    luxury: { desc: 'BMW, Mercedes, Audi, Fortuner', glassCount: 'Complete Panoramic / Multi-zone Glass' },
  };

  const handleSendToWhatsApp = () => {
    let msg = '';
    if (appType === 'architectural') {
      msg = `Hello Md Tarik Shaikh, I calculated an area requirement on your website for Architectural Film:
- Film Type: ${currentFilm.name}
- Dimensions: ${widthFt} ft × ${heightFt} ft
- Number of Panes: ${paneCount}
- Total Area: ~${totalSqFt} sq. ft (approx ${estimatedRunningFeet} running feet)
Please share the best quote and earliest site measurement schedule.`;
    } else {
      msg = `Hello Md Tarik Shaikh, I calculated an automotive glass tint requirement:
- Vehicle: ${vehicleType.toUpperCase()} (${vehicleDescriptions[vehicleType].desc})
- Film Grade: ${autoFilmGrade === 'ceramic-pro' ? 'Ceramic Heat Shield Pro' : 'Standard Tint'}
- Coverage: ${vehicleDescriptions[vehicleType].glassCount}
Please share quote and available installation slot.`;
    }

    const url = `https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleAddToCart = () => {
    if (appType === 'architectural') {
      onAddCustomEstimateToCart(
        currentFilm,
        totalSqFt,
        `Dimensions: ${widthFt}ft x ${heightFt}ft (${paneCount} panes, ~${totalSqFt} sq. ft)`
      );
    } else {
      const autoProduct = PRODUCTS.find((p) => p.id === 'ceramic-car-glass-tint') || currentFilm;
      onAddCustomEstimateToCart(
        autoProduct,
        1,
        `Vehicle: ${vehicleType.toUpperCase()} (${vehicleDescriptions[vehicleType].desc})`
      );
    }
    setEstimateAdded(true);
    setTimeout(() => setEstimateAdded(false), 2000);
  };

  return (
    <section id="calculator" className="py-20 bg-[#0B132B]/60 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
            <span>Precision Glass Area Planning</span>
            <span aria-hidden="true">·</span>
            <span>Material & Dimensions Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Film Area & Requirement Calculator
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Enter your window or glass dimensions to calculate total square footage and roll specifications. Send your exact measurements to Md Tarik Shaikh for a personalized quote.
          </p>
        </div>

        {/* Application Type Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 inline-flex">
            <button
              onClick={() => setAppType('architectural')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                appType === 'architectural'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Architectural & Windows (Sq. Ft)
            </button>
            <button
              onClick={() => setAppType('automotive')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                appType === 'automotive'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Car Glass Tinting (Vehicle)
            </button>
          </div>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            {appType === 'architectural' ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Select Film Type & Purpose
                  </label>
                  <select
                    value={selectedFilmId}
                    onChange={(e) => setSelectedFilmId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    {PRODUCTS.filter((p) => p.category !== 'car-tinting').map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.categoryLabel})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Width (Feet)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      step="0.5"
                      value={widthFt}
                      onChange={(e) => setWidthFt(Math.max(0.5, parseFloat(e.target.value) || 1))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Height (Feet)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      step="0.5"
                      value={heightFt}
                      onChange={(e) => setHeightFt(Math.max(0.5, parseFloat(e.target.value) || 1))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Number of Glass Panes
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="500"
                      value={paneCount}
                      onChange={(e) => setPaneCount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                {/* Dimension Presets */}
                <div>
                  <div className="text-xs text-slate-400 mb-2">Quick Standard Sizes:</div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setWidthFt(4);
                        setHeightFt(6);
                        setPaneCount(2);
                      }}
                      className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 border border-slate-700"
                    >
                      Balcony Sliding (4x6 ft, 2 panes)
                    </button>
                    <button
                      onClick={() => {
                        setWidthFt(3);
                        setHeightFt(4);
                        setPaneCount(4);
                      }}
                      className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 border border-slate-700"
                    >
                      Bedroom Windows (3x4 ft, 4 panes)
                    </button>
                    <button
                      onClick={() => {
                        setWidthFt(10);
                        setHeightFt(8);
                        setPaneCount(3);
                      }}
                      className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 border border-slate-700"
                    >
                      Office Glass Cabin (10x8 ft, 3 panes)
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-3">
                    Select Your Vehicle Segment
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(['hatchback', 'sedan', 'suv', 'luxury'] as const).map((v) => (
                      <button
                        key={v}
                        onClick={() => setVehicleType(v)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          vehicleType === v
                            ? 'bg-cyan-950/40 border-cyan-400 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div className="text-xs font-bold uppercase">{v}</div>
                        <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                          {vehicleDescriptions[v].desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-3">
                    Select Automotive Film Grade
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => setAutoFilmGrade('ceramic-pro')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        autoFilmGrade === 'ceramic-pro'
                          ? 'bg-cyan-950/40 border-cyan-400 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-300">Nano-Ceramic Pro</span>
                        <span className="text-[10px] bg-cyan-400/20 text-cyan-300 px-1.5 py-0.5 rounded">
                          Recommended
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        85% Heat cut · Zero Fastag/GPS interference · 5-Yr Warranty
                      </div>
                    </button>

                    <button
                      onClick={() => setAutoFilmGrade('standard')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        autoFilmGrade === 'standard'
                          ? 'bg-cyan-950/40 border-cyan-400 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-xs font-bold text-slate-200">Standard Solar Tint</span>
                      <div className="text-[11px] text-slate-400 mt-1">
                        55% Heat cut · Anti-glare · 3-Yr Warranty
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0B132B] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Requirement Summary
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {appType === 'architectural' ? `${totalSqFt} SQ. FT` : vehicleType.toUpperCase()}
                </span>
              </div>

              <div className="my-6">
                <div className="text-xs text-slate-400">Total Glass Coverage</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight mt-1 text-cyan-300">
                  {appType === 'architectural' ? `~${totalSqFt} Sq. Ft` : vehicleType.toUpperCase()}
                </div>
                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Free On-Site Inspection & Sample Demonstration Included</span>
                </div>
              </div>

              <div className="space-y-2.5 py-4 border-t border-slate-800 text-xs text-slate-300">
                {appType === 'architectural' ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Selected Film:</span>
                      <span className="font-semibold text-white text-right">{currentFilm.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Est. Film Material:</span>
                      <span className="font-mono text-cyan-400 font-bold">~{estimatedRunningFeet} Running Feet (5ft roll)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Heat Rejection:</span>
                      <span className="font-mono text-cyan-400 font-bold">{currentFilm.heatRejection}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">UV Protection:</span>
                      <span className="font-mono text-cyan-400 font-bold">{currentFilm.uvProtection}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Est. Installation Time:</span>
                      <span className="text-white">Same-Day / 24-48 Hours</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Vehicle Segment:</span>
                      <span className="font-semibold text-white uppercase">{vehicleType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Glass Covered:</span>
                      <span className="text-white">{vehicleDescriptions[vehicleType].glassCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Est. Studio Duration:</span>
                      <span className="text-white">2.5 - 3.5 Hours</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send Requirement to Tarik on WhatsApp</span>
              </button>

              <button
                onClick={handleAddToCart}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {estimateAdded ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Added to Enquiry List!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-cyan-400" />
                    <span>Add to Enquiry List</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
