import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactMethods } from "@/components/contact/contact-methods";
import { InquiryForm } from "@/components/contact/inquiry-form";
import { ConsultationCta } from "@/components/contact/consultation-cta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Gold Coast Estates with questions about our firm, offices in Accra and Kumasi, and advisory services.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <section className="section-padding pt-0" aria-labelledby="form-heading">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2
                id="form-heading"
                className="heading-display text-3xl md:text-4xl"
              >
                Send A Message
              </h2>
              <p className="mt-4 text-secondary leading-relaxed">
                Complete the form below and a member of our team will respond
                as soon as possible.
              </p>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
      <ConsultationCta />
    </>
  );
}
