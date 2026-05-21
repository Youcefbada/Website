import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SmoothScroll from './SmoothScroll';
import ScrollProgressBar from './ScrollProgressBar';
import WhatsAppButton from './WhatsAppButton';
import CookieConsent from './CookieConsent';
import AnnouncementBar from './AnnouncementBar';
import StickyCTA from './StickyCTA';
import BackToTop from './BackToTop';

const Layout = ({ children, lang, setLang }) => {
    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        // Update font based on language
        if (lang === 'ar') {
            document.body.style.fontFamily = '"Cairo", system-ui, sans-serif';
        } else {
            document.body.style.fontFamily = '"Plus Jakarta Sans", system-ui, sans-serif';
        }
    }, [lang]);

    return (
        <SmoothScroll>
            <ScrollProgressBar />
            <div className="min-h-screen bg-bg-white text-text-body overflow-x-hidden flex flex-col">
                <AnnouncementBar lang={lang} />
                <Navbar lang={lang} setLang={setLang} />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer lang={lang} />
            </div>
            <WhatsAppButton lang={lang} />
            <StickyCTA lang={lang} />
            <BackToTop />
            <CookieConsent lang={lang} />
        </SmoothScroll>
    );
};

export default Layout;
