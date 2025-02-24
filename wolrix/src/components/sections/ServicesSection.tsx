'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Web & App Development",
      description: "Crafting scalable, secure, and innovative web and mobile applications that empower businesses to evolve.",
      icon: "💻",
      features: ["Custom Enterprise Platforms", "Mobile Applications", "Web Applications", "API Development"]
    },
    {
      title: "AI Solutions",
      description: "Integrating artificial intelligence to streamline processes, enhance customer experience, and fuel data-driven decisions.",
      icon: "🤖",
      features: ["Machine Learning", "Process Automation", "Data Analytics", "AI Integration"]
    },
    {
      title: "Digital Transformation",
      description: "Guiding enterprises through digital evolution—from cloud migration to business process automation.",
      icon: "🚀",
      features: ["Cloud Migration", "Process Optimization", "Digital Strategy", "Technology Consulting"]
    },
    {
      title: "Brand Evolution",
      description: "Building strong, future-proof brands through strategic digital marketing and design.",
      icon: "✨",
      features: ["Brand Strategy", "Digital Marketing", "UI/UX Design", "Content Strategy"]
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
          Comprehensive
          <br />
          Digital Excellence
        </h2>
        <p className="text-xl text-muted">
          Our integrated capabilities deliver end-to-end transformation, from 
          strategy through execution to continuous innovation.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col h-full"
          >
            <div className="p-6 border border-border rounded-xl hover:bg-hover/5 transition-all duration-300 h-full">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted mb-6 text-sm">{service.description}</p>
              <ul className="space-y-3 text-sm">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 