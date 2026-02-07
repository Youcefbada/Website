import React, { useState } from 'react';
import { content } from '../data/content';
import PricingCard from './PricingCard';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = ({ lang }) => {
    const t = content[lang].pricing;
    const [period, setPeriod] = useState('yearly'); // 'yearly' or 'lifetime'

    // Filter plans based on selection
    // Plan 0 and 1 are Yearly. Plan 2 is Lifetime.
    const visiblePlans = period === 'yearly'
        ? t.plans.slice(0, 2)
        : [t.plans[2]];

    return (
        <section className="py-24 bg-bg-deep relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(176,66,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(176,66,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">{t.title}</h2>

                    {/* Toggle */}
                    <div className="inline-flex bg-bg-dark rounded-full p-1 border border-white/10 relative">
                        <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary/20 rounded-full border border-primary/50 shadow-[0_0_15px_#B042FF]`}
                            style={{ left: period === 'yearly' ? '4px' : '50%' }}
                        />

                        <button
                            onClick={() => setPeriod('yearly')}
                            className={`px-8 py-2 rounded-full text-sm font-bold relative z-10 transition-colors w-32 ${period === 'yearly' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            {t.toggle.yearly}
                        </button>
                        <button
                            onClick={() => setPeriod('lifetime')}
                            className={`px-8 py-2 rounded-full text-sm font-bold relative z-10 transition-colors w-32 ${period === 'lifetime' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            {t.toggle.lifetime}
                        </button>
                    </div>
                </div>

                <div className={`grid gap-8 w-full max-w-5xl justify-center ${period === 'yearly' ? 'md:grid-cols-2' : 'grid-cols-1 max-w-md'}`}>
                    <AnimatePresence mode="popLayout">
                        {visiblePlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <PricingCard
                                    plan={plan}
                                    highlight={plan.highlight}
                                    special={plan.special}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
