import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import logoImg from '../assets/logo.png';

const copy = {
    fr: { code: '404', title: 'Page introuvable', desc: 'La page que vous cherchez n\'existe pas ou a été déplacée.', cta: 'Retour à l\'accueil', link: 'Voir les tarifs' },
    ar: { code: '404', title: 'الصفحة غير موجودة', desc: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.', cta: 'العودة إلى الرئيسية', link: 'عرض الأسعار' },
};

const NotFoundPage = ({ lang = 'fr' }) => {
    const c = copy[lang] || copy.fr;
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <img src={logoImg} alt="DZ-Ghost" className="h-8 w-auto mx-auto mb-12 opacity-60" />
                <div className="text-[8rem] font-extrabold text-slate-100 leading-none select-none mb-2">404</div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">{c.title}</h1>
                <p className="text-slate-500 text-base max-w-sm mx-auto mb-8">{c.desc}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm">
                        <Home size={15} /> {c.cta}
                    </Link>
                    <Link to="/#pricing" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-border text-text-dark font-semibold rounded-lg hover:bg-bg-light transition-colors text-sm">
                        {c.link}
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;
