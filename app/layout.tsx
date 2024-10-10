import type { Metadata } from "next";
import localFont from "next/font/local";
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
const gustavoMedium = localFont({
  src: "./fonts/Gustavo_Medium.otf",
  variable: "--font-gustavo-medium",
  weight: "500",
});
const gustavoRegular = localFont({
  src: "./fonts/Gustavo_Regular.otf",
  variable: "--font-gustavo-reg",
  weight: "400",
});

export const metadata: Metadata = {
  title: "LIDERA",
  description: "Tú indicas el problema, nosotros te damos la solución",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gustavoMedium.variable} ${gustavoRegular.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
