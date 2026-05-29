import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Layers, CheckCircle } from 'lucide-react';

const data = {
    fr: {
        eyebrow: 'Pour qui ?',
        title: 'Fait pour chaque acteur du e-commerce COD en Algérie',
        profiles: [
            {
                icon: User,
                color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
                title: 'Le Vendeur Solo',
                desc: 'Tu gères seul ta boutique WooCommerce et tu veux scaler tes pubs sans perdre de budget sur des données manquantes.',
                points: [
                    'Checkout COD one-page optimisé 58 wilayas',
                    'Server-Side CAPI sans compétences techniques',
                    '22 transporteurs en 1 clic depuis le dashboard',
                    'Auditeur IA — décide SCALE ou KILL en temps réel',
                ],
                plan: 'Plans recommandés : Starter → Growth → Pro',
                planColor: 'text-indigo-600',
            },
            {
                icon: Building2,
                color: 'bg-violet-50 text-violet-600 border-violet-100',
                title: "L'Agence E-commerce",
                desc: 'Tu gères plusieurs boutiques clients et tu as besoin d\'un outil fiable, scalable et rentable à revendre.',
                points: [
                    '3 à 10 domaines selon le pack choisi',
                    'Achetez en gros — revendez à vos clients',
                    'Chaque pack se rembourse dès le 1er client facturé',
                    'Support technique dédié pour tes urgences',
                ],
                plan: 'Plans recommandés : Developer Lite → Pro → Agency',
                planColor: 'text-violet-600',
            },
            {
                icon: Layers,
                color: 'bg-purple-50 text-purple-600 border-purple-100',
                title: 'Le Marchand à Haut Volume',
                desc: 'Ta boutique tourne bien (~130 commandes/jour) et tu as besoin du système le plus complet — P&L, landing pages, analytics avancée.',
                points: [
                    '4,000 commandes / mois — aucune limite opérationnelle',
                    'Ghost Slicer — landing pages avec compression WebP auto',
                    'Système financier P&L au dinar près',
                    'Performance équipe call center trackée par agent',
                ],
                plan: 'Plan recommandé : Pro',
                planColor: 'text-purple-600',
            },
        ],
    },
    ar: {
        eyebrow: 'لمن هذا؟',
        title: 'مصمم لكل فاعل في التجارة الإلكترونية COD بالجزائر',
        profiles: [
            {
                icon: User,
                color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
                title: 'البائع الفردي',
                desc: 'تدير متجر WooCommerce بمفردك وتريد توسيع حملاتك دون هدر الميزانية على بيانات مفقودة.',
                points: [
                    'نموذج دفع COD سريع — 58 ولاية و بلدياتها',
                    'Server-Side CAPI بدون خبرة تقنية',
                    '22 شركة شحن بنقرة واحدة من لوحة التحكم',
                    'مدقق IA — قرار SCALE أو KILL في الوقت الفعلي',
                ],
                plan: 'الباقات الموصى بها: Starter → Growth → Pro',
                planColor: 'text-indigo-600',
            },
            {
                icon: Building2,
                color: 'bg-violet-50 text-violet-600 border-violet-100',
                title: 'وكالة التجارة الإلكترونية',
                desc: 'تدير عدة متاجر لعملائك وتحتاج أداة موثوقة وقابلة للتوسع وقابلة لإعادة البيع.',
                points: [
                    '3 إلى 10 نطاقات حسب الحزمة المختارة',
                    'اشتر بالجملة — أعد البيع لعملائك',
                    'كل حزمة تُسدد نفسها من أول عميل',
                    'دعم تقني مخصص لحالات الطوارئ',
                ],
                plan: 'الحزم الموصى بها: Developer Lite → Pro → Agency',
                planColor: 'text-violet-600',
            },
            {
                icon: Layers,
                color: 'bg-purple-50 text-purple-600 border-purple-100',
                title: 'التاجر عالي الحجم',
                desc: 'متجرك يعمل بشكل جيد (~130 طلب/يوم) وتحتاج النظام الأكثر اكتمالاً — P&L وصفحات هبوط وتحليلات متقدمة.',
                points: [
                    '4,000 طلب / شهر — بلا حدود تشغيلية',
                    'Ghost Slicer — صفحات هبوط مع ضغط WebP تلقائي',
                    'النظام المالي P&L بدقة الدينار',
                    'تتبع أداء فريق call center لكل وكيل',
                ],
                plan: 'الباقة الموصى بها: Pro',
                planColor: 'text-purple-600',
            },
        ],
    },
};

const WhoIsItForSection = ({ lang }) => {
    const t = data[lang] || data.fr;

    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.span
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3"
                    >
                        {t.eyebrow}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight"
                    >
                        {t.title}
                    </motion.h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 sm:gap-7">
                    {t.profiles.map((profile, i) => {
                        const Icon = profile.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                className="clean-card p-7 flex flex-col gap-5"
                            >
                                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${profile.color}`}>
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-text-dark mb-2">{profile.title}</h3>
                                    <p className="text-text-body text-sm leading-relaxed">{profile.desc}</p>
                                </div>
                                <ul className="space-y-2.5 flex-1">
                                    {profile.points.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-2.5 text-sm text-text-body">
                                            <CheckCircle size={14} className="text-accent mt-0.5 flex-shrink-0" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                                <div className={`text-xs font-bold pt-3 border-t border-border ${profile.planColor}`}>
                                    {profile.plan}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhoIsItForSection;
