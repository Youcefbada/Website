import React from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { Check, Sparkles, Crown } from 'lucide-react';

const PricingCard = ({ plan, highlight, special, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50, rotateY: index === 1 ? 0 : index === 0 ? 10 : -10 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.6 }}
        whileHover={{ y: -15, scale: 1.02 }}
        className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border flex flex-col h-full transition-all duration-500 card-3d ${highlight
                ? 'bg-primary/10 border-primary shadow-[0_0_60px_rgba(176,66,255,0.3)] sm:scale-105 z-10'
                : special
                    ? 'bg-yellow-500/5 border-yellow-500/30'
                    : 'glass-card border-white/10'
            }`}
    >
        {highlight && (
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 sm:px-6 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_#B042FF] flex items-center gap-2">
                <Crown size={14} />
                {plan.tag}
            </div>
        )}

        {special && (
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 sm:px-6 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={14} />
                Lifetime
            </div>
        )}

        <h3 className={`text-lg sm:text-xl font-bold mb-2 ${highlight ? 'text-primary' : special ? 'text-yellow-500' : 'text-white'}`}>
            {plan.name}
        </h3>

        <div className="mb-6 sm:mb-8">
            <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
            <span className="text-gray-500 text-xs sm:text-sm ml-2">{plan.period}</span>
        </div>

        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
            {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                    <Check size={14} className={`flex-shrink-0 ${highlight ? 'text-primary' : special ? 'text-yellow-500' : 'text-gray-500'} sm:w-4 sm:h-4`} />
                    {feature}
                </li>
            ))}
        </ul>

        <button className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all ${highlight
                ? 'bg-primary text-white hover:bg-emerald-500 hover:shadow-[0_0_30px_#10b981]'
                : special
                    ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 hover:bg-yellow-500 hover:text-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
            }`}>
            {plan.cta}
        </button>
    </motion.div>
);

const PricingSection = ({ lang }) => {
    const t = content[lang].pricing;

    return (
        <section className="py-16 sm:py-24 relative overflow-hidden">
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

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
                    {t.plans.map((plan, i) => (
                        <PricingCard key={i} plan={plan} highlight={plan.highlight} special={plan.special} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
