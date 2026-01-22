import Image from "next/image";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutUsSection";
import Header from "../components/Header";
import CrossBorderSection from "../components/CrossBorder";
import FAQSection from "../components/Faq";
import TestimonialsSection from "../components/Testimony";
import ContactUsSection from "../components/Contact";
import Footer from "../components/Footer";
import FeaturesSection from "../components/Features";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CrossBorderSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}
