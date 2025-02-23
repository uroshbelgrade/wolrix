'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

export function MagneticButton({ 
  children, 
  onClick, 
  className = "", 
  variant = 'primary' 
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width/2);
    const middleY = clientY - (top + height/2);
    setPosition({ x: middleX*0.3, y: middleY*0.3 });
  };

  const baseStyles = "px-8 py-4 rounded-full transition-colors";
  const variantStyles = {
    primary: "bg-foreground text-background hover:bg-muted",
    outline: "border border-border text-foreground hover:bg-hover/10"
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
} 