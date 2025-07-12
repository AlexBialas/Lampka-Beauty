import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import CTASection from "../components/CTASection";
import Testimonials from "../components/Testimonials";
import WhyUsSection from "../components/WhyUsSection";
import MeetTheTeamSection from "../components/MeetTheTeamSection";

const sections = [
  { component: <Hero />, direction: "up" },
  { component: <AboutSection />, direction: "left" },
  { component: <ServiceSection />, direction: "right" },
  { component: <CTASection />, direction: "up" },
  { component: <Testimonials />, direction: "left" },
  { component: <WhyUsSection />, direction: "right" },
  { component: <MeetTheTeamSection />, direction: "up" },
];

const Home = () => {
  return (
    <>
      {sections.map((sec, index) => (
        <FadeInWhenVisible
          key={index}
          delay={index * 0.15}
          direction={sec.direction as any}
        >
          {sec.component}
        </FadeInWhenVisible>
      ))}
    </>
  );
};

export default Home;
