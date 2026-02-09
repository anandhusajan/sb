"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { label: "Projects Shipped", value: 100, suffix: "+" },
    { label: "Happy Clients", value: 500, suffix: "+" },
    { label: "Global Reach", value: 1.2, suffix: "M+" },
    { label: "Years Excellence", value: 5, suffix: "+" },
];

function Counter({ value, suffix }: { value: number | string; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 200 });
    const isInView = useRef(false);

    useEffect(() => {
        const numericValue = typeof value === 'number' ? value : parseFloat(value as string);
        if (isNaN(numericValue)) return;

        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(value.toString().includes('.') ? 1 : 0);
            }
        });

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !isInView.current) {
                isInView.current = true;
                motionValue.set(numericValue);
            }
        });

        if (ref.current) observer.observe(ref.current);

        return () => {
            unsubscribe();
            observer.disconnect();
        }
    }, [value, motionValue, springValue]);

    return <span className="inline-flex"><span ref={ref}>0</span>{suffix}</span>;
}


function StatItem({ stat, index, scrollYProgress }: { stat: { label: string, value: number | string, suffix: string }, index: number, scrollYProgress: MotionValue<number> }) {
    const y = useTransform(scrollYProgress, [0, 1], [100 * (index % 2 === 0 ? 1 : -1), -100 * (index % 2 === 0 ? 1 : -1)]);

    return (
        <motion.div
            style={{ y }}
            className="flex flex-col items-center justify-center p-10 border border-white/10 bg-white/5 backdrop-blur-sm rounded-none hover:bg-white/10 transition-colors group relative"
        >
            <div className="absolute top-0 left-0 w-2 h-2 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary group-hover:w-full transition-all duration-500 ease-out" />

            <h3 className="text-6xl md:text-7xl font-bold font-heading text-white mb-2 tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-zinc-500 uppercase tracking-widest text-sm font-medium">{stat.label}</p>
        </motion.div>
    )
}

export function Stats() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    return (
        <section ref={containerRef} className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatItem key={index} stat={stat} index={index} scrollYProgress={scrollYProgress} />
                    ))}
                </div>
            </div>
        </section>
    );
}
