'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete?: () => void
}

// Intense Glitch & Kinetic Keyframes
const glitchTimeline = {
  animate: {
    x: [0, -3, 2, -2, 3, -1, 0],
    y: [0, 2, -1, 2, -3, 1, 0],
    textShadow: [
      '0px 0px 0px rgba(255,66,29,0)',
      '2px -2px 0px rgba(255,66,29,0.8)',
      '-3px 2px 0px rgba(0,216,255,0.8)',
      '3px 1px 0px rgba(255,66,29,0.8)',
      '0px 0px 0px rgba(0,216,255,0)',
    ],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'linear',
    }
  }
}

const letterContainerVariants = {
  initial: { scale: 0.95 },
  animate: {
    scale: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
}

const letterVariants = {
  initial: { y: '130%', opacity: 0, rotateX: -90 },
  animate: { 
    y: '0%', 
    opacity: 1,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 180, damping: 10 } 
  }
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentLog, setCurrentLog] = useState('SYS_INIT // BOOT_STAGE_0')
  const [isVisible, setIsVisible] = useState(true)
  const [tickToggle, setTickToggle] = useState(false)

  // Rapid erratic frame engine updates
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        const increment = Math.floor(Math.random() * 15) + 6
        return Math.min(prev + increment, 100)
      })
      setTickToggle(t => !t)
    }, 130)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    if (progress < 15) setCurrentLog('SYS_INIT // CONFIGURING UPLINK CHANNEL')
    else if (progress < 35) setCurrentLog('NET_CONNECT // ESTABLISHING WEBSOCKETS')
    else if (progress < 55) setCurrentLog('API_HANDSHAKE // CONNECTION SECURED (42ms)')
    else if (progress < 75) setCurrentLog('GRAPH_FETCH // PULLING QUANTIZED TFLITE GRAPH')
    else if (progress < 90) setCurrentLog('TFLITE_CORE // COMPILING REMOTE MODEL LAYERS')
    else if (progress < 100) setCurrentLog('VECTOR_MAP // ALIGNING 400+ ISL LANDMARKS')
    else {
      setCurrentLog('STREAM_READY // ENGINE OPERATIONAL')
      const timeout = setTimeout(() => {
        setIsVisible(false)
        if (onComplete) onComplete()
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [progress, onComplete])

  const appNameLetters = "SAMVAAD".split("")

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            y: '-100%',
            skewY: -2,
            transition: { duration: 0.55, ease: [0.86, 0, 0.07, 1] } 
          }}
          className="fixed inset-0 z-50 bg-[#f4f4f4] text-black flex flex-col justify-between p-6 md:p-12 select-none overflow-hidden"
        >
          {/* LAYER 1: Infinite Moving Diagonal Ticker Grid */}
          <motion.div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[9px] leading-none select-none overflow-hidden"
            animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 70%, #000 70%)',
              backgroundSize: '20px 20px'
            }}
          />

          {/* LAYER 2: Live Raw Stream Data Blocks */}
          <div className="absolute top-24 left-12 right-12 bottom-24 opacity-[0.04] pointer-events-none font-mono text-[10px] hidden lg:block overflow-hidden flex-col gap-1 select-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div 
                key={i}
                initial={{ x: -20 }}
                animate={{ x: tickToggle ? 5 : 0 }}
                className="truncate whitespace-nowrap"
              >
                {`0x${(i * 457).toString(16).toUpperCase()} // FRAME_BUFFER_STREAM_ERR_CHECKING_VAL_${progress}_[OK] // `}
                {String(Math.sin(progress + i)).substring(0, 8)}
              </motion.div>
            ))}
          </div>

          {/* LAYER 3: Self-Drawing Perimeter Wireframe Layout */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-black/20 fill-none hidden sm:block px-4 py-4">
            <motion.rect 
              x="16" y="16" width="calc(100% - 32px)" height="calc(100% - 32px)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              strokeWidth="1"
            />
          </svg>

          {/* TOP MARGIN BAR */}
          <div className="w-full relative font-mono text-[10px] font-bold tracking-widest pb-4 overflow-hidden">
            <div className="w-full flex justify-between items-start z-10 relative">
              <div className="flex items-center gap-3">
                <motion.span 
                  animate={{ scale: [1, 1.4, 0.8, 1], backgroundColor: ['#ff421d', '#000000', '#ff421d'] }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                  className="w-2 h-2 rounded-full block"
                />
                <span>SAMVAAD ENGINE INITIALIZATION MATRIX</span>
              </div>
              <div className="flex items-center gap-4">
                <span>STAGE: {progress < 100 ? 'PRE-FLIGHT' : 'MOUNTING'}</span>
                <span>SYS_VER_3.0 // 2026</span>
              </div>
            </div>
            <motion.div 
              className="absolute bottom-0 left-0 h-[1px] bg-black"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* CENTER GRAPHICAL ACTION BLOCK */}
          <div className="my-auto flex flex-col items-center text-center w-full max-w-5xl mx-auto relative z-10">
            <div className="overflow-hidden mb-3">
              <motion.div 
                animate={{ y: [15, 0, -15], opacity: [0, 1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="font-mono text-xs font-black text-[#ff421d] tracking-[0.3em] uppercase"
              >
                ⚠️ DEPLOYING QUANTIZED CORE GRAPH
              </motion.div>
            </div>
            
            {/* Chromatic Distorted Centered Uppercase Title */}
            <motion.div 
              variants={letterContainerVariants}
              initial="initial"
              animate="animate"
              style={{ transformStyle: 'preserve-3d' }}
              className="relative py-4 overflow-visible"
            >
              <motion.h1 
                variants={glitchTimeline}
                animate="animate"
                style={{ letterSpacing: `${0.05 + (progress / 400)}em` }}
                className="text-[13vw] sm:text-[9vw] font-black font-sans leading-none text-black uppercase flex justify-center tracking-tighter"
              >
                {appNameLetters.map((letter, index) => (
                  <motion.span 
                    key={index} 
                    variants={letterVariants}
                    className="inline-block origin-center select-none"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            {/* HIGH-INTENSITY BRUTALIST RUNTIME TRACK BAR */}
            <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-11 w-full h-6 border-2 border-black bg-white relative p-0.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                
                {/* Chevrons Moving internal fill */}
                <motion.div 
                  className="h-full bg-[#ff421d] flex relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                >
                  <motion.div 
                    className="absolute inset-0 opacity-20 whitespace-nowrap font-mono text-[10px] text-white flex items-center"
                    animate={{ x: [-20, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
                  >
                    {"///////".repeat(20)}
                  </motion.div>
                </motion.div>

                {/* Micro Floating Quantizer Overlay Indicator */}
                <motion.div 
                  className="absolute top-0 bottom-0 w-[2px] bg-black"
                  style={{ left: `${progress}%` }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                />
              </div>

              {/* Rolling Numerical Slot Machine Indicator */}
              <div className="md:col-span-1 text-left md:text-right font-mono text-2xl font-black tracking-tighter tabular-nums flex items-baseline md:justify-end">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={progress}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="text-black inline-block"
                  >
                    {String(progress).padStart(3, '0')}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs text-[#ff421d] font-bold ml-0.5">%</span>
              </div>
            </div>
          </div>

          {/* LOWER DIAGNOSTIC SYSTEM DECK */}
          <div className="w-full relative pt-4 flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-[10px] font-bold tracking-wider gap-4">
            <div className="absolute top-0 left-0 h-[1px] bg-black w-full" />

            {/* Dynamic Console Shifter */}
            <div className="flex items-center gap-2 text-neutral-600 truncate max-w-2xl min-h-[16px]">
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 0.4, repeat: Infinity }} 
                className="text-[#ff421d]"
              >
                ⚡ [RUN]
              </motion.span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentLog}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="uppercase text-black truncate"
                >
                  {currentLog}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Spinning Hardware Interceptors */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              <span className="text-neutral-400 uppercase tracking-widest text-[9px] hidden sm:inline">ENGINE_BUS:</span>
              <div className="flex gap-1">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ 
                      rotate: tickToggle ? (idx % 2 === 0 ? 90 : -90) : 0,
                      backgroundColor: progress >= (idx + 1) * 25 ? '#ff421d' : '#ffffff' 
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-3 h-3 border border-black flex items-center justify-center text-[7px]"
                  >
                    +
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}