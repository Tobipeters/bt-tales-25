import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "#BT_Tales'25 - Boluwatife & Oluwatobi Wedding";
const description =
  "Join us to celebrate our big day, on the 13th November, 2025, In Lagos, Nigeria. Explore their love story, gallery, RSVP, and leave your wishes. #BT_Tales'25";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "Love, BT_Tales'25, Wedding, Bolwatife and Oluwatobi Wedding, Event",
  openGraph: {
    title,
    description,
    images: ["/og-image.png"],
    type: "website",
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
        <Toaster />
      </body>
    </html>
  );
}
