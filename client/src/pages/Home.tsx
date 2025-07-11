import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import CTASection from "../components/CTASection";
import Testimonials from "../components/Testimonials";
import WhyUsSection from "../components/WhyUsSection";
import MeetTheTeamSection from "../components/MeetTheTeamSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <CTASection />
      <Testimonials />
      <WhyUsSection />
      <MeetTheTeamSection />
      <Footer />
    </>
  );
};

export default Home;
