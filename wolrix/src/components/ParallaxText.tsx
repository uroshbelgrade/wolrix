'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute text-[20vw] font-black text-foreground/5 whitespace-nowrap">
        DIGITAL EXCELLENCE
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute text-[20vw] font-black text-foreground/5 whitespace-nowrap mt-[20vh]">
        MARKET DOMINANCE
      </motion.div>
    </div>
  );
} 