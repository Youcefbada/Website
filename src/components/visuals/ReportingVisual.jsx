import React from 'react';
import { motion } from 'framer-motion';

export const ReportingVisual = ({ lang, t }) => {
    return (
        <div className="bg-bg-dark p-8 rounded-xl border border-white/10 relative overflow-hidden aspect-video flex items-center justify-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            <div className="relative w-full h-full flex items-center justify-center">
                {/* Abstract Algeria Map Simulation using SVG Paths */}
                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    {/* Simplified shapes representing regions */}
                    <motion.path
                        d="M50,150 L80,120 L120,130 L100,180 Z"
                        fill="#10b981"
                        stroke="white" strokeWidth="0.5"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    /> {/* South West */}

                    <motion.path
                        d="M80,120 L100,80 L140,90 L120,130 Z"
                        fill="#10b981"
                        stroke="white" strokeWidth="0.5"
                    /> {/* Center */}

                    <motion.path
                        d="M100,80 L80,40 L120,30 L140,90 Z"
                        fill="#ef4444"
                        stroke="white" strokeWidth="0.5"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.5, 0.9, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    /> {/* North (High Returns) */}

                    <motion.path
                        d="M120,30 L160,40 L150,90 L140,90 Z"
                        fill="#10b981"
                        stroke="white" strokeWidth="0.5"
                    /> {/* East */}
                </svg>

                {/* Tooltip Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute top-1/4 right-1/4 bg-black/80 border border-red-500/50 p-2 rounded text-xs"
                >
                    <div className="text-red-400 font-bold mb-1">High Return Rate</div>
                    <div className="text-white">Blida: 42%</div>
                </motion.div>
            </div>
        </div>
    );
};
