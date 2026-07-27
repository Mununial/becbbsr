import { useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Construction } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SEO } from '../components/SEO';

// File extensions that should be served as static assets, not React pages
const STATIC_EXTENSIONS = /\.(pdf|png|jpg|jpeg|gif|svg|webp|mp4|mp3|zip|doc|docx|xls|xlsx|ppt|pptx|txt|csv|ico|woff|woff2|ttf|eot)(\?.*)?$/i;

export const CatchAllPage = () => {
  const location = useLocation();

  useEffect(() => {
    // If the URL looks like a static file, redirect the browser to it directly
    // so Vite / the server can serve it as a static asset
    if (STATIC_EXTENSIONS.test(location.pathname)) {
      window.location.replace(location.pathname + location.search);
    }
  }, [location]);

  // If it's a static file request, show nothing while redirecting
  if (STATIC_EXTENSIONS.test(location.pathname)) {
    return null;
  }

  return (
    <PageLayout title="Page Under Construction">
      <SEO 
        title="Page Under Construction | BEC Bhubaneswar"
        description="This page is currently under development on the new Bhubaneswar Engineering College (BEC) portal. Please return to the homepage or explore academic programs."
      />
      <div className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-inner">
         <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-10 border border-primary/20 shadow-xl shadow-primary/5">
            <Construction className="w-12 h-12 text-primary animate-pulse" />
         </div>
         <h2 className="text-3xl lg:text-5xl font-black uppercase text-navy-950 tracking-tighter mb-6">
            We are <span className="text-secondary">importing</span> this page
         </h2>
         <p className="text-gray-500 font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed mb-12">
            This module's specific data is currently being migrated from the legacy website to the new React infrastructure. Check back shortly.
         </p>
         
         <Link to="/" className="bg-navy-950 font-bold text-white uppercase text-xs tracking-[0.2em] px-10 py-5 rounded-full shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.4)] transition-all">
            Return to Homepage
         </Link>
      </div>
    </PageLayout>
  );
};
