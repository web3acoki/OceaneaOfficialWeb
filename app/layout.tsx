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
