import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { type Notice } from '../types';
import { Link } from 'react-router-dom';

interface LatestEventsProps { notices?: Notice[]; }

export const LatestEvents = ({ notices = [] }: LatestEventsProps) => {
  return (
    <section className="py-10 md:py-12 bg-white font-inter" id="notices">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. CAMPUS PHOTO FRAME (Left - 4 columns) */}
          <div className="lg:col-span-4 relative group" data-aos="fade-right">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden p-4 bg-gradient-to-br from-primary via-primary-dark to-accent shadow-2xl skew-x-[-1deg] rotate-[-1deg]">
              <div className="absolute inset-0 bg-[url('/leadership/abstract_gold.png')] opacity-20 bg-cover mix-blend-overlay" />
              <div className="relative h-full w-full rounded-lg overflow-hidden border-[6px] border-white/20 shadow-inner">
                <img 
                  src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg" 
                  alt="BEC Campus" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
            {/* Abstract accents like the screenshot */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 blur-3xl rounded-full" />
          </div>

          {/* 2. ABOUT US (Middle - 4 columns) */}
          <div className="lg:col-span-4 flex flex-col py-2" data-aos="fade-up" data-aos-delay="100">
            <span className="text-primary font-black text-[13px] uppercase tracking-wider mb-2">About Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 leading-[1.1] mb-6 tracking-tighter">
              Shaping the future of <span className="text-accent underline decoration-accent/20 underline-offset-8 italic">higher education.</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 max-w-md">
              Bhubaneswar Engineering College (BEC) is a fast growing Engineering College, situated on the Southern belt of the capital city of Odisha, Bhubaneswar. It was established in the year 2009 with the most promising task of imparting high quality technical education to its students. 
            </p>
            <Link to="/about" className="inline-flex items-center justify-center gap-3 bg-[#FF5733] hover:bg-primary text-white w-fit px-8 py-4 rounded-lg font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#FF5733]/20 group">
              Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3. NOTICE BOARD (Right - 4 columns) */}
          <div className="lg:col-span-4 bg-slate-50 rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 flex flex-col h-[550px]" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-[#1E3A8A] text-white py-6 text-center z-20 shadow-md">
              <span className="text-[14px] font-black uppercase tracking-[0.5em]">Notice Board</span>
            </div>
            
            <div className="flex-1 relative overflow-hidden bg-white/40">
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />
              
              <div className="hover:[animation-play-state:paused] py-4">
                <motion.div 
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ 
                    duration: 25, 
                    ease: "linear", 
                    repeat: Infinity 
                  }}
                  className="flex flex-col"
                >
                  {/* Map twice for seamless loop */}
                  {[...notices, ...notices].map((notice, idx) => (
                    <div 
                      key={`${notice.id}-${idx}`} 
                      className="flex gap-8 items-start px-10 py-7 border-b border-slate-100/60 hover:bg-slate-50/80 transition-all cursor-pointer group"
                      onClick={() => window.open(notice.url, '_blank')}
                    >
                      <div className="shrink-0 flex flex-col items-center">
                        <div className="flex flex-col items-center text-slate-800 font-black leading-none group-hover:scale-110 transition-transform duration-500">
                          <span className="text-[16px] tracking-tight whitespace-nowrap text-primary">{notice.date.split(' ').slice(0, 2).join(' ')}</span>
                          <div className="w-[24px] h-[2.5px] bg-accent mt-1.5 shadow-sm" />
                          <span className="text-[13px] mt-1.5 tracking-tighter opacity-40">{notice.date.split(' ').slice(2).join(' ')}</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-[14px] font-bold text-slate-700 leading-snug tracking-normal group-hover:text-primary transition-colors line-clamp-2">
                          {notice.title}
                        </h4>
                        {notice.isNew && (
                          <span className="inline-block mt-2 bg-[#FFBD00] text-black text-xs font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-sm">New</span>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 z-20 border-t border-slate-100">
              <Link to="/admission/news" className="inline-flex items-center justify-center gap-3 bg-[#BA1631] hover:bg-primary text-white w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#BA1631]/20 group">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> View All Notices
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
