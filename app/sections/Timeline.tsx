"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import TimelineChart from "@/components/d3-visualizations/TimelineChart";

export default function Timeline() {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative py-24 md:py-32 px-8 bg-background-secondary"
    >
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyan-pink mb-4">
            Professional Timeline
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            10+ years of driving product innovation across enterprise AI, e-commerce, and SaaS platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TimelineChart />
        </motion.div>
      </div>
    </section>
  );
}
