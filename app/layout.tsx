"use client";

import "./globals.css";

import { Geologica } from "next/font/google";
import { PrivyProvider } from "@privy-io/react-auth";

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-geologica",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <html lang="en" className={geologica.variable}>
      <body className="font-sans antialiased">
        <PrivyProvider appId="cmjksvwjy05n3l40c0s99jnse" config={{ loginMethods: ["email", "telegram", "wallet"] }}>
          {children}
        </PrivyProvider>
      </body>
    </html>
  </>;
}
