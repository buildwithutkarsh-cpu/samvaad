/* Refactored for Stark Brutalist/Industrial matching Web_2.jpg */
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GraduationCap, Heart, Building2, Landmark, Headphones, MapPin, Accessibility,
} from 'lucide-react'
import projectData from '@/data/project.json'

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap, Heart, Building2, Landmark, Headphones, MapPin, Accessibility,
}

export default function ApplicationsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="applications" className="relative py-24 border-t border-black bg-background technical-grid-bg">
      <div className="absolute right-4 top-24 hidden xl:block font-mono text-[11px] tracking-[0.25em] text-vertical-lr text-black/40 uppercase">
        [ system.05 — operational zones ]
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="border-b-2 border-black pb-10 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <h4 className="text-xs font-mono tracking-[0.2em] text-primary mb-3">// SCOPE_INDEX</h4>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter lowercase leading-[0.85]">
              implementation zones
            </h2>
          </motion.div>
          
          <motion.div className="max-w-md" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="font-sans text-sm text-foreground border-l-2 border-primary pl-4 py-1">
              Every point of connection is a target for accessibility. SAMVAAD integration map:
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectData.applications.map((app, i) => {
            const Icon = ICON_MAP[app.icon] || Accessibility
            return (
              <motion.div
                key={app.id}
                className="group relative bg-white border border-black p-6 flex flex-col justify-start transition-all duration-150"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ boxShadow: '4px 4px 0px rgba(0,0,0,1)', transform: 'translate(-4px, -4px)' }}
              >
                <div className="w-full h-1 bg-black mb-6 group-hover:bg-primary transition-colors" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 border border-black flex items-center justify-center">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <span className="font-mono text-[9px] text-black/50 uppercase tracking-widest">// ZONE_0{i + 1}</span>
                </div>
                <h3 className="text-xl font-display font-black lowercase tracking-tighter mb-3 leading-none">{app.title}.</h3>
                <p className="text-xs text-foreground/80 font-sans leading-relaxed border-t border-black/10 pt-3">{app.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}