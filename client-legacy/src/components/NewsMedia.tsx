import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Award } from 'lucide-react';

const NEWS_ITEMS = [
  { id: 1, image: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629476/becweb/news_a.jpg", source: "The Political & Business Daily" },
  { id: 2, image: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629474/becweb/news_b.jpg", source: "The Sakala" }
];

export const NewsMedia = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-8 bg-white relative overflow-hidden font-inter">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')]" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-2"
          >
            Institutional Archive
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-navy-950 uppercase tracking-tighter mb-2 italic flex items-center justify-center gap-4">
             <div className="w-12 h-px bg-slate-200 hidden md:block" />
             NEWS <span className="text-orange-500 italic">&</span> MEDIA
             <div className="w-12 h-px bg-slate-200 hidden md:block" />
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {NEWS_ITEMS.map((news, i) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImg(news.image)}
            >
               <div className="relative bg-white border-2 border-slate-100 rounded-sm overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 p-1">
                  <div className="h-[280px] md:h-[320px] overflow-hidden bg-slate-50 relative">
                     <img 
                       src={news.image} 
                       alt={news.source} 
                       className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                     />
                     
                     {/* Hover Overlay with Plus Icon */}
                     <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-navy-950 text-white flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500 border border-white/20">
                           <Plus className="w-6 h-6" />
                        </div>
                     </div>
                  </div>
                  {/* Card Content Footer */}
                  <div className="py-4 px-5 bg-white text-left border-t border-slate-50">
                     <div className="flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-widest mb-1.5">
                        <Award className="w-4 h-4" />
                        1st Prize Winner
                     </div>
                     <div className="text-xs font-black text-navy-950 uppercase tracking-tight mb-0.5">{news.source} Archive</div>
                     <p className="text-slate-400 text-xs font-bold leading-tight uppercase">
                        BEC Won International Project Innovation Award 2026
                     </p>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Ticker */}
        <div className="mt-10 py-5 border-y border-slate-50 overflow-hidden relative">
           <motion.div 
             animate={{ x: [0, -600] }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="flex gap-16 whitespace-nowrap"
           >
              {[1, 2].map(i => (
                <div key={i} className="flex items-center gap-12">
                  <span className="text-navy-950 font-black uppercase tracking-widest text-xs">Global Achievement:</span>
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-xs italic">BEC Team Won 1st Prize in International Project Competition - Featured Worldwide.</span>
                  <div className="w-1 h-1 rounded-full bg-orange-500" />
                </div>
              ))}
           </motion.div>
        </div>
      </div>

      {/* Lightbox / Modal - Forced High Priority */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
           <motion.button 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white text-navy-950 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-2xl z-[100001]"
             onClick={() => setSelectedImg(null)}
           >
              <X className="w-6 h-6" />
           </motion.button>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden"
             onClick={(e) => e.stopPropagation()}
           >
              <div className="w-full h-full overflow-auto p-2 scrollbar-thin scrollbar-thumb-slate-200">
                 <img 
                   src={selectedImg} 
                   alt="Full News View" 
                   className="w-full h-auto block" 
                   loading="eager"
                 />
              </div>
           </motion.div>
        </div>
      )}
    </section>
  );
};
