'use client'

import React, { useState, useEffect, useRef, MouseEvent } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'

// Structural skeletal connection pairs for MediaPipe landmark parsing
const SKELETAL_BONES = [
  [0, 1], [1, 2], [2, 3], [3, 4],       // Thumb
  [0, 5], [5, 6], [6, 7], [7, 8],       // Index Finger
  [9, 10], [10, 11], [11, 12],          // Middle Finger
  [13, 14], [14, 15], [15, 16],         // Ring Finger
  [0, 17], [17, 18], [18, 19], [19, 20], // Pinky
  [5, 9], [9, 13], [13, 17]             // Palm base structural cluster connections
]

// Pure sign gesture landmark matrices representing specific ISL alphanumeric expressions
const GESTURE_PROFILES = [
  // Gesture Alpha (Open Palm State)
  [
    { x: 50, y: 85 }, { x: 35, y: 75 }, { x: 25, y: 65 }, { x: 20, y: 55 }, { x: 15, y: 48 },
    { x: 42, y: 55 }, { x: 40, y: 40 }, { x: 39, y: 28 }, { x: 38, y: 15 },
    { x: 50, y: 53 }, { x: 50, y: 36 }, { x: 50, y: 22 }, { x: 50, y: 10 },
    { x: 58, y: 55 }, { x: 60, y: 40 }, { x: 61, y: 28 }, { x: 62, y: 16 },
    { x: 66, y: 58 }, { x: 70, y: 46 }, { x: 74, y: 36 }, { x: 78, y: 25 }
  ],
  // Gesture Beta (Dynamic Closed Punch Frame / Fist Sign Formation)
  [
    { x: 50, y: 85 }, { x: 42, y: 78 }, { x: 38, y: 70 }, { x: 45, y: 65 }, { x: 55, y: 65 },
    { x: 38, y: 62 }, { x: 36, y: 52 }, { x: 46, y: 52 }, { x: 52, y: 56 },
    { x: 46, y: 62 }, { x: 45, y: 52 }, { x: 53, y: 52 }, { x: 56, y: 58 },
    { x: 54, y: 64 }, { x: 53, y: 54 }, { x: 60, y: 54 }, { x: 61, y: 60 },
    { x: 62, y: 68 }, { x: 62, y: 60 }, { x: 68, y: 60 }, { x: 68, y: 64 }
  ],
  // Gesture Gamma (Precise Vector Pinch Angle / Target Focus Formation)
  [
    { x: 50, y: 85 }, { x: 38, y: 76 }, { x: 32, y: 66 }, { x: 36, y: 54 }, { x: 44, y: 46 },
    { x: 44, y: 55 }, { x: 45, y: 44 }, { x: 46, y: 38 }, { x: 45, y: 44 },
    { x: 52, y: 53 }, { x: 54, y: 36 }, { x: 55, y: 22 }, { x: 56, y: 10 },
    { x: 60, y: 55 }, { x: 64, y: 40 }, { x: 66, y: 28 }, { x: 68, y: 16 },
    { x: 68, y: 58 }, { x: 74, y: 46 }, { x: 78, y: 36 }, { x: 82, y: 25 }
  ]
]

// Kinetic Stagger Timings & Spring Presets
const heroContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

const textRevealVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 130, damping: 17 } }
}

const characterContainerVariants = {
  initial: { opacity: 1 },
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
}

const characterVariants = {
  initial: { y: '130%', scaleY: 1.6, rotate: -8, filter: 'blur(8px)', opacity: 0 },
  animate: { 
    y: 0, 
    scaleY: 1,
    rotate: 0, 
    filter: 'blur(0px)',
    opacity: 1,
    transition: { type: 'spring', stiffness: 160, damping: 14 } 
  }
}

export default function HeroSection() {
  const [isWireframe, setIsWireframe] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [currentGestureIndex, setCurrentGestureIndex] = useState(0)
  const [tickToggle, setTickToggle] = useState(false)
  
  const [telemetryLogs, setTelemetryLogs] = useState<string[]>([
    'CONNECTING_TO_SERVER...',
    'API_STREAM_ESTABLISHED',
    'SERVER_INFERENCE // OK'
  ])
  
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const frameRef = useRef<HTMLDivElement>(null)
  const overallContainerRef = useRef<HTMLDivElement>(null)

  // Motion Values for Advanced Parallax Cursor Matrix Maps
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const backgroundLightX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['20%', '80%']), { stiffness: 50, damping: 22 })
  const backgroundLightY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['20%', '80%']), { stiffness: 50, damping: 22 })

  const cardRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { stiffness: 100, damping: 18 })
  const cardRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { stiffness: 100, damping: 18 })
  const cardTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 100, damping: 18 })
  const cardTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), { stiffness: 100, damping: 18 })

  // Remote TFLite Stream Log Simulation Engine
  useEffect(() => {
    const availableLogs = [
      'UPLINK_FRAME_SENT // RAW_RGB',
      'SERVER_CPU_UTIL // MINIMAL',
      'WEBSOCKET_PING // STABLE',
      'TFLITE_SERVER_INFERENCE_OK',
      'LATENCY_ROUND_TRIP // COMPRESSED',
      'PACKET_STREAM_STABILIZED',
      'PREDICTION_EMIT // TEXT_RENDER'
    ]
    const interval = setInterval(() => {
      setTelemetryLogs((prev) => {
        const nextLog = availableLogs[Math.floor(Math.random() * availableLogs.length)]
        return [...prev.slice(1), `${nextLog} // INFERENCE_ACTIVE`]
      })
      setTickToggle(t => !t)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  // Auto-cycle model landmark gesture frames to simulate continuous hand processing sequence
  useEffect(() => {
    const gestureInterval = setInterval(() => {
      setCurrentGestureIndex((prev) => (prev + 1) % GESTURE_PROFILES.length)
    }, 2800)
    return () => clearInterval(gestureInterval)
  }, [])

  const handleGlobalMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!overallContainerRef.current) return
    const rect = overallContainerRef.current.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1
    mouseX.set(nx)
    mouseY.set(ny)

    if (frameRef.current) {
      const fRect = frameRef.current.getBoundingClientRect()
      const fx = ((e.clientX - fRect.left) / fRect.width) * 2 - 1
      const fy = ((e.clientY - fRect.top) / fRect.height) * 2 - 1
      setCoords({ x: parseFloat(fx.toFixed(2)), y: parseFloat(fy.toFixed(2)) })
    }
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setCoords({ x: 0, y: 0 })
  }

  const activeHandFrame = GESTURE_PROFILES[currentGestureIndex]
  const titleLetters = "samvaad".split("")

  return (
    <motion.div 
      ref={overallContainerRef}
      onMouseMove={handleGlobalMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={heroContainerVariants}
      initial="initial"
      animate="animate"
      className={`w-full min-h-screen flex flex-col font-sans overflow-hidden select-none antialiased transition-colors duration-700 relative ${
        isWireframe ? 'bg-white text-black' : 'bg-[#f4f4f4] text-black'
      }`}
    >
      {/* Interactive Radial Lighting Mesh */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-multiply"
        style={{
          background: useTransform(
            [backgroundLightX, backgroundLightY],
            (values) => `radial-gradient(650px circle at ${values[0]} ${values[1]}, ${isWireframe ? 'rgba(0,0,0,0.05)' : 'rgba(255,66,29,0.14)'}, transparent 80%)`
          )
        }}
      />

      {/* Brutalist Grid Styles Overlay */}
      <style dangerouslySetInnerHTML={{__html: `
        .brutalist-grid-mesh {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, ${isWireframe ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isWireframe ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px);
        }
      `}} />

      {/* 1. Hardware Accelerated Marquee Track */}
      <motion.div 
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.1 }}
        className="w-full h-8 bg-black text-white border-b border-black flex items-center overflow-hidden z-20 font-mono text-[10px] tracking-[0.2em] uppercase font-bold relative"
      >
        <motion.div 
          className="flex whitespace-nowrap absolute left-0"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {Array(3).fill(null).map((_, outerIdx) => (
            <div key={outerIdx} className="flex shrink-0 items-center gap-12 pr-12">
              <span>SERVER ENGINE: ONLINE</span>
              <span className="text-[#ff421d] font-black">●</span>
              <span>REMOTE TFLITE GRAPH COMPILING</span>
              <span className="text-[#ff421d] font-black">●</span>
              <span>ROUND-TRIP STREAM LATENCY MINIMAL</span>
              <span className="text-[#ff421d] font-black">●</span>
              <span>WEBSOCKET FRAME UPLINK ASYNC OK</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* 2. Main Hero Split Canvas Frame */}
      <section className="relative flex-1 grid grid-cols-1 lg:grid-cols-12 brutalist-grid-mesh w-full z-10">
        
        {/* Left Side: Staggered Content Block */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 md:p-12 lg:p-16 relative z-10 box-border min-w-0">
          <div>
            {/* Top Label Reveal */}
            <div className="overflow-hidden mb-8">
              <motion.span 
                variants={textRevealVariants}
                className="font-mono text-xs font-bold tracking-[0.2em] text-[#ff421d] block"
              >
                // INCLUSION PROJECT LAYER
              </motion.span>
            </div>
            
            {/* Kinetic Letter Matrix Reveal */}
            <div className="w-full block overflow-hidden py-4">
              <motion.h1 
                variants={characterContainerVariants}
                className="text-[15vw] sm:text-[11vw] lg:text-[8vw] font-black tracking-[-0.05em] leading-[0.85] text-black lowercase select-none font-sans flex overflow-hidden"
              >
                {titleLetters.map((letter, idx) => (
                  <motion.span
                    key={idx}
                    variants={characterVariants}
                    className="inline-block origin-bottom-left will-change-transform"
                    whileHover={{ 
                      scale: 1.15, 
                      y: -12,
                      rotate: -4,
                      color: '#ff421d',
                      transition: { type: 'spring', stiffness: 350, damping: 9 } 
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Paragraph Text Reveal */}
            <div className="overflow-hidden max-w-md mt-6 md:mt-10">
              <motion.p 
                initial={{ opacity: 0, x: -25, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-neutral-900 text-sm md:text-base font-semibold leading-relaxed tracking-tight"
              >
                Breaking communication barriers. A self-contained, assistive technical wearable layer translating Indian Sign Language into clear text in real time.
              </motion.p>
            </div>
          </div>

          {/* Interactive Core Architecture Reveal Drawer */}
          <div className="mt-16 lg:mt-0 relative min-h-[48px]">
            <div className="flex items-center gap-4">
              <motion.button 
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                whileHover={{ scale: 1.12, rotate: isDrawerOpen ? -180 : 180 }}
                whileTap={{ scale: 0.88 }}
                transition={{ type: 'spring', stiffness: 220, damping: 11 }}
                className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white font-black text-sm font-mono cursor-pointer transition-shadow shadow-md hover:bg-black z-20 border border-black"
              >
                {isDrawerOpen ? '✕' : '⚙'}
              </motion.button>
              
              <span className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase font-bold">
                {isDrawerOpen ? '[ Hide Manifest Metrics ]' : '[ Inspect Architecture Manifest ]'}
              </span>

              {/* Layout State Component Toggle Switch */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2, x: -2, shadow: "[5px_5px_0px_0px_rgba(0,0,0,1)]" }}
                whileTap={{ scale: 0.95, y: 1, x: 1, shadow: "[1px_1px_0px_0px_rgba(0,0,0,1)]" }}
                onClick={() => setIsWireframe(!isWireframe)}
                className="ml-auto font-mono text-[9px] font-black border-2 border-black bg-white px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase transition-all"
              >
                {isWireframe ? 'Render: Solid' : 'Render: Core'}
              </motion.button>
            </div>

            <AnimatePresence>
              {isDrawerOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 35, scale: 0.93, rotateX: -12 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(4px)' }}
                  transition={{ type: 'spring', stiffness: 240, damping: 15 }}
                  style={{ transformOrigin: 'bottom left', perspective: 1000 }}
                  className="absolute bottom-16 left-0 w-full max-w-md bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-mono text-[11px] text-black z-30"
                >
                  <div className="border-b border-black pb-2 mb-3 flex justify-between font-black text-[#ff421d]">
                    <span>// CORE SERVER PIPELINE SPEC</span>
                    <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.2 }}>REMOTE_SRV_V3</motion.span>
                  </div>
                  <div className="space-y-2 leading-relaxed">
                    {[
                      { label: "PIPELINE LOGIC", value: "Local Client Capture → High-Speed Server API" },
                      { label: "INFERENCE ENGINE", value: "TensorFlow Lite API Server Layer (Quantized Graphs)" },
                      { label: "UPLINK STREAM", value: "Low-Latency WebSockets Frame Transmission Loop" },
                      { label: "ISL DIALECTS", value: "Structural Landmarks Decoded Server-Side" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <span className="text-neutral-400">{item.label}:</span> {item.value}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Active Vector Control Telemetry Terminal */}
        <div 
          style={{ perspective: 1200 }}
          className={`lg:col-span-5 p-6 md:p-12 flex flex-col justify-between relative min-h-[65vh] lg:min-h-full border-t lg:border-t-0 lg:border-l border-black z-20 transition-colors duration-700 ${
            isWireframe ? 'bg-neutral-50' : 'bg-[#ff421d] shadow-[-1px_0_0_0_rgba(0,0,0,1)]'
          }`}
        >
          {/* Layout Blueprint Decorative Label */}
          <AnimatePresence>
            {isWireframe && (
              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-3 left-3 font-mono text-[8px] text-neutral-400"
              >
                BOUND_BOX // MESH_CONTAINER // SPAN_COL_5
              </motion.div>
            )}
          </AnimatePresence>

          <div className={`flex justify-between items-start font-mono text-[10px] font-bold tracking-widest transition-colors duration-700 ${
            isWireframe ? 'text-black' : 'text-white'
          }`}>
            <div className="opacity-90">X-LAB PLATFORM</div>
            <div className="text-right leading-tight tracking-[0.15em]">
              AUTONOMOUS<br />SYSTEMS
            </div>
          </div>

          {/* Core Hardware Chassis Housing Live SVG Matrix with Dynamic Parallax Spring */}
          <motion.div 
            ref={frameRef}
            initial={{ scale: 0.88, opacity: 0, rotateY: 20 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ type: 'spring', stiffness: 95, damping: 16, delay: 0.2 }}
            style={{
              rotateX: cardRotateX,
              rotateY: cardRotateY,
              x: cardTranslateX,
              y: cardTranslateY,
              transformStyle: 'preserve-3d',
            }}
            className="my-auto w-full max-w-sm mx-auto bg-[#141414] border-2 border-black p-6 flex flex-col justify-between aspect-[3/4] text-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative cursor-crosshair group overflow-hidden will-change-transform"
          >
            {/* Background Structural Mesh Lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none brutalist-grid-mesh invert" />

            <div className="flex justify-between items-center font-mono text-[10px] text-neutral-400 tracking-widest z-10" style={{ transform: 'translateZ(20px)' }}>
              <span>[ LIVE_MODEL_INFERENCE_MESH ]</span>
              <motion.span 
                animate={{ opacity: [1, 0.2, 1], scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="text-[#ff421d] font-black text-[9px]"
              >
                API_RUN
              </motion.span>
            </div>

            {/* Canvas Sub-Viewport Component */}
            <div 
              style={{ transform: 'translateZ(35px)' }}
              className="relative w-full aspect-square flex items-center justify-center z-10 bg-black/60 border border-neutral-900 p-2 my-4 overflow-hidden shadow-inner group-hover:border-neutral-700 transition-colors"
            >
              {/* Target Vector Guideline Axes */}
              <div className="absolute inset-x-0 top-1/2 h-px border-t border-dashed border-neutral-800/60 pointer-events-none" />
              <div className="absolute inset-y-0 left-1/2 w-px border-l border-dashed border-neutral-800/60 pointer-events-none" />

              {/* Dynamic SVG Landmark Vector Stream Mapping */}
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                
                {/* 1. Skeletal Bone Links Drawing */}
                {SKELETAL_BONES.map((bone, index) => {
                  const ptA = activeHandFrame[bone[0]]
                  const ptB = activeHandFrame[bone[1]]
                  if (!ptA || !ptB) return null

                  const x1 = ptA.x + (coords.x * 3.8)
                  const y1 = ptA.y + (coords.y * 3.8)
                  const x2 = ptB.x + (coords.x * 3.8)
                  const y2 = ptB.y + (coords.y * 3.8)

                  return (
                    <motion.line
                      key={`bone-${index}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={currentGestureIndex === 1 ? '#ff421d' : '#ffffff'}
                      strokeWidth={currentGestureIndex === 1 ? "1.8" : "1.2"}
                      strokeLinecap="round"
                      opacity="0.95"
                      animate={{ x1, y1, x2, y2 }}
                      transition={{ type: 'spring', damping: 20, stiffness: 260 }}
                    />
                  )
                })}

                {/* 2. MediaPipe Landmark Node Matrix Array */}
                {activeHandFrame.map((point, index) => {
                  const projectedX = point.x + (coords.x * 3.8)
                  const projectedY = point.y + (coords.y * 3.8)
                  const isTipNode = [4, 8, 12, 16, 20].includes(index)

                  return (
                    <motion.circle
                      key={`landmark-${index}`}
                      cx={projectedX}
                      cy={projectedY}
                      r={isTipNode ? 2.5 : 1.5}
                      fill={isTipNode ? '#ff421d' : '#ffffff'}
                      stroke="#141414"
                      strokeWidth="0.6"
                      animate={{ cx: projectedX, cy: projectedY }}
                      transition={{ type: 'spring', damping: 16, stiffness: 300 }}
                      whileHover={{ scale: 2 }}
                    />
                  )
                })}
              </svg>

              {/* Dynamic Matrix SKEW Coordinates Output Overlay */}
              <div className="absolute bottom-3 left-3 font-mono text-[8px] text-neutral-500 tracking-tighter bg-[#141414]/90 px-1.5 py-0.5 border border-neutral-900">
                SKEW_X: <span className="text-white font-bold tabular-nums">{coords.x}</span> // SKEW_Y: <span className="text-white font-bold tabular-nums">{coords.y}</span>
              </div>
            </div>

            {/* Dynamic Sliding Console Logger Feed */}
            <div style={{ transform: 'translateZ(15px)' }} className="border-t border-neutral-900 pt-3 flex flex-col gap-1 font-mono text-[8px] text-neutral-400 min-h-[36px]">
              <AnimatePresence mode="popLayout">
                {telemetryLogs.map((log, idx) => {
                  const isLast = idx === telemetryLogs.length - 1
                  return (
                    <motion.div 
                      key={log + idx}
                      initial={isLast ? { opacity: 0, x: -15, filter: 'blur(2px)' } : false}
                      animate={{ opacity: isLast ? 1 : 0.3, x: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -6, filter: 'blur(2px)' }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className={`truncate ${isLast ? 'text-[#ff421d] font-bold' : ''}`}
                    >
                      &gt; {log}
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Frame Deck Mechanical Status Footer */}
            <div style={{ transform: 'translateZ(10px)' }} className="flex justify-between font-mono text-[10px] text-neutral-400 tracking-wider z-10 border-t border-neutral-900 pt-3 mt-2">
              <div className="flex items-center gap-1.5">
                <motion.span 
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }} 
                  transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }} 
                  className="w-1.5 h-1.5 bg-green-500 rounded-full block"
                />
                <span>STREAM.OK</span>
              </div>
              <motion.div
                animate={{ x: tickToggle ? [0, -3, 3, 0] : 0 }}
                transition={{ duration: 0.15 }}
              >
                REMOTE_SRV_3.0
              </motion.div>
            </div>
          </motion.div>

          <div className="h-2 invisible hidden lg:block" />
        </div>
      </section>
    </motion.div>
  )
}