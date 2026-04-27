"use client";

import "./globals.css";

import { Geologica } from "next/font/google";
import { PrivyProvider } from "@privy-io/react-auth";

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geologica",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <html lang="en" className={`${geologica.variable} overflow-x-clip overscroll-x-none`}>
      <head>
        <link rel="icon" href="/logoIcon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased overflow-x-clip overscroll-x-none">
        <PrivyProvider appId="cmjksvwjy05n3l40c0s99jnse" config={{ loginMethods: ["email", "telegram", "wallet"] }}>
          {children}
        </PrivyProvider>
      </body>
    </html>
  </>;
}
