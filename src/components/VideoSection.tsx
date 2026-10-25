import React, { useState } from 'react';
import { Play, X, Clock, Flame, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { VIDEO_ITEMS } from '../data/galleryAndVideos';
import { VideoItem } from '../types';
import { BUSINESS_INFO } from '../data/products';

export const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleOpenVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
    setIsPlaying(false);
  };

  return (
    <section id="videos" className="py-20 bg-[#070C18] border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
              <span>Scientific Proof & Craftsmanship</span>
              <span aria-hidden="true">·</span>
              <span>Live Testing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Video Demos & Quality Tests
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md leading-relaxed">
            Watch our laboratory heat rejection tests, bubble-free automotive installations, and scratch-resistance durability demonstrations.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_ITEMS.map((video) => (
            <div
              key={video.id}
              onClick={() => handleOpenVideo(video)}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col justify-between cursor-pointer shadow-lg"
            >
              <div className="relative aspect-video bg-slate-950 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2.5 right-2.5 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 flex items-center gap-1 border border-slate-800">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>{video.duration}</span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1 mb-3">
                    {video.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-cyan-300/90 line-clamp-2">
                  Takeaway: {video.keyTakeaway}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
            <div
              onClick={handleCloseVideo}
              className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            />

            <div className="relative w-full max-w-3xl bg-[#0B132B] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col">
              <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-cyan-400 fill-current" />
                  <span className="text-sm font-bold text-white">{activeVideo.title}</span>
                </div>
                <button
                  onClick={handleCloseVideo}
                  aria-label="Close video player"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Container / Interactive Video Simulation Screen */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Simulated Thermal & Quality Demonstration Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-red-600/90 text-white font-mono text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      Live Demonstration Stream
                    </span>
                    <span className="text-xs font-mono bg-slate-950/80 text-cyan-300 px-2 py-1 rounded border border-slate-800">
                      Duration: {activeVideo.duration}
                    </span>
                  </div>

                  <div className="bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 rounded-xl p-4 max-w-lg shadow-xl">
                    <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>Scientific Demonstration Result</span>
                    </div>
                    <div className="text-white text-sm font-bold mb-2">
                      {activeVideo.keyTakeaway}
                    </div>
                    <div className="text-xs text-slate-300">
                      Technician in charge: <strong className="text-white">Md Tarik Shaikh</strong>. Live testing kits available during free on-site consultations.
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Action Bar */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  Want this exact high-performance film installed on your glass?
                </div>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
                    `Hello Md Tarik Shaikh, I watched the demonstration video for "${activeVideo.title}". I would like to book an on-site sample test.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Request Live On-Site Demo</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
