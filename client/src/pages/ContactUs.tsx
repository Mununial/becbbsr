import { PageLayout } from '../components/PageLayout';
import { Mail, Phone, MapPin, Globe, Clock, Building, Send, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export const ContactUs = () => {
  return (
    <PageLayout title="Contact Us">
      <SEO 
        title="Contact Us &amp; Campus Address | Help Desk | BEC"
        description="Get in touch with Bhubaneswar Engineering College (BEC). Direct phone hotlines, official email support, campus address in Gangapada, and corporate office details."
        keywords={[
          "contact Bhubaneswar Engineering College",
          "BEC campus address",
          "BEC admission phone number",
          "engineering college office hours",
          "email contact BEC college"
        ]}
      />
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Top Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           
           {/* Phone Card */}
           <motion.div 
             whileHover={{ y: -8, scale: 1.02 }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
             className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-2xl flex flex-col gap-5 relative overflow-hidden group"
           >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600" />
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100/50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                 <Phone className="w-6 h-6" />
              </div>
              <div>
                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-1 font-poppins">Hotline Dial</h4>
                 <h3 className="text-xl font-black text-navy-950 uppercase tracking-tighter mb-4 font-poppins">Phone Support</h3>
                 <div className="flex flex-col gap-2">
                    <a href="tel:+919437044215" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-wider">
                       <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> +91 94370 44215
                    </a>
                    <a href="tel:+919437088215" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-wider">
                       <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> +91 94370 88215
                    </a>
                 </div>
              </div>
           </motion.div>
           
           {/* Email Card */}
           <motion.div 
             whileHover={{ y: -8, scale: 1.02 }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
             className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-2xl flex flex-col gap-5 relative overflow-hidden group"
           >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100/50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                 <Mail className="w-6 h-6" />
              </div>
              <div>
                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-1 font-poppins">Official Mailing</h4>
                 <h3 className="text-xl font-black text-navy-950 uppercase tracking-tighter mb-4 font-poppins">Email Inbox</h3>
                 <div className="flex flex-col gap-2">
                    <a href="mailto:info@becbbsr.ac.in" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors lowercase tracking-wider break-all">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" /> info@becbbsr.ac.in
                    </a>
                    <a href="mailto:admission@becbbsr.ac.in" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors lowercase tracking-wider break-all">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" /> admission@becbbsr.ac.in
                    </a>
                 </div>
              </div>
           </motion.div>

           {/* Hours Card */}
           <motion.div 
             whileHover={{ y: -8, scale: 1.02 }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
             className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-2xl flex flex-col gap-5 relative overflow-hidden group"
           >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 to-orange-600" />
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100/50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                 <Clock className="w-6 h-6" />
              </div>
              <div>
                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-1 font-poppins">Operating Times</h4>
                 <h3 className="text-xl font-black text-navy-950 uppercase tracking-tighter mb-4 font-poppins">Office Hours</h3>
                 <div className="flex flex-col gap-2 text-sm font-bold text-slate-600 tracking-wide leading-relaxed">
                    <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Mon - Sat: 9:00 AM</div>
                    <div className="flex items-center gap-2 pl-3.5">to 5:00 PM (IST)</div>
                 </div>
              </div>
           </motion.div>

           {/* Stay Connected Card */}
           <motion.div 
             whileHover={{ y: -8, scale: 1.02 }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
             className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-2xl flex flex-col gap-5 relative overflow-hidden group"
           >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600" />
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                 <Globe className="w-6 h-6" />
              </div>
              <div>
                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-1 font-poppins">Social Networks</h4>
                 <h3 className="text-xl font-black text-navy-950 uppercase tracking-tighter mb-4 font-poppins">Stay Connected</h3>
                 <div className="flex items-center gap-3 mt-1.5">
                    <a href="https://facebook.com/becbbsr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300">
                       <Facebook className="w-4.5 h-4.5" />
                    </a>
                    <a href="https://www.linkedin.com/school/bhubaneswar-engineering-college-bec-bhubaneswar-kh/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300">
                       <Linkedin className="w-4.5 h-4.5" />
                    </a>
                    <a href="https://www.instagram.com/becbbsr?igsh=MW1jbDJxZ3QxYzdxZQ==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300">
                       <Instagram className="w-4.5 h-4.5" />
                    </a>
                    <a href="https://youtube.com/@becbbsr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300">
                       <Youtube className="w-4.5 h-4.5" />
                    </a>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* Address & Reach Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           
           {/* Reach Us Card */}
           <div className="bg-primary rounded-[40px] p-12 text-white relative overflow-hidden flex flex-col gap-10 border border-white/5 shadow-2xl">
              <Building className="absolute top-12 right-12 w-32 h-32 opacity-5 pointer-events-none" />
              <div className="flex flex-col gap-4">
                 <h3 className="text-3xl font-black uppercase tracking-tighter text-accent flex items-center gap-3">
                    Reach Us
                 </h3>
                 <div className="w-20 h-1 bg-white/20 rounded-full"></div>
              </div>

              <div className="flex gap-6 group">
                 <a href="https://maps.google.com/?q=Bhubaneswar+Engineering+College" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                 </a>
                 <div>
                    <h4 className="font-black uppercase tracking-widest text-sm mb-2 text-accent/80">Campus Address</h4>
                    <a href="https://maps.google.com/?q=Bhubaneswar+Engineering+College" target="_blank" rel="noopener noreferrer" className="text-white/80 text-lg leading-relaxed font-bold hover:text-accent transition-colors block">
                       Bhubaneswar Engineering College (BEC)<br />
                       Grama Diha, Gangapada, Bhubaneswar - 752054, Odisha, INDIA
                    </a>
                 </div>
              </div>

              <div className="flex gap-6 group">
                 <a href="https://maps.google.com/?q=M119+Baramunda+Housing+Colony+Bhubaneswar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Building className="w-6 h-6" />
                 </a>
                 <div>
                    <h4 className="font-black uppercase tracking-widest text-sm mb-2 text-accent/80">Corporate Office</h4>
                    <a href="https://maps.google.com/?q=M119+Baramunda+Housing+Colony+Bhubaneswar" target="_blank" rel="noopener noreferrer" className="text-white/80 text-lg leading-relaxed font-bold hover:text-accent transition-colors block">
                       Baramunda Housing Colony M-119<br />
                       Bhubaneswar - 751030, Odisha, INDIA
                    </a>
                 </div>
              </div>
           </div>

           {/* Quick Message Form */}
           <div className="bg-white rounded-[40px] p-12 border border-gray-100 shadow-2xl flex flex-col gap-8">
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">Send a Message</h3>
              <form className="flex flex-col gap-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Your Name" className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-widest focus:ring-2 focus:ring-primary outline-none transition-all" />
                    <input type="email" placeholder="Your Email" className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-widest focus:ring-2 focus:ring-primary outline-none transition-all" />
                 </div>
                 <input type="text" placeholder="Subject" className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-widest focus:ring-2 focus:ring-primary outline-none transition-all" />
                 <textarea rows={4} placeholder="Your Message" className="bg-gray-50 border border-gray-100 rounded-3xl px-6 py-4 text-sm font-bold uppercase tracking-widest focus:ring-2 focus:ring-primary outline-none transition-all resize-none"></textarea>
                 <button className="bg-primary text-white font-black py-5 rounded-2xl uppercase text-xs tracking-[0.3em] shadow-xl flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform group">
                    Send Message <Send className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                 </button>
              </form>
           </div>
        </div>

      </div>
    </PageLayout>
  );
};
