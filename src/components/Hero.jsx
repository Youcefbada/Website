import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Zap, Shield, TrendingUp } from 'lucide-react';

const Hero = ({ lang }) => {
    const t = content[lang].hero;

    const badges = lang === 'ar'
        ? [{ icon: Shield, text: 'Server-Side CAPI' }, { icon: Zap, text: 'أداء فائق' }, { icon: TrendingUp, text: '4x ROAS' }]
        : [{ icon: Shield, text: 'Server-Side CAPI' }, { icon: Zap, text: 'Performance Maximale' }, { icon: TrendingUp, text: '4x ROAS' }];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bg-deep to-transparent"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(176,66,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(176,66,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            <div className="container max-w-[90%] mx-auto px-4 sm:px-6 text-center relative z-10 pt-20 pb-16">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8"
                >
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    {lang === 'ar' ? 'أول بكسل Server-Side للجزائر' : 'Le Premier Pixel Server-Side d\'Algérie'}
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                >
                    <span className="text-white">{t.headline.split('.')[0]}.</span>
                    <br />
                    <span className="text-primary text-glow">{t.headline.split('. ')[1]}</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10"
                >
                    {t.subheadline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16"
                >
                    <a
                        href="#pricing"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_40px_#B042FF] transition-all text-base sm:text-lg"
                    >
                        {t.cta}
                    </a>
                    <a
                        href="#features"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-base sm:text-lg"
                    >
                        {lang === 'ar' ? 'اكتشف المميزات' : 'Découvrir les fonctionnalités'}
                    </a>
                </motion.div>

                {/* Feature Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 sm:gap-6"
                >
                    {badges.map((badge, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                            <badge.icon size={16} className="text-primary" />
                            {badge.text}
                        </div>
                    ))}
                </motion.div>

                {/* Floating Notifications */}
                <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    {t.notifications.map((note, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + (i * 0.2) }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm"
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-400 font-mono">{note}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-1.5"
                >
                    <div className="w-1.5 h-2.5 bg-primary rounded-full"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
