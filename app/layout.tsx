"use client";

import "./globals.css";

import { PrivyProvider } from "@privy-io/react-auth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <html lang="en" className="overflow-x-clip overscroll-x-none">
      <head>
        <title>Oceanea - Deep Blue. Beyond Diving.</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="font-sans antialiased overflow-x-clip overscroll-x-none">
        <PrivyProvider appId="cmq522aqh00cp0elco71pc6yo" config={{ loginMethods: ["email", "telegram", "wallet"] }}>
          {children}
        </PrivyProvider>
      </body>
    </html>
  </>;
}
