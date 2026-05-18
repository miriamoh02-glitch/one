"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrollPosition(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury",
          scrolled ? "glass-nav py-4" : "bg-transparent py-6 md:py-8"
        )}
      >
        <nav
          className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-20"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="group flex flex-col"
            onClick={() => setMobileOpen(false)}
          >
            <span className="font-display text-xl tracking-wide text-primary md:text-2xl">
              Gold Coast
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-secondary transition-colors group-hover:text-accent">
              Estates
            </span>
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-sm tracking-wide text-primary/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <motion.div
            className="hidden lg:block"
            animate={{ opacity: scrolled ? 1 : 0.95 }}
          >
            <Button variant="default" size="sm" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center text-primary lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" strokeWidth={1.25} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex items-center justify-between px-6 py-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span className="font-display text-2xl text-background">
                Gold Coast Estates
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-12 w-12 items-center justify-center text-background"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" strokeWidth={1.25} />
              </button>
            </motion.div>

            <motion.nav
              className="flex flex-1 flex-col justify-center px-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {[...navLinks].map(
                (link) => (
                  <motion.div
                    key={link.href + link.label}
                    variants={{
                      hidden: { opacity: 0, x: -24 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-background/10 py-6 font-display text-4xl text-background transition-colors hover:text-accent md:text-5xl"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
            </motion.nav>

            <motion.p
              className="px-6 pb-10 text-sm text-background/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Luxury real estate advisory since 2007.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
