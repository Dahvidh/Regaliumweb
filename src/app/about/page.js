import AboutUsSection from "../components/AboutUsSection";
import VisionSection from "../components/Vision";
import WhyChooseUsSection from "../components/WhyChooseUs";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
    <Header/>
      <AboutUsSection />
      <VisionSection />
      <WhyChooseUsSection />
      <Footer/>
    </>
  );
}
