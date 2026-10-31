import React from 'react';
import { BRAND_LOGO_SRC } from './Header';

interface FooterProps {
  onNavigate?: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

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
            <a href="/#countdown" className="hover:text-[#601BF4] transition-colors">
              Launch Timeline
            </a>
            <a href="/#perks" className="hover:text-[#601BF4] transition-colors">
              VIP Privileges
            </a>
            <a href="/#community" className="hover:text-[#601BF4] transition-colors">
              Musician Community
            </a>
          </div>

          {/* National Pride Marker */}
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <span>Built with passion in India</span>
            <span>🇮🇳</span>
          </div>
        </div>

        {/* Discreet Crawlable Brand Index (Search Engine & Pre-Launch Knowledge Links) */}
        <div className="py-6 border-b border-purple-50 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px]">
            Pre-Launch Brand Index:
          </span>
          <div className="flex flex-wrap items-center gap-5 font-medium">
            <a
              href="/about-us"
              onClick={(e) => handleNav('/about-us', e)}
              className="hover:text-[#601BF4] transition-colors"
            >
              About HTM
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/journal"
              onClick={(e) => handleNav('/journal', e)}
              className="hover:text-[#601BF4] transition-colors"
            >
              Gear Journal & Guides
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/community"
              onClick={(e) => handleNav('/community', e)}
              className="hover:text-[#601BF4] transition-colors"
            >
              Musician & Creator Network
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/press"
              onClick={(e) => handleNav('/press', e)}
              className="hover:text-[#601BF4] transition-colors"
            >
              Press & Brand Assets
            </a>
          </div>
        </div>

        {/* Legal & Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026–2027 Highway To Music Retail India Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Grand Launch: 26 January 2027</span>
            <span aria-hidden="true">·</span>
            <a href="mailto:support@highwaytomusic.com" className="hover:underline">
              support@highwaytomusic.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
