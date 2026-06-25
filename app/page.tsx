'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import LoadingScreen from '@/components/LoadingScreen'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import HardwareSection from '@/components/sections/HardwareSection'
import SoftwareSection from '@/components/sections/SoftwareSection'
import LiveMonitorSection from '@/components/sections/LiveMonitorSection'
import ProductDesignSection from '@/components/sections/ProductDesignSection'
import TeamSection from '@/components/sections/TeamSection'
import GallerySection from '@/components/sections/GallerySection'
import TimelineSection from '@/components/sections/TimelineSection'
import ApplicationsSection from '@/components/sections/ApplicationsSection'
import FutureScopeSection from '@/components/sections/FutureScopeSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [loaded])

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Navbar />
            <main>
              <HeroSection />
              <AboutSection />
              <ProblemSection />
              <SolutionSection />
              <HardwareSection />
              <SoftwareSection />
              
              {/* Live Streaming Interpretation Console */}
              <LiveMonitorSection />
              
              <ProductDesignSection />
              <TeamSection />
              <GallerySection />
              <TimelineSection />
              <ApplicationsSection />
              <FutureScopeSection />
              <ContactSection />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}