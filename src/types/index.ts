import type { ComponentType, SVGProps } from "react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  quickFacts: {
    suitableFor: string;
    initialInformation: string;
    availability: string;
  };
  benefits: string[];
  suitableFor: string[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
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
