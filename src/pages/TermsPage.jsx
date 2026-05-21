import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, RefreshCw, AlertTriangle, ArrowLeft, CheckCircle, CreditCard, Headphones, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

const iconMap = { FileText, Shield, RefreshCw, AlertTriangle, CreditCard, Headphones };

const t = {
    fr: {
        eyebrow: "Conditions d'utilisation",
        headline: "Conditions Générales d'Utilisation",
        subtitle: "En achetant ou en utilisant le plugin DZ-Ghost, vous acceptez les conditions suivantes. Veuillez les lire attentivement.",
        updated: "Dernière mise à jour : Mai 2026 · Version 2.0",
        back: "Retour au site",
        toggle: "AR",
        contact: { title: "Questions sur les conditions d'utilisation ?", desc: "Notre équipe répond à toutes vos questions légales ou commerciales.", email: "legal@dz-ghost.com" },
        sections: [
            {
                icon: "FileText", color: "bg-blue-50 text-blue-600",
                title: "1. Définitions",
                items: [
                    { term: "DZ-Ghost", def: "désigne le plugin WordPress et les services associés développés par DZ-Ghost." },
                    { term: "Licence", def: "désigne le droit d'utilisation du plugin accordé après achat." },
                    { term: "Utilisateur / Licencié", def: "désigne la personne ou l'entité ayant acheté et installé le plugin." },
                    { term: "Site", def: "désigne le site WordPress/WooCommerce sur lequel le plugin est installé." },
                ],
            },
            {
                icon: "Shield", color: "bg-indigo-50 text-indigo-600",
                title: "2. Licence d'utilisation",
                intro: "L'achat de DZ-Ghost vous accorde une <strong>licence commerciale non-exclusive et non-transférable</strong> pour utiliser le plugin conformément aux termes suivants :",
                plans: [
                    { name: "Le Soldat (14 900 DA / an)", items: ["Installation sur 1 domaine actif", "Toutes les fonctionnalités du plugin", "Mises à jour pendant la durée de la licence", "Support standard par WhatsApp/Email"] },
                    { name: "L'Escouade (59 000 DA / an)", items: ["Installation sur 10 domaines actifs", "Marque blanche (suppression du branding DZ-Ghost)", "Support prioritaire", "Accès anticipé aux nouvelles fonctionnalités", "Gestion multi-clients depuis un tableau de bord"] },
                    { name: "Le Royaume (45 000 DA, paiement unique)", items: ["Installation sur 1 domaine actif", "Mises à jour à vie (sans abonnement annuel)", "Toutes les fonctionnalités actuelles et futures"] },
                ],
                forbidden: {
                    title: "Usages interdits par toutes les licences :",
                    items: ["Redistribuer, revendre ou partager le plugin ou la clé de licence", "Décompiler, désassembler ou tenter de reverse-engineer le code chiffré", "Utiliser le plugin pour des activités illégales ou contraires à la législation algérienne", "Utiliser sur plus de domaines que ce qu'autorise la licence"],
                },
            },
            {
                icon: "CreditCard", color: "bg-green-50 text-green-600",
                title: "3. Paiement et renouvellement",
                intro: 'Les tarifs affichés sont en <strong>Dinars Algériens (DA)</strong> et incluent toutes les taxes applicables.',
                bullets: [
                    "Les licences annuelles expirent 12 mois après l'achat. Le plugin continue de fonctionner après expiration, mais les mises à jour et le support sont suspendus jusqu'au renouvellement.",
                    "La licence \"Le Royaume\" (paiement unique) n'est pas soumise au renouvellement.",
                    "Les renouvellements sont au même tarif, sauf notification de changement de prix 30 jours à l'avance.",
                    "En cas de non-paiement, la validation de licence sera désactivée et l'accès aux fonctionnalités premium sera suspendu.",
                ],
            },
            {
                icon: "RefreshCw", color: "bg-amber-50 text-amber-600",
                title: "4. Politique de remboursement",
                intro: "Nous offrons une <strong>garantie satisfait ou remboursé de 14 jours</strong> à partir de la date d'achat, sous réserve des conditions suivantes :",
                bullets: [
                    "La demande de remboursement doit être soumise dans les 14 jours suivant l'achat.",
                    "Vous devez avoir contacté notre support pour tenter de résoudre votre problème avant de demander un remboursement.",
                    "Les remboursements ne sont pas accordés si le plugin fonctionne correctement mais ne répond pas à vos attentes personnelles non mentionnées dans la documentation.",
                    "En cas de fraude avérée ou d'abus de la politique de remboursement, DZ-Ghost se réserve le droit de refuser la demande.",
                ],
                after: "Pour initier un remboursement, contactez-nous à <strong>support@dz-ghost.com</strong> avec votre numéro de commande.",
            },
            {
                icon: "AlertTriangle", color: "bg-orange-50 text-orange-600",
                title: "5. Limitation de responsabilité",
                intro: 'DZ-Ghost est fourni <strong>"tel quel"</strong>. Dans les limites permises par la loi :',
                bullets: [
                    "DZ-Ghost ne peut être tenu responsable des pertes de revenus, pertes de données, ou dommages indirects liés à l'utilisation ou à l'incapacité d'utiliser le plugin.",
                    "La responsabilité totale de DZ-Ghost ne peut excéder le montant payé pour la licence en cours.",
                    "DZ-Ghost n'est pas responsable des modifications des API tierces (Facebook, TikTok, transporteurs) qui pourraient temporairement affecter les fonctionnalités.",
                    "Il est de votre responsabilité de maintenir votre hébergement, WordPress et WooCommerce à jour pour garantir la compatibilité.",
                ],
            },
            {
                icon: "Headphones", color: "bg-violet-50 text-violet-600",
                title: "6. Support et mises à jour",
                bullets: [
                    "Le support est disponible par WhatsApp et email en français et en arabe.",
                    "Le délai de réponse standard est de 24h (jours ouvrables). Les licences Escouade bénéficient d'un support prioritaire.",
                    "Les mises à jour de compatibilité avec les nouvelles versions de WordPress/WooCommerce et les API partenaires sont incluses dans la licence active.",
                    "DZ-Ghost se réserve le droit de modifier, améliorer ou retirer des fonctionnalités dans les mises à jour, avec notification préalable pour les changements majeurs.",
                ],
            },
            {
                icon: "FileText", color: "bg-slate-100 text-slate-600",
                title: "7. Droit applicable et litiges",
                paras: [
                    "Ces conditions sont régies par la <strong>législation algérienne</strong>. En cas de litige, les parties s'engagent à rechercher une solution amiable dans un délai de 30 jours avant tout recours judiciaire.",
                    "DZ-Ghost se réserve le droit de modifier ces conditions à tout moment. Les utilisateurs actifs seront notifiés par email au moins 30 jours avant toute modification substantielle.",
                ],
            },
        ],
    },
    ar: {
        eyebrow: "شروط الاستخدام",
        headline: "الشروط والأحكام العامة للاستخدام",
        subtitle: "بشراء أو استخدام إضافة DZ-Ghost، فإنك توافق على الشروط التالية. يرجى قراءتها بعناية.",
        updated: "آخر تحديث: مايو 2026 · الإصدار 2.0",
        back: "العودة إلى الموقع",
        toggle: "FR",
        contact: { title: "أسئلة حول شروط الاستخدام؟", desc: "فريقنا يجيب على جميع أسئلتك القانونية أو التجارية.", email: "legal@dz-ghost.com" },
        sections: [
            {
                icon: "FileText", color: "bg-blue-50 text-blue-600",
                title: "١. التعريفات",
                items: [
                    { term: "DZ-Ghost", def: "يشير إلى إضافة WordPress والخدمات المرتبطة بها التي طوّرها فريق DZ-Ghost." },
                    { term: "الترخيص", def: "يشير إلى حق استخدام الإضافة الممنوح بعد الشراء." },
                    { term: "المستخدم / المرخَّص له", def: "يشير إلى الشخص أو الجهة التي اشترت الإضافة وثبّتتها." },
                    { term: "الموقع", def: "يشير إلى موقع WordPress/WooCommerce الذي ثُبِّتت عليه الإضافة." },
                ],
            },
            {
                icon: "Shield", color: "bg-indigo-50 text-indigo-600",
                title: "٢. رخصة الاستخدام",
                intro: "يمنحك شراء DZ-Ghost <strong>ترخيصاً تجارياً غير حصري وغير قابل للنقل</strong> لاستخدام الإضافة وفق الشروط التالية:",
                plans: [
                    { name: "الجندي (14,900 دج / سنوياً)", items: ["التثبيت على نطاق واحد نشط", "جميع ميزات الإضافة", "التحديثات طوال مدة الترخيص", "الدعم الأساسي عبر واتساب والبريد الإلكتروني"] },
                    { name: "الفرقة (59,000 دج / سنوياً)", items: ["التثبيت على 10 نطاقات نشطة", "إزالة الشعار (White Label)", "دعم VIP", "وصول مبكر للميزات الجديدة", "إدارة متعددة العملاء من لوحة تحكم واحدة"] },
                    { name: "المملكة (45,000 دج، دفعة واحدة)", items: ["التثبيت على نطاق واحد نشط", "تحديثات مجانية مدى الحياة (بدون اشتراك سنوي)", "جميع الميزات الحالية والمستقبلية"] },
                ],
                forbidden: {
                    title: "الاستخدامات المحظورة في جميع التراخيص:",
                    items: ["إعادة توزيع أو بيع أو مشاركة الإضافة أو مفتاح الترخيص", "فك تشفير أو تفكيك الكود أو محاولة عكس هندسته", "استخدام الإضافة لأنشطة غير قانونية أو مخالفة للتشريع الجزائري", "الاستخدام على عدد نطاقات أكبر مما يسمح به الترخيص"],
                },
            },
            {
                icon: "CreditCard", color: "bg-green-50 text-green-600",
                title: "٣. الدفع والتجديد",
                intro: 'الأسعار المعروضة بالدينار الجزائري (دج) وتشمل جميع الضرائب المطبقة.',
                bullets: [
                    "تنتهي التراخيص السنوية بعد 12 شهراً من الشراء. تستمر الإضافة في العمل بعد انتهاء الصلاحية، لكن التحديثات والدعم يتوقفان حتى التجديد.",
                    "ترخيص \"المملكة\" (دفعة واحدة) لا يخضع للتجديد.",
                    "تجديدات الترخيص بنفس السعر، إلا في حالة إشعار بتغيير السعر قبل 30 يوماً.",
                    "في حالة عدم الدفع، سيُعطَّل التحقق من الترخيص وتُوقَف الميزات المميزة.",
                ],
            },
            {
                icon: "RefreshCw", color: "bg-amber-50 text-amber-600",
                title: "٤. سياسة الاسترداد",
                intro: "نقدم <strong>ضمان الرضا أو استرداد المال خلال 14 يوماً</strong> من تاريخ الشراء، وفق الشروط التالية:",
                bullets: [
                    "يجب تقديم طلب الاسترداد خلال 14 يوماً من تاريخ الشراء.",
                    "يجب التواصل مع الدعم أولاً لمحاولة حل المشكلة قبل طلب الاسترداد.",
                    "لا يُمنح الاسترداد إذا كانت الإضافة تعمل بشكل صحيح لكنها لا تلبي توقعاتك الشخصية غير المذكورة في الوثائق.",
                    "في حالة الاحتيال أو إساءة استخدام سياسة الاسترداد، يحق لـ DZ-Ghost رفض الطلب.",
                ],
                after: "لبدء طلب الاسترداد، تواصل معنا على <strong>support@dz-ghost.com</strong> مع رقم طلبك.",
            },
            {
                icon: "AlertTriangle", color: "bg-orange-50 text-orange-600",
                title: "٥. تحديد المسؤولية",
                intro: 'تُقدَّم إضافة DZ-Ghost <strong>"كما هي"</strong>. في حدود ما يسمح به القانون:',
                bullets: [
                    "لا يتحمل DZ-Ghost المسؤولية عن خسائر الإيرادات أو البيانات أو الأضرار غير المباشرة المرتبطة باستخدام أو عدم إمكانية استخدام الإضافة.",
                    "لا تتجاوز المسؤولية الإجمالية لـ DZ-Ghost المبلغ المدفوع للترخيص الحالي.",
                    "لا يتحمل DZ-Ghost المسؤولية عن تغييرات APIs الطرف الثالث (فيسبوك، تيك توك، شركات الشحن) التي قد تؤثر مؤقتاً على الوظائف.",
                    "تقع على عاتقك مسؤولية الحفاظ على تحديث استضافتك و WordPress و WooCommerce لضمان التوافق.",
                ],
            },
            {
                icon: "Headphones", color: "bg-violet-50 text-violet-600",
                title: "٦. الدعم الفني والتحديثات",
                bullets: [
                    "الدعم متاح عبر واتساب والبريد الإلكتروني باللغتين العربية والفرنسية.",
                    "وقت الاستجابة المعتاد 24 ساعة (أيام عمل). تراخيص الفرقة تستفيد من الدعم المُفضَّل.",
                    "تحديثات التوافق مع الإصدارات الجديدة من WordPress/WooCommerce وAPIs الشركاء مشمولة في الترخيص النشط.",
                    "يحتفظ DZ-Ghost بحق تعديل الميزات أو تحسينها أو إزالتها في التحديثات، مع إشعار مسبق للتغييرات الجوهرية.",
                ],
            },
            {
                icon: "FileText", color: "bg-slate-100 text-slate-600",
                title: "٧. القانون المطبق والنزاعات",
                paras: [
                    "تخضع هذه الشروط <strong>للتشريع الجزائري</strong>. في حالة أي نزاع، تلتزم الأطراف بالسعي للحل الودي خلال 30 يوماً قبل اللجوء للقضاء.",
                    "يحتفظ DZ-Ghost بحق تعديل هذه الشروط في أي وقت. سيُبلَّغ المستخدمون النشطون بالبريد الإلكتروني قبل 30 يوماً على الأقل من أي تعديل جوهري.",
                ],
            },
        ],
    },
};

const TermsPage = ({ lang = 'fr', setLang }) => {
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
                        {c.back}
                    </Link>
                    <div className="flex items-center gap-3">
                        {setLang && (
                            <button
                                onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 text-slate-500 hover:text-slate-700 transition-all text-xs font-medium"
                            >
                                <Globe size={13} />
                                {c.toggle}
                            </button>
                        )}
                        <img src={logoImg} alt="DZ-Ghost" className="h-8 w-auto" />
                    </div>
                </div>
            </nav>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-14">
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">{c.eyebrow}</span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">{c.headline}</h1>
                    <p className="text-slate-500 text-base leading-relaxed max-w-2xl">{c.subtitle}</p>
                    <p className="text-xs text-slate-400 mt-4">{c.updated}</p>
                </motion.div>

                {/* Dynamic bilingual sections */}
                {c.sections.map((section, si) => {
                    const Icon = iconMap[section.icon] || FileText;
                    return (
                        <motion.div key={si} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.4, delay: si * 0.05 }} className="mb-12">
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${section.color}`}>
                                    <Icon size={18} />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                            </div>
                            <div className={`${isRtl ? 'pr-12' : 'pl-12'} text-slate-600 leading-relaxed space-y-3`}>
                                {/* Intro paragraph */}
                                {section.intro && <p dangerouslySetInnerHTML={{ __html: section.intro }} />}

                                {/* Term definitions */}
                                {section.items && (
                                    <ul className="space-y-2 text-sm">
                                        {section.items.map((item, i) => (
                                            <li key={i}><strong>{item.term}</strong> — {item.def}</li>
                                        ))}
                                    </ul>
                                )}

                                {/* License plan cards */}
                                {section.plans && (
                                    <div className="space-y-4 mt-4">
                                        {section.plans.map((plan, i) => (
                                            <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                                                <p className="font-semibold text-slate-800 text-sm mb-3">{plan.name}</p>
                                                <ul className="space-y-1.5">
                                                    {plan.items.map((a, j) => (
                                                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                                                            <CheckCircle size={13} className="text-green-500 flex-shrink-0" />
                                                            {a}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Forbidden uses */}
                                {section.forbidden && (
                                    <div className="mt-4 rounded-xl border border-red-100 bg-red-50 p-4">
                                        <p className="text-sm font-semibold text-red-700 mb-2">{section.forbidden.title}</p>
                                        <ul className="space-y-1 text-sm text-red-600">
                                            {section.forbidden.items.map((item, i) => (
                                                <li key={i}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Bullet list */}
                                {section.bullets && (
                                    <ul className="space-y-2 text-sm mt-2">
                                        {section.bullets.map((b, i) => <li key={i}>• {b}</li>)}
                                    </ul>
                                )}

                                {/* Paragraphs */}
                                {section.paras && section.paras.map((p, i) => (
                                    <p key={i} className={i > 0 ? 'mt-2 text-sm' : ''} dangerouslySetInnerHTML={{ __html: p }} />
                                ))}

                                {/* After text */}
                                {section.after && <p className="mt-3 text-sm" dangerouslySetInnerHTML={{ __html: section.after }} />}
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

export default TermsPage;
