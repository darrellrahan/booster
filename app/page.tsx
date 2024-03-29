import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Marquee from "./components/Marquee";
import MobileNavbar from "./components/MobileNavbar";
import Project from "./components/Project";
import Service from "./components/Service";
import StudyCase from "./components/StudyCase";
import WhyNeedUs from "./components/WhyNeedUs";

export default function Home() {
  return (
    <>
      <Header />
      <MobileNavbar />
      <Hero />
      <Marquee />
      <Intro />
      <WhyNeedUs />
      <StudyCase />
      <Service />
      <Project />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
