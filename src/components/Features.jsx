import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Zap, Activity, MessageCircle, Map } from 'lucide-react';

const iconMap = {
    onePage: Zap,
    warRoom: Activity,
    hybrid: MessageCircle,
    wilayas: Map,
};

const Features = ({ lang }) => {
    const t = content[lang].features;
    const featuresList = Object.keys(t);

    return (
        <section className="py-24 bg-bg-dark relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                        THE ARSENAL
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {featuresList.map((key, index) => {
                        const feature = t[key];
                        const Icon = iconMap[key] || Zap;

                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="group glass-card p-8 rounded-2xl hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <Icon size={100} />
                                </div>

                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:shadow-[0_0_20px_rgba(176,66,255,0.3)] transition-all duration-300 border border-primary/20">
                                    <Icon size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors text-glow">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
