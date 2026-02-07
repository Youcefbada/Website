export const content = {
    fr: {
        navbar: {
            logo: "DZ-GHOST",
            cta: "Obtenir la licence",
            language: "AR",
        },
        hero: {
            headline: "Ne Traquez Pas Juste. Dominez.",
            subheadline: "Le Premier Pixel Server-Side & Moteur Logistique IA pour le COD Algérien.",
            cta: "Obtenir l'Accès",
            notifications: ["Achat Vérifié", "Bot Bloqué", "Lead Hybrid"],
        },
        usVsThem: {
            title: "Pourquoi bâtir sur un terrain que vous ne possédez pas ?",
            rented: {
                title: "Terre Louée (SaaS/Shopify)",
                subtitle: "Vous êtes locataire.",
                items: ["Loyer Mensuel Infini", "Risque de Données", "Anxiété de Bannissement"]
            },
            kingdom: {
                title: "Votre Royaume (DZ-Ghost)",
                subtitle: "Vous êtes le Roi.",
                items: ["Paiement Unique", "Contrôle Data 100%", "Liberté Open Source"]
            }
        },
        dashboardShowcase: {
            title: "Contrôle Total. Un Seul Écran.",
        },
        detailedFeatures: {
            security: {
                title: "Core Tracking & Sécurité (The Ghost Engine)",
                items: [
                    { title: "Tracking Server-Side (CAPI)", desc: "Contourne les bloqueurs (iOS 14+) en envoyant les événements Achat, Lead et AddToCart directement depuis votre serveur." },
                    { title: "Qualité de Match 9/10", desc: "Chiffrement automatique (SHA256) des données client (Email, Tel, Ville) pour une précision maximale du pixel." },
                    { title: "Bouclier Anti-Bot", desc: "Pare-feu actif filtrant le trafic par User-Agent et IP, empêchant les outils d'espionnage de polluer vos données." },
                    { title: "Tracking WhatsApp Hybride", desc: "Traque un événement 'Lead' dès le clic sur le bouton WhatsApp, avant même l'ouverture du chat." }
                ]
            },
            conversion: {
                title: "Checkout & Conversion",
                items: [
                    { title: "Checkout One-Page COD", desc: "Remplace le checkout WooCommerce lent par un formulaire ultra-rapide injecté directement dans les pages produits." },
                    { title: "Offres sur Quantité (AOV)", desc: "Sélecteur natif 'Achetez X Obtenez Y' (ex: Achetez 2 = -500DA) pour encourager les achats groupés." },
                    { title: "Bouton Mobile Sticky", desc: "Bouton 'Acheter' fixé en bas de l'écran sur mobile pour augmenter le taux de clic." }
                ]
            },
            analytics: {
                title: "Intelligence & Analytics (IA)",
                items: [
                    { title: "The War Room", desc: "Tableau de bord centralisé visualisant KPI temps réel, taux de livraison et entonnoirs de vente." },
                    { title: "Auditeur de Campagne IA", desc: "Algorithme intelligent analysant vos pubs (ROAS, CTR, Fréquence) avec recommandations SCALE ou KILL." },
                    { title: "Carte de Performance Wilaya", desc: "Carte interactive montrant quelles wilayas ont les meilleurs taux de livraison vs retours." },
                    { title: "Gestionnaire Finance", desc: "Calcule votre Profit Net temps réel en soustrayant coûts produits et dépenses pubs du revenu." }
                ]
            },
            logistics: {
                title: "Logistique & Opérations",
                items: [
                    { title: "Base de Données Algérienne", desc: "Listes déroulantes intégrées pour 58 Wilayas et Baladiyas, éliminant les erreurs d'adresse." },
                    { title: "Logique d'Expédition Dynamique", desc: "Calcul automatique des prix différents pour 'À Domicile' vs 'Stop-Desk'." },
                    { title: "Intégration Transporteurs", desc: "API directe avec Yalidine, ZR Express, Procolis, Ecotrack pour expédier en un clic." },
                    { title: "Sync Google Sheets", desc: "Pousse instantanément les nouvelles commandes vers Google Sheets pour votre Call Center." },
                    { title: "Gestion des Commandes", desc: "Interface simplifiée pour le traitement en masse et la synchronisation des statuts." }
                ]
            },
            tools: {
                title: "Outils & Usabilité",
                items: [
                    { title: "Créateur de Produit", desc: "Interface simplifiée pour créer des produits sans le désordre de WooCommerce standard." },
                    { title: "Personnalisation Design", desc: "Onglet dédié pour personnaliser couleurs et layout du formulaire à votre image." }
                ]
            }
        },
        techFlow: {
            title: "Comment Le Fantôme Opère",
            steps: [
                { title: "Commande Client", desc: "L'utilisateur passe commande." },
                { title: "Chiffrement SHA256", desc: "Sécurisation des données." },
                { title: "Moteur Ghost", desc: "Contournement iOS 14 & AdBlockers." },
                { title: "API Facebook", desc: "Transmission Server-to-Server 100%." },
            ],
        },
        pricing: {
            title: "L'Investissement",
            toggle: { yearly: "Annuel", lifetime: "À Vie" },
            plans: [
                {
                    name: "Le Soldat",
                    price: "14,900 DA",
                    period: "/ an",
                    features: ["1 Domaine", "Audit IA Complet", "Tracking Server-Side", "Support Standard"],
                    cta: "Commencer la Mission",
                    highlight: false
                },
                {
                    name: "L'Escouade",
                    price: "59,000 DA",
                    period: "/ an",
                    features: ["10 Domaines", "Support Prioritaire", "Marque Blanche", "Gestion Clients"],
                    cta: "Équiper l'Escouade",
                    highlight: true,
                    tag: "Meilleure Valeur"
                },
                {
                    name: "La Légende",
                    price: "45,000 DA",
                    period: "/ une fois",
                    features: ["1 Domaine", "Mises à Jour à Vie", "Pas de Frais Récurrents"],
                    cta: "Sécuriser l'Héritage",
                    highlight: false,
                    special: true
                }
            ]
        },
        socialProof: {
            title: "De la Perte au ROAS x4",
            stat1: "90% Qualité de Match",
            stat2: "-30% Commandes Fake",
        },
        whyUs: {
            title: "Pourquoi DZ-Ghost et Pas Les Autres ?",
            subtitle: "La Différence Est Claire.",
            items: [
                { title: "Construit Pour l'Algérie", desc: "Pas un outil américain adapté. Conçu dès le départ pour le COD, les Wilayas et les transporteurs algériens.", icon: "flag" },
                { title: "Vous Êtes Propriétaire", desc: "Installez sur votre serveur. Vos données, votre entreprise, votre liberté. Pas de dépendance SaaS.", icon: "key" },
                { title: "Intelligence Intégrée", desc: "L'IA analyse vos campagnes et données automatiquement. Pas besoin d'être expert en marketing.", icon: "brain" },
                { title: "Support Local", desc: "Équipe francophone/arabophone qui comprend le marché local et vos défis quotidiens.", icon: "headphones" },
                { title: "Mises à Jour Constantes", desc: "Nous évoluons avec les changements de Facebook, iOS et les transporteurs. Vous restez toujours à jour.", icon: "refresh" },
                { title: "Communauté Active", desc: "Rejoignez des centaines de vendeurs COD algériens qui partagent stratégies et bonnes pratiques.", icon: "users" }
            ]
        },
        stats: {
            title: "Les Chiffres Parlent",
            items: [
                { value: "500+", label: "Boutiques Actives" },
                { value: "2M+", label: "Commandes Traitées" },
                { value: "9/10", label: "Match Quality Score" },
                { value: "4x", label: "ROAS Moyen Après Installation" }
            ]
        },
        testimonials: {
            title: "Ce Que Disent Nos Clients",
            items: [
                { name: "Ahmed K.", role: "Vendeur COD - Alger", quote: "Avant DZ-Ghost, je perdais 40% de mon budget pub. Maintenant mon ROAS est passé de 1.2 à 4.5. C'est un autre monde." },
                { name: "Sarah M.", role: "Agence E-commerce", quote: "On gère 15 boutiques avec la licence Escouade. Le temps gagné sur la logistique est incroyable." },
                { name: "Youcef B.", role: "Dropshipper - Oran", quote: "L'intégration Yalidine seule vaut le prix. Un clic et c'est expédié. Plus d'erreurs manuelles." }
            ]
        },
        faq: {
            title: "Questions Fréquentes",
            items: [
                { q: "Est-ce que ça marche avec mon thème WordPress ?", a: "Oui, DZ-Ghost est compatible avec tous les thèmes WordPress/WooCommerce. Le checkout s'injecte automatiquement." },
                { q: "J'ai besoin de compétences techniques ?", a: "Non. L'installation prend 5 minutes. Téléversez le plugin, activez, configurez votre pixel. C'est tout." },
                { q: "Comment fonctionne le support ?", a: "Support par WhatsApp et email en français/arabe. Réponse sous 24h pour les licences standard, prioritaire pour les Escouades." },
                { q: "Puis-je migrer depuis Shopify ?", a: "Absolument. On vous aide à transférer vos produits et données. C'est inclus dans l'installation." },
                { q: "Et si Facebook change encore son API ?", a: "On met à jour le plugin à chaque changement. Vous recevez les updates automatiquement." }
            ]
        },
        ctaBanner: {
            title: "Prêt à Dominer Votre Marché ?",
            subtitle: "Rejoignez 500+ vendeurs COD qui ont fait le switch.",
            cta: "Commencer Maintenant",
            secondary: "Voir la Démo"
        },
        footer: {
            copyright: "© 2026 DZ-Ghost. La Machine de Guerre E-commerce.",
            links: ["Documentation", "Support", "Tarifs"],
        },
    },
    ar: {
        navbar: {
            logo: "DZ-GHOST",
            cta: "احصل على النظام",
            language: "FR",
        },
        hero: {
            headline: "لا تكتفِ بالمشاهدة. سيطر على السوق.",
            subheadline: "أول نظام تتبع Server-Side ومحرك لوجستي ذكي مصمم خصيصاً للتجارة الإلكترونية (COD) في الجزائر.",
            cta: "ابدأ الهيمنة",
            notifications: ["طلب مؤكد ✅", "تم حظر بوت 🤖", "عميل عالي الجودة 💎"],
        },
        usVsThem: {
            title: "لماذا تبني إمبراطوريتك على أرض لا تملكها؟",
            rented: {
                title: "أرض مستأجرة (منصات SaaS)",
                subtitle: "أنت مجرد مستأجر.",
                items: ["استنزاف شهري مستمر", "بياناتك مكشوفة للمنصة", "كابوس الحظر المفاجئ"]
            },
            kingdom: {
                title: "مملكتك الخاصة (DZ-Ghost)",
                subtitle: "أنت المالك والحاكم.",
                items: ["استثمار لمرة واحدة فقط", "تحكم كامل في بياناتك", "حرية مطلقة"]
            }
        },
        dashboardShowcase: {
            title: "تحكم مطلق. واجهة واحدة.",
        },
        detailedFeatures: {
            security: {
                title: "محرك الشبح (The Ghost Engine)",
                items: [
                    { title: "تتبع Server-Side CAPI", desc: "اختراق حظر iOS 14+ عبر إرسال البيانات مباشرة من السيرفر، لضمان دقة لا تضاهى." },
                    { title: "جودة مطابقة 9.5/10", desc: "تشفير عسكري (SHA256) لبيانات العملاء لرفع دقة استهداف فيسبوك." },
                    { title: "الدرع المضاد للبوتات", desc: "حماية استباقية تحظر الروبوتات وأدوات التجسس قبل وصولها لمتجرك." },
                    { title: "تتبع واتساب الهجين", desc: "رصد دقيق لحدث 'Lead' لحظة النقر، لضمان عدم ضياع أي عميل محتمل." }
                ]
            },
            conversion: {
                title: "أنظمة التحويل والدفع",
                items: [
                    { title: "نموذج دفع سريع (One-Page)", desc: "تجربة شراء انسيابية في صفحة واحدة تضاعف معدلات التحويل." },
                    { title: "عروض زيادة السلة (Upsell)", desc: "نظام ذكي للعروض (اشتري X واحصل على Y) يرفع قيمة الطلب تلقائياً." },
                    { title: "زر الشراء العائم", desc: "زر ثابت يلاحق العميل في الجوال لتحفيزه على إتمام الطلب." }
                ]
            },
            analytics: {
                title: "ذكاء الأعمال والتحليلات",
                items: [
                    { title: "غرفة العمليات المركزية", desc: "لوحة قيادة تعرض نبض مشروعك: المبيعات، الأرباح، ونسب التوصيل." },
                    { title: "المستشار الإعلاني (AI)", desc: "خوارزمية تحلل أداء إعلاناتك وتنصحك: هل تزيد الميزانية أم توقف الحملة؟" },
                    { title: "الخريطة الحرارية للولايات", desc: "رؤية واضحة لأداء كل ولاية: أين تبيع أكثر؟ وأين تخسر في التوصيل؟" },
                    { title: "مدير الأرباح الصافية", desc: "حساب دقيق لصافي ربحك بعد خصم تكاليف السلعة والإعلانات." }
                ]
            },
            logistics: {
                title: "المنظومة اللوجستية",
                items: [
                    { title: "قاعدة بيانات 58 ولاية", desc: "قوائم دقيقة للولايات والبلديات تمنع أخطاء العناوين وتسهل التوصيل." },
                    { title: "تسعير توصيل ديناميكي", desc: "حساب تكلفة الشحن تلقائياً بناءً على الولاية ونوع التوصيل (مكتب/منزل)." },
                    { title: "ربط شركات الشحن", desc: "تكامل API فوري مع (Yalidine, ZR, Procolis) - أرسل الطلبات بنقرة زر." },
                    { title: "المزامنة مع Google Sheets", desc: "ترحيل لحظي للطلبات لفرق التأكيد (Call Center) دون تدخل يدوي." },
                    { title: "إدارة الطلبات الجماعية", desc: "تغيير حالات الطلبات وطباعة البوليصات لمئات الطلبات دفعة واحدة." }
                ]
            },
            tools: {
                title: "أدوات الإنتاجية",
                items: [
                    { title: "صانع المنتجات السريع", desc: "أضف منتجاتك في ثوانٍ مع واجهة مخصصة تركز على ما يهم فقط." },
                    { title: "محرر الهوية البصرية", desc: "تحكم كامل في ألوان وتصميم صفحة الشراء لتعكس هوية علامتك." }
                ]
            }
        },
        techFlow: {
            title: "آلية عمل النظام",
            steps: [
                { title: "استلام الطلب", desc: "تجربة سلسة للعميل." },
                { title: "تشفير البيانات", desc: "حماية قصوى SHA256." },
                { title: "محرك الشبح", desc: "اختراق الحجب والتتبع." },
                { title: "إرسال لفيسبوك", desc: "تزامن سيرفر فوري." },
            ],
        },
        pricing: {
            title: "خيارات الاستثمار",
            toggle: { yearly: "سنوي", lifetime: "مدى الحياة" },
            plans: [
                {
                    name: "الجندي",
                    price: "14,900 دج",
                    period: "/ سنوياً",
                    features: ["نطاق واحد", "تدقيق إعلاني AI", "تتبع Server-Side", "دعم فني أساسي"],
                    cta: "ابدأ رحلتك",
                    highlight: false
                },
                {
                    name: "الفرقة (Squad)",
                    price: "59,000 دج",
                    period: "/ سنوياً",
                    features: ["10 نطاقات", "دعم فني VIP", "إزالة الشعار", "نظام إدارة الفريق"],
                    cta: "جهز فريقك",
                    highlight: true,
                    tag: "الأكثر طلباً"
                },
                {
                    name: "الأسطورة",
                    price: "45,000 دج",
                    period: "/ تدفع مرة واحدة",
                    features: ["نطاق واحد", "تحديثات مجانية للأبد", "بدون اشتراك سنوي"],
                    cta: "امتلك النظام",
                    highlight: false,
                    special: true
                }
            ]
        },
        socialProof: {
            title: "نتائج تتحدث عن نفسها",
            stat1: "90% دقة المطابقة",
            stat2: "-30% طلبات وهمية",
        },
        whyUs: {
            title: "لماذا يختار المحترفون DZ-Ghost؟",
            subtitle: "لأننا نفهم التجارة في الجزائر.",
            items: [
                { title: "صُنع في الجزائر", desc: "نظام مبني خصيصاً ليتوافق مع عقلية المستهلك الجزائري وشركات الشحن المحلية.", icon: "flag" },
                { title: "الملكية الكاملة", desc: "بياناتك ملكك وحدك. لا تشارك أسرارك التجارية مع أي منصة.", icon: "key" },
                { title: "الذكاء الاصطناعي", desc: "النظام يعمل معك كمحلل بيانات محترف لتحسين نتائجك باستمرار.", icon: "brain" },
                { title: "دعم محلي محترف", desc: "فريق جزائري يفهم مشاكلك ويتحدث لغتك، جاهز لمساعدتك.", icon: "headphones" },
                { title: "تطوير مستمر", desc: "تحديثات دورية لمواكبة تغيرات فيسبوك والسوق، مجاناً.", icon: "refresh" },
                { title: "مجتمع النخبة", desc: "انضم لأقوى مجتمع تجار إلكترونيين في الجزائر.", icon: "users" }
            ]
        },
        stats: {
            title: "لغة الأرقام",
            items: [
                { value: "+500", label: "متجر نشط" },
                { value: "+2M", label: "طلب ناجح" },
                { value: "9.5/10", label: "جودة المطابقة" },
                { value: "x4", label: "متوسط العائد (ROAS)" }
            ]
        },
        testimonials: {
            title: "شركاء النجاح",
            items: [
                { name: "أحمد ك.", role: "تاجر إلكتروني - الجزائر", quote: "كنت أخسر 40% من ميزانيتي بسبب التتبع السيء. مع DZ-Ghost، تحول الـ ROAS من 1.5 إلى 4.5 خلال أسبوع." },
                { name: "سارة م.", role: "مديرة تسويق", quote: "إدارة 15 متجر كانت كابوساً. الآن مع لوحة تحكم Squad، كل شيء منظم واللوجستيات أوتوماتيكية." },
                { name: "يوسف ب.", role: "دروب شيبر - وهران", quote: "ربط ياليدين وحده يوفر علي ساعتين يومياً. النظام يستحق كل دينار." }
            ]
        },
        faq: {
            title: "أسئلة شائعة",
            items: [
                { q: "هل يعمل مع القالب الحالي الخاص بي؟", a: "نعم، DZ-Ghost يعمل بتقنية الحقن البرمجي، فهو متوافق مع أي قالب ووكومرس تستخدمه." },
                { q: "هل أحتاج لخبرة برمجية؟", a: "إطلاقاً. التثبيت عبارة عن إضافة ووردبريس عادية. ارفع، فعل، وابدأ البيع في 5 دقائق." },
                { q: "كيف هو مستوى الدعم الفني؟", a: "نقدم دعماً سريعاً عبر واتساب والبريد الإلكتروني، مع أولوية قصوى لباقات الفرقة." },
                { q: "هل يمكنني الانتقال من شوبيفاي؟", a: "بكل تأكيد. نوفر أدوات مجانية لنقل منتجاتك وبياناتك إلى نظامك الجديد بسلاسة." },
                { q: "ماذا عن تحديثات فيسبوك؟", a: "فريقنا الهندسي يتابع تحديثات فيسبوك يومياً ويصدر تحديثات فورية للنظام لضمان الاستقرار." }
            ]
        },
        ctaBanner: {
            title: "جاهز للانتقال للمستوى التالي؟",
            subtitle: "انضم لأكثر من 500 تاجر جزائري يصنعون الأرقام الآن.",
            cta: "ابدأ الآن",
            secondary: "شاهد العرض"
        },
        footer: {
            copyright: "© 2026 DZ-Ghost. القوة الضاربة للتجارة الإلكترونية.",
            links: ["التوثيق", "الدعم الفني", "الأسعار"],
        },
    },
};
