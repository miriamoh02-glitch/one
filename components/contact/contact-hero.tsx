import { FadeIn } from "@/components/motion/fade-in";

export function ContactHero() {
  return (
    <section className="section-padding pb-12 pt-32 md:pt-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <FadeIn>
          <p className="text-xs uppercase tracking-editorial text-accent">
            Contact
          </p>
          <h1 className="heading-display mt-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl">
            We Would Be Glad To Hear From You
          </h1>
          <p className="mt-6 max-w-xl text-lg text-secondary">
            For general enquiries about our firm and services, please use the
            details below or send us a message.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
