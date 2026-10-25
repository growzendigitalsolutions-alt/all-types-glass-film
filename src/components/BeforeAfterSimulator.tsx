import React, { useState, useRef } from 'react';
import { Sliders, Sun, Shield, Eye, Flame, CheckCircle, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface BeforeAfterSimulatorProps {
  onSelectFilmForQuote: (product: Product) => void;
}

interface PresetMode {
  id: string;
  name: string;
  category: string;
  productId: string;
  vlt: string;
  solarControl: string;
  uvProtection: string;
  privacy: string;
  glareCut: string;
  overlayEffect: 'tint' | 'frosted' | 'mirror' | 'dark-ceramic';
  image: string;
  description: string;
}

export const BeforeAfterSimulator: React.FC<BeforeAfterSimulatorProps> = ({ onSelectFilmForQuote }) => {
  const presets: PresetMode[] = [
    {
      id: 'nano-ceramic',
      name: 'Sun Control Solar Film',
      category: 'Sun Control',
      productId: 'nano-ceramic-sun-control',
      vlt: '70% High Clarity',
      solarControl: 'Solar Radiation Filter',
      uvProtection: 'UV Filter Layer',
      privacy: 'Natural Daylight',
      glareCut: 'Softened Glare',
      overlayEffect: 'tint',
      image: '/src/assets/images/hero_glass_architecture_1792940888119.jpg',
      description: 'Preserves clear outdoor panoramic daylight while filtering harsh direct sunlight and solar glare.'
    },
    {
      id: 'frosted-matte',
      name: 'Architectural Frosted Matte',
      category: 'Frosted Glass Film',
      productId: 'frosted-matte-crystal',
      vlt: '55% Translucent',
      solarControl: 'Light Diffusing',
      uvProtection: 'Standard Layer',
      privacy: 'Complete Visual Privacy',
      glareCut: 'Soft Uniform Light',
      overlayEffect: 'frosted',
      image: '/src/assets/images/frosted_office_partition_1792940890108.jpg',
      description: 'Transforms transparent glass into an elegant frosted barrier for conference cabins and private office spaces.'
    },
    {
      id: 'one-way-mirror',
      name: 'Reflective Privacy Film',
      category: 'Reflective / Privacy',
      productId: 'one-way-privacy-film',
      vlt: '15% Solar Shield',
      solarControl: 'High Reflection',
      uvProtection: 'Multi-Ply Layer',
      privacy: 'Daytime External Mirror',
      glareCut: 'High Glare Reduction',
      overlayEffect: 'mirror',
      image: '/src/assets/images/privacy_mirror_film_1792940890666.jpg',
      description: 'Daytime reflective privacy so passersby see a subtle mirror finish while you enjoy open outdoor views.'
    },
    {
      id: 'automotive-ceramic',
      name: 'Car Tinting Film',
      category: 'Automotive Tint',
      productId: 'ceramic-car-tint',
      vlt: '50% - 70% VLT',
      solarControl: 'Automotive Solar Filter',
      uvProtection: 'UV Protection Layer',
      privacy: 'Subtle Cabin Privacy',
      glareCut: 'Anti-Headlight Shield',
      overlayEffect: 'dark-ceramic',
      image: '/src/assets/images/car_glass_tinting_1792940888899.jpg',
      description: 'Cuts blinding headlight glare at night, preserves cabin comfort, and prevents interior sun fading.'
    }
  ];

  const [activePreset, setActivePreset] = useState<PresetMode>(presets[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      updatePosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const matchedProduct = PRODUCTS.find((p) => p.id === activePreset.productId) || PRODUCTS[0];

  return (
    <section id="simulator" className="py-20 bg-[#0B132B]/50 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
            <span>Interactive Visual Experience</span>
            <span aria-hidden="true">·</span>
            <span>Untreated Glass vs. Film</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Untreated Glass vs. Applied Film Simulator
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Drag the comparison slider left and right to visualize the difference in glare softening, sunlight filtration, and visual privacy across different film types.
          </p>
        </div>

        {/* Preset Selector Buttons (Segmented Controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {presets.map((preset) => {
            const isActive = activePreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setActivePreset(preset)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20 font-bold'
                    : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-800'
                }`}
              >
                {preset.name}
              </button>
            );
          })}
        </div>

        {/* Simulator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Slider Visual Arena */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onClick={(e) => updatePosition(e.clientX)}
              className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-700/80 shadow-2xl bg-slate-950"
            >
              {/* Layer 1: Treated Film Side (Full Background) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={activePreset.image}
                  alt="Treated glass with film"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Specific Film Effect Overlay */}
                {activePreset.overlayEffect === 'frosted' ? (
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-md mix-blend-screen flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:8px_8px] opacity-35" />
                  </div>
                ) : activePreset.overlayEffect === 'mirror' ? (
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-blue-900/40 to-slate-900/80 mix-blend-multiply" />
                ) : activePreset.overlayEffect === 'dark-ceramic' ? (
                  <div className="absolute inset-0 bg-slate-950/50 mix-blend-multiply" />
                ) : (
                  <div className="absolute inset-0 bg-cyan-950/25 mix-blend-multiply" />
                )}

                {/* Film Installed Badge */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 flex items-center gap-1.5 shadow-lg">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>With {activePreset.name}</span>
                </div>
              </div>

              {/* Layer 2: Untreated Clear Glass (Clipped by slider) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    maxWidth: '100vw'
                  }}
                >
                  <img
                    src={activePreset.image}
                    alt="Standard untreated clear glass"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-125 contrast-90"
                  />
                  {/* Harsh glare simulation */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-white/20 to-transparent pointer-events-none" />
                </div>

                {/* Untreated Clear Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-300 flex items-center gap-1.5 shadow-lg">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Standard Clear Glass (Untreated)</span>
                </div>
              </div>

              {/* Draggable Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-xl">
                  <Sliders className="w-4 h-4 rotate-90" />
                </div>
              </div>

              {/* Bottom Instruction Bar */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-slate-300 pointer-events-none border border-slate-800">
                Drag slider or tap anywhere to inspect comparison
              </div>
            </div>
          </div>

          {/* Right Column: Measured Specifications */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div>
              <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                {activePreset.category}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{activePreset.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {activePreset.description}
              </p>

              {/* Verified Features */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-slate-300 font-medium">Solar Control</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">
                    {activePreset.solarControl}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-slate-300 font-medium">UV Protection</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-300">
                    {activePreset.uvProtection}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Sun className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-slate-300 font-medium">Glare Level</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-300">
                    {activePreset.glareCut}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Eye className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-slate-300 font-medium">Privacy Status</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {activePreset.privacy}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => onSelectFilmForQuote(matchedProduct)}
                className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Add {activePreset.name} to Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
