import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { DynamicCursor } from '@/components/DynamicCursor';

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Wolrix | Elite Digital Holdings",
  description: "Wolrix - A premier digital holdings company encompassing education, development, and venture investments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${geist.variable} antialiased bg-background text-foreground`}>
        {children}
        <DynamicCursor />
      </body>
    </html>
  );
}
