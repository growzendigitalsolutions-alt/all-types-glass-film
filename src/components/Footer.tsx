import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050914] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-extrabold text-sm">
                AT
              </span>
              <span>All Types Glass Film</span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Professional supply and on-site installation of Sun Control Film, Automotive Glass Tinting, Frosted Privacy Film, One-Way Reflective Film, and Decorative Glass Film.
            </p>

            <div className="text-xs text-slate-300">
              Proprietor: <strong className="text-white font-semibold">{BUSINESS_INFO.owner}</strong>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View Google Maps Location</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Film Solutions
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Sun Control Solar Film
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Car Tinting Film
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Frosted Glass Film (Office Cabins)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  One-Way Privacy Film
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Reflective Solar Film
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Decorative & Designer Glass Film
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About All Types Glass Film
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-cyan-400 font-mono">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-cyan-400 font-mono">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href="https://wa.me/917276600033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400"
                >
                  WhatsApp: +91 7276600033
                </a>
              </div>

              <div className="pt-2 text-slate-500">
                Operating Hours: {BUSINESS_INFO.operatingHours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Owner: {BUSINESS_INFO.owner}</span>
            <span aria-hidden="true">·</span>
            <span>On-Site Measurements</span>
            <span aria-hidden="true">·</span>
            <span>Sample Inspection Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
