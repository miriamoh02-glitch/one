"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

export function Services() {
  const [activeId, setActiveId] = useState(services[0].id);

  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section
      id="services"
      className="section-padding bg-primary text-background"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1600px]">
        <FadeIn>
          <p className="text-xs uppercase tracking-editorial text-accent">
            Our Expertise
          </p>
          <h2
            id="services-heading"
            className="heading-display mt-4 max-w-3xl text-4xl text-background md:text-5xl lg:text-6xl"
          >
            What We Do
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-2xl text-background/60">
            Our practice spans advisory, research, and stewardship across
            West Africa&apos;s most distinguished property markets.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <ul className="space-y-0" role="tablist">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeId === service.id}
                    onClick={() => setActiveId(service.id)}
                    className={cn(
                      "group flex w-full items-baseline gap-6 border-b border-background/10 py-8 text-left transition-colors",
                      activeId === service.id
                        ? "border-accent"
                        : "hover:border-background/30"
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-sm transition-colors",
                        activeId === service.id
                          ? "text-accent"
                          : "text-background/30"
                      )}
                    >
                      {service.number}
                    </span>
                    <span
                      className={cn(
                        "font-display text-2xl transition-colors md:text-3xl",
                        activeId === service.id
                          ? "text-background"
                          : "text-background/50 group-hover:text-background/80"
                      )}
                    >
                      {service.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={0.15}>
            <div className="relative min-h-[320px] lg:min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col justify-center"
                  role="tabpanel"
                >
                  <span className="text-8xl font-display text-background/5 md:text-9xl">
                    {active.number}
                  </span>
                  <h3 className="mt-4 font-display text-3xl text-background md:text-4xl">
                    {active.title}
                  </h3>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-background/70">
                    {active.description}
                  </p>
                  <div className="mt-10 h-px w-24 bg-accent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
