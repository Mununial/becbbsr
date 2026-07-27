import { PageLayout } from '../components/PageLayout';
import { GraduationCap, Award, Briefcase, Microscope, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export const DirectorProfile = () => {
  return (
    <PageLayout title="Director Profile" subtitle="Prof. Dr. B.N. Biswal — Director, Academics & Administration">
      <SEO 
        title="Director Profile | Prof. Dr. B.N. Biswal | BEC"
        description="Meet Prof. Dr. B.N. Biswal, Director of Academics &amp; Administration at Bhubaneswar Engineering College (BEC). PhD in Signal Processing, with 27+ years experience."
        keywords={[
          "Prof Dr B N Biswal",
          "BEC Director profile",
          "Bhubaneswar Engineering College Director",
          "academics and administration BEC",
          "engineering PhD mentors Odisha"
        ]}
      />
      <div className="flex flex-col lg:flex-row gap-6 mt-4">

        {/* ── Left Sidebar ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[280px] shrink-0 flex flex-col gap-5"
        >
          {/* Photo card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)] border border-gray-100">
            {/* Top stripe */}
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg,#f59e0b,#1e40af,#0ea5e9)' }} />
            <div className="w-full aspect-[3/4] overflow-hidden relative">
              <img
                src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629467/becweb/director.jpg"
                alt="Prof. Dr. B.N. Biswal — Director BEC"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10">
                <p className="text-secondary text-[9px] font-black uppercase tracking-[0.3em] mb-0.5">Director</p>
                <h3 className="text-white font-black text-base leading-tight uppercase">Prof. Dr. B.N. Biswal</h3>
                <p className="text-white/50 text-[9px] font-semibold mt-0.5 uppercase tracking-widest">Academics & Administration</p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="p-5 space-y-4">
              {[
                { icon: GraduationCap, color: 'text-primary bg-primary/10', label: 'Education', value: 'PhD • M.E • B.E' },
                { icon: Briefcase,     color: 'text-orange-500 bg-orange-500/10', label: 'Experience', value: '27+ Years' },
                { icon: Microscope,    color: 'text-sky-500 bg-sky-500/10', label: 'Research Area', value: 'Signal Processing' },
              ].map(({ icon: Icon, color, label, value }) => (
                <div key={label} className="flex items-center gap-3 group">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block leading-none mb-0.5">{label}</span>
                    <span className="text-sm font-black text-navy-900 uppercase">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accomplishments */}
          <div className="bg-navy-950 rounded-2xl p-5 text-white/80 shadow-xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Award className="w-20 h-20" />
            </div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
              <div className="w-4 h-0.5 bg-primary" /> Accomplishments
            </h4>
            <div className="space-y-2.5 text-[12px] font-medium">
              {[
                'Published papers in National & International Journals',
                'International Research Repute',
                'Editor of Springer Publications',
                'Expert in IQAC Establishment',
                'Conference presentations worldwide',
              ].map((item, i) => (
                <motion.p key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-2">
                  <span className="text-secondary font-black shrink-0">→</span> {item}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right: Biography + Message ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 flex flex-col gap-5"
        >
          {/* Biography */}
          <div className="bg-white rounded-2xl shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)] border border-gray-100 p-7 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-primary rounded-full" />
              <div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Academic Profile</p>
                <h4 className="text-2xl font-black text-navy-950 uppercase tracking-tighter">Biography</h4>
              </div>
            </div>
            <div className="text-gray-600 leading-[1.9] text-[14.5px] space-y-4 text-justify">
              <p>
                Dr B.N. Biswal, Professor of Computer Science & Engineering, is currently functioning as Director (Academics & Administration). He has 27 years of academic and administrative experience in Several Engineering Colleges of the state of Odisha.
              </p>
              <p>
                He worked in various administrative positions which includes Head of the Department, and Director of Bhubaneswar Engineering College (BEC), and Director (IQAC) in BEC.
              </p>
              <p>
                He did his B.E in Electronics Engineering from Marathwada University (MS), M.E in Communication & System Engineering from UCE Burla and Ph.D in Computer Science from Utkal University in the Area of Signal Processing.
              </p>
              <p>
                He has published number of papers in reputed journals of National and International Repute. Also he has published papers in National and international Conferences. He is also the editor of Springer. He is also very strong in establishing systems for effective functioning and ensuring implementation of established systems.
              </p>
            </div>
          </div>

          {/* Director's Message */}
          <div className="bg-white rounded-2xl shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)] border border-gray-100 p-7 md:p-10 relative overflow-hidden">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/5 pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-secondary rounded-full" />
              <div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">From the Desk of the Director</p>
                <h4 className="text-2xl font-black text-navy-950 uppercase tracking-tighter">Director's Message</h4>
              </div>
            </div>

            <div className="text-gray-600 leading-[1.9] text-[14.5px] space-y-4 text-justify">
              <p>
                It is my pleasure to welcome all freshers of BTech, Diploma & MBA Programs to Bhubaneswar Engineering College (BEC), a premier institution under the esteemed Ayush Group of Institutions, Bhubaneswar.
              </p>
              <p>
                Our well-equipped labs, research centers, workshops and libraries help in attaining highest standards in academics, research and professional excellence. We have excellent sports infrastructure & recreational facilities. We at BEC focus on holistic development of our students and emphasize on imparting sound conceptual knowledge coupled with skill building and value added programs on soft skills.
              </p>
              <p>
                We at BEC believe in practice that excellence is a continuous process and in pursuit of which the institute has made deep forays into contributing world renowned technocrats, socially responsible human beings by inculcating right values, successful entrepreneurs, competent leaders, innovative scientists and researchers.
              </p>
              <blockquote className="border-l-4 border-secondary pl-4 mt-6 text-navy-950 font-bold italic text-base leading-relaxed">
                "At the end of your journey with BEC, we are certain that you will turn out to be a confident technocrat and stay blessed in all sphere of life."
              </blockquote>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
              <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629467/becweb/director.jpg" alt="Director" className="w-12 h-12 rounded-full object-cover object-top border-2 border-primary/30 shadow" />
              <div>
                <span className="font-black text-navy-950 text-base uppercase tracking-widest block">Prof. Dr. B.N. Biswal</span>
                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Director — Bhubaneswar Engineering College (BEC)</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </PageLayout>
  );
};
