"use client";

import { useEffect, useState } from "react";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentSection, setCurrentSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setCurrentSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 right-0 p-4 bg-[var(--header-color)] text-white text-center z-50">
          <nav className="mt-2">
            <a href="#home" className={`mx-2 hover:underline ${currentSection === "home" ? "text-[var(--secondary-color)]" : ""}`}>Home</a>
            <a href="#about" className={`mx-2 hover:underline ${currentSection === "about" ? "text-[var(--secondary-color)]" : ""}`}>About</a>
            <a href="#projects" className={`mx-2 hover:underline ${currentSection === "projects" ? "text-[var(--secondary-color)]" : ""}`}>Projects</a>
            <a href="#contact" className={`mx-2 hover:underline ${currentSection === "contact" ? "text-[var(--secondary-color)]" : ""}`}>Contact</a>
          </nav>
        </header>
        <main className="flex-grow pt-16">{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          <p>&copy; 2025</p>
          <div className="mt-2">
            <a href="https://twitter.com/yourprofile" className="mx-2 hover:underline">Twitter</a>
            <a href="https://linkedin.com/in/yourprofile" className="mx-2 hover:underline">LinkedIn</a>
            <a href="https://github.com/yourprofile" className="mx-2 hover:underline">GitHub</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
