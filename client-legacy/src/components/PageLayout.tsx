import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  badge?: string;
  badgeColor?: string;
}

export const PageLayout = ({ title, subtitle, children, badge, badgeColor = 'bg-secondary/20 text-secondary border-secondary/30' }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 font-inter flex flex-col">
      <Navbar onAdminClick={() => {}} />

      {/* ─── Premium Page Hero Header ─── */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 45%, #1e3a8a 100%)' }}>

        {/* Animated grid mesh background */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-[100px] translate-y-1/3 pointer-events-none" />

        {/* Diagonal accent stripe */}
        <div
          className="absolute left-0 bottom-0 w-full h-1.5 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #f59e0b, #1e40af, #f59e0b)' }}
        />

        {/* Big watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="text-white/[0.025] font-black uppercase tracking-[0.4em] text-[clamp(3rem,12vw,10rem)] leading-none text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            BEC
          </span>
        </div>

        <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 w-full pt-14 pb-12">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-6 text-[11px] font-bold uppercase tracking-widest" aria-label="breadcrumb">
            <Link to="/" className="flex items-center gap-1 text-white/40 hover:text-secondary transition-colors">
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 text-white/20" />
            <span className="text-secondary/80">{title}</span>
          </nav>

          {/* Badge */}
          {badge && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest mb-4 ${badgeColor}`}>
              {badge}
            </span>
          )}

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[1.05] drop-shadow-lg mb-3">
            {title.split(' ').map((word, i, arr) =>
              i === arr.length - 1
                ? <span key={i} className="text-secondary"> {word}</span>
                : <span key={i}>{word} </span>
            )}
          </h1>

          {subtitle && (
            <p className="text-white/50 font-semibold text-sm md:text-base mt-2 max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* Accent line */}
          <div className="flex items-center gap-3 mt-6">
            <div className="h-1 w-12 rounded-full bg-secondary" />
            <div className="h-1 w-6 rounded-full bg-primary" />
            <div className="h-1 w-3 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 lg:px-12 py-10 md:py-14">
        {children}
      </main>

      <Footer />
    </div>
  );
};
