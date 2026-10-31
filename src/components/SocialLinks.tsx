import React, { useState } from 'react';
import {
  Instagram,
  Youtube,
  Twitter,
  Music,
  MessageCircle,
  Share2,
  Check,
  Facebook,
} from 'lucide-react';

interface SocialItem {
  name: string;
  url: string;
  handle: string;
  icon: 'instagram' | 'youtube' | 'twitter' | 'spotify' | 'whatsapp' | 'facebook';
  bgColor: string;
  textColor: string;
  hoverBorder: string;
}

export const SocialLinks: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const SOCIALS: SocialItem[] = [
    {
      name: 'Instagram',
      handle: '@Highwaytomusicofficial',
      url: 'https://instagram.com/Highwaytomusicofficial',
      icon: 'instagram',
      bgColor: 'hover:bg-[#E1306C]/10',
      textColor: 'text-[#E1306C]',
      hoverBorder: 'hover:border-[#E1306C]/50',
    },
    {
      name: 'YouTube',
      handle: '@Highwaytomusicofficial',
      url: 'https://youtube.com/@Highwaytomusicofficial',
      icon: 'youtube',
      bgColor: 'hover:bg-[#FF0000]/10',
      textColor: 'text-[#FF0000]',
      hoverBorder: 'hover:border-[#FF0000]/50',
    },
    {
      name: 'X (Twitter)',
      handle: '@Highwaytomusicofficial',
      url: 'https://x.com/Highwaytomusicofficial',
      icon: 'twitter',
      bgColor: 'hover:bg-slate-900/10',
      textColor: 'text-slate-900',
      hoverBorder: 'hover:border-slate-900/40',
    },
    {
      name: 'Spotify',
      handle: 'Highway To Music',
      url: 'https://open.spotify.com',
      icon: 'spotify',
      bgColor: 'hover:bg-[#1DB954]/10',
      textColor: 'text-[#1DB954]',
      hoverBorder: 'hover:border-[#1DB954]/50',
    },
    {
      name: 'WhatsApp',
      handle: 'Musicians Greenroom',
      url: 'https://chat.whatsapp.com',
      icon: 'whatsapp',
      bgColor: 'hover:bg-[#25D366]/10',
      textColor: 'text-[#25D366]',
      hoverBorder: 'hover:border-[#25D366]/50',
    },
    {
      name: 'Facebook',
      handle: 'Highwaytomusicofficial',
      url: 'https://facebook.com/Highwaytomusicofficial',
      icon: 'facebook',
      bgColor: 'hover:bg-[#1877F2]/10',
      textColor: 'text-[#1877F2]',
      hoverBorder: 'hover:border-[#1877F2]/50',
    },
  ];

  const handleShare = async () => {
    const shareData = {
      title: "Highway To Music | India's No. 1 Music Store",
      text: "Highway To Music is launching 26 January 2027! Join the VIP waitlist to claim ₹1,000 launch voucher:",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fall back to clipboard if dismissed
      }
    }

    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const renderIcon = (icon: SocialItem['icon']) => {
    switch (icon) {
      case 'instagram':
        return <Instagram className="w-6 h-6 text-[#E1306C]" />;
      case 'youtube':
        return <Youtube className="w-6 h-6 text-[#FF0000]" />;
      case 'twitter':
        return <Twitter className="w-6 h-6 text-slate-900" />;
      case 'spotify':
        return <Music className="w-6 h-6 text-[#1DB954]" />;
      case 'whatsapp':
        return <MessageCircle className="w-6 h-6 text-[#25D366]" />;
      case 'facebook':
        return <Facebook className="w-6 h-6 text-[#1877F2]" />;
    }
  };

  return (
    <section id="community" className="py-16 sm:py-20 bg-white border-t border-purple-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Clean, Focused Community Header */}
        <div className="max-w-2xl mx-auto mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#601BF4] mb-2">
            Social & Community
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Join the Largest Community
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Connect with 150,000+ Indian musicians, gearheads, and creators across our official channels.
          </p>
        </div>

        {/* Logos in One Single Line Container - Beautiful & Mobile Friendly */}
        <div className="inline-flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 p-1.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-white border border-purple-100 shadow-sm max-w-full">
          {/* Instagram */}
          <a
            href="https://instagram.com/Highwaytomusicofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Highway To Music on Instagram (@Highwaytomusicofficial)"
            title="Instagram: @Highwaytomusicofficial"
            className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#d6249f] p-[1.5px] shadow-2xs hover:shadow-md hover:shadow-pink-500/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shrink-0"
          >
            <div className="w-full h-full bg-white group-hover:bg-transparent rounded-[10px] sm:rounded-[14px] flex items-center justify-center transition-colors">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-[#d6249f] group-hover:text-white transition-colors" />
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@Highwaytomusicofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Subscribe to Highway To Music on YouTube"
            title="YouTube: @Highwaytomusicofficial"
            className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-xl sm:rounded-2xl bg-[#FF0000]/10 hover:bg-[#FF0000] border border-[#FF0000]/20 hover:border-[#FF0000] shadow-2xs hover:shadow-md hover:shadow-red-500/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shrink-0"
          >
            <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF0000] group-hover:text-white transition-colors" />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/Highwaytomusicofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Highway To Music on X"
            title="X (Twitter): @Highwaytomusicofficial"
            className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-xl sm:rounded-2xl bg-slate-900/5 hover:bg-black border border-slate-200 hover:border-black shadow-2xs hover:shadow-md hover:shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shrink-0"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800 group-hover:text-white transition-colors" />
          </a>

          {/* Spotify */}
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Highway To Music Playlists on Spotify"
            title="Spotify: Highway To Music"
            className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-xl sm:rounded-2xl bg-[#1DB954]/10 hover:bg-[#1DB954] border border-[#1DB954]/20 hover:border-[#1DB954] shadow-2xs hover:shadow-md hover:shadow-emerald-500/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shrink-0"
          >
            <Music className="w-5 h-5 sm:w-6 sm:h-6 text-[#1DB954] group-hover:text-white transition-colors" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://chat.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Indian Musicians Greenroom on WhatsApp"
            title="WhatsApp: Musicians Greenroom"
            className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-xl sm:rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/20 hover:border-[#25D366] shadow-2xs hover:shadow-md hover:shadow-green-500/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shrink-0"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366] group-hover:text-white transition-colors" />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/Highwaytomusicofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Like Highway To Music on Facebook"
            title="Facebook: @Highwaytomusicofficial"
            className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-xl sm:rounded-2xl bg-[#1877F2]/10 hover:bg-[#1877F2] border border-[#1877F2]/20 hover:border-[#1877F2] shadow-2xs hover:shadow-md hover:shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shrink-0"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-[#1877F2] group-hover:text-white transition-colors" />
          </a>

          {/* Subtle Vertical Divider */}
          <div className="h-6 sm:h-7 w-px bg-purple-200/80 mx-0.5 sm:mx-1 shrink-0" aria-hidden="true" />

          {/* Quick Share with Bandmates Button */}
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share Highway To Music launch with bandmates"
            title={copiedLink ? 'Link Copied!' : 'Share with Bandmates'}
            className="flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 h-10 sm:h-12 md:h-13 rounded-xl sm:rounded-2xl bg-purple-50 hover:bg-[#601BF4] border border-purple-200/80 hover:border-[#601BF4] text-[#601BF4] hover:text-white font-bold text-xs shadow-2xs hover:shadow-md hover:shadow-purple-600/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#601BF4]"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 group-hover:text-white" />
                <span className="text-[11px] sm:text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">Share</span>
              </>
            )}
          </button>
        </div>

        {/* Quiet Subtext - Selected Element */}
        <div className="mt-4 text-xs text-slate-600">
          Official handle: <span className="font-bold text-[#601BF4]">@Highwaytomusicofficial</span> across all networks
        </div>
      </div>
    </section>
  );
};
