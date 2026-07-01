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
        <PrivyProvider appId="cmqovhoal00cd0cl8h18gxq07" clientId="client-WY6aTL873eD4VAX9QCx1nXMZRMC8FegQs2UnRTLguNVXD" config={{ loginMethods: ["email", "telegram", "wallet"] }}>                   {children}
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
