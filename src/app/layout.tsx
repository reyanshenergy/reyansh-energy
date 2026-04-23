import type { Metadata } from "next"; // Standard Next.js type
import "./globals.css";

// This replaces your old metadata block
export const metadata: Metadata = {
  title: "Reyansh Energy | Solar Solutions in India",
  description: "Affordable solar panel installation for homes and businesses. Save electricity bills with Reyansh Energy.",
  openGraph: {
    title: "Reyansh Energy",
    description: "Switch to solar and save electricity bills",
    url: "https://reyanshenergy.in",
    siteName: "Reyansh Energy",
    images: [
      {
        url: "/images/solar-hero.jpg", // Make sure this file exists in your public/images folder!
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}