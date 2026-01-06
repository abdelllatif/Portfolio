import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdellatif Hissoune",
  description:
    "Développeur Web Full-Stack - Création de solutions numériques innovantes avec les technologies web modernes",
  keywords:
    "Abdellatif Hissoune, Développeur Web Full-Stack, Ingénieur Logiciel, React, Next.js, Node.js, JavaScript, Développement Web",
  authors: [{ name: "Abdellatif Hissoune" }],
  creator: "Abdellatif Hissoune",
  openGraph: {
    title: "Abdellatif Hissoune - Développeur Web Full-Stack",
    description:
      "Développeur Web Full-Stack - Création de solutions numériques innovantes avec les technologies web modernes",
    url: "https://abdellatif-hissoune.com",
    siteName: "Portfolio Abdellatif Hissoune",
    images: [
      {
        url: "/profile-icon.png",
        width: 1200,
        height: 630,
        alt: "Abdellatif Hissoune - Développeur Web Full-Stack",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdellatif Hissoune - Développeur Web Full-Stack",
    description:
      "Développeur Web Full-Stack - Création de solutions numériques innovantes avec les technologies web modernes",
    images: ["/profile-icon.png"],
  },
  icons: {
    icon: "/profile-icon.png",
    shortcut: "/profile-icon.png",
    apple: "/profile-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Abdellatif Hissoune" />
        <link rel="canonical" href="https://abdellatif-hissoune.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
