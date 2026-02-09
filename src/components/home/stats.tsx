"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
    { label: "Projects Completed", value: 100, suffix: "+" },
    { label: "Happy Clients", value: 500, suffix: "+" },
    { label: "Global Reach", value: 1.2, suffix: "M+" },
    { label: "Years Experience", value: 5, suffix: "+" },
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
        <section className="py-20 bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
                                <Counter from={0} to={stat.value} duration={2} />{stat.suffix}
                            </h3>
                            <p className="text-muted-foreground font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Logos could go here */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder for logos - using text for now or simple circles */}
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-8 w-32 bg-foreground/10 rounded animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
