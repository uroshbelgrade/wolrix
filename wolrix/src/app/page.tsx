'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Canvas } from '@react-three/fiber';
import { WhySection } from '@/components/sections/WhySection';
import { HowSection } from '@/components/sections/HowSection';
import { WhatSection } from '@/components/sections/WhatSection';
import { CompaniesSection } from '@/components/sections/CompaniesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { HeroParticles } from '@/components/HeroParticles';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { SectionWrapper } from '@/components/SectionWrapper';
import { MagneticButton } from '@/components/MagneticButton';

export default function Home() {
  return (
    <ParallaxProvider>
      <Navbar />
      
      <main className="relative content-spacing">
        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden">
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

          {/* Dynamic Background Elements */}
          <div className="absolute inset-0 z-[1]">
            {/* Enhanced gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%), linear-gradient(180deg, var(--background) 0%, transparent 50%, var(--background) 100%)'
              }}
            />
            
            {/* Dynamic shapes */}
            <motion.div
              className="absolute top-[20%] -right-32 w-[600px] h-[600px] opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                filter: 'blur(40px)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <motion.div
              className="absolute bottom-[30%] -left-32 w-[400px] h-[400px] opacity-10"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)',
                filter: 'blur(30px)'
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                y: [0, 30, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Interactive floating elements */}
          <div className="absolute inset-0 z-[2] pointer-events-none">
            <motion.div
              className="absolute top-1/4 right-1/4 w-32 h-32"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%'
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            <motion.div
              className="absolute bottom-1/3 left-1/3 w-48 h-48"
              style={{
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '50%'
              }}
              animate={{
                rotate: -360,
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>

          {/* Content with enhanced animations */}
          <div className="relative z-10 container-padding pt-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-col items-start">
                <motion.span 
                  className="text-muted mb-4 uppercase tracking-widest text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Excellence Is Not Optional
                </motion.span>
                
                <motion.h1 
                  className="heading-1 mb-8 leading-none"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Master or
                  <br />
                  Be Mastered
                </motion.h1>

                <motion.p 
                  className="text-2xl text-muted max-w-2xl mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  In a world that demands excellence, we forge our own future. 
                  Through strategic vision, unwavering discipline, and relentless innovation, 
                  we`re building a stronger digital future—because greatness cannot wait.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-6"
                >
                  <MagneticButton 
                    variant="outline" 
                    onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Our Philosophy
                  </MagneticButton>
                  <MagneticButton 
                    variant="primary"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Join the Elite
                  </MagneticButton>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionWrapper>
          <PhilosophySection />
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <WhySection />
        </SectionWrapper>
        
        <SectionWrapper delay={0.2}>
          <HowSection />
        </SectionWrapper>

        <WhatSection />
        <CompaniesSection />
        <ContactSection />

        {/* Add smooth scroll indicator between sections */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
          <div className="space-y-4">
            {['hero', 'philosophy', 'why', 'how'].map((section) => (
              <motion.div
                key={section}
                className="w-2 h-2 rounded-full bg-foreground/20 cursor-pointer hover:bg-foreground/40 transition-smooth"
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </div>
        </div>
      </main>
    </ParallaxProvider>
  );
}
