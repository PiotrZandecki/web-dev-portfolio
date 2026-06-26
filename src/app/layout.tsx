import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piotr.dev | Web Developer Portfolio",
  description: "Bilingual web developer portfolio built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
