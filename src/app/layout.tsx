import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benedictine Sisters of St Agnes, Chipole",
  description: "A growing community of Benedictine Nuns in Chipole, Tanzania.",
  icons: {
    icon: [
      { url: "/logo/chipole_logo.png" },
      { url: "/logo/chipole_logo.png", sizes: "32x32" },
      { url: "/logo/chipole_logo.png", sizes: "16x16" },
    ],
    apple: "/logo/chipole_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
