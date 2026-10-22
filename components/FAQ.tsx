"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 text-sm text-muted">FAQ</p>
        <h2 className="display text-4xl md:text-6xl">Frequently asked questions</h2>
        <p className="mt-5 text-[16px] leading-7 text-muted">
          The questions clients typically ask before entering the UAE.
        </p>
      </div>
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="text-lg md:text-xl">{item.q}</span>
                <span className="mt-1 text-2xl text-muted">{isOpen ? "–" : "+"}</span>
              </button>
              {isOpen && (
                <p className="max-w-3xl pb-6 text-[16px] leading-7 text-muted">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
