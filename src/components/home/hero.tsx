"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

    return (
        <section ref={targetRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* 1. Aurora Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-black to-black animate-[spin_20s_linear_infinite] blur-[100px] opacity-60" />
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-black to-black animate-[spin_15s_linear_infinite_reverse] blur-[100px] opacity-60" />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <motion.div
                style={{ opacity, scale, y }}
                className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
            >
                {/* 2. Kinetic Typography Heading */}
                <h1 className="text-[12vw] leading-[0.85] font-bold font-heading text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-800 tracking-tighter select-none">
                    BUILDING
                </h1>
                <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-[2px] w-24 md:w-48 bg-gradient-to-r from-transparent to-primary"
                    />
                    <h1 className="text-[12vw] leading-[0.85] font-bold font-heading text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-800 tracking-tighter select-none italic pr-4">
                        REALITY
                    </h1>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-[2px] w-24 md:w-48 bg-gradient-to-l from-transparent to-primary"
                    />
                </div>

                {/* 3. Subtext & CTAs */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-zinc-400 text-lg md:text-xl max-w-2xl font-light tracking-wide"
                >
                    We engineer the digital future. Transforming abstract ideas into tangbile, high-impact software and educational ecosystems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-10 flex gap-6"
                >
                    <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-white text-black hover:bg-zinc-200 transition-all hover:scale-105" asChild>
                        <Link href="#contact" className="flex items-center gap-2">
                            Start Project <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm group" asChild>
                        <Link href="#services" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <Play className="w-4 h-4 fill-white" />
                            </div>
                            Showreel
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>

            {/* 4. Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 text-sm tracking-widest uppercase"
            >
                Scroll to Explore
            </motion.div>
        </section>
    );
}
