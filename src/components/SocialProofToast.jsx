import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const buyers = [
    { name: 'Yassine B.', wilaya: 'Alger', plan: 'Le Soldat', planAr: 'الجندي', ago: '2 min' },
    { name: 'Sarah M.', wilaya: 'Oran', plan: "L'Escouade", planAr: 'الفرقة', ago: '5 min' },
    { name: 'Karim D.', wilaya: 'Constantine', plan: 'Le Royaume', planAr: 'المملكة', ago: '8 min' },
    { name: 'Amira L.', wilaya: 'Sétif', plan: 'Le Soldat', planAr: 'الجندي', ago: '11 min' },
    { name: 'Riad H.', wilaya: 'Tizi Ouzou', plan: "L'Escouade", planAr: 'الفرقة', ago: '15 min' },
    { name: 'Nadia K.', wilaya: 'Annaba', plan: 'Le Soldat', planAr: 'الجندي', ago: '18 min' },
    { name: 'Mehdi O.', wilaya: 'Blida', plan: 'Le Royaume', planAr: 'المملكة', ago: '22 min' },
    { name: 'Fatima Z.', wilaya: 'Béjaïa', plan: 'Le Soldat', planAr: 'الجندي', ago: '26 min' },
];

const SocialProofToast = ({ lang }) => {
    const [current, setCurrent] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const showToast = () => {
            setCurrent(buyers[index % buyers.length]);
            setIndex(i => i + 1);

            setTimeout(() => {
                setCurrent(null);
            }, 4500);
        };

        const initialDelay = setTimeout(showToast, 6000);

        const interval = setInterval(() => {
            showToast();
        }, 12000);

        return () => {
            clearTimeout(initialDelay);
            clearInterval(interval);
        };
    }, []);

    const isAr = lang === 'ar';

    return (
        <div className="fixed bottom-24 left-4 sm:left-6 z-50 pointer-events-none" style={{ direction: 'ltr' }}>
            <AnimatePresence>
                {current && (
                    <motion.div
                        key={current.name + index}
                        initial={{ opacity: 0, x: -40, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                        className="bg-white border border-slate-200 rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 max-w-[240px]"
                    >
                        <div className="w-9 h-9 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                            <ShoppingCart size={16} className="text-green-600" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-800 leading-tight">
                                {current.name}
                            </p>
                            <p className="text-[11px] text-slate-500 leading-tight">
                                {isAr
                                    ? `${current.wilaya} — اشترى ${current.planAr}`
                                    : `${current.wilaya} — a acheté ${current.plan}`}
                            </p>
                            <p className="text-[10px] text-slate-400 mt-0.5">{isAr ? `منذ ${current.ago}` : `Il y a ${current.ago}`}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SocialProofToast;
