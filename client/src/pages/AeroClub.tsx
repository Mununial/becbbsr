import { useState, useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Plane, Rocket, Wind, Zap, Microscope, LayoutGrid, Calendar, ArrowRight, ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export const AeroClub = () => {
  const [activities, setActivities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/aeroclub')
      .then(res => res.json())
      .then(data => {
        setActivities(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const features = [
    { title: "RC Design", icon: Plane, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Drones", icon: Rocket, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Research", icon: Wind, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Modeling", icon: Zap, color: "text-primary", bg: "bg-primary/5" }
  ];

  return (
    <PageLayout title="BEC Aero Club">
      <div className="flex flex-col gap-24">
        
        {/* Cinematic Hero Section */}
        <section className="relative h-[500px] rounded-[3rem] overflow-hidden group">
           <img 
             src="https://becbbsr.ac.in/photogallery/bec-aero-club.jpg" 
             className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
             alt="Aero Club"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
           
           <div className="absolute bottom-0 left-0 w-full p-12 lg:p-20 flex flex-col lg:flex-row justify-between items-end gap-10">
              <div className="max-w-2xl">
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="inline-flex items-center gap-3 px-5 py-2 bg-secondary/90 backdrop-blur-md rounded-full mb-6"
                 >
                    <Plane className="w-4 h-4 text-navy-950" />
                    <span className="text-[10px] font-black text-navy-950 uppercase tracking-[0.2em]">Sky is the Limit</span>
                 </motion.div>
                 <motion.h2 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                   className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6 italic"
                 >
                    Aero <span className="text-secondary">Club.</span>
                 </motion.h2>
                 <p className="text-white/70 font-medium text-lg max-w-xl">
                    Pioneering the future of aviation through student-led innovation in RC design, drone technology, and aerodynamic research.
                 </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-navy-950 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-secondary transition-all flex items-center gap-3"
              >
                 JOIN EXPEDITION <ArrowRight className="w-4 h-4" />
              </motion.button>
           </div>
        </section>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
           {features.map((f, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl transition-all"
             >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", f.bg)}>
                   <f.icon className={cn("w-7 h-7", f.color)} />
                </div>
                <h3 className="text-sm font-black text-navy-950 uppercase tracking-widest">{f.title}</h3>
             </motion.div>
           ))}
        </div>

        {/* Dynamic Activity Gallery */}
        <section className="space-y-16">
           <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl lg:text-5xl font-black text-navy-950 uppercase tracking-tighter mb-6">
                 Club <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Timeline.</span>
              </h3>
              <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.3em]">
                 Capturing every milestone in our journey toward the horizon.
              </p>
           </div>

           {isLoading ? (
              <div className="py-20 text-center">
                 <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                 <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Scanning Hangar...</p>
              </div>
           ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                 <AnimatePresence>
                    {activities.map((item, i) => (
                       <motion.div
                         layout
                         key={item.id || i}
                         initial={{ opacity: 0, scale: 0.95 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
                       >
                          <div className="relative h-64 overflow-hidden bg-slate-100 shrink-0">
                             {item.photo ? (
                               <img src={item.photo} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                             ) : (
                               <div className="w-full h-full flex items-center justify-center text-slate-200">
                                  <ImageIcon className="w-12 h-12" />
                               </div>
                             )}
                             <div className="absolute top-5 left-5">
                                <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[9px] font-black text-primary uppercase tracking-widest shadow-md italic">
                                   {item.category}
                                </span>
                             </div>
                          </div>
                          
                          <div className="p-10 flex flex-col flex-1">
                             <div className="flex items-center gap-2 mb-4">
                                <Calendar className="w-3.5 h-3.5 text-slate-300" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.date}</span>
                             </div>
                             <h4 className="text-xl font-black text-navy-950 uppercase tracking-tighter leading-tight mb-4 group-hover:text-primary transition-colors italic line-clamp-2">
                                {item.title}
                             </h4>
                             <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-3">
                                {item.desc}
                             </p>
                          </div>
                       </motion.div>
                    ))}
                 </AnimatePresence>
              </div>
           )}

           {!isLoading && activities.length === 0 && (
              <div className="py-20 text-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                 <ImageIcon className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                 <h4 className="text-xl font-black text-navy-950 uppercase tracking-tighter">No Activities Recorded</h4>
              </div>
           )}
        </section>

        {/* Lab Info - Static Refined */}
        <section className="bg-navy-950 -mx-6 lg:-mx-12 px-6 lg:px-12 py-24 rounded-[4rem] text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-l from-navy-950 via-transparent to-transparent z-10" />
              <img src="https://becbbsr.ac.in/images/slider/slider-bg5.jpg" className="w-full h-full object-cover grayscale" alt="" />
           </div>

           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                 <div className="space-y-4">
                    <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Technical Infrastructure</span>
                    <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none italic">
                       The <span className="text-secondary">Hangar.</span>
                    </h2>
                 </div>
                 <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                    BEC Aero Club operates from a world-class Aeronautical Hangar equipped with live aircraft engines, fuselage modules, and advanced avionics. We bridge the gap between textbook physics and high-altitude reality.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex items-center gap-4 group">
                       <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors">
                          <Microscope className="w-6 h-6 text-secondary" />
                       </div>
                       <span className="font-black text-xs uppercase tracking-widest text-white/80">Industrial Engine Lab</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                       <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-secondary transition-colors">
                          <LayoutGrid className="w-6 h-6 text-secondary" />
                       </div>
                       <span className="font-black text-xs uppercase tracking-widest text-white/80">AVIONICS STUDIO</span>
                    </div>
                 </div>

                 <button className="px-12 py-5 bg-secondary text-navy-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
                    REQUEST CAMPUS TOUR
                 </button>
              </div>

              <div className="relative hidden lg:block">
                 <motion.div 
                   animate={{ y: [0, -20, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="relative z-10 bg-white/5 backdrop-blur-3xl p-4 rounded-[3rem] border border-white/10 shadow-2xl"
                 >
                    <img src="https://becbbsr.ac.in/photogallery/bec-aero-club.jpg" className="rounded-[2.5rem] shadow-2xl" alt="" />
                 </motion.div>
                 <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-[80px]" />
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
              </div>
           </div>
        </section>

      </div>
    </PageLayout>
  );
};

