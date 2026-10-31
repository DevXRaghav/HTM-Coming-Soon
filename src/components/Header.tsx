import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, BookOpen, Users, FileText, Info, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onJoinVIPClick: () => void;
}

export const BRAND_LOGO_SRC = '/assets/aistudio/logo_transparent.png';

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onJoinVIPClick }) => {
  const [brandMenuOpen, setBrandMenuOpen] = useState(false);

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setBrandMenuOpen(false);
    onNavigate(path);
  };

  const isHome = currentRoute === '/';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-purple-100 transition-all">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Brand Wordmark & Official Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick('/', e)}
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

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600"
          aria-label="Main Navigation"
        >
          {isHome ? (
            <>
              <a
                href="#countdown"
                className="whitespace-nowrap shrink-0 hover:text-[#601BF4] transition-colors relative py-1"
              >
                Launch Date
              </a>
              <a
                href="#perks"
                className="whitespace-nowrap shrink-0 hover:text-[#601BF4] transition-colors relative py-1"
              >
                VIP Perks
              </a>
              <a
                href="#community"
                className="whitespace-nowrap shrink-0 hover:text-[#601BF4] transition-colors relative py-1"
              >
                Community
              </a>
            </>
          ) : (
            <button
              onClick={(e) => handleNavClick('/', e)}
              className="text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              ← Back to Launchpad
            </button>
          )}

          {/* Discreet Brand Hub Dropdown for SEO & Deep Exploration */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setBrandMenuOpen(!brandMenuOpen)}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                !isHome || brandMenuOpen
                  ? 'border-purple-300 bg-purple-50/80 text-[#601BF4]'
                  : 'border-slate-200 text-slate-600 hover:border-purple-200 hover:text-[#601BF4]'
              }`}
            >
              <span>Brand Hub</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${brandMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {brandMenuOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-purple-100 p-2 z-50 animate-in fade-in zoom-in-95"
                onMouseLeave={() => setBrandMenuOpen(false)}
              >
                <div className="px-3 py-2 border-b border-purple-50">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    HTM Pre-Launch Dossier
                  </span>
                </div>
                <div className="space-y-1 py-1">
                  <a
                    href="/about-us"
                    onClick={(e) => handleNavClick('/about-us', e)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50 hover:text-[#601BF4] transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-[#601BF4]" />
                    <span>About Highway To Music</span>
                  </a>
                  <a
                    href="/journal"
                    onClick={(e) => handleNavClick('/journal', e)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50 hover:text-[#601BF4] transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#601BF4]" />
                    <span>Our Journal & Buyer Guides</span>
                  </a>
                  <a
                    href="/community"
                    onClick={(e) => handleNavClick('/community', e)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50 hover:text-[#601BF4] transition-colors"
                  >
                    <Users className="w-3.5 h-3.5 text-[#601BF4]" />
                    <span>Creator & Artist Community</span>
                  </a>
                  <a
                    href="/press"
                    onClick={(e) => handleNavClick('/press', e)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-purple-50 hover:text-[#601BF4] transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#601BF4]" />
                    <span>Press Kit & Brand Assets</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => {
              if (!isHome) {
                onNavigate('/');
                setTimeout(onJoinVIPClick, 200);
              } else {
                onJoinVIPClick();
              }
            }}
            type="button"
            className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#601BF4] hover:bg-[#5012D4] active:bg-[#430EB5] rounded-xl shadow-sm hover:shadow-md hover:shadow-purple-600/30 transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#601BF4] cursor-pointer"
          >
            <span className="hidden sm:inline">Get Early Access</span>
            <span className="sm:hidden">VIP Pass</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
