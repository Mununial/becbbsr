import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouter as useNextRouter } from 'next/navigation';
import { prefetchRoute } from './SubpagesRouter';

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

  const isExternal = typeof to === 'string' && (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('#'));

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
import { User, GraduationCap, Mail, ChevronRight, BookOpen, ExternalLink, Award, FileDown, X } from 'lucide-react';

export interface HODData {
  name: string;
  designation: string;
  qualification: string;
  email: string;
  image?: string;
  specialization?: string;
  researchInterest?: string;
  experience?: string;
  publications?: {
    journals: number;
    conferences: number;
  };
  cvLink?: string;
  teachingExp?: string;
  researchExp?: string;
  industryExp?: string;
  coursesTaught?: string[];
  researchOutput?: {
    papers?: string | number;
    phdGuided?: string | number;
    books?: string | number;
    patents?: string | number;
    projects?: string | number;
  };
}

interface DepartmentSidebarProps {
  hod: HODData;
  activeBranch: 'cse' | 'aero' | 'agriculture' | 'civil' | 'electrical' | 'mechanical' | 'ame' | 'bsh';
}

const DEPARTMENTS = [
  { key: 'cse', name: 'Comp. Science & Engineering', path: '/cse-engg' },
  { key: 'aero', name: 'Aeronautical Engineering', path: '/aeronautical-engg' },
  { key: 'ame', name: 'Aircraft Maintenance Engg', path: '/ame' },
  { key: 'agriculture', name: 'Agriculture Engineering', path: '/agriculture-engg' },
  { key: 'civil', name: 'Civil Engineering', path: '/civil-engg' },
  { key: 'electrical', name: 'Electrical Engineering', path: '/ee-engg' },
  { key: 'mechanical', name: 'Mechanical Engineering', path: '/mechanical-engg' },
  { key: 'bsh', name: 'Basic Science & Humanities', path: '/basic-science-humanities' },
];

const QUICK_LINKS = [
  { name: 'Department Home', path: '#' },
  { name: 'Course', path: '/syllabus' },
  { name: 'Laboratory', path: '#labs' },
  { name: 'Faculty', path: '#faculty-modal' },
  { name: 'Lesson Plan', path: '/syllabus' },
  { name: 'Lecture Notes / E-Learning', path: '/e-learning' },
  { name: 'Research Activities', path: '/seminar-workshop' },
];

export const DepartmentSidebar = ({ hod, activeBranch }: DepartmentSidebarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Generate a premium fallback avatar if HOD has no image
  const initials = hod.name
    .split(' ')
    .filter(n => n.toLowerCase() !== 'dr.' && n.toLowerCase() !== 'er.')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* ─── HOD Profile Card ─── */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 relative group hover-sweep hover:border-accent/30">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
        <div className="p-8 flex flex-col items-center text-center">
          
          {/* HOD Image/Avatar */}
          <div className="w-28 h-28 rounded-2xl overflow-hidden mb-6 bg-slate-50 border-2 border-slate-100 flex items-center justify-center relative group-hover:scale-105 transition-all duration-500 shadow-md">
            {hod.image ? (
              <img src={hod.image} alt={hod.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center text-white font-black text-2xl font-poppins">
                {initials || <User className="w-8 h-8 opacity-65" />}
              </div>
            )}
            <div className="absolute bottom-1 right-1 bg-accent rounded-md p-1 text-white shadow-md">
              <Award className="w-3.5 h-3.5" />
            </div>
          </div>

          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-accent mb-2 bg-accent/5 px-3 py-1 rounded-full">
            Head of Department
          </span>
          <h3 className="text-lg font-black text-primary uppercase font-poppins tracking-tight mb-1">
            {hod.name}
          </h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">
            {hod.designation}
          </p>
          <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium mb-5">
            <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>{hod.qualification}</span>
          </div>



          {/* Read More button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-3.5 bg-primary hover:bg-primary/95 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-primary/15 hover:shadow-primary/30 transition-all active:scale-98 hover-sweep"
          >
            View HOD Profile
          </button>
        </div>
      </div>

      {/* ─── Departments Menu ─── */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden p-8">
        <h4 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-2 pb-4 border-b border-slate-50">
          <BookOpen className="w-4 h-4 text-accent" /> Departments
        </h4>
        <ul className="flex flex-col gap-2.5">
          {DEPARTMENTS.map((dept) => {
            const isActive = activeBranch === dept.key;
            return (
              <li key={dept.key}>
                <Link
                  to={dept.path}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-primary to-blue-900 text-white shadow-md shadow-primary/10'
                      : 'text-slate-500 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  <span className="truncate">{dept.name}</span>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'rotate-90 text-accent' : 'text-slate-300'}`} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ─── Quick Links Menu ─── */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden p-8">
        <h4 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-2 pb-4 border-b border-slate-50">
          <ExternalLink className="w-4 h-4 text-accent" /> Quick Links
        </h4>
        <ul className="flex flex-col gap-3">
          {QUICK_LINKS.map((link, idx) => {
            const isAnchor = link.path.startsWith('#');
            return (
              <li key={idx}>
                {isAnchor ? (
                  <a
                    href={link.path}
                    onClick={(e) => {
                      if (link.path === '#faculty-modal') {
                        e.preventDefault();
                        setIsModalOpen(true);
                      }
                    }}
                    className="flex items-center gap-3 text-slate-500 hover:text-primary transition-all text-xs font-bold uppercase tracking-wider py-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{link.name}</span>
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className="flex items-center gap-3 text-slate-500 hover:text-primary transition-all text-xs font-bold uppercase tracking-wider py-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{link.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ─── Detailed HOD Modal Overlay ─── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col relative animate-slide-up">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary to-blue-900 px-8 py-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-white/10 rounded-xl">
                  <User className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-wider text-sm">HOD Academic Profile</h4>
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Bhubaneswar Engineering College</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto max-h-[70vh] flex flex-col gap-6 text-slate-700">
              
              {/* Profile Overview */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-md">
                  {hod.image ? (
                    <img src={hod.image} alt={hod.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center text-white font-black text-xl font-poppins">
                      {initials}
                    </div>
                  )}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-black text-primary uppercase font-poppins">{hod.name}</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{hod.designation}</p>
                  <p className="text-xs text-slate-500 font-semibold">{hod.qualification}</p>
                  {hod.experience && !hod.teachingExp && (
                    <p className="text-[10px] text-accent font-black uppercase tracking-wider mt-1">{hod.experience} Academic Experience</p>
                  )}
                </div>
              </div>

              {/* Experience Breakdown (Teaching, Research, Industry) */}
              {(hod.teachingExp || hod.researchExp || hod.industryExp) && (
                <div className="grid grid-cols-3 gap-3 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  {hod.teachingExp && (
                    <div className="text-center">
                      <div className="text-sm font-black text-primary">{hod.teachingExp}</div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1">Teaching Exp</div>
                    </div>
                  )}
                  {hod.researchExp && (
                    <div className="text-center border-l border-slate-200">
                      <div className="text-sm font-black text-accent">{hod.researchExp}</div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1">Research Exp</div>
                    </div>
                  )}
                  {hod.industryExp && (
                    <div className="text-center border-l border-slate-200">
                      <div className="text-sm font-black text-slate-600">{hod.industryExp}</div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1">Industry Exp</div>
                    </div>
                  )}
                </div>
              )}

              {/* Specialization & Interests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hod.specialization && (
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100/50">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-wider mb-2">Specialization</h5>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">{hod.specialization}</p>
                  </div>
                )}
                {hod.researchInterest && (
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100/50">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-wider mb-2">Research Interest</h5>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">{hod.researchInterest}</p>
                  </div>
                )}
              </div>

              {/* Courses Taught tags */}
              {hod.coursesTaught && hod.coursesTaught.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100/50">
                  <h5 className="text-[10px] font-black text-primary uppercase tracking-wider mb-3">Courses Taught (PG/UG)</h5>
                  <div className="flex flex-wrap gap-2">
                    {hod.coursesTaught.map((course, idx) => (
                      <span key={idx} className="bg-white px-3 py-1.5 rounded-lg border border-slate-100/50 text-[10px] font-bold text-slate-600">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Research & Publication Output Table */}
              {hod.researchOutput && (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-100">
                    <h5 className="text-[10px] font-black text-primary uppercase tracking-wider">Research &amp; Publications Profile</h5>
                  </div>
                  <table className="w-full text-left border-collapse text-xs">
                    <tbody>
                      {hod.researchOutput.papers !== undefined && (
                        <tr className="border-b border-slate-50">
                          <td className="px-5 py-3 font-semibold text-slate-500 uppercase text-[9px] tracking-wider">Journal &amp; Conference Papers</td>
                          <td className="px-5 py-3 font-black text-primary text-right">{hod.researchOutput.papers}</td>
                        </tr>
                      )}
                      {hod.researchOutput.phdGuided !== undefined && (
                        <tr className="border-b border-slate-50">
                          <td className="px-5 py-3 font-semibold text-slate-500 uppercase text-[9px] tracking-wider">Ph.D Guided (Completed/Ongoing)</td>
                          <td className="px-5 py-3 font-black text-accent text-right">{hod.researchOutput.phdGuided}</td>
                        </tr>
                      )}
                      {hod.researchOutput.books !== undefined && (
                        <tr className="border-b border-slate-50">
                          <td className="px-5 py-3 font-semibold text-slate-500 uppercase text-[9px] tracking-wider">Books &amp; Chapters Published</td>
                          <td className="px-5 py-3 font-black text-slate-600 text-right">{hod.researchOutput.books}</td>
                        </tr>
                      )}
                      {hod.researchOutput.patents !== undefined && (
                        <tr className="border-b border-slate-50">
                          <td className="px-5 py-3 font-semibold text-slate-500 uppercase text-[9px] tracking-wider">Patents Filed &amp; Granted</td>
                          <td className="px-5 py-3 font-black text-amber-500 text-right">{hod.researchOutput.patents}</td>
                        </tr>
                      )}
                      {hod.researchOutput.projects !== undefined && (
                        <tr>
                          <td className="px-5 py-3 font-semibold text-slate-500 uppercase text-[9px] tracking-wider">Consultancy &amp; Research Projects</td>
                          <td className="px-5 py-3 font-black text-emerald-500 text-right">{hod.researchOutput.projects}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Legacy Publications Box */}
              {!hod.researchOutput && hod.publications && (
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100/50 flex justify-around items-center">
                  <div className="text-center">
                    <div className="text-2xl font-black text-primary">{hod.publications.journals}</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Journal Papers</div>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div className="text-center">
                    <div className="text-2xl font-black text-accent">{hod.publications.conferences}</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Conferences</div>
                  </div>
                </div>
              )}

              {/* Biodata download */}
              <div className="mt-4">
                <a
                  href={hod.cvLink || '#'}
                  onClick={(e) => {
                    if (!hod.cvLink) {
                      e.preventDefault();
                      alert("CV will be downloaded automatically when compiled.");
                    }
                  }}
                  className="w-full py-3.5 bg-accent hover:bg-accent/90 text-white font-black text-xs uppercase tracking-widest rounded-xl text-center flex items-center justify-center gap-2 shadow-lg shadow-accent/15 hover:shadow-accent/30 transition-all"
                >
                  <FileDown className="w-4 h-4 shrink-0" />
                  Download CV
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};
