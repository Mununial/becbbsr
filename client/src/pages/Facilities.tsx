import { PageLayout } from '../components/PageLayout';
import { Library, Microscope, Presentation, Wifi, CupSoda, Home, Bus, HeartPulse, Building2 } from 'lucide-react';

const facilityList = [
  {
    title: "Central Library",
    desc: "A well-stocked library empowered with the latest Lib-Sys software supports teaching, research, and academic programmes. Focus is on leveraging intellectual capital.",
    icon: Library,
    image: "/facilities/facility_library_1776882689213.png",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Laboratories & Workshops",
    desc: "State-of-the-art training grounds for budding professionals. Enable students to experiment and practice theoretical knowledge under qualified supervision.",
    icon: Microscope,
    image: "/facilities/facility_lab_1776882705176.png",
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Modern Lecture Halls",
    desc: "Thoughtfully designed spaces equipped with OHPs and Multimedia presentations. Learning tools include case studies, seminars, and industry visits.",
    icon: Presentation,
    image: "/facilities/facility_lecture_1776882720998.png",
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    title: "Wi-Fi Campus",
    desc: "Fully Wi-Fi enabled campus providing 24-hour uninterrupted internet access. Supported by high-end servers in each block for better connectivity.",
    icon: Wifi,
    image: "/facilities/facility_wifi_1776882740558.png",
    color: "text-sky-500",
    bg: "bg-sky-50"
  },
  {
    title: "Cafeteria / Canteen",
    desc: "Nutritious and wholesome food served in a clean dining environment. A bustling lunchroom for students to socialize and refuel.",
    icon: CupSoda,
    image: "/facilities/facility_cafeteria_1776882758040.png",
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    title: "Hostel Accommodation",
    desc: "Spacious, well-furnished rooms for boys and girls with modern facilities and wardens ensuring safety, discipline, and well-being.",
    icon: Home,
    image: "/facilities/facility_hostel_1776882776381.png",
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  {
    title: "Transport Facility",
    desc: "A fleet of buses plying regularly between Bhubaneswar, Cuttack, Jatni, and Khordha for both hostel boarders and day scholars.",
    icon: Bus,
    image: "/facilities/facility_transport_1776882793918.png",
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  },
  {
    title: "Medical Facility",
    desc: "On-campus health facility providing basic healthcare and emergency support, ensuring the physical well-being of all students.",
    icon: HeartPulse,
    image: "/facilities/facility_medical_1776882809967.png",
    color: "text-red-500",
    bg: "bg-red-50"
  }
];

export const Facilities = () => {
  return (
    <PageLayout title="Campus Facilities">
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Intro Banner */}
        <section className="bg-navy-950 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl border border-white/5">
           <div className="absolute top-0 right-0 p-32 opacity-5 translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <Building2 className="w-96 h-96 text-primary" />
           </div>
           <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-tight">
             World-Class <span className="text-secondary italic">Infrastructure</span> for Holistic Growth
           </h2>
           <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
           <p className="text-white/60 font-medium text-lg max-w-2xl mx-auto uppercase tracking-widest text-sm">
             Bhubaneswar Engineering College (BEC) Campus
           </p>
        </section>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {facilityList.map((item, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-500 group">
                 {/* Image Container */}
                 <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    <div className={`absolute bottom-4 left-6 w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} backdrop-blur-md`}>
                       <item.icon className="w-6 h-6" />
                    </div>
                 </div>

                 {/* Text Content */}
                 <div className="p-8 flex flex-col gap-4">
                    <h3 className="text-xl font-black text-navy-950 uppercase tracking-tight">
                       {item.title}
                    </h3>
                    <p className="text-gray-500 font-medium leading-[1.6] text-sm">
                       {item.desc}
                    </p>
                 </div>
              </div>
           ))}
        </div>

        {/* Closing Note */}
        <div className="bg-[#0F172A] rounded-[2.5rem] p-12 text-center border border-white/5 shadow-2xl">
           <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.4em]">
              Building the Future of Technology • One Facility at a Time
           </p>
        </div>

      </div>
    </PageLayout>
  );
};
