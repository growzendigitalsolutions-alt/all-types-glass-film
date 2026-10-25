import React, { useState } from 'react';
import { ZoomIn, X, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryAndVideos';
import { GalleryItem } from '../types';
import { BUSINESS_INFO } from '../data/products';

export const ImageGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial & IT Parks' },
    { id: 'automotive', label: 'Car Tinting' },
    { id: 'frosted', label: 'Frosted Cabins' },
    { id: 'residential', label: 'Residential Villas' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <section id="gallery" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
            <span>Portfolio of Finished Works</span>
            <span aria-hidden="true">·</span>
            <span>Site Photography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Installation Image Gallery
          </h2>
        </div>
        <p className="text-sm text-slate-300 max-w-md leading-relaxed">
          Real installations across corporate IT parks, luxury residential villas, and premium vehicles executed by Md Tarik Shaikh and his team.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 aspect-[4/3] cursor-pointer shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Top Right Zoom Icon */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
              <ZoomIn className="w-4 h-4" />
            </div>

            {/* Bottom Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-[11px] font-semibold text-cyan-400 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{item.location}</span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors line-clamp-1">
                {item.title}
              </h3>
              <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                Film: <strong className="text-slate-200">{item.filmUsed}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
          <div
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />

          <div className="relative w-full max-w-4xl bg-[#0B132B] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col">
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Close zoom modal"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[320px] sm:h-[460px] bg-slate-950">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-slate-900/95 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-cyan-400 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeItem.location}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400">{activeItem.categoryLabel}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{activeItem.title}</h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">{activeItem.description}</p>
                <div className="text-xs text-cyan-300 mt-2 font-mono">
                  Applied Film: {activeItem.filmUsed}
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
                    `Hello Md Tarik Shaikh, I like the work done in "${activeItem.title}" (${activeItem.filmUsed}). Can you install something similar at my property?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire For Similar Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
