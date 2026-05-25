import { PageLayout } from '../components/PageLayout';
import { CreditCard, CheckCircle2, Building, Home, Bus, FileText, Send } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { SEO } from '../components/SEO';

const feesCategories = [
   {
      id: "btech-mba",
      title: "College Fees (B.Tech/MBA)",
      bank: "Canara Bank",
      accNo: "80193070001027",
      ifsc: "CNRB0003366",
      qr: "/photogallery/btechMba_qr.jpg",
      upi: "234723692001027@cnrb",
      icon: Building,
      color: "from-blue-600 to-cyan-400"
   },
   {
      id: "diploma",
      title: "College Fees (Diploma)",
      bank: "Canara Bank",
      accNo: "80193070001383",
      ifsc: "CNRB0003366",
      qr: "/photogallery/diploma_qr.jpg",
      upi: "80193070001383@cnrb",
      icon: FileText,
      color: "from-purple-600 to-pink-400"
   },
   {
      id: "hostel",
      title: "Hostel Fees",
      bank: "Canara Bank",
      accNo: "80193070001590",
      ifsc: "CNRB0003366",
      qr: "/photogallery/hostelFees_qr.jpg",
      upi: "240290300001590@cnrb",
      icon: Home,
      color: "from-emerald-500 to-teal-400"
   },
   {
      id: "transport",
      title: "Transport Fees",
      bank: "Canara Bank",
      accNo: "80193070000941",
      ifsc: "CNRB0003366",
      qr: "/photogallery/transportFees_qr.jpg",
      upi: "234431287000941@cnrb",
      icon: Bus,
      color: "from-orange-500 to-amber-400"
   }
];

export const Fees = () => {
   const [selectedFee, setSelectedFee] = useState(feesCategories[0].id);
   const [formData, setFormData] = useState({
      name: '',
      fatherName: '',
      branch: '',
      registerNo: '',
      utrNo: '',
   });
   const [submitting, setSubmitting] = useState(false);
   const [submitted, setSubmitted] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitting(true);
      
      // Simulate submission to backend API
      setTimeout(() => {
         setSubmitting(false);
         setSubmitted(true);
         setFormData({ name: '', fatherName: '', branch: '', registerNo: '', utrNo: '' });
         
         setTimeout(() => {
            setSubmitted(false);
         }, 5000);
      }, 1500);
   };

   return (
      <PageLayout title="Fees Payment">
         <SEO 
            title="Fees Structure & Online Fees Payment Portal | BEC"
            description="Securely pay your college fees online at Bhubaneswar Engineering College (BEC). Direct access to B.Tech, MBA, Diploma, hostel, and transport fee structures & payment verification."
            keywords={[
               "engineering college fees Odisha",
               "Bhubaneswar Engineering College fees payment",
               "BTech college fees Bhubaneswar",
               "MBA college fees Odisha",
               "online fees payment BEC",
               "hostel transport fees BEC",
               "BTech admission charges Odisha"
            ]}
         />
         <div className="max-w-7xl mx-auto space-y-16 mt-8 p-6 md:p-0">
            
            {/* Header section */}
            <div className="text-center max-w-3xl mx-auto">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-black uppercase text-[10px] tracking-widest mb-6 border border-primary/20">
                  <CreditCard className="w-4 h-4" /> Secure Payment Gateway
               </div>
               <h1 className="text-4xl md:text-5xl font-black text-navy-900 uppercase tracking-tighter mb-4">
                  Pay Your <span className="text-primary">Fees Online</span>
               </h1>
               <p className="text-gray-500 text-lg">
                  Select your fee category, scan the QR code to make the payment, and submit your transaction details below for immediate verification.
               </p>
            </div>

            {/* QR Codes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {feesCategories.map((category) => (
                  <div 
                     key={category.id} 
                     onClick={() => setSelectedFee(category.id)}
                     className={cn(
                        "rounded-3xl p-6 transition-all cursor-pointer border relative overflow-hidden group",
                        selectedFee === category.id 
                           ? `border-${category.color.split('-')[1]}/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] shadow-${category.color.split('-')[1]}/20 bg-white scale-[1.02] z-10 hidden md:block lg:block ring-2 ring-primary ring-offset-2` 
                           : "border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-gray-200"
                     )}
                     style={{
                        display: selectedFee === category.id && window.innerWidth < 768 ? 'block' : undefined
                     }}
                  >
                     <div className={cn(
                        "absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r transition-all duration-500",
                        category.color,
                        selectedFee === category.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                     )}></div>

                     <div className="flex items-start justify-between mb-6">
                        <div className={cn(
                           "w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br shadow-inner",
                           category.color
                        )}>
                           <category.icon className="w-6 h-6" />
                        </div>
                        {selectedFee === category.id && (
                           <div className="bg-green-100 text-green-600 p-1 rounded-full animate-in zoom-in">
                              <CheckCircle2 className="w-5 h-5" />
                           </div>
                        )}
                     </div>

                     <h3 className="text-sm font-black text-navy-900 uppercase tracking-tight mb-4 min-h-[40px]">
                        {category.title}
                     </h3>

                     <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm mb-4 group-hover:scale-105 transition-transform mx-auto max-w-[200px] lg:max-w-none">
                        <img 
                           src={category.qr} 
                           alt={`QR Code for ${category.title}`} 
                           className="w-full aspect-square object-contain mix-blend-multiply" 
                        />
                     </div>

                     <div className="space-y-3 bg-gray-50 rounded-xl p-4 border border-gray-100/50">
                        <div className="flex flex-col">
                           <span className="text-[9px] font-black tracking-widest text-gray-400 uppercase">Bank</span>
                           <span className="text-xs font-bold text-navy-900">{category.bank}</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[9px] font-black tracking-widest text-gray-400 uppercase">A/C No</span>
                           <span className="text-xs font-bold text-navy-900 font-mono tracking-wider">{category.accNo}</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[9px] font-black tracking-widest text-gray-400 uppercase">IFSC</span>
                           <span className="text-xs font-bold text-navy-900 font-mono tracking-wider">{category.ifsc}</span>
                        </div>
                     </div>
                  </div>
               ))}
               
               {/* Mobile view only - hidden selected card workaround */}
               <div className="md:hidden">
                  {feesCategories.filter(c => c.id !== selectedFee).map(category => (
                     <div 
                        key={"mob-"+category.id} 
                        onClick={() => setSelectedFee(category.id)}
                        className={cn(
                           "rounded-3xl p-4 transition-all cursor-pointer border relative overflow-hidden group mb-4 border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl"
                        )}
                     >
                        <div className="flex items-center gap-4">
                           <div className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br shadow-inner",
                              category.color
                           )}>
                              <category.icon className="w-5 h-5" />
                           </div>
                           <h3 className="text-xs font-black text-navy-900 uppercase tracking-tight m-0">
                              {category.title}
                           </h3>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Payment Details Form */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 relative overflow-hidden shadow-2xl mb-20">
               <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                  <div className="space-y-8 flex flex-col justify-center">
                     <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-navy-900 font-black uppercase text-[10px] tracking-widest mb-6 shadow-sm border border-slate-100">
                           <FileText className="w-4 h-4 text-primary" /> Payment Receipt
                        </div>
                        <h2 className="text-4xl font-black text-navy-900 uppercase tracking-tighter mb-4">
                           Submit <span className="text-primary">Details</span>
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed">
                           After making the payment using the requested QR code or bank details, please fill out this form carefully. Make sure your <strong className="text-navy-900">UTR / Reference Number</strong> matches your bank statement exactly to ensure fast verification.
                        </p>
                     </div>
                     <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-inner">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Selected Category</h4>
                        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-50">
                           <div className={cn(
                              "w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br",
                              feesCategories.find(c => c.id === selectedFee)?.color
                           )}>
                              {(() => {
                                 const Icon = feesCategories.find(c => c.id === selectedFee)?.icon || Building;
                                 return <Icon className="w-6 h-6" />;
                              })()}
                           </div>
                           <div>
                              <p className="font-black text-navy-900 lg:text-lg uppercase tracking-tight line-clamp-1">
                                 {feesCategories.find(c => c.id === selectedFee)?.title}
                              </p>
                              <p className="text-xs font-bold text-slate-500 font-mono mt-1">
                                 UPI: {feesCategories.find(c => c.id === selectedFee)?.upi}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
                     {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in fade-in slide-in-from-bottom-8">
                           <div className="w-24 h-24 bg-green-100 border border-green-200 text-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-100">
                              <CheckCircle2 className="w-12 h-12" />
                           </div>
                           <div>
                              <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tighter mb-2">Details Submitted</h3>
                              <p className="text-slate-500 text-sm">Your payment details have been forwarded to the finance department. You will receive a confirmation shortly.</p>
                           </div>
                           <button onClick={() => setSubmitted(false)} className="px-8 py-3 bg-white border border-slate-200 text-slate-600 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-slate-50 hover:text-primary transition-colors shadow-sm">
                              Submit Another
                           </button>
                        </div>
                     ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                           <div className="space-y-4">
                              <div>
                                 <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Student Name *</label>
                                 <input 
                                    required
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium shadow-sm" 
                                    placeholder="Enter your full name"
                                 />
                              </div>
                              <div>
                                 <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Father's Name *</label>
                                 <input 
                                    required
                                    type="text" 
                                    value={formData.fatherName}
                                    onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
                                    className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium shadow-sm" 
                                    placeholder="Enter father's name"
                                 />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                 <div>
                                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Branch *</label>
                                    <input 
                                       required
                                       type="text" 
                                       value={formData.branch}
                                       onChange={(e) => setFormData({...formData, branch: e.target.value})}
                                       className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium shadow-sm" 
                                       placeholder="e.g. CSE, Mech"
                                    />
                                 </div>
                                 <div>
                                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Register No.</label>
                                    <input 
                                       type="text" 
                                       value={formData.registerNo}
                                       onChange={(e) => setFormData({...formData, registerNo: e.target.value})}
                                       className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium font-mono shadow-sm" 
                                       placeholder="Reg. Number"
                                    />
                                 </div>
                              </div>
                              <div>
                                 <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">UTR / Transaction No. *</label>
                                 <input 
                                    required
                                    type="text" 
                                    value={formData.utrNo}
                                    onChange={(e) => setFormData({...formData, utrNo: e.target.value})}
                                    className="w-full bg-white border border-red-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all text-sm font-bold font-mono text-uppercase shadow-sm" 
                                    placeholder="Enter 12-digit UTR"
                                 />
                              </div>
                           </div>
                           
                           <button 
                              type="submit" 
                              disabled={submitting}
                              className="w-full bg-primary text-white py-4 md:py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest shadow-xl shadow-primary/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100"
                           >
                              {submitting ? (
                                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              ) : (
                                 <><Send className="w-4 h-4" /> Submit Payment Details</>
                              )}
                           </button>
                        </form>
                     )}
                  </div>
               </div>
            </div>

         </div>
      </PageLayout>
   );
};
