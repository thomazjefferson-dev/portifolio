import HeroSection from "@/components/hero-section";
import Features from "@/components/features-2";
import Content from "@/components/content-1";
import AboutSection from "@/components/about";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";

export default function home() {
  return (
    <div>

      <HeroSection />
      <Features/>
      <Content/>
      <AboutSection/>
      <CallToAction/>
      <Footer/>

    </div>
  );
}
