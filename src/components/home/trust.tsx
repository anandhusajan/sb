"use client";

import { useRef } from "react";
import { Canvas, useFrame, RootState } from "@react-three/fiber";
import { Cloud, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

function Fog() {
    const ref = useRef<any>(null);
    useFrame((state: RootState, delta: number) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05;
        }
    });
    return (
        <group ref={ref}>
            {/* @ts-expect-error -- cloud props varying in drei versions */}
            <Cloud opacity={0.5} speed={0.4} width={10} depth={1.5} segments={20} />
        </group>
    );
}

const brands = [
    "NEXT.JS", "REACT", "THREE.JS", "TAILWIND", "FRAMER", "Vercel", "OpenAI", "Supabase"
];

export function Trust() {
    return (
        <section className="py-20 bg-black relative overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <Canvas>
                    <Fog />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                </Canvas>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <h3 className="text-center text-zinc-500 mb-12 text-sm tracking-[0.5em] font-mono">POWERED BY</h3>

                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {brands.map((brand, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-2xl md:text-3xl font-bold font-heading text-white/50 hover:text-white transition-colors cursor-default"
                        >
                            {brand}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
