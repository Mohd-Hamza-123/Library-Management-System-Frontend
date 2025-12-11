import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/conf/site";
import { Poppins } from "next/font/google";
import Providers from "@/Providers/Providers";
import { Toaster } from "@/components/ui/sonner"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${poppins.className} antialiased`}>
        <Toaster />
        <Providers> {children} </Providers>
      </body>
    </html>
  );
}
