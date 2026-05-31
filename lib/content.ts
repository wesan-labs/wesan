/* Content loader — single source for all site copy.
   For now: static JSON import. Later: swap to CMS fetch. */

import en from '../content/en.json';

export type Lang = 'en';

export type Tone = 'architecture' | 'workstation' | 'stage' | 'industrial' | 'dawn' | 'geology';

export interface Tag {
  label: string;
  variant?: 'default' | 'accent' | 'dashed' | 'solid';
}

export interface CTA {
  href: string;
  label: string;
  variant?: 'default' | 'solid' | 'ghost';
}

export interface NavLink {
  href: string;
  label: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export interface PhotoBlock {
  tone: Tone;
  ratio: string;
  caption?: string;
  label?: string;
  overlay?: string;
}

export interface SectionHeadCopy {
  num?: string;
  label?: string;
  title?: string | null;
  sub?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export interface TelemetryItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface BentoCard {
  href: string;
  size: 'b-1' | 'b-2' | 'b-3' | 'b-4';
  tone: Tone;
  arr: string;
  label: string;
  title: string;
  titleSize?: number;
  desc: string;
  tags?: string[];
}

export type MissionBlock =
  | { kind: 'p'; lead?: boolean; text: string }
  | { kind: 'h2'; text: string }
  | { kind: 'figure'; src: string; alt: string; caption: string; credit: string }
  | { kind: 'hr' }
  | { kind: 'quote'; text: string }
  | { kind: 'sign'; text: string };

export type NewsBodyBlock =
  | { kind: 'p'; content: string }
  | { kind: 'h'; content: string }
  | { kind: 'quote'; content: string }
  | { kind: 'list'; content: string[] };

export interface Role {
  slug: string;
  div: 'SFT' | 'STU';
  team: string;
  product: string;
  name: string;
  desc: string;
  where: string;
  type: string;
  lede: string;
  responsibilities: string[];
  firstSixMonths: string[];
  requirements: string[];
  niceToHave: string[];
  comp: string;
  reportingTo: string;
  teamMeta: string;
}

export type Division = 'WESAN' | 'SOFTWARE' | 'STUDIO' | 'INDUSTRIES';

export interface NewsItem {
  slug: string;
  date: string;
  who: Division;
  what: string;
  lede: string;
  featured?: boolean;
  body: NewsBodyBlock[];
  links?: { label: string; href: string }[];
  contact?: string;
}

export interface ContentBundle {
  _meta: { lang: Lang; version: string; updated: string };
  common: {
    brand: string;
    tagline: string;
    founded: string;
    location: string;
    year: string;
    footerCopyright: string;
    footerEst: string;
    footerStatus: string;
  };
  nav: {
    links: NavLink[];
    search: string;
    searchPlaceholder: string;
    contact: string;
  };
  footer: {
    blurb: string;
    columns: FooterColumn[];
  };
  pages: {
    home: HomeContent;
    mission: MissionContent;
    now: NowContent;
    careers: CareersIndexContent;
    contact: ContactContent;
    newsroomIndex: NewsroomIndexContent;
    newsroomDetail: NewsroomDetailLabels;
  } & Record<string, unknown>;
  collections: {
    careers: Role[];
    newsroom: NewsItem[];
  };
}

// --- Page-specific content shapes ---

export interface HomeContent {
  hero: {
    tags: Tag[];
    fig: string;
    title: string;
    lead: string;
    ctas: CTA[];
  };
  heroPhoto: PhotoBlock;
  telemetry: TelemetryItem[];
  marquee: { label: string; items: string[] };
  manifesto: { num: string; label: string; body: string };
  divisionsHead: SectionHeadCopy;
  bento: BentoCard[];
  newsroomHead: SectionHeadCopy;
  newsroomSlugs: string[];
  founderLetter: {
    label: string;
    quote: string;
    ctaHref: string;
    ctaLabel: string;
  };
}

export interface MissionContent {
  tags: Tag[];
  title: string;
  body: MissionBlock[];
  continue: {
    label: string;
    links: NavLink[];
  };
}

export interface NowContent {
  head: SectionHeadCopy;
  tags: Tag[];
  lead: string;
  thisMonth: {
    heading: string;
    items: { n: string; text: string }[];
  };
  divisions: {
    heading: string;
    cards: { label: string; body: string }[];
  };
  onMyMind: {
    heading: string;
    body: string;
  };
  sign: string;
  convention: string;
}

export interface CareersIndexContent {
  head: SectionHeadCopy;
  industriesNote: string;
  whatYouGet: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  detail: {
    telemetryLabels: [string, string, string, string];
    responsibilitiesHead: SectionHeadCopy;
    firstSixHead: SectionHeadCopy;
    requirementsLabel: string;
    niceLabel: string;
    compHead: SectionHeadCopy;
    applyHead: SectionHeadCopy;
    applyBody: string;
    applyChecklist: string[];
    applyFooter: string;
    otherHead: SectionHeadCopy;
  };
}

export interface ContactContent {
  head: SectionHeadCopy;
  channels: { label: string; addr: string; hint: string }[];
  officesHead: SectionHeadCopy;
  offices: {
    label: string;
    lines: string[];
    telemetry: [string, string][];
  }[];
  stamp: string;
}

export interface NewsroomIndexContent {
  head: SectionHeadCopy;
  filters: string[];
  yearLabel: string;
  featuredLabel: string;
  releaseLabel: string;
  readCta: string;
  pressLabel: string;
  endLabel: string;
}

export interface NewsroomDetailLabels {
  backLabel: string;
  releaseLabel: string;
  featuredLabel: string;
  relatedLabel: string;
  pressLabel: string;
  olderLabel: string;
  newerLabel: string;
  backToList: string;
}

// --- Loader ---

export function getContent(_lang: Lang = 'en'): ContentBundle {
  // When CMS lands: switch on lang, fetch, return.
  return en as unknown as ContentBundle;
}

// --- Helpers ---

export function getRole(slug: string, lang: Lang = 'en'): Role | undefined {
  return getContent(lang).collections.careers.find((r) => r.slug === slug);
}

export function getRoles(lang: Lang = 'en'): Role[] {
  return getContent(lang).collections.careers;
}

export function getNewsItem(slug: string, lang: Lang = 'en'): NewsItem | undefined {
  return getContent(lang).collections.newsroom.find((i) => i.slug === slug);
}

export function getNewsItems(lang: Lang = 'en'): NewsItem[] {
  return getContent(lang).collections.newsroom;
}

export function getNewsBySlugs(slugs: string[], lang: Lang = 'en'): NewsItem[] {
  const all = getNewsItems(lang);
  return slugs.map((s) => all.find((i) => i.slug === s)).filter((x): x is NewsItem => !!x);
}
