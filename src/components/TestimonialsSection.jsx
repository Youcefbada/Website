import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Star } from 'lucide-react';

const TestimonialsSection = ({ lang }) => {
    const t = content[lang].testimonials;

    return (
        <section className="py-20 sm:py-28 bg-bg-light">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-extrabold text-center text-text-dark mb-12 sm:mb-16 tracking-tight"
                >
                    {t.title}
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {t.items.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className="clean-card p-6 sm:p-7 flex flex-col gap-4"
                        >
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            <p className="text-text-body text-sm sm:text-base leading-relaxed flex-grow">"{testimonial.quote}"</p>

                            <div className="flex items-center gap-3 pt-2 border-t border-border">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-text-dark text-sm">{testimonial.name}</div>
                                    <div className="text-xs text-text-muted">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
