'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { HeroParticles } from '@/components/HeroParticles';
import { MagneticButton } from '@/components/MagneticButton';

export default function VenturesPage() {
  return (
    <>
      <Navbar />
      
      <main className="relative min-h-screen">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ antialias: true }}
          >
            <HeroParticles />
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} intensity={0.4} />
            <fog attach="fog" args={['#000', 0, 15]} />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 container-padding min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <motion.span 
              className="text-accent mb-4 uppercase tracking-widest text-sm block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Coming Q4 2025
            </motion.span>
            
            <motion.h1 
              className="heading-1 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Wolrix
              <br />
              Ventures
            </motion.h1>

            <motion.p 
              className="text-2xl text-muted max-w-2xl mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Strategic investment arm focused on acquiring and scaling high-potential 
              digital assets. Building tomorrow&apos;s digital empires through 
              calculated investments and operational excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <MagneticButton 
                variant="primary"
                onClick={() => window.location.href = '/'}
              >
                Return to Homepage
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
} 