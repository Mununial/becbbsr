import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Navigation, X } from 'lucide-react';
import { type Scene } from '../types';

const imgWidth = 4096; // Original panorama width
const imgHeight = 2048; // Original panorama height

export const CampusTour = ({ scenes, onClose }: { scenes: Scene[]; onClose?: () => void }) => {
  const [currentSceneId, setCurrentSceneId] = useState(scenes[0]?.id || 'main');
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const currentScene = scenes.find((s) => s.id === currentSceneId) || scenes[0];

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (onClose) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [onClose]);

  const handleNext = () => {
    const currentIndex = scenes.findIndex((s) => s.id === currentSceneId);
    const nextIndex = (currentIndex + 1) % scenes.length;
    setCurrentSceneId(scenes[nextIndex].id);
    setPosition(0);
  };

  const handlePrev = () => {
    const currentIndex = scenes.findIndex((s) => s.id === currentSceneId);
    const prevIndex = (currentIndex - 1 + scenes.length) % scenes.length;
    setCurrentSceneId(scenes[prevIndex].id);
    setPosition(0);
  };

  // Drag constraints
  const dragConstraints = {
    left: -(imgWidth - containerWidth),
    right: 0,
  };

  if (!currentScene) return null;

  const content = (
    <div className={`${onClose ? 'fixed inset-0 z-[5000] bg-slate-950 flex items-center justify-center p-4 md:p-8' : 'py-20 bg-gray-50'}`}>
      {onClose && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
      )}

      <div className={`relative w-full max-w-7xl mx-auto px-4 ${onClose ? 'z-10' : ''}`}>
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 ${onClose ? 'text-white' : ''}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent rounded-2xl text-primary shadow-lg shadow-accent/20">
                <Navigation className="w-6 h-6" />
              </div>
              <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter font-poppins ${onClose ? 'text-white' : 'text-primary'}`}>
                360° <span className="text-accent underline decoration-accent/10 underline-offset-8">Campus</span> Expo
              </h2>
            </div>
            <p className={`font-medium max-w-xl text-base font-inter ${onClose ? 'text-slate-400' : 'text-slate-500'}`}>
              Experience our world-class infrastructure through an immersive interactive 360° virtual journey.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {onClose && (
              <button
                onClick={onClose}
                className="absolute top-0 right-0 p-4 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-10 h-10" />
              </button>
            )}
            <button
              onClick={handlePrev}
              className={`p-4 rounded-2xl border shadow-lg transition-all hover:-translate-x-1 ${
                onClose ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-gray-100 text-primary hover:bg-gray-50'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="px-8 py-4 rounded-2xl bg-primary text-white font-black uppercase text-xs tracking-widest shadow-xl">
              {currentScene.name}
            </div>
            <button
              onClick={handleNext}
              className={`p-4 rounded-2xl border shadow-lg transition-all hover:translate-x-1 ${
                onClose ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-gray-100 text-primary hover:bg-gray-50'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className={`relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl border-8 group ${
            onClose ? 'border-white/10' : 'border-white'
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <motion.div
                drag="x"
                dragConstraints={dragConstraints}
                dragElastic={0.1}
                onDragStart={() => {}}
                onDrag={(_, info) => setPosition(info.point.x)}
                initial={{ x: currentScene.initialX ? -(currentScene.initialX / 100) * (imgWidth - containerWidth) : 0 }}
                animate={{ x: position }}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                className="absolute inset-0 h-full origin-left"
                style={{ width: imgWidth }}
              >
                <img
                  src={currentScene.image}
                  alt={currentScene.name}
                  className="h-full w-auto max-w-none select-none pointer-events-none"
                />

                {/* Hotspots */}
                {currentScene.hotspots?.map((hotspot, idx) => (
                  <motion.button
                    key={`${currentScene.id}-hotspot-${idx}`}
                    className="absolute group/hotspot"
                    style={{
                      left: `${(hotspot.x / 100) * imgWidth}px`,
                      top: `${(hotspot.y / 100) * imgHeight}px`,
                    }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      if (hotspot.type === 'scene' && hotspot.targetId) {
                        setCurrentSceneId(hotspot.targetId);
                        setPosition(0);
                      }
                    }}
                  >
                    <div className="relative">
                      <div className="absolute inset-[-8px] bg-white/30 rounded-full animate-ping" />
                      <div className="relative w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                      </div>

                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover/hotspot:opacity-100 transition-all pointer-events-none">
                        <div className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg whitespace-nowrap shadow-2xl">
                          {hotspot.text}
                        </div>
                        <div className="w-2 h-2 bg-primary rotate-45 mx-auto -mt-1" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* HUD Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-center bg-gradient-to-t from-black/50 to-transparent pointer-events-none">
            <div className="flex items-center gap-4">
              <div className="w-12 h-1.5 rounded-full bg-white/20 overflow-hidden">
                <motion.div
                  className="h-full bg-accent"
                  animate={{ width: `${Math.abs(position / (imgWidth - containerWidth)) * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Panorama Scan</span>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <span className="text-[10px] font-black text-white/70 uppercase tracking-widest">
                Hint: Click & Drag to explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return content;
};
