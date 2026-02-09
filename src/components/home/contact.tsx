"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, ArrowUpRight, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What services does Satbodha provide?",
        answer: "Satbodha offers a comprehensive range of services including Custom Software Development, Mobile App Development, UI/UX Design, Digital Marketing, SEO, WhatsApp Business API integration, and E-Learning Platform development."
    },
    {
        question: "How can Satbodha benefit my business?",
        answer: "We help businesses grow by implementing scalable digital solutions that improve efficiency, automate processes, and expand market reach. Our data-driven marketing strategies also ensure measurable ROI."
    },
    {
        question: "Do you offer educational programs?",
        answer: "Yes, our education division provides high-quality workshops, webinars, and training programs aimed at fostering innovation and practical skills in technology and business."
    },
    {
        question: "Where are you located?",
        answer: "Our headquarters are located in Alappuzha, Kerala, India. However, we serve clients globally through our digital platforms."
    }
];

export function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">Frequently Asked Questions</h2>
                    <p className="text-zinc-400">Everything you need to know about our services and mission.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={false}
                            className={cn(
                                "border rounded-2xl overflow-hidden transition-all duration-300",
                                activeIndex === index ? "border-primary/50 bg-primary/5" : "border-white/10 bg-white/5 hover:border-white/20"
                            )}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className={cn("text-lg font-medium transition-colors", activeIndex === index ? "text-primary" : "text-zinc-200")}>
                                    {faq.question}
                                </span>
                                <span className={cn("p-2 rounded-full transition-colors", activeIndex === index ? "bg-primary/20 text-primary" : "bg-white/10 text-zinc-400")}>
                                    {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <section id="contact" className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden">
            {/* Animated Noise/Grain Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 animate-noise" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[10vw] leading-[0.8] font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 mb-8"
                    >
                        LET&apos;S TALK
                    </motion.h2>

                    <p className="text-xl md:text-2xl text-zinc-400 mb-12 font-light">
                        Have a visionary idea? We have the engineering prowess to build it.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto mb-16">
                        <a href="mailto:hello@satbodha.com" className="group p-8 border border-white/10 hover:border-white/30 bg-white/5 transition-all rounded-3xl backdrop-blur-md">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-xs font-mono text-zinc-500 uppercase">Email</span>
                                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:rotate-45 transition-all" />
                            </div>
                            <h3 className="text-2xl text-white font-medium group-hover:text-primary transition-colors">hello@satbodha.com</h3>
                        </a>
                        <a href="tel:+919037273007" className="group p-8 border border-white/10 hover:border-white/30 bg-white/5 transition-all rounded-3xl backdrop-blur-md">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-xs font-mono text-zinc-500 uppercase">Phone</span>
                                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:rotate-45 transition-all" />
                            </div>
                            <h3 className="text-2xl text-white font-medium group-hover:text-primary transition-colors">+91 9037273007</h3>
                        </a>
                    </div>

                    <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-white text-black hover:bg-zinc-200" asChild>
                        <a href="mailto:hello@satbodha.com">
                            Start a Project <Send className="ml-3 w-5 h-5" />
                        </a>
                    </Button>
                </div>

                <div className="mt-32 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
                    <p>&copy; 2024 Satbodha Technologies.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
