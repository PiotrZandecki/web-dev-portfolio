import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Web Developer Portfolio`,
    template: "%s",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  category: "portfolio",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/en/",
    languages: {
      en: "/en/",
      pl: "/pl/",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Web Developer Portfolio`,
    description: siteConfig.description,
    locale: "en_US",
    alternateLocale: ["pl_PL"],
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Web Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Web Developer Portfolio`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale}>
      <body>{children}</body>
    </html>
  );
}
