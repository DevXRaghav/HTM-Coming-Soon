import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onJoinVIPClick: () => void;
}

export const BRAND_LOGO_SRC = '/assets/aistudio/logo_transparent.png';

export const Header: React.FC<HeaderProps> = ({ onJoinVIPClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-purple-100 transition-all">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Brand Wordmark & Official Logo */}
        <a
          href="/"
          className="flex items-center gap-2 sm:gap-3 text-slate-900 group whitespace-nowrap shrink min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#601BF4]"
          aria-label="Highway To Music - Home"
        >
          <img
            src={BRAND_LOGO_SRC}
            alt="Highway To Music Logo"
            className="w-8 h-8 sm:w-11 sm:h-11 object-contain transition-transform duration-200 group-hover:scale-105 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-extrabold text-sm sm:text-lg lg:text-xl tracking-tight text-slate-900 leading-none truncate">
              HIGHWAY TO MUSIC
            </span>
            <span className="text-[9px] sm:text-[11px] font-semibold text-[#601BF4] tracking-wider uppercase mt-0.5 sm:mt-1 truncate">
              India's No.1 Music Store
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (hidden on mobile, visible on desktop) */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
          aria-label="Main Navigation"
        >
          <a
            href="#countdown"
            className="whitespace-nowrap shrink-0 hover:text-[#601BF4] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#601BF4] after:transition-all"
          >
            Launch Date
          </a>
          <a
            href="#perks"
            className="whitespace-nowrap shrink-0 hover:text-[#601BF4] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#601BF4] after:transition-all"
          >
            VIP Perks
          </a>
          <a
            href="#community"
            className="whitespace-nowrap shrink-0 hover:text-[#601BF4] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#601BF4] after:transition-all"
          >
            Community
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onJoinVIPClick}
            type="button"
            className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#601BF4] hover:bg-[#5012D4] active:bg-[#430EB5] rounded-xl shadow-sm hover:shadow-md hover:shadow-purple-600/30 transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#601BF4]"
          >
            <span className="hidden sm:inline">Get Early Access</span>
            <span className="sm:hidden">Get Access</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
