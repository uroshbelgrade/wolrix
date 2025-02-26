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
      stats: "Setting New Industry Standards"
    },
    {
      title: "Strategic Excellence",
      description: "Our strategic approach combines deep industry knowledge with cutting-edge technological expertise.",
      icon: "⚡",
      stats: "Trusted Strategic Partner"
    },
    {
      title: "Global Impact",
      description: "Transforming businesses across continents with solutions that transcend geographical boundaries.",
      icon: "🌍",
      stats: "Cross-Industry Expertise"
    }
  ];

  const caseStudies = [
    {
      title: "Healthcare E-commerce Transformation",
      sector: "Healthcare Technology",
      region: "United Kingdom",
      impact: [
        "25% Increase in Conversion Rate",
        "40% Reduction in System Downtime",
        "100% Compliance with Healthcare Standards"
      ],
      description: "Revolutionized the UK healthcare e-commerce sector with a comprehensive digital platform. Our team of 25+ specialists, including healthcare UX experts, security engineers, and compliance specialists, delivered a transformative solution.",
      team: "25+ Specialists Including:",
      teamDetails: [
        "Healthcare UX Experts",
        "Security Engineers",
        "Compliance Specialists",
        "Full-Stack Developers",
        "QA Engineers"
      ],
      confidentiality: "Under strict NDA to protect market advantage"
    },
    {
      title: "Global IP Management Platform",
      sector: "Legal Technology",
      region: "International",
      impact: [
        "30% Higher User Engagement",
        "25% Revenue Growth",
        "25% Faster Project Delivery"
      ],
      description: "Developed a sophisticated multi-jurisdictional platform handling complex international trademark registrations. Our international team of 30+ experts created a solution that revolutionized IP management across borders.",
      team: "30+ Experts Including:",
      teamDetails: [
        "Legal Tech Specialists",
        "Internationalization Experts",
        "Security Architects",
        "UI/UX Designers",
        "Backend Engineers"
      ],
      confidentiality: "Protected by comprehensive NDA"
    },
    {
      title: "Senior Care Innovation Platform",
      sector: "Healthcare Services",
      region: "North America",
      impact: [
        "20% Increase in User Satisfaction",
        "30% Reduced Onboarding Time",
        "95% Positive Feedback"
      ],
      description: "Created a human-centered care platform connecting families with caregivers. Our dedicated team of 20+ professionals delivered a solution that transformed senior care management.",
      team: "20+ Professionals Including:",
      teamDetails: [
        "Healthcare UX Specialists",
        "Platform Architects",
        "Mobile Developers",
        "Integration Engineers",
        "Support Specialists"
      ],
      confidentiality: "Client privacy protected under NDA"
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

      {/* Confidentiality Pledge Section */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.03),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01),transparent_50%,rgba(255,255,255,0.01))]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto py-40 px-4 sm:px-6 lg:px-8 relative"
        >
          <div className="relative z-10">
            <motion.span 
              className="text-accent mb-6 uppercase tracking-widest text-sm block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Non-Disclosure Agreement
            </motion.span>

            <motion.h2 
              className="heading-1 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We Move in
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40">
                Silence
              </span>
            </motion.h2>

            <div className="space-y-12 max-w-4xl">
              <motion.p 
                className="text-4xl font-light text-muted leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Your competitors should fear your next move, not track it. When you partner 
                with Wolrix Digital, you gain an invisible force that transforms your 
                business from the shadows.
              </motion.p>

              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-2xl text-muted">
                  <span className="text-foreground font-bold">We are the unseen catalyst.</span>{' '}
                  While others chase recognition, we pursue excellence. Your success is our 
                  signature—silent, powerful, undeniable.
                </p>

                <p className="text-2xl text-muted">
                  <span className="text-foreground font-bold">No backlinks. No case studies. No public acclaim.</span>{' '}
                  Just pure, transformative results that keep your competitors wondering how 
                  you&apos;ve evolved so rapidly.
                </p>

                <p className="text-2xl text-muted">
                  <span className="text-foreground font-bold">This is beyond standard NDAs.</span>{' '}
                  This is a commitment to be the silent force behind your market dominance. 
                  We operate in absolute secrecy, ensuring your competitive advantages remain 
                  undetectable until they&apos;re unbeatable.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="mt-16 border-l-2 border-accent pl-8 py-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-3xl font-light text-muted">
                &ldquo;Let them wonder how you did it.&rdquo;
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Case Studies Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h3 className="text-3xl font-bold mb-4">Solution Capabilities</h3>
        <p className="text-muted">
          While maintaining strict confidentiality for our actual clients, here are examples 
          of the transformative solutions we&apos;re equipped to deliver. Each scenario 
          demonstrates our technical expertise and strategic approach.
        </p>
      </motion.div>

      <div className="space-y-16">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="border border-border rounded-xl p-8 bg-hover/5"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="text-sm text-accent mb-2">{study.sector} | {study.region}</div>
                <h4 className="text-2xl font-bold mb-4">Potential {study.title}</h4>
                <p className="text-muted mb-6">
                  Our expertise enables us to deliver this type of comprehensive solution. 
                  With our team&apos;s capabilities, we can revolutionize {study.sector.toLowerCase()} 
                  through innovative digital platforms.
                </p>
                <div className="text-sm text-accent/80 italic mb-4">
                  Similar projects are typically covered under strict NDAs
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3">Typical Impact Metrics</h5>
                  <ul className="space-y-2">
                    {study.impact.map((metric) => (
                      <li key={metric} className="flex items-center text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                        Target: {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-3">Available Expertise</h5>
                  <ul className="grid grid-cols-2 gap-2">
                    {study.teamDetails.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
          &ldquo;We have the expertise and vision to deliver transformative digital solutions. 
          Let us show you what&apos;s possible.&rdquo;
        </p>
        <div className="mt-4 text-sm font-medium">CEO, Wolrix Digital</div>
      </motion.div>
    </div>
  );
} 