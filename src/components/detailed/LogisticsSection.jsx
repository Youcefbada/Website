import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Database, Truck, Globe, FileText, Layers } from 'lucide-react';

const iconMap = [Database, Truck, Globe, FileText, Layers];

const LogisticsSection = ({ lang }) => {
    const t = content[lang].detailedFeatures.logistics;

    return (
        <section className="py-24 relative border-b border-white/5 bg-white/[0.02]">
            <div className="container max-w-[85%] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

                    {/* Image Column (Left) */}
                    <div className="aspect-video w-full rounded-2xl bg-[#14161f] border border-white/10 shadow-2xl flex items-center justify-center text-gray-500 relative overflow-hidden group order-last md:order-first">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="w-full max-w-md mx-auto flex flex-col sm:flex-row items-center justify-between bg-[#14161f] p-6 rounded-2xl border border-gray-800 z-10 relative scale-90 sm:scale-100">
                            <div className="flex flex-col items-center gap-2 mb-4 sm:mb-0">
                                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </div>
                                <span className="text-xs text-gray-400 font-medium">New Order</span>
                            </div>

                            <div className="flex-1 w-full mx-4 flex items-center justify-center relative hidden sm:flex">
                                <div className="w-full h-[2px] bg-gray-800 rounded overflow-hidden">
                                    <div className="w-1/2 h-full bg-purple-500 animate-[translateX_1.5s_ease-in-out_infinite]"></div>
                                </div>
                                <style>{`@keyframes translateX { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }`}</style>
                            </div>

                            <div className="flex flex-col gap-3 w-full sm:w-auto">
                                <div className="flex items-center gap-3 bg-[#0a0c10] p-2 rounded-lg border border-gray-800 group-hover:border-orange-500/50 transition">
                                    <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center shrink-0">
                                        <span className="text-orange-500 font-bold text-xs">YAL</span>
                                    </div>
                                    <div className="text-left w-full">
                                        <p className="text-[10px] text-gray-500 m-0 leading-tight">Expédition</p>
                                        <p className="text-xs text-white font-medium flex items-center gap-1 m-0 leading-tight">Synced <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 bg-[#0a0c10] p-2 rounded-lg border border-gray-800 group-hover:border-green-500/50 transition">
                                    <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center shrink-0">
                                        <span className="text-green-500 font-bold text-xs">G.S</span>
                                    </div>
                                    <div className="text-left w-full">
                                        <p className="text-[10px] text-gray-500 m-0 leading-tight">Call Center</p>
                                        <p className="text-xs text-white font-medium flex items-center gap-1 m-0 leading-tight">Row Added <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Text Column (Right) */}
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                            <Truck size={32} className="text-orange-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            {t.title}
                        </h2>
                        <ul className="space-y-6">
                            {t.items.map((item, i) => {
                                const Icon = iconMap[i] || Truck;
                                return (
                                    <li key={i} className="flex items-start gap-4">
                                        <Icon size={20} className="text-orange-400 mt-1 shrink-0" />
                                        <div>
                                            <h4 className="text-white font-bold">{item.title}</h4>
                                            <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LogisticsSection;
