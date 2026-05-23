import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Newspaper, Image as ImageIcon, Briefcase, Settings, LogOut, Plus, Search, Trash2, Edit, Award, Plane, Monitor, Trophy } from 'lucide-react';


import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const sidebarItems = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Notices', icon: Newspaper },
  { name: 'Applications', icon: Users },
  { name: 'Gallery', icon: ImageIcon },
  { name: 'Achievements', icon: Award },
  { name: 'Placements', icon: Briefcase },
  { name: 'Aero Club', icon: Plane },
  { name: 'Workshops', icon: Monitor },
  { name: 'Sports', icon: Trophy },
  { name: 'Settings', icon: Settings },
];



export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [achievements, setAchievements] = useState<any[]>([]);
  const [aeroClubItems, setAeroClubItems] = useState<any[]>([]);
  const [workshopItems, setWorkshopItems] = useState<any[]>([]);
  const [sportsItems, setSportsItems] = useState<any[]>([]);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingItem, setEditingItem] = useState<any>(null);
  const [isUploading, setIsUploading] = useState(false);



  const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000/api'
    : '/api';

  useState(() => {
     fetch(`${API_URL}/achievements`)
       .then(res => res.json())
       .then(data => setAchievements(data));
     
     fetch(`${API_URL}/aeroclub`)
       .then(res => res.json())
       .then(data => setAeroClubItems(data));

     fetch(`${API_URL}/workshop`)
       .then(res => res.json())
       .then(data => setWorkshopItems(data));

     fetch(`${API_URL}/sports`)
       .then(res => res.json())
       .then(data => setSportsItems(data));

     fetch(`${API_URL}/gallery`)
       .then(res => res.json())
       .then(data => setGalleryItems(data));
  });




  const handleSave = async () => {
      let endpoint = 'achievements';
      if (activeTab === 'Aero Club') endpoint = 'aeroclub';
      if (activeTab === 'Workshops') endpoint = 'workshop';
      if (activeTab === 'Sports') endpoint = 'sports';
      if (activeTab === 'Gallery') endpoint = 'gallery';

      const res = await fetch(`${API_URL}/${endpoint}`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(editingItem)
      });
      const data = await res.json();
      if (data.success) {
         setIsModalOpen(false);
         // Refresh
         fetch(`${API_URL}/${endpoint}`).then(res => res.json()).then(data => {
            if (activeTab === 'Achievements') setAchievements(data);
            else if (activeTab === 'Aero Club') setAeroClubItems(data);
            else if (activeTab === 'Workshops') setWorkshopItems(data);
            else if (activeTab === 'Sports') setSportsItems(data);
            else if (activeTab === 'Gallery') setGalleryItems(data);
         });
      }
  };

  const handleDelete = async (id: string) => {
      if (!confirm('Are you sure?')) return;
      let endpoint = 'achievements';
      if (activeTab === 'Aero Club') endpoint = 'aeroclub';
      if (activeTab === 'Workshops') endpoint = 'workshop';
      if (activeTab === 'Sports') endpoint = 'sports';
      if (activeTab === 'Gallery') endpoint = 'gallery';

      const res = await fetch(`${API_URL}/${endpoint}/${id}`, { method: 'DELETE' });
      if (res.ok) {
         if (activeTab === 'Achievements') setAchievements(achievements.filter(a => a.id !== id));
         else if (activeTab === 'Aero Club') setAeroClubItems(aeroClubItems.filter(a => a.id !== id));
         else if (activeTab === 'Workshops') setWorkshopItems(workshopItems.filter(a => a.id !== id));
         else if (activeTab === 'Sports') setSportsItems(sportsItems.filter(a => a.id !== id));
         else if (activeTab === 'Gallery') setGalleryItems(galleryItems.filter(a => a.id !== id));
      }
  };




  const handleUpload = async (file: File | undefined) => {
     if (!file) return;
     setIsUploading(true);
     const formData = new FormData();
     formData.append('file', file);
     try {
        const res = await fetch(`${API_URL}/upload`, {
           method: 'POST',
           body: formData
         });
         const data = await res.json();
         if (data.url) {
            setEditingItem({ ...editingItem, photo: data.url });
         }
      } finally {
         setIsUploading(false);
      }
   };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans selection:bg-primary-light selection:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-navy-900 text-white flex flex-col fixed h-full z-50">
        <div className="p-8 border-b border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light">
             <LayoutDashboard className="w-5 h-5" />
          </div>
          <span className="font-black text-xl tracking-tighter uppercase italic">Institutional Admin</span>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
           {sidebarItems.map((item) => (
             <button
               key={item.name}
               onClick={() => setActiveTab(item.name)}
               className={cn(
                 "w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm transition-all group",
                 activeTab === item.name 
                 ? "bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]" 
                 : "text-gray-400 hover:text-white hover:bg-white/5"
               )}
             >
               <item.icon className={cn("w-5 h-5", activeTab === item.name ? "text-white" : "text-gray-500 group-hover:text-white")} />
               {item.name}
             </button>
           ))}
        </nav>

        <div className="p-4 border-t border-white/5">
           <Link to="/" className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm text-rose-400 hover:bg-rose-500/10 transition-colors">
              <LogOut className="w-5 h-5" />
              EXIT ADMIN
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 lg:p-12 transition-all duration-300">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 w-full">
           <div>
              <h1 className="text-3xl font-black text-navy-900 mb-2 drop-shadow-sm">{activeTab} Overview</h1>
              <p className="text-gray-500 font-medium">Manage and update your campus content seamlessly.</p>
           </div>
           <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-gray-100 p-2 rounded-xl text-gray-400">
                 <Search className="w-5 h-5" />
              </div>
              <input type="text" placeholder="Global search..." className="bg-transparent border-none outline-none font-bold text-sm w-48 text-navy-900 placeholder:text-gray-300" />
           </div>
        </header>

        {/* Dashboard Grid */}
        {activeTab === 'Dashboard' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { label: 'Total Students', value: '4,821', trend: '+12%', color: 'text-indigo-500', bg: 'bg-indigo-50' },
                 { label: 'Courses Active', value: '124', trend: '+2', color: 'text-emerald-500', bg: 'bg-emerald-50' },
                 { label: 'Faculty Count', value: '382', trend: '+5%', color: 'text-amber-500', bg: 'bg-amber-50' },
                 { label: 'Placements 24', value: '92%', trend: '+3%', color: 'text-rose-500', bg: 'bg-rose-50' },
               ].map((stat, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-navy-900/5 transition-all group"
                 >
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6", stat.bg)}>
                       <span className={cn("font-black", stat.color)}>{stat.trend}</span>
                    </div>
                    <h4 className="text-4xl font-black text-navy-900 mb-2">{stat.value}</h4>
                    <p className="text-xs uppercase tracking-widest font-black text-gray-400">{stat.label}</p>
                 </motion.div>
               ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
               <div className="xl:col-span-2 bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 overflow-hidden relative">
                  <div className="flex justify-between items-center mb-10">
                     <h3 className="text-xl font-black text-navy-900">Recent Notices</h3>
                     <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-black rounded-xl shadow-lg shadow-primary/20">
                        <Plus className="w-4 h-4" /> ADD NEW
                     </button>
                  </div>
                  <div className="space-y-6">
                     {[1, 2, 3].map((n) => (
                       <div key={n} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-gray-50 rounded-2xl hover:bg-gray-50 transition-colors group">
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-white border-2 border-gray-100 rounded-xl flex flex-col items-center justify-center overflow-hidden shrink-0 group-hover:border-primary-light transition-colors">
                                <span className="text-[10px] font-black text-gray-400">MAR</span>
                                <span className="text-lg font-black text-navy-900 leading-none">22</span>
                             </div>
                             <div>
                                <h5 className="font-bold text-navy-900">National Innovation Summit 2026</h5>
                                <p className="text-xs text-gray-400 font-medium">Published by Registrar Office</p>
                             </div>
                          </div>
                          <div className="flex gap-2 mt-4 md:mt-0">
                             <button className="p-2.5 text-navy-900 hover:bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-all"><Edit className="w-4 h-4" /></button>
                             <button className="p-2.5 text-rose-500 hover:bg-rose-50 hover:border-rose-100 rounded-xl border border-transparent transition-all"><Trash2 className="w-4 h-4" /></button>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="bg-navy-900 rounded-[3rem] p-10 text-white overflow-hidden relative group">
                  <div className="absolute top-[-20px] right-[-20px] text-primary/10 opacity-20 group-hover:scale-150 transition-transform duration-1000">
                     <Settings className="w-64 h-64" />
                  </div>
                  <h3 className="text-xl font-black mb-8 relative z-10">System Status</h3>
                  <div className="space-y-8 relative z-10">
                     <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Storage (Cloudinary)</span>
                           <span>64%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                           <motion.div initial={{ width: 0 }} animate={{ width: '64%' }} className="h-full bg-secondary" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>DB Latency (Firebase)</span>
                           <span>12ms</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                           <motion.div initial={{ width: 0 }} animate={{ width: '12%' }} className="h-full bg-emerald-500" />
                        </div>
                     </div>
                     <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mt-12">
                        <h5 className="font-bold mb-2">Pro Plan Active</h5>
                        <p className="text-xs text-gray-400 mb-4">You have used 1.2GB of 5.0GB total assets.</p>
                        <button className="w-full py-3 bg-primary text-white text-xs font-black rounded-xl">UPGRADE CLOUD</button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        )}

         {activeTab === 'Gallery' && (
           <div className="space-y-12">
             <div className="flex justify-between items-center mb-8">
                <div>
                   <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tighter">Campus Photo Gallery</h3>
                   <p className="text-gray-500 font-medium">Upload and manage institutional photos and graduation moments.</p>
                </div>
                <button 
                  onClick={() => {
                    setEditingItem({ title: '', photo: '' });
                    setIsModalOpen(true);
                  }}
                  className="flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                >
                   <Plus className="w-5 h-5" /> ADD PHOTO
                </button>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {galleryItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden"
                  >
                     <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-gray-50 shadow-inner">
                        <img src={item.photo} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     </div>
                     <div className="px-2 pb-2">
                        <h4 className="text-sm font-black text-navy-900 tracking-tight leading-tight uppercase line-clamp-1 mb-4">{item.title}</h4>
                        <div className="flex gap-2">
                           <button 
                             onClick={() => {
                               setEditingItem(item);
                               setIsModalOpen(true);
                             }}
                             className="flex-1 p-2.5 text-navy-900 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 transition-all flex items-center justify-center"
                           >
                              <Edit className="w-4 h-4" />
                           </button>
                           <button 
                             onClick={() => handleDelete(item.id)}
                             className="flex-1 p-2.5 text-rose-500 bg-rose-50/30 hover:bg-rose-50 rounded-xl border border-rose-100 transition-all flex items-center justify-center"
                           >
                              <Trash2 className="w-4 h-4" />
                           </button>
                        </div>
                     </div>
                  </motion.div>
                ))}
                {galleryItems.length === 0 && (
                  <div className="col-span-full py-32 text-center bg-gray-50/50 rounded-[3rem] border-2 border-dashed border-gray-200">
                     <ImageIcon className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                     <h3 className="text-2xl font-black text-gray-300 uppercase tracking-tighter">Photo Gallery is Empty</h3>
                  </div>
                )}
             </div>
           </div>
         )}

         {activeTab === 'Achievements' && (

          <div className="space-y-12">
            <div className="flex justify-between items-center mb-8">
               <div>
                  <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tighter">Manage Student Achievements</h3>
                  <p className="text-gray-500 font-medium">Add, Edit or Remove student honors and awards.</p>
               </div>
               <button 
                 onClick={() => {
                   setEditingItem({ name: '', dept: '', title: '', desc: '', award: '', photo: '' });
                   setIsModalOpen(true);
                 }}
                 className="flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all"
               >
                  <Plus className="w-5 h-5" /> ADD ACHIEVEMENT
               </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
               {achievements.map((item) => (
                 <motion.div 
                   key={item.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden"
                 >
                    <div className="flex gap-8 items-start relative z-10">
                       <div className="w-24 h-24 bg-gray-50 rounded-3xl overflow-hidden shrink-0 border border-gray-100">
                          {item.photo ? (
                            <img src={item.photo} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                               <ImageIcon className="w-8 h-8" />
                            </div>
                          )}
                       </div>
                       <div className="flex-1">
                          <div className="flex justify-between items-start mb-4">
                             <div>
                                <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-[9px] font-black uppercase tracking-widest rounded-full mb-2 block w-fit italic">{item.award}</span>
                                <h4 className="text-xl font-black text-navy-900 tracking-tighter leading-tight uppercase group-hover:text-primary transition-colors">{item.title}</h4>
                             </div>
                             <div className="flex gap-2">
                                <button 
                                  onClick={() => {
                                    setEditingItem(item);
                                    setIsModalOpen(true);
                                  }}
                                  className="p-3 text-navy-900 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-all shadow-sm"
                                >
                                   <Edit className="w-4 h-4" />
                                </button>
                                <button 
                                  onClick={() => handleDelete(item.id)}
                                  className="p-3 text-rose-500 bg-rose-50/30 hover:bg-rose-50 rounded-xl border border-rose-100 transition-all shadow-sm"
                                >
                                   <Trash2 className="w-4 h-4" />
                                </button>
                             </div>
                          </div>
                          <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 line-clamp-3">{item.desc}</p>
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Users className="w-4 h-4" />
                             </div>
                             <div>
                                <div className="text-xs font-black text-navy-900">{item.name}</div>
                                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{item.dept}</div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </motion.div>
               ))}
               {achievements.length === 0 && (
                 <div className="col-span-full py-32 text-center bg-gray-50/50 rounded-[3rem] border-2 border-dashed border-gray-200">
                    <Award className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                    <h3 className="text-2xl font-black text-gray-300 uppercase tracking-tighter">No Achievements Added</h3>
                 </div>
               )}
            </div>
            
            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
                 <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                   className="absolute inset-0 bg-navy-900/40 backdrop-blur-md" 
                   onClick={() => setIsModalOpen(false)}
                 />
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl p-10 lg:p-16"
                 >
                    <h3 className="text-3xl font-black text-navy-900 uppercase tracking-tighter mb-10 italic">
                      {editingItem?.id ? `Edit ${activeTab === 'Achievements' ? 'Achievement' : 'Activity'}` : `Add ${activeTab === 'Achievements' ? 'Achievement' : 'Activity'}`}
                    </h3>
                    <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                       {activeTab === 'Achievements' && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <label className="block space-y-3">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[.2em] ml-2">Student Name</span>
                                <input 
                                  value={editingItem?.name || ''}
                                  onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                                  placeholder="e.g. Rahul Kumar"
                                  className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-navy-900 placeholder:text-gray-300 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all" 
                                />
                             </label>
                             <label className="block space-y-3">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[.2em] ml-2">Department</span>
                                <select 
                                  value={editingItem?.dept || ''}
                                  onChange={(e) => setEditingItem({...editingItem, dept: e.target.value})}
                                  className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-navy-900 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all appearance-none"
                                >
                                   <option value="">Select Branch</option>
                                   <option value="AERONAUTICAL ENGINEERING">Aeronautical</option>
                                   <option value="CSE">CSE</option>
                                   <option value="ECE">ECE</option>
                                   <option value="EE">EE</option>
                                   <option value="CIVIL">Civil</option>
                                   <option value="MECHANICAL">Mechanical</option>
                                </select>
                             </label>
                          </div>
                       )}

                       {activeTab === 'Aero Club' && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <label className="block space-y-3">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[.2em] ml-2">Event Date</span>
                                <input 
                                  type="date"
                                  value={editingItem?.date || ''}
                                  onChange={(e) => setEditingItem({...editingItem, date: e.target.value})}
                                  className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-navy-900 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all" 
                                />
                             </label>
                             <label className="block space-y-3">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[.2em] ml-2">Category</span>
                                <select 
                                  value={editingItem?.category || 'Event'}
                                  onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                                  className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-navy-900 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                                >
                                   <option value="Event">Event</option>
                                   <option value="Workshop">Workshop</option>
                                   <option value="Training">Training</option>
                                   <option value="Competition">Competition</option>
                                </select>
                             </label>
                          </div>
                       )}

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <label className="block space-y-3">
                             <span className="text-[10px] font-black text-gray-400 uppercase tracking-[.2em] ml-2">
                               {activeTab === 'Achievements' ? 'Award Title' : activeTab === 'Aero Club' ? 'Activity Title' : 'Photo Caption'}
                             </span>
                             <input 
                               value={editingItem?.title || ''}
                               onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                               placeholder={activeTab === 'Achievements' ? "e.g. Best Innovator" : activeTab === 'Workshops' || activeTab === 'Sports' || activeTab === 'Gallery' ? "e.g. Annual Convocation 2024" : "e.g. Drone Workshop 2024"}
                               className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-navy-900 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all" 
                             />

                          </label>
                          {activeTab === 'Achievements' && (
                             <label className="block space-y-3">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[.2em] ml-2">Honor/Award Label</span>
                                <input 
                                  value={editingItem?.award || ''}
                                  onChange={(e) => setEditingItem({...editingItem, award: e.target.value})}
                                  placeholder="e.g. AIR 134 / State Award"
                                  className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-navy-900 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all" 
                                />
                             </label>
                          )}
                       </div>

                       {(activeTab === 'Achievements' || activeTab === 'Aero Club') && (
                        <label className="block space-y-3">
                           <span className="text-[10px] font-black text-gray-400 uppercase tracking-[.2em] ml-2">Description</span>
                           <textarea 
                             value={editingItem?.desc || ''}
                             onChange={(e) => setEditingItem({...editingItem, desc: e.target.value})}
                             rows={4} 
                             placeholder="Details and highlights..."
                             className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-navy-900 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                           />
                        </label>
                       )}


                       <label className="block space-y-3">
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[.2em] ml-2">Media Upload</span>
                          <div className="flex gap-4">
                             <div className="flex-1 relative group">
                                <input 
                                  type="file" 
                                  onChange={(e) => handleUpload(e.target.files?.[0])}
                                  className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                                />
                                <div className="w-full px-8 py-5 bg-white border-2 border-dashed border-gray-100 rounded-2xl text-sm font-bold text-gray-400 flex items-center justify-center gap-3 group-hover:border-primary group-hover:text-primary transition-all">
                                   <Plus className="w-5 h-5" /> {isUploading ? 'Uploading...' : `Upload ${activeTab === 'Achievements' ? 'Student' : 'Activity'} Image`}
                                </div>
                             </div>
                             {editingItem?.photo && (
                               <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border border-white">
                                  <img src={editingItem.photo} className="w-full h-full object-cover" alt="" />
                               </div>
                             )}
                          </div>
                       </label>
                       <div className="flex gap-4 pt-10">
                          <button 
                            type="button" 
                            onClick={() => setIsModalOpen(false)}
                            className="flex-1 py-5 bg-gray-100 text-navy-950 text-xs font-black rounded-2xl tracking-widest hover:bg-gray-200 transition-all"
                          >
                             CANCEL
                          </button>
                          <button 
                            type="submit" 
                            className="flex-[2] py-5 bg-primary text-white text-xs font-black rounded-2xl tracking-widest hover:bg-navy-950 shadow-2xl shadow-primary/30 transition-all"
                          >
                             {editingItem?.id ? 'UPDATE ITEM' : 'PUBLISH NOW'}
                          </button>
                       </div>
                    </form>
                 </motion.div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'Aero Club' && (
          <div className="space-y-12">
            <div className="flex justify-between items-center mb-8">
               <div>
                  <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tighter">Manage Aero Club Activities</h3>
                  <p className="text-gray-500 font-medium">Add, Edit or Remove Aero Club events, workshops, and photos.</p>
               </div>
               <button 
                 onClick={() => {
                   setEditingItem({ title: '', desc: '', date: '', category: 'Event', photo: '' });
                   setIsModalOpen(true);
                 }}
                 className="flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all"
               >
                  <Plus className="w-5 h-5" /> ADD ACTIVITY
               </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
               {aeroClubItems.map((item) => (
                 <motion.div 
                   key={item.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden"
                 >
                    <div className="flex gap-8 items-start relative z-10">
                       <div className="w-24 h-24 bg-gray-50 rounded-3xl overflow-hidden shrink-0 border border-gray-100">
                          {item.photo ? (
                            <img src={item.photo} alt={item.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                               <ImageIcon className="w-8 h-8" />
                            </div>
                          )}
                       </div>
                       <div className="flex-1">
                          <div className="flex justify-between items-start mb-4">
                             <div>
                                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[9px] font-black uppercase tracking-widest rounded-full mb-2 block w-fit italic">{item.category}</span>
                                <h4 className="text-xl font-black text-navy-900 tracking-tighter leading-tight uppercase group-hover:text-primary transition-colors">{item.title}</h4>
                             </div>
                             <div className="flex gap-2">
                                <button 
                                  onClick={() => {
                                    setEditingItem(item);
                                    setIsModalOpen(true);
                                  }}
                                  className="p-3 text-navy-900 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-all shadow-sm"
                                >
                                   <Edit className="w-4 h-4" />
                                </button>
                                <button 
                                  onClick={() => handleDelete(item.id)}
                                  className="p-3 text-rose-500 bg-rose-50/30 hover:bg-rose-50 rounded-xl border border-rose-100 transition-all shadow-sm"
                                >
                                   <Trash2 className="w-4 h-4" />
                                </button>
                             </div>
                          </div>
                          <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 line-clamp-3">{item.desc}</p>
                          <div className="text-[10px] font-black text-gray-400 uppercase tracking-[.2em]">{item.date}</div>
                       </div>
                    </div>
                 </motion.div>
               ))}
               {aeroClubItems.length === 0 && (
                 <div className="col-span-full py-32 text-center bg-gray-50/50 rounded-[3rem] border-2 border-dashed border-gray-200">
                    <Plane className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                    <h3 className="text-2xl font-black text-gray-300 uppercase tracking-tighter">No Activities Added</h3>
                 </div>
               )}
            </div>
          </div>
        )}

        {activeTab === 'Workshops' && (
          <div className="space-y-12">
            <div className="flex justify-between items-center mb-8">
               <div>
                  <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tighter">Workshop Gallery Manager</h3>
                  <p className="text-gray-500 font-medium">Upload and manage photos for the Workshop & Seminar section.</p>
               </div>
               <button 
                 onClick={() => {
                   setEditingItem({ title: '', photo: '' });
                   setIsModalOpen(true);
                 }}
                 className="flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all"
               >
                  <Plus className="w-5 h-5" /> ADD TO GALLERY
               </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
               {workshopItems.map((item) => (
                 <motion.div 
                   key={item.id}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden"
                 >
                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-gray-50 shadow-inner">
                       <img src={item.photo} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="px-2 pb-2">
                       <h4 className="text-sm font-black text-navy-900 tracking-tight leading-tight uppercase line-clamp-1 mb-4">{item.title}</h4>
                       <div className="flex gap-2">
                          <button 
                            onClick={() => {
                              setEditingItem(item);
                              setIsModalOpen(true);
                            }}
                            className="flex-1 p-2.5 text-navy-900 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 transition-all flex items-center justify-center"
                          >
                             <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="flex-1 p-2.5 text-rose-500 bg-rose-50/30 hover:bg-rose-50 rounded-xl border border-rose-100 transition-all flex items-center justify-center"
                          >
                             <Trash2 className="w-4 h-4" />
                          </button>
                       </div>
                    </div>
                 </motion.div>
               ))}
               {workshopItems.length === 0 && (
                 <div className="col-span-full py-32 text-center bg-gray-50/50 rounded-[3rem] border-2 border-dashed border-gray-200">
                    <ImageIcon className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                    <h3 className="text-2xl font-black text-gray-300 uppercase tracking-tighter">Gallery is Empty</h3>
                 </div>
               )}
            </div>
          </div>
        )}

        {activeTab === 'Sports' && (
          <div className="space-y-12">
            <div className="flex justify-between items-center mb-8">
               <div>
                  <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tighter">Sports Gallery Manager</h3>
                  <p className="text-gray-500 font-medium">Upload and manage photos for the Sports & Games section.</p>
               </div>
               <button 
                 onClick={() => {
                   setEditingItem({ title: '', photo: '' });
                   setIsModalOpen(true);
                 }}
                 className="flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all"
               >
                  <Plus className="w-5 h-5" /> ADD TO GALLERY
               </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
               {sportsItems.map((item) => (
                 <motion.div 
                   key={item.id}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden"
                 >
                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-gray-50 shadow-inner">
                       <img src={item.photo} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="px-2 pb-2">
                       <h4 className="text-sm font-black text-navy-900 tracking-tight leading-tight uppercase line-clamp-1 mb-4">{item.title}</h4>
                       <div className="flex gap-2">
                          <button 
                            onClick={() => {
                              setEditingItem(item);
                              setIsModalOpen(true);
                            }}
                            className="flex-1 p-2.5 text-navy-900 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 transition-all flex items-center justify-center"
                          >
                             <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="flex-1 p-2.5 text-rose-500 bg-rose-50/30 hover:bg-rose-50 rounded-xl border border-rose-100 transition-all flex items-center justify-center"
                          >
                             <Trash2 className="w-4 h-4" />
                          </button>
                       </div>
                    </div>
                 </motion.div>
               ))}
               {sportsItems.length === 0 && (
                 <div className="col-span-full py-32 text-center bg-gray-50/50 rounded-[3rem] border-2 border-dashed border-gray-200">
                    <Trophy className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                    <h3 className="text-2xl font-black text-gray-300 uppercase tracking-tighter">Gallery is Empty</h3>
                 </div>
               )}
            </div>
          </div>
        )}

        {activeTab !== 'Dashboard' && activeTab !== 'Achievements' && activeTab !== 'Aero Club' && activeTab !== 'Workshops' && activeTab !== 'Sports' && activeTab !== 'Gallery' && (



          <div className="bg-white rounded-[3rem] p-20 min-h-[60vh] flex flex-col items-center justify-center text-center shadow-sm border border-gray-100">
             <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-8 border border-primary/10">
                <Settings className="w-10 h-10 animate-spin-slow" />
             </div>
             <h2 className="text-3xl font-black text-navy-900 mb-4 uppercase tracking-tighter italic">Initializing {activeTab} Module</h2>
             <p className="text-gray-500 font-medium max-w-sm mb-12">Connecting to College Firebase Realtime Sync and Cloudinary API infrastructure...</p>
             <button onClick={() => setActiveTab('Dashboard')} className="px-10 py-4 bg-navy-900 text-white font-black text-xs rounded-full tracking-widest hover:bg-primary transition-all">BACK TO OVERVIEW</button>
          </div>
        )}
      </main>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
           animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};
