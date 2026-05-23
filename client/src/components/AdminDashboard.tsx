import { useState } from 'react';
import { PlusCircle, Trash2, X, Monitor, LogOut, Navigation as MapNavigation, ArrowUp, ArrowDown, Upload, FileVideo, FileImage, Loader2, Users, FileBadge, BellRing, FileText } from 'lucide-react';
import { type Highlight } from './EventsHighlight';
import { type Leader } from './LeadershipSection';
import { cn } from '../lib/utils';
import axios from 'axios';
import { type SelectedStudent, type Slide, type Scene, type GalleryImage, type Notice, type Faculty } from '../types';

interface AdminDashboardProps {
   onClose: () => void;
   slides: Slide[];
   onSave: (newSlides: Slide[]) => void;
   scenes: Scene[];
   onSaveScenes: (newScenes: Scene[]) => void;
   students: SelectedStudent[];
   onSaveStudents: (newStudents: SelectedStudent[]) => void;
   gallery: GalleryImage[];
   onSaveGallery: (newGallery: GalleryImage[]) => void;
   highlights: Highlight[];
   onSaveHighlights: (newHighlights: Highlight[]) => void;
   leaders: Leader[];
   onSaveLeaders: (newLeaders: Leader[]) => void;
   notices: Notice[];
   onSaveNotices: (newNotices: Notice[]) => void;
   faculties: Faculty[];
   onSaveFaculties: (newFaculties: Faculty[]) => void;
}


export const AdminDashboard = ({ onClose, slides, onSave, scenes, onSaveScenes, students, onSaveStudents, gallery, onSaveGallery, highlights, onSaveHighlights, leaders, onSaveLeaders, notices, onSaveNotices, faculties, onSaveFaculties }: AdminDashboardProps) => {
   const [activeTab, setActiveTab] = useState<'hero' | 'tour' | 'students' | 'gallery' | 'highlights' | 'leadership' | 'notices' | 'faculty'>('hero');
   const [editingSlide, setEditingSlide] = useState<Slide | null>(null);
   const [editingScene, setEditingScene] = useState<Scene | null>(null);
   const [editingStudent, setEditingStudent] = useState<SelectedStudent | null>(null);
   const [editingGallery, setEditingGallery] = useState<GalleryImage | null>(null);
   const [editingHighlight, setEditingHighlight] = useState<Highlight | null>(null);
   const [editingLeader, setEditingLeader] = useState<Leader | null>(null);
   const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
   const [editingFaculty, setEditingFaculty] = useState<Faculty | null>(null);
   const [uploading, setUploading] = useState(false);

   // Universal upload handler
   const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string, type: 'image' | 'video') => void) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setUploading(true);
      const formData = new FormData();
      formData.append('file', file); // Field name expected by server

      try {
         const res = await axios.post(`/api/upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
         });

         if (res.data.success) {
            const mimetype = res.data.mimetype || '';
            let type: 'image' | 'video' | 'pdf' = 'image';
            if (mimetype.startsWith('video')) type = 'video';
            if (mimetype.includes('pdf')) type = 'pdf';
            callback(res.data.url, type as 'image' | 'video');
         }
      } catch (error) {
         console.error("Upload failed", error);
         alert("File upload failed. Please ensure the server is running.");
      } finally {
         setUploading(false);
      }
   };

   const addSlide = () => {
      const newSlide: Slide = {
         id: Date.now().toString(),
         type: 'image',
         url: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1000&q=80',
         title: 'New Headline Here',
         subtitle: 'Knowledge is Power',
         description: 'Define the future with technical excellence and innovation at BEC.',
         ctaText: 'EXPLORE NOW'
      };
      onSave([...slides, newSlide]);
   };

   const deleteSlide = (id: string) => {
      if (confirm('Delete this slide?')) {
         onSave(slides.filter((s) => s.id !== id));
      }
   };

   const addScene = () => {
      const newScene: Scene = {
         id: Date.now().toString(),
         name: 'New Campus Location',
         image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80',
         initialX: 50,
         hotspots: []
      };
      onSaveScenes([...scenes, newScene]);
   };

   const deleteScene = (id: string) => {
      if (confirm('Delete this panorama?')) {
         onSaveScenes(scenes.filter((s) => s.id !== id));
      }
   };

   const addStudent = () => {
      const newStudent: SelectedStudent = {
         id: Date.now().toString(),
         companyRole: "New Role",
         name: "Student Name",
         branch: "CSE",
         degree: "BTech",
         batch: "Batch",
         packageInfo: "Package Info",
         companyLogo: "",
         photo: "",
         bgColor: "from-[#8B5CF6] to-[#2DD4BF]"
      };
      onSaveStudents([newStudent, ...students]);
   };

   const deleteStudent = (id: string) => {
      if (confirm('Delete this placement record?')) {
         onSaveStudents(students.filter(s => s.id !== id));
      }
   };

   const addGalleryItem = () => {
      const newItem: GalleryImage = {
         id: Date.now().toString(),
         url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
         title: "New Gallery Image",
         category: "Events"
      };
      onSaveGallery([newItem, ...gallery]);
   };

   const deleteGalleryItem = (id: string) => {
      if (confirm('Delete this image from gallery?')) {
         onSaveGallery(gallery.filter(g => g.id !== id));
      }
   };

   const addHighlight = () => {
      const newHighlight: Highlight = {
         id: Date.now().toString(),
         title: "New Highlight Title",
         date: "Action Label",
         image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80"
      };
      onSaveHighlights([...highlights, newHighlight]);
   };

   const deleteHighlight = (id: string) => {
      if (confirm('Delete this highlight card?')) {
         onSaveHighlights(highlights.filter(h => h.id !== id));
      }
   };

   const addNotice = () => {
      const newNotice: Notice = {
         id: Date.now().toString(),
         title: "New Notice/Update Title",
         date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
         category: 'Notice',
         url: '',
         type: 'image',
         isNew: true
      };
      onSaveNotices([newNotice, ...notices]);
   };

   const deleteNotice = (id: string) => {
      if (confirm('Delete this notice?')) {
         onSaveNotices(notices.filter(n => n.id !== id));
      }
   };

   const addFaculty = () => {
      const newFaculty: Faculty = {
         id: Date.now().toString(),
         name: "New Faculty Name",
         role: "Assistant Professor",
         email: "faculty@becbbsr.ac.in",
         department: "CSE Engg",
         image: ""
      };
      onSaveFaculties([newFaculty, ...faculties]);
   };

   const deleteFaculty = (id: string) => {
      if (confirm('Delete this faculty member?')) {
         onSaveFaculties(faculties.filter(f => f.id !== id));
      }
   };


   const moveScene = (index: number, direction: 'up' | 'down') => {
      const newScenes = [...scenes];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= newScenes.length) return;

      const temp = newScenes[index];
      newScenes[index] = newScenes[targetIndex];
      newScenes[targetIndex] = temp;
      onSaveScenes(newScenes);
   };

   return (
      <div className="fixed inset-0 z-[6000] bg-navy-950 overflow-y-auto text-white flex font-inter">
         {/* Sidebar (Constant) */}
         <div className="w-72 bg-navy-900 border-r border-white/5 p-8 flex flex-col gap-10 shrink-0">
            <div className="flex items-center gap-4">
               <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" className="w-12 h-12 object-contain" />
               <div>
                  <span className="font-black text-xs uppercase tracking-[0.3em] text-white/40 block">Management</span>
                  <span className="text-secondary font-black text-lg -mt-1 block">DASHBOARD</span>
               </div>
            </div>

            <nav className="flex flex-col gap-3">
               <button
                  onClick={() => setActiveTab('hero')}
                  className={cn("flex items-center gap-4 px-6 py-4 rounded-xl font-black text-sm transition-all", activeTab === 'hero' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:bg-white/5 hover:text-white')}
               >
                  <Monitor className="w-5 h-5" /> HOME SLIDER
               </button>
               <button
                  onClick={() => setActiveTab('tour')}
                  className={cn("flex items-center gap-4 px-6 py-4 rounded-xl font-black text-sm transition-all", activeTab === 'tour' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:bg-white/5 hover:text-white')}
               >
                  <MapNavigation className="w-5 h-5" /> CAMPUS PANORAMA
               </button>
               <button
                  onClick={() => setActiveTab('students')}
                  className={cn("flex items-center gap-4 px-6 py-4 rounded-xl font-black text-sm transition-all", activeTab === 'students' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:bg-white/5 hover:text-white')}
               >
                  <Users className="w-5 h-5" /> PLACEMENTS
               </button>
               <button
                  onClick={() => setActiveTab('gallery')}
                  className={cn("flex items-center gap-4 px-6 py-4 rounded-xl font-black text-sm transition-all", activeTab === 'gallery' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:bg-white/5 hover:text-white')}
               >
                  <FileImage className="w-5 h-5" /> PHOTO GALLERY
               </button>
               <button
                  onClick={() => setActiveTab('highlights')}
                  className={cn("flex items-center gap-4 px-6 py-4 rounded-xl font-black text-sm transition-all", activeTab === 'highlights' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:bg-white/5 hover:text-white')}
               >
                  <FileBadge className="w-5 h-5" /> EVENT HIGHLIGHTS
               </button>
               <button
                  onClick={() => setActiveTab('leadership')}
                  className={cn("flex items-center gap-4 px-6 py-4 rounded-xl font-black text-sm transition-all", activeTab === 'leadership' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:bg-white/5 hover:text-white')}
               >
                  <Users className="w-5 h-5" /> LEADERSHIP
               </button>
               <button
                  onClick={() => setActiveTab('notices')}
                  className={cn("flex items-center gap-4 px-6 py-4 rounded-xl font-black text-sm transition-all", activeTab === 'notices' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:bg-white/5 hover:text-white')}
               >
                  <BellRing className="w-5 h-5" /> LATEST NOTICES
               </button>
               <button
                  onClick={() => setActiveTab('faculty')}
                  className={cn("flex items-center gap-4 px-6 py-4 rounded-xl font-black text-sm transition-all", activeTab === 'faculty' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:bg-white/5 hover:text-white')}
               >
                  <Users className="w-5 h-5" /> FACULTY
               </button>
            </nav>

            <button
               onClick={onClose}
               className="mt-auto flex items-center gap-4 px-6 py-4 text-red-400 hover:bg-red-400/10 rounded-xl font-black text-sm transition-all"
            >
               <LogOut className="w-5 h-5" /> EXIT BACKEND
            </button>
         </div>

         {/* Main Content Area */}
         <div className="flex-1 p-16 bg-slate-950">
            <div className="max-w-6xl mx-auto">
               {activeTab === 'hero' && (
                  <>
                     <div className="flex justify-between items-end mb-16">
                        <div>
                           <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Hero Content</h2>
                           <p className="text-white/30 text-lg font-medium">Manage the cinematic intro slider. Upload HD photos and videos from your device.</p>
                        </div>
                        <button onClick={addSlide} className="px-8 py-5 bg-secondary text-navy-900 font-black text-xs rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                           <PlusCircle className="w-5 h-5" /> ADD NEW SLIDE
                        </button>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {slides.map((slide) => (
                           <div key={slide.id} className="bg-navy-900 border border-white/5 rounded-3xl overflow-hidden group hover:border-primary/50 transition-all p-6 shadow-2xl relative">
                              <div className="h-48 bg-black/50 rounded-2xl overflow-hidden relative mb-6">
                                 {slide.type === 'video' ? (
                                    <video src={slide.url} muted className="w-full h-full object-cover opacity-60" />
                                 ) : (
                                    <img src={slide.url} className="w-full h-full object-cover opacity-60" />
                                 )}
                                 <div className="absolute inset-0 flex items-center justify-center">
                                    {slide.type === 'video' ? <FileVideo className="w-10 h-10 text-white/20" /> : <FileImage className="w-10 h-10 text-white/20" />}
                                 </div>
                              </div>
                              <h3 className="font-bold text-lg mb-2 truncate">{slide.title}</h3>
                              <p className="text-white/30 text-xs mb-6 h-8 line-clamp-2">{slide.description}</p>

                              <div className="flex gap-3">
                                 <button onClick={() => setEditingSlide(slide)} className="flex-1 bg-white/5 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Edit Slide</button>
                                 <button onClick={() => deleteSlide(slide.id)} className="p-4 bg-red-400/10 text-red-400 rounded-xl hover:bg-red-400 hover:text-white transition-all"><Trash2 className="w-5 h-5" /></button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </>
               )}
               {activeTab === 'tour' && (
                  <>
                     <div className="flex justify-between items-end mb-16">
                        <div>
                           <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Panorama Tour</h2>
                           <p className="text-white/30 text-lg font-medium">Create immersive campus paths. Upload wide-angle 2:1 panoramas or standard HD shots.</p>
                        </div>
                        <button onClick={addScene} className="px-8 py-5 bg-secondary text-navy-900 font-black text-xs rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                           <PlusCircle className="w-5 h-5" /> ADD PANORAMA
                        </button>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {scenes.map((scene, index) => (
                           <div key={scene.id} className="bg-navy-900 border border-white/5 rounded-3xl overflow-hidden group hover:border-secondary/50 transition-all p-6 shadow-2xl">
                              <div className="h-48 bg-black/50 rounded-2xl overflow-hidden relative mb-6">
                                 <img src={scene.image} className="w-full h-full object-cover opacity-50" />
                                 <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    <button onClick={() => moveScene(index, 'up')} className="p-3 bg-black/60 rounded-xl text-white/50 hover:text-white transition-all disabled:opacity-20" disabled={index === 0}><ArrowUp className="w-4 h-4" /></button>
                                    <button onClick={() => moveScene(index, 'down')} className="p-3 bg-black/60 rounded-xl text-white/50 hover:text-white transition-all disabled:opacity-20" disabled={index === scenes.length - 1}><ArrowDown className="w-4 h-4" /></button>
                                 </div>
                                 <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Step {index + 1}</span>
                                 </div>
                              </div>
                              <h3 className="font-bold text-lg mb-2 truncate">{scene.name}</h3>
                              <div className="flex gap-3">
                                 <button onClick={() => setEditingScene(scene)} className="flex-1 bg-white/5 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Edit Panorama</button>
                                 <button onClick={() => deleteScene(scene.id)} className="p-4 bg-red-400/10 text-red-400 rounded-xl hover:bg-red-400 hover:text-white transition-all"><Trash2 className="w-5 h-5" /></button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </>
               )}
               {activeTab === 'students' && (
                  <>
                     <div className="flex justify-between items-end mb-16">
                        <div>
                           <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Placement Records</h2>
                           <p className="text-white/30 text-lg font-medium">Manage the selected students carousel. Control placements data and photos.</p>
                        </div>
                        <button onClick={addStudent} className="px-8 py-5 bg-secondary text-navy-900 font-black text-xs rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                           <PlusCircle className="w-5 h-5" /> ADD NEW STUDENT
                        </button>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {students.map((student) => (
                           <div key={student.id} className="bg-navy-900 border border-white/5 rounded-3xl overflow-hidden group hover:border-cyan-400/50 transition-all p-6 shadow-2xl">
                              <div className={`h-40 rounded-2xl overflow-hidden relative mb-6 bg-gradient-to-br ${student.bgColor} flex items-center justify-center`}>
                                 {student.photo ? (
                                    <img src={student.photo} className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-xl" />
                                 ) : (
                                    <Users className="w-12 h-12 text-white/50" />
                                 )}
                              </div>
                              <div className="mb-4">
                                 <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-secondary mb-2">{student.companyRole}</span>
                                 <h3 className="font-bold text-xl mb-1 truncate text-white">{student.name}</h3>
                                 <p className="text-white/40 text-sm">{student.branch} • {student.degree}</p>
                              </div>

                              <div className="flex gap-3">
                                 <button onClick={() => setEditingStudent(student)} className="flex-1 bg-white/5 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Edit Details</button>
                                 <button onClick={() => deleteStudent(student.id)} className="p-4 bg-red-400/10 text-red-400 rounded-xl hover:bg-red-400 hover:text-white transition-all"><Trash2 className="w-5 h-5" /></button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </>
               )}
               {activeTab === 'gallery' && (
                  <>
                     <div className="flex justify-between items-end mb-16">
                        <div>
                           <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Photo Gallery</h2>
                           <p className="text-white/30 text-lg font-medium">Manage campus life photos. Highlight the best moments of BEC.</p>
                        </div>
                        <button onClick={addGalleryItem} className="px-8 py-5 bg-secondary text-navy-900 font-black text-xs rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                           <PlusCircle className="w-5 h-5" /> ADD TO GALLERY
                        </button>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {gallery.map((img) => (
                           <div key={img.id} className="bg-navy-900 border border-white/5 rounded-3xl overflow-hidden group hover:border-primary/50 transition-all p-6 shadow-2xl">
                              <div className="h-48 bg-black/50 rounded-2xl overflow-hidden relative mb-6">
                                 <img src={img.url} className="w-full h-full object-cover opacity-60" />
                              </div>
                              <h3 className="font-bold text-lg mb-2 truncate">{img.title}</h3>
                              <p className="text-white/30 text-xs mb-6 h-8 truncate capitalize">{img.category}</p>

                              <div className="flex gap-3">
                                 <button onClick={() => setEditingGallery(img)} className="flex-1 bg-white/5 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Edit Image</button>
                                 <button onClick={() => deleteGalleryItem(img.id)} className="p-4 bg-red-400/10 text-red-400 rounded-xl hover:bg-red-400 hover:text-white transition-all"><Trash2 className="w-5 h-5" /></button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </>
               )}
               {activeTab === 'highlights' && (
                  <>
                     <div className="flex justify-between items-end mb-16">
                        <div>
                           <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Event Highlights</h2>
                           <p className="text-white/30 text-lg font-medium">Manage the 4 interactive cards on the home page. Perfect for admissions and news.</p>
                        </div>
                        <button onClick={addHighlight} className="px-8 py-5 bg-secondary text-navy-900 font-black text-xs rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3" disabled={highlights.length >= 4}>
                           <PlusCircle className="w-5 h-5" /> {highlights.length >= 4 ? 'MAX 4 CARDS' : 'ADD NEW CARD'}
                        </button>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlights.map((h) => (
                           <div key={h.id} className="bg-navy-900 border border-white/5 rounded-3xl overflow-hidden group hover:border-secondary/50 transition-all p-6 shadow-2xl">
                              <div className="h-48 bg-black/50 rounded-2xl overflow-hidden relative mb-6">
                                 <img src={h.image} className="w-full h-full object-cover opacity-60" />
                                 <div className="absolute bottom-4 left-4">
                                    <span className="bg-secondary text-navy-900 text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest">{h.date}</span>
                                 </div>
                              </div>
                              <h3 className="font-bold text-lg mb-6 line-clamp-2 min-h-[3.5rem] leading-tight">{h.title}</h3>

                              <div className="flex gap-3">
                                 <button onClick={() => setEditingHighlight(h)} className="flex-1 bg-white/5 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Edit Card</button>
                                 <button onClick={() => deleteHighlight(h.id)} className="p-4 bg-red-400/10 text-red-400 rounded-xl hover:bg-red-400 hover:text-white transition-all"><Trash2 className="w-5 h-5" /></button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </>
               )}
               {activeTab === 'leadership' && (
                  <>
                     <div className="flex justify-between items-end mb-16">
                        <div>
                           <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Leadership</h2>
                           <p className="text-white/30 text-lg font-medium">Manage Chairman and Director profiles. These appear in the premium parallax section.</p>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {leaders.map((l) => (
                           <div key={l.id} className="bg-navy-900 border border-white/5 rounded-[2rem] overflow-hidden group hover:border-secondary/30 transition-all p-8 flex gap-8 items-start shadow-2xl">
                              <div className="w-32 h-40 bg-black/50 rounded-2xl overflow-hidden shrink-0 border border-white/5">
                                 <img src={l.image} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1">
                                 <span className={`text-[8px] font-black px-2 py-1 bg-gradient-to-r ${l.color} rounded text-white uppercase tracking-widest mb-4 inline-block`}>{l.role}</span>
                                 <h3 className="font-bold text-xl mb-1 uppercase">{l.name}</h3>
                                 <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">{l.subtitle}</p>
                                 <button onClick={() => setEditingLeader(l)} className="bg-white/5 hover:bg-primary hover:text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Edit Profile</button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </>
               )}
               {activeTab === 'notices' && (
                  <>
                     <div className="flex justify-between items-end mb-16">
                        <div>
                           <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Latest Notices</h2>
                           <p className="text-white/30 text-lg font-medium">Manage important updates, university circulars, and event announcements.</p>
                        </div>
                        <button onClick={addNotice} className="px-8 py-5 bg-secondary text-navy-900 font-black text-xs rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                           <PlusCircle className="w-5 h-5" /> ADD NEW NOTICE
                        </button>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {notices.map((n) => (
                           <div key={n.id} className="bg-navy-900 border border-white/5 rounded-3xl overflow-hidden group hover:border-primary/50 transition-all p-6 shadow-2xl relative">
                              <div className="flex items-center gap-4 mb-6">
                                 <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", 
                                    n.category === 'Admission' ? 'bg-blue-500/10 text-blue-500' : 
                                    n.category === 'Academic' ? 'bg-amber-500/10 text-amber-500' :
                                    n.category === 'Placement' ? 'bg-emerald-500/10 text-emerald-500' :
                                    'bg-rose-500/10 text-rose-500'
                                 )}>
                                    <BellRing className="w-6 h-6" />
                                 </div>
                                 <div className="flex-1">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">{n.category}</span>
                                    <span className="text-xs text-white/20 font-medium">{n.date}</span>
                                 </div>
                                 {n.isNew && <span className="bg-primary text-white text-[8px] font-black px-2 py-1 rounded-full uppercase animate-pulse">NEW</span>}
                              </div>

                              <h3 className="font-bold text-lg mb-6 line-clamp-2 min-h-[3.5rem] leading-tight group-hover:text-primary transition-colors">{n.title}</h3>
                              
                              <div className="flex gap-3 mt-auto">
                                 <button onClick={() => setEditingNotice(n)} className="flex-1 bg-white/5 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Edit Content</button>
                                 <button onClick={() => deleteNotice(n.id)} className="p-4 bg-red-400/10 text-red-400 rounded-xl hover:bg-red-400 hover:text-white transition-all"><Trash2 className="w-5 h-5" /></button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </>
               )}
               {activeTab === 'faculty' && (
                  <>
                     <div className="flex justify-between items-end mb-16">
                        <div>
                           <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Faculty Members</h2>
                           <p className="text-white/30 text-lg font-medium">Manage faculty for all departments. Upload photos and details.</p>
                        </div>
                        <button onClick={addFaculty} className="px-8 py-5 bg-secondary text-navy-900 font-black text-xs rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                           <PlusCircle className="w-5 h-5" /> ADD NEW FACULTY
                        </button>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {faculties.map((f) => (
                           <div key={f.id} className="bg-navy-900 border border-white/5 rounded-3xl overflow-hidden group hover:border-primary/50 transition-all p-6 shadow-2xl relative">
                              <div className="flex items-center gap-6 mb-6">
                                 <div className="w-16 h-16 rounded-full overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center shrink-0">
                                    {f.image ? <img src={f.image} className="w-full h-full object-cover" /> : <Users className="w-8 h-8 text-white/30" />}
                                 </div>
                                 <div className="flex-1">
                                    <h3 className="font-bold text-lg text-white mb-1">{f.name}</h3>
                                    <p className="text-primary text-xs font-bold uppercase tracking-widest">{f.role}</p>
                                 </div>
                              </div>
                              <div className="space-y-2 mb-6">
                                 <p className="text-white/40 text-xs"><span className="text-white/20 uppercase tracking-widest mr-2">Dept:</span> {f.department}</p>
                                 <p className="text-white/40 text-xs"><span className="text-white/20 uppercase tracking-widest mr-2">Email:</span> {f.email}</p>
                              </div>
                              <div className="flex gap-3 mt-auto">
                                 <button onClick={() => setEditingFaculty(f)} className="flex-1 bg-white/5 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Edit Info</button>
                                 <button onClick={() => deleteFaculty(f.id)} className="p-4 bg-red-400/10 text-red-400 rounded-xl hover:bg-red-400 hover:text-white transition-all"><Trash2 className="w-5 h-5" /></button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </>
               )}
            </div>
         </div>

         {editingSlide && (
            <div className="fixed inset-0 z-[7000] bg-navy-950/95 flex items-center justify-center p-8">
               <div className="bg-navy-900 rounded-[3rem] w-full max-w-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                  <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/5">
                     <h2 className="text-3xl font-black uppercase tracking-tighter">Edit Slide Content</h2>
                     <button onClick={() => setEditingSlide(null)}><X className="w-8 h-8 opacity-40 hover:opacity-100" /></button>
                  </div>
                  <div className="p-10 overflow-y-auto space-y-10 custom-scrollbar">
                     <div>
                        <label className="block text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Media Source</label>
                        <div className="bg-black/40 p-6 rounded-3xl border border-white/5">
                           {editingSlide.url ? (
                              <div className="relative rounded-2xl overflow-hidden min-h-[160px] bg-black/80 mb-6 group flex items-center justify-center">
                                 {editingSlide.type === 'video' ? <video src={editingSlide.url} muted className="max-w-full max-h-[400px] object-contain" /> : <img src={editingSlide.url} className="max-w-full max-h-[400px] object-contain" />}
                                 <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                    <label className="bg-primary text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer shadow-2xl">
                                       {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'CHANGE FILE'}
                                       <input type="file" className="hidden" accept="image/*,video/*" onChange={(e) => handleFileUpload(e, (url, type) => setEditingSlide({ ...editingSlide, url, type }))} />
                                    </label>
                                 </div>
                              </div>
                           ) : (
                              <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:border-primary transition-all">
                                 <Upload className="w-10 h-10 text-white/20 mb-4" />
                                 <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Click to Upload From Device</span>
                                 <input type="file" className="hidden" accept="image/*,video/*" onChange={(e) => handleFileUpload(e, (url, type) => setEditingSlide({ ...editingSlide, url, type }))} />
                              </label>
                           )}
                           <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl text-xs font-mono opacity-40 mt-2" value={editingSlide.url} onChange={(e) => setEditingSlide({ ...editingSlide, url: e.target.value })} placeholder="Direct Media URL" />
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                           <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Slide Headline</label>
                           <input className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all" value={editingSlide.title} onChange={(e) => setEditingSlide({ ...editingSlide, title: e.target.value })} />
                        </div>
                        <div className="col-span-2">
                           <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Detailed Description</label>
                           <textarea className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all h-32" value={editingSlide.description} onChange={(e) => setEditingSlide({ ...editingSlide, description: e.target.value })} />
                        </div>
                     </div>
                  </div>
                  <div className="p-10 bg-white/5 border-t border-white/5 flex justify-end gap-6">
                     <button onClick={() => setEditingSlide(null)} className="px-10 py-5 bg-white/5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Cancel</button>
                     <button onClick={() => { onSave(slides.map(s => s.id === editingSlide.id ? editingSlide : s)); setEditingSlide(null); }} className="px-12 py-5 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Save Slide</button>
                  </div>
               </div>
            </div>
         )}

         {editingScene && (
            <div className="fixed inset-0 z-[7000] bg-navy-950/95 flex items-center justify-center p-4">
               <div className="bg-navy-900 rounded-[3rem] w-full max-w-4xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
                  <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/5">
                     <h2 className="text-3xl font-black uppercase tracking-tighter">Configure Panorama</h2>
                     <button onClick={() => setEditingScene(null)}><X className="w-8 h-8 opacity-40 hover:opacity-100" /></button>
                  </div>

                  <div className="p-10 overflow-y-auto custom-scrollbar">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-10">
                           <div>
                              <label className="block text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Location Name</label>
                              <input className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-secondary transition-all" value={editingScene.name} onChange={(e) => setEditingScene({ ...editingScene, name: e.target.value })} />
                           </div>

                           <div>
                              <label className="block text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-4">Panorama Image Source</label>
                              <div className="relative rounded-3xl overflow-hidden min-h-[224px] border-2 border-dashed border-white/10 group bg-black/60 flex items-center justify-center">
                                 <img src={editingScene.image} className="max-w-full max-h-[300px] object-contain opacity-80" />
                                 <label className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                                    <Upload className="w-10 h-10 text-secondary mb-4" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{uploading ? 'UPLOADING...' : 'PICK HD PHOTO FROM DEVICE'}</span>
                                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setEditingScene({ ...editingScene, image: url }))} />
                                 </label>
                              </div>
                              <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl text-xs font-mono opacity-40 mt-4" value={editingScene.image} onChange={(e) => setEditingScene({ ...editingScene, image: e.target.value })} />
                           </div>

                           <div>
                              <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-6 leading-none">Tour Focus Point ({editingScene.initialX || 50}%)</label>
                              <input type="range" min="0" max="100" className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary" value={editingScene.initialX || 50} onChange={(e) => setEditingScene({ ...editingScene, initialX: Number(e.target.value) })} />
                              <div className="flex justify-between text-[10px] font-black text-white/20 mt-3 tracking-widest uppercase">
                                 <span>← Left Edge</span>
                                 <span>Right Edge →</span>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-8">
                           <div className="flex justify-between items-center mb-2">
                              <label className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Interactive Points</label>
                              <button onClick={() => setEditingScene({ ...editingScene, hotspots: [...(editingScene.hotspots || []), { x: 50, y: 50, text: 'Next Point', type: 'scene' }] })} className="text-secondary font-black text-[10px] uppercase hover:underline">Add Point +</button>
                           </div>

                           <div className="space-y-4 max-h-[450px] overflow-y-auto pr-4 custom-scrollbar">
                              {(editingScene.hotspots || []).map((hs, i) => (
                                 <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5 space-y-4 shadow-xl">
                                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                       <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Marker {i + 1}</span>
                                       <button onClick={() => setEditingScene({ ...editingScene, hotspots: editingScene.hotspots?.filter((_, idx) => idx !== i) })} className="text-red-400/60 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                       <div className="col-span-2">
                                          <label className="block text-[8px] font-black text-white/30 uppercase mb-2">Label</label>
                                          <input className="w-full bg-navy-950 border border-white/5 rounded-xl px-4 py-3 text-xs" value={hs.text} onChange={(e) => {
                                             const hotspots = [...(editingScene.hotspots || [])];
                                             hotspots[i].text = e.target.value;
                                             setEditingScene({ ...editingScene, hotspots });
                                          }} />
                                       </div>
                                       <div>
                                          <label className="block text-[8px] font-black text-white/30 uppercase mb-2">Target</label>
                                          <select className="w-full bg-navy-950 border border-white/5 rounded-xl px-4 py-3 text-xs" value={hs.targetId} onChange={(e) => {
                                             const hotspots = [...(editingScene.hotspots || [])];
                                             hotspots[i].targetId = e.target.value;
                                             setEditingScene({ ...editingScene, hotspots });
                                          }}>
                                             {scenes.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                          </select>
                                       </div>
                                       <div className="flex gap-2">
                                          <div className="flex-1">
                                             <label className="block text-[8px] font-black text-white/30 uppercase mb-2">X %</label>
                                             <input type="number" className="w-full bg-navy-950 border border-white/5 rounded-xl px-4 py-3 text-xs" value={hs.x} onChange={(e) => {
                                                const hotspots = [...(editingScene.hotspots || [])];
                                                hotspots[i].x = Number(e.target.value);
                                                setEditingScene({ ...editingScene, hotspots });
                                             }} />
                                          </div>
                                          <div className="flex-1">
                                             <label className="block text-[8px] font-black text-white/30 uppercase mb-2">Y %</label>
                                             <input type="number" className="w-full bg-navy-950 border border-white/5 rounded-xl px-4 py-3 text-xs" value={hs.y} onChange={(e) => {
                                                const hotspots = [...(editingScene.hotspots || [])];
                                                hotspots[i].y = Number(e.target.value);
                                                setEditingScene({ ...editingScene, hotspots });
                                             }} />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="p-10 bg-white/5 border-t border-white/5 flex justify-end gap-6">
                     <button onClick={() => setEditingScene(null)} className="px-10 py-5 bg-white/5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Cancel</button>
                     <button onClick={() => { onSaveScenes(scenes.map(s => s.id === editingScene.id ? editingScene : s)); setEditingScene(null); }} className="px-12 py-5 bg-secondary text-navy-900 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Publish Panorama</button>
                  </div>
               </div>
            </div>
         )}

         {editingStudent && (
            <div className="fixed inset-0 z-[7000] bg-navy-950/95 flex items-center justify-center p-8">
               <div className="bg-navy-900 rounded-[3rem] w-full max-w-4xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                  <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/5">
                     <h2 className="text-3xl font-black uppercase tracking-tighter">Edit Placement Record</h2>
                     <button onClick={() => setEditingStudent(null)}><X className="w-8 h-8 opacity-40 hover:opacity-100" /></button>
                  </div>
                  <div className="p-10 overflow-y-auto space-y-10 custom-scrollbar grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-6">
                        <div>
                           <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Student Name</label>
                           <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl outline-none focus:border-primary transition-all text-sm" value={editingStudent.name} onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Branch</label>
                              <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl outline-none focus:border-primary transition-all text-sm" value={editingStudent.branch} onChange={(e) => setEditingStudent({ ...editingStudent, branch: e.target.value })} />
                           </div>
                           <div>
                              <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Degree</label>
                              <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl outline-none focus:border-primary transition-all text-sm" value={editingStudent.degree} onChange={(e) => setEditingStudent({ ...editingStudent, degree: e.target.value })} />
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Batch</label>
                              <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl outline-none focus:border-primary transition-all text-sm" value={editingStudent.batch} onChange={(e) => setEditingStudent({ ...editingStudent, batch: e.target.value })} />
                           </div>
                           <div>
                              <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Company & Role (Pill)</label>
                              <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl outline-none focus:border-primary transition-all text-sm" value={editingStudent.companyRole} onChange={(e) => setEditingStudent({ ...editingStudent, companyRole: e.target.value })} />
                           </div>
                        </div>
                        <div>
                           <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Package Details</label>
                           <textarea className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl outline-none focus:border-primary transition-all h-24 text-sm" value={editingStudent.packageInfo} onChange={(e) => setEditingStudent({ ...editingStudent, packageInfo: e.target.value })} />
                        </div>
                     </div>
                     <div className="space-y-6">
                        <div>
                           <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">Student Photo</label>
                           <div className="flex gap-6 items-center">
                              <div className="w-32 h-32 rounded-full overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center shrink-0">
                                 {editingStudent.photo ? <img src={editingStudent.photo} className="w-full h-full object-cover" /> : <Users className="w-8 h-8 text-white/30" />}
                              </div>
                              <div className="flex-1">
                                 <label className="inline-block bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer shadow-lg hover:scale-105 transition-all mb-3">
                                    {uploading ? 'Uploading...' : 'Upload Photo'}
                                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setEditingStudent({ ...editingStudent, photo: url }))} />
                                 </label>
                                 <input className="w-full bg-navy-950 p-3 border border-white/5 rounded-xl text-xs font-mono opacity-40 text-white" value={editingStudent.photo} onChange={(e) => setEditingStudent({ ...editingStudent, photo: e.target.value })} placeholder="Photo URL" />
                              </div>
                           </div>
                        </div>
                        <div>
                           <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">Company Logo</label>
                           <div className="bg-white/95 p-6 rounded-2xl flex items-center justify-center min-h-[100px] border border-white/10 relative group">
                              {editingStudent.companyLogo ? <img src={editingStudent.companyLogo} className="max-h-12 object-contain" /> : <span className="text-black/30 font-bold text-xs">No Logo</span>}
                              <div className="absolute inset-0 bg-black/80 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                 <label className="bg-secondary text-navy-900 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer">
                                    Upload Logo
                                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setEditingStudent({ ...editingStudent, companyLogo: url }))} />
                                 </label>
                              </div>
                           </div>
                           <input className="w-full bg-navy-950 p-3 border border-white/5 rounded-xl text-xs font-mono opacity-40 text-white mt-3" value={editingStudent.companyLogo} onChange={(e) => setEditingStudent({ ...editingStudent, companyLogo: e.target.value })} placeholder="Logo URL" />
                        </div>
                        <div>
                           <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Card Background Gradient</label>
                           <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl outline-none focus:border-primary transition-all text-sm font-mono text-white/60" value={editingStudent.bgColor} onChange={(e) => setEditingStudent({ ...editingStudent, bgColor: e.target.value })} placeholder="e.g. from-[#8B5CF6] to-[#2DD4BF]" />
                        </div>
                     </div>
                  </div>
                  <div className="p-10 bg-white/5 border-t border-white/5 flex justify-end gap-6">
                     <button onClick={() => setEditingStudent(null)} className="px-10 py-5 bg-white/5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Cancel</button>
                     <button onClick={() => { onSaveStudents(students.map(s => s.id === editingStudent.id ? editingStudent : s)); setEditingStudent(null); }} className="px-12 py-5 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Save Changes</button>
                  </div>
               </div>
            </div>
         )}

         {editingGallery && (
            <div className="fixed inset-0 z-[7000] bg-navy-950/95 flex items-center justify-center p-8">
               <div className="bg-navy-900 rounded-[3rem] w-full max-w-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                  <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/5">
                     <h2 className="text-3xl font-black uppercase tracking-tighter">Edit Gallery Image</h2>
                     <button onClick={() => setEditingGallery(null)}><X className="w-8 h-8 opacity-40 hover:opacity-100" /></button>
                  </div>
                  <div className="p-10 overflow-y-auto space-y-10 custom-scrollbar">
                     <div>
                        <label className="block text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Picture Source</label>
                        <div className="bg-black/40 p-6 rounded-3xl border border-white/5">
                           <div className="relative rounded-2xl overflow-hidden min-h-[200px] bg-black/80 mb-6 group flex items-center justify-center">
                              {editingGallery.url ? (
                                 <img src={editingGallery.url} className="max-w-full max-h-[400px] object-contain" />
                              ) : (
                                 <FileImage className="w-16 h-16 text-white/10" />
                              )}
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                 <label className="bg-primary text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer shadow-2xl">
                                    {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'UPLOAD PHOTO'}
                                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setEditingGallery({ ...editingGallery, url }))} />
                                 </label>
                              </div>
                           </div>
                           <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl text-xs font-mono opacity-40 mt-2 text-white" value={editingGallery.url} onChange={(e) => setEditingGallery({ ...editingGallery, url: e.target.value })} placeholder="Image URL" />
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                           <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Image Title</label>
                           <input className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all text-white" value={editingGallery.title} onChange={(e) => setEditingGallery({ ...editingGallery, title: e.target.value })} />
                        </div>
                        <div className="col-span-2">
                           <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Category</label>
                           <select className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all text-white/60" value={editingGallery.category} onChange={(e) => setEditingGallery({ ...editingGallery, category: e.target.value })}>
                              <option value="Infrastructure">Infrastructure</option>
                              <option value="Events">Events</option>
                              <option value="Academic">Academic</option>
                              <option value="Facilities">Facilities</option>
                              <option value="Sports">Sports</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div className="p-10 bg-white/5 border-t border-white/5 flex justify-end gap-6">
                     <button onClick={() => setEditingGallery(null)} className="px-10 py-5 bg-white/5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Cancel</button>
                     <button onClick={() => { onSaveGallery(gallery.map(g => g.id === editingGallery.id ? editingGallery : g)); setEditingGallery(null); }} className="px-12 py-5 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Save Image</button>
                  </div>
               </div>
            </div>
         )}

         {editingHighlight && (
            <div className="fixed inset-0 z-[7000] bg-navy-950/95 flex items-center justify-center p-8">
               <div className="bg-navy-900 rounded-[3rem] w-full max-w-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                  <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/5">
                      <h2 className="text-3xl font-black uppercase tracking-tighter">Edit Highlight Card</h2>
                      <button onClick={() => setEditingHighlight(null)}><X className="w-8 h-8 opacity-40 hover:opacity-100" /></button>
                  </div>
                  <div className="p-10 overflow-y-auto space-y-10 custom-scrollbar">
                      <div>
                         <label className="block text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Picture Source</label>
                         <div className="bg-black/40 p-6 rounded-3xl border border-white/5">
                            <div className="relative rounded-2xl overflow-hidden min-h-[200px] bg-black/80 mb-6 group flex items-center justify-center">
                               {editingHighlight.image ? (
                                  <img src={editingHighlight.image} className="max-w-full max-h-[300px] object-contain" />
                               ) : (
                                  <FileImage className="w-16 h-16 text-white/10" />
                               )}
                               <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                  <label className="bg-primary text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer shadow-2xl">
                                     {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'UPLOAD PHOTO'}
                                     <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setEditingHighlight({ ...editingHighlight, image: url }))} />
                                  </label>
                               </div>
                            </div>
                            <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl text-xs font-mono opacity-40 mt-2 text-white" value={editingHighlight.image} onChange={(e) => setEditingHighlight({ ...editingHighlight, image: e.target.value })} placeholder="Image URL" />
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                         <div className="col-span-2">
                            <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Card Title</label>
                            <input className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all text-white" value={editingHighlight.title} onChange={(e) => setEditingHighlight({ ...editingHighlight, title: e.target.value })} />
                         </div>
                         <div className="col-span-2">
                            <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Action Label (e.g. Enrollment, View Report)</label>
                            <input className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all text-white" value={editingHighlight.date} onChange={(e) => setEditingHighlight({ ...editingHighlight, date: e.target.value })} />
                         </div>
                      </div>
                  </div>
                  <div className="p-10 bg-white/5 border-t border-white/5 flex justify-end gap-6">
                      <button onClick={() => setEditingHighlight(null)} className="px-10 py-5 bg-white/5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Cancel</button>
                      <button onClick={() => { onSaveHighlights(highlights.map(h => h.id === editingHighlight.id ? editingHighlight : h)); setEditingHighlight(null); }} className="px-12 py-5 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Save changes</button>
                  </div>
               </div>
            </div>
         )}

         {editingLeader && (
            <div className="fixed inset-0 z-[7000] bg-navy-950/95 flex items-center justify-center p-8">
               <div className="bg-navy-900 rounded-[3rem] w-full max-w-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                  <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/5">
                      <h2 className="text-3xl font-black uppercase tracking-tighter">Edit {editingLeader.role} Profile</h2>
                      <button onClick={() => setEditingLeader(null)}><X className="w-8 h-8 opacity-40 hover:opacity-100" /></button>
                  </div>
                  <div className="p-10 overflow-y-auto space-y-10 custom-scrollbar">
                      <div className="grid grid-cols-2 gap-8">
                         <div className="col-span-1">
                            <label className="block text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Profile Photo</label>
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black/80 group flex items-center justify-center border border-white/5">
                               {editingLeader.image ? (
                                  <img src={editingLeader.image} className="w-full h-full object-cover" />
                               ) : (
                                  <FileImage className="w-16 h-16 text-white/10" />
                               )}
                               <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                  <label className="bg-primary text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer shadow-2xl">
                                     {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'CHANGE PHOTO'}
                                     <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setEditingLeader({ ...editingLeader, image: url }))} />
                                  </label>
                               </div>
                            </div>
                         </div>
                         <div className="col-span-1 space-y-6">
                            <div>
                               <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Full Name</label>
                               <input className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all text-white" value={editingLeader.name} onChange={(e) => setEditingLeader({ ...editingLeader, name: e.target.value })} />
                            </div>
                            <div>
                               <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Designation / Role Name</label>
                               <input className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all text-white" value={editingLeader.subtitle} onChange={(e) => setEditingLeader({ ...editingLeader, subtitle: e.target.value })} />
                            </div>
                         </div>
                      </div>

                      <div className="space-y-6">
                         <div>
                            <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Visionary Title (e.g. Visionary Founder)</label>
                            <input className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all text-white" value={editingLeader.title} onChange={(e) => setEditingLeader({ ...editingLeader, title: e.target.value })} />
                         </div>
                         <div>
                            <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Personal Quote / Message</label>
                            <textarea rows={4} className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all text-white resize-none" value={editingLeader.quote} onChange={(e) => setEditingLeader({ ...editingLeader, quote: e.target.value })} />
                         </div>
                      </div>
                  </div>
                  <div className="p-10 bg-white/5 border-t border-white/5 flex justify-end gap-6">
                      <button onClick={() => setEditingLeader(null)} className="px-10 py-5 bg-white/5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Cancel</button>
                      <button onClick={() => { onSaveLeaders(leaders.map(l => l.id === editingLeader.id ? editingLeader : l)); setEditingLeader(null); }} className="px-12 py-5 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Save Profile</button>
                  </div>
               </div>
            </div>
         )}
         {editingNotice && (

            <div className="fixed inset-0 z-[7000] bg-navy-950/95 flex items-center justify-center p-8 font-inter">
               <div className="bg-navy-900 rounded-[3rem] w-full max-w-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                  <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/5">
                      <h2 className="text-3xl font-black uppercase tracking-tighter">Edit Notice Content</h2>
                      <button onClick={() => setEditingNotice(null)}><X className="w-8 h-8 opacity-40 hover:opacity-100" /></button>
                  </div>
                  <div className="p-10 overflow-y-auto space-y-10 custom-scrollbar">
                      <div className="grid grid-cols-2 gap-8">
                         <div className="col-span-2">
                            <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Notice Title</label>
                            <input className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all text-white font-bold" value={editingNotice.title} onChange={(e) => setEditingNotice({ ...editingNotice, title: e.target.value })} />
                         </div>
                         <div className="col-span-1">
                            <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Category</label>
                            <select className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all text-white/60" value={editingNotice.category} onChange={(e) => setEditingNotice({ ...editingNotice, category: e.target.value as Notice['category'] })}>
                               <option value="Admission">Admission</option>
                               <option value="Academic">Academic</option>
                               <option value="Placement">Placement</option>
                               <option value="Events">Events</option>
                               <option value="Notice">General Notice</option>
                            </select>
                         </div>
                         <div className="col-span-1">
                            <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Display Date</label>
                            <input className="w-full bg-navy-950 p-5 border border-white/5 rounded-2xl outline-none focus:border-primary transition-all text-white" value={editingNotice.date} onChange={(e) => setEditingNotice({ ...editingNotice, date: e.target.value })} />
                         </div>
                      </div>

                      <div className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/5">
                         <div className="flex-1">
                            <h4 className="text-sm font-bold mb-1 uppercase tracking-tight">Highlight as "NEW"</h4>
                            <p className="text-xs text-white/30">Shows an animated badge and pulse effect on the notice.</p>
                         </div>
                         <button 
                           onClick={() => setEditingNotice({ ...editingNotice, isNew: !editingNotice.isNew })}
                           className={cn("w-14 h-8 rounded-full transition-all relative p-1", editingNotice.isNew ? 'bg-primary' : 'bg-white/10')}
                         >
                            <div className={cn("w-6 h-6 rounded-full bg-white transition-all shadow-lg", editingNotice.isNew ? 'translate-x-6' : 'translate-x-0')}></div>
                         </button>
                      </div>

                    <div className="space-y-6">
                         <label className="block text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-4">Event Card Thumbnail (Cover Image)</label>
                         <div className="bg-black/40 p-8 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center min-h-[180px] relative group overflow-hidden">
                            {editingNotice.image ? (
                               <img src={editingNotice.image} className="max-h-[160px] object-contain rounded-xl" />
                            ) : (
                               <FileImage className="w-12 h-12 text-white/20 mb-4" />
                            )}
                            <div className="absolute inset-0 bg-navy-950/90 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all">
                               <label className="bg-secondary text-navy-900 px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest cursor-pointer shadow-2xl hover:scale-105 transition-all">
                                  {uploading ? 'LOADING...' : 'UPLOAD COVER PHOTO'}
                                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setEditingNotice({ ...editingNotice, image: url }))} />
                               </label>
                            </div>
                         </div>
                         <input className="w-full bg-navy-950 p-3 border border-white/5 rounded-xl text-xs font-mono opacity-40 text-white" value={editingNotice.image} onChange={(e) => setEditingNotice({ ...editingNotice, image: e.target.value })} placeholder="Thumbnail Image URL" />
                      </div>

                      <div className="space-y-6">
                         <label className="block text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Detailed Info File (PDF or Poster)</label>
                         <div className="bg-black/40 p-8 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center min-h-[220px] relative group overflow-hidden">
                            {editingNotice.url ? (
                               <div className="flex flex-col items-center gap-4">
                                  {editingNotice.type === 'pdf' ? (
                                     <FileText className="w-20 h-20 text-red-500/80 drop-shadow-2xl" />
                                  ) : (
                                     <img src={editingNotice.url} className="max-h-[200px] object-contain rounded-xl" />
                                  )}
                                  <span className="text-[10px] font-mono opacity-30 truncate max-w-xs">{editingNotice.url}</span>
                               </div>
                            ) : (
                               <div className="flex flex-col items-center">
                                  <Upload className="w-12 h-12 text-white/20 mb-4" />
                                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Drop PDF or Photo Here</span>
                               </div>
                            )}
                            <div className="absolute inset-0 bg-navy-950/90 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all">
                               <label className="bg-primary text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest cursor-pointer shadow-2xl hover:scale-105 transition-all">
                                  {uploading ? 'UPLOADING...' : (editingNotice.url ? 'REPLACE FILE' : 'UPLOAD FROM DEVICE')}
                                  <input type="file" className="hidden" accept="image/*,application/pdf" onChange={(e) => handleFileUpload(e, (url, type) => setEditingNotice({ ...editingNotice, url, type: type as 'image' | 'pdf' }))} />
                               </label>
                               <span className="text-[9px] font-bold text-white/40 tracking-widest uppercase">Max Size: 10MB</span>
                            </div>
                         </div>
                      </div>
                  </div>
                  <div className="p-10 bg-white/5 border-t border-white/5 flex justify-end gap-6">
                      <button onClick={() => setEditingNotice(null)} className="px-10 py-5 bg-white/5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Cancel</button>
                      <button onClick={() => { onSaveNotices(notices.map(n => n.id === editingNotice.id ? editingNotice : n)); setEditingNotice(null); }} className="px-12 py-5 bg-secondary text-navy-900 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Publish Notice</button>
                  </div>
               </div>
            </div>
         )}

         {editingFaculty && (
            <div className="fixed inset-0 z-[7000] bg-navy-950/95 flex items-center justify-center p-8">
               <div className="bg-navy-900 rounded-[3rem] w-full max-w-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                  <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/5">
                      <h2 className="text-3xl font-black uppercase tracking-tighter">Edit Faculty Member</h2>
                      <button onClick={() => setEditingFaculty(null)}><X className="w-8 h-8 opacity-40 hover:opacity-100" /></button>
                  </div>
                  <div className="p-10 overflow-y-auto space-y-8 custom-scrollbar">
                      <div className="grid grid-cols-2 gap-8">
                         <div className="col-span-2 md:col-span-1">
                            <label className="block text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Profile Photo</label>
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black/80 group flex items-center justify-center border border-white/5">
                               {editingFaculty.image ? (
                                  <img src={editingFaculty.image} className="w-full h-full object-cover" />
                               ) : (
                                  <FileImage className="w-16 h-16 text-white/10" />
                               )}
                               <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                  <label className="bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer shadow-2xl text-center">
                                     {uploading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : 'UPLOAD PHOTO'}
                                     <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, (url) => setEditingFaculty({ ...editingFaculty, image: url }))} />
                                  </label>
                               </div>
                            </div>
                         </div>
                         <div className="col-span-2 md:col-span-1 space-y-6">
                            <div>
                               <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Full Name</label>
                               <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl outline-none focus:border-primary transition-all text-white" value={editingFaculty.name} onChange={(e) => setEditingFaculty({ ...editingFaculty, name: e.target.value })} />
                            </div>
                            <div>
                               <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Designation / Role</label>
                               <input className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl outline-none focus:border-primary transition-all text-white" value={editingFaculty.role} onChange={(e) => setEditingFaculty({ ...editingFaculty, role: e.target.value })} />
                            </div>
                         </div>
                      </div>

                      <div className="space-y-6">
                         <div className="grid grid-cols-2 gap-6">
                            <div>
                               <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Department</label>
                               <select className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl outline-none focus:border-primary transition-all text-white/80" value={editingFaculty.department} onChange={(e) => setEditingFaculty({ ...editingFaculty, department: e.target.value })}>
                                  <option value="CSE Engg">Computer Science</option>
                                  <option value="Aeronautical Engg">Aeronautical</option>
                                  <option value="Civil Engg">Civil</option>
                                  <option value="Mechanical Engg">Mechanical</option>
                                  <option value="EE Engg">Electrical</option>
                                  <option value="Agriculture Engg">Agriculture</option>
                                  <option value="AME">Aircraft Maintenance</option>
                                  <option value="MBA">MBA & Management</option>
                                  <option value="Diploma">Diploma</option>
                               </select>
                            </div>
                            <div>
                               <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-3">Email Address</label>
                               <input type="email" className="w-full bg-navy-950 p-4 border border-white/5 rounded-xl outline-none focus:border-primary transition-all text-white" value={editingFaculty.email} onChange={(e) => setEditingFaculty({ ...editingFaculty, email: e.target.value })} />
                            </div>
                         </div>
                      </div>
                  </div>
                  <div className="p-10 bg-white/5 border-t border-white/5 flex justify-end gap-6">
                      <button onClick={() => setEditingFaculty(null)} className="px-10 py-4 bg-white/5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Cancel</button>
                      <button onClick={() => { onSaveFaculties(faculties.map(f => f.id === editingFaculty.id ? editingFaculty : f)); setEditingFaculty(null); }} className="px-10 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Save Faculty</button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};
