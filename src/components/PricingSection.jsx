import React from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { Check, Sparkles, Crown } from 'lucide-react';

const PricingCard = ({ plan, highlight, special, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.4 }}
        className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300 hover:-translate-y-1 bg-[#0f1117] ${highlight
            ? 'border-primary shadow-[0_0_30px_rgba(176,66,255,0.2)] hover:shadow-[0_0_40px_rgba(176,66,255,0.4)] z-10 sm:scale-105 ring-1 ring-primary/50'
            : special
                ? 'border-yellow-500/30 hover:border-yellow-500'
                : 'border-white/10 hover:border-primary'
            }`}
    >
        {highlight && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_#B042FF] flex items-center gap-2">
                <Crown size={16} />
                {plan.tag}
            </div>
        )}

        <div className="flex justify-between items-start mb-2">
            <h3 className={`text-xl font-bold ${highlight ? 'text-primary' : special ? 'text-yellow-500' : 'text-white'}`}>
                {plan.name}
            </h3>
            {special && (
                <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_#eab308] flex items-center gap-1">
                    <Sparkles size={14} />
                    Lifetime
                </div>
            )}
        </div>

        <div className="mb-8">
            <span className="text-4xl font-bold text-white">{plan.price}</span>
            <span className="text-gray-400 text-sm ml-2 font-medium">{plan.period}</span>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
            {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-base">
                    <Check size={18} className={`flex-shrink-0 ${highlight ? 'text-primary' : special ? 'text-yellow-500' : 'text-primary'}`} />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>

        <button className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 ${highlight
            ? 'bg-primary text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(176,66,255,0.4)] mb-0'
            : special
                ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 hover:bg-yellow-500 hover:text-black'
                : 'bg-white/5 text-white border border-transparent hover:border-primary hover:bg-primary/10'
            }`}>
            {plan.cta}
        </button>
    </motion.div>
);

const PricingSection = ({ lang }) => {
    const t = content[lang].pricing;

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/20 rounded-full blur-[150px] decorative-mobile-hide"></div>

            <div className="container max-w-[85%] mx-auto px-4 sm:px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-20 text-white"
                >
                    {t.title}
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
                    {t.plans.map((plan, i) => (
                        <PricingCard key={i} plan={plan} highlight={plan.highlight} special={plan.special} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
