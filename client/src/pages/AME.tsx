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
      "@id": "https://becbbsr.ac.in/ame",
      "url": "https://becbbsr.ac.in/ame",
      "name": "Aircraft Maintenance Engineering in Odisha | BEC Bhubaneswar",
      "description": "Become a licensed Aircraft Maintenance Engineer at Bhubaneswar Engineering College (BEC). Explore our DGCA aligned AME courses, modern hangars, and top placements.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://becbbsr.ac.in/" },
          { "@type": "ListItem", "position": 2, "name": "Departments", "item": "https://becbbsr.ac.in/departments" },
          { "@type": "ListItem", "position": 3, "name": "Aircraft Maintenance Engineering", "item": "https://becbbsr.ac.in/ame" }
        ]
      },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://becbbsr.ac.in" }
    }
  ]
};

const hodData: HODData = {
  name: "Er. S Jena",
  designation: "Assistant Professor & Head",
  qualification: "B.Tech (Aeronautical), Licensed AME",
  email: "ame@becbbsr.ac.in",
  specialization: "Aircraft Systems Maintenance, Avionics Integration, Aviation Safety Regulations",
  researchInterest: "Aircraft Health Diagnostics, Airworthiness standards, UAV/Drone Maintenance",
  experience: "9+ Years",
  publications: {
    journals: 3,
    conferences: 5
  }
};

const galleryImages = [
  "/images/ame_banner_machine.png",
  "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg",
  "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629486/becweb/campus_interior.jpg",
  "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629487/becweb/stairs.jpg",
  "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629470/becweb/placement_hero.jpg"
];

export const AME = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageLayout title="Aircraft Maintenance Engineering">
      <SEO 
        title="Aircraft Maintenance Engineering (AME) | Aviation Academy | BEC"
        description="Become a licensed Aircraft Maintenance Engineer at Bhubaneswar Engineering College (BEC). Explore our DGCA aligned AME courses, modern hangars, and top placements."
        keywords={["aircraft maintenance engineering", "AME", "BEC Bhubaneswar"]}
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
              Aircraft Maintenance Engineering
            </h1>
            
            <div 
              className="w-full h-80 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group cursor-pointer"
              onClick={() => setSelectedImage("/images/ame_banner_machine.png")}
            >
              <img 
                src="/images/ame_banner_machine.png" 
                alt="Aircraft Maintenance Engineering Department" 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-primary/95 backdrop-blur-sm text-accent text-xs font-black px-3.5 py-1.5 rounded-lg uppercase tracking-wider border border-accent/20">
                Aircraft Systems & Hangar Lab
              </div>
            </div>

            {/* Human Written Description */}
            <div className="text-slate-600 leading-[1.8] text-sm md:text-base space-y-5 text-justify">
              <p>
                Aircraft Maintenance Engineering (AME) is a highly specialized and responsible profession in the aviation industry. An aircraft is a highly complex machine, and before it can take off, a licensed Aircraft Maintenance Engineer must inspect it, test its systems, and certify that it is fully safe to fly. If you love airplanes, enjoy working with your hands, and want to be responsible for the safety of passengers in the skies, this is the perfect career path for you.
              </p>
              <p>
                At Bhubaneswar Engineering College (BEC), we provide top-class training that aligns with the requirements of the Directorate General of Civil Aviation (DGCA). We believe that safety in aviation starts in the classroom and hangar. In our dedicated maintenance workshops and mock airplane structures, you will get to work on real aircraft systems, engine parts, landing gears, and electronic cockpit instruments. You will learn how to troubleshoot complex mechanical and avionics issues in real-life scenarios.
              </p>
              <p>
                Led by our HOD, Er. S Jena, our department focuses heavily on practical safety and job readiness. As airlines expand rapidly and more airports open across India, the demand for certified AME professionals is growing faster than ever. We work closely with major airlines and maintenance repair organizations (MROs) to help our students get hands-on internships and high-paying jobs upon graduation. Our instructors are committed to guiding you through all the necessary licensing exams.
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
                To build a premier aviation maintenance academy that sets industry standards for quality, safety, and operational excellence, shaping licensed technicians who secure global skies.
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
                <li>To deliver high quality technical instruction and practical hangar sessions to prepare students for the DGCA licensing exams.</li>
                <li>To teach safety management systems, aircraft electrical networks, and avionics.</li>
                <li>To collaborate with major airlines and MRO providers to facilitate practical training, internships, and placements.</li>
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
              Our dedicated faculty, who not only strive to excel in the classrooms but also are always there to help the students. The department has enthusiastic faculty members who provide expertise in their areas of interests which are major areas of Aircraft Maintenance Engineering.
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
              <p><strong>PEO 1:</strong> To provide students with deep technical knowledge in airframes, turbine engines, avionics, and electrical systems for licensing preparation.</p>
              <p><strong>PEO 2:</strong> To train graduates in aviation safety protocols, maintenance record keeping, and regulatory compliance standards.</p>
              <p><strong>PEO 3:</strong> To foster a safety-first mindset, ethical responsibility, and teamwork required for high-risk airline operations.</p>
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
              <p><strong>PSO 1:</strong> The ability to inspect, troubleshoot, and certify airframe structural parts and jet propulsion systems following civil aviation procedures.</p>
              <p><strong>PSO 2:</strong> To install and calibrate digital avionics, autopilot circuits, radar, and navigation sensors in live aircraft models.</p>
              <p><strong>PSO 3:</strong> To execute non-destructive testing (NDT), sheet metal repair, and composite material patching safely in line with MRO standards.</p>
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
          <DepartmentSidebar hod={hodData} activeBranch="ame" />
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
