import { PageLayout } from '../components/PageLayout';
import { Briefcase, Layers, CheckSquare, GraduationCap, Users, Mail, Microscope } from 'lucide-react';
import { useAdmission } from '../hooks/useAdmission';
import { motion } from 'framer-motion';

const specializations = [
  "Marketing", "Finance", "Human Resource", "Systems", "Operations Management", "Agri-Business"
];

const faculty = [
  { name: "Mrs. Lipsa Tanaya Mishra", role: "Professor & Head", email: "mba@gmail.com" },
  { name: "Dr. Gyanaranjan Prusty", role: "Professor (Chemistry)", email: "sch@becbbsr.ac.in" },
  { name: "Mr. Abhaya Satpathy", role: "Asst. Professor", email: "mba@gmail.com" },
  { name: "Dr. D. Panda", role: "Asst. Professor", email: "mba@gmail.com" },
  { name: "Mr. R R Mohapatra", role: "Asst. Prof (Physics)", email: "sch@becbbsr.ac.in" },
  { name: "Mr. Ashish Kumar Behera", role: "Asst. Professor", email: "mba@gmail.com" },
  { name: "Mr. Samir Bag", role: "Asst. Professor", email: "mba@gmail.com" },
  { name: "Mrs. Sasmita Biswal", role: "Asst. Professor", email: "mba@gmail.com" }
];

export const MBA = () => {
  const { open } = useAdmission();
  return (
    <PageLayout title="MBA & Basic Sciences" subtitle="AICTE Approved | 120 Seats | BPUT Affiliated">
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
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {faculty.map((f, i) => (
                 <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                       <GraduationCap className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-primary uppercase text-sm mb-1">{f.name}</h4>
                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-3 leading-tight">{f.role}</p>
                    <a href={`mailto:${f.email}`} className="flex items-center gap-1.5 text-[10px] font-black text-primary hover:text-accent transition-colors uppercase tracking-widest">
                       <Mail className="w-3 h-3" /> Contact
                    </a>
                 </div>
              ))}
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
    </PageLayout>
  );
};
