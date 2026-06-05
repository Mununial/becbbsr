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
      "@id": "https://becbbsr.ac.in/ee-engg",
      "url": "https://becbbsr.ac.in/ee-engg",
      "name": "B.Tech Electrical Engineering in Odisha | BEC Bhubaneswar",
      "description": "Enroll in B.Tech Electrical Engineering at Bhubaneswar Engineering College (BEC). High-voltage labs, power electronics training, and excellent job opportunities in state electricity grids.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://becbbsr.ac.in/" },
          { "@type": "ListItem", "position": 2, "name": "Departments", "item": "https://becbbsr.ac.in/departments" },
          { "@type": "ListItem", "position": 3, "name": "Electrical Engineering", "item": "https://becbbsr.ac.in/ee-engg" }
        ]
      },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://becbbsr.ac.in" }
    }
  ]
};

const hodData: HODData = {
  name: "Er. Pabitra Mohan Dash",
  designation: "Assistant Professor & Head",
  qualification: "M.Tech (Power Systems)",
  email: "electrical@becbbsr.ac.in",
  specialization: "Power System",
  researchInterest: "Power Electronics, Renewable Energy Integration, High-Voltage Engineering",
  experience: "19+ Years",
  teachingExp: "19 Years",
  researchExp: "6 Years",
  industryExp: "7 Years",
  coursesTaught: [
    "Power Systems (PG/UG)"
  ],
  researchOutput: {
    papers: 18,
    phdGuided: "Ongoing",
    books: "NIL",
    patents: "NIL",
    projects: "NIL"
  }
};

const galleryImages = [
  "/facilities/EE/ee_hero.jpg",
  "/facilities/EE/ee_web1.jpg",
  "/facilities/EE/ee_web2.jpg",
  "/facilities/EE/ee_1.jpeg",
  "/facilities/EE/ee_2.jpeg",
  "/facilities/EE/ee_3.jpeg",
  "/facilities/EE/ee_4.jpeg",
  "/facilities/EE/ee_5.jpeg",
  "/facilities/EE/ee_6.jpeg"
];

export const EEEngg = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageLayout title="Electrical Engineering">
      <SEO 
        title="B.Tech Electrical Engineering | Department of EE | BEC"
        description="Enroll in B.Tech Electrical Engineering at Bhubaneswar Engineering College (BEC). High-voltage labs, power electronics training, and excellent job opportunities in state electricity grids."
        keywords={["electrical engineering", "BTech Electrical", "BEC Bhubaneswar"]}
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
              Electrical Engineering
            </h1>
            
            <div 
              className="w-full h-80 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group cursor-pointer"
              onClick={() => setSelectedImage("/facilities/EE/ee_hero.jpg")}
            >
              <img 
                src="/facilities/EE/ee_hero.jpg" 
                alt="Electrical Engineering Lab" 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-primary/95 backdrop-blur-sm text-accent text-xs font-black px-3.5 py-1.5 rounded-lg uppercase tracking-wider border border-accent/20">
                Electrical Machines Lab
              </div>
            </div>

            {/* Human Written Description */}
            <div className="text-slate-600 leading-[1.8] text-sm md:text-base space-y-5 text-justify">
              <p>
                Electrical engineering is the branch of engineering that deals with electricity, electromagnetism, and electronics. It is the invisible force that powers our entire modern world—from the lights in our homes and the smartphones in our pockets to huge industrial machinery and electric trains. Without electrical engineers, our factories, hospitals, communication systems, and cities would simply stop working.
              </p>
              <p>
                Here at Bhubaneswar Engineering College (BEC), our Electrical Engineering department is focused on real-world practical skills. We know that you can't learn electrical systems just by looking at circuit diagrams in a book. That is why our labs are equipped with real generators, industrial motors, high-voltage transformers, and digital measurement devices. You will get to wire circuits, test how motors run under different loads, and learn how electricity is generated and distributed safely to homes and businesses.
              </p>
              <p>
                Led by our experienced HOD, Er. Pabitra Mohan Dash, our department prepares students for exciting careers in both public power grids and private industries. Many of our students go on to work in state electricity boards, power transmission companies, and manufacturing plants. We also teach modern topics like renewable energy (solar and wind power) and electric vehicles (EVs) because these are the sectors where the future jobs are being created. Our teachers will help you every step of the way to make sure you have the skills and confidence to succeed.
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
                To excel in electrical engineering education, imparting deep knowledge in power systems and clean energy integration, preparing innovators who can address global electrical challenges and power grid demands.
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
                <li>To deliver high quality technical education and practical training on power grids, high voltage lines, and microcontrollers.</li>
                <li>To motivate research on green energy resources, electric vehicles, and power grids.</li>
                <li>To build partnerships with electrical manufacturing giants to generate employment opportunities and internship training.</li>
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
              Our dedicated faculty, who not only strive to excel in the classrooms but also are always there to help the students. The department has enthusiastic faculty members who provide expertise in their areas of interests which are major areas of Electrical Engineering.
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
              <p><strong>PEO 1:</strong> To provide students with strong foundational concepts in electrical machines, power systems, and control electronics for industry positions.</p>
              <p><strong>PEO 2:</strong> To prepare graduates for technical roles in power plants, transmission networks, and the green energy sector (electric vehicles, solar grids).</p>
              <p><strong>PEO 3:</strong> To encourage leadership qualities, environmental stewardship, and ethical practices for energy management and grid optimization.</p>
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
              <p><strong>PSO 1:</strong> The ability to analyze, simulate, and design electrical systems, generator units, and load dispatch centers using advanced software tools.</p>
              <p><strong>PSO 2:</strong> To design and test power converters, motor drives, and control networks to improve industrial automation.</p>
              <p><strong>PSO 3:</strong> To integrate solar, wind, and biomass energy networks with local grids and manage electric vehicle charging interfaces.</p>
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
          <DepartmentSidebar hod={hodData} activeBranch="electrical" />
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
