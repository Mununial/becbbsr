import { motion } from 'framer-motion';
import { Building2, Users, GraduationCap, ChevronRight, Briefcase } from 'lucide-react';

const RECRUITERS = [
  "/images/events/IBS.jpg",
  "/images/events/tech-mahindra.jpg",
  "/images/events/infosys.jpg",
  "/images/events/interglobe.jpg",
  "/images/events/tata.jpg",
  "/images/events/zeta.jpg",
  "/images/events/byjus.jpg",
  "/images/events/genpact.jpg",
  "/images/events/john.jpg",
  "/images/events/qh.jpg",
  "/images/events/pnblifetime.jpg"
];

const STATS = [
  { icon: Building2, value: "120+", label: "Hiring Partners", color: "from-cyan-500 to-blue-600" },
  { icon: Users, value: "4000+", label: "Global Alumni", color: "from-rose-500 to-pink-600" },
  { icon: GraduationCap, value: "100%", label: "Success Rate", color: "from-emerald-500 to-teal-600" }
];

export const RecruiterShowcase = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden font-inter border-t border-slate-50">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left: Content & Stats */}
          <div className="w-full lg:w-1/3">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-3 text-cyan-600 font-black uppercase tracking-[0.4em] text-xs mb-6">
                  <div className="w-12 h-[2px] bg-cyan-600" />
                  BEC Recruiter Network
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-navy-950 uppercase tracking-tighter leading-[0.9] mb-8 italic">
                   Industrial <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-primary">Alliance.</span>
                </h2>
                <p className="text-slate-500 font-medium mb-12 max-w-sm leading-relaxed">
                   Connecting our students with industry leaders to shape the future of global technology and innovation.
                </p>

                <div className="grid grid-cols-1 gap-6">
                   {STATS.map((stat, i) => (
                     <div key={i} className="flex items-center gap-6 group">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} p-4 text-white shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500`}>
                           <stat.icon className="w-full h-full" />
                        </div>
                        <div>
                           <div className="text-2xl font-black text-navy-950 tracking-tight leading-none mb-1">{stat.value}</div>
                           <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                     </div>
                   ))}
                </div>
             </motion.div>
          </div>

          {/* Right: 3D Perspective Marquee */}
          <div className="w-full lg:w-2/3 h-[500px] relative">
             <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-20 pointer-events-none" />
             
             <div className="h-full flex items-center overflow-hidden [perspective:1000px]">
                <div className="[transform:rotateY(-25deg)_rotateX(15deg)] w-full">
                   {/* Row 1: Left to Right */}
                   <div className="flex gap-10 mb-10 overflow-hidden">
                      <motion.div 
                        animate={{ x: [0, -2500] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex gap-10 shrink-0"
                      >
                         {[...RECRUITERS, ...RECRUITERS, ...RECRUITERS].map((logo, i) => (
                           <div key={i} className="w-56 h-36 bg-white rounded-[2rem] border border-slate-100 shadow-[0_25px_60px_rgba(0,0,0,0.08)] p-8 flex items-center justify-center hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-500 cursor-pointer group/logo relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-primary/[0.02] opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                              <img loading="lazy" src={logo} className="w-full h-full object-contain relative z-10 scale-100 group-hover/logo:scale-110 transition-transform duration-500" alt="" />
                           </div>
                         ))}
                      </motion.div>
                   </div>

                   {/* Row 2: Right to Left */}
                   <div className="flex gap-10 overflow-hidden">
                      <motion.div 
                        animate={{ x: [-2500, 0] }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="flex gap-10 shrink-0"
                      >
                         {[...[...RECRUITERS].reverse(), ...[...RECRUITERS].reverse(), ...[...RECRUITERS].reverse()].map((logo, i) => (
                           <div key={i} className="w-56 h-36 bg-white rounded-[2rem] border border-slate-100 shadow-[0_25px_60px_rgba(0,0,0,0.08)] p-8 flex items-center justify-center hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-500 cursor-pointer group/logo relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-primary/[0.02] opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                              <img loading="lazy" src={logo} className="w-full h-full object-contain relative z-10 scale-100 group-hover/logo:scale-110 transition-transform duration-500" alt="" />
                           </div>
                         ))}
                      </motion.div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
