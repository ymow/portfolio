"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { keyMetrics } from "@/lib/data";
import { useEffect, useState } from "react";

function CountUp({ end, duration = 2000, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    setHasAnimated(true);
    const increment = end / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, hasAnimated]);

  return (
    <span>
      {prefix}
      {Math.floor(count * 10) / 10}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const [ref, isInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="metrics" ref={ref} className="relative py-24 md:py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyan-pink mb-4">
            Impact by the Numbers
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Quantifying product success across key metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-xl hover:scale-105 transition-transform duration-300"
              style={{ borderColor: metric.color, borderWidth: 1 }}
            >
              <div className="text-5xl font-bold mb-4" style={{ color: metric.color }}>
                {isInView && (
                  <CountUp
                    end={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {metric.label}
              </h3>
              {metric.subtext && (
                <p className="text-sm text-text-tertiary mb-3">{metric.subtext}</p>
              )}
              <p className="text-sm text-text-secondary">{metric.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
