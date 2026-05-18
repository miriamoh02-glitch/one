"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function CompanyCta() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=85"
          alt="Gold Coast Estates office building exterior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
      </div>

      <div className="section-padding relative z-10">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-editorial text-accent">
                Get In Touch
              </p>
              <h2
                id="cta-heading"
                className="heading-display mt-4 text-4xl text-background md:text-5xl"
              >
                We Welcome The Opportunity To Connect
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-background/70">
                Whether you have a question about our firm, our services, or
                wish to arrange a conversation, our team is here to help.
              </p>
              <div className="mt-10">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
