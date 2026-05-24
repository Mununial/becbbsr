import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
        bullets: ['Aeronautical Engineering', 'Computer Science & Engineering', 'Civil & Environmental Engineering', 'Electrical & Computer Science', 'Mechanical Engineering', 'Agriculture Engineering']
      },
      {
        heading: 'MBA (Master of Business Administration)',
        text: 'Our 2-year MBA program focuses on creating visionary managers for the global industry. Specializations include Marketing, Finance, HR, and Operations Management with a strong focus on technical entrepreneurship.',
        bullets: ['Affiliated to BPUT', 'Industry Focused Curriculum', 'Live Projects & Internships']
      },
      {
        heading: 'Diploma (Engineering)',
        text: 'We provide 3-year Diploma programs for students aiming for early entry into the technical workforce, focusing on practical skills and workshop training.',
        bullets: ['Aeronautical Engineering', 'Mechanical Engineering', 'Civil Engineering']
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
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629462/becweb/hero-bg.jpg',
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

export const AdmissionsMaster = () => {
  const { pathname } = useLocation();
  const data = ADMISSION_CONTENT[pathname] || ADMISSION_CONTENT['/admission/programme'];
  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-inter">
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
          <div className="lg:col-span-8 flex flex-col gap-16">
            {data.content.map((section: any, idx: number) => (
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
                        {section.bullets.map((bullet: string, bidx: number) => (
                          <div key={bidx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100/50 group-hover:bg-white group-hover:border-accent/30 transition-all duration-500">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            <span className="text-[11px] font-bold text-primary uppercase tracking-tight">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

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
