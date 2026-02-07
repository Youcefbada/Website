import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Flame } from 'lucide-react';

export const OffersVisual = ({ lang, t }) => {
    const [qty, setQty] = useState(1);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setQty(prev => prev === 1 ? 2 : 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-bg-dark p-8 rounded-xl border border-white/10 relative overflow-hidden aspect-video flex items-center justify-center">

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-full max-w-xs relative">
                <div className="flex gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg"></div>
                    <div>
                        <div className="w-24 h-4 bg-gray-600 rounded mb-2"></div>
                        <div className="w-16 h-3 bg-gray-700 rounded"></div>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-black/50 p-2 rounded-lg border border-white/5">
                    <span className="text-gray-400 text-sm">Quantity</span>
                    <div className="flex items-center gap-3">
                        <span className="text-white font-mono text-lg">{qty}</span>
                    </div>
                </div>

                <AnimatePresence>
                    {qty === 2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute -right-4 -top-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-[0_0_20px_rgba(239,68,68,0.6)] flex items-center gap-2 rotate-12"
                        >
                            <Flame size={16} className="fill-white" />
                            {t.discount}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
