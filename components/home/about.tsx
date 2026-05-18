"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { trustMetrics } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      className="section-padding overflow-hidden bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="relative lg:col-span-5">
            <div className="relative">
              <div className="image-reveal relative aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=85"
                  alt="Luxury interior living space with refined architectural details"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden aspect-square w-48 border-8 border-surface bg-warm md:block lg:-right-16 lg:w-64">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=85"
                  alt="Gold Coast Estates advisory team in modern office"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-7">
            <FadeIn>
              <p className="text-xs uppercase tracking-editorial text-accent">
                About Gold Coast Estates
              </p>
              <h2
                id="about-heading"
                className="heading-display mt-4 text-4xl md:text-5xl"
              >
                A Firm Built On Trust, Discretion, And Deep Market Knowledge
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-8 text-lg leading-relaxed text-secondary">
                Founded in 2007, Gold Coast Estates is a privately held luxury
                real estate advisory firm with offices in Accra and Kumasi. We
                serve clients who value thoughtful counsel, integrity, and
                long-term relationships over transactional speed.
              </p>
              <p className="mt-6 leading-relaxed text-secondary">
                Our team brings decades of combined experience across
                residential, commercial, and mixed-use markets. We are known
                for clear communication, meticulous attention to detail, and
                a culture of professionalism that has defined our firm from
                the beginning.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                {trustMetrics.map((metric) => (
                  <div key={metric.label} className="border-l border-accent/40 pl-6">
                    <p className="font-display text-3xl text-primary md:text-4xl">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-secondary">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <blockquote className="mt-12 border-l-2 border-accent pl-8">
                <p className="font-display text-xl italic leading-relaxed text-primary md:text-2xl">
                  &ldquo;Our reputation was built one relationship at a time—through
                  honesty, patience, and an unwavering commitment to our clients.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-secondary">
                  — Victoria Asante, Managing Director
                </footer>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
