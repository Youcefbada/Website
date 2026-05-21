import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTABanner = ({ lang }) => {
    const t = content[lang].ctaBanner;

    return (
        <section className="py-20 sm:py-28 bg-gradient-to-br from-indigo-600 via-primary to-violet-700 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
            </div>

            <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-5 tracking-tight leading-tight">
                        {t.title}
                    </h2>
                    <p className="text-base sm:text-lg text-white/75 mb-8 sm:mb-10 max-w-xl mx-auto">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <a
                            href="#pricing"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all text-base sm:text-base"
                        >
                            {t.cta}
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="#features"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/15 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-base"
                        >
                            {t.secondary}
                        </a>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-8"
                    >
                        {t.trustItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
                                <CheckCircle size={14} className="text-green-300" />
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
