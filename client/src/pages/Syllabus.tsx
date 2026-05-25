import { PageLayout } from '../components/PageLayout';
import { FileText, Download, ShieldCheck, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { SEO } from '../components/SEO';

const syllabusData = [
  {
    course: "B.Tech",
    branches: [
      { name: "Aeronautical Engineering", sub: "AME Specialization", href: "#" },
      { name: "Agriculture Engineering", sub: "Precision Farming", href: "#" },
      { name: "Civil Engineering", sub: "Environmental Focus", href: "#" },
      { name: "Computer Science & Engineering", sub: "AI & Data Science", href: "#" },
      { name: "Electrical Engineering", sub: "Power Systems", href: "#" },
      { name: "Mechanical Engineering", sub: "Mechatronics Specialization", href: "#" }
    ],
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    course: "Diploma",
    branches: [
      { name: "Aeronautical Engineering", sub: "Technical Diploma", href: "#" },
      { name: "Civil Engineering", sub: "Construction Tech", href: "#" },
      { name: "Electrical Engineering", sub: "Power Distribution", href: "#" },
      { name: "Mechanical Engineering", sub: "Machinist Training", href: "#" }
    ],
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  }
];

export const Syllabus = () => {
  return (
    <PageLayout title="Academic Syllabus">
      <SEO 
        title="Download Academic Syllabus &amp; BPUT Curriculum | BEC"
        description="Download the official B.Tech &amp; Diploma course syllabus of Bhubaneswar Engineering College (BEC). AICTE and BPUT aligned academic handbooks."
        keywords={[
          "BTech syllabus download Odisha",
          "BEC Bhubaneswar syllabus",
          "BPUT curriculum engineering",
          "diploma polytechnic syllabus Odisha",
          "academic calendar BEC college"
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
                 BEC follows the standardized Biju Patnaik University of Technology (BPUT) curriculum for all engineering branches. 
              </p>
              <button className="px-12 py-5 bg-white text-primary rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-accent hover:text-primary transition-all">
                 DOWNLOAD ACADEMIC CALENDAR
              </button>
           </div>
           
           <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-12 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 relative z-10 shadow-3xl">
              <ShieldCheck className="w-16 h-16 text-accent mb-10" />
              <p className="text-white/60 font-bold text-[10px] uppercase tracking-widest text-center leading-loose">
                 Authenticated by the <br /> BPUT Board of Studies 2024
              </p>
           </div>
        </section>

        {/* Content Tabs / Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           {syllabusData.map((data, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl flex flex-col gap-10 group"
              >
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                       <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center", data.bg)}>
                          <GraduationCap className={cn("w-8 h-8", data.color)} />
                       </div>
                       <h3 className="text-4xl font-black text-primary uppercase tracking-tighter">{data.course}</h3>
                    </div>
                    <span className="bg-gray-100 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400">Official Curriculum</span>
                 </div>
                 
                 <div className="space-y-4">
                    {data.branches.map((branch, j) => (
                       <button key={j} className="w-full flex items-center justify-between p-6 bg-gray-50/50 hover:bg-primary/5 rounded-2xl group/btn transition-all border border-transparent hover:border-primary/20">
                          <div className="text-left">
                             <p className="text-primary font-black text-sm uppercase tracking-tight group-hover/btn:text-primary-light">{branch.name}</p>
                             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{branch.sub}</p>
                          </div>
                          <Download className="w-5 h-5 text-gray-300 group-hover/btn:text-accent group-hover/btn:scale-125 transition-all" />
                       </button>
                    ))}
                 </div>
              </motion.div>
           ))}
        </div>

      </div>
    </PageLayout>
  );
};

