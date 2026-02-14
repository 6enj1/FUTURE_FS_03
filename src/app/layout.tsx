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
    process.env.NEXT_PUBLIC_SITE_URL || "https://noelsbarbershop.co.za"
  ),
  title: "Noel's Barbershop & Lifestyle | Barber Shop in Birnam, Johannesburg",
  description:
    "Hair dressing, massage, pedicure and manicure services in Birnam, Johannesburg. Book easily on WhatsApp.",
  keywords: [
    "barber",
    "barber shop",
    "haircut",
    "hair dressing",
    "massage",
    "pedicure",
    "manicure",
    "grooming",
    "Birnam",
    "Melrose Crossing",
    "Johannesburg",
  ],
  openGraph: {
    title: "Noel's Barbershop & Lifestyle | Barber Shop in Birnam, Johannesburg",
    description:
      "Hair dressing, massage, pedicure and manicure services in Birnam, Johannesburg. Book easily on WhatsApp.",
    url: "https://noelsbarbershop.co.za",
    siteName: "Noel's Barbershop & Lifestyle",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/images/storefront.webp",
        width: 1200,
        height: 630,
        alt: "Noel's Barbershop & Lifestyle in Birnam, Johannesburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noel's Barbershop & Lifestyle | Barber Shop in Birnam, Johannesburg",
    description:
      "Hair dressing, massage, pedicure and manicure services in Birnam, Johannesburg.",
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
