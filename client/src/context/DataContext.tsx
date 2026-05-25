import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Notice, type Slide, type GalleryImage, type Faculty, type Scene, type SelectedStudent, type Highlight, type Leader } from '../types';
import { db, auth } from '../lib/firebase';
import { signInAnonymously } from 'firebase/auth';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import axios from 'axios';

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
    // Authenticate anonymously so unauthenticated visitors can write to config paths matching Firestore rules
    signInAnonymously(auth).catch((err) => {
      console.warn("Firebase Storage/Firestore anonymous auth skipped:", err);
    });

    // Helper to spin up a realtime listener on a Firestore configuration doc key with multi-device backup polling
    const setupListener = (key: string, setFn: (data: any[]) => void, defaultData: any) => {
      // Track if the Express server has already provided fresh data (server = ground truth)
      let serverHasResponded = false;

      // 1. Synchronously load from localStorage first (offline-first, prevents layout shift/resets)
      const local = localStorage.getItem(key);
      let initialData = defaultData;
      if (local) {
        try {
          const parsed = JSON.parse(local);
          if (Array.isArray(parsed)) {
            initialData = parsed;
          }
        } catch (_) {}
      }
      setFn(initialData);

      // Helper to parse server response
      const parseServerItems = (data: any): any[] | null => {
        const isHtml = typeof data === 'string' && (data.includes('<!DOCTYPE') || data.includes('<html') || data.includes('<head'));
        if (isHtml) return null;
        if (data && Array.isArray(data.items) && data.items.length > 0) return data.items;
        if (Array.isArray(data) && data.length > 0) return data;
        return null;
      };

      // 2. Fetch live config from the local Express server immediately on mount to override with server data if available
      axios.get(`/api/config/${key}`)
        .then(res => {
          const serverItems = parseServerItems(res.data);
          if (serverItems) {
            serverHasResponded = true;
            setFn(serverItems);
            localStorage.setItem(key, JSON.stringify(serverItems));
          }
        })
        .catch(() => {});

      // 3. Start backup background polling loop on local server JSON file (ensures reload-free cross-device updates)
      const pollInterval = setInterval(() => {
        axios.get(`/api/config/${key}`)
          .then(res => {
            const serverItems = parseServerItems(res.data);
            if (serverItems) {
              serverHasResponded = true;
              setFn(serverItems);
              localStorage.setItem(key, JSON.stringify(serverItems));
            }
          })
          .catch(() => {});
      }, 3000);

      // 4. Parallel live Firestore websocket listener
      // Only update from Firestore if server hasn't responded yet (avoids stale Firestore data overwriting fresh server data)
      const docRef = doc(db, "configs", key);
      const unsubFirestore = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists() && docSnap.data() && Array.isArray(docSnap.data().items)) {
          const items = docSnap.data().items;
          // Only apply Firestore data if Express server hasn't loaded anything yet
          // This prevents old Firestore data from overwriting newer server JSON files
          if (!serverHasResponded) {
            setFn(items);
            localStorage.setItem(key, JSON.stringify(items));
          }
        }
      }, (err) => {
        console.warn(`Firestore live sync suspended for key ${key}: ${err.message}`);
      });

      // Cleanup hook to clear intervals and listeners on unmount
      return () => {
        clearInterval(pollInterval);
        unsubFirestore();
      };
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
      { id: '1', role: "CHAIRMAN", title: "VISIONARY FOUNDER", name: "Er. Alok Ranjan Mallick", subtitle: "Chairman, Ayush Group", quote: "Bhubaneswar Engineering College (BEC) is more than just an academic institution — it is a launchpad for visionaries who will shape the future of our nation.", image: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629465/becweb/chairman.jpg", link: "/chairman", color: "from-amber-400 to-amber-600" },
      { id: '2', role: "DIRECTOR", title: "ACADEMICS & ADMINISTRATION", name: "Prof. Dr. B.N. Biswal", subtitle: "Director, BEC Bhubaneswar", quote: "At the end of your journey with BEC, we are certain that you will turn out to be a confident technocrat and stay blessed in all sphere of life.", image: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629467/becweb/director.jpg", link: "/director", color: "from-blue-400 to-blue-600" }
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

  // Sync / set Doc writers (Firestore cloud database + Express local JSON filesystem fallback)
  const updateNotices = (newNotices: Notice[]) => {
    setNotices(newNotices);
    setDoc(doc(db, "configs", "university-notices"), { items: newNotices }).catch(() => {});
    axios.post('/api/config/university-notices', { items: newNotices }).catch(() => {});
    localStorage.setItem("university-notices", JSON.stringify(newNotices));
  };

  const updateSlides = (newSlides: Slide[]) => {
    setSlides(newSlides);
    setDoc(doc(db, "configs", "hero-slides"), { items: newSlides }).catch(() => {});
    axios.post('/api/config/hero-slides', { items: newSlides }).catch(() => {});
    localStorage.setItem("hero-slides", JSON.stringify(newSlides));
  };

  const updateGallery = (newGallery: GalleryImage[]) => {
    setGallery(newGallery);
    setDoc(doc(db, "configs", "campus-gallery"), { items: newGallery }).catch(() => {});
    axios.post('/api/config/campus-gallery', { items: newGallery }).catch(() => {});
    localStorage.setItem("campus-gallery", JSON.stringify(newGallery));
  };

  const updateFaculties = (newFaculties: Faculty[]) => {
    setFaculties(newFaculties);
    setDoc(doc(db, "configs", "university-faculties"), { items: newFaculties }).catch(() => {});
    axios.post('/api/config/university-faculties', { items: newFaculties }).catch(() => {});
    localStorage.setItem("university-faculties", JSON.stringify(newFaculties));
  };

  const updateStudents = (newStudents: SelectedStudent[]) => {
    setStudents(newStudents);
    setDoc(doc(db, "configs", "selected-students-v2"), { items: newStudents }).catch(() => {});
    axios.post('/api/config/selected-students-v2', { items: newStudents }).catch(() => {});
    localStorage.setItem("selected-students-v2", JSON.stringify(newStudents));
  };

  const updateScenes = (newScenes: Scene[]) => {
    setScenes(newScenes);
    setDoc(doc(db, "configs", "tour-scenes-v2"), { items: newScenes }).catch(() => {});
    axios.post('/api/config/tour-scenes-v2', { items: newScenes }).catch(() => {});
    localStorage.setItem("tour-scenes-v2", JSON.stringify(newScenes));
  };

  const updateHighlights = (newHighlights: Highlight[]) => {
    setHighlights(newHighlights);
    setDoc(doc(db, "configs", "events-highlights"), { items: newHighlights }).catch(() => {});
    axios.post('/api/config/events-highlights', { items: newHighlights }).catch(() => {});
    localStorage.setItem("events-highlights", JSON.stringify(newHighlights));
  };

  const updateLeaders = (newLeaders: Leader[]) => {
    setLeaders(newLeaders);
    setDoc(doc(db, "configs", "leadership-data"), { items: newLeaders }).catch(() => {});
    axios.post('/api/config/leadership-data', { items: newLeaders }).catch(() => {});
    localStorage.setItem("leadership-data", JSON.stringify(newLeaders));
  };

  const updateAchievements = (newAchievements: any[]) => {
    setAchievements(newAchievements);
    setDoc(doc(db, "configs", "achievements"), { items: newAchievements }).catch(() => {});
    axios.post('/api/config/achievements', { items: newAchievements }).catch(() => {});
    localStorage.setItem("achievements", JSON.stringify(newAchievements));
  };

  const updateAeroClub = (newAero: any[]) => {
    setAeroclub(newAero);
    setDoc(doc(db, "configs", "aeroclub"), { items: newAero }).catch(() => {});
    axios.post('/api/config/aeroclub', { items: newAero }).catch(() => {});
    localStorage.setItem("aeroclub", JSON.stringify(newAero));
  };

  const updateWorkshops = (newWorkshop: any[]) => {
    setWorkshop(newWorkshop);
    setDoc(doc(db, "configs", "workshop"), { items: newWorkshop }).catch(() => {});
    axios.post('/api/config/workshop', { items: newWorkshop }).catch(() => {});
    localStorage.setItem("workshop", JSON.stringify(newWorkshop));
  };

  const updateSports = (newSports: any[]) => {
    setSports(newSports);
    setDoc(doc(db, "configs", "sports"), { items: newSports }).catch(() => {});
    axios.post('/api/config/sports', { items: newSports }).catch(() => {});
    localStorage.setItem("sports", JSON.stringify(newSports));
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
