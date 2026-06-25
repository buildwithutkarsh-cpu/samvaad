/* Refactored for Stark Brutalist/Industrial matching Web.jpg */
'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import galleryData from '@/data/gallery.json'

const CATEGORY_LABELS: Record<string, string> = {
  all: 'ALL_INDEX',
  team: 'TEAM_DIR',
  project: 'PROJ_DEV',
  exhibition: 'EXHB_EXN',
  testing: 'TEST_QA',
}

function GalleryItem({ item, index }: { item: typeof galleryData[0]; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })
  const [hovered, setHovered] = useState(false)

  // System status border accent mappings matching the tonal layout palette
  const categoryColors: Record<string, string> = {
    team: 'var(--primary)', // Solid Vermilion
    project: '#101010',
    exhibition: '#404040',
    testing: '#737373',
  }
  const statusColor = categoryColors[item.category] || 'var(--primary)'

  return (
    <motion.div
      ref={ref}
      className={`group relative bg-white border border-black p-2 flex flex-col justify-between overflow-hidden transition-transform will-change-transform ${item.span}`}
      style={{ minHeight: '160px' }}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.01, boxShadow: '3px 3px 0px rgba(0,0,0,1)', translateXZ: 0 }}
    >
      {/* Structural Framing Bounds inside container */}
      <div className="relative w-full h-full bg-surface border border-black/10 overflow-hidden flex flex-col justify-between">
        
        {item.placeholder ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            {/* Technical grid mapping layout container background */}
            <div className="absolute inset-0 opacity-[0.04] technical-grid-bg bg-[size:16px_16px]" />
            <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest text-center">
              // ARCHIVE_EMPTY
            </div>
            <span className="font-mono text-[9px] text-black/40 text-center mt-1 block max-w-[120px] truncate">
              {item.alt}
            </span>
          </div>
        ) : (
          <>
            {/* Asset Rendering — Industrial high-contrast grayscale maps */}
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover grayscale contrast-125 mix-blend-multiply group-hover:grayscale-0 transition-all duration-300"
              style={{ objectPosition: item.objectPosition ?? 'center' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Stark dark color overlay tracking for description readability */}
            <div
              className="absolute inset-0 bg-black/40 transition-opacity duration-300 pointer-events-none"
              style={{ opacity: hovered ? 1 : 0 }}
            />
          </>
        )}

        {/* Header Metadata Ribbon per Item Block */}
        <div className="absolute top-0 left-0 right-0 p-2 flex justify-between items-start pointer-events-none z-10 font-mono text-[9px] tracking-tight bg-gradient-to-b from-white/90 to-white/0 group-hover:from-black/80 group-hover:to-black/0 transition-colors duration-300">
          <span className="text-black/60 group-hover:text-white/80 transition-colors">IMG_{index + 100}</span>
          <span 
            className="px-1 font-bold text-white uppercase text-[8px] tracking-wider" 
            style={{ backgroundColor: statusColor }}
          >
            {item.category}
          </span>
        </div>

        {/* Technical Data Label Stamp displayed on active state */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-2 bg-black font-mono text-[9px] text-white flex flex-col gap-0.5 z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className="text-primary font-bold truncate">// DESC_VAL</div>
              <div className="text-white/70 line-clamp-1 lowercase font-sans text-[10px] tracking-normal leading-tight">
                {item.alt}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...Array.from(new Set(galleryData.map((g) => g.category)))]
  const filtered = filter === 'all' ? galleryData : galleryData.filter((g) => g.category === filter)

  return (
    <section id="gallery" className="relative py-24 border-t border-black bg-background technical-grid-bg">
      {/* Structural technical tracking axis marker */}
      <div className="absolute right-4 top-24 hidden xl:block font-mono text-[11px] tracking-[0.25em] text-vertical-lr text-black/40 uppercase">
        [ record.07 — asset gallery ]
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Stark Structured Split Layout Header */}
        <div ref={ref} className="border-b-2 border-black pb-8 mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <h4 className="text-xs font-mono tracking-[0.2em] text-primary mb-3">// DATA_LOG</h4>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter lowercase leading-[0.85]">
              behind the build
            </h2>
          </div>

          {/* Brutalist Hard-Border Matrix Navigation Pills */}
          <motion.div
            className="flex flex-wrap gap-1"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {categories.map((cat) => {
              const isActive = filter === cat
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="font-mono text-xs px-3 py-1.5 font-bold transition-all duration-150"
                  style={{
                    backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                    color: isActive ? '#ffffff' : 'var(--foreground)',
                    borderWidth: '1px',
                    borderColor: 'var(--border)',
                  }}
                >
                  {CATEGORY_LABELS[cat] || cat.toUpperCase()}
                </button>
              )
            })}
          </motion.div>
        </div>

        {/* Structural Matrix Layout Grid mapping strictly to blocks */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[160px]"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <GalleryItem key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}