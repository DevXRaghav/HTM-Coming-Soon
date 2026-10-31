/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { CountdownBanner } from './components/CountdownBanner';
import { NewsletterForm } from './components/NewsletterForm';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { Journal } from './pages/Journal';
import { Community } from './pages/Community';
import { Press } from './pages/Press';
import { updatePageSEO } from './utils/seo';

function getInitialRoute(): string {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase().replace('#', '');

  const validRoutes = ['/about-us', '/journal', '/community', '/press'];
  if (validRoutes.includes(path)) {
    return path;
  }
  if (validRoutes.includes(`/${hash}`)) {
    return `/${hash}`;
  }
  return '/';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const navigate = (path: string) => {
    let target = path.startsWith('/') ? path : `/${path}`;

    // Handle hash links when staying on homepage
    if (target.includes('#') && currentRoute === '/') {
      const hashPart = target.split('#')[1];
      const el = document.getElementById(hashPart);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Clean anchor suffix for routing if navigating from another page
    const cleanPath = target.split('#')[0] || '/';
    setCurrentRoute(cleanPath);

    try {
      window.history.pushState({}, '', target);
    } catch (e) {
      // Fallback for isolated preview if pushState is restricted
      window.location.hash = cleanPath.replace('/', '');
    }

    updatePageSEO(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Initial SEO initialization
    updatePageSEO(currentRoute);

    const handlePopState = () => {
      const path = getInitialRoute();
      setCurrentRoute(path);
      updatePageSEO(path);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [currentRoute]);

  const handleFocusNewsletter = () => {
    if (currentRoute !== '/') {
      navigate('/');
      setTimeout(() => {
        const perksSection = document.getElementById('perks');
        if (perksSection) {
          perksSection.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => {
          emailInputRef.current?.focus();
        }, 500);
      }, 150);
    } else {
      const perksSection = document.getElementById('perks');
      if (perksSection) {
        perksSection.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 400);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFE] text-slate-900 selection:bg-[#601BF4] selection:text-white">
      {/* Universal Sticky Header with Discreet Brand Hub Access */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigate}
        onJoinVIPClick={handleFocusNewsletter}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentRoute === '/' && (
          <>
            {/* Big Launch Banner with Countdown & Audio Soundcheck */}
            <CountdownBanner onJoinVIPClick={handleFocusNewsletter} />

            {/* VIP Pass & ₹1,000 Voucher Claim Section */}
            <NewsletterForm inputRef={emailInputRef} />

            {/* Official Musician Social Channels */}
            <SocialLinks />
          </>
        )}

        {currentRoute === '/about-us' && (
          <AboutUs onNavigateHome={() => navigate('/')} onJoinVIP={handleFocusNewsletter} />
        )}

        {currentRoute === '/journal' && (
          <Journal onNavigateHome={() => navigate('/')} onJoinVIP={handleFocusNewsletter} />
        )}

        {currentRoute === '/community' && (
          <Community onNavigateHome={() => navigate('/')} onJoinVIP={handleFocusNewsletter} />
        )}

        {currentRoute === '/press' && (
          <Press onNavigateHome={() => navigate('/')} onJoinVIP={handleFocusNewsletter} />
        )}
      </main>

      {/* Crawlable Quiet Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
