import { useState, useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Camera, Sparkles, Layout, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

import axios from 'axios';

const categories = ['All Archive', 'Convocation', 'Campus Life', 'Placements', 'Laboratory'];

const staticGalleryImages = [
  { photo: "https://becbbsr.ac.in/photogallery/DSC_6692.JPG", title: "Class of 2024", category: "Convocation" },
  { photo: "https://becbbsr.ac.in/photogallery/DSC_6661.JPG", title: "Academic Procession", category: "Convocation" },
  { photo: "https://becbbsr.ac.in/photogallery/DS4008.jpeg", title: "Joy of Success", category: "Convocation" },
  { photo: "https://becbbsr.ac.in/photogallery/DSC_6595.JPG", title: "Degree Presentation", category: "Convocation" },
  { photo: "https://becbbsr.ac.in/photogallery/DSC_6539.JPG", title: "Institutional Pride", category: "Convocation" },
  { photo: "https://becbbsr.ac.in/photogallery/Tech%20Mahindra%20Feb-2026.jpeg", title: "Tech Mahindra Selection", category: "Placements" },
  { photo: "https://becbbsr.ac.in/photogallery/WhatsApp%20Image%202024-05-28%20at%2014.09.16.jpeg", title: "Auditorium Meet", category: "Campus Life" },
  { photo: "https://becbbsr.ac.in/photogallery/WhatsApp%20Image%202024-05-28%20at%2013.56.56.jpeg", title: "Research Lab", category: "Laboratory" },
  { photo: "https://becbbsr.ac.in/photogallery/WhatsApp%20Image%202024-05-28%20at%2014.15.37.jpeg", title: "Evening Campus", category: "Campus Life" },
  { photo: "https://becbbsr.ac.in/photogallery/WhatsApp%20Image%202024-05-28%20at%2014.12.50.jpeg", title: "Student Interaction", category: "Campus Life" },
  { photo: "https://becbbsr.ac.in/photogallery/DSC03646.JPG", title: "Engineering Wing", category: "Campus Life" },
  { photo: "https://becbbsr.ac.in/photogallery/IMG_0009.JPG", title: "Botanical Garden", category: "Campus Life" },
  { photo: "https://becbbsr.ac.in/photogallery/1716784444433.jpg", title: "Activity Hub", category: "Campus Life" },
  { photo: "https://becbbsr.ac.in/photogallery/1716784228318.jpg", title: "Cultural Festival", category: "Campus Life" },
  { photo: "https://becbbsr.ac.in/photogallery/WhatsApp%20Image%202024-05-28%20at%2014.06.55.jpeg", title: "Project Exhibition", category: "Laboratory" },
  { photo: "https://becbbsr.ac.in/photogallery/1716784946464.jpg", title: "Admin Block", category: "Campus Life" },
  { photo: "https://becbbsr.ac.in/photogallery/1716784927289.jpg", title: "Institutional View", category: "Campus Life" },
  { photo: "https://becbbsr.ac.in/photogallery/1716784198001.jpg", title: "Aerial Shot", category: "Campus Life" },
  { photo: "https://becbbsr.ac.in/photogallery/20230202_101207.jpg", title: "Alumni Meet", category: "Campus Life" },
  { photo: "https://becbbsr.ac.in/photogallery/1716784177259.jpg", title: "Lush Greenery", category: "Campus Life" },
];

export const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All Archive');
  const [dynamicImages, setDynamicImages] = useState<any[]>([]);

  useEffect(() => {
    axios.get('/api/gallery')
      .then(res => setDynamicImages(res.data.map((img: any) => ({ ...img, category: 'Uploads' }))));
  }, []);

  const allImages = [...dynamicImages, ...staticGalleryImages];
  const filteredImages = activeCategory === 'All Archive' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  const nextImage = () => setSelectedImage(prev => prev !== null ? (prev + 1) % filteredImages.length : null);
  const prevImage = () => setSelectedImage(prev => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null);

  return (
    <PageLayout title="Gallery Center">
      <div className="flex flex-col gap-0 -mt-10 overflow-hidden">
        
        {/* Dynamic Glass Hero */}
        <section className="relative h-[40vh] mb-12 flex items-center justify-center p-8">
           <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full"></div>
           </div>
           
           <div className="relative z-10 text-center space-y-4">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex justify-center mb-6">
                 <div className="px-6 py-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-navy-950 text-[10px] font-black uppercase tracking-[0.4em]">Official BEC Media Suite</span>
                 </div>
              </motion.div>
              <h1 className="text-5xl md:text-8xl font-black text-navy-900 tracking-tighter uppercase leading-[0.8] mb-4 overflow-hidden">
                Visual <br /> <span className="text-primary italic font-serif">Narrative</span>
              </h1>
              <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.5em] mt-8">Captured Excellence &bull; Archive 2024</p>
           </div>
        </section>

        {/* Floating Category Navigation */}
        <div className="sticky top-20 z-40 px-6 mb-16">
           <div className="container mx-auto max-w-4xl bg-navy-900/10 backdrop-blur-3xl border border-navy-900/5 p-2 rounded-[2.5rem] flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
              {['All Archive', 'Convocation', 'Campus Life', 'Placements', 'Laboratory'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-8 py-4 rounded-[2rem] text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                    activeCategory === cat 
                    ? "bg-navy-900 text-white shadow-2xl shadow-navy-900/30 scale-105" 
                    : "text-navy-900/40 hover:text-navy-900 hover:bg-white/40"
                   )}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* Dynamic Multi-Column Gallery (No Cropping) */}
        <section className="container mx-auto px-6 mb-32">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.photo + i}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  onClick={() => setSelectedImage(i)}
                  className="group relative cursor-pointer break-inside-avoid"
                >
                   {/* Card Frame */}
                   <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-navy-900/5 border border-navy-900/5 transition-all duration-700 hover:shadow-primary/20 hover:-translate-y-2 group-hover:scale-[1.02]">
                      <img 
                        src={img.photo} 
                        alt={img.title}
                        className="w-full h-auto object-contain bg-gray-50 transition-all duration-1000"
                        style={{ maxHeight: '80vh' }}
                      />
                      
                      {/* Interactive Glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                         <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center gap-3 mb-4">
                               <div className="w-10 h-[1px] bg-primary"></div>
                               <span className="text-primary text-[9px] font-black uppercase tracking-[0.3em]">{img.category}</span>
                            </div>
                            <h4 className="text-white text-3xl font-black uppercase tracking-tighter leading-none italic drop-shadow-2xl">{img.title}</h4>
                            <div className="mt-6 flex items-center gap-2 text-white/50">
                               <Compass className="w-4 h-4 text-primary" />
                               <span className="text-[10px] font-black uppercase tracking-widest">Enlarge Momentum</span>
                            </div>
                         </div>
                      </div>
                      
                      {/* Top Accent */}
                      <div className="absolute top-8 right-8 mix-blend-overlay opacity-30 group-hover:opacity-100 transition-opacity">
                         <Camera className="w-6 h-6 text-white" />
                      </div>
                   </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </div>

      {/* Cinematic Full-View Display */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-navy-950/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
          >
             {/* Large Watermark */}
             <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none opacity-5">
                <h2 className="text-[30vw] font-black text-white italic tracking-tighter uppercase whitespace-nowrap">BEC ARCHIVE</h2>
             </div>

             <button
               onClick={() => setSelectedImage(null)}
               className="absolute top-8 right-8 text-white/20 hover:text-white transition-all transform hover:rotate-90 z-50 p-4 bg-white/5 rounded-full border border-white/10"
             >
               <X className="w-10 h-10" />
             </button>

             <div className="absolute left-8 bottom-12 flex flex-col items-center gap-4 hidden md:flex z-50">
                <div className="w-[1px] h-32 bg-white/10"></div>
                <div className="rotate-90 origin-left whitespace-nowrap text-[8px] font-black text-white/30 uppercase tracking-[0.5em]">Scroll to Explore Series</div>
             </div>

             <button
               onClick={prevImage}
               className="absolute left-12 w-20 h-20 rounded-full text-white/20 hover:text-white hover:bg-white/5 transition-all hidden md:flex items-center justify-center border border-white/5 group z-50"
             >
               <ChevronLeft className="w-12 h-12 group-hover:-translate-x-2 transition-transform" />
             </button>

             <motion.div
               layoutId={`gallery-${selectedImage}`}
               className="relative max-w-7xl w-full h-[85vh] flex flex-col justify-center items-center shadow-2xl rounded-[3rem] overflow-hidden"
             >
                <img
                  src={filteredImages[selectedImage].photo}
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-full object-contain drop-shadow-[0_45px_100px_rgba(0,0,0,0.5)]"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent">
                   <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                      <div className="flex-1 space-y-6">
                         <div className="flex items-center gap-3">
                            <div className="bg-primary px-3 py-1 rounded-full text-[8px] font-black text-white uppercase tracking-widest shadow-lg">{filteredImages[selectedImage].category}</div>
                            <div className="w-12 h-[1px] bg-white/20"></div>
                         </div>
                         <h3 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic font-serif">
                            {filteredImages[selectedImage].title}
                         </h3>
                         <p className="text-white/40 text-xs font-bold uppercase tracking-[0.4em] max-w-xl">
                            Institutional masterpiece capturing the vibrant legacy of Bhubaneswar Engineering College Campus Archives.
                         </p>
                      </div>
                      <div className="flex flex-col items-end gap-4 scale-75 md:scale-100 origin-right">
                         <div className="text-white/20 text-9xl font-black leading-none italic tracking-tighter opacity-20">{selectedImage + 1}</div>
                         <div className="text-primary text-[10px] font-black uppercase tracking-[0.5em]">Of {filteredImages.length} Archive Files</div>
                      </div>
                   </div>
                </div>
             </motion.div>

             <button
               onClick={nextImage}
               className="absolute right-12 w-20 h-20 rounded-full text-white/20 hover:text-white hover:bg-white/5 transition-all hidden md:flex items-center justify-center border border-white/5 group z-50"
             >
               <ChevronRight className="w-12 h-12 group-hover:translate-x-2 transition-transform" />
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};
