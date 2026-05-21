import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ShoppingCart, Truck, BarChart3, ArrowRight } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

const iconMap = { ShoppingCart, Truck, BarChart3 };

const colorMap = {
    indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-100', bar: 'bg-indigo-500', glow: 'rgba(99,102,241,0.12)' },
    violet: { bg: 'bg-violet-50', icon: 'text-violet-600', border: 'border-violet-100', bar: 'bg-violet-500', glow: 'rgba(139,92,246,0.12)' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-100', bar: 'bg-purple-500', glow: 'rgba(168,85,247,0.12)' },
};

const TiltCard = ({ children, className, glowColor }) => {
    const ref = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    const onMouseMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        setTilt({ x: dy * -6, y: dx * 6 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
                transformStyle: 'preserve-3d',
                perspective: 800,
                boxShadow: hovered
                    ? `0 20px 50px ${glowColor}, 0 4px 16px rgba(0,0,0,0.06)`
                    : '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const PlatformOverview = ({ lang }) => {
    const t = content[lang].platformOverview;

    return (
        <section className="py-20 sm:py-28 bg-white" id="features">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3"
                    >
                        {t.eyebrow}
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-4 tracking-tight leading-tight">
                        <AnimatedHeading text={t.title} delay={0.05} />
                    </h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-text-body text-base sm:text-lg"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                {/* Pillars grid */}
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8" style={{ perspective: '1000px' }}>
                    {t.pillars.map((pillar, i) => {
                        const Icon = iconMap[pillar.icon] || ShoppingCart;
                        const colors = colorMap[pillar.color] || colorMap.indigo;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <TiltCard
                                    glowColor={colors.glow}
                                    className="bg-white border border-border rounded-2xl p-7 sm:p-8 flex flex-col gap-5 cursor-default transition-all duration-300 h-full"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: 'spring', stiffness: 400 }}
                                        className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}
                                    >
                                        <Icon size={24} className={colors.icon} />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-text-dark mb-2">{pillar.title}</h3>
                                        <p className="text-text-body text-sm leading-relaxed">{pillar.desc}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-2">
                                        <div className={`h-1 w-12 rounded-full ${colors.bar}`}></div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -5 }}
                                            whileHover={{ opacity: 1, x: 0 }}
                                            className={`${colors.icon} opacity-0`}
                                        >
                                            <ArrowRight size={16} />
                                        </motion.div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PlatformOverview;
