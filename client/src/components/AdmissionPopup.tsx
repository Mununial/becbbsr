import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has seen the popup this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenAdmissionPopup');
    
    // Show popup after a short delay (e.g., 3 seconds)
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenAdmissionPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-[24px] overflow-hidden max-w-[800px] w-full shadow-2xl relative flex flex-col md:flex-row group max-h-[90vh] overflow-y-auto"
          >
            {/* Background Image Area (Left on Desktop, Hidden on Mobile) */}
            <div className="hidden md:block md:w-1/2 relative md:h-auto overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" 
                alt="Admission Open" 
                className="absolute w-20 h-20 opacity-30 top-4 left-4 z-10"
              />
              <img 
                src="/images/bec-admission-banner-2026.png" 
                alt="Admission Banner" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent mix-blend-multiply" />
            </div>

            {/* Content Area */}
            <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-red-50 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                   <GraduationCap className="w-4 h-4 text-accent" />
                </div>
                <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase font-poppins">Session 2026-27</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-navy-950 uppercase tracking-tighter leading-tight mb-2 font-poppins">
                Admission <span className="text-accent underline decoration-accent/30 underline-offset-4">Open</span>
              </h2>
              
              <p className="text-slate-500 font-medium text-sm mb-6 leading-relaxed">
                Shape your future at Bhubaneswar Engineering College (BEC). Apply now for our flagship programs.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <div className="px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between font-bold text-xs uppercase tracking-wider text-navy-900 shadow-sm">
                  <span>🎓 B.Tech Programs</span>
                  <span className="text-accent">Available</span>
                </div>
                <div className="px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between font-bold text-xs uppercase tracking-wider text-navy-900 shadow-sm">
                  <span>💼 MBA Program</span>
                  <span className="text-accent">Available</span>
                </div>
                <div className="px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between font-bold text-xs uppercase tracking-wider text-navy-900 shadow-sm">
                  <span>📐 Diploma Courses</span>
                  <span className="text-accent">Available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/admission_query" 
                  onClick={handleClose}
                  className="flex-1 px-6 py-3 bg-primary hover:bg-navy-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest text-center transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/admission/prospectus"
                  onClick={handleClose} 
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-navy-950 rounded-xl text-xs font-bold uppercase tracking-widest text-center transition-all"
                >
                  Details
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
