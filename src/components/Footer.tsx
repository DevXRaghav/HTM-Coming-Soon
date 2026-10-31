import React from 'react';
import { BRAND_LOGO_SRC } from './Header';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-purple-100 py-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-purple-100">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <img
              src={BRAND_LOGO_SRC}
              alt="Highway To Music"
              className="w-10 h-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-extrabold text-base text-slate-900 tracking-tight block">
                HIGHWAY TO MUSIC
              </span>
              <span className="text-xs font-semibold text-[#601BF4]">
                India's No. 1 Music Store
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <a href="#countdown" className="hover:text-[#601BF4] transition-colors">
              Launch Timeline
            </a>
            <a href="#perks" className="hover:text-[#601BF4] transition-colors">
              VIP Privileges
            </a>
            <a href="#community" className="hover:text-[#601BF4] transition-colors">
              Musician Community
            </a>
          </div>

          {/* National Pride Marker */}
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <span>Built with passion in India</span>
            <span>🇮🇳</span>
          </div>
        </div>

        {/* Legal & Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2026–2027 Highway To Music Retail India Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-600">
            <span>Grand Launch: 26 January 2027</span>
            <span aria-hidden="true">·</span>
            <span>support@highwaytomusic.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
