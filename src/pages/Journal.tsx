import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Sparkles,
  ArrowRight,
  Clock,
  Tag,
  CheckCircle2,
  X,
  Share2,
  Bookmark,
  SlidersHorizontal,
} from 'lucide-react';

interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Guitars' | 'Studio & Audio' | 'Keyboards' | 'Live Performance' | 'Beginners';
  readTime: string;
  excerpt: string;
  keyTakeaways: string[];
  outlineSections: {
    heading: string;
    points: string[];
  }[];
  seoKeywords: string[];
}

const ARTICLES: JournalArticle[] = [
  {
    id: 'art-1',
    slug: 'best-guitars-for-beginners-in-india',
    title: 'Best Guitars for Beginners in India: The Complete Buyer’s Guide',
    category: 'Guitars',
    readTime: '8 min read',
    excerpt:
      'Finding your first guitar shouldn’t be a guessing game. A breakdown of body sizes, tonewoods, fretboard comfort, action height, and budget brackets in India.',
    keyTakeaways: [
      'Why action height and neck profile matter more than brand hype for beginners.',
      'Dreadnought vs Concert size: which fits smaller hands and apartment living.',
      'Essential accessories: gig bag, clip-on chromatic tuner, and extra strings.',
      'Expected price brackets across entry-level laminate and solid top instruments.',
    ],
    outlineSections: [
      {
        heading: '1. Why Your First Guitar Can Make or Break Your Practice',
        points: [
          'High string action is the #1 reason beginners give up in month one.',
          'Selecting between laminate durability vs solid top resonance in Indian climates.',
        ],
      },
      {
        heading: '2. Dreadnought vs Concert vs Parlor Shapes',
        points: [
          'Dreadnought: big projection, strong low end, best for strumming.',
          'Concert / Auditorium: balanced response, comfortable sitting profile, ideal for fingerstyle.',
        ],
      },
      {
        heading: '3. What to Inspect Before Tuning Up',
        points: [
          'Fret sprout inspection during monsoon vs dry winter.',
          'Checking truss rod adjustability and tuning peg gear ratios.',
        ],
      },
    ],
    seoKeywords: [
      'best acoustic guitar beginners India',
      'guitar price India',
      'beginner guitar buying guide',
      'solid top vs laminate',
    ],
  },
  {
    id: 'art-2',
    slug: 'acoustic-vs-electric-guitar-which-one-should-you-buy',
    title: 'Acoustic vs Electric Guitar: Which One Should You Buy First?',
    category: 'Guitars',
    readTime: '6 min read',
    excerpt:
      'Debunking the age-old myth that beginners must start on acoustic. We compare finger fatigue, volume control, practice versatility, and cost of ownership.',
    keyTakeaways: [
      'Electric guitars feature thinner necks and lighter string tension, reducing initial finger soreness.',
      'Acoustic guitars offer unmatched grab-and-go portability with zero cables or amplification needed.',
      'Headphone practice makes electric guitars exceptionally friendly for Indian apartment homes.',
      'Budget calculation: electric requires budgeting for a practice amp or headphone amplifier.',
    ],
    outlineSections: [
      {
        heading: '1. Finger Pain & String Tension Realities',
        points: [
          'Gauge 0.009 electric strings vs Gauge 0.012 bronze acoustic strings.',
          'Neck thickness, scale lengths, and fingerboard radius comparison.',
        ],
      },
      {
        heading: '2. Apartment Living & Volume Management',
        points: [
          'Silent midnight practice using modern digital modeling amps with headphones.',
          'Acoustic resonance levels and sound dampener options.',
        ],
      },
      {
        heading: '3. The Total Cost Comparison in India',
        points: ['Amp + cable + guitar combo vs Acoustic guitar + padded gig bag.'],
      },
    ],
    seoKeywords: [
      'acoustic vs electric guitar',
      'which guitar to buy first',
      'guitar for apartment practice',
      'electric guitar starter guide',
    ],
  },
  {
    id: 'art-3',
    slug: 'best-musical-instruments-to-start-learning-music',
    title: 'Best Musical Instruments to Start Learning Music as an Adult or Teen',
    category: 'Beginners',
    readTime: '7 min read',
    excerpt:
      'It’s never too late to start playing. A realistic comparison of learning curves, time commitments, and instant gratification across keyboards, ukuleles, and drums.',
    keyTakeaways: [
      'Keyboard/Piano: Visual layout makes music theory and harmony click fastest.',
      'Ukulele: 4 nylon strings make chords painless and song-ready within days.',
      'Electronic Drums: Unbeatable for rhythm training and stress relief with low noise.',
      'Self-learning resources, YouTube pedagogy, and mobile tuner apps.',
    ],
    outlineSections: [
      {
        heading: '1. Visualizing Notes: Why Keyboard Is The Golden Gateway',
        points: [
          'Every semitone is linear and visible — no hidden fretboard intervals.',
          'Direct translation to modern digital audio workstation production.',
        ],
      },
      {
        heading: '2. The Ukulele Shortcut: Songs In 48 Hours',
        points: [
          'Nylon strings are soft on uncalloused fingertips.',
          'Compact travel companion for college students and commuters.',
        ],
      },
    ],
    seoKeywords: [
      'best instruments to learn music',
      'easiest musical instrument',
      'learning music adult India',
      'beginner music gear',
    ],
  },
  {
    id: 'art-4',
    slug: 'home-recording-studio-setup-for-beginners',
    title: 'Home Recording Studio Setup for Beginners: The 5 Essential Pillars',
    category: 'Studio & Audio',
    readTime: '10 min read',
    excerpt:
      'Build a broadcast-quality bedroom studio without overspending. The exact 5 pieces of hardware and software you need to record crisp vocals and instruments.',
    keyTakeaways: [
      'The 5 core elements: Audio interface, studio microphone, headphones, DAW, and room treatment.',
      'Why room acoustics frequently matter more than buying an expensive ₹50,000 microphone.',
      'Audio interface preamps and latency management on macOS and Windows.',
      'Free vs paid DAWs (Reaper, Ableton Live Lite, GarageBand, FL Studio).',
    ],
    outlineSections: [
      {
        heading: '1. Audio Interface: The Brain of Your Setup',
        points: [
          'Why your laptop headphone jack cannot handle studio condenser mics.',
          'XLR inputs, phantom power (48V), and Direct Monitoring switches.',
        ],
      },
      {
        heading: '2. Dynamic vs Condenser Mic for Untreated Bedrooms',
        points: [
          'Condenser mics capture every street horn and ceiling fan hum.',
          'Why dynamic broadcast mics often sound cleaner in typical Indian home rooms.',
        ],
      },
      {
        heading: '3. Acoustic Control on a Budget',
        points: ['DIY mattress positioning, heavy curtains, and bass trap placement.'],
      },
    ],
    seoKeywords: [
      'home recording studio setup India',
      'bedroom studio gear guide',
      'audio interface for beginners',
      'home studio budget India',
    ],
  },
  {
    id: 'art-5',
    slug: 'essential-equipment-for-a-professional-recording-studio',
    title: 'Essential Equipment for a Commercial Recording Studio in India',
    category: 'Studio & Audio',
    readTime: '9 min read',
    excerpt:
      'From pristine AD/DA converters and reference monitors to outboard preamps and talkback controllers: what commercial facilities invest in.',
    keyTakeaways: [
      'High-headroom multi-channel converters for simultaneous tracking.',
      'Nearfield reference monitors with room-correction DSP calibration.',
      'Professional patchbays and clean balanced cable infrastructure.',
      'Dedicated power conditioning to eliminate mains voltage fluctuations and ground hums.',
    ],
    outlineSections: [
      {
        heading: '1. Studio Signal Chain & Outboard Racks',
        points: ['Discrete mic preamplifiers, optical compressors, and parametric EQs.'],
      },
      {
        heading: '2. Critical Listening & Acoustic Isolation',
        points: ['Floating floors, double-glazed live room glass, and floating ceiling baffles.'],
      },
    ],
    seoKeywords: [
      'commercial recording studio equipment',
      'studio gear list India',
      'professional audio converters',
      'outboard rack gear',
    ],
  },
  {
    id: 'art-6',
    slug: 'how-to-choose-the-right-audio-interface',
    title: 'How to Choose the Right Audio Interface: 2-Channel vs Multi-Input',
    category: 'Studio & Audio',
    readTime: '7 min read',
    excerpt:
      'Understanding preamps, EIN noise floor, dynamic range, USB-C bus power, and ADAT optical expansion before spending your budget.',
    keyTakeaways: [
      '2-in / 2-out is optimal for singer-songwriters, podcasters, and beatmakers.',
      'Drums and multi-instrument tracking require 4 to 8 analog preamps with ADAT expansion.',
      'Look for low Equivalent Input Noise (EIN < -128 dBu) for clean acoustic guitar recordings.',
      'ASIO driver stability on Windows vs CoreAudio plug-and-play on Mac.',
    ],
    outlineSections: [
      {
        heading: '1. Inputs, Preamps & Hi-Z Instrument Jacks',
        points: ['Direct injection for electric guitar pickups without signal clipping.'],
      },
      {
        heading: '2. Zero-Latency Direct Monitoring Explained',
        points: ['Eliminating buffer delays while tracking vocal overdubs.'],
      },
    ],
    seoKeywords: [
      'how to choose audio interface',
      'best audio interface India',
      'USB-C audio interface comparison',
      'audio interface specs explained',
    ],
  },
  {
    id: 'art-7',
    slug: 'beginners-guide-to-midi-keyboards',
    title: 'Beginner’s Guide to MIDI Keyboards: Keys, Pads, Knobs & Compatibility',
    category: 'Keyboards',
    readTime: '6 min read',
    excerpt:
      'Demystifying MIDI: why a controller produces no sound on its own, and how it unlocks hundreds of instruments inside your computer.',
    keyTakeaways: [
      '25-key vs 49-key vs 61-key vs 88-key: finding the sweet spot for your desk size.',
      'Synth-action vs semi-weighted vs hammer-action keybeds.',
      'Velocity-sensitive drum pads for finger drumming and beat programming.',
      'DAW transport controls that speed up your music production workflow.',
    ],
    outlineSections: [
      {
        heading: '1. What Exactly Is MIDI?',
        points: ['Transmitting performance data (pitch, velocity, timing) rather than audio.'],
      },
      {
        heading: '2. Portability vs Two-Handed Playing',
        points: ['25 keys for backpack traveling vs 49-61 keys for two-handed piano chords.'],
      },
    ],
    seoKeywords: [
      'MIDI keyboard guide beginners',
      'best MIDI controller India',
      '25 key vs 49 key MIDI',
      'music production keyboard',
    ],
  },
  {
    id: 'art-8',
    slug: 'essential-equipment-for-live-performances',
    title: 'Essential Equipment for Live Performances: From Coffeehouse Gigs to Clubs',
    category: 'Live Performance',
    readTime: '8 min read',
    excerpt:
      'Never get caught unprepared on stage. The gig bag checklist every live performer, band, and acoustic solo artist in India should carry.',
    keyTakeaways: [
      'Active Direct Input (DI) boxes to balance acoustic guitar and keyboard outputs.',
      'Reliable XLR cables, spare 1/4-inch instrument cables, and IEC power cables.',
      'Personal in-ear monitoring vs wedge monitors for vocal clarity.',
      'Stage survival kit: gaffer tape, string winders, 9V batteries, and plug adapters.',
    ],
    outlineSections: [
      {
        heading: '1. The Soundcheck Ritual',
        points: ['Communicating channel lists with venue front-of-house (FOH) sound engineers.'],
      },
      {
        heading: '2. Battery and Power Redundancy',
        points: ['Surviving ungrounded venue sockets with noise-filtering power strips.'],
      },
    ],
    seoKeywords: [
      'live performance gear checklist',
      'stage equipment for musicians',
      'acoustic guitar live gig gear',
      'in ear monitors stage India',
    ],
  },
  {
    id: 'art-9',
    slug: 'how-to-choose-the-right-guitar-for-your-playing-style',
    title: 'How to Choose the Right Guitar for Your Playing Style: Tonewoods & Pickups',
    category: 'Guitars',
    readTime: '9 min read',
    excerpt:
      'Single-coil chime vs humbucker punch, spruce clarity vs mahogany warmth: match tonewoods and pickup configurations to your favorite genre.',
    keyTakeaways: [
      'Spruce tops deliver bright dynamic projection; Mahogany gives warm, punchy midrange.',
      'Single coils excel at funk, indie, and clean blues; Humbuckers handle high-gain rock without 60Hz hum.',
      'Scale length (25.5" vs 24.75") dictates string tension and fret bending feel.',
      'Rosewood, laurel, and maple fingerboards: tonal and maintenance differences.',
    ],
    outlineSections: [
      {
        heading: '1. The Acoustic Tonewood Matrix',
        points: [
          'Sitka Spruce vs Mahogany vs Cedar for fingerstyle warmth.',
          'Solid woods vs high-pressure laminates in changing humidity.',
        ],
      },
      {
        heading: '2. The Electric Pickup Anatomy',
        points: ['SSS vs HSS vs HH configurations for maximum tonal versatility.'],
      },
    ],
    seoKeywords: [
      'guitar tonewoods explained',
      'single coil vs humbucker',
      'choose guitar for genre',
      'electric guitar pickup types',
    ],
  },
];

interface JournalProps {
  onNavigateHome: () => void;
  onJoinVIP: () => void;
}

export const Journal: React.FC<JournalProps> = ({ onNavigateHome, onJoinVIP }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  const categories = ['All', 'Guitars', 'Studio & Audio', 'Keyboards', 'Live Performance', 'Beginners'];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.seoKeywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

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
            <span>EDITORIAL KNOWLEDGE HUB</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="py-12 sm:py-20 bg-gradient-to-b from-purple-50/60 to-transparent border-b border-purple-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-purple-200 shadow-sm text-xs font-semibold text-[#601BF4] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Highway to Music Editorial Journal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Gear Insights, Guides & <br />
            <span className="bg-gradient-to-r from-[#601BF4] to-indigo-600 bg-clip-text text-transparent">
              Musician Knowledge
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal mb-8">
            Deep dives, gear comparisons, and expert advice crafted specifically for India's music
            makers. Discover our upcoming launch editorial series.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gear guides (e.g. guitars, audio interface, home studio)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-purple-200 focus:outline-none focus:ring-2 focus:ring-[#601BF4] text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-sm"
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#601BF4] text-white shadow-md shadow-purple-500/20'
                  : 'bg-white text-slate-600 border border-purple-100 hover:border-purple-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-purple-100/90 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#601BF4] bg-purple-50 px-2.5 py-1 rounded-md">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-slate-600" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#601BF4] transition-colors leading-snug mb-3">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Key Takeaways */}
                <div className="bg-[#FBFBFE] p-3.5 rounded-xl border border-purple-100 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-2">
                    Key Guide Takeaways:
                  </span>
                  <ul className="space-y-1.5">
                    {article.keyTakeaways.slice(0, 2).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-purple-50 flex items-center justify-between mt-auto">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                  <Sparkles className="w-3 h-3" />
                  <span>Publishing at Launch</span>
                </span>
                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#601BF4] hover:text-[#5013D6] transition-colors cursor-pointer"
                >
                  <span>Preview Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Notice Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-purple-50 border border-purple-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#601BF4] block mb-1">
              Pre-Launch Content Commitment
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1">
              Authentic Knowledge. Zero Fluff.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              We never fabricate shallow reviews or AI filler. Each article above is currently being
              authored and rigorously tested by professional audio engineers, educators, and guitar
              luthiers for release alongside our launch.
            </p>
          </div>
          <button
            onClick={onJoinVIP}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#601BF4] hover:bg-[#5013D6] text-white text-xs sm:text-sm font-bold shadow-md shadow-purple-500/25 transition-all cursor-pointer"
          >
            Get Notified of Full Releases
          </button>
        </div>
      </main>

      {/* Article Syllabus / Preview Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-purple-100 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-purple-100 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#601BF4] bg-purple-50 px-2.5 py-1 rounded-md mb-2 inline-block">
                  {activeArticle.category} · {activeArticle.readTime}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors shrink-0 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Editorial Abstract
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-[#FBFBFE] p-4 rounded-xl border border-purple-100">
                  {activeArticle.excerpt}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Comprehensive Syllabus & Chapter Breakdown
                </h4>
                <div className="space-y-4">
                  {activeArticle.outlineSections.map((sec, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-purple-50/40 border border-purple-100">
                      <h5 className="font-bold text-sm text-slate-900 mb-2">{sec.heading}</h5>
                      <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-600">
                        {sec.points.map((p, pIdx) => (
                          <li key={pIdx}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Target Search Queries & Research Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeArticle.seoKeywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-lg"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-6 mt-6 border-t border-purple-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Full in-depth guide drops 26 Jan 2027</span>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onJoinVIP();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#601BF4] hover:bg-[#5013D6] text-white text-xs font-bold transition-all cursor-pointer"
              >
                Join VIP for Early Access
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
