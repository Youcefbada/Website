import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import MarqueeStrip from './components/MarqueeStrip';
import WhySwitchSection from './components/WhySwitchSection';
import ComparisonSection from './components/ComparisonSection';
import WhoIsItForSection from './components/WhoIsItForSection';
import PlatformOverview from './components/PlatformOverview';
import CheckoutFeaturesSection from './components/CheckoutFeaturesSection';
import AdminFeaturesSection from './components/AdminFeaturesSection';
import IntelligenceSection from './components/IntelligenceSection';
import SecuritySection from './components/detailed/SecuritySection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import TechFlow from './components/TechFlow';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTABanner from './components/CTABanner';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function HomePage({ lang, setLang }) {
  return (
    <Layout lang={lang} setLang={setLang}>
      <Hero lang={lang} />
      <SocialProof lang={lang} />
      <MarqueeStrip />
      <WhySwitchSection lang={lang} />
      <WhoIsItForSection lang={lang} />
      <ComparisonSection lang={lang} />
      <PlatformOverview lang={lang} />
      <CheckoutFeaturesSection lang={lang} />
      <AdminFeaturesSection lang={lang} />
      <IntelligenceSection lang={lang} />
      <SecuritySection lang={lang} />
      <StatsSection lang={lang} />
      <TestimonialsSection lang={lang} />
      <TechFlow lang={lang} />
      <PricingSection lang={lang} />
      <FAQSection lang={lang} />
      <CTABanner lang={lang} />
      <SpeedInsights />
    </Layout>
  );
}

function App() {
  const [lang, setLang] = useState('fr');

  return (
    <Routes>
      <Route path="/" element={<HomePage lang={lang} setLang={setLang} />} />
      <Route path="/privacy" element={<PrivacyPage lang={lang} setLang={setLang} />} />
      <Route path="/terms" element={<TermsPage lang={lang} setLang={setLang} />} />
      <Route path="/contact" element={<ContactPage lang={lang} setLang={setLang} />} />
      <Route path="*" element={<NotFoundPage lang={lang} />} />
    </Routes>
  );
}

export default App;
