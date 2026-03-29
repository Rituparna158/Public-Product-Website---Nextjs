export interface RichTextChild {
  text: string;
}

export interface RichTextBlock {
  type: string;
  children: RichTextChild[];
}

export interface Plan {
  id: number;
  name: string;
  price: number;
  features: RichTextBlock[];
}

export interface PricingResponse {
  data: Plan[];
}

export interface PricingFeatureChild {
  text: string;
}

export interface PricingFeatureBlock {
  children: PricingFeatureChild[];
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  features?: PricingFeatureBlock[];
}

export interface PricingsResponse {
  data: PricingPlan[];
}

export interface PriceProps {
  plan: PricingPlan;
  highlight?: boolean;
}
