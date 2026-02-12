import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getJsonLd } from "@/lib/seo/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://barberstudio.co.za"
  ),
  title: "Barber Studio | Barber Shop in Illovo, Sandton",
  description:
    "Precision cuts, shaves, grooming and facial services in Illovo, Sandton. Book easily on WhatsApp.",
  keywords: [
    "barber",
    "barber shop",
    "haircut",
    "shave",
    "grooming",
    "Illovo",
    "Sandton",
    "Johannesburg",
    "beard trim",
    "facial",
  ],
  openGraph: {
    title: "Barber Studio | Barber Shop in Illovo, Sandton",
    description:
      "Precision cuts, shaves, grooming and facial services in Illovo, Sandton. Book easily on WhatsApp.",
    url: "https://barberstudio.co.za",
    siteName: "Barber Studio",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/images/storefront.webp",
        width: 1200,
        height: 630,
        alt: "Barber Studio in Illovo, Sandton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barber Studio | Barber Shop in Illovo, Sandton",
    description:
      "Precision cuts, shaves, grooming and facial services in Illovo, Sandton.",
    images: ["/images/storefront.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
