'use client';

import React, { Suspense, useState, useEffect, useCallback, useTransition } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';

// ─── ALL PREFETCH LOADERS (raw import functions, NOT React.lazy) ───────────────
// These are called on hover to pre-fetch the JS chunk BEFORE the user clicks.
// Once fetched, React.lazy() resolves instantly since it's already in the module cache.
const prefetchMap: Record<string, () => Promise<any>> = {
  '/':                        () => import('@/components/HomePageContent'),
  '/about-college':           () => import('@/subpages/AboutCollege'),
  '/chairman-ayush-msg':      () => import('@/subpages/ChairmanAyushGroup'),
  '/chairman-bec':            () => import('@/subpages/ChairmanBEC'),
  '/director-profile':        () => import('@/subpages/DirectorProfile'),
  '/trusty':                  () => import('@/subpages/TrustMembers'),
  '/btech':                   () => import('@/subpages/BTech'),
  '/mba':                     () => import('@/subpages/MBA'),
  '/diploma':                 () => import('@/subpages/Diploma'),
  '/aeronautical-engg':       () => import('@/subpages/AeronauticalEngg'),
  '/agriculture-engg':        () => import('@/subpages/AgricultureEngg'),
  '/civil-engg':              () => import('@/subpages/CivilEngg'),
  '/cse-engg':                () => import('@/subpages/CSEEngg'),
  '/ee-engg':                 () => import('@/subpages/EEEngg'),
  '/mechanical-engg':         () => import('@/subpages/MechanicalEngg'),
  '/ame':                     () => import('@/subpages/AME'),
  '/basic-science-humanities':() => import('@/subpages/BasicScienceHumanities'),
  '/faculties':               () => import('@/subpages/Faculties'),
  '/about_placement':         () => import('@/subpages/AboutPlacement'),
  '/placement':               () => import('@/subpages/Placement'),
  '/facilities':              () => import('@/subpages/Facilities'),
  '/contactus':               () => import('@/subpages/ContactUs'),
  '/career':                  () => import('@/subpages/Career'),
  '/photo-gallery':           () => import('@/subpages/PhotoGallery'),
  '/achievements':            () => import('@/subpages/Achievements'),
  '/areo-club':               () => import('@/subpages/AeroClub'),
  '/seminar-workshop':        () => import('@/subpages/SeminarWorkshop'),
  '/sports-games':            () => import('@/subpages/SportsGames'),
  '/activities':              () => import('@/subpages/Activities'),
  '/syllabus':                () => import('@/subpages/Syllabus'),
  '/admission_query':         () => import('@/subpages/AdmissionQuery'),
  '/fees':                    () => import('@/subpages/Fees'),
  '/committees':              () => import('@/subpages/Committees'),
  '/e-learning':              () => import('@/subpages/ELearning'),
  '/admission/news':          () => import('@/subpages/NewsAndEvents'),
  '/privacy-policy':          () => import('@/subpages/PrivacyPolicy'),
  '/admin':                   () => import('@/subpages/AdminDashboard'),
};

// Shared admission master prefetch (multiple routes)
const prefetchAdmissions = () => import('@/subpages/AdmissionsMaster');

// ─── PRELOAD function (call on hover, no await needed) ────────────────────────
const preloaded = new Set<string>();
export function prefetchRoute(path: string) {
  const base = path.split('#')[0]; // strip hash
  if (preloaded.has(base)) return;
  preloaded.add(base);
  const loader = prefetchMap[base];
  if (loader) {
    loader().catch(() => {}); // fire and forget
  } else if (base.startsWith('/admission/')) {
    prefetchAdmissions().catch(() => {});
  }
}

// ─── React.lazy components (use module cache if already prefetched) ───────────
const HomePageContent       = React.lazy(() => import('@/components/HomePageContent'));
const AboutCollege          = React.lazy(() => import('@/subpages/AboutCollege').then(m => ({ default: m.AboutCollege })));
const ChairmanAyushGroup    = React.lazy(() => import('@/subpages/ChairmanAyushGroup').then(m => ({ default: m.ChairmanAyushGroup })));
const ChairmanBEC           = React.lazy(() => import('@/subpages/ChairmanBEC').then(m => ({ default: m.ChairmanBEC })));
const DirectorProfile       = React.lazy(() => import('@/subpages/DirectorProfile').then(m => ({ default: m.DirectorProfile })));
const TrustMembers          = React.lazy(() => import('@/subpages/TrustMembers').then(m => ({ default: m.TrustMembers })));
const BTech                 = React.lazy(() => import('@/subpages/BTech').then(m => ({ default: m.BTech })));
const MBA                   = React.lazy(() => import('@/subpages/MBA').then(m => ({ default: m.MBA })));
const Diploma               = React.lazy(() => import('@/subpages/Diploma').then(m => ({ default: m.Diploma })));
const AeronauticalEngg      = React.lazy(() => import('@/subpages/AeronauticalEngg').then(m => ({ default: m.AeronauticalEngg })));
const AgricultureEngg       = React.lazy(() => import('@/subpages/AgricultureEngg').then(m => ({ default: m.AgricultureEngg })));
const CivilEngg             = React.lazy(() => import('@/subpages/CivilEngg').then(m => ({ default: m.CivilEngg })));
const CSEEngg               = React.lazy(() => import('@/subpages/CSEEngg').then(m => ({ default: m.CSEEngg })));
const EEEngg                = React.lazy(() => import('@/subpages/EEEngg').then(m => ({ default: m.EEEngg })));
const MechanicalEngg        = React.lazy(() => import('@/subpages/MechanicalEngg').then(m => ({ default: m.MechanicalEngg })));
const AME                   = React.lazy(() => import('@/subpages/AME').then(m => ({ default: m.AME })));
const BasicScienceHumanities= React.lazy(() => import('@/subpages/BasicScienceHumanities').then(m => ({ default: m.BasicScienceHumanities })));
const Faculties             = React.lazy(() => import('@/subpages/Faculties').then(m => ({ default: m.Faculties })));
const AboutPlacement        = React.lazy(() => import('@/subpages/AboutPlacement').then(m => ({ default: m.AboutPlacement })));
const Placement             = React.lazy(() => import('@/subpages/Placement').then(m => ({ default: m.Placement })));
const Facilities            = React.lazy(() => import('@/subpages/Facilities').then(m => ({ default: m.Facilities })));
const ContactUs             = React.lazy(() => import('@/subpages/ContactUs').then(m => ({ default: m.ContactUs })));
const Career                = React.lazy(() => import('@/subpages/Career').then(m => ({ default: m.Career })));
const PhotoGallery          = React.lazy(() => import('@/subpages/PhotoGallery').then(m => ({ default: m.PhotoGallery })));
const Achievements          = React.lazy(() => import('@/subpages/Achievements').then(m => ({ default: m.Achievements })));
const AeroClub              = React.lazy(() => import('@/subpages/AeroClub').then(m => ({ default: m.AeroClub })));
const SeminarWorkshop       = React.lazy(() => import('@/subpages/SeminarWorkshop').then(m => ({ default: m.SeminarWorkshop })));
const SportsGames           = React.lazy(() => import('@/subpages/SportsGames').then(m => ({ default: m.SportsGames })));
const Activities            = React.lazy(() => import('@/subpages/Activities').then(m => ({ default: m.Activities })));
const Syllabus              = React.lazy(() => import('@/subpages/Syllabus').then(m => ({ default: m.Syllabus })));
const AdmissionQuery        = React.lazy(() => import('@/subpages/AdmissionQuery').then(m => ({ default: m.AdmissionQuery })));
const Fees                  = React.lazy(() => import('@/subpages/Fees').then(m => ({ default: m.Fees })));
const Committees            = React.lazy(() => import('@/subpages/Committees').then(m => ({ default: m.Committees })));
const ELearning             = React.lazy(() => import('@/subpages/ELearning').then(m => ({ default: m.ELearning })));
const NewsAndEvents         = React.lazy(() => import('@/subpages/NewsAndEvents').then(m => ({ default: m.NewsAndEvents })));
const PrivacyPolicy         = React.lazy(() => import('@/subpages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const AdminDashboard        = React.lazy(() => import('@/subpages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const AdmissionsMaster      = React.lazy(() => import('@/subpages/AdmissionsMaster').then(m => ({ default: m.AdmissionsMaster })));
const CatchAllPage          = React.lazy(() => import('@/subpages/CatchAllPage').then(m => ({ default: m.CatchAllPage })));

import { AdmissionBot } from '@/components/AdmissionBot';
import { AdmissionProvider } from '@/components/AdmissionContext';
import ScrollToTop from '@/components/ScrollToTop';

// ─── Slim top progress bar ────────────────────────────────────────────────────
function PageLoadBar({ loading }: { loading: boolean }) {
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (loading) {
      setVisible(true);
      setWidth(0);
      const t1 = setTimeout(() => setWidth(40), 10);
      const t2 = setTimeout(() => setWidth(70), 120);
      const t3 = setTimeout(() => setWidth(88), 350);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    } else {
      setWidth(100);
      const t = setTimeout(() => { setVisible(false); setWidth(0); }, 300);
      return () => clearTimeout(t);
    }
  }, [loading]);

  if (!visible) return null;
  return (
    <div
      className="fixed top-0 left-0 z-[99999] h-[3px] bg-gradient-to-r from-accent via-yellow-400 to-accent pointer-events-none"
      style={{ width: `${width}%`, transition: `width ${loading ? 400 : 220}ms ease-out` }}
    />
  );
}

// ─── Preload ALL subpages on idle after first load ─────────────────────
function IdlePreloader() {
  useEffect(() => {
    const allRoutes = Object.keys(prefetchMap);
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          allRoutes.forEach((r, idx) => {
            setTimeout(() => prefetchRoute(r), idx * 30);
          });
        });
      } else {
        allRoutes.forEach((r, idx) => {
          setTimeout(() => prefetchRoute(r), idx * 30);
        });
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);
  return null;
}

// ─── Inner router ─────────────────────────────────────────────────────────────
function InnerRouter() {
  const location = useLocation();
  const [isPending, startTransition] = useTransition();

  // Instant scroll & page ready without artificial delays
  useEffect(() => {
    // Window scroll reset for smooth page transitions
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <PageLoadBar loading={isPending} />
      <ScrollToTop />
      <IdlePreloader />
      <Suspense fallback={<PageLoadBar loading={true} />}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePageContent />} />
          {/* About */}
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
          {/* Activities */}
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
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<CatchAllPage />} />
        </Routes>
      </Suspense>
      <AdmissionBot />
    </>
  );
}

export default function SubpagesRouter() {
  return (
    <AdmissionProvider>
      <Router>
        <InnerRouter />
      </Router>
    </AdmissionProvider>
  );
}
