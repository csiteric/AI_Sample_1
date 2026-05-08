import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Crimson_Pro } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Urban Roots Coffee — Seattle",
  description:
    "Specialty coffee truck rooted in Seattle. Find us at farmers markets and events across the city. Where the jungle meets your cup.",
  openGraph: {
    title: "Urban Roots Coffee",
    description: "Where the jungle meets your cup.",
    siteName: "Urban Roots Coffee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${crimsonPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
