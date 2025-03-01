'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aiService = {
    title: "AI-Powered Business Acceleration",
    description: "Deploy battle-tested AI systems that give your business an unfair advantage. While others debate AI strategy, our clients are already dominating markets.",
    icon: "⚡",
    features: [
      {
        title: "AI-Driven Automation",
        description: "Scale operations beyond human limitations with intelligent automation systems"
      },
      {
        title: "Revenue Optimization",
        description: "AI-powered pricing, customer retention, and growth strategies"
      },
      {
        title: "Competitive Intelligence",
        description: "Real-time market analysis and automated competitive responses"
      },
      {
        title: "Operational Excellence",
        description: "AI systems that make your business move faster than competition"
      }
    ],
    stats: [
      { label: "Average Revenue Increase", value: "40%" },
      { label: "Operational Cost Reduction", value: "60%" },
      { label: "Speed to Market Improvement", value: "3x" }
    ]
  };

  const otherServices = [
    {
      title: "Web & App Development",
      description: "Building scalable, AI-ready platforms that become your competitive advantage.",
      icon: "💻",
      features: ["Custom Enterprise Solutions", "AI-Ready Architecture", "Cloud-Native Apps", "API Development"]
    },
    {
      title: "Digital Strategy",
      description: "Data-driven strategies that position you ahead of market trends.",
      icon: "📈",
      features: ["Market Analysis", "Growth Strategy", "Digital Optimization", "Tech Stack Planning"]
    },
    {
      title: "Brand Evolution",
      description: "Transform your brand into a digital-first market leader.",
      icon: "✨",
      features: ["Brand Strategy", "Digital Presence", "Market Positioning", "Content Systems"]
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
          AI-First Solutions for
          <br />
          Market Dominance
        </h2>
        <p className="text-xl text-muted">
          Deploy AI systems that give you an unfair advantage while your 
          competitors are still figuring out their digital strategy.
        </p>
      </motion.div>

      <div className="space-y-8">
        {/* AI Service Card - Prominent and Larger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-12 border border-accent/20 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent hover:bg-hover/5 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="text-5xl mb-6">{aiService.icon}</div>
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                  {aiService.title}
                </h3>
                <p className="text-xl text-muted mb-8">{aiService.description}</p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {aiService.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                      <div className="text-sm text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  {aiService.features.map((feature) => (
                    <div key={feature.title} className="border border-accent/10 rounded-xl p-6 hover:bg-accent/5 transition-all duration-300">
                      <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                      <p className="text-muted text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Services - Three Cards in a Row */}
        <div className="grid lg:grid-cols-3 gap-8">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-8 border border-border rounded-xl hover:bg-hover/5 transition-all duration-300 h-full">
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
    </div>
  );
} 