import { type SelectedStudent } from '../types';

const defaultStudents: SelectedStudent[] = [
  {
    id: "1",
    companyRole: "CTTC-BBSR",
    name: "ANKIT MOHAPATRA",
    branch: "MECH",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/tata.jpg",
    photo: "https://becbbsr.ac.in/images/alumni2.jpg",
    bgColor: "from-blue-600 to-cyan-500"
  },
  {
    id: "2",
    companyRole: "BUREAU VERITAS",
    name: "AVINASH KUMAR SHARMA",
    branch: "CSE",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/infosys.jpg",
    photo: "https://becbbsr.ac.in/images/alumni3.jpg",
    bgColor: "from-purple-600 to-pink-500"
  },
  {
    id: "3",
    companyRole: "QuEST GLOBAL",
    name: "GAUTAM SINGH",
    branch: "CSE",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/zeta.jpg",
    photo: "https://becbbsr.ac.in/images/alumni5.jpg",
    bgColor: "from-cyan-600 to-blue-500"
  },
  {
    id: "4",
    companyRole: "AMAZON",
    name: "ROHIT KUMAR",
    branch: "MECH",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Elite Record",
    companyLogo: "https://becbbsr.ac.in/images/events/byjus.jpg",
    photo: "https://becbbsr.ac.in/images/ROHIT%20KUMAR,MECH,AMAZON.jpg",
    bgColor: "from-orange-600 to-yellow-500"
  },
  {
    id: "5",
    companyRole: "IBS SOFTWARE",
    name: "PRASHANT BEHERA",
    branch: "AERO",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/IBS.jpg",
    photo: "https://becbbsr.ac.in/images/alumni8.jpg",
    bgColor: "from-indigo-600 to-purple-500"
  },
  {
    id: "6",
    companyRole: "TECH MAHINDRA",
    name: "ASHIT MINZ",
    branch: "CSE",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/tech-mahindra.jpg",
    photo: "https://becbbsr.ac.in/images/Ashit%20Minz-CSE(Tech%20Mahindra).jpg",
    bgColor: "from-red-600 to-orange-500"
  },
  {
    id: "7",
    companyRole: "INDIGO",
    name: "RAVISANKAR PAL",
    branch: "AERO",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/interglobe.jpg",
    photo: "https://becbbsr.ac.in/images/RAVISANKAR%20PAL-AERO%20(IndiGo).jpg",
    bgColor: "from-blue-800 to-blue-400"
  },
  {
    id: "8",
    companyRole: "INFOSYS",
    name: "BIPLAB KR SAMANTARAY",
    branch: "AERO",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/infosys.jpg",
    photo: "https://becbbsr.ac.in/images/BIPLAB%20KUMAR%20SAMANTARAY-Aero(Infosys).jpg",
    bgColor: "from-blue-600 to-indigo-400"
  },
  {
    id: "9",
    companyRole: "WIPRO",
    name: "IPSITA KUMARI",
    branch: "CSE",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/genpact.jpg",
    photo: "https://becbbsr.ac.in/images/IPSITA%20KUMARI,CSE,Wipro.jpg",
    bgColor: "from-purple-700 to-indigo-500"
  },
  {
    id: "10",
    companyRole: "PIRAMAL GROUP",
    name: "ROJALIN",
    branch: "CIVIL",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/tata.jpg",
    photo: "https://becbbsr.ac.in/images/ROJALIN%20PHOTO,%20CIVIL,Piramal%20Group.jpg",
    bgColor: "from-teal-600 to-cyan-500"
  },
  {
    id: "11",
    companyRole: "CAPGEMINI",
    name: "NEHA KUMARI",
    branch: "CSE",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/infosys.jpg",
    photo: "https://becbbsr.ac.in/images/alumni7.jpg",
    bgColor: "from-blue-700 to-blue-400"
  },
  {
    id: "12",
    companyRole: "ERBE MEDICAL",
    name: "SUBHAM DAS",
    branch: "EEE",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/john.jpg",
    photo: "https://becbbsr.ac.in/images/alumni12.jpg",
    bgColor: "from-emerald-600 to-teal-500"
  },
  {
    id: "13",
    companyRole: "TECH MAHINDRA",
    name: "K.SWETA MADHURI",
    branch: "CSE",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/tech-mahindra.jpg",
    photo: "https://becbbsr.ac.in/images/K.Sweta%20Madhuri(Tech%20Mahindra).jpg",
    bgColor: "from-red-700 to-rose-500"
  },
  {
    id: "14",
    companyRole: "PIRAMAL GROUP",
    name: "ASHIS PANY",
    branch: "MECH",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/tata.jpg",
    photo: "https://becbbsr.ac.in/images/ASHIS%20PANY-MECH(Piramal%20Group).jpg",
    bgColor: "from-blue-600 to-indigo-500"
  },
  {
    id: "15",
    companyRole: "BUREAU VERITAS",
    name: "GAUTAM KUMAR SINGH",
    branch: "CSE",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/infosys.jpg",
    photo: "https://becbbsr.ac.in/images/alumni4.jpg",
    bgColor: "from-blue-700 to-cyan-600"
  },
  {
    id: "16",
    companyRole: "VINDHYA TELELINES",
    name: "LAKSHMAN GOYAL",
    branch: "CIVIL",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/tata.jpg",
    photo: "https://becbbsr.ac.in/images/alumni6.jpg",
    bgColor: "from-emerald-700 to-teal-500"
  },
  {
    id: "17",
    companyRole: "IMS PEOPLE",
    name: "RAHUL LAHIRI",
    branch: "MECH",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/genpact.jpg",
    photo: "https://becbbsr.ac.in/images/alumni9.jpg",
    bgColor: "from-blue-900 to-sky-600"
  },
  {
    id: "18",
    companyRole: "IBS SOFTWARE",
    name: "RUCHIKA SINHA",
    branch: "EEE",
    degree: "BTech",
    batch: "2024",
    packageInfo: "Placed",
    companyLogo: "https://becbbsr.ac.in/images/events/IBS.jpg",
    photo: "https://becbbsr.ac.in/images/alumni11.jpg",
    bgColor: "from-indigo-700 to-blue-500"
  }
];

export const SelectedStudents = ({ students = [] }: { students?: SelectedStudent[] }) => {
  const displayStudents = students.length > 0 ? students : defaultStudents;

  return (
    <section className="py-10 bg-slate-50 font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <h2 className="section-title">
          Placement <span className="text-accent underline decoration-accent/30 underline-offset-8 font-poppins">Highlights</span>
        </h2>
        <p className="section-subtitle mx-auto">Our students are placed in top global technology and engineering firms.</p>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max hover:[animation-play-state:paused]">
          {[...Array(3)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex gap-8 px-4">
              {displayStudents.map((student) => (
                <div
                  key={`${groupIdx}-${student.id}`}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-lg flex flex-col w-[300px] shrink-0 border border-white card-hover group"
                >
                  <div className="relative pt-8 pb-6 px-6 bg-gradient-to-br from-blue-600 to-cyan-500 flex flex-col">
                    
                    {/* Role Badge - Dark Minimal */}
                    <div className="self-center mb-6 px-4 py-1.5 bg-navy-950/80 backdrop-blur-md rounded-xl text-white font-bold text-xs tracking-tight border border-white/10 shadow-lg">
                       {student.companyRole}
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                       {/* Circular Student Photo */}
                       <div className="w-20 h-20 shrink-0 rounded-full border-4 border-white/30 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700">
                          <img loading="lazy" src={student.photo} alt={student.name} className="w-full h-full object-cover" />
                       </div>

                       {/* White Info Card Section */}
                       <div className="bg-white rounded-[1.2rem] p-3.5 shadow-lg flex-1 ml-4 space-y-1">
                          <div className="flex gap-2 items-baseline">
                             <span className="text-[9px] font-black text-gray-400 uppercase tracking-tight w-12">Name :</span>
                             <span className="text-[10px] font-black text-navy-900 uppercase truncate">{student.name}</span>
                          </div>
                          <div className="flex gap-2 items-baseline">
                             <span className="text-[9px] font-black text-gray-400 uppercase tracking-tight w-12">Branch :</span>
                             <span className="text-[10px] font-black text-navy-900 uppercase truncate">{student.branch}</span>
                          </div>
                          <div className="flex gap-2 items-baseline">
                             <span className="text-[9px] font-black text-gray-400 uppercase tracking-tight w-12">Degree :</span>
                             <span className="text-[10px] font-black text-navy-900 uppercase truncate">{student.degree}</span>
                          </div>
                          <div className="flex gap-2 items-baseline">
                             <span className="text-[9px] font-black text-gray-400 uppercase tracking-tight w-12">Batch :</span>
                             <span className="text-[10px] font-black text-navy-900 uppercase truncate">{student.batch}</span>
                          </div>
                       </div>
                    </div>

                    {/* Salary Package Display */}
                    <div className="text-center font-black text-white text-[10px] uppercase tracking-tighter mt-1 flex flex-col items-center">
                       <span className="mb-0.5">{student.packageInfo.split('\n')[0]}</span>
                       <span className="text-[8px] font-bold text-white/60 lowercase italic">{student.packageInfo.split('\n')[1] || ''}</span>
                    </div>
                  </div>

                  {/* Large Company Logo Section */}
                  <div className="bg-white py-6 px-10 flex items-center justify-center h-24 border-t border-gray-50">
                    <img loading="lazy" src={student.companyLogo || 'https://becbbsr.ac.in/images/events/tata.jpg'} alt="Company Logo" className="h-full w-full object-contain filter group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
