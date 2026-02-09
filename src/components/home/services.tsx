"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, PenTool, Database } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "Scalable, high-performance web applications built with modern frameworks and best practices. We ensure speed, security, and SEO dominance.",
        icon: Code,
        color: "bg-indigo-500"
    },
    {
        title: "Mobile Solutions",
        description: "Native and cross-platform mobile apps that deliver seamless user experiences. From iOS to Android, we cover the entire mobile ecosystem.",
        icon: Smartphone,
        color: "bg-purple-500"
    },
    {
        title: "UI/UX Design",
        description: "User-centric design systems that drive engagement. We craft intuitive interfaces that not only look beautiful but perform exceptionally well.",
        icon: PenTool,
        color: "bg-emerald-500"
    },
    {
        title: "Custom Software",
        description: "Tailored enterprise solutions to streamline intricate business processes. We solve complex problems with elegant, custom-built software.",
        icon: Database,
        color: "bg-pink-500"
    },
];

const Card = ({ i, service, progress, range, targetScale }: { i: number, service: typeof services[0], progress: MotionValue<number>, range: number[], targetScale: number }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="flex flex-col relative -top-[25%] h-[450px] w-[80vw] md:w-[800px] rounded-3xl p-10 origin-top bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden"
            >
                <div className={`absolute top-0 right-0 p-12 opacity-10 ${service.color} blur-[80px] w-64 h-64 rounded-full`} />

                <div className="flex gap-6 items-start h-full">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.color} text-white shadow-lg`}>
                        <service.icon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col justify-between h-full flex-1">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">{service.title}</h2>
                            <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">{service.description}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-500">
                            <span>0{i + 1}</span>
                            <span className="w-12 h-[1px] bg-zinc-700" />
                            <span>Service</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export function Services() {
    const container = useRef(null);
    const scrollYProgress = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <div ref={container} className="relative mt-[20vh] mb-[20vh]">
            {services.map((service, i) => {
                const targetScale = 1 - ((services.length - i) * 0.05);
                return <Card key={i} i={i} service={service} progress={scrollYProgress.scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
            })}
        </div>
    );
}
