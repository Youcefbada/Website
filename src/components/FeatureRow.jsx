import React from 'react';
import { motion } from 'framer-motion';

const FeatureRow = ({
    title,
    description,
    children,
    imageLeft = false,
    delay = 0
}) => {
    return (
        <section className="py-24 relative overflow-hidden border-b border-white/5">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: imageLeft ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay }}
                    className={`flex flex-col justify-center ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-primary/30 pl-4">
                        {description}
                    </p>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: delay + 0.2 }}
                    className={`relative ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}
                >
                    <div className="glass-card p-2 rounded-2xl border border-white/10 relative z-10 overflow-hidden group">
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors duration-500"></div>
                        {children}
                    </div>

                    {/* Decorative Grid */}
                    <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 border border-white/5 rounded-2xl"></div>
                </motion.div>

            </div>
        </section>
    );
};

export default FeatureRow;
