import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { DepartmentSidebar, type HODData } from '../components/DepartmentSidebar';
import { 
  X, 
  Plane, 
  Settings, 
  Cpu, 
  Shield, 
  Wind, 
  Flame, 
  Compass, 
  Radio, 
  Globe, 
  Briefcase, 
  Building2, 
  GraduationCap, 
  Award,
  Layers,
  Sparkles,
  TrendingUp,
  Server
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';

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

          {/* Why Study Section */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Why <span className="text-accent">Study Aeronautical Engineering?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Aircraft Design", icon: Compass, bg: "bg-blue-500/10 text-blue-600", desc: "Mastering the layout, systems, and performance parameters of modern flying vehicles." },
                { title: "Aircraft Structures", icon: Layers, bg: "bg-indigo-500/10 text-indigo-600", desc: "Analyzing stress, composite materials, and structural integrity of airframes." },
                { title: "Aerodynamics", icon: Wind, bg: "bg-cyan-500/10 text-cyan-600", desc: "Studying air behavior around airfoils and computational fluid dynamics (CFD)." },
                { title: "Aircraft Propulsion Systems", icon: Flame, bg: "bg-amber-500/10 text-amber-600", desc: "In-depth research on gas turbines, turboprops, and rocket propulsion." },
                { title: "Flight Mechanics", icon: TrendingUp, bg: "bg-emerald-500/10 text-emerald-600", desc: "Understanding flight path stability, control, and performance flight testing." },
                { title: "Avionics Systems", icon: Cpu, bg: "bg-purple-500/10 text-purple-600", desc: "Exploring digital flight controls, navigation sensors, and communications." },
                { title: "Aerospace Materials", icon: Shield, bg: "bg-rose-500/10 text-rose-600", desc: "Testing high-strength alloys, ceramics, and advanced composite airframes." },
                { title: "Aircraft Maintenance", icon: Settings, bg: "bg-slate-500/10 text-slate-700", desc: "Practical training in airworthiness, inspections, and regulatory compliance." },
                { title: "UAV & Drone Technology", icon: Radio, bg: "bg-teal-500/10 text-teal-600", desc: "Designing autonomous micro air vehicles, flight controllers, and payloads." },
                { title: "Space Technology Fundamentals", icon: Globe, bg: "bg-sky-500/10 text-sky-600", desc: "Understanding orbital mechanics, rocket launching, and satellite design." }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-50 bg-gradient-to-br from-white to-slate-50/50 hover:border-accent/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`p-3.5 rounded-2xl ${item.bg} transition-all duration-300 group-hover:scale-110 shadow-sm shrink-0`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-black text-sm text-primary uppercase tracking-tight group-hover:text-accent transition-colors">
                      {item.title}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Career Opportunities */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Career <span className="text-accent">Opportunities</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {[
                {
                  title: "Design & Core Engg",
                  color: "border-blue-500",
                  text: "text-blue-600",
                  bg: "bg-blue-50/50",
                  iconColor: "text-blue-500",
                  roles: ["Aircraft Design Engineer", "Aerospace Engineer", "Avionics Engineer", "UAV / Drone Engineer"]
                },
                {
                  title: "Research & Defence",
                  color: "border-emerald-500",
                  text: "text-emerald-600",
                  bg: "bg-emerald-50/50",
                  iconColor: "text-emerald-500",
                  roles: ["Research Scientist", "ISRO Scientist", "DRDO Engineer", "Defence Technology Specialist"]
                },
                {
                  title: "Aviation & Operations",
                  color: "border-amber-500",
                  text: "text-amber-600",
                  bg: "bg-amber-50/50",
                  iconColor: "text-amber-500",
                  roles: ["Flight Test Engineer", "Aircraft Maintenance Engineer", "Airline Technical Operations", "Airline Systems Engineer"]
                }
              ].map((track, idx) => (
                <div key={idx} className={`p-6 rounded-3xl border-l-4 ${track.color} bg-slate-50/30 flex flex-col gap-4 hover:shadow-md transition-all duration-300`}>
                  <div className="flex items-center gap-2.5">
                    <span className={`text-xs font-black uppercase tracking-wider ${track.text}`}>
                      {track.title}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {track.roles.map((role, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow transition-all group">
                        <Briefcase className={`w-3.5 h-3.5 ${track.iconColor} shrink-0 group-hover:scale-110 transition-transform`} />
                        <span className="text-xs font-bold text-slate-700 leading-tight group-hover:text-primary transition-colors">
                          {role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Recruiters */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Top <span className="text-accent">Recruiters</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
              {[
                "ISRO", "DRDO", "HAL", "Boeing", "Airbus", "Tata Advanced Systems",
                "Mahindra Aerospace", "L&T Defence", "Indigo Airlines", "Air India",
                "SpiceJet", "Collins Aerospace"
              ].map((recruiter, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-100 bg-slate-50/20 hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 group text-center min-h-[100px] relative overflow-hidden"
                >
                  <Building2 className="w-5 h-5 text-slate-400 group-hover:text-accent mb-2.5 transition-colors duration-300" />
                  <span className="text-xs font-black uppercase tracking-wider text-primary group-hover:text-white transition-colors duration-300 leading-tight">
                    {recruiter}
                  </span>
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Higher Studies & Future Scope */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Higher Studies & <span className="text-accent">Future Scope</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Advanced Aerospace Engineering", desc: "M.Tech in Aerospace or Propulsion Engineering focusing on core aerodynamic designs, advanced aircraft engines, and structures." },
                { title: "Avionics & International Studies", desc: "M.Tech in Avionics or MS Abroad, exploring advanced flight control systems, sensor fusion, radar systems, and space instrumentation." },
                { title: "Aviation Management & Certification", desc: "MBA in Aviation Management or specialized safety courses (airworthiness regulations, certification standards, operations control)." },
                { title: "Research & Flight Operations", desc: "Doctoral research programs (PhD) in CFD / UAV designs, or pursuing professional Pilot Training Programs (CPL)." }
              ].map((path, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4 p-5 rounded-2xl border border-slate-50 hover:border-slate-150 hover:shadow-md transition-all duration-300 group bg-slate-50/20"
                >
                  <div className="p-3 rounded-xl bg-accent/10 text-accent self-start shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-black text-sm text-primary uppercase tracking-tight group-hover:text-accent transition-colors">
                      {path.title}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed text-justify">
                      {path.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industry Applications */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Industry <span className="text-accent">Applications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-2">
              {[
                { name: "Aviation Industry", desc: "Commercial airlines & airport engineering.", val: "95%" },
                { name: "Defence Sector", desc: "Fighter jets, military transports & defence systems.", val: "90%" },
                { name: "Space Research", desc: "Launch vehicles, satellites & space exploration.", val: "88%" },
                { name: "UAV & Drone Industry", desc: "Autonomous drones & agricultural/industrial monitoring.", val: "92%" },
                { name: "Aircraft Manufacturing", desc: "Structural components, assembly & composite fabrication.", val: "85%" },
                { name: "Airline Operations", desc: "Route optimization, fleet planning & airline tech support.", val: "89%" },
                { name: "Aircraft Maintenance", desc: "MRO organizations & aircraft airworthiness servicing.", val: "94%" },
                { name: "Research & Development", desc: "Fluid dynamics modeling, wind tunnel testing & simulation.", val: "87%" },
                { name: "Satellite Projects", desc: "Payload design, satellite communication & orbit telemetry.", val: "83%" }
              ].map((app, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col gap-3.5 p-5 rounded-2xl border border-slate-50 hover:border-slate-150 hover:shadow-md transition-all duration-300 bg-white group"
                >
                  <div className="flex justify-between items-center">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Relevance: {app.val}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-black text-xs text-primary uppercase tracking-wide group-hover:text-accent transition-colors">
                      {app.name}
                    </span>
                    <p className="text-[11px] text-slate-500 leading-normal text-justify">
                      {app.desc}
                    </p>
                  </div>
                  {/* Subtle Growth Bar */}
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: app.val }}
                    />
                  </div>
                </div>
              ))}
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
