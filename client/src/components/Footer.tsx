import { useState } from 'react';
import axios from 'axios';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send, MapPin, Phone, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRouter as useNextRouter } from 'next/navigation';
import { prefetchRoute } from './SubpagesRouter';
import { cn } from '../lib/utils';
import { useData } from '../context/DataContext';

const Link = ({ to, onClick, children, ...props }: any) => {
  let navigate: ((path: string) => void) | null = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    navigate = useNavigate();
  } catch { navigate = null; }

  let nextRouter: any = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    nextRouter = useNextRouter();
  } catch { nextRouter = null; }

  const isExternal = typeof to === 'string' && (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('#') || props.target === '_blank');

  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e);
    if (isExternal || !to) return;
    e.preventDefault();
    if (navigate) {
      navigate(to);
    } else if (nextRouter?.push) {
      nextRouter.push(to);
    } else {
      window.location.href = to;
    }
  };

  const handleMouseEnter = () => {
    if (!isExternal && to) {
      prefetchRoute(to);
      if (nextRouter?.prefetch) {
        try { nextRouter.prefetch(to); } catch (_) {}
      }
    }
  };

  return (
    <a href={to} onClick={handleClick} onMouseEnter={handleMouseEnter} {...props}>
      {children}
    </a>
  );
};

const academicLinks = [
  { name: 'B.Tech Engineering', href: '/btech' },
  { name: 'Diploma Engineering', href: '/diploma' },
  { name: 'MBA Program', href: '/mba' },
  { name: 'Aeronautical Engg', href: '/aeronautical-engg' },
  { name: 'Computer Science', href: '/cse-engg' },
  { name: 'Agriculture Engg', href: '/agriculture-engg' },
];

const admissionLinks = [
  { name: 'Apply Online', href: '/admission_query' },
  { name: 'Fee Structure', href: '/fees' },
  { name: 'Scholarships', href: '/admission/scholarship' },
  { name: 'Educational Loans', href: '/admission/bank-loan' },
  { name: 'Admission Procedure', href: '/admission/procedure' },
  { name: 'Download Prospectus', href: '/admission/prospectus' },
];

const resourceLinks = [
  { name: 'Syllabus & Curriculum', href: '/syllabus' },
  { name: 'E-Learning Portal', href: '/e-learning' },
  { name: 'University Exams', href: 'https://bput.ac.in/exam', target: '_blank' },
  { name: 'College Committees', href: '/committees' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Anti-Ragging Policy', href: '#' },
];

const usefulLinks = [
  { name: 'BPUT University Portal', href: 'https://bput.ac.in', target: '_blank' },
  { name: 'SCTE&VT Odisha', href: 'https://sctevtodisha.nic.in', target: '_blank' },
  { name: 'AICTE India Portal', href: 'https://aicte.gov.in', target: '_blank' },
  { name: 'Odisha JEE 2026', href: 'https://odishajee.com', target: '_blank' },
  { name: 'ICACBEC 2026 Conf.', href: 'https://icacbec.in', target: '_blank' },
  { name: 'Mandatory Disclosure', href: '#' },
];

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const { officialDocs } = useData();
  const mandatoryDoc = officialDocs?.find(d => d.name.toLowerCase().includes('mandatory'));
  const rawUrl = mandatoryDoc?.url || "/facilities/BEC Mandatory final.pdf";
  const mandatoryUrl = rawUrl.includes('?') ? rawUrl : `${rawUrl}?v=1.0.2`;

  const externalLinks = usefulLinks.map(link => 
    link.name === 'Mandatory Disclosure' 
      ? { ...link, href: mandatoryUrl, target: '_blank' } 
      : link
  );

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await axios.post('/api/subscribe', { email });
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <footer 
      className="relative pt-12 pb-8 border-t border-white/5 font-inter text-slate-400" 
      id="contact"
      style={{
        background: `
          repeating-linear-gradient(45deg, rgba(184, 144, 71, 0.015) 0px, rgba(184, 144, 71, 0.015) 1px, transparent 1px, transparent 12px),
          linear-gradient(180deg, rgba(5, 19, 37, 0.96) 0%, rgba(3, 10, 20, 0.98) 100%),
          url('https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg')
        `,
        backgroundSize: 'auto, cover, cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Prestigious academic gold top border strip */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-accent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 text-slate-400">
        
        {/* Newsletter Section */}
        <div className="relative overflow-hidden bg-slate-950/70 backdrop-blur-md border border-white/10 rounded-2xl py-6 px-8 mb-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h3 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-tight font-poppins">
              BEC <span className="text-accent underline decoration-accent/20 underline-offset-8">Newsletter &amp; Notifications</span>
            </h3>
            <p className="text-slate-400 text-xs font-semibold font-inter leading-relaxed max-w-md">
              Subscribe to receive official circulars, event updates, and monthly academic announcements from the BEC administration cell.
            </p>
          </div>
          <div className="relative z-10 w-full lg:w-fit">
            {status === 'success' ? (
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-6 py-4 rounded-2xl text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Subscribed Successfully! Welcome to BEC Newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-fit gap-3">
                <div className="flex flex-col gap-1 flex-1 lg:w-72">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-accent/40 focus:bg-white/10 transition-all font-medium placeholder-slate-500"
                  />
                  {status === 'error' && (
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest pl-2">Subscription failed. Try again.</span>
                  )}
                </div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-accent hover:bg-white text-primary px-10 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group font-black text-xs uppercase tracking-widest shadow-md disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>Subscribing... <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : (
                    <>Subscribe <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Column 1: Info (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-4">
              <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" alt="BEC Logo" className="w-14 h-14 object-contain brightness-110 drop-shadow-2xl" />
              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tighter leading-none font-poppins uppercase">BEC <span className="text-accent">BBSR</span></span>
                <span className="text-[12px] font-bold text-slate-500 tracking-normal font-odia mt-1">ଭୁବନେଶ୍ୱର ଇଞ୍ଜିନିୟରିଂ କଲେଜ</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed font-semibold text-slate-500 font-inter max-w-xs uppercase tracking-wider">
              "Pioneering technical excellence since 2008. Odisha's only integrated aviation and engineering institute."
            </p>
            
            {/* Accreditation details */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                Accreditation &amp; Affiliations
              </div>
              <div className="flex flex-wrap gap-2.5 items-center">
                <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[8px] font-black uppercase text-accent tracking-wider">AICTE Approved</span>
                <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[8px] font-black uppercase text-accent tracking-wider">BPUT Affiliated</span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-md">
                  <img src="/sctevt.png" alt="SCTE&VT" className="w-3 h-3 object-contain" />
                  <span className="text-[8px] font-black uppercase text-accent tracking-wider">SCTE&amp;VT</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/school/bhubaneswar-engineering-college-bec-bhubaneswar-kh/" },
                { Icon: Instagram, href: "https://www.instagram.com/becbbsr?igsh=MW1jbDJxZ3QxYzdxZQ==" },
                { Icon: Facebook, href: "https://www.facebook.com/share/1HfMc4PV1Z/" },
                { Icon: Youtube, href: "https://youtube.com/@becbhubaneswar?si=DRtLAbVf19Koc6jQ" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-accent hover:bg-white/10 hover:border-accent/20 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Academics (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 font-poppins text-accent">Academics</h4>
            <div className="flex flex-col gap-2">
              {academicLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-xs font-bold text-slate-500 hover:text-white transition-all duration-300 font-inter flex items-center gap-2 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:w-3 group-hover:bg-accent transition-all" /> {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Admissions (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 font-poppins text-accent">Admissions</h4>
            <div className="flex flex-col gap-2">
              {admissionLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-xs font-bold text-slate-500 hover:text-white transition-all duration-300 font-inter flex items-center gap-2 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:w-3 group-hover:bg-accent transition-all" /> {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Student Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 font-poppins text-accent">Resources</h4>
            <div className="flex flex-col gap-2">
              {resourceLinks.map((link) => (
                <Link key={link.name} to={link.href} target={link.target} className="text-xs font-bold text-slate-500 hover:text-white transition-all duration-300 font-inter flex items-center gap-2 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:w-3 group-hover:bg-accent transition-all" /> {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 5: Portals (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 font-poppins text-accent">External Portals</h4>
            <div className="flex flex-col gap-2">
              {externalLinks.map((link) => (
                <Link key={link.name} to={link.href} target={link.target} className="text-xs font-bold text-slate-500 hover:text-white transition-all duration-300 font-inter flex items-center gap-2 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover:w-3 group-hover:bg-accent transition-all" /> {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact and Map Row (IIT-style split banner) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 border-t border-white/5 pt-6">
          {/* Contacts info */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-4 font-poppins text-accent">Campus Helpdesk</h4>
            <div className="space-y-4">
              <div className="flex gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <a href="https://maps.google.com/?q=Bhubaneswar+Engineering+College" target="_blank" rel="noopener noreferrer" className="text-xs font-bold leading-relaxed font-inter text-slate-400 hover:text-white transition-colors">
                  Grama Diha, Gangapada, Bhubaneswar - 752054, Odisha
                </a>
              </div>
              <div className="flex gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <p className="text-xs font-bold font-inter leading-relaxed text-slate-400">
                  Admissions: <a href="tel:+919937047140" className="hover:text-white transition-colors">099370 47140</a> / <a href="tel:+919437090875" className="hover:text-white transition-colors">094370 90875</a>
                </p>
              </div>
              <div className="flex gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:info@becbbsr.ac.in" className="text-xs font-bold hover:text-white transition-colors font-inter lowercase text-slate-400">info@becbbsr.ac.in</a>
              </div>
            </div>
          </div>

          {/* Training & Placement Cell banner */}
          <div className="lg:col-span-4 bg-slate-950/70 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-accent/20 bg-white/10 shrink-0 shadow-md">
              <img src="/facilities/image.png" alt="Subrat Kumar Sahoo" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <div className="text-[8px] font-black text-accent uppercase tracking-[0.25em] mb-0.5">Placement Cell</div>
              <div className="text-white font-black text-xs uppercase tracking-tight">Mr. Subrat Kumar Sahoo</div>
              <a href="tel:7008684743" className="text-slate-400 hover:text-white text-[10px] font-bold block mt-1 transition-colors">
                📞 7008684743
              </a>
            </div>
          </div>

          {/* Simple Map frame */}
          <div className="lg:col-span-3">
             <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70 backdrop-blur-md p-1.5 shadow-md relative group">
                <div className="h-[120px] w-full rounded-xl overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-500">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.4752250168435!2d85.66804351147814!3d20.220260481156697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d1463aaaab%3A0xa8fafff81b9e064!2sBhubaneswar%20Engineering%20College!5e0!3m2!1sen!2sin!4v1712437600000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
             </div>
          </div>
        </div>

        {/* Footer Bottom credits bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <div className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] font-inter">
              © 2026 Bhubaneswar Engineering College (BEC). All Rights Reserved.
            </div>
            <a
              href="https://www.ayushtechnologies.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-accent transition-colors text-[10px] font-black uppercase tracking-[0.15em] font-inter"
            >
              ⚡ Designed &amp; Developed by Ayush Technologies
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-[0.2em] font-inter">
            <a href="/admin" className="text-slate-600 hover:text-accent transition-colors">Website Editor</a>
            <a href="/privacy-policy" className="text-slate-600 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-accent transition-colors">Terms</a>
            <a href="#" className="text-slate-600 hover:text-accent transition-colors">Anti-Ragging</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
