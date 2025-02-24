'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { HeroParticles } from '@/components/HeroParticles';
import { MagneticButton } from '@/components/MagneticButton';
import { SectionWrapper } from '@/components/SectionWrapper';
import Navbar from '@/components/Navbar';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyDigitalSection } from '@/components/sections/WhyDigitalSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { PersonalNoteSection } from '@/components/sections/PersonalNoteSection';

export default function DigitalPage() {
  return (
    <>
      <Navbar />
      
      <main className="relative">
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

          {/* Content */}
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
                  Digital Excellence Redefined
                </motion.span>
                
                <motion.h1 
                  className="heading-1 mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Master Your
                  <br />
                  Digital Future
                </motion.h1>

                <motion.p 
                  className="text-2xl text-muted max-w-2xl mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  We don&apos;t just deliver services—we shape digital landscapes. 
                  Through innovation, precision, and unmatched expertise, we transform 
                  businesses into market leaders.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-6"
                >
                  <MagneticButton 
                    variant="primary"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start Your Transformation
                  </MagneticButton>
                  <MagneticButton 
                    variant="outline"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explore Services
                  </MagneticButton>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <SectionWrapper id="services">
          <ServicesSection />
        </SectionWrapper>

        {/* Add the Personal Note section here */}
        <PersonalNoteSection />

        {/* Why Wolrix Digital Section */}
        <SectionWrapper>
          <WhyDigitalSection />
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper id="contact">
          <ContactSection />
        </SectionWrapper>
      </main>
    </>
  );
} 