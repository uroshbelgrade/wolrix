'use client';

import { Motion } from '../Motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export function CompaniesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const companies = [
    {
      name: "Wolrix Blueprint",
      tagline: "Education & Leadership Excellence",
      description: "Elite education and leadership development through premium courses, training, and transformative speaking events.",
      features: ["Executive Training", "Digital Leadership", "Industry Expertise"],
      link: "/blueprint",
      gradient: "from-blue-900 to-blue-800",
      status: "Coming Q3 2024"
    },
    {
      name: "Wolrix Digital",
      tagline: "Premium Development & Marketing",
      description: "Cutting-edge development and strategic marketing solutions that define industry standards.",
      features: ["Enterprise Solutions", "Digital Transformation", "Brand Evolution"],
      link: "/digital",
      gradient: "from-indigo-900 to-indigo-800",
      status: "Active"
    },
    {
      name: "Wolrix Ventures",
      tagline: "Strategic Investment & Growth",
      description: "Strategic investment arm focused on acquiring and scaling high-potential digital assets.",
      features: ["Portfolio Growth", "Market Analysis", "Strategic Partnerships"],
      link: "/ventures",
      gradient: "from-violet-900 to-violet-800",
      status: "Coming Q4 2024"
    }
  ];

  return (
    <section id="companies" className="py-24 bg-gray-dark relative overflow-hidden">
      <div className="absolute inset-0 premium-gradient opacity-5" />
      <div className="container-padding relative z-10" ref={ref}>
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="heading-2 mb-6">
              Our <span className="text-gradient">Companies</span>
            </h2>
            <p className="text-xl text-text-muted">
              A synergy of elite companies, each driving excellence in their respective domains
              while maintaining unparalleled standards of quality and innovation.
            </p>
          </div>
        </Motion>

        <div className="grid lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <Motion
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`p-8 rounded-2xl bg-gradient-to-br ${company.gradient} relative group`}>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
                  <p className="text-accent mb-1 font-medium">{company.tagline}</p>
                  <p className="text-xs text-accent/80 mb-4">{company.status}</p>
                  <p className="text-text-muted mb-6">{company.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {company.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={company.link}
                    className={`inline-flex items-center ${
                      company.status === 'Active' 
                        ? 'text-accent hover:text-accent-hover' 
                        : 'text-accent/80'
                    } transition-colors gap-2 group`}
                  >
                    {company.status === 'Active' ? 'Learn more' : 'View preview'}
                    <svg 
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
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
                  </Link>
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
} 