import { useState, useEffect } from 'react';
import axios from 'axios';
import { PageLayout } from '../components/PageLayout';
import { Trophy, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';


const staticSportsImages = [
  { photo: "/photogallery/20230121_095905_017.jpg", title: "Sports Meet 2023" },
  { photo: "/photogallery/WhatsApp%20Image%202023-02-07%20at%202.42.45%20PM%20(1).jpeg", title: "Cricket Tournament" },
  { photo: "/photogallery/20230120_100045_017.jpg", title: "Atheletics Event" },
  { photo: "/photogallery/WhatsApp%20Image%202023-02-07%20at%202.42.47%20PM.jpeg", title: "Team Spirit" },
  { photo: "/photogallery/20230119_094521.jpg", title: "Football Match" },
  { photo: "/photogallery/1674270022218.jpg", title: "Sports Day Highlights" },
  { photo: "/photogallery/IMG_20230119_20200709.jpg", title: "Indoor Games" },
  { photo: "/photogallery/WhatsApp%20Image%202023-02-07%20at%202.42.48%20PM%20(1).jpeg", title: "Championship" },
  { photo: "/photogallery/1716785118532.jpg", title: "Track and Field" },
  { photo: "/photogallery/1716785130518.jpg", title: "Outdoor Sports" },
  { photo: "/photogallery/1716784336322.jpg", title: "Annual Meet 2024" },
  { photo: "/photogallery/WhatsApp%20Image%202024-05-28%20at%2008.23.08.jpeg", title: "Sports Excellence" },
];

export const SportsGames = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [dynamicImages, setDynamicImages] = useState<any[]>([]);

  useEffect(() => {
    axios.get('/api/sports')
      .then(res => setDynamicImages(res.data));
  }, []);

  const allImages = [...dynamicImages, ...staticSportsImages];

  const nextImage = () => setSelectedImage(prev => prev !== null ? (prev + 1) % allImages.length : null);
  const prevImage = () => setSelectedImage(prev => prev !== null ? (prev - 1 + allImages.length) % allImages.length : null);

  return (
    <PageLayout title="Sports & Games">
      <div className="flex flex-col gap-10 mt-2">

        
        {/* Compact Modern Header */}
        <section className="bg-primary rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden border border-white/5 shadow-2xl">
           <div className="absolute top-0 right-0 p-32 opacity-5 translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000">
              <Trophy className="w-[400px] h-[400px] text-accent" />
           </div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-left space-y-6 max-w-2xl">
                 <div className="flex items-center gap-4">
                    <Trophy className="w-8 h-8 text-accent animate-pulse" />
                    <span className="text-accent text-[8px] font-black uppercase tracking-[0.4em]">Campus Athletics</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                    Championing <span className="text-accent italic font-serif">Spirit</span> & Speed
                 </h2>
                 <p className="text-white/40 font-bold text-[9px] uppercase tracking-widest leading-relaxed">
                    Fostering a culture of physical excellence through our 10+ acre sports infrastructure and Olympic-sized aquatic facilities.
                 </p>
              </div>
              
              <div className="grid grid-cols-3 bg-white/5 backdrop-blur-2xl p-6 rounded-3xl border border-white/5 gap-8 lg:gap-12 shrink-0">
                 <div className="text-center">
                    <p className="text-white/30 text-[8px] font-black tracking-widest uppercase mb-1">Area</p>
                    <p className="text-xl font-black text-white italic">10+ AC</p>
                 </div>
                 <div className="text-center border-x border-white/10 px-8">
                    <p className="text-white/30 text-[8px] font-black tracking-widest uppercase mb-1">Sports</p>
                    <p className="text-xl font-black text-white italic">12+</p>
                 </div>
                 <div className="text-center">
                    <p className="text-white/30 text-[8px] font-black tracking-widest uppercase mb-1">Founded</p>
                    <p className="text-xl font-black text-white italic">2008</p>
                 </div>
              </div>
           </div>
        </section>


        {/* Gallery Section */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-100 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-accent"></div>
                <span className="text-accent font-black uppercase tracking-[0.4em] text-[8px]">Live Coverage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-primary">
                Sports <span className="text-accent italic">Gallery</span>
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-xl border border-gray-100 text-gray-400">
              <ImageIcon className="w-3.5 h-3.5" />
              <span className="text-[9px] font-black uppercase tracking-widest">{allImages.length} Moments</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {allImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(i)}
                className={cn(
                   "group relative rounded-[1.5rem] overflow-hidden cursor-pointer shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500",
                   i === 0 || i === 7 ? "md:col-span-2 md:row-span-2" : "",
                   i === 3 || i === 5 ? "md:row-span-2" : ""
                )}
              >
                <img 
                  src={img.photo} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <p className="text-white font-black uppercase tracking-tighter text-xs mb-1">{img.title}</p>
                      <p className="text-accent text-[8px] font-bold uppercase tracking-widest">View Capture</p>
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
              layoutId={`sports-${selectedImage}`}
              className="relative max-w-6xl w-full h-[80vh] shadow-2xl rounded-[3rem] overflow-hidden border border-white/10"
            >
              <img
                src={allImages[selectedImage].photo}
                alt={allImages[selectedImage].title}
                className="w-full h-full object-contain bg-black"
              />
              <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-gradient-to-t from-black/80 to-transparent p-12 -mx-12 -mb-12">
                <div>
                   <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] block mb-3">BEC Sports Excellence</span>
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
