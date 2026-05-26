import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { 
  Calendar, 
  ChevronRight, 
  Share2, 
  Tag, 
  Search, 
  Download, 
  ExternalLink,
  Bell,
  Clock,
  Volume2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageLayout } from '../components/PageLayout';
import { cn } from '../lib/utils';

export const NewsAndEvents = () => {
  const { notices } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 1. Extract all available categories dynamically with capitalizations
  const categories = useMemo(() => {
    const uniqueCats = new Set<string>();
    notices.forEach(n => {
      if (n.category) {
        uniqueCats.add(n.category.trim());
      }
    });
    return ['All', ...Array.from(uniqueCats)];
  }, [notices]);

  // 2. Count notices in each category for badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: notices.length };
    notices.forEach(n => {
      const cat = n.category?.trim() || 'General';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [notices]);

  // 3. Filter notices based on selected category and live search keywords
  const filteredNotices = useMemo(() => {
    return notices.filter(notice => {
      const matchesCategory = selectedCategory === 'All' || notice.category?.trim() === selectedCategory;
      const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (notice.category || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [notices, selectedCategory, searchQuery]);

  // HSL category theme map to render consistent tag aesthetics
  const getCategoryColor = (category?: string) => {
    const cat = (category || 'General').toLowerCase().trim();
    if (cat.includes('admission')) return 'bg-cyan-50 text-cyan-600 border-cyan-100 hover:bg-cyan-100';
    if (cat.includes('event')) return 'bg-indigo-50 text-indigo-600 border-indigo-100 hover:bg-indigo-100';
    if (cat.includes('exam') || cat.includes('result')) return 'bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-100';
    if (cat.includes('holiday') || cat.includes('camp')) return 'bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-100';
    return 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100';
  };

  const getNoticeIcon = (category?: string) => {
    const cat = (category || 'General').toLowerCase().trim();
    if (cat.includes('admission')) return Bell;
    if (cat.includes('exam') || cat.includes('result')) return Clock;
    return Volume2;
  };

  const handleShare = (title: string, url?: string) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: url ? `${window.location.origin}${url}` : window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url ? `${window.location.origin}${url}` : window.location.href);
      alert('Announcement link copied to clipboard!');
    }
  };

  return (
    <PageLayout title="Notice Board &amp; Announcements">
      <SEO 
        title="Notice Board &amp; Academic Announcements | BEC Bhubaneswar"
        description="Stay updated with all official notices, academic alerts, holiday declarations, examination timetables, and admissions guidelines at Bhubaneswar Engineering College."
        keywords={[
          "BEC Bhubaneswar official notices",
          "Bhubaneswar Engineering College notice board",
          "exam dates BEC Bhubaneswar",
          "admissions notifications 2026",
          "general holiday notifications BEC"
        ]}
      />

      <div className="flex flex-col gap-12 font-inter mt-4">
        
        {/* Modern Live Search & Filter Bar */}
        <section className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-center z-10">
          {/* Search Box */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search announcements by keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all text-slate-700 placeholder-slate-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chip Selector */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end overflow-x-auto pb-1 md:pb-0">
            {categories.map(cat => {
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-sm border",
                    selectedCategory === cat
                      ? "bg-primary text-white border-primary shadow-primary/10"
                      : "bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100 hover:text-primary"
                  )}
                >
                  {cat}
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-[8px] font-black",
                    selectedCategory === cat ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Notices Archive Grid */}
        <section className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice, idx) => {
                  const IconComponent = getNoticeIcon(notice.category);
                  const isPdf = notice.url?.toLowerCase().endsWith('.pdf');
                  
                  return (
                    <motion.div
                      key={notice.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(idx * 0.05, 0.3) }}
                      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
                    >
                      <div>
                        {/* Header Banner */}
                        <div className="relative h-48 overflow-hidden bg-slate-50 shrink-0">
                          {notice.type === 'image' || notice.image ? (
                            <img 
                              src={notice.image || notice.url || 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg'} 
                              alt={notice.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629464/becweb/campus_bg.jpg';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8 text-slate-300">
                              <IconComponent className="w-16 h-16 opacity-30 stroke-[1.2]" />
                            </div>
                          )}
                          
                          {/* Floating Category Tag */}
                          <div className="absolute top-4 left-4">
                            <span className={cn("px-4 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest border shadow-sm transition-all", getCategoryColor(notice.category))}>
                              {notice.category || "Notice"}
                            </span>
                          </div>

                          {/* Float New Alert indicator */}
                          {notice.isNew && (
                            <div className="absolute top-4 right-4">
                              <span className="bg-[#FFBD00] text-black text-[8px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest shadow-md animate-pulse">
                                New Alert
                              </span>
                            </div>
                          )}

                          {/* Hover Share Actions overlay */}
                          <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button 
                              onClick={() => handleShare(notice.title, notice.url)}
                              className="p-3.5 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-all shadow-xl active:scale-90"
                              title="Share Notice Link"
                            >
                              <Share2 className="w-4.5 h-4.5" />
                            </button>
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="p-8">
                          <div className="flex items-center gap-2 mb-3 text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-slate-300" />
                            <span className="text-[9px] font-black uppercase tracking-widest">{notice.date}</span>
                          </div>
                          
                          <h4 className="text-base font-black text-navy-950 leading-snug tracking-tighter uppercase mb-4 min-h-[3rem] group-hover:text-primary transition-colors line-clamp-3">
                            {notice.title}
                          </h4>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="p-8 pt-0 border-t border-slate-50 flex items-center justify-between">
                        {notice.url ? (
                          isPdf ? (
                            <a 
                              href={notice.url} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-800 transition-colors"
                            >
                              <Download className="w-3.5 h-3.5" /> Download attachment
                            </a>
                          ) : (
                            <Link 
                              to={notice.url} 
                              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-accent transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" /> Open Resource <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                          )
                        ) : (
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 italic">BEC Official Announcement</span>
                        )}
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-full py-24 text-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200 max-w-md mx-auto">
                  <Tag className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                  <h4 className="text-lg font-black text-navy-950 uppercase tracking-tighter mb-1">No announcements found</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Try clearing keywords or select another filter tab</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>

      </div>
    </PageLayout>
  );
};
