'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function DynamicCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);
    
    const interactiveElements = document.querySelectorAll('button, a, [data-interactive]');
    
    window.addEventListener('mousemove', moveCursor);
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        mixBlendMode: 'difference'
      }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.9 : 0.6,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="w-8 h-8 bg-white rounded-full" />
        <div 
          className="absolute w-12 h-12 rounded-full"
          style={{
            border: '1px solid rgba(255,255,255,0.3)',
            animation: 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite'
          }}
        />
        <div 
          className="absolute w-16 h-16 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(8px)'
          }}
        />
      </motion.div>
    </motion.div>
  );
} 