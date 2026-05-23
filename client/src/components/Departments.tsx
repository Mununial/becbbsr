import { motion } from 'framer-motion';
import { Cpu, Globe, Rocket, Shield, HardDrive, Smartphone, ChevronRight, GraduationCap, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAdmission } from '../hooks/useAdmission';

const departments = [
  {
    name: 'Aeronautical & AME',
    desc: 'Only college in Odisha to offer these combined aviation programs. Master aircraft design and propulsion.',
    icon: Rocket,
    gradient: 'from-[#1E3A8A] to-[#06B6D4]',
    tag: 'Exclusive'
  },
  {
    name: 'Agriculture Engineering',
    desc: 'Innovate the future of farming with modern technology, sustainable practices, and food systems.',
    icon: Globe,
    gradient: 'from-[#1E3A8A] to-[#1E3A8A]',
    tag: 'Future-Tech'
  },
  {
    name: 'Data Science & CS',
    desc: 'Explore Big Data, AI, and modern software architectures with focus on Data Science.',
    icon: Cpu,
    gradient: 'from-[#06B6D4] to-[#06B6D4]',
    tag: 'Trending'
  },
  {
    name: 'Civil & Environmental',
    desc: 'Build the infrastructure of tomorrow with a focus on both structure and sustainability.',
    icon: HardDrive,
    gradient: 'from-[#1E3A8A] to-[#1E3A8A]',
  },
  {
    name: 'Electrical & CS',
    desc: 'Bridge the gap between hardware and software in power systems and computing.',
    icon: Smartphone,
    gradient: 'from-[#06B6D4] to-[#06B6D4]',
  },
  {
    name: 'Mechanical & Additive',
    desc: 'Master mechanical systems alongside cutting-edge 3D printing technologies.',
    icon: Shield,
    gradient: 'from-[#1E3A8A] to-[#06B6D4]',
  },
];

export const Departments = () => {
  const { open } = useAdmission();
  return (
    <section className="section-container bg-white border-y border-slate-50 relative overflow-hidden font-inter" id="departments">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <div className="inline-flex items-center gap-3 mb-8 stitch-badge" data-aos="fade-down">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase font-poppins">Programs Excellence</span>
          </div>
          <h2 className="section-title" data-aos="fade-up">
            Elite Engineering <span className="highlight">Portfolio</span>
          </h2>
          <p className="section-subtitle mx-auto" data-aos="fade-up" data-aos-delay="100">
            Odisha's pioneers in specialized domains like <span className="text-primary font-bold">Aeronautical, AME, and AI</span>, shaping the next generation of industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(30,58,138,0.15)] hover:-translate-y-2"
            >
              <div className={cn("h-3 w-full bg-gradient-to-r", dept.gradient)} />

              <div className="p-12 pt-0 relative">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-10 -mt-8 relative z-10 border border-slate-50 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                  <dept.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-primary mb-4 font-poppins tracking-tight uppercase leading-tight">{dept.name}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-10 font-medium font-inter h-16 overflow-hidden">
                  {dept.desc}
                </p>

                <div className="flex items-center justify-between border-t border-slate-50 pt-8">
                  <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary/40 hover:text-accent transition-all duration-300">
                    Syllabus <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="text-5xl font-black text-slate-50 select-none font-poppins group-hover:text-accent/10 transition-colors">
                    {index + 1}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <button 
            data-aos="zoom-in"
            onClick={() => open()} 
            className="btn-primary mx-auto"
           >
              Admission Open 2026 <Sparkles className="w-5 h-5 text-accent animate-pulse" />
           </button>
        </div>
      </div>
    </section>
  );
};
