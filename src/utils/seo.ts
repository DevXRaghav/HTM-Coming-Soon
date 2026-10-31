/**
 * Highway To Music - SEO Engine & Structured Data Architecture
 * Tailored for Googlebot, Bingbot, Perplexity, GPTBot, and Gemini Search Grounding.
 */

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
  ogType: string;
}

export const BASE_URL = 'https://highwaytomusic.com';

export const PAGES_META: Record<string, PageMeta> = {
  '/': {
    title: "Highway To Music | India's No. 1 Music Store – Coming Soon 26 Jan 2027",
    description:
      "Highway To Music (HTM) is India's upcoming premier destination for musical instruments and professional audio equipment. Claim ₹1,000 launch coins & VIP early access.",
    canonical: `${BASE_URL}/`,
    keywords: [
      'Highway to Music',
      'HTM',
      'music store India',
      'musical instruments online India',
      'buy guitars India',
      'pro audio India',
      'studio equipment India',
      'keyboard piano India',
      'drums India',
      'coming soon music store',
    ],
    ogType: 'website',
  },
  '/about-us': {
    title: 'About Us | Highway To Music – More Than Instruments. A Highway to Your Sound.',
    description:
      'Discover the story, vision, and upcoming instrument categories behind Highway To Music. We are building India’s dedicated destination for musicians, producers, and creators.',
    canonical: `${BASE_URL}/about-us`,
    keywords: [
      'About Highway to Music',
      'HTM India story',
      'music equipment brand India',
      'guitar store India',
      'pro audio destination',
      'music producer gear India',
      'recording studio equipment',
    ],
    ogType: 'article',
  },
  '/journal': {
    title: 'Our Journal & Buyer Guides | Highway To Music – Gear Insights & Tutorials',
    description:
      'Expert instrument guides, beginner guitar recommendations, home recording studio walkthroughs, and audio interface comparisons by Highway To Music.',
    canonical: `${BASE_URL}/journal`,
    keywords: [
      'best guitars for beginners India',
      'acoustic vs electric guitar',
      'home recording studio setup',
      'audio interface buying guide',
      'MIDI keyboard guide',
      'music production India',
      'HTM journal',
    ],
    ogType: 'blog',
  },
  '/community': {
    title: 'Musician & Creator Community | Highway To Music – Music Is Better Connected',
    description:
      'Join the Highway To Music creator & artist network. Connecting Indian musicians, music teachers, audio engineers, recording artists, and studios.',
    canonical: `${BASE_URL}/community`,
    keywords: [
      'Indian musicians community',
      'music creators India',
      'audio engineers network',
      'music educators India',
      'HTM community',
      'music collaboration India',
    ],
    ogType: 'website',
  },
  '/press': {
    title: 'Press & Media Kit | Highway To Music – Brand Assets & Announcements',
    description:
      'Official brand resources, logos, press boilerplate, and media contact for Highway To Music (HTM), India’s upcoming e-commerce music destination.',
    canonical: `${BASE_URL}/press`,
    keywords: [
      'Highway to Music press kit',
      'HTM brand assets',
      'music e-commerce launch news',
      'HTM logo download',
      'music industry India PR',
    ],
    ogType: 'website',
  },
};

export const HTM_ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MusicStore',
  name: 'Highway To Music',
  alternateName: ['HTM', 'Highway To Music India'],
  url: BASE_URL,
  logo: `${BASE_URL}/assets/aistudio/logo_transparent.png`,
  image: `${BASE_URL}/assets/aistudio/logo_transparent.png`,
  description:
    'Highway To Music is an upcoming Indian e-commerce destination for musical instruments, guitars, studio recording equipment, keyboards, drums, and pro audio gear.',
  slogan: 'More Than Instruments. A Highway to Your Sound.',
  foundingLocation: {
    '@type': 'Country',
    name: 'India',
  },
  sameAs: [
    'https://instagram.com/Highwaytomusicofficial',
    'https://youtube.com/@Highwaytomusicofficial',
    'https://x.com/Highwaytomusic',
    'https://facebook.com/Highwaytomusicofficial',
    'https://open.spotify.com/user/Highwaytomusicofficial',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/journal?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export function updatePageSEO(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const meta = PAGES_META[normalizedPath] || PAGES_META['/'];

  // Update Title
  document.title = meta.title;

  // Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', meta.description);

  // Update Keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', meta.keywords.join(', '));

  // Update Canonical
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', meta.canonical);

  // Update OpenGraph
  const setMetaProperty = (prop: string, content: string) => {
    let el = document.querySelector(`meta[property="${prop}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', prop);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMetaProperty('og:title', meta.title);
  setMetaProperty('og:description', meta.description);
  setMetaProperty('og:url', meta.canonical);
  setMetaProperty('og:type', meta.ogType);
  setMetaProperty('og:site_name', 'Highway To Music');

  // Inject or update JSON-LD Schema
  let schemaScript = document.getElementById('htm-json-ld');
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'htm-json-ld';
    schemaScript.setAttribute('type', 'application/ld+json');
    document.head.appendChild(schemaScript);
  }

  // Build breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${BASE_URL}/`,
      },
      ...(normalizedPath !== '/'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: meta.title.split('|')[0].trim(),
              item: meta.canonical,
            },
          ]
        : []),
    ],
  };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [HTM_ORGANIZATION_SCHEMA, breadcrumbSchema],
  };

  schemaScript.textContent = JSON.stringify(schemaGraph, null, 2);
}
