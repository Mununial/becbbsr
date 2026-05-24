import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Calendar, ChevronRight, Share2, Tag } from 'lucide-react';

export const NewsAndEvents = () => {
  const { notices } = useData();
  
  // Filter only Event category notices
  const events = notices.filter(n => n.category === 'Events' || n.category === 'Notice');

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. PREMIUM HEADER BANNER */}
      <section className="relative h-[45vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg" 
            alt="Campus Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
          
          {/* Decorative Geometry matching screenshot styling */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 skew-x-[-20deg] translate-x-1/2" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-2xl">
              <span className="text-secondary">EVENTS</span>
            </h1>
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-3 text-white/60 font-bold text-xs uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/20" />
              <span className="text-white">Events</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. EVENTS GRID */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-primary uppercase tracking-tight mb-4">
              Campus <span className="text-secondary">Highlights</span>
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Experience the vibrant life at Bhubaneswar Engineering College (BEC) through our latest workshops, seminars, and cultural celebrations.
            </p>
          </div>
          
          {/* Action Filter Placeholder */}
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-primary hover:bg-slate-50 transition-all">All Events</button>
            <button className="px-6 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-all">Workshops</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.length > 0 ? (
            events.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image Container with Tag */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image || (event.type === 'image' ? event.url : 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80')} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Tag matching screenshot "GIET" */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-secondary text-white px-4 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-lg">
                      BEC
                    </div>
                  </div>

                  {/* Overlapping Badge at Bottom Center */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full p-2 shadow-xl border-4 border-white z-20">
                    <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center p-2.5">
                       <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" className="w-full h-full object-contain brightness-0 opacity-20" />
                    </div>
                  </div>
                  
                  {/* Overlay for hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                     <button className="p-3 bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-all shadow-xl">
                        <Share2 className="w-5 h-5" />
                     </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 pt-12 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="flex items-center gap-2 text-slate-300 font-bold text-[10px] uppercase tracking-widest border-r border-slate-100 pr-3">
                       <Calendar className="w-3.5 h-3.5 text-secondary" />
                       {event.date}
                    </div>
                    <span className="text-secondary font-black text-[10px] uppercase tracking-widest">
                       {event.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-primary leading-tight mb-8 min-h-[3.5rem] group-hover:text-secondary transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Highlight bar from screenshot */}
                  <div className="w-16 h-1.5 bg-secondary mx-auto rounded-full mb-8 transform origin-center group-hover:scale-x-150 transition-transform duration-500" />

                  <Link 
                    to={event.url || '#'} 
                    target={event.type === 'pdf' ? '_blank' : '_self'}
                    className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-primary hover:text-secondary transition-colors"
                  >
                    View Details <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center">
               <Tag className="w-16 h-16 text-slate-100 mx-auto mb-6" />
               <h3 className="text-xl font-black text-slate-300 uppercase underline decoration-secondary decoration-4 underline-offset-8">No Live Events Found</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
