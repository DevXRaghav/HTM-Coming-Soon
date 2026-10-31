import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Check, Copy, ShieldCheck, Ticket, Gift, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { VIPMember, InstrumentCategory } from '../types';
import { BRAND_LOGO_SRC } from './Header';

interface NewsletterFormProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const INSTRUMENT_OPTIONS: InstrumentCategory[] = [
  { id: 'guitars', name: 'Guitars & Bass', iconName: '🎸' },
  { id: 'synths', name: 'Keyboards & Synths', iconName: '🎹' },
  { id: 'drums', name: 'Drums & Percussion', iconName: '🥁' },
  { id: 'studio', name: 'Studio & Pro Audio', iconName: '🎙️' },
  { id: 'dj', name: 'DJ & Live Sound', iconName: '🎛️' },
  { id: 'indian', name: 'Indian Classical Gear', iconName: '🪕' },
];

const LOCAL_STORAGE_KEY = 'htm_vip_member_data';

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ inputRef }) => {
  const [email, setEmail] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['guitars']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [vipMember, setVipMember] = useState<VIPMember | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setVipMember(JSON.parse(saved));
      }
    } catch (err) {
      console.warn('Storage read failed', err);
    }
  }, []);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((item) => item !== id) : prev) : [...prev, id]
    );
  };

  const triggerConfetti = () => {
    try {
      // High-impact purple & gold celebration burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#601BF4', '#A855F7', '#C084FC', '#F59E0B', '#FFFFFF'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#601BF4', '#A855F7', '#E9D5FF'],
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#601BF4', '#A855F7', '#F59E0B'],
        });
      }, 200);
    } catch (e) {
      console.warn('Confetti error', e);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmed || !emailRegex.test(trimmed)) {
      setErrorMsg('Please enter a valid email address so we can send your VIP pass.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const newMember: VIPMember = {
        email: trimmed,
        vipId: `HTM-${randomNum}`,
        interests: selectedInterests,
        joinedAt: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        voucherCode: 'HTM-LAUNCH-2027',
      };

      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newMember));
      } catch (err) {
        console.warn('Storage save failed', err);
      }

      setVipMember(newMember);
      setIsSubmitting(false);
      triggerConfetti();
    }, 600);
  };

  const handleCopyCode = () => {
    if (!vipMember) return;
    navigator.clipboard.writeText(vipMember.voucherCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleResetForAnother = () => {
    setVipMember(null);
    setEmail('');
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <section id="perks" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Why Join VIP & Perks List */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 text-[#601BF4] text-xs font-bold uppercase tracking-wider mb-4">
              <Gift className="w-3.5 h-3.5" />
              <span>Founding Member Privileges</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Get ₹1,000 Voucher & <br />
              <span className="text-[#601BF4]">24-Hour VIP Early Access</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8">
              Highway To Music is opening its digital vault on 26 January 2027. Early subscribers receive immediate access before stock goes live to the general public, plus an exclusive opening voucher.
            </p>

            {/* Structured Perks List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                <div className="w-8 h-8 rounded-xl bg-[#601BF4] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  ₹1k
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">₹1,000 Opening Day Credit</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Valid on all instruments, amps, pedals, studio audio interfaces, and synthesizers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                <div className="w-8 h-8 rounded-xl bg-purple-200 text-[#601BF4] flex items-center justify-center shrink-0">
                  <Ticket className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">24-Hour Private Preview Window</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Shop limited custom shop guitars and high-demand gear before general access.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                <div className="w-8 h-8 rounded-xl bg-purple-200 text-[#601BF4] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Complimentary Luthier Setup</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Free professional action & intonation calibration on your first stringed instrument.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Signup Box OR VIP Pass */}
          <div className="lg:col-span-7">
            {vipMember ? (
              /* Already Subscribed State: Personalized VIP Pass */
              <div className="rounded-2xl bg-gradient-to-br from-[#1C0938] via-[#2A0E54] to-[#120425] p-5 sm:p-6 text-white shadow-lg border border-purple-500/30 relative overflow-hidden">
                {/* Background watermark badge */}
                <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                  <img src={BRAND_LOGO_SRC} alt="" className="w-52 h-52" />
                </div>

                <div className="flex items-center justify-between gap-4 pb-4 border-b border-purple-700/50">
                  <div className="flex items-center gap-2.5">
                    <img src={BRAND_LOGO_SRC} alt="Highway To Music" className="w-9 h-9 object-contain" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-purple-300 font-bold block">
                        Founding Member Pass
                      </span>
                      <span className="text-sm font-bold text-white">Highway To Music VIP</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[11px] font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Confirmed</span>
                  </div>
                </div>

                <div className="py-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-purple-300/80 block mb-0.5 text-[11px]">VIP ID</span>
                      <span className="text-sm sm:text-base font-mono font-bold text-white tracking-wider">
                        {vipMember.vipId}
                      </span>
                    </div>
                    <div>
                      <span className="text-purple-300/80 block mb-0.5 text-[11px]">Registered Email</span>
                      <span className="text-xs font-semibold text-purple-100 truncate block">
                        {vipMember.email}
                      </span>
                    </div>
                  </div>

                  {/* Voucher Box */}
                  <div className="p-3.5 rounded-xl bg-white/[0.08] border border-white/15">
                    <div className="flex items-center justify-between text-[11px] text-purple-200 mb-1.5">
                      <span className="font-semibold flex items-center gap-1.5 text-amber-300">
                        <Sparkles className="w-3 h-3" />
                        ₹1,000 Early Bird Voucher
                      </span>
                      <span>Opens 26 Jan 2027</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 bg-black/40 rounded-lg px-3.5 py-2 border border-purple-400/30">
                      <span className="font-mono text-sm sm:text-base font-bold tracking-widest text-white">
                        {vipMember.voucherCode}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyCode}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#601BF4] hover:bg-[#7227FE] text-white text-xs font-medium transition-colors"
                      >
                        {copiedCode ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-300" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-[11px] text-purple-300/80 mt-1.5">
                      We have reserved your invitation. Early access link will be sent prior to launch.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-purple-700/40 flex items-center justify-between text-xs">
                  <span className="text-purple-300 text-[11px]">Register another bandmate?</span>
                  <button
                    type="button"
                    onClick={handleResetForAnother}
                    className="text-white hover:text-purple-200 underline font-medium text-xs"
                  >
                    Register new email
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form: Compact & Modern Sleek Newsletter Signup */
              <div className="rounded-2xl bg-white/95 backdrop-blur-sm border border-purple-200/80 p-5 sm:p-6 shadow-sm shadow-purple-900/5 transition-all">
                {/* Header: Compact single-row or tight block */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-purple-100/80">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                      Step into the VIP Greenroom
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Get ₹1,000 launch credit & 24h early opening drop alerts.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 text-[#601BF4] text-[11px] font-bold self-start sm:self-auto border border-purple-100 shrink-0">
                    <Sparkles className="w-3 h-3 text-[#601BF4]" />
                    <span>Free ₹1k Credit</span>
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Compact Instrument Preference Chips */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                      <span>Select what you play:</span>
                      <span className="text-purple-600 font-semibold normal-case text-[11px]">
                        {selectedInterests.length} selected
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {INSTRUMENT_OPTIONS.map((item) => {
                        const isSelected = selectedInterests.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => toggleInterest(item.id)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all border ${
                              isSelected
                                ? 'bg-[#601BF4] text-white border-[#601BF4] shadow-2xs'
                                : 'bg-purple-50/50 text-slate-700 border-purple-100 hover:border-purple-300 hover:bg-purple-100/60'
                            }`}
                          >
                            <span className="text-xs">{item.iconName}</span>
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Modern Integrated Inline Email Input & Button */}
                  <div>
                    <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 rounded-xl border border-purple-200/90 bg-[#FAF8FE] focus-within:border-[#601BF4] focus-within:ring-2 focus-within:ring-purple-200 transition-all">
                      <div className="flex items-center flex-1 px-2.5">
                        <Mail className="w-4 h-4 text-purple-400 shrink-0 mr-2" />
                        <input
                          ref={inputRef}
                          id="newsletter-email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errorMsg) setErrorMsg('');
                          }}
                          placeholder="Enter your email (e.g. arjun@gmail.com)"
                          className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-medium outline-none py-1.5"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#601BF4] hover:bg-[#5012D4] active:bg-[#430EB5] text-white font-bold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap shrink-0 disabled:opacity-70 focus-visible:outline-none"
                      >
                        {isSubmitting ? (
                          <span>Reserving...</span>
                        ) : (
                          <>
                            <span>Claim ₹1,000 Voucher</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>

                    {errorMsg && (
                      <p className="mt-1.5 text-xs text-rose-600 font-medium pl-1">
                        {errorMsg}
                      </p>
                    )}
                  </div>

                  {/* Micro Trust Indicators */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Zero spam · Instant pass generation</span>
                    </span>
                    <span className="text-purple-700 font-medium hidden sm:inline">
                      Opening 26 Jan 2027
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
