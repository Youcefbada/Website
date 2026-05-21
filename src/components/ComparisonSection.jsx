import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const data = {
    fr: {
        eyebrow: 'Pourquoi changer',
        title: 'DZ-Ghost vs WooCommerce par défaut',
        subtitle: 'Voici exactement ce que vous obtenez — et ce que vous manquez sans DZ-Ghost.',
        colWoo: 'WooCommerce seul',
        colDzg: 'DZ-Ghost',
        rows: [
            { feature: 'Checkout COD optimisé Algérie', woo: false, dzg: true, note: 'One-page, 30 secondes' },
            { feature: 'Tracking Server-Side (iOS 14+)', woo: false, dzg: true, note: 'Facebook, TikTok, Snap CAPI' },
            { feature: 'Match Quality pixel', woo: '2-3/10', dzg: '9/10', isText: true },
            { feature: '22 transporteurs algériens', woo: false, dzg: true, note: 'API directe, 1 clic' },
            { feature: 'Bureau de confirmation call center', woo: false, dzg: true },
            { feature: 'Auto-tracking livraisons', woo: false, dzg: true },
            { feature: 'Anti-bot & liste noire', woo: false, dzg: true },
            { feature: 'War Room dashboard', woo: false, dzg: true, note: 'KPIs temps réel' },
            { feature: 'Auditeur IA campagnes', woo: false, dzg: true, note: 'SCALE ou KILL auto' },
            { feature: 'Carte interactive par wilaya', woo: false, dzg: true },
            { feature: 'Récupération paniers abandonnés', woo: 'Plugin tiers payant', dzg: true, isText: true, wooNeg: true },
            { feature: 'Sync Google Sheets', woo: false, dzg: true },
            { feature: 'Offres quantité (AOV)', woo: false, dzg: true },
            { feature: 'Support FR/AR', woo: false, dzg: true },
        ],
    },
    ar: {
        eyebrow: 'لماذا التغيير',
        title: 'DZ-Ghost مقابل WooCommerce الافتراضي',
        subtitle: 'إليك بالضبط ما تحصل عليه — وما تفقده بدون DZ-Ghost.',
        colWoo: 'WooCommerce فقط',
        colDzg: 'DZ-Ghost',
        rows: [
            { feature: 'صفحة دفع COD محسّنة للجزائر', woo: false, dzg: true, note: 'صفحة واحدة، 30 ثانية' },
            { feature: 'تتبع Server-Side (iOS 14+)', woo: false, dzg: true, note: 'Facebook, TikTok, Snap CAPI' },
            { feature: 'جودة مطابقة البكسل', woo: '2-3/10', dzg: '9/10', isText: true },
            { feature: '22 شركة شحن جزائرية', woo: false, dzg: true, note: 'API مباشر، نقرة واحدة' },
            { feature: 'مكتب تأكيد call center', woo: false, dzg: true },
            { feature: 'تتبع تلقائي للتسليم', woo: false, dzg: true },
            { feature: 'درع مضاد للبوت وقائمة سوداء', woo: false, dzg: true },
            { feature: 'لوحة War Room', woo: false, dzg: true, note: 'KPIs في الوقت الفعلي' },
            { feature: 'مدقق حملات بالذكاء الاصطناعي', woo: false, dzg: true, note: 'SCALE أو KILL تلقائياً' },
            { feature: 'خريطة تفاعلية بالولايات', woo: false, dzg: true },
            { feature: 'استرداد السلات المتروكة', woo: 'إضافة خارجية مدفوعة', dzg: true, isText: true, wooNeg: true },
            { feature: 'مزامنة Google Sheets', woo: false, dzg: true },
            { feature: 'عروض الكميات (AOV)', woo: false, dzg: true },
            { feature: 'دعم عربي وفرنسي', woo: false, dzg: true },
        ],
    },
};

const ComparisonSection = ({ lang }) => {
    const t = data[lang] || data.fr;

    return (
        <section className="py-20 sm:py-28 bg-bg-light overflow-hidden">
            <div className="container max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-14">
                    <motion.span
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3"
                    >
                        {t.eyebrow}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight mb-3"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-text-body max-w-xl mx-auto"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.15 }}
                    className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm"
                >
                    {/* Table header */}
                    <div className="grid grid-cols-[1fr_140px_140px] sm:grid-cols-[1fr_160px_160px]">
                        <div className="p-4 sm:p-5 border-b border-border bg-bg-light" />
                        <div className="p-4 sm:p-5 border-b border-l border-border bg-bg-light text-center">
                            <span className="text-xs sm:text-sm font-semibold text-slate-500">{t.colWoo}</span>
                        </div>
                        <div className="p-4 sm:p-5 border-b border-l border-border bg-primary text-center">
                            <span className="text-xs sm:text-sm font-bold text-white">DZ-Ghost</span>
                        </div>
                    </div>

                    {/* Rows */}
                    {t.rows.map((row, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                            className={`grid grid-cols-[1fr_140px_140px] sm:grid-cols-[1fr_160px_160px] ${i < t.rows.length - 1 ? 'border-b border-border' : ''} ${i % 2 === 0 ? '' : 'bg-slate-50/50'}`}
                        >
                            {/* Feature name */}
                            <div className="p-3.5 sm:p-4 flex flex-col justify-center">
                                <span className="text-sm font-medium text-text-dark">{row.feature}</span>
                                {row.note && <span className="text-xs text-text-muted mt-0.5">{row.note}</span>}
                            </div>

                            {/* WooCommerce cell */}
                            <div className="p-3.5 sm:p-4 border-l border-border flex items-center justify-center">
                                {row.isText ? (
                                    <span className={`text-xs font-semibold ${row.wooNeg ? 'text-red-500' : 'text-slate-500'}`}>{row.woo}</span>
                                ) : row.woo ? (
                                    <Check size={16} className="text-green-500" />
                                ) : (
                                    <X size={16} className="text-red-400" />
                                )}
                            </div>

                            {/* DZ-Ghost cell */}
                            <div className="p-3.5 sm:p-4 border-l border-border flex items-center justify-center bg-primary/3">
                                {row.isText && typeof row.dzg === 'string' ? (
                                    <span className="text-xs font-bold text-primary">{row.dzg}</span>
                                ) : (
                                    <Check size={16} className="text-primary" strokeWidth={2.5} />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ComparisonSection;
