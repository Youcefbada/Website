import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { BarChart2, Target, Map, Calculator } from 'lucide-react';

const iconMap = [BarChart2, Target, Map, Calculator];

const AnalyticsSection = ({ lang }) => {
    const t = content[lang].detailedFeatures.analytics;

    return (
        <section className="py-24 relative border-b border-white/5">
            <div className="container max-w-[85%] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                    {/* Text Column (Left) */}
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                            <BarChart2 size={32} className="text-blue-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            {t.title}
                        </h2>
                        <ul className="space-y-6">
                            {t.items.map((item, i) => {
                                const Icon = iconMap[i] || BarChart2;
                                return (
                                    <li key={i} className="flex items-start gap-4">
                                        <Icon size={20} className="text-blue-400 mt-1 shrink-0" />
                                        <div>
                                            <h4 className="text-white font-bold">{item.title}</h4>
                                            <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* Image Column (Right) */}
                    <div className="aspect-video w-full rounded-2xl bg-[#14161f] border border-white/10 shadow-2xl flex items-center justify-center text-gray-500 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="bg-[#0f1117] border border-gray-800 rounded-xl w-full max-w-sm mx-auto p-5 shadow-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all z-10 relative">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="bg-blue-500/20 p-1.5 rounded-md">
                                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                                </div>
                                <span className="text-sm text-gray-300 font-semibold">Campagne: Chaussures_Hiver</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-4">
                                <div className="bg-gray-900 rounded p-2 text-center border border-gray-800">
                                    <p className="text-[10px] text-gray-500 m-0">CPA</p>
                                    <p className="text-xs text-white font-bold m-0">1.2$</p>
                                </div>
                                <div className="bg-gray-900 rounded p-2 text-center border border-gray-800">
                                    <p className="text-[10px] text-gray-500 m-0">ROAS</p>
                                    <p className="text-xs text-green-400 font-bold m-0">4.8x</p>
                                </div>
                                <div className="bg-gray-900 rounded p-2 text-center border border-gray-800">
                                    <p className="text-[10px] text-gray-500 m-0">Commandes</p>
                                    <p className="text-xs text-white font-bold m-0">142</p>
                                </div>
                            </div>
                            <div className="border-t border-gray-800 pt-3 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                                    </span>
                                    <span className="text-xs text-gray-400">IA Verdict:</span>
                                </div>
                                <div className="bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-black tracking-widest shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                                    SCALE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnalyticsSection;
