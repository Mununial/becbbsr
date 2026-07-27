'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';

/** Pick a direction based on an index for alternating patterns */
export const getRevealDirection = (index: number): RevealDirection => {
  const directions: RevealDirection[] = ['fade-left', 'up', 'fade-right', 'zoom'] as any;
  // Alternating pattern: left, up, right, zoom, repeat
  const patterns: RevealDirection[] = ['left', 'up', 'right', 'zoom', 'up', 'left', 'up', 'right'];
  return patterns[index % patterns.length];
};

const variants: Record<RevealDirection, Variants> = {
  up: {
    hidden: { opacity: 0, y: 60, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  down: {
    hidden: { opacity: 0, y: -60, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  left: {
    hidden: { opacity: 0, x: -80, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  right: {
    hidden: { opacity: 0, x: 80, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.82, filter: 'blur(6px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
  fade: {
    hidden: { opacity: 0, filter: 'blur(4px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

/** Wrap any element with a scroll-driven reveal animation */
export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.75,
  className = '',
  once = true,
}: ScrollRevealProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // premium cubic bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/** Staggered children container */
export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.12,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/** Individual stagger child — auto-reveals as part of StaggerContainer */
export const StaggerChild = ({
  children,
  direction = 'up',
  className = '',
}: {
  children: ReactNode;
  direction?: RevealDirection;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: variants[direction].hidden as any,
        visible: {
          ...(variants[direction].visible as any),
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
