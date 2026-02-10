"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
    { label: "Systems Online", value: 100, suffix: "%" },
    { label: "Data Processed", value: 500, suffix: "TB" },
    { label: "Global Nodes", value: 1.2, suffix: "K" },
    { label: "Uptime", value: 99.9, suffix: "%" },
];

function HolographicCard({ stat, index }: { stat: typeof stats[0], index: number }) {
    const [random, setRandom] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRandom(Math.random());
        }, 100 + index * 50);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group p-6 border border-primary/20 bg-black/40 backdrop-blur-md overflow-hidden rounded-xl h-full"
        >
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,157,0.05)_50%)] bg-[length:100%_4px] pointer-events-none" />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary" />

            {/* Dynamic Background Pulse */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full space-y-2">
                <span className="text-xs font-mono text-primary/50 uppercase tracking-widest mb-2">
                    SYS.STAT.0{index + 1}
                </span>
                <h3 className="text-5xl font-bold font-heading text-white tracking-widest drop-shadow-[0_0_10px_rgba(0,255,157,0.8)]">
                    {stat.value}{stat.suffix}
                </h3>
                <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest">{stat.label}</p>

                {/* Decorator Binary */}
                <div className="mt-4 text-[10px] text-primary/30 font-mono break-all w-full text-center leading-none opacity-50">
                    {Array.from({ length: 40 }).map(() => (Math.random() > 0.5 ? 1 : 0)).join('')}
                </div>
            </div>
        </motion.div>
    );
}

export function Stats() {
    return (
        <section className="py-20 bg-black relative border-y border-white/5">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <HolographicCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
