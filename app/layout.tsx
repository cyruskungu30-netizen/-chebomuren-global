 import type { Metadata } from "next";

import "./globals.css";

import UbuntuShell from "@/components/UbuntuShell";
import UbuntuFooter from "@/components/UbuntuFooter";
import ScrollToTop from "@/components/ScrollToTop";
import WishlistProvider from "@/components/WishlistProvider";
import UbuntuAccessibility from "@/components/UbuntuAccessibility";
import UbuntuPerformance from "@/components/UbuntuPerformance";
import UbuntuStructuredData from "@/components/UbuntuStructuredData";
import UbuntuSecurity from "@/components/UbuntuSecurity";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://ubuntu-couture-house.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ubuntu Couture House",
    template: "%s | Ubuntu Couture House",
  },

  description:
    "African Elegance and Luxury Reimagined. Discover couture fashion, contemporary jewellery, rare gems, reimagined Maasai beadwork, and royal headpieces from Ubuntu Couture House.",

  keywords: [
    "Ubuntu Couture House",
    "African luxury fashion",
    "African couture",
    "Kenyan fashion",
    "African jewellery",
    "Maasai beadwork",
    "cow horn jewellery",
    "rare gems",
    "African headpieces",
    "luxury fashion house",
  ],

  applicationName: "Ubuntu Couture House",

  authors: [
    {
      name: "Ubuntu Couture House",
    },
  ],

  creator: "Ubuntu Couture House",

  publisher: "Ubuntu Couture House",

  openGraph: {
    title: "Ubuntu Couture House",
    description:
      "African Elegance and Luxury Reimagined.",
    siteName: "Ubuntu Couture House",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/ubuntu-global-lookbook.jpeg",
        width: 1200,
        height: 800,
        alt: "Ubuntu Couture House",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ubuntu Couture House",
    description:
      "African Elegance and Luxury Reimagined.",
    images: ["/images/ubuntu-global-lookbook.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <UbuntuPerformance />

        <UbuntuStructuredData />

        <UbuntuSecurity />

        <WishlistProvider>
          <UbuntuShell>
            {children}
          </UbuntuShell>

          <UbuntuFooter />

          <ScrollToTop />

          <UbuntuAccessibility />
        </WishlistProvider>
      </body>
    </html>
  );
}