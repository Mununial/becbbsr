import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { FileText, Download, ShieldCheck, GraduationCap, Award, Briefcase, BookOpen, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { SEO } from '../components/SEO';

const syllabusData = [
  {
    course: "B.Tech",
    icon: GraduationCap,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-200/50",
    branches: [
      { name: "Aeronautical Engineering", sub: "Aviation Design", href: "#" },
      { name: "Aircraft Maintenance Engineering", sub: "Aviation Maintenance", href: "#" },
      { name: "Agriculture Engineering", sub: "Precision Farming", href: "#" },
      { name: "Food Engineering", sub: "Food Processing Tech", href: "#" },
      { name: "Civil Engineering", sub: "Structural Design", href: "#" },
      { name: "Civil and Environmental Engineering", sub: "Environmental Tech", href: "#" },
      { name: "Computer Science Engineering", sub: "AI & Software Systems", href: "#" },
      { name: "CSE (Data Science)", sub: "Big Data & AI", href: "#" },
      { name: "Electrical Engineering", sub: "Power Systems", href: "#" },
      { name: "Electrical and Computer Engineering", sub: "Hardware-Software Co-Design", href: "#" },
      { name: "Mechanical Engineering", sub: "Machinery Systems", href: "#" },
      { name: "Mechanical Mechatronics Engineering", sub: "Mechatronics & Design", href: "#" }
    ]
  },
  {
    course: "Diploma",
    icon: Award,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-200/50",
    branches: [
      { name: "Aeronautical Engineering", sub: "Technical Diploma", href: "#" },
      { name: "Aircraft Maintenance Engineering (AME)", sub: "Aviation Maintenance", href: "#" },
      { name: "Civil Engineering", sub: "Construction Tech", href: "#" },
      { name: "Electrical Engineering", sub: "Power Distribution", href: "#" },
      { name: "Mechanical Engineering", sub: "Machinist Training", href: "#" }
    ]
  },
  {
    course: "MBA",
    icon: Briefcase,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-200/50",
    branches: [
      { name: "Marketing Management", sub: "Post Graduate Specialization", href: "#" },
      { name: "Financial Management", sub: "Post Graduate Specialization", href: "#" },
      { name: "Human Resource Management", sub: "Post Graduate Specialization", href: "#" },
      { name: "Agri-Business Management", sub: "Post Graduate Specialization", href: "#" }
    ]
  }
];

export const Syllabus = () => {
  const [activeTab, setActiveTab] = useState<'B.Tech' | 'Diploma' | 'MBA'>('B.Tech');
  const [searchQuery, setSearchQuery] = useState('');

  const activeSyllabus = syllabusData.find(s => s.course === activeTab);
  const filteredBranches = activeSyllabus
    ? activeSyllabus.branches.filter(b => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <PageLayout title="Academic Syllabus">
      <SEO 
        title="Download Academic Syllabus &amp; BPUT Curriculum | BEC"
        description="Download the official B.Tech, MBA &amp; Diploma course syllabus of Bhubaneswar Engineering College (BEC). AICTE and BPUT aligned academic handbooks."
        keywords={[
          "BTech syllabus download Odisha",
          "BEC Bhubaneswar syllabus",
          "BPUT curriculum engineering",
          "diploma polytechnic syllabus Odisha",
          "academic calendar BEC college",
          "MBA syllabus BEC"
        ]}
      />
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Info Box */}
        <section className="bg-primary rounded-3xl p-12 lg:p-20 text-white relative overflow-hidden border border-white/5 flex flex-col md:flex-row gap-16 items-center">
           <div className="absolute top-0 right-0 p-32 opacity-5 translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <FileText className="w-96 h-96 text-accent" />
           </div>
           
           <div className="w-full md:w-2/3 space-y-10 relative z-10 text-center md:text-left">
              <div className="flex flex-col gap-2">
                 <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Academic Handbook 2026-27</span>
                 <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                    Download Official <span className="text-accent italic">Syllabus</span>
                 </h2>
              </div>
              <p className="text-white/40 font-bold text-lg leading-relaxed max-w-xl">
                 BEC follows the standardized curriculum for B.Tech, MBA and Diploma branches, aligned with official academic regulations.
              </p>
              <button className="px-12 py-5 bg-white text-primary rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-accent hover:text-primary transition-all">
                 DOWNLOAD ACADEMIC CALENDAR
              </button>
           </div>
           
           <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-12 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 relative z-10 shadow-3xl">
              <ShieldCheck className="w-16 h-16 text-accent mb-10" />
              <p className="text-white/60 font-bold text-[10px] uppercase tracking-widest text-center leading-loose">
                 Authenticated by the Academic <br /> Board of Studies 2026
              </p>
           </div>
        </section>

        {/* Interactive Section */}
        <div className="flex flex-col gap-10">
          
          {/* Custom Tabs Bar */}
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 max-w-4xl mx-auto w-full bg-slate-100/70 p-2 rounded-[2rem] border border-slate-200/50">
            {syllabusData.map((data) => {
              const Icon = data.icon;
              const isActive = activeTab === data.course;
              return (
                <button
                  key={data.course}
                  onClick={() => {
                    setActiveTab(data.course as any);
                    setSearchQuery('');
                  }}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl transition-all duration-300 font-black uppercase text-[11px] tracking-wider relative",
                    isActive 
                      ? "bg-white text-primary shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] scale-102 border border-slate-200/30" 
                      : "text-slate-500 hover:text-primary hover:bg-white/40"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? data.color : "text-slate-400")} />
                  <span>{data.course} Program</span>
                  <span className={cn(
                    "px-2 py-0.5 rounded-md text-[8px] font-black tracking-normal ml-1 border",
                    isActive ? data.badgeColor : "bg-slate-200/55 text-slate-500 border-slate-300/20"
                  )}>
                    {data.branches.length} {data.course === 'MBA' ? 'Specializations' : 'Branches'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto w-full px-4">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder={`Search ${activeTab} branches...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white pl-12 pr-6 py-4 rounded-2xl border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] focus:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] focus:outline-none focus:border-primary/20 text-xs font-black uppercase tracking-widest text-primary placeholder-slate-400 transition-all"
            />
          </div>

          {/* Grid Container */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredBranches.map((branch, j) => (
                <motion.div
                  layout
                  key={branch.name}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="bg-white p-6 rounded-[2.25rem] border border-slate-100 shadow-[0_15px_30px_-10px_rgba(30,58,138,0.03)] hover:shadow-[0_25px_45px_-15px_rgba(30,58,138,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-all border border-slate-100/50">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-primary font-black text-xs uppercase tracking-tight leading-snug group-hover:text-primary/80 transition-colors">{branch.name}</p>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">{branch.sub}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-accent group-hover:text-primary transition-all shadow-sm border border-slate-100/20 shrink-0">
                    <Download className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredBranches.length === 0 && (
              <div className="col-span-full py-16 text-center text-slate-400 font-bold text-sm uppercase tracking-widest">
                No branches match your search
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </PageLayout>
  );
};
