/* Refactored for Stark Brutalist/Industrial matching Web.jpg */
'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import projectData from '@/data/project.json'

function TimelineItem({ item, index }: { item: typeof projectData.timeline[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-stretch gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Content Panel */}
      <div className={`flex-1 ${isLeft ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0 pb-8`}>
        <div 
          className="group relative bg-white border border-black p-5 transition-all duration-150"
          style={{ boxShadow: '0px 0px 0px rgba(0,0,0,1)' }}
          whileHover={{
            boxShadow: '4px 4px 0px rgba(0,0,0,1)',
            transform: 'translate(-4px, -4px)',
          }}
        >
          {/* Top Technical Progress Ribbon */}
          <div className="flex items-center justify-between gap-3 mb-4 font-mono text-[10px] text-muted-foreground tracking-wider">
            <span className="text-primary font-bold">// {item.date.toUpperCase()}</span>
            <span>LOG_00{index + 1}</span>
          </div>

          {/* Lowercase compressed header matching layout typography */}
          <h3 className="text-xl font-display font-black text-foreground mb-2 lowercase tracking-tighter leading-none">
            {item.phase}.
          </h3>

          {/* Description Block */}
          <p className="text-xs text-foreground/80 font-sans leading-relaxed border-t border-black/10 pt-3 mt-3">
            {item.description}
          </p>
        </div>
      </div>

      {/* Axis Intersection Marker (Square Block Architecture) */}
      <div className="absolute left-0 top-0 bottom-0 md:static md:flex-shrink-0 md:relative flex items-start justify-center" style={{ width: '2rem' }}>
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 absolute left-[5px] top-[22px] z-20">
          <div 
            className="w-3 h-3 bg-white border-2 border-black transition-colors duration-300 group-hover:bg-primary"
            style={{
              backgroundColor: inView ? 'var(--primary)' : '#ffffff',
            }}
          />
        </div>
      </div>

      {/* Empty Balancing Wing (Desktop layout parity) */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  )
}

export default function TimelineSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  
  // Maps a solid technical bar downward rather than an ambient neon stream
  const lineHeight = useTransform(scrollYProgress, [0, 0.85], ['0%', '100%'])

  return (
    <section id="timeline" className="relative py-24 border-t border-black bg-background technical-grid-bg">
      {/* Side axis logging reference label */}
      <div className="absolute left-4 top-24 hidden xl:block font-mono text-[11px] tracking-[0.25em] text-vertical-rl text-black/40 uppercase">
        [ sequence.09 — build log execution ]
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Crisp Header Block */}
        <div ref={ref} className="border-b-2 border-black pb-10 mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] text-primary mb-3">// TIMELINE_INDEX</h4>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter lowercase leading-[0.85]">
              development journey
            </h2>
          </div>
          <div className="max-w-xs md:text-right">
            <p className="font-mono text-[11px] text-muted-foreground leading-normal uppercase tracking-wider">
              [ status: operational ] <br />
              9 distinct cycles from raw signal parsing to hardware deployment.
            </p>
          </div>
        </div>

        {/* Structural Graph Container */}
        <div ref={containerRef} className="relative mt-8">
          
          {/* Main Axis Line (Desktop: Precise Center Grid Splitting) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/10">
            <motion.div
              className="w-full bg-black origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Main Axis Line (Mobile: Left Bounds Constraint) */}
          <div className="md:hidden absolute left-[10px] top-0 bottom-0 w-[2px] bg-black/10">
            <motion.div
              className="w-full bg-black origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* List Entries */}
          <div className="flex flex-col gap-2">
            {projectData.timeline.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}