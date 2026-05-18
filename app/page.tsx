import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Services } from "@/components/home/services";
import { Experience } from "@/components/home/experience";
import { Testimonials } from "@/components/home/testimonials";
import { CompanyCta } from "@/components/home/company-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Testimonials />
      <CompanyCta />
    </>
  );
}
