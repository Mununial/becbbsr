'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Context & Libs
import { useData } from '@/context/DataContext';

// Components
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { EventsHighlight } from '@/components/EventsHighlight';
import { LatestEvents } from '@/components/LatestEvents';
import { AboutUs } from '@/components/AboutUs';
import { LeadershipSection } from '@/components/LeadershipSection';
import { Departments } from '@/components/Departments';
import { CampusGallery } from '@/components/CampusGallery';
import { SelectedStudents } from '@/components/SelectedStudents';
import { NewsMedia } from '@/components/NewsMedia';
import { RecruiterShowcase } from '@/components/RecruiterShowcase';
import { Footer } from '@/components/Footer';
import { FloatingSocials } from '@/components/FloatingSocials';
import { AdmissionPopup } from '@/components/AdmissionPopup';
import { LoginGate } from '@/components/LoginGate';
import { AdminDashboard } from '@/components/AdminDashboard';
import { CampusTour } from '@/components/CampusTour';
import Magnetic from '@/components/Magnetic';

// Lucide Icons
import { Sparkles, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePageContent() {
  const { 
    notices, updateNotices, 
    slides, updateSlides, 
    gallery, updateGallery, 
    faculties, updateFaculties,
    students, updateStudents,
    scenes, updateScenes,
    highlights, updateHighlights,
    leaders, updateLeaders,
    officialDocs, updateOfficialDocs
  } = useData();

  const [loading, setLoading] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showTour, setShowTour] = useState(false);

  // References for animations
  const mainRef = useRef<HTMLDivElement>(null);
  const progressIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Premium Preloader Timer & Count Animation
    const counter = { val: 0 };
    const progressEl = document.getElementById("preloader-percentage");
    const logoEl = document.getElementById("preloader-logo");
    const preloaderEl = document.getElementById("preloader");

    const preloaderTimeline = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        // Refresh ScrollTrigger once load is done and DOM dimensions stabilize
        ScrollTrigger.refresh();
      }
    });

    preloaderTimeline.to(counter, {
      val: 100,
      duration: 0.7,
      ease: "power2.out",
      onUpdate: () => {
        if (progressEl) {
          progressEl.innerText = Math.round(counter.val) + "%";
        }
      }
    });

    preloaderTimeline.to(logoEl, {
      scale: 1.03,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in"
    });

    preloaderTimeline.to(preloaderEl, {
      yPercent: -100,
      duration: 0.5,
      ease: "power4.inOut"
    }, "-=0.15");

    // Fade-in main layout and slide up
    preloaderTimeline.fromTo(mainRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power4.out" },
      "-=0.4"
    );



    // 2. Scroll Progress Indicator Animation
    if (progressIndicatorRef.current) {
      gsap.to(progressIndicatorRef.current, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      });
    }

    // 3. Ambient Floating Background Blobs Animation (GPU Accelerated)
    gsap.fromTo(".blob-cyan", 
      { x: "-20%", y: "0%" },
      { x: "30%", y: "40%", duration: 25, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );
    gsap.fromTo(".blob-gold", 
      { x: "30%", y: "50%" },
      { x: "-20%", y: "-10%", duration: 30, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );

    // 4. Staggered Sections Reveal using ScrollTrigger
    const revealSections = document.querySelectorAll('.scroll-reveal-section');
    revealSections.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

  }, []);

  return (
    <>
      {/* Scroll Progress Meter */}
      <div ref={progressIndicatorRef} className="scroll-progress-bar" />

      {/* Ambient Floating Backdrop Blobs */}
      <div className="absolute top-[20vh] left-0 w-[600px] h-[600px] rounded-full blur-blob-cyan blob-cyan pointer-events-none z-0 gpu-accel" />
      <div className="absolute top-[60vh] right-0 w-[500px] h-[500px] rounded-full blur-blob-gold blob-gold pointer-events-none z-0 gpu-accel" />

      {/* Premium Loading Preloader overlay */}
      <AnimatePresence>
        {loading && (
          <div
            id="preloader"
            className="fixed inset-0 z-[1000] bg-slate-950 flex flex-col items-center justify-center p-6"
          >
            <div id="preloader-logo" className="flex flex-col items-center gap-6">
              <div className="relative">
                {/* Spinning premium boundary line */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-t-2 border-accent border-r-2 border-r-transparent border-b-2 border-b-white/5 border-l-2 border-l-transparent animate-spin" />
                <img 
                  src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" 
                  alt="BEC Logo" 
                  className="w-12 h-12 md:w-16 md:h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain brightness-110 drop-shadow-2xl" 
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-white font-bold text-lg md:text-xl tracking-widest uppercase font-poppins">Bhubaneswar Engineering College</span>
                <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] mt-1.5 font-poppins">Excellence in Innovation</span>
                <span className="text-white/30 text-xs font-bold mt-4 font-odia">ଭୁବନେଶ୍ୱର ଇଞ୍ଜିନିୟରିଂ କଲେଜ</span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <AdmissionPopup />
      <Navbar onAdminClick={() => setShowAdmin(true)} />

      {showAdmin && (
        <LoginGate onClose={() => setShowAdmin(false)}>
          <AdminDashboard
            onClose={() => setShowAdmin(false)}
            slides={slides}
            onSave={updateSlides}
            scenes={scenes}
            onSaveScenes={updateScenes}
            students={students}
            onSaveStudents={updateStudents}
            gallery={gallery}
            onSaveGallery={updateGallery}
            highlights={highlights}
            onSaveHighlights={updateHighlights}
            leaders={leaders}
            onSaveLeaders={updateLeaders}
            notices={notices}
            onSaveNotices={updateNotices}
            faculties={faculties}
            onSaveFaculties={updateFaculties}
            officialDocs={officialDocs}
            onSaveOfficialDocs={updateOfficialDocs}
          />
        </LoginGate>
      )}

      {showTour && <CampusTour onClose={() => setShowTour(false)} scenes={scenes} />}

      {/* Main Page Layout Wrapper */}
      <div ref={mainRef} className="pt-0 overflow-x-hidden relative z-10 w-full min-h-screen">
        <main className="pt-0 overflow-x-hidden">
          {/* Hero Carousel */}
          <Hero slides={slides} onTourClick={() => setShowTour(true)} />

          {/* Highlights */}
          <div className="mt-8 md:mt-12 scroll-reveal-section">
            <EventsHighlight highlights={highlights} />
          </div>

          {/* Notices & Events */}
          <div className="scroll-reveal-section">
            <LatestEvents notices={notices} />
          </div>

          {/* About Us */}
          <div className="scroll-reveal-section">
             <AboutUs />
          </div>

          {/* Director & Chairman Quotes */}
          <div className="scroll-reveal-section">
             <LeadershipSection leaders={leaders} />
          </div>

          {/* Academic Branches & Departments */}
          <div className="scroll-reveal-section">
             <Departments />
          </div>

          {/* Campus Photo VR Gallery */}
          <div className="scroll-reveal-section">
             <CampusGallery images={gallery} />
          </div>

          {/* Placement Statistics & Placed Students */}
          <div className="scroll-reveal-section">
             <SelectedStudents students={students} />
          </div>

          {/* News Media Coverage */}
          <div className="scroll-reveal-section">
             <NewsMedia />
          </div>

          {/* Recruiter Showcase scrolling marquee */}
          <div className="scroll-reveal-section">
             <RecruiterShowcase />
          </div>

          {/* Premium Bottom Call-to-Action Section */}
          <section className="py-24 bg-primary relative overflow-hidden font-inter scroll-reveal-section">
            {/* Embedded glowing blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-outfit uppercase tracking-tight">
                Ready to shape your <span className="text-accent">Future</span>?
              </h2>
              <p className="text-white/60 font-medium text-sm md:text-base max-w-2xl mx-auto font-inter">
                Join a community of innovators and leaders. Admissions for session 2026-27 are now open across all engineering branches.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Magnetic>
                  <button 
                    onClick={() => window.location.href = '/admission_query'}
                    className="px-10 py-4.5 bg-white text-primary hover:bg-accent hover:text-white transition-all font-bold text-xs rounded-xl tracking-widest shadow-xl uppercase cursor-pointer"
                  >
                    Apply Online
                  </button>
                </Magnetic>
                <Magnetic>
                  <button 
                    onClick={() => window.location.href = '/admission_query'}
                    className="px-10 py-4.5 border border-white/20 text-white hover:bg-white/10 transition-all font-bold text-xs rounded-xl tracking-widest uppercase cursor-pointer"
                  >
                    Inquire Now
                  </button>
                </Magnetic>
              </div>
            </div>
          </section>
        </main>

        <FloatingSocials />
        <Footer />
      </div>
    </>
  );
}
