import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, ChevronRight, Send, Phone, MapPin, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import { AdmissionContext } from '../context/AdmissionContext';

/* ─── Floating label helpers ────────── */
const FInput = ({ label, name, type='text', value, onChange, placeholder, required=false }:
  { label:string; name:string; type?:string; value:string; onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void; placeholder?:string; required?:boolean }) => (
  <div className="relative">
    <label className="absolute left-3 top-1.5 text-[9px] font-black text-primary/60 uppercase tracking-widest pointer-events-none z-10">
      {label}{required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
    <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required}
      className="w-full pt-5 pb-2 px-3 rounded-xl text-[13px] font-semibold text-primary bg-white border-2 border-gray-100 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(30,64,175,0.07)] transition-all placeholder:text-gray-300" />
  </div>
);

const FSelect = ({ label, name, value, onChange, options, placeholder, required=false }:
  { label:string; name:string; value:string; onChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void; options:string[]; placeholder:string; required?:boolean }) => (
  <div className="relative">
    <label className="absolute left-3 top-1.5 text-[9px] font-black text-primary/60 uppercase tracking-widest pointer-events-none z-10">
      {label}{required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
    <select name={name} value={value} onChange={onChange} required={required}
      className={`w-full pt-5 pb-2 px-3 rounded-xl text-[13px] font-semibold bg-white border-2 border-gray-100 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(30,64,175,0.07)] transition-all appearance-none cursor-pointer ${!value?'text-gray-300':'text-primary'}`}>
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-300 rotate-90 pointer-events-none" />
  </div>
);

/* ─── Modal ─────────────────────────── */
const AdmissionModal = ({ onClose, defaultCourse='' }: { onClose:()=>void; defaultCourse?:string }) => {
  const [form, setForm] = useState({ name:'', phone:'', email:'', city:'', course:defaultCourse, qualification:'', branch:'', message:'' });
  const [captcha, setCaptcha] = useState(() => {
    const a = Math.floor(Math.random()*9)+1, b = Math.floor(Math.random()*9)+1;
    return { q:`${a} + ${b}`, a:a+b };
  });
  const [captchaInput, setCaptchaInput] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'|'captcha'>('idle');

  const newCaptcha = () => {
    const a = Math.floor(Math.random()*9)+1, b = Math.floor(Math.random()*9)+1;
    setCaptcha({ q:`${a} + ${b}`, a:a+b }); setCaptchaInput('');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (status === 'captcha' || status === 'error') setStatus('idle');
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(captchaInput) !== captcha.a) { 
      setStatus('error'); 
      newCaptcha(); 
      return; 
    }
    
    setStatus('loading');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setTimeout(onClose, 2500);
    } catch (err) {
      console.error(err);
      setStatus('error');
      newCaptcha();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} onClick={onClose}
        className="absolute inset-0 bg-primary/40 backdrop-blur-md" />
      
      <motion.div initial={{ opacity:0, scale:0.95, y:20 }} animate={{ opacity:1, scale:1, y:0 }} exit={{ opacity:0, scale:0.95, y:20 }}
        className="relative w-full max-w-xl bg-white rounded-[42px] shadow-2xl overflow-hidden border border-white/50">
        
        <div className="flex flex-col md:flex-row h-full">
           {/* Sidebar Info */}
           <div className="hidden md:flex w-1/3 bg-primary p-8 text-white flex-col justify-between relative overflow-hidden">
              <ShieldCheck className="absolute -bottom-8 -left-8 w-48 h-48 opacity-10" />
              <div className="relative z-10">
                 <h3 className="text-xl font-black uppercase mb-4 leading-tight">Fast Track Admission</h3>
                 <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest mb-8">Session 2024-25</p>
                 <div className="space-y-6">
                    <div className="flex gap-3">
                       <MapPin className="w-4 h-4 text-accent shrink-0" />
                       <span className="text-[10px] font-bold uppercase">Bhubaneswar Campus</span>
                    </div>
                    <div className="flex gap-3">
                       <Phone className="w-4 h-4 text-accent shrink-0" />
                       <span className="text-[10px] font-bold uppercase">+91 99370 47140</span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="flex-1 p-8 md:p-10 relative">
              <button onClick={onClose} className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <X className="w-5 h-5 text-gray-400" />
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-black text-primary uppercase mb-2">Application Received!</h3>
                    <p className="text-gray-500 font-medium text-sm">Our admission cell will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={submit} className="space-y-4">
                    <div className="mb-6">
                      <h2 className="text-2xl font-black text-primary uppercase tracking-tight">Apply Online</h2>
                      <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Enquire for immediate response</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <FInput label="Full Name" name="name" value={form.name} onChange={change} required />
                      <FInput label="Phone" name="phone" value={form.phone} onChange={change} required />
                    </div>
                    <FInput label="Email Address" name="email" value={form.email} onChange={change} type="email" required />
                    <FSelect label="Interested Course" name="course" value={form.course} onChange={change} options={['B.Tech Engineering', 'Diploma Engineering', 'MBA']} placeholder="Select Course" required />
                    
                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                       <div className="w-full sm:flex-1 bg-gray-50 rounded-xl p-3 flex items-center justify-between border-2 border-dashed border-gray-200">
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Verify: {captcha.q} = </span>
                          <input type="number" value={captchaInput} onChange={e => setCaptchaInput(e.target.value)} required
                            className="w-12 bg-transparent text-center font-black text-primary outline-none border-b-2 border-primary/20 focus:border-primary" />
                       </div>
                       <button disabled={status==='loading'}
                         className="w-full sm:w-auto h-14 px-8 bg-primary rounded-xl text-white font-black uppercase text-[11px] tracking-widest shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                          {status==='loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                          Submit Request
                       </button>
                    </div>
                    {status === 'error' && <p className="text-[10px] font-bold text-red-500 uppercase text-center mt-2">Incorrect answer or server error. Please try again.</p>}
                  </motion.form>
                )}
              </AnimatePresence>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export const AdmissionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [course, setCourse] = useState('');

  const open = (c='') => { setCourse(c); setIsOpen(true); };
  const close = () => setIsOpen(false);

  return (
    <AdmissionContext.Provider value={{ isOpen, open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && <AdmissionModal key={course} onClose={close} defaultCourse={course} />}
      </AnimatePresence>
    </AdmissionContext.Provider>
  );
};
