'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Hand, Camera, Eye, Brain, FileText, CheckCircle, Plus } from 'lucide-react'

const WORKFLOW = [
  { icon: Hand, label: 'spatial gesture input', description: 'user signs naturally within the device optical zone.' },
  { icon: Camera, label: 'high-speed camera capture', description: 'custom hardware lenses ingest data loops at 60fps local speed.' },
  { icon: Eye, label: 'coordinate skeleton map', description: 'on-chip vision units capture 21 distinct structural hand nodes.' },
  { icon: Brain, label: 'neural matrix compilation', description: 'compressed embedded frameworks compile coordinate data instantly.' },
  { icon: FileText, label: 'alphanumeric text readout', description: 'processed signs translate into clean text sequences.' },
  { icon: CheckCircle, label: 'zero-overhead readout', description: 'strings compile instantly onto the front integrated panel.' },
]

export default function SolutionSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' })

  return (
    <section id="solution" className="relative py-24 bg-[#ececec] text-[#0a0a0a] border-b-2 border-[#0a0a0a] font-sans overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header Grid Section mirroring Web.jpg framing layout */}
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <Plus className="w-4 h-4 text-[#ff3e18]" />
              <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-[#0a0a0a]/60">
                // active engineering remediation
              </h4>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tight lowercase leading-[0.85] text-[#0a0a0a]">
              compiling movement into clear <span className="text-[#ff3e18]">context.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm font-medium leading-relaxed text-[#0a0a0a]/80 max-w-md border-l-2 border-[#ff3e18] pl-4 py-1">
              samvaad routes gesture vectors through a streamlined hardware framework, enabling instant edge classification loops that render human translator dependencies entirely obsolete.
            </p>
          </div>
        </div>

        {/* Master Orange Intercept Panel & Pipeline Row Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#0a0a0a] bg-white shadow-[8px_8px_0px_0px_#0a0a0a]">
          
          {/* Flat Asymmetric Block Accent matching Web.jpg background splitting */}
          <div className="lg:col-span-4 bg-[#ff3e18] p-8 md:p-12 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-[#0a0a0a] text-white relative overflow-hidden">
            {/* Structural background geometric numbers */}
            <div className="absolute right-[-20px] bottom-[-20px] font-display font-black text-[12rem] text-[#0a0a0a]/10 leading-none pointer-events-none">
              isl
            </div>
            
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest bg-[#0a0a0a] px-2 py-1 inline-block mb-8">
                [ design_spec_v2 ]
              </div>
              <h3 className="text-4xl font-display font-black tracking-tighter lowercase leading-none mb-6">
                the standalone pipeline.
              </h3>
              <p className="text-xs font-medium opacity-90 leading-relaxed max-w-xs">
                every single calculation stage executes entirely inside local microprocessors. no external cloud processing latency, no data connection dependence.
              </p>
            </div>

            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest border-t border-white/20 pt-8 mt-12">
              <span>data stream // true</span>
              <span className="font-black text-[#0a0a0a]">002</span>
            </div>
          </div>

          {/* Workflow Steps Execution Table */}
          <div className="lg:col-span-8 bg-white grid grid-cols-1 sm:grid-cols-2 gap-0">
            {WORKFLOW.map((step, i) => {
              const Icon = step.icon
              return (
                <div 
                  key={step.label}
                  className="p-8 border-b border-[#0a0a0a]/10 sm:border-b-2 sm:border-r-2 border-[#0a0a0a] last:border-b-0 sm:odd:border-l-0 sm:even:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 group hover:bg-[#0a0a0a] transition-colors duration-150 cursor-crosshair flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 border border-[#0a0a0a] flex items-center justify-center text-[#0a0a0a] transition-colors duration-150 group-hover:border-[#ff3e18] group-hover:text-[#ff3e18]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-[#0a0a0a]/40 group-hover:text-[#ff3e18]/60 transition-colors duration-150">
                        [0{i + 1}]
                      </span>
                    </div>

                    <h4 className="text-lg font-display font-black tracking-tight lowercase text-[#0a0a0a] group-hover:text-white transition-colors duration-150 mb-2">
                      {step.label}
                    </h4>
                    <p className="text-xs leading-relaxed text-[#0a0a0a]/70 group-hover:text-white/80 transition-colors duration-150 font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}