"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Code, Smartphone, PenTool, Search, MessageCircle, Database, GraduationCap, TrendingUp } from "lucide-react";
import { MouseEvent } from "react";

const services = [
    { icon: Code, title: "Web Development", description: "High-performance, scalable web applications built with Next.js and React." },
    { icon: Smartphone, title: "App Development", description: "Native and cross-platform mobile solutions for iOS and Android." },
    { icon: PenTool, title: "UI/UX Design", description: "User-centric design systems that drive engagement and conversion." },
    { icon: Search, title: "SEO Mastery", description: "Advanced technical SEO to dominate search rankings and drive organic traffic." },
    { icon: MessageCircle, title: "WhatsApp Business", description: "Automated customer engagement via official WhatsApp API integration." },
    { icon: Database, title: "Custom Software", description: "Tailored enterprise solutions to streamline intricate business processes." },
    { icon: TrendingUp, title: "Digital Growth", description: "Data-driven marketing strategies to accelerate brand visibility." },
    { icon: GraduationCap, title: "EdTech Solutions", description: "Comprehensive LMS and e-learning platforms for modern education." },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative border border-white/10 bg-zinc-900/50 px-8 py-10 rounded-2xl overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800/50 border border-white/5 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-colors duration-300">
                <service.icon className="h-6 w-6 text-zinc-400 group-hover:text-indigo-400 transition-colors duration-300" />
            </div>

            <h3 className="mb-3 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                {service.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
            </p>
        </div>
    );
}

export function Services() {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading text-white mb-6"
                    >
                        Core Capabilities
                    </motion.h2>
                    <p className="text-zinc-400 text-lg">
                        We leverage the latest technology stacks to build solutions that are not just functional, but exceptional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
