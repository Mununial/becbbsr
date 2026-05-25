import { PageLayout } from '../components/PageLayout';
import { Settings, Target, GraduationCap, Mail, Box, Drill } from 'lucide-react';
import { SEO } from '../components/SEO';

const faculty = [
  { name: "Smruti Ranjan Ratha", role: "Asst. Professor", email: "mech@becbbsr.ac.in" },
  { name: "Santunu Mohapatra", role: "Asst. Professor", email: "mech@becbbsr.ac.in" },
  { name: "Amiya Ranjan Malik", role: "Asst. Professor", email: "mech@becbbsr.ac.in" },
  { name: "Aditya Moharana", role: "Asst. Professor", email: "mech@becbbsr.ac.in" },
  { name: "Sasmita Mishra", role: "Asst. Professor", email: "mech@becbbsr.ac.in" },
  { name: "Ramya Ranjan Lenka", role: "Asst. Professor", email: "mech@becbbsr.ac.in" },
  { name: "Rajalaxmi Das", role: "Asst. Professor", email: "mech@becbbsr.ac.in" },
  { name: "Biswamohan Behera", role: "Asst. Professor", email: "mech@becbbsr.ac.in" }
];

export const MechanicalEngg = () => {
  return (
    <PageLayout title="Mechanical Engineering">
      <SEO 
        title="B.Tech Mechanical Engineering | Mechatronics &amp; Robotics | BEC"
        description="Study B.Tech Mechanical Engineering at Bhubaneswar Engineering College (BEC). Elite focus on Mechatronics, additive manufacturing, autonomous systems, and advanced robotics."
        keywords={[
          "mechanical engineering college Bhubaneswar",
          "BTech mechanical engineering in Odisha",
          "mechatronics and robotics courses",
          "3D printing additive manufacturing BEC",
          "automobile CAD labs Bhubaneswar"
        ]}
      />
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Header Section */}
        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-12 relative overflow-hidden">
           <Settings className="absolute top-8 right-12 w-48 h-48 text-primary/5 -rotate-12 pointer-events-none" />
           <div className="w-full md:w-2/3 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-accent/10 text-primary">
                    <Drill className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tight">
                   The Engineering Core
                 </h2>
              </div>
              <div className="text-gray-600 leading-[1.8] text-[16px] space-y-6 text-justify">
                <p>
                   Mechanical Engineering graduates have wide employment opportunities in manufacturing industries, power sectors, process plants and R&D organizations and software industries. 
                </p>
                <p>
                   Mechatronics engineering is a stream of engineering which has high scope in various industrial applications. One can not only work in the field of mechatronics, but has equal opportunities in the other areas such as electrical, systems, computer engineering etc.
                </p>
                <p>
                   Strong demand for Mechatronics engineers exists in the field of designing, implementing and operating internet control of machines, autonomous robots and engine management systems.
                </p>
              </div>
           </div>
           
           <div className="w-full md:w-1/3 shrink-0">
              <div className="bg-primary rounded-3xl p-10 text-white h-full border border-white/5 relative overflow-hidden group shadow-2xl">
                 <Target className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" />
                 <h4 className="text-2xl font-black uppercase tracking-widest mb-6">Career Growth</h4>
                 <div className="space-y-4 text-sm font-medium text-white/70">
                    <p>• Advanced Machine Design</p>
                    <p>• Industrial Manufacturing</p>
                    <p>• Mechatronics & Robotics</p>
                    <p>• Thermal Engineering</p>
                    <p>• Autonomous Systems Control</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4 group hover:border-primary/20 transition-all">
              <Box className="w-10 h-10 text-primary" />
              <h4 className="text-lg font-black text-primary uppercase tracking-tighter">Additive Manufacturing</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Modern manufacturing techniques utilizing 3D printing and digital prototyping.</p>
           </div>
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4 group hover:border-primary/20 transition-all">
              <Settings className="w-10 h-10 text-accent" />
              <h4 className="text-lg font-black text-primary uppercase tracking-tighter">Industrial Design</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Systematic approach to designing products that excel in real-world environments.</p>
           </div>
           <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4 group hover:border-primary/20 transition-all">
              <Drill className="w-10 h-10 text-primary" />
              <h4 className="text-lg font-black text-primary uppercase tracking-tighter">Machine Analysis</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Deep dive into thermal dynamics and industrial power sciences.</p>
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
