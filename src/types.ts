export interface Product {
  id: string;
  name: string;
  grade: string;
  description: string;
  thickness: string;
  density: string;
  origin: string;
  priceEstimate?: string;
  features: string[];
  image: string;
  accentText?: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Masjid" | "Mushola" | "Kantor" | "Hotel" | "Gedung";
  location: string;
  volume: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  fullDesc: string;
  accent: string;
}
