'use client';

import { Motion } from '../Motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      <div className="container-padding relative z-10" ref={ref}>
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6">
              Initiate a <span className="gradient-text">Strategic Discussion</span>
            </h2>
            <p className="text-xl text-muted mb-12">
              For those ready to shape the digital future, we offer two paths 
              to begin our collaboration.
            </p>

            <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 border border-border rounded-xl hover:bg-hover/5 transition-all duration-300"
              >
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-3">Direct Communication</h3>
                <p className="text-muted mb-6">
                  For immediate inquiries and strategic discussions.
                </p>
                <a 
                  href="mailto:contact@wolrix.com" 
                  className="text-foreground hover:text-foreground/80 transition-colors inline-flex items-center gap-2 font-medium"
                >
                  contact@wolrix.com
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
              </Motion>

              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-8 border border-border rounded-xl hover:bg-hover/5 transition-all duration-300"
              >
                <div className="text-3xl mb-4">📅</div>
                <h3 className="text-xl font-bold mb-3">Strategic Consultation</h3>
                <p className="text-muted mb-6">
                  Schedule a focused discussion about your digital future.
                </p>
                <a 
                  href="https://calendly.com/urosh-belgrade/60min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground/80 transition-colors inline-flex items-center gap-2 font-medium"
                >
                  Schedule a Call
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
              </Motion>
            </div>
          </div>
        </Motion>

        <Motion
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mt-16 text-center">
            <p className="text-muted italic">
              &ldquo;Excellence in digital transformation begins with a conversation.&rdquo;
            </p>
          </div>
        </Motion>
      </div>
    </section>
  );
} 