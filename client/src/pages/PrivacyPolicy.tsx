import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Shield, Lock, Eye, Database, UserCheck, Bell, Globe, Phone, Mail, ExternalLink } from 'lucide-react';

const sections = [
  {
    id: 'information-collected',
    icon: Database,
    title: 'Information We Collect',
    color: 'from-blue-500 to-cyan-500',
    content: [
      {
        heading: 'Personal Information',
        text: 'We collect information you voluntarily provide when you contact us, submit an admission inquiry, subscribe to our newsletter, or fill out any form on our website. This may include your name, email address, phone number, date of birth, academic qualifications, and course preferences.'
      },
      {
        heading: 'Automatically Collected Information',
        text: 'When you visit our website, we automatically collect technical information such as your IP address, browser type and version, device type, operating system, pages visited, time spent on pages, and referring URLs. This is collected via cookies and similar technologies.'
      },
      {
        heading: 'Communication Records',
        text: 'If you contact us via email, phone, or our contact form, we may retain records of that communication to assist with any follow-up queries and to improve our services.'
      }
    ]
  },
  {
    id: 'how-we-use',
    icon: Eye,
    title: 'How We Use Your Information',
    color: 'from-purple-500 to-pink-500',
    content: [
      {
        heading: 'Admission & Academic Services',
        text: 'Your information is primarily used to process admission inquiries, respond to your questions about courses, seats, fees, and campus facilities, and to guide you through the admission process.'
      },
      {
        heading: 'Communication',
        text: 'We use your contact details to send important updates about admission deadlines, results, events, and notices. You may opt out of promotional emails at any time by clicking "Unsubscribe" at the bottom of any newsletter.'
      },
      {
        heading: 'Website Improvement',
        text: 'Anonymous, aggregated analytics data helps us understand how visitors interact with our website so we can continuously improve user experience, content quality, and navigation.'
      },
      {
        heading: 'Legal Compliance',
        text: 'We may process your information when required to comply with applicable laws, regulations, legal processes, or enforceable governmental requests in India.'
      }
    ]
  },
  {
    id: 'data-sharing',
    icon: Globe,
    title: 'Data Sharing & Disclosure',
    color: 'from-orange-500 to-amber-500',
    content: [
      {
        heading: 'We Do Not Sell Your Data',
        text: 'Bhubaneswar Engineering College (BEC) does not sell, rent, or trade your personal information to any third parties for marketing purposes. Your trust is our priority.'
      },
      {
        heading: 'Trusted Service Providers',
        text: 'We may share limited information with trusted third-party service providers who assist us in operating the website and conducting college operations — such as cloud hosting, email service providers, and analytics platforms — under strict confidentiality agreements.'
      },
      {
        heading: 'Regulatory & Statutory Bodies',
        text: 'We may disclose information to AICTE, BPUT, SCTE&VT, NAAC, and other government regulatory bodies as required for accreditation, audits, and statutory compliance. This is a legal obligation and not discretionary.'
      }
    ]
  },
  {
    id: 'cookies',
    icon: Lock,
    title: 'Cookies & Tracking',
    color: 'from-teal-500 to-emerald-500',
    content: [
      {
        heading: 'What Are Cookies?',
        text: 'Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, keep you logged in (for admin users), and understand how the site is used.'
      },
      {
        heading: 'Types of Cookies We Use',
        text: 'Essential Cookies: Required for the website to function correctly (e.g., session management for the admin panel). Analytics Cookies: Used via Google Analytics to understand visitor behaviour. These are anonymised and do not identify you personally. Preference Cookies: Store your language and display preferences.'
      },
      {
        heading: 'Managing Cookies',
        text: 'You can control or disable cookies through your browser settings at any time. However, disabling essential cookies may affect the functionality of certain features on our website.'
      }
    ]
  },
  {
    id: 'data-security',
    icon: Shield,
    title: 'Data Security',
    color: 'from-red-500 to-rose-500',
    content: [
      {
        heading: 'Security Measures',
        text: 'We implement industry-standard security measures including HTTPS encryption, secure server infrastructure, access controls, and regular security reviews to protect your personal information from unauthorised access, alteration, disclosure, or destruction.'
      },
      {
        heading: 'Data Retention',
        text: 'We retain personal data only as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Admission inquiry data is typically retained for up to 2 academic years.'
      },
      {
        heading: 'Limitation of Liability',
        text: 'While we take all reasonable steps to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee the absolute security of data transmitted to our site.'
      }
    ]
  },
  {
    id: 'your-rights',
    icon: UserCheck,
    title: 'Your Rights',
    color: 'from-indigo-500 to-blue-500',
    content: [
      {
        heading: 'Right to Access',
        text: 'You have the right to request a copy of the personal information we hold about you. We will respond to verified access requests within 30 days.'
      },
      {
        heading: 'Right to Correction',
        text: 'If you believe any information we hold is inaccurate or incomplete, you may request its correction at any time by contacting our administrative office.'
      },
      {
        heading: 'Right to Deletion',
        text: 'You may request deletion of your personal data, subject to any legal obligations that require us to retain certain records. Requests for deletion will be processed within 30 working days.'
      },
      {
        heading: 'Right to Withdraw Consent',
        text: 'Where processing is based on your consent, you have the right to withdraw that consent at any time by contacting us or clicking "Unsubscribe" in any email we send you.'
      }
    ]
  },
  {
    id: 'updates',
    icon: Bell,
    title: 'Policy Updates',
    color: 'from-sky-500 to-cyan-400',
    content: [
      {
        heading: 'Changes to This Policy',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the new policy on this page with an updated effective date. Continued use of our website after such changes constitutes acceptance of the updated policy.'
      },
      {
        heading: 'Effective Date',
        text: 'This Privacy Policy is effective as of 1st January 2025 and was last updated on 26th May 2026.'
      }
    ]
  }
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
});

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#F0F4F8] font-poppins">
      <SEO
        title="Privacy Policy | Bhubaneswar Engineering College (BEC)"
        description="Read the official Privacy Policy of Bhubaneswar Engineering College (BEC), Bhubaneswar. Learn how we collect, use, protect, and manage your personal data in compliance with Indian data protection laws. Website designed by Ayush Technologies."
        keywords={[
          'BEC privacy policy',
          'Bhubaneswar Engineering College data policy',
          'BEC BBSR website privacy',
          'engineering college privacy Odisha',
          'BEC student data protection',
          'Ayush Technologies BEC website',
          'becbbsr.ac.in privacy',
          'BEC data security policy'
        ]}
        schema={{
          "@type": "WebPage",
          "name": "Privacy Policy - Bhubaneswar Engineering College",
          "description": "Official Privacy Policy of Bhubaneswar Engineering College (BEC) Bhubaneswar, Odisha. Covers data collection, usage, sharing, security, and user rights.",
          "url": "https://becbbsr.ac.in/privacy-policy",
          "publisher": {
            "@type": "EducationalOrganization",
            "name": "Bhubaneswar Engineering College",
            "url": "https://becbbsr.ac.in",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bhubaneswar",
              "addressRegion": "Odisha",
              "postalCode": "752054",
              "addressCountry": "IN"
            }
          }
        }}
      />
      <Navbar onAdminClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#0a1628]">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.08),transparent)]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-3xl" />
          <div className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full bg-cyan-900/10 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-5 py-2 mb-8"
          >
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Legal Document</span>
          </motion.div>
          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
          >
            Privacy &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Data Policy</span>
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          >
            We are committed to protecting your privacy and handling your personal data with the highest standards of transparency and responsibility.
          </motion.p>
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500 font-bold"
          >
            <span>📅 Last Updated: 26 May 2026</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>🏛️ Effective: 1 Jan 2025</span>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b border-slate-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[11px] font-bold text-slate-500 hover:text-blue-600 uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-blue-50 transition-all whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {/* Intro Card */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <h2 className="text-2xl font-black mb-4">Our Commitment to You</h2>
          <p className="text-blue-100 leading-relaxed text-base">
            Bhubaneswar Engineering College (BEC), located at Gangapada, Bhubaneswar, Odisha, respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <strong className="text-white">www.becbbsr.ac.in</strong> or interact with us through any digital channel. Please read this policy carefully. If you disagree with its terms, please discontinue use of our website.
          </p>
          <p className="text-blue-200 text-sm font-bold mt-4 uppercase tracking-wider">
            This policy applies to: Students · Parents · Alumni · Visitors · Job Applicants
          </p>
        </motion.div>

        {/* Policy Sections */}
        {sections.map((section, idx) => (
          <motion.div
            key={section.id}
            id={section.id}
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden"
          >
            {/* Section Header */}
            <div className={`bg-gradient-to-r ${section.color} p-6 md:p-8 flex items-center gap-4`}>
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Section {String(idx + 1).padStart(2, '0')}</div>
                <h2 className="text-white text-xl md:text-2xl font-black">{section.title}</h2>
              </div>
            </div>

            {/* Section Content */}
            <div className="p-6 md:p-8 space-y-6">
              {section.content.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-slate-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-800 mb-2">{item.heading}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Contact for Privacy */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <h2 className="text-2xl font-black mb-2">Contact Us About Privacy</h2>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or the processing of your personal data, please contact us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="mailto:info@becbbsr.ac.in" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-2xl p-5 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">info@becbbsr.ac.in</div>
              </div>
            </a>
            <a href="tel:+919437090875" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-2xl p-5 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">+91 94370 90875</div>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Address</div>
                <div className="text-sm font-bold text-white leading-snug">Gangapada, Bhubaneswar, Odisha – 752054</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Designed By Ayush Technologies */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-100 rounded-3xl p-8 md:p-10 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 rounded-full px-4 py-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-indigo-600 text-xs font-black uppercase tracking-widest">Website Credits</span>
          </div>
          <h3 className="text-2xl font-black text-slate-800 mb-3">
            Designed &amp; Developed by
          </h3>
          <a
            href="https://www.ayushtechnologies.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border-2 border-indigo-200 hover:border-indigo-500 rounded-2xl px-8 py-4 shadow-lg hover:shadow-indigo-200 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">AT</span>
            </div>
            <div className="text-left">
              <div className="text-xl font-black text-indigo-700 group-hover:text-indigo-900 transition-colors">Ayush Technologies</div>
              <div className="text-xs text-slate-400 font-medium">www.ayushtechnologies.in</div>
            </div>
            <ExternalLink className="w-4 h-4 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
          </a>
          <p className="text-slate-500 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
            This website was professionally designed and developed by <strong>Ayush Technologies</strong>, a leading web development company. For web solutions, contact <a href="https://www.ayushtechnologies.in/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline">www.ayushtechnologies.in</a>.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};
