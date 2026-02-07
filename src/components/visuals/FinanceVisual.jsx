import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

export const FinanceVisual = ({ lang, t }) => {
    return (
        <div className="bg-bg-dark p-8 rounded-xl border border-white/10 relative overflow-hidden aspect-video flex items-center justify-center">
            {/* Holographic Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            <div className="relative z-10 w-full max-w-sm">
                {/* Floating Calculator Mockup */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-black/80 backdrop-blur-md border border-green-500/30 rounded-lg p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                >
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-green-400 font-mono text-sm tracking-widest uppercase">{t.benefit}</span>
                        <Calculator size={16} className="text-green-500" />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">{t.stats.income}</span>
                            <span className="text-white font-mono">154,000 DA</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">{t.stats.expense}</span>
                            <span className="text-red-400 font-mono">-42,300 DA</span>
                        </div>
                        <div className="h-px bg-white/10"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-green-400 font-bold">{t.stats.net}</span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="text-2xl font-black text-green-500 font-mono text-glow"
                            >
                                111,700 DA
                            </motion.span>
                        </div>
                    </div>

                    {/* Pie Chart Representation */}
                    <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full border-[10px] border-green-500/20 border-t-green-500 animate-spin-slow opacity-50"></div>
                </motion.div>
            </div>
        </div>
    );
};
