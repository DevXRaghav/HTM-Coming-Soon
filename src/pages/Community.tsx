import React, { useState } from 'react';
import {
  Users,
  Sparkles,
  Heart,
  CheckCircle2,
  Send,
  GraduationCap,
  Radio,
  Mic,
  Disc,
  Building2,
  Video,
  ArrowRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CommunityProps {
  onNavigateHome: () => void;
  onJoinVIP: () => void;
}

export const Community: React.FC<CommunityProps> = ({ onNavigateHome, onJoinVIP }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Musician / Instrumentalist',
    city: '',
    collaborationInterest: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    try {
      const existing = JSON.parse(localStorage.getItem('htm_community_submissions') || '[]');
      existing.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('htm_community_submissions', JSON.stringify(existing));
    } catch (err) {
      console.warn('Storage save failed', err);
    }

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#601BF4', '#A855F7', '#EC4899', '#FFFFFF'],
      });
    } catch {}
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
            <span>CREATOR & ARTIST NETWORK</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-purple-50/70 via-white to-[#FBFBFE] border-b border-purple-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-purple-200 shadow-sm text-xs font-semibold text-[#601BF4] mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Highway to Music Community</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Music Is Better <br />
            <span className="bg-gradient-to-r from-[#601BF4] to-pink-600 bg-clip-text text-transparent">
              When We’re Connected.
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Instruments are only the beginning. Highway to Music is dedicated to fostering genuine
            synergy across Indian musicians, teachers, studios, beatmakers, and storytellers.
          </p>

          <a
            href="#join-community"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#601BF4] hover:bg-[#5013D6] text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>Be Part of the HTM Community</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Six Pillars of Creators */}
      <section className="py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#601BF4] block mb-2">
            Ecosystem Network
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Who Shapes the HTM Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
              <Mic className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1.5">Musicians & Songwriters</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              From college band frontmen to solo acoustic acts, share your original music, test
              gear, and collaborate on national showcase opportunities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1.5">Music Educators & Academies</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Empowering guru-shishya institutions and contemporary music schools with verified
              student instrument packages and pedagogical resources.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1.5">Content Creators & Streamers</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gear review access, exclusive pre-release demos, affiliate opportunities, and
              production equipment for YouTube, Instagram, and live streamers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1.5">Recording Artists & Vocalists</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vocal chain testing, touring wireless recommendations, and customized artist support
              tailored to regional touring circuits.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
              <Disc className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1.5">Music Producers & Sound Designers</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sample library feedback, beta testing hardware synths, and sharing custom patch
              presets across India’s electronic and hip-hop producers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-purple-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#601BF4] flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1.5">Commercial Studios & Sound Stages</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Connecting commercial live rooms and mastering engineers with direct manufacturer
              cables, replacement parts, and critical calibration.
            </p>
          </div>
        </div>
      </section>

      {/* Community Early-Interest & Collaboration Form */}
      <section id="join-community" className="py-16 sm:py-20 bg-white border-t border-purple-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#601BF4] block mb-2">
              Early Collaboration Interest
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Join the HTM Creator Network
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Tell us about your creative craft and what kind of partnerships, workshops, or gear
              programs you would like to explore with us.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-3xl bg-purple-50 border border-purple-200 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">
                Welcome to the HTM Community!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Thank you for reaching out. We have logged your interest and will contact you directly
                as our creator beta rounds roll out ahead of our 26 January 2027 grand launch.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-bold text-[#601BF4] hover:underline"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#FBFBFE] p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arjun Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#601BF4]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. arjun@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#601BF4]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Creative Role / Identity
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#601BF4]"
                  >
                    <option>Musician / Instrumentalist</option>
                    <option>Music Producer / Beatmaker</option>
                    <option>Music Teacher / Educator</option>
                    <option>Recording Studio Engineer</option>
                    <option>Content Creator / Streamer</option>
                    <option>Music Enthusiast / Collector</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    City / State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bengaluru, Karnataka"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#601BF4]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  How Would You Like to Collaborate?
                </label>
                <textarea
                  rows={3}
                  placeholder="Share what gear you use, workshop ideas, or what you'd love to see on Highway to Music..."
                  value={formData.collaborationInterest}
                  onChange={(e) =>
                    setFormData({ ...formData, collaborationInterest: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#601BF4] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#601BF4] hover:bg-[#5013D6] text-white text-xs sm:text-sm font-bold shadow-md shadow-purple-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Collaboration Interest</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
