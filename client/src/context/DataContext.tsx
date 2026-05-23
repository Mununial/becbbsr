import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Notice, type Slide, type GalleryImage, type Faculty } from '../types';

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
    // Load from localStorage on mount
    const savedNotices = localStorage.getItem('university-notices');
    if (savedNotices) {
      setNotices(JSON.parse(savedNotices));
    } else {
      setNotices([
        { id: '1', title: 'Admission 2026-27: Application portal now live', date: 'Dec 15, 2024', category: 'Admission', url: '/admission_query', type: 'image', isNew: true },
        { id: '2', title: 'National Level Workshop on Blockchain', date: 'April 02, 2026', category: 'Events', url: '/admission/news', type: 'image', isNew: true }
      ]);
    }

    const savedSlides = localStorage.getItem('hero-slides');
    if (savedSlides) {
      setSlides(JSON.parse(savedSlides));
    } else {
      setSlides([
        { id: '1', type: 'image', url: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg', title: 'BHUBANESWAR ENGINEERING COLLEGE', subtitle: 'Excellence • Innovation • Leadership', description: 'A Premier Institution for tomorrow\'s global engineering leaders.', ctaText: 'Explore Campus' },
        { id: '2', type: 'image', url: 'https://becbbsr.ac.in/images/slider/slider-bg1.jpg', title: 'EXCELLENCE IN LEARNING', subtitle: 'Aeronautical • Research • Global', description: 'Experience the state-of-the-art infrastructure and vibrant student life at BEC.', ctaText: 'Apply Now' }
      ]);
    }

    const savedGallery = localStorage.getItem('campus-gallery');
    if (savedGallery) {
      setGallery(JSON.parse(savedGallery));
    } else {
      setGallery([
        { id: '1', url: 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg', title: 'Main Campus', category: 'Infrastructure' }
      ]);
    }

    const savedFaculties = localStorage.getItem('university-faculties');
    if (savedFaculties) {
      setFaculties(JSON.parse(savedFaculties));
    } else {
      setFaculties([
        { id: '1', name: "Er. Anita Behera", role: "Professor & Head", email: "cse@becbbsr.ac.in", department: "CSE Engg" },
        { id: '2', name: "Dr. Shipra Kumari", role: "Professor", email: "cse@becbbsr.ac.in", department: "CSE Engg" },
        { id: '3', name: "Er. S Hota", role: "Asst. Professor", email: "cse@becbbsr.ac.in", department: "CSE Engg" },
        { id: '4', name: "Dr. Sangram Samal", role: "Professor & Head", email: "aero@becbbsr.ac.in", department: "Aeronautical Engg" },
        { id: '5', name: "Er. A. Panigrahy", role: "Asst. Professor", email: "aero@becbbsr.ac.in", department: "Aeronautical Engg" }
      ]);
    }
  }, []);

  const updateNotices = (newNotices: Notice[]) => {
    setNotices(newNotices);
    localStorage.setItem('university-notices', JSON.stringify(newNotices));
  };

  const updateSlides = (newSlides: Slide[]) => {
    setSlides(newSlides);
    localStorage.setItem('hero-slides', JSON.stringify(newSlides));
  };

  const updateGallery = (newGallery: GalleryImage[]) => {
    setGallery(newGallery);
    localStorage.setItem('campus-gallery', JSON.stringify(newGallery));
  };

  const updateFaculties = (newFaculties: Faculty[]) => {
    setFaculties(newFaculties);
    localStorage.setItem('university-faculties', JSON.stringify(newFaculties));
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
