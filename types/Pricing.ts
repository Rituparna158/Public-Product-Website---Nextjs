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