"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs, faqsEn } from "@/data/faq";
import type { Locale } from "@/i18n/config";

export function FaqAccordion({ limit, locale = "id" }: { limit?: number; locale?: Locale }) {
  const [openIndex, setOpenIndex] = useState(0);
  const source = locale === "en" ? faqsEn : faqs;
  const items = limit ? source.slice(0, limit) : source;

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div className={`faq-item${open ? " is-open" : ""}`} key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" />
              </button>
            </h3>
            <div className="faq-answer" id={`faq-answer-${index}`} hidden={!open}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
