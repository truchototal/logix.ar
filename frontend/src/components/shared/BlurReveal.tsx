import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
}

/**
 * Scroll-triggered reveal with fade + slide up.
 * Uses a snappy ease-out curve that starts moving immediately.
 */
const BlurReveal = ({ children, delay = 0, duration = 0.45, className = "", y = 14 }: BlurRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ willChange: 'opacity, transform' }}
      initial={{
        opacity: 0,
        y,
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
      } : {
        opacity: 0,
        y,
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default BlurReveal;
