import React, { useState } from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { Check, TrendingUp, Users, Zap, Building2, ArrowRight, DollarSign } from 'lucide-react';

const MerchantCard = ({ plan, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
            plan.highlight
                ? 'border-primary shadow-2xl shadow-primary/25 scale-[1.03] z-10'
                : 'border-border bg-white hover:border-primary/30 hover:shadow-lg'
        }`}
        style={plan.highlight ? {
            background: 'linear-gradient(145deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)'
        } : {}}
    >
        {plan.highlight && (
            <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-primary via-violet-400 to-primary" />
        )}

        {plan.tag && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg border border-primary/30 whitespace-nowrap">
                ✦ {plan.tag}
            </div>
        )}

        <div className="p-7 flex flex-col flex-grow">
            {/* Plan name + domains badge */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className={`text-xl font-extrabold tracking-tight ${plan.highlight ? 'text-white' : 'text-text-dark'}`}>
                        {plan.name}
                    </h3>
                    <p className={`text-xs mt-1 ${plan.highlight ? 'text-violet-300' : 'text-text-muted'}`}>
                        {plan.domains}
                    </p>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                    plan.highlight ? 'bg-white/10 text-violet-200' : 'bg-primary/8 text-primary'
                }`}>
                    {plan.orderLimit}
                </span>
            </div>

            {/* Price */}
            <div className="mb-2">
                <div className="flex items-baseline gap-1.5">
                    <span className={`text-4xl font-extrabold tracking-tight ${plan.highlight ? 'text-white' : 'text-text-dark'}`}>
                        {plan.price}
                    </span>
                    <span className={`text-sm font-medium ${plan.highlight ? 'text-white/60' : 'text-text-muted'}`}>
                        {plan.period}
                    </span>
                </div>
                <p className={`text-xs font-semibold mt-1 ${plan.highlight ? 'text-violet-300' : 'text-green-600'}`}>
                    {plan.priceNote}
                </p>
            </div>

            {/* Pain-reduction desc */}
            <p className={`text-sm leading-relaxed mb-6 pb-5 border-b ${
                plan.highlight ? 'text-violet-200 border-white/10' : 'text-text-body border-border'
            }`}>
                {plan.desc}
            </p>

            {/* Features */}
            <ul className="space-y-2.5 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? 'text-white/85' : 'text-text-body'}`}>
                        <Check size={14} className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-violet-300' : 'text-primary'}`} />
                        {feature}
                    </li>
                ))}
            </ul>

            <button className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group ${
                plan.highlight
                    ? 'bg-white text-primary hover:bg-violet-50'
                    : 'bg-primary text-white hover:bg-primary-dark'
            }`}>
                {plan.cta}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
        </div>
    </motion.div>
);

const DevCard = ({ plan, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
            plan.highlight
                ? 'border-amber-400/60 shadow-2xl shadow-amber-400/15 scale-[1.03] z-10'
                : 'border-border bg-white hover:border-amber-400/40 hover:shadow-lg'
        }`}
        style={plan.highlight ? {
            background: 'linear-gradient(145deg, #1c1408 0%, #292007 50%, #1c1408 100%)'
        } : {}}
    >
        {plan.highlight && (
            <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />
        )}

        {plan.tag && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
                ✦ {plan.tag}
            </div>
        )}

        <div className="p-7 flex flex-col flex-grow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className={`text-xl font-extrabold tracking-tight ${plan.highlight ? 'text-amber-100' : 'text-text-dark'}`}>
                        {plan.name}
                    </h3>
                    <p className={`text-xs mt-1 ${plan.highlight ? 'text-amber-400' : 'text-text-muted'}`}>
                        {plan.domains}
                    </p>
                </div>
                {plan.profit && (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                        plan.highlight ? 'bg-amber-400/15 text-amber-300' : 'bg-amber-50 text-amber-700'
                    }`}>
                        {plan.profit}
                    </span>
                )}
            </div>

            {/* Price */}
            <div className="mb-2">
                <div className="flex items-baseline gap-1.5">
                    <span className={`text-4xl font-extrabold tracking-tight ${plan.highlight ? 'text-amber-100' : 'text-text-dark'}`}>
                        {plan.price}
                    </span>
                    <span className={`text-sm font-medium ${plan.highlight ? 'text-amber-300/70' : 'text-text-muted'}`}>
                        {plan.period}
                    </span>
                </div>
                <p className={`text-xs font-bold mt-1 ${plan.highlight ? 'text-amber-400' : 'text-amber-600'}`}>
                    {plan.priceNote}
                </p>
            </div>

            {/* Desc */}
            <p className={`text-sm leading-relaxed mb-6 pb-5 border-b ${
                plan.highlight ? 'text-amber-200/80 border-amber-400/15' : 'text-text-body border-border'
            }`}>
                {plan.desc}
            </p>

            {/* Order limit badge */}
            <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg mb-5 w-fit ${
                plan.highlight ? 'bg-amber-400/10 text-amber-300' : 'bg-amber-50 text-amber-700'
            }`}>
                <Zap size={11} />
                {plan.orderLimit}
            </div>

            {/* Features */}
            <ul className="space-y-2.5 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? 'text-amber-100/85' : 'text-text-body'}`}>
                        <Check size={14} className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-amber-400' : 'text-amber-500'}`} />
                        {feature}
                    </li>
                ))}
            </ul>

            <button className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group ${
                plan.highlight
                    ? 'bg-amber-400 text-black hover:bg-amber-300'
                    : 'bg-amber-500 text-white hover:bg-amber-600'
            }`}>
                {plan.cta}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
        </div>
    </motion.div>
);

const PricingSection = ({ lang }) => {
    const t = content[lang].pricing;
    const isRtl = lang === 'ar';
    const merchantPlans = t.plans.filter(p => p.tier === 'merchant');
    const devPlans = t.plans.filter(p => p.tier === 'dev');

    return (
        <section className="py-20 sm:py-28 bg-bg-light" id="pricing" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3"
                    >
                        {t.eyebrow}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-4 tracking-tight"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-text-body text-base"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                {/* ── MERCHANT PLANS ── */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                            <TrendingUp size={16} className="text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-text-dark">{t.merchantTitle}</h3>
                            <p className="text-sm text-text-muted">{t.merchantSubtitle}</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-center mb-16 sm:mb-20">
                    {merchantPlans.map((plan, i) => (
                        <MerchantCard key={plan.name} plan={plan} index={i} />
                    ))}
                </div>

                {/* Divider with pain hook */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    className="relative my-4 mb-12"
                >
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-dashed border-border" />
                    </div>
                    <div className="relative flex justify-center">
                        <div className="flex items-center gap-2.5 bg-amber-50 border border-amber-200 text-amber-800 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm">
                            <Building2 size={15} />
                            {lang === 'ar' ? 'للمطورين والوكالات — اشتر بالجملة، أعد البيع، احصد الأرباح' : 'Pour Développeurs & Agences — Achetez en gros, revendez, encaissez'}
                            <DollarSign size={15} />
                        </div>
                    </div>
                </motion.div>

                {/* ── DEVELOPER PLANS ── */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100">
                            <Users size={16} className="text-amber-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-text-dark">{t.devTitle}</h3>
                            <p className="text-sm text-text-muted">{t.devSubtitle}</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-center mb-14">
                    {devPlans.map((plan, i) => (
                        <DevCard key={plan.name} plan={plan} index={i} />
                    ))}
                </div>

                {/* Bottom trust bar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-text-muted"
                >
                    {[
                        lang === 'ar' ? '✓ بدون رسوم خفية' : '✓ Aucun frais caché',
                        lang === 'ar' ? '✓ دعم بالعربية والفرنسية' : '✓ Support FR / AR',
                        lang === 'ar' ? '✓ تحديثات تلقائية مشمولة' : '✓ Mises à jour incluses',
                        lang === 'ar' ? '✓ تثبيت في 5 دقائق' : '✓ Installation en 5 min',
                    ].map((item, i) => (
                        <span key={i} className="font-medium">{item}</span>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default PricingSection;
