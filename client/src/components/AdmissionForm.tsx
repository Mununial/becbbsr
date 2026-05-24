import { useState, useRef } from 'react';
import axios from 'axios';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  CheckCircle2, Loader2, ShieldCheck,
  ChevronRight, Zap, Star, Trophy, Clock, ArrowRight, Building2
} from 'lucide-react';

/* ─── Data ─────────────────────────────────── */
const WHY_BEC = [
  { icon: Trophy,        text: 'AICTE Approved • BPUT Affiliated' },
  { icon: Star,          text: '90%+ Placements — TCS, Infosys & more' },
  { icon: GraduationCap, text: 'B.Tech | MBA | Diploma | 6 Branches' },
  { icon: Building2,     text: 'Aeronautical Hangar & Modern Labs' },
  { icon: Clock,         text: '40-Acre Eco Campus, Bhubaneswar' },
];

const STATS = [
  { value: '16+', label: 'Years' },
  { value: '5k+', label: 'Alumni' },
  { value: '90%', label: 'Placed' },
  { value: '6',   label: 'Branches' },
];

const COURSES = [
  'B.Tech Engineering',
  'Diploma in Engineering',
  'MBA',
  'ME / M.Tech Research',
];

const QUALIFICATIONS = [
  'Class 10', 'Class 12', 'Passed 12 (PCM)',
  'Diploma Holder', 'Graduate / B.Tech', 'Other',
];

const BRANCHES = [
  'Aero & AME Engg.',
  'Agriculture Engg.',
  'Civil & Civil (Env.) Engg.',
  'CSE & CSE (Data Science)',
  'EE & Electrical (CS) Engg.',
  'Mech & MM (Additive Mfg.)',
  'MBA',
];

/* ─── Micro animation variants ───────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

/* ─── Floating label helpers ─────────────────── */
const Field = ({
  label, name, type = 'text', value, onChange, placeholder, required = false, touched
}: {
  label: string; name: string; type?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; required?: boolean; touched: boolean;
}) => {
  const invalid = required && touched && !value;
  return (
    <motion.div variants={fadeUp()} className="relative group">
      <label className={`absolute left-3 top-2 text-[9px] font-black uppercase tracking-widest pointer-events-none transition-colors duration-200 ${invalid ? 'text-red-400' : 'text-primary/70 group-focus-within:text-primary'}`}>
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <input
        name={name} type={type} value={value} onChange={onChange}
        placeholder={placeholder} required={required}
        className={`w-full pt-6 pb-2.5 px-3 rounded-xl text-[13px] font-semibold text-primary bg-white outline-none transition-all duration-200 border-2 placeholder:text-gray-300 ${
          invalid
            ? 'border-red-300 focus:border-red-400 shadow-[0_0_0_3px_rgba(239,68,68,0.08)]'
            : 'border-gray-100 focus:border-primary focus:shadow-[0_0_0_3px_rgba(30,64,175,0.08)]'
        }`}
      />
    </motion.div>
  );
};

const SelectField = ({
  label, name, value, onChange, options, placeholder, required = false, touched
}: {
  label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[]; placeholder: string; required?: boolean; touched: boolean;
}) => {
  const invalid = required && touched && !value;
  return (
    <motion.div variants={fadeUp()} className="relative group">
      <label className={`absolute left-3 top-2 text-[9px] font-black uppercase tracking-widest pointer-events-none transition-colors duration-200 ${invalid ? 'text-red-400' : 'text-primary/70 group-focus-within:text-primary'}`}>
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <select
        name={name} value={value} onChange={onChange} required={required}
        className={`w-full pt-6 pb-2.5 px-3 rounded-xl text-[13px] font-semibold bg-white outline-none transition-all duration-200 border-2 appearance-none cursor-pointer ${
          invalid
            ? 'border-red-300 focus:border-red-400 shadow-[0_0_0_3px_rgba(239,68,68,0.08)]'
            : 'border-gray-100 focus:border-primary focus:shadow-[0_0_0_3px_rgba(30,64,175,0.08)]'
        } ${!value ? 'text-gray-300' : 'text-primary'}`}
      >
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 rotate-90 pointer-events-none" />
    </motion.div>
  );
};

/* ─── Main Component ─────────────────────────── */
export const AdmissionForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({
    name: '', phone: '', email: '', city: '',
    course: '', qualification: '', branch: '', message: '',
  });
  const [captcha, setCaptcha] = useState(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    return { q: `${a} + ${b}`, a: a + b };
  });
  const [captchaInput, setCaptchaInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'captcha'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const newCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ q: `${a} + ${b}`, a: a + b });
    setCaptchaInput('');
  };

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setTouched(t => ({ ...t, [e.target.name]: true }));
    if (status === 'error' || status === 'captcha') setStatus('idle');
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(captchaInput) !== captcha.a) {
      setStatus('captcha');
      newCaptcha();
      return;
    }

    setStatus('loading');
    try {
      await axios.post('/api/admission', form);
      setStatus('success');
      setForm({ name: '', phone: '', email: '', city: '', course: '', qualification: '', branch: '', message: '' });
      setTouched({});
      newCaptcha();
    } catch {
      setStatus('error');
      newCaptcha();
    }
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[500px] flex flex-col items-center justify-center text-center p-12 bg-white rounded-[40px] shadow-2xl border-4 border-emerald-50">
        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="w-24 h-24 rounded-3xl bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-emerald-200">
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h2 className="text-4xl font-black text-primary uppercase tracking-tighter mb-4">Application Sent!</h2>
        <p className="text-gray-500 font-medium max-w-sm mb-10 leading-relaxed">
          Thank you for choosing BEC. Our admissions team will contact you within 24 hours.
        </p>
        <button onClick={() => setStatus('idle')} className="px-10 py-4 bg-primary text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl active:scale-95 transition-all">
          New Application
        </button>
      </motion.div>
    );
  }

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start py-20">
      
      {/* Left: Content Side */}
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className="flex flex-col gap-10">
        <div className="space-y-4">
          <motion.div variants={fadeUp()} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Admission 2026 Open</span>
          </motion.div>
          <motion.h2 variants={fadeUp(0.1)} className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tighter leading-[0.95]">
            Secure your <span className="text-accent">Success</span> at BEC.
          </motion.h2>
          <motion.p variants={fadeUp(0.2)} className="text-lg text-gray-500 font-medium leading-relaxed max-w-md">
            Join a legacy of excellence with industry-aligned programs and 90%+ placement track record.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((s, i) => (
            <motion.div key={i} variants={fadeUp(0.3 + i * 0.1)} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
              <h4 className="text-3xl font-black text-primary tracking-tighter mb-1">{s.value}</h4>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
           {WHY_BEC.map((item, i) => (
             <motion.div key={i} variants={fadeUp(0.6 + i * 0.1)} className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                   <item.icon className="w-5 h-5" />
                </div>
                <p className="text-sm font-bold text-gray-600 group-hover:text-primary transition-colors">{item.text}</p>
             </motion.div>
           ))}
        </div>
      </motion.div>

      {/* Right: Form Side */}
      <motion.div
        initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger}
        className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_32px_80px_-20px_rgba(30,64,175,0.1)] border border-gray-100 relative"
      >
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <ShieldCheck className="w-48 h-48 text-primary" />
        </div>

        <form onSubmit={submit} className="flex flex-col gap-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Candidate Name" name="name" value={form.name} onChange={change} required touched={touched.name} />
            <Field label="WhatsApp Phone" name="phone" value={form.phone} onChange={change} required type="tel" touched={touched.phone} />
          </div>

          <Field label="Email Address" name="email" value={form.email} onChange={change} required type="email" touched={touched.email} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="City/Location" name="city" value={form.city} onChange={change} required touched={touched.city} />
            <SelectField label="Interested Course" name="course" value={form.course} onChange={change} placeholder="Select Course" options={COURSES} required touched={touched.course} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectField label="Qualification" name="qualification" value={form.qualification} onChange={change} placeholder="Qualification" options={QUALIFICATIONS} required touched={touched.qualification} />
            <SelectField label="Prefered Branch" name="branch" value={form.branch} onChange={change} placeholder="Specialization" options={BRANCHES} required touched={touched.branch} />
          </div>

          <div className="relative group">
            <textarea name="message" value={form.message} onChange={change} placeholder="Your Message (Optional)"
              className="w-full min-h-[100px] p-4 rounded-xl text-[13px] font-semibold text-primary bg-bg-soft border-2 border-gray-100 outline-none focus:border-primary focus:bg-white transition-all placeholder:text-gray-300" />
          </div>

          <div className="pt-4 flex flex-col gap-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
               <div className="flex flex-col">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Human Verification</span>
                  <span className="text-sm font-black text-primary">{captcha.q} = ?</span>
               </div>
               <input type="number" value={captchaInput} onChange={e => setCaptchaInput(e.target.value)} required placeholder="Answer"
                 className="w-20 bg-white px-3 py-2 rounded-lg border-2 border-primary/20 focus:border-primary outline-none font-black text-center text-primary" />
            </div>

            <motion.button
              type="submit" disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all group"
            >
              {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <><ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Submit Admission Form</>
              )}
            </motion.button>
          </div>

          {status === 'captcha' && (
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] font-bold text-red-500 text-center uppercase tracking-widest">
              Security verification failed. Please try again.
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
};
