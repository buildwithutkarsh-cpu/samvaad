'use client'

import { useRef, useState, MouseEvent } from 'react'
import { motion, useInView, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Zap, Cpu, AlignLeft, Package, Accessibility, Plus, ArrowRight } from 'lucide-react'

const FEATURES = [
  { icon: Zap, title: 'edge intelligence', description: 'sub-second, localized gesture-to-text conversion that tracks the fluid speed of native human conversation.' },
  { icon: Package, title: 'standalone form', description: 'an ultra-lightweight, completely self-contained wearable designed for seamless all-day comfort.' },
  { icon: AlignLeft, title: 'direct readout', description: 'integrated outward-facing display gives immediate text readouts without requiring a paired mobile screen.' },
  { icon: Cpu, title: 'zero cloud reliance', description: '100% offline local model execution safeguards absolute conversational privacy and eliminates data dead zones.' },
  { icon: Accessibility, title: 'co-designed truth', description: 'built from the ground up alongside deaf community advocates to ensure genuine respect for linguistic nuances.' },
]

// High-Stiffness Spring Presets for Tactical Responsiveness
const kineticContainerVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 80 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 65, damping: 15, staggerChildren: 0.1, delayChildren: 0.05 } 
  }
}

const letterMatrixVariants = {
  hidden: { y: '120%', rotate: 6, scaleY: 1.5, opacity: 0 },
  visible: { y: 0, rotate: 0, scaleY: 1, opacity: 1, transition: { type: 'spring', stiffness: 140, damping: 12 } }
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const radarRef = useRef<HTMLDivElement>(null)
  const isSectionInView = useInView(containerRef, { once: true, margin: '-10%' })
  
  // Tactical Tracking Coordinates for the Radar Canvas
  const [radarCoords, setRadarCoords] = useState({ x: 100, y: 100, isHovered: false })
  const [activeTelemetry, setActiveTelemetry] = useState('SYS_IDLE // BEACON_ACTIVE')

  // Localized Magnetic Pointer Math for the Visualizer Block
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 })

  const handleRadarMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!radarRef.current) return
    const rect = radarRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Map to 0-200 viewBox matrix space
    const viewX = (x / rect.width) * 200
    const viewY = (y / rect.height) * 200
    
    setRadarCoords({ x: viewX, y: viewY, isHovered: true })
    mouseX.set((x / rect.width) * 30 - 15)
    mouseY.set((y / rect.height) * 30 - 15)

    if (Math.random() > 0.85) {
      const metrics = ['LOCK_TARGET_ACK', 'VECTOR_SKEW_CALC', 'NODE_GRID_RECON', 'STREAM_PARSING']
      setActiveTelemetry(`SYS_TRACKING // ${metrics[Math.floor(Math.random() * metrics.length)]}`)
    }
  }

  const handleRadarMouseLeave = () => {
    setRadarCoords(prev => ({ ...prev, isHovered: false }))
    mouseX.set(0)
    mouseY.set(0)
    setActiveTelemetry('SYS_IDLE // BEACON_ACTIVE')
  }

  const titleWords = "giving structural signing a digital voice.".split(" ")

  return (
    <section id="about" className="relative py-28 bg-[#ececec] text-[#0a0a0a] border-b-2 border-[#0a0a0a] font-sans overflow-hidden select-none">
      
      {/* 1. Technical Meta Navigation Row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center border-b border-[#0a0a0a]/10 pb-6 mb-16 font-mono text-[10px] tracking-widest uppercase font-bold text-[#0a0a0a]/60">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-1 text-[#0a0a0a]"
        >
          <Plus className="w-3 h-3 text-[#ff3e18] animate-pulse" /> [ operational_profile ]
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>sys_v2.6 // architectural_spec</motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden sm:block">autonomy_layer_03</motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 2. Main High-Fidelity Chassis Box */}
        <motion.div 
          ref={containerRef} 
          variants={kineticContainerVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch border-2 border-[#0a0a0a] bg-white shadow-[16px_16px_0px_0px_#0a0a0a] relative layout-card-box"
        >
          
          {/* Left Column: Mechanical Index Stripe */}
          <div className="lg:col-span-1 border-r-2 border-[#0a0a0a] bg-[#ececec] flex lg:flex-col justify-between items-center py-6 px-4 lg:py-12 relative overflow-hidden">
            <span className="font-mono text-[10px] font-black tracking-widest text-[#ff3e18] uppercase [writing-mode:vertical-lr] lg:rotate-180">
              [ spec_overview_manifest ]
            </span>
            <motion.div 
              initial={{ scale: 0.3, opacity: 0, rotate: -45 }}
              animate={isSectionInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', stiffness: 140, damping: 12, delay: 0.3 }}
              className="text-4xl md:text-5xl font-display font-black tracking-tighter text-[#0a0a0a] lg:[writing-mode:vertical-lr] lg:rotate-180 leading-none"
            >
              003
            </motion.div>
          </div>

          {/* Center Column: Core Kinetic Copy block */}
          <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between relative border-b-2 lg:border-b-0 lg:border-r-2 border-[#0a0a0a] overflow-hidden">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }}>
                  <Plus className="w-4 h-4 text-[#ff3e18]" />
                </motion.div>
                <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-[#0a0a0a]/50">
                  // core telemetry objectives
                </h4>
              </div>
              
              {/* Word-by-Word Heavy Spring Matrix Animation */}
              <h2 className="text-5xl sm:text-6xl md:text-[4.2rem] font-display font-black tracking-tight lowercase leading-[0.9] mb-8 text-[#0a0a0a] flex flex-wrap gap-x-3 gap-y-1">
                {titleWords.map((word, wIdx) => (
                  <span key={wIdx} className="overflow-hidden inline-block py-1">
                    <motion.span 
                      variants={letterMatrixVariants}
                      className={`inline-block origin-left ${word === "voice." || word === "digital" ? 'text-[#ff3e18]' : ''}`}
                      whileHover={{ scale: 1.08, rotate: -1.5, y: -2 }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h2>
              
              <div className="space-y-4 font-sans text-sm md:text-base font-medium leading-relaxed max-w-xl text-[#0a0a0a]/90">
                <p>
                  samvaad eliminates transactional friction by instantly translating spatial sign patterns into clear visual text readouts, enabling seamless fluid interactions without relying on dedicated human translation intermediates.
                </p>
                <p>
                  engineered completely for standalone reliability, the hardware tracks nuanced custom trajectories on high-speed hardware microprocessors, returning true structural autonomy directly to everyday environments.
                </p>
              </div>
            </div>

            {/* Bottom Dynamic Strip Layer */}
            <div className="mt-12 -mx-8 md:-mx-12 bg-[#ff3e18] p-6 text-white border-t-2 border-[#0a0a0a] flex items-center justify-between relative overflow-hidden group">
              <motion.div 
                className="absolute inset-0 bg-black/10 translate-x-[-100%]" 
                whileHover={{ translateX: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <div className="font-mono text-[9px] uppercase tracking-widest font-bold opacity-90 max-w-sm z-10 leading-tight">
                [ objective: native spatial language compiled down to zero cloud latency frameworks ]
              </div>
              <motion.div 
                whileHover={{ x: 6, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="bg-[#0a0a0a] p-3 text-white border border-white/20 z-10 cursor-pointer shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]"
              >
                <ArrowRight className="w-4 h-4 text-[#ff3e18]" />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive Pointer-Targeted Vector Radar Grid */}
          <div 
            ref={radarRef}
            onMouseMove={handleRadarMouseMove}
            onMouseLeave={handleRadarMouseLeave}
            className="lg:col-span-5 bg-[#ececec]/30 p-8 flex flex-col justify-between items-center relative overflow-hidden group cursor-crosshair min-h-[350px] lg:min-h-auto"
          >
            <div className="absolute top-4 left-4 font-mono text-[9px] font-bold tracking-wider text-[#0a0a0a]/40">[ tracking_field_mesh ]</div>
            
            {/* Dynamic Telemetry Logging Output */}
            <div className="absolute top-4 right-4 font-mono text-[8px] text-[#0a0a0a]/60 bg-white/80 px-2 py-0.5 border border-[#0a0a0a]/10 backdrop-blur-sm tabular-nums">
              {activeTelemetry}
            </div>

            {/* Interactive Vector Radar SVG Layout Frame */}
            <motion.svg 
              style={{ x: springX, y: springY, transformStyle: 'preserve-3d' }}
              className="w-full h-full max-w-[250px] max-h-[250px] my-auto overflow-visible transition-transform duration-200" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Matrix Layout Auxiliary Guidelines */}
              <line x1="10" y1="100" x2="190" y2="100" stroke="#0a0a0a" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
              <line x1="10" y1="40" x2="190" y2="40" stroke="#0a0a0a" strokeWidth="0.25" strokeDasharray="1 3" opacity="0.2" />
              <line x1="10" y1="160" x2="190" y2="160" stroke="#0a0a0a" strokeWidth="0.25" strokeDasharray="1 3" opacity="0.2" />
              <line x1="100" y1="10" x2="100" y2="190" stroke="#0a0a0a" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />

              {/* Constant Rotating Outer Telemetry Ring */}
              <motion.circle 
                cx="100" cy="100" r="75" stroke="#0a0a0a" strokeWidth="1" strokeDasharray="6 6"
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                style={{ transformOrigin: '100px 100px' }}
              />

              {/* Reverse Inner Speed-Ring Indicator */}
              <motion.circle 
                cx="100" cy="100" r="45" stroke="#ff3e18" strokeWidth="1" strokeDasharray="3 2"
                animate={{ rotate: -360 }} 
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                style={{ transformOrigin: '100px 100px' }}
              />

              {/* Continuously Animated Laser Core Scanning Ring */}
              <motion.path 
                d="M 25,100 C 60,30 80,170 100,100 C 120,30 140,170 175,100" 
                stroke="#0a0a0a" 
                strokeWidth="1.5"
                animate={{ pathLength: [0, 1, 0], opacity: [0.3, 0.9, 0.3] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />

              {/* Static Anchor Core Microchips */}
              <g transform="translate(25, 100)">
                <rect x="-3" y="-3" width="6" height="6" fill="#0a0a0a" />
              </g>
              <g transform="translate(175, 100)">
                <circle cx="0" cy="0" r="3" fill="#ff3e18" />
              </g>

              {/* Interactive Cursor Tracking HUD Crosshairs */}
              <AnimatePresence>
                {radarCoords.isHovered && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 15 }}
                  >
                    {/* Targeting Laser Coordinates Center Ring */}
                    <circle cx={radarCoords.x} cy={radarCoords.y} r="10" stroke="#ff3e18" strokeWidth="0.75" strokeDasharray="2 1" />
                    <circle cx={radarCoords.x} cy={radarCoords.y} r="2" fill="#ff3e18" />
                    
                    {/* Horizontal Tracking Extension Guideline Line */}
                    <line x1="0" y1={radarCoords.y} x2="200" y2={radarCoords.y} stroke="#ff3e18" strokeWidth="0.5" opacity="0.25" />
                    {/* Vertical Tracking Extension Guideline Line */}
                    <line x1={radarCoords.x} y1="0" x2={radarCoords.x} y2="200" stroke="#ff3e18" strokeWidth="0.5" opacity="0.25" />
                  </motion.g>
                )}
              </AnimatePresence>
            </motion.svg>

            {/* Dynamic Real-time Coordinates Feed Output */}
            <div className="absolute bottom-4 left-4 font-mono text-[9px] opacity-40 flex gap-4">
              <span>X_VEC: <span className="tabular-nums font-bold">{radarCoords.x.toFixed(0)}</span></span>
              <span>Y_VEC: <span className="tabular-nums font-bold">{radarCoords.y.toFixed(0)}</span></span>
            </div>
          </div>

        </motion.div>

        {/* 3. Bottom Layer: Magnetic Feature Matrix Grid Array */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ type: 'spring', stiffness: 90, damping: 15, delay: i * 0.06 }}
              whileHover={{ 
                y: -8, 
                x: -3,
                shadow: "12px 12px 0px 0px rgba(10,10,10,1)",
                transition: { type: 'spring', stiffness: 250, damping: 10 }
              }}
              className="group relative bg-white border-2 border-[#0a0a0a] rounded-none p-6 transition-colors duration-200 hover:bg-[#0a0a0a] cursor-crosshair shadow-[5px_5px_0px_0px_#0a0a0a]"
            >
              <div className="flex justify-between items-start mb-6">
                {/* Micro Icon Enclosure with Hover Twist Mechanics */}
                <motion.div 
                  className="w-10 h-10 border border-[#0a0a0a] text-[#0a0a0a] bg-transparent flex items-center justify-center transition-colors duration-150 group-hover:border-[#ff3e18] group-hover:text-[#ff3e18] rounded-none"
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 8 }}
                >
                  <feature.icon className="w-4 h-4" />
                </motion.div>
                <span className="font-mono text-[9px] font-black text-[#0a0a0a]/30 group-hover:text-[#ff3e18]/60 transition-colors duration-150">
                  [INDEX_NODE_0{i + 1}]
                </span>
              </div>
              
              <h3 className="font-display font-black text-xl tracking-tight lowercase mb-2 leading-none text-[#0a0a0a] transition-colors duration-150 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="font-sans text-xs font-semibold leading-relaxed text-[#0a0a0a]/70 transition-colors duration-150 group-hover:text-white/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}