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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TWTDR597P8" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TWTDR597P8');
            `,
          }}
        />
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
