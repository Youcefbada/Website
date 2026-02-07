import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Flag, Key, Brain, Headphones, RefreshCw, Users } from 'lucide-react';

const iconMap = {
    flag: Flag,
    key: Key,
    brain: Brain,
    headphones: Headphones,
    refresh: RefreshCw,
    users: Users
};

const WhyUsSection = ({ lang }) => {
    const t = content[lang].whyUs;

    return (
        <section className="py-16 sm:py-24 bg-gradient-to-b from-bg-dark to-bg-deep relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary rounded-full blur-[100px] decorative-mobile-hide"></div>
                <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500 rounded-full blur-[120px] decorative-mobile-hide"></div>
            </div>

            <div className="container max-w-[85%] mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-400"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {t.items.map((item, i) => {
                        const Icon = iconMap[item.icon] || Flag;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group card-3d"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_#B042FF40] transition-all">
                                    <Icon size={24} className="text-primary sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
