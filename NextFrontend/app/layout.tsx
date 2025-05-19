/** @format */

import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prashant Yadav | Senior Blockchain Developer",
  description:
    "Passionate Blockchain Developer with experience in EVM-based chains, Hyperledger Fabric, and production-grade dApps.",
  metadataBase: new URL("https://prashantyadav008.com"),

  // Basic metadata
  applicationName: "Prashant Yadav Portfolio",
  authors: [{ name: "Prashant Yadav" }],
  keywords: [
    "Senior Blockchain Developer",
    "Golang",
    "Web3",
    "Blockchain",
    "React",
    "Node.js",
  ],

  openGraph: {
    type: "website",
    url: "https://prashantyadav.com",
    title: "Prashant Yadav | Senior Blockchain Developer",
    description:
      "Passionate Blockchain Developer with experience in EVM-based chains, Hyperledger Fabric, and production-grade dApps.",
    siteName: "Prashant Yadav",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prashant Yadav - Portfolio",
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    canonical: "https://prashantyadav008.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
