"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { personalInfo, socialLinks } from "@/lib/data";
import { useState } from "react";

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Thank you! Your message has been received.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 px-8 bg-background-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-cyan-pink mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Interested in collaborating on product innovation, AI solutions, or discussing opportunities?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center">
                    <span className="text-accent-primary text-xl">✉</span>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-sm">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-text-primary hover:text-accent-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-secondary/20 flex items-center justify-center">
                    <span className="text-accent-secondary text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-sm">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-text-primary hover:text-accent-secondary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-tertiary/20 flex items-center justify-center">
                    <span className="text-accent-tertiary text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-text-tertiary text-sm">Location</p>
                    <p className="text-text-primary">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-glass-border">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Connect on Social
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent-primary hover:text-background transition-colors duration-200"
                    >
                      <span className="text-xl">
                        {link.id === "linkedin" && "in"}
                        {link.id === "github" && "gh"}
                        {link.id === "email" && "✉"}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Send a Message
              </h3>

              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background-tertiary border border-glass-border rounded-lg text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background-tertiary border border-glass-border rounded-lg text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background-tertiary border border-glass-border rounded-lg text-text-primary focus:border-accent-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent-primary text-background font-semibold rounded-lg hover:bg-accent-secondary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed glow-cyan"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 pt-8 border-t border-glass-border text-center"
      >
        <p className="text-text-tertiary">
          © 2025 {personalInfo.name}. Built with Next.js, D3.js, and passion for data-driven product innovation.
        </p>
      </motion.div>
    </section>
  );
}
