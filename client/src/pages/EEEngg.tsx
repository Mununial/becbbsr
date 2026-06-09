import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { DepartmentSidebar, type HODData } from '../components/DepartmentSidebar';
import { X, CheckCircle2, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { DepartmentDetailsHub } from '../components/DepartmentDetailsHub';
import hodImage from '../assets/Electrical Engineering/DR.PABITRA MOHAN DASH.jpg';

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
  name: "Dr. Pabitra Mohan Dash",
  designation: "Professor & Head",
  qualification: "PhD (BPUT, Odisha)",
  email: "electrical@becbbsr.ac.in",
  image: hodImage,
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
    papers: 17,
    phdGuided: "Ongoing",
    books: "NIL",
    patents: "NIL",
    projects: "NIL"
  }
};

interface LabFacility {
  name: string;
  objective: string;
  description: string;
  image: string;
}

const labsList: LabFacility[] = [
  {
    name: "Basic Electrical Engineering Lab",
    objective: "To improve the technical expertise of all 1st year B.Tech students through experimental studies on electric circuits, energy basics, and operation of DC/AC machines.",
    description: "Provides grass-root information on basic electrical and electronic circuits, components, principle and operation of DC and AC machines, helping students realize and strengthen their research potential with fundamental aspects of electrical power.",
    image: "/facilities/EE/labs/Basic_Electrical_Engineering_Lab_1.jpeg"
  },
  {
    name: "Network Device & Electrical Measurement Lab",
    objective: "To measure AC/DC voltage, current, power, resistance, inductance, and capacitance, and study network theorems and transient circuit behavior.",
    description: "Equipped with Oscilloscopes, Spectrum Analyzers, Transformers using coupled circuits, filters, and various calibration kits. Students get significant exposure to signal generators, network theorems, and transient circuit solutions.",
    image: "/facilities/EE/labs/Electrical_Measurement_Lab.jpeg"
  },
  {
    name: "Power Electronics & Control and Instrument Lab",
    objective: "To design and build power electronic circuits and analyze control systems responses, stability, and compensators.",
    description: "Students construct circuits using solder, breadboards, thyristors, MOSFETs, and converters. Includes study of servo motors, lag-led compensators, thermocouples, synchroscopes, and linear displacements using LVDT.",
    image: "/facilities/EE/labs/Power_Electronics_&_Control_and_Instrument_Lab_1.jpeg"
  },
  {
    name: "Electrical Machine & Drive Lab",
    objective: "To acquire hands-on knowledge of electromagnetic machines, constructional details, testing, and speed control methods of electrical drives.",
    description: "Students conduct open-circuit, short-circuit, and load tests to determine the performance, efficiency, and regulation of transformers and AC/DC motors, as well as parallel operations of alternators.",
    image: "/facilities/EE/labs/Electrical_Machine_&_Drive_Lab_1.jpeg"
  },
  {
    name: "Power System Lab",
    objective: "To study the structure of power systems, conventional & non-conventional generation, protective relays, circuit breakers, and micro-grid concept.",
    description: "Provides practical insights into transmission line parameters, mechanical and electrical design aspects, relay characteristics, distribution systems, and fault analysis.",
    image: "/facilities/EE/labs/Power_System_Lab_1.jpeg"
  }
];

interface DepartmentEvent {
  title: string;
  date: string;
  type: string;
  description: string;
  highlights: string[];
}

const eventsList: DepartmentEvent[] = [
  {
    title: "Recent Advanced Technology in Control of Electrical Power & Energy System (RATCEPES)",
    date: "January 24th - 25th, 2020",
    type: "National Seminar",
    description: "A TEQIP-III sponsored national seminar organized to bring awareness about the recent technological advances in Power and Energy Sector.",
    highlights: [
      "Inaugurated by Er. Prabhat Ranjan Mallick (Honorable Chairman, KGI)",
      "Keynote address delivered by Dr. R.K Jena (Director, CAPGS, BPUT Rourkela)",
      "Briefed by Prof. (Dr) B.N Biswal (Honorable Director, BEC) on the seminar's significance",
      "Vote of thanks offered by Prof. P.M. Dash (EE Dept, Bhubaneswar)"
    ]
  },
  {
    title: "Green Energy Revolution",
    date: "November 19th, 2019",
    type: "Workshop",
    description: "Conducted to promote rapid growth and implementation of Green Energy as a clean, alternative measure against conventional energy sources.",
    highlights: [
      "Inaugurated by Prof. (Dr) B.N Biswal (Honorable Director, BEC)",
      "Resource talks by Prof (Dr) M.K Mohanty (OUAT Bhubaneswar)",
      "Special session by Er. A.K Choudhury (Dy. Director Tech, OREDA)",
      "Organized under the guidance of Department Head, Prof. Pabitra Mohan Dash"
    ]
  },
  {
    title: "BRITANIKA",
    date: "Annual Event",
    type: "Departmental Tech-Fest",
    description: "The department's flagship annual student event integrating technical, athletic, and creative talents.",
    highlights: [
      "Robotics competition and tech-exhibitions",
      "Annual athletic and sports championships",
      "Cultural programs, dance, drama, and musical concerts"
    ]
  }
];

const specificTasks = [
  "Involve in job safety training and comply with all established rules and methods to ensure safe and healthy work atmosphere.",
  "Comply and enforce all safety plus GMP policies.",
  "Supervise automation system upgrades implementation having conveyors, robotic systems, product handling, and palletizing systems.",
  "Assist Maintenance Department for equipment repair.",
  "Record in documents all electrical design changes.",
  "Train technical staff in PLC troubleshooting and Electrical Systems.",
  "Design new electrical engineering and control systems.",
  "Perform with site staff and external experts to supervise and enhance site electrical systems utilization.",
  "Head investigations along with site staff to identify and resolve plant electrical system issues.",
  "Head and direct efforts to enhance electrical plant efficiency.",
  "Assist construction projects as needed with on-location technical support.",
  "Support plants start-ups along with commissioning activities.",
  "Develop standard technical specifications and basic engineering drawings.",
  "Review every electrical drawing prepared by Owner's Engineer having single line diagrams.",
  "Develop 3-line diagrams, wiring and connection diagrams, controlling schematics, lighting, grounding, and raceway layouts."
];

const galleryImages = [
  "/facilities/EE/gallery/Analog_Electronic_circuits_Lab.jpg",
  "/facilities/EE/gallery/Basic_Electrical_Engineering_Lab.jpg",
  "/facilities/EE/gallery/Basic_Electronics_Engineering_Lab.jpg",
  "/facilities/EE/gallery/Control_And_Instrumentation_Lab.jpg",
  "/facilities/EE/gallery/Digital_Electronics_Lab.jpg",
  "/facilities/EE/gallery/Digital_Signal_Processing_Lab.jpg",
  "/facilities/EE/gallery/Electrical_Drives.jpg",
  "/facilities/EE/gallery/Electrical_Machines-I_Lab.jpg",
  "/facilities/EE/gallery/Electrical_Machines_Lab-II.jpg",
  "/facilities/EE/gallery/Electrical_Power_Transmission_and_Distribution_Lab.jpg",
  "/facilities/EE/gallery/Measurement_Lab.jpg",
  "/facilities/EE/gallery/Microprocessors_&_Microcontrollers_Lab.jpg",
  "/facilities/EE/gallery/Network_Therory_Lab.jpg",
  "/facilities/EE/gallery/Power_Electronics_Lab.jpg",
  "/facilities/EE/gallery/Power_System_&_operation_&_Control.jpg",
  "/facilities/EE/gallery/IMG_20191119_102826.jpg",
  "/facilities/EE/gallery/IMG_20191119_102901.jpg",
  "/facilities/EE/gallery/IMG_20191119_111757.jpg",
  "/facilities/EE/gallery/IMG_20191119_112830.jpg",
  "/facilities/EE/gallery/IMG_20191119_114046.jpg",
  "/facilities/EE/gallery/IMG_20191119_115747.jpg",
  "/facilities/EE/gallery/WhatsApp_Image_2020-10-04_at_11.36.58_AM_1.jpeg",
  "/facilities/EE/gallery/WhatsApp_Image_2020-10-04_at_11.36.58_AM_2.jpeg",
  "/facilities/EE/gallery/WhatsApp_Image_2020-10-04_at_11.36.58_AM_3.jpeg"
];

export const EEEngg = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageLayout title="Electrical Engineering">
      <SEO 
        title="B.Tech Electrical Engineering | Department of EE | BEC"
        description="Enroll in B.Tech Electrical Engineering at Bhubaneswar Engineering College (BEC). High-voltage labs, power electronics training, and excellent job opportunities in state electricity grids."
        keywords={["electrical engineering", "BTech Electrical", "BEC Bhubaneswar", "Electrical and Computer Engineering"]}
        schema={pageSchema}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4" id="labs">

        {/* ─── Left Column (Main Content) ─── */}
        <div className="lg:col-span-8 flex flex-col gap-10">

          {/* Title and Main Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl"
          >
            <h1 className="text-2xl md:text-3xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Department of Electrical Engineering
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

            {/* Description */}
            <div className="text-slate-600 leading-[1.8] text-sm md:text-base space-y-5 text-justify">
              <p>
                Since its inception, the Department of Electrical Engineering has registered remarkable growth in teaching and research. It has well-established laboratories and scopes for cutting-edge research work. It offers a regular 4-year B.Tech program in Electrical Engineering. Through its renowned faculty members, laboratories with state-of-the-art equipment, and modern infrastructure, the department is actively engaged with various research and development activities besides imparting regular teaching.
              </p>
              <p>
                Most of the faculty members of the department have published papers in reputed international and national journals and conferences. Several leading organisations regularly visit the department for campus placements. The department hosts a center of excellence in industrial electronics & robotics, sports, and cultural activities to boost interdisciplinary research and relationships among various engineering departments.
              </p>
              <p>
                In addition to B.Tech in Electrical Engineering, the new branch <strong>Electrical and Computer Engineering</strong> was introduced in the year 2020. This program integrates objectives for both Electrical and Computer engineering fields of study. These branches are at the forefront of practical technology, making our students fit to keep our world running—from microchips inside cell phones to large aircraft electrical systems. In this modern era, we cannot imagine life without electricity and Information Technology.
              </p>
              <p>
                Electrical / Electrical and Computer engineering is the field where we deal with the energy that runs our world. Energy exists in various forms like gas, fuel cell, turbine, hydro, solar, wind, or geothermal energy. The field deals with the study, design, and application of equipment, devices, and systems which use electricity. These are versatile core branches where electrical engineers create, design, and manage electricity to help power the world.
              </p>
            </div>
          </motion.div>

          {/* Programs Offered */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Programs Offered
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We offer comprehensive undergraduate and diploma programs designed to groom technical expertise with a solid industrial background.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="font-bold text-slate-800 text-base md:text-lg mb-2">B.Tech in Electrical Engineering</h3>
                  <p className="text-slate-500 text-xs md:text-sm">4-Year Full-time Undergraduate Degree Program</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-bold">Seats: 30</span>
                  <span className="text-xs font-semibold text-slate-400">Core Branch</span>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="font-bold text-slate-800 text-base md:text-lg mb-2">B.Tech in Electrical and Computer Engg.</h3>
                  <p className="text-slate-500 text-xs md:text-sm">4-Year Full-time Integrated Technology Program</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-bold">Seats: 30</span>
                  <span className="text-xs font-semibold text-slate-400">New (Est. 2020)</span>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="font-bold text-slate-800 text-base md:text-lg mb-2">Diploma in Electrical Engineering</h3>
                  <p className="text-slate-500 text-xs md:text-sm">3-Year Technical Diploma Program</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-bold">Seats: 30</span>
                  <span className="text-xs font-semibold text-slate-400">Technical Foundation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900 text-white rounded-3xl p-8 shadow-xl border-l-4 border-accent relative flex flex-col gap-4 overflow-hidden group"
            >
              <h4 className="text-lg font-black uppercase tracking-wider border-b border-white/10 pb-2 text-accent">Vision</h4>
              <p className="text-xs md:text-sm leading-relaxed text-slate-200">
                A Centre of Excellence vibrant with academic activities and bubbling with youthful creative energy, making significant contribution to the World of Knowledge and Technology and to the development of the State and the Nation.
              </p>
            </motion.div>

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
                  <span className="font-bold text-emerald-400 shrink-0">M1:</span>
                  <span>To impart quality education in Electrical Engineering Science and Technology at Undergraduate and Postgraduate levels with special attention to innovation and creativity.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-400 shrink-0">M2:</span>
                  <span>To impart high quality education to the students and carry out fundamental and industry-oriented research work.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-400 shrink-0">M3:</span>
                  <span>To engage in creation of knowledge and development of technologies through effective research programs.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* PEOs */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Program Educational Objectives (PEOs)
            </h2>
            <div className="text-slate-600 text-xs md:text-sm font-medium space-y-4 pt-2">
              <p><strong>PEO 1:</strong> To provide students with strong foundational concepts in electrical machines, power systems, and control electronics for industry positions.</p>
              <p><strong>PEO 2:</strong> To prepare graduates for technical roles in power plants, transmission networks, and the green energy sector (electric vehicles, solar grids).</p>
              <p><strong>PEO 3:</strong> To encourage leadership qualities, environmental stewardship, and ethical practices for energy management and grid optimization.</p>
            </div>
          </motion.div>

          {/* PSOs */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Program Specific Outcomes (PSOs)
            </h2>
            <div className="text-slate-600 text-xs md:text-sm font-medium space-y-4 pt-2">
              <p><strong>PSO 1:</strong> The ability to analyze, simulate, and design electrical systems, generator units, and load dispatch centers using advanced software tools.</p>
              <p><strong>PSO 2:</strong> To design and test power converters, motor drives, and control networks to improve industrial automation.</p>
              <p><strong>PSO 3:</strong> To integrate solar, wind, and biomass energy networks with local grids and manage electric vehicle charging interfaces.</p>
            </div>
          </motion.div>

          {/* Roles & Tasks */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Roles & Tasks of an Electrical Engineer
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Electrical engineering students at BEC are trained to perform crucial tasks across various industries:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {specificTasks.map((task, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 hover:bg-slate-100/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed">{task}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Laboratory Facilities */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
                Laboratory Facilities
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Our labs are well-equipped with modern industrial machinery, training kits, instruments, and software simulation setups.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {labsList.map((lab, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div 
                    className="w-full md:w-2/5 h-56 md:h-auto min-h-[220px] relative overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(lab.image)}
                  >
                    <img 
                      src={lab.image} 
                      alt={lab.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-black text-primary uppercase border border-slate-100 shadow-sm pointer-events-none">
                      Click to View
                    </div>
                  </div>
                  
                  <div className="w-full md:w-3/5 p-6 flex flex-col gap-4">
                    <div>
                      <span className="text-[10px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                        Lab {idx + 1}
                      </span>
                      <h3 className="font-bold text-slate-800 text-lg md:text-xl mt-2 mb-1 group-hover:text-primary transition-colors">
                        {lab.name}
                      </h3>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-semibold mb-2">
                        <span className="text-slate-500 font-normal block text-[11px] uppercase tracking-wider mb-0.5">Objective:</span>
                        {lab.objective}
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify">
                        <span className="text-slate-500 font-normal block text-[11px] uppercase tracking-wider mb-0.5">Description:</span>
                        {lab.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Departmental Events */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
                Departmental Events & Tech-Fests
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Providing students with exposure to cutting-edge technologies and industry practices through national seminars, workshops, and fests.
              </p>
            </div>

            <div className="relative border-l-2 border-slate-100 ml-4 flex flex-col gap-8 pt-4">
              {eventsList.map((event, idx) => (
                <div key={idx} className="relative pl-8 group">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary group-hover:border-accent transition-colors" />
                  <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-sm transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] bg-primary/10 text-primary px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                        {event.type}
                      </span>
                      <span className="text-slate-400 text-xs flex items-center gap-1 font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-base md:text-lg mb-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <div className="border-t border-slate-200/50 pt-3">
                      <h4 className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Highlights & Leadership:</h4>
                      <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc">
                        {event.highlights.map((h, i) => (
                          <li key={i} className="leading-relaxed">{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col gap-6"
          >
            <h2 className="text-xl md:text-2xl font-black text-primary uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-20 after:bg-accent after:rounded-full tracking-tight">
              Photo Gallery
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Snapshots of student activities, workshop presentations, laboratory training sessions, and campus events.
            </p>
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

      {/* ─── Full Width Department Details Hub ─── */}
      <div className="mt-12">
        <DepartmentDetailsHub department="ee" />
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
