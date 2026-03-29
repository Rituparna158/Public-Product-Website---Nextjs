export interface Feature {
  id: number;
  title: string;
  description: string;
}

export interface FeatureResponse {
  data: Feature[];
}

export interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export interface HeaderProps {
  tag: string;
  title: string;
  sub: string;
}
