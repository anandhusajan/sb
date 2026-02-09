"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <section className="py-24 bg-background relative overflow-hidden">
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
                                activeIndex === index ? "border-indigo-500/50 bg-indigo-500/5" : "border-white/10 bg-white/5 hover:border-white/20"
                            )}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className={cn("text-lg font-medium transition-colors", activeIndex === index ? "text-indigo-400" : "text-zinc-200")}>
                                    {faq.question}
                                </span>
                                <span className={cn("p-2 rounded-full transition-colors", activeIndex === index ? "bg-indigo-500/20 text-indigo-400" : "bg-white/10 text-zinc-400")}>
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
        <section id="contact" className="py-24 relative bg-black overflow-hidden">
            {/* Particle/Grid Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
                            Let&apos;s Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Something Amazing</span>
                        </h2>
                        <p className="text-xl text-zinc-400 mb-8 max-w-lg">
                            Ready to transform your ideas into reality? Schedule a consultation or drop us a message.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Email Us</p>
                                    <a href="mailto:support@satbodha.com" className="text-white hover:text-indigo-400 transition-colors">support@satbodha.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Call Us</p>
                                    <a href="tel:+919037273007" className="text-white hover:text-indigo-400 transition-colors">+91 9037273007</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Visit Us</p>
                                    <p className="text-white">Alappuzha, Kerala, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">First Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Last Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Email Address</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Message</label>
                                <textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600 min-h-[120px]" placeholder="Tell us about your project..." />
                            </div>

                            <Button type="button" size="lg" className="w-full bg-white text-black hover:bg-zinc-200">
                                Send Message <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
