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
      <body className={`relative min-h-screen ${inter.className}`}>
        <PageHeader />
        <div aria-hidden="true" className="invisible absolute">
          <GrainyFilter />
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
