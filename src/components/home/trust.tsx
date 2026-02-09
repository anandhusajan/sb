"use client";

"use client";


const brands = [
    "Next.js", "React", "TypeScript", "Tailwind Code", "Node.js", "AWS", "Google Cloud",
    "Vercel", "Stripe", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Figma"
];

export function Trust() {
    return (
        <section className="py-20 bg-background border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-10">
                <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Powered by Modern Tech Stack</p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap py-4 flex gap-12 items-center">
                    {/* Duplicate list for seamless loop */}
                    {[...brands, ...brands, ...brands].map((brand, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-700/50 mx-4 uppercase font-heading select-none hover:text-indigo-500/50 transition-colors cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4 flex gap-12 items-center" aria-hidden="true">
                    {[...brands, ...brands, ...brands].map((brand, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-700/50 mx-4 uppercase font-heading select-none hover:text-indigo-500/50 transition-colors cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
