import React from 'react';
import { content } from '../data/content';
import FeatureRow from './FeatureRow';
import { FinanceVisual } from './visuals/FinanceVisual';
import { ShippingVisual } from './visuals/ShippingVisual';
import { OffersVisual } from './visuals/OffersVisual';
import { ReportingVisual } from './visuals/ReportingVisual';
import { motion } from 'framer-motion';
import { Scan, ShoppingCart, Box, Zap } from 'lucide-react';

// Placeholder visuals for remaining simple modules
const SimpleVisual = ({ icon: Icon, color = "text-primary", bg = "bg-primary/10" }) => (
    <div className="bg-bg-dark p-8 rounded-xl border border-white/10 relative overflow-hidden aspect-video flex items-center justify-center">
        <div className={`w-24 h-24 ${bg} rounded-full flex items-center justify-center relative z-10`}>
            <Icon size={48} className={color} />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
);

const MetaAdsVisual = () => {
    return (
        <div className="bg-bg-dark p-8 rounded-xl border border-white/10 relative overflow-hidden aspect-video flex items-center justify-center">
            {/* Radar Sweep */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,255,0,0.1)_60%)]"></div>
            <div className="w-64 h-64 border border-green-500/30 rounded-full relative flex items-center justify-center overflow-hidden">
                <div className="absolute w-1/2 h-1/2 bg-gradient-to-tr from-green-500/50 to-transparent top-0 right-0 origin-bottom-left animate-spin-slow rounded-full" style={{ borderBottomLeftRadius: 0 }}></div>

                {/* Blips */}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-1/2 right-10 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_lime]"
                />
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                    className="absolute bottom-10 left-12 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"
                />
            </div>

            {/* Status Stamp */}
            <motion.div
                initial={{ scale: 2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute bg-black/80 border-2 border-green-500 text-green-500 font-black px-4 py-1 rotate-[-12deg] text-xl tracking-widest uppercase"
            >
                SCALE WINNER
            </motion.div>
        </div>
    )
}


const ModulesSection = ({ lang }) => {
    const t = content[lang].modules;

    return (
        <>
            <FeatureRow
                title={t.finance.title}
                description={t.finance.description}
                imageLeft={false}
            >
                <FinanceVisual lang={lang} t={t.finance} />
            </FeatureRow>

            <FeatureRow
                title={t.metaAds.title}
                description={t.metaAds.description}
                imageLeft={true}
            >
                <MetaAdsVisual />
            </FeatureRow>

            <FeatureRow
                title={t.shipping.title}
                description={t.shipping.description}
                imageLeft={false}
            >
                <ShippingVisual lang={lang} t={t.shipping} />
            </FeatureRow>

            <FeatureRow
                title={t.offers.title}
                description={t.offers.description}
                imageLeft={true}
            >
                <OffersVisual lang={lang} t={t.offers} />
            </FeatureRow>

            <FeatureRow
                title={t.orders.title}
                description={t.orders.description}
                imageLeft={false}
            >
                <SimpleVisual icon={ShoppingCart} color="text-blue-400" bg="bg-blue-500/10" />
            </FeatureRow>

            <FeatureRow
                title={t.product.title}
                description={t.product.description}
                imageLeft={true}
            >
                <SimpleVisual icon={Box} color="text-purple-400" bg="bg-purple-500/10" />
            </FeatureRow>

            <FeatureRow
                title={t.reporting.title}
                description={t.reporting.description}
                imageLeft={false}
            >
                <ReportingVisual lang={lang} t={t.reporting} />
            </FeatureRow>
        </>
    );
};

export default ModulesSection;
