import { PageLayout } from '../components/PageLayout';
import { Leaf, Users, Target, GraduationCap, Mail, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/SEO';

const faculty = [
  { name: "P Ch. Nayak", role: "Asst. Professor", email: "agr@becbbsr.ac.in" },
  { name: "Samikshya Dash", role: "Asst. Professor", email: "agr@becbbsr.ac.in" },
  { name: "Ananyaa Mohanty", role: "Asst. Professor", email: "agr@becbbsr.ac.in" },
  { name: "Dipti Mohapatra", role: "Asst. Professor", email: "agr@becbbsr.ac.in" },
  { name: "Er. Snigdharani Jena", role: "Asst. Professor", email: "agr@becbbsr.ac.in" },
  { name: "Er. OM Padhy", role: "Asst. Professor", email: "agr@becbbsr.ac.in" },
  { name: "Er. Sushil Harichandan", role: "Asst. Professor", email: "agr@becbbsr.ac.in" }
];

export const AgricultureEngg = () => {
  return (
    <PageLayout title="Agriculture Engineering">
      <SEO 
        title="B.Tech Agriculture Engineering | Department of Agri-Tech | BEC"
        description="Study B.Tech Agriculture Engineering at Bhubaneswar Engineering College (BEC). Hands-on training in farm machinery, smart irrigation systems, and sustainable farming technology."
        keywords={[
          "agriculture engineering college Bhubaneswar",
          "BTech agriculture engineering in Odisha",
          "agri-tech courses Bhubaneswar",
          "farm machinery design labs",
          "sustainable farming engineering BEC"
        ]}
      />
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Header Section */}
        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-12 relative overflow-hidden">
           <Leaf className="absolute top-8 right-12 w-48 h-48 text-primary/5 -rotate-12 pointer-events-none" />
           <div className="w-full md:w-2/3 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <Leaf className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tight">
                   Overview
                 </h2>
              </div>
              <div className="text-gray-600 leading-[1.8] text-[16px] space-y-6 text-justify">
                <p>
                  Agriculture Engineering is the area of engineering concerned with the design, construction and improvement of farming equipment and machinery. 
                </p>
                <p>
                  Agricultural engineers integrate technology with farming. For example, they design new and improved farming equipment that may work more efficiently, or perform new tasks. They design and build agricultural infrastructure such as dams, water reservoirs, warehouses, and other structures.
                </p>
              </div>
           </div>
           
           <div className="w-full md:w-1/3 shrink-0">
              <div className="bg-primary rounded-3xl p-10 text-white h-full border border-white/5 relative overflow-hidden group shadow-2xl">
                 <Target className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" />
                 <h4 className="text-2xl font-black uppercase tracking-widest mb-6">Future & Scope</h4>
                 <div className="space-y-4 text-sm font-medium text-white/70">
                    <p>• Farm Machinery Design</p>
                    <p>• Irrigation Systems</p>
                    <p>• Rural Post-harvest Processing</p>
                    <p>• Soil & Water Conservation</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Faculty Grid */}
        <section className="flex flex-col gap-10">
           <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">
                 Faculty Members
              </h3>
              <div className="hidden md:flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                 <Users className="w-4 h-4" /> Academic Experts
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faculty.map((f, i) => (
                 <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                       <GraduationCap className="w-6 h-6" />
                    </div>
                    <h4 className="font-black text-primary uppercase text-sm mb-1">{f.name}</h4>
                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4">{f.role}</p>
                    <a href={`mailto:${f.email}`} className="flex items-center gap-2 text-[10px] font-black text-primary hover:text-accent transition-colors uppercase tracking-widest">
                       <Mail className="w-3.5 h-3.5" /> Contact
                    </a>
                 </div>
              ))}
           </div>
        </section>

        {/* Closing Tagline */}
        <section className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden border border-white/5">
           <div className="absolute top-0 right-0 p-32 opacity-5 translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <ShieldCheck className="w-96 h-96 text-white" />
           </div>
           <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-tight">
              Driving Technical Innovation in Agriculture.
           </h3>
           <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8"></div>
           <p className="text-white/60 font-black uppercase tracking-[0.3em] text-sm">Join the Green Tech Revolution</p>
        </section>

      </div>
    </PageLayout>
  );
};
