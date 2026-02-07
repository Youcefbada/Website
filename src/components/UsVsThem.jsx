import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Check, X, Crown, Building } from 'lucide-react';

const UsVsThem = ({ lang }) => {
    const t = content[lang].usVsThem;

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container max-w-[85%] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Rented Land (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 grayscale flex flex-col relative overflow-hidden group hover:grayscale-0 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Building size={120} />
                        </div>

                        <div className="mb-8">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                                <Building size={32} className="text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-300">{t.rented.title}</h3>
                            <p className="text-gray-500">{t.rented.subtitle}</p>
                        </div>

                        <ul className="space-y-4">
                            {t.rented.items.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-400">
                                    <X size={20} className="text-red-500/50" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Kingdom (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-bg-deep p-8 md:p-12 rounded-3xl border border-primary/50 relative overflow-hidden flex flex-col shadow-[0_0_50px_rgba(176,66,255,0.15)] group"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>

                        <div className="absolute top-0 right-0 p-8 opacity-20 text-primary">
                            <Crown size={120} />
                        </div>

                        <div className="relative z-10 mb-8">
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/50 shadow-[0_0_20px_#B042FF]">
                                <Crown size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">{t.kingdom.title}</h3>
                            <p className="text-primary font-mono">{t.kingdom.subtitle}</p>
                        </div>

                        <ul className="relative z-10 space-y-4">
                            {t.kingdom.items.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <div className="bg-primary/20 p-1 rounded-full">
                                        <Check size={14} className="text-primary" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UsVsThem;
