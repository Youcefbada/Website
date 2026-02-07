import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { content } from '../data/content';
import dashboardImg from '../assets/dashboard-shot.png';

const DashboardShowcase = ({ lang }) => {
    const t = content[lang].dashboardShowcase;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // 3D Transforms
    const rotateX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [20, 0, 0, -10]);
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.4], [100, 0]);

    return (
        <section ref={ref} className="py-16 sm:py-24 relative" style={{ perspective: '1500px' }}>
            <div className="container max-w-[85%] mx-auto px-4 sm:px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-12 sm:mb-16 tracking-tight gradient-text"
                >
                    {t.title}
                </motion.h2>

                <motion.div
                    style={{ rotateX, scale, opacity, y }}
                    className="relative mx-auto max-w-5xl"
                >
                    {/* Massive Purple Glow */}
                    <div className="absolute inset-0 bg-primary/40 blur-[120px] rounded-full -z-10 translate-y-10 sm:translate-y-20 animate-pulse-glow"></div>

                    {/* Browser Frame */}
                    <div className="rounded-xl sm:rounded-2xl bg-bg-dark border border-white/10 shadow-2xl overflow-hidden relative group card-3d">
                        {/* Browser Controls */}
                        <div className="h-6 sm:h-10 bg-black/50 border-b border-white/5 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/50"></div>
                            <div className="ml-3 sm:ml-4 flex-1 h-3 sm:h-5 bg-white/5 rounded-full max-w-xs hidden sm:block shimmer"></div>
                        </div>

                        {/* Dashboard Image */}
                        <div className="relative aspect-video bg-black overflow-hidden">
                            <img
                                src={dashboardImg}
                                alt="DZ-Ghost Dashboard"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />

                            {/* Reflection Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>

                            {/* Scan Line Effect */}
                            <motion.div
                                initial={{ top: '-100%' }}
                                whileInView={{ top: '200%' }}
                                transition={{ duration: 3, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DashboardShowcase;
