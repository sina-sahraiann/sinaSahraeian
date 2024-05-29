import type { Metadata } from "next";
import { Open_Sans ,Vazirmatn } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';



import "../globals.css";
import { ThemeProvider } from "../provider";
import { cn } from "@/lib/utils";

const inter = Open_Sans({ subsets: ['latin'], weight: ["300", "400", "500", "700"], variable: '--font-inter'});
const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazirmatn',
});

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
      <body className={`${inter.variable} ${vazirmatn.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
