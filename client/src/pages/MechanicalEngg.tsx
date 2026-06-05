import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { DepartmentSidebar, type HODData } from '../components/DepartmentSidebar';
import { X } from 'lucide-react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://becbbsr.ac.in/mechanical-engg",
      "url": "https://becbbsr.ac.in/mechanical-engg",
      "name": "B.Tech Mechanical Engineering in Odisha | BEC Bhubaneswar",
      "description": "Study B.Tech Mechanical Engineering at Bhubaneswar Engineering College (BEC). Elite focus on Mechatronics, additive manufacturing, autonomous systems, and advanced robotics.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://becbbsr.ac.in/" },
          { "@type": "ListItem", "position": 2, "name": "Departments", "item": "https://becbbsr.ac.in/departments" },
          { "@type": "ListItem", "position": 3, "name": "Mechanical Engineering", "item": "https://becbbsr.ac.in/mechanical-engg" }
        ]
      },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://becbbsr.ac.in" }
    }
  ]
};

const hodData: HODData = {
  name: "Dr. Bishnu Prasad Mishra",
  designation: "Professor & Head",
  qualification: "PhD (Mechanical Engineering)",
  email: "mech@becbbsr.ac.in",
  image: "/facilities/hod files/bishnu_prasad_mishra.jpg",
  specialization: "Production Engineering",
  researchInterest: "CAD/CAM, Additive Manufacturing, Autonomous Robotics Systems",
  experience: "25+ Years",
  teachingExp: "25 Years",
  researchExp: "NIL",
  industryExp: "NIL",
  researchOutput: {
    papers: 6,
    phdGuided: "NIL",
    books: 1,
    patents: 3,
    projects: "NIL"
  }
};

const galleryImages = [
  "/facilities/Mechanical/mech_hero.jpg",
  "/facilities/Mechanical/mech_web2.jpg",
  "/facilities/Mechanical/mech_1.jpeg",
  "/facilities/Mechanical/mech_2.jpeg",
  "/facilities/Mechanical/mech_3.jpeg",
  "/facilities/Mechanical/mech_4.jpeg",
  "/facilities/Mechanical/mech_5.jpeg",
  "/facilities/Mechanical/mech_6.jpeg"
];

export const MechanicalEngg = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageLayout title="Mechanical Engineering">
      <SEO 
        title="B.Tech Mechanical Engineering | Mechatronics &amp; Robotics | BEC"
        description="Study B.Tech Mechanical Engineering at Bhubaneswar Engineering College (BEC). Elite focus on Mechatronics, additive manufacturing, autonomous systems, and advanced robotics."
        keywords={["mechanical engineering", "BTech Mechanical", "BEC Bhubaneswar"]}
        schema={pageSchema}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4" id="labs">
        
        {/* ─── Left Column (Main Content) ─── */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Title and Main Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl"
          >
            <h1 className="text-2xl md:text-3xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Mechanical Engineering
            </h1>
            
            <div 
              className="w-full h-80 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group cursor-pointer"
              onClick={() => setSelectedImage("/facilities/Mechanical/mech_hero.jpg")}
            >
              <img 
                src="/facilities/Mechanical/mech_hero.jpg" 
                alt="Mechanical Engineering Workshop" 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-primary/95 backdrop-blur-sm text-accent text-xs font-black px-3.5 py-1.5 rounded-lg uppercase tracking-wider border border-accent/20">
                Workshop & Design Showcase
              </div>
            </div>

            {/* Human Written Description */}
            <div className="text-slate-600 leading-[1.8] text-sm md:text-base space-y-5 text-justify">
              <p>
                Mechanical engineering is often called the "mother" of all engineering branches. It is the study of objects and systems in motion, covering everything from tiny micro-sensors and 3D-printed parts to massive aircraft carriers, wind turbines, and heavy manufacturing machines. If it has moving parts, a mechanical engineer designed it, analyzed how it handles stress and heat, and figured out how to build it.
              </p>
              <p>
                At Bhubaneswar Engineering College (BEC), we teach mechanical engineering by giving you actual workshop experience. We don't want you to just read about engines or gear systems in a textbook. In our mechanical labs and workshops, you will get to work with real lathes, welding tools, and CNC machines. You will learn how to design parts on modern computer software like AutoCAD and SolidWorks, and then see those designs come to life through 3D printing and metal fabrication.
              </p>
              <p>
                Our mechanical department, under the leadership of Dr. Bishnu Prasad Mishra, focuses heavily on modern industry trends. In addition to traditional subjects like thermodynamics and fluid mechanics, we also teach robotics, automation, and electric vehicle technology. This ensures that when our students graduate, they are not only prepared for traditional manufacturing and power sector jobs, but are also ready to work in high-tech automation and robotics firms.
              </p>
            </div>
          </motion.div>

          {/* Vision & Mission Side-by-Side (Classic GCEK Style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900 text-white rounded-3xl p-8 shadow-xl border-l-4 border-accent relative flex flex-col gap-4 overflow-hidden group"
            >
              <h4 className="text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2 text-accent">Vision</h4>
              <p className="text-xs md:text-sm leading-relaxed text-slate-200">
                To achieve excellence in mechanical engineering education and robotics, preparing engineers who are innovative designers, problem solvers, and leaders in automated manufacturing, machine sciences, and green technologies.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900 text-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500 relative flex flex-col gap-4 overflow-hidden group"
            >
              <h4 className="text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2 text-emerald-400">Mission</h4>
              <ul className="text-xs leading-relaxed space-y-2.5 list-disc pl-4 text-slate-200">
                <li>To deliver high quality technical instruction in fluid mechanics, thermodynamics, robotics, and 3D printing.</li>
                <li>To motivate research and development in CAD modeling, automation, and engine management.</li>
                <li>To establish active industrial linkages with manufacturing giants to ensure premium hands-on internships and high placements.</li>
              </ul>
            </motion.div>
          </div>

          {/* Faculty Intro Paragraph */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl"
          >
            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify font-medium">
              Our dedicated faculty, who not only strive to excel in the classrooms but also are always there to help the students. The department has enthusiastic faculty members who provide expertise in their areas of interests which are major areas of Mechanical Engineering.
            </p>
          </motion.div>

          {/* PEOs Section */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              PROGRAM EDUCATIONAL OBJECTIVES (PEOs)
            </h2>
            <div className="text-slate-600 text-xs md:text-sm font-medium space-y-4 pt-2">
              <p><strong>PEO 1:</strong> To provide students with strong fundamentals in machine design, thermal engineering, material science, and kinematics for diverse engineering careers.</p>
              <p><strong>PEO 2:</strong> To train graduates to use modern engineering tools (SolidWorks, CATIA, ANSYS) for structural design, product prototyping, and engine systems analysis.</p>
              <p><strong>PEO 3:</strong> To build communication skills, team cooperation, ethical values, and a commitment to green technology in mechanical fields.</p>
            </div>
          </motion.div>

          {/* PSOs Section */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              PROGRAM SPECIFIC OUTCOMES (PSOs)
            </h2>
            <div className="text-slate-600 text-xs md:text-sm font-medium space-y-4 pt-2">
              <p><strong>PSO 1:</strong> The ability to analyze, simulate, and design mechanical components, thermal engines, and manufacturing processes using advanced computer modules.</p>
              <p><strong>PSO 2:</strong> To implement mechatronic systems, automation algorithms, PLC relays, and autonomous robots for industrial manufacturing lines.</p>
              <p><strong>PSO 3:</strong> To apply additive manufacturing, 3D printing prototyping, and reverse engineering principles to optimize product design cycle times.</p>
            </div>
          </motion.div>

          {/* Photo Gallery Section */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              PHOTO GALLERY
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImage(img)}
                  className="h-28 rounded-xl overflow-hidden border border-slate-100 cursor-pointer group relative shadow-sm"
                >
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest bg-black/40">
                    View
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ─── Right Column (Sidebar) ─── */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <DepartmentSidebar hod={hodData} activeBranch="mechanical" />
        </div>

      </div>

      {/* ─── Image Lightbox Modal ─── */}
      {selectedImage && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-xl transition-all border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedImage} alt="Fullscreen View" className="w-full h-auto max-h-[85vh] object-contain mx-auto" />
          </div>
        </div>
      )}

    </PageLayout>
  );
};
