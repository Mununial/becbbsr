import { PageLayout } from '../components/PageLayout';
import { Mail, Phone, CheckCircle, GraduationCap, Building2 } from 'lucide-react';
import { SEO } from '../components/SEO';

const positions = [
  "Electronics & Communication Engg.",
  "Electrical Engineering",
  "Agriculture Engineering",
  "Aeronautical Engineering",
  "Computer Science & Engg.",
  "CSE (Data Science)",
  "Civil Engineering",
  "Mechanical Engineering",
  "Mathematics / Physics / Chemistry / English",
  "MBA Faculty"
];

export const Career = () => {
  return (
    <PageLayout title="Careers at BEC">
      <SEO 
        title="Faculty Careers &amp; Job Openings | Work at BEC"
        description="Explore teaching and research career opportunities at Bhubaneswar Engineering College (BEC). Apply for Professor, Associate Professor, and Assistant Professor roles."
        keywords={[
          "teaching jobs engineering college Odisha",
          "BEC Bhubaneswar careers",
          "faculty recruitment engineering Bhubaneswar",
          "work at Bhubaneswar Engineering College",
          "assistant professor job openings Odisha"
        ]}
      />
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Urgent Requirement Banner */}
        <section className="bg-navy-950 rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl border border-white/5">
           <div className="absolute top-0 right-0 p-32 opacity-5 translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <Building2 className="w-96 h-96 text-primary" />
           </div>
           <div className="bg-secondary text-navy-950 px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em] inline-block mb-8 animate-pulse">
              Urgent Requirement
           </div>
           <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-tight">
             Join Our Mission for <span className="text-secondary">Academic Excellence</span>
           </h2>
           <p className="text-white/60 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
             Applications are invited for the post of Professor, Associate Professor, and Assistant Professor in various engineering and science disciplines.
           </p>
        </section>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-black text-navy-950 uppercase tracking-tighter flex items-center gap-4">
                 <div className="w-8 h-1 bg-primary"></div>
                 Open Faculty Roles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {positions.map((pos, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg flex items-center gap-4 group hover:border-primary/30 transition-all">
                       <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                       <span className="font-extrabold text-navy-950 uppercase text-[11px] tracking-tight">{pos}</span>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-gray-50 rounded-[40px] p-12 flex flex-col gap-8 border border-gray-200/50">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                 <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-navy-950 uppercase tracking-tighter">Eligibility & How to Apply</h3>
              <div className="text-gray-600 font-medium text-sm leading-relaxed space-y-6 text-justify">
                 <p>
                    Eligible candidates having required qualifications as per AICTE norms are encouraged to apply. We look for passionate educators who want to shape the next generation of engineers.
                 </p>
                 <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-6">
                    <p className="font-black text-navy-950 uppercase text-xs tracking-widest flex items-center gap-2">
                       <Mail className="w-5 h-5 text-primary" /> Send Resume To:
                    </p>
                    <a href="mailto:info@becbbsr.ac.in" className="text-primary font-black text-lg block hover:underline">info@becbbsr.ac.in</a>
                    <div className="w-full h-px bg-gray-100"></div>
                    <p className="font-black text-navy-950 uppercase text-xs tracking-widest flex items-center gap-2">
                       <Phone className="w-5 h-5 text-secondary" /> Or Contact Office:
                    </p>
                    <p className="text-gray-500 font-bold">Visit during office hours (9:00 AM - 5:00 PM)</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </PageLayout>
  );
};
