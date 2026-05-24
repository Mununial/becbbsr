import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send, MapPin, Phone, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

const usefulLinks = [
  { name: 'ICACBEC 2026 Conference', href: 'https://icacbec.in', target: '_blank' },
  { name: 'Mandatory Disclosure', href: '#' },
  { name: 'BPUT Portal', href: 'https://bput.ac.in', target: '_blank' },
  { name: 'Examination Notice', href: 'https://bput.ac.in/exam', target: '_blank' },
  { name: 'Odisha JEE 2026', href: 'https://odishajee.com', target: '_blank' },
  { name: 'JEE Main Portal', href: 'https://jeemain.nta.nic.in', target: '_blank' },
  { name: 'SCTEVT Odisha', href: 'https://sctevtodisha.nic.in', target: '_blank' },
  { name: 'AICTE India', href: 'https://aicte.gov.in', target: '_blank' },
];

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-[#0F172A] border-t border-white/5 overflow-hidden relative font-inter" id="contact">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-slate-400">
        
        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 md:p-12 mb-24 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tighter font-poppins">Subscribe to <span className="text-accent underline decoration-accent/20 underline-offset-8">Intelligence</span></h3>
            <p className="text-slate-400 text-sm font-medium font-inter leading-relaxed">Join 5000+ students and professionals receiving our monthly tech & career bulletins.</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full lg:w-fit gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 lg:w-72 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-accent/40 focus:bg-white/10 transition-all font-medium"
            />
            <button className="bg-accent hover:bg-white text-primary px-10 py-4 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 group font-black text-[11px] uppercase tracking-widest shadow-lg shadow-accent/20">
              Subscribe <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-12 mb-20">
          
          {/* Column 1: Info (3 cols) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-4">
              <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" alt="BEC Logo" className="w-14 h-14 object-contain brightness-110 drop-shadow-2xl" />
              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tighter leading-none font-poppins uppercase">BEC <span className="text-accent">BBSR</span></span>
                <span className="text-[12px] font-bold text-slate-500 tracking-normal font-odia mt-1">ଭୁବନେଶ୍ୱର ଇଞ୍ଜିନିୟରିଂ କଲେଜ</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed font-medium text-slate-500 font-inter max-w-xs italic">
              "Pioneering technical excellence since 2008. Odisha's only integrated aviation and engineering institute."
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/school/bhubaneswar-engineering-college-bec-bhubaneswar-kh/" },
                { Icon: Instagram, href: "https://www.instagram.com/becbbsr?igsh=MW1jbDJxZ3QxYzdxZQ==" },
                { Icon: Facebook, href: "https://facebook.com/becbbsr" },
                { Icon: Youtube, href: "https://youtube.com/@becbbsr" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-accent hover:bg-white/10 hover:border-accent/20 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-8 font-poppins text-accent/80">Academic Portal</h4>
            <div className="flex flex-col gap-4">
              {usefulLinks.map((link) => (
                <a key={link.name} href={link.href} target={link.target} className="text-[11px] font-bold text-slate-500 hover:text-accent transition-all duration-300 font-inter flex items-center gap-2 group">
                   <div className="w-1 h-1 rounded-full bg-accent/20 group-hover:w-3 group-hover:bg-accent transition-all" /> {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-8 font-poppins text-accent/80">Campus Contact</h4>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-accent/20 transition-colors">
                  <MapPin className="w-4 h-4 text-accent transition-transform group-hover:scale-110" />
                </div>
                <p className="text-[11px] font-bold leading-relaxed font-inter text-slate-400">Grama Diha, Gangapada, Bhubaneswar - 752054, Odisha</p>
              </div>
              <div className="flex gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-accent/20 transition-colors">
                  <Phone className="w-4 h-4 text-accent transition-transform group-hover:scale-110" />
                </div>
                <p className="text-[11px] font-bold font-inter leading-relaxed text-slate-400">094370 90875 / 094370 88215</p>
              </div>
              <div className="flex gap-4 group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-accent/20 transition-colors">
                  <Mail className="w-4 h-4 text-accent transition-transform group-hover:scale-110" />
                </div>
                <a href="mailto:info@becbbsr.ac.in" className="text-[11px] font-bold hover:text-white transition-colors font-inter lowercase text-slate-400">info@becbbsr.ac.in</a>
              </div>
            </div>
          </div>

          {/* Column 4: Map (3 cols) */}
          <div className="lg:col-span-3">
             <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-8 font-poppins text-accent/80">Navigate To Campus</h4>
             <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2 shadow-2xl relative group">
                <div className="h-[220px] w-full rounded-xl overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
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
                <div className="absolute top-4 right-4 animate-pulse">
                  <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] font-inter">
            © 2026 Bhubaneswar Engineering College (BEC). Digital Nexus by BEC IT.
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] font-inter">
            <a href="#" className="text-slate-600 hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-accent transition-colors">Terms</a>
            <a href="#" className="text-slate-600 hover:text-accent transition-colors">Anti-Ragging</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
