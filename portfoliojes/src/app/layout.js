import localFont from "next/font/local";
import Viewport from "next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "JES - Portfolio",
  applicationName: "JES - Portfolio",
  description: "Personal porfolio",
  authors: [{ name: "Jose Espasa Saval" }],
  creator: "Jose Espasa Saval",
  language: "en",
  copyright: "Copyright © 2025",
  contentType: "text/html; charset=utf-8",
  handheldFriendly: "True",
  revised: "Thursday, March 18th, 2025, 9:15 am",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="copyright" content={metadata.copyright} />
        <meta name="HandheldFriendly" content={metadata.handheldFriendly} />
        <meta name="revised" content={metadata.revised} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
