"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Globe } from "lucide-react";

export function About() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">

                    {/* Panel 1: Intro */}
                    <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-10 border-r border-white/10">
                        <div className="max-w-4xl">
                            <h2 className="text-[8vw] leading-none font-bold font-heading text-white mb-8">
                                WE ARE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">SATBODHA</span>
                            </h2>
                            <p className="text-2xl md:text-4xl text-zinc-400 leading-relaxed font-light">
                                A dual-force ecosystem merging enterprise-grade <strong className="text-white">Technology</strong> with visionary <strong className="text-white">Education</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Panel 2: Technology */}
                    <div className="w-screen h-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center p-10 border-r border-white/10 bg-zinc-900/50">
                        <div className="max-w-2xl space-y-8">
                            <Code className="w-24 h-24 text-primary mb-8" />
                            <h3 className="text-6xl font-bold text-white">Digital Architectures</h3>
                            <p className="text-xl text-zinc-400 leading-relaxed">
                                We build the impossible. From AI-driven automation systems to complex cloud infrastructures, our engineering team constructs the digital backbone of modern enterprises.
                            </p>
                            <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-xl font-bold text-white">AS</div>
                                <div>
                                    <p className="text-white text-lg font-medium">Anandhu Sajan</p>
                                    <p className="text-primary">Founder & CTO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Panel 3: Education */}
                    <div className="w-screen h-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center p-10 bg-black">
                        <div className="max-w-2xl space-y-8">
                            <Globe className="w-24 h-24 text-emerald-400 mb-8" />
                            <h3 className="text-6xl font-bold text-white">Future Academics</h3>
                            <p className="text-xl text-zinc-400 leading-relaxed">
                                Knowledge is power, but application is impact. Satbodha Academy bridges the gap between theoretical learning and industry-grade practical execution.
                            </p>
                            <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-xl font-bold text-white">NS</div>
                                <div>
                                    <p className="text-white text-lg font-medium">Dr. Nimisha S</p>
                                    <p className="text-emerald-400">Co-Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
