import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Lock, Eye, EyeOff, CheckCircle, ArrowLeft, AlertCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

const t = {
    fr: {
        eyebrow: 'Politique de confidentialité',
        headline: 'Vos données vous appartiennent. Entièrement.',
        subtitle: 'DZ-Ghost est un plugin installé sur votre propre serveur WordPress. Nous n\'avons physiquement aucun accès à vos commandes, vos clients ou votre trafic. Cette page explique exactement ce que nous voyons — et ce que nous ne pouvons pas voir.',
        updated: 'Dernière mise à jour : Mai 2026 · Version 2.0',
        backLink: 'Retour au site',
        langToggle: 'AR',
        neverSee: {
            title: 'Ce que DZ-Ghost ne voit jamais',
            items: [
                'Données de vos clients (noms, téléphones, adresses)',
                'Contenu de vos commandes ou montants',
                'Vos événements Facebook / TikTok / Snapchat',
                'Données de votre pixel publicitaire',
                'Informations de paiement ou bancaires',
                'Identifiants de vos comptes publicitaires',
                'Données analytiques de votre boutique',
                'Comportement ou navigation de vos visiteurs',
            ],
        },
        sections: [
            {
                icon: 'Server',
                color: 'bg-blue-50 text-blue-600',
                title: '1. Architecture — Pourquoi nous ne pouvons pas voir vos données',
                content: [
                    'DZ-Ghost est un <strong>plugin WordPress auto-hébergé</strong>. Le code s\'exécute exclusivement sur <strong>votre serveur d\'hébergement</strong> et votre base de données MySQL reste sous votre seul contrôle.',
                    'Contrairement aux plateformes SaaS (Shopify, etc.), DZ-Ghost ne fait jamais transiter vos données par nos serveurs. Vos commandes, clients et événements de tracking sont traités et stockés dans <strong>votre propre base de données WordPress</strong>.',
                ],
                flow: {
                    label: 'Flux de données',
                    steps: ['Votre client', 'Votre serveur WordPress', 'Votre base de données'],
                    note: '↳ Les serveurs DZ-Ghost ne sont à aucun moment dans cette chaîne.',
                },
            },
            {
                icon: 'Lock',
                color: 'bg-indigo-50 text-indigo-600',
                title: '2. La seule connexion à nos serveurs — Validation de licence',
                content: [
                    'L\'unique moment où le plugin contacte nos serveurs est lors de la <strong>validation de votre clé de licence</strong> (activation et mises à jour). Voici exactement ce qui est transmis :',
                ],
                proofBox: {
                    label: 'Données envoyées lors de la validation de licence',
                    warning: 'Aucune donnée client (noms, téléphones, adresses, paniers) n\'est jamais incluse.',
                    items: [
                        { key: 'license_key', desc: 'Votre clé de licence (hash chiffré, non réversible)' },
                        { key: 'domain', desc: 'Nom de domaine de votre boutique (ex: monsite.dz)' },
                        { key: 'wp_version', desc: 'Version de WordPress (statistiques de compatibilité)' },
                        { key: 'plugin_version', desc: 'Version du plugin installé' },
                    ],
                },
                after: 'Cette requête utilise HTTPS chiffré (TLS 1.3). Votre clé est hashée côté client — nous ne stockons jamais la clé en clair.',
            },
            {
                icon: 'Eye',
                color: 'bg-green-50 text-green-600',
                title: '3. Vérifiez vous-même — Preuves techniques',
                content: ['Vous pouvez vérifier notre affirmation directement avec ces 3 méthodes :'],
                verifyMethods: [
                    { label: 'DevTools → Network', desc: 'Ouvrez DevTools dans votre navigateur sur votre boutique. Passez une commande test. Aucune requête vers dz-ghost.com ne sera visible.' },
                    { label: 'Logs serveur', desc: 'Activez les logs d\'accès de votre hébergeur. Cherchez des connexions sortantes vers nos domaines pendant les transactions. Il n\'y en aura pas.' },
                    { label: 'Query Monitor (plugin)', desc: 'Installez Query Monitor sur WordPress. Il n\'affichera aucune requête externe vers nos domaines lors du traitement des commandes.' },
                ],
            },
            {
                icon: 'Shield',
                color: 'bg-violet-50 text-violet-600',
                title: '4. Server-Side CAPI — Vos données restent sur votre serveur',
                content: [
                    'Le Server-Side CAPI envoie vos événements <strong>directement depuis votre serveur vers Facebook, TikTok et Snapchat</strong>. DZ-Ghost configure et déclenche cet envoi, mais ne relaie pas vos données.',
                ],
                capiFlow: {
                    label: 'Flux CAPI',
                    from: 'Votre serveur',
                    arrow: '→ directement →',
                    to: 'graph.facebook.com',
                    note: '↳ DZ-Ghost ne relaie pas vos données CAPI. Elles vont directement de vous à Facebook/TikTok.',
                },
                after: 'Vos tokens d\'accès CAPI sont stockés chiffrés dans <strong>votre base de données WordPress</strong>, protégés par votre clé secrète. Nous ne les voyons jamais.',
            },
            {
                icon: 'Lock',
                color: 'bg-amber-50 text-amber-600',
                title: '5. Données que vous nous confiez volontairement',
                content: ['Lors de l\'achat ou du contact support, nous collectons :'],
                list: [
                    '<strong>Adresse email</strong> — pour envoyer votre licence et les mises à jour',
                    '<strong>Nom</strong> — pour personnaliser votre espace client',
                    '<strong>Nom de domaine</strong> — pour valider et lier votre licence',
                ],
                after: 'Ces données ne sont jamais revendues ni partagées. Vous pouvez demander leur suppression à tout moment.',
            },
        ],
        contact: {
            title: 'Questions sur notre politique de confidentialité ?',
            desc: 'Nous sommes transparents et répondons à toutes vos questions techniques ou légales.',
            email: 'privacy@dz-ghost.com',
        },
    },
    ar: {
        eyebrow: 'سياسة الخصوصية',
        headline: 'بياناتك ملكك. بالكامل.',
        subtitle: 'DZ-Ghost إضافة مُثبَّتة على خادم WordPress الخاص بك. لا نملك أي وصول فعلي لطلباتك أو عملائك أو حركة الزيارات. تشرح هذه الصفحة بالضبط ما نراه — وما لا نستطيع رؤيته أبدًا.',
        updated: 'آخر تحديث: مايو 2026 · الإصدار 2.0',
        backLink: 'العودة إلى الموقع',
        langToggle: 'FR',
        neverSee: {
            title: 'ما لا يراه DZ-Ghost أبدًا',
            items: [
                'بيانات عملائك (الأسماء، الهواتف، العناوين)',
                'محتوى طلباتك أو مبالغها',
                'أحداث فيسبوك / تيك توك / سناب شات',
                'بيانات بكسل الإعلانات',
                'معلومات الدفع أو البنكية',
                'بيانات حسابات إعلاناتك',
                'تحليلات متجرك',
                'سلوك أو تصفح زوارك',
            ],
        },
        sections: [
            {
                icon: 'Server',
                color: 'bg-blue-50 text-blue-600',
                title: '١. البنية التقنية — لماذا لا نستطيع رؤية بياناتك',
                content: [
                    'DZ-Ghost <strong>إضافة WordPress ذاتية الاستضافة</strong>. الكود يعمل حصراً على <strong>خادمك الخاص</strong> وقاعدة بياناتك MySQL تبقى تحت سيطرتك الكاملة.',
                    'على عكس منصات SaaS (مثل Shopify)، لا تمر بياناتك أبداً عبر خوداتنا. طلباتك وعملاؤك وأحداث التتبع تُعالج وتُخزَّن في <strong>قاعدة بيانات WordPress الخاصة بك</strong>.',
                ],
                flow: {
                    label: 'تدفق البيانات',
                    steps: ['عميلك', 'خادم WordPress الخاص بك', 'قاعدة بياناتك'],
                    note: '↳ خوادم DZ-Ghost غير موجودة في هذه السلسلة أبداً.',
                },
            },
            {
                icon: 'Lock',
                color: 'bg-indigo-50 text-indigo-600',
                title: '٢. الاتصال الوحيد بخوادمنا — التحقق من الترخيص',
                content: [
                    'اللحظة الوحيدة التي يتصل فيها الإضافة بخوداتنا هي عند <strong>التحقق من مفتاح الترخيص</strong> (عند التفعيل والتحديثات). إليك بالضبط ما يُرسَل:',
                ],
                proofBox: {
                    label: 'البيانات المرسلة عند التحقق من الترخيص',
                    warning: 'لا تُضمَّن أي بيانات عميل (أسماء، هواتف، عناوين، سلات) أبداً.',
                    items: [
                        { key: 'license_key', desc: 'مفتاح ترخيصك (مشفر، غير قابل للعكس)' },
                        { key: 'domain', desc: 'نطاق متجرك (مثال: mystore.dz)' },
                        { key: 'wp_version', desc: 'إصدار WordPress (لإحصاءات التوافق)' },
                        { key: 'plugin_version', desc: 'إصدار الإضافة المثبتة' },
                    ],
                },
                after: 'يستخدم هذا الطلب HTTPS مشفراً (TLS 1.3). مفتاحك يُشفَّر من جانب العميل — لا نخزن المفتاح أبداً بشكل واضح.',
            },
            {
                icon: 'Eye',
                color: 'bg-green-50 text-green-600',
                title: '٣. تحقق بنفسك — إثباتات تقنية',
                content: ['يمكنك التحقق من ادعاءاتنا مباشرة بـ 3 طرق:'],
                verifyMethods: [
                    { label: 'DevTools → Network', desc: 'افتح DevTools في متصفحك على متجرك. أنجز طلباً تجريبياً. لن تجد أي طلب نحو dz-ghost.com.' },
                    { label: 'سجلات الخادم', desc: 'فعّل سجلات الوصول لاستضافتك. ابحث عن اتصالات خارجية نحو نطاقاتنا أثناء المعاملات. لن تجد أياً.' },
                    { label: 'Query Monitor (إضافة)', desc: 'ثبّت Query Monitor على WordPress. لن يظهر أي طلب خارجي نحو نطاقاتنا أثناء معالجة الطلبات.' },
                ],
            },
            {
                icon: 'Shield',
                color: 'bg-violet-50 text-violet-600',
                title: '٤. Server-Side CAPI — بياناتك تبقى على خادمك',
                content: [
                    'يرسل Server-Side CAPI أحداثك <strong>مباشرة من خادمك إلى فيسبوك وتيك توك وسناب شات</strong>. DZ-Ghost يُعدّ هذا الإرسال ويُطلقه، لكنه لا يُعيد توجيه بياناتك.',
                ],
                capiFlow: {
                    label: 'تدفق CAPI',
                    from: 'خادمك',
                    arrow: '← مباشرة ←',
                    to: 'graph.facebook.com',
                    note: '↳ DZ-Ghost لا يُعيد توجيه بيانات CAPI. تذهب مباشرة منك إلى فيسبوك/تيك توك.',
                },
                after: 'رموز وصول CAPI الخاصة بك مُخزَّنة مشفرة في <strong>قاعدة بيانات WordPress الخاصة بك</strong>، محمية بمفتاحك السري. لا نراها أبداً.',
            },
            {
                icon: 'Lock',
                color: 'bg-amber-50 text-amber-600',
                title: '٥. البيانات التي تشاركها معنا طوعاً',
                content: ['عند الشراء أو التواصل مع الدعم، نجمع:'],
                list: [
                    '<strong>البريد الإلكتروني</strong> — لإرسال ترخيصك والتحديثات',
                    '<strong>الاسم</strong> — لتخصيص حسابك',
                    '<strong>اسم النطاق</strong> — للتحقق من ترخيصك وربطه',
                ],
                after: 'لا تُباع هذه البيانات ولا تُشارك أبداً. يمكنك طلب حذفها في أي وقت.',
            },
        ],
        contact: {
            title: 'أسئلة حول سياسة الخصوصية؟',
            desc: 'نحن شفافون ونجيب على جميع أسئلتك التقنية أو القانونية.',
            email: 'privacy@dz-ghost.com',
        },
    },
};

const iconMap = { Server, Lock, Eye, Shield };

const PrivacyPage = ({ lang = 'fr', setLang }) => {
    const c = t[lang] || t.fr;
    const isRtl = lang === 'ar';
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="min-h-screen bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Nav */}
            <nav className="border-b border-slate-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">
                        <ArrowLeft size={15} className={isRtl ? 'rotate-180' : ''} />
                        {c.backLink}
                    </Link>
                    <div className="flex items-center gap-3">
                        {setLang && (
                            <button
                                onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300 transition-all text-xs font-medium"
                            >
                                <Globe size={13} />
                                {c.langToggle}
                            </button>
                        )}
                        <img src={logoImg} alt="DZ-Ghost" className="h-8 w-auto" />
                    </div>
                </div>
            </nav>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">{c.eyebrow}</span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">{c.headline}</h1>
                    <p className="text-slate-500 text-base leading-relaxed max-w-2xl">{c.subtitle}</p>
                    <p className="text-xs text-slate-400 mt-4">{c.updated}</p>
                </motion.div>

                {/* "Never see" dark box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="mb-12 rounded-2xl bg-slate-950 p-6 sm:p-8"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                            <EyeOff size={20} className="text-indigo-400" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-3">{c.neverSee.title}</h3>
                            <div className="grid sm:grid-cols-2 gap-y-2 gap-x-6">
                                {c.neverSee.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                        <span className="text-slate-400 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Dynamic sections */}
                {c.sections.map((section, si) => {
                    const Icon = iconMap[section.icon] || Shield;
                    return (
                        <motion.div
                            key={si}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.4, delay: si * 0.05 }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${section.color}`}>
                                    <Icon size={18} />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                            </div>
                            <div className={`${isRtl ? 'pr-12' : 'pl-12'} text-slate-600 leading-relaxed space-y-3`}>
                                {section.content.map((p, pi) => (
                                    <p key={pi} dangerouslySetInnerHTML={{ __html: p }} />
                                ))}

                                {/* Data flow diagram */}
                                {section.flow && (
                                    <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">{section.flow.label}</p>
                                        <div className="flex flex-wrap items-center gap-2 text-sm font-mono text-slate-700">
                                            {section.flow.steps.map((step, si2) => (
                                                <React.Fragment key={si2}>
                                                    <span className={`border rounded px-2 py-1 text-xs ${si2 === 1 ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-slate-200'}`}>{step}</span>
                                                    {si2 < section.flow.steps.length - 1 && <span className="text-slate-400 text-xs">→</span>}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        <p className="text-xs text-slate-400 mt-2">{section.flow.note}</p>
                                    </div>
                                )}

                                {/* Proof box */}
                                {section.proofBox && (
                                    <div className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50 p-5">
                                        <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">{section.proofBox.label}</p>
                                        <div className="space-y-2">
                                            {section.proofBox.items.map((item, pi) => (
                                                <div key={pi} className="flex items-start gap-2.5">
                                                    <CheckCircle size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <span className="font-mono text-xs font-semibold text-slate-800">{item.key}</span>
                                                        <span className="text-xs text-slate-500 mx-2">—</span>
                                                        <span className="text-xs text-slate-600">{item.desc}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-indigo-100 flex items-start gap-2">
                                            <AlertCircle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                                            <p className="text-xs font-semibold text-red-600">{section.proofBox.warning}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Verify methods */}
                                {section.verifyMethods && (
                                    <div className="space-y-3 mt-2">
                                        {section.verifyMethods.map((m, mi) => (
                                            <div key={mi} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                                                <CheckCircle size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-slate-800 text-sm">{m.label}</p>
                                                    <p className="text-slate-600 text-sm mt-0.5">{m.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* CAPI flow */}
                                {section.capiFlow && (
                                    <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">{section.capiFlow.label}</p>
                                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-700">
                                            <span className="bg-white border border-slate-200 rounded px-2 py-1">{section.capiFlow.from}</span>
                                            <span className="text-slate-400">{section.capiFlow.arrow}</span>
                                            <span className="bg-blue-50 border border-blue-200 rounded px-2 py-1 text-blue-700">{section.capiFlow.to}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 mt-2">{section.capiFlow.note}</p>
                                    </div>
                                )}

                                {/* List items */}
                                {section.list && (
                                    <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                                        {section.list.map((item, li) => (
                                            <li key={li} dangerouslySetInnerHTML={{ __html: item }} />
                                        ))}
                                    </ul>
                                )}

                                {/* After text */}
                                {section.after && <p className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: section.after }} />}
                            </div>
                        </motion.div>
                    );
                })}

                {/* Contact */}
                <div className="mt-12 p-6 rounded-2xl border border-slate-100 bg-slate-50">
                    <h3 className="font-bold text-slate-900 mb-2">{c.contact.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{c.contact.desc}</p>
                    <a href={`mailto:${c.contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                        {c.contact.email} →
                    </a>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPage;
