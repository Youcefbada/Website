import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { Target, AlertTriangle } from 'lucide-react';

const AuditorMock = ({ lang }) => {
    const t = content[lang].auditorMock;
    const states = ['winner', 'fatigue', 'scale', 'kill']; // Keys from content.js
    const [currentStateIndex, setCurrentStateIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStateIndex((prev) => (prev + 1) % states.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentKey = states[currentStateIndex];
    const currentStateText = t[currentKey];

    const getColor = (key) => {
        switch (key) {
            case 'winner': return 'text-emerald-400 border-emerald-400';
            case 'scale': return 'text-blue-400 border-blue-400';
            case 'kill': return 'text-red-500 border-red-500';
            case 'fatigue': return 'text-yellow-400 border-yellow-400';
            default: return 'text-white border-white';
        }
    };

    const getIcon = (key) => {
        if (key === 'kill' || key === 'fatigue') return <AlertTriangle size={48} />;
        return <Target size={48} />;
    };

    return (
        <section className="py-24 bg-bg-dark flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>

            <div className="container mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">AI AUDITOR ANALYSIS</h2>

                <div className="w-full max-w-md mx-auto aspect-square bg-black/80 border border-primary/30 rounded-full flex items-center justify-center relative shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                    {/* Rotating Scanner */}
                    <div className="absolute inset-0 rounded-full border-t-2 border-primary/50 animate-spin opacity-50"></div>
                    <div className="absolute inset-4 rounded-full border-r-2 border-primary/30 animate-spin opacity-30 animation-delay-500"></div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentKey}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.5 }}
                            transition={{ duration: 0.4 }}
                            className={`flex flex-col items-center justify-center p-12 border-4 rounded-full w-64 h-64 bg-black/50 backdrop-blur-sm ${getColor(currentKey)}`}
                        >
                            <div className="mb-4 animate-pulse">
                                {getIcon(currentKey)}
                            </div>
                            <h3 className="text-3xl font-bold tracking-widest uppercase text-center">
                                {currentStateText}
                            </h3>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <p className="mt-8 text-gray-500 font-mono text-sm">
                    SCANNING CAMPAIGN ID: #8X92-BZ...
                </p>
            </div>
        </section>
    );
};

export default AuditorMock;
