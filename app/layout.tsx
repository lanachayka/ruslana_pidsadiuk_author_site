import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const garamondFont = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruslana Pidsadiuk Author Page",
  description: "Ruslana Pidsadiuk book catalogue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${garamondFont.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="min-h-full flex flex-col pt-20 px-4">
        <Header />
        <div className="container mx-auto px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
