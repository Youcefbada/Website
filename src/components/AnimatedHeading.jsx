import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedHeading = ({ text, className = '', highlight = '', highlightClass = 'gradient-text', delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const words = text.split(' ');

    return (
        <span ref={ref} className={`inline-block ${className}`} aria-label={text}>
            {words.map((word, i) => {
                const isHighlight = highlight && word.toLowerCase().includes(highlight.toLowerCase());
                return (
                    <span
                        key={i}
                        className="inline-block overflow-hidden leading-[1.15]"
                        style={{ marginRight: i < words.length - 1 ? '0.28em' : '0' }}
                    >
                        <motion.span
                            className={`inline-block ${isHighlight ? highlightClass : ''}`}
                            style={isHighlight ? {
                                background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 60%, #6366F1 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            } : {}}
                            initial={{ y: '110%', opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : {}}
                            transition={{
                                duration: 0.55,
                                delay: delay + i * 0.065,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {word}
                        </motion.span>
                    </span>
                );
            })}
        </span>
    );
};

export default AnimatedHeading;
