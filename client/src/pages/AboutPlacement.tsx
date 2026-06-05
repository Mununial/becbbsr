import { PageLayout } from '../components/PageLayout';
import { SEO } from '../components/SEO';
import { Briefcase, Target, CheckCircle2, TrendingUp, Award } from 'lucide-react';

const objectives = [
  "Organize campus placement for final year students.",
  "Arrange Industry & Institution interaction/rapport.",
  "Facilitate companies for recruiting candidates.",
  "Enhance student's employability through training.",
  "Arrange seminars, workshops and guest lectures.",
  "Provide resources for career planning processes.",
  "Empower students with lifelong decision making skills."
];

const trainingPillars = [
  { year: "1st Year", focus: "Communication Skills & Personality Development" },
  { year: "2nd Year", focus: "Quantitative Aptitude & Verbal Ability" },
  { year: "3rd Year", focus: "Pre-Placement Training (PPT)" },
  { year: "4th Year", focus: "Industry Specific Training & Campus Recruitment" }
];

export const AboutPlacement = () => {
  return (
    <PageLayout title="Training & Placement">
      <SEO 
        title="Training & Placement Cell | Career Opportunities at BEC"
        description="Learn about the Training &amp; Placement Cell of Bhubaneswar Engineering College (BEC). Explore our career training roadmap, industrial training, and 75%+ placement records."
        keywords={[
          "Bhubaneswar Engineering College placement cell",
          "BEC training and placement roadmap",
          "engineering summer training Odisha",
          "student employability development Bhubaneswar",
          "BEC highest salary package",
          "career opportunities engineering Odisha"
        ]}
      />
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-12 relative overflow-hidden">
           <Briefcase className="absolute top-8 right-12 w-48 h-48 text-primary/5 -rotate-12 pointer-events-none" />
           <div className="w-full md:w-2/3 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <TrendingUp className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tight">
                   The Backbone of BEC
                 </h2>
              </div>
              <div className="text-gray-600 leading-[1.8] text-[16px] space-y-6 text-justify">
                <p>
                  Training & Placement Department is committed to develop enthusiasm, strong human values and good leadership qualities as per the need of hurriedly changing technology working with a strategy oriented planning.
                </p>
                <p>
                  The department incessantly strives to help students in pursuing their career goals by acquiring employment seeking skills. This is accomplished through building a strong partnership amongst students, faculty members, alumni and companies.
                </p>
                <p className="font-bold text-primary text-lg">
                  75% Placement Record • Highest Package: ₹10 LPA • Average Salary: ₹3.5 LPA
                </p>
              </div>
           </div>
           
           <div className="w-full md:w-1/3 shrink-0">
              <div className="bg-primary rounded-3xl p-10 text-white h-full border border-white/5 relative overflow-hidden group shadow-2xl">
                 <Target className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" />
                 <h4 className="text-2xl font-black uppercase tracking-widest mb-6">Core Objectives</h4>
                 <div className="space-y-4 text-xs font-medium text-white/70">
                    {objectives.slice(0, 5).map((obj, i) => (
                      <p key={i} className="flex gap-2">
                         <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                         {obj}
                      </p>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Placement Head Desk */}
        <section className="bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 border border-white/5 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
               backgroundSize: '30px 30px'
             }}
           />
           <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
           <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-primary/20 rounded-full blur-[70px] translate-y-1/2 pointer-events-none" />

           <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
             {/* Head Image */}
             <div className="w-44 h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden border-4 border-white/10 shrink-0 bg-slate-800 shadow-2xl relative group">
               <img 
                 src="/facilities/image.png" 
                 alt="Subrat Kumar Sahoo" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
               />
             </div>
             
             {/* Head Details */}
             <div className="flex-1 space-y-5 text-center lg:text-left">
               <div className="space-y-2">
                 <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-accent/15 border border-accent/30 text-accent rounded-full text-[9px] font-black uppercase tracking-widest">
                   <Award className="w-3.5 h-3.5" /> Department Leadership
                 </span>
                 <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white font-poppins">
                   Subrat Kumar Sahoo
                 </h3>
                 <p className="text-xs text-accent font-bold uppercase tracking-widest font-inter">
                   Head - Training & Placement Department
                 </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left font-inter text-xs">
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
                   <span className="text-[9px] font-black text-white/40 uppercase tracking-widest block">Education</span>
                   <p className="font-bold text-white uppercase">MBA, PGDEMA</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
                   <span className="text-[9px] font-black text-white/40 uppercase tracking-widest block">Experience</span>
                   <p className="font-bold text-white uppercase">19+ Years</p>
                 </div>
               </div>

               <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 text-left font-inter">
                 <span className="text-[9px] font-black text-accent uppercase tracking-widest block">Area of Specialization</span>
                 <p className="text-xs text-white/80 leading-relaxed font-semibold">
                   Training & Placement, Campus Recruitment, Industry Relations, Career Development, and Employability Enhancement.
                 </p>
               </div>
             </div>
           </div>
        </section>

        {/* Training Modules */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter flex items-center gap-4">
                 <div className="w-8 h-1 bg-primary"></div>
                 Career Training Roadmap
              </h3>
              <div className="space-y-4">
                 {trainingPillars.map((pillar, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg flex items-center gap-6 group hover:border-primary/30 transition-all">
                       <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center text-primary font-black text-xs uppercase group-hover:bg-primary group-hover:text-white transition-all">
                          {pillar.year}
                       </div>
                       <div className="flex flex-col">
                          <span className="font-black text-primary uppercase text-sm">{pillar.focus}</span>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Placement Preparation</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-gray-50 rounded-3xl p-10 flex flex-col gap-8 border border-gray-200/50">
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">Industrial Exposure</h3>
              <div className="text-gray-600 text-sm leading-relaxed space-y-6 text-justify">
                 <p>
                    Industrial visits and tours are an integral part of the professional course, during which students visit companies and get insight regarding the internal working environment. It provides students with an opportunity to learn practical through interaction.
                 </p>
                 <p>
                    The Cell arranges mandatory industrial training for students at the end of the 4th and 6th Semesters. Each student has to undertake summer training in industries of repute for one or two months.
                 </p>
              </div>
              <div className="mt-4 p-6 bg-white rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
                 <Award className="w-10 h-10 text-accent" />
                 <div>
                    <span className="block font-black text-primary uppercase text-xs">Summer Projects</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Apply theoretical concepts in practice</span>
                 </div>
              </div>
           </div>
        </section>

      </div>
    </PageLayout>
  );
};
