import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Notice, type Slide, type GalleryImage, type Faculty, type Scene, type SelectedStudent, type Highlight, type Leader } from '../types';
import { db } from '../lib/firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

interface DataContextType {
  notices: Notice[];
  updateNotices: (notices: Notice[]) => void;
  slides: Slide[];
  updateSlides: (slides: Slide[]) => void;
  gallery: GalleryImage[];
  updateGallery: (images: GalleryImage[]) => void;
  faculties: Faculty[];
  updateFaculties: (faculties: Faculty[]) => void;
  students: SelectedStudent[];
  updateStudents: (students: SelectedStudent[]) => void;
  scenes: Scene[];
  updateScenes: (scenes: Scene[]) => void;
  highlights: Highlight[];
  updateHighlights: (highlights: Highlight[]) => void;
  leaders: Leader[];
  updateLeaders: (leaders: Leader[]) => void;
  achievements: any[];
  updateAchievements: (achievements: any[]) => void;
  aeroclub: any[];
  updateAeroClub: (aeroclub: any[]) => void;
  workshop: any[];
  updateWorkshops: (workshop: any[]) => void;
  sports: any[];
  updateSports: (sports: any[]) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // Core Configuration States
  const [notices, setNotices] = useState<Notice[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [faculties, setFaculties] = useState<Faculty[]>([]);
  const [students, setStudents] = useState<SelectedStudent[]>([]);
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [aeroclub, setAeroclub] = useState<any[]>([]);
  const [workshop, setWorkshop] = useState<any[]>([]);
  const [sports, setSports] = useState<any[]>([]);

  useEffect(() => {
    // Helper to spin up a realtime listener on a Firestore configuration doc key
    const setupListener = (key: string, setFn: (data: any[]) => void, defaultData: any) => {
      const docRef = doc(db, "configs", key);
      return onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists() && docSnap.data() && Array.isArray(docSnap.data().items)) {
          const items = docSnap.data().items;
          setFn(items);
          localStorage.setItem(key, JSON.stringify(items));
        } else {
          // If no doc exists, initialize with defaults
          setDoc(docRef, { items: defaultData }).catch(() => {});
          setFn(defaultData);
        }
      }, (err) => {
        console.error(`onSnapshot error for key ${key}:`, err);
        // Offline fallback
        const local = localStorage.getItem(key);
        if (local) {
          try { setFn(JSON.parse(local)); } catch (_) {}
        } else {
          setFn(defaultData);
        }
      });
    };

    // 1. Home Slides
    const unsubSlides = setupListener('hero-slides', setSlides, [
      { id: '1', type: 'video', url: 'https://res.cloudinary.com/dpogq7cbe/video/upload/v1777008335/bec_web_assets/uqfnp6eghnygsiepu7bq.mp4', title: 'BHUBANESWAR ENGINEERING COLLEGE (BEC)', subtitle: 'Excellence • Innovation • Leadership', description: 'A Premier Institution for tomorrow\'s global engineering leaders.', ctaText: 'Explore Campus' },
      { id: '2', type: 'video', url: 'https://res.cloudinary.com/dpogq7cbe/video/upload/v1776627787/bec_web_assets/khelbjx19zqw0nxysdam.mp4', title: 'EXCELLENCE IN LEARNING', subtitle: 'Aeronautical • Research • Global', description: 'Experience the state-of-the-art infrastructure and vibrant student life at BEC.', ctaText: 'Apply Now' }
    ]);

    // 2. Latest Notices
    const unsubNotices = setupListener('university-notices', setNotices, [
      { id: '1', title: 'Admission 2026-27: Application portal now live', date: 'Dec 15, 2024', category: 'Admission', url: '/admission_query', type: 'image', isNew: true },
      { id: '2', title: 'National Level Workshop on Blockchain', date: 'April 02, 2026', category: 'Events', url: '/admission/news', type: 'image', isNew: true }
    ]);

    // 3. Photo Gallery
    const unsubGallery = setupListener('campus-gallery', setGallery, [
      { id: '1', url: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg', title: 'Main Campus', category: 'Infrastructure' }
    ]);

    // 4. Faculty Directory
    const unsubFaculties = setupListener('university-faculties', setFaculties, [
      { id: '1', name: "Er. Anita Behera", role: "Professor & Head", email: "cse@becbbsr.ac.in", department: "CSE Engg" },
      { id: '2', name: "Dr. Shipra Kumari", role: "Professor", email: "cse@becbbsr.ac.in", department: "CSE Engg" },
      { id: '3', name: "Er. S Hota", role: "Asst. Professor", email: "cse@becbbsr.ac.in", department: "CSE Engg" },
      { id: '4', name: "Dr. Sangram Samal", role: "Professor & Head", email: "aero@becbbsr.ac.in", department: "Aeronautical Engg" },
      { id: '5', name: "Er. A. Panigrahy", role: "Asst. Professor", email: "aero@becbbsr.ac.in", department: "Aeronautical Engg" }
    ]);

    // 5. Placed Alumni
    const unsubStudents = setupListener('selected-students-v2', setStudents, [
      { id: "1", companyRole: "CTTC-BBSR", name: "ANKIT MOHAPATRA", branch: "MECH", degree: "BTech", batch: "2024", packageInfo: "Placed", companyLogo: "/images/events/tata.jpg", photo: "/images/alumni2.jpg", bgColor: "from-blue-600 to-cyan-500" }
    ]);

    // 6. Tour Panorama VR Scenes
    const unsubScenes = setupListener('tour-scenes-v2', setScenes, [
      {
        id: 'exterior',
        name: 'College Main Building',
        image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg',
        hotspots: [
          { x: 45, y: 60, type: 'scene', text: 'Enter Building', targetId: 'interior' }
        ]
      }
    ]);

    // 7. Event Highlights Banners
    const unsubHighlights = setupListener('events-highlights', setHighlights, [
      { id: '1', title: 'Admission Open 2026-27', date: 'Enroll Now', image: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg' }
    ]);

    // 8. Leadership Quotes
    const unsubLeaders = setupListener('leadership-data', setLeaders, [
      { id: '1', role: "CHAIRMAN", title: "VISIONARY FOUNDER", name: "Er. Alok Ranjan Mallick", subtitle: "Chairman, Ayush Group", quote: "Bhubaneswar Engineering College (BEC) is more than just an academic institution...", image: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629465/becweb/chairman.jpg", color: "from-amber-400 to-amber-600" }
    ]);

    // 9. Achievements Roll
    const unsubAchievements = setupListener('achievements', setAchievements, []);

    // 10. Aero Club
    const unsubAeroclub = setupListener('aeroclub', setAeroclub, []);

    // 11. Workshops
    const unsubWorkshop = setupListener('workshop', setWorkshop, []);

    // 12. Sports
    const unsubSports = setupListener('sports', setSports, []);

    // Clean up connections on unmount to prevent memory leaks
    return () => {
      unsubSlides();
      unsubNotices();
      unsubGallery();
      unsubFaculties();
      unsubStudents();
      unsubScenes();
      unsubHighlights();
      unsubLeaders();
      unsubAchievements();
      unsubAeroclub();
      unsubWorkshop();
      unsubSports();
    };
  }, []);

  // Sync / set Doc writers
  const updateNotices = (newNotices: Notice[]) => {
    setDoc(doc(db, "configs", "university-notices"), { items: newNotices }).catch(() => {});
  };

  const updateSlides = (newSlides: Slide[]) => {
    setDoc(doc(db, "configs", "hero-slides"), { items: newSlides }).catch(() => {});
  };

  const updateGallery = (newGallery: GalleryImage[]) => {
    setDoc(doc(db, "configs", "campus-gallery"), { items: newGallery }).catch(() => {});
  };

  const updateFaculties = (newFaculties: Faculty[]) => {
    setDoc(doc(db, "configs", "university-faculties"), { items: newFaculties }).catch(() => {});
  };

  const updateStudents = (newStudents: SelectedStudent[]) => {
    setDoc(doc(db, "configs", "selected-students-v2"), { items: newStudents }).catch(() => {});
  };

  const updateScenes = (newScenes: Scene[]) => {
    setDoc(doc(db, "configs", "tour-scenes-v2"), { items: newScenes }).catch(() => {});
  };

  const updateHighlights = (newHighlights: Highlight[]) => {
    setDoc(doc(db, "configs", "events-highlights"), { items: newHighlights }).catch(() => {});
  };

  const updateLeaders = (newLeaders: Leader[]) => {
    setDoc(doc(db, "configs", "leadership-data"), { items: newLeaders }).catch(() => {});
  };

  const updateAchievements = (newAchievements: any[]) => {
    setDoc(doc(db, "configs", "achievements"), { items: newAchievements }).catch(() => {});
  };

  const updateAeroClub = (newAero: any[]) => {
    setDoc(doc(db, "configs", "aeroclub"), { items: newAero }).catch(() => {});
  };

  const updateWorkshops = (newWorkshop: any[]) => {
    setDoc(doc(db, "configs", "workshop"), { items: newWorkshop }).catch(() => {});
  };

  const updateSports = (newSports: any[]) => {
    setDoc(doc(db, "configs", "sports"), { items: newSports }).catch(() => {});
  };

  return (
    <DataContext.Provider value={{ 
      notices, updateNotices, 
      slides, updateSlides, 
      gallery, updateGallery, 
      faculties, updateFaculties,
      students, updateStudents,
      scenes, updateScenes,
      highlights, updateHighlights,
      leaders, updateLeaders,
      achievements, updateAchievements,
      aeroclub, updateAeroClub,
      workshop, updateWorkshops,
      sports, updateSports
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};
