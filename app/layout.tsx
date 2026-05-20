import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Kinga Żmuda | Software Engineer",
  description: "Software engineer with production Java and cloud API experience. CS graduate, tech event organizer. Browse my projects and background.",
  openGraph: {
    title: "Kinga Żmuda | Software Engineer",
    description: "Software engineer with production Java and cloud API experience. CS graduate, tech event organizer. Browse my projects and background.",
    url: "https://kingazmuda.com",
    siteName: "Kinga Żmuda",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kinga Żmuda | Software Engineer",
    description: "Software engineer with production Java and cloud API experience. CS graduate, tech event organizer.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
