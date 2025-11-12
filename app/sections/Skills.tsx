"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import SkillsNetwork from "@/components/d3-visualizations/SkillsNetwork";

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="relative py-24 md:py-32 px-8">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyan-pink mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A comprehensive skill network spanning product management, technical development, AI/ML, and data analytics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 rounded-2xl"
        >
          <SkillsNetwork />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-text-secondary mt-8"
        >
          Hover over nodes to explore proficiency levels and connections between skills
        </motion.p>
      </div>
    </section>
  );
}
