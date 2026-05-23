import { motion } from 'framer-motion';
import { Target, Eye, MapPin, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const coreValues = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'Powering high-quality technical education through evolving industry-centric training.',
    accent: 'bg-[#1E3A8A]'
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To be a globally recognized center of excellence in engineering and innovation.',
    accent: 'bg-[#06B6D4]'
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'Fostering continuous learning, ethical leadership, and entrepreneurship.',
    accent: 'bg-[#1E3A8A]'
  }
];

export const AboutUs = () => {
  return (
    <section className="bg-white relative overflow-hidden font-inter py-10" id="about">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            data-aos="fade-up"
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 mb-8 stitch-badge" data-aos="fade-down">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase font-poppins">ESTD. 2008</span>
            </div>
            
            <h2 className="section-title text-4xl md:text-5xl lg:max-w-xl">
              Legacy of <span className="highlight">Excellence</span> at BEC Campus
            </h2>
            
            <p className="section-subtitle mb-10 max-w-xl">
              Bhubaneswar Engineering College (BEC), a premier institution under the <span className="text-primary font-bold">Ayush Group</span>, is dedicated to providing world-class technical education across a lush <span className="text-primary font-bold">40-acre landscape</span>.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12 w-full max-w-md">
              <div className="p-8 rounded-[24px] bg-slate-50/50 border border-slate-100 flex flex-col items-center lg:items-start group hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 border border-slate-50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-black text-primary text-xl mb-1.5 font-poppins tracking-tighter">40 Acre</h4>
                <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.25em] font-poppins">Lush Campus</p>
              </div>
              <div className="p-8 rounded-[24px] bg-slate-50/50 border border-slate-100 flex flex-col items-center lg:items-start group hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 border border-slate-50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-black text-primary text-xl mb-1.5 font-poppins tracking-tighter">Approved</h4>
                <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.25em] font-poppins">AICTE & BPUT</p>
              </div>
            </div>

            <Link to="/about-college" className="btn-primary" data-aos="zoom-in">
              Historical Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="space-y-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={value.title}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="group p-10 bg-white rounded-[32px] border border-slate-50 shadow-sm flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className={cn(
                  "w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-12",
                  value.accent
                )}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-black text-primary mb-3 tracking-widest font-poppins uppercase">{value.title}</h3>
                  <p className="text-slate-500 text-[13px] font-medium leading-relaxed font-inter">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
