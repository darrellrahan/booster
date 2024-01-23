import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Service from "./components/Service";
import StudyCase from "./components/StudyCase";
import WhyNeedUs from "./components/WhyNeedUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <WhyNeedUs />
      <StudyCase />
      <Service />
    </>
  );
}