import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { Menu, X, Globe } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = ({ lang, setLang }) => {
    const t = content[lang].navbar;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = lang === 'ar'
        ? [{ label: 'المميزات', href: '#features' }, { label: 'الأسعار', href: '#pricing' }, { label: 'الأسئلة', href: '#faq' }]
        : [{ label: 'Fonctionnalités', href: '#features' }, { label: 'Tarifs', href: '#pricing' }, { label: 'FAQ', href: '#faq' }];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
                    ? 'bg-white/96 backdrop-blur-md border-b border-slate-200/80 py-3'
                    : 'bg-white/80 backdrop-blur-sm py-4'
                }`}>
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img src={logoImg} alt="DZ-Ghost" className="h-9 w-auto" />
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-7">
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button
                            onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300 transition-all text-xs font-medium"
                        >
                            <Globe size={13} />
                            {t.language}
                        </button>

                        <a
                            href="#pricing"
                            className="hidden sm:inline-flex items-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
                        >
                            {t.cta}
                        </a>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-1.5 text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-40 bg-white pt-16 md:hidden"
                    >
                        <div className="border-t border-slate-100 px-6 py-6 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-3 text-base font-medium text-slate-700 hover:text-primary border-b border-slate-100 last:border-0 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#pricing"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg text-sm"
                            >
                                {t.cta}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
