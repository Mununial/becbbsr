import { PageLayout } from '../components/PageLayout';
import { Building2, Users, Target, GraduationCap, Mail, Drill } from 'lucide-react';

const faculty = [
  { name: "Soubhagyalaxmi Mohanty", role: "Asst. Professor", email: "civil@becbbsr.ac.in" },
  { name: "Rasmita Sahoo", role: "Asst. Professor", email: "civil@becbbsr.ac.in" },
  { name: "Rasmita Mohabhoi", role: "Asst. Professor", email: "civil@becbbsr.ac.in" },
  { name: "Himanshu Sekhar Sahoo", role: "Asst. Professor", email: "civil@becbbsr.ac.in" },
  { name: "Madhusmita Priyadarshini", role: "Asst. Professor", email: "civil@becbbsr.ac.in" },
  { name: "Saswat Mishra", role: "Asst. Professor", email: "civil@becbbsr.ac.in" }
];

export const CivilEngg = () => {
  return (
    <PageLayout title="Civil Engineering">
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Header Section */}
        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-12 relative overflow-hidden">
           <Building2 className="absolute top-8 right-12 w-48 h-48 text-primary/5 -rotate-12 pointer-events-none" />
           <div className="w-full md:w-2/3 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <Drill className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tight">
                   The Backbone of Infrastructure
                 </h2>
              </div>
              <div className="text-gray-600 leading-[1.8] text-[16px] space-y-6 text-justify">
                <p>
                  Civil engineering is the oldest and best branch of engineering from the growth perspective. The demand for skilled civil engineers will never slow down worldwide as infrastructure projects, constructing the building, and much more structure will keep on increasing and will never be stagnant.
                </p>
                <p>
                  There is a massive career scope in Civil Engineering as BE/BTech Civil Engineering graduates can explore promising opportunities in both the private sector and public sectors.
                </p>
                <p>
                  Environmental Engineering is a newly emerging discipline with brilliant opportunities. Pollution is increasing drastically and as an environmental engineer, you will be conducting various research and development activities to cover and decrease the threat of environmental pollution.
                </p>
              </div>
           </div>
           
           <div className="w-full md:w-1/3 shrink-0">
              <div className="bg-primary rounded-3xl p-10 text-white h-full border border-white/5 relative overflow-hidden group shadow-2xl">
                 <Target className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" />
                 <h4 className="text-2xl font-black uppercase tracking-widest mb-6">Career Outlook</h4>
                 <div className="space-y-4 text-sm font-medium text-white/70">
                    <p>• Infrastructure Development</p>
                    <p>• Government Projects</p>
                    <p>• Public & Private Sectors</p>
                    <p>• Environmental Protection</p>
                    <p>• Healthy Human Existence</p>
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

      </div>
    </PageLayout>
  );
};
