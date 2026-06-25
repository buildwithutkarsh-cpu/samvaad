'use client'

import { useEffect, useState } from 'react'

export const premiumDurations = {
  fast: 0.3,
  standard: 0.5,
  calm: 0.7,
  slow: 0.85,
}

export const premiumEasings = {
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(!!mq.matches)
    apply()
    mq.addEventListener?.('change', apply)
    return () => mq.removeEventListener?.('change', apply)
  }, [])

  return reduced
}

export const revealFadeUpOnce = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: premiumDurations.standard, ease: premiumEasings.out },
  },
}

export const revealScaleOnce = {
  hidden: { opacity: 0, scale: 0.98, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: premiumDurations.calm, ease: premiumEasings.out },
  },
}

export const revealStaggerOnce = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
      duration: premiumDurations.calm,
      ease: premiumEasings.out,
    },
  },
}

export const revealWordStaggerOnce = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.06,
      duration: premiumDurations.standard,
      ease: premiumEasings.out,
    },
  },
}

export const wordVariants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: premiumDurations.standard, ease: premiumEasings.out },
  },
}

export const galleryReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: premiumDurations.standard, ease: premiumEasings.out, delay },
  }),
}

