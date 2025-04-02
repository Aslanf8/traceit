import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TraceIT - CFIA Compliance Made Simple",
  description:
    "TraceIT helps Canadian food businesses meet CFIA traceability requirements with a simple solution I built for my mom's freeze-dried food business and refined over three years of real-world use.",
  icons: {
    icon: "/main-icon.png",
    apple: "/main-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
