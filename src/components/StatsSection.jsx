import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '../data/content';

const CountUp = ({ value, delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [display, setDisplay] = useState('0');

    useEffect(() => {
        if (!inView) return;
        const raw = value.replace(/[^\d.]/g, '');
        const target = parseFloat(raw);
        if (isNaN(target)) { setDisplay(value); return; }

        const prefix = value.startsWith('+') ? '+' : value.startsWith('-') ? '-' : '';
        const suffix = value.replace(/^[+-]?[\d.]+/, '');
        const isFloat = raw.includes('.');
        const duration = 1400;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let frame = 0;

        const timeout = setTimeout(() => {
            const timer = setInterval(() => {
                frame++;
                current = Math.min(current + increment, target);
                const formatted = isFloat
                    ? current.toFixed(1)
                    : Math.floor(current).toLocaleString();
                setDisplay(`${prefix}${formatted}${suffix}`);
                if (frame >= steps) {
                    clearInterval(timer);
                    setDisplay(value);
                }
            }, duration / steps);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [inView, value, delay]);

    return <span ref={ref}>{display}</span>;
};

const StatsSection = ({ lang }) => {
    const t = content[lang].stats;

    return (
        <section className="py-20 sm:py-24 bg-primary overflow-hidden">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{t.title}</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 stats-grid">
                    {t.items.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center"
                        >
                            <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight tabular-nums">
                                <CountUp value={stat.value} delay={i * 0.15} />
                            </div>
                            <div className="text-white/70 text-xs sm:text-sm font-medium leading-snug">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
