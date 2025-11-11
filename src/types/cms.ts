// Global site settings
export interface GlobalSettings {
  siteTitle: string;
  logo: string; // monochrome logo path
  navLinks: NavLink[];
  footerLinks: NavLink[];
  primaryCTA: {
    label: string;
    url: string;
  };
  businessInfo: {
    cvr: string;
    owner: string;
    credit: string;
  };
}

export interface NavLink {
  to: string;
  label: string;
}

// Home page
export interface HomePageData {
  eyebrow: string;
  h1: string;
  subtext: string;
  trustChips: TrustChip[];
  featuredWork: GalleryItem[];
  ctaSection: {
    heading: string;
    subtext: string;
  };
}

export interface TrustChip {
  text: string;
  icon?: string;
}

// Treatments page
export interface TreatmentsPageData {
  introText: string;
  services: Service[];
  note: string;
  cta: {
    label: string;
    url: string;
  };
}

export interface Service {
  name: string;
  blurb: string;
  fromPriceDKK: number;
}

// Gallery page
export interface GalleryPageData {
  items: GalleryItem[];
}

export interface GalleryItem {
  image: string;
  caption: string;
}

// Philosophy page
export interface PhilosophyPageData {
  heading: string;
  body: string[];
  privateAppointmentsStrip: {
    heading: string;
    text: string;
    cta: {
      label: string;
      url: string;
    };
  };
  values: PhilosophyValue[];
}

export interface PhilosophyValue {
  title: string;
  description: string;
}

// Team page
export interface TeamPageData {
  members: TeamMember[];
  joinTeam: {
    heading: string;
    text: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  portrait: string;
  bio: string;
  specialties: string[];
  certifications?: string[];
}

// Prices page
export interface PricesPageData {
  categories: PriceCategory[];
  note: string[];
  cta: {
    label: string;
    url: string;
  };
}

export interface PriceCategory {
  category: string;
  items: PriceItem[];
}

export interface PriceItem {
  name: string;
  duration: number; // in minutes
  fromPriceDKK: number;
  description?: string;
}

// Booking page
export interface BookingPageData {
  policies: PolicySnippet[];
  primaryCTA: {
    label: string;
    url: string;
  };
  ctaSubtext: string;
}

export interface PolicySnippet {
  title: string;
  description: string;
  points: string[];
}

// Contact page
export interface ContactPageData {
  introText: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  phone: string;
  email: string;
  byAppointmentOnly: boolean;
  mapEmbed: {
    enabled: boolean;
    url?: string;
  };
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
}

// Journal page
export interface JournalPageData {
  posts: JournalPost[];
}

export interface JournalPost {
  title: string;
  date: string;
  summary: string;
  body: string;
  coverImageBW: string;
}

// Policies page
export interface PoliciesPageData {
  sections: PolicySection[];
}

export interface PolicySection {
  title: string;
  body: string;
}

// SEO per page
export interface SEOData {
  [page: string]: PageSEO;
}

export interface PageSEO {
  title: string;
  metaDescription: string;
  openGraphImage: string;
}
