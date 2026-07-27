import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Mail, Search, Users, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { useData } from '../context/DataContext';
interface FacultyMember {
  name: string;
  role: string;
  branch: string;
  image: string;
  email: string;
  tag: string;
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

const staffData: FacultyMember[] = [
  { 
    name: "Er. Ananyaa Mohanty", 
    role: "Assistant Professor & Head", 
    branch: "Agriculture Engineering", 
    image: "/facilities/STAFF/ANANYAA MOHANTY(agriculte hod).jpg", 
    email: "agriculture@becbbsr.ac.in",
    tag: "HOD"
  },
  { 
    name: "Er. Anita Behera", 
    role: "Associate Professor & Head", 
    branch: "Computer Science Engineering", 
    image: "/facilities/STAFF/Anita Behera(cse hod).jpg", 
    email: "cse@becbbsr.ac.in",
    tag: "HOD"
  },
  { 
    name: "Mr. Ashis Kumar Behera", 
    role: "Assistant Professor & Head", 
    branch: "MBA", 
    image: "/facilities/STAFF/Ashis Kumar Behera(mba hod).jpg", 
    email: "mba@becbbsr.ac.in",
    tag: "HOD"
  },
  {
    name: "Mr. Avinash Lenka",
    role: "Assistant Professor",
    branch: "Basic Science & Humanities",
    image: "/facilities/STAFF/Avinash Lenka (BS).png",
    email: "avinash.bsh@becbbsr.ac.in",
    tag: "Faculty"
  },
  {
    name: "Mr. Bijay Kumar Sahu",
    role: "Assistant Professor & Head",
    branch: "Electrical Engineering",
    image: "/facilities/STAFF/BIJAY KUMAR SAHU (EE).jpeg",
    email: "electrical@becbbsr.ac.in",
    tag: "HOD"
  },
  {
    name: "Mr. Chinmaya Kumar Panda",
    role: "Assistant Professor",
    branch: "Basic Science & Humanities",
    image: "/facilities/STAFF/Chinmaya Kumar Pqndaanda(BS).png",
    email: "chinmaya.bsh@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Dr. Bishnu Prasad Mishra", 
    role: "Professor & Head", 
    branch: "Mechanical Engineering", 
    image: "/facilities/STAFF/Dr. Bishnu Prasad Mishra(mech hod ).jpg", 
    email: "mechanical@becbbsr.ac.in",
    tag: "HOD"
  },
  { 
    name: "Dr. Sonali Swagatika", 
    role: "Assistant Professor", 
    branch: "Agriculture Engineering", 
    image: "/facilities/STAFF/Dr. Sonali Swagatika (AGRI).jpg", 
    email: "sonali.agri@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Mrs. Geetanjali Mohanty", 
    role: "Assistant Professor", 
    branch: "Mechanical Engineering", 
    image: "/facilities/STAFF/Geetanjali Mohanty (MECH).jpg", 
    email: "geetanjali.mech@becbbsr.ac.in",
    tag: "Faculty"
  },
  {
    name: "Mr. Gyanaranjan Prusty",
    role: "Assistant Professor & Head",
    branch: "Basic Science & Humanities",
    image: "/facilities/STAFF/Gyanaranjan Prusty (BS).jpg",
    email: "bsh@becbbsr.ac.in",
    tag: "HOD"
  },
  { 
    name: "Mr. Hemanta Mahananda", 
    role: "Assistant Professor", 
    branch: "Aeronautical Engineering", 
    image: "/facilities/STAFF/HEMANTA MAHANANDA (AERO).jpg", 
    email: "hemanta.aero@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Mrs. Lipsa Tanaya Mishra", 
    role: "Professor", 
    branch: "Computer Science Engineering", 
    image: "/facilities/STAFF/LIPSA TANAYA MISHRA(CSE).png", 
    email: "lipsa.cse@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Mr. Manmeshu Kumar Swain", 
    role: "Assistant Professor", 
    branch: "Computer Science Engineering", 
    image: "/facilities/STAFF/MANMESHU KUMAR SWAIN (CSE).jpg", 
    email: "manmeshu.cse@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Mr. Srikanta Kumar Sahoo", 
    role: "Assistant Professor", 
    branch: "Computer Science Engineering", 
    image: "/facilities/STAFF/MR. SRIKANTA KUMAR SAHOO (CSE).jpg", 
    email: "srikanta.cse@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Miss Priyata Prangya Sahoo", 
    role: "Assistant Professor", 
    branch: "Computer Science Engineering", 
    image: "/facilities/STAFF/Miss PriyataPrangya Sahoo (CSE).jpg", 
    email: "priyata.cse@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Mr. Saswat Mishra", 
    role: "Assistant Professor & Head", 
    branch: "Civil Engineering", 
    image: "/facilities/STAFF/Mr. Saswat Mishra(Civil hod).png", 
    email: "civil@becbbsr.ac.in",
    tag: "HOD"
  },
  { 
    name: "Mr. Pratik Kumar Mohapatra", 
    role: "Assistant Professor", 
    branch: "Aeronautical Engineering", 
    image: "/facilities/STAFF/Pratik kumar Mohapatra (AERO).jpg", 
    email: "pratik.aero@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Mrs. Rupali Sahoo", 
    role: "Assistant Professor", 
    branch: "Mechanical Engineering", 
    image: "/facilities/STAFF/RUPALI SAHOO (MECH).jpg", 
    email: "rupali.mech@becbbsr.ac.in",
    tag: "Faculty"
  },
  {
    name: "Mrs. Rasmita Sahoo",
    role: "Assistant Professor",
    branch: "Basic Science & Humanities",
    image: "/facilities/STAFF/Rasmita Sahoo (BS).png",
    email: "rasmita.bsh@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Dr. Sangram Keshari Samal", 
    role: "Professor & Head", 
    branch: "Aeronautical Engineering", 
    image: "/facilities/STAFF/SANGRAM KESHARI SAMAL (aero hod).jpg", 
    email: "aero@becbbsr.ac.in",
    tag: "HOD"
  },
  { 
    name: "Mr. Santanu Mohapatra", 
    role: "Assistant Professor", 
    branch: "Mechanical Engineering", 
    image: "/facilities/STAFF/SANTANU MOHAPATRA (MECH).jpg", 
    email: "santanu.mech@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Mr. Sushil Harichandan", 
    role: "Assistant Professor", 
    branch: "Agriculture Engineering", 
    image: "/facilities/STAFF/SUSHILHARICHANDAN (AGRI).jpg", 
    email: "sushil.agri@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Mrs. Snigdharani Jena", 
    role: "Assistant Professor", 
    branch: "Agriculture Engineering", 
    image: "/facilities/STAFF/Snigdharani Jena (AGRI).jpg", 
    email: "snigdharani.agri@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Ms. Soyeenika Mishra", 
    role: "Assistant Professor", 
    branch: "MBA", 
    image: "/facilities/STAFF/Snigdharani Jena (MBA).jpg", 
    email: "snigdharani.mba@becbbsr.ac.in",
    tag: "Faculty"
  },
  {
    name: "Mrs. Sumitra Sahoo",
    role: "Assistant Professor",
    branch: "Basic Science & Humanities",
    image: "/facilities/STAFF/Sumitra Sahoo (BS).jpg",
    email: "sumitra.bsh@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Mrs. Sunita Sahu", 
    role: "Assistant Professor", 
    branch: "Computer Science Engineering", 
    image: "/facilities/STAFF/SunitaSahu(CSE).jpg", 
    email: "sunita.cse@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Mr. Suraj Kumar Sahoo", 
    role: "Assistant Professor", 
    branch: "Aeronautical Engineering", 
    image: "/facilities/STAFF/Suraj Kumar Sahoo (AERO).jpg", 
    email: "suraj.aero@becbbsr.ac.in",
    tag: "Faculty"
  },
  { 
    name: "Mr. Swagat Prasad Das", 
    role: "Assistant Professor", 
    branch: "Aeronautical Engineering", 
    image: "/facilities/STAFF/Swagat Prasad Das (AERO).jpg", 
    email: "swagat.aero@becbbsr.ac.in",
    tag: "Faculty"
  },
  {
    name: "Mrs. Swetalina Das",
    role: "Assistant Professor",
    branch: "Basic Science & Humanities",
    image: "/facilities/STAFF/Swetalina Das (BS).jpg",
    email: "swetalina.bsh@becbbsr.ac.in",
    tag: "Faculty"
  }
];

export const Faculties = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { faculties } = useData();

  // Map dynamic 'department' to 'branch' and dynamic 'tag'
  const displayStaff = faculties && faculties.length > 0 
    ? faculties.map(f => ({
        name: f.name,
        role: f.role,
        branch: f.department,
        image: f.image || '',
        email: f.email,
        tag: f.tag || 'Faculty'
      }))
    : staffData;

  const filteredStaff = displayStaff.filter(member => {
    return member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           member.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
           member.role.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <PageLayout title="Our Staff members">
      <SEO 
        title="Our Academic Staff | BEC Bhubaneswar"
        description="Meet the highly qualified professors, lecturers, and technical instructors at Bhubaneswar Engineering College (BEC) driving innovation and research."
        keywords={[
          "Bhubaneswar Engineering College faculty",
          "BEC professors list",
          "engineering lecturers Bhubaneswar",
          "computer science HOD BEC",
          "aviation engineering faculty Odisha"
        ]}
      />
      
      <div className="flex flex-col gap-14 mt-4">

        {/* Header Intro Banner */}
        <section className="bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900 text-white rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden border border-white/5 shadow-2xl">
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
               backgroundSize: '30px 30px'
             }}
           />
           <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
           <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-primary/20 rounded-full blur-[70px] translate-y-1/2 pointer-events-none" />

           <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full">
                 <Users className="w-3.5 h-3.5" /> Academic Excellence
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none max-w-3xl mx-auto">
                 Meet Our Distinguished <span className="text-accent italic">Staff</span>
              </h2>
              <p className="text-white/50 font-medium leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                 Our teachers, mentors and researchers are graduates from top institutions, committed to delivering real-world technical skills and fostering scientific innovation.
              </p>
           </div>
        </section>

        {/* Filter Section */}
        <div className="flex justify-center bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl max-w-xl mx-auto w-full">
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search staff by name or branch..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 pl-12 pr-6 py-3.5 rounded-xl border border-slate-100 shadow-sm focus:shadow-md focus:outline-none focus:border-primary/20 text-xs font-black uppercase tracking-wider text-primary placeholder-slate-400 transition-all"
            />
          </div>
        </div>

        {/* Faculty Circle Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredStaff.map((member, i) => (
              <motion.div
                layout
                key={`${member.name}-${member.branch}-${member.email}-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: (i % 8) * 0.05 }}
                className="group relative bg-white rounded-3xl p-6 border border-slate-100/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center overflow-hidden hover:-translate-y-2"
              >
                {/* Card Top Accent Pattern */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/10 group-hover:from-primary/10 group-hover:via-accent/15 group-hover:to-primary/15 transition-all duration-500 pointer-events-none" />

                {/* Floating HOD Badge inside card */}
                {member.tag === "HOD" && (
                  <span className="absolute top-4 right-4 z-20 bg-accent text-primary text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border border-accent/10 shadow-md">
                    HOD
                  </span>
                )}

                {/* Rounded Circle Image Container */}
                <div className="relative z-10 mt-2">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md relative z-10 transition-all duration-500 group-hover:scale-105 bg-slate-50 flex items-center justify-center">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center text-white font-black text-2xl font-poppins">
                        {getInitials(member.name)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Info Text */}
                <div className="flex flex-col items-center w-full z-10">
                  <h4 className="font-black text-primary uppercase text-xs md:text-sm tracking-tight leading-snug mt-5 font-poppins min-h-[36px] flex items-center justify-center group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-slate-400 font-bold text-[9px] uppercase tracking-widest mt-1.5 min-h-[15px]">
                    {member.role}
                  </p>
                  
                  {/* Subtle Separator Line */}
                  <div className="w-12 h-0.5 bg-slate-100 my-3 group-hover:w-20 transition-all duration-300" />

                  <span className="text-[9px] font-bold text-slate-500 px-3 py-1.5 rounded-full border border-slate-100 bg-slate-50/50 uppercase tracking-wider block max-w-full truncate">
                    {member.branch}
                  </span>
                  
                  {/* Quick Contact Button */}
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-9 h-9 rounded-full bg-slate-50 hover:bg-accent/20 hover:text-accent border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 mt-5 shadow-sm"
                    title={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredStaff.length === 0 && (
            <div className="col-span-full py-20 text-center flex flex-col items-center gap-4 text-slate-400">
              <ShieldAlert className="w-10 h-10" />
              <span className="font-bold text-sm uppercase tracking-widest">No staff members found matching your filters</span>
            </div>
          )}
        </motion.div>

      </div>
    </PageLayout>
  );
};
