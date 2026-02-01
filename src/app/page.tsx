import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import VideoShowreel from "@/components/VideoShowreel";
import ClientLogos from "@/components/ClientLogos";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <FeaturedProjects />
      <VideoShowreel />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
