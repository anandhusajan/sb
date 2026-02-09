import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter for body, Outfit for headings
import "./globals.css";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Satbodha | Building Ideas Into Reality",
    template: "%s | Satbodha",
  },
  description: "Satbodha delivers premium software solutions using the latest tech stack and provides interdisciplinary education to empower the next generation.",
  keywords: ["Software Development", "Education", "Next.js", "React", "Web Development", "App Development", "Satbodha"],
  authors: [{ name: "Satbodha Team" }],
  creator: "Satbodha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://satbodha.com",
    title: "Satbodha | Building Ideas Into Reality",
    description: "From concept to creation, we craft technology that drives growth and inspires progress.",
    siteName: "Satbodha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satbodha | Building Ideas Into Reality",
    description: "From concept to creation, we craft technology that drives growth and inspires progress.",
    creator: "@satbodha",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          outfit.variable
        )}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <JsonLd />
      </body>
    </html>
  );
}
