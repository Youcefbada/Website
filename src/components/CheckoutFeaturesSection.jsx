import React from 'react';
import { motion } from 'framer-motion';
import {
    ShoppingCart,
    Clock,
    Gift,
    FileText,
    MessageCircle,
    CheckCircle2,
    Smartphone,
    CreditCard,
    MapPin,
    Sparkles
} from 'lucide-react';

const CheckoutFeaturesSection = ({ lang }) => {
    const content = lang === 'ar' ? {
        badge: 'جانب العميل',
        title: 'نموذج دفع احترافي يحول الزوار',
        subtitle: 'تجربة شراء سلسة تزيد معدل التحويل',
        features: [
            {
                icon: ShoppingCart,
                title: 'Checkout One-Page COD',
                desc: 'نموذج دفع سريع في صفحة واحدة بدلاً من checkout WooCommerce البطيء',
                color: 'primary'
            },
            {
                icon: Clock,
                title: 'الطلبات المتروكة',
                desc: 'تتبع وإشعار العملاء الذين لم يكملوا طلباتهم لاستعادتهم',
                color: 'orange'
            },
            {
                icon: Gift,
                title: 'خاصية العروض',
                desc: 'عروض الكمية (اشتري 2 بخصم، اشتري 3 بخصم أكبر) لزيادة قيمة السلة',
                color: 'green'
            },
            {
                icon: FileText,
                title: 'ملخص الطلب',
                desc: 'عرض واضح للمنتجات والأسعار والشحن قبل التأكيد',
                color: 'blue'
            },
            {
                icon: MessageCircle,
                title: 'طلب عبر واتساب',
                desc: 'زر واتساب مباشر للعملاء الذين يفضلون الطلب بالمحادثة',
                color: 'green'
            },
            {
                icon: CheckCircle2,
                title: 'صفحة الشكر',
                desc: 'صفحة تأكيد احترافية مع تفاصيل الطلب وخطوات المتابعة',
                color: 'primary'
            },
            {
                icon: MapPin,
                title: 'اختيار الولاية والبلدية',
                desc: 'قوائم منسدلة ذكية لـ 58 ولاية وجميع البلديات',
                color: 'blue'
            },
            {
                icon: Smartphone,
                title: 'زر شراء Sticky',
                desc: 'زر شراء ثابت في الأسفل على الموبايل لزيادة النقرات',
                color: 'orange'
            }
        ]
    } : {
        badge: 'Côté Client',
        title: 'Un Checkout Pro Qui Convertit',
        subtitle: 'Une expérience d\'achat fluide qui maximise vos conversions',
        features: [
            {
                icon: ShoppingCart,
                title: 'Checkout One-Page COD',
                desc: 'Formulaire rapide en une page au lieu du checkout WooCommerce lent',
                color: 'primary'
            },
            {
                icon: Clock,
                title: 'Paniers Abandonnés',
                desc: 'Suivi et relance des clients qui n\'ont pas finalisé leur commande',
                color: 'orange'
            },
            {
                icon: Gift,
                title: 'Offres sur Quantité',
                desc: 'Promos "Achetez 2 = -500DA, Achetez 3 = -1000DA" pour augmenter l\'AOV',
                color: 'green'
            },
            {
                icon: FileText,
                title: 'Résumé de Commande',
                desc: 'Affichage clair des produits, prix et frais avant confirmation',
                color: 'blue'
            },
            {
                icon: MessageCircle,
                title: 'Commande via WhatsApp',
                desc: 'Bouton WhatsApp direct pour les clients qui préfèrent commander par chat',
                color: 'green'
            },
            {
                icon: CheckCircle2,
                title: 'Page de Remerciement',
                desc: 'Page de confirmation pro avec détails commande et prochaines étapes',
                color: 'primary'
            },
            {
                icon: MapPin,
                title: 'Sélection Wilaya/Commune',
                desc: 'Menus déroulants intelligents pour les 58 wilayas et communes',
                color: 'blue'
            },
            {
                icon: Smartphone,
                title: 'Bouton Sticky Mobile',
                desc: 'Bouton d\'achat fixe en bas sur mobile pour plus de clics',
                color: 'orange'
            }
        ]
    };

    const colorClasses = {
        primary: 'bg-primary/10 border-primary/30 text-primary',
        orange: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
        green: 'bg-green-500/10 border-green-500/30 text-green-400',
        blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400'
    };

    return (
        <section className="py-16 sm:py-24 bg-bg-deep relative overflow-hidden">
            {/* Background */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"></div>

            <div className="container max-w-[85%] mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
                    >
                        <Sparkles size={16} />
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {content.features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${colorClasses[feature.color]} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-white font-bold mb-2 text-sm sm:text-base">{feature.title}</h3>
                            <p className="text-gray-500 text-xs sm:text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CheckoutFeaturesSection;
