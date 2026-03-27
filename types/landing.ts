export interface Hero {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}
export interface Stats {
  patients: number;
  doctors: number;
  appointments: number;
}
export interface UseCase {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  initials: string;
}
export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
export interface Landing {
  hero: Hero;
  stats: Stats;
  use_cases: UseCase[];
  testimonials: Testimonial[]
  faqs: FAQ[];
}
export interface ApiResponse {
  data: Landing;
}
