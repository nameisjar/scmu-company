import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  benefits: string[];
  suitableFor: string[];
  Icon: LucideIcon;
  image: {
    src: string;
    alt: string;
    credit: string;
    source: string;
    position?: string;
  };
};

export type FaqItem = {
  question: string;
  answer: string;
};
