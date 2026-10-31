import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Check, Copy, ArrowRight, CheckCircle2 } from 'lucide-react';
import { VIPMember } from '../types';

interface NewsletterFormProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const LOCAL_STORAGE_KEY = 'htm_vip_member_data';

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ inputRef }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [vipMember, setVipMember] = useState<VIPMember | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

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

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#601BF4', '#A855F7', '#F59E0B', '#FFFFFF'],
      });
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
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const newMember: VIPMember = {
        email: trimmed,
        vipId: `HTM-${randomNum}`,
        interests: ['all-access'],
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
    }, 400);
  };

  const handleCopyCode = () => {
    if (!vipMember) return;
    navigator.clipboard.writeText(vipMember.voucherCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleReset = () => {
    setVipMember(null);
    setEmail('');
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <section id="perks" className="py-16 sm:py-20 bg-white border-b border-purple-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {vipMember ? (
          /* Minimal Confirmed State */
          <div className="rounded-2xl bg-[#FAF8FE] border border-purple-200 p-6 sm:p-8 text-center transition-all">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              You're on the VIP list
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
              We've reserved your opening access for <strong className="text-slate-800">{vipMember.email}</strong>.
            </p>

            {/* Voucher Badge */}
            <div className="mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-purple-200 shadow-2xs">
              <div className="text-left">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  ₹1,000 Early Bird Code
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-[#601BF4] tracking-wider">
                  {vipMember.voucherCode}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyCode}
                className="px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-[#601BF4] text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-100 flex items-center justify-center gap-4 text-xs text-slate-500">
              <span>Pass ID: <span className="font-mono font-semibold text-slate-700">{vipMember.vipId}</span></span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={handleReset}
                className="text-[#601BF4] hover:underline font-medium"
              >
                Register another email
              </button>
            </div>
          </div>
        ) : (
          /* Minimal Clean Form State */
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#601BF4] block mb-2">
              Early Access
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Be the First to Know When We Drop
            </h2>

            <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
              Join Indian musicians waiting for opening day. Get launch alerts and an exclusive ₹1,000 early bird credit.
            </p>

            {/* Seamless Single-Line Input Form */}
            <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto">
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 rounded-2xl border border-purple-200 bg-[#FCFAFF] shadow-xs focus-within:border-[#601BF4] focus-within:ring-3 focus-within:ring-purple-100 transition-all">
                <div className="flex items-center flex-1 px-3 py-1 sm:py-0">
                  <Mail className="w-4 h-4 text-purple-400 shrink-0 mr-2.5" />
                  <input
                    ref={inputRef}
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="Enter your email address"
                    className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm font-medium outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#601BF4] hover:bg-[#5012D4] active:bg-[#430EB5] text-white font-bold text-xs sm:text-sm shadow-xs transition-all whitespace-nowrap shrink-0 disabled:opacity-70 focus-visible:outline-none"
                >
                  {isSubmitting ? (
                    <span>Joining...</span>
                  ) : (
                    <>
                      <span>Join VIP List</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {errorMsg && (
                <p className="mt-2 text-xs text-rose-600 font-medium text-left pl-3">
                  {errorMsg}
                </p>
              )}
            </form>

            {/* Minimal Unboxed Perks / Trust Line */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-500">
              <span>₹1,000 launch credit</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>24h early access</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Free luthier calibration</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-purple-700 font-medium">Launching 26 Jan 2027</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
