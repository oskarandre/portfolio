"use client";

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
  
  
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {/*backdrop-blur-sm backdrop-grayscale backdrop-contrast-150 backdrop-brightness-125  */}
        
        <main className="flex-grow">{children}</main>
        
      </body>
    </html>
  );
}
