import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Mail, Clock, Globe } from 'lucide-react';
import logoImg from '../assets/logo.png';

const WA_NUMBER = '213676917753';

const copy = {
    fr: {
        eyebrow: 'Contact',
        headline: 'On est là pour vous aider.',
        subtitle: 'Support disponible en français et en arabe. Réponse rapide garantie.',
        back: 'Retour au site',
        toggle: 'AR',
        channels: [
            {
                icon: MessageCircle,
                color: 'bg-green-50 text-green-600 border-green-100',
                title: 'WhatsApp',
                desc: 'La façon la plus rapide de nous joindre. Réponse en moins d\'1 heure (jours ouvrables).',
                cta: 'Écrire sur WhatsApp',
                href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Bonjour, je suis intéressé par DZ-Ghost.')}`,
                external: true,
            },
            {
                icon: Mail,
                color: 'bg-blue-50 text-blue-600 border-blue-100',
                title: 'Email',
                desc: 'Pour les questions détaillées, demandes de facturation ou partenariats.',
                cta: 'support@dz-ghost.com',
                href: 'mailto:support@dz-ghost.com',
                external: false,
            },
            {
                icon: Clock,
                color: 'bg-violet-50 text-violet-600 border-violet-100',
                title: 'Horaires de support',
                desc: 'Dimanche – Jeudi · 9h00 – 18h00 (GMT+1)\nLicences Escouade : support prioritaire 7j/7.',
                cta: null,
                href: null,
            },
        ],
        faqTitle: 'Questions fréquentes',
        faqs: [
            { q: 'J\'ai un problème d\'installation', a: 'Contactez-nous sur WhatsApp avec votre domaine et une capture d\'écran. On résout en général en moins de 30 minutes.' },
            { q: 'Comment obtenir ma licence après paiement ?', a: 'Vous recevrez votre clé de licence par email dans les 5 minutes suivant le paiement.' },
            { q: 'Puis-je changer de plan ?', a: 'Oui, contactez-nous et on ajustera votre licence avec un prorata du montant déjà payé.' },
        ],
    },
    ar: {
        eyebrow: 'تواصل معنا',
        headline: 'نحن هنا للمساعدة.',
        subtitle: 'الدعم متاح باللغتين العربية والفرنسية. استجابة سريعة مضمونة.',
        back: 'العودة إلى الموقع',
        toggle: 'FR',
        channels: [
            {
                icon: MessageCircle,
                color: 'bg-green-50 text-green-600 border-green-100',
                title: 'واتساب',
                desc: 'الطريقة الأسرع للتواصل معنا. رد خلال أقل من ساعة (أيام العمل).',
                cta: 'الكتابة على واتساب',
                href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('مرحباً، أنا مهتم بـ DZ-Ghost.')}`,
                external: true,
            },
            {
                icon: Mail,
                color: 'bg-blue-50 text-blue-600 border-blue-100',
                title: 'البريد الإلكتروني',
                desc: 'للأسئلة التفصيلية أو طلبات الفواتير أو الشراكات.',
                cta: 'support@dz-ghost.com',
                href: 'mailto:support@dz-ghost.com',
                external: false,
            },
            {
                icon: Clock,
                color: 'bg-violet-50 text-violet-600 border-violet-100',
                title: 'ساعات الدعم',
                desc: 'الأحد – الخميس · 9:00 – 18:00 (GMT+1)\nتراخيص الفرقة: دعم VIP 7 أيام/أسبوع.',
                cta: null,
                href: null,
            },
        ],
        faqTitle: 'أسئلة شائعة',
        faqs: [
            { q: 'لدي مشكلة في التثبيت', a: 'تواصل معنا على واتساب مع اسم نطاقك وصورة للمشكلة. عادةً نحلها في أقل من 30 دقيقة.' },
            { q: 'كيف أحصل على ترخيصي بعد الدفع؟', a: 'ستتلقى مفتاح الترخيص بالبريد الإلكتروني خلال 5 دقائق من الدفع.' },
            { q: 'هل يمكنني تغيير الباقة؟', a: 'نعم، تواصل معنا وسنعدّل ترخيصك مع احتساب الفرق النسبي من المبلغ المدفوع.' },
        ],
    },
};

const ContactPage = ({ lang = 'fr', setLang }) => {
    const c = copy[lang] || copy.fr;
    const isRtl = lang === 'ar';
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
            <nav className="border-b border-slate-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">
                        <ArrowLeft size={15} className={isRtl ? 'rotate-180' : ''} />
                        {c.back}
                    </Link>
                    <div className="flex items-center gap-3">
                        {setLang && (
                            <button onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 text-slate-500 hover:text-slate-700 transition-all text-xs font-medium">
                                <Globe size={13} /> {c.toggle}
                            </button>
                        )}
                        <img src={logoImg} alt="DZ-Ghost" className="h-8 w-auto" />
                    </div>
                </div>
            </nav>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-14">
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">{c.eyebrow}</span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">{c.headline}</h1>
                    <p className="text-slate-500 text-base">{c.subtitle}</p>
                </motion.div>

                {/* Contact channels */}
                <div className="grid sm:grid-cols-3 gap-5 mb-16">
                    {c.channels.map((ch, i) => {
                        const Icon = ch.icon;
                        return (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-4"
                            >
                                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${ch.color}`}>
                                    <Icon size={20} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-900 mb-1.5">{ch.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-line">{ch.desc}</p>
                                </div>
                                {ch.href && (
                                    <a href={ch.href} target={ch.external ? '_blank' : undefined} rel={ch.external ? 'noopener noreferrer' : undefined}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                                        {ch.cta} →
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* FAQ */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-6">{c.faqTitle}</h2>
                    <div className="space-y-4">
                        {c.faqs.map((faq, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                className="rounded-xl border border-slate-100 bg-slate-50 p-5"
                            >
                                <p className="font-semibold text-slate-800 text-sm mb-2">{faq.q}</p>
                                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
