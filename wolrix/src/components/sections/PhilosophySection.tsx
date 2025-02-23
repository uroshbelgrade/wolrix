'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const principles = [
    {
      title: "First Position Advantage",
      description: "In digital transformation, being first isn't just an advantage—it's everything. We lead markets through innovation, not follow through imitation.",
      icon: "🎯",
      color: "from-purple-500/20 to-transparent"
    },
    {
      title: "Strategic Boundaries",
      description: "Clear corporate focus drives exceptional results. Each division operates with precision and purpose, maximizing impact in their domains.",
      icon: "⚔️",
      color: "from-blue-500/20 to-transparent"
    },
    {
      title: "Every Interaction Matters",
      description: "From education to development to investments, every touchpoint is an opportunity to create value and demonstrate excellence.",
      icon: "🛡️",
      color: "from-red-500/20 to-transparent"
    },
    {
      title: "Self-Sustaining Excellence",
      description: "Our companies are built to thrive independently while creating powerful synergies together. Strong foundations enable bold innovations.",
      icon: "💪",
      color: "from-green-500/20 to-transparent"
    },
    {
      title: "Knowledge as Power",
      description: "Through systematic documentation and knowledge sharing across our divisions, we create compounding advantages in every market we enter.",
      icon: "📚",
      color: "from-yellow-500/20 to-transparent"
    }
  ];

  // Enhanced animations for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.48, 0.15, 0.25, 0.96]
      }
    })
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
      </motion.div>

      <div className="container-padding relative" ref={ref}>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={isInView ? { scale: 1 } : { scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="heading-2 mb-6">
              The Principles of
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
                Market Dominance
              </span>
            </h2>
          </motion.div>
          <p className="text-xl text-muted">
            These aren&apos;t just principles—they&apos;re the foundation of mastery. 
            Our philosophy shapes leaders who don&apos;t just succeed, but dominate.
          </p>
        </motion.div>

        {/* Enhanced Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="relative p-8 border border-border rounded-xl bg-background/50 backdrop-blur-sm hover:bg-hover/5 transition-all duration-500">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-radial ${principle.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-6"
                    animate={hoveredIndex === index ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {principle.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold mb-4"
                    animate={hoveredIndex === index ? { x: 10 } : { x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {principle.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted"
                    animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    {principle.description}
                  </motion.p>
                </div>

                {/* Interactive Elements */}
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-border/50"
                  animate={hoveredIndex === index ? { 
                    scale: 1.2,
                    borderColor: "rgba(255,255,255,0.3)"
                  } : {}}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 