import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap } from 'lucide-react';

const copy = {
    fr: {
        text: 'Version 2.0 disponible — Server-Side CAPI amélioré + Nouveau War Room Dashboard',
        cta: 'Voir les nouveautés →',
    },
    ar: {
        text: 'الإصدار 2.0 متاح الآن — Server-Side CAPI محسّن + لوحة War Room الجديدة',
        cta: 'اكتشف الجديد ←',
    },
};

const STORAGE_KEY = 'dz_ghost_bar_dismissed';

const AnnouncementBar = ({ lang }) => {
    const [visible, setVisible] = useState(() => {
        try { return !sessionStorage.getItem(STORAGE_KEY); } catch { return true; }
    });

    const dismiss = () => {
        try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch {}
        setVisible(false);
    };

    const c = copy[lang] || copy.fr;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-primary overflow-hidden"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-center gap-3 relative">
                        <Zap size={13} className="text-white/80 flex-shrink-0" />
                        <p className="text-white text-xs sm:text-sm font-medium text-center">
                            {c.text}
                            <a href="#pricing" onClick={dismiss} className="ml-2 text-white/80 underline underline-offset-2 hover:text-white transition-colors">
                                {c.cta}
                            </a>
                        </p>
                        <button
                            onClick={dismiss}
                            className="absolute right-4 text-white/60 hover:text-white transition-colors"
                            aria-label="Dismiss"
                        >
                            <X size={14} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AnnouncementBar;
