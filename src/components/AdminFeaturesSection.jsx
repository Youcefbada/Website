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

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {content.features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all group"
                        >
                            <feature.icon size={24} className="text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white font-bold mb-2 text-sm sm:text-base">{feature.title}</h3>
                            <p className="text-gray-500 text-xs sm:text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdminFeaturesSection;
