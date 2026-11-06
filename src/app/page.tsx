import { MotionConfig } from "motion/react";
import { About } from "@/components/About";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { StatusBar } from "@/components/StatusBar";
import { Testimonials } from "@/components/Testimonials";
import { TraceRail } from "@/components/Trace";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <StatusBar />
      <Nav />
      <main>
        <Hero />
        <TraceRail>
          <Stats />
          <Services />
          <Process />
          <About />
          <Testimonials />
          <Career />
          <Contact />
        </TraceRail>
      </main>
      <Footer />
    </MotionConfig>
  );
}
