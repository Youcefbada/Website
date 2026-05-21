import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const SocialProof = ({ lang }) => {
    const t = content[lang].socialProofStrip;

    return (
        <section className="py-10 sm:py-12 bg-bg-gray border-y border-border">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-0">
                    <span className="text-sm font-medium text-text-muted sm:border-r sm:border-border sm:pr-8 sm:mr-8 shrink-0">
                        {t.label}
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 w-full">
                        {t.stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center sm:px-6 sm:border-r sm:border-border last:border-0 flex flex-col items-center"
                            >
                                <div className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight">{stat.value}</div>
                                <div className="text-xs text-text-muted mt-1 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
