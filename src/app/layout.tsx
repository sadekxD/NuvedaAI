import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NuvedaAI — Coming Soon",
  description:
    "A new standard for AI powered creative production. NuvedaAI is launching soon — a standalone platform designed to help creators, brands, and teams generate and enhance content through powerful AI workflows.",
  openGraph: {
    title: "NuvedaAI — Coming Soon",
    description: "A new standard for AI powered creative production.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        {children}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "f829275f42f54c91a5233cf8899bf7f3"}'
        />
      </body>
    </html>
  );
}
