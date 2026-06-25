'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, ArrowRight, Camera, MapPin, Filter, Cpu, MessageSquare, MonitorSmartphone } from 'lucide-react'

const PIPELINE = [
  { icon: Camera, label: 'optical video intake', sublabel: 'continuous real-time streaming captured frames at 30fps baseline.' },
  { icon: MapPin, label: 'mediapipe node extraction', sublabel: 'mapping 21 explicit structural coordinate points on the spatial skeleton.' },
  { icon: Filter, label: 'feature matrix normalization', sublabel: 'filtering localized mathematical joint angles and relative distance maps.' },
  { icon: Cpu, label: 'tflite core classification', sublabel: 'embedded compressed inference engine identifies target sequence matrix tokens.' },
  { icon: MessageSquare, label: 'context sentence assembly', sublabel: 'constructing context-aware localized syntax streams natively.' },
  { icon: MonitorSmartphone, label: 'hardware interface dispatch', sublabel: 'flashing the completed text sequences directly to the physical display panel.' },
]

export default function SoftwareSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section id="software" className="relative py-24 bg-[#ececec] text-[#0a0a0a] border-b-2 border-[#0a0a0a] font-sans overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header Layout Configuration Block */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <Plus className="w-4 h-4 text-[#ff3e18]" />
              <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-[#0a0a0a]/60">
                // digital matrix loop systems
              </h4>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tight lowercase leading-[0.85] text-[#0a0a0a]">
              highly compressed compute <span className="text-[#ff3e18]">subroutines.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm font-medium leading-relaxed text-[#0a0a0a]/80 max-w-md border-l-2 border-[#ff3e18] pl-4 py-1">
              a optimized execution thread designed for low-power embedded processors, translating real-world spatial geometries into readable textual syntax streams instantly.
            </p>
          </div>
        </div>

        {/* Master Asymmetric Splitting Grid Layout Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#0a0a0a] bg-white shadow-[8px_8px_0px_0px_#0a0a0a]">
          
          {/* Left Block Side Column: Flat Orange Accent Band Panel with Vertical Meta Tags */}
          <div className="lg:col-span-4 bg-[#ff3e18] p-8 md:p-12 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-[#0a0a0a] text-white relative overflow-hidden">
            <div className="absolute right-[-25px] bottom-[-25px] font-display font-black text-[12rem] text-[#0a0a0a]/10 leading-none pointer-events-none">
              bin
            </div>
            
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-[#0a0a0a] px-2 py-1 inline-block mb-8">
                [ code_manifest_v2.6 ]
              </div>
              <h3 className="text-4xl font-display font-black tracking-tighter lowercase leading-none mb-6">
                the zero cloud firmware framework.
              </h3>
              <p className="text-xs font-medium opacity-90 leading-relaxed max-w-xs">
                eliminating all external data routing, our on-chip script matrices achieve complete cross-platform execution speed completely disconnected from the network.
              </p>
            </div>

            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest border-t border-white/20 pt-8 mt-12">
              <span>logic_compilation // verified</span>
              <span className="font-black text-[#0a0a0a]">005</span>
            </div>
          </div>

          {/* Right Side Column: Software Steps Execution Pipeline Table */}
          <div className="lg:col-span-8 bg-white grid grid-cols-1 sm:grid-cols-2 gap-0">
            {PIPELINE.map((step, i) => {
              const Icon = step.icon
              return (
                <div 
                  key={step.label}
                  className="p-8 border-b border-[#0a0a0a]/10 sm:border-b-2 sm:border-r-2 border-[#0a0a0a] last:border-b-0 sm:odd:border-l-0 sm:even:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 group hover:bg-[#0a0a0a] transition-colors duration-150 cursor-crosshair flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 border border-[#0a0a0a] flex items-center justify-center text-[#0a0a0a] transition-colors duration-150 group-hover:border-[#ff3e18] group-hover:text-[#ff3e18] rounded-none">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-[#0a0a0a]/40 group-hover:text-[#ff3e18]/60 transition-colors duration-150">
                        [stage_0{i + 1}]
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-black tracking-tight lowercase text-[#0a0a0a] group-hover:text-white transition-colors duration-150 mb-2">
                      {step.label}
                    </h4>
                    <p className="text-xs leading-relaxed text-[#0a0a0a]/70 group-hover:text-white/80 transition-colors duration-150 font-medium">
                      {step.sublabel}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* Bottom Horizontal Technical Integration Stack Badges Row Block */}
        <div className="flex flex-wrap items-center gap-2 mt-12 border-2 border-[#0a0a0a] bg-white p-4 max-w-xl font-mono text-xs font-black shadow-[4px_4px_0px_0px_#0a0a0a]">
          <span className="text-[#ff3e18] mr-2">[ verified_stack ]:</span>
          {['python', 'mediapipe_core', 'tflite_runtime', 'opencv_light'].map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 border border-[#0a0a0a]/20 bg-[#ececec]/50 lowercase"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}