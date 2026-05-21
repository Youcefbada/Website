import React from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { Check, Infinity } from 'lucide-react';

const PricingCard = ({ plan, highlight, special, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 }}
        className={`relative p-7 sm:p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 ${
            highlight
                ? 'border-primary bg-primary shadow-lg shadow-primary/20 scale-[1.02]'
                : 'border-border bg-white hover:border-primary/40 hover:shadow-md clean-card'
        }`}
    >
        {highlight && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-primary px-5 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm border border-primary/20">
                {plan.tag}
            </div>
        )}

        <div className="mb-1">
            <h3 className={`text-lg font-bold mb-1 ${highlight ? 'text-white' : 'text-text-dark'}`}>{plan.name}</h3>
            {plan.desc && <p className={`text-xs ${highlight ? 'text-white/70' : 'text-text-muted'}`}>{plan.desc}</p>}
        </div>

        <div className="mt-5 mb-6 flex items-end gap-1">
            <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${highlight ? 'text-white' : 'text-text-dark'}`}>{plan.price}</span>
            <span className={`text-sm mb-1.5 font-medium ${highlight ? 'text-white/70' : 'text-text-muted'}`}>{plan.period}</span>
            {special && <Infinity size={18} className="text-amber-500 ml-1 mb-1.5" />}
        </div>

        <ul className="space-y-3 mb-7 flex-grow">
            {plan.features.map((feature, i) => (
                <li key={i} className={`flex items-center gap-2.5 text-sm ${highlight ? 'text-white/90' : 'text-text-body'}`}>
                    <Check size={15} className={`flex-shrink-0 ${highlight ? 'text-white' : 'text-primary'}`} />
                    {feature}
                </li>
            ))}
        </ul>

        <button className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
            highlight
                ? 'bg-white text-primary hover:bg-white/90'
                : special
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-primary text-white hover:bg-primary-dark'
        }`}>
            {plan.cta}
        </button>
    </motion.div>
);

const PricingSection = ({ lang }) => {
    const t = content[lang].pricing;

    return (
        <section className="py-20 sm:py-28 bg-bg-light" id="pricing">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3"
                    >
                        {t.eyebrow}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-3 tracking-tight"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-text-body"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center max-w-5xl mx-auto">
                    {t.plans.map((plan, i) => (
                        <PricingCard key={i} plan={plan} highlight={plan.highlight} special={plan.special} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
