import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { ChevronDown, Plus, Minus, MessageCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-white/10 last:border-0">
        <button
            onClick={onClick}
            className="w-full py-4 sm:py-6 flex items-center justify-between text-left group"
        >
            <span className="text-sm sm:text-lg font-medium text-white group-hover:text-primary transition-colors pr-4 sm:pr-8">
                {question}
            </span>
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white' : 'bg-white/5 text-gray-400'}`}>
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
            </div>
        </button>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <p className="text-gray-400 text-sm sm:text-base pb-4 sm:pb-6 leading-relaxed">{answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const FAQSection = ({ lang }) => {
    const t = content[lang].faq;
    const [openIndex, setOpenIndex] = useState(0);

    const supportText = lang === 'ar' ? "تواصل مع الدعم" : "Contacter le Support";
    const helpText = lang === 'ar'
        ? "كل ما تحتاج معرفته قبل البدء. أسئلة؟ تواصل مع دعمنا."
        : "Tout ce que vous devez savoir avant de commencer. Des questions ? Contactez notre support.";

    return (
        <section className="py-16 sm:py-24 relative">
            <div className="container max-w-[85%] mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start faq-grid">
                    {/* Left - Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-24"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">{t.title}</h2>
                        <p className="text-gray-400 text-sm sm:text-lg mb-6 sm:mb-8">
                            {helpText}
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-primary hover:underline text-sm sm:text-base">
                            <MessageCircle size={16} />
                            {supportText}
                            <ChevronDown size={14} className="-rotate-90" />
                        </a>
                    </motion.div>

                    {/* Right - Questions */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-8"
                    >
                        {t.items.map((item, i) => (
                            <FAQItem
                                key={i}
                                question={item.q}
                                answer={item.a}
                                isOpen={openIndex === i}
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
