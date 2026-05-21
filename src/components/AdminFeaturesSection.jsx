import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { PhoneCall, Truck, RefreshCw, ArrowRight, CheckCircle, FileSpreadsheet } from 'lucide-react';

const featureIcons = [PhoneCall, Truck, RefreshCw, CheckCircle, FileSpreadsheet];

const AdminFeaturesSection = ({ lang }) => {
    const t = content[lang].operationsSection;

    const carriers = ['Yalidine', 'ZR Express', 'Procolis', 'Ecotrack', 'Maystro', 'Guepex', '+16'];

    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Mockup side - left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border border-border rounded-2xl shadow-lg overflow-hidden order-last lg:order-first"
                    >
                        <div className="bg-bg-gray border-b border-border px-5 py-3.5 flex items-center justify-between">
                            <span className="text-sm font-semibold text-text-dark">Bureau de Confirmation</span>
                            <span className="flex items-center gap-1.5 text-xs text-green-600 font-semibold">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>Live
                            </span>
                        </div>
                        <div className="p-5 space-y-3">
                            {[
                                { id: '#ORD-4821', city: 'Alger', status: 'Confirmée', color: 'text-green-600 bg-green-50 border-green-200' },
                                { id: '#ORD-4822', city: 'Oran', status: 'En appel', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' },
                                { id: '#ORD-4823', city: 'Constantine', status: 'Nouvelle', color: 'text-blue-600 bg-blue-50 border-blue-200' },
                                { id: '#ORD-4824', city: 'Annaba', status: 'Expédiée', color: 'text-violet-600 bg-violet-50 border-violet-200' },
                            ].map((order, i) => (
                                <div key={i} className="flex items-center justify-between bg-bg-light rounded-lg px-4 py-3 border border-border">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <span className="text-sm font-mono font-medium text-text-dark">{order.id}</span>
                                    </div>
                                    <span className="text-xs text-text-muted">{order.city}</span>
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${order.color}`}>{order.status}</span>
                                </div>
                            ))}
                        </div>
                        <div className="px-5 pb-5 pt-2">
                            <div className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">Transporteurs connectés</div>
                            <div className="flex flex-wrap gap-2">
                                {carriers.map((c, i) => (
                                    <span key={i} className="text-xs font-semibold px-2.5 py-1.5 bg-primary/8 text-primary rounded-lg border border-primary/20">{c}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

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
                                const Icon = featureIcons[i] || Truck;
                                return (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center shrink-0 mt-0.5 border border-violet-100">
                                            <Icon size={18} className="text-violet-600" />
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
                </div>
            </div>
        </section>
    );
};

export default AdminFeaturesSection;
