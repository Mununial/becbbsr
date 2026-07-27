import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Library, Microscope, Presentation, Wifi, CupSoda, Home, Bus, HeartPulse, Building2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useData } from '../context/DataContext';
import { ScrollReveal, StaggerContainer, StaggerChild } from '../components/ScrollReveal';

const facilityList = [
  {
    title: "Central Library",
    desc: "A well-stocked library empowered with the latest Lib-Sys software supports teaching, research, and academic programmes. Focus is on leveraging intellectual capital.",
    icon: Library,
    image: "/facilities/library/library_1.jpeg",
    gallery: [
      "/facilities/library/library_1.jpeg",
      "/facilities/library/library_2.jpeg",
      "/facilities/library/library_3.jpeg",
    ],
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Laboratories & Workshops",
    desc: "State-of-the-art training grounds for budding professionals. Enable students to experiment and practice theoretical knowledge under qualified supervision.",
    icon: Microscope,
    image: "/images/bec-labrotories.jpg",
    gallery: [],
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Modern Classrooms",
    desc: "Thoughtfully designed smart classrooms equipped with OHPs and Multimedia presentations. Learning tools include case studies, seminars, and industry visits.",
    icon: Presentation,
    image: "/facilities/class room/classroom_1.jpeg",
    gallery: [
      "/facilities/class room/classroom_1.jpeg",
      "/facilities/class room/classroom_2.jpeg",
      "/facilities/class room/classroom_3.jpeg",
      "/facilities/class room/classroom_4.jpeg",
      "/facilities/class room/classroom_5.jpeg",
    ],
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    title: "Wi-Fi Campus",
    desc: "Fully Wi-Fi enabled campus providing 24-hour uninterrupted internet access. Supported by high-end servers in each block for better connectivity.",
    icon: Wifi,
    image: "/images/bec-wifi.jpg",
    gallery: [],
    color: "text-sky-500",
    bg: "bg-sky-50"
  },
  {
    title: "Cafeteria / Canteen",
    desc: "Nutritious and wholesome food served in a clean dining environment. A bustling lunchroom for students to socialize and refuel.",
    icon: CupSoda,
    image: "/images/bec-canteen.jpg",
    gallery: [],
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    title: "Hostel Accommodation",
    desc: "Spacious, well-furnished rooms for boys and girls with modern facilities and wardens ensuring safety, discipline, and well-being.",
    icon: Home,
    image: "/images/bec-hostel.jpg",
    gallery: [],
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  {
    title: "Transport Facility",
    desc: "A fleet of buses plying regularly between Bhubaneswar, Cuttack, Jatni, and Khordha for both hostel boarders and day scholars.",
    icon: Bus,
    image: "/facilities/transportation/transport_1.jpeg",
    gallery: [
      "/facilities/transportation/transport_1.jpeg",
      "/facilities/transportation/transport_2.jpeg",
      "/facilities/transportation/transport_3.jpeg",
      "/facilities/transportation/transport_4.jpeg",
    ],
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  },
  {
    title: "Medical Facility",
    desc: "On-campus health facility providing basic healthcare and emergency support, ensuring the physical well-being of all students.",
    icon: HeartPulse,
    image: "/images/bec-medical.jpg",
    gallery: [],
    color: "text-red-500",
    bg: "bg-red-50"
  }
];

// Detailed sections with full gallery for library, classrooms & transport
const galleryHighlights = [
  {
    title: "Central Library",
    subtitle: "Knowledge Hub",
    description: "BEC's central library is empowered with the latest Lib-Sys software and houses thousands of books, journals, and digital resources. A perfect environment for reading, research, and academic growth.",
    icon: Library,
    accent: "from-blue-600 to-blue-900",
    images: [
      "/facilities/library/library_1.jpeg",
      "/facilities/library/library_2.jpeg",
      "/facilities/library/library_3.jpeg",
    ]
  },
  {
    title: "Smart Classrooms",
    subtitle: "Modern Learning Spaces",
    description: "Equipped with projectors, interactive displays, and multimedia tools, our classrooms are designed for engaging, technology-driven learning. Every classroom fosters curiosity and collaboration.",
    icon: Presentation,
    accent: "from-purple-600 to-purple-900",
    images: [
      "/facilities/class room/classroom_1.jpeg",
      "/facilities/class room/classroom_2.jpeg",
      "/facilities/class room/classroom_3.jpeg",
      "/facilities/class room/classroom_4.jpeg",
      "/facilities/class room/classroom_5.jpeg",
    ]
  },
  {
    title: "Transport Fleet",
    subtitle: "Convenient Connectivity",
    description: "Our fleet of air-conditioned buses covers Bhubaneswar, Cuttack, Jatni, Khordha and surrounding areas, ensuring safe and timely commutes for all students and staff.",
    icon: Bus,
    accent: "from-indigo-600 to-indigo-900",
    images: [
      "/facilities/transportation/transport_1.jpeg",
      "/facilities/transportation/transport_2.jpeg",
      "/facilities/transportation/transport_3.jpeg",
      "/facilities/transportation/transport_4.jpeg",
    ]
  }
];

export const Facilities = () => {
  const { officialDocs } = useData();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const openLightbox = (images: string[], index: number) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length });
  };
  const nextImage = () => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length });
  };

  return (
    <PageLayout title="Campus Facilities">
      <SEO 
        title="Campus Infrastructure & Facilities | Hostels & Labs | BEC"
        description="Explore the world-class campus facilities at Bhubaneswar Engineering College (BEC). Central library, state-of-the-art laboratories, modern boys/girls hostels, and Wi-Fi campus."
        keywords={[
          "Bhubaneswar Engineering College hostel",
          "BEC library facilities",
          "engineering laboratories Bhubaneswar",
          "canteen Wi-Fi campus BEC",
          "bus transport facility college Khordha"
        ]}
      />
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Intro Banner */}
        <section className="bg-navy-950 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl border border-white/10">
           <div className="absolute top-0 right-0 p-32 opacity-5 translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <Building2 className="w-96 h-96 text-accent" />
           </div>
           <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
             World-Class <span className="text-secondary italic">Infrastructure</span> for <span className="text-accent">Holistic Growth</span>
           </h2>
           <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6 shadow-sm shadow-secondary/50"></div>
           <p className="text-slate-200 font-bold max-w-2xl mx-auto uppercase tracking-widest text-xs md:text-sm">
             Bhubaneswar Engineering College (BEC) Campus
           </p>
        </section>

        {/* Facilities Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" staggerDelay={0.08}>
           {facilityList.map((item, i) => {
              const directions = ['left', 'up', 'right', 'up', 'left', 'up', 'right', 'zoom'] as const;
              const dir = directions[i % directions.length];
              return (
                <StaggerChild key={i} direction={dir}>
                  <div
                    className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-500 group h-full"
                    onClick={() => item.gallery.length > 0 ? openLightbox(item.gallery, 0) : undefined}
                    style={{ cursor: item.gallery.length > 0 ? 'pointer' : 'default' }}
                  >
                   {/* Image Container */}
                   <div className="relative h-52 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                      <div className={`absolute bottom-4 left-6 w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} backdrop-blur-md`}>
                         <item.icon className="w-6 h-6" />
                      </div>
                      {item.gallery.length > 0 && (
                        <div className="absolute bottom-4 right-6 bg-black/50 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border border-white/10">
                          {item.gallery.length} Photos
                        </div>
                      )}
                   </div>

                   {/* Text Content */}
                   <div className="p-8 flex flex-col gap-4">
                      <h3 className="text-xl font-black text-navy-950 uppercase tracking-tight">
                         {item.title}
                      </h3>
                      <p className="text-gray-500 font-medium leading-[1.6] text-sm">
                         {item.desc}
                      </p>
                      {item.gallery.length > 0 && (
                        <span className="text-[10px] font-black text-accent uppercase tracking-widest mt-1">
                          Click to view gallery →
                        </span>
                      )}
                   </div>
                  </div>
                </StaggerChild>
              );
           })}
        </StaggerContainer>

        {/* ── Detailed Gallery Sections (Library, Classrooms, Transport) ── */}
        {galleryHighlights.map((section, si) => (
          <ScrollReveal key={si} direction={si % 2 === 0 ? 'left' : 'right'} delay={0}>
            <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden">
              {/* Section Header */}
              <div className={`bg-gradient-to-r ${section.accent} p-8 md:p-10 flex items-center gap-6`}>
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-1">{section.subtitle}</p>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">{section.title}</h3>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col gap-8">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
                  {section.description}
                </p>

                {/* Photo Grid */}
                <StaggerContainer className={`grid gap-4 ${section.images.length >= 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'}`} staggerDelay={0.07}>
                  {section.images.map((img, idx) => (
                    <StaggerChild key={idx} direction={idx % 2 === 0 ? 'up' : 'zoom'}>
                      <div
                        onClick={() => openLightbox(section.images, idx)}
                        className={`relative overflow-hidden rounded-2xl border border-gray-100 cursor-pointer group shadow-sm ${
                          idx === 0 && section.images.length >= 4 ? 'md:col-span-2 md:row-span-2 h-64 md:h-auto' : 'h-44 md:h-48'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${section.title} ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 rounded-xl backdrop-blur-sm">
                            View Full
                          </span>
                        </div>
                      </div>
                    </StaggerChild>
                  ))}
                </StaggerContainer>
              </div>
            </section>
          </ScrollReveal>
        ))}

        {/* Official Disclosures Section */}
        {officialDocs && officialDocs.length > 0 && (
          <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-10 lg:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-100 pb-6 mb-8">
              <div>
                <h3 className="text-2xl font-black text-navy-950 uppercase tracking-tight flex items-center gap-3">
                  <span className="text-secondary">Official</span> Disclosures & Certificates
                </h3>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mt-1">
                  Mandatory disclosures and approvals for transparency and compliance
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officialDocs.map((doc) => (
                <a 
                  key={doc.id}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100/80 border border-slate-100 rounded-2xl transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="w-12 h-12 rounded-xl bg-[#0F172A] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-xs font-black uppercase text-accent">PDF</span>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-black text-[#0F172A] text-sm uppercase tracking-tight leading-snug group-hover:text-accent transition-colors truncate">
                        {doc.name}
                      </h4>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-0.5">
                        {doc.category || 'Disclosure'}
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Closing Note */}
        <div className="bg-[#0F172A] rounded-[2.5rem] p-12 text-center border border-white/5 shadow-2xl">
           <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.4em]">
              Building the Future of Technology • One Facility at a Time
           </p>
        </div>

      </div>

      {/* ── Lightbox Modal ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {lightbox.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 md:left-8 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all border border-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 md:right-8 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all border border-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.images[lightbox.index]}
              alt={`Photo ${lightbox.index + 1}`}
              className="w-full h-auto max-h-[85vh] object-contain bg-black"
            />
            {lightbox.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {lightbox.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightbox({ ...lightbox, index: idx })}
                    className={`w-2 h-2 rounded-full transition-all ${idx === lightbox.index ? 'bg-white scale-125' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </PageLayout>
  );
};
