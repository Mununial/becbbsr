import { motion } from 'framer-motion';

const affiliations = [
  {
    name: "AICTE",
    description: "All India Council for Technical Education",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png"
  },
  {
    name: "BPUT",
    description: "Biju Patnaik University of Technology",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Biju_Patnaik_University_of_Technology.svg/1200px-Biju_Patnaik_University_of_Technology.svg.png"
  },
  {
    name: "SCTE&VT",
    description: "State Council for Technical Education & Vocational Training",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/SCTE%26VT_Odisha_Logo.svg/512px-SCTE%26VT_Odisha_Logo.svg.png" 
  }
];

export const Affiliations = () => {
  return (
    <section className="relative -mt-16 z-[35] mx-6 lg:mx-auto max-w-6xl font-inter">
      <div className="bg-white/90 backdrop-blur-3xl rounded-[40px] p-10 md:p-14 border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex flex-col items-center lg:items-start shrink-0 text-center lg:text-left">
            <span className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-2 font-poppins">Official Credentials &</span>
            <span className="text-primary font-black text-xs uppercase tracking-[0.4em] font-poppins">Strategic Affiliations</span>
          </div>

          <div className="h-px w-full lg:w-px lg:h-12 bg-slate-100" />

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-24">
            {affiliations.map((org, index) => (
              <motion.div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative h-20 md:h-24 w-auto flex items-center justify-center"
                title={org.description}
              >
                <img 
                  src={org.logo} 
                  alt={org.name} 
                  className="h-full w-auto object-contain transition-all duration-700 transform group-hover:scale-105 filter drop-shadow-xl saturate-50 hover:saturate-100 opacity-60 hover:opacity-100" 
                />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 group-hover:-bottom-8 transition-all duration-300 pointer-events-none whitespace-nowrap z-40">
                   {org.name} Authorized
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
