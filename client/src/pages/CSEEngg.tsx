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
      "@id": "https://becbbsr.ac.in/cse-engg",
      "url": "https://becbbsr.ac.in/cse-engg",
      "name": "B.Tech Computer Science & Engineering in Odisha | BEC Bhubaneswar",
      "description": "Study B.Tech Computer Science & Engineering (CSE) at Bhubaneswar Engineering College.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://becbbsr.ac.in/" },
          { "@type": "ListItem", "position": 2, "name": "Departments", "item": "https://becbbsr.ac.in/departments" },
          { "@type": "ListItem", "position": 3, "name": "Computer Science Engineering", "item": "https://becbbsr.ac.in/cse-engg" }
        ]
      },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://becbbsr.ac.in" }
    }
  ]
};

const hodData: HODData = {
  name: "Er. Anita Behera",
  designation: "Associate Professor & Head",
  qualification: "M.Tech (CSE), Ph.D (Cont.)",
  email: "cse@becbbsr.ac.in",
  image: "/facilities/hod files/anita_behera.jpg",
  specialization: "Computer Science and Engineering",
  researchInterest: "Artificial Intelligence, Data Mining, Pattern Recognition",
  experience: "15+ Years",
  teachingExp: "15 Years",
  researchExp: "3 Years",
  industryExp: "6 Months",
  coursesTaught: [
    "Data Structures",
    "Machine Learning",
    "Data Engineering",
    "C",
    "Java",
    "Python",
    "IOT",
    "Software Engineering"
  ],
  researchOutput: {
    papers: 1,
    phdGuided: 0,
    books: 0,
    patents: 1,
    projects: 0
  }
};

const galleryImages = [
  "/images/cse-img.jpg",
  "/facilities/CSE/cse_1.jpeg",
  "/facilities/CSE/cse_2.jpeg",
  "/facilities/CSE/cse_3.jpeg",
  "/facilities/CSE/cse_4.jpeg",
  "/facilities/CSE/cse_5.jpeg",
  "/facilities/CSE/cse_6.jpeg",
  "/facilities/CSE/cse_7.jpeg",
  "/facilities/CSE/cse_8.jpeg",
  "/facilities/CSE/cse_9.jpeg",
  "/facilities/CSE/cse_10.jpeg",
  "/facilities/CSE/cse_11.jpeg",
  "/facilities/CSE/cse_12.jpeg",
  "/facilities/CSE/cse_13.jpeg",
  "/facilities/CSE/cse_14.jpeg",
  "/facilities/CSE/cse_15.jpeg",
  "/facilities/CSE/cse_16.jpeg",
  "/facilities/CSE/cse_17.jpeg",
  "/facilities/CSE/cse_18.jpeg",
  "/facilities/CSE/cse_19.jpeg"
];

export const CSEEngg = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageLayout title="Computer Science & Engineering">
      <SEO 
        title="B.Tech Computer Science &amp; Engineering | CSE Department | BEC"
        description="Study B.Tech Computer Science &amp; Engineering (CSE) at Bhubaneswar Engineering College."
        keywords={["computer science engineering", "BTech CSE", "BEC Bhubaneswar"]}
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
              Computer Science & Engineering
            </h1>
            
            <div 
              className="w-full h-80 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group cursor-pointer"
              onClick={() => setSelectedImage("/images/cse-img.jpg")}
            >
              <img 
                src="/images/cse-img.jpg" 
                alt="Computer Science Department AI & Logic Lab" 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-primary/95 backdrop-blur-sm text-accent text-xs font-black px-3.5 py-1.5 rounded-lg uppercase tracking-wider border border-accent/20">
                AI & Logic Lab Showcase
              </div>
            </div>

            {/* Human Written Description */}
            <div className="text-slate-600 leading-[1.8] text-sm md:text-base space-y-5 text-justify">
              <p>
                Computer Science and Engineering is all about using your creativity and logic to build software and solve real-world problems. Today, computers are everywhere, and studying CSE helps you understand how things work under the hood. In our department, we teach students how to code, how algorithms solve complex tasks, and how software is designed to make human life easier and more productive.
              </p>
              <p>
                At Bhubaneswar Engineering College (BEC), our Computer Science department focuses on practical learning. We don't just ask you to memorize theories from textbooks. Instead, you get to sit in our computer labs, write code, build databases, and see your programs run live. We also teach modern topics like Data Science, Artificial Intelligence, and Cybersecurity because these are the skills companies are looking for right now.
              </p>
              <p>
                Our students get plenty of hands-on practice, and our teachers are always ready to guide them. Whether you want to build a mobile app, design a website, or learn how to secure data from hackers, we have the labs and the mentors to help you reach your goals. By the time you graduate, you will have the confidence and skills needed to start a successful career in the IT industry.
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
                The department aims to be recognized for its eminence in the field of Computer Science & Engineering to achieve excellence in education & research to meet the industrial and societal needs.
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
                <li>To produce competent Computer Engineers by imparting quality education and technological advancements.</li>
                <li>To conduct research in the field of Computer Science and its allied areas.</li>
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
              Our dedicated faculty, who not only strive to excel in the classrooms but also are always there to help the students. The department has enthusiastic faculty members who provide expertise in their areas of interests which are major areas of Computer Science & Engineering.
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
              <p><strong>PEO 1:</strong> To empower students of Computer Science and Engineering for industry readiness.</p>
              <p><strong>PEO 2:</strong> To encourage graduates to go for higher studies and research in the domain of Computer Science and its allied fields.</p>
              <p><strong>PEO 3:</strong> To enhance the leadership, entrepreneurial skills and ethical values of graduates for enrichment of the society.</p>
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
              <p><strong>PSO1:</strong> The ability to understand, analyze, design and develop optimal solutions of a real-time problem by applying fundamental concepts of Computer Science and Engineering.</p>
              <p><strong>PSO2:</strong> To apply software engineering principles and practices for developing scientific, business and general purpose applications.</p>
              <p><strong>PSO3:</strong> To adapt emerging technologies for efficient use of digital platform in day to day life.</p>
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
          <DepartmentSidebar hod={hodData} activeBranch="cse" />
        </div>

      </div>

      {/* ─── Redesigned Full Width Landscape Department Details Hub ─── */}
      <div className="mt-12">
        <DepartmentDetailsHub department="cse" />
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
