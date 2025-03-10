"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname();

  const excludedRoutes = ["/auth/login", "/auth/signup"];
  const isExcluded = excludedRoutes.includes(pathname);
  return (
    <html lang="en">
      <body>
        {isExcluded ? <main>{children}</main> : <Layout>{children}</Layout>}
      </body>
    </html>
  );
}
