import type { Transition, Variants } from 'framer-motion'

export const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const DEFAULT_TRANSITION: Transition = {
  duration: 0.45,
  ease: MOTION_EASE,
}

export const FAST_TRANSITION: Transition = {
  duration: 0.22,
  ease: MOTION_EASE,
}

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.15,
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: DEFAULT_TRANSITION,
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: DEFAULT_TRANSITION,
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: DEFAULT_TRANSITION,
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: DEFAULT_TRANSITION,
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const staggerSequential: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: DEFAULT_TRANSITION,
  },
}

export const BUTTON_HOVER_TAP = {
  whileHover: { y: -1, scale: 1.01 },
  whileTap: { scale: 0.98 },
  transition: FAST_TRANSITION,
} as const
