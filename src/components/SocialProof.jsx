import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { TrendingUp, UserCheck, ShieldAlert } from 'lucide-react';

const SocialProof = ({ lang }) => {
    const t = content[lang].socialProof;

    return (
        <section className="py-24 bg-bg-dark relative">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        {t.title}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <UserCheck className="text-primary w-8 h-8 mb-4" />
                            <div className="text-3xl font-bold text-white mb-2">{t.stat1.split(' ')[0]}</div>
                            <div className="text-gray-400 text-sm">{t.stat1.split(' ').slice(1).join(' ')}</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <ShieldAlert className="text-red-500 w-8 h-8 mb-4" />
                            <div className="text-3xl font-bold text-white mb-2">{t.stat2.split(' ')[0]}</div>
                            <div className="text-gray-400 text-sm">{t.stat2.split(' ').slice(1).join(' ')}</div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* Fake Graph */}
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                        <div className="flex justify-between items-end h-64 gap-2">
                            {[30, 45, 35, 50, 60, 85, 95].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className={`w-full rounded-t-lg ${h > 80 ? 'bg-primary shadow-[0_0_20px_#B042FF]' : 'bg-gray-700'}`}
                                />
                            ))}
                        </div>
                        {/* Installation Point Marker */}
                        <div className="absolute top-10 right-16 flex flex-col items-center">
                            <div className="bg-white text-bg-dark text-xs font-bold px-3 py-1 rounded-full mb-2">Ghost Installed</div>
                            <div className="w-0.5 h-40 bg-white/20 border-l border-dashed border-white"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SocialProof;
