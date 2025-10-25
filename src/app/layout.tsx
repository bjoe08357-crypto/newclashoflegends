import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SupportedLanguage } from "@/i18n";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clash Of Legends",
  description: "Clash Of Legends — Real Madrid Legends vs Barça Legends at GBK Stadium.",
  icons: {
    icon: "/clash-of-legends-logo.avif",
    shortcut: "/clash-of-legends-logo.avif",
    apple: "/clash-of-legends-logo.avif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // default language via <html lang> attribute
  const lang: SupportedLanguage = "en";
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
