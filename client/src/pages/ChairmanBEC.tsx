import { PageLayout } from '../components/PageLayout';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const ChairmanBEC = () => {
  return (
    <PageLayout title="Chairman's Message" subtitle="Bhubaneswar Engineering College">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-[0_24px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden mt-4"
      >
        {/* Top gradient stripe */}
        <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg,#f59e0b,#1e40af,#0ea5e9,#f59e0b)' }} />

        <div className="flex flex-col md:flex-row gap-0">

          {/* ── Left: Photo Panel ── */}
          <div className="w-full md:w-[300px] shrink-0 relative bg-navy-950">
            <div className="w-full aspect-[3/4] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629465/becweb/chairman.jpg"
                alt="Er. Alok Ranjan Mallick — Chairman, BEC"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent px-5 pt-14 pb-6">
              <p className="text-secondary text-[9px] font-black uppercase tracking-[0.3em] mb-1">Chairman — BEC</p>
              <h3 className="text-white font-black text-lg leading-tight uppercase tracking-tight">Er. Alok Ranjan Mallick</h3>
              <p className="text-white/50 text-[10px] font-semibold mt-0.5 uppercase tracking-widest">Bhubaneswar Engineering College</p>
            </div>
          </div>

          {/* ── Right: Message ── */}
          <div className="flex-1 p-7 md:p-10 flex flex-col justify-between relative">
            <Quote className="absolute top-6 right-8 w-20 h-20 text-primary/5 pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-10 bg-secondary rounded-full" />
                <div>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">From the Desk of the Chairman</p>
                  <h2 className="text-2xl md:text-3xl font-black text-navy-950 tracking-tight uppercase leading-tight">Welcome Dear Freshers</h2>
                </div>
              </div>

              <div className="text-gray-600 leading-[1.85] text-[14.5px] space-y-4 text-justify">
                <p>
                  On behalf of the faculty, staff, and the entire academic community, I extend a warm welcome to each and every one of you to Bhubaneswar Engineering College (BEC), the Pivot of engineering excellence.
                </p>
                <p>
                  Embarking on this new chapter of your life, you stand at the threshold of immense possibilities and opportunities. Your journey here will not only be about acquiring knowledge but also about nurturing your passion, honing your skills, and fostering lifelong friendships.
                </p>
                <p>
                  At BEC, we are committed to providing you with an enriching and holistic educational experience. Our distinguished faculty members are not just educators but mentors who will guide you, challenge you, and inspire you to reach your full potential.
                </p>
                <p>
                  As you immerse yourselves in our vibrant campus life, I encourage you to seize every opportunity to explore, innovate, and contribute to the community. Engage in extracurricular activities, participate in research projects, and embrace the diversity of ideas and perspectives that thrive within our walls.
                </p>
                <p className="font-bold text-navy-950">
                  Remember, your time here is not just about earning a degree — it's about transforming yourselves into responsible global citizens and future leaders who will drive positive change in the world.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-5">
              <img src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629465/becweb/chairman.jpg" alt="Chairman" className="w-12 h-12 rounded-full object-cover object-top border-2 border-secondary/30 shadow" />
              <div>
                <span className="font-black text-navy-950 text-base uppercase tracking-widest block">Er. Alok Ranjan Mallick</span>
                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Chairman, Bhubaneswar Engineering College</span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </PageLayout>
  );
};
