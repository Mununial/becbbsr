import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from './lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Departments } from './components/Departments';
import { LatestEvents } from './components/LatestEvents';
import { CampusGallery } from './components/CampusGallery';

import { SelectedStudents } from './components/SelectedStudents';
import { RecruiterShowcase } from './components/RecruiterShowcase';
import { NewsMedia } from './components/NewsMedia';
import { Footer } from './components/Footer';
import { EventsHighlight } from './components/EventsHighlight';
import { AdminDashboard } from './components/AdminDashboard';
import { CampusTour } from './components/CampusTour';
import { LeadershipSection } from './components/LeadershipSection';
import { AdmissionPopup } from './components/AdmissionPopup';
import { FloatingSocials } from './components/FloatingSocials';
import { useData } from './context/DataContext';
import { LoginGate } from './components/LoginGate';
import { SEO } from './components/SEO';

import { type SelectedStudent, type Scene, type Leader, type Highlight } from './types';

const DEFAULT_HIGHLIGHTS: Highlight[] = [
  {
    id: '1',
    title: 'Admission Open 2026-27',
    date: 'Enroll Now',
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg',
    link: '/admission_query'
  },
  {
    id: '2',
    title: 'Research & Innovation Cell',
    date: 'Bhubaneswar',
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629486/becweb/campus_interior.jpg',
    link: '/seminar-workshop'
  },
  {
    id: '3',
    title: 'Placement Highlights 2024',
    date: 'View Report',
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629470/becweb/placement_hero.jpg',
    link: '/about_placement'
  },
  {
    id: '4',
    title: 'Alumni Meet 2026',
    date: 'Global Network',
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629462/becweb/hero-bg.jpg',
    link: '/photo-gallery'
  }
];


const DEFAULT_LEADERS: Leader[] = [
  {
    id: '1',
    role: "CHAIRMAN",
    title: "VISIONARY FOUNDER",
    name: "Er. Alok Ranjan Mallick",
    subtitle: "Chairman, Ayush Group",
    quote: "Bhubaneswar Engineering College (BEC) is more than just an academic institution; it is a creative hub for future engineers. Our vision is to empower students with technical knowledge that transcends boundaries.",
    image: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629465/becweb/chairman.jpg",
    link: "/chairman-ayush-msg",
    color: "from-amber-400 to-amber-600"
  },
  {
    id: '2',
    role: "DIRECTOR",
    title: "ACADEMIC EXCELLENCE",
    name: "Prof. (Dr.) B.N. Biswal",
    subtitle: "Director, BEC",
    quote: "Engineering is the art of solving problems. At BEC, we foster an environment where technical innovation meets societal needs, shaping our students into globally competitive professionals.",
    image: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629467/becweb/director.jpg",
    link: "/director-profile",
    color: "from-teal-500 to-cyan-600"
  }
];





const DEFAULT_SCENES = [
  {
    id: 'exterior',
    name: 'College Main Building',
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg',
    hotspots: [
      { x: 45, y: 60, type: 'scene', text: 'Enter Building', targetId: 'interior' },
      { x: 80, y: 65, type: 'scene', text: 'To Campus Stairs', targetId: 'stairs' }
    ]
  },
  {
    id: 'interior',
    name: 'Reception Area',
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629486/becweb/campus_interior.jpg',
    hotspots: [
      { x: 10, y: 70, type: 'scene', text: 'Back Outside', targetId: 'exterior' }
    ]
  },
  {
    id: 'stairs',
    name: 'Main Campus Stairs',
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629487/becweb/stairs.jpg',
    hotspots: [
      { x: 50, y: 80, type: 'scene', text: 'Return to Front', targetId: 'exterior' }
    ]
  },
  {
    id: 'front',
    name: 'College Entrance',
    image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg',
    hotspots: [
      { x: 60, y: 70, type: 'scene', text: 'Walk Forward', targetId: 'exterior' }
    ]
  }
];


const DEFAULT_SELECTED_STUDENTS: SelectedStudent[] = [
  { id: "1", companyRole: "CTTC-BBSR", name: "ANKIT MOHAPATRA", branch: "MECH", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/tata.jpg", photo: "/images/alumni2.jpg", bgColor: "from-blue-600 to-cyan-500" },
  { id: "2", companyRole: "BUREAU VERITAS", name: "AVINASH KUMAR SHARMA", branch: "CSE", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/infosys.jpg", photo: "/images/alumni3.jpg", bgColor: "from-purple-600 to-pink-500" },
  { id: "3", companyRole: "QuEST GLOBAL", name: "GAUTAM SINGH", branch: "CSE", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/zeta.jpg", photo: "/images/alumni5.jpg", bgColor: "from-cyan-600 to-blue-500" },
  { id: "4", companyRole: "AMAZON", name: "ROHIT KUMAR", branch: "MECH", degree: "BTech", batch: "2024", packageInfo: "Elite Record", companyLogo: "/images/events/byjus.jpg", photo: "/images/ROHIT%20KUMAR,MECH,AMAZON.jpg", bgColor: "from-orange-600 to-yellow-500" },
  { id: "5", companyRole: "IBS SOFTWARE", name: "PRASHANT BEHERA", branch: "AERO", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/IBS.jpg", photo: "/images/alumni8.jpg", bgColor: "from-indigo-600 to-purple-500" },
  { id: "6", companyRole: "TECH MAHINDRA", name: "ASHIT MINZ", branch: "CSE", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/tech-mahindra.jpg", photo: "/images/Ashit%20Minz-CSE(Tech%20Mahindra).jpg", bgColor: "from-red-600 to-orange-500" },
  { id: "7", companyRole: "INDIGO", name: "RAVISANKAR PAL", branch: "AERO", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/interglobe.jpg", photo: "/images/RAVISANKAR%20PAL-AERO%20(IndiGo).jpg", bgColor: "from-blue-800 to-blue-400" },
  { id: "8", companyRole: "INFOSYS", name: "BIPLAB KR SAMANTARAY", branch: "AERO", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/infosys.jpg", photo: "/images/BIPLAB%20KUMAR%20SAMANTARAY-Aero(Infosys).jpg", bgColor: "from-blue-600 to-indigo-400" },
  { id: "9", companyRole: "WIPRO", name: "IPSITA KUMARI", branch: "CSE", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/genpact.jpg", photo: "/images/IPSITA%20KUMARI,CSE,Wipro.jpg", bgColor: "from-purple-700 to-indigo-500" },
  { id: "10", companyRole: "PIRAMAL GROUP", name: "ROJALIN", branch: "CIVIL", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/tata.jpg", photo: "/images/ROJALIN%20PHOTO,%20CIVIL,Piramal%20Group.jpg", bgColor: "from-teal-600 to-cyan-500" },
  { id: "11", companyRole: "CAPGEMINI", name: "NEHA KUMARI", branch: "CSE", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/infosys.jpg", photo: "/images/alumni7.jpg", bgColor: "from-blue-700 to-blue-400" },
  { id: "12", companyRole: "ERBE MEDICAL", name: "SUBHAM DAS", branch: "EEE", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/john.jpg", photo: "/images/alumni12.jpg", bgColor: "from-emerald-600 to-teal-500" },
  { id: "13", companyRole: "TECH MAHINDRA", name: "K.SWETA MADHURI", branch: "CSE", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/tech-mahindra.jpg", photo: "/images/K.Sweta%20Madhuri(Tech%20Mahindra).jpg", bgColor: "from-red-700 to-rose-500" },
  { id: "14", companyRole: "PIRAMAL GROUP", name: "ASHIS PANY", branch: "MECH", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/tata.jpg", photo: "/images/ASHIS%20PANY-MECH(Piramal%20Group).jpg", bgColor: "from-blue-600 to-indigo-500" },
  { id: "15", companyRole: "BUREAU VERITAS", name: "GAUTAM KUMAR SINGH", branch: "CSE", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/infosys.jpg", photo: "/images/alumni4.jpg", bgColor: "from-blue-700 to-cyan-600" },
  { id: "16", companyRole: "VINDHYA TELELINES", name: "LAKSHMAN GOYAL", branch: "CIVIL", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/tata.jpg", photo: "/images/alumni6.jpg", bgColor: "from-emerald-700 to-teal-500" },
  { id: "17", companyRole: "IMS PEOPLE", name: "RAHUL LAHIRI", branch: "MECH", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/genpact.jpg", photo: "/images/alumni9.jpg", bgColor: "from-blue-900 to-sky-600" },
  { id: "18", companyRole: "IBS SOFTWARE", name: "RUCHIKA SINHA", branch: "EEE", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/IBS.jpg", photo: "/images/alumni11.jpg", bgColor: "from-indigo-700 to-blue-500" }
];

export const App = () => {
  const { 
    notices, updateNotices, 
    slides, updateSlides, 
    gallery, updateGallery, 
    faculties, updateFaculties,
    students, updateStudents,
    scenes, updateScenes,
    highlights, updateHighlights,
    leaders, updateLeaders
  } = useData();

  const [loading, setLoading] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showTour, setShowTour] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-out',
      once: true,
      offset: 40,
      delay: 0,
      disable: 'mobile'
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg-soft selection:bg-primary selection:text-white font-inter overflow-x-hidden w-full max-w-full relative">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[1000] bg-navy-950 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-t-2 border-accent border-r-2 border-r-transparent border-b-2 border-b-white/5 border-l-2 border-l-transparent"
                />
                <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" alt="BEC Logo" className="w-12 h-12 md:w-16 md:h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain brightness-110 drop-shadow-2xl" />
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-white font-bold text-lg md:text-xl tracking-widest uppercase font-poppins">Bhubaneswar Engineering College (BEC)</span>
                <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] mt-1.5 font-poppins">Excellence in Innovation</span>
                {/* Odia College Name */}
                <span className="text-white/30 text-xs font-bold mt-4 font-odia">ଭୁବନେଶ୍ୱର ଇଞ୍ଜିନିୟରିଂ କଲେଜ</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AdmissionPopup />
      <SEO 
        title="Bhubaneswar Engineering College (BEC) | Best Private Engineering College in Odisha"
        description="Bhubaneswar Engineering College (BEC) is a top private B.Tech, MBA &amp; Diploma college in Bhubaneswar, Odisha. Offering AICTE approved courses, 100% placement assistance, world-class labs, and budget-friendly fees. Enroll today!"
        keywords={[
          "best private engineering college in Odisha",
          "top 10 engineering colleges in Bhubaneswar",
          "engineering college with best placement in Odisha",
          "aeronautical engineering college Bhubaneswar",
          "aeronautical engineering in Odisha",
          "BTech admission 2026 Odisha",
          "engineering college fees Odisha",
          "MBA college Bhubaneswar",
          "Bhubaneswar Engineering College",
          "BEC Bhubaneswar",
          "AICTE approved engineering colleges in Odisha"
        ]}
        schema={{
          "@type": "CollegeOrUniversity",
          "name": "Bhubaneswar Engineering College (BEC)",
          "alternateName": "BEC Bhubaneswar",
          "url": "https://becbbsr.ac.in",
          "logo": "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png",
          "image": "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg",
          "description": "Bhubaneswar Engineering College (BEC) is a premier AICTE-approved engineering and management institute in Bhubaneswar, Odisha, offering B.Tech, MBA, and Diploma courses with high placement packages.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "At: Kaimatia, Post: Khudupur, Via: Madanpur",
            "addressLocality": "Bhubaneswar",
            "addressRegion": "Odisha",
            "postalCode": "752054",
            "addressCountry": "India"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "20.1983",
            "longitude": "85.7032"
          },
          "telephone": "+91-9437044218",
          "sameAs": [
            "https://www.facebook.com/becbbsr/",
            "https://www.instagram.com/becbbsr_official/",
            "https://twitter.com/becbbsr"
          ]
        }}
      />
      <Navbar onAdminClick={() => setShowAdmin(true)} />

      {showAdmin && (
        <LoginGate onClose={() => setShowAdmin(false)}>
          <AdminDashboard
            onClose={() => setShowAdmin(false)}
            slides={slides}
            onSave={updateSlides}
            scenes={scenes}
            onSaveScenes={updateScenes}
            students={students}
            onSaveStudents={updateStudents}
            gallery={gallery}
            onSaveGallery={updateGallery}
            highlights={highlights}
            onSaveHighlights={updateHighlights}
            leaders={leaders}
            onSaveLeaders={updateLeaders}
            notices={notices}
            onSaveNotices={updateNotices}
            faculties={faculties}
            onSaveFaculties={updateFaculties}
          />
        </LoginGate>
      )}

      {showTour && <CampusTour onClose={() => setShowTour(false)} scenes={scenes} />}

      <main className="pt-0 overflow-x-hidden">
        <Hero slides={slides} onTourClick={() => setShowTour(true)} />

        <div className="mt-6 md:mt-10" data-aos="fade-up">
          <EventsHighlight highlights={highlights} />
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <LatestEvents notices={notices} />
        </div>

        <div data-aos="fade-right" data-aos-duration="1000">
           <AboutUs />
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
           <LeadershipSection leaders={leaders} />
        </div>

        <div data-aos="fade-up" data-aos-delay="50">
           <Departments />
        </div>

        <div data-aos="zoom-in" data-aos-duration="1200">
           <CampusGallery images={gallery} />
        </div>

        <div data-aos="fade-up" data-aos-delay="50">
           <SelectedStudents students={students} />
        </div>

        <div data-aos="fade-up" data-aos-duration="1200">
           <NewsMedia />
        </div>

        <div data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
           <RecruiterShowcase />
        </div>

        <section className="py-20 bg-primary relative overflow-hidden font-inter" data-aos="fade-up">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight font-poppins uppercase tracking-tight">
              Ready to shape your <span className="text-accent">Future</span>?
            </h2>
            <p className="text-white/60 font-medium text-sm md:text-base mb-10 max-w-2xl mx-auto font-inter">
              Join a community of innovators and leaders. Admissions for session 2026-27 are now open across all engineering branches.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/admission_query'}
                className="px-10 py-3 bg-white text-primary hover:bg-accent transition-all font-bold text-xs rounded-lg tracking-widest shadow-xl uppercase"
              >
                Apply Online
              </button>
              <button 
                onClick={() => window.location.href = '/admission_query'}
                className="px-10 py-3 border border-white/20 text-white hover:bg-white/10 transition-all font-bold text-xs rounded-lg tracking-widest uppercase"
              >
                Inquire Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <FloatingSocials />
      <Footer />
    </div>
  );
};


export default App;
