"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

// Fallback HTML Implementation for reliability as Asset loading can be tricky in one-shot

const services = [
    { title: "Web Development", color: "from-blue-500 to-indigo-500" },
    { title: "Mobile Apps", color: "from-purple-500 to-pink-500" },
    { title: "AI Systems", color: "from-emerald-500 to-cyan-500" },
    { title: "Cloud Infra", color: "from-orange-500 to-red-500" },
];

export function Services() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} className="h-[300vh] bg-black relative">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-20 px-20">
                    <div className="flex-shrink-0 w-[40vw] h-[60vh] flex items-center justify-center">
                        <h2 className="text-8xl font-bold font-heading text-white bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 to-white">
                            OUR <br /> SERVICES
                        </h2>
                    </div>
                    {services.map((service, i) => (
                        <div key={i} className={`flex-shrink-0 w-[40vw] h-[60vh] rounded-3xl bg-gradient-to-br ${service.color} p-1 opacity-80 hover:opacity-100 transition-opacity duration-500 relative group`}>
                            <div className="absolute inset-[2px] bg-black rounded-[22px] flex flex-col items-center justify-center p-10">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                <h3 className="text-5xl font-bold text-white relative z-10">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
