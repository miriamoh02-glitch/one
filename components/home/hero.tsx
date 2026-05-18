"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { trustMetrics } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="Hero"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90"
          alt="Modern architectural residence representing Gold Coast Estates"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/50 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/45 to-primary/20" />
      </motion.div>

      <motion.div
        className="relative z-10 flex min-h-[100svh] flex-col justify-center pb-20 pt-32 md:pb-28 md:pt-40"
        style={{ opacity: contentOpacity }}
      >
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12 lg:px-20">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <motion.p
                className="mb-6 text-xs uppercase tracking-[0.4em] text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Gold Coast Estates
              </motion.p>

              <motion.h1
                className="font-display text-balance text-4xl font-normal leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                A Trusted Name In Luxury Real Estate Advisory
              </motion.h1>

              <motion.p
                className="mt-8 max-w-xl text-base leading-relaxed text-white/90 md:text-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
              >
                We are a privately held advisory firm with deep roots in Accra
                and Kumasi. Our work is defined by discretion, market expertise,
                and a long-standing commitment to exceptional client service.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button variant="accent" size="lg" asChild>
                  <Link href="#about">About Us</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:border-accent hover:text-accent"
                  asChild
                >
                  <Link href="/contact">Contact</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="space-y-4 border-l border-background/40 pl-8">
                {trustMetrics.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="py-4">
                    <p className="font-display text-4xl text-background drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-background/85">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-background/50">
            Scroll
          </span>
          <motion.div className="h-12 w-px bg-background/30" />
        </motion.div>
      </div>
    </section>
  );
}

