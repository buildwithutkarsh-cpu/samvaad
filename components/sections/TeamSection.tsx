/* Refactored for Stark Brutalist/Industrial matching Web.jpg */
'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import teamData from '@/data/team.json'

function TeamCard({ member, index }: { member: typeof teamData[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  // Brutalist solid high-contrast borders/accents instead of glowing neons
  const roleColors: Record<string, string> = {
    'Team Lead': 'var(--primary)', // Solid Vermilion
    'Hardware Lead': '#101010',
    'Software Lead': '#000000',
    'UX & Design Lead': '#404040',
    'Documentation Lead': '#737373',
  }
  
  const accentColor = roleColors[member.role] || 'var(--primary)'

  return (
    <motion.div
      ref={ref}
      className="group relative bg-white border border-black p-6 flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{
        // Give it a subtle brutalist solid shadow on hover instead of a soft glow
        boxShadow: '0px 0px 0px rgba(0,0,0,1)',
      }}
      whileHover={{
        boxShadow: '4px 4px 0px rgba(0,0,0,1)',
        transform: 'translate(-4px, -4px)',
      }}
    >
      <div>
        {/* Technical Top Accent Bar */}
        <div 
          className="absolute top-0 left-0 right-0 h-1" 
          style={{ backgroundColor: accentColor }}
        />

        {/* Technical Data Stamp Header */}
        <div className="flex justify-between items-center mb-6 font-mono text-[10px] text-muted-foreground tracking-wider">
          <span>MEM_00{index + 1}</span>
          <span>SYS_VAL // OK</span>
        </div>

        {/* Photo Block with Hard Industrial Cut */}
        <div className="relative w-full aspect-[4/3] bg-surface border border-black mb-4 overflow-hidden">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover grayscale contrast-125 mix-blend-multiply group-hover:grayscale-0 transition-all duration-300"
            style={{ objectPosition: member.objectPosition ?? 'center top' }}
            sizes="(max-w-7xl) 33vw, 100vw"
          />
        </div>

        {/* Lowercase Compressed Header matching h1, h2, h3 */}
        <h3 className="text-2xl font-display font-black text-foreground mb-1 lowercase tracking-tighter">
          {member.name}.
        </h3>

        {/* Monospaced Technical Micro-Badge */}
        <div className="font-mono text-xs font-bold uppercase tracking-widest my-2" style={{ color: accentColor }}>
          // {member.role}
        </div>

        {/* Description Text */}
        <p className="text-sm text-foreground/80 mt-3 font-sans leading-relaxed border-t border-black/10 pt-3">
          {member.description}
        </p>
      </div>

      {/* Decorative design geometric corner element */}
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-black opacity-10 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}

export default function TeamSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="team" className="relative py-24 border-t border-black bg-background technical-grid-bg">
      {/* Structural side axis labeling inspired by "TOO 001" layout element */}
      <div className="absolute left-4 top-24 hidden xl:block font-mono text-[11px] tracking-[0.25em] text-vertical-rl text-black/40 uppercase">
        [ structure.04 — personnel index ]
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Stark Section Header Section */}
        <div ref={ref} className="border-b-2 border-black pb-12 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xs font-mono tracking-[0.2em] text-primary mb-3">// THE PEOPLE</h4>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter lowercase leading-[0.85]">
              meet the team
            </h2>
          </motion.div>
          
          <motion.div 
            className="max-w-md"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-sans text-sm text-foreground border-l-2 border-primary pl-4 py-1">
              Five dedicated individuals united by a shared belief: that technology should serve
              everyone — especially those the world has overlooked.
            </p>
          </motion.div>
        </div>

        {/* Modernist Industrial Grid: Standardized responsive structure over floating centring */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}