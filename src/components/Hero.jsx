import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Zap, Shield, TrendingUp, Play, BarChart3, Users, DollarSign, Activity } from 'lucide-react';

const Hero = ({ lang }) => {
    const t = content[lang].hero;

    const badges = lang === 'ar'
        ? [{ icon: Shield, text: 'Server-Side CAPI' }, { icon: Zap, text: 'أداء فائق' }, { icon: TrendingUp, text: '4x ROAS' }]
        : [{ icon: Shield, text: 'Server-Side CAPI' }, { icon: Zap, text: 'Performance Maximale' }, { icon: TrendingUp, text: '4x ROAS' }];

    return (
        <section className="relative min-h-[120vh] pt-32 pb-20 flex flex-col items-center justify-start overflow-hidden bg-[#030014]">
            {/* Background Studio Lighting */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-[100%] blur-[120px] opacity-70 mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-[100%] blur-[150px] mix-blend-screen"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"></div>
            </div>

            <div className="container max-w-5xl mx-auto px-6 text-center relative z-10">
                {/* Launch Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 group cursor-pointer hover:bg-white/[0.06] transition-all"
                >
                    <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                    <span className="text-gray-300 text-sm font-medium tracking-wide">
                        {lang === 'ar' ? 'أول بكسل Server-Side للجزائر' : 'Le Premier Pixel Server-Side d\'Algérie'}
                    </span>
                    <span className="text-gray-500 group-hover:text-white transition-colors">→</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
                >
                    {t.headline.split('.')[0]}<span className="text-gray-500">.</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                        {t.headline.split('. ')[1]}
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
                >
                    {t.subheadline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <a
                        href="#pricing"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-100 transition-all text-lg min-w-[200px]"
                    >
                        {t.cta}
                        <Shield size={20} className="text-primary group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                        href="#features"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/5 transition-all text-lg min-w-[200px]"
                    >
                        <Play size={20} className="text-gray-400" />
                        {lang === 'ar' ? 'شاهد العرض' : 'Voir la Démo'}
                    </a>
                </motion.div>

                {/* Micro-notifications */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-20"
                >
                    {badges.map((badge, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                            <badge.icon size={16} className="text-gray-500" />
                            {badge.text}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* 3D Dashboard Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 100, rotateX: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, rotateX: 10, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5, type: 'spring', bounce: 0.3 }}
                className="relative z-20 w-full max-w-6xl mx-auto px-6 [perspective:2000px]"
            >
                <div className="relative transform-gpu transition-all duration-700 hover:rotate-x-0 group">

                    {/* Floating Elements OVER the dashboard */}
                    <div className="absolute -left-12 top-20 z-30 bg-[#0f1117]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-float hidden md:flex">
                        <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">CPA Reduit</p>
                            <p className="text-lg text-white font-bold">-32%</p>
                        </div>
                    </div>

                    <div className="absolute -right-8 top-40 z-30 bg-[#0f1117]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-float hidden md:flex" style={{ animationDelay: '1s' }}>
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                            <Activity size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">Server-Side</p>
                            <p className="text-lg text-white font-bold">100% Match</p>
                        </div>
                    </div>

                    {/* Dashboard Window */}
                    <div className="w-full bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-3xl sm:rounded-[2.5rem] border border-white/10 shadow-[0_0_100px_rgba(176,66,255,0.15)] overflow-hidden">

                        {/* Fake Browser Top Bar */}
                        <div className="h-14 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="mx-auto flex h-8 w-64 md:w-96 items-center justify-center rounded-md bg-white/5 text-xs text-gray-500 font-medium">
                                dashboard.dz-ghost.com
                            </div>
                        </div>

                        {/* Dashboard Inside Layout */}
                        <div className="flex h-[400px] sm:h-[600px] w-full">
                            {/* Fake Sidebar */}
                            <div className="w-48 sm:w-64 border-r border-white/5 p-4 sm:p-6 hidden sm:flex flex-col gap-6">
                                <div className="h-8 w-24 bg-white/10 rounded-md mb-4"></div>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="flex flex-col gap-3">
                                        <div className={`h-4 w-full rounded-md ${i === 1 ? 'bg-primary/20' : 'bg-white/5'}`}></div>
                                    </div>
                                ))}
                            </div>

                            {/* Fake Main Content */}
                            <div className="flex-1 p-6 sm:p-10 flex flex-col gap-8 overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')]">

                                {/* Header Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                                    {[
                                        { label: 'Revenus', val: '2.4M DZD', icon: DollarSign, color: 'text-green-400' },
                                        { label: 'Visiteurs', val: '45,231', icon: Users, color: 'text-blue-400' },
                                        { label: 'Taux de Conv.', val: '4.8%', icon: BarChart3, color: 'text-primary' },
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 sm:p-6 flex flex-col gap-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</span>
                                                <stat.icon size={16} className={stat.color} />
                                            </div>
                                            <span className="text-xl sm:text-3xl font-bold text-white">{stat.val}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Main Chart Area */}
                                <div className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-6 relative flex flex-col items-center justify-end overflow-hidden">
                                    {/* Fake Chart Lines */}
                                    <div className="absolute inset-x-0 bottom-0 top-[20%] flex items-end gap-2 sm:gap-4 px-4 sm:px-10 opacity-60">
                                        {[40, 60, 45, 80, 50, 90, 70, 100, 85, 110].map((h, i) => (
                                            <div key={i} className="w-full bg-gradient-to-t from-primary/40 to-primary/10 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>

            {/* Fade bottom to match next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030014] to-transparent z-30 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
