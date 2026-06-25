'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertTriangle, ShieldAlert, ArrowRight, Plus } from 'lucide-react'

const PROBLEMS = [
  {
    stat: '63m+',
    label: 'systemic isolation',
    description: 'over 63 million citizens are cut off from basic public infrastructure, emergency healthcare, and standard judicial access due to the communication barrier.',
  },
  {
    stat: '<1%',
    label: 'the literacy gap',
    description: 'less than 1% of the hearing population understands indian sign language (isl), leaving signers entirely dependent on rare, expensive human interpreters.',
  },
  {
    stat: '70%',
    label: 'economic exclusion',
    description: 'the deaf community faces massive underemployment rates, driven not by a lack of capability, but by an absolute absence of accessible workplace collaboration tools.',
  },
  {
    stat: '400+',
    label: 'dialect fragmentation',
    description: 'isl spans hundreds of regional variations and localized idioms, making generic, un-localized web translation software completely ineffective in real life.',
  },
]

export default function ProblemSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' })
  const [activeDiagnostic, setActiveDiagnostic] = useState('ERR_01')

  return (
    <section id="problem" className="relative py-24 bg-[#ececec] text-[#0a0a0a] border-b-2 border-[#0a0a0a] font-sans overflow-hidden select-none">
      
      {/* Top Meta Bar inspired by Web.jpg */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center border-b border-[#0a0a0a]/10 pb-6 mb-16 font-mono text-[10px] tracking-widest uppercase font-bold text-[#0a0a0a]/60">
        <div className="flex items-center gap-1 text-[#0a0a0a]">
          <Plus className="w-3 h-3 text-[#ff3e18]" /> [ crisis_infrastructure ]
        </div>
        <div>sys_v2.6 // diagnostics</div>
        <div className="hidden sm:block">unmapped_boundaries</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch border-2 border-[#0a0a0a] bg-white shadow-[8px_8px_0px_0px_#0a0a0a]">
          
          {/* Left Column Aspect: Vertical Typography Marker Block from Web.jpg */}
          <div className="lg:col-span-1 border-r-2 border-[#0a0a0a] bg-[#ececec] flex lg:flex-col justify-between items-center py-6 px-4 lg:py-12">
            <span className="font-mono text-xs font-black tracking-widest text-[#ff3e18] uppercase [writing-mode:vertical-lr] lg:rotate-180">[ sys_fail ]</span>
            <div className="text-4xl md:text-5xl font-display font-black tracking-tighter text-[#0a0a0a] lg:[writing-mode:vertical-lr] lg:rotate-180 leading-none">
              001
            </div>
          </div>

          {/* Center Column: Core Problem Content Statement */}
          <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between relative border-b-2 lg:border-b-0 lg:border-r-2 border-[#0a0a0a]">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-[#ff3e18]" />
                <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-[#ff3e18]">
                  // system baseline breakdown
                </h4>
              </div>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tight lowercase leading-[0.85] mb-8 text-[#0a0a0a]">
                the barrier of <span className="text-[#ff3e18]">silence.</span>
              </h2>
              
              <p className="text-sm md:text-base leading-relaxed text-[#0a0a0a]/90 max-w-xl font-medium">
                modern social architecture assumes vocal fluency. when a deaf individual enters a critical public zone, communication loops collapse instantly. the barrier isn&apos;t systemic capacity—it is a complete absence of local translation interfaces at physical endpoints.
              </p>
            </div>

            {/* Asymmetric Orange Accent Box Intercept Block inspired by Web.jpg */}
            <div className="mt-12 -mx-8 md:-mx-12 bg-[#ff3e18] p-6 text-white border-t-2 border-b-2 sm:border-b-0 border-[#0a0a0a] flex items-center justify-between">
              <div className="font-mono text-[10px] uppercase tracking-widest font-bold opacity-90 max-w-sm">
                [ critical alert: over 63 million communication pathways blocked daily inside native borders ]
              </div>
              <div className="bg-[#0a0a0a] p-3 text-white border border-white/20">
                <ArrowRight className="w-4 h-4 text-[#ff3e18]" />
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Matrix Grid Data Display */}
          <div className="lg:col-span-5 bg-[#ececec]/40 grid grid-cols-1 sm:grid-cols-2 gap-0">
            {PROBLEMS.map((prob, i) => (
              <div 
                key={prob.label} 
                className={`p-6 flex flex-col justify-between border-b border-[#0a0a0a]/10 sm:border-b-2 sm:border-r-2 border-[#0a0a0a] last:border-b-0 sm:even:border-r-0 ${
                  i >= PROBLEMS.length - 2 ? 'sm:border-b-0' : ''
                } bg-white transition-colors duration-150 hover:bg-[#0a0a0a] group cursor-crosshair`}
              >
                <div>
                  <div className="text-4xl font-display font-black tracking-tighter text-[#0a0a0a] mb-1 transition-colors duration-150 group-hover:text-[#ff3e18]">
                    {prob.stat}
                  </div>
                  <div className="font-mono text-[9px] font-black uppercase tracking-wider text-[#ff3e18] mb-4">
                    // {prob.label}
                  </div>
                  <p className="text-xs leading-relaxed text-[#0a0a0a]/80 transition-colors duration-150 group-hover:text-white/80 font-medium">
                    {prob.description}
                  </p>
                </div>
                <div className="font-mono text-[8px] text-[#0a0a0a]/30 mt-6 transition-colors duration-150 group-hover:text-white/20">
                  [idx_0{i + 1}]
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}