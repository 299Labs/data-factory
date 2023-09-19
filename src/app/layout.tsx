import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { GrainyFilter } from "@/src/components/Grainy";
import PageHeader from "@/src/components/Page.Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Factory",
  description:
    "Store your business data offline in our progressive wep application",
  manifest: "/manifest.webmanifest",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <PageHeader />
        <div aria-hidden="true" className="invisible absolute">
          <GrainyFilter />
        </div>
        <main className="mx-auto flex min-h-screen flex-col items-center space-y-8 text-center max-sm:mt-10 sm:space-y-16 sm:p-24 2xl:space-y-32">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
