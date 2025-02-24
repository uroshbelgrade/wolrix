'use client';

import { Motion } from '../Motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const inputStyles = "w-full px-4 py-3 bg-[#111] border border-border rounded-lg focus:outline-none focus:border-foreground/40 transition-colors text-foreground placeholder-foreground/30";

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
              Elevate Your <span className="gradient-text">Vision</span>
            </h2>
            <p className="text-xl text-muted">
              Connect with us to explore how we can transform your digital presence
              and drive exceptional results.
            </p>
          </div>
        </Motion>

        <div className="max-w-2xl mx-auto">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={inputStyles}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={inputStyles}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground/80">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className={inputStyles}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputStyles} resize-none`}
                  placeholder="Tell us about your project"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-lg font-medium inline-flex items-center gap-2"
                >
                  Initiate Connection
                  <svg 
                    className="w-5 h-5" 
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
                </button>
              </div>
            </form>
          </Motion>

          <Motion
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mt-16 text-center text-muted">
              <p className="mb-4">Prefer direct communication?</p>
              <a 
                href="mailto:contact@wolrix.com" 
                className="text-foreground hover:text-foreground/80 transition-colors"
              >
                contact@wolrix.com
              </a>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
} 