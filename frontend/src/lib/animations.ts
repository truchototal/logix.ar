import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.23, 1, 0.320, 1] },
  }),
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

export const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeOut" },
};

export const rotateOnHover = {
  rotate: 2,
  transition: { duration: 0.3 },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.23, 1, 0.320, 1] },
  },
};

export const glowPulse = {
  boxShadow: [
    "0 0 20px rgba(0, 217, 255, 0.3)",
    "0 0 40px rgba(0, 217, 255, 0.6)",
    "0 0 20px rgba(0, 217, 255, 0.3)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
  },
};

export const floatAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
