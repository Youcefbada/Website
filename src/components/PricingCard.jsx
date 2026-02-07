import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ plan, highlight, special }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`relative p-8 rounded-2xl border ${highlight
                    ? 'bg-primary/5 border-primary shadow-[0_0_50px_rgba(176,66,255,0.2)]'
                    : special
                        ? 'bg-yellow-500/5 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]'
                        : 'glass-card border-white/10'
                } flex flex-col`}
        >
            {highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_#B042FF]">
                    {plan.tag}
                </div>
            )}

            {special && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_gold]">
                    Limited Edition
                </div>
            )}

            <h3 className={`text-xl font-bold mb-4 ${highlight ? 'text-primary' : special ? 'text-yellow-500' : 'text-white'}`}>
                {plan.name}
            </h3>

            <div className="flex items-end gap-2 mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                        <div className={`p-1 rounded-full ${highlight ? 'bg-primary/20 text-primary' : special ? 'bg-yellow-500/20 text-yellow-500' : 'bg-white/10 text-white'}`}>
                            <Check size={12} />
                        </div>
                        {feature}
                    </li>
                ))}
            </ul>

            <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${highlight
                    ? 'bg-primary text-white hover:shadow-[0_0_30px_#B042FF] hover:scale-105'
                    : special
                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-400 text-black hover:shadow-[0_0_30px_gold] hover:scale-105'
                        : 'border border-white/20 hover:bg-white/10 hover:border-white/50'
                }`}>
                {plan.cta}
            </button>
        </motion.div>
    );
};

export default PricingCard;
