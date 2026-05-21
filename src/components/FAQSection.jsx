import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { Plus, Minus, MessageCircle, ChevronRight } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-border last:border-0">
        <button
            onClick={onClick}
            className="w-full py-5 flex items-center justify-between text-left gap-4"
        >
            <span className={`text-sm sm:text-base font-medium transition-colors ${isOpen ? 'text-primary' : 'text-text-dark'}`}>
                {question}
            </span>
            <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white' : 'bg-bg-gray text-text-muted'}`}>
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
            </div>
        </button>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                >
                    <p className="text-text-body text-sm leading-relaxed pb-5">{answer}</p>
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
        <section className="py-20 sm:py-28 bg-white" id="faq">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start faq-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-24"
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-4 tracking-tight">{t.title}</h2>
                        <p className="text-text-body mb-6 leading-relaxed">{helpText}</p>
                        <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                            <MessageCircle size={16} />
                            {supportText}
                            <ChevronRight size={14} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-bg-light border border-border rounded-2xl px-6 sm:px-8"
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
