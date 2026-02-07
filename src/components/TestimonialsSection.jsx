import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = ({ lang }) => {
    const t = content[lang].testimonials;

    return (
        <section className="py-16 sm:py-24 bg-bg-deep relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="container max-w-[85%] mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 sm:mb-16"
                >
                    {t.title}
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {t.items.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl hover:border-primary/30 transition-all group card-3d"
                        >
                            {/* Quote Icon */}
                            <Quote size={32} className="absolute top-4 sm:top-6 right-4 sm:right-6 text-primary/20 group-hover:text-primary/40 transition-colors sm:w-10 sm:h-10" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4 sm:mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={14} className="text-yellow-500 fill-yellow-500 sm:w-4 sm:h-4" />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 italic">"{testimonial.quote}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-white text-sm sm:text-base">{testimonial.name}</div>
                                    <div className="text-xs sm:text-sm text-gray-400">{testimonial.role}</div>
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
