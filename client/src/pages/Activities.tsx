import { useState, useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';
import { 
  Plane, 
  Trophy, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  Microscope, 
  LayoutGrid, 
  BellRing, 
  ImageIcon, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Flame, 
  BookOpen, 
  Award,
  Zap,
  Wind,
  Rocket
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/DataContext';
import { SEO } from '../components/SEO';
import { cn } from '../lib/utils';

// Static assets matching the original sub-activity pages
const staticWorkshopImages = [
  { photo: "/photogallery/bec-seminar1.jpg", title: "Technical Seminar" },
  { photo: "/photogallery/bec-seminar4.jpg", title: "Workshop Session" },
  { photo: "/photogallery/DSC_6147.JPG", title: "Guest Lecture" },
  { photo: "/photogallery/DSC_6161.JPG", title: "Student Workshop" },
  { photo: "/photogallery/DSC_6225.JPG", title: "Academic Seminar" },
  { photo: "/photogallery/DSC_6433.JPG", title: "Hands-on Training" },
  { photo: "/photogallery/DSC_6410.JPG", title: "Skill Development" },
  { photo: "/photogallery/DSC_0082.JPG", title: "Campus Workshop" },
  { photo: "/photogallery/1716784991888.jpg", title: "Technical Workshop" },
  { photo: "/photogallery/1716784383423.jpg", title: "Innovation Seminar" },
  { photo: "/photogallery/1716784403238.jpg", title: "Workshop Highlights" },
  { photo: "/photogallery/1716785036364.jpg", title: "Seminar Highlights" },
  { photo: "/photogallery/MAHENDRA SKILL TRAINING-1.jpg", title: "Mahendra Skill Training" },
  { photo: "/photogallery/MAHENDRA SKILL TRAINING-4.jpg", title: "Training Session" },
  { photo: "/photogallery/MAHENDRA SKILL TRAINING-6.jpg", title: "Skill Workshop" },
  { photo: "/photogallery/MAHENDRA SKILL TRAINING-7.jpg", title: "Training Completion" },
];

const staticSportsImages = [
  { photo: "/photogallery/20230121_095905_017.jpg", title: "Sports Meet 2023" },
  { photo: "/photogallery/WhatsApp%20Image%202023-02-07%20at%202.42.45%20PM%20(1).jpeg", title: "Cricket Tournament" },
  { photo: "/photogallery/20230120_100045_017.jpg", title: "Athletics Event" },
  { photo: "/photogallery/WhatsApp%20Image%202023-02-07%20at%202.42.47%20PM.jpeg", title: "Team Spirit" },
  { photo: "/photogallery/20230119_094521.jpg", title: "Football Match" },
  { photo: "/photogallery/1674270022218.jpg", title: "Sports Day Highlights" },
  { photo: "/photogallery/IMG_20230119_20200709.jpg", title: "Indoor Games" },
  { photo: "/photogallery/WhatsApp%20Image%202023-02-07%20at%202.42.48%20PM%20(1).jpeg", title: "Championship 2023" },
  { photo: "/photogallery/1716785118532.jpg", title: "Track and Field 2024" },
  { photo: "/photogallery/1716785130518.jpg", title: "Outdoor Sports 2024" },
  { photo: "/photogallery/1716784336322.jpg", title: "Annual Meet 2024" },
  { photo: "/photogallery/WhatsApp%20Image%202024-05-28%20at%2008.23.08.jpeg", title: "Sports Excellence 2024" }
];

export const Activities = () => {
  const [activeTab, setActiveTab] = useState<'workshops' | 'aeroclub' | 'sports'>('workshops');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; category?: string } | null>(null);

  // Get dynamic configurations loaded via DataProvider context
  const { workshop: dynamicWorkshops, aeroclub: dynamicAero, sports: dynamicSports } = useData();

  // Combine dynamic & static data beautifully
  const allWorkshops = [
    ...(dynamicWorkshops || []),
    ...staticWorkshopImages.map((w, idx) => ({
      id: `w-static-${idx}`,
      title: w.title,
      photo: w.photo,
      desc: "Interactive learning session designed to bridge the gap between academic theory and active practical execution.",
      date: "Academic Year 2025-2026",
      category: "Workshop"
    }))
  ];

  const allAeroClub = dynamicAero || [];

  const allSports = [
    ...(dynamicSports || []).map((s) => ({
      photo: s.photo,
      title: s.title,
      category: "Dynamic Coverage"
    })),
    ...staticSportsImages.map((s) => ({
      photo: s.photo,
      title: s.title,
      category: "Sports Meet"
    }))
  ];

  // Helper to handle lightbox navigation
  const getLightboxList = () => {
    if (activeTab === 'workshops') {
      return allWorkshops.map(w => ({ url: w.photo, title: w.title, category: w.category }));
    } else if (activeTab === 'sports') {
      return allSports.map(s => ({ url: s.photo, title: s.title, category: s.category }));
    } else {
      return allAeroClub.map(a => ({ url: a.photo, title: a.title, category: a.category }));
    }
  };

  const handleLightboxNav = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const list = getLightboxList();
    const currentIndex = list.findIndex(item => item.url === selectedImage.url);
    if (currentIndex === -1) return;

    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= list.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = list.length - 1;

    setSelectedImage(list[nextIndex]);
  };

  // Keyboard navigation support for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') handleLightboxNav('next');
      if (e.key === 'ArrowLeft') handleLightboxNav('prev');
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const tabs = [
    { id: 'workshops', name: 'Workshops & Seminars', icon: BookOpen },
    { id: 'aeroclub', name: 'Aero Club & Aviation', icon: Plane },
    { id: 'sports', name: 'Sports & Games', icon: Trophy }
  ] as const;

  const aeroFeatures = [
    { title: "RC Design & Flying", icon: Plane, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Drone Tech & UAVs", icon: Rocket, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Aerodynamic Labs", icon: Wind, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Solid Modelling", icon: Zap, color: "text-primary", bg: "bg-primary/5" }
  ];

  return (
    <PageLayout title="Campus Life &amp; Activities">
      <SEO 
        title="Campus Life, Aero Club &amp; Sports | BEC Bhubaneswar"
        description="Discover the vibrant campus life at Bhubaneswar Engineering College (BEC). Explore our advanced Aero Club, technical workshops, seminars, and Olympic-sized sports infrastructure."
        keywords={[
          "BEC Bhubaneswar campus life",
          "BEC Aero Club activities",
          "engineering workshops Bhubaneswar",
          "sports facilities BEC college",
          "remote controlled planes training",
          "BEC student achievements"
        ]}
      />

      <div className="flex flex-col gap-12 mt-4 font-inter">
        
        {/* Notice Ticker */}
        <div className="bg-primary/5 p-4 rounded-3xl border border-primary/10 flex items-center gap-6 overflow-hidden relative shadow-inner">
          <div className="flex items-center gap-3 bg-primary px-8 py-3.5 rounded-2xl text-white font-black text-[10px] uppercase tracking-widest relative z-10 shrink-0 shadow-md">
            <BellRing className="w-4 h-4 animate-bounce" />
            LATEST CAMPAIGN
          </div>
          <div className="flex-1 whitespace-nowrap overflow-hidden relative group">
            <div className="inline-block animate-marquee group-hover:[animation-play-state:paused] transition-all cursor-pointer">
              <span className="text-[12px] font-bold text-primary uppercase tracking-wider mx-8">📢 Admission Open 2026-27: Enroll now in B.Tech Aeronautical and CSE!</span>
              <span className="text-[12px] font-bold text-primary uppercase tracking-wider mx-8">📢 Aero Club Swarm Drone Exhibition scheduled for next month.</span>
              <span className="text-[12px] font-bold text-primary uppercase tracking-wider mx-8">📢 Athletic Registration and Team Trials open for Inter-College Championship.</span>
            </div>
          </div>
        </div>

        {/* Master Glassmorphic Hero Banner */}
        <section className="bg-gradient-to-br from-primary via-navy-950 to-primary-dark rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden border border-white/5 shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg')] opacity-10 bg-cover bg-center pointer-events-none mix-blend-overlay"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-between">
            <div className="w-full md:w-2/3 space-y-6 lg:space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                  Campus Chronicles
                </span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                  Life at <span className="text-accent italic font-serif">BEC</span> Bhubaneswar
                </h2>
              </div>
              <p className="text-white/70 font-medium text-sm lg:text-base leading-relaxed max-w-xl">
                Education goes beyond the classroom. At BEC, we nurture builders, pilots, athletes, and pioneers. Explore our ecosystem of state-of-the-art labs, expansive sports complexes, and dynamic clubs.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                  <span className="text-[11px] font-bold text-white/90 uppercase tracking-widest">Active Clubs: 12+</span>
                </div>
                <div className="h-4 w-px bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-bold text-white/90 uppercase tracking-widest">Campus Area: 40 Acres</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 shrink-0 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-lg">
              <div className="p-4 text-center">
                <p className="text-white/40 text-[9px] font-bold uppercase tracking-wider mb-1">Seminars</p>
                <p className="text-2xl font-black text-white">50+</p>
              </div>
              <div className="p-4 text-center border-l border-white/10">
                <p className="text-white/40 text-[9px] font-bold uppercase tracking-wider mb-1">Aero Designs</p>
                <p className="text-2xl font-black text-accent">150+</p>
              </div>
              <div className="p-4 text-center border-t border-white/10 col-span-2">
                <p className="text-white/40 text-[9px] font-bold uppercase tracking-wider mb-1">Athletes Trained</p>
                <p className="text-xl font-black text-white uppercase italic">Champions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Category Navigation Tabs */}
        <div className="flex justify-center border-b border-slate-100 pb-1 w-full overflow-x-auto">
          <div className="flex bg-white/60 backdrop-blur-md p-1.5 rounded-2xl border border-slate-100 shadow-sm gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 relative whitespace-nowrap",
                    activeTab === tab.id 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "text-slate-500 hover:text-primary hover:bg-slate-50"
                  )}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {tab.name}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute bottom-0 inset-x-8 h-1 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Context Section */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* Tab 1: Workshops & Seminars */}
              {activeTab === 'workshops' && (
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[2px] bg-accent"></div>
                        <span className="text-accent font-black uppercase tracking-[0.3em] text-[9px]">Empowering Minds</span>
                      </div>
                      <h3 className="text-3xl font-black text-primary uppercase tracking-tighter">
                        Academic Seminars &amp; <span className="text-accent italic">Workshops</span>
                      </h3>
                      <p className="text-slate-500 text-sm max-w-xl font-medium">
                        BEC regularly hosts national level workshops, engineering symposia, and guest lectures featuring industry experts to cultivate cutting-edge technical skills.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 bg-white px-6 py-3.5 rounded-2xl border border-slate-100 shadow-sm text-slate-400">
                      <ImageIcon className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{allWorkshops.length} Events Catalogued</span>
                    </div>
                  </div>

                  {/* Workshops Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allWorkshops.map((w, i) => (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: Math.min(i * 0.05, 0.3) }}
                        viewport={{ once: true }}
                        key={w.id || i}
                        onClick={() => setSelectedImage({ url: w.photo, title: w.title, category: w.category })}
                        className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col"
                      >
                        <div className="relative h-56 overflow-hidden bg-slate-50 shrink-0">
                          <img 
                            src={w.photo} 
                            alt={w.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg';
                            }}
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-[8px] font-black text-primary uppercase tracking-widest shadow-md">
                              {w.category || "Technology"}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                            <span className="px-5 py-2.5 bg-white text-primary text-[9px] font-black tracking-widest uppercase rounded-lg shadow-lg scale-90 group-hover:scale-100 transition-transform">
                              Explore Capture
                            </span>
                          </div>
                        </div>

                        <div className="p-8 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-3 text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-slate-300" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{w.date}</span>
                          </div>
                          <h4 className="text-lg font-black text-navy-950 uppercase tracking-tighter leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {w.title}
                          </h4>
                          <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-3">
                            {w.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Aero Club & Aviation */}
              {activeTab === 'aeroclub' && (
                <div className="space-y-16">
                  
                  {/* Introduction Panel */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[2px] bg-accent"></div>
                        <span className="text-accent font-black uppercase tracking-[0.3em] text-[9px]">Pioneering Heights</span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tighter">
                        Pioneering student innovation at <span className="text-accent italic">Aero Club</span>
                      </h3>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">
                        Odisha's premium student aviation club! Operating from our exclusive Aeronautical Hangar equipped with actual aircraft engines and fuselage modules, the BEC Aero Club designs, fabricates, and tests Remote Controlled (RC) planes, swat drones, and high-altitude research modules.
                      </p>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <Microscope className="w-5 h-5 text-accent" />
                          <span className="text-[11px] font-black uppercase tracking-wider text-navy-950">Aero Propulsion Lab</span>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <LayoutGrid className="w-5 h-5 text-accent" />
                          <span className="text-[11px] font-black uppercase tracking-wider text-navy-950">Swarm Drone Studio</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 relative group rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl border border-slate-100">
                      <img 
                        src="/photogallery/bec-aero-club.jpg" 
                        alt="Aero Hangar"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-8">
                        <div>
                          <span className="text-accent font-black uppercase tracking-widest text-[8px] block mb-1">State-of-the-art facility</span>
                          <h4 className="text-white font-black text-lg uppercase tracking-tighter">Campus Aero Hangar</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Core Aero features grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {aeroFeatures.map((f, i) => {
                      const Icon = f.icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-all duration-300"
                        >
                          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", f.bg)}>
                            <Icon className={cn("w-5 h-5", f.color)} />
                          </div>
                          <h4 className="text-xs font-black text-navy-950 uppercase tracking-widest">{f.title}</h4>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Aero Activities Feed */}
                  <div className="space-y-10">
                    <div className="text-center max-w-lg mx-auto">
                      <h4 className="text-2xl font-black text-navy-950 uppercase tracking-tighter mb-2">Club Timeline &amp; Events</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Latest flight tests and design achievements from our hangar</p>
                    </div>

                    {allAeroClub.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allAeroClub.map((item, i) => (
                          <div
                            key={item.id || i}
                            onClick={() => setSelectedImage({ url: item.photo, title: item.title, category: item.category })}
                            className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer flex flex-col"
                          >
                            <div className="relative h-60 overflow-hidden bg-slate-50 shrink-0">
                              <img 
                                src={item.photo} 
                                alt={item.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg';
                                }}
                              />
                              <div className="absolute top-4 left-4">
                                <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-xl text-[8px] font-black text-primary uppercase tracking-widest shadow-md italic">
                                  {item.category || "Flight Test"}
                                </span>
                              </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                              <div className="flex items-center gap-2 mb-3">
                                <Calendar className="w-3.5 h-3.5 text-slate-300" />
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.date}</span>
                              </div>
                              <h4 className="text-lg font-black text-navy-950 uppercase tracking-tighter leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                {item.title}
                              </h4>
                              <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-3">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-16 text-center bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200 max-w-md mx-auto">
                        <ImageIcon className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                        <h4 className="text-lg font-black text-navy-950 uppercase tracking-tighter mb-1">Aeronautical logs updating</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hangar models and live testing timelines are compiling</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tab 3: Sports & Games */}
              {activeTab === 'sports' && (
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[2px] bg-accent"></div>
                        <span className="text-accent font-black uppercase tracking-[0.3em] text-[9px]">Physical Excellence</span>
                      </div>
                      <h3 className="text-3xl font-black text-primary uppercase tracking-tighter">
                        Athletics, Track &amp; <span className="text-accent italic font-serif">Championships</span>
                      </h3>
                      <p className="text-slate-600 text-sm max-w-xl font-medium leading-relaxed">
                        Fostering physical discipline and true camaraderie. Our expansive 10+ acre sports fields hold cricket tournament pitches, basketball arenas, indoor badminton courts, and regular athletic events.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 bg-white px-6 py-3.5 rounded-2xl border border-slate-100 shadow-sm text-slate-400">
                      <Trophy className="w-4 h-4 text-accent" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{allSports.length} Moments captured</span>
                    </div>
                  </div>

                  {/* Sports metrics cards */}
                  <div className="grid grid-cols-3 gap-6 bg-slate-50 border border-slate-100 p-8 rounded-[2rem] max-w-3xl mx-auto">
                    <div className="text-center">
                      <p className="text-slate-400 text-[8px] font-black tracking-widest uppercase mb-1">Sports Arenas</p>
                      <p className="text-xl md:text-2xl font-black text-navy-950 italic">10+ ACRES</p>
                    </div>
                    <div className="text-center border-x border-slate-200">
                      <p className="text-slate-400 text-[8px] font-black tracking-widest uppercase mb-1">Event Formats</p>
                      <p className="text-xl md:text-2xl font-black text-primary italic">12+ EVENTS</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-400 text-[8px] font-black tracking-widest uppercase mb-1">Annual Meet</p>
                      <p className="text-xl md:text-2xl font-black text-accent italic">ESTD 2008</p>
                    </div>
                  </div>

                  {/* Sports mosaic grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[180px]">
                    {allSports.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(i * 0.04, 0.3) }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedImage({ url: img.photo, title: img.title, category: img.category })}
                        className={cn(
                          "group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500",
                          i === 0 || i === 7 ? "md:col-span-2 md:row-span-2" : "",
                          i === 3 || i === 5 ? "md:row-span-2" : ""
                        )}
                      >
                        <img 
                          src={img.photo} 
                          alt={img.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 backdrop-blur-[0.5px]">
                          <div>
                            <p className="text-white font-black uppercase tracking-tighter text-xs mb-1 line-clamp-1">{img.title}</p>
                            <p className="text-accent text-[8px] font-black uppercase tracking-widest flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" />
                              View Moment
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Premium Full Screen Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-navy-950/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors h-12 w-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-95 shadow-lg z-[1100]"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={() => handleLightboxNav('prev')}
              className="absolute left-6 text-white/40 hover:text-accent transition-colors p-4 rounded-full hover:bg-white/5 border border-transparent hover:border-white/5 active:scale-90 hidden md:block"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            {/* Main content viewport */}
            <motion.div
              layoutId="lightbox-media"
              className="relative max-w-5xl w-full h-[75vh] shadow-2xl rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col justify-between bg-black"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain select-none bg-black/90"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg';
                }}
              />
              
              {/* Info panel */}
              <div className="absolute bottom-0 inset-x-0 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 bg-gradient-to-t from-black via-black/80 to-transparent p-10 pt-20">
                <div className="space-y-2">
                  <span className="text-accent text-[9px] font-black uppercase tracking-[0.3em] block">
                    {selectedImage.category || "Campus Moment"}
                  </span>
                  <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter drop-shadow-lg">
                    {selectedImage.title}
                  </h3>
                </div>
                <div className="text-white/60 font-black text-[9px] tracking-[0.25em] uppercase bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl whitespace-nowrap shadow-inner flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  BEC Bhubaneswar
                </div>
              </div>
            </motion.div>

            {/* Right navigation arrow */}
            <button
              onClick={() => handleLightboxNav('next')}
              className="absolute right-6 text-white/40 hover:text-accent transition-colors p-4 rounded-full hover:bg-white/5 border border-transparent hover:border-white/5 active:scale-90 hidden md:block"
              aria-label="Next Image"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};
