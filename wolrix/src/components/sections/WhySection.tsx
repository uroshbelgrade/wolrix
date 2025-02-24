'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      title: "Digital Transformation",
      description: "Orchestrating end-to-end digital evolution for global enterprises, from strategy to execution.",
      stats: "Transforming Global Enterprises"
    },
    {
      title: "Leadership Development",
      description: "Shaping tomorrow's digital leaders through cutting-edge education and executive programs.",
      stats: "Building Future Leaders"
    },
    {
      title: "Strategic Investments",
      description: "Identifying and scaling breakthrough digital ventures that define industry futures.",
      stats: "Accelerating Innovation"
    }
  ];

  return (
    <section id="why" className="py-32 relative overflow-hidden bg-hover/5">
      <div className="container-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="heading-2 mb-6">
            Driving Global Digital
            <br />
            Transformation
          </h2>
          <p className="text-xl text-muted">
            As a global leader in digital innovation, we unite strategic vision, 
            technological excellence, and transformative education to architect 
            the future of business and society.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="p-12 border border-border rounded-2xl hover:bg-hover/10 transition-all duration-300">
                <div className="text-sm font-medium text-muted mb-8">{pillar.stats}</div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-muted max-w-3xl mx-auto">
            &ldquo;We`re not just adapting to change—we`re driving it. Our integrated approach 
            combines world-class consulting, transformative education, and strategic 
            investments to create unprecedented value for our clients and partners.&rdquo;
          </p>
          <div className="mt-4 text-sm font-medium">CEO, Wolrix Group</div>
        </motion.div>
      </div>
    </section>
  );
} 