import React from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    BarChart3,
    Package,
    Users,
    Truck,
    Settings,
    Palette,
    Shield,
    Bell,
    FileSpreadsheet,
    Brain,
    Map
} from 'lucide-react';

const AdminFeaturesSection = ({ lang }) => {
    const content = lang === 'ar' ? {
        badge: 'جانب الإدارة',
        title: 'لوحة تحكم قوية للإدارة',
        subtitle: 'كل ما تحتاجه لإدارة متجرك في مكان واحد',
        features: [
            { icon: LayoutDashboard, title: 'لوحة القيادة', desc: 'عرض شامل للمبيعات والطلبات والإحصائيات في الوقت الفعلي' },
            { icon: BarChart3, title: 'تحليلات متقدمة', desc: 'رسوم بيانية وتقارير مفصلة عن أداء متجرك' },
            { icon: Brain, title: 'مدقق حملات IA', desc: 'تحليل ذكي للإعلانات مع توصيات SCALE أو KILL' },
            { icon: Package, title: 'إدارة المنتجات', desc: 'إضافة وتعديل المنتجات بسهولة مع باني منتجات مبسط' },
            { icon: Users, title: 'إدارة الطلبات', desc: 'معالجة جماعية للطلبات مع تحديث الحالات بنقرة' },
            { icon: Truck, title: 'ربط الشحن', desc: 'تكامل مباشر مع Yalidine, ZR Express, Procolis' },
            { icon: Map, title: 'خريطة الولايات', desc: 'عرض أداء كل ولاية من حيث التسليم والمرتجعات' },
            { icon: FileSpreadsheet, title: 'مزامنة Google Sheets', desc: 'دفع الطلبات تلقائياً إلى جدول البيانات' },
            { icon: Palette, title: 'تخصيص التصميم', desc: 'تغيير ألوان ومظهر نموذج الدفع بسهولة' },
            { icon: Shield, title: 'إعدادات البكسل', desc: 'تكوين Facebook CAPI و Google Analytics' },
            { icon: Bell, title: 'إشعارات ذكية', desc: 'تنبيهات فورية للطلبات الجديدة والمهمة' },
            { icon: Settings, title: 'إعدادات متقدمة', desc: 'تحكم كامل في جميع جوانب المتجر' }
        ]
    } : {
        badge: 'Côté Admin',
        title: 'Un Tableau de Bord Admin Puissant',
        subtitle: 'Tout ce dont vous avez besoin pour gérer votre boutique en un seul endroit',
        features: [
            { icon: LayoutDashboard, title: 'Dashboard Central', desc: 'Vue complète des ventes, commandes et KPIs en temps réel' },
            { icon: BarChart3, title: 'Analytics Avancées', desc: 'Graphiques et rapports détaillés sur la performance' },
            { icon: Brain, title: 'Auditeur Campagnes IA', desc: 'Analyse intelligente des pubs avec recommandations SCALE ou KILL' },
            { icon: Package, title: 'Gestion Produits', desc: 'Créez et modifiez vos produits facilement avec le Product Builder' },
            { icon: Users, title: 'Gestion Commandes', desc: 'Traitement en masse avec mise à jour des statuts en un clic' },
            { icon: Truck, title: 'Intégration Livraison', desc: 'Connexion directe avec Yalidine, ZR Express, Procolis' },
            { icon: Map, title: 'Carte des Wilayas', desc: 'Visualisez la performance par wilaya (livraison vs retours)' },
            { icon: FileSpreadsheet, title: 'Sync Google Sheets', desc: 'Export automatique des commandes vers votre spreadsheet' },
            { icon: Palette, title: 'Personnalisation Design', desc: 'Modifiez couleurs et apparence du checkout' },
            { icon: Shield, title: 'Configuration Pixel', desc: 'Setup Facebook CAPI & Google Analytics facilement' },
            { icon: Bell, title: 'Notifications Smart', desc: 'Alertes instantanées pour les nouvelles commandes' },
            { icon: Settings, title: 'Paramètres Avancés', desc: 'Contrôle total sur tous les aspects de la boutique' }
        ]
    };

    return (
        <section className="py-16 sm:py-24 bg-bg-dark relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>

            <div className="container max-w-[85%] mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
                    >
                        <LayoutDashboard size={16} />
                        {content.badge}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        {content.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
                    >
                        {content.subtitle}
                    </motion.p>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px]">
                    {content.features.map((feature, i) => {
                        let colSpan = 'md:col-span-1';
                        let rowSpan = 'md:row-span-1';

                        // Create asymmetric layout
                        if (i === 0) { colSpan = 'md:col-span-2'; rowSpan = 'md:row-span-2'; }
                        else if (i === 3 || i === 8) { colSpan = 'md:col-span-2'; rowSpan = 'md:row-span-1'; }

                        const isLarge = i === 0 || i === 3 || i === 8;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`p-6 sm:p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden flex flex-col justify-between ${colSpan} ${rowSpan}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                            <feature.icon size={24} className="text-blue-400" />
                                        </div>
                                        <h3 className="text-white font-bold mb-2 text-lg sm:text-xl">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>

                                    {isLarge && (
                                        <div className="mt-8 flex-1 w-full rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center relative overflow-hidden shadow-inner min-h-[100px] p-6">
                                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

                                            {i === 0 ? (
                                                <div className="relative w-full max-w-sm mx-auto group perspective-1000 z-10 mt-auto">
                                                    <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                                                    <div className="relative bg-[#0f1117] border border-white/10 p-6 rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                                                        <div className="flex justify-between items-center mb-6">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                                                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                                                </div>
                                                                <div>
                                                                    <p className="text-xs text-gray-400 font-medium">Chiffre d'Affaires</p>
                                                                    <p className="text-white font-bold text-lg">245,500 DA</p>
                                                                </div>
                                                            </div>
                                                            <div className="bg-green-500/10 border border-green-500/20 px-2 py-1 rounded text-green-400 text-xs font-bold flex items-center gap-1 animate-pulse">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Live
                                                            </div>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 transition">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                                                    <p className="text-sm text-gray-300">#ORD-9921</p>
                                                                </div>
                                                                <p className="text-xs text-gray-500">Alger</p>
                                                                <p className="text-sm font-semibold text-white">4,500 DA</p>
                                                            </div>
                                                            <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 transition">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                                                    <p className="text-sm text-gray-300">#ORD-9922</p>
                                                                </div>
                                                                <p className="text-xs text-gray-500">Oran</p>
                                                                <p className="text-sm font-semibold text-white">7,200 DA</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="relative z-10 text-xs text-blue-500/40">Mini UI: {feature.title}</span>
                                            )}

                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AdminFeaturesSection;
