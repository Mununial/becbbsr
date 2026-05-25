import { useState, useEffect } from 'react';

import { PageLayout } from '../components/PageLayout';
import { BellRing, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/DataContext';


const staticWorkshopImages = [
  { photo: "/photogallery/bec-seminar1.jpg", title: "Technical Seminar" },
  { photo: "/photogallery/bec-seminar4.jpg", title: "Workshop Session" },
  { photo: "/photogallery/DSC_6147.JPG", title: "Guest Lecture" },
  { photo: "/photogallery/DSC_6161.JPG", title: "Student Workshop" },
  { photo: "/photogallery/DSC_6225.JPG", title: "Academic Seminar" },
  { photo: "/photogallery/DSC_6433.JPG", title: "Hands-on Training" },
  { photo: "/photogallery/DSC_6410.JPG", title: "Skill Development" },
  { photo: "/photogallery/DSC_0082.JPG", title: "Campus Workshop" },
  { photo: "/photogallery/1716784991888.jpg", title: "Technical Workshop" },
  { photo: "/photogallery/1716784383423.jpg", title: "Innovation Seminar" },
  { photo: "/photogallery/1716784403238.jpg", title: "Workshop Highlights" },
  { photo: "/photogallery/1716785036364.jpg", title: "Seminar Highlights" },
  { photo: "/photogallery/MAHENDRA SKILL TRAINING-1.jpg", title: "Mahendra Skill Training" },
  { photo: "/photogallery/MAHENDRA SKILL TRAINING-4.jpg", title: "Training Session" },
  { photo: "/photogallery/MAHENDRA SKILL TRAINING-6.jpg", title: "Skill Workshop" },
  { photo: "/photogallery/MAHENDRA SKILL TRAINING-7.jpg", title: "Training Completion" },
];



export const SeminarWorkshop = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { workshop: dynamicImages } = useData();

  const allImages = [...dynamicImages, ...staticWorkshopImages];

  const nextImage = () => setSelectedImage(prev => prev !== null ? (prev + 1) % allImages.length : null);
  const prevImage = () => setSelectedImage(prev => prev !== null ? (prev - 1 + allImages.length) % allImages.length : null);


  return (
    <PageLayout title="Seminars & Workshops">
      <div className="flex flex-col gap-16 mt-4">
        
        {/* News Bar */}
        <div className="bg-primary/5 p-4 rounded-3xl border border-primary/10 flex items-center gap-6 overflow-hidden relative shadow-inner">
           <div className="flex items-center gap-4 bg-primary px-10 py-4 rounded-2xl text-white font-black text-[10px] uppercase tracking-widest relative z-10 shrink-0">
              <BellRing className="w-4 h-4 animate-ring" />
              LATEST UPDATE
           </div>
           <div className="flex-1 whitespace-nowrap overflow-hidden relative group">
              <div className="inline-block animate-marquee group-hover:pause transition-all cursor-pointer">
                 <span className="text-[12px] font-bold text-primary uppercase tracking-wider mx-8">📢 National Workshop on Blockchain registrations closing on Feb 28!</span>
                 <span className="text-[12px] font-bold text-primary uppercase tracking-wider mx-8">📢 Dr. Arvind Kumar to visit BEC for guest lecture next week.</span>
                 <span className="text-[12px] font-bold text-primary uppercase tracking-wider mx-8">📢 New Seminar Series on ESG and Sustainable Engineering started.</span>
              </div>
           </div>
        </div>

        {/* Featured Card */}
        <section className="bg-primary rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden border border-white/5 shadow-2xl">
           <div className="absolute inset-0 bg-primary opacity-5 pointer-events-none"></div>
           <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
              <div className="w-full md:w-2/3 space-y-6 lg:space-y-8">
                 <div className="flex flex-col gap-1">
                    <span className="text-accent font-black uppercase tracking-[0.4em] text-[8px]">Featured Event</span>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-tight">
                       Digital <span className="text-accent italic">Transformation</span> 2026
                    </h2>
                 </div>
                 <p className="text-white/60 font-bold text-sm lg:text-base leading-relaxed max-w-lg">
                    A three-day immersive summit covering Cloud Computing, AI Strategy, and Cybersecurity with industry legends.
                 </p>
                 <div className="grid grid-cols-2 gap-6 lg:gap-8">
                    <div className="space-y-1">
                       <p className="text-white/40 text-[8px] font-black tracking-widest uppercase italic">Conference Date</p>
                       <p className="text-lg font-black uppercase">MARCH 20-22</p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-white/40 text-[8px] font-black tracking-widest uppercase italic">Location</p>
                       <p className="text-lg font-black uppercase tracking-tight">BEC AUDITORIUM</p>
                    </div>
                 </div>
                 <button className="px-10 py-4 bg-white text-primary rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-xl">
                    REGISTER NOW
                 </button>
              </div>
              <div className="w-full md:w-1/3 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-video group self-center">
                 <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629485/becweb/campus_exterior.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
           </div>
        </section>



        {/* Workshop Gallery Section */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-accent"></div>
                <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px]">Visual Highlights</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-primary">
                Workshop <span className="text-accent italic">Gallery</span>
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-white px-8 py-4 rounded-2xl border border-gray-100 shadow-sm text-gray-400">
              <ImageIcon className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">{allImages.length} Captures</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(i)}
                className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl border border-gray-100"
              >
                <img 
                  src={img.photo} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-center px-6">
                      <p className="text-white font-black uppercase tracking-tighter text-sm mb-1">{img.title}</p>
                      <div className="w-8 h-[1px] bg-accent mx-auto"></div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-primary/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors h-12 w-12 flex items-center justify-center rounded-full bg-white/5"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-8 text-white/20 hover:text-white transition-colors p-4 hidden md:block"
            >
              <ChevronLeft className="w-16 h-16" />
            </button>

            <motion.div
              layoutId={`workshop-${selectedImage}`}
              className="relative max-w-6xl w-full h-[80vh] shadow-2xl rounded-[3rem] overflow-hidden border border-white/10"
            >
              <img
                src={allImages[selectedImage].photo}
                alt={allImages[selectedImage].title}
                className="w-full h-full object-contain bg-black"
              />
              <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-gradient-to-t from-black/80 to-transparent p-12 -mx-12 -mb-12">
                <div>
                   <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] block mb-3">Seminar & Workshop Highlights</span>
                   <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-2xl">{allImages[selectedImage].title}</h3>
                </div>
                <div className="text-white/60 font-black text-xs tracking-[0.3em] uppercase bg-white/10 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-2xl whitespace-nowrap">
                   {selectedImage + 1} OF {allImages.length}
                </div>
              </div>
            </motion.div>


            <button
              onClick={nextImage}
              className="absolute right-8 text-white/20 hover:text-white transition-colors p-4 hidden md:block"
            >
              <ChevronRight className="w-16 h-16" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};


