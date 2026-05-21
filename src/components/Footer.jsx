import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import iconImg from '../assets/icon.png';
import { ShieldCheck } from 'lucide-react';

const Footer = ({ lang }) => {
    const t = content[lang].footer;

    return (
        <footer className="bg-text-dark pt-14 sm:pt-16 pb-8">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 sm:col-span-1">
                        <div className="flex items-center gap-2.5 mb-3">
                            <img
                                src={iconImg}
                                alt="DZ-Ghost icon"
                                className="h-8 w-8"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                            <span className="text-white font-bold text-lg tracking-tight">dz-ghost</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">{t.tagline}</p>
                    </div>

                    {/* Link columns */}
                    {Object.values(t.links).map((col, i) => (
                        <div key={i}>
                            <h4 className="text-white/80 font-semibold text-sm mb-4">{col.title}</h4>
                            <ul className="space-y-2.5">
                                {col.items.map((item, j) => {
                                    const isPrivacy = item.toLowerCase().includes('confidential') || item.toLowerCase().includes('privacy') || item.toLowerCase().includes('خصوصية');
                                    const isTerms = item.toLowerCase().includes('conditions') || item.toLowerCase().includes('terms') || item.toLowerCase().includes('شروط');
                                    const isContact = item.toLowerCase().includes('contact') || item.toLowerCase().includes('تواصل');
                                    if (isContact) return (
                                        <li key={j}><Link to="/contact" className="text-white/45 hover:text-white/80 transition-colors text-sm">{item}</Link></li>
                                    );
                                    if (isPrivacy) return (
                                        <li key={j}><Link to="/privacy" className="text-white/45 hover:text-white/80 transition-colors text-sm">{item}</Link></li>
                                    );
                                    if (isTerms) return (
                                        <li key={j}><Link to="/terms" className="text-white/45 hover:text-white/80 transition-colors text-sm">{item}</Link></li>
                                    );
                                    return (
                                        <li key={j}><a href="#" className="text-white/45 hover:text-white/80 transition-colors text-sm">{item}</a></li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Privacy trust line */}
                <div className="border border-white/8 rounded-xl bg-white/4 px-5 py-3.5 mb-8 flex items-center gap-3">
                    <ShieldCheck size={16} className="text-indigo-400 flex-shrink-0" />
                    <p className="text-white/55 text-xs leading-relaxed">
                        {lang === 'ar'
                            ? 'DZ-Ghost إضافة مُثبَّتة على خادمك. بياناتك — طلباتك وعملاؤك وتتبعك — تبقى على خادمك وقاعدة بياناتك فقط. لا نستطيع الوصول إليها أبدًا.'
                            : 'DZ-Ghost est un plugin installé sur votre serveur. Vos données — commandes, clients, tracking — restent sur votre hébergement et votre base de données. Nous n\'y avons aucun accès.'}
                        {' '}
                        <Link to="/privacy" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
                            {lang === 'ar' ? 'سياسة الخصوصية ←' : 'Politique de confidentialité →'}
                        </Link>
                    </p>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white/35 text-xs">{t.copyright}</p>
                    <div className="flex items-center gap-4">
                        <Link to="/privacy" className="text-white/35 hover:text-white/70 transition-colors text-xs">
                            {lang === 'ar' ? 'الخصوصية' : 'Confidentialité'}
                        </Link>
                        <Link to="/terms" className="text-white/35 hover:text-white/70 transition-colors text-xs">
                            {lang === 'ar' ? 'الشروط' : 'Conditions'}
                        </Link>
                        {['Facebook', 'TikTok', 'WhatsApp'].map((s, i) => (
                            <a key={i} href="#" className="text-white/35 hover:text-white/70 transition-colors text-xs">{s}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
