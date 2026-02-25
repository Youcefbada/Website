import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Target, Truck, Percent, Database, Zap, Map } from 'lucide-react';

const FeaturesGrid = ({ lang }) => {
    const t = content[lang].modules;

    return (
        <section className="py-32 relative bg-[#030014] overflow-hidden" id="features">
            {/* Soft Ambient Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
                    >
                        <Zap size={16} />
                        L'Arsenal Ultime
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
                    >
                        Conçu pour des <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Performances</span> Inégalées
                    </motion.h2>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">

                    {/* ITEM 1: FINANCE / ANALYTICS (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 w-full mb-8 flex-1">
                            {/* Mini UI Mockup: Finance */}
                            <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 shadow-2xl">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <DollarSign size={16} className="text-green-500" />
                                    </div>
                                    <span className="text-green-400 text-sm font-bold bg-green-500/10 px-3 py-1 rounded-full">+482%</span>
                                </div>
                                <div className="flex items-end gap-3 h-24 mt-auto">
                                    {[30, 45, 60, 40, 80, 55, 95].map((h, i) => (
                                        <div key={i} className="flex-1 bg-gradient-to-t from-green-500/40 to-green-500/10 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <h3 className="text-2xl font-bold text-white mb-3">{t.finance.title}</h3>
                            <p className="text-gray-400 text-base leading-relaxed max-w-sm">{t.finance.desc}</p>
                        </div>
                    </motion.div>

                    {/* ITEM 2: META ADS (Square) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-500">
                            <Target size={80} className="text-primary" />
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-auto border border-primary/20">
                            <Target size={24} className="text-primary" />
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-white mb-2">{t.metaAds.title}</h3>
                            <p className="text-gray-400 text-sm">{t.metaAds.desc}</p>
                        </div>
                    </motion.div>

                    {/* ITEM 3: SHIPPING (Square) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:translate-x-2 transition-all duration-500">
                            <Truck size={80} className="text-orange-500" />
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-auto border border-orange-500/20">
                            <Truck size={24} className="text-orange-500" />
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-white mb-2">{t.shipping.title}</h3>
                            <p className="text-gray-400 text-sm">{t.shipping.desc}</p>
                        </div>
                    </motion.div>

                    {/* ITEM 4: OFFERS & UPSELLS (Wide) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 md:row-span-1 rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden group hover:border-white/10 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex-1 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
                                <Percent size={24} className="text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t.offers.title}</h3>
                            <p className="text-gray-400 text-sm max-w-xs">{t.offers.desc}</p>
                        </div>

                        {/* Mini UI Mockup: Toggle Switch */}
                        <div className="relative z-10 bg-white/[0.03] border border-white/5 rounded-2xl p-6 lg:w-48 shadow-lg shrink-0 w-full sm:w-auto">
                            <div className="text-xs text-gray-500 font-medium mb-4 uppercase tracking-wider">Smart Auto-Upsell</div>
                            <div className="flex items-center justify-between">
                                <span className="text-white font-medium">Activé</span>
                                <div className="w-12 h-6 bg-red-500 rounded-full relative shadow-[0_0_15px_rgba(239,68,68,0.5)] cursor-pointer">
                                    <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ITEM 5: ORDERS TRACKING (Tall List) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-1 md:row-span-2 rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500 hidden md:flex"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20">
                            <Database size={24} className="text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{t.orders.title}</h3>
                        <p className="text-gray-400 text-sm mb-8">{t.orders.desc}</p>

                        <div className="mt-auto space-y-3 relative">
                            {/* Overlay fade */}
                            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
                            {[
                                { status: 'Livré', color: 'bg-green-500' },
                                { status: 'En route', color: 'bg-yellow-500' },
                                { status: 'Préparation', color: 'bg-blue-500' },
                                { status: 'Nouveau', color: 'bg-purple-500' },
                            ].map((s, i) => (
                                <div key={i} className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5">
                                    <div className={`w-2 h-2 rounded-full ${s.color}`}></div>
                                    <div className="w-10 h-2 bg-white/10 rounded-full"></div>
                                    <div className="ml-auto w-16 h-2 bg-white/5 rounded-full"></div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ITEM 6: PERFORMANCE / SPEED (Square) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                            <Zap size={80} className="text-yellow-500" />
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-auto border border-yellow-500/20">
                            <Zap size={24} className="text-yellow-500" />
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-white mb-2">{t.product.title}</h3>
                            <p className="text-gray-400 text-sm">{t.product.desc}</p>
                        </div>
                    </motion.div>

                    {/* ITEM 7: REPORTING (Square) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="md:col-span-2 md:row-span-1 rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-auto border border-indigo-500/20">
                            <Map size={24} className="text-indigo-500" />
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-white mb-2">{t.reporting.title}</h3>
                            <p className="text-gray-400 text-sm max-w-md">{t.reporting.desc}</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

// Add DollarSign fallback here since it wasn't in the original imports but is used in Hero and now Grid
import { DollarSign } from 'lucide-react';

export default FeaturesGrid;
