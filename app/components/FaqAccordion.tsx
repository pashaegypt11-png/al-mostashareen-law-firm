"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/data/faqs";

export default function FaqAccordion({
  items,
  locale,
}: {
  items: readonly FaqItem[];
  locale: "ar" | "en";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isAr = locale === "ar";

  return (
    <div className="overflow-hidden rounded-2xl bg-cream">
      {items.map((item, index) => {
        const open = openIndex === index;
        const answerId = `faq-answer-${locale}-${index}`;
        const buttonId = `faq-button-${locale}-${index}`;
        const number = isAr
          ? String(index + 1).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])
          : String(index + 1).padStart(2, "0");

        return (
          <div
            key={item.q}
            className={`relative border-gold-300/70 py-1 ${
              index > 0 ? "border-t" : ""
            } ${open ? "bg-paper/70" : ""}`}
          >
            {open && (
              <span
                aria-hidden="true"
                className="absolute inset-y-4 w-1 rounded-full bg-gold-500 start-0"
              />
            )}
            <button
              id={buttonId}
              type="button"
              aria-expanded={open}
              aria-controls={answerId}
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex min-h-11 w-full items-center gap-4 px-5 py-5 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 md:px-7"
            >
              <span
                aria-hidden="true"
                className="shrink-0 font-serif text-sm font-bold text-gold-600"
              >
                {number}
              </span>
              <span className="flex-1 text-base font-medium leading-relaxed text-brand-900 md:text-lg">
                {item.q}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-300 text-brand-800">
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                  className={`transition-transform duration-200 motion-reduce:transition-none ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 motion-reduce:transition-none ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="max-w-[60ch] px-5 pb-6 ps-12 leading-[1.85] text-ink-soft md:px-7 md:ps-[4.25rem]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
