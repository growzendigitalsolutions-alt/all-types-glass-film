import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, ShieldCheck, Car, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const GoogleMapsLocation: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Business & Visiting Information */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
              <span>Verified Store & Workshop Location</span>
              <span aria-hidden="true">·</span>
              <span>Google Maps Grounded</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Visit Our Workshop or Book a Site Measurement
            </h2>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Visit our workshop for automotive window tinting in our clean bay, or schedule an on-site visit by <strong className="text-white">Md Tarik Shaikh</strong> for residential and commercial glass film measurements.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Workshop & Office Location
                </div>
                <div className="text-sm text-slate-300 mt-1">
                  {BUSINESS_INFO.name}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Managed by Md Tarik Shaikh
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Operating Hours
                </div>
                <div className="text-sm text-slate-300 mt-1">
                  {BUSINESS_INFO.operatingHours}
                </div>
                <div className="text-xs text-emerald-400 mt-0.5 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Open 7 Days a Week for Inquiries</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <Car className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Service Coverage Areas
                </div>
                <div className="text-xs text-slate-300 mt-1 flex flex-wrap gap-1.5">
                  {BUSINESS_INFO.serviceAreas.map((area, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Direct Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://maps.app.goo.gl/5VsbNGeSMxjZUaJY7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 cursor-pointer"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Store ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>

        {/* Right Column: Google Maps Interactive Embed & Card */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
            {/* Embedded Google Maps View */}
            <div className="relative w-full h-[380px] sm:h-[440px] bg-slate-950">
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=All%20Types%20Glass%20Film&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[190deg] contrast-[1.2] opacity-85 group-hover:opacity-95 transition-opacity"
                loading="lazy"
              />

              {/* Highlighting Card Overlaid */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-cyan-500/30 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  <span>All Types Glass Film Workshop</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Sun Control Film · Car Tinting · Frosted Glass · Privacy Film
                </p>
                <div className="mt-2 text-[11px] text-cyan-400 font-mono">
                  Owner: Md Tarik Shaikh (+91 7276600033)
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href="https://maps.app.goo.gl/5VsbNGeSMxjZUaJY7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>Get GPS Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] text-slate-400">Google Maps Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
