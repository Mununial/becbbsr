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
      "@id": "https://becbbsr.ac.in/agriculture-engineering",
      "url": "https://becbbsr.ac.in/agriculture-engineering",
      "name": "B.Tech Agriculture Engineering in Odisha | BEC Bhubaneswar",
      "description": "Study B.Tech Agriculture Engineering at BEC Bhubaneswar.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://becbbsr.ac.in/" },
          { "@type": "ListItem", "position": 2, "name": "Departments", "item": "https://becbbsr.ac.in/departments" },
          { "@type": "ListItem", "position": 3, "name": "Agriculture Engineering", "item": "https://becbbsr.ac.in/agriculture-engineering" }
        ]
      },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://becbbsr.ac.in" }
    }
  ]
};

const hodData: HODData = {
  name: "Er. Ananyaa Mohanty",
  designation: "Assistant Professor & Head",
  qualification: "M.Tech (Agricultural Engineering)",
  email: "agr@becbbsr.ac.in",
  image: "/facilities/hod files/ananyaa_mohanty.jpg",
  specialization: "Agronomy",
  researchInterest: "Precision Agriculture, Watershed Management, Food Process Engineering",
  experience: "3+ Years",
  teachingExp: "3 Years",
  researchExp: "0 Years",
  industryExp: "0 Years",
  researchOutput: {
    papers: 0,
    phdGuided: "NIL",
    books: "NIL",
    patents: "NIL",
    projects: "NIL"
  }
};

const galleryImages = [
  "/facilities/agrictular photos/agri_1.jpeg",
  "/facilities/agrictular photos/agri_2.jpeg",
  "/facilities/agrictular photos/agri_3.jpeg",
  "/facilities/agrictular photos/agri_4.jpeg",
  "/facilities/agrictular photos/agri_5.jpeg",
  "/facilities/agrictular photos/agri_6.jpeg",
  "/facilities/agrictular photos/agri_7.jpeg",
  "/facilities/agrictular photos/agri_8.jpeg",
  "/facilities/agrictular photos/agri_9.jpeg",
  "/facilities/agrictular photos/agri_10.jpeg",
  "/facilities/agrictular photos/agri_11.jpeg",
  "/facilities/agrictular photos/agri_12.jpeg",
  "/facilities/agrictular photos/agri_13.jpeg"
];

export const AgricultureEngg = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageLayout title="Agriculture Engineering">
      <SEO 
        title="B.Tech Agriculture Engineering | Agri Department | BEC"
        description="Study B.Tech Agriculture Engineering at BEC Bhubaneswar."
        keywords={["agriculture engineering", "BTech Agriculture", "BEC Bhubaneswar"]}
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
              Agriculture Engineering
            </h1>
            
            <div 
              className="w-full h-80 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group cursor-pointer"
              onClick={() => setSelectedImage("/facilities/agrictular photos/agri_1.jpeg")}
            >
              <img 
                src="/facilities/agrictular photos/agri_1.jpeg" 
                alt="Agriculture Engineering Department" 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-primary/95 backdrop-blur-sm text-accent text-xs font-black px-3.5 py-1.5 rounded-lg uppercase tracking-wider border border-accent/20">
                Farm Machinery & Power Lab
              </div>
            </div>

            {/* Human Written Description */}
            <div className="text-slate-600 leading-[1.8] text-sm md:text-base space-y-5 text-justify">
              <p>
                Agriculture Engineering combines engineering principles with farming to make food production more efficient and sustainable. As the population grows, we need smart ways to grow more food while using less water and land. Agriculture engineers design modern tractors, create efficient irrigation networks, and build food processing plants that reduce waste.
              </p>
              <p>
                At Bhubaneswar Engineering College (BEC), our Agriculture Engineering department is focused on future technology. We teach students how to design farm machinery, implement modern drip and sprinkler irrigation systems, and study soil conservation. We also teach smart farming techniques, including the use of drones and IoT sensors to monitor crop health.
              </p>
              <p>
                Led by Er. Ananyaa Mohanty, our faculty members bring a lot of field experience into the classroom. We have spacious laboratories and experimental farms where you can operate machinery, test soil quality, and design irrigation layouts. This hands-on training prepares you for excellent job opportunities in agritech companies, government departments, and food processing industries.
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
                The department aims to be recognized for its eminence in the field of Agriculture Engineering to achieve excellence in education & research to meet the industrial and societal needs.
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
                <li>To produce competent Agriculture Engineers by imparting quality education and technological advancements.</li>
                <li>To conduct research in the field of Agriculture Science and its allied engineering areas.</li>
                <li>To promote entrepreneurial skills by industry-institute interaction for the advancement of e-society.</li>
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
              Our dedicated faculty, who not only strive to excel in the classrooms but also are always there to help the students. The department has enthusiastic faculty members who provide expertise in their areas of interests which are major areas of Agriculture Engineering.
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
              <p><strong>PEO 1:</strong> To empower students of Agriculture Engineering for industry readiness in farm power, soil conservation, and food systems.</p>
              <p><strong>PEO 2:</strong> To encourage graduates to go for higher studies and research in agritech, water resource management, and smart farming.</p>
              <p><strong>PEO 3:</strong> To enhance leadership, teamwork, and ethical values of graduates for enrichment of rural and national agriculture.</p>
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
              <p><strong>PSO1:</strong> The ability to understand, analyze, design and develop optimal solutions for farm mechanization and irrigation projects using core engineering.</p>
              <p><strong>PSO2:</strong> To apply food engineering principles, post-harvest drying, and storage systems according to safety and industrial standards.</p>
              <p><strong>PSO3:</strong> To adapt emerging technologies in precision farming, drone crop spraying, and IoT smart agriculture grids.</p>
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
          <DepartmentSidebar hod={hodData} activeBranch="agriculture" />
        </div>

      </div>

      {/* ─── Redesigned Full Width Landscape Department Details Hub ─── */}
      <div className="mt-12">
        <DepartmentDetailsHub department="agri" />
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
