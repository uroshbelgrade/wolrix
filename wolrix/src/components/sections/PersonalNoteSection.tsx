'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function PersonalNoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = [
    "The digital age doesn&apos;t wait for anyone, and if you don&apos;t take the reins, you risk being left behind. In today&apos;s fast-paced, constantly evolving digital world, being reactive is a luxury businesses can no longer afford. The days of simply keeping up are over—you need to lead. The digital future is now—and those who control it shape tomorrow.",
    
    "Wolrix Digital isn&apos;t just another service provider; we&apos;re your strategic partner in digital excellence. We believe that businesses can&apos;t afford to follow trends—they need to define them. We lead the way through bold innovation, precision in execution, and a commitment to unparalleled excellence. Every solution we create is designed not only to keep you in the game but to make you the leader everyone else follows.",
    
    "Success is earned by those who innovate, challenge the status quo, and push beyond limits. With Wolrix Digital, you&apos;re not simply upgrading your digital presence; you&apos;re transforming your entire business. Whether it&apos;s through custom web development, AI solutions, or cutting-edge digital marketing, we provide you with the tools and strategies that place you ahead of the curve.",
    
    "In a world that demands more, we offer more. Businesses that only adapt will eventually fade. At Wolrix Digital, we don&apos;t just help you keep up with digital evolution—we drive it. Your business won&apos;t just compete; it will dominate the future, setting new standards for excellence and innovation.",
    
    "Technology alone isn&apos;t enough. It&apos;s about a comprehensive, integrated strategy that combines cutting-edge solutions with visionary execution. Every project we undertake is designed to create lasting impact, ensuring you&apos;re not just surviving the digital transformation but leading it.",
    
    "We are relentless. We push the boundaries of what&apos;s possible, delivering results that redefine success. When you partner with Wolrix Digital, you&apos;re positioning your business to lead the digital revolution—not tomorrow, but today."
  ];

  return (
    <div className="container-padding py-32 bg-hover/5" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-12 text-center">
          Personal Note
        </h2>
        
        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-lg text-muted leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-right"
        >
          <div className="inline-block border-l-2 border-accent pl-6 py-2">
            <div className="font-bold text-lg">Uros Jakovljevic</div>
            <div className="text-muted">Founder & CEO, Wolrix Digital</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 