"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { FadeIn } from "@/components/motion/fade-in";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="section-padding bg-warm"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1600px]">
        <FadeIn>
          <p className="text-xs uppercase tracking-editorial text-accent">
            Client Perspectives
          </p>
          <h2
            id="testimonials-heading"
            className="sr-only"
          >
            Testimonials
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-center">
          <FadeIn className="lg:col-span-2">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start">
              <button
                type="button"
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center border border-primary/20 transition-colors hover:border-accent hover:text-accent"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="font-display text-sm text-secondary">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={next}
                className="flex h-12 w-12 items-center justify-center border border-primary/20 transition-colors hover:border-accent hover:text-accent"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </FadeIn>

          <div className="lg:col-span-10">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-3xl leading-snug text-primary md:text-4xl lg:text-5xl lg:leading-tight">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-10">
                  <cite className="not-italic">
                    <p className="text-lg font-medium text-primary">
                      {testimonial.author}
                    </p>
                    <p className="mt-1 text-sm text-secondary">
                      {testimonial.role}
                    </p>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
