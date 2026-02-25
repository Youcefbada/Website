import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Palette, LucideHammer } from 'lucide-react';

const iconMap = [LucideHammer, Palette];

const ToolsSection = ({ lang }) => {
    const t = content[lang].detailedFeatures.tools;

    return (
        <section className="py-24 relative border-b border-white/5">
            <div className="container max-w-[85%] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                    {/* Text Column (Left) */}
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                            <Palette size={32} className="text-purple-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            {t.title}
                        </h2>
                        <ul className="space-y-6">
                            {t.items.map((item, i) => {
                                const Icon = iconMap[i] || LucideHammer;
                                return (
                                    <li key={i} className="flex items-start gap-4">
                                        <Icon size={20} className="text-purple-400 mt-1 shrink-0" />
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
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="font-medium">UI Mockup: {t.title}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
