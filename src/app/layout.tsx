import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "./utils/classNames";
import { NuqsAdapter } from "nuqs/adapters/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logan Bellemare | Portfolio",
  description:
    "A website to showcase my skills as a web developer, hope you enjoy your stay!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(["h-[100vh]", "bg-theme-image", inter.className])}
      >
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
