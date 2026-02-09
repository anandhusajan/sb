import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "WhatsApp", href: "#", icon: MessageCircle },
];

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-20 pb-8 overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Massive Footer Brand Text */}
                <div className="mb-20 text-center">
                    <h2 className="text-[12vw] leading-none font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/0 select-none pointer-events-none">
                        SATBODHA
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/5 pb-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold font-heading text-white">
                                Satbodha.
                            </span>
                        </Link>
                        <p className="text-sm text-zinc-500 mb-6 max-w-xs leading-relaxed">
                            Crafting the digital future with precision engineering and visionary education.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        {/* Spacing */}
                    </div>

                    <div className="md:col-span-2 grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-white mb-6">Explore</h3>
                            <ul className="space-y-3 text-sm text-zinc-500">
                                <li><Link href="#services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
                                <li><Link href="#about" className="hover:text-indigo-400 transition-colors">About</Link></li>
                                <li><Link href="#contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-6">Legal</h3>
                            <ul className="space-y-3 text-sm text-zinc-500">
                                <li><span className="block text-zinc-600 mb-1 text-xs uppercase">MSME Registered</span> UDYAM-KL-01-0052328</li>
                                <li><Link href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} Satbodha Technologies. All rights reserved.</p>
                    <p>Made with ⚡ in India.</p>
                </div>
            </div>
        </footer>
    );
}
