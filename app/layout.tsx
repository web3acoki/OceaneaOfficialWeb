"use client";

import "./globals.css";

import Script from "next/script";
import { PrivyProvider } from "@privy-io/react-auth";

const GA_MEASUREMENT_ID = "G-E5N9RJWB15";

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
        <PrivyProvider appId="cmq522aqh00cp0elco71pc6yo" clientId="client-WY6aFeyKd82HYmFTDGaVct5McWfkgzCgwMSAj5wuYyMXN" config={{ loginMethods: ["email", "telegram", "wallet"] }}>                   {children}
        </PrivyProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  </>;
}
