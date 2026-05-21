import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ShoppingCart, PhoneCall, Truck, CheckCircle } from 'lucide-react';

const icons = [ShoppingCart, PhoneCall, Truck, CheckCircle];
const stepColors = [
    { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'text-indigo-600', num: 'bg-indigo-600' },
    { bg: 'bg-violet-50', border: 'border-violet-200', icon: 'text-violet-600', num: 'bg-violet-600' },
    { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', num: 'bg-purple-600' },
    { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', num: 'bg-green-600' },
];

const TechFlow = ({ lang }) => {
    const t = content[lang].howItWorks;

    return (
        <section className="py-20 sm:py-28 bg-white">
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
                        transition={{ delay: 0.05 }}
                        className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight"
                    >
                        {t.title}
                    </motion.h2>
                </div>

                <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* Connector line desktop */}
                    <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border z-0">
                        <div className="h-full bg-gradient-to-r from-indigo-200 via-violet-200 to-green-200"></div>
                    </div>

                    {t.steps.map((step, i) => {
                        const Icon = icons[i];
                        const c = stepColors[i];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="flex flex-col items-center text-center relative z-10"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mb-4 relative`}>
                                    <Icon size={28} className={c.icon} />
                                    <span className={`absolute -top-2 -right-2 w-6 h-6 ${c.num} text-white text-xs font-bold rounded-full flex items-center justify-center`}>{i + 1}</span>
                                </div>
                                <h3 className="font-bold text-text-dark mb-1.5">{step.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechFlow;
