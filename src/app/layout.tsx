import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "./utils/classNames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logan Bellemare Portfolio",
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
      <body className={classNames([inter.className, "h-[100vh]"])}>
        {children}
      </body>
    </html>
  );
}
