import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {cn} from  '@/lib/utils'
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinic Connect",
  description: "A Health Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased')}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
