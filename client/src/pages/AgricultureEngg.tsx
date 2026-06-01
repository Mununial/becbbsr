import { PageLayout } from '../components/PageLayout';
import { Leaf, Users, Target, GraduationCap, Mail, CheckCircle, MapPin, Phone, ChevronDown, ChevronUp, Star, Award, BookOpen, Briefcase, Zap, Shield, TrendingUp, Droplets, Cpu, Sun, X } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// ─── Faculty Data ─────────────────────────────────────────────────────────────
const faculty = [
  { name: "P Ch. Nayak", role: "Asst. Professor", qualification: "M.Tech", email: "agr@becbbsr.ac.in", experience: "10+ Years" },
  { name: "Samikshya Dash", role: "Asst. Professor", qualification: "M.Tech", email: "agr@becbbsr.ac.in", experience: "8+ Years" },
  { name: "Ananyaa Mohanty", role: "Asst. Professor", qualification: "M.Tech", email: "agr@becbbsr.ac.in", experience: "7+ Years" },
  { name: "Dipti Mohapatra", role: "Asst. Professor", qualification: "M.Tech", email: "agr@becbbsr.ac.in", experience: "6+ Years" },
  { name: "Er. Snigdharani Jena", role: "Asst. Professor", qualification: "M.Tech", email: "agr@becbbsr.ac.in", experience: "7+ Years" },
  { name: "Er. OM Padhy", role: "Asst. Professor", qualification: "M.Tech", email: "agr@becbbsr.ac.in", experience: "9+ Years" },
  { name: "Er. Sushil Harichandan", role: "Asst. Professor", qualification: "M.Tech", email: "agr@becbbsr.ac.in", experience: "8+ Years" },
];

// ─── Salary Data ──────────────────────────────────────────────────────────────
const salaryData = [
  { level: "Fresher (0–2 yrs)", india: "₹2.5 – ₹5 LPA", abroad: "$45,000 – $65,000" },
  { level: "Mid-Level (3–7 yrs)", india: "₹6 – ₹12 LPA", abroad: "$65,000 – $90,000" },
  { level: "Senior (8–15 yrs)", india: "₹12 – ₹22 LPA", abroad: "$90,000 – $130,000" },
  { level: "Specialist / R&D (15+ yrs)", india: "₹22 – ₹40+ LPA", abroad: "$120,000+" },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "What is Agriculture Engineering?", a: "Agriculture Engineering (also called Agricultural Engineering) is the branch of engineering that applies science and engineering principles to agriculture and food systems. It covers farm machinery design, irrigation systems, soil and water conservation, food processing technology, post-harvest engineering, renewable energy in farming, and smart precision agriculture. In India, it is offered as a 4-year B.Tech program approved by AICTE." },
  { q: "Which is the best Agriculture Engineering college in Bhubaneswar?", a: "Bhubaneswar Engineering College (BEC) at Patrapada, Bhubaneswar is a leading AICTE-approved institution offering B.Tech Agriculture Engineering affiliated with BPUT in Odisha. BEC provides modern agricultural engineering laboratories, experienced faculty, hands-on practical training, and strong placement support in agritech companies, food processing industries, and government agricultural departments." },
  { q: "Is Agriculture Engineering a good career in India?", a: "Yes. Agriculture Engineering is one of the most future-proof careers in India. India is the world's second-largest food producer and agritech is growing at over 25% annually. With government schemes like PM-KISAN, smart farming initiatives, and rising demand for food processing professionals, agriculture engineers have excellent career prospects in both government and private sectors." },
  { q: "What is the salary of Agriculture Engineers in India?", a: "Agriculture Engineering freshers earn ₹2.5–5 lakhs per annum in India. Mid-level professionals earn ₹6–12 lakhs. Senior specialists in food processing MNCs, agritech startups, or ICAR research organizations earn ₹12–22 lakhs or more. Government roles as Agriculture Development Officers (ADO) or Assistant Agriculture Engineers provide job security with additional allowances." },
  { q: "What is the eligibility for B.Tech Agriculture Engineering?", a: "To pursue B.Tech Agriculture Engineering, you must have passed 10+2 with Physics, Chemistry, and Mathematics (PCM) or Physics, Chemistry, and Biology (PCB) with minimum 45%–50% aggregate marks. Admission is through JEE Main, Odisha OJEE, or OUAT entrance exam. Direct management quota admission at BEC is available based on 10+2 marks." },
  { q: "Can girls do Agriculture Engineering?", a: "Absolutely yes. Agriculture Engineering has no gender restrictions and women are making outstanding contributions in agritech, food science, soil conservation, and agricultural policy. BEC Bhubaneswar has a dedicated girls' hostel, 24/7 CCTV security, lady wardens, and a safe academic environment welcoming women in engineering." },
  { q: "What are the government jobs after Agriculture Engineering?", a: "Major government jobs for agriculture engineers: Agriculture Development Officer (ADO), Assistant Agriculture Engineer (AAE), Assistant Soil Conservation Officer (ASCO), Agriculture Field Officer (AFO) in banks, Junior Engineer (JE) in irrigation departments, scientist posts at ICAR, roles in NABARD, Food Corporation of India (FCI), and state agriculture departments across India." },
  { q: "What is the difference between Agriculture Engineering and Agriculture Science?", a: "Agriculture Science focuses on crop science, botany, soil science, horticulture, and plant genetics — it is a pure science stream. Agriculture Engineering is an engineering discipline that designs machinery, irrigation systems, food processing plants, and technology solutions for agriculture. Agriculture engineers are engineers; agriculture scientists are scientists." },
  { q: "What is the future scope of Agriculture Engineering in India?", a: "Enormous. India's agritech sector is growing at 25% annually with investments crossing $1 billion. Precision agriculture, drone technology for crop monitoring, IoT-based smart irrigation, AI-powered pest detection, and food processing automation are creating thousands of new engineering roles. With 70%+ of India depending on agriculture, the scope is vast and growing." },
  { q: "Can I do Agriculture Engineering after 10th?", a: "Not directly. You must complete 10+2 with PCM or PCB first. After 10th, you can pursue a 3-year Diploma in Agricultural Engineering, then take lateral entry to 2nd year B.Tech under OJEE lateral entry rules at BPUT-affiliated colleges like BEC Bhubaneswar." },
  { q: "What is the difference between Agriculture Engineering and Mechanical Engineering?", a: "Mechanical Engineering is a broad discipline covering machines, manufacturing, and thermodynamics for industrial and commercial applications. Agriculture Engineering is specialized, applying similar mechanical principles specifically to farming machinery, irrigation systems, food processing, soil conservation, and sustainable agricultural technology. Agriculture engineers work at the critical intersection of technology and food security." },
  { q: "What is Precision Agriculture?", a: "Precision Agriculture uses technology — GPS, IoT sensors, drones, AI, and satellite imagery — to optimize crop yields, reduce waste, and minimize environmental impact. Agriculture engineers design and implement precision farming systems that tell farmers exactly how much water, fertilizer, or pesticide each section of a field needs, saving cost and improving yields significantly." },
  { q: "What is the ICAR and how does it benefit Agriculture Engineering graduates?", a: "ICAR (Indian Council of Agricultural Research) is India's top agricultural research body under the Ministry of Agriculture. ICAR regularly recruits Agricultural Engineers as scientists, junior engineers, and technical officers. ICAR NET and ASRB examinations are pathways to prestigious research careers. ICAR institutes like IARI (Delhi) and IIWM (Bhubaneswar) offer career opportunities for BEC agriculture engineering graduates." },
  { q: "What companies hire Agriculture Engineers in India?", a: "Top employers: John Deere India, Mahindra Agri, TAFE Tractors, Escorts Kubota, Swaraj Tractors, Amul, ITC Agribusiness, Nestle India, Cargill India, Bayer Crop Science, BASF India, Jain Irrigation, agritech startups (DeHaat, Ninjacart, AgriBazaar, CropIn), NABARD, FCI, and state and central government agricultural departments." },
  { q: "What subjects are studied in B.Tech Agriculture Engineering?", a: "Core subjects: Engineering Mathematics, Fluid Mechanics, Farm Machinery & Power, Irrigation Engineering, Soil and Water Conservation, Agricultural Processing, Food Technology, Renewable Energy in Agriculture, Agricultural Structures, Surveying, Hydrology, Precision Agriculture, Post-Harvest Technology, GPS and Remote Sensing in Agriculture, Agricultural Economics, and Environmental Engineering." },
  { q: "What is food processing technology in Agriculture Engineering?", a: "Food Processing Technology involves designing and operating systems that transform raw agricultural produce into shelf-ready food products. It covers preservation methods (canning, freezing, drying), packaging engineering, quality control, food plant design, HACCP systems, and food safety standards. BEC's Food Processing Lab trains students in industry-standard food technology processes." },
  { q: "What is drip irrigation and sprinkler irrigation in Agriculture Engineering?", a: "Drip Irrigation delivers water directly to the root zone through a network of pipes, emitters, and tubes — maximizing efficiency and minimizing water waste by up to 60% compared to flood irrigation. Sprinkler Irrigation simulates rainfall using pressurized water systems. Agriculture engineers design, install, and optimize both systems for different crop types and terrain conditions." },
  { q: "What is post-harvest technology in Agriculture Engineering?", a: "Post-Harvest Technology focuses on handling, storing, processing, and distributing agricultural products after harvesting to minimize losses and maintain quality. India loses nearly 30% of produced food due to poor post-harvest management. Agriculture engineers design cold storage systems, grain silos, packaging lines, and food preservation infrastructure — a critical national need." },
  { q: "Is Agriculture Engineering good for government jobs in Odisha?", a: "Yes. Odisha government's Agriculture and Irrigation departments regularly recruit Agriculture Engineers as Junior Engineers (JE), Assistant Agriculture Engineers, and Agriculture Development Officers. OPSC (Odisha Public Service Commission) conducts state engineering exams. Additional opportunities exist at WALMI Odisha, OLM, NABARD, and the state food processing and rural development departments." },
  { q: "What is the role of drones in Agriculture Engineering?", a: "Drones (UAVs) in agriculture are used for crop monitoring, aerial spraying of pesticides, soil mapping, irrigation planning, livestock tracking, and yield prediction. Agriculture engineers design, program, and deploy agricultural drones. India's rapidly growing agri-drone sector under DGCA's new Drone Policy 2021 is creating thousands of specialized engineering jobs." },
  { q: "What is IoT in Agriculture Engineering?", a: "IoT (Internet of Things) in agriculture uses connected sensors, actuators, and smart devices to monitor soil moisture, weather conditions, crop health, and irrigation needs in real time. Agriculture engineers design IoT-based smart farming systems that automate irrigation, alert farmers to crop stress, and provide data-driven insights through mobile applications — dramatically improving farm efficiency." },
  { q: "What is soil and water conservation engineering?", a: "Soil and Water Conservation Engineering involves designing structures and systems to prevent soil erosion, manage rainwater runoff, conserve groundwater, and rehabilitate degraded land. It includes watershed management, check dams, contour bunding, terracing, and drainage design. With climate change increasing extreme weather events, this specialization is increasingly critical for sustainable agriculture." },
  { q: "Can Agriculture Engineers work in banks?", a: "Yes. Agricultural Engineers are eligible for Agriculture Field Officer (AFO) posts in nationalized banks — SBI, Bank of Baroda, PNB, UCO Bank, and others — which recruit agricultural graduates to manage agricultural loan portfolios, rural development programs, and NABARD schemes. This is a popular career path offering job security and good salary packages." },
  { q: "What is the NABARD recruitment for Agriculture Engineers?", a: "NABARD (National Bank for Agriculture and Rural Development) recruits Agriculture Engineering graduates as Development Assistants and Grade A Officers through NABARD exams. NABARD roles involve rural infrastructure financing, agritech investment, watershed project monitoring, and rural credit management — offering competitive pay, government benefits, and a meaningful career in rural development." },
  { q: "What is the role of renewable energy in Agriculture Engineering?", a: "Agriculture Engineering covers solar-powered irrigation pumps, biogas plants from agricultural waste, wind energy for rural areas, and biomass energy systems. As India pushes for green energy and carbon-neutral farming, agriculture engineers specializing in renewable energy integration are in growing demand from both government schemes and private agritech companies." },
  { q: "How to get admission in Agriculture Engineering at BEC Bhubaneswar?", a: "Step 1: Visit becbbsr.ac.in. Step 2: Fill the online application form. Step 3: Upload 10+2 marksheets, JEE/OJEE/OUAT scorecard, ID proof, and photo. Step 4: Attend direct counselling at BEC campus or participate in OJEE counselling. Step 5: Pay admission fee to confirm your seat. Step 6: Submit original documents for verification at the BEC admissions office." },
  { q: "Is BPUT Agriculture Engineering degree recognized nationally?", a: "Yes. B.Tech Agriculture Engineering from BPUT (Biju Patnaik University of Technology) is a nationally recognized degree, valid for UPSC, state PSC examinations, GATE, ICAR NET, ASRB exams, and for employment in central and state government agricultural departments, PSUs, banks, and private companies across India." },
  { q: "What is the GATE paper for Agriculture Engineering?", a: "GATE Paper AG covers Agricultural Engineering topics including Farm Machinery, Soil and Water Conservation, Irrigation, Drainage, Farm Structures, Food Technology, and Post-Harvest Engineering. A strong GATE AG score opens doors to M.Tech admissions at IITs and NITs, and PSU and government organization recruitment including ICAR, FCI, and irrigation departments." },
  { q: "What are smart farming technologies studied in Agriculture Engineering?", a: "Smart farming technologies include: GPS-guided tractors, drone crop monitoring, IoT soil sensors, satellite remote sensing, AI-based crop yield prediction, automated irrigation systems, robotic harvesting, blockchain for agriculture supply chains, variable rate technology (VRT) for precision fertilizer application, and mobile-based farm management platforms. BEC trains students in these emerging technologies." },
  { q: "Can Agriculture Engineers start their own Agritech startup?", a: "Yes! Agriculture engineers are ideally positioned to start agritech companies. India's agritech startup ecosystem has attracted over $1 billion in funding with companies like DeHaat, Ninjacart, CropIn, AgriBazaar, and Fasal building billion-dollar businesses. BEC supports student entrepreneurship through innovation programs, startup incubation mentorship, and technology business development workshops." },
  { q: "What is agricultural mechanization and why is it important?", a: "Agricultural mechanization is the use of machinery and technology to replace manual labour in farming operations — plowing, sowing, harvesting, threshing, and irrigation. India's farm mechanization level is only 45% compared to 95% in developed nations, creating enormous opportunity for agriculture engineers who design and deploy farm machinery solutions for Indian conditions." },
  { q: "What is the difference between Agriculture Engineering and Food Technology?", a: "Agriculture Engineering covers the full spectrum from field (farm machinery, irrigation) to processing plant (food processing systems, post-harvest technology). Food Technology is specifically focused on the processing, preservation, packaging, and quality of food products. Both are closely related fields and agriculture engineering graduates often specialize in food processing as part of their broader curriculum." },
  { q: "Are there scholarships for Agriculture Engineering students in Odisha?", a: "Yes. Available scholarships: Odisha Government SC/ST/OBC Post Matric Scholarship, Central Government Scholarship schemes, PM Scholarship for wards of defence/police personnel, BEC Merit Scholarship for top academic performers, EWS fee concession, and education loans from SBI, UCO Bank, and nationalized banks at subsidized interest rates specifically for agriculture and engineering courses." },
  { q: "What is water resource management in Agriculture Engineering?", a: "Water Resource Management in agriculture engineering involves planning, developing, and managing water resources for agricultural use — including groundwater assessment, watershed management, reservoir design, canal systems, water harvesting, and water quality monitoring. With water scarcity increasing across India due to climate change, this is one of the most critically needed engineering specializations." },
  { q: "What is the scope of Agriculture Engineering in Odisha?", a: "Odisha, with its large agricultural base, Mahanadi river system, and government focus on irrigation and rural development, offers strong opportunities for agriculture engineers. State departments like the Odisha Water Resources Department (WRD), Agriculture and Farmers' Empowerment Department, OLM, and WALMI recruit agriculture engineers regularly. The Odisha Food Processing Policy also drives private sector demand." },
  { q: "Can Agriculture Engineers work with Mahindra, John Deere, or TAFE?", a: "Yes. Major farm machinery and agribusiness companies — Mahindra Agri, John Deere India, TAFE (Tractors and Farm Equipment), Escorts Kubota, and Swaraj Tractors — actively hire B.Tech Agriculture Engineering graduates for roles in product design, manufacturing, quality assurance, sales engineering, service engineering, and precision agriculture technology implementation." },
  { q: "What is the UPSC pathway for Agriculture Engineers?", a: "Agriculture Engineers can appear for UPSC IES (Indian Engineering Services) examination — Agricultural Engineering paper — to become Group A Gazetted Officers. IES officers work in central government departments including Ministry of Agriculture, Food Corporation of India, Irrigation departments, and DRDA. The IES exam is conducted annually and carries high prestige with excellent career growth." },
  { q: "Does BEC Bhubaneswar have Agriculture Engineering labs?", a: "Yes. BEC's Agriculture Engineering Department has specialized laboratories: Farm Machinery Lab, Irrigation Engineering Lab, Soil and Water Conservation Lab, Food Processing and Post-Harvest Technology Lab, and Agricultural Technology Lab. Students receive hands-on training using real equipment, farm implements, irrigation systems, and food processing machinery — ensuring industry readiness upon graduation." },
  { q: "What is the impact of AI in Agriculture Engineering?", a: "Artificial Intelligence is transforming agriculture through crop disease detection using image recognition, yield prediction using machine learning models, precision spraying robots, AI-based market price forecasting, intelligent irrigation scheduling, and autonomous harvesting machines. Agriculture engineers who understand AI integration are among the highest-paid professionals in the agritech industry today." },
  { q: "What is the FCI recruitment for Agriculture Engineers?", a: "FCI (Food Corporation of India) recruits Agriculture Engineering graduates as Technical Officers and Junior Engineers for grain storage management, food quality testing, procurement operations, and warehouse management. FCI Technical Officer exams are conducted regularly and offer government job security with good salary and allowances." },
  { q: "What is agritech and why is it important for Agriculture Engineers?", a: "Agritech refers to the use of technology to transform agriculture — including apps, drones, IoT sensors, satellite data, AI, robotics, and fintech for farmers. India's agritech sector is projected to reach $35 billion by 2027. Agriculture engineers are the technical backbone of agritech companies, designing and deploying the technology platforms that are revolutionizing Indian farming." },
  { q: "What is the OPSC recruitment for Agriculture Engineers?", a: "OPSC (Odisha Public Service Commission) conducts the Odisha Engineering Services Examination recruiting Agriculture Engineers as Assistant Executive Engineers and Junior Engineers in Odisha Water Resources Department, Agriculture and Farmers' Empowerment Department, Rural Development Department, and Housing & Urban Development — offering state government job security with competitive pay." },
  { q: "What is the difference between Agriculture Engineering and Civil Engineering?", a: "Civil Engineering focuses on roads, bridges, buildings, and urban infrastructure. Agriculture Engineering applies civil engineering principles specifically to agricultural infrastructure — irrigation canals, dams, farm ponds, drains, rural roads, grain storage structures, and agricultural processing plant buildings. Agriculture engineers understand both the engineering and the agricultural context of their infrastructure." },
  { q: "Can Agriculture Engineers work in food companies like Amul, ITC, or Nestlé?", a: "Yes. Food and beverage companies like Amul, ITC Agribusiness, Nestlé India, Britannia, Parle, Godrej Agrovet, Cargill India, and Dabur recruit Agriculture Engineers for food processing operations, quality assurance, plant engineering, supply chain management, and agricultural procurement roles. These companies offer excellent salary packages and career growth." },
  { q: "What is biogas and biomass energy in Agriculture Engineering?", a: "Biogas is produced by the anaerobic decomposition of agricultural waste (crop residue, animal dung) into methane fuel. Biomass energy uses agricultural residue as fuel for electricity generation. Agriculture engineers design biogas plants, biomass gasifiers, and bio-digesters for rural energy self-sufficiency. These technologies reduce farm waste, generate clean energy, and improve rural livelihoods." },
  { q: "How is BEC different from OUAT for Agriculture Engineering?", a: "OUAT (Orissa University of Agriculture and Technology) offers Agriculture Engineering under agricultural university governance with its own entrance exam. BEC Bhubaneswar offers B.Tech Agriculture Engineering under BPUT (engineering university) with AICTE approval — making the degree eligible for broader engineering sector job applications, GATE engineering stream, IES (Indian Engineering Services), and UPSC technical roles. BEC also offers a safe city campus with modern hostel facilities and competitive placement support." },
  { q: "What is the role of Agriculture Engineers in climate change?", a: "Agriculture Engineers play a critical role in climate-resilient farming: designing drought-resistant irrigation systems, developing flood-resistant crop storage, implementing soil conservation to prevent degradation, building solar-powered farm infrastructure, and creating water harvesting systems. As climate change disrupts traditional farming, agriculture engineers are vital for securing India's food supply." },
  { q: "Can Agriculture Engineers go abroad for higher studies?", a: "Yes. B.Tech graduates can pursue MS in Agricultural Engineering, Biosystems Engineering, or Environmental Engineering at universities in USA, Canada, Netherlands, Germany, and Australia. Wageningen University (Netherlands), Purdue University (USA), and UC Davis (USA) are world leaders in agricultural engineering. GRE and TOEFL/IELTS scores are required for international admissions." },
  { q: "What is hydraulics and irrigation in Agriculture Engineering?", a: "Hydraulics is the study of fluid flow and pressure — fundamental to designing irrigation channels, pipelines, pumps, and water delivery systems. Irrigation Engineering applies hydraulic principles to design efficient systems for crop water supply including open channels, drip systems, sprinklers, water storage tanks, and regulated release from dams and reservoirs." },
  { q: "What is remote sensing in Agriculture Engineering?", a: "Remote sensing uses satellite and aerial imagery to monitor crop health, soil moisture, land use patterns, drought conditions, and flood impacts over large areas. Agriculture engineers use GIS (Geographic Information Systems) and satellite data to make precision farming decisions, plan irrigation schemes, assess watershed conditions, and forecast crop yields at state and national levels." },
  { q: "What is organic farming and its engineering aspects?", a: "Organic Farming avoids synthetic chemicals, using natural inputs and biological pest control. Agriculture engineers contribute to organic farming through design of compost systems, bio-fertilizer production units, mechanical weed control equipment, organic food processing and packaging systems, and certification-compliant storage infrastructure." },
  { q: "Is B.Tech Agriculture Engineering eligible for banking jobs?", a: "Yes. B.Tech Agriculture Engineering graduates are eligible for Agriculture Field Officer (AFO) posts in IBPS Bank recruitment — one of the most sought-after government sector opportunities. AFOs manage agricultural credit portfolios, rural development programs, and NABARD-linked schemes at public sector banks, offering job security, pension, and competitive government salary." },
  { q: "What is the minimum OJEE score for Agriculture Engineering at BEC?", a: "OJEE (Odisha Joint Entrance Examination) scores are used for BPUT counselling including BEC Bhubaneswar. Specific cutoff ranks vary by year and category. For Agriculture Engineering, seats are limited and early applicants have an advantage. Contact BEC admissions office directly at becbbsr.ac.in for the latest 2026 cutoff information and management quota seat availability." },
  { q: "What is the salary of Agriculture Development Officers (ADO) in India?", a: "Agriculture Development Officers (ADO) in India earn ₹35,400–₹1,12,400 per month (Pay Level 6) under the 7th Pay Commission, plus DA, HRA, and other allowances — making it a highly attractive government career. ADOs are recruited by state PSCs and the central government, with B.Tech Agriculture Engineering being the primary qualification." },
];

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'shadow-lg border-green-200' : 'hover:border-gray-200'}`}>
      <button
        id={`agr-faq-q-${index}`}
        aria-expanded={open}
        aria-controls={`agr-faq-a-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-800 text-sm md:text-base leading-snug pr-2">{q}</span>
        {open
          ? <ChevronUp className="w-5 h-5 text-green-700 shrink-0" />
          : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div id={`agr-faq-a-${index}`} role="region" className="px-5 md:px-6 pb-5 md:pb-6 bg-white border-t border-gray-50">
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
      "@id": "https://becbbsr.ac.in/agriculture-engineering",
      "url": "https://becbbsr.ac.in/agriculture-engineering",
      "name": "B.Tech Agriculture Engineering in Odisha | BEC Bhubaneswar",
      "description": "Study B.Tech Agriculture Engineering at BEC Bhubaneswar — AICTE-approved, BPUT-affiliated. Modern agri-labs, expert faculty, government job focus & placements. Apply 2026.",
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
    },
    {
      "@type": "Course",
      "name": "B.Tech Agriculture Engineering",
      "description": "4-year AICTE-approved B.Tech Agriculture Engineering program at BEC Bhubaneswar, affiliated with BPUT Odisha. Covers farm machinery, irrigation engineering, soil and water conservation, food processing, precision agriculture, agritech, and renewable energy in agriculture. Strong government job and placement support.",
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Bhubaneswar Engineering College",
        "sameAs": "https://becbbsr.ac.in"
      },
      "url": "https://becbbsr.ac.in/agriculture-engineering",
      "educationalLevel": "Bachelor's Degree",
      "timeRequired": "P4Y",
      "courseCode": "AGRI-BTech",
      "teaches": [
        "Farm Machinery and Power", "Irrigation Engineering", "Soil and Water Conservation",
        "Food Processing Technology", "Precision Agriculture", "Agricultural Structures",
        "Post-Harvest Technology", "Renewable Energy in Agriculture", "IoT in Agriculture", "Remote Sensing in Agriculture"
      ],
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
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ]
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const AgricultureEngg = () => {
  const [faqSearch, setFaqSearch] = useState('');
  const [showAllFaqs, setShowAllFaqs] = useState(false);

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
        branch: 'Agriculture Engineering',
        message: modalMessage || 'Interested in B.Tech Agriculture Engineering Admission 2026'
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

  const filtered = faqSearch.trim()
    ? faqs.filter(f => f.q.toLowerCase().includes(faqSearch.toLowerCase()) || f.a.toLowerCase().includes(faqSearch.toLowerCase()))
    : faqs;

  return (
    <PageLayout title="Agriculture Engineering">
      <SEO
        title="B.Tech Agriculture Engineering in Odisha | BEC"
        description="Study B.Tech Agriculture Engineering at BEC Bhubaneswar — AICTE-approved, BPUT-affiliated. Modern agri-labs, expert faculty, government job focus & placements. Apply 2026."
        keywords={[
          "agriculture engineering college in Bhubaneswar",
          "BTech agriculture engineering Odisha",
          "best agriculture engineering college Odisha",
          "agriculture engineering admission 2026",
          "agriculture engineering college Bhubaneswar",
          "BPUT agriculture engineering Odisha",
          "AICTE approved agriculture engineering college",
          "agriculture engineering scope India",
          "agritech course Bhubaneswar",
          "farm machinery engineering Odisha",
          "irrigation engineering course Bhubaneswar",
          "soil water conservation engineering Odisha",
          "food processing technology Bhubaneswar",
          "precision agriculture course India",
          "agriculture engineer government jobs India",
          "OJEE agriculture engineering admission",
          "agriculture engineering vs mechanical engineering",
          "smart farming technology course India"
        ]}
        canonical="https://becbbsr.ac.in/agriculture-engineering"
        ogTitle="B.Tech Agriculture Engineering at BEC Bhubaneswar | Best in Odisha"
        ogDescription="BEC Bhubaneswar offers AICTE-approved B.Tech Agriculture Engineering — Odisha's leading agri-tech engineering college. Modern labs, government job focus, 90%+ placement. Apply 2026."
        schema={pageSchema}
      />

      <div className="flex flex-col gap-16 mt-4">

        {/* ── HERO / H1 ──────────────────────────────────────────────────── */}
        <section
          aria-labelledby="agri-main-heading"
          className="bg-gradient-to-br from-green-900 via-green-800 to-primary rounded-3xl shadow-[0_30px_80px_-15px_rgba(0,80,30,0.4)] p-8 md:p-16 text-white relative overflow-hidden"
        >
          <Leaf className="absolute top-6 right-8 w-64 h-64 text-white/5 rotate-12 pointer-events-none" />
          <Sun className="absolute bottom-6 right-32 w-40 h-40 text-white/5 pointer-events-none" />

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50 font-semibold uppercase tracking-wider">
              <li><Link to="/" className="hover:text-white/80 transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-white/70">Agriculture Engineering</li>
            </ol>
          </nav>

          {/* Admission Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
            <Star className="w-3.5 h-3.5" />
            Admission 2026 Open — Apply Now
          </div>

          <h1 id="agri-main-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 text-white">
            B.Tech Agriculture Engineering<br />
            <span className="text-green-300">in Bhubaneswar — BEC Odisha</span>
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-4 max-w-3xl">
            Bhubaneswar Engineering College (BEC) offers <strong className="text-white">AICTE-approved, BPUT-affiliated B.Tech Agriculture Engineering</strong> — one of the most future-ready engineering programs in Odisha. Train with experienced faculty in modern agri-labs and launch your career in government departments, agritech companies, food processing industries, and research organizations.
          </p>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-3xl">
            India feeds 1.4 billion people. With agritech growing at 25% annually, smart farming revolution spreading, and government investment in rural engineering at an all-time high — <strong className="text-white/90">agriculture engineers from BEC are shaping the future of food</strong>.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Program Duration", value: "4 Years" },
              { label: "Placement Rate", value: "90%+" },
              { label: "Faculty Members", value: "7+" },
              { label: "Labs & Workshops", value: "5+" },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-4 text-center border border-white/10">
                <div className="text-2xl md:text-3xl font-black text-green-300">{s.value}</div>
                <div className="text-white/60 text-xs uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button id="agri-hero-apply-btn" onClick={() => setIsApplyModalOpen(true)}
              className="inline-flex items-center gap-2 bg-green-500 text-white font-black px-8 py-4 rounded-2xl hover:bg-green-400 transition-all hover:shadow-xl hover:-translate-y-0.5 text-sm uppercase tracking-wider focus:outline-none">
              <Leaf className="w-4 h-4" /> Apply Now — 2026
            </button>
            <a id="agri-hero-whatsapp-btn"
              href="https://wa.me/919437088215?text=I'm interested in B.Tech Agriculture Engineering admission 2026 at BEC Bhubaneswar"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-900 font-black px-8 py-4 rounded-2xl hover:bg-green-50 transition-all hover:shadow-xl hover:-translate-y-0.5 text-sm uppercase tracking-wider">
              <Phone className="w-4 h-4" /> WhatsApp Inquiry
            </a>
            <a id="agri-hero-call-btn" href="tel:+919437088215"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-black px-6 py-4 rounded-2xl hover:bg-white/20 transition-all text-sm uppercase tracking-wider">
              <Phone className="w-4 h-4" /> Call Admissions
            </a>
          </div>
        </section>

        {/* ── WHAT IS AGRICULTURE ENGINEERING ────────────────────────── */}
        <section aria-labelledby="what-is-agri" className="bg-white rounded-3xl p-8 md:p-14 border border-gray-100 shadow-sm">
          <h2 id="what-is-agri" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
            What is Agriculture Engineering?
          </h2>
          <div className="w-16 h-1 bg-green-600 mb-8 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5 text-gray-600 leading-relaxed text-base">
              <p>
                <strong className="text-gray-800">Agriculture Engineering</strong> is the branch of engineering that applies science, technology, and engineering principles to solve challenges in agriculture, food production, and natural resource management. It stands at the intersection of <strong className="text-gray-800">engineering precision and agricultural knowledge</strong> — making farming more productive, sustainable, and technology-driven.
              </p>
              <p>
                Agriculture engineers design and develop <strong className="text-gray-800">farm machinery and equipment</strong>, plan irrigation and drainage systems, build post-harvest storage and food processing facilities, design agricultural structures, manage soil and water conservation, and integrate emerging technologies like <strong className="text-gray-800">IoT, drones, AI, and precision agriculture</strong> into modern farming.
              </p>
              <p>
                In India, B.Tech Agriculture Engineering is a <strong className="text-gray-800">4-year undergraduate program</strong> approved by AICTE. At BEC Bhubaneswar, the program is affiliated with <strong className="text-gray-800">BPUT (Biju Patnaik University of Technology)</strong>, giving graduates a nationally recognized degree valid for government service, GATE, UPSC IES, banking (AFO), and private sector careers across India.
              </p>
              <p>
                With India being the <strong className="text-gray-800">world's second-largest food producer</strong> and agritech investments exceeding $1 billion annually, agriculture engineers are among the most important professionals in building India's food-secure future.
              </p>
            </div>

            <div className="space-y-5">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-black text-primary mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  Agriculture Engineering vs Other Streams
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-gray-500 font-bold uppercase">Factor</th>
                        <th className="text-left py-2 text-green-700 font-bold uppercase">Agri Engg</th>
                        <th className="text-left py-2 text-primary font-bold uppercase">Mech Engg</th>
                        <th className="text-left py-2 text-blue-600 font-bold uppercase">Civil Engg</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      {[
                        ["Focus", "Farming + Tech", "Industry Machines", "Roads & Buildings"],
                        ["Govt Jobs", "ADO, AAE, AFO", "JE, PWD", "JE, PWD"],
                        ["Sector", "Agri + Food", "Manufacturing", "Construction"],
                        ["Emerging", "Agritech, Drones", "Robotics, EVs", "Smart Cities"],
                        ["GATE Paper", "AG", "ME", "CE"],
                      ].map(([f, a, m, c], i) => (
                        <tr key={i} className="border-b border-gray-50">
                          <td className="py-2.5 font-semibold text-gray-500">{f}</td>
                          <td className="py-2.5 text-green-700 font-semibold">{a}</td>
                          <td className="py-2.5">{m}</td>
                          <td className="py-2.5">{c}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-base font-black text-green-800 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> Key Specializations
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Farm Machinery & Power", "Irrigation Engineering", "Soil & Water Conservation", "Food Processing Tech", "Precision Agriculture", "Post-Harvest Technology", "Renewable Energy in Agri", "Agritech & IoT", "Remote Sensing & GIS", "Agricultural Structures"].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-green-700 font-semibold">
                      <CheckCircle className="w-3 h-3 text-green-600 shrink-0" /> {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY AGRICULTURE ENGINEERING / INDUSTRY GROWTH ───────────── */}
        <section aria-labelledby="agri-growth" className="bg-gradient-to-br from-green-900 to-green-800 rounded-3xl p-8 md:p-14 text-white relative overflow-hidden">
          <Leaf className="absolute top-8 right-12 w-56 h-56 text-white/5 pointer-events-none" />
          <h2 id="agri-growth" className="text-2xl md:text-3xl font-black mb-2">
            Why Agriculture Engineering is India's Future Career
          </h2>
          <div className="w-16 h-1 bg-green-400 mb-8 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <div className="space-y-5 text-white/80 leading-relaxed">
              <p>
                India is an agricultural nation — <strong className="text-white">over 60% of the population depends on farming</strong> directly or indirectly. Yet, Indian agriculture is at a critical turning point. Changing climate, water scarcity, soil degradation, food losses, and the need for farm mechanization are creating massive demand for technology-driven solutions — exactly what <strong className="text-white">agriculture engineers provide</strong>.
              </p>
              <p>
                The Indian agritech industry is growing at a <strong className="text-white">staggering 25% annually</strong>, with investments crossing $1 billion and startups like DeHaat, Ninjacart, CropIn, and AgriBazaar becoming large-scale businesses. Drone agriculture, precision farming, IoT-based irrigation, and AI-powered crop management are no longer future technologies — they are being deployed across India's farms right now.
              </p>
              <p>
                Meanwhile, the government is investing heavily: <strong className="text-white">PM-KISAN scheme, PM Krishi Sinchai Yojana, PMFME (food processing), and the National Agriculture Policy</strong> are all creating thousands of government jobs requiring B.Tech Agriculture Engineering qualifications. For Odisha students, this is a golden moment to build a career that is both personally rewarding and nationally important.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" /> Agriculture Sector Growth Indicators
              </h3>
              {[
                { icon: "🌾", stat: "2nd Largest", desc: "India's position as global food producer" },
                { icon: "🚀", stat: "25% Growth", desc: "Annual growth rate of Indian agritech sector" },
                { icon: "💰", stat: "$1B+", desc: "Annual agritech startup investments in India" },
                { icon: "🛸", stat: "₹5,000 Cr", desc: "Agri-drone market projected by 2027" },
                { icon: "🏦", stat: "10,000+", desc: "Government agriculture engineering jobs per year" },
                { icon: "🌿", stat: "30%+", desc: "India's post-harvest food loss — engineers solve this" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 border border-white/10">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-green-300 font-black text-base">{item.stat}</div>
                    <div className="text-white/60 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Technologies Section */}
          <div>
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-green-400" /> Smart Technologies Driving Agriculture Engineering Careers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Precision Agriculture", desc: "GPS-guided machinery, variable rate technology, soil mapping, and satellite-based crop monitoring for farm efficiency.", icon: "🛰️" },
                { title: "Agricultural Drones (UAV)", desc: "Crop health monitoring, aerial spraying, soil surveying, and field mapping using DGCA-certified agricultural drones.", icon: "🚁" },
                { title: "IoT Smart Farming", desc: "Connected soil sensors, weather stations, and automated irrigation systems delivering real-time farm data to mobile apps.", icon: "📡" },
                { title: "AI & Machine Learning", desc: "Crop disease detection, yield prediction, pest monitoring, and intelligent market pricing using AI algorithms.", icon: "🤖" },
                { title: "Food Processing Automation", desc: "Automated production lines, robotic packaging, quality control systems, and cold chain management for food industries.", icon: "🏭" },
                { title: "Renewable Farm Energy", desc: "Solar irrigation pumps, biogas from crop residue, biomass energy, and wind power systems for energy-independent farms.", icon: "☀️" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-black text-white text-sm mb-2">{item.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE BEC ──────────────────────────────────────────── */}
        <section aria-labelledby="why-bec-agri" className="bg-white rounded-3xl p-8 md:p-14 border border-gray-100 shadow-sm">
          <h2 id="why-bec-agri" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
            Why Choose BEC Bhubaneswar for Agriculture Engineering?
          </h2>
          <div className="w-16 h-1 bg-green-600 mb-4 rounded-full" />
          <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-3xl">
            Choosing the right college for Agriculture Engineering in Odisha is a decision that shapes your entire career. BEC Bhubaneswar offers a combination of AICTE-approved academic quality, modern laboratory infrastructure, experienced faculty, strong government job focus, and excellent placement support — making it a top choice for agriculture engineering aspirants across Odisha and eastern India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Award className="w-6 h-6" />, title: "AICTE Approved & BPUT Affiliated", desc: "The B.Tech Agriculture Engineering program at BEC is fully approved by AICTE and affiliated with BPUT, ensuring a nationally recognized degree valid for GATE, UPSC IES, state PSC exams, banking (AFO), and private sector employment across India." },
              { icon: <Shield className="w-6 h-6" />, title: "Strong Government Job Focus", desc: "BEC's agriculture engineering curriculum is aligned with competitive exam requirements — OPSC engineering services, IBPS AFO, NABARD, FCI technical officer, and ICAR exams — with dedicated preparation support and mock test programs for government recruitment." },
              { icon: <Zap className="w-6 h-6" />, title: "Modern Agri-Tech Laboratories", desc: "Five dedicated labs — Farm Machinery Lab, Irrigation Engineering Lab, Soil & Water Conservation Lab, Food Processing Lab, and Agricultural Technology Lab — give students real hands-on experience with farm equipment, irrigation systems, and food processing machinery." },
              { icon: <GraduationCap className="w-6 h-6" />, title: "Experienced Expert Faculty", desc: "BEC's Agriculture Engineering Department is staffed by M.Tech-qualified professors with 6–10 years of teaching experience in farm machinery, irrigation, soil science, food technology, and precision agriculture. Faculty guide students through practical projects and industry-relevant research." },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Agritech & Industry Placements", desc: "Placement partners include John Deere India, Mahindra Agri, food processing companies, agritech startups, government agricultural departments, and banking sector (IBPS AFO). BEC's dedicated placement cell achieves 90%+ overall placement with mock interviews and aptitude training." },
              { icon: <Droplets className="w-6 h-6" />, title: "Odisha Agriculture Advantage", desc: "Odisha's agriculture-based economy, Mahanadi river system, government irrigation programs, and state agricultural policies create direct local job opportunities for BEC graduates — in state agriculture departments, WRD (Water Resources Department), OLM, and WALMI." },
              { icon: <Cpu className="w-6 h-6" />, title: "Agritech & Innovation Training", desc: "BEC exposes students to agritech through drone technology workshops, precision agriculture seminars, IoT smart farming training, and agritech startup support — ensuring graduates are equipped for the rapidly digitalizing agriculture sector, not just traditional farming." },
              { icon: <BookOpen className="w-6 h-6" />, title: "Affordable Fees with Scholarships", desc: "BEC provides one of the most competitive fee structures for B.Tech Agriculture Engineering in Odisha, with multiple scholarship options — SC/ST/OBC government scholarships, BEC merit scholarships, EWS fee concession, and education loans from nationalized banks." },
              { icon: <Star className="w-6 h-6" />, title: "Safe Campus with Full Facilities", desc: "BEC's campus at Patrapada features separate hostels for boys and girls, 24/7 CCTV, Wi-Fi connectivity, digital library, sports facilities, canteen, and bus transportation — a complete ecosystem for student success and well-being." },
            ].map((item, i) => (
              <div key={i} id={`agri-why-bec-${i + 1}`} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-5 group-hover:bg-green-700 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-black text-primary text-sm md:text-base mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mid-page CTA */}
          <div className="bg-green-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-white font-black text-xl mb-1">Ready to Join BEC Agriculture Engineering?</div>
              <div className="text-white/70 text-sm">2026 Admission Open. Limited Seats. Apply Before They Fill Up.</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button id="agri-mid-apply-btn" onClick={() => setIsApplyModalOpen(true)}
                className="bg-green-400 text-green-900 font-black px-6 py-3 rounded-xl hover:bg-green-300 transition-all text-sm uppercase tracking-wider focus:outline-none">
                Apply Now
              </button>
              <a id="agri-mid-whatsapp-btn"
                href="https://wa.me/919437088215?text=I'm interested in Agriculture Engineering 2026 admission at BEC Bhubaneswar"
                target="_blank" rel="noopener noreferrer"
                className="bg-white text-green-900 font-black px-6 py-3 rounded-xl hover:bg-green-50 transition-all text-sm uppercase tracking-wider">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ── DEPARTMENT & LABS ────────────────────────────────────────── */}
        <section aria-labelledby="agri-dept-labs" className="bg-gray-50 rounded-3xl p-8 md:p-14 border border-gray-100">
          <h2 id="agri-dept-labs" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
            Department of Agriculture Engineering — BEC Bhubaneswar
          </h2>
          <div className="w-16 h-1 bg-green-600 mb-6 rounded-full" />
          <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-3xl">
            The Department of Agriculture Engineering at BEC Bhubaneswar blends rigorous theoretical training with hands-on practical experience in modern, well-equipped laboratories. The curriculum is designed to prepare graduates for both government examinations and private sector careers in the rapidly growing agritech and food processing industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { id: "farm-machinery-lab", title: "Farm Machinery & Power Laboratory", icon: "🚜", desc: "BEC's Farm Machinery Lab provides hands-on training with agricultural equipment including tractors, power tillers, seed drills, harvesters, threshers, and irrigation pumps. Students learn machine design principles, maintenance procedures, performance testing, and ergonomic design for Indian farming conditions. They analyze tractor PTO systems, implement attachments, and field operation efficiency.", highlights: ["Tractor & power tiller training", "Seed drill & harvester units", "Farm implement design", "Machine performance testing", "Ergonomic equipment design"] },
              { id: "irrigation-lab", title: "Irrigation Engineering Laboratory", icon: "💧", desc: "The Irrigation Lab at BEC trains students in the design and analysis of water delivery systems for agriculture. Using hydraulic benches, flow measurement equipment, and irrigation system models, students understand open channel hydraulics, pipe flow, drip and sprinkler irrigation design, water distribution efficiency, and micro-irrigation technology — critical skills for India's water-scarce future.", highlights: ["Hydraulic flow measurement", "Drip irrigation system design", "Sprinkler layout planning", "Canal seepage analysis", "Water use efficiency testing"] },
              { id: "soil-water-lab", title: "Soil and Water Conservation Laboratory", icon: "🌱", desc: "The Soil and Water Conservation Lab enables students to analyze soil properties, measure erosion rates, test water quality, design watershed management structures, and model runoff scenarios. Using soil testing instruments, laboratory flumes, and GIS mapping tools, students develop skills in watershed planning, soil erosion control, water harvesting, and conservation engineering.", highlights: ["Soil texture & permeability tests", "Erosion measurement tools", "Watershed model simulation", "Water quality analysis", "GIS mapping training"] },
              { id: "food-processing-lab", title: "Food Processing & Post-Harvest Technology Lab", icon: "🍎", desc: "BEC's Food Processing Lab provides training in agricultural produce handling, preservation techniques, and food plant operations. Students learn grain storage engineering, cold chain logistics, food drying and dehydration, canning and packaging technology, quality control testing, and HACCP food safety systems — preparing them for careers in India's rapidly expanding food processing industry.", highlights: ["Grain storage engineering", "Food drying & dehydration", "Quality control testing", "Cold chain management", "HACCP food safety systems"] },
              { id: "agri-tech-lab", title: "Agricultural Technology Laboratory", icon: "🛰️", desc: "The Agricultural Technology Lab exposes students to modern precision farming tools and technologies. Training covers GPS and GIS applications in agriculture, drone technology fundamentals, IoT sensor setup for smart irrigation, remote sensing data analysis, automated spraying systems, and agricultural data management using software platforms — preparing students for India's agritech revolution.", highlights: ["GPS & GIS training", "Drone technology basics", "IoT sensor configuration", "Remote sensing data analysis", "Smart irrigation automation"] },
              { id: "research-facility", title: "Research & Innovation Programs", icon: "🔬", desc: "BEC encourages agriculture engineering students to pursue applied research through final-year projects, interdepartmental innovation programs, and faculty-mentored research initiatives. Students have worked on projects in solar irrigation, low-cost drip systems, precision fertigation, agritech app development, and post-harvest loss reduction — building research skills valued by ICAR and agritech companies.", highlights: ["Faculty-guided research projects", "Solar irrigation design", "Low-cost drip irrigation", "Agritech app development", "Post-harvest innovation"] },
            ].map((lab) => (
              <div key={lab.id} id={lab.id} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{lab.icon}</div>
                <h3 className="font-black text-primary text-lg mb-3">{lab.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{lab.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {lab.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100">
            <h3 className="text-xl font-black text-primary mb-6">Industry Exposure & Practical Learning</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Industrial Visits", desc: "Farm visits, irrigation project site tours, food processing plant visits, and agritech company exposure.", icon: "🏭" },
                { title: "Expert Seminars", desc: "Industry experts from John Deere, NABARD, ICAR, and agritech startups address students on current trends.", icon: "📢" },
                { title: "Skill Development", desc: "Government exam preparation, GATE coaching, soft skills, and technical skill workshops for agriculture students.", icon: "📚" },
                { title: "Startup Mentoring", desc: "Agritech business idea mentorship, incubation support, and entrepreneurship development for innovative students.", icon: "💡" },
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

        {/* ── CAREER OPPORTUNITIES ─────────────────────────────────────── */}
        <section aria-labelledby="agri-careers" className="bg-white rounded-3xl p-8 md:p-14 border border-gray-100 shadow-sm">
          <h2 id="agri-careers" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
            Career Opportunities After Agriculture Engineering
          </h2>
          <div className="w-16 h-1 bg-green-600 mb-6 rounded-full" />
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
            Agriculture Engineering graduates enjoy one of the widest career option sets among engineering disciplines — spanning prestigious government jobs, growing private sector roles, cutting-edge agritech startups, international opportunities, and higher education pathways.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Government Sector Jobs", icon: "🏛️", bg: "bg-blue-50 border-blue-100", tc: "text-blue-800", roles: ["Agriculture Development Officer (ADO)", "Assistant Agriculture Engineer (AAE)", "OPSC Engineering Services (JE/AEE)", "Agriculture Field Officer – IBPS Banks", "NABARD Grade A / Dev. Asst.", "FCI Technical Officer", "ICAR Scientist / Tech Officer", "Food Corporation of India (FCI)", "Odisha Water Resources Dept (WRD)", "Airports Authority of India – Agri Land"] },
              { title: "Private Sector & Industry", icon: "🏢", bg: "bg-green-50 border-green-100", tc: "text-green-800", roles: ["Farm Machinery Engineer – John Deere / Mahindra", "Product Design Engineer – TAFE / Escorts", "Agribusiness Manager – ITC / Cargill India", "Food Processing Engineer – Amul / Nestlé", "Quality Assurance Engineer – Britania", "Irrigation System Designer – Jain Irrigation", "Agri Supply Chain Manager – Ninjacart", "Crop Protection Specialist – Bayer / BASF", "Agricultural Consultant", "Precision Farming Manager"] },
              { title: "Agritech & Startups", icon: "🚀", bg: "bg-yellow-50 border-yellow-100", tc: "text-yellow-800", roles: ["Agritech Product Engineer – DeHaat / CropIn", "Drone Operations Engineer – ideaForge", "Smart Irrigation Engineer – Fasal / EM3 Agri", "IoT Solutions Developer – AgriEye", "AI Agriculture Analyst – AgriiBazaar", "Farm Management App Developer", "Precision Agri Consultant", "Rural Fintech Engineer – Samunnati", "Agri Data Scientist – Gramophone", "Agriculture Startup Founder"] },
            ].map((cat, i) => (
              <div key={i} className={`rounded-2xl p-6 border ${cat.bg}`}>
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className={`font-black ${cat.tc} text-sm mb-4 uppercase tracking-wide`}>{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.roles.map((r, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-600 shrink-0 mt-0.5" /> {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Odisha-specific opportunities */}
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <h3 className="font-black text-green-800 text-base mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Odisha-Specific Career Opportunities for Agriculture Engineers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Odisha Agriculture Dept",
                "Odisha Water Resources Dept (WRD)",
                "WALMI Odisha",
                "Odisha Lift Irrigation Corp",
                "NABARD Odisha Regional Office",
                "OUAT Research Farms",
                "Odisha Food Processing Policy Cos",
                "Odisha Rural Development Dept",
                "OLM (Odisha Livelihood Mission)",
                "Odisha Agritech Startups",
                "District Agriculture Offices",
                "Odisha SAMETI",
              ].map((org, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-green-700 font-semibold bg-white rounded-lg p-2.5 border border-green-100">
                  <CheckCircle className="w-3 h-3 text-green-600 shrink-0" /> {org}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FACULTY ──────────────────────────────────────────────────── */}
        <section aria-labelledby="agri-faculty" className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 id="agri-faculty" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
                Expert Faculty — Agriculture Engineering Department
              </h2>
              <div className="w-16 h-1 bg-green-600 rounded-full" />
            </div>
            <div className="hidden md:flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <Users className="w-4 h-4" /> Academic Experts
            </div>
          </div>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
            BEC's Agriculture Engineering Department is guided by dedicated M.Tech-qualified faculty with specializations in farm machinery, irrigation systems, soil science, food processing, and precision agriculture. The team combines academic depth with practical agricultural knowledge, guiding students from classroom to career.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((f, i) => (
              <div key={i} id={`agri-faculty-${i + 1}`} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-400 mb-5 group-hover:bg-green-700 group-hover:text-white transition-all">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="font-black text-primary text-sm mb-0.5">{f.name}</h3>
                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-1">{f.role}</p>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-green-100 text-green-700 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">{f.qualification}</span>
                  <span className="text-gray-400 text-[9px] font-bold">{f.experience}</span>
                </div>
                <a href={`mailto:${f.email}`} className="flex items-center gap-2 text-[10px] font-black text-primary hover:text-green-600 transition-colors uppercase tracking-widest mt-3">
                  <Mail className="w-3.5 h-3.5" /> Contact
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── SALARY TABLE ─────────────────────────────────────────────── */}
        <section aria-labelledby="agri-salary" className="bg-white rounded-3xl p-8 md:p-14 border border-gray-100 shadow-sm">
          <h2 id="agri-salary" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
            Salary of Agriculture Engineers in India (2026)
          </h2>
          <div className="w-16 h-1 bg-green-600 mb-6 rounded-full" />
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
            Agriculture engineering salaries in India are growing with the agritech boom and government investment in rural development. Government roles offer excellent stability with 7th Pay Commission benefits and allowances, while private agritech companies and food processing MNCs offer competitive market-linked packages.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-800 text-white">
                  <th className="text-left px-6 py-4 font-black text-xs uppercase tracking-wider">Experience Level</th>
                  <th className="text-left px-6 py-4 font-black text-xs uppercase tracking-wider">Salary in India (INR/Year)</th>
                  <th className="text-left px-6 py-4 font-black text-xs uppercase tracking-wider">Salary Abroad (USD/Year)</th>
                </tr>
              </thead>
              <tbody>
                {salaryData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                    <td className="px-6 py-4 font-bold text-gray-800">{row.level}</td>
                    <td className="px-6 py-4 text-green-700 font-black">{row.india}</td>
                    <td className="px-6 py-4 text-blue-700 font-semibold">{row.abroad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { org: "ADO / Govt Agriculture Dept", role: "Agriculture Development Officer", salary: "₹35,400 – ₹1,12,400/mo (Pay Level 6)" },
              { org: "NABARD", role: "Grade A Officer", salary: "₹44,500 – ₹89,150/mo" },
              { org: "ICAR", role: "Scientist / Tech Officer", salary: "₹56,100/mo (Entry Level)" },
              { org: "IBPS AFO (Banks)", role: "Agriculture Field Officer", salary: "₹36,000 – ₹63,840/mo" },
              { org: "John Deere / Mahindra Agri", role: "Farm Machinery Engineer", salary: "₹4 – ₹9 LPA" },
              { org: "Agritech Startup", role: "IoT / Precision Agri Engineer", salary: "₹5 – ₹15 LPA" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="font-black text-primary text-sm">{item.org}</div>
                <div className="text-gray-500 text-xs mb-2">{item.role}</div>
                <div className="text-green-700 font-black text-sm">{item.salary}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ADMISSION PROCESS ────────────────────────────────────────── */}
        <section aria-labelledby="agri-admission" className="bg-gradient-to-br from-green-900 to-green-800 rounded-3xl p-8 md:p-14 text-white">
          <h2 id="agri-admission" className="text-2xl md:text-3xl font-black mb-2 tracking-tight">
            Agriculture Engineering Admission 2026 — Eligibility & Process
          </h2>
          <div className="w-16 h-1 bg-green-400 mb-6 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="text-xl font-black mb-5 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> Eligibility Criteria
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Academic Qualification", value: "10+2 with Physics, Chemistry & Mathematics (PCM) or Physics, Chemistry & Biology (PCB)" },
                  { label: "Minimum Marks", value: "45% aggregate in qualifying subjects (40% for SC/ST/OBC reserved categories)" },
                  { label: "Entrance Exam (BPUT)", value: "JEE Main OR Odisha OJEE for BPUT counselling allocation" },
                  { label: "OUAT Pathway", value: "OUAT Entrance Exam for OUAT-affiliated agriculture colleges" },
                  { label: "Lateral Entry", value: "3-year Diploma holders eligible for 2nd year B.Tech via OJEE Lateral Entry" },
                  { label: "Management Quota", value: "Direct admission based on 10+2 marks — no entrance exam required at BEC" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <div className="text-green-400 text-xs font-black uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-white/80 text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black mb-5 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-400" /> Step-by-Step Admission Process
              </h3>
              <ol className="space-y-4">
                {[
                  { step: "01", title: "Visit becbbsr.ac.in", desc: "Navigate to the Admissions 2026 section on the official BEC website." },
                  { step: "02", title: "Fill Application Form", desc: "Complete the online form with personal details, academic records, and course preference." },
                  { step: "03", title: "Submit Documents", desc: "Upload 10th & 12th marksheets, JEE/OJEE/OUAT scorecard, ID proof, category certificate." },
                  { step: "04", title: "Attend Counselling", desc: "Come for direct counselling at BEC campus or participate in OJEE online counselling." },
                  { step: "05", title: "Pay Admission Fee", desc: "Confirm seat by paying online or at the college cashier. EMI options available." },
                  { step: "06", title: "Document Verification", desc: "Submit original documents at BEC admissions office to finalize your admission." },
                ].map((s) => (
                  <li key={s.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-500 text-white font-black text-sm flex items-center justify-center shrink-0">{s.step}</div>
                    <div>
                      <div className="font-black text-white text-sm">{s.title}</div>
                      <div className="text-white/60 text-xs mt-0.5">{s.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Documents + Scholarships */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <h3 className="text-base font-black mb-4">Documents Required</h3>
              <div className="grid grid-cols-1 gap-2">
                {["10th Marksheet & Certificate", "12th Marksheet & Certificate", "JEE Main / OJEE / OUAT Scorecard", "4 Passport-size Photographs", "Aadhar Card / PAN Card", "Category Certificate (SC/ST/OBC)", "Migration Certificate", "Transfer Certificate", "Medical Fitness Certificate", "Income Certificate (for scholarship)"].map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                    <CheckCircle className="w-3 h-3 text-green-400 shrink-0" /> {doc}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <h3 className="text-base font-black mb-4">Scholarships & Financial Aid</h3>
              <div className="space-y-3">
                {[
                  { name: "BEC Merit Scholarship", desc: "Top academic performers get fee concession" },
                  { name: "Odisha SC/ST Scholarship", desc: "Full state government scholarship" },
                  { name: "OBC Post Matric Scholarship", desc: "Central + state government support" },
                  { name: "EWS Fee Concession", desc: "Economically weaker section benefit" },
                  { name: "PM Scholarship Scheme", desc: "For defence/police personnel wards" },
                  { name: "Bank Education Loan", desc: "SBI, UCO Bank — subsidized rates" },
                ].map((s, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-3">
                    <div className="font-black text-green-400 text-xs">{s.name}</div>
                    <div className="text-white/60 text-xs">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CAMPUS & LOCATION ─────────────────────────────────────────── */}
        <section aria-labelledby="agri-campus" className="bg-white rounded-3xl p-8 md:p-14 border border-gray-100 shadow-sm">
          <h2 id="agri-campus" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
            Campus, Location & Student Life at BEC Bhubaneswar
          </h2>
          <div className="w-16 h-1 bg-green-600 mb-6 rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5 text-gray-600 text-base leading-relaxed">
              <p>
                BEC is located at <strong className="text-gray-800">Patrapada, Bhubaneswar, Odisha 751019</strong> — in Bhubaneswar's fast-growing educational zone, close to NH-16 and well-connected by city buses. The campus is approximately <strong className="text-gray-800">12 km from Bhubaneswar city centre</strong> and accessible from all major parts of the city via BEC's own bus service.
              </p>
              <p>
                As a full-facility engineering campus, BEC offers agriculture engineering students a complete learning environment — from air-conditioned smart classrooms and modern agri-labs to a well-stocked digital library with NPTEL access, journal subscriptions, and agricultural engineering reference materials.
              </p>
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-3">
                <h3 className="font-black text-primary text-sm">Contact & Location</h3>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Patrapada, Bhubaneswar, Odisha 751019, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-green-600 shrink-0" />
                  <a href="tel:+919437088215" className="text-primary font-bold hover:underline">+91 94370 88215</a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-green-600 shrink-0" />
                  <a href="mailto:agr@becbbsr.ac.in" className="text-primary font-bold hover:underline">agr@becbbsr.ac.in</a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: "🏫", title: "Safe Wi-Fi Campus", desc: "Fully Wi-Fi enabled campus with 24/7 CCTV security across all labs, classrooms, and common areas." },
                { icon: "🛌", title: "Separate Hostels", desc: "Boys and girls hostels with resident wardens, mess, common rooms, and excellent connectivity." },
                { icon: "🚌", title: "Campus Bus Service", desc: "BEC runs college buses covering major Bhubaneswar city routes for commuting students daily." },
                { icon: "📚", title: "Digital Library", desc: "Agri-engineering journals, NPTEL access, research databases, and physical agricultural engineering reference books." },
                { icon: "⚽", title: "Sports & Recreation", desc: "Playgrounds, indoor sports, cultural clubs, and events for complete student personality development." },
                { icon: "🍽️", title: "Canteen & Mess", desc: "Hygienic, affordable dining facility on campus with nutritious daily meals for students." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-black text-primary text-sm mb-0.5">{item.title}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPLORE OTHER PROGRAMS ────────────────────────────────────── */}
        <section aria-labelledby="agri-related" className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <h2 id="agri-related" className="text-xl md:text-2xl font-black text-primary mb-2 tracking-tight">
            Explore Other Programs at BEC Bhubaneswar
          </h2>
          <div className="w-16 h-1 bg-green-600 mb-6 rounded-full" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Aeronautical Engineering", href: "/aeronautical-engineering", icon: "✈️" },
              { name: "B.Tech CSE", href: "/cse", icon: "💻" },
              { name: "B.Tech AI & DS", href: "/ai-ds", icon: "🤖" },
              { name: "Mechanical Engineering", href: "/mechanical", icon: "⚙️" },
              { name: "Fee Structure 2026", href: "/fees", icon: "💰" },
              { name: "Placements", href: "/placements", icon: "🏆" },
              { name: "MBA Program", href: "/mba", icon: "📊" },
              { name: "Contact Admissions", href: "/contact", icon: "📞" },
            ].map((link, i) => (
              <Link key={i} to={link.href} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group">
                <span className="text-xl">{link.icon}</span>
                <span className="font-bold text-primary text-xs group-hover:text-green-700 transition-colors">{link.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section aria-labelledby="agri-faq">
          <div className="mb-8">
            <h2 id="agri-faq" className="text-2xl md:text-3xl font-black text-primary mb-2 tracking-tight">
              Frequently Asked Questions — Agriculture Engineering
            </h2>
            <div className="w-16 h-1 bg-green-600 mb-4 rounded-full" />
            <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
              Everything students and parents want to know about B.Tech Agriculture Engineering — from career scope and government job pathways to salary details, admission process at BEC, lab facilities, and much more.
            </p>
          </div>

          <div className="mb-6">
            <input
              id="agri-faq-search"
              type="search"
              placeholder="Search FAQs — e.g. 'salary', 'ICAR', 'government jobs', 'eligibility'..."
              value={faqSearch}
              onChange={e => setFaqSearch(e.target.value)}
              className="w-full md:w-1/2 border border-gray-200 rounded-xl px-5 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
            />
          </div>

          <div className="flex flex-col gap-3">
            {faqsToRender.length > 0
              ? faqsToRender.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)
              : <p className="text-gray-500 text-sm py-6 text-center">No results for "{faqSearch}". Try another keyword.</p>
            }
          </div>

          {!isSearching && filtered.length > 5 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="bg-green-50 hover:bg-green-100 text-green-700 font-bold px-6 py-3 rounded-xl border border-green-100 transition-all text-sm inline-flex items-center gap-2"
              >
                {showAllFaqs ? (
                  <>Show Less FAQs <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>View All 50+ FAQs <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
          )}

          <div className="mt-8 bg-green-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-green-100">
            <div>
              <div className="font-black text-green-800 text-base">Have more questions about Agriculture Engineering at BEC?</div>
              <div className="text-gray-500 text-sm">Our admissions team will answer all your questions.</div>
            </div>
            <a id="agri-faq-whatsapp-btn"
              href="https://wa.me/919437088215?text=I have a question about Agriculture Engineering at BEC Bhubaneswar"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-700 text-white font-black px-6 py-3 rounded-xl hover:bg-green-600 transition-all text-sm uppercase tracking-wider whitespace-nowrap">
              <Phone className="w-4 h-4" /> WhatsApp Our Counsellors
            </a>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
        <section id="agri-apply-section" aria-labelledby="agri-final-cta"
          className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-[0_30px_80px_-15px_rgba(0,80,30,0.4)]">
          <Leaf className="absolute top-4 right-8 w-56 h-56 text-white/5 rotate-12 pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Star className="w-3.5 h-3.5" /> 2026 Admission Open — Limited Seats
            </div>
            <h2 id="agri-final-cta" className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
              Build India's Food Future — Start Your<br />Agriculture Engineering Career at BEC
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Join BEC Bhubaneswar's AICTE-approved B.Tech Agriculture Engineering. Modern agri-labs. Experienced faculty. Government job focus. 90%+ placement record. BPUT affiliated. Your agritech career starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button id="agri-final-apply-btn" onClick={() => setIsApplyModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-green-900 font-black px-10 py-4 rounded-2xl hover:bg-green-50 transition-all hover:shadow-xl hover:-translate-y-1 text-sm uppercase tracking-wider focus:outline-none">
                <Leaf className="w-4 h-4" /> Apply Now — Agriculture Engineering 2026
              </button>
              <a id="agri-final-whatsapp-btn"
                href="https://wa.me/919437088215?text=I want to apply for B.Tech Agriculture Engineering 2026 at BEC Bhubaneswar"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white font-black px-8 py-4 rounded-2xl hover:bg-green-400 transition-all hover:shadow-xl hover:-translate-y-1 text-sm uppercase tracking-wider">
                <Phone className="w-4 h-4" /> WhatsApp for Admission Help
              </a>
              <a id="agri-final-call-btn" href="tel:+919437088215"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-black px-8 py-4 rounded-2xl hover:bg-white/20 transition-all text-sm uppercase tracking-wider">
                <Phone className="w-4 h-4" /> Call: +91 94370 88215
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["✅ AICTE Approved", "✅ BPUT Affiliated", "✅ Govt Job Focus", "✅ Modern Agri-Labs", "✅ Safe Campus", "✅ Scholarships Available"].map((b, i) => (
                <span key={i} className="bg-white/10 text-white/80 font-bold text-xs px-4 py-2 rounded-full">{b}</span>
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
                  className="w-full py-4 bg-green-700 text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-green-800 transition-all shadow-md"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <h3 id="modal-title" className="text-xl font-black text-primary uppercase tracking-tighter mb-1">BEC Admissions Inquiry 2026</h3>
                  <p className="text-xs text-gray-400 font-medium">B.Tech Agriculture Engineering — Direct Support</p>
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
                      className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all"
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
                      className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all"
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
                      className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all"
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
                        value="Agriculture Engg"
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
                      className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all resize-none"
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
                  className="bg-green-700 text-white font-black py-4 rounded-xl uppercase text-xs tracking-[0.2em] shadow-lg flex items-center justify-center gap-2 hover:bg-green-800 transition-all disabled:opacity-75 animate-pulse"
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
