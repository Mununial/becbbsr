import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import {
  Navigation as MapNavigation,
  GraduationCap, X, 
  CheckCircle2, Loader2, Star, Trophy,
  Sparkles
} from 'lucide-react';
import { cn } from '../lib/utils';

interface Slide {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
}

const COURSES = ['B.Tech Engineering','Diploma in Engineering','MBA','M.Tech Research'];
const BRANCHES = ['Aeronautical','Agriculture','Civil','Computer Science','Electrical','Mechanical','MBA'];

const AdmissionModal = ({ onClose }: { onClose: ()=>void }) => {
  const [form, setForm] = useState({ name:'', phone:'', email:'', city:'', course:'', qualification:'', branch:'', message:'' });
  const [captcha, setCaptcha] = useState(() => {
    const a = Math.floor(Math.random()*9)+1, b = Math.floor(Math.random()*9)+1;
    return { q:`${a} + ${b}`, a:a+b };
  });
  const [captchaInput, setCaptchaInput] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'|'captcha'>('idle');

  const newCaptcha = () => {
    const a = Math.floor(Math.random()*9)+1, b = Math.floor(Math.random()*9)+1;
    setCaptcha({ q:`${a} + ${b}`, a:a+b });
    setCaptchaInput('');
  };

  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    setForm(f=>({...f,[e.target.name]:e.target.value}));
    if(status==='captcha'||status==='error') setStatus('idle');
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(parseInt(captchaInput) !== captcha.a){ 
      setStatus('captcha'); 
      newCaptcha();
      return; 
    }
    setStatus('loading');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      newCaptcha();
    } catch { 
      setStatus('error'); 
      newCaptcha();
    }
  };

  return (
    <motion.div
      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      className="fixed inset-0 z-[500] bg-primary/40 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={e=>{ if(e.target===e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ scale:0.9, opacity:0, y:30 }}
        animate={{ scale:1, opacity:1, y:0 }}
        exit={{ scale:0.95, opacity:0, y:20 }}
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-accent" />
        <button onClick={onClose} className="absolute top-6 right-6 z-20 p-2 rounded-full hover:bg-gray-50 transition-colors">
          <X className="w-6 h-6 text-primary" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
          {/* Left Decorative Side */}
          <div className="md:col-span-2 bg-primary p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">Start your journey today.</h3>
              <p className="text-white/70 font-medium mb-8">Join thousands of students shaping the future at BEC.</p>
              
              <div className="space-y-4">
                {[
                  { icon: Trophy, text: 'AICTE Approved & BPUT Affiliated' },
                  { icon: Star, text: 'Top Placement Records' },
                  { icon: GraduationCap, text: 'World-class Faculty' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-12 border-t border-white/10 mt-12">
              <p className="text-xs uppercase tracking-widest font-bold text-white/40 mb-2">Need Help?</p>
              <div className="flex flex-col gap-1">
                <a href="tel:+916742556677" className="text-sm font-bold hover:text-accent transition-colors">+91 674 2556677</a>
                <a href="mailto:info@becbbsr.ac.in" className="text-sm font-medium text-white/60">info@becbbsr.ac.in</a>
              </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="md:col-span-3 p-8 md:p-12">
            <AnimatePresence mode="wait">
              {status==='success' ? (
                <motion.div key="success" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h4 className="text-2xl font-black text-primary mb-2">Application Received!</h4>
                  <p className="text-gray-500 mb-8">Our admissions team will contact you shortly.</p>
                  <button onClick={onClose} className="px-10 py-4 bg-primary text-white rounded-xl font-black uppercase text-xs tracking-widest shadow-xl">Done</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} className="space-y-5">
                  <div className="space-y-1">
                    <h4 className="text-2xl font-black text-primary">Admission Query</h4>
                    <p className="text-sm text-gray-400">Fill out the form below and we'll get back to you.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary/60 uppercase ml-1">Full Name</label>
                      <input name="name" value={form.name} onChange={change} required placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 focus:border-primary focus:bg-white outline-none transition-all text-sm font-semibold" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary/60 uppercase ml-1">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={change} required placeholder="Your Phone" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 focus:border-primary focus:bg-white outline-none transition-all text-sm font-semibold" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary/60 uppercase ml-1">Course Interest</label>
                      <select name="course" value={form.course} onChange={change} required className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 outline-none transition-all text-sm font-semibold">
                        <option value="">Select Course</option>
                        {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary/60 uppercase ml-1">Preferred Branch</label>
                      <select name="branch" value={form.branch} onChange={change} required className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 outline-none transition-all text-sm font-semibold">
                        <option value="">Select Branch</option>
                        {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-primary/60 uppercase ml-1">Captcha: {captcha.q} = ?</label>
                    <div className="flex gap-4">
                      <input type="number" value={captchaInput} onChange={e=>setCaptchaInput(e.target.value)} required placeholder="Answer" className="w-32 px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 outline-none transition-all text-sm font-semibold text-center" />
                      <button type="submit" disabled={status==='loading'} className="flex-1 px-8 py-4 bg-primary text-white rounded-xl font-black uppercase text-xs tracking-widest shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all">
                        {status==='loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Sparkles className="w-4 h-4" /> Send Inquiry</>}
                      </button>
                    </div>
                  </div>
                  {status==='captcha' && <p className="text-red-500 text-xs font-bold text-center mt-2 uppercase tracking-widest">Invalid answer!</p>}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Hero = ({ slides, onTourClick }: { slides: Slide[], onTourClick: ()=>void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (slides && slides.length > 0 && currentIndex >= slides.length) {
      setCurrentIndex(0);
    }
  }, [slides, currentIndex]);

  useEffect(()=>{
    if (!slides || slides.length === 0) return;
    const s = slides[currentIndex];
    
    let timer: NodeJS.Timeout;
    if (s?.type === 'image' || s?.type === 'modern') {
      timer = setTimeout(() => {
        setCurrentIndex(p => (p + 1) % slides.length);
      }, 6000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentIndex, slides.length]); // Depend on length instead of full array reference

  const current = slides ? slides[currentIndex] : undefined;

  return (
    <>
      <section className="relative h-[85vh] w-full overflow-hidden bg-[#0F172A] font-inter">
        <AnimatePresence mode="wait">
          {current?.type === 'modern' ? (
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-[#FFFBEB] bg-[radial-gradient(#E2E8F0_1.5px,transparent_1.5px)] [background-size:24px_24px] [background-position:center] overflow-hidden flex items-center"
            >
              {/* Modern Graphic Slide Layout */}
              <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-16">
                
                {/* Left Content Side */}
                <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8 relative z-20">
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-orange-500/10 border border-orange-500/20"
                  >
                    <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                    <span className="text-orange-600 font-black tracking-widest text-[10px] uppercase font-poppins">Admissions Open 2026-27</span>
                  </motion.div>

                  <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black text-slate-900 leading-[1.05] uppercase tracking-tighter font-poppins">
                    {/* Animated Word-by-Word Text */}
                    {(current.title || "Join the BEC Community").split(" ").map((word, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1, type: "spring", damping: 12 }}
                        className={idx % 2 === 1 ? "text-orange-600 inline-block" : "inline-block"}
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, type: "spring", damping: 15 }}
                    className="text-slate-600 text-sm sm:text-lg font-semibold font-inter max-w-xl leading-relaxed"
                  >
                    {current.description || "Admissions for the 2026-27 session are now open. Secure your future with us today."}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, type: "spring", damping: 15 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                    <motion.button 
                      onClick={() => setShowForm(true)}
                      whileHover={{ scale: 1.05, translateY: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4.5 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-[0_20px_50px_-10px_rgba(234,88,12,0.4)] flex items-center justify-center gap-3 transition-all"
                    >
                      Apply Now <GraduationCap className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button 
                      onClick={onTourClick}
                      whileHover={{ scale: 1.05, translateY: -4, backgroundColor: "rgba(30,58,138,0.05)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4.5 border border-slate-300 text-slate-800 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 transition-all"
                    >
                      Campus Tour <MapNavigation className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Right Graphic/Student Side */}
                <div className="lg:col-span-5 relative w-full h-full min-h-[350px] lg:min-h-0 flex items-center justify-center z-10">
                  {/* Modern nested chevrons background elements */}
                  <motion.div 
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", damping: 15 }}
                    className="absolute right-0 w-[80%] max-w-[360px] h-[360px] md:h-[420px] flex flex-col items-center justify-center"
                  >
                    {/* Layered Chevrons/Arrows */}
                    <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100">
                      {/* Chevron 1 - Blue */}
                      <svg className="w-64 h-64 absolute text-blue-900 fill-current drop-shadow-xl -translate-y-12" viewBox="0 0 100 100">
                        <polygon points="50,15 90,45 75,55 50,35 25,55 10,45" />
                      </svg>
                      {/* Chevron 2 - Orange */}
                      <svg className="w-64 h-64 absolute text-orange-500 fill-current drop-shadow-xl translate-y-6" viewBox="0 0 100 100">
                        <polygon points="50,15 90,45 75,55 50,35 25,55 10,45" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Decorative backgrounds like stars/crosses/dots */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Dots Grid pattern top right */}
                    <div className="absolute top-12 right-4 w-16 h-16 bg-[radial-gradient(#EA580C_2px,transparent_2px)] [background-size:12px_12px] opacity-40" />
                    {/* X mark bottom left */}
                    <div className="absolute bottom-8 left-12 text-slate-300 font-poppins text-lg select-none">
                      ✕ ✕ ✕
                    </div>
                  </div>

                  {/* Smiling College Student Image Cutout */}
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, type: "spring", damping: 18 }}
                    className="absolute bottom-0 w-[95%] max-w-[320px] sm:max-w-[360px] h-[85%] sm:h-[95%] flex items-end justify-center"
                  >
                    <img 
                      src={current?.url || "https://res.cloudinary.com/dpogq7cbe/image/upload/v1779825331/becweb/student_hero_cutout.jpg"} 
                      alt="Student Campaign" 
                      className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] z-20"
                    />
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ) : (
            // Fullscreen standard Image/Video Slide
            <motion.div 
              key={current?.id || currentIndex} 
              initial={{ opacity:0, scale:1.05 }} 
              animate={{ opacity:1, scale:1 }} 
              exit={{ opacity:0 }}
              transition={{ duration: 1, ease: "easeInOut" }} 
              className="absolute inset-0"
            >
              {current?.type === 'video' ? (
                <video 
                  key={`video-${current.id}`}
                  ref={videoRef} 
                  src={current.url} 
                  autoPlay 
                  muted 
                  playsInline 
                  loop={slides.length === 1}
                  onEnded={() => {
                     if (slides.length > 1) {
                        setCurrentIndex(p => (p + 1) % slides.length);
                     }
                  }} 
                  className="w-full h-full object-cover" 
                />
              ) : current ? (
                <img src={current.url} alt={current.title} className="w-full h-full object-cover animate-[zoom_25s_infinite_alternate]" />
              ) : (
                <div className="w-full h-full bg-navy-950 flex items-center justify-center">
                   <Loader2 className="w-10 h-10 text-primary animate-spin" />
                </div>
              )}
              
              {/* Premium Subtle Overlay to protect contrast & ensure perfect text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/30 via-transparent to-[#0F172A]/85 z-10" />
            </motion.div>
          )}
        </AnimatePresence>

        {current?.type !== 'modern' && (
          <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col justify-center items-center text-center pt-24 pb-32">
            <motion.div 
              key={`content-${current?.id || 'empty'}`}
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="max-w-5xl"
            >
              <div className="inline-flex items-center gap-3 mb-12 stitch-badge-white py-2 px-6 bg-white/5 border-white/10 backdrop-blur-2xl transition-all hover:bg-white/10" data-aos="fade-down">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-white font-black tracking-[0.4em] text-xs uppercase font-poppins">Admissions Open 2026-27</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-[84px] font-black text-white mb-10 leading-[1] uppercase tracking-tighter font-poppins drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {(current?.title || '').split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? "text-accent highlight underline-offset-[16px] decoration-accent/20" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              
              <p className="text-sm md:text-lg text-white/80 font-medium mb-16 max-w-3xl mx-auto leading-relaxed font-inter tracking-wide px-4">
                {current?.description || 'Leading Excellence in Engineering Education'}
              </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button 
                onClick={() => setShowForm(true)}
                whileHover={{ scale: 1.05, translateY: -8 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary min-w-[220px] py-5 bg-accent text-white shadow-[0_25px_60px_-15px_rgba(6,182,212,0.6)]"
              >
                Inquire Now <GraduationCap className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                onClick={onTourClick}
                whileHover={{ scale: 1.05, translateY: -8, backgroundColor: "rgba(255,255,255,1)", color: "#1E3A8A" }}
                whileTap={{ scale: 0.95 }}
                className="min-w-[220px] py-5 bg-white/5 text-white border border-white/20 backdrop-blur-2xl rounded-[16px] font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 transition-all duration-700 hover:shadow-2xl hover:shadow-white/5"
              >
                Campus Tour <MapNavigation className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
        )}

        {/* Global Stats - Subtle */}
        <div className="absolute bottom-16 left-12 right-12 z-40 hidden lg:flex justify-between items-center transition-opacity duration-700">
           {current?.type !== 'modern' ? (
             <div className="flex gap-12 font-poppins text-white opacity-40 hover:opacity-100 transition-opacity">
                <div className="flex flex-col"><span className="text-2xl font-black">2008</span><span className="text-xs uppercase tracking-widest text-slate-400">Founded Entrance</span></div>
                <div className="flex flex-col"><span className="text-2xl font-black">40+</span><span className="text-xs uppercase tracking-widest text-slate-400">Acre Campus</span></div>
                <div className="flex flex-col"><span className="text-2xl font-black">250+</span><span className="text-xs uppercase tracking-widest text-slate-400">Top Recruiters</span></div>
             </div>
           ) : (
             <div className="w-4 h-4" /> // Spacer to keep progress dots right-aligned
           )}

           {/* Progress Indicator */}
           <div className="flex gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-1.5 transition-all duration-700 rounded-full",
                  i === currentIndex 
                    ? (current?.type === 'modern' ? "w-16 bg-orange-600" : "w-16 bg-accent") 
                    : (current?.type === 'modern' ? "w-10 bg-slate-300 hover:bg-slate-400" : "w-10 bg-white/20 hover:bg-white/40")
                )}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showForm && <AdmissionModal onClose={()=>setShowForm(false)} />}
      </AnimatePresence>

      <style>{`
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </>
  );
};
