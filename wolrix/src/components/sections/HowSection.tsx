'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function HowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    {
      title: "Strategic Advisory",
      items: [
        "Digital Strategy & Transformation",
        "Technology Architecture",
        "Innovation Consulting",
        "Change Management"
      ]
    },
    {
      title: "Digital Solutions",
      items: [
        "Enterprise Platforms",
        "Cloud & Infrastructure",
        "Data & AI Solutions",
        "Digital Experience"
      ]
    },
    {
      title: "Education & Training",
      items: [
        "Executive Programs",
        "Digital Leadership",
        "Technical Excellence",
        "Innovation Workshops"
      ]
    },
    {
      title: "Investment & Growth",
      items: [
        "Venture Capital",
        "M&A Advisory",
        "Portfolio Management",
        "Growth Acceleration"
      ]
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="heading-2 mb-6">
            Comprehensive
            <br />
            Digital Excellence
          </h2>
          <p className="text-xl text-muted">
            Our integrated capabilities deliver end-to-end transformation, from 
            strategy through execution to continuous innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-8 border border-border rounded-xl hover:bg-hover/5 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6">{capability.title}</h3>
                <ul className="space-y-4">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-center text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 