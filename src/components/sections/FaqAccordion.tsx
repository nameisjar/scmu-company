"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/faq";

export function FaqAccordion({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState(0);
  const items = limit ? faqs.slice(0, limit) : faqs;

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
