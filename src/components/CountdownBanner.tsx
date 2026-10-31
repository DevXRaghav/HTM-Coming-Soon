import React, { useState, useEffect } from 'react';
import { Calendar, Volume2, Sparkles, BellRing, ArrowDown } from 'lucide-react';
import { TimeRemaining } from '../types';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { playSoundcheckChord } from '../utils/audio';

interface CountdownBannerProps {
  onJoinVIPClick: () => void;
}

// Target launch: 26 January 2027, 00:00:00 IST (Indian Standard Time)
const TARGET_DATE = new Date('2027-01-26T00:00:00+05:30').getTime();
// Reference start date for progress computation (when countdown was announced)
const ANNOUNCED_DATE = new Date('2026-01-01T00:00:00+05:30').getTime();

export const CountdownBanner: React.FC<CountdownBannerProps> = ({ onJoinVIPClick }) => {
  const [time, setTime] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalMs: 0,
    isLaunched: false,
  });

  const [soundPlaying, setSoundPlaying] = useState(false);
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = Date.now();
      const difference = TARGET_DATE - now;

      if (difference <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalMs: 0,
          isLaunched: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTime({
        days,
        hours,
        minutes,
        seconds,
        totalMs: difference,
        isLaunched: false,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSoundcheck = () => {
    setSoundPlaying(true);
    playSoundcheckChord('power');
    setTimeout(() => setSoundPlaying(false), 2400);
  };

  // Progress percentage between announcement and launch
  const totalDuration = TARGET_DATE - ANNOUNCED_DATE;
  const elapsed = Math.max(0, Date.now() - ANNOUNCED_DATE);
  const progressPercent = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));

  return (
    <section id="countdown" className="relative overflow-hidden bg-white pt-10 pb-16 sm:pb-24 border-b border-purple-100">
      {/* Background ambient lighting and subtle musical grid */}
      <div className="absolute inset-0 music-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-purple-200/40 via-purple-100/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Kicker / Status Line */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-xs sm:text-sm font-semibold text-[#601BF4] mb-5 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#601BF4] animate-pulse" />
            <span>The Revolution in Indian Music Retail Arrives</span>
            <span aria-hidden="true" className="text-purple-300">·</span>
            <span className="text-purple-700 font-bold">26 January 2027</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance mb-5">
            India's No. 1 Music Store <br />
            <span className="bg-gradient-to-r from-[#601BF4] via-[#7C3AED] to-[#9333EA] bg-clip-text text-transparent">
              Coming Very Soon.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="text-slate-900 font-semibold">Highway To Music</strong>. We are engineering 
            India's largest, most authentic music gear destination with 50,000+ certified guitars, synths, drums, and pro audio setups.
          </p>
        </div>

        {/* Big Countdown Timer Card / Banner */}
        <div className="relative max-w-5xl mx-auto mt-8 sm:mt-12 rounded-3xl bg-gradient-to-b from-[#1C0938] to-[#120425] p-6 sm:p-10 lg:p-12 text-white shadow-2xl shadow-purple-950/30 border border-purple-500/20">
          {/* Subtle Stage Glow within banner */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-[#601BF4]/30 blur-2xl pointer-events-none" />

          {/* Banner Header Info */}
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-purple-800/40">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-400/30 flex items-center justify-center shrink-0 text-purple-300">
                <BellRing className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight text-white">
                  Official Launch Countdown
                </h2>
                <div className="flex items-center gap-2 text-xs text-purple-200/80">
                  <span>Target Date: 26 January 2027</span>
                  <span aria-hidden="true">·</span>
                  <span>Republic Day Premiere</span>
                  <span aria-hidden="true">·</span>
                  <span>10:00 AM IST</span>
                </div>
              </div>
            </div>

            {/* Soundcheck & Remind Me Buttons */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <button
                type="button"
                onClick={handleSoundcheck}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-purple-100 border border-white/15 transition-colors active:scale-95 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none"
                title="Hear our opening soundcheck chord"
              >
                <Volume2 className={`w-4 h-4 ${soundPlaying ? 'text-amber-400 animate-spin' : 'text-purple-300'}`} />
                <span>{soundPlaying ? 'Playing Chord...' : 'Soundcheck Riff'}</span>
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#601BF4] hover:bg-[#7227FE] text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Add Reminder</span>
                </button>

                {calendarMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-purple-100 py-1.5 text-slate-800 z-50 text-xs">
                    <a
                      href={getGoogleCalendarUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setCalendarMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-purple-50 text-slate-700 hover:text-[#601BF4] transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#601BF4]" />
                      <span>Google Calendar</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        downloadIcsFile();
                        setCalendarMenuOpen(false);
                      }}
                      className="w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-purple-50 text-slate-700 hover:text-[#601BF4] transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#601BF4]" />
                      <span>Apple / Outlook (.ics)</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Big Digital Countdown Grid */}
          <div className="relative py-8 sm:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {/* DAYS */}
              <div className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-purple-400/40 p-4 sm:p-6 text-center transition-all duration-300">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-bold font-mono-numbers tracking-tight text-white drop-shadow-md">
                  {String(time.days).padStart(2, '0')}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-purple-300/90">
                  Days
                </div>
                <span className="block text-[11px] text-purple-400/60 mt-1">
                  Until Grand Opening
                </span>
              </div>

              {/* HOURS */}
              <div className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-purple-400/40 p-4 sm:p-6 text-center transition-all duration-300">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-bold font-mono-numbers tracking-tight text-white drop-shadow-md">
                  {String(time.hours).padStart(2, '0')}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-purple-300/90">
                  Hours
                </div>
                <span className="block text-[11px] text-purple-400/60 mt-1">
                  Indian Standard Time
                </span>
              </div>

              {/* MINUTES */}
              <div className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-purple-400/40 p-4 sm:p-6 text-center transition-all duration-300">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-bold font-mono-numbers tracking-tight text-white drop-shadow-md">
                  {String(time.minutes).padStart(2, '0')}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-purple-300/90">
                  Minutes
                </div>
                <span className="block text-[11px] text-purple-400/60 mt-1">
                  Real-time Synced
                </span>
              </div>

              {/* SECONDS */}
              <div className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-purple-500/30 p-4 sm:p-6 text-center transition-all duration-300 ring-1 ring-purple-500/20">
                <div className="text-4xl sm:text-6xl lg:text-7xl font-bold font-mono-numbers tracking-tight text-purple-200 drop-shadow-md">
                  {String(time.seconds).padStart(2, '0')}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-purple-300">
                  Seconds
                </div>
                <span className="block text-[11px] text-purple-300/70 mt-1">
                  Ticking Live
                </span>
              </div>
            </div>

            {/* Launch Highway Progress Bar */}
            <div className="mt-8 pt-6 border-t border-purple-800/30">
              <div className="flex items-center justify-between text-xs text-purple-300 mb-2">
                <span className="font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Launch Preparations in Progress
                </span>
                <span className="font-mono-numbers font-semibold">
                  {progressPercent.toFixed(1)}% Road Travelled
                </span>
              </div>
              <div className="w-full h-2.5 bg-purple-950/80 rounded-full overflow-hidden border border-purple-800/40 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-[#A855F7] rounded-full transition-all duration-1000 shadow-sm shadow-purple-500/50"
                  style={{ width: `${Math.max(5, progressPercent)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Quick Call to Action inside Banner */}
          <div className="relative pt-6 border-t border-purple-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-purple-200 text-center sm:text-left">
              <span className="font-bold text-white">Join 24,000+ Indian musicians</span> waiting for launch day access & ₹1,000 opening voucher.
            </div>

            <button
              type="button"
              onClick={onJoinVIPClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-purple-50 active:bg-purple-100 rounded-xl transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0"
            >
              <span>Reserve Your VIP Spot</span>
              <ArrowDown className="w-4 h-4 text-[#601BF4]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
