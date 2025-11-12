"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import NavigationBar from "@/components/ui/NavigationBar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "./sections/Hero";
import Timeline from "./sections/Timeline";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Metrics from "./sections/Metrics";
import Contact from "./sections/Contact";

export default function Home() {
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <div className="relative">
      {/* Fixed Navigation & Progress */}
      <ScrollProgress />
      <NavigationBar />

      {/* Main Content */}
      <main>
        <Hero />
        <Timeline />
        <Skills />
        <Projects />
        <Metrics />
        <Contact />
      </main>
    </div>
  );
}
