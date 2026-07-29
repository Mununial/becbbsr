import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, FileText, Download, Bell, ShieldCheck, FileCheck2, ExternalLink } from 'lucide-react';
import { type Notice } from '../types';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';
import { useRouter as useNextRouter } from 'next/navigation';
import { prefetchRoute } from './SubpagesRouter';

const Link = ({ to, onClick, children, ...props }: any) => {
  let navigate: ((path: string) => void) | null = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    navigate = useNavigate();
  } catch { navigate = null; }

  let nextRouter: any = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    nextRouter = useNextRouter();
  } catch { nextRouter = null; }

  const isExternal = typeof to === 'string' && (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('#'));

  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e);
    if (isExternal || !to) return;
    e.preventDefault();
    if (navigate) {
      navigate(to);
    } else if (nextRouter?.push) {
      nextRouter.push(to);
    } else {
      window.location.href = to;
    }
  };

  const handleMouseEnter = () => {
    if (!isExternal && to) {
      prefetchRoute(to);
      if (nextRouter?.prefetch) {
        try { nextRouter.prefetch(to); } catch (_) {}
      }
    }
  };

  return (
    <a href={to} onClick={handleClick} onMouseEnter={handleMouseEnter} {...props}>
      {children}
    </a>
  );
};

interface LatestEventsProps { notices?: Notice[]; }

export const LatestEvents = ({ notices = [] }: LatestEventsProps) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Admission' | 'Academic' | 'Events'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotices = notices.filter(notice => {
    const matchesTab = activeTab === 'All' || notice.category?.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (notice.category && notice.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const parseNoticeDate = (dateStr: string) => {
    const parts = dateStr.split(' ');
    if (parts.length >= 2) {
      const month = parts[0].substring(0, 3).toUpperCase();
      const day = parts[1].replace(',', '');
      const year = parts[2] || '2026';
      return { day, month, year };
    }
    return { day: '01', month: 'MAY', year: '2026' };
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white font-inter border-y border-slate-200/60" id="notices">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* 1. CAMPUS EMBLEM FRAME (Left - 4 columns) */}
          <div className="lg:col-span-4 relative group flex flex-col" data-aos="fade-right">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden p-3 bg-gradient-to-br from-navy-950 via-primary to-accent shadow-2xl border border-white/10 flex-1">
              <div className="absolute inset-0 opacity-25 bg-cover mix-blend-overlay" style={{ backgroundImage: "url('/leadership/abstract_gold.png')" }} />
              <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-amber-400/30 shadow-inner">
                <img 
                  src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg" 
                  alt="BEC Campus" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-navy-950/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                    <div>
                      <h4 className="text-[10px] font-black text-white uppercase tracking-wider">AICTE Approved • BPUT Affiliated</h4>
                      <p className="text-[9px] font-semibold text-amber-400/90">Govt. Certified Academic Institution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. ABOUT US GOVT INSTITUTION SUMMARY (Middle - 4 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2" data-aos="fade-up" data-aos-delay="100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black text-primary uppercase tracking-widest mb-3">
                <FileCheck2 className="w-3.5 h-3.5 text-accent" /> Official Govt Institution Profile
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-950 leading-[1.08] mb-5 tracking-tight uppercase">
                Pioneering <span className="text-accent italic underline decoration-accent/30 underline-offset-8">Technical &amp; Aviation</span> Excellence.
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed mb-6">
                Bhubaneswar Engineering College (BEC), established in 2008 under AICTE and BPUT approval, stands as Odisha's premier integrated engineering and aeronautical institution. Delivering world-class technical education, research labs, and accredited academic programs.
              </p>
            </div>

            <Link to="/about-college" className="inline-flex items-center justify-center gap-3 bg-navy-950 hover:bg-accent text-white hover:text-navy-950 w-fit px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-navy-950/20 group border border-white/10 cursor-pointer">
              Read Institution Profile <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3. OFFICIAL GOVERNMENT GAZETTE & NOTICE BOARD (Right - 4 columns) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] flex flex-col h-[600px] overflow-hidden relative" data-aos="fade-left" data-aos-delay="200">
            
            {/* Govt Official Seal Header */}
            <div className="bg-navy-950 px-6 py-4.5 flex items-center justify-between border-b border-amber-400/30 relative">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Bell className="w-4 h-4 animate-pulse text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white font-poppins">Official Gazette</span>
                  </div>
                  <p className="text-[8.5px] font-bold text-amber-400/80 uppercase tracking-widest">Office of the Registrar • Circulars</p>
                </div>
              </div>
              <span className="bg-amber-400/15 border border-amber-400/30 text-amber-400 text-[8.5px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest">
                AICTE / BPUT
              </span>
            </div>

            {/* Filter and Search Bar */}
            <div className="p-4 bg-slate-50/80 border-b border-slate-200/80 flex flex-col gap-3">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search Gazette Orders &amp; Circulars..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                />
              </div>

              {/* Official Category Tabs */}
              <div className="flex gap-1 overflow-x-auto scrollbar-none pb-0.5">
                {(['All', 'Admission', 'Academic', 'Events'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-xl text-[9.5px] font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer",
                      activeTab === tab 
                        ? "bg-navy-950 text-amber-400 border border-amber-400/30 shadow-md" 
                        : "text-slate-500 hover:text-navy-950 hover:bg-white border border-slate-200/60"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Gazette Circulars List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-100/40">
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice, idx) => {
                  const { day, month, year } = parseNoticeDate(notice.date);
                  const refNo = `Ref: BEC/REG/2026/00${idx + 1}`;

                  return (
                    <div 
                      key={notice.id}
                      onClick={() => window.open(notice.url, '_blank')}
                      className="bg-white border border-slate-200/80 rounded-2xl p-4 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex gap-4 items-center cursor-pointer group relative overflow-hidden"
                    >
                      {/* Stamp-Style Date Badge */}
                      <div className="shrink-0 w-12 h-14 bg-navy-950 border border-amber-400/30 rounded-xl flex flex-col items-center justify-center text-center shadow-md group-hover:border-amber-400 transition-colors">
                        <span className="text-amber-400 font-black text-base leading-none font-poppins">{day}</span>
                        <span className="text-[7px] font-black text-white/70 uppercase tracking-widest mt-1 font-inter">{month}</span>
                        <span className="text-[6.5px] font-bold text-white/40 leading-none">{year}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-[7.5px] font-black text-slate-400 uppercase tracking-wider">
                            {refNo}
                          </span>
                          <span className={cn(
                            "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border",
                            notice.category === 'Admission' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                            notice.category === 'Events' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                            'bg-blue-50 text-blue-700 border-blue-200'
                          )}>
                            {notice.category || 'Gazette Order'}
                          </span>
                          {notice.isNew && (
                            <span className="bg-red-600 text-white text-[7px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest animate-pulse">
                              Urgent
                            </span>
                          )}
                        </div>
                        <h4 className="text-[12px] font-black text-navy-950 leading-snug line-clamp-2 group-hover:text-accent transition-colors tracking-tight">
                          {notice.title}
                        </h4>
                      </div>

                      {/* Official PDF Icon */}
                      <div className="shrink-0 w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-navy-950 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-all duration-300" title="Download Official Circular">
                        <Download className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <FileText className="w-8 h-8 text-slate-300 mb-2" />
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">No matching gazette orders found.</p>
                </div>
              )}
            </div>

            {/* Official Gazette Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <Link to="/admission/news" className="inline-flex items-center justify-center gap-3 bg-navy-950 hover:bg-accent text-white hover:text-navy-950 w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-lg group border border-white/10 cursor-pointer">
                <FileCheck2 className="w-4 h-4 text-amber-400 group-hover:text-navy-950" /> View All Official Circulars &amp; Orders
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
