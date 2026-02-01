import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
