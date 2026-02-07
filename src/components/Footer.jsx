import React from 'react';
import { content } from '../data/content';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = ({ lang }) => {
    const t = content[lang].footer;

    return (
        <footer className="bg-bg-deep relative pt-20 pb-10 overflow-hidden">
            {/* Purple Glowing Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 shadow-[0_0_20px_#B042FF]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-primary/20 blur-xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold font-display tracking-widest text-white mb-2">DZ-GHOST</h2>
                        <p className="text-gray-500 text-sm">{t.copyright}</p>
                    </div>

                    <div className="flex gap-6">
                        {t.links.map((link, index) => (
                            <a key={index} href="#" className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wider">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                            <Github size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
