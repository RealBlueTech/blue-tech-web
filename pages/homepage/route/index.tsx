import Image from "next/image";

import Hero from "../../../component/homepage/hero";
import About from "../../../component/homepage/about";
import Projects from "../../../component/homepage/projects";
import Team from "../../../component/homepage/team";
import Stats from "../../../component/homepage/stats";
import Testimonials from "../../../component/homepage/testimonials";
import VideoSection from "../../../component/homepage/video-section";

import Header from "../../../component/header";
import Footer from "../../../component/footer";



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Team />
      <Stats />
      <Testimonials />
      <VideoSection />
    </main>

  );
}
