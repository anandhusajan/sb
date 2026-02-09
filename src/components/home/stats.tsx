"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
    { label: "Projects Shipped", value: 100, suffix: "+" },
    { label: "Happy Clients", value: 500, suffix: "+" },
    { label: "Global Reach", value: 1.2, suffix: "M+" },
    { label: "Years Excellence", value: 5, suffix: "+" },
];

const Counter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            setCount(Math.floor(progress * (to - from) + from));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [from, to, duration]);

    return <>{count}</>;
};

export function Stats() {
    return (
        <section className="relative py-24 bg-background overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-primary/50 transition-colors duration-500"
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                            <div className="relative z-10 text-center">
                                <h3 className="text-4xl md:text-5xl font-bold font-heading text-white mb-2 tracking-tight">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                                        <Counter from={0} to={stat.value} duration={2} />{stat.suffix}
                                    </span>
                                </h3>
                                <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
