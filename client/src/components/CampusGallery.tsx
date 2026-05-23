import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Camera } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { type GalleryImage } from '../types';

interface CampusGalleryProps {
  images: GalleryImage[];
}

export const CampusGallery = ({ images }: CampusGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  const displayImages = filteredImages.slice(0, 6);

  return (
    <section className="py-12 bg-white relative overflow-hidden font-inter" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full mb-3">
              <Camera className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-bold tracking-widest text-[9px] uppercase font-poppins">Campus Chronicles</span>
            </div>
            <h2 className="section-title text-left mb-0">
              Life at <span className="text-accent underline decoration-accent/20 underline-offset-4">BEC</span> Bhubaneswar
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex bg-bg-soft p-1 rounded-xl border border-gray-100 shadow-sm w-full sm:w-auto">
              {['All', 'Infrastructure', 'Events', 'Academic'].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "flex-1 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all",
                    filter === cat ? "bg-primary text-white" : "text-text-muted hover:text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            <Link to="/photo-gallery" className="px-5 py-1.5 border border-primary/10 text-primary hover:bg-primary hover:text-white transition-all font-bold text-[10px] rounded-lg tracking-widest uppercase">
              Archive <ArrowUpRight className="w-3 h-3 ml-2 inline transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedImage(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-bg-soft border border-gray-100 transition-all duration-300 break-inside-avoid shadow-sm hover:shadow-lg card-hover"
            >
              <img loading="lazy" src={img.url} alt={img.title} className="w-full h-auto object-cover transition-transform duration-500 scale-100 group-hover:scale-105" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-accent text-[9px] font-bold uppercase tracking-widest mb-1 block">{img.category}</span>
                <h4 className="text-white text-sm font-bold font-poppins">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-[1100]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img loading="lazy" src={displayImages[selectedImage].url} alt={displayImages[selectedImage].title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary to-transparent">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest block mb-1">{displayImages[selectedImage].category}</span>
                <h3 className="text-white text-xl md:text-2xl font-bold font-poppins">{displayImages[selectedImage].title}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
