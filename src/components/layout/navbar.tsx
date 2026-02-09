"use client";

import { motion, useScroll, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";

const links = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

function MagneticLink({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        position.x.set(middleX * 0.5); // Magnetic strength
        position.y.set(middleY * 0.5);
    };

    const reset = () => {
        position.x.set(0);
        position.y.set(0);
    };

    const { x, y } = position;
    return (
        <motion.div
            style={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            <Link
                ref={ref}
                href={href}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                className={className}
            >
                {children}
            </Link>
        </motion.div>
    )
}

export function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
        >
            <nav className="pointer-events-auto flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 shadow-2xl">
                <MagneticLink href="/" className="px-6 py-3 text-white font-bold font-heading rounded-full hover:bg-white/10 transition-colors">
                    SB.
                </MagneticLink>

                <div className="flex gap-1">
                    {links.map((link) => (
                        <MagneticLink key={link.name} href={link.href} className="px-5 py-3 text-zinc-400 hover:text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors">
                            {link.name}
                        </MagneticLink>
                    ))}
                </div>

                <MagneticLink href="#contact" className="ml-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors text-sm">
                    Let&apos;s Talk
                </MagneticLink>
            </nav>
        </motion.header>
    );
}
