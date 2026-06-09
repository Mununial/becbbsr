import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { departmentData } from '../data/departmentData';

interface DepartmentDetailsHubProps {
  department: string;
}

export const DepartmentDetailsHub: React.FC<DepartmentDetailsHubProps> = ({ department }) => {
  const data = departmentData[department];

  if (!data) return null;

  // Icon renderer helper
  const renderIcon = (iconName: string, className = "w-5 h-5") => {
    const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;
    return <IconComponent className={className} />;
  };

  return (
    <div className="flex flex-col gap-10">
      {/* 1. Why Study Section */}
      <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm relative overflow-hidden group/why">
        <div className="flex flex-col gap-1 mb-8 border-b border-slate-200 pb-6">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">Department Overview</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            {data.whyStudyTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.whyStudyItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-500/35 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className={`p-3.5 rounded-xl ${item.bg} transition-all duration-300 group-hover:scale-105 shrink-0`}>
                {renderIcon(item.icon, "w-6 h-6")}
              </div>
              <div className="flex flex-col gap-1.5 pt-0.5">
                <span className="font-bold text-base md:text-lg text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </span>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Career Opportunities & Roles */}
      <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm relative overflow-hidden group/careers">
        <div className="flex flex-col gap-1 mb-8 border-b border-slate-200 pb-6">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">Career Guidance</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Career Opportunities & Roles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.careerTracks.map((track, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border-t-4 ${track.color} bg-white border border-slate-200 flex flex-col gap-5 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <span className={`text-sm md:text-base font-bold uppercase tracking-wider ${track.text}`}>
                {track.title}
              </span>
              <div className="flex flex-col gap-2.5">
                {track.roles.map((role, rIdx) => (
                  <div
                    key={rIdx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 shadow-xs hover:bg-slate-100/40 transition-all group"
                  >
                    <Icons.Briefcase className={`w-4 h-4 ${track.iconColor} shrink-0`} />
                    <span className="text-sm md:text-base font-semibold text-slate-700 leading-tight">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Top Recruiters */}
      <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm relative overflow-hidden group/recruiters">
        <div className="flex flex-col gap-1 mb-8 border-b border-slate-200 pb-6">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">Placements</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Top Recruiters & Industry Partners
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data.recruiters.map((recruiter, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-500/45 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group text-center min-h-[100px]"
            >
              <Icons.Building2 className="w-6 h-6 text-slate-400 group-hover:text-blue-600 mb-2 transition-colors duration-300" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-slate-700 group-hover:text-slate-900 transition-colors duration-300 leading-tight">
                {recruiter}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Future Scope */}
      <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm relative overflow-hidden group/future">
        <div className="flex flex-col gap-1 mb-8 border-b border-slate-200 pb-6">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">Prospects</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Future Scope & Higher Studies
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {data.futureScope.map((path, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-blue-500/35 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group bg-white"
            >
              <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 self-start shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Icons.GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1.5 pt-0.5">
                <span className="font-bold text-base md:text-lg text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                  {path.title}
                </span>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                  {path.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Applications */}
      <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm relative overflow-hidden group/apps">
        <div className="flex flex-col gap-1 mb-8 border-b border-slate-200 pb-6">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">Relevance</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Real-World Industry Applications
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {data.industryApps.map((app, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 p-5 rounded-2xl border border-slate-200 hover:border-blue-500/35 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white group"
            >
              <div className="flex justify-between items-center">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icons.Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Relevance: {app.val}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-bold text-sm md:text-base text-slate-800 tracking-wide group-hover:text-blue-600 transition-colors">
                  {app.name}
                </span>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                  {app.desc}
                </p>
              </div>
              {/* Animated Progress Bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: app.val }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="bg-blue-600 h-full rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
