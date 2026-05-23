import { PageLayout } from '../components/PageLayout';
import { Zap, Target, GraduationCap, Mail, Cpu, Power } from 'lucide-react';

const faculty = [
  { name: "Bijay Kumar Sahoo", role: "Asst. Professor", email: "electrical@becbbsr.ac.in" },
  { name: "Sandip Prasad Singh", role: "Asst. Professor", email: "electrical@becbbsr.ac.in" },
  { name: "Binaya Malik", role: "Asst. Professor", email: "electrical@becbbsr.ac.in" },
  { name: "Nalini Sahoo", role: "Asst. Professor", email: "electrical@becbbsr.ac.in" },
  { name: "Smita Rani Patra", role: "Asst. Professor", email: "electrical@becbbsr.ac.in" }
];

export const EEEngg = () => {
  return (
    <PageLayout title="Electrical Engineering">
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Header Section */}
        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-12 relative overflow-hidden">
           <Zap className="absolute top-8 right-12 w-48 h-48 text-accent/5 -rotate-12 pointer-events-none" />
           <div className="w-full md:w-2/3 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                    <Power className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tight">
                   The Power of Innovation
                 </h2>
              </div>
              <div className="text-gray-600 leading-[1.8] text-[16px] space-y-6 text-justify">
                <p>
                   Electrical Energy being the prime energy source for every sector, after completing B.Tech in Electrical Engineering there are a number of job opportunities for candidates in Power Generation, Power Transmission, and Power Distribution sectors.
                </p>
                <p>
                   Almost all the government sectors, manufacturing units in public and private sectors also need Electrical Engineers. Aspirants also have a lot of scope in diverse industries such as design, manufacture, operation, and maintenance of electronics equipment.
                </p>
              </div>
           </div>
           
           <div className="w-full md:w-1/3 shrink-0">
              <div className="bg-primary rounded-3xl p-10 text-white h-full border border-white/5 relative overflow-hidden group">
                 <Target className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" />
                 <h4 className="text-2xl font-black uppercase tracking-widest mb-6">Career Outlook</h4>
                 <div className="space-y-4 text-sm font-medium text-white/70">
                    <p>• Power Sector Growth</p>
                    <p>• Government Manufacturing</p>
                    <p>• Cyber Security Electronics</p>
                    <p>• Power Electronics & Drives</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4">
              <Zap className="w-10 h-10 text-accent" />
              <h4 className="text-lg font-black text-primary uppercase tracking-tighter">Power Generation</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Careers in distribution, transmission, and production of electrical energy for the nation.</p>
           </div>
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4">
              <Cpu className="w-10 h-10 text-primary" />
              <h4 className="text-lg font-black text-primary uppercase tracking-tighter">Computer Engineering</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Bridging electricity with computational software and cyber systems for modern robotics.</p>
           </div>
        </section>

        {/* Faculty Grid */}
        <section className="flex flex-col gap-10">
           <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">
              Faculty Members
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faculty.map((f, i) => (
                 <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-primary/30 mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                       <GraduationCap className="w-6 h-6" />
                    </div>
                    <h4 className="font-black text-primary uppercase text-sm mb-1">{f.name}</h4>
                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4">{f.role}</p>
                    <a href={`mailto:${f.email}`} className="flex items-center gap-2 text-[10px] font-black text-accent hover:text-accent-dark transition-colors uppercase tracking-widest">
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

