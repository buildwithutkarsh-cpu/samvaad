'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Maximize2 } from 'lucide-react'

const CAD_RENDERS = [
  { id: 1, label: 'front view mapping', sublabel: 'main device face layer featuring physical display outputs.', tag: 'CAD_RENDER_1' },
  { id: 2, label: 'side profile geometry', sublabel: 'ultra-slim ergonomic chassis boundaries.', tag: 'CAD_RENDER_2' },
  { id: 3, label: 'wrist mount interface', sublabel: 'tactile wearable integration component attachment details.', tag: 'CAD_RENDER_3' },
  { id: 4, label: 'exploded structural matrix', sublabel: 'internal component distribution layers and bus routings.', tag: 'CAD_RENDER_4' },
]

function RenderPlaceholder({ label, sublabel, tag, index }: { label: string; sublabel: string; tag: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const isWide = index === 0 || index === 3

  return (
    <motion.div
      ref={ref}
      className={`group relative bg-white border-b-2 last:border-b-0 md:border-b-2 border-[#0a0a0a] md:even:border-l-0 border-r-2 last:border-r-2 flex flex-col justify-between p-6 overflow-hidden min-h-[260px] cursor-crosshair hover:bg-[#0a0a0a] transition-colors duration-150 ${
        isWide ? 'md:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Structural Metadata Header Row */}
      <div className="flex justify-between items-start w-full font-mono text-[9px] tracking-wider text-[#0a0a0a]/40 group-hover:text-[#ff3e18]/80 transition-colors duration-150">
        <span>[ viewport_0{index + 1} // system_mesh ]</span>
        <Maximize2 className="w-3 h-3 opacity-60" />
      </div>

      {/* Center Graphics Frame Box Representation */}
      <div className="my-8 flex justify-center items-center w-full">
        <div className="w-12 h-12 border border-[#0a0a0a] group-hover:border-[#ff3e18] bg-[#ececec]/50 group-hover:bg-[#ececec]/10 flex items-center justify-center transition-colors duration-150">
          <svg viewBox="0 0 40 40" className="w-6 h-6 stroke-[#0a0a0a] group-hover:stroke-white transition-colors duration-150" fill="none">
            <rect x="6" y="10" width="28" height="20" strokeWidth="2" />
            <line x1="6" y1="20" x2="34" y2="20" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="20" y1="10" x2="20" y2="30" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        </div>
      </div>

      {/* Typography Description Panel */}
      <div className="w-full">
        <div className="text-lg font-display font-black tracking-tight lowercase text-[#0a0a0a] group-hover:text-white transition-colors duration-150 mb-1">
          {label}
        </div>
        <div className="text-xs font-medium text-[#0a0a0a]/70 group-hover:text-white/80 transition-colors duration-150 leading-relaxed max-w-xl">
          {sublabel}
        </div>
        <div className="font-mono text-[9px] text-[#ff3e18] mt-3 tracking-widest font-bold block uppercase">
          // {tag}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductDesignSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section id="design" className="relative py-24 bg-[#ececec] text-[#0a0a0a] border-b-2 border-[#0a0a0a] font-sans overflow-hidden select-none">
      
      {/* Top Meta Navigation Ribbon */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center border-b border-[#0a0a0a]/10 pb-6 mb-16 font-mono text-[10px] tracking-widest uppercase font-bold text-[#0a0a0a]/60">
        <div className="flex items-center gap-1 text-[#0a0a0a]">
          <Plus className="w-3 h-3 text-[#ff3e18]" /> [ industrial_chassis ]
        </div>
        <div>form_factor // spec_v2.6</div>
        <div className="hidden sm:block">cad_pipeline_compiled</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Asymmetric Header Layout */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tight lowercase leading-[0.85] text-[#0a0a0a]">
              ergonomic structural <span className="text-[#ff3e18]">enclosures.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm font-medium leading-relaxed text-[#0a0a0a]/80 max-w-md border-l-2 border-[#ff3e18] pl-4 py-1">
              engineered directly for functional wearability. our industrial architectural envelope prioritizes immediate physical comfort without indicating systemic limitation.
            </p>
          </div>
        </div>

        {/* Master Brutalist Structural Layout Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-2 border-l-2 border-[#0a0a0a] bg-white shadow-[8px_8px_0px_0px_#0a0a0a]">
          {CAD_RENDERS.map((render, i) => (
            <RenderPlaceholder key={render.id} {...render} index={i} />
          ))}
        </div>

        {/* Technical Data Specification Row Matrix */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-[#0a0a0a] bg-white mt-12 shadow-[4px_4px_0px_0px_#0a0a0a]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5 }}
        >
          {[
            { label: 'total physical mass weight', value: '< 120g', desc: 'optimized aggregate module displacement threshold metrics' },
            { label: 'power consumption vector', value: 'on-chip regulation', desc: 'low thermodynamic profile metrics preventing localized heating' },
            { label: 'longest dimension axis', value: '82mm x 45mm', desc: 'low Profile architectural horizontal dimensional clearance footprint' },
          ].map((spec, i) => (
            <div 
              key={spec.label} 
              className="p-6 border-b-2 last:border-b-0 lg:border-b-0 lg:border-r-2 last:border-r-2 border-[#0a0a0a] flex flex-col justify-between min-h-[140px]"
            >
              <div className="font-mono text-[9px] font-black uppercase tracking-widest text-[#0a0a0a]/40 mb-4">
                // metric_node_0{i + 1}
              </div>
              <div>
                <div className="text-3xl font-display font-black tracking-tight text-[#ff3e18] lowercase mb-1">
                  {spec.value}
                </div>
                <div className="text-xs font-bold text-[#0a0a0a] lowercase mb-1">{spec.label}</div>
                <div className="text-[10px] text-[#0a0a0a]/60 leading-tight font-medium lowercase">{spec.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}