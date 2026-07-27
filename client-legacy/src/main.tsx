import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './index.css'

// Configure global API endpoint
axios.defaults.baseURL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? `http://${window.location.hostname}:5000`
  : `${window.location.protocol}//${window.location.hostname}`;
import App from './App'

// Static page imports for instant transitions
import { AboutCollege } from './pages/AboutCollege'
import { ChairmanAyushGroup } from './pages/ChairmanAyushGroup'
import { ChairmanBEC } from './pages/ChairmanBEC'
import { DirectorProfile } from './pages/DirectorProfile'
import { TrustMembers } from './pages/TrustMembers'
import { BTech } from './pages/BTech'
import { MBA } from './pages/MBA'
import { Diploma } from './pages/Diploma'
import { AeronauticalEngg } from './pages/AeronauticalEngg'
import { AgricultureEngg } from './pages/AgricultureEngg'
import { CivilEngg } from './pages/CivilEngg'
import { CSEEngg } from './pages/CSEEngg'
import { EEEngg } from './pages/EEEngg'
import { MechanicalEngg } from './pages/MechanicalEngg'
import { AME } from './pages/AME'
import { BasicScienceHumanities } from './pages/BasicScienceHumanities'
import { Faculties } from './pages/Faculties'
import { AboutPlacement } from './pages/AboutPlacement'
import { Placement } from './pages/Placement'
import { Facilities } from './pages/Facilities'
import { ContactUs } from './pages/ContactUs'
import { Career } from './pages/Career'
import { PhotoGallery } from './pages/PhotoGallery'
import { Achievements } from './pages/Achievements'
import { AeroClub } from './pages/AeroClub'
import { SeminarWorkshop } from './pages/SeminarWorkshop'
import { SportsGames } from './pages/SportsGames'
import { Activities } from './pages/Activities'
import { Syllabus } from './pages/Syllabus'
import { AdmissionQuery } from './pages/AdmissionQuery'
import { Fees } from './pages/Fees'
import { Committees } from './pages/Committees'
import { ELearning } from './pages/ELearning'
import { NewsAndEvents } from './pages/NewsAndEvents'
import { PrivacyPolicy } from './pages/PrivacyPolicy'

// Lazy load large/administrative pages
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })))
const AdmissionsMaster = React.lazy(() => import('./pages/AdmissionsMaster').then(m => ({ default: m.AdmissionsMaster })))
const CatchAllPage = React.lazy(() => import('./pages/CatchAllPage').then(m => ({ default: m.CatchAllPage })))

import { AdmissionBot } from './components/AdmissionBot'
import { AdmissionProvider } from './components/AdmissionContext'
import { DataProvider } from './context/DataContext'
import ScrollToTop from './components/ScrollToTop'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataProvider>
    <AdmissionProvider>
    <Router>
      <ScrollToTop />
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
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/e-learning" element={<ELearning />} />
          
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
          <Route path="/basic-science-humanities" element={<BasicScienceHumanities />} />
          
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
          <Route path="/activities" element={<Activities />} />
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
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

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
