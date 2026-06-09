import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { DepartmentSidebar, type HODData } from '../components/DepartmentSidebar';
import { X } from 'lucide-react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { DepartmentDetailsHub } from '../components/DepartmentDetailsHub';

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://becbbsr.ac.in/aeronautical-engg",
      "url": "https://becbbsr.ac.in/aeronautical-engg",
      "name": "B.Tech Aeronautical Engineering in Odisha | BEC Bhubaneswar",
      "description": "Study B.Tech Aeronautical Engineering at Bhubaneswar Engineering College.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://becbbsr.ac.in/" },
          { "@type": "ListItem", "position": 2, "name": "Departments", "item": "https://becbbsr.ac.in/departments" },
          { "@type": "ListItem", "position": 3, "name": "Aeronautical Engineering", "item": "https://becbbsr.ac.in/aeronautical-engg" }
        ]
      },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://becbbsr.ac.in" }
    }
  ]
};

const hodData: HODData = {
  name: "Dr. Sangram Keshari Samal",
  designation: "Professor & Head",
  qualification: "PhD (Aeronautical Engineering)",
  email: "aero@becbbsr.ac.in",
  image: "/facilities/hod files/sangram_keshari_samal.jpg",
  specialization: "Flight Mechanics",
  researchInterest: "Computational Fluid Dynamics, UAV Design, Aerodynamic Design",
  experience: "15+ Years",
  teachingExp: "15 Years",
  researchExp: "9 Years",
  industryExp: "8 Years",
  coursesTaught: [
    "Aircraft Performance",
    "Aircraft Stability",
    "Helicopter Theory",
    "Wind tunnel Technology",
    "A/C str-1"
  ],
  researchOutput: {
    papers: 11,
    phdGuided: "NIL",
    books: 1,
    patents: "NIL",
    projects: "NIL"
  }
};

const galleryImages = [
  "/images/aero-img.jpg",
  "/images/bec-aero-club.jpg",
  "/images/bec-aero-club1.jpg",
  "/images/bec-aero-club2.jpg",
  "/images/bec-aero-club3.jpg"
];

export const AeronauticalEngg = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageLayout title="Aeronautical Engineering">
      <SEO 
        title="B.Tech Aeronautical Engineering | Aero Department | BEC"
        description="Study B.Tech Aeronautical Engineering at Bhubaneswar Engineering College."
        keywords={["aeronautical engineering", "BTech Aero", "BEC Bhubaneswar"]}
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
              Aeronautical Engineering
            </h1>
            
            <div 
              className="w-full h-80 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group cursor-pointer"
              onClick={() => setSelectedImage("/images/aero-img.jpg")}
            >
              <img 
                src="/images/aero-img.jpg" 
                alt="Aeronautical Hangar" 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-primary/95 backdrop-blur-sm text-accent text-xs font-black px-3.5 py-1.5 rounded-lg uppercase tracking-wider border border-accent/20">
                Aerodynamics & Hangar Lab
              </div>
            </div>

            {/* Human Written Description */}
            <div className="text-slate-600 leading-[1.8] text-sm md:text-base space-y-5 text-justify">
              <p>
                Aeronautical Engineering is the exciting science of designing, building, and maintaining aircraft. If you have ever looked at a plane flying in the sky and wondered how something so heavy can glide so smoothly, this department is for you. We teach students the principles of flight, how jet engines generate thrust, and how aircraft structures are built to withstand high pressures.
              </p>
              <p>
                At Bhubaneswar Engineering College (BEC), we are proud to be the only college in Bhubaneswar to offer Aeronautical Engineering. This means our students have a huge advantage because they get specialized training that is hard to find elsewhere. We have set up advanced laboratories where you can study real aircraft parts, test aerodynamic shapes in wind tunnels, and see how engines operate up close.
              </p>
              <p>
                Our faculty members, led by Dr. Sangram Keshari Samal, have years of experience and are passionate about teaching. We focus on preparing students for real-world careers in airlines, defense organizations like HAL and DRDO, and space agencies like ISRO. We make sure that our classroom lessons are backed by plenty of practical workshop sessions, so you gain the confidence to work on real aircraft systems.
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
                To achieve recognition as a Department of Excellence by empowering graduates capable of multidisciplinary research, innovation, entrepreneurship, and industry readiness in Aeronautical Engineering.
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
              <ul className="text-xs leading-relaxed space-y-2.5 list-none text-slate-200">
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-400">M1:</span>
                  <span>To develop critical thinking, innovation and adaptability to emerging educational and industry trends while ensuring continuous progress.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-400">M2:</span>
                  <span>To nurture an entrepreneurial mindset among students to meet the dynamic needs of the aeronautical industry.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-400">M3:</span>
                  <span>To collaborate with aeronautical engineering organizations and industries for advancement of knowledge, research, and technological innovation.</span>
                </li>
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
              Our dedicated faculty, who not only strive to excel in the classrooms but also are always there to help the students. The department has enthusiastic faculty members who provide expertise in their areas of interests which are major areas of Aeronautical Engineering.
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
              <p><strong>PEO 1:</strong> To empower students of Aeronautical Engineering for industry readiness in aviation and aerospace design.</p>
              <p><strong>PEO 2:</strong> To encourage graduates to go for higher studies and research in the domains of aerodynamics, thermodynamics, and UAV systems.</p>
              <p><strong>PEO 3:</strong> To enhance the leadership, communication skills and safety standards of graduates for enrichment of the aviation industry.</p>
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
              <p><strong>PSO1:</strong> The ability to understand, analyze, design and develop optimal solutions for aerodynamic structures and aircraft powerplants using computational tools.</p>
              <p><strong>PSO2:</strong> To apply maintenance principles, avionics testing procedures, and safety regulations according to civil aviation requirements.</p>
              <p><strong>PSO3:</strong> To adapt emerging technologies in unmanned aerial vehicles (UAVs/drones) and sustainable green aviation propulsion.</p>
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
          <DepartmentSidebar hod={hodData} activeBranch="aero" />
        </div>

      </div>

      {/* ─── Redesigned Full Width Landscape Department Details Hub ─── */}
      <div className="mt-12">
        <DepartmentDetailsHub department="aero" />
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
