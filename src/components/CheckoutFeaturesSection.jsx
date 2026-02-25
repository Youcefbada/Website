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

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px]">
                    {content.features.map((feature, i) => {
                        let colSpan = 'md:col-span-1';
                        let rowSpan = 'md:row-span-1';

                        // Asymmetric layout
                        if (i === 0) { colSpan = 'md:col-span-2 lg:col-span-2'; rowSpan = 'md:row-span-2 text-center'; }
                        else if (i === 5) { colSpan = 'md:col-span-2 lg:col-span-2'; rowSpan = 'md:row-span-1'; }

                        const isLarge = i === 0 || i === 5;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`p-6 sm:p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-${feature.color}/30 transition-all group relative overflow-hidden flex flex-col justify-between ${colSpan} ${rowSpan}`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`flex flex-col ${i === 0 ? 'items-center' : 'items-start'}`}>
                                        <div className={`w-12 h-12 rounded-2xl ${colorClasses[feature.color]} flex items-center justify-center mb-6 border group-hover:scale-110 transition-transform`}>
                                            <feature.icon size={24} />
                                        </div>
                                        <h3 className="text-white font-bold mb-2 text-lg sm:text-xl">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>

                                    {isLarge && (
                                        <div className="mt-8 flex-1 w-full rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center relative overflow-hidden shadow-inner min-h-[100px] p-6">
                                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

                                            {i === 0 ? (
                                                <div className="relative z-10 bg-[#14161f] border border-gray-800 rounded-xl w-full max-w-sm mx-auto overflow-hidden shadow-2xl flex flex-col scale-[0.95] sm:scale-100 origin-bottom">
                                                    <div className="bg-gray-900 px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                        <span className="text-xs text-gray-500 ml-2 font-mono">checkout-rapide.php</span>
                                                    </div>

                                                    <div className="p-5 space-y-4 text-left">
                                                        <div className="grid grid-cols-2 gap-3">
                                                            <div className="h-10 bg-gray-800/50 rounded-lg border border-gray-700/50 flex items-center px-3 group">
                                                                <span className="text-gray-500 text-sm group-hover:text-purple-400 transition">Nom Complet</span>
                                                            </div>
                                                            <div className="h-10 bg-gray-800/50 rounded-lg border border-gray-700/50 flex items-center px-3 group">
                                                                <span className="text-gray-500 text-sm group-hover:text-purple-400 transition">Téléphone</span>
                                                            </div>
                                                        </div>

                                                        <div className="h-10 bg-gray-800/50 rounded-lg border border-gray-700/50 flex items-center justify-between px-3 cursor-pointer">
                                                            <span className="text-gray-300 text-sm">16 - Alger</span>
                                                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                        </div>

                                                        <div className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 p-3 rounded-lg flex justify-center items-center cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
                                                            <span className="text-white font-bold text-sm tracking-wide">CONFIRMER LA COMMANDE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="relative z-10 text-xs text-white/40">Mini UI: {feature.title}</span>
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

export default CheckoutFeaturesSection;
