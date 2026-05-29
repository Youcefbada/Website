export const content = {
    fr: {
        navbar: {
            logo: "DZ-GHOST",
            cta: "Obtenir la licence",
            language: "AR",
        },
        hero: {
            eyebrow: "Le Plugin WordPress COD #1 en Algérie",
            headline: "Le Plugin WordPress qui double les ventes COD pour l'Algérie",
            subheadline: "Checkout ultra-rapide, confirmation d'équipe, 22 transporteurs et Server-Side CAPI — tout ce dont votre boutique WooCommerce a besoin, en un seul plugin.",
            cta: "Démarrer Gratuitement",
            ctaSecondary: "Voir la Démo",
            trustBadges: ["22 Transporteurs Intégrés", "58 Wilayas Couvertes", "Support FR/AR"],
        },
        socialProofStrip: {
            label: "Ils nous font confiance",
            stats: [
                { value: "22", label: "Transporteurs intégrés" },
                { value: "58", label: "Wilayas couvertes" },
                { value: "25", label: "Modules admin" },
                { value: "9/10", label: "Match Quality Score" },
            ]
        },
        platformOverview: {
            eyebrow: "Le Plugin Tout-en-Un",
            title: "Tout ce dont vous avez besoin, en un seul plugin",
            subtitle: "DZ-Ghost s'installe en 5 minutes sur WooCommerce et couvre l'intégralité du cycle de vie de vos commandes COD.",
            pillars: [
                {
                    icon: "ShoppingCart",
                    title: "Checkout & Conversion",
                    desc: "One-page COD checkout, offres sur quantité, suivi WhatsApp hybride et récupération des paniers abandonnés.",
                    color: "indigo"
                },
                {
                    icon: "Truck",
                    title: "Opérations & Logistique",
                    desc: "Bureau de confirmation, 22 transporteurs algériens avec auto-tracking, et gestion complète du cycle de vie des commandes.",
                    color: "violet"
                },
                {
                    icon: "BarChart3",
                    title: "Tracking & Intelligence",
                    desc: "Server-Side CAPI (FB/TikTok/Snap), War Room dashboard, auditeur IA et carte interactive par wilaya.",
                    color: "purple"
                }
            ]
        },
        checkoutSection: {
            eyebrow: "Checkout & Conversion",
            title: "Un checkout COD qui convertit vraiment",
            subtitle: "Remplacez le checkout WooCommerce lent par une expérience d'achat fluide, conçue pour le marché algérien.",
            features: [
                { title: "One-Page COD Checkout", desc: "Formulaire ultra-rapide injecté dans vos pages produits. 58 wilayas + communes en listes déroulantes intelligentes." },
                { title: "Offres sur Quantité (AOV)", desc: "Sélecteur natif 'Achetez 2 = -500DA' pour augmenter la valeur moyenne des commandes automatiquement." },
                { title: "Bouton Sticky Mobile", desc: "Bouton d'achat fixé en bas de l'écran sur mobile pour maximiser les clics et le taux de conversion." },
                { title: "Récupération de Paniers", desc: "Suivi et relance automatique des clients qui n'ont pas finalisé leur commande." },
                { title: "Commande via WhatsApp", desc: "Tracking hybride de l'événement Lead dès le clic WhatsApp, avant même l'ouverture du chat." },
            ]
        },
        operationsSection: {
            eyebrow: "Opérations & Logistique",
            title: "De la confirmation à la livraison, automatisé",
            subtitle: "Un bureau de confirmation complet pour vos équipes call center, connecté à 22 transporteurs algériens.",
            features: [
                { title: "Bureau de Confirmation", desc: "Interface dédiée pour les équipes call center avec rôles personnalisés (confirmation_agent), logs d'appels et workflow structuré." },
                { title: "22 Transporteurs Algériens", desc: "API directe avec Yalidine, ZR Express, Procolis, Ecotrack, Maystro, Guépex et 16 autres. Expédiez en un clic." },
                { title: "Auto-Tracking Horaire", desc: "Synchronisation automatique des statuts de livraison via WP-Cron toutes les heures pour 50 commandes expédiées." },
                { title: "Cycle de Vie Complet", desc: "Nouvelle → Appel 1 → Appel 2 → Appel 3 → Confirmée / Retour → Expédiée → Livrée. Chaque étape trackée en temps réel." },
                { title: "Sync Google Sheets", desc: "Pousse instantanément les nouvelles commandes vers votre spreadsheet pour votre call center." },
            ],
        },
        intelligenceSection: {
            eyebrow: "Tracking & Intelligence",
            title: "La donnée au niveau auquel Facebook n'accède plus",
            subtitle: "Server-Side CAPI qui contourne iOS 14+, avec analytics avancée et IA pour piloter vos campagnes.",
            features: [
                { title: "Server-Side CAPI", desc: "Facebook Graph API v24.0, TikTok Business API v1.3, Snapchat CAPI v2. Envoyés directement depuis votre serveur — contourne tous les bloqueurs et iOS 14+." },
                { title: "Match Quality 9/10", desc: "Chiffrement SHA-256 de toutes les données clients (téléphone, nom, ville) pour une précision de ciblage maximale." },
                { title: "The War Room", desc: "Dashboard centralisé avec KPI temps réel, taux de livraison par wilaya et entonnoirs de vente complets." },
                { title: "Auditeur de Campagne IA", desc: "Algorithme intelligent analysant ROAS, CTR et fréquence avec recommandations concrètes : SCALE ou KILL." },
                { title: "Carte Interactive Wilaya", desc: "Visualisez les performances de livraison vs retours sur une carte interactive de l'Algérie avec zoom par wilaya." },
            ]
        },
        securitySection: {
            eyebrow: "Sécurité & Confiance",
            title: "Fortifié contre les bots, les fraudes et les fuites",
            items: [
                { title: "Chiffrement AES-256-CBC", desc: "Toutes vos données et communications sont chiffrées en AES-256-CBC via les clés WordPress (AUTH_KEY + SECURE_AUTH_KEY)." },
                { title: "Bouclier Anti-Bot (20+ signatures)", desc: "Pare-feu actif filtrant plus de 20 signatures de bots connus par User-Agent et IP. Vos données restent propres." },
                { title: "Validation Téléphone Algérien", desc: "Vérification stricte des numéros 05/06/07 avec rejet des numéros répétitifs pour éliminer les fausses commandes." },
                { title: "Liste Noire Clients", desc: "Blocage par IP, téléphone ou email via la table dz_blacklist. Gestion complète via l'interface admin." },
                { title: "Détection VPN/Proxy", desc: "Analyse des en-têtes HTTP pour identifier et filtrer le trafic artificiel provenant de VPNs et proxies." },
                { title: "En-têtes CSP", desc: "Content-Security-Policy + X-Frame-Options + XSS Protection configurés automatiquement pour protéger votre vitrine." },
            ]
        },
        stats: {
            title: "Des chiffres réels",
            items: [
                { value: "22", label: "Transporteurs Algériens Intégrés" },
                { value: "58", label: "Wilayas couvertes (base complète)" },
                { value: "25", label: "Modules Admin Indépendants" },
                { value: "6", label: "Intégrations Externes (FB, TikTok, Snap, Sheets, WA, Elementor)" }
            ]
        },
        testimonials: {
            title: "Ce que disent nos clients",
            items: [
                { name: "Ahmed K.", role: "Vendeur COD — Alger", quote: "Avant DZ-Ghost, je perdais 40% de mon budget pub. Maintenant mon ROAS est passé de 1.2 à 4.5. C'est un autre monde." },
                { name: "Sarah M.", role: "Agence E-commerce", quote: "On gère 15 boutiques avec la licence Escouade. Le temps gagné sur la logistique est incroyable." },
                { name: "Youcef B.", role: "Dropshipper — Oran", quote: "L'intégration Yalidine seule vaut le prix. Un clic et c'est expédié. Plus d'erreurs manuelles." }
            ]
        },
        howItWorks: {
            eyebrow: "Comment ça fonctionne",
            title: "Du client à la livraison, en 4 étapes",
            steps: [
                { title: "Commande", desc: "Le client remplit le checkout one-page COD. Les données sont envoyées en Server-Side à vos pixels publicitaires." },
                { title: "Confirmation", desc: "Votre équipe call center confirme la commande via le bureau de confirmation avec logs et statuts." },
                { title: "Expédition", desc: "En un clic, la commande est envoyée au transporteur choisi. Le tracking est automatique." },
                { title: "Livraison", desc: "Le statut se met à jour en temps réel. Analytics et profit net calculés automatiquement." },
            ],
        },
        pricing: {
            eyebrow: "Tarifs Officiels",
            title: "Arrêtez de payer pour de la pub aveugle. Investissez dans la donnée.",
            subtitle: "Chaque dinar dépensé ici vous en rapporte 4 en retour. Choisissez selon votre taille d'opération.",
            merchantTitle: "Plans Marchands",
            merchantSubtitle: "Pour les boutiques solo — 1 domaine, revenus directs.",
            devTitle: "Packs Développeur & Agence",
            devSubtitle: "Achetez en gros, revendez à vos clients. Chaque pack se rembourse dès le 1er client.",
            plans: [
                {
                    name: "Starter",
                    price: "9,900 DA",
                    period: "/ an",
                    priceNote: "= 825 DA/mois",
                    desc: "Pour les débutants (~15 commandes/jour). Moins cher qu'une journée de pub perdue.",
                    orderLimit: "450 commandes / mois",
                    domains: "1 Domaine",
                    features: [
                        "Checkout COD One-Page",
                        "Server-Side CAPI (FB + TikTok + Snap)",
                        "22 Transporteurs Algériens",
                        "Bureau de Confirmation",
                        "Auto-Tracking Livraisons",
                        "Dashboard Analytics",
                        "Anti-Bot & Validation Téléphone"
                    ],
                    cta: "Démarrer avec Starter",
                    highlight: false,
                    tier: "merchant"
                },
                {
                    name: "Growth",
                    price: "19,000 DA",
                    period: "/ an",
                    priceNote: "= 1,583 DA/mois",
                    desc: "Pour les opérateurs sérieux (~40 commandes/jour). Un ROAS à 4x couvre ce plan en 3 jours.",
                    orderLimit: "1,300 commandes / mois",
                    domains: "1 Domaine",
                    features: [
                        "Tout le plan Starter",
                        "Auditeur de Campagne IA",
                        "The War Room Dashboard",
                        "Carte Interactive Wilaya",
                        "Gestion des Offres & AOV",
                        "Google Sheets Sync",
                        "Support Prioritaire WhatsApp"
                    ],
                    cta: "Passer à Growth",
                    highlight: true,
                    tag: "Le Plus Populaire",
                    tier: "merchant"
                },
                {
                    name: "Pro",
                    price: "34,000 DA",
                    period: "/ an",
                    priceNote: "= 2,833 DA/mois",
                    desc: "Pour les gros volumes (~130 commandes/jour). À ce niveau, le plugin se finance seul en 1 semaine.",
                    orderLimit: "4,000 commandes / mois",
                    domains: "1 Domaine",
                    features: [
                        "Tout le plan Growth",
                        "4,000 commandes / mois",
                        "Ghost Slicer — Landing Pages",
                        "Système Financier & P&L",
                        "Performance Équipe Call Center",
                        "Export Données Avancé",
                        "Support VIP Dédié"
                    ],
                    cta: "Choisir Pro",
                    highlight: false,
                    tier: "merchant"
                },
                {
                    name: "Developer Lite",
                    price: "24,000 DA",
                    period: "/ an",
                    priceNote: "→ Revendez 3 × 9,900 DA = 29,700 DA",
                    desc: "3 clients. Investissement 24K, retour potentiel ~45,000 DA.",
                    orderLimit: "450 commandes / mois / client",
                    domains: "3 Clients / Domaines",
                    profit: "~45,000 DA potentiel",
                    features: [
                        "3 licences clients incluses",
                        "450 commandes/mois par client",
                        "Toutes les fonctionnalités Starter",
                        "Dashboard agence centralisé",
                        "Support technique dédié"
                    ],
                    cta: "Commencer Developer Lite",
                    highlight: false,
                    tier: "dev"
                },
                {
                    name: "Developer Pro",
                    price: "39,000 DA",
                    period: "/ an",
                    priceNote: "→ Revendez 5 × 9,900 DA = 49,500 DA",
                    desc: "5 clients. Rentabilisé dès le 4ème client facturé.",
                    orderLimit: "450 commandes / mois / client",
                    domains: "5 Clients / Domaines",
                    profit: "~75,000 DA potentiel",
                    features: [
                        "5 licences clients incluses",
                        "450 commandes/mois par client",
                        "Toutes les fonctionnalités Starter",
                        "Dashboard agence centralisé",
                        "Support prioritaire dédié",
                        "Accès anticipé nouvelles fonctions"
                    ],
                    cta: "Passer à Developer Pro",
                    highlight: true,
                    tag: "Meilleur ROI Agence",
                    tier: "dev"
                },
                {
                    name: "Developer Agency",
                    price: "69,000 DA",
                    period: "/ an",
                    priceNote: "→ Revendez 10 × 9,900 DA = 99,000 DA",
                    desc: "10 clients. Marges x2. La licence se paye seule à partir du 7ème client.",
                    orderLimit: "450 commandes / mois / client",
                    domains: "10 Clients / Domaines",
                    profit: "~150,000 DA potentiel",
                    features: [
                        "10 licences clients incluses",
                        "450 commandes/mois par client",
                        "Toutes les fonctionnalités Starter",
                        "Dashboard agence centralisé",
                        "Account Manager dédié",
                        "Accès bêta exclusif",
                        "Formation équipe offerte"
                    ],
                    cta: "Choisir Agency",
                    highlight: false,
                    tier: "dev"
                }
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
        whySwitch: {
            eyebrow: "Ce que vous perdez aujourd'hui",
            headline: "Vos pixels perdent 60% de vos données. Voici ce que ça vous coûte vraiment.",
            subtitle: "iOS 14+, les bloqueurs de pub et le checkout lent de WooCommerce font saigner votre budget pub en silence. Chaque jour sans DZ-Ghost, vous surenchérissez à l'aveugle.",
            without: {
                label: "Sans DZ-Ghost",
                items: [
                    { pain: "Pixel bloqué par iOS 14+ & ad blockers", impact: "60% de vos conversions ne remontent pas au pixel" },
                    { pain: "Checkout WooCommerce natif et lent", impact: "Taux d'abandon > 70% sur mobile en Algérie" },
                    { pain: "Gestion manuelle des transporteurs", impact: "Erreurs, retards et NDR entre 35 et 45%" },
                    { pain: "Audiences mal qualifiées faute de données", impact: "CPA qui monte chaque semaine sans explication" },
                    { pain: "Aucun outil pour le call center", impact: "Confirmations perdues et clients non rappelés" },
                ]
            },
            with: {
                label: "Avec DZ-Ghost",
                items: [
                    { fix: "Server-Side CAPI Facebook, TikTok & Snapchat", result: "100% des événements remontent — Match Quality 9/10" },
                    { fix: "Checkout one-page optimisé COD", result: "Taux de conversion multiplié par 2.4 dès l'install" },
                    { fix: "22 transporteurs connectés en API directe", result: "NDR < 20% avec auto-tracking complet" },
                    { fix: "Données propres → ciblage précis", result: "CPA divisé par 2 en moyenne dans les 30 premiers jours" },
                    { fix: "Bureau de confirmation intégré", result: "Call center 3x plus efficace avec workflow complet" },
                ]
            },
            proof: "Les boutiques qui activent DZ-Ghost voient leur ROAS passer de 1.5x à 4x en moyenne dans les 30 premiers jours.",
            cta: "Je veux arrêter de perdre de l'argent",
            ctaNote: "Installation en 5 minutes · Compatible tous thèmes WordPress"
        },
        ctaBanner: {
            title: "Prêt à transformer votre boutique COD ?",
            subtitle: "22 transporteurs intégrés, 58 wilayas couvertes, 25 modules admin — tout ce qu'il vous faut pour dominer le COD en Algérie.",
            cta: "Commencer Maintenant",
            secondary: "Voir la Démo",
            trustItems: ["Installation en 5 minutes", "Support WhatsApp 24/7", "Satisfait ou Remboursé"]
        },
        footer: {
            tagline: "Le plugin WordPress COD tout-en-un pour l'Algérie.",
            copyright: "© 2026 DZ-Ghost. Tous droits réservés.",
            links: {
                product: { title: "Produit", items: ["Fonctionnalités", "Tarifs", "Documentation", "Changelog"] },
                support: { title: "Support", items: ["Contact", "WhatsApp", "Email", "Statut"] },
                legal: { title: "Légal", items: ["Politique de confidentialité", "Conditions d'utilisation"] }
            }
        },
    },
    ar: {
        navbar: {
            logo: "DZ-GHOST",
            cta: "احصل على النظام",
            language: "FR",
        },
        hero: {
            eyebrow: "إضافة WordPress COD الأولى في الجزائر",
            headline: "إضافة WordPress التي تضاعف مبيعات COD للجزائر",
            subheadline: "نموذج دفع سريع، تأكيد طلبات بالفريق، 22 شركة شحن و Server-Side CAPI — كل ما تحتاجه في إضافة WooCommerce واحدة.",
            cta: "ابدأ مجاناً",
            ctaSecondary: "شاهد العرض",
            trustBadges: ["22 شركة شحن", "58 ولاية", "دعم بالعربية والفرنسية"],
        },
        socialProofStrip: {
            label: "يثقون بنا",
            stats: [
                { value: "22", label: "شركة شحن مدمجة" },
                { value: "58", label: "ولاية مغطاة" },
                { value: "25", label: "وحدة إدارية" },
                { value: "9/10", label: "جودة المطابقة" },
            ]
        },
        platformOverview: {
            eyebrow: "الإضافة الشاملة",
            title: "كل ما تحتاجه في إضافة واحدة",
            subtitle: "يُثبَّت DZ-Ghost في 5 دقائق على WooCommerce ويغطي دورة حياة طلباتك بالكامل من الطلب حتى التسليم.",
            pillars: [
                {
                    icon: "ShoppingCart",
                    title: "الدفع والتحويل",
                    desc: "نموذج COD سريع في صفحة واحدة، عروض الكميات، تتبع واتساب الهجين واسترداد السلات المتروكة.",
                    color: "indigo"
                },
                {
                    icon: "Truck",
                    title: "العمليات واللوجستيات",
                    desc: "مكتب تأكيد الطلبات، 22 شركة شحن جزائرية مع تتبع تلقائي وإدارة كاملة لدورة حياة الطلب.",
                    color: "violet"
                },
                {
                    icon: "BarChart3",
                    title: "التتبع والذكاء",
                    desc: "Server-Side CAPI لفيسبوك وتيك توك وسناب، لوحة War Room، مدقق IA وخريطة تفاعلية بالولايات.",
                    color: "purple"
                }
            ]
        },
        checkoutSection: {
            eyebrow: "الدفع والتحويل",
            title: "نموذج COD يحول الزوار فعلاً",
            subtitle: "استبدل checkout ووكومرس البطيء بتجربة شراء سلسة مصممة للسوق الجزائري.",
            features: [
                { title: "نموذج دفع One-Page COD", desc: "نموذج سريع جداً يُحقن في صفحات المنتجات. 58 ولاية وبلدياتها في قوائم منسدلة ذكية." },
                { title: "عروض الكميات (AOV)", desc: "محدد 'اشتري 2 = خصم 500دج' لزيادة متوسط قيمة الطلب تلقائياً." },
                { title: "زر شراء Sticky للجوال", desc: "زر شراء ثابت أسفل الشاشة على الجوال لتعظيم النقرات ومعدل التحويل." },
                { title: "استرداد السلات المتروكة", desc: "تتبع وإعادة استهداف تلقائي للعملاء الذين لم يكملوا طلباتهم." },
                { title: "طلب عبر واتساب", desc: "تتبع هجين لحدث Lead فور النقر على واتساب، قبل فتح المحادثة." },
            ]
        },
        operationsSection: {
            eyebrow: "العمليات واللوجستيات",
            title: "من التأكيد إلى التسليم، بشكل تلقائي",
            subtitle: "مكتب تأكيد متكامل لفرق call center، متصل بـ 22 شركة شحن جزائرية.",
            features: [
                { title: "مكتب التأكيد", desc: "واجهة مخصصة لفرق call center مع أدوار مخصصة، سجلات المكالمات وسير عمل التأكيد." },
                { title: "22 شركة شحن جزائرية", desc: "API مباشرة مع Yalidine وZR Express وProcolis وEcotrack و18 أخرى. الشحن بنقرة زر." },
                { title: "تتبع تلقائي", desc: "مزامنة تلقائية لحالات التوصيل من شركات الشحن إلى لوحة التحكم." },
                { title: "دورة حياة كاملة للطلب", desc: "جديد → مكالمة → مؤكد → مشحون → مسلَّم. كل خطوة مُتتبَّعة وظاهرة في الوقت الفعلي." },
                { title: "مزامنة Google Sheets", desc: "إرسال الطلبات الجديدة فوراً إلى جدول البيانات لفريق call center." },
            ]
        },
        intelligenceSection: {
            eyebrow: "التتبع والذكاء",
            title: "البيانات بمستوى لم يعد يصله فيسبوك",
            subtitle: "Server-Side CAPI يتجاوز iOS 14+، مع تحليلات متقدمة وIA لقيادة حملاتك.",
            features: [
                { title: "Server-Side CAPI", desc: "Facebook Graph API v24.0، TikTok Business API v1.3، Snapchat CAPI v2. مرسلة مباشرة من السيرفر — تتجاوز كل الحجب وiOS 14+." },
                { title: "جودة مطابقة 9/10", desc: "تشفير SHA-256 لكل بيانات العملاء (هاتف، اسم، مدينة) لدقة استهداف قصوى." },
                { title: "غرفة العمليات (War Room)", desc: "لوحة تحكم مركزية مع KPI في الوقت الفعلي، نسب التوصيل بالولاية وقمع المبيعات." },
                { title: "مدقق الحملات بالذكاء الاصطناعي", desc: "خوارزمية تحلل ROAS والـCTR والتكرار مع توصيات عملية: SCALE أو KILL." },
                { title: "خريطة الولايات التفاعلية", desc: "شاهد أداء التوصيل مقابل المرتجعات على خريطة تفاعلية للجزائر مع تكبير." },
            ]
        },
        securitySection: {
            eyebrow: "الأمان والحماية",
            title: "محصَّن ضد البوتات والاحتيال والتسريبات",
            items: [
                { title: "تشفير AES-256-CBC", desc: "جميع بياناتك واتصالاتك مشفرة بـ AES-256-CBC عبر مفاتيح WordPress (AUTH_KEY + SECURE_AUTH_KEY)." },
                { title: "درع مضاد للبوتات (+20 توقيع)", desc: "جدار حماية نشط يصفي أكثر من 20 توقيع بوت معروفاً عبر User-Agent والـIP. بياناتك تبقى نظيفة." },
                { title: "التحقق من الهاتف الجزائري", desc: "قواعد صارمة لأرقام 05/06/07 مع رفض الأرقام المتكررة للقضاء على الطلبات الوهمية." },
                { title: "القائمة السوداء للعملاء", desc: "حظر عبر IP أو هاتف أو بريد إلكتروني عبر جدول dz_blacklist. إدارة كاملة من لوحة التحكم." },
                { title: "كشف VPN والبروكسي", desc: "تحليل ترويسات HTTP لتحديد وتصفية الزيارات الاصطناعية من VPNs والبروكسيات." },
                { title: "ترويسات CSP", desc: "Content-Security-Policy + X-Frame-Options + XSS Protection مهيأة تلقائياً لحماية متجرك." },
            ]
        },
        stats: {
            title: "أرقام حقيقية",
            items: [
                { value: "22", label: "شركة شحن جزائرية مدمجة" },
                { value: "58", label: "ولاية مغطاة (قاعدة بيانات كاملة)" },
                { value: "25", label: "وحدة إدارية مستقلة" },
                { value: "6", label: "تكاملات خارجية (FB, TikTok, Snap, Sheets, WA, Elementor)" }
            ]
        },
        testimonials: {
            title: "ماذا يقول عملاؤنا",
            items: [
                { name: "أحمد ك.", role: "تاجر COD — الجزائر", quote: "كنت أخسر 40% من ميزانيتي بسبب التتبع السيء. مع DZ-Ghost، تحول الـ ROAS من 1.5 إلى 4.5 خلال أسبوع." },
                { name: "سارة م.", role: "وكالة تجارة إلكترونية", quote: "إدارة 15 متجر كانت كابوساً. الآن مع لوحة Escouade، كل شيء منظم واللوجستيات أوتوماتيكية." },
                { name: "يوسف ب.", role: "دروب شيبر — وهران", quote: "ربط ياليدين وحده يوفر علي ساعتين يومياً. النظام يستحق كل دينار." }
            ]
        },
        howItWorks: {
            eyebrow: "كيف يعمل",
            title: "من العميل إلى التسليم في 4 خطوات",
            steps: [
                { title: "الطلب", desc: "يملأ العميل نموذج الدفع السريع COD. تُرسَل البيانات Server-Side لبكسلات إعلاناتك." },
                { title: "التأكيد", desc: "يؤكد فريق call center الطلب عبر مكتب التأكيد مع السجلات والحالات." },
                { title: "الشحن", desc: "بنقرة زر، يُرسَل الطلب لشركة الشحن المختارة. التتبع تلقائي." },
                { title: "التسليم", desc: "يتحدث الحالة في الوقت الفعلي. التحليلات وصافي الربح محسوب تلقائياً." },
            ],
        },
        pricing: {
            eyebrow: "الأسعار الرسمية",
            title: "توقف عن الإنفاق على إعلانات عمياء. استثمر في البيانات.",
            subtitle: "كل دينار تنفقه هنا يعود بأربعة دنانير. اختر حسب حجم عملياتك.",
            merchantTitle: "باقات التاجر",
            merchantSubtitle: "للمتاجر المنفردة — نطاق واحد، دخل مباشر.",
            devTitle: "حزم المطور والوكالة",
            devSubtitle: "اشتر بالجملة، أعد البيع لعملائك. كل حزمة تُسدد نفسها من أول عميل.",
            plans: [
                {
                    name: "Starter",
                    price: "9,900 دج",
                    period: "/ سنوياً",
                    priceNote: "= 825 دج/شهرياً",
                    desc: "للمبتدئين (~15 طلب/يوم). أرخص من يوم إعلان ضائع.",
                    orderLimit: "450 طلب / شهر",
                    domains: "نطاق واحد",
                    features: [
                        "نموذج دفع COD سريع",
                        "Server-Side CAPI (فيسبوك + تيك توك + سناب)",
                        "22 شركة شحن جزائرية",
                        "مكتب تأكيد الطلبات",
                        "تتبع تلقائي للتوصيل",
                        "لوحة تحليلات",
                        "حماية من البوتات والتحقق من الهاتف"
                    ],
                    cta: "ابدأ بـ Starter",
                    highlight: false,
                    tier: "merchant"
                },
                {
                    name: "Growth",
                    price: "19,000 دج",
                    period: "/ سنوياً",
                    priceNote: "= 1,583 دج/شهرياً",
                    desc: "للمشغلين الجادين (~40 طلب/يوم). ROAS بـ 4x يغطي هذه الباقة خلال 3 أيام.",
                    orderLimit: "1,300 طلب / شهر",
                    domains: "نطاق واحد",
                    features: [
                        "كل ميزات Starter",
                        "مدقق حملات بالذكاء الاصطناعي",
                        "غرفة العمليات War Room",
                        "خريطة الولايات التفاعلية",
                        "إدارة العروض ورفع AOV",
                        "مزامنة Google Sheets",
                        "دعم واتساب أولوية"
                    ],
                    cta: "الترقية إلى Growth",
                    highlight: true,
                    tag: "الأكثر طلباً",
                    tier: "merchant"
                },
                {
                    name: "Pro",
                    price: "34,000 دج",
                    period: "/ سنوياً",
                    priceNote: "= 2,833 دج/شهرياً",
                    desc: "للأحجام الكبيرة (~130 طلب/يوم). عند هذا المستوى، الإضافة تموّل نفسها خلال أسبوع.",
                    orderLimit: "4,000 طلب / شهر",
                    domains: "نطاق واحد",
                    features: [
                        "كل ميزات Growth",
                        "4,000 طلب / شهر",
                        "Ghost Slicer — صفحات الهبوط",
                        "النظام المالي وP&L",
                        "أداء فريق Call Center",
                        "تصدير بيانات متقدم",
                        "دعم VIP مخصص"
                    ],
                    cta: "اختر Pro",
                    highlight: false,
                    tier: "merchant"
                },
                {
                    name: "Developer Lite",
                    price: "24,000 دج",
                    period: "/ سنوياً",
                    priceNote: "→ أعد البيع 3 × 9,900 = 29,700 دج",
                    desc: "3 عملاء. استثمار 24K، عائد محتمل ~45,000 دج.",
                    orderLimit: "450 طلب / شهر / عميل",
                    domains: "3 عملاء / نطاقات",
                    profit: "~45,000 دج محتملة",
                    features: [
                        "3 تراخيص عملاء",
                        "450 طلب/شهر لكل عميل",
                        "كل ميزات Starter",
                        "لوحة وكالة مركزية",
                        "دعم تقني مخصص"
                    ],
                    cta: "ابدأ بـ Developer Lite",
                    highlight: false,
                    tier: "dev"
                },
                {
                    name: "Developer Pro",
                    price: "39,000 دج",
                    period: "/ سنوياً",
                    priceNote: "→ أعد البيع 5 × 9,900 = 49,500 دج",
                    desc: "5 عملاء. يُستهلك من العميل الرابع.",
                    orderLimit: "450 طلب / شهر / عميل",
                    domains: "5 عملاء / نطاقات",
                    profit: "~75,000 دج محتملة",
                    features: [
                        "5 تراخيص عملاء",
                        "450 طلب/شهر لكل عميل",
                        "كل ميزات Starter",
                        "لوحة وكالة مركزية",
                        "دعم أولوية مخصص",
                        "وصول مبكر للميزات"
                    ],
                    cta: "الترقية لـ Developer Pro",
                    highlight: true,
                    tag: "أفضل عائد للوكالة",
                    tier: "dev"
                },
                {
                    name: "Developer Agency",
                    price: "69,000 دج",
                    period: "/ سنوياً",
                    priceNote: "→ أعد البيع 10 × 9,900 = 99,000 دج",
                    desc: "10 عملاء. هامش ×2. الترخيص يدفع نفسه من العميل السابع.",
                    orderLimit: "450 طلب / شهر / عميل",
                    domains: "10 عملاء / نطاقات",
                    profit: "~150,000 دج محتملة",
                    features: [
                        "10 تراخيص عملاء",
                        "450 طلب/شهر لكل عميل",
                        "كل ميزات Starter",
                        "لوحة وكالة مركزية",
                        "مدير حساب مخصص",
                        "وصول بيتا حصري",
                        "تدريب الفريق مجاناً"
                    ],
                    cta: "اختر Agency",
                    highlight: false,
                    tier: "dev"
                }
            ]
        },
        faq: {
            title: "أسئلة شائعة",
            items: [
                { q: "هل يعمل مع قالبي الحالي في ووردبريس؟", a: "نعم، DZ-Ghost متوافق مع جميع قوالب WordPress/WooCommerce. يُحقن نموذج الدفع تلقائياً." },
                { q: "هل أحتاج إلى خبرة تقنية؟", a: "لا. التثبيت يستغرق 5 دقائق. ارفع الإضافة، فعّلها، اضبط البكسل. هذا كل شيء." },
                { q: "كيف يعمل الدعم الفني؟", a: "دعم عبر واتساب والبريد الإلكتروني بالعربية والفرنسية. رد خلال 24 ساعة للباقات الأساسية، وأولوية للفرقة." },
                { q: "هل يمكنني الانتقال من شوبيفاي؟", a: "بالتأكيد. نساعدك على نقل منتجاتك وبياناتك. هذا مشمول في التثبيت." },
                { q: "ماذا عن تحديثات فيسبوك؟", a: "نحدّث الإضافة مع كل تغيير. تتلقى التحديثات تلقائياً." }
            ]
        },
        whySwitch: {
            eyebrow: "ما تخسره اليوم",
            headline: "بيكسلاتك تفقد 60% من بياناتك. إليك ما يكلفك هذا فعلاً.",
            subtitle: "iOS 14+ وحجب الإعلانات وصفحة الدفع البطيئة في WooCommerce تُنزف ميزانيتك في صمت. كل يوم بدون DZ-Ghost أنت تزايد بشكل أعمى.",
            without: {
                label: "بدون DZ-Ghost",
                items: [
                    { pain: "البيكسل محجوب بـ iOS 14+ ومانعات الإعلانات", impact: "60% من تحويلاتك لا تصل إلى البيكسل" },
                    { pain: "صفحة دفع WooCommerce بطيئة", impact: "معدل التخلي أكثر من 70% على الجوال" },
                    { pain: "إدارة يدوية لشركات الشحن", impact: "أخطاء وتأخيرات ومعدل إرجاع 35-45%" },
                    { pain: "جماهير مستهدفة بشكل خاطئ لنقص البيانات", impact: "تكلفة الاكتساب ترتفع أسبوعياً بلا سبب واضح" },
                    { pain: "لا أدوات لفريق الـ call center", impact: "طلبات مؤكدة ضائعة وعملاء لم يُعاد الاتصال بهم" },
                ]
            },
            with: {
                label: "مع DZ-Ghost",
                items: [
                    { fix: "Server-Side CAPI لفيسبوك وتيك توك وسناب", result: "100% من الأحداث تصل — جودة مطابقة 9/10" },
                    { fix: "صفحة دفع COD محسّنة في صفحة واحدة", result: "معدل التحويل يتضاعف 2.4 مرة فور التثبيت" },
                    { fix: "22 شركة شحن بـ API مباشر", result: "معدل إرجاع أقل من 20% مع تتبع تلقائي" },
                    { fix: "بيانات نظيفة ← استهداف دقيق", result: "تكلفة الاكتساب تنخفض للنصف خلال 30 يوماً" },
                    { fix: "مكتب تأكيد متكامل", result: "فريق call center أكثر كفاءة بـ 3 أضعاف" },
                ]
            },
            proof: "المتاجر التي تفعّل DZ-Ghost ترى ROAS يرتفع من 1.5x إلى 4x في المتوسط خلال أول 30 يوماً.",
            cta: "أريد التوقف عن خسارة المال",
            ctaNote: "تثبيت في 5 دقائق · متوافق مع جميع قوالب WordPress"
        },
        ctaBanner: {
            title: "مستعد لتحويل متجرك COD؟",
            subtitle: "22 شركة شحن مدمجة، 58 ولاية مغطاة، 25 وحدة إدارية — كل ما تحتاجه للسيطرة على COD في الجزائر.",
            cta: "ابدأ الآن",
            secondary: "شاهد العرض",
            trustItems: ["تثبيت في 5 دقائق", "دعم واتساب 24/7", "ضمان الرضا أو استرداد المال"]
        },
        footer: {
            tagline: "إضافة WordPress COD الشاملة للتجارة الإلكترونية الجزائرية.",
            copyright: "© 2026 DZ-Ghost. جميع الحقوق محفوظة.",
            links: {
                product: { title: "المنتج", items: ["الميزات", "الأسعار", "التوثيق", "سجل التغييرات"] },
                support: { title: "الدعم", items: ["مركز المساعدة", "واتساب", "البريد الإلكتروني", "الحالة"] },
                legal: { title: "القانوني", items: ["سياسة الخصوصية", "شروط الاستخدام"] }
            }
        },
    },
};
