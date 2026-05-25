import { PageLayout } from '../components/PageLayout';
import { Monitor, Target, GraduationCap, Mail, Database, BrainCircuit, Globe } from 'lucide-react';
import { useData } from '../context/DataContext';
import { SEO } from '../components/SEO';

export const CSEEngg = () => {
  const { faculties } = useData();
  return (
    <PageLayout title="Computer Science & Engineering">
      <SEO 
        title="B.Tech Computer Science &amp; Engineering | CSE Department | BEC"
        description="Study B.Tech Computer Science &amp; Engineering (CSE) at Bhubaneswar Engineering College. Specializations in Data Science, Artificial Intelligence, Cybersecurity, and Web Development."
        keywords={[
          "computer science engineering college Bhubaneswar",
          "BTech CSE in Odisha",
          "best CSE colleges in Bhubaneswar",
          "data science engineering course Odisha",
          "cybersecurity artificial intelligence BEC"
        ]}
      />
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Header Section */}
        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-12 relative overflow-hidden">
           <Monitor className="absolute top-8 right-12 w-48 h-48 text-primary/5 -rotate-12 pointer-events-none" />
           <div className="w-full md:w-2/3 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <BrainCircuit className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tight">
                   The Digital Frontier
                 </h2>
              </div>
              <div className="text-gray-600 leading-[1.8] text-[16px] space-y-6 text-justify">
                <p>
                  Computer Science and Engineering encourages students to utilize their problem-solving skills and creativity as they become familiar with the principles of both scientific engineering and computer programming.
                </p>
                <p>
                  This branch encompasses a variety of topics that relates to computation, like analysis of algorithms, programming languages, program design, software.
                </p>
                <p>
                  Data Science is a buzzword in the technology world right now and for good reason, it represents a major step forward in how computers can learn.
                </p>
              </div>
           </div>
           
           <div className="w-full md:w-1/3 shrink-0">
              <div className="bg-primary rounded-3xl p-10 text-white h-full border border-white/5 relative overflow-hidden group shadow-2xl">
                 <Target className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" />
                 <h4 className="text-2xl font-black uppercase tracking-widest mb-6">Future Paths</h4>
                 <div className="space-y-4 text-sm font-medium text-white/70">
                    <p>• Artificial Intelligence</p>
                    <p>• Data Science & Big Data</p>
                    <p>• Ethical Hacking</p>
                    <p>• Mobile App Development</p>
                    <p>• Cybersecurity</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Areas Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4 group hover:border-primary/20 transition-all">
              <Database className="w-10 h-10 text-primary" />
              <h4 className="text-lg font-black text-primary uppercase tracking-tight">Big Data</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Management of evolving technology and huge datasets.</p>
           </div>
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4 group hover:border-primary/20 transition-all">
              <BrainCircuit className="w-10 h-10 text-accent" />
              <h4 className="text-lg font-black text-primary uppercase tracking-tight">Data Science</h4>
              <p className="text-gray-500 text-sm leading-relaxed">High demand surge for professional data architects.</p>
           </div>
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4 group hover:border-primary/20 transition-all">
              <Globe className="w-10 h-10 text-primary" />
              <h4 className="text-lg font-black text-primary uppercase tracking-tight">Web Apps</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Modern web technology and animation domains.</p>
           </div>
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4 group hover:border-primary/20 transition-all">
              <Monitor className="w-10 h-10 text-accent" />
              <h4 className="text-lg font-black text-primary uppercase tracking-tight">Game Dev</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Scientific modeling and mobile game production.</p>
           </div>
        </section>

        {/* Faculty Grid */}
        <section className="flex flex-col gap-10">
           <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">
              Faculty Members
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faculties.filter(f => f.department === "CSE Engg").map((f, i) => (
                 <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-1">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center text-gray-400 mb-6 group-hover:border group-hover:border-primary transition-all">
                       {f.image ? <img src={f.image} className="w-full h-full object-cover" /> : <GraduationCap className="w-8 h-8 opacity-50" />}
                    </div>
                    <h4 className="font-black text-primary uppercase text-sm mb-1 line-clamp-1">{f.name}</h4>
                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4 line-clamp-1">{f.role}</p>
                    <a href={`mailto:${f.email}`} className="flex items-center gap-2 text-[10px] font-black text-primary hover:text-accent transition-colors uppercase tracking-widest truncate">
                       <Mail className="w-3.5 h-3.5 shrink-0" /> {f.email}
                    </a>
                 </div>
              ))}
           </div>
        </section>

      </div>
    </PageLayout>
  );
};
