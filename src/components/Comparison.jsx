import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { XCircle, CheckCircle, Smartphone, Globe, ShieldOff, ShieldCheck } from 'lucide-react';

const Comparison = ({ lang }) => {
    const t = content[lang].comparison;

    return (
        <section className="relative bg-bg-dark border-y border-white/5">
            <div className="grid md:grid-cols-2 min-h-[80vh]">

                {/* Old Way (Left) */}
                <div className="bg-gray-900/50 p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-b md:border-b-0 md:border-r border-white/5 group">
                    <div className="absolute inset-0 bg-red-900/5 opacity-50"></div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-8 border border-red-500/20">
                            <ShieldOff className="text-red-500 w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-300 mb-8">{t.old.title}</h3>
                        <ul className="space-y-6">
                            {t.old.items.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 text-gray-500 group-hover:text-red-400 transition-colors"
                                >
                                    <XCircle size={20} />
                                    <span className="text-lg">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* New Way (Right) */}
                <div className="bg-bg-deep p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden border-t md:border-t-0 md:border-l border-primary/20 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-10">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(176,66,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(176,66,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/30 shadow-[0_0_20px_rgba(176,66,255,0.2)]">
                            <ShieldCheck className="text-primary w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-8 text-glow">{t.new.title}</h3>
                        <ul className="space-y-6">
                            {t.new.items.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.2 }}
                                    className="flex items-center gap-4 text-white"
                                >
                                    <CheckCircle size={20} className="text-primary drop-shadow-[0_0_10px_rgba(176,66,255,0.5)]" />
                                    <span className="text-lg font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Decorative Center Line */}
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-bg-dark rounded-full border border-primary/50 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(176,66,255,0.4)]">
                        <span className="font-bold text-primary text-xl">VS</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Comparison;
