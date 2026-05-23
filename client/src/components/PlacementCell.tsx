import { motion } from 'framer-motion';
import { Award, ExternalLink, TrendingUp, Users, Target, Building2 } from 'lucide-react';

const placementStats = [
  { value: '100%', label: 'Placement Support', icon: Users },
  { value: '12.0 LPA', label: 'Highest Package', icon: TrendingUp },
  { value: '4.5 LPA', label: 'Average Package', icon: Target },
  { value: '250+', label: 'Recruiters', icon: Building2 },
];

const companies = [
  'Tech Mahindra', 'Infosys', 'Mindtree', 'Royal Enfield', 'Sonalika', 'IndiGo', 'Air India', 'Amazon', 'Wipro', 'Justdial', 'Indiabulls', 'Piramal', 'TCS', 'Cognizant', 'Accenture'
];

export const PlacementCell = () => {
  return (
    <section className="py-32 bg-[#0F172A] relative overflow-hidden font-inter" id="placements">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[200px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          <motion.div
            data-aos="fade-right"
          >
            <div className="inline-flex items-center gap-3 mb-10 stitch-badge-white py-2.5 px-6" data-aos="fade-down">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-white font-bold tracking-[0.3em] text-[10px] uppercase font-poppins">Elite Career Hub</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-10 uppercase tracking-tighter font-poppins drop-shadow-2xl">
              Global <span className="highlight underline decoration-accent/20 underline-offset-12">Placements</span> & Beyond
            </h2>
            
            <p className="text-lg text-slate-400 font-medium mb-16 max-w-xl leading-relaxed font-inter">
              Our Corporate Relations team works tirelessly to bridge the gap between academic theory and industry reality, ensuring our graduates are <span className="text-accent underline decoration-accent/10 underline-offset-4 font-bold">World-Ready</span> leaders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {placementStats.map((stat, index) => (
                <div key={index} className="p-10 rounded-[32px] bg-white/5 border border-white/5 hover:border-accent/40 transition-all duration-500 group shadow-2xl">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:border-accent transition-all duration-700">
                    <stat.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2 font-poppins tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 font-poppins leading-none">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="btn-primary mt-20 shadow-2xl shadow-accent/20" data-aos="zoom-in">
              Placement Brochure 2026 <ExternalLink className="w-4.5 h-4.5 ml-3" />
            </button>
          </motion.div>

          <div className="relative" data-aos="fade-left">
            {/* Recruiters Card */}
            <div className="bg-white rounded-[48px] p-12 lg:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden border border-slate-100">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-6">
                <h4 className="text-primary text-3xl font-black tracking-tighter uppercase font-poppins">Our Network</h4>
                <div className="flex gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-accent/20" />
                  <div className="w-3.5 h-3.5 rounded-full bg-accent animate-pulse" />
                  <div className="w-3.5 h-3.5 rounded-full bg-primary" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {companies.slice(0, 12).map((company, index) => (
                  <div key={index} className="aspect-[3/2] bg-slate-50 hover:bg-primary transition-all duration-700 rounded-[24px] flex items-center justify-center p-6 border border-slate-100 group shadow-sm overflow-hidden text-center cursor-default">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white transition-all leading-tight font-poppins">
                      {company}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-16 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-12">
                <div className="flex -space-x-5">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-slate-50 flex items-center justify-center shadow-xl overflow-hidden ring-1 ring-slate-100 transition-transform hover:translate-y-[-5px] hover:z-20">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-14 h-14 rounded-full border-4 border-white bg-accent flex items-center justify-center text-[10px] font-black text-white shadow-xl ring-1 ring-slate-100">
                    +500
                  </div>
                </div>
                <div className="text-slate-500 text-sm font-bold font-inter text-center sm:text-right">
                  <span className="text-accent text-2xl font-black font-poppins block mb-1">94%</span> Records in 2024
                </div>
              </div>
            </div>

            {/* Float Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-12 -right-6 w-28 h-28 bg-accent rounded-[36px] flex items-center justify-center text-white shadow-[0_30px_70px_-10px_rgba(6,182,212,0.6)] z-20 hidden sm:flex"
            >
              <Award className="w-12 h-12" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
