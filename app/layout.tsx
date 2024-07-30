import localFont from "next/font/local";
import "./globals.css";

import LayoutClientProviders from "@/src/providers/LayoutClientProviders";
import { Metadata } from "next";

const MyriadPro = localFont({ src: "../public/fonts/MyriadPro-Regular.otf" });
const VPPixel = localFont({ src: "../public/fonts/VP Pixel W03 Bold.ttf" });

export const metadata: Metadata = {
  title: "SpaceBase",
  description: "SpaceBase...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${VPPixel.className}`}>
        <LayoutClientProviders>{children}</LayoutClientProviders>
      </body>
    </html>
  );
}
