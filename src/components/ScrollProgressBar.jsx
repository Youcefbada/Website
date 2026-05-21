import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
    const [scrollPct, setScrollPct] = useState(0);
    const width = useSpring(scrollPct, { stiffness: 200, damping: 30 });

    useEffect(() => {
        const onScroll = () => {
            const el = document.documentElement;
            const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
            setScrollPct(pct || 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none">
            <motion.div
                style={{ width: `${scrollPct}%` }}
                className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-primary rounded-full"
                transition={{ ease: 'linear' }}
            />
        </div>
    );
};

export default ScrollProgressBar;
