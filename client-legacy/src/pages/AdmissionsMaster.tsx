import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SEO } from '../components/SEO';
import { 
  GraduationCap, 
  ClipboardCheck, 
  FileCheck, 
  Landmark, 
  Trophy, 
  Phone, 
  Download, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Camera,
  MapPin,
  Mail,
  Building
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const ADMISSION_CONTENT: Record<string, any> = {
  '/admission/programme': {
    title: 'Academic Programmes',
    subtitle: 'Choose your path to a successful engineering career',
    icon: GraduationCap,
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg',
    content: [
      {
        heading: 'B.Tech (Bachelor of Technology)',
        text: 'Bhubaneswar Engineering College (BEC) offers a 4-year undergraduate B.Tech program in various elite disciplines. Our curriculum is designed to merge historical engineering principles with future technology requirements like AI, Data Science, and Additive Manufacturing.',
        bullets: [
          'Aeronautical Engineering',
          'Aircraft Maintenance Engineering',
          'Agriculture Engineering',
          'Food Engineering',
          'Civil Engineering',
          'Civil and Environmental Engineering',
          'Computer Science Engineering',
          'CSE (Data Science)',
          'Electrical Engineering',
          'Electrical and Computer Engineering',
          'Mechanical Engineering',
          'Mechanical Mechatronics Engineering'
        ]
      },
      {
        heading: 'MBA (Master of Business Administration)',
        text: 'Our 2-year MBA program focuses on creating visionary managers for the global industry. Specializations include Marketing, Finance, HR, and Agri-Business with a strong focus on technical entrepreneurship.',
        bullets: [
          'Marketing',
          'Finance',
          'Human Resource',
          'Agri-Business'
        ]
      },
      {
        heading: 'Diploma (Engineering)',
        text: 'We provide 3-year Diploma programs for students aiming for early entry into the technical workforce, focusing on practical skills and workshop training.',
        bullets: [
          'Aeronautical Engineering',
          'Aircraft Maintenance Engineering (AME)',
          'Civil Engineering',
          'Electrical Engineering',
          'Mechanical Engineering'
        ]
      }
    ]
  },
  '/admission/procedure': {
    title: 'Admission Procedure',
    subtitle: 'Simple steps to join the BEC legacy',
    icon: ClipboardCheck,
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629486/becweb/campus_interior.jpg',
    content: [
      {
        heading: '1. Initial Inquiry',
        text: 'Prospective students can visit our campus in Bhubaneswar or fill out the online inquiry form. Our admission counselors will guide you through the available courses and career paths.',
      },
      {
        heading: '2. Eligibility Check',
        text: 'Admissions are based on OJEE, JEE Main, or CET counseling. Students must meet the minimum percentage criteria in 10+2 (Science) with Mathematics, Physics, and Chemistry/Biology for B.Tech.',
      },
      {
        heading: '3. Form Submission',
        text: 'After selecting the course, submit the duly filled application form along with the registration fee at the college admission office or via our online portal.',
      },
      {
        heading: '4. Final Documentation',
        text: 'Verified candidates must complete the final enrollment by submitting the required original documents and the first installment of the institutional fee.',
      }
    ]
  },
  '/admission/documents': {
    title: 'Documents Required',
    subtitle: 'Essential checklist for your admission file',
    icon: FileCheck,
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629470/becweb/placement_hero.jpg',
    content: [
      {
        heading: 'Mandatory Certificates',
        text: 'All students must carry at least two sets of photocopies along with the original documents for verification at the time of admission.',
        bullets: [
          '10th Board Certificate & Marksheet',
          '12th (Intermediate) Marksheet & Certificate',
          'CLC / Transfer Certificate (Original)',
          'Migration Certificate (for other boards)',
          'Rank Card (JEE Main / OJEE)',
          'Conduct Certificate',
          '5 Recent Passport size photographs'
        ]
      },
      {
        heading: 'Identity & Address Proof',
        text: 'Government approved IDs are required for hostel registration and scholarship filings.',
        bullets: ['Aadhar Card', 'Resident / Nativity Certificate', 'Parent Identity Proof']
      }
    ]
  },
  '/admission/bank-loan': {
    title: 'Bank Loan Procedures',
    subtitle: 'Financial support for your academic journey',
    icon: Landmark,
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629485/becweb/campus_exterior.jpg',
    content: [
      {
        heading: 'Education Loan Support',
        text: 'BEC provides all necessary documentation (Bonafide certificate, Fee structure, etc.) to help students secure education loans from nationalized and private banks.',
      },
      {
        heading: 'Partner Banks',
        text: 'Most of our students successfully obtain loans from banks like SBI, PNB, Union Bank, and Axis Bank. Our administrative office has a dedicated cell to assist in the documentation process.',
      },
      {
        heading: 'Vidya Lakshmi Portal',
        text: 'Students can also apply via the Government of India portal for simplified loan processing and interest subsidies.',
      }
    ]
  },
  '/admission/scholarship': {
    title: 'Scholarship Schemes',
    subtitle: 'Rewarding merit and supporting every dream',
    icon: Trophy,
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629484/becweb/building_front.jpg',
    content: [
      {
        heading: 'Government Scholarships',
        text: 'BEC students are eligible for various State and Central government scholarship schemes. We ensure every eligible student receives the financial aid they deserve.',
        bullets: [
          'Prerana Scholarship (SC/ST/OBC/SEBC)',
          'Medhabruti (Higher Education Scholarship)',
          'National Scholarship Portal (NSP)',
          'Post-Matric Scholarship for Minorities'
        ]
      },
      {
        heading: 'Institutional Merit Scholarship',
        text: 'BEC offers special fee waivers and rewards for students securing top ranks in University exams and state-level entrance tests.',
      }
    ]
  },
  '/admission/contacts': {
    title: 'Admission Contacts',
    subtitle: 'Reach out to our expert counselors',
    icon: Phone,
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629487/becweb/stairs.jpg',
    content: [
      {
        heading: 'City Office (Bhubaneswar)',
        text: 'Visit us for counseling and direct inquiries in the heart of the capital city.',
        bullets: ['Address: Bhubaneswar, Odisha, 752054', 'Email: info@becbbsr.ac.in', 'Phone: +91 94370 90875']
      },
      {
        heading: 'Campus Admission Cell',
        text: 'Our specialized cell at the campus is open from 9:30 AM to 5:00 PM for document verification and campus tours.',
        bullets: ['Helpline: +91 94382 05247', 'Fax: 0674 - 2301131']
      }
    ]
  },
  '/admission/prospectus': {
    title: 'Download Prospectus',
    subtitle: 'Everything about BEC in one neat file',
    icon: Download,
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629485/becweb/campus_exterior.jpg',
    content: [
      {
        heading: 'Academic Brochure 2026-27',
        text: 'Download our comprehensive prospectus to learn about the infrastructure, faculty profiles, department details, and the unique 40-acre campus environment at BEC.',
      },
      {
        heading: 'Inside the Guide',
        text: 'The prospectus contains detailed information about our industry tie-ups, placement records from the last 15 years, and international research achievements.',
        bullets: ['Placement Records', 'Campus Tour Details', 'Fee Structures', 'Rules & Regulations']
      }
    ]
  }
};

const ADMISSION_SEO: Record<string, { title: string; description: string; keywords: string[] }> = {
  '/admission/programme': {
    title: 'BTech & MBA Academic Programmes | Admissions 2026',
    description: 'Explore B.Tech (Aeronautical, CSE, Civil, ME, EE, Agri), MBA, and Diploma course details, eligibility criteria, and branches offered at Bhubaneswar Engineering College (BEC).',
    keywords: ['BTech courses Odisha', 'MBA specialization Bhubaneswar', 'diploma engineering programs', 'aeronautical engineering Odisha', 'BEC academic programs']
  },
  '/admission/procedure': {
    title: 'Engineering Admission Procedure & Eligibility | Session 2026',
    description: 'Learn how to apply for B.Tech, MBA, or Diploma at Bhubaneswar Engineering College (BEC). Step-by-step admission process via JEE Main, OJEE, and direct counseling.',
    keywords: ['BTech admission procedure Odisha', 'engineering admission eligibility', 'OJEE counseling BEC', 'how to apply engineering college Bhubaneswar']
  },
  '/admission/documents': {
    title: 'Admissions Document Checklist | BEC Bhubaneswar',
    description: 'Complete checklist of mandatory certificates, CLC, migration, JEE/OJEE rank cards, and identity proofs required for admission at Bhubaneswar Engineering College.',
    keywords: ['documents for BTech admission', 'engineering admission certificates checklist', 'admissions documents required Odisha', 'BEC enrollment proof']
  },
  '/admission/bank-loan': {
    title: 'Education Bank Loan & Financial Assistance | BEC',
    description: 'Secure your future at Bhubaneswar Engineering College (BEC) with easy education bank loans. Support for SBI, PNB, Union Bank, and Vidya Lakshmi portal loans.',
    keywords: ['education loan for BTech Odisha', 'engineering bank loan documentation', 'Vidya Lakshmi portal BEC', 'student loan support Bhubaneswar']
  },
  '/admission/scholarship': {
    title: 'Scholarship Schemes & Merit Rewards | BEC Bhubaneswar',
    description: 'Apply for Prerana, Medhabruti, NSP, and post-matric government scholarships at Bhubaneswar Engineering College. Merit-based fee waivers available.',
    keywords: ['BTech scholarship Odisha', 'Prerana scholarship BEC', 'engineering merit scholarships', 'Medhabruti scholarship eligibility']
  },
  '/admission/contacts': {
    title: 'Admission Cell Contacts & Counselors Helpline | BEC',
    description: 'Contact Bhubaneswar Engineering College (BEC) admission cell. Reach our expert career counselors on campus or at our city office for quick registration.',
    keywords: ['BEC admission helpline', 'engineering college contact Bhubaneswar', 'admission counselor numbers Odisha', 'BEC office location']
  },
  '/admission/prospectus': {
    title: 'Download Academic Prospectus & Brochure | BEC',
    description: 'Download the official Bhubaneswar Engineering College (BEC) prospectus 2026-27 to explore the 40-acre campus, infrastructure, faculty profiles, and placement records.',
    keywords: ['BEC prospectus download', 'engineering college brochure Odisha', 'BTech courses prospectus', 'BEC campus guide pdf']
  }
};

export const AdmissionsMaster = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      offset: 50
    });
    AOS.refresh();
  }, []);

  const { pathname } = useLocation();
  const data = ADMISSION_CONTENT[pathname] || ADMISSION_CONTENT['/admission/programme'];
  const seoData = ADMISSION_SEO[pathname] || ADMISSION_SEO['/admission/programme'];
  const Icon = data.icon;

  const [activeTab, setActiveTab] = useState<'btech' | 'diploma' | 'mba'>('btech');
  const [userQual, setUserQual] = useState<string>('');
  const [eligibilityResult, setEligibilityResult] = useState<{ eligible: boolean; text: string } | null>(null);

  const checkEligibility = (qual: string) => {
    setUserQual(qual);
    if (!qual) {
      setEligibilityResult(null);
      return;
    }
    
    let result = { eligible: false, text: "" };
    switch (qual) {
      case '10th':
        result = {
          eligible: true,
          text: "🎉 You qualify for our 3-Year Diploma in Engineering! You can choose from Aeronautical, AME, Civil, Electrical, or Mechanical."
        };
        break;
      case '12th-pcm':
        result = {
          eligible: true,
          text: "🚀 Excellent! You qualify for all 12 B.Tech degree branches (Aeronautical, CSE, Agriculture, Civil, Electrical, Food, Mechanical, etc.) and all Diploma programs! Admissions are processed via OJEE / JEE Main counseling."
        };
        break;
      case '12th-other':
        result = {
          eligible: false,
          text: "⚠️ Direct admission to B.Tech requires Physics, Chemistry & Math in Class 12. However, you can register for our management courses or contact our counselors for direct seats."
        };
        break;
      case 'diploma':
        result = {
          eligible: true,
          text: "⚡ Fantastic! You qualify for Direct Lateral Entry into the 2nd Year (3rd Semester) of B.Tech Degree! Skip the first year and complete your B.Tech in just 3 years."
        };
        break;
      case 'graduate':
        result = {
          eligible: true,
          text: "🎓 Congratulations! You qualify for our 2-Year Post-Graduate MBA Program! You can choose from Marketing, Finance, HR, and Agri-Business specializations."
        };
        break;
      default:
        result = { eligible: false, text: "" };
    }
    setEligibilityResult(result);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-inter">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />
      <Navbar onAdminClick={() => {}} />

      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover grayscale-[30%] brightness-[40%]" 
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6" data-aos="fade-up">
           <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Icon className="w-5 h-5 text-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Admissions Hub</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">
             {data.title.split(' ')[0]} <span className="text-accent">{data.title.split(' ').slice(1).join(' ')}</span>
           </h1>
           <p className="text-white/70 text-sm md:text-lg font-medium max-w-2xl mx-auto italic">
             "{data.subtitle}"
           </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {pathname === '/admission/programme' ? (
              // UNIQUE AND PREMIUM ADMISSIONS INTERACTIVE DASHBOARD
              <div className="flex flex-col gap-10">
                
                {/* 1. Quick Eligibility Checker Widget */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 md:p-10 bg-gradient-to-br from-[#1E3A8A] to-[#0b1c3a] rounded-[2.5rem] text-white shadow-xl relative overflow-hidden border border-white/5"
                >
                  <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                     <GraduationCap className="w-64 h-64 text-accent" />
                  </div>
                  <div className="relative z-10 flex flex-col gap-6">
                     <div>
                        <span className="text-accent text-[9px] font-black uppercase tracking-[0.25em] block mb-2">Smart Admission Bot</span>
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Check Your Eligibility Instantly</h3>
                        <p className="text-white/60 font-medium text-xs leading-relaxed max-w-lg mt-2">
                           Select your current educational qualification below to find out which elite engineering and management programs you qualify for at BEC.
                        </p>
                     </div>
                     
                     <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <select 
                          value={userQual}
                          onChange={(e) => checkEligibility(e.target.value)}
                          className="w-full sm:w-auto min-w-[240px] px-5 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl text-xs font-black uppercase tracking-widest text-white border border-white/10 outline-none cursor-pointer transition-all"
                        >
                           <option value="" className="text-navy-950 font-semibold">-- Select Qualification --</option>
                           <option value="10th" className="text-navy-950 font-semibold">Class 10th Passed</option>
                           <option value="12th-pcm" className="text-navy-950 font-semibold">Class 12th Passed (PCM)</option>
                           <option value="12th-other" className="text-navy-950 font-semibold">Class 12th Passed (Other)</option>
                           <option value="diploma" className="text-navy-950 font-semibold">Diploma in Engineering Holder</option>
                           <option value="graduate" className="text-navy-950 font-semibold">Graduate Degree / Bachelor</option>
                        </select>
                        
                        {userQual && (
                          <button 
                            onClick={() => { setUserQual(''); setEligibilityResult(null); }}
                            className="text-[10px] font-black text-white/50 hover:text-white uppercase tracking-widest transition-colors py-2 px-4"
                          >
                             Reset
                          </button>
                        )}
                     </div>

                     {eligibilityResult && (
                       <motion.div 
                         initial={{ opacity: 0, scale: 0.98 }}
                         animate={{ opacity: 1, scale: 1 }}
                         className={`p-6 rounded-2xl border backdrop-blur-md flex items-start gap-4 ${
                           eligibilityResult.eligible 
                             ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-100' 
                             : 'bg-amber-500/10 border-amber-500/20 text-amber-100'
                         }`}
                       >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            eligibilityResult.eligible ? 'bg-emerald-500/20' : 'bg-amber-500/20'
                          }`}>
                             {eligibilityResult.eligible ? '✓' : '!'}
                          </div>
                          <div className="flex-1">
                             <p className="text-[13px] font-semibold leading-relaxed">{eligibilityResult.text}</p>
                             {eligibilityResult.eligible && (
                               <Link 
                                 to="/admission_query"
                                 className="inline-flex items-center gap-2 mt-4 text-[10px] font-black uppercase tracking-widest text-accent hover:underline"
                               >
                                  Apply Online Now &rarr;
                               </Link>
                             )}
                          </div>
                       </motion.div>
                     )}
                  </div>
                </motion.div>

                {/* 2. Interactive Intake & Branch Portfolio Matrix */}
                <div className="p-8 md:p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col gap-8">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
                      <div>
                         <h3 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tighter font-poppins">Programs Matrix</h3>
                         <p className="text-slate-400 text-xs font-medium mt-1">Explore all branches, intake capacity, and quick facts.</p>
                      </div>
                      
                      {/* Premium Tab Bar Selector */}
                      <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100/50 self-start md:self-auto">
                         {[
                           { key: 'btech', label: 'B.Tech Degree' },
                           { key: 'diploma', label: 'Diploma Poly' },
                           { key: 'mba', label: 'MBA Post-Grad' }
                         ].map(tab => (
                           <button
                             key={tab.key}
                             onClick={() => setActiveTab(tab.key as any)}
                             className={`px-4 py-2 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all ${
                               activeTab === tab.key 
                                 ? 'bg-primary text-white shadow-md' 
                                 : 'text-slate-400 hover:text-primary'
                             }`}
                           >
                              {tab.label}
                           </button>
                         ))}
                      </div>
                   </div>

                   {/* Tab Contents */}
                   <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6"
                      >
                         {activeTab === 'btech' && (
                           <div className="space-y-6">
                              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                 Bhubaneswar Engineering College (BEC) offers a 4-year undergraduate B.Tech program in 12 advanced disciplines, fully approved by AICTE and affiliated to BPUT.
                              </p>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 {data.content[0].bullets.map((bullet: string, bidx: number) => (
                                   <div key={bidx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group">
                                      <div className="flex items-center gap-3">
                                         <CheckCircle2 className="w-4 h-4 text-accent" />
                                         <span className="text-[11px] font-black text-primary uppercase tracking-tight">{bullet}</span>
                                      </div>
                                      <span className="bg-white px-2.5 py-1 rounded-lg text-[9px] font-black text-primary/50 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                         {['Agriculture Engineering', 'Computer Science Engineering', 'Mechanical Engineering', 'Civil Engineering', 'CSE (Data Science)', 'Electrical Engineering'].includes(bullet) ? '60 Seats' : '30 Seats'}
                                      </span>
                                   </div>
                                 ))}
                              </div>
                           </div>
                         )}

                         {activeTab === 'diploma' && (
                           <div className="space-y-6">
                              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                 We provide a 3-year Diploma in Engineering affiliated to SCTE & VT, Odisha. Focusing heavily on job-oriented vocational and practical industrial skills.
                              </p>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 {data.content[2].bullets.map((bullet: string, bidx: number) => (
                                   <div key={bidx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group">
                                      <div className="flex items-center gap-3">
                                         <CheckCircle2 className="w-4 h-4 text-accent" />
                                         <span className="text-[11px] font-black text-primary uppercase tracking-tight">{bullet}</span>
                                      </div>
                                      <span className="bg-white px-2.5 py-1 rounded-lg text-[9px] font-black text-primary/50 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                         {bullet.includes('Aero') || bullet.includes('AME') ? '30 Seats' : '60 Seats'}
                                      </span>
                                   </div>
                                 ))}
                              </div>
                           </div>
                         )}

                         {activeTab === 'mba' && (
                           <div className="space-y-6">
                              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                 Our 2-year MBA program focuses on creating visionary managers for global business. We offer 5 premium dual specializations aligned with industry demands.
                              </p>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 {data.content[1].bullets.map((bullet: string, bidx: number) => (
                                   <div key={bidx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group">
                                      <div className="flex items-center gap-3">
                                         <CheckCircle2 className="w-4 h-4 text-accent" />
                                         <span className="text-[11px] font-black text-primary uppercase tracking-tight">{bullet}</span>
                                      </div>
                                      <span className="bg-white px-2.5 py-1 rounded-lg text-[9px] font-black text-primary/50 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                         120 Seats
                                      </span>
                                   </div>
                                 ))}
                              </div>
                           </div>
                         )}
                      </motion.div>
                   </AnimatePresence>
                </div>
              </div>
            ) : (
              // ORIGINAL LIST FOR OTHER PAGES
              data.content.map((section: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 md:p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
                >
                  <div className="flex items-start gap-8">
                    <div className="hidden md:flex w-12 h-12 rounded-2xl bg-primary/5 items-center justify-center text-primary font-black shrink-0 border border-primary/10">
                      0{idx + 1}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-black text-primary mb-6 tracking-tighter uppercase font-poppins">
                        {section.heading}
                      </h2>
                      <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 font-medium">
                        {section.text}
                      </p>

                      {section.bullets && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.bullets.map((bullet: string, bidx: number) => {
                            let href: string | undefined = undefined;
                            if (bullet.includes('Prerana') || bullet.includes('Medhabruti')) {
                              href = 'https://scholarship.odisha.gov.in/website/home';
                            } else if (bullet.includes('National Scholarship') || bullet.includes('Minorities')) {
                              href = 'https://scholarships.gov.in/';
                            }

                            if (href) {
                              return (
                                <a 
                                  key={bidx} 
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-primary/5 hover:border-accent/30 hover:shadow-md transition-all duration-300 group/link cursor-pointer"
                                >
                                  <div className="flex items-center gap-3">
                                     <CheckCircle2 className="w-4 h-4 text-accent" />
                                     <span className="text-[11px] font-bold text-primary uppercase tracking-tight group-hover/link:text-accent transition-colors">{bullet}</span>
                                  </div>
                                  <span className="text-[9px] font-black text-accent uppercase tracking-widest bg-accent/10 px-2.5 py-1 rounded-lg opacity-80 group-hover/link:opacity-100 transition-all shadow-sm">Portal &rarr;</span>
                                </a>
                              );
                            }

                            return (
                              <div key={bidx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100/50 group-hover:bg-white group-hover:border-accent/30 transition-all duration-500">
                                <CheckCircle2 className="w-4 h-4 text-accent" />
                                <span className="text-[11px] font-bold text-primary uppercase tracking-tight">{bullet}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}

            {pathname === '/admission/prospectus' && (
              <div className="flex justify-center mt-4">
                 <button className="px-12 py-5 bg-primary text-white rounded-3xl font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-accent transition-all shadow-xl shadow-primary/20">
                    <Download className="w-5 h-5" /> Download Full PDF
                 </button>
              </div>
            )}
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
             {/* Action Card */}
             <div className="p-8 bg-[#0F172A] rounded-[2rem] text-white shadow-2xl relative overflow-hidden" data-aos="fade-left">
                <div className="relative z-10">
                   <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Ready to Apply?</h3>
                   <p className="text-slate-400 text-xs leading-relaxed mb-8">
                      The admissions for session 2026-27 are filling up fast. Secure your seat today.
                   </p>
                   <Link to="/admission_query" className="w-full flex items-center justify-center gap-3 py-4 bg-accent hover:bg-white hover:text-primary text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-accent/20">
                      Apply Now <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
                <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-accent/20 blur-[60px] rounded-full" />
             </div>

             {/* Quick Links */}
             <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">More Admissions</h4>
                <div className="space-y-2">
                   {[
                     { name: 'Admission Procedure', path: '/admission/procedure' },
                     { name: 'Required Documents', path: '/admission/documents' },
                     { name: 'Loans & Financing', path: '/admission/bank-loan' },
                     { name: 'Scholarships', path: '/admission/scholarship' },
                     { name: 'Admission Contacts', path: '/admission/contacts' }
                   ].filter(l => l.path !== pathname).map((link, i) => (
                     <Link 
                       key={i} 
                       to={link.path}
                       className="flex items-center justify-between p-4 rounded-xl hover:bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-tight transition-all group"
                     >
                        {link.name}
                        <ArrowRight className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                     </Link>
                   ))}
                </div>
             </div>

             {/* Dynamic Badge */}
             <div className="relative aspect-square rounded-[2rem] overflow-hidden group">
                <img 
                  src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629465/becweb/chairman.jpg" 
                  alt="Chairman" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                   <p className="text-white text-[10px] font-medium leading-relaxed italic mb-3">
                      "Choose an institution that doesn't just teach technology, but shapes innovators."
                   </p>
                   <p className="text-accent text-[9px] font-black uppercase tracking-widest">Er. Alok Ranjan Mallick</p>
                </div>
             </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};
