import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Notice, type Slide, type GalleryImage, type Faculty } from '../types';
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
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    const loadKey = async (key: string, setFn: (data: any) => void, defaultData: any) => {
      try {
        const res = await axios.get(`/api/config/${key}`);
        if (res.data && Array.isArray(res.data)) {
          setFn(res.data);
          localStorage.setItem(key, JSON.stringify(res.data));
        } else {
          const local = localStorage.getItem(key);
          if (local) {
            const parsed = JSON.parse(local);
            if (Array.isArray(parsed)) {
              setFn(parsed);
              axios.post(`/api/config/${key}`, parsed).catch(() => {});
            } else {
              setFn(defaultData);
              axios.post(`/api/config/${key}`, defaultData).catch(() => {});
            }
          } else {
            setFn(defaultData);
            axios.post(`/api/config/${key}`, defaultData).catch(() => {});
          }
        }
      } catch (err) {
        const local = localStorage.getItem(key);
        if (local) {
          const parsed = JSON.parse(local);
          setFn(Array.isArray(parsed) ? parsed : defaultData);
        } else {
          setFn(defaultData);
        }
      }
    };

    loadKey('university-notices', setNotices, [
      { id: '1', title: 'Admission 2026-27: Application portal now live', date: 'Dec 15, 2024', category: 'Admission', url: '/admission_query', type: 'image', isNew: true },
      { id: '2', title: 'National Level Workshop on Blockchain', date: 'April 02, 2026', category: 'Events', url: '/admission/news', type: 'image', isNew: true }
    ]);

    loadKey('hero-slides', setSlides, [
      { id: '1', type: 'video', url: 'https://res.cloudinary.com/dpogq7cbe/video/upload/v1777008335/bec_web_assets/uqfnp6eghnygsiepu7bq.mp4', title: 'BHUBANESWAR ENGINEERING COLLEGE (BEC)', subtitle: 'Excellence • Innovation • Leadership', description: 'A Premier Institution for tomorrow\'s global engineering leaders.', ctaText: 'Explore Campus' },
      { id: '2', type: 'video', url: 'https://res.cloudinary.com/dpogq7cbe/video/upload/v1776627787/bec_web_assets/khelbjx19zqw0nxysdam.mp4', title: 'EXCELLENCE IN LEARNING', subtitle: 'Aeronautical • Research • Global', description: 'Experience the state-of-the-art infrastructure and vibrant student life at BEC.', ctaText: 'Apply Now' }
    ]);

    loadKey('campus-gallery', setGallery, [
      { id: '1', url: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg', title: 'Main Campus', category: 'Infrastructure' }
    ]);

    loadKey('university-faculties', setFaculties, [
      { id: '1', name: "Er. Anita Behera", role: "Professor & Head", email: "cse@becbbsr.ac.in", department: "CSE Engg" },
      { id: '2', name: "Dr. Shipra Kumari", role: "Professor", email: "cse@becbbsr.ac.in", department: "CSE Engg" },
      { id: '3', name: "Er. S Hota", role: "Asst. Professor", email: "cse@becbbsr.ac.in", department: "CSE Engg" },
      { id: '4', name: "Dr. Sangram Samal", role: "Professor & Head", email: "aero@becbbsr.ac.in", department: "Aeronautical Engg" },
      { id: '5', name: "Er. A. Panigrahy", role: "Asst. Professor", email: "aero@becbbsr.ac.in", department: "Aeronautical Engg" }
    ]);
  }, []);

  const updateNotices = (newNotices: Notice[]) => {
    setNotices(newNotices);
    localStorage.setItem('university-notices', JSON.stringify(newNotices));
    axios.post('/api/config/university-notices', newNotices).catch(() => {});
  };

  const updateSlides = (newSlides: Slide[]) => {
    setSlides(newSlides);
    localStorage.setItem('hero-slides', JSON.stringify(newSlides));
    axios.post('/api/config/hero-slides', newSlides).catch(() => {});
  };

  const updateGallery = (newGallery: GalleryImage[]) => {
    setGallery(newGallery);
    localStorage.setItem('campus-gallery', JSON.stringify(newGallery));
    axios.post('/api/config/campus-gallery', newGallery).catch(() => {});
  };

  const updateFaculties = (newFaculties: Faculty[]) => {
    setFaculties(newFaculties);
    localStorage.setItem('university-faculties', JSON.stringify(newFaculties));
    axios.post('/api/config/university-faculties', newFaculties).catch(() => {});
  };

  return (
    <DataContext.Provider value={{ notices, updateNotices, slides, updateSlides, gallery, updateGallery, faculties, updateFaculties }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};
