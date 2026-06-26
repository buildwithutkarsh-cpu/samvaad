'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus } from 'lucide-react'

// Simple list of design features using normal, clear words
const DESIGN_POINTS = [
  { id: 1, title: 'the front screen', description: 'the main face of the device where text messages appear clearly.', tag: 'front view' },
  { id: 2, title: 'thin design', description: 'made to be very slim so it sits flat and looks natural on your arm.', tag: 'side view' },
  { id: 3, title: 'wrist band', description: 'a soft, comfortable strap that keeps the device safe and secure.', tag: 'the strap' },
  { id: 4, title: 'clean build', description: 'how all the simple inside parts fit together perfectly without being bulky.', tag: 'inside setup' },
]

function DesignCard({ title, description, tag, index }: { title: string; description: string; tag: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [isHovered, setIsHovered] = useState(false)
  const isWide = index === 0 || index === 3

  return (
    <motion.div
      ref={ref}
      className={`group relative bg-white border-b-2 last:border-b-0 md:border-b-2 border-black md:even:border-l-0 border-r-2 last:border-r-2 flex flex-col justify-between p-8 overflow-hidden min-h-[200px] transition-colors duration-150 ${
        isWide ? 'md:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Small top label */}
      <div className={`font-mono text-[10px] tracking-wider transition-colors duration-150 ${
        isHovered ? 'text-[#ff421d]' : 'text-neutral-400'
      }`}>
        [ detail 0{index + 1} ]
      </div>

      {/* Pure Text Body (No graphic boxes or icons) */}
      <div className="my-6">
        <h3 className={`text-2xl font-black tracking-tight lowercase transition-colors duration-150 ${
          isHovered ? 'text-white' : 'text-black'
        }`}>
          {title}
        </h3>
        
        <p className={`text-sm font-medium mt-2 leading-relaxed max-w-xl transition-colors duration-150 ${
          isHovered ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          {description}
        </p>
      </div>

      {/* Simple bottom badge */}
      <div className="font-mono text-[10px] text-[#ff421d] tracking-widest font-bold uppercase">
        // {tag}
      </div>
    </motion.div>
  )
}

export default function ProductDesignSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section id="design" className="relative py-20 bg-[#ececec] text-black border-b-2 border-black font-sans select-none">
      
      {/* Top simple label bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center border-b border-black/10 pb-6 mb-12 font-mono text-xs uppercase font-bold text-neutral-500">
        <div className="flex items-center gap-1">
          <Plus className="w-3 h-3 text-[#ff421d]" /> [ product shapes ]
        </div>
        <div>device size // simple build</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Simple Main Title Area */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight lowercase leading-none text-black">
              built to be easy to <span className="text-[#ff421d]">wear.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm font-medium leading-relaxed text-neutral-700 max-w-md border-l-2 border-[#ff421d] pl-4 py-1">
              We designed this device to be as comfortable as possible for everyday use. It is small, lightweight, and fits easily onto your wrist.
            </p>
          </div>
        </div>

        {/* Text Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-2 border-l-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          {DESIGN_POINTS.map((item, i) => (
            <DesignCard key={item.id} {...item} index={i} />
          ))}
        </div>

        {/* Bottom Small Measurement Rows */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black bg-white mt-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {[
            { label: 'total weight', value: 'very light', desc: 'it weighs less than a standard phone so you barely feel it.' },
            { label: 'temperature', value: 'stays cool', desc: 'uses very low power so it never gets warm against your skin.' },
            { label: 'device size', value: 'small fit', desc: 'thin and compact so it stays out of your way during the day.' },
          ].map((spec, i) => (
            <div 
              key={spec.label} 
              className="p-6 border-b-2 last:border-b-0 lg:border-b-0 lg:border-r-2 last:border-r-2 border-black flex flex-col justify-between min-h-[130px]"
            >
              <div className="font-mono text-[10px] font-bold text-neutral-400 mb-2">
                // fact 0{i + 1}
              </div>
              <div>
                <div className="text-2xl font-black text-[#ff421d] lowercase mb-1">
                  {spec.value}
                </div>
                <div className="text-xs font-bold text-black lowercase mb-1">{spec.label}</div>
                <div className="text-xs text-neutral-600 leading-tight font-medium lowercase">{spec.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}