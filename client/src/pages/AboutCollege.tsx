import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  ShieldCheck, 
  Plane, 
  Award, 
  Building, 
  Users, 
  MapPin, 
  GraduationCap,
  Sparkles,
  Target,
  Rocket
} from 'lucide-react';

export const AboutCollege = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-inter text-[#111827]">
      <Navbar onAdminClick={() => {}} />

      {/* ── HERO BANNER (REDUCED SCALE) ── */}
      <section className="relative w-full h-[60vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-[#0B1D3A]/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center text-white" data-aos="fade-up">
           <motion.div
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3, duration: 0.7 }}
           >
             <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 bg-[#FFC107]/10 border border-[#FFC107]/20 rounded-full backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC107]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC107]">Excellence since 2008</span>
             </div>
             
             <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg tracking-tight leading-tight">
               About <span className="text-[#FFC107]">College</span>
             </h1>
             
             <p className="text-sm md:text-lg font-medium text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
               Bhubaneswar Engineering College is a sanctuary of academic brilliance, nurturing the next generation of global innovators.
             </p>

             <div className="flex justify-center gap-6 border-t border-white/10 pt-6">
                <div className="text-center">
                   <p className="text-xl font-bold text-[#FFC107]">15+</p>
                   <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Years</p>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div className="text-center">
                   <p className="text-xl font-bold text-[#FFC107]">40</p>
                   <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Acres</p>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div className="text-center">
                   <p className="text-xl font-bold text-[#FFC107]">NAAC</p>
                   <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Accredited</p>
                </div>
             </div>
           </motion.div>
        </div>
      </section>

      <div className="flex flex-col gap-16 py-16 overflow-x-hidden">
        
        {/* ── WHO WE ARE (Expanded) ── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0B1D3A]/5 rounded-full mb-6 border border-[#0B1D3A]/10 shadow-sm">
              <Building className="w-4 h-4 text-[#0B1D3A]" />
              <span className="text-[#0B1D3A] font-black tracking-[0.2em] text-[10px] uppercase">Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0B1D3A] mb-8 leading-[1.1] tracking-tighter">
              A Legacy of <br />
              <span className="text-[#FFC107] italic">Innovation & Excellence</span>
            </h2>
            <div className="text-[#4B5563] space-y-6 text-[15px] leading-relaxed">
              <p className="font-medium">
                Bhubaneswar Engineering College (BEC) is not just a college; it is a dream built on <span className="text-[#0B1D3A] font-bold">40 acres of lush green land</span>. Since our start in 2008, we have focused on making students ready for the global stage. 
              </p>
              <p>
                As part of the prestigious <span className="text-[#0B1D3A] font-bold">Ayush Group</span>, BEC is managed by experts who understand what the industry needs. We believe that true learning happens when theory meets real-world practice. Our campus is designed to be a "Sanctuary of Learning" where students can focus, create, and succeed.
              </p>
              <p>
                Whether it is our <span className="text-[#0B1D3A] font-bold">Aeronautical Engineering</span> labs or our modern computer centers, every corner of BEC is built to inspire. We are proud to be <span className="text-[#0B1D3A] font-bold">AICTE Approved</span> and <span className="text-[#0B1D3A] font-bold">NAAC Accredited</span>, ensuring that your degree has value worldwide.
              </p>
            </div>
          </div>

          <div className="relative group" data-aos="zoom-in">
             <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white p-1 bg-white shadow-2xl transition-all duration-700 hover:rotate-2">
                <img 
                   src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg" 
                   alt="BEC Campus Life" 
                   className="w-full h-[500px] object-cover rounded-[2rem] transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                   <h4 className="font-black text-white uppercase text-sm mb-1 text-center tracking-widest">Global Standards</h4>
                   <p className="text-[10px] font-bold text-[#FFC107] uppercase tracking-[0.3em] text-center">Empowering Future Engineers</p>
                </div>
             </div>
          </div>
        </section>

        {/* ── CORE STRENGTHS (More Text) ── */}
        <section className="relative py-32 px-6 lg:px-8 overflow-hidden group">
           <div className="absolute inset-0 z-0">
              <div 
                className="w-full h-full bg-cover bg-fixed bg-center"
                style={{ 
                  backgroundImage: "url('https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629485/becweb/campus_exterior.jpg')",
                  filter: 'brightness(0.15)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A] via-transparent to-[#0B1D3A] opacity-90" />
           </div>
           
           <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">Why Choose <span className="text-[#FFC107]">BEC?</span></h2>
                 <p className="text-white/60 text-sm font-medium tracking-widest uppercase">The BEC Advantage</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 {[
                   { 
                     icon: Rocket, 
                     title: "Unique Programs", 
                     desc: "We are one of the few colleges in Odisha offering specialized courses like Aeronautical Engineering and Aircraft Maintenance Engineering (AME)." 
                   },
                   { 
                     icon: ShieldCheck, 
                     title: "Solid Accreditation", 
                     desc: "Our programs are AICTE Approved and we carry the NAAC Accreditation, which means we never compromise on educational quality and standards." 
                   },
                   { 
                     icon: Users, 
                     title: "Industry Connect", 
                     desc: "With 10,000+ alumni working in top global firms like Amazon, Infosys, and Tech Mahindra, our placement record speaks for itself." 
                   }
                 ].map((item, i) => (
                   <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-[#FFC107]/30 transition-all group">
                      <div className="w-16 h-16 rounded-2xl bg-[#FFC107] flex items-center justify-center mb-8 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                         <item.icon className="w-8 h-8 text-[#0B1D3A]" />
                      </div>
                      <h3 className="text-xl font-black text-white uppercase mb-5 tracking-tight group-hover:text-[#FFC107] transition-colors">{item.title}</h3>
                      <p className="text-white/70 text-[14px] font-medium leading-relaxed italic">"{item.desc}"</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ── OUR PHILOSOPHY (Simple Words) ── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group order-2 lg:order-1" data-aos="zoom-in">
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg" 
                  alt="Students at BEC" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-navy-950/20" />
             </div>
             {/* Abstract Badge */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFC107] rounded-full flex flex-col items-center justify-center border-8 border-[#F9FAFB] shadow-2xl animate-pulse">
                <span className="text-[#0B1D3A] font-black text-2xl tracking-tighter uppercase">No. 1</span>
                <span className="text-[#0B1D3A] font-bold text-[8px] uppercase tracking-widest">Campus in BBSR</span>
             </div>
          </div>

          <div data-aos="fade-left" className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#FFC107]" />
              <span className="text-[#FFC107] font-black tracking-[0.3em] text-[10px] uppercase">Infrastructure</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0B1D3A] mb-8 leading-tight tracking-tighter">
              World Class <br />
              <span className="text-slate-400 italic">Facilities for You</span>
            </h2>
            <div className="text-[#4B5563] space-y-7 text-[15px] leading-relaxed">
              <p>
                Our campus is more than just classrooms. We have built an eco-friendly zone where technology and nature live together. Students have access to <span className="text-[#0B1D3A] font-bold">Smart Classrooms</span>, ultra-modern computer labs, and large sports grounds.
              </p>
              <p>
                For our engineering students, we have specialized labs for every branch. We are especially famous for our <span className="text-[#0B1D3A] font-bold">Aeronautics Hangar</span>, which is the first of its kind in Odisha. This gives our students the rare chance to work on actual aircraft parts and engines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   "Modern Girls & Boys Hostels",
                   "24/7 Security & CCTV",
                   "Advanced Research Cell",
                   "Library with 50,000+ Books",
                   "Indoor & Outdoor Sports",
                   "Green Solar Campus"
                 ].map((li, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-2 h-2 rounded-full bg-[#FFC107]" />
                      <span className="text-[11px] font-bold text-[#0B1D3A] uppercase tracking-tight">{li}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL MESSAGE ── */}
        <section className="max-w-4xl mx-auto px-6 text-center py-10" data-aos="fade-up">
           <div className="relative p-12 bg-[#0B1D3A] rounded-[3rem] shadow-3xl overflow-hidden group">
              {/* Decorative Circle */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FFC107]/10 rounded-full blur-3xl group-hover:bg-[#FFC107]/20 transition-all duration-700" />
              
              <div className="relative z-10">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
                    <GraduationCap className="w-8 h-8 text-[#FFC107]" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                   "We Shape the Future, <br />
                   One <span className="text-[#FFC107]">Engineer</span> at a Time."
                 </h3>
                 <p className="text-white/60 text-sm font-medium italic mb-10 max-w-xl mx-auto">
                   Join Bhubaneswar Engineering College and start your journey towards a successful global career today.
                 </p>
                 <button onClick={() => window.location.href='/admission_query'} className="px-12 py-4 bg-[#FFC107] text-[#0B1D3A] font-black text-xs uppercase tracking-[0.3em] rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                    Start Your Journey
                 </button>
              </div>
           </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};
