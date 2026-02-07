import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Palette, LucideHammer } from 'lucide-react';

const iconMap = [LucideHammer, Palette];

const ToolsSection = ({ lang }) => {
    const t = content[lang].detailedFeatures.tools;

    return (
        <section className="py-24 relative border-b border-white/5">
            <div className="container max-w-[80%] mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    {/* Header */}
                    <div className="md:w-1/3 sticky top-24">
                        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                            <Palette size={32} className="text-purple-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            {t.title}
                        </h2>
                        <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
                    </div>

                    {/* List */}
                    <div className="md:w-2/3 grid gap-8">
                        {t.items.map((item, i) => {
                            const Icon = iconMap[i] || LucideHammer;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="p-3 rounded-lg bg-bg-deep border border-white/5 text-purple-400">
                                            <Icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
