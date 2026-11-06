import { About } from "@/components/About";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { TraceRail } from "@/components/Trace";

export default function Home() {
  return (
    <main>
      <Hero />
      <TraceRail>
        <Stats />
        <Services />
        <Process />
        <About />
        <Team />
        <Testimonials />
        <Career />
        <Contact />
      </TraceRail>
    </main>
  );
}
