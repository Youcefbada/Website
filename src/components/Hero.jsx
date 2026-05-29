import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { content } from '../data/content';
import { CheckCircle, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';
import dashboardImg from '../assets/dashboard-shot.png';

const chartBars = [35, 52, 40, 68, 55, 82, 74, 95, 80, 100];

const AnimatedBar = ({ height, delay, highlight }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    useEffect(() => {
        if (inView) controls.start({ height: `${height}%`, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } });
    }, [inView, controls, height, delay]);
    return (
        <motion.div ref={ref} initial={{ height: '0%' }} animate={controls}
            className={`w-full rounded-t-sm ${highlight ? 'bg-primary' : 'bg-primary/20'}`} />
    );
};

const Hero = ({ lang }) => {
    const t = content[lang].hero;

    return (
        <section className="relative pt-24 sm:pt-28 pb-0 bg-white overflow-hidden">

            {/* ── Background ── */}

            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #c7d2fe 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                    opacity: 0.45,
                }}
            />

            {/* Radial mask — keeps center clean for text */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 60% at 30% 50%, transparent 40%, white 85%)',
                }}
            />

            {/* Animated aurora orbs */}
            <motion.div
                animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(165,180,252,0.45) 0%, transparent 70%)' }}
            />
            <motion.div
                animate={{ x: [0, -30, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                className="absolute -top-16 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.40) 0%, transparent 70%)' }}
            />
            <motion.div
                animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
                className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.35) 0%, transparent 70%)' }}
            />

            {/* Fade bottom edge into white (section below) */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, white)' }} />

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                    {/* ── Left column ── */}
                    <div className="max-w-xl py-8 sm:py-12 lg:py-16">
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/6 text-primary text-xs font-semibold tracking-wide mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {t.eyebrow}
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-text-dark leading-[1.1] tracking-tight mb-5"
                        >
                            {lang === 'ar' ? (
                                <>
                                    إضافة WordPress التي تضاعف مبيعات COD{' '}
                                    <span style={{
                                        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}>للجزائر</span>
                                </>
                            ) : (
                                <>
                                    Le Plugin WordPress qui double les ventes COD{' '}
                                    <span style={{
                                        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}>pour l&apos;Algérie</span>
                                </>
                            )}
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.2 }}
                            className="text-base sm:text-lg text-text-body leading-relaxed mb-8"
                        >
                            {t.subheadline}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 mb-8"
                        >
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
                            >
                                {t.cta} <ArrowRight size={16} />
                            </a>
                            <a
                                href="#features"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-border text-text-dark font-semibold rounded-lg hover:bg-bg-light transition-colors text-sm"
                            >
                                {t.ctaSecondary}
                            </a>
                        </motion.div>

                        {/* Trust strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                            className="flex flex-col gap-2.5"
                        >
                            {t.trustBadges.map((badge, i) => (
                                <div key={i} className="flex items-center gap-2 text-text-muted text-sm">
                                    <CheckCircle size={14} className="text-accent shrink-0" />
                                    {badge}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Right column — product screenshot ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="relative lg:mt-0 mt-4"
                    >
                    {/* Subtle continuous float on the whole right column */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative"
                    >
                        {/* One subtle floating badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className="absolute -left-4 sm:-left-6 top-16 z-20 hidden sm:block"
                        >
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="bg-white border border-border rounded-xl shadow-md px-4 py-3 flex items-center gap-3"
                            >
                                <div className="w-8 h-8 bg-green-50 border border-green-100 rounded-lg flex items-center justify-center">
                                    <TrendingUp size={16} className="text-green-600" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-text-muted font-medium leading-none mb-0.5">ROAS Moyen</p>
                                    <p className="text-sm font-bold text-text-dark leading-none">4x après install</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.05 }}
                            className="absolute -right-4 sm:-right-6 top-1/3 z-20 hidden sm:block"
                        >
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                                className="bg-white border border-border rounded-xl shadow-md px-4 py-3 flex items-center gap-3"
                            >
                                <div className="w-8 h-8 bg-primary/8 border border-primary/15 rounded-lg flex items-center justify-center">
                                    <ShieldCheck size={16} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-text-muted font-medium leading-none mb-0.5">Match Quality</p>
                                    <p className="text-sm font-bold text-text-dark leading-none">9/10 Score</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Browser frame */}
                        <div
                            className="rounded-xl sm:rounded-2xl border border-border overflow-hidden"
                            style={{ boxShadow: '0 24px 64px rgba(15,23,42,0.10), 0 4px 16px rgba(15,23,42,0.06)' }}
                        >
                            {/* Browser chrome */}
                            <div className="h-10 bg-bg-gray border-b border-border flex items-center px-4 gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                </div>
                                <div className="flex-1 h-6 bg-white border border-border rounded-md flex items-center justify-center">
                                    <span className="text-[11px] text-text-muted font-medium">dashboard.dz-ghost.com</span>
                                </div>
                            </div>
                            {/* Real screenshot */}
                            <img
                                src={dashboardImg}
                                alt="DZ-Ghost Dashboard"
                                className="w-full block"
                                style={{ maxHeight: '520px', objectFit: 'cover', objectPosition: 'top' }}
                            />
                        </div>

                        {/* Reflection below */}
                        <div className="h-16 mx-8 bg-slate-200/40 blur-2xl rounded-full -mt-1"></div>
                    </motion.div>{/* end float */}
                    </motion.div>{/* end outer right column */}

                </div>
            </div>
        </section>
    );
};

export default Hero;
