import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/context/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kimetz Loroño - Portfolio | Científico | Analista | Ingeniero de Datos | IT y Sistemas",
  description: "Portfolio personal de Kimetz Loroño - Científico, Analista e Ingeniero de Datos | IT y Sistemas",
  keywords: ["Kimetz Loroño", "portfolio", "data scientist", "data analyst", "data engineer", "ingeniero de datos", "IT", "sistemas", "cientifico de datos", "analista de datos", "desarrollo web"],
  authors: [{ name: "Kimetz Loroño" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Kimetz Loroño - Portfolio",
    description: "Científico, Analista e Ingeniero de Datos | IT y Sistemas",
    type: "website",
    url: "https://kimetz-portfolio.vercel.app",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimetz Loroño - Portfolio",
    description: "Científico, Analista e Ingeniero de Datos | IT y Sistemas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            {children}
            <Toaster />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
