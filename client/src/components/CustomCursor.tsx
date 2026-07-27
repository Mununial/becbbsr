'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable cursor on mobile/tablet devices completely
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    // Use GSAP quickSetter for ultra-high performance
    const setCursorX = gsap.quickSetter(cursor, 'x', 'px');
    const setCursorY = gsap.quickSetter(cursor, 'y', 'px');
    const setRingX = gsap.quickSetter(ring, 'x', 'px');
    const setRingY = gsap.quickSetter(ring, 'y', 'px');

    const mouse = { x: -100, y: -100 };
    const ringCoord = { x: -100, y: -100 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const tick = () => {
      setCursorX(mouse.x);
      setCursorY(mouse.y);
      const dt = 0.15;
      ringCoord.x += (mouse.x - ringCoord.x) * dt;
      ringCoord.y += (mouse.y - ringCoord.y) * dt;
      setRingX(ringCoord.x);
      setRingY(ringCoord.y);
    };

    gsap.ticker.add(tick);

    // ── Hover interactions using EVENT DELEGATION (no MutationObserver needed) ──
    // Single listener on document instead of one per element
    const onEnter = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [role="button"], input, textarea, select, .clickable')) {
        ring.classList.add('scale-150', 'bg-accent/15', 'border-accent');
        cursor.classList.add('scale-50', 'bg-accent');
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [role="button"], input, textarea, select, .clickable')) {
        ring.classList.remove('scale-150', 'bg-accent/15', 'border-accent');
        cursor.classList.remove('scale-50', 'bg-accent');
      }
    };

    // Use capture phase so it fires even on dynamically added elements
    document.addEventListener('mouseover', onEnter, { passive: true });
    document.addEventListener('mouseout', onLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-accent/70 rounded-full pointer-events-none z-[9998] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out hidden md:block"
      />
    </>
  );
}
