import type { Metadata } from "next";

const siteUrl = "https://goldcoastestates.com";

export const siteConfig = {
  name: "Gold Coast Estates",
  description:
    "Gold Coast Estates is a luxury real estate advisory firm based in Accra and Lagos, serving clients across West Africa since 2007.",
  url: siteUrl,
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gold Coast Estates | Luxury Real Estate Advisory",
    template: "%s | Gold Coast Estates",
  },
  description: siteConfig.description,
  keywords: [
    "luxury real estate",
    "Gold Coast Estates",
    "Accra properties",
    "premium apartments",
    "commercial real estate",
    "property investment",
    "West Africa real estate",
  ],
  authors: [{ name: "Gold Coast Estates" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Gold Coast Estates | Luxury Real Estate Advisory",
    description: siteConfig.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Gold Coast Estates luxury property",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Coast Estates | Luxury Real Estate Advisory",
    description: siteConfig.description,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Gold Coast Estates",
  description: siteConfig.description,
  url: siteUrl,
  telephone: "+233-30-278-9400",
  email: "concierge@goldcoastestates.com",
  image:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Independence Avenue, Ridge",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 5.56,
    longitude: -0.187,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$$$",
  areaServed: ["Accra", "Lagos", "West Africa"],
};
