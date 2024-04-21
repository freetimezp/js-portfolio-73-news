import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';

import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

import Header from '@/components/Header';

import "./variables.css";
import "./globals.css";


const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project | News",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
