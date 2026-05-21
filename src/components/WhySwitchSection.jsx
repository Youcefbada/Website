import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { X, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';

const WhySwitchSection = ({ lang }) => {
    const t = content[lang].whySwitch;

    return (
        <section className="py-20 sm:py-28 bg-slate-950 overflow-hidden relative">
            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
            />

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mb-14 sm:mb-16"
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
                        {t.eyebrow}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-[1.1] tracking-tight">
                        {t.headline}
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Comparison grid */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-10">

                    {/* Without column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="rounded-2xl border border-red-900/40 bg-red-950/20 p-6 sm:p-8"
                    >
                        <div className="flex items-center gap-2.5 mb-6">
                            <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                                <X size={12} className="text-red-400" strokeWidth={2.5} />
                            </div>
                            <span className="text-sm font-bold text-red-400 uppercase tracking-wide">{t.without.label}</span>
                        </div>

                        <ul className="space-y-5">
                            {t.without.items.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 + i * 0.07 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-semibold text-slate-300 leading-snug mb-0.5">{item.pain}</p>
                                        <p className="text-xs text-red-400/80 font-medium">{item.impact}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* With column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="rounded-2xl border border-indigo-500/30 bg-indigo-950/30 p-6 sm:p-8"
                    >
                        <div className="flex items-center gap-2.5 mb-6">
                            <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 size={13} className="text-indigo-400" strokeWidth={2.5} />
                            </div>
                            <span className="text-sm font-bold text-indigo-400 uppercase tracking-wide">{t.with.label}</span>
                        </div>

                        <ul className="space-y-5">
                            {t.with.items.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25 + i * 0.07 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/60 mt-2 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-semibold text-slate-200 leading-snug mb-0.5">{item.fix}</p>
                                        <p className="text-xs text-indigo-300/80 font-medium">{item.result}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Proof + CTA bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="rounded-2xl bg-gradient-to-r from-indigo-600/20 to-violet-600/20 border border-indigo-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between"
                >
                    <div className="flex items-start sm:items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                            <TrendingUp size={20} className="text-indigo-400" />
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-slate-200 leading-snug max-w-xl">
                            {t.proof}
                        </p>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0 w-full sm:w-auto">
                        <a
                            href="#pricing"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors text-sm whitespace-nowrap"
                        >
                            {t.cta} <ArrowRight size={15} />
                        </a>
                        <span className="text-xs text-slate-500">{t.ctaNote}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhySwitchSection;
