import React from 'react';
import { motion } from 'framer-motion';

const items = [
    'Facebook Conversions API',
    'TikTok Events API',
    'Snapchat CAPI',
    'Yalidine',
    'ZR Express',
    'Procolis',
    'Ecotrack',
    'Maystro Delivery',
    'Guepex',
    'WooCommerce',
    'WordPress',
    'Google Sheets',
    'Server-Side Tracking',
    'Anti-Bot Protection',
    '58 Wilayas',
    'WhatsApp Hybrid',
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
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
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
