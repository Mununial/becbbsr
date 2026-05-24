import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LayoutDashboard, Mail, Phone, ChevronDown, GraduationCap, Bell, Zap, Trophy, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface NavItem {
  name: string;
  href: string;
  target?: string;
  dropdown?: { name: string; href: string; target?: string }[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '#',
    dropdown: [
       { name: "About College", href: "/about-college" },
       { name: "Chairman Message", href: "/chairman-ayush-msg" },
       { name: "Trust Members", href: "/trusty" },
       { name: "Director Profile", href: "/director-profile" },
       { name: "Mandatory Disclosure", href: "/official_documents/Mandatory%20Disclosure.pdf", target: "_blank" }
    ]
  },
  { 
    name: 'Admissions', 
    href: '#',
    dropdown: [
       { name: "Programme", href: "/admission/programme" },
       { name: "Admission Procedure", href: "/admission/procedure" },
       { name: "Doc Required For Admission", href: "/admission/documents" },
       { name: "Bank Loan Procedures", href: "/admission/bank-loan" },
       { name: "Scholarship", href: "/admission/scholarship" },
       { name: "Apply Online", href: "/admission_query" },
       { name: "Fees Payment", href: "/fees" },
       { name: "Admission Contacts", href: "/admission/contacts" },
       { name: "Download Prospectus", href: "/admission/prospectus" },
       { name: "News & Events", href: "/admission/news" }
    ]
  },
  { 
    name: 'Programs', 
    href: '#',
    dropdown: [
       { name: "B.Tech", href: "/btech" },
       { name: "MBA", href: "/mba" },
       { name: "Diploma", href: "/diploma" },
       { name: "Syllabus", href: "/syllabus" }
    ]
  },
  { name: 'Facilities', href: '/facilities' },
  { 
    name: 'Departments', 
    href: '#',
    dropdown: [
        { name: "Aero & AME Engg.", href: "/aeronautical-engg" },
        { name: "Agriculture Engineering", href: "/agriculture-engg" },
        { name: "Civil & Environmental", href: "/civil-engg" },
        { name: "CSE & Data Science", href: "/cse-engg" },
        { name: "EE & Computer Science", href: "/ee-engg" },
        { name: "Mech & Additive Mfg.", href: "/mechanical-engg" }
    ]
  },
  { 
    name: 'Placement', 
    href: '#',
    dropdown: [
       { name: "About Placement", href: "/about_placement" },
       { name: "Campus Updates", href: "/placement" }
    ]
  },
  { 
    name: 'Activities', 
    href: '#',
    dropdown: [
       { name: "Achievements", href: "/achievements" },
       { name: "Aero Club", href: "/areo-club" },
       { name: "Seminars & Workshops", href: "/seminar-workshop" },
       { name: "Sports & Games", href: "/sports-games" },
       { name: "Photo Gallery", href: "/photo-gallery" }
    ]
  },
  { 
    name: 'Results', 
    href: '#',
    dropdown: [
       { name: "B.Tech (BPUT)", href: "https://results.bput.ac.in/", target: "_blank" },
       { name: "Diploma (SCTE&VT)", href: "https://sctevtexams.in/sn20Yz", target: "_blank" },
       { name: "MBA (BPUT)", href: "https://results.bput.ac.in/", target: "_blank" }
    ]
  },
  { name: 'Contact', href: '/contactus' },
  { name: 'ICACBEC', href: 'https://icacbec.in/', target: '_blank' },
];

const DesktopMenuItem = ({ item }: { item: NavItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative flex items-center h-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        {item.dropdown || item.href.startsWith('http') ? (
          <a
            href={item.dropdown ? undefined : item.href}
            target={item.target}
            rel={item.target === '_blank' ? "noopener noreferrer" : undefined}
            className="nav-link px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-white/80 hover:text-white flex items-center gap-1.5 cursor-pointer"
          >
            {item.name}
            {item.dropdown && <ChevronDown className={cn("w-3 h-3 text-white/60 transition-transform duration-300", isHovered && "rotate-180 text-accent")} />}
          </a>
        ) : (
          <Link
            to={item.href}
            className="nav-link px-2 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-white/80 hover:text-white flex items-center gap-1 cursor-pointer"
          >
            {item.name}
          </Link>
        )}
      </div>

      {item.dropdown && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 min-w-[260px] bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden py-3 z-[200] mt-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent"></div>
              <div className="flex flex-col">
                {item.dropdown.map((sub) => (
                  sub.href.startsWith('http') ? (
                    <a 
                      key={sub.name} 
                      href={sub.href}
                      target={sub.target || "_blank"}
                      rel="noopener noreferrer"
                      className="group/sub px-6 py-3 text-[12px] font-bold text-gray-600 hover:text-white hover:bg-primary flex items-center justify-between transition-all duration-300"
                    >
                      <span>{sub.name}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link 
                      key={sub.name} 
                      to={sub.href}
                      className="group/sub px-6 py-3 text-[12px] font-bold text-gray-600 hover:text-white hover:bg-primary flex items-center justify-between transition-all duration-300"
                    >
                      <span>{sub.name}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export const Navbar = ({ onAdminClick }: { onAdminClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. TOP BAR - Clean Info */}
      <div className="hidden lg:block bg-[#0F172A] text-white py-2 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase font-poppins">
          <div className="flex items-center gap-10">
            <a href="mailto:info@becbbsr.ac.in" className="flex items-center gap-2.5 hover:text-accent transition-all duration-300">
              <Mail className="w-3.5 h-3.5 text-accent" /> info@becbbsr.ac.in
            </a>
            <a href="tel:+919437090875" className="flex items-center gap-2.5 hover:text-accent transition-all duration-300 border-l border-white/10 pl-10">
              <Phone className="w-3.5 h-3.5 text-accent" /> +91 94370 90875
            </a>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <Link to="/fees" className="px-5 py-1.5 bg-green-500 text-white rounded-lg hover:bg-white hover:text-green-600 transition-all shadow-lg shadow-green-500/20 flex items-center gap-2">
                Fees Payment
              </Link>
              <Link to="/admission_query" className="px-5 py-1.5 bg-accent text-white rounded-lg hover:bg-white hover:text-primary transition-all shadow-lg shadow-accent/20">Admission 2026</Link>
              <button onClick={onAdminClick} className="flex items-center gap-2.5 text-white/60 hover:text-white transition-all pl-4">
                <LayoutDashboard className="w-4 h-4 text-accent" /> ERP Portal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN BRANDING */}
      <div className="bg-white py-4 lg:py-5 border-b border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <Link to="/" className="flex items-center gap-8 group">
            <img 
              src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" 
              alt="BEC Logo" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain transition-all duration-500 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <h1 className="font-black text-2xl md:text-4xl leading-tight tracking-tighter text-primary uppercase font-poppins">
                Bhubaneswar <span className="text-accent">Engineering</span> College
              </h1>
              <div className="mt-2 flex flex-col gap-1">
                <span className="text-[18px] font-black text-primary/70 tracking-wide font-odia leading-none drop-shadow-sm">ଭୁବନେଶ୍ୱର ଇଞ୍ଜିନିୟରିଂ କଲେଜ</span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] leading-tight">
                  Approved by AICTE & Affiliated to BPUT and SCTE & VT, Odisha
                </p>
              </div>
            </div>
          </Link>

          {/* Institutional Partners */}
          <div className="hidden lg:flex items-center gap-10 border-l border-slate-100 pl-10">
            {[
              { id: 'aicte', name: 'AICTE', src: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629482/becweb/org_logo3.png' },
              { id: 'bput', name: 'BPUT', src: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629347/becweb/bput.png' },
              { id: 'sctevt', name: 'SCTE & VT', src: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629479/becweb/org_logo1.jpg' }
            ].map((logo) => (
              <img 
                key={logo.id}
                src={logo.src} 
                alt={logo.name} 
                className="h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-help" 
                title={logo.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. STICKY NAVIGATION */}
      <nav className={cn(
        "w-full z-[100] transition-all duration-500",
        scrolled ? "fixed top-0 bg-primary/95 backdrop-blur-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] py-1" : "relative bg-primary py-0"
      )}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="hidden lg:flex items-center h-14 pl-6">
            <div className="flex items-center h-full gap-0.5 ml-2">
              {navItems.map((item) => (
                <div key={item.name} className="h-full group/nav relative">
                  <DesktopMenuItem item={item} />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover/nav:w-full" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden w-full flex items-center justify-between px-6 py-2 bg-primary/70 backdrop-blur-[20px] border-b border-white/5 relative overflow-hidden shadow-2xl">
             {/* Dynamic Ambient Light */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 blur-[80px] rounded-full pointer-events-none animate-pulse" />
             
             <Link to="/" className="flex flex-col active:scale-95 transition-transform relative z-10 py-1">
               <motion.div
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 className="flex flex-col gap-0"
               >
                 <span 
                   className="text-[19px] font-medium text-white tracking-tight leading-none italic drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] bg-gradient-to-r from-white via-white/80 to-white bg-clip-text"
                   style={{ fontFamily: "'Playfair Display', serif" }}
                 >
                   Bhubaneswar
                 </span>
                 <span className="text-[9px] font-black text-accent tracking-[0.3em] uppercase -mt-0.5 font-poppins opacity-90">
                   Engineering College
                 </span>
               </motion.div>
             </Link>

             <motion.button 
               whileTap={{ scale: 0.9 }}
               onClick={() => setIsOpen(!isOpen)} 
               className="p-2.5 bg-white/5 rounded-xl border border-white/10 shadow-lg relative z-10 overflow-hidden"
             >
               {isOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6 text-white" />}
             </motion.button>
          </div>

          <div className="hidden lg:block pr-6">
            <Link 
              to="/admission_query"
              className="px-8 py-2.5 bg-accent text-white rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-500 shadow-xl shadow-accent/20"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </nav>

      {/* 4. PREMIUM ANNOUNCEMENT */}
      <div className="bg-white border-b border-slate-100 h-10 flex items-center overflow-hidden relative z-[50]">
        <div className="flex-1 overflow-hidden relative h-full flex items-center">
          <div className="px-8 h-full bg-[#0F172A] flex items-center gap-3 z-20 shrink-0 font-black text-[10px] uppercase tracking-[0.3em] text-white shadow-[15px_0_40px_rgba(15,23,42,0.4)]">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Latest Board
          </div>
          <div className="flex animate-marquee whitespace-nowrap gap-20 text-[9px] font-bold text-primary/70 uppercase tracking-widest px-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="flex items-center gap-3">
                  <Zap className="w-3.5 h-3.5 text-accent animate-pulse" /> Admissions for Academic Session 2026-27 are now open 
                </span>
                <span className="flex items-center gap-3">
                  <Trophy className="w-3.5 h-3.5 text-accent animate-pulse" /> BEC Students secure placements at Amazon, TCS and Infosys
                </span>
                <span className="flex items-center gap-3">
                  <GraduationCap className="w-3.5 h-3.5 text-accent animate-pulse" /> AICTE Approved & BPUT Affiliated College
                </span>
                <span className="flex items-center gap-3">
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent animate-pulse" /> Register for Alumni Homecoming 2026
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[140] bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] z-[150] bg-white shadow-2xl flex flex-col lg:hidden overflow-hidden"
            >
              <div className="p-8 flex justify-between items-center border-b border-slate-50">
                 <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" alt="BEC" className="h-12 w-auto object-contain" />
                 <button onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-slate-50 text-primary">
                   <X className="w-6 h-6" />
                 </button>
              </div>
              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {navItems.map((item) => (
                  <div key={item.name} className="space-y-4">
                    <div className="flex justify-between items-center group/m" onClick={() => { if(!item.dropdown) { setIsOpen(false); window.location.href = item.href; } }}>
                      <span className="text-lg font-black uppercase tracking-tighter text-primary font-poppins group-hover/m:text-accent transition-colors">{item.name}</span>
                      {item.dropdown && <ChevronDown className="w-5 h-5 text-accent" />}
                    </div>
                    {item.dropdown && (
                      <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-slate-100">
                        {item.dropdown.map((sub) => (
                          sub.href.startsWith('http') ? (
                            <a 
                              key={sub.name} 
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors py-1"
                            >
                              {sub.name}
                            </a>
                          ) : (
                            <Link 
                              key={sub.name} 
                              to={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="text-slate-400 hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors py-1"
                            >
                              {sub.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-8 bg-slate-50 mt-auto flex flex-col gap-4">
                 <button onClick={() => { onAdminClick(); setIsOpen(false); }} className="w-full py-4 bg-white border border-slate-200 rounded-xl text-primary font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-sm shadow-slate-100">
                   <LayoutDashboard className="w-5 h-5 text-accent" /> Student Portal
                 </button>
                 <Link to="/admission_query" className="w-full py-5 bg-accent text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg shadow-accent/20">
                   Join BEC 2026 <GraduationCap className="w-5 h-5" />
                 </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
