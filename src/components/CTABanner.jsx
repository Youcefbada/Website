import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const CTABanner = ({ lang }) => {
    const t = content[lang].ctaBanner;

    const trustItems = lang === 'ar'
        ? ["تثبيت في 5 دقائق", "دعم واتساب 24/7", "ضمان استرداد المال"]
        : ["Installation en 5 minutes", "Support WhatsApp 24/7", "Garantie Satisfait ou Remboursé"];

    return (
        <section className="py-16 sm:py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/30 rounded-full blur-[150px] animate-pulse-glow"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(176,66,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(176,66,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]"></div>

            <div className="container max-w-[85%] mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 gradient-text">{t.title}</h2>
                    <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">{t.subtitle}</p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                        <motion.a
                            href="#pricing"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:shadow-[0_0_40px_#B042FF] transition-all text-base sm:text-lg animate-pulse-glow"
                        >
                            {t.cta}
                            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                        </motion.a>
                        <motion.a
                            href="#demo"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-base sm:text-lg"
                        >
                            <Play size={18} className="fill-current sm:w-5 sm:h-5" />
                            {t.secondary}
                        </motion.a>
                    </div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-gray-400 text-xs sm:text-sm"
                    >
                        {trustItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle size={14} className="text-green-500 sm:w-4 sm:h-4" />
                                {item}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTABanner;
