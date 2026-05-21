import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const copy = {
    fr: {
        text: 'Nous utilisons des cookies essentiels pour le fonctionnement du site et la validation de licence.',
        accept: 'Accepter',
        decline: 'Refuser',
        link: 'Politique de confidentialité',
    },
    ar: {
        text: 'نستخدم ملفات تعريف الارتباط الضرورية لتشغيل الموقع والتحقق من الترخيص.',
        accept: 'قبول',
        decline: 'رفض',
        link: 'سياسة الخصوصية',
    },
};

const STORAGE_KEY = 'dz_ghost_cookie_consent';

const CookieConsent = ({ lang }) => {
    const [visible, setVisible] = useState(false);
    const c = copy[lang] || copy.fr;

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            const timer = setTimeout(() => setVisible(true), 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem(STORAGE_KEY, 'accepted');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem(STORAGE_KEY, 'declined');
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 80 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                    className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50"
                    style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                >
                    <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/10">
                        <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Cookie size={16} className="text-indigo-400" />
                            </div>
                            <p className="text-slate-300 text-xs leading-relaxed flex-1">{c.text}{' '}
                                <Link to="/privacy" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
                                    {c.link}
                                </Link>
                            </p>
                            <button onClick={decline} className="text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0 mt-0.5">
                                <X size={14} />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={accept}
                                className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors"
                            >
                                {c.accept}
                            </button>
                            <button
                                onClick={decline}
                                className="flex-1 py-2 bg-white/8 hover:bg-white/15 text-slate-300 text-xs font-semibold rounded-lg transition-colors"
                            >
                                {c.decline}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
