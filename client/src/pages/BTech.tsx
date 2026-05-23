import { PageLayout } from '../components/PageLayout';
import { GraduationCap, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useAdmission } from '../hooks/useAdmission';
import { motion } from 'framer-motion';

const courses = [
  { name: "Aeronautical Engineering", intake: 30 },
  { name: "Aircraft Maintenance Engineering (AME)", intake: 30 },
  { name: "Agriculture Engineering", intake: 60 },
  { name: "Computer Science & Engineering", intake: 60 },
  { name: "Computer Science & Engg. (Data Science)", intake: 30 },
  { name: "Civil Engineering", intake: 30 },
  { name: "Civil and Environmental Engineering", intake: 30 },
  { name: "Electrical Engineering", intake: 30 },
  { name: "Electrical and Computer Engineering", intake: 30 },
  { name: "Mechanical Engineering", intake: 60 },
  { name: "Mechanical Mechatronics Engineering (Additive Manufacturing)", intake: 30 }
];

export const BTech = () => {
  const { open } = useAdmission();
  return (
    <PageLayout title="B.Tech Programs" subtitle="AICTE Approved • BPUT Affiliated • Govt. of Odisha Recognised">
      <div className="flex flex-col gap-10 mt-4">

        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-8 md:p-10 border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
          <GraduationCap className="w-12 h-12 text-primary mb-5" />
          <h2 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tighter mb-4">Bachelor of Technology</h2>
          <p className="text-gray-500 font-medium text-base max-w-3xl leading-relaxed">
            Approved by AICTE, Affiliated to BPUT, Recognized by Govt. of Odisha. Our B.Tech programs are designed to create next-generation engineers.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 justify-center text-[11px] font-black uppercase tracking-widest">
            {['4 Years Duration','BPUT Affiliated','AICTE Approved','6+ Branches'].map(t=>(
              <span key={t} className="bg-primary/5 text-primary border border-primary/10 px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay: i*0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-primary uppercase tracking-tight leading-snug">{course.name}</h3>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-50 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Intake</span>
                  <span className="text-base font-black text-primary">{course.intake} Seats</span>
                </div>
                <button onClick={() => open('B.Tech Engineering')}
                  className="text-[10px] font-black text-primary/60 hover:text-primary border border-primary/20 hover:border-primary px-3 py-1.5 rounded-lg uppercase tracking-widest transition-all hover:bg-primary/5 flex items-center gap-1">
                  Apply <CheckCircle2 className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent border border-white/10 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-black uppercase tracking-widest">Official Accreditation</h4>
              <p className="text-white/50 font-medium text-sm">Recognized by Biju Patnaik University of Technology (BPUT)</p>
            </div>
          </div>
          <motion.button onClick={() => open('B.Tech Engineering')}
            whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
            className="bg-accent text-primary font-black px-8 py-4 rounded-xl uppercase text-xs tracking-[0.2em] shadow-xl shrink-0">
            Apply for B.Tech →
          </motion.button>
        </div>
      </div>
    </PageLayout>
  );
};

