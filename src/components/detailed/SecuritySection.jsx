import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { ShieldCheck, Lock, Smartphone, Activity } from 'lucide-react';

const iconMap = [ShieldCheck, Lock, Activity, Smartphone];

const SecuritySection = ({ lang }) => {
    const t = content[lang].detailedFeatures.security;

    return (
        <section className="py-24 relative border-b border-white/5">
            <div className="container max-w-[85%] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                    {/* Text Column (Left) */}
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20">
                            <ShieldCheck size={32} className="text-green-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            {t.title}
                        </h2>
                        <ul className="space-y-6">
                            {t.items.map((item, i) => {
                                const Icon = iconMap[i] || ShieldCheck;
                                return (
                                    <li key={i} className="flex items-start gap-4">
                                        <Icon size={20} className="text-green-400 mt-1 shrink-0" />
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative p-1 w-full max-w-sm mx-auto z-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-2xl animate-[spin_4s_linear_infinite] opacity-50 blur-sm"></div>

                            <div className="relative bg-[#0a0c10] rounded-xl p-5 border border-white/5">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                        <span className="text-white font-bold text-sm">Ghost Server-Side</span>
                                    </div>
                                    <span className="bg-purple-500/20 text-purple-300 text-[10px] px-2 py-1 rounded-full border border-purple-500/30">Match 9.8/10</span>
                                </div>
                                <div className="bg-black border border-gray-800 rounded-lg p-3 font-mono text-[10px] space-y-2 h-32 overflow-hidden relative text-left">
                                    <p className="text-green-400">&gt; Event: Purchase (API) Sent successfully.</p>
                                    <p className="text-gray-500">&gt; Hashing user data (SHA-256)... done.</p>
                                    <p className="text-red-400 group-hover:translate-x-1 transition-transform">&gt; [BLOCKED] Suspicious User-Agent detected.</p>
                                    <p className="text-gray-500">&gt; IP 104.28.1xx.xx dropped.</p>
                                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
