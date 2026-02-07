import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ShoppingCart, Lock, Ghost, Server } from 'lucide-react';

const icons = [ShoppingCart, Lock, Ghost, Server];

const TechFlow = ({ lang }) => {
    const t = content[lang].techFlow;

    return (
        <section className="py-24 bg-bg-deep relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(176,66,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(176,66,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container max-w-[85%] mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                        {t.title}
                    </span>
                </h2>

                <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[40px] left-0 w-full h-1 bg-white/10 overflow-hidden">
                        <motion.div
                            initial={{ x: '-100%' }}
                            whileInView={{ x: '100%' }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                        ></motion.div>
                    </div>

                    {t.steps.map((step, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center max-w-[200px]"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-bg-dark border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(176,66,255,0.2)] group hover:scale-110 transition-transform duration-300">
                                    <Icon size={32} className="text-white group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-xs text-gray-400">{step.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechFlow;
