import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ScanFace, TrendingUp, DollarSign, MousePointerClick, XCircle, CheckCircle } from 'lucide-react';

const AiScanner = ({ lang }) => {
    const t = content[lang].aiScanner;
    const [isScanning, setIsScanning] = useState(true);
    const [result, setResult] = useState(null); // 'kill' or 'scale'

    useEffect(() => {
        const scanCycle = () => {
            setIsScanning(true);
            setResult(null);
            setTimeout(() => {
                setIsScanning(false);
                setResult(Math.random() > 0.5 ? 'scale' : 'kill');
            }, 2000);
        };

        scanCycle();
        const interval = setInterval(scanCycle, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-bg-deep relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(176,66,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(176,66,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.title}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-16">{t.description}</p>

                <div className="max-w-xl mx-auto relative glass-card p-6 rounded-2xl overflow-hidden">
                    {/* Campaign Card Mockup */}
                    <div className={`transition-all duration-300 ${isScanning ? 'blur-[2px]' : 'blur-0'}`}>
                        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">FB</div>
                                <div className="text-left">
                                    <div className="text-sm font-bold text-white">Campaign #8392</div>
                                    <div className="text-xs text-gray-400">Running • Learning Phase</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-black/40 p-3 rounded-lg text-center">
                                <div className="text-xs text-gray-500 mb-1 flex justify-center gap-1"><DollarSign size={12} /> ROAS</div>
                                <div className="text-lg font-bold text-white">{result === 'scale' ? '4.2' : '0.8'}</div>
                            </div>
                            <div className="bg-black/40 p-3 rounded-lg text-center">
                                <div className="text-xs text-gray-500 mb-1 flex justify-center gap-1"><MousePointerClick size={12} /> CTR</div>
                                <div className="text-lg font-bold text-white">{result === 'scale' ? '2.1%' : '0.5%'}</div>
                            </div>
                            <div className="bg-black/40 p-3 rounded-lg text-center">
                                <div className="text-xs text-gray-500 mb-1 flex justify-center gap-1"><TrendingUp size={12} /> FREQ</div>
                                <div className="text-lg font-bold text-white">1.2</div>
                            </div>
                        </div>
                    </div>

                    {/* Scanning Overlay */}
                    {isScanning && (
                        <div className="absolute inset-0 bg-primary/10 z-20 flex flex-col items-center justify-center">
                            <div className="w-full h-1 bg-primary shadow-[0_0_20px_#B042FF] absolute animate-scanner top-0"></div>
                            <ScanFace className="text-primary animate-pulse w-12 h-12" />
                            <span className="text-primary font-mono text-sm mt-4 tracking-widest">ANALYZING...</span>
                        </div>
                    )}

                    {/* Result Overlay */}
                    {!isScanning && result && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`absolute inset-0 z-30 flex items-center justify-center backdrop-blur-sm bg-black/60 ${result === 'scale' ? 'border-4 border-green-500' : 'border-4 border-red-500'}`}
                        >
                            <div className="flex flex-col items-center">
                                {result === 'scale' ? (
                                    <>
                                        <CheckCircle size={64} className="text-green-500 mb-4 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                                        <h3 className="text-3xl font-black text-green-500 tracking-widest uppercase rotate-[-5deg] border-4 border-green-500 px-6 py-2">Scale Now</h3>
                                    </>
                                ) : (
                                    <>
                                        <XCircle size={64} className="text-red-500 mb-4 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                                        <h3 className="text-3xl font-black text-red-500 tracking-widest uppercase rotate-[5deg] border-4 border-red-500 px-6 py-2">Kill Ad</h3>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AiScanner;
