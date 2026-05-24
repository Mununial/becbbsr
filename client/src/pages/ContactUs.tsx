import { PageLayout } from '../components/PageLayout';
import { Mail, Phone, MapPin, Globe, Clock, Building, Send } from 'lucide-react';

export const ContactUs = () => {
  return (
    <PageLayout title="Contact Us">
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Top Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4 group hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                 <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-primary uppercase tracking-tighter">Phone</h4>
              <p className="text-gray-500 text-sm font-medium">9437044215 / 9437088215</p>
           </div>
           
           <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4 group hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-primary">
                 <Mail className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-primary uppercase tracking-tighter">Email</h4>
              <p className="text-gray-500 text-sm font-medium">info@becbbsr.ac.in</p>
           </div>

           <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4 group hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-primary">
                 <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-primary uppercase tracking-tighter">Hours</h4>
              <p className="text-gray-500 text-sm font-medium">Mon - Sat: 9:00 AM - 5:00 PM</p>
           </div>

           <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col gap-4 group hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-white">
                 <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-primary uppercase tracking-tighter">Stay Connected</h4>
              <p className="text-gray-500 text-sm font-medium">Visit our social handles</p>
           </div>
        </section>

        {/* Address & Reach Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Reach Us */}
           <div className="bg-primary rounded-[40px] p-12 text-white relative overflow-hidden flex flex-col gap-10 border border-white/5 shadow-2xl">
              <Building className="absolute top-12 right-12 w-32 h-32 opacity-5 pointer-events-none" />
              <div className="flex flex-col gap-4">
                 <h3 className="text-3xl font-black uppercase tracking-tighter text-accent flex items-center gap-3">
                    Reach Us
                 </h3>
                 <div className="w-20 h-1 bg-white/20 rounded-full"></div>
              </div>

              <div className="flex gap-6">
                 <MapPin className="w-8 h-8 text-accent shrink-0 mt-1" />
                 <div>
                    <h4 className="font-black uppercase tracking-widest text-sm mb-2">Campus Address</h4>
                    <p className="text-white/60 text-lg leading-relaxed">
                       Bhubaneswar Engineering College (BEC)<br />
                       Grama Diha, Gangapada, Bhubaneswar - 752054, Odisha, INDIA
                    </p>
                 </div>
              </div>

              <div className="flex gap-6">
                 <Building className="w-8 h-8 text-accent shrink-0 mt-1" />
                 <div>
                    <h4 className="font-black uppercase tracking-widest text-sm mb-2">Corporate Office</h4>
                    <p className="text-white/60 text-lg leading-relaxed">
                       Baramunda Housing Colony M-119<br />
                       Bhubaneswar - 751030, Odisha, INDIA
                    </p>
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

