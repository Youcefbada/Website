import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Database, Truck, Globe, FileText, Layers } from 'lucide-react';

const iconMap = [Database, Truck, Globe, FileText, Layers];

const LogisticsSection = ({ lang }) => {
    const t = content[lang].detailedFeatures.logistics;

    return (
        <section className="py-24 relative border-b border-white/5 bg-white/[0.02]">
            <div className="container max-w-[80%] mx-auto px-6">
                <div className="flex flex-col md:flex-row-reverse gap-16 items-start">
                    {/* Header */}
                    <div className="md:w-1/3 sticky top-24">
                        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                            <Truck size={32} className="text-orange-500" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            {t.title}
                        </h2>
                        <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
                    </div>

                    {/* List */}
                    <div className="md:w-2/3 grid gap-8">
                        {t.items.map((item, i) => {
                            const Icon = iconMap[i] || Truck;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-bg-dark border border-white/10 p-8 rounded-2xl hover:border-orange-500/30 transition-colors group"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="p-3 rounded-lg bg-bg-deep border border-white/5 text-orange-400 group-hover:shadow-[0_0_15px_orange] transition-all">
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

export default LogisticsSection;
