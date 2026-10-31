import React from 'react';
import {
  Sparkles,
  Guitar,
  Piano,
  Disc3,
  Mic2,
  Sliders,
  Cable,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Music2,
  Users,
  Compass,
  ShieldCheck,
  PackageCheck,
  Search,
} from 'lucide-react';
import { BRAND_LOGO_SRC } from '../components/Header';

interface AboutUsProps {
  onNavigateHome: () => void;
  onJoinVIP: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onNavigateHome, onJoinVIP }) => {
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
            <span>PRE-LAUNCH BRAND DOSSIER</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 bg-gradient-to-b from-purple-50/70 via-white to-[#FBFBFE]">
        <div className="absolute inset-0 bg-[radial-gradient(#601BF4_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-purple-200 shadow-sm text-xs font-semibold text-[#601BF4] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Highway to Music Story</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            More Than Instruments. <br />
            <span className="bg-gradient-to-r from-[#601BF4] via-purple-700 to-indigo-600 bg-clip-text text-transparent">
              A Highway to Your Sound.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            Every great sound starts somewhere. Highway to Music is being built to bring musical
            instruments, professional audio equipment, and the world of music closer to the people
            who create it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onJoinVIP}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#601BF4] hover:bg-[#5013D6] text-white text-sm font-bold shadow-lg shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Join the Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#story"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold border border-purple-200 transition-colors"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section id="story" className="py-16 sm:py-24 bg-white border-y border-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-[#601BF4]">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#601BF4]">
              Origin & Purpose
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
            The Idea Behind Highway to Music
          </h2>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6 leading-relaxed font-normal">
            <p>
              India is experiencing an unprecedented cultural renaissance in music. From bedroom
              beatmakers in Bengaluru and Pune, to gigging indie bands in Delhi and Mumbai, classical
              virtuosos in Chennai and Kolkata, and singer-songwriters across every tier of our
              country — more people are picking up instruments and producing music than ever before.
            </p>
            <p>
              Yet, the journey to finding the right musical instrument or professional audio gear
              has often felt fragmented. Musicians have historically navigated confusing catalogues,
              sparse technical details, inconsistent availability, and long delivery hurdles.
            </p>
            <p>
              <strong>Highway to Music (HTM)</strong> was conceived with a clear, ambitious purpose:
              to construct a modern, dedicated e-commerce sanctuary that unites passion for musical
              craftsmanship with digital-first transparency. We are not merely listing products; we
              are building a guided expressway for your musical path — from your very first acoustic
              strum to your next album’s final mix.
            </p>
          </div>

          {/* Core Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-purple-100">
            <div className="p-5 rounded-2xl bg-[#FBFBFE] border border-purple-100">
              <span className="text-2xl font-black text-[#601BF4] block mb-2">01</span>
              <h3 className="font-bold text-slate-900 text-base mb-1">Authenticity First</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Genuine gear, factory fresh warranties, and transparent technical specifications.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FBFBFE] border border-purple-100">
              <span className="text-2xl font-black text-[#601BF4] block mb-2">02</span>
              <h3 className="font-bold text-slate-900 text-base mb-1">Modern Music Culture</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reflecting how contemporary Indian artists compose, record, perform, and stream.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FBFBFE] border border-purple-100">
              <span className="text-2xl font-black text-[#601BF4] block mb-2">03</span>
              <h3 className="font-bold text-slate-900 text-base mb-1">Creator Accessibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Democratizing access to professional audio gear across all Indian pin codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Vision */}
      <section className="py-16 sm:py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#601BF4_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-purple-400 mb-4">
            Our North Star
          </span>

          <blockquote className="text-2xl sm:text-4xl font-black tracking-tight leading-snug mb-8 text-slate-100">
            “To become a destination where every musician, creator, and music enthusiast can discover
            the tools that bring their ideas to life.”
          </blockquote>

          <div className="w-16 h-1 bg-gradient-to-r from-[#601BF4] to-purple-400 mx-auto rounded-full" />
        </div>
      </section>

      {/* 4. What We're Building */}
      <section className="py-16 sm:py-24 bg-[#FBFBFE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#601BF4] block mb-2">
              Comprehensive Curation
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              What We’re Building
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore the core categories planned for the Highway to Music catalogue, engineered for
              every stage of musicianship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:border-[#601BF4]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
                <Guitar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Guitars & String Instruments</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Acoustic dreadnoughts, electric guitars, classical nylon strings, bass guitars,
                ukuleles, violins, and precision mandolins.
              </p>
              <span className="inline-block text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                Acoustic · Electric · Bass · Ukuleles · Violins
              </span>
            </div>

            {/* Category 2 */}
            <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:border-[#601BF4]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
                <Piano className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Keyboards & Pianos</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                88-key weighted digital pianos, portable arranger keyboards, analog and digital
                synthesizers, and tactile USB-MIDI controllers.
              </p>
              <span className="inline-block text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                Digital Pianos · Synths · MIDI Keyboards
              </span>
            </div>

            {/* Category 3 */}
            <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:border-[#601BF4]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
                <Disc3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Drums & Percussion</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Acoustic drum shells, mesh-head electronic drum kits, studio cymbals, cajons, Indian
                percussion, and hardware mounts.
              </p>
              <span className="inline-block text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                Electronic Kits · Acoustic Sets · Cymbals
              </span>
            </div>

            {/* Category 4 */}
            <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:border-[#601BF4]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
                <Mic2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Studio & Recording</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Multi-channel audio interfaces, condenser and dynamic studio mics, nearfield monitor
                speakers, and open-back headphones.
              </p>
              <span className="inline-block text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                Audio Interfaces · Mics · Studio Monitors
              </span>
            </div>

            {/* Category 5 */}
            <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:border-[#601BF4]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Professional Audio & Live</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Live performance mixing consoles, active column PA systems, wireless microphone
                systems, and in-ear monitor transmitters.
              </p>
              <span className="inline-block text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                PA Systems · Digital Mixers · Wireless IEMs
              </span>
            </div>

            {/* Category 6 */}
            <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:border-[#601BF4]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
                <Cable className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Software, Pedals & Gear</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Stompboxes, multi-effects units, DAWs, virtual instruments, oxygen-free copper
                cables, heavy-duty stands, and flight cases.
              </p>
              <span className="inline-block text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                DAWs & Plugins · Effect Pedals · Cables
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Who We're Building For */}
      <section className="py-16 sm:py-24 bg-white border-y border-purple-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#601BF4] block mb-2">
              Our Community
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Who We’re Building For
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every musical journey has unique demands. We design our experience around eight
              core creators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Beginners Discovering Music',
                desc: 'First-time players seeking trusted instrument starter kits and honest guidance.',
              },
              {
                title: 'Professional Musicians',
                desc: 'Touring artists needing road-ready durability, immaculate tone, and prompt support.',
              },
              {
                title: 'Guitarists & Instrumentalists',
                desc: 'Fretboard obsessives craving pickups, pedals, fretwire precision, and distinct tonewoods.',
              },
              {
                title: 'Music Producers',
                desc: 'In-the-box beatmakers and sound designers crafting beats with synths and tactile controllers.',
              },
              {
                title: 'Recording Studios',
                desc: 'Commercial and project studios needing high-grade converters, microphones, and monitors.',
              },
              {
                title: 'DJs & Live Performers',
                desc: 'Club, festival, and corporate performers who depend on robust mixers and crystal PA systems.',
              },
              {
                title: 'Educators & Institutions',
                desc: 'Music teachers and academies looking for durable student instruments and batch fulfillment.',
              },
              {
                title: 'Content Creators',
                desc: 'Streamers, podcasters, and YouTube musicians requiring clean USB mics and vocal routing.',
              },
            ].map((aud, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FBFBFE] border border-purple-100 hover:border-purple-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#601BF4] flex items-center justify-center font-bold text-xs mb-3 border border-purple-200">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-sm text-slate-900 mb-1.5">{aud.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Approach */}
      <section className="py-16 sm:py-24 bg-[#FBFBFE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#601BF4] block mb-2">
              Built on Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Planned Approach
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              How we intend to make musical instrument discovery and online purchasing in India
              radically better.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm flex items-start gap-4">
              <Search className="w-6 h-6 text-[#601BF4] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  Effortless Product Discovery & Comparison
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Instead of endless cluttered pages, find exactly what fits your hand size, budget,
                  and genre with standardized specifications and real-world audio samples.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#601BF4] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  Authenticity & Transparent Details
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every product page will showcase authentic materials, included accessories, and
                  clear warranty details so you know precisely what is arriving at your doorstep.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm flex items-start gap-4">
              <PackageCheck className="w-6 h-6 text-[#601BF4] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  Safe Musical Packaging & Nationwide Care
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Musical instruments demand delicate handling. We are designing multi-layered,
                  climate-insulated packaging to safeguard woods and electronics during transit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="py-20 bg-gradient-to-br from-[#601BF4] via-purple-700 to-indigo-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={BRAND_LOGO_SRC}
            alt="HTM Official Logo"
            className="w-14 h-14 mx-auto mb-6 object-contain brightness-0 invert"
          />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Your Sound. Your Journey. Our Highway.
          </h2>
          <p className="text-purple-100 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Be part of the founding community. Reserve your launch access, grab your ₹1,000 HTM
            Coins voucher, and count down with us to 26 January 2027.
          </p>
          <button
            onClick={onJoinVIP}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#601BF4] text-base font-extrabold shadow-2xl hover:bg-slate-100 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Get Early Access</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
