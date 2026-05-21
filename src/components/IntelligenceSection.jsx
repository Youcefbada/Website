import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Server, Shield, BarChart2, Brain, Map, ArrowRight } from 'lucide-react';

const featureIcons = [Server, Shield, BarChart2, Brain, Map];

const IntelligenceSection = ({ lang }) => {
    const t = content[lang].intelligenceSection;

    return (
        <section className="py-20 sm:py-28 bg-bg-light">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text side */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3"
                        >
                            {t.eyebrow}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-4 tracking-tight leading-tight"
                        >
                            {t.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="text-text-body mb-8 leading-relaxed"
                        >
                            {t.subtitle}
                        </motion.p>
                        <ul className="space-y-4">
                            {t.features.map((feature, i) => {
                                const Icon = featureIcons[i] || Server;
                                return (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-0.5 border border-purple-100">
                                            <Icon size={18} className="text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-text-dark text-sm sm:text-base">{feature.title}</h4>
                                            <p className="text-text-muted text-sm mt-0.5 leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </motion.li>
                                );
                            })}
                        </ul>
                        <motion.a
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            href="#pricing"
                            className="inline-flex items-center gap-2 mt-8 text-primary font-semibold text-sm hover:gap-3 transition-all"
                        >
                            {lang === 'ar' ? 'ابدأ الآن' : 'En savoir plus'}
                            <ArrowRight size={16} />
                        </motion.a>
                    </div>

                    {/* Mockup side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border border-border rounded-2xl shadow-lg overflow-hidden"
                    >
                        <div className="bg-bg-gray border-b border-border px-5 py-3.5">
                            <span className="text-sm font-semibold text-text-dark">Auditeur de Campagne — IA</span>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-bg-light rounded-xl border border-border">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0">
                                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                </div>
                                <span className="text-sm font-medium text-text-dark">Chaussures_Hiver_FR</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { label: 'CPA', val: '1.2$', color: 'text-text-dark' },
                                    { label: 'ROAS', val: '4.8x', color: 'text-green-600' },
                                    { label: 'Commandes', val: '142', color: 'text-text-dark' },
                                ].map((m, i) => (
                                    <div key={i} className="bg-bg-light rounded-xl p-3 border border-border text-center">
                                        <p className="text-xs text-text-muted mb-1">{m.label}</p>
                                        <p className={`text-base font-bold ${m.color}`}>{m.val}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-border pt-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                    </span>
                                    <span className="text-xs text-text-muted font-medium">{lang === 'ar' ? 'حكم الذكاء الاصطناعي:' : 'IA Verdict:'}</span>
                                </div>
                                <span className="text-xs font-black px-3 py-1.5 rounded-full bg-green-50 text-green-600 border border-green-200 tracking-widest">SCALE ↑</span>
                            </div>

                            <div className="border-t border-border pt-3 space-y-2">
                                <p className="text-xs font-semibold text-text-muted uppercase tracking-widest">Platforms connectées</p>
                                <div className="flex items-center gap-2">
                                    {['Facebook', 'TikTok', 'Snapchat'].map((p, i) => (
                                        <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-primary/8 text-primary rounded-lg border border-primary/20">{p}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IntelligenceSection;
