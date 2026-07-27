'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Magnetic({ children }: { children: React.ReactElement }) {
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile/touch screens
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const el = magneticRef.current;
    if (!el) return;

    const child = el.firstElementChild as HTMLElement;
    if (!child) return;

    const xTo = gsap.quickTo(child, "x", { duration: 0.8, ease: "power3.out" });
    const yTo = gsap.quickTo(child, "y", { duration: 0.8, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      
      // Calculate center coordinates of the element
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calculate distance between mouse and center
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      // Pull strength (factor of the distance)
      const pullFactor = 0.35;
      xTo(deltaX * pullFactor);
      yTo(deltaY * pullFactor);
    };

    const onMouseLeave = () => {
      // Elastic return to center
      gsap.to(child, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto"
      });
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Return the children cloned or wrapped in a div container
  return (
    <div ref={magneticRef} className="inline-block">
      {children}
    </div>
  );
}
