import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { About } from "@/components/home/about";
import { Services } from "@/components/home/services";
import { Trust } from "@/components/home/trust";
import { Faq, Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Trust />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
