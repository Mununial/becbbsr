import { useEffect, useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Award, Trophy, Star, Target, GraduationCap, Zap, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

import axios from 'axios';

const StudentPhoto = ({ src, name }: { src: string; name: string }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src || src.startsWith('/images/') || src.includes('becbbsr.ac.in')) {
    const initials = name
      ? name
          .trim()
          .split(/\s+/)
          .map((n) => n[0])
          .filter(Boolean)
          .slice(0, 2)
          .join('')
          .toUpperCase()
      : '?';
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-white font-black text-xl tracking-wider select-none">
        {initials}
      </div>
    );
  }

  return (
    <img
      loading="lazy"
      src={src}
      alt={name}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
      onError={() => setHasError(true)}
    />
  );
};

const collegeAchievements = [
  {
    title: "Best Engineering College Award",
    organization: "State Education Board",
    year: "2023",
    description: "Recognized for excellence in technical education and infrastructure development in Odisha.",
    icon: Award,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Innovation Leadership Award",
    organization: "Tech Summit 2024",
    year: "2024",
    description: "Awarded for fostering a culture of research and innovation through the BEC Research Cell.",
    icon: Target,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Top Placement Performance",
    organization: "Corporate Excellence Awards",
    year: "2023",
    description: "Commended for achieving 90%+ placement rates across core engineering branches.",
    icon: Trophy,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Excellence in Aeronautical Training",
    organization: "Aviation Industry Forum",
    year: "2022",
    description: "Highest rated training facility for Aircraft Maintenance Engineering (AME) in the region.",
    icon: Star,
    color: "text-primary",
    bg: "bg-primary/10"
  }
];

export const Achievements = () => {
  const [studentAchievements, setStudentAchievements] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
     axios.get('/api/achievements')
       .then(res => {
          if (Array.isArray(res.data)) setStudentAchievements(res.data);
       })
       .catch(err => console.error("Error fetching achievements:", err));
  }, []);

  const filteredStudents = studentAchievements.filter(s => 
     s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     s.award.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout title="BEC Achievements">
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Hero Section - Refined Glassmorphism */}
        <section className="bg-navy-950 rounded-[2rem] p-10 lg:p-16 text-center relative overflow-hidden border border-white/5 shadow-xl">
           <div className="absolute top-0 right-0 p-32 opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none">
              <Trophy className="w-96 h-96 text-accent" />
           </div>
           
           <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-accent/20 backdrop-blur-xl"
              >
                 <Award className="w-8 h-8 text-accent" />
              </motion.div>
              
              <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6 max-w-4xl mx-auto leading-[1]">
                 Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300 italic font-serif">Excellence</span> <br/>
                 Meets Recognition.
              </h2>
              <p className="text-white/40 font-bold text-[9px] uppercase tracking-[0.3em] max-w-xl mx-auto">
                 Celebrating a decade of institutional prestige and student brilliance.
              </p>
           </div>
        </section>

        {/* Global Stats Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: 'Gold Medals', value: '15+', icon: Award },
             { label: 'Innovation Patents', value: '08+', icon: Zap },
             { label: 'Research Papers', value: '250+', icon: Star },
             { label: 'Placements 24', value: '92%', icon: Trophy }
           ].map((stat, i) => (
             <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center shadow-lg shadow-slate-100/30 hover:border-primary/20 transition-all group">
                <stat.icon className="w-5 h-5 text-primary/20 group-hover:text-primary mx-auto mb-4 transition-colors" />
                <span className="block text-3xl font-black text-navy-950 mb-1 truncate">{stat.value}</span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
             </div>
           ))}
        </section>

        {/* Institutional Achievements */}
        <div>
           <div className="flex items-center gap-4 mb-10 px-4">
              <div className="w-10 h-0.5 bg-primary rounded-full" />
              <h3 className="text-2xl font-black text-navy-950 uppercase tracking-tighter italic">Institutional Honors</h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collegeAchievements.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-lg flex flex-col items-start group hover:shadow-xl transition-all"
                >
                   <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110", item.bg)}>
                      <item.icon className={cn("w-8 h-8", item.color)} />
                   </div>
                   <div className="flex justify-between items-center w-full mb-4">
                      <span className="text-primary font-black text-[10px] uppercase tracking-widest px-3 py-1 bg-primary/5 rounded-full">{item.organization}</span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{item.year}</span>
                   </div>
                   <h3 className="text-xl font-black text-navy-950 uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                   <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.description}</p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Student Spotlight Section (Dynamic) */}
        <section className="bg-slate-50 -mx-6 lg:-mx-12 px-6 lg:px-12 py-16 rounded-[3rem]">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16 px-6">
              <div className="max-w-xl">
                 <h3 className="text-3xl lg:text-5xl font-black text-navy-950 uppercase tracking-tighter mb-6 leading-none">
                    Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Icons.</span>
                 </h3>
                 <p className="text-slate-500 font-bold text-[9px] uppercase tracking-[0.3em]">
                    Real-time recognition of brilliance across national & global forums.
                 </p>
              </div>

              <div className="relative group w-full lg:w-80">
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-primary transition-colors" />
                 <input 
                   type="text" 
                   placeholder="Find scholar..." 
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl text-[13px] font-bold text-navy-900 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-300 shadow-sm"
                 />
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatePresence>
                {filteredStudents.map((item, i) => (
                   <motion.div 
                     layout
                     key={item.id || i}
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-500 h-[420px] flex flex-col"
                   >
                      <div className="relative h-44 shrink-0 overflow-hidden bg-slate-100">
                         <StudentPhoto src={item.photo} name={item.name} />
                         <div className="absolute top-5 left-5">
                            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-[8px] font-black text-primary uppercase tracking-widest shadow-md italic">{item.award}</span>
                         </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-1">
                         <h4 className="text-lg font-black text-navy-950 uppercase tracking-tighter leading-tight mb-3 group-hover:text-primary transition-colors italic line-clamp-2">{item.title}</h4>
                         <p className="text-slate-400 text-xs font-medium leading-relaxed mb-6 line-clamp-3 flex-1">{item.desc}</p>
                         
                         <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-auto">
                            <div className="w-8 h-8 rounded-xl bg-navy-950 flex items-center justify-center text-white text-[10px] font-black shadow-lg shadow-black/20">
                               {item.name.charAt(0)}
                            </div>
                            <div className="overflow-hidden">
                               <div className="text-[13px] font-black text-navy-950 tracking-tighter truncate">{item.name}</div>
                               <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest truncate">{item.dept}</div>
                            </div>
                         </div>
                      </div>
                   </motion.div>
                ))}
              </AnimatePresence>
           </div>

           {filteredStudents.length === 0 && (
             <div className="py-24 text-center">
                <Search className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <h4 className="text-xl font-black text-navy-950 uppercase tracking-tighter italic">No Student Found</h4>
                <p className="text-slate-400 font-medium text-sm">Try another search term.</p>
             </div>
           )}
        </section>

      </div>
    </PageLayout>
  );
};

