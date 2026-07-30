'use client';

import React, { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Detect touch/mobile device at runtime
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Initialize AOS globally (safe for mobile & desktop)
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
      delay: 0,
    });
    AOS.refresh();

    // Skip Lenis bridge on mobile - native scroll is fastest
    if (isMobile) return;

    const lenisInstance = lenisRef.current?.lenis;
    if (!lenisInstance) return;

    // Only sync ScrollTrigger on desktop - removed AOS.refresh() (was running 60x/sec!)
    const handleScroll = () => {
      ScrollTrigger.update();
    };

    lenisInstance.on('scroll', handleScroll);

    return () => {
      lenisInstance.off('scroll', handleScroll);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.9,
        // Disable touch smooth-scroll — native momentum is faster on mobile
        touchMultiplier: 0,
      }}
    >
      {children}
    </ReactLenis>
  );
}
