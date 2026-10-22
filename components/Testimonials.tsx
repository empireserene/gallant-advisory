"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const visible = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <section className="bg-[#f7f8f8] py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="mb-4 text-sm text-muted">Testimonials</p>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="display max-w-xl text-4xl md:text-6xl">What our clients say</h2>
          <p className="max-w-md text-[16px] leading-7 text-muted">
            Market entry is a multi-year commitment, so we build relationships that
            last beyond the trade licence.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.quote}
              className="rounded-[28px] bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
            >
              <p className="text-lg leading-8">“{item.quote}”</p>
              <p className="mt-8 text-sm text-muted">{item.role}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => setIndex((n) => n + testimonials.length - 1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => setIndex((n) => n + 1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white"
            >
              →
            </button>
          </div>
          <Button href="/contact">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
