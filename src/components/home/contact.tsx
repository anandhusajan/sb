"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

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
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">Everything you need to know about our services and mission.</p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl"
                >
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Transform Your Ideas?</h2>
                        <p className="text-lg text-indigo-100 mb-8">
                            Whether you need a cutting-edge software solution or looking to upskill with our educational programs, we&apos;re here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                            <Button size="lg" variant="secondary" className="text-indigo-900 font-bold">
                                Book an Appointment
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white hover:text-white">
                                Contact Sales
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-8">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white/10 rounded-lg"><Mail className="w-5 h-5" /></div>
                                <div>
                                    <p className="text-xs text-indigo-300 uppercase tracking-wider mb-1">Email</p>
                                    <a href="mailto:support@satbodha.com" className="font-medium hover:text-indigo-200">support@satbodha.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white/10 rounded-lg"><Phone className="w-5 h-5" /></div>
                                <div>
                                    <p className="text-xs text-indigo-300 uppercase tracking-wider mb-1">Phone</p>
                                    <a href="tel:+919037273007" className="font-medium hover:text-indigo-200">+91 9037273007</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white/10 rounded-lg"><MapPin className="w-5 h-5" /></div>
                                <div>
                                    <p className="text-xs text-indigo-300 uppercase tracking-wider mb-1">Location</p>
                                    <p className="font-medium">Alappuzha, Kerala, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
