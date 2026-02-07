import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import {
    Calculator,
    Target,
    Truck,
    Percent,
    Database,
    Zap,
    Map
} from 'lucide-react';

const iconMap = {
    finance: Calculator,
    metaAds: Target,
    shipping: Truck,
    offers: Percent,
    orders: Database,
    product: Zap,
    reporting: Map
};

const colorMap = {
    finance: 'text-green-500',
    metaAds: 'text-primary',
    shipping: 'text-orange-500',
    offers: 'text-red-500',
    orders: 'text-blue-500',
    product: 'text-yellow-500',
    reporting: 'text-indigo-500'
};

const FeaturesGrid = ({ lang }) => {
    const t = content[lang].modules;
    const features = Object.keys(t);

    return (
        <section className="py-24 relative">
            <div className="container max-w-[85%] mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">The Heavy Artillery</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[200px]">
                    {features.map((key, i) => {
                        const feature = t[key];
                        const Icon = iconMap[key];
                        const color = colorMap[key];

                        // Layout logic for Bento Box
                        const isLarge = i === 0 || i === 3; // Finance and Offers span 2 cols? Or just random
                        const colSpan = i === 0 || i === 6 ? 'md:col-span-2' : 'md:col-span-1';
                        const rowSpan = i === 1 ? 'md:row-span-2' : 'md:row-span-1';

                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`glass-card p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden flex flex-col justify-between ${colSpan} ${rowSpan}`}
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Icon size={100} />
                                </div>

                                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${color}`}>
                                    <Icon size={24} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
