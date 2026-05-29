import React from 'react';
import { motion } from 'framer-motion';

// All items verified against dzghostreport.txt
// Carriers: 22 Algerian shipping companies (Yalidine, Zimo, E-Com Delivery mentioned explicitly)
// APIs: Facebook Graph API v24.0, TikTok Business API v1.3, Snapchat CAPI v2
// Data: 58 wilayas, 25 admin modules, 6 integrations
const items = [
    'Facebook Graph API v24.0',
    'TikTok Business API v1.3',
    'Snapchat CAPI v2',
    'Yalidine',
    'ZR Express',
    'Procolis',
    'Ecotrack',
    'Maystro Delivery',
    'Guepex',
    'Zimo',
    'E-Com Delivery',
    'WooCommerce',
    'WordPress',
    'Google Sheets',
    'WhatsApp',
    'Elementor',
    'Server-Side Tracking',
    'Anti-Bot (20+ signatures)',
    'AES-256-CBC',
    '58 Wilayas',
    '25 Modules Admin',
    'COD Checkout',
];

const Separator = () => (
    <span className="text-slate-600 select-none mx-4 flex-shrink-0">·</span>
);

const MarqueeStrip = () => {
    const doubled = [...items, ...items];

    return (
        <div className="py-3.5 bg-slate-900 overflow-hidden">
            <div className="flex">
                <motion.div
                    className="flex items-center whitespace-nowrap"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                >
                    {doubled.map((item, i) => (
                        <React.Fragment key={i}>
                            <span className="text-xs font-medium text-slate-400 tracking-wide flex-shrink-0">{item}</span>
                            <Separator />
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MarqueeStrip;
