'use client';

import { Motion } from '../Motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export function WhatSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Strategic Consulting",
      description: "Expert guidance for digital transformation and market dominance.",
      features: ["Market Analysis", "Digital Strategy", "Growth Planning"]
    },
    {
      title: "Premium Development",
      description: "Cutting-edge solutions crafted with precision and excellence.",
      features: ["Custom Software", "Enterprise Solutions", "Digital Products"]
    },
    {
      title: "Elite Education",
      description: "Transform your organization through premium learning experiences.",
      features: ["Leadership Training", "Digital Skills", "Custom Programs"]
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that deliver exceptional ROI.",
      features: ["Brand Strategy", "Performance Marketing", "Content Excellence"]
    }
  ];

  return (
    <section id="what" className="py-24">
    </section>
  );
} 