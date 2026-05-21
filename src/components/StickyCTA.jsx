import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

const copy = {
    fr: {
        label: 'DZ-Ghost',
        sub: 'à partir de 14 900 DA / an',
        cta: 'Obtenir la licence',
        dismiss: 'Plus tard',
    },
    ar: {
        label: 'DZ-Ghost',
        sub: 'ابتداءً من 14,900 دج / سنوياً',
        cta: 'احصل على الترخيص',
        dismiss: 'لاحقاً',
    },
};

const StickyCTA = ({ lang }) => {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (!dismissed && window.scrollY > 600) setVisible(true);
            else if (window.scrollY < 600) setVisible(false);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [dismissed]);

    const c = copy[lang] || copy.fr;

    return (
        <AnimatePresence>
            {visible && !dismissed && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 32 }}
                    className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-2xl"
                    style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                            <img src={logoImg} alt="DZ-Ghost" className="h-8 w-auto flex-shrink-0" />
                            <p className="text-text-muted text-xs leading-tight truncate hidden sm:block">{c.sub}</p>
                        </div>

                        <div className="flex items-center gap-3 flex-shrink-0">
                            <button
                                onClick={() => setDismissed(true)}
                                className="text-text-muted hover:text-text-dark text-xs font-medium transition-colors hidden sm:block"
                            >
                                {c.dismiss}
                            </button>
                            <a
                                href="#pricing"
                                onClick={() => setDismissed(true)}
                                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
                            >
                                {c.cta} <ArrowRight size={14} />
                            </a>
                            <button
                                onClick={() => setDismissed(true)}
                                className="text-text-muted hover:text-text-dark transition-colors sm:hidden"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
