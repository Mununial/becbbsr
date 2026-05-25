import { PageLayout } from '../components/PageLayout';
import { Plane, Users, Target, Rocket, GraduationCap, Mail } from 'lucide-react';
import { SEO } from '../components/SEO';

const faculty = [
  { name: "Dr. Sangram Samal", role: "Professor & Head", email: "aero@becbbsr.ac.in" },
  { name: "Er. A. Panigrahy", role: "Asst. Professor", email: "aero@becbbsr.ac.in" },
  { name: "Er. B K Mandal", role: "Asst. Professor", email: "aero@becbbsr.ac.in" },
  { name: "Er. Jhimi Patra", role: "Asst. Professor", email: "aero@becbbsr.ac.in" },
  { name: "Er. S Jena", role: "Asst. Professor", email: "ame@becbbsr.ac.in" },
  { name: "Er. A Dehury", role: "Asst. Professor", email: "aero@becbbsr.ac.in" },
  { name: "Er. S P Das", role: "Asst. Professor", email: "aero@becbbsr.ac.in" },
  { name: "Er. N Tripathy", role: "Asst. Professor", email: "ame@becbbsr.ac.in" }
];

export const AeronauticalEngg = () => {
  return (
    <PageLayout title="Aeronautical Engineering">
      <SEO 
        title="B.Tech Aeronautical Engineering | Best Aviation College in Odisha"
        description="Study B.Tech Aeronautical Engineering at Bhubaneswar Engineering College (BEC). Explore our aviation courses, expert faculty, modern labs, and excellent placement in aviation companies."
        keywords={[
          "aeronautical engineering college Bhubaneswar",
          "aeronautical engineering in Odisha",
          "aviation engineering courses Bhubaneswar",
          "BTech aeronautical engineering BEC",
          "aircraft maintenance engineering scope India"
        ]}
      />
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Header Section */}
        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-12 relative overflow-hidden">
           <Plane className="absolute top-8 right-12 w-48 h-48 text-primary/5 -rotate-12 pointer-events-none" />
           <div className="w-full md:w-2/3 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <Rocket className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tight">
                   Overview
                 </h2>
              </div>
              <div className="text-gray-600 leading-[1.8] text-[16px] space-y-6 text-justify">
                <p>
                  Aeronautical / Aerospace Engineering is one of the most challenging and rewarding fields of engineering with a wide demanding scope for growth. It is a broad and multidisciplinary subject which covers a varied range of disciplines in an integrated and unified way.
                </p>
                <p>
                  This is a specialized and improved branch of mechanical engineering that involve learning about the design, analysis, testing, and overall operation of vehicles which operate in air, space, water and ground.
                </p>
                <p>
                  This field deals with the development of new technology in the field of civil and military aircraft, space vehicles, defense systems, missiles, satellites, weapons systems, automobile and manufacturing system.
                </p>
              </div>
           </div>
           
           <div className="w-full md:w-1/3 shrink-0">
              <div className="bg-primary rounded-3xl p-10 text-white h-full border border-white/5 relative overflow-hidden group shadow-2xl">
                 <Target className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" />
                 <h4 className="text-2xl font-black uppercase tracking-widest mb-6">Future & Scope</h4>
                 <div className="space-y-4 text-sm font-medium text-white/70">
                    <p>• Highly Challenging Career</p>
                    <p>• Civil & Military Aviation</p>
                    <p>• Space Exploration</p>
                    <p>• Defense Systems Development</p>
                    <p>• 3rd Largest Aviation Market</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Detailed Scope Section */}
        <section className="bg-gray-50 rounded-3xl p-12 border border-gray-100 flex flex-col gap-8">
           <h3 className="text-2xl font-black text-primary uppercase tracking-tighter flex items-center gap-4">
              <div className="w-8 h-1 bg-primary"></div>
              Growth Opportunities
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <p className="text-gray-600 leading-relaxed text-justify">
                 Aircraft Maintenance Engineering Scope in India is rising day by day, due to the expansion of the aviation sector, the need for highly trained Aircraft Maintenance engineers has increased enormously. India is in the race to become the 3rd largest in the aviation sector.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                 Graduates find employment in the diverse aerospace industry. However you would find many opportunities for the application of the same principles in other industries. The UDAN scheme is giving a boost to the AME career.
              </p>
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

      </div>
    </PageLayout>
  );
};
