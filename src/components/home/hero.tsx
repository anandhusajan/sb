"use client";

import { useRef } from "react";
import { Canvas, useFrame, RootState } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error -- maath is not typed
import * as random from "maath/random/dist/maath-random.esm";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

function Stars(props: any) {
    const ref = useRef<any>(null);
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    useFrame((state: RootState, delta: number) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00ff9d"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export function Hero() {
    return (
        <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">

            {/* 3D Canvas Layer */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                </Canvas>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 text-center px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-[10vw] md:text-[8vw] font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 tracking-tighter leading-none mb-6">
                        GALACTIC <br />
                        <span className="text-primary drop-shadow-[0_0_20px_rgba(0,255,157,0.5)]">INNOVATION</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light"
                >
                    Transcending boundaries with next-gen software engineering and transformative educational ecosystems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,255,157,0.4)] transition-all duration-300">
                        Explore Universe <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm">
                        <Play className="mr-2 w-5 h-5 fill-white" /> Showreel
                    </Button>
                </motion.div>
            </div>

            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </section>
    );
}
