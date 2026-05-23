import { PageLayout } from '../components/PageLayout';
import { Award, Layers, CheckSquare } from 'lucide-react';
import { useAdmission } from '../hooks/useAdmission';
import { motion } from 'framer-motion';

const courses = [
  { name: "Aeronautical Engineering", intake: 30 },
  { name: "Aircraft Maintenance Engineering (AME)", intake: 30 },
  { name: "Civil Engineering", intake: 60 },
  { name: "Electrical Engineering", intake: 60 },
  { name: "Mechanical Engineering", intake: 60 }
];

export const Diploma = () => {
  const { open } = useAdmission();
  return (
    <PageLayout title="Diploma in Engineering" subtitle="SCTE & VT Affiliated | Industry-Ready Skills | 3-Year Programs">
      <div className="flex flex-col gap-10 mt-4">
        
        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-8 md:p-10 border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sky-400 via-secondary to-sky-400" />
           <Award className="w-12 h-12 text-sky-500 mb-5" />
           <h2 className="text-3xl lg:text-4xl font-black text-navy-950 uppercase tracking-tighter mb-4">
             Vocational Training & Education
           </h2>
           <p className="text-gray-500 font-medium text-base max-w-3xl leading-relaxed">
             Affiliated to State Council for Vocational Training & Education (SCTE & VT). Providing industry-standard skill building for early tech leaders.
           </p>
           <div className="flex flex-wrap gap-3 mt-5 justify-center text-[11px] font-black uppercase tracking-widest">
             {['3 Years Duration','SCTE & VT Affiliated','5 Branches','Class 10 Passed Eligible'].map(t=>(
               <span key={t} className="bg-sky-500/8 text-sky-600 border border-sky-200/50 px-3 py-1.5 rounded-full">{t}</span>
             ))}
           </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
           {courses.map((course, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay: i*0.07 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all relative group"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                    <Layers className="w-24 h-24 text-primary" />
                 </div>
                 <CheckSquare className="w-10 h-10 text-sky-500" />
                 <h3 className="text-lg font-black text-navy-950 uppercase tracking-tight leading-snug">{course.name}</h3>
                 <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                    <div>
                       <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Intake</span>
                       <span className="text-base font-black text-sky-500">{course.intake} Seats</span>
                    </div>
                    <button onClick={() => open('Diploma in Engineering')}
                      className="text-[10px] font-black text-sky-500/60 hover:text-sky-600 border border-sky-200 hover:border-sky-400 px-3 py-1.5 rounded-lg uppercase tracking-widest transition-all hover:bg-sky-50">
                      Apply
                    </button>
                 </div>
              </motion.div>
           ))}
        </div>

        <div className="bg-navy-950 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 shadow-xl">
           <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-secondary border border-white/10 shrink-0">
                 <Award className="w-7 h-7" />
              </div>
              <div>
                 <h4 className="text-lg font-black uppercase tracking-widest">Affiliated to SCTE & VT</h4>
                 <p className="text-white/50 font-medium text-sm">State Council for Technical Education & Vocational Training, Odisha</p>
              </div>
           </div>
           <motion.button onClick={() => open('Diploma in Engineering')}
             whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
             className="bg-secondary text-navy-950 font-black px-8 py-4 rounded-xl uppercase text-xs tracking-widest shadow-xl shrink-0">
              Apply for Diploma
           </motion.button>
        </div>

      </div>
    </PageLayout>
  );
};
