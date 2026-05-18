"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experienceSteps } from "@/lib/data";
import { FadeIn } from "@/components/motion/fade-in";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      className="section-padding bg-background"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1600px]">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-editorial text-accent">
              How We Work
            </p>
            <h2
              id="experience-heading"
              className="heading-display mt-4 text-4xl md:text-5xl"
            >
              Our Approach To Every Client Relationship
            </h2>
          </div>
        </FadeIn>

        <div ref={containerRef} className="relative mt-20 md:mt-28">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-primary/10 md:left-1/2 md:block md:-translate-x-1/2">
            <motion.div
              className="absolute left-0 top-0 w-full bg-accent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {experienceSteps.map((step, index) => (
              <FadeIn
                key={step.step}
                delay={index * 0.08}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                    index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }
                  >
                    <span className="font-display text-6xl text-primary/10 md:text-8xl">
                      {step.step}
                    </span>
                  </div>

                  <div
                    className={`relative ${
                      index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"
                    }`}
                  >
                    <div className="absolute -left-4 top-2 hidden h-3 w-3 rounded-full bg-accent md:left-1/2 md:block md:-translate-x-1/2" />
                    <h3 className="font-display text-2xl text-primary md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
