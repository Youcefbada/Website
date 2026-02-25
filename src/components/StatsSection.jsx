import React from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '../data/content';
import { useRef, useEffect, useState } from 'react';

const AnimatedNumber = ({ value, suffix = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(0);

    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = numericValue / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= numericValue) {
                    setDisplayValue(numericValue);
                    clearInterval(timer);
                } else {
                    setDisplayValue(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, numericValue]);

    const prefix = value.includes('+') && !value.startsWith('+') ? '' : value.startsWith('+') ? '+' : '';
    const displaySuffix = value.includes('+') && !value.startsWith('+') ? '+' : '';

    return (
        <span ref={ref}>
            {prefix}{displayValue}{displaySuffix}{suffix}
        </span>
    );
};

const StatsSection = ({ lang }) => {
    const t = content[lang].stats;

    return (
        <section className="py-24 relative">
            <div className="container max-w-[85%] mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">{t.title}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.items.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-[#0f1117] text-center p-8 md:p-10 rounded-3xl border border-white/10 hover:border-primary hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
                        >
                            <div className="text-5xl md:text-6xl font-bold text-white mb-4 flex items-center justify-center tracking-tight">
                                <AnimatedNumber value={stat.value} />
                            </div>
                            <div className="text-gray-300 font-semibold text-sm md:text-base uppercase tracking-widest leading-snug">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
