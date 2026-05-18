import Link from "next/link";
import { footerOffices, navLinks } from "@/lib/data";

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Cookie Policy" },
];

const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/8 bg-primary text-background">
      <div className="section-padding mx-auto max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-3xl tracking-wide">
                Gold Coast Estates
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/60">
              A premier luxury real estate advisory firm with offices in Accra
              and Kumasi, serving clients across West Africa since 2007.
            </p>
            <div className="mt-8 flex gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-editorial text-background/50 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xs uppercase tracking-editorial text-accent">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-xs uppercase tracking-editorial text-accent">
              Offices
            </h3>
            <ul className="space-y-8">
              {footerOffices.map((office) => (
                <li key={office.city}>
                  <p className="font-display text-lg text-background">
                    {office.city}
                  </p>
                  <p className="mt-2 text-sm text-background/60">
                    {office.address}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-background/70 transition-colors hover:text-accent"
                  >
                    {office.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-xs uppercase tracking-editorial text-accent">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-background/70">
              <li>
                <a
                  href="mailto:concierge@goldcoastestates.com"
                  className="transition-colors hover:text-accent"
                >
                  concierge@goldcoastestates.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+233302789400"
                  className="transition-colors hover:text-accent"
                >
                  +233 30 278 9400
                </a>
              </li>
              <li className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block border border-background/20 px-6 py-3 text-xs uppercase tracking-editorial transition-all hover:border-accent hover:text-accent"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-background/10 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} Gold Coast Estates. All rights
            reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-background/40 transition-colors hover:text-background/70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
