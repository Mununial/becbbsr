import { useState, useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';
import { useLocation } from 'react-router-dom';
import { 
  Mail, ShieldAlert, Users, Award, HeartHandshake, Scale, Compass, CheckCircle, 
  AlertTriangle, Quote, Check, Shield, FileText, Send, Phone, Lock, ChevronDown, Flag
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';

interface CommitteeMember {
  name: string;
  role: string;
  collegeRole: string;
  image: string;
  email: string;
}

interface CommitteeTheme {
  bannerBg: string;
  accentColor: string;
  badgeStyle: string;
  roleBadgeStyle: string;
  cardStyle: string;
  dividerColor: string;
  buttonHoverStyle: string;
  imageBorderHover: string;
}

interface Committee {
  id: string;
  title: string;
  description: string;
  objective: string;
  icon: React.ComponentType<any>;
  theme: CommitteeTheme;
  members: CommitteeMember[];
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .filter(n => {
      const clean = n.toLowerCase().replace(/\./g, '');
      return !['dr', 'er', 'mr', 'mrs', 'miss', 'ms', 'prof'].includes(clean);
    })
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
};

const committeesData: Committee[] = [
  {
    id: "anti-ragging",
    title: "Anti-Ragging Committee",
    description: "Ensures a strict ragging-free campus environment and handles any ragging-related complaints immediately with zero tolerance.",
    objective: "To secure a completely ragging-free campus, creating a friendly and positive atmosphere for freshmen and returning students alike.",
    icon: ShieldAlert,
    theme: {
      bannerBg: "from-rose-950 via-red-900 to-rose-950 border-rose-500/20",
      accentColor: "text-rose-400",
      badgeStyle: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      roleBadgeStyle: "bg-rose-600 text-white border-rose-700",
      cardStyle: "hover:border-rose-300 hover:shadow-rose-100/30 rounded-xl",
      dividerColor: "bg-rose-100 group-hover:bg-rose-400",
      buttonHoverStyle: "hover:bg-rose-600 hover:text-white hover:border-rose-600",
      imageBorderHover: "group-hover:border-rose-400"
    },
    members: [
      {
        name: "Dr. Bishnu Prasad Mishra",
        role: "President",
        collegeRole: "Professor & Head, Mechanical Engg.",
        image: "/facilities/STAFF/Dr. Bishnu Prasad Mishra(mech hod ).jpg",
        email: "mechanical@becbbsr.ac.in"
      },
      {
        name: "Mr. Saswat Mishra",
        role: "Convener",
        collegeRole: "Assistant Professor & Head, Civil Engg.",
        image: "/facilities/STAFF/Mr. Saswat Mishra(Civil hod).png",
        email: "civil@becbbsr.ac.in"
      },
      {
        name: "Mr. Santanu Mohapatra",
        role: "Member",
        collegeRole: "Assistant Professor, Mechanical Engg.",
        image: "/facilities/STAFF/SANTANU MOHAPATRA (MECH).jpg",
        email: "santanu.mech@becbbsr.ac.in"
      },
      {
        name: "Mr. Hemanta Mahananda",
        role: "Member",
        collegeRole: "Assistant Professor, Aeronautical Engg.",
        image: "/facilities/STAFF/HEMANTA MAHANANDA (AERO).jpg",
        email: "hemanta.aero@becbbsr.ac.in"
      },
      {
        name: "Mrs. Sunita Sahu",
        role: "Member",
        collegeRole: "Assistant Professor, CSE",
        image: "/facilities/STAFF/SunitaSahu(CSE).jpg",
        email: "sunita.cse@becbbsr.ac.in"
      },
      {
        name: "Mr. Sushil Harichandan",
        role: "Member",
        collegeRole: "Assistant Professor, Agriculture Engg.",
        image: "/facilities/STAFF/SUSHILHARICHANDAN (AGRI).jpg",
        email: "sushil.agri@becbbsr.ac.in"
      }
    ]
  },
  {
    id: "women-cell",
    title: "Women Grievance Cell",
    description: "Focuses on women protection, equality, and addressing any complaints or issues faced by female students and faculty members.",
    objective: "To provide a secure and supportive environment for women on campus, encouraging empowerment and zero discrimination.",
    icon: Users,
    theme: {
      bannerBg: "from-fuchsia-950 via-purple-900 to-fuchsia-950 border-purple-500/20",
      accentColor: "text-purple-300",
      badgeStyle: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      roleBadgeStyle: "bg-purple-600 text-white border-purple-700",
      cardStyle: "hover:border-purple-300 hover:shadow-purple-100/30 rounded-[2.5rem]",
      dividerColor: "bg-purple-100 group-hover:bg-purple-400",
      buttonHoverStyle: "hover:bg-purple-600 hover:text-white hover:border-purple-600",
      imageBorderHover: "group-hover:border-purple-400"
    },
    members: [
      {
        name: "Er. Anita Behera",
        role: "Chairperson",
        collegeRole: "Associate Professor & Head, CSE",
        image: "/facilities/STAFF/Anita Behera(cse hod).jpg",
        email: "cse@becbbsr.ac.in"
      },
      {
        name: "Er. Ananyaa Mohanty",
        role: "Convenor",
        collegeRole: "Assistant Professor & Head, Agriculture Engg.",
        image: "/facilities/STAFF/ANANYAA MOHANTY(agriculte hod).jpg",
        email: "agriculture@becbbsr.ac.in"
      },
      {
        name: "Dr. Sonali Swagatika",
        role: "Member",
        collegeRole: "Assistant Professor, Agriculture Engg.",
        image: "/facilities/STAFF/Dr. Sonali Swagatika (AGRI).jpg",
        email: "sonali.agri@becbbsr.ac.in"
      },
      {
        name: "Mrs. Lipsa Tanaya Mishra",
        role: "Member",
        collegeRole: "Professor, CSE",
        image: "/facilities/STAFF/LIPSA TANAYA MISHRA(CSE).png",
        email: "lipsa.cse@becbbsr.ac.in"
      },
      {
        name: "Mrs. Snigdharani Jena",
        role: "Member",
        collegeRole: "Assistant Professor, Agriculture Engg.",
        image: "/facilities/STAFF/Snigdharani Jena (AGRI).jpg",
        email: "snigdharani.agri@becbbsr.ac.in"
      },
      {
        name: "Ms. Soyeenika Mishra",
        role: "Member",
        collegeRole: "Assistant Professor, MBA",
        image: "/facilities/STAFF/Snigdharani Jena (MBA).jpg",
        email: "snigdharani.mba@becbbsr.ac.in"
      },
      {
        name: "Mrs. Rupali Sahoo",
        role: "Member",
        collegeRole: "Assistant Professor, Mechanical Engg.",
        image: "/facilities/STAFF/RUPALI SAHOO (MECH).jpg",
        email: "rupali.mech@becbbsr.ac.in"
      }
    ]
  },
  {
    id: "discipline",
    title: "Discipline Committee",
    description: "Maintains code of conduct, ethical standards, safety protocols, and campus decorum among the student body.",
    objective: "To foster self-discipline, safety awareness, and high moral standards to keep the learning environment peaceful and productive.",
    icon: Award,
    theme: {
      bannerBg: "from-slate-900 via-navy-950 to-slate-900 border-blue-500/20",
      accentColor: "text-blue-400",
      badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      roleBadgeStyle: "bg-blue-600 text-white border-blue-700",
      cardStyle: "hover:border-blue-300 hover:shadow-blue-100/30 rounded-2xl",
      dividerColor: "bg-blue-100 group-hover:bg-blue-400",
      buttonHoverStyle: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
      imageBorderHover: "group-hover:border-blue-400"
    },
    members: [
      {
        name: "Dr. Sangram Keshari Samal",
        role: "Chairman",
        collegeRole: "Professor & Head, Aeronautical Engg.",
        image: "/facilities/STAFF/SANGRAM KESHARI SAMAL (aero hod).jpg",
        email: "aero@becbbsr.ac.in"
      },
      {
        name: "Mr. Swagat Prasad Das",
        role: "Coordinator",
        collegeRole: "Assistant Professor, Aeronautical Engg.",
        image: "/facilities/STAFF/Swagat Prasad Das (AERO).jpg",
        email: "swagat.aero@becbbsr.ac.in"
      },
      {
        name: "Mr. Ashis Kumar Behera",
        role: "Member",
        collegeRole: "Assistant Professor & Head, MBA",
        image: "/facilities/STAFF/Ashis Kumar Behera(mba hod).jpg",
        email: "mba@becbbsr.ac.in"
      },
      {
        name: "Mr. Pratik Kumar Mohapatra",
        role: "Member",
        collegeRole: "Assistant Professor, Aeronautical Engg.",
        image: "/facilities/STAFF/Pratik kumar Mohapatra (AERO).jpg",
        email: "pratik.aero@becbbsr.ac.in"
      },
      {
        name: "Mrs. Geetanjali Mohanty",
        role: "Member",
        collegeRole: "Assistant Professor, Mechanical Engg.",
        image: "/facilities/STAFF/Geetanjali Mohanty (MECH).jpg",
        email: "geetanjali.mech@becbbsr.ac.in"
      },
      {
        name: "Mr. Manmeshu Kumar Swain",
        role: "Member",
        collegeRole: "Assistant Professor, CSE",
        image: "/facilities/STAFF/MANMESHU KUMAR SWAIN (CSE).jpg",
        email: "manmeshu.cse@becbbsr.ac.in"
      }
    ]
  },
  {
    id: "grievance",
    title: "Grievance Redressal Cell",
    description: "Acts as a primary channel for students and staff to raise genuine academic or administrative concerns for fair evaluation and swift resolution.",
    objective: "To establish a transparent and responsive platform to resolve grievances, ensuring fair treatment for all members of the BEC family.",
    icon: HeartHandshake,
    theme: {
      bannerBg: "from-teal-950 via-emerald-900 to-teal-950 border-emerald-500/20",
      accentColor: "text-emerald-400",
      badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      roleBadgeStyle: "bg-emerald-600 text-white border-emerald-700",
      cardStyle: "hover:border-emerald-300 hover:shadow-emerald-100/30 rounded-3xl",
      dividerColor: "bg-emerald-100 group-hover:bg-emerald-400",
      buttonHoverStyle: "hover:bg-emerald-600 hover:text-white hover:border-emerald-600",
      imageBorderHover: "group-hover:border-emerald-400"
    },
    members: [
      {
        name: "Prof. (Dr.) B.N. Biswal",
        role: "Chairman",
        collegeRole: "Director, BEC Bhubaneswar",
        image: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629467/becweb/director.jpg",
        email: "director@becbbsr.ac.in"
      },
      {
        name: "Mr. Srikanta Kumar Sahoo",
        role: "Coordinator",
        collegeRole: "Assistant Professor, CSE",
        image: "/facilities/STAFF/MR. SRIKANTA KUMAR SAHOO (CSE).jpg",
        email: "srikanta.cse@becbbsr.ac.in"
      },
      {
        name: "Miss Priyata Prangya Sahoo",
        role: "Member",
        collegeRole: "Assistant Professor, CSE",
        image: "/facilities/STAFF/Miss PriyataPrangya Sahoo (CSE).jpg",
        email: "priyata.cse@becbbsr.ac.in"
      },
      {
        name: "Mr. Suraj Kumar Sahoo",
        role: "Member",
        collegeRole: "Assistant Professor, Aeronautical Engg.",
        image: "/facilities/STAFF/Suraj Kumar Sahoo (AERO).jpg",
        email: "suraj.aero@becbbsr.ac.in"
      }
    ]
  },
  {
    id: "sc-st",
    title: "SC/ST Committee",
    description: "Ensures equal opportunities, protection of rights, and addresses grievances of Scheduled Caste and Scheduled Tribe students and staff at BEC.",
    objective: "To provide a safe, inclusive, and supportive environment for SC/ST community members, prevent discrimination, and ensure all statutory benefits are accessible.",
    icon: Flag,
    theme: {
      bannerBg: "from-amber-950 via-orange-900 to-amber-950 border-amber-500/20",
      accentColor: "text-amber-400",
      badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      roleBadgeStyle: "bg-amber-600 text-white border-amber-700",
      cardStyle: "hover:border-amber-300 hover:shadow-amber-100/30 rounded-xl",
      dividerColor: "bg-amber-100 group-hover:bg-amber-400",
      buttonHoverStyle: "hover:bg-amber-600 hover:text-white hover:border-amber-600",
      imageBorderHover: "group-hover:border-amber-400"
    },
    members: [
      {
        name: "Dr. Bishnu Prasad Mishra",
        role: "Chairman",
        collegeRole: "Professor & Head, Mechanical Engg.",
        image: "/facilities/STAFF/Dr. Bishnu Prasad Mishra(mech hod ).jpg",
        email: "mechanical@becbbsr.ac.in"
      },
      {
        name: "Mr. Srikanta Kumar Sahoo",
        role: "Liaison Officer",
        collegeRole: "Assistant Professor, CSE",
        image: "/facilities/STAFF/MR. SRIKANTA KUMAR SAHOO (CSE).jpg",
        email: "srikanta.cse@becbbsr.ac.in"
      },
      {
        name: "Mr. Hemanta Mahananda",
        role: "Member",
        collegeRole: "Assistant Professor, Aeronautical Engg.",
        image: "/facilities/STAFF/HEMANTA MAHANANDA (AERO).jpg",
        email: "hemanta.aero@becbbsr.ac.in"
      },
      {
        name: "Mrs. Snigdharani Jena",
        role: "Member",
        collegeRole: "Assistant Professor, Agriculture Engg.",
        image: "/facilities/STAFF/Snigdharani Jena (AGRI).jpg",
        email: "snigdharani.agri@becbbsr.ac.in"
      }
    ]
  }
];

export const Committees = () => {
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState('anti-ragging');

  // simulated grievance form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    type: 'Academic',
    message: ''
  });

  // active discipline accordion index
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // Synchronize state with URL hash on change
  useEffect(() => {
    const cleanHash = hash.replace('#', '');
    if (cleanHash && committeesData.some(c => c.id === cleanHash)) {
      setActiveTab(cleanHash);
    }
  }, [hash]);

  const activeCommittee = committeesData.find(c => c.id === activeTab) || committeesData[0];
  const ActiveIcon = activeCommittee.icon;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', rollNo: '', type: 'Academic', message: '' });
      }, 5000);
    }
  };

  return (
    <PageLayout title="College Committees">
      <SEO 
        title="College Committees &amp; Redressal Cells | BEC Bhubaneswar"
        description="Learn about the Anti-Ragging, Women Protection, Grievance Redressal, and Discipline committees at Bhubaneswar Engineering College. View committee members and guidelines."
        keywords={[
          "BEC college committees",
          "anti ragging committee Bhubaneswar",
          "women grievance cell BEC",
          "grievance redressal cell engineering college",
          "college discipline committee Odisha"
        ]}
      />
      
      <div className="flex flex-col gap-10 mt-4 font-poppins">

        {/* Header Intro Banner */}
        <section className="bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900 text-white rounded-[2.5rem] p-8 md:p-14 text-center relative overflow-hidden border border-white/5 shadow-2xl">
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
               backgroundSize: '30px 30px'
             }}
           />
           <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
           <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-primary/20 rounded-full blur-[70px] translate-y-1/2 pointer-events-none" />

           <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full">
                 <Scale className="w-3.5 h-3.5" /> Institutional Administration
              </span>
              <h2 className="text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none max-w-3xl mx-auto">
                 Campus <span className="text-accent italic">Committees</span> & Cells
              </h2>
              <p className="text-white/50 font-medium leading-relaxed text-xs md:text-sm max-w-2xl mx-auto font-inter">
                 Ensuring safety, equality, transparency and strict campus discipline with our specialized college committees.
              </p>
           </div>
        </section>

        {/* Dynamic Tab Navigation */}
        <div className="flex justify-center border-b border-slate-100 pb-1 w-full overflow-x-auto">
          <div className="flex bg-white/60 backdrop-blur-md p-1.5 rounded-2xl border border-slate-100 shadow-sm gap-2">
            {committeesData.map((c) => {
              const TabIcon = c.icon;
              const isSelected = activeTab === c.id;
              
              let selectedTabColor = 'bg-primary';
              if (isSelected) {
                if (c.id === 'anti-ragging') selectedTabColor = 'bg-rose-600 shadow-rose-600/20';
                if (c.id === 'women-cell') selectedTabColor = 'bg-purple-600 shadow-purple-600/20';
                if (c.id === 'discipline') selectedTabColor = 'bg-blue-600 shadow-blue-600/20';
                if (c.id === 'grievance') selectedTabColor = 'bg-emerald-600 shadow-emerald-600/20';
                if (c.id === 'sc-st') selectedTabColor = 'bg-amber-600 shadow-amber-600/20';
              }

              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveTab(c.id);
                    window.location.hash = c.id;
                  }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 relative whitespace-nowrap ${
                    isSelected 
                      ? `${selectedTabColor} text-white shadow-lg` 
                      : 'text-slate-500 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5 shrink-0" />
                  {c.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Committee Detail Panel */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* Committee Banner */}
              <div className={`bg-gradient-to-br ${activeCommittee.theme.bannerBg} text-white rounded-[2.5rem] p-6 lg:p-10 relative overflow-hidden border shadow-2xl transition-all duration-500`}>
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:20px_20px]" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <span className={`border px-3.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest inline-block ${activeCommittee.theme.badgeStyle}`}>
                      <span className="flex items-center gap-1.5">
                        <ActiveIcon className="w-3 h-3" /> Official Board
                      </span>
                    </span>
                    <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter leading-tight italic">
                      {activeCommittee.title}
                    </h3>
                    <p className="text-white/70 font-medium text-xs md:text-sm leading-relaxed font-inter">
                      {activeCommittee.description}
                    </p>
                  </div>
                  <div className="lg:col-span-4 bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-lg space-y-2">
                    <div className={`flex items-center gap-1.5 ${activeCommittee.theme.accentColor}`}>
                      <Compass className="w-3.5 h-3.5" />
                      <p className="text-[9px] font-black tracking-widest uppercase italic">Key Directive</p>
                    </div>
                    <p className="text-white/80 text-xs font-semibold leading-relaxed font-inter">
                      {activeCommittee.objective}
                    </p>
                  </div>
                </div>
              </div>

              {/* ──────────────────────────────────────────────────────────── */}
              {/* DESIGN 1: ANTI-RAGGING COMMITTEE (ZERO TOLERANCE ALERT STYLE) */}
              {/* ──────────────────────────────────────────────────────────── */}
              {activeTab === 'anti-ragging' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Warning Guidelines (Left Column) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="bg-rose-50 border border-rose-100 rounded-3xl p-6 space-y-4">
                      <div className="flex items-center gap-3 text-rose-600">
                        <AlertTriangle className="w-6 h-6 shrink-0" />
                        <h4 className="text-sm font-black uppercase tracking-wider">Strict Anti-Ragging Directives</h4>
                      </div>
                      <p className="text-xs text-rose-900/80 font-medium leading-relaxed font-inter">
                        As per Hon'ble Supreme Court of India & AICTE guidelines, BEC follows a strict <strong>Zero Tolerance Policy</strong> regarding ragging.
                      </p>
                      <ul className="space-y-3 font-inter text-xs text-slate-700">
                        {[
                          "Any conduct physical, verbal or written that has the effect of teasing or treating a fresher with rudeness is punishable.",
                          "Indulging in rowdy or undisciplined activities causing annoyance, hardship or psychological harm to any student is banned.",
                          "Abetment to ragging, criminal conspiracy to rag, public nuisance, and injury to body will lead to immediate FIR registry.",
                          "The Anti-Ragging Squad conducts surprise checks across college hostels, mess, and outer campus nodes 24/7."
                        ].map((item, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start">
                            <span className="w-4 h-4 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{idx + 1}</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3 border-t border-rose-200/50 flex flex-col gap-2">
                        <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">National Ragging Helpline</span>
                        <div className="flex items-center gap-2 text-rose-950 font-black text-sm">
                          <Phone className="w-4 h-4 text-rose-600" />
                          <span>1800-180-5522 (Toll Free)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 text-white rounded-3xl p-6 relative overflow-hidden border border-white/5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
                      <div className="relative z-10 space-y-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-600/20 text-rose-400 flex items-center justify-center">
                          <Shield className="w-4 h-4" />
                        </div>
                        <h5 className="font-black text-xs uppercase tracking-widest text-white">How to report ragging?</h5>
                        <p className="text-[11px] text-white/60 leading-relaxed font-inter">
                          Students can report any incident directly to the President/Convener listed on the right, drop an anonymous letter in the Complaint Box near the Principal's office, or send an email.
                        </p>
                        <a href="mailto:anti-ragging@becbbsr.ac.in" className="inline-flex items-center gap-1 text-[10px] font-black text-rose-400 uppercase tracking-wider hover:text-white transition-colors pt-1">
                          Report Instantly <Mail className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Members Grid (Right Column) */}
                  <div className="lg:col-span-7 space-y-4">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Authorized Committee Members</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeCommittee.members.map((member) => (
                        <div 
                          key={`${member.name}-${member.collegeRole}`}
                          className="bg-white border border-slate-100 rounded-2xl p-4 flex gap-4 items-center shadow-sm hover:shadow-md hover:border-rose-200 transition-all duration-300 group"
                        >
                          <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-50 flex items-center justify-center transition-all duration-300 group-hover:border-rose-400">
                            {member.image ? (
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
                            ) : (
                              <span className="font-bold text-slate-500 text-sm">{getInitials(member.name)}</span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="px-2 py-0.5 bg-rose-50 text-rose-600 border border-rose-100 rounded text-[8px] font-black uppercase tracking-wider inline-block mb-1">
                              {member.role}
                            </span>
                            <h5 className="font-black text-primary text-xs uppercase truncate group-hover:text-rose-600 transition-colors">
                              {member.name}
                            </h5>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider truncate mt-0.5">
                              {member.collegeRole}
                            </p>
                          </div>
                          <a 
                            href={`mailto:${member.email}`}
                            className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:bg-rose-600 hover:text-white hover:border-rose-600 flex items-center justify-center shrink-0 transition-all"
                            title={`Email ${member.name}`}
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ──────────────────────────────────────────────────────────── */}
              {/* DESIGN 2: WOMEN GRIEVANCE CELL (EMPOWERMENT ELEGANT STYLE) */}
              {/* ──────────────────────────────────────────────────────────── */}
              {activeTab === 'women-cell' && (
                <div className="space-y-10">
                  {/* Quote and Counseling Panel */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <div className="lg:col-span-7 bg-gradient-to-tr from-purple-900 via-fuchsia-900 to-indigo-950 text-white rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden border border-purple-500/10 shadow-lg">
                      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                      <Quote className="w-12 h-12 text-purple-300/20 mb-6" />
                      <div className="space-y-4 relative z-10">
                        <blockquote className="text-base md:text-xl font-bold italic tracking-wide leading-relaxed font-poppins text-purple-100">
                          "There is no limit to what we, as women, can accomplish. Our college is committed to ensuring every female student and staff member feels safe, respected, and fully empowered to excel."
                        </blockquote>
                        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                          <div className="w-10 h-10 rounded-full bg-purple-200 border border-purple-400 overflow-hidden">
                            <img src="/facilities/STAFF/Anita Behera(cse hod).jpg" alt="Er. Anita Behera" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <cite className="not-italic font-black text-xs uppercase tracking-wider block text-white">Er. Anita Behera</cite>
                            <span className="text-[10px] text-purple-300 font-bold uppercase tracking-widest block">Chairperson, Women Grievance Cell</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-white border border-purple-100 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-sm space-y-4">
                      <div className="space-y-3">
                        <span className="px-3 py-1 bg-purple-50 text-purple-600 border border-purple-100 rounded-full text-[9px] font-black uppercase tracking-widest inline-block">
                          Confidential Counseling
                        </span>
                        <h4 className="font-black text-primary text-sm uppercase tracking-wide">Safe Space Support Circles</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-inter">
                          We provide immediate counseling support and guidance for girls face-to-face or via email. Any queries, harassment concerns, or safety reports are kept <strong>100% confidential</strong>.
                        </p>
                      </div>

                      <div className="p-4 bg-purple-50/50 border border-purple-100/50 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Lock className="w-5 h-5 text-purple-600" />
                          <div>
                            <h5 className="font-black text-[10px] text-primary uppercase tracking-wide">Encrypted Reporting Portal</h5>
                            <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider font-inter">Safe, secure and confidential</p>
                          </div>
                        </div>
                        <a href="mailto:wgc@becbbsr.ac.in" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                          Email Helpdesk
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Members Card Grid - Rounded Staggered Panels */}
                  <div className="space-y-6">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] text-center">Empowerment Board Members</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {activeCommittee.members.map((member) => (
                        <div 
                          key={`${member.name}-${member.collegeRole}`}
                          className="bg-white border border-purple-50/80 rounded-[2rem] p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:border-purple-200 hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-500" />
                          <span className="absolute top-4 right-4 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 bg-purple-50 text-purple-600 border border-purple-100 rounded">
                            {member.role}
                          </span>
                          
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-100 shrink-0 bg-slate-50 mt-4 group-hover:scale-105 transition-transform duration-300">
                            {member.image ? (
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                              <span className="font-bold text-purple-500 text-base">{getInitials(member.name)}</span>
                            )}
                          </div>
                          
                          <h5 className="font-black text-primary text-xs uppercase tracking-wide mt-4 truncate w-full group-hover:text-purple-600 transition-colors">
                            {member.name}
                          </h5>
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1.5 min-h-[14px]">
                            {member.collegeRole}
                          </p>
                          
                          <div className="w-10 h-0.5 bg-purple-100 my-3 group-hover:w-16 transition-all duration-300" />
                          
                          <a 
                            href={`mailto:${member.email}`}
                            className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 flex items-center justify-center transition-all"
                            title={`Email ${member.name}`}
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ──────────────────────────────────────────────────────────── */}
              {/* DESIGN 3: DISCIPLINE COMMITTEE (STRUCTURED EXECUTIVE STYLE)  */}
              {/* ──────────────────────────────────────────────────────────── */}
              {activeTab === 'discipline' && (
                <div className="space-y-8">
                  {/* Spotlight: Chairman Card at top */}
                  {activeCommittee.members.length > 0 && (
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-md bg-slate-50 shrink-0 relative">
                        <img 
                          src={activeCommittee.members[0].image} 
                          alt={activeCommittee.members[0].name} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
                          {activeCommittee.members[0].role}
                        </div>
                      </div>
                      <div className="flex-1 space-y-4 text-center md:text-left">
                        <div className="space-y-1">
                          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Committee Leadership</span>
                          <h4 className="font-black text-primary text-xl uppercase tracking-tight">{activeCommittee.members[0].name}</h4>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{activeCommittee.members[0].collegeRole}</p>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed font-inter max-w-xl">
                          As Chairman, Dr. Sangram Keshari Samal supervises campus decorum, student safety guidelines, and acts on ethical violations with the discipline squad.
                        </p>
                        <a 
                          href={`mailto:${activeCommittee.members[0].email}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all"
                        >
                          <Mail className="w-3.5 h-3.5" /> Contact Chairman
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Rest of Members & Rules Accordion */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Rules Accordion (Left Side) */}
                    <div className="lg:col-span-5 space-y-4">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">General Code of Conduct</h4>
                      <div className="space-y-3 font-inter">
                        {[
                          {
                            title: "Attendance Regulation",
                            content: "Students are strictly required to maintain a minimum of 75% attendance in theory and practical laboratory classes to qualify for university semester end examinations."
                          },
                          {
                            title: "Uniform & Identity Badges",
                            content: "All students must attend college in prescribed uniform sets. Carrying valid physical college Identity Cards (IDs) at all times inside campus bounds is mandatory."
                          },
                          {
                            title: "Banned Substances & Behavior",
                            content: "Consumption of tobacco, alcohol, drugs, or damaging college infrastructure will attract immediate suspension, financial penalty, and expulsion from campus hostels."
                          },
                          {
                            title: "Hostel Rules & Outings",
                            content: "Hostel residents must adhere to strict entry timings (6:30 PM gate close). Night outings require written permission from the Warden and Warden-in-Charge."
                          }
                        ].map((rule, idx) => (
                          <div 
                            key={idx}
                            className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
                          >
                            <button
                              onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                              className="w-full px-5 py-3.5 text-left font-black text-xs uppercase tracking-wide text-primary hover:bg-slate-50/50 flex justify-between items-center transition-all"
                            >
                              <span>{rule.title}</span>
                              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeAccordion === idx ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {activeAccordion === idx && (
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: 'auto' }}
                                  exit={{ height: 0 }}
                                  className="overflow-hidden"
                                >
                                  <p className="px-5 pb-4 text-xs text-slate-500 leading-relaxed pt-1 border-t border-slate-50">
                                    {rule.content}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Committee Members Grid (Right Side) */}
                    <div className="lg:col-span-7 space-y-4">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Committee Coordinators</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {activeCommittee.members.slice(1).map((member) => (
                          <div 
                            key={`${member.name}-${member.collegeRole}`}
                            className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-4 hover:border-blue-200 transition-all duration-300 shadow-sm"
                          >
                            <div className="w-14 h-14 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-slate-50 flex items-center justify-center">
                              {member.image ? (
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                              ) : (
                                <span className="font-bold text-slate-500 text-xs">{getInitials(member.name)}</span>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-[8px] font-black text-blue-600 bg-blue-50 border border-blue-100 rounded px-1.5 py-0.5 uppercase tracking-wide inline-block mb-1">
                                {member.role}
                              </span>
                              <h5 className="font-black text-primary text-xs uppercase truncate">
                                {member.name}
                              </h5>
                              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider truncate">
                                {member.collegeRole}
                              </p>
                            </div>
                            <a 
                              href={`mailto:${member.email}`}
                              className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:bg-blue-600 hover:text-white flex items-center justify-center shrink-0 transition-all"
                            >
                              <Mail className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ──────────────────────────────────────────────────────────── */}
              {/* DESIGN 4: GRIEVANCE REDRESSAL CELL (FRIENDLY SPLIT-COLUMN)   */}
              {/* ──────────────────────────────────────────────────────────── */}
              {activeTab === 'grievance' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Grievance Submission Form (Left Column) */}
                  <div className="lg:col-span-6 bg-white border border-emerald-100 rounded-3xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-3 text-emerald-600 pb-2 border-b border-slate-100">
                      <HeartHandshake className="w-6 h-6 shrink-0" />
                      <div>
                        <h4 className="text-sm font-black uppercase tracking-wider text-primary">Grievance Submission</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Submit feedback or academic queries</p>
                      </div>
                    </div>

                    {formSubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center space-y-3"
                      >
                        <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                        <h5 className="font-black text-xs text-emerald-800 uppercase tracking-widest">Grievance Filed Successfully</h5>
                        <p className="text-xs text-emerald-900/70 font-semibold leading-relaxed font-inter">
                          Your concern has been logged and routed to our Redressal Board. A tracking reference ID has been sent to your email.
                        </p>
                        <div className="text-[10px] bg-white border border-emerald-100 px-3 py-1.5 rounded-lg text-slate-500 font-bold uppercase tracking-widest inline-block font-mono">
                          REF ID: GR-{Math.floor(Math.random() * 90000) + 10000}
                        </div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-4 font-inter text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="font-black text-slate-500 uppercase tracking-wider text-[9px] block">Full Name *</label>
                            <input 
                              type="text" 
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleFormChange}
                              placeholder="e.g. Rahul Sharma"
                              className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-300 font-medium text-slate-700" 
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="font-black text-slate-500 uppercase tracking-wider text-[9px] block">Email Address *</label>
                            <input 
                              type="email" 
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleFormChange}
                              placeholder="e.g. rahul@example.com"
                              className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-300 font-medium text-slate-700" 
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="font-black text-slate-500 uppercase tracking-wider text-[9px] block">Roll Number / ID</label>
                            <input 
                              type="text" 
                              name="rollNo"
                              value={formData.rollNo}
                              onChange={handleFormChange}
                              placeholder="e.g. 2301105001"
                              className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-300 font-medium text-slate-700" 
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="font-black text-slate-500 uppercase tracking-wider text-[9px] block">Category *</label>
                            <select 
                              name="type"
                              value={formData.type}
                              onChange={handleFormChange}
                              className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-300 font-medium text-slate-700"
                            >
                              <option value="Academic">Academic Concern</option>
                              <option value="Hostel & Mess">Hostel &amp; Mess Issue</option>
                              <option value="Administrative">Administrative Fee/Docs</option>
                              <option value="Others">Others</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-black text-slate-500 uppercase tracking-wider text-[9px] block">Your Grievance Concern *</label>
                          <textarea 
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleFormChange}
                            placeholder="Provide details of your concerns clearly..."
                            className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-300 font-medium text-slate-700 resize-none"
                          />
                        </div>

                        <button 
                          type="submit" 
                          className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest text-[10px] rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
                        >
                          Submit Grievance <Send className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Grievance Members Vertical List (Right Column) */}
                  <div className="lg:col-span-6 space-y-4">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] px-1">Redressal Board Members</h4>
                    <div className="space-y-3">
                      {activeCommittee.members.map((member) => (
                        <div 
                          key={`${member.name}-${member.collegeRole}`}
                          className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 hover:border-emerald-200 transition-all duration-300 shadow-sm"
                        >
                          <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-50 flex items-center justify-center">
                            {member.image ? (
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                              <span className="font-bold text-slate-500 text-sm">{getInitials(member.name)}</span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[8px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5 uppercase tracking-wide inline-block mb-1">
                              {member.role}
                            </span>
                            <h5 className="font-black text-primary text-xs uppercase truncate">
                              {member.name}
                            </h5>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider truncate mt-0.5">
                              {member.collegeRole}
                            </p>
                          </div>
                          <a 
                            href={`mailto:${member.email}`}
                            className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center shrink-0 transition-all"
                            title={`Email ${member.name}`}
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex gap-3.5 items-start">
                      <FileText className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-black text-[10px] text-primary uppercase tracking-wide">AICTE Grievance Mandate</h5>
                        <p className="text-[10px] text-slate-400 leading-relaxed font-inter mt-0.5">
                          Resolutions are taken up within 7-15 business days under strict evaluation boards to ensure ethical standards.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* ──────────────────────────────────────────────────────────── */}
              {/* DESIGN 5: SC/ST COMMITTEE (RIGHTS & INCLUSION STYLE)         */}
              {/* ──────────────────────────────────────────────────────────── */}
              {activeTab === 'sc-st' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Rights Info Panel (Left Column) */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="bg-amber-50 border border-amber-100 rounded-3xl p-6 space-y-4">
                      <div className="flex items-center gap-3 text-amber-700">
                        <Flag className="w-6 h-6 shrink-0" />
                        <h4 className="text-sm font-black uppercase tracking-wider">Rights & Protections</h4>
                      </div>
                      <p className="text-xs text-amber-900/80 font-medium leading-relaxed font-inter">
                        As per the <strong>SC/ST (Prevention of Atrocities) Act</strong> and UGC guidelines, BEC is committed to ensuring equal opportunities and zero discrimination for SC/ST students and staff.
                      </p>
                      <ul className="space-y-3 font-inter text-xs text-slate-700">
                        {[
                          "Reservation of seats and scholarships as per Govt. of Odisha norms for SC/ST students is strictly implemented.",
                          "Any act of discrimination, caste-based slur, or exclusion against SC/ST members invites immediate disciplinary action.",
                          "The committee conducts periodic awareness programs and sensitization workshops for all students and staff.",
                          "SC/ST students can avail free coaching, remedial classes, and career guidance through dedicated sessions."
                        ].map((item, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start">
                            <span className="w-4 h-4 bg-amber-200 text-amber-700 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{idx + 1}</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3 border-t border-amber-200/50 flex flex-col gap-2">
                        <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest">National SC/ST Helpline</span>
                        <div className="flex items-center gap-2 text-amber-950 font-black text-sm">
                          <Phone className="w-4 h-4 text-amber-600" />
                          <span>14566 (UGC Helpline)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-900 text-white rounded-3xl p-6 relative overflow-hidden border border-white/5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                      <div className="relative z-10 space-y-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center">
                          <Shield className="w-4 h-4" />
                        </div>
                        <h5 className="font-black text-xs uppercase tracking-widest text-white">How to report discrimination?</h5>
                        <p className="text-[11px] text-white/60 leading-relaxed font-inter">
                          SC/ST students or staff can directly approach the Chairman or Liaison Officer, submit a written complaint to the Principal's office, or report via email. All complaints are treated with strict confidentiality.
                        </p>
                        <a href="mailto:sc-st@becbbsr.ac.in" className="inline-flex items-center gap-1 text-[10px] font-black text-amber-400 uppercase tracking-wider hover:text-white transition-colors pt-1">
                          Report Instantly <Mail className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Members Grid (Right Column) */}
                  <div className="lg:col-span-7 space-y-4">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Committee Members</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeCommittee.members.map((member) => (
                        <div
                          key={`${member.name}-${member.collegeRole}`}
                          className="bg-white border border-slate-100 rounded-2xl p-4 flex gap-4 items-center shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300 group"
                        >
                          <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-50 flex items-center justify-center transition-all duration-300 group-hover:border-amber-400">
                            {member.image ? (
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
                            ) : (
                              <span className="font-bold text-slate-500 text-sm">{getInitials(member.name)}</span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 rounded text-[8px] font-black uppercase tracking-wider inline-block mb-1">
                              {member.role}
                            </span>
                            <h5 className="font-black text-primary text-xs uppercase truncate group-hover:text-amber-700 transition-colors">
                              {member.name}
                            </h5>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider truncate mt-0.5">
                              {member.collegeRole}
                            </p>
                          </div>
                          <a
                            href={`mailto:${member.email}`}
                            className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:bg-amber-600 hover:text-white hover:border-amber-600 flex items-center justify-center shrink-0 transition-all"
                            title={`Email ${member.name}`}
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      ))}
                    </div>

                    {/* Statutory Benefits Info */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-5 space-y-3 mt-2">
                      <h5 className="font-black text-xs uppercase tracking-widest text-amber-800 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> Benefits Available to SC/ST Students
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "Post-Matric Scholarship (Govt. of Odisha)",
                          "Fee waiver as per institutional norms",
                          "Hostel priority allocation",
                          "Remedial & coaching classes",
                          "Book bank facility",
                          "Career counseling sessions"
                        ].map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-[10px] text-slate-700 font-semibold font-inter">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Guidelines / Action Banner */}
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center text-primary shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-black text-xs uppercase tracking-wide text-primary">Need Direct Assistance?</h5>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Contact any committee member directly or write to us via email.</p>
                  </div>
                </div>
                <a
                  href="/contactus"
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-sm border ${
                    activeTab === 'anti-ragging' ? 'bg-rose-600 border-rose-600 text-white hover:bg-rose-700' :
                    activeTab === 'women-cell' ? 'bg-purple-600 border-purple-600 text-white hover:bg-purple-700' :
                    activeTab === 'discipline' ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700' :
                    activeTab === 'sc-st' ? 'bg-amber-600 border-amber-600 text-white hover:bg-amber-700' :
                    'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  Write to Committee
                </a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </PageLayout>
  );
};
