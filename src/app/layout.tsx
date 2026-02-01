import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimatedFooter from "@/components/AnimatedFooter";
import JsonLd from "@/components/JsonLd";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://keyproduction.com'),
  title: {
    default: "Key Production | Premier Event & Commercial Production",
    template: "%s | Key Production"
  },
  description: "Key Production is a world-class production company specializing in spectacular live events and cinematic commercial content. Transform your vision into reality.",
  keywords: ["event production", "commercial production", "live events", "video production", "corporate events", "film production", "event planning", "commercial video", "brand videos", "concert production"],
  authors: [{ name: "Key Production" }],
  creator: "Key Production",
  publisher: "Key Production",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Key Production | Premier Event & Commercial Production",
    description: "Transform your vision into reality with world-class event and commercial production.",
    type: "website",
    locale: "en_US",
    url: "https://keyproduction.com",
    siteName: "Key Production",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Key Production - Premier Event & Commercial Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Production | Premier Event & Commercial Production",
    description: "Transform your vision into reality with world-class event and commercial production.",
    images: ["/og-image.jpg"],
    creator: "@keyproduction",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://keyproduction.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton phoneNumber="94769238423" />
        <AnimatedFooter />
      </body>
    </html>
  );
}
