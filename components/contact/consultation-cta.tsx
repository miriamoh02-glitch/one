import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function ConsultationCta() {
  return (
    <section className="section-padding" aria-labelledby="consultation-heading">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 border border-primary/10 bg-primary p-10 md:flex-row md:items-center md:p-16">
            <div>
              <h2
                id="consultation-heading"
                className="heading-display text-3xl text-background md:text-4xl"
              >
                Prefer To Speak Directly?
              </h2>
              <p className="mt-4 max-w-lg text-background/70">
                Our Accra office is open Monday through Friday, 9:00 AM to
                6:00 PM. We are happy to arrange a call at your convenience.
              </p>
            </div>
            <Button variant="accent" size="lg" asChild>
              <Link href="tel:+233302789400">Call Our Office</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
