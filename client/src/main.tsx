import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './index.css'

// Configure global API endpoint
axios.defaults.baseURL = `http://${window.location.hostname}:5000`;
import App from './App'

const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })))
const ChairmanAyushGroup = React.lazy(() => import('./pages/ChairmanAyushGroup').then(m => ({ default: m.ChairmanAyushGroup })))
const ChairmanBEC = React.lazy(() => import('./pages/ChairmanBEC').then(m => ({ default: m.ChairmanBEC })))
const DirectorProfile = React.lazy(() => import('./pages/DirectorProfile').then(m => ({ default: m.DirectorProfile })))
const AboutCollege = React.lazy(() => import('./pages/AboutCollege').then(m => ({ default: m.AboutCollege })))
const TrustMembers = React.lazy(() => import('./pages/TrustMembers').then(m => ({ default: m.TrustMembers })))
const BTech = React.lazy(() => import('./pages/BTech').then(m => ({ default: m.BTech })))
const MBA = React.lazy(() => import('./pages/MBA').then(m => ({ default: m.MBA })))
const Diploma = React.lazy(() => import('./pages/Diploma').then(m => ({ default: m.Diploma })))
const AeronauticalEngg = React.lazy(() => import('./pages/AeronauticalEngg').then(m => ({ default: m.AeronauticalEngg })))
const AgricultureEngg = React.lazy(() => import('./pages/AgricultureEngg').then(m => ({ default: m.AgricultureEngg })))
const CivilEngg = React.lazy(() => import('./pages/CivilEngg').then(m => ({ default: m.CivilEngg })))
const CSEEngg = React.lazy(() => import('./pages/CSEEngg').then(m => ({ default: m.CSEEngg })))
const EEEngg = React.lazy(() => import('./pages/EEEngg').then(m => ({ default: m.EEEngg })))
const MechanicalEngg = React.lazy(() => import('./pages/MechanicalEngg').then(m => ({ default: m.MechanicalEngg })))
const AME = React.lazy(() => import('./pages/AME').then(m => ({ default: m.AME })))
const AboutPlacement = React.lazy(() => import('./pages/AboutPlacement').then(m => ({ default: m.AboutPlacement })))
const Facilities = React.lazy(() => import('./pages/Facilities').then(m => ({ default: m.Facilities })))
const ContactUs = React.lazy(() => import('./pages/ContactUs').then(m => ({ default: m.ContactUs })))
const Career = React.lazy(() => import('./pages/Career').then(m => ({ default: m.Career })))
const PhotoGallery = React.lazy(() => import('./pages/PhotoGallery').then(m => ({ default: m.PhotoGallery })))
const Achievements = React.lazy(() => import('./pages/Achievements').then(m => ({ default: m.Achievements })))
const AeroClub = React.lazy(() => import('./pages/AeroClub').then(m => ({ default: m.AeroClub })))
const SeminarWorkshop = React.lazy(() => import('./pages/SeminarWorkshop').then(m => ({ default: m.SeminarWorkshop })))
const SportsGames = React.lazy(() => import('./pages/SportsGames').then(m => ({ default: m.SportsGames })))
const Syllabus = React.lazy(() => import('./pages/Syllabus').then(m => ({ default: m.Syllabus })))
const AdmissionQuery = React.lazy(() => import('./pages/AdmissionQuery').then(m => ({ default: m.AdmissionQuery })))
const Fees = React.lazy(() => import('./pages/Fees').then(m => ({ default: m.Fees })))
const CatchAllPage = React.lazy(() => import('./pages/CatchAllPage').then(m => ({ default: m.CatchAllPage })))
import { AdmissionBot } from './components/AdmissionBot'
import { AdmissionProvider } from './components/AdmissionContext'
import { DataProvider } from './context/DataContext'
const NewsAndEvents = React.lazy(() => import('./pages/NewsAndEvents').then(m => ({ default: m.NewsAndEvents })))
const Placement = React.lazy(() => import('./pages/Placement').then(m => ({ default: m.Placement })))
const AdmissionsMaster = React.lazy(() => import('./pages/AdmissionsMaster').then(m => ({ default: m.AdmissionsMaster })))

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataProvider>
    <AdmissionProvider>
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-navy-950 flex items-center justify-center"><div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* About Us Sub-Pages */}
          <Route path="/about-college" element={<AboutCollege />} />
          <Route path="/chairman-ayush-msg" element={<ChairmanAyushGroup />} />
          <Route path="/chairman-bec" element={<ChairmanBEC />} />
          <Route path="/trusty" element={<TrustMembers />} />
          <Route path="/director-profile" element={<DirectorProfile />} />
          
          {/* Programs */}
          <Route path="/btech" element={<BTech />} />
          <Route path="/mba" element={<MBA />} />
          <Route path="/diploma" element={<Diploma />} />
          
          {/* Departments */}
          <Route path="/aeronautical-engg" element={<AeronauticalEngg />} />
          <Route path="/agriculture-engg" element={<AgricultureEngg />} />
          <Route path="/civil-engg" element={<CivilEngg />} />
          <Route path="/cse-engg" element={<CSEEngg />} />
          <Route path="/ee-engg" element={<EEEngg />} />
          <Route path="/mechanical-engg" element={<MechanicalEngg />} />
          <Route path="/ame" element={<AME />} />
          
          {/* Placement */}
          <Route path="/about_placement" element={<AboutPlacement />} />
          <Route path="/placement" element={<Placement />} />
          
          {/* Facilities */}
          <Route path="/facilities" element={<Facilities />} />
          
          {/* Activities & Additional Pages */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/areo-club" element={<AeroClub />} />
          <Route path="/seminar-workshop" element={<SeminarWorkshop />} />
          <Route path="/sports-games" element={<SportsGames />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/admission_query" element={<AdmissionQuery />} />
          <Route path="/admission/programme" element={<AdmissionsMaster />} />
          <Route path="/admission/procedure" element={<AdmissionsMaster />} />
          <Route path="/admission/documents" element={<AdmissionsMaster />} />
          <Route path="/admission/bank-loan" element={<AdmissionsMaster />} />
          <Route path="/admission/scholarship" element={<AdmissionsMaster />} />
          <Route path="/admission/contacts" element={<AdmissionsMaster />} />
          <Route path="/admission/prospectus" element={<AdmissionsMaster />} />
          <Route path="/admission/news" element={<NewsAndEvents />} />
          <Route path="/fees" element={<Fees />} />
          
          {/* Catch-all route for any undefined page paths right now */}
          <Route path="*" element={<CatchAllPage />} />
        </Routes>
      </Suspense>
      <AdmissionBot />
    </Router>
    </AdmissionProvider>
    </DataProvider>
  </React.StrictMode>
)
