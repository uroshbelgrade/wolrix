'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function WhyDigitalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      title: "Innovation Leadership",
      description: "We pioneer digital solutions that set industry standards, consistently staying ahead of market trends.",
      icon: "🎯",
      stats: "150+ Innovation Awards"
    },
    {
      title: "Strategic Excellence",
      description: "Our strategic approach combines deep industry knowledge with cutting-edge technological expertise.",
      icon: "⚡",
      stats: "98% Client Success Rate"
    },
    {
      title: "Global Impact",
      description: "Transforming businesses across continents with solutions that transcend geographical boundaries.",
      icon: "🌍",
      stats: "30+ Countries Served"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Revolution",
      client: "Global Retail Leader",
      impact: "300% Revenue Growth",
      description: "Transformed traditional retail into a digital powerhouse through AI-driven personalization."
    },
    {
      title: "FinTech Innovation",
      client: "Leading Banking Institution",
      impact: "5M+ New Users",
      description: "Revolutionized digital banking with blockchain integration and enhanced security protocols."
    }
  ];

  return (
    <div className="container-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h2 className="heading-2 mb-6">
          Why Choose
          <br />
          Wolrix Digital
        </h2>
        <p className="text-xl text-muted">
          In a world where being reactive is no longer enough, Wolrix Digital stands 
          as your proactive partner in digital mastery.
        </p>
      </motion.div>

      {/* Advantages Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {advantages.map((advantage, index) => (
          <motion.div
            key={advantage.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="p-8 border border-border rounded-xl hover:bg-hover/5 transition-all duration-300">
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <div className="text-sm text-accent mb-4">{advantage.stats}</div>
              <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
              <p className="text-muted">{advantage.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Studies Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
        <p className="text-muted">Real results for real businesses</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          >
            <div className="p-8 bg-hover/5 rounded-xl border border-border">
              <div className="text-accent mb-2">{study.client}</div>
              <h4 className="text-xl font-bold mb-2">{study.title}</h4>
              <p className="text-muted mb-4">{study.description}</p>
              <div className="text-foreground font-bold">{study.impact}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-3xl mx-auto text-center mt-24"
      >
        <p className="text-xl text-muted italic">
          &ldquo;In the digital age, excellence isn&apos;t optional—it&apos;s imperative. 
          We don&apos;t just meet standards; we set them.&rdquo;
        </p>
        <div className="mt-4 text-sm font-medium">CEO, Wolrix Digital</div>
      </motion.div>
    </div>
  );
} 