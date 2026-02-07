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
        <section className="py-20 relative">
            <div className="container max-w-[80%] mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">{t.title}</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {t.items.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="text-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                                <AnimatedNumber value={stat.value} />
                            </div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
