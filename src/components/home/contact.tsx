"use client";

import { useRef } from "react";
import { Canvas, useFrame, RootState } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error -- maath is not typed
import * as random from "maath/random/dist/maath-random.esm";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

function Network(props: any) {
    const ref = useRef<any>(null);
    const sphere = random.inSphere(new Float32Array(3000), { radius: 1.2 });

    useFrame((state: RootState, delta: number) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00ff9d"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export function Faq() {
    return (
        <section className="py-10 bg-black border-t border-white/10 text-center">
            <p className="text-zinc-500">FAQ Module - System Optimal</p>
        </section>
    );
}

export function Contact() {
    return (
        <section id="contact" className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Network />
                </Canvas>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                <motion.h2
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-[12vw] leading-[0.8] font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-8 tracking-tighter mix-blend-overlay"
                >
                    CONNECT
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto mb-16">
                    <a href="mailto:hello@satbodha.com" className="flex-1 p-8 border border-primary/20 bg-black/40 backdrop-blur-md rounded-2xl hover:bg-primary/10 transition-all group">
                        <span className="block text-xs font-mono text-primary/50 mb-2">SIGNAL TRANSMISSION</span>
                        <h3 className="text-2xl text-white font-bold group-hover:text-primary transition-colors">hello@satbodha.com</h3>
                    </a>
                </div>

                <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-white text-black hover:bg-primary hover:text-black hover:shadow-[0_0_30px_rgba(0,255,157,0.6)] transition-all duration-500" asChild>
                    <a href="mailto:hello@satbodha.com">
                        Initiate Sequence <Send className="ml-3 w-5 h-5" />
                    </a>
                </Button>

                <div className="mt-32 text-zinc-600 text-xs font-mono">
                    Running Systems: NEXT.JS // THREE.JS // FRAMER<br />
                    &copy; 2024 SATBODHA TECHNOLOGIES
                </div>
            </div>
        </section>
    );
}
