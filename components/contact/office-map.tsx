import { FadeIn } from "@/components/motion/fade-in";

export function OfficeMap() {
  return (
    <section className="section-padding bg-warm" aria-labelledby="map-heading">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <FadeIn>
          <p className="text-xs uppercase tracking-editorial text-accent">
            Visit Us
          </p>
          <h2
            id="map-heading"
            className="heading-display mt-4 text-3xl md:text-4xl"
          >
            Accra Head Office
          </h2>
          <p className="mt-4 text-secondary">
            14 Independence Avenue, Ridge, Accra, Ghana
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-primary/10 bg-surface">
            <iframe
              title="Gold Coast Estates office location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.79!2d-0.187!3d5.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnMzYuMCJOIDDCsDExJzEzLjIiVw!5e0!3m2!1sen!2sgh!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
