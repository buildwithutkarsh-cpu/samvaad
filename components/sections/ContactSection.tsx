/* Refactored for Stark Brutalist/Industrial matching Web_2.jpg */
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import projectData from '@/data/project.json'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { Icon: GithubIcon, label: 'GitHub', href: projectData.contact.github },
]

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="contact" className="relative py-24 border-t-2 border-black bg-background technical-grid-bg">
      {/* Structural vertical context tag mapping layout axis */}
      <div className="absolute right-4 top-24 hidden xl:block font-mono text-[11px] tracking-[0.25em] text-vertical-lr text-black/40 uppercase">
        [ system.07 — terminal entry point ]
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Stark Main Call to Action Box Area */}
        <motion.div
          className="relative bg-white border-2 border-black p-8 md:p-16 mb-20 flex flex-col items-start text-left overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 0.5 }}
        >
          {/* Solid high-saturation Vermilion color bar block inspired directly by Web_2.jpg */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />
          
          <div ref={ref} className="w-full relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              <div>
                <h4 className="text-xs font-mono tracking-[0.2em] text-primary mb-4">// INT_CONNECT</h4>
                <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter lowercase leading-[0.85] max-w-3xl">
                  let&apos;s build <br /> an inclusive world.
                </h2>
              </div>

              <p className="text-foreground text-sm font-sans leading-relaxed max-w-xl border-l-2 border-black pl-4 my-2">
                Interested in SAMVAAD? Whether you are an educator, institution, researcher, or
                accessibility advocate — we require unified engineering collaboration.
              </p>

              {/* Data Input Connection Vectors (Stark Buttons) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 mt-4">
                {projectData.contact.email !== '[EMAIL]' && (
                  <a
                    href={`mailto:${projectData.contact.email}`}
                    className="flex items-center gap-3 bg-surface border border-black px-5 py-3 font-mono text-xs uppercase tracking-wider transition-all"
                    style={{ boxShadow: '0px 0px 0px rgba(0,0,0,1)' }}
                    whileHover={{ boxShadow: '3px 3px 0px rgba(0,0,0,1)', transform: 'translate(-3px, -3px)' }}
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{projectData.contact.email}</span>
                  </a>
                )}
                
                {projectData.contact.phone !== '[PHONE]' && (
                  <a
                    href={`tel:${projectData.contact.phone}`}
                    className="flex items-center gap-3 bg-surface border border-black px-5 py-3 font-mono text-xs uppercase tracking-wider transition-all"
                    style={{ boxShadow: '0px 0px 0px rgba(0,0,0,1)' }}
                    whileHover={{ boxShadow: '3px 3px 0px rgba(0,0,0,1)', transform: 'translate(-3px, -3px)' }}
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{projectData.contact.phone}</span>
                  </a>
                )}
              </div>

              {/* Matrix Node Network Links */}
              <div className="flex items-center justify-start gap-2 mt-2 pt-6 border-t border-black/10">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mr-2">INDEX_REF //</span>
                {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href.startsWith('[') ? '#' : href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link w-10 h-10 bg-white border border-black flex items-center justify-center transition-all"
                    style={{ boxShadow: '0px 0px 0px rgba(0,0,0,1)' }}
                    whileHover={{ 
                      boxShadow: '3px 3px 0px rgba(0,0,0,1)', 
                      transform: 'translate(-3px, -3px)',
                      backgroundColor: 'var(--primary)'
                    }}
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 text-foreground group-hover/link:text-white transition-colors duration-150" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Industrial System Footer Elements */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t-2 border-black">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-3xl font-display font-black tracking-tighter lowercase leading-none">
              samvaad.
            </span>
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              [ status: break_communication_barriers ]
            </span>
          </div>

          <div className="font-mono text-[10px] text-foreground/70 uppercase tracking-widest text-left md:text-right leading-relaxed">
            <p>// indian sign language translation engine</p>
            <p className="text-black/40 text-[9px] mt-1">all rights reserved © {new Date().getFullYear()} // samvaad_sys_dev</p>
          </div>
        </div>
      </div>
    </section>
  )
}