import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { type Highlight } from '../types';

export const EventsHighlight = ({ highlights }: { highlights: Highlight[] }) => {
  return (
    <section className="py-12 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-bold text-primary uppercase tracking-wider font-poppins">Spotlight</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15, 
                ease: [0.21, 0.45, 0.32, 0.9] 
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-[24px] bg-slate-900 shadow-2xl hover:shadow-accent/20 transition-all duration-700 h-[280px]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  loading="lazy"
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-2.5 block drop-shadow-sm">{item.date}</span>
                  <h3 className="font-black text-[16px] leading-snug mb-4 text-white font-poppins uppercase tracking-tight line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <div className="h-px w-0 group-hover:w-full bg-accent/30 mb-4 transition-all duration-700" />

                  {item.link && (
                    <a 
                      href={item.link}
                      className="inline-flex items-center gap-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-accent transition-all duration-300 group/link"
                    >
                      <span className="relative">
                        Explore
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-accent transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
