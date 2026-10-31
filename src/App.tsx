/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Header } from './components/Header';
import { CountdownBanner } from './components/CountdownBanner';
import { NewsletterForm } from './components/NewsletterForm';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';

export default function App() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleFocusNewsletter = () => {
    const perksSection = document.getElementById('perks');
    if (perksSection) {
      perksSection.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      emailInputRef.current?.focus();
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFE] text-slate-900 selection:bg-[#601BF4] selection:text-white">
      {/* Top Bar following 1-row, 3-zone contract */}
      <Header onJoinVIPClick={handleFocusNewsletter} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Big Banner with Countdown Timer */}
        <CountdownBanner onJoinVIPClick={handleFocusNewsletter} />

        {/* Newsletter Signup Field with Instrument Preferences & VIP Pass */}
        <NewsletterForm inputRef={emailInputRef} />

        {/* Musician Community - Single Line Social Channels */}
        <SocialLinks />
      </main>

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}
