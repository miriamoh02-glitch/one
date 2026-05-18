"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

const methods = [
  {
    icon: Phone,
    label: "Telephone",
    value: "+233 30 278 9400",
    href: "tel:+233302789400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "concierge@goldcoastestates.com",
    href: "mailto:concierge@goldcoastestates.com",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "14 Independence Avenue, Ridge, Accra",
    href: "https://maps.google.com/?q=14+Independence+Avenue+Ridge+Accra",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+233 24 555 0198",
    href: "https://wa.me/233245550198",
  },
];

export function ContactMethods() {
  return (
    <section className="pb-16" aria-label="Contact methods">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => (
            <StaggerItem key={method.label}>
              <a
                href={method.href}
                target={method.label === "WhatsApp" ? "_blank" : undefined}
                rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="group block border border-primary/10 bg-surface p-8 transition-all duration-500 hover:border-accent/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <method.icon
                  className="h-5 w-5 text-accent"
                  strokeWidth={1.25}
                />
                <p className="mt-6 text-xs uppercase tracking-editorial text-secondary">
                  {method.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-primary transition-colors group-hover:text-accent">
                  {method.value}
                </p>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
