'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  isWireframe?: boolean
  onWireframeToggle?: () => void
}

export default function Navbar({ isWireframe = false, onWireframeToggle }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Technology', href: '#technology' },
    { label: 'Team', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <>
      <header className="w-full h-16 border-b border-black flex items-center justify-between px-6 md:px-12 bg-inherit z-40 font-mono text-xs font-bold tracking-wider relative">
        {/* Project Branding Identification */}
        <div className="flex items-center gap-2 select-none">
          <span className="text-[#ff421d] font-black text-sm">+1</span>
          <span className="uppercase tracking-widest font-black text-black">Samvaad</span>
        </div>
        
        {/* Desktop Navigation Link Hub */}
        <nav className="hidden lg:flex items-center gap-10 text-neutral-600 font-medium">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="hover:text-black transition-colors uppercase tracking-widest text-[11px] relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff421d] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right-Aligned Control Assembly */}
        <div className="flex items-center gap-4">
          {/* Architecture Layout Grid Switcher */}
          {onWireframeToggle && (
            <button 
              onClick={onWireframeToggle}
              className={`hidden sm:block px-3 py-1 border border-black font-mono text-[10px] tracking-widest uppercase transition-all duration-150 active:translate-y-0.5 ${
                isWireframe ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-neutral-200'
              }`}
            >
              {isWireframe ? '[ VIEW: WIREFRAME ]' : '[ VIEW: STANDARD ]'}
            </button>
          )}

          {/* Mobile Hard Brutalist Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-9 h-9 border border-black flex flex-col items-center justify-center gap-1 bg-white hover:bg-neutral-100 active:translate-y-0.5 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            aria-label="Toggle Navigation Menu"
          >
            <span className={`w-4 h-[2px] bg-black transition-transform duration-150 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`w-4 h-[2px] bg-black transition-opacity duration-150 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-4 h-[2px] bg-black transition-transform duration-150 ${isMobileMenuOpen ? '-rotate-45 translate-y-[-6px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* High-Contrast Mobile Full-Screen Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-10%' }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 top-16 bg-[#f4f4f4] border-t border-black z-30 flex flex-col justify-between p-8 lg:hidden font-mono"
          >
            {/* Mobile Navigation List Stack */}
            <nav className="flex flex-col gap-6 mt-4">
              <span className="text-[10px] text-neutral-400 tracking-[0.2em] font-bold">// SYSTEM INDEX</span>
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black uppercase tracking-tight text-black hover:text-[#ff421d] transition-colors flex items-baseline gap-2"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom Panel Actions Container */}
            <div className="flex flex-col gap-4 border-t border-black pt-6">
              {onWireframeToggle && (
                <button 
                  onClick={() => {
                    onWireframeToggle()
                    setIsMobileMenuOpen(false)
                  }}
                  className={`w-full py-3 border-2 border-black font-mono text-xs tracking-widest uppercase font-bold transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                    isWireframe ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
                >
                  {isWireframe ? 'Switch to Standard UI' : 'Switch to Wireframe Mode'}
                </button>
              )}
              
              <div className="flex justify-between items-center text-[9px] font-bold tracking-widest text-neutral-500 uppercase mt-2">
                <span>Core: API Server Connection</span>
                <span>Active ver: stable</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}