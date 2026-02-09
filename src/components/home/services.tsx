"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, PenTool, Search, MessageCircle, Database, GraduationCap, TrendingUp } from "lucide-react";

const services = [
    { icon: Code, title: "Website Development", description: "Custom, responsive websites built with modern frameworks for maximum performance." },
    { icon: Smartphone, title: "App Development", description: "Native and cross-platform mobile applications that provide seamless user experiences." },
    { icon: PenTool, title: "UI/UX Design", description: "Intuitive and beautiful interfaces designed with a user-first approach." },
    { icon: Search, title: "SEO Services", description: "Data-driven strategies to improve your visibility and drive organic traffic." },
    { icon: MessageCircle, title: "WhatsApp API", description: "Official WhatsApp Business API integration for automated customer engagement." },
    { icon: Database, title: "Software Development", description: "Scalable enterprise software solutions tailored to your business needs." },
    { icon: TrendingUp, title: "Digital Marketing", description: "Comprehensive digital strategies to grow your brand and reach new customers." },
    { icon: GraduationCap, title: "E-Learning Platforms", description: "End-to-end LMS solutions for educational institutions and corporate training." },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Core Services</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive solutions designed to accelerate your growth and digital transformation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                            <a href="#" className="text-xs font-medium text-primary hover:underline flex items-center group/link">
                                Learn More <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
