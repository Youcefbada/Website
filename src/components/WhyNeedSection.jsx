import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { AlertTriangle, TrendingDown, Eye, DollarSign, Ban, Ghost } from 'lucide-react';

const WhyNeedSection = ({ lang }) => {
    const problems = lang === 'ar' ? [
        { icon: Ban, title: 'iOS 14+ يحظر البكسل', desc: 'أكثر من 70% من مستخدمي iPhone محظورون. بياناتك فارغة.' },
        { icon: TrendingDown, title: 'ROAS ينهار', desc: 'بدون بيانات دقيقة، فيسبوك لا يستطيع تحسين حملاتك.' },
        { icon: Eye, title: 'المنافسون يتجسسون', desc: 'أدوات التجسس تسرق استراتيجياتك ومنتجاتك الرابحة.' },
        { icon: DollarSign, title: 'ميزانية مهدورة', desc: 'تدفع لزيارات وهمية وبوتات لا تشتري أبداً.' }
    ] : [
        { icon: Ban, title: 'iOS 14+ Bloque Votre Pixel', desc: 'Plus de 70% des utilisateurs iPhone sont bloqués. Vos données sont vides.' },
        { icon: TrendingDown, title: 'ROAS en Chute Libre', desc: 'Sans données précises, Facebook ne peut pas optimiser vos campagnes.' },
        { icon: Eye, title: 'Vos Concurrents Espionnent', desc: 'Les outils d\'espionnage volent vos stratégies et produits gagnants.' },
        { icon: DollarSign, title: 'Budget Gaspillé', desc: 'Vous payez pour des visites fake et des bots qui n\'achètent jamais.' }
    ];

    const solution = lang === 'ar' ? {
        title: 'DZ-Ghost يحل كل هذا',
        items: ['تتبع Server-Side يتجاوز كل الحظر', 'بيانات نظيفة 100% بدون بوتات', 'حماية ضد أدوات التجسس', 'Match Quality 9/10 للتحسين الأمثل']
    } : {
        title: 'DZ-Ghost Résout Tout Ça',
        items: ['Tracking Server-Side contourne tous les blocages', 'Données 100% propres, sans bots', 'Protection contre les outils d\'espionnage', 'Match Quality 9/10 pour une optimisation maximale']
    };

    return (
        <section className="py-16 sm:py-24 bg-bg-deep relative overflow-hidden">
            <div className="container max-w-[85%] mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
                    >
                        <AlertTriangle size={16} />
                        {lang === 'ar' ? 'المشكلة' : 'Le Problème'}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        {lang === 'ar' ? 'لماذا تحتاج DZ-Ghost؟' : 'Pourquoi Avez-Vous Besoin de DZ-Ghost ?'}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
                    >
                        {lang === 'ar' ? 'إذا كنت تعتمد على البكسل التقليدي، أنت تخسر المال كل يوم.' : 'Si vous utilisez le pixel standard, vous perdez de l\'argent chaque jour.'}
                    </motion.p>
                </div>

                {/* Problems Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-all"
                        >
                            <problem.icon size={28} className="text-red-400 mb-4" />
                            <h3 className="text-white font-bold mb-2 text-sm sm:text-base">{problem.title}</h3>
                            <p className="text-gray-500 text-xs sm:text-sm">{problem.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Solution */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-8 sm:p-12 rounded-3xl bg-primary/10 border border-primary/30 text-center"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_40px_#B042FF]">
                        <Ghost size={32} className="text-white" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-6">{solution.title}</h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {solution.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm justify-center sm:justify-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyNeedSection;
