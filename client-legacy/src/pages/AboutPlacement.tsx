import { PageLayout } from '../components/PageLayout';
import { SEO } from '../components/SEO';
import { Briefcase, Target, CheckCircle2, TrendingUp, Award, Phone, Mail } from 'lucide-react';

const objectives = [
  "Organize campus placement for final year students.",
  "Arrange Industry & Institution interaction/rapport.",
  "Facilitate companies for recruiting candidates.",
  "Enhance student's employability through training.",
  "Arrange seminars, workshops and guest lectures.",
  "Provide resources for career planning processes.",
  "Empower students with lifelong decision making skills."
];

const trainingPillars = [
  { year: "1st Year", focus: "Communication Skills & Personality Development" },
  { year: "2nd Year", focus: "Quantitative Aptitude & Verbal Ability" },
  { year: "3rd Year", focus: "Pre-Placement Training (PPT)" },
  { year: "4th Year", focus: "Industry Specific Training & Campus Recruitment" }
];

export const AboutPlacement = () => {
  return (
    <PageLayout title="Training & Placement">
      <SEO 
        title="Training & Placement Cell | Career Opportunities at BEC"
        description="Learn about the Training &amp; Placement Cell of Bhubaneswar Engineering College (BEC). Explore our career training roadmap, industrial training, and 75%+ placement records."
        keywords={[
          "Bhubaneswar Engineering College placement cell",
          "BEC training and placement roadmap",
          "engineering summer training Odisha",
          "student employability development Bhubaneswar",
          "BEC highest salary package",
          "career opportunities engineering Odisha"
        ]}
      />
      <div className="flex flex-col gap-16 mt-4">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-12 relative overflow-hidden">
           <Briefcase className="absolute top-8 right-12 w-48 h-48 text-primary/5 -rotate-12 pointer-events-none" />
           <div className="w-full md:w-2/3 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <TrendingUp className="w-8 h-8" />
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-black text-primary uppercase tracking-tight">
                   The Backbone of BEC
                 </h2>
              </div>
              <div className="text-gray-600 leading-[1.8] text-[16px] space-y-6 text-justify">
                <p>
                  Training & Placement Department is committed to develop enthusiasm, strong human values and good leadership qualities as per the need of hurriedly changing technology working with a strategy oriented planning.
                </p>
                <p>
                  The department incessantly strives to help students in pursuing their career goals by acquiring employment seeking skills. This is accomplished through building a strong partnership amongst students, faculty members, alumni and companies.
                </p>
                <p className="font-bold text-primary text-lg">
                  75% Placement Record • Highest Package: ₹10 LPA • Average Salary: ₹3.5 LPA
                </p>
              </div>
           </div>
           
           <div className="w-full md:w-1/3 shrink-0">
              <div className="bg-primary rounded-3xl p-10 text-white h-full border border-white/5 relative overflow-hidden group shadow-2xl">
                 <Target className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform" />
                 <h4 className="text-2xl font-black uppercase tracking-widest mb-6">Core Objectives</h4>
                 <div className="space-y-4 text-xs font-medium text-white/70">
                    {objectives.slice(0, 5).map((obj, i) => (
                      <p key={i} className="flex gap-2">
                         <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                         {obj}
                      </p>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Placement Head Desk — Government-Style Profile */}
        <section style={{ background: '#fff', border: '2px solid #1a237e', borderRadius: '0', padding: '0', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.13)' }}>

          {/* Header Bar */}
          <div style={{ background: '#1a237e', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '4px solid #c8a400', flexWrap: 'wrap' }}>
            <Award style={{ color: '#ffd700', width: 20, height: 20, flexShrink: 0 }} />
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Georgia, serif', lineHeight: 1.4 }}>
              Training &amp; Placement Department — Head of Department
            </span>
          </div>

          {/* Profile Body — stacks on mobile */}
          <div className="flex flex-col md:flex-row" style={{ alignItems: 'stretch', gap: 0 }}>

            {/* Photo Column — full width on mobile, fixed on desktop */}
            <div className="w-full md:w-auto border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#1a237e]" style={{
              background: 'linear-gradient(180deg, #e8edf8 0%, #c9d4ee 60%, #b0bedd 100%)',
              padding: '32px 24px 0 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0',
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0
            }}>
              {/* Stripe decoration */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '8px',
                background: 'repeating-linear-gradient(90deg, #1a237e 0px, #1a237e 40px, #c8a400 40px, #c8a400 48px)'
              }} />

              {/* Photo Frame */}
              <div style={{
                width: '200px',
                height: '250px',
                border: '5px solid #1a237e',
                outline: '3px solid #c8a400',
                outlineOffset: '4px',
                overflow: 'hidden',
                background: '#d0daf2',
                flexShrink: 0,
                position: 'relative',
                boxShadow: '0 12px 40px rgba(26,35,126,0.25), 0 4px 12px rgba(0,0,0,0.15)',
                marginTop: '20px'
              }}>
                <img
                  src="/facilities/image.png"
                  alt="Subrat Kumar Sahoo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', filter: 'contrast(1.05) brightness(1.02)' }}
                />
              </div>

              {/* Nameplate */}
              <div style={{ background: '#1a237e', color: '#fff', padding: '10px 20px', textAlign: 'center', width: 'calc(100% + 48px)', marginLeft: '-24px', marginRight: '-24px', marginTop: '20px', borderTop: '4px solid #c8a400' }}>
                <div style={{ fontWeight: 900, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Georgia, serif' }}>
                  Subrat Kumar Sahoo
                </div>
              </div>
              <div style={{ background: '#c8a400', color: '#000', padding: '5px 20px', textAlign: 'center', width: 'calc(100% + 48px)', marginLeft: '-24px', marginRight: '-24px' }}>
                <div style={{ fontWeight: 800, fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Head — Training &amp; Placement Dept.
                </div>
              </div>
            </div>

            {/* RIGHT — Details Column */}
            <div style={{ flex: 1, padding: '20px 16px', minWidth: 0 }}>

              {/* Name & Designation */}
              <div style={{ borderBottom: '2px solid #1a237e', paddingBottom: '12px', marginBottom: '16px' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontWeight: 900, fontSize: '20px', color: '#1a237e', textTransform: 'uppercase', margin: 0, letterSpacing: '1px', wordBreak: 'break-word' }}>
                  Mr. Subrat Kumar Sahoo
                </h3>
                <p style={{ color: '#c8a400', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '4px 0 0 0', fontFamily: 'Georgia, serif' }}>
                  Head — Training &amp; Placement Department
                </p>
                <p style={{ color: '#444', fontWeight: 500, fontSize: '12px', margin: '4px 0 0 0' }}>
                  Bhubaneswar Engineering College (BEC), Bhubaneswar, Odisha
                </p>
              </div>

              {/* Info Table — responsive */}
              <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                  <tbody>
                    {[
                      { label: 'Qualification', value: 'MBA, PGDEMA' },
                      { label: 'Experience', value: '19+ Years in Industry & Academia' },
                      { label: 'Specialization', value: 'Training & Placement, Campus Recruitment, Industry Relations, Career Development, Employability Enhancement' },
                      { label: 'Department', value: 'Training & Placement Cell, BEC' },
                      { label: 'Phone No.', value: '7008684743', isPhone: true },
                      { label: 'Email ID', value: 'subrat@becbbsr.ac.in', isEmail: true },
                    ].map((row: any, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #e0e0e0', background: i % 2 === 0 ? '#f7f8fc' : '#fff' }}>
                        <td style={{ padding: '8px 10px', fontWeight: 700, color: '#1a237e', width: '35%', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.5px', borderRight: '2px solid #1a237e', verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            {row.isPhone && <Phone style={{ width: 11, height: 11, flexShrink: 0 }} />}
                            {row.isEmail && <Mail style={{ width: 11, height: 11, flexShrink: 0 }} />}
                            {row.label}
                          </span>
                        </td>
                        <td style={{ padding: '8px 10px', color: '#222', fontWeight: 600, wordBreak: 'break-word' }}>
                          {row.isPhone ? (
                            <a href={`tel:${row.value}`} style={{ color: '#1a237e', textDecoration: 'none', fontWeight: 700 }}>{row.value}</a>
                          ) : row.isEmail ? (
                            <a href={`mailto:${row.value}`} style={{ color: '#1a237e', textDecoration: 'none', fontWeight: 700, wordBreak: 'break-all' }}>{row.value}</a>
                          ) : row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Placement Record Badge */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: '#f0f4ff', border: '1.5px solid #1a237e', padding: '10px 12px' }}>
                <div style={{ width: '8px', minHeight: '36px', background: '#1a237e', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 800, color: '#1a237e', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Placement Record</div>
                  <div style={{ color: '#333', fontSize: '12px', fontWeight: 600, lineHeight: 1.6 }}>
                    75%+ Placement Rate &nbsp;|&nbsp; Highest: ₹10 LPA &nbsp;|&nbsp; Avg: ₹3.5 LPA
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Training Modules */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter flex items-center gap-4">
                 <div className="w-8 h-1 bg-primary"></div>
                 Career Training Roadmap
              </h3>
              <div className="space-y-4">
                 {trainingPillars.map((pillar, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg flex items-center gap-6 group hover:border-primary/30 transition-all">
                       <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center text-primary font-black text-xs uppercase group-hover:bg-primary group-hover:text-white transition-all">
                          {pillar.year}
                       </div>
                       <div className="flex flex-col">
                          <span className="font-black text-primary uppercase text-sm">{pillar.focus}</span>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Placement Preparation</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-gray-50 rounded-3xl p-10 flex flex-col gap-8 border border-gray-200/50">
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter">Industrial Exposure</h3>
              <div className="text-gray-600 text-sm leading-relaxed space-y-6 text-justify">
                 <p>
                    Industrial visits and tours are an integral part of the professional course, during which students visit companies and get insight regarding the internal working environment. It provides students with an opportunity to learn practical through interaction.
                 </p>
                 <p>
                    The Cell arranges mandatory industrial training for students at the end of the 4th and 6th Semesters. Each student has to undertake summer training in industries of repute for one or two months.
                 </p>
              </div>
              <div className="mt-4 p-6 bg-white rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
                 <Award className="w-10 h-10 text-accent" />
                 <div>
                    <span className="block font-black text-primary uppercase text-xs">Summer Projects</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Apply theoretical concepts in practice</span>
                 </div>
              </div>
           </div>
        </section>

      </div>
    </PageLayout>
  );
};
