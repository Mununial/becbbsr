import { PageLayout } from '../components/PageLayout';
import { ShieldCheck, Award, Linkedin, Facebook, Star, Building2, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const trustees = [
  {
    name: "Er. Alok Ranjan Mallick",
    role: "Chairman",
    tag: "Founder",
    organization: "Ayush Group of Institutions",
    description: "The visionary founder who established the bedrock of BEC with a mission to deliver world-class technical education, ensuring strategic growth and academic excellence.",
    image: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629465/becweb/chairman.jpg",
    gradient: "from-amber-500 to-orange-600",
    accent: "#f59e0b",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Mr. Ayush Mallick",
    role: "Executive Director",
    tag: "Management",
    organization: "Ayush Group of Institutions",
    description: "A dynamic leader ensuring operational excellence and a student-centric environment across all institutions, focusing on innovation and global standards.",
    image: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629465/becweb/chairman.jpg", // Placeholder for now
    gradient: "from-primary to-blue-700",
    accent: "#1e40af",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Prof. (Dr.) B.N. Biswal",
    role: "Director",
    tag: "Academic Head",
    organization: "Bhubaneswar Engineering College (BEC)",
    description: "A pioneering academician with 27+ years of experience, driving research-led education and ensuring that BEC students become industry-ready technocrats.",
    image: "https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629467/becweb/director.jpg",
    gradient: "from-teal-500 to-cyan-600",
    accent: "#0ea5e9",
    linkedin: "#",
    facebook: "#",
  }
];

const stats = [
  { value: '16+', label: 'Years of Excellence' },
  { value: '5k+', label: 'Alumni Network' },
  { value: '6', label: 'Engineering Branches' },
  { value: '90%+', label: 'Placement Rate' },
];

export const TrustMembers = () => {
  return (
    <PageLayout
      title="Members of Trust"
      subtitle="The visionary leaders driving innovation and excellence at Bhubaneswar Engineering College (BEC)."
      badge="Ayush Group of Institutions"
    >
      <SEO 
        title="Members of Trust | Visionary Founders &amp; Trustees | BEC"
        description="Meet the distinguished trust members and visionary founders of Bhubaneswar Engineering College (BEC) managed under the Ayush Group of Institutions."
        keywords={[
          "Bhubaneswar Engineering College trust members",
          "BEC trustees",
          "Ayush Group of Institutions founders",
          "Er Alok Ranjan Mallick BEC",
          "Ayush Mallick Executive Director"
        ]}
      />
      <div className="flex flex-col gap-14">

        {/* ── Intro Banner ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden p-10 md:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e3a8a 100%)' }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-secondary/15 rounded-full blur-[80px] translate-y-1/2 pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 text-secondary text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <Star className="w-3 h-3" /> Since 2008
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight max-w-4xl mx-auto">
              Empowered by{' '}
              <span className="text-secondary">Ayush Group</span>
              {' '}of Institutions
            </h2>
            <p className="text-white/55 font-medium leading-relaxed text-base max-w-3xl mx-auto">
              Since its inception in 2008, BEC has become a standard-bearer for technical education. Under the visionary leadership of Ayush Group, we empower students to lead the global technological landscape.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl py-5 px-4">
                  <span className="block text-3xl font-black text-secondary mb-1">{s.value}</span>
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── Trust Members Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustees.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Photo area */}
              <div className="relative aspect-[4/5] overflow-hidden bg-navy-950">
                {/* Gradient overlay with member color */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-multiply`} />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-950/90 to-transparent z-10" />

                {/* Tag badge */}
                <div className="absolute top-5 left-5 z-20">
                  <span
                    className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border"
                    style={{ background: `${member.accent}22`, color: member.accent, borderColor: `${member.accent}44` }}
                  >
                    {member.tag}
                  </span>
                </div>

                {/* Name over photo */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h3 className="text-xl font-black text-white uppercase tracking-wide leading-tight mb-1">{member.name}</h3>
                  <p className="font-black text-xs uppercase tracking-widest" style={{ color: member.accent }}>{member.role}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-7 flex flex-col gap-5 flex-1">
                {/* Quote */}
                <div className="flex gap-3">
                  <Quote className="w-6 h-6 shrink-0 mt-0.5" style={{ color: member.accent, opacity: 0.5 }} />
                  <p className="text-gray-500 font-medium text-[13px] leading-relaxed italic line-clamp-3">
                    {member.description}
                  </p>
                </div>

                <div className="mt-auto pt-5 border-t border-gray-50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-gray-300" />
                    <span className="text-[10px] font-black text-navy-900/40 uppercase tracking-widest leading-tight">{member.organization}</span>
                  </div>
                  <div className="flex gap-2">
                    <a href={member.facebook} className="w-8 h-8 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-100 flex items-center justify-center transition-colors group/fb">
                      <Facebook className="w-3.5 h-3.5 text-gray-300 group-hover/fb:text-blue-600 transition-colors" />
                    </a>
                    <a href={member.linkedin} className="w-8 h-8 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-100 flex items-center justify-center transition-colors group/li">
                      <Linkedin className="w-3.5 h-3.5 text-gray-300 group-hover/li:text-blue-700 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Color accent bottom stripe */}
              <div className={`h-1 w-full bg-gradient-to-r ${member.gradient} opacity-70`} />
            </motion.div>
          ))}
        </div>

        {/* ── Official Note ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <div className="border border-primary/10 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm bg-white">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 flex items-center justify-center shrink-0">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="font-black text-navy-950 text-sm uppercase tracking-widest mb-1">Official Recognition</h4>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">
                Part of the <strong className="text-navy-950">Ayush Group of Institutions</strong>, Government of Odisha.{' '}
                Approved by <strong className="text-primary">AICTE</strong>, New Delhi.{' '}
                Affiliated to <strong className="text-primary">BPUT</strong> &{' '}
                <strong className="text-primary">SCTE&VT</strong> Odisha.
              </p>
            </div>
            <div className="ml-auto hidden sm:flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-8 h-8 text-secondary animate-pulse" />
            </div>
          </div>
        </motion.div>

      </div>
    </PageLayout>
  );
};
