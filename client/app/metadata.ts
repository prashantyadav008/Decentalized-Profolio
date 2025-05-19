// app/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Prashant Yadav | Portfolio",
  description: "Passionate Blockchain Developer & Web3 Enthusiast",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
};