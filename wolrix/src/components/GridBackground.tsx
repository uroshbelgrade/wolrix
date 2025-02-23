'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for(let x = 0; x < canvas.width; x += 30) {
        for(let y = 0; y < canvas.height; y += 30) {
          const distX = mousePos.current.x - x;
          const distY = mousePos.current.y - y;
          const dist = Math.sqrt(distX * distX + distY * distY);
          
          const size = Math.min(5, 400 / dist);
          
          ctx.fillStyle = `rgba(255,255,255,${0.1 - dist/1000})`;
          ctx.fillRect(x - size/2, y - size/2, size, size);
        }
      }
      
      requestAnimationFrame(drawGrid);
    };
    
    drawGrid();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-50"
      onMouseMove={(e) => {
        mousePos.current = { x: e.clientX, y: e.clientY };
      }}
    />
  );
} 