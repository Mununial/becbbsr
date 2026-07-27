import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Briefcase, Layers, CheckSquare, GraduationCap, Users, Mail, Microscope, X, FileDown, User, Award } from 'lucide-react';
import { useAdmission } from '../hooks/useAdmission';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { type HODData } from '../components/DepartmentSidebar';

const specializations = [
  "Marketing", "Finance", "Human Resource", "Agri-Business"
];

const faculty = [
  { name: "Mr. Ashis Kumar Behera", role: "Asst. Professor & Head", email: "mba@gmail.com", image: "/facilities/hod files/ashis_kumar_behera.jpg" }
];

const hodData: HODData = {
  name: "Mr. Ashis Kumar Behera",
  designation: "Assistant Professor & Head",
  qualification: "M.A. (Economics), MBA",
  email: "mba@gmail.com",
  image: "/facilities/hod files/ashis_kumar_behera.jpg",
  specialization: "Economics",
  teachingExp: "11 Years",
  researchExp: "4 Years",
  industryExp: "NIL",
  coursesTaught: ["Economics"],
  researchOutput: {
    papers: 3,
    phdGuided: "NIL",
    books: "NIL",
    patents: "NIL",
    projects: "NIL"
  }
};

export const MBA = () => {
  const { open } = useAdmission();
  const [isHodModalOpen, setIsHodModalOpen] = useState(false);
  return (
    <PageLayout title="MBA &amp; Basic Sciences" subtitle="AICTE Approved | 120 Seats | BPUT Affiliated">
      <SEO 
        title="MBA &amp; Basic Sciences Programmes | PG Admissions | BEC"
        description="Enroll in the top MBA program at Bhubaneswar Engineering College (BEC). AICTE approved, 120 seats, BPUT affiliated. Specializations in Marketing, Finance, HR, and Operations."
        keywords={[
          "best MBA college in Bhubaneswar",
          "MBA admissions 2026 Odisha",
          "MBA colleges in Odisha with low fees",
          "MBA marketing finance HR Bhubaneswar",
          "BEC MBA intake",
          "basic sciences department BEC"
        ]}
      />
      <div className="flex flex-col gap-12 mt-4">
        
        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-12 border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent/50 via-accent to-accent/50"></div>
           <Briefcase className="w-14 h-14 text-primary mb-6" />
           <h2 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tighter mb-4">
             Master of Business Administration
           </h2>
           <p className="text-gray-500 font-medium text-base max-w-3xl leading-relaxed">
             Post-Graduate Programs (intake 120 seats). Approved by AICTE, Affiliated to BPUT, and Recognized by Govt. of Odisha.
           </p>
           <motion.button onClick={() => open('MBA')}
             whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
             className="mt-6 bg-accent text-primary font-black px-8 py-3.5 rounded-xl uppercase text-xs tracking-widest shadow-lg">
             Apply for MBA
           </motion.button>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
           {specializations.map((spec, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay: i*0.07 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg flex flex-col gap-4 hover:-translate-y-1 transition-transform relative group"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                    <Layers className="w-24 h-24 text-primary" />
                 </div>
                 <CheckSquare className="w-10 h-10 text-primary" />
                 <h3 className="text-xl font-black text-primary uppercase tracking-tight">{spec}</h3>
                 <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    Specialized curriculum dedicated to mastering {spec} in a global market context.
                 </p>
              </motion.div>
           ))}
        </div>

        <section className="flex flex-col gap-8">
           <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">Faculty & Research Team</h3>
              <div className="hidden md:flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                 <Users className="w-4 h-4" /> Academic Excellence
              </div>
           </div>
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group">
               {/* Decorative Gradient Overlay */}
               <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />
               <div className="absolute left-0 top-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary md:hidden" />
               
               {/* HOD Image */}
               <div className="relative shrink-0">
                  <div className="w-44 h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden border-4 border-slate-50 shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-102 bg-slate-50">
                     {hodData.image ? (
                        <img src={hodData.image} alt={hodData.name} className="w-full h-full object-cover" />
                     ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center text-white font-black text-4xl font-poppins">
                           AB
                        </div>
                     )}
                  </div>
                  {/* Floating HOD Badge */}
                  <div className="absolute -top-3 -right-3 z-20 bg-accent text-primary text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-xl border border-accent/10 shadow-md">
                     HOD
                  </div>
               </div>

               {/* HOD Information */}
               <div className="flex-1 flex flex-col gap-6 text-center md:text-left w-full">
                  <div>
                     <span className="text-[10px] font-black text-accent uppercase tracking-[0.25em] block mb-2">Faculty Leadership</span>
                     <h4 className="text-2xl md:text-3xl font-black text-primary uppercase font-poppins tracking-tight leading-none">{hodData.name}</h4>
                     <p className="text-slate-400 font-bold text-xs md:text-sm uppercase tracking-widest mt-1.5">{hodData.designation}</p>
                     <span className="inline-block bg-primary/5 text-primary text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg border border-primary/10 mt-3.5">
                        {hodData.qualification}
                     </span>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 border-y border-slate-100 py-4 my-1">
                     <div className="flex flex-col gap-1">
                        <span className="text-lg md:text-xl font-black text-primary font-poppins leading-none">{hodData.teachingExp}</span>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">Teaching Exp</span>
                     </div>
                     <div className="flex flex-col gap-1 border-l border-slate-100 pl-4">
                        <span className="text-lg md:text-xl font-black text-accent font-poppins leading-none">{hodData.researchExp}</span>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">Research Exp</span>
                     </div>
                     <div className="flex flex-col gap-1 border-l border-slate-100 pl-4">
                        <span className="text-lg md:text-xl font-black text-slate-600 font-poppins leading-none">{hodData.researchOutput?.papers || 3}</span>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">Papers Published</span>
                     </div>
                  </div>

                  {/* Specialization & Contact */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
                     <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" /> Specialization: <span className="text-slate-700 font-bold">{hodData.specialization}</span>
                     </div>
                     <a href={`mailto:${hodData.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                        <Mail className="w-4 h-4 text-primary" /> {hodData.email}
                     </a>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex justify-center md:justify-start">
                     <button 
                        onClick={() => setIsHodModalOpen(true)}
                        className="px-6 py-3.5 bg-primary hover:bg-accent text-white hover:text-primary transition-all duration-300 font-black text-[10px] uppercase tracking-widest rounded-xl shadow-lg hover:shadow-accent/25 flex items-center gap-2"
                     >
                        <User className="w-3.5 h-3.5" /> View Full Academic Profile &rarr;
                     </button>
                  </div>
               </div>
            </div>
        </section>

        <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden border border-white/5 shadow-2xl">
           <div className="absolute top-0 right-0 p-32 opacity-5 translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <Microscope className="w-96 h-96 text-white" />
           </div>
           <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter mb-6 max-w-3xl mx-auto leading-tight">
              A Strong Foundation in Basic Sciences for Aspiring Engineers.
           </h3>
           <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
           <p className="text-white/60 font-black uppercase tracking-widest text-sm mb-8">
             Physics &bull; Chemistry &bull; Mathematics &bull; English
           </p>
           <motion.button onClick={() => open('MBA')}
             whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
             className="bg-accent text-primary font-black px-8 py-4 rounded-xl uppercase text-xs tracking-widest shadow-xl">
             Apply for MBA
           </motion.button>
        </div>

      </div>

      {/* ─── Detailed HOD Modal Overlay ─── */}
      {isHodModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-md animate-fade-in animate-duration-200">
          <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col relative animate-slide-up">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary to-blue-900 px-8 py-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-white/10 rounded-xl">
                  <User className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-wider text-sm">HOD Academic Profile</h4>
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Bhubaneswar Engineering College</p>
                </div>
              </div>
              <button
                onClick={() => setIsHodModalOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto max-h-[70vh] flex flex-col gap-6 text-slate-700">
              
              {/* Profile Overview */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-md">
                  {hodData.image ? (
                    <img src={hodData.image} alt={hodData.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center text-white font-black text-xl font-poppins">
                      AB
                    </div>
                  )}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-black text-primary uppercase font-poppins">{hodData.name}</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{hodData.designation}</p>
                  <p className="text-xs text-slate-500 font-semibold">{hodData.qualification}</p>
                </div>
              </div>

              {/* Experience Breakdown (Teaching, Research, Industry) */}
              {(hodData.teachingExp || hodData.researchExp || hodData.industryExp) && (
                <div className="grid grid-cols-3 gap-3 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  {hodData.teachingExp && (
                    <div className="text-center">
                      <div className="text-sm font-black text-primary">{hodData.teachingExp}</div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1">Teaching Exp</div>
                    </div>
                  )}
                  {hodData.researchExp && (
                    <div className="text-center border-l border-slate-200">
                      <div className="text-sm font-black text-accent">{hodData.researchExp}</div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1">Research Exp</div>
                    </div>
                  )}
                  {hodData.industryExp && (
                    <div className="text-center border-l border-slate-200">
                      <div className="text-sm font-black text-slate-600">{hodData.industryExp}</div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1">Industry Exp</div>
                    </div>
                  )}
                </div>
              )}

              {/* Specialization & Interests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hodData.specialization && (
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100/50">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-wider mb-2">Specialization</h5>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">{hodData.specialization}</p>
                  </div>
                )}
                {hodData.researchInterest && (
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100/50">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-wider mb-2">Research Interest</h5>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">{hodData.researchInterest}</p>
                  </div>
                )}
              </div>

              {/* Courses Taught tags */}
              {hodData.coursesTaught && hodData.coursesTaught.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100/50">
                  <h5 className="text-[10px] font-black text-primary uppercase tracking-wider mb-3">Courses Taught (PG/UG)</h5>
                  <div className="flex flex-wrap gap-2">
                    {hodData.coursesTaught.map((course, idx) => (
                      <span key={idx} className="bg-white px-3 py-1.5 rounded-lg border border-slate-100/50 text-[10px] font-bold text-slate-600">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Research & Publication Output Table */}
              {hodData.researchOutput && (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-100">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-wider">Research &amp; Publications Profile</h5>
                  </div>
                  <table className="w-full text-left border-collapse text-xs">
                    <tbody>
                      {hodData.researchOutput.papers !== undefined && (
                        <tr className="border-b border-slate-50">
                          <td className="px-5 py-3 font-semibold text-slate-500 uppercase text-[9px] tracking-wider">Journal &amp; Conference Papers</td>
                          <td className="px-5 py-3 font-black text-primary text-right">{hodData.researchOutput.papers}</td>
                        </tr>
                      )}
                      {hodData.researchOutput.phdGuided !== undefined && (
                        <tr className="border-b border-slate-50">
                          <td className="px-5 py-3 font-semibold text-slate-500 uppercase text-[9px] tracking-wider">Ph.D Guided (Completed/Ongoing)</td>
                          <td className="px-5 py-3 font-black text-accent text-right">{hodData.researchOutput.phdGuided}</td>
                        </tr>
                      )}
                      {hodData.researchOutput.books !== undefined && (
                        <tr className="border-b border-slate-50">
                          <td className="px-5 py-3 font-semibold text-slate-500 uppercase text-[9px] tracking-wider">Books &amp; Chapters Published</td>
                          <td className="px-5 py-3 font-black text-slate-600 text-right">{hodData.researchOutput.books}</td>
                        </tr>
                      )}
                      {hodData.researchOutput.patents !== undefined && (
                        <tr className="border-b border-slate-50">
                          <td className="px-5 py-3 font-semibold text-slate-500 uppercase text-[9px] tracking-wider">Patents Filed &amp; Granted</td>
                          <td className="px-5 py-3 font-black text-amber-500 text-right">{hodData.researchOutput.patents}</td>
                        </tr>
                      )}
                      {hodData.researchOutput.projects !== undefined && (
                        <tr>
                          <td className="px-5 py-3 font-semibold text-slate-500 uppercase text-[9px] tracking-wider">Consultancy &amp; Research Projects</td>
                          <td className="px-5 py-3 font-black text-emerald-500 text-right">{hodData.researchOutput.projects}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Biodata download */}
              <div className="mt-4">
                <a
                  href={hodData.cvLink || '#'}
                  onClick={(e) => {
                    if (!hodData.cvLink) {
                      e.preventDefault();
                      alert("CV will be downloaded automatically when compiled.");
                    }
                  }}
                  className="w-full py-3.5 bg-accent hover:bg-accent/90 text-white font-black text-xs uppercase tracking-widest rounded-xl text-center flex items-center justify-center gap-2 shadow-lg shadow-accent/15 hover:shadow-accent/30 transition-all"
                >
                  <FileDown className="w-4 h-4 shrink-0" />
                  Download CV
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </PageLayout>
  );
};
