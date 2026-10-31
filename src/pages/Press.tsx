import React, { useState } from 'react';
import {
  Download,
  Mail,
  Copy,
  Check,
  Sparkles,
  FileText,
  Calendar,
  Layers,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { BRAND_LOGO_SRC } from '../components/Header';

interface PressProps {
  onNavigateHome: () => void;
  onJoinVIP: () => void;
}

export const Press: React.FC<PressProps> = ({ onNavigateHome, onJoinVIP }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const pressEmail = 'press@highwaytomusic.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(pressEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="bg-[#FBFBFE] text-slate-900 min-h-screen">
      {/* Discreet Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#601BF4] transition-colors group cursor-pointer"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            <span>Back to Launchpad</span>
          </button>
          <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            <span>PRESS & MEDIA DOSSIER</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="py-12 sm:py-20 bg-gradient-to-b from-purple-50/70 via-white to-[#FBFBFE] border-b border-purple-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-purple-200 shadow-sm text-xs font-semibold text-[#601BF4] mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Highway to Music Media Kit</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Press, Media & <br />
            <span className="bg-gradient-to-r from-[#601BF4] to-indigo-600 bg-clip-text text-transparent">
              Brand Assets
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Official brand resources, logos, background dossiers, and direct media contact channels
            for journalists, creators, and industry publications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={BRAND_LOGO_SRC}
              download="Highway_To_Music_Official_Logo.png"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#601BF4] hover:bg-[#5013D6] text-white text-xs sm:text-sm font-bold shadow-md shadow-purple-500/25 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Brand Kit</span>
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold border border-purple-200 transition-colors cursor-pointer"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Email Copied!' : pressEmail}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* Brand Summary & Boilerplate */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-purple-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Brand Boilerplate & Overview
              </h2>
              <span className="text-xs text-slate-500">For editorial and attribution use</span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            <p className="bg-[#FBFBFE] p-5 rounded-2xl border border-purple-100 italic text-slate-700 font-serif text-sm sm:text-base">
              “Highway to Music (HTM) is an upcoming Indian e-commerce destination for musical
              instruments and professional audio equipment. Built under the positioning ‘More Than
              Instruments. A Highway to Your Sound.’, HTM connects musicians, educators, recording
              studios, beatmakers, and creators across India with authentic gear, transparent
              product discovery, and nationwide musical support.”
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#601BF4] block mb-1">
                  Brand Name
                </span>
                <p className="font-extrabold text-sm text-slate-900">
                  Highway to Music (HTM)
                </p>
              </div>
              <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#601BF4] block mb-1">
                  Brand Slogan
                </span>
                <p className="font-bold text-sm text-slate-900">
                  “More Than Instruments. A Highway to Your Sound.”
                </p>
              </div>
              <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#601BF4] block mb-1">
                  Official Launch Date
                </span>
                <p className="font-bold text-sm text-slate-900">
                  26 January 2027 (Republic Day)
                </p>
              </div>
              <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#601BF4] block mb-1">
                  Official Website
                </span>
                <p className="font-bold text-sm text-[#601BF4]">
                  https://highwaytomusic.com/
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Assets & Style Guide */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-purple-100 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
            Approved Brand Assets & Color Codes
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-8">
            Please use these high-resolution marks and hex color tokens when featuring Highway to
            Music in print or digital press.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-8 border-b border-purple-100">
            {/* Logo Preview */}
            <div className="p-8 rounded-2xl bg-[#FBFBFE] border border-purple-200 text-center flex flex-col items-center justify-center">
              <img
                src={BRAND_LOGO_SRC}
                alt="Highway to Music Official Logo"
                className="w-24 h-24 object-contain mb-4"
              />
              <span className="font-extrabold text-sm text-slate-900 block">
                Primary Transparent Logo
              </span>
              <span className="text-xs text-slate-500 mb-4">High-resolution PNG (Alpha)</span>
              <a
                href={BRAND_LOGO_SRC}
                download="Highway_To_Music_Official_Logo.png"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#601BF4] hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Asset</span>
              </a>
            </div>

            {/* Color Tokens */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#601BF4] shadow-xs" />
                  <div>
                    <span className="font-bold text-xs text-slate-900 block">Electric Purple</span>
                    <span className="text-[10px] text-slate-500">Primary Brand Accent</span>
                  </div>
                </div>
                <code className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                  #601BF4
                </code>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0F172A] shadow-xs" />
                  <div>
                    <span className="font-bold text-xs text-slate-900 block">Slate Navy</span>
                    <span className="text-[10px] text-slate-500">Dark Surfaces & Text</span>
                  </div>
                </div>
                <code className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                  #0F172A
                </code>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-purple-100 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FBFBFE] border border-slate-300 shadow-xs" />
                  <div>
                    <span className="font-bold text-xs text-slate-900 block">Clean White</span>
                    <span className="text-[10px] text-slate-500">Canvas Surface</span>
                  </div>
                </div>
                <code className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                  #FBFBFE
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Future Announcements & Milestones */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-purple-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Launch Roadmap & Announcements
              </h2>
              <span className="text-xs text-slate-500">Official scheduled milestones</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#FBFBFE] border border-purple-100 flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-purple-100 text-[#601BF4] font-black text-xs flex items-center justify-center shrink-0">
                01
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
                  Pre-Launch VIP Phase · Ongoing
                </span>
                <h3 className="font-bold text-sm text-slate-900 mt-0.5 mb-1">
                  VIP Waitlist & 1,000 HTM Coins Voucher Program
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Early community onboarding offering exclusive ₹1,000 launch credit vouchers on
                  qualifying purchases above ₹5,000.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBFBFE] border border-purple-100 flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-purple-100 text-[#601BF4] font-black text-xs flex items-center justify-center shrink-0">
                02
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
                  Creator Alpha · Late 2026
                </span>
                <h3 className="font-bold text-sm text-slate-900 mt-0.5 mb-1">
                  Musician & Studio Partner Preview
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Closed beta testing of catalogue filters, sound samples, and logistics testing
                  with selected Indian recording artists.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBFBFE] border border-purple-100 flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#601BF4] text-white font-black text-xs flex items-center justify-center shrink-0">
                03
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#601BF4]">
                  Grand Launch · 26 January 2027
                </span>
                <h3 className="font-bold text-sm text-slate-900 mt-0.5 mb-1">
                  Full Public E-Commerce Store Open
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Official opening of the complete e-commerce platform across 8 instrument
                  categories with pan-India delivery and dedicated musician support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Media Enquiry Form / Contact */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 p-8 sm:p-10 rounded-3xl border border-purple-200 text-center">
          <Mail className="w-10 h-10 text-[#601BF4] mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
            Media & Collaboration Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6">
            For press releases, interview requests, or creator sponsorships, please email our media
            team. We typically respond within 24–48 hours.
          </p>
          <div className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-purple-200 shadow-sm">
            <span className="font-mono font-bold text-xs sm:text-sm text-slate-800">
              {pressEmail}
            </span>
            <button
              onClick={copyEmail}
              className="text-xs font-bold text-[#601BF4] hover:underline cursor-pointer ml-2"
            >
              {copiedEmail ? 'Copied' : 'Copy'}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
