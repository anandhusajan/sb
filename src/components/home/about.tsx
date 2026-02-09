"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Leading With Vision</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Satbodha is built on the dual pillars of cutting-edge technology and transformative education.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Technology Company */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors"
                    >
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
                                Technology
                            </span>
                            <h3 className="text-2xl font-bold font-heading mb-4">Empowering Your Digital Journey</h3>
                            <p className="text-muted-foreground mb-8">
                                We create smart, scalable digital solutions that help businesses grow with reliable websites, apps, and software services. From custom development to automation, we turn complexity into simplicity.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <User className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="font-semibold">Anandhu Sajan</p>
                                <p className="text-sm text-muted-foreground">Founder & CTO</p>
                                <a href="mailto:cto@satbodha.com" className="text-xs text-primary hover:underline">cto@satbodha.com</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Platform */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors"
                    >
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs font-semibold uppercase tracking-wider mb-4">
                                Education
                            </span>
                            <h3 className="text-2xl font-bold font-heading mb-4">Inspiring Future Leaders</h3>
                            <p className="text-muted-foreground mb-8">
                                We provide engaging, high-quality educational experiences that inspire learning, growth, and knowledge for everyone. We empower learners with curiosity, innovation, and real-world skills.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                                <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <p className="font-semibold">Dr. Nimisha S</p>
                                <p className="text-sm text-muted-foreground">Co-Founder & CEO</p>
                                <a href="mailto:ceo@satbodha.com" className="text-xs text-primary hover:underline">ceo@satbodha.com</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
