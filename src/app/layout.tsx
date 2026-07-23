import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kimetz Loroño - Portfolio | Data Scientist | Data Analyst | IT & Systems",
  description: "Portfolio personal de Kimetz Loroño - Data Scientist, Data Analyst e IT & Systems",
  keywords: ["Kimetz Loroño", "portfolio", "data scientist", "data analyst", "IT", "systems", "desarrollo web"],
  authors: [{ name: "Kimetz Loroño" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Kimetz Loroño - Portfolio",
    description: "Data Scientist, Data Analyst e IT & Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimetz Loroño - Portfolio",
    description: "Data Scientist, Data Analyst e IT & Systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
