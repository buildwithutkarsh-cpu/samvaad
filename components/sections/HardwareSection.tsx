/* Refactored to fix typography layout collision and perfectly align with Web_2.jpg */
'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, ArrowRight, Cpu } from 'lucide-react'
import projectData from '@/data/project.json'

export default function HardwareSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [activeComponent, setActiveComponent] = useState<number | null>(null)

  return (
    <section id="technology" className="relative py-24 bg-[#ececec] text-[#0a0a0a] border-b-2 border-[#0a0a0a] font-sans overflow-hidden select-none">
      
      {/* Top Meta Navigation Bar from Web.jpg */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center border-b border-[#0a0a0a]/10 pb-6 mb-16 font-mono text-[10px] tracking-widest uppercase font-bold text-[#0a0a0a]/60">
        <div className="flex items-center gap-1 text-[#0a0a0a]">
          <Plus className="w-3 h-3 text-[#ff3e18]" /> [ physical_topology ]
        </div>
        <div>sys_v2.6 // compute_hardware</div>
        <div className="hidden sm:block">edge_nodes_active</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Stark Section Header Block — Fixed to resolve collision and enforce Web_2.jpg structural rules */}
        <div ref={ref} className="border-b-2 border-[#0a0a0a] pb-10 mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#ff3e18] mb-3">// HARDWARE_INDEX</h4>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter lowercase leading-[0.85] text-[#0a0a0a]">
              on-device micro-architecture <br className="hidden md:inline" />
              <span className="text-[#ff3e18]">specifications.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="max-w-md w-full flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-sans text-sm font-medium leading-relaxed text-[#0a0a0a]/80 border-l-2 border-[#ff3e18] pl-4 py-1">
              every physical module is integrated directly into a localized processing hub, minimizing thermodynamic overhead while driving all-day functional efficiency.
            </p>
          </motion.div>
        </div>

        {/* Master Brutalist Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#0a0a0a] bg-white shadow-[8px_8px_0px_0px_#0a0a0a]">
          
          {/* Left Block Side Column: Vertical Index Element */}
          <div className="lg:col-span-1 border-r-2 border-[#0a0a0a] bg-[#ececec] flex lg:flex-col justify-between items-center py-6 px-4 lg:py-12">
            <span className="font-mono text-[10px] font-black tracking-widest text-[#ff3e18] uppercase [writing-mode:vertical-lr] lg:rotate-180">[ physical_nodes ]</span>
            <div className="text-4xl md:text-5xl font-display font-black tracking-tighter text-[#0a0a0a] lg:[writing-mode:vertical-lr] lg:rotate-180 leading-none">
              004
            </div>
          </div>

          {/* Center Component List Matrix */}
          <div className="lg:col-span-6 bg-white flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-[#0a0a0a]">
            <div className="divide-y-2 divide-[#0a0a0a]">
              {projectData.hardware.map((component: any, i: number) => (
                <button
                  key={component.id}
                  className="w-full group relative flex items-center gap-5 p-6 text-left border-0 rounded-none bg-white hover:bg-[#0a0a0a] transition-colors duration-150 cursor-crosshair"
                  onMouseEnter={() => setActiveComponent(i)}
                  onMouseLeave={() => setActiveComponent(null)}
                >
                  <div className="w-10 h-10 border border-[#0a0a0a] text-[#0a0a0a] bg-transparent flex items-center justify-center flex-shrink-0 transition-colors duration-150 group-hover:border-[#ff3e18] group-hover:text-[#ff3e18]">
                    <span className="font-mono text-xs font-bold">[0{i + 1}]</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-lg font-display font-black tracking-tight lowercase text-[#0a0a0a] group-hover:text-white transition-colors duration-150 mb-1">
                      {component.name}
                    </div>
                    <p className="text-xs font-medium text-[#0a0a0a]/70 group-hover:text-white/80 transition-colors duration-150 leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Solid Horizontal International Orange Accent Strip */}
            <div className="bg-[#ff3e18] p-6 text-white border-t-2 border-[#0a0a0a] flex items-center justify-between">
              <div className="font-mono text-[10px] uppercase tracking-widest font-bold opacity-90 max-w-sm">
                [ design objective: self-contained edge modules eliminating reliance on peripheral client platforms ]
              </div>
              <div className="bg-[#0a0a0a] p-3 text-white border border-white/20">
                <ArrowRight className="w-4 h-4 text-[#ff3e18]" />
              </div>
            </div>
          </div>

          {/* Right Architecture Blueprint Diagram Canvas */}
          <div className="lg:col-span-5 bg-[#ececec]/30 p-8 flex flex-col justify-center items-center relative">
            <div className="absolute top-4 left-4 font-mono text-[9px] font-bold tracking-wider text-[#0a0a0a]/40">[ central_bus_topology ]</div>
            <div className="absolute bottom-4 right-4 font-mono text-[9px] opacity-40">hardware_mapping // continuous_loop</div>

            <div className="w-full aspect-square relative flex items-center justify-center max-w-[280px]">
              {/* Structural Outer Concentric Grid Blueprint Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[1, 2].map((n) => (
                  <div
                    key={n}
                    className="absolute rounded-none border border-[#0a0a0a]/10"
                    style={{ width: `${n * 50}%`, height: `${n * 50}%`, transform: 'rotate(45deg)' }}
                  />
                ))}
              </div>

              {/* Core Central Processing Unit Hub Node */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-14 h-14 border-2 border-[#0a0a0a] bg-white flex items-center justify-center shadow-[3px_3px_0px_0px_#ff3e18]">
                  <Cpu className="w-6 h-6 text-[#0a0a0a]" />
                </div>
                <div className="text-center font-mono">
                  <div className="text-[10px] font-black lowercase text-[#0a0a0a]">raspberry pi</div>
                  <div className="text-[8px] opacity-50 font-bold uppercase tracking-wider">[ core_host ]</div>
                </div>
              </div>

              {/* Peripheral Components Floating In Axis Matrix */}
              {projectData.hardware.slice(1).map((comp: any, i: number) => {
                const angle = (i / (projectData.hardware.length - 1)) * 2 * Math.PI - Math.PI / 2
                const radius = 40
                const x = 50 + radius * Math.cos(angle)
                const y = 50 + radius * Math.sin(angle)
                const isActive = activeComponent !== null && projectData.hardware[activeComponent + 1]?.id === comp.id

                return (
                  <div
                    key={comp.id}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div
                      className={`w-6 h-6 border transition-colors duration-150 flex items-center justify-center bg-white ${
                        isActive ? 'border-[#ff3e18] bg-[#0a0a0a]' : 'border-[#0a0a0a]'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 ${isActive ? 'bg-[#ff3e18]' : 'bg-[#0a0a0a]'}`} />
                    </div>
                  </div>
                )
              })}

              {/* Bus Vector Intercept Connection Vectors */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {projectData.hardware.slice(1).map((comp: any, i: number) => {
                  const angle = (i / (projectData.hardware.length - 1)) * 2 * Math.PI - Math.PI / 2
                  const radius = 40
                  const x = 50 + radius * Math.cos(angle)
                  const y = 50 + radius * Math.sin(angle)
                  return (
                    <line
                      key={comp.id}
                      x1="50" y1="50"
                      x2={x} y2={y}
                      stroke="#0a0a0a"
                      strokeWidth="0.75"
                      strokeDasharray="2 3"
                      className="opacity-20"
                    />
                  )
                })}
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}