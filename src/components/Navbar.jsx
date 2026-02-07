import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

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
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-bg-dark/90 backdrop-blur-xl border-b border-white/10 py-3'
                    : 'bg-transparent py-4 sm:py-6'
                }`}>
                <div className="container max-w-[90%] mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-lg group-hover:shadow-[0_0_20px_#B042FF] transition-all">
                            G
                        </div>
                        <span className="text-lg sm:text-xl font-bold text-white">{t.logo}</span>
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Language Toggle */}
                        <button
                            onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 transition-all text-xs sm:text-sm"
                        >
                            <Globe size={14} />
                            {t.language}
                        </button>

                        {/* CTA Button */}
                        <a
                            href="#pricing"
                            className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-primary text-white font-bold rounded-lg hover:shadow-[0_0_25px_#B042FF] transition-all text-xs sm:text-sm"
                        >
                            {t.cta}
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-white"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-bg-dark/98 backdrop-blur-xl pt-20 md:hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-white hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#pricing"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl text-lg"
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
