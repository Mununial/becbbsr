import { PageLayout } from '../components/PageLayout';
import { Plane, Target, Rocket, GraduationCap, Mail } from 'lucide-react';
import { SEO } from '../components/SEO';

const faculty = [
  { name: "Er. S Jena", role: "Asst. Professor", email: "ame@becbbsr.ac.in" },
  { name: "Er. N Tripathy", role: "Asst. Professor", email: "ame@becbbsr.ac.in" },
  { name: "Er. Suraj Kumar Sahoo", role: "Asst. Professor", email: "aero@becbbsr.ac.in" }
];

export const AME = () => {
  return (
    <PageLayout title="Aircraft Maintenance Engineering">
      <SEO 
        title="Aircraft Maintenance Engineering (AME) | Aviation Academy | BEC"
        description="Become a licensed Aircraft Maintenance Engineer at Bhubaneswar Engineering College (BEC). Explore our DGCA aligned AME courses, modern hangars, and top placements."
        keywords={[
          "aircraft maintenance engineering college Bhubaneswar",
          "AME course in Odisha",
          "DGCA approved engineering colleges",
          "aviation maintenance training Bhubaneswar",
          "BEC AME intake"
        ]}
      />
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Header Section */}
        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-12 relative overflow-hidden">
           <Plane className="absolute top-8 right-12 w-48 h-48 text-primary/5 -rotate-12 pointer-events-none" />
           <div className="w-full md:w-2/3 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-600">
                    <Rocket className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tight">
                   Master the Skies
                 </h2>
              </div>
              <div className="text-gray-600 leading-[1.8] text-[16px] space-y-6 text-justify">
                <p>
                  Aircraft Maintenance Engineering (AME) is a licensed and highly technical profession responsible for the safety and airworthiness of aircraft. At BEC, we train the next generation of engineers who ensure that every flight is safe and every machine is perfect.
                </p>
                <p>
                  As India becomes the 3rd largest aviation market, the demand for licensed AME professionals is exploding. Our curriculum is designed to meet DGCA standards and industry expectations.
                </p>
              </div>
           </div>
           
           <div className="w-full md:w-1/3 shrink-0">
              <div className="bg-primary rounded-3xl p-10 text-white h-full border border-white/5 relative overflow-hidden group shadow-2xl">
                 <Target className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" />
                 <h4 className="text-2xl font-black uppercase tracking-widest mb-6">Expertise Areas</h4>
                 <div className="space-y-4 text-sm font-medium text-white/70">
                    <p>• Aerodynamics & Systems</p>
                    <p>• Jet Engine Maintenance</p>
                    <p>• Avionics & Control</p>
                    <p>• Safety Regulations (DGCA)</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Faculty Grid */}
        <section className="flex flex-col gap-10">
           <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">
              Faculty Members
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.map((f, i) => (
                 <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-sky-500/10 group-hover:text-sky-600 transition-all">
                       <GraduationCap className="w-6 h-6" />
                    </div>
                    <h4 className="font-black text-primary uppercase text-sm mb-1">{f.name}</h4>
                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4">{f.role}</p>
                    <a href={`mailto:${f.email}`} className="flex items-center gap-2 text-[10px] font-black text-sky-600 hover:text-sky-700 transition-colors uppercase tracking-widest">
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
