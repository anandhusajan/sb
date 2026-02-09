import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"; // Using available icons

const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "WhatsApp", href: "#", icon: MessageCircle }, // WhatsApp matches MessageCircle roughly or use another if needed. Lucide has MessageCircle or Phone.
];

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border mt-auto">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                                Satbodha
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                            Building Ideas Into Reality. We craft technology that drives growth and provide education that inspires progress.
                        </p>
                        <div className="text-xs text-muted-foreground">
                            <p>MSME Registered</p>
                            <p>UDYAM-KL-01-0052328</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">App Development</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
                        <div className="flex gap-4 mb-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Alappuzha, Kerala, India<br />
                            <a href="mailto:support@satbodha.com" className="hover:text-primary">support@satbodha.com</a>
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Satbodha. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-primary">Terms</Link>
                        <Link href="#" className="hover:text-primary">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
