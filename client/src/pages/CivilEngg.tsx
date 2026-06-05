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
      "@id": "https://becbbsr.ac.in/civil-engg",
      "url": "https://becbbsr.ac.in/civil-engg",
      "name": "B.Tech Civil Engineering in Odisha | BEC Bhubaneswar",
      "description": "Study B.Tech Civil Engineering at Bhubaneswar Engineering College (BEC). Explore our infrastructure labs, survey camps, expert faculty, and placement partners.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://becbbsr.ac.in/" },
          { "@type": "ListItem", "position": 2, "name": "Departments", "item": "https://becbbsr.ac.in/departments" },
          { "@type": "ListItem", "position": 3, "name": "Civil Engineering", "item": "https://becbbsr.ac.in/civil-engg" }
        ]
      },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://becbbsr.ac.in" }
    }
  ]
};

const hodData: HODData = {
  name: "Er. Saswat Mohanty",
  designation: "Assistant Professor & Head",
  qualification: "M.Tech (Structural Engineering)",
  email: "civil@becbbsr.ac.in",
  image: "/facilities/hod files/saswat_mohanty.png",
  specialization: "Construction Engineering & Management",
  researchInterest: "Seismic Design of Structures, Advanced Civil Engineering Materials",
  experience: "4.5+ Years",
  teachingExp: "4.5 Years",
  researchExp: "0 Years",
  industryExp: "3 Years",
  coursesTaught: [
    "Environmental Engineering",
    "Air Pollution",
    "Environmental Geotechniques",
    "Ground Improvement",
    "Disaster Management",
    "Basic Civil Engg"
  ],
  researchOutput: {
    papers: "6 (National: 4, International: 2)",
    phdGuided: "Ongoing",
    books: "NA",
    patents: 1,
    projects: "NA"
  }
};

const galleryImages: string[] = [
  // Real civil department photos — to be added by college
];

export const CivilEngg = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageLayout title="Civil Engineering">
      <SEO 
        title="B.Tech Civil Engineering | Civil &amp; Environmental Department | BEC"
        description="Study B.Tech Civil Engineering at Bhubaneswar Engineering College (BEC). Explore our infrastructure labs, survey camps, expert faculty, and placement partners."
        keywords={["civil engineering", "BTech Civil", "BEC Bhubaneswar"]}
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
              Civil Engineering
            </h1>
            
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative bg-slate-100 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <svg className="w-16 h-16 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <p className="text-sm font-bold uppercase tracking-wider">Department Photos Coming Soon</p>
              </div>
            </div>

            {/* Human Written Description */}
            <div className="text-slate-600 leading-[1.8] text-sm md:text-base space-y-5 text-justify">
              <p>
                Civil engineering is all about building the physical world around us. From the roads we drive on to the tall buildings we see in cities, the clean water systems in our homes, and the bridges that connect places—civil engineers design and construct all of them. It is one of the oldest and most respected engineering branches because, as long as humans need homes, roads, clean water, and transport, civil engineering will always remain important.
              </p>
              <p>
                At Bhubaneswar Engineering College (BEC), we believe in teaching civil engineering through actual hands-on work. We don't want you to just look at formulas for concrete or structural designs on a board. In our laboratories, you will test the strength of concrete blocks, learn how soil behaves under pressure, and practice modern land mapping using surveying instruments in real campus fields. We also train you on industry-standard computer tools like AutoCAD and STAAD Pro so you can design structures digitally before you start building them in the real world.
              </p>
              <p>
                Our civil department, led by Er. Saswat Mohanty, focuses on preparing you for both private construction companies and secure government jobs. Many of our students aim to work in prestigious government organizations like the Public Works Department (PWD), Railways, or State Electricity Boards, and we offer extra guidance to help them crack these competitive exams. Whether you want to manage large highway projects or design green, eco-friendly buildings, our teachers will support you at every step of your journey.
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
                To achieve excellence in civil engineering education and research, training students to become creators of sustainable, resilient, and state-of-the-art infrastructure that meets global and local societal needs.
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
                <li>To impart quality technical education, structural logic, and field surveying skills to prepare industry-ready engineers.</li>
                <li>To conduct research in advanced construction materials, earthquake engineering, and environmental systems.</li>
                <li>To collaborate with construction giants and government bodies to provide hands-on internship and placement opportunities.</li>
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
              Our dedicated faculty, who not only strive to excel in the classrooms but also are always there to help the students. The department has enthusiastic faculty members who provide expertise in their areas of interests which are major areas of Civil Engineering.
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
              <p><strong>PEO 1:</strong> To provide students with strong fundamentals in design, geotechnical engineering, surveying, and fluid mechanics for core industry careers.</p>
              <p><strong>PEO 2:</strong> To train graduates to use advanced designing tools (such as AutoCAD, STADD Pro) and prepare them for public sector and infrastructure jobs.</p>
              <p><strong>PEO 3:</strong> To encourage lifelong learning, ethical engineering practices, and environmental stewardship for global infrastructure development.</p>
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
              <p><strong>PSO1:</strong> The ability to understand, analyze, and design structural frames, bridges, dams, and foundations using standard codes and software modules.</p>
              <p><strong>PSO2:</strong> To plan, estimate, and execute civil engineering projects, incorporating safety regulations and sustainable materials.</p>
              <p><strong>PSO3:</strong> To address environmental threats by designing water treatment networks, municipal waste management, and green buildings.</p>
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
          <DepartmentSidebar hod={hodData} activeBranch="civil" />
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
