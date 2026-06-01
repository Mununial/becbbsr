import { PageLayout } from '../components/PageLayout';
import { Plane, Users, Target, Rocket, GraduationCap, Mail, CheckCircle, MapPin, Phone, ChevronDown, ChevronUp, Star, Award, BookOpen, Briefcase, Building, Zap, Shield, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// ─── Faculty Data ─────────────────────────────────────────────────────────────
const faculty = [
  { name: "Dr. Sangram Samal", role: "Professor & Head", qualification: "PhD", email: "aero@becbbsr.ac.in", experience: "15+ Years" },
  { name: "Er. A. Panigrahy", role: "Asst. Professor", qualification: "M.Tech", email: "aero@becbbsr.ac.in", experience: "10+ Years" },
  { name: "Er. B K Mandal", role: "Asst. Professor", qualification: "M.Tech", email: "aero@becbbsr.ac.in", experience: "8+ Years" },
  { name: "Er. Jhimi Patra", role: "Asst. Professor", qualification: "M.Tech", email: "aero@becbbsr.ac.in", experience: "7+ Years" },
  { name: "Er. S Jena", role: "Asst. Professor", qualification: "M.Tech", email: "ame@becbbsr.ac.in", experience: "9+ Years" },
  { name: "Er. A Dehury", role: "Asst. Professor", qualification: "M.Tech", email: "aero@becbbsr.ac.in", experience: "6+ Years" },
  { name: "Er. S P Das", role: "Asst. Professor", qualification: "M.Tech", email: "aero@becbbsr.ac.in", experience: "8+ Years" },
  { name: "Er. N Tripathy", role: "Asst. Professor", qualification: "M.Tech", email: "ame@becbbsr.ac.in", experience: "7+ Years" }
];

// ─── Salary Data ──────────────────────────────────────────────────────────────
const salaryData = [
  { level: "Fresher (0–2 yrs)", india: "₹4 – ₹8 LPA", abroad: "$55,000 – $70,000" },
  { level: "Mid-Level (3–7 yrs)", india: "₹10 – ₹20 LPA", abroad: "$75,000 – $110,000" },
  { level: "Senior (8–15 yrs)", india: "₹20 – ₹35 LPA", abroad: "$110,000 – $160,000" },
  { level: "Specialist (15+ yrs)", india: "₹35 – ₹50+ LPA", abroad: "$150,000+" },
];

// ─── FAQs Data ────────────────────────────────────────────────────────────────
const faqs = [
  { q: "What is Aeronautical Engineering?", a: "Aeronautical Engineering is the branch of engineering focused on designing, developing, testing, and maintaining aircraft and aerospace systems. It covers aerodynamics, propulsion, avionics, structural engineering, and flight mechanics. In India, it is offered as a 4-year B.Tech program approved by AICTE and affiliated with state universities like BPUT in Odisha." },
  { q: "Which is the best aeronautical engineering college in Bhubaneswar?", a: "Bhubaneswar Engineering College (BEC) at Patrapada, Bhubaneswar is the only AICTE-approved college in Bhubaneswar offering B.Tech Aeronautical Engineering affiliated with BPUT. BEC provides modern aeronautical labs, experienced faculty led by PhD holders, and strong placement support in airlines, defence, and aerospace companies." },
  { q: "What is the eligibility for B.Tech Aeronautical Engineering?", a: "You must have passed 10+2 with Physics, Chemistry, and Mathematics (PCM) with minimum 45%–50% aggregate marks. Admission is through JEE Main or Odisha OJEE scores for BPUT-affiliated colleges. Direct admission under management quota is also available based on 10+2 marks." },
  { q: "How many years is B.Tech Aeronautical Engineering?", a: "B.Tech Aeronautical Engineering is a 4-year undergraduate engineering program divided into 8 semesters, covering theory, practicals, laboratories, industrial visits, internships, and a final-year project." },
  { q: "What is the difference between Aeronautical Engineering and AME?", a: "B.Tech Aeronautical Engineering is a 4-year academic degree (AICTE/BPUT) focused on aircraft design, research, and development. AME (Aircraft Maintenance Engineering) is a DGCA-regulated license-based vocational program focused on aircraft maintenance and airworthiness certification. B.Tech graduates work as engineers, scientists, and designers, while AME graduates become licensed maintenance engineers." },
  { q: "Can girls do aeronautical engineering?", a: "Absolutely yes. Aeronautical Engineering has no gender restrictions and women excel in the field. BEC Bhubaneswar provides a safe campus with dedicated girls' hostel, 24/7 CCTV security, lady wardens, and a supportive academic environment. Many top aerospace scientists at ISRO and HAL are women." },
  { q: "What is the salary of aeronautical engineers in India?", a: "Freshers earn ₹4–8 lakhs per annum. Mid-level engineers with 5–7 years experience earn ₹10–20 lakhs annually. Senior specialists at ISRO, Boeing India, HAL, or Airbus India can earn ₹35–50 lakhs or more per year. Salaries grow significantly with specialization in avionics, propulsion, or UAV technology." },
  { q: "Can I do aeronautical engineering after 10th?", a: "Not directly. You must complete 10+2 with Physics, Chemistry, and Mathematics first. After 10th, you can pursue a 3-year Diploma in Engineering, then take lateral entry (2nd year B.Tech) into Aeronautical Engineering. This pathway is valid at BEC Bhubaneswar under BPUT lateral entry rules." },
  { q: "Is BEC Bhubaneswar AICTE approved for aeronautical engineering?", a: "Yes. Bhubaneswar Engineering College (BEC) is fully approved by AICTE (All India Council for Technical Education) and affiliated with BPUT (Biju Patnaik University of Technology), Odisha, for its B.Tech Aeronautical Engineering program." },
  { q: "What career opportunities are available after aeronautical engineering?", a: "Graduates work as: Aircraft Design Engineers, Aerodynamics Engineers, Avionics Specialists, Propulsion Engineers, Flight Test Engineers, UAV/Drone Engineers, Defence Scientists (DRDO/IAF), Space Engineers (ISRO), Aviation Safety Officers, Airport Operations Managers, and Research Scientists. Higher studies include M.Tech, MBA, and MS abroad." },
  { q: "Can aeronautical engineers work at ISRO?", a: "Yes. ISRO recruits Scientist/Engineer SC positions and aeronautical engineering graduates qualify for roles in spacecraft design, propulsion, structural analysis, avionics, and mission planning. Strong academic records and GATE scores improve selection chances significantly." },
  { q: "Can aeronautical engineers get jobs at HAL?", a: "Yes. HAL (Hindustan Aeronautics Limited) is one of the top employers for aeronautical engineers, recruiting through campus placements and HAL Recruitment exams. Roles include aircraft design, production, quality control, testing, and project management. BEC placement cell actively facilitates HAL campus recruitment." },
  { q: "What is the scope of aeronautical engineering in India 2026?", a: "India's aviation sector is growing at 7–10% annually, targeting third-largest aviation market status. UDAN scheme is adding 1,000+ new routes and 70+ airports. ISRO, HAL, and DRDO are expanding. The drone industry targets ₹15,000 crore by 2030. Aeronautical engineers are in strong demand across civil aviation, defence, space, and emerging drone sectors." },
  { q: "What subjects are taught in B.Tech Aeronautical Engineering?", a: "Core subjects include Engineering Mathematics, Aerodynamics, Aircraft Structures, Propulsion Systems, Avionics, Flight Mechanics, Aircraft Design, Computational Fluid Dynamics (CFD), Aircraft Maintenance Engineering, Composite Materials, Aerospace Materials, and Aircraft Systems. Elective subjects cover drone technology, satellite systems, and advanced propulsion." },
  { q: "Does BEC Bhubaneswar have aeronautical engineering labs?", a: "Yes. BEC's Aeronautical Engineering Department has dedicated laboratories: Aircraft Systems Lab with real aircraft components, Aerodynamics Lab, Propulsion and Jet Engines Lab, Avionics and Navigation Lab, and Aircraft Maintenance Workshop. Students get hands-on training with industry-standard equipment and simulation software." },
  { q: "What is the OJEE score required for aeronautical engineering at BEC?", a: "OJEE (Odisha Joint Entrance Examination) scores are required for BPUT-affiliated colleges including BEC. Specific cutoff ranks vary by year and category (General/OBC/SC/ST). Visit the official OJEE portal or BEC admissions office for current cutoff data. Management quota admissions are available without OJEE." },
  { q: "What are the documents required for aeronautical engineering admission?", a: "Required documents: 10th marksheet and pass certificate, 12th marksheet and pass certificate, JEE Main/OJEE scorecard, 4 passport-size photographs, ID proof (Aadhar Card/PAN Card), category certificate (SC/ST/OBC if applicable), migration certificate, transfer certificate, and medical fitness certificate from a registered doctor." },
  { q: "Are scholarships available for aeronautical engineering at BEC?", a: "Yes. BEC students can avail: (1) Odisha Government Post Matric Scholarship for SC/ST/OBC students, (2) BEC Merit Scholarship for top academic performers, (3) Central Government Scholarship schemes, (4) EWS (Economically Weaker Section) fee concession, (5) Education loans from SBI, UCO Bank, and other nationalized banks at subsidized rates." },
  { q: "What is the UDAN scheme and how does it benefit aeronautical engineers?", a: "UDAN (Ude Desh ka Aam Nagrik) is India's Regional Connectivity Scheme expanding aviation to tier-2 and tier-3 cities. Over 1,000 new routes and 70+ airports have been approved, creating massive demand for aeronautical engineers in airport design, aircraft procurement, fleet management, and aviation operations across India." },
  { q: "Which airlines hire aeronautical engineers in India?", a: "Top airlines hiring aeronautical engineers: IndiGo, Air India, SpiceJet, Vistara (now Air India), GoFirst, Akasa Air, Alliance Air, and Star Air. Roles include Technical Operations Engineer, Aircraft Engineering Officer, Fleet Planning Engineer, Quality Control Engineer, and Aviation Safety Manager." },
  { q: "Can aeronautical engineers work in the drone industry?", a: "Yes. India's drone market is projected at ₹15,000 crore by 2030. Aeronautical engineers design drone airframes, propulsion systems, flight control systems, and navigation modules. Top drone employers include ideaForge, Garuda Aerospace, IG Drones, Skylark Drones, and government drone development programs under DRDO." },
  { q: "Is aeronautical engineering difficult?", a: "Aeronautical engineering is academically rigorous, involving advanced mathematics, physics, and complex engineering systems. However, BEC Bhubaneswar's experienced faculty, modern labs, structured practical curriculum, and dedicated mentorship ensure that students overcome challenges and graduate with strong theoretical and practical competence." },
  { q: "Can aeronautical engineers pursue higher studies abroad?", a: "Yes. B.Tech graduates can pursue MS in Aerospace Engineering at top universities in USA (MIT, Purdue, Georgia Tech), Germany (TU Munich), UK (Imperial College), and Australia. GRE, TOEFL/IELTS scores and strong academic records are key requirements. Boeing, Airbus, and GE Aviation have global research centers recruiting MS and PhD holders." },
  { q: "What is the difference between aeronautical and aerospace engineering?", a: "Aeronautical Engineering focuses on aircraft operating within Earth's atmosphere — commercial planes, military jets, and helicopters. Aerospace Engineering is broader, covering both atmospheric aircraft and spacecraft including satellites, rockets, and space vehicles. Both lead to similar career paths in aviation, defence, and space organizations." },
  { q: "How to apply for B.Tech Aeronautical Engineering at BEC Bhubaneswar?", a: "Step 1: Visit becbbsr.ac.in. Step 2: Fill the online application form with academic details. Step 3: Upload required documents. Step 4: Attend in-person counselling or participate in OJEE counselling. Step 5: Pay admission fee to confirm your seat. Step 6: Complete document verification at the BEC admissions office." },
  { q: "What is propulsion engineering in aeronautical courses?", a: "Propulsion engineering is the study of engines and systems that power aircraft and spacecraft. It covers jet engines (turbofan, turbojet), rocket propulsion, piston engines, gas turbines, and emerging electric and hydrogen propulsion. At BEC, students train in the Propulsion and Jet Engines Lab with real engine components and simulation tools." },
  { q: "What is avionics engineering?", a: "Avionics refers to the electronic systems used in aircraft, spacecraft, and satellites — including navigation systems, communication systems, flight management computers, radar, and autopilot systems. Avionics engineers design, install, and maintain these critical systems. BEC's Avionics Lab provides training in real avionics equipment and digital navigation systems." },
  { q: "What is Computational Fluid Dynamics (CFD) in aeronautical engineering?", a: "Computational Fluid Dynamics (CFD) is the use of computer simulations to analyze fluid flow, heat transfer, and aerodynamic forces around aircraft. CFD is essential for aircraft design optimization, reducing aerodynamic drag, and testing performance virtually before physical prototype testing. Students at BEC learn CFD tools including ANSYS Fluent and OpenFOAM." },
  { q: "What is the role of DRDO for aeronautical engineers?", a: "DRDO (Defence Research and Development Organisation) develops military aircraft, missiles, UAVs, defence electronics, and aerospace systems. It recruits aeronautical engineers as Scientists (Class A Gazetted Officers) through CEPTAM and SET exams. DRDO roles include research, design, testing, and technology development with excellent job security and growth." },
  { q: "Is BEC Bhubaneswar the only aeronautical engineering college in Bhubaneswar?", a: "Yes. BEC Bhubaneswar is the only college in Bhubaneswar city offering a full-time AICTE-approved B.Tech Aeronautical Engineering program affiliated with BPUT. This makes BEC the definitive choice for aviation engineering aspirants from Odisha and neighbouring states." },
  { q: "What is lateral entry in aeronautical engineering?", a: "Lateral entry allows diploma holders to directly join the 2nd year (3rd semester) of B.Tech Aeronautical Engineering, skipping the 1st year. This is regulated by OJEE Lateral Entry counselling. Candidates with a 3-year Diploma in Aeronautical Engineering or related streams are eligible." },
  { q: "Does BEC have a hostel for aeronautical engineering students?", a: "Yes. BEC Bhubaneswar has separate hostel facilities for boys and girls within the campus. Hostel amenities include Wi-Fi connectivity, 24/7 CCTV security, resident wardens, nutritious mess facilities, common rooms, and sports areas. The campus is located at Patrapada with good connectivity to Bhubaneswar city." },
  { q: "What are the government jobs for aeronautical engineers?", a: "Government sector employers: ISRO (space), DRDO (defence R&D), HAL (aircraft manufacturing), Indian Air Force (IAF), Indian Navy (aviation wing), Airports Authority of India (AAI), DGCA (regulatory body), BEL (defence electronics), BHEL (turbine manufacturing), and BARC (nuclear + aerospace research)." },
  { q: "What is the Indian aviation market size?", a: "India is currently the world's third-largest domestic aviation market with over 150 million passengers annually. The aviation market is projected to become the world's largest by 2030. With UDAN expansion, private carrier growth, and ISRO's commercial ventures, India's aviation sector represents enormous opportunity for aeronautical engineers." },
  { q: "Can I do MBA after B.Tech Aeronautical Engineering?", a: "Yes. Many aeronautical engineers pursue MBA in Aviation Management, Operations Management, or Technology Management after B.Tech. An MBA helps engineers move into leadership, business development, and management roles in airline companies, airports, and aerospace firms. BEC Bhubaneswar also offers an MBA program." },
  { q: "What is the GATE exam for aeronautical engineers?", a: "GATE (Graduate Aptitude Test in Engineering) Paper AE is specifically for Aeronautical/Aerospace Engineering. GATE AE scores are required for M.Tech admissions, ISRO, DRDO, HAL, AAI, and PSU recruitment. Strong GATE scores open doors to the best postgraduate programs and top government jobs in India." },
  { q: "What is composite material in aeronautical engineering?", a: "Composite materials are advanced structural materials combining two or more constituents — such as carbon fiber reinforced polymer (CFRP) or glass fiber composites — offering high strength-to-weight ratios essential in modern aircraft. Aeronautical engineers study composite material properties, manufacturing, and testing as part of the aircraft structures curriculum at BEC." },
  { q: "Are aeronautical engineers needed in the Indian Navy?", a: "Yes. The Indian Navy's aviation wing operates maritime patrol aircraft, helicopters, carrier-based jets (MiG-29K), and drones. The Navy recruits aeronautical engineers as Short Service Commission (SSC) officers and permanent commission officers for engineering, technical, and fleet maintenance roles." },
  { q: "What is aircraft design engineering?", a: "Aircraft design engineering involves conceptualizing, designing, analyzing, and testing aircraft structures and systems from scratch. It requires expertise in aerodynamics, structures, propulsion, and materials science. Aircraft design engineers work at HAL, DRDO, Boeing, Airbus, and aerospace startups, turning engineering concepts into flying machines." },
  { q: "What is the Make in India initiative impact on aeronautical engineering?", a: "Make in India's aerospace and defence sector attracts billions of dollars of FDI, with Boeing, Airbus, and Safran establishing manufacturing and R&D centers in India. This initiative creates thousands of high-quality jobs for aeronautical engineers in design, manufacturing, quality, and supply chain roles — especially benefiting graduates from Indian colleges like BEC." },
  { q: "What is flight mechanics in aeronautical engineering?", a: "Flight mechanics is the study of how aircraft move through the air, covering stability, control, maneuverability, and performance. It analyzes forces acting on aircraft (lift, drag, thrust, weight), flight envelopes, takeoff and landing dynamics, and control system design. Flight mechanics is a core subject in B.Tech Aeronautical Engineering curriculum." },
  { q: "Can an aeronautical engineer become a pilot?", a: "An aeronautical engineer can pursue a Commercial Pilot License (CPL) from DGCA-approved flight training schools after their B.Tech degree. Having an engineering background gives pilots a technical edge. However, piloting requires separate DGCA-approved flying school training, medical fitness clearance, and CPL examination." },
  { q: "What is aeronautical engineering scope in Odisha?", a: "Odisha's growing industrial base, proximity to Bhubaneswar's expanding airport, and the UDAN scheme's regional connectivity expansion create local aviation sector demand. Aeronautical engineering graduates from Odisha find opportunities at HAL, ISRO, AAI, local airport operations, and aviation support companies. BEC is uniquely positioned as Bhubaneswar's only B.Tech Aeronautical Engineering provider." },
  { q: "How is BEC different from other engineering colleges in Bhubaneswar?", a: "BEC Bhubaneswar stands apart as: (1) The only college in Bhubaneswar with B.Tech Aeronautical Engineering, (2) AICTE-approved and BPUT-affiliated, (3) 90%+ overall placement record with IndiGo, HAL, and IT sector placements, (4) Modern aerospace labs and smart classrooms, (5) Affordable fee structure with scholarships, (6) Safe Wi-Fi campus with hostel facilities." },
  { q: "What are the top aerospace companies in India?", a: "Major aerospace employers in India: HAL (Hindustan Aeronautics Limited), ISRO, DRDO, BEL (Bharat Electronics Limited), Tata Advanced Systems, L&T Defence, Mahindra Aerospace, Boeing India, Airbus India, GE Aviation India, Honeywell Aerospace, Safran India, Rolls-Royce India, and emerging startups like Skyroot Aerospace and Agnikul Cosmos." },
  { q: "What is the BEC Bhubaneswar admission fee for aeronautical engineering?", a: "For the latest 2026 fee structure for B.Tech Aeronautical Engineering, visit becbbsr.ac.in or contact the BEC admissions office directly. BEC offers one of the most affordable fee structures among private engineering colleges in Odisha, with multiple scholarship and EMI payment options available." },
  { q: "What technical skills does an aeronautical engineer need?", a: "Essential technical skills: CFD software (ANSYS Fluent, OpenFOAM), CAD tools (CATIA, SolidWorks, AutoCAD), MATLAB for simulation, structural analysis software (NASTRAN), programming (Python, C++), knowledge of aerospace materials, avionics systems, propulsion fundamentals, aircraft maintenance procedures, and quality management systems." },
  { q: "What is wind tunnel testing in aeronautical engineering?", a: "Wind tunnel testing is a key experimental method where scale models of aircraft are placed in controlled airflows to measure aerodynamic forces, pressure distributions, and flow visualization. Data from wind tunnel tests validate CFD simulations and inform aircraft design decisions. BEC's Aerodynamics Lab incorporates wind tunnel demonstration equipment for hands-on learning." },
  { q: "Can aeronautical engineers work in space agencies outside India?", a: "Yes. Aeronautical engineering graduates with strong academics and relevant postgraduate degrees can work at NASA (USA), ESA (Europe), JAXA (Japan), SpaceX, Blue Origin, and other global space organizations. International careers typically require MS or PhD degrees and may require security clearance depending on the role." },
];

// ─── FAQ Accordion Component ──────────────────────────────────────────────────
const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'shadow-lg border-primary/20' : 'hover:border-gray-200'}`}>
      <button
        id={`faq-q-${index}`}
        aria-expanded={open}
        aria-controls={`faq-a-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-800 text-sm md:text-base leading-snug pr-2">{q}</span>
        {open
          ? <ChevronUp className="w-5 h-5 text-primary shrink-0" />
          : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div id={`faq-a-${index}`} role="region" className="px-5 md:px-6 pb-5 md:pb-6 bg-white border-t border-gray-50">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-3">{a}</p>
        </div>
      )}
    </div>
  );
};

// ─── Schema JSON-LD ───────────────────────────────────────────────────────────
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://becbbsr.ac.in/aeronautical-engineering",
      "url": "https://becbbsr.ac.in/aeronautical-engineering",
      "name": "B.Tech Aeronautical Engineering in Odisha | BEC Bhubaneswar",
      "description": "Study B.Tech Aeronautical Engineering at BEC Bhubaneswar — Odisha's top AICTE-approved aviation college. Modern labs, expert faculty & top placements. Apply 2026.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://becbbsr.ac.in/" },
          { "@type": "ListItem", "position": 2, "name": "Departments", "item": "https://becbbsr.ac.in/departments" },
          { "@type": "ListItem", "position": 3, "name": "Aeronautical Engineering", "item": "https://becbbsr.ac.in/aeronautical-engineering" }
        ]
      },
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://becbbsr.ac.in" }
    },
    {
      "@type": "Course",
      "name": "B.Tech Aeronautical Engineering",
      "description": "4-year AICTE-approved B.Tech Aeronautical Engineering program at BEC Bhubaneswar affiliated with BPUT. Covers aerodynamics, propulsion, avionics, aircraft structures, and aircraft maintenance. Odisha's only aeronautical engineering program in Bhubaneswar with modern labs and strong aviation sector placements.",
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Bhubaneswar Engineering College",
        "sameAs": "https://becbbsr.ac.in"
      },
      "url": "https://becbbsr.ac.in/aeronautical-engineering",
      "educationalLevel": "Bachelor's Degree",
      "timeRequired": "P4Y",
      "courseCode": "AERO-BTech",
      "teaches": ["Aerodynamics", "Aircraft Structures", "Propulsion Systems", "Avionics", "Flight Mechanics", "Aircraft Design", "CFD", "Aircraft Maintenance Engineering"],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "onsite",
        "inLanguage": "en",
        "startDate": "2026-07-01",
        "location": {
          "@type": "Place",
          "name": "BEC Campus, Patrapada, Bhubaneswar, Odisha 751019"
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.slice(0, 20).map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  ]
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const AeronauticalEngg = () => {
  const [faqSearch, setFaqSearch] = useState('');
  
  // Modal states for Apply Pop-up
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [modalName, setModalName] = useState('');
  const [modalEmail, setModalEmail] = useState('');
  const [modalPhone, setModalPhone] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalStatus, setModalStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalStatus('loading');
    try {
      await axios.post('/api/contact', {
        name: modalName,
        email: modalEmail,
        phone: modalPhone,
        course: 'B.Tech',
        branch: 'Aeronautical Engineering',
        message: modalMessage || 'Interested in B.Tech Aeronautical Engineering Admission 2026'
      });
      setModalStatus('success');
      setModalName('');
      setModalEmail('');
      setModalPhone('');
      setModalMessage('');
    } catch (err) {
      console.error(err);
      setModalStatus('error');
    }
  };

  const filteredFaqs = faqSearch.trim()
    ? faqs.filter(f => f.q.toLowerCase().includes(faqSearch.toLowerCase()) || f.a.toLowerCase().includes(faqSearch.toLowerCase()))
    : faqs;

  return (
    <PageLayout title="Aeronautical Engineering">
      <SEO
        title="B.Tech Aeronautical Engineering in Odisha | BEC"
        description="Study B.Tech Aeronautical Engineering at BEC Bhubaneswar — Odisha's top AICTE-approved aviation college. Modern labs, expert faculty & top placements. Apply 2026."
        keywords={[
          "aeronautical engineering college in Bhubaneswar",
          "B.Tech aeronautical engineering Odisha",
          "best aeronautical engineering college Odisha",
          "aviation engineering college Bhubaneswar",
          "aircraft maintenance engineering Bhubaneswar",
          "BEC aeronautical engineering admission 2026",
          "BPUT aeronautical engineering",
          "AICTE approved aeronautical college Odisha",
          "aeronautical engineering scope India",
          "BTech aeronautical engineering Bhubaneswar",
          "AME course Bhubaneswar",
          "aerospace engineering college Odisha",
          "aviation courses Odisha",
          "OJEE aeronautical engineering",
          "aeronautical engineering career opportunities India"
        ]}
        canonical="https://becbbsr.ac.in/aeronautical-engineering"
        ogTitle="B.Tech Aeronautical Engineering at BEC Bhubaneswar | Best in Odisha"
        ogDescription="Bhubaneswar Engineering College (BEC) — Odisha's only dedicated B.Tech Aeronautical Engineering college in Bhubaneswar. Modern labs, PhD faculty, 90%+ placements. Apply 2026."
        schema={pageSchema}
      />

      <div className="flex flex-col gap-16 mt-4">

        {/* ── SECTION 1: Hero / H1 ─────────────────────────────────────── */}
        <section
          aria-labelledby="aero-main-heading"
          className="bg-gradient-to-br from-primary via-primary/95 to-blue-900 rounded-3xl shadow-[0_30px_80px_-15px_rgba(11,29,58,0.4)] p-8 md:p-16 text-white relative overflow-hidden"
        >
          <Plane className="absolute top-6 right-8 w-64 h-64 text-white/5 -rotate-12 pointer-events-none" />
          <Rocket className="absolute bottom-4 right-48 w-32 h-32 text-white/5 rotate-45 pointer-events-none" />

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50 font-semibold uppercase tracking-wider">
              <li><Link to="/" className="hover:text-white/80 transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-white/70">Aeronautical Engineering</li>
            </ol>
          </nav>

          {/* Admission Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
            <Star className="w-3.5 h-3.5" />
            Admission 2026 Open — Apply Now
          </div>

          <h1 id="aero-main-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 text-white">
            B.Tech Aeronautical Engineering<br />
            <span className="text-accent">in Bhubaneswar — BEC Odisha</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-4 max-w-3xl">
            Bhubaneswar Engineering College (BEC) is the <strong className="text-white">only AICTE-approved, BPUT-affiliated college in Bhubaneswar</strong> offering a full-time B.Tech Aeronautical Engineering program. Train with PhD-qualified faculty, work in modern aerospace labs, and launch your career with India's top airlines, defence organizations, and aerospace companies.
          </p>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-3xl">
            India is becoming the world's third-largest aviation market. The UDAN scheme is expanding airports, ISRO is breaking frontiers in space, HAL is delivering fighter jets, and the drone industry is growing at record speed. Your aeronautical engineering career starts here — at BEC Bhubaneswar.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Years Program", value: "4" },
              { label: "Placement Rate", value: "90%+" },
              { label: "Faculty Members", value: "8+" },
              { label: "Labs & Workshops", value: "5+" },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-4 text-center border border-white/10">
                <div className="text-2xl md:text-3xl font-black text-accent">{s.value}</div>
                <div className="text-white/60 text-xs uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              id="hero-apply-now-btn"
              onClick={() => setIsApplyModalOpen(true)}
              className="inline-flex items-center gap-2 bg-accent text-primary font-black px-8 py-4 rounded-2xl hover:bg-accent/90 transition-all hover:shadow-xl hover:-translate-y-0.5 text-sm uppercase tracking-wider focus:outline-none"
            >
              <Rocket className="w-4 h-4" />
              Apply Now — 2026
            </a>
            <a
              id="hero-whatsapp-btn"
              href="https://wa.me/919437088215?text=I'm interested in B.Tech Aeronautical Engineering admission 2026 at BEC Bhubaneswar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-black px-8 py-4 rounded-2xl hover:bg-green-400 transition-all hover:shadow-xl hover:-translate-y-0.5 text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Inquiry
            </a>
            <a
              id="hero-call-btn"
              href="tel:+919437088215"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-black px-6 py-4 rounded-2xl hover:bg-white/20 transition-all text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              Call Admissions
            </a>
          </div>
        </section>

        {/* ── SECTION 2: What is Aeronautical Engineering ─────────────── */}
        <section aria-labelledby="what-is-aero" className="bg-white rounded-3xl p-8 md:p-14 border border-gray-100 shadow-sm">
          <h2 id="what-is-aero" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
            What is Aeronautical Engineering?
          </h2>
          <div className="w-16 h-1 bg-accent mb-8 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5 text-gray-600 leading-relaxed text-base">
              <p>
                <strong className="text-gray-800">Aeronautical Engineering</strong> is the specialized branch of engineering that deals with the design, development, analysis, testing, and maintenance of aircraft and aerospace systems. It is one of the most prestigious, challenging, and rewarding engineering disciplines in the world.
              </p>
              <p>
                As a broad and multidisciplinary field, aeronautical engineering integrates <strong className="text-gray-800">aerodynamics, propulsion, aircraft structures, avionics, flight mechanics, and aerospace materials</strong>. Engineers in this field apply principles of physics, mathematics, and advanced technology to create aircraft that are safe, efficient, and capable.
              </p>
              <p>
                In India, B.Tech Aeronautical Engineering is a <strong className="text-gray-800">4-year undergraduate program</strong> approved by AICTE and affiliated with state technical universities. At BEC Bhubaneswar, the program is affiliated with <strong className="text-gray-800">BPUT (Biju Patnaik University of Technology)</strong>, ensuring a nationally recognized degree that opens doors across India and internationally.
              </p>
              <p>
                The scope of aeronautical engineering extends far beyond commercial aircraft. It covers <strong className="text-gray-800">military jets, helicopters, drones (UAVs), satellites, rockets, space vehicles, missile systems, and advanced defence technologies</strong>. India's investments in ISRO, HAL, and DRDO make this one of the most strategically important engineering fields in the country.
              </p>
            </div>

            <div className="space-y-5">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-black text-primary mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Aeronautical vs Aerospace Engineering
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-gray-500 font-bold text-xs uppercase">Factor</th>
                        <th className="text-left py-2 text-primary font-bold text-xs uppercase">Aeronautical</th>
                        <th className="text-left py-2 text-blue-700 font-bold text-xs uppercase">Aerospace</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      {[
                        ["Focus", "Within atmosphere", "Atmosphere + Space"],
                        ["Vehicles", "Planes, Helicopters", "Aircraft + Spacecraft"],
                        ["Scope", "Aviation industry", "Aviation + Space"],
                        ["Career", "Airlines, HAL, IAF", "ISRO, NASA, SpaceX"],
                      ].map(([factor, aero, space], i) => (
                        <tr key={i} className="border-b border-gray-50">
                          <td className="py-2.5 font-semibold text-xs text-gray-500">{factor}</td>
                          <td className="py-2.5 text-xs">{aero}</td>
                          <td className="py-2.5 text-xs">{space}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="text-lg font-black text-primary mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Aeronautical Engineering vs AME
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  {[
                    ["Duration", "4 years (B.Tech)", "3–4 years (License)"],
                    ["Type", "Academic Degree (BPUT)", "DGCA License"],
                    ["Focus", "Design & Research", "Maintenance & Repair"],
                    ["Career Scope", "Engineer, Scientist, Designer, R&D", "Licensed Maintenance Engineer"],
                    ["Fresher Salary", "₹4–8 LPA", "₹3–6 LPA"],
                    ["Higher Studies", "M.Tech, MBA, MS Abroad", "Limited"],
                  ].map(([label, btech, ame], i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 py-2 border-b border-primary/5 text-xs">
                      <span className="font-bold text-gray-500">{label}</span>
                      <span className="text-primary font-semibold">{btech}</span>
                      <span className="text-gray-500">{ame}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Why Aviation / Industry Growth ────────────────── */}
        <section aria-labelledby="aviation-growth" className="bg-gradient-to-br from-blue-950 to-primary rounded-3xl p-8 md:p-14 text-white relative overflow-hidden">
          <Rocket className="absolute top-8 right-12 w-56 h-56 text-white/5 pointer-events-none" />
          <h2 id="aviation-growth" className="text-2xl md:text-3xl font-black mb-2 tracking-tight">
            Why Aeronautical Engineering is the Future Career in India
          </h2>
          <div className="w-16 h-1 bg-accent mb-8 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <div className="space-y-5 text-white/80 leading-relaxed">
              <p>
                India's aviation industry is in the middle of a historic transformation. The country is rapidly emerging as one of the world's largest aviation markets, with over <strong className="text-white">150 million domestic passengers</strong> annually and projections to become <strong className="text-white">the world's largest aviation market by 2030</strong>. For aeronautical engineering students, this means one thing: <em>enormous opportunity</em>.
              </p>
              <p>
                The Government of India's <strong className="text-white">UDAN (Ude Desh ka Aam Nagrik)</strong> Regional Connectivity Scheme has approved over 1,000 new flight routes and 70+ new airports across tier-2 and tier-3 cities. Every new airport, every new airline route, and every new aircraft entering service creates demand for <strong className="text-white">aeronautical engineers, maintenance professionals, and aviation operations specialists</strong>.
              </p>
              <p>
                Beyond civil aviation, <strong className="text-white">ISRO</strong> is executing ambitious space missions — Chandrayaan, Gaganyaan, Aditya-L1 — and expanding satellite technology. <strong className="text-white">HAL</strong> is producing advanced fighter jets (Tejas Mk2), helicopters (Prachand), and transport aircraft. <strong className="text-white">DRDO</strong> is developing hypersonic missiles and next-generation defence systems. All of this requires thousands of skilled aeronautical engineers.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Aviation Industry Growth Indicators
              </h3>
              {[
                { icon: "✈️", stat: "150M+", desc: "Annual domestic passengers in India" },
                { icon: "🏗️", stat: "70+", desc: "New airports under UDAN scheme" },
                { icon: "🚀", stat: "1,000+", desc: "New flight routes approved under UDAN" },
                { icon: "🛸", stat: "₹15,000 Cr", desc: "Projected drone market by 2030" },
                { icon: "🛡️", stat: "10%+", desc: "Annual growth in aerospace & defence" },
                { icon: "🌏", stat: "#3 → #1", desc: "India's aviation market ranking trajectory" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 border border-white/10">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-accent font-black text-lg">{item.stat}</div>
                    <div className="text-white/60 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent" />
              Scope of Aeronautical Engineering in India — Career Opportunities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Government Sector", orgs: ["ISRO", "HAL", "DRDO", "Indian Air Force", "Airports Authority of India", "DGCA"] },
                { title: "Airline & Aviation", orgs: ["IndiGo Airlines", "Air India", "SpiceJet", "Akasa Air", "Vistara (Air India)", "Alliance Air"] },
                { title: "Defence & Space", orgs: ["IAF (Indian Air Force)", "Indian Navy Aviation", "BEL", "BHEL Turbines", "BARC", "MIDHANI"] },
                { title: "Global Aerospace", orgs: ["Boeing India", "Airbus India", "GE Aviation", "Honeywell Aerospace", "Safran India", "Rolls-Royce India"] },
                { title: "Drone Industry", orgs: ["ideaForge", "Garuda Aerospace", "IG Drones", "Skylark Drones", "Throttle Aerospace", "NewSpace Research"] },
                { title: "Research & Academia", orgs: ["IITs (Research)", "IISc Bangalore", "National Aerospace Labs (NAL)", "IIST Thiruvananthapuram", "CSIR-NAL", "Private R&D Labs"] },
              ].map((sector, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <h4 className="font-black text-white text-sm uppercase tracking-wide mb-3">{sector.title}</h4>
                  <ul className="space-y-1.5">
                    {sector.orgs.map((org, j) => (
                      <li key={j} className="text-white/60 text-xs flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-accent shrink-0" />
                        {org}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Why Choose BEC ────────────────────────────────── */}
        <section aria-labelledby="why-bec" className="bg-white rounded-3xl p-8 md:p-14 border border-gray-100 shadow-sm">
          <h2 id="why-bec" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
            Why Choose BEC Bhubaneswar for Aeronautical Engineering?
          </h2>
          <div className="w-16 h-1 bg-accent mb-4 rounded-full" />
          <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-3xl">
            When students from Odisha and across India search for the best aeronautical engineering college in Bhubaneswar, BEC stands in a class of its own. Here is why thousands of students and parents trust Bhubaneswar Engineering College for their aviation engineering journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: "Only Aeronautical College in Bhubaneswar",
                desc: "BEC is the one and only AICTE-approved institution in Bhubaneswar offering B.Tech Aeronautical Engineering affiliated with BPUT. This unique distinction means no local competition and maximum Odisha market demand — making BEC graduates highly sought-after in the region.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "AICTE Approved & BPUT Affiliated",
                desc: "The program is fully approved by AICTE (All India Council for Technical Education) and affiliated with BPUT (Biju Patnaik University of Technology), Odisha. Your B.Tech degree is nationally recognized, valid for government job applications, GATE, OJEE lateral entry, and international higher studies.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Modern Aerospace Laboratories",
                desc: "Five specialized laboratories — Aircraft Systems Lab, Aerodynamics Lab, Propulsion & Jet Engines Lab, Avionics Lab, and Aircraft Maintenance Workshop — provide hands-on training with real aircraft components, CFD software (ANSYS, MATLAB), and industry-standard simulation tools.",
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "PhD-Qualified Expert Faculty",
                desc: "The department is led by Dr. Sangram Samal (Professor & Head, PhD) with a team of M.Tech-qualified Assistant Professors averaging 7–15 years of teaching and research experience. Faculty bring industry knowledge, research publications, and practical insights that go beyond textbooks.",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "90%+ Placement Record",
                desc: "BEC's dedicated Placement Cell achieves 90%+ campus placement annually across all programs. Aeronautical engineering graduates are placed at IndiGo Airlines, Tata Advanced Systems, HAL, defence sector PSUs, and top IT companies. Mock interviews, aptitude training, and campus drives prepare students thoroughly.",
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Industry Exposure & Internships",
                desc: "Students participate in regular industrial visits to aviation companies, airports, and manufacturing facilities. Internship support ensures real-world aerospace experience before graduation. Guest lectures by industry experts from HAL, ISRO, airlines, and aviation MNCs keep students updated with current industry trends.",
              },
              {
                icon: <Building className="w-6 h-6" />,
                title: "Safe Campus with Hostel",
                desc: "BEC's beautiful campus at Patrapada, Bhubaneswar features separate boys and girls hostels with 24/7 CCTV security, Wi-Fi, resident wardens, nutritious dining mess, sports facilities, and digital library. Parents can rest assured that their child is in a safe, nurturing academic environment.",
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Affordable Fees with Scholarships",
                desc: "BEC offers one of the most competitive fee structures among private aeronautical engineering colleges in Odisha. Multiple scholarship options including SC/ST/OBC government concessions, merit-based scholarships, EWS fee waivers, and education loans from nationalized banks make quality aviation education accessible to all.",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Student Development Programs",
                desc: "Beyond academics, BEC runs technical clubs, aviation model-building competitions, annual technical fests, seminars, workshops, and communication skill development programs. Students graduate not just with technical knowledge but with leadership, teamwork, and professional skills demanded by top employers.",
              },
            ].map((item, i) => (
              <div key={i} id={`why-bec-reason-${i + 1}`} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-black text-primary text-sm md:text-base mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="bg-primary rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-white font-black text-xl mb-1">Ready to Secure Your Seat?</div>
              <div className="text-white/70 text-sm">2026 Admission is Open. Limited Seats Available.</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                id="mid-page-apply-btn"
                onClick={() => setIsApplyModalOpen(true)}
                className="bg-accent text-primary font-black px-6 py-3 rounded-xl hover:bg-accent/90 transition-all text-sm uppercase tracking-wider focus:outline-none"
              >
                Apply Now
              </a>
              <a id="mid-page-whatsapp-btn" href="https://wa.me/919437088215?text=I'm interested in Aeronautical Engineering 2026 admission at BEC Bhubaneswar" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-black px-6 py-3 rounded-xl hover:bg-green-400 transition-all text-sm uppercase tracking-wider">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Department & Labs ─────────────────────────────── */}
        <section aria-labelledby="dept-labs" className="bg-gray-50 rounded-3xl p-8 md:p-14 border border-gray-100">
          <h2 id="dept-labs" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
            Department of Aeronautical Engineering — BEC Bhubaneswar
          </h2>
          <div className="w-16 h-1 bg-accent mb-6 rounded-full" />
          <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-3xl">
            The Department of Aeronautical Engineering at BEC Bhubaneswar combines rigorous academic training with cutting-edge laboratory experience. Established with the vision of producing industry-ready aerospace professionals, the department maintains modern infrastructure aligned with BPUT curriculum requirements and AICTE standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                id: "aircraft-systems-lab",
                title: "Aircraft Systems Laboratory",
                icon: "✈️",
                desc: "The Aircraft Systems Lab at BEC is equipped with real aircraft components including fuselage sections, wing assemblies, control surface mechanisms, landing gear systems, and hydraulic actuators. Students learn aircraft system integration, component identification, and systems troubleshooting through hands-on training with actual aviation hardware.",
                highlights: ["Real aircraft components", "Fuselage & wing sections", "Control surface training", "Hydraulic systems", "Landing gear mechanisms"]
              },
              {
                id: "aerodynamics-lab",
                title: "Aerodynamics Laboratory",
                icon: "💨",
                desc: "BEC's Aerodynamics Lab introduces students to the fundamental principles of fluid flow, lift generation, drag reduction, and boundary layer behavior. With wind tunnel demonstration equipment, pressure measurement tools, and CFD software workstations, students can visualize airflow patterns and validate theoretical aerodynamic concepts.",
                highlights: ["Wind tunnel demonstration", "CFD software (ANSYS)", "Pressure measurement", "Flow visualization", "Lift & drag analysis"]
              },
              {
                id: "propulsion-lab",
                title: "Propulsion & Jet Engines Laboratory",
                icon: "🔥",
                desc: "The Propulsion Lab at BEC gives students direct exposure to aircraft engine principles. With jet engine cut-section models, turbine blade assemblies, piston engine setups, and propulsion simulation software, students understand thermodynamic cycles, engine performance parameters, and combustion principles that are central to aircraft propulsion.",
                highlights: ["Jet engine cut-sections", "Turbine blade assemblies", "Piston engine systems", "Propulsion simulation", "Thermodynamic analysis"]
              },
              {
                id: "maintenance-workshop",
                title: "Aircraft Maintenance Workshop",
                icon: "🔧",
                desc: "The Aircraft Maintenance Workshop provides practical training in airframe inspection, maintenance procedures, NDT (Non-Destructive Testing) techniques, and aircraft component repair. Students learn industry-standard maintenance protocols following DGCA guidelines, preparing them for technical operations roles at airlines, MRO companies, and HAL.",
                highlights: ["Airframe inspection", "NDT techniques", "Component repair", "DGCA-standard procedures", "MRO training protocols"]
              },
            ].map((lab) => (
              <div key={lab.id} id={lab.id} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{lab.icon}</div>
                <h3 className="font-black text-primary text-lg mb-3">{lab.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{lab.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {lab.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Practical Learning */}
          <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100">
            <h3 className="text-xl font-black text-primary mb-6">Practical Learning & Industry Exposure</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Industrial Visits", desc: "Regular visits to HAL, airports, MRO facilities, and aerospace companies for real-world exposure.", icon: "🏭" },
                { title: "Seminars & Workshops", desc: "Industry expert sessions, national-level technical seminars, and skill-development workshops.", icon: "📡" },
                { title: "Technical Competitions", desc: "Model aircraft building, SAE Aero Design participation, drone racing, and design challenges.", icon: "🏆" },
                { title: "Research Projects", desc: "Final-year projects on aerodynamics, propulsion, UAV design, and aerospace structures with faculty guidance.", icon: "🔬" },
              ].map((item, i) => (
                <div key={i} className="text-center p-4">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-black text-primary text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: Faculty ────────────────────────────────────────── */}
        <section aria-labelledby="faculty-section" className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 id="faculty-section" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
                Expert Faculty — Aeronautical Engineering Department
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full" />
            </div>
            <div className="hidden md:flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <Users className="w-4 h-4" /> Academic Experts
            </div>
          </div>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
            BEC's Aeronautical Engineering Department is guided by qualified, experienced faculty with specializations across aerodynamics, propulsion, avionics, aircraft structures, and aircraft maintenance engineering. The team brings academic depth combined with practical industry knowledge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((f, i) => (
              <div key={i} id={`faculty-${i + 1}`} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 mb-5 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="font-black text-primary text-sm mb-0.5">{f.name}</h3>
                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-1">{f.role}</p>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-accent/10 text-primary text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">{f.qualification}</span>
                  <span className="text-gray-400 text-[9px] font-bold">{f.experience}</span>
                </div>
                <a href={`mailto:${f.email}`} className="flex items-center gap-2 text-[10px] font-black text-primary hover:text-accent transition-colors uppercase tracking-widest mt-3">
                  <Mail className="w-3.5 h-3.5" />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 7: Salary Table ───────────────────────────────────── */}
        <section aria-labelledby="salary-section" className="bg-white rounded-3xl p-8 md:p-14 border border-gray-100 shadow-sm">
          <h2 id="salary-section" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
            Salary of Aeronautical Engineers in India (2026)
          </h2>
          <div className="w-16 h-1 bg-accent mb-6 rounded-full" />
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
            Aeronautical engineers in India command competitive salaries that grow significantly with experience and specialization. Government organizations like ISRO, HAL, and DRDO offer stable pay with excellent benefits, while private sector companies like Boeing India, Airbus, and IndiGo provide performance-linked compensation with rapid growth potential.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-4 font-black text-xs uppercase tracking-wider">Experience Level</th>
                  <th className="text-left px-6 py-4 font-black text-xs uppercase tracking-wider">Salary in India (INR/Year)</th>
                  <th className="text-left px-6 py-4 font-black text-xs uppercase tracking-wider">Salary Abroad (USD/Year)</th>
                </tr>
              </thead>
              <tbody>
                {salaryData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-bold text-gray-800">{row.level}</td>
                    <td className="px-6 py-4 text-primary font-black">{row.india}</td>
                    <td className="px-6 py-4 text-blue-700 font-semibold">{row.abroad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { org: "ISRO", role: "Scientist/Engineer SC", salary: "₹56,100 – ₹1,77,500/mo" },
              { org: "HAL", role: "Design Engineer", salary: "₹6 – ₹12 LPA" },
              { org: "DRDO", role: "Scientist B", salary: "₹56,100 – ₹1,77,500/mo" },
              { org: "IndiGo", role: "Aircraft Engineering Officer", salary: "₹5 – ₹10 LPA" },
              { org: "Boeing India", role: "Aeronautical Engineer", salary: "₹10 – ₹25 LPA" },
              { org: "Drone Industry", role: "UAV Design Engineer", salary: "₹5 – ₹15 LPA" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="font-black text-primary text-sm">{item.org}</div>
                <div className="text-gray-500 text-xs mb-2">{item.role}</div>
                <div className="text-accent font-black text-sm">{item.salary}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 8: Admission Process ─────────────────────────────── */}
        <section aria-labelledby="admission-section" className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-8 md:p-14 text-white">
          <h2 id="admission-section" className="text-2xl md:text-3xl font-black mb-2 tracking-tight">
            Aeronautical Engineering Admission 2026 — Eligibility & Process
          </h2>
          <div className="w-16 h-1 bg-accent mb-6 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            {/* Eligibility */}
            <div>
              <h3 className="text-xl font-black mb-5 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" /> Eligibility Criteria
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Academic Qualification", value: "10+2 with Physics, Chemistry & Mathematics (PCM)" },
                  { label: "Minimum Marks", value: "45% aggregate in PCM (General); 40% for reserved categories" },
                  { label: "Entrance Exam", value: "JEE Main OR Odisha OJEE (for BPUT counselling)" },
                  { label: "Lateral Entry", value: "3-year Diploma holders eligible for 2nd year entry via OJEE LE" },
                  { label: "Management Quota", value: "Direct admission based on 10+2 marks (no entrance exam required)" },
                  { label: "Age Limit", value: "No upper age limit for B.Tech Aeronautical Engineering" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <div className="text-accent text-xs font-black uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-white/80 text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Steps */}
            <div>
              <h3 className="text-xl font-black mb-5 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-accent" /> Step-by-Step Admission Process
              </h3>
              <ol className="space-y-4">
                {[
                  { step: "01", title: "Visit becbbsr.ac.in", desc: "Go to the official BEC website and navigate to the Admissions 2026 section." },
                  { step: "02", title: "Fill Application Form", desc: "Complete the online form with your personal details, academic records, and preferred course." },
                  { step: "03", title: "Submit Documents", desc: "Upload 10th & 12th marksheets, JEE/OJEE scorecard, ID proof, category certificate, and photo." },
                  { step: "04", title: "Attend Counselling", desc: "Come for direct counselling at BEC campus, or participate in OJEE online counselling for seat allotment." },
                  { step: "05", title: "Pay Admission Fee", desc: "Confirm your seat by paying the admission fee online or at the college office. EMI options available." },
                  { step: "06", title: "Document Verification", desc: "Submit original documents at BEC admissions office to complete the admission process." },
                ].map((s) => (
                  <li key={s.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent text-primary font-black text-sm flex items-center justify-center shrink-0">{s.step}</div>
                    <div>
                      <div className="font-black text-white text-sm">{s.title}</div>
                      <div className="text-white/60 text-xs mt-0.5">{s.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Documents Required */}
          <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/10 mb-8">
            <h3 className="text-lg font-black mb-5">Documents Required for Admission</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "10th Marksheet & Certificate",
                "12th Marksheet & Certificate",
                "JEE Main / OJEE Scorecard",
                "4 Passport-size Photographs",
                "Aadhar Card / PAN Card",
                "Category Certificate (SC/ST/OBC)",
                "Migration Certificate",
                "Transfer Certificate",
                "Medical Fitness Certificate",
                "Income Certificate (for scholarship)",
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                  <CheckCircle className="w-3 h-3 text-accent shrink-0" />
                  {doc}
                </div>
              ))}
            </div>
          </div>

          {/* Scholarships */}
          <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/10">
            <h3 className="text-lg font-black mb-5">Scholarships & Financial Aid</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "BEC Merit Scholarship", desc: "For top-ranking JEE/OJEE students" },
                { name: "Odisha SC/ST Scholarship", desc: "Government concession for SC/ST students" },
                { name: "OBC Post Matric Scholarship", desc: "Central & state government support" },
                { name: "EWS Fee Concession", desc: "Economically weaker section benefit" },
                { name: "Bank Education Loan", desc: "SBI, UCO Bank — subsidized rates" },
                { name: "PM Scholarship Scheme", desc: "For central government employees' wards" },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4">
                  <div className="font-black text-accent text-xs mb-1">{s.name}</div>
                  <div className="text-white/60 text-xs">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 9: Campus & Location ─────────────────────────────── */}
        <section aria-labelledby="campus-section" className="bg-white rounded-3xl p-8 md:p-14 border border-gray-100 shadow-sm">
          <h2 id="campus-section" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
            BEC Bhubaneswar — Campus, Location & Local SEO
          </h2>
          <div className="w-16 h-1 bg-accent mb-6 rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5 text-gray-600 text-base leading-relaxed">
              <p>
                Bhubaneswar Engineering College (BEC) is situated at <strong className="text-gray-800">Patrapada, Bhubaneswar, Odisha 751019</strong> — one of Bhubaneswar's fastest-growing educational and industrial zones. The campus is strategically located near National Highway NH-16 and is well-connected by bus routes from all major parts of Bhubaneswar city.
              </p>
              <p>
                BEC is approximately <strong className="text-gray-800">15 km from Biju Patnaik International Airport</strong>, making it one of the most aviation-adjacent engineering colleges in Odisha. Students regularly visit the airport during industrial exposure programs, gaining firsthand experience of real aviation operations.
              </p>
              <p>
                As the <strong className="text-gray-800">only aeronautical engineering college in Bhubaneswar</strong>, BEC draws students from across Odisha — from Cuttack, Puri, Berhampur, Rourkela, Sambalpur, Balasore, and beyond — as well as from neighbouring states like Jharkhand, Chhattisgarh, and Andhra Pradesh.
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3">
                <h3 className="font-black text-primary text-base">Contact & Location</h3>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Patrapada, Bhubaneswar, Odisha 751019, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href="tel:+919437088215" className="text-primary font-bold hover:underline">+91 94370 88215</a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href="mailto:info@becbbsr.ac.in" className="text-primary font-bold hover:underline">info@becbbsr.ac.in</a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "🏫", title: "Safe Wi-Fi Campus", desc: "Fully Wi-Fi enabled campus with 24/7 CCTV security across all buildings, labs, and common areas." },
                { icon: "🛌", title: "Boys & Girls Hostel", desc: "Separate hostels with resident wardens, nutritious mess, common rooms, and excellent connectivity." },
                { icon: "🚌", title: "Transportation", desc: "BEC runs college buses covering major Bhubaneswar city routes for commuting students." },
                { icon: "⚽", title: "Sports & Recreation", desc: "Playgrounds, indoor sports, and cultural facilities for holistic student development." },
                { icon: "📚", title: "Digital Library", desc: "Extensive digital and physical library with NPTEL resources, aerospace journals, and technical references." },
                { icon: "🍽️", title: "Canteen & Mess", desc: "Hygienic canteen and mess facilities providing nutritious, affordable meals on campus." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-black text-primary text-sm mb-0.5">{item.title}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 10: Explore Other Programs ───────────────────────── */}
        <section aria-labelledby="related-programs" className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <h2 id="related-programs" className="text-xl md:text-2xl font-black text-primary mb-2 tracking-tight">
            Explore Other Programs at BEC Bhubaneswar
          </h2>
          <div className="w-16 h-1 bg-accent mb-6 rounded-full" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "B.Tech CSE", href: "/cse", icon: "💻" },
              { name: "B.Tech AI & DS", href: "/ai-ds", icon: "🤖" },
              { name: "MBA Program", href: "/mba", icon: "📊" },
              { name: "Diploma Courses", href: "/diploma", icon: "🎓" },
              { name: "Fee Structure 2026", href: "/fees", icon: "💰" },
              { name: "Placements", href: "/placements", icon: "🏆" },
              { name: "Campus Life", href: "/campus", icon: "🏫" },
              { name: "Contact Us", href: "/contact", icon: "📞" },
            ].map((link, i) => (
              <Link key={i} to={link.href} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group">
                <span className="text-xl">{link.icon}</span>
                <span className="font-bold text-primary text-xs group-hover:text-accent transition-colors">{link.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── SECTION 11: FAQ ───────────────────────────────────────────── */}
        <section aria-labelledby="faq-section">
          <div className="mb-8">
            <h2 id="faq-section" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
              Frequently Asked Questions — Aeronautical Engineering
            </h2>
            <div className="w-16 h-1 bg-accent mb-4 rounded-full" />
            <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
              Here are the most common questions students, parents, and admission seekers ask about B.Tech Aeronautical Engineering — covering career scope, salary, admission process, BEC facilities, government jobs, and more.
            </p>
          </div>

          {/* FAQ Search */}
          <div className="mb-6">
            <input
              id="faq-search-input"
              type="search"
              placeholder="Search FAQs — e.g. 'salary', 'ISRO', 'eligibility'..."
              value={faqSearch}
              onChange={e => setFaqSearch(e.target.value)}
              className="w-full md:w-1/2 border border-gray-200 rounded-xl px-5 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>

          <div className="flex flex-col gap-3">
            {faqsToRender.length > 0
              ? faqsToRender.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)
              : <p className="text-gray-500 text-sm py-6 text-center">No FAQs found for "{faqSearch}". Try a different keyword.</p>
            }
          </div>

          {!isSearching && filteredFaqs.length > 5 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="bg-primary/5 hover:bg-primary/10 text-primary font-bold px-6 py-3 rounded-xl border border-primary/10 transition-all text-sm inline-flex items-center gap-2"
              >
                {showAllFaqs ? (
                  <>Show Less FAQs <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>View All 50+ FAQs <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
          )}

          {/* FAQ CTA */}
          <div className="mt-8 bg-primary/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-primary/10">
            <div>
              <div className="font-black text-primary text-base">Still have questions about Aeronautical Engineering at BEC?</div>
              <div className="text-gray-500 text-sm">Our admissions counsellors are available to help you.</div>
            </div>
            <a
              id="faq-whatsapp-btn"
              href="https://wa.me/919437088215?text=I have a question about Aeronautical Engineering at BEC Bhubaneswar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-black px-6 py-3 rounded-xl hover:bg-green-400 transition-all text-sm uppercase tracking-wider whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Our Counsellors
            </a>
          </div>
        </section>

        {/* ── SECTION 12: Final CTA ─────────────────────────────────────── */}
        <section
          id="apply-now-section"
          aria-labelledby="final-cta"
          className="bg-gradient-to-br from-accent to-yellow-400 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)]"
        >
          <Plane className="absolute top-4 right-8 w-48 h-48 text-primary/5 -rotate-12 pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Star className="w-3.5 h-3.5" />
              2026 Admission Open — Limited Seats
            </div>
            <h2 id="final-cta" className="text-2xl md:text-4xl font-black text-primary mb-4 leading-tight">
              Begin Your Aviation Engineering Journey<br />at BEC Bhubaneswar
            </h2>
            <p className="text-primary/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Join Odisha's only B.Tech Aeronautical Engineering college in Bhubaneswar. Modern labs. PhD faculty. 90%+ placements. AICTE approved. BPUT affiliated. Your career in aviation starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                id="final-apply-now-btn"
                onClick={() => setIsApplyModalOpen(true)}
                className="inline-flex items-center gap-2 bg-primary text-white font-black px-10 py-4 rounded-2xl hover:bg-primary/90 transition-all hover:shadow-xl hover:-translate-y-1 text-sm uppercase tracking-wider focus:outline-none"
              >
                <Rocket className="w-4 h-4" />
                Apply Now — Aeronautical Engineering 2026
              </button>
              <a
                id="final-whatsapp-btn"
                href="https://wa.me/919437088215?text=I want to apply for B.Tech Aeronautical Engineering 2026 at BEC Bhubaneswar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white font-black px-8 py-4 rounded-2xl hover:bg-green-500 transition-all hover:shadow-xl hover:-translate-y-1 text-sm uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                WhatsApp for Admission Help
              </a>
              <a
                id="final-call-btn"
                href="tel:+919437088215"
                className="inline-flex items-center gap-2 bg-white text-primary font-black px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-1 text-sm uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                Call: +91 94370 88215
              </a>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {["✅ AICTE Approved", "✅ BPUT Affiliated", "✅ 90%+ Placements", "✅ Modern Labs", "✅ Safe Campus", "✅ Scholarships Available"].map((b, i) => (
                <span key={i} className="bg-primary/10 text-primary font-bold text-xs px-4 py-2 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── ADMISSION INQUIRY MODAL ────────────────────────────────────── */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all">
          <div 
            className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col gap-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              onClick={() => { setIsApplyModalOpen(false); setModalStatus('idle'); }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-800"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {modalStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-6">
                <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center mb-5 shadow-lg shadow-green-100">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 id="modal-title" className="text-xl font-black text-primary uppercase tracking-tight mb-2">Inquiry Submitted!</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Thank you for your interest. Your inquiry has been sent directly to the BEC Admissions Cell. Our expert counsellors will get in touch with you shortly!
                </p>
                <button
                  onClick={() => { setIsApplyModalOpen(false); setModalStatus('idle'); }}
                  className="w-full py-4 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-primary/95 transition-all shadow-md"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <h3 id="modal-title" className="text-xl font-black text-primary uppercase tracking-tighter mb-1">BEC Admissions Inquiry 2026</h3>
                  <p className="text-xs text-gray-400 font-medium">B.Tech Aeronautical Engineering — Direct Support</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter student name"
                      value={modalName}
                      onChange={e => setModalName(e.target.value)}
                      required
                      className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={modalEmail}
                      onChange={e => setModalEmail(e.target.value)}
                      required
                      className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={modalPhone}
                      onChange={e => setModalPhone(e.target.value)}
                      required
                      className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Program</label>
                      <input
                        type="text"
                        value="B.Tech"
                        disabled
                        className="bg-gray-100 border border-gray-100 text-gray-400 rounded-xl px-4 py-3 text-sm font-semibold outline-none cursor-not-allowed"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Department</label>
                      <input
                        type="text"
                        value="Aeronautical Engg"
                        disabled
                        className="bg-gray-100 border border-gray-100 text-gray-400 rounded-xl px-4 py-3 text-sm font-semibold outline-none cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Brief Message / Remarks (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Ask about fees, hostel, eligibility, scholarships..."
                      value={modalMessage}
                      onChange={e => setModalMessage(e.target.value)}
                      className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {modalStatus === 'error' && (
                  <p className="text-[10px] font-bold text-red-500 text-center uppercase tracking-widest">
                    Submission failed. Please check your connection and try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={modalStatus === 'loading'}
                  className="bg-accent text-primary font-black py-4 rounded-xl uppercase text-xs tracking-[0.2em] shadow-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-all disabled:opacity-75"
                >
                  {modalStatus === 'loading' ? 'Submitting Inquiry...' : 'Submit Admission Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      </div>
    </PageLayout>
  );
};
