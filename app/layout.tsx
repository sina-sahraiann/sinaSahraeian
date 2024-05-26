import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';


import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Open_Sans({ subsets: ['latin'], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "Sina Sahraeian",
  description: "What can Sina Sahraeian do",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="manifest/favicon.ico" sizes="48x48" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
