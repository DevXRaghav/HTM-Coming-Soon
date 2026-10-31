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

        {/* Logos in One Single Line Container */}
        <div className="inline-flex items-center justify-center gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 rounded-2xl bg-purple-50/60 border border-purple-100 shadow-xs max-w-full overflow-x-auto">
          {SOCIALS.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Highway To Music on ${item.name} (${item.handle})`}
              title={`${item.name}: ${item.handle}`}
              className={`group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-purple-200/80 shadow-2xs transition-all duration-200 hover:scale-110 active:scale-95 shrink-0 ${item.hoverBorder} ${item.bgColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#601BF4]`}
            >
              {renderIcon(item.icon)}
            </a>
          ))}

          {/* Quick Share with Bandmates Button inline */}
          <div className="h-8 w-px bg-purple-200 mx-1 shrink-0" aria-hidden="true" />
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share Highway To Music launch with bandmates"
            title={copiedLink ? 'Link Copied!' : 'Share with Bandmates'}
            className="flex items-center gap-2 px-3.5 sm:px-4 h-12 sm:h-14 rounded-xl bg-white hover:bg-purple-100/70 border border-purple-200/80 text-[#601BF4] font-bold text-xs sm:text-sm shadow-2xs transition-all duration-200 hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#601BF4]"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
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
