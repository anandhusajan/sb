"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        Engineering The Future
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        We bridge the gap between visionary concepts and digital reality through two core pillars.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Tech Pillar - Large Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 row-span-2 p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Code className="w-64 h-64 text-indigo-500" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium uppercase tracking-wider mb-6">
                                    <Cpu className="w-3 h-3" /> Technology
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Digital Solutions</h3>
                                <p className="text-zinc-400 text-lg max-w-md">
                                    We engineer scalable, high-performance software and applications. From AI-driven automation to enterprise-grade platforms, we build the backbone of modern business.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 w-fit">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                    AS
                                </div>
                                <div>
                                    <p className="text-white font-medium">Anandhu Sajan</p>
                                    <p className="text-xs text-zinc-400">Founder & CTO</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Pillar - Tall Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1 row-span-2 p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden group flex flex-col"
                    >
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-900/20 to-transparent" />

                        <div className="relative z-10 flex-grow">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium uppercase tracking-wider mb-6">
                                <Globe className="w-3 h-3" /> Education
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Satbodha Academy</h3>
                            <p className="text-zinc-400 mb-6">
                                Empowering the next generation with interdisciplinary skills, critical thinking, and real-world application.
                            </p>
                        </div>

                        <div className="relative z-10 mt-auto flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                                NS
                            </div>
                            <div>
                                <p className="text-white font-medium">Dr. Nimisha S</p>
                                <p className="text-xs text-zinc-400">Co-Founder & CEO</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stat Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-3xl bg-indigo-600 text-white flex flex-col justify-center items-center text-center"
                    >
                        <h4 className="text-4xl font-bold mb-1">MSME</h4>
                        <p className="text-indigo-200 text-sm">Registered Enterprise</p>
                    </motion.div>

                    {/* Stat Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-6 rounded-3xl border border-white/10 bg-zinc-900/50 flex flex-col justify-center items-center text-center"
                    >
                        <p className="text-sm text-zinc-400 mb-2">Government of India</p>
                        <p className="text-white font-mono text-xs p-2 bg-black/50 rounded border border-white/5">UDYAM-KL-01-0052328</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
