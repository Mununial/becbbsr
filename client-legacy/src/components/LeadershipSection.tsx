import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Twitter, Linkedin, Quote, ArrowUpRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type Leader } from '../types';

interface LeadershipSectionProps {
  leaders: Leader[];
}

export const LeadershipSection = ({ leaders }: LeadershipSectionProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="section-container relative overflow-hidden font-inter py-6 md:py-8" 
      id="leadership"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[20%] brightness-[25%]"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-[2px]" />
      </motion.div>

      {/* Decorative Overlays */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-[1]">
        <div className="absolute top-1/4 -left-20 w-80 h-1/2 bg-accent/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-1/2 bg-primary/20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 px-4">
          <div className="inline-flex items-center gap-2 mb-3 stitch-badge-white py-1 px-4" data-aos="fade-down">
            <GraduationCap className="w-3.5 h-3.5 text-accent" />
            <span className="text-white font-bold tracking-[0.3em] text-xs md:text-xs uppercase font-poppins">Our Visionaries</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight font-poppins uppercase tracking-tighter drop-shadow-2xl" data-aos="fade-up">
            Elite <span className="highlight underline decoration-accent/20 underline-offset-8">Leadership</span> Cabinet
          </h2>
          <p className="text-slate-400 text-xs md:text-xs font-medium mt-2 md:mt-3 font-inter leading-relaxed max-w-xl mx-auto opacity-70" data-aos="fade-up" data-aos-delay="100">
            Meet the distinguished leaders guiding <span className="text-accent underline decoration-accent/10 underline-offset-4">Bhubaneswar Engineering College (BEC)</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-[650px] mx-auto justify-center">
          {leaders.map((leader, index) => (
            <motion.div 
              key={leader.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative group h-full"
            >
              <div className="absolute top-0 right-5 md:right-6 -translate-y-1/2 z-20 px-3 md:px-4 py-1 bg-accent rounded-[8px] shadow-lg transition-all duration-500 group-hover:-translate-y-2">
                <span className="text-white font-black text-xs md:text-xs uppercase tracking-[0.2em] font-poppins">{leader.role}</span>
              </div>

              <div className="h-full bg-white/5 backdrop-blur-2xl rounded-[16px] md:rounded-[20px] border border-white/10 p-3 md:p-4 flex flex-col gap-3 items-center hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-700">
                <div className="relative w-full aspect-square max-h-[220px] rounded-[12px] md:rounded-[16px] overflow-hidden border border-white/5 shadow-xl">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-contain md:object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                </div>

                <div className="flex-1 flex flex-col justify-between py-0.5 text-center w-full">
                  <div className="mb-4">
                    <span className="text-accent font-black text-xs md:text-xs tracking-[0.3em] uppercase block mb-1.5 font-poppins">
                      {leader.title}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-white tracking-tighter uppercase leading-tight font-poppins mb-1.5 md:mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-xs font-bold uppercase tracking-[0.1em] font-inter">
                      {leader.subtitle}
                    </p>
                  </div>

                  <div className="relative p-4 bg-white/5 rounded-[12px] md:rounded-[16px] border border-white/5 mb-4 italic flex-1 flex flex-col justify-center">
                    <Quote className="absolute top-2 left-2 w-4 h-4 text-accent/20 fill-accent/10" />
                    <p className="text-slate-300 text-xs md:text-xs leading-relaxed font-medium font-inter line-clamp-3">
                      "{leader.quote}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex gap-3">
                      <Linkedin className="w-3.5 h-3.5 text-slate-500 hover:text-accent cursor-pointer transition-colors" />
                      <ArrowUpRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    
                    <Link to={leader.link} className="inline-flex items-center px-3 md:px-4 py-1.5 bg-white/5 rounded-[6px] md:rounded-[8px] border border-white/5 hover:border-accent/20 transition-all">
                      <span className="text-white font-black text-xs md:text-xs uppercase tracking-widest hover:text-accent transition-colors font-poppins">Profile</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
