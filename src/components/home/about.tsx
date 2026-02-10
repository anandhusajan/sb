"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Canvas, useFrame, RootState } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

function BlackHole() {
    const ref = useRef<any>(null);
    useFrame((state: RootState) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Sphere ref={ref} args={[1, 64, 64]} scale={2.5}>
            <MeshDistortMaterial
                color="#000000"
                emissive="#220033"
                emissiveIntensity={0.5}
                roughness={0.1}
                metalness={1}
                distort={0.4}
                speed={2}
            />
        </Sphere>
    );
}

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative py-40 min-h-screen flex items-center justify-center overflow-hidden bg-black">

            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <BlackHole />
                </Canvas>
            </div>

            <motion.div
                style={{ scale, opacity }}
                className="relative z-10 text-center max-w-4xl px-4 mix-blend-difference"
            >
                <h2 className="text-6xl md:text-9xl font-bold font-heading text-white tracking-tighter mb-8">
                    EVENT HORIZON
                </h2>
                <div className="flex flex-col md:flex-row gap-12 text-left bg-black/50 backdrop-blur-md p-10 rounded-3xl border border-white/10">
                    <div className="flex-1">
                        <h3 className="text-2xl text-primary font-bold mb-4">SINGULARITY [TECH]</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            We operate at the edge of possibility. Our software solutions act as a gravitational force, pulling complex business requirements into a singular, streamlined point of efficiency.
                        </p>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl text-purple-500 font-bold mb-4">ACCRETION [EDU]</h3>
                        <p className="text-zinc-300 leading-relaxed">
                            Knowledge gathers here. Satbodha Academy is the accretion disk where raw talent is accelerated, energized, and transformed into industry-leading expertise.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
