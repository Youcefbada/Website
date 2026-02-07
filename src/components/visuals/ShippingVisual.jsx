import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Printer } from 'lucide-react';

export const ShippingVisual = ({ lang, t }) => {
    return (
        <div className="bg-bg-dark p-8 rounded-xl border border-white/10 relative overflow-hidden aspect-video flex items-center justify-center">
            {/* Map Background Hint */}
            <div className="absolute inset-0 opacity-10 grayscale">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M10,10 L90,90 M90,10 L10,90" stroke="white" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="relative z-10 w-full flex flex-col items-center gap-8">
                {/* Central Hub */}
                <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white z-10 relative shadow-[0_0_20px_#B042FF]">
                        <Package size={32} />
                    </div>
                    {/* Pulsing Rings */}
                    <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping opacity-20"></div>

                    {/* Connection Lines */}
                    {[0, 90, 180, 270].map((deg, i) => (
                        <div key={i} className="absolute top-1/2 left-1/2 h-0.5 w-24 bg-gradient-to-r from-primary to-transparent -translate-y-1/2 origin-left" style={{ transform: `rotate(${deg}deg) translateY(-50%)` }}>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_orange]"></div>
                        </div>
                    ))}
                </div>

                {/* Logistics Partners (Mock Logos) */}
                <div className="grid grid-cols-4 gap-4 w-full px-4">
                    {['Yalidine', 'ZR', 'Procolis', 'Eco'].map((name, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-center text-gray-400 font-bold uppercase tracking-wider">
                            {name}
                        </div>
                    ))}
                </div>

                {/* Action Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full font-bold shadow-[0_0_15px_orange]"
                >
                    <Printer size={16} />
                    {t.action}
                </motion.button>
            </div>
        </div>
    );
};
