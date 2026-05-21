import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { ShieldCheck, Lock, Phone, UserX, Eye, Code } from 'lucide-react';

const iconMap = [ShieldCheck, Lock, Phone, UserX, Eye, Code];

const SecuritySection = ({ lang }) => {
    const t = content[lang].securitySection;

    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
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
                        className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight"
                    >
                        {t.title}
                    </motion.h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {t.items.map((item, i) => {
                        const Icon = iconMap[i] || ShieldCheck;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="clean-card p-6 sm:p-7"
                            >
                                <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center mb-4">
                                    <Icon size={20} className="text-green-600" />
                                </div>
                                <h3 className="font-bold text-text-dark mb-1.5">{item.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
