import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap } from 'lucide-react';

export const ResultPortal = () => {
    return (
        <section className="py-16 bg-slate-50 relative overflow-hidden font-inter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row group"
                >
                    {/* Left Side: Graphic / Icon */}
                    <div className="bg-gradient-to-br from-primary to-navy-900 p-10 md:w-2/5 flex flex-col items-center justify-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:bg-white/10 transition-colors" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full translate-y-8 -translate-x-8 blur-xl" />

                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5 border border-white/20 shadow-lg relative z-10"
                        >
                            <GraduationCap className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-black text-center tracking-wide uppercase relative z-10 drop-shadow-md">
                            Examinations
                        </h3>
                        <p className="text-white/80 text-sm mt-2 text-center font-medium opacity-90 relative z-10">
                            Official BPUT Portal
                        </p>
                    </div>

                    {/* Right Side: Content & Action */}
                    <div className="p-10 md:w-3/5 flex flex-col justify-center bg-white relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -translate-y-32 translate-x-32 blur-3xl opacity-50 pointer-events-none" />

                        <div className="inline-flex items-center gap-2 text-secondary font-bold text-xs tracking-widest uppercase mb-3">
                            <span className="w-8 h-px bg-secondary"></span>
                            Academic Records
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-4 tracking-tight leading-tight">
                            Check BPUT Result
                        </h2>

                        <p className="text-gray-500 mb-8 leading-relaxed font-medium">
                            Easily evaluate your academic performance. Access your latest semester grades and comprehensive scorecards directly through the official Biju Patnaik University of Technology portal.
                        </p>

                        <div className="mt-auto">
                            <a
                                href="https://results.bput.ac.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-navy-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group/btn"
                            >
                                View Result
                                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
