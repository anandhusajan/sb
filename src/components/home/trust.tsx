"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Users, Globe } from "lucide-react";

const reasons = [
    { icon: ShieldCheck, title: "Scalable & Secure", description: "All our solutions are built with security-first architecture and scalability in mind." },
    { icon: Users, title: "Client-Centric", description: "We believe in building long-term partnerships, not just delivering projects." },
    { icon: Globe, title: "Global Standards", description: "Our work quality matches international standards, serving clients worldwide." },
    { icon: TrendingUp, title: "Growth Focused", description: "Technology that is designed to grow your business and improve efficiency." },
];

export function Trust() {
    return (
        <section className="py-20 bg-background border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Why Choose Satbodha?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We combine technical expertise with a deep understanding of business goals to deliver exceptional results.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6"
                        >
                            <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4">
                                <reason.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                            <p className="text-sm text-muted-foreground">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
