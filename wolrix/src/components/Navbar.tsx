'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50">
      <div className="container-padding py-4">
        <div className="flex items-center justify-between">
          <motion.div
            animate={{
              scale: scrolled ? 0.8 : 1,
              rotateX: scrolled ? 45 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-xl font-bold">
              WOLRIX
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
} 